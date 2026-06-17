const articles = [
  {
    tags: ["Solar", "General news"],
    title: "Virya Energy and EBRD Partner to Accelerate Renewable Energy Expansion in Poland",
    date: "Braine L'Alleud, 26/02/2026",
    excerpt:
      "Virya Energy NV is pleased to announce the acceleration of its renewable energy expansion in Poland, through a strategic partnership with the European Bank for Reconstruction and Development (EBRD).",
  },
  {
    tags: ["General news", "Solar"],
    title: "Virya Energy Expands into Japan's Renewable Market through Integration of BayWa r.e.'s Japan Solar Platform",
    date: "Tokyo, Japan, 12/12/2025",
    excerpt:
      "Virya Energy, a pioneer in renewable energy development, announces its expansion into Japan through the strategic integration of BayWa r.e.'s Japan Solar Platform.",
  },
  {
    tags: ["General news"],
    title: "Demonstration of hydrogen in heavy-duty transport at Spa-Francorchamps",
    date: "Braine L'Alleud, 2025",
    excerpt:
      "At the iconic Spa-Francorchamps circuit, Belgium signalled its ambition to lead Europe's hydrogen transport revolution.",
  },
];

export function LatestNews() {
  return (
    <section style={{ background: "#ffffff", padding: "80px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <h2
          style={{
            fontSize: "clamp(36px, 3.5vw, 48px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          <span style={{ color: "#1f1e1e" }}>Latest </span>
          <span style={{ color: "#9f908d" }}>news</span>
        </h2>

        <div
          className="news-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {articles.map((article, i) => (
            <article
              key={i}
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: 16,
                overflow: "hidden",
                padding: 24,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 12,
                      color: "#9f908d",
                      background: "#f5f0ea",
                      borderRadius: 999,
                      padding: "4px 12px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#1f1e1e",
                  lineHeight: 1.3,
                  marginBottom: 8,
                  flex: 1,
                }}
              >
                {article.title}
              </h3>

              <time
                style={{
                  fontSize: 12,
                  color: "#9f908d",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                {article.date}
              </time>

              <p
                style={{
                  fontSize: 14,
                  color: "#9f908d",
                  lineHeight: 1.5,
                  marginBottom: 16,
                }}
              >
                {article.excerpt}
              </p>

              <a
                href="#"
                style={{
                  fontSize: 14,
                  color: "#FF5938",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                See more →
              </a>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <button
            style={{
              background: "transparent",
              color: "#1f1e1e",
              border: "1.5px solid rgba(31,30,30,0.2)",
              borderRadius: 999,
              padding: "14px 32px",
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            See all news
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .news-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
