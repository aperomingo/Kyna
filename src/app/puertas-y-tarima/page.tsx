import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProductSection from "@/components/ProductSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import ContactForm from "@/components/ContactForm";
import NextImage from "next/image";
import { DoorOpen } from "lucide-react";

export const metadata = {
  title: "Puertas y Suelos de Tarima",
  description: "Instalación de puertas de interior suelo a techo, tarima flotante de roble natural y suelos laminados en Madrid.",
};

const PRODUCTS = [
  {
    title: "Puertas de Interior",
    description: "Instalamos puertas con la precisión que tu hogar merece. Nuestro equipo especializado se encarga de todo el proceso: desde la toma de medidas milimétricas y la preparación del premarco, hasta el montaje final con sistemas de bisagras ocultas, picaportes magnéticos y ajuste hermético de holguras. Trabajamos con modelos de suelo a techo, puertas correderas empotradas, abatibles y pivotantes en maderas nobles, lacados sedosos o cerramientos de cristal. Garantizamos un aislamiento termoacústico de primer nivel, un cierre suave y silencioso, y un acabado impecable que se integra a la perfección con el rodapié y las molduras existentes. Instalación limpia, rápida y sin sorpresas.",
    image: "/images/puertas-y-tarima/productos/puertas-interior.png"
  },
  {
    title: "Instalación de Rodapiés",
    description: "El detalle final que define el carácter y la limpieza de una estancia. Nos encargamos de la instalación precisa de rodapiés en todo tipo de acabados: lacados en blanco, maderas naturales a juego con la tarima o sistemas integrados a ras de pared. Realizamos una fijación invisible mediante adhesivos de alta resistencia y un sellado profesional que previene la entrada de humedad y suciedad. Un remate limpio, recto y duradero para un acabado impecable.",
    image: "/images/puertas-y-tarima/productos/instalacion-rodapies.png"
  },
  {
    title: "Suelo Laminado",
    description: "Rendimiento técnico insuperable sin comprometer una estética deslumbrante. Nuestra exclusiva selección de suelos laminados de alta definición reproduce con un realismo táctil y visual asombroso las vetas, poros y nudos de las maderas más exquisitas. Es la elección definitiva para espacios de altísimo tránsito, hogares familiares o comercios. Incorporan tratamientos hidrófugos avanzados y protección anti-rayones, manteniendo un aspecto intacto durante años con un nivel de mantenimiento prácticamente nulo.",
    image: "/images/puertas-y-tarima/productos/suelo-laminado.png"
  }
];

const PROJECTS = [
  { 
    title: "Puertas de Suelo a Techo", 
    image: "/images/puertas-y-tarima/proyectos/puertas-techo-madrid.png" 
  },
  { 
    title: "Tarima de Roble Natural en Formato Gran Formato", 
    image: "/images/puertas-y-tarima/proyectos/suelo-madera-natural.png" 
  },
  { 
    title: "Suelo Laminado Diseño Industrial", 
    image: "/images/puertas-y-tarima/proyectos/suelo-laminado-premium.png" 
  },
  { 
    title: "Combinación de Puertas Lacadas Blancas y Suelo de Roble Claro", 
    image: "/images/puertas-y-tarima/proyectos/combinacion-blanco-roble.png" 
  },
  { 
    title: "Vestidor a Medida y Parquet de Nogal Seleccionado", 
    image: "/images/puertas-y-tarima/proyectos/vestidor-tarima-lujo.png" 
  }
];

export default function PuertasYTarimaPage() {
  return (
    <main className="relative">
      <Header />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b-2 border-foreground/20 pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <NextImage
            src="/images/puertas-y-tarima/puertas-tarima-hero.png"
            alt="Puertas y Tarima"
            fill
            priority
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
