import type { Industry, IconName } from "@/app/types/content";

/**
 * Industry solutions exactly as listed on the current services page.
 * Statuses are preserved — only the café platform is live today.
 */
export const INDUSTRIES: Industry[] = [
  {
    id: "cafes",
    name: "Cafés & Restaurants",
    summary: "QR ordering, kitchen dashboard, payments & analytics.",
    useCase:
      "Take orders from the table, run the kitchen from a live dashboard and see what actually sells — with payments and loyalty built in.",
    icon: "coffee",
    status: "live",
  },
  {
    id: "retail",
    name: "Retail & Kirana",
    summary: "Catalogue, billing & inventory.",
    useCase:
      "Put your catalogue online, bill faster at the counter and keep inventory counts in one place instead of a notebook.",
    icon: "bag",
    status: "soon",
  },
  {
    id: "salons",
    name: "Salons & Clinics",
    summary: "Appointments & client records.",
    useCase:
      "Let customers book slots themselves and keep client records, visit history and reminders in a single system.",
    icon: "scissors",
    status: "soon",
  },
  {
    id: "hotels",
    name: "Hotels & Stays",
    summary: "Room service & guest requests.",
    useCase:
      "Give guests a QR code in the room for room service, requests and information, with every request tracked until it is closed.",
    icon: "bed",
    status: "soon",
  },
];

/**
 * Additional local-business use cases. The current site states that CoreNode
 * builds for any industry, so these describe what could be built — they are
 * not presented as existing products or existing clients.
 */
export interface UseCase {
  name: string;
  detail: string;
  icon: IconName;
}

export const USE_CASES: UseCase[] = [
  {
    name: "Gyms & fitness studios",
    detail: "Memberships, class schedules and renewal reminders.",
    icon: "bolt",
  },
  {
    name: "Libraries & coaching",
    detail: "Catalogue, enrolment and fee tracking.",
    icon: "layers",
  },
  {
    name: "Bakeries & cloud kitchens",
    detail: "Pre-orders, delivery slots and repeat customers.",
    icon: "store",
  },
  {
    name: "Local service businesses",
    detail: "Enquiry forms, bookings and follow-ups in one place.",
    icon: "users",
  },
];
