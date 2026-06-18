import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Residential Solar | 4A Solar",
  description:
    "Professional residential solar installation across Illinois. Sam Syed, NABCEP-certified with 15+ years of experience, designs every system based on your actual usage and roof conditions — no oversizing, no pressure.",
};

export default function ResidentialPage() {
  return <StubPage heading="Residential Solar" />;
}
