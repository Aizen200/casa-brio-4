import type { Metadata } from "next";
import { AboutVillaClient } from "@/components/about-villa-client";

export const metadata: Metadata = {
  title: "About The Villa | Casa Brio Private Villa in Lonavala",
  description:
    "See everything at Casa Brio in Lonavala: 6 AC bedrooms, a private swimming pool, a rooftop cricket turf, a party room and a full kitchen.",
  openGraph: {
    title: "About The Villa | Casa Brio Lonavala",
    description:
      "A private villa with 6 bedrooms, a private pool, a rooftop turf and a party room.",
    images: ["/images/bungalow/drone-facade.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About The Villa | Casa Brio Lonavala",
    description:
      "A private villa with 6 bedrooms, a private pool, a rooftop turf and a party room.",
    images: ["/images/bungalow/drone-facade.jpg"],
  },
};

export default function Page() {
  return <AboutVillaClient />;
}
