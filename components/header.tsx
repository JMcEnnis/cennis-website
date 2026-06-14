import Image from "next/image";
import Link from "next/link";

const publicLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const aboutLinks = [
  { href: "/about", label: "About CENNIS" },
  { href: "/about/team", label: "Meet the Team" },
  { href: "/about/values", label: "Corporate Values" },
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
              CENNIS CAPITAL
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.22em] text-slate-500 sm:block">
              Advisory
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {publicLinks.map((link) => (
            link.href === "/about" ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="cennis-focus rounded-sm text-sm font-medium text-slate-700 transition hover:text-[#9E3236]"
                >
                  {link.label}
                </Link>
                <div className="invisible absolute left-0 top-full z-50 w-56 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-sm border border-[#8B5128]/20 bg-[#F9F4EE] p-2 shadow-[0_18px_45px_rgba(8,19,31,0.14)]">
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="cennis-focus block rounded-sm px-3 py-2.5 text-sm font-semibold text-[#163A63] transition hover:bg-white hover:text-[#9E3236]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="cennis-focus rounded-sm text-sm font-medium text-slate-700 transition hover:text-[#071b35]"
              >
                {link.label}
              </Link>
            )
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
        className="border-t border-slate-100 bg-white px-4 py-3 text-sm font-medium text-slate-700 md:hidden"
        aria-label="Mobile navigation"
      >
        <div className="flex gap-4 overflow-x-auto">
          <details className="shrink-0">
            <summary className="cursor-pointer list-none">About</summary>
            <div className="mt-3 w-52 rounded-sm border border-[#8B5128]/20 bg-[#F9F4EE] p-2 shadow-lg">
              {aboutLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-sm px-3 py-2.5 text-sm font-semibold text-[#163A63]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          {publicLinks
            .filter((link) => link.href !== "/about")
            .map((link) => (
              <Link key={link.href} href={link.href} className="shrink-0">
                {link.label}
              </Link>
            ))}
          <Link href="/onboarding" className="shrink-0 text-[#071b35]">
            Onboarding
          </Link>
        </div>
      </nav>
    </header>
  );
}
