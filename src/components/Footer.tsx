import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-white/5 pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
              <span className="text-background font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-display font-bold tracking-tighter text-foreground">
              KYNA<span className="text-accent">OBRAS</span>
            </span>
          </Link>
          <p className="text-muted-foreground leading-relaxed">
            Transformando espacios con elegancia y sostenibilidad. Expertos en reformas integrales y soluciones energéticas.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent/20 hover:text-accent transition-all">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent/20 hover:text-accent transition-all">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent/20 hover:text-accent transition-all">
              <Twitter size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Servicios</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li><Link href="/suelos-tarima" className="hover:text-accent transition-colors">Suelos de Tarima</Link></li>
            <li><Link href="/puertas" className="hover:text-accent transition-colors">Puertas de Diseño</Link></li>
            <li><Link href="/iluminacion-ambiental" className="hover:text-accent transition-colors">Iluminación Ambiental</Link></li>
            <li><Link href="/energia-fotovoltaica" className="hover:text-accent transition-colors">Energía Fotovoltaica</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Empresa</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li><Link href="/#about" className="hover:text-accent transition-colors">Sobre Nosotros</Link></li>
            <li><Link href="/#projects" className="hover:text-accent transition-colors">Proyectos</Link></li>
            <li><Link href="/#contact" className="hover:text-accent transition-colors">Contacto</Link></li>
            <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacidad</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Contacto</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start space-x-3">
              <MapPin size={20} className="text-accent shrink-0" />
              <span>Calle Gran Vía, 12<br />28013 Madrid, España</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={20} className="text-accent shrink-0" />
              <span>+34 912 345 678</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={20} className="text-accent shrink-0" />
              <span>info@kynaobras.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Kyna Obras. Todos los derechos reservados.</p>
        <p className="mt-2 md:mt-0">Diseñado con <span className="text-accent">♥</span> para un futuro sostenible.</p>
      </div>
    </footer>
  );
}
