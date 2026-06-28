import type { Metadata } from "next";

import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Client Portal Login | CENNIS Capital Advisory",
  description: "Secure access for CENNIS clients and advisors.",
};

export default function LoginPage() {
  return <LoginForm />;
}
