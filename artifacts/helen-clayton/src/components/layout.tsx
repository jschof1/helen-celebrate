import React, { useState, useRef } from "react";
import { Link, useLocation } from "wouter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [, setLocation] = useLocation();

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        clipPath: "circle(150% at calc(100% - 3rem) 3rem)",
        duration: 0.8,
        ease: "power4.inOut"
      });
      gsap.fromTo(
        ".menu-item",
        { y: 50, opacity: 0, rotate: 5 },
        { y: 0, opacity: 1, rotate: 0, duration: 0.5, stagger: 0.05, ease: "back.out(1.7)", delay: 0.2 }
      );
    } else {
      gsap.to(menuRef.current, {
        clipPath: "circle(0% at calc(100% - 3rem) 3rem)",
        duration: 0.6,
        ease: "power3.inOut"
      });
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/meet-helen", label: "Meet Helen" },
    { href: "/funerals", label: "Funerals & Memorials" },
    { href: "/weddings", label: "Weddings & Vow Renewals" },
    { href: "/costs", label: "Costs" },
    { href: "/faqs", label: "FAQs" },
    { href: "/links", label: "Helpful Links" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference p-6 flex justify-between items-center text-white">
        <Link href="/" className="font-serif text-2xl font-bold italic tracking-tighter" data-testid="nav-logo">
          HC.
        </Link>
        
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="p-2 relative z-50 text-white"
          data-testid="button-open-menu"
        >
          <Menu className="w-8 h-8" />
        </button>
      </nav>

      {/* Full screen overlay menu */}
      <div 
        ref={menuRef}
        className="fixed inset-0 z-[60] bg-primary text-primary-foreground flex flex-col items-center justify-center"
        style={{ clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
      >
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-2"
          data-testid="button-close-menu"
        >
          <X className="w-10 h-10" />
        </button>
        
        <div className="flex flex-col items-center space-y-4 md:space-y-6 text-center">
          {navLinks.map((link, i) => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="menu-item text-4xl md:text-6xl font-serif font-black italic hover:text-secondary transition-colors"
              data-testid={`link-nav-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <main className="flex-1 w-full overflow-hidden">
        {children}
      </main>

      <footer className="bg-foreground text-background py-16 px-6 md:px-12 mt-24 clip-diagonal relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-4xl md:text-5xl mb-6 text-secondary">Celebrating Every Life Moment</h3>
            <p className="text-xl mb-2 font-serif italic">From first vows to final farewells</p>
            <p className="text-sm opacity-80 mb-6">Weddings - Vow Renewals - Funerals - Memorials - Ashes Ceremonies</p>
            
            <div className="inline-block border-2 border-secondary p-4 mt-4 bg-primary text-primary-foreground">
              <p className="font-bold tracking-wider text-sm uppercase">APC UK Accredited Celebrant | Obitus | DBS Checked</p>
            </div>
          </div>
          
          <div className="md:text-right flex flex-col justify-end">
            <p className="text-lg font-bold">Contact Helen</p>
            <a href="tel:07786789331" className="text-2xl hover:text-secondary transition-colors">07786 789331</a>
            <a href="mailto:contact@hccelebrancy.co.uk" className="text-xl hover:text-secondary transition-colors">contact@hccelebrancy.co.uk</a>
            <p className="mt-4 text-sm opacity-80">Based in Poole, Dorset</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
