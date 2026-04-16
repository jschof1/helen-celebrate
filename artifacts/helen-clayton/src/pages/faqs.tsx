import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What does a celebrant do?",
    a: "A celebrant creates and conducts bespoke ceremonies tailored to the people involved, free from the restrictions of a traditional religious or strictly statutory service."
  },
  {
    q: "What types of ceremonies do you offer?",
    a: "I offer Weddings, Vow Renewals, Funerals, Celebration of Life services, Memorials, and Scattering/Internment of Ashes."
  },
  {
    q: "How personal can a ceremony be?",
    a: "Entirely personal. There is no set template. Every word is chosen to reflect your beliefs, personality, and story."
  },
  {
    q: "Will you help guide us through?",
    a: "Absolutely. Whether you're planning a joyous wedding or navigating a difficult bereavement, I am here to hold your hand, offer suggestions, and structure the ceremony."
  },
  {
    q: "Can we include our own readings, music or traditions?",
    a: "Yes. You have complete freedom to include religious, spiritual, or secular elements, as well as family traditions or cultural rituals."
  },
  {
    q: "Do you plan services before someone has passed away?",
    a: "Yes. Many people find comfort in planning their own funeral service in advance, ensuring their exact wishes are recorded and respected."
  },
  {
    q: "What if the ceremony is outside?",
    a: "Because celebrant-led ceremonies do not require a licensed structure, you can hold your ceremony in a garden, woodland, beach, or field."
  },
  {
    q: "How far will you travel?",
    a: "My fees include travel within 30 miles of Poole, Dorset. I am happy to travel further, though additional travel costs may apply."
  },
  {
    q: "How do I pay?",
    a: "Payment is typically made via bank transfer. For weddings, a deposit secures the date, with the balance due closer to the ceremony. For funerals, this is often handled directly via your Funeral Director."
  },
  {
    q: "How far in advance should we book?",
    a: "For weddings, as soon as you have a date in mind! For funerals, I can respond quickly, usually within a few days, working alongside your chosen Funeral Director."
  },
  {
    q: "How do we get started?",
    a: "Simply get in touch via phone or email for a friendly, no-obligation chat."
  }
];

export function Faqs() {
  const container = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useGSAP(() => {
    gsap.from(".faq-item", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.2
    });
  }, { scope: container });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={container} className="bg-card min-h-screen pt-40 pb-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-serif text-primary italic mb-16 text-center">
          Questions & Answers
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="faq-item border border-secondary bg-background overflow-hidden"
              >
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full p-6 md:p-8 flex justify-between items-center text-left hover:bg-secondary/10 transition-colors"
                  data-testid={`faq-button-${i}`}
                >
                  <span className="text-2xl font-serif text-foreground pr-8">{faq.q}</span>
                  <Plus 
                    className={`w-8 h-8 text-primary shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`} 
                  />
                </button>
                
                <div 
                  className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                  style={{ maxHeight: isOpen ? '500px' : '0px' }}
                >
                  <div className="p-6 md:p-8 pt-0 text-lg text-muted-foreground border-t border-secondary/30 mt-2">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}