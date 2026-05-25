import { ModuleShell } from "@/components/ui";

const notes = ["Macro overview", "Equity factors", "Fixed income watch", "Alternatives briefing"];

export default function ResearchModulePage() {
  return (
    <ModuleShell
      title="Research"
      description="Future workspace for market commentary, manager notes, model updates, and investment committee material."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {notes.map((note) => (
          <article key={note} className="rounded-sm border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-[#a77c26]">Research note</p>
            <h2 className="mt-2 text-xl font-semibold text-[#071b35]">{note}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Placeholder analysis summary and future publication workflow.
            </p>
          </article>
        ))}
      </div>
    </ModuleShell>
  );
}
