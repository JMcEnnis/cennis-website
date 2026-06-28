import type { Metadata } from "next";
import { RegisterForm } from "./register-form";

export const metadata: Metadata = {
  title: "Create Your Account | CENNIS Capital Advisory",
  description: "Secure onboarding for CENNIS clients and advisors.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
