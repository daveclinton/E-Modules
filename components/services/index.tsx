"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ServiceCard } from "./service-card";
import { Pencil, Calculator, Building2, ClipboardList, Hammer, Home } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function ServicesSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const services = [
    {
      title: "Architectural Design & Planning",
      description:
        "Professional architectural designs that are functional, practical, and compliant with Kenyan planning and building regulations. Includes: Concept design, approval drawings, 2D & 3D designs, space planning.",
      icon: <Pencil className="w-5 h-5" />,
      active: true,
    },
    {
      title: "Quantity Surveying & Cost Management",
      description:
        "Accurate cost planning and financial control to ensure projects are delivered within budget. Includes: BOQs, cost estimates, tender analysis, cost reports.",
      icon: <Calculator className="w-5 h-5" />,
    },
    {
      title: "General Building Construction",
      description:
        "Construction of residential, commercial, and institutional buildings from foundation to completion. Includes: Site supervision, skilled labor coordination, quality control.",
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      title: "Project Management",
      description:
        "End‑to‑end project coordination to ensure timely delivery, cost control, and quality standards. Includes: Scheduling, contractor coordination, progress monitoring.",
      icon: <ClipboardList className="w-5 h-5" />,
    },
    {
      title: "Renovations & Extensions",
      description:
        "Upgrading and extending existing buildings while maintaining safety and compliance. Includes: Residential renovations, commercial refurbishments.",
      icon: <Hammer className="w-5 h-5" />,
    },
    {
      title: "Interior Fit‑Out & Finishes",
      description:
        "Modern interior solutions tailored to client needs and space usage. Includes: Office fit‑outs, residential interiors, finish selection.",
      icon: <Home className="w-5 h-5" />,
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-24 bg-muted/20 text-foreground overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Services Tailored to You
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
              We provide customized construction solutions designed to meet your
              unique needs, ensuring every project reflects your vision and
              exceeds expectations.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-3">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-background hover:bg-muted transition-colors"
              aria-label="Previous service"
            >
              ‹
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-background hover:bg-muted transition-colors"
              aria-label="Next service"
            >
              ›
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.15}
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
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