"use client";

import Link from "next/link";

export function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        background: "#1a1a1a",
      }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/virya-image-1.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/35" />

      <div
        className="relative z-10 text-center"
        style={{ padding: "0 80px" }}
      >
        <h1
          style={{
            fontSize: "clamp(56px, 8.33vw, 120px)",
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: "#fefefe",
            maxWidth: "900px",
            margin: "0 auto",
            whiteSpace: "pre-line",
          }}
        >
          {"Keep It Simple."}
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "rgba(254,254,254,0.85)",
            lineHeight: 1.6,
            maxWidth: "560px",
            margin: "24px auto 0",
          }}
        >
        </p>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#ffffff",
              color: "#1f1e1e",
              borderRadius: "999px",
              padding: "16px 32px",
              fontSize: "16px",
              fontWeight: 400,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Get a Free Quote →
          </Link>
          <a
            href="tel:773-502-1529"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              color: "#fefefe",
              border: "1.5px solid rgba(254,254,254,0.6)",
              borderRadius: "999px",
              padding: "16px 32px",
              fontSize: "16px",
              fontWeight: 400,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
