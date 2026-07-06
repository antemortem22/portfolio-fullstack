"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";

const POINTER_QUERY = "(pointer: fine) and (hover: hover)";

function usePrecisePointerEnabled() {
  const prefersReducedMotion = useReducedMotion();
  const canUsePrecisePointer = useSyncExternalStore(
    (onStoreChange) => {
      const mediaQuery = window.matchMedia(POINTER_QUERY);
      mediaQuery.addEventListener("change", onStoreChange);

      return () => {
        mediaQuery.removeEventListener("change", onStoreChange);
      };
    },
    () => window.matchMedia(POINTER_QUERY).matches,
    () => false,
  );
  const isPageVisible = useSyncExternalStore(
    (onStoreChange) => {
      document.addEventListener("visibilitychange", onStoreChange);

      return () => {
        document.removeEventListener("visibilitychange", onStoreChange);
      };
    },
    () => document.visibilityState === "visible",
    () => true,
  );

  // The effect is only worth rendering for fine pointers while the tab is visible.
  return !prefersReducedMotion && canUsePrecisePointer && isPageVisible;
}

export function CursorGlowTrail() {
  const isEnabled = usePrecisePointerEnabled();
  const [hasMoved, setHasMoved] = useState(false);
  const [isDimmed, setIsDimmed] = useState(false);
  const pointerX = useMotionValue(-200);
  const pointerY = useMotionValue(-200);

  const leadX = useSpring(pointerX, { stiffness: 280, damping: 34, mass: 0.22 });
  const leadY = useSpring(pointerY, { stiffness: 280, damping: 34, mass: 0.22 });
  const trailX = useSpring(pointerX, { stiffness: 170, damping: 28, mass: 0.34 });
  const trailY = useSpring(pointerY, { stiffness: 170, damping: 28, mass: 0.34 });
  const hazeX = useSpring(pointerX, { stiffness: 110, damping: 24, mass: 0.42 });
  const hazeY = useSpring(pointerY, { stiffness: 110, damping: 24, mass: 0.42 });

  const leadBackground = useMotionTemplate`radial-gradient(circle, rgba(122, 56, 181, 0.18) 0%, rgba(84, 32, 122, 0.09)100%, rgba(84, 32, 122, 0.03) 60%, transparent 0%)`;
  const trailBackground = useMotionTemplate`radial-gradient(circle, rgba(122, 56, 181, 0.13) 0%, rgba(84, 32, 122, 0.06) 100%, transparent 78%)`;
  const hazeBackground = useMotionTemplate`radial-gradient(circle, rgba(122, 56, 181, 0.09) 0%, rgba(84, 32, 122, 0.035) 100%, transparent 80%)`;

  useEffect(() => {
    if (!isEnabled) {
      pointerX.set(-200);
      pointerY.set(-200);
      return;
    }

    // Dim the glow over interactive surfaces that already have their own visual emphasis.
    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);
      setIsDimmed(hoveredElement?.closest("[data-cursor-glow='dim']") !== null);

      if (!hasMoved) {
        setHasMoved(true);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [hasMoved, isEnabled, pointerX, pointerY]);

  if (!isEnabled) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[20] overflow-hidden transition-opacity duration-500 ${
        hasMoved ? (isDimmed ? "opacity-70" : "opacity-100") : "opacity-0"
      }`}
    >
      <motion.div
        className="absolute left-0 top-0 h-[240px] w-[240px] rounded-full blur-[56px]"
        style={{
          x: leadX,
          y: leadY,
          translateX: "-50%",
          translateY: "-50%",
          background: leadBackground,
        }}
      />
      <motion.div
        className="absolute left-0 top-0 h-[210px] w-[210px] rounded-full blur-[72px]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          background: trailBackground,
        }}
      />
      <motion.div
        className="absolute left-0 top-0 h-[180px] w-[180px] rounded-full blur-[86px]"
        style={{
          x: hazeX,
          y: hazeY,
          translateX: "-50%",
          translateY: "-50%",
          background: hazeBackground,
        }}
      />
    </div>
  );
}
