"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, Calendar, Clock, ClipboardList, User, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        date: '',
        time: '',
        service: 'General Consultation',
    });
    const [honeypot, setHoneypot] = useState('');
    const [status, setStatus] = useState<null | 'loading' | 'success' | 'error'>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (formData.name.length < 2) newErrors.name = "Name is too short";
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email";
        if (formData.message.length < 10) newErrors.message = "Please provide more detail (min 10 chars)";
        if (!formData.date) newErrors.date = "Date is required";
        if (!formData.time) newErrors.time = "Time is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (honeypot) {
            console.log("Bot detected");
            return;
        }

        if (!validate()) return;

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
                setErrors({});
                setTimeout(() => setStatus(null), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                <div className="lg:sticky lg:top-32 font-bold tracking-tight">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black mb-10 leading-[0.9]"
                    >
                        Start Your <br />
                        <span className="gradient-text">Recovery</span> Journey
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-secondary text-xl mb-14 leading-relaxed max-w-md font-medium"
                    >
                        Our expert physiotherapists are ready to help you move better and live pain-free.
                        Book your consultation today.
                    </motion.p>

                    <div className="space-y-8">
                        {[
                            { icon: CheckCircle, text: "Personalized Treatment Plans", color: "text-primary" },
                            { icon: CheckCircle, text: "Evidence-Based Techniques", color: "text-accent" },
                            { icon: CheckCircle, text: "State-of-the-art Equipment", color: "text-primary" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="flex items-center gap-5 text-lg"
                            >
                                <item.icon className={`w-7 h-7 ${item.color}`} />
                                <span className="text-foreground/90">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass p-10 md:p-12 rounded-[3rem] shadow-2xl relative border border-white/10"
                >
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Honeypot field for spam prevention */}
                        <input
                            type="text"
                            name="hp"
                            style={{ display: 'none' }}
                            tabIndex={-1}
                            autoComplete="off"
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-sm font-black text-secondary uppercase tracking-widest ml-1 flex items-center gap-2">
                                    <User className="w-4 h-4" /> Full Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Alex Morgan"
                                    className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} px-6 py-4 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all placeholder:text-white/20 font-medium`}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                {errors.name && <p className="text-red-400 text-xs font-bold ml-1">{errors.name}</p>}
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-black text-secondary uppercase tracking-widest ml-1 flex items-center gap-2">
                                    <Mail className="w-4 h-4" /> Email Address
                                </label>
                                <input
                                    required
                                    type="email"
                                    placeholder="alex@example.com"
                                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} px-6 py-4 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all placeholder:text-white/20 font-medium`}
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                {errors.email && <p className="text-red-400 text-xs font-bold ml-1">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-sm font-black text-secondary uppercase tracking-widest ml-1 flex items-center gap-2">
                                    <Calendar className="w-4 h-4" /> Preferred Date
                                </label>
                                <input
                                    required
                                    type="date"
                                    className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all text-white/60 font-medium"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-black text-secondary uppercase tracking-widest ml-1 flex items-center gap-2">
                                    <Clock className="w-4 h-4" /> Preferred Time
                                </label>
                                <input
                                    required
                                    type="time"
                                    className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all text-white/60 font-medium"
                                    value={formData.time}
                                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-black text-secondary uppercase tracking-widest ml-1 flex items-center gap-2">
                                <ClipboardList className="w-4 h-4" /> Select Service
                            </label>
                            <div className="relative">
                                <select
                                    required
                                    className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all text-white/60 appearance-none font-medium cursor-pointer"
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                >
                                    {[
                                        "General Consultation", "Sports Injuries", "Post-Op Rehab",
                                        "Chronic Pain", "Manual Therapy", "Home Visits", "Ergonomics"
                                    ].map(s => (
                                        <option key={s} value={s} className="bg-card text-white">{s}</option>
                                    ))}
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                    ▼
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-black text-secondary uppercase tracking-widest ml-1 flex items-center gap-2">
                                <MessageSquare className="w-4 h-4" /> Message / Symptoms
                            </label>
                            <textarea
                                required
                                rows={4}
                                placeholder="Tell us about your condition..."
                                className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} px-6 py-4 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-white/20 font-medium`}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                            {errors.message && <p className="text-red-400 text-xs font-bold ml-1">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-primary text-primary-foreground py-6 rounded-2xl font-black transition-all disabled:opacity-50 flex items-center justify-center gap-4 text-xl shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <Send className="w-6 h-6" />
                                    Book My Consultation
                                </>
                            )}
                        </button>

                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center justify-center gap-3 text-green-400 font-black p-4 rounded-xl bg-green-400/10 border border-green-400/20"
                                >
                                    <CheckCircle className="w-6 h-6" />
                                    Appointment request sent!
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center justify-center gap-3 text-red-400 font-black p-4 rounded-xl bg-red-400/10 border border-red-400/20"
                                >
                                    <AlertCircle className="w-6 h-6" />
                                    Submission failed. Please try again.
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

