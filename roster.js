/* roster.js — VIP number to student initials.
   Initials only. No names are stored on this site.
   First digit of the VIP is the section: 1-2 = Sandra, 3-6 = Landecker.
   To add a student: add a line. To remove one: delete a line. Nothing else changes. */

const ROSTER = {
  // Section 6.3
  301: "C.A.P.",
  302: "A.A.C.",
  303: "M.A.S.",
  304: "L.A.J.",
  305: "F.B.C.",
  306: "E.B.A.",
  307: "J.C.Q.",
  308: "E.F.B.",
  309: "J.G.C.",
  310: "J.G.L.",
  311: "B.J.M.",
  312: "E.J.T.",
  313: "I.L.R.",
  314: "D.O.P.",
  315: "E.P.C.",
  316: "S.R.E.",
  317: "J.S.P.",
  318: "E.S.M.",
  319: "M.T.M.",
  320: "G.T.B.",
  321: "R.U.M.",
  322: "M.U.P.",
  323: "S.V.C.",

  // Section 6.4
  401: "M.B.Á.",
  402: "E.B.C.",
  403: "C.B.D.",
  404: "M.C.G.",
  405: "J.G.V.",
  406: "P.G.L.",
  407: "E.G.J.",
  408: "P.J.J.",
  409: "M.L.M.",
  410: "S.M.Z.",
  411: "S.N.A.",
  412: "M.O.V.",
  413: "I.P.S.",
  414: "C.P.M.",
  415: "J.P.V.",
  416: "M.P.V.",
  417: "M.R.C.",
  418: "S.R.G.",
  419: "R.R.B.",
  420: "S.S.L.",
  421: "A.S.L.",
  422: "M.S.S.",
  423: "F.S.M.",

  // Section 6.5
  501: "A.A.J.",
  502: "B.B.A.",
  503: "M.C.U.",
  504: "E.C.P.",
  505: "A.C.P.",
  506: "R.E.B.",
  507: "E.F.F.",
  508: "E.G.L.",
  509: "C.G.A.",
  510: "L.L.G.",
  511: "E.L.J.",
  512: "J.M.D.",
  513: "V.M.P.",
  514: "H.R.B.",
  515: "A.S.L.",
  516: "A.U.B.",
  517: "S.U.G.",
  518: "E.U.J.",
  519: "N.W.R.",

  // Section 6.6
  601: "P.A.C.",
  602: "S.B.N.",
  603: "M.B.B.",
  604: "A.C.V.",
  605: "M.F.G.",
  606: "M.G.Z.",
  607: "L.H.N.",
  608: "A.H.D.",
  609: "E.J.D.",
  610: "S.L.T.",
  611: "M.L.V.",
  612: "M.L.E.",
  613: "A.M.U.",
  614: "E.N.R.",
  615: "B.R.P.",
  616: "E.T.B.",
  617: "R.T.B.",
  618: "E.V.G.",
  619: "P.V.C.",
  620: "V.Z.M.",

  // Section 6.1 — Sandra
  101: "J.A.",
  102: "P.Á.M.",
  103: "J.C.A.",
  104: "D.D.L.",
  105: "S.D.Z.",
  106: "J.F.Z.",
  107: "M.G.N.",
  108: "M.G.G.",
  109: "M.L.",
  110: "M.L.T.",
  111: "F.M.Z.",
  112: "L.M.G.",
  113: "E.M.P.",
  114: "L.N.M.",
  115: "M.O.S.",
  116: "P.R.V.",
  117: "M.T.G.",
  118: "V.T.G.",
  119: "P.V.O.",
  120: "A.V.M.",
  121: "M.Z.M.",

  // Section 6.2 — Sandra
  201: "C.A.Z.",
  202: "M.A.A.",
  203: "S.B.C.",
  204: "E.B.M.",
  205: "P.B.J.",
  206: "M.C.A.",
  207: "M.C.G.",
  208: "N.E.M.",
  209: "L.H.G.",
  210: "E.J.G.",
  211: "R.L.",
  212: "G.L.E.",
  213: "P.L.E.",
  214: "S.M.R.",
  215: "S.P.D.",
  216: "A.P.B.",
  217: "M.R.C.",
  218: "A.R.F.",
  219: "E.R.U.",
  220: "J.S.V.",
  221: "R.S.O.",
  222: "A.T.S.",
  223: "M.T.P.",
  224: "E.U.D.",
};

const TEACHERS = { "1": "sandra", "2": "sandra", "3": "landecker", "4": "landecker", "5": "landecker", "6": "landecker" };

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
    section: "6." + sec,
    teacher: teacher,
    teacherName: TEACHER_NAMES[teacher] || "your teacher",
    initials: initials
  };
}
