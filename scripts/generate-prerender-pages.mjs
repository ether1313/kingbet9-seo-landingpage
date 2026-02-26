import { cp, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createJiti } from "jiti";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const outputBaseDir = path.join(rootDir, "public");
const configPath = path.join(rootDir, "src", "pages", "brand-review", "config.ts");
const assetsSourceDir = path.join(rootDir, "src", "assets");
const prerenderAssetsDir = path.join(outputBaseDir, "prerender-assets");

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

const coreGameImageByName = {
  "slot": "/prerender-assets/review-core-games/slot.png",
  "event": "/prerender-assets/review-core-games/event.png",
  "live casino": "/prerender-assets/review-core-games/live-casino.png",
};

const slotProviderImagesByBrand = {
  woospin: [
    "/prerender-assets/review-slot-providers/woospin-1.png",
    "/prerender-assets/review-slot-providers/woospin-2.png",
  ],
  intensity: [
    "/prerender-assets/review-slot-providers/intensity-1.png",
    "/prerender-assets/review-slot-providers/intensity-2.png",
  ],
  tokenaud: [
    "/prerender-assets/review-slot-providers/tokenaud-1.png",
    "/prerender-assets/review-slot-providers/tokenaud-2.png",
  ],
  spinking: [
    "/prerender-assets/review-slot-providers/spinking-1.png",
    "/prerender-assets/review-slot-providers/spinking-2.png",
  ],
  crown777: [
    "/prerender-assets/review-slot-providers/crown777-1.png",
    "/prerender-assets/review-slot-providers/crown777-2.png",
  ],
  bsb007: [
    "/prerender-assets/review-slot-providers/bsb007-1.png",
    "/prerender-assets/review-slot-providers/bsb007-2.png",
  ],
  speedau: [
    "/prerender-assets/review-slot-providers/speedau-1.png",
    "/prerender-assets/review-slot-providers/speedau-2.png",
  ],
};

const logoByName = {
  osko: "/prerender-assets/review-logos/osko.png",
  payid: "/prerender-assets/review-logos/payid.png",
  "gambling help online": "/prerender-assets/review-logos/gambling-help-online.png",
  visa: "/prerender-assets/review-logos/visa.png",
  pagcor: "/prerender-assets/review-logos/pagcor.png",
  threatmetrix: "/prerender-assets/review-logos/threatmetrix.png",
  ecogra: "/prerender-assets/review-logos/ecogra.png",
  iovation: "/prerender-assets/review-logos/iovation.png",
  "apple pay": "/prerender-assets/review-logos/apple-pay.png",
  "play responsibly 18+": "/prerender-assets/review-logos/play-responsibly-18plus.png",
  amopay: "/prerender-assets/review-logos/amopay.png",
  "gambling therapy": "/prerender-assets/review-logos/gambling-therapy.png",
  "gaming curacao": "/prerender-assets/review-logos/gaming-curacao.png",
  "si labs international": "/prerender-assets/review-logos/si-labs-international.png",
  "tst verified": "/prerender-assets/review-logos/tst-verified.png",
  "google pay": "/prerender-assets/review-logos/google-pay.png",
  "itech labs": "/prerender-assets/review-logos/itech-labs.png",
  mastercard: "/prerender-assets/review-logos/mastercard.png",
  speedpay: "/prerender-assets/review-logos/speedpay.png",
  "bmm testlabs": "/prerender-assets/review-logos/bmm-testlabs.png",
};

function buildLogoGrid(items) {
  return items
    .map((item) => {
      const logo = logoByName[item.toLowerCase()];
      return `<div class="pill">${
        logo
          ? `<img src="${logo}" alt="${escapeHtml(item)}" loading="lazy" />`
          : `<span>${escapeHtml(item)}</span>`
      }</div>`;
    })
    .join("\n");
}

function buildImageCards(images, altPrefix) {
  return images
    .map(
      (image, index) =>
        `<div class="image-card"><img src="${image}" alt="${escapeHtml(
          `${altPrefix} ${index + 1}`
        )}" loading="lazy" /></div>`
    )
    .join("\n");
}

function buildCoreGameCards(commonGameTypes) {
  return commonGameTypes
    .map((game) => {
      const image = coreGameImageByName[game.toLowerCase()];
      return `<div class="core-card">${
        image
          ? `<img src="${image}" alt="${escapeHtml(game)}" loading="lazy" />`
          : `<span>${escapeHtml(game)}</span>`
      }</div>`;
    })
    .join("\n");
}

function buildProviderChipGrid(items) {
  return items
    .map((item) => `<div class="provider-chip">${escapeHtml(item)}</div>`)
    .join("\n");
}

function buildHtml(page, commonGameTypes, commonSlotProviders, commonLiveCasinoProviders) {
  const routeUrl = `${SITE_URL}/${page.slug}`;
  const faqJsonLd = JSON.stringify(buildFaqJsonLd(page, routeUrl));
  const introImage = `/prerender-assets/review-intro/${page.introImageKey}.png`;
  const slotProviderImages = slotProviderImagesByBrand[page.introImageKey] || [];

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
      .hero-image, .image-card { margin-top: 14px; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); background: #000; }
      .hero-image img, .image-card img { width: 100%; display: block; object-fit: cover; }
      .grid-2 { display: grid; grid-template-columns: 1fr; gap: 12px; margin-top: 12px; }
      .grid-3 { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 12px; margin-top: 12px; }
      .pill-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px; margin-top: 12px; }
      .pill { border: 1px solid rgba(255,255,255,0.2); border-radius: 999px; background: #000; padding: 8px 10px; text-align: center; min-height: 46px; display:flex; align-items:center; justify-content:center; }
      .pill img { max-width: 100%; max-height: 28px; object-fit: contain; }
      .core-card { border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; background: #000; padding: 10px; text-align: center; }
      .core-card img { height: 112px; width: auto; object-fit: contain; max-width: 100%; }
      .provider-chip-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px; margin-top: 12px; }
      .provider-chip { border: 1px solid rgba(255,255,255,0.16); border-radius: 10px; background: rgba(255,255,255,0.03); padding: 8px 10px; color: #d1d5db; font-size: 14px; }
      .pros-cons-grid { display: grid; grid-template-columns: 1fr; gap: 14px; margin-top: 10px; }
      .pros-cons-card { border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; background: rgba(255,255,255,0.03); padding: 14px; }
      @media (min-width: 768px) {
        .grid-2 { grid-template-columns: repeat(2,minmax(0,1fr)); }
        .grid-3 { grid-template-columns: repeat(3,minmax(0,1fr)); }
        .pill-grid { grid-template-columns: repeat(3,minmax(0,1fr)); }
        .provider-chip-grid { grid-template-columns: repeat(3,minmax(0,1fr)); }
        .pros-cons-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
      }
    </style>
    <script type="application/ld+json">${faqJsonLd}</script>
  </head>
  <body>
    <main>
      <p class="subtle">Independent review page</p>
      <h1>${escapeHtml(page.brandName)} Review: Bonus, Free Credits and Terms</h1>
      <div class="hero-image"><img src="${introImage}" alt="${escapeHtml(
    `${page.brandName} introduction`
  )}" loading="lazy" /></div>
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
        <div class="grid-3">${buildCoreGameCards(commonGameTypes)}</div>
        <h3>Slot Game Providers</h3>
        ${
          slotProviderImages.length > 0
            ? `<div class="grid-2">${buildImageCards(
                slotProviderImages,
                `${page.brandName} slot providers`
              )}</div>`
            : ""
        }
        <div class="provider-chip-grid">${buildProviderChipGrid(commonSlotProviders)}</div>
        <h3>Live Casino Providers</h3>
        <div class="provider-chip-grid">${buildProviderChipGrid(commonLiveCasinoProviders)}</div>
      </section>

      <section>
        <h2>Pros and Cons</h2>
        <div class="pros-cons-grid">
          <div class="pros-cons-card">
            <h3>Pros</h3>
            <ul>${buildList(page.pros)}</ul>
          </div>
          <div class="pros-cons-card">
            <h3>Cons</h3>
            <ul>${buildList(page.cons)}</ul>
          </div>
        </div>
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
        <div class="pill-grid">${buildLogoGrid(page.paymentMethods)}</div>
        <h2>License and Certificate</h2>
        <div class="pill-grid">${buildLogoGrid(page.licenseCertificates)}</div>
        <h2>Responsible Gambling</h2>
        <div class="pill-grid">${buildLogoGrid(page.responsibleGambling)}</div>
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

  await mkdir(prerenderAssetsDir, { recursive: true });
  await Promise.all([
    cp(path.join(assetsSourceDir, "review-intro"), path.join(prerenderAssetsDir, "review-intro"), {
      recursive: true,
    }),
    cp(path.join(assetsSourceDir, "review-slot-providers"), path.join(prerenderAssetsDir, "review-slot-providers"), {
      recursive: true,
    }),
    cp(path.join(assetsSourceDir, "review-core-games"), path.join(prerenderAssetsDir, "review-core-games"), {
      recursive: true,
    }),
    cp(path.join(assetsSourceDir, "review-logos"), path.join(prerenderAssetsDir, "review-logos"), {
      recursive: true,
    }),
  ]);

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

