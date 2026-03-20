import { cva } from "class-variance-authority";

/**
 * Shared button variant classes – safe to use in both server and client components.
 */
export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        /** Brand CTA – solid */
        cta: "bg-[#0295d5] text-white shadow-sm hover:bg-[#0280c2] focus-visible:ring-2 focus-visible:ring-[#0295d5]/40",
        /** Brand CTA – outline (on light backgrounds) */
        ctaOutline:
          "border-2 border-[#0295d5] bg-transparent text-[#0295d5] hover:bg-[#0295d5]/10",
        outline: "border border-input bg-background hover:bg-muted hover:text-muted-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
