import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Solar for Non-Profits | 4A Solar",
  description:
    "4A Solar helps Illinois non-profits navigate grant-eligible solar pathways and special incentive programs unavailable to for-profit entities, maximizing savings and mission impact.",
};

export default function NonProfitsPage() {
  return <StubPage heading="Solar for Non-Profits" />;
}
