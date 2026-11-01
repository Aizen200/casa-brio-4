import type { Metadata } from "next";
import { ContactClient } from "@/components/contact-client";

export const metadata: Metadata = {
  title: "Book Casa Brio | Contact Us | Private Villa in Lonavala",
  description:
    "Contact us to book Casa Brio. Ask about free dates, food menus and prices.",
};

export default function Page() {
  return <ContactClient />;
}
