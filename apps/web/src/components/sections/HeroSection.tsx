"use client";

import Image from "next/image";
import { brand } from "@/data/brand";
import { hero } from "@/data/hero";
import { TiltCard } from "@/components/ui/TiltCard";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { locale } = useLanguage();

  return (
    <section className="site-container grid min-h-[100svh] items-center gap-6 py-10 sm:gap-8 sm:py-16 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)] md:gap-10 lg:py-18 xl:gap-12">
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
        className="relative min-h-[240px] overflow-hidden rounded-[12px] border-2 border-primary-light/70 bg-black/50 shadow-[0_0_34px_rgba(124,81,192,0.38),0_0_70px_rgba(85,56,131,0.28)] sm:min-h-[340px] md:min-h-[380px] lg:min-h-[420px]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_35%,rgba(124,81,192,0.32),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.06),transparent_45%)]" />
        <Image
          src={brand.logo}
          alt=""
          width={380}
          height={380}
          className="absolute left-1/2 top-[44%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 object-contain opacity-85 drop-shadow-[0_18px_26px_rgba(0,0,0,0.78)] sm:h-72 sm:w-72 lg:h-80 lg:w-80"
        />
      </TiltCard>
    </section>
  );
}
