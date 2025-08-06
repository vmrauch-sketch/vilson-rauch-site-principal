
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ValorumSection } from "@/components/ValorumSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Hero />
      <About />
      <ValorumSection />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
