import Link from "next/link";
import NextImage from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-white/5 pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link href="/" className="relative block h-10 w-44 transition-all hover:scale-105">
            <NextImage 
              src="/images/brand/logo-blanco.png" 
              alt="Grupo Kyna" 
              fill 
              sizes="200px"
              className="object-contain object-left"
            />
          </Link>
          <p className="text-muted-foreground leading-relaxed">
            Transformando espacios con elegancia y sostenibilidad. Expertos en reformas y soluciones energéticas.
          </p>
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/kynaobras?igsh=MTZ6Z2lnOGwwNHllMg==" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-accent/20 hover:text-accent transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.074 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.419.42.679.819.896 1.377.164.422.359 1.057.413 2.227.059 1.265.074 1.647.074 4.85s-.015 3.585-.074 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.558-.477.957-.896 1.377-.42.419-.819.679-1.377.896-.422.164-1.057.359-2.227.413-1.265.059-1.647.074-4.85.074s-3.585-.015-4.85-.074c-1.17-.054-1.805-.249-2.227-.413-.558-.217-.957-.477-1.377-.896-.419-.42-.679-.819-.896-1.377-.164-.422-.359-1.057-.413-2.227-.059-1.265-.074-1.647-.074-4.85s.016-3.585.074-4.85c.054-1.17.249-1.805.413-2.227.217-.558.477-.957.896-1.377.42-.419.819-.679 1.377-.896.422-.164 1.057-.359 2.227-.413 1.265-.059 1.647-.074 4.85-.074zm0 3.678c-3.405 0-6.162 2.757-6.162 6.162 0 3.405 2.757 6.162 6.162 6.162 3.405 0 6.162-2.757 6.162-6.162 0-3.405-2.757-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.645-1.44-1.44 0-.795.645-1.44 1.44-1.44.795 0 1.44.645 1.44 1.44z" />
              </svg>
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
            <li><Link href="/privacidad" className="hover:text-accent transition-colors">Privacidad</Link></li>
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
      
      <div className="container mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Kyna Obras. Todos los derechos reservados.</p>
        <p className="mt-2 md:mt-0">Diseñado con <span className="text-accent">♥</span> para un futuro sostenible.</p>
      </div>
    </footer>
  );
}
