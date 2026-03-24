import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProductSection from "@/components/ProductSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import ContactForm from "@/components/ContactForm";
import NextImage from "next/image";
import { Zap } from "lucide-react";

const PRODUCTS = [
  {
    title: "Paneles de Alta Eficiencia",
    description: "Máximo rendimiento en el mínimo espacio. Utilizamos tecnología monocristalina de última generación que garantiza una captación energética superior incluso en días nublados.",
    image: "/images/solar-fallback.png"
  },
  {
    title: "Sistemas de Almacenamiento",
    description: "Independencia energética real. Baterías inteligentes de litio que almacenan el excedente de energía diurna para que pueda consumirla durante la noche, optimizando su ahorro al máximo.",
    image: "/images/solar-fallback.png"
  },
  {
    title: "Inversores de Vanguardia",
    description: "El cerebro de su instalación. Inversores híbridos que gestionan el flujo de energía de forma automática y permiten monitorizar su producción y consumo en tiempo real desde su móvil.",
    image: "/images/solar-fallback.png"
  }
];

const PROJECTS = [
  { title: "Comunidad de Vecinos - Autoconsumo Colectivo", image: "/images/solar-fallback.png" },
  { title: "Vivienda Aislada - Sistema Off-grid", image: "/images/solar-fallback.png" },
  { title: "Nave Industrial - Instalación de 50kWp", image: "/images/solar-fallback.png" }
];

export default function SolarPage() {
  return (
    <main className="relative">
      <Header />
      
      {/* 2.1. Hero Informativo / Introducción */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <NextImage 
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a18?q=80&w=2070&auto=format&fit=crop" 
            alt="Energía Fotovoltaica" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-20 text-center space-y-6">
          <div className="w-16 h-16 bg-solar/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mx-auto mb-4 animate-pulse">
            <Zap size={32} />
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white animate-slide-up">
            Energía Fotovoltaica
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Tome el control de su consumo energético. Sostenibilidad inagotable y ahorro real para su hogar.
          </p>
        </div>
      </section>

      {/* 2.2. Lista de productos con disposición alterna */}
      <Section id="products" dark>
        <ProductSection products={PRODUCTS} />
      </Section>

      {/* 2.3. Carrusel de proyectos */}
      <Section id="projects">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-display font-bold">Proyectos Realizados</h2>
          <p className="text-muted-foreground">Instalaciones fotovoltaicas que ya están ahorrando energía en España.</p>
        </div>
        <ProjectCarousel projects={PROJECTS} />
      </Section>

      {/* 2.4. Formulario de presupuesto especializado */}
      <Section id="quote" dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-display font-bold text-solar">Pásate al <br /><span>Autoconsumo</span></h2>
            <p className="text-xl text-muted-foreground">
              Realizamos estudios de viabilidad gratuitos. Descubre cuánto puedes ahorrar con nuestra división de energía.
            </p>
          </div>
          <ContactForm division="solar" />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
