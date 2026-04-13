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
    title: "Sistemas de Foseado LED de Alta Gama",
    description: "La luz que define la estructura. Diseñamos foseados perimetrales y techos foseados utilizando perfiles de aluminio de disipación térmica y tiras LED de grado profesional con altísima fidelidad cromática (CRI >95). Esta técnica crea una iluminación indirecta uniforme, eliminando sombras duras y aportando una sensación de amplitud y ligereza visual inalcanzable con métodos tradicionales. Una solución arquitectónica invisible que convierte el techo en una superficie emisora de luz suave y relajante.",
    image: "/images/iluminacion/productos/custom-foseado.png"
  },
  {
    title: "Control Inteligente y Escenas Lumínicas",
    description: "Tu hogar responde a tus emociones. Integramos los sistemas de control más avanzados (DALI, Casambi, KNX) para que puedas gestionar toda la iluminación desde interfaces elegantes o dispositivos móviles. Programamos escenas personalizadas para cada momento: desde la intensidad perfecta para una cena romántica hasta una configuración de máxima concentración para el teletrabajo. El control inteligente no es solo comodidad; es eficiencia energética real y diseño emocional al alcance de tu mano.",
    image: "/images/iluminacion/productos/lighting-product.png"
  },
  {
    title: "Iluminación Arquitectónica y de Acento",
    description: "Resaltamos el alma de tu espacio. Mediante proyectores de carril magnético, bañadores de pared y spots de ultra-bajo deslumbramiento, focalizamos la atención en elementos clave: una obra de arte, una textura de piedra o una pieza de mobiliario icónica. Utilizamos ópticas de precisión milimétrica para crear contraste y jerarquía visual, aportando profundidad dramática a las estancias. Una iluminación diseñada para ver la luz, pero no la luminaria, manteniendo el minimalismo del diseño.",
    image: "/images/iluminacion/productos/custom-arquitectonica.png"
  }
];

const PROJECTS = [
  { title: "Villa de Lujo en Marbella - Iluminación Integral", image: "/images/iluminacion/proyectos/lighting-project.png" },
  { title: "Restaurante Estrellado Madrid - Escenas Dinámicas", image: "/images/iluminacion/proyectos/lighting-project.png" },
  { title: "Sede Corporativa - Eficiencia y Confort Visual", image: "/images/iluminacion/proyectos/lighting-project.png" }
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
