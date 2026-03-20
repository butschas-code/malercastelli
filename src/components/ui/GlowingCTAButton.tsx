"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const heights = {
  sm: "h-10",
  md: "h-12",
  lg: "h-14",
} as const;

const innerPadding = {
  sm: "px-5",
  md: "px-6",
  lg: "px-8",
} as const;

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-4 w-4",
  lg: "h-5 w-5",
} as const;

/** Full 360° conic with two blues (no deg syntax quirks in all engines) */
const CONIC_BG =
  "conic-gradient(from 0deg, #202d86 0%, #0295d5 33%, #202d86 66%, #0295d5 100%)";

function RotatingConicRing({ paused }: { paused: boolean }) {
  return (
    <span
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden rounded-[inherit]"
      aria-hidden
    >
      <motion.span
        className="aspect-square w-[260%] max-w-none shrink-0 rounded-none"
        style={{ background: CONIC_BG }}
        animate={paused ? { rotate: 0 } : { rotate: 360 }}
        transition={
          paused
            ? { duration: 0 }
            : {
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }
        }
      />
    </span>
  );
}

export type GlowingCTAButtonProps = {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  type?: "button" | "submit";
  size?: keyof typeof heights;
  variant?: "solid" | "surface";
  showArrow?: boolean;
  className?: string;
  wrapperClassName?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const glowRest =
  "drop-shadow(0 0 10px rgba(2,149,213,0.5)) drop-shadow(0 0 24px rgba(32,45,134,0.4))";
const glowMid =
  "drop-shadow(0 0 16px rgba(2,149,213,0.7)) drop-shadow(0 0 34px rgba(32,45,134,0.55))";

/**
 * Glowing CTA: Framer Motion rotates the conic (avoids CSS transform bugs with Tailwind).
 * Pulsing outer glow via filter drop-shadow.
 */
export function GlowingCTAButton({
  children,
  href,
  external,
  type = "button",
  size = "md",
  variant = "solid",
  showArrow = false,
  className,
  wrapperClassName,
  onClick,
  disabled,
}: GlowingCTAButtonProps) {
  const reduceMotion = useReducedMotion();
  const isHttp =
    href != null && (href.startsWith("http://") || href.startsWith("https://"));
  const isSpecial = href != null && (href.startsWith("tel:") || href.startsWith("mailto:"));
  const useNativeAnchor = external || isHttp || isSpecial;

  const shellClass = cn(
    "relative z-10 inline-flex min-w-0 max-w-full items-stretch overflow-hidden rounded-full",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0295d5] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "w-full sm:w-auto",
    heights[size],
    disabled && "pointer-events-none opacity-50",
    className
  );

  const innerSurface = cn(
    "relative z-[2] flex min-h-0 min-w-0 flex-1 items-center justify-center gap-2 rounded-full py-1 text-sm font-medium transition-colors",
    "m-[3px]",
    innerPadding[size],
    variant === "solid"
      ? "cursor-pointer bg-slate-950 text-white group-hover:bg-slate-900/90"
      : "cursor-pointer bg-background text-foreground shadow-sm group-hover:bg-muted/90"
  );

  const layers = (
    <>
      <RotatingConicRing paused={!!reduceMotion} />
      <span className={innerSurface}>
        {children}
        {showArrow ? (
          <ArrowRight
            className={cn(
              iconSizes[size],
              "shrink-0 transition-transform group-hover:translate-x-1"
            )}
            aria-hidden
          />
        ) : null}
      </span>
    </>
  );

  const interactive = useNativeAnchor ? (
    <a
      href={href}
      className={shellClass}
      onClick={onClick}
      rel={isHttp ? "noopener noreferrer" : undefined}
      target={isHttp ? "_blank" : undefined}
    >
      {layers}
    </a>
  ) : href != null ? (
    <Link href={href} className={shellClass} onClick={onClick}>
      {layers}
    </Link>
  ) : (
    <button type={type} className={shellClass} onClick={onClick} disabled={disabled}>
      {layers}
    </button>
  );

  return (
    <motion.div
      className={cn("group relative w-full sm:w-max", wrapperClassName)}
      style={{ filter: reduceMotion ? glowRest : undefined }}
      animate={
        reduceMotion
          ? {}
          : {
              filter: [glowRest, glowMid, glowRest],
            }
      }
      transition={
        reduceMotion
          ? {}
          : {
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }
      }
      whileHover={
        reduceMotion
          ? {}
          : {
              filter: glowMid,
            }
      }
    >
      {interactive}
    </motion.div>
  );
}
