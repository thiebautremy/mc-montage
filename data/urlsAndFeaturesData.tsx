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
      {
        id: 3,
        slug: "rayonnage-metallique-industriel",
        text: "A faire",
        imgSrc: "rack-palette-1.webp",
        imgAlt: "Rayonnage tablette",
        imgTitle: "Rayonnage tablette",
      },
      {
        id: 4,
        slug: "rayonnage-metallique-industriel",
        text: "Conserver et archiver vos dossiers dans un minimum de place. Stocker des articles en vrac, des unités de charge non palettisées ou des petites pièces dans des bacs. Pour vos postes de montage d'un rayonnage d'approvisionnement conforme au principe FIFO et facile d'utilisation.",
        imgSrc: "rayonnage-tablette.webp",
        imgAlt: "Rayonnage tablette",
        imgTitle: "Rayonnage tablette",
      },
    ],
  },
  {
    label: "agencement",
    urls: ["bureau", "mezzanine-plateforme", "cloison-faux-plafond"],
    featureIntro: [
      {
        slug: "bureau",
        title: "Agencement de bureau",
        description: "A faire",
      },
      {
        slug: "mezzanine-plateforme",
        title: "Mezzanine et plateforme",
        description:
          "Les mezzanines et plateformes de stockage sont modulaires et évolutives pour exploiter toute la hauteur sous plafond de l’entrepôt ainsi que gagner des mètres carrés. Ce sont des systèmes entièrement démontables et réutilisables, dont la modification au niveau de la structure, des dimensions ou de l'emplacement est très aisée.",
      },
      {
        slug: "cloison-faux-plafond",
        title: "Pose de cloison et de faux-plafond",
        description: "test",
      },
    ],
    features: [
      {
        id: 0,
        slug: "bureau",
        text: "Installations de mobilier de bureau ( bureaux, caissons mobiles, chaises de bureaux, chaises visiteurs …) montage des mobiliers conformément aux plans d’aménagement et aux consignes données, mise en place selon le plan d'implantation du client.",
        imgSrc: "cloison-bureau.webp",
        imgAlt: "Cloison de bureau avec fenêtre",
        imgTitle: "Cloison de bureau",
      },
      {
        id: 1,
        slug: "mezzanine-plateforme",
        text: "A faire",
        imgSrc: "plateforme-mezzanine.webp",
        imgAlt: "Plateforme mezzanine avec garde corps",
        imgTitle: "Plateforme mezzanine",
      },
      {
        id: 2,
        slug: "mezzanine-plateforme",
        text: "A faire",
        imgSrc: "mezzanine-avec-garde-corps.webp",
        imgAlt: "Mezzanine en aglos avec garde corps",
        imgTitle: "Mezzanine en aglos",
      },
      {
        id: 3,
        slug: "mezzanine-plateforme",
        text: "A faire",
        imgSrc: "mezzanine-double-etage.webp",
        imgAlt: "Mezzanine en double étage avec garde corps et échelle",
        imgTitle: "Mezzanine en double étage",
      },
      {
        id: 4,
        slug: "cloison-faux-plafond",
        text: "A faire",
        imgSrc: "cloison-nancy.webp",
        imgAlt:
          "Cloison avec mezzanine et fenêtres avec escalier et garde corps",
        imgTitle: "Cloison de bureau",
      },
      {
        id: 5,
        slug: "cloison-faux-plafond",
        text: "A faire",
        imgSrc: "cloison-bureau2.webp",
        imgAlt:
          "Cloison avec mezzanine et fenêtres avec escalier et garde corps",
        imgTitle: "Cloison de bureau",
      },
    ],
  },
  {
    label: "services",
    urls: ["montage-demontage", "sav-maintenance", "devis"],
    featureIntro: [
      {
        slug: "montage-demontage",
        title: "Montage et démontage",
        description:
          "<span>Prévu pour différents domaines</span> : rayonnage de bibliothèque,rayonnages pour commerces, rayonnage pour les soins de santé et fournitures médicales, rayonnage d’entrepôt, rayonnage de musée et conservation, rayonnage d’archives en tout genre …",
      },
      {
        slug: "sav-maintenance",
        title: "Service après vente et maintenance",
        description: "test",
      },
      {
        slug: "devis",
        title: "Demande de devis",
        description: "test",
      },
    ],
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
