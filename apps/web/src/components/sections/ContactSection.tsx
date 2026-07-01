"use client";

import { MotionReveal } from "@/components/motion/MotionReveal";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { FloralBackground } from "@/components/shared/FloralBackground";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { brand } from "@/data/brand";
import { contact } from "@/data/contact";

export function ContactSection() {
  const { locale } = useLanguage();
  const linkedin = brand.socialLinks.find((link) => link.label === "LinkedIn");
  const github = brand.socialLinks.find((link) => link.label === "GitHub");

  return (
    <Section
      id="contact"
      wide
      className="relative isolate overflow-hidden py-16 sm:py-20"
      tone="default"
    >
      <FloralBackground intensity="strong" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(122,56,181,0.16)_0%,rgba(122,56,181,0.06)_18%,rgba(122,56,181,0.02)_28%,transparent_48%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,7,10,0.34)_0%,rgba(8,7,10,0.88)_100%)]" />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
        <MotionStagger className="grid gap-8">
          <MotionReveal>
            <SectionHeading
              eyebrow={contact.eyebrow[locale]}
              title={contact.title[locale]}
              description={contact.description[locale]}
            />
          </MotionReveal>

          <MotionReveal className="type-body-muted grid gap-5">
            <div>
              <p className="type-meta text-[0.68rem] text-[var(--color-accent-soft)]">
                {contact.locationLabel[locale]}
              </p>
              <p className="mt-2 text-base text-white">{contact.location[locale]}</p>
            </div>

            <div>
              <p className="type-meta text-[0.68rem] text-[var(--color-accent-soft)]">
                {contact.emailLabel[locale]}
              </p>
              <a href={`mailto:${contact.email}`} className="mt-2 inline-flex text-base text-white">
                {contact.email}
              </a>
            </div>

            {linkedin ? (
              <div>
                <p className="type-meta text-[0.68rem] text-[var(--color-accent-soft)]">
                  {contact.linkedinLabel[locale]}
                </p>
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex text-base text-white"
                >
                  {linkedin.href.replace("https://", "")}
                </a>
              </div>
            ) : null}

            {github ? (
              <div>
                <p className="type-meta text-[0.68rem] text-[var(--color-accent-soft)]">
                  {contact.githubLabel[locale]}
                </p>
                <a
                  href={github.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex text-base text-white"
                >
                  {github.href.replace("https://", "")}
                </a>
              </div>
            ) : null}

            <div>
              <p className="type-meta text-[0.68rem] text-[var(--color-accent-soft)]">
                {contact.availabilityLabel[locale]}
              </p>
              <p className="mt-2 text-base text-white">{contact.availability[locale]}</p>
            </div>
          </MotionReveal>
        </MotionStagger>

        <MotionReveal className="editorial-surface flex min-h-[22rem] items-center p-6 sm:p-8 lg:p-10">
          <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
            <p className="type-heading-accent text-[2rem] text-[var(--color-accent-soft)] sm:text-[2.4rem]">
              {contact.upcoming[locale]}
            </p>
            <p className="mt-8 text-base text-[rgba(217,210,225,0.74)] sm:text-lg">
              {contact.interimContact[locale]}
            </p>

            <a
              href={`mailto:${contact.email}`}
              className="mt-6 text-[1.2rem] font-semibold text-white transition duration-300 hover:text-[var(--color-accent-soft)] sm:text-[1.5rem]"
            >
              {contact.email}
            </a>

            {linkedin ? (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 text-base font-semibold text-[var(--color-accent-soft)] transition duration-300 hover:text-white sm:text-lg"
              >
                {locale === "es" ? "o por LinkedIn" : "or via LinkedIn"}
              </a>
            ) : null}
          </div>
        </MotionReveal>
      </div>
    </Section>
  );
}
