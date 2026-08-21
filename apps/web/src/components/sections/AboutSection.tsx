"use client";

import Image from "next/image";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { Button } from "@/components/shared/Button";
import { Divider } from "@/components/shared/Divider";
import { FloralBackground } from "@/components/shared/FloralBackground";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { profile } from "@/data/profile";
import type { Locale, ProfileLink } from "@/types/content";

function resolveProfileLinkHref(link: ProfileLink, locale: Locale) {
  return typeof link.href === "string" ? link.href : link.href[locale];
}

function shouldOpenInNewTab(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.endsWith(".pdf");
}

function SocialIcon({ icon }: { icon: ProfileLink["icon"] }) {
  if (icon === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.38 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.05-.01-1.9-2.78.62-3.36-1.22-3.36-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.37 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.81-4.58 5.06.36.32.69.95.69 1.92 0 1.38-.01 2.5-.01 2.84 0 .28.18.61.69.5A10.27 10.27 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55C7.14 3.9 6.37 3 5.26 3S3.38 3.9 3.38 4.95c0 1.03.75 1.94 1.84 1.94h.02c1.12 0 1.92-.9 1.92-1.94ZM20.62 13.14c0-3.46-1.8-5.07-4.22-5.07-1.94 0-2.81 1.1-3.29 1.87V8.5H9.74c.04.95 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.67.12-.91.27-.68.87-1.38 1.88-1.38 1.33 0 1.87 1.04 1.87 2.58V20H20.62v-6.86Z" />
      </svg>
    );
  }

  return null;
}

export function AboutSection() {
  const { locale } = useLanguage();
  const primaryLink = profile.links.find((link) => link.variant === "primary");
  const secondaryLinks = profile.links.filter((link) => link.variant !== "primary");

  return (
    <Section
      id="about"
      wide
      tone="surface"
      className="relative isolate overflow-hidden border-b border-white/8 py-16 sm:py-20"
    >
      <FloralBackground intensity="medium" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(122,56,181,0.16)_0%,rgba(122,56,181,0.06)_18%,rgba(122,56,181,0.02)_28%,transparent_48%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,7,10,0.3)_0%,rgba(8,7,10,0.76)_100%)]" />

      <div className="grid gap-8">
        <div className="grid gap-6">
          <MotionReveal>
            <div className="max-w-6xl">
              <SectionHeading
                eyebrow={profile.eyebrow[locale]}
                title={profile.title[locale]}
                accent={profile.subtitle[locale]}
              />
              <div className="mt-8 flex max-w-[840px] flex-col gap-6">
                <div className="flex flex-col items-start gap-4 px-1 py-1 sm:flex-row sm:items-center sm:gap-4">
                  <div className="relative shrink-0 rounded-full p-[4px] ring-1 ring-[rgba(220,184,255,0.14)]">
                    <div className="relative h-[108px] w-[108px] overflow-hidden rounded-full border-[3px] border-[rgba(195,145,255,0.78)] shadow-[0_0_0_1px_rgba(99,55,146,0.22),0_0_26px_rgba(140,89,206,0.12)] sm:h-[120px] sm:w-[120px]">
                      <Image
                        src={profile.image}
                        alt={profile.imageAlt[locale]}
                        fill
                        sizes="128px"
                        className="object-cover object-[center_18%]"
                      />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-sans text-[0.88rem] leading-7 text-white sm:text-[0.93rem] lg:whitespace-nowrap">
                      <span className="font-sans font-medium text-white">{profile.role[locale]}</span>
                      {" \u2014 "}
                      <span className="font-sans text-[var(--color-copy)]">{profile.sideNote[locale]}</span>
                    </p>
                    <p className="type-meta mt-3 text-[0.7rem]">
                      {profile.location[locale]}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {primaryLink ? (
                    <Button
                      href={resolveProfileLinkHref(primaryLink, locale)}
                      target={shouldOpenInNewTab(resolveProfileLinkHref(primaryLink, locale)) ? "_blank" : undefined}
                      rel={shouldOpenInNewTab(resolveProfileLinkHref(primaryLink, locale)) ? "noreferrer" : undefined}
                      className="w-full sm:w-auto"
                    >
                      {primaryLink.label[locale]}
                    </Button>
                  ) : null}

                  {secondaryLinks.map((link) => (
                    <Button
                      key={link.icon}
                      href={resolveProfileLinkHref(link, locale)}
                      variant="secondary"
                      target={shouldOpenInNewTab(resolveProfileLinkHref(link, locale)) ? "_blank" : undefined}
                      rel={shouldOpenInNewTab(resolveProfileLinkHref(link, locale)) ? "noreferrer" : undefined}
                      className="w-full gap-2 border-white/12 bg-transparent sm:w-auto"
                    >
                      <SocialIcon icon={link.icon} />
                      <span>{link.label[locale]}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>

        <MotionReveal>
          <Divider />
        </MotionReveal>

        <MotionStagger className="grid gap-6 md:grid-cols-3 md:gap-7">
          {profile.pillars.map((pillar) => (
            <MotionReveal
              key={pillar.title[locale]}
              className="border-t border-white/8 pt-4 md:border-t-0 md:pt-0"
            >
              <h3 className="type-heading-sans text-[0.68rem] tracking-[0.18em] text-white sm:text-[0.72rem]">
                {pillar.title[locale]}
              </h3>
              <p className="type-body-muted mt-3 max-w-[25rem] text-[0.82rem] leading-[1.72] sm:text-[0.86rem] sm:leading-[1.78]">
                {pillar.body[locale]}
              </p>
            </MotionReveal>
          ))}
        </MotionStagger>
      </div>
    </Section>
  );
}
