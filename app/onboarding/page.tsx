import { ModuleShell } from "@/components/ui";

const steps = ["Profile", "Goals", "Accounts", "Risk review", "Schedule consultation"];

export default function OnboardingPage() {
  return (
    <ModuleShell
      title="Onboarding"
      description="A draft intake path for collecting client goals, account context, and consultation readiness."
    >
      <div className="rounded-sm border border-slate-200 bg-white p-6">
        <ol className="grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step} className="rounded-sm bg-slate-50 p-4">
              <span className="grid h-9 w-9 place-items-center rounded-sm bg-[#071b35] text-sm font-bold text-white">
                {index + 1}
              </span>
              <h2 className="mt-4 font-semibold text-[#071b35]">{step}</h2>
            </li>
          ))}
        </ol>
      </div>
    </ModuleShell>
  );
}
