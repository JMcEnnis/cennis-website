import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advisor Dashboard | CENNIS Capital Advisory",
};

export default function AdvisorDashboardPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-[#f7f8fb] px-4 py-12 sm:px-6">
      <div className="w-full max-w-xl border border-[#8B5128]/25 bg-[#F9F4EE] p-7 text-center shadow-[0_20px_55px_rgba(8,19,31,0.1)] sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9E3236]">
          CENNIS Platform
        </p>
        <h1 className="mt-3 font-serif text-3xl font-semibold text-[#163A63] sm:text-4xl">
          Advisor Dashboard
        </h1>
        <p className="mt-4 text-base leading-7 text-[#163A63]/80">
          Welcome to the CENNIS advisor workspace.
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#163A63]/60">
          Client review tools and advisory workflows will appear here after
          authentication is connected.
        </p>
      </div>
    </section>
  );
}
