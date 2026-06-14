import Link from "next/link";
import { PageHero, Section } from "@/components/ui";

const values = [
  {
    title: "Fiduciary first",
    description:
      "Advice should begin with the client’s interests, goals, constraints, and real-life needs.",
  },
  {
    title: "Clarity over complexity",
    description:
      "Financial decisions are easier to follow when the plan, tradeoffs, and next steps are explained plainly.",
  },
  {
    title: "Discipline and risk control",
    description:
      "Clear rules and risk controls help keep decisions aligned with long-term goals.",
  },
  {
    title: "Accessibility and respect",
    description:
      "Clients deserve guidance that is approachable, respectful, and useful at each stage of life.",
  },
  {
    title: "Evidence and accountability",
    description:
      "Recommendations should be grounded in practical analysis, documented rules, and consistent review.",
  },
  {
    title: "Privacy and security",
    description:
      "Personal financial information should be handled with care, discretion, and appropriate safeguards.",
  },
  {
    title: "Continuous learning",
    description:
      "Good advice improves through education, reflection, and steady attention to changing client needs.",
  },
];

export default function ValuesPage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Values"
        title="Corporate Values"
        description="These principles guide how we communicate, plan, invest, review decisions, and support clients over time."
      />

      <Section className="bg-[#F9F4EE]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="border border-[#8B5128]/25 bg-white p-6">
              <h2 className="font-serif text-2xl font-semibold text-[#163A63]">
                {value.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#163A63]/80">
                {value.description}
              </p>
            </article>
          ))}
        </div>
        <Link
          href="/contact"
          className="cennis-focus mt-8 inline-block rounded-sm bg-[#9E3236] px-5 py-3 text-sm font-bold text-[#F9F4EE] transition hover:bg-[#8B5128]"
        >
          Book a Consultation
        </Link>
      </Section>
    </>
  );
}
