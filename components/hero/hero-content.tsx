import { Button } from "@/components/ui/button";

export default function HeroContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Designing with Purpose.{" "}
        <span className="text-primary">Building to Standard.</span>
      </h1>

      <p className="text-muted-foreground max-w-md">
        E‑Design Modules is a multidisciplinary design and construction firm based in Kenya, delivering compliant architectural, quantity surveying, and construction solutions for projects of all scales.
      </p>

      <div className="flex flex-wrap gap-4 pt-2">
        <Button className="bg-primary text-primary-foreground hover:opacity-90">
          Book Now
        </Button>
        <Button
          variant="outline"
          className="border-2 border-foreground/20 hover:bg-muted"
          asChild
        >
          <a href="tel:+254722272982">Call Us</a>
        </Button>
      </div>
    </div>
  );
}