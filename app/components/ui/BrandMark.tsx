/**
 * The CoreNode logo mark — the node-graph glyph from the existing website,
 * redrawn as SVG so it scales cleanly and inherits its colour from context.
 */
export default function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className ?? "brand__mark"}
      fill="none"
      focusable="false"
      viewBox="0 0 32 28"
      width="30"
      height="26"
    >
      <g opacity="0.45" stroke="currentColor" strokeWidth="1">
        <path d="M24 6.4 23 14" />
        <path d="M10 8.4 6 13.6" />
        <path d="M10.4 8.6 22.6 13.8" />
        <path d="M10.6 9 14.6 20.6" />
        <path d="M22.8 14.4 15.4 20.6" />
      </g>
      <circle cx="24" cy="6" r="4.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="13.5" r="4.4" stroke="currentColor" strokeWidth="1.6" />
      <g fill="currentColor">
        <circle cx="15" cy="22" r="2.1" />
        <circle cx="23" cy="14" r="2.1" />
        <circle cx="10" cy="8.6" r="2.1" />
      </g>
    </svg>
  );
}
