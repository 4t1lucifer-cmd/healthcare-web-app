"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Activity, ShieldCheck } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 md:px-12 overflow-hidden py-20">
            {/* Soft mesh gradient for light theme depth */}
            <div className="mesh-gradient opacity-30" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-white/20 text-primary text-sm font-bold mb-10 shadow-xl"
            >
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>Expert Physiotherapy & Rehabilitation</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-[7rem] font-black mb-10 max-w-6xl leading-[0.9] tracking-tighter"
            >
                Recover Faster. <br />
                <span className="gradient-text">Move Better.</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-foreground/80 text-xl md:text-2xl max-w-3xl mb-14 leading-relaxed font-bold"
            >
                Personalized evidence-based treatments designed to restore your strength,
                mobility, and quality of life. Led by <span className="text-primary font-black">Nadim Raza</span>.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center"
            >
                <a href="#contact" className="group bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-black transition-all shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 text-lg">
                    Book Appointment
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                </a>
                <a href="#services" className="glass hover:bg-white/10 px-10 py-5 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 text-lg">
                    View Services
                </a>
            </motion.div>

            {/* Micro Trust Indicators */}
            <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 font-bold text-sm">
                    <Activity className="w-5 h-5" />
                    SPORTS REHAB
                </div>
                <div className="flex items-center gap-2 font-bold text-sm">
                    <ShieldCheck className="w-5 h-5" />
                    POST-SURGERY CARE
                </div>
            </div>
        </section>
    );
};

export default Hero;

