
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { AdvancedStrategies } from "@/components/AdvancedStrategies";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Hero />
      <About />
      <AdvancedStrategies />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
