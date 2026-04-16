import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useToast } from "@/hooks/use-toast";
import helenPortrait1 from "@assets/stock_images/helen_portrait_1.jpg";
import weddingCouple1 from "@assets/stock_images/wedding_couple_1.jpg";
import dorsetCoastSrc from "@assets/generated_videos/dorset_coast.mp4";
import { ApcCertifiedBadge } from "@/components/apc-certified-badge";

export function Contact() {
  const container = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useGSAP(() => {
    gsap.from(".contact-left", {
      x: -120,
      opacity: 0,
      duration: 1.3,
      ease: "power3.out"
    });
    gsap.from(".contact-right", {
      x: 120,
      opacity: 0,
      duration: 1.3,
      ease: "power3.out",
      delay: 0.15
    });
    gsap.from(".contact-detail", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.5
    });
  }, { scope: container });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. Helen will be in touch shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div ref={container} className="bg-background min-h-screen overflow-hidden">

      {/* VIDEO HEADER */}
      <section className="relative h-[45vh] overflow-hidden flex items-end">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
          src={dorsetCoastSrc}
          data-testid="video-contact"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/40 to-transparent" />
        <div className="relative z-10 px-6 md:px-16 pb-16 pt-32">
          <h1 className="text-7xl md:text-[9vw] font-serif font-black italic text-foreground leading-none">
            Let's Talk.
          </h1>
        </div>
      </section>

      {/* MAIN CONTACT — Split */}
      <section className="py-20 px-6 md:px-0" style={{ background: 'linear-gradient(180deg, hsl(40 20% 98%) 0%, hsl(35 40% 90%) 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Left — portrait + details */}
            <div className="contact-left relative overflow-hidden">
              {/* Portrait image fills top */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={helenPortrait1}
                  alt="Helen Clayton"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground/90" />
              </div>

              {/* Contact details over dark bg */}
              <div className="bg-foreground text-background px-10 md:px-16 py-16 flex flex-col gap-8">
                <p className="text-2xl font-serif italic text-secondary">
                  Get in touch for a friendly, no-obligation chat. I'd love to hear about your plans.
                </p>

                <div className="contact-detail">
                  <p className="text-sm uppercase tracking-widest text-background/50 font-bold mb-2">Email</p>
                  <a href="mailto:contact@hccelebrancy.co.uk" className="text-2xl hover:text-secondary transition-colors" data-testid="link-contact-email">
                    contact@hccelebrancy.co.uk
                  </a>
                </div>

                <div className="contact-detail">
                  <p className="text-sm uppercase tracking-widest text-background/50 font-bold mb-2">Phone</p>
                  <a href="tel:07786789331" className="text-2xl hover:text-secondary transition-colors" data-testid="link-contact-phone">
                    07786 789331
                  </a>
                </div>

                <div className="contact-detail">
                  <p className="text-sm uppercase tracking-widest text-background/50 font-bold mb-2">Location</p>
                  <p className="text-xl text-background/80">Based in Poole, Dorset</p>
                </div>

                <div className="contact-detail flex gap-4 items-start">
                  <ApcCertifiedBadge size="sm" className="shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm uppercase tracking-widest text-background/50 font-bold mb-2">Credentials</p>
                    <p className="text-background/80 font-bold">APC UK Accredited Celebrant</p>
                    <p className="text-background/80">Obitus · DBS Checked</p>
                  </div>
                </div>

                {/* Small second image */}
                <div className="mt-4 overflow-hidden h-40">
                  <img src={weddingCouple1} alt="Ceremony" className="w-full h-full object-cover opacity-70" />
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="contact-right bg-card p-10 md:p-16 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-20" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-4 border-primary opacity-30" />

              <h2 className="text-4xl font-serif italic text-primary mb-10 relative z-10">Send a message</h2>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-foreground">Full Name</label>
                    <input required type="text" id="name" className="w-full bg-background border-b-2 border-card-border p-3 focus:outline-none focus:border-primary text-foreground transition-colors" data-testid="input-name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wider text-foreground">Phone</label>
                    <input type="tel" id="phone" className="w-full bg-background border-b-2 border-card-border p-3 focus:outline-none focus:border-primary text-foreground transition-colors" data-testid="input-phone" placeholder="07..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-foreground">Email</label>
                  <input required type="email" id="email" className="w-full bg-background border-b-2 border-card-border p-3 focus:outline-none focus:border-primary text-foreground transition-colors" data-testid="input-email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm font-bold uppercase tracking-wider text-foreground">Ceremony Type</label>
                  <select id="type" className="w-full bg-background border-b-2 border-card-border p-3 focus:outline-none focus:border-primary text-foreground transition-colors" data-testid="select-type">
                    <option>Wedding</option>
                    <option>Funeral / Memorial</option>
                    <option>Vow Renewal</option>
                    <option>Ash Scattering</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-foreground">Your Message</label>
                  <textarea required id="message" rows={5} className="w-full bg-background border-b-2 border-card-border p-3 focus:outline-none focus:border-primary text-foreground resize-none transition-colors" data-testid="input-message" placeholder="Tell me about your ceremony..."></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground font-serif italic text-2xl py-5 hover:bg-secondary hover:text-secondary-foreground transition-colors disabled:opacity-50"
                  data-testid="button-submit-contact"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
