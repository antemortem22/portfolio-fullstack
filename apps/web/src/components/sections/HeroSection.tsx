import Image from "next/image";
import { brand } from "@/data/brand";
import { hero } from "@/data/hero";

export function HeroSection() {
  return (
    <section className="mx-auto grid min-h-[680px] max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1fr_0.85fr] md:py-28">
      <div>
        <p className="font-subtitle text-xl italic text-primary-light">{hero.eyebrow.es}</p>
        <div className="mt-6 flex items-center gap-5">
          <Image
            src={brand.logo}
            alt="Logo AGOS"
            width={96}
            height={96}
            className="h-20 w-20 object-contain drop-shadow-[0_0_35px_rgba(124,81,192,0.8)] sm:h-24 sm:w-24"
            priority
          />
          <h1 className="font-title text-6xl font-semibold tracking-wide text-white sm:text-7xl md:text-8xl">
            {hero.title}
          </h1>
        </div>
        <h2 className="mt-8 max-w-2xl font-subtitle text-3xl leading-tight text-zinc-100 sm:text-4xl">
          {hero.tagline.es}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">{hero.description.es}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href={hero.primaryAction.href} className="btn-primary">
            {hero.primaryAction.label}
          </a>
          <a href={hero.secondaryAction.href} className="btn-secondary">
            {hero.secondaryAction.label}
          </a>
        </div>
      </div>

      <div className="relative min-h-[360px] overflow-hidden rounded-md border border-primary/50 bg-black/50 shadow-[0_0_55px_rgba(85,56,131,0.32)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_35%,rgba(124,81,192,0.32),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.06),transparent_45%)]" />
        <Image
          src={brand.logo}
          alt=""
          width={380}
          height={380}
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 object-contain opacity-85 drop-shadow-[0_0_58px_rgba(124,81,192,0.9)] sm:h-80 sm:w-80"
        />
        <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="border border-white/10 bg-black/55 p-4 backdrop-blur">
              <p className="font-title text-2xl text-white">{stat.value}</p>
              <p className="mt-1 text-xs leading-5 text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
