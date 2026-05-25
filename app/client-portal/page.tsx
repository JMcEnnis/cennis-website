import { ModuleShell } from "@/components/ui";

const items = ["Secure messages", "Document vault", "Meeting notes", "Household profile"];

export default function ClientPortalPage() {
  return (
    <ModuleShell
      title="Client Portal"
      description="Placeholder portal structure for client communications, files, meetings, and profile information."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="rounded-sm border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-[#071b35]">{item}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Static placeholder content for a future authenticated module.
            </p>
          </div>
        ))}
      </div>
    </ModuleShell>
  );
}
