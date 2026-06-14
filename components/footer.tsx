import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/pricing", label: "Pricing" },
      { href: "/resources", label: "Resources" },
    ],
  },
  {
    title: "Platform",
    links: [
      { href: "/dashboard", label: "Dashboard" },
      { href: "/client-portal", label: "Client Portal" },
      { href: "/portfolio-analytics", label: "Analytics" },
      { href: "/research", label: "Research" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/disclosures", label: "Disclosures" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#08131F] text-[#F9F4EE]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex bg-[#F9F4EE] p-1.5">
              <Image
                src="/cennis-logo.png.png"
                alt="CENNIS Capital Advisory"
                width={1024}
                height={1024}
                className="h-auto w-10"
              />
            </span>
            <span className="text-lg font-semibold tracking-[0.18em]">
              CENNIS CAPITAL ADVISORY
            </span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-[#F9F4EE]/75">
            Clear financial guidance for people building stability, structure,
            and confidence in a changing world.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9E3236]">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-[#F9F4EE]/75">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-[#F9F4EE]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[#8B5128]/30 px-4 py-5 text-center text-xs text-[#F9F4EE]/55">
        © 2026 CENNIS Capital Advisory. Placeholder website. Advisory services and regulatory
        disclosures are illustrative only.
      </div>
    </footer>
  );
}
