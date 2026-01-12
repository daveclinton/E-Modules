import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  review: string;
  rating?: number;
}

export function TestimonialCard({
  name,
  role,
  image,
  review,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm h-full flex flex-col justify-between text-center">
      {/* Top */}
      <div className="flex flex-col items-center mb-4">
        <div className="w-16 h-16 relative mb-3">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <span className="text-sm text-muted-foreground">{role}</span>
      </div>

      {/* Review */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {review}
      </p>

      {/* Stars */}
      <div className="flex justify-center space-x-1 text-yellow-500">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
    </div>
  );
}