"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "../lib/utils";

export function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide default cursor on body if not mobile
    if (typeof window !== "undefined" && window.innerWidth > 768) {
      document.body.style.cursor = 'none';
    }

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    // quickSetter is completely instant without tweening, perfectly locking the dot to the mouse
    const xDot = gsap.quickSetter(dot, "x", "px");
    const yDot = gsap.quickSetter(dot, "y", "px");
    
    // Ring follows slightly slower for smooth drag effect
    const xRing = gsap.quickTo(ring, "x", { duration: 0.15, ease: "power3.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.15, ease: "power3.out" });

    const moveCursor = (e: MouseEvent) => {
      xDot(e.clientX - 8); // Center 4px wrapper (width is 16px now: 4 for center offset? Wait, w-4 h-4 is 16px. Half is 8px)
      yDot(e.clientY - 8);
      
      xRing(e.clientX - 16); // w-8 h-8 is 32px. Half is 16px
      yRing(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Elements that should trigger hover state
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Hide entirely on mobile (CSS media query used for hiding)
  return (
    <>
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference w-4 h-4"
      >
        <div 
          className={cn(
            "w-2 h-2 rounded-full transition-all duration-300",
            isHovering ? "scale-0 opacity-0" : "bg-white scale-100 opacity-100"
          )}
        />
      </div>
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:flex items-center justify-center w-8 h-8"
      >
        <div 
          className={cn(
            "w-full h-full rounded-full border border-slate-500 transition-all duration-300",
            isHovering ? "scale-[2.5] bg-white/10 dark:bg-white/20 border-transparent shadow-[0_0_20px_rgba(255,255,255,0.2)] backdrop-blur-sm" : "scale-100 bg-transparent"
          )}
        />
      </div>
    </>
  );
}
