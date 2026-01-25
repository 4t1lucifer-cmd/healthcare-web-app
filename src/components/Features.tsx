"use client";

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Activity, HeartPulse, ShieldCheck, UserCheck, Globe, Accessibility } from 'lucide-react';

const features = [
    {
        title: 'Sports Injuries',
        description: 'Targeted recovery plans for athletes to return to peak performance safely and quickly.',
        icon: Activity,
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/20',
    },
    {
        title: 'Post-Op Rehab',
        description: 'Specialized care to restore strength and mobility after surgical procedures.',
        icon: HeartPulse,
        color: 'text-blue-400',
        bg: 'bg-blue-400/20',
    },
    {
        title: 'Chronic Pain',
        description: 'Comprehensive management strategies for long-term neck, back, and joint pain.',
        icon: ShieldCheck,
        color: 'text-purple-400',
        bg: 'bg-purple-400/20',
    },
    {
        title: 'Manual Therapy',
        description: 'Hands-on techniques to manipulate joints and soft tissue for pain relief.',
        icon: UserCheck,
        color: 'text-green-400',
        bg: 'bg-green-400/20',
    },
    {
        title: 'Home Visits',
        description: 'Professional physiotherapy services in the comfort and privacy of your home.',
        icon: Globe,
        color: 'text-pink-400',
        bg: 'bg-pink-400/20',
    },
    {
        title: 'Ergonomics',
        description: 'Expert advice on workplace setup to prevent strain and repetitive injuries.',
        icon: Accessibility,
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/20',
    },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="p-10 rounded-[2.5rem] glass-card border border-white/5 hover:border-primary/50 transition-colors duration-500 group relative"
        >
            <div style={{ transform: "translateZ(50px)" }} className="relative">
                <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-black/20`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight text-foreground">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-base font-semibold">
                    {feature.description}
                </p>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
        </motion.div>
    );
};

const Features = () => {
    return (
        <section id="services" className="py-32 px-6 md:px-12 relative overflow-hidden scroll-mt-20 bg-background">
            {/* Clean structural layout for maximum readability */}

            <div className="text-center mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black mb-8 tracking-tighter"
                >
                    Our Specialist <span className="gradient-text">Services</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto font-bold"
                >
                    Providing comprehensive, evidence-based physiotherapy care for all types of performance and recovery needs.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Features;

