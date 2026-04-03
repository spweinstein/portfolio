import { useEffect, useRef } from "react";

const INTERACTIVE_CLASS = "marquee-zone--interactive";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function isHoverNone() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none)").matches
  );
}

/**
 * Drives horizontal auto-scroll on `viewportRef` while the pointer is not
 * interacting with `zoneRef`. When the zone is hovered, focus-within, or
 * (on touch devices) during an active pointer gesture, scrolling is enabled
 * and auto-scroll pauses.
 *
 * @param {import('react').RefObject<HTMLElement | null>} viewportRef
 * @param {object} [options]
 * @param {import('react').RefObject<HTMLElement | null>} [options.zoneRef] - hover/interaction root (required when motion is allowed)
 * @param {number} [options.loopDurationSeconds]
 * @param {number} [options.pixelsPerSecond]
 * @param {number} [options.resumeDelayMs] - touch: delay after pointer up before auto-scroll resumes
 */
export function useMarqueeAutoScroll(
  viewportRef,
  {
    zoneRef,
    loopDurationSeconds = 80,
    pixelsPerSecond: pixelsPerSecondOption,
    resumeDelayMs = 1200,
  } = {},
) {
  const pausedRef = useRef(false);
  const lastTimeRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const suppressScrollRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = viewportRef.current;
    const zone = zoneRef?.current;
    if (!el || prefersReducedMotion()) return;
    if (!zone) return;

    const clearResumeTimer = () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = null;
      }
    };

    const setInteractiveClass = (on) => {
      zone.classList.toggle(INTERACTIVE_CLASS, on);
    };

    const scheduleTouchResume = () => {
      clearResumeTimer();
      resumeTimerRef.current = setTimeout(() => {
        pausedRef.current = false;
        lastTimeRef.current = null;
        setInteractiveClass(false);
        resumeTimerRef.current = null;
      }, resumeDelayMs);
    };

    const onZoneEnter = () => {
      clearResumeTimer();
      pausedRef.current = true;
      lastTimeRef.current = null;
    };

    const onZoneLeave = () => {
      clearResumeTimer();
      pausedRef.current = false;
      lastTimeRef.current = null;
    };

    const onFocusIn = () => {
      clearResumeTimer();
      pausedRef.current = true;
      lastTimeRef.current = null;
    };

    const onFocusOut = (e) => {
      const next = e.relatedTarget;
      if (next && zone.contains(next)) return;
      clearResumeTimer();
      pausedRef.current = false;
      lastTimeRef.current = null;
    };

    const onTouchPointerDown = () => {
      clearResumeTimer();
      pausedRef.current = true;
      lastTimeRef.current = null;
      setInteractiveClass(true);
    };

    const onTouchPointerUp = () => {
      scheduleTouchResume();
    };

    const hoverNone = isHoverNone();

    const onHybridTouchDown = (e) => {
      if (e.pointerType !== "touch") return;
      onTouchPointerDown();
    };

    const onHybridTouchUp = (e) => {
      if (e.pointerType !== "touch") return;
      onTouchPointerUp();
    };

    if (!hoverNone) {
      zone.addEventListener("mouseenter", onZoneEnter);
      zone.addEventListener("mouseleave", onZoneLeave);
      zone.addEventListener("pointerdown", onHybridTouchDown, { passive: true });
      zone.addEventListener("pointerup", onHybridTouchUp, { passive: true });
      zone.addEventListener("pointercancel", onHybridTouchUp, { passive: true });
    } else {
      zone.addEventListener("pointerdown", onTouchPointerDown, { passive: true });
      zone.addEventListener("pointerup", onTouchPointerUp, { passive: true });
      zone.addEventListener("pointercancel", onTouchPointerUp, { passive: true });
    }

    zone.addEventListener("focusin", onFocusIn);
    zone.addEventListener("focusout", onFocusOut);

    const ro = new ResizeObserver(() => {
      lastTimeRef.current = null;
    });
    ro.observe(el);

    const tick = (now) => {
      rafRef.current = requestAnimationFrame(tick);

      const scrollW = el.scrollWidth;
      const clientW = el.clientWidth;
      const half = scrollW / 2;
      if (half <= 0 || scrollW <= clientW) return;

      const pixelsPerSecond =
        pixelsPerSecondOption ??
        Math.max(0.0001, half / Math.max(loopDurationSeconds, 0.001));

      if (pausedRef.current) return;

      if (lastTimeRef.current === null) {
        lastTimeRef.current = now;
        return;
      }

      const dt = Math.min((now - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = now;

      let next = el.scrollLeft + pixelsPerSecond * dt;
      if (next >= half) {
        next -= half;
      }

      suppressScrollRef.current = true;
      el.scrollLeft = next;
      requestAnimationFrame(() => {
        suppressScrollRef.current = false;
      });
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      clearResumeTimer();
      setInteractiveClass(false);
      ro.disconnect();
      if (!hoverNone) {
        zone.removeEventListener("mouseenter", onZoneEnter);
        zone.removeEventListener("mouseleave", onZoneLeave);
        zone.removeEventListener("pointerdown", onHybridTouchDown);
        zone.removeEventListener("pointerup", onHybridTouchUp);
        zone.removeEventListener("pointercancel", onHybridTouchUp);
      } else {
        zone.removeEventListener("pointerdown", onTouchPointerDown);
        zone.removeEventListener("pointerup", onTouchPointerUp);
        zone.removeEventListener("pointercancel", onTouchPointerUp);
      }
      zone.removeEventListener("focusin", onFocusIn);
      zone.removeEventListener("focusout", onFocusOut);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [
    viewportRef,
    zoneRef,
    loopDurationSeconds,
    pixelsPerSecondOption,
    resumeDelayMs,
  ]);
}
