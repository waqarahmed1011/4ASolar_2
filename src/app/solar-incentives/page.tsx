import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Solar Incentives Consulting | 4A Solar",
  description:
    "Expert guidance on Illinois solar incentives: Federal Investment Tax Credit, Illinois Shines SRECs, ComEd rebates, and net metering. Know exactly what you'll save before you commit.",
};

export default function SolarIncentivesPage() {
  return <StubPage heading="Solar Incentives Consulting" />;
}
