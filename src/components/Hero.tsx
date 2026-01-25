"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/10 blur-[120px] rounded-full -z-10 opacity-50" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-semibold mb-8"
            >
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Future of Web Development is Here</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-8xl font-black mb-8 max-w-5xl leading-[1.1] tracking-tight"
            >
                Build stunning sites <br />
                <span className="gradient-text">effortlessly with AI</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-secondary text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
            >
                Empower your creativity with our advanced AI-driven platform.
                Transform ideas into reality with production-ready code in seconds.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:row gap-4 w-full sm:w-auto"
            >
                <button className="group bg-primary hover:bg-blue-600 px-8 py-4 rounded-2xl font-bold transition-all shadow-2xl hover:shadow-primary/40 flex items-center justify-center gap-2">
                    Start for Free
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="glass hover:bg-white/5 px-8 py-4 rounded-2xl font-bold transition-all">
                    View Demo
                </button>
            </motion.div>
        </section>
    );
};

export default Hero;
