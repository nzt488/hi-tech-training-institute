'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000); // Reset after 5s
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      {/* Page Header */}
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have questions about our courses or admissions? We're here to help. Reach out to us using the contact details below or fill out the form.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl h-full border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Visit Us</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Shop No. 101, Industrial Tech Hub, <br />
                      Ulhasnagar, Maharashtra 421004, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Call Us</h3>
                    <div className="flex flex-col space-y-1">
                      <a href="tel:+919876543210" className="text-slate-600 hover:text-blue-600 transition-colors">+91-9876543210 (Main)</a>
                      <a href="tel:+919876543211" className="text-slate-600 hover:text-blue-600 transition-colors">+91-9876543211 (Admissions)</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Email Us</h3>
                    <div className="flex flex-col space-y-1">
                      <a href="mailto:admissions@hitech-institute.in" className="text-slate-600 hover:text-blue-600 transition-colors">admissions@hitech-institute.in</a>
                      <a href="mailto:info@hitech-institute.in" className="text-slate-600 hover:text-blue-600 transition-colors">info@hitech-institute.in</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Working Hours</h3>
                    <p className="text-slate-600">
                      Monday to Saturday <br />
                      <span className="font-medium text-slate-800">4:00 PM - 9:30 PM</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg shadow-slate-200/40 border border-slate-100 relative overflow-hidden h-full">
              {/* Decorative background element */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center h-full text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600 max-w-xs mx-auto">
                      Thank you for reaching out. Our team will get back to you within 24 working hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="relative z-10 flex flex-col h-full"
                  >
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                    
                    <div className="space-y-5 flex-grow">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                        <textarea 
                          id="message" 
                          rows={4}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="mt-8 w-full flex items-center justify-center gap-2 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formState === 'submitting' ? (
                        <>Processing...</>
                      ) : (
                        <>Send Message <Send size={18} /></>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
