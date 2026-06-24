import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSectionsServer } from "@/components/sections/PortfolioSectionsServer";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { LanguageProvider } from "@/context/LanguageContext";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <Suspense
          fallback={
            <>
              <ProjectsSection state="loading" projects={[]} />
              <SkillsSection state="loading" skillGroups={[]} technologies={[]} />
            </>
          }
        >
          <PortfolioSectionsServer />
        </Suspense>
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
