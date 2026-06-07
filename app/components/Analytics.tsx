import Script from "next/script";

/**
 * Lädt Google Tag Manager nur, wenn NEXT_PUBLIC_GTM_ID gesetzt ist.
 * GTM ist der Container für Google Ads Conversion-Tracking, GA4 etc.
 *
 * Aktivierung:
 * 1. Vercel → Settings → Environment Variables: NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
 * 2. Redeploy
 */
export function GoogleTagManager() {
  const id = process.env.NEXT_PUBLIC_GTM_ID;
  if (!id) return null;
  return (
    <>
      <Script id="gtm-script" strategy="afterInteractive">
        {`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');
        `}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${id}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
