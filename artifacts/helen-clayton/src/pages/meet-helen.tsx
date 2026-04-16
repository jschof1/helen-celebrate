import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MeetHelen() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".page-title", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    gsap.from(".content-block", {
      scrollTrigger: {
        trigger: ".content-block",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out"
    });

    gsap.to(".photo-placeholder", {
      scrollTrigger: {
        trigger: ".photo-placeholder",
        start: "top 80%",
        scrub: 1,
      },
      y: -50,
      rotate: 5,
    });
  }, { scope: container });

  return (
    <div ref={container} className="bg-card min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-giant font-serif text-primary italic page-title mb-12 ml-[-2vw]">
          Getting to know a little about me.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-24">
          <div className="md:col-span-5 relative">
            <div className="photo-placeholder aspect-[3/4] bg-secondary w-full relative z-10 flex items-center justify-center border-8 border-background shadow-xl">
               {/* A real image would go here. For presentation, using a stylised block */}
               <span className="font-serif italic text-3xl text-secondary-foreground opacity-50">Helen</span>
            </div>
            <div className="absolute top-10 -right-10 w-full h-full bg-primary -z-10" />
          </div>

          <div className="md:col-span-7 flex flex-col justify-center space-y-8">
            <div className="content-block">
              <h2 className="text-4xl font-serif text-foreground mb-4 border-b-2 border-secondary pb-4 inline-block">Proud Mum & Family Focused</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I am a proud mum of three, and I value family and connection above all else. Understanding the deep bonds that tie us together is at the heart of everything I do.
              </p>
            </div>

            <div className="content-block">
              <h2 className="text-4xl font-serif text-foreground mb-4 border-b-2 border-secondary pb-4 inline-block">Empathy & Compassion</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With a background in teaching and cancer care, I have spent my life supporting others through complex, emotional times. Empathy and compassion aren't just words to me; they are the foundation of my practice.
              </p>
            </div>

            <div className="content-block">
              <h2 className="text-4xl font-serif text-foreground mb-4 border-b-2 border-secondary pb-4 inline-block">A Natural Next Step</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Becoming a celebrant was a natural progression. It allows me to combine my love for writing, my desire to help others, and my deep respect for life's pivotal moments.
              </p>
            </div>
            
            <div className="content-block pt-8">
              <p className="text-lg italic text-foreground">
                When I'm not crafting ceremonies, you'll find me on the netball court or enjoying precious time with my family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}