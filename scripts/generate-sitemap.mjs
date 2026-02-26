import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const BASE_URL = (process.env.SITE_URL || "https://kingbet9-official.com").replace(/\/+$/, "");
const configPath = path.join(rootDir, "src", "pages", "brand-review", "config.ts");
const outputDir = path.join(rootDir, "public");
const outputPath = path.join(outputDir, "sitemap.xml");

function xmlEscape(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

async function getBrandSlugs() {
  const fileContent = await readFile(configPath, "utf8");
  const slugMatches = [...fileContent.matchAll(/slug:\s*"([^"]+)"/g)];
  return [...new Set(slugMatches.map((match) => match[1]))];
}

function buildSitemapXml(slugs) {
  const today = new Date().toISOString().slice(0, 10);
  const allPaths = ["/", ...slugs.map((slug) => `/${slug}`)];

  const urls = allPaths
    .map((routePath, index) => {
      const loc = xmlEscape(`${BASE_URL}${routePath}`);
      const changefreq = index === 0 ? "daily" : "weekly";
      const priority = index === 0 ? "1.0" : "0.8";

      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");
}

async function main() {
  const slugs = await getBrandSlugs();
  const xml = buildSitemapXml(slugs);

  await mkdir(outputDir, { recursive: true });
  await writeFile(outputPath, xml, "utf8");

  console.log(`Generated sitemap with ${slugs.length + 1} URLs -> ${outputPath}`);
}

main().catch((error) => {
  console.error("Failed to generate sitemap:", error);
  process.exit(1);
});
