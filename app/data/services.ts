import type { Capability, Service } from "@/app/types/content";

/**
 * The six services currently offered on the CoreNode website.
 * Titles, descriptions and benefits are drawn from the existing site content
 * (homepage "What we build" + the café product's stated feature set).
 */
export const SERVICES: Service[] = [
  {
    id: "business-websites",
    number: "01",
    title: "Business websites",
    tagline: "A professional website that turns attention into action",
    description:
      "High-performance sites designed to turn attention into action — built to look credible on every screen and make it easy for customers to reach you.",
    benefits: [
      "Professional design tailored to your business",
      "Mobile responsive with SSL security",
      "Content, photos and price sections",
      "Contact and WhatsApp buttons built in",
      "Fast-loading, performance-focused pages",
    ],
    visual: "website",
    icon: "globe",
    accent: "teal",
  },
  {
    id: "web-applications",
    number: "02",
    title: "Web applications",
    tagline: "Portals and dashboards shaped around your workflow",
    description:
      "Custom platforms, portals and dashboards built around your workflow — so your team works in one place instead of across a dozen browser tabs.",
    benefits: [
      "Dashboards and portals shaped around your workflow",
      "Customer accounts and request flows",
      "Table, menu and record management",
      "REST APIs with secure authentication",
      "Built on React, Node.js and PostgreSQL",
    ],
    visual: "webapp",
    icon: "layout",
    accent: "blue",
  },
  {
    id: "business-software",
    number: "03",
    title: "Business software",
    tagline: "Replace spreadsheets with software made for you",
    description:
      "Replace spreadsheets and manual processes with something made for you — inventory, billing, multi-branch operations and the reports you actually need.",
    benefits: [
      "Replace spreadsheets and manual processes",
      "Inventory and records management",
      "Multi-branch and multi-user ready",
      "Reporting that reflects your operations",
      "Integrations with tools you already use",
    ],
    visual: "software",
    icon: "cube",
    accent: "violet",
  },
  {
    id: "mobile-applications",
    number: "04",
    title: "Mobile applications",
    tagline: "Your business in your customer's pocket",
    description:
      "Modern iOS and Android experiences for customers and teams — connected to the same backend that runs the rest of your business.",
    benefits: [
      "Modern iOS and Android experiences",
      "Customer apps for ordering and engagement",
      "Internal apps for staff and field teams",
      "Notifications and real-time updates",
      "Connected to your existing backend",
    ],
    visual: "mobile",
    icon: "device",
    accent: "green",
  },
  {
    id: "ai-solutions",
    number: "05",
    title: "AI solutions",
    tagline: "Intelligent automation that does real work",
    description:
      "Intelligent automation, document processing and assistants that do real work — answering customers, reading documents and taking repetitive tasks off your team.",
    benefits: [
      "AI chatbot and support assistant",
      "Document processing and data extraction",
      "Answers grounded in your own content",
      "Automation for repetitive workflows",
      "Built with modern LLM tooling",
    ],
    visual: "ai",
    icon: "spark",
    accent: "warm",
  },
  {
    id: "maintenance-support",
    number: "06",
    title: "Maintenance & support",
    tagline: "We stay available after launch",
    description:
      "Reliable improvements, monitoring and support after launch — because a product that ships is the beginning of the work, not the end of it.",
    benefits: [
      "Ongoing improvements and feature updates",
      "Monitoring and quick issue resolution",
      "Priority support routing",
      "Security and dependency updates",
      "No lock-in — the product is yours",
    ],
    visual: "support",
    icon: "refresh",
    accent: "teal",
  },
];

/** Technology stack, taken from the existing "Our capabilities" section. */
export const CAPABILITIES: Capability[] = [
  { label: "Frontend", detail: "React · Next.js · responsive systems", icon: "code" },
  { label: "Backend", detail: "Node.js · Python · APIs · authentication", icon: "cpu" },
  { label: "Data & cloud", detail: "PostgreSQL · MongoDB · AWS · Docker", icon: "database" },
  { label: "AI & automation", detail: "LLMs · RAG · intelligent workflows", icon: "spark" },
];

/** Short technology chips rendered in the hero-adjacent strip. */
export const TECH_STACK = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "LLMs",
  "RAG",
];
