import type { CSSProperties } from "react";
import type { IconName } from "@/app/types/content";
import { ICON_PATHS } from "@/app/components/ui/iconPaths";

interface IconProps {
  name: IconName;
  /** Rendered size in pixels. */
  size?: number;
  /** Stroke weight; thicker strokes read better at small sizes. */
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Renders a single stroke icon from the shared icon set.
 * Icons are decorative — always pair them with a visible text label or an
 * `aria-label` on the interactive element around them.
 */
export default function Icon({
  name,
  size = 20,
  strokeWidth = 1.7,
  className,
  style,
}: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      style={style}
      viewBox="0 0 24 24"
      width={size}
    >
      {ICON_PATHS[name]}
    </svg>
  );
}
