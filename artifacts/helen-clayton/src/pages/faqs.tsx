import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";
import weddingOutdoor2 from "@assets/stock_images/wedding_outdoor_2.jpg";
import memorialGarden2 from "@assets/stock_images/memorial_garden_2.jpg";
import coastSunset from "@assets/stock_images/coast_sunset.jpg";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What does a celebrant do?",
    a: "A celebrant works with you to create and deliver a personal, meaningful ceremony. They take the time to listen and understand your wishes, then crafts a ceremony that truly reflects your story, your values, and the moment you are marking."
  },
  {
    q: "What types of ceremonies do you offer?",
    a: "I offer a range of ceremonies including weddings, vow renewals, funerals, memorial services, and scattering or interment of ashes. Each one is thoughtfully created to suit your individual needs."
  },
  {
    q: "How personal can a ceremony be?",
    a: "Completely personal. There are no set scripts or templates. Every ceremony is written from scratch, with your input, so it feels natural, meaningful, and true to you."
  },
  {
    q: "Will you help guide us through the whole process?",
    a: "Yes, absolutely. I will support you every step of the way, from our first conversation through to the day itself. I will offer guidance, ideas, and reassurance whenever you need it."
  },
  {
    q: "Can we include our own readings, music or traditions?",
    a: "Absolutely. You are free to include anything that feels right for you, whether that is your favourite music, special readings, cultural traditions, or personal touches that reflect your loved one or your relationship."
  },
  {
    q: "Do you plan services before someone has passed away?",
    a: "Yes, absolutely. I am happy to support people in planning their own service particularly when they are living with a serious or terminal illness. Many find comfort in knowing that their ceremony will truly reflect their life, their personality and the things that matter most to them. It can also bring peace of mind knowing that everything is arranged. This can help to ease the burden on loved ones at a very difficult time. Sometimes, people choose to include personal touches that will be shared later. This maybe a letter, a message or something meaningful for their family to cherish. These moments can be incredibly special and comforting for those left behind. I do this with sensitivity, care, and understanding. I ensure everything feels right."
  },
  {
    q: "What if the ceremony is outside or in a different location?",
    a: "I am happy to lead ceremonies in a variety of settings, whether at a crematorium, graveside or another meaningful location. I will create a service that feels right for you."
  },
  {
    q: "How far will you travel?",
    a: "Travel within a 30-mile radius is included in my fee. If your ceremony is further afield, we can discuss arrangements in advance."
  },
  {
    q: "How do I pay for your celebrant services?",
    a: "Weddings - Payment is usually made by bank transfer, making the process simple and straightforward. A deposit will be requested to secure your date, with the remaining balance due before the ceremony. Full details are provided in writing at our initial meeting. Funerals - For your ease and convenience, my fee is typically included as part of the arrangements made with your Funeral Director."
  },
  {
    q: "How far in advance should we book your services?",
    a: "It is always best to get in touch as early as possible to secure your date. However, I will always do my best to accommodate shorter notice where I can."
  },
  {
    q: "How do we get started?",
    a: "Simply get in touch for a friendly, no-obligation chat. We can talk through your ideas, answer any questions, and see how I can support you."
  }
];

export function Faqs() {
  const container = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useGSAP(() => {
    gsap.from(".page-title", {
      y: 80,
      opacity: 0,
      duration: 1.3,
      ease: "power3.out"
    });

    gsap.from(".faq-item", {
      scrollTrigger: { trigger: ".faq-list", start: "top 85%" },
      y: 40,
      opacity: 0,
      stagger: 0.07,
      duration: 0.8,
      ease: "power2.out",
    });

    // Parallax on sidebar images
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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={container} className="bg-background min-h-screen overflow-hidden">

      {/* HERO — Helen flagged that "& Answers" was hard to see against the
          background, and the previous Q glyph looked like a 2 (now solved
          globally with the Cormorant Garamond serif). The hero overlay now
          has a stronger dark wash so both lines of the heading stay legible. */}
      <section className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 parallax-wrap">
          <img
            src={weddingOutdoor2}
            alt="Wedding"
            className="parallax-img absolute inset-0 w-full h-[130%] object-cover top-[-15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-foreground/75 to-foreground/45" />
        </div>
        <div className="relative z-10 px-6 md:px-16 pb-16 pt-40">
          <h1 className="page-title text-7xl md:text-9xl font-serif font-bold italic text-white leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Questions
          </h1>
          <p className="page-title text-4xl md:text-6xl font-serif italic text-secondary mt-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            &amp; Answers
          </p>
        </div>
      </section>

      {/* FAQ CONTENT — main grid */}
      <section className="py-20 px-6 md:px-16" style={{ background: 'linear-gradient(180deg, hsl(40 20% 98%) 0%, hsl(35 40% 90%) 40%, hsl(0 15% 95%) 70%, hsl(38 30% 94%) 100%)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* FAQ list */}
          <div className="lg:col-span-8 faq-list space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="faq-item border border-secondary/40 bg-card overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full p-6 md:p-8 flex justify-between items-center text-left hover:bg-secondary/10 transition-colors group"
                    data-testid={`faq-button-${i}`}
                  >
                    <span className="text-2xl font-serif text-primary pr-8 transition-colors">{faq.q}</span>
                    <Plus
                      className={`w-8 h-8 text-primary shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}
                    />
                  </button>

                  <div
                    className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                    style={{ maxHeight: isOpen ? '400px' : '0px' }}
                  >
                    <div className="p-6 md:p-8 pt-0 text-lg text-muted-foreground border-t border-secondary/30 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="parallax-wrap sticky top-24 space-y-8">
              <div className="relative overflow-hidden h-80">
                <img
                  src={memorialGarden2}
                  alt="Garden"
                  className="parallax-img absolute inset-0 w-full h-[130%] object-cover top-[-15%]"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
              <div className="bg-primary text-primary-foreground p-8">
                <h3 className="text-3xl font-serif italic text-secondary mb-4">Still have questions?</h3>
                <p className="text-lg opacity-90 mb-6">
                  I'm always happy to have a no-pressure chat to help you understand what's involved.
                </p>
                <a
                  href="tel:07786789331"
                  className="block text-center border-2 border-secondary text-secondary py-3 text-xl font-bold hover:bg-secondary hover:text-primary transition-colors"
                  data-testid="link-faq-phone"
                >
                  07786 789331
                </a>
              </div>
              <div className="overflow-hidden h-48">
                <img src={coastSunset} alt="Dorset coast" className="w-full h-full object-cover" />
                <div className="relative -mt-full" />
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
