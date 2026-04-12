import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Schedule | Open Door Martial Arts Center",
  description: "View the weekly class schedule at Open Door Martial Arts Center in Sturgeon Bay, Wisconsin.",
};

const schedule = [
  {
    day: "Monday",
    classes: [
      { time: "4:00 PM", name: "Little Dragons", ages: "Ages 4–7", duration: "45 min" },
      { time: "5:00 PM", name: "Youth Taekwondo", ages: "Ages 8–17", duration: "60 min" },
      { time: "—", name: "Adult Taekwondo", ages: "Ages 18+", duration: "—", comingSoon: true },
    ],
  },
  {
    day: "Tuesday",
    classes: [],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "4:00 PM", name: "Little Dragons", ages: "Ages 4–7", duration: "45 min" },
      { time: "5:00 PM", name: "Youth Taekwondo", ages: "Ages 8–17", duration: "60 min" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "6:00 PM", name: "Family Class", ages: "All Ages", duration: "60 min" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "5:00 PM", name: "Youth Taekwondo", ages: "Ages 8–17", duration: "60 min" },
      { time: "—", name: "Adult Taekwondo", ages: "Ages 18+", duration: "—", comingSoon: true },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "10:30 AM", name: "Family Class", ages: "All Ages", duration: "60 min" },
    ],
  },
  {
    day: "Sunday",
    classes: [],
  },
];

const programColors: Record<string, string> = {
  "Little Dragons": "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
  "Youth Taekwondo": "bg-blue-500/10 border-blue-500/30 text-blue-400",
  "Adult Taekwondo": "bg-dojo-red/10 border-dojo-red/30 text-dojo-red",
  "Family Class": "bg-green-500/10 border-green-500/30 text-green-400",
};

export default function SchedulePage() {
  return (
    <div className="bg-dojo-black">
      {/* Hero */}
      <section className="py-20 bg-dojo-gray border-b border-white/5">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-heading text-dojo-red text-xl tracking-[0.2em] mb-3">WHEN WE TRAIN</p>
          <h1 className="font-heading text-6xl sm:text-7xl text-dojo-cream mb-5">CLASS SCHEDULE</h1>
          <p className="text-dojo-cream/60 max-w-xl mx-auto leading-relaxed">
            Classes run weekly. New students are welcome to drop in any time —
            contact us first so we can expect you.
          </p>
        </div>
      </section>

      {/* Schedule grid */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {schedule.map((day) => (
              <div
                key={day.day}
                className={`rounded-xl border ${day.classes.length > 0 ? "bg-dojo-gray border-white/5" : "bg-dojo-gray/30 border-white/5"} p-6`}
              >
                <h2 className="font-heading text-2xl tracking-widest mb-4 text-dojo-cream">
                  {day.day.toUpperCase()}
                </h2>

                {day.classes.length === 0 ? (
                  <p className="text-dojo-cream/30 text-sm italic">No classes scheduled</p>
                ) : (
                  <ul className="flex flex-col gap-3">
                    {day.classes.map((cls) => (
                      <li
                        key={`${day.day}-${cls.name}`}
                        className={`rounded-lg border px-4 py-3 ${
                          cls.comingSoon
                            ? "bg-white/5 border-white/10 opacity-50"
                            : (programColors[cls.name] ?? "bg-white/5 border-white/10 text-dojo-cream")
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className={`font-heading text-lg tracking-wide ${cls.comingSoon ? "text-dojo-cream/60" : ""}`}>
                            {cls.name}
                          </span>
                          {cls.comingSoon ? (
                            <span className="text-xs border border-white/20 text-dojo-cream/40 px-2 py-0.5 rounded tracking-widest uppercase">
                              Coming Soon
                            </span>
                          ) : (
                            <span className="text-xs opacity-60">{cls.duration}</span>
                          )}
                        </div>
                        <div className="flex items-center justify-between text-xs opacity-60">
                          <span>{cls.ages}</span>
                          {!cls.comingSoon && <span className="font-semibold">{cls.time}</span>}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-10 p-6 bg-dojo-gray rounded-xl border border-white/5">
            <h3 className="font-heading text-xl tracking-widest text-dojo-cream mb-4">PROGRAM KEY</h3>
            <div className="flex flex-wrap gap-3">
              {Object.entries(programColors).map(([name, color]) => (
                <span key={name} className={`px-3 py-1 rounded-full border text-xs font-semibold ${color}`}>
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Note */}
          <p className="text-dojo-cream/40 text-sm text-center mt-8">
            Schedule subject to change. Call <a href="tel:+16145550100" className="underline hover:text-dojo-cream transition-colors">(614) 555-0100</a> or{" "}
            <a href="mailto:info@opendoormac.com" className="underline hover:text-dojo-cream transition-colors">email us</a> to confirm class times.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dojo-gray border-t border-white/5">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="font-heading text-4xl text-dojo-cream mb-4">READY TO JUMP IN?</h2>
          <p className="text-dojo-cream/60 mb-8">Your first class is free. No commitment required.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-dojo-red text-white font-heading text-2xl tracking-widest rounded hover:bg-dojo-red-dark transition-colors"
          >
            CLAIM FREE TRIAL
          </Link>
        </div>
      </section>
    </div>
  );
}
