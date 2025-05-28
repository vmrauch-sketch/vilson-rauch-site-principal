
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowWeWork } from "@/components/HowWeWork";
import { Services } from "@/components/Services";
import { AdvancedStrategies } from "@/components/AdvancedStrategies";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Hero />
      <About />
      <HowWeWork />
      <Services />
      <AdvancedStrategies />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
