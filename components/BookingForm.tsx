
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { PaymentMethod } from '../types';

const BookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: '',
    firstName: '',
    lastName: '',
    email: '',
    details: '',
    preferredDateTime: '',
    paymentMethod: PaymentMethod.CASH
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="py-24 px-4 max-w-2xl mx-auto text-center">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 animate-bounce">
          ✓
        </div>
        <h3 className="text-3xl font-bold mb-4 text-slate-900">Thank you!</h3>
        <p className="text-xl text-slate-600 mb-10">We've received your booking request for <strong>{formData.serviceType}</strong>. We'll confirm your booking via email ({formData.email}) shortly.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-indigo-600 font-semibold hover:underline"
        >
          Need to book another task?
        </button>
      </div>
    );
  }

  return (
    <div className="py-24 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Book a Service 📋</h2>
        <p className="text-slate-600">Fill out the form below and we'll get back to you as soon as possible.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200 border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-full md:col-span-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Select Service Type</label>
            <select
              required
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            >
              <option value="">Choose a service...</option>
              {SERVICES.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
              <option value="Other">Other / Custom Task</option>
            </select>
          </div>

          <div className="col-span-full md:col-span-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Payment Method</label>
            <select
              required
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            >
              {Object.values(PaymentMethod).map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>

          <div className="col-span-full md:col-span-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          <div className="col-span-full md:col-span-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Date & Time</label>
            <input
              required
              type="text"
              name="preferredDateTime"
              value={formData.preferredDateTime}
              onChange={handleChange}
              placeholder="e.g., Next Saturday morning"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Task Details</label>
            <textarea
              required
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={4}
              placeholder="Please describe exactly what you need help with..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          <div className="col-span-full mt-4">
            <button
              disabled={loading}
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : null}
              {loading ? 'Submitting...' : 'Confirm Booking'}
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">
              By clicking "Confirm Booking", you agree to our guide prices and negotiable terms.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
