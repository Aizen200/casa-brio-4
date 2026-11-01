import type { Metadata } from "next";
import { SectionDivider } from "@/components/section-divider";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/home-hero";
import { HomeAbout } from "@/components/home/home-about";
import { Amenities } from "@/components/home/amenities";
import { Journey } from "@/components/home/journey";
import { PartyRoomSection } from "@/components/home/party-room-section";
import { EstateFeatures } from "@/components/home/estate-features";
import { Testimonials } from "@/components/home/testimonials";

export const metadata: Metadata = {
  title: "Casa Brio | Private Villa in Lonavala | Pool, Turf & Party Room",
  description:
    "Casa Brio is a private villa in Lonavala, booked by one group at a time. It has a private swimming pool, a cricket turf with floodlights, and a party room with a snooker table.",
  openGraph: {
    title: "Casa Brio | Private Villa in Lonavala",
    description:
      "A private villa for one group, with a pool, a cricket turf and a party room.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Casa Brio | Private Villa in Lonavala",
    description:
      "A private villa for one group, with a pool, a cricket turf and a party room.",
  },
};

export default function Home() {
  return (
    <main
      suppressHydrationWarning
      className="min-h-screen bg-[#08080a] text-foreground overflow-x-clip"
    >
      <Hero />
      <SectionDivider />
      <HomeAbout />
      <SectionDivider />
      <Amenities />
      <SectionDivider />
      <Journey />
      <SectionDivider />
      <PartyRoomSection />
      <SectionDivider />
      <EstateFeatures />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <Footer />
    </main>
  );
}
