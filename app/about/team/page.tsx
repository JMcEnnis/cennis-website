import Link from "next/link";
import { PageHero, Section } from "@/components/ui";

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet the Team"
        title="Meet the Team"
        description="Start with the founder and the client-first philosophy behind CENNIS Capital Advisory."
      />

      <Section className="bg-[#F9F4EE]">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9E3236]">
              Founder
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#163A63]">
              Jameal McEnnis
            </h2>
          </div>
          <div className="space-y-5 border-l-4 border-[#8B5128] pl-6 text-lg leading-8 text-[#163A63]/80">
            <p>
              Jameal McEnnis is building CENNIS Capital Advisory to help people
              get organized, understand their options, and make financial
              decisions with more confidence.
            </p>
            <p>
              His work is centered on finance, investment thinking, planning
              structure, and plain-language guidance. The goal is not to make
              money feel more complicated. It is to help clients slow things
              down, see what matters, and follow a plan that fits real life.
            </p>
            <p>
              The firm’s philosophy is client-first: listen carefully, explain
              clearly, manage risk with discipline, and keep decisions connected
              to the person or family behind the plan.
            </p>
            <Link
              href="/contact"
              className="cennis-focus inline-block rounded-sm bg-[#9E3236] px-5 py-3 text-sm font-bold text-[#F9F4EE] transition hover:bg-[#8B5128]"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
