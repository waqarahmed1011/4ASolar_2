import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Commercial Solar | 4A Solar",
  description:
    "Commercial solar systems for Illinois businesses of all sizes. Reduce operating costs, qualify for the federal Investment Tax Credit, and achieve energy independence with a NABCEP-certified installer.",
};

export default function CommercialPage() {
  return <StubPage heading="Commercial Solar" />;
}
