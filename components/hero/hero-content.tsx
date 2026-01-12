import { Button } from "@/components/ui/button";

export default function HeroContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Innovative Technologies for{" "}
        <span className="text-primary">Modern Construction</span>
      </h1>

      <p className="text-muted-foreground max-w-md">
        Embrace cutting‑edge advancements like 3D printing, modular construction,
        and drones to revolutionize design, efficiency, and project delivery in
        the construction industry.
      </p>

      <div className="flex flex-wrap gap-4 pt-2">
        <Button className="bg-primary text-primary-foreground hover:opacity-90">
          Book now
        </Button>
        <Button
          variant="outline"
          className="border-2 border-foreground/20 hover:bg-muted"
        >
          Call us
        </Button>
      </div>
    </div>
  );
}