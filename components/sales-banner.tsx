"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SalesBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner was dismissed in localStorage
    const dismissed = localStorage.getItem("sales-banner-dismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("sales-banner-dismissed", "true");
  };

  const handleCTAClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="w-full bg-accent/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <p className="text-sm sm:text-base text-accent-foreground font-medium truncate">
              <span className="hidden sm:inline">🎉 </span>
              <span className="font-semibold">Limited Time Offer:</span> Get 15% off on all construction projects. Book your consultation today!
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              onClick={handleCTAClick}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-3 sm:px-4 text-xs sm:text-sm hidden sm:flex items-center gap-1"
            >
              Get Started
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
            <button
              onClick={handleDismiss}
              className="p-1 rounded-md hover:bg-background/20 transition-colors text-accent-foreground/70 hover:text-accent-foreground"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
