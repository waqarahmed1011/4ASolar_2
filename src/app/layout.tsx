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
  title: "4A Solar | Keep It Simple",
  description:
    "At 4A Solar, we believe going solar should be straightforward.",
  icons: {
    icon: "/images/brand_assets/favicon.png",
  },
  openGraph: {
    title: "4A Solar | Keep It Simple",
    description:
      "At 4A Solar, we believe going solar should be straightforward.",
    siteName: "4A Solar",
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
