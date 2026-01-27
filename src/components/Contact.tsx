"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, Calendar, Clock, ClipboardList, User, Mail, MessageSquare, Phone } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
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
        if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email";
        if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile number must be 10 digits";
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
                    mobile: '',
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
                        className="text-foreground/80 text-xl mb-14 leading-relaxed max-w-md font-bold"
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
                    className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl shadow-primary/5 relative border border-primary/10 overflow-hidden"
                >
                    {/* Medical Theme Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0 pointer-events-none" />

                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
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
                                <label className="text-sm font-black text-foreground uppercase tracking-widest ml-1 flex items-center gap-2">
                                    <User className="w-4 h-4 text-primary" /> Full Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g. Alex Morgan"
                                    className={`w-full bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-200'} px-6 py-4 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400 font-bold text-foreground`}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                {errors.name && <p className="text-red-500 text-xs font-bold ml-1">{errors.name}</p>}
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-black text-foreground uppercase tracking-widest ml-1 flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-primary" /> Mobile Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    required
                                    type="tel"
                                    placeholder="9876543210"
                                    className={`w-full bg-slate-50 border ${errors.mobile ? 'border-red-500' : 'border-slate-200'} px-6 py-4 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400 font-bold text-foreground`}
                                    value={formData.mobile}
                                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                />
                                {errors.mobile && <p className="text-red-500 text-xs font-bold ml-1">{errors.mobile}</p>}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-black text-foreground uppercase tracking-widest ml-1 flex items-center gap-2">
                                <Mail className="w-4 h-4 text-primary" /> Email Address <span className="text-slate-400 normal-case tracking-normal">(Optional)</span>
                            </label>
                            <input
                                type="email"
                                placeholder="alex@example.com"
                                className={`w-full bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-200'} px-6 py-4 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400 font-bold text-foreground`}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            {errors.email && <p className="text-red-500 text-xs font-bold ml-1">{errors.email}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-sm font-black text-foreground uppercase tracking-widest ml-1 flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-primary" /> Preferred Date
                                </label>
                                <input
                                    required
                                    type="date"
                                    className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-foreground font-bold"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-black text-foreground uppercase tracking-widest ml-1 flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-primary" /> Preferred Time
                                </label>
                                <input
                                    required
                                    type="time"
                                    className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-foreground font-bold"
                                    value={formData.time}
                                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-black text-foreground uppercase tracking-widest ml-1 flex items-center gap-2">
                                <ClipboardList className="w-4 h-4 text-primary" /> Select Service
                            </label>
                            <div className="relative">
                                <select
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-foreground appearance-none font-bold cursor-pointer"
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                >
                                    {[
                                        "General Consultation", "Sports Injuries", "Post-Op Rehab",
                                        "Chronic Pain", "Manual Therapy", "Home Visits", "Ergonomics"
                                    ].map(s => (
                                        <option key={s} value={s} className="bg-white text-foreground">{s}</option>
                                    ))}
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 text-primary">
                                    ▼
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-black text-foreground uppercase tracking-widest ml-1 flex items-center gap-2">
                                <MessageSquare className="w-4 h-4 text-primary" /> Message / Symptoms
                            </label>
                            <textarea
                                required
                                rows={4}
                                placeholder="Tell us about your condition..."
                                className={`w-full bg-slate-50 border ${errors.message ? 'border-red-500' : 'border-slate-200'} px-6 py-4 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none placeholder:text-slate-400 font-bold text-foreground`}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                            {errors.message && <p className="text-red-500 text-xs font-bold ml-1">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-primary text-white py-6 rounded-2xl font-black transition-all disabled:opacity-50 flex items-center justify-center gap-4 text-xl shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-[0.99]"
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
                                    className="flex items-center justify-center gap-3 text-green-600 font-black p-4 rounded-xl bg-green-50 border border-green-200"
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
                                    className="flex items-center justify-center gap-3 text-red-600 font-black p-4 rounded-xl bg-red-50 border border-red-200"
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

