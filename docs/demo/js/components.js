

import { T, HELP } from "./texts.js";
import { two, day, fmtDate, isClosed, csStages, FINAL_RUN, RUN_RANK, queueNo, text, fill, fmtMs, hhmm, niceMax, useRender } from "./util.js";

export const HelpTip = {
  name: "HelpTip",
  props: { k: String, open: String },
  emits: ["toggle"],
  computed: { text() { return HELP[this.k] || ""; } },
  template: `<span class="help-wrap" @click.stop><button type="button" class="help" :aria-expanded="open === k ? 'true' : 'false'"
    aria-label="About this panel" title="About this panel" @click="$emit('toggle', k)">?</button><span v-if="open === k" class="help-pop" role="note">{{ text }}</span></span>`,
};

export const StepCard = {
  name: "StepCard",
  components: { HelpTip },

  props: { step: Object, release: Object, t: Object, lang: String, busy: Boolean, closable: Boolean, help: String, checking: Boolean,
    api: Function, mode: String, cs: Array, envParam: String, envParams: Object, onState: Function, reload: Function },
  emits: ["mark", "unmark", "close", "monitor", "mail", "notes", "help", "check", "meeting", "jira", "workflow"],
  data() { return { form: null, note: "", copied: "", soForm: null, soBy: "", soNote: "", soBusy: false, job: null }; },
  computed: {
    marked() { return isClosed(this.step); },
    hasTools() { return !!(this.step.mail || this.step.relnotes || this.step.meeting || this.step.jira); },
    needReason() { return (this.form === "skipped" && !this.step.optional) || (!!this.form && !!this.against); },

    against() {
      const so = this.step.signoff;
      if (!so) { return ""; }
      const d = so.decisions || {}, all = so.roles.concat(so.former || []);
      const nogo = all.filter((r) => d[r] && d[r].decision === "nogo"), wait = so.roles.filter((r) => !d[r]);
      return [nogo.length ? fill(this.t.rdSignNogo, nogo.join(", ")) : "", wait.length ? fill(this.t.rdSignWait, wait.join(", ")) : ""]
        .filter(Boolean).join(" · ");
    },
    phaseTitle() {
      const p = this.release.phases.find((x) => x.id === this.step.phase);
      return p ? p[this.lang] || p.en : "";
    },
    whenText() {
      const parts = [];
      if (this.step.due) { parts.push(fmtDate(this.step.due, this.lang, true)); }
      if (this.step.when && this.step.when.time) { parts.push(this.step.when.time); }
      return parts.join(" · ") || this.t.noDate;
    },
    markedText() {
      return this.step.mark_at ? this.step.mark_at.slice(8, 10) + "." + this.step.mark_at.slice(5, 7) + " " + this.step.mark_at.slice(11, 16) : "";
    },

    soKey() { return this.step.signoff ? JSON.stringify(this.step.signoff.decisions) : ""; },
    soNeedNote() { return !!this.soForm && this.soForm.decision === "nogo"; },

    soRoles() {
      const so = this.step.signoff, closed = isClosed(this.step);
      return so.roles.filter((r) => !closed || so.decisions[r]).map((role) => ({ role, former: false }))
        .concat((so.former || []).map((role) => ({ role, former: true })));
    },
    csReady() { return !!this.step.cstest && csStages(this.step.cstest).some((s) => (this.cs || []).includes(s)); },
    jobStale() { return !!this.job && !!this.job.plan && JSON.stringify(this.job.params) !== this.job.planFor; },
    canStart() {
      const j = this.job;
      return !!j && !!j.plan && !this.jobStale && this.jm((this.step.actions || [])[j.index]) === "on" && j.plan.mode === "on"
        && j.plan.jenkins === "ok" && !j.plan.problems.length && !j.busy
        && !this.jobRunning;
    },

    jobRun() {
      const j = this.job;
      if (!j) { return null; }
      const a = ((this.step.actions || [])[j.index] || {}).run || null;
      if (!j.run || !a) { return j.run || a; }
      const same = a.queue === j.run.queue && a.at === j.run.at;
      if (same) { return FINAL_RUN.includes(a.state) || !FINAL_RUN.includes(j.run.state) && RUN_RANK[a.state] > RUN_RANK[j.run.state] ? a : j.run; }
      return queueNo(a) > queueNo(j.run) || (queueNo(a) === queueNo(j.run) && a.at > j.run.at) ? a : j.run;
    },
    jobRunning() { return !!this.jobRun && !FINAL_RUN.includes(this.jobRun.state); },
  },
  watch: {

    jobRun(run) {
      const j = this.job;
      if (j && run && run !== j.run && !FINAL_RUN.includes(run.state)) { j.run = run; this.pollJob(0); }
    },
    "step.status"() { this.form = null; this.note = ""; },
    soKey() { this.soForm = null; this.soBy = ""; this.soNote = ""; },
  },
  beforeUnmount() { this.gone = true; clearTimeout(this.jobTimer); },
  methods: {
    title(o) { return o[this.lang] || o.en; },
    show(v) { return v === "" ? '""' : text(v); },
    raw(v) { return text(v); },
    start(kind) {
      this.form = kind;
      this.note = "";
      this.$nextTick(() => { if (this.$refs.note) { this.$refs.note.focus(); } });
    },
    submit() {
      if (this.needReason && !this.note.trim()) { return; }
      this.$emit("mark", this.form, this.note.trim());
    },
    copy(value, key) {
      navigator.clipboard.writeText(value).then(() => {
        this.copied = key;
        setTimeout(() => { if (this.copied === key) { this.copied = ""; } }, 1500);
      }, () => {   });
    },
    copyAll(action, i) {
      this.copy(Object.keys(action.params).map((k) => k + "=" + text(action.params[k])).join("\n"), "all" + i);
    },
    focusClose() { if (this.$refs.closeBtn) { this.$refs.closeBtn.focus(); } },
    so(role) { return this.step.signoff.decisions[role] || null; },
    soClass(role) { const d = this.so(role); return d ? (d.decision === "go" ? "p-done" : "p-overdue") : "p-open"; },
    soText(role) { const d = this.so(role); return d ? (d.decision === "go" ? this.t.soGo : this.t.soNogo) : this.t.soPending; },
    soWho(role) {
      const d = this.so(role);
      if (!d) { return ""; }
      const at = d.at ? d.at.slice(8, 10) + "." + d.at.slice(5, 7) + " " + d.at.slice(11, 16) : "";
      return [d.by, at, d.note, d.after_closing ? this.t.soAfter : ""].filter(Boolean).join(" · ");
    },
    soStart(role, decision) {
      this.soForm = { role, decision };
      this.soBy = "";
      this.soNote = "";
      this.$nextTick(() => { if (this.$refs.soBy) { this.$refs.soBy.focus(); } });
    },
    soSubmit() {
      if (this.soNeedNote && !this.soNote.trim()) { return; }
      this.soSave(this.soForm.role, this.soForm.decision, this.soBy.trim(), this.soNote.trim());
    },
    fill,
    at(iso) { return iso ? iso.slice(8, 10) + "." + iso.slice(5, 7) + " " + iso.slice(11, 16) : ""; },
    csClass(st) { return { pass: "p-done", fail: "p-overdue", unreached: "p-today" }[st] || "p-open"; },

    isPlaceholder(v) { return /^\s*<.*>\s*$/.test(String(v)); },

    jm(action) { return (action && action.start) || this.mode; },
    openJob(i, action) {
      clearTimeout(this.jobTimer);
      const params = {};
      Object.keys(action.params || {}).forEach((k) => { params[k] = text(action.params[k]); });
      const envParam = (this.envParams || {})[action.job] || this.envParam;
      if (action.env && envParam && this.isPlaceholder(action.env)) { params[envParam] = action.env; }
      this.job = { index: i, params, plan: null, planFor: "", busy: "", run: action.run || null };
      if (this.job.run && !FINAL_RUN.includes(this.job.run.state)) { this.pollJob(0); }
    },
    body(extra) { return Object.assign({ version: this.release.version, step: this.step.id, index: this.job.index }, extra || {}); },
    async dryRun() {
      const j = this.job, asked = JSON.stringify(j.params);
      j.busy = "plan";
      const data = await this.api("/api/jenkins/plan", this.body({ params: JSON.parse(asked) }));
      j.busy = "";
      if (data) { j.plan = data; j.planFor = asked; }
    },
    async startJob() {
      const j = this.job;
      if (!this.canStart) { return; }
      j.busy = "start";
      const data = await this.api("/api/jenkins/start", this.body({ params: j.params, dry: j.plan }));
      j.busy = "";
      if (data) { j.run = data; j.plan = null; if (this.reload) { this.reload(); } this.pollJob(0); return; }

      j.plan = null;
      if (this.reload) { this.reload(); }
    },
    async pollJob(n) {
      clearTimeout(this.jobTimer);
      const j = this.job;
      if (this.gone || !j || !j.run || FINAL_RUN.includes(j.run.state) || n > 2000) { return; }
      const data = await this.api("/api/jenkins/status", this.body(), n > 0);
      if (this.gone || this.job !== j) { return; }
      if (data) {
        j.run = data;
        if (FINAL_RUN.includes(data.state)) { if (this.reload) { this.reload(); } return; }
      }
      this.jobTimer = setTimeout(() => this.pollJob(n + 1), data ? 5000 : 15000);
    },

    async soSave(role, decision, by, note) {
      if (this.soBusy) { return; }
      const form = this.soForm;
      this.soBusy = true;
      const data = await this.api("/api/signoff", { version: this.release.version, step: this.step.id, role, decision, by, note });
      this.soBusy = false;
      if (!data) { return; }
      if (this.onState) { this.onState(data); }
      if (this.soForm === form) { this.soForm = null; this.soBy = ""; this.soNote = ""; }
    },
    runText(run) {
      const t = this.t;
      return run.state === "done" ? run.result : t.jobState[run.state] || run.state;
    },
  },
  template: `
<article class="card">
  <header class="card-h">
    <div class="card-meta">
      <span class="pill" :class="'p-' + step.status">{{ t.st[step.status] }}</span>
      <span class="mono dim">{{ release.version }} · {{ step.id }}</span>
      <span v-if="step.gate" class="pill p-gate">{{ step.gate }}</span>
      <span v-if="step.optional" class="pill">{{ t.optional }}</span>
      <span v-if="step.proposed" class="pill p-today">{{ t.proposed }}</span>
    </div>
    <button v-if="closable" ref="closeBtn" class="icon-btn" type="button" :aria-label="t.close" @click="$emit('close')">✕</button>
  </header>
  <h2>{{ title(step) }}</h2>
  <button v-if="step.monitor" class="btn xs mon-link" type="button" @click="$emit('monitor', step.monitor)">{{ t.monitorStep }} · {{ step.monitor }} →</button>
  <dl class="facts">
    <div><dt>{{ t.phase }}</dt><dd>{{ phaseTitle }}</dd></div>
    <div><dt>{{ t.who }}</dt><dd>{{ step.owner }}</dd></div>
    <div><dt>{{ t.when }}</dt><dd>{{ whenText }}</dd></div>
    <div><dt>{{ t.proof }}</dt><dd>{{ step.confirm === 'manual' ? t.manual : step.confirm }}</dd></div>
  </dl>
  <p v-if="marked" class="marked">{{ t.marked }}: {{ t.st[step.status] }}, {{ markedText }}<span v-if="step.mark_note"> · {{ step.mark_note }}</span></p>
  <section v-if="step.cstest" class="cstest" :class="'cs-' + step.cstest.status">
    <h3>{{ t.csTest }} · {{ step.cstest.stage }}<help-tip k="cstest" :open="help" @toggle="$emit('help', $event)"></help-tip></h3>
    <div class="cs-row">
      <span class="pill" :class="csClass(step.cstest.status)">{{ t.csStatus[step.cstest.status] }}</span>
      <span class="so-who">{{ step.cstest.detail || (csReady ? t.csNotRun : t.csTestOff) }}<span v-if="step.cstest.at"> · {{ at(step.cstest.at) }}</span>
        <span v-if="step.cstest.recheck" class="dim"> · {{ t.csRecheck }} {{ at(step.cstest.recheck.at) }}: {{ step.cstest.recheck.detail }}</span></span>
      <button class="btn xs" type="button" :disabled="busy || !csReady || checking" :title="csReady ? '' : t.csTestOff" @click="$emit('check')">{{ checking ? t.working : step.cstest.status === 'none' ? t.csRun : t.csAgain }}</button>
    </div>
  </section>
  <p v-if="step.only_if" class="cond"><b>{{ t.onlyIf }}:</b> {{ step.only_if }}</p>

  <section v-if="step.signoff" class="signoff">
    <h3>{{ t.signoffs }} · {{ step.gate }}<help-tip k="signoff" :open="help" @toggle="$emit('help', $event)"></help-tip></h3>
    <div v-for="x in soRoles" :key="x.role" class="so-row">
      <b class="so-role">{{ x.role }}</b>
      <span class="pill" :class="soClass(x.role)">{{ soText(x.role) }}</span>
      <span class="so-who"><span v-if="x.former" class="tag" :title="t.soFormerT">{{ t.soFormer }}</span> {{ soWho(x.role) }}</span>
      <span class="btn-row so-btns">
        <button v-if="!x.former" class="btn xs" type="button" :disabled="busy || soBusy" @click="soStart(x.role, 'go')">{{ t.soGo }}</button>
        <button v-if="!x.former" class="btn xs" type="button" :disabled="busy || soBusy" @click="soStart(x.role, 'nogo')">{{ t.soNogo }}</button>
        <button v-if="so(x.role)" class="btn xs" type="button" :disabled="busy || soBusy" @click="soSave(x.role, '', '', '')">{{ t.soClear }}</button>
      </span>
    </div>
    <form v-if="soForm" class="markform so-form" @submit.prevent="soSubmit">
      <b>{{ soForm.role }}: {{ soForm.decision === 'go' ? t.soGo : t.soNogo }}</b>
      <label :for="'so-by-' + step.id">{{ t.soBy }}</label>
      <input :id="'so-by-' + step.id" ref="soBy" v-model="soBy" autocomplete="off" :placeholder="t.soByPh">
      <label :for="'so-note-' + step.id">{{ soNeedNote ? t.soWhy : t.soNote }}</label>
      <input :id="'so-note-' + step.id" v-model="soNote" autocomplete="off">
      <div class="btn-row">
        <button class="btn pri" type="submit" :disabled="busy || soBusy || (soNeedNote && !soNote.trim())">{{ t.soSave }}</button>
        <button class="btn" type="button" @click="soForm = null">{{ t.cancel }}</button>
      </div>
    </form>
    <p v-else class="dim small" style="margin: 0">{{ t.soHint }}</p>
  </section>
  <section v-if="(step.actions && step.actions.length) || hasTools">
    <h3>{{ t.actions }}</h3>
    <div v-if="hasTools" class="btn-row compose-btns">       
      <button v-if="step.jira" class="btn tool-pri" type="button" @click="$emit('jira', step.jira)">{{ t.jiraBtn[step.jira] }} →</button>
      <button v-if="step.meeting" class="btn tool-pri" type="button" @click="$emit('meeting')">📅 {{ t.meetingBtn }}</button>
      <button v-if="step.mail" class="btn tool-pri" type="button" @click="$emit('mail', step.mail)">✉ {{ t.mailBtn[step.mail] }}</button>
      <button v-if="step.relnotes" class="btn tool-pri" type="button" @click="$emit('notes')">{{ t.notesBtn }} →</button>
    </div>
    <ol v-if="step.actions && step.actions.length" class="acts">
      <li v-for="(a, i) in step.actions" :key="i">
        <template v-if="a.do">{{ a.do }}</template>
        <template v-else>
          <div class="job">
            <span class="job-tag">Jenkins</span><code>{{ a.job }}</code>
            <a v-if="a.url" class="job-link" :href="a.url" target="_blank" rel="noopener noreferrer">{{ t.openJenkins }} ↗</a>
            <span v-if="a.env" class="dim">env: <code>{{ a.env }}</code></span>
            <span v-if="a.takes" class="dim">{{ t.takes }} {{ a.takes }}</span>
          </div>
          <p v-if="a.only_if" class="cond"><b>{{ t.onlyIf }}:</b> {{ a.only_if }}</p>
          <table v-if="a.params" class="params">
            <tbody>
              <tr v-for="(value, name) in a.params" :key="name">
                <th scope="row">{{ name }}</th>
                <td :class="{ empty: value === '' }">{{ show(value) }}</td>
                <td class="c"><button class="btn xs" type="button" @click="copy(raw(value), i + name)">{{ copied === i + name ? t.copied : t.copy }}</button></td>
              </tr>
            </tbody>
          </table>
          <button v-if="a.params" class="btn xs" type="button" @click="copyAll(a, i)">{{ copied === 'all' + i ? t.copied : t.copyAll }}</button>
          <p v-if="a.note" class="dim">{{ a.note }}</p>
          <div v-if="jm(a) && jm(a) !== 'off'" class="jrun">
            <p v-if="a.run && !(job && job.index === i)" class="dim small jrun-last">{{ t.lastStart }}: #{{ a.run.number || '…' }} · {{ runText(a.run) }} · {{ at(a.run.at) }}
              <a v-if="a.run.url" :href="a.run.url" target="_blank" rel="noopener noreferrer">{{ t.openJenkins }} ↗</a></p>
            <button v-if="!(job && job.index === i)" class="btn xs" type="button" @click="openJob(i, a)">▶ {{ t.startJob }}…</button>
            <div v-else class="jform">
              <div class="jform-h"><b>{{ t.startJob }}</b><code>{{ a.job }}</code><span v-if="a.env" class="dim">env {{ a.env }}</span>
                <span v-if="jm(a) === 'dry-run'" class="pill warn">{{ t.dryRunMode }}</span>
                <span v-else-if="mode === 'dry-run'" class="pill ok" :title="t.startListedTip">{{ t.startListed }}</span></div>
              <p v-if="jm(a) === 'dry-run'" class="dim small">{{ t.startOff }}
                <button class="btn xs" type="button" @click="$emit('workflow')">{{ t.editWorkflow }}</button></p>
              <label v-for="(v, k) in job.params" :key="k" class="jp"><span class="mono">{{ k }}</span>
                <input v-model="job.params[k]" :class="{ ph: isPlaceholder(job.params[k]) }" autocomplete="off" spellcheck="false"></label>
              <div class="btn-row">
                <button class="btn" type="button" :disabled="!!job.busy" @click="dryRun">{{ job.busy === 'plan' ? t.working : t.dryRunBtn }}</button>
                <button v-if="jm(a) === 'on'" class="btn pri" type="button" :disabled="!canStart" @click="startJob">{{ job.busy === 'start' ? t.working : t.startInJenkins }}</button>
                <button class="btn" type="button" :disabled="job.busy === 'start'" @click="job = null">{{ t.close }}</button>
              </div>
              <div v-if="job.plan" class="plan" :class="{ stale: jobStale }" role="status">
                <div class="mono small">POST {{ job.plan.url || t.noJenkins }}</div>
                <table class="params"><tbody><tr v-for="(v, k) in job.plan.params" :key="k"><th scope="row">{{ k }}</th><td :class="{ empty: v === '' }">{{ show(v) }}</td></tr></tbody></table>
                <p v-if="job.plan.jenkins === 'ok'" class="check-ok">✓ {{ t.jenkinsKnows }}</p>
                <p v-else-if="job.plan.jenkins" class="cond small">Jenkins: {{ job.plan.jenkins }}</p>
                <div v-if="job.plan.problems.length" class="problems" role="alert"><ul><li v-for="x in job.plan.problems" :key="x">{{ x }}</li></ul></div>
                <p v-if="jm(a) === 'dry-run'" class="dim small" style="margin: 0">{{ t.dryRunNote }}</p>
                <p v-if="jobStale" class="cond small">{{ t.jobStale }}</p>
              </div>
              <p v-if="jobRunning" class="cond small">{{ fill(t.jobBusy, runText(jobRun)) }}</p>
              <p v-if="jobRun" class="marked">#{{ jobRun.number || '…' }} · {{ runText(jobRun) }}
                <a v-if="jobRun.url" :href="jobRun.url" target="_blank" rel="noopener noreferrer">{{ t.openJenkins }} ↗</a></p>
            </div>
          </div>
        </template>
      </li>
    </ol>
  </section>

  <section v-if="step.notes.length">
    <h3>{{ t.notes }}</h3>
    <ul class="notes"><li v-for="(n, i) in step.notes" :key="i">{{ n }}</li></ul>
  </section>
  <p v-if="step.ask" class="ask"><b>{{ t.ask }}:</b> {{ step.ask }}</p>

  <footer class="card-f">
    <form v-if="form" class="markform" @submit.prevent="submit">
      <label :for="'note-' + release.version + step.id">{{ form === 'done' && against ? t.reasonClose : needReason ? t.reason : t.note }}</label>
      <input :id="'note-' + release.version + step.id" ref="note" v-model="note" autocomplete="off" @keydown.esc.stop="form = null">
      <p v-if="against" class="cond small">{{ fill(t.gateAgainst, against) }}</p>
      <div class="btn-row">
        <button class="btn pri" type="submit" :disabled="busy || (needReason && !note.trim())">{{ form === 'done' ? t.markDone : t.skip }}</button>
        <button class="btn" type="button" @click="form = null">{{ t.cancel }}</button>
      </div>
    </form>
    <div v-else-if="marked" class="btn-row">
      <button class="btn" type="button" :disabled="busy" @click="$emit('unmark')">{{ t.undo }}</button>
    </div>
    <div v-else class="btn-row">
      <button class="btn pri" type="button" :disabled="busy" @click="start('done')">{{ t.markDone }}</button>
      <button class="btn" type="button" :disabled="busy" @click="start('skipped')">{{ t.skip }}</button>
    </div>
  </footer>
</article>`,
};

export const CommitTimeline = {
  name: "CommitTimeline",
  props: { tl: Object, t: Object, lang: String },
  data() { return { active: -1 }; },
  computed: {
    days() { return this.tl.days; },
    top() { return niceMax(Math.max(1, ...this.days.map((d) => d.commits))); },
    peak() {
      let best = -1;
      this.days.forEach((d, i) => { if (d.commits && (best < 0 || d.commits > this.days[best].commits)) { best = i; } });
      return best;
    },
    lateFrom() { return this.days.findIndex((d) => d.late); },

    freezeAt() {
      if (!this.tl.freeze) { return -1; }
      const i = this.days.findIndex((d) => d.date > this.tl.freeze);
      return i >= 0 ? i : (this.days.length && this.days[this.days.length - 1].date === this.tl.freeze ? this.days.length : -1);
    },
    labels() {
      const n = this.days.length, every = n > 70 ? 14 : 7, out = [];
      this.days.forEach((d, i) => {
        const monday = new Date(d.date + "T12:00:00").getDay() === 1;
        if ((i === 0 || (monday && (every === 7 || i % 14 < 7))) && (!out.length || i - out[out.length - 1].i >= 5)) {
          out.push({ i, text: d.date.slice(8, 10) + "." + d.date.slice(5, 7) });
        }
      });
      return out;
    },
    cur() { return this.active >= 0 ? this.days[this.active] : null; },
    summary() {
      const t = this.t, all = this.days.reduce((s, d) => s + d.commits, 0), late = this.days.filter((d) => d.late).reduce((s, d) => s + d.commits, 0);
      return t.insTlH + ", " + this.dm(this.days[0].date) + "–" + this.dm(this.days[this.days.length - 1].date) + ": " + all + " "
        + t.insTlCommits + (this.tl.freeze ? ", " + late + " " + t.insTlAfter + " " + this.dm(this.tl.freeze) : "");
    },
  },
  methods: {
    fill,
    pct(i) { return (i / this.days.length * 100).toFixed(2) + "%"; },
    dm(iso) { return iso.slice(8, 10) + "." + iso.slice(5, 7); },
    when(iso) { return fmtDate(iso, this.lang); },
    step(dir) { this.active = Math.max(0, Math.min(this.days.length - 1, (this.active < 0 ? (dir > 0 ? -1 : this.days.length) : this.active) + dir)); },
    move(event) {
      const box = event.currentTarget.getBoundingClientRect();
      this.active = Math.max(0, Math.min(this.days.length - 1, Math.floor((event.clientX - box.left) / box.width * this.days.length)));
    },
    repos(d) { return Object.entries(d.repos).map(([name, n]) => name + " " + n).join(" · "); },
  },
  template: `
  <div class="ctl" tabindex="0" role="img" :aria-label="summary" @keydown.left.prevent="step(-1)" @keydown.right.prevent="step(1)"
    @keydown.esc="active = -1" @blur="active = -1">
    <div class="ctl-plot" @mousemove="move" @mouseleave="active = -1">
      <span class="ctl-tick ctl-top">{{ top }}</span><span class="ctl-tick ctl-zero">0</span>
      <div v-if="lateFrom >= 0" class="ctl-late" :style="{ left: pct(lateFrom) }"></div>
      <div v-if="freezeAt >= 0" class="ctl-freeze" :style="{ left: pct(freezeAt) }">
        <span class="ctl-freeze-l" :class="{ left: freezeAt > days.length * 0.7 }">{{ fill(t.insFreeze, dm(tl.freeze)) }}</span></div>
      <div class="ctl-cols">
        <div v-for="(d, i) in days" :key="d.date" class="ctl-col" :class="{ on: i === active }">
          <span v-if="i === peak" class="ctl-peak" :style="{ bottom: (d.commits / top * 100) + '%' }">{{ d.commits }}</span>
          <span class="ctl-bar" :style="{ height: (d.commits / top * 100) + '%' }"></span>
        </div>
      </div>
      <div v-if="cur" class="ctl-tip" role="status" :style="{ left: 'min(' + pct(active + 0.5) + ', calc(100% - 240px))' }">
        <b>{{ when(cur.date) }}</b> · {{ t.insTlCommits }}: {{ cur.commits }}<span v-if="cur.merges"> · {{ fill(t.insMerges, String(cur.merges)) }}</span>
        <span v-if="cur.late" class="ctl-tip-late"> · {{ t.insTlAfter }}</span>
        <span v-if="cur.commits" class="ctl-tip-r">{{ repos(cur) }}</span>
      </div>
    </div>
    <div class="ctl-x" aria-hidden="true"><span v-for="l in labels" :key="l.i" :style="{ left: pct(l.i + 0.5) }">{{ l.text }}</span></div>
  </div>`,
};

export const TrendChart = {
  name: "TrendChart",
  props: { rows: Array, title: String, t: Object },
  computed: {
    known() { return this.rows.filter((r) => r.value !== null); },
    top() { return niceMax(Math.max(1, ...this.known.map((r) => r.value))); },
    cur() { return this.rows.find((r) => r.current) || null; },
    median() {
      const v = this.known.filter((r) => !r.current).map((r) => r.value).sort((a, b) => a - b);
      if (v.length < 2) { return null; }
      const m = v.length / 2;
      return v.length % 2 ? v[Math.floor(m)] : Math.round((v[m - 1] + v[m]) / 2);
    },
    aria() {
      return this.title + ": " + this.rows.map((r) => r.version + " " + (r.value === null ? "—" : r.value)).join(", ")
        + (this.median !== null ? "; " + fill(this.t.insTrMedian, String(this.median)) : "");
    },
  },
  methods: { fill },
  template: `
  <div class="trc" role="img" :aria-label="aria">
    <div class="trc-h"><span class="trc-t">{{ title }}</span><span v-if="cur"><b class="trc-v">{{ cur.value === null ? '—' : cur.value }}</b><span v-if="median !== null" class="trc-m"> · {{ fill(t.insTrMedian, String(median)) }}</span></span></div>
    <div class="trc-plot">
      <div v-if="median !== null" class="trc-med" :style="{ bottom: (median / top * 100) + '%' }"></div>
      <div class="trc-cols">
        <div v-for="r in rows" :key="r.version" class="trc-col" :class="{ cur: r.current }">
          <span v-if="r.value !== null" class="trc-bar" :style="{ height: (r.value / top * 100) + '%' }"></span>
          <span v-else class="trc-na">—</span>
          <span class="trc-tip" role="tooltip">{{ r.version }} · {{ r.value === null ? t.insTrNotRead : r.value }}</span>
        </div>
      </div>
    </div>
    <div class="trc-x" aria-hidden="true"><span v-for="r in rows" :key="r.version" :class="{ cur: r.current }">{{ r.label }}</span></div>
  </div>`,
};

export const LineChart = {
  name: "LineChart",
  props: { points: Array, start: Number, end: Number, deploys: Array, t: Object, label: String },
  data() { return { hover: -1, W: 560, H: 176, L: 52, R: 62, T: 10, B: 24 }; },
  computed: {
    series() {
      return [{ key: "avg", name: this.t.metric.avg, cls: "s1" }, { key: "p95", name: this.t.metric.p95, cls: "s2" }];
    },
    top() {
      const values = this.points.flatMap((p) => [p.avg, p.p95]).filter((v) => v !== null && v !== undefined);
      return niceMax(Math.max(1, ...values));
    },
    yTicks() { return [0, this.top / 2, this.top].map((v) => ({ v, y: this.y(v) })); },
    xTicks() {
      const hour = 3600000, span = this.end - this.start, every = span > 8 * hour ? 3 * hour : span > 4 * hour ? 2 * hour : hour;
      const out = [];
      for (let t = Math.ceil(this.start / hour) * hour; t <= this.end; t += every) { out.push({ t, x: this.x(t), label: hhmm(t) }); }
      return out;
    },
    paths() {
      return this.series.map((s) => {
        const parts = [];
        let run = [];
        this.points.forEach((p) => {
          if (p[s.key] === null || p[s.key] === undefined) { if (run.length) { parts.push(run); } run = []; return; }
          run.push(this.x(p.t).toFixed(1) + "," + this.y(p[s.key]).toFixed(1));
        });
        if (run.length) { parts.push(run); }
        const last = [...this.points].reverse().find((p) => p[s.key] !== null && p[s.key] !== undefined);
        return Object.assign({}, s, { d: parts.map((r) => "M" + r.join("L")).join(" "),
          last: last ? { x: this.x(last.t), y: this.y(last[s.key]), v: last[s.key] } : null });
      });
    },

    ends() {
      const ends = this.paths.filter((p) => p.last).map((p) => ({ cls: p.cls, y: p.last.y, text: fmtMs(p.last.v) }));
      if (ends.length === 2 && Math.abs(ends[0].y - ends[1].y) < 13) {
        const [hi, lo] = ends[0].y < ends[1].y ? [ends[0], ends[1]] : [ends[1], ends[0]];
        const mid = (hi.y + lo.y) / 2;
        hi.y = mid - 7;
        lo.y = mid + 7;
      }
      return ends;
    },
    marks() {
      return (this.deploys || []).map((d) => ({ x: this.x(Date.parse(d.at)), label: d.version }))
        .filter((m) => m.x >= this.L && m.x <= this.W - this.R);
    },
    cur() { return this.hover >= 0 ? this.points[this.hover] : null; },
    tipLeft() { return this.cur ? Math.min(this.x(this.cur.t) / this.W * 100, 70) + "%" : "0"; },
  },
  methods: {
    fmtMs, hhmm,
    x(t) { return this.L + (t - this.start) / Math.max(1, this.end - this.start) * (this.W - this.L - this.R); },
    y(v) { return this.T + (1 - v / this.top) * (this.H - this.T - this.B); },
    move(event) {
      const box = event.currentTarget.getBoundingClientRect();
      const px = (event.clientX - box.left) / box.width * this.W;
      let best = -1, dist = Infinity;
      this.points.forEach((p, i) => { const d = Math.abs(this.x(p.t) - px); if (d < dist) { dist = d; best = i; } });
      this.hover = best;
    },
    key(event) {
      if (!this.points.length) { return; }
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        const step = event.key === "ArrowRight" ? 1 : -1;
        this.hover = Math.max(0, Math.min(this.points.length - 1, (this.hover < 0 ? (step > 0 ? -1 : this.points.length) : this.hover) + step));
      } else if (event.key === "Escape") { this.hover = -1; }
    },
  },
  template: `
<div class="chart">
  <div class="chart-legend"><span v-for="s in series" :key="s.key"><i :class="s.cls"></i>{{ s.name }}</span></div>
  <div class="chart-box" tabindex="0" :aria-label="label" @keydown="key" @blur="hover = -1">
    <svg :viewBox="'0 0 ' + W + ' ' + H" role="img" :aria-label="label">
      <g class="grid"><line v-for="g in yTicks" :key="g.v" :x1="L" :x2="W - R" :y1="g.y" :y2="g.y"></line></g>
      <g class="axis"><text v-for="g in yTicks" :key="'y' + g.v" :x="L - 6" :y="g.y + 4" text-anchor="end">{{ fmtMs(g.v) }}</text>
        <text v-for="g in xTicks" :key="g.t" :x="g.x" :y="H - 6" text-anchor="middle">{{ g.label }}</text></g>
      <g v-for="m in marks" :key="m.x" class="deploy"><line :x1="m.x" :x2="m.x" :y1="T" :y2="H - B"></line>
        <text :x="m.x + 4" :y="T + 10">{{ t.deployMark }} {{ m.label }}</text></g>
      <path v-for="p in paths" :key="p.key" :d="p.d" class="line" :class="p.cls"></path>
      <g v-if="cur" class="cross"><line :x1="x(cur.t)" :x2="x(cur.t)" :y1="T" :y2="H - B"></line>
        <circle v-for="p in paths" v-show="cur[p.key] !== null && cur[p.key] !== undefined" :key="p.key" :class="p.cls" :cx="x(cur.t)" :cy="y(cur[p.key] || 0)" r="4"></circle></g>
      <text v-for="e in ends" :key="e.cls" class="end" :class="e.cls" :x="W - R + 6" :y="e.y + 4">{{ e.text }}</text>
      <rect class="hit" :x="L" :y="T" :width="W - L - R" :height="H - T - B" @pointermove="move" @pointerleave="hover = -1"></rect>
    </svg>
    <div v-if="cur" class="chart-tip" :style="{ left: tipLeft }" role="status">
      <div class="dim">{{ hhmm(cur.t) }}</div>
      <div v-for="s in series" :key="s.key"><i :class="s.cls"></i><b>{{ fmtMs(cur[s.key]) }}</b> <span class="dim">{{ s.name }}</span></div>
    </div>
  </div>
  <details class="chart-data"><summary>{{ t.chartData }}</summary>
    <table class="mtable"><thead><tr><th>{{ t.time }}</th><th v-for="s in series" :key="s.key">{{ s.name }}</th></tr></thead>
      <tbody><tr v-for="p in points" :key="p.t"><td>{{ hhmm(p.t) }}</td><td v-for="s in series" :key="s.key">{{ fmtMs(p[s.key]) }}</td></tr></tbody></table>
  </details>
</div>`,
};

export const FilesPreview = {
  name: "FilesPreview",
  props: { preview: Object, t: Object, busy: Boolean, blocked: String },
  emits: ["save", "cancel"],
  computed: {
    perms() { return this.preview.files.flatMap((f) => f.permissions.map((p) => f.label + ": " + p)); },
  },
  methods: {
    fill,
    cls(op) { return { "+": "d-add", "-": "d-del", "@": "d-hunk" }[op] || ""; },
  },
  template: `
<div class="multi">
  <p v-if="!preview.count" class="dim small">{{ t.multiNone }}</p>
  <template v-else>
    <div v-if="perms.length" class="perm-warn" role="alert"><b>{{ t.permsH }}</b><code v-for="p in perms" :key="p">{{ p }}</code></div>
    <div v-if="preview.problems.length" class="problems" role="alert"><b>{{ t.problemsH }}</b><ul><li v-for="p in preview.problems" :key="p">{{ p }}</li></ul></div>
    <div v-if="(preview.warnings || []).length" class="state-warn" role="status"><b>{{ t.stateWarnH }}</b><ul><li v-for="p in preview.warnings" :key="p">{{ p }}</li></ul></div>
    <p v-else-if="!perms.length" class="check-ok">✓ {{ t.checkOk }}</p>
    <details v-for="f in preview.files" :key="f.key" class="mf" :open="preview.files.length <= 3">
      <summary><span class="mono">{{ f.label }}</span><span class="n-add">+{{ f.added }}</span><span class="n-del">−{{ f.removed }}</span></summary>
      <pre class="diff"><span v-for="(l, i) in f.diff" :key="i" :class="cls(l.op)">{{ l.op === '@' ? l.text : l.op + ' ' + l.text }}</span></pre>
    </details>
  </template>
  <p v-if="blocked" class="cond small">{{ blocked }}</p>
  <div class="ed-foot">
    <button v-if="preview.count" class="btn pri" type="button" :disabled="busy || !!preview.problems.length || !!blocked" @click="$emit('save')">{{ fill(t.saveN, preview.count) }}</button>
    <button class="btn" type="button" :disabled="busy" @click="$emit('cancel')">{{ t.cancel }}</button>
  </div>
</div>`,
};

const CI_ORDER = ["differ", "failed", "unseen", "unmarked", "failing", "running", "partly", "agree", "idle"];
const CI_ICON = { differ: "!", failed: "▲", unseen: "▲", unmarked: "i" };
function fmt(template, ...values) { return values.reduce((s, v, i) => s.replace("{" + i + "}", () => String(v)), template); }

export const CicdView = {
  name: "CicdView",
  props: ["t", "lang", "why"],
  emits: ["open-step", "changed", "why"],
  data() { return { view: null, pick: "", busy: false, failed: "", timer: null, tick: null }; },
  computed: {
    d() { return this.view && this.view.data; },
    problem() { return this.failed || (this.view && this.view.error) || (this.d && this.d.error) || ""; },
    releases() { return this.d ? this.d.releases : []; },
    cur() { return this.releases.find((r) => r.version === this.pick) || this.releases[0] || null; },
    byId() { const m = {}; for (const s of this.cur ? this.cur.steps : []) { m[s.id] = s; } return m; },
    finds() { return this.cur ? this.cur.findings.map((id) => this.byId[id]) : []; },
    agree() { return this.cur ? this.cur.steps.filter((s) => s.kind === "agree") : []; },
    counts() { const c = this.cur ? this.cur.counts : {}; return CI_ORDER.filter((k) => c[k]).map((k) => ({ kind: k, n: c[k] })); },
  },
  mounted() { this.load(); this.tick = setInterval(() => this.load(), 60000); },
  unmounted() { clearTimeout(this.timer); clearInterval(this.tick); },
  methods: {
    fill, fmt,
    async load(force) {
      try {
        const response = force
          ? await fetch("/api/cicd/refresh", { method: "POST", headers: { "Content-Type": "application/json", "X-Stellwerk": "1" }, body: "{}" })
          : await fetch("/api/cicd");
        const data = await response.json();
        if (!response.ok) { throw new Error(data.error || String(response.status)); }
        this.view = data;
        this.failed = "";
        clearTimeout(this.timer);
        if (data.pending) { this.timer = setTimeout(() => this.load(), 3000); }
      } catch (error) { this.failed = String(error.message || error); }
    },
    title(s) { return (this.lang === "ru" && s.ru) || s.en || s.id; },
    when(iso) { return iso ? fmtDate(iso.slice(0, 10), this.lang) + (iso.length > 10 ? " " + iso.slice(11, 16) : "") : ""; },
    dur(sec) {
      if (!sec) { return "—"; }
      if (sec < 3600) { return Math.max(1, Math.round(sec / 60)) + " min"; }
      return Math.floor(sec / 3600) + " h " + two(Math.round((sec % 3600) / 60));
    },
    leaf(job) { return String(job).split("/").pop(); },
    span(p) { return !p.from ? "" : p.from === p.to ? this.when(p.from) : this.when(p.from) + " – " + this.when(p.to); },
    markText(s) {
      if (s.status === "done") { return fmt(this.t.ci.mDone, this.when((s.mark_at || "").slice(0, 10))); }
      if (s.status === "skipped") { return this.t.ci.mSkipped; }
      if (!s.due) { return this.t.ci.mOpen; }
      return fmt(s.status === "open" ? this.t.ci.mDue : this.t.ci.mOpenDue, this.when(s.due));
    },
    markClass(s) { return { done: s.status === "done", skip: s.status === "skipped" }; },
    dot(result) { return { SUCCESS: "", FAILURE: "f", ABORTED: "f", UNSTABLE: "u", RUNNING: "r" }[result] ?? "n"; },
    meta(b) {
      const parts = [this.when(b.at)];
      if (b.result !== "RUNNING" && b.seconds) { parts.push(this.dur(b.seconds)); }
      const env = b.params.TARGET || b.params.target_environment;
      if (env) { parts.push(env); }
      if (b.by) { parts.push(this.t.ci.by[b.by]); }
      if (b.other && b.other.length) { parts.push(fmt(this.t.ci.other, b.other.join(", "))); }
      return parts.join(" · ");
    },
    diffText(x) { return fmt(this.t.ci.planSays, x.name, x.build === null ? this.t.ci.missing : x.build, x.plan); },
    icon(kind) { return CI_ICON[kind] || "i"; },
    lastBuild(s) { const a = s.actions.find((x) => x.builds.length); return a ? a.builds[0] : null; },
    elapsed(b) { return Math.max(0, Math.round((Date.now() - new Date(b.at).getTime()) / 1000)); },
    share(b) { return b.estimate ? Math.min(100, Math.round((100 * this.elapsed(b)) / b.estimate)) : 50; },
    note(j) {
      if (!j.read) { return this.t.ci.notRead; }
      if (!j.last) { return this.t.ci.noBuilds; }
      if (j.fails) { return j.fail_envs.length ? fmt(this.t.ci.failsOn, j.fails, j.fail_envs.join(", ")) : fmt(this.t.ci.fails, j.fails); }
      if (j.slow) { return fmt(this.t.ci.slow, this.dur(j.last_seconds), this.dur(j.median)); }
      return "";
    },
    openStep(s) { this.$emit("open-step", { version: this.cur.version, step: s.id }); },
    async markDone(s) {
      const builds = s.actions.filter((a) => a.builds.length).map((a) => this.leaf(a.job) + " #" + a.builds[0].number);
      this.busy = true;
      try {
        const response = await fetch("/api/mark", { method: "POST", headers: { "Content-Type": "application/json", "X-Stellwerk": "1" },
          body: JSON.stringify({ version: this.cur.version, step: s.id, status: "done", note: fmt(this.t.ci.markNote, builds.join(", ")) }) });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) { throw new Error(data.error || String(response.status)); }
        this.$emit("changed");
        await this.load();
      } catch (error) { this.failed = String(error.message || error); }
      this.busy = false;
    },
  },
  template: `
<div class="ci">
  <div class="ci-bar">
    <div v-if="releases.length > 1" class="seg" role="group" :aria-label="t.ci.release">
      <button v-for="r in releases" :key="r.version" type="button" :aria-pressed="cur && cur.version === r.version ? 'true' : 'false'" @click="pick = r.version">{{ r.version }}</button>
    </div>
    <span v-if="d && d.freeze" class="ci-freeze"><i class="wl" :class="{ y: d.freeze.frozen }"></i>{{ fmt(d.freeze.frozen ? t.ci.freezeOn : t.ci.freezeOff, when(d.freeze.since)) }} · CodeFreezer #{{ d.freeze.number }}</span>
    <span class="ci-read">
      <span v-if="view && view.pending">{{ t.ci.reading }}</span>
      <span v-else-if="d && d.read_at">{{ fmt(t.ci.read, d.read_at.slice(11, 16)) }}</span>
      <button class="btn xs" type="button" :disabled="!!(view && view.pending)" @click="load(true)">{{ t.ci.refresh }}</button>
    </span>
  </div>
  <p v-if="problem" class="ci-err">{{ fmt(t.ci.error, problem) }}</p>
  <section v-if="d && !d.configured" class="w"><p class="dim">{{ t.ci.noJenkins }}</p></section>
  <p v-else-if="!d" class="boot">{{ t.ci.reading }}</p>
  <p v-else-if="!cur" class="dim">{{ t.ci.noRelease }}</p>
  <template v-else>
    <section class="w">
      <div class="wh"><h2>{{ fmt(t.ci.title, cur.version) }}</h2>
        <div class="ci-sum"><span v-for="c in counts" :key="c.kind" class="pill" :class="'ci-k-' + c.kind">{{ c.n }} {{ t.ci.kinds[c.kind] }}</span></div></div>
      <p class="ci-sub">{{ t.ci.sub }}</p>
      <div class="ci-pipe">
        <div v-for="p in cur.phases" :key="p.id" class="ci-phase">
          <div class="ci-phase-h">{{ lang === "ru" ? p.ru : p.en }} <span>{{ span(p) }}</span></div>
          <div v-for="s in p.steps.map((id) => byId[id])" :key="s.id" class="ci-node" :class="'ci-' + s.kind">
            <div class="ci-nh"><button type="button" class="ci-t" @click="openStep(s)">{{ title(s) }}</button><span class="ci-mark" :class="markClass(s)">{{ markText(s) }}</span></div>
            <div class="ci-jobs">
              <template v-for="(a, i) in s.actions" :key="i">
                <div v-for="b in a.builds" :key="b.number" class="ci-job"><i class="ci-s" :class="dot(b.result)"></i>
                  <a class="mono" :href="b.url" target="_blank" rel="noopener">{{ leaf(a.job) }} #{{ b.number }}</a><span class="ci-meta">{{ meta(b) }}</span></div>
                <div v-if="!a.builds.length" class="ci-job"><i class="ci-s n"></i><span class="mono">{{ leaf(a.job) }}</span>
                  <span class="ci-meta">{{ a.only_if ? fmt(t.ci.onlyIf, a.only_if) : t.ci.notRun }}</span></div>
                <span v-for="x in a.differ" :key="x.name" class="ci-diff">{{ diffText(x) }}</span>
              </template>
            </div>
            <span v-if="t.ci.flags[s.kind]" class="ci-flag">{{ t.ci.flags[s.kind] }}</span>
          </div>
        </div>
      </div>
    </section>
    <div class="ci-two">
      <section class="w">
        <div class="wh"><h2>{{ t.ci.checkH }}</h2><span class="dim small">{{ finds.length ? fmt(t.ci.toLook, finds.length) : "" }}</span></div>
        <p v-if="!finds.length" class="dim">{{ t.ci.nothing }}</p>
        <div class="ci-finds">
          <div v-for="s in finds" :key="s.id" class="ci-find" :class="'ci-' + s.kind"><span class="ic" aria-hidden="true">{{ icon(s.kind) }}</span>
            <div><b>{{ title(s) }}</b> · {{ markText(s) }}
              <p>{{ t.ci.flags[s.kind] }}<template v-for="(a, i) in s.actions" :key="i"><span v-for="x in a.differ" :key="x.name"> · {{ diffText(x) }}</span></template></p></div>
            <div class="btn-row">
              <button v-if="why" class="btn xs" type="button" @click="$emit('why', { kind: 'cicd', version: cur.version, step: s.id })"><span aria-hidden="true">✦</span> {{ t.cs.why }}</button>
              <button v-if="s.kind === 'unmarked'" class="btn xs pri" type="button" :disabled="busy" @click="markDone(s)">{{ t.ci.markDone }}</button>
              <button class="btn xs" type="button" @click="openStep(s)">{{ t.ci.openStep }}</button>
              <a v-if="lastBuild(s)" class="btn xs" :href="lastBuild(s).url" target="_blank" rel="noopener">{{ fmt(t.ci.build, lastBuild(s).number) }}</a>
            </div>
          </div>
        </div>
        <details v-if="agree.length" class="ci-agree"><summary>{{ fmt(t.ci.agreeN, agree.length) }}</summary>
          <ul><li v-for="s in agree" :key="s.id">{{ title(s) }}</li></ul></details>
      </section>
      <section class="w">
        <div class="wh"><h2>{{ t.ci.runH }}</h2><span class="dim small">{{ t.ci.runSub }}</span></div>
        <div class="ci-run">
          <div v-for="b in d.running" :key="b.job + b.number" class="ci-run-i">
            <div class="ci-run-l"><a class="mono" :href="b.url" target="_blank" rel="noopener">{{ leaf(b.job) }} #{{ b.number }}</a><span class="dim">{{ fmt(t.ci.ofMin, dur(elapsed(b)), dur(b.estimate)) }}</span></div>
            <div class="ci-prog"><i :style="{ width: share(b) + '%' }"></i></div><span class="dim small">{{ meta(b) }}</span></div>
          <div v-for="(q, i) in d.queue" :key="'q' + i" class="ci-run-i">
            <div class="ci-run-l"><span class="mono">{{ leaf(q.job) }}</span><span class="dim">{{ fmt(t.ci.queued, when(q.since)) }}</span></div>
            <div class="ci-prog q"><i></i></div><span class="dim small">{{ q.why }}</span></div>
          <p v-if="!d.running.length && !d.queue.length" class="dim small">{{ t.ci.idleRun }}</p>
          <p class="dim small">{{ t.ci.followNote }}</p>
        </div>
      </section>
    </div>
    <section class="w">
      <div class="wh"><h2>{{ t.ci.jobsH }}</h2><span class="dim small">{{ t.ci.jobsSub }}</span></div>
      <div class="ci-scroll">
        <table class="ci-tbl">
          <thead><tr><th v-for="c in t.ci.cols" :key="c">{{ c }}</th></tr></thead>
          <tbody>
            <tr v-for="j in d.jobs" :key="j.job" :class="{ hot: j.fails, warn: !j.fails && j.slow }">
              <td class="mono" :title="j.job">{{ leaf(j.job) }}</td>
              <td class="dim">{{ j.steps.join(", ") }}</td>
              <td><template v-if="j.last"><i class="ci-s" :class="dot(j.last.result)"></i> <a :href="j.last.url" target="_blank" rel="noopener">#{{ j.last.number }}</a> · {{ when(j.last.at) }}</template></td>
              <td><span class="ci-ten"><i v-for="(r, i) in j.ten || []" :key="i" :class="dot(r)" :title="r"></i></span></td>
              <td>{{ j.read ? dur(j.median) + " / " + dur(j.last_seconds) : "" }}</td>
              <td>{{ note(j) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </template>
</div>`,
};

const RG_KINDS = ["main", "service_pack"];

export const RegressionView = {
  name: "RegressionView",
  props: ["t", "lang", "why"],
  emits: ["open-step", "changed", "why"],
  data() { return { view: null, failed: "", timer: null, tick: null, sel: "", tests: null, testsBusy: false, testsError: "", busy: false }; },
  computed: {
    d() { return this.view && this.view.data; },
    problem() { return this.failed || (this.view && this.view.error) || (this.d && this.d.error) || ""; },
    kinds() { return RG_KINDS; },
    tileOf() { const m = {}; for (const x of this.d ? this.d.tiles || [] : []) { m[x.team + "|" + x.kind] = x; } return m; },
    selTile() { return this.sel ? this.tileOf[this.sel] || null : null; },
    hours() { return [0, 3, 6, 9, 12, 15, 18, 21, 24]; },
  },
  mounted() { this.load(); this.tick = setInterval(() => this.load(), 60000); },
  unmounted() { clearTimeout(this.timer); clearInterval(this.tick); },
  methods: {
    fill, fmt,
    async load(force) {
      try {
        const response = force
          ? await fetch("/api/regression/refresh", { method: "POST", headers: { "Content-Type": "application/json", "X-Stellwerk": "1" }, body: "{}" })
          : await fetch("/api/regression");
        const data = await response.json();
        if (!response.ok) { throw new Error(data.error || String(response.status)); }
        this.view = data;
        this.failed = "";
        clearTimeout(this.timer);
        if (data.pending) { this.timer = setTimeout(() => this.load(), 3000); }
      } catch (error) { this.failed = String(error.message || error); }
    },
    when(iso) { return iso ? fmtDate(iso.slice(0, 10), this.lang) + (iso.length > 10 ? " " + iso.slice(11, 16) : "") : ""; },
    clock(iso) { return iso ? iso.slice(11, 16) : ""; },
    pct(value) { return value === null || value === undefined ? "—" : String(value); },
    num(n) { return Number(n || 0).toLocaleString(this.lang === "ru" ? "ru-RU" : "de-CH"); },
    bar(p) { return Math.max(3, Math.min(28, Math.round(((p === null || p === undefined ? 90 : p) - 90) * 2.6) + 2)) + "px"; },
    tileClass(x) { return [x ? "rg-" + x.state : "rg-idle", { stale: x && x.stale, sel: x && this.sel === x.team + "|" + x.kind }]; },
    colText(c) {
      if (!c.version) { return this.t.rg.noRelease; }
      const parts = [];
      if (c.product_bug) { parts.push(fmt(this.t.rg.nBugs, c.product_bug)); }
      if (c.to_investigate) { parts.push(fmt(this.t.rg.nInvestigate, c.to_investigate)); }
      if (c.stale) { parts.push(fmt(this.t.rg.nStale, c.stale)); }
      if (c.missing) { parts.push(fmt(this.t.rg.nMissing, c.missing)); }
      return parts.length ? parts.join(" · ") : this.t.rg.green;
    },
    colClass(c) { return c.product_bug ? "hot" : c.to_investigate || c.stale || c.missing ? "warn" : "ok"; },
    defects(x) { const d = (x.last || {}).defects || {}; return ["product_bug", "to_investigate", "system_issue", "automation_bug"].filter((k) => d[k]).map((k) => ({ k, n: d[k] })); },
    findText(f) {
      const where = f.team ? f.team + " · " + (this.d.columns[f.column] || {}).title + ": " : "";
      if (f.kind === "smoke_red") { return fmt(this.t.rg.fSmoke, this.clock(f.since)); }
      if (f.kind === "product_bug") { return where + fmt(this.t.rg.fBug, f.n) + (f.tickets && f.tickets.length ? " · " + f.tickets.join(", ") : ""); }
      if (f.kind === "to_investigate") { return where + fmt(this.t.rg.fInvestigate, f.n); }
      if (f.kind === "stale") { return where + fmt(this.t.rg.fStale, this.when(f.at)); }
      return where + fmt(this.t.rg.fMissing, f.name, f.attribute || "—");
    },
    findIcon(f) { return { hot: "!", warn: "▲", idle: "i" }[f.level]; },
    pick(x) {
      if (!x || !x.last) { return; }
      this.sel = x.team + "|" + x.kind;
      this.loadTests(x);
    },
    async loadTests(x) {
      this.tests = null;
      this.testsError = "";
      this.testsBusy = true;
      try {
        const response = await fetch("/api/regression/failed", { method: "POST", headers: { "Content-Type": "application/json", "X-Stellwerk": "1" },
          body: JSON.stringify({ team: x.team, kind: x.kind }) });
        const data = await response.json();
        if (!response.ok) { throw new Error(data.error || String(response.status)); }
        this.tests = data;
      } catch (error) { this.testsError = String(error.message || error); }
      this.testsBusy = false;
    },
    dayLeft(iso) { const h = Number(iso.slice(11, 13)), m = Number(iso.slice(14, 16)); return ((h * 60 + m) / 1440 * 100).toFixed(2) + "%"; },
    redStyle(r) { const a = parseFloat(this.dayLeft(r.from)), b = parseFloat(this.dayLeft(r.to)); return { left: a + "%", width: Math.max(0.6, b - a) + "%" }; },
    stepText(s) {
      if (!s.column) { return this.t.rg.notInFlight; }
      const c = this.d.columns[s.column];
      const smoke = this.d.smoke ? " · " + fmt(this.t.rg.smokeN, this.d.smoke.green, this.d.smoke.count) : "";
      return c.title + " " + c.version + ": " + this.colText(c) + smoke;
    },
    markText(s) {
      if (s.status === "done") { return this.t.ci.mDone.replace("{0}", "").trim(); }
      if (s.status === "skipped") { return this.t.ci.mSkipped; }
      return s.due ? fmt(this.t.ci.mOpenDue, this.when(s.due)) : this.t.ci.mOpen;
    },
    async markDone(s) {
      this.busy = true;
      try {
        const response = await fetch("/api/mark", { method: "POST", headers: { "Content-Type": "application/json", "X-Stellwerk": "1" },
          body: JSON.stringify({ version: s.version, step: s.id, status: "done", note: fmt(this.t.rg.markNote, this.stepText(s)) }) });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) { throw new Error(data.error || String(response.status)); }
        this.$emit("changed");
        await this.load();
      } catch (error) { this.failed = String(error.message || error); }
      this.busy = false;
    },
    openStep(s) { this.$emit("open-step", { version: s.version, step: s.id }); },
  },
  template: `
<div class="rg">
  <div class="rg-bar">
    <template v-if="d && d.configured">
      <span v-for="k in kinds" :key="k"><i class="wl" :class="{ y: colClass(d.columns[k]) === 'warn', r: colClass(d.columns[k]) === 'hot' }"></i><b>{{ d.columns[k].title }}</b> {{ d.columns[k].version ? "→ " + d.columns[k].version : t.rg.noRelease }}</span>
      <span v-if="d.smoke"><i class="wl" :class="{ r: d.smoke.now_ok === false }"></i><b>{{ t.rg.smoke }}</b> {{ d.smoke.now_ok === false ? t.rg.red : d.smoke.count ? t.rg.green : t.rg.noRunToday }}</span>
    </template>
    <span class="rg-read">
      <span v-if="view && view.pending">{{ t.rg.reading }}</span>
      <span v-else-if="d && d.read_at">{{ fmt(t.rg.read, d.read_at.slice(11, 16)) }}</span>
      <button class="btn xs" type="button" :disabled="!!(view && view.pending)" @click="load(true)">{{ t.ci.refresh }}</button>
    </span>
  </div>
  <p v-if="problem" class="ci-err">{{ fmt(t.rg.error, problem) }}</p>
  <section v-if="d && !d.configured" class="w"><p class="dim">{{ t.rg.notConfigured }}</p></section>
  <p v-else-if="!d" class="boot">{{ t.rg.reading }}</p>
  <template v-else>
    <section class="w">
      <div class="wh"><h2>{{ t.rg.byTeam }}</h2><span class="dim small">{{ t.rg.byTeamSub }}</span></div>
      <p class="ci-sub">{{ fmt(t.rg.byTeamText, d.stale_hours) }}</p>
      <div class="rg-matrix">
        <span class="rg-corner"></span>
        <div v-for="k in kinds" :key="k" class="rg-colh">{{ d.columns[k].title }}
          <span>{{ d.columns[k].version }}<template v-if="d.columns[k].attribute"> · {{ d.columns[k].attribute }}</template> · <b :class="'rg-c-' + colClass(d.columns[k])">{{ colText(d.columns[k]) }}</b></span></div>
        <template v-for="team in d.teams" :key="team">
          <span class="rg-team">{{ team }}</span>
          <template v-for="k in kinds" :key="k">
            <button v-if="tileOf[team + '|' + k]" type="button" class="rg-tile" :class="tileClass(tileOf[team + '|' + k])" @click="pick(tileOf[team + '|' + k])">
              <span class="rg-kind">{{ d.columns[k].title }} · {{ d.columns[k].version }}</span>
              <template v-if="tileOf[team + '|' + k].last">
                <span class="rg-pct">{{ pct(tileOf[team + '|' + k].last.pct) }}<small>%</small></span>
                <span class="rg-launch"><span class="mono">{{ tileOf[team + '|' + k].last.name }} #{{ tileOf[team + '|' + k].last.number }}</span> · {{ when(tileOf[team + '|' + k].last.at) }}</span>
                <span class="rg-spark" aria-hidden="true"><i v-for="(p, i) in tileOf[team + '|' + k].trend" :key="i" :class="'rg-b-' + p.state" :style="{ height: bar(p.pct) }"></i></span>
                <span class="rg-launch">{{ fmt(t.rg.counts, num(tileOf[team + '|' + k].last.total), num(tileOf[team + '|' + k].last.passed), num(tileOf[team + '|' + k].last.failed)) }}</span>
                <span class="rg-chips">
                  <span v-for="c in defects(tileOf[team + '|' + k])" :key="c.k" class="rg-chip" :class="c.k">{{ c.n }} {{ t.rg.defect[c.k] }}</span>
                  <span v-if="!defects(tileOf[team + '|' + k]).length" class="rg-chip ok">{{ t.rg.allPassed }}</span>
                  <span v-if="tileOf[team + '|' + k].tickets.length" class="rg-chip product_bug">{{ tileOf[team + '|' + k].tickets.join(", ") }}</span>
                </span>
                <span v-if="tileOf[team + '|' + k].stale" class="rg-age">{{ fmt(t.rg.staleSince, when(tileOf[team + '|' + k].last.at)) }}</span>
              </template>
              <span v-else-if="tileOf[team + '|' + k].state === 'idle'" class="rg-none">{{ t.rg.noRelease }}</span>
              <span v-else class="rg-none">{{ tileOf[team + '|' + k].error || fmt(t.rg.noLaunch, tileOf[team + '|' + k].name, tileOf[team + '|' + k].attribute || "—") }}</span>
            </button>
          </template>
        </template>
      </div>
    </section>

    <section v-if="d.smoke" class="w">
      <div class="wh"><h2>{{ t.rg.smokeH }}</h2><span class="dim small">{{ t.rg.smokeSub }}</span></div>
      <div class="rg-smoke-now">
        <span><i class="wl" :class="{ r: d.smoke.now_ok === false }" style="display: inline-block"></i> <b>{{ d.smoke.now_ok === false ? t.rg.red : t.rg.green }}</b><template v-if="d.smoke.count"> · {{ fmt(t.rg.lastRun, clock(d.smoke.runs[d.smoke.runs.length - 1].at)) }}</template></span>
        <span>{{ d.smoke.count ? fmt(t.rg.smokeN, d.smoke.green, d.smoke.count) : t.rg.noRunToday }}</span>
        <span v-for="(r, i) in d.smoke.red" :key="i" class="rg-c-hot">{{ fmt(t.rg.redFromTo, clock(r.from), r.open ? t.rg.now : clock(r.to)) }}</span>
      </div>
      <div class="rg-day" role="img" :aria-label="t.rg.smokeH">
        <span v-for="h in hours" :key="h" class="hr" :style="{ left: (h / 24 * 100) + '%' }"><span>{{ String(h).padStart(2, "0") }}</span></span>
        <span v-for="(r, i) in d.smoke.red" :key="'r' + i" class="bad" :style="redStyle(r)"></span>
        <a v-for="r in d.smoke.runs" :key="r.id" class="run" :class="{ f: !r.ok, req: r.on_request }" :style="{ left: dayLeft(r.at) }"
           :href="d.ui + '/' + r.id" target="_blank" rel="noopener" :title="clock(r.at) + ' · #' + r.number + ' · ' + (r.ok ? t.rg.green : fmt(t.rg.failedN, r.failed)) + (r.on_request ? ' · ' + t.rg.onRequest : '')"></a>
      </div>
      <div class="rg-legend"><span><i></i>{{ t.rg.lgGreen }}</span><span><i class="f"></i>{{ t.rg.red }}</span><span><i class="req"></i>{{ t.rg.onRequest }}</span></div>
    </section>

    <div class="ci-two">
      <section class="w">
        <div class="wh"><h2>{{ t.rg.lookH }}</h2><span class="dim small">{{ d.findings.length ? fmt(t.ci.toLook, d.findings.length) : "" }}</span></div>
        <p v-if="!d.findings.length" class="dim">{{ t.rg.nothing }}</p>
        <div class="ci-finds">
          <div v-for="(f, i) in d.findings" :key="i" class="ci-find" :class="{ 'ci-differ': f.level === 'hot', 'ci-failed': f.level === 'warn' }"><span class="ic" aria-hidden="true">{{ findIcon(f) }}</span>
            <div><b>{{ findText(f) }}</b></div>
            <div class="btn-row"><button v-if="why && f.level !== 'idle'" class="btn xs" type="button" @click="$emit('why', f.kind === 'smoke_red' ? { kind: 'smoke' } : { kind: 'regression', team: f.team, column: f.column })"><span aria-hidden="true">✦</span> {{ t.cs.why }}</button><button v-if="f.team && tileOf[f.team + '|' + f.column] && tileOf[f.team + '|' + f.column].last" class="btn xs" type="button" @click="pick(tileOf[f.team + '|' + f.column])">{{ t.rg.showTests }}</button></div>
          </div>
        </div>
      </section>
      <section class="w">
        <div class="wh"><h2>{{ t.rg.stepsH }}</h2></div>
        <p v-if="!d.steps.length" class="dim">{{ t.rg.noSteps }}</p>
        <div class="rg-steps">
          <div v-for="s in d.steps" :key="s.version + s.id" class="rg-step">
            <button type="button" class="ci-t" @click="openStep(s)">{{ s.version }} · {{ (lang === "ru" && s.ru) || s.en }}</button>
            <span class="ci-mark" :class="{ done: s.status === 'done' }">{{ markText(s) }}</span>
            <p>{{ stepText(s) }}</p>
            <div v-if="s.ready && s.status !== 'done' && s.status !== 'skipped'" class="btn-row"><button class="btn xs pri" type="button" :disabled="busy" @click="markDone(s)">{{ t.ci.markDone }}</button></div>
          </div>
        </div>
      </section>
    </div>

    <section v-if="selTile" class="w">
      <div class="wh"><h2>{{ fmt(t.rg.testsH, selTile.team, d.columns[selTile.kind].title, selTile.last.number) }}</h2>
        <div class="btn-row"><a v-if="tests && tests.url" class="btn xs" :href="tests.url" target="_blank" rel="noopener">ReportPortal ↗</a>
          <button class="btn xs" type="button" @click="sel = ''">{{ t.close }}</button></div></div>
      <p v-if="testsBusy" class="dim">{{ t.rg.reading }}</p>
      <p v-else-if="testsError" class="ci-err">{{ fmt(t.rg.error, testsError) }}</p>
      <p v-else-if="tests && !tests.tests.length" class="dim">{{ t.rg.noFailed }}</p>
      <div v-else-if="tests" class="ci-scroll">
        <table class="ci-tbl">
          <thead><tr><th v-for="c in t.rg.cols" :key="c">{{ c }}</th></tr></thead>
          <tbody>
            <tr v-for="(x, i) in tests.tests" :key="i">
              <td><span class="dim">{{ x.path.join(" › ") }}{{ x.path.length ? " › " : "" }}</span>{{ x.name }}</td>
              <td><span class="rg-chip" :class="x.defect">{{ t.rg.defect[x.defect] || x.defect }}</span></td>
              <td>{{ x.new ? t.rg.isNew : "" }}</td>
              <td><template v-for="(k, j) in x.tickets" :key="j"><a :href="k.url" target="_blank" rel="noopener" class="mono">{{ k.key }}</a> </template><span class="dim">{{ x.comment }}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </template>
</div>`,
};

for (const component of [HelpTip, StepCard, CommitTimeline, TrendChart, LineChart, FilesPreview]) {
  useRender(component.name, component);
}
useRender(CicdView.name, CicdView);
useRender(RegressionView.name, RegressionView);
