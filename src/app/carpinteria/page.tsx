import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProductSection from "@/components/ProductSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import ContactForm from "@/components/ContactForm";
import NextImage from "next/image";
import { Hammer } from "lucide-react";

const PRODUCTS = [
  {
    title: "Muebles a Medida",
    description: "Diseñamos y fabricamos cada mueble según las dimensiones y el estilo exacto de tu hogar. Desde aparadores hasta camas, cada pieza es única y construida para durar generaciones.",
    image: "/images/carpinteria-card.png"
  },
  {
    title: "Estanterías y Librerías",
    description: "Estanterías integradas y librerías empotradas que aprovechan al máximo cada rincón. Combinamos funcionalidad y estética con maderas seleccionadas y acabados personalizados.",
    image: "/images/carpinteria-card.png"
  },
  {
    title: "Armarios y Vestidores",
    description: "Armarios empotrados y vestidores diseñados para maximizar el espacio. Interiores modulables, iluminación integrada y materiales de alta calidad que se adaptan a tu estilo de vida.",
    image: "/images/carpinteria-card.png"
  },
  {
    title: "Tratamiento y Restauración",
    description: "Recuperamos el esplendor original de tus muebles y suelos de madera. Lijado, barnizado, tintado y tratamientos protectores que devuelven la vida a la madera con un resultado impecable.",
    image: "/images/carpinteria-card.png"
  }
];

const PROJECTS = [
  { title: "Vivienda en Pozuelo - Librería Empotrada a Medida", image: "/images/carpinteria-card.png" },
  { title: "Ático Madrid - Armario Vestidor con Iluminación LED", image: "/images/carpinteria-card.png" },
  { title: "Chalet en Las Rozas - Restauración Muebles Antiguos", image: "/images/carpinteria-card.png" }
];

export default function CarpinteriaPage() {
  return (
    <main className="relative">
      <Header />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b-2 border-foreground/20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <NextImage
            src="/images/carpinteria-hero.png"
            alt="Carpintería"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-20 text-center space-y-6">
          <div className="w-16 h-16 bg-accent/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mx-auto mb-4 animate-pulse">
            <Hammer size={32} />
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white animate-slide-up">
            Carpintería
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Artesanía en madera para espacios únicos. Muebles a medida, armarios, estanterías y restauración con maestría artesanal.
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
          <p className="text-muted-foreground">Carpintería artesanal que define el carácter de cada hogar.</p>
        </div>
        <ProjectCarousel projects={PROJECTS} />
      </Section>

      {/* Formulario */}
      <Section id="quote" dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-display font-bold">Tu Madera, <br /><span className="text-accent">Tu Estilo</span></h2>
            <p className="text-xl text-muted-foreground">
              Cuéntanos tu proyecto y nuestros artesanos diseñarán la solución perfecta en madera para tu hogar.
            </p>
          </div>
          <ContactForm division="carpinteria" />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
