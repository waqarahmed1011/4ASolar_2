"use client";

import { useEffect, useState } from "react";

const panels = [
  {
    word: "Landowners",
    desc: 'For Virya Energy, the energy transition must be adapted to each reality. Our "fit for purpose" approach reflects our commitment to developing customized solutions that exactly meet everyone\'s needs.',
    image: "/images/highlighter-landowners.jpg",
    tags: [
      "Space Monetization",
      "Predictable Income",
      "Carbon Footprint Reduction",
      "Energy Independence",
    ],
  },
  {
    word: "Manufacturing",
    desc: "By simplifying access to renewable energy, we are building a path towards a sustainable future for manufacturing businesses.",
    image: "/images/virya-image-8.jpg",
    tags: [
      "Energy Cost Reduction",
      "Regulatory Compliance",
      "Energy Resilience",
      "Energy Independence",
    ],
  },
  {
    word: "Logistics",
    desc: "We provide tailor-made energy solutions for logistics and transport companies, helping them reduce emissions and energy costs.",
    image: "/images/virya-image-27.jpg",
    tags: [
      "Fleet Electrification",
      "Clean Transport",
      "Carbon Reduction",
      "Cost Savings",
    ],
  },
  {
    word: "Retail",
    desc: "Our retail energy solutions help businesses achieve sustainability goals while reducing operational costs through renewable energy.",
    image: "/images/virya-image-31.jpg",
    tags: [
      "Green Energy",
      "Cost Reduction",
      "ESG Compliance",
      "Sustainability",
    ],
  },
] as const;

const tagStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.92)",
  backdropFilter: "blur(8px)",
  borderRadius: 999,
  padding: "10px 20px",
  fontSize: 14,
  color: "#1f1e1e",
  whiteSpace: "nowrap",
  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
};

export function HighlighterServices() {
  const [panelIndex, setPanelIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile for responsive tag layout
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Blink cursor
  useEffect(() => {
    const cursorInterval = setInterval(
      () => setShowCursor((p) => !p),
      500
    );
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing animation
  useEffect(() => {
    const targetWord = panels[panelIndex].word;
    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (displayedWord.length < targetWord.length) {
        timeout = setTimeout(() => {
          setDisplayedWord(targetWord.slice(0, displayedWord.length + 1));
        }, 80);
      } else {
        // Pause, then start deleting
        timeout = setTimeout(() => setIsTyping(false), 2500);
      }
    } else {
      if (displayedWord.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedWord((d) => d.slice(0, -1));
        }, 50);
      } else {
        // Move to next panel
        setPanelIndex((i) => (i + 1) % panels.length);
        setIsTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedWord, isTyping, panelIndex]);

  const currentPanel = panels[panelIndex];

  return (
    <section style={{ background: "#ffffff", padding: "80px 0" }}>
      <div
        className="highlighter-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "55fr 45fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        {/* Left column */}
        <div>
          <h2
            style={{
              fontSize: "clamp(32px, 3.5vw, 52px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              color: "#1f1e1e",
              marginBottom: 24,
            }}
          >
            Discover our{" "}
            <span style={{ color: "#FF5938" }}>{displayedWord}</span>
            <span
              style={{
                opacity: showCursor ? 1 : 0,
                color: "#FF5938",
                transition: "opacity 0.1s",
              }}
            >
              |
            </span>
            <br />
            solutions
          </h2>

          <p
            style={{
              fontSize: 16,
              color: "#1f1e1e",
              lineHeight: 1.6,
              maxWidth: 480,
              marginBottom: 32,
              transition: "opacity 0.3s ease",
            }}
          >
            {currentPanel.desc}
          </p>

          <button
            style={{
              background: "transparent",
              color: "#1f1e1e",
              border: "1.5px solid rgba(31,30,30,0.25)",
              borderRadius: 999,
              padding: "12px 28px",
              fontSize: 15,
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
            Learn more
          </button>
        </div>

        {/* Right column */}
        <div className="flex justify-center">
          {isMobile ? (
            /* Mobile: stacked layout */
            <div style={{ width: "100%" }}>
              <img
                src={currentPanel.image}
                alt=""
                style={{
                  width: "100%",
                  height: 300,
                  borderRadius: 20,
                  objectFit: "cover",
                  display: "block",
                  transition: "opacity 0.4s ease",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginTop: 16,
                }}
              >
                {currentPanel.tags.map((tag) => (
                  <span key={tag} style={{ ...tagStyle, whiteSpace: "normal" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            /* Desktop: floating tags around image */
            <div style={{ position: "relative" }}>
              <img
                src={currentPanel.image}
                alt=""
                style={{
                  width: 360,
                  height: 460,
                  borderRadius: 20,
                  objectFit: "cover",
                  display: "block",
                  transition: "opacity 0.4s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  left: -20,
                  ...tagStyle,
                }}
              >
                {currentPanel.tags[0]}
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  right: -20,
                  ...tagStyle,
                }}
              >
                {currentPanel.tags[1]}
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 80,
                  left: -20,
                  ...tagStyle,
                }}
              >
                {currentPanel.tags[2]}
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  right: -20,
                  ...tagStyle,
                }}
              >
                {currentPanel.tags[3]}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .highlighter-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
