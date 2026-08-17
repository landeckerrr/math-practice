/* roster.js — VIP number to VIP name, the name the student chose.
   These are the same names as vip.html, emoji and all, so a student sees the
   same thing everywhere. A few are still placeholders that read like a real
   name; they get replaced as students pick something.
   First digit of the VIP is the section: 1-2 = Sandra, 3-6 = Landecker,
   9 = a guest number, which belongs to nobody in particular.
   To add a student: add a line. To remove one: delete a line. Nothing else changes. */

const ROSTER = {
  // Section 6.3
  301: "🪼 Cris",
  302: "🏃‍♂️ Agostinho",
  303: "⚽ Maxi",
  304: "🐴 Leti",
  305: "🎹 Federico",
  306: "🎣 Borda",
  307: "🪿 Juanfe",
  308: "⚽ Emilio",
  309: "⚽ Jero",
  310: "🐴 Juli",
  311: "⚽ Balta",
  312: "🎨 Emma",
  313: "🎶Bella",
  314: "⚽ Dante",
  315: "🐕 Elena",
  316: "⚽ Santi",
  317: "🎾Juan",
  318: "🐶 Emi",
  319: "🎮 Mateo",
  320: "🎤 Gaby",
  321: "🎮 Rafa",
  322: "🏌️Martín",
  323: "⚽ Sam",

  // Section 6.4
  401: "Martín Bernal Álvarez",
  402: "⚽ Soccer",
  403: "🍣 Tóbal",
  404: "🛸Migue",
  405: "🏌️Jose",
  406: "🎸Poal",
  407: "👽 Eva",
  408: "⚽ Pedro",
  409: "⚽ López",
  410: "🎮Salva",
  411: "🏌️ Santi",
  412: "🤸 Maca",
  413: "⚽ Nacho",
  414: "⚽ Cris",
  415: "🎣Juanda",
  416: "Martín PV",
  417: "⚽Martín RC",
  418: "🐕 Sarita",
  419: "🏐 Becky",
  420: "Santi LS",
  421: "📖Alicia",
  422: "🏌️ Miguel",
  423: "⛵ Pipo",

  // Section 6.5
  501: "🏀 Ade",
  502: "🐕 Beli",
  503: "⚽ Mati",
  504: "🐕 Elisa",
  505: "🍕Agus",
  506: "🏐 Rosi",
  507: "💻 Emi",
  508: "📣 Emma",
  509: "🎨 Cami",
  510: "⚽ Lucho",
  511: "🐎 Eli",
  512: "🏐 Juli",
  513: "⚽Vicen",
  514: "🏖️ Hele",
  515: "⚽ Andres",
  516: "🐎 Ame",
  517: "👽 Sarita",
  518: "⚽ Elena",
  519: "⚽ Nico",
  521: "🎮 Pedro",

  // Section 6.6
  601: "🪖 PJ",
  602: "🐎 Salo",
  603: "🚗 Botero",
  604: "🎨 Ama",
  605: "🏍️ Martín",
  606: "😊 Maria",
  607: "🚗 Luka",
  608: "Alejandro HD",
  609: "🐈 Eva",
  610: "🏌️ Santiago",
  611: "🐒 Maria",
  612: "Mar LE",
  613: "🎾 Mejia",
  614: "🏐 Ele",
  615: "🏗️Bruno",
  616: "⚽ Toro",
  617: "🚗 Rafa",
  618: "🐕 Emi",
  619: "Pascual VC",
  620: "⚽ Vicente",

  // Section 6.1 — Sandra
  101: "🐉 Jaco",
  102: "Pedro",
  103: "⚽Juan",
  104: "🐶Daniel",
  105: "Sara",
  106: "🎾Jero",
  107: "🦝Manu",
  108: "🐻 Tin",
  109: "👽Mathy",
  110: "🏀Maxi",
  111: "🎣Fidel",
  112: "🍬Luchss",
  113: "💃Mym",
  114: "🎸Loroto",
  115: "⚽Football",
  116: "P.R.V.",
  117: "⚽Martín",
  118: "V.T.G.",
  119: "🎣 Pedro",
  120: "🩰Alice",
  121: "María",

  // Section 6.2 — Sandra
  201: "🐕Celi",
  202: "🐕Marti",
  203: "🏀Sebas",
  204: "🏃Emi",
  205: "😊PJ",
  206: "⚽Migue",
  207: "🎾Miguel",
  208: "⚽Nico",
  209: "🎵Lore",
  210: "😊Emi",
  211: "🐚Rose",
  212: "🤸Gabi",
  213: "Paloma",
  214: "🚘Simon",
  215: "🐟Steve",
  216: "🏌️Agustin",
  217: "🏐Mavca",
  218: "🏓Ame",
  219: "⚽Rue",
  220: "J.S.V.",
  221: "🏀Rafa",
  222: "Ana",
  223: "🏌️Migue",
  224: "🐴Emi",

  /* Guest numbers. Not students — spares for Ms. Sandra to hand out when a
     real number will not let somebody in. They log in and submit like anyone
     else; the number is what tells you it was a stand-in. */
  990: "🎟️ Guest 990",
  991: "🎟️ Guest 991",
  992: "🎟️ Guest 992",
  993: "🎟️ Guest 993",
  994: "🎟️ Guest 994",
  995: "🎟️ Guest 995",
  996: "🎟️ Guest 996",
  997: "🎟️ Guest 997",
  998: "🎟️ Guest 998",
  999: "🎟️ Guest 999",
};

const TEACHERS = { "1": "sandra", "2": "sandra", "3": "landecker", "4": "landecker", "5": "landecker", "6": "landecker",
                   "9": "sandra" };   // guest numbers are hers to hand out

/* What each teacher is called on screen. The sets read this so the same
   file can say "Turn in to Ms. Sandra" or "Turn in to Mr. Landy". */
const TEACHER_NAMES = { "landecker": "Mr. Landy", "sandra": "Ms. Sandra" };

/* "301" or "3-01" both accepted — any separator is fine, the digits are what
   count. Shows as "3-01". Returns null if it isn't a real VIP. */
function lookupVip(raw) {
  const digits = String(raw).replace(/[^0-9]/g, "");
  if (digits.length !== 3) return null;
  const vip = parseInt(digits, 10);
  const initials = ROSTER[vip];
  if (!initials) return null;
  const sec = digits[0];
  const teacher = TEACHERS[sec] || null;
  return {
    vip: vip,
    display: sec + "-" + digits.slice(1),   // 3-01
    section: sec === "9" ? "guest" : "6." + sec,
    teacher: teacher,
    teacherName: TEACHER_NAMES[teacher] || "your teacher",
    initials: initials   // now the VIP name; the key keeps its old spelling
                         // so the practice sets did not all need editing

  };
}
