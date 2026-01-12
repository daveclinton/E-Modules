import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/hero-construction.png"
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
  const avatars = [
    "/avatars/avatar-1.avif",
    "/avatars/avatar-2.avif",
    "/avatars/avatar-3.avif",
  ];

  return (
    <div className="flex -space-x-3">
      {avatars.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt="team member"
          width={40}
          height={40}
          className="rounded-full border-2 border-background"
        />
      ))}
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-background text-sm font-medium border-2 border-background">
        +
      </div>
    </div>
  );
}