import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery-client";

export const metadata: Metadata = {
  title: "Photo Gallery | Casa Brio Private Villa in Lonavala",
  description:
    "See photos of Casa Brio: the cricket turf, the pool, the party room and the bedrooms.",
};

export default function Page() {
  return <GalleryClient />;
}
