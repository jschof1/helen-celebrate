import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Weddings() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".page-title", {
      scale: 0.9,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    });

    gsap.to(".svg-motif", {
      rotate: 15,
      scale: 1.1,
      scrollTrigger: {
        trigger: ".svg-motif",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    gsap.utils.toArray(".wedding-card").forEach((card: any, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="bg-card min-h-screen pt-40 pb-32 overflow-hidden">
      
      {/* Decorative SVG Motif */}
      <div className="absolute top-20 right-[-10vw] opacity-10 pointer-events-none svg-motif">
        <svg width="600" height="600" viewBox="0 0 100 100">
          <path d="M50 80 C 20 50, 10 30, 25 15 C 40 0, 50 15, 50 15 C 50 15, 60 0, 75 15 C 90 30, 80 50, 50 80 Z" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
          <circle cx="40" cy="40" r="15" fill="none" stroke="hsl(var(--secondary))" strokeWidth="1" />
          <circle cx="60" cy="40" r="15" fill="none" stroke="hsl(var(--secondary))" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <h1 className="text-huge font-serif text-primary text-center page-title leading-none mb-4">
          Your Love Story
        </h1>
        <h2 className="text-5xl md:text-8xl font-serif text-secondary italic text-center page-title mb-32">
          Your Ceremony.
        </h2>

        <div className="space-y-24">
          {/* Weddings */}
          <div className="wedding-card bg-background p-12 md:p-20 shadow-xl border-t-8 border-primary md:w-[80%]">
            <h3 className="text-5xl font-serif text-foreground mb-8">Weddings</h3>
            <p className="text-2xl leading-relaxed text-muted-foreground mb-6">
              Every couple deserves a ceremony reflecting their unique journey.
            </p>
            <p className="text-xl leading-relaxed text-foreground">
              I take the time to get to know you both, understanding your quirks, your shared history, and your hopes for the future. Together, we will create something unforgettable—a ceremony that is exactly as formal, relaxed, traditional, or completely unconventional as you want it to be.
            </p>
          </div>

          {/* Vow Renewals */}
          <div className="wedding-card bg-primary text-primary-foreground p-12 md:p-20 shadow-xl md:w-[80%] md:ml-auto">
            <h3 className="text-5xl font-serif mb-8 text-secondary">Vow Renewals</h3>
            <p className="text-2xl leading-relaxed mb-6">
              A beautiful way to celebrate the journey you've shared.
            </p>
            <p className="text-xl leading-relaxed opacity-90">
              Whether you are marking a significant anniversary, overcoming a challenging time, or simply wanting to say "I still do" surrounded by family and friends, a vow renewal is a joyful, poignant celebration of enduring love.
            </p>
          </div>

          {/* Legal Side */}
          <div className="wedding-card bg-secondary text-secondary-foreground p-12 md:p-16 border-l-8 border-foreground mt-32 max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif font-bold mb-6">The Legal Side of Your Wedding</h3>
            <p className="text-lg leading-relaxed mb-4">
              In the UK, independent celebrants conduct the ceremonial aspect of your wedding. To be legally married, you must complete the legal registration separately (usually a brief, inexpensive appointment at a local registry office, known as a "statutory ceremony").
            </p>
            <p className="text-lg leading-relaxed">
              This frees us to hold your actual wedding ceremony absolutely anywhere—a woodland, a beach, a family garden, or a licensed venue—without being restricted by traditional legal wording.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}