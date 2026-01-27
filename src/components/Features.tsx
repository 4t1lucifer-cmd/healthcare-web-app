"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, HeartPulse, ShieldCheck, UserCheck, Globe, Accessibility, X, CheckCircle, ChevronRight, Star, ArrowLeft, Calendar } from 'lucide-react';
// ... (rest of imports are fine, just changed top)

// ... (features data - same)

// Inside Features component loop
// Replace Image rendering logic
// Note: Since I can't replace the whole file easily due to length, I will use targeted replacement or multi_replace.
// I'll assume the user wants the whole file logical update.
// Actually, simple replace of the import and the image tags is safest.

// Data reused with slight updates for visuals
const features = [
    {
        id: 'sports-injury',
        title: 'Sports Injury Rehabilitation',
        tagline: 'Return to Play, Stronger Than Before',
        description: 'Elite-level recovery protocols for athletes dealing with ACL tears, ligament strains, and performance issues.',
        fullDescription: 'Our sports rehabilitation program is built on the same protocols used by professional athletes. We do not just treat the pain; we analyze your biomechanics to correct the root cause of the injury. Whether you are a weekend warrior or a competitive player, our goal is to get you back on the field safely and quickly.',
        icon: Activity,
        color: 'text-orange-600',
        bg: 'bg-orange-50',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200',
        subServices: [
            'ACL & Meniscus Rehab',
            'Rotator Cuff Strengthening',
            'Running Gait Analysis',
            'Kinesio Taping & Strapping'
        ],
        patientStories: [
            {
                name: "Rahul K.",
                role: "Cricket Player",
                story: "After a Grade 2 ankle sprain, I was back bowling in the nets within 4 weeks. The rehab was intense but effective."
            },
            {
                name: "Priya Singh",
                role: "Marathon Runner",
                story: "Eliminated chronic shin splints with their gait correction program. Finally running pain-free."
            }
        ]
    },
    {
        id: 'post-op',
        title: 'Post-Surgical Rehabilitation',
        tagline: 'Safe, Guided Recovery After Surgery',
        description: 'Evidence-based care for Total Knee Replacements, Hip Surgeries, and Fracture repairs.',
        fullDescription: 'Surgery is only the first step. The success of your procedure largely depends on the quality of rehabilitation. We work in coordination with your orthopedic surgeon to ensure your recovery is on track, managing scar tissue, swelling, and restoring full range of motion.',
        icon: HeartPulse,
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200',
        subServices: [
            'Total Knee Replacement (TKR)',
            'Hip Replacement Rehab',
            'Spine Surgery Recovery',
            'Post-Fracture Mobilization'
        ],
        patientStories: [
            {
                name: "Mrs. Sharma",
                role: "Retired Teacher (68)",
                story: "I was terrified of walking after my knee replacement. The team gave me confidence and I was walking without a stick in 3 weeks."
            }
        ]
    },
    {
        id: 'chronic-pain',
        title: 'Chronic Pain Management',
        tagline: 'Break Free from Long-Term Pain',
        description: 'Specialized therapy for Cervical Spondylosis, Sciatica, and Lower Back Pain.',
        fullDescription: 'Chronic pain affects every aspect of your life. Our approach combines manual therapy to break the pain cycle with therapeutic exercises to build resilience. We focus on long-term relief, not just temporary fixes.',
        icon: ShieldCheck,
        color: 'text-purple-600',
        bg: 'bg-purple-50',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200',
        subServices: [
            'Sciatica Nerve Decompression',
            'Cervical Spondylosis Care',
            'Disc Bulge Treatment',
            'Fibromyalgia Support'
        ],
        patientStories: [
            {
                name: "Vikram R.",
                role: "Bank Manager",
                story: "Office work destroyed my back. Their ergonomic advice and therapy sessions saved me from surgery."
            }
        ]
    },
    {
        id: 'manual-therapy',
        title: 'Manual Therapy & Manipulation',
        tagline: 'Hands-On Healing for Stiffness',
        description: 'Joint mobilization, Myofascial Release, and Trigger Point Therapy.',
        fullDescription: 'Sometimes exercises are not enough. Our manual therapy techniques involve skilled hand movements to mobilize joints and soft tissues. This helps reduce inflammation, improve tissue extensibility, and provide immediate pain relief.',
        icon: UserCheck,
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        image: 'https://images.unsplash.com/photo-1600334019640-51026cf301d3?auto=format&fit=crop&q=80&w=1200',
        subServices: [
            'Spinal Manipulation',
            'Myofascial Release (MFR)',
            'Dry Needling',
            'Cupping Therapy'
        ],
        patientStories: [
            {
                name: "Amit J.",
                role: "Gym Enthusiast",
                story: "Frozen shoulder released in just one session of manipulation. Incredible relief."
            }
        ]
    },
    {
        id: 'home-visits',
        title: 'Home Visit Physiotherapy',
        tagline: 'Expert Care at Your Doorstep',
        description: 'For bedridden patients, stroke survivors, or those unable to travel.',
        fullDescription: 'We understand that travel is difficult for some patients. We bring fully equipped physiotherapy care to your home. Our home visit protocols are designed to be as effective as clinic sessions, ensuring continuity of care for neurological and geriatric conditions.',
        icon: Globe,
        color: 'text-rose-600',
        bg: 'bg-rose-50',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
        subServices: [
            'Stroke/Paralysis Rehab',
            'Geriatric Mobilization',
            'Post-Hospitalization Care',
            'Bedridden Patient Care'
        ],
        patientStories: [
            {
                name: "Mr. Verma",
                role: "Stroke Survivor",
                story: "The team helped my father stand again after his stroke. We are forever grateful."
            }
        ]
    },
    {
        id: 'ergonomics',
        title: 'Ergonomics & Posture',
        tagline: 'Work Without Pain',
        description: 'Posture correction and workstation assessments for corporates and professionals.',
        fullDescription: 'Prevent pain before it starts. We analyze your workspace and body mechanics to suggest changes that reduce strain. Ideal for IT professionals, dentists, and anyone sitting for long hours.',
        icon: Accessibility,
        color: 'text-cyan-600',
        bg: 'bg-cyan-50',
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
        subServices: [
            'Workstation Setup',
            'Tech-Neck Correction',
            'RSI Prevention',
            'Corporate Wellness'
        ],
        patientStories: [
            {
                name: "Tech Solutions Inc.",
                role: "Corporate Client",
                story: "Employee complaints of back pain dropped significantly after the ergonomic workshop."
            }
        ]
    },
];

const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

    // Lock body scroll when modal is open
    React.useEffect(() => {
        if (selectedFeature) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedFeature]);

    return (
        <section id="services" className="py-24 px-6 md:px-12 bg-white relative">
            {/* Main Listing Header */}
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight"
                >
                    Our Specialist <span className="text-primary">Services</span>
                </motion.h2>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                    Comprehensive, evidence-based care tailored to your needs.
                </p>
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <motion.div
                        layoutId={`card-container-${feature.id}`}
                        key={feature.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelectedFeature(feature)}
                        className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all cursor-pointer relative overflow-hidden flex flex-col items-start"
                    >
                        <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <feature.icon className={`w-6 h-6 ${feature.color}`} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors">{feature.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">{feature.description}</p>

                        <div className="mt-auto flex items-center text-primary font-bold text-xs uppercase tracking-wider">
                            View Details <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Immersive Product Page Modal */}
            <AnimatePresence>
                {selectedFeature && (
                    <motion.div
                        layoutId={`card-container-${selectedFeature.id}`}
                        className="fixed inset-0 z-[100] bg-white flex flex-col md:flex-row overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* CLOSE BUTTON (Mobile Fixed) */}
                        <button
                            onClick={() => setSelectedFeature(null)}
                            className="absolute top-4 left-4 z-50 p-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-colors md:hidden"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={() => setSelectedFeature(null)}
                            className="absolute top-6 right-6 z-50 p-2 bg-black/5 hover:bg-black/10 text-slate-800 rounded-full transition-colors hidden md:block"
                        >
                            <X className="w-8 h-8" />
                        </button>


                        {/* LEFT: IMAGE HERO (Scrollable on mobile, Fixed on Desktop) */}
                        <div className="w-full md:w-1/2 h-[45vh] md:h-full relative flex-shrink-0 bg-slate-100">
                            <motion.div
                                layoutId={`image-container-${selectedFeature.id}`}
                                className="w-full h-full relative"
                            >
                                <Image
                                    src={selectedFeature.image}
                                    alt={selectedFeature.title}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />

                            {/* Mobile Title Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 md:hidden">
                                <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider mb-2 inline-block">
                                    PhysioCare Service
                                </span>
                                <h2 className="text-2xl font-black text-white leading-tight">{selectedFeature.title}</h2>
                            </div>
                        </div>

                        {/* RIGHT: CONTENT SCROLLABLE */}
                        <div className="w-full md:w-1/2 h-full flex flex-col bg-white overflow-y-auto relative">
                            <div className="p-6 md:p-12 pb-32">
                                {/* Desktop Breadcrumb/Badge */}
                                <div className="hidden md:flex items-center gap-2 mb-6 text-sm font-bold text-slate-400 uppercase tracking-widest">
                                    <span className="text-primary">Services</span>
                                    <ChevronRight className="w-4 h-4" />
                                    <span>{selectedFeature.id.replace('-', ' ')}</span>
                                </div>

                                <motion.h2
                                    className="hidden md:block text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight"
                                >
                                    {selectedFeature.title}
                                </motion.h2>

                                <p className="text-lg md:text-xl font-medium text-slate-500 mb-8 md:mb-10 leading-relaxed">
                                    {selectedFeature.fullDescription}
                                </p>

                                <div className="h-px w-full bg-slate-100 mb-10" />

                                {/* Sub Services Grid */}
                                <div className="mb-12">
                                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                        <Activity className="w-5 h-5 text-primary" /> What We Treat
                                    </h3>
                                    <div className="grid grid-cols-1 gap-4">
                                        {selectedFeature.subServices.map((sub, idx) => (
                                            <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/30 transition-colors">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle className="w-3 h-3 text-green-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-800 text-base">{sub}</h4>
                                                    <p className="text-slate-400 text-sm">Specialized protocol available.</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Patient Stories */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                        <Star className="w-5 h-5 text-yellow-500" /> Success Stories
                                    </h3>
                                    <div className="bg-yellow-50/50 rounded-2xl p-6 border border-yellow-100/50">
                                        {selectedFeature.patientStories.map((story, idx) => (
                                            <div key={idx} className="mb-6 last:mb-0">
                                                <p className="text-slate-700 italic text-lg mb-3 leading-relaxed">"{story.story}"</p>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-yellow-200 flex items-center justify-center font-bold text-yellow-700 text-xs">
                                                        {story.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900 text-sm">{story.name}</p>
                                                        <p className="text-slate-500 text-xs uppercase font-bold">{story.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sticky Footer CTA */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-white border-t border-slate-100 flex items-center justify-between z-10 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
                                <div className="hidden md:block">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Ready to start?</p>
                                    <p className="font-black text-slate-800 text-lg">Book your session today</p>
                                </div>
                                <a
                                    href="#contact"
                                    onClick={() => setSelectedFeature(null)}
                                    className="w-full md:w-auto bg-primary text-white px-8 py-4 rounded-xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Book Appointment
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Features;
