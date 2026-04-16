import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Funerals() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".page-title", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    });

    gsap.utils.toArray(".section-rule").forEach((rule: any) => {
      gsap.from(rule, {
        scrollTrigger: {
          trigger: rule,
          start: "top 80%",
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power4.out"
      });
    });

    gsap.utils.toArray(".content-fade").forEach((content: any) => {
      gsap.from(content, {
        scrollTrigger: {
          trigger: content,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="bg-foreground text-background min-h-screen pt-40 pb-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-huge font-serif text-secondary page-title mb-8">
          Funerals & Memorials
        </h1>
        <p className="text-2xl md:text-4xl font-serif italic opacity-80 mb-24 page-title max-w-3xl">
          Honouring a life with dignity, warmth, and a deeply personal touch.
        </p>

        <div className="space-y-32">
          {/* Funerals */}
          <section className="relative">
            <div className="section-rule h-[1px] w-full bg-secondary mb-12" />
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-5xl font-serif italic text-primary-foreground content-fade">Funerals & Celebration of Life</h2>
              </div>
              <div className="md:col-span-8 content-fade">
                <p className="text-2xl leading-relaxed opacity-90 mb-6">
                  Every farewell is different, and there is no single way to say goodbye.
                </p>
                <p className="text-xl leading-relaxed opacity-80">
                  I will work closely with you to create a personal, moving ceremony. There is no blueprint; everything is shaped around your wishes and the true essence of your loved one. Whether you want a traditional tone or a colourful celebration of a life well-lived, I will craft a script that feels genuine and right.
                </p>
              </div>
            </div>
          </section>

          {/* Memorials */}
          <section className="relative">
            <div className="section-rule h-[1px] w-full bg-secondary mb-12" />
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-5xl font-serif italic text-primary-foreground content-fade">Memorial Services</h2>
              </div>
              <div className="md:col-span-8 content-fade">
                <p className="text-xl leading-relaxed opacity-80">
                  A memorial service offers a chance to gather, reflect, and share stories in a way that perhaps wasn't possible at the time of passing. With a personal and caring approach, I help you weave together the memories, music, and readings that truly represent the person you are remembering.
                </p>
              </div>
            </div>
          </section>

          {/* Ashes */}
          <section className="relative">
            <div className="section-rule h-[1px] w-full bg-secondary mb-12" />
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-5xl font-serif italic text-primary-foreground content-fade">Scattering & Internment of Ashes</h2>
              </div>
              <div className="md:col-span-8 content-fade">
                <p className="text-xl leading-relaxed opacity-80">
                  This final act of laying someone to rest is a profound moment. I can lead a short, meaningful service for this quiet moment of remembrance, ensuring it feels complete, respectful, and perfectly suited to the location you have chosen.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-40 text-center content-fade">
          <h3 className="text-4xl md:text-6xl font-serif italic text-secondary">
            Every farewell is different,<br/>and there is no single way to say goodbye.
          </h3>
        </div>
      </div>
    </div>
  );
}