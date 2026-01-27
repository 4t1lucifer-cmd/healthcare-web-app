"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Mail, MapPin, Phone, Instagram, Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#1DB4A1] text-white py-16 px-6 md:px-12 font-sans border-t border-white/20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Brand Section */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 text-2xl font-black text-white tracking-tight">
                        <div className="w-10 h-10 bg-white/20 flex items-center justify-center rounded-lg">
                            <HeartPulse className="text-white w-6 h-6" />
                        </div>
                        <span>PhysioCare</span>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed max-w-sm font-medium">
                        Advanced physiotherapy clinic led by <strong className="text-white">Nadim Raza</strong>.
                        We combine manual therapy, technology, and exercise to restore your movement.
                    </p>
                    <div className="flex gap-3 pt-2">
                        {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#1DB4A1] transition-all text-white border border-white/20"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-black uppercase tracking-wider text-sm mb-6 border-b border-white/30 pb-2 inline-block">Explore</h4>
                    <ul className="space-y-3 text-sm">
                        {['Home', 'About Us', 'Services', 'Testimonials', 'Book Appointment'].map((link) => (
                            <li key={link}>
                                <a href="#" className="hover:text-white/80 transition-colors block text-white/90 font-medium hover:translate-x-1 duration-300">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-black uppercase tracking-wider text-sm mb-6 border-b border-white/30 pb-2 inline-block">Treatments</h4>
                    <ul className="space-y-3 text-sm">
                        {['Sports Injury Rehab', 'Post-Surgery Recovery', 'Chronic Pain Mgmt', 'Chiropractic Care', 'Home Physiotherapy'].map((service) => (
                            <li key={service}>
                                <a href="#" className="hover:text-white/80 transition-colors block text-white/90 font-medium hover:translate-x-1 duration-300">
                                    {service}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-black uppercase tracking-wider text-sm mb-6 border-b border-white/30 pb-2 inline-block">Get in Touch</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li className="flex items-start gap-3 text-white/90">
                            <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">
                                Clinic Center, New Delhi<br />
                                Serving Noida, Gurgaon, Patna
                            </span>
                        </li>
                        <li className="flex items-center gap-3 text-white/90">
                            <Phone className="w-5 h-5 text-white flex-shrink-0" />
                            <a href="tel:+919771935170" className="hover:text-white transition-colors">+91 9771935170</a>
                        </li>
                        <li className="flex items-center gap-3 text-white/90">
                            <Mail className="w-5 h-5 text-white flex-shrink-0" />
                            <a href="mailto:nadimraza0123@gmail.com" className="hover:text-white transition-colors">nadimraza0123@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70 font-medium">
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
