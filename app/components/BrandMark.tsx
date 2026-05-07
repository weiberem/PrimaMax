"use client";

type Variant = "light" | "dark";

type Props = {
  variant?: Variant;
  className?: string;
  alt?: string;
};

/**
 * BrandMark – zeigt das PrimaMax-Logo.
 *
 * Wenn unter /public/logo-light.png|svg bzw. /public/logo-dark.png|svg ein Logo
 * vorhanden ist, wird es verwendet. Fällt das Bild aus (404), greift ein
 * Text-Fallback mit Initial + "PrimaMax".
 */
export default function BrandMark({
  variant = "light",
  className = "",
  alt = "PrimaMax",
}: Props) {
  // We try .svg first via CSS-loaded background fallback; <img> with onError handles missing files
  const src = variant === "dark" ? "/logo-dark.svg" : "/logo-light.svg";
  const fallbackSrc = variant === "dark" ? "/logo-dark.png" : "/logo-light.png";

  return (
    <span className={`inline-flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="block h-full w-auto"
        onError={(e) => {
          const img = e.currentTarget;
          if (img.dataset.fallbackTried !== "1") {
            img.dataset.fallbackTried = "1";
            img.src = fallbackSrc;
          } else {
            img.style.display = "none";
            const sib = img.nextElementSibling as HTMLElement | null;
            if (sib) sib.style.display = "inline-flex";
          }
        }}
      />
      <span
        style={{ display: "none" }}
        className={`items-center gap-2 ${
          variant === "dark" ? "text-white" : "text-primary-700"
        }`}
      >
        <span
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full font-bold ${
            variant === "dark"
              ? "bg-white text-primary-700"
              : "bg-primary-600 text-white"
          }`}
        >
          P
        </span>
        <span className="text-lg font-semibold tracking-tight">PrimaMax</span>
      </span>
    </span>
  );
}
