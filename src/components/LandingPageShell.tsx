"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface LandingPageShellProps {
  children: React.ReactNode;
}

export function LandingPageShell({ children }: LandingPageShellProps) {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-reveal", {
          y: 26,
          opacity: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform,opacity",
        });

        const sections = gsap.utils.toArray<HTMLElement>(".reveal-section");
        sections.forEach((section) => {
          gsap.from(section, {
            y: 32,
            opacity: 0,
            duration: 0.75,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              once: true,
            },
          });
        });

        ScrollTrigger.batch(".reveal-card", {
          start: "top 90%",
          once: true,
          onEnter: (batch) => {
            gsap.from(batch, {
              y: 28,
              opacity: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "power2.out",
              clearProps: "transform,opacity",
            });
          },
        });

        if (document.fonts?.ready) {
          document.fonts.ready.then(() => {
            ScrollTrigger.refresh();
          });
        }
      });

      return () => mm.revert();
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef} className="overflow-x-clip">
      {children}
    </main>
  );
}
