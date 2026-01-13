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
              About E‑Design Modules
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              E‑Design Modules is a multidisciplinary construction and design company based in Kenya, with offices in both Nakuru County and Nairobi. Established in 2010, the company integrates architecture, quantity surveying, and construction management to deliver cost‑efficient, compliant, and reliable projects for all clients.
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