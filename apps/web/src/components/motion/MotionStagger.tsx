"use client";

import type { HTMLMotionProps } from "motion/react";
import { motion, useReducedMotion } from "motion/react";

type MotionStaggerProps = HTMLMotionProps<"div"> & {
  stagger?: number;
  delay?: number;
};

export function MotionStagger({
  children,
  stagger = 0.12,
  delay = 0.04,
  ...props
}: MotionStaggerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduceMotion ? 0 : stagger,
            delayChildren: delay,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
