import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NotFound from "../NotFound";
import {
  brandReviewPages,
  commonGameTypes,
  commonLiveCasinoProviders,
  commonSlotProviders,
  type BrandReviewConfig,
} from "./config";
import oskoLogo from "../../assets/review-logos/osko.png";
import payidLogo from "../../assets/review-logos/payid.png";
import gamblingHelpOnlineLogo from "../../assets/review-logos/gambling-help-online.png";
import visaLogo from "../../assets/review-logos/visa.png";
import pagcorLogo from "../../assets/review-logos/pagcor.png";
import threatmetrixLogo from "../../assets/review-logos/threatmetrix.png";
import ecograLogo from "../../assets/review-logos/ecogra.png";
import iovationLogo from "../../assets/review-logos/iovation.png";
import applePayLogo from "../../assets/review-logos/apple-pay.png";
import playResponsiblyLogo from "../../assets/review-logos/play-responsibly-18plus.png";
import amopayLogo from "../../assets/review-logos/amopay.png";
import gamblingTherapyLogo from "../../assets/review-logos/gambling-therapy.png";
import gamingCuracaoLogo from "../../assets/review-logos/gaming-curacao.png";
import siLabsLogo from "../../assets/review-logos/si-labs-international.png";
import tstVerifiedLogo from "../../assets/review-logos/tst-verified.png";
import googlePayLogo from "../../assets/review-logos/google-pay.png";
import iTechLabsLogo from "../../assets/review-logos/itech-labs.png";
import mastercardLogo from "../../assets/review-logos/mastercard.png";
import speedpayLogo from "../../assets/review-logos/speedpay.png";
import bmmTestlabsLogo from "../../assets/review-logos/bmm-testlabs.png";
import slotCoreGameImage from "../../assets/review-core-games/slot.png";
import eventCoreGameImage from "../../assets/review-core-games/event.png";
import liveCasinoCoreGameImage from "../../assets/review-core-games/live-casino.png";
import bsb007IntroImage from "../../assets/review-intro/bsb007.png";
import speedauIntroImage from "../../assets/review-intro/speedau.png";
import woospinIntroImage from "../../assets/review-intro/woospin.png";
import intensityIntroImage from "../../assets/review-intro/intensity.png";
import spinkingIntroImage from "../../assets/review-intro/spinking.png";
import crown777IntroImage from "../../assets/review-intro/crown777.png";
import tokenaudIntroImage from "../../assets/review-intro/tokenaud.png";
import woospinSlotProviders1 from "../../assets/review-slot-providers/woospin-1.png";
import woospinSlotProviders2 from "../../assets/review-slot-providers/woospin-2.png";
import intensitySlotProviders1 from "../../assets/review-slot-providers/intensity-1.png";
import intensitySlotProviders2 from "../../assets/review-slot-providers/intensity-2.png";
import tokenaudSlotProviders1 from "../../assets/review-slot-providers/tokenaud-1.png";
import tokenaudSlotProviders2 from "../../assets/review-slot-providers/tokenaud-2.png";
import spinkingSlotProviders1 from "../../assets/review-slot-providers/spinking-1.png";
import spinkingSlotProviders2 from "../../assets/review-slot-providers/spinking-2.png";
import crown777SlotProviders1 from "../../assets/review-slot-providers/crown777-1.png";
import crown777SlotProviders2 from "../../assets/review-slot-providers/crown777-2.png";
import bsb007SlotProviders1 from "../../assets/review-slot-providers/bsb007-1.png";
import bsb007SlotProviders2 from "../../assets/review-slot-providers/bsb007-2.png";
import speedauSlotProviders1 from "../../assets/review-slot-providers/speedau-1.png";
import speedauSlotProviders2 from "../../assets/review-slot-providers/speedau-2.png";

const logoByName: Record<string, string> = {
  "osko": oskoLogo,
  "payid": payidLogo,
  "gambling help online": gamblingHelpOnlineLogo,
  "visa": visaLogo,
  "pagcor": pagcorLogo,
  "threatmetrix": threatmetrixLogo,
  "ecogra": ecograLogo,
  "iovation": iovationLogo,
  "apple pay": applePayLogo,
  "play responsibly 18+": playResponsiblyLogo,
  "amopay": amopayLogo,
  "gambling therapy": gamblingTherapyLogo,
  "gaming curacao": gamingCuracaoLogo,
  "si labs international": siLabsLogo,
  "tst verified": tstVerifiedLogo,
  "google pay": googlePayLogo,
  "itech labs": iTechLabsLogo,
  "mastercard": mastercardLogo,
  "speedpay": speedpayLogo,
  "bmm testlabs": bmmTestlabsLogo,
};

const coreGameImageByName: Record<string, string> = {
  "slot": slotCoreGameImage,
  "event": eventCoreGameImage,
  "live casino": liveCasinoCoreGameImage,
};

const introImageByKey: Record<string, string> = {
  "bsb007": bsb007IntroImage,
  "speedau": speedauIntroImage,
  "woospin": woospinIntroImage,
  "intensity": intensityIntroImage,
  "spinking": spinkingIntroImage,
  "crown777": crown777IntroImage,
  "tokenaud": tokenaudIntroImage,
};

const CTA_URL = "https://king9aus.net/RFESTERSEO";

const slotProviderImagesByBrand: Record<string, string[]> = {
  "woospin": [woospinSlotProviders1, woospinSlotProviders2],
  "intensity": [intensitySlotProviders1, intensitySlotProviders2],
  "tokenaud": [tokenaudSlotProviders1, tokenaudSlotProviders2],
  "spinking": [spinkingSlotProviders1, spinkingSlotProviders2],
  "crown777": [crown777SlotProviders1, crown777SlotProviders2],
  "bsb007": [bsb007SlotProviders1, bsb007SlotProviders2],
  "speedau": [speedauSlotProviders1, speedauSlotProviders2],
};

function BrandCtaButtons({ brandName }: { brandName: string }) {
  const buttons = [
    `Claim ${brandName} Bonus`,
    `${brandName} Free Credits`,
    `Visit ${brandName} Promotions`,
  ];

  return (
    <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
      {buttons.map((label) => (
        <a
          key={label}
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="rounded-lg border border-yellow-500/40 bg-gradient-to-r from-yellow-500 to-amber-500 px-4 py-3 text-center text-sm font-semibold text-black transition-opacity hover:opacity-90"
        >
          {label}
        </a>
      ))}
    </div>
  );
}

function setMetaTag(selector: string, content: string) {
  const tag = document.querySelector(selector);
  if (tag) {
    tag.setAttribute("content", content);
    return;
  }

  const newTag = document.createElement("meta");
  if (selector.includes("name=")) {
    const name = selector.match(/name="([^"]+)"/)?.[1];
    if (name) newTag.setAttribute("name", name);
  } else {
    const property = selector.match(/property="([^"]+)"/)?.[1];
    if (property) newTag.setAttribute("property", property);
  }
  newTag.setAttribute("content", content);
  document.head.appendChild(newTag);
}

function injectReviewSchema(page: BrandReviewConfig) {
  const id = "brand-review-schema";
  const existing = document.getElementById(id);
  if (existing) existing.remove();

  const script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: page.brandName,
    },
    reviewBody: `${page.brandName} review with focus on bonus terms and free credits conditions.`,
    author: {
      "@type": "Organization",
      name: "Independent Review Team",
    },
    name: `${page.brandName} Review`,
  });
  document.head.appendChild(script);
}

function removeReviewSchema() {
  const schemaScript = document.getElementById("brand-review-schema");
  if (schemaScript) schemaScript.remove();
}

function LogoBadge({ name }: { name: string }) {
  const logo = logoByName[name.toLowerCase()];

  return (
    <div className="rounded-full border border-white/20 bg-black px-4 py-2 text-center text-sm md:text-base">
      {logo ? (
        <img
          src={logo}
          alt={name}
          loading="lazy"
          className="mx-auto h-8 w-full object-contain"
        />
      ) : (
        <span>{name}</span>
      )}
    </div>
  );
}

function CoreGameCard({ name }: { name: string }) {
  const image = coreGameImageByName[name.toLowerCase()];

  return (
    <div className="rounded-xl border border-white/20 bg-black p-3 text-center">
      {image ? (
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="mx-auto h-24 w-auto object-contain md:h-28"
        />
      ) : (
        <span className="text-gray-300">{name}</span>
      )}
    </div>
  );
}

export default function BrandReviewPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? brandReviewPages[slug] : undefined;
  const introImage = page ? introImageByKey[page.introImageKey] : undefined;
  const slotProviderImages = page ? slotProviderImagesByBrand[page.introImageKey] ?? [] : [];

  useEffect(() => {
    if (!page) return;

    document.title = page.pageTitle;
    setMetaTag('meta[name="description"]', page.metaDescription);
    setMetaTag('meta[property="og:title"]', page.ogTitle);
    setMetaTag('meta[property="og:description"]', page.ogDescription);
    injectReviewSchema(page);

    return () => {
      removeReviewSchema();
    };
  }, [page]);

  if (!page) return <NotFound />;

  return (
    <main className="min-h-screen bg-[#0a0e13] text-white">
      <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
        <p className="mb-4 text-sm text-yellow-400">Review Page</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          {page.brandName} Review: Bonus, Free Credits and Terms
        </h1>
        {introImage ? (
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-black">
            <img
              src={introImage}
              alt={`${page.brandName} introduction`}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        ) : null}
        <p className="mt-5 text-base md:text-lg text-gray-300">{page.introduction}</p>
        <BrandCtaButtons brandName={page.brandName} />

        <section className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Bonus & Promotions</h2>
          <h3 className="mt-3 text-lg font-semibold text-yellow-300">{page.bonusTitle}</h3>
          <p className="mt-3 text-gray-300">{page.bonusDetails}</p>
          <p className="mt-3 text-gray-300">{page.freeCredits}</p>
          <ul className="mt-4 space-y-2 text-gray-300">
            {page.promotions.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Games</h2>
          <p className="mt-3 text-gray-300">{page.gamesOverview}</p>
          <ul className="mt-4 space-y-2 text-gray-300">
            {page.gameCategories.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-yellow-300">Game Types</h3>
            <ul className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3">
              {commonGameTypes.map((item) => (
                <li key={item}>
                  <CoreGameCard name={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-yellow-300">Slot Game Providers</h3>
            {slotProviderImages.length > 0 ? (
              <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
                {slotProviderImages.map((image, index) => (
                  <div
                    key={`${page.brandName}-slot-providers-${index}`}
                    className="overflow-hidden rounded-xl border border-white/10 bg-black"
                  >
                    <img
                      src={image}
                      alt={`${page.brandName} slot providers ${index + 1}`}
                      loading="lazy"
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}
            <ul className="mt-2 grid grid-cols-2 gap-2 text-gray-300 md:grid-cols-3">
              {commonSlotProviders.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-yellow-300">Live Casino Providers</h3>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-gray-300 md:grid-cols-3">
              {commonLiveCasinoProviders.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-green-300">Pros</h2>
            <ul className="mt-3 space-y-2 text-gray-300">
              {page.pros.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-red-300">Cons</h2>
            <ul className="mt-3 space-y-2 text-gray-300">
              {page.cons.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Our Verdict</h2>
          <div className="mt-4 flex items-center gap-3">
            <span className="rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-black">
              Score: {page.overallScore}/10
            </span>
          </div>
          <p className="mt-4 text-gray-300">{page.verdictSummary}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-green-300">Best For</h3>
              <ul className="mt-2 space-y-2 text-gray-300">
                {page.bestFor.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-300">Not Ideal For</h3>
              <ul className="mt-2 space-y-2 text-gray-300">
                {page.notIdealFor.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Conclusion</h2>
          <p className="mt-3 text-gray-300">{page.conclusion}</p>
          <BrandCtaButtons brandName={page.brandName} />
        </section>

        <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Payment Methods</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
            {page.paymentMethods.map((item) => (
              <LogoBadge key={item} name={item} />
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">License and Certificate</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
            {page.licenseCertificates.map((item) => (
              <LogoBadge key={item} name={item} />
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Responsible Gambling</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
            {page.responsibleGambling.map((item) => (
              <LogoBadge key={item} name={item} />
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">{page.brandName} FAQ</h2>
          <div className="mt-4 space-y-4">
            {page.faqs.map((item) => (
              <article key={item.question}>
                <h3 className="font-semibold">{item.question}</h3>
                <p className="mt-1 text-gray-300">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-10">
          <Link to="/" className="text-yellow-400 hover:text-yellow-300 transition-colors">
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
