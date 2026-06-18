"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, CloseIcon } from "@/components/icons";

const NAV_LINKS = [
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Non-Profits", href: "/non-profits" },
  { label: "Batteries", href: "/batteries" },
  { label: "EV Chargers", href: "/ev-chargers" },
  { label: "Service & Repairs", href: "/service-repairs" },
  { label: "Solar Incentives", href: "/solar-incentives" },
  { label: "About Us", href: "/about" },
];

interface SiteHeaderProps {
  alwaysScrolled?: boolean;
}

export function SiteHeader({ alwaysScrolled = false }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(alwaysScrolled);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (alwaysScrolled) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysScrolled]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          transition: "all 0.3s ease",
          padding: "24px 0",
          ...(scrolled
            ? {
                background: "rgba(254,254,254,0.97)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
              }
            : {
                background: "transparent",
              }),
        }}
      >
        <div className="virya-wrapper flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/4asolar-logo.png"
              width={120}
              height={52}
              alt="4A Solar"
              priority
              style={{ display: "block", filter: scrolled ? "none" : "drop-shadow(0 1px 3px rgba(0,0,0,0.6))" }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "15px",
                  textDecoration: "none",
                  color: scrolled ? "#1f1e1e" : "#ffffff",
                  transition: "color 0.3s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href="tel:773-502-1529"
              className="virya-btn-primary"
              style={{ padding: "10px 20px", fontSize: 14, whiteSpace: "nowrap" }}
            >
              773-502-1529
            </a>
          </div>

          <button
            className="lg:hidden flex items-center justify-center p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
            style={{ color: scrolled ? "#1f1e1e" : "#ffffff" }}
          >
            <MenuIcon width={24} height={24} />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1100,
            background: "#1f1e1e",
            display: "flex",
            flexDirection: "column",
            padding: "32px 24px",
          }}
        >
          <div className="flex items-center justify-between mb-12">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/4asolar-logo.png"
                width={100}
                height={44}
                alt="4A Solar"
                style={{ display: "block" }}
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation"
              style={{ color: "#ffffff" }}
              className="p-2"
            >
              <CloseIcon width={24} height={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 flex-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: "28px",
                  fontWeight: 400,
                  color: "#ffffff",
                  textDecoration: "none",
                  lineHeight: 1.2,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-8 flex flex-col gap-4">
            <a
              href="tel:773-502-1529"
              className="virya-btn-primary"
              onClick={() => setMobileOpen(false)}
              style={{ textAlign: "center" }}
            >
              773-502-1529
            </a>
          </div>
        </div>
      )}
    </>
  );
}
