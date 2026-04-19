"use server";

import { createClient } from '@supabase/supabase-js';

// Simulated Server Action for Next.js 
// In a real Next.js app, this would run securely on the server and use cookies
export async function submitBookingAction(formData: FormData) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    return { success: false, error: 'Supabase credentials not configured' };
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const bookingData = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    event_type: formData.get('eventType'),
    date: formData.get('date'),
    guests: formData.get('guests'),
    budget: formData.get('budget'),
    created_at: new Date().toISOString(),
  };

  try {
    const { error } = await supabase
      .from('bookings')
      .insert([bookingData]);

    if (error) throw error;
    
    return { success: true };
  } catch (err: any) {
    console.error('Booking insertion failed:', err);
    return { success: false, error: err.message };
  }
}
