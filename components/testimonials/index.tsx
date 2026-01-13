"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { TestimonialCard } from "./testimonial-card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "James K.",
      role: "Home Owner",
      image: "/avatars/avatar-1.avif",
      review:
        "E‑Design Modules handled our project professionally from design to completion. The quality and cost control were excellent.",
    },
    {
      name: "Grace M.",
      role: "Homeowner",
      image: "/avatars/avatar-2.avif",
      review:
       "They delivered on time and within budget. Communication was clear and the team was professional.",
    },
    {
      name: "Daniel O.",
      role: "Commercial Client",
      image: "/avatars/avatar-3.avif",
      review:
        "A reliable construction company with strong technical expertise. Highly recommended."
    },
  ];

  return (
    <section
      id="testimonials"
      className="w-full py-24 md:py-32 bg-background text-foreground"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Say Our Customers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our clients trust us for reliability, attention to detail, and
            dedication to delivering projects on time and within budget. Hear
            from those who have experienced the quality and professionalism that
            sets us apart in the construction industry.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1.1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}