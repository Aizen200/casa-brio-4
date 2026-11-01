import type { Metadata } from "next";
import { PartyRoomClient } from "@/components/party-room-client";

export const metadata: Metadata = {
  title: "Party Room | Snooker, Bar & Music | Casa Brio",
  description:
    "The Casa Brio party room has a full-size snooker table, a private bar, leather sofas and a big sound system.",
  openGraph: {
    title: "Party Room | Casa Brio",
    description:
      "A private party room with snooker, foosball and a private bar.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Party Room | Casa Brio",
    description:
      "A private party room with snooker, foosball and a private bar.",
  },
};

export default function Page() {
  return <PartyRoomClient />;
}
