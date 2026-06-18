import Image from "next/image";
import { LinkedInIcon, YouTubeIcon, InstagramIcon } from "@/components/icons";

const col1 = {
  header: "Our Services",
  links: [
    { label: "Residential Solar", href: "/residential" },
    { label: "Commercial Solar", href: "/commercial" },
    { label: "Solar for Non-Profits", href: "/non-profits" },
    { label: "Battery Storage", href: "/batteries" },
    { label: "EV Chargers", href: "/ev-chargers" },
    { label: "Service & Repairs", href: "/service-repairs" },
    { label: "Solar Incentives", href: "/solar-incentives" },
  ],
};

const col2 = {
  header: "Who We Serve",
  links: [
    { label: "Homeowners", href: "/residential" },
    { label: "Businesses", href: "/commercial" },
    { label: "Non-Profits", href: "/non-profits" },
  ],
};

const col3 = {
  header: null,
  links: [
    { label: "About Us", href: "/about" },
    { label: "Solar Resources", href: "/resources" },
    { label: "Contact Us", href: "#contact" },
    { label: "Service Area", href: "#service-area" },
    { label: "Illinois Solar Incentives", href: "/solar-incentives" },
  ],
};

const socialLinks = [
  { icon: LinkedInIcon, href: "https://www.linkedin.com", label: "LinkedIn" },
  { icon: YouTubeIcon, href: "https://www.youtube.com", label: "YouTube" },
  { icon: InstagramIcon, href: "https://www.instagram.com", label: "Instagram" },
];

export function SiteFooter() {
  return (
    <footer style={{ background: "#08426E" }}>
      {/* Pre-footer CTA card */}
      <div style={{ padding: "60px 80px 0" }}>
        <div
          style={{
            background: "#0f6499",
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
            Start saving with{" "}
            <span style={{ color: "#FF5938" }}>solar energy</span>
            {" "}today.
          </h2>

          <a
            href="#contact"
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
            Get a Free Quote →
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
        <div style={{ marginBottom: 24 }}>
          <Image
            src="/images/4asolar-logo.png"
            width={120}
            height={52}
            alt="4A Solar"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Contact info row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 24px",
            marginBottom: 48,
            fontSize: 13,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          <a href="https://maps.google.com/?q=5912+Crain+St,+Morton+Grove,+IL+60053" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            5912 Crain St, Morton Grove, Illinois 60053
          </a>
          <span>·</span>
          <a href="mailto:contact@4asolar.com" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>contact@4asolar.com</a>
          <span>·</span>
          <a href="tel:773-502-1529" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>773-502-1529</a>
          <span>·</span>
          <span>Lic. #24-35956</span>
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
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: 15,
                    color: "rgba(255,255,255,0.75)",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: 10,
                  }}
                >
                  {link.label}
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
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ color: "rgba(255,255,255,0.7)", display: "inline-flex" }}
                >
                  <Icon width={24} height={24} />
                </a>
              ))}
            </div>
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
          <span>Copyright © 2026 JBW Tech Co</span>
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
