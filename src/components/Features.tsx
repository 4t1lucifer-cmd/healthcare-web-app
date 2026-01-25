"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, HeartPulse, ShieldCheck, UserCheck, Globe, Accessibility } from 'lucide-react';

const features = [
    {
        title: 'Sports Injuries',
        description: 'Targeted recovery plans for athletes to return to peak performance safely and quickly.',
        icon: Activity,
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
    },
    {
        title: 'Post-Op Rehab',
        description: 'Specialized care to restore strength and mobility after surgical procedures.',
        icon: HeartPulse,
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
    },
    {
        title: 'Chronic Pain',
        description: 'Comprehensive management strategies for long-term neck, back, and joint pain.',
        icon: ShieldCheck,
        color: 'text-purple-400',
        bg: 'bg-purple-400/10',
    },
    {
        title: 'Manual Therapy',
        description: 'Hands-on techniques to manipulate joints and soft tissue for pain relief.',
        icon: UserCheck,
        color: 'text-green-400',
        bg: 'bg-green-400/10',
    },
    {
        title: 'Home Visits',
        description: 'Professional physiotherapy services in the comfort and privacy of your home.',
        icon: Globe,
        color: 'text-pink-400',
        bg: 'bg-pink-400/10',
    },
    {
        title: 'Ergonomics',
        description: 'Expert advice on workplace setup to prevent strain and repetitive injuries.',
        icon: Accessibility,
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/10',
    },
];

const Features = () => {
    return (
        <section id="services" className="py-24 px-6 md:px-12 relative overflow-hidden scroll-mt-20">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -z-10" />

            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
                <p className="text-secondary max-w-xl mx-auto">
                    We offer a wide range of physiotherapy services tailored to your specific needs and goals.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 group"
                    >
                        <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                            <feature.icon className={`w-7 h-7 ${feature.color}`} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                        <p className="text-secondary leading-relaxed text-sm">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
