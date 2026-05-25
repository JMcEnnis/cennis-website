import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui";

const services = [
  {
    title: "Foundations",
    imageLabel: "Client planning image",
    imageSrc: "/foundation.png",
    forLabel: "People building financial structure for the first time.",
    problem:
      "Many people are not bad with money. They are busy, overwhelmed, or unsure where to start.",
    expect:
      "We help you sort through budgeting, emergency savings, debt strategy, beginner investing, and the habits that shape day-to-day confidence.",
    focus:
      "You get simple ETF investing conversations, practical next steps, and structure that can make money feel less scattered.",
  },
  {
    title: "Planning & Projects",
    imageLabel: "Family planning image",
    imageSrc: "/planning.png",
    forLabel: "Individuals and families making important financial decisions.",
    problem:
      "Big decisions can affect your stress, stability, family, taxes, cash flow, and future goals all at once.",
    expect:
      "We help organize retirement planning, income planning, major life transitions, investment reviews, cash flow, tax-aware planning conversations, and business-owner scenarios.",
    focus:
      "You gain clear recommendations, actionable next steps, and a calmer way to make decisions without trying to hold every detail in your head.",
  },
  {
    title: "Ongoing Advisory",
    imageLabel: "Business owner planning image",
    imageSrc: "/ongoing.png",
    forLabel: "Clients who want long-term portfolio management and ongoing guidance.",
    problem:
      "Investing without a plan can create confusion, inconsistency, and emotional decisions when life or markets change.",
    expect:
      "We provide IPS-based portfolio management, diversified investing, rules-based rebalancing, risk management, regular reviews, accountability, and long-term discipline.",
    focus:
      "You get a steady process, plain-language reporting, and guidance that helps your investments support your life instead of adding more noise.",
  },
];

const philosophy = [
  "Planning before investing",
  "Diversification",
  "Risk management",
  "Disciplined rebalancing",
  "Avoiding emotional decision-making",
  "Long-term consistency",
];

const tickerItems = [
  "Apple",
  "Microsoft",
  "JPMorgan Chase",
  "Johnson & Johnson",
  "Procter & Gamble",
  "SPY",
  "VTI",
  "AGG",
  "BND",
  "U.S. Treasuries",
  "German Bunds",
  "U.K. Gilts",
  "Japanese Government Bonds",
];

const investments = [
  {
    title: "Equities",
    description:
      "Stocks used for long-term growth and ownership in businesses.",
  },
  {
    title: "Fixed Income",
    description:
      "Bonds and income-focused investments used for stability, income, and risk management.",
  },
  {
    title: "Cash & Cash Equivalents",
    description:
      "Cash reserves, Treasury bills, and short-term holdings used for liquidity and flexibility.",
  },
  {
    title: "ETFs & Mutual Funds",
    description:
      "Diversified investment vehicles used to build broad market exposure efficiently.",
  },
  {
    title: "Real Assets",
    description:
      "Investments tied to physical or inflation-sensitive assets that may help diversify portfolios over time.",
  },
  {
    title: "Retirement & Tax-Advantaged Accounts",
    description:
      "IRAs and retirement-focused structures designed to support long-term planning and tax efficiency.",
  },
];

const steps = [
  "Understand where you are",
  "Build the plan",
  "Put the plan into action",
  "Review and adjust over time",
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9E3236]">
              Services
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#163A63] sm:text-5xl">
              Financial guidance built around real-life decisions.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#163A63]/80">
              We help you organize your finances, build a long-term plan, and
              invest with discipline through changing stages of life.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#08131F] shadow-[0_18px_40px_rgba(8,19,31,0.08)]">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="CENNIS services planning video"
              >
                <source src="/cennis-services.mp4" type="video/mp4" />
              </video>
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,19,31,0.08),rgba(8,19,31,0.26))]"
                aria-hidden="true"
              />
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#8B5128]/35 bg-[#08131F] shadow-[inset_0_1px_0_rgba(249,244,238,0.08),inset_0_-1px_0_rgba(139,81,40,0.25)]">
        <style>
          {`
            @keyframes cennisTicker {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
          `}
        </style>
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-sm border border-[#8B5128]/30 bg-[linear-gradient(135deg,rgba(22,58,99,0.45),rgba(8,19,31,0.96)_48%,rgba(158,50,54,0.22))] p-3 shadow-[0_18px_40px_rgba(8,19,31,0.35),inset_0_1px_0_rgba(249,244,238,0.08)]">
            <div className="flex w-max gap-3 [animation:cennisTicker_42s_linear_infinite] motion-reduce:animate-none">
              {[...tickerItems, ...tickerItems].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="shrink-0 rounded-sm border border-[#8B5128]/45 bg-[#F9F4EE]/[0.08] px-4 py-2 text-sm font-semibold text-[#F9F4EE] shadow-[0_8px_18px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(249,244,238,0.12)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-3 text-xs leading-5 text-[#F9F4EE]/65">
            Examples are for educational purposes only and are not investment recommendations.
          </p>
        </div>
      </section>

      <Section className="bg-[#F9F4EE]">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9E3236]">
              Where Services Begin
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#163A63]">
              Different seasons call for different levels of support.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#163A63]/85">
            Not everyone needs the same level of support. Some people are just
            getting started. Others are preparing for retirement or facing
            decisions that feel heavier than expected. Our services are designed
            to meet you where you are and help you move forward with more
            clarity.
          </p>
        </div>
      </Section>

      <Section className="bg-[#F9F4EE]">
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="border border-[#8B5128]/25 bg-white p-6">
              <div className="relative mb-5 aspect-[5/3] overflow-hidden rounded-sm bg-[#F9F4EE] shadow-[0_14px_30px_rgba(8,19,31,0.12)]">
                <Image
                  src={service.imageSrc}
                  alt={service.imageLabel}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h2 className="font-serif text-3xl font-semibold text-[#163A63]">
                {service.title}
              </h2>
              <p className="mt-4 text-sm font-semibold leading-6 text-[#8B5128]">
                For: {service.forLabel}
              </p>
              <p className="mt-4 text-sm leading-6 text-[#163A63]/80">
                {service.problem}
              </p>
              <p className="mt-4 text-sm leading-6 text-[#163A63]/80">
                {service.expect}
              </p>
              <p className="mt-4 text-sm leading-6 text-[#163A63]/80">
                {service.focus}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-[#163A63] text-[#F9F4EE]">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#F9F4EE]">
              Investment Philosophy
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight">
              Investing should support the plan.
            </h2>
            <p className="mt-5 leading-7 text-[#F9F4EE]/80">
              Investing should support your life, not create more confusion. We
              use a planning-first approach so decisions are tied to your goals,
              time horizon, and comfort with risk.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {philosophy.map((item) => (
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
        <div>
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9E3236]">
                What We Invest In
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#163A63]">
                Clear building blocks for real-life portfolios.
              </h2>
              <p className="mt-5 leading-7 text-[#163A63]/80">
                We believe clients should understand what they own and why they
                own it. Portfolios are built around diversification, long-term
                discipline, risk management, and real-life financial goals.
              </p>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-[#F9F4EE] shadow-[0_14px_30px_rgba(8,19,31,0.12)]">
                <Image
                  src="/portfolio.png"
                  alt="Portfolio review image"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {investments.map((investment) => (
              <article key={investment.title} className="border border-[#8B5128]/25 bg-white p-6">
                <h3 className="font-serif text-2xl font-semibold text-[#163A63]">
                  {investment.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#163A63]/80">
                  {investment.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#F9F4EE]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9E3236]">
              How We Work
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#163A63]">
              A simple process for turning uncertainty into next steps.
            </h2>
          </div>
          <ol className="space-y-3">
            {steps.map((step, index) => (
              <li key={step} className="grid grid-cols-[44px_1fr] gap-4">
                <span className="flex h-11 w-11 items-center justify-center bg-[#9E3236] text-sm font-bold text-[#F9F4EE]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="border-b border-[#8B5128]/30 pb-3">
                  <p className="text-lg font-semibold leading-7 text-[#163A63]">
                    {step}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <section className="bg-[#08131F] text-[#F9F4EE]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9E3236]">
              Start the Conversation
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold">
              Start with a conversation about where you are and where you want to go.
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
