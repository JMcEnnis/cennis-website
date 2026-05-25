import { ModuleShell } from "@/components/ui";

const metrics = [
  { label: "Total assets", value: "$2.8M" },
  { label: "YTD return", value: "8.4%" },
  { label: "Risk score", value: "62" },
  { label: "Next review", value: "Jun 18" },
];

export default function DashboardPage() {
  return (
    <ModuleShell
      title="Dashboard"
      description="A future home for client snapshots, advisor tasks, portfolio status, and planning alerts."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-sm border border-slate-200 bg-white p-5">
            <p className="text-sm font-medium text-slate-500">{metric.label}</p>
            <p className="mt-2 text-3xl font-semibold text-[#071b35]">{metric.value}</p>
          </div>
        ))}
      </div>
    </ModuleShell>
  );
}
