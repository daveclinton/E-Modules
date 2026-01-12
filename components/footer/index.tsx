import { Button } from "@/components/ui/button";
import { Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
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

          <div className="flex items-center gap-2 bg-background rounded-full p-1 pl-4 shadow-sm w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
            />
            <Button className="bg-primary text-primary-foreground rounded-full px-6">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 border-t border-background/10 pt-12">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-semibold text-lg">
              <div className="w-6 h-6 rounded-sm bg-primary"></div>
              <span>Renovex</span>
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
              <li>8502 Preston Rd.<br />Inglewood, Maine 98380</li>
              <li>support@renovex.com</li>
              <li>(308) 555‑0121</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 flex flex-col md:flex-row justify-between items-center pt-6 text-sm opacity-80">
          <p>© Renovex 2026</p>

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