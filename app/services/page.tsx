import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "Services — Café & Restaurant Ordering System | CoreNode",
  description:
    "Launch-ready café & restaurant ordering software: QR ordering, live kitchen dashboard, payments, analytics and an AI chatbot. Simple, transparent pricing.",
};

const DEMO_URL = "https://cafe-ordering-system-nine.vercel.app/";
const PHONE_DISPLAY = "+91 70117 75286";
const TEL_URL = "tel:+917011775286";
const WA_URL =
  "https://wa.me/917011775286?text=Hi%20CoreNode%21%20I%27d%20like%20a%20quote%20for%20the%20cafe%20ordering%20system.";

type Feature = string | { label: string; desc: string; isNew?: boolean };

interface Tier {
  key: string;
  name: string;
  accent: "green" | "blue" | "orange";
  setup: string;
  monthly: string;
  tagline: string;
  inherits: string | null;
  features: Feature[];
  popular?: boolean;
  dark?: boolean;
  freeWebsite?: boolean;
  cta: string;
}

const tiers: Tier[] = [
  {
    key: "digital",
    name: "Digital Presence",
    accent: "green",
    setup: "₹999",
    monthly: "₹499",
    tagline: "Get your café online for ₹499/month.",
    inherits: null,
    features: [
      "Professional café website",
      "Digital menu & categories",
      "Photos & prices",
      "About section & location",
      "Contact / WhatsApp button",
      "Mobile responsive & SSL",
    ],
    cta: "Get started",
  },
  {
    key: "smart",
    name: "Smart Ordering",
    accent: "blue",
    popular: true,
    setup: "₹7,499",
    monthly: "₹999",
    tagline: "QR ordering that runs your whole floor.",
    inherits: "Digital Presence",
    features: [
      "Table-specific QR ordering",
      "Customer cart & placement",
      "Live kitchen / staff dashboard",
      "Order status tracking",
      "Table & menu management",
      "Basic sales dashboard",
    ],
    freeWebsite: true,
    cta: "Choose Smart Ordering",
  },
  {
    key: "pro",
    name: "Business Pro",
    accent: "orange",
    dark: true,
    setup: "₹12,999",
    monthly: "₹1,499",
    tagline: "Everything to scale — now with AI built in.",
    inherits: "Smart Ordering",
    features: [
      { label: "Payments", desc: "UPI / online integration, receipts" },
      { label: "Customer", desc: "Loyalty system, coupons, database" },
      { label: "Analytics", desc: "Advanced sales, daily reports" },
      { label: "Staff", desc: "Permissions, item availability" },
      { label: "AI Chatbot", desc: "24/7 ordering & support assistant", isNew: true },
      { label: "Support", desc: "Priority support routing" },
    ],
    cta: "Go Business Pro",
  },
];

const cafeFeatures = [
  "QR-code table ordering",
  "Live kitchen / staff dashboard",
  "Order status tracking",
  "UPI & online payments",
  "Sales analytics & reports",
  "Loyalty, coupons & AI chatbot",
];

const categories = [
  {
    icon: "☕",
    name: "Cafés & Restaurants",
    desc: "QR ordering, kitchen dashboard, payments & analytics.",
    status: "Now live",
    active: true,
  },
  { icon: "🛍️", name: "Retail & Kirana", desc: "Catalogue, billing & inventory.", status: "Coming soon" },
  { icon: "✂️", name: "Salons & Clinics", desc: "Appointments & client records.", status: "Coming soon" },
  { icon: "🏨", name: "Hotels & Stays", desc: "Room service & guest requests.", status: "Coming soon" },
];

const enterpriseUses = [
  "POS integration",
  "Inventory management",
  "Multiple branches",
  "Kitchen display systems (KDS)",
  "Delivery management",
  "WhatsApp automation",
  "Custom apps",
];

export default function ServicesPage() {
  return (
    <main>
      <SiteNav />

      <section className="svc-hero" id="top">
        <div className="hero-grid" />
        <div className="svc-hero-content">
          <p className="eyebrow"><span className="pulse" /> Services / Industry solutions</p>
          <h1>Software built for<br /><em>your industry.</em></h1>
          <p className="hero-copy">
            Launch-ready platforms tailored to how your business actually runs — starting with a
            complete ordering system for cafés and restaurants.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#cafes">See the café solution <span>↓</span></a>
            <a className="text-link" href="#pricing">Jump to pricing <span>↓</span></a>
          </div>
        </div>
      </section>

      <section className="section svc-categories">
        <div className="section-label">01 / What we serve</div>
        <div className="cat-grid">
          {categories.map((c) => {
            const inner = (
              <>
                <span className="cat-icon">{c.icon}</span>
                <div className="cat-text">
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                </div>
                <span className="cat-status">{c.status}</span>
              </>
            );
            return c.active ? (
              <a key={c.name} className="cat-card cat-card--active" href="#cafes">{inner}</a>
            ) : (
              <div key={c.name} className="cat-card cat-card--soon">{inner}</div>
            );
          })}
        </div>
      </section>

      <section className="section cafe-offer" id="cafes">
        <div className="cafe-offer-head">
          <div className="cafe-offer-copy">
            <div className="section-label">02 / Cafés &amp; Restaurants</div>
            <h2>A complete ordering<br /><span>system for your café.</span></h2>
            <p>
              From QR-code table ordering to a live kitchen dashboard, online payments and
              analytics — everything your café needs to take orders online and run the floor
              smoothly.
            </p>
            <div className="cafe-feature-list">
              {cafeFeatures.map((f) => (
                <span key={f}><i>✓</i>{f}</span>
              ))}
            </div>
            <div className="cafe-cta-row">
              <a className="button button-primary" href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                View live demo <span>↗</span>
              </a>
              <span className="demo-note">Live sample / prototype — opens in a new tab</span>
            </div>
          </div>
          <a
            className="demo-frame"
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the live café ordering demo in a new tab"
          >
            <span className="demo-bar"><i /><i /><i /><span className="demo-bar-url">cafe-ordering-system.vercel.app</span></span>
            <span className="demo-body">
              <span className="demo-badge"><span className="pulse" /> Live demo</span>
              <strong>Café Ordering System</strong>
              <span className="demo-sub">Scan · order · pay — right from the table.</span>
              <span className="demo-open">Open prototype ↗</span>
            </span>
          </a>
        </div>
      </section>

      <section className="section pricing" id="pricing">
        <div className="pricing-head">
          <div className="section-label">03 / Pricing</div>
          <h2>Simple, transparent<br /><span>pricing.</span></h2>
          <p>A one-time setup, then a low monthly fee. No lock-in, no hidden costs.</p>
        </div>

        <div className="price-grid">
          {tiers.map((t) => (
            <article
              key={t.key}
              className={["price-card", `price-card--${t.accent}`, t.popular ? "price-card--pop" : "", t.dark ? "price-card--dark" : ""]
                .filter(Boolean)
                .join(" ")}
            >
              {t.popular ? <span className="price-badge">★ Most popular</span> : null}
              <h3 className="price-name">{t.name}</h3>
              <div className="price-setup">
                <span className="price-setup-label">One-time setup</span>
                <span className="price-setup-value">{t.setup}</span>
              </div>
              <div className="price-monthly">then {t.monthly} <span>/ month</span></div>
              <p className="price-tagline">{t.tagline}</p>
              <div className="price-divider" />
              {t.inherits ? (
                <p className="price-inherits">Everything in <b>{t.inherits}</b>, plus:</p>
              ) : (
                <p className="price-inherits price-inherits--base">Everything you need to get online:</p>
              )}
              <ul className="price-features">
                {t.features.map((f, i) => {
                  const isObj = typeof f !== "string";
                  const isNew = isObj && f.isNew;
                  return (
                    <li key={i} className={isNew ? "is-new" : undefined}>
                      <span className="tick">✓</span>
                      <span className="feat-text">
                        {isObj ? <><b>{f.label}:</b> {f.desc}</> : f}
                        {isNew ? <em className="new-pill">NEW</em> : null}
                      </span>
                    </li>
                  );
                })}
              </ul>
              {t.freeWebsite ? (
                <div className="free-website"><b>🎁 Free website</b> — normally ₹499/mo, included.</div>
              ) : null}
              <a className="price-cta" href="#get-quote">{t.cta} <span>↗</span></a>
            </article>
          ))}
        </div>

        <p className="price-fineprint">Prices in INR. GST extra where applicable. Setup is a one-time charge; the monthly fee is billed thereafter.</p>

        <div className="offer-grid">
          <article className="offer-card">
            <span className="offer-emoji">🎁</span>
            <h3>Launch Offer</h3>
            <p>Get your café online for just <b>₹499 / month</b>.</p>
            <p className="offer-or">— or —</p>
            <p>Take <b>QR Ordering</b> and we&apos;ll build your professional website <b>free</b>.</p>
            <div className="offer-highlight">
              ₹999/mo QR Ordering <span className="strike">+ ₹499/mo website</span>
            </div>
          </article>
          <article className="enterprise-card">
            <span className="offer-emoji">🟣</span>
            <h3>Custom &amp; Enterprise</h3>
            <p>Need something entirely different? We build custom quotations for large-scale operations.</p>
            <p className="enterprise-perfect-label"><b>Perfect for</b></p>
            <ul className="enterprise-uses">
              {enterpriseUses.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
            <a className="text-link enterprise-link" href="#get-quote">Let&apos;s talk <span>↗</span></a>
          </article>
        </div>
      </section>

      <section className="section quote-cta" id="get-quote">
        <div className="quote-cta-inner">
          <div className="section-label">Get a quotation</div>
          <h2>Ready to get your café online?</h2>
          <p>
            Tell us about your café or restaurant and we&apos;ll put together a plan and a
            transparent quote — usually within a day.
          </p>
          <div className="quote-cta-phone">
            <span>Call or WhatsApp</span>
            <a href={TEL_URL}>{PHONE_DISPLAY}</a>
          </div>
          <div className="quote-cta-actions">
            <a className="button button-primary" href={TEL_URL}>Call us <span>↗</span></a>
            <a className="button button-ghost" href={WA_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp us <span>↗</span>
            </a>
          </div>
          <p className="quote-cta-note">
            Prefer a form? <Link href="/#quote">Request a detailed quote →</Link>
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
