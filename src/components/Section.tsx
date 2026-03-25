"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Section({ id, children, className, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding min-h-[70vh] flex flex-col justify-center relative overflow-hidden border-b-2 border-foreground/10",
        dark ? "bg-background" : "bg-muted/30",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}
