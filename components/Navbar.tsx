import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Activity } from 'lucide-react';
import { COACH_NAME } from '../constants';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'AI Coach', href: '#ai-coach' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-500 transition-colors">
                 <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-white">
                {COACH_NAME.split(' ')[0]}<span className="text-blue-600">.Tennis</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-300"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-600 dark:text-zinc-300 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-600 dark:text-zinc-300 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <button
               onClick={() => {
                 toggleTheme();
                 setIsOpen(false);
               }}
               className="flex w-full items-center gap-2 text-left text-zinc-600 dark:text-zinc-300 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;