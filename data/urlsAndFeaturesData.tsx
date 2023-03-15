const urlsAndFeaturesData = [
  { label: "home", urls: ["/"] },
  {
    label: "stockage",
    urls: ["rayonnage-mobile-archives", "rayonnage-metallique-industriel"],
    featureIntro: [
      {
        slug: "rayonnage-mobile-archives",
        title: "Rayonnage mobile d'archives",
        description:
          "<span>Prévu pour différents domaines</span> : rayonnage de bibliothèque,rayonnages pour commerces, rayonnage pour les soins de santé et fournitures médicales, rayonnage d’entrepôt, rayonnage de musée et conservation, rayonnage d’archives en tout genre …",
      },
      {
        slug: "rayonnage-metallique-industriel",
        title: "Rayonnage métallique industriel",
        description:
          "<ul><li><strong><span>RAYONNAGE À PALETTE : </span></strong>Prévu pour les entrepôts de stockage (palette, bacs, conteneurs, etc... ) en intérieur comme en extérieur</li><li><strong><span>RAYONNAGE CANTILEVER : </span></strong>Aménagement spécifique de vos entrepôts de stockage. Le système de cantilever convient à une utilisation à l'intérieur ou en extérieur. Permet le stockage des articles longs et charges lourdes.</li><li><strong><span>RAYONNAGE DYNAMIQUE :</span></strong> Ce type de rayonnage est surtout réalisé pour une exploitation maximale de votre surface au sol et de votre volume de stockage. Il permet également une gestion des stocks simple avec la méthode FIFO (Le premier produit entré est le premier sorti). Vous insérez les palettes d'une face pour les reprendre d'une autre.</li><li><strong><span>RAYONNAGES A TABLETTES :</span></strong> Conserver et archiver vos dossiers dans un minimum de place. Stocker des articles en vrac, des unités de charge non palettisées ou des petites pièces dans des bacs. Pour vos postes de montage d'un rayonnage d'approvisionnement conforme au principe FIFO et facile d'utilisation.</li></ul>",
      },
    ],
    features: [
      {
        id: 0,
        slug: "rayonnage-mobile-archives",
        text: "Système de rayonnages montés sur <strong>bases mobiles</strong> se déplaçant sur rails, Le coulissement des armoires peut se faire selon deux types de mécanismes d'actionnement : <span>mécanique</span> ou <span>électrique</span> . Double la capacité d’entreposage tout en économisant l’espace",
        imgSrc: "rayonnage-mobile.webp",
        imgAlt: "Rayonnage mobile ouvert",
        imgTitle: "Rayonnage mobile manuel",
      },
      {
        id: 1,
        slug: "rayonnage-mobile-archives",
        text: "Sécurité totale du matériel archivé. Système compact d’entreposage et d’archivage conçu pour une répartition et un rangement parfait.",
        imgSrc: "rayonnage-mobile-2.webp",
        imgAlt: "Rayonnage mobile fermée",
        imgTitle: "Rayonnage mobile manuel",
      },
      {
        id: 2,
        slug: "rayonnage-metallique-industriel",
        text: "A Faire",
        imgSrc: "rack-palette.webp",
        imgAlt: "Rayonnage pour palette en intérieur",
        imgTitle: "Rayonnage pour palette",
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
