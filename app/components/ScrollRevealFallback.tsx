"use client";

import { useEffect } from "react";

/**
 * Provides IntersectionObserver-based scroll reveal for browsers
 * that do not support CSS scroll-driven animations (animation-timeline: view()).
 * Progressive enhancement: if CSS supports it, this component is a no-op
 * because the CSS classes take precedence.
 */

const SCROLL_REVEAL_SELECTORS = [
  ".scroll-reveal",
  ".scroll-reveal-scale",
  ".scroll-reveal-left",
  ".scroll-reveal-right",
  ".scroll-reveal-stagger",
];

const INTERSECTION_THRESHOLD = 0.15;

export default function ScrollRevealFallback() {
  useEffect(() => {
    const supportsScrollTimeline = CSS.supports("animation-timeline", "view()");
    if (supportsScrollTimeline) return;

    const targets = document.querySelectorAll(SCROLL_REVEAL_SELECTORS.join(", "));
    if (targets.length === 0) return;

    targets.forEach((element) => {
      element.classList.add("scroll-reveal-fallback");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: INTERSECTION_THRESHOLD }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return null;
}
