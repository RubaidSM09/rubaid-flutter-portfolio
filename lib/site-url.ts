/** Canonical origin shared by metadata, structured data, and indexing routes. */
export function getSiteUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  const value = configuredUrl || (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");
  return new URL(value).origin;
}
