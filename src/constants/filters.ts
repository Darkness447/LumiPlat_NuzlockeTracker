import data from './generated_files/Encounter_output.json'

type EncounterTable = {[key in string]: string[]}

const staticEncounters: EncounterTable = {
  'lmpt-0': ['Turtwig', 'Chimchar', 'Piplup'],
  'lmpt-1': ['Eevee'],
  'lmpt-3': ['Eevee'],
  'lmpt-4': [
    'Pichu',
    'Cleffa',
    'Igglybuff',
    'Togepi',
    'Smoochum',
    'Tyrogue',
    'Smoochum',
    'Elekid',
    'Magby',
    'Azurill',
    'Wynaut',
    'Budew',
    'Chingling',
    'Bonsly',
    'Mime Jr.',
    'Happiny',
    'Munchlax',
    'Riolu',
    'Mantyke',
  ],
  'lmpt-5': ['Turtwig', 'Chimchar', 'Piplup'],
  'lmpt-7': ['Bulbasaur', 'Charmander', 'Squirtle'],
  'lmpt-10': ['Treecko', 'Torchic', 'Mudkip', 'Beldum'],
  'lmpt-11': ['Omanyte', 'Kabuto', 'Lileep', 'Anorith', 'Shieldon', 'Cranidos', 'Aerodactyl'],
  'lmpt-14': ['Chikorita', 'Cyndaquil', 'Totodile'],
  'lmpt-19': ['Porygon'],
  'lmpt-20': ['Stitched Gengar', 'Rotom'],
  'lmpt-22': ['Gabite'],
  'lmpt-27': [
    'Pichu',
    'Cleffa',
    'Igglybuff',
    'Togepi',
    'Smoochum',
    'Tyrogue',
    'Smoochum',
    'Elekid',
    'Magby',
    'Azurill',
    'Wynaut',
    'Budew',
    'Chingling',
    'Bonsly',
    'Mime Jr.',
    'Happiny',
    'Munchlax',
    'Riolu',
    'Mantyke',
  ],
  'lmpt-28': ['Spiritomb'],
  'lmpt-29': ['Ditto'],
  'lmpt-41': ['Pichu'],
  'lmpt-49': ['Azelf'],
  'lmpt-55': ['Uxie'],
  'lmpt-56': ['Dialga', 'Palkia'],
  'lmpt-62': ['Lapras'],
  'lmpt-63': [
    'Zubat',
    'Psyduck',
    'Machop',
    'Geodude',
    'Murkrow',
    'Bidoof',
    'Kricketot',
    'Shinx',
    'Budew',
    'Pachirisu',
    'Buneary',
    'Lickitung',
    'Magnemite',
    'Rhyhorn',
    'Houndoom',
    'Swablu',
    'Absol',
    'Golbat',
    'Hoothoot',
    'Bibarel',
    'Chingling',
    'Stunky',
    'Skuntank',
    'Machoke',
    'Graveler',
    'Aipom',
    'Wingull',
    'Munchlax',
    'Purugly',
    'Pelipper',
    'Luxio',
    'Glameow',
    'Mantyke',
    'Wurmple',
    'Silcoon',
    'Roselia',
    'Combee',
    'Cherubi',
    'Scyther',
    'Pinsir',
    'Buizel',
    'Shellos',
    'Gastrodon',
    'Togepi',
    'Ralts',
    'Barboach',
    'Wooper',
    'Quagsire',
    'Tentacool',
    'Tentracruel',
    'Gible',
    'Octillery',
    'Whiscash',
    'Gabite',
    'Onix',
    'Skorupi',
    'Gligar',
    'Teddiursa',
    'Bronzor',
    'Hippopotas',
    'Magby',
    'Ponyta',
    'Croagunk',
    'Swinub',
    'Gastly',
    'Misdreavus',
    'Smoochum',
    'Elekid',
    'Duskull',
    'Meditie',
    'Kadabra',
    'Girafarig',
    'Mr. Mime',
    'Snorunt',
    'Glalie',
    'Sneasel',
    'Snover',
  ],
  'lmpt-65': ['Manaphy'],
  'lmpt-68': [],
  'lmpt-78': [],
  'lmpt-79': [],
  'lmpt-83': ['Crystal Onix'],
  'lmpt-84': ['Articuno'],
  'lmpt-85': ['Zapdos'],
  'lmpt-86': ['Moltres'],
  'lmpt-87': ['Mewtwo'],
  'lmpt-88': ['Raikou'],
  'lmpt-89': ['Entei'],
  'lmpt-90': ['Suicune'],
  'lmpt-91': ['Lugia'],
  'lmpt-92': ['Ho-oh'],
  'lmpt-93': ['Celebi'],
  'lmpt-94': ['Regirock', 'Registeel', 'Regice', 'Regigigas'],
  'lmpt-95': ['Latios', 'Latias', 'Cresselia'],
  'lmpt-96': ['Kyogre'],
  'lmpt-97': ['Groudon'],
  'lmpt-98': ['Rayquaza'],
  'lmpt-99': ['Jirachi'],
  'lmpt-100': ['Deoxys'],
  'lmpt-101': ['Mesprit'],
  'lmpt-102': ['Heatran'],
  'lmpt-103': ['Giratina'],
  'lmpt-104': ['Darkrai'],
  'lmpt-105': ['Shaymin'],
  'lmpt-106': ['Arceus'],
};

const wildEncounters: EncounterTable = data;

const FILTERS: EncounterTable = {}

for (const [routeId, encounters] of Object.entries(wildEncounters)) {
  FILTERS[routeId] = encounters;
}

for (const [routeId, encounters] of Object.entries(staticEncounters)) {
  if(!(routeId in wildEncounters)) {
    FILTERS[routeId] = [];
  }
  FILTERS[routeId].push(...encounters)
}

export default FILTERS;
