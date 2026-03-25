import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyna Obras - Reformas & Energía Fotovoltaica",
  description: "Especialistas en suelos de madera, puertas, iluminación ambiental y energía solar. Transformamos tu hogar con calidad y sostenibilidad.",
  metadataBase: new URL("https://www.kynaobras.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var stored = localStorage.getItem('theme');
            if (stored === 'light') {
              document.documentElement.classList.add('light');
            } else if (!stored && window.matchMedia('(prefers-color-scheme: light)').matches) {
              document.documentElement.classList.add('light');
            }
          })();
        `}} />
      </head>
      <body className="font-sans bg-background text-foreground selection:bg-accent/30">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
