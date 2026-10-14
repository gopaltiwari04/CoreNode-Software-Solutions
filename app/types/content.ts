export type IconName =
  | "globe"
  | "layout"
  | "cube"
  | "device"
  | "spark"
  | "refresh"
  | "check"
  | "arrowRight"
  | "arrowUpRight"
  | "arrowDown"
  | "arrowUp"
  | "shield"
  | "users"
  | "clock"
  | "chat"
  | "chart"
  | "code"
  | "wrench"
  | "bolt"
  | "target"
  | "mail"
  | "phone"
  | "whatsapp"
  | "pin"
  | "menu"
  | "close"
  | "coffee"
  | "bag"
  | "scissors"
  | "bed"
  | "store"
  | "layers"
  | "database"
  | "cloud"
  | "cpu";

export type Accent = "teal" | "green" | "blue" | "violet" | "warm";

export type ServiceVisual = "website" | "webapp" | "software" | "mobile" | "ai" | "support";

export interface Service {
  /** Anchor id used on the services page and homepage. */
  id: string;
  /** Display number, e.g. "01". */
  number: string;
  title: string;
  /** One-line value proposition. */
  tagline: string;
  /** Existing description from the current website. */
  description: string;
  /** Benefits, limited to what the current offering already states. */
  benefits: string[];
  visual: ServiceVisual;
  icon: IconName;
  accent: Accent;
}

export interface Capability {
  label: string;
  detail: string;
  icon: IconName;
}

export interface Reason {
  title: string;
  description: string;
  icon: IconName;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface Industry {
  id: string;
  name: string;
  summary: string;
  useCase: string;
  icon: IconName;
  status: "live" | "soon";
}

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  url: string;
  statusLabel: string;
  features: string[];
}

export interface PricingFeature {
  label: string;
  detail?: string;
  isNew?: boolean;
}

export interface PricingTier {
  key: string;
  name: string;
  accent: "green" | "blue" | "orange";
  setup: string;
  monthly: string;
  tagline: string;
  inherits: string | null;
  features: PricingFeature[];
  popular?: boolean;
  dark?: boolean;
  freeWebsite?: boolean;
  cta: string;
}
