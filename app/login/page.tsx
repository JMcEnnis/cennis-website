import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Portal Login | CENNIS Capital Advisory",
  description: "Secure access for CENNIS clients and advisors.",
};

export default function LoginPage() {
  return (
    <section className="relative overflow-hidden bg-[#163A63] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(158,50,54,0.3),transparent_38%),radial-gradient(circle_at_82%_18%,rgba(46,139,62,0.15),transparent_25%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid min-h-[620px] max-w-6xl overflow-hidden border border-[#8B5128]/35 bg-[#F9F4EE] shadow-[0_28px_80px_rgba(8,19,31,0.25)] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="flex flex-col justify-between bg-[#08131F] p-8 text-[#F9F4EE] sm:p-10 lg:p-12">
          <div>
            <Link
              href="/"
              className="cennis-focus inline-flex items-center gap-4 rounded-sm"
              aria-label="CENNIS Capital Advisory home"
            >
              <span className="inline-flex bg-[#F9F4EE] p-2">
                <Image
                  src="/cennis-logo.png.png"
                  alt=""
                  width={1024}
                  height={1024}
                  priority
                  className="h-auto w-14"
                />
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-semibold tracking-[0.18em]">
                  CENNIS CAPITAL
                </span>
                <span className="block text-xs font-medium uppercase tracking-[0.22em] text-[#F9F4EE]/65">
                  Advisory
                </span>
              </span>
            </Link>

            <p className="mt-14 text-sm font-semibold uppercase tracking-[0.24em] text-[#9E3236]">
              Client-centered guidance
            </p>
            <h2 className="mt-4 max-w-md font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Clarity for every step of your financial life.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-[#F9F4EE]/72">
              Access the CENNIS platform to stay connected with your advisory
              relationship and financial plan.
            </p>
          </div>

          <p className="mt-12 border-t border-[#8B5128]/35 pt-5 text-xs leading-5 text-[#F9F4EE]/50">
            This login page is a Phase 1 foundation. Secure authentication will
            be connected in a future step.
          </p>
        </div>

        <div className="flex items-center p-6 sm:p-10 lg:p-14">
          <div className="w-full">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9E3236]">
              CENNIS Platform
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold text-[#163A63] sm:text-5xl">
              Client Portal Login
            </h1>
            <p className="mt-4 leading-7 text-[#163A63]/70">
              Secure access for CENNIS clients and advisors.
            </p>

            <form className="mt-8" aria-label="Client portal login">
              <label className="block text-sm font-semibold text-[#163A63]">
                Email address
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="cennis-focus mt-2 w-full border border-[#8B5128]/30 bg-white px-4 py-3.5 text-sm font-normal text-[#163A63] outline-none transition placeholder:text-[#163A63]/40 focus:border-[#9E3236]"
                />
              </label>

              <label className="mt-5 block text-sm font-semibold text-[#163A63]">
                Password
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="cennis-focus mt-2 w-full border border-[#8B5128]/30 bg-white px-4 py-3.5 text-sm font-normal text-[#163A63] outline-none transition placeholder:text-[#163A63]/40 focus:border-[#9E3236]"
                />
              </label>

              <div className="mt-4 text-right">
                <Link
                  href="#"
                  className="cennis-focus rounded-sm text-sm font-semibold text-[#9E3236] transition hover:text-[#8B5128]"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="button"
                className="cennis-focus mt-7 w-full bg-[#163A63] px-5 py-3.5 text-sm font-bold text-[#F9F4EE] transition hover:bg-[#08131F]"
              >
                Sign In
              </button>
            </form>

            <p className="mt-6 text-center text-xs leading-5 text-[#163A63]/55">
              Authentication is not connected yet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
