"use client";

import { useState } from "react";

const tabs = ["All", "Hydrogen", "Solar", "Wind"] as const;
type Tab = (typeof tabs)[number];

export function MapSection() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  return (
    <section style={{ background: "#eee8e2", padding: "80px 0" }}>
      <div
        className="map-section-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "35fr 65fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Left column */}
        <div>
          <h2
            style={{
              fontSize: "clamp(36px, 3.84vw, 55px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: "#1f1e1e" }}>Worldwide</span>
            <br />
            <span style={{ color: "#9f908d" }}>impact</span>
          </h2>

          <p
            style={{
              fontSize: 20,
              color: "#1f1e1e",
              margin: "16px 0 32px",
              lineHeight: 1.4,
            }}
          >
            Present across 3 continents, in 15+ countries
          </p>

          <button
            style={{
              background: "transparent",
              color: "#1f1e1e",
              border: "1.5px solid rgba(31,30,30,0.25)",
              borderRadius: 999,
              padding: "12px 24px",
              fontSize: 14,
              cursor: "pointer",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(31,30,30,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(31,30,30,0.25)";
            }}
          >
            Discover all our projects
          </button>
        </div>

        {/* Right column */}
        <div>
          {/* World map */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxHeight: 400,
              overflow: "hidden",
              borderRadius: 8,
            }}
          >
            <img
              src="/images/virya-image-27.jpg"
              alt="World map"
              style={{ width: "100%", height: "auto", opacity: 0.3 }}
            />
            {/* Orange glow overlay representing Europe cluster */}
            <div
              style={{
                position: "absolute",
                top: "25%",
                left: "48%",
                width: 120,
                height: 80,
                background:
                  "radial-gradient(circle, rgba(255,89,56,0.8) 0%, rgba(255,89,56,0.2) 70%)",
                borderRadius: "50%",
              }}
            />
          </div>

          {/* Counters */}
          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 16,
              fontSize: 14,
              color: "#9f908d",
              flexWrap: "wrap",
            }}
          >
            <span>99 worldwide projects</span>
            <span>3 projects in Asia +</span>
            <span>97 projects in Europe +</span>
          </div>

          {/* Filter tabs */}
          <div
            style={{
              display: "flex",
              gap: 8,
              marginTop: 16,
              flexWrap: "wrap",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: activeTab === tab ? "#FF5938" : "transparent",
                  border: `1.5px solid ${activeTab === tab ? "#FF5938" : "rgba(31,30,30,0.2)"}`,
                  borderRadius: 999,
                  padding: "10px 20px",
                  fontSize: 14,
                  color: activeTab === tab ? "#ffffff" : "#1f1e1e",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "background 0.2s ease, border-color 0.2s ease, color 0.2s ease",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .map-section-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
