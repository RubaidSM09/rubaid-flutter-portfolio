# Rubaid Sharif Mahbub — Portfolio

The complete portfolio, prepared as a standard Next.js App Router project for Vercel. The original design, responsive layouts, animations, project galleries, content, images, local fonts, and downloadable CV are included.

## Run on your computer

1. Install **Node.js 24 LTS** from https://nodejs.org/ (npm is included).
2. Extract the ZIP. Open the `rubaid-portfolio` folder in VS Code or another editor.
3. Open a terminal in the folder containing `package.json` and run:

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Use Ctrl+C to stop the server. These commands also work in Windows PowerShell.

The ZIP includes `package.json` and `package-lock.json`, which declare and lock all required dependencies. `npm ci` downloads them into `node_modules`; dependencies and generated build output are intentionally not bundled into the source ZIP.

## Verify a production build

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

Open http://localhost:3000 again to view the production build. Stop the development server first so port 3000 is free. See `VERIFICATION.md` for the checks performed on this export.

## Upload to GitHub

Create an empty repository at https://github.com/new. Do not initialize it with a README, license, or gitignore; this project already includes the necessary files.

From the extracted project folder, run the following with Git installed. Replace `YOUR_USERNAME` with your GitHub username:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rubaid-portfolio.git
git push -u origin main
```

The repository can be private. GitHub Desktop is also suitable for publishing the extracted folder. Commit `package-lock.json`; `.gitignore` excludes dependencies, build output, and local environment files.

## Deploy to Vercel

1. Go to https://vercel.com/new and connect your GitHub account.
2. Import the portfolio repository and grant Vercel access to it.
3. Select the folder containing `package.json` as the root directory. If you uploaded the contents directly to the repository root, keep `./`.
4. Use the settings below. The included `vercel.json` sets the framework and install/build commands.
5. Select **Deploy**. When the build succeeds, open the production URL.

| Setting | Value |
| --- | --- |
| Framework preset | Next.js |
| Node.js version | 24.x |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | Leave the Next.js default; no override |

Vercel deploys future pushes to the connected production branch. Check the production link in an incognito window if the portfolio should be visible to everyone; adjust Vercel Deployment Protection if it asks visitors to sign in.

### Canonical URL and custom domains

`lib/site-url.ts` supplies the canonical URL, Open Graph URL, Person structured data, sitemap, and robots.txt. It chooses:

1. `NEXT_PUBLIC_SITE_URL`, when you set it to your complete public origin, including `https://`.
2. Vercel's `VERCEL_PROJECT_PRODUCTION_URL` (or `VERCEL_URL` fallback), when system environment variables are available.
3. `http://localhost:3000` for local development.

No API keys, database, or account login are required by the portfolio. On Vercel, keep access to System Environment Variables enabled, or explicitly set `NEXT_PUBLIC_SITE_URL` in the project's environment settings. For a custom domain, add it in Vercel's domain settings, follow Vercel's DNS instructions, and set `NEXT_PUBLIC_SITE_URL` to that domain. Redeploy after changing the domain/environment setting because these pages are generated during the build.

For local configuration, copy `.env.example` to `.env.local` and uncomment the URL setting. On PowerShell, use `Copy-Item .env.example .env.local`; on macOS/Linux, use `cp .env.example .env.local`.

## Edit the portfolio

| File or folder | Purpose |
| --- | --- |
| `lib/portfolio.ts` | Profile, contact links, project descriptions and release labels, experience, skills, education, awards, leadership |
| `components/portfolio/portfolio.tsx` | Page sections, animations, project galleries, menu, and contact interactions |
| `app/globals.css` | Typography, colors, spacing, responsive layouts, and motion |
| `components/ui/` | The UI primitives used by the portfolio |
| `public/assets/` | Portrait, project logos, app screenshots, and original CV PDF |
| `public/fonts/` | Local Geist and Geist Mono fonts and their license |
| `app/layout.tsx` | Page title, description, social metadata, and font preload |
| `lib/site-url.ts` | Deployment-aware site origin |
| `app/robots.ts`, `app/sitemap.ts` | Search engine metadata routes |

Asset URLs begin with `/`; retain the `public` folder structure. Contact actions use email/phone links and a copy-email button. There is no contact-form service to configure.

Project availability is preserved from the original portfolio: Prochesta is published, Pollable has an October 1, 2026 launch label, and Dr Panda MD Academy is marked coming soon. Update these labels in `lib/portfolio.ts` when the status changes.

This export uses standard Next.js, React, TypeScript, Tailwind CSS, Radix UI, and Lucide. It does not need the Sites runtime, Vinext, Wrangler, or Cloudflare bindings. It is configured for Vercel/Node hosting, not GitHub Pages static hosting.

## Reference documentation

- Next.js setup: https://nextjs.org/docs/app/getting-started/installation
- Next.js on Vercel: https://vercel.com/docs/frameworks/full-stack/nextjs
- Vercel system environment variables: https://vercel.com/docs/environment-variables/system-environment-variables
- Vercel Node.js versions: https://vercel.com/docs/functions/runtimes/node-js/node-js-versions
