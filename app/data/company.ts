import type { IconName } from "@/app/types/content";

/**
 * Single source of truth for CoreNode's existing business details.
 * Every value here is taken from the current live website.
 */

export const COMPANY_NAME = "CoreNode Software Solutions";
export const COMPANY_SHORT = "CoreNode";
export const COMPANY_TAGLINE = "Software. Engineered intelligently.";
export const COMPANY_DESCRIPTION =
  "CoreNode builds websites, applications, automation and AI-powered software with modern engineering and lean teams.";

export const EMAIL = "hello@corenode.in";
export const PHONE_DISPLAY = "+91 70117 75286";
export const PHONE_TEL = "tel:+917011775286";
export const WHATSAPP_URL = "https://wa.me/917011775286";
export const LOCATION = "India / Remote";

export const DEMO_CAFE_URL = "https://cafe-ordering-system-nine.vercel.app/";

export const MAILTO_URL = `mailto:${EMAIL}`;

export function whatsappWithMessage(message: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export function mailtoWithMessage(subject: string, body: string): string {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Products", href: "/#products" },
  { label: "Why CoreNode", href: "/#why" },
  { label: "Our Work", href: "/#work" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export const NAV_CTA_LABEL = "Get a Free Consultation";
export const NAV_CTA_HREF = "/#contact";

/** Primary navigation used by the mobile drawer, grouped for scannability. */
export const NAV_GROUPS: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Solutions", href: "/#solutions" },
      { label: "Products", href: "/#products" },
      { label: "Our Work", href: "/#work" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why CoreNode", href: "/#why" },
      { label: "About Us", href: "/about" },
      { label: "Services & Pricing", href: "/services" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

export interface ContactMethod {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export const CONTACT_METHODS: ContactMethod[] = [
  { icon: "mail", label: "Email", value: EMAIL, href: MAILTO_URL },
  { icon: "phone", label: "Phone", value: PHONE_DISPLAY, href: PHONE_TEL },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: "Chat with us",
    href: WHATSAPP_URL,
    external: true,
  },
  { icon: "pin", label: "Location", value: LOCATION, href: "/#contact" },
];

export const FOOTER_LINKS: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Why CoreNode", href: "/#why" },
      { label: "Our Work", href: "/#work" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Business websites", href: "/#solutions" },
      { label: "Web applications", href: "/#solutions" },
      { label: "Business software", href: "/#solutions" },
      { label: "Mobile applications", href: "/#solutions" },
      { label: "AI solutions", href: "/#solutions" },
      { label: "Maintenance & support", href: "/#solutions" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Café ordering system", href: "/services" },
      { label: "Live demo", href: DEMO_CAFE_URL },
      { label: "Pricing & plans", href: "/services#pricing" },
    ],
  },
];
