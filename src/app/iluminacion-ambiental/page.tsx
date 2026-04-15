import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProductSection from "@/components/ProductSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import ContactForm from "@/components/ContactForm";
import NextImage from "next/image";

export const metadata = {
  title: "Iluminación Ambiental",
  description: "Proyectos de iluminación ambiental en Madrid: foseados LED de alta gama, iluminación arquitectónica de acento y sistemas de control inteligente.",
};

const PRODUCTS = [
  {
    title: "Puntos de luz",
    description: "Nuestros puntos de luz representan la esencia de la iluminación minimalista y funcional. Diseñados para integrarse casi de forma invisible en techos y paredes, estos dispositivos de alta precisión permiten focalizar la atención en detalles arquitectónicos específicos o crear una base lumínica uniforme sin contaminar visualmente el espacio. Utilizamos tecnología de ultra-bajo deslumbramiento (Low UGR) que garantiza el máximo confort visual, eliminando reflejos molestos y creando una atmósfera elegante y profesional. Ideales para galerías de arte, pasillos de diseño o estancias donde la pureza de la arquitectura es la protagonista.",
    image: "/images/iluminacion/productos/puntos-de-luz.png"
  },
  {
    title: "Leds",
    description: "La revolución de la iluminación lineal y ambiental llega de la mano de nuestros sistemas LED de última generación. No se trata solo de iluminar, sino de transformar la geometría del espacio. Mediante la integración de tiras LED de alta densidad en foseados, rodapiés y perfiles ocultos, logramos una luz indirecta que baña las superficies con una suavidad inalcanzable por otros medios. Con una reproducción cromática excepcional (CRI >95), garantizamos que los colores y texturas de su hogar se vean tal y como fueron concebidos. Totalmente regulables y compatibles con sistemas de control inteligente, permiten adaptar la intensidad y el tono a cada momento del día.",
    image: "/images/iluminacion/productos/leds.png"
  },
  {
    title: "Lámparas personalizadas",
    description: "Donde el diseño se encuentra con la exclusividad. Nuestras lámparas personalizadas son piezas únicas concebidas para convertirse en el alma de cualquier estancia. Colaboramos con maestros artesanos y utilizamos materiales de primera calidad —desde maderas nobles tratadas hasta metales cepillados y cristales soplados— para crear luminarias que no solo iluminan, sino que cuentan una historia. Cada pieza se diseña a medida del espacio, teniendo en cuenta las dimensiones, el estilo decorativo y las necesidades lumínicas específicas del cliente. Una inversión en arte y funcionalidad que eleva el valor estético de su propiedad a un nivel superior.",
    image: "/images/iluminacion/productos/lamparas-personalizadas.png"
  }
];

const PROJECTS = [
  { title: "Galería de Arte Contemporáneo - Iluminación Focalizada con Puntos de Luz", image: "/images/iluminacion/proyectos/proyecto-puntos-luz.png" },
  { title: "Residencia Minimalista - Iluminación Indirecta mediante Foseados LED", image: "/images/iluminacion/proyectos/proyecto-restaurante.png" },
  { title: "Ático de Diseño en Madrid - Lámparas de Autor Hechas a Medida", image: "/images/iluminacion/proyectos/proyecto-marbella.png" }
];

export default function IluminacionPage() {
  return (
    <main className="relative">
      <Header />
      
      {/* 2.1. Hero Informativo / Introducción */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b-2 border-foreground/20 pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <NextImage 
            src="/images/iluminacion/lighting.png" 
            alt="Iluminación Ambiental" 
            fill 
            priority
            sizes="100vw"
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
