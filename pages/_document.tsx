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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quels types de rayonnages industriels installez-vous en Meurthe-et-Moselle ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous proposons des rayonnages métalliques, racks à palettes, rayonnages d’archives, étagères sur rails, mezzanines et cloisons, adaptés aux besoins des entreprises locales.",
        },
      },
      {
        "@type": "Question",
        name: "Comment choisir son rayonnage industriel ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vous pourrez choisir le rayonnage industriel qui répond le mieux à vos besoins en prenant en compte les critères suivants : Le type de marchandises à stocker, la charge maximale à supporter, la dimension des marchandises, l'espace disponible. Dans tous les cas, il est préférable de demander conseil à un professionnel qui saura vous guider pour trouver la meilleure solution pour vos besoin.",
        },
      },
      {
        "@type": "Question",
        name: "Quels sont les différents types de rayonnage industriel ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les rayonnages industriels sont classés en fonction de la charge qu'ils peuvent supporter, de la nature des marchandises à stocker et de leur mode de construction.",
        },
      },
      {
        "@type": "Question",
        name: "Quel est le prix d'un montage de rayonnage industriel ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le prix d'un montage de rayonnage industriel varie en fonction de plusieurs facteurs, notamment : le type de rayonnage, la taille et la complexité de l'installation, la localisation du site, les services supplémentaires requis. Pour obtenir un devis précis, il est recommandé de contacter directement notre entreprise avec les détails spécifiques de votre projet. En général, le prix du montage d'un rayonnage industriel oscille entre 50 et 150 € par mètre linéaire. Par exemple, le montage d'un rayonnage à palettes de 10 mètres de long et de 2 mètres de haut coûterait environ 1 000 €.",
        },
      },
    ],
  };

  return (
    <Html lang="fr">
      <Head>
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
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
