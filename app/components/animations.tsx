"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

// Register ScrollTrigger once
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// --- Provider ---
export function GSAPProvider({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

// --- Hero Animation ---
export function HeroEntrance({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        // Use fromTo to ensure we end up at opacity 1
        gsap.fromTo(containerRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.2,
            }
        );
    }, { scope: containerRef });

    return <div ref={containerRef}>{children}</div>;
}

// --- Fade In on Scroll ---
export function FadeIn({
    children,
    delay = 0,
    direction = "up",
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const el = ref.current;
        if (!el) return;

        let x = 0,
            y = 0;
        if (direction === "up") y = 50;
        if (direction === "down") y = -50;
        if (direction === "left") x = 50;
        if (direction === "right") x = -50;

        gsap.fromTo(
            el,
            { x, y, opacity: 0 },
            {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 1,
                delay: delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, { scope: ref });

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}

// --- Stagger Container for Grids ---
export function StaggerContainer({
    children,
    className = "",
    stagger = 0.1,
}: {
    children: React.ReactNode;
    className?: string;
    stagger?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!ref.current) return;

        // Explicitly animate to opacity 1 to avoid Strict Mode sticking issues
        gsap.fromTo(ref.current.children,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: stagger,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                },
            }
        );
    }, { scope: ref });

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
