import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Open Door Martial Arts Center",
  description: "Learn about Open Door Martial Arts Center, our history, our instructor Anne Barlas, and the legacy of Marjory Allingham in Sturgeon Bay, Wisconsin.",
};

const tenets = [
  {
    number: "01",
    english: "Courtesy",
    korean: "Ye Ui (예의)",
    desc: "Showing politeness, good manners, and respect toward instructors, training partners, and everyone around you, on the mat and off it.",
  },
  {
    number: "02",
    english: "Integrity",
    korean: "Yom Chi (염치)",
    desc: "Knowing the difference between right and wrong, and having the honesty to act on it even when no one is watching.",
  },
  {
    number: "03",
    english: "Perseverance",
    korean: "In Nae (인내)",
    desc: "The patience and determination to keep working toward a goal, one step at a time, even when progress is slow or difficult.",
  },
  {
    number: "04",
    english: "Self-Control",
    korean: "Guk Gi (극기)",
    desc: "Ruling over your own thoughts, emotions, and actions, especially the discipline to use martial arts skill responsibly.",
  },
  {
    number: "05",
    english: "Indomitable Spirit",
    korean: "Baekjeol Boolgool (백절불굴)",
    desc: "An unbreakable will: the courage to stand up for what's right and keep going, no matter the odds stacked against you.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-dojo-black">
      {/* Hero */}
      <section className="py-20 bg-dojo-gray border-b border-white/5">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-heading text-dojo-red text-xl tracking-[0.2em] mb-3">OUR STORY</p>
          <h1 className="font-heading text-6xl sm:text-7xl text-dojo-ink mb-5">ABOUT OPEN DOOR</h1>
          <p className="text-dojo-ink/60 max-w-xl mx-auto leading-relaxed">
            A Taekwondo school rooted in Door County history, dedicated to a woman who believed in every single kid who walked through her door.
          </p>
        </div>
      </section>

      {/* Legacy / Marjory section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="font-heading text-dojo-red text-xl tracking-[0.2em] mb-4">THE LEGACY</p>
          <h2 className="font-heading text-5xl sm:text-6xl text-dojo-ink leading-tight mb-8">
            BUILT ON A FOUNDATION<br />OF BELIEF
          </h2>

          <div className="space-y-5 text-dojo-ink/80 leading-relaxed text-lg">
            <p>
              Open Door Martial Arts Center carries on the legacy of <strong className="text-dojo-ink">Open Door Tae Kwon Do</strong>,
              founded by <strong className="text-dojo-ink">Marjory Allingham</strong>. For years, Marjory ran her school right here in
              Door County, teaching dozens of local students the discipline, focus, and confidence that only martial arts can build.
              She ran it until her death in 2013.
            </p>
            <p>
              Marjory had a gift. She had a way of seeing something in every kid who walked through her door,
              the shy ones, the restless ones, the ones who didn&apos;t quite fit anywhere else. She never met
              a kid she didn&apos;t believe in.
            </p>
            <p>
              That belief, that every person who shows up deserves to be seen and taken seriously, is the
              foundation that everything at Open Door is built on. It shapes how we teach, how we treat our
              students, and what we think martial arts is really for.
            </p>
          </div>

          {/* Pull quote */}
          <blockquote className="my-12 border-l-4 border-dojo-red pl-6">
            <p className="font-heading text-3xl sm:text-4xl text-dojo-ink leading-snug">
              &ldquo;She never met a kid she didn&apos;t believe in.&rdquo;
            </p>
            <footer className="mt-3 text-dojo-ink/50 text-sm font-semibold tracking-widest uppercase">
              The guiding spirit of Open Door
            </footer>
          </blockquote>

          <div className="space-y-5 text-dojo-ink/80 leading-relaxed text-lg">
            <p>
              The new Open Door Martial Arts Center is dedicated to Marjory&apos;s memory. We&apos;re here
              because she was here first, and because the Door County community deserves a place where that
              tradition continues.
            </p>
          </div>
        </div>
      </section>

      {/* Anne Barlas section */}
      <section className="py-20 bg-dojo-gray">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="font-heading text-dojo-red text-xl tracking-[0.2em] mb-3">LEAD INSTRUCTOR</p>
            <h2 className="font-heading text-5xl text-dojo-ink leading-tight mb-2">Anne Barlas</h2>
            <p className="text-dojo-red font-semibold tracking-widest uppercase text-sm mb-6">
              3rd Degree Black Belt · Lead Instructor & Manager
            </p>
            <div className="space-y-4 text-dojo-ink/70 leading-relaxed">
              <p>
                Anne Barlas was one of Mrs. A&apos;s own students. She began training under
                Marjory Allingham at age 8, and when Mrs. A passed the school on to her, Anne
                took that responsibility seriously.
              </p>
              <p>
                She is a wife and mother of two, and the lessons she carried from her years as
                Mrs. A&apos;s student are ones she values deeply, and works to pass on to every
                student she teaches.
              </p>
              <p>
                Her goal is to carry the tradition Mrs. A built into a new generation of Door
                County students, and to make sure that what Marjory started here never stops mattering.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center">
            <div className="w-full max-w-sm aspect-[3/4] rounded-2xl border-2 border-dashed border-white/20 bg-dojo-black flex flex-col items-center justify-center gap-3 text-center p-6">
              <span className="text-4xl opacity-30">📷</span>
              <p className="text-dojo-ink/30 text-sm font-medium">Photo of Anne Barlas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / values */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <p className="font-heading text-dojo-red text-xl tracking-[0.2em] mb-3">WHAT WE STAND FOR</p>
            <h2 className="font-heading text-5xl text-dojo-ink">HOW WE SHOW UP</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: "🚪",
                title: "The Door Is Open",
                desc: "The name isn't an accident. Every age, every background, every skill level. If you want to try, there's a place for you here.",
              },
              {
                icon: "🥋",
                title: "Real Taekwondo",
                desc: "We teach the real thing: proper technique, belt rank progression, forms, and sparring. No shortcuts.",
              },
              {
                icon: "❤️",
                title: "We Believe in Our Students",
                desc: "Marjory's example set the standard: every student who walks in deserves to be seen, encouraged, and pushed further than they thought they could go.",
              },
              {
                icon: "🏡",
                title: "Part of Door County",
                desc: "We're a small, local school at 525 Jefferson Street, Sturgeon Bay. We're rooted here, and we're staying.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-dojo-gray rounded-xl p-7 border border-white/5 flex gap-5">
                <span className="text-4xl flex-shrink-0">{v.icon}</span>
                <div>
                  <h3 className="font-heading text-2xl tracking-wide text-dojo-ink mb-2">{v.title}</h3>
                  <p className="text-dojo-ink/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Tenets */}
      <section className="py-20 bg-dojo-gray">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <p className="font-heading text-dojo-red text-xl tracking-[0.2em] mb-3">OUR CODE</p>
            <h2 className="font-heading text-5xl text-dojo-ink mb-4">THE FIVE TENETS OF TAEKWONDO</h2>
            <p className="text-dojo-ink/60 max-w-lg mx-auto">
              Every student, from Little Dragons to our most advanced belts, trains by the same five principles.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {tenets.map((t) => (
              <div key={t.english} className="bg-dojo-black rounded-xl p-6 border border-white/5">
                <span className="font-heading text-3xl text-dojo-red">{t.number}</span>
                <h3 className="font-heading text-2xl tracking-wide text-dojo-ink mt-3 mb-1">{t.english}</h3>
                <p className="text-dojo-ink/40 text-xs font-semibold tracking-widest uppercase mb-3">{t.korean}</p>
                <p className="text-dojo-ink/60 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dojo-red">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="font-heading text-5xl text-white mb-4">COME FIND OUT FOR YOURSELF</h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            The best way to understand what we do is to step through the door.
            Your first class is free, no commitment, no pressure.
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
