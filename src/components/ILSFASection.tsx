"use client";

export function ILSFASection() {
  return (
    <section style={{ background: "#eee8e2", padding: "80px 0" }}>
      <div
        className="ilsfa-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontSize: 12,
              color: "#FF5938",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 12,
            }}
          >
            Program Participant
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3vw, 42px)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#1f1e1e",
              marginBottom: 20,
            }}
          >
            Illinois Solar for All
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#1f1e1e",
              lineHeight: 1.6,
              maxWidth: 480,
              marginBottom: 16,
            }}
          >
            4A Solar is a participating contractor in the Illinois Solar for All (ILSFA) program, administered by the Illinois Power Agency. ILSFA provides solar energy access to income-eligible households and community organizations across Illinois at little to no cost.
          </p>
          <p
            style={{
              fontSize: 15,
              color: "#9f908d",
              lineHeight: 1.6,
            }}
          >
            If you or someone you know may qualify, contact us and we will walk you through the eligibility requirements and application process.
          </p>
        </div>

        <div
          className="ilsfa-logos"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignItems: "flex-start",
          }}
        >
          <a
            href="https://www.illinoissfa.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 320,
              background: "#ffffff",
              borderRadius: 16,
              padding: "24px 32px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              transition: "box-shadow 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.12)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand_assets/ILSFAlogo2.png"
              alt="Illinois Solar for All"
              style={{ height: 56, width: "auto", display: "block" }}
            />
          </a>

          <a
            href="https://ipa.illinois.gov/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 320,
              background: "#1f1e1e",
              borderRadius: 16,
              padding: "24px 32px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
              transition: "box-shadow 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.24)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.12)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand_assets/ipalogo.png"
              alt="Illinois Power Agency"
              style={{ height: 56, width: "auto", display: "block", filter: "brightness(0) invert(1)" }}
            />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ilsfa-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .ilsfa-logos {
            flex-direction: row !important;
            flex-wrap: wrap !important;
          }
        }
      `}</style>
    </section>
  );
}