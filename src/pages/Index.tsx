
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ValorumSection } from "@/components/ValorumSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Hero />
      <About />
      <Services />
      <ValorumSection />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
