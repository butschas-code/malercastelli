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

const glowRest = "drop-shadow(0 0 8px rgba(67,147,208,0.35)) drop-shadow(0 0 18px rgba(67,147,208,0.2))";
const glowMid  = "drop-shadow(0 0 12px rgba(67,147,208,0.55)) drop-shadow(0 0 28px rgba(67,147,208,0.32))";

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
  /** Show faint blue glow – use on primary "Offerte" CTAs only */
  glow?: boolean;
};

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
  glow = false,
}: GlowingCTAButtonProps) {
  const reduceMotion = useReducedMotion();
  const isHttp =
    href != null && (href.startsWith("http://") || href.startsWith("https://"));
  const isSpecial = href != null && (href.startsWith("tel:") || href.startsWith("mailto:"));
  const useNativeAnchor = external || isHttp || isSpecial;

  const shellClass = cn(
    "relative z-10 inline-flex min-w-0 max-w-full items-center justify-center rounded-full",
    "",
    "bg-[#232d82] text-white",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4393d0] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "transition-colors hover:bg-[#1c2470]",
    "w-full sm:w-auto",
    "gap-2 text-sm font-medium",
    heights[size],
    innerPadding[size],
    disabled && "pointer-events-none opacity-50",
    className
  );

  const arrow = showArrow ? (
    <ArrowRight
      className={cn(iconSizes[size], "shrink-0 transition-transform group-hover:translate-x-1")}
      aria-hidden
    />
  ) : null;

  const inner = (
    <>
      {children}
      {arrow}
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
      {inner}
    </a>
  ) : href != null ? (
    <Link href={href} className={shellClass} onClick={onClick}>
      {inner}
    </Link>
  ) : (
    <button type={type} className={shellClass} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  );

  if (!glow) {
    return (
      <div className={cn("group relative w-full sm:w-max", wrapperClassName)}>
        {interactive}
      </div>
    );
  }

  return (
    <motion.div
      className={cn("group relative w-full sm:w-max", wrapperClassName)}
      style={{ filter: reduceMotion ? glowRest : undefined }}
      animate={
        reduceMotion
          ? {}
          : { filter: [glowRest, glowMid, glowRest] }
      }
      transition={
        reduceMotion
          ? {}
          : { duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
      }
      whileHover={reduceMotion ? {} : { filter: glowMid }}
    >
      {interactive}
    </motion.div>
  );
}
