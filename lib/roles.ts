export const USER_ROLES = ["client", "advisor", "admin"] as const;

export type UserRole = (typeof USER_ROLES)[number];

export const ROLE_DASHBOARD_PATHS = {
  client: "/client-dashboard",
  advisor: "/advisor-dashboard",
  admin: "/advisor-dashboard",
} as const satisfies Record<UserRole, string>;

export const ROLE_DISPLAY_LABELS = {
  client: "Client",
  advisor: "Advisor",
  admin: "Admin",
} as const satisfies Record<UserRole, string>;

export function isClient(role: unknown): role is "client" {
  return role === "client";
}

export function isAdvisor(role: unknown): role is "advisor" {
  return role === "advisor";
}

export function isAdmin(role: unknown): role is "admin" {
  return role === "admin";
}

export function isAdvisorOrAdmin(role: unknown): role is "advisor" | "admin" {
  return isAdvisor(role) || isAdmin(role);
}
