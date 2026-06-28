"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { isAdvisorOrAdmin, isClient } from "@/lib/roles";
import { ROLE_REDIRECT_PATHS } from "@/lib/routes";
import { supabase } from "@/lib/supabaseClient";

export function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error || !data.user) {
        setErrorMessage(
          "We could not sign you in. Please check your email and password.",
        );
        return;
      }

      const { data: userRecord, error: userRecordError } = await supabase
        .from("users")
        .select("role")
        .eq("id", data.user.id)
        .maybeSingle();

      if (userRecordError || !userRecord?.role) {
        setErrorMessage(
          "Your account is active, but dashboard access is not set up yet.",
        );
        return;
      }

      const { role } = userRecord;

      if (isClient(role)) {
        router.push(ROLE_REDIRECT_PATHS.client);
        return;
      }

      if (isAdvisorOrAdmin(role)) {
        router.push(ROLE_REDIRECT_PATHS[role]);
        return;
      }

      setErrorMessage(
        "Your account role is not recognized. Please contact CENNIS support.",
      );
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(
        "We could not complete sign in right now. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative flex min-h-[calc(100vh-8rem)] items-center justify-center overflow-hidden bg-[#163A63] px-4 py-8 sm:px-6">
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(158,50,54,0.24),transparent_42%),radial-gradient(circle_at_78%_22%,rgba(46,139,62,0.12),transparent_25%)]"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-[330px] border border-[#8B5128]/30 bg-[#F9F4EE] p-5 shadow-[0_24px_70px_rgba(8,19,31,0.28)]">
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
            Client Portal Login
          </h1>
          <p className="mt-1.5 text-xs leading-5 text-[#163A63]/70">
            Secure access for CENNIS clients and advisors.
          </p>
        </div>

        <form
          className="mt-4"
          aria-label="Client portal login"
          onSubmit={handleSubmit}
        >
          <label className="block text-xs font-semibold text-[#163A63]">
            Email address
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={loading}
              required
              className="cennis-focus mt-1.5 w-full border border-[#8B5128]/30 bg-white px-3 py-2.5 text-sm font-normal text-[#163A63] outline-none transition placeholder:text-[#163A63]/40 focus:border-[#9E3236] disabled:cursor-not-allowed disabled:opacity-70"
            />
          </label>

          <label className="mt-3 block text-xs font-semibold text-[#163A63]">
            Password
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={loading}
              required
              className="cennis-focus mt-1.5 w-full border border-[#8B5128]/30 bg-white px-3 py-2.5 text-sm font-normal text-[#163A63] outline-none transition placeholder:text-[#163A63]/40 focus:border-[#9E3236] disabled:cursor-not-allowed disabled:opacity-70"
            />
          </label>

          <div className="mt-2.5 text-right">
            <Link
              href="/forgot-password"
              className="cennis-focus rounded-sm text-xs font-semibold text-[#9E3236] transition hover:text-[#8B5128]"
            >
              Forgot Password?
            </Link>
          </div>

          {errorMessage && (
            <p
              className="mt-3 border border-[#9E3236]/25 bg-white px-3 py-2 text-xs font-semibold leading-5 text-[#9E3236]"
              role="alert"
              aria-live="polite"
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="cennis-focus mt-4 w-full bg-[#163A63] px-5 py-2.5 text-sm font-bold text-[#F9F4EE] transition hover:bg-[#08131F] disabled:cursor-not-allowed disabled:opacity-75"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </section>
  );
}
