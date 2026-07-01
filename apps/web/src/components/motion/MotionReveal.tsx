"use client";

import type { HTMLMotionProps } from "motion/react";
import { motion, useReducedMotion } from "motion/react";

type MotionRevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  distance?: number;
};

export function MotionReveal({
  children,
  delay = 0,
  distance = 42,
  transition,
  ...props
}: MotionRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: distance, scale: 0.985, filter: "blur(8px)" }
      }
      whileInView={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.82,
        delay,
        ease: [0.16, 1, 0.3, 1],
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
