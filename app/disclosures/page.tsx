import { PageHero, Section } from "@/components/ui";

export default function DisclosuresPage() {
  return (
    <>
      <PageHero
        eyebrow="Disclosures"
        title="Important information and advisory disclosures."
        description="This page contains placeholder disclosure language and should be reviewed by legal and compliance before publication."
      />
      <Section className="bg-white">
        <div className="max-w-4xl space-y-6 text-sm leading-7 text-slate-700">
          <p>
            CENNIS is a placeholder brand for a prospective wealth management
            and portfolio advisory platform. The information on this website is
            for illustrative purposes only and does not constitute investment,
            tax, accounting, or legal advice.
          </p>
          <p>
            Investing involves risk, including possible loss of principal. Past
            performance does not guarantee future results. Any hypothetical
            examples, projections, or model portfolios shown are illustrative and
            may not reflect actual client outcomes.
          </p>
          <p>
            Final disclosures, registration status, fee schedules, privacy
            policy, and regulatory documents should be added before public launch.
          </p>
        </div>
      </Section>
    </>
  );
}
