"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const stats = [
  { lottie: "/lottie/wind.json", number: "625 MW", label: "Installed production capacity" },
  { lottie: "/lottie/profile.json", number: "700+", label: "Employees over multiple markets" },
  { lottie: "/lottie/fuel.json", number: "6", label: "Hydrogen service stations" },
  { lottie: "/lottie/globe.json", number: "15+", label: "Countries with a Virya presence" },
];

function StatBox({ lottieUrl, number, label }: { lottieUrl: string; number: string; label: string }) {
  const [animData, setAnimData] = useState<object | null>(null);

  useEffect(() => {
    fetch(lottieUrl).then((r) => r.json()).then(setAnimData);
  }, [lottieUrl]);

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
      {animData && (
        <Lottie animationData={animData} loop style={{ width: 60, height: 60 }} />
      )}
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
          alignItems: "start",
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
            <span style={{ color: "#FF5938" }}>Virya</span>
            {" "}Energy
            <br />in a few
            <br />numbers
          </h2>

          <button
            style={{
              background: "transparent",
              color: "#ffffff",
              border: "1.5px solid rgba(255,255,255,0.5)",
              borderRadius: 999,
              padding: "12px 24px",
              fontSize: 14,
              cursor: "pointer",
              width: "fit-content",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
            }}
          >
            Learn more
          </button>

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
          }}
        >
          {stats.map((s) => (
            <StatBox
              key={s.number}
              lottieUrl={s.lottie}
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
