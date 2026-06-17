"use client";

import { useState } from "react";
import { WindIcon, SolarCircleIcon } from "@/components/icons";

const projects = [
  { category: "Wind", name: "Ollignies North", image: "/images/expertise-wind.jpg" },
  { category: "Solar", name: "Groupe Bonnin", image: "/images/expertise-wind-2.jpg" },
  { category: "Solar", name: "HQ DRSD Malakoff", image: "/images/virya-image-6.jpg" },
  { category: "Solar", name: "Fresenius Kabi", image: "/images/virya-image-8.jpg" },
  { category: "Solar", name: "Agence Léon Grosse Aix-les Bains", image: "/images/virya-image-27.jpg" },
  { category: "Wind", name: "Parc de Lislet 2", image: "/images/virya-image-31.jpg" },
] as const;

const CARD_WIDTH = 380;
const CARD_GAP = 24;

export function ProjectsSlider() {
  const [offset, setOffset] = useState(0);
  const maxOffset = (projects.length - 3) * (CARD_WIDTH + CARD_GAP);

  const prev = () => setOffset((o) => Math.max(0, o - (CARD_WIDTH + CARD_GAP)));
  const next = () => setOffset((o) => Math.min(maxOffset, o + (CARD_WIDTH + CARD_GAP)));

  return (
    <section style={{ background: "#eee8e2", padding: "80px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 80px" }}>
        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(36px, 3.5vw, 48px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#1f1e1e" }}>Our </span>
            <span style={{ color: "#9f908d" }}>projects</span>
          </h2>
          <button
            style={{
              background: "transparent",
              color: "#1f1e1e",
              border: "1.5px solid rgba(31,30,30,0.25)",
              borderRadius: 999,
              padding: "12px 24px",
              fontSize: 14,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Discover our projects
          </button>
        </div>

        {/* Slider */}
        <div style={{ position: "relative" }}>
          <div style={{ overflow: "hidden" }}>
            <div
              style={{
                display: "flex",
                gap: CARD_GAP,
                transform: `translateX(-${offset}px)`,
                transition: "transform 0.4s ease",
              }}
            >
              {projects.map((project, i) => (
                <div
                  key={i}
                  style={{
                    flexShrink: 0,
                    width: CARD_WIDTH,
                    height: 520,
                    borderRadius: 20,
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />

                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "50%",
                      background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                    }}
                  />

                  {/* Category label */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 56,
                      left: 24,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 14,
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {project.category === "Wind" ? (
                      <WindIcon width={16} height={16} />
                    ) : (
                      <SolarCircleIcon width={16} height={16} />
                    )}
                    {project.category}
                  </div>

                  {/* Project name */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 24,
                      left: 24,
                      fontSize: 22,
                      fontWeight: 400,
                      color: "#ffffff",
                    }}
                  >
                    {project.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            disabled={offset === 0}
            style={{
              position: "absolute",
              top: "50%",
              left: -24,
              transform: "translateY(-50%)",
              background: "white",
              borderRadius: "50%",
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
              cursor: offset === 0 ? "default" : "pointer",
              border: "none",
              opacity: offset === 0 ? 0.4 : 1,
            }}
          >
            ←
          </button>
          <button
            onClick={next}
            disabled={offset >= maxOffset}
            style={{
              position: "absolute",
              top: "50%",
              right: -24,
              transform: "translateY(-50%)",
              background: "white",
              borderRadius: "50%",
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
              cursor: offset >= maxOffset ? "default" : "pointer",
              border: "none",
              opacity: offset >= maxOffset ? 0.4 : 1,
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
