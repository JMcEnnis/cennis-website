import Image from "next/image";
import Link from "next/link";

const publicLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="cennis-focus flex items-center gap-3 rounded-sm">
          <span className="inline-flex bg-[#F9F4EE] p-1.5">
            <Image
              src="/cennis-logo.png.png"
              alt="CENNIS Capital Advisory"
              width={1024}
              height={1024}
              priority
              className="h-auto w-14 sm:w-16"
            />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-semibold tracking-[0.18em] text-[#071b35]">
              CENNIS
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.22em] text-slate-500 sm:block">
              Wealth Advisory
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {publicLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="cennis-focus rounded-sm text-sm font-medium text-slate-700 transition hover:text-[#071b35]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="cennis-focus rounded-sm border border-[#c79a3b] px-4 py-2 text-sm font-semibold text-[#071b35] transition hover:bg-[#f7f0df]"
          >
            Book a Consultation
          </Link>
          <Link
            href="/onboarding"
            className="cennis-focus rounded-sm bg-[#071b35] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#102a4c]"
          >
            Start Onboarding
          </Link>
        </div>
      </div>
      <nav
        className="flex gap-4 overflow-x-auto border-t border-slate-100 bg-white px-4 py-3 text-sm font-medium text-slate-700 md:hidden"
        aria-label="Mobile navigation"
      >
        {publicLinks.map((link) => (
          <Link key={link.href} href={link.href} className="shrink-0">
            {link.label}
          </Link>
        ))}
        <Link href="/onboarding" className="shrink-0 text-[#071b35]">
          Onboarding
        </Link>
      </nav>
    </header>
  );
}
