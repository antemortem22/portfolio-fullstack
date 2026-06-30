"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useRef, useSyncExternalStore } from "react";

const POINTER_QUERY = "(pointer: fine) and (hover: hover)";

type DustMote = {
  left: number;
  top: number;
  size: number;
  opacity: number;
  blur: number;
  duration: number;
  delay: number;
  driftY: number;
  driftX: number;
  color: string;
};

type Sparkle = {
  left: number;
  top: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
  color: string;
  blur: number;
  kind: "dot" | "cross";
};

const dustMotes: DustMote[] = [
  { left: 7, top: 14, size: 3, opacity: 0.24, blur: 0, duration: 16, delay: 0.4, driftY: -40, driftX: 3, color: "rgba(118,88,156,0.94)" },
  { left: 10, top: 23, size: 4, opacity: 0.28, blur: 1, duration: 13, delay: 1.2, driftY: -52, driftX: -2, color: "rgba(162,124,206,0.94)" },
  { left: 14, top: 34, size: 7, opacity: 0.25, blur: 5, duration: 19, delay: 2.6, driftY: -68, driftX: 2, color: "rgba(88,63,118,0.9)" },
  { left: 18, top: 18, size: 3, opacity: 0.22, blur: 0.2, duration: 14, delay: 0.7, driftY: -42, driftX: -1, color: "rgba(137,101,181,0.92)" },
  { left: 22, top: 29, size: 5, opacity: 0.33, blur: 1.8, duration: 12, delay: 1.8, driftY: -46, driftX: 3, color: "rgba(183,144,224,0.96)" },
  { left: 27, top: 15, size: 8, opacity: 0.24, blur: 6.2, duration: 21, delay: 0.9, driftY: -72, driftX: 2, color: "rgba(96,70,128,0.9)" },
  { left: 31, top: 40, size: 4, opacity: 0.27, blur: 0.8, duration: 15, delay: 2.1, driftY: -38, driftX: -3, color: "rgba(169,130,212,0.94)" },
  { left: 35, top: 22, size: 3, opacity: 0.23, blur: 0, duration: 18, delay: 0.5, driftY: -45, driftX: 2, color: "rgba(122,91,161,0.9)" },
  { left: 39, top: 31, size: 6, opacity: 0.36, blur: 1.4, duration: 11, delay: 1.5, driftY: -43, driftX: -2, color: "rgba(190,152,230,0.96)" },
  { left: 43, top: 17, size: 9, opacity: 0.26, blur: 6.6, duration: 20, delay: 2.9, driftY: -74, driftX: 3, color: "rgba(82,60,110,0.88)" },
  { left: 47, top: 44, size: 4, opacity: 0.3, blur: 1, duration: 12, delay: 0.2, driftY: -40, driftX: -3, color: "rgba(176,138,219,0.94)" },
  { left: 52, top: 14, size: 3, opacity: 0.24, blur: 0, duration: 17, delay: 2.2, driftY: -50, driftX: 2, color: "rgba(131,97,172,0.9)" },
  { left: 55, top: 26, size: 6, opacity: 0.28, blur: 3.4, duration: 19, delay: 1.1, driftY: -61, driftX: 2, color: "rgba(101,74,133,0.9)" },
  { left: 58, top: 35, size: 4, opacity: 0.38, blur: 0.8, duration: 10.5, delay: 1.6, driftY: -37, driftX: -2, color: "rgba(184,145,225,0.96)" },
  { left: 62, top: 21, size: 3, opacity: 0.24, blur: 0.2, duration: 16, delay: 0.8, driftY: -44, driftX: 2, color: "rgba(122,90,160,0.9)" },
  { left: 65, top: 31, size: 8, opacity: 0.28, blur: 6.9, duration: 21.5, delay: 2.4, driftY: -75, driftX: -2, color: "rgba(86,61,115,0.88)" },
  { left: 69, top: 16, size: 5, opacity: 0.34, blur: 1.6, duration: 13, delay: 2.3, driftY: -41, driftX: -2, color: "rgba(188,149,228,0.94)" },
  { left: 73, top: 26, size: 3, opacity: 0.23, blur: 0, duration: 17, delay: 1.3, driftY: -48, driftX: 1, color: "rgba(142,106,185,0.9)" },
  { left: 77, top: 40, size: 7, opacity: 0.26, blur: 5.2, duration: 20, delay: 0.9, driftY: -64, driftX: -2, color: "rgba(95,70,126,0.88)" },
  { left: 81, top: 18, size: 4, opacity: 0.3, blur: 1, duration: 14, delay: 0.6, driftY: -39, driftX: 2, color: "rgba(177,138,220,0.94)" },
  { left: 85, top: 30, size: 3, opacity: 0.25, blur: 0.2, duration: 18, delay: 1.7, driftY: -51, driftX: -1, color: "rgba(130,95,171,0.9)" },
  { left: 90, top: 43, size: 10, opacity: 0.24, blur: 7, duration: 22, delay: 2.1, driftY: -73, driftX: -2, color: "rgba(83,59,111,0.88)" },
  { left: 13, top: 54, size: 4, opacity: 0.31, blur: 1.2, duration: 15, delay: 2.5, driftY: -36, driftX: 2, color: "rgba(181,141,222,0.92)" },
  { left: 24, top: 57, size: 3, opacity: 0.24, blur: 0, duration: 17, delay: 1.9, driftY: -47, driftX: 1, color: "rgba(127,95,168,0.9)" },
  { left: 53, top: 56, size: 5, opacity: 0.33, blur: 2, duration: 14, delay: 0.5, driftY: -42, driftX: -1, color: "rgba(171,132,215,0.94)" },
  { left: 67, top: 58, size: 4, opacity: 0.28, blur: 0.8, duration: 16, delay: 1.4, driftY: -39, driftX: 2, color: "rgba(154,117,202,0.92)" },
  { left: 29, top: 13, size: 6, opacity: 0.24, blur: 4.2, duration: 20, delay: 0.3, driftY: -70, driftX: 2, color: "rgba(90,66,121,0.9)" },
  { left: 46, top: 11, size: 4, opacity: 0.27, blur: 0.6, duration: 15, delay: 1.1, driftY: -45, driftX: -1, color: "rgba(166,128,210,0.94)" },
  { left: 60, top: 13, size: 5, opacity: 0.3, blur: 1.6, duration: 13, delay: 2.3, driftY: -49, driftX: 2, color: "rgba(176,138,219,0.94)" },
  { left: 75, top: 12, size: 6, opacity: 0.25, blur: 4.6, duration: 21, delay: 0.8, driftY: -72, driftX: -2, color: "rgba(92,67,123,0.9)" },
  { left: 39, top: 49, size: 4, opacity: 0.29, blur: 1.1, duration: 12.5, delay: 1.6, driftY: -40, driftX: 2, color: "rgba(179,141,222,0.94)" },
  { left: 71, top: 47, size: 5, opacity: 0.32, blur: 2.2, duration: 14.5, delay: 2.7, driftY: -43, driftX: -1, color: "rgba(164,126,208,0.94)" },
];

const sparkles: Sparkle[] = [
  { left: 12, top: 18, size: 3, opacity: 0.34, delay: 0.6, duration: 7.8, color: "rgba(179,141,221,0.78)", blur: 0, kind: "dot" },
  { left: 21, top: 12, size: 5, opacity: 0.3, delay: 1.8, duration: 9.4, color: "rgba(193,158,232,0.72)", blur: 0.2, kind: "cross" },
  { left: 31, top: 26, size: 4, opacity: 0.28, delay: 0.2, duration: 8.6, color: "rgba(159,123,206,0.72)", blur: 0, kind: "dot" },
  { left: 43, top: 16, size: 3, opacity: 0.26, delay: 2.1, duration: 10.2, color: "rgba(213,205,221,0.62)", blur: 0.1, kind: "dot" },
  { left: 52, top: 24, size: 6, opacity: 0.3, delay: 1.1, duration: 8.8, color: "rgba(177,139,221,0.7)", blur: 0.3, kind: "cross" },
  { left: 61, top: 14, size: 3, opacity: 0.29, delay: 0.9, duration: 7.4, color: "rgba(163,126,208,0.74)", blur: 0, kind: "dot" },
  { left: 69, top: 29, size: 4, opacity: 0.27, delay: 1.5, duration: 9.1, color: "rgba(201,191,214,0.58)", blur: 0.2, kind: "dot" },
  { left: 77, top: 18, size: 5, opacity: 0.31, delay: 0.4, duration: 8.1, color: "rgba(173,136,218,0.72)", blur: 0.2, kind: "cross" },
  { left: 84, top: 33, size: 3, opacity: 0.25, delay: 2.3, duration: 9.8, color: "rgba(151,117,198,0.72)", blur: 0, kind: "dot" },
  { left: 17, top: 44, size: 4, opacity: 0.28, delay: 1.2, duration: 8.7, color: "rgba(183,145,226,0.68)", blur: 0.1, kind: "dot" },
];

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

  return !prefersReducedMotion && canUsePrecisePointer;
}

export function HeroAtmosphere() {
  const prefersReducedMotion = useReducedMotion();
  const precisePointerEnabled = usePrecisePointerEnabled();
  const areaRef = useRef<HTMLDivElement | null>(null);
  const pointerOffsetRef = useRef({ x: 0, y: 0 });
  const scrollOffsetRef = useRef(0);

  const wallpaperX = useMotionValue(0);
  const wallpaperY = useMotionValue(0);

  const wallpaperSpringX = useSpring(wallpaperX, { stiffness: 48, damping: 18, mass: 1.1 });
  const wallpaperSpringY = useSpring(wallpaperY, { stiffness: 48, damping: 18, mass: 1.1 });
  const wallpaperTravel = 11;
  const wallpaperScrollTravel = 7;

  useEffect(() => {
    if (!precisePointerEnabled) {
      wallpaperX.set(0);
      wallpaperY.set(0);
      return;
    }

    const applyOffsets = () => {
      wallpaperX.set(pointerOffsetRef.current.x * wallpaperTravel);
      wallpaperY.set(pointerOffsetRef.current.y * wallpaperTravel * 0.72 + scrollOffsetRef.current);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const area = areaRef.current;

      if (!area) {
        return;
      }

      const rect = area.getBoundingClientRect();
      const isInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!isInside) {
        pointerOffsetRef.current = { x: 0, y: 0 };
        applyOffsets();
        return;
      }

      const normalizedX = (event.clientX - rect.left) / rect.width - 0.5;
      const normalizedY = (event.clientY - rect.top) / rect.height - 0.5;

      pointerOffsetRef.current = {
        x: normalizedX,
        y: normalizedY,
      };

      applyOffsets();
    };

    const handlePointerLeave = () => {
      pointerOffsetRef.current = { x: 0, y: 0 };
      applyOffsets();
    };

    const handleScroll = () => {
      const area = areaRef.current;

      if (!area) {
        return;
      }

      const rect = area.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1);

      scrollOffsetRef.current = progress * wallpaperScrollTravel;
      applyOffsets();
    };

    handleScroll();
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [precisePointerEnabled, wallpaperScrollTravel, wallpaperTravel, wallpaperX, wallpaperY]);

  return (
    <div ref={areaRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 bg-[url('/portfolio-background.png')] bg-repeat opacity-[0.19]"
        style={{
          x: precisePointerEnabled ? wallpaperSpringX : 0,
          y: precisePointerEnabled ? wallpaperSpringY : 0,
          backgroundPosition: "center top",
          backgroundSize: "792px",
        }}
      />

      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(8,7,10,0.22)_0%,rgba(8,7,10,0.42)_44%,rgba(8,7,10,0.9)_100%)]" />

      <div className="absolute inset-0 z-20">
        {dustMotes.map((mote, index) => (
          <motion.span
            key={`${mote.left}-${mote.top}-${index}`}
            className="absolute rounded-full"
            style={{
              left: `${mote.left}%`,
              top: `${mote.top}%`,
              width: `${mote.size}px`,
              height: `${mote.size}px`,
              backgroundColor: mote.color,
              opacity: prefersReducedMotion ? Math.min(mote.opacity, 0.24) : Math.min(mote.opacity, 0.46),
              filter: `blur(${mote.blur}px)`,
            }}
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    y: [0, mote.driftY, mote.driftY * 0.45, 0],
                    x: [0, mote.driftX, mote.driftX * -0.5, 0],
                    opacity: [
                      mote.opacity * 0.96,
                      Math.min(mote.opacity + 0.08, 0.46),
                      mote.opacity * 0.88,
                      mote.opacity,
                    ],
                  }
            }
            transition={{
              duration: mote.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: mote.delay,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-30">
        {sparkles.map((sparkle, index) => (
          <motion.span
            key={`${sparkle.left}-${sparkle.top}-${index}`}
            className="absolute block"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              opacity: prefersReducedMotion ? sparkle.opacity * 0.9 : sparkle.opacity,
              filter: `blur(${sparkle.blur}px)`,
            }}
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: [sparkle.opacity * 0.72, sparkle.opacity, sparkle.opacity * 0.78, sparkle.opacity * 0.9],
                    scale: [1, 1.06, 0.98, 1],
                  }
            }
            transition={{
              duration: sparkle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: sparkle.delay,
            }}
          >
            {sparkle.kind === "cross" ? (
              <span className="relative block h-full w-full">
                <span
                  className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
                  style={{ backgroundColor: sparkle.color }}
                />
                <span
                  className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2"
                  style={{ backgroundColor: sparkle.color }}
                />
              </span>
            ) : (
              <span
                className="block h-full w-full rounded-full"
                style={{ backgroundColor: sparkle.color }}
              />
            )}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
