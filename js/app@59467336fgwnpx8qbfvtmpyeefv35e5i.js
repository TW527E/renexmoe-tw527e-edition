(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    179: function (e, n) {
      function t(e) {
        return e ? ("string" == typeof e ? e : e.source) : null;
      }
      function a(e) {
        return i("(?=", e, ")");
      }
      function i(...e) {
        return e.map((e) => t(e)).join("");
      }
      function r(...e) {
        return "(" + e.map((e) => t(e)).join("|") + ")";
      }
      e.exports = function (e) {
        const n = i(/[A-Z_]/, i("(", /[A-Z0-9_.-]*:/, ")?"), /[A-Z0-9_.-]*/),
          t = {
            className: "symbol",
            begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/,
          },
          s = {
            begin: /\s/,
            contains: [
              {
                className: "meta-keyword",
                begin: /#?[a-z_][a-z1-9_-]+/,
                illegal: /\n/,
              },
            ],
          },
          o = e.inherit(s, { begin: /\(/, end: /\)/ }),
          l = e.inherit(e.APOS_STRING_MODE, { className: "meta-string" }),
          c = e.inherit(e.QUOTE_STRING_MODE, { className: "meta-string" }),
          d = {
            endsWithParent: !0,
            illegal: /</,
            relevance: 0,
            contains: [
              { className: "attr", begin: /[A-Za-z0-9._:-]+/, relevance: 0 },
              {
                begin: /=\s*/,
                relevance: 0,
                contains: [
                  {
                    className: "string",
                    endsParent: !0,
                    variants: [
                      { begin: /"/, end: /"/, contains: [t] },
                      { begin: /'/, end: /'/, contains: [t] },
                      { begin: /[^\s"'=<>`]+/ },
                    ],
                  },
                ],
              },
            ],
          };
        return {
          name: "HTML, XML",
          aliases: [
            "html",
            "xhtml",
            "rss",
            "atom",
            "xjb",
            "xsd",
            "xsl",
            "plist",
            "wsf",
            "svg",
          ],
          case_insensitive: !0,
          contains: [
            {
              className: "meta",
              begin: /<![a-z]/,
              end: />/,
              relevance: 10,
              contains: [
                s,
                c,
                l,
                o,
                {
                  begin: /\[/,
                  end: /\]/,
                  contains: [
                    {
                      className: "meta",
                      begin: /<![a-z]/,
                      end: />/,
                      contains: [s, o, c, l],
                    },
                  ],
                },
              ],
            },
            e.COMMENT(/<!--/, /-->/, { relevance: 10 }),
            { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
            t,
            { className: "meta", begin: /<\?xml/, end: /\?>/, relevance: 10 },
            {
              className: "tag",
              begin: /<style(?=\s|>)/,
              end: />/,
              keywords: { name: "style" },
              contains: [d],
              starts: {
                end: /<\/style>/,
                returnEnd: !0,
                subLanguage: ["css", "xml"],
              },
            },
            {
              className: "tag",
              begin: /<script(?=\s|>)/,
              end: />/,
              keywords: { name: "script" },
              contains: [d],
              starts: {
                end: /<\/script>/,
                returnEnd: !0,
                subLanguage: ["javascript", "handlebars", "xml"],
              },
            },
            { className: "tag", begin: /<>|<\/>/ },
            {
              className: "tag",
              begin: i(/</, a(i(n, r(/\/>/, />/, /\s/)))),
              end: /\/?>/,
              contains: [
                { className: "name", begin: n, relevance: 0, starts: d },
              ],
            },
            {
              className: "tag",
              begin: i(/<\//, a(i(n, />/))),
              contains: [
                { className: "name", begin: n, relevance: 0 },
                { begin: />/, relevance: 0 },
              ],
            },
          ],
        };
      };
    },
    198: function (e, n) {
      function t(...e) {
        return e
          .map((e) => {
            return (n = e) ? ("string" == typeof n ? n : n.source) : null;
            var n;
          })
          .join("");
      }
      e.exports = function (e) {
        const n =
            "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",
          a = {
            keyword:
              "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__",
            built_in: "proc lambda",
            literal: "true false nil",
          },
          i = { className: "doctag", begin: "@[A-Za-z]+" },
          r = { begin: "#<", end: ">" },
          s = [
            e.COMMENT("#", "$", { contains: [i] }),
            e.COMMENT("^=begin", "^=end", { contains: [i], relevance: 10 }),
            e.COMMENT("^__END__", "\\n$"),
          ],
          o = { className: "subst", begin: /#\{/, end: /\}/, keywords: a },
          l = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE, o],
            variants: [
              { begin: /'/, end: /'/ },
              { begin: /"/, end: /"/ },
              { begin: /`/, end: /`/ },
              { begin: /%[qQwWx]?\(/, end: /\)/ },
              { begin: /%[qQwWx]?\[/, end: /\]/ },
              { begin: /%[qQwWx]?\{/, end: /\}/ },
              { begin: /%[qQwWx]?</, end: />/ },
              { begin: /%[qQwWx]?\//, end: /\// },
              { begin: /%[qQwWx]?%/, end: /%/ },
              { begin: /%[qQwWx]?-/, end: /-/ },
              { begin: /%[qQwWx]?\|/, end: /\|/ },
              { begin: /\B\?(\\\d{1,3})/ },
              { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
              { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
              {
                begin:
                  /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/,
              },
              { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
              { begin: /\B\?\\?\S/ },
              {
                begin: /<<[-~]?'?(\w+)\n(?:[^\n]*\n)*?\s*\1\b/,
                returnBegin: !0,
                contains: [
                  { begin: /<<[-~]?'?/ },
                  e.END_SAME_AS_BEGIN({
                    begin: /(\w+)/,
                    end: /(\w+)/,
                    contains: [e.BACKSLASH_ESCAPE, o],
                  }),
                ],
              },
            ],
          },
          c = "[0-9](_?[0-9])*",
          d = {
            className: "number",
            relevance: 0,
            variants: [
              {
                begin: `\\b([1-9](_?[0-9])*|0)(\\.(${c}))?([eE][+-]?(${c})|r)?i?\\b`,
              },
              { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
              { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
              { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
              { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
              { begin: "\\b0(_?[0-7])+r?i?\\b" },
            ],
          },
          u = {
            className: "params",
            begin: "\\(",
            end: "\\)",
            endsParent: !0,
            keywords: a,
          },
          m = [
            l,
            {
              className: "class",
              beginKeywords: "class module",
              end: "$|;",
              illegal: /=/,
              contains: [
                e.inherit(e.TITLE_MODE, {
                  begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?",
                }),
                {
                  begin: "<\\s*",
                  contains: [
                    {
                      begin: "(" + e.IDENT_RE + "::)?" + e.IDENT_RE,
                      relevance: 0,
                    },
                  ],
                },
              ].concat(s),
            },
            {
              className: "function",
              begin: t(/def\s*/, ((b = n + "\\s*(\\(|;|$)"), t("(?=", b, ")"))),
              relevance: 0,
              keywords: "def",
              end: "$|;",
              contains: [e.inherit(e.TITLE_MODE, { begin: n }), u].concat(s),
            },
            { begin: e.IDENT_RE + "::" },
            {
              className: "symbol",
              begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
              relevance: 0,
            },
            {
              className: "symbol",
              begin: ":(?!\\s)",
              contains: [l, { begin: n }],
              relevance: 0,
            },
            d,
            {
              className: "variable",
              begin:
                "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])",
            },
            {
              className: "params",
              begin: /\|/,
              end: /\|/,
              relevance: 0,
              keywords: a,
            },
            {
              begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
              keywords: "unless",
              contains: [
                {
                  className: "regexp",
                  contains: [e.BACKSLASH_ESCAPE, o],
                  illegal: /\n/,
                  variants: [
                    { begin: "/", end: "/[a-z]*" },
                    { begin: /%r\{/, end: /\}[a-z]*/ },
                    { begin: "%r\\(", end: "\\)[a-z]*" },
                    { begin: "%r!", end: "![a-z]*" },
                    { begin: "%r\\[", end: "\\][a-z]*" },
                  ],
                },
              ].concat(r, s),
              relevance: 0,
            },
          ].concat(r, s);
        var b;
        (o.contains = m), (u.contains = m);
        const g = [
          { begin: /^\s*=>/, starts: { end: "$", contains: m } },
          {
            className: "meta",
            begin:
              "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
            starts: { end: "$", contains: m },
          },
        ];
        return (
          s.unshift(r),
          {
            name: "Ruby",
            aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
            keywords: a,
            illegal: /\/\*/,
            contains: [e.SHEBANG({ binary: "ruby" })]
              .concat(g)
              .concat(s)
              .concat(m),
          }
        );
      };
    },
    238: function (e, n) {
      function t(...e) {
        return e
          .map((e) => {
            return (n = e) ? ("string" == typeof n ? n : n.source) : null;
            var n;
          })
          .join("");
      }
      e.exports = function (e) {
        const n = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/;
        return {
          name: "R",
          illegal: /->/,
          keywords: {
            $pattern: n,
            keyword: "function if in break next repeat else for while",
            literal:
              "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
            built_in:
              "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm",
          },
          compilerExtensions: [
            (e, n) => {
              if (!e.beforeMatch) return;
              if (e.starts)
                throw new Error("beforeMatch cannot be used with starts");
              const a = Object.assign({}, e);
              Object.keys(e).forEach((n) => {
                delete e[n];
              }),
                (e.begin = t(a.beforeMatch, t("(?=", a.begin, ")"))),
                (e.starts = {
                  relevance: 0,
                  contains: [Object.assign(a, { endsParent: !0 })],
                }),
                (e.relevance = 0),
                delete a.beforeMatch;
            },
          ],
          contains: [
            e.COMMENT(/#'/, /$/, {
              contains: [
                {
                  className: "doctag",
                  begin: "@examples",
                  starts: {
                    contains: [
                      { begin: /\n/ },
                      { begin: /#'\s*(?=@[a-zA-Z]+)/, endsParent: !0 },
                      { begin: /#'/, end: /$/, excludeBegin: !0 },
                    ],
                  },
                },
                {
                  className: "doctag",
                  begin: "@param",
                  end: /$/,
                  contains: [
                    {
                      className: "variable",
                      variants: [{ begin: n }, { begin: /`(?:\\.|[^`\\])+`/ }],
                      endsParent: !0,
                    },
                  ],
                },
                { className: "doctag", begin: /@[a-zA-Z]+/ },
                { className: "meta-keyword", begin: /\\[a-zA-Z]+/ },
              ],
            }),
            e.HASH_COMMENT_MODE,
            {
              className: "string",
              contains: [e.BACKSLASH_ESCAPE],
              variants: [
                e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\(/, end: /\)(-*)"/ }),
                e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\{/, end: /\}(-*)"/ }),
                e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\[/, end: /\](-*)"/ }),
                e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\(/, end: /\)(-*)'/ }),
                e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\{/, end: /\}(-*)'/ }),
                e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\[/, end: /\](-*)'/ }),
                { begin: '"', end: '"', relevance: 0 },
                { begin: "'", end: "'", relevance: 0 },
              ],
            },
            {
              className: "number",
              relevance: 0,
              beforeMatch: /([^a-zA-Z0-9._])/,
              variants: [
                { match: /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/ },
                { match: /0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/ },
                { match: /(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/ },
              ],
            },
            { begin: "%", end: "%" },
            { begin: t(/[a-zA-Z][a-zA-Z_0-9]*/, "\\s+<-\\s+") },
            { begin: "`", end: "`", contains: [{ begin: /\\./ }] },
          ],
        };
      };
    },
    239: function (e, n) {
      e.exports = function (e) {
        return {
          name: "RenderMan RSL",
          keywords: {
            keyword:
              "float color point normal vector matrix while for if do return else break extern continue",
            built_in:
              "abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp faceforward filterstep floor format fresnel incident length lightsource log match max min mod noise normalize ntransform opposite option phong pnoise pow printf ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan texture textureinfo trace transform vtransform xcomp ycomp zcomp",
          },
          illegal: "</",
          contains: [
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE,
            e.C_NUMBER_MODE,
            { className: "meta", begin: "#", end: "$" },
            {
              className: "class",
              beginKeywords: "surface displacement light volume imager",
              end: "\\(",
            },
            { beginKeywords: "illuminate illuminance gather", end: "\\(" },
          ],
        };
      };
    },
    240: function (e, n) {
      e.exports = function (e) {
        const n = "([ui](8|16|32|64|128|size)|f(32|64))?",
          t =
            "drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!";
        return {
          name: "Rust",
          aliases: ["rs"],
          keywords: {
            $pattern: e.IDENT_RE + "!?",
            keyword:
              "abstract as async await become box break const continue crate do dyn else enum extern false final fn for if impl in let loop macro match mod move mut override priv pub ref return self Self static struct super trait true try type typeof unsafe unsized use virtual where while yield",
            literal: "true false Some None Ok Err",
            built_in: t,
          },
          illegal: "</",
          contains: [
            e.C_LINE_COMMENT_MODE,
            e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
            e.inherit(e.QUOTE_STRING_MODE, { begin: /b?"/, illegal: null }),
            {
              className: "string",
              variants: [
                { begin: /r(#*)"(.|\n)*?"\1(?!#)/ },
                { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ },
              ],
            },
            { className: "symbol", begin: /'[a-zA-Z_][a-zA-Z0-9_]*/ },
            {
              className: "number",
              variants: [
                { begin: "\\b0b([01_]+)" + n },
                { begin: "\\b0o([0-7_]+)" + n },
                { begin: "\\b0x([A-Fa-f0-9_]+)" + n },
                {
                  begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + n,
                },
              ],
              relevance: 0,
            },
            {
              className: "function",
              beginKeywords: "fn",
              end: "(\\(|<)",
              excludeEnd: !0,
              contains: [e.UNDERSCORE_TITLE_MODE],
            },
            {
              className: "meta",
              begin: "#!?\\[",
              end: "\\]",
              contains: [{ className: "meta-string", begin: /"/, end: /"/ }],
            },
            {
              className: "class",
              beginKeywords: "type",
              end: ";",
              contains: [
                e.inherit(e.UNDERSCORE_TITLE_MODE, { endsParent: !0 }),
              ],
              illegal: "\\S",
            },
            {
              className: "class",
              beginKeywords: "trait enum struct union",
              end: /\{/,
              contains: [
                e.inherit(e.UNDERSCORE_TITLE_MODE, { endsParent: !0 }),
              ],
              illegal: "[\\w\\d]",
            },
            { begin: e.IDENT_RE + "::", keywords: { built_in: t } },
            { begin: "->" },
          ],
        };
      };
    },
    241: function (e, n) {
      e.exports = function (e) {
        const n = {
            className: "subst",
            variants: [
              { begin: "\\$[A-Za-z0-9_]+" },
              { begin: /\$\{/, end: /\}/ },
            ],
          },
          t = {
            className: "string",
            variants: [
              { begin: '"""', end: '"""' },
              {
                begin: '"',
                end: '"',
                illegal: "\\n",
                contains: [e.BACKSLASH_ESCAPE],
              },
              {
                begin: '[a-z]+"',
                end: '"',
                illegal: "\\n",
                contains: [e.BACKSLASH_ESCAPE, n],
              },
              {
                className: "string",
                begin: '[a-z]+"""',
                end: '"""',
                contains: [n],
                relevance: 10,
              },
            ],
          },
          a = {
            className: "type",
            begin: "\\b[A-Z][A-Za-z0-9_]*",
            relevance: 0,
          },
          i = {
            className: "title",
            begin:
              /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
            relevance: 0,
          },
          r = {
            className: "class",
            beginKeywords: "class object trait type",
            end: /[:={\[\n;]/,
            excludeEnd: !0,
            contains: [
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              { beginKeywords: "extends with", relevance: 10 },
              {
                begin: /\[/,
                end: /\]/,
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0,
                contains: [a],
              },
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0,
                contains: [a],
              },
              i,
            ],
          },
          s = {
            className: "function",
            beginKeywords: "def",
            end: /[:={\[(\n;]/,
            excludeEnd: !0,
            contains: [i],
          };
        return {
          name: "Scala",
          keywords: {
            literal: "true false null",
            keyword:
              "type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit",
          },
          contains: [
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            t,
            { className: "symbol", begin: "'\\w[\\w\\d_]*(?!')" },
            a,
            s,
            r,
            e.C_NUMBER_MODE,
            { className: "meta", begin: "@[A-Za-z]+" },
          ],
        };
      };
    },
    242: function (e, n) {
      e.exports = function (e) {
        const n = "[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",
          t = "(-|\\+)?\\d+([./]\\d+)?",
          a = {
            $pattern: n,
            "builtin-name":
              "case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?",
          },
          i = { className: "literal", begin: "(#t|#f|#\\\\" + n + "|#\\\\.)" },
          r = {
            className: "number",
            variants: [
              { begin: t, relevance: 0 },
              {
                begin: "(-|\\+)?\\d+([./]\\d+)?[+\\-](-|\\+)?\\d+([./]\\d+)?i",
                relevance: 0,
              },
              { begin: "#b[0-1]+(/[0-1]+)?" },
              { begin: "#o[0-7]+(/[0-7]+)?" },
              { begin: "#x[0-9a-f]+(/[0-9a-f]+)?" },
            ],
          },
          s = e.QUOTE_STRING_MODE,
          o = [
            e.COMMENT(";", "$", { relevance: 0 }),
            e.COMMENT("#\\|", "\\|#"),
          ],
          l = { begin: n, relevance: 0 },
          c = { className: "symbol", begin: "'" + n },
          d = { endsWithParent: !0, relevance: 0 },
          u = {
            variants: [{ begin: /'/ }, { begin: "`" }],
            contains: [
              { begin: "\\(", end: "\\)", contains: ["self", i, s, r, l, c] },
            ],
          },
          m = { className: "name", relevance: 0, begin: n, keywords: a },
          b = {
            variants: [
              { begin: "\\(", end: "\\)" },
              { begin: "\\[", end: "\\]" },
            ],
            contains: [
              {
                begin: /lambda/,
                endsWithParent: !0,
                returnBegin: !0,
                contains: [
                  m,
                  {
                    endsParent: !0,
                    variants: [
                      { begin: /\(/, end: /\)/ },
                      { begin: /\[/, end: /\]/ },
                    ],
                    contains: [l],
                  },
                ],
              },
              m,
              d,
            ],
          };
        return (
          (d.contains = [i, r, s, l, c, u, b].concat(o)),
          {
            name: "Scheme",
            illegal: /\S/,
            contains: [e.SHEBANG(), r, s, c, u, b].concat(o),
          }
        );
      };
    },
    243: function (e, n) {
      const t = [
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
        a = [
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
        i = [
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
        r = [
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
      e.exports = function (e) {
        const n = ((e) => ({
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
          o = r,
          l = i,
          c = "@[a-z-]+",
          d = {
            className: "variable",
            begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b",
          };
        return {
          name: "SCSS",
          case_insensitive: !0,
          illegal: "[=/|']",
          contains: [
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            {
              className: "selector-id",
              begin: "#[A-Za-z0-9_-]+",
              relevance: 0,
            },
            {
              className: "selector-class",
              begin: "\\.[A-Za-z0-9_-]+",
              relevance: 0,
            },
            n.ATTRIBUTE_SELECTOR_MODE,
            {
              className: "selector-tag",
              begin: "\\b(" + t.join("|") + ")\\b",
              relevance: 0,
            },
            { className: "selector-pseudo", begin: ":(" + l.join("|") + ")" },
            { className: "selector-pseudo", begin: "::(" + o.join("|") + ")" },
            d,
            { begin: /\(/, end: /\)/, contains: [e.CSS_NUMBER_MODE] },
            { className: "attribute", begin: "\\b(" + s.join("|") + ")\\b" },
            {
              begin:
                "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b",
            },
            {
              begin: ":",
              end: ";",
              contains: [
                d,
                n.HEXCOLOR,
                e.CSS_NUMBER_MODE,
                e.QUOTE_STRING_MODE,
                e.APOS_STRING_MODE,
                n.IMPORTANT,
              ],
            },
            {
              begin: "@(page|font-face)",
              lexemes: c,
              keywords: "@page @font-face",
            },
            {
              begin: "@",
              end: "[{;]",
              returnBegin: !0,
              keywords: {
                $pattern: /[a-z-]+/,
                keyword: "and or not only",
                attribute: a.join(" "),
              },
              contains: [
                { begin: c, className: "keyword" },
                { begin: /[a-z-]+(?=:)/, className: "attribute" },
                d,
                e.QUOTE_STRING_MODE,
                e.APOS_STRING_MODE,
                n.HEXCOLOR,
                e.CSS_NUMBER_MODE,
              ],
            },
          ],
        };
      };
    },
    244: function (e, n) {
      e.exports = function (e) {
        return {
          name: "Shell Session",
          aliases: ["console"],
          contains: [
            {
              className: "meta",
              begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/,
              starts: { end: /[^\\](?=\s*$)/, subLanguage: "bash" },
            },
          ],
        };
      };
    },
    245: function (e, n) {
      e.exports = function (e) {
        return {
          name: "SML (Standard ML)",
          aliases: ["ml"],
          keywords: {
            $pattern: "[a-z_]\\w*!?",
            keyword:
              "abstype and andalso as case datatype do else end eqtype exception fn fun functor handle if in include infix infixr let local nonfix of op open orelse raise rec sharing sig signature struct structure then type val with withtype where while",
            built_in:
              "array bool char exn int list option order real ref string substring vector unit word",
            literal: "true false NONE SOME LESS EQUAL GREATER nil",
          },
          illegal: /\/\/|>>/,
          contains: [
            { className: "literal", begin: /\[(\|\|)?\]|\(\)/, relevance: 0 },
            e.COMMENT("\\(\\*", "\\*\\)", { contains: ["self"] }),
            { className: "symbol", begin: "'[A-Za-z_](?!')[\\w']*" },
            { className: "type", begin: "`[A-Z][\\w']*" },
            { className: "type", begin: "\\b[A-Z][\\w']*", relevance: 0 },
            { begin: "[a-z_]\\w*'[\\w']*" },
            e.inherit(e.APOS_STRING_MODE, {
              className: "string",
              relevance: 0,
            }),
            e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
            {
              className: "number",
              begin:
                "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
              relevance: 0,
            },
            { begin: /[-=]>/ },
          ],
        };
      };
    },
    246: function (e, n) {
      const t = [
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
        a = [
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
        i = [
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
        r = [
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
      e.exports = function (e) {
        const n = ((e) => ({
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
          o = { className: "variable", begin: "\\$" + e.IDENT_RE },
          l = "(?=[.\\s\\n[:,(])";
        return {
          name: "Stylus",
          aliases: ["styl"],
          case_insensitive: !1,
          keywords: "if else for in",
          illegal:
            "(" +
            [
              "\\?",
              "(\\bReturn\\b)",
              "(\\bEnd\\b)",
              "(\\bend\\b)",
              "(\\bdef\\b)",
              ";",
              "#\\s",
              "\\*\\s",
              "===\\s",
              "\\|",
              "%",
            ].join("|") +
            ")",
          contains: [
            e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            n.HEXCOLOR,
            {
              begin: "\\.[a-zA-Z][a-zA-Z0-9_-]*(?=[.\\s\\n[:,(])",
              className: "selector-class",
            },
            {
              begin: "#[a-zA-Z][a-zA-Z0-9_-]*(?=[.\\s\\n[:,(])",
              className: "selector-id",
            },
            {
              begin: "\\b(" + t.join("|") + ")" + l,
              className: "selector-tag",
            },
            {
              className: "selector-pseudo",
              begin: "&?:(" + i.join("|") + ")" + l,
            },
            {
              className: "selector-pseudo",
              begin: "&?::(" + r.join("|") + ")" + l,
            },
            n.ATTRIBUTE_SELECTOR_MODE,
            {
              className: "keyword",
              begin: /@media/,
              starts: {
                end: /[{;}]/,
                keywords: {
                  $pattern: /[a-z-]+/,
                  keyword: "and or not only",
                  attribute: a.join(" "),
                },
                contains: [e.CSS_NUMBER_MODE],
              },
            },
            {
              className: "keyword",
              begin:
                "@((-(o|moz|ms|webkit)-)?(" +
                [
                  "charset",
                  "css",
                  "debug",
                  "extend",
                  "font-face",
                  "for",
                  "import",
                  "include",
                  "keyframes",
                  "media",
                  "mixin",
                  "page",
                  "warn",
                  "while",
                ].join("|") +
                "))\\b",
            },
            o,
            e.CSS_NUMBER_MODE,
            {
              className: "function",
              begin: "^[a-zA-Z][a-zA-Z0-9_-]*\\(.*\\)",
              illegal: "[\\n]",
              returnBegin: !0,
              contains: [
                { className: "title", begin: "\\b[a-zA-Z][a-zA-Z0-9_-]*" },
                {
                  className: "params",
                  begin: /\(/,
                  end: /\)/,
                  contains: [
                    n.HEXCOLOR,
                    o,
                    e.APOS_STRING_MODE,
                    e.CSS_NUMBER_MODE,
                    e.QUOTE_STRING_MODE,
                  ],
                },
              ],
            },
            {
              className: "attribute",
              begin: "\\b(" + s.join("|") + ")\\b",
              starts: {
                end: /;|$/,
                contains: [
                  n.HEXCOLOR,
                  o,
                  e.APOS_STRING_MODE,
                  e.QUOTE_STRING_MODE,
                  e.CSS_NUMBER_MODE,
                  e.C_BLOCK_COMMENT_MODE,
                  n.IMPORTANT,
                ],
                illegal: /\./,
                relevance: 0,
              },
            },
          ],
        };
      };
    },
    247: function (e, n) {
      e.exports = function (e) {
        return {
          name: "SubUnit",
          case_insensitive: !0,
          contains: [
            { className: "string", begin: "\\[\n(multipart)?", end: "\\]\n" },
            {
              className: "string",
              begin: "\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}.\\d+Z",
            },
            { className: "string", begin: "(\\+|-)\\d+" },
            {
              className: "keyword",
              relevance: 10,
              variants: [
                {
                  begin:
                    "^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?",
                },
                { begin: "^progress(:?)(\\s+)?(pop|push)?" },
                { begin: "^tags:" },
                { begin: "^time:" },
              ],
            },
          ],
        };
      };
    },
    248: function (e, n) {
      function t(e) {
        return e ? ("string" == typeof e ? e : e.source) : null;
      }
      function a(e) {
        return i("(?=", e, ")");
      }
      function i(...e) {
        return e.map((e) => t(e)).join("");
      }
      function r(...e) {
        return "(" + e.map((e) => t(e)).join("|") + ")";
      }
      const s = (e) => i(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/),
        o = ["Protocol", "Type"].map(s),
        l = ["init", "self"].map(s),
        c = ["Any", "Self"],
        d = [
          "associatedtype",
          /as\?/,
          /as!/,
          "as",
          "break",
          "case",
          "catch",
          "class",
          "continue",
          "convenience",
          "default",
          "defer",
          "deinit",
          "didSet",
          "do",
          "dynamic",
          "else",
          "enum",
          "extension",
          "fallthrough",
          /fileprivate\(set\)/,
          "fileprivate",
          "final",
          "for",
          "func",
          "get",
          "guard",
          "if",
          "import",
          "indirect",
          "infix",
          /init\?/,
          /init!/,
          "inout",
          /internal\(set\)/,
          "internal",
          "in",
          "is",
          "lazy",
          "let",
          "mutating",
          "nonmutating",
          /open\(set\)/,
          "open",
          "operator",
          "optional",
          "override",
          "postfix",
          "precedencegroup",
          "prefix",
          /private\(set\)/,
          "private",
          "protocol",
          /public\(set\)/,
          "public",
          "repeat",
          "required",
          "rethrows",
          "return",
          "set",
          "some",
          "static",
          "struct",
          "subscript",
          "super",
          "switch",
          "throws",
          "throw",
          /try\?/,
          /try!/,
          "try",
          "typealias",
          /unowned\(safe\)/,
          /unowned\(unsafe\)/,
          "unowned",
          "var",
          "weak",
          "where",
          "while",
          "willSet",
        ],
        u = ["false", "nil", "true"],
        m = [
          "assignment",
          "associativity",
          "higherThan",
          "left",
          "lowerThan",
          "none",
          "right",
        ],
        b = [
          "#colorLiteral",
          "#column",
          "#dsohandle",
          "#else",
          "#elseif",
          "#endif",
          "#error",
          "#file",
          "#fileID",
          "#fileLiteral",
          "#filePath",
          "#function",
          "#if",
          "#imageLiteral",
          "#keyPath",
          "#line",
          "#selector",
          "#sourceLocation",
          "#warn_unqualified_access",
          "#warning",
        ],
        g = [
          "abs",
          "all",
          "any",
          "assert",
          "assertionFailure",
          "debugPrint",
          "dump",
          "fatalError",
          "getVaList",
          "isKnownUniquelyReferenced",
          "max",
          "min",
          "numericCast",
          "pointwiseMax",
          "pointwiseMin",
          "precondition",
          "preconditionFailure",
          "print",
          "readLine",
          "repeatElement",
          "sequence",
          "stride",
          "swap",
          "swift_unboxFromSwiftValueWithType",
          "transcode",
          "type",
          "unsafeBitCast",
          "unsafeDowncast",
          "withExtendedLifetime",
          "withUnsafeMutablePointer",
          "withUnsafePointer",
          "withVaList",
          "withoutActuallyEscaping",
          "zip",
        ],
        p = r(
          /[/=\-+!*%<>&|^~?]/,
          /[\u00A1-\u00A7]/,
          /[\u00A9\u00AB]/,
          /[\u00AC\u00AE]/,
          /[\u00B0\u00B1]/,
          /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
          /[\u2016-\u2017]/,
          /[\u2020-\u2027]/,
          /[\u2030-\u203E]/,
          /[\u2041-\u2053]/,
          /[\u2055-\u205E]/,
          /[\u2190-\u23FF]/,
          /[\u2500-\u2775]/,
          /[\u2794-\u2BFF]/,
          /[\u2E00-\u2E7F]/,
          /[\u3001-\u3003]/,
          /[\u3008-\u3020]/,
          /[\u3030]/
        ),
        f = r(
          p,
          /[\u0300-\u036F]/,
          /[\u1DC0-\u1DFF]/,
          /[\u20D0-\u20FF]/,
          /[\uFE00-\uFE0F]/,
          /[\uFE20-\uFE2F]/
        ),
        h = i(p, f, "*"),
        w = r(
          /[a-zA-Z_]/,
          /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
          /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
          /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
          /[\u1E00-\u1FFF]/,
          /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
          /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
          /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
          /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
          /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
          /[\uFE47-\uFEFE\uFF00-\uFFFD]/
        ),
        y = r(
          w,
          /\d/,
          /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/
        ),
        v = i(w, y, "*"),
        _ = i(/[A-Z]/, y, "*"),
        x = [
          "autoclosure",
          i(/convention\(/, r("swift", "block", "c"), /\)/),
          "discardableResult",
          "dynamicCallable",
          "dynamicMemberLookup",
          "escaping",
          "frozen",
          "GKInspectable",
          "IBAction",
          "IBDesignable",
          "IBInspectable",
          "IBOutlet",
          "IBSegueAction",
          "inlinable",
          "main",
          "nonobjc",
          "NSApplicationMain",
          "NSCopying",
          "NSManaged",
          i(/objc\(/, v, /\)/),
          "objc",
          "objcMembers",
          "propertyWrapper",
          "requires_stored_property_inits",
          "testable",
          "UIApplicationMain",
          "unknown",
          "usableFromInline",
        ],
        E = [
          "iOS",
          "iOSApplicationExtension",
          "macOS",
          "macOSApplicationExtension",
          "macCatalyst",
          "macCatalystApplicationExtension",
          "watchOS",
          "watchOSApplicationExtension",
          "tvOS",
          "tvOSApplicationExtension",
          "swift",
        ];
      e.exports = function (e) {
        const n = { match: /\s+/, relevance: 0 },
          t = e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
          p = [e.C_LINE_COMMENT_MODE, t],
          w = {
            className: "keyword",
            begin: i(/\./, a(r(...o, ...l))),
            end: r(...o, ...l),
            excludeBegin: !0,
          },
          N = { match: i(/\./, r(...d)), relevance: 0 },
          k = d.filter((e) => "string" == typeof e).concat(["_|0"]),
          M = {
            variants: [
              {
                className: "keyword",
                match: r(
                  ...d
                    .filter((e) => "string" != typeof e)
                    .concat(c)
                    .map(s),
                  ...l
                ),
              },
            ],
          },
          A = {
            $pattern: r(/\b\w+/, /#\w+/),
            keyword: k.concat(b),
            literal: u,
          },
          O = [w, N, M],
          S = [
            { match: i(/\./, r(...g)), relevance: 0 },
            { className: "built_in", match: i(/\b/, r(...g), /(?=\()/) },
          ],
          T = { match: /->/, relevance: 0 },
          C = [
            T,
            {
              className: "operator",
              relevance: 0,
              variants: [{ match: h }, { match: `\\.(\\.|${f})+` }],
            },
          ],
          D = "([0-9a-fA-F]_*)+",
          R = {
            className: "number",
            relevance: 0,
            variants: [
              {
                match:
                  "\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b",
              },
              { match: `\\b0x(${D})(\\.(${D}))?([pP][+-]?(([0-9]_*)+))?\\b` },
              { match: /\b0o([0-7]_*)+\b/ },
              { match: /\b0b([01]_*)+\b/ },
            ],
          },
          z = (e = "") => ({
            className: "subst",
            variants: [
              { match: i(/\\/, e, /[0\\tnr"']/) },
              { match: i(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/) },
            ],
          }),
          I = (e = "") => ({
            className: "subst",
            match: i(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/),
          }),
          F = (e = "") => ({
            className: "subst",
            label: "interpol",
            begin: i(/\\/, e, /\(/),
            end: /\)/,
          }),
          L = (e = "") => ({
            begin: i(e, /"""/),
            end: i(/"""/, e),
            contains: [z(e), I(e), F(e)],
          }),
          B = (e = "") => ({
            begin: i(e, /"/),
            end: i(/"/, e),
            contains: [z(e), F(e)],
          }),
          j = {
            className: "string",
            variants: [
              L(),
              L("#"),
              L("##"),
              L("###"),
              B(),
              B("#"),
              B("##"),
              B("###"),
            ],
          },
          $ = { match: i(/`/, v, /`/) },
          q = [
            $,
            { className: "variable", match: /\$\d+/ },
            { className: "variable", match: `\\$${y}+` },
          ],
          P = [
            {
              match: /(@|#)available/,
              className: "keyword",
              starts: {
                contains: [
                  {
                    begin: /\(/,
                    end: /\)/,
                    keywords: E,
                    contains: [...C, R, j],
                  },
                ],
              },
            },
            { className: "keyword", match: i(/@/, r(...x)) },
            { className: "meta", match: i(/@/, v) },
          ],
          U = {
            match: a(/\b[A-Z]/),
            relevance: 0,
            contains: [
              {
                className: "type",
                match: i(
                  /(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,
                  y,
                  "+"
                ),
              },
              { className: "type", match: _, relevance: 0 },
              { match: /[?!]+/, relevance: 0 },
              { match: /\.\.\./, relevance: 0 },
              { match: i(/\s+&\s+/, a(_)), relevance: 0 },
            ],
          },
          Z = {
            begin: /</,
            end: />/,
            keywords: A,
            contains: [...p, ...O, ...P, T, U],
          };
        U.contains.push(Z);
        const K = {
            begin: /\(/,
            end: /\)/,
            relevance: 0,
            keywords: A,
            contains: [
              "self",
              { match: i(v, /\s*:/), keywords: "_|0", relevance: 0 },
              ...p,
              ...O,
              ...S,
              ...C,
              R,
              j,
              ...q,
              ...P,
              U,
            ],
          },
          G = {
            beginKeywords: "func",
            contains: [
              {
                className: "title",
                match: r($.match, v, h),
                endsParent: !0,
                relevance: 0,
              },
              n,
            ],
          },
          H = { begin: /</, end: />/, contains: [...p, U] },
          Q = {
            begin: /\(/,
            end: /\)/,
            keywords: A,
            contains: [
              {
                begin: r(a(i(v, /\s*:/)), a(i(v, /\s+/, v, /\s*:/))),
                end: /:/,
                relevance: 0,
                contains: [
                  { className: "keyword", match: /\b_\b/ },
                  { className: "params", match: v },
                ],
              },
              ...p,
              ...O,
              ...C,
              R,
              j,
              ...P,
              U,
              K,
            ],
            endsParent: !0,
            illegal: /["']/,
          },
          W = {
            className: "function",
            match: a(/\bfunc\b/),
            contains: [G, H, Q, n],
            illegal: [/\[/, /%/],
          },
          X = {
            className: "function",
            match: /\b(subscript|init[?!]?)\s*(?=[<(])/,
            keywords: {
              keyword: "subscript init init? init!",
              $pattern: /\w+[?!]?/,
            },
            contains: [H, Q, n],
            illegal: /\[|%/,
          },
          V = {
            beginKeywords: "operator",
            end: e.MATCH_NOTHING_RE,
            contains: [
              { className: "title", match: h, endsParent: !0, relevance: 0 },
            ],
          },
          Y = {
            beginKeywords: "precedencegroup",
            end: e.MATCH_NOTHING_RE,
            contains: [
              { className: "title", match: _, relevance: 0 },
              {
                begin: /{/,
                end: /}/,
                relevance: 0,
                endsParent: !0,
                keywords: [...m, ...u],
                contains: [U],
              },
            ],
          };
        for (const e of j.variants) {
          const n = e.contains.find((e) => "interpol" === e.label);
          n.keywords = A;
          const t = [...O, ...S, ...C, R, j, ...q];
          n.contains = [
            ...t,
            { begin: /\(/, end: /\)/, contains: ["self", ...t] },
          ];
        }
        return {
          name: "Swift",
          keywords: A,
          contains: [
            ...p,
            W,
            X,
            {
              className: "class",
              beginKeywords: "struct protocol class extension enum",
              end: "\\{",
              excludeEnd: !0,
              keywords: A,
              contains: [
                e.inherit(e.TITLE_MODE, {
                  begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/,
                }),
                ...O,
              ],
            },
            V,
            Y,
            {
              beginKeywords: "import",
              end: /$/,
              contains: [...p],
              relevance: 0,
            },
            ...O,
            ...S,
            ...C,
            R,
            j,
            ...q,
            ...P,
            U,
            K,
          ],
        };
      };
    },
    249: function (e, n) {
      e.exports = function (e) {
        return {
          name: "Tagger Script",
          contains: [
            {
              className: "comment",
              begin: /\$noop\(/,
              end: /\)/,
              contains: [
                {
                  begin: /\(/,
                  end: /\)/,
                  contains: ["self", { begin: /\\./ }],
                },
              ],
              relevance: 10,
            },
            {
              className: "keyword",
              begin: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,
              end: /\(/,
              excludeEnd: !0,
            },
            { className: "variable", begin: /%[_a-zA-Z0-9:]*/, end: "%" },
            { className: "symbol", begin: /\\./ },
          ],
        };
      };
    },
    250: function (e, n) {
      e.exports = function (e) {
        var n = "true false yes no null",
          t = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
          a = {
            className: "string",
            relevance: 0,
            variants: [
              { begin: /'/, end: /'/ },
              { begin: /"/, end: /"/ },
              { begin: /\S+/ },
            ],
            contains: [
              e.BACKSLASH_ESCAPE,
              {
                className: "template-variable",
                variants: [
                  { begin: /\{\{/, end: /\}\}/ },
                  { begin: /%\{/, end: /\}/ },
                ],
              },
            ],
          },
          i = e.inherit(a, {
            variants: [
              { begin: /'/, end: /'/ },
              { begin: /"/, end: /"/ },
              { begin: /[^\s,{}[\]]+/ },
            ],
          }),
          r = {
            className: "number",
            begin:
              "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b",
          },
          s = {
            end: ",",
            endsWithParent: !0,
            excludeEnd: !0,
            keywords: n,
            relevance: 0,
          },
          o = {
            begin: /\{/,
            end: /\}/,
            contains: [s],
            illegal: "\\n",
            relevance: 0,
          },
          l = {
            begin: "\\[",
            end: "\\]",
            contains: [s],
            illegal: "\\n",
            relevance: 0,
          },
          c = [
            {
              className: "attr",
              variants: [
                { begin: "\\w[\\w :\\/.-]*:(?=[ \t]|$)" },
                { begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)' },
                { begin: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)" },
              ],
            },
            { className: "meta", begin: "^---\\s*$", relevance: 10 },
            {
              className: "string",
              begin:
                "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*",
            },
            {
              begin: "<%[%=-]?",
              end: "[%-]?%>",
              subLanguage: "ruby",
              excludeBegin: !0,
              excludeEnd: !0,
              relevance: 0,
            },
            { className: "type", begin: "!\\w+!" + t },
            { className: "type", begin: "!<" + t + ">" },
            { className: "type", begin: "!" + t },
            { className: "type", begin: "!!" + t },
            { className: "meta", begin: "&" + e.UNDERSCORE_IDENT_RE + "$" },
            { className: "meta", begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$" },
            { className: "bullet", begin: "-(?=[ ]|$)", relevance: 0 },
            e.HASH_COMMENT_MODE,
            { beginKeywords: n, keywords: { literal: n } },
            r,
            { className: "number", begin: e.C_NUMBER_RE + "\\b", relevance: 0 },
            o,
            l,
            a,
          ],
          d = [...c];
        return (
          d.pop(),
          d.push(i),
          (s.contains = d),
          {
            name: "YAML",
            case_insensitive: !0,
            aliases: ["yml", "YAML"],
            contains: c,
          }
        );
      };
    },
    251: function (e, n) {
      e.exports = function (e) {
        var n =
            "attribute block constant cycle date dump include max min parent random range source template_from_string",
          t = {
            beginKeywords: n,
            keywords: { name: n },
            relevance: 0,
            contains: [{ className: "params", begin: "\\(", end: "\\)" }],
          },
          a = {
            begin: /\|[A-Za-z_]+:?/,
            keywords:
              "abs batch capitalize column convert_encoding date date_modify default escape filter first format inky_to_html inline_css join json_encode keys last length lower map markdown merge nl2br number_format raw reduce replace reverse round slice sort spaceless split striptags title trim upper url_encode",
            contains: [t],
          },
          i =
            "apply autoescape block deprecated do embed extends filter flush for from if import include macro sandbox set use verbatim with";
        return (
          (i =
            i +
            " " +
            i
              .split(" ")
              .map(function (e) {
                return "end" + e;
              })
              .join(" ")),
          {
            name: "Twig",
            aliases: ["craftcms"],
            case_insensitive: !0,
            subLanguage: "xml",
            contains: [
              e.COMMENT(/\{#/, /#\}/),
              {
                className: "template-tag",
                begin: /\{%/,
                end: /%\}/,
                contains: [
                  {
                    className: "name",
                    begin: /\w+/,
                    keywords: i,
                    starts: {
                      endsWithParent: !0,
                      contains: [a, t],
                      relevance: 0,
                    },
                  },
                ],
              },
              {
                className: "template-variable",
                begin: /\{\{/,
                end: /\}\}/,
                contains: ["self", a, t],
              },
            ],
          }
        );
      };
    },
    252: function (e, n) {
      const t = "[A-Za-z$_][0-9A-Za-z$_]*",
        a = [
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
      function s(e) {
        return o("(?=", e, ")");
      }
      function o(...e) {
        return e
          .map((e) => {
            return (n = e) ? ("string" == typeof n ? n : n.source) : null;
            var n;
          })
          .join("");
      }
      e.exports = function (e) {
        const n = {
            $pattern: t,
            keyword: a.concat([
              "type",
              "namespace",
              "typedef",
              "interface",
              "public",
              "private",
              "protected",
              "implements",
              "declare",
              "abstract",
              "readonly",
            ]),
            literal: i,
            built_in: r.concat([
              "any",
              "void",
              "number",
              "boolean",
              "string",
              "object",
              "never",
              "enum",
            ]),
          },
          l = { className: "meta", begin: "@[A-Za-z$_][0-9A-Za-z$_]*" },
          c = (e, n, t) => {
            const a = e.contains.findIndex((e) => e.label === n);
            if (-1 === a) throw new Error("can not find mode to replace");
            e.contains.splice(a, 1, t);
          },
          d = (function (e) {
            const n = t,
              l = "<>",
              c = "</>",
              d = {
                begin: /<[A-Za-z0-9\\._:-]+/,
                end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
                isTrulyOpeningTag: (e, n) => {
                  const t = e[0].length + e.index,
                    a = e.input[t];
                  "<" !== a
                    ? ">" === a &&
                      (((e, { after: n }) => {
                        const t = "</" + e[0].slice(1);
                        return -1 !== e.input.indexOf(t, n);
                      })(e, { after: t }) ||
                        n.ignoreMatch())
                    : n.ignoreMatch();
                },
              },
              u = { $pattern: t, keyword: a, literal: i, built_in: r },
              m = "\\.([0-9](_?[0-9])*)",
              b = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
              g = {
                className: "number",
                variants: [
                  {
                    begin: `(\\b(${b})((${m})|\\.)?|(${m}))[eE][+-]?([0-9](_?[0-9])*)\\b`,
                  },
                  { begin: `\\b(${b})\\b((${m})\\b|\\.)?|(${m})\\b` },
                  { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
                  { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
                  { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
                  { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
                  { begin: "\\b0[0-7]+n?\\b" },
                ],
                relevance: 0,
              },
              p = {
                className: "subst",
                begin: "\\$\\{",
                end: "\\}",
                keywords: u,
                contains: [],
              },
              f = {
                begin: "html`",
                end: "",
                starts: {
                  end: "`",
                  returnEnd: !1,
                  contains: [e.BACKSLASH_ESCAPE, p],
                  subLanguage: "xml",
                },
              },
              h = {
                begin: "css`",
                end: "",
                starts: {
                  end: "`",
                  returnEnd: !1,
                  contains: [e.BACKSLASH_ESCAPE, p],
                  subLanguage: "css",
                },
              },
              w = {
                className: "string",
                begin: "`",
                end: "`",
                contains: [e.BACKSLASH_ESCAPE, p],
              },
              y = {
                className: "comment",
                variants: [
                  e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                    relevance: 0,
                    contains: [
                      {
                        className: "doctag",
                        begin: "@[A-Za-z]+",
                        contains: [
                          {
                            className: "type",
                            begin: "\\{",
                            end: "\\}",
                            relevance: 0,
                          },
                          {
                            className: "variable",
                            begin: n + "(?=\\s*(-)|$)",
                            endsParent: !0,
                            relevance: 0,
                          },
                          { begin: /(?=[^\n])\s/, relevance: 0 },
                        ],
                      },
                    ],
                  }),
                  e.C_BLOCK_COMMENT_MODE,
                  e.C_LINE_COMMENT_MODE,
                ],
              },
              v = [
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE,
                f,
                h,
                w,
                g,
                e.REGEXP_MODE,
              ];
            p.contains = v.concat({
              begin: /\{/,
              end: /\}/,
              keywords: u,
              contains: ["self"].concat(v),
            });
            const _ = [].concat(y, p.contains),
              x = _.concat([
                {
                  begin: /\(/,
                  end: /\)/,
                  keywords: u,
                  contains: ["self"].concat(_),
                },
              ]),
              E = {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: u,
                contains: x,
              };
            return {
              name: "Javascript",
              aliases: ["js", "jsx", "mjs", "cjs"],
              keywords: u,
              exports: { PARAMS_CONTAINS: x },
              illegal: /#(?![$_A-z])/,
              contains: [
                e.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
                {
                  label: "use_strict",
                  className: "meta",
                  relevance: 10,
                  begin: /^\s*['"]use (strict|asm)['"]/,
                },
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE,
                f,
                h,
                w,
                y,
                g,
                {
                  begin: o(
                    /[{,\n]\s*/,
                    s(
                      o(
                        /(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,
                        n + "\\s*:"
                      )
                    )
                  ),
                  relevance: 0,
                  contains: [
                    { className: "attr", begin: n + s("\\s*:"), relevance: 0 },
                  ],
                },
                {
                  begin:
                    "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                  keywords: "return throw case",
                  contains: [
                    y,
                    e.REGEXP_MODE,
                    {
                      className: "function",
                      begin:
                        "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
                        e.UNDERSCORE_IDENT_RE +
                        ")\\s*=>",
                      returnBegin: !0,
                      end: "\\s*=>",
                      contains: [
                        {
                          className: "params",
                          variants: [
                            { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                            { className: null, begin: /\(\s*\)/, skip: !0 },
                            {
                              begin: /\(/,
                              end: /\)/,
                              excludeBegin: !0,
                              excludeEnd: !0,
                              keywords: u,
                              contains: x,
                            },
                          ],
                        },
                      ],
                    },
                    { begin: /,/, relevance: 0 },
                    { className: "", begin: /\s/, end: /\s*/, skip: !0 },
                    {
                      variants: [
                        { begin: l, end: c },
                        {
                          begin: d.begin,
                          "on:begin": d.isTrulyOpeningTag,
                          end: d.end,
                        },
                      ],
                      subLanguage: "xml",
                      contains: [
                        {
                          begin: d.begin,
                          end: d.end,
                          skip: !0,
                          contains: ["self"],
                        },
                      ],
                    },
                  ],
                  relevance: 0,
                },
                {
                  className: "function",
                  beginKeywords: "function",
                  end: /[{;]/,
                  excludeEnd: !0,
                  keywords: u,
                  contains: ["self", e.inherit(e.TITLE_MODE, { begin: n }), E],
                  illegal: /%/,
                },
                { beginKeywords: "while if switch catch for" },
                {
                  className: "function",
                  begin:
                    e.UNDERSCORE_IDENT_RE +
                    "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                  returnBegin: !0,
                  contains: [E, e.inherit(e.TITLE_MODE, { begin: n })],
                },
                {
                  variants: [{ begin: "\\." + n }, { begin: "\\$" + n }],
                  relevance: 0,
                },
                {
                  className: "class",
                  beginKeywords: "class",
                  end: /[{;=]/,
                  excludeEnd: !0,
                  illegal: /[:"[\]]/,
                  contains: [
                    { beginKeywords: "extends" },
                    e.UNDERSCORE_TITLE_MODE,
                  ],
                },
                {
                  begin: /\b(?=constructor)/,
                  end: /[{;]/,
                  excludeEnd: !0,
                  contains: [e.inherit(e.TITLE_MODE, { begin: n }), "self", E],
                },
                {
                  begin: "(get|set)\\s+(?=" + n + "\\()",
                  end: /\{/,
                  keywords: "get set",
                  contains: [
                    e.inherit(e.TITLE_MODE, { begin: n }),
                    { begin: /\(\)/ },
                    E,
                  ],
                },
                { begin: /\$[(.]/ },
              ],
            };
          })(e);
        return (
          Object.assign(d.keywords, n),
          d.exports.PARAMS_CONTAINS.push(l),
          (d.contains = d.contains.concat([
            l,
            { beginKeywords: "namespace", end: /\{/, excludeEnd: !0 },
            {
              beginKeywords: "interface",
              end: /\{/,
              excludeEnd: !0,
              keywords: "interface extends",
            },
          ])),
          c(d, "shebang", e.SHEBANG()),
          c(d, "use_strict", {
            className: "meta",
            relevance: 10,
            begin: /^\s*['"]use strict['"]/,
          }),
          (d.contains.find((e) => "function" === e.className).relevance = 0),
          Object.assign(d, { name: "TypeScript", aliases: ["ts"] }),
          d
        );
      };
    },
    253: function (e, n) {
      function t(e) {
        return e ? ("string" == typeof e ? e : e.source) : null;
      }
      function a(...e) {
        return e.map((e) => t(e)).join("");
      }
      function i(...e) {
        return "(" + e.map((e) => t(e)).join("|") + ")";
      }
      e.exports = function (e) {
        const n = /\d{1,2}\/\d{1,2}\/\d{4}/,
          t = /\d{4}-\d{1,2}-\d{1,2}/,
          r = /(\d|1[012])(:\d+){0,2} *(AM|PM)/,
          s = /\d{1,2}(:\d{1,2}){1,2}/,
          o = {
            className: "literal",
            variants: [
              { begin: a(/# */, i(t, n), / *#/) },
              { begin: a(/# */, s, / *#/) },
              { begin: a(/# */, r, / *#/) },
              { begin: a(/# */, i(t, n), / +/, i(r, s), / *#/) },
            ],
          },
          l = e.COMMENT(/'''/, /$/, {
            contains: [{ className: "doctag", begin: /<\/?/, end: />/ }],
          }),
          c = e.COMMENT(null, /$/, {
            variants: [{ begin: /'/ }, { begin: /([\t ]|^)REM(?=\s)/ }],
          });
        return {
          name: "Visual Basic .NET",
          aliases: ["vb"],
          case_insensitive: !0,
          classNameAliases: { label: "symbol" },
          keywords: {
            keyword:
              "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
            built_in:
              "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
            type: "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
            literal: "true false nothing",
          },
          illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
          contains: [
            { className: "string", begin: /"(""|[^/n])"C\b/ },
            {
              className: "string",
              begin: /"/,
              end: /"/,
              illegal: /\n/,
              contains: [{ begin: /""/ }],
            },
            o,
            {
              className: "number",
              relevance: 0,
              variants: [
                {
                  begin:
                    /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/,
                },
                { begin: /\b\d[\d_]*((U?[SIL])|[%&])?/ },
                { begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/ },
                { begin: /&O[0-7_]+((U?[SIL])|[%&])?/ },
                { begin: /&B[01_]+((U?[SIL])|[%&])?/ },
              ],
            },
            { className: "label", begin: /^\w+:/ },
            l,
            c,
            {
              className: "meta",
              begin:
                /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
              end: /$/,
              keywords: {
                "meta-keyword":
                  "const disable else elseif enable end externalsource if region then",
              },
              contains: [c],
            },
          ],
        };
      };
    },
    254: function (e, n) {
      function t(e) {
        return e ? ("string" == typeof e ? e : e.source) : null;
      }
      function a(...e) {
        return e.map((e) => t(e)).join("");
      }
      function i(...e) {
        return "(" + e.map((e) => t(e)).join("|") + ")";
      }
      e.exports = function (e) {
        const n =
          "lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid split  cint sin datepart ltrim sqr time derived eval date formatpercent exp inputbox left ascw chrw regexp cstr err".split(
            " "
          );
        return {
          name: "VBScript",
          aliases: ["vbs"],
          case_insensitive: !0,
          keywords: {
            keyword:
              "call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",
            built_in: [
              "server",
              "response",
              "request",
              "scriptengine",
              "scriptenginebuildversion",
              "scriptengineminorversion",
              "scriptenginemajorversion",
            ],
            literal: "true false null nothing empty",
          },
          illegal: "//",
          contains: [
            {
              begin: a(i(...n), "\\s*\\("),
              relevance: 0,
              keywords: { built_in: n },
            },
            e.inherit(e.QUOTE_STRING_MODE, { contains: [{ begin: '""' }] }),
            e.COMMENT(/'/, /$/, { relevance: 0 }),
            e.C_NUMBER_MODE,
          ],
        };
      };
    },
    255: function (e, n) {
      e.exports = function (e) {
        return {
          name: "VBScript in HTML",
          subLanguage: "xml",
          contains: [{ begin: "<%", end: "%>", subLanguage: "vbscript" }],
        };
      };
    },
    256: function (e, n) {
      e.exports = function (e) {
        return {
          name: "Vim Script",
          keywords: {
            $pattern: /[!#@\w]+/,
            keyword:
              "N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu go gr grepa gu gv ha helpf helpg helpt hi hid his ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf quita qa rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank",
            built_in:
              "synIDtrans atan2 range matcharg did_filetype asin feedkeys xor argv complete_check add getwinposx getqflist getwinposy screencol clearmatches empty extend getcmdpos mzeval garbagecollect setreg ceil sqrt diff_hlID inputsecret get getfperm getpid filewritable shiftwidth max sinh isdirectory synID system inputrestore winline atan visualmode inputlist tabpagewinnr round getregtype mapcheck hasmapto histdel argidx findfile sha256 exists toupper getcmdline taglist string getmatches bufnr strftime winwidth bufexists strtrans tabpagebuflist setcmdpos remote_read printf setloclist getpos getline bufwinnr float2nr len getcmdtype diff_filler luaeval resolve libcallnr foldclosedend reverse filter has_key bufname str2float strlen setline getcharmod setbufvar index searchpos shellescape undofile foldclosed setqflist buflisted strchars str2nr virtcol floor remove undotree remote_expr winheight gettabwinvar reltime cursor tabpagenr finddir localtime acos getloclist search tanh matchend rename gettabvar strdisplaywidth type abs py3eval setwinvar tolower wildmenumode log10 spellsuggest bufloaded synconcealed nextnonblank server2client complete settabwinvar executable input wincol setmatches getftype hlID inputsave searchpair or screenrow line settabvar histadd deepcopy strpart remote_peek and eval getftime submatch screenchar winsaveview matchadd mkdir screenattr getfontname libcall reltimestr getfsize winnr invert pow getbufline byte2line soundfold repeat fnameescape tagfiles sin strwidth spellbadword trunc maparg log lispindent hostname setpos globpath remote_foreground getchar synIDattr fnamemodify cscope_connection stridx winbufnr indent min complete_add nr2char searchpairpos inputdialog values matchlist items hlexists strridx browsedir expand fmod pathshorten line2byte argc count getwinvar glob foldtextresult getreg foreground cosh matchdelete has char2nr simplify histget searchdecl iconv winrestcmd pumvisible writefile foldlevel haslocaldir keys cos matchstr foldtext histnr tan tempname getcwd byteidx getbufvar islocked escape eventhandler remote_send serverlist winrestview synstack pyeval prevnonblank readfile cindent filereadable changenr exp",
          },
          illegal: /;/,
          contains: [
            e.NUMBER_MODE,
            { className: "string", begin: "'", end: "'", illegal: "\\n" },
            { className: "string", begin: /"(\\"|\n\\|[^"\n])*"/ },
            e.COMMENT('"', "$"),
            { className: "variable", begin: /[bwtglsav]:[\w\d_]*/ },
            {
              className: "function",
              beginKeywords: "function function!",
              end: "$",
              relevance: 0,
              contains: [
                e.TITLE_MODE,
                { className: "params", begin: "\\(", end: "\\)" },
              ],
            },
            { className: "symbol", begin: /<[\w-]+>/ },
          ],
        };
      };
    },
    257: function (e, n) {
      e.exports = function (e) {
        const n = {
            $pattern: /[a-zA-Z][a-zA-Z0-9_?]*/,
            keyword:
              "if then else do while until for loop import with is as where when by data constant integer real text name boolean symbol infix prefix postfix block tree",
            literal: "true false nil",
            built_in:
              "in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin acos atan exp expm1 log log2 log10 log1p pi at text_length text_range text_find text_replace contains page slide basic_slide title_slide title subtitle fade_in fade_out fade_at clear_color color line_color line_width texture_wrap texture_transform texture scale_?x scale_?y scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y rotate_?z? rectangle circle ellipse sphere path line_to move_to quad_to curve_to theme background contents locally time mouse_?x mouse_?y mouse_buttons ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts",
          },
          t = { className: "string", begin: '"', end: '"', illegal: "\\n" },
          a = { beginKeywords: "import", end: "$", keywords: n, contains: [t] },
          i = {
            className: "function",
            begin: /[a-z][^\n]*->/,
            returnBegin: !0,
            end: /->/,
            contains: [
              e.inherit(e.TITLE_MODE, {
                starts: { endsWithParent: !0, keywords: n },
              }),
            ],
          };
        return {
          name: "XL",
          aliases: ["tao"],
          keywords: n,
          contains: [
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            t,
            { className: "string", begin: "'", end: "'", illegal: "\\n" },
            { className: "string", begin: "<<", end: ">>" },
            i,
            a,
            {
              className: "number",
              begin: "[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?",
            },
            e.NUMBER_MODE,
          ],
        };
      };
    },
    258: function (e, n) {
      e.exports = function (e) {
        return {
          name: "XQuery",
          aliases: ["xpath", "xq"],
          case_insensitive: !1,
          illegal: /(proc)|(abstract)|(extends)|(until)|(#)/,
          keywords: {
            $pattern: /[a-zA-Z$][a-zA-Z0-9_:-]*/,
            keyword:
              "module schema namespace boundary-space preserve no-preserve strip default collation base-uri ordering context decimal-format decimal-separator copy-namespaces empty-sequence except exponent-separator external grouping-separator inherit no-inherit lax minus-sign per-mille percent schema-attribute schema-element strict unordered zero-digit declare import option function validate variable for at in let where order group by return if then else tumbling sliding window start when only end previous next stable ascending descending allowing empty greatest least some every satisfies switch case typeswitch try catch and or to union intersect instance of treat as castable cast map array delete insert into replace value rename copy modify update",
            type: "item document-node node attribute document element comment namespace namespace-node processing-instruction text construction xs:anyAtomicType xs:untypedAtomic xs:duration xs:time xs:decimal xs:float xs:double xs:gYearMonth xs:gYear xs:gMonthDay xs:gMonth xs:gDay xs:boolean xs:base64Binary xs:hexBinary xs:anyURI xs:QName xs:NOTATION xs:dateTime xs:dateTimeStamp xs:date xs:string xs:normalizedString xs:token xs:language xs:NMTOKEN xs:Name xs:NCName xs:ID xs:IDREF xs:ENTITY xs:integer xs:nonPositiveInteger xs:negativeInteger xs:long xs:int xs:short xs:byte xs:nonNegativeInteger xs:unisignedLong xs:unsignedInt xs:unsignedShort xs:unsignedByte xs:positiveInteger xs:yearMonthDuration xs:dayTimeDuration",
            literal:
              "eq ne lt le gt ge is self:: child:: descendant:: descendant-or-self:: attribute:: following:: following-sibling:: parent:: ancestor:: ancestor-or-self:: preceding:: preceding-sibling:: NaN",
          },
          contains: [
            { className: "variable", begin: /[$][\w\-:]+/ },
            {
              className: "built_in",
              variants: [
                {
                  begin: /\barray:/,
                  end: /(?:append|filter|flatten|fold-(?:left|right)|for-each(?:-pair)?|get|head|insert-before|join|put|remove|reverse|size|sort|subarray|tail)\b/,
                },
                {
                  begin: /\bmap:/,
                  end: /(?:contains|entry|find|for-each|get|keys|merge|put|remove|size)\b/,
                },
                {
                  begin: /\bmath:/,
                  end: /(?:a(?:cos|sin|tan[2]?)|cos|exp(?:10)?|log(?:10)?|pi|pow|sin|sqrt|tan)\b/,
                },
                { begin: /\bop:/, end: /\(/, excludeEnd: !0 },
                { begin: /\bfn:/, end: /\(/, excludeEnd: !0 },
                {
                  begin:
                    /[^</$:'"-]\b(?:abs|accumulator-(?:after|before)|adjust-(?:date(?:Time)?|time)-to-timezone|analyze-string|apply|available-(?:environment-variables|system-properties)|avg|base-uri|boolean|ceiling|codepoints?-(?:equal|to-string)|collation-key|collection|compare|concat|contains(?:-token)?|copy-of|count|current(?:-)?(?:date(?:Time)?|time|group(?:ing-key)?|output-uri|merge-(?:group|key))?data|dateTime|days?-from-(?:date(?:Time)?|duration)|deep-equal|default-(?:collation|language)|distinct-values|document(?:-uri)?|doc(?:-available)?|element-(?:available|with-id)|empty|encode-for-uri|ends-with|environment-variable|error|escape-html-uri|exactly-one|exists|false|filter|floor|fold-(?:left|right)|for-each(?:-pair)?|format-(?:date(?:Time)?|time|integer|number)|function-(?:arity|available|lookup|name)|generate-id|has-children|head|hours-from-(?:dateTime|duration|time)|id(?:ref)?|implicit-timezone|in-scope-prefixes|index-of|innermost|insert-before|iri-to-uri|json-(?:doc|to-xml)|key|lang|last|load-xquery-module|local-name(?:-from-QName)?|(?:lower|upper)-case|matches|max|minutes-from-(?:dateTime|duration|time)|min|months?-from-(?:date(?:Time)?|duration)|name(?:space-uri-?(?:for-prefix|from-QName)?)?|nilled|node-name|normalize-(?:space|unicode)|not|number|one-or-more|outermost|parse-(?:ietf-date|json)|path|position|(?:prefix-from-)?QName|random-number-generator|regex-group|remove|replace|resolve-(?:QName|uri)|reverse|root|round(?:-half-to-even)?|seconds-from-(?:dateTime|duration|time)|snapshot|sort|starts-with|static-base-uri|stream-available|string-?(?:join|length|to-codepoints)?|subsequence|substring-?(?:after|before)?|sum|system-property|tail|timezone-from-(?:date(?:Time)?|time)|tokenize|trace|trans(?:form|late)|true|type-available|unordered|unparsed-(?:entity|text)?-?(?:public-id|uri|available|lines)?|uri-collection|xml-to-json|years?-from-(?:date(?:Time)?|duration)|zero-or-one)\b/,
                },
                { begin: /\blocal:/, end: /\(/, excludeEnd: !0 },
                {
                  begin: /\bzip:/,
                  end: /(?:zip-file|(?:xml|html|text|binary)-entry| (?:update-)?entries)\b/,
                },
                {
                  begin: /\b(?:util|db|functx|app|xdmp|xmldb):/,
                  end: /\(/,
                  excludeEnd: !0,
                },
              ],
            },
            {
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
            {
              className: "number",
              begin:
                /(\b0[0-7_]+)|(\b0x[0-9a-fA-F_]+)|(\b[1-9][0-9_]*(\.[0-9_]+)?)|[0_]\b/,
              relevance: 0,
            },
            {
              className: "comment",
              begin: /\(:/,
              end: /:\)/,
              relevance: 10,
              contains: [{ className: "doctag", begin: /@\w+/ }],
            },
            { className: "meta", begin: /%[\w\-:]+/ },
            {
              className: "title",
              begin: /\bxquery version "[13]\.[01]"\s?(?:encoding ".+")?/,
              end: /;/,
            },
            {
              beginKeywords:
                "element attribute comment document processing-instruction",
              end: /\{/,
              excludeEnd: !0,
            },
            {
              begin: /<([\w._:-]+)(\s+\S*=('|").*('|"))?>/,
              end: /(\/[\w._:-]+>)/,
              subLanguage: "xml",
              contains: [
                { begin: /\{/, end: /\}/, subLanguage: "xquery" },
                "self",
              ],
            },
          ],
        };
      };
    },
    259: function (e, n) {
      e.exports = function (e) {
        const n = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE],
            variants: [
              e.inherit(e.APOS_STRING_MODE, { illegal: null }),
              e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
            ],
          },
          t = e.UNDERSCORE_TITLE_MODE,
          a = { variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE] },
          i =
            "namespace class interface use extends function return abstract final public protected private static deprecated throw try catch Exception echo empty isset instanceof unset let var new const self require if else elseif switch case default do while loop for continue break likely unlikely __LINE__ __FILE__ __DIR__ __FUNCTION__ __CLASS__ __TRAIT__ __METHOD__ __NAMESPACE__ array boolean float double integer object resource string char long unsigned bool int uint ulong uchar true false null undefined";
        return {
          name: "Zephir",
          aliases: ["zep"],
          keywords: i,
          contains: [
            e.C_LINE_COMMENT_MODE,
            e.COMMENT(/\/\*/, /\*\//, {
              contains: [{ className: "doctag", begin: /@[A-Za-z]+/ }],
            }),
            {
              className: "string",
              begin: /<<<['"]?\w+['"]?$/,
              end: /^\w+;/,
              contains: [e.BACKSLASH_ESCAPE],
            },
            { begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ },
            {
              className: "function",
              beginKeywords: "function fn",
              end: /[;{]/,
              excludeEnd: !0,
              illegal: /\$|\[|%/,
              contains: [
                t,
                {
                  className: "params",
                  begin: /\(/,
                  end: /\)/,
                  keywords: i,
                  contains: ["self", e.C_BLOCK_COMMENT_MODE, n, a],
                },
              ],
            },
            {
              className: "class",
              beginKeywords: "class interface",
              end: /\{/,
              excludeEnd: !0,
              illegal: /[:($"]/,
              contains: [{ beginKeywords: "extends implements" }, t],
            },
            {
              beginKeywords: "namespace",
              end: /;/,
              illegal: /[.']/,
              contains: [t],
            },
            { beginKeywords: "use", end: /;/, contains: [t] },
            { begin: /=>/ },
            n,
            a,
          ],
        };
      };
    },
  },
]);