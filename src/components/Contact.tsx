"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, Globe, Activity } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        date: '',
        time: '',
        service: 'General Consultation'
    });
    const [status, setStatus] = useState<null | 'loading' | 'success' | 'error'>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    date: '',
                    time: '',
                    service: 'General Consultation'
                });
                setTimeout(() => setStatus(null), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-12 max-w-5xl mx-auto scroll-mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                        Start Your <span className="gradient-text">Recovery</span> Journey
                    </h2>
                    <p className="text-secondary text-lg mb-12 leading-relaxed">
                        Our expert physiotherapists are ready to help you move better and live pain-free.
                        Book your consultation today and take the first step towards health.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-secondary">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                <Activity className="w-5 h-5 text-primary" />
                            </div>
                            <span>Personalized Treatment Plans</span>
                        </div>
                        <div className="flex items-center gap-4 text-secondary">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                            </div>
                            <span>Professional Medical Expertise</span>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-secondary ml-1">Full Name</label>
                            <input
                                required
                                type="text"
                                placeholder="Ex. Alex Morgan"
                                className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-white/20"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-secondary ml-1">Email Address</label>
                            <input
                                required
                                type="email"
                                placeholder="alex@company.com"
                                className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-white/20"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-secondary ml-1">Preferred Date</label>
                                <input
                                    required
                                    type="date"
                                    className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white/60"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-secondary ml-1">Preferred Time</label>
                                <input
                                    required
                                    type="time"
                                    className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white/60"
                                    value={formData.time}
                                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-secondary ml-1">Select Service</label>
                            <select
                                required
                                className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white/60 appearance-none"
                                value={formData.service}
                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            >
                                <option value="General Consultation" className="bg-card">General Consultation</option>
                                <option value="Sports Injuries" className="bg-card">Sports Injuries</option>
                                <option value="Post-Op Rehab" className="bg-card">Post-Op Rehab</option>
                                <option value="Chronic Pain" className="bg-card">Chronic Pain</option>
                                <option value="Manual Therapy" className="bg-card">Manual Therapy</option>
                                <option value="Home Visits" className="bg-card">Home Visits</option>
                                <option value="Ergonomics" className="bg-card">Ergonomics</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-secondary ml-1">Message / Symptoms</label>
                            <textarea
                                required
                                rows={4}
                                placeholder="Briefly describe your condition or symptoms..."
                                className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-white/20"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-primary hover:bg-blue-600 py-5 rounded-2xl font-bold transition-all disabled:opacity-50 flex items-center justify-center gap-3 text-lg"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </>
                            )}
                        </button>

                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center justify-center gap-2 text-green-400 font-bold"
                                >
                                    <CheckCircle className="w-5 h-5" />
                                    Message sent successfully!
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center justify-center gap-2 text-red-400 font-bold"
                                >
                                    <AlertCircle className="w-5 h-5" />
                                    Something went wrong.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
