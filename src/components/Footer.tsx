"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Mail, MapPin, Phone, Instagram, Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-16 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Brand Section */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 text-2xl font-black text-white tracking-tight">
                        <div className="w-10 h-10 bg-primary/20 flex items-center justify-center rounded-lg">
                            <HeartPulse className="text-primary w-6 h-6" />
                        </div>
                        <span>PhysioCare</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                        Advanced physiotherapy clinic led by <strong className="text-white">Nadim Raza</strong>.
                        We combine manual therapy, technology, and exercise to restore your movement.
                    </p>
                    <div className="flex gap-3 pt-2">
                        {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6 border-b border-slate-800 pb-2 inline-block">Explore</h4>
                    <ul className="space-y-3 text-sm">
                        {['Home', 'About Us', 'Services', 'Testimonials', 'Book Appointment'].map((link) => (
                            <li key={link}>
                                <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6 border-b border-slate-800 pb-2 inline-block">Treatments</h4>
                    <ul className="space-y-3 text-sm">
                        {['Sports Injury Rehab', 'Post-Surgery Recovery', 'Chronic Pain Mgmt', 'Chiropractic Care', 'Home Physiotherapy'].map((service) => (
                            <li key={service}>
                                <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                    {service}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6 border-b border-slate-800 pb-2 inline-block">Get in Touch</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">
                                Clinic Center, New Delhi<br />
                                Serving Noida, Gurgaon, Patna
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                            <a href="tel:+919771935170" className="hover:text-white transition-colors">+91 9771935170</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                            <a href="mailto:nadimraza0123@gmail.com" className="hover:text-white transition-colors">nadimraza0123@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                <p>&copy; {new Date().getFullYear()} PhysioCare. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
