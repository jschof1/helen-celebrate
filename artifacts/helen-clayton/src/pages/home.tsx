import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "wouter";

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Animation
    const tl = gsap.timeline();
    tl.from(".hero-char", {
      y: 100,
      opacity: 0,
      rotate: 15,
      stagger: 0.05,
      duration: 1,
      ease: "power4.out",
      delay: 0.2
    })
    .from(".hero-sub", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5");

    // Scroll Animations
    gsap.utils.toArray(".reveal-section").forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });

    gsap.to(".decorative-circle", {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: "linear"
    });

    gsap.from(".tilted-card", {
      scrollTrigger: {
        trigger: ".tilted-card",
        start: "top 80%",
      },
      rotate: -15,
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.5)"
    });
  }, { scope: container });

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="hero-char inline-block whitespace-pre">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div ref={container} className="bg-background w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] bg-primary text-primary-foreground flex flex-col justify-center px-6 md:px-12 pt-32 pb-24 overflow-hidden">
        <div className="absolute top-[-10vw] right-[-10vw] w-[50vw] h-[50vw] border-[1px] border-secondary rounded-full opacity-20 decorative-circle pointer-events-none" />
        <div className="absolute bottom-[-10vw] left-[-10vw] w-[40vw] h-[40vw] border-[1px] border-secondary rounded-full opacity-20 decorative-circle pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <h1 className="text-huge font-serif font-black italic tracking-tighter mb-4 max-w-5xl">
            {splitText("Helen Clayton")}
          </h1>
          <h2 className="text-4xl md:text-7xl font-serif text-secondary italic mb-8 hero-sub">
            Family Celebrant
          </h2>
          <p className="text-xl md:text-3xl max-w-2xl hero-sub mb-12 border-l-4 border-secondary pl-6">
            Helping You Create a Ceremony Full of Meaning and Heart. Meaningful Ceremonies Crafted Just for You.
          </p>
          <div className="hero-sub">
            <Link 
              href="/contact" 
              className="inline-block bg-secondary text-secondary-foreground font-bold text-xl px-10 py-5 hover:bg-white transition-colors"
              data-testid="link-home-contact"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 px-6 md:px-12 bg-background relative z-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-serif font-bold italic text-foreground mb-20 reveal-section">
            Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Funeral Planning", link: "/funerals" },
              { title: "Eulogy Writing", link: "/funerals" },
              { title: "Scattering of Ashes", link: "/funerals" },
              { title: "Memorial Services", link: "/funerals" },
              { title: "Wedding Ceremonies", link: "/weddings" },
              { title: "Vow Renewal", link: "/weddings" }
            ].map((service, i) => (
              <Link 
                key={i} 
                href={service.link}
                className="group block p-10 bg-card border border-card-border hover:bg-primary hover:text-primary-foreground transition-all duration-500 reveal-section"
                data-testid={`link-service-${i}`}
              >
                <h3 className="text-3xl font-serif italic mb-4">{service.title}</h3>
                <div className="w-12 h-1 bg-secondary group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-32 px-6 md:px-12 bg-foreground text-background relative z-10 clip-diagonal">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-7xl font-serif italic mb-8 text-secondary reveal-section">
              Why Choose Me
            </h2>
            <p className="text-xl mb-6 reveal-section">
              With a background in teaching and cancer care, I bring a calm, caring approach to every family I work with.
            </p>
            <p className="text-xl mb-8 reveal-section">
              I believe every life moment deserves to be honoured with empathy, respect, and deep personal connection.
            </p>
            <Link 
              href="/meet-helen"
              className="inline-block border border-secondary text-secondary px-8 py-4 hover:bg-secondary hover:text-foreground transition-colors reveal-section"
              data-testid="link-home-meet-helen"
            >
              Meet Helen
            </Link>
          </div>
          <div className="md:w-1/2 relative">
            <div className="tilted-card bg-card text-card-foreground p-12 shadow-2xl rotate-3 relative z-20">
              <span className="absolute -top-10 -left-10 text-9xl text-secondary font-serif opacity-50">"</span>
              <p className="text-2xl font-serif italic relative z-10">
                She's the kind of person who holds your hand through joy and grief with equal grace.
              </p>
            </div>
            <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 -rotate-3 z-10" />
          </div>
        </div>
      </section>
    </div>
  );
}