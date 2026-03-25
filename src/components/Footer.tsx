import Link from "next/link";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

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
            <Link href="https://www.instagram.com/kynaobras?igsh=MTZ6Z2lnOGwwNHllMg==" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-accent/20 hover:text-accent transition-all">
              <Instagram size={20} />
            </Link>
            <Link href="https://www.tiktok.com/@kyna.obras?_r=1&_t=ZN-94w3a5bp6E3" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-accent/20 hover:text-accent transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Servicios</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li><Link href="/#" className="hover:text-accent transition-colors">Carpintería</Link></li>
            <li><Link href="/puertas-y-tarima" className="hover:text-accent transition-colors">Puertas y Tarima</Link></li>
            <li><Link href="/#" className="hover:text-accent transition-colors">Iluminación Ambiental</Link></li>
            <li><Link href="/#" className="hover:text-accent transition-colors">Energía Fotovoltaica</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Empresa</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li><Link href="/#about" className="hover:text-accent transition-colors">Sobre Nosotros</Link></li>
            <li><Link href="/#" className="hover:text-accent transition-colors">Privacidad</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Contacto</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start space-x-3">
              <MapPin size={20} className="text-accent shrink-0 mt-1" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Calle+Real+120+nave+13+28983+Parla+Madrid"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Calle Real, 120, nave 13<br />28983 Parla, Madrid
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={20} className="text-accent shrink-0" />
              <a href="tel:+34633938034" className="hover:text-accent transition-colors">+34 633 938 034</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={20} className="text-accent shrink-0" />
              <a href="mailto:administracion@kynaobras.com" className="hover:text-accent transition-colors">administracion@kynaobras.com</a>
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
