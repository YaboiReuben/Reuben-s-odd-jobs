import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  Search,
  ChevronRight,
  Upload,
  ArrowLeft,
  CheckCircle2,
  Menu,
  X,
  ArrowUp,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  FileText,
  HelpCircle,
} from 'lucide-react';
import { categories } from './data';

const FAQItem = ({ question, children }: { question: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pt-4 first:pt-0 border-t first:border-t-0 border-slate-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex items-start focus:outline-none group"
      >
        <ChevronRight className={`w-4 h-4 mr-1 mt-0.5 flex-shrink-0 text-blue-600 transition-transform duration-200 ${isOpen ? 'rotate-90' : 'group-hover:translate-x-0.5'}`} />
        <span className="text-sm font-bold text-slate-800">{question}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
        <div className="pl-5 text-sm text-slate-600 space-y-3 pb-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Form State
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubOption, setSelectedSubOption] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    description: '',
    name: '',
    email: '',
    urgency: 'Low',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelect = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  const handleSubOptionSelect = (option: string) => {
    setSelectedSubOption(option);
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const templateParams = {
        category: activeCategory?.title || 'Unknown',
        sub_option: selectedSubOption || 'Unknown',
        description: formData.description,
        name: formData.name,
        email: formData.email,
        urgency: formData.urgency,
      };

      // Send to Discord Webhook
      const discordPayload = {
        content: `**New Support Request**\n**Category:** ${activeCategory?.title || 'Unknown'}\n**Sub-option:** ${selectedSubOption || 'Unknown'}\n**Name:** ${formData.name}\n**Email:** ${formData.email}\n**Urgency:** ${formData.urgency}\n**Description:**\n${formData.description}`
      };
      
      try {
        await fetch('https://discord.com/api/webhooks/1486673329808212049/JQ7ftyNJlDXCFxgU4TDT6b0fPHr0hthJ48Zc24awRJdirRSyr1bp2NHL5M41zH-sh-LR', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(discordPayload)
        });
      } catch (e) {
        console.error('Discord webhook failed', e);
      }

      await emailjs.send(
        'service_uwowb4s',
        'template_evnhpqm',
        templateParams,
        '1p2NQJD_GLjYIUxEm'
      );

      setStep(4);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setSelectedCategory(null);
    setSelectedSubOption(null);
    setFormData({
      description: '',
      name: '',
      email: '',
      urgency: 'Low',
    });
    setFile(null);
    setSubmitError(null);
  };

  const activeCategory = categories.find(c => c.id === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#" className="flex-shrink-0 flex items-center gap-2" onClick={(e) => { e.preventDefault(); resetForm(); }}>
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  R
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-900">Reubens Odd Jobs</span>
              </a>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-blue-600 font-medium transition-colors">Support</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">FAQ</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 bg-blue-50">Support</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50">FAQ</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              How can we help you today?
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
              Select a category below to start your request and get the support you need quickly.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col lg:flex-row gap-8">
          
          {/* Form Area */}
          <div className={`flex-grow ${step === 1 ? 'lg:w-2/3' : 'w-full max-w-3xl mx-auto'}`}>
            
            {/* Progress Bar */}
            {step < 4 && (
              <div className="mb-8">
                <div className="flex items-center justify-between relative">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-slate-200 rounded-full z-0"></div>
                  <div 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-600 rounded-full z-0 transition-all duration-300"
                    style={{ width: `${((step - 1) / 2) * 100}%` }}
                  ></div>
                  
                  {[1, 2, 3].map((s) => (
                    <div key={s} className={`relative z-10 flex flex-col items-center ${step >= s ? 'text-blue-600' : 'text-slate-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors duration-300 bg-white
                        ${step > s ? 'border-blue-600 bg-blue-600 text-white' : step === s ? 'border-blue-600 text-blue-600' : 'border-slate-300 text-slate-400'}`}
                      >
                        {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                      </div>
                      <span className="text-xs font-medium mt-2 hidden sm:block">
                        {s === 1 ? 'Category' : s === 2 ? 'Details' : 'Review'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              
              {/* Step 1: Choose a Category */}
              {step === 1 && (
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Step 1: Choose a Category</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      const isSelected = selectedCategory === category.id;
                      return (
                        <div key={category.id} className="flex flex-col">
                          <button
                            onClick={() => handleCategorySelect(category.id)}
                            className={`flex items-center p-4 rounded-xl border-2 text-left transition-all duration-200
                              ${isSelected 
                                ? 'border-blue-600 bg-blue-50 shadow-sm' 
                                : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'}`}
                          >
                            <div className={`p-3 rounded-lg mr-4 ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div className="flex-grow font-semibold text-slate-800">
                              {category.title}
                            </div>
                            <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${isSelected ? 'rotate-90 text-blue-600' : 'text-slate-400'}`} />
                          </button>
                          
                          {/* Accordion Sub-options */}
                          {isSelected && (
                            <div className="mt-2 ml-4 pl-4 border-l-2 border-blue-200 space-y-2 py-2 animate-in slide-in-from-top-2 fade-in duration-200">
                              {category.options.map((option, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => handleSubOptionSelect(option)}
                                  className="block w-full text-left px-4 py-3 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm font-medium"
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Provide Details */}
              {step === 2 && (
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <button 
                      onClick={() => setStep(1)}
                      className="mr-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-900">Step 2: Provide Details</h2>
                  </div>
                  
                  <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100 flex items-start">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3 mt-0.5">
                      {activeCategory && <activeCategory.icon className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">{activeCategory?.title}</p>
                      <p className="text-slate-800 font-medium">{selectedSubOption}</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmitDetails} className="space-y-6">
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
                        Describe your issue or question <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        required
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                        placeholder="Please provide as much detail as possible..."
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        File Upload (Optional)
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-xl hover:bg-slate-50 transition-colors">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-slate-400" />
                          <div className="flex text-sm text-slate-600 justify-center">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                            >
                              <span>Upload a file</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-slate-500">
                            PNG, JPG, PDF up to 10MB
                          </p>
                          {file && (
                            <p className="text-sm font-medium text-green-600 mt-2">
                              Selected: {file.name}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-slate-700 mb-1">
                        Urgency Level
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow bg-white"
                      >
                        <option value="Low">Low - Whenever possible</option>
                        <option value="Medium">Medium - Within a few days</option>
                        <option value="High">High - As soon as possible</option>
                      </select>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="submit"
                        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-sm"
                      >
                        Continue to Review
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 3: Review & Submit */}
              {step === 3 && (
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <button 
                      onClick={() => setStep(2)}
                      className="mr-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-900">Step 3: Review & Submit</h2>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-6">
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Request Type</h3>
                      <div className="flex items-center">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
                          {activeCategory && <activeCategory.icon className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{activeCategory?.title}</p>
                          <p className="text-slate-600">{selectedSubOption}</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-6">
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Description</h3>
                      <p className="text-slate-800 whitespace-pre-wrap">{formData.description}</p>
                      {file && (
                        <div className="mt-3 flex items-center text-sm text-blue-600 font-medium">
                          <FileText className="w-4 h-4 mr-2" />
                          Attached: {file.name}
                        </div>
                      )}
                    </div>

                    <div className="border-t border-slate-200 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Contact Info</h3>
                        <p className="text-slate-800 font-medium">{formData.name}</p>
                        <p className="text-slate-600">{formData.email}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Urgency</h3>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                          ${formData.urgency === 'High' ? 'bg-red-100 text-red-800' : 
                            formData.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-green-100 text-green-800'}`}
                        >
                          {formData.urgency}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col items-end">
                    {submitError && (
                      <p className="text-red-600 mb-4 font-medium">{submitError}</p>
                    )}
                    <button
                      onClick={handleFinalSubmit}
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md text-lg w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Success */}
              {step === 4 && (
                <div className="p-10 sm:p-16 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Thank you!</h2>
                  <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
                    Your request has been successfully submitted. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          {step === 1 && (
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Live Support
                </h3>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4">
                  <div className="flex items-center text-blue-700 font-bold text-sm mb-1">
                    <span className="relative flex h-2.5 w-2.5 mr-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                    </span>
                    Coming Soon
                  </div>
                  <p className="text-blue-600/80 text-xs font-medium leading-relaxed">
                    We're working hard to bring you real-time chat support. Check back later!
                  </p>
                </div>
              </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                Common Questions
              </h3>
              <div className="space-y-0">
                <FAQItem question="How long does it take to get a response?">
                  <p>We typically respond during our operating hours:</p>
                  
                  <div>
                    <strong className="text-slate-700 block mb-1">School Term:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Monday: 4:00 PM – 8:00 PM</li>
                      <li>Tue – Wed: Closed (After school)</li>
                      <li>Thursday: 4:00 PM – 8:00 PM</li>
                      <li>Friday: 4:00 PM – 9:00 PM</li>
                    </ul>
                  </div>

                  <div>
                    <strong className="text-slate-700 block mb-1">School Holiday:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Mon – Fri: 10:00 AM – 6:00 PM</li>
                    </ul>
                  </div>

                  <div>
                    <strong className="text-slate-700 block mb-1">Weekends:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Sat – Sun: 8:00 AM – 10:00 PM</li>
                    </ul>
                  </div>

                  <div>
                    <strong className="text-slate-700 block mb-1">Special Closures:</strong>
                    <p>Christmas Eve 🎄, Christmas Day 🎅, New Year’s Eve 🎆, New Year’s Day 🎉, Easter Sunday 🐣, Good Friday ✝️</p>
                  </div>
                </FAQItem>

                <FAQItem question="What payment methods do you accept?">
                  <p>We currently accept cash only.</p>
                </FAQItem>
              </div>
            </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  R
                </div>
                <span className="font-bold text-xl tracking-tight text-white">Reubens Odd Jobs</span>
              </div>
              <p className="text-sm text-slate-400 max-w-sm">
                Providing reliable, professional odd job services and support when you need it most.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; 2026 Reubens Odd Jobs. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}
