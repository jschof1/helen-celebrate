import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const container = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useGSAP(() => {
    gsap.from(".contact-left", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
    
    gsap.from(".contact-right", {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2
    });
  }, { scope: container });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission since no backend is required
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. I'll be in touch shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div ref={container} className="bg-background min-h-[90vh] pt-40 pb-24 px-6 md:px-12 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="contact-left flex flex-col justify-center">
            <h1 className="text-giant font-serif text-primary leading-none mb-8 ml-[-1vw]">
              Let's Talk.
            </h1>
            <p className="text-2xl font-serif italic text-foreground mb-12 border-l-4 border-secondary pl-6">
              Get in touch for a friendly, no-obligation chat.
            </p>
            
            <div className="space-y-6 text-xl">
              <div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-bold mb-1">Email</p>
                <a href="mailto:contact@hccelebrancy.co.uk" className="text-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary">
                  contact@hccelebrancy.co.uk
                </a>
              </div>
              
              <div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-bold mb-1">Phone</p>
                <a href="tel:07786789331" className="text-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary">
                  07786 789331
                </a>
              </div>
              
              <div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-bold mb-1">Location</p>
                <p className="text-foreground">Based in Poole, Dorset</p>
              </div>
            </div>
          </div>

          <div className="contact-right bg-card p-8 md:p-12 shadow-2xl relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary opacity-50 z-0" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-primary z-0" />
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-foreground">Name</label>
                  <input required type="text" id="name" className="w-full bg-background border border-card-border p-3 focus:outline-none focus:border-primary text-foreground" data-testid="input-name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wider text-foreground">Phone</label>
                  <input type="tel" id="phone" className="w-full bg-background border border-card-border p-3 focus:outline-none focus:border-primary text-foreground" data-testid="input-phone" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-foreground">Email</label>
                <input required type="email" id="email" className="w-full bg-background border border-card-border p-3 focus:outline-none focus:border-primary text-foreground" data-testid="input-email" />
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-bold uppercase tracking-wider text-foreground">Ceremony Type</label>
                <select id="type" className="w-full bg-background border border-card-border p-3 focus:outline-none focus:border-primary text-foreground" data-testid="select-type">
                  <option>Wedding</option>
                  <option>Funeral/Memorial</option>
                  <option>Vow Renewal</option>
                  <option>Ash Scattering</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-foreground">Message</label>
                <textarea required id="message" rows={4} className="w-full bg-background border border-card-border p-3 focus:outline-none focus:border-primary text-foreground resize-none" data-testid="input-message"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground font-serif italic text-2xl py-4 hover:bg-secondary transition-colors disabled:opacity-50"
                data-testid="button-submit-contact"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}