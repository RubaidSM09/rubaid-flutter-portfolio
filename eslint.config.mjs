import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "next-env.d.ts"]),
  {
    // Preserve the original image dimensions and rendering of the portfolio.
    files: ["components/portfolio/portfolio.tsx"],
    rules: { "@next/next/no-img-element": "off" },
  },
]);
