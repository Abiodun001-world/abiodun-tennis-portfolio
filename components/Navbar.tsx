/* const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'AI Coach', href: '#ai-coach' },
  { name: 'Booking', href: '#booking' },
  { name: 'Contact', href: '#contact' },
]; */

import React from 'react';

type NavbarProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'AI Coach', href: '#ai-coach' },
  { name: 'Booking', href: '#booking' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-bold text-xl text-zinc-900 dark:text-white"
        >
          Coach Abiodun
        </a>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded border"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;



