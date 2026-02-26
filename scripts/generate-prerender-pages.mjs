import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createJiti } from "jiti";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const outputBaseDir = path.join(rootDir, "public");
const configPath = path.join(rootDir, "src", "pages", "brand-review", "config.ts");

const SITE_URL = (process.env.SITE_URL || "https://kingbet9-official.com").replace(/\/+$/, "");
const CTA_URL = "https://king9aus.net/RFESTERSEO";

const jiti = createJiti(import.meta.url);

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildList(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n");
}

function buildFaqJsonLd(page, url) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    isPartOf: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

function buildHtml(page, commonGameTypes, commonSlotProviders, commonLiveCasinoProviders) {
  const routeUrl = `${SITE_URL}/${page.slug}`;
  const faqJsonLd = JSON.stringify(buildFaqJsonLd(page, routeUrl));

  return `<!doctype html>
<html lang="en-AU">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(page.pageTitle)}</title>
    <meta name="description" content="${escapeHtml(page.metaDescription)}" />
    <meta property="og:title" content="${escapeHtml(page.ogTitle)}" />
    <meta property="og:description" content="${escapeHtml(page.ogDescription)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${escapeHtml(routeUrl)}" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <link rel="canonical" href="${escapeHtml(routeUrl)}" />
    <style>
      body { font-family: Inter, Arial, sans-serif; margin: 0; background: #0a0e13; color: #fff; line-height: 1.6; }
      main { max-width: 960px; margin: 0 auto; padding: 32px 16px 64px; }
      section { margin-top: 24px; border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 20px; background: rgba(255,255,255,0.04); }
      h1 { font-size: 36px; margin: 0 0 8px; }
      h2 { font-size: 24px; margin: 0 0 8px; }
      h3 { font-size: 18px; margin: 14px 0 6px; color: #facc15; }
      p { margin: 8px 0; color: #d1d5db; }
      ul { margin: 8px 0 0; padding-left: 20px; color: #d1d5db; }
      .cta { display: inline-block; margin-top: 14px; margin-right: 8px; padding: 10px 14px; border-radius: 8px; color: #111; text-decoration: none; font-weight: 700; background: linear-gradient(90deg,#f59e0b,#facc15); }
      .score { display:inline-block; padding: 4px 10px; border-radius: 999px; background: #facc15; color: #111; font-weight: 700; margin-top: 8px; }
      .subtle { color: #facc15; font-size: 13px; }
    </style>
    <script type="application/ld+json">${faqJsonLd}</script>
  </head>
  <body>
    <main>
      <p class="subtle">Independent review page</p>
      <h1>${escapeHtml(page.brandName)} Review: Bonus, Free Credits and Terms</h1>
      <p>${escapeHtml(page.introduction)}</p>
      <a class="cta" href="${CTA_URL}" rel="nofollow sponsored" target="_blank">Claim ${escapeHtml(page.brandName)} Bonus</a>
      <a class="cta" href="${CTA_URL}" rel="nofollow sponsored" target="_blank">${escapeHtml(page.brandName)} Free Credits</a>

      <section>
        <h2>Bonus & Promotions</h2>
        <h3>${escapeHtml(page.bonusTitle)}</h3>
        <p>${escapeHtml(page.bonusDetails)}</p>
        <p>${escapeHtml(page.freeCredits)}</p>
        <ul>${buildList(page.promotions)}</ul>
      </section>

      <section>
        <h2>Games</h2>
        <p>${escapeHtml(page.gamesOverview)}</p>
        <ul>${buildList(page.gameCategories)}</ul>
        <h3>Core Game Types</h3>
        <ul>${buildList(commonGameTypes)}</ul>
        <h3>Slot Game Providers</h3>
        <ul>${buildList(commonSlotProviders)}</ul>
        <h3>Live Casino Providers</h3>
        <ul>${buildList(commonLiveCasinoProviders)}</ul>
      </section>

      <section>
        <h2>Pros and Cons</h2>
        <h3>Pros</h3>
        <ul>${buildList(page.pros)}</ul>
        <h3>Cons</h3>
        <ul>${buildList(page.cons)}</ul>
      </section>

      <section>
        <h2>Our Verdict</h2>
        <span class="score">Score: ${escapeHtml(page.overallScore)}/10</span>
        <p>${escapeHtml(page.verdictSummary)}</p>
        <h3>Best For</h3>
        <ul>${buildList(page.bestFor)}</ul>
        <h3>Not Ideal For</h3>
        <ul>${buildList(page.notIdealFor)}</ul>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>${escapeHtml(page.conclusion)}</p>
        <a class="cta" href="${CTA_URL}" rel="nofollow sponsored" target="_blank">Visit ${escapeHtml(page.brandName)} Promotions</a>
      </section>

      <section>
        <h2>Payment Methods</h2>
        <ul>${buildList(page.paymentMethods)}</ul>
        <h2>License and Certificate</h2>
        <ul>${buildList(page.licenseCertificates)}</ul>
        <h2>Responsible Gambling</h2>
        <ul>${buildList(page.responsibleGambling)}</ul>
      </section>

      <section>
        <h2>${escapeHtml(page.brandName)} FAQ</h2>
        ${page.faqs
          .map(
            (faq) =>
              `<h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p>`
          )
          .join("\n")}
      </section>
    </main>
  </body>
</html>
`;
}

async function main() {
  const configModule = await jiti.import(configPath);
  const {
    brandReviewPages,
    commonGameTypes,
    commonSlotProviders,
    commonLiveCasinoProviders,
  } = configModule;

  const pages = Object.values(brandReviewPages);

  await Promise.all(
    pages.map(async (page) => {
      const targetDir = path.join(outputBaseDir, page.slug);
      const targetFile = path.join(targetDir, "index.html");
      const html = buildHtml(
        page,
        commonGameTypes,
        commonSlotProviders,
        commonLiveCasinoProviders
      );
      await mkdir(targetDir, { recursive: true });
      await writeFile(targetFile, html, "utf8");
    })
  );

  console.log(`Generated prerender HTML pages: ${pages.length}`);
}

main().catch((error) => {
  console.error("Failed to generate prerender pages:", error);
  process.exit(1);
});

