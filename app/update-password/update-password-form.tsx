"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

import { supabase } from "@/lib/supabaseClient";

const inputClassName =
  "cennis-focus mt-1.5 w-full border border-[#8B5128]/30 bg-white px-3 py-2.5 text-sm font-normal text-[#163A63] outline-none transition placeholder:text-[#163A63]/40 focus:border-[#9E3236] disabled:cursor-not-allowed disabled:opacity-70";

export function UpdatePasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        console.error("Supabase password update failed:", error);
        setErrorMessage(
          "We could not update your password. Please request a new reset link and try again.",
        );
        return;
      }

      setNewPassword("");
      setConfirmPassword("");
      setSuccessMessage("Your password has been updated. You may now sign in.");
    } catch (error) {
      console.error("Unexpected password update error:", error);
      setErrorMessage(
        "We could not update your password right now. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
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
            Update Password
          </h1>
          <p className="mt-1.5 text-xs leading-5 text-[#163A63]/70">
            Create a new password for your secure CENNIS account.
          </p>
        </div>

        <form
          className="mt-4"
          aria-label="Update your CENNIS password"
          onSubmit={handleSubmit}
        >
          <label className="block text-xs font-semibold text-[#163A63]">
            New password
            <input
              type="password"
              name="newPassword"
              autoComplete="new-password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
              disabled={isSubmitting}
              required
              className={inputClassName}
            />
          </label>

          <label className="mt-3 block text-xs font-semibold text-[#163A63]">
            Confirm new password
            <input
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              disabled={isSubmitting}
              required
              className={inputClassName}
            />
          </label>

          {errorMessage ? (
            <p
              className="mt-3 border border-[#9E3236]/25 bg-white px-3 py-2 text-xs font-semibold leading-5 text-[#9E3236]"
              role="alert"
              aria-live="polite"
            >
              {errorMessage}
            </p>
          ) : null}

          {successMessage ? (
            <p
              className="mt-3 border border-[#2E8B3E]/30 bg-[#2E8B3E]/10 px-3 py-2 text-xs font-semibold leading-5 text-[#163A63]"
              role="status"
              aria-live="polite"
            >
              {successMessage}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="cennis-focus mt-4 w-full bg-[#163A63] px-5 py-2.5 text-sm font-bold text-[#F9F4EE] transition hover:bg-[#08131F] disabled:cursor-not-allowed disabled:opacity-75"
          >
            {isSubmitting ? "Updating Password..." : "Update Password"}
          </button>
        </form>

        <p className="mt-3 text-center text-xs text-[#163A63]/70">
          Ready to return?{" "}
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
