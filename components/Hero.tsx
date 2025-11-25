import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROFILE_IMAGE_URL, COACH_NAME, COACH_TITLE } from '../constants';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="z-10 order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
              {COACH_TITLE}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-white leading-tight mb-6">
              Master Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
                Game
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg leading-relaxed">
              Elevate your tennis skills with personalized coaching from {COACH_NAME}. 
              Whether you're a beginner or a competitive player, unlock your full potential on the court.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20">
                Book a Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#ai-coach" className="inline-flex justify-center items-center px-8 py-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 text-zinc-900 dark:text-white font-bold rounded-xl transition-all">
                Ask AI Coach
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
             <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-full h-full bg-blue-600/10 dark:bg-blue-500/10 rounded-[2rem] transform rotate-6 scale-105"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-emerald-500/10 dark:bg-emerald-400/10 rounded-[2rem] transform -rotate-3 scale-105"></div>
                
                {/* Main Image */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800">
                  <img 
                    src={PROFILE_IMAGE_URL} 
                    alt={COACH_NAME} 
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700">
                     <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                        <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                          Accepting New Students
                        </p>
                     </div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
