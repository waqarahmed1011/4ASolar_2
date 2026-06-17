"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const slides = [
  {
    icon: "/icons/wind.svg",
    image: "/images/expertise-wind.jpg",
    titleDark: "Community-centered ",
    titleMuted: "wind",
    titleRest: " energy development.",
    desc: "We finance, develop and operate onshore wind energy projects, centred around community interests and environmental stewardship.",
  },
  {
    icon: "/icons/solar.svg",
    image: "/images/expertise-wind-2.jpg",
    titleDark: "Large and medium scale ",
    titleMuted: "solar",
    titleRest: " and agrovoltaic solutions.",
    desc: "Our industrial-scale solar projects and innovative agrovoltaic solutions are seamlessly integrated with local grid systems.",
  },
  {
    icon: "/icons/hydrogen.svg",
    image: "/images/expertise-hydrogen.jpg",
    titleDark: "Pioneering of renewable ",
    titleMuted: "hydrogen",
    titleRest: " production.",
    desc: "We lead in RFNBO hydrogen development, adding an essential component to the zero-emission energy landscape.",
  },
  {
    icon: "/icons/solar.svg",
    image: "/images/virya-image-6.jpg",
    titleDark: "Enabling the transition ",
    titleMuted: "for everyone",
    titleRest: ".",
    desc: "Through our DATS 24 brand, we provide a network of fueling stations, green energy contracts for homes and EV charging parks.",
  },
  {
    icon: "/icons/monitoring.svg",
    image: "/images/virya-image-8.jpg",
    titleDark: "Comprehensive energy infrastructure ",
    titleMuted: "monitoring",
    titleRest: ".",
    desc: "Our infrastructure monitoring services ensure optimal performance of energy installations on land and offshore.",
  },
  {
    icon: "/icons/transition.svg",
    image: "/images/virya-image-27.jpg",
    titleDark: "Tailor made, ",
    titleMuted: "fit for purpose",
    titleRest: " B2B sustainable energy solutions.",
    desc: "We guide our B2B clients in their energy transition, with customized solutions that meet their specific energy needs.",
  },
];

const CARD_WIDTH = 416;
const CARD_GAP = 24;

export function ItemsSlider() {
  const [offset, setOffset] = useState(0);
  const maxOffset = (slides.length - 3) * (CARD_WIDTH + CARD_GAP);

  const prev = () =>
    setOffset((o) => Math.max(0, o - (CARD_WIDTH + CARD_GAP)));
  const next = () =>
    setOffset((o) => Math.min(maxOffset, o + (CARD_WIDTH + CARD_GAP)));

  return (
    <section style={{ background: "#eee8e2", padding: "80px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 80px" }}>
        <h2
          style={{
            fontSize: "clamp(36px, 3.5vw, 48px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          <span style={{ color: "#1f1e1e" }}>Our </span>
          <span style={{ color: "#9f908d" }}>expertise</span>
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
                    width: CARD_WIDTH,
                    borderRadius: 20,
                    overflow: "hidden",
                    background: "#ffffff",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
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
                    <div
                      style={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        width: 48,
                        height: 48,
                        background: "rgba(255,255,255,0.9)",
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={slide.icon}
                        alt=""
                        width={28}
                        height={28}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
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
              transition: "opacity 0.2s",
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
