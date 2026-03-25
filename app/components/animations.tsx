"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, ReactNode, useState, useEffect } from "react";
import { cn } from "../lib/utils";

// Register ScrollTrigger once
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function GSAPProvider({ children }: { children: ReactNode }) {
    return <>{children}</>;
}

// --- Advanced Text Reveal (Masking) ---
export function TextReveal({ text, className = "", delay = 0, tag: Tag = "div" }: { text: string, className?: string, delay?: number, tag?: any }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const words = text.split(" ");

    useGSAP(() => {
        if (!containerRef.current) return;
        const wordElements = containerRef.current.querySelectorAll('.reveal-word');
        
        gsap.fromTo(wordElements, 
            { yPercent: 120, rotationZ: 3, opacity: 0 },
            {
                yPercent: 0,
                rotationZ: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.03,
                ease: "power4.out",
                delay: delay,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                }
            }
        );
    }, { scope: containerRef });

    return (
        <Tag ref={containerRef} className={cn("flex flex-wrap", className)}>
            {words.map((word, i) => (
                <span key={i} className="overflow-hidden mr-[0.25em] pb-[0.1em] inline-block">
                    <span className="reveal-word inline-block origin-bottom-left will-change-transform">{word}</span>
                </span>
            ))}
        </Tag>
    );
}

// --- Scroll Scrub Text (Opacity change on scroll) ---
export function ScrollScrubText({ text, className = "" }: { text: string, className?: string }) {
    const containerRef = useRef<HTMLParagraphElement>(null);
    const words = text.split(" ");

    useGSAP(() => {
        if (!containerRef.current) return;
        const wordElements = containerRef.current.querySelectorAll('.scrub-word');
        
        gsap.set(wordElements, { opacity: 0.15 });
        
        gsap.to(wordElements, {
            opacity: 1,
            stagger: 0.5,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                end: "bottom 55%",
                scrub: 0.5,
            }
        });
    }, { scope: containerRef });

    return (
        <p ref={containerRef} className={cn("flex flex-wrap leading-snug", className)}>
            {words.map((word, i) => (
                <span key={i} className="scrub-word mr-[0.25em] transition-colors duration-200">
                    {word}
                </span>
            ))}
        </p>
    );
}

// --- Magnetic Button ---
export function MagneticButton({ children, className = "", onClick, href }: { children: ReactNode, className?: string, onClick?: () => void, href?: string }) {
    const buttonRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        const text = textRef.current;
        if (!button || !text || window.innerWidth <= 768) return;

        const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });
        
        const xTextTo = gsap.quickTo(text, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTextTo = gsap.quickTo(text, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = button.getBoundingClientRect();
            
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            
            xTo(x * 0.4);
            yTo(y * 0.4);
            
            xTextTo(x * 0.2);
            yTextTo(y * 0.2);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
            xTextTo(0);
            yTextTo(0);
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const content = (
        <div ref={buttonRef} className={cn("inline-flex items-center justify-center relative cursor-hover group will-change-transform", className)} onClick={onClick}>
            <span ref={textRef} className="relative z-10 pointer-events-none w-full h-full flex items-center justify-center will-change-transform">
                {children}
            </span>
        </div>
    );

    if (href) {
        return <a href={href} className="inline-block outline-none">{content}</a>;
    }

    return content;
}

// --- Fade In Image / Content ---
export function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!ref.current) return;
        gsap.fromTo(ref.current, 
            { y: 40, opacity: 0, scale: 0.98 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                delay: delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 85%",
                }
            }
        );
    }, { scope: ref });

    return <div ref={ref} className={className}>{children}</div>;
}

// --- Horizontal Scroll Section Container ---
export function HorizontalScrollContainer({ children, className = "" }: { children: ReactNode, className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollWrapperRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current || !scrollWrapperRef.current || window.innerWidth <= 1024) return;
        
        const getScrollAmount = () => -(scrollWrapperRef.current!.scrollWidth - window.innerWidth + 100); // 100px buffer
        
        const tween = gsap.to(scrollWrapperRef.current, {
            x: getScrollAmount,
            ease: "none",
        });
        
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${scrollWrapperRef.current!.scrollWidth - window.innerWidth}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true,
        });
        
        return () => {
            tween.kill();
        };
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className={cn("overflow-hidden h-auto lg:h-screen flex items-center bg-slate-900 dark:bg-slate-950 text-white relative py-20 lg:py-0", className)}>
            <div ref={scrollWrapperRef} className="flex flex-col lg:flex-row gap-12 px-6 lg:px-32 relative will-change-transform w-full lg:w-max h-full lg:items-center">
                {children}
            </div>
        </section>
    );
}

// --- SVG Line Draw Timeline ---
export function TimelineDraw({ children }: { children: ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<SVGPathElement>(null);

    useGSAP(() => {
        if (!containerRef.current || !lineRef.current) return;
        
        // Dynamically measure path based on container height
        const height = containerRef.current.offsetHeight;
        lineRef.current.setAttribute("d", `M 2 0 L 2 ${height}`);
        const pathLength = lineRef.current.getTotalLength();
        
        gsap.set(lineRef.current, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

        gsap.to(lineRef.current, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
                end: "bottom 80%",
                scrub: 1,
            }
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full">
            <svg 
                className="absolute left-[33px] md:left-[39px] top-0 h-full w-[4px] z-0 pointer-events-none" 
                preserveAspectRatio="none"
            >
                <path 
                    ref={lineRef}
                    d={`M 2 0 L 2 1000`} 
                    className="stroke-black dark:stroke-white opacity-20"
                    strokeWidth="4"
                    fill="none"
                />
            </svg>
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
}

// --- Entry Stagger ---
export function StaggerContainer({ children, className = "" }: { children: ReactNode, className?: string }) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!ref.current) return;
        gsap.fromTo(ref.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 85%",
                }
            }
        );
    }, { scope: ref });

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
