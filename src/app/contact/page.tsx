"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    try {
      const res = await fetch("https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <div className="bg-dojo-black">
      {/* Hero */}
      <section className="py-20 bg-dojo-gray border-b border-white/5">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-heading text-dojo-red text-xl tracking-[0.2em] mb-3">GET STARTED</p>
          <h1 className="font-heading text-6xl sm:text-7xl text-dojo-ink mb-5">FREE CLASS</h1>
          <p className="text-dojo-ink/80 max-w-xl mx-auto leading-relaxed">
            Fill out the form below and we&apos;ll reach out to get you scheduled for your first free class.
            No commitment, no pressure.
          </p>
        </div>
      </section>

      {/* Waiver */}
      <section className="py-10 border-b border-white/5">
        <div className="mx-auto max-w-5xl px-6">
          <div className="bg-dojo-gray rounded-2xl border border-white/5 p-8 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex-1">
              <h2 className="font-heading text-2xl tracking-wide text-dojo-ink mb-3">Before Your First Class</h2>
              <p className="text-dojo-ink/80 text-sm leading-relaxed">
                We ask all new participants to complete a waiver before stepping on the mat. You can
                download it below, fill it out at home, and bring it with you, or we&apos;ll have a
                copy waiting for you when you arrive.
              </p>
            </div>
            <a
              href="/OpenDoor_Waiver.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-dojo-red text-white font-heading text-xl tracking-widest rounded hover:bg-dojo-red-dark transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              DOWNLOAD WAIVER (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-14">
          {/* Form */}
          <div>
            <h2 className="font-heading text-3xl tracking-widest text-dojo-ink mb-6">REQUEST FREE CLASS</h2>

            {state === "success" ? (
              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-8 text-center">
                <p className="text-4xl mb-4">✅</p>
                <h3 className="font-heading text-2xl text-dojo-ink mb-2">WE GOT YOUR MESSAGE!</h3>
                <p className="text-dojo-ink/90 text-sm leading-relaxed">
                  Thanks for reaching out! We&apos;ll contact you within 24 hours to get your free class scheduled.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-dojo-ink/80 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      className="w-full bg-dojo-gray border border-white/10 rounded-lg px-4 py-3 text-dojo-ink placeholder-dojo-ink/30 focus:outline-none focus:border-dojo-red/60 transition-colors text-sm"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-dojo-ink/80 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      className="w-full bg-dojo-gray border border-white/10 rounded-lg px-4 py-3 text-dojo-ink placeholder-dojo-ink/30 focus:outline-none focus:border-dojo-red/60 transition-colors text-sm"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-dojo-ink/80 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-dojo-gray border border-white/10 rounded-lg px-4 py-3 text-dojo-ink placeholder-dojo-ink/30 focus:outline-none focus:border-dojo-red/60 transition-colors text-sm"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-dojo-ink/80 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full bg-dojo-gray border border-white/10 rounded-lg px-4 py-3 text-dojo-ink placeholder-dojo-ink/30 focus:outline-none focus:border-dojo-red/60 transition-colors text-sm"
                    placeholder="(614) 555-0000"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-dojo-ink/80 mb-2">
                    Program of Interest
                  </label>
                  <select
                    name="program"
                    className="w-full bg-dojo-gray border border-white/10 rounded-lg px-4 py-3 text-dojo-ink focus:outline-none focus:border-dojo-red/60 transition-colors text-sm"
                  >
                    <option value="">Select a program...</option>
                    <option value="Little Dragons">Little Dragons (Ages 4–7)</option>
                    <option value="All Levels">All Levels (Ages 8+)</option>
                    <option value="Not Sure">Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-dojo-ink/80 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-dojo-gray border border-white/10 rounded-lg px-4 py-3 text-dojo-ink placeholder-dojo-ink/30 focus:outline-none focus:border-dojo-red/60 transition-colors text-sm resize-none"
                    placeholder="Any questions, preferred class days, or other details..."
                  />
                </div>

                {state === "error" && (
                  <p className="text-dojo-red text-sm">
                    Something went wrong. Please try again or call us at{" "}
                    <a href="tel:+16145550100" className="underline">(614) 555-0100</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="py-4 bg-dojo-red text-white font-heading text-2xl tracking-widest rounded hover:bg-dojo-red-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state === "submitting" ? "SENDING..." : "REQUEST FREE CLASS"}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-heading text-3xl tracking-widest text-dojo-ink mb-6">CONTACT INFO</h2>
            </div>

            {[
              {
                icon: "📍",
                title: "Location",
                content: "525 Jefferson Street, Sturgeon Bay, WI",
              },
              {
                icon: "📞",
                title: "Phone",
                content: "(614) 555-0100",
                href: "tel:+16145550100",
              },
              {
                icon: "✉️",
                title: "Email",
                content: "info@opendoormac.com",
                href: "mailto:info@opendoormac.com",
              },
            ].map((item) => (
              <div key={item.title} className="bg-dojo-gray rounded-xl p-6 border border-white/5 flex gap-4">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-heading text-xl tracking-wide text-dojo-ink mb-1">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-dojo-ink/90 hover:text-dojo-ink transition-colors text-sm">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-dojo-ink/90 text-sm">{item.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Hours */}
            <div className="bg-dojo-gray rounded-xl p-6 border border-white/5">
              <h3 className="font-heading text-xl tracking-wide text-dojo-ink mb-4">CLASS HOURS</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {[
                  { day: "Monday", time: "Closed" },
                  { day: "Tuesday", time: "4:30 PM – 6:30 PM" },
                  { day: "Wednesday", time: "Closed" },
                  { day: "Thursday", time: "4:30 PM – 6:30 PM" },
                  { day: "Friday", time: "Closed" },
                  { day: "Saturday", time: "10:30 AM – 11:30 AM" },
                ].map((row) => (
                  <li key={row.day} className="flex justify-between">
                    <span className="text-dojo-ink/80 font-semibold">{row.day}</span>
                    <span className={row.time === "Closed" ? "text-dojo-ink/60" : "text-dojo-ink"}>
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
