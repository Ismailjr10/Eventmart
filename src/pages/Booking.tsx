import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { CalendarCheck, ShieldCheck } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function Booking() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [searchParams] = useSearchParams();
  const serviceQuery = searchParams.get('service') || '';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const bookingData = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      event_type: formData.get('eventType'),
      date: formData.get('date'),
      guests: formData.get('guests'),
      budget: formData.get('budget'),
    };

    try {
      // Direct client-side insert for Vite SPA preview
      // In Next.js, you would use the Server Action from src/lib/server-actions.ts
      
      // We check if it is a placeholder URL to avoid throwing real errors during preview without keys
      if (import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY) {
         const { error } = await supabase.from('bookings').insert([bookingData]);
         if (error) throw error;
      } else {
         // Simulate network delay if Supabase isn't configured yet
         await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
     <div className="bg-[#FAFAFA] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-primary mb-4 font-bold"
          >
            Request a Quote
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto font-light"
          >
             Provide details about your upcoming event, and our team will get back to you with a customized proposal.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
               {/* Personal Details */}
               <div className="space-y-6">
                 <div>
                    <h3 className="text-lg font-serif font-semibold text-primary border-b border-gray-100 pb-2 mb-4">Personal Details</h3>
                 </div>
                 <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="John Doe" />
                 </div>
                 <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="09012345678" />
                 </div>
               </div>

               {/* Event Details */}
               <div className="space-y-6">
                 <div>
                    <h3 className="text-lg font-serif font-semibold text-primary border-b border-gray-100 pb-2 mb-4">Event Details</h3>
                 </div>
                 <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                    <select id="eventType" name="eventType" required defaultValue={serviceQuery} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-white">
                      <option value="">Select an event type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Corporate">Corporate Event</option>
                      <option value="Catering Only">Catering Only</option>
                      <option value="Decoration Only">Decoration Only</option>
                      <option value="Other">Other</option>
                    </select>
                 </div>
                 <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                    <input type="date" id="date" name="date" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" />
                 </div>
               </div>

               {/* Logistics & Budget */}
               <div className="space-y-6 md:col-span-2 mt-4">
                 <div>
                    <h3 className="text-lg font-serif font-semibold text-primary border-b border-gray-100 pb-2 mb-4">Logistics & Budget</h3>
                 </div>
                 <div className="grid md:grid-cols-2 gap-8">
                   <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">Estimated Number of Guests</label>
                      <select id="guests" name="guests" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-white">
                        <option value="">Select range</option>
                        <option value="50-100">50 - 100</option>
                        <option value="100-300">100 - 300</option>
                        <option value="300-500">300 - 500</option>
                        <option value="500-1000">500 - 1000</option>
                        <option value="1000+">1000+</option>
                      </select>
                   </div>
                   <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Estimated Budget Range (₦)</label>
                      <select id="budget" name="budget" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-white">
                        <option value="">Select estimated budget</option>
                        <option value="Below 500k">Below ₦500k</option>
                        <option value="500k-1M">₦500k - ₦1M</option>
                        <option value="1M-3M">₦1M - ₦3M</option>
                        <option value="3M-5M">₦3M - ₦5M</option>
                        <option value="5M+">₦5M+</option>
                      </select>
                   </div>
                 </div>
               </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-primary-light text-white px-6 py-4 rounded-xl font-medium transition-colors border border-primary disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_14px_0_rgba(49,27,107,0.39)]"
              >
                {status === 'submitting' ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Submit Quote Request</span>
                    <CalendarCheck className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
              <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-500 font-light">
                 <ShieldCheck className="w-4 h-4 text-green-500" />
                 <span>Your information is secure and confidential.</span>
              </div>
            </div>

            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl text-center shadow-sm"
              >
                <h4 className="font-semibold mb-1">Quote Request Sent!</h4>
                <p className="text-sm font-light">Thank you for choosing EventMart. Our team will contact you shortly to discuss your event.</p>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl text-center shadow-sm"
              >
                <h4 className="font-semibold mb-1">Submission Failed</h4>
                <p className="text-sm font-light">There was an issue submitting your request. Please ensure Supabase credentials are configured or try contacting us directly.</p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
