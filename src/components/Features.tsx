"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, Layout, Globe, Code } from 'lucide-react';

const features = [
    {
        title: 'Lightning Speed',
        description: 'Optimized for the modern web with sub-second load times and global edge delivery.',
        icon: Zap,
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
    },
    {
        title: 'Enterprise Security',
        description: 'Bult-in protection against global threats with automated SSL and edge security.',
        icon: Shield,
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
    },
    {
        title: 'AI Native',
        description: 'Intelligent components that learn and adapt to your users behavior automatically.',
        icon: Cpu,
        color: 'text-purple-400',
        bg: 'bg-purple-400/10',
    },
    {
        title: 'Perfect Layouts',
        description: 'Responsive by design. Your site looks stunning on every device, every time.',
        icon: Layout,
        color: 'text-green-400',
        bg: 'bg-green-400/10',
    },
    {
        title: 'Global Scale',
        description: 'Deploy to hundred of locations worldwide with a single click or git push.',
        icon: Globe,
        color: 'text-pink-400',
        bg: 'bg-pink-400/10',
    },
    {
        title: 'Clean Code',
        description: 'Pure, maintainable TypeScript and React code that follows all best practices.',
        icon: Code,
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/10',
    },
];

const Features = () => {
    return (
        <section id="features" className="py-24 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -z-10" />

            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed for Performance</h2>
                <p className="text-secondary max-w-xl mx-auto">
                    Every tool you need to build, scale, and manage your modern web presence with confidence.
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
