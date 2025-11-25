import React from 'react';
import { COACH_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-zinc-950 py-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-zinc-500 dark:text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} {COACH_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
