

import { isClosed, firstOpen, fmtDate, mondayOf, addDays, useRender } from "./util.js";

const DAYS = ["mon", "tue", "wed", "thu", "fri"];
const WALK_MS = 3500;

const PT = {
  en: {
    title: "Release process", temp: "temporary view", release: "Release",
    intro: "The track shows where a release travels: the stations are the stages it is deployed to, the signals are the gates. "
      + "Below, every step of the playbook on its day. Pick a step, or walk through the process with ▶ or the arrow keys.",
    major: "major", sp: "service pack", start: { major: "DEV", service_pack: "Branch" },
    startNote: { major: "maindev runs on DEV", service_pack: "built on its branch, not on any stage yet" },
    prev: "Previous step", next: "Next step", play: "Walk through", pause: "Pause", stepOf: "Step {0} of {1}",
    now: "now", nowT: "Where the release stands now", week: "Week", weekNote: { 1: "freeze week" },
    noDay: "no day", phases: "Phases", legend: "On a step:",
    ic: { gate: "a gate", station: "moves the release to a stage", job: "starts a Jenkins job", mail: "a mail Stellwerk drafts",
      jira: "Jira tasks Stellwerk creates", done: "done", late: "overdue" },
    what: "What happens", how: "How it counts as done", effect: "What it changes", open: "Open this step in the Cockpit",
    owner: "Owner", when: "When", planned: "moved: the playbook day is {0}", noDate: "no day in the playbook",
    job: "Jenkins job", params: "parameters", only: "only if", optional: "optional step", ask: "open question",
    moves: "The release moves to {0} (it stood on {1}).", movesFirst: "The release comes onto {0}.",
    gate: "Gate {0}: a milestone the release passes here.", signoff: "Go / No-Go of {0} before it closes.",
    monitor: "The monitoring of {0} is looked at (New Relic, Splunk).", check: "After the deploy Stellwerk tests the CheckServlet of {0}.",
    deploys: "Deploys to {0}.",
    confirm: { manual: "ticked by hand in the checklist", jenkins: "the Jenkins job ran; Stellwerk can start it (dry-run first) and follows the build",
      jira: "the Jira tasks are there; Stellwerk can create them (dry-run first)", reportportal: "the regression in ReportPortal is green",
      confluence: "the page in Confluence is published", checkservlet: "the CheckServlet of the stage reports the version" },
    mail: { rfd: "Stellwerk drafts the RFD mail", freeze: "Stellwerk drafts the code-freeze mail", gonogo: "Stellwerk drafts the Go / No-Go mail" },
    jira: { delivery: "Stellwerk creates the delivery test tasks in Jira", deploys: "Stellwerk creates the deploy tasks in Jira" },
    relnotes: "Stellwerk writes the release notes page in Confluence", meeting: "Stellwerk opens the blocker of the PROD night in Outlook",
    status: { done: "done", skipped: "skipped", overdue: "overdue", today: "due today", open: "open" },
    empty: "No release in flight: add one to releases.yaml to see its process.",
  },
  ru: {
    title: "Релизный процесс", temp: "временная вкладка", release: "Релиз",
    intro: "Путь показывает, куда едет релиз: станции — стенды, на которые он деплоится, сигналы — гейты. Ниже — каждый шаг "
      + "плейбука в свой день. Выбери шаг или пройди процесс кнопкой ▶ или стрелками.",
    major: "мажор", sp: "сервис-пак", start: { major: "DEV", service_pack: "Ветка" },
    startNote: { major: "maindev стоит на DEV", service_pack: "собирается на своей ветке, ещё ни на одном стенде" },
    prev: "Предыдущий шаг", next: "Следующий шаг", play: "Пройти по шагам", pause: "Пауза", stepOf: "Шаг {0} из {1}",
    now: "сейчас", nowT: "Где релиз стоит сейчас", week: "Неделя", weekNote: { 1: "неделя фриза" },
    noDay: "без дня", phases: "Фазы", legend: "У шага:",
    ic: { gate: "гейт", station: "переводит релиз на стенд", job: "запускает джоб Jenkins", mail: "письмо, которое готовит Stellwerk",
      jira: "задачи Jira от Stellwerk", done: "сделан", late: "просрочен" },
    what: "Что происходит", how: "Когда считается сделанным", effect: "Что меняет", open: "Открыть шаг в Кабине",
    owner: "Кто", when: "Когда", planned: "перенесён: по плейбуку {0}", noDate: "в плейбуке без дня",
    job: "Джоб Jenkins", params: "параметры", only: "только если", optional: "необязательный шаг", ask: "открытый вопрос",
    moves: "Релиз переходит на {0} (стоял на {1}).", movesFirst: "Релиз выходит на {0}.",
    gate: "Гейт {0}: веха, которую релиз проходит здесь.", signoff: "Go / No-Go от {0} до закрытия.",
    monitor: "Смотрим мониторинг {0} (New Relic, Splunk).", check: "После деплоя Stellwerk проверяет CheckServlet {0}.",
    deploys: "Деплой на {0}.",
    confirm: { manual: "отмечается вручную в чек-листе", jenkins: "джоб Jenkins отработал; Stellwerk может его запустить (сначала пробный прогон) и следит за сборкой",
      jira: "задачи в Jira заведены; Stellwerk может их создать (сначала пробный прогон)", reportportal: "регрессия в ReportPortal зелёная",
      confluence: "страница в Confluence опубликована", checkservlet: "CheckServlet стенда показывает версию" },
    mail: { rfd: "Stellwerk готовит письмо RFD", freeze: "Stellwerk готовит письмо о код-фризе", gonogo: "Stellwerk готовит письмо Go / No-Go" },
    jira: { delivery: "Stellwerk создаёт в Jira задачи на тесты delivery", deploys: "Stellwerk создаёт в Jira задачи на деплои" },
    relnotes: "Stellwerk пишет страницу релизнот в Confluence", meeting: "Stellwerk открывает в Outlook блокер ночи PROD",
    status: { done: "сделан", skipped: "пропущен", overdue: "просрочен", today: "на сегодня", open: "открыт" },
    empty: "Релизов в работе нет: добавь релиз в releases.yaml, чтобы увидеть его процесс.",
  },
};
const DAY_NAMES = { en: { mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri" }, ru: { mon: "пн", tue: "вт", wed: "ср", thu: "чт", fri: "пт" } };

function put(line, a, b) { return line.replace("{0}", () => String(a)).replace("{1}", () => String(b)); }

export const ProcessView = {
  name: "ProcessView",
  props: ["state", "lang", "sel"],
  emits: ["open-step"],
  data() { return { pick: "", at: 0, playing: false, timer: null }; },
  computed: {
    tx() { return PT[this.lang] || PT.en; },
    releases() { return this.state ? this.state.releases : []; },
    rel() { return this.releases.find((r) => r.version === this.pick) || this.releases.find((r) => r.version === this.sel) || firstOpen(this.releases); },
    steps() { return this.rel ? this.rel.steps : []; },
    cur() { return this.steps[this.at] || null; },
    phaseIndex() { const out = {}; (this.rel ? this.rel.phases : []).forEach((p, i) => { out[p.id] = i; }); return out; },
    dated() { return this.steps.some((s) => s.when && s.when.week); },

    columns() {
      if (!this.rel) { return []; }
      const steps = this.steps.map((s, i) => ({ s, i }));
      if (!this.dated) {
        return this.rel.phases.map((p) => ({ key: p.id, head: this.title(p), sub: "", steps: steps.filter((x) => x.s.phase === p.id) }))
          .filter((c) => c.steps.length);
      }
      const weeks = Math.max(...this.steps.map((s) => (s.when && s.when.week) || 1));
      const monday = this.rel.freeze ? mondayOf(this.rel.freeze) : "";
      const out = [];
      for (let w = 1; w <= weeks; w++) {
        DAYS.forEach((d, n) => {
          const iso = monday ? addDays(monday, (w - 1) * 7 + n) : "";
          out.push({ key: w + d, week: w, first: n === 0, head: DAY_NAMES[this.lang === "ru" ? "ru" : "en"][d], sub: iso ? iso.slice(8, 10) + "." + iso.slice(5, 7) : "",
            today: iso && iso === this.state.today, steps: steps.filter((x) => x.s.when && x.s.when.week === w && x.s.when.day === d) });
        });
      }
      const loose = steps.filter((x) => !(x.s.when && x.s.when.week));
      if (loose.length) { out.push({ key: "loose", head: this.tx.noDay, sub: "", steps: loose }); }
      return out;
    },
    weeks() {
      const out = [];
      this.columns.forEach((c) => { if (c.week && c.first) { out.push({ week: c.week, span: 5 }); } });
      return out;
    },

    colTemplate() { return this.columns.map((c) => (c.steps.length ? "minmax(128px, 1fr)" : "46px")).join(" "); },

    track() {
      if (!this.rel) { return []; }
      const pb = this.rel.playbook === "service_pack" ? "service_pack" : "major";
      const out = [{ kind: "start", label: this.tx.start[pb], note: this.tx.startNote[pb], index: -1 }];
      this.steps.forEach((s, i) => {
        if (s.gate) { out.push({ kind: "gate", label: s.gate, index: i, step: s }); }
        if (s.reaches) { out.push({ kind: "station", label: s.reaches, index: i, step: s }); }
      });
      return out;
    },
    passed() { let k = 0; this.track.forEach((m, n) => { if (m.index <= this.at) { k = n; } }); return k; },
    trainLeft() { return ((this.passed + 0.5) / Math.max(1, this.track.length)) * 100 + "%"; },

    nowStation() {
      let at = 0;
      this.track.forEach((m, n) => { if (m.kind === "station" && m.step && m.step.status === "done") { at = n; } });
      return at;
    },
    startIndex() { const i = this.steps.findIndex((s) => !isClosed(s)); return i < 0 ? 0 : i; },
  },
  watch: {
    rel(v, old) { if (!old || !v || v.version !== old.version) { this.stop(); this.at = this.startIndex; } },
    at() { this.$nextTick(() => this.reveal()); },
  },
  mounted() {
    this.at = this.startIndex;
    this.onKey = (e) => {
      const tag = (e.target && e.target.tagName) || "";
      if (e.altKey || e.ctrlKey || e.metaKey || ["INPUT", "TEXTAREA", "SELECT"].includes(tag) || (e.target && e.target.isContentEditable)) { return; }
      if (e.key === "ArrowRight") { e.preventDefault(); this.go(1); } else if (e.key === "ArrowLeft") { e.preventDefault(); this.go(-1); }
    };
    window.addEventListener("keydown", this.onKey);
    this.$nextTick(() => this.reveal());
  },
  beforeUnmount() { this.stop(); window.removeEventListener("keydown", this.onKey); },
  methods: {
    title(x) { return (x && (x[this.lang] || x.en)) || ""; },
    choose(i) { this.at = Math.max(0, Math.min(this.steps.length - 1, i)); },
    go(n) { this.choose(this.at + n); if (this.playing && n !== 0 && this.at >= this.steps.length - 1) { this.stop(); } },
    toggle() { if (this.playing) { this.stop(); return; } if (this.at >= this.steps.length - 1) { this.at = 0; } this.playing = true; this.tick(); },
    tick() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => { if (!this.playing) { return; } this.go(1); if (this.playing) { this.tick(); } }, WALK_MS);
    },
    stop() { this.playing = false; clearTimeout(this.timer); },
    reveal() {
      const el = this.$el && this.$el.querySelector && this.$el.querySelector(".pv-chip.cur");
      if (!el) { return; }
      const calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const rail = this.$el.querySelector(".pv-track-scroll"), track = this.$el.querySelector(".pv-track");
      if (rail && track && track.offsetWidth > rail.clientWidth) {
        const x = ((this.passed + 0.5) / Math.max(1, this.track.length)) * track.offsetWidth;
        rail.scrollTo({ left: Math.max(0, x - rail.clientWidth / 2), behavior: calm ? "auto" : "smooth" });
      }
      const box = el.closest(".pv-board-scroll");
      if (box) {
        const left = el.offsetLeft - box.clientWidth / 2 + el.offsetWidth / 2;
        box.scrollTo({ left: Math.max(0, left), behavior: calm ? "auto" : "smooth" });
      }
    },
    phaseClass(s) { return "ph-" + ((this.phaseIndex[s.phase] || 0) % 6); },
    job(s) { return (s.actions || []).some((a) => a.job); },
    stationBefore(i) { let at = ""; this.track.forEach((m) => { if (m.index < i && m.kind !== "gate") { at = m.label; } }); return at; },
    whenText(s) {
      const tx = this.tx, w = s.when || {};
      const parts = w.week ? [tx.week + " " + w.week, DAY_NAMES[this.lang === "ru" ? "ru" : "en"][w.day] || w.day] : [];
      if (w.time) { parts.push(w.time); }
      if (s.due) { parts.push(fmtDate(s.due, this.lang)); } else if (!w.week) { parts.push(tx.noDate); }
      return parts.join(" · ");
    },
    effects(s, i) {
      const tx = this.tx, out = [];
      if (s.reaches) { const from = this.stationBefore(i); out.push(from ? put(tx.moves, s.reaches, from) : put(tx.movesFirst, s.reaches)); }
      if (s.deploys && s.deploys.length) { out.push(put(tx.deploys, s.deploys.join(", "))); }
      if (s.gate) { out.push(put(tx.gate, s.gate)); }
      if (s.signoff && s.signoff.roles && s.signoff.roles.length) { out.push(put(tx.signoff, s.signoff.roles.join(", "))); }
      if (s.monitor) { out.push(put(tx.monitor, s.monitor)); }
      if (s.check) { out.push(put(tx.check, s.check)); }
      if (s.mail && tx.mail[s.mail]) { out.push(tx.mail[s.mail]); }
      if (s.jira && tx.jira[s.jira]) { out.push(tx.jira[s.jira]); }
      if (s.relnotes) { out.push(tx.relnotes); }
      if (s.meeting) { out.push(tx.meeting); }
      return out;
    },
    params(a) { return Object.entries(a.params || {}).map(([k, v]) => k + "=" + v); },
    open() { if (this.cur) { this.$emit("open-step", { version: this.rel.version, step: this.cur.id }); } },
    put,
  },
  template: `
  <div class="pv">
    <section class="w pv-head">
      <div class="wh"><h2>{{ tx.title }}</h2>
        <div class="pv-rels" role="group" :aria-label="tx.release">
          <button v-for="r in releases" :key="r.version" type="button" class="btn xs" :aria-pressed="rel && rel.version === r.version ? 'true' : 'false'"
            @click="pick = r.version"><span class="mono">{{ r.version }}</span><span class="dim">{{ r.playbook === 'service_pack' ? tx.sp : tx.major }}</span></button>
        </div></div>
      <p class="dim small pv-intro">{{ tx.intro }}</p>
    </section>

    <p v-if="!rel" class="empty">{{ tx.empty }}</p>
    <template v-else>
    <section class="pv-desk" :aria-label="tx.title">
      <div class="pv-track-scroll"><div class="pv-track" :style="{ gridTemplateColumns: 'repeat(' + track.length + ', minmax(52px, 1fr))' }">
        <div class="pv-rail" aria-hidden="true"><i :style="{ width: trainLeft }"></i></div>
        <button v-for="(m, n) in track" :key="m.kind + m.label + m.index" type="button" class="pv-node" :class="['k-' + m.kind, { passed: n <= passed, here: n === passed }]"
          :title="m.step ? title(m.step) : m.note" @click="m.step ? choose(m.index) : choose(0)">
          <span v-if="m.kind === 'gate'" class="pv-sig" aria-hidden="true"><i></i></span>
          <span v-else class="pv-stn" aria-hidden="true"></span>
          <span class="pv-lab mono">{{ m.label }}</span>
          <span v-if="n === nowStation && m.kind !== 'gate'" class="pv-now" :title="tx.nowT">{{ tx.now }}</span>
        </button>
        <div class="pv-train" :style="{ left: trainLeft }" aria-hidden="true"><span class="mono">{{ rel.version }}</span></div>
      </div></div>
      <div class="pv-ctl">
        <button type="button" class="pv-b" :aria-label="tx.prev" :disabled="at === 0" @click="go(-1)">◀</button>
        <button type="button" class="pv-b pv-play" :aria-pressed="playing ? 'true' : 'false'" @click="toggle">{{ playing ? '❚❚ ' + tx.pause : '▶ ' + tx.play }}</button>
        <button type="button" class="pv-b" :aria-label="tx.next" :disabled="at >= steps.length - 1" @click="go(1)">▶</button>
        <span class="pv-pos">{{ put(tx.stepOf, at + 1, steps.length) }}<span v-if="cur"> · {{ whenText(cur) }}</span></span>
        <span class="pv-bar" aria-hidden="true"><i :style="{ width: ((at + 1) / Math.max(1, steps.length) * 100) + '%' }"></i></span>
      </div>
    </section>

    <div class="pv-main">
      <section class="w pv-board">
        <div class="pv-legend small dim">
          <span class="pv-phases"><b>{{ tx.phases }}:</b>
            <button v-for="(p, n) in rel.phases" :key="p.id" type="button" class="pv-ph" :class="'ph-' + (n % 6)"
              @click="choose(steps.findIndex((s) => s.phase === p.id))">{{ title(p) }}</button></span>
          <span><b>{{ tx.legend }}</b> ◆ {{ tx.ic.gate }} · ➜ {{ tx.ic.station }} · ⚙ {{ tx.ic.job }} · ✉ {{ tx.ic.mail }} · J {{ tx.ic.jira }}</span>
        </div>
        <div class="pv-board-scroll">
          <div class="pv-grid" :style="{ gridTemplateColumns: colTemplate }">
            <template v-if="dated">
              <div v-for="w in weeks" :key="'w' + w.week" class="pv-week" :style="{ gridColumn: 'span ' + w.span }">{{ tx.week }} {{ w.week }}<span v-if="tx.weekNote[w.week]" class="dim"> · {{ tx.weekNote[w.week] }}</span></div>
              <div v-if="columns.length % 5" class="pv-week"></div>
            </template>
            <div v-for="c in columns" :key="'c' + c.key" class="pv-col" :class="{ today: c.today, first: c.first, empty: !c.steps.length }">
              <div class="pv-day"><b>{{ c.head }}</b><span class="dim mono">{{ c.sub }}</span><span v-if="c.week" class="pv-wk dim">· {{ tx.week }} {{ c.week }}</span></div>
              <button v-for="x in c.steps" :key="x.s.id" type="button" class="pv-chip" :class="[phaseClass(x.s), 'pvs-' + x.s.status, { cur: x.i === at, past: x.i < at }]"
                :title="title(x.s)" :aria-current="x.i === at ? 'step' : null" @click="stop(); choose(x.i)">
                <span class="pv-n mono">{{ x.i + 1 }}</span><span class="pv-t">{{ title(x.s) }}</span>
                <span class="pv-ic"><span v-if="x.s.gate" class="g">◆{{ x.s.gate }}</span><span v-if="x.s.reaches" class="r">➜{{ x.s.reaches }}</span><span v-if="job(x.s)">⚙</span><span v-if="x.s.mail">✉</span><span v-if="x.s.jira">J</span><span v-if="x.s.status === 'done'" class="ok">✓</span><span v-else-if="x.s.status === 'overdue'" class="late">!</span></span>
                <span class="own" :class="'o-' + x.s.owner">{{ x.s.owner }}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <aside v-if="cur" class="w pv-side" aria-live="polite">
        <div class="pv-side-h"><span class="pv-n mono">{{ at + 1 }}</span><span class="pv-ph" :class="phaseClass(cur)">{{ title(rel.phases.find((p) => p.id === cur.phase)) }}</span>
          <span class="own" :class="'o-' + cur.owner">{{ cur.owner }}</span><span class="pill">{{ tx.status[cur.status] || cur.status }}</span></div>
        <h3 class="pv-h">{{ title(cur) }}</h3>
        <p class="dim small pv-when">{{ whenText(cur) }}<span v-if="cur.planned"> · {{ put(tx.planned, cur.planned.slice(8, 10) + '.' + cur.planned.slice(5, 7)) }}</span></p>
        <p v-if="cur.optional || cur.only_if" class="small pv-cond">{{ [cur.optional ? tx.optional : '', cur.only_if ? tx.only + ': ' + cur.only_if : ''].filter(Boolean).join(' · ') }}</p>
        <div v-if="(cur.notes && cur.notes.length) || (cur.actions && cur.actions.length)" class="pv-part">
          <h4>{{ tx.what }}</h4>
          <ul class="pv-list">
            <li v-for="(n, k) in cur.notes || []" :key="'n' + k">{{ n }}</li>
            <li v-for="(a, k) in cur.actions || []" :key="'a' + k">
              <template v-if="a.job"><b>⚙ {{ tx.job }}</b> <span class="mono">{{ a.job }}</span>
                <span v-if="params(a).length" class="pv-params"><span v-for="p in params(a)" :key="p" class="mono">{{ p }}</span></span></template>
              <template v-else>{{ a.do }}</template>
              <span v-if="a.note" class="dim"> · {{ a.note }}</span><span v-if="a.only_if" class="dim"> · {{ tx.only }}: {{ a.only_if }}</span>
            </li>
          </ul>
        </div>
        <div v-if="effects(cur, at).length" class="pv-part">
          <h4>{{ tx.effect }}</h4>
          <ul class="pv-list fx"><li v-for="(e, k) in effects(cur, at)" :key="k">{{ e }}</li></ul>
        </div>
        <div class="pv-part">
          <h4>{{ tx.how }}</h4>
          <p class="small">{{ tx.confirm[cur.confirm] || cur.confirm }}</p>
        </div>
        <p v-if="cur.ask" class="small pv-ask"><b>{{ tx.ask }}:</b> {{ cur.ask }}</p>
        <button type="button" class="btn" @click="open">{{ tx.open }}</button>
      </aside>
    </div>
    </template>
  </div>`,
};
useRender(ProcessView.name, ProcessView);
