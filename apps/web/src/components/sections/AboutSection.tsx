import Image from "next/image";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <div className="section-heading">
        <p>Profile</p>
        <h2>{profile.title.es}</h2>
      </div>
      <div className="mt-12 grid items-center gap-10 md:grid-cols-[0.95fr_1fr]">
        <div className="relative overflow-hidden rounded-md border border-primary/60 shadow-[0_0_45px_rgba(85,56,131,0.35)]">
          <Image
            src={profile.image}
            alt="Textura visual del portfolio"
            width={900}
            height={620}
            className="h-[360px] w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-5 right-5 border border-primary/60 bg-black/80 px-4 py-3 text-right">
            <p className="font-title text-3xl text-white">2+</p>
            <p className="text-xs text-zinc-400">años explorando</p>
          </div>
        </div>
        <div>
          <div className="space-y-5 text-base leading-8 text-zinc-400">
            {profile.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {profile.links.map((link) => (
              <a key={link.label} href={link.href} className="btn-secondary">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
