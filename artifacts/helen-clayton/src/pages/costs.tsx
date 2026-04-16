import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import weddingOutdoor1 from "@assets/stock_images/wedding_outdoor_1.jpg";
import memorialGarden1 from "@assets/stock_images/memorial_garden_1.jpg";
import coastSunset from "@assets/stock_images/coast_sunset.jpg";
import vowRenewal from "@assets/stock_images/vow_renewal.jpg";
import weddingRings from "@assets/stock_images/wedding_rings.jpg";

gsap.registerPlugin(ScrollTrigger);

export function Costs() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".page-title", {
      y: 80,
      opacity: 0,
      duration: 1.3,
      ease: "power3.out"
    });

    gsap.utils.toArray(".cost-card").forEach((card: any, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: i * 0.1,
        ease: "back.out(1.2)"
      });
    });

    // Price number count-up
    gsap.utils.toArray(".price-num").forEach((num: any) => {
      const targetVal = parseInt(num.getAttribute("data-val") || "0", 10);
      gsap.fromTo(num,
        { textContent: 0 },
        {
          scrollTrigger: { trigger: num, start: "top 90%" },
          textContent: targetVal,
          duration: 2.5,
          ease: "power2.out",
          snap: { textContent: 1 },
        }
      );
    });

    // Parallax images
    gsap.utils.toArray(".parallax-img").forEach((img: any) => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img.closest(".parallax-wrap"),
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
        y: "-18%",
        ease: "none"
      });
    });

  }, { scope: container });

  return (
    <div ref={container} className="bg-background min-h-screen overflow-hidden">

      {/* HERO — image background */}
      <section className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 parallax-wrap">
          <img
            src={weddingOutdoor1}
            alt="Wedding"
            className="parallax-img absolute inset-0 w-full h-[130%] object-cover top-[-15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-16 pb-16 pt-40">
          <h1 className="text-7xl md:text-9xl font-serif text-foreground page-title mb-4">Costs</h1>
          <p className="text-2xl md:text-3xl font-serif italic text-secondary max-w-4xl border-l-4 border-primary pl-6">
            Because every story is different, every ceremony I create is designed to be personal, meaningful, and true to you.
          </p>
        </div>
      </section>

      {/* COST CARDS */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border border-card-border">

          {/* Funerals */}
          <div className="cost-card relative overflow-hidden">
            <div className="absolute inset-0 parallax-wrap">
              <img
                src={memorialGarden1}
                alt="Memorial"
                className="parallax-img absolute inset-0 w-full h-[130%] object-cover top-[-15%] opacity-20"
              />
            </div>
            <div className="relative z-10 p-10 md:p-14 border-r border-card-border">
              <h2 className="text-4xl font-serif text-foreground mb-4">Funerals</h2>
              <div className="text-8xl font-black text-primary mb-8 font-serif leading-none">
                £<span className="price-num" data-val="250">0</span>
              </div>
              <p className="text-muted-foreground mb-8 text-sm italic">Includes everything below, no hidden costs. Travel within 30 miles of Poole.</p>
              <ul className="space-y-4 text-muted-foreground">
                {[
                  "All communication by phone and email throughout",
                  "A personal visit to meet you and your family",
                  "Carefully writing a bespoke funeral script",
                  "Sharing the script with you for revisions",
                  "Guidance on readings, poetry, and music",
                  "Conducting the funeral service with warmth and professionalism",
                  "A keepsake copy of the final script"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-secondary rounded-full shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Weddings */}
          <div className="cost-card bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0">
              <img src={weddingOutdoor1} alt="Wedding" className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="absolute -top-4 -right-4 bg-secondary text-foreground text-sm font-bold px-6 py-2 rotate-6 z-20">Most Popular</div>
            <div className="relative z-10 p-10 md:p-14">
              <h2 className="text-4xl font-serif mb-4">Weddings</h2>
              <div className="text-8xl font-black text-secondary mb-8 font-serif leading-none">
                £<span className="price-num" data-val="650">0</span>
              </div>
              <p className="opacity-70 mb-8 text-sm italic">Includes everything below. Travel within 30 miles of Poole.</p>
              <ul className="space-y-4 opacity-90">
                {[
                  "All communication by phone and email throughout",
                  "Two face-to-face meetings to gather everything needed",
                  "Writing a bespoke ceremony script, refined until perfect",
                  "Guidance on music, readings, rituals and poems",
                  "Liaising with your venue and suppliers",
                  "Conducting your wedding ceremony on the day",
                  "A beautiful keepsake copy of your ceremony script"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-white rounded-full shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Memorials */}
          <div className="cost-card relative overflow-hidden border-t border-card-border">
            <div className="absolute inset-0">
              <img src={vowRenewal} alt="Vow renewal" className="w-full h-full object-cover opacity-15" />
            </div>
            <div className="relative z-10 p-10 md:p-14 border-r border-card-border">
              <h2 className="text-4xl font-serif text-foreground mb-4">Memorial Services</h2>
              <div className="text-6xl font-bold text-foreground mb-6 font-serif">
                From £<span className="price-num text-primary" data-val="200">0</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">Tailored to your specific requirements and location. Get in touch to discuss your needs.</p>
            </div>
          </div>

          {/* Ashes */}
          <div className="cost-card bg-foreground text-background relative overflow-hidden border-t border-card-border">
            <div className="absolute inset-0">
              <img src={coastSunset} alt="Coast" className="w-full h-full object-cover opacity-25" />
            </div>
            <div className="relative z-10 p-10 md:p-14">
              <h2 className="text-4xl font-serif text-secondary mb-4">Scattering of Ashes</h2>
              <div className="text-6xl font-bold mb-6 font-serif">
                From £<span className="price-num text-secondary" data-val="80">0</span>
              </div>
              <p className="opacity-80 leading-relaxed">A short, meaningful service for a quiet moment of remembrance, wherever feels right.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Closing image strip */}
      <section className="relative h-[35vh] overflow-hidden mt-0">
        <div className="flex h-full">
          <div className="flex-1 overflow-hidden">
            <img src={weddingRings} alt="Rings" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 overflow-hidden">
            <img src={memorialGarden1} alt="Garden" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 overflow-hidden hidden md:block">
            <img src={coastSunset} alt="Coast" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/50">
          <p className="text-3xl md:text-5xl font-serif italic text-white text-center px-6">
            No hidden fees. Just honest, heartfelt service.
          </p>
        </div>
      </section>

    </div>
  );
}
