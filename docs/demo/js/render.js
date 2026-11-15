

window.StellwerkRender = (function (Vue) {
  const sources = {"root": "263ee6496a3a6aa3", "HelpTip": "91b9e7b1b3639444", "StepCard": "0f0da032e3bf0cd3", "CommitTimeline": "7757d6f4d061cdc7", "TrendChart": "16671edf1479de1e", "LineChart": "bba3d96055f414bf", "FilesPreview": "74bc85f3dee12aaa", "CicdView": "047efcc371c132b2", "RegressionView": "2013c32f6c9b2bcf", "ProcessView": "a23a6b469773c474"};
  const out = { sources };
  out["root"] = (function (Vue) {
const _Vue = Vue
const { createVNode: _createVNode, createElementVNode: _createElementVNode, createCommentVNode: _createCommentVNode, createTextVNode: _createTextVNode } = _Vue

const _hoisted_1 = ["title", "onClick"]
const _hoisted_2 = { class: "side-tab-t" }
const _hoisted_3 = { class: "top" }
const _hoisted_4 = ["title", "aria-label", "onClick"]
const _hoisted_5 = {
  class: "sig",
  "aria-hidden": "true"
}
const _hoisted_6 = ["aria-label"]
const _hoisted_7 = ["aria-pressed", "onClick"]
const _hoisted_8 = ["aria-pressed", "onClick"]
const _hoisted_9 = {
  key: 0,
  class: "badge"
}
const _hoisted_10 = ["aria-pressed", "onClick"]
const _hoisted_11 = ["aria-pressed", "onClick"]
const _hoisted_12 = ["aria-pressed", "onClick"]
const _hoisted_13 = ["aria-pressed", "onClick"]
const _hoisted_14 = ["aria-pressed", "onClick"]
const _hoisted_15 = ["aria-pressed", "onClick"]
const _hoisted_16 = ["aria-pressed", "title", "onClick"]
const _hoisted_17 = ["aria-pressed", "onClick"]
const _hoisted_18 = { class: "ai-t" }
const _hoisted_19 = { class: "pal" }
const _hoisted_20 = ["aria-expanded", "aria-label", "title", "onClick"]
const _hoisted_21 = {
  class: "swatch",
  "aria-hidden": "true"
}
const _hoisted_22 = ["aria-label", "onClick"]
const _hoisted_23 = ["aria-checked", "onClick"]
const _hoisted_24 = {
  class: "swatch",
  "aria-hidden": "true"
}
const _hoisted_25 = { class: "dim" }
const _hoisted_26 = { class: "pal-note" }
const _hoisted_27 = {
  key: 1,
  class: "clock mono"
}
const _hoisted_28 = ["aria-pressed", "aria-label", "title", "onClick"]
const _hoisted_29 = {
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}
const _hoisted_30 = {
  key: 0,
  d: "M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"
}
const _hoisted_31 = {
  key: 1,
  d: "M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"
}
const _hoisted_32 = ["aria-label"]
const _hoisted_33 = ["aria-pressed", "onClick"]
const _hoisted_34 = ["aria-pressed", "onClick"]
const _hoisted_35 = {
  key: 0,
  class: "badge"
}
const _hoisted_36 = ["aria-pressed", "onClick"]
const _hoisted_37 = ["aria-pressed", "onClick"]
const _hoisted_38 = { class: "tb-more" }
const _hoisted_39 = ["aria-pressed", "aria-expanded", "onClick"]
const _hoisted_40 = ["onClick"]
const _hoisted_41 = ["aria-pressed", "onClick"]
const _hoisted_42 = ["aria-pressed", "onClick"]
const _hoisted_43 = ["aria-pressed", "onClick"]
const _hoisted_44 = ["aria-pressed", "onClick"]
const _hoisted_45 = ["aria-pressed", "onClick"]
const _hoisted_46 = ["aria-pressed", "onClick"]
const _hoisted_47 = {
  key: 1,
  class: "banner",
  role: "alert"
}
const _hoisted_48 = ["aria-label"]
const _hoisted_49 = {
  key: 3,
  class: "banner",
  role: "alert"
}
const _hoisted_50 = ["onClick"]
const _hoisted_51 = {
  key: 4,
  class: "banner",
  role: "alert"
}
const _hoisted_52 = ["aria-label"]
const _hoisted_53 = { class: "side-top" }
const _hoisted_54 = { class: "lbl" }
const _hoisted_55 = ["aria-expanded", "onClick"]
const _hoisted_56 = ["title", "onClick"]
const _hoisted_57 = { class: "rcard" }
const _hoisted_58 = { class: "rh" }
const _hoisted_59 = ["title"]
const _hoisted_60 = {
  key: 0,
  class: "dim small rnote"
}
const _hoisted_61 = ["href", "title"]
const _hoisted_62 = ["title"]
const _hoisted_63 = ["href", "title"]
const _hoisted_64 = ["title"]
const _hoisted_65 = ["title"]
const _hoisted_66 = ["title"]
const _hoisted_67 = {
  key: 6,
  class: "exp bad"
}
const _hoisted_68 = {
  key: 2,
  class: "dim small rnote"
}
const _hoisted_69 = { class: "rcard" }
const _hoisted_70 = { class: "rh" }
const _hoisted_71 = {
  key: 0,
  class: "watch"
}
const _hoisted_72 = { class: "watch-h" }
const _hoisted_73 = {
  key: 0,
  class: "dim"
}
const _hoisted_74 = {
  key: 1,
  class: "dim"
}
const _hoisted_75 = ["onClick"]
const _hoisted_76 = {
  class: "al-ic",
  "aria-hidden": "true"
}
const _hoisted_77 = { class: "al-t" }
const _hoisted_78 = { key: 0 }
const _hoisted_79 = {
  key: 1,
  class: "dim small rnote"
}
const _hoisted_80 = ["onClick"]
const _hoisted_81 = {
  class: "al-ic",
  "aria-hidden": "true"
}
const _hoisted_82 = { class: "al-t" }
const _hoisted_83 = { key: 0 }
const _hoisted_84 = ["title", "aria-label", "onClick"]
const _hoisted_85 = {
  key: 2,
  class: "dim small rnote"
}
const _hoisted_86 = { class: "rcard" }
const _hoisted_87 = { class: "rh" }
const _hoisted_88 = ["href"]
const _hoisted_89 = ["href"]
const _hoisted_90 = { class: "bk-h" }
const _hoisted_91 = { class: "mono" }
const _hoisted_92 = { class: "bk-s" }
const _hoisted_93 = { class: "bk-m dim" }
const _hoisted_94 = { key: 0 }
const _hoisted_95 = {
  key: 0,
  class: "dim small rnote"
}
const _hoisted_96 = {
  key: 1,
  class: "cond small"
}
const _hoisted_97 = {
  key: 2,
  class: "dim small rnote"
}
const _hoisted_98 = {
  key: 6,
  class: "cockpit"
}
const _hoisted_99 = ["aria-label", "aria-busy"]
const _hoisted_100 = { class: "ix-ai-h" }
const _hoisted_101 = { class: "ix-lbl" }
const _hoisted_102 = ["disabled", "onClick"]
const _hoisted_103 = ["onClick"]
const _hoisted_104 = {
  key: 0,
  class: "banner",
  role: "alert"
}
const _hoisted_105 = { class: "ix-headline" }
const _hoisted_106 = { class: "brief-cols" }
const _hoisted_107 = { class: "ix-lbl" }
const _hoisted_108 = { key: 0 }
const _hoisted_109 = {
  key: 1,
  class: "dim small"
}
const _hoisted_110 = { class: "ix-lbl" }
const _hoisted_111 = { key: 0 }
const _hoisted_112 = {
  key: 1,
  class: "dim small"
}
const _hoisted_113 = { class: "ix-lbl" }
const _hoisted_114 = {
  key: 0,
  class: "brief-ready"
}
const _hoisted_115 = ["onClick"]
const _hoisted_116 = {
  key: 1,
  class: "dim small"
}
const _hoisted_117 = {
  key: 0,
  class: "ix-dropped"
}
const _hoisted_118 = { class: "mono" }
const _hoisted_119 = { class: "ix-reading" }
const _hoisted_120 = {
  key: 3,
  class: "brief-steps"
}
const _hoisted_121 = { class: "ix-foot" }
const _hoisted_122 = { key: 0 }
const _hoisted_123 = { key: 1 }
const _hoisted_124 = {
  key: 2,
  class: "ok"
}
const _hoisted_125 = ["aria-expanded", "onClick"]
const _hoisted_126 = {
  key: 1,
  class: "empty"
}
const _hoisted_127 = ["aria-label"]
const _hoisted_128 = { class: "strip-h" }
const _hoisted_129 = { class: "rail-wrap" }
const _hoisted_130 = ["title", "onClick"]
const _hoisted_131 = ["aria-pressed", "title", "onClick"]
const _hoisted_132 = { class: "tl" }
const _hoisted_133 = { class: "tv mono" }
const _hoisted_134 = { class: "ts" }
const _hoisted_135 = { class: "grid" }
const _hoisted_136 = { class: "col" }
const _hoisted_137 = { class: "w panel" }
const _hoisted_138 = { class: "wh" }
const _hoisted_139 = { class: "pill" }
const _hoisted_140 = { class: "ms-title" }
const _hoisted_141 = { class: "ms-when" }
const _hoisted_142 = { key: 0 }
const _hoisted_143 = {
  key: 0,
  class: "flap-pre"
}
const _hoisted_144 = {
  key: 1,
  class: "flap-pre"
}
const _hoisted_145 = {
  key: 0,
  class: "flap-sep"
}
const _hoisted_146 = { class: "flapcol" }
const _hoisted_147 = { class: "flap" }
const _hoisted_148 = { class: "flap-u" }
const _hoisted_149 = { class: "ms-btns" }
const _hoisted_150 = ["onClick"]
const _hoisted_151 = ["onClick"]
const _hoisted_152 = { class: "gng-h" }
const _hoisted_153 = { class: "dim" }
const _hoisted_154 = ["disabled", "onClick"]
const _hoisted_155 = {
  class: "gng-i",
  "aria-hidden": "true"
}
const _hoisted_156 = { class: "gng-l" }
const _hoisted_157 = { class: "gng-t" }
const _hoisted_158 = {
  key: 3,
  class: "st-line"
}
const _hoisted_159 = { class: "st-line-h" }
const _hoisted_160 = ["onClick"]
const _hoisted_161 = {
  key: 1,
  class: "ms-title"
}
const _hoisted_162 = { key: 2 }
const _hoisted_163 = { class: "lbl" }
const _hoisted_164 = { class: "gates" }
const _hoisted_165 = ["title", "onClick"]
const _hoisted_166 = { class: "ready" }
const _hoisted_167 = {
  class: "ring",
  viewBox: "0 0 62 62",
  "aria-hidden": "true"
}
const _hoisted_168 = ["stroke-dasharray"]
const _hoisted_169 = {
  x: "31",
  y: "36",
  "text-anchor": "middle"
}
const _hoisted_170 = { class: "big mono" }
const _hoisted_171 = { class: "dim" }
const _hoisted_172 = { class: "w today" }
const _hoisted_173 = { class: "wh" }
const _hoisted_174 = { class: "grp" }
const _hoisted_175 = { class: "mono" }
const _hoisted_176 = { class: "dim" }
const _hoisted_177 = { class: "rows" }
const _hoisted_178 = ["onClick"]
const _hoisted_179 = {
  class: "ri",
  "aria-hidden": "true"
}
const _hoisted_180 = { class: "rt" }
const _hoisted_181 = { class: "sr-only" }
const _hoisted_182 = { class: "rd mono" }
const _hoisted_183 = ["onClick"]
const _hoisted_184 = {
  key: 0,
  class: "empty"
}
const _hoisted_185 = { class: "col" }
const _hoisted_186 = { class: "w checklist" }
const _hoisted_187 = { class: "wh" }
const _hoisted_188 = { class: "toggle" }
const _hoisted_189 = ["onUpdate:modelValue"]
const _hoisted_190 = ["aria-label"]
const _hoisted_191 = ["aria-pressed", "onClick"]
const _hoisted_192 = { class: "mono" }
const _hoisted_193 = { class: "dim mono" }
const _hoisted_194 = { class: "sum" }
const _hoisted_195 = { class: "big mono" }
const _hoisted_196 = {
  key: 0,
  class: "pill p-overdue"
}
const _hoisted_197 = {
  key: 1,
  class: "pill p-today"
}
const _hoisted_198 = {
  key: 2,
  class: "dim"
}
const _hoisted_199 = ["aria-label"]
const _hoisted_200 = ["aria-pressed", "onClick"]
const _hoisted_201 = { class: "ph-n" }
const _hoisted_202 = { class: "sls" }
const _hoisted_203 = { class: "ph-c mono" }
const _hoisted_204 = { class: "rows" }
const _hoisted_205 = ["onClick"]
const _hoisted_206 = {
  class: "ri",
  "aria-hidden": "true"
}
const _hoisted_207 = { class: "rt" }
const _hoisted_208 = {
  key: 0,
  class: "tag"
}
const _hoisted_209 = {
  key: 1,
  class: "tag"
}
const _hoisted_210 = {
  key: 2,
  class: "tag"
}
const _hoisted_211 = ["title"]
const _hoisted_212 = { class: "sr-only" }
const _hoisted_213 = { class: "rd mono" }
const _hoisted_214 = {
  key: 0,
  class: "empty"
}
const _hoisted_215 = { class: "w journal" }
const _hoisted_216 = { class: "wh" }
const _hoisted_217 = {
  key: 0,
  class: "jrs"
}
const _hoisted_218 = { class: "jt mono" }
const _hoisted_219 = { class: "mono dim" }
const _hoisted_220 = {
  key: 0,
  class: "dim"
}
const _hoisted_221 = {
  key: 1,
  class: "empty"
}
const _hoisted_222 = {
  key: 7,
  class: "inbox"
}
const _hoisted_223 = { class: "qlist" }
const _hoisted_224 = { class: "wh" }
const _hoisted_225 = { class: "toggle" }
const _hoisted_226 = ["onUpdate:modelValue"]
const _hoisted_227 = { class: "grp" }
const _hoisted_228 = { class: "dim mono" }
const _hoisted_229 = ["aria-current"]
const _hoisted_230 = ["checked", "aria-label", "onChange"]
const _hoisted_231 = ["title", "onClick"]
const _hoisted_232 = { class: "mono qver" }
const _hoisted_233 = { class: "qtitle" }
const _hoisted_234 = { class: "mono qdue" }
const _hoisted_235 = {
  key: 0,
  class: "empty"
}
const _hoisted_236 = { class: "keys dim" }
const _hoisted_237 = ["aria-label"]
const _hoisted_238 = ["disabled", "onClick"]
const _hoisted_239 = ["onClick"]
const _hoisted_240 = { class: "qdetail" }
const _hoisted_241 = {
  key: 1,
  class: "empty"
}
const _hoisted_242 = {
  key: 8,
  class: "calendar"
}
const _hoisted_243 = { class: "w" }
const _hoisted_244 = { class: "wh" }
const _hoisted_245 = { class: "btn-row" }
const _hoisted_246 = ["onClick"]
const _hoisted_247 = ["onClick"]
const _hoisted_248 = ["onClick"]
const _hoisted_249 = ["href"]
const _hoisted_250 = ["onClick"]
const _hoisted_251 = {
  key: 0,
  class: "banner",
  role: "alert"
}
const _hoisted_252 = { class: "cal-filters" }
const _hoisted_253 = ["onUpdate:modelValue"]
const _hoisted_254 = ["checked", "onChange"]
const _hoisted_255 = { class: "mono" }
const _hoisted_256 = {
  key: 1,
  class: "cal-wrap"
}
const _hoisted_257 = { class: "cal-lab cal-corner" }
const _hoisted_258 = { class: "dim small" }
const _hoisted_259 = { class: "cal-top" }
const _hoisted_260 = { class: "cal-wd" }
const _hoisted_261 = { class: "cal-n mono" }
const _hoisted_262 = { class: "cal-lab" }
const _hoisted_263 = { class: "cal-v" }
const _hoisted_264 = { class: "mono" }
const _hoisted_265 = { class: "dim small" }
const _hoisted_266 = ["title", "aria-label", "disabled", "onClick"]
const _hoisted_267 = ["title"]
const _hoisted_268 = { class: "cal-lab" }
const _hoisted_269 = ["title"]
const _hoisted_270 = {
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_271 = {
  key: 0,
  class: "cal-low"
}
const _hoisted_272 = { class: "w" }
const _hoisted_273 = { class: "wh" }
const _hoisted_274 = {
  key: 0,
  class: "pill warn"
}
const _hoisted_275 = ["onClick"]
const _hoisted_276 = { class: "al-t" }
const _hoisted_277 = {
  key: 0,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_278 = { class: "w" }
const _hoisted_279 = { class: "wh" }
const _hoisted_280 = { class: "ag-d" }
const _hoisted_281 = { class: "ag-items" }
const _hoisted_282 = { class: "mono dim" }
const _hoisted_283 = ["disabled", "onClick"]
const _hoisted_284 = { class: "mono" }
const _hoisted_285 = { class: "ag-t" }
const _hoisted_286 = {
  key: 0,
  class: "dim"
}
const _hoisted_287 = {
  key: 0,
  class: "empty"
}
const _hoisted_288 = {
  key: 9,
  class: "insights"
}
const _hoisted_289 = { class: "ix-bar" }
const _hoisted_290 = ["aria-label"]
const _hoisted_291 = ["aria-pressed", "onClick"]
const _hoisted_292 = { class: "mono" }
const _hoisted_293 = { class: "dim small" }
const _hoisted_294 = {
  key: 0,
  type: "button",
  class: "tab",
  "aria-pressed": "true"
}
const _hoisted_295 = { class: "mono" }
const _hoisted_296 = { class: "dim small" }
const _hoisted_297 = ["aria-expanded", "onClick"]
const _hoisted_298 = { key: 0 }
const _hoisted_299 = { "aria-hidden": "true" }
const _hoisted_300 = { class: "ix-src" }
const _hoisted_301 = ["title"]
const _hoisted_302 = ["title"]
const _hoisted_303 = ["onClick"]
const _hoisted_304 = {
  key: 0,
  class: "banner",
  role: "alert"
}
const _hoisted_305 = {
  key: 1,
  class: "w"
}
const _hoisted_306 = { class: "empty" }
const _hoisted_307 = { class: "mon-setup" }
const _hoisted_308 = { class: "dim small ix-plain" }
const _hoisted_309 = { key: 0 }
const _hoisted_310 = {
  key: 2,
  id: "ins-archive",
  class: "w"
}
const _hoisted_311 = { class: "wh" }
const _hoisted_312 = ["onClick"]
const _hoisted_313 = {
  key: 0,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_314 = {
  key: 1,
  class: "mtable-wrap"
}
const _hoisted_315 = { class: "mtable" }
const _hoisted_316 = { class: "tx" }
const _hoisted_317 = { class: "tx" }
const _hoisted_318 = { class: "tx" }
const _hoisted_319 = { class: "tx" }
const _hoisted_320 = ["onClick"]
const _hoisted_321 = { class: "tx" }
const _hoisted_322 = { class: "tx" }
const _hoisted_323 = {
  key: 0,
  class: "ins-bad"
}
const _hoisted_324 = ["onSubmit"]
const _hoisted_325 = { for: "ins-other" }
const _hoisted_326 = ["onUpdate:modelValue", "placeholder"]
const _hoisted_327 = ["disabled"]
const _hoisted_328 = {
  key: 3,
  class: "ix-head"
}
const _hoisted_329 = { class: "ix-ver" }
const _hoisted_330 = { class: "mono" }
const _hoisted_331 = {
  key: 0,
  class: "pill"
}
const _hoisted_332 = { class: "ix-built" }
const _hoisted_333 = { key: 0 }
const _hoisted_334 = { key: 1 }
const _hoisted_335 = ["disabled", "onClick"]
const _hoisted_336 = {
  key: 0,
  class: "ix-sub"
}
const _hoisted_337 = { class: "mono" }
const _hoisted_338 = { key: 0 }
const _hoisted_339 = { key: 1 }
const _hoisted_340 = { key: 2 }
const _hoisted_341 = {
  key: 1,
  class: "banner",
  role: "alert"
}
const _hoisted_342 = {
  key: 0,
  class: "ix-warn"
}
const _hoisted_343 = ["aria-label", "aria-busy"]
const _hoisted_344 = { class: "ix-ai-h" }
const _hoisted_345 = { class: "ix-lbl" }
const _hoisted_346 = ["disabled", "onClick"]
const _hoisted_347 = ["onClick"]
const _hoisted_348 = { class: "ix-headline" }
const _hoisted_349 = { key: 0 }
const _hoisted_350 = {
  key: 0,
  class: "ix-lbl"
}
const _hoisted_351 = { class: "ix-do" }
const _hoisted_352 = {
  class: "ic",
  "aria-hidden": "true"
}
const _hoisted_353 = {
  key: 0,
  class: "ix-refs"
}
const _hoisted_354 = ["onClick"]
const _hoisted_355 = {
  key: 0,
  class: "ok"
}
const _hoisted_356 = {
  key: 1,
  class: "ix-dropped"
}
const _hoisted_357 = { class: "mono" }
const _hoisted_358 = { class: "ix-reading" }
const _hoisted_359 = {
  key: 2,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_360 = {
  key: 3,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_361 = {
  key: 4,
  class: "banner",
  role: "alert"
}
const _hoisted_362 = { class: "ix-foot" }
const _hoisted_363 = { key: 0 }
const _hoisted_364 = { key: 1 }
const _hoisted_365 = {
  key: 2,
  class: "ok"
}
const _hoisted_366 = {
  key: 3,
  class: "stale"
}
const _hoisted_367 = ["aria-expanded", "onClick"]
const _hoisted_368 = {
  key: 5,
  class: "ix-facts"
}
const _hoisted_369 = ["aria-label"]
const _hoisted_370 = { class: "ix-lbl" }
const _hoisted_371 = ["aria-label"]
const _hoisted_372 = ["title"]
const _hoisted_373 = { class: "ix-rc-cnt" }
const _hoisted_374 = { key: 0 }
const _hoisted_375 = { class: "ix-lbl" }
const _hoisted_376 = { class: "ix-er-row" }
const _hoisted_377 = ["title", "onClick"]
const _hoisted_378 = { class: "mono" }
const _hoisted_379 = {
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_380 = ["aria-label"]
const _hoisted_381 = { class: "ix-lbl" }
const _hoisted_382 = { class: "ix-stats" }
const _hoisted_383 = { class: "ix-stat-l" }
const _hoisted_384 = {
  key: 0,
  class: "of"
}
const _hoisted_385 = { class: "ix-stat-s" }
const _hoisted_386 = { class: "wh" }
const _hoisted_387 = {
  key: 0,
  class: "dim small"
}
const _hoisted_388 = {
  key: 0,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_389 = {
  key: 1,
  class: "ix-risks"
}
const _hoisted_390 = ["id"]
const _hoisted_391 = ["disabled", "aria-expanded", "onClick"]
const _hoisted_392 = { class: "ix-risk-t" }
const _hoisted_393 = {
  key: 0,
  class: "dim"
}
const _hoisted_394 = {
  class: "ix-chev",
  "aria-hidden": "true"
}
const _hoisted_395 = {
  key: 0,
  class: "ix-risk-body"
}
const _hoisted_396 = { key: 0 }
const _hoisted_397 = ["href"]
const _hoisted_398 = { key: 1 }
const _hoisted_399 = ["href"]
const _hoisted_400 = {
  key: 0,
  class: "pill hot"
}
const _hoisted_401 = {
  key: 1,
  class: "dim"
}
const _hoisted_402 = ["href"]
const _hoisted_403 = {
  key: 2,
  class: "mono ins-files"
}
const _hoisted_404 = { class: "dim" }
const _hoisted_405 = {
  key: 3,
  class: "dim small",
  style: {"margin":"6px 0 0"}
}
const _hoisted_406 = ["aria-label"]
const _hoisted_407 = ["aria-pressed", "onClick"]
const _hoisted_408 = {
  key: 0,
  class: "dim"
}
const _hoisted_409 = ["aria-label"]
const _hoisted_410 = ["aria-pressed", "onClick"]
const _hoisted_411 = ["onUpdate:modelValue", "placeholder", "aria-label"]
const _hoisted_412 = {
  key: 0,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_413 = {
  key: 1,
  class: "mtable-wrap"
}
const _hoisted_414 = { class: "mtable errs ix-issues" }
const _hoisted_415 = ["href"]
const _hoisted_416 = ["title"]
const _hoisted_417 = {
  key: 0,
  class: "pill warn"
}
const _hoisted_418 = {
  key: 1,
  class: "pill warn"
}
const _hoisted_419 = {
  key: 0,
  class: "pill hot"
}
const _hoisted_420 = ["href"]
const _hoisted_421 = {
  key: 1,
  class: "dim"
}
const _hoisted_422 = {
  key: 2,
  class: "dim"
}
const _hoisted_423 = {
  key: 2,
  class: "ix-more"
}
const _hoisted_424 = { key: 0 }
const _hoisted_425 = ["onClick"]
const _hoisted_426 = {
  key: 3,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_427 = {
  key: 0,
  class: "mon-block"
}
const _hoisted_428 = { class: "lbl" }
const _hoisted_429 = { key: 0 }
const _hoisted_430 = {
  key: 0,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_431 = {
  key: 1,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_432 = {
  key: 2,
  class: "mon-block ins-share"
}
const _hoisted_433 = { class: "lbl ins-share-h" }
const _hoisted_434 = ["aria-label"]
const _hoisted_435 = ["aria-pressed", "onClick"]
const _hoisted_436 = { class: "ins-bars" }
const _hoisted_437 = ["aria-label"]
const _hoisted_438 = { class: "mono ins-bar-n" }
const _hoisted_439 = { class: "ins-bar-t" }
const _hoisted_440 = { class: "ins-bar-v" }
const _hoisted_441 = {
  class: "ins-tip",
  role: "tooltip"
}
const _hoisted_442 = {
  key: 0,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_443 = {
  key: 3,
  class: "mon-block"
}
const _hoisted_444 = { class: "lbl" }
const _hoisted_445 = { class: "mtable-wrap" }
const _hoisted_446 = { class: "mtable" }
const _hoisted_447 = { class: "tx" }
const _hoisted_448 = { class: "tx" }
const _hoisted_449 = { class: "tx" }
const _hoisted_450 = ["href"]
const _hoisted_451 = { key: 1 }
const _hoisted_452 = ["title"]
const _hoisted_453 = {
  key: 0,
  class: "ins-bad"
}
const _hoisted_454 = ["href"]
const _hoisted_455 = {
  key: 0,
  class: "dim"
}
const _hoisted_456 = { class: "tx" }
const _hoisted_457 = { class: "lbl ix-files-h" }
const _hoisted_458 = {
  key: 0,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_459 = {
  key: 1,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_460 = {
  key: 2,
  class: "mtable-wrap"
}
const _hoisted_461 = { class: "mtable errs" }
const _hoisted_462 = { class: "mono" }
const _hoisted_463 = ["title"]
const _hoisted_464 = { class: "dim mono" }
const _hoisted_465 = { class: "mono" }
const _hoisted_466 = {
  key: 1,
  class: "pill"
}
const _hoisted_467 = {
  key: 2,
  class: "pill warn"
}
const _hoisted_468 = {
  key: 3,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_469 = { class: "trc-grid" }
const _hoisted_470 = { class: "trc-risk" }
const _hoisted_471 = { class: "dim small" }
const _hoisted_472 = ["onClick"]
const _hoisted_473 = { class: "mono" }
const _hoisted_474 = {
  key: 1,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_475 = {
  key: 2,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_476 = ["disabled", "onClick"]
const _hoisted_477 = {
  key: 3,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_478 = {
  key: 0,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_479 = {
  key: 1,
  class: "ix-au"
}
const _hoisted_480 = { class: "ix-au-b" }
const _hoisted_481 = {
  key: 6,
  class: "empty"
}
const _hoisted_482 = {
  key: 10,
  class: "monitoring"
}
const _hoisted_483 = { class: "w" }
const _hoisted_484 = { class: "wh" }
const _hoisted_485 = { class: "btn-row" }
const _hoisted_486 = {
  key: 0,
  class: "dim small"
}
const _hoisted_487 = {
  key: 1,
  class: "dim small"
}
const _hoisted_488 = ["disabled", "onClick"]
const _hoisted_489 = ["onClick"]
const _hoisted_490 = {
  key: 0,
  class: "mon-head"
}
const _hoisted_491 = { class: "mono" }
const _hoisted_492 = ["title"]
const _hoisted_493 = {
  key: 0,
  class: "dim"
}
const _hoisted_494 = {
  key: 1,
  class: "banner",
  role: "alert"
}
const _hoisted_495 = { class: "empty" }
const _hoisted_496 = { class: "mon-setup" }
const _hoisted_497 = {
  id: "mon-map",
  class: "w mn-sec"
}
const _hoisted_498 = { class: "wh" }
const _hoisted_499 = { class: "dim small" }
const _hoisted_500 = { class: "mn-sub" }
const _hoisted_501 = {
  key: 0,
  class: "mn-map-wrap"
}
const _hoisted_502 = ["title"]
const _hoisted_503 = {
  key: 0,
  class: "dim"
}
const _hoisted_504 = { class: "mn-links" }
const _hoisted_505 = ["href"]
const _hoisted_506 = ["href"]
const _hoisted_507 = ["href"]
const _hoisted_508 = { class: "mn-app" }
const _hoisted_509 = ["href", "title"]
const _hoisted_510 = { class: "st" }
const _hoisted_511 = { class: "m" }
const _hoisted_512 = {
  key: 1,
  class: "mn-legend"
}
const _hoisted_513 = { class: "l-warn" }
const _hoisted_514 = { class: "l-crit" }
const _hoisted_515 = { class: "l-none" }
const _hoisted_516 = {
  id: "mon-perf",
  class: "w mn-sec"
}
const _hoisted_517 = { class: "wh" }
const _hoisted_518 = {
  key: 0,
  class: "dim small"
}
const _hoisted_519 = {
  key: 0,
  class: "cond small"
}
const _hoisted_520 = { class: "mn-two" }
const _hoisted_521 = { class: "mn-card-h" }
const _hoisted_522 = { class: "mono" }
const _hoisted_523 = { class: "pill" }
const _hoisted_524 = { class: "mn-links" }
const _hoisted_525 = ["href"]
const _hoisted_526 = ["href"]
const _hoisted_527 = ["href"]
const _hoisted_528 = {
  key: 0,
  class: "mn-kpis3"
}
const _hoisted_529 = { class: "lbl" }
const _hoisted_530 = { class: "kpi-n" }
const _hoisted_531 = {
  key: 1,
  class: "mn-chart"
}
const _hoisted_532 = { class: "lbl" }
const _hoisted_533 = ["aria-label"]
const _hoisted_534 = ["title"]
const _hoisted_535 = { class: "mn-axis" }
const _hoisted_536 = {
  key: 2,
  class: "cond small"
}
const _hoisted_537 = {
  key: 0,
  id: "mon-inte",
  class: "w mn-sec"
}
const _hoisted_538 = { class: "wh" }
const _hoisted_539 = { class: "dim small" }
const _hoisted_540 = {
  key: 0,
  class: "cond small"
}
const _hoisted_541 = {
  key: 1,
  class: "mn-sub"
}
const _hoisted_542 = {
  key: 2,
  class: "mn-ref"
}
const _hoisted_543 = { class: "dim" }
const _hoisted_544 = ["aria-label"]
const _hoisted_545 = ["aria-pressed", "onClick"]
const _hoisted_546 = ["aria-pressed", "aria-expanded", "onClick"]
const _hoisted_547 = { class: "dim small" }
const _hoisted_548 = {
  key: 3,
  class: "banner",
  role: "alert"
}
const _hoisted_549 = ["onKeydown"]
const _hoisted_550 = { class: "mn-cal-h" }
const _hoisted_551 = ["aria-label", "onClick"]
const _hoisted_552 = ["aria-label", "onClick"]
const _hoisted_553 = { class: "mn-months" }
const _hoisted_554 = { class: "mn-days" }
const _hoisted_555 = ["title", "aria-pressed", "onClick"]
const _hoisted_556 = ["title"]
const _hoisted_557 = { class: "mn-cal-l" }
const _hoisted_558 = {
  key: 5,
  class: "kpis"
}
const _hoisted_559 = { class: "lbl" }
const _hoisted_560 = { class: "kpi-n" }
const _hoisted_561 = {
  key: 6,
  class: "mon-block"
}
const _hoisted_562 = { class: "lbl" }
const _hoisted_563 = { class: "mtable-wrap" }
const _hoisted_564 = { class: "mtable" }
const _hoisted_565 = { class: "tx" }
const _hoisted_566 = ["title"]
const _hoisted_567 = {
  id: "mon-errors",
  class: "w mn-sec"
}
const _hoisted_568 = { class: "wh" }
const _hoisted_569 = { class: "dim small" }
const _hoisted_570 = {
  key: 0,
  class: "cond small"
}
const _hoisted_571 = { class: "mn-stage3" }
const _hoisted_572 = { class: "lbl" }
const _hoisted_573 = ["href"]
const _hoisted_574 = { class: "kpi-n" }
const _hoisted_575 = {
  key: 0,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_576 = {
  key: 1,
  class: "mtable-wrap"
}
const _hoisted_577 = { class: "mtable errs" }
const _hoisted_578 = ["title"]
const _hoisted_579 = {
  key: 0,
  class: "pill hot"
}
const _hoisted_580 = {
  key: 1,
  class: "pill"
}
const _hoisted_581 = { class: "mono" }
const _hoisted_582 = { class: "mn-q" }
const _hoisted_583 = {
  key: 1,
  class: "w mn-sec"
}
const _hoisted_584 = { class: "wh" }
const _hoisted_585 = { class: "mono dim small" }
const _hoisted_586 = { class: "mtable-wrap" }
const _hoisted_587 = { class: "mtable mn-eve" }
const _hoisted_588 = { class: "tx" }
const _hoisted_589 = { class: "tx" }
const _hoisted_590 = ["id"]
const _hoisted_591 = { class: "tx" }
const _hoisted_592 = ["aria-expanded", "onClick"]
const _hoisted_593 = ["title"]
const _hoisted_594 = {
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_595 = { class: "wh" }
const _hoisted_596 = { class: "mono dim small" }
const _hoisted_597 = { class: "kpis" }
const _hoisted_598 = { class: "kpi" }
const _hoisted_599 = { class: "kpi-n" }
const _hoisted_600 = { class: "lbl" }
const _hoisted_601 = { class: "kpi-n" }
const _hoisted_602 = {
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_603 = { key: 0 }
const _hoisted_604 = {
  key: 2,
  class: "mon-block"
}
const _hoisted_605 = { class: "lbl" }
const _hoisted_606 = { class: "mtable-wrap" }
const _hoisted_607 = { class: "mtable" }
const _hoisted_608 = { class: "tx" }
const _hoisted_609 = ["title"]
const _hoisted_610 = {
  key: 3,
  class: "mon-block"
}
const _hoisted_611 = { class: "lbl" }
const _hoisted_612 = {
  key: 0,
  class: "new-n"
}
const _hoisted_613 = ["href"]
const _hoisted_614 = {
  key: 0,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_615 = {
  key: 1,
  class: "mtable-wrap"
}
const _hoisted_616 = { class: "mtable errs" }
const _hoisted_617 = ["title"]
const _hoisted_618 = {
  key: 0,
  class: "pill"
}
const _hoisted_619 = {
  key: 11,
  class: "system"
}
const _hoisted_620 = ["aria-label"]
const _hoisted_621 = ["aria-current", "onClick"]
const _hoisted_622 = { class: "sys-body" }
const _hoisted_623 = {
  key: 0,
  class: "banner",
  role: "alert"
}
const _hoisted_624 = { class: "w" }
const _hoisted_625 = { class: "wh" }
const _hoisted_626 = { class: "ar-wrap" }
const _hoisted_627 = ["aria-label"]
const _hoisted_628 = { class: "ar-col" }
const _hoisted_629 = { class: "ar-box" }
const _hoisted_630 = { class: "ar-h" }
const _hoisted_631 = { class: "ar-row" }
const _hoisted_632 = { class: "ar-chips" }
const _hoisted_633 = { class: "ar-row" }
const _hoisted_634 = { class: "ar-row" }
const _hoisted_635 = { class: "ar-h" }
const _hoisted_636 = {
  key: 0,
  class: "ar-out"
}
const _hoisted_637 = { class: "ar-box" }
const _hoisted_638 = { class: "ar-link" }
const _hoisted_639 = { class: "ar-col" }
const _hoisted_640 = { class: "ar-box desk" }
const _hoisted_641 = { class: "ar-h" }
const _hoisted_642 = { class: "ar-row" }
const _hoisted_643 = { class: "ar-row" }
const _hoisted_644 = { class: "ar-row" }
const _hoisted_645 = { class: "ar-row" }
const _hoisted_646 = { class: "ar-row" }
const _hoisted_647 = { class: "ar-chips" }
const _hoisted_648 = ["title"]
const _hoisted_649 = { class: "ar-foot mono" }
const _hoisted_650 = { class: "ar-col" }
const _hoisted_651 = { class: "ar-h" }
const _hoisted_652 = { class: "ar-agents" }
const _hoisted_653 = { class: "mono" }
const _hoisted_654 = {
  key: 0,
  class: "tag-w"
}
const _hoisted_655 = {
  key: 1,
  class: "model mono"
}
const _hoisted_656 = { class: "role" }
const _hoisted_657 = { key: 0 }
const _hoisted_658 = { class: "mono" }
const _hoisted_659 = { key: 1 }
const _hoisted_660 = {
  key: 2,
  class: "ar-warn"
}
const _hoisted_661 = { key: 3 }
const _hoisted_662 = { class: "ar-col" }
const _hoisted_663 = { class: "ar-h" }
const _hoisted_664 = { class: "ar-out" }
const _hoisted_665 = { class: "ar-h" }
const _hoisted_666 = { class: "ar-h" }
const _hoisted_667 = {
  class: "ar-down",
  "aria-hidden": "true"
}
const _hoisted_668 = { class: "ar-sys" }
const _hoisted_669 = { class: "ar-h" }
const _hoisted_670 = { class: "dim small" }
const _hoisted_671 = ["title"]
const _hoisted_672 = { class: "legend" }
const _hoisted_673 = { class: "w tech" }
const _hoisted_674 = { class: "wh" }
const _hoisted_675 = { class: "tech-grid" }
const _hoisted_676 = { class: "lbl" }
const _hoisted_677 = { class: "kv" }
const _hoisted_678 = { class: "path mono" }
const _hoisted_679 = { class: "path mono" }
const _hoisted_680 = { class: "lbl" }
const _hoisted_681 = { class: "checks" }
const _hoisted_682 = { class: "mono" }
const _hoisted_683 = { class: "dim" }
const _hoisted_684 = { class: "lbl" }
const _hoisted_685 = { class: "checks" }
const _hoisted_686 = { class: "dim" }
const _hoisted_687 = { class: "dim" }
const _hoisted_688 = { class: "dim" }
const _hoisted_689 = { class: "w" }
const _hoisted_690 = { class: "wh" }
const _hoisted_691 = ["onClick"]
const _hoisted_692 = { class: "mono dim small path" }
const _hoisted_693 = {
  key: 0,
  class: "cond"
}
const _hoisted_694 = { class: "settings" }
const _hoisted_695 = { class: "val mono" }
const _hoisted_696 = { class: "note" }
const _hoisted_697 = { key: 0 }
const _hoisted_698 = { class: "dim mono" }
const _hoisted_699 = { class: "lbl" }
const _hoisted_700 = { class: "pal-pick" }
const _hoisted_701 = ["aria-pressed", "onClick"]
const _hoisted_702 = {
  class: "swatch",
  "aria-hidden": "true"
}
const _hoisted_703 = { class: "dim small" }
const _hoisted_704 = {
  key: 0,
  class: "w"
}
const _hoisted_705 = { class: "wh" }
const _hoisted_706 = { class: "dim small" }
const _hoisted_707 = { class: "svc-list" }
const _hoisted_708 = { class: "svc-row" }
const _hoisted_709 = { class: "svc-name" }
const _hoisted_710 = {
  key: 0,
  class: "pill"
}
const _hoisted_711 = { class: "svc-val" }
const _hoisted_712 = ["onUpdate:modelValue", "aria-label", "onKeydown", "onInput"]
const _hoisted_713 = ["href"]
const _hoisted_714 = {
  key: 2,
  class: "dim"
}
const _hoisted_715 = {
  key: 3,
  class: "dim small"
}
const _hoisted_716 = {
  key: 4,
  class: "cond small"
}
const _hoisted_717 = { class: "svc-where mono small dim" }
const _hoisted_718 = { class: "btn-row svc-act" }
const _hoisted_719 = ["aria-expanded", "onClick"]
const _hoisted_720 = ["onClick"]
const _hoisted_721 = ["disabled", "onClick"]
const _hoisted_722 = ["onClick"]
const _hoisted_723 = {
  key: 1,
  class: "svc-uses"
}
const _hoisted_724 = { class: "lbl" }
const _hoisted_725 = { class: "uses" }
const _hoisted_726 = { class: "use-h" }
const _hoisted_727 = ["href"]
const _hoisted_728 = { key: 1 }
const _hoisted_729 = ["onClick"]
const _hoisted_730 = { class: "chips" }
const _hoisted_731 = ["onClick"]
const _hoisted_732 = { class: "lbl" }
const _hoisted_733 = { class: "uses" }
const _hoisted_734 = { class: "use-h" }
const _hoisted_735 = ["href"]
const _hoisted_736 = { key: 1 }
const _hoisted_737 = ["onClick"]
const _hoisted_738 = { class: "chips" }
const _hoisted_739 = ["onClick"]
const _hoisted_740 = {
  key: 1,
  class: "ref static"
}
const _hoisted_741 = { class: "lbl" }
const _hoisted_742 = { class: "chips" }
const _hoisted_743 = ["onClick"]
const _hoisted_744 = { class: "w" }
const _hoisted_745 = { class: "wh" }
const _hoisted_746 = { class: "agents" }
const _hoisted_747 = { class: "agent" }
const _hoisted_748 = { class: "agent-h" }
const _hoisted_749 = { class: "pill" }
const _hoisted_750 = { class: "agent-h" }
const _hoisted_751 = { class: "mono" }
const _hoisted_752 = { class: "pill" }
const _hoisted_753 = ["aria-expanded", "onClick"]
const _hoisted_754 = ["onClick"]
const _hoisted_755 = { key: 0 }
const _hoisted_756 = {
  key: 1,
  class: "cond"
}
const _hoisted_757 = { class: "facts-line" }
const _hoisted_758 = { key: 0 }
const _hoisted_759 = { key: 0 }
const _hoisted_760 = { key: 1 }
const _hoisted_761 = {
  key: 2,
  class: "perm"
}
const _hoisted_762 = {
  key: 3,
  class: "prompt"
}
const _hoisted_763 = { class: "mono dim small path" }
const _hoisted_764 = {
  key: 0,
  class: "empty"
}
const _hoisted_765 = { class: "agent" }
const _hoisted_766 = { class: "agent-h" }
const _hoisted_767 = { class: "pill" }
const _hoisted_768 = { class: "w" }
const _hoisted_769 = { class: "wh" }
const _hoisted_770 = { class: "btn-row" }
const _hoisted_771 = ["onClick"]
const _hoisted_772 = ["onClick"]
const _hoisted_773 = { class: "mono dim small path" }
const _hoisted_774 = {
  key: 0,
  class: "empty"
}
const _hoisted_775 = {
  key: 0,
  class: "cond"
}
const _hoisted_776 = { class: "kv" }
const _hoisted_777 = { class: "mono" }
const _hoisted_778 = { class: "mono" }
const _hoisted_779 = { class: "mono" }
const _hoisted_780 = { class: "mono" }
const _hoisted_781 = { class: "lbl" }
const _hoisted_782 = { class: "checks" }
const _hoisted_783 = { class: "mono" }
const _hoisted_784 = { class: "dim" }
const _hoisted_785 = { class: "dim mono small" }
const _hoisted_786 = {
  key: 0,
  ref: "editor",
  class: "w"
}
const _hoisted_787 = { class: "wh" }
const _hoisted_788 = { class: "dim small" }
const _hoisted_789 = { class: "fsearch" }
const _hoisted_790 = ["onUpdate:modelValue", "placeholder", "aria-label", "onInput", "onKeydown"]
const _hoisted_791 = ["aria-pressed", "title", "onClick"]
const _hoisted_792 = {
  key: 0,
  class: "dim small"
}
const _hoisted_793 = {
  key: 0,
  class: "sresults"
}
const _hoisted_794 = {
  key: 0,
  class: "dim small"
}
const _hoisted_795 = { class: "sr-list" }
const _hoisted_796 = { class: "sr-file" }
const _hoisted_797 = { class: "mono" }
const _hoisted_798 = { class: "dim small" }
const _hoisted_799 = {
  key: 0,
  class: "dim small"
}
const _hoisted_800 = ["onClick"]
const _hoisted_801 = { class: "ln" }
const _hoisted_802 = { class: "sr-text" }
const _hoisted_803 = {
  key: 1,
  class: "dim small"
}
const _hoisted_804 = {
  key: 2,
  class: "replace"
}
const _hoisted_805 = { class: "lbl" }
const _hoisted_806 = { class: "rep-row" }
const _hoisted_807 = { class: "rep-find" }
const _hoisted_808 = ["onUpdate:modelValue", "placeholder", "aria-label", "onInput", "onKeydown"]
const _hoisted_809 = ["disabled", "onClick"]
const _hoisted_810 = {
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_811 = { class: "fe" }
const _hoisted_812 = { class: "flist" }
const _hoisted_813 = { class: "fname" }
const _hoisted_814 = ["title", "aria-current", "onClick"]
const _hoisted_815 = ["title"]
const _hoisted_816 = {
  key: 2,
  class: "mono dim path"
}
const _hoisted_817 = ["onClick"]
const _hoisted_818 = {
  key: 1,
  class: "dim small"
}
const _hoisted_819 = {
  key: 2,
  class: "dim small"
}
const _hoisted_820 = { key: 3 }
const _hoisted_821 = { class: "editor" }
const _hoisted_822 = {
  key: 0,
  class: "empty"
}
const _hoisted_823 = { class: "ed-h" }
const _hoisted_824 = { class: "ed-title" }
const _hoisted_825 = { class: "mono" }
const _hoisted_826 = { class: "btn-row" }
const _hoisted_827 = ["aria-label"]
const _hoisted_828 = ["aria-pressed", "onClick"]
const _hoisted_829 = ["aria-pressed", "onClick"]
const _hoisted_830 = ["disabled", "onClick"]
const _hoisted_831 = ["onClick"]
const _hoisted_832 = { class: "mono dim small path" }
const _hoisted_833 = {
  key: 0,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_834 = {
  key: 1,
  class: "cond",
  role: "alert"
}
const _hoisted_835 = {
  key: 2,
  class: "ed-reply",
  "aria-live": "polite"
}
const _hoisted_836 = { class: "who" }
const _hoisted_837 = ["innerHTML"]
const _hoisted_838 = {
  key: 0,
  class: "dim small"
}
const _hoisted_839 = ["onUpdate:modelValue", "readonly", "aria-label", "onKeydown"]
const _hoisted_840 = {
  key: 3,
  class: "ed-diff"
}
const _hoisted_841 = {
  key: 0,
  class: "dim"
}
const _hoisted_842 = {
  key: 0,
  class: "perm-warn",
  role: "alert"
}
const _hoisted_843 = {
  key: 1,
  class: "problems",
  role: "alert"
}
const _hoisted_844 = {
  key: 2,
  class: "state-warn",
  role: "status"
}
const _hoisted_845 = {
  key: 3,
  class: "check-ok"
}
const _hoisted_846 = {
  key: 4,
  class: "dim"
}
const _hoisted_847 = {
  key: 5,
  class: "diff"
}
const _hoisted_848 = {
  key: 4,
  class: "ed-foot"
}
const _hoisted_849 = ["disabled", "onClick"]
const _hoisted_850 = ["disabled", "onClick"]
const _hoisted_851 = {
  key: 5,
  class: "ed-ask"
}
const _hoisted_852 = { class: "lbl" }
const _hoisted_853 = { class: "mono" }
const _hoisted_854 = { class: "ed-ask-row" }
const _hoisted_855 = ["onUpdate:modelValue", "placeholder", "disabled", "aria-label", "onKeydown"]
const _hoisted_856 = ["disabled", "onClick"]
const _hoisted_857 = ["onClick"]
const _hoisted_858 = {
  key: 0,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_859 = {
  key: 1,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_860 = {
  key: 5,
  class: "w"
}
const _hoisted_861 = { class: "wh" }
const _hoisted_862 = { class: "btn-row" }
const _hoisted_863 = { class: "dim small" }
const _hoisted_864 = ["onClick"]
const _hoisted_865 = {
  key: 0,
  class: "empty"
}
const _hoisted_866 = {
  key: 1,
  class: "hist"
}
const _hoisted_867 = { class: "hist-h" }
const _hoisted_868 = { class: "mono dim" }
const _hoisted_869 = { class: "hist-files" }
const _hoisted_870 = { class: "n-add" }
const _hoisted_871 = { class: "n-del" }
const _hoisted_872 = {
  key: 0,
  class: "dim small hist-d"
}
const _hoisted_873 = ["aria-expanded", "onClick"]
const _hoisted_874 = ["disabled", "onClick"]
const _hoisted_875 = {
  key: 0,
  class: "hist-diff"
}
const _hoisted_876 = { class: "mf-h mono" }
const _hoisted_877 = { class: "diff" }
const _hoisted_878 = ["onClick"]
const _hoisted_879 = {
  key: 6,
  class: "boot"
}
const _hoisted_880 = {
  key: 12,
  class: "process"
}
const _hoisted_881 = {
  key: 13,
  class: "cicd"
}
const _hoisted_882 = {
  key: 14,
  class: "regression"
}
const _hoisted_883 = {
  key: 15,
  class: "later"
}
const _hoisted_884 = { class: "w later-card" }
const _hoisted_885 = { class: "dim" }
const _hoisted_886 = ["aria-label"]
const _hoisted_887 = ["onPointerdown"]
const _hoisted_888 = ["aria-label"]
const _hoisted_889 = { class: "board-h" }
const _hoisted_890 = { class: "board-name" }
const _hoisted_891 = ["aria-label", "onClick"]
const _hoisted_892 = ["disabled", "onClick"]
const _hoisted_893 = ["onUpdate:modelValue", "placeholder", "aria-label", "onInput"]
const _hoisted_894 = {
  key: 0,
  class: "board-empty"
}
const _hoisted_895 = { class: "board-list" }
const _hoisted_896 = {
  key: 0,
  class: "board-empty"
}
const _hoisted_897 = {
  key: 1,
  class: "board-empty"
}
const _hoisted_898 = ["aria-current", "disabled", "title", "onClick"]
const _hoisted_899 = { class: "board-time" }
const _hoisted_900 = { class: "board-title" }
const _hoisted_901 = ["disabled", "aria-label", "title", "onClick"]
const _hoisted_902 = ["onPointerdown"]
const _hoisted_903 = { class: "cmd-id" }
const _hoisted_904 = { class: "cmd-eyebrow" }
const _hoisted_905 = ["aria-expanded", "title", "onClick"]
const _hoisted_906 = { class: "cmd-title" }
const _hoisted_907 = { class: "cmd-tools" }
const _hoisted_908 = ["disabled", "aria-label", "title", "onClick"]
const _hoisted_909 = ["aria-pressed", "aria-label", "title", "onClick"]
const _hoisted_910 = {
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}
const _hoisted_911 = {
  key: 0,
  d: "M3 14h18"
}
const _hoisted_912 = {
  key: 1,
  d: "M15 4v16"
}
const _hoisted_913 = ["aria-pressed", "aria-label", "title", "onClick"]
const _hoisted_914 = ["aria-pressed", "aria-label", "title", "onClick"]
const _hoisted_915 = {
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}
const _hoisted_916 = {
  key: 0,
  d: "M14 4h6v6M20 4l-7 7M10 20H4v-6M4 20l7-7"
}
const _hoisted_917 = {
  key: 1,
  d: "M20 10h-6V4M14 10l7-7M4 14h6v6M10 14l-7 7"
}
const _hoisted_918 = ["aria-label", "title", "onClick"]
const _hoisted_919 = {
  ref: "cmdLog",
  class: "cmd-log"
}
const _hoisted_920 = {
  key: 0,
  class: "cmd-empty"
}
const _hoisted_921 = { class: "cmd-empty-h" }
const _hoisted_922 = { class: "cmd-empty-p" }
const _hoisted_923 = {
  key: 0,
  class: "cmd-cards"
}
const _hoisted_924 = ["disabled", "title", "onClick"]
const _hoisted_925 = { class: "cmd-card-k" }
const _hoisted_926 = {
  key: 0,
  class: "mono"
}
const _hoisted_927 = { class: "cmd-card-t" }
const _hoisted_928 = ["onClick"]
const _hoisted_929 = {
  key: 0,
  class: "turn me"
}
const _hoisted_930 = { class: "bubble" }
const _hoisted_931 = { class: "turn-who" }
const _hoisted_932 = {
  class: "who-mark",
  "aria-hidden": "true"
}
const _hoisted_933 = ["innerHTML"]
const _hoisted_934 = {
  key: 1,
  class: "pre"
}
const _hoisted_935 = {
  key: 2,
  class: "cmd-refs"
}
const _hoisted_936 = ["onClick"]
const _hoisted_937 = { class: "cmd-ref-v mono" }
const _hoisted_938 = { class: "cmd-ref-t" }
const _hoisted_939 = {
  key: 3,
  class: "msg-warn"
}
const _hoisted_940 = {
  key: 4,
  class: "proposals"
}
const _hoisted_941 = { class: "grow" }
const _hoisted_942 = ["disabled", "onClick"]
const _hoisted_943 = ["disabled", "onClick"]
const _hoisted_944 = ["title"]
const _hoisted_945 = {
  key: 2,
  class: "turn wait"
}
const _hoisted_946 = { class: "turn-who" }
const _hoisted_947 = ["onClick"]
const _hoisted_948 = { class: "cmd-f" }
const _hoisted_949 = {
  key: 0,
  class: "sugg"
}
const _hoisted_950 = ["title"]
const _hoisted_951 = ["disabled", "title", "onClick"]
const _hoisted_952 = { class: "hint-v mono" }
const _hoisted_953 = ["title", "aria-label"]
const _hoisted_954 = ["disabled", "title", "aria-label", "onClick"]
const _hoisted_955 = { class: "talk-t" }
const _hoisted_956 = ["onClick"]
const _hoisted_957 = ["onClick"]
const _hoisted_958 = ["onSubmit"]
const _hoisted_959 = ["onUpdate:modelValue", "disabled", "placeholder", "aria-label", "onInput", "onKeydown"]
const _hoisted_960 = { class: "composer-bar" }
const _hoisted_961 = ["aria-label"]
const _hoisted_962 = ["aria-pressed", "title", "onClick"]
const _hoisted_963 = ["disabled", "title", "aria-label", "onClick"]
const _hoisted_964 = ["disabled", "aria-pressed", "aria-label", "title", "onClick"]
const _hoisted_965 = ["disabled", "aria-pressed", "aria-label", "title", "onClick"]
const _hoisted_966 = ["disabled", "aria-label", "title"]
const _hoisted_967 = ["onClick"]
const _hoisted_968 = ["aria-label", "aria-busy"]
const _hoisted_969 = { class: "cs-h" }
const _hoisted_970 = { class: "ix-lbl" }
const _hoisted_971 = {
  key: 0,
  class: "dim small"
}
const _hoisted_972 = ["disabled", "onClick"]
const _hoisted_973 = ["onClick"]
const _hoisted_974 = { class: "cs-q" }
const _hoisted_975 = {
  key: 0,
  class: "banner",
  role: "alert"
}
const _hoisted_976 = { class: "cs-sum" }
const _hoisted_977 = { class: "cs-cause" }
const _hoisted_978 = { class: "cs-rows" }
const _hoisted_979 = {
  class: "cs-v",
  "aria-hidden": "true"
}
const _hoisted_980 = { class: "cs-found" }
const _hoisted_981 = { key: 0 }
const _hoisted_982 = { key: 1 }
const _hoisted_983 = {
  key: 0,
  class: "cs-approve"
}
const _hoisted_984 = { class: "ix-lbl" }
const _hoisted_985 = ["onUpdate:modelValue"]
const _hoisted_986 = { class: "cs-approve-b" }
const _hoisted_987 = { class: "dim small" }
const _hoisted_988 = ["disabled", "onClick"]
const _hoisted_989 = { key: 1 }
const _hoisted_990 = { class: "ix-lbl" }
const _hoisted_991 = { class: "cs-opts" }
const _hoisted_992 = ["aria-expanded", "onClick"]
const _hoisted_993 = {
  key: 0,
  class: "cs-draft"
}
const _hoisted_994 = ["onClick"]
const _hoisted_995 = { key: 0 }
const _hoisted_996 = { key: 1 }
const _hoisted_997 = {
  key: 3,
  class: "ix-dropped"
}
const _hoisted_998 = { class: "mono" }
const _hoisted_999 = { class: "ix-lbl" }
const _hoisted_1000 = { class: "cs-cause" }
const _hoisted_1001 = { key: 0 }
const _hoisted_1002 = { class: "ix-lbl" }
const _hoisted_1003 = { class: "cs-ev" }
const _hoisted_1004 = { class: "cs-src" }
const _hoisted_1005 = {
  key: 1,
  class: "cs-note"
}
const _hoisted_1006 = {
  key: 2,
  class: "cs-note"
}
const _hoisted_1007 = { key: 0 }
const _hoisted_1008 = { key: 1 }
const _hoisted_1009 = { key: 4 }
const _hoisted_1010 = { class: "ix-lbl" }
const _hoisted_1011 = { class: "cs-opts" }
const _hoisted_1012 = { key: 0 }
const _hoisted_1013 = ["aria-expanded", "onClick"]
const _hoisted_1014 = {
  key: 1,
  class: "cs-draft"
}
const _hoisted_1015 = ["onClick"]
const _hoisted_1016 = {
  key: 5,
  class: "ix-dropped"
}
const _hoisted_1017 = { class: "mono" }
const _hoisted_1018 = { class: "ix-lbl" }
const _hoisted_1019 = { class: "cs-trace" }
const _hoisted_1020 = { class: "cs-tool" }
const _hoisted_1021 = { class: "cs-got" }
const _hoisted_1022 = {
  key: 0,
  class: "run"
}
const _hoisted_1023 = { class: "cs-got" }
const _hoisted_1024 = {
  key: 1,
  class: "wait"
}
const _hoisted_1025 = { class: "cs-got" }
const _hoisted_1026 = { class: "ix-foot" }
const _hoisted_1027 = { key: 0 }
const _hoisted_1028 = { key: 0 }
const _hoisted_1029 = {
  key: 1,
  class: "ok"
}
const _hoisted_1030 = ["onClick"]
const _hoisted_1031 = ["aria-label"]
const _hoisted_1032 = ["onClick"]
const _hoisted_1033 = ["aria-label"]
const _hoisted_1034 = { class: "card-h" }
const _hoisted_1035 = { class: "card-meta" }
const _hoisted_1036 = { class: "pill p-gate" }
const _hoisted_1037 = { class: "mono dim" }
const _hoisted_1038 = ["aria-label", "onClick"]
const _hoisted_1039 = {
  key: 0,
  class: "dim"
}
const _hoisted_1040 = {
  key: 1,
  class: "cond"
}
const _hoisted_1041 = {
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_1042 = ["href"]
const _hoisted_1043 = { class: "jira-stages" }
const _hoisted_1044 = { class: "jira-env" }
const _hoisted_1045 = ["onUpdate:modelValue"]
const _hoisted_1046 = { class: "mono" }
const _hoisted_1047 = {
  key: 0,
  class: "dim small"
}
const _hoisted_1048 = ["onUpdate:modelValue", "disabled", "aria-label"]
const _hoisted_1049 = ["onUpdate:modelValue", "disabled", "aria-label"]
const _hoisted_1050 = { class: "btn-row" }
const _hoisted_1051 = ["disabled", "onClick"]
const _hoisted_1052 = ["disabled", "onClick"]
const _hoisted_1053 = { class: "jira-list" }
const _hoisted_1054 = { key: 0 }
const _hoisted_1055 = {
  key: 0,
  class: "dim"
}
const _hoisted_1056 = ["href"]
const _hoisted_1057 = { key: 1 }
const _hoisted_1058 = { class: "dim small" }
const _hoisted_1059 = { class: "mono" }
const _hoisted_1060 = {
  key: 0,
  class: "dim small"
}
const _hoisted_1061 = {
  key: 1,
  class: "dim small"
}
const _hoisted_1062 = { class: "mono" }
const _hoisted_1063 = {
  key: 2,
  class: "dim small"
}
const _hoisted_1064 = {
  key: 0,
  class: "cond small"
}
const _hoisted_1065 = {
  key: 1,
  class: "cond small"
}
const _hoisted_1066 = {
  key: 4,
  class: "check-ok"
}
const _hoisted_1067 = { class: "jira-list" }
const _hoisted_1068 = ["href"]
const _hoisted_1069 = {
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_1070 = { class: "cform" }
const _hoisted_1071 = { for: "mt-to" }
const _hoisted_1072 = { class: "dim" }
const _hoisted_1073 = ["onUpdate:modelValue"]
const _hoisted_1074 = { for: "mt-opt" }
const _hoisted_1075 = ["onUpdate:modelValue"]
const _hoisted_1076 = { for: "mt-subject" }
const _hoisted_1077 = ["onUpdate:modelValue"]
const _hoisted_1078 = { for: "mt-start" }
const _hoisted_1079 = { class: "mt-when" }
const _hoisted_1080 = ["onUpdate:modelValue"]
const _hoisted_1081 = { for: "mt-end" }
const _hoisted_1082 = ["onUpdate:modelValue"]
const _hoisted_1083 = { for: "mt-loc" }
const _hoisted_1084 = ["onUpdate:modelValue"]
const _hoisted_1085 = { for: "m-text" }
const _hoisted_1086 = ["onUpdate:modelValue"]
const _hoisted_1087 = {
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_1088 = { class: "btn-row" }
const _hoisted_1089 = ["disabled", "onClick"]
const _hoisted_1090 = ["onClick"]
const _hoisted_1091 = { class: "cform" }
const _hoisted_1092 = { for: "m-to" }
const _hoisted_1093 = { class: "dim" }
const _hoisted_1094 = ["onUpdate:modelValue"]
const _hoisted_1095 = { for: "m-cc" }
const _hoisted_1096 = ["onUpdate:modelValue"]
const _hoisted_1097 = { for: "m-subject" }
const _hoisted_1098 = ["onUpdate:modelValue"]
const _hoisted_1099 = { for: "m-text" }
const _hoisted_1100 = ["onUpdate:modelValue", "readonly"]
const _hoisted_1101 = {
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_1102 = { class: "btn-row" }
const _hoisted_1103 = ["disabled", "onClick"]
const _hoisted_1104 = ["disabled", "title", "onClick"]
const _hoisted_1105 = ["onClick"]
const _hoisted_1106 = ["disabled", "onClick"]
const _hoisted_1107 = ["href"]
const _hoisted_1108 = ["onClick"]
const _hoisted_1109 = ["disabled", "onClick"]
const _hoisted_1110 = {
  key: 0,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_1111 = {
  key: 1,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_1112 = {
  key: 0,
  class: "dim"
}
const _hoisted_1113 = {
  key: 0,
  class: "facts"
}
const _hoisted_1114 = ["href"]
const _hoisted_1115 = { key: 1 }
const _hoisted_1116 = { class: "mono" }
const _hoisted_1117 = ["href"]
const _hoisted_1118 = { key: 1 }
const _hoisted_1119 = {
  key: 1,
  class: "facts"
}
const _hoisted_1120 = { class: "mono" }
const _hoisted_1121 = { class: "mono small" }
const _hoisted_1122 = {
  key: 2,
  class: "marked"
}
const _hoisted_1123 = ["href"]
const _hoisted_1124 = {
  key: 3,
  class: "cond small"
}
const _hoisted_1125 = ["href"]
const _hoisted_1126 = {
  key: 4,
  class: "cond"
}
const _hoisted_1127 = {
  key: 5,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_1128 = {
  class: "lbl",
  style: {"margin":"0"}
}
const _hoisted_1129 = { class: "cform n-arts" }
const _hoisted_1130 = ["for"]
const _hoisted_1131 = ["id", "onUpdate:modelValue"]
const _hoisted_1132 = {
  for: "n-info",
  class: "lbl",
  style: {"margin":"0"}
}
const _hoisted_1133 = ["onUpdate:modelValue"]
const _hoisted_1134 = {
  for: "n-high",
  class: "lbl",
  style: {"margin":"0"}
}
const _hoisted_1135 = ["onUpdate:modelValue", "placeholder"]
const _hoisted_1136 = { class: "btn-row" }
const _hoisted_1137 = ["disabled", "title", "onClick"]
const _hoisted_1138 = ["onClick"]
const _hoisted_1139 = ["disabled", "onClick"]
const _hoisted_1140 = ["disabled", "onClick"]
const _hoisted_1141 = ["href"]
const _hoisted_1142 = {
  key: 1,
  class: "cond small"
}
const _hoisted_1143 = {
  key: 2,
  class: "cond small"
}
const _hoisted_1144 = {
  key: 9,
  class: "check-ok"
}
const _hoisted_1145 = ["href"]
const _hoisted_1146 = {
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_1147 = {
  key: 10,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_1148 = {
  class: "np",
  open: ""
}
const _hoisted_1149 = {
  key: 0,
  class: "np-page",
  lang: "en"
}
const _hoisted_1150 = { class: "mono small" }
const _hoisted_1151 = { class: "mono small" }
const _hoisted_1152 = { class: "mtable-wrap" }
const _hoisted_1153 = { class: "mtable" }
const _hoisted_1154 = { class: "mono" }
const _hoisted_1155 = { class: "mono" }
const _hoisted_1156 = {
  key: 1,
  class: "np-page",
  lang: "en"
}
const _hoisted_1157 = { class: "mtable-wrap" }
const _hoisted_1158 = { class: "mtable" }
const _hoisted_1159 = ["href"]
const _hoisted_1160 = {
  key: 1,
  class: "dim"
}

return function render(_ctx, _cache) {
  with (_ctx) {
    const { toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, normalizeClass: _normalizeClass, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, createTextVNode: _createTextVNode, renderList: _renderList, Fragment: _Fragment, normalizeStyle: _normalizeStyle, withModifiers: _withModifiers, resolveComponent: _resolveComponent, createVNode: _createVNode, vModelCheckbox: _vModelCheckbox, withDirectives: _withDirectives, createBlock: _createBlock, vModelText: _vModelText, withKeys: _withKeys, vShow: _vShow } = _Vue

    const _component_help_tip = _resolveComponent("help-tip")
    const _component_step_card = _resolveComponent("step-card")
    const _component_commit_timeline = _resolveComponent("commit-timeline")
    const _component_trend_chart = _resolveComponent("trend-chart")
    const _component_line_chart = _resolveComponent("line-chart")
    const _component_files_preview = _resolveComponent("files-preview")
    const _component_process_view = _resolveComponent("process-view")
    const _component_cicd_view = _resolveComponent("cicd-view")
    const _component_regression_view = _resolveComponent("regression-view")

    return (_openBlock(), _createElementBlock(_Fragment, null, [(state && !railOn && !phone && RAIL_VIEWS.includes(view))
      ? (_openBlock(), _createElementBlock("button", {
          key: 0,
          type: "button",
          class: "side-tab",
          title: t.unfoldPanel,
          onClick: toggleRail
        }, [_createElementVNode("span", _hoisted_2, _toDisplayString(t.statusPanel), 1), railAlertCount
          ? (_openBlock(), _createElementBlock("span", {
              key: 0,
              class: _normalizeClass(["badge", { warn: !railCritical }])
            }, _toDisplayString(railAlertCount), 3))
          : _createCommentVNode("", true), _cache[0] || (_cache[0] = _createElementVNode("span", { "aria-hidden": "true" }, "»", -1))], 8, _hoisted_1))
      : _createCommentVNode("", true), _createElementVNode("div", {
      class: _normalizeClass(["shell", { stale: offline, 'with-cmd': cmdOpen, 'cmd-wide': cmdOpen && cmdWide, 'with-rail': railShown, 'cmd-bottom': cmdOpen && dockBottom }]),
      style: _normalizeStyle(cmdOpen && dockBottom ? { paddingBottom: (cmdBottomH + 32) + 'px' } : null)
    }, [
      _createElementVNode("header", _hoisted_3, [
        _createElementVNode("button", {
          type: "button",
          class: "brand",
          title: t.cockpit,
          "aria-label": 'Stellwerk · ' + t.cockpit,
          onClick: $event => (goView('cockpit'))
        }, [_createElementVNode("span", _hoisted_5, [_createElementVNode("i", { class: _normalizeClass({ r: brandLamp === 'r' }) }, null, 2), _createElementVNode("i", { class: _normalizeClass({ y: brandLamp === 'y' }) }, null, 2), _createElementVNode("i", { class: _normalizeClass({ g: brandLamp === 'g' }) }, null, 2)]), _cache[1] || (_cache[1] = _createElementVNode("span", { class: "brand-t" }, [_createElementVNode("span", { class: "brand-n" }, "Stellwerk"), _createElementVNode("span", { class: "brand-s" }, "Release Cockpit")], -1))], 8, _hoisted_4),
        _createElementVNode("div", {
          class: "seg",
          role: "group",
          "aria-label": t.view
        }, [
          _createElementVNode("button", {
            type: "button",
            "aria-pressed": view === 'cockpit',
            onClick: $event => (view = 'cockpit')
          }, _toDisplayString(t.cockpit), 9, _hoisted_7),
          _createElementVNode("button", {
            type: "button",
            "aria-pressed": view === 'inbox',
            onClick: $event => (view = 'inbox')
          }, [_createTextVNode(_toDisplayString(t.inbox), 1), urgent
            ? (_openBlock(), _createElementBlock("span", _hoisted_9, _toDisplayString(urgent), 1))
            : _createCommentVNode("", true)], 8, _hoisted_8),
          _createElementVNode("button", {
            type: "button",
            "aria-pressed": view === 'calendar',
            onClick: $event => (view = 'calendar')
          }, _toDisplayString(t.calendarTab), 9, _hoisted_10),
          _createElementVNode("button", {
            type: "button",
            "aria-pressed": view === 'process',
            onClick: $event => (view = 'process')
          }, _toDisplayString(lang === 'ru' ? 'Процесс' : 'Process'), 9, _hoisted_11),
          _createElementVNode("button", {
            type: "button",
            "aria-pressed": view === 'insights',
            onClick: $event => (view = 'insights')
          }, _toDisplayString(t.insightsTab), 9, _hoisted_12),
          _createElementVNode("button", {
            type: "button",
            "aria-pressed": view === 'monitoring',
            onClick: $event => (view = 'monitoring')
          }, _toDisplayString(t.monitoringTab), 9, _hoisted_13),
          _createElementVNode("button", {
            type: "button",
            "aria-pressed": view === 'cicd',
            onClick: $event => (view = 'cicd')
          }, _toDisplayString(t.cicdTab), 9, _hoisted_14),
          _createElementVNode("button", {
            type: "button",
            "aria-pressed": view === 'regression',
            onClick: $event => (view = 'regression')
          }, _toDisplayString(t.regressionTab), 9, _hoisted_15),
          _createElementVNode("button", {
            type: "button",
            class: "seg-sys",
            "aria-pressed": view === 'system',
            title: t.system,
            onClick: $event => (view = 'system')
          }, [_cache[2] || (_cache[2] = _createElementVNode("svg", {
            class: "gear",
            viewBox: "0 0 24 24",
            "aria-hidden": "true"
          }, [_createElementVNode("circle", {
            cx: "12",
            cy: "12",
            r: "3"
          }), _createElementVNode("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" })], -1)), _createElementVNode("span", null, _toDisplayString(t.system), 1)], 8, _hoisted_16)
        ], 8, _hoisted_6),
        state
          ? (_openBlock(), _createElementBlock("button", {
              key: 0,
              type: "button",
              class: "cmd-btn ai",
              "aria-pressed": cmdOpen,
              onClick: $event => (toggleCmd())
            }, [_cache[3] || (_cache[3] = _createElementVNode("svg", {
              class: "ai-mark",
              viewBox: "0 0 24 24",
              "aria-hidden": "true"
            }, [_createElementVNode("defs", null, [_createElementVNode("linearGradient", {
              id: "aiG1",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1"
            }, [_createElementVNode("stop", {
              offset: "0",
              "stop-color": "#7b5cff"
            }), _createElementVNode("stop", {
              offset: "1",
              "stop-color": "#00a8e8"
            })])]), _createElementVNode("path", {
              fill: "url(#aiG1)",
              d: "M10 2.5l1.9 5.6 5.6 1.9-5.6 1.9L10 17.5l-1.9-5.6L2.5 10l5.6-1.9z"
            }), _createElementVNode("path", {
              fill: "url(#aiG1)",
              d: "M18.5 14l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9z"
            })], -1)), _createElementVNode("span", _hoisted_18, _toDisplayString(t.command), 1)], 8, _hoisted_17))
          : _createCommentVNode("", true),
        _createElementVNode("div", _hoisted_19, [_createElementVNode("button", {
          type: "button",
          class: "pal-btn",
          "aria-expanded": palOpen ? 'true' : 'false',
          "aria-haspopup": "true",
          "aria-label": t.palette + ': ' + t.palettes[palette][0],
          title: t.palette + ': ' + t.palettes[palette][0],
          onClick: _withModifiers($event => (palOpen = !palOpen), ["stop"])
        }, [_createElementVNode("span", _hoisted_21, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(SWATCH[palette], (c, i) => {
          return (_openBlock(), _createElementBlock("i", {
            key: i,
            style: _normalizeStyle({ background: c })
          }, null, 4))
        }), 128))])], 8, _hoisted_20), palOpen
          ? (_openBlock(), _createElementBlock("div", {
              key: 0,
              class: "pal-menu",
              role: "menu",
              "aria-label": t.palette,
              onClick: _withModifiers(() => {}, ["stop"])
            }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(PALETTES, (p) => {
              return (_openBlock(), _createElementBlock("button", {
                key: p,
                type: "button",
                class: "pal-opt",
                role: "menuitemradio",
                "aria-checked": palette === p ? 'true' : 'false',
                onClick: $event => (setPalette(p))
              }, [_createElementVNode("span", _hoisted_24, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(SWATCH[p], (c, i) => {
                return (_openBlock(), _createElementBlock("i", {
                  key: i,
                  style: _normalizeStyle({ background: c })
                }, null, 4))
              }), 128))]), _createElementVNode("span", null, [_createTextVNode(_toDisplayString(t.palettes[p][0]), 1), _cache[4] || (_cache[4] = _createElementVNode("br", null, null, -1)), _createElementVNode("span", _hoisted_25, _toDisplayString(t.palettes[p][1]), 1)])], 8, _hoisted_23))
            }), 128)), _createElementVNode("p", _hoisted_26, _toDisplayString(t.paletteNote), 1)], 8, _hoisted_22))
          : _createCommentVNode("", true)]),
        _cache[6] || (_cache[6] = _createElementVNode("span", { class: "grow" }, null, -1)),
        state
          ? (_openBlock(), _createElementBlock("span", _hoisted_27, _toDisplayString(nowText), 1))
          : _createCommentVNode("", true),
        state
          ? (_openBlock(), _createElementBlock("span", {
              key: 2,
              class: _normalizeClass(["fresh", { bad: offline }])
            }, [_cache[5] || (_cache[5] = _createElementVNode("i", null, null, -1)), _createTextVNode(_toDisplayString(offline ? t.noLink : t.updated + ' ' + updatedText), 1)], 2))
          : _createCommentVNode("", true),
        _createElementVNode("button", {
          type: "button",
          class: "scale-btn",
          "aria-pressed": scaleFit ? 'true' : 'false',
          "aria-label": scaleFit ? t.scaleBalanced : t.scaleFit,
          title: scaleFit ? t.scaleBalanced : t.scaleFit,
          onClick: toggleScale
        }, [(_openBlock(), _createElementBlock("svg", _hoisted_29, [(!scaleFit)
          ? (_openBlock(), _createElementBlock("path", _hoisted_30))
          : (_openBlock(), _createElementBlock("path", _hoisted_31))]))], 8, _hoisted_28)
      ]),
      state
        ? (_openBlock(), _createElementBlock("nav", {
            key: 0,
            class: "tabbar",
            "aria-label": t.view
          }, [
            _createElementVNode("button", {
              type: "button",
              "aria-pressed": view === 'cockpit',
              onClick: $event => (goView('cockpit'))
            }, [_cache[7] || (_cache[7] = _createElementVNode("svg", {
              viewBox: "0 0 24 24",
              "aria-hidden": "true"
            }, [_createElementVNode("path", { d: "M4 16a8 8 0 0 1 16 0" }), _createElementVNode("path", { d: "M12 16l4-5" }), _createElementVNode("path", { d: "M4 20h16" })], -1)), _createTextVNode(_toDisplayString(t.cockpit), 1)], 8, _hoisted_33),
            _createElementVNode("button", {
              type: "button",
              "aria-pressed": view === 'inbox',
              onClick: $event => (goView('inbox'))
            }, [_cache[8] || (_cache[8] = _createElementVNode("svg", {
              viewBox: "0 0 24 24",
              "aria-hidden": "true"
            }, [_createElementVNode("path", { d: "M4 13l2.5-8h11L20 13v6H4z" }), _createElementVNode("path", { d: "M4 13h5l1.5 2h3l1.5-2h5" })], -1)), _createTextVNode(_toDisplayString(t.inbox), 1), urgent
              ? (_openBlock(), _createElementBlock("span", _hoisted_35, _toDisplayString(urgent), 1))
              : _createCommentVNode("", true)], 8, _hoisted_34),
            _createElementVNode("button", {
              type: "button",
              class: "tb-cmd",
              "aria-pressed": cmdOpen,
              onClick: $event => (toggleCmd())
            }, [_cache[9] || (_cache[9] = _createElementVNode("svg", {
              class: "ai-mark",
              viewBox: "0 0 24 24",
              "aria-hidden": "true"
            }, [_createElementVNode("defs", null, [_createElementVNode("linearGradient", {
              id: "aiG2",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1"
            }, [_createElementVNode("stop", {
              offset: "0",
              "stop-color": "#7b5cff"
            }), _createElementVNode("stop", {
              offset: "1",
              "stop-color": "#00a8e8"
            })])]), _createElementVNode("path", {
              fill: "url(#aiG2)",
              d: "M10 2.5l1.9 5.6 5.6 1.9-5.6 1.9L10 17.5l-1.9-5.6L2.5 10l5.6-1.9z"
            }), _createElementVNode("path", {
              fill: "url(#aiG2)",
              d: "M18.5 14l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9z"
            })], -1)), _createTextVNode(_toDisplayString(t.command), 1)], 8, _hoisted_36),
            _createElementVNode("button", {
              type: "button",
              "aria-pressed": view === 'calendar',
              onClick: $event => (goView('calendar'))
            }, [_cache[10] || (_cache[10] = _createElementVNode("svg", {
              viewBox: "0 0 24 24",
              "aria-hidden": "true"
            }, [_createElementVNode("rect", {
              x: "4",
              y: "5",
              width: "16",
              height: "15",
              rx: "2"
            }), _createElementVNode("path", { d: "M4 10h16M9 3v4M15 3v4" })], -1)), _createTextVNode(_toDisplayString(t.calendarTab), 1)], 8, _hoisted_37),
            _createElementVNode("div", _hoisted_38, [_createElementVNode("button", {
              type: "button",
              "aria-pressed": ['process', 'insights', 'monitoring', 'cicd', 'regression', 'audit', 'system'].includes(view),
              "aria-expanded": moreOpen ? 'true' : 'false',
              "aria-haspopup": "true",
              onClick: _withModifiers($event => (moreOpen = !moreOpen), ["stop"])
            }, [_cache[11] || (_cache[11] = _createElementVNode("svg", {
              viewBox: "0 0 24 24",
              "aria-hidden": "true"
            }, [_createElementVNode("path", { d: "M5 12h.01M12 12h.01M19 12h.01" })], -1)), _createTextVNode(_toDisplayString(t.moreTab), 1)], 8, _hoisted_39), moreOpen
              ? (_openBlock(), _createElementBlock("div", {
                  key: 0,
                  class: "tb-menu",
                  role: "menu",
                  onClick: _withModifiers(() => {}, ["stop"])
                }, [
                  _createElementVNode("button", {
                    type: "button",
                    role: "menuitem",
                    "aria-pressed": view === 'process',
                    onClick: $event => (goView('process'))
                  }, _toDisplayString(lang === 'ru' ? 'Процесс' : 'Process'), 9, _hoisted_41),
                  _createElementVNode("button", {
                    type: "button",
                    role: "menuitem",
                    "aria-pressed": view === 'insights',
                    onClick: $event => (goView('insights'))
                  }, _toDisplayString(t.insightsTab), 9, _hoisted_42),
                  _createElementVNode("button", {
                    type: "button",
                    role: "menuitem",
                    "aria-pressed": view === 'monitoring',
                    onClick: $event => (goView('monitoring'))
                  }, _toDisplayString(t.monitoringTab), 9, _hoisted_43),
                  _createElementVNode("button", {
                    type: "button",
                    role: "menuitem",
                    "aria-pressed": view === 'cicd',
                    onClick: $event => (goView('cicd'))
                  }, _toDisplayString(t.cicdTab), 9, _hoisted_44),
                  _createElementVNode("button", {
                    type: "button",
                    role: "menuitem",
                    "aria-pressed": view === 'regression',
                    onClick: $event => (goView('regression'))
                  }, _toDisplayString(t.regressionTab), 9, _hoisted_45),
                  _createElementVNode("button", {
                    type: "button",
                    role: "menuitem",
                    "aria-pressed": view === 'system',
                    onClick: $event => (goView('system'))
                  }, [_cache[12] || (_cache[12] = _createElementVNode("svg", {
                    class: "gear",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true"
                  }, [_createElementVNode("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                  }), _createElementVNode("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" })], -1)), _createTextVNode(_toDisplayString(t.system), 1)], 8, _hoisted_46)
                ], 8, _hoisted_40))
              : _createCommentVNode("", true)])
          ], 8, _hoisted_32))
        : _createCommentVNode("", true),
      offline
        ? (_openBlock(), _createElementBlock("p", _hoisted_47, _toDisplayString(t.offline), 1))
        : _createCommentVNode("", true),
      (!state && !error && !offline)
        ? (_openBlock(), _createElementBlock("main", {
            key: 2,
            class: "skeleton",
            "aria-busy": "true",
            "aria-label": t.loading
          }, _cache[13] || (_cache[13] = [_createElementVNode("div", { class: "sk sk-line" }, null, -1), _createElementVNode("div", { class: "sk-grid" }, [_createElementVNode("div", { class: "sk sk-card" }), _createElementVNode("div", { class: "sk sk-card" })], -1), _createElementVNode("div", { class: "sk sk-list" }, null, -1)]), 8, _hoisted_48))
        : _createCommentVNode("", true),
      error
        ? (_openBlock(), _createElementBlock("p", _hoisted_49, [_createTextVNode(_toDisplayString(error) + " ", 1), (view !== 'system')
            ? (_openBlock(), _createElementBlock("button", {
                key: 0,
                class: "btn xs",
                type: "button",
                onClick: $event => (goView('system'))
              }, _toDisplayString(t.fixInSystem), 9, _hoisted_50))
            : _createCommentVNode("", true)]))
        : _createCommentVNode("", true),
      (_openBlock(true), _createElementBlock(_Fragment, null, _renderList((state && state.problems) || [], (p, i) => {
        return (_openBlock(), _createElementBlock("p", {
          key: 'pr' + i,
          class: "banner",
          role: "alert"
        }, _toDisplayString(t.releaseSkipped) + ": " + _toDisplayString(p), 1))
      }), 128)),
      (state && state.workflow_error && ['cockpit', 'inbox'].includes(view))
        ? (_openBlock(), _createElementBlock("p", _hoisted_51, _toDisplayString(t.workflowBroken) + ": " + _toDisplayString(state.workflow_error), 1))
        : _createCommentVNode("", true),
      railShown
        ? (_openBlock(), _createElementBlock("aside", {
            key: 5,
            class: _normalizeClass(["sidebar", { folded: phone && !railPhoneOpen }]),
            "aria-label": t.statusPanel
          }, [
            _createElementVNode("div", _hoisted_53, [_createElementVNode("span", _hoisted_54, _toDisplayString(t.statusPanel), 1), phone
              ? (_openBlock(), _createElementBlock("button", {
                  key: 0,
                  type: "button",
                  class: "btn xs",
                  "aria-expanded": railPhoneOpen ? 'true' : 'false',
                  onClick: $event => (railPhoneOpen = !railPhoneOpen)
                }, [_createTextVNode(_toDisplayString(railPhoneOpen ? t.hidePanel : t.showPanel), 1), (railAlertCount && !railPhoneOpen)
                  ? (_openBlock(), _createElementBlock("span", {
                      key: 0,
                      class: _normalizeClass(["badge", { warn: !railCritical }])
                    }, _toDisplayString(railAlertCount), 3))
                  : _createCommentVNode("", true)], 8, _hoisted_55))
              : (_openBlock(), _createElementBlock("button", {
                  key: 1,
                  type: "button",
                  class: "btn xs",
                  title: t.foldPanel,
                  onClick: toggleRail
                }, "« " + _toDisplayString(t.fold), 9, _hoisted_56))]),
            _createElementVNode("section", _hoisted_57, [
              _createElementVNode("div", _hoisted_58, [_createElementVNode("h3", null, [_createTextVNode(_toDisplayString(t.railStages), 1), _createVNode(_component_help_tip, {
                k: "stages",
                open: helpOpen,
                onToggle: toggleHelp
              }, null, 8, ["open", "onToggle"])]), (side && side.checkservlet && side.checkservlet.status !== 'off')
                ? (_openBlock(), _createElementBlock("span", {
                    key: 0,
                    class: _normalizeClass(["dot", { ok: 'g', bad: 'r', unreachable: 'y' }[side.checkservlet.status] || 'off']),
                    title: 'CheckServlet ' + side.checkservlet.status + (side.checkservlet.detail ? ' · ' + side.checkservlet.detail : '')
                  }, null, 10, _hoisted_59))
                : _createCommentVNode("", true)]),
              (side && side.old)
                ? (_openBlock(), _createElementBlock("p", _hoisted_60, _toDisplayString(t.sideOld), 1))
                : _createCommentVNode("", true),
              (side && side.stages)
                ? (_openBlock(), _createElementBlock("ul", {
                    key: 1,
                    class: _normalizeClass(["stages", { old: side && side.old }])
                  }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(lineStages, (s) => {
                    return (_openBlock(), _createElementBlock("li", {
                      key: s.stage,
                      class: _normalizeClass({ off: !s.checked, sub: s.group, head: s.head })
                    }, [
                      _createElementVNode("span", { class: _normalizeClass(["lp", s.reach === false ? 'off' : s.ok === false ? 'r' : s.match === false ? 'y' : s.checked ? 'g' : 'off']) }, null, 2),
                      (s.url)
                        ? (_openBlock(), _createElementBlock("a", {
                            key: 0,
                            class: "st",
                            href: s.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            title: s.stage + ' · CheckServlet'
                          }, _toDisplayString(s.group ? s.stage.slice(s.group.length + 1) : s.stage), 9, _hoisted_61))
                        : (_openBlock(), _createElementBlock("span", {
                            key: 1,
                            class: "st",
                            title: s.stage
                          }, _toDisplayString(s.group ? s.stage.slice(s.group.length + 1) : s.stage), 9, _hoisted_62)),
                      (s.url && s.version)
                        ? (_openBlock(), _createElementBlock("a", {
                            key: 2,
                            class: "mono ver",
                            href: s.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            title: s.detail || s.url
                          }, _toDisplayString(s.version), 9, _hoisted_63))
                        : (_openBlock(), _createElementBlock("span", {
                            key: 3,
                            class: _normalizeClass(["mono ver", { dim: !s.checked || s.reach === false }]),
                            title: s.detail
                          }, _toDisplayString(s.head ? (s.version || s.expected || '—') : s.reach === false ? (s.expected || '—') : s.checked ? (s.version || '?') : s.expected || '—'), 11, _hoisted_64)),
                      (s.match === false)
                        ? (_openBlock(), _createElementBlock("span", {
                            key: 4,
                            class: "exp",
                            title: t.expectedT
                          }, "≠ " + _toDisplayString(s.expected), 9, _hoisted_65))
                        : (s.reach === false)
                          ? (_openBlock(), _createElementBlock("span", {
                              key: 5,
                              class: "exp",
                              title: s.detail
                            }, _toDisplayString(t.noLinkTag), 9, _hoisted_66))
                          : (s.ok === false)
                            ? (_openBlock(), _createElementBlock("span", _hoisted_67, "NOK"))
                            : _createCommentVNode("", true)
                    ], 2))
                  }), 128))], 2))
                : _createCommentVNode("", true),
              (side && !(side.checkservlet && side.checkservlet.status !== 'off'))
                ? (_openBlock(), _createElementBlock("p", _hoisted_68, _toDisplayString(t.csOff), 1))
                : _createCommentVNode("", true)
            ]),
            _createElementVNode("section", _hoisted_69, [_createElementVNode("div", _hoisted_70, [_createElementVNode("h3", null, [_createTextVNode(_toDisplayString(t.railAlerts), 1), _createVNode(_component_help_tip, {
              k: "alerts",
              open: helpOpen,
              onToggle: toggleHelp
            }, null, 8, ["open", "onToggle"])]), railAlertCount
              ? (_openBlock(), _createElementBlock("span", {
                  key: 0,
                  class: _normalizeClass(["badge", { warn: !railCritical }])
                }, _toDisplayString(railAlertCount), 3))
              : _createCommentVNode("", true)]), side
              ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [
                  (side.watch && (side.watch.items.length || side.watch.status === 'running'))
                    ? (_openBlock(), _createElementBlock("div", _hoisted_71, [_createElementVNode("div", _hoisted_72, [_createTextVNode("✦ " + _toDisplayString(t.watchAgent), 1), (side.watch.status === 'running')
                        ? (_openBlock(), _createElementBlock("span", _hoisted_73, " · " + _toDisplayString(t.fetching), 1))
                        : (side.watch.at)
                          ? (_openBlock(), _createElementBlock("span", _hoisted_74, " · " + _toDisplayString(side.watch.at.slice(11, 16)), 1))
                          : _createCommentVNode("", true)]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(side.watch.items, (a, i) => {
                        return (_openBlock(), _createElementBlock("button", {
                          key: 'w' + i,
                          type: "button",
                          class: _normalizeClass(["alert", a.level]),
                          onClick: $event => (alertAction(a, $event))
                        }, [_createElementVNode("span", _hoisted_76, _toDisplayString(LEVEL_ICON[a.level]), 1), _createElementVNode("span", _hoisted_77, [_createElementVNode("b", null, _toDisplayString(a.title), 1), (a.detail)
                          ? (_openBlock(), _createElementBlock("span", _hoisted_78, _toDisplayString(a.detail), 1))
                          : _createCommentVNode("", true)])], 10, _hoisted_75))
                      }), 128))]))
                    : _createCommentVNode("", true),
                  (side.watch && side.watch.status === 'bad')
                    ? (_openBlock(), _createElementBlock("p", _hoisted_79, "✦ " + _toDisplayString(side.watch.detail), 1))
                    : _createCommentVNode("", true),
                  (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(railAlerts, (a, i) => {
                    return (_openBlock(), _createElementBlock("div", {
                      key: i,
                      class: "alert-row"
                    }, [_createElementVNode("button", {
                      type: "button",
                      class: _normalizeClass(["alert", a.level]),
                      onClick: $event => (alertAction(a, $event))
                    }, [_createElementVNode("span", _hoisted_81, _toDisplayString(LEVEL_ICON[a.level]), 1), _createElementVNode("span", _hoisted_82, [_createElementVNode("b", null, _toDisplayString(a.title), 1), (a.detail)
                      ? (_openBlock(), _createElementBlock("span", _hoisted_83, _toDisplayString(a.detail), 1))
                      : _createCommentVNode("", true)])], 10, _hoisted_80), (state.helpers.detective && a.level !== 'info')
                      ? (_openBlock(), _createElementBlock("button", {
                          key: 0,
                          type: "button",
                          class: "alert-why",
                          title: t.cs.why,
                          "aria-label": t.cs.why + ' ' + a.title,
                          onClick: $event => (startCase({ kind: 'alert', title: a.title, detail: a.detail || '', stage: a.stage || '' }))
                        }, "✦", 8, _hoisted_84))
                      : _createCommentVNode("", true)]))
                  }), 128)),
                  (!railAlerts.length && !(side.watch && side.watch.items.length))
                    ? (_openBlock(), _createElementBlock("p", _hoisted_85, _toDisplayString(t.noAlerts), 1))
                    : _createCommentVNode("", true)
                ], 64))
              : _createCommentVNode("", true)]),
            _createElementVNode("section", _hoisted_86, [_createElementVNode("div", _hoisted_87, [_createElementVNode("h3", null, [_createTextVNode(_toDisplayString(t.railBlockers), 1), _createVNode(_component_help_tip, {
              k: "blockers",
              open: helpOpen,
              onToggle: toggleHelp
            }, null, 8, ["open", "onToggle"])]), (side && side.blockers && side.blockers.link)
              ? (_openBlock(), _createElementBlock("a", {
                  key: 0,
                  class: "job-link",
                  href: side.blockers.link,
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, "Jira ↗", 8, _hoisted_88))
              : _createCommentVNode("", true)]), (side && side.blockers && side.blockers.status === 'ok')
              ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(side.blockers.items, (b) => {
                  return (_openBlock(), _createElementBlock("a", {
                    key: b.key,
                    class: "blocker",
                    href: b.url,
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, [_createElementVNode("span", _hoisted_90, [_createElementVNode("span", _hoisted_91, _toDisplayString(b.key), 1), (b.priority)
                    ? (_openBlock(), _createElementBlock("span", {
                        key: 0,
                        class: _normalizeClass(["pill", { hot: /block|crit|highest/i.test(b.priority) }])
                      }, _toDisplayString(b.priority), 3))
                    : _createCommentVNode("", true)]), _createElementVNode("span", _hoisted_92, _toDisplayString(b.summary), 1), _createElementVNode("span", _hoisted_93, [_createTextVNode(_toDisplayString(b.status), 1), (b.assignee)
                    ? (_openBlock(), _createElementBlock("span", _hoisted_94, " · " + _toDisplayString(b.assignee), 1))
                    : _createCommentVNode("", true)])], 8, _hoisted_89))
                }), 128)), (!side.blockers.items.length)
                  ? (_openBlock(), _createElementBlock("p", _hoisted_95, _toDisplayString(t.noBlockers), 1))
                  : _createCommentVNode("", true)], 64))
              : (side && side.blockers && side.blockers.status === 'bad')
                ? (_openBlock(), _createElementBlock("p", _hoisted_96, _toDisplayString(side.blockers.detail), 1))
                : (_openBlock(), _createElementBlock("p", _hoisted_97, _toDisplayString(t.blockersOff), 1))])
          ], 10, _hoisted_52))
        : _createCommentVNode("", true),
      (state && view === 'cockpit')
        ? (_openBlock(), _createElementBlock("main", _hoisted_98, [briefCard
            ? (_openBlock(), _createElementBlock("section", {
                key: 0,
                class: _normalizeClass(["w ix-ai brief", { refetch: briefCard.status === 'writing' && briefCard.result }]),
                "aria-label": t.br.h,
                "aria-busy": briefCard.status === 'writing'
              }, [
                _createElementVNode("div", _hoisted_100, [_createElementVNode("span", _hoisted_101, [_cache[14] || (_cache[14] = _createElementVNode("span", {
                  class: "ix-spark",
                  "aria-hidden": "true"
                }, "✦", -1)), _createTextVNode(_toDisplayString(t.br.h) + " · " + _toDisplayString(briefWhen(briefCard.day)), 1), (briefCard.at && briefCard.result)
                  ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [_createTextVNode(" · " + _toDisplayString(fill(t.br.written, briefCard.at.slice(11, 16))), 1)], 64))
                  : _createCommentVNode("", true)]), _createElementVNode("button", {
                  class: "btn xs",
                  type: "button",
                  disabled: briefCard.status === 'writing',
                  onClick: briefAgain
                }, "↻ " + _toDisplayString(t.cs.again), 9, _hoisted_102), _createElementVNode("button", {
                  class: "btn xs",
                  type: "button",
                  onClick: briefHide
                }, _toDisplayString(t.br.hide), 9, _hoisted_103)]),
                (briefCard.error)
                  ? (_openBlock(), _createElementBlock("p", _hoisted_104, _toDisplayString(briefCard.error), 1))
                  : _createCommentVNode("", true),
                (briefCard.result)
                  ? (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [_createElementVNode("p", _hoisted_105, _toDisplayString(briefCard.result.headline), 1), _createElementVNode("div", _hoisted_106, [_createElementVNode("div", null, [_createElementVNode("div", _hoisted_107, _toDisplayString(fill(t.br.since, briefWhen(briefCard.since))), 1), (briefCard.result.since.length)
                      ? (_openBlock(), _createElementBlock("ul", _hoisted_108, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(briefCard.result.since, (x, i) => {
                          return (_openBlock(), _createElementBlock("li", { key: i }, _toDisplayString(x), 1))
                        }), 128))]))
                      : (_openBlock(), _createElementBlock("p", _hoisted_109, _toDisplayString(t.br.nothing), 1))]), _createElementVNode("div", null, [_createElementVNode("div", _hoisted_110, _toDisplayString(t.br.today), 1), (briefCard.result.today.length)
                      ? (_openBlock(), _createElementBlock("ul", _hoisted_111, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(briefCard.result.today, (x, i) => {
                          return (_openBlock(), _createElementBlock("li", { key: i }, _toDisplayString(x), 1))
                        }), 128))]))
                      : (_openBlock(), _createElementBlock("p", _hoisted_112, _toDisplayString(t.br.nothingDue), 1))]), _createElementVNode("div", null, [_createElementVNode("div", _hoisted_113, _toDisplayString(t.br.ready), 1), (briefCard.result.ready.length)
                      ? (_openBlock(), _createElementBlock("div", _hoisted_114, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(briefCard.result.ready, (o) => {
                          return (_openBlock(), _createElementBlock("button", {
                            key: o.id,
                            type: "button",
                            onClick: $event => (startCase(o.body))
                          }, [_createElementVNode("span", null, _toDisplayString(briefOffer(o.body)), 1), _cache[15] || (_cache[15] = _createElementVNode("span", { "aria-hidden": "true" }, "→", -1))], 8, _hoisted_115))
                        }), 128))]))
                      : (_openBlock(), _createElementBlock("p", _hoisted_116, _toDisplayString(t.br.noReady), 1))])]), (briefCard.dropped.length)
                      ? (_openBlock(), _createElementBlock("p", _hoisted_117, [_createTextVNode(_toDisplayString(fill(t.br.dropped, String(briefCard.dropped.length))) + " ", 1), _createElementVNode("span", _hoisted_118, _toDisplayString(briefCard.dropped.map((d) => d.claim).join(', ')), 1)]))
                      : _createCommentVNode("", true)], 64))
                  : (briefCard.status === 'writing')
                    ? (_openBlock(), _createElementBlock(_Fragment, { key: 2 }, [_createElementVNode("p", _hoisted_119, [_cache[16] || (_cache[16] = _createElementVNode("span", { "aria-hidden": "true" }, "✦", -1)), _createTextVNode(" " + _toDisplayString(t.br.writing), 1)]), _cache[17] || (_cache[17] = _createElementVNode("div", { class: "ix-shimmer" }, null, -1)), _cache[18] || (_cache[18] = _createElementVNode("div", { class: "ix-shimmer short" }, null, -1))], 64))
                    : _createCommentVNode("", true),
                (briefOpen && briefCard.steps.length)
                  ? (_openBlock(), _createElementBlock("ul", _hoisted_120, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(briefCard.steps, (s, i) => {
                      return (_openBlock(), _createElementBlock("li", {
                        key: i,
                        class: _normalizeClass({ failed: s.failed })
                      }, [_createElementVNode("b", null, _toDisplayString(t.cs.tool[s.tool] || s.tool), 1), _createElementVNode("span", null, _toDisplayString(s.note), 1)], 2))
                    }), 128))]))
                  : _createCommentVNode("", true),
                _createElementVNode("div", _hoisted_121, [
                  (briefCard.status === 'writing' && briefCard.result)
                    ? (_openBlock(), _createElementBlock("span", _hoisted_122, [_cache[19] || (_cache[19] = _createElementVNode("span", { class: "dot off pulse" }, null, -1)), _createTextVNode(" " + _toDisplayString(t.br.writing), 1)]))
                    : _createCommentVNode("", true),
                  (briefCard.at)
                    ? (_openBlock(), _createElementBlock("span", _hoisted_123, _toDisplayString(briefCard.agent) + " · " + _toDisplayString(insAt(briefCard.at)), 1))
                    : _createCommentVNode("", true),
                  (briefCard.result)
                    ? (_openBlock(), _createElementBlock("span", _hoisted_124, "✓ " + _toDisplayString(t.cs.checked), 1))
                    : _createCommentVNode("", true),
                  (briefCard.steps.length)
                    ? (_openBlock(), _createElementBlock("button", {
                        key: 3,
                        type: "button",
                        class: "link",
                        "aria-expanded": briefOpen,
                        onClick: $event => (briefOpen = !briefOpen)
                      }, _toDisplayString(t.cs.trace) + " · " + _toDisplayString(briefCard.steps.length), 9, _hoisted_125))
                    : _createCommentVNode("", true),
                  _createElementVNode("span", null, _toDisplayString(t.br.only), 1)
                ])
              ], 10, _hoisted_99))
            : _createCommentVNode("", true), (!rel)
            ? (_openBlock(), _createElementBlock("p", _hoisted_126, _toDisplayString(t.noReleases), 1))
            : _createCommentVNode("", true), rel
            ? (_openBlock(), _createElementBlock(_Fragment, { key: 2 }, [_createElementVNode("section", {
                class: "strip",
                "aria-label": t.tracks
              }, [_createElementVNode("div", _hoisted_128, [_createTextVNode(_toDisplayString(t.tracks), 1), _createVNode(_component_help_tip, {
                k: "tracks",
                open: helpOpen,
                onToggle: toggleHelp
              }, null, 8, ["open", "onToggle"])]), _createElementVNode("div", _hoisted_129, [_createElementVNode("div", {
                class: "line",
                style: _normalizeStyle({ gridTemplateColumns: lineTemplate })
              }, [
                (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(lineHeads, (h) => {
                  return (_openBlock(), _createElementBlock("div", {
                    key: h.key,
                    class: _normalizeClass(["ln-name", { 'ln-grp': h.grp }]),
                    style: _normalizeStyle({ gridColumn: (h.at + 1) + ' / span ' + h.span })
                  }, _toDisplayString(h.key), 7))
                }), 128)),
                (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(lineCols.filter((x) => x.sub), (c) => {
                  return (_openBlock(), _createElementBlock("div", {
                    key: 's' + c.key,
                    class: "ln-sub",
                    style: _normalizeStyle({ gridColumn: c.i + 1 })
                  }, _toDisplayString(c.key.replace('EDGE-', '')), 5))
                }), 128)),
                (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(lineCols, (c) => {
                  return (_openBlock(), _createElementBlock("div", {
                    key: 't' + c.key,
                    class: _normalizeClass(["ln-cell", [lineSeg(c.i), { sub: c.sub, occ: lineOcc.has(c.i) }]]),
                    style: _normalizeStyle({ gridColumn: c.i + 1 })
                  }, [_cache[21] || (_cache[21] = _createElementVNode("span", { class: "ln-tick" }, null, -1)), (lineStopAt[c.i])
                    ? (_openBlock(), _createElementBlock("svg", {
                        key: 0,
                        class: _normalizeClass(["ln-arrow", lineStopAt[c.i].st]),
                        viewBox: "0 0 12 12",
                        "aria-hidden": "true"
                      }, _cache[20] || (_cache[20] = [_createElementVNode("path", { d: "M1 1.5 11 6 1 10.5z" }, null, -1)]), 2))
                    : _createCommentVNode("", true)], 6))
                }), 128)),
                (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(lineStops, (p) => {
                  return (_openBlock(), _createElementBlock("button", {
                    key: 'd' + p.s.id + p.from,
                    type: "button",
                    class: _normalizeClass(["ln-date", p.st]),
                    style: _normalizeStyle({ gridColumn: (p.from + 1) + ' / ' + (p.to + 2) }),
                    title: title(p.s) + ' · ' + p.where,
                    onClick: $event => (openStep(rel.version, p.s.id, $event))
                  }, _toDisplayString(p.text), 15, _hoisted_130))
                }), 128)),
                (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(lineTrains, (x) => {
                  return (_openBlock(), _createElementBlock("button", {
                    key: x.r.version,
                    type: "button",
                    class: _normalizeClass(["train", [lampOf(x.r), { sel: x.r.version === rel.version, wait: x.wait }]]),
                    "aria-pressed": x.r.version === rel.version,
                    title: x.wait ? t.trainWaits : '',
                    style: _normalizeStyle({ gridColumn: (x.at + 1) + ' / span ' + x.span, gridRow: 5 + x.row }),
                    onClick: $event => (sel = x.r.version)
                  }, [_createElementVNode("span", _hoisted_132, [_cache[22] || (_cache[22] = _createElementVNode("span", { class: "lamp" }, null, -1)), _createElementVNode("span", _hoisted_133, _toDisplayString(x.r.version), 1)]), _createElementVNode("span", _hoisted_134, _toDisplayString(trainSub(x.r)), 1)], 14, _hoisted_131))
                }), 128))
              ], 4)])], 8, _hoisted_127), _createElementVNode("div", _hoisted_135, [_createElementVNode("div", _hoisted_136, [_createElementVNode("section", _hoisted_137, [
                _createElementVNode("div", _hoisted_138, [_createElementVNode("h2", null, [_createTextVNode(_toDisplayString(t.milestone), 1), _createVNode(_component_help_tip, {
                  k: "milestone",
                  open: helpOpen,
                  onToggle: toggleHelp
                }, null, 8, ["open", "onToggle"])]), _createElementVNode("span", _hoisted_139, _toDisplayString(rel.version) + " · " + _toDisplayString(title(rel.title)), 1)]),
                milestone
                  ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [
                      _createElementVNode("div", null, [_createElementVNode("div", _hoisted_140, _toDisplayString(title(milestone)), 1), _createElementVNode("div", _hoisted_141, [_createTextVNode(_toDisplayString(fmt(milestone.due, true)), 1), (milestone.when && milestone.when.time)
                        ? (_openBlock(), _createElementBlock("span", _hoisted_142, " · " + _toDisplayString(milestone.when.time), 1))
                        : _createCommentVNode("", true), _createTextVNode(" · " + _toDisplayString(milestone.owner), 1)])]),
                      (countdown && countdown.exact)
                        ? (_openBlock(), _createElementBlock("div", {
                            key: 0,
                            class: _normalizeClass(["flaps", { late: countdown.late }])
                          }, [(countdown.late)
                            ? (_openBlock(), _createElementBlock("span", _hoisted_143, _toDisplayString(t.late), 1))
                            : (countdown.running)
                              ? (_openBlock(), _createElementBlock("span", _hoisted_144, _toDisplayString(t.runningFor), 1))
                              : _createCommentVNode("", true), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(flaps, (f, i) => {
                            return (_openBlock(), _createElementBlock(_Fragment, { key: i }, [i
                              ? (_openBlock(), _createElementBlock("span", _hoisted_145, ":"))
                              : _createCommentVNode("", true), _createElementVNode("span", _hoisted_146, [_createElementVNode("span", _hoisted_147, _toDisplayString(two(f[0])), 1), _createElementVNode("span", _hoisted_148, _toDisplayString(f[1]), 1)])], 64))
                          }), 128))], 2))
                        : countdown
                          ? (_openBlock(), _createElementBlock("div", {
                              key: 1,
                              class: _normalizeClass(["daybig", { late: countdown.days < 0 }])
                            }, _toDisplayString(daysText(countdown)), 3))
                          : _createCommentVNode("", true),
                      _createElementVNode("div", _hoisted_149, [_createElementVNode("button", {
                        type: "button",
                        class: "btn",
                        onClick: $event => (openStep(rel.version, milestone.id, $event))
                      }, _toDisplayString(t.openStep), 9, _hoisted_150), (milestone.gate && state.helpers.gate)
                        ? (_openBlock(), _createElementBlock("button", {
                            key: 0,
                            type: "button",
                            class: "btn",
                            onClick: $event => (startCase({ kind: 'gate', version: rel.version, step: milestone.id }))
                          }, [_cache[23] || (_cache[23] = _createElementVNode("span", { "aria-hidden": "true" }, "✦", -1)), _createTextVNode(" " + _toDisplayString(t.cs.gateBtn), 1)], 8, _hoisted_151))
                        : _createCommentVNode("", true)]),
                      readiness
                        ? (_openBlock(), _createElementBlock("div", {
                            key: 2,
                            class: _normalizeClass(["gonogo", 'v-' + readiness.verdict])
                          }, [_createElementVNode("div", _hoisted_152, [_createElementVNode("span", { class: _normalizeClass(["lp", readiness.verdict]) }, null, 2), _createElementVNode("b", null, _toDisplayString(t.goNoGo), 1), _createElementVNode("span", _hoisted_153, _toDisplayString(t.goNoGoT[readiness.verdict]), 1)]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(readiness.rows, (x, i) => {
                            return (_openBlock(), _createElementBlock("button", {
                              key: i,
                              type: "button",
                              class: _normalizeClass(["gng-row", x.level]),
                              disabled: !x.open && !x.stage && !x.url,
                              onClick: $event => (readyAction(x, $event))
                            }, [_createElementVNode("span", _hoisted_155, _toDisplayString({ ok: '✓', warn: '!', bad: '✕', off: '–' }[x.level]), 1), _createElementVNode("span", _hoisted_156, _toDisplayString(x.label), 1), _createElementVNode("span", _hoisted_157, _toDisplayString(x.text), 1)], 10, _hoisted_154))
                          }), 128))], 2))
                        : _createCommentVNode("", true),
                      msSt
                        ? (_openBlock(), _createElementBlock("div", _hoisted_158, [_createElementVNode("div", _hoisted_159, [_createElementVNode("span", { class: _normalizeClass(["st-chip", 'v-' + msSt.result.verdict]) }, [_cache[24] || (_cache[24] = _createElementVNode("span", { "aria-hidden": "true" }, "✦", -1)), _createTextVNode(" " + _toDisplayString(t.ix.verdict[msSt.result.verdict]), 1)], 2), _createElementVNode("span", null, _toDisplayString(fill(t.ix.stBy, insAt(msSt.at).slice(-5))), 1)]), _createElementVNode("p", null, _toDisplayString(msSt.result.headline), 1), _createElementVNode("button", {
                            type: "button",
                            class: "st-more",
                            onClick: $event => {openInsight(rel.version); goView('insights')}
                          }, _toDisplayString(t.ix.stMore) + " →", 9, _hoisted_160)]))
                        : _createCommentVNode("", true)
                    ], 64))
                  : (_openBlock(), _createElementBlock("div", _hoisted_161, _toDisplayString(t.noMilestone), 1)),
                (gates.length)
                  ? (_openBlock(), _createElementBlock("div", _hoisted_162, [_createElementVNode("div", _hoisted_163, _toDisplayString(t.gates), 1), _createElementVNode("div", _hoisted_164, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(gates, (g) => {
                      return (_openBlock(), _createElementBlock("button", {
                        key: g.id,
                        type: "button",
                        class: _normalizeClass(["gate", 'g-' + g.status]),
                        title: title(g),
                        onClick: $event => (openStep(rel.version, g.id, $event))
                      }, [_cache[25] || (_cache[25] = _createElementVNode("span", { class: "lp" }, null, -1)), _createElementVNode("b", null, _toDisplayString(g.gate), 1), _createElementVNode("span", null, _toDisplayString(g.due ? fmt(g.due).slice(-5) : '—'), 1)], 10, _hoisted_165))
                    }), 128))])]))
                  : _createCommentVNode("", true),
                _createElementVNode("div", _hoisted_166, [(_openBlock(), _createElementBlock("svg", _hoisted_167, [_cache[26] || (_cache[26] = _createElementVNode("circle", {
                  cx: "31",
                  cy: "31",
                  r: "24",
                  fill: "none",
                  "stroke-width": "7",
                  class: "bg"
                }, null, -1)), _createElementVNode("circle", {
                  cx: "31",
                  cy: "31",
                  r: "24",
                  fill: "none",
                  "stroke-width": "7",
                  class: "fg",
                  "stroke-linecap": "round",
                  "stroke-dasharray": ring.dash,
                  transform: "rotate(-90 31 31)"
                }, null, 8, _hoisted_168), _createElementVNode("text", _hoisted_169, _toDisplayString(ring.pct), 1)])), _createElementVNode("div", null, [_createElementVNode("b", _hoisted_170, _toDisplayString(rel.summary.closed) + " / " + _toDisplayString(rel.summary.total), 1), _createElementVNode("div", _hoisted_171, _toDisplayString(t.closed), 1)])])
              ]), _createElementVNode("section", _hoisted_172, [_createElementVNode("div", _hoisted_173, [_createElementVNode("h2", null, [_createElementVNode("span", { class: _normalizeClass(["wl", brandLamp]) }, null, 2), _createTextVNode(_toDisplayString(t.today), 1), _createVNode(_component_help_tip, {
                k: "today",
                open: helpOpen,
                onToggle: toggleHelp
              }, null, 8, ["open", "onToggle"])])]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(todayGroups, (g) => {
                return (_openBlock(), _createElementBlock(_Fragment, { key: g.r.version }, [_createElementVNode("div", _hoisted_174, [_createElementVNode("span", _hoisted_175, _toDisplayString(g.r.version), 1), _createElementVNode("span", _hoisted_176, _toDisplayString(title(g.r.title)), 1)]), _createElementVNode("div", _hoisted_177, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(g.rows, (s) => {
                  return (_openBlock(), _createElementBlock("button", {
                    key: s.id,
                    type: "button",
                    class: _normalizeClass(["row", 'r-' + s.status]),
                    onClick: $event => (openStep(g.r.version, s.id, $event))
                  }, [
                    _createElementVNode("span", _hoisted_179, _toDisplayString(ICON[s.status]), 1),
                    _createElementVNode("span", _hoisted_180, [_createTextVNode(_toDisplayString(title(s)), 1), _createElementVNode("span", _hoisted_181, " · " + _toDisplayString(t.st[s.status]), 1)]),
                    _createElementVNode("span", { class: _normalizeClass(["own", 'o-' + s.owner]) }, _toDisplayString(s.owner), 3),
                    _createElementVNode("span", _hoisted_182, _toDisplayString(s.status === 'today' ? s.clock || fmt(s.due) : [fmt(s.due), s.clock].filter(Boolean).join(' ')), 1)
                  ], 10, _hoisted_178))
                }), 128))]), (g.extra)
                  ? (_openBlock(), _createElementBlock("button", {
                      key: 0,
                      type: "button",
                      class: "link",
                      onClick: $event => (showAllOpen(g.r))
                    }, "+" + _toDisplayString(g.extra) + " " + _toDisplayString(t.more) + " · " + _toDisplayString(g.r.version), 9, _hoisted_183))
                  : _createCommentVNode("", true)], 64))
              }), 128)), (!todayGroups.length)
                ? (_openBlock(), _createElementBlock("p", _hoisted_184, _toDisplayString(t.allClear), 1))
                : _createCommentVNode("", true)])]), _createElementVNode("div", _hoisted_185, [_createElementVNode("section", _hoisted_186, [
                _createElementVNode("div", _hoisted_187, [_createElementVNode("h2", null, [_createElementVNode("span", { class: _normalizeClass(["wl", lampOf(rel)]) }, null, 2), _createTextVNode(_toDisplayString(t.checklist), 1), _createVNode(_component_help_tip, {
                  k: "checklist",
                  open: helpOpen,
                  onToggle: toggleHelp
                }, null, 8, ["open", "onToggle"])]), _createElementVNode("label", _hoisted_188, [_withDirectives(_createElementVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": $event => ((onlyOpen) = $event)
                }, null, 8, _hoisted_189), [[_vModelCheckbox, onlyOpen]]), _cache[27] || (_cache[27] = _createElementVNode("span", { class: "sw" }, null, -1)), _createTextVNode(_toDisplayString(t.onlyOpen), 1)])]),
                _createElementVNode("div", {
                  class: "tabs",
                  role: "group",
                  "aria-label": t.release
                }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(state.releases, (r) => {
                  return (_openBlock(), _createElementBlock("button", {
                    key: r.version,
                    type: "button",
                    class: "tab",
                    "aria-pressed": r.version === rel.version,
                    onClick: $event => (sel = r.version)
                  }, [_createElementVNode("span", { class: _normalizeClass(["dot", lampOf(r)]) }, null, 2), _createElementVNode("span", _hoisted_192, _toDisplayString(r.version), 1), _createElementVNode("span", _hoisted_193, _toDisplayString(pct(r)) + "%", 1)], 8, _hoisted_191))
                }), 128))], 8, _hoisted_190),
                _createElementVNode("div", _hoisted_194, [
                  _createElementVNode("span", null, [_createElementVNode("b", _hoisted_195, _toDisplayString(rel.summary.closed), 1), _createTextVNode(" / " + _toDisplayString(rel.summary.total) + " " + _toDisplayString(t.closed), 1)]),
                  (rel.summary.overdue)
                    ? (_openBlock(), _createElementBlock("span", _hoisted_196, _toDisplayString(rel.summary.overdue) + " " + _toDisplayString(t.overdueN), 1))
                    : _createCommentVNode("", true),
                  (rel.summary.today)
                    ? (_openBlock(), _createElementBlock("span", _hoisted_197, _toDisplayString(rel.summary.today) + " " + _toDisplayString(t.todayN), 1))
                    : _createCommentVNode("", true),
                  (rel.freeze)
                    ? (_openBlock(), _createElementBlock("span", _hoisted_198, _toDisplayString(t.freeze) + " " + _toDisplayString(fmt(rel.freeze)), 1))
                    : _createCommentVNode("", true)
                ]),
                _createElementVNode("div", {
                  class: "phases",
                  role: "group",
                  "aria-label": t.phases,
                  style: _normalizeStyle({ gridTemplateColumns: 'repeat(' + phases.length + ', minmax(0, 1fr))' })
                }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(phases, (p) => {
                  return (_openBlock(), _createElementBlock("button", {
                    key: p.id,
                    type: "button",
                    class: "ph",
                    "aria-pressed": p.id === curPhase,
                    onClick: $event => (pickPhase(p.id))
                  }, [_createElementVNode("span", _hoisted_201, _toDisplayString(p.title), 1), _createElementVNode("span", _hoisted_202, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(p.steps, (s) => {
                    return (_openBlock(), _createElementBlock("i", {
                      key: s.id,
                      class: _normalizeClass(["sl", 's-' + s.status])
                    }, null, 2))
                  }), 128))]), _createElementVNode("span", _hoisted_203, _toDisplayString(p.closed) + " / " + _toDisplayString(p.steps.length), 1)], 8, _hoisted_200))
                }), 128))], 12, _hoisted_199),
                _createElementVNode("div", _hoisted_204, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(phaseRows, (s) => {
                  return (_openBlock(), _createElementBlock("button", {
                    key: s.id,
                    type: "button",
                    class: _normalizeClass(["row", 'r-' + s.status]),
                    onClick: $event => (openStep(rel.version, s.id, $event))
                  }, [
                    _createElementVNode("span", _hoisted_206, _toDisplayString(ICON[s.status]), 1),
                    _createElementVNode("span", _hoisted_207, [
                      _createTextVNode(_toDisplayString(title(s)), 1),
                      (s.gate)
                        ? (_openBlock(), _createElementBlock("span", _hoisted_208, _toDisplayString(s.gate), 1))
                        : _createCommentVNode("", true),
                      (s.only_if)
                        ? (_openBlock(), _createElementBlock("span", _hoisted_209, _toDisplayString(t.conditional), 1))
                        : _createCommentVNode("", true),
                      (s.optional)
                        ? (_openBlock(), _createElementBlock("span", _hoisted_210, _toDisplayString(t.optional), 1))
                        : _createCommentVNode("", true),
                      (s.cstest && s.cstest.status !== 'none')
                        ? (_openBlock(), _createElementBlock("span", {
                            key: 3,
                            class: _normalizeClass(["tag", 'cs-' + s.cstest.status]),
                            title: t.csTest + ': ' + s.cstest.detail
                          }, _toDisplayString(t.csTag) + " " + _toDisplayString({ pass: '✓', unreached: '?' }[s.cstest.status] || '✕'), 11, _hoisted_211))
                        : _createCommentVNode("", true),
                      _createElementVNode("span", _hoisted_212, " · " + _toDisplayString(t.st[s.status]), 1)
                    ]),
                    _createElementVNode("span", { class: _normalizeClass(["own", 'o-' + s.owner]) }, _toDisplayString(s.owner), 3),
                    _createElementVNode("span", _hoisted_213, _toDisplayString(fmt(s.due)), 1)
                  ], 10, _hoisted_205))
                }), 128)), (!phaseRows.length)
                  ? (_openBlock(), _createElementBlock("p", _hoisted_214, _toDisplayString(t.nothingOpen), 1))
                  : _createCommentVNode("", true)])
              ]), _createElementVNode("section", _hoisted_215, [_createElementVNode("div", _hoisted_216, [_createElementVNode("h2", null, [_createTextVNode(_toDisplayString(t.journal), 1), _createVNode(_component_help_tip, {
                k: "journal",
                open: helpOpen,
                onToggle: toggleHelp
              }, null, 8, ["open", "onToggle"])])]), (state.journal.length)
                ? (_openBlock(), _createElementBlock("div", _hoisted_217, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(state.journal.slice(0, 8), (j, i) => {
                    return (_openBlock(), _createElementBlock("div", {
                      key: j.at + j.version + j.step + i,
                      class: "jr"
                    }, [
                      _createElementVNode("span", _hoisted_218, _toDisplayString(journalWhen(j.at)), 1),
                      _createElementVNode("span", _hoisted_219, _toDisplayString(j.version), 1),
                      _createElementVNode("span", null, [_createTextVNode(_toDisplayString(journalTitle(j)), 1), (j.note)
                        ? (_openBlock(), _createElementBlock("span", _hoisted_220, " · " + _toDisplayString(j.note), 1))
                        : _createCommentVNode("", true)]),
                      _createElementVNode("span", { class: _normalizeClass(["pill", actClass(j)]) }, _toDisplayString(actText(j)), 3)
                    ]))
                  }), 128))]))
                : (_openBlock(), _createElementBlock("p", _hoisted_221, _toDisplayString(t.journalEmpty), 1))])])])], 64))
            : _createCommentVNode("", true)]))
        : _createCommentVNode("", true),
      (state && view === 'inbox')
        ? (_openBlock(), _createElementBlock("main", _hoisted_222, [_createElementVNode("section", _hoisted_223, [
            _createElementVNode("div", _hoisted_224, [_createElementVNode("h2", null, [_createTextVNode(_toDisplayString(t.queue), 1), _createVNode(_component_help_tip, {
              k: "queue",
              open: helpOpen,
              onToggle: toggleHelp
            }, null, 8, ["open", "onToggle"])]), _createElementVNode("label", _hoisted_225, [_withDirectives(_createElementVNode("input", {
              type: "checkbox",
              "onUpdate:modelValue": $event => ((allOwners) = $event)
            }, null, 8, _hoisted_226), [[_vModelCheckbox, allOwners]]), _cache[28] || (_cache[28] = _createElementVNode("span", { class: "sw" }, null, -1)), _createTextVNode(_toDisplayString(t.allOwners), 1)])]),
            (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(queueGroups, (g) => {
              return (_openBlock(), _createElementBlock(_Fragment, { key: g.k }, [_createElementVNode("div", _hoisted_227, [_createElementVNode("span", { class: _normalizeClass(["q-name", 'qn-' + g.k]) }, _toDisplayString(t.q[g.k]), 3), _createElementVNode("span", _hoisted_228, _toDisplayString(g.items.length), 1)]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(g.items, (x) => {
                return (_openBlock(), _createElementBlock("div", {
                  key: x.key,
                  class: _normalizeClass(["qrow", ['r-' + x.s.status, { picked: picked.includes(x.key) }]]),
                  "aria-current": inboxCur && x.key === inboxCur.key ? 'true' : null
                }, [_createElementVNode("input", {
                  type: "checkbox",
                  class: "qpick",
                  checked: picked.includes(x.key),
                  "aria-label": t.pickRow + ': ' + title(x.s),
                  onChange: $event => (togglePick(x.key))
                }, null, 40, _hoisted_230), _createElementVNode("button", {
                  type: "button",
                  class: "qbody",
                  title: title(x.s),
                  onClick: $event => (openRow(x.key))
                }, [
                  _createElementVNode("span", _hoisted_232, _toDisplayString(x.r.version), 1),
                  _createElementVNode("span", _hoisted_233, _toDisplayString(title(x.s)), 1),
                  (x.s.owner !== 'RM')
                    ? (_openBlock(), _createElementBlock("span", {
                        key: 0,
                        class: _normalizeClass(["own", 'o-' + x.s.owner])
                      }, _toDisplayString(x.s.owner), 3))
                    : _createCommentVNode("", true),
                  _createElementVNode("span", _hoisted_234, _toDisplayString((x.s.due ? fmt(x.s.due) : '') + (x.s.clock ? ' ' + x.s.clock : '')), 1)
                ], 8, _hoisted_231)], 10, _hoisted_229))
              }), 128))], 64))
            }), 128)),
            (!queueAll.length)
              ? (_openBlock(), _createElementBlock("p", _hoisted_235, _toDisplayString(t.queueEmpty), 1))
              : _createCommentVNode("", true),
            _createElementVNode("p", _hoisted_236, [
              _createElementVNode("span", null, [_cache[29] || (_cache[29] = _createElementVNode("kbd", null, "J", -1)), _cache[30] || (_cache[30] = _createElementVNode("kbd", null, "K", -1)), _createTextVNode(" " + _toDisplayString(t.kMove), 1)]),
              _createElementVNode("span", null, [_cache[31] || (_cache[31] = _createElementVNode("kbd", null, "D", -1)), _createTextVNode(" " + _toDisplayString(t.kDone), 1)]),
              _createElementVNode("span", null, [_cache[32] || (_cache[32] = _createElementVNode("kbd", null, "S", -1)), _createTextVNode(" " + _toDisplayString(t.kSkip), 1)]),
              _createElementVNode("span", null, [_cache[33] || (_cache[33] = _createElementVNode("kbd", null, "X", -1)), _createTextVNode(" " + _toDisplayString(t.kPick), 1)]),
              _createElementVNode("span", null, [_cache[34] || (_cache[34] = _createElementVNode("kbd", null, "Enter", -1)), _createTextVNode(" " + _toDisplayString(t.kOk), 1)])
            ]),
            (pickedLive.length)
              ? (_openBlock(), _createElementBlock("div", {
                  key: 1,
                  class: "bulk",
                  role: "region",
                  "aria-label": fill(t.picked, String(pickedLive.length))
                }, [
                  _createElementVNode("b", null, _toDisplayString(fill(t.picked, String(pickedLive.length))), 1),
                  _cache[35] || (_cache[35] = _createElementVNode("span", { class: "grow" }, null, -1)),
                  _createElementVNode("button", {
                    class: "btn pri",
                    type: "button",
                    disabled: busy,
                    onClick: markPicked
                  }, _toDisplayString(t.bulkDone), 9, _hoisted_238),
                  _createElementVNode("button", {
                    class: "btn",
                    type: "button",
                    onClick: $event => (picked = [])
                  }, _toDisplayString(t.clearPick), 9, _hoisted_239)
                ], 8, _hoisted_237))
              : _createCommentVNode("", true)
          ]), _createElementVNode("section", _hoisted_240, [inboxCur
            ? (_openBlock(), _createBlock(_component_step_card, {
                ref: "inboxCard",
                key: inboxCur.key,
                step: inboxCur.s,
                release: inboxCur.r,
                t: t,
                lang: lang,
                busy: busy,
                help: helpOpen,
                onHelp: toggleHelp,
                checking: !!csBusy[inboxCur.key] || (state.cs_running || []).includes(inboxCur.key),
                onMark: (status, note) => mark(inboxCur.r, inboxCur.s, status, note),
                onUnmark: $event => (unmark(inboxCur.r, inboxCur.s)),
                onMonitor: goMonitor,
                onMail: (k) => openMail(inboxCur.r, k),
                onNotes: $event => (openNotes(inboxCur.r)),
                onJira: (k) => openJira(inboxCur.r, k),
                onWorkflow: editWorkflow,
                api: call,
                mode: state.jenkins_start,
                cs: state.cs_stages,
                "env-param": state.jenkins_env_param,
                "env-params": state.jenkins_env_params,
                "on-state": apply,
                reload: load,
                onCheck: $event => (check(inboxCur.r, inboxCur.s)),
                onMeeting: $event => (openMeeting(inboxCur.r, inboxCur.s))
              }, null, 8, ["step", "release", "t", "lang", "busy", "help", "onHelp", "checking", "onMark", "onUnmark", "onMonitor", "onMail", "onNotes", "onJira", "onWorkflow", "api", "mode", "cs", "env-param", "env-params", "on-state", "reload", "onCheck", "onMeeting"]))
            : (_openBlock(), _createElementBlock("p", _hoisted_241, _toDisplayString(t.queueEmpty), 1))])]))
        : _createCommentVNode("", true),
      (state && view === 'calendar')
        ? (_openBlock(), _createElementBlock("main", _hoisted_242, [_createElementVNode("section", _hoisted_243, [
            _createElementVNode("div", _hoisted_244, [_createElementVNode("h2", null, [_createTextVNode(_toDisplayString(t.calendarH), 1), _createVNode(_component_help_tip, {
              k: "calendar",
              open: helpOpen,
              onToggle: toggleHelp
            }, null, 8, ["open", "onToggle"])]), _createElementVNode("div", _hoisted_245, [
              _createElementVNode("button", {
                class: "btn xs",
                type: "button",
                onClick: $event => (calShift(-14))
              }, "← " + _toDisplayString(t.calPrev), 9, _hoisted_246),
              _createElementVNode("button", {
                class: "btn xs",
                type: "button",
                onClick: $event => (calShift(0))
              }, _toDisplayString(t.calToday), 9, _hoisted_247),
              _createElementVNode("button", {
                class: "btn xs",
                type: "button",
                onClick: $event => (calShift(14))
              }, _toDisplayString(t.calNext) + " →", 9, _hoisted_248),
              cal
                ? (_openBlock(), _createElementBlock("a", {
                    key: 0,
                    class: "btn xs",
                    href: '/api/calendar.ics?from=' + cal.from + '&to=' + cal.to,
                    download: ""
                  }, _toDisplayString(t.calIcs), 9, _hoisted_249))
                : _createCommentVNode("", true),
              _createElementVNode("button", {
                class: "btn xs",
                type: "button",
                onClick: editWorkflow
              }, _toDisplayString(t.calEditWindows), 9, _hoisted_250)
            ])]),
            (state.workflow_error)
              ? (_openBlock(), _createElementBlock("p", _hoisted_251, _toDisplayString(state.workflow_error), 1))
              : _createCommentVNode("", true),
            _createElementVNode("div", _hoisted_252, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(CAL_KINDS, (k) => {
              return (_openBlock(), _createElementBlock("label", {
                key: k,
                class: "chk"
              }, [_withDirectives(_createElementVNode("input", {
                "onUpdate:modelValue": $event => ((calKinds[k]) = $event),
                type: "checkbox"
              }, null, 8, _hoisted_253), [[_vModelCheckbox, calKinds[k]]]), _createElementVNode("span", { class: _normalizeClass(["ck", 'k-' + k]) }, null, 2), _createTextVNode(_toDisplayString(t.calKinds[k]), 1)]))
            }), 128)), _cache[36] || (_cache[36] = _createElementVNode("span", {
              class: "cal-sep",
              "aria-hidden": "true"
            }, null, -1)), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(calVersions, (v) => {
              return (_openBlock(), _createElementBlock("label", {
                key: v,
                class: "chk"
              }, [_createElementVNode("input", {
                type: "checkbox",
                checked: !calOff[v],
                onChange: $event => (calToggle(v))
              }, null, 40, _hoisted_254), _createElementVNode("span", _hoisted_255, _toDisplayString(v), 1)]))
            }), 128))]),
            cal
              ? (_openBlock(), _createElementBlock("div", _hoisted_256, [_createElementVNode("div", {
                  class: "cal-grid",
                  style: _normalizeStyle({ gridTemplateColumns: '120px repeat(' + calDays.length + ', minmax(30px, 1fr))' })
                }, [
                  _createElementVNode("div", _hoisted_257, [_createElementVNode("span", _hoisted_258, _toDisplayString(fmt(cal.from)) + " – " + _toDisplayString(fmt(cal.to)), 1)]),
                  (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(calDays, (d) => {
                    return (_openBlock(), _createElementBlock("div", {
                      key: 'h' + d.iso,
                      class: _normalizeClass(["cal-dh", { we: d.weekend, today: d.today, mon: d.monday }])
                    }, [_createElementVNode("span", _hoisted_259, _toDisplayString(d.top), 1), _createElementVNode("span", _hoisted_260, _toDisplayString(d.wd), 1), _createElementVNode("span", _hoisted_261, _toDisplayString(d.num), 1)], 2))
                  }), 128)),
                  (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(calLanes, (lane) => {
                    return (_openBlock(), _createElementBlock(_Fragment, { key: lane.version }, [_createElementVNode("div", _hoisted_262, [_createElementVNode("span", { class: _normalizeClass(["dot", lampOf(lane.release)]) }, null, 2), _createElementVNode("span", _hoisted_263, [_createElementVNode("b", _hoisted_264, _toDisplayString(lane.version), 1), _createElementVNode("span", _hoisted_265, _toDisplayString(title(lane.release.title)), 1)])]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(calDays, (d, i) => {
                      return (_openBlock(), _createElementBlock("div", {
                        key: lane.version + d.iso,
                        class: _normalizeClass(["cal-c", { we: d.weekend, today: d.today, mon: d.monday, span: i >= lane.first && i <= lane.last, clash: calClash[d.iso + '|' + lane.version] }])
                      }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList((lane.cells[d.iso] || []).slice(0, 3), (e, j) => {
                        return (_openBlock(), _createElementBlock("button", {
                          key: j,
                          type: "button",
                          class: _normalizeClass(["ev", ['k-' + e.kind, 's-' + e.status]]),
                          title: evTitle(e),
                          "aria-label": evTitle(e),
                          disabled: !e.step,
                          onClick: $event => (calOpen(e, $event))
                        }, _toDisplayString(evLabel(e)), 11, _hoisted_266))
                      }), 128)), ((lane.cells[d.iso] || []).length > 3)
                        ? (_openBlock(), _createElementBlock("span", {
                            key: 0,
                            class: "ev-more",
                            title: lane.cells[d.iso].slice(3).map(evTitle).join('\n')
                          }, "+" + _toDisplayString(lane.cells[d.iso].length - 3), 9, _hoisted_267))
                        : _createCommentVNode("", true)], 2))
                    }), 128))], 64))
                  }), 128)),
                  (calKinds.window)
                    ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [_createElementVNode("div", _hoisted_268, [_createElementVNode("b", null, _toDisplayString(t.calWindows), 1)]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(calDays, (d) => {
                        return (_openBlock(), _createElementBlock("div", {
                          key: 'w' + d.iso,
                          class: _normalizeClass(["cal-c win", { we: d.weekend, today: d.today, mon: d.monday }])
                        }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(calWin[d.iso] || [], (w, j) => {
                          return (_openBlock(), _createElementBlock("span", {
                            key: j,
                            class: _normalizeClass(["wv", 'w-' + w.kind]),
                            title: w.title + ' · ' + t.calKind[w.kind] + (w.stage ? ' · ' + w.stage : '') + (w.from ? ' · ' + w.from + '–' + w.to : '')
                          }, _toDisplayString(w.stage ? (STAGE_SHORT[w.stage] || w.stage) : t.calKind[w.kind].slice(0, 3)), 11, _hoisted_269))
                        }), 128))], 2))
                      }), 128))], 64))
                    : _createCommentVNode("", true)
                ], 4)]))
              : _createCommentVNode("", true),
            _createElementVNode("p", _hoisted_270, _toDisplayString(t.calLegend), 1)
          ]), cal
            ? (_openBlock(), _createElementBlock("div", _hoisted_271, [_createElementVNode("section", _hoisted_272, [_createElementVNode("div", _hoisted_273, [_createElementVNode("h2", null, [_createElementVNode("span", { class: _normalizeClass(["wl", cal.clashes.length ? 'y' : '']) }, null, 2), _createTextVNode(_toDisplayString(t.calClashes), 1)]), (cal.clashes.length)
                ? (_openBlock(), _createElementBlock("span", _hoisted_274, _toDisplayString(cal.clashes.length), 1))
                : _createCommentVNode("", true)]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(cal.clashes, (c, i) => {
                return (_openBlock(), _createElementBlock("button", {
                  key: i,
                  type: "button",
                  class: "alert warning",
                  onClick: $event => (c.step ? openStep(c.version, c.step, $event) : null)
                }, [_cache[37] || (_cache[37] = _createElementVNode("span", {
                  class: "al-ic",
                  "aria-hidden": "true"
                }, "▲", -1)), _createElementVNode("span", _hoisted_276, [_createElementVNode("b", null, _toDisplayString(c.text), 1), _createElementVNode("span", null, _toDisplayString(fmt(c.date, true)), 1)])], 8, _hoisted_275))
              }), 128)), (!cal.clashes.length)
                ? (_openBlock(), _createElementBlock("p", _hoisted_277, _toDisplayString(t.calNoClash), 1))
                : _createCommentVNode("", true)]), _createElementVNode("section", _hoisted_278, [_createElementVNode("div", _hoisted_279, [_createElementVNode("h2", null, _toDisplayString(t.calAgenda), 1)]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(calAgenda, (g) => {
                return (_openBlock(), _createElementBlock("div", {
                  key: g.iso,
                  class: _normalizeClass(["ag-day", { today: g.today }])
                }, [_createElementVNode("div", _hoisted_280, [_createElementVNode("b", null, _toDisplayString(fmt(g.iso)), 1)]), _createElementVNode("div", _hoisted_281, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(g.windows, (w, j) => {
                  return (_openBlock(), _createElementBlock("div", {
                    key: 'w' + j,
                    class: "ag-w"
                  }, [_createElementVNode("span", { class: _normalizeClass(["wv", 'w-' + w.kind]) }, _toDisplayString(t.calKind[w.kind]), 3), _createElementVNode("span", null, _toDisplayString(w.title), 1), _createElementVNode("span", _hoisted_282, _toDisplayString([w.stage, w.from ? w.from + '–' + w.to : ''].filter(Boolean).join(' ')), 1)]))
                }), 128)), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(g.events, (e, j) => {
                  return (_openBlock(), _createElementBlock("button", {
                    key: j,
                    type: "button",
                    class: _normalizeClass(["ag-e", ['r-' + e.status, { clash: evClash(e) }]]),
                    disabled: !e.step,
                    onClick: $event => (calOpen(e, $event))
                  }, [
                    _createElementVNode("span", { class: _normalizeClass(["ev", ['k-' + e.kind, 's-' + e.status]]) }, _toDisplayString(evLabel(e)), 3),
                    _createElementVNode("span", _hoisted_284, _toDisplayString(e.version), 1),
                    _createElementVNode("span", _hoisted_285, [_createTextVNode(_toDisplayString(evName(e)), 1), (e.time)
                      ? (_openBlock(), _createElementBlock("span", _hoisted_286, " · " + _toDisplayString(e.time), 1))
                      : _createCommentVNode("", true)]),
                    (e.owner)
                      ? (_openBlock(), _createElementBlock("span", {
                          key: 0,
                          class: _normalizeClass(["own", 'o-' + e.owner])
                        }, _toDisplayString(e.owner), 3))
                      : _createCommentVNode("", true),
                    (e.status && e.status !== 'open')
                      ? (_openBlock(), _createElementBlock("span", {
                          key: 1,
                          class: _normalizeClass(["pill", 'p-' + e.status])
                        }, _toDisplayString(t.st[e.status]), 3))
                      : _createCommentVNode("", true)
                  ], 10, _hoisted_283))
                }), 128))])], 2))
              }), 128)), (!calAgenda.length)
                ? (_openBlock(), _createElementBlock("p", _hoisted_287, _toDisplayString(t.calNothing), 1))
                : _createCommentVNode("", true)])]))
            : _createCommentVNode("", true)]))
        : _createCommentVNode("", true),
      (state && view === 'insights')
        ? (_openBlock(), _createElementBlock("main", _hoisted_288, [
            _createElementVNode("div", _hoisted_289, [ins
              ? (_openBlock(), _createElementBlock("div", {
                  key: 0,
                  class: "tabs",
                  role: "group",
                  "aria-label": t.release
                }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(ins.releases, (r) => {
                  return (_openBlock(), _createElementBlock("button", {
                    key: r.version,
                    type: "button",
                    class: "tab",
                    "aria-pressed": r.version === insSel,
                    onClick: $event => (openInsight(r.version))
                  }, [_createElementVNode("span", { class: _normalizeClass(["dot", insDot(r)]) }, null, 2), _createElementVNode("span", _hoisted_292, _toDisplayString(r.version), 1), _createElementVNode("span", _hoisted_293, _toDisplayString(r.running ? t.insBuilding : r.built ? t.insLvl[r.level] : '—'), 1)], 8, _hoisted_291))
                }), 128)), (insSel && !ins.releases.some((r) => r.version === insSel))
                  ? (_openBlock(), _createElementBlock("button", _hoisted_294, [_createElementVNode("span", { class: _normalizeClass(["dot", insDot(insRow(insSel) || { level: insCur ? insCur.level : '' })]) }, null, 2), _createElementVNode("span", _hoisted_295, _toDisplayString(insSel), 1), _createElementVNode("span", _hoisted_296, _toDisplayString(t.insArchive), 1)]))
                  : _createCommentVNode("", true), _createElementVNode("button", {
                  type: "button",
                  class: "tab ix-arch",
                  "aria-expanded": insArch,
                  "aria-controls": "ins-archive",
                  onClick: $event => (insArch = !insArch)
                }, [
                  _createTextVNode(_toDisplayString(t.insArchive), 1),
                  (ins.archive.length)
                    ? (_openBlock(), _createElementBlock("span", _hoisted_298, " · " + _toDisplayString(ins.archive.length), 1))
                    : _createCommentVNode("", true),
                  _cache[38] || (_cache[38] = _createTextVNode()),
                  _createElementVNode("span", _hoisted_299, _toDisplayString(insArch ? '▴' : '▾'), 1)
                ], 8, _hoisted_297)], 8, _hoisted_290))
              : _createCommentVNode("", true), _createElementVNode("div", _hoisted_300, [ins
              ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(ins.sources, (s, name) => {
                  return (_openBlock(), _createElementBlock("span", {
                    key: name,
                    class: "chip",
                    title: s.detail
                  }, [_createElementVNode("span", { class: _normalizeClass(["dot", s.status === 'ok' ? 'g' : 'off']) }, null, 2), _createTextVNode(_toDisplayString(name === 'bitbucket' ? 'Bitbucket' : 'Jira'), 1)], 8, _hoisted_301))
                }), 128)), _createElementVNode("span", { title: ins.repos.map((r) => r.name).join(', ') }, _toDisplayString(fill(t.insRepos, String(ins.repos.length))), 9, _hoisted_302)], 64))
              : _createCommentVNode("", true), _createElementVNode("button", {
              class: "btn xs",
              type: "button",
              onClick: editInsights
            }, _toDisplayString(t.insEdit), 9, _hoisted_303), _createVNode(_component_help_tip, {
              k: "insights",
              open: helpOpen,
              onToggle: toggleHelp
            }, null, 8, ["open", "onToggle"])])]),
            insError
              ? (_openBlock(), _createElementBlock("p", _hoisted_304, _toDisplayString(insError), 1))
              : _createCommentVNode("", true),
            (ins && !ins.ready)
              ? (_openBlock(), _createElementBlock("section", _hoisted_305, [_createElementVNode("p", _hoisted_306, _toDisplayString(t.insOff), 1), _createElementVNode("ol", _hoisted_307, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(t.insSetup, (s, i) => {
                  return (_openBlock(), _createElementBlock("li", { key: i }, _toDisplayString(s), 1))
                }), 128))]), _createElementVNode("ul", _hoisted_308, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(ins.sources, (s, name) => {
                  return (_openBlock(), _createElementBlock(_Fragment, { key: name }, [(s.status !== 'ok')
                    ? (_openBlock(), _createElementBlock("li", _hoisted_309, _toDisplayString(name === 'bitbucket' ? 'Bitbucket' : 'Jira') + " · " + _toDisplayString(s.detail), 1))
                    : _createCommentVNode("", true)], 64))
                }), 128))])]))
              : _createCommentVNode("", true),
            (ins && insArch)
              ? (_openBlock(), _createElementBlock("section", _hoisted_310, [_createElementVNode("div", _hoisted_311, [_createElementVNode("h2", null, _toDisplayString(t.insArchive), 1), _createElementVNode("button", {
                  type: "button",
                  class: "link",
                  onClick: $event => (insArch = false)
                }, _toDisplayString(t.close), 9, _hoisted_312)]), (!ins.archive.length)
                  ? (_openBlock(), _createElementBlock("p", _hoisted_313, _toDisplayString(t.insNoArchive), 1))
                  : (_openBlock(), _createElementBlock("div", _hoisted_314, [_createElementVNode("table", _hoisted_315, [_createElementVNode("thead", null, [_createElementVNode("tr", null, [
                      _createElementVNode("th", _hoisted_316, _toDisplayString(t.release), 1),
                      _createElementVNode("th", _hoisted_317, _toDisplayString(t.insWhen), 1),
                      _createElementVNode("th", _hoisted_318, _toDisplayString(t.insRisks), 1),
                      _createElementVNode("th", null, _toDisplayString(t.insK.repos), 1),
                      _createElementVNode("th", null, _toDisplayString(t.insK.commits), 1),
                      _createElementVNode("th", null, _toDisplayString(t.insK.files), 1),
                      _createElementVNode("th", null, _toDisplayString(t.insK.issues), 1)
                    ])]), _createElementVNode("tbody", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(ins.archive, (a) => {
                      return (_openBlock(), _createElementBlock("tr", { key: a.version }, [
                        _createElementVNode("td", _hoisted_319, [_createElementVNode("button", {
                          type: "button",
                          class: "link mono",
                          onClick: $event => (openInsight(a.version))
                        }, _toDisplayString(a.version), 9, _hoisted_320)]),
                        _createElementVNode("td", _hoisted_321, _toDisplayString(a.at ? insAt(a.at) : '—'), 1),
                        _createElementVNode("td", _hoisted_322, [(a.error)
                          ? (_openBlock(), _createElementBlock("span", _hoisted_323, _toDisplayString(a.error), 1))
                          : (_openBlock(), _createElementBlock("span", {
                              key: 1,
                              class: _normalizeClass(["pill lvl", 'lvl-' + a.level])
                            }, _toDisplayString(insIcon(a.level)) + " " + _toDisplayString(t.insLevel[a.level]), 3))]),
                        _createElementVNode("td", null, _toDisplayString(a.error ? '—' : a.repos_changed), 1),
                        _createElementVNode("td", null, _toDisplayString(a.error ? '—' : a.commits), 1),
                        _createElementVNode("td", null, _toDisplayString(a.error ? '—' : a.files), 1),
                        _createElementVNode("td", null, _toDisplayString(a.error ? '—' : a.issues), 1)
                      ]))
                    }), 128))])])])), _createElementVNode("form", {
                  class: "ins-other",
                  onSubmit: _withModifiers(buildOther, ["prevent"])
                }, [_createElementVNode("label", _hoisted_325, _toDisplayString(t.insOther), 1), _withDirectives(_createElementVNode("input", {
                  id: "ins-other",
                  "onUpdate:modelValue": $event => ((insOtherV) = $event),
                  class: "mono",
                  placeholder: t.insOtherPh,
                  autocomplete: "off",
                  spellcheck: "false"
                }, null, 8, _hoisted_326), [[
                  _vModelText,
                  insOtherV,
                  void 0,
                  { trim: true }
                ]]), _createElementVNode("button", {
                  class: "btn",
                  type: "submit",
                  disabled: !insOtherV
                }, _toDisplayString(t.insBuild), 9, _hoisted_327)], 40, _hoisted_324)]))
              : _createCommentVNode("", true),
            insSel
              ? (_openBlock(), _createElementBlock("section", _hoisted_328, [
                  _createElementVNode("h2", _hoisted_329, [_createElementVNode("span", { class: _normalizeClass(["wl", insLamp(insCur ? insCur.level : '')]) }, null, 2), _createElementVNode("span", _hoisted_330, _toDisplayString(insSel), 1), insKind
                    ? (_openBlock(), _createElementBlock("span", _hoisted_331, _toDisplayString(insKind), 1))
                    : _createCommentVNode("", true)]),
                  _createElementVNode("div", _hoisted_332, [insRunning
                    ? (_openBlock(), _createElementBlock("span", _hoisted_333, [_cache[39] || (_cache[39] = _createElementVNode("span", { class: "dot off pulse" }, null, -1)), _createTextVNode(" " + _toDisplayString(t.insBuilding), 1)]))
                    : insCur
                      ? (_openBlock(), _createElementBlock("span", _hoisted_334, _toDisplayString(t.insWhen) + " " + _toDisplayString(insAt(insCur.at)), 1))
                      : _createCommentVNode("", true), _createElementVNode("button", {
                    class: "btn xs",
                    type: "button",
                    disabled: insRunning || !(ins && ins.ready),
                    onClick: $event => (refreshInsight(insSel))
                  }, "↻ " + _toDisplayString(t.insRefresh), 9, _hoisted_335)]),
                  insCur
                    ? (_openBlock(), _createElementBlock("p", _hoisted_336, [
                        _createElementVNode("span", _hoisted_337, _toDisplayString(insRange(insCur)), 1),
                        (insCur.freeze)
                          ? (_openBlock(), _createElementBlock("span", _hoisted_338, " · " + _toDisplayString(fill(t.insFreeze, fmt(insCur.freeze))), 1))
                          : _createCommentVNode("", true),
                        insCmp
                          ? (_openBlock(), _createElementBlock("span", _hoisted_339, " · " + _toDisplayString(fill(t.insVs, insCmp.version)), 1))
                          : _createCommentVNode("", true),
                        (insCur.released === false && insCur.repos.some((r) => !r.problem))
                          ? (_openBlock(), _createElementBlock("span", _hoisted_340, " · " + _toDisplayString(t.insNotTagged), 1))
                          : _createCommentVNode("", true)
                      ]))
                    : _createCommentVNode("", true),
                  (insData && insData.error)
                    ? (_openBlock(), _createElementBlock("p", _hoisted_341, _toDisplayString(insData.error), 1))
                    : _createCommentVNode("", true),
                  insCur
                    ? (_openBlock(), _createElementBlock(_Fragment, { key: 2 }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(insCur.problems, (p) => {
                        return (_openBlock(), _createElementBlock("p", {
                          key: p,
                          class: "ix-warn"
                        }, [_cache[40] || (_cache[40] = _createElementVNode("b", { "aria-hidden": "true" }, "▲", -1)), _createTextVNode(_toDisplayString(p), 1)]))
                      }), 128)), (insCur.cut)
                        ? (_openBlock(), _createElementBlock("p", _hoisted_342, [_cache[41] || (_cache[41] = _createElementVNode("b", { "aria-hidden": "true" }, "▲", -1)), _createTextVNode(_toDisplayString(t.insCut), 1)]))
                        : _createCommentVNode("", true)], 64))
                    : _createCommentVNode("", true)
                ]))
              : _createCommentVNode("", true),
            (insSel && (insSt || insCur))
              ? (_openBlock(), _createElementBlock("div", {
                  key: 4,
                  class: _normalizeClass(["ix-over", { solo: !(insSt && insCur) }])
                }, [insSt
                  ? (_openBlock(), _createElementBlock("section", {
                      key: 0,
                      class: _normalizeClass(["w ix-ai", { refetch: insSt.status === 'reading' && insSt.result }]),
                      "aria-label": t.ix.stH,
                      "aria-busy": insSt.status === 'reading'
                    }, [
                      _createElementVNode("div", _hoisted_344, [_createElementVNode("span", _hoisted_345, [_cache[42] || (_cache[42] = _createElementVNode("span", {
                        class: "ix-spark",
                        "aria-hidden": "true"
                      }, "✦", -1)), _createTextVNode(_toDisplayString(t.ix.stH), 1)]), _createElementVNode("button", {
                        class: "btn xs",
                        type: "button",
                        disabled: insSt.status === 'reading' || insSt.status === 'down',
                        onClick: $event => (readStatus(insSel, true))
                      }, "↻ " + _toDisplayString(t.ix.stAsk), 9, _hoisted_346), _createElementVNode("button", {
                        class: "btn xs",
                        type: "button",
                        onClick: $event => (askAbout(insSel))
                      }, _toDisplayString(t.ix.stCmd), 9, _hoisted_347)]),
                      (insSt.result)
                        ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [_createElementVNode("p", _hoisted_348, [_createElementVNode("span", { class: _normalizeClass(["ix-verdict", 'v-' + insSt.result.verdict]) }, [_cache[43] || (_cache[43] = _createElementVNode("i", null, null, -1)), _createTextVNode(_toDisplayString(t.ix.verdict[insSt.result.verdict]), 1)], 2), _createTextVNode(_toDisplayString(insSt.result.headline), 1)]), (insSt.result.next.length || insSt.result.fine)
                            ? (_openBlock(), _createElementBlock("div", _hoisted_349, [(insSt.result.next.length)
                                ? (_openBlock(), _createElementBlock("div", _hoisted_350, _toDisplayString(t.ix.stNext), 1))
                                : _createCommentVNode("", true), _createElementVNode("ol", _hoisted_351, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(insSt.result.next, (a, i) => {
                                return (_openBlock(), _createElementBlock("li", {
                                  key: i,
                                  class: _normalizeClass(a.level)
                                }, [_createElementVNode("span", _hoisted_352, _toDisplayString(a.level === 'high' ? '!' : '▲'), 1), _createElementVNode("span", null, [_createTextVNode(_toDisplayString(a.text) + " ", 1), (a.refs.length)
                                  ? (_openBlock(), _createElementBlock("span", _hoisted_353, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(a.refs, (r) => {
                                      return (_openBlock(), _createElementBlock("button", {
                                        key: r,
                                        type: "button",
                                        class: "ix-ref",
                                        onClick: $event => (stGo(r, insSel, $event))
                                      }, _toDisplayString(stRefLabel(r, insSel)), 9, _hoisted_354))
                                    }), 128))]))
                                  : _createCommentVNode("", true)])], 2))
                              }), 128)), (insSt.result.fine)
                                ? (_openBlock(), _createElementBlock("li", _hoisted_355, [_cache[44] || (_cache[44] = _createElementVNode("span", {
                                    class: "ic",
                                    "aria-hidden": "true"
                                  }, "✓", -1)), _createElementVNode("span", null, _toDisplayString(insSt.result.fine), 1)]))
                                : _createCommentVNode("", true)])]))
                            : _createCommentVNode("", true), (insSt.dropped.length)
                            ? (_openBlock(), _createElementBlock("p", _hoisted_356, [_createTextVNode(_toDisplayString(fill(t.ix.stDropped, String(insSt.dropped.length))) + " ", 1), _createElementVNode("span", _hoisted_357, _toDisplayString(insSt.dropped.map((d) => d.claim).join(', ')), 1)]))
                            : _createCommentVNode("", true)], 64))
                        : (insSt.status === 'reading')
                          ? (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [_createElementVNode("p", _hoisted_358, [_cache[45] || (_cache[45] = _createElementVNode("span", { "aria-hidden": "true" }, "✦", -1)), _createTextVNode(" " + _toDisplayString(t.ix.stReading), 1)]), _cache[46] || (_cache[46] = _createElementVNode("div", { class: "ix-shimmer" }, null, -1)), _cache[47] || (_cache[47] = _createElementVNode("div", { class: "ix-shimmer short" }, null, -1))], 64))
                          : (insSt.status === 'down')
                            ? (_openBlock(), _createElementBlock("p", _hoisted_359, _toDisplayString(t.ix.stDown) + " " + _toDisplayString(insSt.error), 1))
                            : (insSt.status === 'none')
                              ? (_openBlock(), _createElementBlock("p", _hoisted_360, _toDisplayString(t.ix.stNone), 1))
                              : _createCommentVNode("", true),
                      (insSt.status === 'bad')
                        ? (_openBlock(), _createElementBlock("p", _hoisted_361, _toDisplayString(insSt.error), 1))
                        : _createCommentVNode("", true),
                      _createElementVNode("div", _hoisted_362, [
                        (insSt.status === 'reading' && insSt.result)
                          ? (_openBlock(), _createElementBlock("span", _hoisted_363, [_cache[48] || (_cache[48] = _createElementVNode("span", { class: "dot off pulse" }, null, -1)), _createTextVNode(" " + _toDisplayString(t.ix.stReading), 1)]))
                          : _createCommentVNode("", true),
                        (insSt.at)
                          ? (_openBlock(), _createElementBlock("span", _hoisted_364, _toDisplayString(insSt.agent) + " · " + _toDisplayString(insAt(insSt.at)), 1))
                          : _createCommentVNode("", true),
                        (insSt.result)
                          ? (_openBlock(), _createElementBlock("span", _hoisted_365, "✓ " + _toDisplayString(fill(t.ix.stChecked, String(insSt.result.checked))), 1))
                          : _createCommentVNode("", true),
                        (insSt.stale && insSt.status !== 'reading')
                          ? (_openBlock(), _createElementBlock("span", _hoisted_366, _toDisplayString(t.ix.stStale), 1))
                          : _createCommentVNode("", true),
                        _createElementVNode("button", {
                          type: "button",
                          class: "link",
                          "aria-expanded": insFacts,
                          onClick: $event => (insFacts = !insFacts)
                        }, _toDisplayString(t.ix.stRead), 9, _hoisted_367),
                        _createElementVNode("span", null, _toDisplayString(t.ix.stOnly), 1)
                      ]),
                      insFacts
                        ? (_openBlock(), _createElementBlock("table", _hoisted_368, [_createElementVNode("tbody", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(insSt.lines, (l) => {
                            return (_openBlock(), _createElementBlock("tr", { key: l.part }, [_createElementVNode("td", null, _toDisplayString(t.ix.part[l.part] || l.part), 1), _createElementVNode("td", null, _toDisplayString(l.text), 1), _createElementVNode("td", null, _toDisplayString(l.at ? insAt(l.at) : '—'), 1)]))
                          }), 128))])]))
                        : _createCommentVNode("", true)
                    ], 10, _hoisted_343))
                  : _createCommentVNode("", true), insCur
                  ? (_openBlock(), _createElementBlock("section", {
                      key: 1,
                      class: _normalizeClass(["w ix-rc", { refetch: insRunning }]),
                      "aria-label": t.ix.rcH
                    }, [
                      _createElementVNode("div", _hoisted_370, _toDisplayString(t.ix.rcH), 1),
                      _createElementVNode("div", { class: _normalizeClass(["ix-rc-lvl", 'lvl-t-' + insCur.level]) }, _toDisplayString(t.insLvl[insCur.level]), 3),
                      (insCur.risks.length)
                        ? (_openBlock(), _createElementBlock("div", {
                            key: 0,
                            class: "ix-lamps",
                            role: "img",
                            "aria-label": insSignals
                          }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(insCur.risks, (r) => {
                            return (_openBlock(), _createElementBlock("i", {
                              key: r.key,
                              class: _normalizeClass(r.level),
                              title: r.title
                            }, null, 10, _hoisted_372))
                          }), 128))], 8, _hoisted_371))
                        : _createCommentVNode("", true),
                      _createElementVNode("div", _hoisted_373, [_createElementVNode("b", null, _toDisplayString(fill(t.insRisksN, String(insCur.risks.length))), 1), (insCur.risks.length)
                        ? (_openBlock(), _createElementBlock("span", _hoisted_374, " · " + _toDisplayString(insSignals), 1))
                        : _createCommentVNode("", true)]),
                      (insTrend && insTrend.rows.length > 1)
                        ? (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [_createElementVNode("div", _hoisted_375, _toDisplayString(t.ix.rcEarlier), 1), _createElementVNode("div", _hoisted_376, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(insTrend.rows, (r) => {
                            return (_openBlock(), _createElementBlock("button", {
                              key: r.version,
                              type: "button",
                              class: _normalizeClass(["ix-er", { cur: r.current }]),
                              title: r.version + ': ' + t.insLevel[r.level],
                              onClick: $event => (openInsight(r.version))
                            }, [_createElementVNode("span", _hoisted_378, _toDisplayString(r.label), 1), _createElementVNode("i", { class: _normalizeClass(r.level) }, null, 2)], 10, _hoisted_377))
                          }), 128))])], 64))
                        : _createCommentVNode("", true),
                      _createElementVNode("p", _hoisted_379, _toDisplayString(t.ix.rcNote), 1)
                    ], 10, _hoisted_369))
                  : _createCommentVNode("", true)], 2))
              : _createCommentVNode("", true),
            (insSel && insCur)
              ? (_openBlock(), _createElementBlock(_Fragment, { key: 5 }, [_createElementVNode("section", {
                  class: _normalizeClass(["w ix-nums", { refetch: insRunning }]),
                  "aria-label": t.ix.numsH
                }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(INS_GROUPS, (g) => {
                  return (_openBlock(), _createElementBlock("div", {
                    key: g.k,
                    class: "ix-grp"
                  }, [_createElementVNode("div", _hoisted_381, _toDisplayString(t.ix.grp[g.k]), 1), _createElementVNode("div", _hoisted_382, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(g.items, (k) => {
                    return (_openBlock(), _createElementBlock("div", {
                      key: k,
                      class: "ix-stat"
                    }, [_createElementVNode("span", _hoisted_383, _toDisplayString(t.insK[k]), 1), _createElementVNode("b", { class: _normalizeClass(["ix-stat-n", insKpiClass(k)]) }, [_createTextVNode(_toDisplayString(insKpi(k)), 1), (k === 'repos' && !insUnread(k))
                      ? (_openBlock(), _createElementBlock("span", _hoisted_384, " / " + _toDisplayString(insCur.stats.repos), 1))
                      : _createCommentVNode("", true)], 2), _createElementVNode("span", _hoisted_385, _toDisplayString(insKpiSub(k) || ' '), 1)]))
                  }), 128))])]))
                }), 128))], 10, _hoisted_380), _createElementVNode("section", { class: _normalizeClass(["w", { refetch: insRunning }]) }, [_createElementVNode("div", _hoisted_386, [_createElementVNode("h2", null, _toDisplayString(t.insRisks) + " · " + _toDisplayString(insCur.risks.length), 1), (insCur.risks.some((r) => insListOf(r.key)))
                  ? (_openBlock(), _createElementBlock("span", _hoisted_387, _toDisplayString(t.ix.riskHint), 1))
                  : _createCommentVNode("", true)]), (!insCur.risks.length)
                  ? (_openBlock(), _createElementBlock("p", _hoisted_388, _toDisplayString(t.insNoRisks), 1))
                  : (_openBlock(), _createElementBlock("ul", _hoisted_389, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(insCur.risks, (r) => {
                      return (_openBlock(), _createElementBlock("li", {
                        id: 'ins-risk-' + r.key,
                        key: r.key,
                        class: _normalizeClass({ open: insRisk[r.key] && insListOf(r.key), flat: !insListOf(r.key), hit: insHit === r.key })
                      }, [_createElementVNode("button", {
                        type: "button",
                        class: "ix-risk-b",
                        disabled: !insListOf(r.key),
                        "aria-expanded": insListOf(r.key) ? !!insRisk[r.key] : null,
                        onClick: $event => (insRisk[r.key] = !insRisk[r.key])
                      }, [_createElementVNode("span", { class: _normalizeClass(["pill lvl", 'lvl-' + r.level]) }, _toDisplayString(insIcon(r.level)) + " " + _toDisplayString(t.insLvl[r.level]), 3), _createElementVNode("span", _hoisted_392, [_createElementVNode("b", null, _toDisplayString(r.title), 1), (r.detail)
                        ? (_openBlock(), _createElementBlock("span", _hoisted_393, " · " + _toDisplayString(r.detail), 1))
                        : _createCommentVNode("", true)]), _createElementVNode("span", _hoisted_394, _toDisplayString(insListOf(r.key) ? '▾' : ''), 1)], 8, _hoisted_391), (insRisk[r.key] && insListOf(r.key))
                        ? (_openBlock(), _createElementBlock("div", _hoisted_395, [(insListOf(r.key) === 'late')
                            ? (_openBlock(), _createElementBlock("ul", _hoisted_396, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(insCur.lists.late, (c) => {
                                return (_openBlock(), _createElementBlock("li", { key: c.repo + c.id }, [_createElementVNode("a", {
                                  href: c.url,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  class: "mono"
                                }, _toDisplayString(c.short), 9, _hoisted_397), _createTextVNode(" " + _toDisplayString(c.repo) + " · " + _toDisplayString(insAt(c.at)) + " · " + _toDisplayString(c.author) + " · " + _toDisplayString(c.subject), 1)]))
                              }), 128))]))
                            : (['other_fix', 'missing_fix', 'no_commit', 'open'].includes(insListOf(r.key)))
                              ? (_openBlock(), _createElementBlock("ul", _hoisted_398, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(insRiskIssues(r.key), (i) => {
                                  return (_openBlock(), _createElementBlock("li", { key: i.key }, [
                                    _createElementVNode("a", {
                                      href: i.url,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      class: "mono"
                                    }, _toDisplayString(i.key), 9, _hoisted_399),
                                    _createTextVNode(" " + _toDisplayString(i.type) + " · " + _toDisplayString(i.summary) + " · " + _toDisplayString(i.status), 1),
                                    (i.priority && r.key === 'urgent')
                                      ? (_openBlock(), _createElementBlock("span", _hoisted_400, _toDisplayString(i.priority), 1))
                                      : _createCommentVNode("", true),
                                    (r.key === 'missing_fix' || r.key === 'other_fix')
                                      ? (_openBlock(), _createElementBlock("span", _hoisted_401, [_createTextVNode(" · fixVersion " + _toDisplayString(i.fix.join(', ') || '—') + " · " + _toDisplayString(t.insFoundIn) + " ", 1), _createElementVNode("a", {
                                          href: i.commit,
                                          target: "_blank",
                                          rel: "noopener noreferrer"
                                        }, _toDisplayString(i.found_in), 9, _hoisted_402)]))
                                      : _createCommentVNode("", true)
                                  ]))
                                }), 128))]))
                              : (_openBlock(), _createElementBlock("ul", _hoisted_403, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(insCur.lists[insListOf(r.key)], (f) => {
                                  return (_openBlock(), _createElementBlock("li", { key: f.repo + f.path }, [_createTextVNode(_toDisplayString(f.repo) + "/" + _toDisplayString(f.path) + " ", 1), _createElementVNode("span", _hoisted_404, _toDisplayString(f.type.toLowerCase()), 1)]))
                                }), 128))])), (insCur.stats[insListOf(r.key)] > insCur.lists[insListOf(r.key)].length)
                            ? (_openBlock(), _createElementBlock("p", _hoisted_405, _toDisplayString(fill(t.insMore, String(insCur.stats[insListOf(r.key)] - insCur.lists[insListOf(r.key)].length))), 1))
                            : _createCommentVNode("", true)]))
                        : _createCommentVNode("", true)], 10, _hoisted_390))
                    }), 128))]))], 2), _createElementVNode("section", {
                  id: "ins-details",
                  class: _normalizeClass(["w ix-details", { refetch: insRunning }])
                }, [_createElementVNode("div", {
                  class: "tabs",
                  role: "group",
                  "aria-label": t.ix.details
                }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(insTabs, (d) => {
                  return (_openBlock(), _createElementBlock("button", {
                    key: d.k,
                    type: "button",
                    class: "tab",
                    "aria-pressed": insTab === d.k,
                    onClick: $event => (insTab = d.k)
                  }, [_createTextVNode(_toDisplayString(t.ix.tab[d.k]), 1), (d.n !== null)
                    ? (_openBlock(), _createElementBlock("span", _hoisted_408, _toDisplayString(d.n), 1))
                    : _createCommentVNode("", true)], 8, _hoisted_407))
                }), 128))], 8, _hoisted_406), (insTab === 'issues')
                  ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [
                      _createElementVNode("div", {
                        class: "ix-filters",
                        role: "group",
                        "aria-label": t.ix.show
                      }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(insFilters, (f) => {
                        return (_openBlock(), _createElementBlock(_Fragment, { key: f.k }, [(f.n || f.k === 'all')
                          ? (_openBlock(), _createElementBlock("button", {
                              key: 0,
                              type: "button",
                              "aria-pressed": insF === f.k,
                              onClick: $event => {insFilter = f.k; insAll = false}
                            }, _toDisplayString(t.ix.filter[f.k]) + " · " + _toDisplayString(f.n), 9, _hoisted_410))
                          : _createCommentVNode("", true)], 64))
                      }), 128)), _withDirectives(_createElementVNode("input", {
                        "onUpdate:modelValue": $event => ((insFind) = $event),
                        type: "search",
                        placeholder: t.ix.find,
                        "aria-label": t.ix.find,
                        autocomplete: "off",
                        spellcheck: "false"
                      }, null, 8, _hoisted_411), [[
                        _vModelText,
                        insFind,
                        void 0,
                        { trim: true }
                      ]])], 8, _hoisted_409),
                      (!insIssueRows.length)
                        ? (_openBlock(), _createElementBlock("p", _hoisted_412, _toDisplayString(insIssues.length ? t.ix.noMatch : '—'), 1))
                        : (_openBlock(), _createElementBlock("div", _hoisted_413, [_createElementVNode("table", _hoisted_414, [_createElementVNode("thead", null, [_createElementVNode("tr", null, [
                            _createElementVNode("th", null, _toDisplayString(t.insKey), 1),
                            _createElementVNode("th", null, _toDisplayString(t.insType), 1),
                            _createElementVNode("th", null, _toDisplayString(t.insSummary), 1),
                            _createElementVNode("th", null, _toDisplayString(t.insStatus), 1),
                            _createElementVNode("th", null, _toDisplayString(t.ix.inCode), 1)
                          ])]), _createElementVNode("tbody", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(insIssueShown, (i) => {
                            return (_openBlock(), _createElementBlock("tr", {
                              key: i.key,
                              class: _normalizeClass({ known: i.done })
                            }, [
                              _createElementVNode("td", null, [_createElementVNode("a", {
                                href: i.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                class: "mono"
                              }, _toDisplayString(i.key), 9, _hoisted_415)]),
                              _createElementVNode("td", null, _toDisplayString(i.type), 1),
                              _createElementVNode("td", { title: i.summary }, [_createTextVNode(_toDisplayString(i.summary), 1), (i.otherFix)
                                ? (_openBlock(), _createElementBlock("span", _hoisted_417, "fixVersion " + _toDisplayString(i.fix.join(', ')), 1))
                                : _createCommentVNode("", true), (i.noFix)
                                ? (_openBlock(), _createElementBlock("span", _hoisted_418, _toDisplayString(t.ix.noFix), 1))
                                : _createCommentVNode("", true)], 8, _hoisted_416),
                              _createElementVNode("td", null, [_createTextVNode(_toDisplayString(i.status), 1), (i.urgent)
                                ? (_openBlock(), _createElementBlock("span", _hoisted_419, _toDisplayString(i.priority), 1))
                                : _createCommentVNode("", true)]),
                              _createElementVNode("td", null, [(i.found_in)
                                ? (_openBlock(), _createElementBlock("a", {
                                    key: 0,
                                    href: i.commit,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    class: "mono"
                                  }, _toDisplayString(i.found_in), 9, _hoisted_420))
                                : (i.noCommit)
                                  ? (_openBlock(), _createElementBlock("span", _hoisted_421, _toDisplayString(t.ix.noCommit), 1))
                                  : (_openBlock(), _createElementBlock("span", _hoisted_422, "—"))])
                            ], 2))
                          }), 128))])])])),
                      (insIssueRows.length)
                        ? (_openBlock(), _createElementBlock("div", _hoisted_423, [_createElementVNode("span", null, [_createTextVNode(_toDisplayString(insIssueShown.length) + " " + _toDisplayString(fill(t.insOf, String(insIssues.length))), 1), (insF === 'look')
                            ? (_openBlock(), _createElementBlock("span", _hoisted_424, " · " + _toDisplayString(t.ix.lookHint), 1))
                            : _createCommentVNode("", true)]), (insIssueRows.length > insIssueShown.length)
                            ? (_openBlock(), _createElementBlock("button", {
                                key: 0,
                                type: "button",
                                class: "link",
                                onClick: $event => (insAll = true)
                              }, _toDisplayString(fill(t.ix.showAll, String(insIssueRows.length))), 9, _hoisted_425))
                            : _createCommentVNode("", true)]))
                        : _createCommentVNode("", true),
                      insIssuesCut
                        ? (_openBlock(), _createElementBlock("p", _hoisted_426, _toDisplayString(fill(t.ix.notKept, String(insIssuesCut))), 1))
                        : _createCommentVNode("", true)
                    ], 64))
                  : (insTab === 'code')
                    ? (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [(insCur.timeline)
                        ? (_openBlock(), _createElementBlock("div", _hoisted_427, [_createElementVNode("div", _hoisted_428, [_createTextVNode(_toDisplayString(t.insTlH), 1), (insCur.freeze)
                            ? (_openBlock(), _createElementBlock("span", _hoisted_429, " · " + _toDisplayString(fill(t.insFreeze, fmt(insCur.freeze))), 1))
                            : _createCommentVNode("", true)]), _createVNode(_component_commit_timeline, {
                            tl: insCur.timeline,
                            t: t,
                            lang: lang
                          }, null, 8, ["tl", "t", "lang"]), (insCur.timeline.cut)
                            ? (_openBlock(), _createElementBlock("p", _hoisted_430, _toDisplayString(fill(t.insTlCut, String(insCur.timeline.days.length))), 1))
                            : _createCommentVNode("", true)]))
                        : (!('timeline' in insCur) && insCur.stats.commits)
                          ? (_openBlock(), _createElementBlock("p", _hoisted_431, _toDisplayString(t.insTlOld), 1))
                          : _createCommentVNode("", true), (insShares.rows.length > 1 && insShares.total)
                        ? (_openBlock(), _createElementBlock("div", _hoisted_432, [_createElementVNode("div", _hoisted_433, [_createElementVNode("span", null, _toDisplayString(t.insShareH) + " · " + _toDisplayString(fill(t.insShareOf, insShares.total + ' ' + t.insK[insMetric].toLowerCase())), 1), _createElementVNode("span", {
                            class: "seg ins-seg",
                            role: "group",
                            "aria-label": t.insShareH
                          }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(['files', 'commits'], (m) => {
                            return (_openBlock(), _createElementBlock("button", {
                              key: m,
                              type: "button",
                              "aria-pressed": insMetric === m,
                              onClick: $event => (insMetric = m)
                            }, _toDisplayString(t.insK[m]), 9, _hoisted_435))
                          }), 128))], 8, _hoisted_434)]), _createElementVNode("ul", _hoisted_436, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(insShares.rows, (r) => {
                            return (_openBlock(), _createElementBlock("li", {
                              key: r.name,
                              tabindex: "0",
                              "aria-label": insShareText(r),
                              class: _normalizeClass({ zero: !r.value })
                            }, [
                              _createElementVNode("span", _hoisted_438, _toDisplayString(r.name), 1),
                              _createElementVNode("span", _hoisted_439, [_createElementVNode("span", {
                                class: "ins-bar-f",
                                style: _normalizeStyle({ width: (r.share * 100).toFixed(1) + '%' })
                              }, null, 4)]),
                              _createElementVNode("span", _hoisted_440, [_createElementVNode("b", null, _toDisplayString(r.value), 1), _createTextVNode(" · " + _toDisplayString(Math.round(r.share * 100)) + " %", 1)]),
                              _createElementVNode("span", _hoisted_441, _toDisplayString(insShareText(r)), 1)
                            ], 10, _hoisted_437))
                          }), 128))]), (insShares.unread.length)
                            ? (_openBlock(), _createElementBlock("p", _hoisted_442, _toDisplayString(fill(t.insNotRead, insShares.unread.join(', '))), 1))
                            : _createCommentVNode("", true)]))
                        : _createCommentVNode("", true), (insCur.repos.length)
                        ? (_openBlock(), _createElementBlock("div", _hoisted_443, [_createElementVNode("div", _hoisted_444, _toDisplayString(t.insReposH) + " · " + _toDisplayString(insCur.stats.repos_changed) + " / " + _toDisplayString(insCur.stats.repos), 1), _createElementVNode("div", _hoisted_445, [_createElementVNode("table", _hoisted_446, [_createElementVNode("thead", null, [_createElementVNode("tr", null, [
                            _cache[49] || (_cache[49] = _createElementVNode("th", { class: "tx" }, "Repo", -1)),
                            _createElementVNode("th", _hoisted_447, _toDisplayString(t.insRange), 1),
                            _createElementVNode("th", null, _toDisplayString(t.insK.commits), 1),
                            _createElementVNode("th", null, _toDisplayString(t.insK.files), 1),
                            _cache[50] || (_cache[50] = _createElementVNode("th", null, "DB", -1)),
                            _createElementVNode("th", null, _toDisplayString(t.insK.interface), 1),
                            _cache[51] || (_cache[51] = _createElementVNode("th", null, "Config", -1)),
                            _cache[52] || (_cache[52] = _createElementVNode("th", null, "Deps", -1)),
                            _createElementVNode("th", null, _toDisplayString(t.insK.authors), 1),
                            _createElementVNode("th", _hoisted_448, _toDisplayString(t.insLast), 1)
                          ])]), _createElementVNode("tbody", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(insCur.repos, (r) => {
                            return (_openBlock(), _createElementBlock("tr", { key: r.project + '/' + r.name }, [
                              _createElementVNode("td", _hoisted_449, [(r.url)
                                ? (_openBlock(), _createElementBlock("a", {
                                    key: 0,
                                    href: r.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                  }, _toDisplayString(r.name), 9, _hoisted_450))
                                : (_openBlock(), _createElementBlock("span", _hoisted_451, _toDisplayString(r.name), 1))]),
                              _createElementVNode("td", {
                                class: _normalizeClass(["tx ins-range", { wrap: r.problem }]),
                                title: r.problem
                              }, [(r.problem)
                                ? (_openBlock(), _createElementBlock("span", _hoisted_453, _toDisplayString(r.problem), 1))
                                : (r.compare)
                                  ? (_openBlock(), _createElementBlock("a", {
                                      key: 1,
                                      href: r.compare,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      class: "mono"
                                    }, _toDisplayString(r.from.name) + " → " + _toDisplayString(r.to.name), 9, _hoisted_454))
                                  : _createCommentVNode("", true)], 10, _hoisted_452),
                              _createElementVNode("td", null, [_createTextVNode(_toDisplayString(r.commits), 1), (r.merges)
                                ? (_openBlock(), _createElementBlock("span", _hoisted_455, " +" + _toDisplayString(r.merges), 1))
                                : _createCommentVNode("", true)]),
                              _createElementVNode("td", null, _toDisplayString(r.files), 1),
                              _createElementVNode("td", { class: _normalizeClass({ 'ins-bad': r.groups.migration }) }, _toDisplayString(r.groups.migration || '—'), 3),
                              _createElementVNode("td", { class: _normalizeClass({ 'ins-bad': r.groups.interface }) }, _toDisplayString(r.groups.interface || '—'), 3),
                              _createElementVNode("td", null, _toDisplayString(r.groups.config || '—'), 1),
                              _createElementVNode("td", null, _toDisplayString(r.groups.dependencies || '—'), 1),
                              _createElementVNode("td", null, _toDisplayString(r.authors || '—'), 1),
                              _createElementVNode("td", _hoisted_456, _toDisplayString(r.last ? insAt(r.last) : '—'), 1)
                            ]))
                          }), 128))])])])]))
                        : _createCommentVNode("", true)], 64))
                    : (insTab === 'files')
                      ? (_openBlock(), _createElementBlock(_Fragment, { key: 2 }, [_createElementVNode("div", _hoisted_457, [_createTextVNode(_toDisplayString(t.ix.filesH), 1), _createVNode(_component_help_tip, {
                          k: "insConfig",
                          open: helpOpen,
                          onToggle: toggleHelp
                        }, null, 8, ["open", "onToggle"])]), (!insCur.stats.repos_read)
                          ? (_openBlock(), _createElementBlock("p", _hoisted_458, _toDisplayString(t.insTrNotRead), 1))
                          : (!insFiles.length)
                            ? (_openBlock(), _createElementBlock("p", _hoisted_459, _toDisplayString(t.ix.noFiles), 1))
                            : (_openBlock(), _createElementBlock("div", _hoisted_460, [_createElementVNode("table", _hoisted_461, [_createElementVNode("thead", null, [_createElementVNode("tr", null, [
                                _cache[53] || (_cache[53] = _createElementVNode("th", null, "Repo", -1)),
                                _createElementVNode("th", null, _toDisplayString(t.insCfgFile), 1),
                                _createElementVNode("th", null, _toDisplayString(t.insCfgChange), 1),
                                _createElementVNode("th", null, _toDisplayString(t.ix.stageKind), 1)
                              ])]), _createElementVNode("tbody", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(insFiles, (f) => {
                                return (_openBlock(), _createElementBlock("tr", { key: f.kind + f.repo + f.path }, [
                                  _createElementVNode("td", _hoisted_462, _toDisplayString(f.repo), 1),
                                  _createElementVNode("td", {
                                    class: "ins-cfg-p",
                                    title: f.path
                                  }, [_createElementVNode("span", _hoisted_464, _toDisplayString(f.dir), 1), _createElementVNode("b", _hoisted_465, _toDisplayString(f.name), 1)], 8, _hoisted_463),
                                  _createElementVNode("td", { class: _normalizeClass({ 'ins-bad': f.type === 'DELETE' }) }, _toDisplayString(t.insCfgType[f.type] || f.type.toLowerCase()), 3),
                                  _createElementVNode("td", null, [(f.kind !== 'config')
                                    ? (_openBlock(), _createElementBlock("span", {
                                        key: 0,
                                        class: _normalizeClass(["pill", { hot: f.kind === 'migration' || f.kind === 'interface' }])
                                      }, _toDisplayString(t.ix.kind[f.kind]), 3))
                                    : (f.stage)
                                      ? (_openBlock(), _createElementBlock("span", _hoisted_466, _toDisplayString(f.stage), 1))
                                      : (_openBlock(), _createElementBlock("span", _hoisted_467, _toDisplayString(t.insCfgAll), 1))])
                                ]))
                              }), 128))])])])), insFilesMore
                          ? (_openBlock(), _createElementBlock("p", _hoisted_468, _toDisplayString(fill(t.insMore, String(insFilesMore))), 1))
                          : _createCommentVNode("", true)], 64))
                      : (insTab === 'trend')
                        ? (_openBlock(), _createElementBlock(_Fragment, { key: 3 }, [(insTrend && insTrend.rows.length > 1)
                            ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [_createElementVNode("div", _hoisted_469, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(INS_TREND, (m) => {
                                return (_openBlock(), _createBlock(_component_trend_chart, {
                                  key: m[0],
                                  title: t.insK[m[0]],
                                  rows: trendRows(m[0], m[1]),
                                  t: t
                                }, null, 8, ["title", "rows", "t"]))
                              }), 128))]), _createElementVNode("div", _hoisted_470, [_createElementVNode("span", _hoisted_471, _toDisplayString(t.insTrRisk), 1), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(insTrend.rows, (r) => {
                                return (_openBlock(), _createElementBlock("button", {
                                  key: r.version,
                                  type: "button",
                                  class: _normalizeClass(["trc-rk", { cur: r.current }]),
                                  onClick: $event => (openInsight(r.version))
                                }, [_createElementVNode("span", _hoisted_473, _toDisplayString(r.label), 1), _createElementVNode("span", { class: _normalizeClass(["pill lvl", 'lvl-' + r.level]) }, _toDisplayString(insIcon(r.level)) + " " + _toDisplayString(t.insLvl[r.level]), 3)], 10, _hoisted_472))
                              }), 128))])], 64))
                            : (_openBlock(), _createElementBlock("p", _hoisted_474, _toDisplayString(t.insTrFew), 1)), (insTrend && insTrend.missing.length)
                            ? (_openBlock(), _createElementBlock("p", _hoisted_475, [_createTextVNode(_toDisplayString(fill(t.insTrMissing, insTrend.missing.join(', '))) + " ", 1), _createElementVNode("button", {
                                class: "btn xs",
                                type: "button",
                                disabled: !(ins && ins.ready),
                                onClick: buildMissing
                              }, _toDisplayString(t.insTrBuild), 9, _hoisted_476)]))
                            : _createCommentVNode("", true), (ins && ins.running && ins.running.length)
                            ? (_openBlock(), _createElementBlock("p", _hoisted_477, _toDisplayString(t.insBuilding) + " " + _toDisplayString(ins.running.join(', ')), 1))
                            : _createCommentVNode("", true)], 64))
                        : (_openBlock(), _createElementBlock(_Fragment, { key: 4 }, [(!(insCur.lists.authors || []).length)
                            ? (_openBlock(), _createElementBlock("p", _hoisted_478, "—"))
                            : (_openBlock(), _createElementBlock("ul", _hoisted_479, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(insCur.lists.authors, (a) => {
                                return (_openBlock(), _createElementBlock("li", { key: a.name }, [_createElementVNode("span", null, _toDisplayString(a.name), 1), _createElementVNode("span", _hoisted_480, [_createElementVNode("i", { style: _normalizeStyle({ width: (a.commits / insCur.lists.authors[0].commits * 100).toFixed(0) + '%' }) }, null, 4)]), _createElementVNode("b", null, _toDisplayString(a.commits), 1)]))
                              }), 128))]))], 64))], 2)], 64))
              : (insSel && !insRunning && ins && ins.ready)
                ? (_openBlock(), _createElementBlock("p", _hoisted_481, _toDisplayString(t.insNone), 1))
                : _createCommentVNode("", true)
          ]))
        : _createCommentVNode("", true),
      (state && view === 'monitoring')
        ? (_openBlock(), _createElementBlock("main", _hoisted_482, [
            _createElementVNode("section", _hoisted_483, [
              _createElementVNode("div", _hoisted_484, [_createElementVNode("h2", null, [_createTextVNode(_toDisplayString(t.monitoringH), 1), _createVNode(_component_help_tip, {
                k: "monitoring",
                open: helpOpen,
                onToggle: toggleHelp
              }, null, 8, ["open", "onToggle"])]), _createElementVNode("div", _hoisted_485, [(mon && mon.pending)
                ? (_openBlock(), _createElementBlock("span", _hoisted_486, _toDisplayString(t.fetching), 1))
                : (mon && mon.data)
                  ? (_openBlock(), _createElementBlock("span", _hoisted_487, _toDisplayString(t.updated) + " " + _toDisplayString(mon.data.at.slice(11, 16)), 1))
                  : _createCommentVNode("", true), (mon && mon.configured)
                ? (_openBlock(), _createElementBlock("button", {
                    key: 2,
                    class: "btn xs",
                    type: "button",
                    disabled: mon.pending,
                    onClick: $event => (loadMonitoring(true))
                  }, "↻ " + _toDisplayString(t.refreshMon), 9, _hoisted_488))
                : _createCommentVNode("", true), _createElementVNode("button", {
                class: "btn xs",
                type: "button",
                onClick: editMonitoring
              }, _toDisplayString(t.editMon), 9, _hoisted_489)])]),
              mon
                ? (_openBlock(), _createElementBlock("div", _hoisted_490, [_createElementVNode("span", _hoisted_491, _toDisplayString(monWindowText), 1), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(monSources, (s) => {
                    return (_openBlock(), _createElementBlock("span", {
                      key: s[0],
                      class: "chip",
                      title: s[1].detail
                    }, [_createElementVNode("span", { class: _normalizeClass(["dot", { ok: 'g', bad: 'r' }[s[1].status] || 'off']) }, null, 2), _createTextVNode(_toDisplayString(s[0]), 1), (s[1].status === 'bad')
                      ? (_openBlock(), _createElementBlock("span", _hoisted_493, " · " + _toDisplayString(s[1].detail), 1))
                      : _createCommentVNode("", true)], 8, _hoisted_492))
                  }), 128))]))
                : _createCommentVNode("", true),
              (mon && mon.error)
                ? (_openBlock(), _createElementBlock("p", _hoisted_494, _toDisplayString(t.monFailed) + ": " + _toDisplayString(mon.error), 1))
                : _createCommentVNode("", true),
              (mon && !mon.configured && !mon.error)
                ? (_openBlock(), _createElementBlock(_Fragment, { key: 2 }, [_createElementVNode("p", _hoisted_495, _toDisplayString(t.monOff), 1), _createElementVNode("ol", _hoisted_496, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(t.monSetup, (s, i) => {
                    return (_openBlock(), _createElementBlock("li", { key: i }, _toDisplayString(s), 1))
                  }), 128))])], 64))
                : _createCommentVNode("", true)
            ]),
            (mon && mon.configured && monBoard)
              ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [
                  _createElementVNode("section", _hoisted_497, [
                    _createElementVNode("div", _hoisted_498, [_createElementVNode("h2", null, [_createElementVNode("span", { class: _normalizeClass(["wl", monLamps.map]) }, null, 2), _createTextVNode(_toDisplayString(t.mnMap), 1)]), _createElementVNode("span", _hoisted_499, _toDisplayString(monBoard.map.detail), 1)]),
                    _createElementVNode("p", _hoisted_500, _toDisplayString(t.mnMapSub), 1),
                    (monBoard.map.columns.length)
                      ? (_openBlock(), _createElementBlock("div", _hoisted_501, [_createElementVNode("div", {
                          class: "mn-map",
                          style: _normalizeStyle({ gridTemplateColumns: '130px repeat(' + monBoard.map.columns.length + ', minmax(118px, 1fr))', minWidth: (136 + monBoard.map.columns.length * 124) + 'px' })
                        }, [_cache[54] || (_cache[54] = _createElementVNode("div", null, null, -1)), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(monBoard.map.columns, (c) => {
                          return (_openBlock(), _createElementBlock("div", {
                            key: c.stage,
                            class: "mn-colh"
                          }, [
                            _createElementVNode("b", null, _toDisplayString(c.stage), 1),
                            _createElementVNode("span", {
                              class: _normalizeClass(["ver", { bad: c.cs && c.cs.ok === false && c.cs.reach !== false }]),
                              title: c.cs ? c.cs.detail : t.mnNoCs
                            }, [_createTextVNode(_toDisplayString(c.version || '—'), 1), (c.cs && c.cs.ok === false && c.cs.reach !== false)
                              ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [_createTextVNode(" · NOK")], 64))
                              : _createCommentVNode("", true)], 10, _hoisted_502),
                            (c.branch)
                              ? (_openBlock(), _createElementBlock("span", _hoisted_503, "DEV · " + _toDisplayString(c.branch), 1))
                              : _createCommentVNode("", true),
                            _createElementVNode("span", _hoisted_504, [(c.checkservlet)
                              ? (_openBlock(), _createElementBlock("a", {
                                  key: 0,
                                  href: c.checkservlet,
                                  target: "_blank",
                                  rel: "noopener noreferrer"
                                }, "CS ↗", 8, _hoisted_505))
                              : _createCommentVNode("", true), (monColLinks[c.stage].nr)
                              ? (_openBlock(), _createElementBlock("a", {
                                  key: 1,
                                  href: monColLinks[c.stage].nr,
                                  target: "_blank",
                                  rel: "noopener noreferrer"
                                }, "NR ↗", 8, _hoisted_506))
                              : _createCommentVNode("", true), (monColLinks[c.stage].splunk)
                              ? (_openBlock(), _createElementBlock("a", {
                                  key: 2,
                                  href: monColLinks[c.stage].splunk,
                                  target: "_blank",
                                  rel: "noopener noreferrer"
                                }, "Splunk ↗", 8, _hoisted_507))
                              : _createCommentVNode("", true)])
                          ]))
                        }), 128)), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(monBoard.map.rows, (r) => {
                          return (_openBlock(), _createElementBlock(_Fragment, { key: r.app }, [_createElementVNode("div", _hoisted_508, _toDisplayString(r.app), 1), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(r.tiles, (x) => {
                            return (_openBlock(), _createElementBlock("a", {
                              key: x.stage,
                              class: _normalizeClass(["mn-tile", x.state]),
                              href: x.url || null,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              title: monTileTitle(x)
                            }, [_createElementVNode("span", _hoisted_510, _toDisplayString(t.mnState[x.state]), 1), _createElementVNode("span", _hoisted_511, _toDisplayString(monTileText(x)), 1)], 10, _hoisted_509))
                          }), 128))], 64))
                        }), 128))], 4)]))
                      : _createCommentVNode("", true),
                    (monBoard.map.rows.length)
                      ? (_openBlock(), _createElementBlock("div", _hoisted_512, [
                          _cache[55] || (_cache[55] = _createElementVNode("span", { class: "l-ok" }, "OK", -1)),
                          _createElementVNode("span", _hoisted_513, _toDisplayString(t.mnState.warn.slice(2)), 1),
                          _createElementVNode("span", _hoisted_514, _toDisplayString(t.mnState.crit.slice(2)), 1),
                          _createElementVNode("span", _hoisted_515, _toDisplayString(t.mnState.none.slice(2)), 1),
                          _createElementVNode("span", null, "· " + _toDisplayString(t.mnLegendNote), 1)
                        ]))
                      : _createCommentVNode("", true)
                  ]),
                  _createElementVNode("section", _hoisted_516, [_createElementVNode("div", _hoisted_517, [_createElementVNode("h2", null, [_createElementVNode("span", { class: _normalizeClass(["wl", monLamps.perf]) }, null, 2), _createTextVNode(_toDisplayString(t.mnPerf), 1)]), (monBoard.perf.window.length)
                    ? (_openBlock(), _createElementBlock("span", _hoisted_518, _toDisplayString(monFill(t.mnWindow, monBoard.perf.window.join('–'))) + " · " + _toDisplayString(monFill(t.mnLimit, monBoard.perf.limits.p95, monBoard.perf.limits.errors)), 1))
                    : _createCommentVNode("", true)]), (monBoard.perf.detail)
                    ? (_openBlock(), _createElementBlock("p", _hoisted_519, _toDisplayString(monBoard.perf.detail), 1))
                    : _createCommentVNode("", true), _createElementVNode("div", _hoisted_520, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(monPerfEnvs, (e) => {
                    return (_openBlock(), _createElementBlock("div", {
                      key: e.env,
                      class: "mn-card"
                    }, [
                      _createElementVNode("div", _hoisted_521, [
                        _createElementVNode("b", _hoisted_522, _toDisplayString(e.env), 1),
                        _createElementVNode("span", _hoisted_523, _toDisplayString([e.branch, e.version].filter(Boolean).join(' · ') || '—'), 1),
                        _createElementVNode("span", { class: _normalizeClass(["pill", { passed: 'lvl-none', failed: 'lvl-high', empty: 'lvl-low', none: 'lvl-unknown' }[e.status]]) }, _toDisplayString(t.mnPerfSt[e.status]), 3),
                        _createElementVNode("span", _hoisted_524, [(e.report_url)
                          ? (_openBlock(), _createElementBlock("a", {
                              key: 0,
                              href: e.report_url,
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, _toDisplayString(t.mnReport) + " ↗", 9, _hoisted_525))
                          : _createCommentVNode("", true), (e.jenkins)
                          ? (_openBlock(), _createElementBlock("a", {
                              key: 1,
                              href: e.jenkins,
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, "Jenkins ↗", 8, _hoisted_526))
                          : _createCommentVNode("", true), (e.checkservlet)
                          ? (_openBlock(), _createElementBlock("a", {
                              key: 2,
                              href: e.checkservlet,
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, "CS ↗", 8, _hoisted_527))
                          : _createCommentVNode("", true)])
                      ]),
                      (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(e.problems, (p) => {
                        return (_openBlock(), _createElementBlock("p", {
                          key: p,
                          class: "cond small"
                        }, _toDisplayString(p), 1))
                      }), 128)),
                      (e.kpis.length)
                        ? (_openBlock(), _createElementBlock("div", _hoisted_528, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(e.kpis, (k, j) => {
                            return (_openBlock(), _createElementBlock("div", {
                              key: k[0],
                              class: "kpi"
                            }, [_createElementVNode("div", _hoisted_529, _toDisplayString(k[0]), 1), _createElementVNode("div", _hoisted_530, _toDisplayString(k[1]), 1), _createElementVNode("div", { class: _normalizeClass(["delta", k[2].cls]) }, [_createTextVNode(_toDisplayString(k[2].text), 1), (j === 0 && k[2].text !== '—')
                              ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [_createTextVNode(" · " + _toDisplayString(t.mnNightBefore), 1)], 64))
                              : _createCommentVNode("", true)], 2)]))
                          }), 128))]))
                        : _createCommentVNode("", true),
                      (e.chart.bars.length)
                        ? (_openBlock(), _createElementBlock("div", _hoisted_531, [_createElementVNode("div", _hoisted_532, _toDisplayString(monFill(t.mnNights, e.chart.bars.length)) + " · " + _toDisplayString(monFill(t.mnLimitLine, monBoard.perf.limits.p95)), 1), _createElementVNode("div", {
                            class: "mn-bars",
                            role: "img",
                            "aria-label": e.env + ': ' + monFill(t.mnNights, e.chart.bars.length)
                          }, [_createElementVNode("div", {
                            class: "mn-limit",
                            style: _normalizeStyle({ bottom: e.chart.limit + '%' })
                          }, null, 4), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(e.chart.bars, (b) => {
                            return (_openBlock(), _createElementBlock("i", {
                              key: b.date,
                              class: _normalizeClass(b.cls),
                              style: _normalizeStyle({ height: b.h + '%' }),
                              title: b.title
                            }, null, 14, _hoisted_534))
                          }), 128))], 8, _hoisted_533), _createElementVNode("div", _hoisted_535, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(e.chart.axis, (d, j) => {
                            return (_openBlock(), _createElementBlock("span", { key: j }, _toDisplayString(d), 1))
                          }), 128))])]))
                        : _createCommentVNode("", true),
                      (e.failed_in_row >= 2)
                        ? (_openBlock(), _createElementBlock("p", _hoisted_536, _toDisplayString(monFill(t.mnInRow, e.failed_in_row)), 1))
                        : _createCommentVNode("", true)
                    ]))
                  }), 128))])]),
                  monInteView
                    ? (_openBlock(), _createElementBlock("section", _hoisted_537, [
                        _createElementVNode("div", _hoisted_538, [_createElementVNode("h2", null, [_createElementVNode("span", { class: _normalizeClass(["wl", monLamps.inte]) }, null, 2), _createTextVNode(_toDisplayString(t.mnInte), 1)]), _createElementVNode("span", _hoisted_539, _toDisplayString(monInteSource), 1)]),
                        (monInteView.problem)
                          ? (_openBlock(), _createElementBlock("p", _hoisted_540, _toDisplayString(monInteView.problem), 1))
                          : _createCommentVNode("", true),
                        (monInteView.run || monInteView.next)
                          ? (_openBlock(), _createElementBlock("p", _hoisted_541, [(monInteView.run)
                              ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [_createElementVNode("b", null, _toDisplayString(t.mnRun) + ":", 1), _createTextVNode(" " + _toDisplayString(monTestText(monInteView.run)), 1)], 64))
                              : _createCommentVNode("", true), (monInteView.run && monInteView.next)
                              ? (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [_createTextVNode(" · ")], 64))
                              : _createCommentVNode("", true), (monInteView.next)
                              ? (_openBlock(), _createElementBlock(_Fragment, { key: 2 }, [_createElementVNode("b", null, _toDisplayString(t.mnNext) + ":", 1), _createTextVNode(" " + _toDisplayString(monTestText(monInteView.next)), 1)], 64))
                              : _createCommentVNode("", true)]))
                          : _createCommentVNode("", true),
                        (monInteView.run)
                          ? (_openBlock(), _createElementBlock("div", _hoisted_542, [_createElementVNode("span", _hoisted_543, _toDisplayString(t.mnCompare), 1), _createElementVNode("div", {
                              class: "seg",
                              role: "group",
                              "aria-label": t.mnCompare
                            }, [_createElementVNode("button", {
                              type: "button",
                              "aria-pressed": monRef === 'usual' ? 'true' : 'false',
                              onClick: $event => (monPick('usual'))
                            }, _toDisplayString(t.mnUsual), 9, _hoisted_545), _createElementVNode("button", {
                              type: "button",
                              "aria-pressed": monRef !== 'usual' ? 'true' : 'false',
                              "aria-expanded": monCal ? 'true' : 'false',
                              "aria-controls": "mon-cal",
                              onClick: $event => (monCal = !monCal)
                            }, "📅 " + _toDisplayString(monRef === 'usual' ? t.mnPickDay : monRefLabel), 9, _hoisted_546)], 8, _hoisted_544), _createElementVNode("span", _hoisted_547, _toDisplayString(monInteBusy ? t.fetching : monRef === 'usual' ? monFill(t.mnUsualNote, monInteView.ref ? monInteView.ref.evenings.length : 4) : t.mnTestNote), 1)]))
                          : _createCommentVNode("", true),
                        monInteErr
                          ? (_openBlock(), _createElementBlock("p", _hoisted_548, _toDisplayString(monInteErr), 1))
                          : _createCommentVNode("", true),
                        (monCal && monInteView.run)
                          ? (_openBlock(), _createElementBlock("div", {
                              key: 4,
                              id: "mon-cal",
                              class: "mn-cal",
                              onKeydown: _withKeys($event => (monCal = false), ["esc"])
                            }, [_createElementVNode("div", _hoisted_550, [_createElementVNode("button", {
                              type: "button",
                              "aria-label": t.mnEarlier,
                              onClick: $event => (monCalShift--)
                            }, "‹", 8, _hoisted_551), _createElementVNode("b", null, _toDisplayString(t.mnCalH), 1), _createElementVNode("button", {
                              type: "button",
                              "aria-label": t.mnLater,
                              onClick: $event => (monCalShift++)
                            }, "›", 8, _hoisted_552)]), _createElementVNode("div", _hoisted_553, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(monCalMonths, (m) => {
                              return (_openBlock(), _createElementBlock("div", {
                                key: m.key,
                                class: "mn-month"
                              }, [_createElementVNode("b", null, _toDisplayString(m.title), 1), _createElementVNode("div", _hoisted_554, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(t.mnWd, (w) => {
                                return (_openBlock(), _createElementBlock("span", {
                                  key: w,
                                  class: "wd"
                                }, _toDisplayString(w), 1))
                              }), 128)), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(m.cells, (c, j) => {
                                return (_openBlock(), _createElementBlock(_Fragment, { key: j }, [(c.kind === 't')
                                  ? (_openBlock(), _createElementBlock("button", {
                                      key: 0,
                                      type: "button",
                                      class: _normalizeClass(["mn-t", { sel: c.iso === monRef }]),
                                      title: c.title,
                                      "aria-pressed": c.iso === monRef ? 'true' : 'false',
                                      onClick: $event => (monPick(c.iso))
                                    }, _toDisplayString(c.d), 11, _hoisted_555))
                                  : (_openBlock(), _createElementBlock("span", {
                                      key: 1,
                                      class: _normalizeClass(c.kind ? 'mn-' + c.kind : null),
                                      title: c.title || null
                                    }, _toDisplayString(c.d || ''), 11, _hoisted_556))], 64))
                              }), 128))])]))
                            }), 128))]), _createElementVNode("div", _hoisted_557, [_createElementVNode("span", null, [_cache[56] || (_cache[56] = _createElementVNode("i", { class: "mn-t" }, null, -1)), _createTextVNode(_toDisplayString(t.mnCalTest), 1)]), _createElementVNode("span", null, [_cache[57] || (_cache[57] = _createElementVNode("i", { class: "mn-run" }, null, -1)), _createTextVNode(_toDisplayString(t.mnCalRun), 1)]), _createElementVNode("span", null, [_cache[58] || (_cache[58] = _createElementVNode("i", { class: "mn-plan" }, null, -1)), _createTextVNode(_toDisplayString(t.mnCalPlan), 1)])])], 40, _hoisted_549))
                          : _createCommentVNode("", true),
                        (monInteKpis.length)
                          ? (_openBlock(), _createElementBlock("div", _hoisted_558, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(monInteKpis, (k) => {
                              return (_openBlock(), _createElementBlock("div", {
                                key: k[0],
                                class: "kpi"
                              }, [_createElementVNode("div", _hoisted_559, _toDisplayString(k[0]), 1), _createElementVNode("div", _hoisted_560, _toDisplayString(k[1]), 1), _createElementVNode("div", { class: _normalizeClass(["delta", k[2].cls]) }, _toDisplayString(k[2].text), 3)]))
                            }), 128))]))
                          : _createCommentVNode("", true),
                        (monInteView.rows.length)
                          ? (_openBlock(), _createElementBlock("div", _hoisted_561, [_createElementVNode("div", _hoisted_562, _toDisplayString(monTxTitle), 1), _createElementVNode("div", _hoisted_563, [_createElementVNode("table", _hoisted_564, [_createElementVNode("thead", null, [_createElementVNode("tr", null, [
                              _createElementVNode("th", _hoisted_565, _toDisplayString(t.tx), 1),
                              _createElementVNode("th", null, _toDisplayString(t.calls), 1),
                              _createElementVNode("th", null, _toDisplayString(t.mnP95Test), 1),
                              _createElementVNode("th", null, _toDisplayString(monRef === 'usual' ? t.mnP95Usual : monFill(t.mnP95Of, monDm(monRef))), 1),
                              _createElementVNode("th", null, _toDisplayString(t.mnChange), 1)
                            ])]), _createElementVNode("tbody", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(monInteView.rows, (r) => {
                              return (_openBlock(), _createElementBlock("tr", { key: r.name }, [
                                _createElementVNode("td", {
                                  class: "tx",
                                  title: r.name
                                }, _toDisplayString(txShort(r.name)), 9, _hoisted_566),
                                _createElementVNode("td", null, _toDisplayString(r.calls.toLocaleString()), 1),
                                _createElementVNode("td", null, _toDisplayString(fmtS(r.p95)), 1),
                                _createElementVNode("td", null, _toDisplayString(fmtS(r.ref_p95)), 1),
                                _createElementVNode("td", { class: _normalizeClass('mn-' + monDelta(r.p95, r.ref_p95, 'time').cls) }, _toDisplayString(monDelta(r.p95, r.ref_p95, 'time').text), 3)
                              ]))
                            }), 128))])])])]))
                          : _createCommentVNode("", true)
                      ]))
                    : _createCommentVNode("", true),
                  _createElementVNode("section", _hoisted_567, [_createElementVNode("div", _hoisted_568, [_createElementVNode("h2", null, [_createElementVNode("span", { class: _normalizeClass(["wl", monLamps.errors]) }, null, 2), _createTextVNode(_toDisplayString(t.mnErrors), 1)]), _createElementVNode("span", _hoisted_569, _toDisplayString(monFill(t.mnErrSub, monBoard.errors.days || 7)), 1)]), (monBoard.errors.status !== 'ok')
                    ? (_openBlock(), _createElementBlock("p", _hoisted_570, _toDisplayString(monBoard.errors.detail), 1))
                    : (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [_createElementVNode("div", _hoisted_571, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(monBoard.errors.stages, (s) => {
                        return (_openBlock(), _createElementBlock("div", {
                          key: s,
                          class: "kpi"
                        }, [_createElementVNode("div", _hoisted_572, [_createTextVNode(_toDisplayString(s) + " ", 1), (monBoard.errors.links[s])
                          ? (_openBlock(), _createElementBlock("a", {
                              key: 0,
                              class: "job-link",
                              href: monBoard.errors.links[s],
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, "Splunk ↗", 8, _hoisted_573))
                          : _createCommentVNode("", true)]), _createElementVNode("div", _hoisted_574, _toDisplayString((monBoard.errors.counts[s] || 0).toLocaleString()), 1), _createElementVNode("div", { class: _normalizeClass(["delta", monBoard.errors.new[s] ? 'worse' : 'same']) }, _toDisplayString(monBoard.errors.new[s] ? '▲ ' + monFill(t.mnNewKinds, monBoard.errors.new[s]) : t.mnNoNew), 3)]))
                      }), 128))]), (!monBoard.errors.rows.length)
                        ? (_openBlock(), _createElementBlock("p", _hoisted_575, _toDisplayString(t.mnNoErrRows), 1))
                        : (_openBlock(), _createElementBlock("div", _hoisted_576, [_createElementVNode("table", _hoisted_577, [_createElementVNode("thead", null, [_createElementVNode("tr", null, [
                            _createElementVNode("th", null, _toDisplayString(t.mnError), 1),
                            _createElementVNode("th", null, _toDisplayString(t.mnContainer), 1),
                            (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(monBoard.errors.stages, (s) => {
                              return (_openBlock(), _createElementBlock("th", {
                                key: s,
                                class: "num"
                              }, _toDisplayString(s), 1))
                            }), 128)),
                            _createElementVNode("th", null, _toDisplayString(t.mnFirst), 1)
                          ])]), _createElementVNode("tbody", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(monBoard.errors.rows, (r) => {
                            return (_openBlock(), _createElementBlock("tr", {
                              key: r.error + '|' + r.container,
                              class: _normalizeClass({ known: r.known })
                            }, [
                              _createElementVNode("td", { title: r.error }, [_createTextVNode(_toDisplayString(r.error), 1), (r.new)
                                ? (_openBlock(), _createElementBlock("span", _hoisted_579, _toDisplayString(t.mnNew), 1))
                                : (r.known)
                                  ? (_openBlock(), _createElementBlock("span", _hoisted_580, _toDisplayString(t.known), 1))
                                  : _createCommentVNode("", true)], 8, _hoisted_578),
                              _createElementVNode("td", _hoisted_581, _toDisplayString(r.container || '—'), 1),
                              (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(monBoard.errors.stages, (s) => {
                                return (_openBlock(), _createElementBlock("td", {
                                  key: s,
                                  class: "num"
                                }, _toDisplayString(r.n[s] ? r.n[s].toLocaleString() : '—'), 1))
                              }), 128)),
                              _createElementVNode("td", null, _toDisplayString(monWhen(r.first)), 1)
                            ], 2))
                          }), 128))])])])), _createElementVNode("details", _hoisted_582, [_createElementVNode("summary", null, _toDisplayString(t.mnQuery), 1), _createElementVNode("pre", null, _toDisplayString(monBoard.errors.query), 1)])], 64))])
                ], 64))
              : _createCommentVNode("", true),
            (mon && mon.configured && monStages.length)
              ? (_openBlock(), _createElementBlock("section", _hoisted_583, [_createElementVNode("div", _hoisted_584, [_createElementVNode("h2", null, _toDisplayString(monFill(t.mnEvening, mon.window)), 1), _createElementVNode("span", _hoisted_585, _toDisplayString(monWindowText), 1)]), _createElementVNode("div", _hoisted_586, [_createElementVNode("table", _hoisted_587, [_createElementVNode("thead", null, [_createElementVNode("tr", null, [
                  _createElementVNode("th", _hoisted_588, _toDisplayString(t.mnStage), 1),
                  _cache[59] || (_cache[59] = _createElementVNode("th", null, "Apdex", -1)),
                  _createElementVNode("th", null, _toDisplayString(t.metric.avg), 1),
                  _createElementVNode("th", null, _toDisplayString(t.metric.median), 1),
                  _cache[60] || (_cache[60] = _createElementVNode("th", null, "p95", -1)),
                  _cache[61] || (_cache[61] = _createElementVNode("th", null, "p99", -1)),
                  _createElementVNode("th", _hoisted_589, _toDisplayString(t.mnAgainst), 1)
                ])]), _createElementVNode("tbody", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(monStages, (st) => {
                  return (_openBlock(), _createElementBlock("tr", {
                    id: 'mon-' + st.stage,
                    key: st.stage
                  }, [
                    _createElementVNode("td", _hoisted_591, [_createElementVNode("button", {
                      type: "button",
                      class: "mn-open",
                      "aria-expanded": monOpen.includes(st.stage) ? 'true' : 'false',
                      onClick: $event => (monToggle(st.stage))
                    }, [_createElementVNode("span", { class: _normalizeClass(["wl", monLamp(st)]) }, null, 2), _createTextVNode(_toDisplayString(monOpen.includes(st.stage) ? '▾' : '▸') + " " + _toDisplayString(st.stage), 1)], 8, _hoisted_592)]),
                    _createElementVNode("td", null, _toDisplayString(st.now && st.now.apdex !== null ? st.now.apdex.toFixed(2) : '—'), 1),
                    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(['avg', 'median', 'p95', 'p99'], (m) => {
                      return (_openBlock(), _createElementBlock("td", { key: m }, _toDisplayString(st.now ? fmtMs(st.now[m]) : '—'), 1))
                    }), 128)),
                    _createElementVNode("td", {
                      class: _normalizeClass(["tx", 'mn-' + deltaClass(st, 'p95')]),
                      title: st.problems.join(' · ') || null
                    }, _toDisplayString(st.problems.length ? st.problems[0] : 'p95 ' + deltaText(st, 'p95')), 11, _hoisted_593)
                  ], 8, _hoisted_590))
                }), 128))])])]), _createElementVNode("p", _hoisted_594, _toDisplayString(t.mnOpenHint), 1)]))
              : _createCommentVNode("", true),
            (mon && mon.configured && monOpen.length)
              ? (_openBlock(), _createElementBlock("div", {
                  key: 2,
                  class: _normalizeClass(["mon-grid", { refetch: mon.pending && mon.data }])
                }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(monStages.filter((x) => monOpen.includes(x.stage)), (st) => {
                  return (_openBlock(), _createElementBlock("section", {
                    key: st.stage,
                    class: "w mon-stage"
                  }, [
                    _createElementVNode("div", _hoisted_595, [_createElementVNode("h2", null, [_createElementVNode("span", { class: _normalizeClass(["wl", monLamp(st)]) }, null, 2), _createTextVNode(_toDisplayString(st.stage), 1)]), _createElementVNode("span", _hoisted_596, _toDisplayString(st.app || '—'), 1)]),
                    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(st.problems, (p) => {
                      return (_openBlock(), _createElementBlock("p", {
                        key: p,
                        class: "cond small"
                      }, _toDisplayString(p), 1))
                    }), 128)),
                    (st.now)
                      ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [_createElementVNode("div", _hoisted_597, [_createElementVNode("div", _hoisted_598, [_cache[62] || (_cache[62] = _createElementVNode("div", { class: "lbl" }, "Apdex", -1)), _createElementVNode("div", _hoisted_599, _toDisplayString(st.now.apdex === null ? '—' : st.now.apdex.toFixed(2)), 1), _createElementVNode("div", { class: _normalizeClass(["delta", deltaClass(st, 'apdex')]) }, _toDisplayString(deltaText(st, 'apdex')), 3)]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(['avg', 'median', 'p95', 'p99'], (m) => {
                          return (_openBlock(), _createElementBlock("div", {
                            key: m,
                            class: "kpi"
                          }, [_createElementVNode("div", _hoisted_600, _toDisplayString(t.metric[m]), 1), _createElementVNode("div", _hoisted_601, _toDisplayString(fmtMs(st.now[m])), 1), _createElementVNode("div", { class: _normalizeClass(["delta", deltaClass(st, m)]) }, _toDisplayString(deltaText(st, m)), 3)]))
                        }), 128))]), _createElementVNode("p", _hoisted_602, [_createTextVNode(_toDisplayString(st.now.count.toLocaleString()) + " " + _toDisplayString(t.transactions), 1), (st.before)
                          ? (_openBlock(), _createElementBlock("span", _hoisted_603, " · " + _toDisplayString(fill(t.beforeCount, st.before.count.toLocaleString())) + " " + _toDisplayString(mon.data.previous[0].slice(8, 10)) + "." + _toDisplayString(mon.data.previous[0].slice(5, 7)), 1))
                          : _createCommentVNode("", true)])], 64))
                      : _createCommentVNode("", true),
                    (st.series.length && monSpan)
                      ? (_openBlock(), _createBlock(_component_line_chart, {
                          key: 1,
                          points: st.series,
                          start: monSpan.start,
                          end: monSpan.end,
                          deploys: st.deploys,
                          t: t,
                          label: st.stage + ': ' + t.metric.avg + ', ' + t.metric.p95
                        }, null, 8, ["points", "start", "end", "deploys", "t", "label"]))
                      : _createCommentVNode("", true),
                    (st.top.length)
                      ? (_openBlock(), _createElementBlock("div", _hoisted_604, [_createElementVNode("div", _hoisted_605, _toDisplayString(t.topTx), 1), _createElementVNode("div", _hoisted_606, [_createElementVNode("table", _hoisted_607, [_createElementVNode("thead", null, [_createElementVNode("tr", null, [
                          _createElementVNode("th", _hoisted_608, _toDisplayString(t.tx), 1),
                          _createElementVNode("th", null, _toDisplayString(t.calls), 1),
                          _createElementVNode("th", null, _toDisplayString(t.metric.avg), 1),
                          _createElementVNode("th", null, _toDisplayString(t.metric.median), 1),
                          _cache[63] || (_cache[63] = _createElementVNode("th", null, "p95", -1)),
                          _cache[64] || (_cache[64] = _createElementVNode("th", null, "p99", -1))
                        ])]), _createElementVNode("tbody", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(st.top, (x) => {
                          return (_openBlock(), _createElementBlock("tr", { key: x.name }, [
                            _createElementVNode("td", {
                              class: "tx",
                              title: x.name
                            }, _toDisplayString(txShort(x.name)), 9, _hoisted_609),
                            _createElementVNode("td", null, _toDisplayString(x.count.toLocaleString()), 1),
                            _createElementVNode("td", null, _toDisplayString(fmtMs(x.avg)), 1),
                            _createElementVNode("td", null, _toDisplayString(fmtMs(x.median)), 1),
                            _createElementVNode("td", null, _toDisplayString(fmtMs(x.p95)), 1),
                            _createElementVNode("td", null, _toDisplayString(fmtMs(x.p99)), 1)
                          ]))
                        }), 128))])])])]))
                      : _createCommentVNode("", true),
                    (st.errors)
                      ? (_openBlock(), _createElementBlock("div", _hoisted_610, [_createElementVNode("div", _hoisted_611, [_createTextVNode(_toDisplayString(t.splunkErrors) + " · " + _toDisplayString(st.errors.rows.length), 1), (newErrors(st))
                          ? (_openBlock(), _createElementBlock("span", _hoisted_612, " · " + _toDisplayString(fill(t.newRows, newErrors(st))), 1))
                          : _createCommentVNode("", true), (st.errors.link)
                          ? (_openBlock(), _createElementBlock("a", {
                              key: 1,
                              class: "job-link",
                              href: st.errors.link,
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, _toDisplayString(t.openSplunk) + " ↗", 9, _hoisted_613))
                          : _createCommentVNode("", true)]), (!st.errors.rows.length)
                          ? (_openBlock(), _createElementBlock("p", _hoisted_614, _toDisplayString(t.noErrors), 1))
                          : (_openBlock(), _createElementBlock("div", _hoisted_615, [_createElementVNode("table", _hoisted_616, [_createElementVNode("thead", null, [_createElementVNode("tr", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(st.errors.fields, (f) => {
                              return (_openBlock(), _createElementBlock("th", { key: f }, _toDisplayString(f), 1))
                            }), 128))])]), _createElementVNode("tbody", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(st.errors.rows, (r, i) => {
                              return (_openBlock(), _createElementBlock("tr", {
                                key: i,
                                class: _normalizeClass({ known: r.known })
                              }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(r.cells, (c, j) => {
                                return (_openBlock(), _createElementBlock("td", {
                                  key: j,
                                  title: c
                                }, [_createTextVNode(_toDisplayString(c), 1), (r.known && j === 0)
                                  ? (_openBlock(), _createElementBlock("span", _hoisted_618, _toDisplayString(t.known), 1))
                                  : _createCommentVNode("", true)], 8, _hoisted_617))
                              }), 128))], 2))
                            }), 128))])])]))]))
                      : _createCommentVNode("", true)
                  ]))
                }), 128))], 2))
              : _createCommentVNode("", true)
          ]))
        : _createCommentVNode("", true),
      ((state || errTech) && view === 'system')
        ? (_openBlock(), _createElementBlock("main", _hoisted_619, [_createElementVNode("nav", {
            class: "sys-nav",
            "aria-label": t.system
          }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(SYS_TABS, (s) => {
            return (_openBlock(), _createElementBlock("button", {
              key: s,
              type: "button",
              "aria-current": sysTab === s ? 'page' : null,
              onClick: $event => (setSysTab(s))
            }, [_createElementVNode("b", null, _toDisplayString(t.sysTabs[s][0]), 1), _createElementVNode("span", null, _toDisplayString(t.sysTabs[s][1]), 1)], 8, _hoisted_621))
          }), 128))], 8, _hoisted_620), _createElementVNode("div", _hoisted_622, [
            sysError
              ? (_openBlock(), _createElementBlock("p", _hoisted_623, _toDisplayString(sysError), 1))
              : _createCommentVNode("", true),
            (sysTab === 'overview')
              ? (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [_createElementVNode("section", _hoisted_624, [_createElementVNode("div", _hoisted_625, [_createElementVNode("h2", null, [_createElementVNode("span", { class: _normalizeClass(["wl", tech.ok ? 'g' : 'r']) }, null, 2), _createTextVNode(_toDisplayString(t.arch), 1), _createVNode(_component_help_tip, {
                  k: "arch",
                  open: helpOpen,
                  onToggle: toggleHelp
                }, null, 8, ["open", "onToggle"])])]), _createElementVNode("div", _hoisted_626, [_createElementVNode("div", {
                  class: "ar",
                  role: "group",
                  "aria-label": t.arch
                }, [
                  _createElementVNode("div", _hoisted_628, [_createElementVNode("div", _hoisted_629, [
                    _createElementVNode("div", _hoisted_630, [_createElementVNode("b", null, _toDisplayString(t.a.you), 1), _createElementVNode("i", { class: _normalizeClass(["lamp", offline ? 'r' : 'g']) }, null, 2)]),
                    _createElementVNode("div", _hoisted_631, [_createElementVNode("b", null, _toDisplayString(t.a.views), 1), _createElementVNode("span", _hoisted_632, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(arch.views, (v) => {
                      return (_openBlock(), _createElementBlock("span", { key: v }, _toDisplayString(v), 1))
                    }), 128))])]),
                    _createElementVNode("div", _hoisted_633, [_createElementVNode("b", null, _toDisplayString(t.a.cmd), 1)]),
                    _createElementVNode("div", _hoisted_634, [_createElementVNode("b", null, _toDisplayString(t.a.editor), 1)])
                  ]), _createElementVNode("div", { class: _normalizeClass(["ar-box ext", { off: !arch.voice }]) }, [_createElementVNode("div", _hoisted_635, [_createElementVNode("b", null, _toDisplayString(t.a.speech), 1), _createElementVNode("i", { class: _normalizeClass(["lamp", arch.voice ? 'g' : 'off']) }, null, 2)]), _createElementVNode("p", null, _toDisplayString(arch.voice ? t.a.speechBy : t.a.off), 1), (arch.voice)
                    ? (_openBlock(), _createElementBlock("p", _hoisted_636, _toDisplayString(t.a.leaves), 1))
                    : _createCommentVNode("", true)], 2), _createElementVNode("div", _hoisted_637, [_cache[65] || (_cache[65] = _createElementVNode("div", { class: "ar-h" }, [_createElementVNode("b", null, "Outlook")], -1)), _createElementVNode("p", null, _toDisplayString(t.a.outlook), 1)])]),
                  _createElementVNode("div", _hoisted_638, [_cache[66] || (_cache[66] = _createElementVNode("svg", {
                    viewBox: "0 0 60 12",
                    "aria-hidden": "true"
                  }, [_createElementVNode("path", { d: "M4 6 H56 M50 1 L56 6 L50 11 M10 1 L4 6 L10 11" })], -1)), _createElementVNode("span", null, _toDisplayString(t.a.api), 1)]),
                  _createElementVNode("div", _hoisted_639, [_createElementVNode("div", _hoisted_640, [
                    _createElementVNode("div", _hoisted_641, [_createElementVNode("b", null, "Stellwerk · 127.0.0.1:" + _toDisplayString(tech.port), 1), _createElementVNode("i", { class: _normalizeClass(["lamp", arch.stellwerk]) }, null, 2)]),
                    _createElementVNode("div", _hoisted_642, [_createElementVNode("b", null, _toDisplayString(t.a.core), 1), _createElementVNode("span", null, _toDisplayString(t.a.coreNote), 1)]),
                    _createElementVNode("div", _hoisted_643, [_createElementVNode("b", null, _toDisplayString(t.a.rules), 1), _createElementVNode("span", null, _toDisplayString(t.a.rulesNote), 1)]),
                    _createElementVNode("div", _hoisted_644, [_createElementVNode("b", null, _toDisplayString(t.a.reads), 1), _createElementVNode("span", null, _toDisplayString(t.a.readsNote), 1)]),
                    _createElementVNode("div", _hoisted_645, [_createElementVNode("b", null, _toDisplayString(t.a.writes), 1), _createElementVNode("span", null, _toDisplayString(t.a.writesNote), 1)]),
                    _createElementVNode("div", _hoisted_646, [_createElementVNode("b", null, _toDisplayString(fill(t.a.mcp, String(arch.tools.total))), 1), _createElementVNode("span", _hoisted_647, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(['read', 'dig', 'propose'], (k) => {
                      return _withDirectives((_openBlock(), _createElementBlock("span", {
                        key: k,
                        title: t.a.toolKind[k][1]
                      }, _toDisplayString(arch.tools[k]) + " " + _toDisplayString(t.a.toolKind[k][0]), 9, _hoisted_648)), [[_vShow, arch.tools[k]]])
                    }), 128))])]),
                    _createElementVNode("p", _hoisted_649, "Stellwerk " + _toDisplayString(tech.version), 1)
                  ])]),
                  _createElementVNode("div", { class: _normalizeClass(["ar-link two", { off: !arch.on }]) }, [
                    _cache[67] || (_cache[67] = _createElementVNode("svg", {
                      viewBox: "0 0 60 12",
                      "aria-hidden": "true"
                    }, [_createElementVNode("path", { d: "M4 6 H56 M50 1 L56 6 L50 11" })], -1)),
                    _createElementVNode("span", null, _toDisplayString(t.a.ask), 1),
                    _cache[68] || (_cache[68] = _createElementVNode("svg", {
                      viewBox: "0 0 60 12",
                      "aria-hidden": "true"
                    }, [_createElementVNode("path", { d: "M4 6 H56 M10 1 L4 6 L10 11" })], -1)),
                    _createElementVNode("span", null, _toDisplayString(t.a.mcpLink), 1)
                  ], 2),
                  _createElementVNode("div", _hoisted_650, [_createElementVNode("div", { class: _normalizeClass(["ar-box", { off: !arch.on }]) }, [
                    _createElementVNode("div", _hoisted_651, [_createElementVNode("b", null, "Agent server · " + _toDisplayString(arch.host), 1), _createElementVNode("i", { class: _normalizeClass(["lamp", arch.llm]) }, null, 2)]),
                    _createElementVNode("ul", _hoisted_652, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(arch.agents, (a) => {
                      return (_openBlock(), _createElementBlock("li", {
                        key: a.role,
                        class: _normalizeClass({ dim: a.off })
                      }, [
                        _createElementVNode("i", { class: _normalizeClass(["lamp", a.lamp]) }, null, 2),
                        _createElementVNode("b", _hoisted_653, _toDisplayString(a.name || a.role), 1),
                        (a.off || a.missing)
                          ? (_openBlock(), _createElementBlock("span", _hoisted_654, _toDisplayString(a.off ? t.a.off : t.a.missing), 1))
                          : (a.own)
                            ? (_openBlock(), _createElementBlock("span", _hoisted_655, _toDisplayString(a.own), 1))
                            : _createCommentVNode("", true),
                        _createElementVNode("span", _hoisted_656, _toDisplayString(a.text), 1)
                      ], 2))
                    }), 128))]),
                    (arch.model)
                      ? (_openBlock(), _createElementBlock("p", _hoisted_657, [_createTextVNode(_toDisplayString(t.a.defModel) + " ", 1), _createElementVNode("span", _hoisted_658, _toDisplayString(arch.model), 1)]))
                      : _createCommentVNode("", true),
                    (!arch.on)
                      ? (_openBlock(), _createElementBlock("p", _hoisted_659, _toDisplayString(t.a.engineOff), 1))
                      : (!arch.found)
                        ? (_openBlock(), _createElementBlock("p", _hoisted_660, _toDisplayString(t.a.noProject), 1))
                        : (_openBlock(), _createElementBlock("p", _hoisted_661, [_createTextVNode(_toDisplayString(t.a.deny) + " · ", 1), _cache[69] || (_cache[69] = _createElementVNode("span", { class: "mono" }, "\"*\": deny", -1))]))
                  ], 2)]),
                  _createElementVNode("div", { class: _normalizeClass(["ar-link ext", { off: !arch.on }]) }, [_cache[70] || (_cache[70] = _createElementVNode("svg", {
                    viewBox: "0 0 60 12",
                    "aria-hidden": "true"
                  }, [_createElementVNode("path", { d: "M4 6 H56 M50 1 L56 6 L50 11 M10 1 L4 6 L10 11" })], -1)), _createElementVNode("span", null, _toDisplayString(t.a.prompts), 1)], 2),
                  _createElementVNode("div", _hoisted_662, [_createElementVNode("div", { class: _normalizeClass(["ar-box ext", { off: !arch.on }]) }, [_createElementVNode("div", _hoisted_663, [_cache[71] || (_cache[71] = _createElementVNode("b", null, "Model provider", -1)), _createElementVNode("i", { class: _normalizeClass(["lamp", arch.copilot]) }, null, 2)]), _createElementVNode("p", null, _toDisplayString(t.a.copilot), 1), _createElementVNode("p", _hoisted_664, _toDisplayString(t.a.leaves), 1)], 2), _createElementVNode("div", { class: _normalizeClass(["ar-box ext", { off: !arch.rag }]) }, [_createElementVNode("div", _hoisted_665, [_cache[72] || (_cache[72] = _createElementVNode("b", null, "atlas-rag", -1)), _createElementVNode("i", { class: _normalizeClass(["lamp", arch.rag && arch.llm === 'g' ? 'g' : 'off']) }, null, 2)]), _createElementVNode("p", null, _toDisplayString(arch.rag ? t.a.rag : t.a.off), 1)], 2), _createElementVNode("div", { class: _normalizeClass(["ar-box", { off: !arch.localRag }]) }, [_createElementVNode("div", _hoisted_666, [_cache[73] || (_cache[73] = _createElementVNode("b", null, "release-rag", -1)), _createElementVNode("i", { class: _normalizeClass(["lamp", arch.localRag && arch.llm === 'g' ? 'g' : 'off']) }, null, 2)]), _createElementVNode("p", null, _toDisplayString(arch.localRag ? t.a.localRag : t.a.off), 1), _createElementVNode("p", null, [_createElementVNode("b", null, _toDisplayString(t.legend.local), 1)])], 2)]),
                  _createElementVNode("div", _hoisted_667, [_cache[74] || (_cache[74] = _createElementVNode("svg", { viewBox: "0 0 12 40" }, [_createElementVNode("path", { d: "M6 4 V36 M1 30 L6 36 L11 30 M1 10 L6 4 L11 10" })], -1)), _createElementVNode("span", null, _toDisplayString(t.a.sysLink), 1)]),
                  _createElementVNode("div", _hoisted_668, [_createElementVNode("div", _hoisted_669, [_createElementVNode("b", null, _toDisplayString(t.a.systems), 1), _createElementVNode("span", _hoisted_670, _toDisplayString(fill(t.a.connected, arch.systems.filter((s) => s.status === 'ok').length + ' / ' + arch.systems.length)), 1)]), _createElementVNode("ul", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(arch.systems, (s) => {
                    return (_openBlock(), _createElementBlock("li", {
                      key: s.name,
                      title: s.detail || t.svcOff
                    }, [_createElementVNode("i", { class: _normalizeClass(["lamp", { ok: 'g', bad: 'r', unreachable: 'y' }[s.status] || 'off']) }, null, 2), _createElementVNode("b", null, _toDisplayString(s.name), 1), _createElementVNode("span", null, _toDisplayString(t.a.src[s.name] || ''), 1)], 8, _hoisted_671))
                  }), 128))])])
                ], 8, _hoisted_627)]), _createElementVNode("div", _hoisted_672, [
                  _createElementVNode("span", null, [_cache[75] || (_cache[75] = _createElementVNode("i", null, null, -1)), _createTextVNode(_toDisplayString(t.legend.local), 1)]),
                  _createElementVNode("span", null, [_cache[76] || (_cache[76] = _createElementVNode("i", { class: "data" }, null, -1)), _createTextVNode(_toDisplayString(t.legend.data), 1)]),
                  _createElementVNode("span", null, [_cache[77] || (_cache[77] = _createElementVNode("i", { class: "off" }, null, -1)), _createTextVNode(_toDisplayString(t.legend.off), 1)]),
                  _createElementVNode("span", null, [_cache[78] || (_cache[78] = _createElementVNode("i", { class: "lamp g" }, null, -1)), _createTextVNode(_toDisplayString(t.legend.ok), 1)]),
                  _createElementVNode("span", null, [_cache[79] || (_cache[79] = _createElementVNode("i", { class: "lamp y" }, null, -1)), _createTextVNode(_toDisplayString(t.legend.wait), 1)]),
                  _createElementVNode("span", null, [_cache[80] || (_cache[80] = _createElementVNode("i", { class: "lamp r" }, null, -1)), _createTextVNode(_toDisplayString(t.legend.bad), 1)]),
                  _createElementVNode("span", null, [_cache[81] || (_cache[81] = _createElementVNode("i", { class: "lamp off" }, null, -1)), _createTextVNode(_toDisplayString(t.legend.none), 1)])
                ])]), _createElementVNode("section", _hoisted_673, [_createElementVNode("div", _hoisted_674, [_createElementVNode("h2", null, [_createElementVNode("span", { class: _normalizeClass(["wl", tech.ok ? 'g' : 'r']) }, null, 2), _createTextVNode(_toDisplayString(t.tech), 1), _createVNode(_component_help_tip, {
                  k: "tech",
                  open: helpOpen,
                  onToggle: toggleHelp
                }, null, 8, ["open", "onToggle"])]), _cache[82] || (_cache[82] = _createElementVNode("span", { class: "dim mono small" }, "/api/health", -1))]), _createElementVNode("div", _hoisted_675, [_createElementVNode("div", null, [_createElementVNode("div", _hoisted_676, _toDisplayString(t.techApp), 1), _createElementVNode("dl", _hoisted_677, [
                  _createElementVNode("dt", null, _toDisplayString(t.version), 1),
                  _createElementVNode("dd", null, "Stellwerk " + _toDisplayString(tech.version), 1),
                  _createElementVNode("dt", null, _toDisplayString(t.runsAs), 1),
                  _createElementVNode("dd", null, _toDisplayString(tech.exe ? 'exe' : 'Python ' + tech.python) + " · PID " + _toDisplayString(tech.pid), 1),
                  _createElementVNode("dt", null, _toDisplayString(t.uptime), 1),
                  _createElementVNode("dd", null, _toDisplayString(uptime), 1),
                  _createElementVNode("dt", null, _toDisplayString(t.port), 1),
                  _createElementVNode("dd", null, _toDisplayString(tech.port), 1),
                  _createElementVNode("dt", null, _toDisplayString(t.folder), 1),
                  _createElementVNode("dd", _hoisted_678, _toDisplayString(tech.root), 1),
                  (tech.log)
                    ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [_createElementVNode("dt", null, _toDisplayString(t.logFile), 1), _createElementVNode("dd", _hoisted_679, _toDisplayString(tech.log), 1)], 64))
                    : _createCommentVNode("", true)
                ])]), _createElementVNode("div", null, [_createElementVNode("div", _hoisted_680, _toDisplayString(t.techData), 1), _createElementVNode("ul", _hoisted_681, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(tech.files, (f) => {
                  return (_openBlock(), _createElementBlock("li", { key: f.name }, [_createElementVNode("span", { class: _normalizeClass(["dot", f.ok ? 'g' : 'r']) }, null, 2), _createElementVNode("span", _hoisted_682, _toDisplayString(f.name), 1), _createElementVNode("span", _hoisted_683, _toDisplayString(f.ok ? f.n + ' ' + (t.units[f.unit] || f.unit) : f.error), 1)]))
                }), 128))])]), _createElementVNode("div", null, [_createElementVNode("div", _hoisted_684, _toDisplayString(t.techSvc), 1), _createElementVNode("ul", _hoisted_685, [_createElementVNode("li", null, [_cache[83] || (_cache[83] = _createElementVNode("span", { class: "dot g" }, null, -1)), _createElementVNode("span", null, _toDisplayString(t.agDispatcher), 1), _createElementVNode("span", _hoisted_686, _toDisplayString(t.agBuiltin), 1)]), _createElementVNode("li", null, [_createElementVNode("span", { class: _normalizeClass(["dot", llmDot]) }, null, 2), _createElementVNode("span", null, _toDisplayString(t.agLlm), 1), _createElementVNode("span", _hoisted_687, _toDisplayString(llmText), 1)]), _createElementVNode("li", null, [_createElementVNode("span", { class: _normalizeClass(["dot", voiceReady ? 'g' : 'off']) }, null, 2), _createElementVNode("span", null, _toDisplayString(t.voiceLabel), 1), _createElementVNode("span", _hoisted_688, _toDisplayString(voiceState), 1)])])])])])], 64))
              : _createCommentVNode("", true),
            (sys && sysTab === 'settings')
              ? (_openBlock(), _createElementBlock(_Fragment, { key: 2 }, [_createElementVNode("section", _hoisted_689, [
                  _createElementVNode("div", _hoisted_690, [_createElementVNode("h2", null, [_createTextVNode(_toDisplayString(t.settingsH), 1), _createVNode(_component_help_tip, {
                    k: "settings",
                    open: helpOpen,
                    onToggle: toggleHelp
                  }, null, 8, ["open", "onToggle"])]), (fileOf('settings').exists)
                    ? (_openBlock(), _createElementBlock("button", {
                        key: 0,
                        class: "btn xs",
                        type: "button",
                        onClick: $event => (selectFile('settings'))
                      }, _toDisplayString(t.edit) + " stellwerk.yml", 9, _hoisted_691))
                    : _createCommentVNode("", true)]),
                  _createElementVNode("span", _hoisted_692, _toDisplayString(fileOf('settings').path), 1),
                  (sys.settings_error)
                    ? (_openBlock(), _createElementBlock("p", _hoisted_693, _toDisplayString(sys.settings_error), 1))
                    : _createCommentVNode("", true),
                  _createElementVNode("table", _hoisted_694, [_createElementVNode("thead", null, [_createElementVNode("tr", null, [_createElementVNode("th", null, _toDisplayString(t.setKey), 1), _createElementVNode("th", null, _toDisplayString(t.setValue), 1), _createElementVNode("th", null, _toDisplayString(t.setDefault), 1)])]), _createElementVNode("tbody", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(sys.settings, (s) => {
                    return (_openBlock(), _createElementBlock("tr", { key: s.key }, [_createElementVNode("td", null, _toDisplayString(s.key), 1), _createElementVNode("td", null, [_createElementVNode("span", _hoisted_695, _toDisplayString(s.value === '' ? '—' : s.value), 1), _createElementVNode("div", _hoisted_696, [_createTextVNode(_toDisplayString(t.setNotes[s.key]), 1), (s.choices)
                      ? (_openBlock(), _createElementBlock("span", _hoisted_697, " · " + _toDisplayString(s.choices), 1))
                      : _createCommentVNode("", true)])]), _createElementVNode("td", _hoisted_698, _toDisplayString(s.default), 1)]))
                  }), 128))])]),
                  _createElementVNode("div", null, [_createElementVNode("div", _hoisted_699, _toDisplayString(t.palette) + " · " + _toDisplayString(t.thisBrowser), 1), _createElementVNode("div", _hoisted_700, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(PALETTES, (p) => {
                    return (_openBlock(), _createElementBlock("button", {
                      key: p,
                      type: "button",
                      "aria-pressed": palette === p ? 'true' : 'false',
                      onClick: $event => (setPalette(p))
                    }, [_createElementVNode("span", _hoisted_702, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(SWATCH[p], (c, i) => {
                      return (_openBlock(), _createElementBlock("i", {
                        key: i,
                        style: _normalizeStyle({ background: c })
                      }, null, 4))
                    }), 128))]), _createTextVNode(_toDisplayString(t.palettes[p][0]), 1)], 8, _hoisted_701))
                  }), 128))]), _createElementVNode("p", _hoisted_703, _toDisplayString(t.paletteNote), 1)])
                ]), sys
                  ? (_openBlock(), _createElementBlock("section", _hoisted_704, [_createElementVNode("div", _hoisted_705, [_createElementVNode("h2", null, [_createTextVNode(_toDisplayString(t.servicesH), 1), _createVNode(_component_help_tip, {
                      k: "services",
                      open: helpOpen,
                      onToggle: toggleHelp
                    }, null, 8, ["open", "onToggle"])]), _createElementVNode("span", _hoisted_706, _toDisplayString(t.servicesNote), 1)]), _createElementVNode("div", _hoisted_707, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(sys.services, (s) => {
                      return (_openBlock(), _createElementBlock("div", {
                        key: s.key,
                        class: "svc"
                      }, [_createElementVNode("div", _hoisted_708, [
                        _createElementVNode("div", _hoisted_709, [_createElementVNode("span", { class: _normalizeClass(["dot", s.value ? 'g' : 'off']) }, null, 2), _createElementVNode("b", null, _toDisplayString(s.name), 1), (s.group === 'local')
                          ? (_openBlock(), _createElementBlock("span", _hoisted_710, _toDisplayString(t.onThisPc), 1))
                          : _createCommentVNode("", true)]),
                        _createElementVNode("div", _hoisted_711, [(svcEdit && svcEdit.key === s.key)
                          ? _withDirectives((_openBlock(), _createElementBlock("input", {
                              key: 0,
                              "onUpdate:modelValue": $event => ((svcEdit.value) = $event),
                              class: "svc-in mono",
                              "aria-label": s.name,
                              placeholder: "https://",
                              onKeydown: _withKeys(_withModifiers(previewService, ["prevent"]), ["enter"]),
                              onInput: $event => (svcPreview = null)
                            }, null, 40, _hoisted_712)), [[_vModelText, svcEdit.value]])
                          : (s.value)
                            ? (_openBlock(), _createElementBlock("a", {
                                key: 1,
                                class: "mono",
                                href: s.value,
                                target: "_blank",
                                rel: "noopener noreferrer"
                              }, _toDisplayString(s.value), 9, _hoisted_713))
                            : (_openBlock(), _createElementBlock("span", _hoisted_714, _toDisplayString(t.notSet), 1)), (t.svcNote[s.key])
                          ? (_openBlock(), _createElementBlock("span", _hoisted_715, _toDisplayString(t.svcNote[s.key]), 1))
                          : _createCommentVNode("", true), (s.warn)
                          ? (_openBlock(), _createElementBlock("span", _hoisted_716, _toDisplayString(s.warn), 1))
                          : _createCommentVNode("", true)]),
                        _createElementVNode("div", _hoisted_717, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(s.stored, (w) => {
                          return (_openBlock(), _createElementBlock("div", { key: w }, _toDisplayString(w), 1))
                        }), 128))]),
                        _createElementVNode("div", _hoisted_718, [(usage(s))
                          ? (_openBlock(), _createElementBlock("button", {
                              key: 0,
                              class: "btn xs",
                              type: "button",
                              "aria-expanded": svcOpen === s.key ? 'true' : 'false',
                              onClick: $event => (svcOpen = svcOpen === s.key ? '' : s.key)
                            }, _toDisplayString(usage(s)), 9, _hoisted_719))
                          : _createCommentVNode("", true), (!(svcEdit && svcEdit.key === s.key))
                          ? (_openBlock(), _createElementBlock("button", {
                              key: 1,
                              class: "btn xs",
                              type: "button",
                              onClick: $event => (editService(s))
                            }, _toDisplayString(t.change), 9, _hoisted_720))
                          : (_openBlock(), _createElementBlock(_Fragment, { key: 2 }, [_createElementVNode("button", {
                              class: "btn xs",
                              type: "button",
                              disabled: svcBusy,
                              onClick: previewService
                            }, _toDisplayString(t.preview), 9, _hoisted_721), (!svcPreview)
                              ? (_openBlock(), _createElementBlock("button", {
                                  key: 0,
                                  class: "btn xs",
                                  type: "button",
                                  onClick: cancelService
                                }, _toDisplayString(t.cancel), 9, _hoisted_722))
                              : _createCommentVNode("", true)], 64))])
                      ]), (svcEdit && svcEdit.key === s.key && svcPreview)
                        ? (_openBlock(), _createBlock(_component_files_preview, {
                            key: 0,
                            preview: svcPreview,
                            t: t,
                            busy: svcBusy,
                            blocked: blockedBy(svcPreview),
                            onSave: saveService,
                            onCancel: cancelService
                          }, null, 8, ["preview", "t", "busy", "blocked", "onSave", "onCancel"]))
                        : _createCommentVNode("", true), (svcOpen === s.key)
                        ? (_openBlock(), _createElementBlock("div", _hoisted_723, [(s.jobs && s.jobs.length)
                            ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [_createElementVNode("div", _hoisted_724, _toDisplayString(t.jobsH), 1), _createElementVNode("ul", _hoisted_725, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(s.jobs, (j) => {
                                return (_openBlock(), _createElementBlock("li", { key: j.job }, [_createElementVNode("div", _hoisted_726, [(j.url)
                                  ? (_openBlock(), _createElementBlock("a", {
                                      key: 0,
                                      class: "mono",
                                      href: j.url,
                                      target: "_blank",
                                      rel: "noopener noreferrer"
                                    }, _toDisplayString(j.job) + " ↗", 9, _hoisted_727))
                                  : (_openBlock(), _createElementBlock("code", _hoisted_728, _toDisplayString(j.job), 1)), _createElementVNode("button", {
                                  class: "btn xs",
                                  type: "button",
                                  onClick: $event => (findInFiles(j.job))
                                }, _toDisplayString(t.findInFiles), 9, _hoisted_729)]), _createElementVNode("div", _hoisted_730, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(j.steps, (st) => {
                                  return (_openBlock(), _createElementBlock("button", {
                                    key: st.playbook + st.step,
                                    class: "ref",
                                    type: "button",
                                    onClick: $event => (openStepOf(st, $event))
                                  }, _toDisplayString(st.playbook) + " · " + _toDisplayString(st.title), 9, _hoisted_731))
                                }), 128))])]))
                              }), 128))])], 64))
                            : _createCommentVNode("", true), (s.issues && s.issues.length)
                            ? (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [_createElementVNode("div", _hoisted_732, _toDisplayString(t.issuesH), 1), _createElementVNode("ul", _hoisted_733, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(s.issues, (j) => {
                                return (_openBlock(), _createElementBlock("li", { key: j.issue }, [_createElementVNode("div", _hoisted_734, [(j.url)
                                  ? (_openBlock(), _createElementBlock("a", {
                                      key: 0,
                                      class: "mono",
                                      href: j.url,
                                      target: "_blank",
                                      rel: "noopener noreferrer"
                                    }, _toDisplayString(j.issue) + " ↗", 9, _hoisted_735))
                                  : (_openBlock(), _createElementBlock("code", _hoisted_736, _toDisplayString(j.issue), 1)), _createElementVNode("button", {
                                  class: "btn xs",
                                  type: "button",
                                  onClick: $event => (findInFiles(j.issue))
                                }, _toDisplayString(t.findInFiles), 9, _hoisted_737)]), _createElementVNode("div", _hoisted_738, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(j.steps, (st) => {
                                  return (_openBlock(), _createElementBlock(_Fragment, { key: st.playbook + st.step }, [(st.step)
                                    ? (_openBlock(), _createElementBlock("button", {
                                        key: 0,
                                        class: "ref",
                                        type: "button",
                                        onClick: $event => (openStepOf(st, $event))
                                      }, _toDisplayString(st.playbook) + " · " + _toDisplayString(st.title), 9, _hoisted_739))
                                    : (_openBlock(), _createElementBlock("span", _hoisted_740, _toDisplayString(st.playbook) + " · " + _toDisplayString(st.title), 1))], 64))
                                }), 128))])]))
                              }), 128))])], 64))
                            : _createCommentVNode("", true), (s.steps && s.steps.length)
                            ? (_openBlock(), _createElementBlock(_Fragment, { key: 2 }, [_createElementVNode("div", _hoisted_741, _toDisplayString(fill(t.confirmedIn, s.name)), 1), _createElementVNode("div", _hoisted_742, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(s.steps, (st) => {
                                return (_openBlock(), _createElementBlock("button", {
                                  key: st.playbook + st.step,
                                  class: "ref",
                                  type: "button",
                                  onClick: $event => (openStepOf(st, $event))
                                }, _toDisplayString(st.playbook) + " · " + _toDisplayString(st.title), 9, _hoisted_743))
                              }), 128))])], 64))
                            : _createCommentVNode("", true)]))
                        : _createCommentVNode("", true)]))
                    }), 128))])]))
                  : _createCommentVNode("", true)], 64))
              : _createCommentVNode("", true),
            (sys && sysTab === 'agents')
              ? (_openBlock(), _createElementBlock(_Fragment, { key: 3 }, [_createElementVNode("section", _hoisted_744, [_createElementVNode("div", _hoisted_745, [_createElementVNode("h2", null, [_createTextVNode(_toDisplayString(t.agentsH), 1), _createVNode(_component_help_tip, {
                  k: "agents",
                  open: helpOpen,
                  onToggle: toggleHelp
                }, null, 8, ["open", "onToggle"])])]), _createElementVNode("div", _hoisted_746, [
                  _createElementVNode("div", _hoisted_747, [_createElementVNode("div", _hoisted_748, [_cache[84] || (_cache[84] = _createElementVNode("span", { class: "dot g" }, null, -1)), _createElementVNode("b", null, _toDisplayString(t.agDispatcher), 1), _createElementVNode("span", _hoisted_749, _toDisplayString(t.roleDispatcher), 1)]), _createElementVNode("p", null, _toDisplayString(t.dispatcherDesc), 1)]),
                  (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(sysAgents, (a) => {
                    return (_openBlock(), _createElementBlock("div", {
                      key: a.key,
                      class: "agent"
                    }, [
                      _createElementVNode("div", _hoisted_750, [
                        _createElementVNode("span", { class: _normalizeClass(["dot", agentDot(a)]) }, null, 2),
                        _createElementVNode("b", _hoisted_751, _toDisplayString(a.name), 1),
                        _createElementVNode("span", _hoisted_752, _toDisplayString(agentRole(a)), 1),
                        _cache[85] || (_cache[85] = _createElementVNode("span", { class: "grow" }, null, -1)),
                        (a.text)
                          ? (_openBlock(), _createElementBlock("button", {
                              key: 0,
                              class: "btn xs",
                              type: "button",
                              "aria-expanded": promptOpen[a.key] ? 'true' : 'false',
                              onClick: $event => (togglePrompt(a.key))
                            }, _toDisplayString(promptOpen[a.key] ? t.hidePrompt : t.showPrompt), 9, _hoisted_753))
                          : _createCommentVNode("", true),
                        _createElementVNode("button", {
                          class: "btn xs",
                          type: "button",
                          onClick: $event => (selectFile(a.key))
                        }, _toDisplayString(t.edit), 9, _hoisted_754)
                      ]),
                      (a.description)
                        ? (_openBlock(), _createElementBlock("p", _hoisted_755, _toDisplayString(a.description), 1))
                        : _createCommentVNode("", true),
                      (a.error)
                        ? (_openBlock(), _createElementBlock("p", _hoisted_756, _toDisplayString(a.error), 1))
                        : _createCommentVNode("", true),
                      _createElementVNode("div", _hoisted_757, [_createElementVNode("span", null, [_createTextVNode(_toDisplayString(t.model) + ": ", 1), _createElementVNode("code", null, _toDisplayString(a.model || sys.project.model || '?'), 1), (!a.model)
                        ? (_openBlock(), _createElementBlock("span", _hoisted_758, " (" + _toDisplayString(t.modelDefault) + ")", 1))
                        : _createCommentVNode("", true)]), (a.mode)
                        ? (_openBlock(), _createElementBlock("span", _hoisted_759, [_createTextVNode(_toDisplayString(t.mode) + ": ", 1), _createElementVNode("code", null, _toDisplayString(a.mode), 1)]))
                        : _createCommentVNode("", true), (agentState(a))
                        ? (_openBlock(), _createElementBlock("span", _hoisted_760, _toDisplayString(agentState(a)), 1))
                        : _createCommentVNode("", true)]),
                      (a.permission && a.permission.length)
                        ? (_openBlock(), _createElementBlock("div", _hoisted_761, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(a.permission, (r) => {
                            return (_openBlock(), _createElementBlock("code", {
                              key: r,
                              class: _normalizeClass(permClass(r))
                            }, _toDisplayString(r), 3))
                          }), 128))]))
                        : _createCommentVNode("", true),
                      (promptOpen[a.key])
                        ? (_openBlock(), _createElementBlock("pre", _hoisted_762, _toDisplayString(a.text), 1))
                        : _createCommentVNode("", true),
                      _createElementVNode("span", _hoisted_763, _toDisplayString(a.path), 1)
                    ]))
                  }), 128)),
                  (!sys.agents.length)
                    ? (_openBlock(), _createElementBlock("p", _hoisted_764, _toDisplayString(t.noAgents), 1))
                    : _createCommentVNode("", true),
                  _createElementVNode("div", _hoisted_765, [_createElementVNode("div", _hoisted_766, [_createElementVNode("span", { class: _normalizeClass(["dot", voiceReady ? 'g' : 'off']) }, null, 2), _createElementVNode("b", null, _toDisplayString(t.voiceLabel), 1), _createElementVNode("span", _hoisted_767, _toDisplayString(voiceState), 1)]), _createElementVNode("p", null, _toDisplayString(fill(t.voiceDesc, spokenLang.toUpperCase())) + " " + _toDisplayString(voiceNote), 1)])
                ])]), _createElementVNode("section", _hoisted_768, [_createElementVNode("div", _hoisted_769, [_createElementVNode("h2", null, [_createElementVNode("span", { class: _normalizeClass(["wl", sys.project.exists ? 'g' : 'r']) }, null, 2), _createTextVNode(_toDisplayString(t.projectH), 1), _createVNode(_component_help_tip, {
                  k: "project",
                  open: helpOpen,
                  onToggle: toggleHelp
                }, null, 8, ["open", "onToggle"])]), _createElementVNode("div", _hoisted_770, [(fileOf('opencode').exists)
                  ? (_openBlock(), _createElementBlock("button", {
                      key: 0,
                      class: "btn xs",
                      type: "button",
                      onClick: $event => (selectFile('opencode'))
                    }, _toDisplayString(t.edit) + " opencode.jsonc", 9, _hoisted_771))
                  : _createCommentVNode("", true), (fileOf('readme').exists)
                  ? (_openBlock(), _createElementBlock("button", {
                      key: 1,
                      class: "btn xs",
                      type: "button",
                      onClick: $event => (selectFile('readme'))
                    }, "README", 8, _hoisted_772))
                  : _createCommentVNode("", true)])]), _createElementVNode("span", _hoisted_773, _toDisplayString(sys.project.path), 1), (!sys.project.exists)
                  ? (_openBlock(), _createElementBlock("p", _hoisted_774, _toDisplayString(t.projectMissing), 1))
                  : (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [
                      (sys.project.error)
                        ? (_openBlock(), _createElementBlock("p", _hoisted_775, _toDisplayString(sys.project.error), 1))
                        : _createCommentVNode("", true),
                      _createElementVNode("dl", _hoisted_776, [
                        _createElementVNode("dt", null, _toDisplayString(t.model), 1),
                        _createElementVNode("dd", _hoisted_777, _toDisplayString(sys.project.model || '—'), 1),
                        _createElementVNode("dt", null, _toDisplayString(t.smallModel), 1),
                        _createElementVNode("dd", _hoisted_778, _toDisplayString(sys.project.small_model || '—'), 1),
                        _createElementVNode("dt", null, _toDisplayString(t.defaultAgent), 1),
                        _createElementVNode("dd", _hoisted_779, _toDisplayString(sys.project.default_agent || '—'), 1),
                        _createElementVNode("dt", null, _toDisplayString(t.providers), 1),
                        _createElementVNode("dd", _hoisted_780, _toDisplayString((sys.project.providers || []).join(', ') || '—'), 1)
                      ]),
                      _createElementVNode("div", _hoisted_781, _toDisplayString(t.mcpServers), 1),
                      _createElementVNode("ul", _hoisted_782, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(sys.project.mcp, (m) => {
                        return (_openBlock(), _createElementBlock("li", { key: m.name }, [
                          _createElementVNode("span", { class: _normalizeClass(["dot", m.enabled ? 'g' : 'off']) }, null, 2),
                          _createElementVNode("span", _hoisted_783, _toDisplayString(m.name), 1),
                          _createElementVNode("span", _hoisted_784, _toDisplayString(m.enabled ? t.a.on : t.a.off), 1),
                          _createElementVNode("span", _hoisted_785, _toDisplayString(m.url), 1)
                        ]))
                      }), 128))])
                    ], 64))])], 64))
              : _createCommentVNode("", true),
            (sysTab === 'files')
              ? (_openBlock(), _createElementBlock(_Fragment, { key: 4 }, [sys
                  ? (_openBlock(), _createElementBlock("section", _hoisted_786, [
                      _createElementVNode("div", _hoisted_787, [_createElementVNode("h2", null, [_createTextVNode(_toDisplayString(t.filesH), 1), _createVNode(_component_help_tip, {
                        k: "files",
                        open: helpOpen,
                        onToggle: toggleHelp
                      }, null, 8, ["open", "onToggle"])]), _createElementVNode("span", _hoisted_788, _toDisplayString(t.filesNote), 1)]),
                      _createElementVNode("div", _hoisted_789, [_withDirectives(_createElementVNode("input", {
                        "onUpdate:modelValue": $event => ((q) = $event),
                        type: "search",
                        class: "fs-in",
                        placeholder: t.searchPh,
                        "aria-label": t.searchPh,
                        onInput: searchSoon,
                        onKeydown: _withKeys(_withModifiers(runSearch, ["prevent"]), ["enter"])
                      }, null, 40, _hoisted_790), [[_vModelText, q]]), _createElementVNode("button", {
                        type: "button",
                        class: "btn xs",
                        "aria-pressed": qCase ? 'true' : 'false',
                        title: t.matchCase,
                        onClick: $event => {qCase = !qCase; runSearch()}
                      }, "Aa", 8, _hoisted_791), sr
                        ? (_openBlock(), _createElementBlock("span", _hoisted_792, _toDisplayString(srCount), 1))
                        : _createCommentVNode("", true)]),
                      sr
                        ? (_openBlock(), _createElementBlock("div", _hoisted_793, [
                            (!sr.hits.length)
                              ? (_openBlock(), _createElementBlock("p", _hoisted_794, _toDisplayString(t.noHits), 1))
                              : _createCommentVNode("", true),
                            _createElementVNode("div", _hoisted_795, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(srGroups, (g) => {
                              return (_openBlock(), _createElementBlock("div", {
                                key: g.key,
                                class: "sr-group"
                              }, [_createElementVNode("div", _hoisted_796, [_createElementVNode("span", _hoisted_797, _toDisplayString(fileLabel(fileOf(g.key))), 1), _createElementVNode("span", _hoisted_798, _toDisplayString(g.hits.length), 1), (!g.editable)
                                ? (_openBlock(), _createElementBlock("span", _hoisted_799, "· " + _toDisplayString(t.readOnly), 1))
                                : _createCommentVNode("", true)]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(g.hits, (h) => {
                                return (_openBlock(), _createElementBlock("button", {
                                  key: h.line,
                                  type: "button",
                                  class: "sr-hit",
                                  onClick: $event => (openAt(h.key, h.line))
                                }, [_createElementVNode("span", _hoisted_801, _toDisplayString(h.line), 1), _createElementVNode("span", _hoisted_802, [_createTextVNode(_toDisplayString(h.text.slice(0, h.col)), 1), _createElementVNode("mark", null, _toDisplayString(h.text.slice(h.col, h.col + h.len)), 1), _createTextVNode(_toDisplayString(h.text.slice(h.col + h.len)), 1)])], 8, _hoisted_800))
                              }), 128))]))
                            }), 128))]),
                            (sr.more)
                              ? (_openBlock(), _createElementBlock("p", _hoisted_803, _toDisplayString(fill(t.moreHits, sr.more)), 1))
                              : _createCommentVNode("", true),
                            (sr.hits.some((h) => h.editable))
                              ? (_openBlock(), _createElementBlock("div", _hoisted_804, [
                                  _createElementVNode("div", _hoisted_805, _toDisplayString(t.replaceH), 1),
                                  _createElementVNode("div", _hoisted_806, [
                                    _createElementVNode("code", _hoisted_807, _toDisplayString(sr.query), 1),
                                    _cache[86] || (_cache[86] = _createElementVNode("span", { "aria-hidden": "true" }, "→", -1)),
                                    _withDirectives(_createElementVNode("input", {
                                      "onUpdate:modelValue": $event => ((repWith) = $event),
                                      class: "mono",
                                      placeholder: t.replacePh,
                                      "aria-label": t.replacePh,
                                      onInput: $event => (repPreview = null),
                                      onKeydown: _withKeys(_withModifiers(previewReplace, ["prevent"]), ["enter"])
                                    }, null, 40, _hoisted_808), [[_vModelText, repWith]]),
                                    _createElementVNode("button", {
                                      class: "btn",
                                      type: "button",
                                      disabled: repBusy || q !== sr.query,
                                      onClick: previewReplace
                                    }, _toDisplayString(t.preview), 9, _hoisted_809)
                                  ]),
                                  _createElementVNode("p", _hoisted_810, _toDisplayString(t.replaceNote), 1),
                                  repPreview
                                    ? (_openBlock(), _createBlock(_component_files_preview, {
                                        key: 0,
                                        preview: repPreview,
                                        t: t,
                                        busy: repBusy,
                                        blocked: blockedBy(repPreview),
                                        onSave: saveReplace,
                                        onCancel: $event => (repPreview = null)
                                      }, null, 8, ["preview", "t", "busy", "blocked", "onSave", "onCancel"]))
                                    : _createCommentVNode("", true)
                                ]))
                              : _createCommentVNode("", true)
                          ]))
                        : _createCommentVNode("", true),
                      _createElementVNode("div", _hoisted_811, [_createElementVNode("ul", _hoisted_812, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(sys.files, (f) => {
                        return (_openBlock(), _createElementBlock("li", {
                          key: f.key,
                          class: _normalizeClass({ cur: ed && ed.key === f.key })
                        }, [_createElementVNode("span", { class: _normalizeClass(["dot", f.exists ? 'g' : 'off']) }, null, 2), _createElementVNode("div", _hoisted_813, [(f.exists && f.kind !== 'folder')
                          ? (_openBlock(), _createElementBlock("button", {
                              key: 0,
                              class: "flink",
                              type: "button",
                              title: f.path,
                              "aria-current": ed && ed.key === f.key ? 'true' : null,
                              onClick: $event => (selectFile(f.key))
                            }, _toDisplayString(fileLabel(f)), 9, _hoisted_814))
                          : (_openBlock(), _createElementBlock("span", {
                              key: 1,
                              class: "mono",
                              title: f.path
                            }, _toDisplayString(fileLabel(f)), 9, _hoisted_815)), (f.kind === 'folder')
                          ? (_openBlock(), _createElementBlock("span", _hoisted_816, _toDisplayString(f.path), 1))
                          : _createCommentVNode("", true)]), (sys.editor && f.exists && f.kind === 'folder')
                          ? (_openBlock(), _createElementBlock("button", {
                              key: 0,
                              class: "btn xs",
                              type: "button",
                              onClick: $event => (openFile(f.key))
                            }, _toDisplayString(t.openFolder), 9, _hoisted_817))
                          : (!f.exists)
                            ? (_openBlock(), _createElementBlock("span", _hoisted_818, _toDisplayString(t.fileMissing), 1))
                            : (!f.editable && f.kind !== 'folder')
                              ? (_openBlock(), _createElementBlock("span", _hoisted_819, _toDisplayString(t.readOnly), 1))
                              : (_openBlock(), _createElementBlock("span", _hoisted_820))], 2))
                      }), 128))]), _createElementVNode("div", _hoisted_821, [(!ed)
                        ? (_openBlock(), _createElementBlock("p", _hoisted_822, _toDisplayString(t.pickFile), 1))
                        : (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [
                            _createElementVNode("div", _hoisted_823, [_createElementVNode("div", _hoisted_824, [_createElementVNode("b", _hoisted_825, _toDisplayString(fileLabel(fileOf(ed.key))), 1), _createElementVNode("span", { class: _normalizeClass(["pill", { warn: edDirty }]) }, _toDisplayString(!ed.editable ? t.readOnly : edDirty ? t.unsaved : t.savedState), 3)]), _createElementVNode("div", _hoisted_826, [(ed.editable)
                              ? (_openBlock(), _createElementBlock("div", {
                                  key: 0,
                                  class: "seg sm",
                                  role: "group",
                                  "aria-label": t.view
                                }, [_createElementVNode("button", {
                                  type: "button",
                                  "aria-pressed": edMode === 'text' ? 'true' : 'false',
                                  onClick: $event => (edMode = 'text')
                                }, _toDisplayString(t.textMode), 9, _hoisted_828), _createElementVNode("button", {
                                  type: "button",
                                  "aria-pressed": edMode === 'changes' ? 'true' : 'false',
                                  onClick: showChanges
                                }, _toDisplayString(t.changesMode), 9, _hoisted_829)], 8, _hoisted_827))
                              : _createCommentVNode("", true), _createElementVNode("button", {
                              class: "btn xs",
                              type: "button",
                              disabled: edBusy,
                              onClick: reloadFile
                            }, _toDisplayString(t.reload), 9, _hoisted_830), (sys.editor)
                              ? (_openBlock(), _createElementBlock("button", {
                                  key: 1,
                                  class: "btn xs",
                                  type: "button",
                                  onClick: $event => (openFile(ed.key))
                                }, _toDisplayString(t.openWin), 9, _hoisted_831))
                              : _createCommentVNode("", true)])]),
                            _createElementVNode("span", _hoisted_832, _toDisplayString(ed.path), 1),
                            (t.noteKind[ed.kind])
                              ? (_openBlock(), _createElementBlock("p", _hoisted_833, _toDisplayString(t.noteKind[ed.kind]), 1))
                              : _createCommentVNode("", true),
                            edDisk
                              ? (_openBlock(), _createElementBlock("p", _hoisted_834, _toDisplayString(t.changedOnDisk), 1))
                              : _createCommentVNode("", true),
                            edReply
                              ? (_openBlock(), _createElementBlock("div", _hoisted_835, [_createElementVNode("span", _hoisted_836, "✦ " + _toDisplayString(arch.editor), 1), _createElementVNode("div", { innerHTML: edReplyHtml }, null, 8, _hoisted_837), (edCheck && edCheck.changed && edMode === 'changes')
                                  ? (_openBlock(), _createElementBlock("p", _hoisted_838, _toDisplayString(t.agentProposal), 1))
                                  : _createCommentVNode("", true)]))
                              : _createCommentVNode("", true),
                            _withDirectives(_createElementVNode("textarea", {
                              ref: "edArea",
                              "onUpdate:modelValue": $event => ((edText) = $event),
                              class: "ed-text",
                              spellcheck: "false",
                              wrap: "off",
                              readonly: !ed.editable || edBusy,
                              "aria-label": fileLabel(fileOf(ed.key)),
                              onKeydown: edKey
                            }, null, 40, _hoisted_839), [[_vShow, edMode === 'text'], [_vModelText, edText]]),
                            (edMode === 'changes')
                              ? (_openBlock(), _createElementBlock("div", _hoisted_840, [edChecking
                                  ? (_openBlock(), _createElementBlock("p", _hoisted_841, "…"))
                                  : edCheck
                                    ? (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [
                                        (edCheck.permissions.length)
                                          ? (_openBlock(), _createElementBlock("div", _hoisted_842, [_createElementVNode("b", null, _toDisplayString(t.permsH), 1), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(edCheck.permissions, (p) => {
                                              return (_openBlock(), _createElementBlock("code", { key: p }, _toDisplayString(p), 1))
                                            }), 128))]))
                                          : _createCommentVNode("", true),
                                        (edCheck.problems.length)
                                          ? (_openBlock(), _createElementBlock("div", _hoisted_843, [_createElementVNode("b", null, _toDisplayString(t.problemsH), 1), _createElementVNode("ul", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(edCheck.problems, (p) => {
                                              return (_openBlock(), _createElementBlock("li", { key: p }, _toDisplayString(p), 1))
                                            }), 128))])]))
                                          : _createCommentVNode("", true),
                                        ((edCheck.warnings || []).length)
                                          ? (_openBlock(), _createElementBlock("div", _hoisted_844, [_createElementVNode("b", null, _toDisplayString(t.stateWarnH), 1), _createElementVNode("ul", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(edCheck.warnings, (p) => {
                                              return (_openBlock(), _createElementBlock("li", { key: p }, _toDisplayString(p), 1))
                                            }), 128))])]))
                                          : (edCheck.changed && !edCheck.permissions.length)
                                            ? (_openBlock(), _createElementBlock("p", _hoisted_845, "✓ " + _toDisplayString(t.checkOk), 1))
                                            : _createCommentVNode("", true),
                                        (!edCheck.changed)
                                          ? (_openBlock(), _createElementBlock("p", _hoisted_846, _toDisplayString(t.noChanges), 1))
                                          : (_openBlock(), _createElementBlock("pre", _hoisted_847, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(edCheck.diff, (l, i) => {
                                              return (_openBlock(), _createElementBlock("span", {
                                                key: i,
                                                class: _normalizeClass(diffClass(l.op))
                                              }, _toDisplayString(l.op === '@' ? l.text : l.op + ' ' + l.text), 3))
                                            }), 128))]))
                                      ], 64))
                                    : _createCommentVNode("", true)]))
                              : _createCommentVNode("", true),
                            (ed.editable)
                              ? (_openBlock(), _createElementBlock("div", _hoisted_848, [_createElementVNode("button", {
                                  class: "btn pri",
                                  type: "button",
                                  disabled: !edDirty || edSaving || edBusy,
                                  onClick: saveFile
                                }, _toDisplayString(t.save), 9, _hoisted_849), _createElementVNode("button", {
                                  class: "btn",
                                  type: "button",
                                  disabled: !edDirty || edBusy,
                                  onClick: discardEdit
                                }, _toDisplayString(t.discard), 9, _hoisted_850), _cache[87] || (_cache[87] = _createElementVNode("span", { class: "dim small" }, [_createElementVNode("kbd", null, "Ctrl"), _createTextVNode("+"), _createElementVNode("kbd", null, "S")], -1))]))
                              : _createCommentVNode("", true),
                            (ed.editable)
                              ? (_openBlock(), _createElementBlock("div", _hoisted_851, [
                                  _createElementVNode("div", _hoisted_852, [_createTextVNode("✦ " + _toDisplayString(t.editorAgent) + " · ", 1), _createElementVNode("span", _hoisted_853, _toDisplayString(arch.editor), 1)]),
                                  _createElementVNode("div", _hoisted_854, [_withDirectives(_createElementVNode("textarea", {
                                    "onUpdate:modelValue": $event => ((edAsk) = $event),
                                    rows: "2",
                                    placeholder: t.askPlaceholder,
                                    disabled: edBusy || !editorOn,
                                    "aria-label": t.askAgent,
                                    onKeydown: _withKeys(_withModifiers(askEdit, ["ctrl","prevent"]), ["enter"])
                                  }, null, 40, _hoisted_855), [[_vModelText, edAsk]]), (!edBusy)
                                    ? (_openBlock(), _createElementBlock("button", {
                                        key: 0,
                                        class: "btn",
                                        type: "button",
                                        disabled: !editorOn || !edAsk.trim(),
                                        onClick: askEdit
                                      }, _toDisplayString(t.askAgent), 9, _hoisted_856))
                                    : (_openBlock(), _createElementBlock("button", {
                                        key: 1,
                                        class: "btn",
                                        type: "button",
                                        onClick: stopEdit
                                      }, _toDisplayString(t.stopWaiting) + " · " + _toDisplayString(edWait) + " " + _toDisplayString(t.waitUnit), 9, _hoisted_857))]),
                                  edBusy
                                    ? (_openBlock(), _createElementBlock("p", _hoisted_858, _toDisplayString(t.agentWorking) + "…", 1))
                                    : _createCommentVNode("", true),
                                  (!editorOn)
                                    ? (_openBlock(), _createElementBlock("p", _hoisted_859, _toDisplayString(t.editorOffNote), 1))
                                    : _createCommentVNode("", true)
                                ]))
                              : _createCommentVNode("", true)
                          ], 64))])])
                    ], 512))
                  : _createCommentVNode("", true)], 64))
              : _createCommentVNode("", true),
            (sysTab === 'history')
              ? (_openBlock(), _createElementBlock("section", _hoisted_860, [_createElementVNode("div", _hoisted_861, [_createElementVNode("h2", null, [_createTextVNode(_toDisplayString(t.historyH), 1), _createVNode(_component_help_tip, {
                  k: "history",
                  open: helpOpen,
                  onToggle: toggleHelp
                }, null, 8, ["open", "onToggle"])]), _createElementVNode("div", _hoisted_862, [_createElementVNode("span", _hoisted_863, _toDisplayString(t.historyNote), 1), _createElementVNode("button", {
                  class: "btn xs",
                  type: "button",
                  onClick: loadChanges
                }, "↻", 8, _hoisted_864)])]), (!changes.length)
                  ? (_openBlock(), _createElementBlock("p", _hoisted_865, _toDisplayString(t.noHistory), 1))
                  : (_openBlock(), _createElementBlock("ul", _hoisted_866, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(changes, (c) => {
                      return (_openBlock(), _createElementBlock("li", {
                        key: c.id,
                        class: "hist-e"
                      }, [_createElementVNode("div", _hoisted_867, [
                        _createElementVNode("span", _hoisted_868, _toDisplayString(c.at.slice(8, 10)) + "." + _toDisplayString(c.at.slice(5, 7)) + " " + _toDisplayString(c.at.slice(11, 16)), 1),
                        _createElementVNode("span", { class: _normalizeClass(["pill", 'via-' + c.via]) }, _toDisplayString(t.via[c.via] || c.via), 3),
                        _createElementVNode("span", _hoisted_869, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(c.files, (f) => {
                          return (_openBlock(), _createElementBlock("span", {
                            key: f.key,
                            class: "mono"
                          }, [
                            _createTextVNode(_toDisplayString(f.label) + " ", 1),
                            _createElementVNode("span", _hoisted_870, "+" + _toDisplayString(f.added), 1),
                            _cache[88] || (_cache[88] = _createTextVNode()),
                            _createElementVNode("span", _hoisted_871, "−" + _toDisplayString(f.removed), 1)
                          ]))
                        }), 128))]),
                        (c.detail)
                          ? (_openBlock(), _createElementBlock("span", _hoisted_872, _toDisplayString(c.via === 'revert' ? revertOf(c) : c.detail), 1))
                          : _createCommentVNode("", true),
                        _cache[89] || (_cache[89] = _createElementVNode("span", { class: "grow" }, null, -1)),
                        _createElementVNode("button", {
                          class: "btn xs",
                          type: "button",
                          "aria-expanded": changeOpen[c.id] ? 'true' : 'false',
                          onClick: $event => (toggleChange(c.id))
                        }, _toDisplayString(changeOpen[c.id] ? t.hideChanges : t.showChanges), 9, _hoisted_873),
                        (c.files.every((f) => f.backup))
                          ? (_openBlock(), _createElementBlock("button", {
                              key: 1,
                              class: "btn xs",
                              type: "button",
                              disabled: revBusy,
                              onClick: $event => (previewRevert(c))
                            }, _toDisplayString(t.revert), 9, _hoisted_874))
                          : _createCommentVNode("", true)
                      ]), (changeOpen[c.id])
                        ? (_openBlock(), _createElementBlock("div", _hoisted_875, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(c.files, (f) => {
                            return (_openBlock(), _createElementBlock("div", {
                              key: f.key,
                              class: "mf"
                            }, [_createElementVNode("div", _hoisted_876, _toDisplayString(f.label), 1), _createElementVNode("pre", _hoisted_877, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(f.diff, (l, i) => {
                              return (_openBlock(), _createElementBlock("span", {
                                key: i,
                                class: _normalizeClass(diffClass(l.op))
                              }, _toDisplayString(l.op === '@' ? l.text : l.op + ' ' + l.text), 3))
                            }), 128))])]))
                          }), 128))]))
                        : _createCommentVNode("", true), (revFor === c.id && revPreview)
                        ? (_openBlock(), _createBlock(_component_files_preview, {
                            key: 1,
                            preview: revPreview,
                            t: t,
                            busy: revBusy,
                            blocked: blockedBy(revPreview),
                            onSave: saveRevert,
                            onCancel: $event => {revFor = ''; revPreview = null}
                          }, null, 8, ["preview", "t", "busy", "blocked", "onSave", "onCancel"]))
                        : _createCommentVNode("", true)]))
                    }), 128))])), changesOlder
                  ? (_openBlock(), _createElementBlock("button", {
                      key: 2,
                      class: "link",
                      type: "button",
                      onClick: $event => (loadChanges(true))
                    }, _toDisplayString(fill(t.historyOlder, String(changesOlder))), 9, _hoisted_878))
                  : _createCommentVNode("", true)]))
              : _createCommentVNode("", true),
            (!sys && !sysError)
              ? (_openBlock(), _createElementBlock("p", _hoisted_879, "Stellwerk…"))
              : _createCommentVNode("", true)
          ])]))
        : _createCommentVNode("", true),
      (state && view === 'process')
        ? (_openBlock(), _createElementBlock("main", _hoisted_880, [_createVNode(_component_process_view, {
            state: state,
            lang: lang,
            sel: sel,
            onOpenStep: $event => (openStep($event.version, $event.step))
          }, null, 8, ["state", "lang", "sel", "onOpenStep"])]))
        : _createCommentVNode("", true),
      (state && view === 'cicd')
        ? (_openBlock(), _createElementBlock("main", _hoisted_881, [_createVNode(_component_cicd_view, {
            t: t,
            lang: lang,
            why: !!state.helpers.detective,
            onWhy: startCase,
            onOpenStep: $event => (openStep($event.version, $event.step)),
            onChanged: $event => (load())
          }, null, 8, ["t", "lang", "why", "onWhy", "onOpenStep", "onChanged"])]))
        : _createCommentVNode("", true),
      (state && view === 'regression')
        ? (_openBlock(), _createElementBlock("main", _hoisted_882, [_createVNode(_component_regression_view, {
            t: t,
            lang: lang,
            why: !!state.helpers.detective,
            onWhy: startCase,
            onOpenStep: $event => (openStep($event.version, $event.step)),
            onChanged: $event => (load())
          }, null, 8, ["t", "lang", "why", "onWhy", "onOpenStep", "onChanged"])]))
        : _createCommentVNode("", true),
      (state && view === 'audit')
        ? (_openBlock(), _createElementBlock("main", _hoisted_883, [_createElementVNode("section", _hoisted_884, [_createElementVNode("h2", null, _toDisplayString(t.auditTab), 1), _createElementVNode("p", _hoisted_885, _toDisplayString(t.laterText), 1)])]))
        : _createCommentVNode("", true),
      snap
        ? (_openBlock(), _createElementBlock("div", {
            key: 16,
            class: _normalizeClass(["snap-ghost", snap]),
            style: _normalizeStyle(snap === 'bottom' ? { height: cmdBottomH + 'px' } : null),
            "aria-hidden": "true"
          }, null, 6))
        : _createCommentVNode("", true),
      (cmdOpen && state)
        ? (_openBlock(), _createElementBlock("aside", {
            key: 17,
            ref: "cmdBox",
            class: _normalizeClass(["cmd", { wide: cmdWide && !cmdFloat, float: cmdFloat && !phone, bottom: dockBottom, 'board-open': histOpen }]),
            style: _normalizeStyle(cmdFloat && !phone ? { left: cmdPos.x + 'px', top: cmdPos.y + 'px', width: cmdPos.w + 'px', height: cmdPos.h + 'px' } : dockBottom ? { height: cmdBottomH + 'px' } : null),
            "aria-label": t.command
          }, [
            dockBottom
              ? (_openBlock(), _createElementBlock("div", {
                  key: 0,
                  class: "cmd-grip",
                  "aria-hidden": "true",
                  onPointerdown: gripStart
                }, null, 40, _hoisted_887))
              : _createCommentVNode("", true),
            (cmdWide || histOpen)
              ? (_openBlock(), _createElementBlock("nav", {
                  key: 1,
                  class: _normalizeClass(["board", { open: histOpen }]),
                  "aria-label": t.chatHistory
                }, [
                  _createElementVNode("div", _hoisted_889, [_createElementVNode("span", _hoisted_890, _toDisplayString(t.chatBoard), 1), _createElementVNode("button", {
                    class: "board-x",
                    type: "button",
                    "aria-label": t.close,
                    onClick: $event => (histOpen = false)
                  }, "✕", 8, _hoisted_891)]),
                  _createElementVNode("button", {
                    class: "board-new",
                    type: "button",
                    disabled: cmdBusy,
                    onClick: newConversation
                  }, [_cache[90] || (_cache[90] = _createElementVNode("svg", {
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true"
                  }, [_createElementVNode("path", { d: "M12 5v14M5 12h14" })], -1)), _createTextVNode(_toDisplayString(t.newChat), 1)], 8, _hoisted_892),
                  _withDirectives(_createElementVNode("input", {
                    ref: "histFind",
                    "onUpdate:modelValue": $event => ((histQ) = $event),
                    type: "search",
                    class: "board-find",
                    placeholder: t.chatFind,
                    "aria-label": t.chatFind,
                    autocomplete: "off",
                    onInput: findChats
                  }, null, 40, _hoisted_893), [[_vModelText, histQ]]),
                  (!histQ.trim() && chatsTotal > chats.length)
                    ? (_openBlock(), _createElementBlock("p", _hoisted_894, _toDisplayString(fill(t.chatsMore, String(chats.length), String(chatsTotal))), 1))
                    : _createCommentVNode("", true),
                  _createElementVNode("div", _hoisted_895, [(!chats.length)
                    ? (_openBlock(), _createElementBlock("p", _hoisted_896, _toDisplayString(t.chatNone), 1))
                    : (!histItems.length)
                      ? (_openBlock(), _createElementBlock("p", _hoisted_897, _toDisplayString(t.chatNoMatch), 1))
                      : _createCommentVNode("", true), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(chatGroups, (g) => {
                    return (_openBlock(), _createElementBlock("section", {
                      key: g.key,
                      class: "board-group"
                    }, [_createElementVNode("h3", null, _toDisplayString(g.label), 1), _createElementVNode("ul", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(g.items, (c) => {
                      return (_openBlock(), _createElementBlock("li", {
                        key: c.id,
                        class: _normalizeClass({ cur: c.id === chatId })
                      }, [_createElementVNode("button", {
                        type: "button",
                        class: "board-row",
                        "aria-current": c.id === chatId ? 'true' : 'false',
                        disabled: cmdBusy && c.id !== chatId,
                        title: c.title + ' · ' + fill(t.chatQ, String(c.questions)),
                        onClick: $event => (c.id !== chatId ? openChat(c.id) : (histOpen = false))
                      }, [_createElementVNode("span", _hoisted_899, _toDisplayString(g.key === 'older' ? c.updated.slice(8, 10) + '.' + c.updated.slice(5, 7) : c.updated.slice(11, 16)), 1), _createElementVNode("span", _hoisted_900, _toDisplayString(c.title), 1)], 8, _hoisted_898), _createElementVNode("button", {
                        type: "button",
                        class: "board-del",
                        disabled: cmdBusy,
                        "aria-label": t.chatDelete,
                        title: t.chatDelete,
                        onClick: $event => (deleteChat(c))
                      }, "✕", 8, _hoisted_901)], 2))
                    }), 128))])]))
                  }), 128))])
                ], 10, _hoisted_888))
              : _createCommentVNode("", true),
            _createElementVNode("header", {
              class: "cmd-h",
              onPointerdown: dragStart
            }, [_createElementVNode("div", _hoisted_903, [_createElementVNode("span", _hoisted_904, [_cache[91] || (_cache[91] = _createElementVNode("svg", {
              class: "ai-mark",
              viewBox: "0 0 24 24",
              "aria-hidden": "true"
            }, [_createElementVNode("defs", null, [_createElementVNode("linearGradient", {
              id: "aiG3",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1"
            }, [_createElementVNode("stop", {
              offset: "0",
              "stop-color": "#7b5cff"
            }), _createElementVNode("stop", {
              offset: "1",
              "stop-color": "#00a8e8"
            })])]), _createElementVNode("path", {
              fill: "url(#aiG3)",
              d: "M10 2.5l1.9 5.6 5.6 1.9-5.6 1.9L10 17.5l-1.9-5.6L2.5 10l5.6-1.9z"
            }), _createElementVNode("path", {
              fill: "url(#aiG3)",
              d: "M18.5 14l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9z"
            })], -1)), _createTextVNode(_toDisplayString(t.command), 1), _createVNode(_component_help_tip, {
              k: "command",
              open: helpOpen,
              onToggle: toggleHelp
            }, null, 8, ["open", "onToggle"])]), _createElementVNode("button", {
              type: "button",
              class: "cmd-switch",
              "aria-expanded": histOpen ? 'true' : 'false',
              title: t.chatHistory,
              onClick: toggleHist
            }, [_createElementVNode("span", _hoisted_906, _toDisplayString(chatTitle || t.newChat), 1), _cache[92] || (_cache[92] = _createElementVNode("svg", {
              viewBox: "0 0 24 24",
              "aria-hidden": "true"
            }, [_createElementVNode("path", { d: "M6 9l6 6 6-6" })], -1))], 8, _hoisted_905)]), _createElementVNode("div", _hoisted_907, [
              _createElementVNode("button", {
                class: "tool new-chat",
                type: "button",
                disabled: cmdBusy || (!chatId && !cmdLog.length),
                "aria-label": t.newChat,
                title: t.newChat,
                onClick: newConversation
              }, _cache[93] || (_cache[93] = [_createElementVNode("svg", {
                viewBox: "0 0 24 24",
                "aria-hidden": "true"
              }, [_createElementVNode("path", { d: "M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" })], -1)]), 8, _hoisted_908),
              (!phone)
                ? (_openBlock(), _createElementBlock("button", {
                    key: 0,
                    class: "tool",
                    type: "button",
                    "aria-pressed": dockBottom ? 'true' : 'false',
                    "aria-label": dockBottom ? t.dockSide : t.dockBottom,
                    title: dockBottom ? t.dockSide : t.dockBottom,
                    onClick: toggleBottom
                  }, [(_openBlock(), _createElementBlock("svg", _hoisted_910, [_cache[94] || (_cache[94] = _createElementVNode("rect", {
                    x: "3",
                    y: "4",
                    width: "18",
                    height: "16",
                    rx: "2"
                  }, null, -1)), (!dockBottom)
                    ? (_openBlock(), _createElementBlock("path", _hoisted_911))
                    : (_openBlock(), _createElementBlock("path", _hoisted_912))]))], 8, _hoisted_909))
                : _createCommentVNode("", true),
              (!phone)
                ? (_openBlock(), _createElementBlock("button", {
                    key: 1,
                    class: "tool",
                    type: "button",
                    "aria-pressed": cmdFloat ? 'true' : 'false',
                    "aria-label": cmdFloat ? t.floatOff : t.floatOn,
                    title: cmdFloat ? t.floatOff : t.floatOn,
                    onClick: toggleFloat
                  }, _cache[95] || (_cache[95] = [_createElementVNode("svg", {
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true"
                  }, [_createElementVNode("rect", {
                    x: "8",
                    y: "8",
                    width: "12",
                    height: "12",
                    rx: "2"
                  }), _createElementVNode("path", { d: "M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" })], -1)]), 8, _hoisted_913))
                : _createCommentVNode("", true),
              _createElementVNode("button", {
                class: "tool",
                type: "button",
                "aria-pressed": cmdWide && !cmdFloat ? 'true' : 'false',
                "aria-label": cmdWide && !cmdFloat ? t.shrink : t.expand,
                title: (cmdWide && !cmdFloat ? t.shrink : t.expand) + ' (Ctrl+Shift+K)',
                onClick: toggleWide
              }, [(_openBlock(), _createElementBlock("svg", _hoisted_915, [(!(cmdWide && !cmdFloat))
                ? (_openBlock(), _createElementBlock("path", _hoisted_916))
                : (_openBlock(), _createElementBlock("path", _hoisted_917))]))], 8, _hoisted_914),
              _createElementVNode("button", {
                class: "tool",
                type: "button",
                "aria-label": t.close,
                title: t.close,
                onClick: $event => (toggleCmd(false))
              }, _cache[96] || (_cache[96] = [_createElementVNode("svg", {
                viewBox: "0 0 24 24",
                "aria-hidden": "true"
              }, [_createElementVNode("path", { d: "M6 6l12 12M18 6L6 18" })], -1)]), 8, _hoisted_918)
            ])], 40, _hoisted_902),
            _createElementVNode("div", _hoisted_919, [
              (!cmdLog.length)
                ? (_openBlock(), _createElementBlock("div", _hoisted_920, [_createElementVNode("h3", _hoisted_921, _toDisplayString(t.cmdEmptyH), 1), _createElementVNode("p", _hoisted_922, _toDisplayString(introText), 1), (hints.length)
                    ? (_openBlock(), _createElementBlock("div", _hoisted_923, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(hints.slice(0, 4), (h, i) => {
                        return (_openBlock(), _createElementBlock("button", {
                          key: i + h.label,
                          type: "button",
                          class: _normalizeClass(["cmd-card", { go: h.open, agent: hintsBy === 'agent' }]),
                          disabled: cmdBusy,
                          title: h.text || h.label,
                          onClick: $event => (useHint(h, $event))
                        }, [_createElementVNode("span", _hoisted_925, [_createTextVNode(_toDisplayString(h.open ? t.cardOpen : hintsBy === 'agent' ? '✦ ' + t.hintsAgent : t.cardAsk), 1), (h.open)
                          ? (_openBlock(), _createElementBlock("span", _hoisted_926, " · " + _toDisplayString(h.open.version), 1))
                          : _createCommentVNode("", true)]), _createElementVNode("span", _hoisted_927, _toDisplayString(h.open ? refTitle(h.open) : h.text || h.label), 1)], 10, _hoisted_924))
                      }), 128))]))
                    : _createCommentVNode("", true)]))
                : _createCommentVNode("", true),
              cmdHidden
                ? (_openBlock(), _createElementBlock("button", {
                    key: 1,
                    class: "link cmd-older",
                    type: "button",
                    onClick: $event => (cmdShow += CMD_SHOWN)
                  }, _toDisplayString(fill(t.chatOlder, String(cmdHidden))), 9, _hoisted_928))
                : _createCommentVNode("", true),
              (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(cmdShown, (m, i) => {
                return (_openBlock(), _createElementBlock(_Fragment, { key: cmdHidden + i }, [(m.me)
                  ? (_openBlock(), _createElementBlock("div", _hoisted_929, [_createElementVNode("div", _hoisted_930, _toDisplayString(m.text), 1)]))
                  : (_openBlock(), _createElementBlock("div", {
                      key: 1,
                      class: _normalizeClass(["turn", m.by === 'agent' ? 'agent' : 'disp'])
                    }, [
                      _createElementVNode("div", _hoisted_931, [_createElementVNode("span", _hoisted_932, _toDisplayString(m.by === 'agent' ? '✦' : ''), 1), _createTextVNode(_toDisplayString(m.by === 'agent' ? t.agLlm : t.dispatcher), 1)]),
                      (m.by === 'agent')
                        ? (_openBlock(), _createElementBlock("div", {
                            key: 0,
                            class: "md",
                            innerHTML: m.html
                          }, null, 8, _hoisted_933))
                        : (_openBlock(), _createElementBlock("div", _hoisted_934, _toDisplayString(m.text), 1)),
                      (m.items.length)
                        ? (_openBlock(), _createElementBlock("div", _hoisted_935, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(m.items, (x) => {
                            return (_openBlock(), _createElementBlock("button", {
                              key: x.version + x.step,
                              type: "button",
                              class: "cmd-ref",
                              onClick: $event => (openStep(x.version, x.step, $event))
                            }, [_createElementVNode("span", _hoisted_937, _toDisplayString(x.version), 1), _createElementVNode("span", _hoisted_938, _toDisplayString(refTitle(x)), 1), _cache[97] || (_cache[97] = _createElementVNode("svg", {
                              viewBox: "0 0 24 24",
                              "aria-hidden": "true"
                            }, [_createElementVNode("path", { d: "M9 6l6 6-6 6" })], -1))], 8, _hoisted_936))
                          }), 128))]))
                        : _createCommentVNode("", true),
                      (m.agentError)
                        ? (_openBlock(), _createElementBlock("p", _hoisted_939, _toDisplayString(fill(t.agentFailed, m.agentError)), 1))
                        : _createCommentVNode("", true),
                      (m.proposals && m.proposals.length)
                        ? (_openBlock(), _createElementBlock("div", _hoisted_940, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(m.proposals, (p) => {
                            return (_openBlock(), _createElementBlock("div", {
                              key: p.id,
                              class: _normalizeClass(["proposal", p.state])
                            }, [_createElementVNode("span", _hoisted_941, _toDisplayString(p.done || p.summary), 1), (!p.state)
                              ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [_createElementVNode("button", {
                                  class: "btn xs pri",
                                  type: "button",
                                  disabled: p.busy,
                                  onClick: $event => (applyProposal(p))
                                }, _toDisplayString(p.kind === 'jira' ? t.propOpen : t.propDo), 9, _hoisted_942), _createElementVNode("button", {
                                  class: "btn xs",
                                  type: "button",
                                  disabled: p.busy,
                                  onClick: $event => (dropProposal(p))
                                }, _toDisplayString(t.propNo), 9, _hoisted_943)], 64))
                              : (_openBlock(), _createElementBlock("span", {
                                  key: 1,
                                  class: "dim small",
                                  title: p.state === 'expired' ? t.propExpired : ''
                                }, _toDisplayString(p.state === 'done' ? '✓' : p.state === 'expired' ? '⌛' : '–'), 9, _hoisted_944))], 2))
                          }), 128))]))
                        : _createCommentVNode("", true)
                    ], 2))], 64))
              }), 128)),
              (cmdBusy && cmdWait >= 1)
                ? (_openBlock(), _createElementBlock("div", _hoisted_945, [_createElementVNode("div", _hoisted_946, [_cache[98] || (_cache[98] = _createElementVNode("span", {
                    class: "typing",
                    "aria-hidden": "true"
                  }, [_createElementVNode("i"), _createElementVNode("i"), _createElementVNode("i")], -1)), _createTextVNode(_toDisplayString(t.waiting) + " · " + _toDisplayString(cmdWait) + " " + _toDisplayString(t.waitUnit) + " ", 1), _createElementVNode("button", {
                    class: "link",
                    type: "button",
                    onClick: stopWaiting
                  }, _toDisplayString(t.stopWaiting), 9, _hoisted_947)])]))
                : _createCommentVNode("", true)
            ], 512),
            _createElementVNode("div", _hoisted_948, [
              (cmdLog.length)
                ? (_openBlock(), _createElementBlock("div", _hoisted_949, [
                    _createElementVNode("span", {
                      class: _normalizeClass(["sugg-by", { agent: hintsBy === 'agent' }]),
                      title: hintsBy === 'agent' ? t.hintsAgentTitle : hintsError ? fill(t.hintsErr, hintsError) : ''
                    }, _toDisplayString(hintsBy === 'agent' ? '✦' : t.hintsRules), 11, _hoisted_950),
                    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(hints, (h, i) => {
                      return (_openBlock(), _createElementBlock("button", {
                        key: i + h.label,
                        type: "button",
                        class: _normalizeClass(["hint", { go: h.open, agent: hintsBy === 'agent' }]),
                        disabled: cmdBusy,
                        title: h.open ? t.cardOpen + ': ' + h.open.version + ' · ' + refTitle(h.open) : h.text || h.label,
                        onClick: $event => (useHint(h, $event))
                      }, [(h.open)
                        ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [_createElementVNode("span", _hoisted_952, _toDisplayString(h.open.version), 1), _createTextVNode(_toDisplayString(refTitle(h.open)), 1), _cache[99] || (_cache[99] = _createElementVNode("svg", {
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true"
                          }, [_createElementVNode("path", { d: "M9 6l6 6-6 6" })], -1))], 64))
                        : (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [_createTextVNode(_toDisplayString(h.label), 1)], 64))], 10, _hoisted_951))
                    }), 128)),
                    hintsPending
                      ? (_openBlock(), _createElementBlock("span", {
                          key: 0,
                          class: "pending dots",
                          title: t.hintsPending,
                          role: "status",
                          "aria-label": t.hintsPending
                        }, _cache[100] || (_cache[100] = [
                          _createTextVNode("✦"),
                          _createElementVNode("i", null, ".", -1),
                          _createElementVNode("i", null, ".", -1),
                          _createElementVNode("i", null, ".", -1)
                        ]), 8, _hoisted_953))
                      : _createCommentVNode("", true),
                    (llm.kind === 'opencode' && cfgHints)
                      ? (_openBlock(), _createElementBlock("button", {
                          key: 1,
                          type: "button",
                          class: "icon",
                          disabled: cmdBusy || hintsPending,
                          title: t.hintsRefresh,
                          "aria-label": t.hintsRefresh,
                          onClick: refreshHints
                        }, "↻", 8, _hoisted_954))
                      : _createCommentVNode("", true)
                  ]))
                : _createCommentVNode("", true),
              talkOn
                ? (_openBlock(), _createElementBlock("div", {
                    key: 1,
                    class: _normalizeClass(["talk-bar", 'talk-' + talkState]),
                    role: "status"
                  }, [
                    _cache[101] || (_cache[101] = _createElementVNode("span", {
                      class: "talk-sig",
                      "aria-hidden": "true"
                    }, [_createElementVNode("i"), _createElementVNode("i"), _createElementVNode("i")], -1)),
                    _createElementVNode("span", _hoisted_955, _toDisplayString(talkText), 1),
                    (talkState === 'speak' || talkState === 'pause')
                      ? (_openBlock(), _createElementBlock("button", {
                          key: 0,
                          class: "btn xs",
                          type: "button",
                          onClick: talkNow
                        }, _toDisplayString(talkState === 'speak' ? t.talkInterrupt : t.talkResume), 9, _hoisted_956))
                      : _createCommentVNode("", true),
                    _createElementVNode("button", {
                      class: "btn xs",
                      type: "button",
                      onClick: stopTalk
                    }, _toDisplayString(t.talkEnd), 9, _hoisted_957)
                  ], 2))
                : _createCommentVNode("", true),
              _createElementVNode("form", {
                class: _normalizeClass(["composer", { busy: cmdBusy, hearing: listening }]),
                onSubmit: _withModifiers($event => (sendCommand()), ["prevent"])
              }, [_withDirectives(_createElementVNode("textarea", {
                ref: "cmdInput",
                "onUpdate:modelValue": $event => ((cmdText) = $event),
                rows: "1",
                disabled: cmdBusy,
                placeholder: listening ? t.listening : t.cmdPlaceholder,
                "aria-label": t.cmdPlaceholder,
                autocomplete: "off",
                spellcheck: "false",
                onInput: growInput,
                onKeydown: _withKeys(onEnter, ["enter"])
              }, null, 40, _hoisted_959), [[_vModelText, cmdText]]), _createElementVNode("div", _hoisted_960, [
                voiceReady
                  ? (_openBlock(), _createElementBlock("div", {
                      key: 0,
                      class: "vlang",
                      role: "group",
                      "aria-label": t.vlang
                    }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(VOICE_LANGS, (l) => {
                      return (_openBlock(), _createElementBlock("button", {
                        key: l,
                        type: "button",
                        "aria-pressed": l === spokenLang ? 'true' : 'false',
                        title: fill(t.vlangTip, l.toUpperCase()),
                        onClick: $event => (setVoiceLang(l))
                      }, _toDisplayString(l.toUpperCase()), 9, _hoisted_962))
                    }), 128))], 8, _hoisted_961))
                  : _createCommentVNode("", true),
                _createElementVNode("button", {
                  type: "button",
                  class: "help-word",
                  disabled: cmdBusy,
                  title: t.helpWord,
                  "aria-label": t.helpWord,
                  onClick: $event => (sendCommand(t.helpWord))
                }, "?", 8, _hoisted_963),
                _cache[105] || (_cache[105] = _createElementVNode("span", { class: "grow" }, null, -1)),
                _createElementVNode("button", {
                  type: "button",
                  class: _normalizeClass(["mic", { on: listening && !talkOn }]),
                  disabled: !voiceReady || talkOn || (cmdBusy && !listening),
                  "aria-pressed": listening && !talkOn,
                  "aria-label": listening ? t.micStop : t.mic,
                  title: listening ? t.micStop : t.mic,
                  onClick: toggleMic
                }, _cache[102] || (_cache[102] = [_createElementVNode("svg", {
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true"
                }, [_createElementVNode("rect", {
                  x: "9",
                  y: "3",
                  width: "6",
                  height: "11",
                  rx: "3"
                }), _createElementVNode("path", { d: "M5 11a7 7 0 0 0 14 0M12 18v3" })], -1)]), 10, _hoisted_964),
                _createElementVNode("button", {
                  type: "button",
                  class: _normalizeClass(["mic talk", { on: talkOn }]),
                  disabled: !voiceReady || !canSpeak,
                  "aria-pressed": talkOn ? 'true' : 'false',
                  "aria-label": talkOn ? t.talkStop : t.talk,
                  title: talkOn ? t.talkStop : t.talkTitle,
                  onClick: toggleTalk
                }, _cache[103] || (_cache[103] = [_createElementVNode("svg", {
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true"
                }, [_createElementVNode("path", { d: "M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4" })], -1)]), 10, _hoisted_965),
                _createElementVNode("button", {
                  type: "submit",
                  class: "send",
                  disabled: cmdBusy || !cmdText.trim(),
                  "aria-label": t.send,
                  title: t.send + ' (Enter)'
                }, _cache[104] || (_cache[104] = [_createElementVNode("svg", {
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true"
                }, [_createElementVNode("path", { d: "M12 19V5M5 12l7-7 7 7" })], -1)]), 8, _hoisted_966)
              ])], 42, _hoisted_958),
              _createElementVNode("p", {
                class: _normalizeClass(["voice-note", { err: voiceError }]),
                role: "status"
              }, _toDisplayString(voiceError || talkNote || voiceNote), 3)
            ])
          ], 14, _hoisted_886))
        : _createCommentVNode("", true),
      caseCur
        ? (_openBlock(), _createElementBlock("div", {
            key: 18,
            class: "scrim",
            onClick: closeCase
          }, null, 8, _hoisted_967))
        : _createCommentVNode("", true),
      caseCur
        ? (_openBlock(), _createElementBlock("aside", {
            key: 19,
            class: "drawer cs",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": caseCur.question || t.cs.h,
            "aria-busy": caseCur.status === 'running'
          }, [
            _createElementVNode("div", _hoisted_969, [
              _createElementVNode("span", _hoisted_970, [_cache[106] || (_cache[106] = _createElementVNode("span", {
                class: "ix-spark",
                "aria-hidden": "true"
              }, "✦", -1)), _createTextVNode(_toDisplayString(caseCur.kind === 'gate' || (caseAsk && caseAsk.kind === 'gate') ? t.cs.gateH : t.cs.h), 1)]),
              (caseCur.steps.length)
                ? (_openBlock(), _createElementBlock("span", _hoisted_971, _toDisplayString(fill(t.cs.readings, String(caseCur.steps.length))), 1))
                : _createCommentVNode("", true),
              _createElementVNode("button", {
                class: "btn xs",
                type: "button",
                disabled: caseCur.status === 'running',
                onClick: $event => (startCase(caseAsk))
              }, "↻ " + _toDisplayString(t.cs.again), 9, _hoisted_972),
              _createElementVNode("button", {
                class: "btn xs",
                type: "button",
                onClick: closeCase
              }, _toDisplayString(t.close), 9, _hoisted_973)
            ]),
            _createElementVNode("h2", _hoisted_974, _toDisplayString(caseCur.question || t.cs.starting), 1),
            (caseCur.error)
              ? (_openBlock(), _createElementBlock("p", _hoisted_975, _toDisplayString(caseCur.error), 1))
              : _createCommentVNode("", true),
            (caseCur.result && caseCur.kind === 'gate')
              ? (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [
                  _createElementVNode("div", _hoisted_976, [_createElementVNode("span", { class: _normalizeClass(["ix-verdict", caseCur.result.verdict === 'ready' ? 'v-on_track' : 'v-blocked']) }, [_cache[107] || (_cache[107] = _createElementVNode("i", null, null, -1)), _createTextVNode(_toDisplayString(t.cs.gate[caseCur.result.verdict]), 1)], 2), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(['confirmed', 'against', 'unknown'], (v) => {
                    return (_openBlock(), _createElementBlock("span", { key: v }, [_createElementVNode("b", null, _toDisplayString(caseCur.result.counts[v]), 1), _createTextVNode(" " + _toDisplayString(t.cs.row[v]), 1)]))
                  }), 128))]),
                  _createElementVNode("p", _hoisted_977, _toDisplayString(caseCur.result.headline), 1),
                  _createElementVNode("ul", _hoisted_978, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(caseCur.result.rows, (r, i) => {
                    return (_openBlock(), _createElementBlock("li", {
                      key: i,
                      class: _normalizeClass('r-' + r.verdict)
                    }, [_createElementVNode("span", _hoisted_979, _toDisplayString({ confirmed: '✓', against: '✕', unknown: '?' }[r.verdict]), 1), _createElementVNode("div", null, [_createElementVNode("b", null, _toDisplayString(r.what), 1), _createElementVNode("span", _hoisted_980, _toDisplayString(r.found || t.cs.noFinding), 1), _createElementVNode("small", null, [_createTextVNode(_toDisplayString(t.cs.row[r.verdict]), 1), (r.source)
                      ? (_openBlock(), _createElementBlock("span", _hoisted_981, " · " + _toDisplayString(r.source), 1))
                      : _createCommentVNode("", true), (caseDone[r.step])
                      ? (_openBlock(), _createElementBlock("span", _hoisted_982, " · " + _toDisplayString(t.cs.marked), 1))
                      : _createCommentVNode("", true)])])], 2))
                  }), 128))]),
                  (caseMarkRows.length)
                    ? (_openBlock(), _createElementBlock("div", _hoisted_983, [_createElementVNode("div", _hoisted_984, _toDisplayString(t.cs.prepared), 1), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(caseMarkRows, (r) => {
                        return (_openBlock(), _createElementBlock("label", { key: r.step }, [_withDirectives(_createElementVNode("input", {
                          "onUpdate:modelValue": $event => ((caseMarks[r.step]) = $event),
                          type: "checkbox"
                        }, null, 8, _hoisted_985), [[_vModelCheckbox, caseMarks[r.step]]]), _createTextVNode(" " + _toDisplayString(r.what), 1)]))
                      }), 128)), _createElementVNode("div", _hoisted_986, [_createElementVNode("span", _hoisted_987, _toDisplayString(t.cs.markNote), 1), _createElementVNode("button", {
                        class: "btn xs pri",
                        type: "button",
                        disabled: busy || !caseMarkPicked.length,
                        onClick: markCaseRows
                      }, _toDisplayString(fill(t.cs.markN, String(caseMarkPicked.length))), 9, _hoisted_988)])]))
                    : _createCommentVNode("", true),
                  (caseCur.result.drafts.length)
                    ? (_openBlock(), _createElementBlock("div", _hoisted_989, [_createElementVNode("div", _hoisted_990, _toDisplayString(t.cs.drafts), 1), _createElementVNode("div", _hoisted_991, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(caseCur.result.drafts, (d, i) => {
                        return (_openBlock(), _createElementBlock("div", {
                          key: i,
                          class: "cs-opt"
                        }, [_createElementVNode("div", null, [_createElementVNode("span", null, _toDisplayString(d.title || t.cs.draft), 1)]), _createElementVNode("button", {
                          class: "btn xs",
                          type: "button",
                          "aria-expanded": caseDraft === i,
                          onClick: $event => (caseDraft = caseDraft === i ? -1 : i)
                        }, _toDisplayString(t.cs.draft), 9, _hoisted_992), (caseDraft === i)
                          ? (_openBlock(), _createElementBlock("div", _hoisted_993, [_createElementVNode("pre", null, _toDisplayString(d.text), 1), _createElementVNode("button", {
                              class: "btn xs",
                              type: "button",
                              onClick: $event => (copyText(d.text))
                            }, _toDisplayString(t.cs.copy), 9, _hoisted_994)]))
                          : _createCommentVNode("", true)]))
                      }), 128))])]))
                    : _createCommentVNode("", true),
                  (caseCur.second)
                    ? (_openBlock(), _createElementBlock("div", {
                        key: 2,
                        class: _normalizeClass(["cs-second", { no: caseCur.second.agrees === false }])
                      }, [_cache[108] || (_cache[108] = _createElementVNode("span", {
                        class: "ic",
                        "aria-hidden": "true"
                      }, "2", -1)), (caseCur.second.error)
                        ? (_openBlock(), _createElementBlock("span", _hoisted_995, [_createElementVNode("b", null, _toDisplayString(t.cs.secondFailed), 1), _createTextVNode(" " + _toDisplayString(caseCur.second.error), 1)]))
                        : (_openBlock(), _createElementBlock("span", _hoisted_996, [_createElementVNode("b", null, _toDisplayString(caseCur.second.agrees ? t.cs.secondYes : t.cs.secondNo), 1), _createTextVNode(" " + _toDisplayString(caseCur.second.note), 1)]))], 2))
                    : _createCommentVNode("", true),
                  (caseCur.dropped.length)
                    ? (_openBlock(), _createElementBlock("p", _hoisted_997, [_createTextVNode(_toDisplayString(fill(t.cs.dropped, String(caseCur.dropped.length))) + " ", 1), _createElementVNode("span", _hoisted_998, _toDisplayString(caseCur.dropped.map((d) => d.claim).join(', ')), 1)]))
                    : _createCommentVNode("", true)
                ], 64))
              : (caseCur.result)
                ? (_openBlock(), _createElementBlock(_Fragment, { key: 2 }, [
                    _createElementVNode("div", null, [_createElementVNode("div", _hoisted_999, [_createTextVNode(_toDisplayString(t.cs.cause), 1), _createElementVNode("span", { class: _normalizeClass(["cs-conf", 'c-' + caseCur.result.confidence]) }, _toDisplayString(t.cs.conf[caseCur.result.confidence]), 3)]), _createElementVNode("p", _hoisted_1000, _toDisplayString(caseCur.result.cause), 1)]),
                    (caseCur.result.evidence.length)
                      ? (_openBlock(), _createElementBlock("div", _hoisted_1001, [_createElementVNode("div", _hoisted_1002, _toDisplayString(t.cs.evidence), 1), _createElementVNode("ul", _hoisted_1003, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(caseCur.result.evidence, (e, i) => {
                          return (_openBlock(), _createElementBlock("li", { key: i }, [_createElementVNode("span", _hoisted_1004, _toDisplayString(e.source), 1), _createElementVNode("span", null, _toDisplayString(e.text), 1)]))
                        }), 128))])]))
                      : _createCommentVNode("", true),
                    (caseCur.result.ruled_out)
                      ? (_openBlock(), _createElementBlock("p", _hoisted_1005, [_createElementVNode("b", null, _toDisplayString(t.cs.ruledOut), 1), _createTextVNode(" " + _toDisplayString(caseCur.result.ruled_out), 1)]))
                      : _createCommentVNode("", true),
                    (caseCur.result.not_read)
                      ? (_openBlock(), _createElementBlock("p", _hoisted_1006, [_createElementVNode("b", null, _toDisplayString(t.cs.notRead), 1), _createTextVNode(" " + _toDisplayString(caseCur.result.not_read), 1)]))
                      : _createCommentVNode("", true),
                    (caseCur.second)
                      ? (_openBlock(), _createElementBlock("div", {
                          key: 3,
                          class: _normalizeClass(["cs-second", { no: caseCur.second.agrees === false }])
                        }, [_cache[109] || (_cache[109] = _createElementVNode("span", {
                          class: "ic",
                          "aria-hidden": "true"
                        }, "2", -1)), (caseCur.second.error)
                          ? (_openBlock(), _createElementBlock("span", _hoisted_1007, [_createElementVNode("b", null, _toDisplayString(t.cs.secondFailed), 1), _createTextVNode(" " + _toDisplayString(caseCur.second.error), 1)]))
                          : (_openBlock(), _createElementBlock("span", _hoisted_1008, [_createElementVNode("b", null, _toDisplayString(caseCur.second.agrees ? t.cs.secondYes : t.cs.secondNo), 1), _createTextVNode(" " + _toDisplayString(caseCur.second.note), 1)]))], 2))
                      : _createCommentVNode("", true),
                    (caseCur.result.options.length)
                      ? (_openBlock(), _createElementBlock("div", _hoisted_1009, [_createElementVNode("div", _hoisted_1010, _toDisplayString(t.cs.options), 1), _createElementVNode("div", _hoisted_1011, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(caseCur.result.options, (o, i) => {
                          return (_openBlock(), _createElementBlock("div", {
                            key: i,
                            class: "cs-opt"
                          }, [_createElementVNode("div", null, [_createElementVNode("span", null, _toDisplayString(o.text), 1), (o.why)
                            ? (_openBlock(), _createElementBlock("small", _hoisted_1012, _toDisplayString(o.why), 1))
                            : _createCommentVNode("", true)]), (o.draft)
                            ? (_openBlock(), _createElementBlock("button", {
                                key: 0,
                                class: "btn xs",
                                type: "button",
                                "aria-expanded": caseDraft === i,
                                onClick: $event => (caseDraft = caseDraft === i ? -1 : i)
                              }, _toDisplayString(t.cs.draft), 9, _hoisted_1013))
                            : _createCommentVNode("", true), (o.draft && caseDraft === i)
                            ? (_openBlock(), _createElementBlock("div", _hoisted_1014, [_createElementVNode("pre", null, _toDisplayString(o.draft), 1), _createElementVNode("button", {
                                class: "btn xs",
                                type: "button",
                                onClick: $event => (copyText(o.draft))
                              }, _toDisplayString(t.cs.copy), 9, _hoisted_1015)]))
                            : _createCommentVNode("", true)]))
                        }), 128))])]))
                      : _createCommentVNode("", true),
                    (caseCur.dropped.length)
                      ? (_openBlock(), _createElementBlock("p", _hoisted_1016, [_createTextVNode(_toDisplayString(fill(t.cs.dropped, String(caseCur.dropped.length))) + " ", 1), _createElementVNode("span", _hoisted_1017, _toDisplayString(caseCur.dropped.map((d) => d.claim).join(', ')), 1)]))
                      : _createCommentVNode("", true)
                  ], 64))
                : _createCommentVNode("", true),
            _createElementVNode("div", null, [_createElementVNode("div", _hoisted_1018, _toDisplayString(t.cs.trace), 1), _createElementVNode("ol", _hoisted_1019, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(caseCur.steps, (s, i) => {
              return (_openBlock(), _createElementBlock("li", {
                key: i,
                class: _normalizeClass({ failed: s.failed })
              }, [_cache[110] || (_cache[110] = _createElementVNode("i", null, null, -1)), _createElementVNode("span", null, [_createElementVNode("span", _hoisted_1020, _toDisplayString(t.cs.tool[s.tool] || s.tool), 1), _createElementVNode("span", _hoisted_1021, _toDisplayString(s.note), 1)])], 2))
            }), 128)), (caseCur.status === 'running')
              ? (_openBlock(), _createElementBlock("li", _hoisted_1022, [_cache[111] || (_cache[111] = _createElementVNode("i", null, null, -1)), _createElementVNode("span", null, [_createElementVNode("span", _hoisted_1023, _toDisplayString(t.cs.thinking), 1)])]))
              : (!caseCur.steps.length)
                ? (_openBlock(), _createElementBlock("li", _hoisted_1024, [_cache[112] || (_cache[112] = _createElementVNode("i", null, null, -1)), _createElementVNode("span", null, [_createElementVNode("span", _hoisted_1025, _toDisplayString(t.cs.noSteps), 1)])]))
                : _createCommentVNode("", true)])]),
            _createElementVNode("div", _hoisted_1026, [(caseCur.agent)
              ? (_openBlock(), _createElementBlock("span", _hoisted_1027, [_createTextVNode(_toDisplayString(caseCur.agent), 1), (caseCur.done)
                  ? (_openBlock(), _createElementBlock("span", _hoisted_1028, " · " + _toDisplayString(insAt(caseCur.done)), 1))
                  : _createCommentVNode("", true)]))
              : _createCommentVNode("", true), (caseCur.result)
              ? (_openBlock(), _createElementBlock("span", _hoisted_1029, "✓ " + _toDisplayString(t.cs.checked), 1))
              : _createCommentVNode("", true), _createElementVNode("span", null, _toDisplayString(t.cs.only), 1)])
          ], 8, _hoisted_968))
        : _createCommentVNode("", true),
      drawerItem
        ? (_openBlock(), _createElementBlock("div", {
            key: 20,
            class: "scrim",
            onClick: closeDrawer
          }, null, 8, _hoisted_1030))
        : _createCommentVNode("", true),
      drawerItem
        ? (_openBlock(), _createElementBlock("aside", {
            key: 21,
            class: "drawer",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": title(drawerItem.s)
          }, [(_openBlock(), _createBlock(_component_step_card, {
            ref: "drawerCard",
            key: drawerItem.r.version + drawerItem.s.id,
            step: drawerItem.s,
            release: drawerItem.r,
            t: t,
            lang: lang,
            busy: busy,
            closable: "",
            checking: !!csBusy[drawerItem.r.version + '|' + drawerItem.s.id] || (state.cs_running || []).includes(drawerItem.r.version + '|' + drawerItem.s.id),
            help: helpOpen,
            onHelp: toggleHelp,
            onClose: closeDrawer,
            onMark: (status, note) => mark(drawerItem.r, drawerItem.s, status, note),
            onUnmark: $event => (unmark(drawerItem.r, drawerItem.s)),
            onMonitor: goMonitor,
            onMail: (k) => openMail(drawerItem.r, k),
            onNotes: $event => (openNotes(drawerItem.r)),
            onJira: (k) => openJira(drawerItem.r, k),
            onWorkflow: $event => {closeDrawer(); editWorkflow()},
            api: call,
            mode: state.jenkins_start,
            cs: state.cs_stages,
            "env-param": state.jenkins_env_param,
            "env-params": state.jenkins_env_params,
            "on-state": apply,
            reload: load,
            onCheck: $event => (check(drawerItem.r, drawerItem.s)),
            onMeeting: $event => (openMeeting(drawerItem.r, drawerItem.s))
          }, null, 8, ["step", "release", "t", "lang", "busy", "checking", "help", "onHelp", "onClose", "onMark", "onUnmark", "onMonitor", "onMail", "onNotes", "onJira", "onWorkflow", "api", "mode", "cs", "env-param", "env-params", "on-state", "reload", "onCheck", "onMeeting"]))], 8, _hoisted_1031))
        : _createCommentVNode("", true),
      comp
        ? (_openBlock(), _createElementBlock("div", {
            key: 22,
            class: "scrim",
            onClick: closeComp
          }, null, 8, _hoisted_1032))
        : _createCommentVNode("", true),
      comp
        ? (_openBlock(), _createElementBlock("aside", {
            key: 23,
            class: "compose",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": comp.type === 'mail' ? t.mailH : comp.type === 'meeting' ? t.meetingH : comp.type === 'jira' ? t.jiraBtn[comp.kind] : t.notesH
          }, [_createElementVNode("header", _hoisted_1034, [_createElementVNode("div", _hoisted_1035, [_createElementVNode("span", _hoisted_1036, _toDisplayString(comp.type === 'mail' ? t.mailBtn[comp.kind] : comp.type === 'meeting' ? t.meetingBtn : comp.type === 'jira' ? t.jiraBtn[comp.kind] : t.notesH), 1), _createElementVNode("span", _hoisted_1037, _toDisplayString(comp.version), 1)]), _createElementVNode("button", {
            ref: "compClose",
            class: "icon-btn",
            type: "button",
            "aria-label": t.close,
            onClick: closeComp
          }, "✕", 8, _hoisted_1038)]), (comp.type === 'jira')
            ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [
                _createElementVNode("h2", null, [_createTextVNode(_toDisplayString(t.jiraBtn[comp.kind]), 1), _createVNode(_component_help_tip, {
                  k: "jira",
                  open: helpOpen,
                  onToggle: toggleHelp
                }, null, 8, ["open", "onToggle"])]),
                (comp.busy === 'load')
                  ? (_openBlock(), _createElementBlock("p", _hoisted_1039, _toDisplayString(t.working), 1))
                  : _createCommentVNode("", true),
                (comp.error)
                  ? (_openBlock(), _createElementBlock("p", _hoisted_1040, _toDisplayString(comp.error), 1))
                  : _createCommentVNode("", true),
                (comp.kind === 'deploys' && comp.form)
                  ? (_openBlock(), _createElementBlock(_Fragment, { key: 2 }, [_createElementVNode("p", _hoisted_1041, [_createTextVNode(_toDisplayString(t.jiraUnder) + " ", 1), _createElementVNode("a", {
                      href: jiraLink(comp.form.master),
                      target: "_blank",
                      rel: "noopener noreferrer",
                      class: "mono"
                    }, _toDisplayString(comp.form.master) + " ↗", 9, _hoisted_1042), _createTextVNode(" " + _toDisplayString(comp.form.master_summary), 1)]), _createElementVNode("div", _hoisted_1043, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(comp.rows, (row) => {
                      return (_openBlock(), _createElementBlock(_Fragment, { key: row.env }, [_createElementVNode("label", _hoisted_1044, [
                        _withDirectives(_createElementVNode("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": $event => ((row.on) = $event)
                        }, null, 8, _hoisted_1045), [[_vModelCheckbox, row.on]]),
                        _cache[113] || (_cache[113] = _createTextVNode()),
                        _createElementVNode("span", _hoisted_1046, _toDisplayString(row.env), 1),
                        (comp.form.exists[row.env])
                          ? (_openBlock(), _createElementBlock("span", _hoisted_1047, " · " + _toDisplayString(t.jiraHas) + " " + _toDisplayString(comp.form.exists[row.env].join(', ')), 1))
                          : _createCommentVNode("", true)
                      ]), _withDirectives(_createElementVNode("input", {
                        "onUpdate:modelValue": $event => ((row.date) = $event),
                        type: "date",
                        disabled: !row.on,
                        "aria-label": row.env + ' date'
                      }, null, 8, _hoisted_1048), [[_vModelText, row.date]]), _withDirectives(_createElementVNode("input", {
                        "onUpdate:modelValue": $event => ((row.time) = $event),
                        class: "mono",
                        disabled: !row.on,
                        placeholder: "11:00 - 12:00",
                        "aria-label": row.env + ' time'
                      }, null, 8, _hoisted_1049), [[
                        _vModelText,
                        row.time,
                        void 0,
                        { trim: true }
                      ]])], 64))
                    }), 128))])], 64))
                  : _createCommentVNode("", true),
                _createElementVNode("div", _hoisted_1050, [_createElementVNode("button", {
                  class: "btn",
                  type: "button",
                  disabled: !!comp.busy || (comp.kind === 'deploys' && !jiraStages.length),
                  onClick: jiraCheck
                }, _toDisplayString(comp.busy === 'check' ? t.working : t.notesCheck), 9, _hoisted_1051), _createElementVNode("button", {
                  class: "btn pri",
                  type: "button",
                  disabled: !!comp.busy || !comp.plan || !comp.plan.creates.length || jiraKey() !== comp.planFor || comp.plan.mode !== 'on',
                  onClick: jiraCreate
                }, _toDisplayString(comp.busy === 'create' ? t.working : t.jiraCreate), 9, _hoisted_1052)]),
                (comp.plan)
                  ? (_openBlock(), _createElementBlock("div", {
                      key: 3,
                      class: _normalizeClass(["plan", { stale: jiraKey() !== comp.planFor }]),
                      role: "status"
                    }, [
                      _createElementVNode("b", null, _toDisplayString(comp.plan.creates.length ? fill(t.jiraWill, comp.plan.creates.length) : t.jiraNothing), 1),
                      _createElementVNode("ul", _hoisted_1053, [(comp.plan.kind === 'delivery')
                        ? (_openBlock(), _createElementBlock("li", _hoisted_1054, [(comp.plan.parent.key)
                            ? (_openBlock(), _createElementBlock("span", _hoisted_1055, [_createElementVNode("a", {
                                href: jiraLink(comp.plan.parent.key),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                class: "mono"
                              }, _toDisplayString(comp.plan.parent.key) + " ↗", 9, _hoisted_1056), _createTextVNode(" " + _toDisplayString(comp.plan.parent.summary) + " · " + _toDisplayString(t.jiraExists), 1)]))
                            : (_openBlock(), _createElementBlock("span", _hoisted_1057, [_cache[114] || (_cache[114] = _createTextVNode("＋ Task: ")), _createElementVNode("b", null, _toDisplayString(comp.plan.parent.summary), 1)])), _createElementVNode("span", _hoisted_1058, [_createTextVNode(" · " + _toDisplayString(t.jiraCopied) + " ", 1), _createElementVNode("span", _hoisted_1059, _toDisplayString(comp.plan.template), 1)])]))
                        : _createCommentVNode("", true), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(comp.plan.children, (c) => {
                        return (_openBlock(), _createElementBlock("li", {
                          key: c.summary,
                          class: _normalizeClass({ dim: c.exists === true || (c.exists && c.exists.length) })
                        }, [
                          _createTextVNode(_toDisplayString((c.exists === true || (c.exists && c.exists.length)) ? '✓' : '＋') + " Sub-task: " + _toDisplayString(c.summary) + " ", 1),
                          (c.duedate)
                            ? (_openBlock(), _createElementBlock("span", _hoisted_1060, " · " + _toDisplayString(t.jiraDue) + " " + _toDisplayString(c.duedate), 1))
                            : _createCommentVNode("", true),
                          (comp.plan.kind === 'deploys')
                            ? (_openBlock(), _createElementBlock("span", _hoisted_1061, [_createTextVNode(" · " + _toDisplayString(c.assignee || t.jiraNobody) + " · " + _toDisplayString(t.jiraCopied) + " ", 1), _createElementVNode("span", _hoisted_1062, _toDisplayString(c.template), 1)]))
                            : _createCommentVNode("", true),
                          (c.exists && c.exists.length)
                            ? (_openBlock(), _createElementBlock("span", _hoisted_1063, " · " + _toDisplayString(t.jiraExists) + " " + _toDisplayString(c.exists.join(', ')), 1))
                            : _createCommentVNode("", true)
                        ], 2))
                      }), 128))]),
                      (comp.plan.mode !== 'on')
                        ? (_openBlock(), _createElementBlock("p", _hoisted_1064, _toDisplayString(t.jiraDryOnly), 1))
                        : _createCommentVNode("", true),
                      (jiraKey() !== comp.planFor)
                        ? (_openBlock(), _createElementBlock("p", _hoisted_1065, _toDisplayString(t.jiraStale), 1))
                        : _createCommentVNode("", true)
                    ], 2))
                  : _createCommentVNode("", true),
                (comp.done)
                  ? (_openBlock(), _createElementBlock("div", _hoisted_1066, [_createTextVNode("✓ " + _toDisplayString(t.jiraDone) + " ", 1), _createElementVNode("ul", _hoisted_1067, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(comp.done.created, (c) => {
                      return (_openBlock(), _createElementBlock("li", { key: c.key }, [_createElementVNode("a", {
                        href: c.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "mono"
                      }, _toDisplayString(c.key) + " ↗", 9, _hoisted_1068), _createTextVNode(" " + _toDisplayString(c.summary), 1)]))
                    }), 128))])]))
                  : _createCommentVNode("", true),
                _createElementVNode("p", _hoisted_1069, _toDisplayString(t.jiraNote), 1)
              ], 64))
            : (comp.type === 'meeting')
              ? (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [
                  _createElementVNode("h2", null, [_createTextVNode(_toDisplayString(t.meetingH), 1), _createVNode(_component_help_tip, {
                    k: "meeting",
                    open: helpOpen,
                    onToggle: toggleHelp
                  }, null, 8, ["open", "onToggle"])]),
                  _createElementVNode("div", _hoisted_1070, [
                    _createElementVNode("label", _hoisted_1071, [_createTextVNode(_toDisplayString(t.attendees) + " ", 1), _createElementVNode("span", _hoisted_1072, "· " + _toDisplayString(t.addrHint), 1)]),
                    _withDirectives(_createElementVNode("input", {
                      id: "mt-to",
                      "onUpdate:modelValue": $event => ((comp.attendees) = $event),
                      autocomplete: "off",
                      spellcheck: "false"
                    }, null, 8, _hoisted_1073), [[_vModelText, comp.attendees]]),
                    _createElementVNode("label", _hoisted_1074, _toDisplayString(t.optionalAtt), 1),
                    _withDirectives(_createElementVNode("input", {
                      id: "mt-opt",
                      "onUpdate:modelValue": $event => ((comp.optional) = $event),
                      autocomplete: "off",
                      spellcheck: "false"
                    }, null, 8, _hoisted_1075), [[_vModelText, comp.optional]]),
                    _createElementVNode("label", _hoisted_1076, _toDisplayString(t.mailSubject), 1),
                    _withDirectives(_createElementVNode("input", {
                      id: "mt-subject",
                      "onUpdate:modelValue": $event => ((comp.subject) = $event),
                      autocomplete: "off",
                      lang: "en"
                    }, null, 8, _hoisted_1077), [[_vModelText, comp.subject]]),
                    _createElementVNode("label", _hoisted_1078, _toDisplayString(t.mStart), 1),
                    _createElementVNode("div", _hoisted_1079, [_withDirectives(_createElementVNode("input", {
                      id: "mt-start",
                      "onUpdate:modelValue": $event => ((comp.start) = $event),
                      type: "datetime-local"
                    }, null, 8, _hoisted_1080), [[_vModelText, comp.start]]), _createElementVNode("label", _hoisted_1081, _toDisplayString(t.mEnd), 1), _withDirectives(_createElementVNode("input", {
                      id: "mt-end",
                      "onUpdate:modelValue": $event => ((comp.end) = $event),
                      type: "datetime-local"
                    }, null, 8, _hoisted_1082), [[_vModelText, comp.end]])]),
                    _createElementVNode("label", _hoisted_1083, _toDisplayString(t.mLocation), 1),
                    _withDirectives(_createElementVNode("input", {
                      id: "mt-loc",
                      "onUpdate:modelValue": $event => ((comp.location) = $event),
                      autocomplete: "off"
                    }, null, 8, _hoisted_1084), [[_vModelText, comp.location]]),
                    _createElementVNode("label", _hoisted_1085, _toDisplayString(t.mailText), 1),
                    _withDirectives(_createElementVNode("textarea", {
                      id: "m-text",
                      "onUpdate:modelValue": $event => ((comp.text) = $event),
                      rows: "14",
                      lang: "en"
                    }, null, 8, _hoisted_1086), [[_vModelText, comp.text]])
                  ]),
                  _createElementVNode("p", _hoisted_1087, _toDisplayString(t.meetingNote), 1),
                  _createElementVNode("div", _hoisted_1088, [_createElementVNode("button", {
                    class: "btn pri",
                    type: "button",
                    disabled: !!comp.busy,
                    onClick: meetingOpen
                  }, _toDisplayString(comp.busy === 'open' ? t.working : t.mailOutlook), 9, _hoisted_1089), _createElementVNode("button", {
                    class: "btn",
                    type: "button",
                    onClick: mailCopy
                  }, _toDisplayString(t.mailCopy), 9, _hoisted_1090)])
                ], 64))
              : (comp.type === 'mail')
                ? (_openBlock(), _createElementBlock(_Fragment, { key: 2 }, [
                    _createElementVNode("h2", null, [_createTextVNode(_toDisplayString(t.mailH), 1), _createVNode(_component_help_tip, {
                      k: "mail",
                      open: helpOpen,
                      onToggle: toggleHelp
                    }, null, 8, ["open", "onToggle"])]),
                    _createElementVNode("div", _hoisted_1091, [
                      _createElementVNode("label", _hoisted_1092, [_createTextVNode(_toDisplayString(t.mailTo) + " ", 1), _createElementVNode("span", _hoisted_1093, "· " + _toDisplayString(t.addrHint), 1)]),
                      _withDirectives(_createElementVNode("input", {
                        id: "m-to",
                        "onUpdate:modelValue": $event => ((comp.to) = $event),
                        autocomplete: "off",
                        spellcheck: "false"
                      }, null, 8, _hoisted_1094), [[_vModelText, comp.to]]),
                      _createElementVNode("label", _hoisted_1095, _toDisplayString(t.mailCc), 1),
                      _withDirectives(_createElementVNode("input", {
                        id: "m-cc",
                        "onUpdate:modelValue": $event => ((comp.cc) = $event),
                        autocomplete: "off",
                        spellcheck: "false"
                      }, null, 8, _hoisted_1096), [[_vModelText, comp.cc]]),
                      _createElementVNode("label", _hoisted_1097, _toDisplayString(t.mailSubject), 1),
                      _withDirectives(_createElementVNode("input", {
                        id: "m-subject",
                        "onUpdate:modelValue": $event => ((comp.subject) = $event),
                        autocomplete: "off",
                        lang: "en"
                      }, null, 8, _hoisted_1098), [[_vModelText, comp.subject]]),
                      _createElementVNode("label", _hoisted_1099, _toDisplayString(t.mailText), 1),
                      _withDirectives(_createElementVNode("textarea", {
                        id: "m-text",
                        "onUpdate:modelValue": $event => ((comp.text) = $event),
                        rows: "18",
                        lang: "en",
                        readonly: comp.busy === 'polish'
                      }, null, 8, _hoisted_1100), [[_vModelText, comp.text]])
                    ]),
                    _createElementVNode("p", _hoisted_1101, _toDisplayString(t.mailNote), 1),
                    _createElementVNode("div", _hoisted_1102, [
                      _createElementVNode("button", {
                        class: "btn pri",
                        type: "button",
                        disabled: !!comp.busy,
                        onClick: mailOpen
                      }, _toDisplayString(comp.busy === 'open' ? t.working : t.mailOutlook), 9, _hoisted_1103),
                      _createElementVNode("button", {
                        class: "btn",
                        type: "button",
                        disabled: !!comp.busy || !helpers.mail || !comp.text.trim(),
                        title: helpers.mail ? helpers.mail : t.helperOff,
                        onClick: mailPolish
                      }, _toDisplayString(comp.busy === 'polish' ? t.working : t.mailImprove), 9, _hoisted_1104),
                      (comp.busy === 'polish')
                        ? (_openBlock(), _createElementBlock("button", {
                            key: 0,
                            class: "btn",
                            type: "button",
                            onClick: composeStop
                          }, _toDisplayString(t.stopWaiting), 9, _hoisted_1105))
                        : _createCommentVNode("", true),
                      (comp.before)
                        ? (_openBlock(), _createElementBlock("button", {
                            key: 1,
                            class: "btn",
                            type: "button",
                            disabled: !!comp.busy,
                            onClick: mailUnpolish
                          }, _toDisplayString(t.mailUnpolish), 9, _hoisted_1106))
                        : _createCommentVNode("", true),
                      _createElementVNode("a", {
                        class: "btn",
                        href: mailtoHref
                      }, _toDisplayString(t.mailMailto), 9, _hoisted_1107),
                      _createElementVNode("button", {
                        class: "btn",
                        type: "button",
                        onClick: mailCopy
                      }, _toDisplayString(t.mailCopy), 9, _hoisted_1108),
                      _createElementVNode("button", {
                        class: "btn",
                        type: "button",
                        disabled: !!comp.busy,
                        onClick: mailReset
                      }, _toDisplayString(t.mailReset), 9, _hoisted_1109)
                    ]),
                    (comp.text.length > 1800)
                      ? (_openBlock(), _createElementBlock("p", _hoisted_1110, _toDisplayString(t.mailtoCut), 1))
                      : _createCommentVNode("", true),
                    (!helpers.mail)
                      ? (_openBlock(), _createElementBlock("p", _hoisted_1111, _toDisplayString(t.helperOff), 1))
                      : _createCommentVNode("", true)
                  ], 64))
                : (_openBlock(), _createElementBlock(_Fragment, { key: 3 }, [_createElementVNode("h2", null, [_createTextVNode(_toDisplayString(t.notesH), 1), _createVNode(_component_help_tip, {
                    k: "notes",
                    open: helpOpen,
                    onToggle: toggleHelp
                  }, null, 8, ["open", "onToggle"])]), (comp.busy === 'load')
                    ? (_openBlock(), _createElementBlock("p", _hoisted_1112, _toDisplayString(t.notesLoading), 1))
                    : _createCommentVNode("", true), (comp.view)
                    ? (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [
                        (comp.view.style === 'atlas')
                          ? (_openBlock(), _createElementBlock("dl", _hoisted_1113, [
                              _createElementVNode("div", null, [_cache[115] || (_cache[115] = _createElementVNode("dt", null, "Confluence", -1)), _createElementVNode("dd", null, _toDisplayString(comp.view.title), 1)]),
                              _createElementVNode("div", null, [_cache[116] || (_cache[116] = _createElementVNode("dt", null, "PI", -1)), _createElementVNode("dd", null, [(comp.view.place && comp.view.place.pi_url)
                                ? (_openBlock(), _createElementBlock("a", {
                                    key: 0,
                                    href: comp.view.place.pi_url,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                  }, _toDisplayString(comp.view.place.pi_title) + " ↗", 9, _hoisted_1114))
                                : (_openBlock(), _createElementBlock("span", _hoisted_1115, "—"))])]),
                              _createElementVNode("div", null, [_createElementVNode("dt", null, _toDisplayString(t.notesSpace), 1), _createElementVNode("dd", _hoisted_1116, _toDisplayString(comp.view.space || '—'), 1)]),
                              _createElementVNode("div", null, [_createElementVNode("dt", null, _toDisplayString(t.notesBefore), 1), _createElementVNode("dd", null, [(comp.view.place && comp.view.place.previous)
                                ? (_openBlock(), _createElementBlock("a", {
                                    key: 0,
                                    href: comp.view.place.previous.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                  }, _toDisplayString(comp.view.place.previous.title) + " ↗", 9, _hoisted_1117))
                                : (_openBlock(), _createElementBlock("span", _hoisted_1118, "—"))])])
                            ]))
                          : (_openBlock(), _createElementBlock("dl", _hoisted_1119, [
                              _createElementVNode("div", null, [_cache[117] || (_cache[117] = _createElementVNode("dt", null, "Confluence", -1)), _createElementVNode("dd", null, _toDisplayString(comp.view.title), 1)]),
                              _createElementVNode("div", null, [_createElementVNode("dt", null, _toDisplayString(t.notesSpace), 1), _createElementVNode("dd", _hoisted_1120, _toDisplayString(comp.view.space || '—'), 1)]),
                              _createElementVNode("div", null, [_createElementVNode("dt", null, _toDisplayString(t.notesIssues), 1), _createElementVNode("dd", null, _toDisplayString(comp.view.issues.length), 1)]),
                              _createElementVNode("div", null, [_cache[118] || (_cache[118] = _createElementVNode("dt", null, "JQL", -1)), _createElementVNode("dd", _hoisted_1121, _toDisplayString(comp.view.jql), 1)])
                            ])),
                        (comp.view.page)
                          ? (_openBlock(), _createElementBlock("p", _hoisted_1122, [_createTextVNode(_toDisplayString(t.notesPage) + ": ", 1), _createElementVNode("a", {
                              href: comp.view.page.url,
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, _toDisplayString(comp.view.page.title) + " ↗", 9, _hoisted_1123), _createTextVNode(" · " + _toDisplayString(comp.view.page.at.replace('T', ' ')), 1)]))
                          : _createCommentVNode("", true),
                        (comp.view.place && comp.view.place.page)
                          ? (_openBlock(), _createElementBlock("p", _hoisted_1124, [_createTextVNode(_toDisplayString(t.notesExists) + " ", 1), _createElementVNode("a", {
                              href: comp.view.place.page.url,
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, _toDisplayString(comp.view.place.page.title) + " ↗", 9, _hoisted_1125)]))
                          : _createCommentVNode("", true),
                        (comp.view.error)
                          ? (_openBlock(), _createElementBlock("p", _hoisted_1126, _toDisplayString(comp.view.error), 1))
                          : _createCommentVNode("", true),
                        (comp.view.jira_error)
                          ? (_openBlock(), _createElementBlock("p", _hoisted_1127, _toDisplayString(comp.view.jira_error), 1))
                          : _createCommentVNode("", true),
                        (comp.view.style === 'atlas' && comp.view.artifacts.length)
                          ? (_openBlock(), _createElementBlock(_Fragment, { key: 6 }, [
                              _createElementVNode("span", _hoisted_1128, _toDisplayString(t.notesArtifacts), 1),
                              _createElementVNode("div", _hoisted_1129, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(comp.view.artifacts, (a) => {
                                return (_openBlock(), _createElementBlock(_Fragment, { key: a.name }, [_createElementVNode("label", {
                                  for: 'n-a-' + a.name,
                                  class: "mono"
                                }, _toDisplayString(a.name), 9, _hoisted_1130), _withDirectives(_createElementVNode("input", {
                                  id: 'n-a-' + a.name,
                                  "onUpdate:modelValue": $event => ((comp.artifacts[a.name]) = $event),
                                  class: "mono",
                                  autocomplete: "off",
                                  spellcheck: "false",
                                  placeholder: "5.13.0"
                                }, null, 8, _hoisted_1131), [[
                                  _vModelText,
                                  comp.artifacts[a.name],
                                  void 0,
                                  { trim: true }
                                ]])], 64))
                              }), 128))]),
                              _createElementVNode("label", _hoisted_1132, _toDisplayString(t.notesInfo), 1),
                              _withDirectives(_createElementVNode("textarea", {
                                id: "n-info",
                                "onUpdate:modelValue": $event => ((comp.interfaces) = $event),
                                class: "n-high",
                                rows: "2",
                                lang: "en"
                              }, null, 8, _hoisted_1133), [[_vModelText, comp.interfaces]])
                            ], 64))
                          : _createCommentVNode("", true),
                        (comp.view.style !== 'atlas')
                          ? (_openBlock(), _createElementBlock(_Fragment, { key: 7 }, [_createElementVNode("label", _hoisted_1134, _toDisplayString(t.notesHigh), 1), _withDirectives(_createElementVNode("textarea", {
                              id: "n-high",
                              "onUpdate:modelValue": $event => ((comp.summary) = $event),
                              class: "n-high",
                              rows: "6",
                              placeholder: t.notesHighPh,
                              lang: "en"
                            }, null, 8, _hoisted_1135), [[_vModelText, comp.summary]])], 64))
                          : _createCommentVNode("", true),
                        _createElementVNode("div", _hoisted_1136, [
                          (comp.view.style !== 'atlas')
                            ? (_openBlock(), _createElementBlock("button", {
                                key: 0,
                                class: "btn",
                                type: "button",
                                disabled: !!comp.busy || !helpers.notes || !comp.view.issues.length,
                                title: helpers.notes ? helpers.notes : t.helperOff,
                                onClick: notesWrite
                              }, _toDisplayString(comp.busy === 'write' ? t.working : t.notesWrite), 9, _hoisted_1137))
                            : _createCommentVNode("", true),
                          (comp.busy === 'write')
                            ? (_openBlock(), _createElementBlock("button", {
                                key: 1,
                                class: "btn",
                                type: "button",
                                onClick: composeStop
                              }, _toDisplayString(t.stopWaiting), 9, _hoisted_1138))
                            : _createCommentVNode("", true),
                          _createElementVNode("button", {
                            class: "btn",
                            type: "button",
                            disabled: !!comp.busy || !!comp.view.error,
                            onClick: notesCheck
                          }, _toDisplayString(comp.busy === 'check' ? t.working : t.notesCheck), 9, _hoisted_1139),
                          _createElementVNode("button", {
                            class: "btn pri",
                            type: "button",
                            disabled: !!comp.busy || !comp.plan || notesKey() !== comp.planFor,
                            onClick: notesPublish
                          }, _toDisplayString(comp.busy === 'publish' ? t.working : t.notesPublish), 9, _hoisted_1140)
                        ]),
                        (comp.plan)
                          ? (_openBlock(), _createElementBlock("div", {
                              key: 8,
                              class: _normalizeClass(["plan", { stale: notesKey() !== comp.planFor }]),
                              role: "status"
                            }, [
                              _createElementVNode("b", null, _toDisplayString(planText(comp.plan)), 1),
                              (comp.plan.url)
                                ? (_openBlock(), _createElementBlock("a", {
                                    key: 0,
                                    href: comp.plan.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                  }, " ↗", 8, _hoisted_1141))
                                : _createCommentVNode("", true),
                              (comp.view.style === 'atlas' && comp.plan.action === 'update')
                                ? (_openBlock(), _createElementBlock("p", _hoisted_1142, _toDisplayString(t.notesReplace), 1))
                                : _createCommentVNode("", true),
                              (notesKey() !== comp.planFor)
                                ? (_openBlock(), _createElementBlock("p", _hoisted_1143, _toDisplayString(t.notesStale), 1))
                                : _createCommentVNode("", true)
                            ], 2))
                          : _createCommentVNode("", true),
                        (comp.done)
                          ? (_openBlock(), _createElementBlock("p", _hoisted_1144, [_createTextVNode("✓ " + _toDisplayString(t.notesPage) + ": ", 1), _createElementVNode("a", {
                              href: comp.done.url,
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, _toDisplayString(comp.done.title) + " ↗", 9, _hoisted_1145)]))
                          : _createCommentVNode("", true),
                        _createElementVNode("p", _hoisted_1146, _toDisplayString(t.notesNote), 1),
                        (!helpers.notes && comp.view.style !== 'atlas')
                          ? (_openBlock(), _createElementBlock("p", _hoisted_1147, _toDisplayString(t.helperOff), 1))
                          : _createCommentVNode("", true),
                        _createElementVNode("details", _hoisted_1148, [_createElementVNode("summary", null, _toDisplayString(t.notesPreview), 1), (comp.view.style === 'atlas')
                          ? (_openBlock(), _createElementBlock("div", _hoisted_1149, [
                              _createElementVNode("h3", null, _toDisplayString(comp.view.major ? 'Major Release' : 'Release') + " " + _toDisplayString(comp.version), 1),
                              (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(notesInfoLines, (line, i) => {
                                return (_openBlock(), _createElementBlock("p", {
                                  key: 'i' + i,
                                  class: "dim"
                                }, "ℹ " + _toDisplayString(line), 1))
                              }), 128)),
                              (notesHigh.length)
                                ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [_cache[119] || (_cache[119] = _createElementVNode("b", null, "Highlights", -1)), _createElementVNode("ul", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(notesHigh, (h, i) => {
                                    return (_openBlock(), _createElementBlock("li", { key: i }, _toDisplayString(h), 1))
                                  }), 128))])], 64))
                                : _createCommentVNode("", true),
                              (comp.view.major)
                                ? (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [_cache[120] || (_cache[120] = _createElementVNode("b", null, "New USs and Features/Improvements", -1)), _createElementVNode("p", _hoisted_1150, "Jira: " + _toDisplayString(comp.view.jql), 1)], 64))
                                : _createCommentVNode("", true),
                              _cache[122] || (_cache[122] = _createElementVNode("b", null, "Bugs fixes:", -1)),
                              _createElementVNode("p", _hoisted_1151, "Jira: " + _toDisplayString(comp.view.jql_bugs), 1),
                              _createElementVNode("div", _hoisted_1152, [_createElementVNode("table", _hoisted_1153, [_cache[121] || (_cache[121] = _createElementVNode("thead", null, [_createElementVNode("tr", null, [_createElementVNode("th", null, "ArtifactId"), _createElementVNode("th", null, "Version"), _createElementVNode("th", null, "ChangeLog")])], -1)), _createElementVNode("tbody", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(comp.view.artifacts, (a) => {
                                return (_openBlock(), _createElementBlock("tr", { key: a.name }, [_createElementVNode("td", _hoisted_1154, _toDisplayString(a.name), 1), _createElementVNode("td", _hoisted_1155, _toDisplayString(comp.artifacts[a.name] || '—'), 1), _createElementVNode("td", null, _toDisplayString(a.changelog.startsWith('http') ? 'here ↗' : a.changelog), 1)]))
                              }), 128))])])])
                            ]))
                          : (_openBlock(), _createElementBlock("div", _hoisted_1156, [
                              _createElementVNode("p", null, "Release notes of ATLAS Core " + _toDisplayString(comp.version) + ". " + _toDisplayString(comp.view.issues.length) + " issues. Made by Stellwerk from Jira.", 1),
                              (notesHigh.length)
                                ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [_cache[123] || (_cache[123] = _createElementVNode("h3", null, "Highlights", -1)), _createElementVNode("ul", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(notesHigh, (h, i) => {
                                    return (_openBlock(), _createElementBlock("li", { key: i }, _toDisplayString(h), 1))
                                  }), 128))])], 64))
                                : _createCommentVNode("", true),
                              (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(notesGroups, (g) => {
                                return (_openBlock(), _createElementBlock(_Fragment, { key: g.type }, [_createElementVNode("h3", null, _toDisplayString(g.type) + " (" + _toDisplayString(g.items.length) + ")", 1), _createElementVNode("div", _hoisted_1157, [_createElementVNode("table", _hoisted_1158, [_cache[124] || (_cache[124] = _createElementVNode("thead", null, [_createElementVNode("tr", null, [
                                  _createElementVNode("th", null, "Key"),
                                  _createElementVNode("th", null, "Summary"),
                                  _createElementVNode("th", null, "Component"),
                                  _createElementVNode("th", null, "Status")
                                ])], -1)), _createElementVNode("tbody", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(g.items, (i) => {
                                  return (_openBlock(), _createElementBlock("tr", { key: i.key }, [
                                    _createElementVNode("td", null, [_createElementVNode("a", {
                                      class: "mono",
                                      href: i.url,
                                      target: "_blank",
                                      rel: "noopener noreferrer"
                                    }, _toDisplayString(i.key), 9, _hoisted_1159)]),
                                    _createElementVNode("td", null, _toDisplayString(i.summary), 1),
                                    _createElementVNode("td", null, _toDisplayString(i.components), 1),
                                    _createElementVNode("td", null, _toDisplayString(i.status), 1)
                                  ]))
                                }), 128))])])])], 64))
                              }), 128)),
                              (!comp.view.issues.length && !comp.view.error)
                                ? (_openBlock(), _createElementBlock("p", _hoisted_1160, _toDisplayString(t.notesNone), 1))
                                : _createCommentVNode("", true)
                            ]))])
                      ], 64))
                    : _createCommentVNode("", true)], 64))], 8, _hoisted_1033))
        : _createCommentVNode("", true),
      toast
        ? (_openBlock(), _createElementBlock("div", {
            key: 24,
            class: _normalizeClass(["toast", { ok: toastOk }]),
            role: "status"
          }, _toDisplayString(toast), 3))
        : _createCommentVNode("", true)
    ], 6)], 64))
  }
}
})(Vue);
  out["root"]._rc = true;
  out["HelpTip"] = (function (Vue) {
const _Vue = Vue
const { createElementVNode: _createElementVNode, createCommentVNode: _createCommentVNode } = _Vue

const _hoisted_1 = ["onClick"]
const _hoisted_2 = ["aria-expanded", "onClick"]
const _hoisted_3 = {
  key: 0,
  class: "help-pop",
  role: "note"
}

return function render(_ctx, _cache) {
  with (_ctx) {
    const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, withModifiers: _withModifiers } = _Vue

    return (_openBlock(), _createElementBlock("span", {
      class: "help-wrap",
      onClick: _withModifiers(() => {}, ["stop"])
    }, [_createElementVNode("button", {
      type: "button",
      class: "help",
      "aria-expanded": open === k ? 'true' : 'false',
      "aria-label": "About this panel",
      title: "About this panel",
      onClick: $event => ($emit('toggle', k))
    }, "?", 8, _hoisted_2), (open === k)
      ? (_openBlock(), _createElementBlock("span", _hoisted_3, _toDisplayString(text), 1))
      : _createCommentVNode("", true)], 8, _hoisted_1))
  }
}
})(Vue);
  out["HelpTip"]._rc = true;
  out["StepCard"] = (function (Vue) {
const _Vue = Vue
const { createVNode: _createVNode, createElementVNode: _createElementVNode, createCommentVNode: _createCommentVNode, createTextVNode: _createTextVNode } = _Vue

const _hoisted_1 = { class: "card" }
const _hoisted_2 = { class: "card-h" }
const _hoisted_3 = { class: "card-meta" }
const _hoisted_4 = { class: "mono dim" }
const _hoisted_5 = {
  key: 0,
  class: "pill p-gate"
}
const _hoisted_6 = {
  key: 1,
  class: "pill"
}
const _hoisted_7 = {
  key: 2,
  class: "pill p-today"
}
const _hoisted_8 = ["aria-label", "onClick"]
const _hoisted_9 = ["onClick"]
const _hoisted_10 = { class: "facts" }
const _hoisted_11 = {
  key: 1,
  class: "marked"
}
const _hoisted_12 = { key: 0 }
const _hoisted_13 = { class: "cs-row" }
const _hoisted_14 = { class: "so-who" }
const _hoisted_15 = { key: 0 }
const _hoisted_16 = {
  key: 1,
  class: "dim"
}
const _hoisted_17 = ["disabled", "title", "onClick"]
const _hoisted_18 = {
  key: 3,
  class: "cond"
}
const _hoisted_19 = {
  key: 4,
  class: "signoff"
}
const _hoisted_20 = { class: "so-role" }
const _hoisted_21 = { class: "so-who" }
const _hoisted_22 = ["title"]
const _hoisted_23 = { class: "btn-row so-btns" }
const _hoisted_24 = ["disabled", "onClick"]
const _hoisted_25 = ["disabled", "onClick"]
const _hoisted_26 = ["disabled", "onClick"]
const _hoisted_27 = ["onSubmit"]
const _hoisted_28 = ["for"]
const _hoisted_29 = ["id", "onUpdate:modelValue", "placeholder"]
const _hoisted_30 = ["for"]
const _hoisted_31 = ["id", "onUpdate:modelValue"]
const _hoisted_32 = { class: "btn-row" }
const _hoisted_33 = ["disabled"]
const _hoisted_34 = ["onClick"]
const _hoisted_35 = {
  key: 1,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_36 = { key: 5 }
const _hoisted_37 = {
  key: 0,
  class: "btn-row compose-btns"
}
const _hoisted_38 = ["onClick"]
const _hoisted_39 = ["onClick"]
const _hoisted_40 = ["onClick"]
const _hoisted_41 = ["onClick"]
const _hoisted_42 = {
  key: 1,
  class: "acts"
}
const _hoisted_43 = { class: "job" }
const _hoisted_44 = ["href"]
const _hoisted_45 = {
  key: 1,
  class: "dim"
}
const _hoisted_46 = {
  key: 2,
  class: "dim"
}
const _hoisted_47 = {
  key: 0,
  class: "cond"
}
const _hoisted_48 = {
  key: 1,
  class: "params"
}
const _hoisted_49 = { scope: "row" }
const _hoisted_50 = { class: "c" }
const _hoisted_51 = ["onClick"]
const _hoisted_52 = ["onClick"]
const _hoisted_53 = {
  key: 3,
  class: "dim"
}
const _hoisted_54 = {
  key: 4,
  class: "jrun"
}
const _hoisted_55 = {
  key: 0,
  class: "dim small jrun-last"
}
const _hoisted_56 = ["href"]
const _hoisted_57 = ["onClick"]
const _hoisted_58 = {
  key: 2,
  class: "jform"
}
const _hoisted_59 = { class: "jform-h" }
const _hoisted_60 = {
  key: 0,
  class: "dim"
}
const _hoisted_61 = {
  key: 1,
  class: "pill warn"
}
const _hoisted_62 = ["title"]
const _hoisted_63 = {
  key: 0,
  class: "dim small"
}
const _hoisted_64 = ["onClick"]
const _hoisted_65 = { class: "mono" }
const _hoisted_66 = ["onUpdate:modelValue"]
const _hoisted_67 = { class: "btn-row" }
const _hoisted_68 = ["disabled", "onClick"]
const _hoisted_69 = ["disabled", "onClick"]
const _hoisted_70 = ["disabled", "onClick"]
const _hoisted_71 = { class: "mono small" }
const _hoisted_72 = { class: "params" }
const _hoisted_73 = { scope: "row" }
const _hoisted_74 = {
  key: 0,
  class: "check-ok"
}
const _hoisted_75 = {
  key: 1,
  class: "cond small"
}
const _hoisted_76 = {
  key: 2,
  class: "problems",
  role: "alert"
}
const _hoisted_77 = {
  key: 3,
  class: "dim small",
  style: {"margin":"0"}
}
const _hoisted_78 = {
  key: 4,
  class: "cond small"
}
const _hoisted_79 = {
  key: 2,
  class: "cond small"
}
const _hoisted_80 = {
  key: 3,
  class: "marked"
}
const _hoisted_81 = ["href"]
const _hoisted_82 = { key: 6 }
const _hoisted_83 = { class: "notes" }
const _hoisted_84 = {
  key: 7,
  class: "ask"
}
const _hoisted_85 = { class: "card-f" }
const _hoisted_86 = ["onSubmit"]
const _hoisted_87 = ["for"]
const _hoisted_88 = ["id", "onUpdate:modelValue", "onKeydown"]
const _hoisted_89 = {
  key: 0,
  class: "cond small"
}
const _hoisted_90 = { class: "btn-row" }
const _hoisted_91 = ["disabled"]
const _hoisted_92 = ["onClick"]
const _hoisted_93 = {
  key: 1,
  class: "btn-row"
}
const _hoisted_94 = ["disabled", "onClick"]
const _hoisted_95 = {
  key: 2,
  class: "btn-row"
}
const _hoisted_96 = ["disabled", "onClick"]
const _hoisted_97 = ["disabled", "onClick"]

return function render(_ctx, _cache) {
  with (_ctx) {
    const { toDisplayString: _toDisplayString, normalizeClass: _normalizeClass, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, renderList: _renderList, Fragment: _Fragment, vModelText: _vModelText, withDirectives: _withDirectives, withModifiers: _withModifiers, withKeys: _withKeys } = _Vue

    const _component_help_tip = _resolveComponent("help-tip")

    return (_openBlock(), _createElementBlock("article", _hoisted_1, [
      _createElementVNode("header", _hoisted_2, [_createElementVNode("div", _hoisted_3, [
        _createElementVNode("span", { class: _normalizeClass(["pill", 'p-' + step.status]) }, _toDisplayString(t.st[step.status]), 3),
        _createElementVNode("span", _hoisted_4, _toDisplayString(release.version) + " · " + _toDisplayString(step.id), 1),
        (step.gate)
          ? (_openBlock(), _createElementBlock("span", _hoisted_5, _toDisplayString(step.gate), 1))
          : _createCommentVNode("", true),
        (step.optional)
          ? (_openBlock(), _createElementBlock("span", _hoisted_6, _toDisplayString(t.optional), 1))
          : _createCommentVNode("", true),
        (step.proposed)
          ? (_openBlock(), _createElementBlock("span", _hoisted_7, _toDisplayString(t.proposed), 1))
          : _createCommentVNode("", true)
      ]), closable
        ? (_openBlock(), _createElementBlock("button", {
            key: 0,
            ref: "closeBtn",
            class: "icon-btn",
            type: "button",
            "aria-label": t.close,
            onClick: $event => ($emit('close'))
          }, "✕", 8, _hoisted_8))
        : _createCommentVNode("", true)]),
      _createElementVNode("h2", null, _toDisplayString(title(step)), 1),
      (step.monitor)
        ? (_openBlock(), _createElementBlock("button", {
            key: 0,
            class: "btn xs mon-link",
            type: "button",
            onClick: $event => ($emit('monitor', step.monitor))
          }, _toDisplayString(t.monitorStep) + " · " + _toDisplayString(step.monitor) + " →", 9, _hoisted_9))
        : _createCommentVNode("", true),
      _createElementVNode("dl", _hoisted_10, [
        _createElementVNode("div", null, [_createElementVNode("dt", null, _toDisplayString(t.phase), 1), _createElementVNode("dd", null, _toDisplayString(phaseTitle), 1)]),
        _createElementVNode("div", null, [_createElementVNode("dt", null, _toDisplayString(t.who), 1), _createElementVNode("dd", null, _toDisplayString(step.owner), 1)]),
        _createElementVNode("div", null, [_createElementVNode("dt", null, _toDisplayString(t.when), 1), _createElementVNode("dd", null, _toDisplayString(whenText), 1)]),
        _createElementVNode("div", null, [_createElementVNode("dt", null, _toDisplayString(t.proof), 1), _createElementVNode("dd", null, _toDisplayString(step.confirm === 'manual' ? t.manual : step.confirm), 1)])
      ]),
      marked
        ? (_openBlock(), _createElementBlock("p", _hoisted_11, [_createTextVNode(_toDisplayString(t.marked) + ": " + _toDisplayString(t.st[step.status]) + ", " + _toDisplayString(markedText), 1), (step.mark_note)
            ? (_openBlock(), _createElementBlock("span", _hoisted_12, " · " + _toDisplayString(step.mark_note), 1))
            : _createCommentVNode("", true)]))
        : _createCommentVNode("", true),
      (step.cstest)
        ? (_openBlock(), _createElementBlock("section", {
            key: 2,
            class: _normalizeClass(["cstest", 'cs-' + step.cstest.status])
          }, [_createElementVNode("h3", null, [_createTextVNode(_toDisplayString(t.csTest) + " · " + _toDisplayString(step.cstest.stage), 1), _createVNode(_component_help_tip, {
            k: "cstest",
            open: help,
            onToggle: $event => ($emit('help', $event))
          }, null, 8, ["open", "onToggle"])]), _createElementVNode("div", _hoisted_13, [_createElementVNode("span", { class: _normalizeClass(["pill", csClass(step.cstest.status)]) }, _toDisplayString(t.csStatus[step.cstest.status]), 3), _createElementVNode("span", _hoisted_14, [_createTextVNode(_toDisplayString(step.cstest.detail || (csReady ? t.csNotRun : t.csTestOff)), 1), (step.cstest.at)
            ? (_openBlock(), _createElementBlock("span", _hoisted_15, " · " + _toDisplayString(at(step.cstest.at)), 1))
            : _createCommentVNode("", true), (step.cstest.recheck)
            ? (_openBlock(), _createElementBlock("span", _hoisted_16, " · " + _toDisplayString(t.csRecheck) + " " + _toDisplayString(at(step.cstest.recheck.at)) + ": " + _toDisplayString(step.cstest.recheck.detail), 1))
            : _createCommentVNode("", true)]), _createElementVNode("button", {
            class: "btn xs",
            type: "button",
            disabled: busy || !csReady || checking,
            title: csReady ? '' : t.csTestOff,
            onClick: $event => ($emit('check'))
          }, _toDisplayString(checking ? t.working : step.cstest.status === 'none' ? t.csRun : t.csAgain), 9, _hoisted_17)])], 2))
        : _createCommentVNode("", true),
      (step.only_if)
        ? (_openBlock(), _createElementBlock("p", _hoisted_18, [_createElementVNode("b", null, _toDisplayString(t.onlyIf) + ":", 1), _createTextVNode(" " + _toDisplayString(step.only_if), 1)]))
        : _createCommentVNode("", true),
      (step.signoff)
        ? (_openBlock(), _createElementBlock("section", _hoisted_19, [_createElementVNode("h3", null, [_createTextVNode(_toDisplayString(t.signoffs) + " · " + _toDisplayString(step.gate), 1), _createVNode(_component_help_tip, {
            k: "signoff",
            open: help,
            onToggle: $event => ($emit('help', $event))
          }, null, 8, ["open", "onToggle"])]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(soRoles, (x) => {
            return (_openBlock(), _createElementBlock("div", {
              key: x.role,
              class: "so-row"
            }, [
              _createElementVNode("b", _hoisted_20, _toDisplayString(x.role), 1),
              _createElementVNode("span", { class: _normalizeClass(["pill", soClass(x.role)]) }, _toDisplayString(soText(x.role)), 3),
              _createElementVNode("span", _hoisted_21, [(x.former)
                ? (_openBlock(), _createElementBlock("span", {
                    key: 0,
                    class: "tag",
                    title: t.soFormerT
                  }, _toDisplayString(t.soFormer), 9, _hoisted_22))
                : _createCommentVNode("", true), _createTextVNode(" " + _toDisplayString(soWho(x.role)), 1)]),
              _createElementVNode("span", _hoisted_23, [(!x.former)
                ? (_openBlock(), _createElementBlock("button", {
                    key: 0,
                    class: "btn xs",
                    type: "button",
                    disabled: busy || soBusy,
                    onClick: $event => (soStart(x.role, 'go'))
                  }, _toDisplayString(t.soGo), 9, _hoisted_24))
                : _createCommentVNode("", true), (!x.former)
                ? (_openBlock(), _createElementBlock("button", {
                    key: 1,
                    class: "btn xs",
                    type: "button",
                    disabled: busy || soBusy,
                    onClick: $event => (soStart(x.role, 'nogo'))
                  }, _toDisplayString(t.soNogo), 9, _hoisted_25))
                : _createCommentVNode("", true), (so(x.role))
                ? (_openBlock(), _createElementBlock("button", {
                    key: 2,
                    class: "btn xs",
                    type: "button",
                    disabled: busy || soBusy,
                    onClick: $event => (soSave(x.role, '', '', ''))
                  }, _toDisplayString(t.soClear), 9, _hoisted_26))
                : _createCommentVNode("", true)])
            ]))
          }), 128)), soForm
            ? (_openBlock(), _createElementBlock("form", {
                key: 0,
                class: "markform so-form",
                onSubmit: _withModifiers(soSubmit, ["prevent"])
              }, [
                _createElementVNode("b", null, _toDisplayString(soForm.role) + ": " + _toDisplayString(soForm.decision === 'go' ? t.soGo : t.soNogo), 1),
                _createElementVNode("label", { for: 'so-by-' + step.id }, _toDisplayString(t.soBy), 9, _hoisted_28),
                _withDirectives(_createElementVNode("input", {
                  id: 'so-by-' + step.id,
                  ref: "soBy",
                  "onUpdate:modelValue": $event => ((soBy) = $event),
                  autocomplete: "off",
                  placeholder: t.soByPh
                }, null, 8, _hoisted_29), [[_vModelText, soBy]]),
                _createElementVNode("label", { for: 'so-note-' + step.id }, _toDisplayString(soNeedNote ? t.soWhy : t.soNote), 9, _hoisted_30),
                _withDirectives(_createElementVNode("input", {
                  id: 'so-note-' + step.id,
                  "onUpdate:modelValue": $event => ((soNote) = $event),
                  autocomplete: "off"
                }, null, 8, _hoisted_31), [[_vModelText, soNote]]),
                _createElementVNode("div", _hoisted_32, [_createElementVNode("button", {
                  class: "btn pri",
                  type: "submit",
                  disabled: busy || soBusy || (soNeedNote && !soNote.trim())
                }, _toDisplayString(t.soSave), 9, _hoisted_33), _createElementVNode("button", {
                  class: "btn",
                  type: "button",
                  onClick: $event => (soForm = null)
                }, _toDisplayString(t.cancel), 9, _hoisted_34)])
              ], 40, _hoisted_27))
            : (_openBlock(), _createElementBlock("p", _hoisted_35, _toDisplayString(t.soHint), 1))]))
        : _createCommentVNode("", true),
      ((step.actions && step.actions.length) || hasTools)
        ? (_openBlock(), _createElementBlock("section", _hoisted_36, [_createElementVNode("h3", null, _toDisplayString(t.actions), 1), hasTools
            ? (_openBlock(), _createElementBlock("div", _hoisted_37, [
                (step.jira)
                  ? (_openBlock(), _createElementBlock("button", {
                      key: 0,
                      class: "btn tool-pri",
                      type: "button",
                      onClick: $event => ($emit('jira', step.jira))
                    }, _toDisplayString(t.jiraBtn[step.jira]) + " →", 9, _hoisted_38))
                  : _createCommentVNode("", true),
                (step.meeting)
                  ? (_openBlock(), _createElementBlock("button", {
                      key: 1,
                      class: "btn tool-pri",
                      type: "button",
                      onClick: $event => ($emit('meeting'))
                    }, "📅 " + _toDisplayString(t.meetingBtn), 9, _hoisted_39))
                  : _createCommentVNode("", true),
                (step.mail)
                  ? (_openBlock(), _createElementBlock("button", {
                      key: 2,
                      class: "btn tool-pri",
                      type: "button",
                      onClick: $event => ($emit('mail', step.mail))
                    }, "✉ " + _toDisplayString(t.mailBtn[step.mail]), 9, _hoisted_40))
                  : _createCommentVNode("", true),
                (step.relnotes)
                  ? (_openBlock(), _createElementBlock("button", {
                      key: 3,
                      class: "btn tool-pri",
                      type: "button",
                      onClick: $event => ($emit('notes'))
                    }, _toDisplayString(t.notesBtn) + " →", 9, _hoisted_41))
                  : _createCommentVNode("", true)
              ]))
            : _createCommentVNode("", true), (step.actions && step.actions.length)
            ? (_openBlock(), _createElementBlock("ol", _hoisted_42, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(step.actions, (a, i) => {
                return (_openBlock(), _createElementBlock("li", { key: i }, [(a.do)
                  ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [_createTextVNode(_toDisplayString(a.do), 1)], 64))
                  : (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [
                      _createElementVNode("div", _hoisted_43, [
                        _cache[1] || (_cache[1] = _createElementVNode("span", { class: "job-tag" }, "Jenkins", -1)),
                        _createElementVNode("code", null, _toDisplayString(a.job), 1),
                        (a.url)
                          ? (_openBlock(), _createElementBlock("a", {
                              key: 0,
                              class: "job-link",
                              href: a.url,
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, _toDisplayString(t.openJenkins) + " ↗", 9, _hoisted_44))
                          : _createCommentVNode("", true),
                        (a.env)
                          ? (_openBlock(), _createElementBlock("span", _hoisted_45, [_cache[0] || (_cache[0] = _createTextVNode("env: ")), _createElementVNode("code", null, _toDisplayString(a.env), 1)]))
                          : _createCommentVNode("", true),
                        (a.takes)
                          ? (_openBlock(), _createElementBlock("span", _hoisted_46, _toDisplayString(t.takes) + " " + _toDisplayString(a.takes), 1))
                          : _createCommentVNode("", true)
                      ]),
                      (a.only_if)
                        ? (_openBlock(), _createElementBlock("p", _hoisted_47, [_createElementVNode("b", null, _toDisplayString(t.onlyIf) + ":", 1), _createTextVNode(" " + _toDisplayString(a.only_if), 1)]))
                        : _createCommentVNode("", true),
                      (a.params)
                        ? (_openBlock(), _createElementBlock("table", _hoisted_48, [_createElementVNode("tbody", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(a.params, (value, name) => {
                            return (_openBlock(), _createElementBlock("tr", { key: name }, [_createElementVNode("th", _hoisted_49, _toDisplayString(name), 1), _createElementVNode("td", { class: _normalizeClass({ empty: value === '' }) }, _toDisplayString(show(value)), 3), _createElementVNode("td", _hoisted_50, [_createElementVNode("button", {
                              class: "btn xs",
                              type: "button",
                              onClick: $event => (copy(raw(value), i + name))
                            }, _toDisplayString(copied === i + name ? t.copied : t.copy), 9, _hoisted_51)])]))
                          }), 128))])]))
                        : _createCommentVNode("", true),
                      (a.params)
                        ? (_openBlock(), _createElementBlock("button", {
                            key: 2,
                            class: "btn xs",
                            type: "button",
                            onClick: $event => (copyAll(a, i))
                          }, _toDisplayString(copied === 'all' + i ? t.copied : t.copyAll), 9, _hoisted_52))
                        : _createCommentVNode("", true),
                      (a.note)
                        ? (_openBlock(), _createElementBlock("p", _hoisted_53, _toDisplayString(a.note), 1))
                        : _createCommentVNode("", true),
                      (jm(a) && jm(a) !== 'off')
                        ? (_openBlock(), _createElementBlock("div", _hoisted_54, [(a.run && !(job && job.index === i))
                            ? (_openBlock(), _createElementBlock("p", _hoisted_55, [_createTextVNode(_toDisplayString(t.lastStart) + ": #" + _toDisplayString(a.run.number || '…') + " · " + _toDisplayString(runText(a.run)) + " · " + _toDisplayString(at(a.run.at)) + " ", 1), (a.run.url)
                                ? (_openBlock(), _createElementBlock("a", {
                                    key: 0,
                                    href: a.run.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                  }, _toDisplayString(t.openJenkins) + " ↗", 9, _hoisted_56))
                                : _createCommentVNode("", true)]))
                            : _createCommentVNode("", true), (!(job && job.index === i))
                            ? (_openBlock(), _createElementBlock("button", {
                                key: 1,
                                class: "btn xs",
                                type: "button",
                                onClick: $event => (openJob(i, a))
                              }, "▶ " + _toDisplayString(t.startJob) + "…", 9, _hoisted_57))
                            : (_openBlock(), _createElementBlock("div", _hoisted_58, [
                                _createElementVNode("div", _hoisted_59, [
                                  _createElementVNode("b", null, _toDisplayString(t.startJob), 1),
                                  _createElementVNode("code", null, _toDisplayString(a.job), 1),
                                  (a.env)
                                    ? (_openBlock(), _createElementBlock("span", _hoisted_60, "env " + _toDisplayString(a.env), 1))
                                    : _createCommentVNode("", true),
                                  (jm(a) === 'dry-run')
                                    ? (_openBlock(), _createElementBlock("span", _hoisted_61, _toDisplayString(t.dryRunMode), 1))
                                    : (mode === 'dry-run')
                                      ? (_openBlock(), _createElementBlock("span", {
                                          key: 2,
                                          class: "pill ok",
                                          title: t.startListedTip
                                        }, _toDisplayString(t.startListed), 9, _hoisted_62))
                                      : _createCommentVNode("", true)
                                ]),
                                (jm(a) === 'dry-run')
                                  ? (_openBlock(), _createElementBlock("p", _hoisted_63, [_createTextVNode(_toDisplayString(t.startOff) + " ", 1), _createElementVNode("button", {
                                      class: "btn xs",
                                      type: "button",
                                      onClick: $event => ($emit('workflow'))
                                    }, _toDisplayString(t.editWorkflow), 9, _hoisted_64)]))
                                  : _createCommentVNode("", true),
                                (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(job.params, (v, k) => {
                                  return (_openBlock(), _createElementBlock("label", {
                                    key: k,
                                    class: "jp"
                                  }, [_createElementVNode("span", _hoisted_65, _toDisplayString(k), 1), _withDirectives(_createElementVNode("input", {
                                    "onUpdate:modelValue": $event => ((job.params[k]) = $event),
                                    class: _normalizeClass({ ph: isPlaceholder(job.params[k]) }),
                                    autocomplete: "off",
                                    spellcheck: "false"
                                  }, null, 10, _hoisted_66), [[_vModelText, job.params[k]]])]))
                                }), 128)),
                                _createElementVNode("div", _hoisted_67, [_createElementVNode("button", {
                                  class: "btn",
                                  type: "button",
                                  disabled: !!job.busy,
                                  onClick: dryRun
                                }, _toDisplayString(job.busy === 'plan' ? t.working : t.dryRunBtn), 9, _hoisted_68), (jm(a) === 'on')
                                  ? (_openBlock(), _createElementBlock("button", {
                                      key: 0,
                                      class: "btn pri",
                                      type: "button",
                                      disabled: !canStart,
                                      onClick: startJob
                                    }, _toDisplayString(job.busy === 'start' ? t.working : t.startInJenkins), 9, _hoisted_69))
                                  : _createCommentVNode("", true), _createElementVNode("button", {
                                  class: "btn",
                                  type: "button",
                                  disabled: job.busy === 'start',
                                  onClick: $event => (job = null)
                                }, _toDisplayString(t.close), 9, _hoisted_70)]),
                                (job.plan)
                                  ? (_openBlock(), _createElementBlock("div", {
                                      key: 1,
                                      class: _normalizeClass(["plan", { stale: jobStale }]),
                                      role: "status"
                                    }, [
                                      _createElementVNode("div", _hoisted_71, "POST " + _toDisplayString(job.plan.url || t.noJenkins), 1),
                                      _createElementVNode("table", _hoisted_72, [_createElementVNode("tbody", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(job.plan.params, (v, k) => {
                                        return (_openBlock(), _createElementBlock("tr", { key: k }, [_createElementVNode("th", _hoisted_73, _toDisplayString(k), 1), _createElementVNode("td", { class: _normalizeClass({ empty: v === '' }) }, _toDisplayString(show(v)), 3)]))
                                      }), 128))])]),
                                      (job.plan.jenkins === 'ok')
                                        ? (_openBlock(), _createElementBlock("p", _hoisted_74, "✓ " + _toDisplayString(t.jenkinsKnows), 1))
                                        : (job.plan.jenkins)
                                          ? (_openBlock(), _createElementBlock("p", _hoisted_75, "Jenkins: " + _toDisplayString(job.plan.jenkins), 1))
                                          : _createCommentVNode("", true),
                                      (job.plan.problems.length)
                                        ? (_openBlock(), _createElementBlock("div", _hoisted_76, [_createElementVNode("ul", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(job.plan.problems, (x) => {
                                            return (_openBlock(), _createElementBlock("li", { key: x }, _toDisplayString(x), 1))
                                          }), 128))])]))
                                        : _createCommentVNode("", true),
                                      (jm(a) === 'dry-run')
                                        ? (_openBlock(), _createElementBlock("p", _hoisted_77, _toDisplayString(t.dryRunNote), 1))
                                        : _createCommentVNode("", true),
                                      jobStale
                                        ? (_openBlock(), _createElementBlock("p", _hoisted_78, _toDisplayString(t.jobStale), 1))
                                        : _createCommentVNode("", true)
                                    ], 2))
                                  : _createCommentVNode("", true),
                                jobRunning
                                  ? (_openBlock(), _createElementBlock("p", _hoisted_79, _toDisplayString(fill(t.jobBusy, runText(jobRun))), 1))
                                  : _createCommentVNode("", true),
                                jobRun
                                  ? (_openBlock(), _createElementBlock("p", _hoisted_80, [_createTextVNode("#" + _toDisplayString(jobRun.number || '…') + " · " + _toDisplayString(runText(jobRun)) + " ", 1), (jobRun.url)
                                      ? (_openBlock(), _createElementBlock("a", {
                                          key: 0,
                                          href: jobRun.url,
                                          target: "_blank",
                                          rel: "noopener noreferrer"
                                        }, _toDisplayString(t.openJenkins) + " ↗", 9, _hoisted_81))
                                      : _createCommentVNode("", true)]))
                                  : _createCommentVNode("", true)
                              ]))]))
                        : _createCommentVNode("", true)
                    ], 64))]))
              }), 128))]))
            : _createCommentVNode("", true)]))
        : _createCommentVNode("", true),
      (step.notes.length)
        ? (_openBlock(), _createElementBlock("section", _hoisted_82, [_createElementVNode("h3", null, _toDisplayString(t.notes), 1), _createElementVNode("ul", _hoisted_83, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(step.notes, (n, i) => {
            return (_openBlock(), _createElementBlock("li", { key: i }, _toDisplayString(n), 1))
          }), 128))])]))
        : _createCommentVNode("", true),
      (step.ask)
        ? (_openBlock(), _createElementBlock("p", _hoisted_84, [_createElementVNode("b", null, _toDisplayString(t.ask) + ":", 1), _createTextVNode(" " + _toDisplayString(step.ask), 1)]))
        : _createCommentVNode("", true),
      _createElementVNode("footer", _hoisted_85, [form
        ? (_openBlock(), _createElementBlock("form", {
            key: 0,
            class: "markform",
            onSubmit: _withModifiers(submit, ["prevent"])
          }, [
            _createElementVNode("label", { for: 'note-' + release.version + step.id }, _toDisplayString(form === 'done' && against ? t.reasonClose : needReason ? t.reason : t.note), 9, _hoisted_87),
            _withDirectives(_createElementVNode("input", {
              id: 'note-' + release.version + step.id,
              ref: "note",
              "onUpdate:modelValue": $event => ((note) = $event),
              autocomplete: "off",
              onKeydown: _withKeys(_withModifiers($event => (form = null), ["stop"]), ["esc"])
            }, null, 40, _hoisted_88), [[_vModelText, note]]),
            against
              ? (_openBlock(), _createElementBlock("p", _hoisted_89, _toDisplayString(fill(t.gateAgainst, against)), 1))
              : _createCommentVNode("", true),
            _createElementVNode("div", _hoisted_90, [_createElementVNode("button", {
              class: "btn pri",
              type: "submit",
              disabled: busy || (needReason && !note.trim())
            }, _toDisplayString(form === 'done' ? t.markDone : t.skip), 9, _hoisted_91), _createElementVNode("button", {
              class: "btn",
              type: "button",
              onClick: $event => (form = null)
            }, _toDisplayString(t.cancel), 9, _hoisted_92)])
          ], 40, _hoisted_86))
        : marked
          ? (_openBlock(), _createElementBlock("div", _hoisted_93, [_createElementVNode("button", {
              class: "btn",
              type: "button",
              disabled: busy,
              onClick: $event => ($emit('unmark'))
            }, _toDisplayString(t.undo), 9, _hoisted_94)]))
          : (_openBlock(), _createElementBlock("div", _hoisted_95, [_createElementVNode("button", {
              class: "btn pri",
              type: "button",
              disabled: busy,
              onClick: $event => (start('done'))
            }, _toDisplayString(t.markDone), 9, _hoisted_96), _createElementVNode("button", {
              class: "btn",
              type: "button",
              disabled: busy,
              onClick: $event => (start('skipped'))
            }, _toDisplayString(t.skip), 9, _hoisted_97)]))])
    ]))
  }
}
})(Vue);
  out["StepCard"]._rc = true;
  out["CommitTimeline"] = (function (Vue) {
const _Vue = Vue
const { createElementVNode: _createElementVNode, createCommentVNode: _createCommentVNode, createTextVNode: _createTextVNode } = _Vue

const _hoisted_1 = ["aria-label", "onKeydown", "onBlur"]
const _hoisted_2 = ["onMousemove", "onMouseleave"]
const _hoisted_3 = { class: "ctl-tick ctl-top" }
const _hoisted_4 = { class: "ctl-cols" }
const _hoisted_5 = { key: 0 }
const _hoisted_6 = {
  key: 1,
  class: "ctl-tip-late"
}
const _hoisted_7 = {
  key: 2,
  class: "ctl-tip-r"
}
const _hoisted_8 = {
  class: "ctl-x",
  "aria-hidden": "true"
}

return function render(_ctx, _cache) {
  with (_ctx) {
    const { toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, normalizeClass: _normalizeClass, renderList: _renderList, Fragment: _Fragment, createTextVNode: _createTextVNode, withModifiers: _withModifiers, withKeys: _withKeys } = _Vue

    return (_openBlock(), _createElementBlock("div", {
      class: "ctl",
      tabindex: "0",
      role: "img",
      "aria-label": summary,
      onKeydown: [_withKeys(_withModifiers($event => (step(-1)), ["prevent"]), ["left"]), _withKeys(_withModifiers($event => (step(1)), ["prevent"]), ["right"]), _withKeys($event => (active = -1), ["esc"])],
      onBlur: $event => (active = -1)
    }, [_createElementVNode("div", {
      class: "ctl-plot",
      onMousemove: move,
      onMouseleave: $event => (active = -1)
    }, [
      _createElementVNode("span", _hoisted_3, _toDisplayString(top), 1),
      _cache[0] || (_cache[0] = _createElementVNode("span", { class: "ctl-tick ctl-zero" }, "0", -1)),
      (lateFrom >= 0)
        ? (_openBlock(), _createElementBlock("div", {
            key: 0,
            class: "ctl-late",
            style: _normalizeStyle({ left: pct(lateFrom) })
          }, null, 4))
        : _createCommentVNode("", true),
      (freezeAt >= 0)
        ? (_openBlock(), _createElementBlock("div", {
            key: 1,
            class: "ctl-freeze",
            style: _normalizeStyle({ left: pct(freezeAt) })
          }, [_createElementVNode("span", { class: _normalizeClass(["ctl-freeze-l", { left: freezeAt > days.length * 0.7 }]) }, _toDisplayString(fill(t.insFreeze, dm(tl.freeze))), 3)], 4))
        : _createCommentVNode("", true),
      _createElementVNode("div", _hoisted_4, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(days, (d, i) => {
        return (_openBlock(), _createElementBlock("div", {
          key: d.date,
          class: _normalizeClass(["ctl-col", { on: i === active }])
        }, [(i === peak)
          ? (_openBlock(), _createElementBlock("span", {
              key: 0,
              class: "ctl-peak",
              style: _normalizeStyle({ bottom: (d.commits / top * 100) + '%' })
            }, _toDisplayString(d.commits), 5))
          : _createCommentVNode("", true), _createElementVNode("span", {
          class: "ctl-bar",
          style: _normalizeStyle({ height: (d.commits / top * 100) + '%' })
        }, null, 4)], 2))
      }), 128))]),
      cur
        ? (_openBlock(), _createElementBlock("div", {
            key: 2,
            class: "ctl-tip",
            role: "status",
            style: _normalizeStyle({ left: 'min(' + pct(active + 0.5) + ', calc(100% - 240px))' })
          }, [
            _createElementVNode("b", null, _toDisplayString(when(cur.date)), 1),
            _createTextVNode(" · " + _toDisplayString(t.insTlCommits) + ": " + _toDisplayString(cur.commits), 1),
            (cur.merges)
              ? (_openBlock(), _createElementBlock("span", _hoisted_5, " · " + _toDisplayString(fill(t.insMerges, String(cur.merges))), 1))
              : _createCommentVNode("", true),
            (cur.late)
              ? (_openBlock(), _createElementBlock("span", _hoisted_6, " · " + _toDisplayString(t.insTlAfter), 1))
              : _createCommentVNode("", true),
            (cur.commits)
              ? (_openBlock(), _createElementBlock("span", _hoisted_7, _toDisplayString(repos(cur)), 1))
              : _createCommentVNode("", true)
          ], 4))
        : _createCommentVNode("", true)
    ], 40, _hoisted_2), _createElementVNode("div", _hoisted_8, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(labels, (l) => {
      return (_openBlock(), _createElementBlock("span", {
        key: l.i,
        style: _normalizeStyle({ left: pct(l.i + 0.5) })
      }, _toDisplayString(l.text), 5))
    }), 128))])], 40, _hoisted_1))
  }
}
})(Vue);
  out["CommitTimeline"]._rc = true;
  out["TrendChart"] = (function (Vue) {
const _Vue = Vue
const { createElementVNode: _createElementVNode, createCommentVNode: _createCommentVNode } = _Vue

const _hoisted_1 = ["aria-label"]
const _hoisted_2 = { class: "trc-h" }
const _hoisted_3 = { class: "trc-t" }
const _hoisted_4 = { key: 0 }
const _hoisted_5 = { class: "trc-v" }
const _hoisted_6 = {
  key: 0,
  class: "trc-m"
}
const _hoisted_7 = { class: "trc-plot" }
const _hoisted_8 = { class: "trc-cols" }
const _hoisted_9 = {
  key: 1,
  class: "trc-na"
}
const _hoisted_10 = {
  class: "trc-tip",
  role: "tooltip"
}
const _hoisted_11 = {
  class: "trc-x",
  "aria-hidden": "true"
}

return function render(_ctx, _cache) {
  with (_ctx) {
    const { toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, normalizeStyle: _normalizeStyle, renderList: _renderList, Fragment: _Fragment, normalizeClass: _normalizeClass } = _Vue

    return (_openBlock(), _createElementBlock("div", {
      class: "trc",
      role: "img",
      "aria-label": aria
    }, [_createElementVNode("div", _hoisted_2, [_createElementVNode("span", _hoisted_3, _toDisplayString(title), 1), cur
      ? (_openBlock(), _createElementBlock("span", _hoisted_4, [_createElementVNode("b", _hoisted_5, _toDisplayString(cur.value === null ? '—' : cur.value), 1), (median !== null)
          ? (_openBlock(), _createElementBlock("span", _hoisted_6, " · " + _toDisplayString(fill(t.insTrMedian, String(median))), 1))
          : _createCommentVNode("", true)]))
      : _createCommentVNode("", true)]), _createElementVNode("div", _hoisted_7, [(median !== null)
      ? (_openBlock(), _createElementBlock("div", {
          key: 0,
          class: "trc-med",
          style: _normalizeStyle({ bottom: (median / top * 100) + '%' })
        }, null, 4))
      : _createCommentVNode("", true), _createElementVNode("div", _hoisted_8, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(rows, (r) => {
      return (_openBlock(), _createElementBlock("div", {
        key: r.version,
        class: _normalizeClass(["trc-col", { cur: r.current }])
      }, [(r.value !== null)
        ? (_openBlock(), _createElementBlock("span", {
            key: 0,
            class: "trc-bar",
            style: _normalizeStyle({ height: (r.value / top * 100) + '%' })
          }, null, 4))
        : (_openBlock(), _createElementBlock("span", _hoisted_9, "—")), _createElementVNode("span", _hoisted_10, _toDisplayString(r.version) + " · " + _toDisplayString(r.value === null ? t.insTrNotRead : r.value), 1)], 2))
    }), 128))])]), _createElementVNode("div", _hoisted_11, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(rows, (r) => {
      return (_openBlock(), _createElementBlock("span", {
        key: r.version,
        class: _normalizeClass({ cur: r.current })
      }, _toDisplayString(r.label), 3))
    }), 128))])], 8, _hoisted_1))
  }
}
})(Vue);
  out["TrendChart"]._rc = true;
  out["LineChart"] = (function (Vue) {
const _Vue = Vue
const { createElementVNode: _createElementVNode, createCommentVNode: _createCommentVNode, createTextVNode: _createTextVNode } = _Vue

const _hoisted_1 = { class: "chart" }
const _hoisted_2 = { class: "chart-legend" }
const _hoisted_3 = ["aria-label", "onKeydown", "onBlur"]
const _hoisted_4 = ["viewBox", "aria-label"]
const _hoisted_5 = { class: "grid" }
const _hoisted_6 = ["x1", "x2", "y1", "y2"]
const _hoisted_7 = { class: "axis" }
const _hoisted_8 = ["x", "y"]
const _hoisted_9 = ["x", "y"]
const _hoisted_10 = ["x1", "x2", "y1", "y2"]
const _hoisted_11 = ["x", "y"]
const _hoisted_12 = ["d"]
const _hoisted_13 = {
  key: 0,
  class: "cross"
}
const _hoisted_14 = ["x1", "x2", "y1", "y2"]
const _hoisted_15 = ["cx", "cy"]
const _hoisted_16 = ["x", "y"]
const _hoisted_17 = ["x", "y", "width", "height", "onPointermove", "onPointerleave"]
const _hoisted_18 = { class: "dim" }
const _hoisted_19 = { class: "dim" }
const _hoisted_20 = { class: "chart-data" }
const _hoisted_21 = { class: "mtable" }

return function render(_ctx, _cache) {
  with (_ctx) {
    const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, normalizeClass: _normalizeClass, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, vShow: _vShow, withDirectives: _withDirectives, createCommentVNode: _createCommentVNode, normalizeStyle: _normalizeStyle } = _Vue

    return (_openBlock(), _createElementBlock("div", _hoisted_1, [_createElementVNode("div", _hoisted_2, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(series, (s) => {
      return (_openBlock(), _createElementBlock("span", { key: s.key }, [_createElementVNode("i", { class: _normalizeClass(s.cls) }, null, 2), _createTextVNode(_toDisplayString(s.name), 1)]))
    }), 128))]), _createElementVNode("div", {
      class: "chart-box",
      tabindex: "0",
      "aria-label": label,
      onKeydown: key,
      onBlur: $event => (hover = -1)
    }, [(_openBlock(), _createElementBlock("svg", {
      viewBox: '0 0 ' + W + ' ' + H,
      role: "img",
      "aria-label": label
    }, [
      _createElementVNode("g", _hoisted_5, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(yTicks, (g) => {
        return (_openBlock(), _createElementBlock("line", {
          key: g.v,
          x1: L,
          x2: W - R,
          y1: g.y,
          y2: g.y
        }, null, 8, _hoisted_6))
      }), 128))]),
      _createElementVNode("g", _hoisted_7, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(yTicks, (g) => {
        return (_openBlock(), _createElementBlock("text", {
          key: 'y' + g.v,
          x: L - 6,
          y: g.y + 4,
          "text-anchor": "end"
        }, _toDisplayString(fmtMs(g.v)), 9, _hoisted_8))
      }), 128)), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(xTicks, (g) => {
        return (_openBlock(), _createElementBlock("text", {
          key: g.t,
          x: g.x,
          y: H - 6,
          "text-anchor": "middle"
        }, _toDisplayString(g.label), 9, _hoisted_9))
      }), 128))]),
      (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(marks, (m) => {
        return (_openBlock(), _createElementBlock("g", {
          key: m.x,
          class: "deploy"
        }, [_createElementVNode("line", {
          x1: m.x,
          x2: m.x,
          y1: T,
          y2: H - B
        }, null, 8, _hoisted_10), _createElementVNode("text", {
          x: m.x + 4,
          y: T + 10
        }, _toDisplayString(t.deployMark) + " " + _toDisplayString(m.label), 9, _hoisted_11)]))
      }), 128)),
      (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(paths, (p) => {
        return (_openBlock(), _createElementBlock("path", {
          key: p.key,
          d: p.d,
          class: _normalizeClass(["line", p.cls])
        }, null, 10, _hoisted_12))
      }), 128)),
      cur
        ? (_openBlock(), _createElementBlock("g", _hoisted_13, [_createElementVNode("line", {
            x1: x(cur.t),
            x2: x(cur.t),
            y1: T,
            y2: H - B
          }, null, 8, _hoisted_14), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(paths, (p) => {
            return _withDirectives((_openBlock(), _createElementBlock("circle", {
              key: p.key,
              class: _normalizeClass(p.cls),
              cx: x(cur.t),
              cy: y(cur[p.key] || 0),
              r: "4"
            }, null, 10, _hoisted_15)), [[_vShow, cur[p.key] !== null && cur[p.key] !== undefined]])
          }), 128))]))
        : _createCommentVNode("", true),
      (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(ends, (e) => {
        return (_openBlock(), _createElementBlock("text", {
          key: e.cls,
          class: _normalizeClass(["end", e.cls]),
          x: W - R + 6,
          y: e.y + 4
        }, _toDisplayString(e.text), 11, _hoisted_16))
      }), 128)),
      _createElementVNode("rect", {
        class: "hit",
        x: L,
        y: T,
        width: W - L - R,
        height: H - T - B,
        onPointermove: move,
        onPointerleave: $event => (hover = -1)
      }, null, 40, _hoisted_17)
    ], 8, _hoisted_4)), cur
      ? (_openBlock(), _createElementBlock("div", {
          key: 0,
          class: "chart-tip",
          style: _normalizeStyle({ left: tipLeft }),
          role: "status"
        }, [_createElementVNode("div", _hoisted_18, _toDisplayString(hhmm(cur.t)), 1), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(series, (s) => {
          return (_openBlock(), _createElementBlock("div", { key: s.key }, [
            _createElementVNode("i", { class: _normalizeClass(s.cls) }, null, 2),
            _createElementVNode("b", null, _toDisplayString(fmtMs(cur[s.key])), 1),
            _cache[0] || (_cache[0] = _createTextVNode()),
            _createElementVNode("span", _hoisted_19, _toDisplayString(s.name), 1)
          ]))
        }), 128))], 4))
      : _createCommentVNode("", true)], 40, _hoisted_3), _createElementVNode("details", _hoisted_20, [_createElementVNode("summary", null, _toDisplayString(t.chartData), 1), _createElementVNode("table", _hoisted_21, [_createElementVNode("thead", null, [_createElementVNode("tr", null, [_createElementVNode("th", null, _toDisplayString(t.time), 1), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(series, (s) => {
      return (_openBlock(), _createElementBlock("th", { key: s.key }, _toDisplayString(s.name), 1))
    }), 128))])]), _createElementVNode("tbody", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(points, (p) => {
      return (_openBlock(), _createElementBlock("tr", { key: p.t }, [_createElementVNode("td", null, _toDisplayString(hhmm(p.t)), 1), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(series, (s) => {
        return (_openBlock(), _createElementBlock("td", { key: s.key }, _toDisplayString(fmtMs(p[s.key])), 1))
      }), 128))]))
    }), 128))])])])]))
  }
}
})(Vue);
  out["LineChart"]._rc = true;
  out["FilesPreview"] = (function (Vue) {
const _Vue = Vue
const { createElementVNode: _createElementVNode, createCommentVNode: _createCommentVNode } = _Vue

const _hoisted_1 = { class: "multi" }
const _hoisted_2 = {
  key: 0,
  class: "dim small"
}
const _hoisted_3 = {
  key: 0,
  class: "perm-warn",
  role: "alert"
}
const _hoisted_4 = {
  key: 1,
  class: "problems",
  role: "alert"
}
const _hoisted_5 = {
  key: 2,
  class: "state-warn",
  role: "status"
}
const _hoisted_6 = {
  key: 3,
  class: "check-ok"
}
const _hoisted_7 = ["open"]
const _hoisted_8 = { class: "mono" }
const _hoisted_9 = { class: "n-add" }
const _hoisted_10 = { class: "n-del" }
const _hoisted_11 = { class: "diff" }
const _hoisted_12 = {
  key: 2,
  class: "cond small"
}
const _hoisted_13 = { class: "ed-foot" }
const _hoisted_14 = ["disabled", "onClick"]
const _hoisted_15 = ["disabled", "onClick"]

return function render(_ctx, _cache) {
  with (_ctx) {
    const { toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, normalizeClass: _normalizeClass } = _Vue

    return (_openBlock(), _createElementBlock("div", _hoisted_1, [(!preview.count)
      ? (_openBlock(), _createElementBlock("p", _hoisted_2, _toDisplayString(t.multiNone), 1))
      : (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [
          (perms.length)
            ? (_openBlock(), _createElementBlock("div", _hoisted_3, [_createElementVNode("b", null, _toDisplayString(t.permsH), 1), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(perms, (p) => {
                return (_openBlock(), _createElementBlock("code", { key: p }, _toDisplayString(p), 1))
              }), 128))]))
            : _createCommentVNode("", true),
          (preview.problems.length)
            ? (_openBlock(), _createElementBlock("div", _hoisted_4, [_createElementVNode("b", null, _toDisplayString(t.problemsH), 1), _createElementVNode("ul", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(preview.problems, (p) => {
                return (_openBlock(), _createElementBlock("li", { key: p }, _toDisplayString(p), 1))
              }), 128))])]))
            : _createCommentVNode("", true),
          ((preview.warnings || []).length)
            ? (_openBlock(), _createElementBlock("div", _hoisted_5, [_createElementVNode("b", null, _toDisplayString(t.stateWarnH), 1), _createElementVNode("ul", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(preview.warnings, (p) => {
                return (_openBlock(), _createElementBlock("li", { key: p }, _toDisplayString(p), 1))
              }), 128))])]))
            : (!perms.length)
              ? (_openBlock(), _createElementBlock("p", _hoisted_6, "✓ " + _toDisplayString(t.checkOk), 1))
              : _createCommentVNode("", true),
          (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(preview.files, (f) => {
            return (_openBlock(), _createElementBlock("details", {
              key: f.key,
              class: "mf",
              open: preview.files.length <= 3
            }, [_createElementVNode("summary", null, [_createElementVNode("span", _hoisted_8, _toDisplayString(f.label), 1), _createElementVNode("span", _hoisted_9, "+" + _toDisplayString(f.added), 1), _createElementVNode("span", _hoisted_10, "−" + _toDisplayString(f.removed), 1)]), _createElementVNode("pre", _hoisted_11, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(f.diff, (l, i) => {
              return (_openBlock(), _createElementBlock("span", {
                key: i,
                class: _normalizeClass(cls(l.op))
              }, _toDisplayString(l.op === '@' ? l.text : l.op + ' ' + l.text), 3))
            }), 128))])], 8, _hoisted_7))
          }), 128))
        ], 64)), blocked
      ? (_openBlock(), _createElementBlock("p", _hoisted_12, _toDisplayString(blocked), 1))
      : _createCommentVNode("", true), _createElementVNode("div", _hoisted_13, [(preview.count)
      ? (_openBlock(), _createElementBlock("button", {
          key: 0,
          class: "btn pri",
          type: "button",
          disabled: busy || !!preview.problems.length || !!blocked,
          onClick: $event => ($emit('save'))
        }, _toDisplayString(fill(t.saveN, preview.count)), 9, _hoisted_14))
      : _createCommentVNode("", true), _createElementVNode("button", {
      class: "btn",
      type: "button",
      disabled: busy,
      onClick: $event => ($emit('cancel'))
    }, _toDisplayString(t.cancel), 9, _hoisted_15)])]))
  }
}
})(Vue);
  out["FilesPreview"]._rc = true;
  out["CicdView"] = (function (Vue) {
const _Vue = Vue
const { createElementVNode: _createElementVNode, createCommentVNode: _createCommentVNode, createTextVNode: _createTextVNode } = _Vue

const _hoisted_1 = { class: "ci" }
const _hoisted_2 = { class: "ci-bar" }
const _hoisted_3 = ["aria-label"]
const _hoisted_4 = ["aria-pressed", "onClick"]
const _hoisted_5 = {
  key: 1,
  class: "ci-freeze"
}
const _hoisted_6 = { class: "ci-read" }
const _hoisted_7 = { key: 0 }
const _hoisted_8 = { key: 1 }
const _hoisted_9 = ["disabled", "onClick"]
const _hoisted_10 = {
  key: 0,
  class: "ci-err"
}
const _hoisted_11 = {
  key: 1,
  class: "w"
}
const _hoisted_12 = { class: "dim" }
const _hoisted_13 = {
  key: 2,
  class: "boot"
}
const _hoisted_14 = {
  key: 3,
  class: "dim"
}
const _hoisted_15 = { class: "w" }
const _hoisted_16 = { class: "wh" }
const _hoisted_17 = { class: "ci-sum" }
const _hoisted_18 = { class: "ci-sub" }
const _hoisted_19 = { class: "ci-pipe" }
const _hoisted_20 = { class: "ci-phase-h" }
const _hoisted_21 = { class: "ci-nh" }
const _hoisted_22 = ["onClick"]
const _hoisted_23 = { class: "ci-jobs" }
const _hoisted_24 = ["href"]
const _hoisted_25 = { class: "ci-meta" }
const _hoisted_26 = {
  key: 0,
  class: "ci-job"
}
const _hoisted_27 = { class: "mono" }
const _hoisted_28 = { class: "ci-meta" }
const _hoisted_29 = {
  key: 0,
  class: "ci-flag"
}
const _hoisted_30 = { class: "ci-two" }
const _hoisted_31 = { class: "w" }
const _hoisted_32 = { class: "wh" }
const _hoisted_33 = { class: "dim small" }
const _hoisted_34 = {
  key: 0,
  class: "dim"
}
const _hoisted_35 = { class: "ci-finds" }
const _hoisted_36 = {
  class: "ic",
  "aria-hidden": "true"
}
const _hoisted_37 = { class: "btn-row" }
const _hoisted_38 = ["onClick"]
const _hoisted_39 = ["disabled", "onClick"]
const _hoisted_40 = ["onClick"]
const _hoisted_41 = ["href"]
const _hoisted_42 = {
  key: 1,
  class: "ci-agree"
}
const _hoisted_43 = { class: "w" }
const _hoisted_44 = { class: "wh" }
const _hoisted_45 = { class: "dim small" }
const _hoisted_46 = { class: "ci-run" }
const _hoisted_47 = { class: "ci-run-l" }
const _hoisted_48 = ["href"]
const _hoisted_49 = { class: "dim" }
const _hoisted_50 = { class: "ci-prog" }
const _hoisted_51 = { class: "dim small" }
const _hoisted_52 = { class: "ci-run-l" }
const _hoisted_53 = { class: "mono" }
const _hoisted_54 = { class: "dim" }
const _hoisted_55 = { class: "dim small" }
const _hoisted_56 = {
  key: 0,
  class: "dim small"
}
const _hoisted_57 = { class: "dim small" }
const _hoisted_58 = { class: "w" }
const _hoisted_59 = { class: "wh" }
const _hoisted_60 = { class: "dim small" }
const _hoisted_61 = { class: "ci-scroll" }
const _hoisted_62 = { class: "ci-tbl" }
const _hoisted_63 = ["title"]
const _hoisted_64 = { class: "dim" }
const _hoisted_65 = ["href"]
const _hoisted_66 = { class: "ci-ten" }
const _hoisted_67 = ["title"]

return function render(_ctx, _cache) {
  with (_ctx) {
    const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createCommentVNode: _createCommentVNode, normalizeClass: _normalizeClass, createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, normalizeStyle: _normalizeStyle } = _Vue

    return (_openBlock(), _createElementBlock("div", _hoisted_1, [_createElementVNode("div", _hoisted_2, [(releases.length > 1)
      ? (_openBlock(), _createElementBlock("div", {
          key: 0,
          class: "seg",
          role: "group",
          "aria-label": t.ci.release
        }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(releases, (r) => {
          return (_openBlock(), _createElementBlock("button", {
            key: r.version,
            type: "button",
            "aria-pressed": cur && cur.version === r.version ? 'true' : 'false',
            onClick: $event => (pick = r.version)
          }, _toDisplayString(r.version), 9, _hoisted_4))
        }), 128))], 8, _hoisted_3))
      : _createCommentVNode("", true), (d && d.freeze)
      ? (_openBlock(), _createElementBlock("span", _hoisted_5, [_createElementVNode("i", { class: _normalizeClass(["wl", { y: d.freeze.frozen }]) }, null, 2), _createTextVNode(_toDisplayString(fmt(d.freeze.frozen ? t.ci.freezeOn : t.ci.freezeOff, when(d.freeze.since))) + " · CodeFreezer #" + _toDisplayString(d.freeze.number), 1)]))
      : _createCommentVNode("", true), _createElementVNode("span", _hoisted_6, [(view && view.pending)
      ? (_openBlock(), _createElementBlock("span", _hoisted_7, _toDisplayString(t.ci.reading), 1))
      : (d && d.read_at)
        ? (_openBlock(), _createElementBlock("span", _hoisted_8, _toDisplayString(fmt(t.ci.read, d.read_at.slice(11, 16))), 1))
        : _createCommentVNode("", true), _createElementVNode("button", {
      class: "btn xs",
      type: "button",
      disabled: !!(view && view.pending),
      onClick: $event => (load(true))
    }, _toDisplayString(t.ci.refresh), 9, _hoisted_9)])]), problem
      ? (_openBlock(), _createElementBlock("p", _hoisted_10, _toDisplayString(fmt(t.ci.error, problem)), 1))
      : _createCommentVNode("", true), (d && !d.configured)
      ? (_openBlock(), _createElementBlock("section", _hoisted_11, [_createElementVNode("p", _hoisted_12, _toDisplayString(t.ci.noJenkins), 1)]))
      : (!d)
        ? (_openBlock(), _createElementBlock("p", _hoisted_13, _toDisplayString(t.ci.reading), 1))
        : (!cur)
          ? (_openBlock(), _createElementBlock("p", _hoisted_14, _toDisplayString(t.ci.noRelease), 1))
          : (_openBlock(), _createElementBlock(_Fragment, { key: 4 }, [_createElementVNode("section", _hoisted_15, [_createElementVNode("div", _hoisted_16, [_createElementVNode("h2", null, _toDisplayString(fmt(t.ci.title, cur.version)), 1), _createElementVNode("div", _hoisted_17, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(counts, (c) => {
              return (_openBlock(), _createElementBlock("span", {
                key: c.kind,
                class: _normalizeClass(["pill", 'ci-k-' + c.kind])
              }, _toDisplayString(c.n) + " " + _toDisplayString(t.ci.kinds[c.kind]), 3))
            }), 128))])]), _createElementVNode("p", _hoisted_18, _toDisplayString(t.ci.sub), 1), _createElementVNode("div", _hoisted_19, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(cur.phases, (p) => {
              return (_openBlock(), _createElementBlock("div", {
                key: p.id,
                class: "ci-phase"
              }, [_createElementVNode("div", _hoisted_20, [_createTextVNode(_toDisplayString(lang === "ru" ? p.ru : p.en) + " ", 1), _createElementVNode("span", null, _toDisplayString(span(p)), 1)]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(p.steps.map((id) => byId[id]), (s) => {
                return (_openBlock(), _createElementBlock("div", {
                  key: s.id,
                  class: _normalizeClass(["ci-node", 'ci-' + s.kind])
                }, [_createElementVNode("div", _hoisted_21, [_createElementVNode("button", {
                  type: "button",
                  class: "ci-t",
                  onClick: $event => (openStep(s))
                }, _toDisplayString(title(s)), 9, _hoisted_22), _createElementVNode("span", { class: _normalizeClass(["ci-mark", markClass(s)]) }, _toDisplayString(markText(s)), 3)]), _createElementVNode("div", _hoisted_23, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(s.actions, (a, i) => {
                  return (_openBlock(), _createElementBlock(_Fragment, { key: i }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(a.builds, (b) => {
                    return (_openBlock(), _createElementBlock("div", {
                      key: b.number,
                      class: "ci-job"
                    }, [_createElementVNode("i", { class: _normalizeClass(["ci-s", dot(b.result)]) }, null, 2), _createElementVNode("a", {
                      class: "mono",
                      href: b.url,
                      target: "_blank",
                      rel: "noopener"
                    }, _toDisplayString(leaf(a.job)) + " #" + _toDisplayString(b.number), 9, _hoisted_24), _createElementVNode("span", _hoisted_25, _toDisplayString(meta(b)), 1)]))
                  }), 128)), (!a.builds.length)
                    ? (_openBlock(), _createElementBlock("div", _hoisted_26, [_cache[0] || (_cache[0] = _createElementVNode("i", { class: "ci-s n" }, null, -1)), _createElementVNode("span", _hoisted_27, _toDisplayString(leaf(a.job)), 1), _createElementVNode("span", _hoisted_28, _toDisplayString(a.only_if ? fmt(t.ci.onlyIf, a.only_if) : t.ci.notRun), 1)]))
                    : _createCommentVNode("", true), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(a.differ, (x) => {
                    return (_openBlock(), _createElementBlock("span", {
                      key: x.name,
                      class: "ci-diff"
                    }, _toDisplayString(diffText(x)), 1))
                  }), 128))], 64))
                }), 128))]), (t.ci.flags[s.kind])
                  ? (_openBlock(), _createElementBlock("span", _hoisted_29, _toDisplayString(t.ci.flags[s.kind]), 1))
                  : _createCommentVNode("", true)], 2))
              }), 128))]))
            }), 128))])]), _createElementVNode("div", _hoisted_30, [_createElementVNode("section", _hoisted_31, [
              _createElementVNode("div", _hoisted_32, [_createElementVNode("h2", null, _toDisplayString(t.ci.checkH), 1), _createElementVNode("span", _hoisted_33, _toDisplayString(finds.length ? fmt(t.ci.toLook, finds.length) : ""), 1)]),
              (!finds.length)
                ? (_openBlock(), _createElementBlock("p", _hoisted_34, _toDisplayString(t.ci.nothing), 1))
                : _createCommentVNode("", true),
              _createElementVNode("div", _hoisted_35, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(finds, (s) => {
                return (_openBlock(), _createElementBlock("div", {
                  key: s.id,
                  class: _normalizeClass(["ci-find", 'ci-' + s.kind])
                }, [_createElementVNode("span", _hoisted_36, _toDisplayString(icon(s.kind)), 1), _createElementVNode("div", null, [_createElementVNode("b", null, _toDisplayString(title(s)), 1), _createTextVNode(" · " + _toDisplayString(markText(s)) + " ", 1), _createElementVNode("p", null, [_createTextVNode(_toDisplayString(t.ci.flags[s.kind]), 1), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(s.actions, (a, i) => {
                  return (_openBlock(), _createElementBlock(_Fragment, { key: i }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(a.differ, (x) => {
                    return (_openBlock(), _createElementBlock("span", { key: x.name }, " · " + _toDisplayString(diffText(x)), 1))
                  }), 128))], 64))
                }), 128))])]), _createElementVNode("div", _hoisted_37, [
                  why
                    ? (_openBlock(), _createElementBlock("button", {
                        key: 0,
                        class: "btn xs",
                        type: "button",
                        onClick: $event => ($emit('why', { kind: 'cicd', version: cur.version, step: s.id }))
                      }, [_cache[1] || (_cache[1] = _createElementVNode("span", { "aria-hidden": "true" }, "✦", -1)), _createTextVNode(" " + _toDisplayString(t.cs.why), 1)], 8, _hoisted_38))
                    : _createCommentVNode("", true),
                  (s.kind === 'unmarked')
                    ? (_openBlock(), _createElementBlock("button", {
                        key: 1,
                        class: "btn xs pri",
                        type: "button",
                        disabled: busy,
                        onClick: $event => (markDone(s))
                      }, _toDisplayString(t.ci.markDone), 9, _hoisted_39))
                    : _createCommentVNode("", true),
                  _createElementVNode("button", {
                    class: "btn xs",
                    type: "button",
                    onClick: $event => (openStep(s))
                  }, _toDisplayString(t.ci.openStep), 9, _hoisted_40),
                  (lastBuild(s))
                    ? (_openBlock(), _createElementBlock("a", {
                        key: 2,
                        class: "btn xs",
                        href: lastBuild(s).url,
                        target: "_blank",
                        rel: "noopener"
                      }, _toDisplayString(fmt(t.ci.build, lastBuild(s).number)), 9, _hoisted_41))
                    : _createCommentVNode("", true)
                ])], 2))
              }), 128))]),
              (agree.length)
                ? (_openBlock(), _createElementBlock("details", _hoisted_42, [_createElementVNode("summary", null, _toDisplayString(fmt(t.ci.agreeN, agree.length)), 1), _createElementVNode("ul", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(agree, (s) => {
                    return (_openBlock(), _createElementBlock("li", { key: s.id }, _toDisplayString(title(s)), 1))
                  }), 128))])]))
                : _createCommentVNode("", true)
            ]), _createElementVNode("section", _hoisted_43, [_createElementVNode("div", _hoisted_44, [_createElementVNode("h2", null, _toDisplayString(t.ci.runH), 1), _createElementVNode("span", _hoisted_45, _toDisplayString(t.ci.runSub), 1)]), _createElementVNode("div", _hoisted_46, [
              (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(d.running, (b) => {
                return (_openBlock(), _createElementBlock("div", {
                  key: b.job + b.number,
                  class: "ci-run-i"
                }, [_createElementVNode("div", _hoisted_47, [_createElementVNode("a", {
                  class: "mono",
                  href: b.url,
                  target: "_blank",
                  rel: "noopener"
                }, _toDisplayString(leaf(b.job)) + " #" + _toDisplayString(b.number), 9, _hoisted_48), _createElementVNode("span", _hoisted_49, _toDisplayString(fmt(t.ci.ofMin, dur(elapsed(b)), dur(b.estimate))), 1)]), _createElementVNode("div", _hoisted_50, [_createElementVNode("i", { style: _normalizeStyle({ width: share(b) + '%' }) }, null, 4)]), _createElementVNode("span", _hoisted_51, _toDisplayString(meta(b)), 1)]))
              }), 128)),
              (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(d.queue, (q, i) => {
                return (_openBlock(), _createElementBlock("div", {
                  key: 'q' + i,
                  class: "ci-run-i"
                }, [_createElementVNode("div", _hoisted_52, [_createElementVNode("span", _hoisted_53, _toDisplayString(leaf(q.job)), 1), _createElementVNode("span", _hoisted_54, _toDisplayString(fmt(t.ci.queued, when(q.since))), 1)]), _cache[2] || (_cache[2] = _createElementVNode("div", { class: "ci-prog q" }, [_createElementVNode("i")], -1)), _createElementVNode("span", _hoisted_55, _toDisplayString(q.why), 1)]))
              }), 128)),
              (!d.running.length && !d.queue.length)
                ? (_openBlock(), _createElementBlock("p", _hoisted_56, _toDisplayString(t.ci.idleRun), 1))
                : _createCommentVNode("", true),
              _createElementVNode("p", _hoisted_57, _toDisplayString(t.ci.followNote), 1)
            ])])]), _createElementVNode("section", _hoisted_58, [_createElementVNode("div", _hoisted_59, [_createElementVNode("h2", null, _toDisplayString(t.ci.jobsH), 1), _createElementVNode("span", _hoisted_60, _toDisplayString(t.ci.jobsSub), 1)]), _createElementVNode("div", _hoisted_61, [_createElementVNode("table", _hoisted_62, [_createElementVNode("thead", null, [_createElementVNode("tr", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(t.ci.cols, (c) => {
              return (_openBlock(), _createElementBlock("th", { key: c }, _toDisplayString(c), 1))
            }), 128))])]), _createElementVNode("tbody", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(d.jobs, (j) => {
              return (_openBlock(), _createElementBlock("tr", {
                key: j.job,
                class: _normalizeClass({ hot: j.fails, warn: !j.fails && j.slow })
              }, [
                _createElementVNode("td", {
                  class: "mono",
                  title: j.job
                }, _toDisplayString(leaf(j.job)), 9, _hoisted_63),
                _createElementVNode("td", _hoisted_64, _toDisplayString(j.steps.join(", ")), 1),
                _createElementVNode("td", null, [(j.last)
                  ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [
                      _createElementVNode("i", { class: _normalizeClass(["ci-s", dot(j.last.result)]) }, null, 2),
                      _cache[3] || (_cache[3] = _createTextVNode()),
                      _createElementVNode("a", {
                        href: j.last.url,
                        target: "_blank",
                        rel: "noopener"
                      }, "#" + _toDisplayString(j.last.number), 9, _hoisted_65),
                      _createTextVNode(" · " + _toDisplayString(when(j.last.at)), 1)
                    ], 64))
                  : _createCommentVNode("", true)]),
                _createElementVNode("td", null, [_createElementVNode("span", _hoisted_66, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(j.ten || [], (r, i) => {
                  return (_openBlock(), _createElementBlock("i", {
                    key: i,
                    class: _normalizeClass(dot(r)),
                    title: r
                  }, null, 10, _hoisted_67))
                }), 128))])]),
                _createElementVNode("td", null, _toDisplayString(j.read ? dur(j.median) + " / " + dur(j.last_seconds) : ""), 1),
                _createElementVNode("td", null, _toDisplayString(note(j)), 1)
              ], 2))
            }), 128))])])])])], 64))]))
  }
}
})(Vue);
  out["CicdView"]._rc = true;
  out["RegressionView"] = (function (Vue) {
const _Vue = Vue
const { createElementVNode: _createElementVNode, createCommentVNode: _createCommentVNode, createTextVNode: _createTextVNode } = _Vue

const _hoisted_1 = { class: "rg" }
const _hoisted_2 = { class: "rg-bar" }
const _hoisted_3 = { key: 0 }
const _hoisted_4 = { class: "rg-read" }
const _hoisted_5 = { key: 0 }
const _hoisted_6 = { key: 1 }
const _hoisted_7 = ["disabled", "onClick"]
const _hoisted_8 = {
  key: 0,
  class: "ci-err"
}
const _hoisted_9 = {
  key: 1,
  class: "w"
}
const _hoisted_10 = { class: "dim" }
const _hoisted_11 = {
  key: 2,
  class: "boot"
}
const _hoisted_12 = { class: "w" }
const _hoisted_13 = { class: "wh" }
const _hoisted_14 = { class: "dim small" }
const _hoisted_15 = { class: "ci-sub" }
const _hoisted_16 = { class: "rg-matrix" }
const _hoisted_17 = { class: "rg-team" }
const _hoisted_18 = ["onClick"]
const _hoisted_19 = { class: "rg-kind" }
const _hoisted_20 = { class: "rg-pct" }
const _hoisted_21 = { class: "rg-launch" }
const _hoisted_22 = { class: "mono" }
const _hoisted_23 = {
  class: "rg-spark",
  "aria-hidden": "true"
}
const _hoisted_24 = { class: "rg-launch" }
const _hoisted_25 = { class: "rg-chips" }
const _hoisted_26 = {
  key: 0,
  class: "rg-chip ok"
}
const _hoisted_27 = {
  key: 1,
  class: "rg-chip product_bug"
}
const _hoisted_28 = {
  key: 0,
  class: "rg-age"
}
const _hoisted_29 = {
  key: 1,
  class: "rg-none"
}
const _hoisted_30 = {
  key: 2,
  class: "rg-none"
}
const _hoisted_31 = {
  key: 0,
  class: "w"
}
const _hoisted_32 = { class: "wh" }
const _hoisted_33 = { class: "dim small" }
const _hoisted_34 = { class: "rg-smoke-now" }
const _hoisted_35 = ["aria-label"]
const _hoisted_36 = ["href", "title"]
const _hoisted_37 = { class: "rg-legend" }
const _hoisted_38 = { class: "ci-two" }
const _hoisted_39 = { class: "w" }
const _hoisted_40 = { class: "wh" }
const _hoisted_41 = { class: "dim small" }
const _hoisted_42 = {
  key: 0,
  class: "dim"
}
const _hoisted_43 = { class: "ci-finds" }
const _hoisted_44 = {
  class: "ic",
  "aria-hidden": "true"
}
const _hoisted_45 = { class: "btn-row" }
const _hoisted_46 = ["onClick"]
const _hoisted_47 = ["onClick"]
const _hoisted_48 = { class: "w" }
const _hoisted_49 = { class: "wh" }
const _hoisted_50 = {
  key: 0,
  class: "dim"
}
const _hoisted_51 = { class: "rg-steps" }
const _hoisted_52 = ["onClick"]
const _hoisted_53 = {
  key: 0,
  class: "btn-row"
}
const _hoisted_54 = ["disabled", "onClick"]
const _hoisted_55 = {
  key: 1,
  class: "w"
}
const _hoisted_56 = { class: "wh" }
const _hoisted_57 = { class: "btn-row" }
const _hoisted_58 = ["href"]
const _hoisted_59 = ["onClick"]
const _hoisted_60 = {
  key: 0,
  class: "dim"
}
const _hoisted_61 = {
  key: 1,
  class: "ci-err"
}
const _hoisted_62 = {
  key: 2,
  class: "dim"
}
const _hoisted_63 = {
  key: 3,
  class: "ci-scroll"
}
const _hoisted_64 = { class: "ci-tbl" }
const _hoisted_65 = { class: "dim" }
const _hoisted_66 = ["href"]
const _hoisted_67 = { class: "dim" }

return function render(_ctx, _cache) {
  with (_ctx) {
    const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, normalizeClass: _normalizeClass, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, createCommentVNode: _createCommentVNode, normalizeStyle: _normalizeStyle } = _Vue

    return (_openBlock(), _createElementBlock("div", _hoisted_1, [_createElementVNode("div", _hoisted_2, [(d && d.configured)
      ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(kinds, (k) => {
          return (_openBlock(), _createElementBlock("span", { key: k }, [_createElementVNode("i", { class: _normalizeClass(["wl", { y: colClass(d.columns[k]) === 'warn', r: colClass(d.columns[k]) === 'hot' }]) }, null, 2), _createElementVNode("b", null, _toDisplayString(d.columns[k].title), 1), _createTextVNode(" " + _toDisplayString(d.columns[k].version ? "→ " + d.columns[k].version : t.rg.noRelease), 1)]))
        }), 128)), (d.smoke)
          ? (_openBlock(), _createElementBlock("span", _hoisted_3, [_createElementVNode("i", { class: _normalizeClass(["wl", { r: d.smoke.now_ok === false }]) }, null, 2), _createElementVNode("b", null, _toDisplayString(t.rg.smoke), 1), _createTextVNode(" " + _toDisplayString(d.smoke.now_ok === false ? t.rg.red : d.smoke.count ? t.rg.green : t.rg.noRunToday), 1)]))
          : _createCommentVNode("", true)], 64))
      : _createCommentVNode("", true), _createElementVNode("span", _hoisted_4, [(view && view.pending)
      ? (_openBlock(), _createElementBlock("span", _hoisted_5, _toDisplayString(t.rg.reading), 1))
      : (d && d.read_at)
        ? (_openBlock(), _createElementBlock("span", _hoisted_6, _toDisplayString(fmt(t.rg.read, d.read_at.slice(11, 16))), 1))
        : _createCommentVNode("", true), _createElementVNode("button", {
      class: "btn xs",
      type: "button",
      disabled: !!(view && view.pending),
      onClick: $event => (load(true))
    }, _toDisplayString(t.ci.refresh), 9, _hoisted_7)])]), problem
      ? (_openBlock(), _createElementBlock("p", _hoisted_8, _toDisplayString(fmt(t.rg.error, problem)), 1))
      : _createCommentVNode("", true), (d && !d.configured)
      ? (_openBlock(), _createElementBlock("section", _hoisted_9, [_createElementVNode("p", _hoisted_10, _toDisplayString(t.rg.notConfigured), 1)]))
      : (!d)
        ? (_openBlock(), _createElementBlock("p", _hoisted_11, _toDisplayString(t.rg.reading), 1))
        : (_openBlock(), _createElementBlock(_Fragment, { key: 3 }, [
            _createElementVNode("section", _hoisted_12, [_createElementVNode("div", _hoisted_13, [_createElementVNode("h2", null, _toDisplayString(t.rg.byTeam), 1), _createElementVNode("span", _hoisted_14, _toDisplayString(t.rg.byTeamSub), 1)]), _createElementVNode("p", _hoisted_15, _toDisplayString(fmt(t.rg.byTeamText, d.stale_hours)), 1), _createElementVNode("div", _hoisted_16, [_cache[2] || (_cache[2] = _createElementVNode("span", { class: "rg-corner" }, null, -1)), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(kinds, (k) => {
              return (_openBlock(), _createElementBlock("div", {
                key: k,
                class: "rg-colh"
              }, [_createTextVNode(_toDisplayString(d.columns[k].title) + " ", 1), _createElementVNode("span", null, [
                _createTextVNode(_toDisplayString(d.columns[k].version), 1),
                (d.columns[k].attribute)
                  ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [_createTextVNode(" · " + _toDisplayString(d.columns[k].attribute), 1)], 64))
                  : _createCommentVNode("", true),
                _cache[0] || (_cache[0] = _createTextVNode(" · ")),
                _createElementVNode("b", { class: _normalizeClass('rg-c-' + colClass(d.columns[k])) }, _toDisplayString(colText(d.columns[k])), 3)
              ])]))
            }), 128)), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(d.teams, (team) => {
              return (_openBlock(), _createElementBlock(_Fragment, { key: team }, [_createElementVNode("span", _hoisted_17, _toDisplayString(team), 1), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(kinds, (k) => {
                return (_openBlock(), _createElementBlock(_Fragment, { key: k }, [(tileOf[team + '|' + k])
                  ? (_openBlock(), _createElementBlock("button", {
                      key: 0,
                      type: "button",
                      class: _normalizeClass(["rg-tile", tileClass(tileOf[team + '|' + k])]),
                      onClick: $event => (pick(tileOf[team + '|' + k]))
                    }, [_createElementVNode("span", _hoisted_19, _toDisplayString(d.columns[k].title) + " · " + _toDisplayString(d.columns[k].version), 1), (tileOf[team + '|' + k].last)
                      ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [
                          _createElementVNode("span", _hoisted_20, [_createTextVNode(_toDisplayString(pct(tileOf[team + '|' + k].last.pct)), 1), _cache[1] || (_cache[1] = _createElementVNode("small", null, "%", -1))]),
                          _createElementVNode("span", _hoisted_21, [_createElementVNode("span", _hoisted_22, _toDisplayString(tileOf[team + '|' + k].last.name) + " #" + _toDisplayString(tileOf[team + '|' + k].last.number), 1), _createTextVNode(" · " + _toDisplayString(when(tileOf[team + '|' + k].last.at)), 1)]),
                          _createElementVNode("span", _hoisted_23, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(tileOf[team + '|' + k].trend, (p, i) => {
                            return (_openBlock(), _createElementBlock("i", {
                              key: i,
                              class: _normalizeClass('rg-b-' + p.state),
                              style: _normalizeStyle({ height: bar(p.pct) })
                            }, null, 6))
                          }), 128))]),
                          _createElementVNode("span", _hoisted_24, _toDisplayString(fmt(t.rg.counts, num(tileOf[team + '|' + k].last.total), num(tileOf[team + '|' + k].last.passed), num(tileOf[team + '|' + k].last.failed))), 1),
                          _createElementVNode("span", _hoisted_25, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(defects(tileOf[team + '|' + k]), (c) => {
                            return (_openBlock(), _createElementBlock("span", {
                              key: c.k,
                              class: _normalizeClass(["rg-chip", c.k])
                            }, _toDisplayString(c.n) + " " + _toDisplayString(t.rg.defect[c.k]), 3))
                          }), 128)), (!defects(tileOf[team + '|' + k]).length)
                            ? (_openBlock(), _createElementBlock("span", _hoisted_26, _toDisplayString(t.rg.allPassed), 1))
                            : _createCommentVNode("", true), (tileOf[team + '|' + k].tickets.length)
                            ? (_openBlock(), _createElementBlock("span", _hoisted_27, _toDisplayString(tileOf[team + '|' + k].tickets.join(", ")), 1))
                            : _createCommentVNode("", true)]),
                          (tileOf[team + '|' + k].stale)
                            ? (_openBlock(), _createElementBlock("span", _hoisted_28, _toDisplayString(fmt(t.rg.staleSince, when(tileOf[team + '|' + k].last.at))), 1))
                            : _createCommentVNode("", true)
                        ], 64))
                      : (tileOf[team + '|' + k].state === 'idle')
                        ? (_openBlock(), _createElementBlock("span", _hoisted_29, _toDisplayString(t.rg.noRelease), 1))
                        : (_openBlock(), _createElementBlock("span", _hoisted_30, _toDisplayString(tileOf[team + '|' + k].error || fmt(t.rg.noLaunch, tileOf[team + '|' + k].name, tileOf[team + '|' + k].attribute || "—")), 1))], 10, _hoisted_18))
                  : _createCommentVNode("", true)], 64))
              }), 128))], 64))
            }), 128))])]),
            (d.smoke)
              ? (_openBlock(), _createElementBlock("section", _hoisted_31, [
                  _createElementVNode("div", _hoisted_32, [_createElementVNode("h2", null, _toDisplayString(t.rg.smokeH), 1), _createElementVNode("span", _hoisted_33, _toDisplayString(t.rg.smokeSub), 1)]),
                  _createElementVNode("div", _hoisted_34, [_createElementVNode("span", null, [
                    _createElementVNode("i", {
                      class: _normalizeClass(["wl", { r: d.smoke.now_ok === false }]),
                      style: {"display":"inline-block"}
                    }, null, 2),
                    _cache[3] || (_cache[3] = _createTextVNode()),
                    _createElementVNode("b", null, _toDisplayString(d.smoke.now_ok === false ? t.rg.red : t.rg.green), 1),
                    (d.smoke.count)
                      ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [_createTextVNode(" · " + _toDisplayString(fmt(t.rg.lastRun, clock(d.smoke.runs[d.smoke.runs.length - 1].at))), 1)], 64))
                      : _createCommentVNode("", true)
                  ]), _createElementVNode("span", null, _toDisplayString(d.smoke.count ? fmt(t.rg.smokeN, d.smoke.green, d.smoke.count) : t.rg.noRunToday), 1), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(d.smoke.red, (r, i) => {
                    return (_openBlock(), _createElementBlock("span", {
                      key: i,
                      class: "rg-c-hot"
                    }, _toDisplayString(fmt(t.rg.redFromTo, clock(r.from), r.open ? t.rg.now : clock(r.to))), 1))
                  }), 128))]),
                  _createElementVNode("div", {
                    class: "rg-day",
                    role: "img",
                    "aria-label": t.rg.smokeH
                  }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(hours, (h) => {
                    return (_openBlock(), _createElementBlock("span", {
                      key: h,
                      class: "hr",
                      style: _normalizeStyle({ left: (h / 24 * 100) + '%' })
                    }, [_createElementVNode("span", null, _toDisplayString(String(h).padStart(2, "0")), 1)], 4))
                  }), 128)), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(d.smoke.red, (r, i) => {
                    return (_openBlock(), _createElementBlock("span", {
                      key: 'r' + i,
                      class: "bad",
                      style: _normalizeStyle(redStyle(r))
                    }, null, 4))
                  }), 128)), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(d.smoke.runs, (r) => {
                    return (_openBlock(), _createElementBlock("a", {
                      key: r.id,
                      class: _normalizeClass(["run", { f: !r.ok, req: r.on_request }]),
                      style: _normalizeStyle({ left: dayLeft(r.at) }),
                      href: d.ui + '/' + r.id,
                      target: "_blank",
                      rel: "noopener",
                      title: clock(r.at) + ' · #' + r.number + ' · ' + (r.ok ? t.rg.green : fmt(t.rg.failedN, r.failed)) + (r.on_request ? ' · ' + t.rg.onRequest : '')
                    }, null, 14, _hoisted_36))
                  }), 128))], 8, _hoisted_35),
                  _createElementVNode("div", _hoisted_37, [_createElementVNode("span", null, [_cache[4] || (_cache[4] = _createElementVNode("i", null, null, -1)), _createTextVNode(_toDisplayString(t.rg.lgGreen), 1)]), _createElementVNode("span", null, [_cache[5] || (_cache[5] = _createElementVNode("i", { class: "f" }, null, -1)), _createTextVNode(_toDisplayString(t.rg.red), 1)]), _createElementVNode("span", null, [_cache[6] || (_cache[6] = _createElementVNode("i", { class: "req" }, null, -1)), _createTextVNode(_toDisplayString(t.rg.onRequest), 1)])])
                ]))
              : _createCommentVNode("", true),
            _createElementVNode("div", _hoisted_38, [_createElementVNode("section", _hoisted_39, [_createElementVNode("div", _hoisted_40, [_createElementVNode("h2", null, _toDisplayString(t.rg.lookH), 1), _createElementVNode("span", _hoisted_41, _toDisplayString(d.findings.length ? fmt(t.ci.toLook, d.findings.length) : ""), 1)]), (!d.findings.length)
              ? (_openBlock(), _createElementBlock("p", _hoisted_42, _toDisplayString(t.rg.nothing), 1))
              : _createCommentVNode("", true), _createElementVNode("div", _hoisted_43, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(d.findings, (f, i) => {
              return (_openBlock(), _createElementBlock("div", {
                key: i,
                class: _normalizeClass(["ci-find", { 'ci-differ': f.level === 'hot', 'ci-failed': f.level === 'warn' }])
              }, [_createElementVNode("span", _hoisted_44, _toDisplayString(findIcon(f)), 1), _createElementVNode("div", null, [_createElementVNode("b", null, _toDisplayString(findText(f)), 1)]), _createElementVNode("div", _hoisted_45, [(why && f.level !== 'idle')
                ? (_openBlock(), _createElementBlock("button", {
                    key: 0,
                    class: "btn xs",
                    type: "button",
                    onClick: $event => ($emit('why', f.kind === 'smoke_red' ? { kind: 'smoke' } : { kind: 'regression', team: f.team, column: f.column }))
                  }, [_cache[7] || (_cache[7] = _createElementVNode("span", { "aria-hidden": "true" }, "✦", -1)), _createTextVNode(" " + _toDisplayString(t.cs.why), 1)], 8, _hoisted_46))
                : _createCommentVNode("", true), (f.team && tileOf[f.team + '|' + f.column] && tileOf[f.team + '|' + f.column].last)
                ? (_openBlock(), _createElementBlock("button", {
                    key: 1,
                    class: "btn xs",
                    type: "button",
                    onClick: $event => (pick(tileOf[f.team + '|' + f.column]))
                  }, _toDisplayString(t.rg.showTests), 9, _hoisted_47))
                : _createCommentVNode("", true)])], 2))
            }), 128))])]), _createElementVNode("section", _hoisted_48, [_createElementVNode("div", _hoisted_49, [_createElementVNode("h2", null, _toDisplayString(t.rg.stepsH), 1)]), (!d.steps.length)
              ? (_openBlock(), _createElementBlock("p", _hoisted_50, _toDisplayString(t.rg.noSteps), 1))
              : _createCommentVNode("", true), _createElementVNode("div", _hoisted_51, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(d.steps, (s) => {
              return (_openBlock(), _createElementBlock("div", {
                key: s.version + s.id,
                class: "rg-step"
              }, [
                _createElementVNode("button", {
                  type: "button",
                  class: "ci-t",
                  onClick: $event => (openStep(s))
                }, _toDisplayString(s.version) + " · " + _toDisplayString((lang === "ru" && s.ru) || s.en), 9, _hoisted_52),
                _createElementVNode("span", { class: _normalizeClass(["ci-mark", { done: s.status === 'done' }]) }, _toDisplayString(markText(s)), 3),
                _createElementVNode("p", null, _toDisplayString(stepText(s)), 1),
                (s.ready && s.status !== 'done' && s.status !== 'skipped')
                  ? (_openBlock(), _createElementBlock("div", _hoisted_53, [_createElementVNode("button", {
                      class: "btn xs pri",
                      type: "button",
                      disabled: busy,
                      onClick: $event => (markDone(s))
                    }, _toDisplayString(t.ci.markDone), 9, _hoisted_54)]))
                  : _createCommentVNode("", true)
              ]))
            }), 128))])])]),
            selTile
              ? (_openBlock(), _createElementBlock("section", _hoisted_55, [_createElementVNode("div", _hoisted_56, [_createElementVNode("h2", null, _toDisplayString(fmt(t.rg.testsH, selTile.team, d.columns[selTile.kind].title, selTile.last.number)), 1), _createElementVNode("div", _hoisted_57, [(tests && tests.url)
                  ? (_openBlock(), _createElementBlock("a", {
                      key: 0,
                      class: "btn xs",
                      href: tests.url,
                      target: "_blank",
                      rel: "noopener"
                    }, "ReportPortal ↗", 8, _hoisted_58))
                  : _createCommentVNode("", true), _createElementVNode("button", {
                  class: "btn xs",
                  type: "button",
                  onClick: $event => (sel = '')
                }, _toDisplayString(t.close), 9, _hoisted_59)])]), testsBusy
                  ? (_openBlock(), _createElementBlock("p", _hoisted_60, _toDisplayString(t.rg.reading), 1))
                  : testsError
                    ? (_openBlock(), _createElementBlock("p", _hoisted_61, _toDisplayString(fmt(t.rg.error, testsError)), 1))
                    : (tests && !tests.tests.length)
                      ? (_openBlock(), _createElementBlock("p", _hoisted_62, _toDisplayString(t.rg.noFailed), 1))
                      : tests
                        ? (_openBlock(), _createElementBlock("div", _hoisted_63, [_createElementVNode("table", _hoisted_64, [_createElementVNode("thead", null, [_createElementVNode("tr", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(t.rg.cols, (c) => {
                            return (_openBlock(), _createElementBlock("th", { key: c }, _toDisplayString(c), 1))
                          }), 128))])]), _createElementVNode("tbody", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(tests.tests, (x, i) => {
                            return (_openBlock(), _createElementBlock("tr", { key: i }, [
                              _createElementVNode("td", null, [_createElementVNode("span", _hoisted_65, _toDisplayString(x.path.join(" › ")) + _toDisplayString(x.path.length ? " › " : ""), 1), _createTextVNode(_toDisplayString(x.name), 1)]),
                              _createElementVNode("td", null, [_createElementVNode("span", { class: _normalizeClass(["rg-chip", x.defect]) }, _toDisplayString(t.rg.defect[x.defect] || x.defect), 3)]),
                              _createElementVNode("td", null, _toDisplayString(x.new ? t.rg.isNew : ""), 1),
                              _createElementVNode("td", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(x.tickets, (k, j) => {
                                return (_openBlock(), _createElementBlock("a", {
                                  key: j,
                                  href: k.url,
                                  target: "_blank",
                                  rel: "noopener",
                                  class: "mono"
                                }, _toDisplayString(k.key), 9, _hoisted_66))
                              }), 128)), _createElementVNode("span", _hoisted_67, _toDisplayString(x.comment), 1)])
                            ]))
                          }), 128))])])]))
                        : _createCommentVNode("", true)]))
              : _createCommentVNode("", true)
          ], 64))]))
  }
}
})(Vue);
  out["RegressionView"]._rc = true;
  out["ProcessView"] = (function (Vue) {
const _Vue = Vue
const { createElementVNode: _createElementVNode, createCommentVNode: _createCommentVNode, createTextVNode: _createTextVNode } = _Vue

const _hoisted_1 = { class: "pv" }
const _hoisted_2 = { class: "w pv-head" }
const _hoisted_3 = { class: "wh" }
const _hoisted_4 = ["aria-label"]
const _hoisted_5 = ["aria-pressed", "onClick"]
const _hoisted_6 = { class: "mono" }
const _hoisted_7 = { class: "dim" }
const _hoisted_8 = { class: "dim small pv-intro" }
const _hoisted_9 = {
  key: 0,
  class: "empty"
}
const _hoisted_10 = ["aria-label"]
const _hoisted_11 = { class: "pv-track-scroll" }
const _hoisted_12 = {
  class: "pv-rail",
  "aria-hidden": "true"
}
const _hoisted_13 = ["title", "onClick"]
const _hoisted_14 = {
  key: 0,
  class: "pv-sig",
  "aria-hidden": "true"
}
const _hoisted_15 = {
  key: 1,
  class: "pv-stn",
  "aria-hidden": "true"
}
const _hoisted_16 = { class: "pv-lab mono" }
const _hoisted_17 = ["title"]
const _hoisted_18 = { class: "mono" }
const _hoisted_19 = { class: "pv-ctl" }
const _hoisted_20 = ["aria-label", "disabled", "onClick"]
const _hoisted_21 = ["aria-pressed", "onClick"]
const _hoisted_22 = ["aria-label", "disabled", "onClick"]
const _hoisted_23 = { class: "pv-pos" }
const _hoisted_24 = { key: 0 }
const _hoisted_25 = {
  class: "pv-bar",
  "aria-hidden": "true"
}
const _hoisted_26 = { class: "pv-main" }
const _hoisted_27 = { class: "w pv-board" }
const _hoisted_28 = { class: "pv-legend small dim" }
const _hoisted_29 = { class: "pv-phases" }
const _hoisted_30 = ["onClick"]
const _hoisted_31 = { class: "pv-board-scroll" }
const _hoisted_32 = {
  key: 0,
  class: "dim"
}
const _hoisted_33 = {
  key: 0,
  class: "pv-week"
}
const _hoisted_34 = { class: "pv-day" }
const _hoisted_35 = { class: "dim mono" }
const _hoisted_36 = {
  key: 0,
  class: "pv-wk dim"
}
const _hoisted_37 = ["title", "aria-current", "onClick"]
const _hoisted_38 = { class: "pv-n mono" }
const _hoisted_39 = { class: "pv-t" }
const _hoisted_40 = { class: "pv-ic" }
const _hoisted_41 = {
  key: 0,
  class: "g"
}
const _hoisted_42 = {
  key: 1,
  class: "r"
}
const _hoisted_43 = { key: 2 }
const _hoisted_44 = { key: 3 }
const _hoisted_45 = { key: 4 }
const _hoisted_46 = {
  key: 5,
  class: "ok"
}
const _hoisted_47 = {
  key: 6,
  class: "late"
}
const _hoisted_48 = {
  key: 0,
  class: "w pv-side",
  "aria-live": "polite"
}
const _hoisted_49 = { class: "pv-side-h" }
const _hoisted_50 = { class: "pv-n mono" }
const _hoisted_51 = { class: "pill" }
const _hoisted_52 = { class: "pv-h" }
const _hoisted_53 = { class: "dim small pv-when" }
const _hoisted_54 = { key: 0 }
const _hoisted_55 = {
  key: 0,
  class: "small pv-cond"
}
const _hoisted_56 = {
  key: 1,
  class: "pv-part"
}
const _hoisted_57 = { class: "pv-list" }
const _hoisted_58 = { class: "mono" }
const _hoisted_59 = {
  key: 0,
  class: "pv-params"
}
const _hoisted_60 = {
  key: 2,
  class: "dim"
}
const _hoisted_61 = {
  key: 3,
  class: "dim"
}
const _hoisted_62 = {
  key: 2,
  class: "pv-part"
}
const _hoisted_63 = { class: "pv-list fx" }
const _hoisted_64 = { class: "pv-part" }
const _hoisted_65 = { class: "small" }
const _hoisted_66 = {
  key: 3,
  class: "small pv-ask"
}
const _hoisted_67 = ["onClick"]

return function render(_ctx, _cache) {
  with (_ctx) {
    const { toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, normalizeStyle: _normalizeStyle, normalizeClass: _normalizeClass, createTextVNode: _createTextVNode } = _Vue

    return (_openBlock(), _createElementBlock("div", _hoisted_1, [_createElementVNode("section", _hoisted_2, [_createElementVNode("div", _hoisted_3, [_createElementVNode("h2", null, _toDisplayString(tx.title), 1), _createElementVNode("div", {
      class: "pv-rels",
      role: "group",
      "aria-label": tx.release
    }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(releases, (r) => {
      return (_openBlock(), _createElementBlock("button", {
        key: r.version,
        type: "button",
        class: "btn xs",
        "aria-pressed": rel && rel.version === r.version ? 'true' : 'false',
        onClick: $event => (pick = r.version)
      }, [_createElementVNode("span", _hoisted_6, _toDisplayString(r.version), 1), _createElementVNode("span", _hoisted_7, _toDisplayString(r.playbook === 'service_pack' ? tx.sp : tx.major), 1)], 8, _hoisted_5))
    }), 128))], 8, _hoisted_4)]), _createElementVNode("p", _hoisted_8, _toDisplayString(tx.intro), 1)]), (!rel)
      ? (_openBlock(), _createElementBlock("p", _hoisted_9, _toDisplayString(tx.empty), 1))
      : (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [_createElementVNode("section", {
          class: "pv-desk",
          "aria-label": tx.title
        }, [_createElementVNode("div", _hoisted_11, [_createElementVNode("div", {
          class: "pv-track",
          style: _normalizeStyle({ gridTemplateColumns: 'repeat(' + track.length + ', minmax(52px, 1fr))' })
        }, [_createElementVNode("div", _hoisted_12, [_createElementVNode("i", { style: _normalizeStyle({ width: trainLeft }) }, null, 4)]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(track, (m, n) => {
          return (_openBlock(), _createElementBlock("button", {
            key: m.kind + m.label + m.index,
            type: "button",
            class: _normalizeClass(["pv-node", ['k-' + m.kind, { passed: n <= passed, here: n === passed }]]),
            title: m.step ? title(m.step) : m.note,
            onClick: $event => (m.step ? choose(m.index) : choose(0))
          }, [(m.kind === 'gate')
            ? (_openBlock(), _createElementBlock("span", _hoisted_14, _cache[0] || (_cache[0] = [_createElementVNode("i", null, null, -1)])))
            : (_openBlock(), _createElementBlock("span", _hoisted_15)), _createElementVNode("span", _hoisted_16, _toDisplayString(m.label), 1), (n === nowStation && m.kind !== 'gate')
            ? (_openBlock(), _createElementBlock("span", {
                key: 2,
                class: "pv-now",
                title: tx.nowT
              }, _toDisplayString(tx.now), 9, _hoisted_17))
            : _createCommentVNode("", true)], 10, _hoisted_13))
        }), 128)), _createElementVNode("div", {
          class: "pv-train",
          style: _normalizeStyle({ left: trainLeft }),
          "aria-hidden": "true"
        }, [_createElementVNode("span", _hoisted_18, _toDisplayString(rel.version), 1)], 4)], 4)]), _createElementVNode("div", _hoisted_19, [
          _createElementVNode("button", {
            type: "button",
            class: "pv-b",
            "aria-label": tx.prev,
            disabled: at === 0,
            onClick: $event => (go(-1))
          }, "◀", 8, _hoisted_20),
          _createElementVNode("button", {
            type: "button",
            class: "pv-b pv-play",
            "aria-pressed": playing ? 'true' : 'false',
            onClick: toggle
          }, _toDisplayString(playing ? '❚❚ ' + tx.pause : '▶ ' + tx.play), 9, _hoisted_21),
          _createElementVNode("button", {
            type: "button",
            class: "pv-b",
            "aria-label": tx.next,
            disabled: at >= steps.length - 1,
            onClick: $event => (go(1))
          }, "▶", 8, _hoisted_22),
          _createElementVNode("span", _hoisted_23, [_createTextVNode(_toDisplayString(put(tx.stepOf, at + 1, steps.length)), 1), cur
            ? (_openBlock(), _createElementBlock("span", _hoisted_24, " · " + _toDisplayString(whenText(cur)), 1))
            : _createCommentVNode("", true)]),
          _createElementVNode("span", _hoisted_25, [_createElementVNode("i", { style: _normalizeStyle({ width: ((at + 1) / Math.max(1, steps.length) * 100) + '%' }) }, null, 4)])
        ])], 8, _hoisted_10), _createElementVNode("div", _hoisted_26, [_createElementVNode("section", _hoisted_27, [_createElementVNode("div", _hoisted_28, [_createElementVNode("span", _hoisted_29, [_createElementVNode("b", null, _toDisplayString(tx.phases) + ":", 1), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(rel.phases, (p, n) => {
          return (_openBlock(), _createElementBlock("button", {
            key: p.id,
            type: "button",
            class: _normalizeClass(["pv-ph", 'ph-' + (n % 6)]),
            onClick: $event => (choose(steps.findIndex((s) => s.phase === p.id)))
          }, _toDisplayString(title(p)), 11, _hoisted_30))
        }), 128))]), _createElementVNode("span", null, [_createElementVNode("b", null, _toDisplayString(tx.legend), 1), _createTextVNode(" ◆ " + _toDisplayString(tx.ic.gate) + " · ➜ " + _toDisplayString(tx.ic.station) + " · ⚙ " + _toDisplayString(tx.ic.job) + " · ✉ " + _toDisplayString(tx.ic.mail) + " · J " + _toDisplayString(tx.ic.jira), 1)])]), _createElementVNode("div", _hoisted_31, [_createElementVNode("div", {
          class: "pv-grid",
          style: _normalizeStyle({ gridTemplateColumns: colTemplate })
        }, [dated
          ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(weeks, (w) => {
              return (_openBlock(), _createElementBlock("div", {
                key: 'w' + w.week,
                class: "pv-week",
                style: _normalizeStyle({ gridColumn: 'span ' + w.span })
              }, [_createTextVNode(_toDisplayString(tx.week) + " " + _toDisplayString(w.week), 1), (tx.weekNote[w.week])
                ? (_openBlock(), _createElementBlock("span", _hoisted_32, " · " + _toDisplayString(tx.weekNote[w.week]), 1))
                : _createCommentVNode("", true)], 4))
            }), 128)), (columns.length % 5)
              ? (_openBlock(), _createElementBlock("div", _hoisted_33))
              : _createCommentVNode("", true)], 64))
          : _createCommentVNode("", true), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(columns, (c) => {
          return (_openBlock(), _createElementBlock("div", {
            key: 'c' + c.key,
            class: _normalizeClass(["pv-col", { today: c.today, first: c.first, empty: !c.steps.length }])
          }, [_createElementVNode("div", _hoisted_34, [_createElementVNode("b", null, _toDisplayString(c.head), 1), _createElementVNode("span", _hoisted_35, _toDisplayString(c.sub), 1), (c.week)
            ? (_openBlock(), _createElementBlock("span", _hoisted_36, "· " + _toDisplayString(tx.week) + " " + _toDisplayString(c.week), 1))
            : _createCommentVNode("", true)]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(c.steps, (x) => {
            return (_openBlock(), _createElementBlock("button", {
              key: x.s.id,
              type: "button",
              class: _normalizeClass(["pv-chip", [phaseClass(x.s), 'pvs-' + x.s.status, { cur: x.i === at, past: x.i < at }]]),
              title: title(x.s),
              "aria-current": x.i === at ? 'step' : null,
              onClick: $event => {stop(); choose(x.i)}
            }, [
              _createElementVNode("span", _hoisted_38, _toDisplayString(x.i + 1), 1),
              _createElementVNode("span", _hoisted_39, _toDisplayString(title(x.s)), 1),
              _createElementVNode("span", _hoisted_40, [
                (x.s.gate)
                  ? (_openBlock(), _createElementBlock("span", _hoisted_41, "◆" + _toDisplayString(x.s.gate), 1))
                  : _createCommentVNode("", true),
                (x.s.reaches)
                  ? (_openBlock(), _createElementBlock("span", _hoisted_42, "➜" + _toDisplayString(x.s.reaches), 1))
                  : _createCommentVNode("", true),
                (job(x.s))
                  ? (_openBlock(), _createElementBlock("span", _hoisted_43, "⚙"))
                  : _createCommentVNode("", true),
                (x.s.mail)
                  ? (_openBlock(), _createElementBlock("span", _hoisted_44, "✉"))
                  : _createCommentVNode("", true),
                (x.s.jira)
                  ? (_openBlock(), _createElementBlock("span", _hoisted_45, "J"))
                  : _createCommentVNode("", true),
                (x.s.status === 'done')
                  ? (_openBlock(), _createElementBlock("span", _hoisted_46, "✓"))
                  : (x.s.status === 'overdue')
                    ? (_openBlock(), _createElementBlock("span", _hoisted_47, "!"))
                    : _createCommentVNode("", true)
              ]),
              _createElementVNode("span", { class: _normalizeClass(["own", 'o-' + x.s.owner]) }, _toDisplayString(x.s.owner), 3)
            ], 10, _hoisted_37))
          }), 128))], 2))
        }), 128))], 4)])]), cur
          ? (_openBlock(), _createElementBlock("aside", _hoisted_48, [
              _createElementVNode("div", _hoisted_49, [
                _createElementVNode("span", _hoisted_50, _toDisplayString(at + 1), 1),
                _createElementVNode("span", { class: _normalizeClass(["pv-ph", phaseClass(cur)]) }, _toDisplayString(title(rel.phases.find((p) => p.id === cur.phase))), 3),
                _createElementVNode("span", { class: _normalizeClass(["own", 'o-' + cur.owner]) }, _toDisplayString(cur.owner), 3),
                _createElementVNode("span", _hoisted_51, _toDisplayString(tx.status[cur.status] || cur.status), 1)
              ]),
              _createElementVNode("h3", _hoisted_52, _toDisplayString(title(cur)), 1),
              _createElementVNode("p", _hoisted_53, [_createTextVNode(_toDisplayString(whenText(cur)), 1), (cur.planned)
                ? (_openBlock(), _createElementBlock("span", _hoisted_54, " · " + _toDisplayString(put(tx.planned, cur.planned.slice(8, 10) + '.' + cur.planned.slice(5, 7))), 1))
                : _createCommentVNode("", true)]),
              (cur.optional || cur.only_if)
                ? (_openBlock(), _createElementBlock("p", _hoisted_55, _toDisplayString([cur.optional ? tx.optional : '', cur.only_if ? tx.only + ': ' + cur.only_if : ''].filter(Boolean).join(' · ')), 1))
                : _createCommentVNode("", true),
              ((cur.notes && cur.notes.length) || (cur.actions && cur.actions.length))
                ? (_openBlock(), _createElementBlock("div", _hoisted_56, [_createElementVNode("h4", null, _toDisplayString(tx.what), 1), _createElementVNode("ul", _hoisted_57, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(cur.notes || [], (n, k) => {
                    return (_openBlock(), _createElementBlock("li", { key: 'n' + k }, _toDisplayString(n), 1))
                  }), 128)), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(cur.actions || [], (a, k) => {
                    return (_openBlock(), _createElementBlock("li", { key: 'a' + k }, [(a.job)
                      ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [
                          _createElementVNode("b", null, "⚙ " + _toDisplayString(tx.job), 1),
                          _cache[1] || (_cache[1] = _createTextVNode()),
                          _createElementVNode("span", _hoisted_58, _toDisplayString(a.job), 1),
                          (params(a).length)
                            ? (_openBlock(), _createElementBlock("span", _hoisted_59, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(params(a), (p) => {
                                return (_openBlock(), _createElementBlock("span", {
                                  key: p,
                                  class: "mono"
                                }, _toDisplayString(p), 1))
                              }), 128))]))
                            : _createCommentVNode("", true)
                        ], 64))
                      : (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [_createTextVNode(_toDisplayString(a.do), 1)], 64)), (a.note)
                      ? (_openBlock(), _createElementBlock("span", _hoisted_60, " · " + _toDisplayString(a.note), 1))
                      : _createCommentVNode("", true), (a.only_if)
                      ? (_openBlock(), _createElementBlock("span", _hoisted_61, " · " + _toDisplayString(tx.only) + ": " + _toDisplayString(a.only_if), 1))
                      : _createCommentVNode("", true)]))
                  }), 128))])]))
                : _createCommentVNode("", true),
              (effects(cur, at).length)
                ? (_openBlock(), _createElementBlock("div", _hoisted_62, [_createElementVNode("h4", null, _toDisplayString(tx.effect), 1), _createElementVNode("ul", _hoisted_63, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(effects(cur, at), (e, k) => {
                    return (_openBlock(), _createElementBlock("li", { key: k }, _toDisplayString(e), 1))
                  }), 128))])]))
                : _createCommentVNode("", true),
              _createElementVNode("div", _hoisted_64, [_createElementVNode("h4", null, _toDisplayString(tx.how), 1), _createElementVNode("p", _hoisted_65, _toDisplayString(tx.confirm[cur.confirm] || cur.confirm), 1)]),
              (cur.ask)
                ? (_openBlock(), _createElementBlock("p", _hoisted_66, [_createElementVNode("b", null, _toDisplayString(tx.ask) + ":", 1), _createTextVNode(" " + _toDisplayString(cur.ask), 1)]))
                : _createCommentVNode("", true),
              _createElementVNode("button", {
                type: "button",
                class: "btn",
                onClick: open
              }, _toDisplayString(tx.open), 9, _hoisted_67)
            ]))
          : _createCommentVNode("", true)])], 64))]))
  }
}
})(Vue);
  out["ProcessView"]._rc = true;
  return out;
})(Vue);
