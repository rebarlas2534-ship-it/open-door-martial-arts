import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs | Open Door Martial Arts Center",
  description: "Taekwondo programs for all ages in Sturgeon Bay, Wisconsin — Little Dragons, Youth Taekwondo, and Family Classes.",
};

const programs = [
  {
    name: "Little Dragons",
    ages: "Ages 4–7",
    icon: "🐉",
    color: "border-yellow-500/30",
    accent: "text-yellow-400",
    desc: "Our Little Dragons program is specifically designed for young children who are just starting their martial arts journey. Through age-appropriate games, activities, and drills, kids develop fundamental motor skills, listening ability, and self-confidence.",
    highlights: [
      "Develops focus and listening skills",
      "Builds coordination and balance",
      "Nurturing, patient instructors",
      "Small class sizes",
      "Belt rank progression",
      "Fun, energetic environment",
    ],
    schedule: "Mon & Wed at 4:00 PM",
  },
  {
    name: "Youth Taekwondo",
    ages: "Ages 8–17",
    icon: "🥋",
    color: "border-blue-500/30",
    accent: "text-blue-400",
    desc: "Our Youth Taekwondo program offers a structured, traditional Taekwondo curriculum that builds physical fitness, mental discipline, and respect. Students progress through a belt ranking system that rewards consistent effort and improvement.",
    highlights: [
      "Traditional Taekwondo forms (Poomsae)",
      "Sparring and self-defense",
      "Belt rank testing",
      "Discipline and respect",
      "Physical fitness and flexibility",
      "Anti-bullying confidence",
    ],
    schedule: "Mon, Wed & Fri at 5:00 PM",
  },
  {
    name: "Adult Taekwondo",
    ages: "Ages 18+",
    icon: "⚫",
    color: "border-dojo-red/30",
    accent: "text-dojo-red",
    desc: "It's never too late to start. Our adult Taekwondo program welcomes complete beginners and experienced practitioners alike. You'll build real technique, physical conditioning, and the mental toughness that only martial arts training can provide.",
    highlights: [
      "Beginner-friendly curriculum",
      "Traditional forms and sparring",
      "Self-defense applications",
      "Strength and conditioning",
      "Belt rank progression",
      "Stress relief and mental clarity",
    ],
    schedule: "Coming Soon — Seeking Instructor",
  },
  {
    name: "Family Classes",
    ages: "All Ages",
    icon: "👨‍👩‍👧",
    color: "border-green-500/30",
    accent: "text-green-400",
    desc: "Our Family Classes are one of our most popular offerings — and for good reason. Training together creates a powerful shared experience that strengthens family bonds and gets everyone moving. Parents and kids work side by side on the mat.",
    highlights: [
      "Parents and kids train together",
      "Builds family connection",
      "Fun and engaging curriculum",
      "All skill levels welcome",
      "Great for all fitness levels",
      "A shared family hobby",
    ],
    schedule: "Thu at 6:00 PM & Sat at 10:30 AM",
  },
];

export default function ProgramsPage() {
  return (
    <div className="bg-dojo-black">
      {/* Hero */}
      <section className="py-20 bg-dojo-gray border-b border-white/5">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-heading text-dojo-red text-xl tracking-[0.2em] mb-3">WHAT WE OFFER</p>
          <h1 className="font-heading text-6xl sm:text-7xl text-dojo-cream mb-5">OUR PROGRAMS</h1>
          <p className="text-dojo-cream/60 max-w-xl mx-auto leading-relaxed">
            Programs for every age and skill level — whether you&apos;re four years old or forty-four,
            a first-timer or a returning black belt.
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
                    <h2 className="font-heading text-3xl text-dojo-cream tracking-wide">{p.name}</h2>
                    <p className={`font-semibold text-sm tracking-widest uppercase mt-1 ${p.accent}`}>{p.ages}</p>
                  </div>
                  <p className="text-dojo-cream/40 text-xs text-center mt-2">{p.schedule}</p>
                </div>

                {/* Content */}
                <div className="flex-1 p-8">
                  <p className="text-dojo-cream/70 leading-relaxed mb-6">{p.desc}</p>
                  <h3 className="font-heading text-xl tracking-widest text-dojo-cream mb-4">WHAT YOU GET</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-dojo-cream/70 text-sm">
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

      {/* Coming Soon */}
      <section className="py-16 bg-dojo-gray border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10">
            <p className="font-heading text-dojo-cream/40 text-xl tracking-[0.2em] mb-3">WHAT&apos;S NEXT</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-dojo-cream mb-5">
              We&apos;re Growing — Help Shape What&apos;s Next
            </h2>
            <p className="text-dojo-cream/60 leading-relaxed max-w-2xl">
              Open Door is just getting started. Anne leads our Taekwondo programs for kids, and we&apos;re
              actively looking for qualified instructors to bring more disciplines to Sturgeon Bay. We&apos;re
              gauging community interest before we commit — because what we build here should reflect what
              Door County actually wants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Adult Taekwondo", note: "Seeking instructor", icon: "⚫" },
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
                      <h3 className="font-heading text-xl text-dojo-cream/80 tracking-wide">{c.name}</h3>
                      <p className="text-dojo-cream/40 text-xs font-semibold tracking-widest uppercase">{c.note}</p>
                    </div>
                  </div>
                  <span className="flex-shrink-0 px-2 py-1 rounded border border-dojo-cream/20 text-dojo-cream/40 text-xs font-semibold tracking-widest uppercase">
                    Coming Soon
                  </span>
                </div>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc0rujRgEcYy7i0mgNZc8AriJVPddL8--nyC2PY3dqrCqoJag/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-sm text-dojo-cream/50 hover:text-dojo-cream transition-colors font-semibold"
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
            CLAIM FREE TRIAL
          </Link>
        </div>
      </section>
    </div>
  );
}
