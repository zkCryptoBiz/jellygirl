(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [643], {

        /***/
        47751: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var ZC;
                var C = __c.C;
                var D = __c.D;
                var Mpb, Lpb, Kpb, Ppb, Qpb, mY, Rpb, CY, Tpb, Upb, Xpb, Ypb, aqb, bqb, dqb, eqb, HY, iqb, jqb, gqb, mqb, nqb, oqb, tqb;
                __c.hY = function(a) {
                    let {
                        r: b,
                        g: c,
                        b: d
                    } = a;
                    c /= 255;
                    d /= 255;
                    a = b / 255;
                    b = .04045 >= a ? a / 12.92 : ((a + .055) / 1.055) ** 2.4;
                    c = .04045 >= c ? c / 12.92 : ((c + .055) / 1.055) ** 2.4;
                    d = .04045 >= d ? d / 12.92 : ((d + .055) / 1.055) ** 2.4;
                    return new __c.$r(100 * (.4360747 * b + .3850649 * c + .1430804 * d), 100 * (.2225045 * b + .7168786 * c + .0606169 * d), 100 * (.0139322 * b + .0971045 * c + .7141733 * d))
                };
                __c.iY = function(a) {
                    const b = __c.fs.Uua,
                        c = __c.fs.hRa,
                        d = __c.fs.gRa;
                    let {
                        x: e,
                        y: f,
                        z: g
                    } = a;
                    e /= b.x;
                    f /= b.y;
                    g /= b.z;
                    a = f > d ? Math.cbrt(f) : (c * f + 16) / 116;
                    return new __c.Wr(116 * a - 16, 500 * ((e > d ? Math.cbrt(e) : (c * e + 16) / 116) - a), 200 * (a - (g > d ? Math.cbrt(g) : (c * g + 16) / 116)))
                };
                __c.jY = function(a) {
                    return __c.Or(__c.es(a))
                };
                __c.kY = function(a) {
                    return a instanceof __c.Kr ? (a = __c.hY(a), __c.iY(a)) : a instanceof __c.$r ? __c.iY(a) : a instanceof __c.cs ? __c.Xr(a) : a instanceof __c.ds ? (a = __c.Yr(a), __c.kY(a)) : "string" === typeof a ? (a = __c.Zr(a), a = __c.hY(a), __c.iY(a)) : a
                };
                Mpb = function(a) {
                    if (!a) return a;
                    try {
                        var b = new URL(a)
                    } catch (c) {
                        return a
                    }
                    if ("undefined" === typeof b.pathname) return "unsupported";
                    "undefined" !== typeof b.search ? b.search && (b.search = Kpb(b.search)) : (b = a.indexOf("?"), a = -1 === b ? a : a.substring(0, b), b = new URL(a));
                    b.pathname = Lpb(b.pathname);
                    return b.toString()
                };
                Lpb = function(a) {
                    if (a.includes("/dist/renderer/")) return "/dist/renderer/" + a.split("/dist/renderer/").pop();
                    if (!a.startsWith("/design/")) return a;
                    const b = a.split("/");
                    if (4 > b.length || Npb.has(b[3])) return a;
                    b[3] = "*****";
                    return b.join("/")
                };
                Kpb = function(a) {
                    if (!a || 0 === a.length || !a.startsWith("?")) return a;
                    a = a.slice(a.indexOf("?") + 1).split("&").filter(function(b) {
                        [b] = b.split("=");
                        return Opb.has(b)
                    });
                    return 0 < a.length ? `?${a.join("&")}` : ""
                };
                __c.lY = function(a) {
                    return __c.TB({
                        design_id: a.zf,
                        doctype_id: a.Af,
                        category_id: a.Zo,
                        mode: a.mode,
                        access_role: a.Ro,
                        present_session_id: a.B$a,
                        num_pages_in_design: a.Kna,
                        num_all_pages_in_design: a.x7a,
                        current_page_index: a.jj,
                        location: a.location
                    })
                };
                Ppb = function(a) {
                    switch (a) {
                        case "unset":
                            return 0;
                        case "ok":
                            return 1;
                        case "error":
                            return 2;
                        default:
                            return 0
                    }
                };
                Qpb = function(a) {
                    const b = [];
                    for (const [c, d] of a.entries()) null != d && b.push({
                        key: c,
                        value: mY(d)
                    });
                    return b
                };
                mY = function(a) {
                    const b = typeof a;
                    return "string" === b ? {
                        stringValue: a
                    } : "number" === b ? Number.isInteger(a) ? {
                        intValue: a
                    } : {
                        doubleValue: a
                    } : "boolean" === b ? {
                        boolValue: a
                    } : a instanceof Uint8Array ? {
                        bytesValue: a
                    } : Array.isArray(a) ? {
                        arrayValue: {
                            values: a.map(mY)
                        }
                    } : "object" === b && null != a ? {
                        kvlistValue: {
                            values: Object.entries(a).map(([c, d]) => ({
                                key: c,
                                value: mY(d)
                            }))
                        }
                    } : {}
                };
                Rpb = function(a) {
                    const b = new Map;
                    for (const c of a) a = b.get(c.us), a || (a = [], b.set(c.us, a)), a.push(c);
                    return b
                };
                CY = function(a, b) {
                    b = b(a) / 1E3;
                    a = Math.trunc(b);
                    b = Number((b - a).toFixed(9)) * BY;
                    let [c, d] = [a, b];
                    d > BY && (d -= BY, c += 1);
                    return c * BY + d
                };
                __c.Spb = function(a, b) {
                    if (0 === a.length) return {
                        resourceSpans: []
                    };
                    const c = [];
                    a = Rpb(a);
                    for (const [d, e] of a)
                        if (0 < e.length) {
                            a = {
                                attributes: Qpb(e[0].qu),
                                droppedAttributesCount: 0
                            };
                            const f = [{
                                scope: {
                                    name: d
                                },
                                spans: e.map(g => {
                                    var h = g.Bo();
                                    const k = CY(g.startTime, b);
                                    var l;
                                    const m = CY(null !== (l = g.endTime) && void 0 !== l ? l : g.startTime, b);
                                    var n = g.attrs;
                                    "event" === g.wv && (l = g.attrs.get("parent_start"), null != l && "number" === typeof l && (n = new Map([...n.entries(), ["parent_start", CY(l, b)]])));
                                    l = h.traceId;
                                    h = h.spanId;
                                    var p = g.parentSpanId,
                                        q = g.name;
                                    n = Qpb(n);
                                    var r = {
                                        code: Ppb(g.status)
                                    };
                                    g = g.links;
                                    const t = [];
                                    for (const u of g) t.push({
                                        spanId: u.iPa.spanId,
                                        traceId: u.iPa.traceId,
                                        droppedAttributesCount: 0
                                    });
                                    return {
                                        traceId: l,
                                        spanId: h,
                                        parentSpanId: p,
                                        name: q,
                                        kind: 3,
                                        startTimeUnixNano: k,
                                        endTimeUnixNano: m,
                                        attributes: n,
                                        droppedAttributesCount: 0,
                                        events: [],
                                        droppedEventsCount: 0,
                                        status: r,
                                        links: t,
                                        droppedLinksCount: 0
                                    }
                                })
                            }];
                            c.push({
                                resource: a,
                                scopeSpans: f
                            })
                        }
                    return {
                        resourceSpans: c
                    }
                };
                Tpb = function(a) {
                    var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
                    try {
                        const c = __c.Vr(a),
                            d = c instanceof __c.Hr ? c.gq() : c;
                        return __c.rt(b, e => {
                            e = __c.Vr(e);
                            e = e instanceof __c.Hr ? __c.HI(e, d) : e;
                            return Math.abs(__c.is(e, d))
                        })
                    } catch (c) {
                        if (c instanceof Error && c.message === `unrecognized color: ${b[0]}`) return b[0];
                        throw c;
                    }
                };
                Upb = function(a) {
                    return a.trim().split(/\s+/, 2).map(b => __c.nu(b)[0]).join("")
                };
                Xpb = function(a = "") {
                    a = Vpb(a);
                    a = Math.floor(a() * Wpb.length);
                    return Wpb[a]
                };
                Ypb = function(a) {
                    switch (a.type) {
                        case "GROUPED_COLUMN":
                        case "GROUPED_ROW":
                            return {
                                spacing: a.spacing,
                                V: a.V,
                                Xa: { ...a.Xa,
                                    alignment: { ...a.Xa.alignment
                                    }
                                }
                            };
                        case "STACKED_ROW":
                        case "STACKED_COLUMN":
                            return {
                                spacing: a.spacing,
                                V: a.V,
                                Xa: { ...a.Xa,
                                    alignment: { ...a.Xa.alignment
                                    }
                                },
                                Wh: { ...a.Wh,
                                    alignment: { ...a.Xa.alignment
                                    }
                                }
                            };
                        case "PIE":
                        case "DONUT":
                            break;
                        case "LINE":
                            return {
                                fc: a.fc,
                                qc: a.qc
                            };
                        case "STACKED_AREA":
                            break;
                        case "SCATTERPLOT":
                        case "BUBBLEPLOT":
                            return {
                                nx: a.nx,
                                qc: a.qc
                            };
                        case "DOTPLOT":
                        case "GROUPED_DOTPLOT":
                            throw Error(`${a.type} is not yet implemented.`);
                        case "PACKED_CIRCLES":
                            break;
                        case "TREEMAP":
                            break;
                        case "HISTOGRAM":
                            return {
                                V: a.V
                            };
                        case "RADAR":
                            return {
                                fc: a.fc,
                                qK: a.qK
                            };
                        case "FUNNEL":
                            break;
                        case "BAR_RACE":
                            return {
                                spacing: a.spacing,
                                AL: a.AL
                            };
                        case "PROGRESS":
                        case "PICTOGRAM":
                            break;
                        case "POPULATION_PYRAMID":
                        case "DUMBBELL":
                        case "LOLLIPOP":
                        case "SUNBURST":
                        case "TIME_SERIES":
                            break;
                        default:
                            throw new D(a);
                    }
                };
                __c.EY = function(a, b, {
                    fireImmediately: c = !0
                } = {}) {
                    return (d, e) => DY(() => ({
                        Sha: a.uq,
                        It: d()
                    }), ({
                        Sha: f,
                        It: g
                    }) => {
                        b === f && e(g)
                    }, {
                        fireImmediately: c,
                        equals: (f, g) => f.Sha === g.Sha && Zpb.shallow(f.It, g.It)
                    })
                };
                __c.$pb = function(a, b) {
                    {
                        var c = b.AE;
                        const d = a.Mra.oy.get(c);
                        null != d ? c = d.sheet : (__c.DD(a.Mra, a.document), c = a.Mra.oy.get(c), c = null === c || void 0 === c ? void 0 : c.sheet)
                    }
                    if (null != c) return a = a.cAa.tcb(c, b), {
                        sheet: c,
                        range: a
                    }
                };
                aqb = function(a) {
                    switch (a.type) {
                        case 0:
                            return a.value.column;
                        case 1:
                            return a.value;
                        case 2:
                            break;
                        default:
                            throw new D(a);
                    }
                };
                __c.cqb = function(a, b) {
                    return a === b ? !0 : null == a || null == b || a.sheet !== b.sheet ? !1 : a.range === b.range ? !0 : null == a.range || null == b.range ? !1 : bqb(a.range.start, b.range.start) && bqb(a.range.end, b.range.end)
                };
                bqb = function(a, b) {
                    if (a === b) return !0;
                    switch (a.type) {
                        case 0:
                            return 0 === b.type && a.value.column.id === b.value.column.id && a.value.ua.id === b.value.ua.id;
                        case 1:
                            return 1 === b.type && a.value.id === b.value.id;
                        case 2:
                            return 2 === b.type && a.value.id === b.value.id;
                        default:
                            throw new D(a);
                    }
                };
                dqb = function(a) {
                    switch (a.type) {
                        case 0:
                            return a.value.ua;
                        case 1:
                            break;
                        case 2:
                            return a.value;
                        default:
                            throw new D(a);
                    }
                };
                eqb = function({
                    text: a,
                    fontSize: b,
                    fontFamily: c,
                    fontWeight: d,
                    textAlign: e,
                    textBaseline: f
                }) {
                    return `${a}.${b.toFixed(1)}.${c}.${__c.sE(d)}.${e}.${f}`
                };
                HY = function({
                    text: a,
                    fontSize: b,
                    fontFamily: c,
                    fontWeight: d,
                    textAlign: e = "start",
                    textBaseline: f = "alphabetic",
                    Yo: g
                }) {
                    __c.B(fqb(), "baseMeasureText should only be called from within a reactive context");
                    const h = eqb({
                        text: a,
                        fontSize: b,
                        fontFamily: c,
                        fontWeight: d,
                        textAlign: e,
                        textBaseline: f
                    });
                    var k = FY.get(h);
                    if (k) return {
                        RY: k.get(),
                        Yo: g
                    };
                    k = GY(() => {
                        g = g || gqb({
                            fontSize: b,
                            fontFamily: c,
                            textAlign: e,
                            textBaseline: f,
                            fontWeight: d
                        });
                        const l = g.measureText(a),
                            m = Math.ceil(l.actualBoundingBoxAscent + 1),
                            n = Math.ceil(l.actualBoundingBoxDescent +
                                1),
                            p = Math.ceil(l.actualBoundingBoxLeft),
                            q = Math.ceil(l.actualBoundingBoxRight);
                        return {
                            actualBoundingBoxAscent: m,
                            actualBoundingBoxDescent: n,
                            actualBoundingBoxLeft: p,
                            actualBoundingBoxRight: q,
                            fontBoundingBoxAscent: l.fontBoundingBoxAscent,
                            fontBoundingBoxDescent: l.fontBoundingBoxDescent,
                            height: m + n,
                            width: p + q,
                            dO: l.width
                        }
                    });
                    FY.set(h, k);
                    hqb(k, () => {
                        FY.delete(h)
                    });
                    return {
                        RY: k.get(),
                        Yo: g
                    }
                };
                iqb = function({
                    maxWidth: a,
                    ...b
                }) {
                    return `${eqb(b)}.${a}`
                };
                jqb = function({
                    text: a,
                    fontSize: b,
                    fontFamily: c,
                    fontWeight: d,
                    textAlign: e = "start",
                    textBaseline: f = "alphabetic",
                    maxWidth: g,
                    Yo: h
                }) {
                    __c.B(fqb(), "baseTruncateText should only be called from within a reactive context");
                    const k = iqb({
                        text: a,
                        maxWidth: g,
                        fontSize: b,
                        fontWeight: d,
                        fontFamily: c,
                        textAlign: e,
                        textBaseline: f
                    });
                    var l = IY.get(k);
                    if (l) return {
                        wta: l.get(),
                        Yo: h
                    };
                    l = GY(() => {
                        let m;
                        ({
                            RY: m,
                            Yo: h
                        } = HY({
                            text: a,
                            fontSize: b,
                            fontFamily: c,
                            fontWeight: d,
                            textAlign: e,
                            textBaseline: f,
                            Yo: h
                        }));
                        if (m.width <= g) return { ...m,
                            text: a
                        };
                        do {
                            a =
                                a.substring(0, a.length - 1).trim();
                            if (!a.length) return {
                                text: a,
                                width: 0,
                                height: 0,
                                actualBoundingBoxAscent: 0,
                                actualBoundingBoxDescent: 0,
                                actualBoundingBoxLeft: 0,
                                actualBoundingBoxRight: 0,
                                dO: 0,
                                fontBoundingBoxAscent: 0,
                                fontBoundingBoxDescent: 0
                            };
                            ({
                                Yo: h,
                                RY: m
                            } = HY({
                                text: a + "\u2026",
                                fontSize: b,
                                fontFamily: c,
                                fontWeight: d,
                                textAlign: e,
                                textBaseline: f,
                                Yo: h
                            }))
                        } while (m.width > g);
                        return { ...m,
                            text: a + "\u2026"
                        }
                    });
                    IY.set(k, l);
                    hqb(l, () => {
                        IY.delete(k)
                    });
                    return {
                        wta: l.get(),
                        Yo: h
                    }
                };
                gqb = function({
                    fontSize: a,
                    fontFamily: b,
                    textAlign: c,
                    textBaseline: d,
                    fontWeight: e
                }) {
                    var f = document.createElement("canvas");
                    f = C(f.getContext("2d"), "could not initialize measuring canvas context");
                    f.font = `${e?__c.sE(e)+" ":""}${a}px '${b}'`;
                    f.textAlign = c;
                    f.textBaseline = d;
                    return f
                };
                __c.lqb = function(a) {
                    const b = kqb(void 0);
                    JY(() => {
                        b.current = a
                    }, [a]);
                    return b.current
                };
                mqb = function(a, b, c, d = "fit-viewport") {
                    a = __c.Yj(a);
                    b /= a.width;
                    c /= a.height;
                    switch (d) {
                        case "fit-viewport":
                            d = Math.min(b, c);
                            break;
                        case "fit-width":
                            d = b;
                            break;
                        case "fit-height":
                            d = c;
                            break;
                        default:
                            throw new D(d);
                    }
                    return {
                        width: a.width * d,
                        height: a.height * d,
                        scale: d
                    }
                };
                nqb = function(a, b) {
                    a.xpa.delete(b);
                    a.cb.$q(b);
                    const {
                        startTime: c
                    } = __c.XJ(a.cb, b);
                    a.cb.seek(b, c)
                };
                __c.KY = function(a, b) {
                    return DY(() => b.flatMap(c => a.gUa(c)), (c, d) => {
                        a.cb.setActive(!0);
                        null === d || void 0 === d ? void 0 : d.forEach(e => {
                            c.includes(e) || nqb(a, e)
                        });
                        c.length && a.Dh(c)
                    }, {
                        fireImmediately: !0
                    })
                };
                oqb = function(a) {
                    const b = a.qa || 0;
                    return {
                        qa: b,
                        re: b + (a.J || Infinity)
                    }
                };
                tqb = function({
                    la: a,
                    Em: b,
                    dc: c,
                    Kg: d,
                    yw: e
                }) {
                    const f = LY(function({
                            L: l,
                            p5: m,
                            disableVideo: n,
                            Cw: p,
                            page: q,
                            Tp: r,
                            Be: t
                        }) {
                            return MY(c, {
                                page: q,
                                ld: l.height,
                                Fc: l.width,
                                fit: "contain",
                                Ej: !0,
                                oi: !n,
                                Sp: m ? "static-with-interactive-fallback" : "interactive",
                                EE: !1,
                                Be: t,
                                Cw: p,
                                P_: !0,
                                Tp: r,
                                sia: __c.xj(q)
                            })
                        }),
                        g = LY(function({
                            L: l,
                            p5: m,
                            disableVideo: n,
                            Cw: p,
                            Tp: q,
                            Be: r,
                            RZ: t,
                            Ls: u,
                            vM: v
                        }) {
                            return MY(d, {
                                la: a.get(),
                                dc: c,
                                ma: e.Jw(),
                                L8: l,
                                RZ: t,
                                Ls: u,
                                Ej: !0,
                                oi: !n,
                                Sp: m ? "static-with-interactive-fallback" : "interactive",
                                Tp: q,
                                EE: __c.DA.ub,
                                Dcb: "smooth" ===
                                    b.get().behavior,
                                Be: r,
                                Cw: p,
                                P_: !0,
                                vM: v
                            })
                        }),
                        h = ({
                            oB: l,
                            Koa: m
                        }) => {
                            JY(() => {
                                null === m || void 0 === m ? void 0 : m(l.width, l.height)
                            }, [m, l.height, l.width]);
                            return null
                        },
                        k = ({
                            mz: l,
                            Zna: m
                        }) => {
                            JY(() => {
                                null === m || void 0 === m ? void 0 : m(l.width, l.height)
                            }, [m, l.height, l.width]);
                            return null
                        };
                    return LY(function({
                        ewa: l,
                        rw: m,
                        p5: n = !1,
                        xlb: p = !1,
                        disableVideo: q = !1,
                        XBa: r,
                        k6: t,
                        YBa: u,
                        muted: v = !1,
                        Koa: x,
                        Zna: y,
                        page: z,
                        Tp: A,
                        yLa: F = !1,
                        pNa: G = !1,
                        LPa: I = "large",
                        RZ: J = 1,
                        Ls: K = 1,
                        vM: L = !1
                    }) {
                        function Q({
                            oB: ka,
                            transformStyle: na,
                            Bt: U,
                            Cw: qa
                        }) {
                            return NY("div", {
                                className: OY("_0o7QeQ", F && "C_TL5Q"),
                                style: {
                                    transform: na,
                                    width: ka.width,
                                    height: ka.height
                                },
                                ref: U,
                                children: [0 < ka.width && 0 < ka.height && MY(ja, {
                                    L: ka,
                                    p5: n,
                                    disableVideo: q,
                                    Cw: qa,
                                    Tp: A,
                                    page: z,
                                    Be: S,
                                    RZ: J,
                                    Ls: K,
                                    vM: L
                                }), p && MY(__c.pqb, {})]
                            })
                        }
                        const S = qqb(() => ({
                                jaa: q ? 0 : void 0,
                                volume: v ? 0 : 1
                            }), [q, v]),
                            X = e.getDimensions(),
                            aa = z.L,
                            la = __c.Zj(X),
                            ta = __c.Zj(aa || X),
                            ja = m ? f : g;
                        return MY(__c.PY, {
                            Bd: aa || X,
                            XBa: r,
                            YBa: u,
                            k6: t,
                            children: ({
                                mz: ka,
                                $fa: na,
                                yta: U
                            }) => {
                                na = ta ? U : na;
                                return NY(rqb, {
                                    children: [MY(h, {
                                        Koa: x,
                                        oB: na
                                    }), MY(k, {
                                        Zna: y,
                                        mz: ka
                                    }), NY("div", {
                                        className: "JqqAIg",
                                        role: "none",
                                        children: [l ? MY(l, {
                                            mz: ka,
                                            L: na,
                                            children: qa => Q({
                                                oB: {
                                                    width: qa.width,
                                                    height: qa.height
                                                },
                                                Cw: qa.dfa,
                                                transformStyle: qa.transformStyle,
                                                Bt: qa.Bt
                                            })
                                        }) : Q({
                                            oB: na
                                        }), ta && !la && G && MY(__c.sqb, {
                                            size: I
                                        })]
                                    })]
                                })
                            }
                        })
                    })
                };
                __c.OK.prototype.PP = __c.ea(15, function() {});
                __c.TM.prototype.PP = __c.ea(14, function() {
                    this.ended || this.MI || (this.MI = !0, setTimeout(() => {
                        try {
                            this.ended = !0, __c.gQa(this), void 0
                        } catch (a) {
                            this.H.bc(a, {
                                Ef: "Error ending span in next cycle",
                                extra: new Map(__c.KM(this))
                            })
                        }
                    }))
                });
                __c.sF.prototype.HU = __c.ea(11, function(a) {
                    switch ((void 0).type) {
                        case "invalid":
                            return;
                        case "canonical":
                            var b = (void 0).uJ.slice(1).trim();
                            break;
                        default:
                            throw new D;
                    }
                    b = this.JZ(b);
                    __c.B("success" === b.result);
                    const c = {
                            OKa: new Map(__c.Tua(b.HV, a).map(e => [e.mS, e])),
                            sheet: a
                        },
                        d = __c.Uua(b.HV, e => {
                            e = __c.Vua(e, c);
                            if ("#REF!" !== e) a: switch (e = __c.MC(e), e.type) {
                                case 0:
                                    var f = e.oh + (e.wS ? 0 : (void 0).pH);
                                    const g = e.gh + (e.PO ? 0 : (void 0).$Y);
                                    e = 0 > f || 0 > g || f >= a.rows.count() || g >= a.cols.count() ? "#REF!" : [e.PO ? "$" : "", __c.LC(g), e.wS ?
                                        "$" : "", String(f + 1)
                                    ].join("");
                                    break a;
                                case 1:
                                    f = e.gh + (e.PO ? 0 : (void 0).$Y);
                                    e = 0 <= f && f < a.cols.count() ? `${e.PO?"$":""}${__c.LC(f)}` : "#REF!";
                                    break a;
                                case 2:
                                    f = e.oh + (e.wS ? 0 : (void 0).pH);
                                    e = 0 <= f && f < a.rows.count() ? `${e.wS?"$":""}${String(f+1)}` : "#REF!";
                                    break a;
                                case 3:
                                    e = e.name;
                                    break a;
                                default:
                                    throw new D(e);
                            }
                            return e
                        });
                    b = this.JZ(d);
                    if ("success" !== b.result) throw Error();
                    return {
                        type: "canonical",
                        uJ: "=" + d
                    }
                });
                var QY = __webpack_require__(519427),
                    fqb = QY.SW,
                    RY = QY.aD,
                    Zpb = QY.p6,
                    GY = QY.Fl,
                    SY = QY.LO,
                    hqb = QY.pA,
                    DY = QY.U5,
                    uqb = QY.z;
                var TY = __webpack_require__(443763),
                    rqb = TY.Fragment,
                    MY = TY.jsx,
                    NY = TY.jsxs;
                var vqb = __webpack_require__,
                    wqb = vqb(993864),
                    OY = vqb.n_x(wqb)();
                var LY = __webpack_require__(620826).Pi;
                var UY = __webpack_require__(875604),
                    VY = UY.Component,
                    xqb = UY.createRef,
                    WY = UY.memo,
                    JY = UY.useEffect,
                    yqb = UY.useId,
                    qqb = UY.useMemo,
                    kqb = UY.useRef,
                    zqb = UY.useState;
                var XY = __webpack_require__(635872).Om;
                var Aqb = __webpack_require__(240236).gn;
                var Bqb = __webpack_require__(984956).Z;
                var Vpb = __webpack_require__(503216);
                var Cqb = __webpack_require__,
                    Dqb = Cqb(765511),
                    Eqb = Cqb.n_x(Dqb);
                var Npb = new Set("share acl remix view edit screen render animate watch published draft".split(" ")),
                    Opb = new Set("utm_source utm_medium utm_campaign utm_content utm_term gclid fbclid msclkid q query clickId referrer signup_referrer redirect origin type category schema dclid _channel_track_key callback_id channel_account_id channel_ad_id channel_adgroup_id channel_campaign_id channel_keyword channel_keyword_id channel_link_type channel_name channel_utm_campaign channel_utm_content channel_utm_medium channel_utm_source channel_utm_term hash_key sat_cf tid link_version utm_adgroup utm_keyword template media create touchpoint_label touchpoint_correlation_id cta_source".split(" "));
                __c.Fqb = {
                    Ge: "resource_loaded",
                    wg(a) {
                        return __c.TB({
                            source: a.source,
                            resource_id: a.pLa,
                            success: a.Ib,
                            resource_type: a.resourceType,
                            version: a.version,
                            url: Mpb(a.url),
                            watermarked: a.yh,
                            spritesheet: a.Ae,
                            height: a.height,
                            width: a.width,
                            quality: a.quality,
                            restricted_access: a.XH,
                            file_size: a.fileSize,
                            failure_reason: a.yW,
                            resource_already_loaded: a.Dub,
                            performance_context: null == a.cg ? void 0 : __c.CE(a.cg),
                            editing_context: null == a.Yd ? void 0 : __c.UB(a.Yd)
                        })
                    }
                };
                var BY = Math.pow(10, 9);
                __c.Gqb = class {
                    HU(a) {
                        return this.QPa + (a - this.KJa)
                    }
                    xO() {
                        var a = Date.now(),
                            b = performance.now();
                        Math.abs(this.HU(b) - a) < this.threshold || (this.QPa = a, this.KJa = b)
                    }
                    constructor() {
                        var a = Date.now(),
                            b = performance.now();
                        this.QPa = a;
                        this.KJa = b;
                        this.threshold = 1E4
                    }
                };
                __c.YY = {
                    xxsmall: 16,
                    xsmall: 24,
                    small: 32,
                    medium: 40,
                    large: 48,
                    xlarge: 64,
                    xxlarge: 80,
                    xxxlarge: 160
                };
                var Wpb = ["rgb(0, 126, 182)", "rgb(248, 72, 86)", "rgb(251, 190, 40)", "rgb(68, 133, 25)", "rgb(125, 42, 232)"].map(a => {
                    try {
                        return __c.Or(__c.Nr(a))
                    } catch (b) {
                        return "#8e8e8e"
                    }
                });
                var Hqb = WY(a => {
                    const {
                        name: b,
                        borderColor: c,
                        backgroundColor: d,
                        pO: e,
                        role: f,
                        ariaLabel: g,
                        className: h,
                        style: k,
                        shape: l = "circle",
                        ...m
                    } = a;
                    d ? (a = __c.Vr(d), a = a instanceof __c.Hr ? __c.Rr(a) : __c.Or(a)) : a = e ? Xpb(e) : "#8e8e8e";
                    var n = yqb();
                    let p;
                    switch (l) {
                        case "circle":
                            p = MY("defs", {
                                children: MY("clipPath", {
                                    id: n,
                                    children: MY("circle", {
                                        id: `${n}-path`,
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%"
                                    })
                                })
                            });
                            break;
                        case "square":
                            p = MY("defs", {
                                children: MY("clipPath", {
                                    id: n,
                                    children: MY("rect", {
                                        id: `${n}-path`,
                                        width: "100%",
                                        height: "100%"
                                    })
                                })
                            });
                            break;
                        default:
                            throw new D(l);
                    }
                    switch (l) {
                        case "circle":
                            n = MY("circle", {
                                cx: "50%",
                                cy: "50%",
                                fill: a,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${n})`,
                                stroke: c,
                                className: OY("yCT70Q", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        case "square":
                            n = MY("rect", {
                                width: "100%",
                                height: "100%",
                                fill: a,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${n})`,
                                stroke: c,
                                className: OY("cUFFRA", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        default:
                            throw new D(l);
                    }
                    return MY("span", {
                        role: f,
                        "aria-label": g,
                        className: OY("VaW8_A", {
                            cUFFRA: "square" === l
                        }),
                        ...m,
                        children: NY("svg", {
                            className: h,
                            style: k,
                            children: [p,
                                n, MY("text", {
                                    x: "50%",
                                    y: "50%",
                                    "aria-hidden": "true",
                                    textAnchor: "middle",
                                    fill: Tpb(a),
                                    fontWeight: "500",
                                    fontSize: "50%",
                                    children: MY("tspan", {
                                        dy: "0.36em",
                                        letterSpacing: "0.01rem",
                                        children: Upb(b).toUpperCase()
                                    })
                                })
                            ]
                        })
                    })
                });
                var Iqb = __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
                var Jqb = ({
                    borderColor: a,
                    LJa: b,
                    ariaLabel: c,
                    className: d,
                    style: e,
                    role: f,
                    ...g
                }) => MY("span", {
                    className: OY(d, {
                        JwH6AA: a,
                        QJpRHw: !a
                    }),
                    style: {
                        backgroundImage: `url(${b})`,
                        borderColor: a && `${a}`,
                        ...e
                    },
                    role: f,
                    "aria-label": "img" === f ? c : void 0,
                    ...g
                });
                __c.Kqb = ({
                    name: a,
                    NUa: b,
                    ariaLabel: c,
                    pO: d,
                    backgroundColor: e,
                    borderColor: f,
                    Pp: g,
                    className: h,
                    style: k,
                    shape: l = "circle",
                    ...m
                }) => {
                    h = OY("n8XGZg", "f4qJng fs-hide", h, {
                        P3N3Pw: "square" === l
                    });
                    b = b || "presentation";
                    return g ? MY(Jqb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        LJa: g,
                        ariaLabel: c,
                        role: b,
                        ...m
                    }) : a ? MY(Hqb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        name: a,
                        shape: l,
                        pO: d,
                        backgroundColor: e,
                        role: b,
                        ariaLabel: c,
                        ...m
                    }) : MY(Jqb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        LJa: Iqb,
                        ariaLabel: c,
                        role: b,
                        ...m
                    })
                };
                __c.ZY = class a extends VY {
                    static j(b) {
                        __c.P(b, {
                            open: SY.ref,
                            Qga: SY.ref,
                            Vna: RY.bound,
                            xia: RY
                        })
                    }
                    render() {
                        const {
                            title: b,
                            yG: c,
                            brb: d = "primary",
                            oia: e = !1,
                            Dya: f,
                            role: g = "dialog",
                            mode: h,
                            uH: k,
                            nh: l
                        } = this.props, m = void 0 === this.props.open ? this.open : this.props.open;
                        var n;
                        const p = null !== (n = this.props.buttons) && void 0 !== n ? n : [this.props.button];
                        return MY(__c.Qz, {
                            count: 2,
                            children: (q, r) => MY(__c.Kfb, {
                                fb: q,
                                hd: c ? r : void 0,
                                open: m,
                                Rb: e ? this.DWa : void 0,
                                mode: h,
                                uH: k,
                                role: g,
                                nh: l,
                                children: MY(__c.uA, {
                                    className: OY("sheet" !== h && "j4W2gA"),
                                    padding: {
                                        default: "3u",
                                        Ke: "4u"
                                    },
                                    children: NY(__c.tA, {
                                        spacing: "3u",
                                        children: [NY(__c.tA, {
                                            align: "start",
                                            spacing: "2u",
                                            children: [MY(__c.gS, {
                                                id: q,
                                                tagName: "h1",
                                                alignment: "start",
                                                children: b
                                            }), c && ("string" === typeof c ? MY(__c.rA, {
                                                id: r,
                                                tone: "secondary",
                                                children: c
                                            }) : MY("div", {
                                                id: r,
                                                children: c
                                            })), f && MY(__c.Hmb, {
                                                label: f,
                                                onChange: this.Vna
                                            })]
                                        }), MY(__c.iM, {
                                            reversed: !0,
                                            spacing: "2u",
                                            Pya: "small",
                                            collapsed: "sheet" === h,
                                            children: p.map((t, u) => MY(__c.jM, {
                                                width: 0 === u ? "content" : "containedContent",
                                                children: MY(__c.kM, {
                                                    stretch: !0,
                                                    variant: 0 === u ? d : "secondary",
                                                    ...t,
                                                    className: t.className,
                                                    onClick: () => this.P_a(t.onClick)
                                                })
                                            }, u))
                                        })]
                                    })
                                })
                            })
                        })
                    }
                    Vna(b, c) {
                        var d, e;
                        this.Qga = c;
                        null === (d = (e = this.props).Vna) || void 0 === d ? void 0 : d.call(e, c)
                    }
                    constructor(...b) {
                        super(...b);
                        a.j(this);
                        this.open = !0;
                        this.Qga = !1;
                        this.P_a = c => {
                            null === c || void 0 === c ? void 0 : c({
                                checkboxChecked: !(!this.props.Dya || !this.Qga)
                            });
                            this.xia()
                        };
                        this.DWa = () => {
                            var c, d;
                            null === (c = (d = this.props).eZ) || void 0 === c ? void 0 : c.call(d);
                            this.xia()
                        };
                        this.xia = () => {
                            var c, d;
                            null === (c = (d = this.props).onClose) ||
                                void 0 === c ? void 0 : c.call(d);
                            this.open = !1
                        }
                    }
                };
                __c.ZY = Aqb([__c.Mc], __c.ZY);
                __c.$Y = class {
                    static j(a) {
                        __c.P(a, {
                            ob: GY,
                            QEa: GY,
                            Kia: GY
                        })
                    }
                    get base() {
                        var a, b;
                        return null !== (b = null === (a = this.A.transition) || void 0 === a ? void 0 : a.base) && void 0 !== b ? b : this._base
                    }
                    get Sb() {
                        var a, b;
                        return null !== (b = null === (a = this.A.transition) || void 0 === a ? void 0 : a.Sb) && void 0 !== b ? b : this.vea
                    }
                    get ob() {
                        var a;
                        const b = null === (a = this.A.transition) || void 0 === a ? void 0 : a.Sb.config.ref;
                        if (null != b && this.Pla(b)) return b;
                        a = this.Sb.config.ref;
                        this.Pla(a) && (this.fKa = a);
                        return this.fKa
                    }
                    get QEa() {
                        return !this.Pla(this.Sb.config.ref)
                    }
                    get xJ() {
                        return this.Sb.id
                    }
                    get uq() {
                        return this.ob.type
                    }
                    get Kia() {
                        return {
                            Hd: this.Hd,
                            ke: this.ke,
                            fontSize: this.fontSize,
                            fontFamily: this.fontFamily,
                            fontWeight: this.fontWeight,
                            fontStyle: this.fontStyle,
                            Ik: this.Ik,
                            Wp: this.Wp,
                            ...Ypb(this.ob)
                        }
                    }
                    get data() {
                        return this.base.data
                    }
                    get Ng() {
                        return this.base.Ng
                    }
                    get Lga() {
                        return this.base.Lga
                    }
                    get NS() {
                        return !!this.Sb.zo
                    }
                    get Wp() {
                        return !this.Sb.Vn
                    }
                    get ui() {
                        return !this.Sb.uu
                    }
                    get dm() {
                        return this.Sb.dm
                    }
                    get zoom() {
                        return this.A.zoom
                    }
                    get width() {
                        return this.A.width
                    }
                    get height() {
                        return this.A.height
                    }
                    get rotation() {
                        return this.A.rotation
                    }
                    get $f() {
                        return this.A.$f
                    }
                    get fontSize() {
                        return this.A.fontSize
                    }
                    get Fw() {
                        return this.A.Fw
                    }
                    get fontFamily() {
                        return this.A.fontFamily
                    }
                    get Ik() {
                        return this.A.Ik
                    }
                    get fontStyle() {
                        return this.A.fontStyle
                    }
                    get fontWeight() {
                        return this.A.fontWeight
                    }
                    get Ue() {
                        return this.A.Ue
                    }
                    get $e() {
                        return this.A.$e
                    }
                    get Le() {
                        return this.A.Le
                    }
                    get xba() {
                        return this.A.xba
                    }
                    get Hd() {
                        return this.A.Hd
                    }
                    get ke() {
                        return this.A.ke
                    }
                    get margins() {
                        return this.A.margins
                    }
                    get sb() {
                        return this.A.sb
                    }
                    get Qp() {
                        return this.A.Qp
                    }
                    get Pk() {
                        return this.A.Pk
                    }
                    get Bj() {
                        return this.A.Bj
                    }
                    get GU() {
                        return this.A.GU
                    }
                    get rq() {
                        return this.A.rq
                    }
                    get qq() {
                        return this.A.qq
                    }
                    get Pe() {
                        return this.A.Pe
                    }
                    constructor(a,
                        b, c, d, e) {
                        __c.$Y.j(this);
                        this.A = a;
                        this._base = b;
                        this.vea = c;
                        this.fKa = d;
                        this.Pla = e
                    }
                };
                __c.$Y.prototype.Qz = __c.ca(8);
                __c.$Y.prototype.HG = __c.ca(5);
                __c.bD = {};
                __c.bD.fU = __c.$Y;
                __c.bD.Dkb = __c.EY;
                var Lqb = class extends __c.UD {
                    get oy() {
                        this.BE = this.IZ = 0;
                        return this.Saa
                    }
                    OQa(a) {
                        this.dG && this.Saa.set(a.id, {
                            sheet: a.config,
                            BE: this.BE++,
                            parent: this.dG
                        })
                    }
                    NQa(a) {
                        this.dG && this.Saa.set(a.id, {
                            sheet: a.config,
                            BE: this.BE++,
                            parent: this.dG
                        })
                    }
                    gF(a) {
                        this.BE = 0;
                        this.dG = {
                            type: "page",
                            page: a,
                            IZ: this.IZ++
                        };
                        super.gF(a);
                        __c.xj(a) && (__c.B(null != a.id), this.dG && this.Saa.set(a.id, {
                            sheet: a.sheet,
                            BE: this.BE++,
                            parent: this.dG
                        }))
                    }
                    z1(a) {
                        this.BE = 0;
                        this.dG = {
                            type: "body",
                            body: a,
                            IZ: this.IZ++
                        };
                        super.z1(a)
                    }
                    constructor() {
                        super();
                        this.Saa =
                            new Map;
                        this.dG = void 0;
                        this.BE = this.IZ = 0
                    }
                };
                __c.aZ = class {
                    constructor(a, b) {
                        this.gs = a;
                        this.bk = b;
                        this.hn = new __c.eDa(b, a)
                    }
                };
                __c.aZ.prototype.hX = __c.ca(22);
                __c.dZ = class {
                    getCells(a) {
                        var b = __c.$pb(this, a);
                        if (null == (null === b || void 0 === b ? void 0 : b.range)) return {
                            columns: [],
                            rows: []
                        };
                        a = b.sheet;
                        b = b.range;
                        return {
                            columns: (new __c.bZ(a, b)).toArray(),
                            rows: (new __c.cZ(a, b)).toArray()
                        }
                    }
                    constructor(a, b, c, d) {
                        this.document = a;
                        this.Mra = b;
                        this.Taa = c;
                        this.cAa = d
                    }
                };
                __c.dZ.prototype.hX = __c.ca(21);
                __c.bZ = class {*[Symbol.iterator]() {
                        var a = this.$b;
                        const b = this.z_a,
                            c = this.sheet;
                        for (; null != a && a !== b; a = c.layout.cols.next(a)) yield a
                    }
                    toArray() {
                        const a = [];
                        for (const b of this) a.push(b);
                        return a
                    }
                    first(a) {
                        for (const b of this)
                            if (a(b)) return b
                    }
                    last(a) {
                        var b = this.Oc;
                        const c = this.Vcb,
                            d = this.sheet;
                        for (; null != b && b !== c; b = d.layout.cols.vc(b))
                            if (a(b)) return b
                    }
                    findIndex(a) {
                        let b = 0;
                        for (const c of this) {
                            if (a(c)) return b;
                            ++b
                        }
                        return -1
                    }
                    filter(a) {
                        const b = [];
                        let c = 0;
                        for (const d of this) a(d, c++) && b.push(d);
                        return b
                    }
                    map(a) {
                        const b = [];
                        let c = 0;
                        for (const d of this) {
                            const e = a(d, c++);
                            b.push(e)
                        }
                        return b
                    }
                    every(a) {
                        let b = 0;
                        for (const c of this)
                            if (!a(c, b++)) return !1;
                        return !0
                    }
                    constructor(a, b) {
                        this.sheet = a;
                        var c;
                        const d = null !== (c = b && aqb(b.start)) && void 0 !== c ? c : a.layout.cols.first();
                        this.$b = C(d);
                        this.Vcb = a.layout.cols.vc(this.$b);
                        var e;
                        b = null !== (e = b && aqb(b.end)) && void 0 !== e ? e : a.layout.cols.last();
                        this.Oc = C(b);
                        this.z_a = a.layout.cols.next(this.Oc)
                    }
                };
                __c.cZ = class {*[Symbol.iterator]() {
                        var a = this.ec;
                        const b = this.A_a,
                            c = this.sheet;
                        for (; null != a && a !== b; a = c.layout.rows.next(a)) yield a
                    }
                    toArray() {
                        const a = [];
                        for (const b of this) a.push(b);
                        return a
                    }
                    first(a) {
                        for (const b of this)
                            if (a(b)) return b
                    }
                    last(a) {
                        var b = this.Zc;
                        const c = this.Wcb,
                            d = this.sheet;
                        for (; null != b && b !== c; b = d.layout.rows.vc(b))
                            if (a(b)) return b
                    }
                    filter(a) {
                        const b = [];
                        let c = 0;
                        for (const d of this) a(d, c++) && b.push(d);
                        return b
                    }
                    every(a) {
                        let b = 0;
                        for (const c of this)
                            if (!a(c, b++)) return !1;
                        return !0
                    }
                    map(a) {
                        const b = [];
                        let c = 0;
                        for (const d of this) {
                            const e = a(d, c++);
                            b.push(e)
                        }
                        return b
                    }
                    findIndex(a) {
                        let b = 0;
                        for (const c of this) {
                            if (a(c)) return b;
                            ++b
                        }
                        return -1
                    }
                    constructor(a, b) {
                        this.sheet = a;
                        var c;
                        const d = null !== (c = b && dqb(b.start)) && void 0 !== c ? c : a.layout.rows.first();
                        this.ec = C(d);
                        this.Wcb = a.layout.rows.vc(this.ec);
                        var e;
                        b = null !== (e = b && dqb(b.end)) && void 0 !== e ? e : a.layout.rows.last();
                        this.Zc = C(b);
                        this.A_a = a.layout.rows.next(this.Zc)
                    }
                };
                ZC = __c.ZC = {};
                ZC.ygb = __c.bZ;
                ZC.Igb = __c.dZ;
                ZC.Mhb = __c.cZ;
                ZC.IXa = (a, b, c, d) => new __c.dZ(a, new Lqb, new __c.aZ(c, b), d);
                ZC.fub = __c.cqb;
                var FY, Mqb, Nqb, IY, Oqb;
                FY = new Map;
                Mqb = ({
                    text: a,
                    fontSize: b,
                    fontFamily: c,
                    fontWeight: d,
                    textAlign: e,
                    textBaseline: f
                }) => HY({
                    text: a,
                    fontSize: b,
                    fontFamily: c,
                    fontWeight: d,
                    textAlign: e,
                    textBaseline: f,
                    Yo: void 0
                }).RY;
                Nqb = ({
                    texts: a,
                    fontSize: b,
                    fontFamily: c,
                    fontWeight: d,
                    textAlign: e,
                    textBaseline: f
                }) => {
                    let g;
                    return a.map(h => {
                        h = HY({
                            text: h,
                            fontSize: b,
                            fontFamily: c,
                            fontWeight: d,
                            textAlign: e,
                            textBaseline: f,
                            Yo: g
                        });
                        ({
                            Yo: g
                        } = h);
                        return h.RY
                    })
                };
                IY = new Map;
                __c.eZ = ({
                    text: a,
                    maxWidth: b,
                    fontSize: c,
                    fontFamily: d,
                    fontWeight: e,
                    textAlign: f,
                    textBaseline: g
                }) => jqb({
                    text: a,
                    maxWidth: b,
                    fontSize: c,
                    fontFamily: d,
                    fontWeight: e,
                    textAlign: f,
                    textBaseline: g,
                    Yo: void 0
                }).wta;
                Oqb = ({
                    texts: a,
                    maxWidth: b,
                    fontSize: c,
                    fontFamily: d,
                    fontWeight: e,
                    textAlign: f,
                    textBaseline: g
                }) => {
                    let h;
                    return a.map(k => {
                        k = jqb({
                            text: k,
                            fontSize: c,
                            fontFamily: d,
                            fontWeight: e,
                            maxWidth: b,
                            textAlign: f,
                            textBaseline: g,
                            Yo: h
                        });
                        ({
                            Yo: h
                        } = k);
                        return k.wta
                    })
                };
                __c.ona = {
                    wf: Nqb,
                    lm: Oqb,
                    measureText: Mqb,
                    Pa: {
                        measureText: Mqb,
                        wf: Nqb,
                        Ig: __c.eZ,
                        lm: Oqb
                    },
                    Ig: __c.eZ
                };
                __c.fZ = class extends VY {
                    componentDidMount() {
                        const a = C(this.tGa.current);
                        var b;
                        this.$h = Eqb().loadAnimation({
                            autoplay: __c.DA.ub,
                            path: this.props.eH,
                            container: a,
                            renderer: "svg",
                            loop: null !== (b = this.props.loop) && void 0 !== b ? b : !1,
                            rendererSettings: this.props.rendererSettings
                        });
                        this.props.loop || this.$h.addEventListener("complete", () => {
                            var c, d;
                            null === (c = (d = this.props).Ri) || void 0 === c ? void 0 : c.call(d)
                        })
                    }
                    render() {
                        return MY("div", {
                            className: "sH8e1w",
                            ref: this.tGa
                        })
                    }
                    componentWillUnmount() {
                        this.$h && this.$h.destroy()
                    }
                    constructor(...a) {
                        super(...a);
                        this.tGa = xqb()
                    }
                };
                var gZ = class a extends VY {
                    static j(b) {
                        __c.P(b, {
                            size: SY.ref,
                            onResize: RY,
                            L: GY
                        })
                    }
                    componentDidMount() {
                        var b;
                        const c = this.ref,
                            d = null === c || void 0 === c ? void 0 : null === (b = c.ownerDocument) || void 0 === b ? void 0 : b.defaultView;
                        if (null != d && null != c) {
                            var e = () => {
                                const {
                                    width: f,
                                    height: g
                                } = c.getBoundingClientRect();
                                uqb(() => {
                                    this.size = {
                                        width: f,
                                        height: g
                                    }
                                })
                            };
                            d.addEventListener("resize", e);
                            this.hZa = () => d.removeEventListener("resize", e)
                        }
                    }
                    componentWillUnmount() {
                        var b;
                        null === (b = this.hZa) || void 0 === b ? void 0 : b.call(this)
                    }
                    get L() {
                        const {
                            L: b,
                            offsetWidth: c = 0,
                            offsetHeight: d = 0,
                            strategy: e = "fit-viewport"
                        } = this.props;
                        return mqb(b, this.size.width - c, this.size.height - d, e)
                    }
                    render() {
                        const b = this.props.children,
                            c = this.L,
                            d = this.size;
                        return MY(Bqb, {
                            offset: !0,
                            onResize: this.onResize,
                            innerRef: this.Tk,
                            children: ({
                                measureRef: e
                            }) => b(e, c, d)
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        a.j(this);
                        this.ref = null;
                        this.Tk = c => {
                            this.ref = c
                        };
                        this.size = {
                            width: 0,
                            height: 0
                        };
                        this.onResize = ({
                            offset: c
                        }) => {
                            this.size = {
                                width: c.width,
                                height: c.height
                            }
                        }
                    }
                };
                gZ = Aqb([__c.Mc], gZ);
                __c.pqb = WY(function() {
                    return MY("div", {
                        className: "vMVcag"
                    })
                });
                __c.hZ = class {
                    static j(a) {
                        __c.P(a, {
                            VA: RY
                        })
                    }
                    VA(a) {
                        __c.nE.Ij(a).forEach(b => nqb(this, b))
                    }
                    Dh(a) {
                        const [b, c] = __c.iw(a, d => !!this.cb.canPlay(d));
                        c.forEach(d => this.cb.aB(d, {
                            Kla: !0
                        }));
                        b.forEach(d => {
                            this.cb.ab(d) || this.xpa.has(d) || !d.autoplay || (this.xpa.add(d), __c.gK(this.cb, d))
                        })
                    }
                    constructor(a, b, c) {
                        __c.hZ.j(this);
                        this.cb = a;
                        this.la = b;
                        this.g_a = c;
                        this.xpa = new WeakSet;
                        this.gUa = XY(d => {
                            if (d !== this.la.bb && d !== this.la.nextPage) return [];
                            var e = 1E3 * this.la.progress;
                            const f = 1E3 * this.la.pQ(d).start.get(),
                                g = 1E3 * __c.HA(this.la,
                                    d);
                            if (e < f || e >= g) return [];
                            const h = this.g_a ? d.To.map(n => n.jm) : [],
                                k = e - f,
                                l = [],
                                m = (n, p) => {
                                    const q = __c.nE.Ko(n),
                                        r = __c.$s(n, h);
                                    r && this.la.hGa(d).includes(n) ? l.push(...q) : !r && k >= p.qa && k < p.re && l.push(...q)
                                };
                            d.elements.forEach(n => {
                                "group" === n.type ? (!__c.$s(n, h) || this.la.hGa(d).includes(n)) && n.ib.forEach(p => {
                                    m(p, oqb(__c.zs(n, p)))
                                }) : m(n, oqb(n))
                            });
                            (e = d.background.video.ref) && l.push(e);
                            return l
                        }, {
                            equals: Zpb.shallow
                        })
                    }
                };
                var Pqb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 12a.75.75 0 0 1 .75.75v2c0 .414.336.75.75.75h2a.75.75 0 0 1 0 1.5h-2A2.25 2.25 0 0 1 5 14.75v-2a.75.75 0 0 1 .75-.75ZM17.5 11.25a.75.75 0 0 0 1.5 0v-2A2.25 2.25 0 0 0 16.75 7h-2a.75.75 0 0 0 0 1.5h2a.75.75 0 0 1 .75.75v2Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 4c-4 0-6 2-6 6v4c0 4 2 6 6 6h8c4 0 6-2 6-6v-4c0-4-2-6-6-6H8Zm8 1.5H8c-1.769 0-2.82.441-3.44 1.06C3.942 7.18 3.5 8.232 3.5 10v4c0 1.769.441 2.82 1.06 3.44.62.619 1.671 1.06 3.44 1.06h8c1.769 0 2.82-.441 3.44-1.06.619-.62 1.06-1.671 1.06-3.44v-4c0-1.769-.441-2.82-1.06-3.44-.62-.619-1.671-1.06-3.44-1.06Z" fill="currentColor"/></svg>';
                var Qqb = __c.ZR({
                    medium: Pqb
                });
                var Rqb = {
                    colorBlack: "rgb(13, 18, 22)",
                    colorBlackA15: "rgba(57, 76, 96, 0.15)",
                    colorWhite: "rgb(255, 255, 255)",
                    baseUnit: "8px",
                    badgeOverlay: "laIQig",
                    small: "TRU08A",
                    large: "BWDOdg"
                };
                __c.sqb = WY(function({
                    size: a
                }) {
                    return MY("div", {
                        className: OY("laIQig", Rqb[a]),
                        children: MY(Qqb, {
                            size: a
                        })
                    })
                });
                __c.PY = LY(function({
                    YBa: a,
                    XBa: b,
                    k6: c,
                    Bd: d,
                    children: e
                }) {
                    const f = qqb(() => GY(() => {
                        if (null == a && null == b) return null;
                        if (__c.Zj(d)) {
                            var g = Math.min(null !== a && void 0 !== a ? a : Number.MAX_SAFE_INTEGER, null !== b && void 0 !== b ? b : Number.MAX_SAFE_INTEGER);
                            return {
                                width: g,
                                height: g
                            }
                        }
                        g = __c.Yj(d);
                        var h = (a || 0) / g.width;
                        const k = (b || 0) / g.height;
                        h = 0 < h && 0 < k ? Math.min(h, k) : Math.max(h, k);
                        return {
                            width: g.width * h,
                            height: g.height * h
                        }
                    }), [d, b, a]).get();
                    return null != f ? MY("div", {
                        className: "yUZqig",
                        children: e({
                            mz: f,
                            $fa: f,
                            yta: f
                        })
                    }) : MY(gZ, {
                        L: d,
                        children: (g, h, k) => MY("div", {
                            ref: g,
                            className: "yUZqig",
                            children: e({
                                mz: k,
                                $fa: h,
                                yta: c ? k.width / k.height < c ? {
                                    width: k.width,
                                    height: k.width / c
                                } : {
                                    width: k.height * c,
                                    height: k.height
                                } : k
                            })
                        })
                    })
                });
                __c.tlb = {
                    Kgb: __c.PY,
                    Hkb: function(a) {
                        const b = a.xb,
                            c = a.ym,
                            d = a.cb,
                            e = a.rM,
                            f = a.dc,
                            g = a.Kg,
                            h = GY(() => b.ma.toArray().map(__c.Ij)),
                            k = __c.Hy(() => h.get(), () => b),
                            {
                                la: l,
                                controller: m
                            } = c({
                                yw: k,
                                EC: !1,
                                rM: e
                            }),
                            n = XY(t => {
                                const u = k.Jw();
                                t = u.indexOf(t);
                                return u[t - 1]
                            }),
                            p = XY(t => {
                                const u = k.Jw();
                                t = u.indexOf(t);
                                return u[t + 1]
                            }),
                            q = XY(t => k.Jw().includes(t)),
                            r = d && new __c.hZ(d, l, !1);
                        return LY(function(t) {
                            const u = h.get()[t.od],
                                v = __c.lqb(u);
                            JY(() => DY(() => k.Jw(), () => {
                                m.uS(u)
                            }), [u]);
                            JY(() => () => {
                                l.stop()
                            }, []);
                            JY(() => {
                                __c.DA.ub ? null != v &&
                                    q(v) ? v !== u && (u === p(v) ? m.forward(v, u) : u === n(v) ? m.uS(u) : m.Hp(u)) : m.Hp(u) : m.uS(u)
                            }, [u, v]);
                            JY(() => {
                                if (t.wfb && r) {
                                    if (null == v || !q(v) || v === u) return __c.KY(r, [u]);
                                    if (u === p(v)) {
                                        const y = __c.KY(r, [u, v]);
                                        return () => {
                                            y();
                                            r.VA(v)
                                        }
                                    }
                                    r.VA(v);
                                    return __c.KY(r, [u])
                                }
                            }, [u, v, t.wfb, l.bb || u]);
                            const [x] = zqb(() => tqb({
                                dc: f,
                                Kg: g,
                                yw: k,
                                la: GY(() => l),
                                Em: GY(() => m)
                            }));
                            return MY(x, { ...t,
                                page: u
                            })
                        })
                    }
                };
                __c.tlb.Jha = tqb;
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        },

        /***/
        286229:
            (_, __, r) => r(47751),

        /***/
        34878:
            (_, __, r) => r(47751),

        /***/
        662966:
            (_, __, r) => r(47751)

    }
])
//# sourceMappingURL=sourcemaps/6abfe159f73c8a05.js.map