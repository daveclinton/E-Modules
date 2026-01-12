
import HeroBadge from "./hero-badge";
import HeroContent from "./hero-content";
import HeroImage from "./hero-image";
import HeroStats from "./hero-stats";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full py-24 md:py-32 bg-background text-foreground"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side: content */}
        <div className="space-y-8">
          <HeroContent />
          <HeroStats />
        </div>

        {/* Right side: image */}
        <div className="relative flex justify-center md:justify-end">
          <HeroImage />
          <HeroBadge />
        </div>
      </div>
    </section>
  );
}