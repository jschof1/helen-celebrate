import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import weddingOutdoor1 from "@assets/stock_images/wedding_outdoor_1.jpg";
import weddingOutdoor2 from "@assets/stock_images/wedding_outdoor_2.jpg";
import weddingCouple1 from "@assets/stock_images/wedding_couple_1.jpg";
import weddingCouple2 from "@assets/stock_images/wedding_couple_2.jpg";
import weddingRings from "@assets/stock_images/wedding_rings.jpg";
import vowRenewal from "@assets/stock_images/vow_renewal.jpg";
import weddingVideoSrc from "@assets/generated_videos/wedding_ceremony.mp4";

gsap.registerPlugin(ScrollTrigger);

export function Weddings() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".page-title", {
      scale: 0.92,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    });

    // SVG motif rotation on scroll
    gsap.to(".svg-motif", {
      rotate: 20,
      scale: 1.1,
      scrollTrigger: {
        trigger: ".svg-motif",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Cards stagger in
    gsap.utils.toArray(".wedding-card").forEach((card: any, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        x: i % 2 === 0 ? -120 : 120,
        opacity: 0,
        duration: 1.1,
        ease: "power2.out"
      });
    });

    // Parallax on images (gentler on portraits so faces stay in frame)
    gsap.utils.toArray(".parallax-img").forEach((img: any) => {
      const keepHeads = img.classList?.contains("parallax-img--keep-heads");
      gsap.to(img, {
        scrollTrigger: {
          trigger: img.closest(".parallax-wrap"),
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
        y: keepHeads ? "-6%" : "-18%",
        ease: "none"
      });
    });

    // Photo strip moves right to left on scroll
    gsap.to(".photo-strip-inner", {
      scrollTrigger: {
        trigger: ".photo-strip",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      x: "-20%",
      ease: "none"
    });

    // Ring image
    gsap.from(".rings-img", {
      scrollTrigger: { trigger: ".rings-img", start: "top 80%" },
      scale: 1.3,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    });

  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen overflow-hidden bg-card">

      {/* HERO — Video background */}
      <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
          src={weddingVideoSrc}
          data-testid="video-weddings"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-card" />

        {/* Decorative SVG motif */}
        <div className="absolute top-20 right-[-8vw] opacity-10 pointer-events-none svg-motif">
          <svg width="500" height="500" viewBox="0 0 100 100">
            <path d="M50 80 C 20 50, 10 30, 25 15 C 40 0, 50 15, 50 15 C 50 15, 60 0, 75 15 C 90 30, 80 50, 50 80 Z" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
            <circle cx="40" cy="40" r="20" fill="none" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
            <circle cx="60" cy="40" r="20" fill="none" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 text-center pt-32 pb-20">
          <h1 className="text-[12vw] md:text-[9vw] leading-none font-serif font-black italic text-white page-title mb-2">
            Your Love Story
          </h1>
          <h2 className="text-5xl md:text-8xl font-serif italic text-secondary page-title">
            Your Ceremony.
          </h2>
        </div>
      </section>

      {/* WEDDING PHOTOGRAPHY STRIP */}
      <section className="photo-strip overflow-hidden bg-foreground py-0">
        <div className="photo-strip-inner flex gap-0 w-[160%]">
          {[weddingOutdoor1, weddingCouple1, weddingOutdoor2, weddingCouple2, weddingRings, weddingOutdoor1].map((src, i) => (
            <div key={i} className="h-[40vw] w-[30vw] shrink-0 overflow-hidden">
              <img src={src} alt="Wedding" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* WEDDINGS section */}
      <section className="py-24 px-6 md:px-16" style={{ background: 'linear-gradient(180deg, hsl(38 30% 94%) 0%, hsl(35 40% 88%) 50%, hsl(40 20% 96%) 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7">
              <div className="wedding-card bg-white p-12 md:p-20 shadow-xl border-t-8 border-primary">
                <h3 className="text-5xl md:text-6xl font-serif text-foreground mb-8">Weddings</h3>
                <p className="text-2xl leading-relaxed text-muted-foreground mb-6">
                  I truly believe every couple deserves a wedding ceremony that reflects their own personal journey and the love they share.
                </p>
                <p className="text-xl leading-relaxed text-foreground mb-6">
                  My role as your celebrant is to bring that story to life by creating a ceremony that feels joyful, meaningful, and completely about you and the love you share. I will take the time to get to know you both, from how you met to all the little things that make your relationship special. This will make your ceremony personal, relaxed and full of heart.
                </p>
                <p className="text-xl leading-relaxed text-foreground mb-6">
                  Together, we will create something unforgettable and full of memories to treasure for a lifetime!
                </p>
                <p className="text-xl leading-relaxed text-foreground mb-6">
                  Whether you are dreaming of something romantic, fun, traditional or something a little different. I will work closely with you to ensure every second of your special day reflects your dreams and who you are as a couple.
                </p>
                <p className="text-xl leading-relaxed text-foreground mb-6">
                  From our first chat to the moment you say I do, I will be there to guide and support you. I will ensure you are able to enjoy every moment, knowing your ceremony is in safe hands.
                </p>
                <p className="text-xl leading-relaxed text-foreground font-serif italic">
                  The result? A beautiful, love filled celebration that you and your guests will remember forever.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 wedding-card">
              <div className="parallax-wrap relative h-[65vh] overflow-hidden">
                <img
                  src={weddingOutdoor1}
                  alt="Wedding ceremony"
                  className="parallax-img absolute inset-0 w-full h-[130%] object-cover top-[-15%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOW RENEWALS section */}
      <section className="py-24 px-6 md:px-16 text-primary-foreground" style={{ background: 'linear-gradient(135deg, hsl(0 68% 35%) 0%, hsl(350 55% 28%) 60%, hsl(0 60% 25%) 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 wedding-card">
              <div className="parallax-wrap relative h-[65vh] overflow-hidden">
                <img
                  src={vowRenewal}
                  alt="Vow renewal"
                  className="parallax-img absolute inset-0 w-full h-[130%] object-cover top-[-15%]"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="wedding-card">
                <h3 className="text-5xl md:text-6xl font-serif mb-8 text-secondary">Vow Renewals</h3>
                <p className="text-2xl leading-relaxed mb-6">
                  Renewing your vows is a beautiful way to celebrate your journey as a couple. It honours the love you have shared and the life you have built together.
                </p>
                <p className="text-xl leading-relaxed opacity-90 mb-6">
                  Whether you are marking a special anniversary, overcoming challenges, or simply wanting to say 'I still do' a vow renewal is a meaningful and happy occasion.
                </p>
                <p className="text-xl leading-relaxed opacity-90 mb-6">
                  As your celebrant, I will take the time to get to know your story and where it all began. I will want to hear about the moments that have shaped your journey and what your relationship means today. Together, we will create a ceremony that feels relaxed, heartfelt, and truly reflective of you as a couple.
                </p>
                <p className="text-xl leading-relaxed opacity-90 mb-6">
                  Whether you would like something intimate and simple or a joyful celebration surrounded by family and friends, your ceremony will be thoughtfully crafted around you.
                </p>
                <p className="text-xl leading-relaxed opacity-90 mb-4">
                  I am here to guide and support you every step of the way, creating a warm and memorable experience. One that celebrates your love, your commitment, and everything that is still to come.
                </p>
                <p className="text-2xl font-serif italic text-secondary mt-8">
                  This is a perfect way to Celebrate Your Journey Together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RINGS + LEGAL SIDE */}
      <section className="py-24 px-6 md:px-16" style={{ background: 'linear-gradient(160deg, hsl(38 30% 94%) 0%, hsl(35 45% 86%) 50%, hsl(0 20% 93%) 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="wedding-card">
              <div className="rings-img relative overflow-hidden h-64">
                <img src={weddingRings} alt="Wedding rings" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-secondary/20" />
              </div>
              <div className="bg-secondary text-secondary-foreground p-10 border-l-8 border-foreground mt-0">
                <h3 className="text-3xl font-serif font-bold mb-6">The Legal Side of Your Wedding</h3>
                <p className="text-lg leading-relaxed mb-4">
                  In the UK, the legal part of a wedding is carried out by a registrar or religious official, and must take place in an approved setting. This is simply the legal requirement and it's often a much smaller, more straightforward moment, usually involving just the couple and two witnesses.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Many couples choose to complete this legal element at a registry office, or at an approved venue, either before or after their main celebration. In some cases, a registrar may also be able to attend your venue to carry out the legal formalities on the day.
                </p>
                <p className="text-lg leading-relaxed mb-4 font-serif italic font-bold">
                  Beyond the legalities, your ceremony is where the real magic happens.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  This is the moment where you exchange your vows and rings, surrounded by the people you love. This is where your story is told, your personalities shine and your ceremony becomes truly your own. It can take place anywhere, at any time, and be as unique, meaningful, and personal as you wish.
                </p>
                <p className="text-lg leading-relaxed">
                  As your celebrant, I will gently guide you through both the legal side and the creative possibilities. I will help you plan a ceremony that fits beautifully around the formal requirements. Together, I promise, we will create something truly exceptional, that is designed entirely around you, and filled with warmth, meaning, and love.
                </p>
              </div>
            </div>
            <div className="wedding-card">
              <div className="parallax-wrap relative h-[70vh] overflow-hidden">
                <img
                  src={weddingCouple2}
                  alt="Couple"
                  className="parallax-img parallax-img--keep-heads absolute inset-x-0 top-0 w-full h-[118%] object-cover object-top"
                />
                <div className="absolute inset-0 bg-primary/20" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-3xl font-serif italic leading-snug">
                    "Together, I promise we will create something truly exceptional."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
