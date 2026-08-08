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
  314: "A.M.U.",
  315: "D.O.P.",
  316: "E.P.C.",
  317: "S.R.E.",
  318: "J.S.P.",
  319: "E.S.M.",
  320: "M.T.M.",
  321: "R.T.B.",
  322: "G.T.B.",
  323: "R.U.M.",
  324: "M.U.P.",
  325: "S.V.C.",

  // Section 6.4
  401: "M.B.Á.",
  402: "E.B.C.",
  403: "C.B.D.",
  404: "M.C.G.",
  405: "J.G.V.",
  406: "P.G.L.",
  407: "A.H.D.",
  408: "P.J.J.",
  409: "M.L.M.",
  410: "S.M.Z.",
  411: "S.N.A.",
  412: "M.O.V.",
  413: "I.P.S.",
  414: "C.P.M.",
  415: "J.P.V.",
  416: "S.R.G.",
  417: "R.R.B.",
  418: "S.S.L.",
  419: "A.S.L.",
  420: "M.S.S.",
  421: "F.S.M.",

  // Section 6.5
  501: "A.A.J.",
  502: "B.B.A.",
  503: "M.C.U.",
  504: "E.C.P.",
  505: "A.C.P.",
  506: "E.D.",
  507: "R.E.B.",
  508: "E.F.F.",
  509: "E.G.L.",
  510: "C.G.A.",
  511: "L.L.G.",
  512: "E.L.J.",
  513: "J.M.D.",
  514: "V.M.P.",
  515: "H.R.B.",
  516: "A.S.L.",
  517: "F.S.G.",
  518: "A.U.B.",
  519: "S.U.G.",
  520: "N.W.R.",

  // Section 6.6
  601: "P.A.C.",
  602: "S.B.N.",
  603: "M.B.B.",
  604: "A.C.V.",
  605: "M.F.G.",
  606: "M.G.Z.",
  607: "L.H.N.",
  608: "E.J.D.",
  609: "S.L.T.",
  610: "M.L.V.",
  611: "M.L.E.",
  612: "E.N.R.",
  613: "B.R.P.",
  614: "E.T.B.",
  615: "E.V.G.",
  616: "P.V.C.",
  617: "V.Z.M.",

  // Section 6.1 — Sandra (add when roster arrives)

  // Section 6.2 — Sandra (add when roster arrives)
};

const TEACHERS = { "1": "sandra", "2": "sandra", "3": "landecker", "4": "landecker", "5": "landecker", "6": "landecker" };

/* What each teacher is called on screen. The sets read this so the same
   file can say "Turn in to Ms. Sandra" or "Turn in to Mr. Landy". */
const TEACHER_NAMES = { "landecker": "Mr. Landy", "sandra": "Ms. Sandra" };

/* "301" or "3.01" both accepted. Returns null if it isn't a real VIP. */
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
    display: sec + "." + digits.slice(1),   // 3.01
    section: "6." + sec,
    teacher: teacher,
    teacherName: TEACHER_NAMES[teacher] || "your teacher",
    initials: initials
  };
}
