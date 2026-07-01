"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { HeroAtmosphere } from "@/components/effects/HeroAtmosphere";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Button } from "@/components/shared/Button";
import { Section } from "@/components/shared/Section";
import { useLanguage } from "@/context/LanguageContext";
import { brand } from "@/data/brand";
import { hero, heroTickerItems } from "@/data/hero";

function TickerGroup({
  duplicateKey = "base",
  ariaHidden = false,
}: {
  duplicateKey?: string;
  ariaHidden?: boolean;
}) {
  return (
    <div aria-hidden={ariaHidden} className="hero-ticker-group">
      {heroTickerItems.map((item) => (
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
  const [typedIndex, setTypedIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const secondaryHref =
    typeof hero.secondaryAction.href === "string"
      ? hero.secondaryAction.href
      : hero.secondaryAction.href[locale];

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const currentText = heroTickerItems[typedIndex] ?? "";
    const isComplete = typedText === currentText;
    const isEmpty = typedText.length === 0;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          if (!isComplete) {
            setTypedText(currentText.slice(0, typedText.length + 1));
            return;
          }

          setIsDeleting(true);
          return;
        }

        if (!isEmpty) {
          setTypedText(currentText.slice(0, typedText.length - 1));
          return;
        }

        setIsDeleting(false);
        setTypedIndex((current) => (current + 1) % heroTickerItems.length);
      },
      !isDeleting ? (isComplete ? 1100 : 82) : isEmpty ? 180 : 46,
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, reduceMotion, typedIndex, typedText]);

  return (
    <Section
      id="hero"
      wide
      className="relative isolate overflow-hidden border-b border-white/8 pt-20 sm:pt-24 lg:pt-28"
      containerClassName="pb-0"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-30 bg-[var(--color-bg)]" />
      <HeroAtmosphere />

      <div className="relative z-10 flex min-h-[calc(100svh-5.5rem)] flex-col sm:min-h-[calc(100svh-6.5rem)]">
        <div className="flex flex-1 flex-col justify-center">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
            <MotionReveal delay={0.04}>
              <p className="type-accent px-2 text-[1.45rem] leading-none text-[var(--color-accent-deep)] sm:text-[1.85rem] lg:text-[2.1rem]">
                {hero.intro[locale]}
              </p>
            </MotionReveal>

            <div className="mt-5 w-full px-1 sm:px-4 lg:px-6">
              <div className="mx-auto flex w-fit max-w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3 lg:gap-0">
                <motion.div
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28, x: -30, scale: 0.94, filter: "blur(10px)" }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: reduceMotion ? 0.2 : 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="shrink-0"
                >
                  <Image
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    width={360}
                    height={360}
                    priority
                    className="h-20 w-20 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.42)] sm:h-28 sm:w-28 lg:h-[12.5rem] lg:w-[12.5rem]"
                  />
                </motion.div>

                <div className="min-w-0 text-center sm:text-left">
                  <motion.div
                    initial={
                      reduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: 56, clipPath: "inset(0 0 100% 0)", filter: "blur(12px)" }
                    }
                    animate={
                      reduceMotion
                        ? { opacity: 1 }
                        : { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", filter: "blur(0px)" }
                    }
                    transition={{ duration: reduceMotion ? 0.2 : 0.96, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-visible px-2 sm:pl-3 sm:pr-2 lg:pr-3"
                  >
                    <h1 className="type-heading-display text-[2.95rem] font-semibold uppercase leading-[0.92] tracking-[-0.045em] text-white sm:text-[5rem] lg:text-[8rem]">
                      {hero.firstName}
                    </h1>
                  </motion.div>
                  <motion.div
                    initial={
                      reduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: 42, clipPath: "inset(0 0 100% 0)", filter: "blur(10px)" }
                    }
                    animate={
                      reduceMotion
                        ? { opacity: 1 }
                        : { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", filter: "blur(0px)" }
                    }
                    transition={{ duration: reduceMotion ? 0.2 : 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-visible px-2 pb-3 sm:pb-5 sm:pl-3 sm:pr-2 lg:pb-6"
                  >
                    <span className="type-accent block text-[2.55rem] leading-[1.02] sm:-mt-3 sm:text-[4.35rem] lg:-mt-4 lg:text-[6.6rem]">
                      Di Napoli
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>

            <MotionReveal delay={0.28}>
              <p className="type-heading-sans mt-6 flex min-h-[1.25rem] items-center justify-center gap-2 px-2 text-[0.62rem] tracking-[0.34em] text-white sm:mt-7 sm:min-h-[1.4rem] sm:text-[0.7rem] sm:tracking-[0.42em]">
                <span aria-hidden="true" className="text-[var(--color-accent)]">
                  ›
                </span>
                <span>{reduceMotion ? hero.role[locale] : typedText}</span>
                <span
                  aria-hidden="true"
                  className="inline-block h-[0.78rem] w-px bg-[var(--color-accent-soft)] animate-pulse"
                />
              </p>
            </MotionReveal>

            <MotionReveal delay={0.36}>
              <p className="type-accent mt-4 max-w-3xl px-4 text-center text-[1.12rem] leading-[1.12] sm:text-[1.38rem] lg:text-[1.6rem]">
                {hero.editorialEyebrow[locale]}
              </p>
            </MotionReveal>

            <MotionReveal delay={0.44}>
              <p className="type-body-muted mt-6 max-w-2xl px-4 text-[0.8rem] leading-[1.52] sm:px-0 sm:text-[0.986rem]">
                {hero.description[locale]}
              </p>
            </MotionReveal>

            <MotionReveal delay={0.52}>
              <div className="mt-9 flex w-full max-w-md flex-col items-stretch justify-center gap-3 px-4 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:px-0">
                <Button href={hero.primaryAction.href} className="w-full sm:min-w-[164px] sm:w-auto">
                  {hero.primaryAction.label[locale]}
                </Button>
                <Button
                  href={secondaryHref}
                  variant="secondary"
                  target={secondaryHref.startsWith("#") ? undefined : "_blank"}
                  rel={secondaryHref.startsWith("#") ? undefined : "noreferrer"}
                  className="w-full border-white/12 bg-transparent sm:min-w-[148px] sm:w-auto"
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
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-3 text-center sm:gap-x-5">
                {heroTickerItems.map((item) => (
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
