"use client";

import Link from "next/link";

const stats = [
  { number: "15+", label: "Years of solar experience" },
  { number: "100+", label: "Solar PV systems installed" },
  { number: "200+", label: "Solar professionals trained" },
  { number: "100%", label: "5-star customer satisfaction" },
];

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 16,
        border: "1px solid rgba(0,0,0,0.06)",
        padding: "32px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
      }}
    >
      <span
        style={{
          fontSize: "clamp(36px, 4vw, 52px)",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          color: "#9f908d",
          lineHeight: 1,
        }}
      >
        {number}
      </span>
      <span
        style={{
          fontSize: 14,
          color: "#9f908d",
          textAlign: "center",
          lineHeight: 1.4,
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function StatisticsSection() {
  return (
    <section style={{ background: "#ffffff", padding: "80px 0" }}>
      <div
        className="stats-outer-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 32,
          alignItems: "stretch",
        }}
      >
        {/* Left card */}
        <div
          style={{
            background: "#afc2bb",
            borderRadius: 20,
            padding: 40,
            position: "relative",
            overflow: "hidden",
            minHeight: 400,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 3vw, 42px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            <span style={{ color: "#FF5938" }}>4A Solar</span>
            <br />by the
            <br />numbers
          </h2>

          <Link
            href="/about"
            style={{
              background: "transparent",
              color: "#ffffff",
              border: "1.5px solid rgba(255,255,255,0.5)",
              borderRadius: 999,
              padding: "12px 24px",
              fontSize: 14,
              cursor: "pointer",
              width: "fit-content",
              textDecoration: "none",
              display: "inline-block",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.5)";
            }}
          >
            About Us
          </Link>

          {/* Decorative diagonal stripe */}
          <div
            style={{
              position: "absolute",
              bottom: -20,
              right: -20,
              width: 160,
              height: 8,
              background: "#FF5938",
              transform: "rotate(-40deg)",
              transformOrigin: "right center",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Stats 2×2 grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            height: "100%",
          }}
        >
          {stats.map((s) => (
            <StatBox
              key={s.number}
              number={s.number}
              label={s.label}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-outer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
