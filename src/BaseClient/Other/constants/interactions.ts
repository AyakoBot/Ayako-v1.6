export default [
 { name: 'awoo', desc: 'Awooo~!!', users: true, reqUser: false, buttons: ['pat', 'awoo'] },
 { name: 'angry', desc: 'Grrrr >:(', users: true, reqUser: false, buttons: ['cry', 'run'] },
 { name: 'ayaya', desc: 'AYAYA !!!', users: true, reqUser: false, buttons: [] },
 {
  name: 'baka',
  desc: 'Call someone a baka',
  users: true,
  reqUser: true,
  buttons: ['bonk'],
 },
 {
  name: 'bath',
  desc: 'Bathe with someone',
  users: true,
  reqUser: false,
  buttons: ['bath', 'pat', 'bonk'],
 },
 {
  name: 'blush',
  desc: 'Blush',
  users: true,
  reqUser: false,
  buttons: ['pat', 'tickle', 'kiss', 'boop'],
 },
 {
  name: 'bonk',
  desc: 'Bonk someone',
  users: true,
  reqUser: true,
  buttons: ['bonk', 'cry'],
 },
 {
  name: 'bored',
  desc: 'Express your boredom',
  users: false,
  reqUser: false,
  buttons: ['bonk', 'tickle'],
 },
 { name: 'comfy', desc: 'Get comfy', users: true, reqUser: false, buttons: ['cuddle', 'pat'] },
 { name: 'cry', desc: 'Cry', users: true, reqUser: false, buttons: ['pat', 'comfort', 'hold'] },
 {
  name: 'cuddle',
  desc: 'Cuddle with someone',
  users: true,
  reqUser: true,
  buttons: ['cuddle', 'pat'],
 },
 { name: 'dance', desc: 'Dance', users: true, reqUser: false, buttons: ['dance', 'pat'] },
 { name: 'facepalm', desc: 'Facepalm', users: true, reqUser: false, buttons: [] },
 {
  name: 'feed',
  desc: 'Feed someone',
  users: true,
  reqUser: true,
  specialOptions: [{ name: 'food', desc: "What you're feeding them" }],
 },
 { name: 'fluff', desc: 'Fluff someone', users: true, reqUser: true, buttons: ['wag', 'lurk'] },
 { name: 'floof', desc: 'Floof someone', users: true, reqUser: true, buttons: ['wag', 'lurk'] },
 {
  name: 'handshake',
  desc: 'Shake Hands with someone',
  users: true,
  reqUser: true,
  buttons: ['handshake'],
 },
 { name: 'happy', desc: 'Be happy', users: true, reqUser: false, buttons: ['pat', 'hug'] },
 {
  name: 'highfive',
  desc: 'Highfive someone',
  users: true,
  reqUser: true,
  buttons: ['highfive'],
 },
 {
  name: 'holdhands',
  desc: 'Hold hands with someone',
  users: true,
  reqUser: true,
  buttons: ['holdhands'],
 },
 {
  aliasOf: 'holdhands',
  name: 'handhold',
  desc: 'Hold hands with someone',
  users: true,
  reqUser: true,
  buttons: ['holdhands'],
 },
 {
  aliasOf: 'hug',
  name: 'comfort',
  desc: 'Comfort someone',
  users: true,
  reqUser: true,
  buttons: ['cry', 'snuggle'],
 },
 {
  aliasOf: 'hug',
  name: 'hold',
  desc: 'Hold someone',
  users: true,
  reqUser: true,
  buttons: ['cry', 'nuzzle'],
 },
 { name: 'hug', desc: 'Hug someone', users: true, reqUser: true, buttons: ['hug'] },
 {
  name: 'kidnap',
  desc: 'Kidnap someone',
  users: true,
  reqUser: true,
  buttons: ['happy', 'run'],
 },
 {
  aliasOf: 'kiss',
  name: 'kith',
  desc: 'Kiss someone',
  users: true,
  reqUser: true,
  buttons: ['kith', 'bonk'],
 },
 {
  aliasOf: 'kiss',
  name: 'pash',
  desc: 'Pash someone',
  users: true,
  reqUser: true,
  buttons: ['pash', 'bonk'],
 },
 {
  aliasOf: 'kiss',
  name: 'smooch',
  desc: 'Smooch someone',
  users: true,
  reqUser: true,
  buttons: ['smooch', 'bonk'],
 },
 { name: 'kiss', desc: 'Kiss someone', users: true, reqUser: true, buttons: ['kiss', 'bonk'] },
 {
  aliasOf: 'kiss',
  name: 'mwah',
  desc: 'Mwah someone',
  users: true,
  reqUser: true,
  buttons: ['mwah', 'bonk'],
 },
 { name: 'laugh', desc: 'Laugh', users: true, reqUser: false, buttons: ['peck', 'bonk'] },
 { name: 'lay', desc: 'Lay', users: true, reqUser: false, buttons: ['fluff', 'cuddle', 'pat'] },
 {
  name: 'lewd',
  desc: 'Lewd someone',
  users: true,
  reqUser: false,
  buttons: ['run', 'lewd', 'lurk'],
 },
 {
  name: 'lick',
  desc: 'Lick someone',
  users: true,
  reqUser: true,
  buttons: ['lick', 'bonk', 'blush'],
 },
 {
  aliasOf: 'lift',
  name: 'pickup',
  desc: 'Pick someone up',
  users: true,
  reqUser: true,
  buttons: ['happy', 'bonk'],
 },
 { name: 'lift', desc: 'Lift someone', users: true, reqUser: true, buttons: ['happy', 'bonk'] },
 {
  aliasOf: 'peek',
  name: 'lurk',
  desc: 'Lurk in Chat',
  users: false,
  reqUser: false,
  buttons: ['pat', 'hug'],
 },
 {
  aliasOf: 'nom',
  name: 'nam',
  desc: 'Nom on someone',
  users: true,
  reqUser: true,
  buttons: ['nam'],
 },
 { name: 'nom', desc: 'Nom on someone', users: true, reqUser: true, buttons: ['nom'] },
 {
  aliasOf: 'cuddle',
  name: 'nuzzle',
  desc: 'Nuzzle someone',
  users: true,
  reqUser: true,
  buttons: ['nuzzle', 'bonk'],
 },
 {
  aliasOf: 'nya',
  name: 'mew',
  desc: 'Mew =^_^=',
  users: false,
  reqUser: false,
  buttons: ['mew', 'pat'],
 },
 {
  name: 'nya',
  desc: 'Nya! =^_^=',
  users: false,
  reqUser: false,
  buttons: ['pat', 'woof', 'nya'],
 },
 {
  name: 'pet',
  desc: 'Headpat time~!',
  users: true,
  reqUser: true,
  buttons: ['blush', 'happy', 'pout'],
 },
 {
  name: 'pat',
  desc: 'Headpat time~!',
  users: true,
  reqUser: true,
  buttons: ['blush', 'happy', 'pout'],
 },
 {
  name: 'peck',
  desc: 'Peck someone on the cheek',
  users: true,
  reqUser: true,
  buttons: ['blush', 'peck'],
 },
 { name: 'peek', desc: 'Peek into Chat', users: false, reqUser: false, buttons: ['pat', 'lurk'] },
 {
  aliasOf: 'poke',
  name: 'boop',
  desc: 'Boop someone',
  users: true,
  reqUser: true,
  buttons: ['pat', 'nom'],
 },
 {
  name: 'poke',
  desc: 'Poke someone',
  users: true,
  reqUser: true,
  buttons: ['pat', 'kiss', 'hug'],
 },
 { name: 'pout', desc: 'Pout', users: true, reqUser: false, buttons: ['pat'] },
 { name: 'quack', desc: 'Quack', users: true, reqUser: false, buttons: ['pat', 'quack'] },
 { name: 'run', desc: 'Run away', users: true, reqUser: false, buttons: [] },
 { name: 'scream', desc: 'Scream', users: true, reqUser: false, buttons: ['shake'] },
 { name: 'shake', desc: 'Shake someone', users: true, reqUser: true, buttons: ['scream', 'cry'] },
 { name: 'shrug', desc: 'Shrug', users: true, reqUser: false, buttons: [] },
 { name: 'sleep', desc: 'Sleep', users: true, reqUser: false, buttons: ['sleep', 'nope'] },
 {
  aliasOf: 'sleep',
  name: 'eep',
  desc: 'eep',
  users: true,
  reqUser: false,
  buttons: ['eep', 'nope'],
 },
 { name: 'smile', desc: 'Smile', users: true, reqUser: false, buttons: ['happy'] },
 { name: 'smug', desc: 'Smug', users: true, reqUser: false, buttons: ['poke'] },
 {
  aliasOf: 'cuddle',
  name: 'snuggle',
  desc: 'Snuggle someone',
  users: true,
  reqUser: true,
  buttons: ['snuggle'],
 },
 { name: 'stare', desc: 'Stare at someone', users: true, reqUser: true, buttons: ['stare'] },
 { name: 'wag', desc: 'Wag your tail', users: true, reqUser: false, buttons: ['fluff'] },
 {
  name: 'lapsleep',
  desc: "Sleep on someone's lap",
  users: true,
  reqUser: true,
  buttons: ['lapsleep'],
 },
 { name: 'think', desc: 'Think', users: true, reqUser: false, buttons: [] },
 {
  name: 'thumbsup',
  desc: 'Give a thumbs up',
  users: true,
  reqUser: false,
  buttons: ['handshake'],
 },
 {
  name: 'tickle',
  desc: 'Tickle someone',
  users: true,
  reqUser: true,
  buttons: ['scream', 'run'],
 },
 { name: 'wave', desc: 'Wave', users: true, reqUser: false, buttons: ['wave', 'boop'] },
 { name: 'wink', desc: 'Wink', users: true, reqUser: false, buttons: [] },
 { name: 'yawn', desc: 'Yawn', users: true, reqUser: false, buttons: ['cuddle', 'boop'] },
 { name: 'woof', desc: 'Woof', users: true, reqUser: false, buttons: ['pat', 'nya'] },
 {
  name: 'nod',
  desc: "Couldn't agree more",
  users: true,
  reqUser: false,
  buttons: ['handshake'],
 },
 { name: 'nope', desc: "I'm outta here", users: true, reqUser: false, buttons: [] },
];
