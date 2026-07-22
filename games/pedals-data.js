/* ═══════════════════════════════════════════════
   FUZZ & FRITURE — Base de données pédales partagée
   Utilisée par tous les jeux de l'arcade.
   Images : médiathèque WordPress (à migrer vers /images/ ).
═══════════════════════════════════════════════ */
const IMG = "https://fuzz-et-friture.fr/wp-content/uploads/";

const PEDALS = [
  {
    name:"Klon Centaur", maker:"Klon", decade:"années 1990", year:1994,
    type:"od", typeLabel:"Overdrive", circuit:"Overdrive transparent (diodes germanium)",
    artist:"Jeff Beck, John Mayer", price:5, priceLabel:"~2000 € (occasion)",
    img:IMG+"2026/05/Q999999904-klon-ktr.jpg",
    url:"https://fuzz-et-friture.fr/klon-vs-clones-4-pedales-pour-le-son-du-centaur-sans-le-prix/"
  },
  {
    name:"Dallas Arbiter Fuzz Face", maker:"Dallas Arbiter", decade:"années 1960", year:1966,
    type:"fuzz", typeLabel:"Fuzz", circuit:"2 transistors germanium (NKT275)",
    artist:"Jimi Hendrix", price:4, priceLabel:"~200-400 €",
    img:IMG+"2026/05/q5928-jimi-hendrix.jpg",
    url:"https://fuzz-et-friture.fr/la-guerre-des-fuzz/"
  },
  {
    name:"MXR Phase 90", maker:"MXR", decade:"années 1970", year:1974,
    type:"mod", typeLabel:"Phaser", circuit:"Déphaseur 4 étages",
    artist:"Eddie Van Halen", price:2, priceLabel:"~100 €",
    img:IMG+"2026/05/Q272012-eddie-van-halen-at-emmy-rehearsal-211282.jpg",
    url:"https://fuzz-et-friture.fr/phaser-quand-la-guitare-se-met-a-respirer/"
  },
  {
    name:"Big Muff Pi", maker:"Electro-Harmonix", decade:"années 1960", year:1969,
    type:"fuzz", typeLabel:"Fuzz / Distorsion", circuit:"4 transistors silicium en cascade",
    artist:"David Gilmour, Billy Corgan", price:2, priceLabel:"~90 €",
    img:IMG+"2026/05/q859092-big-muff.jpg",
    url:"https://fuzz-et-friture.fr/comparatif-fuzz-face-big-muff-boss-fz5/"
  },
  {
    name:"Ibanez Tube Screamer TS808", maker:"Ibanez", decade:"années 1970", year:1979,
    type:"od", typeLabel:"Overdrive", circuit:"Overdrive à écrêtage doux, mid-boost",
    artist:"Stevie Ray Vaughan", price:3, priceLabel:"~150 €",
    img:IMG+"2026/05/thomann-ibanez_ts808.jpg",
    url:"https://fuzz-et-friture.fr/pedale-tube-screamer-une-boite-verte-trois-potards/"
  },
  {
    name:"Boss BF-2 Flanger", maker:"Boss", decade:"années 1980", year:1980,
    type:"mod", typeLabel:"Flanger", circuit:"Flanger analogique BBD",
    artist:"Andy Summers", price:3, priceLabel:"~120 € (occasion)",
    img:IMG+"2026/05/boss-bf361ne4po8lbL.jpg",
    url:"https://fuzz-et-friture.fr/flanger-mode-avion/"
  },
  {
    name:"Boss CE-2 Chorus", maker:"Boss", decade:"années 1970", year:1979,
    type:"mod", typeLabel:"Chorus", circuit:"Chorus analogique BBD",
    artist:"Andy Summers (The Police)", price:3, priceLabel:"~130 € (occasion)",
    img:IMG+"2026/05/q315758-andy-summers.jpg",
    url:"https://fuzz-et-friture.fr/chorus-article/"
  },
  {
    name:"Dunlop Cry Baby", maker:"Dunlop", decade:"années 1960", year:1966,
    type:"mod", typeLabel:"Wah-wah", circuit:"Filtre passe-bande à balayage",
    artist:"Jimi Hendrix, Eric Clapton", price:2, priceLabel:"~90 €",
    img:IMG+"2026/06/vintage-1970s-aria-diamond-wah-fuzz.jpg",
    url:"https://fuzz-et-friture.fr/wha-wha-pedale-de-jimi-et-de-tous-les-saints/"
  },
  {
    name:"Boss FZ-5 Fuzz", maker:"Boss", decade:"années 2000", year:2007,
    type:"fuzz", typeLabel:"Fuzz", circuit:"Modélisation numérique (COSM)",
    artist:"—", price:1, priceLabel:"~85 €",
    img:IMG+"2026/06/fuzztone.jpg",
    url:"https://fuzz-et-friture.fr/comparatif-fuzz-face-big-muff-boss-fz5/"
  },
  {
    name:"Colorsound Power Boost", maker:"Colorsound", decade:"années 1970", year:1971,
    type:"od", typeLabel:"Boost / Overdrive", circuit:"Boost class-A à transistors",
    artist:"David Gilmour", price:4, priceLabel:"~300 € (réédition)",
    img:IMG+"2026/05/thomann-ibanez_ts9_tube_screamer.jpg",
    url:"https://fuzz-et-friture.fr/ces-overdrives-qui-ont-rendu-vos-amplis-accros/"
  },
  {
    name:"Electro-Harmonix Soul Food", maker:"Electro-Harmonix", decade:"années 2010", year:2013,
    type:"od", typeLabel:"Overdrive transparent", circuit:"Clone de Klon abordable",
    artist:"—", price:1, priceLabel:"~75 €",
    img:IMG+"2026/05/thomann-electro_harmonix_soul_food.jpg",
    url:"https://fuzz-et-friture.fr/klon-vs-clones-4-pedales-pour-le-son-du-centaur-sans-le-prix/"
  },
  {
    name:"Boss RV-6 Reverb", maker:"Boss", decade:"années 2010", year:2015,
    type:"mod", typeLabel:"Reverb", circuit:"Reverb numérique multi-modes",
    artist:"—", price:2, priceLabel:"~150 €",
    img:IMG+"2026/05/thomann-boss_rv_6.jpg",
    url:"https://fuzz-et-friture.fr/comment-choisir-ses-pedales-effets-guitare-2026/"
  }
];
