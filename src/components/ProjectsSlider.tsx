"use client";

import { useState, useEffect } from "react";
import { useInView, fadeUp } from "@/hooks/useInView";

const testimonials = [
  {
    quote: "From the survey and planning to the finished product, Sam executed the entire installation with thorough professionalism. He had excellent knowledge of the system and provided multiple alternatives that would work well with our house. Finished exactly on time, no surprises whatsoever. I would recommend anyone interested in solar to hire Sam.",
    name: "Henry Chang",
    title: "Homeowner",
  },
  {
    quote: "Sam installed a complicated off-grid solar system for our two new homes. Because of his analysis and understanding of our needs, we are now enjoying free electricity. His hard work and creativity were unlike anything we had seen. An awesome experience we will never forget.",
    name: "Victoria Srour",
    title: "Homeowner",
  },
  {
    quote: "Sam managed the installation of a solar system for my home. He got it done quickly and cleanly. There were no problems with the installation or the system. Sam was easy to talk to and incredibly responsive to every question I asked. First-class service from start to finish.",
    name: "Jim Knoke",
    title: "Senior Engineer",
  },
  {
    quote: "We purchased a solar system from Sam and could not be happier. He was very knowledgeable and helped us understand every step of the process. He stayed in contact after installation to make sure everything ran perfectly. His engineering background made all the difference.",
    name: "Cindy Forcier",
    title: "Product Manager",
  },
  {
    quote: "Sam has installed over 100 solar systems since 2011. His company received five-star reviews from every customer on Yelp. Everyone who works with him remarks on how knowledgeable he is and how his team always goes above and beyond to make sure every customer is completely satisfied, through the installation and long after.",
    name: "Mike Neville",
    title: "Solar Industry Professional",
  },
] as const;

const CARD_GAP = 24;

export function ProjectsSlider() {
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(380);
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      setCardWidth(mobile ? window.innerWidth - 48 : 380);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => { setOffset(0); }, [isMobile]);

  const maxOffset = isMobile
    ? (testimonials.length - 1) * (cardWidth + CARD_GAP)
    : (testimonials.length - 3) * (cardWidth + CARD_GAP);

  const prev = () => setOffset((o) => Math.max(0, o - (cardWidth + CARD_GAP)));
  const next = () => setOffset((o) => Math.min(maxOffset, o + (cardWidth + CARD_GAP)));

  return (
    <section style={{ background: "#eee8e2", padding: "80px 0" }}>
      <div ref={ref} style={{ maxWidth: 1440, margin: "0 auto", padding: isMobile ? "0 24px" : "0 80px" }}>
        {/* Header row */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-start",
            gap: isMobile ? 16 : 0,
            marginBottom: 40,
            ...fadeUp(inView),
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(36px, 3.5vw, 48px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                marginBottom: 12,
              }}
            >
              <span style={{ color: "#1f1e1e" }}>What our </span>
              <span style={{ color: "#9f908d" }}>clients say</span>
            </h2>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#1f1e1e",
                color: "#ffffff",
                borderRadius: 999,
                padding: "8px 18px",
                fontSize: 13,
                fontWeight: 400,
                letterSpacing: "0.01em",
              }}
            >
              <span style={{ color: "#FF5938", fontSize: 16 }}>★★★★★</span>
              {" "}100% Five-Star Customer Satisfaction Rating
            </span>
          </div>
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
              marginTop: 8,
            }}
          >
            See all reviews
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
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    flexShrink: 0,
                    width: cardWidth,
                    height: isMobile ? "auto" : 520,
                    minHeight: isMobile ? 320 : undefined,
                    borderRadius: 20,
                    overflow: "hidden",
                    position: "relative",
                    background: "#1f1e1e",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 40,
                  }}
                >
                  {/* Opening quote mark */}
                  <span
                    style={{
                      fontSize: 80,
                      lineHeight: 1,
                      color: "#FF5938",
                      fontWeight: 400,
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    &ldquo;
                  </span>

                  {/* Quote text */}
                  <p
                    style={{
                      fontSize: 16,
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.6,
                      flex: 1,
                      marginTop: -20,
                    }}
                  >
                    {t.quote}
                  </p>

                  {/* Attribution */}
                  <div style={{ marginTop: 32 }}>
                    <div
                      style={{
                        width: 40,
                        height: 1,
                        background: "#FF5938",
                        marginBottom: 16,
                      }}
                    />
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: "#ffffff",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.5)",
                        marginTop: 4,
                      }}
                    >
                      {t.title}
                    </div>
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
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
