"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass h-16 flex items-center px-6 md:px-12 justify-between"
    >
      <div className="flex items-center gap-2 text-xl font-bold gradient-text cursor-pointer">
        <Rocket className="text-primary w-6 h-6" />
        <span>WebAgent</span>
      </div>

      <div className="hidden md:flex space-x-8 text-sm font-medium">
        {['About', 'Features', 'Pricing', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-primary transition-colors text-secondary"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block text-sm font-medium text-secondary hover:text-white transition-colors">
          Log in
        </button>
        <button className="bg-primary hover:bg-blue-600 px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-primary/20">
          Get Started
        </button>
        <Menu className="md:hidden w-6 h-6 text-secondary cursor-pointer" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
