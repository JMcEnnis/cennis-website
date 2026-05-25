import Link from "next/link";
import { Eyebrow, Section } from "@/components/ui";

const audiences = [
  {
    title: "Getting Started",
    description:
      "For people who want help with budgeting, debt, emergency savings, and beginner investing.",
  },
  {
    title: "Preparing for Retirement",
    description:
      "For people who want a clear income plan, risk controls, and guidance on how to turn savings into lasting support.",
  },
  {
    title: "Business Owners",
    description:
      "For owners who need help thinking through cash flow, concentration risk, retirement planning, liquidity, and life after a business transition.",
  },
];

const steps = [
  {
    title: "Understand where you are",
    description:
      "We start by getting your money organized and understanding what feels unclear, urgent, or unfinished.",
  },
  {
    title: "Build the plan",
    description:
      "We create a practical plan for saving, investing, retirement, and major life decisions.",
  },
  {
    title: "Put the plan into action",
    description:
      "We help you take the next steps with structure, discipline, and plain-language guidance.",
  },
  {
    title: "Review and adjust over time",
    description:
      "We keep the plan current as your life, work, family, business, and markets change.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#163A63] text-white">
        <div
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(158,50,54,0.38),transparent_34%),radial-gradient(circle_at_76%_18%,rgba(46,139,62,0.18),transparent_24%),linear-gradient(180deg,rgba(22,58,99,0),#163A63_88%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-20">
          <div className="flex min-h-[540px] flex-col justify-center [&>p:first-child]:!text-[#F9F4EE]">
            <Eyebrow>CENNIS Capital Advisory</Eyebrow>
            <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-tight text-balance sm:text-6xl lg:text-7xl">
              Financial guidance built for real life.
            </h1>
            <p className="mt-5 text-lg font-semibold text-[#F9F4EE]">
              Secure your branches. Build your future.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#F9F4EE] sm:text-xl">
              CENNIS helps you organize your money, understand your options, and
              build a clear plan without pressure or judgment.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="cennis-focus rounded-sm bg-[#9E3236] px-5 py-3 text-center text-sm font-bold text-[#F9F4EE] transition hover:bg-[#8B5128]"
              >
                Start a Conversation
              </Link>
              <Link
                href="/services"
                className="cennis-focus rounded-sm border border-[#F9F4EE]/45 px-5 py-3 text-center text-sm font-bold text-[#F9F4EE] transition hover:bg-[#F9F4EE]/10"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full border border-[#8B5128]/35 bg-[#F9F4EE]/10 p-4 shadow-2xl backdrop-blur">
              <div className="bg-[#F9F4EE] p-5 text-[#163A63] sm:p-6">
                <div className="border-b border-[#8B5128]/30 pb-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9E3236]">
                    CENNIS planning view
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-semibold">
                    Get Organized. Make Smarter Decisions.
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#163A63]/80">
                    CENNIS helps turn scattered money questions into a clear
                    next step.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    ["Clarity", "Know where you stand"],
                    ["Structure", "Put decisions in order"],
                    ["Discipline", "Follow a plan that fits"],
                    ["Confidence", "Move forward without pressure"],
                  ].map(([title, description]) => (
                    <div key={title} className="border border-[#8B5128]/30 p-4">
                      <p className="text-lg font-semibold">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-[#163A63]/80">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-[#F9F4EE]">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="[&>p:first-child]:!text-[#9E3236]">
            <Eyebrow>Where We Start</Eyebrow>
            <h2 className="mt-3 max-w-xl font-serif text-4xl font-semibold leading-tight text-[#163A63]">
              Most people do not need more financial noise. They need a clear starting point.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[#163A63]/80">
              CENNIS helps slow things down, organize the moving pieces, and
              turn uncertainty into a plan you can follow.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Clarity before complexity",
              "Structure before stress",
              "Planning before investing",
              "Guidance without judgment",
            ].map((point) => (
              <article key={point} className="border border-[#8B5128]/25 bg-[#F9F4EE] p-5">
                <h3 className="font-serif text-2xl font-semibold text-[#163A63]">
                  {point}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#F9F4EE]">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="[&>p:first-child]:!text-[#9E3236]">
            <Eyebrow>Who We Help</Eyebrow>
            <h2 className="mt-3 max-w-xl font-serif text-4xl font-semibold leading-tight text-[#163A63]">
              Guidance for different stages of real financial life.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {audiences.map((audience) => (
              <article key={audience.title} className="border border-[#8B5128]/25 bg-[#F9F4EE] p-5">
                <h3 className="font-serif text-2xl font-semibold text-[#163A63]">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#163A63]/80">
                  {audience.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#F9F4EE]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="[&>p:first-child]:!text-[#9E3236]">
            <Eyebrow>How We Work</Eyebrow>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#163A63]">
              A calm process for making better financial decisions.
            </h2>
          </div>
          <ol className="space-y-3">
            {steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[44px_1fr] gap-4">
                <span className="flex h-11 w-11 items-center justify-center bg-[#9E3236] text-sm font-bold text-[#F9F4EE]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="border-b border-[#8B5128]/30 pb-3">
                  <h3 className="text-lg font-semibold leading-7 text-[#163A63]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#163A63]/80">
                    {step.description}
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
              You do not have to figure it out alone.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#F9F4EE]/80">
              Start with a simple conversation about where you are, what you are
              trying to build, and what needs to happen next.
            </p>
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
