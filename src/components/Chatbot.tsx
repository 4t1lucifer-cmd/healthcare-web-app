"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Calendar, Activity, Phone, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ type: 'bot' | 'user'; text: string; options?: any[] }[]>([
        {
            type: 'bot',
            text: "Hi there! 👋 I'm your Physio Assistant. How can I help you recover today?",
            options: [
                { label: "Book Appointment", icon: Calendar, action: "book" },
                { label: "Our Services", icon: Activity, action: "services" },
                { label: "Contact Info", icon: Phone, action: "contact" }
            ]
        }
    ]);
    const router = useRouter();
    const chatEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen]);

    const handleOptionClick = (action: string, label: string) => {
        // Add user selection
        setMessages(prev => [...prev, { type: 'user', text: label }]);

        // Simulate Bot typing delay
        setTimeout(() => {
            let botResponse: { type: 'bot' | 'user'; text: string; options?: any[] };

            switch (action) {
                case 'book':
                    botResponse = {
                        type: 'bot',
                        text: "Great choice! Taking the first step is important. I'm redirecting you to our booking page...",
                    };
                    setTimeout(() => router.push('/appointment'), 1500);
                    break;
                case 'services':
                    botResponse = {
                        type: 'bot',
                        text: "We offer a wide range of specialized treatments. Redirecting you to our services...",
                    };
                    setTimeout(() => router.push('/#services'), 1500);
                    break;
                case 'contact':
                    botResponse = {
                        type: 'bot',
                        text: "You can reach us at: \n📞 +91 9792276532 \n📧 nadimraza@gmail.com \n\nWe are open Mon-Sat, 9AM - 7PM.",
                        options: [
                            { label: "Book Appointment", icon: Calendar, action: "book" },
                            { label: "Back to Menu", icon: Activity, action: "menu" }
                        ]
                    };
                    break;
                case 'menu':
                    botResponse = {
                        type: 'bot',
                        text: "Sure! What else can I do for you?",
                        options: [
                            { label: "Book Appointment", icon: Calendar, action: "book" },
                            { label: "Our Services", icon: Activity, action: "services" }
                        ]
                    };
                    break;
                default:
                    botResponse = { type: 'bot', text: "I'm here to help!" };
            }
            setMessages(prev => [...prev, botResponse]);
        }, 500);
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-[60] p-4 bg-[#1DB4A1] text-white rounded-full shadow-2xl shadow-[#1DB4A1]/40 border-4 border-white flex items-center justify-center"
            >
                {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed bottom-24 right-6 z-[60] w-[90vw] md:w-96 h-[500px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-[#1DB4A1] text-white flex items-center gap-3 shadow-md">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <User className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-black text-lg">Dr. Nadim's Assistant</h3>
                                <p className="text-xs text-white/80 font-bold flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Online
                                </p>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}
                                >
                                    {/* Message Bubble */}
                                    <div
                                        className={`max-w-[85%] p-3.5 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${msg.type === 'user'
                                                ? 'bg-[#1DB4A1] text-white rounded-br-none'
                                                : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'
                                            }`}
                                    >
                                        <p className="whitespace-pre-line">{msg.text}</p>
                                    </div>

                                    {/* Options Chips (Only for bot) */}
                                    {msg.options && (
                                        <div className="mt-3 grid grid-cols-1 gap-2 w-full max-w-[85%]">
                                            {msg.options.map((opt: any, i: number) => (
                                                <button
                                                    key={i}
                                                    onClick={() => handleOptionClick(opt.action, opt.label)}
                                                    className="flex items-center gap-3 p-3 bg-white border border-[#1DB4A1]/20 rounded-xl hover:bg-[#1DB4A1]/5 hover:border-[#1DB4A1] transition-all text-left group"
                                                >
                                                    <div className="w-8 h-8 bg-[#1DB4A1]/10 rounded-full flex items-center justify-center group-hover:bg-[#1DB4A1] transition-colors">
                                                        <opt.icon className="w-4 h-4 text-[#1DB4A1] group-hover:text-white" />
                                                    </div>
                                                    <span className="text-sm font-bold text-slate-700 group-hover:text-[#1DB4A1]">{opt.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                            <div ref={chatEndRef} />
                        </div>

                        {/* Input Area (Disabled for now as it's rule-based) */}
                        <div className="p-3 bg-white border-t border-slate-100 text-center text-xs text-slate-400 font-medium">
                            Powered by Advanced Agentic AI
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
