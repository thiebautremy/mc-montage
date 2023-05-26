import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MC Montage",
    address: {
      "@type": "PostalAddress",
      streetAddress: "16 rue de Chenevières  ",
      addressLocality: "Bénaménil",
      addressRegion: "",
      postalCode: "54450 ",
    },
    email: "mcmontage54450@gmail.com",
    telePhone: "06 81 21 38 73",
    url: "https://mcmontage.fr",
    openingHours: "Mo,Tu,We,Th,Fr 20:00-20:00",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "20:00",
        closes: "20:00",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "48.566720",
      longitude: "6.671920",
    },
  };
  return (
    <Html lang="fr">
      <Head>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
        >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KFRFT38');`}</Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="eeQg79ZCADYfiSvVPECxOxDKIe_5fK-nw188Qy0XW5M"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
          integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
          crossOrigin=""
          defer
        ></script>

        <meta name="robots" content="index" />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KFRFT38" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
