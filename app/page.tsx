import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import GrowthAudit from "@/components/GrowthAudit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#08111F] min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Process />
      <GrowthAudit />
      <Contact />
      <Footer />
    </main>
  );
}