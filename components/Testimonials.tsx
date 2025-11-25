import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Player Success Stories</h2>
          <p className="text-zinc-600 dark:text-zinc-400">See what players and parents have to say about training with Coach Abiodun.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-3xl relative">
              <Quote className="absolute top-8 right-8 text-zinc-200 dark:text-zinc-800 h-12 w-12" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-zinc-700 shadow-md" 
                />
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white">{testimonial.name}</h4>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{testimonial.role}</span>
                </div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 italic leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;