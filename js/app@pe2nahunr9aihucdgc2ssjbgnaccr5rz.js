(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    192: function (e, n) {
      function a(...e) {
        return e
          .map((e) => {
            return (n = e) ? ("string" == typeof n ? n : n.source) : null;
            var n;
          })
          .join("");
      }
      e.exports = function (e) {
        const n = {
            begin: /<\/?[A-Za-z_]/,
            end: ">",
            subLanguage: "xml",
            relevance: 0,
          },
          t = {
            variants: [
              { begin: /\[.+?\]\[.*?\]/, relevance: 0 },
              {
                begin:
                  /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                relevance: 2,
              },
              {
                begin: a(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
                relevance: 2,
              },
              { begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1 },
              { begin: /\[.+?\]\(.*?\)/, relevance: 0 },
            ],
            returnBegin: !0,
            contains: [
              {
                className: "string",
                relevance: 0,
                begin: "\\[",
                end: "\\]",
                excludeBegin: !0,
                returnEnd: !0,
              },
              {
                className: "link",
                relevance: 0,
                begin: "\\]\\(",
                end: "\\)",
                excludeBegin: !0,
                excludeEnd: !0,
              },
              {
                className: "symbol",
                relevance: 0,
                begin: "\\]\\[",
                end: "\\]",
                excludeBegin: !0,
                excludeEnd: !0,
              },
            ],
          },
          i = {
            className: "strong",
            contains: [],
            variants: [
              { begin: /_{2}/, end: /_{2}/ },
              { begin: /\*{2}/, end: /\*{2}/ },
            ],
          },
          r = {
            className: "emphasis",
            contains: [],
            variants: [
              { begin: /\*(?!\*)/, end: /\*/ },
              { begin: /_(?!_)/, end: /_/, relevance: 0 },
            ],
          };
        i.contains.push(r), r.contains.push(i);
        let s = [n, t];
        return (
          (i.contains = i.contains.concat(s)),
          (r.contains = r.contains.concat(s)),
          (s = s.concat(i, r)),
          {
            name: "Markdown",
            aliases: ["md", "mkdown", "mkd"],
            contains: [
              {
                className: "section",
                variants: [
                  { begin: "^#{1,6}", end: "$", contains: s },
                  {
                    begin: "(?=^.+?\\n[=-]{2,}$)",
                    contains: [
                      { begin: "^[=-]*$" },
                      { begin: "^", end: "\\n", contains: s },
                    ],
                  },
                ],
              },
              n,
              {
                className: "bullet",
                begin: "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
                end: "\\s+",
                excludeEnd: !0,
              },
              i,
              r,
              { className: "quote", begin: "^>\\s+", contains: s, end: "$" },
              {
                className: "code",
                variants: [
                  { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
                  { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
                  { begin: "```", end: "```+[ ]*$" },
                  { begin: "~~~", end: "~~~+[ ]*$" },
                  { begin: "`.+?`" },
                  {
                    begin: "(?=^( {4}|\\t))",
                    contains: [{ begin: "^( {4}|\\t)", end: "(\\n)$" }],
                    relevance: 0,
                  },
                ],
              },
              { begin: "^[-\\*]{3,}", end: "$" },
              t,
              {
                begin: /^\[[^\n]+\]:/,
                returnBegin: !0,
                contains: [
                  {
                    className: "symbol",
                    begin: /\[/,
                    end: /\]/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                  },
                  {
                    className: "link",
                    begin: /:\s*/,
                    end: /$/,
                    excludeBegin: !0,
                  },
                ],
              },
            ],
          }
        );
      };
    },
    199: function (e, n) {
      e.exports = function (e) {
        return {
          name: "Excel formulae",
          aliases: ["xlsx", "xls"],
          case_insensitive: !0,
          keywords: {
            $pattern: /[a-zA-Z][\w\.]*/,
            built_in:
              "ABS ACCRINT ACCRINTM ACOS ACOSH ACOT ACOTH AGGREGATE ADDRESS AMORDEGRC AMORLINC AND ARABIC AREAS ASC ASIN ASINH ATAN ATAN2 ATANH AVEDEV AVERAGE AVERAGEA AVERAGEIF AVERAGEIFS BAHTTEXT BASE BESSELI BESSELJ BESSELK BESSELY BETADIST BETA.DIST BETAINV BETA.INV BIN2DEC BIN2HEX BIN2OCT BINOMDIST BINOM.DIST BINOM.DIST.RANGE BINOM.INV BITAND BITLSHIFT BITOR BITRSHIFT BITXOR CALL CEILING CEILING.MATH CEILING.PRECISE CELL CHAR CHIDIST CHIINV CHITEST CHISQ.DIST CHISQ.DIST.RT CHISQ.INV CHISQ.INV.RT CHISQ.TEST CHOOSE CLEAN CODE COLUMN COLUMNS COMBIN COMBINA COMPLEX CONCAT CONCATENATE CONFIDENCE CONFIDENCE.NORM CONFIDENCE.T CONVERT CORREL COS COSH COT COTH COUNT COUNTA COUNTBLANK COUNTIF COUNTIFS COUPDAYBS COUPDAYS COUPDAYSNC COUPNCD COUPNUM COUPPCD COVAR COVARIANCE.P COVARIANCE.S CRITBINOM CSC CSCH CUBEKPIMEMBER CUBEMEMBER CUBEMEMBERPROPERTY CUBERANKEDMEMBER CUBESET CUBESETCOUNT CUBEVALUE CUMIPMT CUMPRINC DATE DATEDIF DATEVALUE DAVERAGE DAY DAYS DAYS360 DB DBCS DCOUNT DCOUNTA DDB DEC2BIN DEC2HEX DEC2OCT DECIMAL DEGREES DELTA DEVSQ DGET DISC DMAX DMIN DOLLAR DOLLARDE DOLLARFR DPRODUCT DSTDEV DSTDEVP DSUM DURATION DVAR DVARP EDATE EFFECT ENCODEURL EOMONTH ERF ERF.PRECISE ERFC ERFC.PRECISE ERROR.TYPE EUROCONVERT EVEN EXACT EXP EXPON.DIST EXPONDIST FACT FACTDOUBLE FALSE|0 F.DIST FDIST F.DIST.RT FILTERXML FIND FINDB F.INV F.INV.RT FINV FISHER FISHERINV FIXED FLOOR FLOOR.MATH FLOOR.PRECISE FORECAST FORECAST.ETS FORECAST.ETS.CONFINT FORECAST.ETS.SEASONALITY FORECAST.ETS.STAT FORECAST.LINEAR FORMULATEXT FREQUENCY F.TEST FTEST FV FVSCHEDULE GAMMA GAMMA.DIST GAMMADIST GAMMA.INV GAMMAINV GAMMALN GAMMALN.PRECISE GAUSS GCD GEOMEAN GESTEP GETPIVOTDATA GROWTH HARMEAN HEX2BIN HEX2DEC HEX2OCT HLOOKUP HOUR HYPERLINK HYPGEOM.DIST HYPGEOMDIST IF IFERROR IFNA IFS IMABS IMAGINARY IMARGUMENT IMCONJUGATE IMCOS IMCOSH IMCOT IMCSC IMCSCH IMDIV IMEXP IMLN IMLOG10 IMLOG2 IMPOWER IMPRODUCT IMREAL IMSEC IMSECH IMSIN IMSINH IMSQRT IMSUB IMSUM IMTAN INDEX INDIRECT INFO INT INTERCEPT INTRATE IPMT IRR ISBLANK ISERR ISERROR ISEVEN ISFORMULA ISLOGICAL ISNA ISNONTEXT ISNUMBER ISODD ISREF ISTEXT ISO.CEILING ISOWEEKNUM ISPMT JIS KURT LARGE LCM LEFT LEFTB LEN LENB LINEST LN LOG LOG10 LOGEST LOGINV LOGNORM.DIST LOGNORMDIST LOGNORM.INV LOOKUP LOWER MATCH MAX MAXA MAXIFS MDETERM MDURATION MEDIAN MID MIDBs MIN MINIFS MINA MINUTE MINVERSE MIRR MMULT MOD MODE MODE.MULT MODE.SNGL MONTH MROUND MULTINOMIAL MUNIT N NA NEGBINOM.DIST NEGBINOMDIST NETWORKDAYS NETWORKDAYS.INTL NOMINAL NORM.DIST NORMDIST NORMINV NORM.INV NORM.S.DIST NORMSDIST NORM.S.INV NORMSINV NOT NOW NPER NPV NUMBERVALUE OCT2BIN OCT2DEC OCT2HEX ODD ODDFPRICE ODDFYIELD ODDLPRICE ODDLYIELD OFFSET OR PDURATION PEARSON PERCENTILE.EXC PERCENTILE.INC PERCENTILE PERCENTRANK.EXC PERCENTRANK.INC PERCENTRANK PERMUT PERMUTATIONA PHI PHONETIC PI PMT POISSON.DIST POISSON POWER PPMT PRICE PRICEDISC PRICEMAT PROB PRODUCT PROPER PV QUARTILE QUARTILE.EXC QUARTILE.INC QUOTIENT RADIANS RAND RANDBETWEEN RANK.AVG RANK.EQ RANK RATE RECEIVED REGISTER.ID REPLACE REPLACEB REPT RIGHT RIGHTB ROMAN ROUND ROUNDDOWN ROUNDUP ROW ROWS RRI RSQ RTD SEARCH SEARCHB SEC SECH SECOND SERIESSUM SHEET SHEETS SIGN SIN SINH SKEW SKEW.P SLN SLOPE SMALL SQL.REQUEST SQRT SQRTPI STANDARDIZE STDEV STDEV.P STDEV.S STDEVA STDEVP STDEVPA STEYX SUBSTITUTE SUBTOTAL SUM SUMIF SUMIFS SUMPRODUCT SUMSQ SUMX2MY2 SUMX2PY2 SUMXMY2 SWITCH SYD T TAN TANH TBILLEQ TBILLPRICE TBILLYIELD T.DIST T.DIST.2T T.DIST.RT TDIST TEXT TEXTJOIN TIME TIMEVALUE T.INV T.INV.2T TINV TODAY TRANSPOSE TREND TRIM TRIMMEAN TRUE|0 TRUNC T.TEST TTEST TYPE UNICHAR UNICODE UPPER VALUE VAR VAR.P VAR.S VARA VARP VARPA VDB VLOOKUP WEBSERVICE WEEKDAY WEEKNUM WEIBULL WEIBULL.DIST WORKDAY WORKDAY.INTL XIRR XNPV XOR YEAR YEARFRAC YIELD YIELDDISC YIELDMAT Z.TEST ZTEST",
          },
          contains: [
            {
              begin: /^=/,
              end: /[^=]/,
              returnEnd: !0,
              illegal: /=/,
              relevance: 10,
            },
            {
              className: "symbol",
              begin: /\b[A-Z]{1,2}\d+\b/,
              end: /[^\d]/,
              excludeEnd: !0,
              relevance: 0,
            },
            {
              className: "symbol",
              begin: /[A-Z]{0,2}\d*:[A-Z]{0,2}\d*/,
              relevance: 0,
            },
            e.BACKSLASH_ESCAPE,
            e.QUOTE_STRING_MODE,
            { className: "number", begin: e.NUMBER_RE + "(%)?", relevance: 0 },
            e.COMMENT(/\bN\(/, /\)/, {
              excludeBegin: !0,
              excludeEnd: !0,
              illegal: /\n/,
            }),
          ],
        };
      };
    },
    200: function (e, n) {
      function a(...e) {
        return e
          .map((e) => {
            return (n = e) ? ("string" == typeof n ? n : n.source) : null;
            var n;
          })
          .join("");
      }
      e.exports = function (e) {
        const n = {
            variants: [
              e.COMMENT("!", "$", { relevance: 0 }),
              e.COMMENT("^C[ ]", "$", { relevance: 0 }),
              e.COMMENT("^C$", "$", { relevance: 0 }),
            ],
          },
          t = /(_[a-z_\d]+)?/,
          i = /([de][+-]?\d+)?/,
          r = {
            className: "number",
            variants: [
              { begin: a(/\b\d+/, /\.(\d*)/, i, t) },
              { begin: a(/\b\d+/, i, t) },
              { begin: a(/\.\d+/, i, t) },
            ],
            relevance: 0,
          },
          s = {
            className: "function",
            beginKeywords: "subroutine function program",
            illegal: "[${=\\n]",
            contains: [
              e.UNDERSCORE_TITLE_MODE,
              { className: "params", begin: "\\(", end: "\\)" },
            ],
          };
        return {
          name: "Fortran",
          case_insensitive: !0,
          aliases: ["f90", "f95"],
          keywords: {
            literal: ".False. .True.",
            keyword:
              "kind do concurrent local shared while private call intrinsic where elsewhere type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then block endblock endassociate public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. goto save else use module select case access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit continue format pause cycle exit c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg synchronous nopass non_overridable pass protected volatile abstract extends import non_intrinsic value deferred generic final enumerator class associate bind enum c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure impure integer real character complex logical codimension dimension allocatable|10 parameter external implicit|10 none double precision assign intent optional pointer target in out common equivalence data",
            built_in:
              "alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_of acosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr num_images parity popcnt poppar shifta shiftl shiftr this_image sync change team co_broadcast co_max co_min co_sum co_reduce",
          },
          illegal: /\/\*/,
          contains: [
            {
              className: "string",
              relevance: 0,
              variants: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
            },
            s,
            { begin: /^C\s*=(?!=)/, relevance: 0 },
            n,
            r,
          ],
        };
      };
    },
    201: function (e, n) {
      e.exports = function (e) {
        const n = {
          begin: "<",
          end: ">",
          contains: [e.inherit(e.TITLE_MODE, { begin: /'[a-zA-Z0-9_]+/ })],
        };
        return {
          name: "F#",
          aliases: ["fs"],
          keywords:
            "abstract and as assert base begin class default delegate do done downcast downto elif else end exception extern false finally for fun function global if in inherit inline interface internal lazy let match member module mutable namespace new null of open or override private public rec return sig static struct then to true try type upcast use val void when while with yield",
          illegal: /\/\*/,
          contains: [
            { className: "keyword", begin: /\b(yield|return|let|do)!/ },
            {
              className: "string",
              begin: '@"',
              end: '"',
              contains: [{ begin: '""' }],
            },
            { className: "string", begin: '"""', end: '"""' },
            e.COMMENT("\\(\\*(\\s)", "\\*\\)", { contains: ["self"] }),
            {
              className: "class",
              beginKeywords: "type",
              end: "\\(|=|$",
              excludeEnd: !0,
              contains: [e.UNDERSCORE_TITLE_MODE, n],
            },
            { className: "meta", begin: "\\[<", end: ">\\]", relevance: 10 },
            {
              className: "symbol",
              begin: "\\B('[A-Za-z])\\b",
              contains: [e.BACKSLASH_ESCAPE],
            },
            e.C_LINE_COMMENT_MODE,
            e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
            e.C_NUMBER_MODE,
          ],
        };
      };
    },
    202: function (e, n) {
      e.exports = function (e) {
        return {
          name: "GLSL",
          keywords: {
            keyword:
              "break continue discard do else for if return while switch case default attribute binding buffer ccw centroid centroid varying coherent column_major const cw depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip triangles triangles_adjacency uniform varying vertices volatile writeonly",
            type: "atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBuffer iimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void",
            built_in:
              "gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow",
            literal: "true false",
          },
          illegal: '"',
          contains: [
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            e.C_NUMBER_MODE,
            { className: "meta", begin: "#", end: "$" },
          ],
        };
      };
    },
    203: function (e, n) {
      e.exports = function (e) {
        const n = {
          keyword:
            "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
          literal: "true false iota nil",
          built_in:
            "append cap close complex copy imag len make new panic print println real recover delete",
        };
        return {
          name: "Go",
          aliases: ["golang"],
          keywords: n,
          illegal: "</",
          contains: [
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            {
              className: "string",
              variants: [
                e.QUOTE_STRING_MODE,
                e.APOS_STRING_MODE,
                { begin: "`", end: "`" },
              ],
            },
            {
              className: "number",
              variants: [
                { begin: e.C_NUMBER_RE + "[i]", relevance: 1 },
                e.C_NUMBER_MODE,
              ],
            },
            { begin: /:=/ },
            {
              className: "function",
              beginKeywords: "func",
              end: "\\s*(\\{|$)",
              excludeEnd: !0,
              contains: [
                e.TITLE_MODE,
                {
                  className: "params",
                  begin: /\(/,
                  end: /\)/,
                  keywords: n,
                  illegal: /["']/,
                },
              ],
            },
          ],
        };
      };
    },
    204: function (e, n) {
      e.exports = function (e) {
        return {
          name: "Gradle",
          case_insensitive: !0,
          keywords: {
            keyword:
              "task project allprojects subprojects artifacts buildscript configurations dependencies repositories sourceSets description delete from into include exclude source classpath destinationDir includes options sourceCompatibility targetCompatibility group flatDir doLast doFirst flatten todir fromdir ant def abstract break case catch continue default do else extends final finally for if implements instanceof native new private protected public return static switch synchronized throw throws transient try volatile while strictfp package import false null super this true antlrtask checkstyle codenarc copy boolean byte char class double float int interface long short void compile runTime file fileTree abs any append asList asWritable call collect compareTo count div dump each eachByte eachFile eachLine every find findAll flatten getAt getErr getIn getOut getText grep immutable inject inspect intersect invokeMethods isCase join leftShift minus multiply newInputStream newOutputStream newPrintWriter newReader newWriter next plus pop power previous print println push putAt read readBytes readLines reverse reverseEach round size sort splitEachLine step subMap times toInteger toList tokenize upto waitForOrKill withPrintWriter withReader withStream withWriter withWriterAppend write writeLine",
          },
          contains: [
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            e.NUMBER_MODE,
            e.REGEXP_MODE,
          ],
        };
      };
    },
    205: function (e, n) {
      e.exports = function (e) {
        return {
          name: "HAML",
          case_insensitive: !0,
          contains: [
            {
              className: "meta",
              begin:
                "^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",
              relevance: 10,
            },
            e.COMMENT("^\\s*(!=#|=#|-#|/).*$", !1, { relevance: 0 }),
            {
              begin: "^\\s*(-|=|!=)(?!#)",
              starts: { end: "\\n", subLanguage: "ruby" },
            },
            {
              className: "tag",
              begin: "^\\s*%",
              contains: [
                { className: "selector-tag", begin: "\\w+" },
                { className: "selector-id", begin: "#[\\w-]+" },
                { className: "selector-class", begin: "\\.[\\w-]+" },
                {
                  begin: /\{\s*/,
                  end: /\s*\}/,
                  contains: [
                    {
                      begin: ":\\w+\\s*=>",
                      end: ",\\s+",
                      returnBegin: !0,
                      endsWithParent: !0,
                      contains: [
                        { className: "attr", begin: ":\\w+" },
                        e.APOS_STRING_MODE,
                        e.QUOTE_STRING_MODE,
                        { begin: "\\w+", relevance: 0 },
                      ],
                    },
                  ],
                },
                {
                  begin: "\\(\\s*",
                  end: "\\s*\\)",
                  excludeEnd: !0,
                  contains: [
                    {
                      begin: "\\w+\\s*=",
                      end: "\\s+",
                      returnBegin: !0,
                      endsWithParent: !0,
                      contains: [
                        { className: "attr", begin: "\\w+", relevance: 0 },
                        e.APOS_STRING_MODE,
                        e.QUOTE_STRING_MODE,
                        { begin: "\\w+", relevance: 0 },
                      ],
                    },
                  ],
                },
              ],
            },
            { begin: "^\\s*[=~]\\s*" },
            { begin: /#\{/, starts: { end: /\}/, subLanguage: "ruby" } },
          ],
        };
      };
    },
    206: function (e, n) {
      e.exports = function (e) {
        const n = {
            variants: [
              e.COMMENT("--", "$"),
              e.COMMENT(/\{-/, /-\}/, { contains: ["self"] }),
            ],
          },
          a = { className: "meta", begin: /\{-#/, end: /#-\}/ },
          t = { className: "meta", begin: "^#", end: "$" },
          i = { className: "type", begin: "\\b[A-Z][\\w']*", relevance: 0 },
          r = {
            begin: "\\(",
            end: "\\)",
            illegal: '"',
            contains: [
              a,
              t,
              {
                className: "type",
                begin: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?",
              },
              e.inherit(e.TITLE_MODE, { begin: "[_a-z][\\w']*" }),
              n,
            ],
          };
        return {
          name: "Haskell",
          aliases: ["hs"],
          keywords:
            "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
          contains: [
            {
              beginKeywords: "module",
              end: "where",
              keywords: "module where",
              contains: [r, n],
              illegal: "\\W\\.|;",
            },
            {
              begin: "\\bimport\\b",
              end: "$",
              keywords: "import qualified as hiding",
              contains: [r, n],
              illegal: "\\W\\.|;",
            },
            {
              className: "class",
              begin: "^(\\s*)?(class|instance)\\b",
              end: "where",
              keywords: "class family instance where",
              contains: [i, r, n],
            },
            {
              className: "class",
              begin: "\\b(data|(new)?type)\\b",
              end: "$",
              keywords: "data family type newtype deriving",
              contains: [
                a,
                i,
                r,
                { begin: /\{/, end: /\}/, contains: r.contains },
                n,
              ],
            },
            { beginKeywords: "default", end: "$", contains: [i, r, n] },
            {
              beginKeywords: "infix infixl infixr",
              end: "$",
              contains: [e.C_NUMBER_MODE, n],
            },
            {
              begin: "\\bforeign\\b",
              end: "$",
              keywords:
                "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
              contains: [i, e.QUOTE_STRING_MODE, n],
            },
            {
              className: "meta",
              begin: "#!\\/usr\\/bin\\/env runhaskell",
              end: "$",
            },
            a,
            t,
            e.QUOTE_STRING_MODE,
            e.C_NUMBER_MODE,
            i,
            e.inherit(e.TITLE_MODE, { begin: "^[_a-z][\\w']*" }),
            n,
            { begin: "->|<-" },
          ],
        };
      };
    },
    207: function (e, n) {
      function a(e) {
        return e ? ("string" == typeof e ? e : e.source) : null;
      }
      function t(...e) {
        return e.map((e) => a(e)).join("");
      }
      e.exports = function (e) {
        const n = {
            className: "number",
            relevance: 0,
            variants: [
              { begin: /([+-]+)?[\d]+_[\d_]+/ },
              { begin: e.NUMBER_RE },
            ],
          },
          i = e.COMMENT();
        i.variants = [
          { begin: /;/, end: /$/ },
          { begin: /#/, end: /$/ },
        ];
        const r = {
            className: "variable",
            variants: [
              { begin: /\$[\w\d"][\w\d_]*/ },
              { begin: /\$\{(.*?)\}/ },
            ],
          },
          s = { className: "literal", begin: /\bon|off|true|false|yes|no\b/ },
          o = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE],
            variants: [
              { begin: "'''", end: "'''", relevance: 10 },
              { begin: '"""', end: '"""', relevance: 10 },
              { begin: '"', end: '"' },
              { begin: "'", end: "'" },
            ],
          },
          l = {
            begin: /\[/,
            end: /\]/,
            contains: [i, s, r, o, n, "self"],
            relevance: 0,
          },
          c = (function (...e) {
            return "(" + e.map((e) => a(e)).join("|") + ")";
          })(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/);
        return {
          name: "TOML, also INI",
          aliases: ["toml"],
          case_insensitive: !0,
          illegal: /\S/,
          contains: [
            i,
            { className: "section", begin: /\[+/, end: /\]+/ },
            {
              begin: t(
                c,
                "(\\s*\\.\\s*",
                c,
                ")*",
                t("(?=", /\s*=\s*[^#\s]/, ")")
              ),
              className: "attr",
              starts: { end: /$/, contains: [i, l, s, r, o, n] },
            },
          ],
        };
      };
    },
    208: function (e, n) {
      var a = "\\.([0-9](_*[0-9])*)",
        t = "[0-9a-fA-F](_*[0-9a-fA-F])*",
        i = {
          className: "number",
          variants: [
            {
              begin: `(\\b([0-9](_*[0-9])*)((${a})|\\.)?|(${a}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`,
            },
            { begin: `\\b([0-9](_*[0-9])*)((${a})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
            { begin: `(${a})[fFdD]?\\b` },
            { begin: "\\b([0-9](_*[0-9])*)[fFdD]\\b" },
            {
              begin: `\\b0[xX]((${t})\\.?|(${t})?\\.(${t}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`,
            },
            { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
            { begin: `\\b0[xX](${t})[lL]?\\b` },
            { begin: "\\b0(_*[0-7])*[lL]?\\b" },
            { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" },
          ],
          relevance: 0,
        };
      e.exports = function (e) {
        var n = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",
          a =
            "false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",
          t = {
            className: "meta",
            begin: "@" + n,
            contains: [{ begin: /\(/, end: /\)/, contains: ["self"] }],
          };
        const r = i;
        return {
          name: "Java",
          aliases: ["jsp"],
          keywords: a,
          illegal: /<\/|#/,
          contains: [
            e.COMMENT("/\\*\\*", "\\*/", {
              relevance: 0,
              contains: [
                { begin: /\w+@/, relevance: 0 },
                { className: "doctag", begin: "@[A-Za-z]+" },
              ],
            }),
            {
              begin: /import java\.[a-z]+\./,
              keywords: "import",
              relevance: 2,
            },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            {
              className: "class",
              beginKeywords: "class interface enum",
              end: /[{;=]/,
              excludeEnd: !0,
              relevance: 1,
              keywords: "class interface enum",
              illegal: /[:"\[\]]/,
              contains: [
                { beginKeywords: "extends implements" },
                e.UNDERSCORE_TITLE_MODE,
              ],
            },
            { beginKeywords: "new throw return else", relevance: 0 },
            {
              className: "class",
              begin: "record\\s+" + e.UNDERSCORE_IDENT_RE + "\\s*\\(",
              returnBegin: !0,
              excludeEnd: !0,
              end: /[{;=]/,
              keywords: a,
              contains: [
                { beginKeywords: "record" },
                {
                  begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                  returnBegin: !0,
                  relevance: 0,
                  contains: [e.UNDERSCORE_TITLE_MODE],
                },
                {
                  className: "params",
                  begin: /\(/,
                  end: /\)/,
                  keywords: a,
                  relevance: 0,
                  contains: [e.C_BLOCK_COMMENT_MODE],
                },
                e.C_LINE_COMMENT_MODE,
                e.C_BLOCK_COMMENT_MODE,
              ],
            },
            {
              className: "function",
              begin:
                "([À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*)*>)?\\s+)+" +
                e.UNDERSCORE_IDENT_RE +
                "\\s*\\(",
              returnBegin: !0,
              end: /[{;=]/,
              excludeEnd: !0,
              keywords: a,
              contains: [
                {
                  begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                  returnBegin: !0,
                  relevance: 0,
                  contains: [e.UNDERSCORE_TITLE_MODE],
                },
                {
                  className: "params",
                  begin: /\(/,
                  end: /\)/,
                  keywords: a,
                  relevance: 0,
                  contains: [
                    t,
                    e.APOS_STRING_MODE,
                    e.QUOTE_STRING_MODE,
                    r,
                    e.C_BLOCK_COMMENT_MODE,
                  ],
                },
                e.C_LINE_COMMENT_MODE,
                e.C_BLOCK_COMMENT_MODE,
              ],
            },
            r,
            t,
          ],
        };
      };
    },
    209: function (e, n) {
      const a = "[A-Za-z$_][0-9A-Za-z$_]*",
        t = [
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
        const n = a,
          l = "<>",
          c = "</>",
          d = {
            begin: /<[A-Za-z0-9\\._:-]+/,
            end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
            isTrulyOpeningTag: (e, n) => {
              const a = e[0].length + e.index,
                t = e.input[a];
              "<" !== t
                ? ">" === t &&
                  (((e, { after: n }) => {
                    const a = "</" + e[0].slice(1);
                    return -1 !== e.input.indexOf(a, n);
                  })(e, { after: a }) ||
                    n.ignoreMatch())
                : n.ignoreMatch();
            },
          },
          g = { $pattern: a, keyword: t, literal: i, built_in: r },
          m = "\\.([0-9](_?[0-9])*)",
          u = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
          b = {
            className: "number",
            variants: [
              {
                begin: `(\\b(${u})((${m})|\\.)?|(${m}))[eE][+-]?([0-9](_?[0-9])*)\\b`,
              },
              { begin: `\\b(${u})\\b((${m})\\b|\\.)?|(${m})\\b` },
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
            keywords: g,
            contains: [],
          },
          _ = {
            begin: "html`",
            end: "",
            starts: {
              end: "`",
              returnEnd: !1,
              contains: [e.BACKSLASH_ESCAPE, p],
              subLanguage: "xml",
            },
          },
          E = {
            begin: "css`",
            end: "",
            starts: {
              end: "`",
              returnEnd: !1,
              contains: [e.BACKSLASH_ESCAPE, p],
              subLanguage: "css",
            },
          },
          f = {
            className: "string",
            begin: "`",
            end: "`",
            contains: [e.BACKSLASH_ESCAPE, p],
          },
          N = {
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
          M = [
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            _,
            E,
            f,
            b,
            e.REGEXP_MODE,
          ];
        p.contains = M.concat({
          begin: /\{/,
          end: /\}/,
          keywords: g,
          contains: ["self"].concat(M),
        });
        const h = [].concat(N, p.contains),
          C = h.concat([
            {
              begin: /\(/,
              end: /\)/,
              keywords: g,
              contains: ["self"].concat(h),
            },
          ]),
          S = {
            className: "params",
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: g,
            contains: C,
          };
        return {
          name: "Javascript",
          aliases: ["js", "jsx", "mjs", "cjs"],
          keywords: g,
          exports: { PARAMS_CONTAINS: C },
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
            _,
            E,
            f,
            N,
            b,
            {
              begin: o(
                /[{,\n]\s*/,
                s(o(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, n + "\\s*:"))
              ),
              relevance: 0,
              contains: [
                { className: "attr", begin: n + s("\\s*:"), relevance: 0 },
              ],
            },
            {
              begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
              keywords: "return throw case",
              contains: [
                N,
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
                          keywords: g,
                          contains: C,
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
              keywords: g,
              contains: ["self", e.inherit(e.TITLE_MODE, { begin: n }), S],
              illegal: /%/,
            },
            { beginKeywords: "while if switch catch for" },
            {
              className: "function",
              begin:
                e.UNDERSCORE_IDENT_RE +
                "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
              returnBegin: !0,
              contains: [S, e.inherit(e.TITLE_MODE, { begin: n })],
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
              contains: [{ beginKeywords: "extends" }, e.UNDERSCORE_TITLE_MODE],
            },
            {
              begin: /\b(?=constructor)/,
              end: /[{;]/,
              excludeEnd: !0,
              contains: [e.inherit(e.TITLE_MODE, { begin: n }), "self", S],
            },
            {
              begin: "(get|set)\\s+(?=" + n + "\\()",
              end: /\{/,
              keywords: "get set",
              contains: [
                e.inherit(e.TITLE_MODE, { begin: n }),
                { begin: /\(\)/ },
                S,
              ],
            },
            { begin: /\$[(.]/ },
          ],
        };
      };
    },
    210: function (e, n) {
      e.exports = function (e) {
        const n = {
          className: "params",
          begin: /\(/,
          end: /\)/,
          contains: [
            {
              begin: /[\w-]+ *=/,
              returnBegin: !0,
              relevance: 0,
              contains: [{ className: "attr", begin: /[\w-]+/ }],
            },
          ],
          relevance: 0,
        };
        return {
          name: "JBoss CLI",
          aliases: ["wildfly-cli"],
          keywords: {
            $pattern: "[a-z-]+",
            keyword:
              "alias batch cd clear command connect connection-factory connection-info data-source deploy deployment-info deployment-overlay echo echo-dmr help history if jdbc-driver-info jms-queue|20 jms-topic|20 ls patch pwd quit read-attribute read-operation reload rollout-plan run-batch set shutdown try unalias undeploy unset version xa-data-source",
            literal: "true false",
          },
          contains: [
            e.HASH_COMMENT_MODE,
            e.QUOTE_STRING_MODE,
            { className: "params", begin: /--[\w\-=\/]+/ },
            { className: "function", begin: /:[\w\-.]+/, relevance: 0 },
            { className: "string", begin: /\B([\/.])[\w\-.\/=]+/ },
            n,
          ],
        };
      };
    },
    211: function (e, n) {
      e.exports = function (e) {
        const n = { literal: "true false null" },
          a = [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
          t = [e.QUOTE_STRING_MODE, e.C_NUMBER_MODE],
          i = {
            end: ",",
            endsWithParent: !0,
            excludeEnd: !0,
            contains: t,
            keywords: n,
          },
          r = {
            begin: /\{/,
            end: /\}/,
            contains: [
              {
                className: "attr",
                begin: /"/,
                end: /"/,
                contains: [e.BACKSLASH_ESCAPE],
                illegal: "\\n",
              },
              e.inherit(i, { begin: /:/ }),
            ].concat(a),
            illegal: "\\S",
          },
          s = {
            begin: "\\[",
            end: "\\]",
            contains: [e.inherit(i)],
            illegal: "\\S",
          };
        return (
          t.push(r, s),
          a.forEach(function (e) {
            t.push(e);
          }),
          { name: "JSON", contains: t, keywords: n, illegal: "\\S" }
        );
      };
    },
    212: function (e, n) {
      e.exports = function (e) {
        var n = "[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",
          a = {
            $pattern: n,
            keyword: [
              "baremodule",
              "begin",
              "break",
              "catch",
              "ccall",
              "const",
              "continue",
              "do",
              "else",
              "elseif",
              "end",
              "export",
              "false",
              "finally",
              "for",
              "function",
              "global",
              "if",
              "import",
              "in",
              "isa",
              "let",
              "local",
              "macro",
              "module",
              "quote",
              "return",
              "true",
              "try",
              "using",
              "where",
              "while",
            ],
            literal: [
              "ARGS",
              "C_NULL",
              "DEPOT_PATH",
              "ENDIAN_BOM",
              "ENV",
              "Inf",
              "Inf16",
              "Inf32",
              "Inf64",
              "InsertionSort",
              "LOAD_PATH",
              "MergeSort",
              "NaN",
              "NaN16",
              "NaN32",
              "NaN64",
              "PROGRAM_FILE",
              "QuickSort",
              "RoundDown",
              "RoundFromZero",
              "RoundNearest",
              "RoundNearestTiesAway",
              "RoundNearestTiesUp",
              "RoundToZero",
              "RoundUp",
              "VERSION|0",
              "devnull",
              "false",
              "im",
              "missing",
              "nothing",
              "pi",
              "stderr",
              "stdin",
              "stdout",
              "true",
              "undef",
              "π",
              "ℯ",
            ],
            built_in: [
              "AbstractArray",
              "AbstractChannel",
              "AbstractChar",
              "AbstractDict",
              "AbstractDisplay",
              "AbstractFloat",
              "AbstractIrrational",
              "AbstractMatrix",
              "AbstractRange",
              "AbstractSet",
              "AbstractString",
              "AbstractUnitRange",
              "AbstractVecOrMat",
              "AbstractVector",
              "Any",
              "ArgumentError",
              "Array",
              "AssertionError",
              "BigFloat",
              "BigInt",
              "BitArray",
              "BitMatrix",
              "BitSet",
              "BitVector",
              "Bool",
              "BoundsError",
              "CapturedException",
              "CartesianIndex",
              "CartesianIndices",
              "Cchar",
              "Cdouble",
              "Cfloat",
              "Channel",
              "Char",
              "Cint",
              "Cintmax_t",
              "Clong",
              "Clonglong",
              "Cmd",
              "Colon",
              "Complex",
              "ComplexF16",
              "ComplexF32",
              "ComplexF64",
              "CompositeException",
              "Condition",
              "Cptrdiff_t",
              "Cshort",
              "Csize_t",
              "Cssize_t",
              "Cstring",
              "Cuchar",
              "Cuint",
              "Cuintmax_t",
              "Culong",
              "Culonglong",
              "Cushort",
              "Cvoid",
              "Cwchar_t",
              "Cwstring",
              "DataType",
              "DenseArray",
              "DenseMatrix",
              "DenseVecOrMat",
              "DenseVector",
              "Dict",
              "DimensionMismatch",
              "Dims",
              "DivideError",
              "DomainError",
              "EOFError",
              "Enum",
              "ErrorException",
              "Exception",
              "ExponentialBackOff",
              "Expr",
              "Float16",
              "Float32",
              "Float64",
              "Function",
              "GlobalRef",
              "HTML",
              "IO",
              "IOBuffer",
              "IOContext",
              "IOStream",
              "IdDict",
              "IndexCartesian",
              "IndexLinear",
              "IndexStyle",
              "InexactError",
              "InitError",
              "Int",
              "Int128",
              "Int16",
              "Int32",
              "Int64",
              "Int8",
              "Integer",
              "InterruptException",
              "InvalidStateException",
              "Irrational",
              "KeyError",
              "LinRange",
              "LineNumberNode",
              "LinearIndices",
              "LoadError",
              "MIME",
              "Matrix",
              "Method",
              "MethodError",
              "Missing",
              "MissingException",
              "Module",
              "NTuple",
              "NamedTuple",
              "Nothing",
              "Number",
              "OrdinalRange",
              "OutOfMemoryError",
              "OverflowError",
              "Pair",
              "PartialQuickSort",
              "PermutedDimsArray",
              "Pipe",
              "ProcessFailedException",
              "Ptr",
              "QuoteNode",
              "Rational",
              "RawFD",
              "ReadOnlyMemoryError",
              "Real",
              "ReentrantLock",
              "Ref",
              "Regex",
              "RegexMatch",
              "RoundingMode",
              "SegmentationFault",
              "Set",
              "Signed",
              "Some",
              "StackOverflowError",
              "StepRange",
              "StepRangeLen",
              "StridedArray",
              "StridedMatrix",
              "StridedVecOrMat",
              "StridedVector",
              "String",
              "StringIndexError",
              "SubArray",
              "SubString",
              "SubstitutionString",
              "Symbol",
              "SystemError",
              "Task",
              "TaskFailedException",
              "Text",
              "TextDisplay",
              "Timer",
              "Tuple",
              "Type",
              "TypeError",
              "TypeVar",
              "UInt",
              "UInt128",
              "UInt16",
              "UInt32",
              "UInt64",
              "UInt8",
              "UndefInitializer",
              "UndefKeywordError",
              "UndefRefError",
              "UndefVarError",
              "Union",
              "UnionAll",
              "UnitRange",
              "Unsigned",
              "Val",
              "Vararg",
              "VecElement",
              "VecOrMat",
              "Vector",
              "VersionNumber",
              "WeakKeyDict",
              "WeakRef",
            ],
          },
          t = { keywords: a, illegal: /<\// },
          i = { className: "subst", begin: /\$\(/, end: /\)/, keywords: a },
          r = { className: "variable", begin: "\\$" + n },
          s = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE, i, r],
            variants: [
              { begin: /\w*"""/, end: /"""\w*/, relevance: 10 },
              { begin: /\w*"/, end: /"\w*/ },
            ],
          },
          o = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE, i, r],
            begin: "`",
            end: "`",
          },
          l = { className: "meta", begin: "@" + n };
        return (
          (t.name = "Julia"),
          (t.contains = [
            {
              className: "number",
              begin:
                /(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,
              relevance: 0,
            },
            { className: "string", begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/ },
            s,
            o,
            l,
            {
              className: "comment",
              variants: [
                { begin: "#=", end: "=#", relevance: 10 },
                { begin: "#", end: "$" },
              ],
            },
            e.HASH_COMMENT_MODE,
            {
              className: "keyword",
              begin:
                "\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b",
            },
            { begin: /<:/ },
          ]),
          (i.contains = t.contains),
          t
        );
      };
    },
    213: function (e, n) {
      var a = "\\.([0-9](_*[0-9])*)",
        t = "[0-9a-fA-F](_*[0-9a-fA-F])*",
        i = {
          className: "number",
          variants: [
            {
              begin: `(\\b([0-9](_*[0-9])*)((${a})|\\.)?|(${a}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`,
            },
            { begin: `\\b([0-9](_*[0-9])*)((${a})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
            { begin: `(${a})[fFdD]?\\b` },
            { begin: "\\b([0-9](_*[0-9])*)[fFdD]\\b" },
            {
              begin: `\\b0[xX]((${t})\\.?|(${t})?\\.(${t}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`,
            },
            { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
            { begin: `\\b0[xX](${t})[lL]?\\b` },
            { begin: "\\b0(_*[0-7])*[lL]?\\b" },
            { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" },
          ],
          relevance: 0,
        };
      e.exports = function (e) {
        const n = {
            keyword:
              "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
            built_in:
              "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
            literal: "true false null",
          },
          a = { className: "symbol", begin: e.UNDERSCORE_IDENT_RE + "@" },
          t = {
            className: "subst",
            begin: /\$\{/,
            end: /\}/,
            contains: [e.C_NUMBER_MODE],
          },
          r = { className: "variable", begin: "\\$" + e.UNDERSCORE_IDENT_RE },
          s = {
            className: "string",
            variants: [
              { begin: '"""', end: '"""(?=[^"])', contains: [r, t] },
              {
                begin: "'",
                end: "'",
                illegal: /\n/,
                contains: [e.BACKSLASH_ESCAPE],
              },
              {
                begin: '"',
                end: '"',
                illegal: /\n/,
                contains: [e.BACKSLASH_ESCAPE, r, t],
              },
            ],
          };
        t.contains.push(s);
        const o = {
            className: "meta",
            begin:
              "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" +
              e.UNDERSCORE_IDENT_RE +
              ")?",
          },
          l = {
            className: "meta",
            begin: "@" + e.UNDERSCORE_IDENT_RE,
            contains: [
              {
                begin: /\(/,
                end: /\)/,
                contains: [e.inherit(s, { className: "meta-string" })],
              },
            ],
          },
          c = i,
          d = e.COMMENT("/\\*", "\\*/", { contains: [e.C_BLOCK_COMMENT_MODE] }),
          g = {
            variants: [
              { className: "type", begin: e.UNDERSCORE_IDENT_RE },
              { begin: /\(/, end: /\)/, contains: [] },
            ],
          },
          m = g;
        return (
          (m.variants[1].contains = [g]),
          (g.variants[1].contains = [m]),
          {
            name: "Kotlin",
            aliases: ["kt"],
            keywords: n,
            contains: [
              e.COMMENT("/\\*\\*", "\\*/", {
                relevance: 0,
                contains: [{ className: "doctag", begin: "@[A-Za-z]+" }],
              }),
              e.C_LINE_COMMENT_MODE,
              d,
              {
                className: "keyword",
                begin: /\b(break|continue|return|this)\b/,
                starts: { contains: [{ className: "symbol", begin: /@\w+/ }] },
              },
              a,
              o,
              l,
              {
                className: "function",
                beginKeywords: "fun",
                end: "[(]|$",
                returnBegin: !0,
                excludeEnd: !0,
                keywords: n,
                relevance: 5,
                contains: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                    returnBegin: !0,
                    relevance: 0,
                    contains: [e.UNDERSCORE_TITLE_MODE],
                  },
                  {
                    className: "type",
                    begin: /</,
                    end: />/,
                    keywords: "reified",
                    relevance: 0,
                  },
                  {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    endsParent: !0,
                    keywords: n,
                    relevance: 0,
                    contains: [
                      {
                        begin: /:/,
                        end: /[=,\/]/,
                        endsWithParent: !0,
                        contains: [g, e.C_LINE_COMMENT_MODE, d],
                        relevance: 0,
                      },
                      e.C_LINE_COMMENT_MODE,
                      d,
                      o,
                      l,
                      s,
                      e.C_NUMBER_MODE,
                    ],
                  },
                  d,
                ],
              },
              {
                className: "class",
                beginKeywords: "class interface trait",
                end: /[:\{(]|$/,
                excludeEnd: !0,
                illegal: "extends implements",
                contains: [
                  {
                    beginKeywords:
                      "public protected internal private constructor",
                  },
                  e.UNDERSCORE_TITLE_MODE,
                  {
                    className: "type",
                    begin: /</,
                    end: />/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    relevance: 0,
                  },
                  {
                    className: "type",
                    begin: /[,:]\s*/,
                    end: /[<\(,]|$/,
                    excludeBegin: !0,
                    returnEnd: !0,
                  },
                  o,
                  l,
                ],
              },
              s,
              {
                className: "meta",
                begin: "^#!/usr/bin/env",
                end: "$",
                illegal: "\n",
              },
              c,
            ],
          }
        );
      };
    },
    214: function (e, n) {
      e.exports = function (e) {
        const n = "[a-zA-Z_][\\w.]*",
          a = "<\\?(lasso(script)?|=)",
          t = "\\]|\\?>",
          i = {
            $pattern: "[a-zA-Z_][\\w.]*|&[lg]t;",
            literal:
              "true false none minimal full all void and or not bw nbw ew new cn ncn lt lte gt gte eq neq rx nrx ft",
            built_in:
              "array date decimal duration integer map pair string tag xml null boolean bytes keyword list locale queue set stack staticarray local var variable global data self inherited currentcapture givenblock",
            keyword:
              "cache database_names database_schemanames database_tablenames define_tag define_type email_batch encode_set html_comment handle handle_error header if inline iterate ljax_target link link_currentaction link_currentgroup link_currentrecord link_detail link_firstgroup link_firstrecord link_lastgroup link_lastrecord link_nextgroup link_nextrecord link_prevgroup link_prevrecord log loop namespace_using output_none portal private protect records referer referrer repeating resultset rows search_args search_arguments select sort_args sort_arguments thread_atomic value_list while abort case else fail_if fail_ifnot fail if_empty if_false if_null if_true loop_abort loop_continue loop_count params params_up return return_value run_children soap_definetag soap_lastrequest soap_lastresponse tag_name ascending average by define descending do equals frozen group handle_failure import in into join let match max min on order parent protected provide public require returnhome skip split_thread sum take thread to trait type where with yield yieldhome",
          },
          r = e.COMMENT("\x3c!--", "--\x3e", { relevance: 0 }),
          s = {
            className: "meta",
            begin: "\\[noprocess\\]",
            starts: { end: "\\[/noprocess\\]", returnEnd: !0, contains: [r] },
          },
          o = { className: "meta", begin: "\\[/noprocess|" + a },
          l = { className: "symbol", begin: "'[a-zA-Z_][\\w.]*'" },
          c = [
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            e.inherit(e.C_NUMBER_MODE, {
              begin: e.C_NUMBER_RE + "|(-?infinity|NaN)\\b",
            }),
            e.inherit(e.APOS_STRING_MODE, { illegal: null }),
            e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
            { className: "string", begin: "`", end: "`" },
            {
              variants: [
                { begin: "[#$][a-zA-Z_][\\w.]*" },
                { begin: "#", end: "\\d+", illegal: "\\W" },
              ],
            },
            { className: "type", begin: "::\\s*", end: n, illegal: "\\W" },
            {
              className: "params",
              variants: [
                { begin: "-(?!infinity)[a-zA-Z_][\\w.]*", relevance: 0 },
                { begin: "(\\.\\.\\.)" },
              ],
            },
            { begin: /(->|\.)\s*/, relevance: 0, contains: [l] },
            {
              className: "class",
              beginKeywords: "define",
              returnEnd: !0,
              end: "\\(|=>",
              contains: [
                e.inherit(e.TITLE_MODE, {
                  begin: "[a-zA-Z_][\\w.]*(=(?!>))?|[-+*/%](?!>)",
                }),
              ],
            },
          ];
        return {
          name: "Lasso",
          aliases: ["ls", "lassoscript"],
          case_insensitive: !0,
          keywords: i,
          contains: [
            {
              className: "meta",
              begin: t,
              relevance: 0,
              starts: {
                end: "\\[|" + a,
                returnEnd: !0,
                relevance: 0,
                contains: [r],
              },
            },
            s,
            o,
            {
              className: "meta",
              begin: "\\[no_square_brackets",
              starts: {
                end: "\\[/no_square_brackets\\]",
                keywords: i,
                contains: [
                  {
                    className: "meta",
                    begin: t,
                    relevance: 0,
                    starts: {
                      end: "\\[noprocess\\]|" + a,
                      returnEnd: !0,
                      contains: [r],
                    },
                  },
                  s,
                  o,
                ].concat(c),
              },
            },
            { className: "meta", begin: "\\[", relevance: 0 },
            { className: "meta", begin: "^#!", end: "lasso9$", relevance: 10 },
          ].concat(c),
        };
      };
    },
    215: function (e, n) {
      e.exports = function (e) {
        const n = [
            { begin: /\^{6}[0-9a-f]{6}/ },
            { begin: /\^{5}[0-9a-f]{5}/ },
            { begin: /\^{4}[0-9a-f]{4}/ },
            { begin: /\^{3}[0-9a-f]{3}/ },
            { begin: /\^{2}[0-9a-f]{2}/ },
            { begin: /\^{2}[\u0000-\u007f]/ },
          ],
          a = [
            {
              className: "keyword",
              begin: /\\/,
              relevance: 0,
              contains: [
                {
                  endsParent: !0,
                  begin: (function (...e) {
                    return (
                      "(" +
                      e
                        .map((e) => {
                          return (n = e)
                            ? "string" == typeof n
                              ? n
                              : n.source
                            : null;
                          var n;
                        })
                        .join("|") +
                      ")"
                    );
                  })(
                    ...[
                      "(?:NeedsTeXFormat|RequirePackage|GetIdInfo)",
                      "Provides(?:Expl)?(?:Package|Class|File)",
                      "(?:DeclareOption|ProcessOptions)",
                      "(?:documentclass|usepackage|input|include)",
                      "makeat(?:letter|other)",
                      "ExplSyntax(?:On|Off)",
                      "(?:new|renew|provide)?command",
                      "(?:re)newenvironment",
                      "(?:New|Renew|Provide|Declare)(?:Expandable)?DocumentCommand",
                      "(?:New|Renew|Provide|Declare)DocumentEnvironment",
                      "(?:(?:e|g|x)?def|let)",
                      "(?:begin|end)",
                      "(?:part|chapter|(?:sub){0,2}section|(?:sub)?paragraph)",
                      "caption",
                      "(?:label|(?:eq|page|name)?ref|(?:paren|foot|super)?cite)",
                      "(?:alpha|beta|[Gg]amma|[Dd]elta|(?:var)?epsilon|zeta|eta|[Tt]heta|vartheta)",
                      "(?:iota|(?:var)?kappa|[Ll]ambda|mu|nu|[Xx]i|[Pp]i|varpi|(?:var)rho)",
                      "(?:[Ss]igma|varsigma|tau|[Uu]psilon|[Pp]hi|varphi|chi|[Pp]si|[Oo]mega)",
                      "(?:frac|sum|prod|lim|infty|times|sqrt|leq|geq|left|right|middle|[bB]igg?)",
                      "(?:[lr]angle|q?quad|[lcvdi]?dots|d?dot|hat|tilde|bar)",
                    ].map((e) => e + "(?![a-zA-Z@:_])")
                  ),
                },
                {
                  endsParent: !0,
                  begin: new RegExp(
                    [
                      "(?:__)?[a-zA-Z]{2,}_[a-zA-Z](?:_?[a-zA-Z])+:[a-zA-Z]*",
                      "[lgc]__?[a-zA-Z](?:_?[a-zA-Z])*_[a-zA-Z]{2,}",
                      "[qs]__?[a-zA-Z](?:_?[a-zA-Z])+",
                      "use(?:_i)?:[a-zA-Z]*",
                      "(?:else|fi|or):",
                      "(?:if|cs|exp):w",
                      "(?:hbox|vbox):n",
                      "::[a-zA-Z]_unbraced",
                      "::[a-zA-Z:]",
                    ]
                      .map((e) => e + "(?![a-zA-Z:_])")
                      .join("|")
                  ),
                },
                { endsParent: !0, variants: n },
                {
                  endsParent: !0,
                  relevance: 0,
                  variants: [{ begin: /[a-zA-Z@]+/ }, { begin: /[^a-zA-Z@]?/ }],
                },
              ],
            },
            { className: "params", relevance: 0, begin: /#+\d?/ },
            { variants: n },
            { className: "built_in", relevance: 0, begin: /[$&^_]/ },
            { className: "meta", begin: "% !TeX", end: "$", relevance: 10 },
            e.COMMENT("%", "$", { relevance: 0 }),
          ],
          t = {
            begin: /\{/,
            end: /\}/,
            relevance: 0,
            contains: ["self", ...a],
          },
          i = e.inherit(t, {
            relevance: 0,
            endsParent: !0,
            contains: [t, ...a],
          }),
          r = {
            begin: /\[/,
            end: /\]/,
            endsParent: !0,
            relevance: 0,
            contains: [t, ...a],
          },
          s = { begin: /\s+/, relevance: 0 },
          o = [i],
          l = [r],
          c = function (e, n) {
            return {
              contains: [s],
              starts: { relevance: 0, contains: e, starts: n },
            };
          },
          d = function (e, n) {
            return {
              begin: "\\\\" + e + "(?![a-zA-Z@:_])",
              keywords: { $pattern: /\\[a-zA-Z]+/, keyword: "\\" + e },
              relevance: 0,
              contains: [s],
              starts: n,
            };
          },
          g = function (n, a) {
            return e.inherit(
              {
                begin: "\\\\begin(?=[ \t]*(\\r?\\n[ \t]*)?\\{" + n + "\\})",
                keywords: { $pattern: /\\[a-zA-Z]+/, keyword: "\\begin" },
                relevance: 0,
              },
              c(o, a)
            );
          },
          m = (n = "string") =>
            e.END_SAME_AS_BEGIN({
              className: n,
              begin: /(.|\r?\n)/,
              end: /(.|\r?\n)/,
              excludeBegin: !0,
              excludeEnd: !0,
              endsParent: !0,
            }),
          u = function (e) {
            return { className: "string", end: "(?=\\\\end\\{" + e + "\\})" };
          },
          b = (e = "string") => ({
            relevance: 0,
            begin: /\{/,
            starts: {
              endsParent: !0,
              contains: [
                {
                  className: e,
                  end: /(?=\})/,
                  endsParent: !0,
                  contains: [
                    {
                      begin: /\{/,
                      end: /\}/,
                      relevance: 0,
                      contains: ["self"],
                    },
                  ],
                },
              ],
            },
          });
        return {
          name: "LaTeX",
          aliases: ["TeX"],
          contains: [
            ...[
              ...["verb", "lstinline"].map((e) => d(e, { contains: [m()] })),
              d("mint", c(o, { contains: [m()] })),
              d("mintinline", c(o, { contains: [b(), m()] })),
              d("url", { contains: [b("link"), b("link")] }),
              d("hyperref", { contains: [b("link")] }),
              d("href", c(l, { contains: [b("link")] })),
              ...[].concat(
                ...["", "\\*"].map((e) => [
                  g("verbatim" + e, u("verbatim" + e)),
                  g("filecontents" + e, c(o, u("filecontents" + e))),
                  ...["", "B", "L"].map((n) =>
                    g(n + "Verbatim" + e, c(l, u(n + "Verbatim" + e)))
                  ),
                ])
              ),
              g("minted", c(l, c(o, u("minted")))),
            ],
            ...a,
          ],
        };
      };
    },
    216: function (e, n) {
      e.exports = function (e) {
        return {
          name: "Leaf",
          contains: [
            {
              className: "function",
              begin: "#+[A-Za-z_0-9]*\\(",
              end: / \{/,
              returnBegin: !0,
              excludeEnd: !0,
              contains: [
                { className: "keyword", begin: "#+" },
                { className: "title", begin: "[A-Za-z_][A-Za-z_0-9]*" },
                {
                  className: "params",
                  begin: "\\(",
                  end: "\\)",
                  endsParent: !0,
                  contains: [
                    { className: "string", begin: '"', end: '"' },
                    { className: "variable", begin: "[A-Za-z_][A-Za-z_0-9]*" },
                  ],
                },
              ],
            },
          ],
        };
      };
    },
    217: function (e, n) {
      const a = [
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
        t = [
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
        ].reverse(),
        o = i.concat(r);
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
          l = o,
          c = "([\\w-]+|@\\{[\\w-]+\\})",
          d = [],
          g = [],
          m = function (e) {
            return { className: "string", begin: "~?" + e + ".*?" + e };
          },
          u = function (e, n, a) {
            return { className: e, begin: n, relevance: a };
          },
          b = {
            $pattern: /[a-z-]+/,
            keyword: "and or not only",
            attribute: t.join(" "),
          },
          p = {
            begin: "\\(",
            end: "\\)",
            contains: g,
            keywords: b,
            relevance: 0,
          };
        g.push(
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          m("'"),
          m('"'),
          e.CSS_NUMBER_MODE,
          {
            begin: "(url|data-uri)\\(",
            starts: { className: "string", end: "[\\)\\n]", excludeEnd: !0 },
          },
          n.HEXCOLOR,
          p,
          u("variable", "@@?[\\w-]+", 10),
          u("variable", "@\\{[\\w-]+\\}"),
          u("built_in", "~?`[^`]*?`"),
          {
            className: "attribute",
            begin: "[\\w-]+\\s*:",
            end: ":",
            returnBegin: !0,
            excludeEnd: !0,
          },
          n.IMPORTANT
        );
        const _ = g.concat({ begin: /\{/, end: /\}/, contains: d }),
          E = {
            beginKeywords: "when",
            endsWithParent: !0,
            contains: [{ beginKeywords: "and not" }].concat(g),
          },
          f = {
            begin: c + "\\s*:",
            returnBegin: !0,
            end: /[;}]/,
            relevance: 0,
            contains: [
              { begin: /-(webkit|moz|ms|o)-/ },
              {
                className: "attribute",
                begin: "\\b(" + s.join("|") + ")\\b",
                end: /(?=:)/,
                starts: {
                  endsWithParent: !0,
                  illegal: "[<=$]",
                  relevance: 0,
                  contains: g,
                },
              },
            ],
          },
          N = {
            className: "keyword",
            begin:
              "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
            starts: {
              end: "[;{}]",
              keywords: b,
              returnEnd: !0,
              contains: g,
              relevance: 0,
            },
          },
          M = {
            className: "variable",
            variants: [
              { begin: "@[\\w-]+\\s*:", relevance: 15 },
              { begin: "@[\\w-]+" },
            ],
            starts: { end: "[;}]", returnEnd: !0, contains: _ },
          },
          h = {
            variants: [
              { begin: "[\\.#:&\\[>]", end: "[;{}]" },
              { begin: c, end: /\{/ },
            ],
            returnBegin: !0,
            returnEnd: !0,
            illegal: "[<='$\"]",
            relevance: 0,
            contains: [
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              E,
              u("keyword", "all\\b"),
              u("variable", "@\\{[\\w-]+\\}"),
              {
                begin: "\\b(" + a.join("|") + ")\\b",
                className: "selector-tag",
              },
              u("selector-tag", c + "%?", 0),
              u("selector-id", "#" + c),
              u("selector-class", "\\." + c, 0),
              u("selector-tag", "&", 0),
              n.ATTRIBUTE_SELECTOR_MODE,
              { className: "selector-pseudo", begin: ":(" + i.join("|") + ")" },
              {
                className: "selector-pseudo",
                begin: "::(" + r.join("|") + ")",
              },
              { begin: "\\(", end: "\\)", contains: _ },
              { begin: "!important" },
            ],
          },
          C = {
            begin: `[\\w-]+:(:)?(${l.join("|")})`,
            returnBegin: !0,
            contains: [h],
          };
        return (
          d.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, N, M, C, f, h),
          {
            name: "Less",
            case_insensitive: !0,
            illegal: "[=>'/<($\"]",
            contains: d,
          }
        );
      };
    },
    218: function (e, n) {
      function a(...e) {
        return e
          .map((e) => {
            return (n = e) ? ("string" == typeof n ? n : n.source) : null;
            var n;
          })
          .join("");
      }
      e.exports = function (e) {
        const n = /([-a-zA-Z$._][\w$.-]*)/,
          t = {
            className: "variable",
            variants: [
              { begin: a(/%/, n) },
              { begin: /%\d+/ },
              { begin: /#\d+/ },
            ],
          },
          i = {
            className: "title",
            variants: [
              { begin: a(/@/, n) },
              { begin: /@\d+/ },
              { begin: a(/!/, n) },
              { begin: a(/!\d+/, n) },
              { begin: /!\d+/ },
            ],
          };
        return {
          name: "LLVM IR",
          keywords:
            "begin end true false declare define global constant private linker_private internal available_externally linkonce linkonce_odr weak weak_odr appending dllimport dllexport common default hidden protected extern_weak external thread_local zeroinitializer undef null to tail target triple datalayout volatile nuw nsw nnan ninf nsz arcp fast exact inbounds align addrspace section alias module asm sideeffect gc dbg linker_private_weak attributes blockaddress initialexec localdynamic localexec prefix unnamed_addr ccc fastcc coldcc x86_stdcallcc x86_fastcallcc arm_apcscc arm_aapcscc arm_aapcs_vfpcc ptx_device ptx_kernel intel_ocl_bicc msp430_intrcc spir_func spir_kernel x86_64_sysvcc x86_64_win64cc x86_thiscallcc cc c signext zeroext inreg sret nounwind noreturn noalias nocapture byval nest readnone readonly inlinehint noinline alwaysinline optsize ssp sspreq noredzone noimplicitfloat naked builtin cold nobuiltin noduplicate nonlazybind optnone returns_twice sanitize_address sanitize_memory sanitize_thread sspstrong uwtable returned type opaque eq ne slt sgt sle sge ult ugt ule uge oeq one olt ogt ole oge ord uno ueq une x acq_rel acquire alignstack atomic catch cleanup filter inteldialect max min monotonic nand personality release seq_cst singlethread umax umin unordered xchg add fadd sub fsub mul fmul udiv sdiv fdiv urem srem frem shl lshr ashr and or xor icmp fcmp phi call trunc zext sext fptrunc fpext uitofp sitofp fptoui fptosi inttoptr ptrtoint bitcast addrspacecast select va_arg ret br switch invoke unwind unreachable indirectbr landingpad resume malloc alloca free load store getelementptr extractelement insertelement shufflevector getresult extractvalue insertvalue atomicrmw cmpxchg fence argmemonly double",
          contains: [
            { className: "type", begin: /\bi\d+(?=\s|\b)/ },
            e.COMMENT(/;\s*$/, null, { relevance: 0 }),
            e.COMMENT(/;/, /$/),
            e.QUOTE_STRING_MODE,
            { className: "string", variants: [{ begin: /"/, end: /[^\\]"/ }] },
            i,
            { className: "punctuation", relevance: 0, begin: /,/ },
            { className: "operator", relevance: 0, begin: /=/ },
            t,
            {
              className: "symbol",
              variants: [{ begin: /^\s*[a-z]+:/ }],
              relevance: 0,
            },
            {
              className: "number",
              variants: [
                { begin: /0[xX][a-fA-F0-9]+/ },
                { begin: /-?\d+(?:[.]\d+)?(?:[eE][-+]?\d+(?:[.]\d+)?)?/ },
              ],
              relevance: 0,
            },
          ],
        };
      };
    },
    219: function (e, n) {
      e.exports = function (e) {
        const n = "\\[=*\\[",
          a = "\\]=*\\]",
          t = { begin: n, end: a, contains: ["self"] },
          i = [
            e.COMMENT("--(?!\\[=*\\[)", "$"),
            e.COMMENT("--\\[=*\\[", a, { contains: [t], relevance: 10 }),
          ];
        return {
          name: "Lua",
          keywords: {
            $pattern: e.UNDERSCORE_IDENT_RE,
            literal: "true false nil",
            keyword:
              "and break do else elseif end for goto if in local not or repeat return then until while",
            built_in:
              "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove",
          },
          contains: i.concat([
            {
              className: "function",
              beginKeywords: "function",
              end: "\\)",
              contains: [
                e.inherit(e.TITLE_MODE, {
                  begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*",
                }),
                {
                  className: "params",
                  begin: "\\(",
                  endsWithParent: !0,
                  contains: i,
                },
              ].concat(i),
            },
            e.C_NUMBER_MODE,
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            {
              className: "string",
              begin: n,
              end: a,
              contains: [t],
              relevance: 5,
            },
          ]),
        };
      };
    },
    220: function (e, n) {
      e.exports = function (e) {
        const n = {
            className: "variable",
            variants: [
              {
                begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
                contains: [e.BACKSLASH_ESCAPE],
              },
              { begin: /\$[@%<?\^\+\*]/ },
            ],
          },
          a = {
            className: "string",
            begin: /"/,
            end: /"/,
            contains: [e.BACKSLASH_ESCAPE, n],
          },
          t = {
            className: "variable",
            begin: /\$\([\w-]+\s/,
            end: /\)/,
            keywords: {
              built_in:
                "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value",
            },
            contains: [n],
          },
          i = { begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" },
          r = {
            className: "section",
            begin: /^[^\s]+:/,
            end: /$/,
            contains: [n],
          };
        return {
          name: "Makefile",
          aliases: ["mk", "mak", "make"],
          keywords: {
            $pattern: /[\w-]+/,
            keyword:
              "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",
          },
          contains: [
            e.HASH_COMMENT_MODE,
            n,
            a,
            t,
            i,
            {
              className: "meta",
              begin: /^\.PHONY:/,
              end: /$/,
              keywords: { $pattern: /[\.\w]+/, "meta-keyword": ".PHONY" },
            },
            r,
          ],
        };
      };
    },
    221: function (e, n) {
      e.exports = function (e) {
        var n = "('|\\.')+",
          a = { relevance: 0, contains: [{ begin: n }] };
        return {
          name: "Matlab",
          keywords: {
            keyword:
              "arguments break case catch classdef continue else elseif end enumeration events for function global if methods otherwise parfor persistent properties return spmd switch try while",
            built_in:
              "sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i|0 inf nan isnan isinf isfinite j|0 why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson max min nanmax nanmin mean nanmean type table readtable writetable sortrows sort figure plot plot3 scatter scatter3 cellfun legend intersect ismember procrustes hold num2cell ",
          },
          illegal: '(//|"|#|/\\*|\\s+/\\w+)',
          contains: [
            {
              className: "function",
              beginKeywords: "function",
              end: "$",
              contains: [
                e.UNDERSCORE_TITLE_MODE,
                {
                  className: "params",
                  variants: [
                    { begin: "\\(", end: "\\)" },
                    { begin: "\\[", end: "\\]" },
                  ],
                },
              ],
            },
            {
              className: "built_in",
              begin: /true|false/,
              relevance: 0,
              starts: a,
            },
            { begin: "[a-zA-Z][a-zA-Z_0-9]*('|\\.')+", relevance: 0 },
            {
              className: "number",
              begin: e.C_NUMBER_RE,
              relevance: 0,
              starts: a,
            },
            {
              className: "string",
              begin: "'",
              end: "'",
              contains: [e.BACKSLASH_ESCAPE, { begin: "''" }],
            },
            { begin: /\]|\}|\)/, relevance: 0, starts: a },
            {
              className: "string",
              begin: '"',
              end: '"',
              contains: [e.BACKSLASH_ESCAPE, { begin: '""' }],
              starts: a,
            },
            e.COMMENT("^\\s*%\\{\\s*$", "^\\s*%\\}\\s*$"),
            e.COMMENT("%", "$"),
          ],
        };
      };
    },
    222: function (e, n) {
      function a(e) {
        return e ? ("string" == typeof e ? e : e.source) : null;
      }
      function t(...e) {
        return e.map((e) => a(e)).join("");
      }
      function i(...e) {
        return "(" + e.map((e) => a(e)).join("|") + ")";
      }
      e.exports = function (e) {
        const n = /[dualxmsipngr]{0,12}/,
          a = {
            $pattern: /[\w.]+/,
            keyword: [
              "abs",
              "accept",
              "alarm",
              "and",
              "atan2",
              "bind",
              "binmode",
              "bless",
              "break",
              "caller",
              "chdir",
              "chmod",
              "chomp",
              "chop",
              "chown",
              "chr",
              "chroot",
              "close",
              "closedir",
              "connect",
              "continue",
              "cos",
              "crypt",
              "dbmclose",
              "dbmopen",
              "defined",
              "delete",
              "die",
              "do",
              "dump",
              "each",
              "else",
              "elsif",
              "endgrent",
              "endhostent",
              "endnetent",
              "endprotoent",
              "endpwent",
              "endservent",
              "eof",
              "eval",
              "exec",
              "exists",
              "exit",
              "exp",
              "fcntl",
              "fileno",
              "flock",
              "for",
              "foreach",
              "fork",
              "format",
              "formline",
              "getc",
              "getgrent",
              "getgrgid",
              "getgrnam",
              "gethostbyaddr",
              "gethostbyname",
              "gethostent",
              "getlogin",
              "getnetbyaddr",
              "getnetbyname",
              "getnetent",
              "getpeername",
              "getpgrp",
              "getpriority",
              "getprotobyname",
              "getprotobynumber",
              "getprotoent",
              "getpwent",
              "getpwnam",
              "getpwuid",
              "getservbyname",
              "getservbyport",
              "getservent",
              "getsockname",
              "getsockopt",
              "given",
              "glob",
              "gmtime",
              "goto",
              "grep",
              "gt",
              "hex",
              "if",
              "index",
              "int",
              "ioctl",
              "join",
              "keys",
              "kill",
              "last",
              "lc",
              "lcfirst",
              "length",
              "link",
              "listen",
              "local",
              "localtime",
              "log",
              "lstat",
              "lt",
              "ma",
              "map",
              "mkdir",
              "msgctl",
              "msgget",
              "msgrcv",
              "msgsnd",
              "my",
              "ne",
              "next",
              "no",
              "not",
              "oct",
              "open",
              "opendir",
              "or",
              "ord",
              "our",
              "pack",
              "package",
              "pipe",
              "pop",
              "pos",
              "print",
              "printf",
              "prototype",
              "push",
              "q|0",
              "qq",
              "quotemeta",
              "qw",
              "qx",
              "rand",
              "read",
              "readdir",
              "readline",
              "readlink",
              "readpipe",
              "recv",
              "redo",
              "ref",
              "rename",
              "require",
              "reset",
              "return",
              "reverse",
              "rewinddir",
              "rindex",
              "rmdir",
              "say",
              "scalar",
              "seek",
              "seekdir",
              "select",
              "semctl",
              "semget",
              "semop",
              "send",
              "setgrent",
              "sethostent",
              "setnetent",
              "setpgrp",
              "setpriority",
              "setprotoent",
              "setpwent",
              "setservent",
              "setsockopt",
              "shift",
              "shmctl",
              "shmget",
              "shmread",
              "shmwrite",
              "shutdown",
              "sin",
              "sleep",
              "socket",
              "socketpair",
              "sort",
              "splice",
              "split",
              "sprintf",
              "sqrt",
              "srand",
              "stat",
              "state",
              "study",
              "sub",
              "substr",
              "symlink",
              "syscall",
              "sysopen",
              "sysread",
              "sysseek",
              "system",
              "syswrite",
              "tell",
              "telldir",
              "tie",
              "tied",
              "time",
              "times",
              "tr",
              "truncate",
              "uc",
              "ucfirst",
              "umask",
              "undef",
              "unless",
              "unlink",
              "unpack",
              "unshift",
              "untie",
              "until",
              "use",
              "utime",
              "values",
              "vec",
              "wait",
              "waitpid",
              "wantarray",
              "warn",
              "when",
              "while",
              "write",
              "x|0",
              "xor",
              "y|0",
            ].join(" "),
          },
          r = { className: "subst", begin: "[$@]\\{", end: "\\}", keywords: a },
          s = { begin: /->\{/, end: /\}/ },
          o = {
            variants: [
              { begin: /\$\d/ },
              {
                begin: t(
                  /[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
                  "(?![A-Za-z])(?![@$%])"
                ),
              },
              { begin: /[$%@][^\s\w{]/, relevance: 0 },
            ],
          },
          l = [e.BACKSLASH_ESCAPE, r, o],
          c = [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/],
          d = (e, a, i = "\\1") => {
            const r = "\\1" === i ? i : t(i, a);
            return t(
              t("(?:", e, ")"),
              a,
              /(?:\\.|[^\\\/])*?/,
              r,
              /(?:\\.|[^\\\/])*?/,
              i,
              n
            );
          },
          g = (e, a, i) => t(t("(?:", e, ")"), a, /(?:\\.|[^\\\/])*?/, i, n),
          m = [
            o,
            e.HASH_COMMENT_MODE,
            e.COMMENT(/^=\w/, /=cut/, { endsWithParent: !0 }),
            s,
            {
              className: "string",
              contains: l,
              variants: [
                { begin: "q[qwxr]?\\s*\\(", end: "\\)", relevance: 5 },
                { begin: "q[qwxr]?\\s*\\[", end: "\\]", relevance: 5 },
                { begin: "q[qwxr]?\\s*\\{", end: "\\}", relevance: 5 },
                { begin: "q[qwxr]?\\s*\\|", end: "\\|", relevance: 5 },
                { begin: "q[qwxr]?\\s*<", end: ">", relevance: 5 },
                { begin: "qw\\s+q", end: "q", relevance: 5 },
                { begin: "'", end: "'", contains: [e.BACKSLASH_ESCAPE] },
                { begin: '"', end: '"' },
                { begin: "`", end: "`", contains: [e.BACKSLASH_ESCAPE] },
                { begin: /\{\w+\}/, relevance: 0 },
                { begin: "-?\\w+\\s*=>", relevance: 0 },
              ],
            },
            {
              className: "number",
              begin:
                "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
              relevance: 0,
            },
            {
              begin:
                "(\\/\\/|" +
                e.RE_STARTERS_RE +
                "|\\b(split|return|print|reverse|grep)\\b)\\s*",
              keywords: "split return print reverse grep",
              relevance: 0,
              contains: [
                e.HASH_COMMENT_MODE,
                {
                  className: "regexp",
                  variants: [
                    { begin: d("s|tr|y", i(...c)) },
                    { begin: d("s|tr|y", "\\(", "\\)") },
                    { begin: d("s|tr|y", "\\[", "\\]") },
                    { begin: d("s|tr|y", "\\{", "\\}") },
                  ],
                  relevance: 2,
                },
                {
                  className: "regexp",
                  variants: [
                    { begin: /(m|qr)\/\//, relevance: 0 },
                    { begin: g("(?:m|qr)?", /\//, /\//) },
                    { begin: g("m|qr", i(...c), /\1/) },
                    { begin: g("m|qr", /\(/, /\)/) },
                    { begin: g("m|qr", /\[/, /\]/) },
                    { begin: g("m|qr", /\{/, /\}/) },
                  ],
                },
              ],
            },
            {
              className: "function",
              beginKeywords: "sub",
              end: "(\\s*\\(.*?\\))?[;{]",
              excludeEnd: !0,
              relevance: 5,
              contains: [e.TITLE_MODE],
            },
            { begin: "-\\w\\b", relevance: 0 },
            {
              begin: "^__DATA__$",
              end: "^__END__$",
              subLanguage: "mojolicious",
              contains: [{ begin: "^@@.*", end: "$", className: "comment" }],
            },
          ];
        return (
          (r.contains = m),
          (s.contains = m),
          { name: "Perl", aliases: ["pl", "pm"], keywords: a, contains: m }
        );
      };
    },
    223: function (e, n) {
      e.exports = function (e) {
        const n = {
            className: "variable",
            variants: [
              { begin: /\$\d+/ },
              { begin: /\$\{/, end: /\}/ },
              { begin: /[$@]/ + e.UNDERSCORE_IDENT_RE },
            ],
          },
          a = {
            endsWithParent: !0,
            keywords: {
              $pattern: "[a-z/_]+",
              literal:
                "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll",
            },
            relevance: 0,
            illegal: "=>",
            contains: [
              e.HASH_COMMENT_MODE,
              {
                className: "string",
                contains: [e.BACKSLASH_ESCAPE, n],
                variants: [
                  { begin: /"/, end: /"/ },
                  { begin: /'/, end: /'/ },
                ],
              },
              {
                begin: "([a-z]+):/",
                end: "\\s",
                endsWithParent: !0,
                excludeEnd: !0,
                contains: [n],
              },
              {
                className: "regexp",
                contains: [e.BACKSLASH_ESCAPE, n],
                variants: [
                  { begin: "\\s\\^", end: "\\s|\\{|;", returnEnd: !0 },
                  { begin: "~\\*?\\s+", end: "\\s|\\{|;", returnEnd: !0 },
                  { begin: "\\*(\\.[a-z\\-]+)+" },
                  { begin: "([a-z\\-]+\\.)+\\*" },
                ],
              },
              {
                className: "number",
                begin:
                  "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b",
              },
              {
                className: "number",
                begin: "\\b\\d+[kKmMgGdshdwy]*\\b",
                relevance: 0,
              },
              n,
            ],
          };
        return {
          name: "Nginx config",
          aliases: ["nginxconf"],
          contains: [
            e.HASH_COMMENT_MODE,
            {
              begin: e.UNDERSCORE_IDENT_RE + "\\s+\\{",
              returnBegin: !0,
              end: /\{/,
              contains: [
                { className: "section", begin: e.UNDERSCORE_IDENT_RE },
              ],
              relevance: 0,
            },
            {
              begin: e.UNDERSCORE_IDENT_RE + "\\s",
              end: ";|\\{",
              returnBegin: !0,
              contains: [
                {
                  className: "attribute",
                  begin: e.UNDERSCORE_IDENT_RE,
                  starts: a,
                },
              ],
              relevance: 0,
            },
          ],
          illegal: "[^\\s\\}]",
        };
      };
    },
    224: function (e, n) {
      e.exports = function (e) {
        return {
          name: "Node REPL",
          contains: [
            {
              className: "meta",
              starts: {
                end: / |$/,
                starts: { end: "$", subLanguage: "javascript" },
              },
              variants: [
                { begin: /^>(?=[ ]|$)/ },
                { begin: /^\.\.\.(?=[ ]|$)/ },
              ],
            },
          ],
        };
      };
    },
    225: function (e, n) {
      e.exports = function (e) {
        const n = /[a-zA-Z@][a-zA-Z0-9_]*/,
          a = {
            $pattern: n,
            keyword: "@interface @class @protocol @implementation",
          };
        return {
          name: "Objective-C",
          aliases: ["mm", "objc", "obj-c", "obj-c++", "objective-c++"],
          keywords: {
            $pattern: n,
            keyword:
              "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",
            literal: "false true FALSE TRUE nil YES NO NULL",
            built_in:
              "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once",
          },
          illegal: "</",
          contains: [
            {
              className: "built_in",
              begin:
                "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+",
            },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            e.C_NUMBER_MODE,
            e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE,
            {
              className: "string",
              variants: [
                {
                  begin: '@"',
                  end: '"',
                  illegal: "\\n",
                  contains: [e.BACKSLASH_ESCAPE],
                },
              ],
            },
            {
              className: "meta",
              begin: /#\s*[a-z]+\b/,
              end: /$/,
              keywords: {
                "meta-keyword":
                  "if else elif endif define undef warning error line pragma ifdef ifndef include",
              },
              contains: [
                { begin: /\\\n/, relevance: 0 },
                e.inherit(e.QUOTE_STRING_MODE, { className: "meta-string" }),
                {
                  className: "meta-string",
                  begin: /<.*?>/,
                  end: /$/,
                  illegal: "\\n",
                },
                e.C_LINE_COMMENT_MODE,
                e.C_BLOCK_COMMENT_MODE,
              ],
            },
            {
              className: "class",
              begin: "(" + a.keyword.split(" ").join("|") + ")\\b",
              end: /(\{|$)/,
              excludeEnd: !0,
              keywords: a,
              contains: [e.UNDERSCORE_TITLE_MODE],
            },
            { begin: "\\." + e.UNDERSCORE_IDENT_RE, relevance: 0 },
          ],
        };
      };
    },
    226: function (e, n) {
      e.exports = function (e) {
        const n = e.COMMENT(/\{/, /\}/, { contains: ["self"] });
        return {
          name: "Parser3",
          subLanguage: "xml",
          relevance: 0,
          contains: [
            e.COMMENT("^#", "$"),
            e.COMMENT(/\^rem\{/, /\}/, { relevance: 10, contains: [n] }),
            {
              className: "meta",
              begin: "^@(?:BASE|USE|CLASS|OPTIONS)$",
              relevance: 10,
            },
            {
              className: "title",
              begin: "@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$",
            },
            { className: "variable", begin: /\$\{?[\w\-.:]+\}?/ },
            { className: "keyword", begin: /\^[\w\-.:]+/ },
            { className: "number", begin: "\\^#[0-9a-fA-F]+" },
            e.C_NUMBER_MODE,
          ],
        };
      };
    },
    227: function (e, n) {
      e.exports = function (e) {
        return {
          name: "Packet Filter config",
          aliases: ["pf.conf"],
          keywords: {
            $pattern: /[a-z0-9_<>-]+/,
            built_in: "block match pass load anchor|5 antispoof|10 set table",
            keyword:
              "in out log quick on rdomain inet inet6 proto from port os to route allow-opts divert-packet divert-reply divert-to flags group icmp-type icmp6-type label once probability recieved-on rtable prio queue tos tag tagged user keep fragment for os drop af-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robin source-hash static-port dup-to reply-to route-to parent bandwidth default min max qlimit block-policy debug fingerprints hostid limit loginterface optimization reassemble ruleset-optimization basic none profile skip state-defaults state-policy timeout const counters persist no modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppy source-track global rule max-src-nodes max-src-states max-src-conn max-src-conn-rate overload flush scrub|5 max-mss min-ttl no-df|10 random-id",
            literal: "all any no-route self urpf-failed egress|5 unknown",
          },
          contains: [
            e.HASH_COMMENT_MODE,
            e.NUMBER_MODE,
            e.QUOTE_STRING_MODE,
            { className: "variable", begin: /\$[\w\d#@][\w\d_]*/ },
            { className: "variable", begin: /<(?!\/)/, end: />/ },
          ],
        };
      };
    },
    228: function (e, n) {
      e.exports = function (e) {
        const n = {
            className: "variable",
            begin: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*(?![A-Za-z0-9])(?![$])",
          },
          a = {
            className: "meta",
            variants: [
              { begin: /<\?php/, relevance: 10 },
              { begin: /<\?[=]?/ },
              { begin: /\?>/ },
            ],
          },
          t = {
            className: "subst",
            variants: [{ begin: /\$\w+/ }, { begin: /\{\$/, end: /\}/ }],
          },
          i = e.inherit(e.APOS_STRING_MODE, { illegal: null }),
          r = e.inherit(e.QUOTE_STRING_MODE, {
            illegal: null,
            contains: e.QUOTE_STRING_MODE.contains.concat(t),
          }),
          s = e.END_SAME_AS_BEGIN({
            begin: /<<<[ \t]*(\w+)\n/,
            end: /[ \t]*(\w+)\b/,
            contains: e.QUOTE_STRING_MODE.contains.concat(t),
          }),
          o = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE, a],
            variants: [
              e.inherit(i, { begin: "b'", end: "'" }),
              e.inherit(r, { begin: 'b"', end: '"' }),
              r,
              i,
              s,
            ],
          },
          l = { variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE] },
          c = {
            keyword:
              "__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ die echo exit include include_once print require require_once array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list match|0 new object or private protected public real return string switch throw trait try unset use var void while xor yield",
            literal: "false null true",
            built_in:
              "Error|0 AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Throwable Traversable WeakReference Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass",
          };
        return {
          aliases: ["php", "php3", "php4", "php5", "php6", "php7", "php8"],
          case_insensitive: !0,
          keywords: c,
          contains: [
            e.HASH_COMMENT_MODE,
            e.COMMENT("//", "$", { contains: [a] }),
            e.COMMENT("/\\*", "\\*/", {
              contains: [{ className: "doctag", begin: "@[A-Za-z]+" }],
            }),
            e.COMMENT("__halt_compiler.+?;", !1, {
              endsWithParent: !0,
              keywords: "__halt_compiler",
            }),
            a,
            { className: "keyword", begin: /\$this\b/ },
            n,
            { begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ },
            {
              className: "function",
              relevance: 0,
              beginKeywords: "fn function",
              end: /[;{]/,
              excludeEnd: !0,
              illegal: "[$%\\[]",
              contains: [
                e.UNDERSCORE_TITLE_MODE,
                { begin: "=>" },
                {
                  className: "params",
                  begin: "\\(",
                  end: "\\)",
                  excludeBegin: !0,
                  excludeEnd: !0,
                  keywords: c,
                  contains: ["self", n, e.C_BLOCK_COMMENT_MODE, o, l],
                },
              ],
            },
            {
              className: "class",
              beginKeywords: "class interface",
              relevance: 0,
              end: /\{/,
              excludeEnd: !0,
              illegal: /[:($"]/,
              contains: [
                { beginKeywords: "extends implements" },
                e.UNDERSCORE_TITLE_MODE,
              ],
            },
            {
              beginKeywords: "namespace",
              relevance: 0,
              end: ";",
              illegal: /[.']/,
              contains: [e.UNDERSCORE_TITLE_MODE],
            },
            {
              beginKeywords: "use",
              relevance: 0,
              end: ";",
              contains: [e.UNDERSCORE_TITLE_MODE],
            },
            o,
            l,
          ],
        };
      };
    },
    229: function (e, n) {
      e.exports = function (e) {
        return {
          name: "PHP template",
          subLanguage: "xml",
          contains: [
            {
              begin: /<\?(php|=)?/,
              end: /\?>/,
              subLanguage: "php",
              contains: [
                { begin: "/\\*", end: "\\*/", skip: !0 },
                { begin: 'b"', end: '"', skip: !0 },
                { begin: "b'", end: "'", skip: !0 },
                e.inherit(e.APOS_STRING_MODE, {
                  illegal: null,
                  className: null,
                  contains: null,
                  skip: !0,
                }),
                e.inherit(e.QUOTE_STRING_MODE, {
                  illegal: null,
                  className: null,
                  contains: null,
                  skip: !0,
                }),
              ],
            },
          ],
        };
      };
    },
    230: function (e, n) {
      e.exports = function (e) {
        return {
          name: "Plain text",
          aliases: ["text", "txt"],
          disableAutodetect: !0,
        };
      };
    },
    231: function (e, n) {
      e.exports = function (e) {
        return {
          name: "Pony",
          keywords: {
            keyword:
              "actor addressof and as be break class compile_error compile_intrinsic consume continue delegate digestof do else elseif embed end error for fun if ifdef in interface is isnt lambda let match new not object or primitive recover repeat return struct then trait try type until use var where while with xor",
            meta: "iso val tag trn box ref",
            literal: "this false true",
          },
          contains: [
            { className: "type", begin: "\\b_?[A-Z][\\w]*", relevance: 0 },
            { className: "string", begin: '"""', end: '"""', relevance: 10 },
            {
              className: "string",
              begin: '"',
              end: '"',
              contains: [e.BACKSLASH_ESCAPE],
            },
            {
              className: "string",
              begin: "'",
              end: "'",
              contains: [e.BACKSLASH_ESCAPE],
              relevance: 0,
            },
            { begin: e.IDENT_RE + "'", relevance: 0 },
            {
              className: "number",
              begin:
                "(-?)(\\b0[xX][a-fA-F0-9]+|\\b0[bB][01]+|(\\b\\d+(_\\d+)?(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
              relevance: 0,
            },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
          ],
        };
      };
    },
    232: function (e, n) {
      e.exports = function (e) {
        const n = {
            $pattern: /-?[A-z\.\-]+\b/,
            keyword:
              "if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter",
            built_in:
              "ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write",
          },
          a = { begin: "`[\\s\\S]", relevance: 0 },
          t = {
            className: "variable",
            variants: [
              { begin: /\$\B/ },
              { className: "keyword", begin: /\$this/ },
              { begin: /\$[\w\d][\w\d_:]*/ },
            ],
          },
          i = {
            className: "string",
            variants: [
              { begin: /"/, end: /"/ },
              { begin: /@"/, end: /^"@/ },
            ],
            contains: [
              a,
              t,
              { className: "variable", begin: /\$[A-z]/, end: /[^A-z]/ },
            ],
          },
          r = {
            className: "string",
            variants: [
              { begin: /'/, end: /'/ },
              { begin: /@'/, end: /^'@/ },
            ],
          },
          s = e.inherit(e.COMMENT(null, null), {
            variants: [
              { begin: /#/, end: /$/ },
              { begin: /<#/, end: /#>/ },
            ],
            contains: [
              {
                className: "doctag",
                variants: [
                  {
                    begin:
                      /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/,
                  },
                  {
                    begin:
                      /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/,
                  },
                ],
              },
            ],
          }),
          o = {
            className: "built_in",
            variants: [
              {
                begin: "(".concat(
                  "Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where",
                  ")+(-)[\\w\\d]+"
                ),
              },
            ],
          },
          l = {
            className: "class",
            beginKeywords: "class enum",
            end: /\s*[{]/,
            excludeEnd: !0,
            relevance: 0,
            contains: [e.TITLE_MODE],
          },
          c = {
            className: "function",
            begin: /function\s+/,
            end: /\s*\{|$/,
            excludeEnd: !0,
            returnBegin: !0,
            relevance: 0,
            contains: [
              { begin: "function", relevance: 0, className: "keyword" },
              {
                className: "title",
                begin: /\w[\w\d]*((-)[\w\d]+)*/,
                relevance: 0,
              },
              {
                begin: /\(/,
                end: /\)/,
                className: "params",
                relevance: 0,
                contains: [t],
              },
            ],
          },
          d = {
            begin: /using\s/,
            end: /$/,
            returnBegin: !0,
            contains: [
              i,
              r,
              {
                className: "keyword",
                begin: /(using|assembly|command|module|namespace|type)/,
              },
            ],
          },
          g = {
            variants: [
              {
                className: "operator",
                begin: "(".concat(
                  "-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor",
                  ")\\b"
                ),
              },
              { className: "literal", begin: /(-)[\w\d]+/, relevance: 0 },
            ],
          },
          m = {
            className: "function",
            begin: /\[.*\]\s*[\w]+[ ]??\(/,
            end: /$/,
            returnBegin: !0,
            relevance: 0,
            contains: [
              {
                className: "keyword",
                begin: "(".concat(
                  n.keyword.toString().replace(/\s/g, "|"),
                  ")\\b"
                ),
                endsParent: !0,
                relevance: 0,
              },
              e.inherit(e.TITLE_MODE, { endsParent: !0 }),
            ],
          },
          u = [
            m,
            s,
            a,
            e.NUMBER_MODE,
            i,
            r,
            o,
            t,
            { className: "literal", begin: /\$(null|true|false)\b/ },
            { className: "selector-tag", begin: /@\B/, relevance: 0 },
          ],
          b = {
            begin: /\[/,
            end: /\]/,
            excludeBegin: !0,
            excludeEnd: !0,
            relevance: 0,
            contains: [].concat(
              "self",
              u,
              {
                begin:
                  "(" +
                  [
                    "string",
                    "char",
                    "byte",
                    "int",
                    "long",
                    "bool",
                    "decimal",
                    "single",
                    "double",
                    "DateTime",
                    "xml",
                    "array",
                    "hashtable",
                    "void",
                  ].join("|") +
                  ")",
                className: "built_in",
                relevance: 0,
              },
              { className: "type", begin: /[\.\w\d]+/, relevance: 0 }
            ),
          };
        return (
          m.contains.unshift(b),
          {
            name: "PowerShell",
            aliases: ["ps", "ps1"],
            case_insensitive: !0,
            keywords: n,
            contains: u.concat(l, c, d, g, b),
          }
        );
      };
    },
    233: function (e, n) {
      e.exports = function (e) {
        return {
          name: "Processing",
          keywords: {
            keyword:
              "BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject Object StringDict StringList Table TableRow XML false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
            literal: "P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI",
            title: "setup draw",
            built_in:
              "displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key keyCode pixels focused frameCount frameRate height width size createGraphics beginDraw createShape loadShape PShape arc ellipse line point quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour millis minute month second year background clear colorMode fill noFill noStroke stroke alpha blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed",
          },
          contains: [
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            e.C_NUMBER_MODE,
          ],
        };
      };
    },
    234: function (e, n) {
      e.exports = function (e) {
        return {
          name: "Python profiler",
          contains: [
            e.C_NUMBER_MODE,
            {
              begin: "[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",
              end: ":",
              excludeEnd: !0,
            },
            {
              begin: "(ncalls|tottime|cumtime)",
              end: "$",
              keywords: "ncalls tottime|10 cumtime|10 filename",
              relevance: 10,
            },
            {
              begin: "function calls",
              end: "$",
              contains: [e.C_NUMBER_MODE],
              relevance: 10,
            },
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            {
              className: "string",
              begin: "\\(",
              end: "\\)$",
              excludeBegin: !0,
              excludeEnd: !0,
              relevance: 0,
            },
          ],
        };
      };
    },
    235: function (e, n) {
      e.exports = function (e) {
        const n = { begin: /\(/, end: /\)/, relevance: 0 },
          a = { begin: /\[/, end: /\]/ },
          t = {
            className: "comment",
            begin: /%/,
            end: /$/,
            contains: [e.PHRASAL_WORDS_MODE],
          },
          i = {
            className: "string",
            begin: /`/,
            end: /`/,
            contains: [e.BACKSLASH_ESCAPE],
          },
          r = [
            { begin: /[a-z][A-Za-z0-9_]*/, relevance: 0 },
            {
              className: "symbol",
              variants: [
                { begin: /[A-Z][a-zA-Z0-9_]*/ },
                { begin: /_[A-Za-z0-9_]*/ },
              ],
              relevance: 0,
            },
            n,
            { begin: /:-/ },
            a,
            t,
            e.C_BLOCK_COMMENT_MODE,
            e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE,
            i,
            { className: "string", begin: /0'(\\'|.)/ },
            { className: "string", begin: /0'\\s/ },
            e.C_NUMBER_MODE,
          ];
        return (
          (n.contains = r),
          (a.contains = r),
          { name: "Prolog", contains: r.concat([{ begin: /\.$/ }]) }
        );
      };
    },
    236: function (e, n) {
      e.exports = function (e) {
        var n = "[ \\t\\f]*",
          a = n + "[:=]" + n,
          t = "[ \\t\\f]+",
          i = "(" + a + "|" + "[ \\t\\f]+)",
          r = "([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",
          s = "([^\\\\:= \\t\\f\\n]|\\\\.)+",
          o = {
            end: i,
            relevance: 0,
            starts: {
              className: "string",
              end: /$/,
              relevance: 0,
              contains: [{ begin: "\\\\\\\\" }, { begin: "\\\\\\n" }],
            },
          };
        return {
          name: ".properties",
          case_insensitive: !0,
          illegal: /\S/,
          contains: [
            e.COMMENT("^\\s*[!#]", "$"),
            {
              returnBegin: !0,
              variants: [
                { begin: r + a, relevance: 1 },
                { begin: r + t, relevance: 0 },
              ],
              contains: [
                { className: "attr", begin: r, endsParent: !0, relevance: 0 },
              ],
              starts: o,
            },
            {
              begin: s + i,
              returnBegin: !0,
              relevance: 0,
              contains: [
                { className: "meta", begin: s, endsParent: !0, relevance: 0 },
              ],
              starts: o,
            },
            { className: "attr", relevance: 0, begin: s + n + "$" },
          ],
        };
      };
    },
    237: function (e, n) {
      e.exports = function (e) {
        const n = {
            keyword: [
              "and",
              "as",
              "assert",
              "async",
              "await",
              "break",
              "class",
              "continue",
              "def",
              "del",
              "elif",
              "else",
              "except",
              "finally",
              "for",
              "",
              "from",
              "global",
              "if",
              "import",
              "in",
              "is",
              "lambda",
              "nonlocal|10",
              "not",
              "or",
              "pass",
              "raise",
              "return",
              "try",
              "while",
              "with",
              "yield",
            ],
            built_in: [
              "__import__",
              "abs",
              "all",
              "any",
              "ascii",
              "bin",
              "bool",
              "breakpoint",
              "bytearray",
              "bytes",
              "callable",
              "chr",
              "classmethod",
              "compile",
              "complex",
              "delattr",
              "dict",
              "dir",
              "divmod",
              "enumerate",
              "eval",
              "exec",
              "filter",
              "float",
              "format",
              "frozenset",
              "getattr",
              "globals",
              "hasattr",
              "hash",
              "help",
              "hex",
              "id",
              "input",
              "int",
              "isinstance",
              "issubclass",
              "iter",
              "len",
              "list",
              "locals",
              "map",
              "max",
              "memoryview",
              "min",
              "next",
              "object",
              "oct",
              "open",
              "ord",
              "pow",
              "print",
              "property",
              "range",
              "repr",
              "reversed",
              "round",
              "set",
              "setattr",
              "slice",
              "sorted",
              "staticmethod",
              "str",
              "sum",
              "super",
              "tuple",
              "type",
              "vars",
              "zip",
            ],
            literal: [
              "__debug__",
              "Ellipsis",
              "False",
              "None",
              "NotImplemented",
              "True",
            ],
          },
          a = { className: "meta", begin: /^(>>>|\.\.\.) / },
          t = {
            className: "subst",
            begin: /\{/,
            end: /\}/,
            keywords: n,
            illegal: /#/,
          },
          i = { begin: /\{\{/, relevance: 0 },
          r = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE],
            variants: [
              {
                begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
                end: /'''/,
                contains: [e.BACKSLASH_ESCAPE, a],
                relevance: 10,
              },
              {
                begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
                end: /"""/,
                contains: [e.BACKSLASH_ESCAPE, a],
                relevance: 10,
              },
              {
                begin: /([fF][rR]|[rR][fF]|[fF])'''/,
                end: /'''/,
                contains: [e.BACKSLASH_ESCAPE, a, i, t],
              },
              {
                begin: /([fF][rR]|[rR][fF]|[fF])"""/,
                end: /"""/,
                contains: [e.BACKSLASH_ESCAPE, a, i, t],
              },
              { begin: /([uU]|[rR])'/, end: /'/, relevance: 10 },
              { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 },
              { begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ },
              { begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ },
              {
                begin: /([fF][rR]|[rR][fF]|[fF])'/,
                end: /'/,
                contains: [e.BACKSLASH_ESCAPE, i, t],
              },
              {
                begin: /([fF][rR]|[rR][fF]|[fF])"/,
                end: /"/,
                contains: [e.BACKSLASH_ESCAPE, i, t],
              },
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
            ],
          },
          s = "[0-9](_?[0-9])*",
          o = `(\\b(${s}))?\\.(${s})|\\b(${s})\\.`,
          l = {
            className: "number",
            relevance: 0,
            variants: [
              { begin: `(\\b(${s})|(${o}))[eE][+-]?(${s})[jJ]?\\b` },
              { begin: `(${o})[jJ]?` },
              { begin: "\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b" },
              { begin: "\\b0[bB](_?[01])+[lL]?\\b" },
              { begin: "\\b0[oO](_?[0-7])+[lL]?\\b" },
              { begin: "\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b" },
              { begin: `\\b(${s})[jJ]\\b` },
            ],
          },
          c = {
            className: "params",
            variants: [
              { begin: /\(\s*\)/, skip: !0, className: null },
              {
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: n,
                contains: ["self", a, l, r, e.HASH_COMMENT_MODE],
              },
            ],
          };
        return (
          (t.contains = [r, l, a]),
          {
            name: "Python",
            aliases: ["py", "gyp", "ipython"],
            keywords: n,
            illegal: /(<\/|->|\?)|=>/,
            contains: [
              a,
              l,
              { begin: /\bself\b/ },
              { beginKeywords: "if", relevance: 0 },
              r,
              e.HASH_COMMENT_MODE,
              {
                variants: [
                  { className: "function", beginKeywords: "def" },
                  { className: "class", beginKeywords: "class" },
                ],
                end: /:/,
                illegal: /[${=;\n,]/,
                contains: [
                  e.UNDERSCORE_TITLE_MODE,
                  c,
                  { begin: /->/, endsWithParent: !0, keywords: "None" },
                ],
              },
              {
                className: "meta",
                begin: /^[\t ]*@/,
                end: /(?=#)|$/,
                contains: [l, c, r],
              },
              { begin: /\b(print|exec)\(/ },
            ],
          }
        );
      };
    },
  },
]);