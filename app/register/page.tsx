import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Your Account | CENNIS Capital Advisory",
  description: "Secure onboarding for CENNIS clients and advisors.",
};

const inputClassName =
  "cennis-focus mt-1.5 w-full border border-[#8B5128]/30 bg-white px-3 py-2.5 text-sm font-normal text-[#163A63] outline-none transition placeholder:text-[#163A63]/40 focus:border-[#9E3236]";

export default function RegisterPage() {
  return (
    <section className="relative flex min-h-[calc(100vh-8rem)] items-center justify-center overflow-hidden bg-[#163A63] px-4 py-8 sm:px-6">
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(158,50,54,0.24),transparent_42%),radial-gradient(circle_at_78%_22%,rgba(46,139,62,0.12),transparent_25%)]"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-[350px] border border-[#8B5128]/30 bg-[#F9F4EE] p-5 shadow-[0_24px_70px_rgba(8,19,31,0.28)]">
        <Link
          href="/"
          className="cennis-focus mx-auto flex w-fit items-center gap-2.5 rounded-sm"
          aria-label="CENNIS Capital Advisory home"
        >
          <span className="inline-flex bg-white p-1">
            <Image
              src="/cennis-logo.png.png"
              alt=""
              width={1024}
              height={1024}
              priority
              className="h-auto w-9"
            />
          </span>
          <span className="leading-tight">
            <span className="block text-xs font-semibold tracking-[0.18em] text-[#163A63]">
              CENNIS CAPITAL
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-[#163A63]/55">
              Advisory
            </span>
          </span>
        </Link>

        <div className="mt-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9E3236]">
            CENNIS Platform
          </p>
          <h1 className="mt-1.5 font-serif text-2xl font-semibold text-[#163A63]">
            Create Your Account
          </h1>
          <p className="mt-1.5 text-xs leading-5 text-[#163A63]/70">
            Secure onboarding for CENNIS clients and advisors.
          </p>
        </div>

        <form className="mt-4" aria-label="Create your CENNIS account">
          <div className="grid grid-cols-2 gap-3">
            <label className="block text-xs font-semibold text-[#163A63]">
              First Name
              <input
                type="text"
                name="firstName"
                autoComplete="given-name"
                placeholder="First name"
                className={inputClassName}
              />
            </label>

            <label className="block text-xs font-semibold text-[#163A63]">
              Last Name
              <input
                type="text"
                name="lastName"
                autoComplete="family-name"
                placeholder="Last name"
                className={inputClassName}
              />
            </label>
          </div>

          <label className="mt-3 block text-xs font-semibold text-[#163A63]">
            Email address
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              className={inputClassName}
            />
          </label>

          <label className="mt-3 block text-xs font-semibold text-[#163A63]">
            Password
            <input
              type="password"
              name="password"
              autoComplete="new-password"
              placeholder="Create a password"
              className={inputClassName}
            />
          </label>

          <label className="mt-3 block text-xs font-semibold text-[#163A63]">
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
              placeholder="Confirm your password"
              className={inputClassName}
            />
          </label>

          <button
            type="button"
            className="cennis-focus mt-4 w-full bg-[#163A63] px-5 py-2.5 text-sm font-bold text-[#F9F4EE] transition hover:bg-[#08131F]"
          >
            Create Account
          </button>
        </form>

        <p className="mt-3 text-center text-xs text-[#163A63]/70">
          Already have an account?{" "}
          <Link
            href="/login"
            className="cennis-focus rounded-sm font-semibold text-[#9E3236] transition hover:text-[#8B5128]"
          >
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}
