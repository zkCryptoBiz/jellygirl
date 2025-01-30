(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [5665], {

        /***/
        488610: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(777075);
            __web_req__(47751);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var D = __c.D;
                var O = __c.O;
                var xb = __c.xb;
                var NGb = function(a, b, c) {
                        return (new __c.Eb(a, c ? __c.Fb(c) : void 0, __c.Gb, {
                            ignoreTag: !0
                        })).format(Object.fromEntries(Object.entries(b)))
                    },
                    OGb = function(a) {
                        let {
                            r: b,
                            g: c,
                            b: d
                        } = __c.es(a);
                        c /= 255;
                        d /= 255;
                        a = b / 255;
                        return .2126 * (.03928 >= a ? a / 12.92 : ((a + .055) / 1.055) ** 2.4) + .7152 * (.03928 >= c ? c / 12.92 : ((c + .055) / 1.055) ** 2.4) + .0722 * (.03928 >= d ? d / 12.92 : ((d + .055) / 1.055) ** 2.4)
                    },
                    M4 = function(a, b) {
                        var c = a.UOa.get(b);
                        if (null != c) return c;
                        c = {
                            value: a.Yx.dr(b)
                        };
                        a.UOa.set(b, c);
                        a.NOa.set(c, b);
                        return c
                    },
                    N4 = function(a, b) {
                        a = a.NOa.get(b);
                        if (null ==
                            a) throw new PGb("ref does not exists");
                        return a
                    },
                    Q4 = function(a) {
                        const b = (c, d) => {
                            if (null == c && null != a) return a;
                            if ("string" !== (null === c || void 0 === c ? void 0 : c.type)) throw "toWidgetData" === d ? new O4("string", c) : new P4("string", c);
                            return c.value
                        };
                        return {
                            Hj: c => ({
                                type: "string",
                                value: c
                            }),
                            er: c => b(c, "toWidgetState"),
                            dr: c => b(c, "toWidgetData"),
                            ct: c => b(c, "toWidgetData")
                        }
                    },
                    S4 = function(a, b) {
                        if (0 === a.length) throw new R4("At least one value must be provided for literal types.");
                        const c = new Set(a),
                            d = (e, f) => {
                                if (null == e) return b;
                                if ("string" !== (null === e || void 0 === e ? void 0 : e.type) || !c.has(e.value)) throw "toWidgetData" === f ? new O4("literal", e) : new P4("literal", e);
                                return e.value
                            };
                        return {
                            Hj: e => ({
                                type: "string",
                                value: e
                            }),
                            er: e => d(e, "toWidgetState"),
                            dr: e => d(e, "toWidgetData"),
                            ct: e => d(e, "toWidgetData")
                        }
                    },
                    T4 = function(a) {
                        const b = (c, d) => {
                            if (null == c || !Number.isFinite(a)) return a;
                            if ("double" !== (null === c || void 0 === c ? void 0 : c.type) || !Number.isFinite(c.value)) throw "toWidgetData" === d ? new O4("double", c) : new P4("double", c);
                            return c.value
                        };
                        return {
                            Hj: c => {
                                if (!Number.isFinite(c)) throw new QGb(c);
                                return {
                                    type: "double",
                                    value: c
                                }
                            },
                            er: c => b(c, "toWidgetState"),
                            dr: c => b(c, "toWidgetData"),
                            ct: c => b(c, "toWidgetData")
                        }
                    },
                    RGb = function() {
                        const a = b => {
                            if ("fill" !== (null === b || void 0 === b ? void 0 : b.type)) throw new O4("fill", b);
                            return b.value
                        };
                        return {
                            Hj: b => ({
                                type: "fill",
                                value: b
                            }),
                            er: b => {
                                if ("fill" !== (null === b || void 0 === b ? void 0 : b.type)) throw new P4("fill", b);
                                return b.value
                            },
                            dr: a,
                            ct: a
                        }
                    },
                    V4 = function(a) {
                        const b = new Set;
                        for (const d of Object.keys(a)) {
                            const [e] = a[d];
                            if (b.has(e)) throw new R4(`Duplicate serialized keys "${e}" found in record schema.`);
                            b.add(e)
                        }
                        const c = (d, e) => {
                            if ("dict" !== (null === e || void 0 === e ? void 0 : e.type)) throw new O4("record", e);
                            if (!e.value.every((g, h) => b.has(h))) throw new O4("record", e);
                            const f = {};
                            for (const g of Object.keys(a)) {
                                const [h, k] = a[g], l = U4(() => {
                                    const m = e.value.get(h);
                                    return k.dr(m)
                                }, {
                                    keepAlive: !0
                                });
                                Object.defineProperty(f, g, {
                                    get() {
                                        return l.get()
                                    },
                                    set(m) {
                                        "readonly" !== d && (m = k.Hj(m), null == m ? e.value.delete(h) : e.value.set(h, m))
                                    },
                                    enumerable: !0
                                })
                            }
                            return f
                        };
                        return {
                            Hj: d => {
                                const e = {};
                                for (const f of Object.keys(a)) {
                                    const [g,
                                        h
                                    ] = a[f], k = h.Hj(d[f]);
                                    null != k && (e[g] = k)
                                }
                                return {
                                    type: "dict",
                                    value: new Map(Object.entries(e))
                                }
                            },
                            er: d => {
                                if ("dict" !== (null === d || void 0 === d ? void 0 : d.type)) throw new P4("record", d);
                                const e = {};
                                for (const f of Object.keys(a)) {
                                    const [g, h] = a[f], k = h.er(d.value.get(g));
                                    null != k && (e[f] = k)
                                }
                                return e
                            },
                            dr: d => c("editable", d),
                            ct: d => c("readonly", d),
                            Cc: d => V4({ ...a,
                                ...d
                            })
                        }
                    },
                    X4 = function(a) {
                        return {
                            Hj: b => ({
                                type: "list",
                                value: b.map(c => a.Hj(c))
                            }),
                            er: b => {
                                if ("list" !== (null === b || void 0 === b ? void 0 : b.type)) throw new P4("list", b);
                                return b.value.filter(xb).map(c =>
                                    a.er(c))
                            },
                            dr: b => {
                                if ("list" !== (null === b || void 0 === b ? void 0 : b.type)) throw new O4("list", b);
                                return new SGb(b, a)
                            },
                            ct: b => {
                                if ("list" !== (null === b || void 0 === b ? void 0 : b.type)) throw new O4("list", b);
                                return new W4(b, a)
                            }
                        }
                    },
                    Y4 = function(a, b) {
                        const c = new Set(Object.keys(a)),
                            d = e => {
                                var f;
                                if ("dict" !== (null === e || void 0 === e ? void 0 : e.type)) throw new O4("union", e);
                                const g = null === (f = e.value.get("k")) || void 0 === f ? void 0 : f.value;
                                f = e.value.get("v");
                                if (null == g || null == f || "string" !== typeof g || !c.has(g)) throw new O4("union", e);
                                return {
                                    X3: a[g],
                                    Y3: f
                                }
                            };
                        return {
                            Hj: e => {
                                const f = b(e);
                                return {
                                    type: "dict",
                                    value: new Map([
                                        ["k", {
                                            type: "string",
                                            value: f
                                        }],
                                        ["v", a[f].Hj(e)]
                                    ])
                                }
                            },
                            er: e => {
                                var f;
                                if ("dict" !== (null === e || void 0 === e ? void 0 : e.type)) throw new P4("union", e);
                                const g = null === (f = e.value.get("k")) || void 0 === f ? void 0 : f.value;
                                f = e.value.get("v");
                                if (null == g || null == f || "string" !== typeof g || !c.has(g)) throw new P4("union", e);
                                const {
                                    X3: h,
                                    Y3: k
                                } = {
                                    X3: a[g],
                                    Y3: f
                                };
                                return h.er(k)
                            },
                            dr: e => {
                                const {
                                    X3: f,
                                    Y3: g
                                } = d(e);
                                return f.dr(g)
                            },
                            ct: e => {
                                const {
                                    X3: f,
                                    Y3: g
                                } = d(e);
                                return f.ct(g)
                            }
                        }
                    },
                    TGb = function(a) {
                        const b = () => a.Mi.zy.get(a.gg.KE) || Z4;
                        return {
                            jka: function() {
                                const c = a.gg,
                                    {
                                        rI: d
                                    } = b();
                                return !(!d || !c.fields.first(({
                                    value: e
                                }) => !!e.options.first(({
                                    value: f
                                }) => f.id === d)))
                            },
                            P1a: function(c, d) {
                                const {
                                    results: e
                                } = b();
                                c = e.fields.get(c);
                                if (!c) return 0;
                                var f;
                                d = null !== (f = c.BH.get(d)) && void 0 !== f ? f : 0;
                                f = 0 < c.total ? d / c.total * 100 : 0;
                                Number.isInteger(f) || (f = parseFloat(f.toFixed(1)));
                                return f
                            },
                            g2a: function(c) {
                                if (!a.gg.fields.first(({
                                        value: e
                                    }) => e.id === c)) return 0;
                                var {
                                    results: d
                                } = b();
                                return (d =
                                    d.fields.get(c)) ? d.total : 0
                            },
                            tka: b,
                            E6a: c => {
                                const d = new Map(a.Mi.zy);
                                d.set(a.gg.KE, { ...b(),
                                    ...c
                                });
                                return d
                            }
                        }
                    },
                    XGb = function(a, b, c, d, e, f) {
                        function g() {
                            const u = q();
                            return ("poll" === p || !u) && 0 === a.Mi.status
                        }
                        async function h() {
                            var u;
                            const v = f.Xi("submit_response", {
                                wy: {
                                    name: "ui.rendering.form.submit_response"
                                }
                            });
                            var x = {
                                Oja: m,
                                Y0a: p,
                                vF: "interacted",
                                action: "response_submitted",
                                location: "in_form"
                            };
                            e && __c.JW({
                                span: v,
                                za: e,
                                event: UGb,
                                props: x
                            });
                            const {
                                results: y,
                                Je: z,
                                Npa: A
                            } = r();
                            if (null != z && g())
                                if (x = null === (u = a.gg.fields.first(({
                                        value: J
                                    }) => {
                                        var K;
                                        return !(null === (K = J.options.first(({
                                            value: L
                                        }) => L.id === z)) || void 0 === K || !K.value)
                                    })) || void 0 === u ? void 0 : u.value) {
                                    l("selected_field_found", v);
                                    var F = a.Mi,
                                        G = y;
                                    "poll" === p && A && A !== z && (G = $4({
                                        Rfa: y,
                                        LC: x.id,
                                        GR: A
                                    }));
                                    G = VGb({
                                        Yza: G,
                                        LC: x.id,
                                        GR: z
                                    });
                                    l("field_results_created", v);
                                    a5(() => {
                                        a.Sl(() => ({
                                            zy: t({
                                                Je: z,
                                                rI: z,
                                                results: G
                                            }),
                                            status: 2,
                                            bbb: !0
                                        }))
                                    });
                                    l("submission_set", v);
                                    v.PP();
                                    if ((await c.drb({
                                            KE: n,
                                            Kib: {
                                                LC: x.id,
                                                iob: x.label.text.Y.trim(),
                                                Je: z,
                                                options: x.options.map(({
                                                    value: J
                                                }) => ({
                                                    id: J.id,
                                                    label: J.label.text.Y.trim()
                                                }))
                                            }
                                        })).ok) return a5(() => {
                                        a.Sl(() => ({
                                            status: 0,
                                            zy: t({
                                                Npa: void 0
                                            })
                                        }))
                                    });
                                    null === d || void 0 === d ? void 0 : __c.Dj(d, {
                                        As: O("izckBA"),
                                        group: WGb,
                                        XN: {
                                            Zv: O("mQhziQ"),
                                            onClick: h
                                        }
                                    });
                                    var I = $4({
                                        Rfa: G,
                                        LC: x.id,
                                        GR: z
                                    });
                                    A && (I = VGb({
                                        Yza: I,
                                        LC: x.id,
                                        GR: A
                                    }));
                                    a5(() => {
                                        a.Sl({ ...F,
                                            ...(A && {
                                                zy: t({
                                                    Je: A,
                                                    rI: A,
                                                    results: I
                                                })
                                            })
                                        })
                                    })
                                } else v.abort();
                            else v.abort()
                        }
                        async function k(u) {
                            var v;
                            const x = r(),
                                y = null === (v = a.gg.fields.first(({
                                    value: F
                                }) => {
                                    var G;
                                    return !(null === (G = F.options.first(({
                                        value: I
                                    }) => I.id === u)) || void 0 === G || !G.value)
                                })) || void 0 === v ? void 0 : v.value;
                            if (y) {
                                var z =
                                    a.Mi,
                                    A = $4({
                                        Rfa: x.results,
                                        LC: y.id,
                                        GR: u
                                    });
                                a5(() => {
                                    a.Sl(() => ({
                                        zy: t({
                                            Je: void 0,
                                            rI: void 0,
                                            results: A
                                        }),
                                        Vy: void 0,
                                        status: 2
                                    }))
                                });
                                (await c.tub({
                                    KE: n
                                })).ok ? a5(() => {
                                    a.Sl(() => ({
                                        status: 0
                                    }))
                                }) : (null === d || void 0 === d ? void 0 : __c.Dj(d, {
                                    As: O("kgHTHw"),
                                    group: WGb,
                                    XN: {
                                        Zv: O("mQhziQ"),
                                        onClick: () => k(u)
                                    }
                                }), a5(() => {
                                    a.Sl(z)
                                }))
                            }
                        }

                        function l(u, v) {
                            v.Xk(u);
                            v.Ai().Xk(u)
                        }
                        const m = a.gg.id,
                            n = a.gg.KE,
                            p = a.gg.type,
                            q = b.jka,
                            r = b.tka,
                            t = b.E6a;
                        return {
                            submit: h,
                            una: function() {
                                a.Sl(() => ({
                                    $M: 1
                                }))
                            },
                            vna: function() {
                                a.Sl(() => ({
                                    $M: 0
                                }))
                            },
                            tna: function() {
                                a.Sl(() =>
                                    ({
                                        $M: 2
                                    }))
                            },
                            wna: function() {
                                a.Sl(() => ({
                                    $M: 1
                                }))
                            },
                            fca: function(u) {
                                const v = r();
                                if ("poll" === p && u === (null === v || void 0 === v ? void 0 : v.Je) && u === (null === v || void 0 === v ? void 0 : v.rI)) k(u);
                                else if (g() && a.gg.fields.some(({
                                        value: y
                                    }) => y.options.some(({
                                        value: z
                                    }) => z.id === u))) {
                                    var x = null === v || void 0 === v ? void 0 : v.rI;
                                    a5(() => {
                                        const y = r();
                                        a.Sl(() => ({
                                            zy: t({
                                                Npa: x,
                                                Je: y.Je === u ? void 0 : u
                                            })
                                        }))
                                    });
                                    "poll" === p && h()
                                }
                            },
                            f9: function(u) {
                                g() && a.gg.fields.some(({
                                    value: v
                                }) => v.options.some(({
                                    value: x
                                }) => x.id === u)) && a.Sl(() => ({
                                    eD: u
                                }))
                            },
                            g9: function(u) {
                                0 ===
                                    a.Mi.status && a.gg.fields.some(({
                                        value: v
                                    }) => v.options.some(({
                                        value: x
                                    }) => x.id === u)) && a.Mi.eD && a.Sl(() => ({
                                        eD: void 0
                                    }))
                            },
                            d9: function(u) {
                                const {
                                    rI: v,
                                    Je: x
                                } = r();
                                0 === a.Mi.status && a.gg.fields.some(({
                                    value: y
                                }) => y.options.some(({
                                    value: z
                                }) => z.id === u)) && x !== u && !v && a.Sl(() => ({
                                    Vy: u
                                }))
                            },
                            h9: function(u) {
                                0 === a.Mi.status && a.gg.fields.some(({
                                    value: v
                                }) => v.options.some(({
                                    value: x
                                }) => x.id === u)) && a.Mi.Vy && a.Sl(() => ({
                                    Vy: void 0
                                }))
                            }
                        }
                    },
                    $4 = function({
                        Rfa: a,
                        LC: b,
                        GR: c
                    }) {
                        var d;
                        const e = null !== (d = a.fields.get(b)) && void 0 !== d ? d : {
                            id: b,
                            BH: new Map,
                            total: 0
                        };
                        var f;
                        d = Math.max(0, (null !== (f = e.BH.get(c)) && void 0 !== f ? f : 0) - 1);
                        f = new Map(e.BH);
                        0 < d ? f.set(c, d) : f.delete(c);
                        return {
                            fields: b5(a.fields, b, {
                                id: b,
                                BH: f,
                                total: Math.max(0, e.total - 1)
                            })
                        }
                    },
                    VGb = function({
                        Yza: a,
                        LC: b,
                        GR: c
                    }) {
                        var d;
                        const e = null !== (d = a.fields.get(b)) && void 0 !== d ? d : {
                            id: b,
                            BH: new Map,
                            total: 0
                        };
                        var f;
                        d = (null !== (f = e.BH.get(c)) && void 0 !== f ? f : 0) + 1;
                        return {
                            fields: b5(a.fields, b, {
                                id: b,
                                BH: b5(e.BH, c, d),
                                total: e.total + 1
                            })
                        }
                    },
                    b5 = function(a, b, c) {
                        return new Map([...a.entries(), [b, c]])
                    },
                    YGb = function(a,
                        b) {
                        var c;
                        return (null === (c = a.first()) || void 0 === c ? void 0 : c.value) === b
                    },
                    c5 = function(a, b) {
                        var c;
                        return ((null === (c = a.sta) || void 0 === c ? void 0 : c.get(a.document.language || "en")) || [])[ZGb[b]]
                    },
                    $Gb = async function() {
                        var {
                            tta: a
                        } = await __webpack_require__.me(743426).then(() => ({
                            tta: '{\n"af-ZA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Verkeerd",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Dien tans in \u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laai tans...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Vanlyn",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Korrek",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Regstreeks"\n},\n"ar":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"ar-AE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"ar-EG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"ar-SA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"as-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0985\u09b6\u09c1\u09a6\u09cd\u09a7",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u09a6\u09be\u0996\u09bf\u09b2 \u0995\u09f0\u09be \u09b9\u09c8 \u0986\u099b\u09c7...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u09b2\'\u09a1 \u09b9\u09c8 \u0986\u099b\u09c7",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0985\u09ab\u09b2\u09be\u0987\u09a8",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u09b6\u09c1\u09a6\u09cd\u09a7",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u09b2\u09be\u0987\u09ad"\n},\n"az-AZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Yanl\u0131\u015f",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"T\u0259qdim edilir...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Y\u00fckl\u0259nir...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflayn",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Do\u011fru",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Canl\u0131"\n},\n"bg-BG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u043d\u043e",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u041f\u043e\u0434\u0430\u0432\u0430\u043d\u0435\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0417\u0430\u0440\u0435\u0436\u0434\u0430\u043d\u0435...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u041f\u0440\u0430\u0432\u0438\u043b\u043d\u043e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u041d\u0430 \u0436\u0438\u0432\u043e"\n},\n"bn-BD":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u09ad\u09c1\u09b2",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u09aa\u09cd\u09b0\u09a4\u09bf\u0995\u09cd\u09b0\u09bf\u09af\u09bc\u09be \u09b8\u09c7\u09ad \u0995\u09b0\u09be \u09b9\u09df\u09c7\u099b\u09c7",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u099c\u09ae\u09be \u09a6\u09c7\u0993\u09df\u09be \u09b9\u099a\u09cd\u099b\u09c7...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u09b2\u09cb\u09a1 \u09b9\u099a\u09cd\u099b\u09c7...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u099f\u09bf \u09ad\u09cb\u099f} other {# \u099f\u09bf \u09ad\u09cb\u099f}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0985\u09ab\u09b2\u09be\u0987\u09a8",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u09b8\u09a0\u09bf\u0995",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u09b2\u09be\u0987\u09ad"\n},\n"ca-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecte",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"S\'ha desat la resposta",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"S\'est\u00e0 enviant...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"S\'est\u00e0 carregant...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vot} other {# vots}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sense connexi\u00f3",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcte",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicada"\n},\n"ceb-PH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Sayop",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Nagsumite...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Nag-load...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Husto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"cs-CZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nespr\u00e1vn\u011b",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odpov\u011b\u010f ulo\u017eena",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Odes\u00edl\u00e1n\u00ed\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Na\u010d\u00edt\u00e1n\u00ed...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0hlas} few {#\u00a0hlasy} many {#\u00a0hlasu} other {#\u00a0hlas\u016f}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Spr\u00e1vn\u011b",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"K\u00a0dispozici"\n},\n"cy-GB":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Anghywir",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Wrthi\'n cyflwyno...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Yn llwytho...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"All-lein",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Cywir",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Yn Fyw"\n},\n"da-DK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Forkert",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Svaret er gemt",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Indsender...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Indl\u00e6ser...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stemme} other {# stemmer}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Korrekt",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktiv"\n},\n"de-DE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Falsch",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Antwort gespeichert",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Wird gesendet \u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laden\u00a0...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# Stimme} other {# Stimmen}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Richtig",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"el-GR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u039b\u03ac\u03b8\u03bf\u03c2",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0397 \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03cd\u03c4\u03b7\u03ba\u03b5",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u03a5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u03a6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u03c8\u03ae\u03c6\u03bf\u03c2} other {# \u03c8\u03ae\u03c6\u03bf\u03b9}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0395\u03ba\u03c4\u03cc\u03c2 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7\u03c2",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u03a3\u03c9\u03c3\u03c4\u03ac",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0394\u03b9\u03b1\u03b8\u03ad\u03c3\u03b9\u03bc\u03bf"\n},\n"en":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-AU":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-GB":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-PH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-psaccent":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"es-419":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrectas",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Se guard\u00f3 la respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correctas",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-AR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Se guard\u00f3 la respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correctas",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-CO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrectas",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Se guard\u00f3 la respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"La respuesta se ha guardado",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-MX":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Se guard\u00f3 la respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-US":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Se guard\u00f3 la respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"et-EE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Vale",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Esitatud ...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laadimine ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"V\u00f5rgu\u00fchenduseta",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u00d5ige",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Avalik"\n},\n"eu-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Oker",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"La respuesta se ha guardado",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Bidaltzen...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Kargatzen\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Lineaz kanpo",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Zuzen",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publikoa"\n},\n"fa-IR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0646\u0627\u062f\u0631\u0633\u062a",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062f\u0631\u062d\u0627\u0644 \u0627\u0631\u0633\u0627\u0644\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062f\u0631\u062d\u0627\u0644 \u0628\u0627\u0631 \u06a9\u0631\u062f\u0646\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0622\u0641\u0644\u0627\u06cc\u0646",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u06cc\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0632\u0646\u062f\u0647"\n},\n"ff-SN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nana daidai",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Tottirde...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Lowd\u00e9...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Boowal \u0253oggol",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Daidai",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Wuur"\n},\n"fi-FI":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"42a556d97b24604fe74079d18c6b127b9c784999":"V\u00e4\u00e4rin",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Vastaus tallennettu",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"L\u00e4hetet\u00e4\u00e4n...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Ladataan...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u00e4\u00e4ni} other {# \u00e4\u00e4nt\u00e4}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Oikein",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"K\u00e4ynniss\u00e4"\n},\n"fr-BE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u00e9ponse enregistr\u00e9e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Envoi en cours...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Chargement\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0vote} other {#\u00a0votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hors ligne",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En ligne"\n},\n"fr-CA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u00e9ponse enregistr\u00e9e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Envoi en cours...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Chargement\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0vote} other {#\u00a0votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hors ligne",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En ligne"\n},\n"fr-FR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u00e9ponse enregistr\u00e9e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Envoi en cours...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Chargement\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0vote} other {#\u00a0votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hors ligne",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En ligne"\n},\n"gl-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrectas",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"La respuesta se ha guardado",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sen conexi\u00f3n",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correctas",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En directo"\n},\n"gu-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0a96\u0acb\u0a9f\u0abe",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0a9c\u0ab5\u0abe\u0aac \u0ab8\u0abe\u0a9a\u0ab5\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0a86\u0ab5\u0acd\u0aaf\u0acb",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0ab8\u0aac\u0aae\u0abf\u0a9f \u0a95\u0ab0\u0ac0 \u0ab0\u0ab9\u0acd\u0aaf\u0abe \u0a9b\u0ac0\u0a8f...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0ab2\u0acb\u0aa1 \u0a95\u0ab0\u0ac0 \u0ab0\u0ab9\u0acd\u0aaf\u0abe\u0a82 \u0a9b\u0ac7...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0aae\u0aa4} other {# \u0aae\u0aa4}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0a91\u0aab\u0ab2\u0abe\u0a87\u0aa8",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0ab8\u0abe\u0a9a\u0abe",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0ab2\u0abe\u0a87\u0ab5"\n},\n"ha-NG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Ba daidai ba",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Aikawa...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u018aorawa...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"A waje da layi",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Daidai",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Nan take"\n},\n"he-IL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"%{0}",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u05dc\u05d0 \u05e0\u05db\u05d5\u05df",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u05d4\u05ea\u05d2\u05d5\u05d1\u05d4 \u05e0\u05e9\u05de\u05e8\u05d4",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u05e9\u05d5\u05dc\u05d7...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u05d8\u05d5\u05e2\u05df...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {\u05d4\u05e6\u05d1\u05e2\u05d4 \u05d0\u05d7\u05ea} two {# \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea} many {# \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea} other {# \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u05dc\u05d0 \u05de\u05e7\u05d5\u05d5\u05df",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u05e0\u05db\u05d5\u05df",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u05d6\u05de\u05d9\u05df"\n},\n"hi-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u091c\u0935\u093e\u092c \u0938\u0947\u0935 \u0915\u093f\u092f\u093e \u0917\u092f\u093e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0938\u092c\u092e\u093f\u091f \u0915\u093f\u092f\u093e \u091c\u093e \u0930\u0939\u093e \u0939\u0948...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u0939\u094b \u0930\u0939\u093e \u0939\u0948...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0935\u094b\u091f} other {# \u0935\u094b\u091f}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u095e\u0932\u093e\u0907\u0928",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0907\u0935"\n},\n"hr-HR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Neto\u010dno",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odgovor je spremljen",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Slanje...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"U\u010ditavanje...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# glas} few {# glasa} other {# glasova}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Izvan mre\u017ee",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"To\u010dno",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"U\u017eivo"\n},\n"hu-HU":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Helytelen",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"V\u00e1lasz mentve",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Bek\u00fcld\u00e9s...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Bet\u00f6lt\u00e9s\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# szavazat} other {# szavazat}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Helyes",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u00c9l\u0151"\n},\n"hy-AM":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u054d\u056d\u0561\u056c",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0546\u0565\u0580\u056f\u0561\u0575\u0561\u0581\u057e\u0578\u0582\u0574 \u0567...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0532\u0565\u057c\u0576\u0578\u0582\u0574...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0531\u0576\u0581\u0561\u0576\u0581",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0543\u056b\u0577\u057f",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0540\u0580\u0561\u057a\u0561\u0580\u0561\u056f\u057e\u0561\u056e \u0567"\n},\n"id-ID":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Respons tercatat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Sedang mengirim ...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Memuat ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# suara} other {# suara}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Benar",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Sudah tayang"\n},\n"ig-NG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Abughi eziokwu",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Na-enyefe",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Na-ebugo...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"An\u1ecdgh\u1ecb n\'\u1ecbntanet\u1ecb",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Eziokwu",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Gbanyere"\n},\n"it-IT":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Risposta errata",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Risposta salvata",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Stiamo inviando il modulo...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Caricamento in corso...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# voti}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Risposta corretta",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Disponibile"\n},\n"ja-Hira":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u3075\u305b\u3044\u304b\u3044",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u3078\u3093\u3057\u3093\u304c\u307b\u305e\u3093\u3055\u308c\u307e\u3057\u305f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u305d\u3046\u3057\u3093\u3061\u3085\u3046...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u3088\u307f\u3053\u3093\u3067\u3044\u307e\u3059\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u3072\u3087\u3046} other {#\u3072\u3087\u3046}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u304a\u3075\u3089\u3044\u3093",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u305b\u3044\u304b\u3044",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u3053\u3046\u304b\u3044\u306a\u304b"\n},\n"ja-JP":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u4e0d\u6b63\u89e3",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u8fd4\u4fe1\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u9001\u4fe1\u4e2d...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u7968} other {#\u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u30aa\u30d5\u30e9\u30a4\u30f3",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u89e3",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u516c\u958b\u4e2d"\n},\n"jv-ID":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Respons tercatat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Ngirimake...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Ngamot...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# suara} other {# suara}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Bener",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Langsung"\n},\n"ka-GE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u10d0\u10e0\u10d0\u10e1\u10ec\u10dd\u10e0\u10d8",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u10db\u10d8\u10db\u10d3\u10d8\u10dc\u10d0\u10e0\u10d4\u10dd\u10d1\u10e1 \u10e9\u10d0\u10d1\u10d0\u10e0\u10d4\u10d1\u10d0...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u10d8\u10e2\u10d5\u10d8\u10e0\u10d7\u10d4\u10d1\u10d0...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u10dd\u10e4\u10da\u10d0\u10d8\u10dc\u10d8",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u10e1\u10ec\u10dd\u10e0\u10d8",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u10e1\u10d0\u10ef\u10d0\u10e0\u10dd"\n},\n"kk-KZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0414\u04b1\u0440\u044b\u0441 \u0435\u043c\u0435\u0441",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0416\u0456\u0431\u0435\u0440\u0456\u043b\u0443\u0434\u0435...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0416\u04af\u043a\u0442\u0435\u043b\u0443\u0434\u0435...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0414\u04b1\u0440\u044b\u0441",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0416\u0430\u043b\u043f\u044b\u0493\u0430 \u043e\u0440\u0442\u0430\u049b"\n},\n"km-KH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u1780\u17c6\u1796\u17bb\u1784\u178a\u17b6\u1780\u17cb\u1794\u1789\u17d2\u1787\u17bc\u1793...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u1780\u17c6\u1796\u17bb\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a.",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u1782\u17d2\u1798\u17b6\u1793\u17a2\u17ca\u17b8\u1793\u1792\u17ba\u178e\u17b7\u178f",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u1794\u1793\u17d2\u178f\u1795\u17d2\u1791\u17b6\u179b\u17cb"\n},\n"kn-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0ca4\u0caa\u0ccd\u0caa\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0caa\u0ccd\u0cb0\u0ca4\u0cbf\u0c95\u0ccd\u0cb0\u0cbf\u0caf\u0cc6\u0caf\u0ca8\u0ccd\u0ca8\u0cc1 \u0c89\u0cb3\u0cbf\u0cb8\u0cb2\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0cb8\u0cb2\u0ccd\u0cb2\u0cbf\u0cb8\u0cb2\u0cbe\u0c97\u0cc1\u0ca4\u0ccd\u0ca4\u0cbf\u0ca6\u0cc6...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0cb2\u0ccb\u0ca1\u0ccd \u0c86\u0c97\u0cc1\u0ca4\u0ccd\u0ca4\u0cbf\u0ca6\u0cc6...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0cae\u0ca4} other {# \u0cae\u0ca4\u0c97\u0cb3\u0cc1}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0c86\u0cab\u0ccd\u200c\u0cb2\u0cc8\u0ca8\u0ccd",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0cb8\u0cb0\u0cbf\u0caf\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0cb2\u0cc8\u0cb5\u0ccd"\n},\n"ko-KR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\uc798\ubabb\ub41c \ub2f5\ubcc0",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\ub2f5\ubcc0\uc774 \uc800\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\uc81c\ucd9c \uc911...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\ub85c\ub4dc \uc911...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\ud45c} other {#\ud45c}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\uc624\ud504\ub77c\uc778",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\uc62c\ubc14\ub978 \ub2f5\ubcc0",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\uac8c\uc2dc \uc911"\n},\n"ku-TR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nerast",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"P\u00ea\u015fk\u00ea\u015fkirin...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Bar dike",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflayn",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Rast",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Z\u00eend\u00ee"\n},\n"ky-KG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041a\u0430\u0442\u0430",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0422\u0430\u043f\u0448\u044b\u0440\u044b\u043b\u0443\u0443\u0434\u0430...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0416\u04af\u043a\u0442\u04e9\u043b\u04af\u04af\u0434\u04e9...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0422\u0443\u0443\u0440\u0430",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0422\u04af\u0437 \u043e\u0431\u043e"\n},\n"lt-LT":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Neteisingai",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Pateikiama...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u012ekeliama...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Neprijungta",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Teisingai",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Vie\u0161as"\n},\n"lv-LV":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nepareizi",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Iesnieg\u0161ana...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Notiek iel\u0101de",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Bezsaist\u0113",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Pareizi",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Tie\u0161saist\u0113"\n},\n"ma-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0938\u092c\u092e\u093f\u091f \u092d\u090f \u0930\u0939\u0932 \u0905\u091b\u093f...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u092d\u090f \u0930\u0939\u0932 \u0905\u091b\u093f...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u092b\u0932\u093e\u0907\u0928",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0907\u0935"\n},\n"mg-MG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Diso",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Mandrotsaka...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Mamoaka\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Ivelan-jotra",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Marina",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Mivantana"\n},\n"mk-MK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0435\u0442\u043e\u0447\u043d\u043e",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0421\u0435 \u043f\u043e\u0434\u043d\u0435\u0441\u0443\u0432\u0430...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0421\u0435 \u0432\u0447\u0438\u0442\u0443\u0432\u0430...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0458\u043d",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0422\u043e\u0447\u043d\u043e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0408\u0430\u0432\u043d\u043e"\n},\n"ml-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0d24\u0d46\u0d31\u0d4d\u0d31\u0d4d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0d2a\u0d4d\u0d30\u0d24\u0d3f\u0d15\u0d30\u0d23\u0d02 \u0d38\u0d02\u0d30\u0d15\u0d4d\u0d37\u0d3f\u0d1a\u0d4d\u0d1a\u0d41",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0d38\u0d2e\u0d7c\u0d2a\u0d4d\u0d2a\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0d32\u0d4b\u0d21\u0d41\u0d1a\u0d46\u0d2f\u0d4d\u0d2f\u0d41\u0d28\u0d4d\u0d28\u0d41...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0d35\u0d4b\u0d1f\u0d4d\u0d1f\u0d4d} other {# \u0d35\u0d4b\u0d1f\u0d4d\u0d1f\u0d41\u0d15\u0d7e}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0d13\u0d2b\u0d4d\u200c\u0d32\u0d48\u0d7b",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0d36\u0d30\u0d3f",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0d32\u0d48\u0d35\u0d4d"\n},\n"mn-MN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0411\u0443\u0440\u0443\u0443",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0418\u043b\u0433\u044d\u044d\u0436 \u0431\u0430\u0439\u043d\u0430...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0410\u0447\u0430\u0430\u043b\u0436 \u0431\u0430\u0439\u043d\u0430...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0417\u04e9\u0432",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0428\u0443\u0443\u0434"\n},\n"mr-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u091a\u0942\u0915",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u092a\u094d\u0930\u0924\u093f\u0938\u093e\u0926 \u091c\u0924\u0928 \u0915\u0947\u0932\u093e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0938\u092c\u092e\u093f\u091f \u0915\u0930\u0924 \u0906\u0939\u0947...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u0939\u094b\u0924 \u0906\u0939\u0947...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u092e\u0924} other {# \u092e\u0924\u0947}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u092b\u0932\u093e\u0907\u0928",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0905\u091a\u0942\u0915",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0908\u0935"\n},\n"ms-MY":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Respons disimpan",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Menyerahkan...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Memuatkan...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# undian} other {# undian}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Luar talian",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Betul",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Hidup"\n},\n"my-MM":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u1019\u1019\u103e\u1014\u103a\u1015\u102b",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u1015\u1031\u1038\u1015\u102d\u102f\u1037\u1014\u1031\u101e\u100a\u103a...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u1016\u103d\u1004\u1037\u103a\u1014\u1031\u101e\u100a\u103a...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u1021\u1031\u102c\u1037\u1016\u103a\u101c\u102d\u102f\u1004\u103a\u1038",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u1019\u103e\u1014\u103a\u101e\u100a\u103a",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u1010\u1036\u1006\u102d\u1015\u103a\u1021\u101b\u103e\u1004\u103a"\n},\n"nb-NO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Feil",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Svar lagret",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Sender inn\u00a0\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laster inn\u00a0...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stemme} other {# stemmer}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Frakoblet",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Riktig",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"ne-NP":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u092a\u0947\u0936 \u0917\u0930\u093f\u0926\u0948...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u0939\u0941\u0901\u0926\u0948...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0905\u092b\u0932\u093e\u0907\u0928",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0907\u092d"\n},\n"nl-BE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Onjuist",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Antwoord opgeslagen",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Verzenden...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laden ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stem} other {# stemmen}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Juist",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"nl-NL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Onjuist",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Antwoord opgeslagen",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Verzenden...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laden...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stem} other {# stemmen}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Juist",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"om-ET":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Sirrii miti",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Galchaa jirra...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Fe\'uu jira",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sarara ala",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Sirrii",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"kallattin"\n},\n"pa-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0a17\u0a32\u0a24",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0a38\u0a2a\u0a41\u0a30\u0a26 \u0a15\u0a40\u0a24\u0a3e \u0a1c\u0a3e \u0a30\u0a3f\u0a39\u0a3e \u0a39\u0a48...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0a32\u0a4b\u0a21 \u0a15\u0a40\u0a24\u0a3e \u0a1c\u0a3e \u0a30\u0a3f\u0a39\u0a3e \u0a39\u0a48...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0a14\u0a5e\u0a32\u0a3e\u0a08\u0a28",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0a38\u0a39\u0a40",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0a32\u0a3e\u0a08\u0a35"\n},\n"pa-PK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u0644\u0637",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0645\u0639 \u06a9\u06cc\u062a\u0627 \u062c\u0627 \u0631\u06c1\u06cc\u0627 \u0627\u06d2...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u06cc\u0627 \u0627\u06d2\u06d4\u06d4\u06d4",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0622\u0641 \u0644\u0627\u0626\u0646",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u062f\u0631\u0633\u062a",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0628\u0631\u0627\u06c1\u0650 \u0631\u0627\u0633\u062a"\n},\n"pl-PL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nieprawid\u0142owo",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Zapisano odpowied\u017a",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Przesy\u0142anie\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0141adowanie\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# g\u0142os} few {# g\u0142osy} many {# g\u0142os\u00f3w} other {# g\u0142osu}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Prawid\u0142owo",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktywny"\n},\n"pt-BR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorreta",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"A resposta foi salva",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Carregando\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correta",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicado"\n},\n"pt-PT":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorreta",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"A resposta foi guardada",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"A carregar...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correta",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicado"\n},\n"ro-RO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u0103spunsul a fost salvat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Se trimite...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Se \u00eencarc\u0103...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vot} few {# voturi} other {# de voturi}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Corect",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicat"\n},\n"ru-RU":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0435\u0432\u0435\u0440\u043d\u043e",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u041e\u0442\u0432\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0\u0433\u043e\u043b\u043e\u0441} few {#\u00a0\u0433\u043e\u043b\u043e\u0441\u0430} many {#\u00a0\u0433\u043e\u043b\u043e\u0441\u043e\u0432} other {#\u00a0\u0433\u043e\u043b\u043e\u0441\u043e\u0432}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041d\u0435 \u0432 \u0441\u0435\u0442\u0438",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0412\u0435\u0440\u043d\u043e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e"\n},\n"sd-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u091c\u092e\u093e \u0915\u0930\u093e\u0913 \u092a\u092f\u094b \u0935\u091e\u0947...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u092a\u092f\u094b \u0925\u093f\u0910...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u092b\u0932\u093e\u0907\u0928\u0902",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u091c\u0940\u0924\u094b-\u091c\u093e\u0917\u0924\u094b"\n},\n"si-LK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0dc0\u0dd0\u0dbb\u0daf\u0dd2",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0dba\u0ddc\u0db8\u0dd4 \u0d9a\u0dbb\u0db8\u0dd2\u0db1\u0dca...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0db4\u0dd6\u0dbb\u0dab\u0dba \u0dc0\u0dda...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0d95\u0dc6\u0dca\u0dbd\u0dba\u0dd2\u0db1\u0dca",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0db1\u0dd2\u0dc0\u0dd0\u0dbb\u0daf\u0dd2",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0dc3\u0da2\u0dd3\u0dc0\u0dd3"\n},\n"sk-SK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nespr\u00e1vne",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odpove\u010f bola ulo\u017een\u00e1",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Odosiela sa...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Na\u010d\u00edtava sa...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# hlas} few {# hlasy} many {# hlasu} other {# hlasov}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Spr\u00e1vne",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Na\u017eivo"\n},\n"sl-SI":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nepravilno",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Po\u0161iljanje \u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Nalaganje ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Brez povezave",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Pravilno",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"V \u017eivo"\n},\n"sn-ZW":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Vatadza",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Kutumira...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Kurodha...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hapana indaneti",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Vagona",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Ruzhinji"\n},\n"so-SO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Khalad",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Gudbinta...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Soo wada bogga.",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Qadka ka maqan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Sax",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Toos"\n},\n"sq-AL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"E pasakt\u00eb",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Po d\u00ebrgohet...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"N\u00eb ngarkim...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Jasht\u00eb linje",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"E sakt\u00eb",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktiv"\n},\n"sr-RS":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Neta\u010dno",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Prosle\u0111ivanje...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"U\u010ditava se...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Van mre\u017ee",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Ta\u010dno",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"U\u017eivo"\n},\n"su-ID":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Ngirimkeun...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Ngamuat...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflen",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Bener",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktif"\n},\n"sv-SE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Fel",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Svar sparat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Skickar in ...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"L\u00e4ser in ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# r\u00f6st} other {# r\u00f6ster}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"R\u00e4tt",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicerad"\n},\n"sw-KE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Si sahihi",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Inawasilisha...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Kupakia...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Nje ya mtandao",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Sahihi",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Moja kwa moja"\n},\n"ta-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0ba4\u0bb5\u0bb1\u0bc1",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0baa\u0ba4\u0bbf\u0bb2\u0bcd \u0b9a\u0bc7\u0bae\u0bbf\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0b9a\u0bae\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0b8f\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1} other {# \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0b95\u0bb3\u0bcd}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0b86\u0b83\u0baa\u0bcd\u0bb2\u0bc8\u0ba9\u0bcd",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0b9a\u0bb0\u0bbf",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0ba8\u0bc7\u0bb0\u0bb2\u0bc8"\n},\n"te-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0c38\u0c30\u0c48\u0c28\u0c26\u0c3f \u0c15\u0c3e\u0c26\u0c41",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0c2a\u0c4d\u0c30\u0c24\u0c3f\u0c38\u0c4d\u0c2a\u0c02\u0c26\u0c28 \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c2c\u0c21\u0c3f\u0c02\u0c26\u0c3f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0c38\u0c2e\u0c30\u0c4d\u0c2a\u0c3f\u0c38\u0c4d\u0c24\u0c4b\u0c02\u0c26\u0c3f...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0c32\u0c4b\u0c21\u0c4d \u0c05\u0c35\u0c41\u0c24\u0c4b\u0c02\u0c26\u0c3f...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0c13\u0c1f\u0c4d\u200c} other {# \u0c13\u0c1f\u0c4d\u200c\u0c32\u0c41}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0c06\u0c2b\u0c4d\u200c\u0c32\u0c48\u0c28\u0c4d",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0c38\u0c30\u0c48\u0c28\u0c26\u0c3f",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0c2a\u0c2c\u0c4d\u0c32\u0c3f\u0c15\u0c4d"\n},\n"th-TH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e41\u0e25\u0e49\u0e27",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e2a\u0e48\u0e07...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0e42\u0e2b\u0e27\u0e15} other {# \u0e42\u0e2b\u0e27\u0e15}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0e2d\u0e2d\u0e1f\u0e44\u0e25\u0e19\u0e4c",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49"\n},\n"tl-PH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Hindi Tama",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Na-save ang tugon",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Isinusumite...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Naglo-load...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# boto} other {# (na) boto}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Tama",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"tr-TR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"%{0}",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Yanl\u0131\u015f",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Yan\u0131t\u0131n\u0131z\u0131 kaydettik",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"G\u00f6nderiliyor...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Y\u00fckleniyor...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# oy} other {# oy}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u00c7evrimd\u0131\u015f\u0131",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Do\u011fru",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Yay\u0131nda"\n},\n"uk-UA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0430\u0434\u0430\u043b\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u041d\u0430\u0434\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c} few {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456} many {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0435\u0439} other {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0435\u0439}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041d\u0435 \u0432 \u043c\u0435\u0440\u0435\u0436\u0456",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u041d\u0430\u0434\u0430\u043b\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0443\u0441\u0456\u043c"\n},\n"ur-PK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u0644\u0637",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0645\u0639 \u06a9\u0631\u0648\u0627 \u0631\u06c1\u06d2 \u06c1\u06cc\u06ba...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u0627 \u06c1\u06d2...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0622\u0641 \u0644\u0627\u0626\u0646",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u062f\u0631\u0633\u062a",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0628\u0631\u0627\u06c1\u0650 \u0631\u0627\u0633\u062a"\n},\n"uz-UZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Noto\u02bbg\u02bbri",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Yuborilmoqda...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Yuklanmoqda...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflayn",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"To\u02bbg\u02bbri",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Jonli"\n},\n"vi-VN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Kh\u00f4ng ch\u00ednh x\u00e1c",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0110\u00e3 l\u01b0u c\u00e2u tr\u1ea3 l\u1eddi",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0110ang g\u1eedi...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0110ang t\u1ea3i...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# l\u01b0\u1ee3t b\u00ecnh ch\u1ecdn} other {# l\u01b0\u1ee3t b\u00ecnh ch\u1ecdn}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Ch\u00ednh x\u00e1c",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Tr\u1ef1c ti\u1ebfp"\n},\n"wo-SN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Jubul",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Mingi koy joxe...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Mingi yab...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Amul net",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Jub na",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Teew"\n},\n"xh-ZA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Abangachananga",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Iyangenisa...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Iyalowuda...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"I-Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Abachanileyo",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"iLive"\n},\n"yo-NG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"K\u00f2 t\u1ecd\u0300n\u00e0",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u01f8f\u00e0kal\u1eb9\u0300...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u00d3 n \u1e63araj\u1ecd...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u00c0\u00ecs\u00ed n\u00ed on\u00edfor\u00edkor\u00ed",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"B\u1eb9\u0301\u1eb9\u0300 ni",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"zh-CN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u9519\u8bef",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u5df2\u4fdd\u5b58\u56de\u5e94",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u6b63\u5728\u63d0\u4ea4\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u6b63\u5728\u52a0\u8f7d\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u7968} other {#\u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u79bb\u7ebf",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u786e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u5df2\u4e0a\u7ebf"\n},\n"zh-HK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u4e0d\u6b63\u78ba",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u5df2\u5132\u5b58\u56de\u61c9",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u6b63\u5728\u63d0\u4ea4\u2026\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u6b63\u5728\u8f09\u5165\u2026\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u7968} other {# \u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u96e2\u7dda",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u78ba",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u4e0a\u7dda"\n},\n"zh-TW":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u4e0d\u6b63\u78ba",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u5df2\u5132\u5b58\u56de\u61c9",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u6b63\u5728\u63d0\u4ea4\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u8f09\u5165\u4e2d\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u7968} other {# \u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u96e2\u7dda",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u78ba",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u53ef\u4f7f\u7528"\n},\n"zu-ZA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Akunembile",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Iyathumela...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Iyalayisha...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Okungaxhunyiwe ku-inthanethi",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Kunembile",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Bukhoma"\n}\n}'
                        }));
                        a = JSON.parse(a);
                        const b = new Map;
                        for (const c in a) b.set(c, Object.values(a[c]));
                        return b
                    },
                    d5 = function({
                        layout: a,
                        direction: b,
                        gap: c,
                        padding: d,
                        background: e,
                        border: f,
                        V: g,
                        cells: h,
                        ...k
                    }) {
                        a = "vertical" === a;
                        let l = [];
                        const m = [],
                            n = c && d,
                            p = d ? 1 : 0;
                        let q = 1;
                        for (let r = 0; r < h.length; r++) {
                            const t = h[r];
                            "string" === typeof t.size ? l.push(t.size) : l.push(`${t.size}px`);
                            m.push({ ...t,
                                id: t.id,
                                placement: a ? {
                                    gridColumnStart: `${p+1}`,
                                    gridColumnEnd: `${p+2}`,
                                    gridRowStart: `${p+q}`,
                                    gridRowEnd: `${p+q+1}`,
                                    padding: t.padding ? aHb(t.padding) : void 0,
                                    alignSelf: t.alignSelf
                                } : {
                                    gridColumnStart: `${p+q}`,
                                    gridColumnEnd: `${p+q+1}`,
                                    gridRowStart: `${p+1}`,
                                    gridRowEnd: `${p+2}`,
                                    padding: t.padding ? aHb(t.padding) : void 0,
                                    alignSelf: t.alignSelf
                                }
                            });
                            q += n ? 2 : 1
                        }
                        n && (l = l.join(` ${c}px `).split(" "));
                        d && (l = [`${d}px`, ...l, `${d}px`]);
                        return { ...k,
                            type: "layout",
                            cells: m,
                            direction: b,
                            fill: e,
                            border: f,
                            V: g,
                            gridTemplateColumns: a ? d ? [`${d}px`, "1fr", `${d}px`] : ["1fr"] : l,
                            gridTemplateRows: a ? l : d ? [`${d}px`, "auto", `${d}px`] : ["auto"],
                            columnGap: n || a ? void 0 : c,
                            rowGap: !n && a ? c : void 0
                        }
                    },
                    bHb =
                    function({
                        padding: a,
                        direction: b,
                        background: c,
                        V: d,
                        Ia: e,
                        border: f,
                        content: g,
                        ref: h,
                        key: k,
                        ...l
                    }) {
                        return { ...l,
                            type: "layout",
                            direction: b,
                            gridTemplateColumns: ["1fr"],
                            gridTemplateRows: ["1fr"],
                            fill: c,
                            V: d,
                            Ia: e,
                            border: f,
                            cells: [{
                                id: "_",
                                content: g,
                                placement: {
                                    gridColumnStart: "1",
                                    gridColumnEnd: "2",
                                    gridRowStart: "1",
                                    gridRowEnd: "2",
                                    alignSelf: "center",
                                    padding: a
                                }
                            }],
                            key: k,
                            ref: h
                        }
                    },
                    aHb = function(a) {
                        switch (a.length) {
                            case 0:
                                break;
                            case 1:
                                return a[0];
                            case 2:
                                return {
                                    va: a[0],
                                    Ka: a[1],
                                    Ea: a[0],
                                    ra: a[1]
                                };
                            case 4:
                                return {
                                    va: a[0],
                                    Ka: a[1],
                                    Ea: a[2],
                                    ra: a[3]
                                };
                            default:
                                throw Error(`Invalid padding value: ${a}`);
                        }
                    },
                    e5 = function(a, b) {
                        __c.w(0 < b.length, "zero contrast candidates received");
                        const c = new Map;
                        return __c.rt(b, d => {
                            var e;
                            if (null === (e = c.get(d)) || void 0 === e) {
                                e = OGb(d);
                                const f = OGb(a);
                                e = e > f ? (e + .05) / (f + .05) : (f + .05) / (e + .05)
                            }
                            c.set(d, e);
                            return e
                        })
                    },
                    g5 = function(a, b) {
                        __c.w(!0);
                        __c.w(!0);
                        __c.w(!0);
                        const {
                            ba: c,
                            a: d,
                            b: e
                        } = __c.kY(a), {
                            ba: f,
                            a: g,
                            b: h
                        } = __c.kY(b), k = (c + f) / 2;
                        var l = (Math.hypot(d, e) + Math.hypot(g, h)) / 2;
                        l = .5 * (1 - Math.sqrt(l ** 7 / (l ** 7 + 25 ** 7)));
                        var m =
                            d * (1 + l),
                            n = g * (1 + l),
                            p = Math.hypot(m, e),
                            q = Math.hypot(n, h);
                        l = (p + q) / 2;
                        var r = __c.js(180 * Math.atan2(e, m) / Math.PI);
                        const t = __c.js(180 * Math.atan2(h, n) / Math.PI);
                        m = 180 < Math.abs(r - t) ? (r + t + 360) / 2 : (r + t) / 2;
                        n = q - p;
                        p = 2 * Math.sqrt(p * q) * Math.sin((180 >= Math.abs(t - r) ? t - r : t <= r ? t - r + 360 : t - r - 360) / 2 * Math.PI / 180);
                        q = 1 + .045 * l;
                        r = 1 + .015 * l * (1 - .17 * Math.cos((m - 30) * Math.PI / 180) + .24 * Math.cos(2 * m * Math.PI / 180) + .32 * Math.cos((3 * m + 6) * Math.PI / 180) - .2 * Math.cos((4 * m - 63) * Math.PI / 180));
                        return 20 <= Math.sqrt(((f - c) / (1 + .015 * (k - 50) ** 2 / Math.sqrt(20 +
                            (k - 50) ** 2))) ** 2 + (n / (1 * q)) ** 2 + (p / (1 * r)) ** 2 + n / (1 * q) * (p / (1 * r)) * -(2 * Math.sqrt(l ** 7 / (l ** 7 + 25 ** 7))) * Math.sin(60 * Math.exp(-1 * ((m - 275) / 25) ** 2) * Math.PI / 180)) ? a : e5(b, f5)
                    },
                    h5 = function(a) {
                        switch (a.type) {
                            case "color":
                                return a.color;
                            case "gradient":
                                return a.jb.Wl[0].color;
                            default:
                                throw new D(a);
                        }
                    },
                    i5 = function(a, b) {
                        a = __c.Sj.create(__c.Sj.oa(a.text));
                        null != b && a.Cj(b);
                        return {
                            type: "text",
                            ME: 1,
                            text: __c.Sj.oa(a)
                        }
                    },
                    j5 = function(a) {
                        switch (a) {
                            case "l":
                                return 1;
                            case "r":
                                return 2;
                            default:
                                throw new D(a);
                        }
                    },
                    k5 = function(a) {
                        switch (a) {
                            case "l":
                                return "ltr";
                            case "r":
                                return "rtl";
                            default:
                                throw new D(a);
                        }
                    },
                    cHb = function(a) {
                        if (a) return {
                            fca: a.fca,
                            f9: a.f9,
                            g9: a.g9,
                            d9: a.d9,
                            h9: a.h9
                        }
                    },
                    dHb = function({
                        direction: a,
                        text: b,
                        background: c
                    }) {
                        return {
                            id: "header",
                            size: "auto",
                            fill: c,
                            padding: [20, 20, 16, 20],
                            content: i5(b, {
                                direction: k5(a),
                                color: e5(h5(c), f5)
                            })
                        }
                    },
                    gHb = function({
                        direction: a,
                        messages: b,
                        Toa: c,
                        defaultFontFamily: d,
                        percentage: e,
                        V: f,
                        state: g,
                        Nx: h,
                        Os: k
                    }) {
                        var l = h !== k,
                            m = e5(k, f5);
                        h = l ? h : m;
                        m = g5("#000000", k);
                        var n = g5(h, k);
                        l = eHb(g, 3 === g && l ? n : m, l);
                        c = {
                            id: "text",
                            placement: {
                                gridColumnStart: "2",
                                gridColumnEnd: "3",
                                gridRowStart: "2",
                                gridRowEnd: "3",
                                alignSelf: "center"
                            },
                            content: i5(c, {
                                direction: k5(a),
                                ...(3 === g && {
                                    color: e5(h, f5)
                                })
                            })
                        };
                        3 === g || 4 === g || 5 === g ? (b = (n = c5(b, "resultsPercentage")) ? NGb(n, [e], b.document.language) : __c.Db("sUWUOA", [e]), k = {
                                id: "percentage",
                                placement: {
                                    gridColumnStart: "4",
                                    gridColumnEnd: "5",
                                    gridRowStart: "2",
                                    gridRowEnd: "3",
                                    alignSelf: "center"
                                },
                                content: {
                                    type: "text",
                                    ME: 0,
                                    fontFamily: d,
                                    fontWeight: "bold",
                                    fontSize: fHb,
                                    text: b,
                                    textAlign: "end",
                                    direction: k5(a),
                                    color: 3 === g ? e5(h, f5) : e5(k, f5)
                                }
                            }) : k =
                            void 0;
                        k = {
                            type: "layout",
                            gridTemplateRows: ["10px", "1fr", "10px"],
                            gridTemplateColumns: ["10px", "1fr", "2px", "45px", "10px"],
                            fill: l,
                            cells: [c, k].filter(xb)
                        };
                        if (3 !== g && 4 !== g && 5 !== g) return k;
                        b = 0 < e;
                        const p = 100 > e;
                        n = (c = b && !p || !b && p) ? 1 : 2;
                        e = [b ? `${e}fr` : void 0, p ? `${100-e}fr` : void 0].filter(xb);
                        g = {
                            type: "color",
                            color: 3 === g ? h : m,
                            Ia: 3 === g ? 0 : .8
                        };
                        return c ? { ...k,
                            fill: b ? g : l
                        } : {
                            type: "layout",
                            direction: j5(a),
                            gridTemplateRows: ["1fr"],
                            gridTemplateColumns: e,
                            fill: l,
                            cells: [{
                                id: "bar",
                                V: f,
                                fill: g,
                                placement: {
                                    gridColumnStart: "1",
                                    gridColumnEnd: "2",
                                    gridRowStart: "1",
                                    gridRowEnd: "2"
                                },
                                content: bHb({
                                    direction: j5(a),
                                    content: {
                                        type: "text",
                                        ME: 0,
                                        text: "",
                                        fontFamily: d,
                                        fontSize: fHb,
                                        direction: k5(a)
                                    }
                                })
                            }, {
                                id: "optionTextWithPercentage",
                                placement: {
                                    gridColumnStart: "1",
                                    gridColumnEnd: `${n+1}`,
                                    gridRowStart: "1",
                                    gridRowEnd: "2"
                                },
                                content: k
                            }]
                        }
                    },
                    eHb = function(a, b, c) {
                        switch (a) {
                            case 0:
                                return {
                                    type: "color",
                                    color: b,
                                    Ia: .92
                                };
                            case 1:
                            case 5:
                                return {
                                    type: "color",
                                    color: b,
                                    Ia: .88
                                };
                            case 2:
                                return {
                                    type: "color",
                                    color: b,
                                    Ia: .74
                                };
                            case 3:
                                return {
                                    type: "color",
                                    color: b,
                                    Ia: c ? .5 : .92
                                };
                            case 4:
                                return {
                                    type: "color",
                                    color: b,
                                    Ia: .92
                                };
                            default:
                                throw new D(a);
                        }
                    },
                    hHb = function({
                        X0a: a,
                        VK: b,
                        LC: c,
                        direction: d,
                        options: e,
                        Je: f,
                        eD: g,
                        Vy: h,
                        Soa: k,
                        defaultFontFamily: l,
                        S_: m,
                        Nx: n,
                        Os: p,
                        messages: q,
                        Uca: r
                    }) {
                        return {
                            id: "field",
                            size: "1fr",
                            padding: [16, 20],
                            alignSelf: "center",
                            content: d5({
                                layout: "vertical",
                                direction: j5(d),
                                gap: 8,
                                cells: e.map(({
                                    value: t
                                }) => {
                                    var u = t.id === f;
                                    const v = t.id === g,
                                        x = t.id === h;
                                    u = m ? u ? 3 : v ? 5 : 4 : x ? 2 : v ? 1 : 0;
                                    return {
                                        id: t.id,
                                        size: "auto",
                                        alignSelf: "center",
                                        content: {
                                            ref: r.option,
                                            key: t.id,
                                            V: k,
                                            ck: () => {
                                                var y;
                                                return null === b || void 0 === b ?
                                                    void 0 : null === (y = b.fca) || void 0 === y ? void 0 : y.call(b, t.id)
                                            },
                                            onMouseEnter: () => {
                                                var y;
                                                return null === b || void 0 === b ? void 0 : null === (y = b.f9) || void 0 === y ? void 0 : y.call(b, t.id)
                                            },
                                            onMouseLeave: () => {
                                                var y;
                                                return null === b || void 0 === b ? void 0 : null === (y = b.g9) || void 0 === y ? void 0 : y.call(b, t.id)
                                            },
                                            onMouseDown: () => {
                                                var y;
                                                return null === b || void 0 === b ? void 0 : null === (y = b.d9) || void 0 === y ? void 0 : y.call(b, t.id)
                                            },
                                            onMouseUp: () => {
                                                var y;
                                                return null === b || void 0 === b ? void 0 : null === (y = b.h9) || void 0 === y ? void 0 : y.call(b, t.id)
                                            },
                                            ...gHb({
                                                messages: q,
                                                Toa: t.label,
                                                direction: d,
                                                defaultFontFamily: l,
                                                percentage: a.P1a(c, t.id),
                                                V: k,
                                                state: u,
                                                Nx: n,
                                                Os: p
                                            })
                                        }
                                    }
                                })
                            })
                        }
                    },
                    lHb = function(a) {
                        const b = a.status,
                            c = a.defaultFontFamily,
                            d = a.direction,
                            e = a.backgroundColor;
                        switch (b) {
                            case 0:
                                var f;
                                return {
                                    type: "text",
                                    ME: 1,
                                    text: l5(null !== (f = a.statusMessage) && void 0 !== f ? f : c5(a.messages, "live") || O("/iw6+Q"), c, d, e5(e, iHb), e5(e, f5))
                                };
                            case 1:
                                return {
                                    type: "text",
                                    ME: 1,
                                    text: l5(a.messages.loading(), c, d, e5(e, jHb), e5(e, f5))
                                };
                            case 2:
                                return {
                                    type: "text",
                                    ME: 1,
                                    text: l5(c5(a.messages, "submitting") || O("wutQEA"),
                                        c, d, e5(e, jHb), e5(e, f5))
                                };
                            case 3:
                                return {
                                    type: "text",
                                    ME: 1,
                                    text: l5(a.messages.offline(), c, d, e5(e, kHb), e5(e, f5))
                                };
                            default:
                                throw new D(b);
                        }
                    },
                    mHb = function({
                        direction: a,
                        messages: b,
                        defaultFontFamily: c,
                        C7a: d,
                        status: e,
                        backgroundColor: f
                    }) {
                        var g = c5(b, "live") || O("/iw6+Q");
                        const h = c5(b, "numVotes");
                        d = h ? NGb(h, [d], b.document.language) : __c.Db("6QpLYA", [d]);
                        return [{
                            id: "footer",
                            size: "auto",
                            padding: [0, 20, 20, 20],
                            content: lHb({
                                messages: b,
                                status: e,
                                statusMessage: `${g} | ${d}`,
                                defaultFontFamily: c,
                                backgroundColor: f,
                                direction: a
                            })
                        }]
                    },
                    nHb = function({
                        width: a,
                        height: b,
                        ge: c,
                        color: d,
                        e4a: e,
                        backgroundColor: f
                    }) {
                        return {
                            type: "shape",
                            width: a,
                            height: b,
                            Vca: {
                                width: 16,
                                height: 16
                            },
                            kb: [{
                                d: "M 8 16 C 12.4183 16 16 12.4183 16 8 C 16 3.5817 12.4183 0 8 0 C 3.5817 0 0 3.5817 0 8 C 0 12.4183 3.5817 16 8 16 Z",
                                stroke: {
                                    weight: c,
                                    color: d
                                },
                                fill: {
                                    type: "color",
                                    color: d
                                }
                            }, {
                                d: e ? "M11.9541 5.09249C11.5708 4.70916 10.9493 4.70916 10.5659 5.09249L6.84653 8.8119L5.44784 7.39414C5.23981 7.18328 4.97538 7.08048 4.70513 7.09454C4.44717 7.10796 4.22126 7.22537 4.05972 7.38474C3.89817 7.54411 3.77772 7.76841 3.76081 8.02616C3.74309 8.2962 3.8423 8.562 4.05032 8.77286L6.14306 10.8941C6.35108 11.105 6.61551 11.2078 6.88577 11.1937C7.14372 11.1803 7.36963 11.0629 7.53118 10.9035L7.53918 10.8955L11.9541 6.48064C12.3374 6.09731 12.3374 5.47582 11.9541 5.09249Z" : "M11.6813 5.85778C12.1063 5.43279 12.1063 4.74374 11.6813 4.31875C11.2564 3.89376 10.5673 3.89376 10.1423 4.31875L8.00005 6.46102L5.85777 4.31874C5.43279 3.89375 4.74374 3.89375 4.31874 4.31874C3.89375 4.74374 3.89375 5.43278 4.31874 5.85778L6.46101 8.00005L4.31883 10.1422C3.89384 10.5672 3.89384 11.2563 4.31883 11.6813C4.74383 12.1063 5.43288 12.1063 5.85786 11.6813L8.00005 9.53908L10.1422 11.6813C10.5672 12.1062 11.2563 12.1062 11.6813 11.6813C12.1062 11.2563 12.1062 10.5672 11.6813 10.1422L9.53908 8.00005L11.6813 5.85778Z",
                                fill: {
                                    type: "color",
                                    color: f
                                }
                            }]
                        }
                    },
                    qHb = function({
                        direction: a,
                        Toa: b,
                        Os: c,
                        state: d
                    }) {
                        const e = g5("#000000", c);
                        return {
                            type: "layout",
                            gridTemplateRows: ["10px", "1fr", "10px"],
                            gridTemplateColumns: ["10px", "1fr", "2px", "18px", "10px"],
                            fill: oHb(d, e),
                            cells: [{
                                id: "text",
                                placement: {
                                    alignSelf: "center",
                                    gridColumnStart: "2",
                                    gridColumnEnd: "3",
                                    gridRowStart: "2",
                                    gridRowEnd: "3"
                                },
                                content: (() => {
                                    switch (d) {
                                        case 5:
                                            return i5(b, {
                                                direction: k5(a),
                                                color: "#00873d"
                                            });
                                        case 6:
                                            return i5(b, {
                                                direction: k5(a),
                                                color: "#c8001e"
                                            });
                                        case 4:
                                            return i5(b, {
                                                direction: k5(a),
                                                color: e5(c, pHb)
                                            });
                                        default:
                                            return i5(b, {
                                                direction: k5(a)
                                            })
                                    }
                                })()
                            }, 5 === d || 6 === d ? {
                                id: "validation",
                                placement: {
                                    gridColumnStart: "4",
                                    gridColumnEnd: "5",
                                    gridRowStart: "2",
                                    gridRowEnd: "3",
                                    alignSelf: "center"
                                },
                                content: nHb({
                                    width: 18,
                                    height: 18,
                                    ge: 1.6,
                                    e4a: 5 === d,
                                    color: 5 === d ? "#00873d" : "#c8001e",
                                    backgroundColor: "#ffffff"
                                })
                            } : void 0].filter(xb)
                        }
                    },
                    oHb = function(a, b) {
                        switch (a) {
                            case 0:
                                return {
                                    type: "color",
                                    color: b,
                                    Ia: .92
                                };
                            case 1:
                                return {
                                    type: "color",
                                    color: b,
                                    Ia: .74
                                };
                            case 2:
                                return {
                                    type: "color",
                                    color: b,
                                    Ia: .88
                                };
                            case 3:
                                return {
                                    type: "color",
                                    color: b,
                                    Ia: .74
                                };
                            case 4:
                                return {
                                    type: "color",
                                    color: b,
                                    Ia: .9
                                };
                            case 5:
                                return {
                                    type: "color",
                                    color: "#e3fff0",
                                    Ia: 0
                                };
                            case 6:
                                return {
                                    type: "color",
                                    color: "#ffd9df",
                                    Ia: 0
                                };
                            default:
                                throw new D(a);
                        }
                    },
                    rHb = function({
                        VK: a,
                        direction: b,
                        options: c,
                        N4: d,
                        Je: e,
                        eD: f,
                        Vy: g,
                        Soa: h,
                        Os: k,
                        S_: l,
                        Uca: m,
                        context: n
                    }) {
                        return {
                            id: "field",
                            size: "1fr",
                            padding: [16, 20, 10, 20],
                            alignSelf: "center",
                            content: d5({
                                layout: "vertical",
                                direction: j5(b),
                                gap: 8,
                                cells: c.map(({
                                    value: p
                                }) => {
                                    const q = p.id === e,
                                        r = YGb(d, p.id),
                                        t = p.id === f,
                                        u = p.id === g;
                                    return {
                                        id: p.id,
                                        size: "auto",
                                        alignSelf: "center",
                                        content: {
                                            ref: m.option,
                                            key: p.id,
                                            V: h,
                                            ck: () => {
                                                var v;
                                                return null === a || void 0 === a ? void 0 : null === (v = a.fca) || void 0 === v ? void 0 : v.call(a, p.id)
                                            },
                                            onMouseEnter: () => {
                                                var v;
                                                return null === a || void 0 === a ? void 0 : null === (v = a.f9) || void 0 === v ? void 0 : v.call(a, p.id)
                                            },
                                            onMouseLeave: () => {
                                                var v;
                                                return null === a || void 0 === a ? void 0 : null === (v = a.g9) || void 0 === v ? void 0 : v.call(a, p.id)
                                            },
                                            onMouseDown: () => {
                                                var v;
                                                return null === a || void 0 === a ? void 0 : null === (v = a.d9) || void 0 === v ? void 0 : v.call(a, p.id)
                                            },
                                            onMouseUp: () => {
                                                var v;
                                                return null === a || void 0 === a ? void 0 : null === (v = a.h9) || void 0 === v ? void 0 : v.call(a, p.id)
                                            },
                                            ...qHb({
                                                direction: b,
                                                Toa: p.label,
                                                Os: k,
                                                state: l && "edit" !== n.mode ? r ? 5 : q ? 6 : 4 : "edit" === n.mode ? r ? 5 : 4 : q ? 1 : u ? 3 : t ? 2 : 0
                                            })
                                        }
                                    }
                                })
                            })
                        }
                    },
                    sHb = function({
                        direction: a,
                        text: b,
                        KVa: c,
                        wO: d,
                        VK: e
                    }) {
                        const f = f5.includes(c),
                            {
                                h: g,
                                s: h,
                                ba: k
                            } = __c.hs(c);
                        var l = new __c.ds(g, h, 10 > k ? k + 6 : k - 6);
                        l = __c.jY(l);
                        var m = new __c.ds(g, h, 10 > k ? k + 10 : k - 10);
                        m = __c.jY(m);
                        return {
                            id: "submit",
                            size: "auto",
                            padding: [0, 20],
                            content: bHb({
                                direction: j5(a),
                                ck: null === e || void 0 === e ? void 0 : e.submit,
                                onMouseEnter: null === e || void 0 === e ? void 0 : e.una,
                                onMouseLeave: null === e || void 0 === e ? void 0 : e.vna,
                                onMouseDown: null === e || void 0 === e ? void 0 : e.tna,
                                onMouseUp: null === e || void 0 === e ? void 0 : e.wna,
                                background: {
                                    type: "color",
                                    color: 2 === d ? m : 1 === d ? l : c,
                                    Ia: (null === e || void 0 === e ? 0 : e.submit) ? f ? .1 : void 0 : .6
                                },
                                V: 24,
                                padding: 12,
                                content: i5(b, {
                                    direction: k5(a)
                                })
                            })
                        }
                    },
                    uHb = function({
                        VK: a,
                        direction: b,
                        messages: c,
                        defaultFontFamily: d,
                        Zv: e,
                        Nx: f,
                        status: g,
                        f4a: h,
                        backgroundColor: k,
                        S_: l,
                        $M: m
                    }) {
                        const n = e5(k, f5);
                        return l ? [{
                            id: "quiz_results_footer",
                            size: "auto",
                            padding: [20, 20, 24, 20],
                            content: d5({
                                layout: "vertical",
                                direction: j5(b),
                                cells: [{
                                    id: "quiz_result",
                                    size: "auto",
                                    content: {
                                        type: "text",
                                        ME: 0,
                                        fontFamily: d,
                                        text: h ? c5(c, "correctLabel") || O("i3mNPA") : c5(c, "incorrectLabel") || O("As1GTA"),
                                        fontSize: tHb,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                        direction: k5(b),
                                        color: e5(k, f5)
                                    }
                                }, {
                                    id: "quiz_message",
                                    size: "auto",
                                    content: {
                                        type: "text",
                                        ME: 0,
                                        fontFamily: d,
                                        text: c5(c, "responseSaved") || O("xSH8Og"),
                                        fontSize: m5,
                                        Ia: .2,
                                        textAlign: "center",
                                        direction: k5(b),
                                        color: n
                                    }
                                }]
                            })
                        }] : (f = f ===
                            k ? e5(f, f5) : f, [sHb({
                                direction: b,
                                text: e,
                                KVa: f,
                                wO: m,
                                VK: a
                            }), {
                                id: "quiz_status",
                                size: "auto",
                                padding: [8, 20, 10, 20],
                                content: lHb({
                                    status: g,
                                    defaultFontFamily: d,
                                    messages: c,
                                    direction: b,
                                    backgroundColor: k
                                })
                            }])
                    },
                    vHb = class {
                        constructor() {
                            this.type = "layout"
                        }
                    },
                    UGb = {
                        Ge: "form_widget_interacted",
                        wg(a) {
                            return __c.TB({
                                form_id: a.Oja,
                                form_type: a.Y0a,
                                action_group: a.vF,
                                action: a.action,
                                location: a.location,
                                toggle_value: a.PE,
                                editing_context: null == a.Yd ? void 0 : __c.UB(a.Yd),
                                performance_context: null == a.cg ? void 0 : __c.CE(a.cg)
                            })
                        }
                    },
                    n5 =
                    __webpack_require__(519427),
                    wHb = n5.aD,
                    U4 = n5.Fl,
                    xHb = n5.U5,
                    a5 = n5.z;
                var W4 = class {
                        static j(a) {
                            __c.P(a, {
                                tAa: U4
                            })
                        }
                        get tAa() {
                            const a = [];
                            for (const b of this.list.value) {
                                const c = M4(this, b);
                                if (void 0 === c) throw new PGb("undefined value found when deserializing list.");
                                a.push(c)
                            }
                            return a
                        }
                        count() {
                            return this.list.value.count()
                        }
                        toArray() {
                            return this.tAa.map(({
                                value: a
                            }) => a)
                        }
                        first(a) {
                            const b = this.list.value.first(a ? c => a(M4(this, c)) : void 0);
                            if (null != b) return M4(this, b)
                        }
                        last(a) {
                            const b = this.list.value.last(a ? c => a(M4(this, c)) : void 0);
                            if (null != b) return M4(this, b)
                        }
                        next(a, b) {
                            var c =
                                b ? d => b(M4(this, d)) : void 0;
                            a = N4(this, a);
                            c = this.list.value.next(a, c);
                            if (null != c) return M4(this, c)
                        }
                        vc(a, b) {
                            var c = b ? d => b(M4(this, d)) : void 0;
                            a = N4(this, a);
                            c = this.list.value.vc(a, c);
                            if (null != c) return M4(this, c)
                        }
                        map(a) {
                            return this.list.value.map((b, c) => a(M4(this, b), c))
                        }
                        filter(a) {
                            return this.list.value.filter((b, c) => a(M4(this, b), c)).map(b => M4(this, b))
                        }
                        forEach(a) {
                            return this.list.value.forEach((b, c) => a(M4(this, b), c))
                        }
                        some(a) {
                            return this.list.value.some(b => a(M4(this, b)))
                        }
                        constructor(a, b) {
                            W4.j(this);
                            this.Yx =
                                b;
                            this.UOa = new WeakMap;
                            this.NOa = new WeakMap;
                            __c.B("list" === a.type);
                            this.list = a
                        }
                    },
                    SGb = class extends W4 {
                        replace(a, b) {
                            a = N4(this, a);
                            b = this.list.value.replace(a, this.Yx.Hj(b));
                            return M4(this, b)
                        }
                        QK(a, b) {
                            a = null != a ? N4(this, a) : void 0;
                            b = this.list.value.QK(a, this.Yx.Hj(b));
                            return M4(this, b)
                        }
                        RK(a, b) {
                            a = null != a ? N4(this, a) : void 0;
                            return this.list.value.RK(a, b.map(c => this.Yx.Hj(c))).map(c => M4(this, c))
                        }
                        insertBefore(a, b) {
                            a = null != a ? N4(this, a) : void 0;
                            b = this.list.value.insertBefore(a, this.Yx.Hj(b));
                            return M4(this, b)
                        }
                        append(a) {
                            a =
                                this.list.value.append(this.Yx.Hj(a));
                            return M4(this, a)
                        }
                        prepend(a) {
                            a = this.list.value.prepend(this.Yx.Hj(a));
                            return M4(this, a)
                        }
                        delete(a) {
                            a = N4(this, a);
                            this.list.value.delete(a)
                        }
                    };
                var R4 = class extends Error {
                        constructor(a) {
                            super(a);
                            this.name = "SchemaError"
                        }
                    },
                    PGb = class extends R4 {
                        constructor(a) {
                            super(`ListError: ${a}`)
                        }
                    },
                    O4 = class extends R4 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of widget data`)
                        }
                    },
                    P4 = class extends R4 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of widget state`)
                        }
                    },
                    QGb = class extends R4 {
                        constructor(a) {
                            super(`Error transforming ${a} into type ${"double"} of document state`)
                        }
                    };
                var yHb = V4({
                        type: ["t", S4(["text2"], "text2"), "readonly"],
                        text: ["te", function() {
                            const a = b => {
                                if ("text2" !== (null === b || void 0 === b ? void 0 : b.type)) throw new O4("text2", b);
                                return b.value
                            };
                            return {
                                Hj: b => ({
                                    type: "text2",
                                    value: b
                                }),
                                er: b => {
                                    if ("text2" !== (null === b || void 0 === b ? void 0 : b.type)) throw new P4("text2", b);
                                    return b.value
                                },
                                dr: a,
                                ct: a
                            }
                        }()]
                    }),
                    o5 = Y4({
                        text2: yHb
                    }, a => a.type),
                    zHb = V4({
                        id: ["i", Q4("")],
                        label: ["l", o5]
                    }),
                    AHb = X4(zHb),
                    BHb = X4(Q4("")),
                    CHb = V4({
                        type: ["t", S4(["select"], "select"), "readonly"],
                        id: ["i", Q4("")],
                        label: ["l",
                            o5
                        ],
                        options: ["o", AHb],
                        V: ["c", T4(0)],
                        N4: ["co", BHb]
                    }),
                    DHb = Y4({
                        select: CHb
                    }, a => a.type),
                    EHb = X4(DHb),
                    FHb = Y4({
                        select: CHb
                    }, a => a.type),
                    GHb = X4(FHb),
                    HHb = V4({
                        label: ["l", o5]
                    }),
                    IHb = V4({}),
                    JHb = S4(["l", "r"], "l"),
                    KHb = V4({
                        minHeight: ["mh", T4(1)],
                        minWidth: ["mw", T4(1)],
                        id: ["i", Q4()],
                        KE: ["s", Q4()],
                        direction: ["r", JHb],
                        defaultFontFamily: ["d", Q4("")],
                        Ox: ["pf", RGb()],
                        Zx: ["sf", RGb()],
                        border: ["b", function() {
                            const a = b => {
                                if ("stroke" !== (null === b || void 0 === b ? void 0 : b.type)) throw new O4("stroke", b);
                                return b.value
                            };
                            return {
                                Hj: b => ({
                                    type: "stroke",
                                    value: b
                                }),
                                er: b => {
                                    if ("stroke" !== (null === b || void 0 === b ? void 0 : b.type)) throw new P4("stroke", b);
                                    return b.value
                                },
                                dr: a,
                                ct: a
                            }
                        }()],
                        V: ["c", T4(0)],
                        header: ["h", function(a) {
                            return {
                                Hj: b => null == b ? b : a.Hj(b),
                                er: b => null == b ? b : a.er(b),
                                dr: b => null == b ? b : a.dr(b),
                                ct: b => null == b ? b : a.ct(b)
                            }
                        }(IHb)],
                        Vka: ["hh", function(a) {
                            const b = (c, d) => {
                                if (null == c) return a;
                                if ("boolean" !== (null === c || void 0 === c ? void 0 : c.type)) throw "toWidgetData" === d ? new O4("boolean", c) : new P4("boolean", c);
                                return c.value
                            };
                            return {
                                Hj: c => ({
                                    type: "boolean",
                                    value: c
                                }),
                                er: c => b(c, "toWidgetState"),
                                dr: c => b(c, "toWidgetData"),
                                ct: c => b(c, "toWidgetData")
                            }
                        }(!1)]
                    }),
                    LHb = KHb.Cc({
                        type: ["t", S4(["quiz"], "quiz"), "readonly"],
                        fields: ["f", EHb],
                        footer: ["fo", HHb]
                    }),
                    MHb = KHb.Cc({
                        type: ["t", S4(["poll"], "poll"), "readonly"],
                        fields: ["f", GHb]
                    });
                S4(["poll", "quiz"], "quiz");
                var NHb = Y4({
                        quiz: LHb,
                        poll: MHb
                    }, a => a.type),
                    Z4 = {
                        Je: void 0,
                        rI: void 0,
                        Npa: void 0,
                        results: {
                            fields: new Map
                        }
                    },
                    OHb = {
                        zy: new Map,
                        $M: 0,
                        eD: void 0,
                        Vy: void 0,
                        bbb: !1,
                        status: 1,
                        Jka: !1,
                        Tjb: !1
                    };
                var WGb = Symbol("UNABLE_TO_SUBMIT");
                var ZGb = {
                        resultsPercentage: 0,
                        incorrectLabel: 1,
                        responseSaved: 2,
                        submitting: 3,
                        loading: 4,
                        numVotes: 5,
                        offline: 6,
                        correctLabel: 7,
                        live: 8
                    },
                    PHb = class {
                        async jla() {
                            this.sta = await $Gb()
                        }
                        offline() {
                            return c5(this, "offline") || O("nFbxIQ")
                        }
                        loading() {
                            return c5(this, "loading") || O("2Q9Q+A")
                        }
                        constructor(a) {
                            this.document = a;
                            this.jla()
                        }
                    };
                var QHb = class {
                    static j(a) {
                        __c.P(a, {
                            border: U4
                        })
                    }
                    get border() {
                        const a = this.qw.gg;
                        a.border.weight && !a.border.color && this.H && this.H.error("Form widget borders cannot have weight without a color");
                        return {
                            weight: a.border.weight,
                            color: a.border.color,
                            zLa: a.V
                        }
                    }
                    constructor(a, b) {
                        QHb.j(this);
                        this.qw = a;
                        this.H = b
                    }
                };
                var RHb = class {
                    static j(a) {
                        __c.P(a, {
                            Ox: U4,
                            Zx: U4,
                            Nx: U4,
                            Os: U4
                        })
                    }
                    get Ox() {
                        const a = this.qw.gg.Ox.color,
                            b = this.qw.gg.Ox.jb;
                        if (a) return {
                            type: "color",
                            color: a
                        };
                        if (b.ref) return {
                            type: "gradient",
                            jb: b.ref
                        }
                    }
                    get Zx() {
                        const a = this.qw.gg.Zx.color,
                            b = this.qw.gg.Zx.jb;
                        if (a) return {
                            type: "color",
                            color: a
                        };
                        if (b.ref) return {
                            type: "gradient",
                            jb: b.ref
                        }
                    }
                    get Nx() {
                        if (!this.Ox) return "#000000";
                        switch (this.Ox.type) {
                            case "color":
                                return this.Ox.color;
                            case "gradient":
                                return this.Ox.jb.Wl[0].color;
                            default:
                                throw new D(this.Ox);
                        }
                    }
                    get Os() {
                        if (!this.Zx) return "#000000";
                        switch (this.Zx.type) {
                            case "color":
                                return this.Zx.color;
                            case "gradient":
                                return this.Zx.jb.Wl[0].color;
                            default:
                                throw new D(this.Zx);
                        }
                    }
                    constructor(a) {
                        RHb.j(this);
                        this.qw = a
                    }
                };
                var f5 = ["#000000", "#ffffff"];
                var fHb = 9 * __c.CU,
                    pHb = ["#cccccc", "#333333"],
                    tHb = 14 * __c.CU,
                    m5 = 9 * __c.CU,
                    iHb = ["#00d200", "#00ed00"],
                    jHb = ["#ffae00", "#ffc654"],
                    kHb = ["#545454", "#c8c8c8"];
                var l5 = (a, b, c, d, e) => __c.Sj.Mc().attrs({
                    "font-size": m5,
                    leading: void 0,
                    "text-align": "center",
                    direction: k5(c),
                    color: d
                }).tc("\u25cf ").attrs({
                    "font-family": b,
                    "font-size": m5,
                    color: e,
                    "font-kerning": "normal",
                    "font-feature-liga": "on",
                    "font-feature-clig": "on",
                    "font-feature-calt": "on"
                }).tc(a).tc("\n").build();
                __c.NGa = {
                    PXa: function(a, b, c, d, e, f, g, h, k) {
                        g.Bg("forms");
                        const {
                            Fob: l
                        } = null !== d && void 0 !== d ? d : {}, m = h.Kw("ui.rendering.form"), n = {
                            root: new vHb,
                            option: new vHb
                        }, p = new PHb(b);
                        return {
                            ola: OHb,
                            Yx: NHb,
                            bZ: ({
                                qw: q
                            }) => {
                                if (l && a) {
                                    var r = q.gg.KE,
                                        t = q.gg.type,
                                        u = l.get({
                                            Oja: q.gg.id,
                                            zf: a,
                                            b6: c
                                        }),
                                        v;
                                    "poll" === t && (v = u.Kqb({
                                        $ob: () => q.gg.KE
                                    }).subscribe(({
                                        results: y,
                                        KE: z
                                    }) => {
                                        a5(() => {
                                            const A = new Map(q.Mi.zy);
                                            var F;
                                            A.set(z, { ...(null !== (F = A.get(z)) && void 0 !== F ? F : Z4),
                                                results: y
                                            });
                                            q.Sl({
                                                zy: A
                                            })
                                        })
                                    }));
                                    u.qob({
                                        KE: r
                                    }).then(wHb(y => {
                                        var z;
                                        if (y.ok &&
                                            y.value) {
                                            y = y.value;
                                            var A, F = null !== (A = null === (z = q.gg.fields.first()) || void 0 === z ? void 0 : z.value.id) && void 0 !== A ? A : "",
                                                G;
                                            ({
                                                Je: z
                                            } = null !== (G = y.Lib.get(F)) && void 0 !== G ? G : {});
                                            G = new Map(q.Mi.zy);
                                            var I;
                                            G.set(r, { ...(null !== (I = G.get(r)) && void 0 !== I ? I : Z4),
                                                Je: z,
                                                rI: z
                                            });
                                            q.Sl({
                                                zy: G
                                            })
                                        }
                                    }));
                                    var x = xHb(() => 2 === (null === k || void 0 === k ? void 0 : k.status), wHb(y => {
                                        q.Sl({ ...q.Mi,
                                            status: y ? 3 : 0
                                        })
                                    }), {
                                        fireImmediately: !0
                                    });
                                    return () => {
                                        null === v || void 0 === v ? void 0 : v.unsubscribe();
                                        x()
                                    }
                                }
                            },
                            render: (q, r) => {
                                var t = TGb(q);
                                if (l && a) {
                                    var u = l.get({
                                        Oja: q.gg.id,
                                        zf: a,
                                        b6: c
                                    });
                                    u = XGb(q, t, u, e, f, m)
                                }
                                a: {
                                    var v = q.gg,
                                        x = new RHb(q),
                                        y = new QHb(q);
                                    switch (v.type) {
                                        case "poll":
                                            var z;
                                            r = q.gg;
                                            v = q.Mi;
                                            var A = x.Ox;
                                            x = x.Zx;
                                            y = y.border;
                                            var F = y.zLa,
                                                G = r.direction,
                                                I = null === (z = r.fields.first()) || void 0 === z ? void 0 : z.value;
                                            if (I && A && x) {
                                                z = h5(A);
                                                var J = h5(x),
                                                    K = t.jka(),
                                                    L = t.tka();
                                                q = {
                                                    minWidth: r.minWidth,
                                                    minHeight: r.minHeight,
                                                    ...d5({
                                                        layout: "vertical",
                                                        direction: j5(G),
                                                        background: x,
                                                        V: F,
                                                        border: y,
                                                        cells: [r.Vka ? void 0 : dHb({
                                                            direction: G,
                                                            text: I.label,
                                                            background: A
                                                        }), hHb({
                                                            X0a: t,
                                                            VK: cHb(u),
                                                            options: I.options,
                                                            eD: v.eD,
                                                            Vy: v.Vy,
                                                            Je: L.Je,
                                                            Soa: I.V,
                                                            Nx: z,
                                                            Os: J,
                                                            defaultFontFamily: r.defaultFontFamily,
                                                            direction: G,
                                                            S_: K,
                                                            LC: I.id,
                                                            messages: p,
                                                            Uca: n
                                                        }), ...mHb({
                                                            direction: G,
                                                            messages: p,
                                                            defaultFontFamily: r.defaultFontFamily,
                                                            C7a: t.g2a(I.id),
                                                            status: q.Mi.status,
                                                            backgroundColor: J
                                                        })].filter(xb)
                                                    }),
                                                    ref: n.root
                                                }
                                            } else q = { ...d5({
                                                    layout: "vertical",
                                                    direction: j5(G),
                                                    background: {
                                                        type: "color",
                                                        color: "#ffffff"
                                                    },
                                                    cells: []
                                                }),
                                                minWidth: r.minWidth,
                                                minHeight: r.minHeight
                                            };
                                            break a;
                                        case "quiz":
                                            z = q.gg;
                                            v = q.Mi;
                                            K = x.Ox;
                                            A = x.Zx;
                                            y = y.border;
                                            x = y.zLa;
                                            F = z.direction;
                                            var Q = null ===
                                                (G = z.fields.first()) || void 0 === G ? void 0 : G.value;
                                            if (Q && K && A) {
                                                G = h5(K);
                                                I = h5(A);
                                                J = t.jka();
                                                var S = t.tka();
                                                t = !!S.Je && YGb(Q.N4, S.Je);
                                                L = z.minWidth;
                                                var X = z.minHeight,
                                                    aa = j5(F);
                                                K = z.Vka ? void 0 : dHb({
                                                    direction: F,
                                                    text: Q.label,
                                                    background: K
                                                });
                                                Q = rHb({
                                                    VK: cHb(u),
                                                    direction: F,
                                                    options: Q.options,
                                                    N4: Q.N4,
                                                    eD: v.eD,
                                                    Vy: v.Vy,
                                                    Je: S.Je,
                                                    Soa: Q.V,
                                                    Os: I,
                                                    S_: J,
                                                    Uca: n,
                                                    context: r
                                                });
                                                u = u ? {
                                                    submit: u.submit,
                                                    una: u.una,
                                                    vna: u.vna,
                                                    tna: u.tna,
                                                    wna: u.wna
                                                } : void 0;
                                                q = {
                                                    minWidth: L,
                                                    minHeight: X,
                                                    ...d5({
                                                        layout: "vertical",
                                                        direction: aa,
                                                        background: A,
                                                        V: x,
                                                        border: y,
                                                        cells: [K,
                                                            Q, ...uHb({
                                                                VK: u,
                                                                direction: F,
                                                                messages: p,
                                                                defaultFontFamily: z.defaultFontFamily,
                                                                Zv: z.footer.label,
                                                                Nx: G,
                                                                status: q.Mi.status,
                                                                S_: J && "edit" !== r.mode,
                                                                f4a: t,
                                                                backgroundColor: I,
                                                                $M: v.$M
                                                            })
                                                        ].filter(xb)
                                                    }),
                                                    ref: n.root
                                                }
                                            } else q = { ...d5({
                                                    layout: "vertical",
                                                    direction: j5(F),
                                                    background: {
                                                        type: "color",
                                                        color: "#ffffff"
                                                    },
                                                    cells: []
                                                }),
                                                minWidth: z.minWidth,
                                                minHeight: z.minHeight
                                            };
                                            break a;
                                        default:
                                            throw new D(v);
                                    }
                                }
                                return q
                            },
                            Uca: n
                        }
                    }
                };
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/760ac6b632684b20.js.map