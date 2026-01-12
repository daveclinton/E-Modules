"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { TestimonialCard } from "./testimonial-card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sophia H.",
      role: "Civil Engineer",
      image: "/avatars/avatar-1.avif",
      review:
        "The interior finishing on my new home is stunning! Every detail, from flooring to custom cabinetry, was done with excellence. They truly went above and beyond to deliver a beautiful space.",
    },
    {
      name: "Jidan D.",
      role: "Homeowner",
      image: "/avatars/avatar-2.avif",
      review:
        "Our office renovation exceeded all expectations! The team was professional, punctual, and highly skilled. They delivered a result that inspires creativity in our workspace.",
    },
    {
      name: "Thomas G.",
      role: "Project Manager",
      image: "/avatars/avatar-3.avif",
      review:
        "We hired them for an outdoor project — the results are breathtaking. The team was responsive and professional, transforming our yard into a gorgeous, usable space that enhanced our curb appeal.",
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