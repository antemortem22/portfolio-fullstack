import Image from "next/image";
import { profile } from "@/data/profile";

function AboutLinkIcon({ label }: { label: string }) {
  if (label === "GitHub") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.51.47-3.16-.63-3.36-1.2-.11-.29-.6-1.2-1.03-1.44-.35-.2-.85-.69-.01-.7.79-.01 1.35.74 1.54 1.04.9 1.55 2.34 1.11 2.91.85.09-.67.35-1.11.64-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.11.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.95c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.05.36.32.68.94.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.18 10.18 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-4 w-4 items-center justify-center rounded-[1px] bg-current"
      >
        <span className="font-sans text-[10px] font-black leading-none text-[#0B0B0F]">in</span>
      </span>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M13 4h-2v8.17L7.41 8.59 6 10l6 6 6-6-1.41-1.41L13 12.17V4Zm-7 14v2h12v-2H6Z" />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="section-heading">
        <p>Profile</p>
        <h2>{profile.title.es}</h2>
      </div>
      <div className="mt-10 grid items-center gap-8 sm:mt-12 md:grid-cols-[0.95fr_1fr] lg:gap-12">
        <div className="relative overflow-hidden rounded-[12px] border-2 border-primary-light/70 shadow-[0_0_34px_rgba(124,81,192,0.38),0_0_70px_rgba(85,56,131,0.28)]">
          <Image
            src={profile.image}
            alt="Textura visual del portfolio"
            width={900}
            height={620}
            className="h-[300px] w-full object-cover opacity-70 sm:h-[360px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-5 right-5 border border-primary/60 bg-black/80 px-4 py-3 text-right">
            <p className="font-title text-3xl text-white">2+</p>
            <p className="text-xs text-zinc-400">años explorando</p>
          </div>
        </div>
        <div>
          <div className="space-y-5 text-base leading-8 text-zinc-400">
            {profile.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.label === "Descargar CV"
                    ? "inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-md bg-primary px-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(85,56,131,0.45)] transition hover:bg-primary-light"
                    : "inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-md border border-primary-light bg-[#0B0B0F] px-3 text-sm font-semibold text-primary-light transition hover:text-white hover:shadow-[0_0_16px_rgba(124,81,192,0.32)]"
                }
              >
                <AboutLinkIcon label={link.label} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
