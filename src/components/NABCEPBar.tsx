import Image from "next/image";

export function NABCEPBar() {
  return (
    <section
      style={{
        background: "#ffffff",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
        padding: "32px 0",
      }}
    >
      <div
        className="nabcep-bar-inner"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 48,
          flexWrap: "wrap",
        }}
      >
        <div
          className="nabcep-logos"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Image
            src="/images/nabcep-installation.png"
            width={90}
            height={90}
            alt="NABCEP Board Certified PV Installation Professional"
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/images/nabcep-logo.jpg"
            width={90}
            height={90}
            alt="North American Board of Certified Energy Practitioners"
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/images/nabcep-inspector.png"
            width={90}
            height={90}
            alt="NABCEP Board Certified PV System Inspector"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div
          style={{
            width: "1px",
            height: 60,
            background: "rgba(0,0,0,0.12)",
            flexShrink: 0,
          }}
          className="nabcep-divider"
        />

        <p
          style={{
            fontSize: "clamp(14px, 1.5vw, 17px)",
            color: "#1f1e1e",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: 1.4,
            textAlign: "center",
          }}
        >
          <span style={{ color: "#FF5938", fontWeight: 600 }}>NABCEP Certified Practitioner</span>
          {" "} in Installation and Inspection
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .nabcep-divider { display: none !important; }
          .nabcep-logos img { width: 70px !important; height: 70px !important; }
        }
      `}</style>
    </section>
  );
}
