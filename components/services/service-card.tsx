import { cn } from "@/lib/utils";
// import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  active?: boolean;
}

export function ServiceCard({ title, description, icon, active }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between p-6 rounded-2xl border transition-colors duration-300",
        active
          ? "bg-foreground text-background border-transparent shadow-md"
          : "bg-card text-foreground hover:border-primary/30"
      )}
    >
      <div className="flex flex-col space-y-4">
        <div
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-full",
            active ? "bg-background/20" : "bg-primary/10 text-primary"
          )}
        >
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p
          className={cn(
            "text-sm leading-relaxed",
            active ? "text-background/90" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      </div>
      {/* <button
        className={cn(
          "mt-6 inline-flex items-center space-x-1 text-sm font-medium",
          active ? "text-background underline" : "text-primary hover:underline"
        )}
      >
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4" />
      </button> */}
    </div>
  );
}