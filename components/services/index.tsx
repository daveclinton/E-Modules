"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ServiceCard } from "./service-card";
import { Hammer, Home, Droplet, Building2 } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function ServicesSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const services = [
    {
      title: "Building Renovation",
      description:
        "Transforming outdated spaces into modern, functional, and aesthetically pleasing ones.",
      icon: <Hammer className="w-5 h-5" />,
      active: true,
    },
    {
      title: "Interior Finishing",
      description:
        "Delivering impeccable craftsmanship to enhance beauty and comfort.",
      icon: <Home className="w-5 h-5" />,
    },
    {
      title: "Roofing Solutions",
      description:
        "Providing durable and innovative roofing systems designed to protect.",
      icon: <Droplet className="w-5 h-5" />,
    },
    {
      title: "Foundation Repair",
      description:
        "Ensuring structural stability with expert foundation solutions.",
      icon: <Building2 className="w-5 h-5" />,
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-24 bg-muted/20 text-foreground overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Services Tailored to You
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              We provide customized construction solutions designed to meet your
              unique needs, ensuring every project reflects your vision and
              exceeds expectations.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex space-x-3">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-background hover:bg-muted transition-colors"
            >
              ‹
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-background hover:bg-muted transition-colors"
            >
              ›
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          onInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
              const nav = swiper.params.navigation;
              if (nav) {
                nav.prevEl = prevRef.current;
                nav.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.title}>
              <ServiceCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}