import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-black mb-12 text-slate-900">
                    Get in <span className="text-[#1DB4A1]">Touch</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                            Have questions? We are here to help. Reach out to us for any queries regarding our services or your treatment plan.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                                    <a href="tel:+919771935170" className="text-slate-600 hover:text-primary transition-colors block">+91 9771935170</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email</h3>
                                    <a href="mailto:nadimraza0123@gmail.com" className="text-slate-600 hover:text-primary transition-colors block">nadimraza0123@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Clinic Address</h3>
                                    <p className="text-slate-600">
                                        Clinic Center, New Delhi<br />
                                        Serving Noida, Gurgaon, Patna
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                                    <p className="text-slate-600">
                                        Mon - Sat: 9:00 AM - 8:00 PM<br />
                                        Sunday: By Appointment
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#1DB4A1] p-10 rounded-[2.5rem] text-white flex flex-col justify-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-black mb-6">Need an Appointment?</h2>
                            <p className="text-white/90 mb-8 text-lg font-medium">
                                Skip the queue and book your consultation online instantly.
                            </p>
                            <a
                                href="/appointment"
                                className="inline-block bg-white text-[#1DB4A1] px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-slate-50 transition-colors"
                            >
                                Book a Check-up Now
                            </a>
                        </div>
                        {/* Decorative Circle */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full" />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
