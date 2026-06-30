"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type MotionTextRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "span" | "div";
};

export function MotionTextReveal({
  children,
  delay = 0,
  className = "",
  as = "span",
}: MotionTextRevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = as === "div" ? motion.div : motion.span;
  const Wrapper = as === "div" ? "div" : "span";

  return (
    <Wrapper className={`block overflow-hidden ${className}`.trim()}>
      <Component
        initial={
          reduceMotion
            ? { opacity: 0 }
            : { opacity: 0, y: "110%", clipPath: "inset(0 0 100% 0)" }
        }
        whileInView={
          reduceMotion
            ? { opacity: 1 }
            : { opacity: 1, y: "0%", clipPath: "inset(0 0 0% 0)" }
        }
        viewport={{ once: true, amount: 0.7 }}
        transition={{
          duration: reduceMotion ? 0.2 : 0.72,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="block"
      >
        {children}
      </Component>
    </Wrapper>
  );
}
