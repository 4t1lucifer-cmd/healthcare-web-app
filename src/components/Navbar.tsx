"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, Menu, X, Home, User, Mail, Calendar, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "/appointment" },
  ];

  return (
    <>
      {/* Brand Logo - Fixed Top Left */}
// Revert Brand
      <a
        href="/"
        className="fixed top-6 left-6 z-40 flex items-center gap-2 text-xl font-black gradient-text mix-blend-multiply pointer-events-auto"
      >
        <HeartPulse className="text-primary w-8 h-8" />
        <span className="hidden sm:inline">PhysioCare</span>
      </a>

// ... (Rest of file will be handled in separate chunks if needed, or I can do a big replace if I verify the file content first)
      // Actually, I'll use multiple chunks in one call.

      {/* Top Right Control Cluster */}
      <div className="fixed top-6 right-6 z-[60] flex items-center gap-3 pointer-events-auto">
        {/* Persistent CTA Button */}
        <a
          href="/appointment"
          className="hidden sm:flex bg-primary text-white px-6 py-3 rounded-full font-black text-sm uppercase tracking-wide shadow-lg shadow-primary/20 items-center gap-2 transition-transform hover:scale-105 active:scale-95"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </a>

        {/* Mobile Icon-only CTA (visible only on small screens) */}
        <a
          href="/appointment"
          className="sm:hidden bg-primary text-white p-3 rounded-full shadow-lg shadow-primary/20 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        >
          <Calendar className="w-5 h-5" />
        </a>

        {/* Menu Toggle & Dropdown Container */}
        <div className="relative" ref={menuRef}>
          {/* Toggle Button */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className={`p-3 sm:p-4 rounded-full shadow-xl transition-all duration-300 ${isOpen ? 'bg-red-50 text-red-500' : 'bg-white text-slate-700'
              }`}
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </motion.button>

          {/* Compact Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-4 w-60 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden py-2"
              >
                <div className="flex flex-col">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="px-6 py-4 text-slate-700 font-bold hover:bg-slate-50 hover:text-primary transition-colors flex items-center justify-between group"
                    >
                      {item.name}
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Navbar;
