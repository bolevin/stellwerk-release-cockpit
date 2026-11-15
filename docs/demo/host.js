/* Stellwerk, the hosted live demo. There is no server behind this page: this file answers what the page asks its
   server, from data.json, a recording of the demo world (Atlas Core, a made-up platform). The clock stands on the
   morning of the demo world. Nothing you click changes anything or is sent anywhere. */
"use strict";
(() => {
  const RealDate = Date, SHIFT = new RealDate(2026, 10, 18, 10, 40, 0).getTime() - RealDate.now();
  function DemoDate(...args) {
    if (!new.target) { return new RealDate(RealDate.now() + SHIFT).toString(); }
    return args.length ? new RealDate(...args) : new RealDate(RealDate.now() + SHIFT);
  }
  DemoDate.prototype = RealDate.prototype;
  DemoDate.now = () => RealDate.now() + SHIFT;
  DemoDate.parse = RealDate.parse;
  DemoDate.UTC = RealDate.UTC;
  window.Date = DemoDate;

  const REPO = "https://github.com/bolevin/stellwerk-release-cockpit";
  const WRITE = "This is the live demo with made-up data, so nothing is changed or sent. In Stellwerk this button shows " +
    "the exact request first (a dry run), and it is sent only when you confirm it.";
  const NO_CASE = "This investigation is not in the recording of the demo. Try Why? on the red Billing or Routing tile " +
    "(Regression), or Prepare the gate on the Cockpit.";
  const NO_ANSWER = "This demo has no model behind it, so I can only answer what was recorded. Try “What is left for " +
    "5.15.0 before the PROD night?”, “Where do the releases stand?”, or the short commands status, today and next. " +
    "In Stellwerk the agent reads the checklist and the systems through its tools for every question.";
  const real = window.fetch.bind(window);
  /* The recording was made at UTC+3; times given as epoch milliseconds move to the visitor's zone, so 03:10 stays 03:10. */
  const ZONE = (180 + new RealDate(2026, 10, 18).getTimezoneOffset()) * 60000;
  const data = real(new URL("data.json", document.currentScript.src)).then((r) => r.text())
    .then((text) => JSON.parse(ZONE ? text.replace(/\b1(?:7[7-9]|80)\d{10}\b/g, (n) => String(+n + ZONE)) : text));
  const turns = {};
  const wait = (ms) => new Promise((done) => setTimeout(done, ms));
  const answer = (status, body) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
  const canon = (text) => {
    try {
      const body = JSON.parse(text || "{}");
      if (body && typeof body === "object" && !Array.isArray(body)) {
        delete body.chat;
        const sorted = {};
        Object.keys(body).sort().forEach((k) => { sorted[k] = body[k]; });
        return JSON.stringify(sorted);
      }
      return JSON.stringify(body);
    } catch (e) { return String(text); }
  };

  window.fetch = async (input, init) => {
    const options = init || {};
    const url = new URL(typeof input === "string" ? input : input.url, location.href);
    const at = url.pathname.indexOf("/api/");
    if (at < 0) { return real(input, init); }
    const path = url.pathname.slice(at), full = path + url.search;
    const method = (options.method || "GET").toUpperCase();
    const d = await data;
    await wait(120);
    if (method === "GET") {
      if (d.seq[full]) {
        const n = turns[full] || 0, list = d.seq[full];
        turns[full] = n + 1;
        const [status, body] = list[Math.min(n, list.length - 1)];
        return answer(status, body);
      }
      if (d.get[full]) { return answer(d.get[full][0], d.get[full][1]); }
      const same = Object.keys(d.get).filter((k) => k.split("?")[0] === path).pop();
      if (same) { return answer(d.get[same][0], d.get[same][1]); }
      return answer(404, { error: "This part is not in the live demo." });
    }
    const body = typeof options.body === "string" ? options.body : "";
    if (path === "/api/command") {
      const text = (JSON.parse(body || "{}").text || "").trim().toLowerCase();
      const found = d.ask[text];
      if (found) {
        if (found[1].by === "agent") { await wait(1800); }
        return answer(found[0], found[1]);
      }
      await wait(900);
      return answer(200, { by: "agent", reply: NO_ANSWER, items: [], proposals: [] });
    }
    const exact = d.post[path + " " + canon(body)];
    if (exact) { return answer(exact[0], exact[1]); }
    if (path === "/api/case/start") { return answer(400, { error: NO_CASE }); }
    if (/\/refresh$|^\/api\/status\/read$|^\/api\/briefing\/write$/.test(path) && d.post[path]) {
      return answer(d.post[path][0], d.post[path][1]);
    }
    return answer(400, { error: WRITE });
  };

  /* A pill at the bottom on a wide screen; on a phone a thin strip above the page, so it covers no buttons. */
  const pill = () => {
    const style = document.createElement("style");
    style.textContent = ".demo-pill{position:fixed;left:50%;bottom:10px;transform:translateX(-50%);z-index:9999;padding:6px 14px;" +
      "border-radius:999px;background:rgba(24,33,30,.88);color:#F2C14C;font:600 12px/1.2 system-ui,sans-serif;" +
      "text-decoration:none;box-shadow:0 2px 10px rgba(0,0,0,.25);white-space:nowrap}" +
      "@media (max-width:699px){.demo-pill{position:static;display:block;transform:none;border-radius:0;box-shadow:none;" +
      "background:#18211E;white-space:normal;text-align:center;padding:7px 12px;font-size:11.5px}}";
    style.textContent += ".fade-r{-webkit-mask-image:linear-gradient(to right,#000 calc(100% - 40px),transparent);" +
      "mask-image:linear-gradient(to right,#000 calc(100% - 40px),transparent)}" +
      ".fade-l{-webkit-mask-image:linear-gradient(to left,#000 calc(100% - 40px),transparent);" +
      "mask-image:linear-gradient(to left,#000 calc(100% - 40px),transparent)}" +
      ".fade-l.fade-r{-webkit-mask-image:linear-gradient(to right,transparent,#000 40px,#000 calc(100% - 40px),transparent);" +
      "mask-image:linear-gradient(to right,transparent,#000 40px,#000 calc(100% - 40px),transparent)}";
    document.head.appendChild(style);
    const a = document.createElement("a");
    a.className = "demo-pill";
    a.href = REPO;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = "Live demo · made-up data · nothing is saved · about Stellwerk ↗";
    document.body.insertBefore(a, document.body.firstChild);
  };
  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", pill); } else { pill(); }

  /* On a narrow screen the release line and the calendar are wider than the phone and scroll sideways in their box:
     each one turns to what matters (the selected train, today) when it appears or the selection changes, and its
     edges fade where there is more to see. A box the visitor scrolled is left where they put it. */
  const SCROLLERS = ".rail-wrap, .cal-wrap, .mn-map-wrap, .mtable-wrap, .ci-scroll";
  const centred = new WeakMap();
  const fades = (wrap) => {
    const more = wrap.scrollWidth - wrap.clientWidth;
    wrap.classList.toggle("fade-l", more > 2 && wrap.scrollLeft > 2);
    wrap.classList.toggle("fade-r", more > 2 && wrap.scrollLeft < more - 2);
  };
  const tick = () => {
    document.querySelectorAll(SCROLLERS).forEach((wrap) => {
      if (!wrap.dataset.demoScroll) {
        wrap.dataset.demoScroll = "1";
        wrap.addEventListener("scroll", () => fades(wrap), { passive: true });
      }
      if (wrap.scrollWidth > wrap.clientWidth + 2) {
        const target = wrap.matches(".rail-wrap") ? wrap.querySelector(".train.sel") : wrap.matches(".cal-wrap") ? wrap.querySelector(".today") : null;
        const key = target ? target.textContent + "|" + wrap.scrollWidth : "";
        if (target && centred.get(wrap) !== key) {
          centred.set(wrap, key);
          const w = wrap.getBoundingClientRect(), t = target.getBoundingClientRect();
          wrap.scrollLeft += t.left + t.width / 2 - (w.left + w.width / 2);
        }
      }
      fades(wrap);
    });
  };
  setInterval(tick, 400);
})();
