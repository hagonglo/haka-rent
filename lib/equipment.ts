export type Equipment = {
  slug: string;
  reference: string;
  number: string;
  name: string;
  brand: string;
  model: string;
  category: string;
  subcategory: string;
  description: string;
  longDescription: string;
  specs: string[];
  details: Array<[string, string]>;
  included: string[];
  compatibilities: string[];
  availability: string;
  featured: boolean;
  images: string[];
  alt: string;
  whatsapp: string;
};

export const categories = [
  {
    "name": "Caméra",
    "note": "Corps caméra · Prise de vue aérienne · Prompteurs"
  },
  {
    "name": "Optiques",
    "note": "Séries · Zooms · Accessoires optiques"
  },
  {
    "name": "Lumière",
    "note": "LED · Contrôle · Modeleurs"
  },
  {
    "name": "Machinerie / Grip",
    "note": "Stabilisation · Support · Mouvement"
  },
  {
    "name": "Régie vidéo",
    "note": "Monitoring · Transmission · Conversion"
  },
  {
    "name": "Énergie & câbles",
    "note": "Batteries · Charge · Distribution"
  },
  {
    "name": "Accessoires",
    "note": "Montage · Protection · Compléments"
  }
] as const;

export const equipment: Equipment[] = [
  {
    "slug": "litepanels-gemini-2x1-soft-led-rgbww",
    "reference": "HAKA-EX-004",
    "number": "004",
    "name": "Litepanels Gemini 2X1 Soft LED RGBWW",
    "brand": "Litepanels",
    "model": "Gemini",
    "category": "Lumière",
    "subcategory": "Projecteurs",
    "description": "Le Litepanels Gemini 2×1 Soft est un panneau LED RGBWW puissant et léger, offrant une lumière douce et précise, avec contrôle DMX/CRMX et de nombreux effets créatifs.",
    "longDescription": "Le Litepanels Gemini 2×1 Soft est un panneau LED RGBWW avec une lyre pilotable. Plus lumineux que n’importe quel autre panneau 2×1, le Gemini 2×1 Soft est également plus léger que ses pairs. Il se démarque avec un poids léger de seulement 11.5kg. Le DMX et le CRMX intégrés accélèrent le contrôle, avec des modes d’éclairage qui offrent une manipulation précise des couleurs. Concentrez sa puissance sur un faisceau de 20° précis ou optez pour une lumière plus sotf avec un faisceau de 100°. Sa LED RGBWW offre une infinité de possibilité créative (300 gels de couleurs) et une excellente précision des couleurs sans scintillement : CRI 95 / TLCI 97. Le Gemini 2×1 soft offre également 11 effets spéciaux. Assemblez-les par 2 ou par 4 et synchronisez-les !",
    "specs": [
      "Projecteurs",
      "Gemini"
    ],
    "details": [
      [
        "Marque",
        "Litepanels"
      ],
      [
        "Modèle",
        "Gemini"
      ],
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Projecteurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": true,
    "images": [
      "/images/catalogue/litepanels-gemini_01.webp",
      "/images/catalogue/litepanels-gemini_02.webp",
      "/images/catalogue/litepanels-gemini_03.webp",
      "/images/catalogue/litepanels-gemini_04.webp"
    ],
    "alt": "Litepanels Gemini 2X1 Soft LED RGBWW — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Litepanels%20Gemini%202X1%20Soft%20LED%20RGBWW."
  },
  {
    "slug": "aputure-ls-1200d-pro",
    "reference": "HAKA-EX-006",
    "number": "006",
    "name": "Aputure LS 1200d Pro",
    "brand": "Aputure",
    "model": "1200D Pro",
    "category": "Lumière",
    "subcategory": "Projecteurs",
    "description": "L’Aputure LS 1200d est un projecteur LED COB 1200W ultra-puissant, offrant une lumière daylight comparable à un HMI, avec faisceau modulable, gradation précise et protection IP54.",
    "longDescription": "L'une des sources les plus lumineuses d’Aputure, le LS 1200d, utilise un jeu de composants COB lumière du jour de 1200 W pour offrir des performances comparables à celles des têtes IHM standard. Trois hyper réflecteurs interchangeables permettent aux utilisateurs d’adapter la sortie et l’angle du faisceau\n- gradation en continu, \n- contrôle de la lumière par incréments de 0,1 %, \n- un IRC de 96 et un TLCI de 98, \n- conception résistante aux intempéries IP54",
    "specs": [
      "Projecteurs",
      "1200D Pro"
    ],
    "details": [
      [
        "Marque",
        "Aputure"
      ],
      [
        "Modèle",
        "1200D Pro"
      ],
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Projecteurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": true,
    "images": [
      "/images/catalogue/aputure-1200d-pro_01.webp",
      "/images/catalogue/aputure-1200d-pro_02.webp",
      "/images/catalogue/aputure-1200d-pro_03.webp",
      "/images/catalogue/aputure-1200d-pro_04.webp"
    ],
    "alt": "Aputure LS 1200d Pro — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Aputure%20LS%201200d%20Pro."
  },
  {
    "slug": "arri-alexa-plus",
    "reference": "HAKA-EX-012",
    "number": "012",
    "name": "Arri Alexa Plus",
    "brand": "ARRI",
    "model": "Alexa Plus",
    "category": "Caméra",
    "subcategory": "Corps caméra",
    "description": "Caméra cinéma professionnelle avec capteur Super 35 signature ALEXA, enregistrement ProRes 422/4444. Poids 8 kg (viseur électronique + poignée, sans batterie ni optique). Licences ARRIRAW, Highspeed et Anamorphique incluses.",
    "longDescription": "L'ARRI ALEXA Plus est une caméra de cinéma numérique dotée du capteur signature partagé par toute la gamme ALEXA, reconnu pour son rendu des couleurs et sa large latitude dynamique. Elle enregistre en ProRes 422 ou ProRes 4444, garantissant une qualité d'image adaptée aux productions professionnelles et broadcast.\nConfigurée avec viseur électronique et poignée, la caméra pèse 8 kg (hors batteries et optique), un format compact facilitant son intégration sur des configurations variées (épaule, stabilisateur, grue).\nCaractéristiques techniques :\nCapteur : identique à l'ensemble de la gamme ALEXA\nFormats d'enregistrement : ProRes 422 / ProRes 4444\nPoids : 8 kg (viseur électronique + poignée, sans batterie ni optique)\nLicences incluses : ARRIRAW, Highspeed, Anamorphique\nCette configuration convient aux tournages exigeant une image cinéma de haute qualité, avec la flexibilité d'un enregistrement RAW natif, de cadences élevées et d'une compatibilité optiques anamorphiques.",
    "specs": [
      "Corps caméra",
      "Alexa Plus"
    ],
    "details": [
      [
        "Marque",
        "ARRI"
      ],
      [
        "Modèle",
        "Alexa Plus"
      ],
      [
        "Famille",
        "Caméra"
      ],
      [
        "Type",
        "Corps caméra"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": true,
    "images": [
      "/images/catalogue/arri-alexa-xt_01.webp",
      "/images/catalogue/arri-alexa-xt_02.webp"
    ],
    "alt": "Arri Alexa Plus — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Arri%20Alexa%20Plus."
  },
  {
    "slug": "cartoni-c20s",
    "reference": "HAKA-EX-019",
    "number": "019",
    "name": "Cartoni C20S",
    "brand": "Cartoni",
    "model": "C20S",
    "category": "Caméra",
    "subcategory": "Trépieds",
    "description": "Tête fluide 100mm pour caméras EFP/broadcast, charge 7-35 kg, 3 modules d'amortissement, 7 niveaux de drag/contrebalance, niveau à bulle éclairé. Poids : 6,5 kg.",
    "longDescription": "La Cartoni C20S est une tête fluide robuste conçue pour offrir un support extrêmement stable dans les configurations EFP, studio/broadcast et cinéma numérique. Fabriquée en alliages de magnésium légers, elle allie solidité et légèreté pour un usage professionnel intensif.\nÉquipée de trois modules d'amortissement fluide primés, la C20S garantit des mouvements de pan et tilt d'une fluidité remarquable, avec un drag réglable en 7 crans précis et répétables plus une position 0 pour le mouvement libre. Le système de contrebalance suit la même logique avec 7 crans progressifs et une position 0, activés via un sélecteur ergonomique à prise facile.\nCaractéristiques techniques :\nType : tête fluide 3 axes, base bol 100 mm (version 150mm disponible en option)\nCapacité de charge : 7 à 35 kg (15 à 77 lb)\nPoids de la tête : 6,5 kg (14,3 lb)\nDrag pan/tilt : 7 niveaux + position 0 (roue libre)\nContrebalance : 7 niveaux progressifs + position 0\nPlateau rapide : plaque de fixation style européen, 2 vis 3/8\"-16\nNiveau à bulle : éclairé, commutable\nPoignée : barre panoramique télescopique incluse (droite), fixation pour seconde barre en option\nCompatibilité : tous trépieds à bol 100 mm (ou 150 mm en version optionnelle)\nFixation pied : standard Vinten 4 boulons\nUne tête fluide de référence pour les opérateurs recherchant une stabilité extrême et un contrôle précis sur des configurations caméra moyennes à lourdes, en broadcast, EFP ou tournage cinéma.",
    "specs": [
      "Trépieds",
      "C20S"
    ],
    "details": [
      [
        "Marque",
        "Cartoni"
      ],
      [
        "Modèle",
        "C20S"
      ],
      [
        "Famille",
        "Caméra"
      ],
      [
        "Type",
        "Trépieds"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": true,
    "images": [
      "/images/catalogue/cartoni-c20S_01.webp",
      "/images/catalogue/cartoni-c20S_02.webp",
      "/images/catalogue/cartoni-c20S_03.webp"
    ],
    "alt": "Cartoni C20S — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Cartoni%20C20S."
  },
  {
    "slug": "astera-titan-tube-full-kit-de-8",
    "reference": "HAKA-EX-026",
    "number": "026",
    "name": "Astera Titan Tube – Full Kit de 8",
    "brand": "Astera",
    "model": "Titan",
    "category": "Lumière",
    "subcategory": "Projecteurs",
    "description": "Tubes LED RGBMA sans fil, batterie intégrée, IP65, CRI/TLCI ≥96, 1750-20000K. Livrés avec valise de transport/charge et accessoires de montage complets.",
    "longDescription": "L'Astera Titan Tube Kit de 8 est une solution d'éclairage LED sans fil de référence pour le cinéma, la télévision et l'événementiel. Chaque tube intègre un moteur LED RGBMA (Rouge, Vert, Bleu, Mint, Ambre) offrant à la fois une lumière blanche de très haute qualité et une palette colorimétrique complète, avec réglage de teinte, saturation et intensité directement sur l'appareil.\nEntièrement sans fil grâce à leur batterie lithium-ion intégrée, les tubes s'affranchissent des contraintes de câblage pour un placement libre en pratique, en accent light ou en effet pixel-mappé. Le contrôle s'effectue via l'AsteraApp (Bluetooth), le DMX filaire, ou le DMX sans fil CRMX, avec une portée annoncée jusqu'à 300m.\nCaractéristiques techniques (par tube) :\nPuissance LED : 72W (48W consommation)\nFlux lumineux : jusqu'à 2900 lumens (à 4000K)\nTempérature de couleur : 1750K – 20 000K, mode HSI complet\nIRC / TLCI : ≥96\nSegments pixels : 16\nAngle de faisceau : 135° x 115° (angle de champ 175° x 160°)\nStroboscope : 0-25 Hz\nDimensions : 1035 mm x Ø43 mm\nPoids : ~1,3 kg (2,9 lb)\nAutonomie batterie : jusqu'à 20h\nÉtanchéité : IP65\nConnectivité : AsteraApp (Bluetooth), DMX filaire, DMX sans fil CRMX, infrarouge\nDimming : 16 bits\nContenu du kit (8 tubes) :\n8x Astera Titan Tube\n1x valise de transport/charge avec PowerBox intégré (charge simultanée)\n8x pieds pliants (kick stands)\n16x spigots\n16x supports aluminium (holders)\n16x goupilles (cotter pins)\n16x œillets de suspension (eyebolts)\nUne solution complète, robuste et polyvalente pour l'éclairage pratique, l'accent light ou les effets colorimétriques synchronisés, sans contrainte de câblage sur le plateau.",
    "specs": [
      "Projecteurs",
      "Titan"
    ],
    "details": [
      [
        "Marque",
        "Astera"
      ],
      [
        "Modèle",
        "Titan"
      ],
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Projecteurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": true,
    "images": [
      "/images/catalogue/astera-titan_01.webp",
      "/images/catalogue/astera-titan_02.webp",
      "/images/catalogue/astera-titan_03.webp",
      "/images/catalogue/astera-titan_04.webp",
      "/images/catalogue/astera-titan_05.webp",
      "/images/catalogue/astera-titan_06.webp"
    ],
    "alt": "Astera Titan Tube – Full Kit de 8 — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Astera%20Titan%20Tube%20%E2%80%93%20Full%20Kit%20de%208."
  },
  {
    "slug": "dzo-vespid-full-frame",
    "reference": "HAKA-EX-027",
    "number": "027",
    "name": "DZO Vespid Full Frame",
    "brand": "DZO",
    "model": "Vespid",
    "category": "Optiques",
    "subcategory": "Objectifs fixes",
    "description": "Set Optiques DZO Vespid Full Frame PL 25-35-50-75-100-135mm\n6 optiques Full Frame pour le cinéma. \nOuverture constante T2.1\nCette série est compatible sur tous vos boîtiers Full Frame et S35 avec un léger crop.\nPlusieurs montures disponibles: E-PL, RF-PL, PL",
    "longDescription": "Le set DZOFilm Vespid Prime Full Frame (25-35-50-75-100-135mm) est une gamme d'optiques cinéma compactes offrant une couverture plein format (Full Frame) avec une ouverture constante de T2.1 sur l'ensemble des focales, garantissant d'excellentes performances en basse lumière et une profondeur de champ réduite maîtrisée.\nConçues pour les productions indépendantes comme les setups légers, ces optiques allient rendu cinéma et compacité, les rendant parfaitement adaptées à un usage sur gimbal, drone ou caméra à l'épaule. La monture PL interchangeable (adaptateur EF disponible séparément) permet une compatibilité étendue avec la plupart des caméras cinéma du marché.\nCaractéristiques techniques :\nFocales du set : 25 / 35 / 50 / 75 / 100 / 135mm\nOuverture : T2.1 constant sur toute la gamme\nCercle d'image : 46,5 mm (couverture Full Frame / Vista Vision)\nMonture : PL interchangeable (EF disponible en option)\nIris : 16 lames (bokeh rond et naturel)\nRotation de mise au point : 270°\nDiamètre avant : 80mm (compatible matte box cinéma standard)\nFiletage filtre avant : 77mm\nFiltre ND arrière amovible (magnétique)\nBagues crantées (focus/iris) — position des engrenages identique sur toute la gamme pour changement rapide d'optique\nConstruction : alliage aluminium\nOptiques manuelles entièrement mécaniques\nUn set cinéma cohérent et polyvalent, offrant une image plein format homogène focale après focale, idéal pour les productions recherchant un rendu cinématographique professionnel avec un poids et un encombrement réduits.",
    "specs": [
      "Objectifs fixes",
      "Vespid"
    ],
    "details": [
      [
        "Marque",
        "DZO"
      ],
      [
        "Modèle",
        "Vespid"
      ],
      [
        "Famille",
        "Optiques"
      ],
      [
        "Type",
        "Objectifs fixes"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": true,
    "images": [
      "/images/catalogue/dzo-vespid-fullframe_01.webp",
      "/images/catalogue/dzo-vespid-fullframe_02.webp",
      "/images/catalogue/dzo-vespid-fullframe_03.webp",
      "/images/catalogue/dzo-vespid-fullframe_04.webp"
    ],
    "alt": "DZO Vespid Full Frame — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20DZO%20Vespid%20Full%20Frame."
  },
  {
    "slug": "moniteur-transvideo-starlite-hd-m",
    "reference": "HAKA-EX-028",
    "number": "028",
    "name": "Moniteur Transvideo Starlite HD-m",
    "brand": "Starlite",
    "model": "HD-m",
    "category": "Régie vidéo",
    "subcategory": "Moniteurs",
    "description": "Moniteur/enregistreur OLED 5\", 1280x720, 380 cd/m², agrégateur de métadonnées objectif (Cooke /i, Zeiss eXtended) et caméra. Boîtier aluminium usiné.",
    "longDescription": "Le Transvideo Starlite HD-m est un moniteur/enregistreur OLED 5\" compact, conçu pour le suivi de mise au point, l'assistanat scripte et les configurations stabilisées, avec une fonction unique d'agrégateur de métadonnées. Il collecte en temps réel les informations transmises par le signal SDI, la caméra via liaison Ethernet, ainsi que les données objectif via liaison série Cooke /i ou Zeiss eXtended Data (XD) — distorsion, vignetage, données inertielles, tables d'illumination — essentielles pour la post-production et les effets spéciaux (compositing, VFX).\nLes fichiers de métadonnées sont générés en temps réel sur carte SD, directement exploitables en post-production via les plugins constructeurs (ex. ZEISS pour Nuke, After Effects, DaVinci Resolve), évitant les procédures fastidieuses de calibration en pré-production.\nCaractéristiques techniques :\nÉcran : OLED tactile 5\", résolution 1280 x 720\nLuminosité : 380 cd/m²\nEnregistreur intégré : H.264, écriture sur carte SD\nEntrées/sorties : 3G/HD/SD-SDI (in + out reclocké)\nOutils intégrés : forme d'onde (waveform), vectorscope, histogramme\nFonctions focus : peaking, zoom pixel-à-pixel 1:1, vue \"focus puller\"\nMétadonnées : agrégation via SDI, Ethernet (caméra), série Cooke /i / Zeiss XD\nRapports : export PDF (métadonnées scripte/caméra/objectif)\nDésanamorphose : 1,3x et 2x\nFonctions image : flip H/V, virtual horizon (stabilisé)\nBoîtier : aluminium aviation usiné, ultra-robuste\nPoids : ~190 g (base StarliteHD)\nUn outil de référence pour les productions haut de gamme utilisant des optiques à métadonnées avancées (ZEISS CP.3 XD, Cooke /i), simplifiant considérablement le workflow VFX et compositing en post-production.",
    "specs": [
      "Moniteurs",
      "HD-m"
    ],
    "details": [
      [
        "Marque",
        "Starlite"
      ],
      [
        "Modèle",
        "HD-m"
      ],
      [
        "Famille",
        "Régie vidéo"
      ],
      [
        "Type",
        "Moniteurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": true,
    "images": [
      "/images/catalogue/arri-transvideo-starlite_01.webp",
      "/images/catalogue/arri-transvideo-starlite_02.webp",
      "/images/catalogue/arri-transvideo-starlite_03.webp",
      "/images/catalogue/arri-transvideo-starlite_04.webp"
    ],
    "alt": "Moniteur Transvideo Starlite HD-m — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Moniteur%20Transvideo%20Starlite%20HD-m."
  },
  {
    "slug": "mattebox-bright-tangerine-misfit-4x5-6",
    "reference": "HAKA-EX-029",
    "number": "029",
    "name": "Mattebox Bright Tangerine Misfit 4x5.6",
    "brand": "Bright Tangerine",
    "model": "Misfit",
    "category": "Optiques",
    "subcategory": "Matte box",
    "description": "Mattebox clip-on 2 étages ultra-léger, fixation 114mm, sans tiroirs (filtres insérés directement), volet supérieur carbone. Construction aluminium/carbone.",
    "longDescription": "Le Bright Tangerine Misfit 4x5.65\" est un mattebox clip-on compact, conçu pour combler l'écart entre les simples pare-soleil clipsables et les matteboxes multi-étages traditionnels. Usiné dans un bloc unique d'aluminium billet et évidé au maximum, il offre un excellent rapport résistance/poids, particulièrement adapté aux configurations gimbal et Steadicam.\nSon système de filtration sans tiroir permet d'insérer les filtres directement dans le corps du mattebox, réduisant l'encombrement et le poids au minimum. Un clip à ressort en haut du mattebox sécurise les filtres pour éviter toute chute accidentelle. Les filtres peuvent également être positionnés en diagonale pour éliminer les reflets parasites, une fonctionnalité rare sur ce type de mattebox léger.\nCaractéristiques techniques :\nType : mattebox clip-on, 2 étages (extensible à 3 avec accessoire)\nFormat filtres : 4x5,65\" (compatible 4x4\" également)\nFixation : clamp 114mm (bagues de réduction disponibles en option)\nMatériaux : aluminium, acier inoxydable, elasto-polymère\nVolet supérieur (top flag) : fibre de carbone, rétractable\nPoids : variable selon version (Misfit ATOM : 98g sans pare-soleil / 195g avec)\nCompatibilité : objectifs à mise au point interne recommandés (pour éviter la rotation du mattebox)\nRotation : mattebox rotatif sur son axe\nChamp de vision large, adapté aux focales grand-angle même avec deux filtres montés\nUne solution mattebox légère et modulaire, idéale pour les tournages nécessitant rapidité de montage et faible poids, sans sacrifier le contrôle de la lumière ni la protection des optiques.",
    "specs": [
      "Matte box",
      "Misfit"
    ],
    "details": [
      [
        "Marque",
        "Bright Tangerine"
      ],
      [
        "Modèle",
        "Misfit"
      ],
      [
        "Famille",
        "Optiques"
      ],
      [
        "Type",
        "Matte box"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": true,
    "images": [
      "/images/catalogue/bright-tangerine-misfit_01.webp",
      "/images/catalogue/bright-tangerine-misfit_02.webp"
    ],
    "alt": "Mattebox Bright Tangerine Misfit 4x5.6 — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Mattebox%20Bright%20Tangerine%20Misfit%204x5.6."
  },
  {
    "slug": "astera-nyx-bulb-set-8x",
    "reference": "HAKA-EX-002",
    "number": "002",
    "name": "Astera Nyx Bulb Set (8X)",
    "brand": "Astera",
    "model": "Nyx",
    "category": "Lumière",
    "subcategory": "Projecteurs",
    "description": "La première ampoule LED conçue pour le cinéma, garantissant un rendu puissant, fidèle et ajustable. Pilotez via l’application ou en DMX.",
    "longDescription": "La première ampoule LED à couleur ajustable pour les productions cinématographiques, scéniques et événementiels. Pas plus grande qu’une ampoule normale, elle contient un récepteur CRMX ainsi que les modules RF et Bluetooth pour être paramétrée par l’application AsteraApp. Elle s’alimente soit par une douille électrique standard, soit par un bloc d’alimentation compact. Grâce à sa source LED Titan, elle affiche des couleurs parfaites et une large gamme de blancs avec un IRC et un TLCi ultra élevés. Disponible en revêtement blanc ou noir.\n- App\n- CRMW and DMX\n- IP44\n- RGBMA\n- 10W",
    "specs": [
      "Projecteurs",
      "Nyx"
    ],
    "details": [
      [
        "Marque",
        "Astera"
      ],
      [
        "Modèle",
        "Nyx"
      ],
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Projecteurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/astera-nyx-01.webp",
      "/images/catalogue/astera-nyx-02.webp",
      "/images/catalogue/astera-nyx-03.webp"
    ],
    "alt": "Astera Nyx Bulb Set (8X) — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Astera%20Nyx%20Bulb%20Set%20(8X)."
  },
  {
    "slug": "cineeye-2s-pro-video-hf",
    "reference": "HAKA-EX-003",
    "number": "003",
    "name": "CineEye 2S Pro Video HF",
    "brand": "Accsoon",
    "model": "Cine Eye 2s Pro",
    "category": "Régie vidéo",
    "subcategory": "Transmission vidéo",
    "description": "Transmission vidéo sans fil SDI/HDMI jusqu’à 350 m, avec une latence inférieure à 0,06 s. Compatible 1080p60, iOS et Android.",
    "longDescription": "Le système bi-bande Accsoon exploite intelligemment les transmissions 2,4 GHz et 5 GHz pour maintenir une qualité de signal optimale. L'émetteur et le récepteur du CineEye 2S Pro prennent tous deux en charge les entrées SDI et HDMI, offrant ainsi aux utilisateurs professionnels un système vidéo sans fil SDI et HDMI polyvalent et fiable. \n\nLa latence entre l'émetteur et le récepteur est inférieure à 0,06 s, ce qui représente la meilleure performance de sa catégorie. Que ce soit pour le monitoring ou la mise au point, le CineEye 2S Pro est parfaitement adapté.\n\nGrâce à sa technologie double bande, la portée de transmission stable du CineEye 2S Pro atteint 350 m (1200 pieds) en champ libre. Le système prend en charge l'entrée vidéo jusqu'à 1080p à 60 images par seconde et l'entrée audio 44,1 kHz/48 kHz 16 bits/24 bits. Il diffuse l'audio avec un codec à faible compression, offrant ainsi une expérience de monitoring audio quasi sans perte.\n\nLa meilleure application de monitoring, compatible Android et iOS, elle intègre toutes les fonctionnalités de monitoring les plus demandées.  L'absence de ventilateurs garantit un fonctionnement silencieux et sans nuisances sonores.",
    "specs": [
      "Transmission vidéo",
      "Cine Eye 2s Pro"
    ],
    "details": [
      [
        "Marque",
        "Accsoon"
      ],
      [
        "Modèle",
        "Cine Eye 2s Pro"
      ],
      [
        "Famille",
        "Régie vidéo"
      ],
      [
        "Type",
        "Transmission vidéo"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/accsoon-cineeye-2pro_01.webp",
      "/images/catalogue/accsoon-cineeye-2pro_02.webp",
      "/images/catalogue/accsoon-cineeye-2pro_03.webp"
    ],
    "alt": "CineEye 2S Pro Video HF — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20CineEye%202S%20Pro%20Video%20HF."
  },
  {
    "slug": "aputure-ls-600d-pro",
    "reference": "HAKA-EX-005",
    "number": "005",
    "name": "Aputure LS 600D Pro",
    "brand": "Aputure",
    "model": "600D Pro",
    "category": "Lumière",
    "subcategory": "Projecteurs",
    "description": "L’Aputure LS 600D Pro est un projecteur LED COB ultra-puissant, idéal pour l’extérieur, avec 5600K, CRI/TLCI 96, contrôle sans fil et résistance IP54.",
    "longDescription": "L'Aputure LS 600D Pro est un projecteur LED COB qui offre une luminosité exceptionnelle, comparable à un HMI de 1200w. Sa température de couleur constante à 5600K et son indice CRI / TLCI élevé de 96, en fait le projecteur idéal de prise de vue en extérieur.\n\nAu-delà de sa puissance, son pilotage aisé est une force majeure. En effet, il dispose d’une multitude de solutions de contrôle sans fil dont sa télécommande 2,4 GHz, l’application mobile Sidus Link et le DMX sans fil intégré. En réglage manuel ou à distance, vous conserverez un contrôle d’intensité précis de 0 à 100%.\n\nCoté alimentation, le projecteur est prêt à être utilisé dans le monde entier via son adaptateur 100 à 240V. Ses deux plaques V-lock permettent une alimentation via des batteries 14,4V, 26V et 28,8V. Le boîtier de commande accepte également une alimentation 48 V CC (15 A) via une XLR à 3 broches pour raccorder des solutions d’alimentation externes. Vous pouvez également utiliser des batteries V-Mount et Gold Mount.\n\nLe 600d Pro résiste à l’eau et à la poussière (IP54) , lui permettant de faire face aux conditions difficiles. Il est compatible avec les barndoors 4 voies vendus séparément et Fresnel F10. Parmi ses autres caractéristiques impressionnantes, on trouve huit effets d’éclairage intégrés: Paparazzi, Fireworks, Lightning, Faulty Bulb, TV, Pulsing, Strobe et Explosion.",
    "specs": [
      "Projecteurs",
      "600D Pro"
    ],
    "details": [
      [
        "Marque",
        "Aputure"
      ],
      [
        "Modèle",
        "600D Pro"
      ],
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Projecteurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/aputure-600d-pro_01.webp",
      "/images/catalogue/aputure-600d-pro_02.webp",
      "/images/catalogue/aputure-600d-pro_03.webp",
      "/images/catalogue/aputure-600d-pro_04.webp"
    ],
    "alt": "Aputure LS 600D Pro — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Aputure%20LS%20600D%20Pro."
  },
  {
    "slug": "bras-magique-manfrotto-244n-143n",
    "reference": "HAKA-EX-007",
    "number": "007",
    "name": "Bras magique Manfrotto 244N - 143N",
    "brand": "Manfrotto",
    "model": "244N, 143N",
    "category": "Machinerie / Grip",
    "subcategory": "Pieds et grip",
    "description": "Bras magique Manfrotto à friction variable, supportant jusqu’à 3 kg, avec tenon de 16 mm et plusieurs options de fixation.",
    "longDescription": "Le bras magique Manfrotto à friction variable est un accessoire polyvalent et fiable, conçu pour positionner avec précision différents équipements de prise de vue et d’éclairage. Grâce à son système de friction réglable, il permet d’ajuster facilement la résistance du bras afin de maintenir l’équipement de manière stable tout en conservant une grande souplesse de manipulation.\nÉquipé d’un tenon de 16 mm, il est compatible avec de nombreux accessoires et supports professionnels. Sa charge maximale de 3 kg permet de fixer différents types d’équipements légers, tels que des petits projecteurs, appareils photo, moniteurs ou accessoires de tournage.\n\nLe bras est disponible avec plusieurs configurations de fixation afin de s’adapter aux besoins de chaque installation : avec clamp, avec Snap-on 143BKT ou avec patte d’oie. Cette polyvalence en fait un accessoire particulièrement pratique sur les plateaux de tournage, en studio comme en extérieur.\n\nCompact, robuste et facile à manipuler, le bras magique Manfrotto constitue une solution idéale pour créer rapidement des configurations d’éclairage ou de prise de vue sur mesure, tout en bénéficiant d’un maintien précis et sécurisé.",
    "specs": [
      "Pieds et grip",
      "244N, 143N"
    ],
    "details": [
      [
        "Marque",
        "Manfrotto"
      ],
      [
        "Modèle",
        "244N, 143N"
      ],
      [
        "Famille",
        "Machinerie / Grip"
      ],
      [
        "Type",
        "Pieds et grip"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/magic-arm-manfrotto244N_01.webp",
      "/images/catalogue/magic-arm-manfrotto-kit143N_02.webp"
    ],
    "alt": "Bras magique Manfrotto 244N - 143N — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Bras%20magique%20Manfrotto%20244N%20-%20143N."
  },
  {
    "slug": "atomos-shogun-inferno",
    "reference": "HAKA-EX-008",
    "number": "008",
    "name": "Atomos Shogun Inferno",
    "brand": "Atomos",
    "model": "Inferno",
    "category": "Régie vidéo",
    "subcategory": "Moniteurs",
    "description": "Moniteur enregistreur Atomos inferno 7”\nAvec cage et support batterie vlock.\nDisques SSD",
    "longDescription": "Le moniteur-enregistreur Atomos Inferno 7” est une solution professionnelle destinée au monitoring et à l’enregistrement vidéo sur le plateau. Son écran de 7 pouces offre une visualisation confortable et précise de l’image, facilitant le contrôle du cadrage, de l’exposition et de la mise au point pendant les prises de vue.\nL’Atomos Inferno combine les fonctions de moniteur et d’enregistreur, permettant de contrôler le signal vidéo tout en enregistrant les rushes sur des supports SSD. Il constitue ainsi un outil polyvalent pour les productions cinéma, télévision, publicité et vidéo professionnelle.\n\nLe moniteur est disponible avec une cage de protection ainsi qu’un support batterie V-Lock, permettant une intégration pratique sur différents rigs et configurations de tournage. Des disques SSD peuvent également être fournis pour l’enregistrement des séquences.\n\nRobuste et polyvalent, l’Atomos Inferno 7” s’intègre facilement dans un environnement de tournage professionnel et offre une solution complète pour le monitoring et l’enregistrement des images.",
    "specs": [
      "Moniteurs",
      "Inferno"
    ],
    "details": [
      [
        "Marque",
        "Atomos"
      ],
      [
        "Modèle",
        "Inferno"
      ],
      [
        "Famille",
        "Régie vidéo"
      ],
      [
        "Type",
        "Moniteurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/shoguninferno_01.webp",
      "/images/catalogue/shoguninferno_02.webp"
    ],
    "alt": "Atomos Shogun Inferno — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Atomos%20Shogun%20Inferno."
  },
  {
    "slug": "cable-bnc-hd-sdi-75",
    "reference": "HAKA-EX-009",
    "number": "009",
    "name": "Câble BNC HD-SDI 75Ω",
    "brand": "",
    "model": "",
    "category": "Régie vidéo",
    "subcategory": "Câbles",
    "description": "Cable BNC avec connecteurs Neutrik\nCompatible 12G 6G 3G SDI 75Ω\nDiverses longueurs de 0,5 à 50m",
    "longDescription": "Câble BNC professionnel équipé de connecteurs Neutrik, conçu pour assurer une transmission fiable et de haute qualité des signaux vidéo numériques SDI.\nCompatible avec les standards 12G-SDI, 6G-SDI et 3G-SDI en 75 Ω, il convient aussi bien aux configurations de tournage qu’aux installations vidéo professionnelles, régies et plateaux.\n\nDisponible dans différentes longueurs, de 0,5 à 50 mètres, il permet de s’adapter facilement aux différentes contraintes d’installation et de distance entre les équipements.\n\nRobuste et fiable, ce câble constitue une solution adaptée au raccordement de caméras, moniteurs, enregistreurs, mélangeurs et autres équipements vidéo professionnels.",
    "specs": [
      "Câbles"
    ],
    "details": [
      [
        "Famille",
        "Régie vidéo"
      ],
      [
        "Type",
        "Câbles"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/cable-bnc_01.webp",
      "/images/catalogue/cable-bnc_02.webp",
      "/images/catalogue/cable-bnc_03.webp"
    ],
    "alt": "Câble BNC HD-SDI 75Ω — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20C%C3%A2ble%20BNC%20HD-SDI%2075%CE%A9."
  },
  {
    "slug": "dji-mavic-3-cine",
    "reference": "HAKA-EX-010",
    "number": "010",
    "name": "DJI Mavic 3 Cine",
    "brand": "DJI",
    "model": "Mavic 3",
    "category": "Caméra",
    "subcategory": "Autre",
    "description": "Le DJI Mavic 3 est un drone professionnel pliable équipé d’une caméra Hasselblad 4/3 CMOS 20 MP, capable de filmer jusqu’en 5.1K. Il offre jusqu’à 46 min d’autonomie, une nacelle 3 axes, une détection d’obstacles omnidirectionnelle et une transmission vidéo longue portée.",
    "longDescription": "Le DJI Mavic 3 est un drone professionnel compact et pliable, conçu pour la réalisation de prises de vues aériennes en photo et vidéo. Il embarque une caméra Hasselblad 4/3 CMOS de 20 MP, avec objectif équivalent 24 mm, ouverture variable f/2.8 à f/11 et stabilisation sur nacelle 3 axes.\nIl permet l’enregistrement vidéo jusqu’en 5.1K à 50 i/s et en 4K jusqu’à 120 i/s, en H.264/H.265, avec un débit maximal de 200 Mb/s. Les photos peuvent être enregistrées en JPEG ou DNG (RAW). Le Mavic 3 dispose également d’un second téléobjectif permettant des prises de vues à distance.\n\nCôté vol, il offre jusqu’à 46 minutes d’autonomie, une vitesse maximale de 21 m/s (limitée à 19 m/s dans l’UE), une résistance au vent jusqu’à 12 m/s et un système de détection d’obstacles omnidirectionnel avec APAS 5.0 et retour automatique avancé (RTH).\n\nLa transmission vidéo DJI O3+ permet une liaison jusqu’à 15 km dans les conditions prévues par le fabricant. Le drone pèse 895 g, dispose de 8 Go de stockage interne et fonctionne avec l’application DJI Fly",
    "specs": [
      "Autre",
      "Mavic 3"
    ],
    "details": [
      [
        "Marque",
        "DJI"
      ],
      [
        "Modèle",
        "Mavic 3"
      ],
      [
        "Famille",
        "Caméra"
      ],
      [
        "Type",
        "Autre"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/dji-mavic-3-cine_01.webp",
      "/images/catalogue/dji-mavic-3-cine_02.webp",
      "/images/catalogue/dji-mavic-3-cine_03.webp",
      "/images/catalogue/dji-mavic-3-cine_04.webp"
    ],
    "alt": "DJI Mavic 3 Cine — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20DJI%20Mavic%203%20Cine."
  },
  {
    "slug": "dji-ronin-rs2-pro-combo",
    "reference": "HAKA-EX-011",
    "number": "011",
    "name": "DJI Ronin RS2 Pro Combo",
    "brand": "DJI",
    "model": "RS2 Pro Combo",
    "category": "Machinerie / Grip",
    "subcategory": "Stabilisateurs",
    "description": "Stabilisateur 3 axes professionnel avec transmetteur vidéo RavenEye 1080p, moteur de mise au point et accessoires complets. Charge max 4,5 kg, écran tactile 1,4\", autonomie 12h.",
    "longDescription": "Le DJI Ronin RS2 Pro Combo est un stabilisateur 3 axes conçu pour les professionnels de l'image, offrant une stabilisation fluide grâce à l'algorithme DJI Titan et au mode SuperSmooth pour les téléobjectifs (jusqu'à 100mm). Sa construction en fibre de carbone monocoque le rend environ 25% plus léger que son prédécesseur, le Ronin-S.\nLe pack Pro Combo inclut le système de transmission d'image RavenEye (portée ~100m, latence 50ms, résolution 1080p), un moteur de mise au point automatique, un support pour smartphone, deux engrenages de mise au point ainsi que trois câbles HDMI, pour un workflow complet sur le plateau.\nCaractéristiques techniques :\nCharge utile maximale : 4,5 kg (10 lb)\nPoids du gimbal : ~1,3 kg\nÉcran tactile couleur : 1,4\"\nAutonomie : jusqu'à 12h (batterie BG30)\nCharge rapide : USB-C PD 24W (recharge complète en ~1h30)\nPorts RSA x2 (montage NATO) pour accessoires\nCompatibilité caméras : Blackmagic Pocket 6K, Canon 1D X Mark III, Sony a7S III, ARRI ALEXA Mini LF, et autres boîtiers mirrorless/reflex\nSystème de fixation : Manfrotto / Arca-Swiss double couche\nFonctions créatives : Time Tunnel, Track, time-lapse, hyperlapse, ActiveTrack 3.0\nIdéal pour les vidéastes et photographes recherchant une solution de stabilisation complète, légère et évolutive.",
    "specs": [
      "Stabilisateurs",
      "RS2 Pro Combo"
    ],
    "details": [
      [
        "Marque",
        "DJI"
      ],
      [
        "Modèle",
        "RS2 Pro Combo"
      ],
      [
        "Famille",
        "Machinerie / Grip"
      ],
      [
        "Type",
        "Stabilisateurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/dji-ronin-rs2procombo_01.webp",
      "/images/catalogue/dji-ronin-rs2procombo_02.webp",
      "/images/catalogue/dji-ronin-rs2procombo_03.webp"
    ],
    "alt": "DJI Ronin RS2 Pro Combo — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20DJI%20Ronin%20RS2%20Pro%20Combo."
  },
  {
    "slug": "prompter-datavideo-tp300",
    "reference": "HAKA-EX-013",
    "number": "013",
    "name": "Prompter Datavideo TP300",
    "brand": "Datavideo",
    "model": "TP300",
    "category": "Caméra",
    "subcategory": "Prompteurs",
    "description": "Prompteur pour tablette (iPad/Android), glace 60/40 sans teinte, compatible tablettes 110–210mm de large. Application dvPrompter Plus, contrôle filaire/Bluetooth.",
    "longDescription": "Le Datavideo TP-300 est un prompteur compact conçu pour transformer une tablette en solution de télésouffleur professionnelle, adapté aussi bien au studio vidéo qu'au plateau de théâtre. Les scripts ou notes sont préparés facilement via l'application dvPrompter (iOS/Android), puis défilent à vitesse automatique réglable ou pilotés manuellement à l'aide d'une télécommande.\nSon système de fixation permet une installation rapide sur la plupart des caméras et supports, avec une glace beam-splitter 60/40 en verre à faible teneur en fer, garantissant une image sans teinte parasite pour le talent comme pour l'objectif.\nCaractéristiques techniques :\nCompatibilité tablette : largeur 110 mm à 210 mm (portrait) — iPad 10\" ou équivalent Android\nGlace : beam-splitter 60/40, verre miroir low-iron (sans teinte)\nApplication : dvPrompter Plus (scripts, playlists, marqueurs de pause)\nContrôle à distance : télécommande WR-500 (filaire ou Bluetooth) — pause/reprise, vitesse, taille de police, changement de script\nContrôle réseau : pilotage via navigateur web (IP)\nMontage : système de fixation universel, compatible caméras et trépieds\nÉtui de transport rigide disponible en option\nUne solution simple, légère et économique pour les interviews, présentations et tournages nécessitant un défilement de texte fiable, sans dépendre d'un moniteur dédié.",
    "specs": [
      "Prompteurs",
      "TP300"
    ],
    "details": [
      [
        "Marque",
        "Datavideo"
      ],
      [
        "Modèle",
        "TP300"
      ],
      [
        "Famille",
        "Caméra"
      ],
      [
        "Type",
        "Prompteurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/prompter-datavideo-tp300b_01.webp",
      "/images/catalogue/prompter-datavideo-tp300b_02.webp",
      "/images/catalogue/prompter-datavideo-tp300b_03.webp"
    ],
    "alt": "Prompter Datavideo TP300 — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Prompter%20Datavideo%20TP300."
  },
  {
    "slug": "orca-or-75",
    "reference": "HAKA-EX-014",
    "number": "014",
    "name": "Orca OR-75",
    "brand": "Orca",
    "model": "OR-75",
    "category": "Accessoires",
    "subcategory": "Autre",
    "description": "Sac à roulettes grand format pour trépieds ENG/EFP jusqu'à 104 cm. Cadre nid d'abeille, fond renforcé, poches accessoires.",
    "longDescription": "Le Orca OR-75 est un sac à roulettes grand format conçu pour le transport et la protection de trépieds professionnels ENG et EFP de forte capacité. Sa structure nid d'abeille (Honeycomb) combinée à un fond renforcé par injection plastique protège l'équipement sur toutes ses faces, aussi bien en déplacement que sur le terrain.\nÀ l'intérieur, un repère de positionnement (« head mark ») assure un rangement correct du trépied, maintenu par des sangles en webbing. Une poche zippée intérieure accueille une poignée supplémentaire ou une platine caméra, tandis qu'un revêtement anti-friction protège la doublure des éléments tranchants du trépied.\nCaractéristiques techniques :\nType : sac de transport grand format pour trépied vidéo\nLongueur max. compatible : 104 cm (40,9\")\nProtection : cadre nid d'abeille + fond injecté renforcé\nMobilité : roulettes skate robustes, poignées de transport\nRangement externe : grande poche accessoires\nFixation : 2 boucles externes pour bandoulière (vendue séparément)\nRangement interne : sangles de maintien, poche zippée, repère de positionnement, revêtement anti-friction\nCompatible avec la plupart des trépieds lourds du marché (Sachtler DV8/DV12/DV15, Vinten Vision, Miller Solo DV, Cartoni, Libec RT40RB, Camgear V15P/V20P, entre autres).\nUne solution robuste et pratique pour le transport sécurisé de trépieds professionnels en tournage ou en déplacement.",
    "specs": [
      "Autre",
      "OR-75"
    ],
    "details": [
      [
        "Marque",
        "Orca"
      ],
      [
        "Modèle",
        "OR-75"
      ],
      [
        "Famille",
        "Accessoires"
      ],
      [
        "Type",
        "Autre"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/orca-or75_01.webp",
      "/images/catalogue/orca-or75_02.webp",
      "/images/catalogue/orca-or75_03.webp"
    ],
    "alt": "Orca OR-75 — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Orca%20OR-75."
  },
  {
    "slug": "hprc-6500w-pelicase",
    "reference": "HAKA-EX-015",
    "number": "015",
    "name": "HPRC 6500W Pelicase",
    "brand": "HPRC",
    "model": "65000W",
    "category": "Accessoires",
    "subcategory": "Autre",
    "description": "Valise pour Trépied — Valise rigide étanche à roulettes, matériau TTX01, certifiée IP67/ATA 300/STANAG 4280. Dimensions externes 1330x335x285mm, 76L, kit trépied intégré.",
    "longDescription": "La HPRC 6500W est une valise rigide à roulettes conçue en Italie pour le transport d'équipements longs et sensibles tels que trépieds, pieds de lumière ou perches. Fabriquée en matériau composite breveté TTX01 (polypropylène, fibre de verre et caoutchouc), elle offre une résistance élevée aux chocs et à l'écrasement tout en restant environ 20% plus légère que les valises concurrentes de même gamme.\nL'étanchéité est assurée par un joint torique en néoprène et une valve de purge automatique qui équilibre la pression interne lors des changements d'altitude. Les coins renforcés et les loquets à double étage garantissent une fermeture sécurisée même en cas de chute. Cette version est livrée avec un kit intérieur dédié trépied, avec doublure souple anti-rayures et sangles de maintien.\nCaractéristiques techniques :\nMatériau : TTX01 (polypropylène + fibre de verre + caoutchouc)\nDimensions externes : 1330 x 335 x 285 mm\nDimensions internes : 1281 x 279 x 243 mm\nVolume de rangement : 76 litres\nPoids à vide : ~7,2 kg\nÉtanchéité : IP67\nCertifications : ATA 300, STANAG 4280 (norme OTAN)\nPlage de température : -40°C à +80°C\nÉquipement : roulettes intégrées, poignée ergonomique renforcée, valve de purge automatique, 4 loquets\nIntérieur : kit trépied avec sangles de rétention et doublure souple\nUne solution robuste et certifiée pour le transport aérien, terrestre ou maritime de trépieds et équipements longs, avec une protection maximale contre l'eau, la poussière et les impacts.",
    "specs": [
      "Autre",
      "65000W"
    ],
    "details": [
      [
        "Marque",
        "HPRC"
      ],
      [
        "Modèle",
        "65000W"
      ],
      [
        "Famille",
        "Accessoires"
      ],
      [
        "Type",
        "Autre"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/hprc-65000W_01.webp",
      "/images/catalogue/hprc-65000W_02.webp"
    ],
    "alt": "HPRC 6500W Pelicase — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20HPRC%206500W%20Pelicase."
  },
  {
    "slug": "avenger-a0040cs-baby-steel-stand-40",
    "reference": "HAKA-EX-016",
    "number": "016",
    "name": "Avenger A0040CS Baby Steel Stand 40",
    "brand": "Avenger",
    "model": "A0040CS",
    "category": "Lumière",
    "subcategory": "Pieds et grip",
    "description": "Pied de studio en acier chromé, 4 sections, 3 rallonges, jambe de nivellement. Hauteur max 4m, charge max 9kg, embase 5/8\".",
    "longDescription": "L'Avenger A0040CS Baby Steel Stand 40 est un pied d'éclairage robuste en acier chromé, conçu pour les tournages en studio comme en extérieur. Sa colonne mobile est composée de 4 sections et 3 rallonges, avec une jambe de nivellement intégrée qui compense les terrains irréguliers, assurant une stabilité optimale même sur des surfaces inégales.\nL'attache supérieure soudée de 16 mm (5/8\") n'est pas filetée mais accepte une large gamme d'accessoires d'éclairage et de grip. Le pied est équipé de molettes en T à verrouillage captif et de colliers captifs pour des réglages de hauteur rapides et sécurisés.\nCaractéristiques techniques :\nMatériau : acier chromé\nSections : 4 sections, 3 rallonges (risers)\nDiamètre des tubes : 35 / 30 / 25 / 20 mm\nJambe : 20 x 20 mm, avec 1 jambe de nivellement\nHauteur maximale : 400 cm\nHauteur minimale : 142 cm\nLongueur fermée : 124 cm\nDiamètre d'embase (footprint) : 114 cm\nCharge maximale : 9 kg\nPoids : 7,5 – 8 kg\nFixation supérieure : spigot 16 mm / 5/8\" non fileté\nUn pied polyvalent et fiable pour supporter projecteurs, réflecteurs ou accessoires de grip en tournage professionnel.",
    "specs": [
      "Pieds et grip",
      "A0040CS"
    ],
    "details": [
      [
        "Marque",
        "Avenger"
      ],
      [
        "Modèle",
        "A0040CS"
      ],
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Pieds et grip"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/avenger-a0040CS_01.webp",
      "/images/catalogue/avenger-a0040CS_02.webp",
      "/images/catalogue/avenger-a0040CS_03.webp"
    ],
    "alt": "Avenger A0040CS Baby Steel Stand 40 — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Avenger%20A0040CS%20Baby%20Steel%20Stand%2040."
  },
  {
    "slug": "aputure-cob-600x-pro",
    "reference": "HAKA-EX-017",
    "number": "017",
    "name": "Aputure Cob 600x Pro",
    "brand": "Aputure",
    "model": "600X Pro",
    "category": "Lumière",
    "subcategory": "Projecteurs",
    "description": "Projecteur LED COB bi-color 2700K-6500K, 720W, monture Bowens, IRC/TLCI 96. 5 610 lux @ 3m avec réflecteur natif. Résistant aux intempéries.",
    "longDescription": "L'Aputure LS 600x Pro (COB 600X) est un projecteur LED COB bi-color haute puissance, conçu pour rivaliser avec les sources HMI traditionnelles en offrant une luminosité exceptionnelle et un contrôle précis de la couleur. Sa plage de température de couleur variable de 2700K à 6500K, associée à un IRC/TLCI de 96, en fait une source polyvalente aussi bien en intérieur qu'en extérieur.\nLe fixture appartient à la série Light Storm Pro, avec une construction résistante aux intempéries : ventilateurs étanches, structure interne scellée, caches en caoutchouc sur les ports et connecteurs étanches. Le contrôle s'effectue via télécommande 2,4 GHz, application Sidus Link, DMX filaire (5 broches) ou Art-Net/DMX sans fil, avec un gradateur progressif par incréments de 0,1%.\nCaractéristiques techniques :\nType : LED COB bi-color\nMonture : Bowens\nPuissance consommée : 720W\nTempérature de couleur : 2700K – 6500K\nIRC : 96 / TLCI : 98\nÉclairement : 5 610 lux @ 3m (avec réflecteur Hyper-Reflector natif) ; jusqu'à 18 510 lux @ 3m avec lentille Fresnel F10 (spot 15°)\nAlimentation secteur : 100–240V\nAlimentation batterie : V-Mount / Gold Mount, 22V–33,6V (26V/18A ou 28,8V/16A)\nContrôle : télécommande 2,4 GHz, app Sidus Link, DMX filaire/sans fil, Art-Net\nÉtanchéité : résistant à la poussière et à l'eau (câbles et connecteurs étanches)\nAccessoires compatibles : F10 Fresnel, Light Dome III, F10 Barndoor, accessoires tiers Bowens (DoPchoice, Chimera)\nUne source lumineuse professionnelle polyvalente, idéale en key light, fill ou lumière principale de studio, capable de remplacer une HMI 1200W tout en offrant une flexibilité de contrôle et d'alimentation étendue.",
    "specs": [
      "Projecteurs",
      "600X Pro"
    ],
    "details": [
      [
        "Marque",
        "Aputure"
      ],
      [
        "Modèle",
        "600X Pro"
      ],
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Projecteurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/aputure-600xpro_01.webp",
      "/images/catalogue/aputure-600xpro_02.webp",
      "/images/catalogue/aputure-600xpro_03.webp",
      "/images/catalogue/aputure-600xpro_04.webp",
      "/images/catalogue/aputure-600xpro_05.webp",
      "/images/catalogue/aputure-600x-pro_06.webp"
    ],
    "alt": "Aputure Cob 600x Pro — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Aputure%20Cob%20600x%20Pro."
  },
  {
    "slug": "aladdin-30x30-rgb-all-in-one-kit",
    "reference": "HAKA-EX-018",
    "number": "018",
    "name": "Aladdin 30x30 RGB All-in-One Kit",
    "brand": "Aladdin",
    "model": "All in 1 RGB",
    "category": "Lumière",
    "subcategory": "Projecteurs",
    "description": "Panneau LED souple RGB + bi-color, 30x30cm, CRI/TLCI 98, 2900-6200K. Kit complet : support X-Bend, alimentation, diffuseur, câbles, housse de transport.",
    "longDescription": "L'Aladdin ALL IN 1 RGB (30x30) Kit est un panneau LED souple compact combinant trois types de LED (tungstène, daylight et RGB) sur une seule surface tissu, offrant une flexibilité colorimétrique complète pour un encombrement minimal. Idéal comme source d'appoint, effet ou éclairage principal en configuration légère.\nLe kit inclut un support X-Bend rigidifiant le panneau, une alimentation multi-tension, un montage rotule 5/8\", ainsi que les câbles et accessoires nécessaires à une mise en œuvre immédiate. Le contrôle s'effectue via le dimmer intégré, une télécommande sans fil (jusqu'à 10 panneaux), ou l'application mobile iOS/Android avec pilotage par mouvement (accéléromètre).\nCaractéristiques techniques :\nFormat : panneau souple 30x30 cm (1x1')\nType : LED bi-color + RGB\nTempérature de couleur : 2900K – 6200K\nIRC / TLCI : 98\nAngle de diffusion : 140°\nDimmer : intégré, 0-100%\nContrôle : dimmer manuel, télécommande sans fil, app Sidus/Aladdin (motion control, presets couleur personnalisés)\nEffets intégrés : strobe, fade, police/feu, TV, feux d'artifice, flicker, soudure, dissolve\nAlimentation : secteur multi-tension ou batterie (câble D-Tap)\nAccessoires inclus : support X-Bend, montage rotule, câble d'alimentation (~3m), câble D-Tap, diffuseur, pochette batterie, housse de transport\nUne solution compacte et polyvalente pour intégrer un éclairage colorimétrique complet dans des espaces restreints ou des setups nécessitant une grande mobilité.",
    "specs": [
      "Projecteurs",
      "All in 1 RGB"
    ],
    "details": [
      [
        "Marque",
        "Aladdin"
      ],
      [
        "Modèle",
        "All in 1 RGB"
      ],
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Projecteurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/aladdin-allinone_01.webp",
      "/images/catalogue/aladdin-allinone_02.webp",
      "/images/catalogue/aladdin-allinone_03.webp",
      "/images/catalogue/aladdin-allinone_04.webp",
      "/images/catalogue/aladdin-allinone_05.webp"
    ],
    "alt": "Aladdin 30x30 RGB All-in-One Kit — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Aladdin%2030x30%20RGB%20All-in-One%20Kit."
  },
  {
    "slug": "c-stand",
    "reference": "HAKA-EX-020",
    "number": "020",
    "name": "C-Stand",
    "brand": "",
    "model": "",
    "category": "Machinerie / Grip",
    "subcategory": "Trépieds",
    "description": "Pied de grip standard studio, base tournante (turtle base), tête grip, bras de 40\". Hauteur ajustable, charge robuste pour accessoires et lumières.",
    "longDescription": "Le C-Stand (ou « Century Stand ») est un pied de grip incontournable sur les plateaux de tournage, utilisé pour supporter drapeaux, réflecteurs, panneaux de diffusion, petites lumières et accessoires divers. Sa base tripode articulée (« turtle base ») permet un rangement compact et une stabilité optimale même à proximité d'autres pieds ou de meubles, grâce à ses jambes de hauteurs échelonnées.\nLe système repose sur une tête grip pivotante à double axe, permettant de positionner un bras dans presque n'importe quel angle, complété par un bras grip de 40\" (gobo arm) réglable en longueur.\nCaractéristiques techniques (format standard \"40\") :\nType : pied de grip 3 sections\nBase : turtle base articulée (jambes décalées pour empilement)\nHauteur maximale : env. 3,5 – 3,7 m (11-12 ft)\nHauteur minimale : env. 1 m (3,3 ft)\nTête : grip head double pivot, serrage sans outil\nBras : gobo arm de 40\" (102 cm), extrémité filetée 5/8\"\nFixation : spigot 5/8\" (baby pin)\nMatériau : acier (versions standard) ou aluminium (versions allégées)\nCharge : variable selon le modèle, généralement 5–15 kg en extrémité de bras\nUn accessoire de grip polyvalent et indispensable, utilisé aussi bien pour maintenir des accessoires d'éclairage que pour fixer drapeaux, polystyrènes ou petits moniteurs sur le plateau.",
    "specs": [
      "Trépieds"
    ],
    "details": [
      [
        "Famille",
        "Machinerie / Grip"
      ],
      [
        "Type",
        "Trépieds"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/cstand_01.webp",
      "/images/catalogue/cstand_02.webp",
      "/images/catalogue/cstand_03.webp"
    ],
    "alt": "C-Stand — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20C-Stand."
  },
  {
    "slug": "avenger-d200",
    "reference": "HAKA-EX-021",
    "number": "021",
    "name": "Avenger D200",
    "brand": "Avenger",
    "model": "D200",
    "category": "Machinerie / Grip",
    "subcategory": "Pieds et grip",
    "description": "Rotule grip standard pour C-Stand, disque de frein type automobile, réception baby 5/8\". Aluminium, 0,55 kg.",
    "longDescription": "L'Avenger D200 est la tête grip de référence sur les plateaux de tournage, conçue pour maintenir bras, drapeaux, scrims, floppies et cutters dans une multitude de positions. Sa force réside dans son mécanisme de verrouillage : un disque de frein qualité automobile, non glissant, associé à une série de rondelles offrant un couple de serrage supérieur à celui des têtes grip classiques.\nLa poignée en T aluminium, dotée d'un capuchon caoutchouté T-Top antidérapant, permet un serrage puissant et précis même à main nue. Un second trou M10 permet d'accueillir une poignée de verrouillage additionnelle pour d'autres types de spigots lorsqu'un C-Stand n'est pas disponible.\nCaractéristiques techniques :\nDiamètre : 2,5\" (6,35 cm)\nFixation supérieure : réception baby 5/8\" (16 mm)\nMatériau : aluminium\nCouleur : argent (version D200) ou noir (D200B)\nDimensions (L x H x P) : 18 x 6 x 9 cm\nPoids : 0,55 kg\nTrou secondaire : M10 pour poignée de verrouillage additionnelle\nCompatibilité : C-Stands (Avenger et autres), Super Clamp (avec pin E600)\nUn accessoire grip indispensable et increvable, présent sur la quasi-totalité des plateaux de tournage pour la fixation d'accessoires légers à moyens sur C-Stand.",
    "specs": [
      "Pieds et grip",
      "D200"
    ],
    "details": [
      [
        "Marque",
        "Avenger"
      ],
      [
        "Modèle",
        "D200"
      ],
      [
        "Famille",
        "Machinerie / Grip"
      ],
      [
        "Type",
        "Pieds et grip"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/rotule-avenger_01.webp"
    ],
    "alt": "Avenger D200 — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Avenger%20D200."
  },
  {
    "slug": "prolongateurs-16a-etanche",
    "reference": "HAKA-EX-022",
    "number": "022",
    "name": "Prolongateurs 16A étanche",
    "brand": "",
    "model": "",
    "category": "Lumière",
    "subcategory": "Câbles",
    "description": "Câbles d'extension robustes, résistants à la surchauffe, protection IP44 contre les corps étrangers et projections d'eau. Idéal usage extérieur et plateau.",
    "longDescription": "Les Rallonges électriques (Prolongateurs) sont conçues pour l'alimentation fiable et sécurisée des équipements sur le plateau, en studio comme en extérieur. Leur construction robuste garantit une résistance à la surchauffe, un point essentiel lors d'un usage prolongé avec des charges électriques importantes (éclairage, régies, etc.).\nGrâce à leur indice de protection IP44, ces rallonges sont protégées contre la pénétration de corps étrangers solides de plus de 1 mm ainsi que contre les projections d'eau venant de toutes directions, ce qui les rend adaptées aux tournages en extérieur ou dans des environnements humides.\nCaractéristiques techniques :\nProtection thermique : résistance à la surchauffe\nIndice de protection : IP44 (corps étrangers ≥1mm + éclaboussures d'eau)\nUsage : intérieur et extérieur\nApplication : alimentation d'équipements de tournage (éclairage, caméras, régie, etc.)\nUne solution fiable et sécurisée pour la distribution électrique sur le plateau, quelles que soient les conditions climatiques.",
    "specs": [
      "Câbles"
    ],
    "details": [
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Câbles"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/prolongateurs_01.webp",
      "/images/catalogue/prolongateur_02.webp",
      "/images/catalogue/prolongateur_03.webp"
    ],
    "alt": "Prolongateurs 16A étanche — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Prolongateurs%2016A%20%C3%A9tanche."
  },
  {
    "slug": "falcon-eyes-68-tdx-ii",
    "reference": "HAKA-EX-023",
    "number": "023",
    "name": "Falcon Eyes 68 TDX II",
    "brand": "Falcon Eyes",
    "model": "68TDX II",
    "category": "Lumière",
    "subcategory": "Projecteurs",
    "description": "Panneau LED souple bi-color rond \"Sophiez\" 68W, 3000-5600K, IRC 95,5, 9 effets spéciaux, contrôle DMX (TDX).",
    "longDescription": "Le Falcon Eyes SO-68TDX II appartient à la série Sophiez, reconnaissable à son design circulaire en forme de miroir, conçu pour offrir une lumière extrêmement douce sans nécessiter de modificateur additionnel. Idéal pour le portrait, la mode, le vlogging et les selfies, il produit des catchlights naturels et flatteurs dans le regard du sujet.\nLe fixture intègre un système de contrôle TDX (DMX) permettant le pilotage synchronisé de plusieurs unités depuis une console ou un contrôleur, ainsi qu'une télécommande 2,4G en option. Neuf effets spéciaux sont proposés : éclairs (2 types), écran TV, bougie, flash paparazzi, stroboscope, phares haut/bas, double flash et respiration chaude.\nCaractéristiques techniques :\nModèle : SO-68TDX II (série Sophiez)\nNombre de LED : 360\nPuissance : 68W\nTempérature de couleur : 3000K – 5600K, réglage progressif (stepless)\nIRC / TLCI : 95,5\nAngle de diffusion : 65°\nÉclairement (LUX) : 5920 @ 0,5m / 1660 @ 1m / 467 @ 2m (à 5600K)\nAlimentation : adaptateur secteur 100-240V AC, 15V/7A DC\nAlimentation batterie : plaque NP-F ou V-Mount (batterie NP-970 Falcon Eyes recommandée)\nContrôle : DMX intégré, molette de gradation 0-100%, télécommande 2,4G en option\nPoids net : ~4,1 kg\nAccessoires inclus : sac de transport, support/bracket, adaptateur secteur\nUne source de lumière douce et polyvalente, particulièrement adaptée aux tournages de portrait et de contenu créateur, avec une grande flexibilité de contrôle grâce à son système DMX.",
    "specs": [
      "Projecteurs",
      "68TDX II"
    ],
    "details": [
      [
        "Marque",
        "Falcon Eyes"
      ],
      [
        "Modèle",
        "68TDX II"
      ],
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Projecteurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/falconeyes-68tdx2_01.webp",
      "/images/catalogue/falconeyes-68tdx2_02.webp",
      "/images/catalogue/falconeyes-68tdx2_03.webp"
    ],
    "alt": "Falcon Eyes 68 TDX II — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Falcon%20Eyes%2068%20TDX%20II."
  },
  {
    "slug": "manfrotto-035-super-clamp",
    "reference": "HAKA-EX-024",
    "number": "024",
    "name": "Manfrotto 035 Super Clamp",
    "brand": "Manfrotto",
    "model": "",
    "category": "Machinerie / Grip",
    "subcategory": "Pieds et grip",
    "description": "Pince universelle en aluminium, serrage 13-55mm, capacité de charge 15 kg, réception 5/8\", certification TÜV",
    "longDescription": "Le Manfrotto 035 Super Clamp est une pince universelle indispensable en tournage et en studio, capable de maintenir une grande variété d'accessoires : lumières, caméras, parapluies, crochets, étagères, plaques de verre, barres transversales, ou même d'autres Super Clamps. Fabriquée en alliage moulé léger, elle offre une prise robuste tout en restant maniable.\nSon levier ergonomique permet un verrouillage rapide et sécurisé, avec une certification de sécurité TÜV attestant de sa fiabilité. La pince se fixe sur tubes ronds de 13 à 55 mm, ou sur surfaces plates grâce à une cale amovible incluse. Un raccord fileté intégré accepte plus de 30 accessoires compatibles (têtes, bras, pinces additionnelles).\nCaractéristiques techniques :\nMatériau : aluminium moulé\nPlage de serrage : 13 mm à 55 mm (tube rond)\nCale plate incluse pour surfaces planes\nCharge maximale : 15 kg\nRéception : douille hexagonale 16mm / 5/8\"\nFiletage additionnel : M6 x 1\nPoids : 0,41 kg\nCertification : TÜV\nCouleur : noir\nUn accessoire polyvalent et increvable, présent dans quasiment tous les kits de grip pour fixer rapidement et solidement du matériel sur des tubes, poteaux, portes ou structures diverses.",
    "specs": [
      "Pieds et grip"
    ],
    "details": [
      [
        "Marque",
        "Manfrotto"
      ],
      [
        "Famille",
        "Machinerie / Grip"
      ],
      [
        "Type",
        "Pieds et grip"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/manfrotto-superclamp_01.webp",
      "/images/catalogue/manfrotto-superclamp_02.webp"
    ],
    "alt": "Manfrotto 035 Super Clamp — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Manfrotto%20035%20Super%20Clamp."
  },
  {
    "slug": "bras-de-deport-avenger",
    "reference": "HAKA-EX-025",
    "number": "025",
    "name": "Bras de déport Avenger",
    "brand": "Avenger",
    "model": "",
    "category": "Machinerie / Grip",
    "subcategory": "Pieds et grip",
    "description": "Bras d'extension chromé 51cm et 1m, tête grip fixe intégrée, pour scrims, flags et petites lumières. Utilisé avec C-Stand et tête grip D200",
    "longDescription": "L'Avenger D500 est un bras de déport (extension arm) incontournable en grip, permettant d'obtenir un point de fixation étendu depuis un C-Stand. Généralement utilisé en combinaison avec une tête grip D200, il facilite le positionnement de scrims, drapeaux, floppies ou petites sources lumineuses à distance du pied.\nLe bras intègre à son extrémité une tête grip fixe en aluminium, équipée de disques de frein qualité automobile pour une prise sûre et non glissante, avec des trous ronds de différents diamètres (6,4 / 9,5 / 12,7 / 16 mm) pour s'adapter à divers accessoires.\nCaractéristiques techniques :\nLongueur du bras : 51 cm (20\"), 100cm (40\")\nMatériau : acier chromé + alliage aluminium (tête)\nTête grip fixe : diamètre 2,5\" (6,35 cm)\nTrous de la tête grip : 6,4 / 9,5 / 12,7 / 16 mm\nVerrouillage : disques de frein type automobile\nPoids : ~0,83 – 1,35 kg (selon version)\nCompatible avec : C-Stands Avenger et autres, tête grip D200\nDisponible en argent (D500) ou noir (D500B/D500LB)\nUn outil de grip essentiel et polyvalent, permettant d'étendre la portée d'un C-Stand pour positionner avec précision drapeaux, réflecteurs ou petites lumières sur le plateau.",
    "specs": [
      "Pieds et grip"
    ],
    "details": [
      [
        "Marque",
        "Avenger"
      ],
      [
        "Famille",
        "Machinerie / Grip"
      ],
      [
        "Type",
        "Pieds et grip"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/bras-deport-avenger_01"
    ],
    "alt": "Bras de déport Avenger — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Bras%20de%20d%C3%A9port%20Avenger."
  },
  {
    "slug": "bebob-v45-micro-v-lock",
    "reference": "HAKA-EX-030",
    "number": "030",
    "name": "Bebob V45 Micro V-Lock",
    "brand": "Bebob",
    "model": "Micro 45",
    "category": "Énergie & câbles",
    "subcategory": "Batteries",
    "description": "Batterie Li-Ion compacte 14,4V / 43Wh, décharge max 10A, Twist D-Tap + USB, communication caméra ARRI/RED/Sony. Poids 0,33 kg.",
    "longDescription": "La Bebob V45 Micro V-Mount est une batterie Li-Ion ultra-compacte, conçue pour offrir des performances élevées malgré un format réduit — l'une des plus petites batteries V-Mount du marché. Ses cellules lithium-ion trimix fabriquées au Japon permettent un courant de décharge maximal de 10A, la rendant compatible avec la plupart des caméras et accessoires du plateau, y compris les configurations gimbal grâce à son format \"micro\" léger.\nSa construction modulaire permet le remplacement des pièces mécaniques en cas de casse, et Bebob propose un service de re-cellage lorsque la capacité diminue avec l'âge — un système d'alerte LED (jaune sous 80%, rouge sous 60%) informe l'utilisateur de l'état de santé de la batterie.\nCaractéristiques techniques :\nType : Li-Ion V-Mount (trimix, cellules made in Japan)\nTension / Capacité : 14,4V / 3,0Ah / 43Wh\nCourant de décharge max : 10A\nSorties : Twist D-Tap (double, orientable gauche/droite) + port USB\nCommunication caméra : ARRI, RED, Sony\nIndicateur : jauge LED 5 niveaux + alerte d'état de santé (SOH)\nRésistance aux chutes : jusqu'à 1,5m (4,9 ft)\nFonction supplémentaire : lampe torche LED intégrée\nDimensions : 75 x 101 x 32 mm\nPoids : 0,33 kg\nCompatible chargeurs : Bebob, IDX, Sony\nUne batterie compacte et robuste, idéale pour les configurations légères (gimbal, caméras compactes) sans compromis sur la fiabilité et la puissance de décharge.",
    "specs": [
      "Batteries",
      "Micro 45"
    ],
    "details": [
      [
        "Marque",
        "Bebob"
      ],
      [
        "Modèle",
        "Micro 45"
      ],
      [
        "Famille",
        "Énergie & câbles"
      ],
      [
        "Type",
        "Batteries"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/bebob-micro-vlock45_01.webp",
      "/images/catalogue/bebob-micro-vlock45_02.webp",
      "/images/catalogue/bebob-micro-vlock45_03.webp"
    ],
    "alt": "Bebob V45 Micro V-Lock — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Bebob%20V45%20Micro%20V-Lock."
  },
  {
    "slug": "bebob-micro-v-lock-98",
    "reference": "HAKA-EX-031",
    "number": "031",
    "name": "Bebob Micro V-Lock 98",
    "brand": "Bebob",
    "model": "Micro 98",
    "category": "Énergie & câbles",
    "subcategory": "Chargeurs",
    "description": "Batterie V-Mount compacte 14,4V/98Wh, format micro léger, sortie Twist D-Tap + USB, décharge max 10A.",
    "longDescription": "La Bebob V98 Micro (V-Lock) est une batterie V-Mount ultra-compacte, spécialement conçue pour les usages nécessitant un encombrement et un poids minimal, notamment les configurations gimbal et setups légers. Malgré son format réduit, elle conserve la robustesse caractéristique des batteries Bebob, capable de résister à des chutes de 1,5 m (4,9 ft).\nElle intègre le connecteur signature Twist D-Tap de Bebob, une prise étanche à 3 broches permettant de brancher le câble D-Tap dans les deux sens (pôle positif central, négatif de chaque côté), ainsi qu'un port USB pour recharger smartphones et tablettes directement sur le plateau. Un système d'alarme d'état (LED jaune sous 80% de capacité, rouge sous 60%) informe l'utilisateur du besoin éventuel de \"re-cell\" (remplacement des cellules par le fabricant, à prix réduit).\nCaractéristiques techniques :\nTension / Capacité : 14,4V / 98Wh (6,8Ah)\nDécharge max : 10A\nDimensions : 75 x 101 x 48 mm\nPoids : 0,63 kg\nSorties : Twist D-Tap + USB (5V/1A)\nIndicateur : jauge LED 5 niveaux\nRésistance : chute jusqu'à 1,5m\nCharge : compatible chargeurs Bebob VS2/VS4, Anton Bauer, IDX, Sony (~2h avec chargeur Bebob)\nCommunication caméra : ARRI, RED, Sony\nCellules : lithium-ion, fabrication Japon\nConception modulaire : composants mécaniques remplaçables, re-cellable en usine\nUne batterie compacte et fiable, idéale pour l'alimentation de caméras cinéma en configuration allégée (gimbal, drone, run & gun) sans compromis sur la robustesse ou l'autonomie.",
    "specs": [
      "Chargeurs",
      "Micro 98"
    ],
    "details": [
      [
        "Marque",
        "Bebob"
      ],
      [
        "Modèle",
        "Micro 98"
      ],
      [
        "Famille",
        "Énergie & câbles"
      ],
      [
        "Type",
        "Chargeurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/bebob-micro-vlock98_01.webp",
      "/images/catalogue/bebob-micro-vlock98_02.webp",
      "/images/catalogue/bebob-micro-vlock98_03.webp"
    ],
    "alt": "Bebob Micro V-Lock 98 — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Bebob%20Micro%20V-Lock%2098."
  },
  {
    "slug": "charger-bebob-vs4-micro",
    "reference": "HAKA-EX-032",
    "number": "032",
    "name": "Charger Bebob VS4 Micro",
    "brand": "Bebob",
    "model": "Micro VS4",
    "category": "Accessoires",
    "subcategory": "Chargeurs",
    "description": "Chargeur 4 canaux simultanés pour batteries V-Micro, sortie DC 16,5V/5A (XLR4), alimentation AC intégrée 80W, 1,0 kg.",
    "longDescription": "Le Bebob VS4 Micro est un chargeur compact permettant de recharger jusqu'à 4 batteries V-Micro simultanément, avec une alimentation secteur intégrée éliminant le besoin de bloc d'alimentation externe. Compatible avec les batteries Bebob, IDX et Sony au format V-Micro (et V-Mount via adaptateur), il constitue une solution de charge rapide et portable idéale pour les tournages avec gimbal ou setups légers utilisant plusieurs batteries compactes.\nChaque canal dispose d'un indicateur d'état lumineux facilitant le suivi du processus de charge : vert (aucune batterie / charge terminée), rouge (charge en cours), jaune (anomalie ou défaut de sécurité détecté sur la batterie).\nCaractéristiques techniques :\nInterface : V-Micro (4 canaux simultanés)\nSortie DC : 16,5V / 5,0A (via port XLR 4 broches, 1- / 4+)\nCourant de charge : 16,8V / 1,25A par canal\nAlimentation AC intégrée : 80W, entrée 90-264V / 47-63Hz\nPoids : 1,0 kg\nFormat : compact et portable, faible encombrement\nCompatibilité : batteries Bebob, IDX, Sony (V-Micro, V-Mount, V-Cine)\nUn chargeur pratique et rapide, particulièrement adapté aux productions utilisant plusieurs batteries de petit format sur des configurations gimbal, drone ou setups légers nécessitant une rotation rapide d'alimentation.",
    "specs": [
      "Chargeurs",
      "Micro VS4"
    ],
    "details": [
      [
        "Marque",
        "Bebob"
      ],
      [
        "Modèle",
        "Micro VS4"
      ],
      [
        "Famille",
        "Accessoires"
      ],
      [
        "Type",
        "Chargeurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/charger-bebobmicro-vs4_01.webp",
      "/images/catalogue/charger-bebobmicro-vs4_02.webp"
    ],
    "alt": "Charger Bebob VS4 Micro — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Charger%20Bebob%20VS4%20Micro."
  },
  {
    "slug": "bebob-vmf-vmicro2-plate-double-hotswap",
    "reference": "HAKA-EX-033",
    "number": "033",
    "name": "Bebob VMF-Vmicro2 Plate – Double Hotswap",
    "brand": "Bebob",
    "model": "VMF-VMicro2",
    "category": "Accessoires",
    "subcategory": "Batteries",
    "description": "Plaque adaptatrice 2 slots V-Micro, changement de batterie sans coupure, largeur 82mm, jauge LED double face.",
    "longDescription": "La Bebob Double Hotswap Vmicro Plate (VMF-Vmicro2) est une plaque adaptatrice compacte permettant d'alimenter une caméra, une lumière ou tout équipement V-Mount à partir de deux batteries V-Micro simultanément. Son système hot-swap permet de retirer et remplacer une batterie déchargée sans interruption d'alimentation ni redémarrage de l'appareil connecté, garantissant une continuité de tournage sans coupure.\nChaque emplacement batterie dispose de sa propre jauge LED 5 niveaux, visible des deux côtés de la plaque, permettant de contrôler indépendamment le niveau de charge de chaque batterie, y compris depuis l'autre côté de la caméra. Le fabricant recommande d'insérer la seconde batterie environ 10 minutes après la première pour une gestion optimale du swap.\nCaractéristiques techniques :\nCompatibilité : batteries V-Micro (2 emplacements)\nLargeur : 82 mm\nFonction : hot-swap (changement de batterie sans coupure)\nCharge supportée : 16A (2 slots)\nSortie D-Tap : non régulée, 11-17 VDC, jusqu'à 5A\nJauge : 2x indicateur LED 5 niveaux (un par baie, visible des deux faces)\nFixation : monture V-Mount standard (côté caméra)\nConnecteur : Twist D-Tap (câblage libre gauche/droite)\nUne solution pratique pour les tournages longue durée exigeant une alimentation continue, en éliminant les temps morts liés au changement de batterie sur caméra, gimbal ou éclairage.",
    "specs": [
      "Batteries",
      "VMF-VMicro2"
    ],
    "details": [
      [
        "Marque",
        "Bebob"
      ],
      [
        "Modèle",
        "VMF-VMicro2"
      ],
      [
        "Famille",
        "Accessoires"
      ],
      [
        "Type",
        "Batteries"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/bebob-hotswap-vmicro2_01.webp",
      "/images/catalogue/bebob-hotswap-vmicro2_02.webp"
    ],
    "alt": "Bebob VMF-Vmicro2 Plate – Double Hotswap — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Bebob%20VMF-Vmicro2%20Plate%20%E2%80%93%20Double%20Hotswap."
  },
  {
    "slug": "tilta-nucleus-m-full-kit",
    "reference": "HAKA-EX-034",
    "number": "034",
    "name": "Tilta Nucleus-M Full Kit",
    "brand": "Tilta",
    "model": "Nucleus M1",
    "category": "Optiques",
    "subcategory": "Follow focus",
    "description": "Système FIZ sans fil 3 canaux, 2 moteurs, portée 1000ft (305m), couple 2,5N·m, valise rigide incluse.",
    "longDescription": "Le Tilta Nucleus-M Full Kit est un système de contrôle d'objectif sans fil à 3 canaux (Focus, Iris, Zoom), offrant un contrôle complet depuis la unité FIZ ou les deux poignées sans fil, avec possibilité de répartir librement les canaux entre les deux modes de contrôle. Chaque moteur intègre son propre récepteur sans fil, éliminant le besoin d'un MDR séparé sur le rig, pour un montage plus compact et rapide.\nLes moteurs se fixent sur tiges de 19mm ou 15mm (bushings de réduction inclus) via un système de serrage rapide, permettant de les monter ou démonter sans retirer les autres accessoires du rig. Chaque moteur dispose d'un engrenage cinéma standard 0.8 MOD et se calibre automatiquement (ou manuellement pour les optiques sans butées dures). L'alimentation se fait en chaîne depuis un seul port caméra via câble P-Tap puis câbles 7 broches entre moteurs.\nCaractéristiques techniques :\nCanaux : 3 (Focus / Iris / Zoom)\nPortée sans fil : jusqu'à 1000 ft (305m) / version étendue jusqu'à 1640 ft (500m)\nCouple moteur : 2,5 N·m @ 14,8V\nEngrenage : 0.8 MOD, 35 dents, 32 pitch (standard cinéma)\nFixation moteur : tiges 19mm ou 15mm (bushings inclus)\nAlimentation : P-Tap + daisy-chain 7 broches entre moteurs\nContrôleur : unité FIZ (Master/Slave) + 2 poignées sans fil (dont une avec molette zoom)\nAlimentation contrôleurs : 2x piles 18650 rechargeables (non incluses), autonomie jusqu'à 2 jours\nConstruction : alliage aluminium et acier inoxydable\nMoteur sans jeu (backlash-free) pour une précision de mise au point optimale\nRangement : valise de transport rigide incluse\nUn système de follow focus sans fil complet et fiable, référence dans sa gamme de prix, idéal pour les configurations caméra à l'épaule, sur pied, gimbal ou véhicule nécessitant un contrôle précis à distance.",
    "specs": [
      "Follow focus",
      "Nucleus M1"
    ],
    "details": [
      [
        "Marque",
        "Tilta"
      ],
      [
        "Modèle",
        "Nucleus M1"
      ],
      [
        "Famille",
        "Optiques"
      ],
      [
        "Type",
        "Follow focus"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/tilta-nucleus-M_01.webp",
      "/images/catalogue/tilta-nucleus-M_02.webp",
      "/images/catalogue/tilta-nucleus-M_03.webp"
    ],
    "alt": "Tilta Nucleus-M Full Kit — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Tilta%20Nucleus-M%20Full%20Kit."
  },
  {
    "slug": "shape-double-quick-handle-arri-rosette",
    "reference": "HAKA-EX-035",
    "number": "035",
    "name": "Shape Double-Quick Handle ARRI Rosette",
    "brand": "Shape",
    "model": "HAND2S",
    "category": "Caméra",
    "subcategory": "Autre",
    "description": "Poignée articulée pour rosette ARRI, 3 points d'articulation (2 push-button, 1 rochet), aluminium anodisé. Poids 0,08 kg",
    "longDescription": "La SHAPE Double-Quick Handle ARRI Rosette (HAND2S) est une poignée gauche/droite conçue pour s'attacher sur toute caméra ou support disposant de rosettes ARRI standard. Son bras offre 3 points d'articulation — deux articulations à bouton-poussoir et un bouton à rochet — permettant un ajustement rapide et précis de la position selon la prise en main de l'opérateur.\nLa technologie brevetée SHAPE Quick-Lock (push-button) permet une rotation à 360° instantanée : une simple pression sur le bouton libère l'articulation, le réglage se fait à main levée, puis le relâchement verrouille fermement la position — sans outil ni réglage fastidieux. La fixation se fait via un système de rosette compatible ARRI à leviers de verrouillage à ressort.\nCaractéristiques techniques :\nCompatibilité : rosettes ARRI (gauche ou droite)\nArticulations : 3 points (2 push-button + 1 bouton à rochet)\nRotation : 360° par articulation\nVerrouillage : mécanisme acier inoxydable\nPoints de fixation additionnels : 2x 1/4\"-20 + 2x 3/8\"-16 (avec butées anti-rotation)\nPoignée : caoutchouc ergonomique\nMatériau : aluminium anodisé dur, usiné CNC\nPoids : 0,08 kg (0,18 lb)\nDimensions : ~20,3 x 12,7 x 5,1 cm\nUne poignée robuste et increvable, standard de l'industrie pour les configurations épaule et cage caméra, offrant un réglage instantané et une prise en main stable sur le plateau.",
    "specs": [
      "Autre",
      "HAND2S"
    ],
    "details": [
      [
        "Marque",
        "Shape"
      ],
      [
        "Modèle",
        "HAND2S"
      ],
      [
        "Famille",
        "Caméra"
      ],
      [
        "Type",
        "Autre"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/shape-hand2s_01.webp",
      "/images/catalogue/shape-hand2s_02.webp",
      "/images/catalogue/shape-hand2s_03.webp",
      "/images/catalogue/shape-hand2s_04.webp"
    ],
    "alt": "Shape Double-Quick Handle ARRI Rosette — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Shape%20Double-Quick%20Handle%20ARRI%20Rosette."
  },
  {
    "slug": "aputure-lantern-90",
    "reference": "HAKA-EX-036",
    "number": "036",
    "name": "Aputure Lantern 90",
    "brand": "Aputure",
    "model": "Lantern 90",
    "category": "Lumière",
    "subcategory": "Modeleurs",
    "description": "Modificateur softbox omnidirectionnel 90cm, diffusion 1-stop, monture Bowens, faisceau proche 360°. Poids 2,59 kg.",
    "longDescription": "L'Aputure Lantern 90 est un modificateur de lumière omnidirectionnel de 90 cm (3 ft) de diamètre, conçu pour adoucir la lumière des projecteurs à monture Bowens tout en couvrant de larges espaces. Diffusant un faisceau proche de 360°, il est idéal pour être suspendu en hauteur (boom) afin de relever le niveau de lumière ambiante, ouvrir les ombres, ou éclairer des scènes de table ronde nécessitant une lumière homogène sur 360°.\nReprenant le système de montage rapide du Lantern classique, le Lantern 90 se déploie en quelques secondes (crochets à presser sur la structure). Sa jupe en tissu amovible (hook-and-loop) permet de contrôler précisément la diffusion de la lumière : enroulée, déroulée, ou semi-ouverte sur un ou plusieurs côtés pour créer un ratio ombre/lumière.\nCaractéristiques techniques :\nDiamètre déployé : 90 cm (3 ft)\nDiffusion : tissu 1-stop translucide blanc\nAngle de faisceau : proche de 360°\nMonture : Bowens intégrée (speed ring)\nCompatible avec : LS 600d Pro, C300d II, 300x, C120d II et autres sources Bowens (LED ou flash)\nDimensions déployées : 900 x 900 x 700 mm\nDimensions repliées : 180 x 180 x 1500 mm\nPoids net : 2,59 kg\nAccessoire inclus : jupe de contrôle de lumière (hook-and-loop), housse de transport\nUn outil d'éclairage volumétrique polyvalent, particulièrement efficace en lumière d'ambiance, fill diffus ou éclairage de grands espaces, avec une installation rapide adaptée aux tournages nécessitant une grande réactivité.",
    "specs": [
      "Modeleurs",
      "Lantern 90"
    ],
    "details": [
      [
        "Marque",
        "Aputure"
      ],
      [
        "Modèle",
        "Lantern 90"
      ],
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Modeleurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/aputure-lantern90_01.webp",
      "/images/catalogue/aputure-lantern90_02.webp",
      "/images/catalogue/aputure-lantern90_03.webp",
      "/images/catalogue/aputure-lantern90_04.webp",
      "/images/catalogue/aputure-lantern90_05.webp",
      "/images/catalogue/aputure-lantern90_06.webp"
    ],
    "alt": "Aputure Lantern 90 — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Aputure%20Lantern%2090."
  },
  {
    "slug": "aputure-spotlight-36",
    "reference": "HAKA-EX-037",
    "number": "037",
    "name": "Aputure Spotlight 36°",
    "brand": "Aputure",
    "model": "Spotlight",
    "category": "Lumière",
    "subcategory": "Modeleurs",
    "description": "Objectif spot pour système Spotlight Mount, faisceau 36°, monture Bowens, boîtier aluminium moulé, jusqu'à 10x plus de lumière",
    "longDescription": "L'Aputure Spotlight Mount 36° Lens transforme un projecteur à monture Bowens en un véritable spot ellipsoïdal, produisant un faisceau de 36° aux bords nets et une restitution des couleurs fidèle. La conception optique limite les aberrations chromatiques en périphérie du cercle d'illumination, avec une frange contenue à seulement 1mm à une distance de 1,6 ft (48 cm).\nAssocié à une source Bowens comme la Light Storm LC 120d II, cette optique permet de concentrer la lumière et d'obtenir une intensité jusqu'à 10x supérieure à l'utilisation sans modificateur. Le système Spotlight Mount dispose de deux fentes d'insertion (drop-in slots) acceptant porte-gobo B-size, porte-gel, ou iris réglable en option, pour un contrôle avancé de la forme et de la taille du faisceau — à la manière d'un projecteur ellipsoïdal traditionnel.\nCaractéristiques techniques :\nAngle de faisceau : 36°\nSystème : Spotlight Mount (objectifs interchangeables : 19°, 26°, 36°, 50°)\nMonture : Bowens\nConstruction : boîtier en alliage aluminium moulé, durable\nFentes accessoires : 2x drop-in (gobo B-size, gel, iris 18 lames en option)\nCompatibilité : LC120d II, LS 120D, 300D, 600D et autres sources Bowens\nYoke intégré (selon kit) : double fixation junior/baby pour C-Stand ou grille\nFourni avec : housse de protection rembourrée\nGarantie : 1 an",
    "specs": [
      "Modeleurs",
      "Spotlight"
    ],
    "details": [
      [
        "Marque",
        "Aputure"
      ],
      [
        "Modèle",
        "Spotlight"
      ],
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Modeleurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/aputure-spotlight-36_01.webp",
      "/images/catalogue/aputure-spotlight-36_02.webp",
      "/images/catalogue/aputure-spotlight-36_03.webp",
      "/images/catalogue/aputure-spotlight-36_04.webp",
      "/images/catalogue/aputure-spotlight-36_05.webp"
    ],
    "alt": "Aputure Spotlight 36° — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Aputure%20Spotlight%2036%C2%B0."
  },
  {
    "slug": "aputure-softbox-light-dome-2",
    "reference": "HAKA-EX-038",
    "number": "038",
    "name": "Aputure Softbox Light Dome 2",
    "brand": "Aputure",
    "model": "Light Dome II",
    "category": "Lumière",
    "subcategory": "Modeleurs",
    "description": "Softbox octogonal profond 34,8\" (90cm), 16 tiges acier, diffusion 1,5/2,5-stop, grille 40°, monture Bowens.",
    "longDescription": "L'Aputure Light Dome II est le softbox phare de la gamme Aputure, conçu pour transformer une source COB dure en une lumière douce et enveloppante, idéale pour le portrait, l'interview, le documentaire ou le clip musical. Sa structure hexadécagone à 16 tiges en acier hadfield résistant à l'usure crée 32 points d'axe, produisant un faisceau presque parfaitement circulaire et un catchlight rond et naturel dans le regard du sujet.\nSon intérieur entièrement argenté maximise la puissance de la source lumineuse, tandis que sa profondeur de 24\" (61cm) offre un faisceau plus directionnel et contrôlé, affinable davantage grâce à la grille en tissu 40° incluse. Le système de montage rapide (speed ring nouvelle génération) permet un montage/démontage en moins d'une minute, seul.\nCaractéristiques techniques :\nDiamètre extérieur : 34,8\" (885mm) — Ø890x65mm déployé\nDiamètre diffuseur intérieur : 235mm (9,3\")\nProfondeur : 24\" (61cm)\nStructure : 16 tiges acier hadfield\nDiffusion : 2 couches incluses — 1,5-stop et 2,5-stop (Magic Cloth + Silk Cloth)\nDiffuseur intérieur : amovible\nGrille de contrôle : nid d'abeille tissu 40°\nAccessoire inclus : porte-gel pour filtres colorés\nMonture : Bowens (speed ring quick-release)\nRangement : sac de transport inclus\nUn softbox de référence, offrant une lumière douce, homogène et flatteuse, avec un montage ultra-rapide adapté aux tournages nécessitant réactivité et qualité d'image professionnelle.",
    "specs": [
      "Modeleurs",
      "Light Dome II"
    ],
    "details": [
      [
        "Marque",
        "Aputure"
      ],
      [
        "Modèle",
        "Light Dome II"
      ],
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Modeleurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/aputure-lightdome2_01.webp",
      "/images/catalogue/aputure-lightdome2_02.webp",
      "/images/catalogue/aputure-lightdome2_03.webp"
    ],
    "alt": "Aputure Softbox Light Dome 2 — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Aputure%20Softbox%20Light%20Dome%202."
  },
  {
    "slug": "moniteur-panasonic-bt-lh-17",
    "reference": "HAKA-EX-039",
    "number": "039",
    "name": "Moniteur Panasonic BT-LH 17\"",
    "brand": "Panasonic",
    "model": "",
    "category": "Régie vidéo",
    "subcategory": "Moniteurs",
    "description": "Moniteur LCD broadcast, résolution 1280x768, double SDI HD/SD, waveform intégré, calibration couleur professionnelle (9300K/6500K/5600K)",
    "longDescription": "Le Panasonic BT-LH1700W(P) est un moniteur LCD 17\" grand écran, conçu pour un usage broadcast et studio exigeant, offrant une reproduction fidèle des couleurs et du contraste, historiquement réservée aux moniteurs CRT. Compatible avec l'ensemble des formats et cadences HDTV, ainsi que les standards NTSC et PAL, il s'adapte à la majorité des workflows de production.\nLa compensation RGB sur 256 niveaux discrets et la gamma normée (γ=2,2) garantissent une gradation conforme aux standards broadcast. Le moniteur intègre également un système de conversion d'espace colorimétrique (Color-Space Conversion) reproduisant fidèlement les couleurs de référence EBU des moniteurs CRT, ainsi qu'une compensation des lignes diagonales pour réduire le crénelage.\nCaractéristiques techniques :\nTaille écran : 17\" (17,1\"), format 15:9\nRésolution : 1280 x 768 pixels (WXGA)\nColorimétrie : ~16 770 000 couleurs, angle de vue 170° (H/V)\nTempérature de couleur : 3 préréglages (9300K / 6500K / 5600K) + réglage custom 3000K-9300K\nEntrées : 2x SDI (auto HD/SD), composant Y/Pb/Pr (+RGB), Y/C, composite vidéo\nSortie : 1x SDI\nFormats supportés : 1080i, 720p, 480/576i, 1080/23.98PsF\nOutils intégrés : waveform monitor (incrustation PIP), split screen, cross hatch\nContrôle : télécommande parallèle (GPI) et série (RS-232C)\nOption : module audio embarqué BT-YAE1700G\nUn moniteur de référence pour le monitoring broadcast et le contrôle qualité d'image en studio ou sur le terrain, offrant des outils d'analyse de signal intégrés rarement présents sur des moniteurs de cette gamme.",
    "specs": [
      "Moniteurs"
    ],
    "details": [
      [
        "Marque",
        "Panasonic"
      ],
      [
        "Famille",
        "Régie vidéo"
      ],
      [
        "Type",
        "Moniteurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/panasonic-btlh1710_01.webp",
      "/images/catalogue/panasonic-btlh1710_02.webp"
    ],
    "alt": "Moniteur Panasonic BT-LH 17\" — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Moniteur%20Panasonic%20BT-LH%2017%22."
  },
  {
    "slug": "avenger-c100-junior-pipe-clamp",
    "reference": "HAKA-EX-040",
    "number": "040",
    "name": "Avenger C100 Junior Pipe Clamp",
    "brand": "Avenger",
    "model": "C100",
    "category": "Machinerie / Grip",
    "subcategory": "Pieds et grip",
    "description": "Pince pour tube/truss, réception junior 28mm (1 1/8\"), diamètre 20-55mm, charge max 250kg. Aluminium moulé, verrou Tommy Bar.",
    "longDescription": "La Avenger C100 Junior Pipe Clamp est une pince robuste conçue pour fixer des accessoires d'éclairage sur tubes, trusses ou grilles, sans nécessiter d'outil. Fabriquée en aluminium moulé par gravité, elle offre une résistance élevée adaptée au maintien de projecteurs lourds en configuration suspendue.\nSon récepteur intégré de 28mm (1 1/8\" junior) accepte l'ensemble des pins junior standards, tandis que le verrouillage s'effectue via une poignée Tommy Bar sans outil. Une sangle de sécurité avec goupille est incluse pour sécuriser davantage le maintien du pin junior dans le récepteur, une précaution essentielle en accroche.\nCaractéristiques techniques :\nMatériau : aluminium moulé par gravité\nRéception : 28mm / 1 1/8\" (junior)\nPlage de serrage (mâchoires) : 20mm à 55mm de diamètre de tube\nCharge maximale : 250 kg (551 lb)\nVerrouillage : poignée Tommy Bar (sans outil)\nSécurité : sangle de rétention avec goupille incluse\nPoids : 1,13 kg (2,49 lb)\nUn accessoire de rigging essentiel et increvable, permettant de fixer solidement des projecteurs ou accessoires sur des structures de truss ou tubes en studio comme en tournage extérieur.",
    "specs": [
      "Pieds et grip",
      "C100"
    ],
    "details": [
      [
        "Marque",
        "Avenger"
      ],
      [
        "Modèle",
        "C100"
      ],
      [
        "Famille",
        "Machinerie / Grip"
      ],
      [
        "Type",
        "Pieds et grip"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/avengerc100-junior-pipeclamp_01.webp",
      "/images/catalogue/avengerc100-junior-pipeclamp_02.webp"
    ],
    "alt": "Avenger C100 Junior Pipe Clamp — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Avenger%20C100%20Junior%20Pipe%20Clamp."
  },
  {
    "slug": "avenger-c4462-1-mp-eye-coupler",
    "reference": "HAKA-EX-041",
    "number": "041",
    "name": "Avenger C4462-1 MP Eye Coupler",
    "brand": "Avenger",
    "model": "C4462",
    "category": "Machinerie / Grip",
    "subcategory": "Pieds et grip",
    "description": "Pince \"Little Ben\" avec spigot baby 16mm (5/8\"), pour tubes/trusses 42-52mm, charge max 300kg. Aluminium, certifiée TÜV/SÜD.",
    "longDescription": "Le Avenger C4462-1 MP Eye Coupler, communément appelé « Little Ben Clamp », est une pince de rigging polyvalente équipée d'un spigot mâle baby 16mm (5/8\") soudé, largement utilisée pour la suspension de projecteurs sur tubes, trusses ou grilles dans les configurations théâtre, plateau de tournage ou événementiel.\nCe coupleur MP (« cheeseboro clamp ») offre une plage de serrage plus large que la version LP équivalente, grâce à sa mâchoire inférieure spécialement aplatie qui améliore l'adaptabilité sur différents types de tubes. Le verrouillage s'effectue via un système d'écrou papillon avec rondelle, garantissant une fixation sûre et rapide.\nCaractéristiques techniques :\nMatériau : aluminium (finition argent), extrudé haute résistance\nSpigot : baby 16mm (5/8\") soudé\nPlage de serrage : tubes/trusses de 42mm à 52mm de diamètre\nLargeur : 50mm (1,96\")\nCharge maximale : 300 kg (661 lb) SWL — charge de rupture 500kg\nVerrouillage : écrou papillon + rondelle\nPoids : 0,44 kg\nCertification : TÜV / SÜD\nUn accessoire de rigging incontournable et éprouvé pour la suspension de projecteurs sur structures de truss ou tubes, aussi bien en tournage qu'en installation événementielle ou théâtrale.",
    "specs": [
      "Pieds et grip",
      "C4462"
    ],
    "details": [
      [
        "Marque",
        "Avenger"
      ],
      [
        "Modèle",
        "C4462"
      ],
      [
        "Famille",
        "Machinerie / Grip"
      ],
      [
        "Type",
        "Pieds et grip"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/avenger C4462-1_01.webp",
      "/images/catalogue/avenger C4462-1_02.webp"
    ],
    "alt": "Avenger C4462-1 MP Eye Coupler — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Avenger%20C4462-1%20MP%20Eye%20Coupler."
  },
  {
    "slug": "avenger-c4461-mp-eye-coupler",
    "reference": "HAKA-EX-042",
    "number": "042",
    "name": "Avenger C4461 MP Eye Coupler",
    "brand": "Avenger",
    "model": "C4461",
    "category": "Machinerie / Grip",
    "subcategory": "Pieds et grip",
    "description": "Pince avec spigot TV 28mm (1 1/8\"), pour tubes/trusses 42-52mm, charge max 500kg. Aluminium, certifiée TÜV.",
    "longDescription": "L'Avenger C4461 MP Eye Coupler, surnommé « Big Ben Clamp », est la version grand format du système de coupleurs MP Avenger, équipée d'un spigot TV 28mm (1 1/8\") pour la fixation d'accessoires plus lourds. Ce coupleur « cheeseboro » offre une plage de serrage plus large que la version LP, avec une mâchoire inférieure spécialement aplatie pour s'adapter à différents diamètres de tubes et trusses.\nIdéal pour les configurations de rigging TV/broadcast, théâtre ou tournage, il permet de suspendre efficacement projecteurs et accessoires depuis une structure de truss ou un tube. Le verrouillage s'effectue via un écrou papillon et rondelle, offrant une prise en main rapide sans outil spécifique.\nCaractéristiques techniques :\nMatériau : aluminium (finition argent)\nSpigot : TV 28mm (1 1/8\")\nPlage de serrage : tubes/trusses de 42mm à 52mm\nLargeur : 50mm (1,96\")\nCharge maximale : 500 kg (1102 lb)\nVerrouillage : écrou papillon + rondelle\nPoids : 0,6 kg\nCertification : TÜV\nUn accessoire de rigging robuste, adapté aux charges plus importantes que le C4462-1, idéal pour la suspension de projecteurs lourds ou d'accessoires volumineux sur structures de truss en tournage, théâtre ou événementiel.",
    "specs": [
      "Pieds et grip",
      "C4461"
    ],
    "details": [
      [
        "Marque",
        "Avenger"
      ],
      [
        "Modèle",
        "C4461"
      ],
      [
        "Famille",
        "Machinerie / Grip"
      ],
      [
        "Type",
        "Pieds et grip"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/avenger-c4461_01.webp",
      "/images/catalogue/avenger-c4461_02.webp",
      "/images/catalogue/avenger-c4461_03.webp"
    ],
    "alt": "Avenger C4461 MP Eye Coupler — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Avenger%20C4461%20MP%20Eye%20Coupler."
  },
  {
    "slug": "support-d-epaule-rembourre-shape",
    "reference": "HAKA-EX-043",
    "number": "043",
    "name": "Support d'épaule rembourré SHAPE",
    "brand": "Shape",
    "model": "",
    "category": "Caméra",
    "subcategory": "Autre",
    "description": "Coussinet gel amovible pour rig épaule, fixation velcro, compatible plaques SHAPE (BP0008, BPVCT, BP20) et systèmes tiges 15mm.",
    "longDescription": "Le support d'épaule rembourré SHAPE est un coussinet ergonomique conçu pour améliorer le confort de portage lors d'un tournage à l'épaule prolongé. Rembourré en gel épais, il répartit efficacement le poids de la caméra et du rig sur l'épaule de l'opérateur, réduisant la fatigue même lors de longues sessions de tournage sans trépied.\nFixé par bandes auto-agrippantes (velcro), il s'installe et se retire rapidement sans outil, et vient remplacer les coussinets standards des plaques d'épaule de la gamme SHAPE (VCT, BP0008, BP20/Revolt) ou d'autres systèmes compatibles à monture rosette/tiges 15mm.\nCaractéristiques techniques :\nType : coussinet d'épaule rembourré, matière gel\nFixation : bandes velcro (installation/retrait rapide)\nCompatibilité : plaques SHAPE VCT (BPVCT), BP0008, BP20 (Revolt) et systèmes similaires\nUsage : portage à l'épaule, réduction de la fatigue sur tournage prolongé\nMatériau structure : compatible avec baseplate CNC aluminium\nUn accessoire de confort indispensable pour les opérateurs travaillant régulièrement à l'épaule, améliorant l'ergonomie du rig sans compromis sur la stabilité de la prise de vue.",
    "specs": [
      "Autre"
    ],
    "details": [
      [
        "Marque",
        "Shape"
      ],
      [
        "Famille",
        "Caméra"
      ],
      [
        "Type",
        "Autre"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/shape-shoulderpad_01.webp",
      "/images/catalogue/shape-shoulderpad_02.webp",
      "/images/catalogue/shape-shoulderpad_03.webp"
    ],
    "alt": "Support d'épaule rembourré SHAPE — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Support%20d'%C3%A9paule%20rembourr%C3%A9%20SHAPE."
  },
  {
    "slug": "hollyland-mars-4k",
    "reference": "HAKA-EX-044",
    "number": "044",
    "name": "Hollyland Mars 4K",
    "brand": "Hollyland",
    "model": "Mars 4K",
    "category": "Régie vidéo",
    "subcategory": "Transmission vidéo",
    "description": "Système de transmission vidéo sans fil UHD 4K30, portée 450ft (150m), latence 0,06s, entrées/sorties HDMI + SDI, écran couleur",
    "longDescription": "Le Hollyland Mars 4K est un système de transmission vidéo sans fil compact, conçu pour ajouter un retour vidéo à distance sur un gimbal, une caméra mirrorless ou DSLR. Il transmet en 4K UHD jusqu'à 30fps, ainsi qu'en FHD et HD à diverses cadences (24, 30, 60p), avec un débit ajustable de 8 à 20 Mb/s (12 Mb/s par défaut) grâce à son processeur codec double cœur et à l'encodage H.264.\nFonctionnant en bande 5 GHz, le système propose un scan de canal intelligent au démarrage pour sélectionner automatiquement la fréquence la moins encombrée, garantissant une connexion stable même en environnement dense. Le transmetteur peut connecter jusqu'à deux récepteurs ou quatre appareils mobiles simultanément via l'application Hollyview (iOS/Android), permettant à plusieurs membres de l'équipe de visualiser le retour vidéo en temps réel.\nCaractéristiques techniques :\nRésolution : 4K UHD 30fps, FHD/HD 24/30/60p\nPortée : jusqu'à 450 ft (150m) en visibilité directe\nLatence : 0,06s (66ms)\nBande de fréquence : 5 GHz\nDébit : 8-20 Mb/s (12 Mb/s par défaut), encodage H.264\nConnectique : entrées HDMI + SDI (transmetteur), sorties HDMI + SDI (récepteur)\nMulti-device : jusqu'à 2 récepteurs ou 4 appareils mobiles (app Hollyview)\nÉcran : LCD couleur tactile, interface simplifiée\nAlimentation : DC 6-16V, batteries NP-F, ou USB-C (5V/2,5A)\nConstruction : boîtier résistant à la corrosion, antennes bullet amovibles\nUn système de transmission vidéo fiable et abordable, offrant une qualité 4K et une latence très faible, idéal pour le monitoring déporté en configuration gimbal, Steadicam ou multi-caméra.",
    "specs": [
      "Transmission vidéo",
      "Mars 4K"
    ],
    "details": [
      [
        "Marque",
        "Hollyland"
      ],
      [
        "Modèle",
        "Mars 4K"
      ],
      [
        "Famille",
        "Régie vidéo"
      ],
      [
        "Type",
        "Transmission vidéo"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/hollyland-mars4K_01.webp",
      "/images/catalogue/hollyland-mars4K_02.webp",
      "/images/catalogue/hollyland-mars4K_03.webp"
    ],
    "alt": "Hollyland Mars 4K — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Hollyland%20Mars%204K."
  },
  {
    "slug": "tablette-samsung-pour-dmx-control",
    "reference": "HAKA-EX-045",
    "number": "045",
    "name": "Tablette Samsung pour DMX Control",
    "brand": "Samsung",
    "model": "",
    "category": "Lumière",
    "subcategory": "Autre",
    "description": "Tablette Android 11\" pour contrôle DMX (apps type Luminair, ONYX, DMXIS, ASTERA, SIDUS),",
    "longDescription": "Une tablette fiable et économique pour piloter un système DMX sans fil, idéale en complément d'un boîtier de contrôle (Art-Net/sACN) sur les tournages nécessitant un contrôle lumière mobile et réactif. Son format offre une surface tactile confortable pour naviguer dans les interfaces de contrôle lumière, ajuster des faders virtuels ou piloter des shows complets sur le plateau.",
    "specs": [
      "Autre"
    ],
    "details": [
      [
        "Marque",
        "Samsung"
      ],
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Autre"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/tablette-dmx_01.webp",
      "/images/catalogue/tablette-dmx_02.webp"
    ],
    "alt": "Tablette Samsung pour DMX Control — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Tablette%20Samsung%20pour%20DMX%20Control."
  },
  {
    "slug": "gueuse-sac-de-sable-manfrotto-g100-10kg",
    "reference": "HAKA-EX-046",
    "number": "046",
    "name": "Gueuse (sac de sable) Manfrotto G100 – 10kg",
    "brand": "Manfrotto",
    "model": "G100",
    "category": "Machinerie / Grip",
    "subcategory": "Autre",
    "description": "Sac lestable en nylon noir résistant, charge max 10kg, double compartiment, crochet à dégagement rapide + anneau D",
    "longDescription": "La gueuse Manfrotto G100 (version 10kg) est un sac lestable indispensable pour sécuriser pieds de lumière, perches et trépieds contre tout risque de basculement. Fabriqué en nylon noir résistant, il supporte un usage intensif répété sur le plateau tout en restant léger à transporter une fois vide.\nSa conception à double compartiment permet de le draper facilement autour des jambes d'un pied ou de le suspendre à une perche (boom). Un crochet à dégagement rapide d'un côté et un anneau en D de l'autre facilitent l'accrochage à un pied boom ou tout autre point d'ancrage, tandis qu'une poignée rembourrée en partie supérieure permet un transport confortable.\nCaractéristiques techniques :\nCharge maximale : 10 kg\nMatériau : nylon noir haute résistance\nCompartiments : 2 (remplissables au sable, gravier ou tout lest disponible)\nFixation : crochet à dégagement rapide + anneau D\nPoignée : rembourrée, transport facilité. Un accessoire de sécurité essentiel sur tout plateau, permettant de lester rapidement pieds, perches ou trépieds pour prévenir tout accident lié au vent ou à un déséquilibre de charge.",
    "specs": [
      "Autre",
      "G100"
    ],
    "details": [
      [
        "Marque",
        "Manfrotto"
      ],
      [
        "Modèle",
        "G100"
      ],
      [
        "Famille",
        "Machinerie / Grip"
      ],
      [
        "Type",
        "Autre"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/gueuse-g100-manfrotto_01.webp",
      "/images/catalogue/gueuse-g100-manfrotto_02.webp"
    ],
    "alt": "Gueuse (sac de sable) Manfrotto G100 – 10kg — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Gueuse%20(sac%20de%20sable)%20Manfrotto%20G100%20%E2%80%93%2010kg."
  },
  {
    "slug": "charger-vlock-4v-hawk-woods",
    "reference": "HAKA-EX-047",
    "number": "047",
    "name": "Charger Vlock 4V Hawk-woods",
    "brand": "Hawk-woods",
    "model": "VL-4x4",
    "category": "Énergie & câbles",
    "subcategory": "Chargeurs",
    "description": "Chargeur simultané 4 canaux, 4A par canal, compatible batteries V-Lok, chargeur le plus rapide de la gamme Hawk-Woods",
    "longDescription": "Le Hawk-Woods VL-4X4 est un chargeur simultané à 4 canaux pour batteries V-Lok (V-Mount), conçu pour recharger jusqu'à quatre batteries en même temps à un courant de 4A par canal — le chargeur le plus rapide de la gamme Hawk-Woods. Une solution idéale pour les productions utilisant plusieurs batteries en rotation continue, minimisant les temps d'attente entre les prises.\nSon format compact et robuste facilite le transport sur le plateau, tandis que les indicateurs LED par canal permettent de suivre l'état de charge de chaque batterie individuellement.\nCaractéristiques techniques :\nType : V-Lok (V-Mount)\nCanaux : 4, charge simultanée\nCourant de charge : 4A par canal\nCapacité : 4,0 Ah\nDimensions : 22 x 18,5 x 15 cm\nPoids : 2,22 kg\nIndicateurs : LED de statut par canal\nUn chargeur performant et compact, permettant une rotation rapide de batteries V-Lok pour les tournages nécessitant une alimentation continue sans interruption.",
    "specs": [
      "Chargeurs",
      "VL-4x4"
    ],
    "details": [
      [
        "Marque",
        "Hawk-woods"
      ],
      [
        "Modèle",
        "VL-4x4"
      ],
      [
        "Famille",
        "Énergie & câbles"
      ],
      [
        "Type",
        "Chargeurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/hawk-woods-rp4_01.webp",
      "/images/catalogue/hawk-woods-rp4_02.webp"
    ],
    "alt": "Charger Vlock 4V Hawk-woods — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Charger%20Vlock%204V%20Hawk-woods."
  },
  {
    "slug": "hollyland-mars-m1",
    "reference": "HAKA-EX-048",
    "number": "048",
    "name": "Hollyland Mars M1",
    "brand": "Hollyland",
    "model": "M1",
    "category": "Régie vidéo",
    "subcategory": "Moniteurs",
    "description": "Moniteur/transmetteur/récepteur sans fil 3-en-1, écran 5,5\" tactile 1000nits, portée 450ft, latence 0,08s, entrées HDMI 4K + SDI",
    "longDescription": "Le Hollyland Mars M1 est une solution tout-en-un intégrant moniteur, transmetteur et récepteur vidéo sans fil, réduisant significativement le poids et l'encombrement du rig caméra en évitant l'ajout d'appareils séparés. Basculable entre mode transmetteur et récepteur directement depuis son interface, il est également compatible avec les systèmes Mars 4K, 400S Pro et 300 Pro de Hollyland, permettant une intégration flexible dans un écosystème de transmission plus large.\nSon écran tactile 5,5\" offre une luminosité de 1000 nits, un contraste 1000:1 et une colorimétrie Rec.709 calibrée, avec une suite complète d'outils d'assistance : waveform, focus peaking, zoom 4x, false color, LUT 3D, zebra, marquage d'aspect, désanamorphose. Un seul transmetteur M1 peut alimenter jusqu'à 2 récepteurs ou 4 appareils mobiles simultanément via application.\nCaractéristiques techniques :\nÉcran : 5,5\" LCD tactile, 1000 nits, contraste 1000:1, Rec.709\nPortée sans fil : 450 ft (150m) en visibilité directe\nLatence : 0,08s (≈5 frames en 1080p60)\nBande de fréquence : 5,1-5,8 GHz\nEntrées : HDMI (jusqu'à 4K UHD 30fps en entrée/loopout), SDI\nTransmission sans fil : jusqu'à 1080p FHD (le 4K n'est pas transmis sans fil, uniquement en loopout filaire)\nMulti-device : 2 récepteurs ou 4 apps mobiles\nEnregistrement : clips temporaires de 3 min (non sauvegardables)\nDimensions : 152 x 96 x 40mm (hors antennes)\nPoids : ~400g (hors antennes)\nOS : HollyOS\nUne solution de monitoring/transmission tout-en-un particulièrement polyvalente, réduisant le nombre de boîtiers nécessaires sur un rig caméra tout en conservant une image de qualité broadcast et un contrôle créatif complet.",
    "specs": [
      "Moniteurs",
      "M1"
    ],
    "details": [
      [
        "Marque",
        "Hollyland"
      ],
      [
        "Modèle",
        "M1"
      ],
      [
        "Famille",
        "Régie vidéo"
      ],
      [
        "Type",
        "Moniteurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/hollyland-marsm1_01.webp",
      "/images/catalogue/hollyland-marsm1_02.webp",
      "/images/catalogue/hollyland-marsm1_03.webp",
      "/images/catalogue/hollyland-marsm1_04.webp"
    ],
    "alt": "Hollyland Mars M1 — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Hollyland%20Mars%20M1."
  },
  {
    "slug": "cadre-de-diffusion-120x120",
    "reference": "HAKA-EX-049",
    "number": "049",
    "name": "Cadre de diffusion 120x120",
    "brand": "",
    "model": "",
    "category": "Lumière",
    "subcategory": "Pieds et grip",
    "description": "Cadre pour toiles de diffusion/réflexion (butterfly), format 120x120cm, compatible avec grip standard (C-Stand, pieds)",
    "longDescription": "Le cadre de diffusion 120x120cm est un support pliable destiné à recevoir des toiles de diffusion, de réflexion ou des drapeaux (flags) de même format, permettant de contrôler la qualité et la direction de la lumière naturelle ou artificielle sur le plateau. Format compact et polyvalent, il convient aussi bien aux tournages en extérieur (adoucir la lumière du soleil) qu'en studio.\nLe cadre se fixe généralement sur un C-Stand via un bras grip ou une pince adaptée, et accepte différents types de toiles interchangeables selon l'effet recherché : diffusion (soft/silk), réflexion (bleached/silver), ou obturation totale (solid/floppy) pour créer de l'ombre ou bloquer la lumière parasite.\nCaractéristiques techniques :\nFormat : 120 x 120 cm\nType : cadre pliable (foldable frame)\nMatériau structure : généralement aluminium ou acier léger\nCompatibilité : toiles de diffusion/réflexion/flag interchangeables au format 120x120cm\nFixation : compatible grip standard (C-Stand, pince, bras)\nRangement : pliable pour transport et stockage compact\nUn accessoire de contrôle lumière essentiel et polyvalent, permettant d'adapter rapidement la qualité de l'éclairage naturel ou artificiel selon les besoins de la scène, en intérieur comme en extérieur.",
    "specs": [
      "Pieds et grip"
    ],
    "details": [
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Pieds et grip"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/cadre-alu-120x120_01.webp"
    ],
    "alt": "Cadre de diffusion 120x120 — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Cadre%20de%20diffusion%20120x120."
  },
  {
    "slug": "plaque-de-fixation-pour-tubes-astera",
    "reference": "HAKA-EX-050",
    "number": "050",
    "name": "Plaque de fixation pour tubes Astera",
    "brand": "Astera",
    "model": "",
    "category": "Lumière",
    "subcategory": "Pieds et grip",
    "description": "Support pour 4 tubes en parallèle, baby pin 5/8\" soudé, compatible tubes AX1 PixelTube, FP1 Titan et FP2 Helios.",
    "longDescription": "La Cross Plate Astera est une plaque de fixation permettant de monter 4 tubes LED en parallèle (AX1 PixelTube, FP1 Titan Tube ou FP2 Helios Tube) sur un seul point d'ancrage, idéale pour créer des panneaux lumineux compacts ou renforcer l'intensité lumineuse d'une zone en combinant plusieurs tubes.\nChaque tube se fixe via son WingPlate dédié (fourni avec le tube), lui-même clipsé sur la Cross Plate. Pour supporter le poids cumulé des 4 tubes, la plaque intègre un baby pin 5/8\" soudé à l'arrière, permettant son montage sur C-Stand, Super Clamp, tête grip ou tout support standard.\nCaractéristiques techniques :\nCompatibilité : tubes AX1 PixelTube, FP1 Titan Tube, FP2 Helios Tube (et FP3 Hyperion selon version)\nCapacité : montage de 4 tubes en parallèle (via 4 WingPlates)\nFixation arrière : baby pin 5/8\" soudé\nFixation avant : compatible WingPlate Astera (2 TubeHolders par WingPlate)\nUsage : montage groupé pour panneau lumineux ou renfort d'intensité\nUn accessoire de montage pratique pour assembler rapidement plusieurs tubes Astera en une seule unité lumineuse, sur C-Stand, Super Clamp ou structure de rigging.",
    "specs": [
      "Pieds et grip"
    ],
    "details": [
      [
        "Marque",
        "Astera"
      ],
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Pieds et grip"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/plaque-fixation-astera_01.webp",
      "/images/catalogue/plaque-fixation-astera_02.webp"
    ],
    "alt": "Plaque de fixation pour tubes Astera — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Plaque%20de%20fixation%20pour%20tubes%20Astera."
  },
  {
    "slug": "avenger-d400-jumbo-grip",
    "reference": "HAKA-EX-051",
    "number": "051",
    "name": "Avenger D400 Jumbo Grip",
    "brand": "Avenger",
    "model": "D400",
    "category": "Lumière",
    "subcategory": "Pieds et grip",
    "description": "Tête grip \"lollipop\" convertissant un pied junior en pied overhead, réception + pin 28mm (1 1/8\"), acier, 2,35 kg.",
    "longDescription": "Le Avenger D400 Jumbo Grip Head — surnommé « lollipop » — est un accessoire conçu pour transformer un pied junior (à réception standard 28mm/1 1/8\") en un pied de type overhead, couramment utilisé pour supporter des cadres butterfly, cadres modulaires ou cadres pliables (fold away). Sa tête grip de 4,5\" (11,43 cm) offre une prise robuste pour bras et accessoires de light shaping.\nLe système repose sur un pin 28mm s'insérant dans une réception 28mm du pied, surmonté d'une tête grip 10mm et d'une nouvelle réception 28mm/1 1/8\", permettant de travailler comme avec un véritable pied overhead traditionnel.\nCaractéristiques techniques :\nMatériau : acier\nFixation inférieure : pin junior 28mm (1 1/8\")\nFixation supérieure : tête grip 10mm + réception 28mm (1 1/8\")\nDiamètres des trous de la tête grip : 10, 13, 16 et 25 mm\nDimensions (L x H x P) : 24 x 11 x 24 cm\nPoids : 2,35 kg\nCouleur : argent (D400) ou noir (D400B)\nUn accessoire de rigging indispensable pour convertir rapidement un pied junior standard en configuration overhead, idéal pour le montage de cadres de diffusion, réflexion ou fonds de studio.",
    "specs": [
      "Pieds et grip",
      "D400"
    ],
    "details": [
      [
        "Marque",
        "Avenger"
      ],
      [
        "Modèle",
        "D400"
      ],
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Pieds et grip"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/avenger-d400-jumbo_01.webp",
      "/images/catalogue/avenger-d400-jumbo_02.webp"
    ],
    "alt": "Avenger D400 Jumbo Grip — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Avenger%20D400%20Jumbo%20Grip."
  },
  {
    "slug": "avenger-e200-stand-adapter",
    "reference": "HAKA-EX-052",
    "number": "052",
    "name": "Avenger E200 Stand Adapter",
    "brand": "Avenger",
    "model": "E200",
    "category": "Lumière",
    "subcategory": "Pieds et grip",
    "description": "Adaptateur junior 28mm (1 1/8\") vers baby 16mm (5/8\"), acier chromé/zingué, 0,62 kg.",
    "longDescription": "Le Avenger E200 Stand Adapter est un adaptateur permettant de convertir une réception femelle junior 28mm (1 1/8\") — présente sur pieds combo, pieds à roulettes et pinces grip haute résistance — en un spigot mâle baby 16mm (5/8\"), élargissant ainsi la compatibilité avec des lumières et accessoires plus légers.\nUn petit orifice côté junior permet d'insérer une goupille de sécurité, offrant une fixation supplémentaire lorsqu'il est utilisé en suspension sur des pinces comme la C150. Compatible avec la plupart des pieds combo Avenger (A1020B, A4050CS, B6030CS...), pieds à roulettes (297BBASE, 299BBASE), C-Stands (A2030D...) et pinces (C150, C100, C345-1).\nCaractéristiques techniques :\nFonction : adaptateur junior → baby\nFixation basse (femelle) : 28mm (1 1/8\")\nFixation haute (mâle) : 16mm (5/8\")\nMatériau : acier chromé / zingué\nHauteur : 19 cm\nPoids : 0,62 kg\nSécurité : orifice pour goupille côté junior\nCouleur : argent\nUn adaptateur simple et robuste, indispensable pour utiliser des accessoires ou lumières à réception baby 5/8\" sur des pieds ou pinces à réception junior 1 1/8\".",
    "specs": [
      "Pieds et grip",
      "E200"
    ],
    "details": [
      [
        "Marque",
        "Avenger"
      ],
      [
        "Modèle",
        "E200"
      ],
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Pieds et grip"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/avenger-e200_01.webp",
      "/images/catalogue/avenger-e200_02.webp"
    ],
    "alt": "Avenger E200 Stand Adapter — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Avenger%20E200%20Stand%20Adapter."
  },
  {
    "slug": "borniol-300gm2",
    "reference": "HAKA-EX-053",
    "number": "053",
    "name": "Borniol 300gm2",
    "brand": "",
    "model": "",
    "category": "Lumière",
    "subcategory": "Modeleurs",
    "description": "Tissu épais coton/velours noir, classement feu M1, format 3x3m, ~320g/m². Occultation totale de la lumière.",
    "longDescription": "Le borniol est une pièce de tissu noir épais (coton ou velours), traditionnellement utilisée sur les plateaux de tournage pour occulter totalement la lumière naturelle entrant par des fenêtres, baies vitrées ou verrières, permettant de simuler un effet nuit ou de contrôler complètement l'ambiance lumineuse d'un décor. Son nom provient de l'entreprise de pompes funèbres Henri de Borniol, qui utilisait historiquement ces tissus opaques.\nAu-delà de l'occultation de fenêtres (« borniolage »), le borniol sert également de fond noir pour interviews (à condition d'être propre et sans plis), à masquer des éléments de décor non désirés, à supprimer des reflets sur de grandes surfaces, ou à constituer un sas d'entrée pour préserver un effet nuit lors des allées et venues sur le plateau. Le chef opérateur du son l'utilise aussi pour amortir l'acoustique d'une pièce trop réverbérante.\nCaractéristiques techniques :\nMatériau : coton lourd ou velours, noir\nGrammage : ~300 g/m²\nFormat standard : 3 x 3 m (existe aussi en grandes tailles, jusqu'à 6x15m)\nClassement sécurité incendie : M1 (non-propagateur de flamme)\nOpacité : occultation totale de la lumière\nFixation : suspendu ou drapé, maintenu par pinces, perches ou structure légère\nUn incontournable de la machinerie et de l'éclairage sur les tournages, pour un contrôle total et fiable de la lumière naturelle dans un décor.",
    "specs": [
      "Modeleurs"
    ],
    "details": [
      [
        "Famille",
        "Lumière"
      ],
      [
        "Type",
        "Modeleurs"
      ],
      [
        "Disponibilité",
        "Disponible"
      ]
    ],
    "included": [],
    "compatibilities": [],
    "availability": "Disponible",
    "featured": false,
    "images": [
      "/images/catalogue/borniol_01.webp",
      "/images/catalogue/borniol_02.webp",
      "/images/catalogue/borniol_03.webp"
    ],
    "alt": "Borniol 300gm2 — matériel disponible chez Haka Rent",
    "whatsapp": "https://api.whatsapp.com/send?phone=22997090941&text=Bonjour%20Haka%20Rent%2C%20je%20souhaite%20des%20informations%20sur%20Borniol%20300gm2."
  }
];

export const featuredEquipment = equipment.filter((item) => item.featured);

export function getEquipment(slug: string) {
  return equipment.find((item) => item.slug === slug);
}
