import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { title: "gov.uk Marriage Guidance", url: "#", type: "Wedding" },
  { title: "BCP Council Registry", url: "#", type: "Wedding" },
  { title: "Dorset Council Registration Offices", url: "#", type: "Wedding" },
  { title: "Blandford Registration Office", url: "#", type: "Wedding" },
  { title: "Ringwood Register Office", url: "#", type: "Wedding" },
  { title: "Hitched.co.uk Wedding Venues", url: "#", type: "Wedding" },
  { title: "Dorset Council Wedding Venues", url: "#", type: "Wedding" },
  { title: "Cruse.org.uk Grief Support", url: "#", type: "Bereavement" },
  { title: "NAFD Funeral Planning", url: "#", type: "Bereavement" },
  { title: "Good Funeral Guide", url: "#", type: "Bereavement" }
];

export function Links() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".link-card", {
      scrollTrigger: {
        trigger: ".links-grid",
        start: "top 80%",
      },
      scale: 0.9,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.5)"
    });
  }, { scope: container });

  return (
    <div ref={container} className="bg-background min-h-screen pt-40 pb-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-serif text-foreground mb-6">Helpful Links</h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
          Resources to support you in planning your ceremony or navigating a difficult time.
        </p>

        <div className="links-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, i) => (
            <a 
              key={i} 
              href={link.url}
              className="link-card group block p-8 bg-card border border-card-border hover:bg-primary hover:text-primary-foreground hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              data-testid={`link-external-${i}`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-4 block">
                {link.type}
              </span>
              <h3 className="text-2xl font-serif pr-8 group-hover:text-primary-foreground transition-colors">
                {link.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}