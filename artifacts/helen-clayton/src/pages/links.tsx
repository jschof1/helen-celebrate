import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import weddingRings from "@assets/stock_images/wedding_rings.jpg";
import memorialGarden1 from "@assets/stock_images/memorial_garden_1.jpg";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { title: "gov.uk Marriage Guidance", url: "https://www.gov.uk/marriages-civil-partnerships", type: "Wedding", desc: "Official government guidance on registering a marriage in England." },
  { title: "BCP Council Registry", url: "https://www.bcpcouncil.gov.uk/births-deaths-marriages-and-citizenship/marriages-and-civil-partnerships", type: "Wedding", desc: "Borough of Bournemouth, Christchurch and Poole registry information." },
  { title: "Dorset Council Registration Offices", url: "https://www.dorsetcouncil.gov.uk/births-deaths-and-ceremonies/marriages-and-civil-partnerships", type: "Wedding", desc: "Register your marriage legally with Dorset Council." },
  { title: "Blandford Registration Office", url: "https://www.dorsetcouncil.gov.uk/births-deaths-and-ceremonies/blandford-registration-office", type: "Wedding", desc: "Local registration office in Blandford Forum." },
  { title: "Ringwood Register Office", url: "https://www.hants.gov.uk/community/registersoffice/offices/ringwood", type: "Wedding", desc: "Register office serving the Ringwood area." },
  { title: "Hitched.co.uk Wedding Venues", url: "https://www.hitched.co.uk/wedding-venues/", type: "Wedding", desc: "Discover and book beautiful wedding venues across the UK." },
  { title: "Dorset Council Wedding Venues", url: "https://www.dorsetcouncil.gov.uk/births-deaths-and-ceremonies/approved-premises-for-ceremonies", type: "Wedding", desc: "Licensed venues for civil ceremonies in Dorset." },
  { title: "Cruse Bereavement Support", url: "https://www.cruse.org.uk", type: "Bereavement", desc: "Free bereavement counselling and support services." },
  { title: "NAFD Funeral Planning", url: "https://nafd.org.uk", type: "Bereavement", desc: "National Association of Funeral Directors guidance." },
  { title: "The Good Funeral Guide", url: "https://www.goodfuneralguide.co.uk", type: "Bereavement", desc: "Independent advice on planning a meaningful funeral." }
];

export function Links() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".page-title", {
      y: 80,
      opacity: 0,
      duration: 1.3,
      ease: "power3.out"
    });

    gsap.utils.toArray(".link-card").forEach((card: any, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 90%" },
        scale: 0.93,
        opacity: 0,
        duration: 0.7,
        delay: i * 0.04,
        ease: "back.out(1.5)"
      });
    });

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

  const weddingLinks = links.filter(l => l.type === "Wedding");
  const bereavementLinks = links.filter(l => l.type === "Bereavement");

  return (
    <div ref={container} className="bg-background min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[45vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="parallax-wrap overflow-hidden relative">
            <img src={weddingRings} alt="Wedding" className="parallax-img absolute inset-0 w-full h-[130%] object-cover top-[-15%]" />
          </div>
          <div className="parallax-wrap overflow-hidden relative">
            <img src={memorialGarden1} alt="Memorial" className="parallax-img absolute inset-0 w-full h-[130%] object-cover top-[-15%]" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-foreground/50 to-foreground/30" />
        </div>
        <div className="relative z-10 px-6 md:px-16 pb-16 pt-40">
          <h1 className="page-title text-6xl md:text-9xl font-serif font-black italic text-white leading-none">
            Helpful Links
          </h1>
          <p className="text-xl text-secondary mt-4 font-serif italic">
            Resources to support you in planning your ceremony or navigating a difficult time.
          </p>
        </div>
      </section>

      {/* LINKS — by category */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* Weddings */}
          <div>
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px flex-1 bg-secondary" />
              <h2 className="text-4xl md:text-6xl font-serif italic text-primary whitespace-nowrap">Wedding Resources</h2>
              <div className="h-px flex-1 bg-secondary" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {weddingLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-card group block p-8 bg-card border border-card-border hover:bg-primary hover:text-primary-foreground hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                  data-testid={`link-wedding-${i}`}
                >
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-3 block">
                    {link.type}
                  </span>
                  <h3 className="text-xl font-serif mb-3 pr-8 group-hover:text-primary-foreground transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors leading-relaxed">
                    {link.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Bereavement */}
          <div>
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px flex-1 bg-secondary" />
              <h2 className="text-4xl md:text-6xl font-serif italic text-primary whitespace-nowrap">Bereavement Support</h2>
              <div className="h-px flex-1 bg-secondary" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bereavementLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-card group block p-8 bg-foreground text-background border border-card-border hover:bg-primary hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                  data-testid={`link-bereavement-${i}`}
                >
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-3 block">
                    {link.type}
                  </span>
                  <h3 className="text-xl font-serif mb-3 pr-8">
                    {link.title}
                  </h3>
                  <p className="text-sm opacity-70 leading-relaxed">
                    {link.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
