import Link from "next/link";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

interface StubPageProps {
  heading: string;
}

export function StubPage({ heading }: StubPageProps) {
  return (
    <>
      <SiteHeader alwaysScrolled />
      <main
        style={{
          background: "#fefefe",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "160px 24px 80px",
            maxWidth: 640,
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(36px, 3.84vw, 55.25px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#1f1e1e",
              marginBottom: 24,
            }}
          >
            {heading}
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#9f908d",
              lineHeight: 1.5,
              marginBottom: 32,
            }}
          >
            This page is coming soon — full content is on its way.
          </p>
          <Link href="/#contact" className="virya-btn-primary">
            Get a Free Quote →
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
