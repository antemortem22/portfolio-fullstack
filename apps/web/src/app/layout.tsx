import type { Metadata } from "next";
import localFont from "next/font/local";
import { CursorGlowTrail } from "@/components/effects/CursorGlowTrail";
import "./globals.css";

const inter = localFont({
  src: "../../fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
});

const playfair = localFont({
  src: "../../fonts/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-playfair",
});

const cormorant = localFont({
  src: [
    {
      path: "../../fonts/CormorantGaramond-VariableFont_wght.ttf",
      style: "normal",
      weight: "400 700",
    },
    {
      path: "../../fonts/CormorantGaramond-Italic-VariableFont_wght.ttf",
      style: "italic",
      weight: "400 700",
    },
  ],
  variable: "--font-cormorant",
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
