"use client";

import { Button } from "@/components/ui/button";
import { Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState, FormEvent } from "react";

export default function Footer() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      // You can integrate with your email service here
      window.location.href = `mailto:info@edesignmodules.co.ke?subject=Newsletter Subscription&body=Please subscribe ${email} to your newsletter.`;
      setEmail("");
    }
  };

  // Determine which logo to use based on theme
  // Footer has opposite theme: when site is dark, footer is light (white)
  // and when site is light, footer is dark
  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");
  // Invert the logic: if site is dark (footer is light), use light logos
  // if site is light (footer is dark), use dark logos
  const logoSrc = isDark ? "/light-logo.png" : "/dark-logo.png";
  const logoIconSrc = isDark ? "/light-logo-icon.png" : "/dark-logo-icon.png";

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Service", href: "#services" },
    { label: "Projects", href: "#projects" },
  ];

  const utilityLinks = [
    { label: "Property", href: "#" },
    { label: "Our Mission", href: "#about" },
    { label: "Our Vision", href: "#about" },
    { label: "Our History", href: "#about" },
  ];

  const socialIcons = [
    { icon: <Facebook className="w-4 h-4" />, href: "#" },
    { icon: <Instagram className="w-4 h-4" />, href: "#" },
    { icon: <Linkedin className="w-4 h-4" />, href: "#" },
    { icon: <Twitter className="w-4 h-4" />, href: "#" },
  ];

  return (
    <footer
      id="contact"
      className="bg-foreground text-background w-full pt-24 pb-8 rounded-t-[2rem]"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* CTA Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Let's Create Your Ideal Space
            </h2>
            <p className="text-sm max-w-xl text-background/80">
              Together, we’ll design and build a space that perfectly matches
              your vision, needs, and lifestyle. From concept to completion,
              we’re here to bring your dream space to life.
            </p>
          </div>

          <form 
            onSubmit={handleSubscribe}
            className="flex items-center gap-2 bg-background rounded-full p-1 pl-4 shadow-sm w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
            />
            <Button 
              type="submit"
              className="bg-primary text-primary-foreground rounded-full px-6"
            >
              Subscribe
            </Button>
          </form>
        </div>

        <div className="grid md:grid-cols-4 gap-12 border-t border-background/10 pt-12">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {mounted ? (
                <>
                  <Image
                    src={logoIconSrc}
                    alt="E-Design Modules Icon"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                  <Image
                    src={logoSrc}
                    alt="E-Design Modules Logo"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                </>
              ) : (
                <div className="flex items-center space-x-2 font-semibold text-lg">
                  <div className="w-6 h-6 rounded-sm bg-primary"></div>
                  <span>E‑Design Modules</span>
                </div>
              )}
            </div>
            <p className="text-sm text-background/80 max-w-sm">
              Revolutionizing the construction industry with innovative solutions
              and expert craftsmanship to transform spaces into modern,
              functional, and sustainable environments.
            </p>

            <div className="flex space-x-3 pt-4">
              {socialIcons.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Utility Pages</h4>
            <ul className="space-y-2 text-sm">
              {utilityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Nakuru County, Kenya</li>
              <li>(awaiting confirmation)</li>
              <li>+254 722 272982</li>
              <li className="pt-2">
                <span className="font-medium">Operating Hours:</span><br />
                Mon–Fri 8:00 AM–5:00 PM<br />
                Sat 8:00 AM–1:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 flex flex-col md:flex-row justify-between items-center pt-6 text-sm opacity-80">
          <p>© E‑Design Modules 2026</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-primary">
              Term of service
            </Link>
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}