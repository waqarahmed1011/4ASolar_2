import Image from "next/image";
import { LinkedInIcon } from "@/components/icons";

const col1 = {
  header: "Our expertise",
  links: ["Wind Energy", "Solar Energy", "Hydrogen development", "Energy supply", "Service companies"],
};
const col2 = {
  header: "Your Activity",
  links: ["Local Communities", "Logistics Service Providers", "Manufacturing operations", "Retail Businesses", "Solutions for landowners"],
};
const col3 = {
  header: null,
  links: ["About Us", "Resources", "News", "Cooperatives", "Careers"],
};

export function SiteFooter() {
  return (
    <footer style={{ background: "#0F4338" }}>
      {/* Pre-footer CTA card */}
      <div style={{ padding: "60px 80px 0" }}>
        <div
          style={{
            background: "#185649",
            borderRadius: 24,
            padding: "60px 80px",
            position: "relative",
            overflow: "hidden",
            maxWidth: 1280,
            margin: "0 auto",
            minHeight: 220,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "#ffffff",
              maxWidth: 700,
            }}
          >
            Start your{" "}
            <span style={{ color: "#FF5938" }}>energy transition</span>
            {" "}today.
          </h2>

          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#FF5938",
              color: "#ffffff",
              borderRadius: 999,
              padding: "16px 32px",
              fontSize: 16,
              textDecoration: "none",
              marginTop: 32,
              width: "fit-content",
            }}
          >
            Get started →
          </a>

          <div
            style={{
              position: "absolute",
              right: -20,
              top: -20,
              bottom: -20,
              width: 300,
              background: "rgba(255,255,255,0.04)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Footer content */}
      <div style={{ padding: "60px 80px 40px", maxWidth: 1440, margin: "0 auto" }}>
        {/* Logo */}
        <div style={{ marginBottom: 48 }}>
          <Image
            src="/images/virya-logo.png"
            width={100}
            height={49}
            alt="Virya Energy"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Nav columns */}
        <div
          className="footer-nav-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {[col1, col2, col3].map((col, i) => (
            <div key={i}>
              {col.header && (
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: 16,
                  }}
                >
                  {col.header}
                </p>
              )}
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontSize: 15,
                    color: "rgba(255,255,255,0.75)",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: 10,
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}

          {/* Follow us column */}
          <div>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 16,
              }}
            >
              Follow us
            </p>
            <a href="#" style={{ color: "rgba(255,255,255,0.7)", display: "inline-block" }}>
              <LinkedInIcon width={24} height={24} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span>Copyright © 2026</span>
          <span>Virya Energy</span>
          <span>Privacy Policy · Cookie Policy</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-nav-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-nav-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
