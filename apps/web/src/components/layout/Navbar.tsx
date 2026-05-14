import Image from "next/image";
import { brand } from "@/data/brand";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-3">
          <Image
            src={brand.logo}
            alt="Logo AGOS"
            width={34}
            height={34}
            className="h-8 w-8 object-contain drop-shadow-[0_0_18px_rgba(124,81,192,0.75)]"
            priority
          />
          <span className="font-title text-xl font-semibold tracking-wide text-white">
            {brand.name}
          </span>
        </a>

        <div className="hidden items-center gap-7 text-xs uppercase tracking-[0.22em] text-zinc-400 md:flex">
          {brand.navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={brand.cvUrl}
            className="hidden rounded-sm border border-primary/60 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_24px_rgba(85,56,131,0.28)] transition hover:bg-primary/25 sm:inline-flex"
          >
            Descargar CV
          </a>
          <div className="flex rounded-sm border border-white/10 bg-white/[0.04] p-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
            <span className="rounded-[2px] bg-primary px-2 py-1 text-white">ES</span>
            <span className="px-2 py-1">EN</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
