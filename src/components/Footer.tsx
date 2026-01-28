"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Mail, MapPin, Phone, Instagram, Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#1DB4A1] text-white py-10 px-6 md:px-12 font-sans border-t border-white/20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

                {/* Brand Section */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xl font-black text-white tracking-tight">
                        <div className="w-8 h-8 bg-white/20 flex items-center justify-center rounded-lg">
                            <HeartPulse className="text-white w-5 h-5" />
                        </div>
                        <span>PhysioCare</span>
                    </div>
                    <p className="text-white/90 text-sm leading-snug max-w-sm font-medium">
                        Advanced physiotherapy clinic led by <strong className="text-white">Raza Nadim</strong>.
                        Restoring movement with care.
                    </p>
                    <div className="flex gap-3 pt-2">
                        {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#1DB4A1] transition-all text-white border border-white/20"
                            >
                                <Icon className="w-3.5 h-3.5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-black uppercase tracking-wider text-xs mb-4 border-b border-white/30 pb-1 inline-block">Explore</h4>
                    <ul className="space-y-2 text-sm">
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'About Us', href: '/#about' },
                            { name: 'Services', href: '/#services' },
                            { name: 'Testimonials', href: '/#testimonials' },
                            { name: 'Book a Check-up', href: '/appointment' }
                        ].map((item) => (
                            <li key={item.name}>
                                <a href={item.href} className="hover:text-white/80 transition-colors block text-white/90 font-medium hover:translate-x-1 duration-300">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-black uppercase tracking-wider text-xs mb-4 border-b border-white/30 pb-1 inline-block">Treatments</h4>
                    <ul className="space-y-2 text-sm">
                        {[
                            { name: 'Sports Injury Rehab', href: '/#services' },
                            { name: 'Post-Surgery Recovery', href: '/#services' },
                            { name: 'Chronic Pain Mgmt', href: '/#services' },
                            { name: 'Chiropractic Care', href: '/#services' },
                            { name: 'Home Physiotherapy', href: '/#services' }
                        ].map((service) => (
                            <li key={service.name}>
                                <a href={service.href} className="hover:text-white/80 transition-colors block text-white/90 font-medium hover:translate-x-1 duration-300">
                                    {service.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-black uppercase tracking-wider text-xs mb-4 border-b border-white/30 pb-1 inline-block">Get in Touch</h4>
                    <ul className="space-y-3 text-sm font-medium">
                        <li className="flex items-start gap-3 text-white/90">
                            <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                            <span className="leading-snug">
                                Clinic Center, New Delhi<br />
                                Serving Noida, Gurgaon, Patna
                            </span>
                        </li>
                        <li className="flex items-center gap-3 text-white/90">
                            <Phone className="w-4 h-4 text-white flex-shrink-0" />
                            <a href="tel:+919771935170" className="hover:text-white transition-colors">+91 9771935170</a>
                        </li>
                        <li className="flex items-center gap-3 text-white/90">
                            <Mail className="w-4 h-4 text-white flex-shrink-0" />
                            <a href="mailto:nadimraza0123@gmail.com" className="hover:text-white transition-colors">nadimraza0123@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70 font-medium">
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
