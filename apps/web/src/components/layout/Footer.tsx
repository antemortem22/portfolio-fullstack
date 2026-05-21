"use client";

import { ExternalLink } from "@/components/ui/ExternalLink";
import { useLanguage } from "@/context/LanguageContext";
import { brand } from "@/data/brand";
import type { SocialPlatform } from "@/types/content";

function SocialIcon({ label }: { label: SocialPlatform }) {
  if (label === "GitHub") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.51.47-3.16-.63-3.36-1.2-.11-.29-.6-1.2-1.03-1.44-.35-.2-.85-.69-.01-.7.79-.01 1.35.74 1.54 1.04.9 1.55 2.34 1.11 2.91.85.09-.67.35-1.11.64-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.11.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.95c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.05.36.32.68.94.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.18 10.18 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
      </svg>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="inline-flex h-4 w-4 items-center justify-center rounded-[1px] bg-current"
    >
      <span className="font-sans text-[10px] font-black leading-none text-background">in</span>
    </span>
  );
}

export function Footer() {
  const { locale } = useLanguage();

  return (
    <footer className="flex w-full flex-col gap-4 px-4 py-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <p>
        © 2026 {brand.name}. {brand.footerRights[locale]}
      </p>
      <div className="flex gap-4">
        {brand.socialLinks.map((link) => (
          <ExternalLink
            key={link.label}
            href={link.href}
            aria-label={link.label}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition hover:text-primary-light"
          >
            <SocialIcon label={link.label} />
          </ExternalLink>
        ))}
      </div>
    </footer>
  );
}
