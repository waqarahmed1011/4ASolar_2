"use client";

import { useInView, fadeUp } from "@/hooks/useInView";

const articles = [
  {
    tags: ["Education"],
    title: "How Does Solar Energy Work? A Plain-English Explanation",
    date: "Morton Grove, IL",
    excerpt:
      "Solar panels convert sunlight directly into electricity through photovoltaic cells. That electricity flows through an inverter, powers your home, and any surplus gets sent back to the grid — earning you a credit on your ComEd bill through net metering.",
    href: "/resources/how-solar-works",
  },
  {
    tags: ["Guide"],
    title: "Your Step-by-Step Guide to Going Solar in Illinois",
    date: "Morton Grove, IL",
    excerpt:
      "Going solar in Illinois involves four main steps: a site assessment, system design, permits and interconnection, and installation. We walk every customer through each stage — here's what to expect from your first call to flip-the-switch day.",
    href: "/resources/guide-to-going-solar",
  },
  {
    tags: ["Education"],
    title: "Understanding Net Metering: How Solar Credits Work in Illinois",
    date: "Morton Grove, IL",
    excerpt:
      "Net metering allows your solar system to send excess electricity back to the ComEd grid in exchange for bill credits. When your panels produce more than you use, the meter runs backward — and those credits offset the electricity you draw at night or on cloudy days.",
    href: "/resources/net-metering",
  },
];

export function LatestNews() {
  const { ref, inView } = useInView();

  return (
    <section style={{ background: "#ffffff", padding: "80px 0" }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
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
          <span style={{ color: "#1f1e1e" }}>Solar </span>
          <span style={{ color: "#9f908d" }}>resources</span>
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
                ...fadeUp(inView, 0.1 + i * 0.1),
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
                href={article.href}
                style={{
                  fontSize: 14,
                  color: "#FF5938",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                Read more →
              </a>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a
            href="/resources"
            style={{
              background: "transparent",
              color: "#1f1e1e",
              border: "1.5px solid rgba(31,30,30,0.2)",
              borderRadius: 999,
              padding: "14px 32px",
              fontSize: 15,
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            See all resources
          </a>
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
