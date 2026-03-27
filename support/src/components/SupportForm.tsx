import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, ChevronRight, Upload, AlertCircle, ArrowLeft, Check } from 'lucide-react';
import { categories } from '../data/categories';

type Step = 1 | 2 | 3 | 4; // 4 is success

export default function SupportForm() {
  const [step, setStep] = useState<Step>(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  
  // Form Data
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [urgency, setUrgency] = useState('Medium');
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCategoryClick = (categoryId: string) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };

  const handleOptionSelect = (categoryId: string, option: string) => {
    setSelectedCategory(categoryId);
    setSelectedOption(option);
    setStep(2);
    window.scrollTo({ top: document.getElementById('support-form')?.offsetTop! - 100, behavior: 'smooth' });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    window.scrollTo({ top: document.getElementById('support-form')?.offsetTop! - 100, behavior: 'smooth' });
  };

  const handleFinalSubmit = () => {
    // Here you would typically send data to your backend or EmailJS
    console.log({
      category: selectedCategory,
      option: selectedOption,
      description,
      name,
      email,
      phone,
      urgency,
      file: file?.name
    });
    setStep(4);
    window.scrollTo({ top: document.getElementById('support-form')?.offsetTop! - 100, behavior: 'smooth' });
  };

  const getCategoryTitle = (id: string) => categories.find(c => c.id === id)?.title;

  return (
    <div id="support-form" className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Progress Bar */}
      {step < 4 && (
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between max-w-2xl mx-auto relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 z-0"></div>
            <div 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-600 z-0 transition-all duration-500 ease-in-out"
              style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
            ></div>
            
            {[1, 2, 3].map((s) => (
              <div key={s} className="relative z-10 flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-colors duration-300 ${
                  step > s ? 'bg-blue-600 text-white' : step === s ? 'bg-blue-600 text-white ring-4 ring-blue-100' : 'bg-white border-2 border-gray-300 text-gray-400'
                }`}>
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </div>
                <span className={`mt-2 text-xs font-medium ${step >= s ? 'text-blue-600' : 'text-gray-400'}`}>
                  {s === 1 ? 'Category' : s === 2 ? 'Details' : 'Review'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          {/* STEP 1: Choose a Category */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose a Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isExpanded = expandedCategory === category.id;
                  
                  return (
                    <div 
                      key={category.id} 
                      id={`category-${category.id}`}
                      className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                        isExpanded ? 'border-blue-500 ring-1 ring-blue-500 shadow-md' : 'border-gray-200 hover:border-blue-300 hover:shadow-sm'
                      }`}
                    >
                      <button
                        onClick={() => handleCategoryClick(category.id)}
                        className="w-full flex items-center p-4 bg-white text-left focus:outline-none"
                      >
                        <div className={`p-3 rounded-lg mr-4 ${isExpanded ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 font-semibold text-gray-900">{category.title}</div>
                        <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-gray-50 border-t border-gray-100"
                          >
                            <ul className="py-2">
                              {category.options.map((option, idx) => (
                                <li key={idx}>
                                  <button
                                    onClick={() => handleOptionSelect(category.id, option)}
                                    className="w-full text-left px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors flex items-center"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></span>
                                    {option}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 2: Provide Details */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <button 
                  onClick={() => setStep(1)}
                  className="mr-4 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Provide Details</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {getCategoryTitle(selectedCategory!)} &gt; {selectedOption}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmitDetails} className="space-y-6">
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Describe your issue or question <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Please provide as much detail as possible..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value)}
                    >
                      <option value="Low">Low - No rush</option>
                      <option value="Medium">Medium - Need help soon</option>
                      <option value="High">High - Urgent assistance needed</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Attachments (Optional)
                  </label>
                  <div 
                    className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600 justify-center">
                        <span className="relative cursor-pointer bg-transparent rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                          <span>Upload a file</span>
                          <input 
                            id="file-upload" 
                            name="file-upload" 
                            type="file" 
                            className="sr-only" 
                            ref={fileInputRef}
                            onChange={handleFileChange}
                          />
                        </span>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, PDF up to 10MB
                      </p>
                      {file && (
                        <p className="text-sm font-medium text-green-600 mt-2 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 mr-1" /> {file.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Continue to Review
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* STEP 3: Review & Submit */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <button 
                  onClick={() => setStep(2)}
                  className="mr-4 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <h2 className="text-2xl font-bold text-gray-900">Review & Submit</h2>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">Request Summary</h3>
                
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Category</dt>
                    <dd className="mt-1 text-sm text-gray-900 font-medium">{getCategoryTitle(selectedCategory!)} &gt; {selectedOption}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Description</dt>
                    <dd className="mt-1 text-sm text-gray-900 whitespace-pre-wrap bg-white p-4 rounded-lg border border-gray-100">{description}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                    <dd className="mt-1 text-sm text-gray-900">{name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900">{email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="mt-1 text-sm text-gray-900">{phone}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Urgency</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        urgency === 'High' ? 'bg-red-100 text-red-800' : 
                        urgency === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-green-100 text-green-800'
                      }`}>
                        {urgency}
                      </span>
                    </dd>
                  </div>
                  {file && (
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">Attachment</dt>
                      <dd className="mt-1 text-sm text-gray-900 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {file.name}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4 sm:mb-0 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-2 text-blue-500" />
                  Please review your details before submitting.
                </p>
                <button
                  onClick={handleFinalSubmit}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit Request
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Success */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-12"
            >
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Thank you!</h2>
              <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
                Your request has been successfully submitted. Our team will contact you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setStep(1);
                  setSelectedCategory(null);
                  setSelectedOption(null);
                  setDescription('');
                  setFile(null);
                }}
                className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Submit Another Request
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
