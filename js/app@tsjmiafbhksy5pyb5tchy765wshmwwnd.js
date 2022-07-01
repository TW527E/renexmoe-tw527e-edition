(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    177: function (e, t) {
      function n(e) {
        return (
          e instanceof Map
            ? (e.clear =
                e.delete =
                e.set =
                  function () {
                    throw new Error("map is read-only");
                  })
            : e instanceof Set &&
              (e.add =
                e.clear =
                e.delete =
                  function () {
                    throw new Error("set is read-only");
                  }),
          Object.freeze(e),
          Object.getOwnPropertyNames(e).forEach(function (t) {
            var i = e[t];
            "object" != typeof i || Object.isFrozen(i) || n(i);
          }),
          e
        );
      }
      var i = n,
        r = n;
      i.default = r;
      class a {
        constructor(e) {
          void 0 === e.data && (e.data = {}), (this.data = e.data);
        }
        ignoreMatch() {
          this.ignore = !0;
        }
      }
      function s(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
      }
      function o(e, ...t) {
        const n = Object.create(null);
        for (const t in e) n[t] = e[t];
        return (
          t.forEach(function (e) {
            for (const t in e) n[t] = e[t];
          }),
          n
        );
      }
      const l = (e) => !!e.kind;
      class c {
        constructor(e, t) {
          (this.buffer = ""), (this.classPrefix = t.classPrefix), e.walk(this);
        }
        addText(e) {
          this.buffer += s(e);
        }
        openNode(e) {
          if (!l(e)) return;
          let t = e.kind;
          e.sublanguage || (t = `${this.classPrefix}${t}`), this.span(t);
        }
        closeNode(e) {
          l(e) && (this.buffer += "</span>");
        }
        value() {
          return this.buffer;
        }
        span(e) {
          this.buffer += `<span class="${e}">`;
        }
      }
      class d {
        constructor() {
          (this.rootNode = { children: [] }), (this.stack = [this.rootNode]);
        }
        get top() {
          return this.stack[this.stack.length - 1];
        }
        get root() {
          return this.rootNode;
        }
        add(e) {
          this.top.children.push(e);
        }
        openNode(e) {
          const t = { kind: e, children: [] };
          this.add(t), this.stack.push(t);
        }
        closeNode() {
          if (this.stack.length > 1) return this.stack.pop();
        }
        closeAllNodes() {
          for (; this.closeNode(); );
        }
        toJSON() {
          return JSON.stringify(this.rootNode, null, 4);
        }
        walk(e) {
          return this.constructor._walk(e, this.rootNode);
        }
        static _walk(e, t) {
          return (
            "string" == typeof t
              ? e.addText(t)
              : t.children &&
                (e.openNode(t),
                t.children.forEach((t) => this._walk(e, t)),
                e.closeNode(t)),
            e
          );
        }
        static _collapse(e) {
          "string" != typeof e &&
            e.children &&
            (e.children.every((e) => "string" == typeof e)
              ? (e.children = [e.children.join("")])
              : e.children.forEach((e) => {
                  d._collapse(e);
                }));
        }
      }
      class u extends d {
        constructor(e) {
          super(), (this.options = e);
        }
        addKeyword(e, t) {
          "" !== e && (this.openNode(t), this.addText(e), this.closeNode());
        }
        addText(e) {
          "" !== e && this.add(e);
        }
        addSublanguage(e, t) {
          const n = e.root;
          (n.kind = t), (n.sublanguage = !0), this.add(n);
        }
        toHTML() {
          return new c(this, this.options).value();
        }
        finalize() {
          return !0;
        }
      }
      function g(e) {
        return e ? ("string" == typeof e ? e : e.source) : null;
      }
      const m = "[a-zA-Z]\\w*",
        p = "[a-zA-Z_]\\w*",
        b = "\\b\\d+(\\.\\d+)?",
        f =
          "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
        h = "\\b(0b[01]+)",
        _ = { begin: "\\\\[\\s\\S]", relevance: 0 },
        E = {
          className: "string",
          begin: "'",
          end: "'",
          illegal: "\\n",
          contains: [_],
        },
        y = {
          className: "string",
          begin: '"',
          end: '"',
          illegal: "\\n",
          contains: [_],
        },
        w = {
          begin:
            /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
        },
        v = function (e, t, n = {}) {
          const i = o(
            { className: "comment", begin: e, end: t, contains: [] },
            n
          );
          return (
            i.contains.push(w),
            i.contains.push({
              className: "doctag",
              begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
              relevance: 0,
            }),
            i
          );
        },
        C = v("//", "$"),
        N = v("/\\*", "\\*/"),
        S = v("#", "$"),
        x = { className: "number", begin: b, relevance: 0 },
        M = { className: "number", begin: f, relevance: 0 },
        I = { className: "number", begin: h, relevance: 0 },
        O = {
          className: "number",
          begin:
            b +
            "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
          relevance: 0,
        },
        k = {
          begin: /(?=\/[^/\n]*\/)/,
          contains: [
            {
              className: "regexp",
              begin: /\//,
              end: /\/[gimuy]*/,
              illegal: /\n/,
              contains: [
                _,
                { begin: /\[/, end: /\]/, relevance: 0, contains: [_] },
              ],
            },
          ],
        },
        T = { className: "title", begin: m, relevance: 0 },
        A = { className: "title", begin: p, relevance: 0 },
        R = { begin: "\\.\\s*[a-zA-Z_]\\w*", relevance: 0 };
      var D = Object.freeze({
        __proto__: null,
        MATCH_NOTHING_RE: /\b\B/,
        IDENT_RE: m,
        UNDERSCORE_IDENT_RE: p,
        NUMBER_RE: b,
        C_NUMBER_RE: f,
        BINARY_NUMBER_RE: h,
        RE_STARTERS_RE:
          "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
        SHEBANG: (e = {}) => {
          const t = /^#![ ]*\//;
          return (
            e.binary &&
              (e.begin = (function (...e) {
                return e.map((e) => g(e)).join("");
              })(t, /.*\b/, e.binary, /\b.*/)),
            o(
              {
                className: "meta",
                begin: t,
                end: /$/,
                relevance: 0,
                "on:begin": (e, t) => {
                  0 !== e.index && t.ignoreMatch();
                },
              },
              e
            )
          );
        },
        BACKSLASH_ESCAPE: _,
        APOS_STRING_MODE: E,
        QUOTE_STRING_MODE: y,
        PHRASAL_WORDS_MODE: w,
        COMMENT: v,
        C_LINE_COMMENT_MODE: C,
        C_BLOCK_COMMENT_MODE: N,
        HASH_COMMENT_MODE: S,
        NUMBER_MODE: x,
        C_NUMBER_MODE: M,
        BINARY_NUMBER_MODE: I,
        CSS_NUMBER_MODE: O,
        REGEXP_MODE: k,
        TITLE_MODE: T,
        UNDERSCORE_TITLE_MODE: A,
        METHOD_GUARD: R,
        END_SAME_AS_BEGIN: function (e) {
          return Object.assign(e, {
            "on:begin": (e, t) => {
              t.data._beginMatch = e[1];
            },
            "on:end": (e, t) => {
              t.data._beginMatch !== e[1] && t.ignoreMatch();
            },
          });
        },
      });
      function G(e, t) {
        "." === e.input[e.index - 1] && t.ignoreMatch();
      }
      function L(e, t) {
        t &&
          e.beginKeywords &&
          ((e.begin =
            "\\b(" +
            e.beginKeywords.split(" ").join("|") +
            ")(?!\\.)(?=\\b|\\s)"),
          (e.__beforeBegin = G),
          (e.keywords = e.keywords || e.beginKeywords),
          delete e.beginKeywords,
          void 0 === e.relevance && (e.relevance = 0));
      }
      function B(e, t) {
        Array.isArray(e.illegal) &&
          (e.illegal = (function (...e) {
            return "(" + e.map((e) => g(e)).join("|") + ")";
          })(...e.illegal));
      }
      function U(e, t) {
        if (e.match) {
          if (e.begin || e.end)
            throw new Error("begin & end are not supported with match");
          (e.begin = e.match), delete e.match;
        }
      }
      function P(e, t) {
        void 0 === e.relevance && (e.relevance = 1);
      }
      const z = [
        "of",
        "and",
        "for",
        "in",
        "not",
        "or",
        "if",
        "then",
        "parent",
        "list",
        "value",
      ];
      function $(e, t, n = "keyword") {
        const i = {};
        return (
          "string" == typeof e
            ? r(n, e.split(" "))
            : Array.isArray(e)
            ? r(n, e)
            : Object.keys(e).forEach(function (n) {
                Object.assign(i, $(e[n], t, n));
              }),
          i
        );
        function r(e, n) {
          t && (n = n.map((e) => e.toLowerCase())),
            n.forEach(function (t) {
              const n = t.split("|");
              i[n[0]] = [e, F(n[0], n[1])];
            });
        }
      }
      function F(e, t) {
        return t
          ? Number(t)
          : (function (e) {
              return z.includes(e.toLowerCase());
            })(e)
          ? 0
          : 1;
      }
      function j(e, { plugins: t }) {
        function n(t, n) {
          return new RegExp(
            g(t),
            "m" + (e.case_insensitive ? "i" : "") + (n ? "g" : "")
          );
        }
        class i {
          constructor() {
            (this.matchIndexes = {}),
              (this.regexes = []),
              (this.matchAt = 1),
              (this.position = 0);
          }
          addRule(e, t) {
            (t.position = this.position++),
              (this.matchIndexes[this.matchAt] = t),
              this.regexes.push([t, e]),
              (this.matchAt +=
                (function (e) {
                  return new RegExp(e.toString() + "|").exec("").length - 1;
                })(e) + 1);
          }
          compile() {
            0 === this.regexes.length && (this.exec = () => null);
            const e = this.regexes.map((e) => e[1]);
            (this.matcherRe = n(
              (function (e, t = "|") {
                const n = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
                let i = 0,
                  r = "";
                for (let a = 0; a < e.length; a++) {
                  i += 1;
                  const s = i;
                  let o = g(e[a]);
                  for (a > 0 && (r += t), r += "("; o.length > 0; ) {
                    const e = n.exec(o);
                    if (null == e) {
                      r += o;
                      break;
                    }
                    (r += o.substring(0, e.index)),
                      (o = o.substring(e.index + e[0].length)),
                      "\\" === e[0][0] && e[1]
                        ? (r += "\\" + String(Number(e[1]) + s))
                        : ((r += e[0]), "(" === e[0] && i++);
                  }
                  r += ")";
                }
                return r;
              })(e),
              !0
            )),
              (this.lastIndex = 0);
          }
          exec(e) {
            this.matcherRe.lastIndex = this.lastIndex;
            const t = this.matcherRe.exec(e);
            if (!t) return null;
            const n = t.findIndex((e, t) => t > 0 && void 0 !== e),
              i = this.matchIndexes[n];
            return t.splice(0, n), Object.assign(t, i);
          }
        }
        class r {
          constructor() {
            (this.rules = []),
              (this.multiRegexes = []),
              (this.count = 0),
              (this.lastIndex = 0),
              (this.regexIndex = 0);
          }
          getMatcher(e) {
            if (this.multiRegexes[e]) return this.multiRegexes[e];
            const t = new i();
            return (
              this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)),
              t.compile(),
              (this.multiRegexes[e] = t),
              t
            );
          }
          resumingScanAtSamePosition() {
            return 0 !== this.regexIndex;
          }
          considerAll() {
            this.regexIndex = 0;
          }
          addRule(e, t) {
            this.rules.push([e, t]), "begin" === t.type && this.count++;
          }
          exec(e) {
            const t = this.getMatcher(this.regexIndex);
            t.lastIndex = this.lastIndex;
            let n = t.exec(e);
            if (this.resumingScanAtSamePosition())
              if (n && n.index === this.lastIndex);
              else {
                const t = this.getMatcher(0);
                (t.lastIndex = this.lastIndex + 1), (n = t.exec(e));
              }
            return (
              n &&
                ((this.regexIndex += n.position + 1),
                this.regexIndex === this.count && this.considerAll()),
              n
            );
          }
        }
        if (
          (e.compilerExtensions || (e.compilerExtensions = []),
          e.contains && e.contains.includes("self"))
        )
          throw new Error(
            "ERR: contains `self` is not supported at the top-level of a language.  See documentation."
          );
        return (
          (e.classNameAliases = o(e.classNameAliases || {})),
          (function t(i, a) {
            const s = i;
            if (i.compiled) return s;
            [U].forEach((e) => e(i, a)),
              e.compilerExtensions.forEach((e) => e(i, a)),
              (i.__beforeBegin = null),
              [L, B, P].forEach((e) => e(i, a)),
              (i.compiled = !0);
            let l = null;
            if (
              ("object" == typeof i.keywords &&
                ((l = i.keywords.$pattern), delete i.keywords.$pattern),
              i.keywords && (i.keywords = $(i.keywords, e.case_insensitive)),
              i.lexemes && l)
            )
              throw new Error(
                "ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) "
              );
            return (
              (l = l || i.lexemes || /\w+/),
              (s.keywordPatternRe = n(l, !0)),
              a &&
                (i.begin || (i.begin = /\B|\b/),
                (s.beginRe = n(i.begin)),
                i.endSameAsBegin && (i.end = i.begin),
                i.end || i.endsWithParent || (i.end = /\B|\b/),
                i.end && (s.endRe = n(i.end)),
                (s.terminatorEnd = g(i.end) || ""),
                i.endsWithParent &&
                  a.terminatorEnd &&
                  (s.terminatorEnd += (i.end ? "|" : "") + a.terminatorEnd)),
              i.illegal && (s.illegalRe = n(i.illegal)),
              i.contains || (i.contains = []),
              (i.contains = [].concat(
                ...i.contains.map(function (e) {
                  return (function (e) {
                    e.variants &&
                      !e.cachedVariants &&
                      (e.cachedVariants = e.variants.map(function (t) {
                        return o(e, { variants: null }, t);
                      }));
                    if (e.cachedVariants) return e.cachedVariants;
                    if (q(e))
                      return o(e, { starts: e.starts ? o(e.starts) : null });
                    if (Object.isFrozen(e)) return o(e);
                    return e;
                  })("self" === e ? i : e);
                })
              )),
              i.contains.forEach(function (e) {
                t(e, s);
              }),
              i.starts && t(i.starts, a),
              (s.matcher = (function (e) {
                const t = new r();
                return (
                  e.contains.forEach((e) =>
                    t.addRule(e.begin, { rule: e, type: "begin" })
                  ),
                  e.terminatorEnd &&
                    t.addRule(e.terminatorEnd, { type: "end" }),
                  e.illegal && t.addRule(e.illegal, { type: "illegal" }),
                  t
                );
              })(s)),
              s
            );
          })(e)
        );
      }
      function q(e) {
        return !!e && (e.endsWithParent || q(e.starts));
      }
      function H(e) {
        const t = {
          props: ["language", "code", "autodetect"],
          data: function () {
            return { detectedLanguage: "", unknownLanguage: !1 };
          },
          computed: {
            className() {
              return this.unknownLanguage
                ? ""
                : "hljs " + this.detectedLanguage;
            },
            highlighted() {
              if (!this.autoDetect && !e.getLanguage(this.language))
                return (
                  console.warn(
                    `The language "${this.language}" you specified could not be found.`
                  ),
                  (this.unknownLanguage = !0),
                  s(this.code)
                );
              let t = {};
              return (
                this.autoDetect
                  ? ((t = e.highlightAuto(this.code)),
                    (this.detectedLanguage = t.language))
                  : ((t = e.highlight(
                      this.language,
                      this.code,
                      this.ignoreIllegals
                    )),
                    (this.detectedLanguage = this.language)),
                t.value
              );
            },
            autoDetect() {
              return (
                !this.language ||
                ((e = this.autodetect), Boolean(e || "" === e))
              );
              var e;
            },
            ignoreIllegals: () => !0,
          },
          render(e) {
            return e("pre", {}, [
              e("code", {
                class: this.className,
                domProps: { innerHTML: this.highlighted },
              }),
            ]);
          },
        };
        return {
          Component: t,
          VuePlugin: {
            install(e) {
              e.component("highlightjs", t);
            },
          },
        };
      }
      const K = {
        "after:highlightBlock": ({ block: e, result: t, text: n }) => {
          const i = Z(e);
          if (!i.length) return;
          const r = document.createElement("div");
          (r.innerHTML = t.value),
            (t.value = (function (e, t, n) {
              let i = 0,
                r = "";
              const a = [];
              function o() {
                return e.length && t.length
                  ? e[0].offset !== t[0].offset
                    ? e[0].offset < t[0].offset
                      ? e
                      : t
                    : "start" === t[0].event
                    ? e
                    : t
                  : e.length
                  ? e
                  : t;
              }
              function l(e) {
                function t(e) {
                  return " " + e.nodeName + '="' + s(e.value) + '"';
                }
                r += "<" + W(e) + [].map.call(e.attributes, t).join("") + ">";
              }
              function c(e) {
                r += "</" + W(e) + ">";
              }
              function d(e) {
                ("start" === e.event ? l : c)(e.node);
              }
              for (; e.length || t.length; ) {
                let t = o();
                if (
                  ((r += s(n.substring(i, t[0].offset))),
                  (i = t[0].offset),
                  t === e)
                ) {
                  a.reverse().forEach(c);
                  do {
                    d(t.splice(0, 1)[0]), (t = o());
                  } while (t === e && t.length && t[0].offset === i);
                  a.reverse().forEach(l);
                } else
                  "start" === t[0].event ? a.push(t[0].node) : a.pop(),
                    d(t.splice(0, 1)[0]);
              }
              return r + s(n.substr(i));
            })(i, Z(r), n));
        },
      };
      function W(e) {
        return e.nodeName.toLowerCase();
      }
      function Z(e) {
        const t = [];
        return (
          (function e(n, i) {
            for (let r = n.firstChild; r; r = r.nextSibling)
              3 === r.nodeType
                ? (i += r.nodeValue.length)
                : 1 === r.nodeType &&
                  (t.push({ event: "start", offset: i, node: r }),
                  (i = e(r, i)),
                  W(r).match(/br|hr|img|input/) ||
                    t.push({ event: "stop", offset: i, node: r }));
            return i;
          })(e, 0),
          t
        );
      }
      const V = (e) => {
          console.error(e);
        },
        X = (e, ...t) => {
          console.log(`WARN: ${e}`, ...t);
        },
        Q = (e, t) => {
          console.log(`Deprecated as of ${e}. ${t}`);
        },
        J = s,
        Y = o,
        ee = Symbol("nomatch");
      var te = (function (e) {
        const t = Object.create(null),
          n = Object.create(null),
          r = [];
        let s = !0;
        const o = /(^(<[^>]+>|\t|)+|\n)/gm,
          l =
            "Could not find the language '{}', did you forget to load/include a language module?",
          c = { disableAutodetect: !0, name: "Plain text", contains: [] };
        let d = {
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          tabReplace: null,
          useBR: !1,
          languages: null,
          __emitter: u,
        };
        function g(e) {
          return d.noHighlightRe.test(e);
        }
        function m(e, t, n, i) {
          const r = { code: t, language: e };
          M("before:highlight", r);
          const a = r.result ? r.result : p(r.language, r.code, n, i);
          return (a.code = r.code), M("after:highlight", a), a;
        }
        function p(e, n, i, o) {
          const c = n;
          function u(e, t) {
            const n = v.case_insensitive ? t[0].toLowerCase() : t[0];
            return (
              Object.prototype.hasOwnProperty.call(e.keywords, n) &&
              e.keywords[n]
            );
          }
          function g() {
            null != x.subLanguage
              ? (function () {
                  if ("" === O) return;
                  let e = null;
                  if ("string" == typeof x.subLanguage) {
                    if (!t[x.subLanguage]) return void I.addText(O);
                    (e = p(x.subLanguage, O, !0, M[x.subLanguage])),
                      (M[x.subLanguage] = e.top);
                  } else e = b(O, x.subLanguage.length ? x.subLanguage : null);
                  x.relevance > 0 && (k += e.relevance),
                    I.addSublanguage(e.emitter, e.language);
                })()
              : (function () {
                  if (!x.keywords) return void I.addText(O);
                  let e = 0;
                  x.keywordPatternRe.lastIndex = 0;
                  let t = x.keywordPatternRe.exec(O),
                    n = "";
                  for (; t; ) {
                    n += O.substring(e, t.index);
                    const i = u(x, t);
                    if (i) {
                      const [e, r] = i;
                      I.addText(n), (n = ""), (k += r);
                      const a = v.classNameAliases[e] || e;
                      I.addKeyword(t[0], a);
                    } else n += t[0];
                    (e = x.keywordPatternRe.lastIndex),
                      (t = x.keywordPatternRe.exec(O));
                  }
                  (n += O.substr(e)), I.addText(n);
                })(),
              (O = "");
          }
          function m(e) {
            return (
              e.className &&
                I.openNode(v.classNameAliases[e.className] || e.className),
              (x = Object.create(e, { parent: { value: x } })),
              x
            );
          }
          function f(e, t, n) {
            let i = (function (e, t) {
              const n = e && e.exec(t);
              return n && 0 === n.index;
            })(e.endRe, n);
            if (i) {
              if (e["on:end"]) {
                const n = new a(e);
                e["on:end"](t, n), n.ignore && (i = !1);
              }
              if (i) {
                for (; e.endsParent && e.parent; ) e = e.parent;
                return e;
              }
            }
            if (e.endsWithParent) return f(e.parent, t, n);
          }
          function h(e) {
            return 0 === x.matcher.regexIndex
              ? ((O += e[0]), 1)
              : ((R = !0), 0);
          }
          function _(e) {
            const t = e[0],
              n = e.rule,
              i = new a(n),
              r = [n.__beforeBegin, n["on:begin"]];
            for (const n of r) if (n && (n(e, i), i.ignore)) return h(t);
            return (
              n &&
                n.endSameAsBegin &&
                (n.endRe = new RegExp(
                  t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
                  "m"
                )),
              n.skip
                ? (O += t)
                : (n.excludeBegin && (O += t),
                  g(),
                  n.returnBegin || n.excludeBegin || (O = t)),
              m(n),
              n.returnBegin ? 0 : t.length
            );
          }
          function E(e) {
            const t = e[0],
              n = c.substr(e.index),
              i = f(x, e, n);
            if (!i) return ee;
            const r = x;
            r.skip
              ? (O += t)
              : (r.returnEnd || r.excludeEnd || (O += t),
                g(),
                r.excludeEnd && (O = t));
            do {
              x.className && I.closeNode(),
                x.skip || x.subLanguage || (k += x.relevance),
                (x = x.parent);
            } while (x !== i.parent);
            return (
              i.starts &&
                (i.endSameAsBegin && (i.starts.endRe = i.endRe), m(i.starts)),
              r.returnEnd ? 0 : t.length
            );
          }
          let y = {};
          function w(t, n) {
            const r = n && n[0];
            if (((O += t), null == r)) return g(), 0;
            if (
              "begin" === y.type &&
              "end" === n.type &&
              y.index === n.index &&
              "" === r
            ) {
              if (((O += c.slice(n.index, n.index + 1)), !s)) {
                const t = new Error("0 width match regex");
                throw ((t.languageName = e), (t.badRule = y.rule), t);
              }
              return 1;
            }
            if (((y = n), "begin" === n.type)) return _(n);
            if ("illegal" === n.type && !i) {
              const e = new Error(
                'Illegal lexeme "' +
                  r +
                  '" for mode "' +
                  (x.className || "<unnamed>") +
                  '"'
              );
              throw ((e.mode = x), e);
            }
            if ("end" === n.type) {
              const e = E(n);
              if (e !== ee) return e;
            }
            if ("illegal" === n.type && "" === r) return 1;
            if (A > 1e5 && A > 3 * n.index) {
              throw new Error(
                "potential infinite loop, way more iterations than matches"
              );
            }
            return (O += r), r.length;
          }
          const v = N(e);
          if (!v)
            throw (
              (V(l.replace("{}", e)),
              new Error('Unknown language: "' + e + '"'))
            );
          const C = j(v, { plugins: r });
          let S = "",
            x = o || C;
          const M = {},
            I = new d.__emitter(d);
          !(function () {
            const e = [];
            for (let t = x; t !== v; t = t.parent)
              t.className && e.unshift(t.className);
            e.forEach((e) => I.openNode(e));
          })();
          let O = "",
            k = 0,
            T = 0,
            A = 0,
            R = !1;
          try {
            for (x.matcher.considerAll(); ; ) {
              A++,
                R ? (R = !1) : x.matcher.considerAll(),
                (x.matcher.lastIndex = T);
              const e = x.matcher.exec(c);
              if (!e) break;
              const t = w(c.substring(T, e.index), e);
              T = e.index + t;
            }
            return (
              w(c.substr(T)),
              I.closeAllNodes(),
              I.finalize(),
              (S = I.toHTML()),
              {
                relevance: Math.floor(k),
                value: S,
                language: e,
                illegal: !1,
                emitter: I,
                top: x,
              }
            );
          } catch (t) {
            if (t.message && t.message.includes("Illegal"))
              return {
                illegal: !0,
                illegalBy: {
                  msg: t.message,
                  context: c.slice(T - 100, T + 100),
                  mode: t.mode,
                },
                sofar: S,
                relevance: 0,
                value: J(c),
                emitter: I,
              };
            if (s)
              return {
                illegal: !1,
                relevance: 0,
                value: J(c),
                emitter: I,
                language: e,
                top: x,
                errorRaised: t,
              };
            throw t;
          }
        }
        function b(e, n) {
          n = n || d.languages || Object.keys(t);
          const i = (function (e) {
              const t = {
                relevance: 0,
                emitter: new d.__emitter(d),
                value: J(e),
                illegal: !1,
                top: c,
              };
              return t.emitter.addText(e), t;
            })(e),
            r = n
              .filter(N)
              .filter(x)
              .map((t) => p(t, e, !1));
          r.unshift(i);
          const a = r.sort((e, t) => {
              if (e.relevance !== t.relevance) return t.relevance - e.relevance;
              if (e.language && t.language) {
                if (N(e.language).supersetOf === t.language) return 1;
                if (N(t.language).supersetOf === e.language) return -1;
              }
              return 0;
            }),
            [s, o] = a,
            l = s;
          return (l.second_best = o), l;
        }
        const f = {
            "before:highlightBlock": ({ block: e }) => {
              d.useBR &&
                (e.innerHTML = e.innerHTML
                  .replace(/\n/g, "")
                  .replace(/<br[ /]*>/g, "\n"));
            },
            "after:highlightBlock": ({ result: e }) => {
              d.useBR && (e.value = e.value.replace(/\n/g, "<br>"));
            },
          },
          h = /^(<[^>]+>|\t)+/gm,
          _ = {
            "after:highlightBlock": ({ result: e }) => {
              d.tabReplace &&
                (e.value = e.value.replace(h, (e) =>
                  e.replace(/\t/g, d.tabReplace)
                ));
            },
          };
        function E(e) {
          let t = null;
          const i = (function (e) {
            let t = e.className + " ";
            t += e.parentNode ? e.parentNode.className : "";
            const n = d.languageDetectRe.exec(t);
            if (n) {
              const t = N(n[1]);
              return (
                t ||
                  (X(l.replace("{}", n[1])),
                  X("Falling back to no-highlight mode for this block.", e)),
                t ? n[1] : "no-highlight"
              );
            }
            return t.split(/\s+/).find((e) => g(e) || N(e));
          })(e);
          if (g(i)) return;
          M("before:highlightBlock", { block: e, language: i }), (t = e);
          const r = t.textContent,
            a = i ? m(i, r, !0) : b(r);
          M("after:highlightBlock", { block: e, result: a, text: r }),
            (e.innerHTML = a.value),
            (function (e, t, i) {
              const r = t ? n[t] : i;
              e.classList.add("hljs"), r && e.classList.add(r);
            })(e, i, a.language),
            (e.result = {
              language: a.language,
              re: a.relevance,
              relavance: a.relevance,
            }),
            a.second_best &&
              (e.second_best = {
                language: a.second_best.language,
                re: a.second_best.relevance,
                relavance: a.second_best.relevance,
              });
        }
        const y = () => {
          if (y.called) return;
          (y.called = !0),
            Q(
              "10.6.0",
              "initHighlighting() is deprecated.  Use highlightAll() instead."
            );
          document.querySelectorAll("pre code").forEach(E);
        };
        let w = !1,
          v = !1;
        function C() {
          if (!v) return void (w = !0);
          document.querySelectorAll("pre code").forEach(E);
        }
        function N(e) {
          return (e = (e || "").toLowerCase()), t[e] || t[n[e]];
        }
        function S(e, { languageName: t }) {
          "string" == typeof e && (e = [e]),
            e.forEach((e) => {
              n[e] = t;
            });
        }
        function x(e) {
          const t = N(e);
          return t && !t.disableAutodetect;
        }
        function M(e, t) {
          const n = e;
          r.forEach(function (e) {
            e[n] && e[n](t);
          });
        }
        "undefined" != typeof window &&
          window.addEventListener &&
          window.addEventListener(
            "DOMContentLoaded",
            function () {
              (v = !0), w && C();
            },
            !1
          ),
          Object.assign(e, {
            highlight: m,
            highlightAuto: b,
            highlightAll: C,
            fixMarkup: function (e) {
              return (
                Q("10.2.0", "fixMarkup will be removed entirely in v11.0"),
                Q(
                  "10.2.0",
                  "Please see https://github.com/highlightjs/highlight.js/issues/2534"
                ),
                (t = e),
                d.tabReplace || d.useBR
                  ? t.replace(o, (e) =>
                      "\n" === e
                        ? d.useBR
                          ? "<br>"
                          : e
                        : d.tabReplace
                        ? e.replace(/\t/g, d.tabReplace)
                        : e
                    )
                  : t
              );
              var t;
            },
            highlightBlock: E,
            configure: function (e) {
              e.useBR &&
                (Q("10.3.0", "'useBR' will be removed entirely in v11.0"),
                Q(
                  "10.3.0",
                  "Please see https://github.com/highlightjs/highlight.js/issues/2559"
                )),
                (d = Y(d, e));
            },
            initHighlighting: y,
            initHighlightingOnLoad: function () {
              Q(
                "10.6.0",
                "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."
              ),
                (w = !0);
            },
            registerLanguage: function (n, i) {
              let r = null;
              try {
                r = i(e);
              } catch (e) {
                if (
                  (V(
                    "Language definition for '{}' could not be registered.".replace(
                      "{}",
                      n
                    )
                  ),
                  !s)
                )
                  throw e;
                V(e), (r = c);
              }
              r.name || (r.name = n),
                (t[n] = r),
                (r.rawDefinition = i.bind(null, e)),
                r.aliases && S(r.aliases, { languageName: n });
            },
            listLanguages: function () {
              return Object.keys(t);
            },
            getLanguage: N,
            registerAliases: S,
            requireLanguage: function (e) {
              Q("10.4.0", "requireLanguage will be removed entirely in v11."),
                Q(
                  "10.4.0",
                  "Please see https://github.com/highlightjs/highlight.js/pull/2844"
                );
              const t = N(e);
              if (t) return t;
              throw new Error(
                "The '{}' language is required, but not loaded.".replace(
                  "{}",
                  e
                )
              );
            },
            autoDetection: x,
            inherit: Y,
            addPlugin: function (e) {
              r.push(e);
            },
            vuePlugin: H(e).VuePlugin,
          }),
          (e.debugMode = function () {
            s = !1;
          }),
          (e.safeMode = function () {
            s = !0;
          }),
          (e.versionString = "10.6.0");
        for (const e in D) "object" == typeof D[e] && i(D[e]);
        return (
          Object.assign(e, D), e.addPlugin(f), e.addPlugin(K), e.addPlugin(_), e
        );
      })({});
      e.exports = te;
    },
    178: function (e, t) {
      e.exports = function (e) {
        const t = {
          className: "number",
          begin: /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/,
        };
        return {
          name: "Apache config",
          aliases: ["apacheconf"],
          case_insensitive: !0,
          contains: [
            e.HASH_COMMENT_MODE,
            {
              className: "section",
              begin: /<\/?/,
              end: />/,
              contains: [
                t,
                { className: "number", begin: /:\d{1,5}/ },
                e.inherit(e.QUOTE_STRING_MODE, { relevance: 0 }),
              ],
            },
            {
              className: "attribute",
              begin: /\w+/,
              relevance: 0,
              keywords: {
                nomarkup:
                  "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername",
              },
              starts: {
                end: /$/,
                relevance: 0,
                keywords: { literal: "on off all deny allow" },
                contains: [
                  { className: "meta", begin: /\s\[/, end: /\]$/ },
                  {
                    className: "variable",
                    begin: /[\$%]\{/,
                    end: /\}/,
                    contains: [
                      "self",
                      { className: "number", begin: /[$%]\d+/ },
                    ],
                  },
                  t,
                  { className: "number", begin: /\d+/ },
                  e.QUOTE_STRING_MODE,
                ],
              },
            },
          ],
          illegal: /\S/,
        };
      };
    },
    180: function (e, t) {
      function n(...e) {
        return e
          .map((e) => {
            return (t = e) ? ("string" == typeof t ? t : t.source) : null;
            var t;
          })
          .join("");
      }
      e.exports = function (e) {
        const t = [
            { className: "strong", begin: /\*{2}([^\n]+?)\*{2}/ },
            {
              className: "strong",
              begin: n(
                /\*\*/,
                /((\*(?!\*)|\\[^\n]|[^*\n\\])+\n)+/,
                /(\*(?!\*)|\\[^\n]|[^*\n\\])*/,
                /\*\*/
              ),
              relevance: 0,
            },
            { className: "strong", begin: /\B\*(\S|\S[^\n]*?\S)\*(?!\w)/ },
            { className: "strong", begin: /\*[^\s]([^\n]+\n)+([^\n]+)\*/ },
          ],
          i = [
            { className: "emphasis", begin: /_{2}([^\n]+?)_{2}/ },
            {
              className: "emphasis",
              begin: n(
                /__/,
                /((_(?!_)|\\[^\n]|[^_\n\\])+\n)+/,
                /(_(?!_)|\\[^\n]|[^_\n\\])*/,
                /__/
              ),
              relevance: 0,
            },
            { className: "emphasis", begin: /\b_(\S|\S[^\n]*?\S)_(?!\w)/ },
            { className: "emphasis", begin: /_[^\s]([^\n]+\n)+([^\n]+)_/ },
            {
              className: "emphasis",
              begin: "\\B'(?!['\\s])",
              end: "(\\n{2}|')",
              contains: [{ begin: "\\\\'\\w", relevance: 0 }],
              relevance: 0,
            },
          ];
        return {
          name: "AsciiDoc",
          aliases: ["adoc"],
          contains: [
            e.COMMENT("^/{4,}\\n", "\\n/{4,}$", { relevance: 10 }),
            e.COMMENT("^//", "$", { relevance: 0 }),
            { className: "title", begin: "^\\.\\w.*$" },
            { begin: "^[=\\*]{4,}\\n", end: "\\n^[=\\*]{4,}$", relevance: 10 },
            {
              className: "section",
              relevance: 10,
              variants: [
                { begin: "^(={1,6})[ \t].+?([ \t]\\1)?$" },
                { begin: "^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$" },
              ],
            },
            {
              className: "meta",
              begin: "^:.+?:",
              end: "\\s",
              excludeEnd: !0,
              relevance: 10,
            },
            { className: "meta", begin: "^\\[.+?\\]$", relevance: 0 },
            {
              className: "quote",
              begin: "^_{4,}\\n",
              end: "\\n_{4,}$",
              relevance: 10,
            },
            {
              className: "code",
              begin: "^[\\-\\.]{4,}\\n",
              end: "\\n[\\-\\.]{4,}$",
              relevance: 10,
            },
            {
              begin: "^\\+{4,}\\n",
              end: "\\n\\+{4,}$",
              contains: [
                { begin: "<", end: ">", subLanguage: "xml", relevance: 0 },
              ],
              relevance: 10,
            },
            { className: "bullet", begin: "^(\\*+|-+|\\.+|[^\\n]+?::)\\s+" },
            {
              className: "symbol",
              begin: "^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+",
              relevance: 10,
            },
            { begin: /\\[*_`]/ },
            { begin: /\\\\\*{2}[^\n]*?\*{2}/ },
            { begin: /\\\\_{2}[^\n]*_{2}/ },
            { begin: /\\\\`{2}[^\n]*`{2}/ },
            { begin: /[:;}][*_`](?![*_`])/ },
            ...t,
            ...i,
            {
              className: "string",
              variants: [{ begin: "``.+?''" }, { begin: "`.+?'" }],
            },
            { className: "code", begin: /`{2}/, end: /(\n{2}|`{2})/ },
            { className: "code", begin: "(`.+?`|\\+.+?\\+)", relevance: 0 },
            { className: "code", begin: "^[ \\t]", end: "$", relevance: 0 },
            { begin: "^'{3,}[ \\t]*$", relevance: 10 },
            {
              begin:
                "(link:)?(http|https|ftp|file|irc|image:?):\\S+?\\[[^[]*?\\]",
              returnBegin: !0,
              contains: [
                { begin: "(link|image:?):", relevance: 0 },
                {
                  className: "link",
                  begin: "\\w",
                  end: "[^\\[]+",
                  relevance: 0,
                },
                {
                  className: "string",
                  begin: "\\[",
                  end: "\\]",
                  excludeBegin: !0,
                  excludeEnd: !0,
                  relevance: 0,
                },
              ],
              relevance: 10,
            },
          ],
        };
      };
    },
    181: function (e, t) {
      e.exports = function (e) {
        const t = { begin: "`[\\s\\S]" };
        return {
          name: "AutoHotkey",
          case_insensitive: !0,
          aliases: ["ahk"],
          keywords: {
            keyword:
              "Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group",
            literal: "true false NOT AND OR",
            built_in: "ComSpec Clipboard ClipboardAll ErrorLevel",
          },
          contains: [
            t,
            e.inherit(e.QUOTE_STRING_MODE, { contains: [t] }),
            e.COMMENT(";", "$", { relevance: 0 }),
            e.C_BLOCK_COMMENT_MODE,
            { className: "number", begin: e.NUMBER_RE, relevance: 0 },
            { className: "variable", begin: "%[a-zA-Z0-9#_$@]+%" },
            { className: "built_in", begin: "^\\s*\\w+\\s*(,|%)" },
            {
              className: "title",
              variants: [
                { begin: '^[^\\n";]+::(?!=)' },
                { begin: '^[^\\n";]+:(?!=)', relevance: 0 },
              ],
            },
            { className: "meta", begin: "^\\s*#\\w+", end: "$", relevance: 0 },
            { className: "built_in", begin: "A_[a-zA-Z0-9]+" },
            { begin: ",\\s*," },
          ],
        };
      };
    },
    182: function (e, t) {
      e.exports = function (e) {
        const t = {
            variants: [
              e.COMMENT(";", "$", { relevance: 0 }),
              e.COMMENT("#cs", "#ce"),
              e.COMMENT("#comments-start", "#comments-end"),
            ],
          },
          n = { begin: "\\$[A-z0-9_]+" },
          i = {
            className: "string",
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [{ begin: /""/, relevance: 0 }],
              },
              {
                begin: /'/,
                end: /'/,
                contains: [{ begin: /''/, relevance: 0 }],
              },
            ],
          },
          r = { variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE] };
        return {
          name: "AutoIt",
          case_insensitive: !0,
          illegal: /\/\*/,
          keywords: {
            keyword:
              "ByRef Case Const ContinueCase ContinueLoop Default Dim Do Else ElseIf EndFunc EndIf EndSelect EndSwitch EndWith Enum Exit ExitLoop For Func Global If In Local Next ReDim Return Select Static Step Switch Then To Until Volatile WEnd While With",
            built_in:
              "Abs ACos AdlibRegister AdlibUnRegister Asc AscW ASin Assign ATan AutoItSetOption AutoItWinGetTitle AutoItWinSetTitle Beep Binary BinaryLen BinaryMid BinaryToString BitAND BitNOT BitOR BitRotate BitShift BitXOR BlockInput Break Call CDTray Ceiling Chr ChrW ClipGet ClipPut ConsoleRead ConsoleWrite ConsoleWriteError ControlClick ControlCommand ControlDisable ControlEnable ControlFocus ControlGetFocus ControlGetHandle ControlGetPos ControlGetText ControlHide ControlListView ControlMove ControlSend ControlSetText ControlShow ControlTreeView Cos Dec DirCopy DirCreate DirGetSize DirMove DirRemove DllCall DllCallAddress DllCallbackFree DllCallbackGetPtr DllCallbackRegister DllClose DllOpen DllStructCreate DllStructGetData DllStructGetPtr DllStructGetSize DllStructSetData DriveGetDrive DriveGetFileSystem DriveGetLabel DriveGetSerial DriveGetType DriveMapAdd DriveMapDel DriveMapGet DriveSetLabel DriveSpaceFree DriveSpaceTotal DriveStatus EnvGet EnvSet EnvUpdate Eval Execute Exp FileChangeDir FileClose FileCopy FileCreateNTFSLink FileCreateShortcut FileDelete FileExists FileFindFirstFile FileFindNextFile FileFlush FileGetAttrib FileGetEncoding FileGetLongName FileGetPos FileGetShortcut FileGetShortName FileGetSize FileGetTime FileGetVersion FileInstall FileMove FileOpen FileOpenDialog FileRead FileReadLine FileReadToArray FileRecycle FileRecycleEmpty FileSaveDialog FileSelectFolder FileSetAttrib FileSetEnd FileSetPos FileSetTime FileWrite FileWriteLine Floor FtpSetProxy FuncName GUICreate GUICtrlCreateAvi GUICtrlCreateButton GUICtrlCreateCheckbox GUICtrlCreateCombo GUICtrlCreateContextMenu GUICtrlCreateDate GUICtrlCreateDummy GUICtrlCreateEdit GUICtrlCreateGraphic GUICtrlCreateGroup GUICtrlCreateIcon GUICtrlCreateInput GUICtrlCreateLabel GUICtrlCreateList GUICtrlCreateListView GUICtrlCreateListViewItem GUICtrlCreateMenu GUICtrlCreateMenuItem GUICtrlCreateMonthCal GUICtrlCreateObj GUICtrlCreatePic GUICtrlCreateProgress GUICtrlCreateRadio GUICtrlCreateSlider GUICtrlCreateTab GUICtrlCreateTabItem GUICtrlCreateTreeView GUICtrlCreateTreeViewItem GUICtrlCreateUpdown GUICtrlDelete GUICtrlGetHandle GUICtrlGetState GUICtrlRead GUICtrlRecvMsg GUICtrlRegisterListViewSort GUICtrlSendMsg GUICtrlSendToDummy GUICtrlSetBkColor GUICtrlSetColor GUICtrlSetCursor GUICtrlSetData GUICtrlSetDefBkColor GUICtrlSetDefColor GUICtrlSetFont GUICtrlSetGraphic GUICtrlSetImage GUICtrlSetLimit GUICtrlSetOnEvent GUICtrlSetPos GUICtrlSetResizing GUICtrlSetState GUICtrlSetStyle GUICtrlSetTip GUIDelete GUIGetCursorInfo GUIGetMsg GUIGetStyle GUIRegisterMsg GUISetAccelerators GUISetBkColor GUISetCoord GUISetCursor GUISetFont GUISetHelp GUISetIcon GUISetOnEvent GUISetState GUISetStyle GUIStartGroup GUISwitch Hex HotKeySet HttpSetProxy HttpSetUserAgent HWnd InetClose InetGet InetGetInfo InetGetSize InetRead IniDelete IniRead IniReadSection IniReadSectionNames IniRenameSection IniWrite IniWriteSection InputBox Int IsAdmin IsArray IsBinary IsBool IsDeclared IsDllStruct IsFloat IsFunc IsHWnd IsInt IsKeyword IsNumber IsObj IsPtr IsString Log MemGetStats Mod MouseClick MouseClickDrag MouseDown MouseGetCursor MouseGetPos MouseMove MouseUp MouseWheel MsgBox Number ObjCreate ObjCreateInterface ObjEvent ObjGet ObjName OnAutoItExitRegister OnAutoItExitUnRegister Ping PixelChecksum PixelGetColor PixelSearch ProcessClose ProcessExists ProcessGetStats ProcessList ProcessSetPriority ProcessWait ProcessWaitClose ProgressOff ProgressOn ProgressSet Ptr Random RegDelete RegEnumKey RegEnumVal RegRead RegWrite Round Run RunAs RunAsWait RunWait Send SendKeepActive SetError SetExtended ShellExecute ShellExecuteWait Shutdown Sin Sleep SoundPlay SoundSetWaveVolume SplashImageOn SplashOff SplashTextOn Sqrt SRandom StatusbarGetText StderrRead StdinWrite StdioClose StdoutRead String StringAddCR StringCompare StringFormat StringFromASCIIArray StringInStr StringIsAlNum StringIsAlpha StringIsASCII StringIsDigit StringIsFloat StringIsInt StringIsLower StringIsSpace StringIsUpper StringIsXDigit StringLeft StringLen StringLower StringMid StringRegExp StringRegExpReplace StringReplace StringReverse StringRight StringSplit StringStripCR StringStripWS StringToASCIIArray StringToBinary StringTrimLeft StringTrimRight StringUpper Tan TCPAccept TCPCloseSocket TCPConnect TCPListen TCPNameToIP TCPRecv TCPSend TCPShutdown, UDPShutdown TCPStartup, UDPStartup TimerDiff TimerInit ToolTip TrayCreateItem TrayCreateMenu TrayGetMsg TrayItemDelete TrayItemGetHandle TrayItemGetState TrayItemGetText TrayItemSetOnEvent TrayItemSetState TrayItemSetText TraySetClick TraySetIcon TraySetOnEvent TraySetPauseIcon TraySetState TraySetToolTip TrayTip UBound UDPBind UDPCloseSocket UDPOpen UDPRecv UDPSend VarGetType WinActivate WinActive WinClose WinExists WinFlash WinGetCaretPos WinGetClassList WinGetClientSize WinGetHandle WinGetPos WinGetProcess WinGetState WinGetText WinGetTitle WinKill WinList WinMenuSelectItem WinMinimizeAll WinMinimizeAllUndo WinMove WinSetOnTop WinSetState WinSetTitle WinSetTrans WinWait",
            literal: "True False And Null Not Or",
          },
          contains: [
            t,
            n,
            i,
            r,
            {
              className: "meta",
              begin: "#",
              end: "$",
              keywords: {
                "meta-keyword":
                  "comments include include-once NoTrayIcon OnAutoItStartRegister pragma compile RequireAdmin",
              },
              contains: [
                { begin: /\\\n/, relevance: 0 },
                {
                  beginKeywords: "include",
                  keywords: { "meta-keyword": "include" },
                  end: "$",
                  contains: [
                    i,
                    {
                      className: "meta-string",
                      variants: [
                        { begin: "<", end: ">" },
                        {
                          begin: /"/,
                          end: /"/,
                          contains: [{ begin: /""/, relevance: 0 }],
                        },
                        {
                          begin: /'/,
                          end: /'/,
                          contains: [{ begin: /''/, relevance: 0 }],
                        },
                      ],
                    },
                  ],
                },
                i,
                t,
              ],
            },
            { className: "symbol", begin: "@[A-z0-9_]+" },
            {
              className: "function",
              beginKeywords: "Func",
              end: "$",
              illegal: "\\$|\\[|%",
              contains: [
                e.UNDERSCORE_TITLE_MODE,
                {
                  className: "params",
                  begin: "\\(",
                  end: "\\)",
                  contains: [n, i, r],
                },
              ],
            },
          ],
        };
      };
    },
    183: function (e, t) {
      e.exports = function (e) {
        return {
          name: "Awk",
          keywords: {
            keyword:
              "BEGIN END if else while do for in break continue delete next nextfile function func exit|10",
          },
          contains: [
            {
              className: "variable",
              variants: [
                { begin: /\$[\w\d#@][\w\d_]*/ },
                { begin: /\$\{(.*?)\}/ },
              ],
            },
            {
              className: "string",
              contains: [e.BACKSLASH_ESCAPE],
              variants: [
                { begin: /(u|b)?r?'''/, end: /'''/, relevance: 10 },
                { begin: /(u|b)?r?"""/, end: /"""/, relevance: 10 },
                { begin: /(u|r|ur)'/, end: /'/, relevance: 10 },
                { begin: /(u|r|ur)"/, end: /"/, relevance: 10 },
                { begin: /(b|br)'/, end: /'/ },
                { begin: /(b|br)"/, end: /"/ },
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE,
              ],
            },
            e.REGEXP_MODE,
            e.HASH_COMMENT_MODE,
            e.NUMBER_MODE,
          ],
        };
      };
    },
    184: function (e, t) {
      function n(...e) {
        return e
          .map((e) => {
            return (t = e) ? ("string" == typeof t ? t : t.source) : null;
            var t;
          })
          .join("");
      }
      e.exports = function (e) {
        const t = {},
          i = {
            begin: /\$\{/,
            end: /\}/,
            contains: ["self", { begin: /:-/, contains: [t] }],
          };
        Object.assign(t, {
          className: "variable",
          variants: [
            { begin: n(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])") },
            i,
          ],
        });
        const r = {
            className: "subst",
            begin: /\$\(/,
            end: /\)/,
            contains: [e.BACKSLASH_ESCAPE],
          },
          a = {
            begin: /<<-?\s*(?=\w+)/,
            starts: {
              contains: [
                e.END_SAME_AS_BEGIN({
                  begin: /(\w+)/,
                  end: /(\w+)/,
                  className: "string",
                }),
              ],
            },
          },
          s = {
            className: "string",
            begin: /"/,
            end: /"/,
            contains: [e.BACKSLASH_ESCAPE, t, r],
          };
        r.contains.push(s);
        const o = {
            begin: /\$\(\(/,
            end: /\)\)/,
            contains: [
              { begin: /\d+#[0-9a-f]+/, className: "number" },
              e.NUMBER_MODE,
              t,
            ],
          },
          l = e.SHEBANG({
            binary: `(${[
              "fish",
              "bash",
              "zsh",
              "sh",
              "csh",
              "ksh",
              "tcsh",
              "dash",
              "scsh",
            ].join("|")})`,
            relevance: 10,
          }),
          c = {
            className: "function",
            begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            returnBegin: !0,
            contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
            relevance: 0,
          };
        return {
          name: "Bash",
          aliases: ["sh", "zsh"],
          keywords: {
            $pattern: /\b[a-z._-]+\b/,
            keyword:
              "if then else elif fi for while in do done case esac function",
            literal: "true false",
            built_in:
              "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
          },
          contains: [
            l,
            e.SHEBANG(),
            c,
            o,
            e.HASH_COMMENT_MODE,
            a,
            s,
            { className: "", begin: /\\"/ },
            { className: "string", begin: /'/, end: /'/ },
            t,
          ],
        };
      };
    },
    185: function (e, t) {
      function n(e) {
        return (function (...e) {
          return e
            .map((e) =>
              (function (e) {
                return e ? ("string" == typeof e ? e : e.source) : null;
              })(e)
            )
            .join("");
        })("(", e, ")?");
      }
      e.exports = function (e) {
        const t = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }),
          i = "decltype\\(auto\\)",
          r = "[a-zA-Z_]\\w*::",
          a =
            "(decltype\\(auto\\)|" +
            n(r) +
            "[a-zA-Z_]\\w*" +
            n("<[^<>]+>") +
            ")",
          s = { className: "keyword", begin: "\\b[a-z\\d_]*_t\\b" },
          o = {
            className: "string",
            variants: [
              {
                begin: '(u8?|U|L)?"',
                end: '"',
                illegal: "\\n",
                contains: [e.BACKSLASH_ESCAPE],
              },
              {
                begin:
                  "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                end: "'",
                illegal: ".",
              },
              e.END_SAME_AS_BEGIN({
                begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                end: /\)([^()\\ ]{0,16})"/,
              }),
            ],
          },
          l = {
            className: "number",
            variants: [
              { begin: "\\b(0b[01']+)" },
              {
                begin:
                  "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)",
              },
              {
                begin:
                  "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
              },
            ],
            relevance: 0,
          },
          c = {
            className: "meta",
            begin: /#\s*[a-z]+\b/,
            end: /$/,
            keywords: {
              "meta-keyword":
                "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
            },
            contains: [
              { begin: /\\\n/, relevance: 0 },
              e.inherit(o, { className: "meta-string" }),
              {
                className: "meta-string",
                begin: /<.*?>/,
                end: /$/,
                illegal: "\\n",
              },
              t,
              e.C_BLOCK_COMMENT_MODE,
            ],
          },
          d = { className: "title", begin: n(r) + e.IDENT_RE, relevance: 0 },
          u = n(r) + e.IDENT_RE + "\\s*\\(",
          g = {
            keyword:
              "int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
            built_in:
              "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",
            literal: "true false nullptr NULL",
          },
          m = [c, s, t, e.C_BLOCK_COMMENT_MODE, l, o],
          p = {
            variants: [
              { begin: /=/, end: /;/ },
              { begin: /\(/, end: /\)/ },
              { beginKeywords: "new throw return else", end: /;/ },
            ],
            keywords: g,
            contains: m.concat([
              {
                begin: /\(/,
                end: /\)/,
                keywords: g,
                contains: m.concat(["self"]),
                relevance: 0,
              },
            ]),
            relevance: 0,
          },
          b = {
            className: "function",
            begin: "(" + a + "[\\*&\\s]+)+" + u,
            returnBegin: !0,
            end: /[{;=]/,
            excludeEnd: !0,
            keywords: g,
            illegal: /[^\w\s\*&:<>.]/,
            contains: [
              { begin: i, keywords: g, relevance: 0 },
              { begin: u, returnBegin: !0, contains: [d], relevance: 0 },
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: g,
                relevance: 0,
                contains: [
                  t,
                  e.C_BLOCK_COMMENT_MODE,
                  o,
                  l,
                  s,
                  {
                    begin: /\(/,
                    end: /\)/,
                    keywords: g,
                    relevance: 0,
                    contains: ["self", t, e.C_BLOCK_COMMENT_MODE, o, l, s],
                  },
                ],
              },
              s,
              t,
              e.C_BLOCK_COMMENT_MODE,
              c,
            ],
          };
        return {
          name: "C",
          aliases: ["c", "h"],
          keywords: g,
          disableAutodetect: !0,
          illegal: "</",
          contains: [].concat(p, b, m, [
            c,
            {
              begin:
                "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
              end: ">",
              keywords: g,
              contains: ["self", s],
            },
            { begin: e.IDENT_RE + "::", keywords: g },
            {
              className: "class",
              beginKeywords: "enum class struct union",
              end: /[{;:<>=]/,
              contains: [{ beginKeywords: "final class struct" }, e.TITLE_MODE],
            },
          ]),
          exports: { preprocessor: c, strings: o, keywords: g },
        };
      };
    },
    186: function (e, t) {
      e.exports = function (e) {
        return {
          name: "CMake",
          aliases: ["cmake.in"],
          case_insensitive: !0,
          keywords: {
            keyword:
              "break cmake_host_system_information cmake_minimum_required cmake_parse_arguments cmake_policy configure_file continue elseif else endforeach endfunction endif endmacro endwhile execute_process file find_file find_library find_package find_path find_program foreach function get_cmake_property get_directory_property get_filename_component get_property if include include_guard list macro mark_as_advanced math message option return separate_arguments set_directory_properties set_property set site_name string unset variable_watch while add_compile_definitions add_compile_options add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_link_options add_subdirectory add_test aux_source_directory build_command create_test_sourcelist define_property enable_language enable_testing export fltk_wrap_ui get_source_file_property get_target_property get_test_property include_directories include_external_msproject include_regular_expression install link_directories link_libraries load_cache project qt_wrap_cpp qt_wrap_ui remove_definitions set_source_files_properties set_target_properties set_tests_properties source_group target_compile_definitions target_compile_features target_compile_options target_include_directories target_link_directories target_link_libraries target_link_options target_sources try_compile try_run ctest_build ctest_configure ctest_coverage ctest_empty_binary_directory ctest_memcheck ctest_read_custom_files ctest_run_script ctest_sleep ctest_start ctest_submit ctest_test ctest_update ctest_upload build_name exec_program export_library_dependencies install_files install_programs install_targets load_command make_directory output_required_files remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or not command policy target test exists is_newer_than is_directory is_symlink is_absolute matches less greater equal less_equal greater_equal strless strgreater strequal strless_equal strgreater_equal version_less version_greater version_equal version_less_equal version_greater_equal in_list defined",
          },
          contains: [
            { className: "variable", begin: /\$\{/, end: /\}/ },
            e.HASH_COMMENT_MODE,
            e.QUOTE_STRING_MODE,
            e.NUMBER_MODE,
          ],
        };
      };
    },
    187: function (e, t) {
      const n = [
          "as",
          "in",
          "of",
          "if",
          "for",
          "while",
          "finally",
          "var",
          "new",
          "function",
          "do",
          "return",
          "void",
          "else",
          "break",
          "catch",
          "instanceof",
          "with",
          "throw",
          "case",
          "default",
          "try",
          "switch",
          "continue",
          "typeof",
          "delete",
          "let",
          "yield",
          "const",
          "class",
          "debugger",
          "async",
          "await",
          "static",
          "import",
          "from",
          "export",
          "extends",
        ],
        i = ["true", "false", "null", "undefined", "NaN", "Infinity"],
        r = [].concat(
          [
            "setInterval",
            "setTimeout",
            "clearInterval",
            "clearTimeout",
            "require",
            "exports",
            "eval",
            "isFinite",
            "isNaN",
            "parseFloat",
            "parseInt",
            "decodeURI",
            "decodeURIComponent",
            "encodeURI",
            "encodeURIComponent",
            "escape",
            "unescape",
          ],
          [
            "arguments",
            "this",
            "super",
            "console",
            "window",
            "document",
            "localStorage",
            "module",
            "global",
          ],
          [
            "Intl",
            "DataView",
            "Number",
            "Math",
            "Date",
            "String",
            "RegExp",
            "Object",
            "Function",
            "Boolean",
            "Error",
            "Symbol",
            "Set",
            "Map",
            "WeakSet",
            "WeakMap",
            "Proxy",
            "Reflect",
            "JSON",
            "Promise",
            "Float64Array",
            "Int16Array",
            "Int32Array",
            "Int8Array",
            "Uint16Array",
            "Uint32Array",
            "Float32Array",
            "Array",
            "Uint8Array",
            "Uint8ClampedArray",
            "ArrayBuffer",
          ],
          [
            "EvalError",
            "InternalError",
            "RangeError",
            "ReferenceError",
            "SyntaxError",
            "TypeError",
            "URIError",
          ]
        );
      e.exports = function (e) {
        const t = {
          keyword: n
            .concat([
              "then",
              "unless",
              "until",
              "loop",
              "by",
              "when",
              "and",
              "or",
              "is",
              "isnt",
              "not",
            ])
            .filter(
              ((a = ["var", "const", "let", "function", "static"]),
              (e) => !a.includes(e))
            ),
          literal: i.concat(["yes", "no", "on", "off"]),
          built_in: r.concat(["npm", "print"]),
        };
        var a;
        const s = "[A-Za-z$_][0-9A-Za-z$_]*",
          o = { className: "subst", begin: /#\{/, end: /\}/, keywords: t },
          l = [
            e.BINARY_NUMBER_MODE,
            e.inherit(e.C_NUMBER_MODE, {
              starts: { end: "(\\s*/)?", relevance: 0 },
            }),
            {
              className: "string",
              variants: [
                { begin: /'''/, end: /'''/, contains: [e.BACKSLASH_ESCAPE] },
                { begin: /'/, end: /'/, contains: [e.BACKSLASH_ESCAPE] },
                { begin: /"""/, end: /"""/, contains: [e.BACKSLASH_ESCAPE, o] },
                { begin: /"/, end: /"/, contains: [e.BACKSLASH_ESCAPE, o] },
              ],
            },
            {
              className: "regexp",
              variants: [
                {
                  begin: "///",
                  end: "///",
                  contains: [o, e.HASH_COMMENT_MODE],
                },
                { begin: "//[gim]{0,3}(?=\\W)", relevance: 0 },
                { begin: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/ },
              ],
            },
            { begin: "@" + s },
            {
              subLanguage: "javascript",
              excludeBegin: !0,
              excludeEnd: !0,
              variants: [
                { begin: "```", end: "```" },
                { begin: "`", end: "`" },
              ],
            },
          ];
        o.contains = l;
        const c = e.inherit(e.TITLE_MODE, { begin: s }),
          d = "(\\(.*\\)\\s*)?\\B[-=]>",
          u = {
            className: "params",
            begin: "\\([^\\(]",
            returnBegin: !0,
            contains: [
              {
                begin: /\(/,
                end: /\)/,
                keywords: t,
                contains: ["self"].concat(l),
              },
            ],
          };
        return {
          name: "CoffeeScript",
          aliases: ["coffee", "cson", "iced"],
          keywords: t,
          illegal: /\/\*/,
          contains: l.concat([
            e.COMMENT("###", "###"),
            e.HASH_COMMENT_MODE,
            {
              className: "function",
              begin: "^\\s*" + s + "\\s*=\\s*" + d,
              end: "[-=]>",
              returnBegin: !0,
              contains: [c, u],
            },
            {
              begin: /[:\(,=]\s*/,
              relevance: 0,
              contains: [
                {
                  className: "function",
                  begin: d,
                  end: "[-=]>",
                  returnBegin: !0,
                  contains: [u],
                },
              ],
            },
            {
              className: "class",
              beginKeywords: "class",
              end: "$",
              illegal: /[:="\[\]]/,
              contains: [
                {
                  beginKeywords: "extends",
                  endsWithParent: !0,
                  illegal: /[:="\[\]]/,
                  contains: [c],
                },
                c,
              ],
            },
            {
              begin: s + ":",
              end: ":",
              returnBegin: !0,
              returnEnd: !0,
              relevance: 0,
            },
          ]),
        };
      };
    },
    188: function (e, t) {
      function n(e) {
        return (function (...e) {
          return e
            .map((e) =>
              (function (e) {
                return e ? ("string" == typeof e ? e : e.source) : null;
              })(e)
            )
            .join("");
        })("(", e, ")?");
      }
      e.exports = function (e) {
        const t = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }),
          i = "decltype\\(auto\\)",
          r = "[a-zA-Z_]\\w*::",
          a =
            "(decltype\\(auto\\)|" +
            n(r) +
            "[a-zA-Z_]\\w*" +
            n("<[^<>]+>") +
            ")",
          s = { className: "keyword", begin: "\\b[a-z\\d_]*_t\\b" },
          o = {
            className: "string",
            variants: [
              {
                begin: '(u8?|U|L)?"',
                end: '"',
                illegal: "\\n",
                contains: [e.BACKSLASH_ESCAPE],
              },
              {
                begin:
                  "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                end: "'",
                illegal: ".",
              },
              e.END_SAME_AS_BEGIN({
                begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                end: /\)([^()\\ ]{0,16})"/,
              }),
            ],
          },
          l = {
            className: "number",
            variants: [
              { begin: "\\b(0b[01']+)" },
              {
                begin:
                  "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)",
              },
              {
                begin:
                  "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
              },
            ],
            relevance: 0,
          },
          c = {
            className: "meta",
            begin: /#\s*[a-z]+\b/,
            end: /$/,
            keywords: {
              "meta-keyword":
                "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
            },
            contains: [
              { begin: /\\\n/, relevance: 0 },
              e.inherit(o, { className: "meta-string" }),
              {
                className: "meta-string",
                begin: /<.*?>/,
                end: /$/,
                illegal: "\\n",
              },
              t,
              e.C_BLOCK_COMMENT_MODE,
            ],
          },
          d = { className: "title", begin: n(r) + e.IDENT_RE, relevance: 0 },
          u = n(r) + e.IDENT_RE + "\\s*\\(",
          g = {
            keyword:
              "int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
            built_in:
              "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",
            literal: "true false nullptr NULL",
          },
          m = [c, s, t, e.C_BLOCK_COMMENT_MODE, l, o],
          p = {
            variants: [
              { begin: /=/, end: /;/ },
              { begin: /\(/, end: /\)/ },
              { beginKeywords: "new throw return else", end: /;/ },
            ],
            keywords: g,
            contains: m.concat([
              {
                begin: /\(/,
                end: /\)/,
                keywords: g,
                contains: m.concat(["self"]),
                relevance: 0,
              },
            ]),
            relevance: 0,
          },
          b = {
            className: "function",
            begin: "(" + a + "[\\*&\\s]+)+" + u,
            returnBegin: !0,
            end: /[{;=]/,
            excludeEnd: !0,
            keywords: g,
            illegal: /[^\w\s\*&:<>.]/,
            contains: [
              { begin: i, keywords: g, relevance: 0 },
              { begin: u, returnBegin: !0, contains: [d], relevance: 0 },
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: g,
                relevance: 0,
                contains: [
                  t,
                  e.C_BLOCK_COMMENT_MODE,
                  o,
                  l,
                  s,
                  {
                    begin: /\(/,
                    end: /\)/,
                    keywords: g,
                    relevance: 0,
                    contains: ["self", t, e.C_BLOCK_COMMENT_MODE, o, l, s],
                  },
                ],
              },
              s,
              t,
              e.C_BLOCK_COMMENT_MODE,
              c,
            ],
          };
        return {
          name: "C++",
          aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
          keywords: g,
          illegal: "</",
          contains: [].concat(p, b, m, [
            c,
            {
              begin:
                "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
              end: ">",
              keywords: g,
              contains: ["self", s],
            },
            { begin: e.IDENT_RE + "::", keywords: g },
            {
              className: "class",
              beginKeywords: "enum class struct union",
              end: /[{;:<>=]/,
              contains: [{ beginKeywords: "final class struct" }, e.TITLE_MODE],
            },
          ]),
          exports: { preprocessor: c, strings: o, keywords: g },
        };
      };
    },
    189: function (e, t) {
      e.exports = function (e) {
        var t = {
            keyword: [
              "abstract",
              "as",
              "base",
              "break",
              "case",
              "class",
              "const",
              "continue",
              "do",
              "else",
              "event",
              "explicit",
              "extern",
              "finally",
              "fixed",
              "for",
              "foreach",
              "goto",
              "if",
              "implicit",
              "in",
              "interface",
              "internal",
              "is",
              "lock",
              "namespace",
              "new",
              "operator",
              "out",
              "override",
              "params",
              "private",
              "protected",
              "public",
              "readonly",
              "record",
              "ref",
              "return",
              "sealed",
              "sizeof",
              "stackalloc",
              "static",
              "struct",
              "switch",
              "this",
              "throw",
              "try",
              "typeof",
              "unchecked",
              "unsafe",
              "using",
              "virtual",
              "void",
              "volatile",
              "while",
            ].concat([
              "add",
              "alias",
              "and",
              "ascending",
              "async",
              "await",
              "by",
              "descending",
              "equals",
              "from",
              "get",
              "global",
              "group",
              "init",
              "into",
              "join",
              "let",
              "nameof",
              "not",
              "notnull",
              "on",
              "or",
              "orderby",
              "partial",
              "remove",
              "select",
              "set",
              "unmanaged",
              "value|0",
              "var",
              "when",
              "where",
              "with",
              "yield",
            ]),
            built_in: [
              "bool",
              "byte",
              "char",
              "decimal",
              "delegate",
              "double",
              "dynamic",
              "enum",
              "float",
              "int",
              "long",
              "nint",
              "nuint",
              "object",
              "sbyte",
              "short",
              "string",
              "ulong",
              "unit",
              "ushort",
            ],
            literal: ["default", "false", "null", "true"],
          },
          n = e.inherit(e.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" }),
          i = {
            className: "number",
            variants: [
              { begin: "\\b(0b[01']+)" },
              {
                begin:
                  "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)",
              },
              {
                begin:
                  "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
              },
            ],
            relevance: 0,
          },
          r = {
            className: "string",
            begin: '@"',
            end: '"',
            contains: [{ begin: '""' }],
          },
          a = e.inherit(r, { illegal: /\n/ }),
          s = { className: "subst", begin: /\{/, end: /\}/, keywords: t },
          o = e.inherit(s, { illegal: /\n/ }),
          l = {
            className: "string",
            begin: /\$"/,
            end: '"',
            illegal: /\n/,
            contains: [
              { begin: /\{\{/ },
              { begin: /\}\}/ },
              e.BACKSLASH_ESCAPE,
              o,
            ],
          },
          c = {
            className: "string",
            begin: /\$@"/,
            end: '"',
            contains: [
              { begin: /\{\{/ },
              { begin: /\}\}/ },
              { begin: '""' },
              s,
            ],
          },
          d = e.inherit(c, {
            illegal: /\n/,
            contains: [
              { begin: /\{\{/ },
              { begin: /\}\}/ },
              { begin: '""' },
              o,
            ],
          });
        (s.contains = [
          c,
          l,
          r,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          i,
          e.C_BLOCK_COMMENT_MODE,
        ]),
          (o.contains = [
            d,
            l,
            a,
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            i,
            e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ }),
          ]);
        var u = {
            variants: [c, l, r, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
          },
          g = {
            begin: "<",
            end: ">",
            contains: [{ beginKeywords: "in out" }, n],
          },
          m =
            e.IDENT_RE +
            "(<" +
            e.IDENT_RE +
            "(\\s*,\\s*" +
            e.IDENT_RE +
            ")*>)?(\\[\\])?",
          p = { begin: "@" + e.IDENT_RE, relevance: 0 };
        return {
          name: "C#",
          aliases: ["cs", "c#"],
          keywords: t,
          illegal: /::/,
          contains: [
            e.COMMENT("///", "$", {
              returnBegin: !0,
              contains: [
                {
                  className: "doctag",
                  variants: [
                    { begin: "///", relevance: 0 },
                    { begin: "\x3c!--|--\x3e" },
                    { begin: "</?", end: ">" },
                  ],
                },
              ],
            }),
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            {
              className: "meta",
              begin: "#",
              end: "$",
              keywords: {
                "meta-keyword":
                  "if else elif endif define undef warning error line region endregion pragma checksum",
              },
            },
            u,
            i,
            {
              beginKeywords: "class interface",
              relevance: 0,
              end: /[{;=]/,
              illegal: /[^\s:,]/,
              contains: [
                { beginKeywords: "where class" },
                n,
                g,
                e.C_LINE_COMMENT_MODE,
                e.C_BLOCK_COMMENT_MODE,
              ],
            },
            {
              beginKeywords: "namespace",
              relevance: 0,
              end: /[{;=]/,
              illegal: /[^\s:]/,
              contains: [n, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
            },
            {
              beginKeywords: "record",
              relevance: 0,
              end: /[{;=]/,
              illegal: /[^\s:]/,
              contains: [n, g, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
            },
            {
              className: "meta",
              begin: "^\\s*\\[",
              excludeBegin: !0,
              end: "\\]",
              excludeEnd: !0,
              contains: [{ className: "meta-string", begin: /"/, end: /"/ }],
            },
            { beginKeywords: "new return throw await else", relevance: 0 },
            {
              className: "function",
              begin: "(" + m + "\\s+)+" + e.IDENT_RE + "\\s*(<.+>\\s*)?\\(",
              returnBegin: !0,
              end: /\s*[{;=]/,
              excludeEnd: !0,
              keywords: t,
              contains: [
                {
                  beginKeywords: [
                    "public",
                    "private",
                    "protected",
                    "static",
                    "internal",
                    "protected",
                    "abstract",
                    "async",
                    "extern",
                    "override",
                    "unsafe",
                    "virtual",
                    "new",
                    "sealed",
                    "partial",
                  ].join(" "),
                  relevance: 0,
                },
                {
                  begin: e.IDENT_RE + "\\s*(<.+>\\s*)?\\(",
                  returnBegin: !0,
                  contains: [e.TITLE_MODE, g],
                  relevance: 0,
                },
                {
                  className: "params",
                  begin: /\(/,
                  end: /\)/,
                  excludeBegin: !0,
                  excludeEnd: !0,
                  keywords: t,
                  relevance: 0,
                  contains: [u, i, e.C_BLOCK_COMMENT_MODE],
                },
                e.C_LINE_COMMENT_MODE,
                e.C_BLOCK_COMMENT_MODE,
              ],
            },
            p,
          ],
        };
      };
    },
    190: function (e, t) {
      e.exports = function (e) {
        return {
          name: "CSP",
          case_insensitive: !1,
          keywords: {
            $pattern: "[a-zA-Z][a-zA-Z0-9_-]*",
            keyword:
              "base-uri child-src connect-src default-src font-src form-action frame-ancestors frame-src img-src media-src object-src plugin-types report-uri sandbox script-src style-src",
          },
          contains: [
            { className: "string", begin: "'", end: "'" },
            {
              className: "attribute",
              begin: "^Content",
              end: ":",
              excludeEnd: !0,
            },
          ],
        };
      };
    },
    191: function (e, t) {
      const n = [
          "a",
          "abbr",
          "address",
          "article",
          "aside",
          "audio",
          "b",
          "blockquote",
          "body",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "dd",
          "del",
          "details",
          "dfn",
          "div",
          "dl",
          "dt",
          "em",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "hgroup",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "legend",
          "li",
          "main",
          "mark",
          "menu",
          "nav",
          "object",
          "ol",
          "p",
          "q",
          "quote",
          "samp",
          "section",
          "span",
          "strong",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "ul",
          "var",
          "video",
        ],
        i = [
          "any-hover",
          "any-pointer",
          "aspect-ratio",
          "color",
          "color-gamut",
          "color-index",
          "device-aspect-ratio",
          "device-height",
          "device-width",
          "display-mode",
          "forced-colors",
          "grid",
          "height",
          "hover",
          "inverted-colors",
          "monochrome",
          "orientation",
          "overflow-block",
          "overflow-inline",
          "pointer",
          "prefers-color-scheme",
          "prefers-contrast",
          "prefers-reduced-motion",
          "prefers-reduced-transparency",
          "resolution",
          "scan",
          "scripting",
          "update",
          "width",
          "min-width",
          "max-width",
          "min-height",
          "max-height",
        ],
        r = [
          "active",
          "any-link",
          "blank",
          "checked",
          "current",
          "default",
          "defined",
          "dir",
          "disabled",
          "drop",
          "empty",
          "enabled",
          "first",
          "first-child",
          "first-of-type",
          "fullscreen",
          "future",
          "focus",
          "focus-visible",
          "focus-within",
          "has",
          "host",
          "host-context",
          "hover",
          "indeterminate",
          "in-range",
          "invalid",
          "is",
          "lang",
          "last-child",
          "last-of-type",
          "left",
          "link",
          "local-link",
          "not",
          "nth-child",
          "nth-col",
          "nth-last-child",
          "nth-last-col",
          "nth-last-of-type",
          "nth-of-type",
          "only-child",
          "only-of-type",
          "optional",
          "out-of-range",
          "past",
          "placeholder-shown",
          "read-only",
          "read-write",
          "required",
          "right",
          "root",
          "scope",
          "target",
          "target-within",
          "user-invalid",
          "valid",
          "visited",
          "where",
        ],
        a = [
          "after",
          "backdrop",
          "before",
          "cue",
          "cue-region",
          "first-letter",
          "first-line",
          "grammar-error",
          "marker",
          "part",
          "placeholder",
          "selection",
          "slotted",
          "spelling-error",
        ],
        s = [
          "align-content",
          "align-items",
          "align-self",
          "animation",
          "animation-delay",
          "animation-direction",
          "animation-duration",
          "animation-fill-mode",
          "animation-iteration-count",
          "animation-name",
          "animation-play-state",
          "animation-timing-function",
          "auto",
          "backface-visibility",
          "background",
          "background-attachment",
          "background-clip",
          "background-color",
          "background-image",
          "background-origin",
          "background-position",
          "background-repeat",
          "background-size",
          "border",
          "border-bottom",
          "border-bottom-color",
          "border-bottom-left-radius",
          "border-bottom-right-radius",
          "border-bottom-style",
          "border-bottom-width",
          "border-collapse",
          "border-color",
          "border-image",
          "border-image-outset",
          "border-image-repeat",
          "border-image-slice",
          "border-image-source",
          "border-image-width",
          "border-left",
          "border-left-color",
          "border-left-style",
          "border-left-width",
          "border-radius",
          "border-right",
          "border-right-color",
          "border-right-style",
          "border-right-width",
          "border-spacing",
          "border-style",
          "border-top",
          "border-top-color",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-top-style",
          "border-top-width",
          "border-width",
          "bottom",
          "box-decoration-break",
          "box-shadow",
          "box-sizing",
          "break-after",
          "break-before",
          "break-inside",
          "caption-side",
          "clear",
          "clip",
          "clip-path",
          "color",
          "column-count",
          "column-fill",
          "column-gap",
          "column-rule",
          "column-rule-color",
          "column-rule-style",
          "column-rule-width",
          "column-span",
          "column-width",
          "columns",
          "content",
          "counter-increment",
          "counter-reset",
          "cursor",
          "direction",
          "display",
          "empty-cells",
          "filter",
          "flex",
          "flex-basis",
          "flex-direction",
          "flex-flow",
          "flex-grow",
          "flex-shrink",
          "flex-wrap",
          "float",
          "font",
          "font-display",
          "font-family",
          "font-feature-settings",
          "font-kerning",
          "font-language-override",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-variant-ligatures",
          "font-variation-settings",
          "font-weight",
          "height",
          "hyphens",
          "icon",
          "image-orientation",
          "image-rendering",
          "image-resolution",
          "ime-mode",
          "inherit",
          "initial",
          "justify-content",
          "left",
          "letter-spacing",
          "line-height",
          "list-style",
          "list-style-image",
          "list-style-position",
          "list-style-type",
          "margin",
          "margin-bottom",
          "margin-left",
          "margin-right",
          "margin-top",
          "marks",
          "mask",
          "max-height",
          "max-width",
          "min-height",
          "min-width",
          "nav-down",
          "nav-index",
          "nav-left",
          "nav-right",
          "nav-up",
          "none",
          "normal",
          "object-fit",
          "object-position",
          "opacity",
          "order",
          "orphans",
          "outline",
          "outline-color",
          "outline-offset",
          "outline-style",
          "outline-width",
          "overflow",
          "overflow-wrap",
          "overflow-x",
          "overflow-y",
          "padding",
          "padding-bottom",
          "padding-left",
          "padding-right",
          "padding-top",
          "page-break-after",
          "page-break-before",
          "page-break-inside",
          "perspective",
          "perspective-origin",
          "pointer-events",
          "position",
          "quotes",
          "resize",
          "right",
          "src",
          "tab-size",
          "table-layout",
          "text-align",
          "text-align-last",
          "text-decoration",
          "text-decoration-color",
          "text-decoration-line",
          "text-decoration-style",
          "text-indent",
          "text-overflow",
          "text-rendering",
          "text-shadow",
          "text-transform",
          "text-underline-position",
          "top",
          "transform",
          "transform-origin",
          "transform-style",
          "transition",
          "transition-delay",
          "transition-duration",
          "transition-property",
          "transition-timing-function",
          "unicode-bidi",
          "vertical-align",
          "visibility",
          "white-space",
          "widows",
          "width",
          "word-break",
          "word-spacing",
          "word-wrap",
          "z-index",
        ].reverse();
      function o(e) {
        return (function (...e) {
          return e
            .map((e) =>
              (function (e) {
                return e ? ("string" == typeof e ? e : e.source) : null;
              })(e)
            )
            .join("");
        })("(?=", e, ")");
      }
      e.exports = function (e) {
        const t = ((e) => ({
            IMPORTANT: { className: "meta", begin: "!important" },
            HEXCOLOR: {
              className: "number",
              begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})",
            },
            ATTRIBUTE_SELECTOR_MODE: {
              className: "selector-attr",
              begin: /\[/,
              end: /\]/,
              illegal: "$",
              contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
            },
          }))(e),
          l = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
        return {
          name: "CSS",
          case_insensitive: !0,
          illegal: /[=|'\$]/,
          keywords: { keyframePosition: "from to" },
          classNameAliases: { keyframePosition: "selector-tag" },
          contains: [
            e.C_BLOCK_COMMENT_MODE,
            { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ },
            e.CSS_NUMBER_MODE,
            {
              className: "selector-id",
              begin: /#[A-Za-z0-9_-]+/,
              relevance: 0,
            },
            {
              className: "selector-class",
              begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
              relevance: 0,
            },
            t.ATTRIBUTE_SELECTOR_MODE,
            {
              className: "selector-pseudo",
              variants: [
                { begin: ":(" + r.join("|") + ")" },
                { begin: "::(" + a.join("|") + ")" },
              ],
            },
            { className: "attribute", begin: "\\b(" + s.join("|") + ")\\b" },
            {
              begin: ":",
              end: "[;}]",
              contains: [
                t.HEXCOLOR,
                t.IMPORTANT,
                e.CSS_NUMBER_MODE,
                ...l,
                {
                  begin: /(url|data-uri)\(/,
                  end: /\)/,
                  relevance: 0,
                  keywords: { built_in: "url data-uri" },
                  contains: [
                    {
                      className: "string",
                      begin: /[^)]/,
                      endsWithParent: !0,
                      excludeEnd: !0,
                    },
                  ],
                },
                { className: "built_in", begin: /[\w-]+(?=\()/ },
              ],
            },
            {
              begin: o(/@/),
              end: "[{;]",
              relevance: 0,
              illegal: /:/,
              contains: [
                { className: "keyword", begin: /@-?\w[\w]*(-\w+)*/ },
                {
                  begin: /\s/,
                  endsWithParent: !0,
                  excludeEnd: !0,
                  relevance: 0,
                  keywords: {
                    $pattern: /[a-z-]+/,
                    keyword: "and or not only",
                    attribute: i.join(" "),
                  },
                  contains: [
                    { begin: /[a-z-]+(?=:)/, className: "attribute" },
                    ...l,
                    e.CSS_NUMBER_MODE,
                  ],
                },
              ],
            },
            { className: "selector-tag", begin: "\\b(" + n.join("|") + ")\\b" },
          ],
        };
      };
    },
    193: function (e, t) {
      e.exports = function (e) {
        const t = {
            className: "subst",
            variants: [{ begin: "\\$[A-Za-z0-9_]+" }],
          },
          n = {
            className: "subst",
            variants: [{ begin: /\$\{/, end: /\}/ }],
            keywords: "true false null this is new super",
          },
          i = {
            className: "string",
            variants: [
              { begin: "r'''", end: "'''" },
              { begin: 'r"""', end: '"""' },
              { begin: "r'", end: "'", illegal: "\\n" },
              { begin: 'r"', end: '"', illegal: "\\n" },
              {
                begin: "'''",
                end: "'''",
                contains: [e.BACKSLASH_ESCAPE, t, n],
              },
              {
                begin: '"""',
                end: '"""',
                contains: [e.BACKSLASH_ESCAPE, t, n],
              },
              {
                begin: "'",
                end: "'",
                illegal: "\\n",
                contains: [e.BACKSLASH_ESCAPE, t, n],
              },
              {
                begin: '"',
                end: '"',
                illegal: "\\n",
                contains: [e.BACKSLASH_ESCAPE, t, n],
              },
            ],
          };
        n.contains = [e.C_NUMBER_MODE, i];
        const r = [
            "Comparable",
            "DateTime",
            "Duration",
            "Function",
            "Iterable",
            "Iterator",
            "List",
            "Map",
            "Match",
            "Object",
            "Pattern",
            "RegExp",
            "Set",
            "Stopwatch",
            "String",
            "StringBuffer",
            "StringSink",
            "Symbol",
            "Type",
            "Uri",
            "bool",
            "double",
            "int",
            "num",
            "Element",
            "ElementList",
          ],
          a = r.map((e) => `${e}?`);
        return {
          name: "Dart",
          keywords: {
            keyword:
              "abstract as assert async await break case catch class const continue covariant default deferred do dynamic else enum export extends extension external factory false final finally for Function get hide if implements import in inferface is late library mixin new null on operator part required rethrow return set show static super switch sync this throw true try typedef var void while with yield",
            built_in: r
              .concat(a)
              .concat([
                "Never",
                "Null",
                "dynamic",
                "print",
                "document",
                "querySelector",
                "querySelectorAll",
                "window",
              ]),
            $pattern: /[A-Za-z][A-Za-z0-9_]*\??/,
          },
          contains: [
            i,
            e.COMMENT(/\/\*\*(?!\/)/, /\*\//, {
              subLanguage: "markdown",
              relevance: 0,
            }),
            e.COMMENT(/\/{3,} ?/, /$/, {
              contains: [
                { subLanguage: "markdown", begin: ".", end: "$", relevance: 0 },
              ],
            }),
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            {
              className: "class",
              beginKeywords: "class interface",
              end: /\{/,
              excludeEnd: !0,
              contains: [
                { beginKeywords: "extends implements" },
                e.UNDERSCORE_TITLE_MODE,
              ],
            },
            e.C_NUMBER_MODE,
            { className: "meta", begin: "@[A-Za-z]+" },
            { begin: "=>" },
          ],
        };
      };
    },
    194: function (e, t) {
      e.exports = function (e) {
        return {
          name: "Diff",
          aliases: ["patch"],
          contains: [
            {
              className: "meta",
              relevance: 10,
              variants: [
                { begin: /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/ },
                { begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/ },
                { begin: /^--- +\d+,\d+ +----$/ },
              ],
            },
            {
              className: "comment",
              variants: [
                { begin: /Index: /, end: /$/ },
                { begin: /^index/, end: /$/ },
                { begin: /={3,}/, end: /$/ },
                { begin: /^-{3}/, end: /$/ },
                { begin: /^\*{3} /, end: /$/ },
                { begin: /^\+{3}/, end: /$/ },
                { begin: /^\*{15}$/ },
                { begin: /^diff --git/, end: /$/ },
              ],
            },
            { className: "addition", begin: /^\+/, end: /$/ },
            { className: "deletion", begin: /^-/, end: /$/ },
            { className: "addition", begin: /^!/, end: /$/ },
          ],
        };
      };
    },
    195: function (e, t) {
      e.exports = function (e) {
        const t = {
          begin: /\|[A-Za-z]+:?/,
          keywords: {
            name: "truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone",
          },
          contains: [e.QUOTE_STRING_MODE, e.APOS_STRING_MODE],
        };
        return {
          name: "Django",
          aliases: ["jinja"],
          case_insensitive: !0,
          subLanguage: "xml",
          contains: [
            e.COMMENT(/\{%\s*comment\s*%\}/, /\{%\s*endcomment\s*%\}/),
            e.COMMENT(/\{#/, /#\}/),
            {
              className: "template-tag",
              begin: /\{%/,
              end: /%\}/,
              contains: [
                {
                  className: "name",
                  begin: /\w+/,
                  keywords: {
                    name: "comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim",
                  },
                  starts: {
                    endsWithParent: !0,
                    keywords: "in by as",
                    contains: [t],
                    relevance: 0,
                  },
                },
              ],
            },
            {
              className: "template-variable",
              begin: /\{\{/,
              end: /\}\}/,
              contains: [t],
            },
          ],
        };
      };
    },
    196: function (e, t) {
      e.exports = function (e) {
        return {
          name: "Dockerfile",
          aliases: ["docker"],
          case_insensitive: !0,
          keywords: "from maintainer expose env arg user onbuild stopsignal",
          contains: [
            e.HASH_COMMENT_MODE,
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            e.NUMBER_MODE,
            {
              beginKeywords:
                "run cmd entrypoint volume add copy workdir label healthcheck shell",
              starts: { end: /[^\\]$/, subLanguage: "bash" },
            },
          ],
          illegal: "</",
        };
      };
    },
    197: function (e, t) {
      e.exports = function (e) {
        const t = e.COMMENT(/^\s*@?rem\b/, /$/, { relevance: 10 });
        return {
          name: "Batch file (DOS)",
          aliases: ["bat", "cmd"],
          case_insensitive: !0,
          illegal: /\/\*/,
          keywords: {
            keyword:
              "if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq",
            built_in:
              "prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux shift cd dir echo setlocal endlocal set pause copy append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color comp compact convert date dir diskcomp diskcopy doskey erase fs find findstr format ftype graftabl help keyb label md mkdir mode more move path pause print popd pushd promt rd recover rem rename replace restore rmdir shift sort start subst time title tree type ver verify vol ping net ipconfig taskkill xcopy ren del",
          },
          contains: [
            { className: "variable", begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/ },
            {
              className: "function",
              begin: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",
              end: "goto:eof",
              contains: [
                e.inherit(e.TITLE_MODE, {
                  begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*",
                }),
                t,
              ],
            },
            { className: "number", begin: "\\b\\d+", relevance: 0 },
            t,
          ],
        };
      };
    },
  },
]);