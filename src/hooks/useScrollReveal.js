import { useRef, useEffect, useState, useCallback } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (isVisible) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, isVisible]);

  return [ref, isVisible];
}

export function useParallax(strength = 0.08) {
  const ref = useRef(null);
  const rafId = useRef(null);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const rect = el.getBoundingClientRect();
    const viewH = window.innerHeight;
    const center = rect.top + rect.height / 2;
    const offset = (center - viewH / 2) * strength;
    el.style.transform = `translateY(${offset}px)`;
  }, [strength]);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const onScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [update]);

  return ref;
}

/**
 * While scrolling, sets active index to the item whose bounding box center is
 * closest to the viewport vertical center among items that intersect the viewport.
 */
export function useActiveIndexNearViewportCenter(itemCount) {
  const itemRefs = useRef([]);
  const rafId = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (itemCount === 0) return;

    const update = () => {
      const vh = window.innerHeight;
      const mid = vh / 2;
      let best = null;
      let bestDist = Infinity;
      const refs = itemRefs.current;
      for (let i = 0; i < itemCount; i++) {
        const el = refs[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.bottom <= 0 || rect.top >= vh) continue;
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      }
      setActiveIndex((prev) => (prev === best ? prev : best));
    };

    const onScrollOrResize = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [itemCount]);

  return [activeIndex, itemRefs];
}

export function useActiveSection(sectionIds) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
