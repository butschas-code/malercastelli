"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { business, images } from "@/data/business";
import { GlowingCTAButton } from "@/components/ui/GlowingCTAButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/dienstleistungen", label: "Dienstleistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  return (
    <>
      {/* ── Fixed header ────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)]"
      >
        <motion.div
          animate={{
            backgroundColor: scrolled
              ? "rgba(253,252,250,0.93)"
              : "rgba(0,0,0,0)",
            boxShadow: scrolled
              ? "0 1px 0 rgba(0,0,0,0.07), 0 4px 20px rgba(0,0,0,0.06)"
              : "none",
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            height: scrolled ? 96 : 136,
            transition: "height 0.4s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div className="container mx-auto flex h-full items-center justify-between px-4">

            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center"
              aria-label={`${business.name} – Startseite`}
            >
              <motion.div
                animate={{ scale: scrolled ? 0.7 : 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="origin-left"
              >
                <Image
                  src={images.logo}
                  alt={business.name}
                  width={633}
                  height={193}
                  className={cn(
                    "h-[72px] w-auto max-w-[22rem] object-contain object-left sm:h-[80px] sm:max-w-[27rem]",
                    "transition-[filter] duration-400 ease-out"
                  )}
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 select-none",
                      scrolled
                        ? isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                        : isActive
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className={cn(
                          "absolute inset-0 rounded-full",
                          scrolled
                            ? "bg-foreground/[0.07] ring-1 ring-inset ring-foreground/[0.09]"
                            : "bg-white/[0.15] ring-1 ring-inset ring-white/25"
                        )}
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}

              <div className="ml-3">
                <GlowingCTAButton href="/offerte-anfragen" size="sm">
                  Offerte Anfragen
                </GlowingCTAButton>
              </div>
            </nav>

            {/* Mobile hamburger */}
            <button
              type="button"
              className={cn(
                "md:hidden p-2.5 -mr-1 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation",
                scrolled ? "hover:bg-black/[0.06]" : "hover:bg-white/[0.12]"
              )}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Menü schliessen" : "Menü öffnen"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.16, ease: "easeOut" }}
                  className={scrolled ? "text-foreground" : "text-white"}
                >
                  {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* ── Mobile menu ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px] md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 360, damping: 30 }}
              className="fixed top-[calc(env(safe-area-inset-top)+8.5rem)] left-3 right-3 z-50 rounded-2xl border border-black/[0.08] bg-[rgba(253,252,250,0.97)] backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.14),0_2px_8px_rgba(0,0,0,0.06)] md:hidden overflow-hidden"
            >
              <nav className="p-2">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.22, ease: "easeOut" }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-colors duration-150 touch-manipulation",
                          isActive
                            ? "bg-foreground/[0.06] text-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-black/[0.04]"
                        )}
                        onClick={() => setMobileOpen(false)}
                      >
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full shrink-0",
                            isActive ? "bg-[#232d82]" : "bg-foreground/20"
                          )}
                        />
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="px-3 pb-3 pt-1 flex flex-col gap-2">
                <GlowingCTAButton
                  href="/offerte-anfragen"
                  size="md"
                  wrapperClassName="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Offerte Anfragen
                </GlowingCTAButton>
                <a
                  href={`tel:${business.contact.phone}`}
                  className="flex items-center justify-center gap-2 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone className="h-3 w-3" />
                  <span className="font-medium">{business.contact.phone}</span>
                </a>
              </div>

              <div className="border-t border-black/[0.06] px-5 py-2.5 bg-black/[0.02]">
                <p className="text-center text-[9.5px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                  Castelli AG · Luzern · Seit {business.founded}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
