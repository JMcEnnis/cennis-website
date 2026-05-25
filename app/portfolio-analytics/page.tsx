import { ModuleShell } from "@/components/ui";

const allocation = [
  { label: "Global equity", width: "46%" },
  { label: "Fixed income", width: "32%" },
  { label: "Alternatives", width: "14%" },
  { label: "Cash", width: "8%" },
];

export default function PortfolioAnalyticsPage() {
  return (
    <ModuleShell
      title="Portfolio Analytics"
      description="A placeholder analytics area for allocation, risk exposure, performance attribution, and scenario testing."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-sm border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-[#071b35]">Allocation</h2>
          <div className="mt-6 space-y-5">
            {allocation.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex justify-between text-sm font-medium text-slate-600">
                  <span>{item.label}</span>
                  <span>{item.width}</span>
                </div>
                <div className="h-3 rounded-sm bg-slate-100">
                  <div className="h-3 rounded-sm bg-[#c79a3b]" style={{ width: item.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-sm border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-[#071b35]">Scenario summary</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Placeholder analytics can later connect to portfolio holdings, market
            data, account aggregation, and reporting engines.
          </p>
          <div className="mt-6 grid grid-cols-3 items-end gap-3">
            {[80, 120, 92, 145, 118, 164].map((height, index) => (
              <div
                key={index}
                className="rounded-sm bg-[#102a4c]"
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </ModuleShell>
  );
}
