import Link from "next/link";
import { PageHero, Section } from "@/components/ui";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a consultation with CENNIS."
        description="Share a few details and the advisory team will follow up. This form is static for now and ready for a future backend."
      />
      <Section className="bg-[#f7f8fb]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <form className="rounded-sm border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-5 sm:grid-cols-2">
              {["First name", "Last name", "Email", "Phone"].map((label) => (
                <label key={label} className="text-sm font-semibold text-[#071b35]">
                  {label}
                  <input
                    className="mt-2 w-full rounded-sm border border-slate-300 px-3 py-3 text-sm outline-none focus:border-[#c79a3b]"
                    placeholder={label}
                  />
                </label>
              ))}
            </div>
            <label className="mt-5 block text-sm font-semibold text-[#071b35]">
              How can we help?
              <textarea
                className="mt-2 min-h-36 w-full rounded-sm border border-slate-300 px-3 py-3 text-sm outline-none focus:border-[#c79a3b]"
                placeholder="Tell us about your goals, portfolio, or upcoming decision."
              />
            </label>
            <button className="mt-5 rounded-sm bg-[#071b35] px-5 py-3 text-sm font-bold text-white">
              Book a Consultation
            </button>
          </form>
          <aside className="rounded-sm bg-[#071b35] p-7 text-white">
            <h2 className="font-serif text-3xl font-semibold">Prefer to begin digitally?</h2>
            <p className="mt-4 leading-7 text-slate-200">
              Start the placeholder onboarding flow and prepare basic household,
              goal, and account information.
            </p>
            <Link
              href="/onboarding"
              className="mt-6 inline-block rounded-sm bg-[#c79a3b] px-5 py-3 text-sm font-bold text-[#071b35]"
            >
              Start Onboarding
            </Link>
          </aside>
        </div>
      </Section>
    </>
  );
}
