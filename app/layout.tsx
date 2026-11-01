import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://casa-brio-rose.vercel.app"),
  title: "Casa Brio | Private Villa in Lonavala | Pool, Turf & Party Room",
  description:
    "Casa Brio is a private villa in Lonavala, booked by one group at a time. It has a private swimming pool, a cricket turf with floodlights, and a party room with a snooker table.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${jakarta.variable} font-sans h-full antialiased dark`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans bg-[#08080a] text-[#f4efe6] pb-16 md:pb-0"
      >
        {children}
        <MobileBottomNav />
      </body>
    </html>
  );
}
