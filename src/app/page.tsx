import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Contact />
      <footer className="py-12 border-t border-white/5 text-center text-secondary text-sm">
        &copy; {new Date().getFullYear()} WebAgent AI. All rights reserved.
      </footer>
    </main>
  );
}
