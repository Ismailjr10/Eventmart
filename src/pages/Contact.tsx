import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Simulate network request to generic email service without triggering web3 extensions
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-primary mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-2xl mx-auto"
          >
            We'd love to hear from you. Reach out to discuss your upcoming event, or just to say hello.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10 bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100"
          >
            <div>
               <h3 className="text-2xl font-serif text-primary mb-8">Contact Information</h3>
            </div>
            <div className="flex items-start space-x-5">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-slate-800 font-bold mb-1">Phone</h4>
                <a href="tel:09165315436" className="text-slate-600 hover:text-secondary transition-colors">09165315436</a>
              </div>
            </div>
            
            <div className="flex items-start space-x-5">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-slate-800 font-bold mb-1">Email</h4>
                <a href="mailto:eventmart.ng@gmail.com" className="text-slate-600 hover:text-secondary transition-colors break-all">eventmart.ng@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-start space-x-5">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-slate-800 font-bold mb-1">Location</h4>
                <p className="text-slate-600">Minna, Niger State, Nigeria</p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-100">
               <p className="text-sm text-slate-500 italic">Currently serving all locations within Niger State and its environs.</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all" placeholder="09012345678" />
                </div>
              </div>
              
              <div>
                <label htmlFor="eventType" className="block text-sm font-bold text-slate-700 mb-2">Event Type</label>
                <select id="eventType" name="eventType" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all bg-white">
                  <option value="">Select an event type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Corporate">Corporate Event</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all resize-none" placeholder="Tell us a bit about what you need..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-primary-light text-white px-6 py-4 rounded-xl font-bold transition-colors disabled:opacity-70"
              >
                {status === 'submitting' ? (
                  <span>Sending rather...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl text-sm text-center font-bold">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm text-center font-bold">
                  Oops! Something went wrong. Please try again or contact us via phone.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
