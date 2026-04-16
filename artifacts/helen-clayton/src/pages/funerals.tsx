import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import funeralFlowers from "@assets/stock_images/funeral_flowers.jpg";
import memorialGarden1 from "@assets/stock_images/memorial_garden_1.jpg";
import memorialGarden2 from "@assets/stock_images/memorial_garden_2.jpg";
import coastSunset from "@assets/stock_images/coast_sunset.jpg";
import crematorium from "@assets/stock_images/crematorium.jpg";
import peacefulGardenSrc from "@assets/generated_videos/peaceful_garden.mp4";
import dorsetCoastSrc from "@assets/generated_videos/dorset_coast.mp4";

gsap.registerPlugin(ScrollTrigger);

export function Funerals() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".page-title", {
      y: 80,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    });

    // Section rules expand
    gsap.utils.toArray(".section-rule").forEach((rule: any) => {
      gsap.from(rule, {
        scrollTrigger: { trigger: rule, start: "top 80%" },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power4.out"
      });
    });

    // Content fade up
    gsap.utils.toArray(".content-fade").forEach((content: any) => {
      gsap.from(content, {
        scrollTrigger: { trigger: content, start: "top 85%" },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
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

    // Big text reveal from left
    gsap.from(".closing-text", {
      scrollTrigger: { trigger: ".closing-text", start: "top 75%" },
      x: -80,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out"
    });

  }, { scope: container });

  return (
    <div ref={container} className="bg-foreground text-background min-h-screen overflow-hidden">

      {/* HERO — flowers over video */}
      <section className="relative min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          autoPlay muted loop playsInline
          src={peacefulGardenSrc}
          data-testid="video-funerals"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-foreground/20" />
        <div className="relative z-10 px-6 md:px-16 pb-24 pt-40">
          <h1 className="text-[9vw] md:text-[7vw] font-serif font-black italic text-background page-title leading-none mb-4">
            Funerals &<br/>Memorials
          </h1>
          <p className="text-2xl md:text-4xl font-serif italic text-secondary max-w-2xl">
            Honouring a life with dignity, warmth, and a deeply personal touch.
          </p>
        </div>
      </section>

      {/* FLOWERS image divider */}
      <div className="relative h-[45vh] overflow-hidden parallax-wrap">
        <img
          src={funeralFlowers}
          alt="Funeral flowers"
          className="parallax-img absolute inset-0 w-full h-[130%] object-cover top-[-15%]"
        />
        <div className="absolute inset-0 bg-primary/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-4xl md:text-6xl font-serif italic text-white text-center px-8">
            "Every farewell is different."
          </p>
        </div>
      </div>

      {/* FUNERALS SECTION */}
      <section className="py-24 px-6 md:px-16 relative">
        <div className="max-w-7xl mx-auto">
          <div className="section-rule h-px w-full bg-secondary mb-16" />
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 content-fade">
              <div className="parallax-wrap relative h-[60vh] overflow-hidden">
                <img
                  src={crematorium}
                  alt="Chapel"
                  className="parallax-img absolute inset-0 w-full h-[130%] object-cover top-[-15%]"
                />
                <div className="absolute inset-0 border-4 border-secondary/30 pointer-events-none" />
              </div>
            </div>
            <div className="md:col-span-7">
              <h2 className="text-5xl md:text-6xl font-serif italic text-secondary mb-8 content-fade">
                Funerals &amp;<br/>Celebration of Life
              </h2>
              <p className="text-2xl leading-relaxed opacity-90 mb-6 content-fade">
                Personally, I prefer to call it a Celebration of Life — because a funeral is, at its heart, an opportunity to honour and celebrate a life well lived, full of love and delivered with dignity.
              </p>
              <p className="text-xl leading-relaxed opacity-80 mb-6 content-fade">
                I understand how much funerals can vary. Some feel deeply personal and moving, while others can feel more formal. There is no set blueprint or a single way to say goodbye. Every ceremony can be shaped around your specific wishes, reflecting the life, character and values of your loved one.
              </p>
              <p className="text-xl leading-relaxed opacity-80 content-fade">
                Whether the ceremony takes place at a crematorium, a chapel, or at a graveside, together we will create a meaningful farewell — one that feels right for you and offers comfort as you say your goodbyes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEMORIAL SERVICES SECTION */}
      <section className="py-24 px-6 md:px-16 bg-background/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="section-rule h-px w-full bg-secondary mb-16" />
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7 order-2 md:order-1">
              <h2 className="text-5xl md:text-6xl font-serif italic text-secondary mb-8 content-fade">
                Memorial Services
              </h2>
              <p className="text-xl leading-relaxed opacity-90 mb-6 content-fade">
                Planning a memorial service can feel overwhelming — however it is important to know you don't have to do it alone.
              </p>
              <p className="text-xl leading-relaxed opacity-80 mb-6 content-fade">
                I offer a personal and caring approach, helping you create a service that reflects your loved one in a way that feels meaningful and comforting. Together, we will take time to remember your loved one's life, the stories, laughter, and the moments that mattered most.
              </p>
              <p className="text-xl leading-relaxed opacity-80 content-fade">
                Whether the tone is quiet and reflective or a gentle celebration of life, every ceremony is thoughtfully shaped around your wishes.
              </p>
            </div>
            <div className="md:col-span-5 order-1 md:order-2 content-fade">
              <div className="parallax-wrap relative h-[60vh] overflow-hidden">
                <img
                  src={memorialGarden1}
                  alt="Memorial garden"
                  className="parallax-img absolute inset-0 w-full h-[130%] object-cover top-[-15%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCATTERING OF ASHES — coastal video */}
      <section className="relative">
        <div className="relative h-[50vh] overflow-hidden parallax-wrap">
          <video
            className="absolute inset-0 w-full h-[120%] object-cover"
            autoPlay muted loop playsInline
            src={dorsetCoastSrc}
            data-testid="video-ashes"
          />
          <div className="absolute inset-0 bg-foreground/65" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-4">Scattering &amp; Internment of Ashes</h2>
            <p className="text-xl text-secondary italic font-serif">A Quiet Moment of Remembrance</p>
          </div>
        </div>
        <div className="bg-foreground py-20 px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="content-fade">
                <p className="text-xl leading-relaxed opacity-90 mb-6">
                  Scattering ashes can be a deeply personal and meaningful way to say goodbye. A quiet moment to reflect, remember, and honour your loved one in a place that feels special.
                </p>
                <p className="text-xl leading-relaxed opacity-80">
                  Whether it's by the sea, in a garden, or somewhere that holds precious memories, this simple act can bring comfort and a sense of closeness.
                </p>
              </div>
              <div className="content-fade">
                <div className="parallax-wrap relative h-64 overflow-hidden">
                  <img
                    src={memorialGarden2}
                    alt="Peaceful garden"
                    className="parallax-img absolute inset-0 w-full h-[130%] object-cover top-[-15%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-32 px-6 md:px-16 relative">
        <div className="absolute inset-0">
          <img src={coastSunset} alt="Sunset" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h3 className="closing-text text-4xl md:text-7xl font-serif italic text-secondary leading-tight">
            Every farewell is different,<br />and there is no single way<br />to say goodbye.
          </h3>
          <p className="mt-12 text-xl opacity-70 max-w-2xl mx-auto">
            Whether you are planning a full funeral ceremony, a memorial service, or a quiet moment scattering ashes, I will support you with warmth, understanding, and care.
          </p>
        </div>
      </section>

    </div>
  );
}
