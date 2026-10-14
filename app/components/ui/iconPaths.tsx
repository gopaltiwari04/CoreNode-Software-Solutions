import type { ReactNode } from "react";
import type { IconName } from "@/app/types/content";

/**
 * Stroke-based 24x24 icon set. Every icon inherits `currentColor` so it can be
 * recoloured by the surrounding context (accent tokens, dark bands, buttons).
 */
export const ICON_PATHS: Record<IconName, ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 3.2 2.6 14.8 0 18-2.6-3.2-2.6-14.8 0-18Z" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="3.5" width="18" height="17" rx="2.5" />
      <path d="M3 9.5h18" />
      <path d="M9.5 20.5v-11" />
    </>
  ),
  cube: (
    <>
      <path d="M12 2.6 20 7v10l-8 4.4L4 17V7z" />
      <path d="M4 7l8 4.4L20 7" />
      <path d="M12 11.4v10" />
    </>
  ),
  device: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.6" />
      <path d="M10.8 18.6h2.4" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4.4" />
      <path d="M12 16.6V21" />
      <path d="M3 12h4.4" />
      <path d="M16.6 12H21" />
      <path d="M6.2 6.2l3.1 3.1" />
      <path d="M14.7 14.7l3.1 3.1" />
      <path d="M17.8 6.2l-3.1 3.1" />
      <path d="M9.3 14.7l-3.1 3.1" />
    </>
  ),
  refresh: (
    <>
      <path d="M20.4 12a8.4 8.4 0 1 1-2.6-6.1" />
      <path d="M20.4 4.4v5.4h-5.4" />
    </>
  ),
  check: <path d="M4.8 12.6l4.9 4.9L19.4 6.8" />,
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8.6 7H17v8.4" />
    </>
  ),
  arrowDown: (
    <>
      <path d="M12 4.5v15" />
      <path d="M6 13.5l6 6 6-6" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 19.5v-15" />
      <path d="M6 10.5l6-6 6 6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v6c0 4.4-3.1 8-7.5 9.3C7.6 20 4.5 16.4 4.5 12V6z" />
      <path d="M9 12.2l2.2 2.2 4.3-4.6" />
    </>
  ),
  users: (
    <>
      <circle cx="9.2" cy="8.4" r="3.3" />
      <path d="M3.4 20.2a5.8 5.8 0 0 1 11.6 0" />
      <path d="M16.4 5.6a3.3 3.3 0 0 1 0 5.6" />
      <path d="M17.6 14.8a5.8 5.8 0 0 1 3 4.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.4V12l3.1 2" />
    </>
  ),
  chat: (
    <>
      <path d="M20.4 5.6H3.6a1.1 1.1 0 0 0-1.1 1.1v8.8a1.1 1.1 0 0 0 1.1 1.1h3.3v3.9l5-3.9h8.5a1.1 1.1 0 0 0 1.1-1.1V6.7a1.1 1.1 0 0 0-1.1-1.1Z" />
      <path d="M7.6 10.6h8.8" />
      <path d="M7.6 13.6h5.6" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20h16" />
      <path d="M7.6 20V12.4" />
      <path d="M12 20V6.6" />
      <path d="M16.4 20v-5.2" />
    </>
  ),
  code: (
    <>
      <path d="M9.2 7.4 4.6 12l4.6 4.6" />
      <path d="M14.8 7.4 19.4 12l-4.6 4.6" />
      <path d="M13.2 5.4l-2.4 13.2" />
    </>
  ),
  wrench: (
    <>
      <path d="M4 7.5h16" />
      <path d="M4 12h16" />
      <path d="M4 16.5h16" />
      <circle cx="9.4" cy="7.5" r="2.1" />
      <circle cx="15" cy="12" r="2.1" />
      <circle cx="7.6" cy="16.5" r="2.1" />
    </>
  ),
  bolt: <path d="M13.6 2.6 5.2 13.4h5.6L9.8 21.4l8.9-11.2h-5.6z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <circle cx="12" cy="12" r="4.4" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  mail: (
    <>
      <rect x="2.8" y="5.4" width="18.4" height="13.2" rx="2.2" />
      <path d="M3.6 7.2 12 13l8.4-5.8" />
    </>
  ),
  phone: (
    <path d="M6.4 3.4h3.1l1.5 4-2 1.4a11.4 11.4 0 0 0 5.8 5.8l1.4-2 4 1.5v3.1a2.1 2.1 0 0 1-2.3 2.1A16.7 16.7 0 0 1 4.3 5.7a2.1 2.1 0 0 1 2.1-2.3Z" />
  ),
  whatsapp: (
    <>
      <path d="M20.6 11.7a8.6 8.6 0 0 1-12.8 7.5L3.4 20.6l1.4-4.4a8.6 8.6 0 1 1 15.8-4.5Z" />
      <path d="M9.1 9.3c.4 2.5 2.4 4.5 4.9 4.9l1-1.4 1.9.9v1.4c0 .5-.4.9-.9.9-4-.2-7.2-3.4-7.4-7.4 0-.5.4-.9.9-.9h1.4l.9 1.9z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.2s7-6.1 7-11.2a7 7 0 1 0-14 0c0 5.1 7 11.2 7 11.2Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6.2 6.2 17.8 17.8" />
      <path d="M17.8 6.2 6.2 17.8" />
    </>
  ),
  coffee: (
    <>
      <path d="M4.6 8.4h11v6.2a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z" />
      <path d="M15.6 9.8h1.6a2.6 2.6 0 0 1 0 5.2h-1.6" />
      <path d="M8.4 5.9V3.6" />
      <path d="M12 5.9V3.6" />
    </>
  ),
  bag: (
    <>
      <path d="M5.6 8h12.8l1 12.2H4.6z" />
      <path d="M9 8V6.4a3 3 0 0 1 6 0V8" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6.4" cy="6.6" r="2.4" />
      <circle cx="6.4" cy="17.4" r="2.4" />
      <path d="M8.4 7.8 19 17.4" />
      <path d="M8.4 16.2 19 6.6" />
    </>
  ),
  bed: (
    <>
      <path d="M3 19.4V5.8" />
      <path d="M3 14.4h12.6a5.4 5.4 0 0 1 5.4 5" />
      <path d="M3 19.4h18" />
      <path d="M7.4 11.4h4.2" />
    </>
  ),
  store: (
    <>
      <path d="M4 9.6 5.6 4.4h12.8L20 9.6" />
      <path d="M5.2 9.6v9.8h13.6V9.6" />
      <path d="M9.6 19.4v-5.2h4.8v5.2" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3.4 20.4 7.8 12 12.2 3.6 7.8z" />
      <path d="M4.6 12.2 12 16.1l7.4-3.9" />
      <path d="M4.6 16.4 12 20.3l7.4-3.9" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.4" ry="3" />
      <path d="M4.6 6v12c0 1.7 3.3 3 7.4 3s7.4-1.3 7.4-3V6" />
      <path d="M4.6 12c0 1.7 3.3 3 7.4 3s7.4-1.3 7.4-3" />
    </>
  ),
  cloud: (
    <path d="M7.4 18.6h9.4a3.9 3.9 0 0 0 .4-7.8 5.6 5.6 0 0 0-10.8 1.3 3.4 3.4 0 0 0 1 6.5Z" />
  ),
  cpu: (
    <>
      <rect x="4.4" y="4.4" width="15.2" height="15.2" rx="3" />
      <rect x="9.2" y="9.2" width="5.6" height="5.6" rx="1.2" />
      <path d="M12 2.2v2.2" />
      <path d="M12 19.6v2.2" />
      <path d="M2.2 12h2.2" />
      <path d="M19.6 12h2.2" />
    </>
  ),
};
