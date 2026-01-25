"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-card pt-16 pb-8 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
            {/* Subtle Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Company Info */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-2xl font-bold gradient-text">
                        <HeartPulse className="text-primary w-8 h-8" />
                        <span>PhysioCare</span>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">
                        Professional physiotherapy care led by **Nadim Raza**. We are dedicated to restoring your mobility
                        and helping you live a pain-free life through expert care and personalized treatment.
                    </p>
                    <div className="flex gap-4">
                        {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
                            >
                                <Icon className="w-5 h-5 text-secondary hover:text-primary transition-colors" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-sm text-secondary">
                        {['Home', 'Services', 'About Us', 'Conditions'].map((link) => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-bold mb-6">Services</h4>
                    <ul className="space-y-4 text-sm text-secondary">
                        {['Sports Injuries', 'Post-Op Rehab', 'Chronic Pain', 'Manual Therapy'].map((service) => (
                            <li key={service}>
                                <a href="#services" className="hover:text-primary transition-colors">
                                    {service}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-bold mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-sm text-secondary">
                        <li className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-primary mt-0.5" />
                            <a href="mailto:nadimraza0123@gmail.com" className="hover:text-white transition-colors">
                                nadimraza0123@gmail.com
                            </a>
                        </li>
                        <li className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-primary mt-0.5" />
                            <span>+91 12345 67890</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary mt-0.5" />
                            <span>Professional Clinic, Street Name,<br />City, State, India</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-secondary text-xs">
                <p>&copy; {new Date().getFullYear()} PhysioCare - Led by Nadim Raza. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
