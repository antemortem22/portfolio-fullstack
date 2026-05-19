"use client";

import Image from "next/image";
import { brand } from "@/data/brand";
import { hero } from "@/data/hero";
import { TiltCard } from "@/components/ui/TiltCard";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { locale } = useLanguage();

  return (
    <section
      id="hero"
      className="site-container grid min-h-[100svh] items-center gap-6 py-10 sm:gap-8 sm:py-16 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)] md:gap-10 lg:py-18 xl:gap-12"
    >
      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          <Image
            src={brand.logo}
            alt="Logo AGOS"
            width={96}
            height={96}
            className="h-12 w-12 object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.72)] sm:h-20 sm:w-20 lg:h-24 lg:w-24"
            loading="eager"
          />
          <h1 className="title-underline hero-title-underline font-title text-4xl font-bold tracking-wide text-white sm:text-7xl lg:text-8xl">
            {hero.title}
          </h1>
        </div>
        <h2 className="mt-4 max-w-2xl font-subtitle text-xl italic leading-tight text-primary-light sm:text-2xl lg:mt-6">
          {hero.tagline[locale]}
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
          {hero.description[locale]}
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row lg:mt-7">
          <a href={hero.primaryAction.href} className="btn-primary">
            {hero.primaryAction.label[locale]}
          </a>
          <a href={hero.secondaryAction.href} className="btn-secondary">
            {hero.secondaryAction.label[locale]}
          </a>
        </div>
      </div>

      <TiltCard
        intensity={7}
        className="relative min-h-[340px] overflow-hidden rounded-[12px] border-2 border-primary-light/75 bg-[linear-gradient(180deg,rgba(10,10,14,0.84)_0%,rgba(5,5,8,0.76)_100%)] shadow-[0_0_36px_rgba(124,81,192,0.44),0_0_92px_rgba(85,56,131,0.34),inset_0_1px_0_rgba(255,255,255,0.08)] sm:min-h-[420px] md:min-h-[380px] lg:min-h-[420px]"
      >
        <Image
          src={hero.image}
          alt={hero.imageAlt[locale]}
          fill
          sizes="(max-width: 767px) 100vw, 42vw"
          className="object-cover object-[center_12%] sm:object-[center_14%] md:object-[center_20%] lg:object-[center_18%]"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_18%,rgba(4,4,6,0.14)_48%,rgba(4,4,6,0.34)_100%),radial-gradient(circle_at_50%_0%,rgba(124,81,192,0.2),transparent_48%)]" />
      </TiltCard>
    </section>
  );
}
