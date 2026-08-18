import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Schedule | Open Door Martial Arts Center",
  description: "View the weekly class schedule at Open Door Martial Arts Center in Sturgeon Bay, Wisconsin.",
};

const schedule = [
  {
    day: "Monday",
    classes: [],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "4:30 PM", name: "Little Dragons", ages: "Ages 4–7", duration: "30 min" },
      { time: "5:30 PM", name: "All Levels", ages: "Ages 8+", duration: "60 min" },
    ],
  },
  {
    day: "Wednesday",
    classes: [],
  },
  {
    day: "Thursday",
    classes: [
      { time: "4:30 PM", name: "Little Dragons", ages: "Ages 4–7", duration: "30 min" },
      { time: "5:30 PM", name: "All Levels", ages: "Ages 8+", duration: "60 min" },
    ],
  },
  {
    day: "Friday",
    classes: [],
  },
  {
    day: "Saturday",
    classes: [
      { time: "10:30 AM", name: "All Levels", ages: "Ages 8+", duration: "60 min" },
    ],
  },
];

const beltTestingDates = [
  "Mid-to-late December",
  "Late February",
  "Early May",
  "Mid-July",
  "Late September",
];

const holidayClosures = [
  "Labor Day weekend",
  "Thanksgiving (Thursday and Friday)",
  "Christmas week through New Year's Day",
  "Memorial Day",
  "July 4th, when it falls on a class day",
];

const programColors: Record<string, string> = {
  "Little Dragons": "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
  "All Levels": "bg-blue-500/10 border-blue-500/30 text-blue-400",
};

export default function SchedulePage() {
  return (
    <div className="bg-dojo-black">
      {/* Hero */}
      <section className="py-20 bg-dojo-gray border-b border-white/5">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-heading text-dojo-red text-xl tracking-[0.2em] mb-3">WHEN WE TRAIN</p>
          <h1 className="font-heading text-6xl sm:text-7xl text-dojo-ink mb-5">CLASS SCHEDULE</h1>
          <p className="text-dojo-ink/80 max-w-xl mx-auto leading-relaxed">
            Classes run weekly. New students are welcome to drop in any time,
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
                <h2 className="font-heading text-2xl tracking-widest mb-4 text-dojo-ink">
                  {day.day.toUpperCase()}
                </h2>

                {day.classes.length === 0 ? (
                  <p className="text-dojo-ink/60 text-sm italic">No classes scheduled</p>
                ) : (
                  <ul className="flex flex-col gap-3">
                    {day.classes.map((cls) => (
                      <li
                        key={`${day.day}-${cls.name}`}
                        className={`rounded-lg border px-4 py-3 ${programColors[cls.name] ?? "bg-white/5 border-white/10 text-dojo-ink"}`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-heading text-lg tracking-wide">{cls.name}</span>
                          <span className="text-xs opacity-60">{cls.duration}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs opacity-60">
                          <span>{cls.ages}</span>
                          <span className="font-semibold">{cls.time}</span>
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
            <h3 className="font-heading text-xl tracking-widest text-dojo-ink mb-4">PROGRAM KEY</h3>
            <div className="flex flex-wrap gap-3">
              {Object.entries(programColors).map(([name, color]) => (
                <span key={name} className={`px-3 py-1 rounded-full border text-xs font-semibold ${color}`}>
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Note */}
          <p className="text-dojo-ink/70 text-sm text-center mt-8">
            Schedule subject to change. Call <a href="tel:+16145550100" className="underline hover:text-dojo-ink transition-colors">(614) 555-0100</a> or{" "}
            <a href="mailto:info@opendoormac.com" className="underline hover:text-dojo-ink transition-colors">email us</a> to confirm class times.
          </p>
        </div>
      </section>

      {/* Class Calendar */}
      <section className="py-20 bg-dojo-gray border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <p className="font-heading text-dojo-red text-xl tracking-[0.2em] mb-3">THE YEAR AHEAD</p>
            <h2 className="font-heading text-5xl sm:text-6xl text-dojo-ink mb-5">CLASS CALENDAR</h2>
            <p className="text-dojo-ink/80 max-w-2xl mx-auto leading-relaxed">
              Open Door Martial Arts Center trains year-round. There are no sessions or terms to
              enroll in, you can start any time, and your tuition covers unlimited classes every month.
            </p>
            <p className="text-dojo-ink/80 max-w-2xl mx-auto leading-relaxed mt-4">
              Two things run on a set schedule: belt testing and our holiday closures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Belt Testing */}
            <div className="bg-dojo-black rounded-2xl border border-white/5 p-8">
              <h3 className="font-heading text-2xl tracking-widest text-dojo-ink mb-3">BELT TESTING</h3>
              <p className="text-dojo-ink/80 text-sm leading-relaxed mb-5">
                Testing is how we mark progress and award the next belt. New students test on a
                shorter cycle to build early momentum, and testing spreads out as students advance
                and the material gets deeper.
              </p>
              <p className="text-dojo-ink/70 text-xs font-semibold tracking-widest uppercase mb-3">
                Testing dates for our first year
              </p>
              <ul className="flex flex-col gap-2 mb-5">
                {beltTestingDates.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-dojo-ink text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-dojo-red flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="text-dojo-ink/80 text-sm leading-relaxed">
                Instructors will let you know when a student is ready to test. There&apos;s a $25
                testing fee per test.
              </p>
            </div>

            {/* Holiday Closures */}
            <div className="bg-dojo-black rounded-2xl border border-white/5 p-8">
              <h3 className="font-heading text-2xl tracking-widest text-dojo-ink mb-3">HOLIDAY CLOSURES</h3>
              <p className="text-dojo-ink/80 text-sm leading-relaxed mb-5">
                We&apos;re closed on the following dates each year. Regular classes resume the next
                scheduled class day.
              </p>
              <ul className="flex flex-col gap-2 mb-5">
                {holidayClosures.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-dojo-ink text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-dojo-red flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="text-dojo-ink/80 text-sm leading-relaxed">
                Tuition is not prorated or adjusted for these closures, they&apos;re built into the
                monthly rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="font-heading text-4xl text-dojo-ink mb-4">READY TO JUMP IN?</h2>
          <p className="text-dojo-ink/80 mb-8">Your first class is free. No commitment required.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-dojo-red text-white font-heading text-2xl tracking-widest rounded hover:bg-dojo-red-dark transition-colors"
          >
            CLAIM FREE CLASS
          </Link>
        </div>
      </section>
    </div>
  );
}
