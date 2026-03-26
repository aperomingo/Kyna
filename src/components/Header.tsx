"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Sync button state with current html class (set by inline script)
    setIsLight(document.documentElement.classList.contains("light"));

    const handleScroll = () => setScrolled(window.scrollY > 50);
    
    // Check immediately on mount/navigate
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  function toggleTheme() {
    const html = document.documentElement;
    if (html.classList.contains("light")) {
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsLight(false);
    } else {
      html.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsLight(true);
    }
  }

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
        <div className="w-10" /> {/* spacer */}
        <Link href="/" className="flex flex-col items-center space-y-2 group">
          <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center transition-all duration-500 shadow-md shadow-accent/20 group-hover:scale-110">
            <span className="text-background font-bold text-2xl rotate-90 transform-gpu" style={{ fontFamily: 'var(--font-outfit)' }}>K</span>
          </div>
          <span className={cn(
            "text-3xl font-display font-bold tracking-[0.2em] transition-colors duration-500",
            scrolled ? "text-foreground" : "text-white"
          )}>
            KYNA<span className="text-accent">GRUPO</span>
          </span>
        </Link>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Cambiar tema"
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300",
            scrolled 
              ? "border-foreground/10 text-muted-foreground hover:text-accent hover:border-accent/40" 
              : "border-white/20 text-white/80 hover:text-white hover:border-white/40"
          )}
        >
          {isLight ? <Moon size={18} /> : <Sun size={18} />}
        </button>
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
