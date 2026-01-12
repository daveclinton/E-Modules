import AboutImages from "./about-images";
import AboutTabs from "./about-tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-24 md:py-32 bg-background text-foreground"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              About Our Company
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              With years of experience in the construction industry, we
              specialize in delivering high-quality, innovative, and sustainable
              solutions tailored to meet the unique needs of our clients.
            </p>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AboutImages />
          <AboutTabs />
        </div>

        {/* Support logos */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold mb-10">Support Our Company</h3>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-80">
            <Image
              src="/logos/aha.png"
              alt="Constructionline"
              width={120}
              height={80}
            />
            <Image
              src="/logos/ashp.png"
              alt="Turner"
              width={80}
              height={60}
            />
            <Image
              src="/logos/credentialing.png"
              alt="Lafarge"
              width={120}
              height={80}
            />
            <Image
              src="/logos/science.png"
              alt="Hyundai"
              width={160}
              height={90}
            />
            <Image
              src="/logos/surgeons.png"
              alt="Parkside"
              width={160}
              height={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}