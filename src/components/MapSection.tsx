"use client";

import { useState } from "react";

const tabs = ["Morton Grove (HQ)", "Skokie · Evanston · Niles", "Glenview · Park Ridge", "Schaumburg & beyond"] as const;
type Tab = (typeof tabs)[number];

export function MapSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Morton Grove (HQ)");

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
        <div>
          <h2
            style={{
              fontSize: "clamp(36px, 3.84vw, 55px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: "#1f1e1e" }}>Serving All of</span>
            <br />
            <span style={{ color: "#9f908d" }}>Illinois</span>
          </h2>

          <p
            style={{
              fontSize: 20,
              color: "#1f1e1e",
              margin: "16px 0 32px",
              lineHeight: 1.4,
            }}
          >
            Based in Morton Grove. Available across Chicagoland and statewide.
          </p>

          <a
            href="#contact"
            style={{
              background: "transparent",
              color: "#1f1e1e",
              border: "1.5px solid rgba(31,30,30,0.25)",
              borderRadius: 999,
              padding: "12px 24px",
              fontSize: 14,
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
            Check if we serve your area
          </a>
        </div>

        <div>
          <div
            style={{
              position: "relative",
              width: "100%",
              maxHeight: 400,
              overflow: "hidden",
              borderRadius: 8,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/chicago-aerial.jpg"
              alt="Chicago and Chicagoland area"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

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
            <span>Chicagoland</span>
            <span>North Shore</span>
            <span>Northwest Suburbs</span>
            <span>All of Illinois</span>
          </div>

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
