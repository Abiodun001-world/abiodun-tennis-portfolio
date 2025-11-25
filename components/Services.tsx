import React from 'react';
import { User, Users, Trophy, Flame, Check } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: "Private Lessons",
    description: "Personalized 1-on-1 coaching tailored to your specific technical needs, biomechanics, and match strategy.",
    price: "Contact for Rates",
    icon: User,
    features: ["Video Analysis", "Personalized Drills", "Match Strategy"]
  },
  {
    title: "Junior Development",
    description: "Structured group programs for kids and teens focusing on fundamentals, coordination, and love for the game.",
    price: "Monthly Packages",
    icon: Trophy,
    features: ["Age-Appropriate Drills", "Team Environment", "Tournament Prep"]
  },
  {
    title: "Adult Clinics",
    description: "High-energy group sessions for adults of all levels. Mix of technical correction and live-ball drills.",
    price: "Per Session / Package",
    icon: Users,
    features: ["Cardio Tennis", "Doubles Strategy", "Social Play"]
  },
  {
    title: "Intensive Camps",
    description: "Seasonal training camps designed to dramatically improve fitness and skill level in a short period.",
    price: "Seasonal Pricing",
    icon: Flame,
    features: ["Fitness Conditioning", "Mental Toughness", "High Volume Hitting"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="scroll-mt-24 py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Coaching Packages</span>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mt-2">Train Like a Pro</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Whether you are looking for individual attention or the energy of a group environment, I have a program designed to elevate your game.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
             const Icon = service.icon;
             return (
               <div key={index} className="flex flex-col h-full bg-white dark:bg-zinc-800 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
                 <div className="mb-6">
                   <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                     <Icon size={28} />
                   </div>
                   <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{service.title}</h3>
                   <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                     {service.description}
                   </p>
                 </div>
                 
                 <div className="mt-auto">
                   <ul className="space-y-3 mb-8">
                     {service.features.map((feature, idx) => (
                       <li key={idx} className="flex items-center text-sm text-zinc-600 dark:text-zinc-300">
                         <Check size={16} className="text-green-500 mr-2" />
                         {feature}
                       </li>
                     ))}
                   </ul>
                   <div className="pt-6 border-t border-zinc-100 dark:border-zinc-700">
                     <span className="block text-xs font-semibold uppercase text-zinc-400 mb-1">Starting at</span>
                     <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{service.price}</span>
                   </div>
                 </div>
               </div>
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;