import apcBadge from "@assets/branding/apc_certified_celebrant.png";

const sizeClass = {
  sm: "h-14 w-14",
  md: "h-20 w-20",
  lg: "h-28 w-28",
} as const;

export type ApcCertifiedBadgeSize = keyof typeof sizeClass;

const sizePixels: Record<ApcCertifiedBadgeSize, number> = {
  sm: 56,
  md: 80,
  lg: 112,
};

export function ApcCertifiedBadge({
  size = "md",
  className = "",
}: {
  size?: ApcCertifiedBadgeSize;
  className?: string;
}) {
  const px = sizePixels[size];
  return (
    <img
      src={apcBadge}
      alt="APC Certified Celebrant — Association of Professional Celebrants"
      width={px}
      height={px}
      className={`${sizeClass[size]} object-contain ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}
