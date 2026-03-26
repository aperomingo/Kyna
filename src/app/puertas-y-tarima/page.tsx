import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProductSection from "@/components/ProductSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import ContactForm from "@/components/ContactForm";
import NextImage from "next/image";
import { DoorOpen } from "lucide-react";

const PRODUCTS = [
  {
    title: "Puertas de Interior",
    description: "Puertas de paso de gran altura con acabados en madera noble, lacado o cristal. Marcos ocultos y bisagras invisibles que se integran perfectamente con cualquier estilo arquitectónico. Diseñadas para durar y emocionar.",
    image: "/images/puertas-interior.png"
  },
  {
    title: "Suelo Flotante",
    description: "Suelos de alta resistencia que combinan la calidez de la madera con la estabilidad del sistema flotante. Ideales para cualquier espacio, incluyendo zonas con suelo radiante. Instalación limpia y rápida sin obras.",
    image: "/images/suelo-flotante.png"
  },
  {
    title: "Suelo Laminado",
    description: "La alternativa más versátil y económica sin renunciar a la estética. Laminados de alta definición que replican el aspecto de la madera natural con una resistencia superior al desgaste, los rayones y la humedad.",
    image: "/images/suelo-laminado.png"
  }
];

const PROJECTS = [
  { title: "Reforma Integral Retiro - Puertas de Interior y Suelo Flotante", image: "/images/puertas-tarima-hero.png" },
  { title: "Ático Madrid Centro - Puertas Lacadas y Suelo Laminado", image: "/images/puertas-tarima-hero.png" },
  { title: "Vivienda en Pozuelo - Puertas de Roble y Tarima Flotante", image: "/images/puertas-tarima-hero.png" }
];

export default function PuertasYTarimaPage() {
  return (
    <main className="relative">
      <Header />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b-2 border-foreground/20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <NextImage
            src="/images/puertas-tarima-hero.png"
            alt="Puertas y Tarima"
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-20 text-center space-y-6">
          <div className="w-16 h-16 bg-accent/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mx-auto mb-4 animate-pulse">
            <DoorOpen size={32} />
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white animate-slide-up">
            Puertas y Tarima
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Puertas de vanguardia y suelos de tarima de alta calidad. Elegancia y carácter bajo sus pies y en cada acceso.
          </p>
        </div>
      </section>

      {/* Productos */}
      <Section id="products" dark>
        <ProductSection products={PRODUCTS} />
      </Section>

      {/* Proyectos */}
      <Section id="projects">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-display font-bold">Proyectos Realizados</h2>
          <p className="text-muted-foreground">Instalaciones de puertas y tarima que transforman hogares en toda España.</p>
        </div>
        <ProjectCarousel projects={PROJECTS} />
      </Section>

      {/* Formulario */}
      <Section id="quote" dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-display font-bold">Solicita tu <br /><span className="text-accent">Presupuesto</span></h2>
            <p className="text-xl text-muted-foreground">
              Nuestro equipo especializado en puertas y tarima estudiará tu proyecto para ofrecerte la mejor solución.
            </p>
          </div>
          <ContactForm division="puertasytarima" />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
