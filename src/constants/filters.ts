const FILTERS: { [key in string]: string[] } = {
  'lmpt-0': ['Turtwig', 'Chimchar', 'Piplup'],
  'lmpt-1': [
    'Poliwag',
    'Poliwhirl',
    'Magikarp',
    'Golduck',
    'Hisuian Qwilfish',
    'Gyarados',
    'Psyduck',
    'Eevee',
  ],
  'lmpt-2': [
    'Pidgey',
    'Nidoran♂',
    'Starly',
    'Doduo',
    'Bidoof',
    'Nidoran♀',
    'Hoothoot',
    'Kricketot',
    'Alolan Rattata',
  ],
  'lmpt-3': [
    'Alolan Meowth',
    'Surskit',
    'Galarian Slowpoke',
    'Masquerain',
    'Magikarp',
    'Starly',
    'Eevee',
    'Wynaut',
    'Azurill',
    'Bidoof',
    'Wingull',
    'Gyarados',
    'Psyduck',
  ],
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
    'Rioulu',
    'Mantyke',
  ],
  'lmpt-5': ['Turtwig', 'Chimchar', 'Piplup'],
  'lmpt-6': [
    'Burmy',
    'Houndour',
    'Zigzagoon',
    'Shinx',
    'Sentret',
    'Poochyena',
    'Rattata',
    'Growlithe',
    'Hoothoot',
    'Hisuian Growlithe',
  ],
  'lmpt-7': ['Bulbasaur', 'Charmander', 'Squirtle'],
  'lmpt-8': [
    'Galarian Slowpoke',
    'Magikarp',
    'Starly',
    'Golduck',
    'Lotad',
    'Crawdaunt',
    'Seedot',
    'Spearow',
    'Bidoof',
    'Cubone',
    'Galarian Zigzagoon',
    'Corphish',
    'Gyarados',
    'Abra',
    'Pineco',
    'Psyduck',
  ],
  'lmpt-9': [
    'Galarian Slowpoke',
    'Geodude',
    'Magikarp',
    'Whiscash',
    'Alolan Diglett',
    'Riolu',
    'Zubat',
    'Golbat',
    'Gyarados',
    'Barboach',
    'Diglett',
  ],
  'lmpt-10': ['Treecko', 'Torchic', 'Mudkip', 'Beldum'],
  'lmpt-11': ['Omanyte', 'Kabuto', 'Lileep', 'Anorith', 'Shieldon', 'Cranidos', 'Aerodactyl'],
  'lmpt-12': [
    'Weedle',
    'Golduck',
    'Goldeen',
    'Galarian Ponyta',
    'Caterpie',
    'Pikachu',
    'Ralts',
    'Roselia',
    'Ledyba',
    'Galarian Corsola',
    'Magikarp',
    'Marill',
    'Spinarak',
    'Budew',
    'Wurmple',
    'Seaking',
    'Sunkern',
    'Crawdaunt',
    'Bellsprout',
    'Corphish',
    'Starly',
    'Azumarill',
    'Gyarados',
    'Psyduck',
    'Oddish',
  ],
  'lmpt-13': [
    'Quagsire',
    'Geodude',
    'Magikarp',
    'Wooper',
    'Alolan Geodude',
    'Sandshrew',
    'Whiscash',
    'Zubat',
    'Hisuian Qwilfish',
    'Gyarados',
    'Barboach',
    'Psyduck',
    'Makuhita',
  ],
  'lmpt-14': ['Chikorita', 'Cyndaquil', 'Totodile'],
  'lmpt-15': ['Cherubi', 'Shroomish', 'Exeggcute', 'Seedot', 'Tangela'],
  'lmpt-16': [
    'Elekid',
    'Magnemite',
    'Chinchou',
    'Tentacruel',
    'Galarian Corsola',
    'Magikarp',
    'Electrike',
    'Lanturn',
    'Drifloon',
    'Shellos',
    'Gastrodon',
    'Plusle',
    'Shellder',
    'Voltorb',
    'Minun',
    'Tentacool',
    'Cloyster',
    'Hisuian Voltorb',
    'Pachirisu',
    'Gyarados',
    'Aipom',
    'Slakoth',
    'Caterpie',
    'Weedle',
    'Munchlax',
  ],
  'lmpt-17': [
    'Hoppip',
    'Chinchou',
    'Gastrodon',
    'Slowpoke',
    'Buizel',
    'Exeggcute',
    'Lanturn',
    'Tentacool',
    'Mareep',
    'Galarian Corsola',
    'Tentacruel',
    'Volbeat',
    'Pachirisu',
    'Marill',
    'Venonat',
    'Hisuian Qwilfish',
    'Gyarados',
    'Yanma',
    'Corphish',
    'Mime Jr.',
    'Plusle',
    'Cloyster',
    'Minun',
    'Bidoof',
    'Azumarill',
    'Shellos',
    'Crawdaunt',
    'Illumise',
    'Magikarp',
    'Shellder',
    'Croagunk',
    'Hisuian Growlithe',
    'Combee',
    'Burmy',
    'Pineco',
    'Wurmple',
    'Heracross',
    'Starly',
    'Pidgey',
    'Hoothoot',
    'Tailow',
    "Farfetch'd",
  ],
  'lmpt-18': [
    'Buneary',
    'Murkrow',
    'Shroomish',
    'Dustox',
    'Misdreavus',
    'Beautifly',
    'Stantler',
    'Paras',
    'Nincada',
    'Slakoth',
    'Taillow',
    'Beedrill',
  ],
  'lmpt-19': [
    'Porygon',
    'Dratini',
    'Poliwag',
    'Poliwhirl',
    'Magikarp',
    'Golduck',
    'Hisuian Qwilfish',
    'Dragonair',
    'Gyarados',
    'Psyduck',
  ],
  'lmpt-20': [
    'Stiched Gengar',
    'Rotom',
    'Raticate',
    'Gastly',
    'Haunter',
    'Koffing',
    'Duskull',
    'Shuppet',
    'Rattata',
  ],
  'lmpt-21': [
    'Magby',
    'Numel',
    'Gligar',
    'Torkoal',
    'Stunky',
    'Alolan Geodude',
    'Slugma',
    'Spoink',
    'Mankey',
    'Combee',
    'Burmy',
    'Pineco',
    'Silcoon',
    'Cascoon',
    'Heracross',
  ],
  'lmpt-22': [
    'Onix',
    'Sableye',
    'Baltoy',
    'Sandshrew',
    'Zubat',
    'Mawile',
    'Gible',
    'Geodude',
    'Gabite',
  ],
  'lmpt-23': [
    'Rhyhorn',
    'Machop',
    'Ponyta',
    'Stantler',
    'Larvitar',
    'Phanpy',
    'Galarian Meowth',
    'Aipom',
    'Slakoth',
    'Metapod',
    'Kakuna',
    'Munchlax',
  ],
  'lmpt-24': [
    'Dratini',
    'Clefairy',
    'Solrock',
    'Feebas',
    'Dragonair',
    'Geodude',
    'Bronzor',
    'Metang',
    'Bronzong',
    'Alolan Ninetales',
    'Medicham',
    'Magikarp',
    'Alolan Sandshrew',
    'Galarian Slowking',
    'Whiscash',
    'Chingling',
    'Loudred',
    'Lunatone',
    'Graveler',
    'Seadra',
    'Alolan Grimer',
    'Nosepass',
    'Spheal',
    'Absol',
    'Ursaring',
    'Horsea',
    'Abomasnow',
    'Seel',
    'Sneasler',
    'Zubat',
    'Golbat',
    'Beldum',
    'Donphan',
    'Galarian Slowpoke',
    'Chimecho',
    'Alolan Geodude',
    'Clefable',
    'Alolan Sandslash',
    'Gyarados',
    'Barboach',
    'Sealeo',
    'Cleffa',
  ],
  'lmpt-26': [
    'Kirlia',
    'Jigglypuff',
    'Remoraid',
    'Golduck',
    'Goldeen',
    'Bibarel',
    'Roselia',
    'Zangoose',
    'Magikarp',
    'Seviper',
    'Dunsparce',
    'Smeargle',
    'Seaking',
    'Octillery',
    'Skitty',
    'Galarian Slowpoke',
    'Gyarados',
    'Psyduck',
    "Galarian Farfetch'd",
    'Cherubi',
    'Shroomish',
    'Exeggcute',
    'Seedot',
    'Tangela',
  ],
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
    'Rioulu',
    'Mantyke',
  ],
  'lmpt-28': [
    'Vulpix',
    'Mime Jr.',
    'Scyther',
    'Galarian Corsola',
    'Seaking',
    'Magikarp',
    'Gyarados',
    'Staravia',
    'Golduck',
    'Goldeen',
    'Glameow',
    'Chansey',
    'Meowth',
    'Purugly',
    'Snubbull',
    'Bonsly',
    'Psyduck',
    'Staravia',
    'Pidgeotto',
    'Noctowl',
    'Swellow',
    "Farfetch'd",
    'Spiritomb',
  ],
  'lmpt-29': ['Ditto'],
  'lmpt-30': ['Unown'],
  'lmpt-31': [
    'Murkrow',
    'Haunter',
    'Misdreavus',
    'Banette',
    'Duskull',
    'Koffing',
    'Shuppet',
    'Golbat',
    'Dusclops',
  ],
  'lmpt-32': [
    'Absol',
    'Exeggutor',
    'Marill',
    'Drowzee',
    'Mightyena',
    'Lickitung',
    'Hypno',
    'Exeggcute',
    'Linoone',
    'Kadabra',
    'Aipom',
    'Vigoroth',
    'Metapod',
    'Kakuna',
    'Munchlax',
  ],
  'lmpt-34': [
    'Rhyhorn',
    'Houndour',
    'Numel',
    'Galarian Slowpoke',
    'Cacnea',
    'Spinda',
    'Seaking',
    'Magikarp',
    'Golduck',
    'Goldeen',
    'Spoink',
    'Gyarados',
    'Psyduck',
    'Graveler',
    "Galarian Farfetch'd",
    'Aipom',
    'Vigoroth',
    'Butterfree',
    'Beedrill',
    'Munchlax',
  ],
  'lmpt-35': [
    'Alolan Diglett',
    'Loudred',
    'Hippopotas',
    'Ditto',
    'Alolan Dugtrio',
    'Whismur',
    'Dugtrio',
    'Trapinch',
    'Diglett',
  ],
  'lmpt-36': [
    'Nidoking',
    'Alolan Exeggutor',
    'Kricketune',
    'Nidorina',
    'Girafarig',
    'Bibarel',
    'Nidorino',
    'Venomoth',
  ],
  'lmpt-37': [
    'Absol',
    'Floatzel',
    'Remoraid',
    'Galarian Linoone',
    'Gastrodon (East)',
    'Galarian Corsola',
    'Magikarp',
    'Wailmer',
    'Octillery',
    'Chatot',
    'Tentacool',
    'Wailord',
    'Wingull',
    'Gyarados',
    'Shuckle',
    'Swellow',
    'Pelipper',
    'Tentacruel',
    'Staravia',
    'Pidgeotto',
    'Noctowl',
    "Farfetch'd",
  ],
  'lmpt-38': [
    'Toxicroak',
    'Skorupi',
    'Bibarel',
    'Carvanha',
    'Yanmega',
    'Yanma',
    'Magikarp',
    'Wooper',
    'Hisuian Sneasel',
    'Whiscash',
    'Marill',
    'Swalot',
    'Gulpin',
    'Parasect',
    'Carnivine',
    'Shroomish',
    'Quagsire',
    'Ursaring',
    'Sharpedo',
    'Drapion',
    'Croagunk',
    'Kangaskhan',
    'Tropius',
    'Breloom',
    'Exeggcute',
    'Hisuian Qwilfish',
    'Tangela',
    'Gyarados',
    'Barboach',
  ],
  'lmpt-39': [
    'Cyndaquil',
    'Happiny',
    'Teddiursa',
    'Eevee',
    'Pichu',
    'Igglybuff',
    'Porygon',
    'Togepi',
    'Castform',
    'Pikachu',
    'Cleffa',
  ],
  'lmpt-40': [
    'Dratini',
    'Rapidash',
    'Golduck',
    'Drifblim',
    'Shelgon',
    'Dragonair',
    'Galarian Weezing',
    'Noctowl',
    'Scyther',
    'Fearow',
    'Zangoose',
    'Magikarp',
    'Skarmory',
    'Nuzleaf',
    'Kecleon',
    'Seviper',
    'Alolan Grimer',
    'Seadra',
    'Pinsir',
    'Swablu',
    'Horsea',
    'Kricketune',
    'Pidgeotto',
    'Machoke',
    'Galarian Slowpoke',
    'Tauros',
    'Miltank',
    'Gyarados',
    'Psyduck',
    'Combee',
    'Pineco',
    'Silcoon',
    'Cascoon',
    'Mothim',
    'Heracross',
    'Staravia',
    'Pidgeotto',
    'Noctowl',
    'Swellow',
    "Farfetch'd",
  ],
  'lmpt-41': [
    'Pichu',
    'Relicanth',
    'Galarian Corsola',
    'Magikarp',
    'Golduck',
    'Gyarados',
    'Psyduck',
  ],
  'lmpt-42': [
    'Manectric',
    'Shellos',
    'Gastrodon',
    'Forretress',
    'Magneton',
    'Galarian Corsola',
    'Magikarp',
    'Shellder',
    'Magmar',
    'Weezing',
    'Alolan Muk',
    'Magnemite',
    'Tentacool',
    'Finneon',
    'Lumineon',
    'Gyarados',
    'Tentacruel',
    'Combee',
    'Forretress',
    'Wormadam',
    'Mothim',
    'Beautifly',
    'Dustox',
  ],
  'lmpt-43': [
    'Huntail',
    'Kingler',
    'Horsea',
    'Clamperl',
    'Galarian Slowbro',
    'Krabby',
    'Pelipper',
    'Tentacool',
    'Wingull',
    'Gorebyss',
    'Seadra',
    'Tentacruel',
  ],
  'lmpt-44': [
    'Horsea',
    'Floatzel',
    'Mantyke',
    'Pelipper',
    'Luvdisc',
    'Mantine',
    'Corsola',
    'Wingull',
    'Galarian Slowbro',
    'Seadra',
    'Obstagoon',
  ],
  'lmpt-45': [
    'Skuntank',
    'Tentacruel',
    'Huntail',
    'Krabby',
    'Galarian Corsola',
    'Wingull',
    'Gorebyss',
    'Nidorino',
    'Seadra',
    'Kingler',
    'Horsea',
    'Clamperl',
    'Tentacool',
    'Perrserker',
    'Nidorina',
    'Girafarig',
    'Sudowoodo',
    'Pelipper',
    'Dodrio',
    "Farfetch'd",
    'Cherrim',
    'Shroomish',
    'Exeggcute',
    'Nuzleaf',
    'Tangela',
  ],
  'lmpt-46': [
    'Chatot',
    'Finneon',
    'Tentacruel',
    'Magikarp',
    'Starmie',
    'Electrode',
    'Alolan Dugtrio',
    'Shellos',
    'Gastrodon',
    'Mr. Mime',
    'Tentacool',
    'Purugly',
    'Ditto',
    'Electabuzz',
    'Staryu',
    'Galarian Slowpoke',
    'Floatzel',
    'Lumineon',
    'Gyarados',
    'Combee',
    'Forretress',
    'Wormadam',
    'Mothim',
    'Beautifly',
    'Dustox',
  ],
  'lmpt-47': [
    'Shellos',
    'Staryu',
    'Gastrodon',
    'Overqwil',
    'Magikarp',
    'Starmie',
    'Finneon',
    'Tentacool',
    'Lumineon',
    'Gyarados',
    'Tentacruel',
  ],
  'lmpt-48': [
    'Lairon',
    'Qwilfish',
    'Finneon',
    'Rhydon',
    'Tentacruel',
    'Magikarp',
    'Sableye',
    'Cursola',
    'Wingull',
    'Graveler',
    'Nosepass',
    'Steelix',
    'Tentacool',
    'Mawile',
    'Golbat',
    'Pelipper',
    'Lumineon',
    'Alolan Graveler',
    'Gyarados',
  ],
  'lmpt-49': ['Azelf'],
  'lmpt-50': [
    'Tyrogue',
    'Swablu',
    'Machop',
    'Meditite',
    'Teddiursa',
    'Chingling',
    'Koffing',
    'Cubone',
    'Bagon',
    'Natu',
    'Aipom',
    'Slakoth',
    'Metapod',
    'Kakuna',
    'Munchlax',
  ],
  'lmpt-51': [
    'Alolan Vulpix',
    'Alolan Sandshrew',
    'Snorunt',
    'Swinub',
    'Delibird',
    'Sneasel',
    'Snover',
    'Smoochum',
  ],
  'lmpt-52': [
    'Abomasnow',
    'Alolan Ninetales',
    'Snorunt',
    'Delibird',
    'Galarian Mr. Mime',
    'Sneasel',
    'Glalie',
    'Froslass',
    'Jynx',
    'Piloswine',
  ],
  'lmpt-53': [
    'Sneasler',
    'Abomasnow',
    'Snorunt',
    'Delibird',
    'Sneasel',
    'Glalie',
    'Froslass',
    'Jynx',
    'Piloswine',
  ],
  'lmpt-54': [
    'Steelix',
    'Weavile',
    'Alolan Ninetales',
    'Sneasel',
    'Glalie',
    'Froslass',
    'Jynx',
    'Golbat',
    'Graveler',
  ],
  'lmpt-55': ['Uxie'],
  'lmpt-56': ['Dialga', 'Palkia'],
  'lmpt-57': [
    'Solrock',
    'Chimecho',
    'Gyarados',
    'Magikarp',
    'Galarian Slowking',
    'Staravia',
    'Golduck',
    'Lunatone',
    'Wobbuffet',
    'Cursola',
    'Bibarel',
    'Dusclops',
  ],
  'lmpt-58': [
    'Remoraid',
    'Chatot',
    'Tentacruel',
    'Delcatty',
    'Flaaffy',
    'Shinx',
    'Magikarp',
    'Wailmer',
    'Wailord',
    'Cursola',
    'Wingull',
    'Luxio',
    'Mr. Mime',
    'Alolan Raichu',
    'Octillery',
    'Tentacool',
    'Purugly',
    'Electabuzz',
    'Pelipper',
    'Floatzel',
    'Gyarados',
    'Tangela',
    'Heracross',
    "Farfetch'd",
    'Snorlax',
  ],
  'lmpt-59': [
    'Staryu',
    'Kingler',
    'Krabby',
    'Gyarados',
    'Magikarp',
    'Starmie',
    'Cursola',
    'Mantine',
    'Pelipper',
    'Tentacruel',
  ],
  'lmpt-60': [
    'Remoraid',
    'Gyarados',
    'Octillery',
    'Wailmer',
    'Magikarp',
    'Wailord',
    'Cursola',
    'Mantine',
    'Pelipper',
    'Tentacruel',
  ],
  'lmpt-61': [
    'Gyarados',
    'Magikarp',
    'Galarian Slowking',
    'Luvdisc',
    'Corsola',
    'Mantine',
    'Pelipper',
    'Tentacruel',
  ],
  'lmpt-62': [
    'Lapras',
    'Poliwag',
    'Gastrodon',
    'Poliwhirl',
    'Shellos (East)',
    'Sharpedo',
    'Magikarp',
    'Carvanha',
    'Tentacool',
    'Hisuian Qwilfish',
    'Gyarados',
    'Tentacruel',
  ],
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
  'lmpt-64': [
    'Kirlia',
    'Toxicroak',
    'Shellos (East)',
    'Remoraid',
    'Teddiursa',
    'Goldeen',
    'Roselia',
    'Scyther',
    'Arbok',
    'Magikarp',
    'Marill',
    'Gloom',
    'Wooper',
    'Whiscash',
    'Ekans',
    'Muk',
    'Gastrodon',
    'Quagsire',
    'Smeargle',
    'Seaking',
    'Octillery',
    'Staravia',
    'Croagunk',
    'Lombre',
    'Grimer',
    'Koffing',
    'Weezing',
    'Hisuian Qwilfish',
    'Azumarill',
    'Weepinbell',
    'Gyarados',
    'Barboach',
    "Farfetch'd",
    'Cherrim',
    'Cherubi',
    'Shroomish',
    'Exeggcute',
    'Nuzleaf',
    'Tangela',
  ],
  'lmpt-65': ['Manaphy'],
  'lmpt-66': [
    'Surskit',
    "Sirfetch'd",
    'Masquerain',
    'Gyarados',
    'Bibarel',
    'Magikarp',
    'Staravia',
    'Golduck',
    'Lickitung',
    'Wobbuffet',
    'Galarian Slowbro',
  ],
  'lmpt-67': [
    'Mr. Rime',
    'Abomasnow',
    'Lapras',
    'Magikarp',
    'Piloswine',
    'Sneasel',
    'Glalie',
    'Wobbuffet',
    'Cursola',
    'Jynx',
    'Dewgong',
    'Gyarados',
    'Sealeo',
  ],
  'lmpt-68': [],
  'lmpt-69': [
    'Onix',
    'Aron',
    'Alolan Diglett',
    'Zubat',
    'Alolan Dugtrio',
    'Whismur',
    'Trapinch',
    'Geodude',
  ],
  'lmpt-70': [
    'Alolan Golem',
    'Hariyama',
    'Lickitung',
    'Golem',
    'Rhydon',
    'Kadabra',
    'Medicham',
    'Magikarp',
    'Sableye',
    'Marowak',
    'Graveler',
    'Steelix',
    'Gyarados',
    'Gabite',
    'Mawile',
    'Golbat',
    'Machoke',
    'Floatzel',
    'Magneton',
    'Dewgong',
    'Azumarill',
    'Galarian Slowbro',
  ],
  'lmpt-71': [
    'Weedle',
    'Roselia',
    'Dustox',
    'Xatu',
    'Gastrodon (East)',
    'Gyarados',
    'Beautifly',
    'Magikarp',
    'Gloom',
    'Chatot',
    'Luvdisc',
    'Hisuian Electrode',
    'Corsola',
    'Weepinbell',
    'Galarian Slowbro',
    'Shuckle',
    'Pelipper',
    'Tentacruel',
  ],
  'lmpt-72': [
    'Raticate',
    'Machoke',
    'Poliwhirl',
    'Fearow',
    'Hariyama',
    'Magikarp',
    'Alolan Persian',
    'Golduck',
    'Whiscash',
    'Grumpig',
    'Cursola',
    'Gyarados',
    'Barboach',
    'Graveler',
    'Primeape',
  ],
  'lmpt-73': [
    'Raticate',
    'Kingler',
    'Relicanth',
    'Overqwil',
    'Horsea',
    'Fearow',
    'Rapidash',
    'Arbok',
    'Sandslash',
    'Magikarp',
    'Dodrio',
    'Galarian Rapidash',
    'Pelipper',
    'Wingull',
    'Gyarados',
    'Seadra',
    'Tentacruel',
  ],
  'lmpt-74': [
    'Poliwhirl',
    'Gligar',
    'Torkoal',
    'Camerupt',
    'Spinda',
    'Magikarp',
    'Skarmory',
    'Galarian Slowking',
    'Whiscash',
    'Weezing',
    'Perrserker',
    'Gyarados',
    'Rhydon',
    'Barboach',
  ],
  'lmpt-75': [
    'Houndour',
    'Poliwhirl',
    'Claydol',
    'Metang',
    'Magikarp',
    'Gabite',
    'Whiscash',
    'Cursola',
    'Vibrava',
    'Cacturne',
    'Gyarados',
    'Hippowdon',
    'Alolan Dugtrio',
    'Dugtrio',
    'Barboach',
  ],
  'lmpt-76': [
    'Ledian',
    'Volbeat',
    'Alolan Exeggutor',
    'Roselia',
    'Scyther',
    'Masquerain',
    'Gyarados',
    'Seaking',
    'Magikarp',
    'Pinsir',
    'Sunkern',
    'Ariados',
    'Goldeen',
    'Illumise',
    'Weepinbell',
    'Galarian Slowbro',
    'Venomoth',
  ],
  'lmpt-77': [
    'Golduck',
    'Tentacruel',
    'Zangoose',
    'Gastrodon (East)',
    'Magikarp',
    'Galarian Slowking',
    'Wailmer',
    'Wailord',
    'Corsola',
    'Seviper',
    'Smeargle',
    'Pelipper',
    'Floatzel',
    'Tropius',
    'Obstagoon',
    'Togetic',
    'Gyarados',
    'Sealeo',
    'Perrserker',
  ],
  'lmpt-78': [],
  'lmpt-79': [],
  'lmpt-80': ['Magikarp', 'Overqwil'],
  'lmpt-81': [
    'Machoke',
    'Alolan Marowak',
    'Gligar',
    'Torkoal',
    'Fearow',
    'Camerupt',
    'Skarmory',
    'Magmar',
    'Weezing',
    'Golbat',
    'Muk',
    'Magcargo',
    'Rhydon',
    'Galarian Weezing',
    'Graveler',
  ],
  'lmpt-82': [
    'Bronzong',
    'Solrock',
    'Banette',
    'Dusclops',
    'Haunter',
    'Lunatone',
    'Golbat',
    'Chimecho',
    'Bronzor',
    'Typhlosion',
    'Hisuian Typhlosion',
  ],
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

export default FILTERS;
