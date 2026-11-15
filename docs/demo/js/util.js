

export const WD = { en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ru: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"] };
export const ICON = { done: "✓", skipped: "–", overdue: "!", today: "●", open: "○" };
export const PALETTES = ["auto", "day", "console", "classic", "night"];

export const SWATCH = { auto: ["#E9EEEC", "#DCE4E0", "#18211E", "#0C1210"], day: ["#E9EEEC", "#DCE4E0", "#0B6870", "#B87800"],
  console: ["#0C1210", "#18211E", "#4FB8C0", "#F2C14C"], classic: ["#E9EEEC", "#26302C", "#0B6870", "#F2C14C"],
  night: ["#0A0F1D", "#152038", "#7FA4F2", "#D6AC4C"], };
export const SPEECH = { en: "en-US", ru: "ru-RU", de: "de-DE" };
export const TALK_MORE = { en: "The rest is on the screen.", ru: "Остальное на экране.", de: "Der Rest steht auf dem Bildschirm." };

export function speakable(text, more) {
  let s = String(text || "").replace(/```[\s\S]*?```/g, " ").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/https?:\/\/\S+/g, " ")
    .replace(/^\s*(?:[-•*]|\d+\.)\s+/gm, "").replace(/[`*#>|_~]+/g, " ").replace(/\s+/g, " ").trim();
  if (s.length > 600) {
    const cut = s.slice(0, 600), end = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "), cut.lastIndexOf("? "));
    s = (end > 200 ? cut.slice(0, end + 1) : cut) + " " + more;
  }
  return s;
}

export function sentences(text) {
  const out = [];
  for (const part of String(text).split(/(?<=[.!?])\s+/)) {
    let p = part.trim();
    while (p.length > 180) {
      const at = p.lastIndexOf(" ", 180);
      out.push(p.slice(0, at > 60 ? at : 180));
      p = p.slice(at > 60 ? at + 1 : 180).trim();
    }
    if (p) { out.push(p); }
  }
  return out;
}

export function talkVoice(voices, lang) {
  const mine = voices.filter((v) => v.localService && String(v.lang).toLowerCase().startsWith(lang));
  return mine.find((v) => v.default) || mine[0] || null;
}
export const LEVEL_ICON = { critical: "!", warning: "▲", info: "i" };
export const SYS_TABS = ["overview", "settings", "agents", "files", "history"];
export const DARK = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

export function stored(key) { try { return localStorage.getItem("stellwerk." + key) || ""; } catch (e) { return ""; } }
export function store(key, value) { try { localStorage.setItem("stellwerk." + key, value); } catch (e) {   } }
export function applyPalette(name) {
  const pick = PALETTES.includes(name) && name !== "auto" ? name : DARK && DARK.matches ? "console" : "day";
  document.documentElement.dataset.palette = pick;
}
applyPalette(stored("palette") || "classic");

export function applyScale(name) { document.documentElement.dataset.scale = name === "fit" ? "fit" : "balanced"; }
applyScale(stored("scale"));

export function two(n) { return (n < 10 ? "0" : "") + n; }
export function day(iso) { const p = iso.split("-").map(Number); return new Date(p[0], p[1] - 1, p[2]); }
export function fmtDate(iso, lang, year) {
  const d = day(iso);
  return WD[lang][d.getDay()] + " " + two(d.getDate()) + "." + two(d.getMonth() + 1) + (year ? "." + d.getFullYear() : "");
}
export function isClosed(step) { return step.status === "done" || step.status === "skipped"; }
export const CMD_SHOWN = 60;

export function firstOpen(releases, pick) {
  const list = pick ? releases.filter(pick) : releases;
  return list.find((r) => r.steps.some((s) => !isClosed(s))) || list[0] || null;
}

export function zoomOf() { return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--z")) || 1; }
export function fitPos(p) {
  const z = zoomOf(), W = window.innerWidth / z, H = window.innerHeight / z;
  const w = Math.max(340, Math.min(p.w || 440, W - 16)), h = Math.max(320, Math.min(p.h || 620, H - 16));
  return { x: Math.round(Math.max(8 - w + 160, Math.min(p.x, W - 160))), y: Math.round(Math.max(8, Math.min(p.y, H - 48))), w, h };
}
export function cmdPosStored() {
  let p = null;
  try { p = JSON.parse(stored("cmdPos") || "null"); } catch (e) { p = null; }
  return fitPos(p && typeof p.x === "number" ? p : { x: 24, y: 80, w: 440, h: 620 });
}

export function csStages(cs) { return cs.stages || [cs.stage]; }

export function lineTargets(step, keys) {
  if (Array.isArray(step.deploys)) { return step.deploys; }
  if (step.check && keys.includes(step.check)) { return [step.check]; }
  return step.reaches ? [step.reaches] : [];
}
export const FINAL_RUN = ["done", "cancelled", "lost"];
export const RUN_RANK = { unknown: -1, queued: 0, running: 1, done: 2, cancelled: 2, lost: 2 };
export function queueNo(run) { const m = /\/queue\/item\/(\d+)/.exec((run && run.queue) || ""); return m ? Number(m[1]) : 0; }
export const MONTHS = { en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  ru: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"] };
export const CAL_KINDS = ["deploy", "gate", "freeze", "step", "window"];
export function isoOf(d) { return d.getFullYear() + "-" + two(d.getMonth() + 1) + "-" + two(d.getDate()); }
export function addDays(iso, n) { const d = day(iso); d.setDate(d.getDate() + n); return isoOf(d); }
export function mondayOf(iso) { const d = day(iso); d.setDate(d.getDate() - (d.getDay() + 6) % 7); return isoOf(d); }
export function isoWeek(d) {
  const t = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 3 - (d.getDay() + 6) % 7);
  const first = new Date(t.getFullYear(), 0, 4);
  return 1 + Math.round(((t - first) / 86400000 - 3 + (first.getDay() + 6) % 7) / 7);
}
export function text(value) { return value === true ? "true" : value === false ? "false" : String(value); }

export function fill(template, value) { const v = String(value || "").trim().replace(/\.+$/, ""); return template.replace("{0}", () => v); }

export function escapeHtml(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
export function markdown(source) {

  const inline = (line) => {
    const codes = [];
    return line.replace(/\u0001/g, "").replace(/`([^`]+)`/g, (_, c) => { codes.push(c); return "\u0001" + (codes.length - 1) + "\u0001"; })
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\u0001(\d+)\u0001/g, (_, i) => "<code>" + codes[i] + "</code>");
  };
  const out = [];
  let para = [], list = null;
  const flush = () => {
    if (para.length) { out.push("<p>" + para.join("<br>") + "</p>"); para = []; }
    if (list) { out.push("<" + list.tag + list.start + ">" + list.items.map((x) => "<li>" + x + "</li>").join("") + "</" + list.tag + ">"); list = null; }
  };
  escapeHtml(String(source)).split(/\r?\n/).forEach((line) => {
    const item = /^\s*(?:([-*])|(\d+)\.)\s+(.*)$/.exec(line);
    if (!line.trim()) {
      flush();
    } else if (item) {
      const tag = item[1] ? "ul" : "ol";
      if (para.length || (list && list.tag !== tag)) { flush(); }
      if (!list) { list = { tag, items: [], start: tag === "ol" && Number(item[2]) !== 1 ? ' start="' + Number(item[2]) + '"' : "" }; }
      list.items.push(inline(item[3]));
    } else if (list && /^\s/.test(line)) {
      list.items[list.items.length - 1] += "<br>" + inline(line.trim());
    } else {
      if (list) { flush(); }
      para.push(inline(line));
    }
  });
  flush();
  return out.join("");
}

export const RAIL_VIEWS = ["cockpit", "inbox", "monitoring"];
export const INS_LISTS = ["migration", "interface", "late", "other_fix", "missing_fix", "open", "no_commit", "dependencies", "authors"];

export const INS_GROUPS = [{ k: "code", items: ["repos", "commits", "files", "authors"] }, { k: "kind", items: ["migration", "interface", "config"] },
  { k: "jira", items: ["business", "bugs"] }];
export const INS_ROWS = 12;

export function cfgStage(path, names) {
  const parts = path.split("/"), words = (parts.pop().replace(/\.[^.]+$/, "") + "-" + (parts.pop() || "")).toLowerCase().split(/[-_.]/);
  const found = [...new Set(words.map((w) => (names || {})[w]).filter(Boolean))];
  return found.join(", ");
}

export const INS_TREND = [["commits", "code"], ["files", "code"], ["business", "jira"], ["bugs", "jira"]];
export const TREND_N = 8;

export function fmtMs(v) {
  if (v === null || v === undefined) { return "—"; }
  return v >= 1000 ? (v / 1000).toFixed(v >= 10000 ? 1 : 2) + " s" : Math.round(v) + " ms";
}
export function hhmm(ms) { const d = new Date(ms); return two(d.getHours()) + ":" + two(d.getMinutes()); }
export function niceMax(v) {
  const step = Math.pow(10, Math.floor(Math.log10(v)));
  for (const f of [1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]) { if (f * step >= v) { return f * step; } }
  return 10 * step;
}

export function useRender(name, options) {
  const done = window.StellwerkRender && window.StellwerkRender[name];
  if (done) {
    options.render = done;
    delete options.template;
  }
  return options;
}
