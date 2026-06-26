"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
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
    }, 1200);
  };

  return (
    <section className="w-full bg-gray-50 text-gray-900 py-20 px-6 md:px-8">
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
                    <select
                      id="enquiryNature"
                      name="enquiryNature"
                      value={formData.enquiryNature}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all bg-gray-50/30 appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'></path></svg>")`, backgroundPosition: 'right 16px center', backgroundSize: '16px', backgroundRepeat: 'no-repeat' }}
                    >
                      <option value="" disabled>Select enquiry type</option>
                      {enquiryOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Field 8: How Did You Hear About Us */}
                  <div className="flex flex-col">
                    <label htmlFor="source" className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      How Did You Hear About Us
                    </label>
                    <select
                      id="source"
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all bg-gray-50/30 appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'></path></svg>")`, backgroundPosition: 'right 16px center', backgroundSize: '16px', backgroundRepeat: 'no-repeat' }}
                    >
                      <option value="">Select an option</option>
                      {sourceOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
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
                  Thank you for reaching out to Snail Integral. We have received your message and a member of our team will be in touch with you within one business day. If you need to speak with someone sooner, please call us directly on <a href="tel:+918750807676" className="text-primary hover:underline font-medium">plus 91 8750807676</a>.
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
