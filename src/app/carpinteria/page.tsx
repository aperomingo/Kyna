import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProductSection from "@/components/ProductSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import ContactForm from "@/components/ContactForm";
import NextImage from "next/image";
import { Hammer } from "lucide-react";

export const metadata = {
  title: "Carpintería a Medida",
  description: "Servicios de alta ebanistería en Madrid: muebles a medida, estanterías integradas, vestidores de lujo y restauración especializada de madera.",
};

const PRODUCTS = [
  {
    title: "Muebles a Medida de Alta Ebanistería",
    description: "Donde la visión del cliente se encuentra con la maestría del ebanista. Diseñamos y fabricamos piezas icónicas que trascienden las modas: desde aparadores con marquetería contemporánea hasta mesas de comedor de una sola pieza de madera maciza. Cada mueble se construye bajo demanda, respetando los tiempos de curación de la madera y empleando ensambles tradicionales que garantizan una durabilidad de por vida. No fabricamos muebles, creamos el próximo legado de tu hogar.",
    image: "/images/carpinteria/productos/custom-muebles.png"
  },
  {
    title: "Estanterías y Librerías Integradas",
    description: "Convertimos paredes desaprovechadas en el alma de tu espacio. Nuestras librerías se diseñan en perfecta simbiosis con la arquitectura de la estancia, utilizando sistemas de anclaje invisible, iluminación LED integrada y una selección exquisita de acabados que van desde los barnices naturales hasta los lacados de alto brillo. Soluciones de almacenamiento que optimizan cada centímetro cúbico, aportando orden, sofisticación y un valor añadido indiscutible a la propiedad.",
    image: "/images/carpinteria/productos/custom-librerias.png"
  },
  {
    title: "Armarios y Vestidores Inteligentes",
    description: "La cumbre de la organización personal. Diseñamos vestidores y armarios empotrados donde cada detalle está pensado: interiores en lino o maderas exóticas, cajoneras con cierre amortiguado, pantaloneros extraíbles y sistemas de iluminación por sensor. Optimizamos el espacio con una distribución lógica y personalizada, utilizando herrajes de gama alta que aseguran un funcionamiento silencioso y fluido. Transforma tu rutina diaria con un espacio diseñado exclusivamente para tus necesidades.",
    image: "/images/carpinteria/productos/custom-vestidores.png"
  },
  {
    title: "Tratamiento y Restauración Especializada",
    description: "Devolvemos la voz a la madera antigua. Nuestro equipo de restauración combina técnicas de conservación tradicionales con los tratamientos más avanzados de la industria. Realizamos procesos meticulosos de decapado, nutrición de fibras, lijado de precisión y barnizado artesanal para recuperar el esplendor de muebles de valor sentimental o histórico. Protegemos tus piezas contra el paso del tiempo, los rayos UV y la humedad, asegurando que su belleza perdure para las futuras generaciones.",
    image: "/images/carpinteria/productos/custom-restauracion.png"
  }
];

const PROJECTS = [
  { title: "Residencial La Moraleja - Librería de Nogal con LED Integrado", image: "/images/carpinteria/proyectos/proyecto-libreria.png" },
  { title: "Ático Chamberí - Vestidor de Roble y Cristal Inteligente", image: "/images/carpinteria/proyectos/proyecto-vestidor.png" },
  { title: "Chalet en Aravaca - Mesa de Comedor de una sola pieza en Roble", image: "/images/carpinteria/proyectos/proyecto-mueble.png" },
  { title: "Palacete en Madrid - Restauración de Escritorio Luis XV", image: "/images/carpinteria/proyectos/proyecto-restauracion.png" }
];

export default function CarpinteriaPage() {
  return (
    <main className="relative">
      <Header />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b-2 border-foreground/20 pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <NextImage
            src="/images/carpinteria/carpinteria-hero.png"
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
