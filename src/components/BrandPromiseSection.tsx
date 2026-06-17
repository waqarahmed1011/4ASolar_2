"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function BrandPromiseSection() {
  const [animData, setAnimData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/lottie/ses-illu-en.json")
      .then((r) => r.json())
      .then(setAnimData);
  }, []);

  return (
    <section style={{ background: "#ffffff", padding: "100px 0" }}>
      <div
        className="brand-promise-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "55fr 45fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "clamp(32px, 3.5vw, 50px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            <span style={{ color: "#1f1e1e" }}>Our Fit For Purpose</span>
            <br />
            <span style={{ color: "#9f908d" }}>Brand Promise</span>
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
            For Virya Energy, the energy transition must be adapted to each
            reality. Our &ldquo;fit for purpose&rdquo; approach reflects our
            commitment to developing customized solutions that exactly meet
            everyone&apos;s needs. By simplifying access to renewable energy, we
            are building a path towards a sustainable future.
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

        <div className="flex justify-center">
          <div style={{ maxWidth: 380, width: "100%" }}>
            {animData && (
              <Lottie
                animationData={animData}
                loop
                style={{ width: "100%" }}
              />
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .brand-promise-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
