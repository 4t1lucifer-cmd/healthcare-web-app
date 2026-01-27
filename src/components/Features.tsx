"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, HeartPulse, ShieldCheck, UserCheck, Globe, Accessibility, X, CheckCircle, ChevronRight, Star } from 'lucide-react';

const features = [
    {
        id: 'sports-injury',
        title: 'Sports Injuries',
        description: 'Targeted recovery plans for athletes to return to peak performance safely and quickly.',
        fullDescription: 'Our sports injury rehabilitation program is designed for athletes of all levels. We focus not just on healing the injury, but on correcting the underlying biomechanical issues that caused it. From acute management to return-to-sport testing, we are with you every step of the way.',
        icon: Activity,
        color: 'text-yellow-500',
        bg: 'bg-yellow-500/10',
        image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800',
        subServices: [
            'ACL & Ligament Rehab',
            'Rotator Cuff Strengthening',
            'Running Analysis',
            'Kinesio Taping'
        ],
        patientStories: [
            {
                name: "Rahul K.",
                role: "Cricket Player",
                story: "Recovered from a Grade 2 ankle sprain in just 4 weeks and cleared for the seasonal tournament."
            },
            {
                name: "Priya Singh",
                role: "Marathon Runner",
                story: "Eliminated chronic shin splints with gait correction and returned to running pain-free."
            }
        ]
    },
    {
        id: 'post-op',
        title: 'Post-Op Rehab',
        description: 'Specialized care to restore strength and mobility after surgical procedures.',
        fullDescription: 'Surgery is only half the battle. Our post-operative protocols are evidence-based and customized to your specific surgery type. We work closely with your surgeon to ensure safe progression, minimizing scar tissue and maximizing range of motion.',
        icon: HeartPulse,
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
        subServices: [
            'Total Knee Replacement',
            'Hip Replacement Rehab',
            'Spinal Surgery Recovery',
            'Fracture Management'
        ],
        patientStories: [
            {
                name: "Mrs. Sharma",
                role: "Retired Teacher (68)",
                story: "Started walking independently without a stick just 3 weeks after Total Knee Replacement."
            },
            {
                name: "Ankit D.",
                role: "Software Engineer",
                story: "Regained full shoulder mobility 2 months post-shoulder stabilization surgery."
            }
        ]
    },
    {
        id: 'chronic-pain',
        title: 'Chronic Pain',
        description: 'Comprehensive management strategies for long-term neck, back, and joint pain.',
        fullDescription: 'Living with chronic pain can be debilitating. We use a combination of manual therapy, dry needling, and therapeutic exercise to break the pain cycle. Our holistic approach addresses lifestyle factors and posture to prevent recurrence.',
        icon: ShieldCheck,
        color: 'text-purple-500',
        bg: 'bg-purple-500/10',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
        subServices: [
            'Sciatica Relief',
            'Cervical Spondylosis',
            'Lower Back Pain',
            'Fibromyalgia Management'
        ],
        patientStories: [
            {
                name: "Vikram R.",
                role: "Bank Manager",
                story: "Suffered from 5 years of back pain. After 6 sessions, pain reduced by 80% and sleep improved."
            },
            {
                name: "Suman T.",
                role: "Homemaker",
                story: "Managed severe cervical spondylosis without painkillers through consistent therapy."
            }
        ]
    },
    {
        id: 'manual-therapy',
        title: 'Manual Therapy',
        description: 'Hands-on techniques to manipulate joints and soft tissue for pain relief.',
        fullDescription: 'Our manual therapy techniques allow us to assess and treat restriction in movement. We use hands-on manipulation, mobilization, and massage to reduce pain, increase range of motion, and reduce inflammation in soft tissues.',
        icon: UserCheck,
        color: 'text-green-500',
        bg: 'bg-green-500/10',
        image: 'https://images.unsplash.com/photo-1600334019640-51026cf301d3?auto=format&fit=crop&q=80&w=800',
        subServices: [
            'Joint Mobilization',
            'Myofascial Release',
            'Trigger Point Therapy',
            'Cupping Therapy'
        ],
        patientStories: [
            {
                name: "Amit J.",
                role: "Gym Enthusiast",
                story: "Restored shoulder mobility instantly after one session of frozen shoulder manipulation."
            }
        ]
    },
    {
        id: 'home-visits',
        title: 'Home Visits',
        description: 'Professional physiotherapy services in the comfort and privacy of your home.',
        fullDescription: 'For patients with limited mobility or severe pain, travelling to a clinic can be harmful. We bring the clinic to you. Our home visit kits are fully equipped to handle complex rehabilitation cases including stroke and bedridden care.',
        icon: Globe,
        color: 'text-pink-500',
        bg: 'bg-pink-500/10',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
        subServices: [
            'Geriatric Care',
            'Stroke Rehabilitation',
            'Bedridden Patient Mobilization',
            'Post-Hospitalization Care'
        ],
        patientStories: [
            {
                name: "Mr. Verma",
                role: "Stroke Survivor",
                story: "Regained ability to stand and walk to the bathroom independently after 2 months of home rehab."
            }
        ]
    },
    {
        id: 'ergonomics',
        title: 'Ergonomics',
        description: 'Expert advice on workplace setup to prevent strain and repetitive injuries.',
        fullDescription: 'In the digital age, poor posture is the leading cause of musculoskeletal disorders. We analyze your workstation and daily habits to effect changes that prevent pain before it starts. Perfect for corporates and WFH professionals.',
        icon: Accessibility,
        color: 'text-cyan-500',
        bg: 'bg-cyan-500/10',
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
        subServices: [
            'Workstation Assessment',
            'Posture Correction',
            'RSI Prevention',
            'Corporate Workshops'
        ],
        patientStories: [
            {
                name: "Tech Solutions Inc.",
                role: "Corporate Client",
                story: "Employee back pain complaints dropped by 60% following our ergonomics workshop."
            }
        ]
    },
];

const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

    return (
        <section id="services" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
            {/* Header */}
            <div className="text-center mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
                >
                    Specialized <span className="gradient-text">Care</span>
                </motion.h2>
                <p className="text-foreground/60 text-lg max-w-2xl mx-auto font-medium">
                    Tap on any service to explore detailed treatment plans and successes.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <motion.div
                        layoutId={`card-${feature.id}`}
                        key={feature.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelectedFeature(feature)}
                        className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl hover:border-primary/20 transition-all cursor-pointer relative overflow-hidden"
                    >
                        <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <feature.icon className={`w-7 h-7 ${feature.color}`} />
                        </div>
                        <h3 className="text-2xl font-black mb-3 text-slate-800">{feature.title}</h3>
                        <p className="text-slate-600 font-medium leading-relaxed mb-6">{feature.description}</p>

                        <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                            View Details <ChevronRight className="w-4 h-4 ml-1" />
                        </div>

                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </motion.div>
                ))}
            </div>

            {/* Expanded Modal */}
            <AnimatePresence>
                {selectedFeature && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedFeature(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`card-${selectedFeature.id}`}
                            className="w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl relative overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
                        >
                            {/* Close Button */}
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedFeature(null); }}
                                className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Image Section */}
                            <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                                <img
                                    src={selectedFeature.image}
                                    alt={selectedFeature.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 md:hidden">
                                    <h3 className="text-3xl font-black text-white">{selectedFeature.title}</h3>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 md:p-12 overflow-y-auto flex-1">
                                <div className={`hidden md:flex w-14 h-14 rounded-2xl ${selectedFeature.bg} items-center justify-center mb-6`}>
                                    <selectedFeature.icon className={`w-7 h-7 ${selectedFeature.color}`} />
                                </div>

                                <h3 className="hidden md:block text-4xl font-black mb-6 text-slate-800">{selectedFeature.title}</h3>

                                <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                                    {selectedFeature.fullDescription}
                                </p>

                                <div className="space-y-8">
                                    {/* Sub Services */}
                                    <div>
                                        <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">Treatment Includes</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {selectedFeature.subServices.map((sub, idx) => (
                                                <div key={idx} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                    <span className="font-bold text-slate-700">{sub}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Patient Stories */}
                                    <div>
                                        <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">Patient Success Stories</h4>
                                        <div className="space-y-4">
                                            {selectedFeature.patientStories.map((story, idx) => (
                                                <div key={idx} className="bg-yellow-50/50 p-5 rounded-2xl border border-yellow-100">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                        <span className="font-black text-slate-800">{story.name}</span>
                                                        <span className="text-slate-400 text-sm font-bold bg-white px-2 py-0.5 rounded-full border border-slate-100">{story.role}</span>
                                                    </div>
                                                    <p className="text-slate-600 italic">"{story.story}"</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 pt-8 border-t border-slate-100">
                                    <a
                                        href="#contact"
                                        onClick={() => setSelectedFeature(null)}
                                        className="block w-full text-center bg-primary text-white py-4 rounded-xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                                    >
                                        Book This Service
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Features;
