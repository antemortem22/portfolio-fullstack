"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { brand } from "@/data/brand";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale, setLocale } = useLanguage();
  const isHeaderActive = hasScrolled || isMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const mobileLocaleLabel = locale === "es" ? "Idioma" : "Language";

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isHeaderActive
          ? "bg-black/45 shadow-[0_12px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <nav className="flex w-full items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#hero"
          onClick={closeMenu}
          className={`flex items-center gap-2 transition duration-300 md:translate-y-0 md:opacity-100 ${
            isHeaderActive
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-1 opacity-0 md:pointer-events-auto"
          }`}
        >
          <Image
            src={brand.logo}
            alt="Logo AGOS"
            width={24}
            height={24}
            className="h-6 w-6 object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.75)]"
            loading="eager"
          />
          <span className="font-title text-lg font-semibold leading-none tracking-wide text-white">
            {brand.name}
          </span>
        </a>

        <div className="flex items-center gap-3 sm:gap-7">
          <div className="hidden items-center gap-7 text-[12px] font-normal text-zinc-300 md:flex">
            {brand.navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label[locale]}
              </a>
            ))}
          </div>
          <a
            href={brand.cvUrl[locale]}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-md border border-primary-light bg-[#0B0B0F] px-4 py-2 text-[12px] font-medium text-primary-light transition hover:text-white hover:shadow-[0_0_18px_rgba(124,81,192,0.35)] sm:inline-flex"
          >
            {brand.cvLabel[locale]}
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center text-white transition hover:text-primary-light md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className="sr-only">{isMenuOpen ? "Close navigation menu" : "Open navigation menu"}</span>
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-current transition duration-300 ${
                  isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-5 bg-current transition duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-px w-5 bg-current transition duration-300 ${
                  isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
          <div className="hidden items-center gap-1.5 text-[14px] font-medium uppercase leading-none tracking-wide text-white md:flex">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`border-b transition ${
                locale === "en"
                  ? "border-primary-light text-white"
                  : "border-transparent text-zinc-400 hover:text-white"
              }`}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
            <span className="text-zinc-400">|</span>
            <button
              type="button"
              onClick={() => setLocale("es")}
              className={`border-b transition ${
                locale === "es"
                  ? "border-primary-light text-white"
                  : "border-transparent text-zinc-400 hover:text-white"
              }`}
              aria-pressed={locale === "es"}
            >
              ES
            </button>
          </div>
        </div>
      </nav>
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/8 bg-[linear-gradient(180deg,rgba(7,7,10,0.62)_0%,rgba(7,7,10,0.42)_100%)] shadow-[0_18px_40px_rgba(0,0,0,0.32)] backdrop-blur-[22px] transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-5 px-4 pb-6 pt-2 sm:px-6">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-zinc-500">
            <span>{mobileLocaleLabel}</span>
            <div className="flex items-center gap-2 text-[13px] font-medium tracking-[0.18em] text-zinc-300">
              <button
                type="button"
                onClick={() => setLocale("es")}
                className={`transition ${
                  locale === "es" ? "text-white" : "text-zinc-500 hover:text-white"
                }`}
                aria-pressed={locale === "es"}
              >
                ES
              </button>
              <span className="text-zinc-600">/</span>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`transition ${
                  locale === "en" ? "text-white" : "text-zinc-500 hover:text-white"
                }`}
                aria-pressed={locale === "en"}
              >
                EN
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            {brand.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-white/7 py-4 text-[15px] text-zinc-200 transition hover:text-white"
              >
                <span>{item.label[locale]}</span>
              </a>
            ))}
          </div>
          <a
            href={brand.cvUrl[locale]}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="inline-flex items-center border-b border-primary-light/40 py-4 text-[15px] font-medium text-primary-light transition hover:text-white"
          >
            <span>{brand.cvLabel[locale]}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
