/* plan.js — the class list and the code that draws it.
   Both index pages read this file. Edit the unit here once and it changes on both.

   opens = the FIRST date any section meets that class (from the instructional plan).
   Sections that meet later just see the set a day or two early, which is harmless.
   Sandra's page shifts every date forward by SITE.offset school days.

   Types:  lesson    -> clickable link to the set
           quiz | practice | summative -> paper, nothing to click
*/

const UNIT0 = {
  title: "Unit 0 — Fractions, Decimals & Division",
  meta: "17 classes · Aug 11 – Sep 11",
  classes: [
    { n:1,  type:"lesson",    code:"0.01", title:"The Secret of ÷",                    opens:"2026-08-11" },
    { n:2,  type:"lesson",    code:"0.02", title:"Sharing Problems & Bigger Than One", opens:"2026-08-13" },
    { n:3,  type:"lesson",    code:"0.03", title:"Numbers in Disguise",                opens:"2026-08-14" },
    { n:4,  type:"lesson",    code:"0.05", title:"Estimation Station",                 opens:"2026-08-18" },
    { n:5,  type:"lesson",    code:"0.07", title:"So What IS 5/8?",                    opens:"2026-08-19" },
    { n:6,  type:"lesson",    code:"0.08", title:"Long Division, One-Digit Divisors",  opens:"2026-08-21" },
    { n:7,  type:"lesson",    code:"0.09", title:"Remainders ARE Fractions",           opens:"2026-08-24" },
    { n:8,  type:"lesson",    code:"0.10", title:"Two-Digit Divisors",                 opens:"2026-08-25" },
    { n:9,  type:"lesson",    code:"0.11", title:"Division That Keeps Going",          opens:"2026-08-26" },
    { n:10, type:"lesson",    code:"0.12", title:"Dividing Decimals",                  opens:"2026-08-28" },
    { n:11, type:"lesson",    code:"0.13", title:"Decimal Division in Context",        opens:"2026-08-31" },
    { n:12, type:"lesson",    code:"0.14", title:"How Many Fit?",                      opens:"2026-09-02" },
    { n:13, type:"quiz",      code:"",     title:"Quiz",                               opens:"2026-09-04" },
    { n:14, type:"lesson",    code:"0.15", title:"The Shortcut, Finally",              opens:"2026-09-07" },
    { n:15, type:"practice",  code:"",     title:"Practice Day / Study Guide",         opens:"2026-09-08" },
    { n:16, type:"practice",  code:"",     title:"Practice Day / Study Guide",         opens:"2026-09-09" },
    { n:17, type:"summative", code:"",     title:"Unit 0 Summative",                   opens:"2026-09-11" }
  ]
};

/* ------------------------------------------------------------------ */

function parseDate(iso){ const [y,m,d] = iso.split("-").map(Number); return new Date(y, m-1, d); }

function today(){ const t = new Date(); return new Date(t.getFullYear(), t.getMonth(), t.getDate()); }

/* Push a date forward N school days (weekends don't count). */
function shiftSchoolDays(date, n){
  const d = new Date(date);
  let left = n;
  while (left > 0){
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day !== 0 && day !== 6) left--;
  }
  return d;
}

function shortDate(d){
  return d.toLocaleDateString("en-US", { month:"short", day:"numeric" });
}

function renderUnit(unit, mount){
  const now = today();
  const offset = (typeof SITE !== "undefined" && SITE.offset) ? SITE.offset : 0;

  const head = document.createElement("div");
  head.className = "unithead";
  head.innerHTML = `<h2></h2><span class="meta"></span>`;
  head.querySelector("h2").textContent = unit.title;
  head.querySelector(".meta").textContent = unit.meta;
  mount.appendChild(head);

  unit.classes.forEach(c => {
    const opens = shiftSchoolDays(parseDate(c.opens), offset);
    const open  = now >= opens;
    const isToday = opens.getTime() === now.getTime();
    const paper = c.type !== "lesson";
    const big   = c.type === "quiz" || c.type === "summative";

    const codeText = paper
      ? (c.type === "quiz" ? "QUIZ" : c.type === "summative" ? "TEST" : "PREP")
      : c.code;

    if (paper){
      const el = document.createElement("div");
      el.className = "row paper" + (big ? " big" : "") + (isToday ? " today" : "");
      el.innerHTML = `<span class="code"></span><span class="title"></span>
                      <span class="tag">On paper</span><span class="arrow"></span>`;
      el.querySelector(".code").textContent = codeText;
      el.querySelector(".title").textContent = c.title;
      if (isToday) el.querySelector(".tag").outerHTML = `<span class="now">Today</span>`;
      mount.appendChild(el);
      return;
    }

    if (open){
      const a = document.createElement("a");
      a.className = "row" + (isToday ? " today" : "");
      a.href = c.code.replace(".", "-") + ".html";
      a.innerHTML = `<span class="code"></span><span class="title"></span>
                     ${isToday ? '<span class="now">Today</span>' : ""}<span class="arrow">→</span>`;
      a.querySelector(".code").textContent = c.code;
      a.querySelector(".title").textContent = c.title;
      mount.appendChild(a);
    } else {
      const el = document.createElement("div");
      el.className = "row locked";
      el.innerHTML = `<span class="code"></span><span class="title"></span>
                      <span class="tag"></span><span class="arrow">🔒</span>`;
      el.querySelector(".code").textContent = c.code;
      el.querySelector(".title").textContent = c.title;
      el.querySelector(".tag").textContent = "Opens " + shortDate(opens);
      mount.appendChild(el);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const mount = document.getElementById("unit0");
  if (mount) renderUnit(UNIT0, mount);
  document.querySelectorAll("[data-teacher]").forEach(el => {
    el.textContent = SITE.teacherName;
  });
});
