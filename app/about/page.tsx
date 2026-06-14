import Link from "next/link";
import { PageHero, Section } from "@/components/ui";

const expectations = [
  {
    title: "Clear explanations",
    description:
      "We explain financial choices in plain language so clients understand what matters and what comes next.",
  },
  {
    title: "Planning before investing",
    description:
      "Investment decisions should support the plan, not come before it.",
  },
  {
    title: "Disciplined portfolio management",
    description:
      "Portfolios are managed with rules, structure, and attention to long-term goals.",
  },
  {
    title: "Transparent fees",
    description:
      "Clients should understand how they pay for advice before they begin.",
  },
  {
    title: "Guidance without judgment",
    description:
      "Many people feel behind or overwhelmed. The starting point is clarity, not criticism.",
  },
  {
    title: "Consistent reviews and accountability",
    description:
      "Plans are reviewed over time so decisions stay connected to real life.",
  },
];

const approach = [
  "Diversified investing",
  "Rules-based rebalancing",
  "Risk management",
  "Planning-first philosophy",
  "Long-term discipline",
  "Avoiding emotional decision-making",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CENNIS Capital Advisory"
        title="About CENNIS"
        description="We help individuals, families, and business owners organize their finances, understand their options, and build a plan they can actually follow."
      />

      <Section className="bg-[#F9F4EE]">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9E3236]">
              Why CENNIS Capital Advisory Exists
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#163A63]">
              Financial life can feel complicated. Advice should make it clearer.
            </h2>
          </div>
          <div className="border-l-4 border-[#8B5128] pl-6">
            <p className="text-lg leading-8 text-[#163A63]/85">
              Many people feel overwhelmed financially. Decisions around work,
              family, debt, retirement, investing, and business ownership can
              pile up quickly. We are here to slow things down, bring structure
              to the process, and help you make smarter long-term decisions
              with more confidence.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-[#F9F4EE]">
        <div>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9E3236]">
              What Clients Can Expect
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#163A63]">
              Practical guidance, steady process, and respect for where you are.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expectations.map((item) => (
              <article key={item.title} className="border border-[#8B5128]/25 bg-white p-6">
                <h3 className="font-serif text-2xl font-semibold text-[#163A63]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#163A63]/80">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#163A63] text-[#F9F4EE]">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#F9F4EE]">
              Our Approach
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight">
              Planning first. Investing with discipline.
            </h2>
            <p className="mt-5 leading-7 text-[#F9F4EE]/80">
              Our investment approach is built around clear rules, long-term
              discipline, and decisions that fit your plan.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {approach.map((item) => (
              <div key={item} className="border border-[#8B5128]/35 bg-[#2E8B3E]/10 p-4">
                <p className="text-sm font-semibold leading-6 text-[#F9F4EE]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#F9F4EE]">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9E3236]">
              Local and Accessible
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#163A63]">
              Flexible guidance for South Jersey and Greater Philadelphia.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#163A63]/80">
            We serve clients in South Jersey and the Greater Philadelphia area
            through a flexible mix of virtual meetings and in-person
            conversations when appropriate.
          </p>
        </div>
      </Section>

      <section className="bg-[#08131F] text-[#F9F4EE]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9E3236]">
              Start the Conversation
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold">
              Start with clarity.
            </h2>
          </div>
          <Link
            href="/contact"
            className="cennis-focus shrink-0 rounded-sm bg-[#9E3236] px-5 py-3 text-center text-sm font-bold text-[#F9F4EE] transition hover:bg-[#8B5128]"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
