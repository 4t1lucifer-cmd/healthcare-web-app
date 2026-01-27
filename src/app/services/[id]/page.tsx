"use client";

import React, { use } from 'react';
import { notFound, useRouter } from 'next/navigation';
import { features } from '@/lib/servicesData';
import { Activity, Star, ArrowLeft, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicePage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const service = features.find(f => f.id === resolvedParams.id);
    const router = useRouter();

    if (!service) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header/Hero Section */}
            <div className="relative w-full py-24 px-6 md:px-12 flex flex-col items-center justify-center text-center border-b border-slate-100/50 overflow-hidden">
                {/* Reusing pic1.jpeg for cached, reliable, zero-load background */}
                <div className="absolute inset-0 -z-20">
                    <img
                        src="/pic1.jpeg"
                        alt="Service Background"
                        className="w-full h-full object-cover opacity-100"
                    />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 -z-10" />

                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="absolute top-8 left-8 z-50 p-3 bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/40 transition-colors flex items-center gap-2 font-bold px-4"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="hidden md:inline">Back</span>
                </button>

                {/* Service Icon Hero */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8 shadow-xl shadow-black/5`}
                >
                    <service.icon className={`w-12 h-12 text-white`} />
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 max-w-4xl tracking-tight leading-tight drop-shadow-lg"
                >
                    {service.title}
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl font-bold text-white/80 uppercase tracking-widest drop-shadow-md"
                >
                    {service.tagline}
                </motion.p>
            </div>

            {/* Layout Content */}
            <div className="w-full max-w-4xl mx-auto py-12 px-6 md:px-12">
                <p className="text-lg md:text-xl font-medium text-slate-600 mb-12 leading-relaxed text-left">
                    {service.fullDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Sub Services */}
                    <div>
                        <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3 uppercase tracking-wider border-b border-slate-200 pb-4">
                            <Activity className="w-6 h-6 text-primary" /> What We Treat
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                            {service.subServices.map((sub, idx) => (
                                <div key={idx} className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 transition-colors">
                                    <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0" />
                                    <h4 className="font-bold text-slate-800 text-xl">{sub}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Patient Stories */}
                    <div>
                        <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3 uppercase tracking-wider border-b border-slate-200 pb-4">
                            <Star className="w-6 h-6 text-yellow-500" /> Success Stories
                        </h3>
                        <div className="bg-yellow-50/50 rounded-3xl p-8 border border-yellow-100/50 space-y-8">
                            {service.patientStories.map((story, idx) => (
                                <div key={idx} className="relative">
                                    <p className="text-slate-800 italic text-2xl mb-4 leading-relaxed font-serif">"{story.story}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center font-bold text-yellow-700 text-sm">
                                            {story.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 text-base">{story.name}</p>
                                            <p className="text-slate-500 text-sm uppercase font-bold">{story.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Footer CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-lg border-t border-slate-200 flex items-center justify-center z-50">
                <div className="flex items-center justify-between w-full max-w-5xl">
                    <div className="hidden md:block">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Ready to start?</p>
                        <p className="font-black text-slate-800 text-xl">Book your session today</p>
                    </div>
                    <a
                        href="/#contact"
                        className="w-full md:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                    >
                        <Calendar className="w-6 h-6" />
                        Book Appointment
                    </a>
                </div>
            </div>

            {/* Bottom spacer for sticky footer */}
            <div className="h-32" />
        </div>
    );
}
