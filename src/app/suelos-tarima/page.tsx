import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProductSection from "@/components/ProductSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import ContactForm from "@/components/ContactForm";
import NextImage from "next/image";

const PRODUCTS = [
  {
    title: "Tarima Maciza",
    description: "Madera noble en toda su profundidad. Seleccionamos las mejores piezas de roble, nogal y maderas tropicales para un acabado robusto y eterno que gana belleza con el paso de los años.",
    image: "/images/floors.png"
  },
  {
    title: "Tarima Multicapa",
    description: "Estabilidad excepcional con la calidez de la madera real. Ideal para instalaciones con suelo radiante o en climas con variaciones de humedad, sin renunciar al aspecto natural de la madera.",
    image: "/images/floors.png"
  },
  {
    title: "Suelos de Tarima Exterior",
    description: "Transformamos su terraza o jardín en un oasis de confort. Maderas tratadas para resistir la intemperie y sistemas de Click oculto para una estética impecable.",
    image: "/images/floors.png"
  }
];

const PROJECTS = [
  { title: "Chalet en La Moraleja - Suelos de Roble", image: "/images/floors.png" },
  { title: "Ático en Madrid Centro - Espiga Húngara", image: "/images/floors.png" },
  { title: "Reforma Integral Retiro - Tarima Natural", image: "/images/floors.png" }
];

export default function SuelosTarimaPage() {
  return (
    <main className="relative">
      <Header />
      
      {/* 2.1. Hero Informativo / Introducción */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <NextImage 
            src="/images/floors.png" 
            alt="Suelos de Tarima" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-20 text-center space-y-6">
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white animate-slide-up">
            Suelos de Tarima
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Especialistas en la instalación y restauración de suelos de tarima de alta gama. Tradición y tecnología bajo sus pies.
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
          <p className="text-muted-foreground">Una selección de nuestras mejores instalaciones de tarima en España.</p>
        </div>
        <ProjectCarousel projects={PROJECTS} />
      </Section>

      {/* 2.4. Formulario de presupuesto especializado */}
      <Section id="quote" dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-display font-bold">Solicita tu <br /><span className="text-accent">Presupuesto para Suelos</span></h2>
            <p className="text-xl text-muted-foreground">
              Nuestro equipo técnico de la división de suelos analizará tu proyecto para ofrecerte la mejor solución en tarima.
            </p>
          </div>
          <ContactForm division="suelos" />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
