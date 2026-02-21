import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import dinkLogo from "@assets/dink_central_logo_1771658535870.jpeg";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Tournaments", href: "#tournaments" },
    { name: "Coaching", href: "#coaching" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-full border-2 border-white/20 shadow-sm group-hover:shadow-md transition-all duration-300">
              <img 
                src={dinkLogo} 
                alt="Dink Central Logo" 
                className="h-10 w-10 md:h-12 md:w-12 object-cover" 
              />
            </div>
            <span className={`text-xl md:text-2xl font-display font-bold tracking-tight ${scrolled ? 'text-foreground' : 'text-white'} transition-colors`}>
              Dink Central
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`text-sm font-medium transition-all hover:-translate-y-0.5 cursor-pointer ${
                  scrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer ${
                scrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/20"
                  : "bg-white text-primary hover:bg-white/90 shadow-black/10"
              }`}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full bg-white/10 backdrop-blur-sm text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className={scrolled ? "text-foreground" : "text-white"} /> : <Menu className={scrolled ? "text-foreground" : "text-white"} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 absolute w-full top-full"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-lg font-medium p-2 rounded-lg transition-colors text-foreground/80 hover:bg-muted cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
