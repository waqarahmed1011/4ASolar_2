"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Residential Solar",
  "Commercial Solar",
  "Solar for Non-Profits",
  "Battery Storage Systems",
  "EV Charger Installation",
  "Service & Repairs",
  "Solar Incentives Inquiry",
];

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY",
];

export function ContactSection() {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    const body = new URLSearchParams({
      "form-name": "contact",
      "first-name": formData.firstName,
      "last-name": formData.lastName,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      notes: formData.notes,
    });
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    fontSize: 15,
    color: "#1f1e1e",
    background: "#f8f5f2",
    border: "1.5px solid rgba(31,30,30,0.12)",
    borderRadius: 12,
    outline: "none",
    transition: "border-color 0.2s ease",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  const primaryBtn: React.CSSProperties = {
    background: "#FF5938",
    color: "#ffffff",
    border: "none",
    borderRadius: 999,
    padding: "16px 40px",
    fontSize: 16,
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "background 0.2s ease",
    flex: 1,
  };

  const secondaryBtn: React.CSSProperties = {
    background: "transparent",
    color: "rgba(255,255,255,0.7)",
    border: "1.5px solid rgba(255,255,255,0.25)",
    borderRadius: 999,
    padding: "16px 32px",
    fontSize: 16,
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "border-color 0.2s ease",
    flex: 1,
  };

  return (
    <section id="contact" style={{ background: "#1f1e1e", padding: "80px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* Left: form */}
          <div>
            <h2
              style={{
                fontSize: "clamp(32px, 3.5vw, 48px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "#ffffff",
                marginBottom: 8,
              }}
            >
              Free Consultation
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", marginBottom: 36, lineHeight: 1.5 }}>
              Reserve a consultation with an expert.
            </p>

            {submitted ? (
              <div
                style={{
                  background: "rgba(255,89,56,0.12)",
                  border: "1.5px solid rgba(255,89,56,0.3)",
                  borderRadius: 16,
                  padding: "32px 24px",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: 18, color: "#FF5938", marginBottom: 8 }}>Thank you!</p>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)" }}>
                  We&apos;ll be in touch soon to schedule your consultation.
                </p>
              </div>
            ) : page === 1 ? (
              <div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 16,
                  }}
                >
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div style={{ marginBottom: 28 }}>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
                  >
                    <option value="" disabled>Select a service</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="button"
                  onClick={() => setPage(2)}
                  style={{ ...primaryBtn, width: "100%" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#e84e30";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#FF5938";
                  }}
                >
                  NEXT
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 16 }}>
                  <input
                    name="address"
                    type="text"
                    placeholder="Street address"
                    value={formData.address}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 16,
                  }}
                >
                  <input
                    name="city"
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
                  >
                    <option value="" disabled>State</option>
                    {US_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <input
                    name="zip"
                    type="text"
                    placeholder="ZIP code"
                    value={formData.zip}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div style={{ marginBottom: 28 }}>
                  <textarea
                    name="notes"
                    placeholder="Is there anything else we should know?"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: 100,
                    }}
                  />
                </div>

                {error && (
                  <p style={{ fontSize: 13, color: "#FF5938", marginBottom: 16 }}>
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    type="button"
                    onClick={() => setPage(1)}
                    style={secondaryBtn}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.6)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.25)";
                    }}
                  >
                    GO BACK
                  </button>
                  <button
                    type="submit"
                    style={primaryBtn}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "#e84e30";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "#FF5938";
                    }}
                  >
                    SCHEDULE
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: contact info */}
          <div style={{ paddingTop: 8 }}>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 400,
                color: "#ffffff",
                marginBottom: 32,
                letterSpacing: "-0.01em",
              }}
            >
              Contact Information
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <div>
                <p style={{ fontSize: 12, color: "#FF5938", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Phone</p>
                <a
                  href="tel:773-502-1529"
                  style={{ fontSize: 18, color: "#ffffff", textDecoration: "none" }}
                >
                  773-502-1529
                </a>
              </div>

              <div>
                <p style={{ fontSize: 12, color: "#FF5938", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Email</p>
                <a
                  href="mailto:contact@4asolar.com"
                  style={{ fontSize: 18, color: "#ffffff", textDecoration: "none" }}
                >
                  contact@4asolar.com
                </a>
              </div>

              <div>
                <p style={{ fontSize: 12, color: "#FF5938", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Address</p>
                <a
                  href="https://maps.google.com/?q=5912+Crain+St,+Morton+Grove,+IL+60053"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", textDecoration: "none", lineHeight: 1.5 }}
                >
                  5912 Crain St<br />
                  Morton Grove, Illinois 60053
                </a>
              </div>

              <div>
                <p style={{ fontSize: 12, color: "#FF5938", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Electrical License</p>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)" }}>
                  Lic. #24-35956
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
