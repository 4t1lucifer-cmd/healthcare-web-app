import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HandShakeBackground from "@/components/HandShakeBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <HandShakeBackground />
      <Navbar />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
