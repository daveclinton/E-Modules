"use client";

import { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

const PHONE_NUMBER = "+254722272982";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello, I'm interested in your construction services.");
    window.open(`https://wa.me/${PHONE_NUMBER.replace(/[^0-9]/g, "")}?text=${message}`, "_blank");
  };

  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-end gap-3">
      {/* Contact Options Menu */}
      <div
        className={clsx(
          "flex flex-col gap-2 transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto visible" : "opacity-0 translate-y-4 pointer-events-none invisible"
        )}
      >
        <Button
          onClick={handleCall}
          className="bg-green-600 hover:bg-green-700 text-white shadow-lg rounded-full px-3 py-5 sm:px-4 sm:py-6 h-auto gap-2 text-sm sm:text-base"
          aria-label="Call us"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-medium">Call Us</span>
        </Button>
        <Button
          onClick={handleWhatsApp}
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg rounded-full px-3 py-5 sm:px-4 sm:py-6 h-auto gap-2 text-sm sm:text-base"
          aria-label="Message us on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-medium">WhatsApp</span>
        </Button>
        <Button
          onClick={handleScrollToContact}
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg rounded-full px-3 py-5 sm:px-4 sm:py-6 h-auto gap-2 text-sm sm:text-base"
          aria-label="Go to contact section"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-medium">Contact</span>
        </Button>
      </div>

      {/* Main Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl transition-all duration-300 touch-manipulation",
          isOpen
            ? "bg-destructive hover:bg-destructive/90 text-destructive-foreground rotate-45"
            : "bg-primary hover:bg-primary/90 text-primary-foreground"
        )}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </Button>
    </div>
  );
}
