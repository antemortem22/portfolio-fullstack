"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { useLanguage } from "@/context/LanguageContext";

function AboutLinkIcon({ icon }: { icon: string }) {
  if (icon === "github") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.51.47-3.16-.63-3.36-1.2-.11-.29-.6-1.2-1.03-1.44-.35-.2-.85-.69-.01-.7.79-.01 1.35.74 1.54 1.04.9 1.55 2.34 1.11 2.91.85.09-.67.35-1.11.64-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.11.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.95c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.05.36.32.68.94.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.18 10.18 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (icon === "linkedin") {
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
  const { locale } = useLanguage();

  return (
    <section id="about" className="section-shell">
      <div className="section-heading">
        <p>{profile.eyebrow[locale]}</p>
        <h2>{profile.title[locale]}</h2>
      </div>

      <div className="mt-7 grid items-center gap-7 sm:mt-10 sm:gap-8 md:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <div className="relative pb-6 pr-3 sm:pb-8 sm:pr-5">
          <div className="relative overflow-hidden rounded-[12px] border-2 border-primary-light shadow-[0_0_30px_rgba(124,81,192,0.48),0_0_76px_rgba(85,56,131,0.3)]">
            <Image
              src={profile.image}
              alt={profile.imageAlt[locale]}
              width={980}
              height={720}
              className="h-[320px] w-full object-cover object-[center_12%] sm:h-[420px] sm:object-[center_14%] lg:h-[390px] lg:object-[center_18%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/12" />
          </div>

          <div className="absolute bottom-0 right-0 rounded-[12px] border-2 border-primary-light bg-[#0B0B0F] px-5 py-3.5 text-center shadow-[0_0_24px_rgba(124,81,192,0.42)]">
            <p className="font-subtitle text-xl italic leading-[0.95] text-primary-light sm:text-2xl">
              Full Stack
              <br />
              Developer
            </p>
          </div>
        </div>

        <div>
          <div className="space-y-3 text-sm leading-6 text-zinc-400 sm:space-y-4 sm:leading-7">
            {profile.paragraphs[locale].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-3">
            {profile.links.map((link) => {
                const href = typeof link.href === "string" ? link.href : link.href[locale];
                const opensInNewTab =
                  link.icon === "download" || href.startsWith("http://") || href.startsWith("https://");

                return (
              <a
                key={link.icon}
                href={href}
                target={opensInNewTab ? "_blank" : undefined}
                rel={opensInNewTab ? "noreferrer" : undefined}
                className={
                  link.variant === "primary"
                    ? "inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-md bg-primary px-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(85,56,131,0.45)] transition hover:bg-primary-light"
                    : "inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-md border border-primary-light bg-[#0B0B0F] px-3 text-sm font-semibold text-primary-light transition hover:text-white hover:shadow-[0_0_16px_rgba(124,81,192,0.32)]"
                }
              >
                <AboutLinkIcon icon={link.icon} />
                {link.label[locale]}
              </a>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
