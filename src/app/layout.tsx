import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Grupo Kyna | Especialistas en Madrid',
    template: '%s | Grupo Kyna',
  },
  description:
    'Especialistas en carpintería a medida, puertas y tarima, iluminación ambiental y energía fotovoltaica. Cuatro divisiones, una misma filosofía de calidad.',
  keywords: [
    'reformas integrales Madrid',
    'reformas Parla',
    'carpintería a medida Madrid',
    'muebles a medida y estanterías',
    'armarios empotrados y vestidores',
    'instalación de puertas de interior',
    'tarima flotante y suelo laminado',
    'iluminación ambiental LED',
    'proyectos de iluminación y domótica',
    'instalación de paneles solares',
    'energía fotovoltaica Madrid',
    'baterías de litio y autoconsumo',
    'grupo kyna',
    'kyna',
    'kyna obras',
  ],
  authors: [{ name: 'Grupo Kyna', url: 'https://www.kynaobras.com' }],
  creator: 'Grupo Kyna',
  metadataBase: new URL('https://www.kynaobras.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Grupo Kyna | Especialistas en Madrid',
    description:
      'Especialistas en carpintería a medida, puertas y tarima, iluminación ambiental y energía fotovoltaica. Cuatro divisiones, una misma filosofía de calidad.',
    url: 'https://www.kynaobras.com',
    siteName: 'Grupo Kyna',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/images/home/hero-composite.png',
        width: 1200,
        height: 630,
        alt: 'Grupo Kyna - Especialistas en Madrid',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grupo Kyna | Especialistas en Madrid',
    description:
      'Especialistas en carpintería a medida, puertas y tarima, iluminación ambiental y energía fotovoltaica. Cuatro divisiones, una misma filosofía de calidad.',
    images: ['/images/home/hero-composite.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="font-sans bg-background text-foreground selection:bg-accent/30">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
