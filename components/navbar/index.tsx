"use client";

import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import clsx from "clsx";

const navItems = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Services", href: "services" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="w-full bg-background/70 backdrop-blur-lg sticky top-0 z-50">
      <div className="mx-auto max-w-7xl flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <button
          onClick={() => handleScroll("home")}
          className="font-bold text-lg text-primary"
        >
          Renovate
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right: Theme & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button className="bg-primary text-primary-foreground">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="flex flex-col px-6 pb-4 space-y-2 bg-background border-t border-border">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.href)}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground text-left"
            >
              {item.name}
            </button>
          ))}
          <div className="flex justify-between items-center pt-4">
            <Button className="bg-primary text-primary-foreground w-full">
              Book Now
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}