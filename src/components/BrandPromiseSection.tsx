"use client";

import Link from "next/link";
import { useInView, fadeUp } from "@/hooks/useInView";

const services = [
  "Residential Solar",
  "Commercial Solar",
  "Solar for Non-Profits",
  "Battery Storage",
  "EV Chargers",
  "Service & Repairs",
  "Solar Incentives",
];

export function BrandPromiseSection() {
  const { ref, inView } = useInView();

  return (
    <section style={{ background: "#ffffff", padding: "100px 0" }}>
      <div
        ref={ref}
        className="brand-promise-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "55fr 45fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        <div style={fadeUp(inView)}>
          <h2
            style={{
              fontSize: "clamp(32px, 3.5vw, 50px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            <span style={{ color: "#1f1e1e" }}>Our &ldquo;Keep It Simple&rdquo;</span>
            <br />
            <span style={{ color: "#9f908d" }}>Philosophy</span>
          </h2>

          <p
            style={{
              fontSize: 16,
              color: "#1f1e1e",
              lineHeight: 1.6,
              maxWidth: 480,
              marginBottom: 32,
            }}
          >
            At 4A Solar, we believe going solar should be straightforward. Our team brings over 15 years of hands-on solar experience and a deep engineering background to every project — designing systems sized to your actual energy needs, not the biggest sale. No pressure. No guesswork. Just solar done right.
          </p>

          <Link
            href="/about"
            style={{
              background: "transparent",
              color: "#1f1e1e",
              border: "1.5px solid rgba(31,30,30,0.25)",
              borderRadius: 999,
              padding: "12px 28px",
              fontSize: 15,
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(31,30,30,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(31,30,30,0.25)";
            }}
          >
            Learn more about Us
          </Link>
        </div>

        {/* Scrolling services ticker */}
        <div
          style={{
            overflow: "hidden",
            borderRadius: 20,
            ...fadeUp(inView, 0.15),
            padding: "40px 0",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* Row 1: scrolls left */}
          <div style={{ overflow: "hidden" }}>
            <div
              style={{
                display: "inline-flex",
                gap: 12,
                animation: "ticker-left 22s linear infinite",
                whiteSpace: "nowrap",
              }}
            >
              {[...services, ...services].map((s, i) => (
                <span
                  key={i}
                  style={{
                    background: "#FF5938",
                    color: "#ffffff",
                    borderRadius: 999,
                    padding: "12px 22px",
                    fontSize: 15,
                    flexShrink: 0,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2: scrolls right */}
          <div style={{ overflow: "hidden" }}>
            <div
              style={{
                display: "inline-flex",
                gap: 12,
                animation: "ticker-right 22s linear infinite",
                whiteSpace: "nowrap",
              }}
            >
              {[...services, ...services].map((s, i) => (
                <span
                  key={i}
                  style={{
                    background: "#FF5938",
                    color: "#ffffff",
                    borderRadius: 999,
                    padding: "12px 22px",
                    fontSize: 15,
                    flexShrink: 0,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Row 3: scrolls left */}
          <div style={{ overflow: "hidden" }}>
            <div
              style={{
                display: "inline-flex",
                gap: 12,
                animation: "ticker-left 22s linear infinite",
                animationDelay: "-11s",
                whiteSpace: "nowrap",
              }}
            >
              {[...services, ...services].map((s, i) => (
                <span
                  key={i}
                  style={{
                    background: "#FF5938",
                    color: "#ffffff",
                    borderRadius: 999,
                    padding: "12px 22px",
                    fontSize: 15,
                    flexShrink: 0,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ticker-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ticker-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @media (max-width: 768px) {
          .brand-promise-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
