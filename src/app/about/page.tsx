import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "About 4A Solar | Sam Syed, NABCEP-Certified",
  description:
    "Meet Sam Syed — former Motorola Senior Electrical Engineer, NABCEP instructor, and founder of 4A Solar. 15+ years of solar experience, 100+ systems installed, and a 100% five-star customer satisfaction record across his career.",
};

export default function AboutPage() {
  return <StubPage heading="About 4A Solar" />;
}
