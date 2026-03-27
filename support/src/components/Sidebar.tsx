import { MessageCircle, HelpCircle } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <HelpCircle className="h-5 w-5 mr-2 text-blue-500" />
          Quick Access
        </h3>
        <ul className="space-y-3">
          <li>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 flex items-center transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
              Most common questions (FAQs)
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 flex items-center transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
              How to track my request
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 flex items-center transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
              Pricing and estimates
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider shadow-sm">
          Coming Soon
        </div>
        <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center mt-1">
          <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
          Live Chat
        </h3>
        <p className="text-sm text-blue-700">
          We're working hard to bring you 24/7 live chat support. Stay tuned for instant assistance!
        </p>
      </div>
    </div>
  );
}
