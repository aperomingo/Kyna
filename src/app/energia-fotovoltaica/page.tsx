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
    title: "Paneles N-Type de Alta Eficiencia",
    description: "La vanguardia tecnológica en tu tejado. Instalamos paneles de última generación con células N-Type de silicio monocristalino, que ofrecen tasas de degradación mínimas y una eficiencia superior al 22%. Estos módulos están diseñados para captar energía incluso con luz difusa en días nublados y presentan un coeficiente de temperatura excelente, manteniendo un rendimiento alto incluso en las jornadas más calurosas del verano. Potencia máxima, durabilidad garantizada por 25 años y una estética 'Full Black' elegante para tu hogar.",
    image: "/images/energia/productos/solar-product.png"
  },
  {
    title: "Sistemas de Almacenamiento de Litio Ferro-Fosfato",
    description: "Hacia la independencia energética total. Nuestras baterías de tecnología LiFePO4 son las más seguras y duraderas del mercado. Permiten almacenar el excedente de energía producido durante las horas centrales del día para que puedas consumirlo de forma gratuita cuando el sol se pone, reduciendo drásticamente tu factura eléctrica. Sistemas modulares y compactos que se integran perfectamente en cualquier espacio, con miles de ciclos de carga garantizados y una gestión de descarga inteligente.",
    image: "/images/energia/productos/solar-product.png"
  },
  {
    title: "Inversores Híbridos de Gestión Inteligente",
    description: "El cerebro tecnológico de tu instalación. Nuestros inversores híbridos no solo convierten la energía solar en electricidad para tu hogar; gestionan de forma proactiva el flujo entre paneles, baterías, red eléctrica y cargas críticas. Gracias a nuestra plataforma de monitorización en la nube, podrás visualizar en tiempo real la producción y el ahorro desde tu móvil. Cuentan con funciones avanzadas de backup para mantener tu casa iluminada incluso durante un corte de suministro de la red general.",
    image: "/images/energia/productos/solar-product.png"
  }
];

const PROJECTS = [
  { title: "Comunidad de Vecinos - Autoconsumo Colectivo", image: "/images/energia/proyectos/solar-project.png" },
  { title: "Vivienda Aislada - Sistema Off-grid", image: "/images/energia/proyectos/solar-project.png" },
  { title: "Nave Industrial - Instalación de 50kWp", image: "/images/energia/proyectos/solar-project.png" }
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
