import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

type NavbarProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Booking', href: '#booking' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  toggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-bold text-lg md:text-xl text-zinc-900 dark:text-white"
        >
          Coach Abiodun
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 transition"
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

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="px-2 py-1 rounded border"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <button
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            className="p-2"
          >
            {mobileMenuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-zinc-700 dark:text-zinc-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;