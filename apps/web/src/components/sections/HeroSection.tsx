import Image from "next/image";
import { brand } from "@/data/brand";
import { hero } from "@/data/hero";

export function HeroSection() {
  return (
    <section className="site-container grid min-h-[calc(100svh-73px)] items-center gap-10 py-16 sm:py-20 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)] md:gap-12 lg:min-h-[680px] lg:py-24 xl:gap-16">
      <div className="max-w-3xl">
        <p className="font-subtitle text-xl italic text-primary-light">{hero.eyebrow.es}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-5">
          <Image
            src={brand.logo}
            alt="Logo AGOS"
            width={96}
            height={96}
            className="h-14 w-14 object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.72)] sm:h-20 sm:w-20 lg:h-24 lg:w-24"
            priority
          />
          <h1 className="font-title text-5xl font-semibold tracking-wide text-white sm:text-7xl lg:text-8xl">
            {hero.title}
          </h1>
        </div>
        <h2 className="mt-7 max-w-2xl font-subtitle text-3xl leading-tight text-zinc-100 sm:text-4xl lg:mt-8">
          {hero.tagline.es}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">{hero.description.es}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-9">
          <a href={hero.primaryAction.href} className="btn-primary">
            {hero.primaryAction.label}
          </a>
          <a href={hero.secondaryAction.href} className="btn-secondary">
            {hero.secondaryAction.label}
          </a>
        </div>
      </div>

      <div className="relative min-h-[330px] overflow-hidden rounded-md border border-primary/50 bg-black/50 shadow-[0_0_55px_rgba(85,56,131,0.32)] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[480px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_35%,rgba(124,81,192,0.32),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.06),transparent_45%)]" />
        <Image
          src={brand.logo}
          alt=""
          width={380}
          height={380}
          className="absolute left-1/2 top-[44%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 object-contain opacity-85 drop-shadow-[0_18px_26px_rgba(0,0,0,0.78)] sm:h-72 sm:w-72 lg:h-80 lg:w-80"
        />
      </div>
    </section>
  );
}
