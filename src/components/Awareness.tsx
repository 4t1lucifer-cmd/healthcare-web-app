"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, Heart, Dumbbell, Sun, Timer } from 'lucide-react';
import Image from 'next/image';

const Awareness = () => {
    const benefits = [
        { icon: Activity, title: "Pain Relief", desc: "Drug-free pain management through manual therapy and targeted movement." },
        { icon: Dumbbell, title: "Improved Mobility", desc: "Restore range of motion and flexibility for better daily functioning." },
        { icon: Brain, title: "Injury Prevention", desc: "Learn correct mechanics to avoid future injuries and strains." },
        { icon: Heart, title: "Holistic Health", desc: "Address root causes, not just symptoms, for long-term wellness." }
    ];

    const exercises = [
        { icon: Sun, title: "Morning Stretch", time: "5 mins", desc: "Start your day with gentle spine rotations and neck stretches." },
        { icon: Timer, title: "Desk Breaks", time: "Every 1 hr", desc: "Stand up, walk, and stretch your shoulders to prevent bad posture." },
        { icon: Dumbbell, title: "Core Strength", time: "10 mins", desc: "Simple planks or bridges to support your lower back." }
    ];

    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6"
                >
                    Why Physiotherapy?
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 leading-tight">
                    Movement is <span className="text-[#1DB4A1]">Medicine</span>
                </h2>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Physiotherapy isn't just about recovery; it's about optimizing your body's potential.
                    Small daily habits can lead to massive long-term health improvements.
                </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                {benefits.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-[#1DB4A1]/30 hover:shadow-lg transition-all group"
                    >
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            <item.icon className="w-7 h-7 text-[#1DB4A1]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                        <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Daily Awareness Section with Image Background */}
            <div className="relative rounded-[3rem] p-10 md:p-16 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/PIC2.jpeg"
                        alt="Physiotherapy Exercise"
                        fill
                        className="object-cover object-center"
                    />
                    {/* Gradient Overlay: Dark on Left, Transparent on Right */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
                </div>

                <div className="relative z-10 w-full p-8 md:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Content moved to Left Side */}
                        <div className="space-y-10">
                            <div className="text-white">
                                <h3 className="text-3xl md:text-5xl font-black mb-6 drop-shadow-2xl leading-tight">
                                    Daily Habits <br />
                                    <span className="text-[#1DB4A1]">Healthy Body</span>
                                </h3>
                                <p className="text-white/90 text-lg mb-8 leading-relaxed font-medium drop-shadow-md max-w-md">
                                    Consistency is key. Incorporating these simple practices into your routine
                                    can significantly reduce chronic pain risk.
                                </p>
                                <a href="/appointment" className="inline-flex items-center gap-2 bg-[#1DB4A1] text-white border border-[#1DB4A1] px-8 py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(29,180,161,0.3)] hover:scale-105 transition-all mb-10">
                                    Book a Check-up
                                    <Activity className="w-5 h-5" />
                                </a>
                            </div>

                            {/* Compact Cards Grid below text */}
                            <div className="grid gap-4">
                                {exercises.map((ex, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4 hover:bg-black/20 transition-colors max-w-md"
                                    >
                                        <div className="w-10 h-10 bg-[#1DB4A1]/20 rounded-full flex items-center justify-center flex-shrink-0 border border-[#1DB4A1]/30">
                                            <ex.icon className="w-5 h-5 text-[#1DB4A1]" />
                                        </div>
                                        <div className="text-white">
                                            <h4 className="text-base font-bold flex items-center gap-2">
                                                {ex.title}
                                                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full border border-white/10 uppercase tracking-wide">{ex.time}</span>
                                            </h4>
                                            <p className="text-white/70 text-xs mt-0.5">{ex.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side Empty for Image Visibility */}
                        <div className="hidden lg:block"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awareness;
