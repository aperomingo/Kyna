import Link from "next/link";
import NextImage from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { ArrowRight, ChevronDown, ShieldCheck, Layers, Hammer, Lightbulb, Zap, DoorOpen } from "lucide-react";

const GROUP_SERVICES = [
  {
    id: "carpinteria",
    title: "Carpintería",
    description: "Muebles a medida, estanterías, armarios y restauración de madera con maestría artesanal.",
    icon: <Hammer className="w-8 h-8" />,
    href: "/carpinteria",
    image: "/images/carpinteria/carpinteria-card.png",
    color: "from-orange-500/20 to-transparent"
  },
  {
    id: "puertas-y-tarima",
    title: "Puertas y Tarima",
    description: "Puertas de diseño y suelos de tarima de alta calidad. Elegancia y carácter en cada acceso y bajo sus pies.",
    icon: <DoorOpen className="w-8 h-8" />,
    href: "/puertas-y-tarima",
    image: "/images/puertas-y-tarima/puertas-tarima-hero.png",
    color: "from-amber-500/20 to-transparent"
  },
  {
    id: "iluminacion-ambiental",
    title: "Iluminación Ambiental",
    description: "Atmósferas diseñadas a través de la luz para interiores y exteriores.",
    icon: <Lightbulb className="w-8 h-8" />,
    href: "/iluminacion-ambiental",
    image: "/images/iluminacion/lighting.png",
    color: "from-yellow-500/20 to-transparent"
  },
  {
    id: "energia-fotovoltaica",
    title: "Energía Fotovoltaica",
    description: "Sostenibilidad y ahorro energético con sistemas solares de última generación.",
    icon: <Zap className="w-8 h-8" />,
    href: "/energia-fotovoltaica",
    image: "/images/energia/solar-fallback.png",
    color: "from-green-500/20 to-transparent"
  }
];

export default function Home() {
  return (
    <main className="relative">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden border-b-2 border-foreground/20 pt-24">
        <div className="absolute inset-x-0 inset-y-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent z-10" />
          <NextImage 
            src="/images/home/hero-composite.png" 
            alt="Grupo Kyna" 
            fill 
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center space-y-12">
          <div className="inline-flex items-center space-x-2 px-6 py-2 bg-accent/10 border border-accent/20 rounded-full animate-fade-in shadow-2xl shadow-accent/10">
            <ShieldCheck className="text-accent w-4 h-4" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Excelencia Grupo Kyna</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none tracking-tighter text-white animate-slide-up">
            KYNA<span className="text-accent">GRUPO</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/90 leading-relaxed animate-fade-in delay-300 font-light">
            Un ecosistema de especialización dedicado a la transformación de espacios. Cuatro divisiones independientes, una misma filosofía de calidad y rigor.
          </p>

          <a href="#about" className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/70 text-accent animate-bounce mx-auto">
            <ChevronDown size={24} />
          </a>
        </div>
      </section>

      {/* Group Description Section */}
      <Section id="about" dark className="pt-32 pb-48">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-display font-bold">Cuatro Divisiones, <br /><span className="text-accent">Una Visión Integral</span></h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="text-xl md:text-2xl text-muted-foreground leading-relaxed space-y-8 text-justify md:text-center">
            <p>
              <strong className="text-foreground">Grupo Kyna</strong> no es solo una empresa de reformas; es el punto de encuentro de cuatro grupos de trabajo altamente especializados e independientes. Nuestra estructura única nos permite abordar cada proyecto con la profundidad técnica de un experto y la visión cohesiva de un equipo multidisciplinar.
            </p>
            <p>
              Cada una de nuestras unidades operativas — <span className="text-accent">Carpintería</span>, <span className="text-accent">Puertas y Tarima</span>, <span className="text-accent">Iluminación</span> y <span className="text-accent">Energía Fotovoltaica</span> — cuenta con sus propios artesanos, técnicos y procesos. Esta independencia garantiza la excelencia en el detalle, mientras que nuestra identidad de grupo asegura una ejecución armónica en proyectos.
            </p>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
        {GROUP_SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col gap-3">
              {/* Card */}
              <Link
                href={service.href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-[2rem] glass transition-all hover:scale-[1.02] hover:-translate-y-2 border-white/5"
              >
                {/* Image Layer */}
              <div className="absolute inset-0 opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                <NextImage 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
                {/* Content Layer */}
                <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-colors duration-500">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <div className="pt-4 flex items-center text-accent font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
                    Ver Detalles <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
              {/* Buttons */}
              <div className="flex gap-2">
                <Link
                  href={`${service.href}#projects`}
                  className="flex-1 py-3 rounded-2xl border-2 border-foreground/30 text-foreground font-bold text-sm text-center hover:border-accent hover:text-accent transition-all duration-300"
                >
                  Ver Proyectos
                </Link>
                <Link
                  href={`${service.href}#quote`}
                  className="flex-1 py-3 rounded-2xl border-2 border-accent text-accent font-bold text-sm text-center hover:bg-accent hover:text-background transition-all duration-300"
                >
                  Presupuesto
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Methodology Section */}
      <Section id="methodology" className="pb-48">
        <div className="text-center space-y-4 mb-24">
          <h2 className="text-5xl md:text-7xl font-display font-bold">
            El Método <span className="text-accent">Kyna</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cuatro pilares fundamentan nuestra forma de transformar espacios en hogares de ensueño.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Excelencia Técnica",
              desc: "Cada división opera con sus propios estándares de rigor artesanal y técnico.",
              icon: <ShieldCheck className="w-8 h-8" />
            },
            {
              title: "Visión de Conjunto",
              desc: "Coordinación total para proyectos que integran múltiples servicios especializados.",
              icon: <Layers className="w-8 h-8" />
            },
            {
              title: "Compromiso Sostenible",
              desc: "Priorizamos soluciones que minimizan el impacto ambiental y maximizan el ahorro.",
              icon: <Zap className="w-8 h-8" />
            },
            {
              title: "Atención Exclusiva",
              desc: "Un interlocutor experto para cada una de sus necesidades especializadas.",
              icon: <ArrowRight className="w-8 h-8" />
            }
          ].map((pillar, idx) => (
            <div key={idx} className="glass p-10 rounded-[2.5rem] space-y-6 hover:border-accent/30 transition-colors group">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500">
                {pillar.icon}
              </div>
              <h4 className="text-2xl font-bold">{pillar.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
