import type { Metadata } from "next";
import RechnungClient from "./RechnungClient";

export const metadata: Metadata = {
  title: "Rechnungen – PrimaMax",
  robots: { index: false, follow: false },
};

export default function RechnungPage() {
  return <RechnungClient />;
}
