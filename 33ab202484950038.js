(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [5024], {

        /***/
        38406: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var RI = __c.RI;
                var Mc = __c.Mc;
                var P = __c.P;
                var VI = __c.VI;
                var Zg = __c.Zg;
                var C = __c.C;
                var lg = __c.lg;
                var D = __c.D;
                var O = __c.O;
                var Vy = __c.Vy;
                var B5 = function() {
                        const [a] = (0, __c.ec)(() => Vy());
                        return a
                    },
                    WIb = function(a) {
                        switch (a) {
                            case 4:
                                return O("9ND0kg");
                            case 2:
                                return O("ibdecg");
                            case 7:
                                return O("446quA");
                            case 5:
                                return O("j1fbqg");
                            case 1:
                                return O("O5i4AQ");
                            case 6:
                                return O("C0VHsg");
                            case 3:
                                return O("+IXmVg");
                            default:
                                throw new D(a);
                        }
                    },
                    XIb = function(a, b, c) {
                        const d = [a];
                        for (; null != a && a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    },
                    YIb = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.N)(a, { ...b
                            })
                        })
                    },
                    cJb = function(a) {
                        return b => ({
                            type: "dom",
                            render: c => a(b,
                                c)
                        })
                    },
                    eJb = function(a) {
                        var b, c = a.jy,
                            d = a.content;
                        a = a.context;
                        __c.B("formula" === (null === d || void 0 === d ? void 0 : null === (b = d.hg) || void 0 === b ? void 0 : b.type));
                        b = d.hg.value;
                        switch (b.type) {
                            case "invalid":
                                b = b.V$;
                                break;
                            case "canonical":
                                b = b.uJ;
                                break;
                            default:
                                throw new D(b);
                        }
                        __c.B(b.startsWith("="));
                        const e = d.du;
                        b = {
                            type: "dom",
                            render: h => h.innerText = ""
                        };
                        let f;
                        switch (e.type) {
                            case 7:
                                f = b;
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 5:
                            case 6:
                                f = dJb(c, a, d.Wy);
                                break;
                            case 0:
                                f = {
                                    type: "react",
                                    node: C5(__c.iS, {
                                        label: WIb(e.error),
                                        children: C5(__c.uA, {
                                            width: "full",
                                            display: "flex",
                                            justifyContent: "center",
                                            children: C5(__c.umb, {
                                                tone: "critical"
                                            })
                                        })
                                    })
                                };
                                break;
                            default:
                                throw new D(e);
                        }
                        if (!f) return b;
                        c = lg(__c.CQ, a.attrs);
                        d = __c.QI(a.attrs.textAlign, "formula", void 0, () => e.type);
                        const g = {
                            textAlign: __c.SCa(d, c.direction),
                            justifyContent: __c.TCa(d),
                            width: "100%"
                        };
                        switch (f.type) {
                            case "dom":
                                return {
                                    type: "dom",
                                    render: h => {
                                        const k = document.createElement("div");
                                        Object.assign(k.style, g);
                                        f.render(k);
                                        h.innerHTML = "";
                                        h.appendChild(k)
                                    }
                                };
                            case "react":
                                return {
                                    type: "react",
                                    node: C5("div", {
                                        style: g,
                                        children: f.node
                                    })
                                };
                            default:
                                throw new D(f);
                        }
                    },
                    dJb = function(a, b, c) {
                        var d;
                        return null === (d = a.lea) || void 0 === d ? void 0 : d.call(a, {
                            context: b,
                            value: c
                        })
                    },
                    iJb = function(a) {
                        const b = a.jy,
                            c = a.Oe;
                        a = a.Fdb;
                        b.lea = fJb;
                        b.Yva = d => eJb({ ...d,
                            jy: b
                        });
                        b.Zva = YIb(gJb({
                            Oe: c,
                            IN: void 0
                        }));
                        b.awa = hJb(a);
                        b.bwa = YIb(D5)
                    },
                    jJb = function({
                        label: a,
                        width: b,
                        height: c,
                        scale: d,
                        Wya: e
                    }) {
                        return C5("div", {
                            style: {
                                width: b,
                                height: c,
                                transform: `scale(${d})`
                            },
                            className: "bx74uQ",
                            children: C5(__c.rA, {
                                className: E5("ivlMMQ", F5(e)),
                                size: "small",
                                alignment: "center",
                                children: a
                            })
                        })
                    },
                    F5 = function(a) {
                        return {
                            _2BX0vg: "primary-default" === a,
                            JfW_Cg: "primary-low" === a,
                            isMgNg: "primary-active" === a,
                            xwWDeQ: "secondary-default" === a,
                            w0EyUQ: "secondary-low" === a,
                            _8p5AIA: "secondary-active" === a
                        }
                    },
                    lJb = function({
                        vd: a,
                        highlight: b,
                        scale: c,
                        hs: d,
                        Tn: e,
                        SQa: f
                    }) {
                        const g = G5(() => {
                                const m = null === d || void 0 === d ? void 0 : d.get();
                                if (null != m && 0 !== m.length) return new __c.HF(m)
                            }, [d]),
                            h = e(1),
                            k = e(c),
                            l = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return C5(__c.sA, {
                            ap: "light",
                            light: "light",
                            Ir: "light",
                            dark: "light",
                            children: m => C5("div", {
                                className: E5("ze9QCQ", l, m.className),
                                style: {
                                    width: k,
                                    height: k
                                },
                                children: C5("div", {
                                    style: {
                                        width: h,
                                        height: h,
                                        transform: `scale(${c})`
                                    },
                                    className: E5("N7J3UA", l),
                                    ref: null === g || void 0 === g ? void 0 : g.Tk,
                                    children: C5(__c.wM, {
                                        className: E5("m8CFdg", l, {
                                            G6wL4w: f,
                                            W_E0wA: b
                                        }),
                                        ariaLabel: O("ruWN9A"),
                                        children: C5(kJb, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    nJb = function() {
                        const a = new mJb,
                            b = new __c.IS,
                            c = H5(f => {
                                const {
                                    scale: g = 1,
                                    size: h = "small",
                                    SQa: k = !0
                                } = f, l = I5(m => a.Tn(m, h), [h]);
                                return C5(lJb, { ...f,
                                    scale: g,
                                    vd: "rtl" === f.sheet.direction,
                                    highlight: null !=
                                        f.selection && a.K4a(f.sheet, f.selection),
                                    Tn: l,
                                    SQa: k
                                })
                            }),
                            d = H5(f => {
                                const {
                                    scale: g = 1,
                                    size: h = "small",
                                    sheet: k,
                                    selection: l,
                                    ybb: m
                                } = f, n = I5(t => a.Tn(t, h), [h]), p = I5(t => null != l && a.bMa(l).has(t), [l]), q = I5(t => null != l && a.M2a(k, l).has(t), [k, l]), r = I5(t => {
                                    const u = null != m && 0 <= k.layout.cols.cf(t, m.$b) && 0 >= k.layout.cols.cf(t, m.Oc);
                                    return p(t) ? u ? "secondary-active" : "primary-active" : q(t) ? u ? "secondary-low" : "primary-low" : u ? "secondary-default" : "primary-default"
                                }, [k, m, q, p]);
                                return C5(J5, { ...f,
                                    scale: g,
                                    Tn: n,
                                    VC: r,
                                    OD: b
                                })
                            }),
                            e = H5(f => {
                                const {
                                    scale: g = 1,
                                    size: h = "small",
                                    sheet: k,
                                    selection: l,
                                    ybb: m
                                } = f, n = I5(t => a.Tn(t, h), [h]), p = I5(t => null != l && a.dMa(l).has(t), [l]), q = I5(t => null != l && a.N2a(k, l).has(t), [k, l]), r = I5(t => {
                                    const u = null != m && 0 <= k.layout.rows.cf(t, m.ec) && 0 >= k.layout.rows.cf(t, m.Zc);
                                    return p(t) ? u ? "secondary-active" : "primary-active" : q(t) ? u ? "secondary-low" : "primary-low" : u ? "secondary-default" : "primary-default"
                                }, [k, m, q, p]);
                                return C5(K5, { ...f,
                                    scale: g,
                                    Tn: n,
                                    VC: r,
                                    OD: b
                                })
                            });
                        return {
                            rRa: c,
                            qRa: d,
                            sRa: e
                        }
                    },
                    oJb = function(a) {
                        const b = a.yr,
                            c = () => null;
                        return __c.gz(d =>
                            C5(L5, { ...d,
                                yr: b,
                                Yh: c
                            }))
                    },
                    qJb = function({
                        sheet: a,
                        scaleFactor: b,
                        range: c,
                        xd: d,
                        CEa: e
                    }) {
                        pJb(() => M5(() => {
                            if (null != d.current && null != e.current) {
                                var f, g = null !== (f = null === b || void 0 === b ? void 0 : b.get()) && void 0 !== f ? f : 1;
                                f = "rtl" === a.direction;
                                f = c ? a.ra(c.$b) * g * (f ? 1 : -1) : 0;
                                var h = c ? -a.va(c.ec) * g : 0;
                                d.current.style.transform = `translate(${f}px, ${h}px)`;
                                e.current.style.width = `${a.width*g}px`;
                                e.current.style.height = `${a.height*g}px`
                            }
                        }), [a, c, d, e, b])
                    },
                    tJb = function({
                        onScroll: a
                    }) {
                        const b = new rJb(a);
                        return {
                            XA: b,
                            Tda: H5(c => C5(sJb, {
                                sheet: c.sheet,
                                XA: b,
                                children: c.children
                            }))
                        }
                    },
                    xJb = function(a) {
                        const b = a.yr,
                            c = a.De,
                            d = a.PMa,
                            e = ({
                                children: k
                            }) => k,
                            {
                                XA: f,
                                Tda: g
                            } = tJb({
                                onScroll: a.onScroll
                            });
                        class h extends uJb {
                            get aJ() {
                                const k = this.props.Fb.hG;
                                switch (k) {
                                    case "screen":
                                        return g;
                                    case "print":
                                        return e;
                                    default:
                                        throw new D(k);
                                }
                            }
                            componentDidMount() {
                                d.FMa(this.props.item, {
                                    ac: this.props.ac,
                                    Fb: this.props.Fb,
                                    Tg: this.props.Tg
                                })
                            }
                            componentWillUnmount() {
                                d.xWa(this.props.item, {
                                    ac: this.props.ac,
                                    Fb: this.props.Fb,
                                    Tg: this.props.Tg
                                })
                            }
                            render() {
                                d.FMa(this.props.item, {
                                    ac: this.props.ac,
                                    Fb: this.props.Fb,
                                    Tg: this.props.Tg
                                });
                                return C5(vJb, { ...this.props,
                                    scaleFactor: this.scaleFactor,
                                    yr: b,
                                    aJ: this.aJ,
                                    Yh: this.Yh,
                                    PMa: d,
                                    XA: f
                                })
                            }
                            constructor(...k) {
                                super(...k);
                                this.scaleFactor = N5(() => {
                                    const l = this.props.item;
                                    var m = this.props.Fb,
                                        n = m.hG;
                                    m = m.zoom;
                                    switch (n) {
                                        case "screen":
                                            return 1;
                                        case "print":
                                            n = d.c2a(l);
                                            if (!n) return 1;
                                            ({
                                                width: n
                                            } = new __c.VF(l, n.ac, {
                                                zoom: m
                                            }));
                                            return n / l.config.width;
                                        default:
                                            throw new D(n);
                                    }
                                });
                                this.Yh = H5(l => C5("div", {
                                    className: "wKvivQ",
                                    children: C5(wJb, { ...this.props,
                                        ...l,
                                        De: c
                                    })
                                }))
                            }
                        }
                        return {
                            iTa: h,
                            XA: f
                        }
                    },
                    yJb = function(a, b) {
                        if (null != b && null != b.$b && null != b.ec && null != b.Oc && null != b.Zc) {
                            var c = a.ra(b.$b),
                                d = a.va(b.ec),
                                e = a.ra(b.Oc) + b.Oc.width - c;
                            a = a.va(b.Zc) + b.Zc.height - d;
                            return __c.Wt({
                                top: d,
                                left: c,
                                width: e,
                                height: a
                            })
                        }
                    },
                    AJb = function(a) {
                        const b = a.yr,
                            c = () => null;
                        return d => C5(zJb, { ...d,
                            yr: b,
                            Yh: c
                        })
                    },
                    EJb = function(a, b, c, d, e, f) {
                        if (0 === d.length || 0 === e.length) return [];
                        const g = BJb(b, c, d, e);
                        f = CJb(b, c, d, e, f);
                        const h = DJb(a, b, c, d, e),
                            k = a.Z1a(b),
                            l = a.y1a(b),
                            m = "rtl" === b.direction;
                        a = g.map(n => {
                            var p, q, r = n.Rcb,
                                t = n.eja,
                                u = n.ALa;
                            const v = n.color,
                                x = n.weight;
                            n = n.Zb;
                            const y = m ? -1 : 1,
                                z = null === (p = h.get(O5(r, u))) || void 0 === p ? void 0 : p.Ka;
                            p = null === (q = h.get(O5(t, u))) || void 0 === q ? void 0 : q.ra;
                            if (null != z && null != p) {
                                q = C(k.get(u.ua));
                                var A = C(l.get(r.column));
                                r = C(l.get(t.column));
                                u = "start" === u.boundary ? q.start : q.end;
                                q = A.start;
                                t = "start" === t.boundary ? r.start : r.end;
                                return {
                                    color: v,
                                    weight: x,
                                    Zb: n,
                                    p1: new __c.xt(q + z * y, u),
                                    p2: new __c.xt(t + p * y, u),
                                    ...__c.XI((t - q) * y, n * x, z)
                                }
                            }
                        }).filter(__c.xb);
                        return [...f.map(n => {
                            var p, q,
                                r = n.Oya,
                                t = n.Zcb,
                                u = n.hja;
                            const v = n.color,
                                x = n.weight;
                            n = n.Zb;
                            const y = null === (p = h.get(O5(r, t))) || void 0 === p ? void 0 : p.Ea;
                            p = null === (q = h.get(O5(r, u))) || void 0 === q ? void 0 : q.va;
                            if (null != y && null != p) {
                                q = C(l.get(r.column));
                                var z = C(k.get(t.ua));
                                t = C(k.get(u.ua));
                                r = "start" === r.boundary ? q.start : q.end;
                                q = z.start;
                                u = "start" === u.boundary ? t.start : t.end;
                                return {
                                    color: v,
                                    weight: x,
                                    Zb: n,
                                    p1: new __c.xt(r, q + y),
                                    p2: new __c.xt(r, u + p),
                                    ...__c.XI(u - q, n * x, y)
                                }
                            }
                        }).filter(__c.xb), ...a]
                    },
                    FJb = function(a) {
                        const b = [];
                        a = a.filter(c => 0 !== c.weight &&
                            null != c.color);
                        a = __c.td(a, c => c.weight);
                        a = Array.from(a.entries()).sort(([c], [d]) => c - d);
                        for (const [c, d] of a) {
                            a = __c.td(d, e => `${e.mj}_${e.nj}`);
                            for (const [, e] of a) {
                                const {
                                    nj: f,
                                    mj: g
                                } = e[0];
                                a = __c.td(e, h => h.color);
                                for (const [h, k] of a) b.push({
                                    weight: c,
                                    color: h,
                                    lines: k,
                                    mj: g,
                                    nj: f
                                })
                            }
                        }
                        return b
                    },
                    HJb = function(a, b, c, d) {
                        var e = GJb;
                        const f = b.get().flatMap(k => a.layout.rows.last() === k ? [{
                                ua: k,
                                boundary: "start"
                            }, {
                                ua: k,
                                boundary: "end"
                            }] : [{
                                ua: k,
                                boundary: "start"
                            }]),
                            g = c.get().flatMap(k => a.layout.cols.last() === k ? [{
                                    column: k,
                                    boundary: "start"
                                },
                                {
                                    column: k,
                                    boundary: "end"
                                }
                            ] : [{
                                column: k,
                                boundary: "start"
                            }]),
                            h = new Map;
                        for (const k of b.get())
                            for (const l of c.get()) b = l && k ? e.OMa.Xab(a, l, k) : void 0, b && h.set(`${l.id}:${k.id}`, b);
                        c = EJb(e, a, h, f, g, d);
                        return FJb(c)
                    },
                    BJb = function(a, b, c, d) {
                        const e = [];
                        for (const k of c)
                            for (const l of d) {
                                c = k.ua;
                                var f = l.column,
                                    g = a.layout.cells.get(c, f);
                                if (!g || ("start" === k.boundary ? g.span.ec === c : g.span.Zc === c))
                                    if (c = b.get(`${f.id}:${c.id}`), c = "start" === k.boundary ? null === c || void 0 === c ? void 0 : c.va : null === c || void 0 === c ? void 0 : c.Ea) {
                                        g =
                                            e[e.length - 1];
                                        f = (f = a.layout.cols.next(f)) ? {
                                            column: f,
                                            boundary: "start"
                                        } : {
                                            column: C(a.layout.cols.last()),
                                            boundary: "end"
                                        };
                                        var h;
                                        if (h = g) h = g.eja, h = h.column === l.column && h.boundary === l.boundary;
                                        h && (h = g.ALa, h = h.ua === k.ua && h.boundary === k.boundary);
                                        h && g.color === c.color && g.weight === c.weight && g.Zb === c.Zb && 0 === g.Zb ? g.eja = f : e.push({
                                            ALa: k,
                                            Rcb: l,
                                            eja: f,
                                            color: c.color,
                                            weight: c.weight,
                                            Zb: c.Zb
                                        })
                                    }
                            }
                        return e
                    },
                    CJb = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of c) {
                                var g = m.ua,
                                    h = l.column;
                                d = a.layout.cells.get(g,
                                    h);
                                if (!d || ("start" === l.boundary ? d.span.$b === h : d.span.Oc === h))
                                    if (d = b.get(`${h.id}:${g.id}`), (d = "start" === l.boundary ? null === d || void 0 === d ? void 0 : d.ra : null === d || void 0 === d ? void 0 : d.Ka) && ("start" !== l.boundary || 1 !== e(g, h))) {
                                        h = f[f.length - 1];
                                        g = (g = a.layout.rows.next(g)) ? {
                                            ua: g,
                                            boundary: "start"
                                        } : {
                                            ua: C(a.layout.rows.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.Oya, k = k.column === l.column && k.boundary === l.boundary;
                                        k && (k = h.hja, k = k.ua === m.ua && k.boundary === m.boundary);
                                        k && h.color === d.color && h.weight === d.weight && h.Zb ===
                                            d.Zb && 0 === h.Zb ? h.hja = g : f.push({
                                                Oya: l,
                                                Zcb: m,
                                                hja: g,
                                                color: d.color,
                                                weight: d.weight,
                                                Zb: d.Zb
                                            })
                                    }
                            }
                        return f
                    },
                    DJb = function(a, b, c, d, e) {
                        const f = a.OMa.AXa(c, b.layout.rows.last(), b.layout.cols.last());
                        a = (q, r) => {
                            const t = f.get(q) || 0,
                                u = f.get(r) || 0;
                            return t <= u ? q : r
                        };
                        const g = new Map;
                        if (0 === d.length || 0 === e.length) return g;
                        var h = [],
                            k = b.layout.cols.vc(e[0].column);
                        k && h.push({
                            column: k,
                            boundary: "start"
                        });
                        h.push(...e);
                        (e = b.layout.cols.next(e[e.length - 1].column)) && h.push({
                            column: e,
                            boundary: "start"
                        });
                        e = [];
                        (k = b.layout.rows.vc(d[0].ua)) &&
                        e.push({
                            ua: k,
                            boundary: "start"
                        });
                        e.push(...d);
                        (d = b.layout.rows.next(d[d.length - 1].ua)) && e.push({
                            ua: d,
                            boundary: "start"
                        });
                        for (const q of h) {
                            h = (d = "start" === q.boundary ? q.column : void 0) ? b.layout.cols.vc(d) : b.layout.cols.last();
                            for (const r of e) {
                                var l = "start" === r.boundary ? r.ua : void 0;
                                k = l ? b.layout.rows.vc(l) : b.layout.rows.last();
                                var m = d && l && c.get(`${d.id}:${l.id}`),
                                    n = d && k && c.get(`${d.id}:${k.id}`);
                                l = h && l && c.get(`${h.id}:${l.id}`);
                                var p = h && k && c.get(`${h.id}:${k.id}`);
                                k = "end" === q.boundary ? null === l || void 0 ===
                                    l ? void 0 : l.Ka : null === m || void 0 === m ? void 0 : m.ra;
                                m = "end" === r.boundary ? null === n || void 0 === n ? void 0 : n.Ea : null === m || void 0 === m ? void 0 : m.va;
                                n = "end" === q.boundary ? null === p || void 0 === p ? void 0 : p.Ka : null === n || void 0 === n ? void 0 : n.ra;
                                l = "end" === r.boundary ? null === p || void 0 === p ? void 0 : p.Ea : null === l || void 0 === l ? void 0 : l.va;
                                p = __c.iDa({
                                    va: n,
                                    Ea: k,
                                    ra: l,
                                    Ka: m
                                }, a);
                                let t;
                                switch (p) {
                                    case "blockStart":
                                        t = n;
                                        break;
                                    case "blockEnd":
                                        t = k;
                                        break;
                                    case "inlineStart":
                                        t = l;
                                        break;
                                    case "inlineEnd":
                                        t = m;
                                        break;
                                    default:
                                        t = void 0
                                }
                                const {
                                    height: u,
                                    width: v
                                } = 1 === (null === t || void 0 === t ? void 0 : t.Zb) ? {
                                    height: t.weight,
                                    width: t.weight
                                } : {
                                    height: Math.max((null === l || void 0 === l ? void 0 : l.weight) || 0, (null === m || void 0 === m ? void 0 : m.weight) || 0),
                                    width: Math.max((null === n || void 0 === n ? void 0 : n.weight) || 0, (null === k || void 0 === k ? void 0 : k.weight) || 0)
                                };
                                g.set(O5(q, r), __c.SI(p, u / 2, v / 2))
                            }
                        }
                        return g
                    },
                    P5 = function(a, b, c, d, e) {
                        if (a && b) {
                            var f = b.rs ? a.rs ? void 0 : a : b;
                            return __c.UI(b.borderStyle, a.borderStyle, d, c, e, null === f || void 0 === f ? void 0 : f.borderStyle)
                        }
                        return null !== (f = null ===
                            a || void 0 === a ? void 0 : a.borderStyle) && void 0 !== f ? f : null === b || void 0 === b ? void 0 : b.borderStyle
                    },
                    IJb = function(a, b, c) {
                        var d = b && c && a.layout.cells.get(c, b),
                            e, f, g = b && c ? a.layout.attrs.get(Zg({
                                s3: void 0,
                                A3: void 0,
                                w3: void 0
                            }), null !== (e = null === d || void 0 === d ? void 0 : d.span.ec) && void 0 !== e ? e : c, null !== (f = null === d || void 0 === d ? void 0 : d.span.$b) && void 0 !== f ? f : b) || {} : void 0;
                        if (b && c) {
                            b = {
                                color: a.Ei.color,
                                weight: a.Ei.weight,
                                Zb: VI(a.Ei.Gd)
                            };
                            if (!g) return a.Cl ? void 0 : {
                                borderStyle: b,
                                rs: !0
                            };
                            c = Q5(g.s3);
                            d = R5(g.A3);
                            g = S5(g.w3);
                            return null == c && null == d && null == g ? a.Cl ? void 0 : {
                                borderStyle: b,
                                rs: !0
                            } : {
                                borderStyle: {
                                    color: null !== c && void 0 !== c ? c : b.color,
                                    weight: null !== d && void 0 !== d ? d : b.weight,
                                    Zb: g ? VI(g) : b.Zb
                                },
                                rs: !1
                            }
                        }
                    },
                    JJb = function(a, b, c) {
                        var d = b && c && a.layout.cells.get(c, b),
                            e, f, g = b && c ? a.layout.attrs.get(Zg({
                                r3: void 0,
                                z3: void 0,
                                v3: void 0
                            }), null !== (e = null === d || void 0 === d ? void 0 : d.span.ec) && void 0 !== e ? e : c, null !== (f = null === d || void 0 === d ? void 0 : d.span.$b) && void 0 !== f ? f : b) || {} : void 0;
                        if (b && c) {
                            b = {
                                color: a.Ei.color,
                                weight: a.Ei.weight,
                                Zb: VI(a.Ei.Gd)
                            };
                            if (!g) return a.Cl ? void 0 : {
                                borderStyle: b,
                                rs: !0
                            };
                            c = Q5(g.r3);
                            d = R5(g.z3);
                            g = S5(g.v3);
                            return null == c && null == d && null == g ? a.Cl ? void 0 : {
                                borderStyle: b,
                                rs: !0
                            } : {
                                borderStyle: {
                                    color: null !== c && void 0 !== c ? c : b.color,
                                    weight: null !== d && void 0 !== d ? d : b.weight,
                                    Zb: g ? VI(g) : b.Zb
                                },
                                rs: !1
                            }
                        }
                    },
                    KJb = function(a, b, c) {
                        var d = b && c && a.layout.cells.get(c, b),
                            e, f, g = b && c ? a.layout.attrs.get(Zg({
                                    u3: void 0,
                                    C3: void 0,
                                    y3: void 0
                                }), null !== (e = null === d || void 0 === d ? void 0 : d.span.ec) && void 0 !== e ? e : c, null !== (f = null === d || void 0 === d ? void 0 : d.span.$b) && void 0 !==
                                f ? f : b) || {} : void 0;
                        if (b && c) {
                            b = {
                                color: a.Ei.color,
                                weight: a.Ei.weight,
                                Zb: VI(a.Ei.Gd)
                            };
                            if (!g) return a.Cl ? void 0 : {
                                borderStyle: b,
                                rs: !0
                            };
                            c = Q5(g.u3);
                            d = R5(g.C3);
                            g = S5(g.y3);
                            return null == c && null == d && null == g ? a.Cl ? void 0 : {
                                borderStyle: b,
                                rs: !0
                            } : {
                                borderStyle: {
                                    color: null !== c && void 0 !== c ? c : b.color,
                                    weight: null !== d && void 0 !== d ? d : b.weight,
                                    Zb: g ? VI(g) : b.Zb
                                },
                                rs: !1
                            }
                        }
                    },
                    LJb = function(a, b, c) {
                        var d = b && c && a.layout.cells.get(c, b),
                            e, f, g = b && c ? a.layout.attrs.get(Zg({
                                t3: void 0,
                                B3: void 0,
                                x3: void 0
                            }), null !== (e = null === d || void 0 === d ? void 0 :
                                d.span.ec) && void 0 !== e ? e : c, null !== (f = null === d || void 0 === d ? void 0 : d.span.$b) && void 0 !== f ? f : b) || {} : void 0;
                        if (b && c) {
                            b = {
                                color: a.Ei.color,
                                weight: a.Ei.weight,
                                Zb: VI(a.Ei.Gd)
                            };
                            if (!g) return a.Cl ? void 0 : {
                                borderStyle: b,
                                rs: !0
                            };
                            c = Q5(g.t3);
                            d = R5(g.B3);
                            g = S5(g.x3);
                            return null == c && null == d && null == g ? a.Cl ? void 0 : {
                                borderStyle: b,
                                rs: !0
                            } : {
                                borderStyle: {
                                    color: null !== c && void 0 !== c ? c : b.color,
                                    weight: null !== d && void 0 !== d ? d : b.weight,
                                    Zb: g ? VI(g) : b.Zb
                                },
                                rs: !1
                            }
                        }
                    },
                    Q5 = function(a) {
                        return null == a || "inherit" === a ? void 0 : a
                    },
                    R5 = function(a) {
                        return null ==
                            a || "inherit" === a ? void 0 : Number(a.split("px")[0])
                    },
                    S5 = function(a) {
                        return null == a || "inherit" === a ? void 0 : a.split(" ").map(b => {
                            b = Number(b);
                            return 0 < b ? b : void 0
                        }).filter(__c.xb)
                    },
                    T5 = function(a, b, c) {
                        let d = 0;
                        for (; null != a && a !== b;)(a = c.next(a)) && d++;
                        return d
                    },
                    MJb = function(a, b) {
                        return (null === a || void 0 === a ? void 0 : a.Ea) === (null === b || void 0 === b ? void 0 : b.Ea) && (null === a || void 0 === a ? void 0 : a.va) === (null === b || void 0 === b ? void 0 : b.va) && (null === a || void 0 === a ? void 0 : a.Ka) === (null === b || void 0 === b ? void 0 : b.Ka) && (null ===
                            a || void 0 === a ? void 0 : a.ra) === (null === b || void 0 === b ? void 0 : b.ra)
                    },
                    OJb = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                nya: b,
                                LF: b,
                                Ha: {},
                                ez: {}
                            },
                            d = U5(() => a.Eba.style || c, g => {
                                var h;
                                Object.assign(a.Bga.style, g.nya);
                                Object.assign(a.DO.style, g.LF);
                                Object.assign(a.MF.style, g.Ha);
                                Object.assign(a.kC.style, g.ez);
                                g = null === g || void 0 === g ? void 0 : null === (h = g.Ha) || void 0 === h ? void 0 : h.textDecoration;
                                a.MF.classList.toggle("OQx3PQ", "underline" === g);
                                a.MF.classList.toggle("_99ezUA", "line-through" ===
                                    g);
                                a.MF.classList.toggle("kppAqQ", "underline line-through" === g)
                            }, {
                                fireImmediately: !0,
                                equals: V5.structural
                            }),
                            e = U5(() => a.WX, g => {
                                a.MF.classList.toggle("_84KvRA", !g)
                            }, {
                                fireImmediately: !0
                            }),
                            f = U5(() => a.renderer, g => {
                                a.L4 && "react" !== (null === g || void 0 === g ? void 0 : g.type) ? (a.L4 = void 0, a.OZ.remove()) : a.kC.innerHTML = "";
                                switch (null === g || void 0 === g ? void 0 : g.type) {
                                    case "react":
                                        a.L4 = NJb(g.node, a.OZ);
                                        a.kC.appendChild(a.OZ);
                                        break;
                                    case "dom":
                                        g.render(a.kC);
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new D(g);
                                }
                                a.$na()
                            }, {
                                fireImmediately: !0
                            });
                        return () => {
                            d();
                            e();
                            f()
                        }
                    },
                    QJb = function(a) {
                        const b = a.ly,
                            c = a.AB,
                            d = new PJb(a.J_);
                        return e => C5(W5, { ...e,
                            AB: c,
                            ly: b,
                            Gla: d
                        })
                    },
                    gJb = ({
                        Oe: a,
                        IN: b
                    }) => c => (0, __c.N)(__c.Lfb, { ...c,
                        Oe: a,
                        IN: b
                    }),
                    X5 = __webpack_require__(443763),
                    Y5 = X5.Fragment,
                    C5 = X5.jsx,
                    Z5 = X5.jsxs;
                var H5 = __webpack_require__(620826).Pi;
                var $5 = __webpack_require__(875604),
                    a6 = $5.Component,
                    uJb = $5.PureComponent,
                    I5 = $5.useCallback,
                    pJb = $5.useEffect,
                    RJb = $5.useLayoutEffect,
                    G5 = $5.useMemo,
                    SJb = $5.useState;
                var b6 = __webpack_require__(519427),
                    c6 = b6.aD,
                    M5 = b6.EH,
                    V5 = b6.p6,
                    N5 = b6.Fl,
                    TJb = b6.cp,
                    d6 = b6.LO,
                    U5 = b6.U5,
                    UJb = b6.rg;
                var e6 = __webpack_require__(240236).gn;
                var VJb = __webpack_require__,
                    WJb = VJb(993864),
                    E5 = VJb.n_x(WJb)();
                var XJb = __webpack_require__(358579).Z;
                var f6 = __webpack_require__(635872),
                    g6 = f6.Om,
                    h6 = f6.kq,
                    YJb = f6.YN;
                var NJb = __webpack_require__(204358).createPortal;
                var ZJb = H5(a => {
                        var b, c, d = "rtl" === a.sheet.direction;
                        d = {
                            H2wykw: !d,
                            UweldA: d
                        };
                        const [e] = SJb(() => Vy()), f = {
                            get: I5(() => {
                                var g;
                                const h = null === e || void 0 === e ? void 0 : null === (g = e.current) || void 0 === g ? void 0 : g.getBoundingClientRect();
                                var k, l;
                                g = {
                                    top: 0,
                                    left: 0,
                                    width: null !== (k = null === h || void 0 === h ? void 0 : h.width) && void 0 !== k ? k : 0,
                                    height: null !== (l = null === h || void 0 === h ? void 0 : h.height) && void 0 !== l ? l : 0
                                };
                                return __c.Wt(g)
                            }, [e])
                        };
                        return Z5("div", {
                            className: E5("nMvVqA", d),
                            children: [Z5("div", {
                                ref: XJb(a.xd, e),
                                className: "_0YOFPg",
                                children: [C5(a.yr, { ...a,
                                    viewport: f
                                }), C5("div", {
                                    className: E5("Gdl7fQ", d),
                                    children: null === (c = a.uva) || void 0 === c ? void 0 : null === (b = c.get()) || void 0 === b ? void 0 : b.map((g, h) => C5(g, {}, h))
                                })]
                            }), "visible" === a.rpb && Z5(Y5, {
                                children: [C5("div", {
                                    className: E5("_32sKQw", d),
                                    children: C5(a.fTa, { ...a
                                    })
                                }), C5("div", {
                                    className: E5("xdIsTQ", d),
                                    children: C5(a.jTa, { ...a
                                    })
                                }), C5("div", {
                                    className: E5("rsTRSA", d),
                                    children: C5(a.hTa, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    $Jb = H5(a => {
                        a = a.content;
                        __c.w("text2" === a.type || "text3" === a.type);
                        switch (a.type) {
                            case "text2":
                                return a.value.Y;
                            case "text3":
                                return __c.zq.oa(a.value).cells.Y();
                            default:
                                throw new D(a);
                        }
                    });
                var fJb = cJb((a, b) => {
                    const c = a.value;
                    ({
                        Di: a
                    } = lg(__c.Yg, a.context.attrs));
                    const d = document.createElement("div");
                    "wrap" === a && (d.className = "dt4Dlg", d.style.overflowWrap = "break-word");
                    d.innerText = c;
                    b.appendChild(d)
                });
                var hJb = a => cJb((b, c) => {
                        const d = b.content;
                        b = b.context;
                        if (d.value.isEmpty)
                            for (; c.lastChild;) c.lastChild.remove();
                        else({
                            Di: b
                        } = lg(__c.Yg, b.attrs)), "wrap" === b && (c = c.appendChild(document.createElement("div")), c.className = "dt4Dlg"), a.render({
                            container: c,
                            text: d.value,
                            Ga: void 0,
                            writingMode: 1,
                            rd: "start",
                            Tf: aKb(d, b)
                        })
                    }),
                    aKb = g6((a, b) => {
                        if ("wrap" === b) return [];
                        a = a.value.Y.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: V5.structural
                    });
                var D5 = class a extends a6 {
                    static j(b) {
                        P(b, {
                            Di: N5
                        })
                    }
                    get Di() {
                        return lg(__c.Yg, this.props.context.attrs).Di
                    }
                    render() {
                        var b = this.props.content;
                        const c = this.props.context;
                        if (b.value.isEmpty) return null;
                        b = C5(this.props.Yh, {
                            content: b,
                            ua: c.ua,
                            col: c.col,
                            Di: this.Di
                        }, this.key++);
                        return "wrap" === this.Di ? C5("div", {
                            className: "dt4Dlg",
                            children: b
                        }) : C5(Y5, {
                            children: b
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        a.j(this);
                        this.key = 0
                    }
                };
                D5 = e6([Mc], D5);
                var bKb = 5 * __c.gA,
                    cKb = 3 * __c.gA;
                var mJb = class {
                    Tn(a, b) {
                        return "large" === b ? bKb * a : cKb * a
                    }
                    constructor() {
                        this.K4a = g6((a, b) => {
                            var c, d;
                            b = b.get();
                            return null != b && a.layout.rows.count() === ((null === (c = b.rows) || void 0 === c ? void 0 : c.size) || 0) && a.layout.cols.count() === ((null === (d = b.columns) || void 0 === d ? void 0 : d.size) || 0)
                        });
                        this.bMa = h6(a => {
                            var b;
                            return new Set((null === (b = a.get()) || void 0 === b ? void 0 : b.columns) || [])
                        }, {
                            equals: __c.ns
                        });
                        this.dMa = h6(a => {
                            var b;
                            return new Set((null === (b = a.get()) || void 0 === b ? void 0 : b.rows) || [])
                        }, {
                            equals: __c.ns
                        });
                        this.M2a =
                            g6((a, b) => {
                                var {
                                    cells: c
                                } = b.get() || {};
                                if (!c || 0 === c.size) return new Set;
                                b = this.bMa(b);
                                const d = new Set;
                                for (const e of c) {
                                    c = a.layout.cells.get(e.ua, e.column);
                                    for (const f of XIb(c ? c.span.$b : e.column, c ? c.span.Oc : e.column, a.layout.cols))(0 === b.size || b.has(f)) && d.add(f)
                                }
                                return d
                            }, {
                                equals: __c.ns
                            });
                        this.N2a = g6((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c || 0 === c.size) return new Set;
                            b = this.dMa(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.ua, e.column);
                                for (const f of XIb(c ? c.span.ec : e.ua, c ? c.span.Zc :
                                        e.ua, a.layout.rows))(0 === b.size || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.ns
                        })
                    }
                };
                var J5 = class a extends a6 {
                    static j(b) {
                        P(b, {
                            vd: N5,
                            qp: N5,
                            psa: N5
                        })
                    }
                    get vd() {
                        return "rtl" === this.props.sheet.direction
                    }
                    get qp() {
                        var b;
                        const c = null === (b = this.props.hs) || void 0 === b ? void 0 : b.get();
                        if (null != c && 0 !== c.length) return new __c.HF(c)
                    }
                    get psa() {
                        var b, c, d;
                        return null === (c = (d = this.props).J1a) || void 0 === c ? void 0 : null === (b = c.call(d)) || void 0 === b ? void 0 : b.get()
                    }
                    render() {
                        return C5(__c.sA, {
                            ap: "light",
                            light: "light",
                            Ir: "light",
                            dark: "light",
                            children: this.OWa
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        a.j(this);
                        this.onMouseMove =
                            c6(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    scale: f = 1
                                } = this.props;
                                null === d || void 0 === d ? void 0 : d(c, e, "column", f)
                            });
                        this.onMouseLeave = c6(c => {
                            var d, e;
                            null === (d = (e = this.props).onMouseLeave) || void 0 === d ? void 0 : d.call(e, c)
                        });
                        this.zab = () => {
                            const {
                                sheet: c,
                                Tn: d,
                                VC: e,
                                scale: f = 1
                            } = this.props;
                            let g = -1;
                            return Z5("div", {
                                style: void 0,
                                className: E5("Vt2_4w", {
                                    jNbTIg: !this.vd,
                                    gtA7Dw: this.vd
                                }, {
                                    Tn3nUw: void 0
                                }),
                                onMouseMove: this.onMouseMove,
                                onMouseLeave: this.onMouseLeave,
                                children: [c.layout.cols.map(h => {
                                    g++;
                                    return C5(dKb, {
                                        col: h,
                                        label: __c.WC(g),
                                        Tn: d,
                                        VC: e,
                                        scale: f
                                    }, h.id)
                                }), void 0]
                            })
                        };
                        this.OWa = c => {
                            var d;
                            const e = {
                                jNbTIg: !this.vd,
                                gtA7Dw: this.vd
                            };
                            return Z5("div", {
                                ref: null === (d = this.qp) || void 0 === d ? void 0 : d.Tk,
                                className: E5("xhBZaw", e, c.className),
                                children: [void 0, this.zab()]
                            })
                        }
                    }
                };
                J5 = e6([Mc], J5);
                var K5 = class a extends a6 {
                    static j(b) {
                        P(b, {
                            vd: N5,
                            qp: N5,
                            psa: N5
                        })
                    }
                    get vd() {
                        return "rtl" === this.props.sheet.direction
                    }
                    get qp() {
                        var b;
                        const c = null === (b = this.props.hs) || void 0 === b ? void 0 : b.get();
                        if (null != c && 0 !== c.length) return new __c.HF(c)
                    }
                    get psa() {
                        var b, c, d;
                        return null === (c = (d = this.props).J1a) || void 0 === c ? void 0 : null === (b = c.call(d)) || void 0 === b ? void 0 : b.get()
                    }
                    render() {
                        return C5(__c.sA, {
                            ap: "light",
                            light: "light",
                            Ir: "light",
                            dark: "light",
                            children: this.kbb
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        a.j(this);
                        this.onMouseMove =
                            c6(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    scale: f = 1
                                } = this.props;
                                null === d || void 0 === d ? void 0 : d(c, e, "row", f)
                            });
                        this.onMouseLeave = c6(c => {
                            var d, e;
                            null === (d = (e = this.props).onMouseLeave) || void 0 === d ? void 0 : d.call(e, c)
                        });
                        this.Iab = () => {
                            const {
                                sheet: c,
                                VC: d,
                                Tn: e,
                                scale: f = 1
                            } = this.props;
                            let g = -1;
                            return Z5("div", {
                                style: void 0,
                                className: E5("_93roJg", {
                                    jNbTIg: !this.vd,
                                    gtA7Dw: this.vd
                                }, {
                                    Tn3nUw: void 0
                                }),
                                onMouseMove: this.onMouseMove,
                                onMouseLeave: this.onMouseLeave,
                                children: [c.rows.map(h => {
                                    g++;
                                    return C5(eKb, {
                                        ua: h,
                                        label: `${g+
1}`,
                                        VC: d,
                                        Tn: e,
                                        scale: f
                                    }, h.id)
                                }), void 0]
                            })
                        };
                        this.kbb = c => {
                            var d;
                            const e = {
                                jNbTIg: !this.vd,
                                gtA7Dw: this.vd
                            };
                            return Z5("div", {
                                ref: null === (d = this.qp) || void 0 === d ? void 0 : d.Tk,
                                className: E5("An9VeA", e, c.className),
                                children: [void 0, this.Iab()]
                            })
                        }
                    }
                };
                K5 = e6([Mc], K5);
                var dKb = H5(a => {
                        const {
                            label: b,
                            col: c,
                            VC: d,
                            Tn: e,
                            scale: f = 1
                        } = a;
                        a = e(f);
                        const g = YJb(() => d(c));
                        return C5("div", {
                            className: E5("_83Rssw", "d2uLIA", F5(g)),
                            style: {
                                width: c.width * f,
                                height: a
                            },
                            children: C5(jJb, {
                                label: b,
                                width: c.width,
                                height: e(1),
                                scale: f,
                                Wya: g
                            })
                        })
                    }),
                    eKb = H5(a => {
                        const {
                            label: b,
                            ua: c,
                            Tn: d,
                            VC: e,
                            scale: f = 1
                        } = a;
                        a = d(f);
                        const g = YJb(() => e(c));
                        return C5("div", {
                            className: E5("_83Rssw", "JhBzyw", F5(g)),
                            style: {
                                width: a,
                                height: c.height * f
                            },
                            children: C5(jJb, {
                                label: b,
                                width: d(1),
                                height: c.height,
                                scale: f,
                                Wya: g
                            })
                        })
                    });
                var fKb = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var gKb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var kJb = __c.ZR({
                    Xl: fKb,
                    medium: gKb
                });
                var L5 = class a extends a6 {
                    static j(b) {
                        P(b, {
                            Kd: N5.struct
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        a.j(this)
                    }
                    render() {
                        return C5(this.props.yr, {
                            sheet: this.props.element.config,
                            hs: this.props.hs,
                            Pz: this.props.Pz,
                            Tz: this.props.Tz,
                            scaleFactor: this.props.scaleFactor,
                            Kd: this.Kd,
                            Yh: this.props.Yh,
                            eU: void 0
                        })
                    }
                    get Kd() {
                        const b = this.props.Ud,
                            c = this.props.element.altText;
                        return c ? c.Xd && !b ? {
                            "aria-hidden": !0
                        } : {
                            "aria-label": c.text
                        } : {}
                    }
                };
                L5 = e6([Mc], L5);
                var hKb = class {
                    constructor() {
                        this.Vaa = new WeakMap;
                        this.c2a = a => this.Vaa.get(a);
                        this.FMa = (a, b) => {
                            this.Vaa.set(a, b)
                        };
                        this.xWa = (a, b) => {
                            const c = this.Vaa.get(a);
                            c && c.Fb === b.Fb && c.ac === b.ac && c.Tg === b.Tg && this.Vaa.delete(a)
                        }
                    }
                };
                var wJb = H5(a => {
                        const b = a.Fb,
                            c = a.item,
                            d = a.Tg,
                            e = a.ac,
                            f = a.De,
                            g = a.col,
                            h = a.ua,
                            k = a.content,
                            l = a.Di;
                        a = a.Ru;
                        __c.w("text3" === k.type);
                        __c.SF(a, __c.zq.oa(k.value), (p, q) => __c.zq.domain.Mb(p, q));
                        [a] = SJb(() => new iKb(c, e, N5(() => b.zoom)));
                        const m = G5(() => new __c.k2a(d, c), [d, c]),
                            n = G5(() => {
                                var p = new __c.l2a(m, g, h);
                                return new __c.m2a(p, k.value)
                            }, [m, g, h, k.value]);
                        return C5(f, {
                            Fb: b,
                            Hg: n,
                            text: k.value,
                            ac: a,
                            Tf: "wrap" === l ? "pre-wrap" : "nowrap"
                        })
                    }),
                    iKb = class extends __c.wS {
                        static j(a) {
                            P(a, {
                                width: d6.ref,
                                v1: N5
                            })
                        }
                        get bC() {
                            return this.Uaa.bC
                        }
                        get v1() {
                            const a =
                                (this.pY.width - this.Uaa.width) / 2;
                            return {
                                left: -a,
                                right: this.Uaa.width + a
                            }
                        }
                        constructor(a, b, c) {
                            super();
                            iKb.j(this);
                            this.sheet = a;
                            this.Uaa = b;
                            this.zoom = c;
                            this.width = 0;
                            this.marginWidth = void 0;
                            this.pY = new __c.VF(this.sheet, this.Uaa, {
                                zoom: this.zoom.get()
                            })
                        }
                    };
                var i6 = parseInt("4px", 10) || 4,
                    jKb = H5(({
                        sheet: a,
                        scaleFactor: b,
                        range: c,
                        ju: d,
                        lu: e
                    }) => {
                        if (null != c && (d || e)) {
                            var f;
                            b = null !== (f = null === b || void 0 === b ? void 0 : b.get()) && void 0 !== f ? f : 1;
                            if (d && e) return d = a.va(c.Zc) + c.Zc.height, a = a.ra(c.Oc) + c.Oc.width, C5("div", {
                                style: {
                                    top: d * b,
                                    width: a * b,
                                    height: i6 * b
                                },
                                className: E5("aX8dhQ", "VGcLng")
                            });
                            if (d) return c = a.ra(c.Oc) + c.Oc.width, C5("div", {
                                style: {
                                    left: c * b,
                                    width: i6 * b,
                                    height: a.height * b
                                },
                                className: E5("aX8dhQ", "gl1RPg")
                            });
                            if (e) return c = a.va(c.Zc) + c.Zc.height, C5("div", {
                                style: {
                                    top: c *
                                        b,
                                    width: a.width * b,
                                    height: i6 * b
                                },
                                className: E5("aX8dhQ", "VGcLng")
                            })
                        }
                    });
                var j6 = ({
                        sheet: a,
                        range: b,
                        scaleFactor: c,
                        children: d
                    }) => {
                        const e = B5();
                        qJb({
                            sheet: a,
                            scaleFactor: c,
                            range: b,
                            xd: e,
                            CEa: e
                        });
                        return C5("div", {
                            ref: e,
                            className: E5("nstn2A", "rtl" === a.direction ? "NgnL2Q" : "f8jAGQ"),
                            children: d
                        })
                    },
                    kKb = ({
                        sheet: a,
                        range: b,
                        scaleFactor: c,
                        children: d
                    }) => {
                        const e = B5(),
                            f = B5();
                        qJb({
                            sheet: a,
                            scaleFactor: c,
                            range: b,
                            xd: e,
                            CEa: f
                        });
                        a = "rtl" === a.direction ? "NgnL2Q" : "f8jAGQ";
                        return C5("div", {
                            ref: e,
                            className: E5("nstn2A", a, "_9sodyg"),
                            children: C5("div", {
                                ref: f,
                                className: E5("nstn2A", a),
                                children: d
                            })
                        })
                    };
                var sJb = H5(({
                        sheet: a,
                        children: b,
                        XA: c
                    }) => {
                        const d = I5(f => {
                                c.Bra(a, f)
                            }, [c, a]),
                            e = I5(f => {
                                null != f ? c.ZH.set(a, f) : c.ZH.delete(a)
                            }, [c, a]);
                        return C5(__c.Phb, {
                            direction: "rtl" === a.config.direction ? "rtl" : "ltr",
                            onScroll: d,
                            ov: e,
                            children: b
                        })
                    }),
                    rJb = class {
                        Bra(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.r_.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.ZH = new WeakMap;
                            this.r_ = d6.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = c6((b, c) => {
                                b = this.ZH.get(b);
                                null === b || void 0 === b ? void 0 : b.scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var vJb = H5(a => {
                    const b = a.item,
                        c = a.hs,
                        d = a.measureRef,
                        e = a.scaleFactor,
                        f = a.C3a,
                        g = a.ac,
                        h = a.Pz,
                        k = a.Tz,
                        l = a.yr,
                        m = a.aJ,
                        n = a.Yh,
                        p = a.Ud;
                    a = a.XA;
                    const q = G5(() => {
                            const t = b.altText;
                            return t ? t.Xd && !p ? {
                                "aria-hidden": !0
                            } : {
                                "aria-label": t.text
                            } : {}
                        }, [b, p]),
                        r = G5(() => H5(({
                            sheet: t,
                            range: u,
                            ju: v,
                            lu: x
                        }) => C5(j6, {
                            sheet: t,
                            range: u,
                            scaleFactor: e,
                            children: C5(jKb, {
                                sheet: t,
                                scaleFactor: e,
                                range: u,
                                ju: v,
                                lu: x
                            })
                        })), [e]);
                    pJb(() => M5(() => {}), [b, g.width, a]);
                    return C5("div", {
                        ref: d,
                        className: "E8r86A",
                        style: {
                            width: Math.min(g.width, b.F)
                        },
                        children: C5(m, {
                            sheet: b,
                            children: C5("div", {
                                ref: f,
                                className: "cXTiJA",
                                style: {
                                    width: b.F,
                                    height: b.P
                                },
                                children: C5(l, {
                                    sheet: b.config,
                                    hs: c,
                                    scaleFactor: e,
                                    Pz: h,
                                    Tz: k,
                                    Kd: q,
                                    Yh: n,
                                    eU: r
                                })
                            })
                        })
                    })
                });
                var lKb = H5(({
                    page: a,
                    range: b,
                    SA: c
                }) => {
                    const d = yJb(a.sheet, b);
                    return C5("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((e, f) => null == d ? c(e, f) : __c.Ut(__c.Wt(e)).Ep(d) && c(e, f))
                    })
                });
                var mKb = new __c.IS,
                    k6 = a => bKb * a,
                    nKb = () => "primary-default",
                    zJb = H5(({
                        page: a,
                        hs: b,
                        Pz: c,
                        Tz: d,
                        S6: e,
                        scaleFactor: f,
                        viewport: g,
                        Ccb: h,
                        yr: k,
                        Yh: l,
                        SA: m,
                        kaa: n,
                        bib: p,
                        ahb: q,
                        $gb: r
                    }) => {
                        var t = "rtl" === a.sheet.direction,
                            u;
                        const v = null !== (u = null === f || void 0 === f ? void 0 : f.get()) && void 0 !== u ? u : 1;
                        u = G5(() => H5(({
                            sheet: x,
                            range: y,
                            ju: z,
                            lu: A
                        }) => Z5(Y5, {
                            children: [C5(j6, {
                                sheet: a.sheet,
                                range: y,
                                scaleFactor: f,
                                children: C5(jKb, {
                                    sheet: x,
                                    scaleFactor: f,
                                    range: y,
                                    ju: z,
                                    lu: A
                                })
                            }), Z5(kKb, {
                                sheet: a.sheet,
                                range: y,
                                scaleFactor: f,
                                children: [p && C5(p, {}),
                                    m && C5(lKb, {
                                        page: a,
                                        SA: m,
                                        range: y
                                    }), r && C5(r, {}), n && n()
                                ]
                            }), q && y && C5(j6, {
                                sheet: a.sheet,
                                range: y,
                                scaleFactor: f,
                                children: C5(q, {
                                    range: y
                                })
                            })]
                        })), [a, f, p, m, r, n, q]);
                        b = C5(k, {
                            sheet: a.sheet,
                            hs: b,
                            Pz: c,
                            Tz: d,
                            S6: e,
                            scaleFactor: f,
                            viewport: g,
                            Yh: l,
                            eU: u
                        });
                        t = Z5("div", {
                            className: "OsKKIQ",
                            children: [C5("div", {
                                className: "VDFv_A",
                                children: b
                            }), C5("div", {
                                className: "_688KWg",
                                children: C5(lJb, {
                                    vd: t,
                                    highlight: !1,
                                    Tn: k6,
                                    scale: v
                                })
                            }), C5("div", {
                                className: "m0cT1w",
                                children: C5(J5, {
                                    sheet: a.sheet,
                                    scale: v,
                                    Tn: k6,
                                    VC: nKb,
                                    OD: mKb
                                })
                            }), C5("div", {
                                className: "zm537g",
                                children: C5(K5, {
                                    sheet: a.sheet,
                                    scale: v,
                                    Tn: k6,
                                    VC: nKb,
                                    OD: mKb
                                })
                            })]
                        });
                        return h ? t : b
                    });
                var O5 = (a, b) => `${a.column.id}-${a.boundary}:${b.ua.id}-${b.boundary}`,
                    pKb = class {
                        constructor() {
                            this.OMa = oKb;
                            this.Z1a = h6(a => {
                                const b = new Map;
                                let c = 0;
                                a.layout.rows.forEach(d => {
                                    const e = c,
                                        f = e + d.height;
                                    b.set(d, {
                                        start: e,
                                        end: f
                                    });
                                    c = f
                                });
                                return b
                            });
                            this.y1a = h6(a => {
                                const b = new Map;
                                var c = "rtl" === a.direction;
                                const d = c ? -1 : 1;
                                let e = 0;
                                c && (c = a.layout.cols.last(), e = null != c ? a.ra(c) + c.width : 0);
                                a.layout.cols.forEach(f => {
                                    const g = e,
                                        h = g + f.width * d;
                                    b.set(f, {
                                        start: g,
                                        end: h
                                    });
                                    e = h
                                });
                                return b
                            })
                        }
                    },
                    qKb = class {
                        constructor() {
                            this.Xab =
                                g6((a, b, c) => {
                                    const d = a.layout.cells.get(c, b);
                                    var e, f, g = T5(null !== (e = null === d || void 0 === d ? void 0 : d.span.$b) && void 0 !== e ? e : b, null !== (f = null === d || void 0 === d ? void 0 : d.span.Oc) && void 0 !== f ? f : b, a.layout.cols),
                                        h, k;
                                    e = T5(null !== (h = null === d || void 0 === d ? void 0 : d.span.ec) && void 0 !== h ? h : c, null !== (k = null === d || void 0 === d ? void 0 : d.span.Zc) && void 0 !== k ? k : c, a.layout.rows);
                                    var l = d ? c === d.span.ec : !0;
                                    const m = d ? c === d.span.Zc : !0,
                                        n = d ? b === d.span.$b : !0;
                                    f = d ? b === d.span.Oc : !0;
                                    if (n || f || l || m) {
                                        h = {};
                                        var p = a.layout.rows.vc(c),
                                            q = a.layout.rows.next(c),
                                            r = a.layout.cols.vc(b);
                                        k = a.layout.cols.next(b);
                                        if (l) {
                                            l = IJb(a, b, c);
                                            const aa = b && p && a.layout.cells.get(p, b);
                                            p = b && p && JJb(a, b, p);
                                            var t, u;
                                            const la = T5(null !== (t = null === aa || void 0 === aa ? void 0 : aa.span.$b) && void 0 !== t ? t : b, null !== (u = null === aa || void 0 === aa ? void 0 : aa.span.Oc) && void 0 !== u ? u : b, a.layout.cols);
                                            var v, x;
                                            t = a.layout.cols.cf(null !== (v = null === d || void 0 === d ? void 0 : d.span.$b) && void 0 !== v ? v : b, null !== (x = null === aa || void 0 === aa ? void 0 : aa.span.$b) && void 0 !== x ? x : b);
                                            h.va = P5(l, p, g, la, t)
                                        }
                                        if (m) {
                                            v = JJb(a, b, c);
                                            x = b && q &&
                                                a.layout.cells.get(q, b);
                                            t = b && q && IJb(a, b, q);
                                            var y, z;
                                            u = T5(null !== (y = null === x || void 0 === x ? void 0 : x.span.$b) && void 0 !== y ? y : b, null !== (z = null === x || void 0 === x ? void 0 : x.span.Oc) && void 0 !== z ? z : b, a.layout.cols);
                                            var A, F;
                                            y = a.layout.cols.cf(null !== (A = null === d || void 0 === d ? void 0 : d.span.$b) && void 0 !== A ? A : b, null !== (F = null === x || void 0 === x ? void 0 : x.span.$b) && void 0 !== F ? F : b);
                                            h.Ea = P5(v, t, g, u, y)
                                        }
                                        if (n) {
                                            g = KJb(a, b, c);
                                            A = r && c && a.layout.cells.get(c, r);
                                            F = r && c && LJb(a, r, c);
                                            var G, I;
                                            y = T5(null !== (G = null === A || void 0 === A ? void 0 : A.span.ec) &&
                                                void 0 !== G ? G : c, null !== (I = null === A || void 0 === A ? void 0 : A.span.Zc) && void 0 !== I ? I : c, a.layout.rows);
                                            var J, K;
                                            G = a.layout.rows.cf(null !== (J = null === d || void 0 === d ? void 0 : d.span.ec) && void 0 !== J ? J : c, null !== (K = null === A || void 0 === A ? void 0 : A.span.ec) && void 0 !== K ? K : c);
                                            h.ra = P5(g, F, e, y, G)
                                        }
                                        if (f) {
                                            b = LJb(a, b, c);
                                            J = k && c && a.layout.cells.get(c, k);
                                            K = k && c && KJb(a, k, c);
                                            var L, Q;
                                            G = T5(null !== (L = null === J || void 0 === J ? void 0 : J.span.ec) && void 0 !== L ? L : c, null !== (Q = null === J || void 0 === J ? void 0 : J.span.Zc) && void 0 !== Q ? Q : c, a.layout.rows);
                                            var S,
                                                X;
                                            a = a.layout.rows.cf(null !== (S = null === d || void 0 === d ? void 0 : d.span.ec) && void 0 !== S ? S : c, null !== (X = null === J || void 0 === J ? void 0 : J.span.ec) && void 0 !== X ? X : c);
                                            h.Ka = P5(b, K, e, G, a)
                                        }
                                        return h
                                    }
                                }, {
                                    equals: MJb
                                });
                            this.AXa = (a, b, c) => {
                                const d = new Map;
                                a.forEach(({
                                    ra: e,
                                    va: f,
                                    Ka: g,
                                    Ea: h
                                }, k) => {
                                    e && d.set(e.color, (d.get(e.color) || 0) + 1);
                                    f && d.set(f.color, (d.get(f.color) || 0) + 1);
                                    g && c && k.includes(c.id) && d.set(g.color, (d.get(g.color) || 0) + 1);
                                    h && b && k.includes(b.id) && d.set(h.color, (d.get(h.color) || 0) + 1)
                                });
                                return d
                            }
                        }
                    },
                    oKb = new qKb,
                    GJb =
                    new pKb;
                var PJb = class {
                    constructor(a) {
                        this.J_ = a;
                        this.lWa = __c.pU;
                        this.L1a = g6((b, c, d, e) => {
                            d = d.get();
                            const f = new WeakMap;
                            for (let p = 0; p < d.length; p++) {
                                var g = d[p],
                                    h = this.G1a(b, c, g);
                                if (h) {
                                    switch (h) {
                                        case "start":
                                        case "justify":
                                            var k = d[p + 1];
                                            if (null == k || !RI(b, c, k)) continue;
                                            break;
                                        case "center":
                                            k = d[p + 1];
                                            if (null == k || !RI(b, c, k)) continue;
                                            k = d[p - 1];
                                            if (null == k || !RI(b, c, k)) continue;
                                            break;
                                        case "end":
                                            k = d[p - 1];
                                            if (null == k || !RI(b, c, k)) continue;
                                            break;
                                        default:
                                            throw new D(h);
                                    }
                                    if (k = e(c, g)) {
                                        var l = k.width + ("center" === h ? 0 : this.lWa);
                                        if (!(g.width >
                                                l)) {
                                            switch (h) {
                                                case "start":
                                                case "justify":
                                                    h = b.ra(g);
                                                    k = h + l;
                                                    break;
                                                case "center":
                                                    k = b.ra(g) + g.width / 2;
                                                    h = k - l / 2;
                                                    k += l / 2;
                                                    break;
                                                case "end":
                                                    k = b.ra(g) + g.width;
                                                    h = k - l;
                                                    break;
                                                default:
                                                    throw new D(h);
                                            }
                                            for (l = d.indexOf(g); 0 <= l; l--) {
                                                var m = d[l];
                                                const q = 0 > l - 1 || RI(b, c, d[l - 1]);
                                                var n;
                                                if (n = m === g || RI(b, c, m)) n = b.ra(m), n = h < n && n < k;
                                                if (n && q) f.set(m, 1);
                                                else break
                                            }
                                            for (g = d.indexOf(g) + 1; g < d.length; g++) {
                                                l = d[g];
                                                if (m = RI(b, c, l)) m = b.ra(l), m = h < m && m < k;
                                                if (m) f.set(l, 1);
                                                else break
                                            }
                                        }
                                    }
                                }
                            }
                            return f
                        });
                        this.G1a = (b, c, d) => {
                            var e, f;
                            const g = b.layout.cells.get(c,
                                d);
                            if (g && (g.ref.content.ref || g.ref.Fa.ref) && g.span.ec === g.span.Zc && g.span.$b === g.span.Oc) {
                                var {
                                    Di: h,
                                    textAlign: k
                                } = lg(__c.Yg, b.layout.attrs.get(Zg({
                                    Di: void 0,
                                    textAlign: void 0
                                }), c, d) || {});
                                if ("overflow" === h) {
                                    var l = this.J_.WC(b, c, d);
                                    return __c.QI(k, null === (e = g.ref.content.ref) || void 0 === e ? void 0 : e.type, null === (f = g.ref.Fa.ref) || void 0 === f ? void 0 : f.type, l ? () => l.du.type : void 0)
                                }
                            }
                        }
                    }
                };
                var rKb = H5(function(a) {
                    const b = a.sheet;
                    var c = a.qB;
                    const d = a.Ifb,
                        e = a.scaleFactor,
                        f = a.Gla,
                        g = a.w1a,
                        h = B5();
                    RJb(() => M5(() => {
                        const p = C(h.current);
                        var q;
                        const r = null !== (q = null === e || void 0 === e ? void 0 : e.get()) && void 0 !== q ? q : 1;
                        q = b.height;
                        p.style.width = `${b.width*r}px`;
                        p.style.height = `${q*r}px`
                    }), [h, e, b]);
                    const k = I5(p => f.L1a(b, p, d, g), [f, b, d, g]);
                    var l;
                    a = I5((p, q) => {
                        var r;
                        return null !== (l = null === (r = k(p)) || void 0 === r ? void 0 : r.get(q)) && void 0 !== l ? l : 0
                    }, [k]);
                    c = HJb(b, c, d, a);
                    a = b.width;
                    const m = b.height,
                        n = "rtl" === b.direction;
                    return C5("svg", {
                        ref: h,
                        role: "presentation",
                        className: E5("c6a1eQ", {
                            H_CtIQ: !n,
                            _8_56PQ: n
                        }),
                        viewBox: `0 0 ${a} ${m}`,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        children: c.map(({
                            lines: p,
                            color: q,
                            weight: r,
                            mj: t,
                            nj: u
                        }) => C5("path", {
                            stroke: q,
                            strokeDasharray: t,
                            strokeDashoffset: u,
                            strokeWidth: r,
                            d: p.map(({
                                p1: v,
                                p2: x
                            }) => `M ${v.x} ${v.y} L ${x.x} ${x.y}`).join(" ")
                        }, `${q}-${r}-${t}-${u}`))
                    })
                });
                var m6 = class a extends a6 {
                    static j(b) {
                        P(b, {
                            Z5: N5,
                            NPa: N5
                        })
                    }
                    render() {
                        var b;
                        const {
                            b1a: c,
                            ...d
                        } = this.props, e = this.props.sheet;
                        return Z5("div", {
                            ref: this.SMa,
                            className: E5("ZTz_iA", "ltr" === e.direction ? "TA4X7w" : "WvuqMw"),
                            children: [(null === c || void 0 === c ? void 0 : c.uVa) && C5(l6, { ...d,
                                sheet: e,
                                range: c.uVa.range,
                                ju: !0,
                                lu: !0,
                                className: "_0C8M3w",
                                d4: this.Z5
                            }), (null === c || void 0 === c ? void 0 : c.ufb) && C5(l6, { ...d,
                                sheet: e,
                                range: c.ufb.range,
                                ju: !1,
                                lu: !0,
                                className: "_7n44yg",
                                d4: this.Z5
                            }), (null === c || void 0 === c ? void 0 : c.O2a) && C5(l6, { ...d,
                                sheet: e,
                                range: c.O2a.range,
                                ju: !0,
                                lu: !1,
                                className: "fF5r6w",
                                d4: this.Z5
                            }), C5(l6, { ...d,
                                sheet: e,
                                range: null === c || void 0 === c ? void 0 : null === (b = c.Seb) || void 0 === b ? void 0 : b.range,
                                ju: !1,
                                lu: !1,
                                className: "llILYw",
                                d4: this.NPa
                            })]
                        })
                    }
                    componentDidMount() {
                        const b = M5(() => {
                            var c = this.props,
                                d = c.scaleFactor;
                            c = c.sheet;
                            const e = this.SMa.current;
                            e && (d = d ? d.get() : 1, e.style.width = `${c.width*d}px`, e.style.height = `${c.height*d}px`)
                        });
                        __c.vc(this, [b])
                    }
                    get Z5() {
                        return {
                            type: "excluded"
                        }
                    }
                    get NPa() {
                        return {
                            type: "hidden",
                            isVisible: this.kWa
                        }
                    }
                    constructor(...b) {
                        super(...b);
                        a.j(this);
                        this.SMa = Vy();
                        this.kWa = (c, d) => {
                            var e;
                            const f = this.props.sheet;
                            var g = this.props.b1a;
                            g = null === g || void 0 === g ? void 0 : null === (e = g.Seb) || void 0 === e ? void 0 : e.range;
                            return null == g ? !0 : 0 >= f.layout.cols.cf(g.$b, c) && 0 >= f.layout.cols.cf(c, g.Oc) && 0 >= f.layout.rows.cf(g.ec, d) && 0 >= f.layout.rows.cf(d, g.Zc)
                        }
                    }
                };
                m6 = e6([Mc], m6);
                var l6 = class a extends a6 {
                    static j(b) {
                        P(b, {
                            QMa: N5
                        })
                    }
                    get QMa() {
                        const b = this.props.viewport,
                            c = this.props.ju,
                            d = this.props.lu;
                        return null == b || !c && !d ? b : N5(() => {
                            const e = __c.du(b.get());
                            return __c.Wt({
                                top: d ? 0 : e.top,
                                left: c ? 0 : e.left,
                                width: e.width,
                                height: e.height
                            })
                        })
                    }
                    render() {
                        const b = this.props.sheet,
                            c = this.props.range,
                            d = this.props.d4,
                            e = this.props.eU,
                            f = this.props.ju,
                            g = this.props.lu;
                        return Z5("div", {
                            ref: this.hpa,
                            className: E5("i0YQww", this.props.className),
                            children: [C5("div", {
                                ref: this.tJa,
                                className: "vUKoKg",
                                children: C5("div", {
                                    ref: this.uJa,
                                    children: C5(n6, {
                                        sheet: b,
                                        viewport: this.QMa,
                                        bounds: "hidden" === (null === d || void 0 === d ? void 0 : d.type) ? void 0 : c,
                                        WX: "hidden" === (null === d || void 0 === d ? void 0 : d.type) ? d.isVisible : void 0,
                                        hs: this.props.hs,
                                        AB: this.props.AB,
                                        Vda: this.props.Vda,
                                        Yh: this.props.Yh,
                                        EV: this.props.EV,
                                        scaleFactor: this.props.scaleFactor
                                    })
                                })
                            }), e && C5(e, {
                                sheet: b,
                                range: c,
                                ju: f,
                                lu: g
                            })]
                        })
                    }
                    componentDidMount() {
                        const b = M5(() => {
                                var h = this.props,
                                    k = h.scaleFactor,
                                    l = h.sheet;
                                const m = h.range;
                                var n = this.hpa.current;
                                const p =
                                    this.tJa.current;
                                h = this.uJa.current;
                                k = k ? k.get() : 1;
                                const q = m ? l.ra(m.Oc) + m.Oc.width - l.ra(m.$b) : l.width,
                                    r = m ? l.va(m.Zc) + m.Zc.height - l.va(m.ec) : l.height;
                                n && (n.style.width = `${q*k}px`, n.style.height = `${r*k}px`);
                                p && (p.style.width = `${q*k}px`, p.style.height = `${r*k}px`);
                                n = "rtl" === l.direction;
                                n = m ? l.ra(m.$b) * k * (n ? 1 : -1) : 0;
                                l = m ? -l.va(m.ec) * k : 0;
                                h && (h.style.transform = `translate(${n}px, ${l}px)`)
                            }),
                            c = this.props.sheet;
                        var d = this.props.S6;
                        const e = this.props.ju,
                            f = this.props.lu,
                            g = e || f ? null === d || void 0 === d ? void 0 : d(c, e,
                                f) : void 0;
                        d = M5(() => {
                            const h = this.hpa.current;
                            if (null != h) {
                                var k = e || f ? "sticky" : "relative",
                                    l = f ? "0px" : "unset",
                                    m = e ? "0px" : "unset",
                                    n = e ? "0px" : "unset",
                                    p = "rtl" === c.direction;
                                if (null == g) h.style.position = k, h.style.top = l, h.style.left = p ? "unset" : m, h.style.right = p ? n : "unset";
                                else {
                                    const x = g.get();
                                    var q;
                                    h.style.position = null !== (q = x.position) && void 0 !== q ? q : k;
                                    var r;
                                    h.style.top = null !== (r = x.top) && void 0 !== r ? r : l;
                                    var t;
                                    h.style.left = p ? "unset" : null !== (t = x.left) && void 0 !== t ? t : m;
                                    var u;
                                    h.style.right = p ? null !== (u = x.right) && void 0 !==
                                        u ? u : n : "unset";
                                    var v;
                                    h.style.transform = null !== (v = x.transform) && void 0 !== v ? v : "unset"
                                }
                            }
                        });
                        __c.vc(this, [b, d])
                    }
                    constructor(...b) {
                        super(...b);
                        a.j(this);
                        this.hpa = Vy();
                        this.tJa = Vy();
                        this.uJa = Vy()
                    }
                };
                l6 = e6([Mc], l6);
                var sKb = class {
                        constructor() {
                            this.cells = new Map;
                            this.oqa = (a, b, c) => {
                                let d = this.cells.get(a);
                                null == d && (d = new Map, this.cells.set(a, d));
                                d.set(b, c);
                                return () => {
                                    const e = this.cells.get(a);
                                    null != e && (null === e || void 0 === e ? void 0 : e.get(b)) === c && (e.delete(b), 0 === e.size && this.cells.delete(a))
                                }
                            };
                            this.getContentSize = (a, b) => {
                                var c, d;
                                return null === (d = this.cells.get(a)) || void 0 === d ? void 0 : null === (c = d.get(b)) || void 0 === c ? void 0 : c.rza
                            }
                        }
                    },
                    n6 = class a extends a6 {
                        static j(b) {
                            P(b, {
                                HI: d6.shallow,
                                qp: N5,
                                bounds: N5,
                                qB: N5({
                                    equals: V5.shallow
                                }),
                                hua: N5({
                                    equals: V5.shallow
                                }),
                                qxa: c6,
                                S4: c6.bound
                            })
                        }
                        get qp() {
                            var b;
                            const c = null === (b = this.props.hs) || void 0 === b ? void 0 : b.get();
                            if (null != c && 0 !== c.length) return new __c.HF(c)
                        }
                        render() {
                            var b;
                            return Z5("div", {
                                ref: XJb(this.xd, null === (b = this.qp) || void 0 === b ? void 0 : b.Tk),
                                children: [C5("div", {
                                    ref: this.Cga,
                                    className: "_5YlOqQ"
                                }), C5("div", {
                                    ref: this.Ega,
                                    className: "_XCmKw"
                                }), this.HI.map(c => c.v$a), C5(this.Wda, {})]
                            })
                        }
                        componentDidMount() {
                            const b = U5(() => [this.props.sheet, this.hua, this.qB], ([e, f, g], h) => {
                                    [h] = h || [];
                                    e !==
                                        h && this.yWa();
                                    this.qxa(f, g)
                                }, {
                                    fireImmediately: !0
                                }),
                                c = M5(() => {
                                    var e = this.props,
                                        f = e.scaleFactor;
                                    e = e.sheet;
                                    const g = this.xd.current;
                                    g && (f = f ? f.get() : 1, g.style.width = `${e.width*f}px`, g.style.height = `${e.height*f}px`)
                                }),
                                d = this.HI.map(e => OJb(e));
                            __c.vc(this, [c, b, ...d])
                        }
                        get bounds() {
                            const b = this.props.sheet,
                                c = this.props.bounds;
                            var d, e, f, g;
                            return {
                                $b: null !== (d = null === c || void 0 === c ? void 0 : c.$b) && void 0 !== d ? d : b.layout.cols.first(),
                                Oc: null !== (e = null === c || void 0 === c ? void 0 : c.Oc) && void 0 !== e ? e : b.layout.cols.last(),
                                ec: null !== (f = null === c || void 0 === c ? void 0 : c.ec) && void 0 !== f ? f : b.layout.rows.first(),
                                Zc: null !== (g = null === c || void 0 === c ? void 0 : c.Zc) && void 0 !== g ? g : b.layout.rows.last()
                            }
                        }
                        get qB() {
                            const b = this.props.sheet;
                            var c = this.props.scaleFactor,
                                d = this.props.viewport,
                                e = null === d || void 0 === d ? void 0 : d.get();
                            if (e && (0 >= e.height || 0 >= e.width)) return new Map;
                            d = this.bounds;
                            c = c.get();
                            var f = 500 * c;
                            const g = e ? e.tl.y - f : d.ec ? b.va(d.ec) : 0;
                            e = e ? e.br.y + f : d.Zc ? b.va(d.Zc) + d.Zc.height : 0;
                            f = new Map;
                            for (let h = d.ec; null != h && null != d.Zc && 0 >=
                                b.layout.rows.cf(h, d.Zc); h = b.layout.rows.next(h)) {
                                const k = b.va(h);
                                if (!(k + h.height < g)) {
                                    if (k > e) break;
                                    f.set(h, k * c)
                                }
                            }
                            return f
                        }
                        get hua() {
                            const b = this.props.sheet;
                            var c = this.props.scaleFactor,
                                d = this.props.viewport,
                                e = null === d || void 0 === d ? void 0 : d.get();
                            if (e && (0 >= e.height || 0 >= e.width)) return new Map;
                            d = this.bounds;
                            c = c.get();
                            var f = 100 * c;
                            const g = e ? e.tl.x - f : d.$b ? b.ra(d.$b) : 0;
                            e = e ? e.br.x + f : d.Oc ? b.ra(d.Oc) + d.Oc.width : 0;
                            f = new Map;
                            for (let h = d.$b; null != h && null != d.Oc && 0 >= b.layout.cols.cf(h, d.Oc); h = b.layout.cols.next(h)) {
                                const k =
                                    b.ra(h);
                                if (!(k + h.width < g)) {
                                    if (k > e) break;
                                    f.set(h, k * c)
                                }
                            }
                            return f
                        }
                        yWa() {
                            const b = C(this.Cga.current),
                                c = C(this.Ega.current);
                            b.innerHTML = "";
                            c.innerHTML = "";
                            this.dua.length = 0;
                            this.HI.length = 0
                        }
                        qxa(b, c) {
                            const d = C(this.Cga.current),
                                e = C(this.Ega.current),
                                f = [],
                                g = new Map;
                            for (const h of this.dua) c.has(h.ua) ? g.set(h.ua, h) : f.push(h);
                            for (const [h, k] of c) c = g.get(h) || f.pop(), c || (c = new tKb(this.S4, h), d.appendChild(c.a4), e.appendChild(c.c4), this.dua.push(c)), c.update(k, h, b);
                            for (const h of f) h.hide()
                        }
                        S4(b, c) {
                            const d = this.props.EV,
                                e = this.props.sheet,
                                f = this.props.WX;
                            b = new uKb(this.props.AB, this.props.Yh, d(b, c), e, b, c, f, this.M4.oqa);
                            __c.vc(this, OJb(b));
                            this.HI.push(b);
                            return b
                        }
                        constructor(...b) {
                            super(...b);
                            a.j(this);
                            this.xd = Vy();
                            this.Cga = Vy();
                            this.Ega = Vy();
                            this.dua = [];
                            this.HI = [];
                            this.M4 = new sKb;
                            this.Kfb = N5(() => [...this.qB.keys()].sort((c, d) => this.props.sheet.layout.rows.cf(c, d)), {
                                equals: __c.qs()
                            });
                            this.Hfb = N5(() => [...this.hua.keys()].sort((c, d) => this.props.sheet.layout.cols.cf(c, d)), {
                                equals: __c.qs()
                            });
                            this.Wda = H5(() => C5(this.props.Vda, {
                                qB: this.Kfb,
                                Ifb: this.Hfb,
                                w1a: this.M4.getContentSize
                            }))
                        }
                    };
                n6 = e6([Mc], n6);
                var tKb = class {
                        static j(a) {
                            P(a, {
                                update: c6
                            })
                        }
                        update(a, b, c) {
                            [this.a4, this.c4].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.ua = b;
                            for (const [d] of c) c = this.HI.get(d), c || (c = this.S4(d, b), this.HI.set(d, c), this.a4.appendChild(c.Bga), this.c4.appendChild(c.DO)), c.update(b)
                        }
                        hide() {
                            [this.a4, this.c4].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            tKb.j(this);
                            this.S4 = a;
                            this.ua = b;
                            this.a4 = document.createElement("div");
                            this.c4 = document.createElement("div");
                            this.HI = new Map
                        }
                    },
                    uKb = class {
                        static j(a) {
                            P(a, {
                                L4: d6.ref,
                                ua: d6.ref,
                                update: c6,
                                St: N5,
                                attrs: N5.struct,
                                WX: N5,
                                renderer: N5,
                                rza: N5.struct
                            })
                        }
                        update(a) {
                            a !== this.ua && (this.ua = a, this.Eba.ua = a, this.via && this.via(), this.via = this.oqa(this.ua, this.col, this))
                        }
                        get v$a() {
                            return this.L4
                        }
                        get St() {
                            const a = this.sheet.layout.cells.get(this.ua, this.col);
                            if (!a || a.span.ec === this.ua && a.span.$b === this.col) return a ? a.ref : void 0
                        }
                        get attrs() {
                            return this.sheet.layout.attrs.get(Zg({
                                Di: 0,
                                textAlign: 0,
                                direction: 0
                            }), this.ua, this.col) || {}
                        }
                        get WX() {
                            return null != this.isVisible ? this.isVisible(this.col, this.ua) : !0
                        }
                        get renderer() {
                            if (this.WX) {
                                var a = this.St;
                                if (a && (a.content.ref || a.Fa.ref)) return this.AB({
                                    context: {
                                        ua: this.ua,
                                        col: this.col,
                                        sheet: this.sheet,
                                        attrs: this.attrs
                                    },
                                    Ru: this.$na,
                                    Yh: this.Yh
                                })
                            }
                        }
                        get rza() {
                            this.sza.reportObserved();
                            var a = UJb(() => this.renderer);
                            if (a && (a = "react" === a.type ? this.OZ : this.kC, 0 !== a.childNodes.length && (a = a.childNodes[0], a instanceof HTMLElement))) return {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        }
                        constructor(a,
                            b, c, d, e, f, g, h) {
                            uKb.j(this);
                            var k, l, m, n, p, q;
                            this.AB = a;
                            this.Eba = c;
                            this.sheet = d;
                            this.col = e;
                            this.isVisible = g;
                            this.oqa = h;
                            this.Bga = document.createElement("div");
                            this.DO = document.createElement("div");
                            this.MF = document.createElement("div");
                            this.kC = document.createElement("div");
                            this.OZ = document.createElement("div");
                            this.sza = TJb("content size atom");
                            this.$na = c6(() => this.sza.reportChanged());
                            this.ua = f;
                            this.Bga.className = "_2JFriw";
                            this.DO.className = "imy9ug";
                            this.MF.className = E5("pDMp7w", {
                                _0yZ6Qg: "text3" !== (null ===
                                    (l = this.St) || void 0 === l ? void 0 : null === (k = l.content.ref) || void 0 === k ? void 0 : k.type),
                                qhF5uA: "text3" !== (null === (n = this.St) || void 0 === n ? void 0 : null === (m = n.content.ref) || void 0 === m ? void 0 : m.type) && "text2" !== (null === (q = this.St) || void 0 === q ? void 0 : null === (p = q.content.ref) || void 0 === p ? void 0 : p.type)
                            });
                            this.kC.className = "_30B9pw";
                            this.MF.appendChild(this.kC);
                            this.DO.appendChild(this.MF);
                            this.OZ.className = "G7zH2w";
                            this.via = h(this.ua, this.col, this);
                            this.Yh = r => C5(b, { ...r,
                                Ru: this.$na
                            })
                        }
                    };
                var W5 = class extends a6 {
                    render() {
                        const a = this.props.sheet,
                            b = this.props.hs,
                            c = this.props.S6,
                            d = this.props.AB,
                            e = this.props.Kd,
                            f = this.props.Yh,
                            g = this.props.viewport,
                            h = this.props.eU;
                        return C5("div", {
                            className: E5("SNkrHw", "ltr" === a.direction ? "TA4X7w" : "WvuqMw"),
                            ...e,
                            children: C5(m6, {
                                AB: d,
                                Yh: f,
                                Vda: this.Wda,
                                EV: this.EV,
                                sheet: a,
                                hs: b,
                                S6: c,
                                scaleFactor: this.scaleFactor,
                                viewport: g,
                                eU: h
                            })
                        })
                    }
                    get scaleFactor() {
                        return this.props.scaleFactor ? this.props.scaleFactor : N5(() => 1)
                    }
                    constructor(...a) {
                        super(...a);
                        this.Wda = H5(b =>
                            C5(rKb, { ...b,
                                sheet: this.props.sheet,
                                scaleFactor: this.scaleFactor,
                                Gla: this.props.Gla
                            }));
                        this.EV = (b, c) => new __c.bDa(this.props.ly, this.props.sheet, b, c, this.scaleFactor, this.Pz, this.Tz);
                        this.Pz = (b, c) => {
                            var d, e;
                            return null === (d = (e = this.props).Pz) || void 0 === d ? void 0 : d.call(e, this.props.sheet, b, c)
                        };
                        this.Tz = (b, c) => {
                            var d, e;
                            return null === (d = (e = this.props).Tz) || void 0 === d ? void 0 : d.call(e, this.props.sheet, b, c)
                        }
                    }
                };
                W5 = e6([Mc], W5);
                __c.gDa = {
                    L3a: function(a) {
                        const b = a.Im,
                            c = a.Sd,
                            d = a.Qc,
                            e = a.jn,
                            f = a.J_,
                            g = a.ly,
                            h = a.dU;
                        iJb({
                            jy: a.jy,
                            Oe: a.Oe,
                            Fdb: a.zM
                        });
                        const k = QJb({
                            AB: h,
                            J_: f,
                            ly: g
                        });
                        b.pea = AJb({
                            yr: k
                        });
                        c.Xda = oJb({
                            yr: k
                        });
                        ({
                            iTa: a
                        } = xJb({
                            yr: k,
                            De: e(),
                            PMa: new hKb
                        }));
                        d.Wo.oea = a;
                        const {
                            rRa: l,
                            sRa: m,
                            qRa: n
                        } = nJb();
                        return {
                            Nva: H5(p => C5(ZJb, { ...p,
                                yr: k,
                                hTa: l,
                                jTa: m,
                                fTa: n,
                                Yh: $Jb
                            }))
                        }
                    }
                };
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/33ab202484950038.js.map