export function StarIcon({ className = "", size = 36 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 4-point star */}
      <path d="M32 2 L37 24 L62 32 L37 40 L32 62 L27 40 L2 32 L27 24 Z" fill="currentColor" />
      {/* inner glow */}
      <path
        d="M32 14 L34 26 L46 32 L34 38 L32 50 L30 38 L18 32 L30 26 Z"
        fill="oklch(0.98 0 0)"
        opacity="0.85"
      />
      {/* center dot */}
      <circle cx="32" cy="32" r="3" fill="currentColor" opacity="0.9" />
    </svg>
  );
}
