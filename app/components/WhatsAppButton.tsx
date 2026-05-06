type Props = {
  phone?: string;
  message?: string;
  className?: string;
  label?: string;
  floating?: boolean;
};

export const WHATSAPP_PHONE_PLACEHOLDER = "+41 XX XXX XX XX";

export function buildWhatsAppLink(phone: string, message?: string) {
  const cleaned = phone.replace(/[^\d]/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${cleaned}${text}`;
}

export default function WhatsAppButton({
  phone = WHATSAPP_PHONE_PLACEHOLDER,
  message = "Hallo PrimaMax, ich hätte gerne eine Offerte für …",
  className = "",
  label = "WhatsApp",
  floating = false,
}: Props) {
  const href = buildWhatsAppLink(phone, message);

  if (floating) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp – jetzt schreiben"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg ring-1 ring-black/5 hover:scale-105 transition"
      >
        <WhatsAppIcon />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${className}`}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M19.05 4.91A10 10 0 0 0 4.1 18.36L3 22l3.74-1.07A10 10 0 1 0 19.05 4.9zM12 20.13a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-2.22.64.65-2.16-.2-.32A8.13 8.13 0 1 1 12 20.13zm4.46-6.1c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.96-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.21-1.43-1.36-1.67-.14-.24-.02-.36.1-.48.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.59 4.1 3.63 2.41 1.04 2.41.69 2.85.65.44-.04 1.44-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
    </svg>
  );
}
