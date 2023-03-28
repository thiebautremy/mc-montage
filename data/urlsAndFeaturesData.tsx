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
          "<p><span>Prévu pour différents domaines</span> : rayonnage de bibliothèque,rayonnages pour commerces, rayonnage pour les soins de santé et fournitures médicales, rayonnage d’entrepôt, rayonnage de musée et conservation, rayonnage d’archives en tout genre… Les solutions de stockage telles que les armoires, les rayonnages d'archives peuvent également être installées pour stocker les produits en toute sécurité.</p>",
      },
      {
        slug: "rayonnage-metallique-industriel",
        title: "Rayonnage métallique industriel",
        description:
          "<p>Les rayonnages industriels sont des structures métalliques conçues pour stocker des marchandises de manière organisée et efficace. Il est important de confier la pose des rayonnages industriels à des spécialistes pour plusieurs raisons. Tout d'abord, une installation correcte garantit une sécurité optimale pour les travailleurs et les marchandises stockées. Ensuite, ils peuvent concevoir et installer les rayonnages en fonction des besoins spécifiques de l'entreprise, maximisant ainsi l'espace de stockage et la rentabilité.</p>",
      },
    ],
    features: [
      {
        id: 0,
        slug: "rayonnage-mobile-archives",
        text: "<p>Système de rayonnages montés sur <strong>bases mobiles</strong> se déplaçant sur rails, Le coulissement des armoires peut se faire selon deux types de mécanismes d'actionnement : <span>mécanique</span> ou <span>électrique</span> . Double la capacité d’entreposage tout en économisant l’espace</p>",
        imgSrc: "rayonnage-mobile.webp",
        imgAlt: "Rayonnage mobile ouvert",
        imgTitle: "Rayonnage mobile manuel",
      },
      {
        id: 1,
        slug: "rayonnage-mobile-archives",
        text: "<p>Sécurité totale du matériel archivé. Système compact d’entreposage et d’archivage conçu pour une répartition et un rangement parfait.</p>",
        imgSrc: "rayonnage-mobile-2.webp",
        imgAlt: "Rayonnage mobile fermée",
        imgTitle: "Rayonnage mobile manuel",
      },
      {
        id: 2,
        slug: "rayonnage-mobile-archives",
        text: "<p>Conserver et archiver vos dossiers dans un minimum de place. Stocker des articles en vrac, des unités de charge non palettisées ou des petites pièces dans des bacs. Les rayonnages tablettes sont des rayonnages avec des plateaux pour stocker des objets légers.</p>",
        imgSrc: "rayonnage-tablette.webp",
        imgAlt: "Rayonnage tablette",
        imgTitle: "Rayonnage tablette",
      },
      {
        id: 0,
        slug: "rayonnage-metallique-industriel",
        text: "<p><strong><span>RAYONNAGE À PALETTE : </span></strong>Prévu pour les entrepôts de stockage (palette, bacs, conteneurs, etc... ) en intérieur comme en extérieur. Ils sont disponibles en différentes hauteurs, profondeurs et tailles de traverses, qui permettent de stocker les palettes de manière efficace et organisée. Les racks à palettes peuvent être démontables ou non, selon vos besoins de stockage. Les tablettes et les tiroirs des rayonnages peuvent également être réglables pour optimiser l'espace de stockage et faciliter la manutention des produits.</p>",
        imgSrc: "rack-palette-1.webp",
        imgAlt: "Rack à palettes en intérieur en acier galvanisé",
        imgTitle: "Rack à palettes",
      },
      {
        id: 1,
        slug: "rayonnage-metallique-industriel",
        text: "<p><strong><span>RAYONNAGE À PALETTE : </span></strong>Les racks à palettes sont utilisés pour le stockage de charges lourdes et volumineuses. Les dimensions sont ajustables afin d'optimiser au maximum l'espace disponible. L'installation d'un rayonnage industriel nécessite une planification minutieuse des besoins de stockage, et des solutions de stockage requises. </p>",
        imgSrc: "rack-palette.webp",
        imgAlt:
          "Rack à palettes en intérieur en acier galvanisé de grande hauteur",
        imgTitle: "Rack à palettes",
      },
      {
        id: 2,
        slug: "rayonnage-metallique-industriel",
        text: "<p><strong><span>RAYONNAGE CANTILEVER : </span></strong>Aménagement spécifique de vos entrepôts de stockage. Le système de cantilever convient à une utilisation à l'intérieur ou en extérieur. Permet le stockage des articles longs et charges lourdes. La plupart des rayonnages industriels sont disponibles en différentes sections modulables pour permettre un agencement personnalisé et s'adapter aux besoins de stockage spécifiques. Les structures de stockage peuvent être en acier galvanisé ou revêtues d'une peinture époxy pour une meilleure résistance à la corrosion.</p>",
        imgSrc: "rayonnage-cantilever.webp",
        imgAlt: "Rayonnage cantilever en acier galvanisé",
        imgTitle: "Rayonnage cantilever",
      },
      {
        id: 3,
        slug: "rayonnage-metallique-industriel",
        text: "<p><strong><span>RAYONNAGE DYNAMIQUE : </span></strong>Les rayonnages dynamiques à palette offrent de nombreux avantages pour le stockage et la gestion des palettes. Ils permettent d'optimiser l'espace de stockage, d'améliorer la rotation des stocks et de réduire les temps de manutention. Ils permettent également une meilleure traçabilité des produits et une réduction des risques d'erreurs de stockage. Les rayonnages dynamiques à palette sont particulièrement adaptés aux entreprises ayant des volumes de stockage importants et des contraintes logistiques importantes.</p>",
        imgSrc: "dynamique-palette.webp",
        imgAlt: "Rayonnage dynamique à palette",
        imgTitle: "Rayonnage dynamique à palette",
      },
      {
        id: 4,
        slug: "rayonnage-metallique-industriel",
        text: "<p><strong><span>STOCKAGE GRILLAGÉ : </span></strong>Le stockage grillagé est une méthode de stockage utilisée pour les articles qui nécessitent une ventilation ou une visibilité. Il est souvent utilisé dans les entrepôts, les usines et les commerces pour stocker des produits tels que les produits alimentaires, les pièces détachées, les produits chimiques et les équipements de bureau. Les panneaux grillagés sont fabriqués à partir de fils d'acier soudés ou de mailles pour créer une surface résistante et durable qui permet une circulation d'air libre.</p>",
        imgSrc: "stockage-grillage-exterieur.webp",
        imgAlt: "Stockage grillagé exterieur acier galvanisé gris",
        imgTitle: "Stockage grillagé",
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
        description:
          "<p>L'agencement de bureau est un élément clé pour la <span>productivité</span> et le <span>confort des employés</span>. Que ce soit pour une petite entreprise ou pour une grande entreprise, l'agencement de bureau doit être optimisé pour répondre aux besoins des travailleurs et de l'entreprise elle-même.</p>",
      },
      {
        slug: "mezzanine-plateforme",
        title: "Mezzanine et plateforme",
        description:
          "<div><p>Les mezzanines et plateformes de stockage sont des solutions idéales pour optimiser l'espace de stockage et créer une surface supplémentaire. Elles permettent d'augmenter la capacité de stockage et de faciliter l'accès aux produits. Les mezzanines peuvent également être utilisées comme bureaux ou ateliers. La pose de ces structures nécessite l'intervention de spécialistes pour assurer la sécurité et la conformité aux normes.</p><br></br><p>Ce sont des systèmes entièrement démontables et réutilisables, dont la modification au niveau de la structure, des dimensions ou de l'emplacement est très aisée.</p></div>",
      },
      {
        slug: "cloison-faux-plafond",
        title: "Pose de cloison et de faux-plafond",
        description:
          "<p>Les poses de cloisons et de faux-plafonds permettent de <span>délimiter les zones</span> de travail ou de vie, <span>d'améliorer l'isolation phonique et thermique</span>, de masquer des câbles ou des conduits disgracieux, d'apporter une touche esthétique à la décoration intérieure, tout en offrant une solution rapide et économique pour rénover ou optimiser un espace existant.</p>",
      },
    ],
    features: [
      {
        id: 0,
        slug: "bureau",
        text: "<p>Installations de mobilier de bureau ( bureaux, caissons mobiles, chaises de bureaux, chaises visiteurs …) montage des mobiliers conformément aux plans d’aménagement et aux consignes données, mise en place selon le plan d'implantation du client.</p>",
        imgSrc: "cloison-bureau.webp",
        imgAlt: "Cloison de bureau avec fenêtre",
        imgTitle: "Cloison de bureau",
      },
      {
        id: 0,
        slug: "mezzanine-plateforme",
        text: "<p>A faire</p>",
        imgSrc: "cloison-nancy.webp",
        imgAlt:
          "Cloison avec mezzanine et fenêtres avec escalier et garde corps",
        imgTitle: "Cloison de bureau",
      },
      {
        id: 1,
        slug: "mezzanine-plateforme",
        text: "<p>A faire</p>",
        imgSrc: "plateforme-mezzanine.webp",
        imgAlt: "Plateforme mezzanine avec garde corps",
        imgTitle: "Plateforme mezzanine",
      },
      {
        id: 2,
        slug: "mezzanine-plateforme",
        text: "<p>A faire</p>",
        imgSrc: "mezzanine-avec-garde-corps.webp",
        imgAlt: "Mezzanine en aglos avec garde corps",
        imgTitle: "Mezzanine en aglos",
      },
      {
        id: 3,
        slug: "mezzanine-plateforme",
        text: "<p>A faire</p>",
        imgSrc: "mezzanine-double-etage.webp",
        imgAlt: "Mezzanine en double étage avec garde corps et échelle",
        imgTitle: "Mezzanine en double étage",
      },
      {
        id: 4,
        slug: "mezzanine-plateforme",
        text: "<p>A faire</p>",
        imgSrc: "escaliers-acces.webp",
        imgAlt: "Escaliers en acier galvanisé pour accèder à une mezzanine",
        imgTitle: "Escaliers en acier galvanisé",
      },
      {
        id: 0,
        slug: "cloison-faux-plafond",
        text: "<p>Ces aménagements peuvent également contribuer à améliorer le confort et le bien-être des occupants en réduisant les nuisances sonores et en créant une ambiance plus agréable.</p>",
        imgSrc: "cloison-bureau2.webp",
        imgAlt: "Cloison semi vitrée intérieure ",
        imgTitle: "Cloison de bureau",
      },
      {
        id: 1,
        slug: "cloison-faux-plafond",
        text: "<p>Plusieurs types de modules sont disponibles pour les espaces intérieurs (vitrés, semi vitrés, melaminés, pleins …)</p>",
        imgSrc: "cloison-bureau.webp",
        imgAlt: "Cloison de bureau semi vitrée intérieure",
        imgTitle: "Cloison de bureau",
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
