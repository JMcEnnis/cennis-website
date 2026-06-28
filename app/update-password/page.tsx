import type { Metadata } from "next";

import { UpdatePasswordForm } from "./update-password-form";

export const metadata: Metadata = {
  title: "Update Password | CENNIS Capital Advisory",
  description: "Create a new password for your CENNIS platform account.",
};

export default function UpdatePasswordPage() {
  return <UpdatePasswordForm />;
}
