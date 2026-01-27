"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, HeartPulse, ShieldCheck, UserCheck, Globe, Accessibility, X, CheckCircle, ChevronRight, Star, ArrowLeft, Calendar } from 'lucide-react';
import { features } from '@/lib/servicesData';

const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);
    const router = useRouter();

    // Hybrid Navigation Handler
    const handleServiceClick = (feature: typeof features[0]) => {
        // Check if window is defined (client-side)
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 768) {
                // Desktop: Redirect to full page
                router.push(`/services/${feature.id}`);
            } else {
                // Mobile: Open Modal
                setSelectedFeature(feature);
            }
        }
    };

    // Lock body scroll when modal is open (Mobile only usually, but good practice)
    React.useEffect(() => {
        if (selectedFeature) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedFeature]);

    return (
        <section id="services" className="py-24 px-6 md:px-12 bg-white relative">
            {/* Main Listing Header */}
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight"
                >
                    Our Specialist <span className="text-primary">Services</span>
                </motion.h2>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                    Comprehensive, evidence-based care tailored to your needs.
                </p>
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleServiceClick(feature)}
                        className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all cursor-pointer relative overflow-hidden flex flex-col items-start"
                    >
                        <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <feature.icon className={`w-6 h-6 ${feature.color}`} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors">{feature.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">{feature.description}</p>

                        <div className="mt-auto flex items-center text-primary font-bold text-xs uppercase tracking-wider">
                            View Details <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Immersive Text-Focused Modal */}
            <AnimatePresence>
                {selectedFeature && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-white flex flex-col overflow-hidden"
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        {/* Header Gradient Area - Replaces Image */}
                        <div className="relative w-full py-16 px-6 md:px-12 flex flex-col items-center justify-center text-center border-b border-slate-100/50 overflow-hidden bg-slate-900">
                            {/* Reusing pic1.jpeg */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="/pic1.jpeg"
                                    alt="Service Background"
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-black/60" />
                            </div>

                            {/* Content Wrapper for z-index */}
                            <div className="relative z-10 w-full flex flex-col items-center">
                                {/* Close Buttons */}
                                <button
                                    onClick={() => setSelectedFeature(null)}
                                    className="absolute -top-12 left-0 p-2 bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/40 transition-colors md:hidden"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                </button>

                                <button
                                    onClick={() => setSelectedFeature(null)}
                                    className="absolute -top-10 right-0 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors hidden md:block shadow-sm backdrop-blur-md border border-white/10"
                                >
                                    <X className="w-8 h-8" />
                                </button>

                                {/* Service Icon Hero */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 shadow-xl shadow-black/5`}
                                >
                                    <selectedFeature.icon className={`w-10 h-10 md:w-12 md:h-12 text-white`} />
                                </motion.div>

                                <motion.h2
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 max-w-4xl tracking-tight leading-tight drop-shadow-lg"
                                >
                                    {selectedFeature.title}
                                </motion.h2>

                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-lg md:text-xl font-bold text-white/80 uppercase tracking-widest drop-shadow-md"
                                >
                                    {selectedFeature.tagline}
                                </motion.p>
                            </div>
                        </div>

                        {/* Layout Content */}
                        <div className="flex-1 overflow-y-auto w-full max-w-5xl mx-auto">
                            <div className="p-6 md:p-12 pb-32">
                                <p className="text-xl md:text-2xl font-medium text-slate-600 mb-12 leading-relaxed text-center md:text-left max-w-3xl mx-auto md:mx-0">
                                    {selectedFeature.fullDescription}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {/* Sub Services */}
                                    <div>
                                        <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-wider">
                                            <Activity className="w-5 h-5 text-primary" /> What We Treat
                                        </h3>
                                        <div className="grid grid-cols-1 gap-3">
                                            {selectedFeature.subServices.map((sub, idx) => (
                                                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/30 transition-colors">
                                                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                                    <h4 className="font-bold text-slate-800 text-lg">{sub}</h4>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Patient Stories */}
                                    <div>
                                        <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-wider">
                                            <Star className="w-5 h-5 text-yellow-500" /> Success Stories
                                        </h3>
                                        <div className="bg-yellow-50/50 rounded-2xl p-6 border border-yellow-100/50 space-y-6">
                                            {selectedFeature.patientStories.map((story, idx) => (
                                                <div key={idx} className="relative">
                                                    <p className="text-slate-800 italic text-xl mb-3 leading-relaxed font-serif">"{story.story}"</p>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-yellow-200 flex items-center justify-center font-bold text-yellow-700 text-xs">
                                                            {story.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-slate-900 text-sm">{story.name}</p>
                                                            <p className="text-slate-500 text-xs uppercase font-bold">{story.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sticky Footer CTA */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-white/80 backdrop-blur-md border-t border-slate-100 flex items-center justify-center z-10">
                            <div className="flex items-center justify-between w-full max-w-5xl">
                                <div className="hidden md:block">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Ready to start?</p>
                                    <p className="font-black text-slate-800 text-lg">Book your session today</p>
                                </div>
                                <a
                                    href="#contact"
                                    onClick={() => setSelectedFeature(null)}
                                    className="w-full md:w-auto bg-primary text-white px-8 py-4 rounded-xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Book Appointment
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Features;
