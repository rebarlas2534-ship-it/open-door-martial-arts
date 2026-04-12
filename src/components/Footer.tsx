import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/programs", label: "Programs" },
  { href: "/schedule", label: "Schedule" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dojo-gray border-t border-white/10 pt-12 pb-6">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <Image src="/images/logo.png" alt="Open Door Martial Arts" width={48} height={48} unoptimized />
              <span className="font-heading text-xl leading-tight tracking-wide">
                OPEN DOOR{" "}
                <span className="text-dojo-red">MARTIAL ARTS</span>
              </span>
            </Link>
            <p className="text-dojo-cream/60 text-sm leading-relaxed max-w-xs">
              Taekwondo training for all ages in Sturgeon Bay, Wisconsin.
              Carrying on a tradition built on heart, discipline, and community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl tracking-widest text-dojo-red mb-4">QUICK LINKS</h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-dojo-cream/70 hover:text-dojo-cream text-sm font-semibold tracking-wide uppercase transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-xl tracking-widest text-dojo-red mb-4">CONTACT</h3>
            <ul className="flex flex-col gap-2 text-sm text-dojo-cream/70">
              <li>525 Jefferson Street</li>
              <li>Sturgeon Bay, WI</li>
              <li>
                <a href="tel:+16145550100" className="hover:text-dojo-cream transition-colors">
                  (614) 555-0100
                </a>
              </li>
              <li>
                <a href="mailto:info@opendoormac.com" className="hover:text-dojo-cream transition-colors">
                  info@opendoormac.com
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-2 mt-5">
              <Link
                href="/contact"
                className="inline-block px-5 py-2 bg-dojo-red text-white font-heading text-lg tracking-widest rounded hover:bg-dojo-red-dark transition-colors text-center"
              >
                FREE TRIAL
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc0rujRgEcYy7i0mgNZc8AriJVPddL8--nyC2PY3dqrCqoJag/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 border border-white/20 text-dojo-cream/60 font-heading text-lg tracking-widest rounded hover:border-white/40 hover:text-dojo-cream/80 transition-colors text-center"
              >
                HELP US GROW
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-dojo-cream/40 text-xs">
          © {new Date().getFullYear()} Open Door Martial Arts Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
