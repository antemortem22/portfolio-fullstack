"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { FloralBackground } from "@/components/shared/FloralBackground";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { brand } from "@/data/brand";
import { contact } from "@/data/contact";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactSection() {
  const { locale } = useLanguage();
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(
    null,
  );

  const linkedin = brand.socialLinks.find((link) => link.label === "LinkedIn");
  const github = brand.socialLinks.find((link) => link.label === "GitHub");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);

    if (
      !formState.name.trim() ||
      !formState.email.trim() ||
      !formState.subject.trim() ||
      !formState.message.trim()
    ) {
      setFeedback({ type: "error", message: contact.validation.required[locale] });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      setFeedback({ type: "error", message: contact.validation.email[locale] });
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Contact request failed.");
      }

      setFormState(initialFormState);
      setFeedback({ type: "success", message: contact.success[locale] });
    } catch {
      setFeedback({ type: "error", message: contact.error[locale] });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      wide
      className="relative isolate overflow-hidden py-20 sm:py-24"
      tone="default"
    >
      <FloralBackground intensity="strong" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(122,56,181,0.16)_0%,rgba(122,56,181,0.06)_18%,rgba(122,56,181,0.02)_28%,transparent_48%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,7,10,0.34)_0%,rgba(8,7,10,0.88)_100%)]" />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
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

        <MotionReveal className="editorial-surface p-5 sm:p-6 lg:p-8">
          <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
            <label className="field-label">
              <span>{contact.fields.name.label[locale]}</span>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder={contact.fields.name.placeholder[locale]}
                className="field-input"
                autoComplete="name"
                required
              />
            </label>

            <label className="field-label">
              <span>{contact.fields.email.label[locale]}</span>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder={contact.fields.email.placeholder[locale]}
                className="field-input"
                autoComplete="email"
                required
              />
            </label>

            <label className="field-label">
              <span>{contact.fields.subject.label[locale]}</span>
              <input
                type="text"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                placeholder={contact.fields.subject.placeholder[locale]}
                className="field-input"
                required
              />
            </label>

            <label className="field-label">
              <span>{contact.fields.message.label[locale]}</span>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder={contact.fields.message.placeholder[locale]}
                className="field-input min-h-[180px] resize-y"
                required
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[color:rgba(181,138,221,0.38)] bg-[var(--color-accent)] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[var(--color-accent-deep)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Enviando..." : contact.buttonLabel[locale]}
              </button>
              <div aria-live="polite" className="type-body-muted">
                {feedback ? (
                  <p className={feedback.type === "success" ? "text-white" : "text-[var(--color-accent-soft)]"}>
                    {feedback.message}
                  </p>
                ) : null}
              </div>
            </div>
          </form>
        </MotionReveal>
      </div>
    </Section>
  );
}
