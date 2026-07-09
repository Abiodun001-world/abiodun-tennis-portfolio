import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Who are your tennis lessons for?",
    answer:
      "My coaching is open to everyone-children, teenagers, adults, beginners, intermediate players, and competitive players looking to improve their game.",
  },
  {
    question: "Where do you coach tennis?",
    answer:
      "I currently coach at Adamasingba Stadium in Ibadan. As a freelance tennis coach, I am also available to coach at any suitable tennis court within Ibadan based on your preference.",
  },
  {
    question: "Do I need to have my own tennis racket?",
    answer:
      "No. If you're just getting started, I can provide guidance on equipment and, where available, a racket for your first lesson. I'll also help you choose the right racket if you decide to buy one.",
  },
  {
    question: "How long is each lesson?",
    answer:
      "Most private coaching sessions last between 1 and 2 hours depending on your training goals. Group sessions and special programs may have different durations.",
  },
  {
    question: "Do you offer coaching for complete beginners?",
    answer:
      "Absolutely! Many of my students begin with no previous tennis experience. I will guide you step by step, from the basic grip and footwork to serving, rallying, and match play.",
  },
  {
    question: "Can you coach children?",
    answer:
      "Yes. I provide junior tennis coaching in a fun, safe, and structured environment that helps children develop strong fundamentals while enjoying the game.",
  },
  {
    question: "Do you offer private and group lessons?",
    answer:
      "Yes. You can choose one-on-one private coaching for personalised improvement or group sessions for families, friends, schools, or clubs.",
  },
  {
    question: "How much do your lessons cost?",
    answer:
      "Pricing depends on the type of lesson. Private lessons, home coaching, online coaching, sparring sessions, and group training all have different rates. Please contact me for the latest pricing and available packages.",
  },
  {
    question: "How do I book a lesson?",
    answer:
      "You can contact me directly through the contact section of this website. We'll discuss your goals, choose a suitable location and time, and schedule your lesson.",
  },
  {
    question: "Do you only coach in Ibadan?",
    answer:
      "My primary coaching location is Ibadan. However, I am open to coaching opportunities outside Ibadan depending on the arrangement and schedule.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <section
      id="faq"
      className="scroll-mt-24 py-20 bg-white dark:bg-zinc-950"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold mb-4">
            <HelpCircle size={16} />
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Got Questions?
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Here are answers to some of the most common questions about my
            tennis coaching services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-lg text-zinc-900 dark:text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;