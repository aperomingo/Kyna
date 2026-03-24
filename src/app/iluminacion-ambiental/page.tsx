import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProductSection from "@/components/ProductSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import ContactForm from "@/components/ContactForm";
import NextImage from "next/image";

const PRODUCTS = [
  {
    title: "Sistemas de Foseado LED",
    description: "La luz indirecta que transforma estancias. Creamos foseados perimetrales con tiras LED de alta fidelidad cromática que bañan las paredes de luz suave, eliminando sombras duras y aumentando la sensación de amplitud.",
    image: "/images/lighting.png"
  },
  {
    title: "Control Inteligente",
    description: "Gestione el ambiente de su hogar desde cualquier lugar. Integramos sistemas de domótica avanzada que permiten programar escenas lumínicas, ajustar la temperatura del color y optimizar el consumo energético.",
    image: "/images/lighting.png"
  },
  {
    title: "Iluminación Arquitectónica",
    description: "Resaltamos lo que importa. Proyectores de acento y bañadores de pared diseñados para enfatizar elementos arquitectónicos, obras de arte o zonas de paso con una precisión milimétrica.",
    image: "/images/lighting.png"
  }
];

const PROJECTS = [
  { title: "Villa de Lujo en Marbella - Iluminación Integral", image: "/images/lighting.png" },
  { title: "Restaurante Estrellado Madrid - Escenas Dinámicas", image: "/images/lighting.png" },
  { title: "Sede Corporativa - Eficiencia y Confort Visual", image: "/images/lighting.png" }
];

export default function IluminacionPage() {
  return (
    <main className="relative">
      <Header />
      
      {/* 2.1. Hero Informativo / Introducción */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <NextImage 
            src="/images/lighting.png" 
            alt="Iluminación Ambiental" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-20 text-center space-y-6">
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white animate-slide-up">
            Iluminación Ambiental
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Diseñamos atmósferas únicas a través de la luz. Ingeniería técnica y sensibilidad artística.
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
          <p className="text-muted-foreground">Una muestra de nuestras mejores integraciones lumínicas.</p>
        </div>
        <ProjectCarousel projects={PROJECTS} />
      </Section>

      {/* 2.4. Formulario de presupuesto especializado */}
      <Section id="quote" dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-display font-bold">Solicita tu <br /><span className="text-accent">Presupuesto para Iluminación</span></h2>
            <p className="text-xl text-muted-foreground">
              Deje que nuestros especialistas en diseño lumínico transformen su espacio. Presupuesto personalizado y detallado.
            </p>
          </div>
          <ContactForm division="iluminacion" />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
