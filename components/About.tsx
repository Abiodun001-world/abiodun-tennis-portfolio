import React from 'react';
import { Camera, Briefcase, Zap } from 'lucide-react';
import { STATS, COACH_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24 py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Meet Coach Abiodun</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-zinc-100 dark:border-zinc-700 text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 dark:bg-zinc-700 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-2">{stat.value}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Coaching Philosophy */}
            <div className="bg-white dark:bg-zinc-800 rounded-3xl p-8 md:p-10 border border-zinc-100 dark:border-zinc-700 shadow-xl shadow-zinc-200/50 dark:shadow-none">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="text-yellow-500 fill-yellow-500" />
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">My Philosophy</h3>
              </div>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                <p>
                  As an ITF Level 1 certified coach, I believe that great tennis players are built on a foundation of <strong>strong technical fundamentals</strong> and <strong>unshakeable mental toughness</strong>.
                </p>
                <p>
                  My approach goes beyond just hitting balls. I focus on developing the whole athlete. Whether you are a junior aiming for a scholarship or an adult looking to stay active, I tailor every session to your specific biomechanics and goals.
                </p>
                <p>
                  Most importantly, I strive to instill a lifelong <strong>love for the game</strong>. Tennis is a journey, and I am here to guide you through every match point.
                </p>
              </div>
            </div>

            {/* Content & Collaboration */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white rounded-3xl p-8 md:p-10 border border-zinc-700 relative overflow-hidden flex flex-col justify-center">
              {/* Abstract decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-2 bg-zinc-700/50 rounded-lg">
                     <Camera size={24} className="text-blue-400" />
                   </div>
                   <h3 className="text-2xl font-bold">Content & Collaboration</h3>
                </div>
                
                <p className="text-zinc-300 mb-8 leading-relaxed">
                  Beyond the court, I am passionate about creating educational tennis content. I am available for brand partnerships, equipment reviews, and digital content creation to help grow the sport.
                </p>

                <a href="#contact" className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-400 transition-colors">
                  <Briefcase size={18} />
                  <span>Let's Work Together</span>
                </a>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;