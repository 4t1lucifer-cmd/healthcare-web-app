"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Mail, MapPin, Phone, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-card pt-24 pb-12 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
            {/* Subtle Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                {/* Company Info */}
                <div className="space-y-8">
                    <div className="flex items-center gap-2 text-3xl font-black gradient-text tracking-tighter">
                        <HeartPulse className="text-primary w-10 h-10" />
                        <span>PhysioCare</span>
                    </div>
                    <p className="text-secondary text-base leading-relaxed font-medium">
                        Professional physiotherapy care led by <span className="text-white font-bold">Nadim Raza</span>.
                        Dedicated to restoring your mobility and helping you live a pain-free life.
                    </p>
                    <div className="flex gap-4">
                        {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-primary/20 transition-all border border-white/10"
                            >
                                <Icon className="w-6 h-6 text-secondary hover:text-primary transition-colors" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Quick Links</h4>
                    <ul className="space-y-4 text-secondary font-medium">
                        {['Home', 'Services', 'About Us', 'Conditions'].map((link) => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors hover:translate-x-1 inline-block">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Services</h4>
                    <ul className="space-y-4 text-secondary font-medium">
                        {['Sports Injuries', 'Post-Op Rehab', 'Chronic Pain', 'Manual Therapy', 'Home Visits'].map((service) => (
                            <li key={service}>
                                <a href="#services" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">
                                    {service}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Contact Us</h4>
                    <ul className="space-y-6 text-secondary font-medium">
                        <li className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0 border border-white/10">
                                <Mail className="w-5 h-5 text-primary" />
                            </div>
                            <a href="mailto:nadimraza0123@gmail.com" className="hover:text-primary transition-colors pt-2">
                                nadimraza0123@gmail.com
                            </a>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0 border border-white/10">
                                <Phone className="w-5 h-5 text-accent" />
                            </div>
                            <span className="pt-2">+91 12345 67890</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0 border border-white/10">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <span className="pt-2">Professional Clinic, Street Name,<br />City, State, India</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-secondary text-sm font-medium">
                <p>&copy; {new Date().getFullYear()} PhysioCare - Led by Nadim Raza. All rights reserved.</p>
                <div className="flex gap-10">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

