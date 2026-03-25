"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { sendEmailAction } from "@/app/actions";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  division?: "puertasytarima" | "carpinteria" | "iluminacion" | "solar";
}

export default function ContactForm({ division }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    if (division) formData.append("division", division);
    setStatus("loading");
    try {
      const result = await sendEmailAction(formData);
      if (result.success) {
        setStatus("success");
        setMessage("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
      } else {
        setStatus("error");
        setMessage("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Algo salió mal. Por favor, inténtalo más tarde.");
    }
  }

  if (status === "success") {
    return (
      <div className="glass-accent p-8 rounded-2xl text-center space-y-4 animate-fade-in">
        <CheckCircle className="mx-auto text-solar w-12 h-12" />
        <h3 className="text-2xl font-bold">¡Gracias!</h3>
        <p className="text-muted-foreground">{message}</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-accent hover:underline font-semibold"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Tu nombre completo"
          className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Tu Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="nombre@ejemplo.com"
          className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Asunto
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="¿En qué podemos ayudarte?"
          className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Cuéntanos más sobre tu proyecto..."
          className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
        ></textarea>
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm font-medium">{message}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "w-full py-4 bg-accent text-white rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98]",
          status === "loading" && "opacity-70 cursor-not-allowed"
        )}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="animate-spin" />
            <span>Enviando...</span>
          </>
        ) : (
          <>
            <Send size={20} />
            <span>Enviar mensaje</span>
          </>
        )}
      </button>
    </form>
  );
}
