import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Política de Privacidad | Kyna Obras",
  description: "Política de privacidad y protección de datos de Kyna Obras conforme al RGPD.",
};

export default function PrivacidadPage() {
  return (
    <main className="relative">
      <Header />

      {/* Hero */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden bg-muted border-b-2 border-foreground/20">
        <div className="container mx-auto px-6 text-center space-y-4">
          <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mx-auto">
            <Shield size={28} />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold">Política de Privacidad</h1>
          <p className="text-muted-foreground">Última actualización: marzo de 2026</p>
        </div>
      </section>

      <Section id="privacy">
        <div className="max-w-4xl mx-auto space-y-12 text-muted-foreground leading-relaxed">

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Responsable del Tratamiento</h2>
            <p>
              En cumplimiento del <strong className="text-foreground">Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD)</strong> y la <strong className="text-foreground">Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)</strong>, le informamos que el responsable del tratamiento de sus datos personales es:
            </p>
            <ul className="space-y-2 pl-6 list-disc">
              <li><strong className="text-foreground">Razón social:</strong> Kyna Obras</li>
              <li><strong className="text-foreground">Domicilio:</strong> Calle Real, 120, nave 13, 28983 Parla, Madrid</li>
              <li><strong className="text-foreground">Email de contacto:</strong> administracion@kynaobras.com</li>
              <li><strong className="text-foreground">Teléfono:</strong> +34 633 938 034</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Finalidad del Tratamiento</h2>
            <p>Los datos personales que nos facilite a través de los formularios de contacto de este sitio web serán tratados con las siguientes finalidades:</p>
            <ul className="space-y-2 pl-6 list-disc">
              <li>Gestionar las solicitudes de información, contacto y presupuesto realizadas por el usuario.</li>
              <li>Enviar la información solicitada y responder a las consultas formuladas.</li>
              <li>En su caso, remitir comunicaciones comerciales relacionadas con nuestros servicios, siempre con el consentimiento previo del usuario.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Base Jurídica del Tratamiento</h2>
            <p>La base legal para el tratamiento de sus datos es:</p>
            <ul className="space-y-2 pl-6 list-disc">
              <li><strong className="text-foreground">Consentimiento del interesado</strong> (art. 6.1.a RGPD): al enviar el formulario de contacto, el usuario presta su consentimiento expreso para el tratamiento de sus datos.</li>
              <li><strong className="text-foreground">Interés legítimo</strong> (art. 6.1.f RGPD): para la gestión de la relación precontractual y comercial.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Conservación de los Datos</h2>
            <p>
              Los datos personales proporcionados se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y, en todo caso, durante los plazos de prescripción legal aplicables. Una vez cumplida la finalidad, los datos serán suprimidos o anonimizados.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Destinatarios de los Datos</h2>
            <p>
              Los datos no serán cedidos a terceros salvo obligación legal. No se realizan transferencias internacionales de datos fuera del Espacio Económico Europeo.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Derechos del Interesado</h2>
            <p>Conforme al RGPD y la LOPDGDD, el usuario tiene derecho a:</p>
            <ul className="space-y-2 pl-6 list-disc">
              <li><strong className="text-foreground">Acceso:</strong> conocer qué datos personales tratamos sobre usted.</li>
              <li><strong className="text-foreground">Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
              <li><strong className="text-foreground">Supresión:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
              <li><strong className="text-foreground">Oposición:</strong> oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
              <li><strong className="text-foreground">Limitación:</strong> solicitar la restricción del tratamiento de sus datos.</li>
              <li><strong className="text-foreground">Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.</li>
            </ul>
            <p>
              Para ejercer estos derechos, puede dirigirse a <strong className="text-foreground">administracion@kynaobras.com</strong>, indicando el derecho que desea ejercer y adjuntando una copia de su DNI o documento identificativo equivalente.
            </p>
            <p>
              Si considera que el tratamiento no se ajusta a la normativa, puede presentar una reclamación ante la <strong className="text-foreground">Agencia Española de Protección de Datos (AEPD)</strong> en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.aepd.es</a>.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">7. Seguridad de los Datos</h2>
            <p>
              Kyna Obras ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">8. Uso de Cookies</h2>
            <p>
              Este sitio web puede utilizar cookies técnicas necesarias para su correcto funcionamiento. No se utilizan cookies de rastreo o publicitarias sin el consentimiento previo del usuario. Para más información, consulte nuestra política de cookies.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">9. Cambios en la Política de Privacidad</h2>
            <p>
              Kyna Obras se reserva el derecho a modificar la presente política de privacidad para adaptarla a cambios legislativos o mejoras en nuestros servicios. En tal caso, se anunciará en esta página con la fecha de actualización correspondiente.
            </p>
          </div>

          <div className="pt-8 border-t border-white/10">
            <Link href="/" className="text-accent hover:underline font-semibold">← Volver al inicio</Link>
          </div>

        </div>
      </Section>

      <Footer />
    </main>
  );
}
