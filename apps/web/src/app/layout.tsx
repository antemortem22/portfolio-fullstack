import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import { CursorGlowTrail } from "@/components/effects/CursorGlowTrail";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AD | Portfolio",
  description: "Portfolio personal fullstack.",
  icons: {
    icon: "/faviconAD.svg",
    shortcut: "/faviconAD.svg",
    apple: "/faviconAD.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-[url('/portfolio-background.png')] bg-repeat opacity-[0.11]"
          style={{ backgroundPosition: "center top", backgroundSize: "760px" }}
        />
        <CursorGlowTrail />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
