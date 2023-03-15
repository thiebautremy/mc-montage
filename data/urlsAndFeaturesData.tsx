const urlsAndFeaturesData = [
  { label: "home", urls: ["/"] },
  {
    label: "stockage",
    urls: ["rayonnage-mobile-archives", "rayonnage-metallique-industriel"],
    features: [
      {
        id: 0,
        title: "Rayonnage mobile d'archives",
        slug: "rayonnage-mobile-archives",
        text: "Système de rayonnages montés sur <strong>bases mobiles</strong> se déplaçant sur rails, Le coulissement des armoires peut se faire selon deux types de mécanismes d'actionnement : <span>mécanique</span> ou <span>électrique</span> . Double la capacité d’entreposage tout en économisant l’espace",
        imgSrc: "rayonnage-mobile.webp",
        imgAlt: "Rayonnage mobile",
        imgTitle: "Rayonnage mobile manuel",
      },
      {
        id: 1,
        title: "Rayonnage mobile d'archives",
        slug: "rayonnage-mobile-archives",
        text: "Sécurité totale du matériel archivé. Système compact d’entreposage et d’archivage conçu pour une répartition et un rangement parfait.",
        imgSrc: "rayonnage-mobile.webp",
        imgAlt: "Rayonnage mobile",
        imgTitle: "Rayonnage mobile manuel",
      },
    ],
  },
  {
    label: "agencement",
    urls: ["bureau", "mezzanine-plateforme", "cloison-faux-plafond"],
  },
  {
    label: "services",
    urls: ["montage-demontage", "sav-maintenance", "devis"],
  },
  {
    label: "contact",
    urls: ["contact"],
  },
  {
    label: "mentions-legales",
    urls: ["/mentions-legales"],
  },
];

export default urlsAndFeaturesData;
