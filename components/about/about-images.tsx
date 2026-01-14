import Image from "next/image";

export default function AboutImages() {
  return (
    <div className="relative w-full max-w-lg mx-auto md:mx-0">
      <div className="overflow-hidden rounded-xl">
        <Image
          src="/images/about-image-1.jpeg"
          alt="Architect plans on desk"
          width={600}
          height={400}
          className="object-cover rounded-xl"
        />
      </div>

      <div className="absolute -bottom-10 -right-10 w-56 sm:w-64 rounded-xl overflow-hidden border-4 border-background shadow-lg">
        <Image
          src="/images/about-image-2.jpeg"
          alt="Construction team at site"
          width={400}
          height={300}
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  );
}