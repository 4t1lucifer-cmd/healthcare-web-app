"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 md:px-12 overflow-hidden py-20">
            {/* Banner Background Image */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/pic1.jpeg"
                    alt="Physiotherapy Banner"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-black/60 -z-10" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-black mb-10 shadow-lg"
            >
                <Sparkles className="w-4 h-4 animate-pulse text-primary" />
                <span>Expert Physiotherapy & Rehabilitation</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-[7rem] font-black mb-10 max-w-6xl leading-[0.9] tracking-tighter text-white"
            >
                Recover Faster. <br />
                <span className="text-[#1DB4A1]">Move Better.</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-white/90 text-xl md:text-2xl max-w-3xl mb-14 leading-relaxed font-bold"
            >
                Personalized evidence-based treatments designed to restore your strength,
                mobility, and quality of life. Led by <span className="text-[#1DB4A1] font-black">Nadim Raza</span>.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center"
            >
                <a href="#contact" className="group bg-[#1DB4A1] text-white px-10 py-5 rounded-2xl font-black transition-all shadow-2xl shadow-[#1DB4A1]/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 text-lg border border-[#1DB4A1]">
                    Book Appointment
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                </a>
                <a href="#services" className="glass bg-white/10 text-white hover:bg-white/20 px-10 py-5 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 text-lg border border-white/20 backdrop-blur-md">
                    View Services
                </a>
            </motion.div>

            {/* Trust Indicators */}
            <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-100 transition-all duration-500">
                <div className="flex items-center gap-2 font-black text-sm text-white/80">
                    <Activity className="w-5 h-5 text-[#1DB4A1]" />
                    SPORTS REHAB
                </div>
                <div className="flex items-center gap-2 font-black text-sm text-white/80">
                    <ShieldCheck className="w-5 h-5 text-[#1DB4A1]" />
                    POST-SURGERY CARE
                </div>
            </div>
        </section>
    );
};

export default Hero;
