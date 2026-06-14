import { PageHero, Section } from "@/components/ui";

const resources = [
  "Quarterly market letter",
  "Portfolio review checklist",
  "Retirement income guide",
  "Founder liquidity planning brief",
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Research notes and planning guides for better decisions."
        description="A placeholder resource library for future articles, downloads, investment commentary, and client education."
      />
      <Section className="bg-white">
        <div className="grid gap-5 md:grid-cols-2">
          {resources.map((resource) => (
            <article key={resource} className="rounded-sm border border-slate-200 p-6">
              <p className="text-sm font-semibold text-[#a77c26]">CENNIS Capital Advisory insight</p>
              <h2 className="mt-2 text-xl font-semibold text-[#071b35]">{resource}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Placeholder summary for future thought leadership and client
                education content.
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
