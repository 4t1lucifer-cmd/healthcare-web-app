"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, Globe } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(null), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                        Ready to <span className="gradient-text">ignite</span> your project?
                    </h2>
                    <p className="text-secondary text-lg mb-12 leading-relaxed">
                        Our team is here to help you navigate the future of the web.
                        Fill out the form and we'll be in touch within 24 hours.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-secondary">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                <Globe className="w-5 h-5" />
                            </div>
                            <span>Global Support 24/7</span>
                        </div>
                        <div className="flex items-center gap-4 text-secondary">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                            </div>
                            <span>99.9% Uptime Guarantee</span>
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
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-secondary ml-1">Project Details</label>
                            <textarea
                                required
                                rows={4}
                                placeholder="Tell us about what you're building..."
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
