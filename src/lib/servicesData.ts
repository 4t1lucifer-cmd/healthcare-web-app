import { Activity, HeartPulse, ShieldCheck, UserCheck, Globe, Accessibility } from 'lucide-react';

export const features = [
    {
        id: 'sports-injury',
        title: 'Sports Injury Rehabilitation',
        tagline: 'Return to Play, Stronger Than Before',
        description: 'Elite-level recovery protocols for athletes dealing with ACL tears, ligament strains, and performance issues.',
        fullDescription: 'Our sports rehabilitation program is built on the same protocols used by professional athletes. We do not just treat the pain; we analyze your biomechanics to correct the root cause of the injury. Whether you are a weekend warrior or a competitive player, our goal is to get you back on the field safely and quickly.',
        icon: Activity,
        color: 'text-orange-600',
        bg: 'bg-orange-50',
        gradient: 'from-orange-50 to-white',
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
        gradient: 'from-blue-50 to-white',
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
        gradient: 'from-purple-50 to-white',
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
        gradient: 'from-emerald-50 to-white',
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
        gradient: 'from-rose-50 to-white',
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
        gradient: 'from-cyan-50 to-white',
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
