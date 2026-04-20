import React, { useState, useRef } from "react";
import { Link, useLocation } from "wouter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { ApcCertifiedBadge } from "@/components/apc-certified-badge";

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
        className="fixed inset-0 z-[60] text-primary-foreground flex flex-col items-center justify-center"
        style={{ background: 'linear-gradient(135deg, hsl(0 68% 35%) 0%, hsl(350 55% 25%) 60%, hsl(0 50% 20%) 100%)', clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
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

      {/* Per-page Contact CTA — Helen requested contact info on every page */}
      <section className="relative py-16 px-6 md:px-12 bg-primary text-primary-foreground" aria-label="Get in touch">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl italic text-secondary mb-2">Let's Talk</h2>
            <p className="text-lg opacity-90 max-w-lg">Get in touch for a friendly, no-obligation chat about your ceremony.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="tel:07786789331" className="text-xl font-bold hover:text-secondary transition-colors">
              07786 789331
            </a>
            <span className="hidden sm:block text-white/30">|</span>
            <a href="mailto:contact@hccelebrancy.co.uk" className="text-xl font-bold hover:text-secondary transition-colors">
              contact@hccelebrancy.co.uk
            </a>
            <Link href="/contact" className="ml-0 sm:ml-4 border-2 border-secondary text-secondary font-bold px-8 py-3 hover:bg-secondary hover:text-primary transition-colors">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative mt-24 overflow-hidden"
        aria-labelledby="apc-trust-heading"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,hsl(38_40%_88%/0.7),transparent_55%),radial-gradient(ellipse_70%_50%_at_90%_60%,hsl(350_25%_88%/0.45),transparent_50%),linear-gradient(165deg,hsl(38 32% 93%) 0%,hsl(35 28% 89%) 45%,hsl(220 18% 91%) 100%)]"
          aria-hidden
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" aria-hidden />
        <div className="absolute -right-24 top-1/2 h-[min(28rem,70vw)] w-[min(28rem,70vw)] -translate-y-1/2 rounded-full bg-primary/[0.07] blur-3xl pointer-events-none" aria-hidden />
        <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-secondary/[0.12] blur-2xl pointer-events-none" aria-hidden />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-[4.5rem]">
          <div className="grid md:grid-cols-12 gap-12 md:gap-8 lg:gap-12 items-center">
            <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-end md:pr-4">
              <div className="relative">
                <div
                  className="absolute inset-[-6px] rounded-full opacity-60 bg-[conic-gradient(from_180deg_at_50%_50%,hsl(var(--secondary))_0deg,transparent_120deg,hsl(var(--primary))_240deg,transparent_360deg)] blur-[2px]"
                  aria-hidden
                />
                <div className="relative flex items-center justify-center rounded-full bg-gradient-to-b from-background/90 to-background/60 p-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] ring-1 ring-secondary/25">
                  <ApcCertifiedBadge size="lg" className="rounded-full" />
                </div>
              </div>
            </div>

            <div className="md:col-span-7 lg:col-span-8 md:border-l md:border-secondary/25 md:pl-10 lg:pl-14 text-center md:text-left">
              <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.35em] text-primary/90 font-bold mb-4">
                Trust &amp; accreditation
              </p>
              <h2
                id="apc-trust-heading"
                className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl italic text-foreground leading-[1.12] mb-5"
              >
                APC Certified Celebrant
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl md:max-w-none">
                Professionally trained and accredited through the Association of Professional Celebrants — so you can book with confidence.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
                <span className="hidden md:block h-px w-16 bg-gradient-to-r from-secondary to-transparent shrink-0" aria-hidden />
                <p className="text-sm font-serif italic text-primary/90">
                  Held to professional standards you can rely on
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative h-px w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
          aria-hidden
        />
        <div
          className="h-6 w-full bg-gradient-to-b from-transparent to-[hsl(220_20%_10%)]/8"
          aria-hidden
        />
      </section>

      <footer
        className="relative mt-0 overflow-hidden rounded-t-[2rem] md:rounded-t-[2.75rem] px-6 md:px-12 pt-16 pb-10 md:pt-20 md:pb-12 text-background"
        style={{
          background:
            "linear-gradient(165deg, hsl(220 22% 9%) 0%, hsl(350 18% 11%) 42%, hsl(220 20% 7%) 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/45 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-40 w-[min(90%,42rem)] -translate-x-1/2 rounded-full bg-secondary/[0.12] blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="space-y-8 lg:col-span-7">
              <header className="space-y-3">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.32em] text-secondary/90">
                  Helen Clayton Celebrancy
                </p>
                <h3 className="font-serif text-4xl italic leading-[1.08] text-secondary md:text-5xl lg:text-[3.15rem]">
                  Celebrating Every Life Moment
                </h3>
                <p className="max-w-xl text-lg font-serif italic text-background/90 md:text-xl">
                  From first vows to final farewells
                </p>
              </header>

              <ul className="flex flex-wrap gap-2">
                {[
                  "Weddings",
                  "Vow renewals",
                  "Funerals",
                  "Memorials",
                  "Ashes ceremonies",
                ].map((label) => (
                  <li key={label}>
                    <span className="inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium tracking-wide text-background/85">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex shrink-0 justify-center sm:justify-start">
                  <div className="rounded-full bg-black/30 p-2 ring-1 ring-white/10">
                    <ApcCertifiedBadge size="md" />
                  </div>
                </div>
                <div className="min-w-0 flex-1 space-y-1.5 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-sm">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-secondary/85">
                    Credentials
                  </p>
                  <p className="text-sm leading-relaxed text-background/90">
                    APC UK Accredited Celebrant · Obitus · DBS checked
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10">
              <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-secondary/85">
                Contact
              </p>
              <div className="space-y-1">
                <a
                  href="tel:07786789331"
                  className="block font-serif text-3xl italic tracking-tight text-background transition-colors hover:text-secondary md:text-[2.15rem]"
                >
                  07786 789331
                </a>
                <a
                  href="mailto:contact@hccelebrancy.co.uk"
                  className="inline-block text-base text-background/80 underline-offset-4 transition-colors hover:text-secondary hover:underline md:text-lg"
                >
                  contact@hccelebrancy.co.uk
                </a>
              </div>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-background/55">
                Based in Poole, Dorset — available in surrounding locations
              </p>
            </div>
          </div>

          <p className="mt-14 border-t border-white/10 pt-8 text-center text-[0.7rem] uppercase tracking-[0.22em] text-background/45">
            © {new Date().getFullYear()} Helen Clayton Celebrancy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
