"use client";

import { useEffect, useRef } from "react";

/**
 * Activates the bidirectional scroll-reveal system defined in globals.css.
 * Observes every element with .reveal, .reveal-left, .reveal-right,
 * or .reveal-scale and triggers entrance animations whenever entering
 * the viewport when scrolling up and down.
 */
export default function ScrollReveal() {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            // Remove visible class when out of viewport so it re-animates upon re-entry
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    const observe = () => {
      document.querySelectorAll<HTMLElement>(selectors).forEach((el) => {
        observer.observe(el);
      });
    };

    observe();

    // Re-observe after Next.js soft navigation
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}

