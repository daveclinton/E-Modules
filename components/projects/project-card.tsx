import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  location: string;
  date: string;
  scope: string;
  image: string;
  reverse?: boolean;
}

export function ProjectCard({
  title,
  description,
  location,
  date,
  scope,
  image,
  reverse = false,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "w-full grid md:grid-cols-2 items-stretch gap-0 rounded-3xl overflow-hidden border border-border bg-card shadow-sm",
        reverse && "md:[&>div:nth-child(1)]:order-2"
      )}
    >
      {/* Image */}
      <div className="relative h-64 md:h-auto">
        <Image
          src={image}
          alt={title}
          fill
          className={cn(
            "object-cover",
            reverse ? "md:rounded-l-3xl" : "md:rounded-r-3xl"
          )}
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        <div className="space-y-3 text-sm">
          <div className="flex">
            <span className="w-24 text-muted-foreground font-medium">
              Location:
            </span>
            <span>{location}</span>
          </div>
          <div className="flex">
            <span className="w-24 text-muted-foreground font-medium">
              Date:
            </span>
            <span>{date}</span>
          </div>
          <div className="flex">
            <span className="w-24 text-muted-foreground font-medium">
              Scope:
            </span>
            <span>{scope}</span>
          </div>
        </div>
      </div>
    </div>
  );
}