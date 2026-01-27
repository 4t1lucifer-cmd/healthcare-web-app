"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, Menu, X, ChevronRight, Home, User, Mail, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", href: "#", icon: Home },
    { name: "Services", href: "#services", icon: HeartPulse },
    { name: "About", href: "#about", icon: User },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        className={`fixed top-6 right-6 z-[60] p-4 rounded-full shadow-2xl transition-all duration-300 ${isOpen ? 'bg-white text-red-500' : 'bg-primary text-white'
          }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.button>

      {/* Brand Logo - Fixed Top Left (Optional, keeping it subtle) */}
      <motion.a
        href="#"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-6 left-6 z-40 flex items-center gap-2 text-xl font-black gradient-text mix-blend-multiply"
      >
        <HeartPulse className="text-primary w-8 h-8" />
        <span className="hidden sm:inline">PhysioCare</span>
      </motion.a>

      {/* Fullscreen Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center p-6"
          >
            <nav className="flex flex-col gap-8 w-full max-w-lg">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="group flex items-center justify-between text-4xl md:text-5xl font-black text-slate-800 hover:text-primary transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-4">
                    <item.icon className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </span>
                  <ChevronRight className="w-8 h-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 w-full max-w-lg"
            >
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-primary text-white text-center py-5 rounded-2xl font-black text-xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                <Calendar className="w-6 h-6" />
                Book Appointment
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
