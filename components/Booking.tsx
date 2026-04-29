import React from 'react';
import { Calendar } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <section id="booking" className="scroll-mt-24 py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold mb-4">
            <Calendar size={16} />
            Online Scheduling
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">Reserve Your Court Time</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Ready to train? Select a slot that works for you. Private lessons, clinics, and group sessions can all be managed right here.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Decorative Gradient Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-3xl blur opacity-25 dark:opacity-40"></div>
          
          <div className="relative bg-white dark:bg-zinc-900 rounded-3xl shadow-xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 text-center">
            <h3 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">Secure Your Next Session</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              We use an external scheduling system to ensure smooth booking and real-time availability. Click the button below to view my calendar and book your spot.
            </p>
            <a 
              href="https://vev.co/abiodun-tennis-academy-ng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-lg active:scale-95"
            >
              <Calendar className="w-6 h-6" />
              Book Online Now
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Powered by Vev • Secure Booking System
        </div>
      </div>
    </section>
  );
};

export default Booking;