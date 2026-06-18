"use client";

export function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        background: "#1a1a1a",
      }}
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/virya-image-1.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div
        className="relative z-10 text-center"
        style={{ padding: "0 80px" }}
      >
        <h1
          style={{
            fontSize: "clamp(56px, 8.33vw, 120px)",
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: "#fefefe",
            maxWidth: "900px",
            margin: "0 auto",
            whiteSpace: "pre-line",
          }}
        >
          {"Fit for Purpose\nEnergy"}
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "rgba(254,254,254,0.85)",
            lineHeight: 1.6,
            maxWidth: "560px",
            margin: "24px auto 0",
          }}
        >
          Virya Energy develops, finances, constructs, and operates sustainable
          energy assets. We accelerate the energy transition by scaling new
          technologies across the sustainable energy ecosystem.
        </p>

        {/* Buttons row */}
        <div
          style={{
            marginTop: "32px",
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <HeroButtonPrimary />
          <HeroButtonOutline />
        </div>
      </div>
    </section>
  );
}

function HeroButtonPrimary() {
  return (
    <a
      href="#"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "#ffffff",
        color: "#1f1e1e",
        borderRadius: "999px",
        padding: "16px 32px",
        fontSize: "16px",
        fontWeight: 400,
        textDecoration: "none",
        transition: "background 0.2s ease",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background =
          "rgba(255,255,255,0.9)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff";
      }}
    >
      Build with us →
    </a>
  );
}

function HeroButtonOutline() {
  return (
    <a
      href="#"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "transparent",
        color: "#fefefe",
        border: "1.5px solid rgba(254,254,254,0.6)",
        borderRadius: "999px",
        padding: "16px 32px",
        fontSize: "16px",
        fontWeight: 400,
        textDecoration: "none",
        transition: "border-color 0.2s ease, background 0.2s ease",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.borderColor = "rgba(254,254,254,0.9)";
        el.style.background = "rgba(255,255,255,0.08)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.borderColor = "rgba(254,254,254,0.6)";
        el.style.background = "transparent";
      }}
    >
      Discover our work
    </a>
  );
}
