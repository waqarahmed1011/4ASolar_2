"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useInView, fadeUp } from "@/hooks/useInView";

const slides = [
  {
    icon: "/icons/solar.svg",
    image: "/images/solar-residential.jpg",
    titleDark: "Residential ",
    titleMuted: "solar",
    titleRest: " design and installation.",
    desc: "Custom-sized systems for Illinois homeowners. Every design is based on your actual usage and roof conditions — no oversizing, no upselling.",
  },
  {
    icon: "/icons/solar.svg",
    image: "/images/solar-commercial.jpg",
    titleDark: "Commercial ",
    titleMuted: "solar",
    titleRest: " for businesses of all sizes.",
    desc: "We design and install commercial solar systems that reduce operating costs and qualify for federal and state tax incentives.",
  },
  {
    icon: "/icons/solar.svg",
    image: "/images/solar-nonprofit.jpg",
    titleDark: "Solar for ",
    titleMuted: "non-profits",
    titleRest: " — mission-aligned energy.",
    desc: "Non-profit organizations qualify for special incentive pathways. We help you navigate grant eligibility and maximize savings.",
  },
  {
    icon: "/icons/solar.svg",
    image: "/images/solar-battery.jpg",
    titleDark: "Battery ",
    titleMuted: "storage",
    titleRest: " systems for energy independence.",
    desc: "Pair your solar system with battery backup to keep the lights on during outages and maximize your self-consumption.",
  },
  {
    icon: "/icons/solar.svg",
    image: "/images/solar-ev.jpg",
    titleDark: "EV charger ",
    titleMuted: "installation",
    titleRest: " for home and business.",
    desc: "We install Level 2 EV chargers alongside your solar system, letting you charge your vehicle on clean Illinois solar energy.",
  },
  {
    icon: "/icons/solar.svg",
    image: "/images/solar-repairs.jpg",
    titleDark: "Service and ",
    titleMuted: "repairs",
    titleRest: " for existing solar systems.",
    desc: "We diagnose and repair solar systems of any brand. Annual inspections available to keep your system producing at peak output.",
  },
  {
    icon: "/icons/solar.svg",
    image: "/images/solar-incentives.jpg",
    titleDark: "Solar incentives ",
    titleMuted: "consulting",
    titleRest: " — Illinois and federal.",
    desc: "We walk you through the Federal ITC, Illinois Shines SRECs, ComEd rebates, and net metering so you know exactly what you'll save.",
  },
];

const CARD_GAP = 24;

export function ItemsSlider() {
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(416);
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      setCardWidth(mobile ? window.innerWidth - 48 : 416);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => { setOffset(0); }, [isMobile]);

  const maxOffset = isMobile
    ? (slides.length - 1) * (cardWidth + CARD_GAP)
    : (slides.length - 3) * (cardWidth + CARD_GAP);

  const prev = () => setOffset((o) => Math.max(0, o - (cardWidth + CARD_GAP)));
  const next = () => setOffset((o) => Math.min(maxOffset, o + (cardWidth + CARD_GAP)));

  return (
    <section style={{ background: "#eee8e2", padding: "80px 0" }}>
      <div ref={ref} style={{ maxWidth: 1440, margin: "0 auto", padding: isMobile ? "0 24px" : "0 80px" }}>
        <h2
          style={{
            fontSize: "clamp(36px, 3.5vw, 48px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            textAlign: "center",
            marginBottom: 48,
            ...fadeUp(inView),
          }}
        >
          <span style={{ color: "#1f1e1e" }}>Our </span>
          <span style={{ color: "#9f908d" }}>services</span>
        </h2>

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
              {slides.map((slide, i) => (
                <div
                  key={i}
                  style={{
                    flexShrink: 0,
                    width: cardWidth,
                    borderRadius: 20,
                    overflow: "hidden",
                    background: "#ffffff",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    ...fadeUp(inView, i * 0.06),
                  }}
                >
                  <div style={{ position: "relative", height: 300 }}>
                    <Image
                      src={slide.image}
                      alt=""
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="416px"
                    />
                  </div>
                  <div style={{ padding: 24 }}>
                    <p
                      style={{
                        fontSize: 18,
                        fontWeight: 400,
                        color: "#1f1e1e",
                        lineHeight: 1.3,
                        marginBottom: 8,
                      }}
                    >
                      {slide.titleDark}
                      <span style={{ color: "#9f908d" }}>{slide.titleMuted}</span>
                      {slide.titleRest}
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        color: "#9f908d",
                        lineHeight: 1.5,
                      }}
                    >
                      {slide.desc}
                    </p>
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
              left: isMobile ? 8 : -24,
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
              transition: "opacity 0.2s",
              zIndex: 2,
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
              right: isMobile ? 8 : -24,
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
              transition: "opacity 0.2s",
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
