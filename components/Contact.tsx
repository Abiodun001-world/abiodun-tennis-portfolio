import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mknlawwe';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError('Failed to send message. Please try again or contact me directly via email.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">Get In Touch</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
              Ready to take your game to the next level? Fill out the form or reach out directly via social media to book your first session.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-300">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-zinc-800 flex items-center justify-center text-blue-600">
                  <Mail size={20} />
                </div>
                <a href="mailto:abiodunadekunle354@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  abiodunadekunle354@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-300">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-zinc-800 flex items-center justify-center text-blue-600">
                  <MapPin size={20} />
                </div>
                <span>Ibadan, Nigeria (Available for Travel and Relocation)</span>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Connect Socially</h3>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-all shadow-sm border border-zinc-200 dark:border-zinc-700"
                      aria-label={link.platform}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-zinc-800 rounded-3xl p-8 shadow-xl border border-zinc-100 dark:border-zinc-700">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-zinc-500">I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-900 dark:text-white transition-all"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-900 dark:text-white transition-all"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-900 dark:text-white transition-all resize-none"
                    placeholder="I'm interested in..."
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>
                {error && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-xl hover:bg-blue-600 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;