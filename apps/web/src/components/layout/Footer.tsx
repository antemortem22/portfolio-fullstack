"use client";

import { MotionReveal } from "@/components/motion/MotionReveal";
import { useLanguage } from "@/context/LanguageContext";
import { brand } from "@/data/brand";

function SocialIcon({ label }: { label: string }) {
  if (label.toLowerCase() === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.38 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.05-.01-1.9-2.78.62-3.36-1.22-3.36-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.37 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.81-4.58 5.06.36.32.69.95.69 1.92 0 1.38-.01 2.5-.01 2.84 0 .28.18.61.69.5A10.27 10.27 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55C7.14 3.9 6.37 3 5.26 3S3.38 3.9 3.38 4.95c0 1.03.75 1.94 1.84 1.94h.02c1.12 0 1.92-.9 1.92-1.94ZM20.62 13.14c0-3.46-1.8-5.07-4.22-5.07-1.94 0-2.81 1.1-3.29 1.87V8.5H9.74c.04.95 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.67.12-.91.27-.68.87-1.38 1.88-1.38 1.33 0 1.87 1.04 1.87 2.58V20H20.62v-6.86Z" />
    </svg>
  );
}

export function Footer() {
  const { locale } = useLanguage();

  return (
    <footer className="relative isolate overflow-hidden bg-[rgba(8,7,10,0.62)] backdrop-blur-[6px]">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,7,10,0.38)_0%,rgba(8,7,10,0.72)_100%)]" />

      <div className="w-full px-4 sm:px-8 lg:px-14">
        <MotionReveal className="flex min-h-[72px] flex-col gap-4 py-5 text-[0.9rem] text-[var(--color-copy)] sm:min-h-[76px] sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-sm leading-snug text-[var(--color-copy)]">
            &copy; 2026 AGOS. {brand.footerRights[locale]}
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#hero"
              className="inline-flex items-center px-1 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-copy)] transition hover:text-[var(--color-foreground)]"
            >
              Back to top
            </a>

            {brand.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="inline-flex h-8 w-8 items-center justify-center text-[var(--color-copy)] transition hover:text-[var(--color-foreground)]"
              >
                <SocialIcon label={link.label} />
              </a>
            ))}
          </div>
        </MotionReveal>
      </div>
    </footer>
  );
}
