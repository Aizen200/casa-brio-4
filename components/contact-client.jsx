"use client";

import { ArrowUpRight, Check, CircleCheck, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { motion } from "framer-motion";
import { Footer } from "@/components/footer";
import { whatsappUrl } from "@/components/whatsapp";
let I = Check;
let C = CircleCheck;
let M = MessageSquare;
let U = ArrowUpRight;
let o = encodeURIComponent("Tungarli Lake, Lonavala, Maharashtra 410401");
function ContactClient() {
  let [e, r] = useState({
      name: "",
      phone: "",
      email: "",
      checkIn: "",
      checkOut: "",
      guests: "12 Guests",
      occasion: "Private Getaway",
      addons: [],
      notes: "",
    }),
    [l, n] = useState(!1),
    x = whatsappUrl(`Hello Casa Brio,

I would like to book the villa:
- Name: ${e.name || "[Guest Name]"}
- Dates: ${e.checkIn || "TBD"} to ${e.checkOut || "TBD"}
- Guests: ${e.guests}
- Occasion: ${e.occasion}
- Extras: ${e.addons.join(", ") || "None specified"}${e.notes ? `
- Notes: ${e.notes}` : ""}`),
    p =
      "mt-2 h-12 w-full border border-[rgba(212,175,55,0.2)] bg-[#121015] px-4 text-sm font-sans font-light text-[#f4efe6] outline-none transition-all placeholder:text-[#a39c93] focus:border-[#d4af37]",
    v = "block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4af37]";
  return (
    <div
      suppressHydrationWarning={!0}
      className="min-h-screen bg-[#08080a] text-[#f4efe6] selection:bg-[#d4af37]/30"
    >
      <SiteHeader />
      <main>
        <section className="relative flex min-h-[58vh] items-end overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/bungalow/master-suite-view.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/65 to-[#080808]/20" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 sm:px-8 lg:px-12 lg:pb-20">
            <Reveal>
              <div className="mb-4 flex items-center gap-3.5">
                <span className="h-px w-8 bg-[#d4af37]" />
                <span className="eyebrow text-xs tracking-[0.28em] font-semibold text-[#d4af37]">
                  BOOK YOUR STAY
                </span>
                <span className="h-px w-8 bg-[#d4af37]" />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-[#f4efe6]">
                Book the Whole Villa.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl font-sans text-sm font-light leading-[1.85] text-[#e6dfd5]/80">
                One villa. One group. Tell us your dates and we will take care of the rest.
              </p>
            </Reveal>
          </div>
        </section>
        <section className="border-t border-white/8 bg-[#080808]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-14 lg:py-24">
            <div className="grid gap-16 lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.75fr)] lg:gap-24">
              <Reveal>
                <div className="border border-white/12 bg-[#101010] p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-8">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.25em] text-[#b99a55]">
                        Booking Form
                      </p>
                      <h2 className="mt-3 font-serif text-3xl font-normal text-[#f7f3eb] sm:text-4xl">
                        Plan your stay
                      </h2>
                    </div>
                    <span className="hidden text-[11px] uppercase tracking-[0.2em] text-neutral-600 sm:block">
                      Casa Brio
                    </span>
                  </div>
                  {l ? (
                    <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                      <C className="h-10 w-10 text-[#b99a55]" />
                      <h3 className="mt-6 font-serif text-3xl font-normal text-[#f7f3eb]">
                        Send your request on WhatsApp
                      </h3>
                      <p className="mt-4 max-w-md text-sm leading-7 text-neutral-400">
                        Thank you, <span className="text-white">{e.name || "Guest"}</span>. WhatsApp has
                        opened with your details. Press send and our team will reply soon.
                      </p>
                      <div className="mt-8 flex flex-wrap justify-center gap-6">
                        <a
                          href={x}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 border-b border-[#b99a55] pb-2 text-[12px] font-medium uppercase tracking-[0.2em] text-[#d0b36d] transition-colors hover:text-white"
                        >
                          Open WhatsApp
                          <U className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                        <button
                          onClick={() => n(!1)}
                          className="border-b border-white/20 pb-2 text-[12px] uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:border-white/50 hover:text-white"
                        >
                          Send another request
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        (e.preventDefault(), n(!0), window.open(x, "_blank", "noopener,noreferrer"));
                      }}
                      className="mt-9 space-y-8"
                    >
                      <div>
                        <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                          Your Details
                        </p>
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <label className={v}>Full Name *</label>
                            <input
                              type="text"
                              required={!0}
                              placeholder="Your full name"
                              value={e.name}
                              onChange={(a) =>
                                r({
                                  ...e,
                                  name: a.target.value,
                                })
                              }
                              className={p}
                            />
                          </div>
                          <div>
                            <label className={v}>WhatsApp / Phone *</label>
                            <input
                              type="tel"
                              required={!0}
                              placeholder="+91 00000 00000"
                              value={e.phone}
                              onChange={(a) =>
                                r({
                                  ...e,
                                  phone: a.target.value,
                                })
                              }
                              className={p}
                            />
                          </div>
                        </div>
                        <div className="mt-6">
                          <label className={v}>Email Address *</label>
                          <input
                            type="email"
                            required={!0}
                            placeholder="your@email.com"
                            value={e.email}
                            onChange={(a) =>
                              r({
                                ...e,
                                email: a.target.value,
                              })
                            }
                            className={p}
                          />
                        </div>
                      </div>
                      <div className="border-t border-white/8 pt-8">
                        <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                          Your Stay
                        </p>
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <label className={v}>Check-In Date *</label>
                            <input
                              type="date"
                              required={!0}
                              value={e.checkIn}
                              onChange={(a) =>
                                r({
                                  ...e,
                                  checkIn: a.target.value,
                                })
                              }
                              className={`${p} [color-scheme:dark]`}
                            />
                          </div>
                          <div>
                            <label className={v}>Check-Out Date *</label>
                            <input
                              type="date"
                              required={!0}
                              value={e.checkOut}
                              onChange={(a) =>
                                r({
                                  ...e,
                                  checkOut: a.target.value,
                                })
                              }
                              className={`${p} [color-scheme:dark]`}
                            />
                          </div>
                        </div>
                        <div className="mt-6 grid gap-6 sm:grid-cols-2">
                          <div>
                            <label className={v}>Number of Guests</label>
                            <select
                              value={e.guests}
                              onChange={(a) =>
                                r({
                                  ...e,
                                  guests: a.target.value,
                                })
                              }
                              className={p}
                            >
                              <option value="Up to 6 Guests">Up to 6 Guests</option>
                              <option value="8 - 12 Guests">8 - 12 Guests</option>
                              <option value="12 - 16 Guests">12 - 16 Guests</option>
                              <option value="16 - 20 Guests">16 - 20 Guests</option>
                            </select>
                          </div>
                          <div>
                            <label className={v}>Occasion</label>
                            <select
                              value={e.occasion}
                              onChange={(a) =>
                                r({
                                  ...e,
                                  occasion: a.target.value,
                                })
                              }
                              className={p}
                            >
                              <option value="Private Getaway">Holiday / Getaway</option>
                              <option value="Birthday Bash">Birthday Party</option>
                              <option value="Bachelor / Bachelorette">
                                Bachelor / Bachelorette
                              </option>
                              <option value="Executive Offsite">Office Trip</option>
                              <option value="Family Gathering">Family Gathering</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-white/8 pt-8">
                        <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                          Extras (Optional)
                        </p>
                        <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                          {[
                            "Chef-Cooked BBQ & Meals",
                            "Bartender for the Party Room",
                            "Cricket Match Setup",
                            "Car Pickup from Mumbai/Pune",
                          ].map((t) => {
                            let s = e.addons.includes(t);
                            return (
                              <button
                                type="button"
                                onClick={() => {
                                  r((e) => ({
                                    ...e,
                                    addons: e.addons.includes(t)
                                      ? e.addons.filter((e) => e !== t)
                                      : [...e.addons, t],
                                  }));
                                }}
                                className="group flex items-center gap-3 py-2 text-left"
                                key={t}
                              >
                                <span
                                  className={`flex h-4 w-4 shrink-0 items-center justify-center border transition-all ${s ? "border-[#b99a55] bg-[#b99a55] text-black" : "border-white/25 group-hover:border-[#b99a55]"}`}
                                >
                                  {s && <I className="h-3 w-3" />}
                                </span>
                                <span
                                  className={`text-sm transition-colors ${s ? "text-white" : "text-neutral-400 group-hover:text-neutral-200"}`}
                                >
                                  {t}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div className="border-t border-white/8 pt-8">
                        <label className={v}>Anything Else?</label>
                        <textarea
                          rows={4}
                          placeholder="Food preferences, what you are celebrating, arrival time..."
                          value={e.notes}
                          onChange={(a) =>
                            r({
                              ...e,
                              notes: a.target.value,
                            })
                          }
                          className="mt-2 w-full resize-none border border-white/15 bg-[#111112] px-4 py-4 text-[16px] text-white outline-none transition-all placeholder:text-neutral-600 focus:border-[#b99a55] focus:bg-[#151514]"
                        />
                      </div>
                      <div className="flex flex-col gap-5 border-t border-white/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-sm text-xs leading-5 text-neutral-600">
                          Dates depend on availability. Our team will reply on WhatsApp to confirm your booking.
                        </p>
                        <motion.button
                          type="submit"
                          whileHover={{
                            x: 4,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="group flex shrink-0 items-center gap-3 border-b border-[#b99a55] pb-2 text-[12px] font-medium uppercase tracking-[0.22em] text-[#d0b36d] transition-colors hover:text-white"
                        >
                          Send on WhatsApp
                          <U className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </motion.button>
                      </div>
                    </form>
                  )}
                </div>
              </Reveal>
              <div className="lg:pt-2">
                <Reveal delay={0.1}>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#b99a55]">
                      Talk to Us
                    </p>
                    <h2 className="mt-4 max-w-md font-serif text-3xl font-normal leading-tight text-[#f7f3eb] sm:text-4xl">
                      Prefer to talk? Reach us directly.
                    </h2>
                    <p className="mt-5 max-w-md text-sm leading-7 text-neutral-400">
                      Call, email or WhatsApp us to check dates, plan meals, arrange travel, or
                      ask anything before you arrive.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.18}>
                  <div className="mt-12 border-t border-white/10">
                    <div className="border-b border-white/10 py-6">
                      <div className="flex gap-4">
                        <Phone className="mt-1 h-4 w-4 shrink-0 text-[#b99a55]" />
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                            Phone
                          </p>
                          <a
                            href="tel:+917400338525"
                            className="mt-2 block text-sm text-white transition-colors hover:text-[#d0b36d]"
                          >
                            +91 74003 38525
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-white/10 py-6">
                      <div className="flex gap-4">
                        <Mail className="mt-1 h-4 w-4 shrink-0 text-[#b99a55]" />
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                            Email
                          </p>
                          <a
                            href="mailto:reservations@casabrio.in"
                            className="mt-2 block text-sm text-white transition-colors hover:text-[#d0b36d]"
                          >
                            reservations@casabrio.in
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-white/10 py-6">
                      <div className="flex gap-4">
                        <M className="mt-1 h-4 w-4 shrink-0 text-[#b99a55]" />
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                            WhatsApp
                          </p>
                          <a
                            href={whatsappUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mt-2 inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-[#d0b36d]"
                          >
                            Chat with us
                            <U className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.26}>
                  <div className="mt-12">
                    <div className="flex gap-4">
                      <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#b99a55]" />
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                          Address
                        </p>
                        <p className="mt-3 text-sm leading-6 text-neutral-300">
                          Casa Brio,
                          <br />
                          Tungarli Hill Road,
                          <br />
                          Near Tungarli Lake,
                          <br />
                          Lonavala, Maharashtra 410401
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.34}>
                  <div className="mt-12 border-t border-white/10 pt-8">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#b99a55]">
                      Travel Time
                    </p>
                    <div className="mt-5">
                      {[
                        {
                          city: "Mumbai",
                          time: "90–110 min",
                        },
                        {
                          city: "Pune",
                          time: "65–75 min",
                        },
                        {
                          city: "Navi Mumbai",
                          time: "55–65 min",
                        },
                        {
                          city: "Lonavala Station",
                          time: "8 min",
                        },
                      ].map((e) => (
                        <div
                          className="flex items-center justify-between border-b border-white/8 py-4"
                          key={e.city}
                        >
                          <span className="text-sm text-neutral-300">{e.city}</span>
                          <span className="font-sans font-medium text-xs text-[#b99a55]">
                            {e.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.42}>
                  <div className="mt-12">
                    <p className="max-w-sm border-l border-[#b99a55]/60 pl-5 text-sm leading-7 text-neutral-400">
                      Casa Brio is booked by only one group at a time. No one else stays at the
                      villa during your visit.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-white/8 bg-[#080808]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-14 lg:py-20">
            <Reveal>
              <div className="flex flex-col gap-4 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#b99a55]">
                    Location
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-normal text-[#f7f3eb] sm:text-4xl">
                    Find us on the map
                  </h2>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${o}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 self-start border-b border-[#b99a55] pb-2 text-[12px] font-medium uppercase tracking-[0.2em] text-[#d0b36d] transition-colors hover:text-white sm:self-auto"
                >
                  Open in Google Maps
                  <U className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
              <div className="relative h-[360px] w-full overflow-hidden border border-white/12 bg-[#101010] sm:h-[440px]">
                <iframe
                  title="Casa Brio location on Google Maps"
                  src={`https://www.google.com/maps?q=${o}&output=embed`}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen={!0}
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer hideInquiryBanner={!0} />
    </div>
  );
}
export { ContactClient };
export default ContactClient;
