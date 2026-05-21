"use client";

import { ExternalLink } from "@/components/ui/ExternalLink";
import { useLanguage } from "@/context/LanguageContext";
import { brand } from "@/data/brand";
import { contact } from "@/data/contact";

export function ContactSection() {
  const { locale } = useLanguage();
  const linkedin = brand.socialLinks.find((link) => link.label === "LinkedIn");

  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-4xl rounded-[12px] border border-white/10 bg-[#111]/90 p-6 shadow-[0_0_45px_rgba(85,56,131,0.16)] sm:p-8">
        <div className="section-heading">
          <p>{contact.eyebrow[locale]}</p>
          <h2>{contact.title[locale]}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-normal normal-case leading-7 tracking-normal text-zinc-400">
            {contact.description[locale]}
          </p>
        </div>

        <div className="mx-auto mt-7 max-w-2xl rounded-[12px] border border-primary-light/40 bg-[#0B0B0F] px-5 py-6 text-center shadow-[0_0_28px_rgba(85,56,131,0.18)] sm:px-8">
          <p className="font-subtitle text-2xl italic leading-tight text-primary-light">
            {contact.unavailable.message[locale]}
          </p>
          <p className="mt-4 text-sm leading-7 text-zinc-400">
            {contact.unavailable.contactIntro[locale]}
          </p>
          <a
            href={`mailto:${contact.unavailable.email}`}
            className="mt-2 inline-flex text-sm font-semibold text-white transition hover:text-primary-light"
          >
            {contact.unavailable.email}
          </a>
          {linkedin ? (
            <ExternalLink
              href={linkedin.href}
              className="mt-3 block text-sm font-semibold text-primary-light transition hover:text-white"
            >
              {contact.unavailable.linkedinLabel[locale]}
            </ExternalLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
