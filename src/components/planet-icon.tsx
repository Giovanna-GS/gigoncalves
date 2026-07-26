export function PlanetIcon({ className = "", size = 36 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="16" fill="currentColor" />
      <ellipse
        cx="32"
        cy="32"
        rx="28"
        ry="8"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.8"
      />
      <circle cx="26" cy="28" r="3" fill="oklch(0.98 0 0)" opacity="0.15" />
      <circle cx="36" cy="36" r="2" fill="oklch(0.98 0 0)" opacity="0.1" />
    </svg>
  );
}
