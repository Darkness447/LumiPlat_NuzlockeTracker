import React from 'react';
import { SPECIAL_NAMES } from 'constants/constant';
import { POKEMAP } from 'constants/pokemon';

const mons = ["abomasnow","abra","absol","accelgor","aegislash","aegislash-attack","aerodactyl","aggron","aipom","alakazam","alcremie","alcremie-berry-sweet","alcremie-caramel-swirl-berry-sweet","alcremie-caramel-swirl-clove-sweet","alcremie-caramel-swirl-flower-sweet","alcremie-caramel-swirl-love-sweet","alcremie-caramel-swirl-ribbon-sweet","alcremie-caramel-swirl-star-sweet","alcremie-caramel-swirl-strawberry-sweet","alcremie-clove-sweet","alcremie-flower-sweet","alcremie-lemon-cream-berry-sweet","alcremie-lemon-cream-clove-sweet","alcremie-lemon-cream-flower-sweet","alcremie-lemon-cream-love-sweet","alcremie-lemon-cream-ribbon-sweet","alcremie-lemon-cream-star-sweet","alcremie-lemon-cream-strawberry-sweet","alcremie-love-sweet","alcremie-matcha-cream-berry-sweet","alcremie-matcha-cream-clover-sweet","alcremie-matcha-cream-flower-sweet","alcremie-matcha-cream-love-sweet","alcremie-matcha-cream-ribbon-sweet","alcremie-matcha-cream-star-sweet","alcremie-matcha-cream-strawberry-sweet","alcremie-mint-cream-berry-sweet","alcremie-mint-cream-clove-sweet","alcremie-mint-cream-flower-sweet","alcremie-mint-cream-love-sweet","alcremie-mint-cream-ribbon-sweet","alcremie-mint-cream-star-sweet","alcremie-mint-cream-strawberry-sweet","alcremie-rainbow-swirl-berry-sweet","alcremie-rainbow-swirl-clove-sweet","alcremie-rainbow-swirl-flower-sweet","alcremie-rainbow-swirl-love-sweet","alcremie-rainbow-swirl-ribbon-sweet","alcremie-rainbow-swirl-star-sweet","alcremie-rainbow-swirl-strawberry-sweet","alcremie-ribbon-sweet","alcremie-ruby-cream-berry-sweet","alcremie-ruby-cream-clove-sweet","alcremie-ruby-cream-flower-sweet","alcremie-ruby-cream-love-sweet","alcremie-ruby-cream-ribbon-sweet","alcremie-ruby-cream-star-sweet","alcremie-ruby-cream-strawberry-sweet","alcremie-ruby-swirl-berry-sweet","alcremie-ruby-swirl-clove-sweet","alcremie-ruby-swirl-flower-sweet","alcremie-ruby-swirl-love-sweet","alcremie-ruby-swirl-ribbon-sweet","alcremie-ruby-swirl-star-sweet","alcremie-ruby-swirl-strawberry-sweet","alcremie-salted-cream-berry-sweet","alcremie-salted-cream-clove-sweet","alcremie-salted-cream-flower-sweet","alcremie-salted-cream-love-sweet","alcremie-salted-cream-ribbon-sweet","alcremie-salted-cream-star-sweet","alcremie-salted-cream-strawberry-sweet","alcremie-star-sweet","alcremie-strawberry-sweet","alcremie-vanilla-cream-berry-sweet","alcremie-vanilla-cream-clove-sweet","alcremie-vanilla-cream-flower-sweet","alcremie-vanilla-cream-love-sweet","alcremie-vanilla-cream-ribbon-sweet","alcremie-vanilla-cream-star-sweet","alcremie-vanilla-cream-strawberry-sweet","alomomola","altaria","amaura","ambipom","amoonguss","ampharos","anorith","appletun","applin","araquanid","arbok","arcanine","arcanine-hisui","arceus","arceus-bug","arceus-dark","arceus-dragon","arceus-electric","arceus-fairy","arceus-fighting","arceus-fire","arceus-flying","arceus-ghost","arceus-grass","arceus-ground","arceus-ice","arceus-poison","arceus-psychic","arceus-rock","arceus-steel","arceus-unknown","arceus-water","archen","archeops","arctovish","arctozolt","ariados","armaldo","aromatisse","aron","arrokuda","articuno","audino","aurorus","avalugg","avalugg-hisui","axew","azelf","azumarill","azurill","bagon","baltoy","banette","barbaracle","barboach","barraskewda","basculegion","basculegion-white","basculin","basculin-blue","basculin-white","bastiodon","bayleef","beartic","beautifly","beedrill","beheeyem","beldum","bellossom","bellsprout","bergmite","bewear","bibarel","bidoof","binacle","bisharp","blacephalon","blastoise","blaziken","blipbug","blissey","blitzle","boldore","boltund","bonsly","bouffalant","bounsweet","braixen","braviary","braviary-hisui","breloom","brionne","bronzong","bronzor","bruxish","budew","buizel","bulbasaur","buneary","bunnelby","burmy","burmy-plant","burmy-sandy","burmy-trash","butterfree","buzzwole","cacnea","cacturne","calyrex","camerupt","carbink","carkol","carnivine","carracosta","carvanha","cascoon","castform","castform-hail","castform-rain","castform-sun","caterpie","celebi","celesteela","centiskorch","chandelure","chansey","charizard","charjabug","charmander","charmeleon","chatot","cherrim","cherrim-overcast","cherrim-sunshine","cherubi","chesnaught","chespin","chewtle","chikorita","chimchar","chimecho","chinchou","chingling","cinccino","cinderace","clamperl","clauncher","clawitzer","claydol","clefable","clefairy","cleffa","clobbopus","cloyster","coalossal","cobalion","cofagrigus","combee","combusken","comfey","conkeldurr","copperajah","corphish","corsola","corsola-galar","corviknight","corvisquire","cosmoem","cosmog","cottonee","cottonee-hisui","crabominable","crabrawler","cradily","cramorant","cramorant-gorging","cramorant-gulping","cranidos","crawdaunt","cresselia","croagunk","crobat","croconaw","crustle","cryogonal","cubchoo","cubone","cufant","cursola","cutiefly","cyndaquil","darkrai","darmanitan","darmanitan-galar","darmanitan-galar-zen","darmanitan-zen","dartrix","darumaka","darumaka-galar","decidueye","decidueye-hisui","dedenne","deerling","deerling-autumn","deerling-spring","deerling-summer","deerling-winter","deino","delcatty","delibird","delphox","deoxys","deoxys-attack","deoxys-defense","deoxys-speed","dewgong","dewott","dewpider","dhelmise","dialga","dialga-origin","diancie","diggersby","diglett","diglett-alola","ditto","dodrio","doduo","donphan","dottler","doublade","dracovish","dracozolt","dragalge","dragapult","dragonair","dragonite","drakloak","drampa","drapion","dratini","drednaw","dreepy","drifblim","drifloon","drilbur","drizzile","drowzee","druddigon","dubwool","ducklett","dugtrio","dugtrio-alola","dunsparce","duosion","duraludon","durant","dusclops","dusknoir","duskull","dustox","dwebble","eelektrik","eelektross","eevee","eiscue","eiscue-noice","ekans","eldegoss","electabuzz","electivire","electrike","electrode","electrode-hisui","elekid","elgyem","emboar","emolga","empoleon","enamorus","enamorus-t","entei","escavalier","espeon","espurr","eternatus","excadrill","exeggcute","exeggutor","exeggutor-alola","exploud","falinks","farfetchd","farfetchd-galar","fearow","feebas","fennekin","feraligatr","ferroseed","ferrothorn","finneon","flaaffy","flabebe","flabebe-blue","flabebe-orange","flabebe-red","flabebe-white","flabebe-yellow","flapple","flareon","fletchinder","fletchling","floatzel","floette","floette-blue","floette-orange","floette-red","floette-white","floette-yellow","florges","florges-blue","florges-orange","florges-red","florges-white","florges-yellow","flygon","fomantis","foongus","forretress","fraxure","frillish","froakie","frogadier","froslass","froslass-frost","froslass-wash","frosmoth","furfrou","furfrou-dandy","furfrou-debutante","furfrou-diamond","furfrou-heart","furfrou-kabuki","furfrou-la-reine","furfrou-matron","furfrou-natural","furfrou-pharaoh","furfrou-star","furret","gabite","gallade","galvantula","garbodor","garchomp","gardevoir","gastly","gastrodon","gastrodon-east","gastrodon-west","genesect","genesect-burn","genesect-chill","genesect-douse","genesect-shock","gengar","geodude","geodude-alola","gible","gigalith","girafarig","giratina","giratina-origin","glaceon","glalie","glameow","glastrier","gligar","gliscor","gloom","gogoat","golbat","goldeen","golduck","golem","golem-alola","golett","golisopod","golurk","goodra","goodra-hisui","goomy","gorebyss","gossifleur","gothita","gothitelle","gothorita","gourgeist","granbull","grapploct","graveler","graveler-alola","greedent","greninja","greninja-ash","grimer","grimer-alola","grimmsnarl","grookey","grotle","groudon","grovyle","growlithe","growlithe-hisui","grubbin","grumpig","gulpin","gumshoos","gurdurr","guzzlord","gyarados","hakamo-o","happiny","hariyama","hatenna","hatterene","hattrem","haunter","hawlucha","haxorus","heatmor","heatran","heliolisk","helioptile","heracross","herdier","hippopotas","hippowdon","hitmonchan","hitmonlee","hitmontop","ho-oh","honchkrow","honedge","honedge-f","hoopa","hoothoot","hoppip","horsea","houndoom","houndour","huntail","hydreigon","hypno","igglybuff","illumise","impidimp","incineroar","indeedee","indeedee-f","infernape","inkay","inteleon","ivysaur","jangmo-o","jellicent","jigglypuff","jirachi","jolteon","joltik","jumpluff","jynx","kabuto","kabutops","kadabra","kakuna","kangaskhan","karrablast","kartana","kecleon","keldeo","keldeo-resolute","kingdra","kingler","kirlia","klang","kleavor","klefki","klink","klinklang","koffing","komala","kommo-o","krabby","kricketot","kricketune","krokorok","krookodile","kubfu","kyogre","kyurem","kyurem-black","kyurem-white","lairon","lampent","landorus","landorus-t","lanturn","lapras","larvesta","larvitar","latias","latios","leafeon","leavanny","ledian","ledyba","lickilicky","lickitung","liepard","lileep","lilligant","lilligant-hisui","lillipup","linoone","linoone-galar","litleo","litten","litwick","lombre","lopunny","lotad","loudred","lucario","ludicolo","lugia","lumineon","lunala","lunatone","lurantis","luvdisc","luxio","luxray","lycanroc","lycanroc-dusk","lycanroc-midnight","machamp","machoke","machop","magby","magcargo","magearna","magikarp","magmar","magmortar","magnemite","magneton","magnezone","makuhita","malamar","mamoswine","manaphy","mandibuzz","manectric","mankey","mantine","mantyke","maractus","mareanie","mareep","marill","marowak","marowak-alola","marshadow","marshtomp","masquerain","mawile","medicham","meditite","meganium","melmetal","meloetta","meloetta-piro","meltan","meowstic","meowstic-f","meowth","meowth-alola","meowth-galar","mesprit","metagross","metang","metapod","mew","mewtwo","mienfoo","mienshao","mightyena","milcery","milotic","miltank","mime-jr","mimikyu","minccino","minior","minun","misdreavus","mismagius","moltres","monferno","morelull","morgrem","morpeko","morpeko-hangry","mothim","mr-mime","mr-mime-galar","mr-rime","mudbray","mudkip","mudsdale","muk","muk-alola","munchlax","munna","murkrow","musharna","naganadel","natu","necrozma","nickit","nidoking","nidoqueen","nidoran-f","nidoran-m","nidorina","nidorino","nihilego","nincada","ninetales","ninetales-alola","ninjask","noctowl","noibat","noivern","nosepass","numel","nuzleaf","obstagoon","octillery","oddish","omanyte","omastar","onix","oranguru","orbeetle","oricorio","oshawott","overqwil","pachirisu","palkia","palkia-origin","palossand","palpitoad","pancham","pangoro","panpour","pansage","pansear","paras","parasect","passimian","patrat","pawniard","pelipper","perrserker","persian","persian-alola","petilil","phanpy","phantump","pheromosa","phione","pichu","pidgeot","pidgeotto","pidgey","pidove","pignite","pikachu","pikipek","piloswine","pincurchin","pineco","pinsir","piplup","plusle","poipole","politoed","poliwag","poliwhirl","poliwrath","polteageist","ponyta","ponyta-galar","poochyena","popplio","porygon","porygon-z","porygon2","primarina","primeape","prinplup","probopass","psyduck","pumpkaboo","pupitar","purrloin","purugly","pyroar","pyukumuku","quagsire","quilava","quilladin","qwilfish","qwilfish-hisui","raboot","raichu","raichu-alola","raikou","ralts","rampardos","rapidash","rapidash-galar","raticate","raticate-alola","rattata","rattata-alola","rayquaza","regice","regidrago","regieleki","regigigas","regirock","registeel","relicanth","remoraid","reshiram","reuniclus","rhydon","rhyhorn","rhyperior","ribombee","rillaboom","riolu","rockruff","roggenrola","rolycoly","rookidee","roselia","roserade","rotom","rotom-fan","rotom-frost","rotom-heat","rotom-mow","rotom-wash","rowlet","rufflet","runerigus","sableye","salamence","salandit","salazzle","samurott","samurott-hisui","sandaconda","sandile","sandshrew","sandshrew-alola","sandslash","sandslash-alola","sandygast","sawk","sawsbuck","sawsbuck-autumn","sawsbuck-spring","sawsbuck-summer","sawsbuck-winter","scatterbug","sceptile","scizor","scolipede","scorbunny","scrafty","scraggy","scyther","seadra","seaking","sealeo","seedot","seel","seismitoad","sentret","serperior","servine","seviper","sewaddle","sharpedo","shaymin","shaymin-sky","shedinja","shelgon","shellder","shellder-alola","shellos","shellos-east","shellos-west","shelmet","shieldon","shiftry","shiinotic","shinx","shroomish","shuckle","shuppet","sigilyph","silcoon","silicobra","silvally","silvally-bug","silvally-dark","silvally-dragon","silvally-electric","silvally-fairy","silvally-fighting","silvally-fire","silvally-flying","silvally-ghost","silvally-grass","silvally-ground","silvally-ice","silvally-normal","silvally-poison","silvally-psychic","silvally-rock","silvally-steel","silvally-water","simipour","simisage","simisear","sinistea","sirfetchd","sizzlipede","skarmory","skiddo","skiploom","skitty","skorupi","skrelp","skuntank","skwovet","slaking","slakoth","sliggoo","sliggoo-hisui","slowbro","slowbro-galar","slowking","slowking-galar","slowpoke","slowpoke-galar","slugma","slurpuff","smeargle","smoochum","sneasel","sneasel-hisui","sneasler","snivy","snom","snorlax","snorunt","snover","snubbull","sobble","solgaleo","solosis","solrock","spearow","spectrier","spewpa","spheal","spinarak","spinda","spiritomb","spoink","spritzee","squirtle","stakataka","stantler","staraptor","staravia","starly","starmie","staryu","steelix","steenee","stonjourner","stoutland","stufful","stunfisk","stunfisk-galar","stunky","sudowoodo","suicune","sunflora","sunkern","surskit","swablu","swadloon","swalot","swampert","swanna","swellow","swinub","swirlix","swoobat","sylveon","taillow","talonflame","tangela","tangrowth","tapu-bulu","tapu-fini","tapu-koko","tapu-lele","tauros","teddiursa","tentacool","tentacruel","tepig","terrakion","thievul","throh","thundurus","thundurus-t","thwackey","timburr","tirtouga","togedemaru","togekiss","togepi","togetic","torchic","torkoal","tornadus","tornadus-t","torracat","torterra","totodile","toucannon","toxapex","toxel","toxicroak","toxtricity","tranquill","trapinch","treecko","trevenant","tropius","trubbish","trumbeak","tsareena","turtonator","turtwig","tympole","tynamo","type-null","typhlosion","typhlosion-hisui","tyranitar","tyrantrum","tyrogue","tyrunt","umbreon","unfezant","unown","unown-a","unown-b","unown-c","unown-d","unown-e","unown-exclamation","unown-f","unown-g","unown-h","unown-i","unown-j","unown-k","unown-l","unown-m","unown-n","unown-o","unown-p","unown-q","unown-question","unown-r","unown-s","unown-t","unown-u","unown-v","unown-w","unown-x","unown-y","unown-z","ursaluna","ursaring","urshifu","uxie","vanillish","vanillite","vanilluxe","vaporeon","venipede","venomoth","venonat","venusaur","vespiquen","vibrava","victini","victreebel","vigoroth","vikavolt","vileplume","virizion","vivillon","vivillon-archipelago","vivillon-continental","vivillon-elegant","vivillon-fancy","vivillon-garden","vivillon-high-plains","vivillon-icy-snow","vivillon-jungle","vivillon-marine","vivillon-meadow","vivillon-modern","vivillon-monsoon","vivillon-ocean","vivillon-poke-ball","vivillon-polar","vivillon-river","vivillon-sandstorm","vivillon-savanna","vivillon-sun","vivillon-tundra","volbeat","volcanion","volcarona","voltorb","voltorb-hisui","vullaby","vulpix","vulpix-alola","wailmer","wailord","walrein","wartortle","watchog","weavile","weedle","weepinbell","weezing","weezing-galar","whimsicott","whirlipede","whiscash","whismur","wigglytuff","wimpod","wingull","wishiwashi","wobbuffet","woobat","wooloo","wooper","wormadam","wormadam-plant","wormadam-sandy","wormadam-trash","wurmple","wynaut","wyrdeer","xatu","xerneas","xerneas:active","xerneas-neutral","xurkitree","yamask","yamask-galar","yamper","yanma","yanmega","yungoos","yveltal","zacian","zacian-crown","zamazenta","zamazenta-crown","zangoose","zapdos","zarude","zarude-dada","zebstrika","zekrom","zeraora","zigzagoon","zigzagoon-galar","zoroark","zoroark-hisui","zorua","zorua-hisui","zubat","zweilous","zygarde","egg"]

interface PkmImageProps {
  dexNum: number;
  form: number;
  name?: string;
  shiny?: boolean;
}

function getImage(monsno: number, formIndex: number) {
  const defaultMonsno = 0;
  const defaultFormIndex = 0;

  // Use input value if it is not undefined or null, otherwise use default value
  const inputMonsno = (monsno !== undefined && monsno !== null) ? monsno : defaultMonsno;
  const inputFormIndex = (formIndex !== undefined && formIndex !== null) ? formIndex : defaultFormIndex;

  const paddedMonsno = inputMonsno.toString().padStart(4, 0);
  const paddedFormIndex = inputFormIndex.toString().padStart(2, 0);
  return `pm${paddedMonsno}_${paddedFormIndex}_00_00_L.webp`;
}

const PkmImage = ({ dexNum, form, name, shiny = false }: PkmImageProps) => {
  const baseImgSrc = 'https://raw.githubusercontent.com/TeamLumi/luminescent-team/main/static/img/';
  const imgSrc = baseImgSrc + getImage(dexNum, form);
  return (
    <div
      className={`pkm ${shiny ? 'shiny' : ''}`}
      role="img"
      style={{ transform: 'scale(1.25)' }}
    >
      <img src={imgSrc} style={{ maxWidth: '56px', maxHeight: '56px' }} />
    </div>
  );
};

export default PkmImage;
