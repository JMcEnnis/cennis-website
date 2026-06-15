import { ROLE_DASHBOARD_PATHS } from "./roles";

export const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/resources",
  "/disclosures",
  "/login",
  "/register",
  "/forgot-password",
] as const;

export const CLIENT_ROUTES = ["/client-dashboard"] as const;

export const ADVISOR_ROUTES = ["/advisor-dashboard"] as const;

export const ROUTES = {
  public: PUBLIC_ROUTES,
  client: CLIENT_ROUTES,
  advisor: ADVISOR_ROUTES,
} as const;

export const ROLE_REDIRECT_PATHS = ROLE_DASHBOARD_PATHS;

type ConfiguredRoute =
  | (typeof PUBLIC_ROUTES)[number]
  | (typeof CLIENT_ROUTES)[number]
  | (typeof ADVISOR_ROUTES)[number];

function normalizePathname(pathname: string): string {
  const [pathWithoutQueryOrHash] = pathname.split(/[?#]/);
  const normalizedPath = pathWithoutQueryOrHash || "/";

  return normalizedPath.length > 1
    ? normalizedPath.replace(/\/+$/, "")
    : normalizedPath;
}

function matchesConfiguredRoute(
  pathname: string,
  configuredRoute: ConfiguredRoute,
): boolean {
  const normalizedPath = normalizePathname(pathname);

  return (
    normalizedPath === configuredRoute ||
    (configuredRoute !== "/" &&
      normalizedPath.startsWith(`${configuredRoute}/`))
  );
}

function isRouteIn(
  pathname: string,
  configuredRoutes: readonly ConfiguredRoute[],
): boolean {
  return configuredRoutes.some((route) =>
    matchesConfiguredRoute(pathname, route),
  );
}

export function isPublicRoute(pathname: string): boolean {
  return isRouteIn(pathname, PUBLIC_ROUTES);
}

export function isClientRoute(pathname: string): boolean {
  return isRouteIn(pathname, CLIENT_ROUTES);
}

export function isAdvisorRoute(pathname: string): boolean {
  return isRouteIn(pathname, ADVISOR_ROUTES);
}
