(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [9222], {

        /***/
        131756: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(777075);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var D = __c.D;
                var B = __c.B;
                var AKb = function(a, b, c, d) {
                        c = new zKb(c, d);
                        B(1 === a.count(), "Only single widget root element is supported");
                        a = a.first();
                        B(null != a && "layout" === a.type, `Unexpected widget root found: ${null===a||void 0===a?void 0:a.type}`);
                        c.Xca(a, b)
                    },
                    CKb = function(a) {
                        return { ...__c.Vv,
                            ...o6,
                            top: 0,
                            left: 0,
                            width: a.width,
                            height: a.height,
                            viewBox: {
                                top: 0,
                                left: 0,
                                width: a.Vca.width,
                                height: a.Vca.height
                            },
                            kb: a.kb.map(BKb)
                        }
                    },
                    DKb = function(a) {
                        switch (a.ME) {
                            case 0:
                                var b = __c.Sj.Mc().attrs({
                                    "font-size": a.fontSize,
                                    leading: a.lineHeight ? 1E3 * a.lineHeight : void 0,
                                    "text-align": a.textAlign || "start",
                                    "font-weight": a.fontWeight,
                                    "font-family": a.fontFamily,
                                    "font-kerning": "normal",
                                    "font-feature-liga": "on",
                                    "font-feature-clig": "on",
                                    "font-feature-calt": "on",
                                    direction: a.direction
                                });
                                a.color && b.Ch("color", a.color);
                                b = b.tc(a.text.endsWith("\n") ? a.text : `${a.text}\n`).build();
                                var c;
                                return { ...__c.SL,
                                    ...p6,
                                    ...o6,
                                    Ia: null !== (c = a.Ia) && void 0 !== c ? c : 0,
                                    text: b,
                                    Mg: 2
                                };
                            case 1:
                                return b = a.text, { ...__c.SL,
                                    ...p6,
                                    ...o6,
                                    text: b,
                                    Mg: 2
                                };
                            default:
                                throw new D(a);
                        }
                    },
                    t6 = function({
                        content: a,
                        fill: b,
                        border: c,
                        V: d
                    }) {
                        b = { ...__c.v4a,
                            fill: q6(b),
                            border: r6(c),
                            V: s6(d)
                        };
                        switch (a.type) {
                            case "shape":
                                return { ...b,
                                    element: CKb(a)
                                };
                            case "text":
                                return { ...b,
                                    element: DKb(a)
                                };
                            case "layout":
                                return { ...b,
                                    element: EKb(a)
                                };
                            default:
                                throw new D(a);
                        }
                    },
                    EKb = function({
                        cells: a,
                        border: b,
                        fill: c,
                        V: d,
                        gridTemplateColumns: e,
                        gridTemplateRows: f,
                        columnGap: g,
                        rowGap: h
                    }) {
                        return { ...__c.w4a,
                            ...p6,
                            ...o6,
                            F: p6.width,
                            P: p6.height,
                            fill: q6(c),
                            border: r6(b),
                            direction: 1,
                            V: s6(d),
                            cells: new Map(a.map(k => [k.id, t6(k)])),
                            behavior: {
                                rules: [{
                                    kg: void 0,
                                    grid: {
                                        gridTemplateColumns: e,
                                        gridTemplateRows: f,
                                        columnGap: null !== g && void 0 !== g ? g : 0,
                                        rowGap: null !== h && void 0 !== h ? h : 0,
                                        zg: FKb(a)
                                    }
                                }]
                            },
                            vf: void 0
                        }
                    },
                    FKb = function(a) {
                        return new Map(a.map(b => [b.id, GKb(b)]))
                    },
                    GKb = function(a) {
                        const b = a.placement.padding;
                        return { ...__c.nva,
                            ...a.placement,
                            alignSelf: "center",
                            padding: { ...__c.BR,
                                ...(null != b ? "number" === typeof b ? {
                                    all: b
                                } : b : {})
                            }
                        }
                    },
                    r6 = function(a) {
                        var b;
                        const c = null !== (b = null === a || void 0 === a ? void 0 : a.color) && void 0 !== b ? b : "#000000";
                        var d;
                        return { ...__c.wF,
                            all: a ? { ...__c.rR,
                                weight: null !== (d = a.weight) &&
                                    void 0 !== d ? d : 1,
                                color: c,
                                df: !0
                            } : void 0
                        }
                    },
                    s6 = function(a) {
                        return { ...__c.AR,
                            ...(null != a ? "number" === typeof a ? {
                                all: a
                            } : a : {})
                        }
                    },
                    BKb = function(a) {
                        return { ...__c.Wv,
                            ...a,
                            fill: q6(a.fill),
                            stroke: HKb(a.stroke)
                        }
                    },
                    HKb = function(a) {
                        return a ? { ...__c.rR,
                            color: a.color,
                            weight: a.weight
                        } : void 0
                    },
                    q6 = function(a) {
                        var b;
                        const c = { ...__c.Yv,
                            Ia: null !== (b = null === a || void 0 === a ? void 0 : a.Ia) && void 0 !== b ? b : 0
                        };
                        switch (null === a || void 0 === a ? void 0 : a.type) {
                            case "color":
                                return { ...c,
                                    color: a.color
                                };
                            case "gradient":
                                return { ...c,
                                    jb: a.jb
                                };
                            case void 0:
                                return c;
                            default:
                                throw new D(a);
                        }
                    },
                    NKb = function(a, b) {
                        const c = new Map(b.cells.map(e => [e.id, e]));
                        IKb(a.cells, c, (e, f) => {
                            let g = !1;
                            JKb(e.element, f.content, () => {
                                a.cells.delete(f.id);
                                a.cells.set(f.id, t6(f));
                                g = !0
                            });
                            g || (u6(e.fill, f.fill), KKb(e.border, f.border), LKb(e.V, f.V))
                        }, e => t6(e));
                        MKb(a.behavior, b, c);
                        u6(a.fill, b.fill);
                        LKb(a.V, b.V);
                        KKb(a.border, b.border);
                        var d;
                        a.Ia = null !== (d = b.Ia) && void 0 !== d ? d : 0
                    },
                    MKb = function(a, b, c) {
                        v6(a.rules, [b], d => {
                            OKb(d.grid.gridTemplateColumns, b.gridTemplateColumns) || (d.grid.gridTemplateColumns =
                                b.gridTemplateColumns);
                            OKb(d.grid.gridTemplateRows, b.gridTemplateRows) || (d.grid.gridTemplateRows = b.gridTemplateRows);
                            var e;
                            d.grid.columnGap = null !== (e = b.columnGap) && void 0 !== e ? e : 0;
                            var f;
                            d.grid.rowGap = null !== (f = b.rowGap) && void 0 !== f ? f : 0;
                            IKb(d.grid.zg, c, (g, h) => {
                                const k = h.placement.padding,
                                    l = h.placement.gridColumnEnd,
                                    m = h.placement.gridRowStart,
                                    n = h.placement.gridRowEnd,
                                    p = h.placement.alignSelf;
                                g.gridColumnStart = h.placement.gridColumnStart;
                                g.gridColumnEnd = l;
                                g.gridRowStart = m;
                                g.gridRowEnd = n;
                                "number" === typeof k &&
                                    g.padding.all !== k ? g.padding.all = k : "number" !== typeof k && (g.padding.va = null === k || void 0 === k ? void 0 : k.va, g.padding.Ea = null === k || void 0 === k ? void 0 : k.Ea, g.padding.ra = null === k || void 0 === k ? void 0 : k.ra, g.padding.Ka = null === k || void 0 === k ? void 0 : k.Ka);
                                g.alignSelf = p
                            }, g => GKb(g))
                        }, d => {
                            var e, f;
                            return {
                                kg: void 0,
                                grid: {
                                    gridTemplateColumns: b.gridTemplateColumns,
                                    gridTemplateRows: b.gridTemplateRows,
                                    columnGap: null !== (e = b.columnGap) && void 0 !== e ? e : 0,
                                    rowGap: null !== (f = b.rowGap) && void 0 !== f ? f : 0,
                                    zg: FKb(d.cells)
                                }
                            }
                        })
                    },
                    PKb = function(a,
                        b) {
                        v6(a.kb, b.kb, (e, f) => {
                            e.d = f.d;
                            u6(e.fill, f.fill);
                            e.stroke.ref && f.stroke ? (e = e.stroke.ref, f = f.stroke, e.color = f.color, e.weight = f.weight) : e.stroke.set(HKb(f.stroke))
                        }, e => BKb(e));
                        const {
                            viewBox: c,
                            width: d
                        } = CKb(b);
                        a.width = d;
                        __c.Wt(a.viewBox).equals(__c.Wt(c)) || (a.viewBox = c)
                    },
                    JKb = function(a, b, c) {
                        switch (b.type) {
                            case "shape":
                                "shape" === a.type ? PKb(a, b) : c();
                                break;
                            case "text":
                                "text" === a.type && __c.Sj.domain.Mb(__c.Sj.oa(a.text), DKb(b).text) || c();
                                break;
                            case "layout":
                                "layout" === a.type ? NKb(a, b) : c();
                                break;
                            default:
                                throw new D(b);
                        }
                    },
                    IKb = function(a, b, c, d) {
                        const e = new Set(a.keys());
                        for (const [f, g] of b)(b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
                        e.forEach(f => a.delete(f))
                    },
                    v6 = function(a, b, c, d) {
                        const e = a.toArray();
                        for (let f = 0; f < Math.max(e.length, b.length); f++)
                            if (f < e.length && f < b.length) c(e[f], b[f]);
                            else if (f < e.length && f >= b.length) a.delete(e[f]);
                        else if (f >= e.length && f < b.length) {
                            const g = d(b[f]);
                            a.append(g)
                        }
                    },
                    u6 = function(a, b) {
                        switch (null === b || void 0 === b ? void 0 : b.type) {
                            case "color":
                                a.color = b.color;
                                a.jb.set(void 0);
                                var c;
                                a.Ia = null !==
                                    (c = b.Ia) && void 0 !== c ? c : 0;
                                break;
                            case "gradient":
                                if (a.jb.ref && __c.tVa.domain.Mb(a.jb.ref, b.jb)) break;
                                a.color = void 0;
                                a.jb.set(b.jb);
                                var d;
                                a.Ia = null !== (d = b.Ia) && void 0 !== d ? d : 0;
                                break;
                            default:
                                a.color = void 0, a.jb.set(void 0)
                        }
                    },
                    LKb = function(a, b) {
                        b = s6(b);
                        a.all = b.all;
                        a.aC = b.aC;
                        a.ZB = b.ZB;
                        a.$B = b.$B;
                        a.YB = b.YB
                    },
                    KKb = function(a, b) {
                        b = r6(b).all;
                        var c;
                        if (c = b) c = a.all.ref, c = !(c && b ? __c.xF.domain.Mb(__c.xF.oa(c), b) : !c && !b);
                        c && a.all.set(b)
                    },
                    OKb = function(a, b) {
                        return a.length === b.length && a.every(c => b.includes(c))
                    },
                    RKb = function(a,
                        b, c, d) {
                        let e = a.eLa.get(b);
                        if (e) return e;
                        e = {
                            qw: new QKb(c.Yx, b, d, c.ola),
                            jxa: void 0,
                            qGa: void 0,
                            kHa: __c.WV.mode
                        };
                        a.eLa.set(b, e);
                        return e
                    },
                    TKb = function(a, b, c, d, e) {
                        var f, g;
                        e = RKb(a, c, b, e);
                        const h = e.qw,
                            k = e.qGa,
                            l = e.jxa,
                            m = e.kHa;
                        c = __c.NQ.oa(c);
                        const n = (null === (f = (g = a.Ny).cDa) || void 0 === f ? void 0 : f.call(g, d)) || __c.WV;
                        h.Mi === k && SKb.structural(c, l) && n.mode === m || (e.jxa = c, e.qGa = h.Mi, e.kHa = n.mode, b = b.render(h, n), a.Y6a.update(d, b), AKb(d, b, (p, q) => a.sN.Cla.set(p, q), (p, q, r) => a.sN.refs.set(p, {
                            ref: q,
                            key: r
                        })))
                    },
                    WKb = function(a,
                        b) {
                        const c = [],
                            d = () => c.forEach(e => e());
                        c.push(a.H7a());
                        c.push(UKb(() => {
                            a: {
                                var e = new VKb;
                                for (const f of b)
                                    if (e.tN(f), e.Bja) {
                                        e = e.Bja;
                                        break a
                                    }
                                e = void 0
                            }
                            return e && (a.Xb.isLoaded(e) || a.zma.has(e))
                        }, e => {
                            if (e) {
                                for (const f of b) B("layout" === f.type), a.Wi.aaa(f);
                                d()
                            }
                        }));
                        return d
                    },
                    XKb = function(a, b) {
                        return {
                            eP: ({
                                Dk: c
                            }) => {
                                var d;
                                const {
                                    qw: e
                                } = RKb(a.renderer, c, b, a.IY), f = __c.PQ.create([]), g = [];
                                g.push(WKb(a.Q0a, f));
                                g.push(UKb(() => {
                                        var k, l;
                                        return [null === (k = (l = a.Ny).cDa) || void 0 === k ? void 0 : k.call(l, f), __c.NQ.oa(c), e.Mi]
                                    },
                                    () => {
                                        TKb(a.renderer, b, c, f, a.IY)
                                    }, {
                                        fireImmediately: !0,
                                        equals: SKb.structural
                                    }));
                                const h = null === (d = b.bZ) || void 0 === d ? void 0 : d.call(b, {
                                    qw: e
                                });
                                h && g.push(h);
                                return {
                                    ib: f,
                                    Su: () => {
                                        g.forEach(k => k())
                                    }
                                }
                            }
                        }
                    },
                    ZKb = function(a, b) {
                        let c = a.P2.get(b);
                        c || (c = YKb("weakKey"), a.P2.set(b, c));
                        c.reportObserved()
                    },
                    w6 = __webpack_require__(519427),
                    SKb = w6.p6,
                    $Kb = w6.Fl,
                    YKb = w6.cp,
                    x6 = w6.LO,
                    UKb = w6.U5,
                    aLb = w6.z;
                var bLb = class {
                    static j(a) {
                        __c.P(a, {
                            q9a: x6.ref,
                            bZ: x6.ref
                        })
                    }
                    constructor() {
                        bLb.j(this)
                    }
                };
                var cLb = class {
                        constructor() {
                            this.sources = new WeakMap
                        }
                    },
                    QKb = class {
                        static j(a) {
                            __c.P(a, {
                                gg: $Kb
                            })
                        }
                        get rGa() {
                            var a = this.IY,
                                b = this.Dk,
                                c = this.ola;
                            let d = a.sources.get(b);
                            d || (d = x6.box(c), a.sources.set(b, d));
                            return d
                        }
                        get Mi() {
                            return this.rGa.get()
                        }
                        get gg() {
                            return this.Yx.ct({
                                type: "dict",
                                value: this.Dk
                            })
                        }
                        Sl(a) {
                            this.rGa.set(a instanceof Function ? { ...this.Mi,
                                ...a()
                            } : { ...this.Mi,
                                ...a
                            })
                        }
                        constructor(a, b, c, d) {
                            QKb.j(this);
                            this.Yx = a;
                            this.Dk = b;
                            this.IY = c;
                            this.ola = d
                        }
                    };
                var zKb = class {
                    A1(a, b) {
                        this.XKa(a, b);
                        b.ref && this.pqa(a, b.ref, b.key)
                    }
                    wN(a, b) {
                        b.ref && this.pqa(a.text, b.ref, b.key)
                    }
                    oua(a, b) {
                        switch (b.content.type) {
                            case "shape":
                                B("shape" === a.element.type);
                                this.A1(a.element, b.content);
                                break;
                            case "text":
                                B("text" === a.element.type);
                                this.wN(a.element, b.content);
                                break;
                            case "layout":
                                B("layout" === a.element.type);
                                this.Xca(a.element, b.content);
                                break;
                            default:
                                throw new D(b.content);
                        }
                    }
                    Xca(a, b) {
                        this.XKa(a, b);
                        b.ref && this.pqa(a, b.ref, b.key);
                        for (const [c, d] of a.cells) a = b.cells.find(e =>
                            e.id === c), B(!!d && !!a), this.oua(d, a)
                    }
                    constructor(a, b) {
                        this.XKa = a;
                        this.pqa = b
                    }
                };
                var o6 = {
                        locked: !0,
                        jq: {
                            qha: !1,
                            Rba: !1
                        },
                        Ui: !0
                    },
                    p6 = {
                        top: 0,
                        left: 0,
                        width: 1,
                        height: 1
                    };
                var dLb = class {
                    constructor(a) {
                        this.Wi = a;
                        this.update = (b, c) => {
                            v6(b, [c], (d, e) => {
                                switch (d.type) {
                                    case "layout":
                                        NKb(d, e);
                                        break;
                                    default:
                                        throw Error(`Not supported element type: ${d.type}`);
                                }
                            }, d => {
                                a: switch (d.type) {
                                    case "layout":
                                        d = { ...EKb(d),
                                            width: d.minWidth,
                                            height: d.minHeight,
                                            F: d.minWidth,
                                            P: d.minHeight,
                                            locked: !1,
                                            Ui: !1,
                                            jq: void 0
                                        };
                                        break a;
                                    default:
                                        throw new D(d.type);
                                }
                                return d
                            });
                            for (const d of b) B("layout" === d.type), d.width = c.minWidth, d.height = c.minHeight, d.F = c.minWidth, d.P = c.minHeight, c.direction && (d.direction =
                                c.direction), this.Wi.aaa(d)
                        }
                    }
                };
                var eLb = class {
                    constructor(a, b, c) {
                        this.Y6a = a;
                        this.sN = b;
                        this.Ny = c;
                        this.eLa = new WeakMap
                    }
                };
                var fLb = class {
                        static j(a) {
                            __c.P(a, {
                                zma: x6.shallow
                            })
                        }
                        constructor(a, b) {
                            fLb.j(this);
                            this.Xb = a;
                            this.Wi = b;
                            this.zma = new Set;
                            this.Lja = new Set;
                            this.H7a = () => {
                                this.y6 || (this.y6 = __c.$ra(this.Xb).subscribe(d => {
                                    aLb(() => {
                                        this.zma.add(d.id)
                                    })
                                }));
                                const c = Symbol();
                                this.Lja.add(c);
                                return () => {
                                    this.Lja.delete(c);
                                    0 >= this.Lja.size && this.y6 && (this.y6.unsubscribe(), this.y6 = void 0)
                                }
                            }
                        }
                    },
                    VKb = class extends __c.UD {
                        tN(a, b) {
                            this.Bja || super.tN(a, b)
                        }
                        wN(a) {
                            this.Bja = (a = a.text.UC("font-family")["font-family"].values().next().value) &&
                                __c.XB(a).id
                        }
                    };
                var gLb = !1,
                    hLb = class {
                        register(a, b) {
                            this.iC.has(a) || (this.iC.set(a, b), gLb || (__c.OQ.set(a, XKb(this, b)), gLb = !0))
                        }
                        get(a) {
                            return this.iC.get(a)
                        }
                        constructor(a, b, c, d, e) {
                            this.renderer = a;
                            this.IY = b;
                            this.Ny = c;
                            this.Xb = d;
                            this.Wi = e;
                            this.iC = new Map;
                            this.Q0a = new fLb(this.Xb, this.Wi)
                        }
                    };
                var iLb = class {
                    delete(a) {
                        var b;
                        const c = this.map.delete(a);
                        c && (null === (b = this.P2.get(a)) || void 0 === b ? void 0 : b.reportChanged());
                        return c
                    }
                    get(a) {
                        ZKb(this, a);
                        return this.map.get(a)
                    }
                    has(a) {
                        ZKb(this, a);
                        return this.map.has(a)
                    }
                    set(a, b) {
                        if (!this.map.has(a) || this.map.get(a) !== b) {
                            var c;
                            this.map.set(a, b);
                            null === (c = this.P2.get(a)) || void 0 === c ? void 0 : c.reportChanged()
                        }
                        return this
                    }
                    constructor() {
                        this.P2 = new WeakMap;
                        this.map = new WeakMap
                    }
                };
                var jLb = class {
                        constructor() {
                            this.Cla = new iLb;
                            this.refs = new iLb
                        }
                    },
                    kLb = class {
                        getContext(a) {
                            return this.sN.refs.get(a)
                        }
                        AK(a) {
                            return this.sN.Cla.get(a)
                        }
                        constructor(a, b, c) {
                            this.sN = a;
                            this.IY = b;
                            this.renderer = c
                        }
                    };
                __c.EIa = {
                    P3a: function(a) {
                        const b = new bLb;
                        switch (a.cd) {
                            case "fixed":
                                const c = new jLb,
                                    d = new eLb(new dLb(a.Wi), c, b),
                                    e = new cLb;
                                a = new hLb(d, e, b, a.Xb, a.Wi);
                                return {
                                    Ny: b,
                                    Oxb: new kLb(c, e, d),
                                    Zfb: a,
                                    sN: c
                                };
                            case "responsive":
                                throw Error("Not implemented");
                            default:
                                throw new D(a);
                        }
                    }
                };
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/4dc5b4f51a6f8316.js.map