import { Button } from "@/components/ui/button";
import { ProjectCard } from "./project-card";


export default function ProjectsSection() {
  const projects = [
    {
      title: "Harbor View Residences",
      description:
        "A luxury residential development offering stunning waterfront views and modern amenities for an elevated living experience.",
      location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      date: "08/08/2023 – 12/05/2024",
      scope: "Office Complex Development",
      image: "/images/project-1.avif",
    },
    {
      title: "Sunset Ridge Development",
      description:
        "A premium residential community designed for modern living, offering breathtaking views and exceptional amenities.",
      location: "8502 Preston Rd. Inglewood, Maine 98380",
      date: "01/02/2023 – 02/01/2024",
      scope: "Mixed-Use Residential Complex",
      image: "/images/project-2.avif",
      reverse: true,
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-24 md:py-32 bg-background text-foreground"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Featured Construction Projects
            </h2>
            <p className="text-muted-foreground max-w-3xl leading-relaxed">
              Explore our portfolio of successful projects, where innovative
              design, quality craftsmanship, and attention to detail come
              together to create exceptional results. Each project reflects our
              commitment to exceeding client expectations.
            </p>
          </div>

          {/* <Button className="bg-primary text-primary-foreground whitespace-nowrap">
            Go Project Page
          </Button> */}
        </div>

        <div className="space-y-12">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}