
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { SERVICES, FAQS, HOURS } from '../constants';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: "Hi! I'm Reuben's AI assistant. How can I help you today? You can ask about our services, prices, or availability." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const context = `
        You are an AI assistant for "Reuben's Odd Jobs", a local service in Albury. 
        Information about the business:
        - Services: ${SERVICES.map(s => `${s.name}: ${s.priceRange} (${s.details}). Notes: ${s.notes || 'None'}`).join('; ')}
        - FAQs: ${FAQS.map(f => `Q: ${f.question} A: ${f.answer}`).join('; ')}
        - Hours: Term Week: ${HOURS.schoolTerm.map(h => `${h.day}: ${h.hours}`).join(', ')}. 
          Holidays: ${HOURS.holidays.map(h => `${h.day}: ${h.hours}`).join(', ')}.
        - Special Closures: ${HOURS.closures.map(c => c.event).join(', ')}.
        - Contact: reubensoddjobsalbury@gmail.com
        - Tagline: "Helping you with tasks big and small!"
        - Note: Prices are guide/negotiable.
        
        Rules:
        1. Be friendly, professional, and helpful.
        2. Keep answers concise.
        3. If you don't know the answer based on the provided info, suggest they email the business.
        4. Refer to Reuben in the third person.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: context,
        }
      });

      const aiText = response.text || "I'm sorry, I couldn't process that. Please contact Reuben directly!";
      setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'assistant', text: "Sorry, I'm having trouble connecting right now. Please try again or email us!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="w-80 md:w-96 h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden mb-4 animate-scale-up">
          <div className="bg-indigo-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">🤖</div>
              <div>
                <h4 className="font-bold text-sm">Odd Jobs Assistant</h4>
                <p className="text-[10px] text-indigo-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
              ✕
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 px-4 py-2 rounded-2xl text-slate-400 text-xs flex gap-1">
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce delay-100">.</span>
                  <span className="animate-bounce delay-200">.</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 bg-white">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a question..."
                className="w-full pl-4 pr-12 py-3 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className="absolute right-2 top-1.5 w-9 h-9 bg-indigo-600 text-white rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-colors disabled:bg-slate-300"
              >
                ↑
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-xl transition-all duration-300 active:scale-95 ${
          isOpen ? 'bg-slate-900 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-500/40'
        }`}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      <style>{`
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-scale-up {
          animation: scale-up 0.25s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AIAssistant;
