import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a77c26]">
      {children}
    </p>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#071b35] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
        </div>
      </div>
    </section>
  );
}

export function PrimaryCtas() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link
        href="/contact"
        className="cennis-focus rounded-sm bg-[#c79a3b] px-5 py-3 text-center text-sm font-bold text-[#071b35] transition hover:bg-[#d5ad56]"
      >
        Book a Consultation
      </Link>
      <Link
        href="/onboarding"
        className="cennis-focus rounded-sm border border-white/35 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
      >
        Start Onboarding
      </Link>
    </div>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function ModuleShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="min-h-[70vh] bg-[#f7f8fb]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-sm border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a77c26]">
            CENNIS platform
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold text-[#071b35]">
            {title}
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
