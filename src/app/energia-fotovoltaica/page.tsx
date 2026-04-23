import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProductSection from "@/components/ProductSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import ContactForm from "@/components/ContactForm";
import NextImage from "next/image";
import { Zap } from "lucide-react";

export const metadata = {
  title: "Energía Fotovoltaica y Paneles Solares",
  description: "Instalación de paneles solares N-Type, baterías de litio e inversores híbridos en Madrid. Pásate al autoconsumo con la división de energía de Grupo Kyna.",
};

const PRODUCTS = [
  {
    title: "Instalaciones placas solares para autoconsumo",
    description: "Transforme su hogar o empresa en una unidad de producción energética eficiente e independiente. Nuestras instalaciones de autoconsumo residencial e industrial están diseñadas meticulosamente para maximizar el aprovechamiento de la radiación solar en Madrid, utilizando paneles de última generación N-Type y tecnología de inversor inteligente. Nos encargamos de todo el proceso de principio a fin: desde el estudio de viabilidad personalizado y el diseño técnico, hasta la gestión integral de permisos, la instalación profesional por técnicos certificados y la tramitación de subvenciones locales (IIVTNU, deducciones de IRPF). Una inversión estratégica que garantiza ahorros sustanciales desde el primer día y protege su economía frente a la volatilidad del mercado eléctrico.",
    image: "/images/energia/productos/autoconsumo-solar.png"
  },
  {
    title: "Mantenimiento placas solares",
    description: "Para que su inversión fotovoltaica rinda al máximo durante sus más de 25 años de vida útil, ofrecemos un servicio de mantenimiento técnico especializado y preventivo. No se trata simplemente de limpieza superficial; realizamos auditorías exhaustivas que incluyen termografías de precisión para detectar posibles puntos calientes (hotspots), verificación de aprietes y conexiones eléctricas, análisis preventivo del inversor y monitorización activa del rendimiento. Un mantenimiento profesional puede incrementar la producción de energía hasta en un 15% y evitar averías costosas a largo plazo, asegurando que su sistema fotovoltaico funcione siempre en condiciones óptimas de seguridad y eficiencia.",
    image: "/images/energia/productos/mantenimiento-solar.png"
  },
  {
    title: "Instalaciones aisladas de placas solares",
    description: "La independencia energética total es una realidad tangible con nuestras soluciones aisladas de red (Off-grid). Son la opción ideal para viviendas rurales, fincas agrícolas o explotaciones ganaderas donde la conexión a la red eléctrica convencional es técnica o económicamente inviable. Diseñamos sistemas robustos y de alta fiabilidad que integran captación solar eficiente, almacenamiento de gran capacidad y sistemas de generación de apoyo totalmente automatizados. Proporcionamos toda la potencia necesaria para una vida moderna y confortable sin renunciar a la tranquilidad de vivir fuera de la red, con la garantía de un suministro eléctrico continuo, estable y 100% sostenible durante todo el año.",
    image: "/images/energia/productos/aislada-solar.png"
  },
  {
    title: "Baterías de placas solares",
    description: "Optimice su producción solar al máximo almacenando el excedente de energía generado durante las horas centrales del día para su consumo nocturno. Trabajamos exclusivamente con los sistemas de almacenamiento de litio (LiFePO4) más seguros y avanzados del mercado, como HUAWEI LUNA2000 o BYD Battery-Box. Estos sistemas modulares permiten una gestión inteligente y automatizada del flujo energético, elevando su cuota de autoconsumo directo hasta niveles cercanos al 90%. Además, ofrecen funciones críticas de backup (V-Out) que mantienen el suministro eléctrico en su hogar incluso durante cortes accidentales de la red general, aportando una capa indispensable de seguridad, autonomía y confort.",
    image: "/images/energia/productos/baterias-solar.png"
  }
];

const PROJECTS = [
  { title: "Placas Solares para Autoconsumo - Vivienda Unifamiliar Madrid", image: "/images/energia/proyectos/proyecto-autoconsumo.png" },
  { title: "Mantenimiento Preventivo y Limpieza - Instalación Residencial", image: "/images/energia/proyectos/proyecto-mantenimiento.png" },
  { title: "Instalación Fotovoltaica Aislada - Finca Rural", image: "/images/energia/proyectos/proyecto-aislada.png" },
  { title: "Sistema de Almacenamiento con Baterías de Litio - Integración Smart Home", image: "/images/energia/proyectos/proyecto-baterias.png" }
];

export default function SolarPage() {
  return (
    <main className="relative">
      <Header />
      
      {/* 2.1. Hero Informativo / Introducción */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b-2 border-foreground/20 pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <NextImage 
            src="/images/energia/solar-fallback2.png"
            alt="Energía Fotovoltaica" 
            fill 
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-20 text-center space-y-6">
          <div className="w-16 h-16 bg-accent/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mx-auto mb-4 animate-pulse">
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
