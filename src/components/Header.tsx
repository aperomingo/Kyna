"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import NextImage from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    
    // Check immediately on mount/navigate
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "py-4 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-md shadow-black/5"
          : "py-8 bg-background/40 backdrop-blur-md"
      )}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <div className="w-10" /> {/* Left spacer to keep centering */}
        <Link href="/" className="relative block h-10 md:h-12 w-48 transition-all duration-500 hover:scale-105">
          <NextImage 
            src="/images/brand/logo-blanco.png" 
            alt="Grupo Kyna"
            fill 
            sizes="200px"
            priority
            className="object-contain"
          />
        </Link>
        <div className="w-10" /> {/* Right spacer to keep centering */}
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
