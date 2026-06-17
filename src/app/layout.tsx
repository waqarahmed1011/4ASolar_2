import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Virya Energy | Fit For Purpose Energy",
  description:
    "Fit for purpose energy: Virya Energy delivers tailored renewable solutions in solar, wind and hydrogen to power a sustainable future.",
  icons: {
    icon: "/seo/favicon.png",
  },
  openGraph: {
    title: "Virya Energy | Fit For Purpose Energy",
    description:
      "Fit for purpose energy: Virya Energy delivers tailored renewable solutions in solar, wind and hydrogen to power a sustainable future.",
    siteName: "Virya Energy",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
