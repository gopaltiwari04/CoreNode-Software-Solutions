import type { Reason, Step } from "@/app/types/content";

/** The existing "How we work" workflow from the current homepage. */
export const STEPS: Step[] = [
  {
    number: "01",
    title: "Understand",
    description: "We learn the business before we write a line of code.",
    icon: "target",
  },
  {
    number: "02",
    title: "Design",
    description: "We shape the architecture and the experience together.",
    icon: "layout",
  },
  {
    number: "03",
    title: "Build",
    description: "Modern tools and AI-assisted workflows accelerate implementation.",
    icon: "code",
  },
  {
    number: "04",
    title: "Test",
    description: "Functionality, security, performance and reliability are checked.",
    icon: "shield",
  },
  {
    number: "05",
    title: "Deploy",
    description: "Your product moves from our environment into the real world.",
    icon: "cloud",
  },
  {
    number: "06",
    title: "Support",
    description: "We stay available for maintenance, iteration and growth.",
    icon: "refresh",
  },
];

/**
 * "Why CoreNode" points. Each one restates a claim that already exists
 * on the current website — nothing new is asserted here.
 */
export const REASONS: Reason[] = [
  {
    title: "Customized to your business",
    description:
      "Custom platforms, portals and dashboards built around your workflow — not a template you have to bend your business to fit.",
    icon: "target",
  },
  {
    title: "Modern, responsive by default",
    description:
      "Mobile responsive with SSL, built on React and Next.js so the experience holds up on every screen your customers use.",
    icon: "device",
  },
  {
    title: "Practical technology",
    description:
      "We pick the right technology for the real problem — frontend, backend, data, cloud or AI — and design around your requirements.",
    icon: "cpu",
  },
  {
    title: "Clear communication",
    description:
      "Work is shaped together with you: requirements, architecture and design discussed before a single line of code is written.",
    icon: "chat",
  },
  {
    title: "Lean, senior teams",
    description:
      "Senior engineering and an AI-assisted workflow keep the team lean, the cycles shorter and the overhead lower.",
    icon: "users",
  },
  {
    title: "Affordable by design",
    description:
      "Website development from ₹499 a month, with no lock-in and no hidden costs on published plans.",
    icon: "chart",
  },
];

/** The old-model vs CoreNode-model comparison from the current homepage. */
export const OLD_MODEL = {
  kicker: "The old model",
  title: "Large teams",
  points: ["Management layers", "Longer cycles", "Higher overhead"],
};

export const CORENODE_MODEL = {
  kicker: "The CoreNode model",
  title: "Expert engineers",
  points: ["AI-assisted development", "Reusable infrastructure"],
  outcome: "Faster delivery + lower cost",
};
