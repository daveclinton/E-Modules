import AboutSection from "@/components/about";
import HeroSection from "@/components/hero";
import ProjectsSection from "@/components/projects";
import ServicesSection from "@/components/services";
import TestimonialsSection from "@/components/testimonials";

export default function Home() {
  return (
   <>
   <HeroSection />
   <ServicesSection />
   <AboutSection />
   <ProjectsSection />
   <TestimonialsSection />
   </>
  );
}