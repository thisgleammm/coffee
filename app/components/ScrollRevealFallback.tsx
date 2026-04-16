"use client";

import { useEffect } from "react";

/**
 * Fallback for browsers that don't support CSS animation-timeline: view().
 * Uses IntersectionObserver to add .is-visible class on scroll-reveal elements.
 */
export default function ScrollRevealFallback() {
  useEffect(() => {
    const supportsScrollTimeline = CSS.supports("animation-timeline", "view()");
    if (supportsScrollTimeline) return;

    const targets = document.querySelectorAll(".scroll-reveal");
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return null;
}
