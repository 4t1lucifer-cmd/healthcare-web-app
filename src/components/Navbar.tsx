"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'h-20 glass shadow-2xl border-b border-white/10' : 'h-24'
          } flex items-center px-6 md:px-12 justify-between`}
      >
        <a href="#" className="flex items-center gap-2 text-2xl font-black gradient-text cursor-pointer tracking-tighter hover:scale-105 transition-transform">
          <HeartPulse className="text-primary w-8 h-8 animate-pulse" />
          <span>PhysioCare</span>
        </a>

        <div className="hidden md:flex space-x-10 text-sm font-black uppercase tracking-widest">
          {['Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-primary transition-all text-secondary relative group overflow-hidden"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-xs font-black uppercase tracking-widest text-secondary hover:text-white transition-colors">
            Patient Portal
          </button>
          <a href="#contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-black transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 uppercase tracking-widest">
            Book Now
          </a>
          <div
            className="md:hidden p-2 glass rounded-xl cursor-pointer hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6 text-primary" />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[100] glass flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2 text-2xl font-black gradient-text">
                <HeartPulse className="text-primary w-8 h-8" />
                <span>PhysioCare</span>
              </div>
              <X
                className="w-8 h-8 text-primary cursor-pointer hover:rotate-90 transition-transform"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>

            <div className="flex flex-col gap-6">
              {['Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-black text-white hover:text-primary transition-colors flex items-center justify-between group"
                >
                  {item}
                  <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform opacity-20" />
                </a>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-white/10 space-y-6">
              <button className="w-full text-center py-4 text-secondary font-black uppercase tracking-widest">
                Patient Portal
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-primary text-primary-foreground py-6 rounded-2xl font-black text-xl uppercase tracking-widest"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

