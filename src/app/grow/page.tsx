import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Us Build Open Door | Open Door Martial Arts Center",
  description: "Tell us what classes you want to see in Sturgeon Bay, or reach out if you're a qualified instructor looking for a home.",
};

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc0rujRgEcYy7i0mgNZc8AriJVPddL8--nyC2PY3dqrCqoJag/viewform?usp=publish-editor";

export default function GrowPage() {
  return (
    <div className="bg-dojo-black">
      {/* Hero */}
      <section className="py-20 bg-dojo-gray border-b border-white/5">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-heading text-dojo-red text-xl tracking-[0.2em] mb-3">GET INVOLVED</p>
          <h1 className="font-heading text-6xl sm:text-7xl text-dojo-ink mb-5">
            Help Us Build Open Door
          </h1>
          <p className="text-dojo-ink/95 max-w-xl mx-auto leading-relaxed">
            Open Door is more than a building: it&apos;s whatever Door County wants it to be.
            That means we need to hear from you.
          </p>
        </div>
      </section>

      {/* Two columns */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-8">

          {/* Left: community interest */}
          <div className="bg-dojo-gray rounded-2xl border border-white/5 p-10 flex flex-col gap-6">
            <span className="text-5xl">💬</span>
            <div>
              <h2 className="font-heading text-4xl text-dojo-ink leading-tight mb-3">
                Want a class we don&apos;t offer yet?
              </h2>
              <div className="space-y-4 text-dojo-ink leading-relaxed">
                <p>
                  We&apos;re actively thinking about what to add next: Tai Chi, Brazilian Jiu-Jitsu,
                  adult Taekwondo, fitness kickboxing, but we want to know what Door County
                  actually wants before we commit to anything.
                </p>
                <p>
                  If there&apos;s a class you&apos;d sign up for tomorrow, tell us. It takes two
                  minutes and it genuinely shapes what we build here.
                </p>
              </div>
            </div>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block px-8 py-4 bg-dojo-red text-white font-heading text-2xl tracking-widest rounded hover:bg-dojo-red-dark transition-colors text-center"
            >
              SHARE YOUR INTEREST
            </a>
          </div>

          {/* Right: instructor outreach */}
          <div className="bg-dojo-gray rounded-2xl border border-white/5 p-10 flex flex-col gap-6">
            <span className="text-5xl">🥋</span>
            <div>
              <h2 className="font-heading text-4xl text-dojo-ink leading-tight mb-3">
                Are you an instructor?
              </h2>
              <div className="space-y-4 text-dojo-ink leading-relaxed">
                <p>
                  We have the space, the students, and the community. We just need the right people.
                  If you&apos;re a qualified martial arts instructor looking for a place to teach in
                  Door County, we&apos;d genuinely love to hear from you.
                </p>
                <p>
                  Whether you teach Tai Chi, BJJ, kickboxing, or something else entirely, if you
                  care about doing it right and you believe in what a good martial arts school can
                  mean to a community, reach out. Let&apos;s talk.
                </p>
              </div>
            </div>
            <a
              href="mailto:info@opendoormac.com"
              className="mt-auto inline-block px-8 py-4 border border-dojo-ink/30 text-dojo-ink font-heading text-2xl tracking-widest rounded hover:bg-white/5 hover:border-dojo-ink/60 transition-colors text-center"
            >
              EMAIL US
            </a>
            <p className="text-dojo-ink/90 text-sm -mt-3 text-center">
              info@opendoormac.com
            </p>
          </div>

        </div>
      </section>

      {/* Bottom note */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-dojo-ink/90 leading-relaxed text-sm">
            Open Door Martial Arts Center is a small, community-owned school at 525 Jefferson Street
            in Sturgeon Bay. We&apos;re building this place thoughtfully: one class, one student,
            one conversation at a time.
          </p>
        </div>
      </section>
    </div>
  );
}
