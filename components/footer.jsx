"use client";

import {
  ArrowRight,
  ArrowUp,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Reveal } from "@/components/reveal";
import Link from "next/link";
let D = MessageCircle;
let P = ExternalLink;
let f = [
    {
      label: "Party Room & Bar",
      href: "/party-room",
    },
    {
      label: "Swimming Pool",
      href: "/gallery",
    },
    {
      label: "Cricket Turf",
      href: "/gallery",
    },
    {
      label: "Bedrooms",
      href: "/about-villa",
    },
    {
      label: "Living Room",
      href: "/about-villa",
    },
    {
      label: "Chef & Meals",
      href: "/contact",
    },
  ],
  g = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "The Villa",
      href: "/about-villa",
    },
    {
      label: "Party Room",
      href: "/party-room",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Guest Reviews",
      href: "/#testimonials",
    },
    {
      label: "Contact & Booking",
      href: "/contact",
    },
  ];
function Footer({ hideInquiryBanner: t } = {}) {
  let h = usePathname();
  return (
    <footer className="relative overflow-hidden bg-[#060607] text-[#f4f0e8]">
      <div className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[#c8a951]/[0.025] blur-[150px]" />
      {!(t || "/contact" === h) && (
        <div className="relative">
          <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 sm:px-8 lg:px-12">
            <Reveal>
              <div className="relative overflow-hidden border border-[rgba(212,175,55,0.2)] bg-[#121015] p-6 shadow-2xl sm:p-10 lg:p-12">
                <div className="relative z-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-12">
                  <div>
                    <div className="mb-4 flex items-center gap-3.5">
                      <span className="h-px w-8 bg-[#d4af37]" />
                      <span className="eyebrow text-xs tracking-[0.28em] font-semibold text-[#d4af37]">
                        BOOK YOUR STAY
                      </span>
                      <span className="h-px w-8 bg-[#d4af37]" />
                    </div>
                    <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-[#f4efe6] pb-2">
                      The Whole Villa.{" "}
                      <span className="text-[#d4af37] font-normal py-1">Just for You.</span>
                    </h2>
                    <p className="mt-5 max-w-xl font-sans text-sm font-light leading-[1.85] text-[#e6dfd5]/80">
                      A small party, a team trip, or a quiet weekend in the hills. Casa Brio is
                      booked by only one group at a time.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-xs font-light tracking-wide text-[#e6dfd5]/85">
                      <span className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#d4af37]" />
                        One Group at a Time
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#d4af37]" />
                        Your Own Chef & Staff
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#d4af37]" />
                        Party As Late As You Like
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:justify-center">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-3.5 border border-[#d4af37] bg-[#d4af37] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#08080a] transition-all duration-300 hover:bg-transparent hover:text-[#d4af37]"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <a
                      href="https://wa.me/919820000000?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20booking%20Casa%20Brio%20estate."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-3.5 border border-[rgba(212,175,55,0.3)] bg-[#08080a] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#f4efe6] transition-all duration-300 hover:border-[#d4af37] hover:text-[#d4af37]"
                    >
                      <D className="h-4 w-4 text-[#d4af37]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      )}
      <div className="mx-auto w-full max-w-7xl px-6 pt-10 pb-16 sm:px-8 sm:pt-12 sm:pb-20 lg:px-12 border-t border-white/[0.08]">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-10 xl:gap-14">
          <Reveal>
            <div className="max-w-[420px]">
              <Link href="/" className="group inline-block">
                <span className="font-serif text-[26px] font-normal tracking-[0.18em] text-[#f4f0e8] transition-colors duration-300 group-hover:text-[#c8a951]">
                  CASA BRIO
                </span>
                <span className="mt-1 block font-sans text-[8.5px] font-medium uppercase tracking-[0.32em] text-[#c8a951]">
                  Private Villa · Lonavala
                </span>
              </Link>
              <p className="mt-6 font-sans text-[13px] font-light leading-[1.8] text-white/55 sm:text-[13.5px]">
                A private villa in Lonavala, close to the Sahyadri hills. Made for families, friends
                and work teams who want the whole place to themselves.
              </p>
              <div className="mt-7 flex flex-col gap-3 font-sans text-[12.5px] text-white/60">
                <a
                  href="tel:+917400338525"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#c8a951]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#c8a951]" />
                  <span>+91 74003 38525</span>
                </a>
                <a
                  href="mailto:reservations@casabrio.in"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#c8a951]"
                >
                  <Mail className="h-3.5 w-3.5 text-[#c8a951]" />
                  <span>reservations@casabrio.in</span>
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <h3 className="font-sans text-[9.5px] font-medium uppercase tracking-[0.28em] text-[#c8a951]">
                The Spaces
              </h3>
              <ul className="mt-6 space-y-3.5">
                {f.map((t) => (
                  <li key={t.label}>
                    <Link
                      href={t.href}
                      className="group inline-flex items-center gap-2 font-sans text-[13px] font-light text-white/55 transition-colors duration-300 hover:text-[#faebd0]"
                    >
                      <span className="h-px w-0 bg-[#c8a951] transition-all duration-300 group-hover:w-3" />
                      <span>{t.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div>
              <h3 className="font-sans text-[9.5px] font-medium uppercase tracking-[0.28em] text-[#c8a951]">
                Pages
              </h3>
              <ul className="mt-6 space-y-3.5">
                {g.map((t) => (
                  <li key={t.label}>
                    <Link
                      href={t.href}
                      className="group inline-flex items-center gap-2 font-sans text-[13px] font-light text-white/55 transition-colors duration-300 hover:text-[#faebd0]"
                    >
                      <span className="h-px w-0 bg-[#c8a951] transition-all duration-300 group-hover:w-3" />
                      <span>{t.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div>
              <h3 className="font-sans text-[9.5px] font-medium uppercase tracking-[0.28em] text-[#c8a951]">
                How to Reach Us
              </h3>
              <div className="mt-6 rounded-xl border border-white/[0.08] bg-[#0d0c10] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#c8a951]" />
                  <div className="font-sans text-[12.5px] font-light leading-[1.65] text-white/70">
                    <p className="font-medium text-[#f4f0e8]">Casa Brio,</p>
                    <p>Tungarli Hill Road,</p>
                    <p>Near Tungarli Lake,</p>
                    <p>Lonavala, Maharashtra 410401</p>
                  </div>
                </div>
                <div className="mt-4 border-t border-white/[0.06] pt-3.5 font-sans text-[11.5px] text-white/45">
                  <p>🚗 About 90 mins from Mumbai (by Expressway)</p>
                  <p className="mt-1">🚗 About 60 mins from Pune (by Expressway)</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Tungarli+Lake+Lonavala+Maharashtra+410401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#d8bd61] transition-colors hover:text-[#faebd0]"
                >
                  <span>Get Directions</span>
                  <P className="h-3 w-3" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="border-t border-white/[0.07] bg-black/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-5 py-6 sm:px-7 md:flex-row md:px-10 lg:px-12 xl:px-14">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/35">
            {"© "}
            {new Date().getFullYear()}
            {" Casa Brio. All rights reserved."}
          </p>
          <div className="flex items-center gap-6 font-sans text-[10px] uppercase tracking-[0.18em] text-white/35">
            <Link href="/contact" className="transition-colors hover:text-white/70">
              Booking Terms
            </Link>
            <span>·</span>
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              type="button"
              className="inline-flex items-center gap-1.5 text-[#c8a951] transition-colors hover:text-[#faebd0]"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
export default Footer;
