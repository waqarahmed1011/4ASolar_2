import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Solar Service & Repairs | 4A Solar",
  description:
    "Solar system service and repairs for any brand in Illinois. 4A Solar provides diagnostics, repairs, and annual inspections to keep your system running at peak output.",
};

export default function ServiceRepairsPage() {
  return <StubPage heading="Service & Repairs" />;
}
