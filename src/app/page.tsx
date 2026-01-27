import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Awareness from "@/components/Awareness";
import Footer from "@/components/Footer";
// Deployment trigger comment - Refined Theme & High Contrast Readability
export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Awareness />
      <Footer />
    </main>
  );
}
