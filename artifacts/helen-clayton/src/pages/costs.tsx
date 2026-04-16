import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Costs() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".cost-card", {
      scrollTrigger: {
        trigger: ".cost-wrapper",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "back.out(1.2)"
    });

    // Animate numbers
    gsap.utils.toArray(".price-num").forEach((num: any) => {
      const targetVal = parseInt(num.getAttribute("data-val") || "0", 10);
      gsap.fromTo(num, 
        { textContent: 0 }, 
        {
          scrollTrigger: {
            trigger: num,
            start: "top 90%",
          },
          textContent: targetVal,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          stagger: 1,
        }
      );
    });
  }, { scope: container });

  return (
    <div ref={container} className="bg-background min-h-screen pt-40 pb-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-serif text-foreground mb-8">Costs</h1>
        <p className="text-2xl md:text-4xl font-serif italic text-secondary mb-24 max-w-4xl border-l-4 border-primary pl-6">
          Because every story is different, every ceremony I create is designed to be personal, meaningful, and true to you.
        </p>

        <div className="cost-wrapper grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Funerals Cost */}
          <div className="cost-card bg-card border border-card-border p-10 relative">
            <h2 className="text-4xl font-serif text-foreground mb-4">Funerals</h2>
            <div className="text-6xl font-black text-primary mb-8 font-serif">
              £<span className="price-num" data-val="250">0</span>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-secondary rounded-full shrink-0" />
                <span>All communication and a personal visit to learn about your loved one.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-secondary rounded-full shrink-0" />
                <span>A fully bespoke script, shared with you for revisions.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-secondary rounded-full shrink-0" />
                <span>Guidance on readings, music, and poetry.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-secondary rounded-full shrink-0" />
                <span>Conducting the service with warmth and professionalism.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-secondary rounded-full shrink-0" />
                <span>A keepsake copy of the script.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-secondary rounded-full shrink-0" />
                <span>Travel within 30 miles of Poole.</span>
              </li>
            </ul>
          </div>

          {/* Weddings Cost */}
          <div className="cost-card bg-primary text-primary-foreground p-10 relative shadow-2xl scale-105 z-10">
            <div className="absolute -top-4 -right-4 bg-secondary text-foreground text-sm font-bold px-4 py-1 rotate-6">Most Popular</div>
            <h2 className="text-4xl font-serif mb-4">Weddings</h2>
            <div className="text-6xl font-black text-secondary mb-8 font-serif">
              £<span className="price-num" data-val="650">0</span>
            </div>
            <ul className="space-y-4 opacity-90">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-background rounded-full shrink-0" />
                <span>All communication and two face-to-face meetings.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-background rounded-full shrink-0" />
                <span>A bespoke script written, refined, and perfected.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-background rounded-full shrink-0" />
                <span>Guidance on music, readings, and symbolic rituals.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-background rounded-full shrink-0" />
                <span>Liaising with your venue and other suppliers.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-background rounded-full shrink-0" />
                <span>Conducting the ceremony on the day.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-background rounded-full shrink-0" />
                <span>A beautiful keepsake copy of your ceremony.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-background rounded-full shrink-0" />
                <span>Travel within 30 miles of Poole.</span>
              </li>
            </ul>
          </div>

          {/* Memorials Cost */}
          <div className="cost-card bg-card border border-card-border p-10 relative md:col-span-1">
            <h2 className="text-4xl font-serif text-foreground mb-4">Memorial Services</h2>
            <div className="text-5xl font-bold text-foreground mb-4 font-serif">
              From £<span className="price-num text-primary" data-val="200">0</span>
            </div>
            <p className="text-muted-foreground">Tailored to your specific requirements and location.</p>
          </div>

          {/* Ashes Cost */}
          <div className="cost-card bg-foreground text-background p-10 relative md:col-span-1">
            <h2 className="text-4xl font-serif text-secondary mb-4">Scattering of Ashes</h2>
            <div className="text-5xl font-bold mb-4 font-serif">
              From £<span className="price-num text-secondary" data-val="80">0</span>
            </div>
            <p className="opacity-80">A short, meaningful service for a quiet moment of remembrance.</p>
          </div>

        </div>
      </div>
    </div>
  );
}