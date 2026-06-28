"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const inputClassName =
  "cennis-focus mt-1.5 w-full border border-[#8B5128]/30 bg-white px-3 py-2.5 text-sm font-normal text-[#163A63] outline-none transition placeholder:text-[#163A63]/40 focus:border-[#9E3236] disabled:cursor-not-allowed disabled:bg-slate-100";

type RegistrationForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialForm: RegistrationForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export function RegisterForm() {
  const [form, setForm] = useState(initialForm);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  function updateField(field: keyof RegistrationForm, value: string) {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const firstName = form.firstName.trim();
    const lastName = form.lastName.trim();
    const email = form.email.trim();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !form.password ||
      !form.confirmPassword
    ) {
      setErrorMessage("Please complete all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password: form.password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
          },
        },
      });

      if (signUpError) {
        console.error("Supabase registration failed:", signUpError);
        setErrorMessage(getRegistrationErrorMessage(signUpError.message));
        return;
      }

      if (!data.user) {
        console.error("Supabase registration returned no user.");
        setErrorMessage(
          "We could not complete your registration. Please try again.",
        );
        return;
      }

      setForm(initialForm);
      setIsSuccessful(true);
    } catch (error) {
      console.error("Unexpected registration error:", error);
      setErrorMessage(
        "We could not complete your registration. Please try again.",
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

        {isSuccessful ? (
          <div
            className="mt-4 border border-[#2E8B3E]/30 bg-[#2E8B3E]/10 p-4 text-center"
            role="status"
          >
            <p className="text-sm font-semibold text-[#163A63]">
              Your account has been created.
            </p>
            <p className="mt-1 text-xs leading-5 text-[#163A63]/70">
              Please check your email for any confirmation instructions.
            </p>
          </div>
        ) : (
          <form
            className="mt-4"
            aria-label="Create your CENNIS account"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-3">
              <label className="block text-xs font-semibold text-[#163A63]">
                First Name
                <input
                  type="text"
                  name="firstName"
                  autoComplete="given-name"
                  placeholder="First name"
                  required
                  disabled={isSubmitting}
                  value={form.firstName}
                  onChange={(event) =>
                    updateField("firstName", event.target.value)
                  }
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
                  required
                  disabled={isSubmitting}
                  value={form.lastName}
                  onChange={(event) =>
                    updateField("lastName", event.target.value)
                  }
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
                required
                disabled={isSubmitting}
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
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
                required
                disabled={isSubmitting}
                value={form.password}
                onChange={(event) =>
                  updateField("password", event.target.value)
                }
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
                required
                disabled={isSubmitting}
                value={form.confirmPassword}
                onChange={(event) =>
                  updateField("confirmPassword", event.target.value)
                }
                className={inputClassName}
              />
            </label>

            {errorMessage ? (
              <p
                className="mt-3 border border-[#9E3236]/25 bg-[#9E3236]/8 px-3 py-2 text-xs leading-5 text-[#7d272b]"
                role="alert"
              >
                {errorMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="cennis-focus mt-4 w-full bg-[#163A63] px-5 py-2.5 text-sm font-bold text-[#F9F4EE] transition hover:bg-[#08131F] disabled:cursor-not-allowed disabled:opacity-65"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>
          </form>
        )}

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

function getRegistrationErrorMessage(message: string): string {
  const normalizedMessage = message.toLowerCase();

  if (
    normalizedMessage.includes("already registered") ||
    normalizedMessage.includes("already exists")
  ) {
    return "An account with this email already exists.";
  }

  if (normalizedMessage.includes("password")) {
    return "Please choose a stronger password and try again.";
  }

  if (normalizedMessage.includes("email")) {
    return "Please enter a valid email address.";
  }

  return "We could not create your account. Please try again.";
}
