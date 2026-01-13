import { Button } from "@/components/ui/button";
import { ProjectCard } from "./project-card";


export default function ProjectsSection() {
  
  const projects = [
    {
      title: "Modern Residential Bungalow",
      description:
        "A contemporary residential bungalow designed and built with a focus on functionality, comfort, and cost efficiency.",
      location: "Nakuru County, Kenya",
      date: "Duration: 6 months",
      scope: "Design, Quantity Surveying, and Construction",
      image: "/images/project-1.avif",
    },
    {
      title: "Commercial Office Development",
      description:
        "A commercial office project in Nairobi delivered within budget and in full compliance with county and national regulations.",
      location: "Nairobi, Kenya",
      date: "Duration: 9 months",
      scope: "Project Management and Construction",
      image: "/images/project-2.avif",
      reverse: true,
    },
    {
      title: "Mixed‑Use Development",
      description:
        "A mixed residential and commercial development focused on durability and efficient space utilization.",
      location: "Kenya",
      date: "Duration: 12 months",
      scope: "Design Coordination and Construction",
      image: "/images/project-1.avif",
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