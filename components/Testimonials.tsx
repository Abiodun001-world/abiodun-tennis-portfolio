import React, { useState } from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const testimonial = TESTIMONIALS[index];

  return (
    <section className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
          Player Success Stories
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 mb-10">
          Real reviews from Google Business Profile
        </p>

        {/* Card */}
        <div className="relative bg-zinc-50 dark:bg-zinc-900 p-10 rounded-3xl shadow-lg">

          <Quote className="absolute top-6 right-6 text-zinc-200 dark:text-zinc-800 h-14 w-14" />

          {/* Rating */}
          <div className="flex justify-center gap-1 text-yellow-500 mb-4 text-lg">
            {'★★★★★'}
          </div>

          {/* Content */}
          <p className="text-zinc-700 dark:text-zinc-300 italic mb-6 leading-relaxed">
            "{testimonial.content}"
          </p>

          {/* Name */}
          <h4 className="font-bold text-zinc-900 dark:text-white">
            {testimonial.name}
          </h4>

          <span className="text-sm text-blue-600 font-semibold">
            {testimonial.role}
          </span>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="px-4 py-2 rounded-lg bg-zinc-200 dark:bg-zinc-800"
          >
            Prev
          </button>

          <button
            onClick={next}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white"
          >
            Next
          </button>
        </div>

        {/* Google Link */}
        <div className="mt-10">
          <a
            href="https://maps.app.goo.gl/dwm2GZ79KSCW6J6GA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            View all Google Reviews →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;