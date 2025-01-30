(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [7762], {

        /***/
        777075: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var RW;
                var PW, Nnb, Jnb, Hnb, Onb, Inb;
                __c.JW = function(a) {
                    const b = { ...a.props
                        },
                        c = void 0 !== a.za ? a.za : a.EU;
                    (void 0 !== a.Ai ? a.Ai : a.span).xF(({
                        Kn: d,
                        $F: e
                    }) => {
                        d = a.Blb ? {} : {
                            cg: d()
                        };
                        c.track(a.event, { ...d,
                            Bo: e(),
                            ...b
                        })
                    })
                };
                __c.KW = function(a, b, c) {
                    return 0 > c ? a : 1 < c ? b : a + (b - a) * c
                };
                __c.LW = function(a) {
                    const b = new Map,
                        c = [];
                    for (const d of a) a = b.get(d) || 0, c.push(`${d}__${a}`), b.set(d, a + 1);
                    return c
                };
                __c.MW = function(a) {
                    a = a.next();
                    if (!a.done) return a.value
                };
                __c.OW = function(a) {
                    const b = ({
                        ZMa: c = !1,
                        children: d
                    }) => {
                        const e = Hnb(),
                            f = Inb(null);
                        Jnb(() => Knb(() => {
                            const {
                                width: g,
                                height: h,
                                top: k = 0,
                                left: l = 0
                            } = a(), m = f.current;
                            m && (m.setAttribute("width", g.toString()), m.setAttribute("height", h.toString()), m.setAttribute("x", l.toString()), m.setAttribute("y", k.toString()))
                        }), []);
                        return Lnb(Mnb, {
                            children: [!c && NW("clipPath", {
                                id: e,
                                children: NW("rect", {
                                    ref: f
                                })
                            }), NW("g", {
                                clipPath: c ? void 0 : `url(#${e})`,
                                children: d
                            })]
                        })
                    };
                    b.displayName = null != a.name ? `ClippingContainer(${a.name})` : "ClippingContainer";
                    return b
                };
                PW = __webpack_require__(875604);
                Nnb = PW.createContext;
                Jnb = PW.useEffect;
                Hnb = PW.useId;
                Onb = PW.useLayoutEffect;
                Inb = PW.useRef;
                var QW = __webpack_require__(443763),
                    Mnb = QW.Fragment,
                    NW = QW.jsx,
                    Lnb = QW.jsxs;
                var Knb = __webpack_require__(519427).EH;
                RW = __c.RW = class {
                    static jR(a, b, c) {
                        return 0 >= c ? a : 1 <= c ? b : RW.isEqual(a, b) ? a : new RW(__c.KW(a.r, b.r, c), __c.KW(a.g, b.g, c), __c.KW(a.b, b.b, c), __c.KW(a.a, b.a, c))
                    }
                    static multiply(a, b) {
                        return RW.isEqual(a, __c.SW) ? b : RW.isEqual(b, __c.SW) ? a : new RW(a.r * b.r, a.g * b.g, a.b * b.b, a.a * b.a)
                    }
                    static isEqual(a, b) {
                        return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a
                    }
                    static fromHex(a) {
                        a = a.startsWith("#") ? a.substr(1) : a;
                        a = parseInt(a, 16);
                        return new RW(Math.floor(a / 65536) % 256 / 255, Math.floor(a / 256) % 256 / 255, a % 256 / 255, 1)
                    }
                    constructor(a = 0,
                        b = 0, c = 0, d = 0) {
                        this.r = a;
                        this.g = b;
                        this.b = c;
                        this.a = d
                    }
                };
                __c.TW = new RW(1, 1, 1, 0);
                __c.SW = new RW(1, 1, 1, 1);
                __c.UW = a => {
                    const b = ({
                        children: c
                    }) => {
                        const d = Inb(null);
                        Onb(() => Knb(() => {
                            const {
                                vertical: e,
                                horizontal: f
                            } = a(), g = d.current;
                            g && g.setAttribute("transform", `scale(${e}, ${f})`)
                        }), []);
                        return NW("g", {
                            ref: d,
                            children: c
                        })
                    };
                    b.displayName = null != a.name ? `ScaledLayout(${a.name})` : "ScaledLayout";
                    return b
                };
                __c.VW = Nnb(window);
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/dda2d6748f6548d6.js.map