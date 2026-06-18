"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView, fadeUp } from "@/hooks/useInView";

const panels = [
  {
    word: "Homeowners",
    desc: "Going solar at home should be straightforward. Sam sizes your system based on your actual utility bills and roof conditions — no oversizing, no pressure, and a full walkthrough of every incentive available to you.",
    image: "/images/highlighter-landowners.jpg",
    href: "/residential",
    tags: [
      "Reduce Your Electric Bill",
      "Illinois Incentives",
      "Increase Home Value",
      "Battery Backup",
    ],
  },
  {
    word: "Businesses",
    desc: "Commercial solar reduces your operating costs, qualifies for the federal Investment Tax Credit, and signals sustainability to your customers. We handle the entire project from engineering to interconnection.",
    image: "/images/virya-image-8.jpg",
    href: "/commercial",
    tags: [
      "Lower Operating Costs",
      "Federal Tax Credit",
      "Scalable Systems",
      "Energy Independence",
    ],
  },
  {
    word: "Non-Profits",
    desc: "Non-profit organizations have unique access to Illinois solar incentives and grant pathways that for-profit entities can't use. We help you structure the project to maximize every available dollar.",
    image: "/images/virya-image-27.jpg",
    href: "/non-profits",
    tags: [
      "Mission-Aligned Energy",
      "Grant Eligible",
      "Community Impact",
      "Illinois Shines",
    ],
  },
] as const;

const tagStyle: React.CSSProperties = {
  position: "absolute",
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

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((p) => !p), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const targetWord = panels[panelIndex].word;
    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (displayedWord.length < targetWord.length) {
        timeout = setTimeout(() => {
          setDisplayedWord(targetWord.slice(0, displayedWord.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2500);
      }
    } else {
      if (displayedWord.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedWord((d) => d.slice(0, -1));
        }, 50);
      } else {
        setPanelIndex((i) => (i + 1) % panels.length);
        setIsTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedWord, isTyping, panelIndex]);

  const currentPanel = panels[panelIndex];
  const { ref, inView } = useInView();

  return (
    <section style={{ background: "#ffffff", padding: "80px 0" }}>
      <div
        ref={ref}
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
        <div style={fadeUp(inView)}>
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
            Solar solutions for{" "}
            <span style={{ color: "#FF5938" }}>{displayedWord}</span>
            <span style={{ opacity: showCursor ? 1 : 0, color: "#FF5938" }}>
              |
            </span>
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
            {currentPanel.desc}
          </p>

          <Link
            href={currentPanel.href}
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
            Learn more
          </Link>
        </div>

        <div className="flex justify-center highlighter-right" style={fadeUp(inView, 0.18)}>
          <div style={{ position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
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
            <div style={{ ...tagStyle, top: 24, left: -20 }}>
              {currentPanel.tags[0]}
            </div>
            <div style={{ ...tagStyle, top: 24, right: -20 }}>
              {currentPanel.tags[1]}
            </div>
            <div style={{ ...tagStyle, bottom: 80, left: -20 }}>
              {currentPanel.tags[2]}
            </div>
            <div style={{ ...tagStyle, bottom: 24, right: -20 }}>
              {currentPanel.tags[3]}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .highlighter-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .highlighter-right img {
            width: 100% !important;
            height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
}
