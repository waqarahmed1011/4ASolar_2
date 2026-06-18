import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "EV Charger Installation | 4A Solar",
  description:
    "Level 2 EV charger installation for Illinois homes and businesses. Charge your vehicle on clean solar energy with a professional installation from 4A Solar, Illinois' NABCEP-certified solar installer.",
};

export default function EvChargersPage() {
  return <StubPage heading="EV Charger Installation" />;
}
