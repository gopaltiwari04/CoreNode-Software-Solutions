import type { Project } from "@/app/types/content";
import { DEMO_CAFE_URL } from "@/app/data/company";

/**
 * Work and demonstrations. The café ordering system is the only project with
 * a public URL today; everything else is clearly labelled as in development.
 */
export const PROJECTS: Project[] = [
  {
    id: "cafe-ordering",
    name: "Café Ordering System",
    category: "Product · Cafés & Restaurants",
    description:
      "Scan, order and pay from the table. Customers order from a QR code, the kitchen sees a live dashboard and the owner sees sales — the launch-ready platform CoreNode offers cafés today.",
    url: DEMO_CAFE_URL,
    statusLabel: "Live demo",
    features: [
      "Table-specific QR ordering",
      "Customer cart & placement",
      "Live kitchen / staff dashboard",
      "Order status tracking",
      "UPI & online payments",
      "Sales analytics & reports",
    ],
  },
  {
    id: "retail-platform",
    name: "Retail & Kirana Platform",
    category: "Product · Retail",
    description:
      "Catalogue, billing and inventory in one place, built from the same ordering foundation that runs the café platform.",
    url: "",
    statusLabel: "Coming soon",
    features: ["Online catalogue", "Counter billing", "Inventory counts"],
  },
  {
    id: "salon-platform",
    name: "Salon & Clinic Bookings",
    category: "Product · Salons & Clinics",
    description:
      "Self-service appointment booking with client records, visit history and reminders.",
    url: "",
    statusLabel: "Coming soon",
    features: ["Slot bookings", "Client records", "Reminders"],
  },
  {
    id: "corenode-site",
    name: "CoreNode Website",
    category: "Marketing site · This website",
    description:
      "The site you are reading now — built with Next.js, server components and a hand-written design system.",
    url: "/",
    statusLabel: "You are here",
    features: ["Next.js App Router", "Custom design system", "Fully responsive"],
  },
];

export const FEATURED_PROJECT = PROJECTS[0];
export const UPCOMING_PROJECTS = PROJECTS.slice(1);
