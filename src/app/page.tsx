import Link from "next/link";
import Image from "next/image";

const programs = [
  {
    name: "Little Dragons",
    ages: "Ages 4–7",
    desc: "A fun, safe introduction to Taekwondo. Kids build coordination, listening skills, and confidence in a structured, nurturing environment.",
    icon: "🐉",
  },
  {
    name: "Youth Taekwondo",
    ages: "Ages 8–12",
    desc: "Traditional Taekwondo curriculum focused on discipline, respect, and physical development. Progress through belt ranks at your own pace.",
    icon: "🥋",
  },
  {
    name: "Teen Taekwondo",
    ages: "Ages 13–17",
    desc: "A faster-paced class for teens, with deeper technique work and leadership opportunities alongside a peer group their own age.",
    icon: "⚡",
  },
  {
    name: "Adult Beginners",
    ages: "Ages 18+",
    desc: "A welcoming introduction to Taekwondo for grown-ups starting from scratch. No experience needed — just show up.",
    icon: "🟢",
  },
  {
    name: "Advanced Adult",
    ages: "Ages 18+",
    desc: "Deeper technique, sparring, and conditioning at a faster pace for adults who've built a foundation and are ready to push further.",
    icon: "🥇",
  },
];

const stats = [
  { value: "5", label: "Programs Offered" },
  { value: "All Ages", label: "Welcome Here" },
  { value: "Sturgeon Bay", label: "Wisconsin" },
];

const schedule = [
  { day: "Monday", classes: ["Little Dragons — 4:00 PM", "Youth Taekwondo — 5:00 PM"] },
  { day: "Tuesday", classes: ["Teen Taekwondo — 5:00 PM", "Advanced Adult — 7:15 PM"] },
  { day: "Wednesday", classes: ["Little Dragons — 4:00 PM", "Youth Taekwondo — 5:00 PM"] },
  { day: "Thursday", classes: ["Teen Taekwondo — 5:00 PM", "Adult Beginners — 6:00 PM", "Advanced Adult — 7:15 PM"] },
  { day: "Friday", classes: ["Youth Taekwondo — 5:00 PM"] },
  { day: "Saturday", classes: ["Adult Beginners — 10:30 AM"] },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-dojo-black">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-dojo-red/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo.png"
              alt="Open Door Martial Arts"
              width={220}
              height={220}
              priority
              unoptimized
              className="drop-shadow-[0_0_50px_rgba(204,17,17,0.6)]"
            />
          </div>

          <p className="font-heading text-dojo-red text-2xl tracking-[0.3em] mb-4">
            OPEN DOOR MARTIAL ARTS CENTER
          </p>

          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl leading-none tracking-wide text-dojo-cream mb-6">
            COURTESY.<br />
            PERSEVERANCE.<br />
            <span className="text-dojo-red">INDOMITABLE SPIRIT.</span>
          </h1>

          <p className="text-dojo-cream/70 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Professional Taekwondo training for kids, teens, and adults.
            Located in Sturgeon Bay, Wisconsin — your journey starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-dojo-red text-white font-heading text-2xl tracking-widest rounded hover:bg-dojo-red-dark transition-colors"
            >
              START FREE TRIAL
            </Link>
            <Link
              href="/programs"
              className="px-8 py-4 border border-dojo-cream/30 text-dojo-cream font-heading text-2xl tracking-widest rounded hover:bg-white/5 hover:border-dojo-cream/60 transition-colors"
            >
              VIEW PROGRAMS
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc0rujRgEcYy7i0mgNZc8AriJVPddL8--nyC2PY3dqrCqoJag/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-dojo-cream/20 text-dojo-cream/60 font-heading text-2xl tracking-widest rounded hover:bg-white/5 hover:border-dojo-cream/40 hover:text-dojo-cream/80 transition-colors"
            >
              HELP US GROW
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dojo-black to-transparent pointer-events-none" />
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-dojo-red py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-3 gap-6 text-center max-w-2xl mx-auto w-full">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-4xl text-white tracking-wide">{s.value}</p>
                <p className="text-white/80 text-sm font-semibold tracking-widest uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNAPSHOT ── */}
      <section className="py-20 bg-dojo-black">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="font-heading text-dojo-red text-xl tracking-[0.2em] mb-3">WHO WE ARE</p>
            <h2 className="font-heading text-5xl sm:text-6xl text-dojo-cream leading-tight mb-6">
              MORE THAN A GYM.<br />A COMMUNITY.
            </h2>
            <div className="space-y-4 text-dojo-cream/70 leading-relaxed">
              <p>
                Open Door Martial Arts Center is a dedicated Taekwondo school in Sturgeon Bay, Wisconsin —
                carrying on a tradition of martial arts excellence in Door County that goes back decades.
              </p>
              <p>
                We believe martial arts is for everyone. Whether you&apos;re bringing in your four-year-old
                for their first class or stepping on the mat as an adult for the first time, our instructors
                meet you where you are and push you further than you thought possible.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-block mt-8 px-6 py-3 border border-dojo-red text-dojo-red font-heading text-xl tracking-widest rounded hover:bg-dojo-red hover:text-white transition-colors"
            >
              OUR STORY
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "🏯", title: "Traditional Taekwondo", desc: "Rooted in authentic technique and discipline" },
              { icon: "👶", title: "All Ages Welcome", desc: "Programs from age 4 through adult" },
              { icon: "🏆", title: "Expert Instruction", desc: "Experienced black belt instructors" },
              { icon: "💪", title: "Real Results", desc: "Strength, focus, and confidence" },
            ].map((item) => (
              <div key={item.title} className="bg-dojo-gray rounded-xl p-5 border border-white/5">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-heading text-xl tracking-wide text-dojo-cream mt-3 mb-1">{item.title}</h3>
                <p className="text-dojo-cream/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="py-20 bg-dojo-gray">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="font-heading text-dojo-red text-xl tracking-[0.2em] mb-3">WHAT WE OFFER</p>
            <h2 className="font-heading text-5xl sm:text-6xl text-dojo-cream">OUR PROGRAMS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((p) => (
              <div
                key={p.name}
                className="bg-dojo-black rounded-xl p-7 border border-white/5 hover:border-dojo-red/40 transition-colors group"
              >
                <span className="text-4xl">{p.icon}</span>
                <h3 className="font-heading text-2xl tracking-wide text-dojo-cream mt-4 mb-1 group-hover:text-dojo-red transition-colors">
                  {p.name}
                </h3>
                <p className="text-dojo-red text-sm font-semibold tracking-widest uppercase mb-3">{p.ages}</p>
                <p className="text-dojo-cream/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
            {/* CTA card */}
            <div className="bg-dojo-red rounded-xl p-7 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-3xl tracking-wide text-white mb-3">READY TO START?</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Try any class free — no commitment, no pressure. Come see if Open Door is the right fit for you.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-block px-6 py-3 bg-white text-dojo-red font-heading text-xl tracking-widest rounded hover:bg-dojo-cream transition-colors text-center"
              >
                CLAIM FREE TRIAL
              </Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/programs"
              className="inline-block px-6 py-3 border border-white/20 text-dojo-cream/70 font-heading text-xl tracking-widest rounded hover:border-dojo-cream/50 hover:text-dojo-cream transition-colors"
            >
              SEE ALL PROGRAMS
            </Link>
          </div>
        </div>
      </section>

      {/* ── SCHEDULE PREVIEW ── */}
      <section className="py-20 bg-dojo-black">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <p className="font-heading text-dojo-red text-xl tracking-[0.2em] mb-3">WHEN WE TRAIN</p>
            <h2 className="font-heading text-5xl sm:text-6xl text-dojo-cream">CLASS SCHEDULE</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedule.map((day) => (
              <div key={day.day} className="bg-dojo-gray rounded-xl p-6 border border-white/5">
                <h3 className="font-heading text-2xl tracking-widest text-dojo-red mb-4">{day.day.toUpperCase()}</h3>
                <ul className="flex flex-col gap-2">
                  {day.classes.map((cls) => (
                    <li key={cls} className="text-dojo-cream/80 text-sm border-l-2 border-dojo-red/40 pl-3">
                      {cls}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/schedule"
              className="inline-block px-6 py-3 border border-white/20 text-dojo-cream/70 font-heading text-xl tracking-widest rounded hover:border-dojo-cream/50 hover:text-dojo-cream transition-colors"
            >
              FULL SCHEDULE
            </Link>
          </div>
        </div>
      </section>

      {/* ── FREE TRIAL CTA ── */}
      <section className="py-24 bg-dojo-red">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-6xl sm:text-7xl text-white leading-tight mb-6">
            YOUR FIRST CLASS IS FREE
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            No commitment. No experience needed. Just show up and see what Open Door Martial Arts is all about.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-white text-dojo-red font-heading text-3xl tracking-widest rounded hover:bg-dojo-cream transition-colors"
          >
            CLAIM YOUR FREE TRIAL
          </Link>
          <p className="text-white/60 text-sm mt-6">
            Or call us at{" "}
            <a href="tel:+16145550100" className="underline hover:text-white transition-colors">
              (614) 555-0100
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
