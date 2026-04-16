import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "wouter";
import weddingOutdoor1 from "@assets/stock_images/wedding_outdoor_1.jpg";
import weddingOutdoor2 from "@assets/stock_images/wedding_outdoor_2.jpg";
import weddingCouple1 from "@assets/stock_images/wedding_couple_1.jpg";
import memorialGarden1 from "@assets/stock_images/memorial_garden_1.jpg";
import coastSunset from "@assets/stock_images/coast_sunset.jpg";
import weddingRings from "@assets/stock_images/wedding_rings.jpg";
import weddingVideoSrc from "@assets/generated_videos/wedding_ceremony.mp4";
import peacefulGardenSrc from "@assets/generated_videos/peaceful_garden.mp4";

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero text animation
    const tl = gsap.timeline();
    tl.from(".hero-char", {
      y: 120,
      opacity: 0,
      rotate: 12,
      stagger: 0.04,
      duration: 1.1,
      ease: "power4.out",
      delay: 0.3
    })
    .from(".hero-sub", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out"
    }, "-=0.5")
    .from(".hero-cta", {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.4");

    // Parallax on hero video
    gsap.to(".hero-video-wrap", {
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: "30%",
      ease: "none"
    });

    // Services image reveal
    gsap.utils.toArray(".service-card").forEach((card: any, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        y: 80,
        opacity: 0,
        duration: 0.9,
        delay: i * 0.08,
        ease: "power3.out"
      });
      // Image zoom on scroll
      const img = card.querySelector(".service-img");
      if (img) {
        gsap.to(img, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
          scale: 1.15,
          ease: "none"
        });
      }
    });

    // Cinematic full-bleed section entrance
    gsap.from(".fullbleed-text", {
      scrollTrigger: { trigger: ".fullbleed-section", start: "top 70%" },
      x: -120,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out"
    });

    // Parallax on interior images
    gsap.utils.toArray(".parallax-img").forEach((img: any) => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img.closest(".parallax-wrap"),
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
        y: "-20%",
        ease: "none"
      });
    });

    // Rotating decorative elements
    gsap.to(".decorative-circle", {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: "linear"
    });

    // Why choose me section
    gsap.from(".tilted-card", {
      scrollTrigger: { trigger: ".tilted-card", start: "top 80%" },
      rotate: -12,
      y: 100,
      opacity: 0,
      duration: 1.3,
      ease: "back.out(1.5)"
    });

    // Horizontal image strip scroll
    gsap.to(".strip-track", {
      scrollTrigger: {
        trigger: ".strip-section",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
      x: "-25%",
      ease: "none"
    });

  }, { scope: container });

  const splitText = (text: string) => text.split("").map((char, i) => (
    <span key={i} className="hero-char inline-block whitespace-pre">{char === " " ? "\u00A0" : char}</span>
  ));

  return (
    <div ref={container} className="bg-background w-full overflow-hidden">

      {/* HERO — Full-viewport video */}
      <section className="hero-section relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
        {/* Video background */}
        <div className="hero-video-wrap absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src={weddingVideoSrc}
            data-testid="video-hero"
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-[-10vw] right-[-10vw] w-[50vw] h-[50vw] border border-secondary rounded-full opacity-20 decorative-circle pointer-events-none" />
        <div className="absolute bottom-[-10vw] left-[-10vw] w-[40vw] h-[40vw] border border-secondary rounded-full opacity-20 decorative-circle pointer-events-none" />

        {/* Text content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-32 pb-24 text-primary-foreground">
          <h1 className="text-[13vw] md:text-[10vw] leading-none font-serif font-black italic tracking-tighter mb-4">
            {splitText("Helen Clayton")}
          </h1>
          <h2 className="text-4xl md:text-7xl font-serif text-secondary italic mb-8 hero-sub">
            Family Celebrant
          </h2>
          <p className="text-xl md:text-3xl max-w-2xl hero-sub mb-12 border-l-4 border-secondary pl-6 opacity-90">
            Meaningful Ceremonies Crafted Just for You. Helping You Create a Ceremony Full of Meaning and Heart.
          </p>
          <div className="hero-cta flex gap-4 flex-wrap">
            <Link href="/contact" className="inline-block bg-secondary text-secondary-foreground font-bold text-xl px-10 py-5 hover:bg-white hover:text-foreground transition-colors" data-testid="link-home-contact">
              Let's Talk
            </Link>
            <Link href="/meet-helen" className="inline-block border-2 border-white text-white font-bold text-xl px-10 py-5 hover:bg-white hover:text-primary transition-colors" data-testid="link-home-meet">
              Meet Helen
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hero-cta flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-white/40 animate-pulse" />
          <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* HORIZONTAL SCROLLING IMAGE STRIP */}
      <section className="strip-section py-0 overflow-hidden bg-foreground" aria-hidden="true">
        <div className="strip-track flex gap-4 w-[200%]" style={{ whiteSpace: 'nowrap' }}>
          {[weddingOutdoor1, weddingCouple1, memorialGarden1, coastSunset, weddingRings, weddingOutdoor2, weddingCouple1, memorialGarden1].map((src, i) => (
            <div key={i} className="h-[35vw] w-[35vw] shrink-0 overflow-hidden inline-block">
              <img src={src} alt="" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES — Image-heavy grid */}
      <section className="py-28 px-6 md:px-12 bg-background relative z-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-9xl font-serif font-bold italic text-foreground mb-4">
            Services
          </h2>
          <p className="text-xl text-muted-foreground mb-20 max-w-lg">Individually crafted, inclusive and creative ceremonies.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-card-border">
            {[
              { title: "Funeral Planning", link: "/funerals", img: memorialGarden1, tag: "With compassion & dignity" },
              { title: "Eulogy Writing", link: "/funerals", img: coastSunset, tag: "Every life, a story" },
              { title: "Scattering of Ashes", link: "/funerals", img: coastSunset, tag: "A quiet moment of peace" },
              { title: "Memorial Services", link: "/funerals", img: memorialGarden1, tag: "Gathering to remember" },
              { title: "Wedding Ceremonies", link: "/weddings", img: weddingOutdoor1, tag: "Your love, your day" },
              { title: "Vow Renewal", link: "/weddings", img: weddingCouple1, tag: "Celebrating the journey" }
            ].map((service, i) => (
              <Link
                key={i}
                href={service.link}
                className="service-card group relative block aspect-square overflow-hidden border border-card-border"
                data-testid={`link-service-${i}`}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="service-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/60 group-hover:bg-primary/75 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <p className="text-secondary text-sm uppercase tracking-widest mb-2 font-bold">{service.tag}</p>
                  <h3 className="text-3xl md:text-4xl font-serif italic text-white leading-tight">{service.title}</h3>
                  <div className="w-10 h-0.5 bg-secondary mt-4 group-hover:w-full transition-all duration-500" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FULL-BLEED SPLIT — Outdoors wedding + Why Choose Me */}
      <section className="fullbleed-section relative min-h-[80vh] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[80vh]">
          {/* Left — image */}
          <div className="parallax-wrap relative overflow-hidden min-h-[50vh] md:min-h-0">
            <img
              src={weddingOutdoor2}
              alt="Wedding ceremony"
              className="parallax-img absolute inset-0 w-full h-[130%] object-cover top-[-15%]"
            />
            <div className="absolute inset-0 bg-primary/20" />
          </div>
          {/* Right — text */}
          <div className="bg-foreground text-background flex flex-col justify-center px-12 md:px-20 py-24">
            <h2 className="fullbleed-text text-5xl md:text-7xl font-serif italic mb-8 text-secondary leading-tight">
              Why Choose Me
            </h2>
            <p className="text-xl mb-6 opacity-90 leading-relaxed">
              Choosing a celebrant is a particularly personal decision, and it's important that you feel comfortable, supported, and truly listened to.
            </p>
            <p className="text-xl mb-8 opacity-80 leading-relaxed">
              With a background in teaching and cancer care, I have spent many years supporting people through important moments in their lives — with compassion, patience, and understanding.
            </p>
            <p className="text-xl mb-12 opacity-80 leading-relaxed">
              Every ceremony I create is written from scratch. No templates — just you and me discovering and creating something meaningful.
            </p>
            <Link href="/meet-helen" className="self-start border border-secondary text-secondary px-8 py-4 hover:bg-secondary hover:text-foreground transition-colors text-lg font-bold" data-testid="link-why-meet-helen">
              Get to Know Helen
            </Link>
          </div>
        </div>
      </section>

      {/* TILTED QUOTE + IMAGE */}
      <section className="py-32 px-6 md:px-12 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          {/* Quote card */}
          <div className="md:w-1/2 relative">
            <div className="tilted-card bg-primary text-primary-foreground p-12 shadow-2xl rotate-2 relative z-20">
              <span className="absolute -top-10 -left-8 text-9xl text-secondary font-serif opacity-40">"</span>
              <p className="text-2xl md:text-3xl font-serif italic relative z-10 leading-relaxed">
                Every ceremony I create is bespoke. I thoughtfully tailor it to reflect your story, your wishes, and the people at the heart of it.
              </p>
              <p className="mt-6 text-secondary font-bold tracking-widest text-sm uppercase">— Helen Clayton</p>
            </div>
            <div className="absolute inset-0 bg-secondary translate-x-5 translate-y-5 -rotate-2 z-10" />
          </div>

          {/* Image panel */}
          <div className="md:w-1/2 parallax-wrap relative h-[60vh] overflow-hidden">
            <img
              src={weddingRings}
              alt="Wedding rings"
              className="parallax-img absolute inset-0 w-full h-[130%] object-cover top-[-15%]"
            />
          </div>
        </div>
      </section>

      {/* GARDEN VIDEO SECTION */}
      <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
          src={peacefulGardenSrc}
          data-testid="video-garden"
        />
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-5xl md:text-8xl font-serif italic text-white mb-4">Celebrating Every Life Moment</h2>
          <p className="text-xl text-secondary">Dorset & surrounding areas · Weddings · Funerals · Memorials</p>
        </div>
      </section>

    </div>
  );
}
