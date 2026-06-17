"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, CloseIcon } from "@/components/icons";

const NAV_LINKS = [
  { label: "Our expertise", href: "#" },
  { label: "Your activity", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Resources", href: "#" },
  { label: "News", href: "#" },
  { label: "Cooperatives", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Projects", href: "#" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
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
          padding: "32px 0",
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
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/virya-logo.png"
              width={100}
              height={49}
              alt="Virya Energy"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "16px",
                  textDecoration: "none",
                  color: scrolled ? "#1f1e1e" : "#ffffff",
                  transition: "color 0.3s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block shrink-0">
            <a
              href="#"
              className="virya-btn-primary"
            >
              Build with us →
            </a>
          </div>

          {/* Mobile Hamburger */}
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

      {/* Mobile Overlay */}
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
          {/* Top bar with logo + close button */}
          <div className="flex items-center justify-between mb-12">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/virya-logo.png"
                width={80}
                height={39}
                alt="Virya Energy"
                style={{ filter: "brightness(0) invert(1)" }}
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

          {/* Mobile nav links */}
          <nav className="flex flex-col gap-6 flex-1">
            {NAV_LINKS.map((link) => (
              <a
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
              </a>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-auto pt-8">
            <a href="#" className="virya-btn-primary">
              Build with us →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
