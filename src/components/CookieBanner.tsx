"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, Check, Shield } from "lucide-react";

type CookieConsent = "all" | "necessary" | "denied" | null;

export default function CookieBanner() {
  const [consent, setConsent] = useState<CookieConsent>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent") as CookieConsent;
    if (!stored) {
      // Small delay for a smooth entrance
      setTimeout(() => setVisible(true), 800);
    } else {
      setConsent(stored);
    }
  }, []);

  function accept(type: CookieConsent) {
    localStorage.setItem("cookie-consent", type as string);
    setConsent(type);
    setVisible(false);
  }

  if (!visible || consent !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 animate-slide-up">
      <div className="max-w-5xl mx-auto glass border-white/10 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden bg-background/90 backdrop-blur-2xl">
        {/* Main banner */}
        <div className="p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent shrink-0">
              <Cookie size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">Usamos cookies</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación. Puedes aceptarlas todas, solo las necesarias o rechazarlas.{" "}
                {/* <Link href="/privacidad" className="text-accent hover:underline"> */}
                <Link href="/#" className="text-accent hover:underline">
                  Más información
                </Link>
              </p>
            </div>
          </div>

          {/* Details toggle */}
          {showDetails && (
            <div className="mb-6 space-y-3 text-sm text-muted-foreground border border-white/10 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <Check size={16} className="text-green-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground">Cookies necesarias</span>
                  <p>Imprescindibles para el funcionamiento correcto del sitio web. No se pueden desactivar.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield size={16} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground">Cookies de análisis</span>
                  <p>Nos permiten analizar el uso del sitio para mejorar nuestra oferta de servicios.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Cookie size={16} className="text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground">Cookies de personalización</span>
                  <p>Permiten recordar tus preferencias para ofrecerte una experiencia más personalizada.</p>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => accept("all")}
              className="w-full sm:w-auto flex-1 py-3 px-6 bg-accent text-background rounded-xl font-bold text-sm hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Aceptar todas
            </button>
            <button
              onClick={() => accept("necessary")}
              className="w-full sm:w-auto flex-1 py-3 px-6 border border-white/20 text-foreground rounded-xl font-semibold text-sm hover:border-accent/50 hover:text-accent transition-all"
            >
              Solo necesarias
            </button>
            <button
              onClick={() => accept("denied")}
              className="w-full sm:w-auto flex-1 py-3 px-6 text-muted-foreground rounded-xl font-semibold text-sm hover:text-foreground transition-all"
            >
              Rechazar
            </button>
            <button
              onClick={() => setShowDetails((v) => !v)}
              className="w-full sm:w-auto py-3 px-4 text-muted-foreground text-sm hover:text-foreground transition-colors underline underline-offset-2"
            >
              {showDetails ? "Ocultar detalles" : "Ver detalles"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
