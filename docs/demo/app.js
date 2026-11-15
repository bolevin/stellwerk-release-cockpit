

import { T } from "./js/texts.js";
import { WD, ICON, PALETTES, SWATCH, SPEECH, TALK_MORE, speakable, sentences, talkVoice, LEVEL_ICON, SYS_TABS, DARK, stored, store, applyPalette, applyScale, two, day, fmtDate, isClosed, firstOpen, CMD_SHOWN, zoomOf, fitPos, cmdPosStored, lineTargets, MONTHS, CAL_KINDS, addDays, mondayOf, isoWeek, text, fill, markdown, RAIL_VIEWS, INS_LISTS, INS_GROUPS, INS_ROWS, cfgStage, INS_TREND, TREND_N, fmtMs, useRender } from "./js/util.js";
import { HelpTip, StepCard, CommitTimeline, TrendChart, LineChart, FilesPreview, CicdView, RegressionView } from "./js/components.js";
import { APP_TEMPLATE } from "./js/template.js";

import { ProcessView } from "./js/process.js";

const SNAP_EDGE = 24;

Vue.createApp(useRender("root", {
  components: { StepCard, HelpTip, FilesPreview, LineChart, CommitTimeline, TrendChart, CicdView, RegressionView, ProcessView },
  data() {
    return {
      state: null, error: "", errTech: null, offline: false, busy: false, toast: "",
      view: ["inbox", "calendar", "process", "insights", "monitoring", "cicd", "regression", "audit", "system"].includes(location.hash.slice(1).split("/")[0]) ? location.hash.slice(1).split("/")[0] : "cockpit",
      ins: null, insError: "", insData: null, insOtherV: "", INS_GROUPS,
      cmdShow: CMD_SHOWN, CMD_SHOWN,
      insTab: "issues", insFilter: "look", insFind: "", insAll: false,
      insRisk: {}, insHit: "", insArch: false, insFacts: false,
      caseCur: null, caseAsk: null, caseDraft: -1, caseTimer: 0, caseMarks: {}, caseDone: {},
      brief: null, briefOpen: false, briefTimer: 0,
      relSt: {}, stAsked: {}, stTimers: {},
      insMetric: "files",
      INS_TREND,
      insSel: location.hash.startsWith("#insights/") ? decodeURIComponent(location.hash.split("/")[1] || "") : "",
      sysTab: SYS_TABS.includes(location.hash.split("/")[1]) ? location.hash.split("/")[1] : "overview", SYS_TABS,
      changes: [], changesOlder: 0, changeOpen: {}, revFor: "", revPreview: null, revBusy: false, edFromAgent: false,
      sel: "", phaseSel: {}, onlyOpen: false, drawer: null, opener: null,
      inboxKey: "", picked: [], csBusy: {}, allOwners: false, nowMs: Date.now(), skew: 0, updatedMs: 0, ICON,
      RAIL_VIEWS,
      chats: [], chatsTotal: 0, chatFound: null, chatTimer: null, chatId: stored("cmdChat"), histOpen: false, histQ: "",
      talkOn: false, talkState: "", talkNote: "",
      voicePick: stored("voiceLang"), VOICE_LANGS: Object.keys(SPEECH),
      cmdOpen: false, cmdText: "", cmdLog: [], cmdBusy: false, cmdWait: 0, hasSpeech: false, listening: false, voiceError: "",
      toastOk: false, PALETTES, SWATCH, paletteChoice: stored("palette"), palOpen: false, moreOpen: false, cmdFloat: stored("cmdFloat") === "on", cmdPos: cmdPosStored(), drag: null, phone: false, railPhoneOpen: false, cmdWide: stored("cmdWide") === "on",
      cmdBottom: stored("cmdBottom") === "on", cmdBottomH: Math.max(180, Number(stored("cmdBottomH")) || 320), snap: "", grip: null,
      scaleFit: stored("scale") === "fit",
      hints: [], hintsBy: "rules", hintsPending: false, hintsError: "", sys: null, sysError: "", promptOpen: {},

      ed: null, edText: "", edMode: "text", edCheck: null, edChecking: false, edSaving: false, edDisk: false,
      edAsk: "", edBusy: false, edWait: 0, edReply: "",
      helpOpen: "",

      q: "", qCase: false, sr: null, repWith: "", repPreview: null, repBusy: false,
      svcOpen: "", svcEdit: null, svcPreview: null, svcBusy: false,
      mon: null,

      monInte: null, monInteBusy: false, monInteErr: "", monCal: false, monCalShift: 0, monOpen: [],
      side: null, railOn: stored("rail") !== "off", LEVEL_ICON,

      cal: null, calFrom: "", calKinds: { deploy: true, gate: true, freeze: true, step: false, window: true }, calOff: {}, CAL_KINDS,
      comp: null,
    };
  },
  computed: {

    stageLists() { return (this.state && this.state.stages) || { short: {}, from_name: {}, jira_default: {} }; },
    STAGE_SHORT() { return this.stageLists.short; },
    lang() { return this.state && T[this.state.language] ? this.state.language : "en"; },
    t() { return T[this.lang]; },
    now() { return new Date(this.nowMs + this.skew); },
    nowText() { const n = this.now; return WD[this.lang][n.getDay()] + " " + two(n.getDate()) + "." + two(n.getMonth() + 1) + " " + two(n.getHours()) + ":" + two(n.getMinutes()); },
    updatedText() { const u = new Date(this.updatedMs); return two(u.getHours()) + ":" + two(u.getMinutes()) + ":" + two(u.getSeconds()); },
    rel() { return this.state.releases.find((r) => r.version === this.sel) || firstOpen(this.state.releases); },
    brandLamp() {
      const rs = this.state ? this.state.releases : [];
      return rs.some((r) => r.summary.overdue) ? "r" : rs.some((r) => r.summary.today) ? "y" : "g";
    },
    milestone() { return this.rel ? this.stepOf(this.rel, this.rel.next) : null; },
    countdown() {
      const m = this.milestone;
      if (!m || !m.due) { return null; }
      const target = day(m.due), now = this.now;
      if (!m.clock) {
        const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        return { exact: false, days: Math.round((target - midnight) / 86400000) };
      }
      const hm = m.clock.split(":").map(Number);
      target.setHours(hm[0], hm[1], 0, 0);
      let diff = Math.floor((target - now) / 1000), running = false;
      if (diff < 0 && m.clock_end && m.status !== "overdue") {
        const he = m.clock_end.split(":").map(Number), end = new Date(target);
        end.setHours(he[0], he[1], 0, 0);
        if (end <= target) { end.setDate(end.getDate() + 1); }
        if (now < end) { running = true; diff = Math.floor((end - now) / 1000); }
        else { diff = Math.floor((end - now) / 1000); }
      }
      const s = Math.abs(diff);
      return { exact: true, running, late: diff < 0, d: Math.floor(s / 86400), h: Math.floor(s % 86400 / 3600), m: Math.floor(s % 3600 / 60), s: s % 60 };
    },
    flaps() {
      const c = this.countdown, t = this.t;
      if (!c || !c.exact) { return []; }
      return c.d > 0 ? [[c.d, t.days], [c.h, t.hours], [c.m, t.min]] : [[c.h, t.hours], [c.m, t.min], [c.s, t.sec]];
    },
    gates() { return this.rel ? this.rel.steps.filter((s) => s.gate) : []; },
    ring() {
      const s = this.rel.summary, c = 2 * Math.PI * 24, share = s.total ? s.closed / s.total : 0;
      return { dash: (c * share).toFixed(1) + " " + c.toFixed(1), pct: Math.round(share * 100) };
    },

    lineCols() {
      const edge = this.state.line_edge || [], out = [];
      (this.state.line || this.state.stations).forEach((st) => {
        if (st === "EDGE" && edge.length) { edge.forEach((key) => out.push({ key, st, sub: true })); } else { out.push({ key: st, st, sub: false }); }
      });
      return out.map((c, i) => Object.assign(c, { i }));
    },
    lineKeys() { return this.lineCols.map((c) => c.key); },
    lineTemplate() { return this.lineCols.map((c) => (c.sub ? "minmax(76px, .75fr)" : "minmax(108px, 1fr)")).join(" "); },
    lineHeads() {
      const out = [];
      this.lineCols.forEach((c) => {
        const last = out[out.length - 1];
        if (c.sub && last && last.key === c.st) { last.span += 1; } else { out.push({ key: c.st, at: c.i, span: 1, grp: c.sub }); }
      });
      return out;
    },

    lineStops() {
      const r = this.rel, keys = this.lineKeys, used = new Set(), out = [];
      if (!r) { return out; }
      r.steps.forEach((s) => {
        const idx = lineTargets(s, keys).map((k) => keys.indexOf(k)).filter((i) => i >= 0 && !used.has(i)).sort((a, b) => a - b);
        let a = 0;
        while (a < idx.length) {
          let b = a;
          while (b + 1 < idx.length && idx[b + 1] === idx[b] + 1) { b += 1; }
          out.push({ s, from: idx[a], to: idx[b], st: this.stopState(s), text: this.stopText(s), where: keys.slice(idx[a], idx[b] + 1).join(" / ") });
          a = b + 1;
        }
        idx.forEach((i) => used.add(i));
      });
      return out;
    },
    lineStopAt() {
      const m = {};
      this.lineStops.forEach((p) => { for (let i = p.from; i <= p.to; i += 1) { m[i] = p; } });
      return m;
    },

    lineRoute() {
      const r = this.rel, target = r && r.steps.find((s) => s.reaches && !isClosed(s));
      if (!target) { return null; }
      const here = this.lineSpan(r.line_station || r.station), stops = lineTargets(target, this.lineKeys).map((k) => this.lineKeys.indexOf(k)).filter((i) => i >= 0);
      const there = stops.length ? [Math.min(...stops)] : this.lineSpan(target.reaches);
      if (!here || !there || there[0] <= here[1]) { return null; }
      return { from: here[1], to: there[0] };
    },
    lineTrains() {
      const n = {};
      return this.state.releases.map((r) => {
        const st = r.line_station || r.station, span = this.lineSpan(st) || [0, 0];
        n[st] = (n[st] || 0) + 1;
        return { r, at: span[0], span: span[1] - span[0] + 1, row: n[st] - 1, wait: !st };
      });
    },
    lineOcc() { return new Set(this.state.releases.map((r) => (this.lineSpan(r.line_station || r.station) || [0, 0])[1])); },

    lineStages() {
      const order = (this.state && this.state.line) || [], rows = (this.side && this.side.stages) || [];
      const at = (s) => { const i = order.indexOf(s.group || s.stage); return i < 0 ? order.length : i; };
      return rows.map((s, k) => ({ s, k })).sort((a, b) => at(a.s) - at(b.s) || a.k - b.k).map((x) => x.s);
    },
    chatTitle() { return (this.chats.find((c) => c.id === this.chatId) || {}).title || ""; },

    cmdShown() { return this.cmdLog.length > this.cmdShow ? this.cmdLog.slice(-this.cmdShow) : this.cmdLog; },
    cmdHidden() { return this.cmdLog.length - this.cmdShown.length; },
    canSpeak() { return typeof window !== "undefined" && !!window.speechSynthesis && typeof SpeechSynthesisUtterance !== "undefined"; },
    talkText() { return { listen: this.t.talkListen, think: this.t.talkThink, speak: this.t.talkSpeak, pause: this.t.talkPause }[this.talkState] || ""; },

    chatGroups() {
      const day = (d) => d.getFullYear() + "-" + two(d.getMonth() + 1) + "-" + two(d.getDate());

      const today = this.chatDay, now = new Date(+today.slice(0, 4), +today.slice(5, 7) - 1, +today.slice(8, 10));
      const yesterday = day(new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1));
      const groups = [{ key: "today", label: this.t.chatToday, items: [] }, { key: "yesterday", label: this.t.chatYesterday, items: [] },
        { key: "older", label: this.t.chatEarlier, items: [] }];
      for (const c of this.histItems) {
        const d = (c.updated || "").slice(0, 10);
        groups[d === today ? 0 : d === yesterday ? 1 : 2].items.push(c);
      }
      return groups.filter((g) => g.items.length);
    },

    chatDay() { const d = new Date(this.nowMs); return d.getFullYear() + "-" + two(d.getMonth() + 1) + "-" + two(d.getDate()); },
    histItems() {
      const q = this.histQ.trim().toLowerCase();
      if (!q) { return this.chats; }
      return this.chatFound || this.chats.filter((c) => c.title.toLowerCase().includes(q));
    },
    insCur() { return this.insData && this.insData.version === this.insSel ? this.insData.insight : null; },

    insTrend() {
      if (!this.ins || !this.insCur) { return null; }
      const key = (v) => { const m = /^(\d+)\.(\d+)\.(0|(\d+))$/.exec(v); return m ? [+m[1], +m[2], m[4] ? +m[4] : 0] : [0, 0, 0]; };
      const cmp = (a, b) => { const x = key(a), y = key(b); return x[0] - y[0] || x[1] - y[1] || x[2] - y[2]; };
      const kind = this.insCur.kind, sel = this.insSel;
      const seen = {};
      [...this.ins.releases.filter((r) => r.built), ...this.ins.archive.filter((a) => !a.error)]
        .filter((r) => r.kind === kind && cmp(r.version, sel) <= 0).forEach((r) => { seen[r.version] = r; });
      const rows = Object.values(seen).sort((a, b) => cmp(a.version, b.version)).slice(-TREND_N).map((r) => {
        const [major, minor, sp] = key(r.version);
        return Object.assign({}, r, { current: r.version === sel, label: kind === "major" ? String(minor) : minor + "." + sp });
      });
      const missing = [];
      if (kind === "major") {
        const [major, minor] = key(sel);
        for (let m = minor - 1; m >= Math.max(1, minor - 5); m--) {
          const v = major + "." + m + ".0";
          if (!seen[v] && !(this.ins.running || []).includes(v)) { missing.push(v); }
        }
      }
      return { rows, missing: missing.reverse() };
    },

    insShares() {
      const read = this.insCur ? this.insCur.repos.filter((r) => !r.problem) : [];
      const total = read.reduce((sum, r) => sum + r[this.insMetric], 0);
      const rows = read.map((r) => ({ name: r.name, value: r[this.insMetric], share: total ? r[this.insMetric] / total : 0, files: r.files,
        commits: r.commits, merges: r.merges, added: r.added, deleted: r.deleted }))
        .sort((a, b) => b.value - a.value || a.name.localeCompare(b.name));
      return { rows, total, unread: this.insCur ? this.insCur.repos.filter((r) => r.problem).map((r) => r.name) : [] };
    },
    insCmp() { return this.insData && this.insData.version === this.insSel && this.insData.compare && this.insData.compare.version ? this.insData.compare : null; },
    insRunning() {
      const row = this.insRow(this.insSel);
      return !!((this.insData && this.insData.version === this.insSel && this.insData.running) || (row && row.running));
    },

    caseMarkRows() {
      const c = this.caseCur;
      return c && c.kind === "gate" && c.result ? c.result.rows.filter((r) => r.mark && !this.caseDone[r.step]) : [];
    },
    caseMarkPicked() { return this.caseMarkRows.filter((r) => this.caseMarks[r.step]); },
    insSt() { const s = this.relSt[this.insSel]; return s && s.status !== "off" && this.state.releases.some((r) => r.version === this.insSel) ? s : null; },
    msSt() { const s = this.rel && this.relSt[this.rel.version]; return s && s.result ? s : null; },

    briefCard() { const b = this.brief; return b && !b.hidden && ["writing", "ok", "bad"].includes(b.status) ? b : null; },
    insKind() { const r = this.state.releases.find((x) => x.version === this.insSel); return r ? this.title(r.title) : ""; },
    insSignals() {
      const n = { high: 0, medium: 0, low: 0 };
      (this.insCur ? this.insCur.risks : []).forEach((r) => { if (r.level in n) { n[r.level] += 1; } });
      return Object.keys(n).filter((k) => n[k]).map((k) => n[k] + " " + this.t.insLvl[k].toLowerCase()).join(" · ");
    },

    insIssues() {
      const l = this.insCur ? this.insCur.lists : {}, keys = (name) => new Set((l[name] || []).map((i) => i.key));
      const urgent = keys("urgent"), other = keys("other_fix"), missing = keys("missing_fix"), bare = keys("no_commit");
      const rows = [...(l.business || []).map((i) => [i, "business"]), ...(l.bugs || []).map((i) => [i, "bugs"])].map(([i, part]) => {
        const row = Object.assign({}, i, { part, urgent: urgent.has(i.key), otherFix: other.has(i.key), noFix: missing.has(i.key), noCommit: bare.has(i.key) });
        row.rank = row.urgent ? 0 : !row.done ? 1 : row.otherFix ? 2 : row.noFix ? 3 : row.noCommit ? 4 : 5;
        row.look = row.rank < 5;
        return row;
      });
      return rows.sort((a, b) => a.rank - b.rank || a.key.localeCompare(b.key, undefined, { numeric: true }));
    },
    insFilters() {
      const rows = this.insIssues, n = (test) => rows.filter(test).length;
      return [{ k: "all", n: rows.length }, { k: "look", n: n((i) => i.look) }, { k: "business", n: n((i) => i.part === "business") },
        { k: "bugs", n: n((i) => i.part === "bugs") }, { k: "open", n: n((i) => !i.done) }, { k: "no_commit", n: n((i) => i.noCommit) }];
    },
    insF() { const f = this.insFilters.find((x) => x.k === this.insFilter); return f && f.n ? f.k : "all"; },
    insIssueRows() {
      const test = { all: () => true, look: (i) => i.look, business: (i) => i.part === "business", bugs: (i) => i.part === "bugs",
        open: (i) => !i.done, no_commit: (i) => i.noCommit }[this.insF];
      const q = this.insFind.toLowerCase();
      return this.insIssues.filter((i) => test(i) && (!q || i.key.toLowerCase().includes(q) || (i.summary || "").toLowerCase().includes(q)));
    },
    insIssueShown() { return this.insAll ? this.insIssueRows : this.insIssueRows.slice(0, INS_ROWS); },

    insIssuesCut() {
      const c = this.insCur;
      return c ? ["business", "bugs"].reduce((n, k) => n + Math.max(0, (c.stats[k] || 0) - (c.lists[k] || []).length), 0) : 0;
    },

    insFiles() {
      if (!this.insCur) { return []; }
      const split = (f, kind) => { const cut = f.path.lastIndexOf("/");
        return Object.assign({}, f, { kind, dir: cut >= 0 ? f.path.slice(0, cut + 1) : "", name: f.path.slice(cut + 1) }); };
      return [...this.insConfig().map((f) => Object.assign(f, { kind: "config" })),
        ...["migration", "interface", "dependencies"].flatMap((k) => (this.insCur.lists[k] || []).map((f) => split(f, k)))];
    },
    insFilesMore() {
      const s = this.insCur.stats, l = this.insCur.lists;
      return ["config", "migration", "interface", "dependencies"].reduce((sum, k) => sum + Math.max(0, (s[k] || 0) - (l[k] || []).length), 0);
    },
    insTabs() {
      const c = this.insCur, code = c.stats.repos_read > 0;
      return [{ k: "issues", n: this.insIssues.length }, { k: "code", n: code ? c.stats.commits : null },
        { k: "files", n: code ? this.insFiles.length + this.insFilesMore : null }, { k: "trend", n: null },
        { k: "authors", n: (c.lists.authors || []).length || null }];
    },
    phases() {
      return this.rel.phases.map((p) => {
        const steps = this.rel.steps.filter((s) => s.phase === p.id);
        return { id: p.id, title: this.title(p), steps, closed: steps.filter(isClosed).length };
      });
    },
    curPhase() {
      const r = this.rel, chosen = this.phaseSel[r.version];
      if (chosen) { return chosen; }
      const lead = this.milestone || r.steps.find((s) => !isClosed(s));
      return lead ? lead.phase : r.phases[r.phases.length - 1].id;
    },
    phaseRows() {
      return this.rel.steps.filter((s) => s.phase === this.curPhase && !(this.onlyOpen && isClosed(s)));
    },
    todayGroups() {
      return this.state.releases.map((r) => {
        const rows = r.steps.filter((s) => s.status === "overdue" || s.status === "today");
        return { r, rows: rows.slice(0, 4), extra: Math.max(0, rows.length - 4) };
      }).filter((g) => g.rows.length);
    },
    queueAll() {
      const order = { overdue: 0, today: 1, soon: 2, next: 3 }, out = [];
      this.state.releases.forEach((r) => r.steps.forEach((s) => {
        if (s.queue && (this.allOwners || s.owner === "RM")) { out.push({ key: r.version + "|" + s.id, r, s }); }
      }));
      return out.sort((a, b) => order[a.s.queue] - order[b.s.queue] || (a.s.due || "9").localeCompare(b.s.due || "9"));
    },
    queueGroups() {
      return ["overdue", "today", "soon", "next"].map((k) => ({ k, items: this.queueAll.filter((x) => x.s.queue === k) })).filter((g) => g.items.length);
    },
    urgent() {
      let n = 0;
      (this.state ? this.state.releases : []).forEach((r) => r.steps.forEach((s) => {
        if (s.owner === "RM" && (s.queue === "overdue" || s.queue === "today")) { n += 1; }
      }));
      return n;
    },
    inboxCur() { return this.queueAll.find((x) => x.key === this.inboxKey) || this.queueAll[0] || null; },
    pickedLive() { return this.queueAll.filter((x) => this.picked.includes(x.key)); },
    tech() { return this.state ? this.state.tech : this.errTech; },
    uptime() {
      const minutes = Math.max(0, Math.floor((this.nowMs - Date.parse(this.tech.started)) / 60000));
      return (minutes >= 60 ? Math.floor(minutes / 60) + " " + this.t.hShort + " " : "") + minutes % 60 + " " + this.t.mShort;
    },
    voiceReady() { return !!this.state && this.tech.voice === "browser" && this.hasSpeech; },
    voiceState() { return this.tech.voice !== "browser" ? this.t.voiceDisabled : this.hasSpeech ? this.t.voiceOn : this.t.voiceUnsupported; },
    voiceNote() { return this.tech.voice !== "browser" ? this.t.voiceOff : this.hasSpeech ? this.t.voicePrivacy : this.t.voiceNone; },
    llm() { return this.tech.agents[1]; },
    llmDot() { return { ok: "g", bad: "r", checking: "off pulse" }[this.llm.status] || "off"; },
    llmText() {
      const a = this.llm;
      return a.status === "ok" || a.status === "bad" ? a.detail : a.status === "checking" ? this.t.agChecking : this.t.agOff;
    },
    introText() {
      const a = this.llm, t = this.t;
      return a.status === "ok" ? t.introOk : a.status === "checking" ? t.introChecking : a.status === "bad" ? fill(t.introBad, a.detail) : t.cmdIntro;
    },
    cfgHints() { return !!(this.state && this.state.hints_agent); },

    dockBottom() { return this.cmdBottom && !this.cmdFloat && !this.cmdWide && !this.phone; },
    palette() {
      const known = (p) => (PALETTES.includes(p) ? p : "");
      return known(this.paletteChoice) || known(this.state && this.state.palette) || "classic";
    },

    spokenLang() {
      if (SPEECH[this.voicePick]) { return this.voicePick; }
      return this.state && SPEECH[this.state.voice_language] ? this.state.voice_language : "en";
    },
    cfg() {
      const out = {};
      (this.sys ? this.sys.settings : []).forEach((s) => { out[s.key] = s.value; });
      return out;
    },

    sysAgents() {
      const order = ["agent.name", "agent.hints", "agent.editor", "agent.watch", "agent.mail", "agent.notes"].map((k) => this.cfg[k]);
      const rank = (a) => (order.includes(a.name) ? order.indexOf(a.name) : order.length);
      return (this.sys ? this.sys.agents : []).slice().sort((a, b) => rank(a) - rank(b));
    },
    edDirty() { return !!this.ed && this.ed.editable && this.edText !== this.ed.text; },
    editorOn() { return this.llm.kind === "opencode" && !!this.cfg["agent.editor"]; },
    edReplyHtml() { return markdown(this.edReply); },

    srGroups() {
      const groups = [];
      (this.sr ? this.sr.hits : []).forEach((h) => {
        const last = groups[groups.length - 1];
        if (last && last.key === h.key) { last.hits.push(h); } else { groups.push({ key: h.key, editable: h.editable, hits: [h] }); }
      });
      return groups;
    },
    srCount() { return this.sr ? (this.sr.hits.length + this.sr.more) + " " + this.t.hits : ""; },

    monStages() {
      const m = this.mon;
      if (!m) { return []; }
      if (m.data) { return m.data.stages; }
      return (m.stages || []).map((stage) => ({ stage, app: "", problems: [], now: null, before: null, top: [], series: [], errors: null, deploys: [] }));
    },
    monSpan() {
      const d = this.mon && this.mon.data;
      return d ? { start: Date.parse(d.window[0]), end: Date.parse(d.window[1]) } : null;
    },
    monWindowText() {
      const d = this.mon && this.mon.data, t = this.t, day = (iso) => iso.slice(8, 10) + "." + iso.slice(5, 7);
      if (!d) { return this.mon ? t.evening + " " + this.mon.window : ""; }
      const [s, e] = d.window;
      return t.evening + " " + day(s) + " " + s.slice(11, 16) + " – " + day(e) + " " + e.slice(11, 16)
        + (d.running ? " (" + t.running + ")" : "") + " · " + t.comparedWith + " " + day(d.previous[0]);
    },

    readiness() {
      const r = this.rel, m = this.milestone, t = this.t, side = this.side;
      if (!r || !m) { return null; }
      const at = r.steps.findIndex((s) => s.id === m.id);
      const before = r.steps.filter((s, i) => i < at && !isClosed(s) && !s.optional);
      const rows = [{ level: before.some((s) => s.status === "overdue") ? "bad" : before.length ? "warn" : "ok", label: t.rdSteps,
        text: before.length ? fill(t.rdOpen, before.length) + ": " + before.slice(0, 3).map((s) => this.title(s)).join(" · ") : t.rdAllClosed,
        open: before[0] ? { version: r.version, step: before[0].id } : null }];

      const gates = r.steps.filter((s, i) => s.signoff && i <= at).map((s) => {
        const d = s.signoff.decisions, all = s.signoff.roles.concat(s.signoff.former || []);
        return { s, closed: isClosed(s), nogo: all.filter((x) => d[x] && d[x].decision === "nogo"), wait: s.signoff.roles.filter((x) => !d[x]) };
      }).filter((g) => !g.closed || g.nogo.length || g.wait.length);
      if (this.state.workflow_error) {
        rows.push({ level: "bad", label: t.rdSign, text: t.workflowBroken });
      }
      gates.forEach(({ s, closed, nogo, wait }) => {
        rows.push({ level: nogo.length && !closed ? "bad" : nogo.length || wait.length ? "warn" : "ok", label: t.rdSign + " · " + s.gate,
          text: (nogo.length ? fill(t.rdSignNogo, nogo.join(", ")) : wait.length ? fill(t.rdSignWait, wait.join(", ")) : t.rdSignAll)
            + (closed ? " · " + t.rdSignClosed : ""),
          open: { version: r.version, step: s.id } });
      });
      const next = m.reaches || (r.steps.slice(at).find((s) => s.reaches) || {}).reaches;
      [r.station, next].filter((s, i, all) => s && all.indexOf(s) === i).forEach((stage) => {
        const row = side && side.stages.find((x) => x.stage === stage);
        const alerts = side ? side.alerts.filter((a) => a.stage === stage) : [];
        let level = "ok", text;
        if (!row || !row.checked) { level = "off"; text = t.rdNotChecked; }
        else if (row.reach === false) { level = "warn"; text = fill(t.rdNoLink, row.detail); }
        else if (row.ok === false) { level = "bad"; text = "CheckServlet NOK"; }
        else if (row.match === false) { level = "warn"; text = row.head && row.detail ? row.detail : fill(t.rdRuns, row.version) + " ≠ " + row.expected; }
        else { text = "CheckServlet OK · " + (row.version || "?"); }
        if (alerts.length) {
          level = level === "bad" || alerts.some((a) => a.level === "critical") ? "bad" : "warn";
          text += " · " + alerts.map((a) => a.title.replace(stage + ": ", "")).join(" · ");
        }
        rows.push({ level, label: stage + " · " + (stage === r.station ? t.rdNow : t.rdNext), text, stage: alerts.length ? stage : "" });
      });
      const b = side && side.blockers;
      rows.push(b && b.status === "ok"
        ? { level: b.items.length ? "warn" : "ok", label: t.rdBlockers, text: b.items.length ? Math.max(b.total || 0, b.items.length) + " · " + b.items.slice(0, 3).map((i) => i.key).join(", ") : t.rdNone, url: b.items.length ? b.link : "" }
        : b && b.status === "bad"
          ? { level: "warn", label: t.rdBlockers, text: fill(t.rdBlockersFailed, b.detail) }
          : { level: "off", label: t.rdBlockers, text: t.rdNotConnected });
      return { rows, verdict: rows.some((x) => x.level === "bad") ? "r" : rows.some((x) => x.level === "warn") ? "y" : "g" };
    },

    railShown() { return !!this.state && (this.railOn || this.phone) && RAIL_VIEWS.includes(this.view); },
    railAlerts() { return this.side ? this.side.alerts.filter((a) => a.kind !== "steps") : []; },
    railAlertCount() {
      const s = this.side;
      return s ? this.railAlerts.filter((a) => a.level !== "info").length + (s.watch ? s.watch.items.filter((a) => a.level !== "info").length : 0) : 0;
    },
    railCritical() { const s = this.side; return !!s && [...this.railAlerts, ...(s.watch ? s.watch.items : [])].some((a) => a.level === "critical"); },
    monSources() {
      const d = this.mon && this.mon.data;
      return d ? [["New Relic", d.newrelic], ["Splunk", d.splunk]] : [];
    },

    monBoard() {
      const b = this.mon && this.mon.data && this.mon.data.board;
      if (!b) { return null; }
      return { map: { columns: [], rows: [], ...b.map }, perf: { envs: [], window: [], limits: {}, ...b.perf },
        inte: { tests: [], rows: [], ...b.inte }, errors: { stages: [], rows: [], counts: {}, new: {}, links: {}, ...b.errors } };
    },
    monInteView() { return this.monInte || (this.monBoard && this.monBoard.inte) || null; },
    monRef() { const r = this.monInteView && this.monInteView.ref; return r && r.kind === "test" ? r.date : "usual"; },
    monLamps() {
      const b = this.monBoard;
      if (!b) { return {}; }
      const tiles = b.map.rows.flatMap((r) => r.tiles), envs = b.perf.envs.filter((e) => e.status !== "none"), i = this.monInteView, e = b.errors;
      return {
        map: b.map.status !== "ok" ? (b.map.status === "bad" ? "r" : "off") : tiles.some((x) => x.state === "crit") ? "r" : tiles.some((x) => x.state === "warn") ? "y" : "g",
        perf: !envs.length ? "off" : envs.some((x) => x.status === "failed") ? "r" : envs.some((x) => x.status === "empty") ? "y" : "g",
        inte: !i || !i.ref ? "off" : i.slower ? "y" : "g",
        errors: e.status === "bad" ? "r" : e.status !== "ok" ? "off" : e.new.PROD || e.new.INTE ? "y" : "g",
      };
    },

    monColLinks() {
      const b = this.monBoard, out = {};
      if (!b) { return out; }
      b.map.columns.forEach((c) => {
        const tile = b.map.rows.map((r) => r.tiles.find((x) => x.stage === c.stage)).find((x) => x && x.url);
        out[c.stage] = { nr: tile ? tile.url : "", splunk: b.errors.links[c.stage] || "" };
      });
      return out;
    },

    monPerfEnvs() {
      const b = this.monBoard, t = this.t;
      if (!b) { return []; }
      const limit = b.perf.limits.p95 || 0;
      return b.perf.envs.map((e) => {
        const nights = e.nights || [], loaded = nights.filter((n) => !n.empty);
        const top = Math.max(limit * 1.25, ...loaded.map((n) => n.p95 || 0)) || 1;
        const bars = nights.map((n, i) => ({ date: n.date, h: n.empty ? 0 : Math.max(3, (n.p95 || 0) / top * 100),
          cls: [n.empty ? "empty" : "", n.failed ? "bad" : "", i === nights.length - 1 ? "cur" : ""].filter(Boolean).join(" "),
          title: this.monDay(n.date) + " · " + (n.empty ? t.mnNoLoad : "p95 " + this.fmtS(n.p95) + " · " + t.mnErr + " " + this.fmtPct(n.errors)
            + " · " + n.count.toLocaleString() + " " + t.transactions) + (n.failed ? " · " + t.mnAbove : "") }));
        const axis = nights.length ? [...new Set([0, Math.floor((nights.length - 1) / 2), nights.length - 1])].map((i) => this.monDm(nights[i].date)) : [];
        const last = e.last, before = last ? loaded.filter((n) => n.date < last.date).pop() : null;
        const kpis = last && !last.empty ? [
          [t.mnRps, last.rps === null ? "—" : Math.round(last.rps) + "/s", this.monDelta(last.rps, before && before.rps, "plain")],
          ["p95", this.fmtS(last.p95), this.monDelta(last.p95, before && before.p95, "time")],
          [t.mnErr, this.fmtPct(last.errors), this.monDelta(last.errors, before && before.errors, "pct")]] : [];
        return { ...e, chart: { bars, limit: limit / top * 100, axis }, kpis };
      });
    },
    monInteKpis() {
      const i = this.monInteView, t = this.t;
      if (!i || !i.run || !i.run.kpi || !i.ref) { return []; }
      const a = i.run.kpi, b = i.ref.kpi;
      return [["Apdex", a.apdex === null || a.apdex === undefined ? "—" : a.apdex.toFixed(2), this.monDelta(a.apdex, b.apdex, "apdex")],
        [t.metric.avg, this.fmtS(a.avg), this.monDelta(a.avg, b.avg, "time")], ["p95", this.fmtS(a.p95), this.monDelta(a.p95, b.p95, "time")],
        ["p99", this.fmtS(a.p99), this.monDelta(a.p99, b.p99, "time")], [t.mnErr, this.fmtPct(a.errors), this.monDelta(a.errors, b.errors, "pct")]];
    },
    monRefLabel() {
      const r = this.monInteView && this.monInteView.ref;
      return r && r.kind === "test" ? this.monDay(r.date) + (r.version ? " · " + r.version : "") : "";
    },
    monTxTitle() {
      const i = this.monInteView, t = this.t;
      if (!i || !i.ref) { return ""; }
      const test = i.ref.kind === "test" ? this.monDay(i.ref.date) + (i.ref.version ? " (" + i.ref.version + ")" : "") : "";
      return this.monFill(t.mnTxAgainst, test ? this.monFill(t.mnATest, test) : t.mnAUsual, i.slower);
    },
    monInteSource() {
      const i = this.monInteView, from = new Set((i ? i.tests : []).map((x) => x.source));
      return from.has("Confluence") ? this.t.mnFromCal : from.size ? this.t.mnFromYml : "";
    },

    monCalMonths() {
      const i = this.monInteView, t = this.t;
      if (!i) { return []; }
      const base = (i.run || i.next || { date: new Date().toISOString().slice(0, 10) }).date;
      const tests = {}, run = i.run ? i.run.date : "", locale = this.lang === "ru" ? "ru" : "en";
      i.tests.forEach((x) => { tests[x.date] = x; });
      return [-1, 0].map((k) => {
        const first = new Date(+base.slice(0, 4), +base.slice(5, 7) - 1 + this.monCalShift + k, 1), y = first.getFullYear(), m = first.getMonth();
        const cells = Array.from({ length: (first.getDay() + 6) % 7 }, () => ({ d: 0, kind: "", title: "" }));
        for (let d = 1, n = new Date(y, m + 1, 0).getDate(); d <= n; d++) {
          const iso = y + "-" + two(m + 1) + "-" + two(d), x = tests[iso];
          const kind = iso === run ? "run" : x && x.past ? "t" : x ? "plan" : [0, 6].includes(new Date(y, m, d).getDay()) ? "wknd" : "";
          cells.push({ d, iso, kind, title: x ? this.monDay(iso) + " · " + (x.version || x.title) + " · "
            + (kind === "run" ? t.mnCalRun : kind === "plan" ? t.mnCalPlan : t.mnCalTest) : "" });
        }
        return { key: y + "-" + m, title: first.toLocaleString(locale, { month: "long", year: "numeric" }), cells };
      });
    },
    hintsDot() {
      const s = this.sys && this.sys.hints.status;
      return s === "off" ? this.llmDot : ({ ok: "g", bad: "r", running: "off pulse" }[s] || "off");
    },

    arch() {
      const sys = this.sys, proj = (sys && sys.project) || {}, on = this.llm.kind === "opencode", t = this.t;
      const files = sys ? sys.agents : [], rag = (proj.mcp || []).find((m) => m.name === "atlas-rag"), localRag = (proj.mcp || []).find((m) => m.name === "release-rag");
      const llm = on ? { ok: "g", bad: "r" }[this.llm.status] || "y" : "off";
      let host = "127.0.0.1:4096";
      try { host = new URL(this.cfg["agent.url"]).host || host; } catch (e) {   }
      const short = (m) => String(m || "").split("/").pop();
      const own = (file) => (file && file.model && file.model !== proj.model ? short(file.model) : "");
      const agents = this.agentRoles.map(({ role, name }) => {
        const file = files.find((a) => a.name === name);
        const lamp = !on || !name ? "off" : !file ? "r" : role === "hints" ? this.hintsDot.split(" ")[0] : llm;
        return { role, name, text: this.roleText(role, file), off: !name, missing: !!name && !!sys && !file, lamp, own: own(file) };
      });
      files.filter((a) => !agents.some((x) => x.name === a.name)).forEach((a) => agents.push({ role: a.name, name: a.name,
        text: this.roleText("", a), off: false, missing: false, lamp: on ? llm : "off", own: own(a) }));
      const tools = { total: 0, read: 0, dig: 0, propose: 0 };
      ((sys && sys.tools) || []).forEach((name) => { tools.total += 1; tools[/^dig_/.test(name) ? "dig" : /^propose_/.test(name) ? "propose" : "read"] += 1; });
      return {
        on, host, found: !!proj.exists, voice: this.voiceReady, rag: !!(rag && rag.enabled), localRag: !!(localRag && localRag.enabled), llm, agents, tools, model: short(proj.model),
        stellwerk: this.offline ? "off" : this.tech.ok ? "g" : "r", copilot: on && this.llm.status === "ok" ? "g" : "off",
        views: [t.cockpit, t.inbox, t.calendarTab, this.lang === "ru" ? "Процесс" : "Process", t.insightsTab, t.monitoringTab, t.cicdTab,
          t.regressionTab, t.system],
        systems: (this.tech.sources || []).filter((s) => s.name !== "atlas-rag"),
      };
    },

    agentRoles() {
      const skip = ["agent.engine", "agent.url", "agent.timeout", "agent.project", "agent.briefing_at"];
      return Object.keys(this.cfg).filter((k) => k.startsWith("agent.") && !skip.includes(k))
        .map((k) => ({ role: k.slice(6), name: this.cfg[k] || "" }));
    },

    calDays() {
      const c = this.cal, out = [];
      if (!c) { return out; }

      const yearly = c.from.slice(0, 4) !== c.to.slice(0, 4) || c.from.slice(0, 4) !== String(c.today || "").slice(0, 4);
      for (let iso = c.from; iso <= c.to; iso = addDays(iso, 1)) {
        const d = day(iso), wd = d.getDay(), week = this.t.calWeek + isoWeek(d);
        const month = MONTHS[this.lang][d.getMonth()] + (yearly ? " " + d.getFullYear() : "");
        out.push({ iso, num: d.getDate(), wd: WD[this.lang][wd], weekend: wd === 0 || wd === 6, today: iso === c.today, monday: wd === 1,
          top: d.getDate() === 1 ? (wd === 1 ? month + " · " + week : month) : wd === 1 || iso === c.from ? week : "" });
      }
      return out;
    },
    calVersions() {
      const found = new Set((this.cal ? this.cal.events : []).map((e) => e.version));
      return this.state.releases.map((r) => r.version).filter((v) => found.has(v));
    },
    calEvents() { return (this.cal ? this.cal.events : []).filter((e) => this.calKinds[e.kind] && !this.calOff[e.version]); },

    calClash() {
      const out = {}, add = (key, text) => { out[key] = out[key] && !out[key].split("\n").includes(text) ? out[key] + "\n" + text : out[key] || text; };
      (this.cal ? this.cal.clashes : []).forEach((c) => {
        (c.versions || [c.version]).forEach((v) => add(c.date + "|" + v, c.text));
        (c.steps || (c.step ? [c.version + "|" + c.step] : [])).forEach((k) => add(c.date + "|" + k, c.text));
      });
      return out;
    },
    calLanes() {
      const index = {};
      this.calDays.forEach((d, i) => { index[d.iso] = i; });
      return this.calVersions.filter((v) => !this.calOff[v]).map((v) => {
        const cells = {}, all = this.cal.events.filter((e) => e.version === v);
        this.calEvents.filter((e) => e.version === v).forEach((e) => { (cells[e.date] = cells[e.date] || []).push(e); });
        return { version: v, release: this.state.releases.find((r) => r.version === v), cells,
          first: all.length ? index[all[0].date] : -1, last: all.length ? index[all[all.length - 1].date] : -1 };
      });
    },
    calWin() {
      const out = {};
      if (this.cal && this.calKinds.window) { this.cal.windows.forEach((w) => { (out[w.date] = out[w.date] || []).push(w); }); }
      return out;
    },
    calAgenda() {
      const days = {};
      const at = (iso) => { days[iso] = days[iso] || { iso, today: this.cal && iso === this.cal.today, events: [], windows: [] }; return days[iso]; };
      this.calEvents.forEach((e) => at(e.date).events.push(e));
      Object.keys(this.calWin).forEach((iso) => { at(iso).windows = this.calWin[iso]; });
      return Object.keys(days).sort().map((k) => days[k]);
    },

    mailtoHref() {
      const c = this.comp;
      if (!c || c.type !== "mail") { return ""; }
      const query = [["cc", this.addrs(c.cc).join(",")], ["subject", c.subject], ["body", c.text.slice(0, 1800)]].filter((x) => x[1]);
      return "mailto:" + this.addrs(c.to).map(encodeURIComponent).join(",") + "?" + query.map((x) => x[0] + "=" + encodeURIComponent(x[1])).join("&");
    },
    notesGroups() {
      const out = [];
      ((this.comp && this.comp.view && this.comp.view.issues) || []).forEach((i) => {
        let g = out.find((x) => x.type === i.type);
        if (!g) { g = { type: i.type, items: [] }; out.push(g); }
        g.items.push(i);
      });
      return out;
    },
    notesHigh() {
      return String((this.comp && this.comp.summary) || "").split(/\r?\n/).map((l) => l.replace(/^\s*(?:[-*•]\s+)?/, "").trim()).filter(Boolean);
    },
    notesInfoLines() {
      return String((this.comp && this.comp.interfaces) || "").split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    },
    jiraStages() {
      const c = this.comp;
      return c && c.type === "jira" ? (c.rows || []).filter((r) => r.on).map((r) => ({ env: r.env, date: r.date, time: r.time })) : [];
    },
    helpers() { return (this.state && this.state.helpers) || { mail: "", notes: "" }; },
    drawerItem() {
      if (!this.drawer) { return null; }
      const r = this.state.releases.find((x) => x.version === this.drawer.version);
      const s = r && this.stepOf(r, this.drawer.id);
      return s ? { r, s } : null;
    },
  },
  watch: {
    sel() { if (this.state && this.rel) { this.readStatus(this.rel.version); } },
    view(v) {
      history.replaceState(null, "", "#" + v + (v === "system" ? "/" + this.sysTab : v === "insights" && this.insSel ? "/" + this.insSel : ""));
      if (v === "insights") { this.loadInsights(); }
      if (v === "system") { this.loadSystem(); if (this.sysTab === "history") { this.loadChanges(); } }
      if (v === "monitoring") { this.loadMonitoring(); }
      if (v === "calendar") { this.loadCalendar(); }
    },
    palette(v) { applyPalette(v); },
    lang(v) { document.documentElement.lang = v; },
  },
  methods: {
    title(o) { return o ? o[this.lang] || o.en : ""; },
    fmt(iso, year) { return iso ? fmtDate(iso, this.lang, year) : "—"; },
    two, fill,
    stepOf(r, id) { return r.steps.find((s) => s.id === id) || null; },
    lampOf(r) { return r.summary.overdue ? "r" : r.summary.today ? "y" : "g"; },
    pct(r) { return r.summary.total ? Math.round(r.summary.closed / r.summary.total * 100) : 0; },
    lineSpan(st) {
      const idx = this.lineCols.filter((c) => c.st === st).map((c) => c.i);
      return idx.length ? [idx[0], idx[idx.length - 1]] : null;
    },
    lineSeg(i) {
      const p = this.lineRoute;
      return p ? { rl: i > p.from && i <= p.to, rr: i >= p.from && i < p.to } : {};
    },
    stopState(s) {
      if (isClosed(s)) { return s.status === "done" ? "ln-done" : "ln-skip"; }
      return { overdue: "ln-late", today: "ln-today" }[s.status] || "ln-plan";
    },
    stopText(s) {
      if (s.status === "done") { const d = s.mark_at || s.due || ""; return "✓" + (d ? " " + d.slice(8, 10) + "." + d.slice(5, 7) : ""); }
      if (s.status === "skipped") { return this.t.lineSkipped; }
      return s.due ? this.fmt(s.due) + (s.clock ? " " + s.clock : "") : this.t.lineNoDate;
    },
    trainSub(r) {
      const m = this.stepOf(r, r.next);
      if (!m) { return this.t.noMilestone; }
      return "→ " + (m.reaches || m.gate) + (m.due ? " " + m.due.slice(8, 10) + "." + m.due.slice(5, 7) : "");
    },
    daysText(c) {
      const t = this.t;
      return c.days === 0 ? t.isToday : c.days > 0 ? t.inDays + " " + c.days + " " + t.dayUnit : t.late + " " + -c.days + " " + t.dayUnit;
    },
    journalWhen(at) {
      const time = at.slice(11, 16);
      return at.slice(0, 10) === this.state.today ? time : at.slice(8, 10) + "." + at.slice(5, 7) + " " + time;
    },
    journalTitle(j) {
      const r = this.state.releases.find((x) => x.version === j.version);
      const s = r && this.stepOf(r, j.step);
      return s ? this.title(s) : j.step;
    },
    pickPhase(id) { this.phaseSel = Object.assign({}, this.phaseSel, { [this.rel.version]: id }); },
    showAllOpen(r) { this.sel = r.version; this.onlyOpen = true; },
    openStep(version, id, event) {
      this.opener = event ? event.currentTarget : null;
      this.drawer = { version, id };
      this.$nextTick(() => { if (this.$refs.drawerCard) { this.$refs.drawerCard.focusClose(); } });
    },
    closeDrawer() {
      const el = this.opener;
      this.drawer = null;
      this.opener = null;
      this.$nextTick(() => { if (el && document.contains(el)) { el.focus(); } });
    },
    flash(message, ok) {
      this.toast = message;
      this.toastOk = !!ok;
      setTimeout(() => { if (this.toast === message) { this.toast = ""; } }, 5000);
    },

    watchHead() {
      const head = document.querySelector(".top");
      if (!head || head === this.headEl) { return; }
      if (this.headObs) { this.headObs.disconnect(); }
      this.headEl = head;
      const set = () => document.documentElement.style.setProperty("--head-h", head.offsetHeight + "px");
      set();
      if (window.ResizeObserver) { this.headObs = new ResizeObserver(set); this.headObs.observe(head); }
    },
    apply(data) {
      this.$nextTick(this.watchHead);
      this.state = data;
      this.skew = Date.parse(data.now) - Date.now();
      this.updatedMs = Date.now();
      this.error = ""; this.errTech = null;
      this.offline = false;
      if (!data.releases.some((r) => r.version === this.sel)) { this.sel = (firstOpen(data.releases) || {}).version || ""; }
      if (this.view === "system") { this.loadSystem(); if (this.sysTab === "history") { this.loadChanges(); } }
      if (this.view === "monitoring") { this.loadMonitoring(); }
      if (this.view === "calendar") { this.loadCalendar(); }
      if (this.view === "insights") { this.loadInsights(); }
      if (this.rel) { this.readStatus(this.rel.version); }
      this.loadBrief();
      this.loadSide();
      if (this.cmdOpen) { this.loadHints(); }
      clearTimeout(this.recheck);

      if (data.tech.agents[1].status === "checking" || (data.cs_running || []).length) { this.recheck = setTimeout(() => this.load(), 2000); }
    },
    async load() {
      let response;
      try {
        response = await fetch("/api/state", { cache: "no-store" });
      } catch (e) {
        this.offline = true;
        return;
      }
      const data = await response.json();
      if (response.ok) { this.apply(data); } else {

        this.offline = false; this.error = data.error || String(response.status); this.errTech = data.tech || null;
      }
    },
    async post(path, body) {
      this.busy = true;
      try {
        const response = await fetch(path, { method: "POST", headers: { "Content-Type": "application/json", "X-Stellwerk": "1" }, body: JSON.stringify(body) });
        const data = await response.json();
        if (response.ok) { this.apply(data); } else { this.flash(data.error || String(response.status)); }
      } catch (e) {
        this.offline = true;
      } finally {
        this.busy = false;
      }
    },
    async mark(r, s, status, note) {
      this.picked = this.picked.filter((k) => k !== r.version + "|" + s.id);
      const list = this.queueAll, at = list.findIndex((x) => x.r.version === r.version && x.s.id === s.id), cur = this.inboxCur;
      const after = this.view === "inbox" && at >= 0 && cur && cur.key === r.version + "|" + s.id ? (list[at + 1] || list[at - 1] || null) : null;
      await this.post("/api/mark", { version: r.version, step: s.id, status, note });
      if (after && this.queueAll.some((x) => x.key === after.key) && !this.queueAll.some((x) => x.key === r.version + "|" + s.id)) {
        this.inboxKey = after.key;
      }

    },
    openRow(key) {
      this.inboxKey = key;
      if (this.phone) {
        this.$nextTick(() => { const el = document.querySelector(".qdetail"); if (el) { el.scrollIntoView({ block: "start" }); } });
      }
    },
    refit() { if (this.cmdFloat) { this.cmdPos = fitPos(this.cmdPos); } },
    togglePick(key) {
      const i = this.picked.indexOf(key);
      if (i >= 0) { this.picked.splice(i, 1); } else { this.picked.push(key); }
    },

    async markPicked() {
      let why = "";
      for (const x of this.pickedLive) {
        if (this.offline) { break; }
        await this.mark(x.r, x.s, "done", "");
        if (this.queueAll.some((y) => y.key === x.key)) { why = this.toast; }
      }
      this.picked = this.pickedLive.map((x) => x.key);
      if (this.picked.length) { this.flash(fill(this.t.bulkLeft, String(this.picked.length)) + (why ? " · " + why : "")); }
    },

    async check(r, s) {
      const key = r.version + "|" + s.id;
      if (this.csBusy[key] || (this.state.cs_running || []).includes(key)) { return; }
      this.csBusy = Object.assign({}, this.csBusy, { [key]: true });
      try {
        const data = await this.call("/api/check", { version: r.version, step: s.id });
        if (data) { this.apply(data); }
      } finally {
        const left = Object.assign({}, this.csBusy);
        delete left[key];
        this.csBusy = left;
      }
    },

    async call(path, body, quiet) {
      try {
        const response = await fetch(path, body === undefined ? { cache: "no-store" }
          : { method: "POST", headers: { "Content-Type": "application/json", "X-Stellwerk": "1" }, body: JSON.stringify(body) });
        const data = await response.json();
        if (!response.ok) { if (!quiet) { this.flash(data.error || String(response.status)); } return null; }
        return data;
      } catch (e) {
        this.offline = true;
        return null;
      }
    },
    actText(j) {
      const [a, sub] = j.action.split(":");
      if (a === "check" || a === "jenkins") { return this.t.act[a] + " " + sub.toLowerCase(); }
      return (sub ? sub + ": " : "") + (this.t.act[a] || a);
    },
    actClass(j) {
      const [a, sub] = j.action.split(":");
      if (a === "check" || a === "jenkins") {
        return "p-" + ({ pass: "done", success: "done", fail: "overdue", failure: "overdue", aborted: "overdue", unstable: "today" }[(sub || "").toLowerCase()] || "open");
      }
      return "p-" + ({ undo: "open", clear: "open", go: "done", nogo: "overdue", published: "done", meeting: "done" }[a] || a);
    },

    async loadCalendar() {
      const asked = this.calFrom, range = asked ? "?from=" + asked + "&to=" + addDays(asked, 41) : "";
      const data = await this.call("/api/calendar" + range);
      if (data && asked === this.calFrom) { this.cal = data; }
    },
    calShift(days) {
      const from = this.calFrom || mondayOf(this.state.today);
      this.calFrom = days ? addDays(from, days) : "";
      this.loadCalendar();
    },
    calToggle(v) { this.calOff = Object.assign({}, this.calOff, { [v]: !this.calOff[v] }); },
    goCalendar(iso) {
      if (this.drawer) { this.closeDrawer(); }
      this.calFrom = iso ? mondayOf(iso) : "";
      if (this.view === "calendar") { this.loadCalendar(); } else { this.view = "calendar"; }
    },
    evLabel(e) { return e.kind === "deploy" ? this.STAGE_SHORT[e.stage] || e.stage : e.kind === "gate" ? e.gate : e.kind === "freeze" ? "❄" : "•"; },
    evName(e) { return e.kind === "freeze" ? this.t.calFreeze : this.title(e.title) || e.step; },
    evTitle(e) {
      return [e.version, this.evName(e), e.stage, e.gate, e.owner, e.time, e.status ? this.t.st[e.status] : "", this.evClash(e).replace(/\n/g, " · ")]
        .filter(Boolean).join(" · ");
    },

    evClash(e) { return e.step ? this.calClash[e.date + "|" + e.version + "|" + e.step] || "" : ""; },
    winLabel(w) { return w.from && w.to ? w.from + "–" + w.to : this.t.calKind[w.kind]; },
    calOpen(e, event) { if (e.step) { this.openStep(e.version, e.step, event); } },
    editWorkflow() {
      this.setSysTab("files");
      this.$nextTick(() => this.selectFile("workflow"));
    },

    addrs(text) { return String(text || "").split(/[,;\n]+/).map((x) => x.trim()).filter(Boolean); },
    leaveForCompose() {
      this.compOpener = this.drawer ? this.opener : document.activeElement;
      if (this.drawer) { this.drawer = null; this.opener = null; }
    },
    async openMail(r, kind) {
      const data = await this.call("/api/mail/draft", { version: r.version, kind });
      if (!data) { return; }
      this.leaveForCompose();
      this.comp = { type: "mail", version: r.version, kind, draft: data, to: data.to.join(", "), cc: data.cc.join(", "),
        subject: data.subject, text: data.text, busy: "", before: "" };
      this.$nextTick(() => { if (this.$refs.compClose) { this.$refs.compClose.focus(); } });
    },
    mailReset() {
      const c = this.comp, d = c.draft;
      Object.assign(c, { to: d.to.join(", "), cc: d.cc.join(", "), subject: d.subject, text: d.text, before: "" });
    },
    async mailPolish() {
      const c = this.comp, sent = c.text;
      c.busy = "polish"; c.stopped = false;
      const data = await this.call("/api/mail/polish", { version: c.version, kind: c.kind, text: sent });
      if (c.stopped) { return; }
      c.busy = "";
      if (!data) { return; }
      if (c.text !== sent) { this.flash(this.t.mailPolishStale); return; }
      c.before = sent; c.text = data.text;
    },
    mailUnpolish() { const c = this.comp; c.text = c.before; c.before = ""; },
    async mailOpen() {
      const c = this.comp;
      c.busy = "open";
      const data = await this.call("/api/mail/open", { version: c.version, kind: c.kind, to: this.addrs(c.to), cc: this.addrs(c.cc), subject: c.subject, text: c.text });
      c.busy = "";
      if (data) {
        this.flash(fill(data.opened ? this.t.mailOpened : this.t.mailSaved, data.path), true);
        c.draft = Object.assign({}, c.draft, { to: this.addrs(c.to), cc: this.addrs(c.cc), subject: c.subject, text: c.text });
      }
    },
    mailCopy() {
      const c = this.comp;
      navigator.clipboard.writeText(c.subject + "\n\n" + c.text).then(() => this.flash(this.t.copied, true), () => {   });
    },

    async openNotes(r) {
      this.leaveForCompose();
      this.comp = { type: "notes", version: r.version, view: null, summary: "", artifacts: {}, interfaces: "", plan: null, planFor: null, busy: "load", done: null };
      const c = this.comp;
      this.$nextTick(() => { if (this.$refs.compClose) { this.$refs.compClose.focus(); } });
      const data = await this.call("/api/notes?version=" + encodeURIComponent(r.version));
      c.busy = "";
      if (data) {
        c.view = data;
        if (data.style === "atlas") {
          c.artifacts = Object.fromEntries((data.artifacts || []).map((a) => [a.name, a.version]));
          c.interfaces = data.interfaces || "";
          c.base = this.compState(c);
        }
      }
    },
    notesKey() {
      const c = this.comp;
      return c ? JSON.stringify([c.summary, c.artifacts, c.interfaces]) : "";
    },
    async notesWrite() {
      const c = this.comp, before = c.summary;
      if (before.trim() && !window.confirm(this.t.notesOverwrite)) { return; }
      c.busy = "write"; c.stopped = false;
      const data = await this.call("/api/notes/summary", { version: c.version });
      if (c.stopped) { return; }
      c.busy = "";
      if (!data) { return; }
      if (c.summary !== before) { this.flash(this.t.notesKept); return; }
      c.summary = data.summary;
      if (data.note) { this.flash(fill(this.t.notesFrom, data.note), true); }
    },
    async notesCheck() {
      const c = this.comp, asked = this.notesKey();
      c.busy = "check";
      const data = await this.call("/api/notes/check", { version: c.version, summary: c.summary, artifacts: c.artifacts, interfaces: c.interfaces });
      c.busy = "";
      if (data) {
        c.plan = data; c.planFor = asked; c.done = null;
        if (Array.isArray(data.list)) { c.view.issues = data.list; }
      }
    },
    async notesPublish() {
      const c = this.comp;
      if (!c.plan || this.notesKey() !== c.planFor) { this.flash(this.t.notesStale); return; }
      c.busy = "publish";
      const plan = { action: c.plan.action, number: c.plan.number, sha: c.plan.sha };
      if (c.plan.id) { plan.id = c.plan.id; }
      if (c.plan.parent && c.view.style === "atlas") { plan.parent = c.plan.parent; }
      const data = await this.call("/api/notes/publish", { version: c.version, summary: c.summary, artifacts: c.artifacts, interfaces: c.interfaces, plan });
      c.busy = "";
      if (data) {
        c.done = data;
        c.plan = null;
        this.flash(fill(this.t.notesDone, data.url || data.title), true);
        this.load();
      }
    },

    async applyProposal(p) {
      p.busy = true;
      const data = await this.call("/api/proposal/apply", { id: p.id, run: p.run });
      p.busy = false;
      if (!data) { return; }
      await this.load();
      if (data.open && data.open.type === "jira") {
        const r = (this.state.releases || []).find((x) => x.version === data.open.version);
        if (!r) { this.flash(fill(this.t.propNoRelease, data.open.version)); return; }
        p.state = "done"; p.done = data.done;
        this.toggleCmd(false);
        await this.openJira(r, data.open.kind, data.open.stages);
      } else {
        p.state = "done"; p.done = data.done;
        this.flash(data.done, true);
      }
    },
    async dropProposal(p) {
      p.busy = true;
      await this.call("/api/proposal/drop", { id: p.id, run: p.run });
      p.busy = false; p.state = "dropped";
    },

    async openJira(r, kind, preset) {
      this.leaveForCompose();
      this.comp = { type: "jira", kind, version: r.version, form: null, rows: [], plan: null, planFor: null, busy: kind === "deploys" ? "load" : "", done: null, error: "", browse: "" };
      const c = this.comp;
      this.$nextTick(() => { if (this.$refs.compClose) { this.$refs.compClose.focus(); } });
      if (kind !== "deploys") { if (preset) { await this.jiraCheck(); } return; }
      const data = await this.call("/api/jira/template", { version: r.version, kind });
      c.busy = "";
      if (!data) { c.error = this.t.jiraNoForm; return; }
      c.form = data; c.browse = data.browse || "";
      const sp = !/\.0$/.test(r.version), wanted = this.stageLists.jira_default[sp ? "service_pack" : "major"] || [];
      const given = {};
      (preset || []).forEach((s) => { given[String(s.env || "").toUpperCase()] = s; });
      c.rows = data.envs.map((env) => {
        const g = given[env];
        return g ? { env, on: true, date: g.date || "", time: g.time || data.slots[env] || "" }
          : { env, on: !preset && wanted.includes(env) && !data.exists[env], date: (data.dates || {})[env] || "", time: data.slots[env] || "" };
      });
      c.base = preset ? undefined : this.compState(c);
      const unknown = Object.keys(given).filter((env) => !data.envs.includes(env));
      if (unknown.length) { this.flash(fill(this.t.jiraUnknownEnv, unknown.join(", "))); }
      if (preset && this.jiraStages.length) { await this.jiraCheck(); }
    },
    jiraKey() {
      const c = this.comp;
      return c && c.type === "jira" ? JSON.stringify(c.kind === "deploys" ? this.jiraStages : c.kind) : "";
    },
    jiraLink(key) { return (this.comp && this.comp.browse ? this.comp.browse : "") + key; },
    async jiraCheck() {
      const c = this.comp, asked = this.jiraKey();
      c.busy = "check"; c.error = "";
      const data = await this.call("/api/jira/plan", { version: c.version, kind: c.kind, stages: this.jiraStages });
      c.busy = "";
      if (data) { c.plan = data; c.planFor = asked; c.done = null; c.browse = data.browse || c.browse; }
    },
    async jiraCreate() {
      const c = this.comp;
      if (!c.plan || this.jiraKey() !== c.planFor) { this.flash(this.t.jiraStale); return; }
      c.busy = "create";
      const data = await this.call("/api/jira/create", { version: c.version, kind: c.kind, stages: this.jiraStages, sha: c.plan.sha });
      c.busy = "";
      if (data) {
        c.done = data; c.plan = null;
        this.flash(fill(this.t.jiraCreated, data.created.map((x) => x.key).join(", ")), true);
        this.load();
      }
    },

    async openMeeting(r, s) {
      const data = await this.call("/api/meeting/draft", { version: r.version });
      if (!data) { return; }
      this.leaveForCompose();
      this.comp = { type: "meeting", version: r.version, step: s ? s.id : ((r.steps.find((x) => x.meeting) || {}).id || ""), draft: data, attendees: data.attendees.join(", "),
        optional: data.optional.join(", "), subject: data.subject, start: data.start, end: data.end, location: data.location,
        text: data.text, busy: "" };
      this.$nextTick(() => { if (this.$refs.compClose) { this.$refs.compClose.focus(); } });
    },
    async meetingOpen() {
      const c = this.comp;
      c.busy = "open";
      const data = await this.call("/api/meeting/open", { version: c.version, step: c.step, attendees: this.addrs(c.attendees),
        optional: this.addrs(c.optional), subject: c.subject, start: c.start, end: c.end, location: c.location, text: c.text });
      c.busy = "";
      if (data) {
        const text = data.outlook ? this.t.meetingOpened : data.opened ? this.t.meetingIcs : this.t.meetingSaved;
        c.draft = Object.assign({}, c.draft, { attendees: this.addrs(c.attendees), optional: this.addrs(c.optional), subject: c.subject,
          start: c.start, end: c.end, location: c.location, text: c.text });
        this.flash(fill(text, data.path) + (data.detail && !data.outlook ? " · " + data.detail : ""), !!data.outlook);
        this.load();
      }
    },
    planText(p) {
      const t = this.t;
      return (p.action === "create" ? fill(t.notesCreate, p.title) : fill(t.notesUpdate, p.title))
        + (p.action === "update" ? " · " + t.notesVersion.replace("{0}", p.number).replace("{1}", p.number + 1) : "")
        + " · " + t.notesSpace + " " + p.space + " · " + (p.pi_title ? t.notesUnder + " “" + p.pi_title + "”" : p.parent ? t.notesUnder + " " + p.parent : t.notesTop);
    },
    compDirty() {
      const c = this.comp;
      if (!c) { return false; }
      if (c.type === "notes") { return (!!c.summary.trim() || !!c.plan || (c.base !== undefined && this.compState(c) !== c.base)) && !c.done; }
      if (c.type === "jira") { return (!!c.plan || (c.base !== undefined && this.compState(c) !== c.base)) && !c.done; }
      const d = c.draft || {}, list = (x) => (x || []).join(", ");
      if (c.type === "mail") { return c.text !== d.text || c.subject !== d.subject || c.to !== list(d.to) || c.cc !== list(d.cc); }
      return c.text !== d.text || c.subject !== d.subject || c.start !== d.start || c.end !== d.end || c.location !== d.location
        || c.attendees !== list(d.attendees) || c.optional !== list(d.optional);
    },

    compState(c) {
      if (c.type === "notes") { return JSON.stringify([c.summary, c.artifacts, c.interfaces]); }
      return JSON.stringify((c.rows || []).map((r) => [r.env, r.on, r.date, r.time]));
    },

    composeStop() {
      const c = this.comp;
      if (!c || (c.busy !== "polish" && c.busy !== "write")) { return; }
      c.stopped = true; c.busy = "";
      this.call(c.type === "notes" ? "/api/notes/stop" : "/api/mail/stop", { version: c.version }, true);
    },
    closeComp() {
      if (this.comp && (this.comp.busy === "publish" || this.comp.busy === "create")) { return; }
      this.composeStop();
      if (this.compDirty() && !window.confirm(this.t.dropDraft)) { return; }
      this.comp = null;
      this.helpOpen = "";
      const el = this.compOpener;
      this.compOpener = null;
      this.$nextTick(() => { if (el && document.contains(el)) { el.focus(); } });
    },
    unmark(r, s) { return this.post("/api/unmark", { version: r.version, step: s.id }); },
    refTitle(x) {
      const r = this.state.releases.find((y) => y.version === x.version);
      const s = r && this.stepOf(r, x.step);
      return s ? this.title(s) : x.step;
    },
    setPalette(name) {
      this.paletteChoice = name;
      store("palette", name);
      this.palOpen = false;
    },

    toggleFloat() {
      this.cmdFloat = !this.cmdFloat;
      store("cmdFloat", this.cmdFloat ? "on" : "off");
      if (this.cmdFloat) { this.cmdWide = false; store("cmdWide", "off"); this.cmdPos = fitPos(this.cmdPos); }
      this.scrollLog();
      this.$nextTick(() => { this.watchSize(); if (this.$refs.cmdInput) { this.$refs.cmdInput.focus(); } });
    },
    dragStart(event) {
      if (!this.cmdFloat || this.phone || event.button !== 0 || event.target.closest("button, input, textarea, a, select")) { return; }
      event.preventDefault();
      const z = zoomOf();
      this.drag = { x: event.clientX, y: event.clientY, left: this.cmdPos.x, top: this.cmdPos.y, z };
      window.addEventListener("pointermove", this.dragMove);
      window.addEventListener("pointerup", this.dragEnd, { once: true });
    },
    dragMove(event) {
      const d = this.drag;
      if (!d) { return; }
      this.cmdPos = fitPos(Object.assign({}, this.cmdPos, { x: d.left + (event.clientX - d.x) / d.z, y: d.top + (event.clientY - d.y) / d.z }));

      this.snap = event.clientX >= window.innerWidth - SNAP_EDGE ? "right" : event.clientY >= window.innerHeight - SNAP_EDGE ? "bottom" : "";
    },
    dragEnd() {
      window.removeEventListener("pointermove", this.dragMove);
      const d = this.drag, snap = this.snap;
      this.drag = null;
      this.snap = "";
      if (snap && d) {
        this.cmdPos = fitPos(Object.assign({}, this.cmdPos, { x: d.left, y: d.top }));
        store("cmdPos", JSON.stringify(this.cmdPos));
        this.dockTo(snap);
        return;
      }
      store("cmdPos", JSON.stringify(this.cmdPos));
    },

    dockTo(where) {
      this.cmdFloat = false;
      store("cmdFloat", "off");
      this.cmdWide = false;
      store("cmdWide", "off");
      this.cmdBottom = where === "bottom";
      store("cmdBottom", this.cmdBottom ? "on" : "off");
      this.scrollLog();
      this.$nextTick(() => { if (this.$refs.cmdInput) { this.$refs.cmdInput.focus(); } });
    },
    toggleBottom() { this.dockTo(this.dockBottom ? "right" : "bottom"); },

    gripStart(event) {
      if (event.button !== 0) { return; }
      event.preventDefault();
      this.grip = { y: event.clientY, h: this.cmdBottomH, z: zoomOf() };
      window.addEventListener("pointermove", this.gripMove);
      window.addEventListener("pointerup", this.gripEnd, { once: true });
    },
    gripMove(event) {
      const g = this.grip;
      if (!g) { return; }
      const most = window.innerHeight / g.z - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--head-h")) || 57) - 40;
      this.cmdBottomH = Math.round(Math.max(180, Math.min(g.h - (event.clientY - g.y) / g.z, most)));
    },
    gripEnd() {
      window.removeEventListener("pointermove", this.gripMove);
      this.grip = null;
      store("cmdBottomH", String(this.cmdBottomH));
    },

    toggleScale() {
      this.scaleFit = !this.scaleFit;
      store("scale", this.scaleFit ? "fit" : "balanced");
      applyScale(this.scaleFit ? "fit" : "balanced");
      this.$nextTick(() => this.refit());
    },

    watchSize() {
      if (this.sizeObs) { this.sizeObs.disconnect(); this.sizeObs = null; }
      const el = this.$refs.cmdBox;
      if (!el || !this.cmdFloat || this.phone || typeof ResizeObserver === "undefined") { return; }
      this.sizeObs = new ResizeObserver(() => {
        if (!this.cmdFloat || this.drag) { return; }
        const w = Math.round(el.offsetWidth), h = Math.round(el.offsetHeight);
        if (w && h && (w !== this.cmdPos.w || h !== this.cmdPos.h)) {
          this.cmdPos = Object.assign({}, this.cmdPos, { w, h });
          store("cmdPos", JSON.stringify(this.cmdPos));
        }
      });
      this.sizeObs.observe(el);
    },
    toggleWide() {
      if (this.cmdFloat) { this.cmdFloat = false; store("cmdFloat", "off"); this.cmdWide = false; }
      this.cmdWide = !this.cmdWide;
      store("cmdWide", this.cmdWide ? "on" : "off");
      this.scrollLog();
      this.$nextTick(() => { if (this.$refs.cmdInput) { this.$refs.cmdInput.focus(); } });
    },
    takeHints(data) {
      this.hints = data.items || [];
      this.hintsBy = data.by;
      this.hintsPending = !!data.pending;
      this.hintsError = data.error || "";
      clearTimeout(this.hintTimer);
      if (data.pending && this.cmdOpen) { this.hintTimer = setTimeout(() => this.loadHints(), 3000); }
    },
    async loadHints() {
      try {
        const response = await fetch("/api/hints", { cache: "no-store" });
        if (response.ok) { this.takeHints(await response.json()); }
      } catch (e) {   }
    },
    async refreshHints() {
      try {
        const response = await fetch("/api/hints/refresh", { method: "POST", headers: { "Content-Type": "application/json", "X-Stellwerk": "1" }, body: "{}" });
        if (response.ok) { this.takeHints(await response.json()); }
      } catch (e) {
        this.offline = true;
      }
    },
    useHint(h, event) {
      if (h.open) { this.openStep(h.open.version, h.open.step, event); } else { this.sendCommand(h.text); }
    },
    async loadSystem() {
      try {
        const response = await fetch("/api/system", { cache: "no-store" });
        const data = await response.json();
        if (response.ok) { this.sys = data; this.sysError = ""; this.watchFile(); } else { this.sysError = data.error || String(response.status); }
      } catch (e) {
        this.offline = true;
      }
    },

    watchFile() {
      const f = this.ed && this.fileOf(this.ed.key);
      if (!f || !f.sha || f.sha === this.ed.sha || this.edBusy || this.edSaving) { return; }
      if (this.edDirty) { this.edDisk = true; } else { this.selectFile(this.ed.key, true); }
    },
    async openFile(key) {
      try {
        const response = await fetch("/api/open", { method: "POST", headers: { "Content-Type": "application/json", "X-Stellwerk": "1" }, body: JSON.stringify({ key }) });
        const data = await response.json();
        if (response.ok) { this.flash(fill(this.t.opened, data.path), true); } else { this.flash(data.error || String(response.status)); }
      } catch (e) {
        this.offline = true;
      }
    },
    fileOf(key) { return (this.sys ? this.sys.files : []).find((f) => f.key === key) || { path: "", exists: false }; },
    fileLabel(f) {
      const t = this.t, fixed = { data: t.dataFolder, project: t.projectFolder, state: "state\\", settings: "stellwerk.yml",
        releases: "releases.yaml", journal: "state\\journal.jsonl", opencode: "opencode.jsonc", readme: "README.md", backups: "backups\\",
        monitoring: "monitoring.yml", workflow: "workflow.yml", insights: "insights.yml", history: "history\\" };
      if (fixed[f.key]) { return fixed[f.key]; }
      const [kind, name] = f.key.split(":");
      return kind === "playbook" ? "playbooks\\" + name + ".yaml" : ".opencode\\agents\\" + name + ".md";
    },
    agentRole(a) {
      const found = this.agentRoles.find((r) => r.name && r.name === a.name);
      return found ? this.roleText(found.role, a) : this.t.roleOther;
    },

    roleText(role, file) {
      const known = this.t.roles[role === "name" ? "main" : role];
      if (known) { return known; }
      const said = file && file.description ? file.description.split(/(?<=\.)\s/)[0] : "";
      return said || this.t.roleOther;
    },
    agentDot(a) {
      const c = this.cfg;
      if (a.name === c["agent.hints"]) { return this.hintsDot; }

      return ["agent.name", "agent.editor", "agent.watch", "agent.mail", "agent.notes"].some((k) => c[k] && c[k] === a.name) ? this.llmDot : "off";
    },
    agentState(a) {
      if (a.name === this.cfg["agent.name"]) { return this.llmText; }
      if (a.name !== this.cfg["agent.hints"]) { return ""; }
      const h = this.sys.hints;
      return fill(this.t.hintsState[h.status] || "", h.status === "ok" ? h.count : h.detail);
    },
    permClass(rule) { return /: (deny|false)$/.test(rule) ? "deny" : /: (allow|true)$/.test(rule) ? "allow" : ""; },
    togglePrompt(key) { this.promptOpen = Object.assign({}, this.promptOpen, { [key]: !this.promptOpen[key] }); },
    closeMenus() { this.palOpen = false; this.moreOpen = false; this.helpOpen = ""; },
    goView(v) { this.view = v; this.moreOpen = false; },

    async fileCall(path, body, signal) {
      const response = await fetch(path, { method: "POST", headers: { "Content-Type": "application/json", "X-Stellwerk": "1" }, body: JSON.stringify(body), signal });
      return { ok: response.ok, status: response.status, data: await response.json() };
    },
    async selectFile(key, force) {
      if (this.view === "system" && this.sysTab !== "files" && !force) { this.setSysTab("files"); }
      if (!force && this.edDirty && this.ed.key !== key && !window.confirm(fill(this.t.dropChanges, this.fileLabel(this.fileOf(this.ed.key))))) { return; }
      if (!force && this.edDirty && this.ed.key === key) { this.scrollEditor(); return; }
      try {
        const response = await fetch("/api/file?key=" + encodeURIComponent(key), { cache: "no-store" });
        const data = await response.json();
        if (!response.ok) { this.flash(data.error || String(response.status)); return; }
        this.ed = data;
        this.edText = data.text;
        this.edMode = "text";
        this.edCheck = null;
        this.edDisk = false;
        if (!force) { this.edReply = ""; this.scrollEditor(); }
      } catch (e) {
        this.offline = true;
      }
    },
    scrollEditor() {
      this.$nextTick(() => { const el = this.$refs.editor; if (el && el.scrollIntoView) { el.scrollIntoView({ block: "start", behavior: "smooth" }); } });
    },
    reloadFile() {
      if (this.edDirty && !window.confirm(fill(this.t.dropChanges, this.fileLabel(this.fileOf(this.ed.key))))) { return; }
      this.edReply = "";
      this.selectFile(this.ed.key, true);
    },
    async showChanges() {
      this.edMode = "changes";
      this.edChecking = true;
      try {
        const r = await this.fileCall("/api/file/check", { key: this.ed.key, text: this.edText });
        if (r.ok) { this.edCheck = r.data; } else { this.flash(r.data.error || String(r.status)); }
      } catch (e) {
        this.offline = true;
      } finally {
        this.edChecking = false;
      }
    },
    async saveFile() {
      if (!this.edDirty || this.edSaving || this.edBusy) { return; }
      this.edSaving = true;
      const sent = this.edText;
      try {
        const r = await this.fileCall("/api/file/save", { key: this.ed.key, text: sent, sha: this.ed.sha, via: this.edFromAgent ? "agent" : "editor" });
        if (r.ok) {
          this.ed = Object.assign({}, this.ed, { text: sent, sha: r.data.sha });
          this.edCheck = null;
          this.edDisk = false;
          this.edReply = "";
          this.edFromAgent = false;
          if (this.sysTab === "history") { this.loadChanges(); }
          this.edMode = "text";
          this.flash(r.data.saved ? fill(this.t.saved, r.data.backup) : this.t.nothingSaved, true);
          this.loadSystem();
          if (this.ed.kind === "data") { this.load(); }
        } else {
          if (r.status === 409) { this.edDisk = true; }
          if (r.data.problems) { this.showChanges(); }
          this.flash(r.data.error || String(r.status));
        }
      } catch (e) {
        this.offline = true;
      } finally {
        this.edSaving = false;
      }
    },
    discardEdit() {
      this.edFromAgent = false;
      this.edText = this.ed.text;
      this.edCheck = null;
      this.edReply = "";
      this.edMode = "text";
    },
    edKey(event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") { event.preventDefault(); this.saveFile(); }
    },
    async askEdit() {
      const instruction = this.edAsk.trim();
      if (!instruction || this.edBusy || !this.editorOn) { return; }
      this.edBusy = true;
      this.edWait = 0;
      this.edReply = "";
      const started = Date.now(), timer = setInterval(() => { this.edWait = Math.floor((Date.now() - started) / 1000); }, 250);
      const stop = new AbortController();
      this.edStop = stop;
      try {
        const r = await this.fileCall("/api/file/propose", { key: this.ed.key, text: this.edText, instruction }, stop.signal);
        if (r.ok) {
          this.edReply = r.data.reply || (r.data.proposed ? "" : this.t.agentNoChange);
          if (r.data.proposed) {
            this.edFromAgent = true;
            this.edText = r.data.text;
            this.edCheck = r.data;
            this.edMode = "changes";
            this.edAsk = "";
          }
        } else {
          if (r.data.reply) { this.edReply = r.data.reply; }
          this.flash(r.data.error || String(r.status));
        }
      } catch (e) {
        if (!stop.signal.aborted) { this.offline = true; }
      } finally {
        clearInterval(timer);
        this.edStop = null;
        this.edBusy = false;
      }
    },
    async stopEdit() {
      if (this.edStop) { this.edStop.abort(); }
      try { await this.fileCall("/api/file/abort", {}); } catch (e) { this.offline = true; }
    },
    diffClass(op) { return { "+": "d-add", "-": "d-del", "@": "d-hunk" }[op] || ""; },
    toggleHelp(k) { this.helpOpen = this.helpOpen === k ? "" : k; },

    setSysTab(s) {
      this.sysTab = s;
      if (this.view !== "system") { this.view = "system"; }
      history.replaceState(null, "", "#system/" + s);
      if (s === "history") { this.loadChanges(); }
    },

    async loadChanges(older) {
      try {
        const more = older === true, response = await fetch("/api/changes?skip=" + (more ? this.changes.length : 0), { cache: "no-store" });
        if (!response.ok) { return; }
        const data = await response.json(), got = new Set(data.items.map((c) => c.id));
        const kept = more ? this.changes : this.changes.slice(data.items.length).filter((c) => !got.has(c.id));
        this.changes = more ? kept.concat(data.items.filter((c) => !kept.some((k) => k.id === c.id))) : data.items.concat(kept);
        this.changesOlder = Math.max(0, data.older - (more ? 0 : kept.length));
      } catch (e) {
        this.offline = true;
      }
    },
    toggleChange(id) { this.changeOpen = Object.assign({}, this.changeOpen, { [id]: !this.changeOpen[id] }); },
    revertOf(c) {
      const of = this.changes.find((x) => x.id === c.detail);
      return of ? fill(this.t.revertOfT, of.at.slice(8, 10) + "." + of.at.slice(5, 7) + " " + of.at.slice(11, 16)) : this.t.via.revert;
    },
    async previewRevert(c) {
      this.revBusy = true;
      const r = await this.filesCall("/api/files/check", { mode: "revert", change: c.id });
      this.revBusy = false;
      if (r && r.ok) { this.revFor = c.id; this.revPreview = r.data; } else if (r) { this.flash(r.data.error || String(r.status)); }
    },
    async saveRevert() {
      this.revBusy = true;
      const r = await this.filesCall("/api/files/save", { mode: "revert", change: this.revFor, shas: this.revPreview.shas });
      this.revBusy = false;
      if (!r) { return; }
      if (r.ok) {
        this.revFor = "";
        this.revPreview = null;
        this.afterSaveMany(r.data);
      } else {
        if (r.data.problems) { this.revPreview = Object.assign({}, this.revPreview, { problems: r.data.problems }); }
        this.flash(r.data.error || String(r.status));
      }
    },

    async loadSide() {
      try {
        const response = await fetch("/api/side", { cache: "no-store" });
        const data = await response.json();
        if (response.ok && !data.error) { this.side = data; }
        clearTimeout(this.sideTimer);
        if (data.pending || (data.watch && data.watch.status === "running")) { this.sideTimer = setTimeout(() => this.loadSide(), 3000); }
      } catch (e) {
        this.offline = true;
      }
    },
    readyAction(x, event) {
      if (x.open) { this.openStep(x.open.version, x.open.step, event); } else if (x.stage) { this.goMonitor(x.stage); } else if (x.url) { window.open(x.url, "_blank", "noopener"); }
    },
    toggleRail() {
      this.railOn = !this.railOn;
      store("rail", this.railOn ? "on" : "off");
      this.loadSide();
    },

    alertAction(a, event) {
      if (a.open) { this.openStep(a.open.version, a.open.step, event); } else if (a.calendar) { this.goCalendar(a.calendar); }
      else if (a.place || a.stage) { this.goMonitor(a.place || a.stage); } else if (a.url) { window.open(a.url, "_blank", "noopener"); }
    },

    async loadInsights() {
      let data;
      try {
        const response = await fetch("/api/insights", { cache: "no-store" });
        data = await response.json();
        if (!response.ok) { this.insError = data.error || String(response.status); return; }
      } catch (e) {
        this.offline = true;
        return;
      }
      this.ins = data;
      this.insError = "";
      if (!this.insSel || (!data.releases.some((r) => r.version === this.insSel) && !data.archive.some((a) => a.version === this.insSel) && !this.insData)) {
        const live = firstOpen((this.state ? this.state.releases : []).filter((r) => data.releases.some((x) => x.version === r.version)));
        this.insSel = this.insSel || (live || data.releases[0] || {}).version || "";
      }
      if (this.insSel) { this.peekStatus(this.insSel); await this.loadInsight(this.insSel); }
      clearTimeout(this.insTimer);
      if ((data.releases.some((r) => r.running) || (data.running || []).length) && this.view === "insights") {
        this.insTimer = setTimeout(() => this.loadInsights(), 3000);
      }
    },
    async loadInsight(version) {
      this.readStatus(version);
      const data = await this.call("/api/insights?version=" + encodeURIComponent(version), undefined, true);
      if (!data || version !== this.insSel) { return; }
      this.insData = data;
      clearTimeout(this.insOneTimer);
      if (data.running && this.view === "insights") { this.insOneTimer = setTimeout(() => this.loadInsight(version), 3000); }
    },
    openInsight(version) {
      this.insSel = version;
      this.insRisk = {}; this.insHit = ""; this.insAll = false; this.insFind = ""; this.insFacts = false; this.insArch = false;
      if (!this.insData || this.insData.version !== version) { this.insData = null; }
      history.replaceState(null, "", "#insights/" + encodeURIComponent(version));
      this.loadInsight(version);
    },
    async refreshInsight(version) {
      const data = await this.call("/api/insights/refresh", { version });
      if (!data) { return; }
      this.flash(fill(this.t.insStarted, version), true);
      if (this.insSel !== version) { this.openInsight(version); }
      this.insData = Object.assign({}, this.insData || { version, insight: null, compare: {} }, { running: true, error: "" });
      setTimeout(() => this.loadInsights(), 800);
    },
    buildOther() {
      const v = this.insOtherV;
      if (!/^\d+\.\d+\.\d+$/.test(v)) { this.flash(this.t.insBadVersion); return; }
      const kept = this.ins && (this.ins.archive.some((a) => a.version === v && !a.error) || this.ins.releases.some((r) => r.version === v && r.built));
      if (kept) { this.openInsight(v); } else { this.refreshInsight(v); }
      this.insOtherV = "";
    },
    editInsights() {
      this.setSysTab("files");
      this.$nextTick(() => this.selectFile("insights"));
    },
    insRow(version) {
      return this.ins ? this.ins.releases.find((r) => r.version === version) || this.ins.archive.find((a) => a.version === version) || null : null;
    },
    insDot(r) { return r.running ? "off pulse" : !r.built && r.built !== undefined ? "off" : { high: "r", medium: "y", low: "g", none: "g" }[r.level] || "off"; },
    insLamp(level) { return { high: "r", medium: "y", unknown: "off" }[level] || ""; },
    insIcon(level) { return { high: "▲", medium: "●", low: "○", unknown: "?" }[level] || "✓"; },
    insAt(iso) { return iso ? iso.slice(8, 10) + "." + iso.slice(5, 7) + "." + iso.slice(0, 4) + (iso.length > 10 ? " " + iso.slice(11, 16) : "") : "—"; },
    insRange(ins) {
      const ranges = [...new Set(ins.repos.filter((r) => !r.problem && r.from && r.to).map((r) => r.from.name + " → " + r.to.name))];
      return ranges.join(" · ") || "—";
    },

    insUnread(k) {
      const c = this.insCur, code = ["repos", "commits", "files", "authors", "migration", "interface", "config"].includes(k);
      if (code) { return !(c.stats.repos_read > 0); }
      if (k === "business" || k === "bugs") { return !(c.sources && c.sources.jira && c.sources.jira.status === "ok"); }
      return false;
    },
    insKpi(k) {
      const s = this.insCur.stats, t = this.t;
      if (this.insUnread(k)) { return "—"; }
      if (k === "repos") { return s.repos_changed; }
      if (k === "migration" || k === "interface" || k === "config") { return s[k] ? t.insYes : t.insNo; }
      return s[k];
    },
    insKpiSub(k) {
      const s = this.insCur.stats, t = this.t, c = this.insCmp;
      if (this.insUnread(k)) { return t.insTrNotRead || "not read"; }
      if (k === "repos") { return s.repos > s.repos_read ? fill(t.ix.notReadN, String(s.repos - s.repos_read)) : ""; }
      if (k === "migration" || k === "interface" || k === "config") { return s[k] ? fill(t.insFiles, String(s[k])) : "—"; }
      const parts = [], median = this.insMedian(k);
      if (k === "commits" && s.merges) { parts.push(fill(t.insMerges, String(s.merges))); }
      if (k === "bugs") { const n = this.insIssues.filter((i) => i.part === "bugs" && i.urgent).length; if (n) { parts.push(fill(t.ix.blockers, String(n))); } }
      if (median !== null) { parts.push(fill(t.insTrMedian, String(median))); }
      else if (c && c[k] !== undefined) { parts.push((c[k] > 0 ? "+" : c[k] < 0 ? "−" : "±") + Math.abs(c[k]) + " · " + c.version); }
      return parts.join(" · ");
    },
    insKpiClass(k) {
      const s = this.insCur.stats;
      return (k === "migration" || k === "interface") && s[k] ? "lvl-t-high" : "";
    },

    insListOf(key) {
      const list = key === "urgent" ? "open" : key;
      const own = INS_LISTS.includes(list) || list === "config";
      return own && this.insCur && (this.insCur.lists[list] || []).length ? list : "";
    },

    insConfig() {
      return [...(this.insCur.lists.config || [])].sort((a, b) => a.repo.localeCompare(b.repo) || a.path.localeCompare(b.path))
        .map((f) => { const cut = f.path.lastIndexOf("/");
          return Object.assign({}, f, { dir: cut >= 0 ? f.path.slice(0, cut + 1) : "", name: f.path.slice(cut + 1), stage: cfgStage(f.path, this.stageLists.from_name) }); });
    },
    trendRows(metric, source) {
      return this.insTrend.rows.map((r) => ({ version: r.version, label: r.label, current: r.current, value: r[source] ? r[metric] : null }));
    },
    async buildMissing() {
      for (const v of this.insTrend.missing) {
        if (!(await this.call("/api/insights/refresh", { version: v }))) { break; }
      }
      setTimeout(() => this.loadInsights(), 800);
    },
    insShareText(r) {
      const t = this.t, pct = Math.round(r.share * 100);
      return r.name + ": " + r.files + " " + t.insK.files.toLowerCase() + " (+" + r.added + " / −" + r.deleted + "), " + r.commits + " "
        + t.insK.commits.toLowerCase() + (r.merges ? " " + fill(t.insMerges, String(r.merges)) : "") + " · " + pct + " %";
    },

    insMedian(k) {
      const m = INS_TREND.find((x) => x[0] === k);
      if (!m || !this.insTrend) { return null; }
      const v = this.insTrend.rows.filter((r) => !r.current && r[m[1]]).map((r) => r[k]).sort((a, b) => a - b);
      if (v.length < 2) { return null; }
      const h = v.length / 2;
      return v.length % 2 ? v[Math.floor(h)] : Math.round((v[h - 1] + v[h]) / 2);
    },
    insRiskIssues(key) { return this.insCur.lists[key === "urgent" ? "urgent" : this.insListOf(key)] || []; },
    insScroll(id) {
      this.$nextTick(() => { const el = document.getElementById(id); if (el && el.scrollIntoView) { el.scrollIntoView({ block: "start", behavior: "smooth" }); } });
    },

    async readStatus(version, force) {
      if (!version || !this.state || !this.state.releases.some((r) => r.version === version)) { return; }
      if (!force && this.stAsked[version]) { return; }
      this.stAsked[version] = true;
      this.stSet(version, await this.call("/api/status/read", { version, force: !!force }, !force));
    },
    async peekStatus(version) {
      if (this.stAsked[version] && !(this.relSt[version] && this.relSt[version].status === "reading")) {
        this.stSet(version, await this.call("/api/status?version=" + encodeURIComponent(version), undefined, true));
      }
    },
    stSet(version, data) {
      if (!data) { return; }
      this.relSt = Object.assign({}, this.relSt, { [version]: data });
      clearTimeout(this.stTimers[version]);
      if (data.status !== "reading" && !data.checking) { return; }
      this.stTimers[version] = setTimeout(async () => {
        this.stSet(version, data.checking ? await this.call("/api/status/read", { version, force: false }, true)
          : await this.call("/api/status?version=" + encodeURIComponent(version), undefined, true));
      }, data.checking ? 2000 : 3000);
    },

    stRefLabel(ref, version) {
      const kind = ref.slice(0, ref.indexOf(":")), id = ref.slice(ref.indexOf(":") + 1), t = this.t;
      if (kind === "risk") { return t.ix.refRisk + ": " + (t.ix.risk[id] || id); }
      if (kind === "step") { const r = this.state.releases.find((x) => x.version === version), s = r && this.stepOf(r, id); return s ? this.title(s) : id; }
      if (kind === "view") { return { cockpit: t.cockpitTab, monitoring: t.monitoringTab, cicd: t.cicdTab, regression: t.regressionTab }[id] || id; }
      if (kind === "tab") { return t.ix.tab[id] || id; }
      return id;
    },
    stGo(ref, version, event) {
      const kind = ref.slice(0, ref.indexOf(":")), id = ref.slice(ref.indexOf(":") + 1);
      if (kind === "step") { this.openStep(version, id, event); }
      else if (kind === "view") { this.goView(id); }
      else if (kind === "tab") { this.insTab = id; this.insScroll("ins-details"); }
      else if (kind === "risk") {
        if (this.insListOf(id)) { this.insRisk[id] = true; }
        this.insHit = id;
        setTimeout(() => { if (this.insHit === id) { this.insHit = ""; } }, 2500);
        this.insScroll("ins-risk-" + id);
      }
      else if (kind === "issue") {
        const i = this.insIssues.find((x) => x.key === id);
        if (i && i.url) { window.open(i.url, "_blank", "noopener"); } else { this.insTab = "issues"; this.insFilter = "all"; this.insFind = id; this.insScroll("ins-details"); }
      }
    },

    async loadBrief() {
      if (!this.state.helpers.briefing) { this.brief = null; return; }
      if (this.brief && this.brief.status === "writing") { return; }
      this.briefSet(await this.call("/api/briefing", undefined, true));
    },
    briefSet(data) {
      if (!data) { return; }
      this.brief = data;
      clearTimeout(this.briefTimer);
      if (data.status === "writing") { this.briefTimer = setTimeout(async () => this.briefSet(await this.call("/api/briefing", undefined, true)), 3000); }
    },
    async briefAgain() { this.briefSet(await this.call("/api/briefing/write", {})); },
    async briefHide() { this.briefOpen = false; this.briefSet(await this.call("/api/briefing/hide", {})); },

    briefWhen(iso) { return iso ? fmtDate(iso.slice(0, 10), this.lang) + (iso.length > 10 ? " " + iso.slice(11, 16) : "") : ""; },

    briefOffer(b) {
      const o = this.t.br.offer, r = this.state.releases.find((x) => x.version === b.version), s = r && b.step ? this.stepOf(r, b.step) : null;
      if (b.kind === "gate") { return fill(o.gate, (s && s.gate ? s.gate + " · " : "") + b.version); }
      if (b.kind === "regression") { return fill(o.regression, b.team + (b.column === "service_pack" ? " · SP" : "")); }
      if (b.kind === "cicd") { return fill(o.cicd, (s ? this.title(s) : b.step) + " · " + b.version); }
      return o.smoke;
    },

    async startCase(ask) {
      this.caseAsk = ask;
      this.caseDraft = -1;
      this.caseMarks = {};
      this.caseDone = {};
      this.caseCur = { status: "running", question: "", steps: [], result: null, dropped: [], second: null, error: "" };
      let response, data;
      try {
        response = await fetch("/api/case/start", { method: "POST", headers: { "Content-Type": "application/json", "X-Stellwerk": "1" }, body: JSON.stringify(ask) });
        data = await response.json();
      } catch (e) {
        this.offline = true;
        this.caseCur = null;
        return;
      }
      if (!this.caseCur) { return; }
      if (response.ok) { this.caseSet(data); } else { this.caseCur = Object.assign({}, this.caseCur, { status: "bad", error: data.error || String(response.status) }); }
    },
    caseSet(data) {
      if (!data || !this.caseCur) { return; }
      if (data.kind === "gate" && data.result && !(this.caseCur.result)) {
        this.caseMarks = Object.fromEntries(data.result.rows.filter((r) => r.mark).map((r) => [r.step, true]));
      }
      this.caseCur = data;
      clearTimeout(this.caseTimer);
      if (data.status === "running") {
        this.caseTimer = setTimeout(async () => this.caseSet(await this.call("/api/case?id=" + encodeURIComponent(data.id), undefined, true)), 1500);
      }
    },
    closeCase() { clearTimeout(this.caseTimer); this.caseCur = null; },

    async markCaseRows() {
      const c = this.caseCur, r = this.state.releases.find((x) => x.version === c.version);
      for (const row of r ? this.caseMarkPicked : []) {
        const s = this.stepOf(r, row.step);
        if (s && !isClosed(s)) { await this.post("/api/mark", { version: r.version, step: row.step, status: "done", note: ("✦ " + c.agent + ": " + row.found).slice(0, 300) }); }
        this.caseDone = Object.assign({}, this.caseDone, { [row.step]: true });
      }
    },
    copyText(text) {
      if (navigator.clipboard) { navigator.clipboard.writeText(text).then(() => this.flash(this.t.cs.copied, true), () => {}); }
    },
    askAbout(version) {
      this.toggleCmd(true);
      this.cmdText = fill(this.t.ix.stQuestion, version);
      this.$nextTick(() => { if (this.$refs.cmdInput) { this.$refs.cmdInput.focus(); } this.growInput(); });
    },

    async loadMonitoring(force) {
      try {
        const response = force
          ? await fetch("/api/monitoring/refresh", { method: "POST", headers: { "Content-Type": "application/json", "X-Stellwerk": "1" }, body: "{}" })
          : await fetch("/api/monitoring", { cache: "no-store" });
        const data = await response.json();
        if (response.ok) { this.mon = data; }
        clearTimeout(this.monTimer);
        if (data.pending && this.view === "monitoring") { this.monTimer = setTimeout(() => this.loadMonitoring(), 3000); }
      } catch (e) {
        this.offline = true;
      }
    },
    fmtMs,

    change(st, m) {
      const a = st.now && st.now[m], b = st.before && st.before[m];
      if (a === null || a === undefined || b === null || b === undefined) { return null; }
      return m === "apdex" ? a - b : b ? (a - b) / b * 100 : null;
    },
    deltaClass(st, m) {
      const c = this.change(st, m);
      if (c === null) { return "same"; }
      const worse = m === "apdex" ? c < -0.03 : c > 10, better = m === "apdex" ? c > 0.03 : c < -10;
      return worse ? "worse" : better ? "better" : "same";
    },
    deltaText(st, m) {
      const c = this.change(st, m);
      if (c === null) { return "—"; }
      const cls = this.deltaClass(st, m), arrow = cls === "worse" ? (m === "apdex" ? "▼ " : "▲ ") : cls === "better" ? (m === "apdex" ? "▲ " : "▼ ") : "≈ ";
      const word = cls === "same" ? "" : " · " + this.t[cls];
      const value = m === "apdex" ? (c >= 0 ? "+" : "−") + Math.abs(c).toFixed(2) : (c >= 0 ? "+" : "−") + Math.abs(Math.round(c)) + " %";
      return arrow + value + word;
    },
    newErrors(st) { return st.errors ? st.errors.rows.filter((r) => !r.known).length : 0; },

    txShort(name) {
      return name.replace(/^WebTransaction\/(SpringController|RestWebService|Servlet|Uri|Action|Custom|JAX-RS)\//, "")
        .replace(/^WebTransaction\//, "").replace(/^OtherTransaction\//, "other: ");
    },
    monLamp(st) {
      const apdex = st.now && st.now.apdex;
      if (apdex === null || apdex === undefined) { return st.problems.length ? "r" : this.newErrors(st) ? "y" : "off"; }
      if (apdex < st.apdex_bad) { return "r"; }
      return apdex < st.apdex_warn || this.newErrors(st) || st.problems.length ? "y" : "g";
    },
    fmtS(v) { return v === null || v === undefined ? "—" : fmtMs(v * 1000); },
    fmtPct(v) { return v === null || v === undefined ? "—" : v.toFixed(v < 10 ? 1 : 0) + " %"; },
    monFill(text, ...values) { return text.replace(/\{(\d)\}/g, (_, i) => String(values[+i])); },
    monDm(iso) { return iso.slice(8, 10) + "." + iso.slice(5, 7); },
    monDay(iso) { return new Date(iso + "T12:00:00").toLocaleDateString(this.lang === "ru" ? "ru" : "en", { weekday: "short" }) + " " + this.monDm(iso); },
    monWhen(iso) { return iso ? this.monDm(iso) + " " + iso.slice(11, 16) : "—"; },
    monTestText(x) { return this.monDay(x.date) + " " + x.from + "–" + x.to + (x.version ? " · " + x.version : ""); },

    monDelta(now, before, kind) {
      const points = kind === "apdex" || kind === "pct";
      if (now === null || now === undefined || before === null || before === undefined || (!points && !before)) { return { cls: "same", text: "—" }; }
      const c = points ? now - before : (now - before) / before * 100;
      const worse = kind === "apdex" ? c < -0.03 : kind === "pct" ? c > 0.3 : kind === "time" && c >= 20;
      const better = kind === "apdex" ? c > 0.03 : kind === "pct" ? c < -0.3 : kind === "time" && c <= -15;
      const cls = worse ? "worse" : better ? "better" : "same";
      const value = kind === "apdex" ? Math.abs(c).toFixed(2) : kind === "pct" ? Math.abs(c).toFixed(1) + " pp" : Math.abs(Math.round(c)) + " %";
      return { cls, text: (cls === "same" ? "≈ " : c > 0 ? "▲ " : "▼ ") + (c >= 0 ? "+" : "−") + value + (cls === "same" ? "" : " · " + this.t[cls]) };
    },
    monTileText(x) {
      const t = this.t, parts = [];
      if (x.state === "none") { return x.reporting === false ? t.mnNotReporting : t.mnNotFound; }
      if (x.apdex !== null && x.apdex !== undefined) { parts.push("Apdex " + x.apdex.toFixed(2)); }
      if (x.errors !== null && x.errors !== undefined) { parts.push(t.mnErr.toLowerCase() + " " + this.fmtPct(x.errors * 100)); }
      return parts.join(" · ") || (x.state === "nomon" ? t.mnNoPolicy : "");
    },
    monTileTitle(x) {
      return [x.name, x.severity, x.avg === null || x.avg === undefined ? "" : this.t.metric.avg + " " + this.fmtS(x.avg),
        x.rps === null || x.rps === undefined ? "" : Math.round(x.rps) + " rpm"].filter(Boolean).join(" · ");
    },
    monToggle(stage) {
      const i = this.monOpen.indexOf(stage);
      if (i >= 0) { this.monOpen.splice(i, 1); } else { this.monOpen.push(stage); }
    },

    async monPick(ref) {
      this.monCal = false;
      this.monInteErr = "";
      if (ref === "usual") { this.monInte = null; return; }
      const run = this.monInteView && this.monInteView.run;
      this.monInteBusy = true;
      try {
        const response = await fetch("/api/monitoring/inte?" + new URLSearchParams({ run: run ? run.date : "", ref }), { cache: "no-store" });
        const data = await response.json();
        if (response.ok) { this.monInte = data; } else { this.monInteErr = data.error || String(response.status); }
      } catch (e) {
        this.offline = true;
      }
      this.monInteBusy = false;
    },
    goMonitor(stage) {
      if (this.drawer) { this.closeDrawer(); }
      if (!["map", "perf", "inte", "errors"].includes(stage) && !this.monOpen.includes(stage)) { this.monOpen.push(stage); }
      this.view = "monitoring";
      this.loadMonitoring();
      this.$nextTick(() => setTimeout(() => {
        const el = document.getElementById("mon-" + stage);
        if (el && el.scrollIntoView) { el.scrollIntoView({ block: "start", behavior: "smooth" }); }
      }, 200));
    },
    editMonitoring() {
      this.setSysTab("files");
      this.$nextTick(() => this.selectFile("monitoring"));
    },

    async openAt(key, line) {
      if (!this.ed || this.ed.key !== key) { await this.selectFile(key); }
      if (!this.ed || this.ed.key !== key) { return; }
      this.edMode = "text";
      this.$nextTick(() => {
        const area = this.$refs.edArea;
        if (!area) { return; }
        const lines = this.edText.split("\n");
        let start = 0;
        for (let i = 0; i < line - 1 && i < lines.length; i += 1) { start += lines[i].length + 1; }
        area.focus();
        area.setSelectionRange(start, start + (lines[line - 1] || "").length);
        area.scrollTop = Math.max(0, (line - 4) * (parseFloat(getComputedStyle(area).lineHeight) || 19));
      });
    },
    searchSoon() { clearTimeout(this.qTimer); this.qTimer = setTimeout(() => this.runSearch(), 250); },
    async runSearch() {
      clearTimeout(this.qTimer);
      this.repPreview = null;
      const q = this.q;
      if (q.trim().length < 2) { this.sr = null; return; }
      try {
        const response = await fetch("/api/search?q=" + encodeURIComponent(q) + (this.qCase ? "&case=1" : ""), { cache: "no-store" });
        const data = await response.json();
        if (response.ok && q === this.q) { this.sr = data; }
      } catch (e) {
        this.offline = true;
      }
    },
    findInFiles(text) {
      this.setSysTab("files");
      this.q = text;
      this.runSearch();
      this.$nextTick(() => { const el = this.$refs.editor; if (el && el.scrollIntoView) { el.scrollIntoView({ block: "start", behavior: "smooth" }); } });
    },

    async filesCall(path, body) {
      try {
        return await this.fileCall(path, body);
      } catch (e) {
        this.offline = true;
        return null;
      }
    },
    blockedBy(preview) {
      if (!preview || !this.edDirty || !preview.files.some((f) => f.key === this.ed.key)) { return ""; }
      return fill(this.t.saveOpenFirst, this.fileLabel(this.fileOf(this.ed.key)));
    },
    afterSaveMany(data) {
      this.flash(fill(this.t.savedN, data.saved.join(", ")), true);
      if (this.sysTab === "history") { this.loadChanges(); }
      this.loadSystem();
      this.load();
    },
    async previewReplace() {
      this.repBusy = true;
      const r = await this.filesCall("/api/files/check", { mode: "replace", find: this.q, replace: this.repWith });
      this.repBusy = false;
      if (r && r.ok) { this.repPreview = r.data; } else if (r) { this.flash(r.data.error || String(r.status)); }
    },
    async saveReplace() {
      this.repBusy = true;
      const r = await this.filesCall("/api/files/save", { mode: "replace", find: this.q, replace: this.repWith, shas: this.repPreview.shas });
      this.repBusy = false;
      if (!r) { return; }
      if (r.ok) {
        this.repPreview = null;
        this.afterSaveMany(r.data);
        this.runSearch();
      } else {
        if (r.data.problems) { this.repPreview = Object.assign({}, this.repPreview, { problems: r.data.problems }); }
        this.flash(r.data.error || String(r.status));
      }
    },
    usage(s) {
      const t = this.t, parts = [];
      if (s.jobs && s.jobs.length) { parts.push(s.jobs.length + " " + t.jobsN); }
      if (s.issues && s.issues.length) { parts.push(s.issues.length + " " + t.issuesN); }
      if (s.steps && s.steps.length) { parts.push(s.steps.length + " " + t.stepsN); }
      return parts.join(" · ");
    },
    editService(s) { this.svcEdit = { key: s.key, value: s.value }; this.svcPreview = null; },
    cancelService() { this.svcEdit = null; this.svcPreview = null; },
    async previewService() {
      this.svcBusy = true;
      const r = await this.filesCall("/api/files/check", { mode: "service", service: this.svcEdit.key, value: this.svcEdit.value });
      this.svcBusy = false;
      if (r && r.ok) { this.svcPreview = r.data; } else if (r) { this.flash(r.data.error || String(r.status)); }
    },
    async saveService() {
      this.svcBusy = true;
      const r = await this.filesCall("/api/files/save", { mode: "service", service: this.svcEdit.key, value: this.svcEdit.value, shas: this.svcPreview.shas });
      this.svcBusy = false;
      if (!r) { return; }
      if (r.ok) {
        this.cancelService();
        this.afterSaveMany(r.data);
      } else {
        if (r.data.problems) { this.svcPreview = Object.assign({}, this.svcPreview, { problems: r.data.problems }); }
        this.flash(r.data.error || String(r.status));
      }
    },

    openStepOf(ref, event) {
      const r = this.rel && this.rel.playbook === ref.playbook ? this.rel : firstOpen(this.state.releases, (x) => x.playbook === ref.playbook);
      if (!r || !ref.step) { this.flash(this.t.noReleaseFor); return; }
      this.openStep(r.version, ref.step, event);
    },
    onVisible() { if (!document.hidden) { this.load(); } },
    onLeave(event) { if (this.edDirty) { event.preventDefault(); event.returnValue = this.t.leaveChanges; } },
    speechCtor() { return window.SpeechRecognition || window.webkitSpeechRecognition || null; },
    toggleCmd(open) {
      this.cmdOpen = typeof open === "boolean" ? open : !this.cmdOpen;
      if (!this.cmdOpen) { this.stopTalk(); this.stopMic(); clearTimeout(this.hintTimer); this.histOpen = false; return; }
      if (this.cmdFloat) { this.cmdPos = fitPos(this.cmdPos); }
      this.hasSpeech = !!this.speechCtor();
      this.loadHints();
      this.loadChats();
      if (this.chatId && !this.cmdLog.length) { this.openChat(this.chatId, true); }
      this.$nextTick(() => { this.watchSize(); if (this.$refs.cmdInput) { this.$refs.cmdInput.focus(); } });
    },
    growInput() {
      const el = this.$refs.cmdInput;
      if (!el) { return; }
      el.style.height = "auto";
      el.style.height = Math.min(el.scrollHeight, 168) + "px";
    },
    onEnter(event) {
      if (event.shiftKey || event.isComposing || event.keyCode === 229) { return; }
      event.preventDefault();
      this.sendCommand();
    },
    scrollLog() {
      this.$nextTick(() => { const el = this.$refs.cmdLog; if (el) { el.scrollTop = el.scrollHeight; } });
    },
    async sendCommand(preset, voice) {
      const text = (typeof preset === "string" ? preset : this.cmdText).trim();
      if (!text || this.cmdBusy) { return; }
      this.cmdText = "";
      this.$nextTick(() => this.growInput());
      this.cmdLog.push({ me: true, text });
      this.scrollLog();
      this.cmdBusy = true;
      this.cmdWait = 0;
      const started = Date.now();
      const timer = setInterval(() => {
        const first = this.cmdWait < 1;
        this.cmdWait = Math.floor((Date.now() - started) / 1000);
        if (first && this.cmdWait >= 1) { this.scrollLog(); }
      }, 250);
      const stop = new AbortController();
      this.cmdStop = stop;
      try {
        const response = await fetch("/api/command", { method: "POST", headers: { "Content-Type": "application/json", "X-Stellwerk": "1" },
          body: JSON.stringify({ text, chat: this.chatId || null, voice: voice === true }), signal: stop.signal });
        const data = await response.json();
        if (response.ok) {
          if (data.chat) { this.setChat(data.chat); this.loadChats(); }
          this.cmdLog.push({ me: false, by: data.by, text: data.reply, html: data.by === "agent" ? markdown(data.reply) : "", items: data.items || [], agentError: data.agent_error || "",
            proposals: (data.proposals || []).map((p) => Object.assign({ state: "", busy: false, done: "" }, p)) });
          if (data.open) { this.openStep(data.open.version, data.open.step, null); }
          if (data.agent_error) { this.load(); }
        } else {
          this.cmdLog.push({ me: false, text: data.error || String(response.status), items: [] });
        }
      } catch (e) {
        if (stop.signal.aborted) {
          this.cmdLog.push({ me: false, text: this.t.stopped, items: [] });
        } else {
          this.offline = true;
          this.cmdLog.push({ me: false, text: this.t.offline, items: [] });
        }
      } finally {
        clearInterval(timer);
        this.cmdStop = null;
        this.cmdBusy = false;
        this.cmdWait = 0;
        this.scrollLog();
        this.$nextTick(() => {
          const el = this.$refs.cmdInput, active = document.activeElement;
          if (el && !this.drawer && (!active || active === document.body || active === el)) { el.focus(); }
        });
      }
    },

    async resetAgent() {
      try {
        const response = await fetch("/api/agent/reset", { method: "POST", headers: { "Content-Type": "application/json", "X-Stellwerk": "1" },
          body: JSON.stringify({ chat: this.chatId || null }) });
        if (!response.ok) { this.flash((await response.json()).error || String(response.status)); }
      } catch (e) {
        this.offline = true;
      }
    },
    stopWaiting() {
      if (this.cmdStop) { this.cmdStop.abort(); }
      this.resetAgent();
    },

    newConversation() {
      this.cmdLog = []; this.cmdShow = CMD_SHOWN;
      this.setChat("");
      this.histOpen = false;
      this.$nextTick(() => { if (this.$refs.cmdInput) { this.$refs.cmdInput.focus(); } });
    },
    setChat(id) { this.chatId = id; store("cmdChat", id); },
    async loadChats() {
      const data = await this.call("/api/chats", undefined, true);
      if (data) { this.chats = data.items; this.chatsTotal = data.total || data.items.length; }
    },
    findChats() {
      clearTimeout(this.chatTimer);
      const q = this.histQ.trim();
      if (!q) { this.chatFound = null; return; }
      this.chatTimer = setTimeout(async () => {
        const data = await this.call("/api/chats?q=" + encodeURIComponent(q), undefined, true);
        if (data && this.histQ.trim() === q) { this.chatFound = data.items; }
      }, 250);
    },

    async openChat(id, quiet) {
      if (this.cmdBusy) { return; }
      let data = null;
      try {
        const response = await fetch("/api/chats?id=" + encodeURIComponent(id), { cache: "no-store" });
        data = await response.json();
        if (!response.ok) { if (!quiet) { this.flash(this.t.chatGone); } this.setChat(""); this.loadChats(); return; }
      } catch (e) {
        this.offline = true;
        return;
      }
      this.cmdShow = CMD_SHOWN;
      this.cmdLog = data.messages.map((m) => m.me ? { me: true, text: m.text } : {
        me: false, by: m.by, text: m.text, html: m.by === "agent" ? markdown(m.text) : "", items: m.items || [], agentError: m.agentError || "",
        proposals: (m.proposals || []).map((p) => Object.assign({ busy: false, done: "" }, p, { state: p.state || "" })) });
      this.setChat(id);
      this.histOpen = false;
      this.scrollLog();
    },
    async deleteChat(c) {
      if (!window.confirm(fill(this.t.chatDeleteAsk, c.title))) { return; }
      const data = await this.call("/api/chats/delete", { id: c.id });
      if (!data) { return; }
      this.chats = data.items;
      if (c.id === this.chatId) { this.newConversation(); this.histOpen = true; }
    },
    toggleHist() {
      this.histOpen = !this.histOpen;
      this.histQ = "";
      if (this.histOpen) {
        this.loadChats();
        this.$nextTick(() => { if (this.$refs.histFind) { this.$refs.histFind.focus(); } });
      }
    },
    chatWhen(iso) {
      if (!iso) { return ""; }
      return iso.slice(0, 10) === (this.state && this.state.today) ? iso.slice(11, 16) : iso.slice(8, 10) + "." + iso.slice(5, 7) + " " + iso.slice(11, 16);
    },
    stopMic() { if (this.recognition) { this.recognition.stop(); } },

    toggleTalk() { if (this.talkOn) { this.stopTalk(); } else { this.startTalk(); } },
    startTalk() {
      if (!this.voiceReady || !this.canSpeak) { return; }
      this.stopMic();
      this.talkOn = true;
      this.talkMisses = 0;
      this.talkNote = "";
      this.talkGen = (this.talkGen || 0) + 1;
      try { window.speechSynthesis.cancel(); window.speechSynthesis.getVoices(); } catch (e) {   }
      this.talkListen();
    },
    stopTalk() {
      if (!this.talkOn) { return; }
      this.talkOn = false;
      this.talkState = "";
      this.talkGen = (this.talkGen || 0) + 1;
      try { window.speechSynthesis.cancel(); } catch (e) {   }
      if (this.talkRec) { try { this.talkRec.abort(); } catch (e) {   } this.talkRec = null; }
      this.listening = false;
    },

    setVoiceLang(lang) {
      if (!SPEECH[lang] || lang === this.spokenLang) { return; }
      this.voicePick = this.state && lang === this.state.voice_language ? "" : lang;
      store("voiceLang", this.voicePick);
      this.talkNote = "";
      if (this.listening && !this.talkOn) { this.stopMic(); }
      if (this.talkOn && (this.talkState === "listen" || this.talkState === "pause")) { this.talkNow(); }
    },

    talkNow() {
      this.talkGen += 1;
      if (this.talkRec) { try { this.talkRec.abort(); } catch (e) {   } this.talkRec = null; }
      try { window.speechSynthesis.cancel(); } catch (e) {   }
      this.talkMisses = 0;
      this.talkListen();
    },
    talkListen() {
      const Speech = this.speechCtor();
      if (!this.talkOn || !Speech || this.cmdBusy) { return; }
      const gen = this.talkGen, rec = new Speech();
      let text = "", failed = "";
      rec.lang = SPEECH[this.spokenLang];
      rec.interimResults = true;
      rec.onresult = (event) => {
        text = "";
        for (let i = 0; i < event.results.length; i += 1) { text += event.results[i][0].transcript; }
        this.cmdText = text;
      };
      rec.onerror = (event) => { failed = event.error; };
      rec.onend = () => {
        if (this.talkRec === rec) { this.talkRec = null; }
        if (!this.talkOn || gen !== this.talkGen) { return; }
        this.listening = false;
        if (text.trim()) { this.talkMisses = 0; this.talkAsk(text.trim()); return; }
        if (["not-allowed", "service-not-allowed", "audio-capture"].includes(failed)) {
          this.voiceError = this.t.voiceErr[failed] || this.t.voiceErr.other + " (" + failed + ")";
          this.stopTalk();
          return;
        }
        this.talkMisses += 1;
        if (this.talkMisses >= 2) { this.talkState = "pause"; return; }
        this.talkListen();
      };
      this.talkRec = rec;
      this.talkState = "listen";
      this.listening = true;
      this.voiceError = "";
      try { rec.start(); } catch (e) { this.talkRec = null; this.listening = false; this.talkState = "pause"; }
    },
    async talkAsk(text) {
      this.talkState = "think";
      const before = this.cmdLog.length;
      await this.sendCommand(text, true);
      if (!this.talkOn) { return; }
      if (this.cmdLog.length === before) { this.talkState = "pause"; return; }
      const answer = this.cmdLog.slice(before).filter((m) => !m.me).pop();
      if (answer) { await this.talkSpeak(answer.text); } else { this.talkListen(); }
    },
    async talkSpeak(text) {
      const synth = window.speechSynthesis, lang = this.spokenLang, gen = this.talkGen;
      if (!synth.getVoices().length) {
        await new Promise((done) => {
          const late = setTimeout(done, 1500);
          synth.addEventListener("voiceschanged", () => { clearTimeout(late); done(); }, { once: true });
        });
      }
      if (!this.talkOn || gen !== this.talkGen) { return; }
      const voice = talkVoice(synth.getVoices(), lang), parts = sentences(speakable(text, TALK_MORE[lang] || TALK_MORE.en));
      if (!voice || !parts.length) {
        this.talkNote = voice ? "" : fill(this.t.talkNoVoice, lang.toUpperCase());
        this.talkListen();
        return;
      }
      this.talkNote = "";
      this.talkState = "speak";
      parts.forEach((part, i) => {
        const u = new SpeechSynthesisUtterance(part);
        u.voice = voice;
        u.lang = voice.lang;
        if (i === parts.length - 1) { u.onend = () => { if (this.talkOn && gen === this.talkGen) { this.talkListen(); } }; }
        u.onerror = (event) => {
          if (!this.talkOn || gen !== this.talkGen || event.error === "interrupted" || event.error === "canceled") { return; }
          this.talkGen += 1;
          synth.cancel();
          this.talkListen();
        };
        synth.speak(u);
      });
    },
    toggleMic() {
      if (this.listening) { this.stopMic(); return; }
      const Speech = this.speechCtor();
      if (!Speech) { return; }
      const rec = new Speech();
      let heard = false;
      rec.lang = SPEECH[this.spokenLang];
      rec.interimResults = true;
      rec.onresult = (event) => {
        let text = "";
        for (let i = 0; i < event.results.length; i += 1) { text += event.results[i][0].transcript; }
        this.cmdText = text;
        heard = event.results[event.results.length - 1].isFinal;
      };
      rec.onerror = (event) => { this.voiceError = this.t.voiceErr[event.error] || this.t.voiceErr.other + " (" + event.error + ")"; };
      rec.onend = () => {
        this.listening = false;
        this.recognition = null;
        if (heard && this.cmdText.trim()) { this.sendCommand(); }
      };
      this.voiceError = "";
      this.recognition = rec;
      this.listening = true;
      try { rec.start(); } catch (e) { this.listening = false; this.recognition = null; }
    },

    trapTab(event) {
      const box = document.querySelector(this.comp ? ".compose" : this.drawer ? ".drawer" : null);
      if (!box) { return false; }
      const items = [...box.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), select, summary, [tabindex="0"]')]
        .filter((el) => (el.checkVisibility ? el.checkVisibility() : el.offsetParent !== null) && !el.closest("details:not([open]) > :not(summary)"));
      if (!items.length) { return false; }
      const first = items[0], last = items[items.length - 1], at = document.activeElement;
      if (!box.contains(at) || (event.shiftKey && at === first) || (!event.shiftKey && at === last)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
        return true;
      }
      return false;
    },
    onKey(event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k" && this.comp) {
        event.preventDefault();
        this.closeComp();
        if (this.comp) { return; }
      }
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (this.drawer) { this.closeDrawer(); }
        if (!this.cmdOpen) {
          if (!this.cmdWide) { this.toggleWide(); }
          this.toggleCmd(true);
        } else { this.toggleWide(); }
        return;
      }
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (this.drawer) {
          this.closeDrawer();
          if (this.cmdOpen) { this.$nextTick(() => { if (this.$refs.cmdInput) { this.$refs.cmdInput.focus(); } }); return; }
        }
        this.toggleCmd();
        return;
      }
      if (event.key === "Tab" && this.trapTab(event)) { return; }
      if (event.key === "Escape" && this.palOpen) { this.palOpen = false; return; }
      if (event.key === "Escape" && this.moreOpen) { this.moreOpen = false; return; }
      if (event.key === "Escape" && this.helpOpen) { this.helpOpen = ""; return; }
      if (event.key === "Escape" && this.comp) { this.closeComp(); return; }
      if (event.key === "Escape" && !this.drawer && this.cmdOpen && this.talkOn) { this.stopTalk(); return; }
      if (event.key === "Escape" && !this.drawer && this.cmdOpen && this.histOpen) { this.histOpen = false; return; }
      if (event.key === "Escape" && !this.drawer && this.cmdOpen) { this.toggleCmd(false); return; }
      if (event.key === "Escape" && this.drawer) { this.closeDrawer(); return; }
      const tag = document.activeElement ? document.activeElement.tagName : "";
      const typing = tag === "TEXTAREA" || tag === "SELECT" || (tag === "INPUT" && document.activeElement.type !== "checkbox");
      const inCmd = !!(document.activeElement && document.activeElement.closest && document.activeElement.closest(".cmd"));
      if (this.view !== "inbox" || this.drawer || this.comp || inCmd || typing || event.ctrlKey || event.metaKey || event.altKey) { return; }
      const k = event.key.toLowerCase(), cur = this.inboxCur;
      if (k === "x" && cur) { event.preventDefault(); this.togglePick(cur.key); return; }
      if ((k === "d" || k === "s") && cur) {
        const card = this.$refs.inboxCard;
        event.preventDefault();
        if (card && !card.marked && !this.busy) { card.start(k === "d" ? "done" : "skipped"); }
        return;
      }
      if (k !== "j" && k !== "k") { return; }
      const list = this.queueAll, i = list.indexOf(cur);
      const next = list[Math.max(0, Math.min(list.length - 1, i + (k === "j" ? 1 : -1)))];
      if (next) {
        this.inboxKey = next.key;
        this.$nextTick(() => { const el = document.querySelector('.qrow[aria-current="true"]'); if (el) { el.scrollIntoView({ block: "nearest" }); } });
      }
    },
  },
  mounted() {
    this.hasSpeech = !!this.speechCtor();
    this.load();

    this.poll = setInterval(() => { if (!document.hidden) { this.load(); } }, 20000);
    document.addEventListener("visibilitychange", this.onVisible);
    this.tick = setInterval(() => { this.nowMs = Date.now(); }, 1000);
    window.addEventListener("keydown", this.onKey);
    this.$nextTick(this.watchHead);
    this.phoneMq = window.matchMedia("(max-width: 699px)");
    this.phone = this.phoneMq.matches;
    this.phoneMq.addEventListener("change", (e) => { this.phone = e.matches; });
    window.addEventListener("resize", this.refit);
    document.addEventListener("click", this.closeMenus);
    window.addEventListener("beforeunload", this.onLeave);
    if (DARK && DARK.addEventListener) { DARK.addEventListener("change", () => applyPalette(this.palette)); }
    if (this.view === "system") { this.loadSystem(); if (this.sysTab === "history") { this.loadChanges(); } }
  },
  beforeUnmount() {
    clearInterval(this.poll);
    document.removeEventListener("visibilitychange", this.onVisible);
    clearInterval(this.tick);
    clearTimeout(this.recheck);
    if (this.headObs) { this.headObs.disconnect(); }
    clearTimeout(this.hintTimer);
    window.removeEventListener("keydown", this.onKey);
    document.removeEventListener("click", this.closeMenus);
    window.removeEventListener("beforeunload", this.onLeave);
  },
  template: APP_TEMPLATE,
})).mount("#app");
