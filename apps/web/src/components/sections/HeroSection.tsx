"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { HeroAtmosphere } from "@/components/effects/HeroAtmosphere";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Button } from "@/components/shared/Button";
import { Section } from "@/components/shared/Section";
import { useLanguage } from "@/context/LanguageContext";
import { brand } from "@/data/brand";
import { hero } from "@/data/hero";

const tickerItems = [
  "OPEN TO WORK",
  "FULL STACK DEVELOPER",
  "BACKEND .NET",
  "C#",
  "REACT",
  "NEXT.JS",
  "BUENOS AIRES",
  "REMOTE",
] as const;

function TickerGroup({
  duplicateKey = "base",
  ariaHidden = false,
}: {
  duplicateKey?: string;
  ariaHidden?: boolean;
}) {
  return (
    <div aria-hidden={ariaHidden} className="hero-ticker-group">
      {tickerItems.map((item) => (
        <span key={`${item}-${duplicateKey}`} className="hero-ticker-unit">
          <span className="hero-ticker-label">{item}</span>
          <span aria-hidden="true" className="hero-ticker-separator">
            {"\u2726"}
          </span>
        </span>
      ))}
    </div>
  );
}

export function HeroSection() {
  const { locale } = useLanguage();
  const reduceMotion = useReducedMotion();
  const secondaryHref =
    typeof hero.secondaryAction.href === "string"
      ? hero.secondaryAction.href
      : hero.secondaryAction.href[locale];

  return (
    <Section
      id="hero"
      wide
      className="relative isolate overflow-hidden border-b border-white/8 pt-24 sm:pt-28"
      containerClassName="pb-0"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-30 bg-[var(--color-bg)]" />
      <HeroAtmosphere />

      <div className="relative z-10 flex min-h-[calc(100svh-6.5rem)] flex-col">
        <div className="flex flex-1 flex-col justify-center">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
            <MotionReveal delay={0.04}>
              <p className="type-accent text-[1.8rem] leading-none text-[var(--color-accent-deep)] sm:text-[2.1rem]">
                {hero.intro[locale]}
              </p>
            </MotionReveal>

            <div className="mt-5 w-full px-4 sm:px-6">
              <div className="mx-auto flex w-fit max-w-full items-center justify-center gap-2 sm:gap-3 lg:gap-0">
                <motion.div
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, x: -18 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: reduceMotion ? 0.2 : 0.72, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="shrink-0"
                >
                  <Image
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    width={360}
                    height={360}
                    priority
                    className="h-24 w-24 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.42)] sm:h-36 sm:w-36 lg:h-[12.5rem] lg:w-[12.5rem]"
                  />
                </motion.div>

                <div className="min-w-0 text-left">
                  <motion.div
                    initial={
                      reduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }
                    }
                    animate={
                      reduceMotion
                        ? { opacity: 1 }
                        : { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }
                    }
                    transition={{ duration: reduceMotion ? 0.2 : 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-visible pl-2 pr-1 sm:pl-3 sm:pr-2 lg:pr-3"
                  >
                    <h1 className="type-heading-display text-[3.55rem] font-semibold uppercase leading-[0.94] tracking-[-0.045em] text-white sm:text-[6rem] lg:text-[8rem]">
                      {hero.firstName}
                    </h1>
                  </motion.div>
                  <motion.div
                    initial={
                      reduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: 32, clipPath: "inset(0 0 100% 0)" }
                    }
                    animate={
                      reduceMotion
                        ? { opacity: 1 }
                        : { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }
                    }
                    transition={{ duration: reduceMotion ? 0.2 : 0.72, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-visible pb-4 pl-2 sm:pb-5 sm:pl-3 lg:pb-6"
                  >
                    <span className="type-accent -mt-1 block text-[3.25rem] leading-[1.08] sm:-mt-3 sm:text-[5.25rem] lg:-mt-4 lg:text-[6.6rem]">
                      Di Napoli
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>

            <MotionReveal delay={0.28}>
              <p className="type-heading-sans mt-7 text-[0.7rem] tracking-[0.42em] text-white sm:text-[0.74rem]">
                {hero.role[locale]}
              </p>
            </MotionReveal>

            <MotionReveal delay={0.36}>
              <p className="type-accent mt-4 max-w-3xl text-center text-[1.35rem] leading-[1.1] sm:text-[1.6rem]">
                {hero.editorialEyebrow[locale]}
              </p>
            </MotionReveal>

            <MotionReveal delay={0.44}>
              <p className="type-body-muted mt-6 max-w-2xl">
                {hero.description[locale]}
              </p>
            </MotionReveal>

            <MotionReveal delay={0.52}>
              <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href={hero.primaryAction.href} className="min-w-[164px]">
                  {hero.primaryAction.label[locale]}
                </Button>
                <Button
                  href={secondaryHref}
                  variant="secondary"
                  target={secondaryHref.startsWith("#") ? undefined : "_blank"}
                  rel={secondaryHref.startsWith("#") ? undefined : "noreferrer"}
                  className="min-w-[148px] border-white/12 bg-transparent"
                >
                  {hero.secondaryAction.label[locale]}
                </Button>
              </div>
            </MotionReveal>
          </div>
        </div>

        <MotionReveal delay={0.6} className="mt-8 sm:mt-10">
          <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-white/8 bg-[rgba(10,10,14,0.26)] shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-[22px]">
            {reduceMotion ? (
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-3 text-center sm:gap-x-5">
                {tickerItems.map((item) => (
                  <span key={item} className="hero-ticker-reduced-item">
                    <span>{item}</span>
                    <span aria-hidden="true" className="hero-ticker-separator">
                      {"\u2726"}
                    </span>
                  </span>
                ))}
              </div>
            ) : (
              <div className="hero-ticker-viewport">
                <div className="hero-ticker-track">
                  <TickerGroup />
                  <TickerGroup duplicateKey="copy-a" ariaHidden />
                  <TickerGroup duplicateKey="copy-b" ariaHidden />
                </div>
              </div>
            )}
          </div>
        </MotionReveal>
      </div>
    </Section>
  );
}
