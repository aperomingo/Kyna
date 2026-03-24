import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProductSection from "@/components/ProductSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import ContactForm from "@/components/ContactForm";
import NextImage from "next/image";

const PRODUCTS = [
  {
    title: "Puertas Acorazadas",
    description: "Máxima seguridad sin renunciar al diseño. Nuestras puertas de entrada combinan estructuras de acero de alta resistencia con paneles decorativos personalizados en maderas nobles y metales.",
    image: "/images/doors.png"
  },
  {
    title: "Puertas de Paso Minimalistas",
    description: "La elegancia de la simplicidad. Puertas de gran altura con marcos ocultos y bisagras invisibles que se integran perfectamente en la arquitectura de su hogar.",
    image: "/images/doors.png"
  },
  {
    title: "Sistemas Pivotantes",
    description: "Un elemento de diseño arquitectónico único. Puertas de grandes dimensiones que giran sobre un eje vertical, permitiendo aperturas espectaculares y un movimiento fluido.",
    image: "/images/doors.png"
  }
];

const PROJECTS = [
  { title: "Vivienda Unifamiliar Aravaca - Puerta Pivotante", image: "/images/doors.png" },
  { title: "Oficinas Prime Madrid - Puertas de Vidrio y Acero", image: "/images/doors.png" },
  { title: "Reforma Barrio de Salamanca - Puertas Acorazadas", image: "/images/doors.png" }
];

export default function PuertasPage() {
  return (
    <main className="relative">
      <Header />
      
      {/* 2.1. Hero Informativo / Introducción */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <NextImage 
            src="/images/doors.png" 
            alt="Puertas de Diseño" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-20 text-center space-y-6">
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white animate-slide-up">
            Puertas de Diseño
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Transiciones que definen espacios. Seguridad, aislamiento y estética de vanguardia para su hogar.
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
          <p className="text-muted-foreground">Exposición de puertas instaladas por Kyna Group.</p>
        </div>
        <ProjectCarousel projects={PROJECTS} />
      </Section>

      {/* 2.4. Formulario de presupuesto especializado */}
      <Section id="quote" dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-display font-bold">Solicita tu <br /><span className="text-accent">Presupuesto para Puertas</span></h2>
            <p className="text-xl text-muted-foreground">
              Contacta con nuestra división especializada en cerramientos y puertas para un asesoramiento personalizado.
            </p>
          </div>
          <ContactForm division="puertas" />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
