# Export verification

Verified on September 23, 2026 using Node.js 24.19.0, npm 11.9.0, and standard Next.js 16.3.4 with Turbopack.

## Completed checks

- `npm install`: completed successfully and generated the npm dependency lockfile.
- `npm ci`: completed successfully from that lockfile.
- `npm run lint`: passed with no errors or warnings.
- `npm run typecheck`: passed.
- `npm run build`: passed, including Next.js compilation, TypeScript checking, and static page generation.
- The production server started successfully using Next.js.
- `/`, `/robots.txt`, and `/sitemap.xml` returned HTTP 200.
- All 23 original files in `public` returned HTTP 200 and matched the original bytes, including the portrait, app screenshots, logos, local fonts, and CV PDF.
- The portfolio stylesheet and content data match the original files exactly. The presentation component retains its original implementation except for removing one unused icon import.
- The old Sites URL is absent from the generated homepage metadata. A shared environment-aware helper now controls the canonical origin, structured data, robots, and sitemap.
- Locked package downloads point to the public npm registry.

## Package contents

The source ZIP includes application source, required UI primitives, local assets, font and vendor licenses, dependency declarations, the npm lockfile, `.env.example`, `.gitignore`, `.nvmrc`, Vercel configuration, and deployment instructions.

The ZIP excludes `node_modules`, `.next`, Git history, caches, temporary verification files, local runtime state, and environment secrets. Dependencies are restored with `npm install` or `npm ci`.

This verifies the portable project locally. No Vercel account deployment was performed as part of the export.
