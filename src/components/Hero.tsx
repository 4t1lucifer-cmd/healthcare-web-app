"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
// ... (keep implies I need to insert import at top, but tool replaces contiguous block. I'll add import separately or use full file replace if contiguous blocks are far apart. 
// Hero.tsx has import at top. I will do import first.)

// Actually, I can allow multiple edits? No.
// I'll do a focused replace for the import first.

const Hero = () => {
    return (
        <section className="relative min-h-[50vh] md:min-h-[90vh] flex flex-col items-center justify-center text-center px-4 md:px-12 overflow-hidden py-10 md:py-20">
            {/* Banner Background Image */}
            <div className="absolute inset-0 -z-20">
                {/* Desktop Image: Full Cover */}
                <div className="hidden md:block absolute inset-0">
                    <Image
                        src="/pic1.jpeg"
                        alt="Physiotherapy Banner"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                    />
                </div>
                {/* Mobile Image: Adjusted to show more content */}
                <div className="md:hidden absolute inset-0 bg-slate-900">
                    <Image
                        src="/pic1.jpeg"
                        alt="Physiotherapy Banner"
                        fill
                        className="object-cover object-center opacity-70"
                        priority
                        sizes="100vw"
                    />
                </div>
            </div>

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-black/70 -z-10" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-bold mb-6 md:mb-8 shadow-xl"
            >
                <Sparkles className="w-4 h-4 text-[#1DB4A1]" />
                <span className="tracking-wide">Expert Physiotherapy & Rehabilitation</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-7xl lg:text-[6rem] font-black mb-6 md:mb-8 max-w-5xl leading-[1.1] md:leading-[1] tracking-tight text-white drop-shadow-2xl"
            >
                Recover Faster. <br />
                <span className="text-[#2DD4BF] drop-shadow-md">Move Better.</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-slate-100 text-lg md:text-2xl max-w-3xl mb-12 leading-relaxed font-medium drop-shadow-lg"
            >
                Personalized evidence-based treatments designed to restore your strength,
                mobility, and quality of life. Led by <span className="text-white font-bold border-b-2 border-[#1DB4A1]">Nadim Raza</span>.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center"
            >
                <Link href="/appointment" className="group bg-[#1DB4A1] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(29,180,161,0.3)] hover:shadow-[0_0_30px_rgba(29,180,161,0.5)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 text-lg border border-[#1DB4A1]">
                    Book Appointment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#services" className="bg-white/90 text-black hover:bg-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] text-lg border border-white/50 backdrop-blur-md shadow-lg">
                    View Services
                </Link>
            </motion.div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-100 transition-all duration-500">
                <div className="flex items-center gap-2 font-bold text-sm text-white/90 drop-shadow-md bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                    <Activity className="w-4 h-4 text-[#1DB4A1]" />
                    SPORTS REHAB
                </div>
                <div className="flex items-center gap-2 font-bold text-sm text-white/90 drop-shadow-md bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                    <ShieldCheck className="w-4 h-4 text-[#1DB4A1]" />
                    POST-SURGERY CARE
                </div>
            </div>
        </section>
    );
};

export default Hero;
