"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { brand } from "@/data/brand";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        hasScrolled
          ? "bg-black/45 shadow-[0_12px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-8 py-3 lg:px-10">
        <a href="#" className="flex items-center gap-2">
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

        <div className="flex items-center gap-7">
          <div className="hidden items-center gap-7 text-[12px] font-normal text-zinc-300 md:flex">
            {brand.navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label[locale]}
              </a>
            ))}
          </div>
          <a
            href={brand.cvUrl}
            className="hidden rounded-md border border-primary-light bg-[#0B0B0F] px-4 py-2 text-[12px] font-medium text-primary-light transition hover:text-white hover:shadow-[0_0_18px_rgba(124,81,192,0.35)] sm:inline-flex"
          >
            {brand.cvLabel[locale]}
          </a>
          <div className="flex items-center gap-1.5 text-[14px] font-medium uppercase leading-none tracking-wide text-white">
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
    </header>
  );
}
