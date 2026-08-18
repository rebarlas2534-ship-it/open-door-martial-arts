import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs | Open Door Martial Arts Center",
  description: "Taekwondo programs for all ages in Sturgeon Bay, Wisconsin: Little Dragons for kids 4-7, and All Levels for ages 8 and up.",
};

const programs = [
  {
    name: "Little Dragons",
    ages: "Ages 4–7",
    icon: "🐉",
    color: "border-yellow-500/30",
    accent: "text-amber-700",
    desc: "Our Little Dragons program is specifically designed for young children who are just starting their martial arts journey. Through age-appropriate games, activities, and drills, kids develop fundamental motor skills, listening ability, and self-confidence.",
    highlights: [
      "Develops focus and listening skills",
      "Builds coordination and balance",
      "Nurturing, patient instructors",
      "Small class sizes",
      "Belt rank progression",
      "Fun, energetic environment",
    ],
    schedule: "Tue & Thu, 4:30–5:00 PM",
  },
  {
    name: "All Levels",
    ages: "Ages 8+",
    icon: "🥋",
    color: "border-blue-500/30",
    accent: "text-blue-700",
    desc: "One class that brings together every student age 8 and up, from complete beginners to advanced belts. Everyone trains from the same weekly rhythm, working at the level that's right for them.",
    highlights: [
      "Ages 8 through adult, together",
      "Beginner and advanced students welcome",
      "Traditional forms and sparring",
      "Self-defense fundamentals",
      "Belt rank progression",
      "Structured weekly rhythm: Learn, Apply, Practice",
    ],
    schedule: "Tue & Thu, 5:30–6:30 PM · Sat, 10:30–11:30 AM",
  },
];

const classStructure = [
  {
    day: "Tuesday",
    label: "Learn",
    desc: "Conditioning, stances, kicks, blocks, and target practice.",
  },
  {
    day: "Thursday",
    label: "Apply",
    desc: "Conditioning, one-step partner work, and forms.",
  },
  {
    day: "Saturday",
    label: "Practice",
    desc: "Longer conditioning, one-step partner work, and forms.",
  },
];

export default function ProgramsPage() {
  return (
    <div className="bg-dojo-black">
      {/* Hero */}
      <section className="py-20 bg-dojo-gray border-b border-white/5">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-heading text-dojo-red text-xl tracking-[0.2em] mb-3">WHAT WE OFFER</p>
          <h1 className="font-heading text-6xl sm:text-7xl text-dojo-ink mb-5">OUR PROGRAMS</h1>
          <p className="text-dojo-ink/80 max-w-xl mx-auto leading-relaxed">
            Programs for every age and skill level
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 flex flex-col gap-10">
          {programs.map((p, i) => (
            <div
              key={p.name}
              className={`bg-dojo-gray rounded-2xl border ${p.color} overflow-hidden`}
            >
              <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-0`}>
                {/* Icon / accent panel */}
                <div className="md:w-64 flex-shrink-0 bg-dojo-black flex flex-col items-center justify-center p-10 gap-4">
                  <span className="text-7xl">{p.icon}</span>
                  <div className="text-center">
                    <h2 className="font-heading text-3xl text-dojo-ink tracking-wide">{p.name}</h2>
                    <p className={`font-semibold text-sm tracking-widest uppercase mt-1 ${p.accent}`}>
                      Tae Kwon Do
                      <br />
                      {p.ages}
                    </p>
                  </div>
                  <p className="text-dojo-ink/70 text-xs text-center mt-2">{p.schedule}</p>
                </div>

                {/* Content */}
                <div className="flex-1 p-8">
                  <p className="text-dojo-ink/90 leading-relaxed mb-6">{p.desc}</p>
                  <h3 className="font-heading text-xl tracking-widest text-dojo-ink mb-4">WHAT YOU GET</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-dojo-ink/90 text-sm">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-dojo-red flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Class Structure */}
      <section className="py-16 bg-dojo-gray border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <p className="font-heading text-dojo-red text-xl tracking-[0.2em] mb-3">EVERY WEEK</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-dojo-ink mb-4">CLASS STRUCTURE</h2>
            <p className="text-dojo-ink/80 max-w-lg mx-auto leading-relaxed">
              Each week follows the same rhythm, so students always know what to expect.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {classStructure.map((c) => (
              <div key={c.day} className="bg-dojo-black rounded-xl p-7 border border-white/5">
                <p className="font-heading text-dojo-red text-sm tracking-widest uppercase mb-1">{c.day}</p>
                <h3 className="font-heading text-3xl tracking-wide text-dojo-ink mb-3">{c.label}</h3>
                <p className="text-dojo-ink/80 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10">
            <p className="font-heading text-dojo-ink/70 text-xl tracking-[0.2em] mb-3">WHAT&apos;S NEXT</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-dojo-ink mb-5">
              We&apos;re Growing: Help Shape What&apos;s Next
            </h2>
            <p className="text-dojo-ink/80 leading-relaxed max-w-2xl">
              Open Door is just getting started. We&apos;re starting with two core classes and plan to add
              more age-specific Taekwondo options as we grow, alongside new disciplines we&apos;re actively
              looking for qualified instructors to bring to Sturgeon Bay.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Youth Taekwondo", note: "Ages 8–12 · Coming soon", icon: "🥋" },
              { name: "Teen Taekwondo", note: "Ages 13–17 · Coming soon", icon: "⚡" },
              { name: "Adult Beginners", note: "Ages 18+ · Coming soon", icon: "🟢" },
              { name: "Advanced Adult", note: "Ages 18+ · Coming soon", icon: "🥇" },
              { name: "Self Defense", note: "Gauging interest", icon: "🛡️" },
              { name: "Tai Chi", note: "Gauging interest", icon: "🌀" },
              { name: "Brazilian Jiu-Jitsu", note: "Gauging interest", icon: "🤼" },
              { name: "Kickboxing / Fitness", note: "Gauging interest", icon: "🥊" },
            ].map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-white/10 bg-dojo-black/40 p-6 flex flex-col gap-3 opacity-75 hover:opacity-90 transition-opacity"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl grayscale">{c.icon}</span>
                    <div>
                      <h3 className="font-heading text-xl text-dojo-ink tracking-wide">{c.name}</h3>
                      <p className="text-dojo-ink/70 text-xs font-semibold tracking-widest uppercase">{c.note}</p>
                    </div>
                  </div>
                  <span className="flex-shrink-0 px-2 py-1 rounded border border-dojo-ink/20 text-dojo-ink/70 text-xs font-semibold tracking-widest uppercase">
                    Coming Soon
                  </span>
                </div>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc0rujRgEcYy7i0mgNZc8AriJVPddL8--nyC2PY3dqrCqoJag/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-sm text-dojo-ink/70 hover:text-dojo-ink transition-colors font-semibold"
                >
                  Interested? Let us know →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dojo-red">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-5xl sm:text-6xl text-white mb-5">TRY A CLASS FREE</h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Not sure which program is right for you? Come in, try a class, and we&apos;ll help you figure it out.
            No commitment required.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-dojo-red font-heading text-2xl tracking-widest rounded hover:bg-dojo-cream transition-colors"
          >
            CLAIM FREE CLASS
          </Link>
        </div>
      </section>
    </div>
  );
}
