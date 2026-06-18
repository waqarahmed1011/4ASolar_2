import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Battery Storage Systems | 4A Solar",
  description:
    "Battery storage systems paired with solar for Illinois homes and businesses. Stay powered through outages and maximize your self-consumption with a professionally designed backup system from 4A Solar.",
};

export default function BatteriesPage() {
  return <StubPage heading="Battery Storage Systems" />;
}
