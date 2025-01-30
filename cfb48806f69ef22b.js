(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [4143], {

        /***/
        665054: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(47751);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var D = __c.D;
                var P = __c.P;
                var SHb = function(a, b = "medium") {
                        if (null !== a && void 0 !== a && a.length) {
                            var c = ("number" === typeof b ? b : __c.YY[b]) * (window.devicePixelRatio || 1);
                            return [...a].sort((d, e) => {
                                d = d.width;
                                e = e.width;
                                return d > c && e < c ? -1 : d < c && e > c ? 1 : Math.abs(d - c) - Math.abs(e - c)
                            })[0].url
                        }
                    },
                    XHb = function(a, b) {
                        class c {
                            static j(d) {
                                P(d, {
                                    Ve: p5,
                                    Xea: p5
                                })
                            }
                            get Ve() {
                                switch (this.Xea) {
                                    case "date":
                                        return new THb(this.ez, b.language || "en-AU");
                                    case "select":
                                        return new UHb(this.ez);
                                    case "mention":
                                        return new VHb(this.ez);
                                    case "plain_number":
                                    case "currency":
                                    case "percentage":
                                    case void 0:
                                        break;
                                    default:
                                        throw new D(this.Xea);
                                }
                            }
                            get Xea() {
                                var d;
                                return null === (d = this.ez.Cz) || void 0 === d ? void 0 : d.type
                            }
                            constructor(d) {
                                c.j(this);
                                this.context = d;
                                this.ez = __c.C(a.WC(d.sheet, d.ua, d.col))
                            }
                        }
                        return WHb(d => (new c(d)).Ve)
                    },
                    ZHb = function() {
                        const a = q5(() => new Map, []);
                        return {
                            W1a: b => {
                                if (a.has(b)) return __c.C(a.get(b));
                                const c = YHb();
                                a.set(b, c);
                                return c
                            }
                        }
                    },
                    $Hb = function(a, b) {
                        return q5(() => {
                            const c = new Map;
                            return d => {
                                if (c.has(d)) return __c.C(c.get(d));
                                const e = a(d);
                                c.set(d, e);
                                return e
                            }
                        }, b)
                    },
                    gIb = function({
                        children: a,
                        keyFrame: b,
                        wNa: c,
                        ariaLive: d,
                        AFa: e = !1,
                        zUa: f,
                        nha: g,
                        NZa: h,
                        Zlb: k,
                        jza: l,
                        YAa: m,
                        Xlb: n,
                        Jeb: p
                    }) {
                        const {
                            W1a: q
                        } = ZHb(), {
                            a1a: r,
                            vab: t
                        } = aIb(b, a), u = $Hb(v => () => {
                            (!1 === e || "function" === typeof e && !e(v)) && t(v)
                        }, [t, e]);
                        return r5("div", {
                            className: s5(g, "epgNPA", {
                                NvaaRg: "hidden" === l,
                                DiwaPA: "fill-height" === c,
                                _3pVd7A: "flex-grow" === c
                            }),
                            children: r5("div", {
                                className: s5("KhPLRA", h),
                                "aria-live": d,
                                style: k,
                                role: "region",
                                children: [...r.map(({
                                    key: v,
                                    element: x
                                }) => r5(bIb, { in: v === b,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(v),
                                    onExited: u(v),
                                    children: y =>
                                        r5(cIb.Provider, {
                                            value: y,
                                            children: r5("div", {
                                                className: s5("T3uz5Q", n, {
                                                    NvaaRg: "hidden" === m
                                                }),
                                                ref: q(v),
                                                "aria-hidden": y === dIb || y === eIb || y === fIb,
                                                children: v === b ? a : x
                                            })
                                        })
                                }, v)), r.every(v => v.key !== b) && r5(bIb, { in: !1,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(b),
                                    onExited: e ? void 0 : u(b),
                                    children: v => r5(cIb.Provider, {
                                        value: v,
                                        children: r5("div", {
                                            className: s5("T3uz5Q", n),
                                            ref: q(b),
                                            "aria-hidden": v === dIb || v === eIb || v === fIb,
                                            children: a
                                        })
                                    })
                                }, b)]
                            })
                        })
                    },
                    aIb = function(a, b) {
                        const [c, d] = hIb(() => [{
                            key: a,
                            element: b
                        }]);
                        iIb(() => {
                            d(f => f.every(g => g.key !== a) ? f.concat({
                                key: a,
                                element: b
                            }) : f.map(g => g.key === a ? {
                                key: a,
                                element: b
                            } : g))
                        }, [a, b]);
                        const e = jIb(f => {
                            d(g => g.filter(h => h.key !== f))
                        }, []);
                        return {
                            a1a: c,
                            vab: e
                        }
                    },
                    kIb = function(a) {
                        switch (a.type) {
                            case "mention":
                                return "bCAtqw";
                            case "embed":
                                return "BTcT3w";
                            case "date":
                                return "McKQgg";
                            case "select":
                                return "V2E5nQ";
                            default:
                                throw new D(a);
                        }
                    },
                    mIb = function(a, b) {
                        switch (a.type) {
                            case "mention":
                            case "embed":
                            case "date":
                                break;
                            case "select":
                                return r5(lIb, {
                                    selected: !!b.xLa
                                });
                            default:
                                throw new D(a);
                        }
                    },
                    nIb = function(a) {
                        __c.w(!0, "chunkLength must be positive");
                        const b = [];
                        for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
                        return b
                    },
                    oIb = function(a, b, c) {
                        if (c) {
                            var d = SHb(c.images, "medium"),
                                e = SHb(c.images, "xxxlarge");
                            if (d && e) {
                                c = new Image;
                                c.src = d;
                                var f = new Image;
                                f.src = e;
                                f.onload = t5(() => a.e1.set(b, e));
                                f.onerror = t5(() => a.e1.set(b, void 0));
                                !f.complete && c.complete ? a.e1.set(b, d) : c.src = ""
                            }
                        } else a.e1.set(b, void 0)
                    },
                    qIb = function(a, {
                        url: b,
                        id: c,
                        extension: d
                    }) {
                        if (!a.promises.has(b)) {
                            const e = new Promise(f => {
                                a.Wf ?
                                    a.Wf.Pob(new pIb({
                                        id: c,
                                        extension: d
                                    })).then(({
                                        document: g
                                    }) => {
                                        const h = g.Bf.content.title;
                                        h ? (u5(() => a.FOa.set(b, {
                                            status: 1,
                                            title: h
                                        })), f(h)) : f(void 0)
                                    }).catch(() => {
                                        u5(() => a.FOa.set(b, {
                                            status: 2
                                        }));
                                        f(void 0)
                                    }) : f(void 0)
                            });
                            a.promises.set(b, e)
                        }
                        return a.promises.get(b)
                    },
                    rIb = __c.M(() => ({
                        Zpb: __c.GN(11),
                        mode: __c.E("A?", 1, "BY_USER_IDS"),
                        nfb: __c.FN(1)
                    })),
                    pIb = __c.M(() => ({
                        id: __c.W("id", 1),
                        extension: __c.Y("extension", 3),
                        hbb: __c.BN("revision", 5),
                        version: __c.BN("version", 2),
                        Hpb: __c.BN("imagesetsLimit", 6)
                    })),
                    sIb = __webpack_require__(443763),
                    r5 = sIb.jsx,
                    tIb = sIb.jsxs;
                var v5 = __webpack_require__(620826).Pi;
                var w5 = __webpack_require__(875604),
                    uIb = w5.createContext,
                    YHb = w5.createRef,
                    x5 = w5.memo,
                    jIb = w5.useCallback,
                    iIb = w5.useEffect,
                    vIb = w5.useLayoutEffect,
                    q5 = w5.useMemo,
                    hIb = w5.useState;
                var y5 = __webpack_require__(519427),
                    t5 = y5.aD,
                    wIb = y5.p6,
                    p5 = y5.Fl,
                    xIb = y5.LO,
                    z5 = y5.vP,
                    u5 = y5.z;
                var WHb = __webpack_require__(635872).Om;
                var yIb = __webpack_require__,
                    zIb = yIb(993864),
                    s5 = yIb.n_x(zIb)();
                var bIb = __webpack_require__(489212).Z;
                var A5 = __webpack_require__(92009),
                    fIb = A5.Wj,
                    dIb = A5.Ix,
                    eIb = A5.$r;
                var AIb = class {
                        static j(a) {
                            P(a, {
                                text: p5,
                                user: p5,
                                brand: p5
                            })
                        }
                        get text() {
                            return this.Ve.text
                        }
                        get user() {
                            return this.Ve.user
                        }
                        get brand() {
                            return this.Ve.brand
                        }
                        constructor(a) {
                            AIb.j(this);
                            this.Ve = a;
                            this.type = "mention"
                        }
                    },
                    BIb = class {
                        static j(a) {
                            P(a, {
                                text: p5,
                                url: p5
                            })
                        }
                        get text() {
                            return this.Ve.text
                        }
                        get url() {
                            return this.Ve.url
                        }
                        constructor(a) {
                            BIb.j(this);
                            this.Ve = a;
                            this.type = "embed"
                        }
                    },
                    CIb = class {
                        static j(a) {
                            P(a, {
                                text: p5,
                                language: p5,
                                style: p5,
                                date: p5
                            })
                        }
                        get text() {
                            return this.Ve.text
                        }
                        get language() {
                            return this.Ve.language
                        }
                        get style() {
                            return this.Ve.style
                        }
                        get date() {
                            return this.Ve.date
                        }
                        constructor(a) {
                            CIb.j(this);
                            this.Ve = a;
                            this.type = "date"
                        }
                    },
                    DIb = class {
                        static j(a) {
                            P(a, {
                                text: p5,
                                options: p5,
                                Je: p5,
                                SO: p5
                            })
                        }
                        get text() {
                            return this.Ve.text
                        }
                        get options() {
                            return this.Ve.options.map(a => a)
                        }
                        get Je() {
                            return this.Ve.Je
                        }
                        get SO() {
                            var a;
                            return null === (a = this.Ve.options.first(b => b.id === this.Ve.Je)) || void 0 === a ? void 0 : a.fill.color
                        }
                        constructor(a) {
                            DIb.j(this);
                            this.Ve = a;
                            this.type = "select"
                        }
                    },
                    EIb = WHb(a => {
                        switch (a.type) {
                            case "mention":
                                return new AIb(a);
                            case "embed":
                                return new BIb(a);
                            case "date":
                                return new CIb(a);
                            case "select":
                                return new DIb(a);
                            default:
                                throw new D(a);
                        }
                    });
                var THb = class {
                        static j(a) {
                            P(a, {
                                style: p5,
                                date: p5,
                                text: p5
                            })
                        }
                        get style() {
                            return 2
                        }
                        get date() {
                            var a;
                            (a = 2 === this.Lv.du.type ? this.Lv.du.date : void 0) || (a = new Date, a = __c.OE(a), a = {
                                year: a.getFullYear(),
                                month: a.getMonth() + 1,
                                day: a.getDate(),
                                R2a: a.getHours(),
                                T6a: a.getMinutes()
                            });
                            return a
                        }
                        get text() {
                            return this.Lv.Wy
                        }
                        constructor(a, b) {
                            THb.j(this);
                            this.Lv = a;
                            this.language = b;
                            this.type = "date"
                        }
                    },
                    FIb = class {
                        get label() {
                            return this.option.label
                        }
                        get fill() {
                            return this.option.fill
                        }
                        constructor(a, b) {
                            this.option = a;
                            this.id = b
                        }
                    },
                    UHb = class {
                        static j(a) {
                            P(a, {
                                options: p5,
                                Je: p5,
                                SO: p5,
                                text: p5,
                                wCa: p5({
                                    equals: wIb.shallow
                                })
                            })
                        }
                        get options() {
                            return this.wCa.map((a, b) => new FIb(a, b))
                        }
                        get Je() {
                            var a;
                            return null === (a = this.options.find(b => b.label === this.text)) || void 0 === a ? void 0 : a.id
                        }
                        get SO() {
                            var a;
                            return null === (a = this.options.find(b => b.id === this.Je)) || void 0 === a ? void 0 : a.fill.color
                        }
                        get text() {
                            return this.Lv.Wy
                        }
                        get wCa() {
                            var a, b;
                            __c.B("select" === (null === (a = this.Lv.Cz) || void 0 === a ? void 0 : a.type));
                            return null === (b = this.Lv.Cz) || void 0 === b ?
                                void 0 : b.options
                        }
                        constructor(a) {
                            UHb.j(this);
                            this.Lv = a;
                            this.type = "select"
                        }
                    },
                    VHb = class {
                        static j(a) {
                            P(a, {
                                tK: p5
                            })
                        }
                        get text() {
                            return this.tK ? this.tK.text : ""
                        }
                        get user() {
                            return this.tK ? this.tK.user : ""
                        }
                        get brand() {
                            return this.tK ? this.tK.brand : ""
                        }
                        get tK() {
                            if (7 !== this.Lv.du.type) return __c.B(6 === this.Lv.du.type), this.Lv.du ? this.Lv.du.value[0] : void 0
                        }
                        constructor(a) {
                            VHb.j(this);
                            this.Lv = a;
                            this.type = "mention"
                        }
                    };
                var GIb = class {
                    tja(a) {
                        this.Kfa.tja(a)
                    }
                    G_(a, b) {
                        this.Kfa.G_(a, b)
                    }
                    XW(a) {
                        return this.Kfa.XW(a)
                    }
                    qja(a) {
                        this.aBa.qja(a)
                    }
                    constructor(a, b, c) {
                        this.Kfa = a;
                        this.aBa = b;
                        this.qG = c;
                        this.Nta = new __c.Lgb;
                        this.t1a = d => __c.SBa(this.Nta, d)
                    }
                };
                var cIb = uIb(void 0);
                var HIb = Number.parseInt("300ms", 10),
                    IIb = {
                        enter: "gWeP3g",
                        enterActive: "YL_ApQ",
                        enterDone: void 0,
                        exitActive: "qqCHKg",
                        exitDone: "gum40Q"
                    },
                    JIb = x5(function({
                        rw: a = !1,
                        children: b,
                        keyFrame: c,
                        wNa: d,
                        jza: e = "hidden",
                        YAa: f = "hidden",
                        ariaLive: g,
                        AFa: h,
                        spb: k = "none"
                    }) {
                        a = __c.ub() && !a;
                        return gIb({
                            children: b,
                            keyFrame: c,
                            wNa: d,
                            ariaLive: g,
                            jza: e,
                            YAa: f,
                            AFa: h,
                            zUa: a ? HIb : 0,
                            NZa: s5({
                                _4C1vIA: a,
                                pOll6Q: "none" === k,
                                g1T5pQ: "layout" === k
                            }),
                            Jeb: IIb
                        })
                    });
                var KIb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
                var LIb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
                var MIb = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
                var NIb = x5(a => {
                        const b = a.className,
                            c = a.ariaLabel,
                            d = a.SO,
                            e = a.UYa,
                            f = a.SSa,
                            g = a.rTa,
                            h = a.measureRef,
                            k = a.onPointerDown,
                            l = s5({
                                EdewNw: !!f,
                                _6ZpPrw: !!g,
                                pzXyUA: 0 < a.text.length
                            });
                        a = 0 < a.text.length ? a.text : "\ufeff";
                        return tIb("span", {
                            className: s5(b, "FedJ0Q"),
                            "aria-label": c || a,
                            children: [r5("span", {
                                className: s5("_2Lr6pQ", l),
                                children: r5("span", {
                                    className: "Z_WvzQ",
                                    children: a
                                })
                            }), tIb("span", {
                                className: s5("XemTdQ", l),
                                ref: h,
                                style: d ? {
                                    color: d
                                } : void 0,
                                onPointerDown: k,
                                children: [f, r5("span", {
                                    className: s5("U_QH_A", {
                                        C9XL8g: !e
                                    }),
                                    children: a
                                }), g]
                            })]
                        })
                    }),
                    OIb = x5(a => {
                        const b = a.backgroundColor,
                            c = a.Pp;
                        a = a.text;
                        const d = {
                            width: "0.9em",
                            height: "0.9em"
                        };
                        return r5(JIb, {
                            keyFrame: c ? "show" : "hide",
                            children: a ? r5(__c.Kqb, {
                                name: a,
                                style: d,
                                backgroundColor: b,
                                Pp: c,
                                borderColor: c ? void 0 : b
                            }) : r5("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: MIb
                                }
                            })
                        })
                    }),
                    PIb = x5(a => {
                        a = a.icon;
                        return r5(JIb, {
                            keyFrame: a ? "favicon" : "placeholder",
                            children: a ? r5("span", {
                                className: "_tFJqA",
                                children: r5("img", {
                                    src: a,
                                    className: "qpbYdw"
                                })
                            }) : r5("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: LIb
                                }
                            })
                        })
                    }),
                    QIb = x5(() => r5("span", {
                        "aria-hidden": "true",
                        className: "_tFJqA",
                        dangerouslySetInnerHTML: {
                            __html: KIb
                        }
                    })),
                    lIb = x5(({
                        selected: a
                    }) => r5("div", {
                        className: s5("whph4A", {
                            zgzjww: a
                        }),
                        children: r5(__c.xM, {
                            size: "medium",
                            style: {
                                width: "0.9em",
                                height: "0.9em"
                            },
                            className: "_tFJqA"
                        })
                    })),
                    RIb = v5(a => {
                        const b = a.Ve,
                            c = a.xLa,
                            d = a.tpa,
                            e = a.measureRef,
                            f = a.Ru;
                        a = a.onPointerDown;
                        const g = b.text || "\u00a0".repeat(16);
                        iIb(() => {
                            u5(() => {
                                switch (b.type) {
                                    case "mention":
                                        b.user &&
                                            d.tja(b.user);
                                        break;
                                    case "embed":
                                        d.qja(b.url)
                                }
                            })
                        }, [b, d]);
                        vIb(() => {
                            null === f || void 0 === f ? void 0 : f()
                        }, [b.type, g, f]);
                        var h = 0 === b.text.length,
                            k = b.text || "",
                            l = kIb(b),
                            m = b.SO;
                        a: {
                            switch (b.type) {
                                case "mention":
                                    var n = r5(OIb, {
                                        Pp: b.user ? d.XW(b.user) : void 0,
                                        text: b.text,
                                        backgroundColor: b.user ? d.t1a(b.user).background : void 0
                                    });
                                    break a;
                                case "embed":
                                    n = r5(PIb, {
                                        icon: d.aBa.jW.get(b.url)
                                    });
                                    break a;
                                case "date":
                                    n = b.text ? void 0 : r5(QIb, {});
                                    break a;
                                case "select":
                                    break;
                                default:
                                    throw new D(b);
                            }
                            n = void 0
                        }
                        return r5(NIb, {
                            text: g,
                            UYa: h,
                            ariaLabel: k,
                            className: l,
                            SO: m,
                            SSa: n,
                            rTa: mIb(b, {
                                xLa: c
                            }),
                            measureRef: e,
                            onPointerDown: a
                        })
                    });
                var SIb = class {
                        static j(a) {
                            P(a, {
                                qN: xIb.shallow,
                                PBa: t5
                            })
                        }
                        XW(a) {
                            return this.Cxa.XW(a)
                        }
                        tja(a) {
                            this.Mta.has(a) || this.qN.has(a) || (this.qN.add(a), this.yYa())
                        }
                        G_(a, b) {
                            this.Mta.has(a) || (this.Mta.set(a, b), this.qN.delete(a), oIb(this.Cxa, a, b))
                        }
                        async PBa() {
                            if (0 !== this.qN.size) {
                                var a = [...this.qN.values()];
                                this.qN.clear();
                                if (this.Dxa) {
                                    var b = await this.Dxa;
                                    await Promise.all(nIb(a).map(async c => {
                                        const d = new rIb({
                                                nfb: c
                                            }),
                                            {
                                                ojb: e
                                            } = await b.sob(d);
                                        u5(() => c.forEach(f => this.G_(f, e.get(f))))
                                    }))
                                } else a.forEach(c => this.G_(c))
                            }
                        }
                        constructor(a,
                            b) {
                            SIb.j(this);
                            this.Dxa = a;
                            this.Mta = new z5;
                            this.qN = new Set;
                            this.Cxa = new TIb;
                            this.yYa = __c.Sc(() => this.PBa(), 200);
                            u5(() => {
                                null === b || void 0 === b ? void 0 : b.forEach((c, d) => this.G_(d, c))
                            })
                        }
                    },
                    TIb = class {
                        XW(a) {
                            return this.e1.get(a)
                        }
                        constructor() {
                            this.e1 = new z5
                        }
                    };
                var UIb = class {
                    static j(a) {
                        P(a, {
                            n0a: t5
                        })
                    }
                    async n0a(a) {
                        if (this.Wf) {
                            var b = (new URL(a)).pathname; {
                                const c = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                                null == c || 2 > c.length ? b = void 0 : (b = c[2], (new Set(["edit", "remix", "view", "watch"])).has(c[2]) && (b = void 0), b = {
                                    id: c[1],
                                    extension: b
                                })
                            }
                            if (b) return await qIb(this, {
                                url: a,
                                ...b
                            })
                        }
                    }
                    constructor(a) {
                        UIb.j(this);
                        this.Wf = a;
                        this.FOa = new z5;
                        this.promises = new Map
                    }
                };
                var VIb = class {
                    static j(a) {
                        P(a, {
                            jW: xIb.shallow
                        })
                    }
                    async qja(a) {
                        const b = new Image;
                        let c;
                        try {
                            var d;
                            const e = await (null === (d = this.qG) || void 0 === d ? void 0 : d.H2(a));
                            c = null === e || void 0 === e ? void 0 : e.m0a
                        } catch (e) {}
                        c ? (b.src = c, b.onload = t5(() => this.jW.set(a, c)), b.onerror = t5(() => this.jW.set(a, void 0))) : this.jW.set(a, void 0)
                    }
                    constructor(a) {
                        VIb.j(this);
                        this.qG = a;
                        this.jW = new Map
                    }
                };
                __c.eza = {
                    J3a: function(a) {
                        const b = a.document,
                            c = a.Wf,
                            d = a.qG;
                        var e = a.Z2;
                        const f = a.Qc,
                            g = a.jy,
                            h = a.q1;
                        a = a.Tpb;
                        e = new SIb(null === a || void 0 === a ? void 0 : a(), e);
                        a = new VIb(d);
                        new UIb(c);
                        const k = new GIb(e, a, d),
                            l = XHb(h, b);
                        f.Wo.jea = v5(({
                            item: n,
                            measureRef: p
                        }) => {
                            const q = q5(() => EIb(n.Ve), [n.Ve]);
                            return r5(RIb, {
                                Ve: q,
                                tpa: k,
                                measureRef: p
                            })
                        });
                        const m = v5(({
                            context: n,
                            Ru: p
                        }) => {
                            const q = q5(() => __c.C(l(n)), [n]);
                            return r5(RIb, {
                                Ve: q,
                                tpa: k,
                                Ru: p
                            })
                        });
                        g.$va = ({
                            context: n,
                            Ru: p
                        }) => ({
                            type: "react",
                            node: r5(m, {
                                context: n,
                                Ru: p
                            })
                        });
                        return {
                            tpa: k
                        }
                    }
                };
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/cfb48806f69ef22b.js.map