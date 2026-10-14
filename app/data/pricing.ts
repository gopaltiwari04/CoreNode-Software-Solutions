import type { PricingTier } from "@/app/types/content";

/**
 * Pricing exactly as published on the current CoreNode services page.
 * Nothing here may be changed silently — prices, scope and inclusions
 * are reproduced verbatim from the existing site.
 */
export const PRICING_TIERS: PricingTier[] = [
  {
    key: "digital",
    name: "Digital Presence",
    accent: "green",
    setup: "₹999",
    monthly: "₹499",
    tagline: "Get your café online for ₹499/month.",
    inherits: null,
    features: [
      { label: "Professional café website" },
      { label: "Digital menu & categories" },
      { label: "Photos & prices" },
      { label: "About section & location" },
      { label: "Contact / WhatsApp button" },
      { label: "Mobile responsive & SSL" },
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
      { label: "Table-specific QR ordering" },
      { label: "Customer cart & placement" },
      { label: "Live kitchen / staff dashboard" },
      { label: "Order status tracking" },
      { label: "Table & menu management" },
      { label: "Basic sales dashboard" },
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
      { label: "Payments", detail: "UPI / online integration, receipts" },
      { label: "Customer", detail: "Loyalty system, coupons, database" },
      { label: "Analytics", detail: "Advanced sales, daily reports" },
      { label: "Staff", detail: "Permissions, item availability" },
      { label: "AI Chatbot", detail: "24/7 ordering & support assistant", isNew: true },
      { label: "Support", detail: "Priority support routing" },
    ],
    cta: "Go Business Pro",
  },
];

export const PRICING_FINEPRINT =
  "Prices in INR. GST extra where applicable. Setup is a one-time charge; the monthly fee is billed thereafter.";

/** The existing Launch Offer, reproduced exactly. */
export const LAUNCH_OFFER = {
  headline: "Get your café online for just ₹499 / month.",
  alternative: "Take QR Ordering and we'll build your professional website free.",
  highlight: "₹999/mo QR Ordering",
  highlightStrike: "+ ₹499/mo website",
  websiteNote: "Free website — normally ₹499/mo, included with Smart Ordering.",
};

/** Existing café capabilities listed on the services page. */
export const CAFE_FEATURES = [
  "QR-code table ordering",
  "Live kitchen / staff dashboard",
  "Order status tracking",
  "UPI & online payments",
  "Sales analytics & reports",
  "Loyalty, coupons & AI chatbot",
];

/** Custom & Enterprise scope, exactly as listed on the current site. */
export const ENTERPRISE_USES = [
  "POS integration",
  "Inventory management",
  "Multiple branches",
  "Kitchen display systems (KDS)",
  "Delivery management",
  "WhatsApp automation",
  "Custom apps",
];
