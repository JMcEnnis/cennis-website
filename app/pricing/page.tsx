import Link from "next/link";
import { PageHero, Section } from "@/components/ui";

const tiers = [
  { name: "Foundation", price: "0.65%", detail: "For emerging wealth and focused planning." },
  { name: "Private Client", price: "0.85%", detail: "For multi-account households and complex goals." },
  { name: "Family Office", price: "Custom", detail: "For advanced reporting, governance, and coordination." },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent advisory pricing for different stages of wealth."
        description="Placeholder pricing is shown for planning purposes only and can be replaced with final approved fee schedules."
      />
      <Section className="bg-[#f7f8fb]">
        <div className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article key={tier.name} className="rounded-sm border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-[#071b35]">{tier.name}</h2>
              <p className="mt-4 font-serif text-4xl font-semibold text-[#071b35]">{tier.price}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{tier.detail}</p>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-sm bg-[#071b35] px-5 py-3 text-sm font-bold text-white"
              >
                Book a Consultation
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
