"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const CustomSelect = ({ options, value, onChange, placeholder, name }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="relative w-full">
        <div 
          className={`w-full px-4 py-3 rounded-xl border ${isOpen ? 'border-primary ring-1 ring-primary bg-white' : 'border-gray-200 bg-gray-50/30'} text-sm transition-all flex justify-between items-center cursor-pointer hover:border-gray-300`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block truncate ${value ? 'text-gray-900' : 'text-gray-500'}`}>
            {value || placeholder}
          </span>
          <motion.svg 
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </motion.svg>
        </div>
        
        {isOpen && (
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -5, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -5, scale: 0.98 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] max-h-60 overflow-y-auto py-2 outline-none"
            >
              {options.map((opt, i) => (
                <div 
                  key={i}
                  className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${value === opt ? 'bg-primary/5 text-primary font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                  onClick={() => {
                    onChange({ target: { name, value: opt } });
                    setIsOpen(false);
                  }}
                >
                  {opt}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    designation: '',
    email: '',
    phone: '',
    enquiryNature: '',
    requirement: '',
    source: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const enquiryOptions = [
    "Brand Consulting and Strategy",
    "Corporate Communication",
    "Digital Marketing and Social Media",
    "Public Relations and Media",
    "Video Production and Content",
    "Event Management and Activations",
    "Business Consulting and Market Research",
    "Website and Software Development",
    "Performance Marketing and SEO",
    "Celebrity Management",
    "The Snail Show Podcast or Newsletter",
    "Bio-Agri Next Conference",
    "Brand R.Comm Summit",
    "Partnership or Collaboration",
    "General Enquiry"
  ];

  const sourceOptions = [
    "Google Search",
    "LinkedIn",
    "Referral from a colleague or partner",
    "Brand R.Comm Summit",
    "The Snail Show Podcast",
    "The Snail Show Newsletter",
    "Industry event or conference",
    "Direct outreach from Snail Integral",
    "Other"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare the data matching your EmailJS template variables
      const templateParams = {
        from_name: formData.fullName,
        organization: formData.organization,
        designation: formData.designation || 'Not specified',
        reply_to: formData.email,
        phone: formData.phone,
        enquiry_nature: formData.enquiryNature,
        source: formData.source || 'Not specified',
        message: formData.requirement || 'Not specified',
      };

      // Using environment variables for EmailJS credentials
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        organization: '',
        designation: '',
        email: '',
        phone: '',
        enquiryNature: '',
        requirement: '',
        source: ''
      });
    } catch (error) {
      console.error('FAILED...', error);
      setIsSubmitting(false);
      alert("Failed to send the message. Please try again later.");
    }
  };

  return (
    <section id="contact-form" className="w-full bg-white text-gray-900 py-20 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4"
          >
            Send Us a Message
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Fill in the details below and the right person from our team will get back to you within one business day. If your matter is urgent, we recommend calling us directly on the numbers listed above.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_10px_50px_rgba(0,0,0,0.03)] border border-gray-100 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Field 1: Full Name */}
                  <div className="flex flex-col">
                    <label htmlFor="fullName" className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all bg-gray-50/30"
                    />
                  </div>

                  {/* Field 2: Organization */}
                  <div className="flex flex-col">
                    <label htmlFor="organization" className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Your Organization <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Company or organization name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all bg-gray-50/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Field 3: Designation */}
                  <div className="flex flex-col">
                    <label htmlFor="designation" className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Your Designation
                    </label>
                    <input 
                      type="text"
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="Your role or title"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all bg-gray-50/30"
                    />
                  </div>

                  {/* Field 4: Email */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your work email address"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all bg-gray-50/30"
                    />
                  </div>

                  {/* Field 5: Phone Number */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your contact number with country code"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all bg-gray-50/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Field 6: Nature of Enquiry */}
                  <div className="flex flex-col">
                    <label htmlFor="enquiryNature" className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Nature of Enquiry <span className="text-red-500">*</span>
                    </label>
                    <CustomSelect
                      name="enquiryNature"
                      value={formData.enquiryNature}
                      onChange={handleChange}
                      options={enquiryOptions}
                      placeholder="Select enquiry type"
                    />
                  </div>

                  {/* Field 8: How Did You Hear About Us */}
                  <div className="flex flex-col">
                    <label htmlFor="source" className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      How Did You Hear About Us
                    </label>
                    <CustomSelect
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      options={sourceOptions}
                      placeholder="Select an option"
                    />
                  </div>
                </div>

                {/* Field 7: Requirement */}
                <div className="flex flex-col">
                  <label htmlFor="requirement" className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Tell Us About Your Requirement
                  </label>
                  <textarea 
                    id="requirement"
                    name="requirement"
                    rows="4"
                    value={formData.requirement}
                    onChange={handleChange}
                    placeholder="Briefly describe what you are looking for. The more context you share, the better we can prepare for the conversation."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all bg-gray-50/30 resize-y"
                  />
                  <p className="text-[11px] text-gray-400 mt-1.5">
                    No minimum required but 100 to 300 words is most helpful for us to respond meaningfully.
                  </p>
                </div>

                {/* Submit button & Reassurance */}
                <div className="pt-4 flex flex-col items-center gap-4 text-center">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-10 py-4 bg-primary text-white font-semibold rounded-full text-sm shadow-md hover:bg-primary-hover hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-[1px]"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                  <p className="text-xs text-gray-400 max-w-md font-light leading-relaxed">
                    We respond to every message within one business day. Your information is kept strictly confidential and will not be shared with any third party.
                  </p>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12 px-6 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully</h3>
                <p className="text-gray-600 max-w-xl mx-auto leading-relaxed mb-6 font-light">
                  Thank you for reaching out to Snail Integral. We have received your message and a member of our team will be in touch with you within one business day. If you need to speak with someone sooner, please email us directly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 border border-gray-200 text-gray-500 hover:text-gray-900 rounded-full text-xs font-semibold hover:bg-gray-50 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
