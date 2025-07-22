import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import MemeCoinGroupsSection from "@/components/MemeCoinGroupsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <MemeCoinGroupsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Index;