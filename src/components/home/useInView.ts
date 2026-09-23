"use client";

import { useEffect, useState, RefObject } from "react";

interface Options {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Fires when the referenced element enters the viewport.
 * Disconnects after first intersection by default (once: true).
 */
export function useInView(
  ref: RefObject<Element | null>,
  { threshold = 0.15, rootMargin = "0px", once = true }: Options = {}
): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, once]);

  return inView;
}
