import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Open Door Martial Arts Center",
  description: "Simple, transparent pricing for Taekwondo classes in Sturgeon Bay, Wisconsin. Single student and family rates available.",
};

const plans = [
  {
    name: "Single Student",
    price: "$95",
    period: "/ month",
    includes: [
      "Unlimited classes for one student",
      "Kids or adult classes",
    ],
    highlight: false,
  },
  {
    name: "Family Rate",
    price: "$175",
    period: "/ month",
    includes: [
      "Covers the first two family members",
      "Unlimited classes",
      "Kids and adult classes combined",
      "+$25/month for each additional family member",
    ],
    highlight: true,
    note: "Best value for families",
  },
];

const additionalFees = [
  { label: "Annual enrollment fee", amount: "$35", note: "Once per year" },
  { label: "Uniform (dobok)", amount: "$45", note: "At enrollment" },
  { label: "Belt testing", amount: "$25", note: "Per test" },
];

export default function PricingPage() {
  return (
    <div className="bg-dojo-black">
      {/* Hero */}
      <section className="py-20 bg-dojo-gray border-b border-white/5">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-heading text-dojo-red text-xl tracking-[0.2em] mb-3">TUITION</p>
          <h1 className="font-heading text-6xl sm:text-7xl text-dojo-cream mb-5">PRICING</h1>
          <p className="text-dojo-cream/60 max-w-md mx-auto leading-relaxed">
            Two straightforward options. No hidden fees, no contracts, no pressure.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col gap-6 ${
                  plan.highlight
                    ? "bg-dojo-gray border border-dojo-red/30"
                    : "bg-dojo-gray border border-white/5"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h2 className="font-heading text-2xl tracking-wide text-dojo-cream">{plan.name}</h2>
                    {plan.highlight && plan.note && (
                      <span className="text-xs text-dojo-red font-semibold tracking-widest uppercase border border-dojo-red/30 px-2 py-1 rounded flex-shrink-0">
                        {plan.note}
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="font-heading text-5xl text-dojo-cream">{plan.price}</span>
                    <span className="text-dojo-cream/40 text-sm">{plan.period}</span>
                  </div>
                </div>

                <ul className="flex flex-col gap-3 flex-1">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-dojo-cream/70 text-sm leading-relaxed">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-dojo-red flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-auto py-3 rounded font-heading text-xl tracking-widest text-center transition-colors ${
                    plan.highlight
                      ? "bg-dojo-red text-white hover:bg-dojo-red-dark"
                      : "border border-white/20 text-dojo-cream/70 hover:border-white/40 hover:text-dojo-cream"
                  }`}
                >
                  GET STARTED
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional fees */}
      <section className="pb-10">
        <div className="mx-auto max-w-3xl px-6">
          <div className="bg-dojo-gray rounded-2xl border border-white/5 p-8">
            <h2 className="font-heading text-2xl tracking-widest text-dojo-cream mb-6">ADDITIONAL FEES</h2>
            <ul className="flex flex-col divide-y divide-white/5">
              {additionalFees.map((fee) => (
                <li key={fee.label} className="flex items-center justify-between py-4 gap-4">
                  <div>
                    <p className="text-dojo-cream/80 text-sm font-semibold">{fee.label}</p>
                    <p className="text-dojo-cream/40 text-xs mt-0.5">{fee.note}</p>
                  </div>
                  <span className="font-heading text-2xl text-dojo-cream flex-shrink-0">{fee.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Warm note + CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-xl px-6 text-center">
          <p className="text-dojo-cream/60 leading-relaxed mb-8 text-lg">
            Not sure which option is right for you? Come in for a free trial class and we&apos;ll figure it out together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-dojo-red text-white font-heading text-2xl tracking-widest rounded hover:bg-dojo-red-dark transition-colors"
          >
            CLAIM FREE TRIAL
          </Link>
        </div>
      </section>
    </div>
  );
}
