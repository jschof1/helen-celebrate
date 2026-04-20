import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import helenPortrait1 from "@assets/stock_images/helen_portrait_1.jpg";
import helenPortrait2 from "@assets/stock_images/helen_portrait_2.jpg";
import memorialGarden2 from "@assets/stock_images/memorial_garden_2.jpg";
import coastSunset from "@assets/stock_images/coast_sunset.jpg";
import { ApcCertifiedBadge } from "@/components/apc-certified-badge";

gsap.registerPlugin(ScrollTrigger);

export function MeetHelen() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Title slam in
    gsap.from(".page-title", {
      y: 120,
      opacity: 0,
      duration: 1.3,
      ease: "power4.out",
    });

    // Portrait parallax scrub
    gsap.to(".portrait-img", {
      scrollTrigger: {
        trigger: ".portrait-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
      y: "-15%",
      ease: "none"
    });

    // Second portrait
    gsap.to(".portrait-img-2", {
      scrollTrigger: {
        trigger: ".bio-block-2",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
      y: "-12%",
      ease: "none"
    });

    // Content blocks stagger in
    gsap.utils.toArray(".content-block").forEach((block: any, i) => {
      gsap.from(block, {
        scrollTrigger: { trigger: block, start: "top 85%" },
        y: 60,
        opacity: 0,
        duration: 1,
        delay: i * 0.1,
        ease: "power3.out"
      });
    });

    // The big quote slides in from right
    gsap.from(".big-quote", {
      scrollTrigger: { trigger: ".big-quote", start: "top 75%" },
      x: 150,
      opacity: 0,
      duration: 1.3,
      ease: "power4.out"
    });

    // Background accent image
    gsap.to(".bg-accent-img", {
      scrollTrigger: {
        trigger: ".values-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      y: "-10%",
      ease: "none"
    });

  }, { scope: container });

  return (
    <div ref={container} className="bg-card min-h-screen overflow-hidden">

      {/* PAGE HEADER — Title over full image */}
      <section className="portrait-section relative min-h-[80vh] flex flex-col justify-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <img
            src={helenPortrait1}
            alt="Helen Clayton Celebrant"
            className="portrait-img absolute inset-0 w-full h-[115%] object-cover object-top top-[-15%]"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 px-6 md:px-16 text-center">
          <h1 className="page-title text-[10vw] md:text-[8vw] font-serif font-black italic text-white leading-none mb-4">
            Meet Helen
          </h1>
          <p className="text-2xl md:text-4xl font-serif italic text-secondary max-w-2xl mx-auto">
            Getting to know a little about me
          </p>
        </div>
      </section>

      {/* BIO — Split layout with portrait */}
      <section className="py-28 px-6 md:px-16" style={{ background: 'linear-gradient(180deg, hsl(40 20% 98%) 0%, hsl(35 40% 90%) 60%, hsl(38 30% 94%) 100%)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">

          {/* Portrait column */}
          <div className="md:col-span-5 relative">
            <div className="relative overflow-hidden h-[70vh]">
              <img
                src={helenPortrait2}
                alt="Helen Clayton"
                className="portrait-img-2 absolute inset-0 w-full h-[115%] object-cover top-[-10%]"
              />
              <div className="absolute inset-0 border-8 border-secondary/40 pointer-events-none" />
            </div>
            {/* Offset block */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary z-20 flex items-center justify-center p-6">
              <p className="text-primary-foreground font-serif italic text-lg text-center">
                "Warm, caring, and completely personal."
              </p>
            </div>
          </div>

          {/* Text column */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-10 pt-8">
            <div className="content-block flex flex-wrap items-center gap-4 pb-2">
              <ApcCertifiedBadge size="sm" className="shrink-0" />
              <p className="text-sm md:text-base text-muted-foreground max-w-md">
                APC Certified Celebrant — accredited training with the Association of Professional Celebrants.
              </p>
            </div>
            <div className="content-block">
              <h2 className="text-4xl font-serif text-foreground mb-4 border-b-2 border-secondary pb-4 inline-block">Proud Mum &amp; Family at Heart</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                My name is Helen Clayton and I am a proud Mum of three grown-up children. I truly value family, connection, and the moments that bring us together. I have spent my life caring for and supporting others, both at home and in my professional career.
              </p>
            </div>

            <div className="content-block">
              <h2 className="text-4xl font-serif text-foreground mb-4 border-b-2 border-secondary pb-4 inline-block">Empathy is my Foundation</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With my background in teaching and years of experience working within cancer care, I understand the importance of empathy, compassion, and truly listening to people's stories.
              </p>
            </div>

            <div className="content-block">
              <h2 className="text-4xl font-serif text-foreground mb-4 border-b-2 border-secondary pb-4 inline-block">A Natural Next Step</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Becoming a celebrant felt like the next natural step. I am passionate about helping people mark life's most meaningful moments, whether that is creating the perfect wedding celebration or a heartfelt and personal send-off for a loved one.
              </p>
            </div>

            <div className="content-block pt-4 bg-card p-8 border-l-4 border-primary">
              <p className="text-xl italic text-foreground leading-relaxed">
                Every ceremony I deliver is bespoke, thoughtful, and true to the people at its heart because each story deserves to be told with genuine care and a truly personal touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BIG QUOTE */}
      <section className="py-20 px-6 md:px-16 bg-foreground overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <blockquote className="big-quote text-4xl md:text-6xl lg:text-7xl font-serif italic text-secondary leading-tight">
            "I love keeping active by playing netball and most importantly, spending time with my family. I always make the most of those everyday moments that mean so much."
          </blockquote>
          <p className="text-background/60 mt-8 text-xl font-bold tracking-widest uppercase">— Helen</p>
        </div>
      </section>

      {/* VALUES — Image background with text overlays */}
      <section className="values-section relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={memorialGarden2}
            alt="Beautiful garden"
            className="bg-accent-img w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, hsl(0 68% 35% / 0.12) 0%, hsl(35 40% 62% / 0.25) 50%, hsl(40 20% 98% / 0.88) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
          <h2 className="text-5xl md:text-7xl font-serif italic text-primary mb-16 content-block">What I bring to every ceremony</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Compassion", text: "Having spent years supporting people through cancer care, I know how to sit with pain and hold space for it — with warmth and without judgment." },
              { title: "Creativity", text: "No templates, no stock phrases. Every ceremony is written from scratch, shaped entirely around you and your story." },
              { title: "Calm Presence", text: "On the day, I bring a steady, reassuring presence — so you can feel every moment without worrying about anything going wrong." }
            ].map((v, i) => (
              <div key={i} className="content-block bg-background/80 backdrop-blur-sm p-10 border border-card-border">
                <h3 className="text-3xl font-serif italic text-primary mb-4">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COASTAL IMAGE OUTRO */}
      <section className="relative h-[40vh] overflow-hidden flex items-center justify-center">
        <img src={coastSunset} alt="Dorset coast" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 text-center px-6">
          <p className="text-2xl md:text-4xl font-serif italic text-white">Based in Poole, Dorset — serving the surrounding area</p>
        </div>
      </section>

    </div>
  );
}
