"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "py-4" : "py-8"
      )}
    >
      <nav className="container mx-auto px-6 flex justify-center items-center">
        <Link href="/" className="flex flex-col items-center space-y-2 group">
          <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-1000 shadow-xl shadow-accent/20">
            <span className="text-background font-bold text-2xl">K</span>
          </div>
          <span className="text-3xl font-display font-bold tracking-[0.2em] text-foreground group-hover:text-accent transition-colors">
            KYNA<span className="text-accent">GROUP</span>
          </span>
        </Link>
      </nav>
      
      {/* Decorative glass bar that appears on scroll */}
      <div 
        className={cn(
          "absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-0"
        )}
      />
    </header>
  );
}
