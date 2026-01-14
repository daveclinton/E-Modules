import Image from "next/image";
import { User } from "lucide-react";

export default function HeroImage() {
  return (
    <div className="relative">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/hero-construction.jpeg"
          alt="Construction team discussing blueprint"
          width={600}
          height={400}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Floating avatars */}
      <div className="absolute -bottom-6 left-6 flex items-center space-x-2">
        <AvatarGroup />
      </div>
    </div>
  );
}


function AvatarGroup() {
  const avatarCount = 3;

  return (
    <div className="flex -space-x-3">
      {Array.from({ length: avatarCount }).map((_, i) => (
        <div
          key={i}
          className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center"
        >
          <User className="w-5 h-5 text-muted-foreground" />
        </div>
      ))}
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-background text-sm font-medium border-2 border-background">
        +
      </div>
    </div>
  );
}