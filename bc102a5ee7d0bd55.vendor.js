(self.webpackChunk_canva_web = self.webpackChunk_canva_web || []).push([
    [2933], {
        765511: (t, e, i) => {
            var s, a;
            "undefined" != typeof navigator && (a = window || {}, void 0 === (s = function() {
                return function(t) {
                    "use strict";
                    var e, i = "http://www.w3.org/2000/svg",
                        s = "",
                        a = -999999,
                        r = !0,
                        n = "",
                        h = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                        o = Math.pow,
                        l = Math.sqrt,
                        p = Math.floor,
                        f = (Math.max, Math.min),
                        d = {};

                    function m() {
                        return {}
                    }(function() {
                        var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                            i = e.length;
                        for (t = 0; t < i; t += 1) d[e[t]] = Math[e[t]]
                    })(), d.random = Math.random, d.abs = function(t) {
                        if ("object" == typeof t && t.length) {
                            var e, i = V(t.length),
                                s = t.length;
                            for (e = 0; e < s; e += 1) i[e] = Math.abs(t[e]);
                            return i
                        }
                        return Math.abs(t)
                    };
                    var c = 150,
                        u = Math.PI / 180,
                        g = .5519;

                    function v(t) {
                        t && Math.round
                    }

                    function y(t, e, i, s) {
                        this.type = t, this.currentTime = e, this.totalTime = i, this.direction = s < 0 ? -1 : 1
                    }

                    function b(t, e) {
                        this.type = t, this.direction = e < 0 ? -1 : 1
                    }

                    function _(t, e, i, s) {
                        this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = s < 0 ? -1 : 1
                    }

                    function k(t, e, i) {
                        this.type = t, this.firstFrame = e, this.totalFrames = i
                    }

                    function A(t, e) {
                        this.type = t, this.target = e
                    }

                    function P(t, e) {
                        this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
                    }

                    function C(t) {
                        this.type = "configError", this.nativeError = t
                    }
                    v(!1);
                    var x, F = (x = 0, function() {
                        return n + "__lottie_element_" + (x += 1)
                    });

                    function M(t, e, i) {
                        var s, a, r, n, h, o, l, p;
                        switch (o = i * (1 - e), l = i * (1 - (h = 6 * t - (n = Math.floor(6 * t))) * e), p = i * (1 - (1 - h) * e), n % 6) {
                            case 0:
                                s = i, a = p, r = o;
                                break;
                            case 1:
                                s = l, a = i, r = o;
                                break;
                            case 2:
                                s = o, a = i, r = p;
                                break;
                            case 3:
                                s = o, a = l, r = i;
                                break;
                            case 4:
                                s = p, a = o, r = i;
                                break;
                            case 5:
                                s = i, a = o, r = l
                        }
                        return [s, a, r]
                    }

                    function D(t, e, i) {
                        var s, a = Math.max(t, e, i),
                            r = Math.min(t, e, i),
                            n = a - r,
                            h = 0 === a ? 0 : n / a,
                            o = a / 255;
                        switch (a) {
                            case r:
                                s = 0;
                                break;
                            case t:
                                s = e - i + n * (e < i ? 6 : 0), s /= 6 * n;
                                break;
                            case e:
                                s = i - t + 2 * n, s /= 6 * n;
                                break;
                            case i:
                                s = t - e + 4 * n, s /= 6 * n
                        }
                        return [s, h, o]
                    }

                    function S(t, e) {
                        var i = D(255 * t[0], 255 * t[1], 255 * t[2]);
                        return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), M(i[0], i[1], i[2])
                    }

                    function w(t, e) {
                        var i = D(255 * t[0], 255 * t[1], 255 * t[2]);
                        return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), M(i[0], i[1], i[2])
                    }

                    function E(t, e) {
                        var i = D(255 * t[0], 255 * t[1], 255 * t[2]);
                        return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), M(i[0], i[1], i[2])
                    }
                    var T = function() {
                        var t, e, i = [];
                        for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e;
                        return function(t, e, s) {
                            return t < 0 && (t = 0), e < 0 && (e = 0), s < 0 && (s = 0), "#" + i[t] + i[e] + i[s]
                        }
                    }();

                    function I() {}
                    I.prototype = {
                        triggerEvent: function(t, e) {
                            if (this._cbs[t])
                                for (var i = this._cbs[t], s = 0; s < i.length; s += 1) i[s](e)
                        },
                        addEventListener: function(t, e) {
                            return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                                function() {
                                    this.removeEventListener(t, e)
                                }.bind(this)
                        },
                        removeEventListener: function(t, e) {
                            if (e) {
                                if (this._cbs[t]) {
                                    for (var i = 0, s = this._cbs[t].length; i < s;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, s -= 1), i += 1;
                                    this._cbs[t].length || (this._cbs[t] = null)
                                }
                            } else this._cbs[t] = null
                        }
                    };
                    var L = function() {
                        function t(t, e) {
                            var i, s = 0,
                                a = [];
                            switch (t) {
                                case "int16":
                                case "uint8c":
                                    i = 1;
                                    break;
                                default:
                                    i = 1.1
                            }
                            for (s = 0; s < e; s += 1) a.push(i);
                            return a
                        }

                        function e(e, i) {
                            return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
                        }
                        return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? e : t
                    }();

                    function V(t) {
                        return Array.apply(null, {
                            length: t
                        })
                    }

                    function R(t) {
                        return document.createElementNS(i, t)
                    }

                    function z(t) {
                        return document.createElement(t)
                    }

                    function N() {}
                    N.prototype = {
                        addDynamicProperty: function(t) {
                            -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                        },
                        iterateDynamicProperties: function() {
                            var t;
                            this._mdf = !1;
                            var e = this.dynamicProperties.length;
                            for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
                        },
                        initDynamicPropertyContainer: function(t) {
                            this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                        }
                    };
                    var O, B = (O = {
                            0: "source-over",
                            1: "multiply",
                            2: "screen",
                            3: "overlay",
                            4: "darken",
                            5: "lighten",
                            6: "color-dodge",
                            7: "color-burn",
                            8: "hard-light",
                            9: "soft-light",
                            10: "difference",
                            11: "exclusion",
                            12: "hue",
                            13: "saturation",
                            14: "color",
                            15: "luminosity"
                        }, function(t) {
                            return O[t] || ""
                        }),
                        q = {
                            1: "butt",
                            2: "round",
                            3: "square"
                        },
                        j = {
                            1: "miter",
                            2: "round",
                            3: "bevel"
                        },
                        G = function() {
                            var t = Math.cos,
                                e = Math.sin,
                                i = Math.tan,
                                s = Math.round;

                            function a() {
                                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                            }

                            function r(i) {
                                if (0 === i) return this;
                                var s = t(i),
                                    a = e(i);
                                return this._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            }

                            function n(i) {
                                if (0 === i) return this;
                                var s = t(i),
                                    a = e(i);
                                return this._t(1, 0, 0, 0, 0, s, -a, 0, 0, a, s, 0, 0, 0, 0, 1)
                            }

                            function h(i) {
                                if (0 === i) return this;
                                var s = t(i),
                                    a = e(i);
                                return this._t(s, 0, a, 0, 0, 1, 0, 0, -a, 0, s, 0, 0, 0, 0, 1)
                            }

                            function o(i) {
                                if (0 === i) return this;
                                var s = t(i),
                                    a = e(i);
                                return this._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            }

                            function l(t, e) {
                                return this._t(1, e, t, 1, 0, 0)
                            }

                            function p(t, e) {
                                return this.shear(i(t), i(e))
                            }

                            function f(s, a) {
                                var r = t(a),
                                    n = e(a);
                                return this._t(r, n, 0, 0, -n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(s), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            }

                            function d(t, e, i) {
                                return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                            }

                            function m(t, e, i, s, a, r, n, h, o, l, p, f, d, m, c, u) {
                                return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = s, this.props[4] = a, this.props[5] = r, this.props[6] = n, this.props[7] = h, this.props[8] = o, this.props[9] = l, this.props[10] = p, this.props[11] = f, this.props[12] = d, this.props[13] = m, this.props[14] = c, this.props[15] = u, this
                            }

                            function c(t, e, i) {
                                return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
                            }

                            function u(t, e, i, s, a, r, n, h, o, l, p, f, d, m, c, u) {
                                var g = this.props;
                                if (1 === t && 0 === e && 0 === i && 0 === s && 0 === a && 1 === r && 0 === n && 0 === h && 0 === o && 0 === l && 1 === p && 0 === f) return g[12] = g[12] * t + g[15] * d, g[13] = g[13] * r + g[15] * m, g[14] = g[14] * p + g[15] * c, g[15] *= u, this._identityCalculated = !1, this;
                                var v = g[0],
                                    y = g[1],
                                    b = g[2],
                                    _ = g[3],
                                    k = g[4],
                                    A = g[5],
                                    P = g[6],
                                    C = g[7],
                                    x = g[8],
                                    F = g[9],
                                    M = g[10],
                                    D = g[11],
                                    S = g[12],
                                    w = g[13],
                                    E = g[14],
                                    T = g[15];
                                return g[0] = v * t + y * a + b * o + _ * d, g[1] = v * e + y * r + b * l + _ * m, g[2] = v * i + y * n + b * p + _ * c, g[3] = v * s + y * h + b * f + _ * u, g[4] = k * t + A * a + P * o + C * d, g[5] = k * e + A * r + P * l + C * m, g[6] = k * i + A * n + P * p + C * c, g[7] = k * s + A * h + P * f + C * u, g[8] = x * t + F * a + M * o + D * d, g[9] = x * e + F * r + M * l + D * m, g[10] = x * i + F * n + M * p + D * c, g[11] = x * s + F * h + M * f + D * u, g[12] = S * t + w * a + E * o + T * d, g[13] = S * e + w * r + E * l + T * m, g[14] = S * i + w * n + E * p + T * c, g[15] = S * s + w * h + E * f + T * u, this._identityCalculated = !1, this
                            }

                            function g() {
                                return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                            }

                            function v(t) {
                                for (var e = 0; e < 16;) {
                                    if (t.props[e] !== this.props[e]) return !1;
                                    e += 1
                                }
                                return !0
                            }

                            function y(t) {
                                var e;
                                for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                                return t
                            }

                            function b(t) {
                                var e;
                                for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                            }

                            function _(t, e, i) {
                                return {
                                    x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                                    y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                                    z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                                }
                            }

                            function k(t, e, i) {
                                return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
                            }

                            function A(t, e, i) {
                                return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
                            }

                            function P(t, e, i) {
                                return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                            }

                            function C() {
                                var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                    e = this.props[5] / t,
                                    i = -this.props[1] / t,
                                    s = -this.props[4] / t,
                                    a = this.props[0] / t,
                                    r = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                                    n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                                    h = new G;
                                return h.props[0] = e, h.props[1] = i, h.props[4] = s, h.props[5] = a, h.props[12] = r, h.props[13] = n, h
                            }

                            function x(t) {
                                return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                            }

                            function F(t) {
                                var e, i = t.length,
                                    s = [];
                                for (e = 0; e < i; e += 1) s[e] = x(t[e]);
                                return s
                            }

                            function M(t, e, i) {
                                var s = L("float32", 6);
                                if (this.isIdentity()) s[0] = t[0], s[1] = t[1], s[2] = e[0], s[3] = e[1], s[4] = i[0], s[5] = i[1];
                                else {
                                    var a = this.props[0],
                                        r = this.props[1],
                                        n = this.props[4],
                                        h = this.props[5],
                                        o = this.props[12],
                                        l = this.props[13];
                                    s[0] = t[0] * a + t[1] * n + o, s[1] = t[0] * r + t[1] * h + l, s[2] = e[0] * a + e[1] * n + o, s[3] = e[0] * r + e[1] * h + l, s[4] = i[0] * a + i[1] * n + o, s[5] = i[0] * r + i[1] * h + l
                                }
                                return s
                            }

                            function D(t, e, i) {
                                return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
                            }

                            function S(t, e) {
                                if (this.isIdentity()) return t + "," + e;
                                var i = this.props;
                                return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                            }

                            function w() {
                                for (var t = 0, e = this.props, i = "matrix3d(", a = 1e4; t < 16;) i += s(e[t] * a) / a, i += 15 === t ? ")" : ",", t += 1;
                                return i
                            }

                            function E(t) {
                                var e = 1e4;
                                return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? s(t * e) / e : t
                            }

                            function T() {
                                var t = this.props;
                                return "matrix(" + E(t[0]) + "," + E(t[1]) + "," + E(t[4]) + "," + E(t[5]) + "," + E(t[12]) + "," + E(t[13]) + ")"
                            }
                            return function() {
                                this.reset = a, this.rotate = r, this.rotateX = n, this.rotateY = h, this.rotateZ = o, this.skew = p, this.skewFromAxis = f, this.shear = l, this.scale = d, this.setTransform = m, this.translate = c, this.transform = u, this.applyToPoint = _, this.applyToX = k, this.applyToY = A, this.applyToZ = P, this.applyToPointArray = D, this.applyToTriplePoints = M, this.applyToPointStringified = S, this.toCSS = w, this.to2dCSS = T, this.clone = y, this.cloneFromProps = b, this.equals = v, this.inversePoints = F, this.inversePoint = x, this.getInverseMatrix = C, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = L("float32", 16), this.reset()
                            }
                        }();
                    ! function(t, e) {
                        var i, s = this,
                            a = 256,
                            r = 6,
                            n = 52,
                            h = "random",
                            o = e.pow(a, r),
                            l = e.pow(2, n),
                            p = 2 * l,
                            f = a - 1;

                        function d(i, s, n) {
                            var f = [],
                                d = g(u((s = !0 === s ? {
                                    entropy: !0
                                } : s || {}).entropy ? [i, y(t)] : null === i ? v() : i, 3), f),
                                b = new m(f),
                                _ = function() {
                                    for (var t = b.g(r), e = o, i = 0; t < l;) t = (t + i) * a, e *= a, i = b.g(1);
                                    for (; t >= p;) t /= 2, e /= 2, i >>>= 1;
                                    return (t + i) / e
                                };
                            return _.int32 = function() {
                                return 0 | b.g(4)
                            }, _.quick = function() {
                                return b.g(4) / 4294967296
                            }, _.double = _, g(y(b.S), t), (s.pass || n || function(t, i, s, a) {
                                return a && (a.S && c(a, b), t.state = function() {
                                    return c(b, {})
                                }), s ? (e[h] = t, i) : t
                            })(_, d, "global" in s ? s.global : this == e, s.state)
                        }

                        function m(t) {
                            var e, i = t.length,
                                s = this,
                                r = 0,
                                n = s.i = s.j = 0,
                                h = s.S = [];
                            for (i || (t = [i++]); r < a;) h[r] = r++;
                            for (r = 0; r < a; r++) h[r] = h[n = f & n + t[r % i] + (e = h[r])], h[n] = e;
                            s.g = function(t) {
                                for (var e, i = 0, r = s.i, n = s.j, h = s.S; t--;) e = h[r = f & r + 1], i = i * a + h[f & (h[r] = h[n = f & n + e]) + (h[n] = e)];
                                return s.i = r, s.j = n, i
                            }
                        }

                        function c(t, e) {
                            return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
                        }

                        function u(t, e) {
                            var i, s = [],
                                a = typeof t;
                            if (e && "object" == a)
                                for (i in t) try {
                                    s.push(u(t[i], e - 1))
                                } catch (r) {}
                            return s.length ? s : "string" == a ? t : t + "\0"
                        }

                        function g(t, e) {
                            for (var i, s = t + "", a = 0; a < s.length;) e[f & a] = f & (i ^= 19 * e[f & a]) + s.charCodeAt(a++);
                            return y(e)
                        }

                        function v() {
                            try {
                                if (i) return y(i.randomBytes(a));
                                var e = new Uint8Array(a);
                                return (s.crypto || s.msCrypto).getRandomValues(e), y(e)
                            } catch (h) {
                                var r = s.navigator,
                                    n = r && r.plugins;
                                return [+new Date, s, n, s.screen, y(t)]
                            }
                        }

                        function y(t) {
                            return String.fromCharCode.apply(0, t)
                        }
                        e["seed" + h] = d, g(e.random(), t)
                    }([], d);
                    var W = function() {
                        var t = {};
                        t.getBezierEasing = i;
                        var e = {};

                        function i(t, i, s, a, r) {
                            var n = r || ("bez_" + t + "_" + i + "_" + s + "_" + a).replace(/\./g, "p");
                            if (e[n]) return e[n];
                            var h = new v([t, i, s, a]);
                            return e[n] = h, h
                        }
                        var s = 4,
                            a = .001,
                            r = 1e-7,
                            n = 10,
                            h = 11,
                            o = 1 / (h - 1),
                            l = "function" == typeof Float32Array;

                        function p(t, e) {
                            return 1 - 3 * e + 3 * t
                        }

                        function f(t, e) {
                            return 3 * e - 6 * t
                        }

                        function d(t) {
                            return 3 * t
                        }

                        function m(t, e, i) {
                            return ((p(e, i) * t + f(e, i)) * t + d(e)) * t
                        }

                        function c(t, e, i) {
                            return 3 * p(e, i) * t * t + 2 * f(e, i) * t + d(e)
                        }

                        function u(t, e, i, s, a) {
                            var h, o, l = 0;
                            do {
                                (h = m(o = e + (i - e) / 2, s, a) - t) > 0 ? i = o : e = o
                            } while (Math.abs(h) > r && ++l < n);
                            return o
                        }

                        function g(t, e, i, a) {
                            for (var r = 0; r < s; ++r) {
                                var n = c(e, i, a);
                                if (0 === n) return e;
                                e -= (m(e, i, a) - t) / n
                            }
                            return e
                        }

                        function v(t) {
                            this._p = t, this._mSampleValues = l ? new Float32Array(h) : new Array(h), this._precomputed = !1, this.get = this.get.bind(this)
                        }
                        return v.prototype = {
                            get: function(t) {
                                var e = this._p[0],
                                    i = this._p[1],
                                    s = this._p[2],
                                    a = this._p[3];
                                return this._precomputed || this._precompute(), e === i && s === a ? t : 0 === t ? 0 : 1 === t ? 1 : m(this._getTForX(t), i, a)
                            },
                            _precompute: function() {
                                var t = this._p[0],
                                    e = this._p[1],
                                    i = this._p[2],
                                    s = this._p[3];
                                this._precomputed = !0, t === e && i === s || this._calcSampleValues()
                            },
                            _calcSampleValues: function() {
                                for (var t = this._p[0], e = this._p[2], i = 0; i < h; ++i) this._mSampleValues[i] = m(i * o, t, e)
                            },
                            _getTForX: function(t) {
                                for (var e = this._p[0], i = this._p[2], s = this._mSampleValues, r = 0, n = 1, l = h - 1; n !== l && s[n] <= t; ++n) r += o;
                                var p = r + (t - s[--n]) / (s[n + 1] - s[n]) * o,
                                    f = c(p, e, i);
                                return f >= a ? g(t, p, e, i) : 0 === f ? p : u(t, r, r + o, e, i)
                            }
                        }, t
                    }();

                    function X(t, e) {
                        var i, s, a = t.length;
                        for (i = 0; i < a; i += 1)
                            for (var r in s = t[i].prototype) Object.prototype.hasOwnProperty.call(s, r) && (e.prototype[r] = s[r])
                    }

                    function H(t) {
                        function e() {}
                        return e.prototype = t, e
                    }

                    function Y() {
                        var t = Math;

                        function e(t, e, i, s, a, r) {
                            var n = t * s + e * a + i * r - a * s - r * t - i * e;
                            return n > -.001 && n < .001
                        }

                        function i(i, s, a, r, n, h, o, l, p) {
                            if (0 === a && 0 === h && 0 === p) return e(i, s, r, n, o, l);
                            var f, d = t.sqrt(t.pow(r - i, 2) + t.pow(n - s, 2) + t.pow(h - a, 2)),
                                m = t.sqrt(t.pow(o - i, 2) + t.pow(l - s, 2) + t.pow(p - a, 2)),
                                c = t.sqrt(t.pow(o - r, 2) + t.pow(l - n, 2) + t.pow(p - h, 2));
                            return (f = d > m ? d > c ? d - m - c : c - m - d : c > m ? c - m - d : m - d - c) > -1e-4 && f < 1e-4
                        }
                        var s = function(t, e, i, s) {
                            var a, r, n, h, p, f, d = c,
                                m = 0,
                                u = [],
                                g = [],
                                v = wt.newElement();
                            for (n = i.length, a = 0; a < d; a += 1) {
                                for (p = a / (d - 1), f = 0, r = 0; r < n; r += 1) h = o(1 - p, 3) * t[r] + 3 * o(1 - p, 2) * p * i[r] + 3 * (1 - p) * o(p, 2) * s[r] + o(p, 3) * e[r], u[r] = h, null !== g[r] && (f += o(u[r] - g[r], 2)), g[r] = u[r];
                                f && (m += f = l(f)), v.percents[a] = p, v.lengths[a] = m
                            }
                            return v.addedLength = m, v
                        };

                        function a(t) {
                            var e, i = St.newElement(),
                                a = t.c,
                                r = t.v,
                                n = t.o,
                                h = t.i,
                                o = t._length,
                                l = i.lengths,
                                p = 0;
                            for (e = 0; e < o - 1; e += 1) l[e] = s(r[e], r[e + 1], n[e], h[e + 1]), p += l[e].addedLength;
                            return a && o && (l[e] = s(r[e], r[0], n[e], h[0]), p += l[e].addedLength), i.totalLength = p, i
                        }

                        function r(t) {
                            this.segmentLength = 0, this.points = new Array(t)
                        }

                        function n(t, e) {
                            this.partialLength = t, this.point = e
                        }
                        var h, f = (h = {}, function(t, i, s, a) {
                            var p = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + s[0] + "_" + s[1] + "_" + a[0] + "_" + a[1]).replace(/\./g, "p");
                            if (!h[p]) {
                                var f, d, m, u, g, v, y, b = c,
                                    _ = 0,
                                    k = null;
                                2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + s[0], t[1] + s[1]) && e(t[0], t[1], i[0], i[1], i[0] + a[0], i[1] + a[1]) && (b = 2);
                                var A = new r(b);
                                for (m = s.length, f = 0; f < b; f += 1) {
                                    for (y = V(m), g = f / (b - 1), v = 0, d = 0; d < m; d += 1) u = o(1 - g, 3) * t[d] + 3 * o(1 - g, 2) * g * (t[d] + s[d]) + 3 * (1 - g) * o(g, 2) * (i[d] + a[d]) + o(g, 3) * i[d], y[d] = u, null !== k && (v += o(y[d] - k[d], 2));
                                    _ += v = l(v), A.points[f] = new n(v, y), k = y
                                }
                                A.segmentLength = _, h[p] = A
                            }
                            return h[p]
                        });

                        function d(t, e) {
                            var i = e.percents,
                                s = e.lengths,
                                a = i.length,
                                r = p((a - 1) * t),
                                n = t * e.addedLength,
                                h = 0;
                            if (r === a - 1 || 0 === r || n === s[r]) return i[r];
                            for (var o = s[r] > n ? -1 : 1, l = !0; l;)
                                if (s[r] <= n && s[r + 1] > n ? (h = (n - s[r]) / (s[r + 1] - s[r]), l = !1) : r += o, r < 0 || r >= a - 1) {
                                    if (r === a - 1) return i[r];
                                    l = !1
                                }
                            return i[r] + (i[r + 1] - i[r]) * h
                        }

                        function m(e, i, s, a, r, n) {
                            var h = d(r, n),
                                o = 1 - h;
                            return [t.round(1e3 * (o * o * o * e[0] + (h * o * o + o * h * o + o * o * h) * s[0] + (h * h * o + o * h * h + h * o * h) * a[0] + h * h * h * i[0])) / 1e3, t.round(1e3 * (o * o * o * e[1] + (h * o * o + o * h * o + o * o * h) * s[1] + (h * h * o + o * h * h + h * o * h) * a[1] + h * h * h * i[1])) / 1e3]
                        }
                        var u = L("float32", 8);

                        function g(e, i, s, a, r, n, h) {
                            r < 0 ? r = 0 : r > 1 && (r = 1);
                            var o, l = d(r, h),
                                p = d(n = n > 1 ? 1 : n, h),
                                f = e.length,
                                m = 1 - l,
                                c = 1 - p,
                                g = m * m * m,
                                v = l * m * m * 3,
                                y = l * l * m * 3,
                                b = l * l * l,
                                _ = m * m * c,
                                k = l * m * c + m * l * c + m * m * p,
                                A = l * l * c + m * l * p + l * m * p,
                                P = l * l * p,
                                C = m * c * c,
                                x = l * c * c + m * p * c + m * c * p,
                                F = l * p * c + m * p * p + l * c * p,
                                M = l * p * p,
                                D = c * c * c,
                                S = p * c * c + c * p * c + c * c * p,
                                w = p * p * c + c * p * p + p * c * p,
                                E = p * p * p;
                            for (o = 0; o < f; o += 1) u[4 * o] = t.round(1e3 * (g * e[o] + v * s[o] + y * a[o] + b * i[o])) / 1e3, u[4 * o + 1] = t.round(1e3 * (_ * e[o] + k * s[o] + A * a[o] + P * i[o])) / 1e3, u[4 * o + 2] = t.round(1e3 * (C * e[o] + x * s[o] + F * a[o] + M * i[o])) / 1e3, u[4 * o + 3] = t.round(1e3 * (D * e[o] + S * s[o] + w * a[o] + E * i[o])) / 1e3;
                            return u
                        }
                        return {
                            getSegmentsLength: a,
                            getNewSegment: g,
                            getPointInSegment: m,
                            buildBezierData: f,
                            pointOnLine2D: e,
                            pointOnLine3D: i
                        }
                    }! function() {
                        for (var e = 0, i = ["ms", "moz", "webkit", "o"], s = 0; s < i.length && !t.requestAnimationFrame; ++s) t.requestAnimationFrame = t[i[s] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[i[s] + "CancelAnimationFrame"] || t[i[s] + "CancelRequestAnimationFrame"];
                        t.requestAnimationFrame || (t.requestAnimationFrame = function(t) {
                            var i = (new Date).getTime(),
                                s = Math.max(0, 16 - (i - e)),
                                a = setTimeout((function() {
                                    t(i + s)
                                }), s);
                            return e = i + s, a
                        }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function(t) {
                            clearTimeout(t)
                        })
                    }();
                    var J = Y();

                    function K() {
                        function t(a, r, n) {
                            var h, o, l, p, f, m, c = a.length;
                            for (o = 0; o < c; o += 1)
                                if ("ks" in (h = a[o]) && !h.completed) {
                                    if (h.completed = !0, h.tt && (a[o - 1].td = h.tt), h.hasMask) {
                                        var u = h.masksProperties;
                                        for (p = u.length, l = 0; l < p; l += 1)
                                            if (u[l].pt.k.i) s(u[l].pt.k);
                                            else
                                                for (m = u[l].pt.k.length, f = 0; f < m; f += 1) u[l].pt.k[f].s && s(u[l].pt.k[f].s[0]), u[l].pt.k[f].e && s(u[l].pt.k[f].e[0])
                                    }
                                    0 === h.ty ? (h.layers = e(h.refId, r), t(h.layers, r, n)) : 4 === h.ty ? i(h.shapes) : 5 === h.ty && d(h, n)
                                }
                        }

                        function e(t, e) {
                            for (var i = 0, s = e.length; i < s;) {
                                if (e[i].id === t) return e[i].layers.__used ? JSON.parse(JSON.stringify(e[i].layers)) : (e[i].layers.__used = !0, e[i].layers);
                                i += 1
                            }
                            return null
                        }

                        function i(t) {
                            var e, a, r;
                            for (e = t.length - 1; e >= 0; e -= 1)
                                if ("sh" === t[e].ty)
                                    if (t[e].ks.k.i) s(t[e].ks.k);
                                    else
                                        for (r = t[e].ks.k.length, a = 0; a < r; a += 1) t[e].ks.k[a].s && s(t[e].ks.k[a].s[0]), t[e].ks.k[a].e && s(t[e].ks.k[a].e[0]);
                            else "gr" === t[e].ty && i(t[e].it)
                        }

                        function s(t) {
                            var e, i = t.i.length;
                            for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                        }

                        function a(t, e) {
                            var i = e ? e.split(".") : [100, 100, 100];
                            return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
                        }
                        var r, n = function() {
                                var t = [4, 4, 14];

                                function e(t) {
                                    var e = t.t.d;
                                    t.t.d = {
                                        k: [{
                                            s: e,
                                            t: 0
                                        }]
                                    }
                                }

                                function i(t) {
                                    var i, s = t.length;
                                    for (i = 0; i < s; i += 1) 5 === t[i].ty && e(t[i])
                                }
                                return function(e) {
                                    if (a(t, e.v) && (i(e.layers), e.assets)) {
                                        var s, r = e.assets.length;
                                        for (s = 0; s < r; s += 1) e.assets[s].layers && i(e.assets[s].layers)
                                    }
                                }
                            }(),
                            h = (r = [4, 7, 99], function(t) {
                                if (t.chars && !a(r, t.v)) {
                                    var e, i, n, h, o, l = t.chars.length;
                                    for (e = 0; e < l; e += 1)
                                        if (t.chars[e].data && t.chars[e].data.shapes)
                                            for (n = (o = t.chars[e].data.shapes[0].it).length, i = 0; i < n; i += 1)(h = o[i].ks.k).__converted || (s(o[i].ks.k), h.__converted = !0)
                                }
                            }),
                            o = function() {
                                var t = [5, 7, 15];

                                function e(t) {
                                    var e = t.t.p;
                                    "number" == typeof e.a && (e.a = {
                                        a: 0,
                                        k: e.a
                                    }), "number" == typeof e.p && (e.p = {
                                        a: 0,
                                        k: e.p
                                    }), "number" == typeof e.r && (e.r = {
                                        a: 0,
                                        k: e.r
                                    })
                                }

                                function i(t) {
                                    var i, s = t.length;
                                    for (i = 0; i < s; i += 1) 5 === t[i].ty && e(t[i])
                                }
                                return function(e) {
                                    if (a(t, e.v) && (i(e.layers), e.assets)) {
                                        var s, r = e.assets.length;
                                        for (s = 0; s < r; s += 1) e.assets[s].layers && i(e.assets[s].layers)
                                    }
                                }
                            }(),
                            l = function() {
                                var t = [4, 1, 9];

                                function e(t) {
                                    var i, s, a, r = t.length;
                                    for (i = 0; i < r; i += 1)
                                        if ("gr" === t[i].ty) e(t[i].it);
                                        else if ("fl" === t[i].ty || "st" === t[i].ty)
                                        if (t[i].c.k && t[i].c.k[0].i)
                                            for (a = t[i].c.k.length, s = 0; s < a; s += 1) t[i].c.k[s].s && (t[i].c.k[s].s[0] /= 255, t[i].c.k[s].s[1] /= 255, t[i].c.k[s].s[2] /= 255, t[i].c.k[s].s[3] /= 255), t[i].c.k[s].e && (t[i].c.k[s].e[0] /= 255, t[i].c.k[s].e[1] /= 255, t[i].c.k[s].e[2] /= 255, t[i].c.k[s].e[3] /= 255);
                                        else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
                                }

                                function i(t) {
                                    var i, s = t.length;
                                    for (i = 0; i < s; i += 1) 4 === t[i].ty && e(t[i].shapes)
                                }
                                return function(e) {
                                    if (a(t, e.v) && (i(e.layers), e.assets)) {
                                        var s, r = e.assets.length;
                                        for (s = 0; s < r; s += 1) e.assets[s].layers && i(e.assets[s].layers)
                                    }
                                }
                            }(),
                            p = function() {
                                var t = [4, 4, 18];

                                function e(t) {
                                    var i, s, a;
                                    for (i = t.length - 1; i >= 0; i -= 1)
                                        if ("sh" === t[i].ty)
                                            if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                                            else
                                                for (a = t[i].ks.k.length, s = 0; s < a; s += 1) t[i].ks.k[s].s && (t[i].ks.k[s].s[0].c = t[i].closed), t[i].ks.k[s].e && (t[i].ks.k[s].e[0].c = t[i].closed);
                                    else "gr" === t[i].ty && e(t[i].it)
                                }

                                function i(t) {
                                    var i, s, a, r, n, h, o = t.length;
                                    for (s = 0; s < o; s += 1) {
                                        if ((i = t[s]).hasMask) {
                                            var l = i.masksProperties;
                                            for (r = l.length, a = 0; a < r; a += 1)
                                                if (l[a].pt.k.i) l[a].pt.k.c = l[a].cl;
                                                else
                                                    for (h = l[a].pt.k.length, n = 0; n < h; n += 1) l[a].pt.k[n].s && (l[a].pt.k[n].s[0].c = l[a].cl), l[a].pt.k[n].e && (l[a].pt.k[n].e[0].c = l[a].cl)
                                        }
                                        4 === i.ty && e(i.shapes)
                                    }
                                }
                                return function(e) {
                                    if (a(t, e.v) && (i(e.layers), e.assets)) {
                                        var s, r = e.assets.length;
                                        for (s = 0; s < r; s += 1) e.assets[s].layers && i(e.assets[s].layers)
                                    }
                                }
                            }();

                        function f(e, i) {
                            e.__complete || (l(e), n(e), h(e), o(e), p(e), t(e.layers, e.assets, i), e.__complete = !0)
                        }

                        function d(t) {
                            0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0)
                        }
                        var m = {};
                        return m.completeData = f, m.checkColors = l, m.checkChars = h, m.checkPathProperties = o, m.checkShapes = p, m.completeLayers = t, m
                    }
                    var U = K();

                    function Z(t) {
                        for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", s = "normal", a = e.length, r = 0; r < a; r += 1) switch (e[r].toLowerCase()) {
                            case "italic":
                                s = "italic";
                                break;
                            case "bold":
                                i = "700";
                                break;
                            case "black":
                                i = "900";
                                break;
                            case "medium":
                                i = "500";
                                break;
                            case "regular":
                            case "normal":
                                i = "400";
                                break;
                            case "light":
                            case "thin":
                                i = "200"
                        }
                        return {
                            style: s,
                            weight: t.fWeight || i
                        }
                    }
                    var Q = function() {
                            var t = 5e3,
                                e = {
                                    w: 0,
                                    size: 0,
                                    shapes: []
                                },
                                i = [];
                            i = i.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                            var s = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
                                a = [65039, 8205];

                            function r(t) {
                                var e, i = t.split(","),
                                    s = i.length,
                                    a = [];
                                for (e = 0; e < s; e += 1) "sans-serif" !== i[e] && "monospace" !== i[e] && a.push(i[e]);
                                return a.join(",")
                            }

                            function n(t, e) {
                                var i = z("span");
                                i.setAttribute("aria-hidden", !0), i.style.fontFamily = e;
                                var s = z("span");
                                s.innerText = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(s), document.body.appendChild(i);
                                var a = s.offsetWidth;
                                return s.style.fontFamily = r(t) + ", " + e, {
                                    node: s,
                                    w: a,
                                    parent: i
                                }
                            }

                            function h() {
                                var e, i, s, a = this.fonts.length,
                                    r = a;
                                for (e = 0; e < a; e += 1) this.fonts[e].loaded ? r -= 1 : "n" === this.fonts[e].fOrigin || 0 === this.fonts[e].origin ? this.fonts[e].loaded = !0 : (i = this.fonts[e].monoCase.node, s = this.fonts[e].monoCase.w, i.offsetWidth !== s ? (r -= 1, this.fonts[e].loaded = !0) : (i = this.fonts[e].sansCase.node, s = this.fonts[e].sansCase.w, i.offsetWidth !== s && (r -= 1, this.fonts[e].loaded = !0)), this.fonts[e].loaded && (this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent), this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent)));
                                0 !== r && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                            }

                            function o(t, e) {
                                var i = R("text");
                                i.style.fontSize = "100px";
                                var s = Z(e);
                                return i.setAttribute("font-family", e.fFamily), i.setAttribute("font-style", s.style), i.setAttribute("font-weight", s.weight), i.textContent = "1", e.fClass ? (i.style.fontFamily = "inherit", i.setAttribute("class", e.fClass)) : i.style.fontFamily = e.fFamily, t.appendChild(i), z("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, i
                            }

                            function l(t, e) {
                                if (t) {
                                    if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                                    var i, s = t.list,
                                        a = s.length,
                                        r = a;
                                    for (i = 0; i < a; i += 1) {
                                        var h, l, p = !0;
                                        if (s[i].loaded = !1, s[i].monoCase = n(s[i].fFamily, "monospace"), s[i].sansCase = n(s[i].fFamily, "sans-serif"), s[i].fPath) {
                                            if ("p" === s[i].fOrigin || 3 === s[i].origin) {
                                                if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + s[i].fFamily + '"], style[f-origin="3"][f-family="' + s[i].fFamily + '"]')).length > 0 && (p = !1), p) {
                                                    var f = z("style");
                                                    f.setAttribute("f-forigin", s[i].fOrigin), f.setAttribute("f-origin", s[i].origin), f.setAttribute("f-family", s[i].fFamily), f.type = "text/css", f.innerText = "@font-face {font-family: " + s[i].fFamily + "; font-style: normal; src: url('" + s[i].fPath + "');}", e.appendChild(f)
                                                }
                                            } else if ("g" === s[i].fOrigin || 1 === s[i].origin) {
                                                for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1) - 1 !== h[l].href.indexOf(s[i].fPath) && (p = !1);
                                                if (p) {
                                                    var d = z("link");
                                                    d.setAttribute("f-forigin", s[i].fOrigin), d.setAttribute("f-origin", s[i].origin), d.type = "text/css", d.rel = "stylesheet", d.href = s[i].fPath, document.body.appendChild(d)
                                                }
                                            } else if ("t" === s[i].fOrigin || 2 === s[i].origin) {
                                                for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1) s[i].fPath === h[l].src && (p = !1);
                                                if (p) {
                                                    var m = z("link");
                                                    m.setAttribute("f-forigin", s[i].fOrigin), m.setAttribute("f-origin", s[i].origin), m.setAttribute("rel", "stylesheet"), m.setAttribute("href", s[i].fPath), e.appendChild(m)
                                                }
                                            }
                                        } else s[i].loaded = !0, r -= 1;
                                        s[i].helper = o(e, s[i]), s[i].cache = {}, this.fonts.push(s[i])
                                    }
                                    0 === r ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                                } else this.isLoaded = !0
                            }

                            function p(t) {
                                if (t) {
                                    var e;
                                    this.chars || (this.chars = []);
                                    var i, s, a = t.length,
                                        r = this.chars.length;
                                    for (e = 0; e < a; e += 1) {
                                        for (i = 0, s = !1; i < r;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (s = !0), i += 1;
                                        s || (this.chars.push(t[e]), r += 1)
                                    }
                                }
                            }

                            function f(t, i, s) {
                                for (var a = 0, r = this.chars.length; a < r;) {
                                    if (this.chars[a].ch === t && this.chars[a].style === i && this.chars[a].fFamily === s) return this.chars[a];
                                    a += 1
                                }
                                return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", t, i, s)), e
                            }

                            function d(t, e, i) {
                                var s = this.getFontByName(e),
                                    a = t.charCodeAt(0);
                                if (!s.cache[a + 1]) {
                                    var r = s.helper;
                                    if (" " === t) {
                                        r.textContent = "|" + t + "|";
                                        var n = r.getComputedTextLength();
                                        r.textContent = "||";
                                        var h = r.getComputedTextLength();
                                        s.cache[a + 1] = (n - h) / 100
                                    } else r.textContent = t, s.cache[a + 1] = r.getComputedTextLength() / 100
                                }
                                return s.cache[a + 1] * i
                            }

                            function m(t) {
                                for (var e = 0, i = this.fonts.length; e < i;) {
                                    if (this.fonts[e].fName === t) return this.fonts[e];
                                    e += 1
                                }
                                return this.fonts[0]
                            }

                            function c(t, e) {
                                var i = t.toString(16) + e.toString(16);
                                return -1 !== s.indexOf(i)
                            }

                            function u(t, e) {
                                return e ? t === a[0] && e === a[1] : t === a[1]
                            }

                            function g(t) {
                                return -1 !== i.indexOf(t)
                            }

                            function v() {
                                this.isLoaded = !0
                            }
                            var y = function() {
                                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                            };
                            y.isModifier = c, y.isZeroWidthJoiner = u, y.isCombinedCharacter = g;
                            var b = {
                                addChars: p,
                                addFonts: l,
                                getCharData: f,
                                getFontByName: m,
                                measureText: d,
                                checkLoadedFonts: h,
                                setIsLoaded: v
                            };
                            return y.prototype = b, y
                        }(),
                        $ = function() {
                            var t = a,
                                e = Math.abs;

                            function i(t, e) {
                                var i, a = this.offsetTime;
                                "multidimensional" === this.propType && (i = L("float32", this.pv.length));
                                for (var h, o, l, p, f, d, m, c, u = e.lastIndex, g = u, v = this.keyframes.length - 1, y = !0; y;) {
                                    if (h = this.keyframes[g], o = this.keyframes[g + 1], g === v - 1 && t >= o.t - a) {
                                        h.h && (h = o), u = 0;
                                        break
                                    }
                                    if (o.t - a > t) {
                                        u = g;
                                        break
                                    }
                                    g < v - 1 ? g += 1 : (u = 0, y = !1)
                                }
                                var b, _ = o.t - a,
                                    k = h.t - a;
                                if (h.to) {
                                    h.bezierData || (h.bezierData = J.buildBezierData(h.s, o.s || h.e, h.to, h.ti));
                                    var A = h.bezierData;
                                    if (t >= _ || t < k) {
                                        var P = t >= _ ? A.points.length - 1 : 0;
                                        for (p = A.points[P].point.length, l = 0; l < p; l += 1) i[l] = A.points[P].point[l]
                                    } else {
                                        h.__fnct ? c = h.__fnct : (c = W.getBezierEasing(h.o.x, h.o.y, h.i.x, h.i.y, h.n).get, h.__fnct = c), f = c((t - k) / (_ - k));
                                        var C, x = A.segmentLength * f,
                                            F = e.lastFrame < t && e._lastKeyframeIndex === g ? e._lastAddedLength : 0;
                                        for (m = e.lastFrame < t && e._lastKeyframeIndex === g ? e._lastPoint : 0, y = !0, d = A.points.length; y;) {
                                            if (F += A.points[m].partialLength, 0 === x || 0 === f || m === A.points.length - 1) {
                                                for (p = A.points[m].point.length, l = 0; l < p; l += 1) i[l] = A.points[m].point[l];
                                                break
                                            }
                                            if (x >= F && x < F + A.points[m + 1].partialLength) {
                                                for (C = (x - F) / A.points[m + 1].partialLength, p = A.points[m].point.length, l = 0; l < p; l += 1) i[l] = A.points[m].point[l] + (A.points[m + 1].point[l] - A.points[m].point[l]) * C;
                                                break
                                            }
                                            m < d - 1 ? m += 1 : y = !1
                                        }
                                        e._lastPoint = m, e._lastAddedLength = F - A.points[m].partialLength, e._lastKeyframeIndex = g
                                    }
                                } else {
                                    var M, D, S, w, E;
                                    if (v = h.s.length, b = o.s || h.e, this.sh && 1 !== h.h) t >= _ ? (i[0] = b[0], i[1] = b[1], i[2] = b[2]) : t <= k ? (i[0] = h.s[0], i[1] = h.s[1], i[2] = h.s[2]) : r(i, s(n(h.s), n(b), (t - k) / (_ - k)));
                                    else
                                        for (g = 0; g < v; g += 1) 1 !== h.h && (t >= _ ? f = 1 : t < k ? f = 0 : (h.o.x.constructor === Array ? (h.__fnct || (h.__fnct = []), h.__fnct[g] ? c = h.__fnct[g] : (M = void 0 === h.o.x[g] ? h.o.x[0] : h.o.x[g], D = void 0 === h.o.y[g] ? h.o.y[0] : h.o.y[g], S = void 0 === h.i.x[g] ? h.i.x[0] : h.i.x[g], w = void 0 === h.i.y[g] ? h.i.y[0] : h.i.y[g], c = W.getBezierEasing(M, D, S, w).get, h.__fnct[g] = c)) : h.__fnct ? c = h.__fnct : (M = h.o.x, D = h.o.y, S = h.i.x, w = h.i.y, c = W.getBezierEasing(M, D, S, w).get, h.__fnct = c), f = c((t - k) / (_ - k)))), b = o.s || h.e, E = 1 === h.h ? h.s[g] : h.s[g] + (b[g] - h.s[g]) * f, "multidimensional" === this.propType ? i[g] = E : i = E
                                }
                                return e.lastIndex = u, i
                            }

                            function s(t, e, i) {
                                var s, a, r, n, h, o = [],
                                    l = t[0],
                                    p = t[1],
                                    f = t[2],
                                    d = t[3],
                                    m = e[0],
                                    c = e[1],
                                    u = e[2],
                                    g = e[3];
                                return (a = l * m + p * c + f * u + d * g) < 0 && (a = -a, m = -m, c = -c, u = -u, g = -g), 1 - a > 1e-6 ? (s = Math.acos(a), r = Math.sin(s), n = Math.sin((1 - i) * s) / r, h = Math.sin(i * s) / r) : (n = 1 - i, h = i), o[0] = n * l + h * m, o[1] = n * p + h * c, o[2] = n * f + h * u, o[3] = n * d + h * g, o
                            }

                            function r(t, e) {
                                var i = e[0],
                                    s = e[1],
                                    a = e[2],
                                    r = e[3],
                                    n = Math.atan2(2 * s * r - 2 * i * a, 1 - 2 * s * s - 2 * a * a),
                                    h = Math.asin(2 * i * s + 2 * a * r),
                                    o = Math.atan2(2 * i * r - 2 * s * a, 1 - 2 * i * i - 2 * a * a);
                                t[0] = n / u, t[1] = h / u, t[2] = o / u
                            }

                            function n(t) {
                                var e = t[0] * u,
                                    i = t[1] * u,
                                    s = t[2] * u,
                                    a = Math.cos(e / 2),
                                    r = Math.cos(i / 2),
                                    n = Math.cos(s / 2),
                                    h = Math.sin(e / 2),
                                    o = Math.sin(i / 2),
                                    l = Math.sin(s / 2);
                                return [h * o * n + a * r * l, h * r * n + a * o * l, a * o * n - h * r * l, a * r * n - h * o * l]
                            }

                            function h() {
                                var e = this.comp.renderedFrame - this.offsetTime,
                                    i = this.keyframes[0].t - this.offsetTime,
                                    s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                                if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= s && e >= s || this._caching.lastFrame < i && e < i))) {
                                    this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                                    var a = this.interpolateValue(e, this._caching);
                                    this.pv = a
                                }
                                return this._caching.lastFrame = e, this.pv
                            }

                            function o(t) {
                                var i;
                                if ("unidimensional" === this.propType) i = t * this.mult, e(this.v - i) > 1e-5 && (this.v = i, this._mdf = !0);
                                else
                                    for (var s = 0, a = this.v.length; s < a;) i = t[s] * this.mult, e(this.v[s] - i) > 1e-5 && (this.v[s] = i, this._mdf = !0), s += 1
                            }

                            function l() {
                                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                                    if (this.lock) this.setVValue(this.pv);
                                    else {
                                        var t;
                                        this.lock = !0, this._mdf = this._isFirstFrame;
                                        var e = this.effectsSequence.length,
                                            i = this.kf ? this.pv : this.data.k;
                                        for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                                        this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                                    }
                            }

                            function p(t) {
                                this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                            }

                            function f(t, e, i, s) {
                                this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = l, this.setVValue = o, this.addEffect = p
                            }

                            function d(t, e, i, s) {
                                var a;
                                this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                                var r = e.k.length;
                                for (this.v = L("float32", r), this.pv = L("float32", r), this.vel = L("float32", r), a = 0; a < r; a += 1) this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
                                this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = l, this.setVValue = o, this.addEffect = p
                            }

                            function m(e, s, a, r) {
                                this.propType = "unidimensional", this.keyframes = s.k, this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                                    lastFrame: t,
                                    lastIndex: 0,
                                    value: 0,
                                    _lastKeyframeIndex: -1
                                }, this.k = !0, this.kf = !0, this.data = s, this.mult = a || 1, this.elem = e, this.container = r, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = l, this.setVValue = o, this.interpolateValue = i, this.effectsSequence = [h.bind(this)], this.addEffect = p
                            }

                            function c(e, s, a, r) {
                                var n;
                                this.propType = "multidimensional";
                                var f, d, m, c, u = s.k.length;
                                for (n = 0; n < u - 1; n += 1) s.k[n].to && s.k[n].s && s.k[n + 1] && s.k[n + 1].s && (f = s.k[n].s, d = s.k[n + 1].s, m = s.k[n].to, c = s.k[n].ti, (2 === f.length && (f[0] !== d[0] || f[1] !== d[1]) && J.pointOnLine2D(f[0], f[1], d[0], d[1], f[0] + m[0], f[1] + m[1]) && J.pointOnLine2D(f[0], f[1], d[0], d[1], d[0] + c[0], d[1] + c[1]) || 3 === f.length && (f[0] !== d[0] || f[1] !== d[1] || f[2] !== d[2]) && J.pointOnLine3D(f[0], f[1], f[2], d[0], d[1], d[2], f[0] + m[0], f[1] + m[1], f[2] + m[2]) && J.pointOnLine3D(f[0], f[1], f[2], d[0], d[1], d[2], d[0] + c[0], d[1] + c[1], d[2] + c[2])) && (s.k[n].to = null, s.k[n].ti = null), f[0] === d[0] && f[1] === d[1] && 0 === m[0] && 0 === m[1] && 0 === c[0] && 0 === c[1] && (2 === f.length || f[2] === d[2] && 0 === m[2] && 0 === c[2]) && (s.k[n].to = null, s.k[n].ti = null));
                                this.effectsSequence = [h.bind(this)], this.data = s, this.keyframes = s.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = a || 1, this.elem = e, this.container = r, this.comp = e.comp, this.getValue = l, this.setVValue = o, this.interpolateValue = i, this.frameId = -1;
                                var g = s.k[0].s.length;
                                for (this.v = L("float32", g), this.pv = L("float32", g), n = 0; n < g; n += 1) this.v[n] = t, this.pv[n] = t;
                                this._caching = {
                                    lastFrame: t,
                                    lastIndex: 0,
                                    value: L("float32", g)
                                }, this.addEffect = p
                            }

                            function g(t, e, i, s, a) {
                                var r;
                                if (e.k.length)
                                    if ("number" == typeof e.k[0]) r = new d(t, e, s, a);
                                    else switch (i) {
                                        case 0:
                                            r = new m(t, e, s, a);
                                            break;
                                        case 1:
                                            r = new c(t, e, s, a)
                                    } else r = new f(t, e, s, a);
                                return r.effectsSequence.length && a.addDynamicProperty(r), r
                            }
                            return {
                                getProp: g
                            }
                        }(),
                        tt = function() {
                            var t = [0, 0];

                            function e(t) {
                                var e = this._mdf;
                                this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }

                            function i(e) {
                                if (this.elem.globalData.frameId !== this.frameId) {
                                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                        var i;
                                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                            var s, a;
                                            if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (s = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (s = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (s = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                                s = [], a = [];
                                                var r = this.px,
                                                    n = this.py;
                                                r._caching.lastFrame + r.offsetTime <= r.keyframes[0].t ? (s[0] = r.getValueAtTime((r.keyframes[0].t + .01) / i, 0), s[1] = n.getValueAtTime((n.keyframes[0].t + .01) / i, 0), a[0] = r.getValueAtTime(r.keyframes[0].t / i, 0), a[1] = n.getValueAtTime(n.keyframes[0].t / i, 0)) : r._caching.lastFrame + r.offsetTime >= r.keyframes[r.keyframes.length - 1].t ? (s[0] = r.getValueAtTime(r.keyframes[r.keyframes.length - 1].t / i, 0), s[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), a[0] = r.getValueAtTime((r.keyframes[r.keyframes.length - 1].t - .01) / i, 0), a[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / i, 0)) : (s = [r.pv, n.pv], a[0] = r.getValueAtTime((r._caching.lastFrame + r.offsetTime - .01) / i, r.offsetTime), a[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / i, n.offsetTime))
                                            } else s = a = t;
                                            this.v.rotate(-Math.atan2(s[1] - a[1], s[0] - a[0]))
                                        }
                                        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                    }
                                    this.frameId = this.elem.globalData.frameId
                                }
                            }

                            function s() {
                                if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                                    if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                        if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                        this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                                    }
                                    this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                                }
                            }

                            function a() {}

                            function r(t) {
                                this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                            }

                            function n(t, e, i) {
                                if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new G, this.pre = new G, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = $.getProp(t, e.p.x, 0, 0, this), this.py = $.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = $.getProp(t, e.p.z, 0, 0, this))) : this.p = $.getProp(t, e.p || {
                                        k: [0, 0, 0]
                                    }, 1, 0, this), e.rx) {
                                    if (this.rx = $.getProp(t, e.rx, 0, u, this), this.ry = $.getProp(t, e.ry, 0, u, this), this.rz = $.getProp(t, e.rz, 0, u, this), e.or.k[0].ti) {
                                        var s, a = e.or.k.length;
                                        for (s = 0; s < a; s += 1) e.or.k[s].to = null, e.or.k[s].ti = null
                                    }
                                    this.or = $.getProp(t, e.or, 1, u, this), this.or.sh = !0
                                } else this.r = $.getProp(t, e.r || {
                                    k: 0
                                }, 0, u, this);
                                e.sk && (this.sk = $.getProp(t, e.sk, 0, u, this), this.sa = $.getProp(t, e.sa, 0, u, this)), this.a = $.getProp(t, e.a || {
                                    k: [0, 0, 0]
                                }, 1, 0, this), this.s = $.getProp(t, e.s || {
                                    k: [100, 100, 100]
                                }, 1, .01, this), e.o ? this.o = $.getProp(t, e.o, 0, .01, t) : this.o = {
                                    _mdf: !1,
                                    v: 1
                                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                            }

                            function h(t, e, i) {
                                return new n(t, e, i)
                            }
                            return n.prototype = {
                                applyToMatrix: e,
                                getValue: i,
                                precalculateMatrix: s,
                                autoOrient: a
                            }, X([N], n), n.prototype.addDynamicProperty = r, n.prototype._addDynamicProperty = N.prototype.addDynamicProperty, {
                                getTransformProperty: h
                            }
                        }();

                    function et() {
                        this.c = !1, this._length = 0, this._maxLength = 8, this.v = V(this._maxLength), this.o = V(this._maxLength), this.i = V(this._maxLength)
                    }
                    et.prototype.setPathData = function(t, e) {
                        this.c = t, this.setLength(e);
                        for (var i = 0; i < e;) this.v[i] = Ft.newElement(), this.o[i] = Ft.newElement(), this.i[i] = Ft.newElement(), i += 1
                    }, et.prototype.setLength = function(t) {
                        for (; this._maxLength < t;) this.doubleArrayLength();
                        this._length = t
                    }, et.prototype.doubleArrayLength = function() {
                        this.v = this.v.concat(V(this._maxLength)), this.i = this.i.concat(V(this._maxLength)), this.o = this.o.concat(V(this._maxLength)), this._maxLength *= 2
                    }, et.prototype.setXYAt = function(t, e, i, s, a) {
                        var r;
                        switch (this._length = Math.max(this._length, s + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
                            case "v":
                                r = this.v;
                                break;
                            case "i":
                                r = this.i;
                                break;
                            case "o":
                                r = this.o;
                                break;
                            default:
                                r = []
                        }(!r[s] || r[s] && !a) && (r[s] = Ft.newElement()), r[s][0] = t, r[s][1] = e
                    }, et.prototype.setTripleAt = function(t, e, i, s, a, r, n, h) {
                        this.setXYAt(t, e, "v", n, h), this.setXYAt(i, s, "o", n, h), this.setXYAt(a, r, "i", n, h)
                    }, et.prototype.reverse = function() {
                        var t = new et;
                        t.setPathData(this.c, this._length);
                        var e = this.v,
                            i = this.o,
                            s = this.i,
                            a = 0;
                        this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, !1), a = 1);
                        var r, n = this._length - 1,
                            h = this._length;
                        for (r = a; r < h; r += 1) t.setTripleAt(e[n][0], e[n][1], s[n][0], s[n][1], i[n][0], i[n][1], r, !1), n -= 1;
                        return t
                    };
                    var it = function() {
                            var t = -999999;

                            function e(t, e, i) {
                                var s, a, r, n, h, o, l, p, f, d = i.lastIndex,
                                    m = this.keyframes;
                                if (t < m[0].t - this.offsetTime) s = m[0].s[0], r = !0, d = 0;
                                else if (t >= m[m.length - 1].t - this.offsetTime) s = m[m.length - 1].s ? m[m.length - 1].s[0] : m[m.length - 2].e[0], r = !0;
                                else {
                                    for (var c, u, g = d, v = m.length - 1, y = !0; y && (c = m[g], !((u = m[g + 1]).t - this.offsetTime > t));) g < v - 1 ? g += 1 : y = !1;
                                    if (d = g, !(r = 1 === c.h)) {
                                        if (t >= u.t - this.offsetTime) p = 1;
                                        else if (t < c.t - this.offsetTime) p = 0;
                                        else {
                                            var b;
                                            c.__fnct ? b = c.__fnct : (b = W.getBezierEasing(c.o.x, c.o.y, c.i.x, c.i.y).get, c.__fnct = b), p = b((t - (c.t - this.offsetTime)) / (u.t - this.offsetTime - (c.t - this.offsetTime)))
                                        }
                                        a = u.s ? u.s[0] : c.e[0]
                                    }
                                    s = c.s[0]
                                }
                                for (o = e._length, l = s.i[0].length, i.lastIndex = d, n = 0; n < o; n += 1)
                                    for (h = 0; h < l; h += 1) f = r ? s.i[n][h] : s.i[n][h] + (a.i[n][h] - s.i[n][h]) * p, e.i[n][h] = f, f = r ? s.o[n][h] : s.o[n][h] + (a.o[n][h] - s.o[n][h]) * p, e.o[n][h] = f, f = r ? s.v[n][h] : s.v[n][h] + (a.v[n][h] - s.v[n][h]) * p, e.v[n][h] = f
                            }

                            function i() {
                                var e = this.comp.renderedFrame - this.offsetTime,
                                    i = this.keyframes[0].t - this.offsetTime,
                                    s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                    a = this._caching.lastFrame;
                                return a !== t && (a < i && e < i || a > s && e > s) || (this._caching.lastIndex = a < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
                            }

                            function s() {
                                this.paths = this.localShapeCollection
                            }

                            function a(t, e) {
                                if (t._length !== e._length || t.c !== e.c) return !1;
                                var i, s = t._length;
                                for (i = 0; i < s; i += 1)
                                    if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
                                return !0
                            }

                            function r(t) {
                                a(this.v, t) || (this.v = Mt.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                            }

                            function n() {
                                if (this.elem.globalData.frameId !== this.frameId)
                                    if (this.effectsSequence.length)
                                        if (this.lock) this.setVValue(this.pv);
                                        else {
                                            var t, e;
                                            this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                            var i = this.effectsSequence.length;
                                            for (e = 0; e < i; e += 1) t = this.effectsSequence[e](t);
                                            this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                        }
                                else this._mdf = !1
                            }

                            function h(t, e, i) {
                                this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                                var a = 3 === i ? e.pt.k : e.ks.k;
                                this.v = Mt.clone(a), this.pv = Mt.clone(this.v), this.localShapeCollection = Dt.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = s, this.effectsSequence = []
                            }

                            function o(t) {
                                this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                            }

                            function l(e, a, r) {
                                this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === r ? a.pt.k : a.ks.k, this.k = !0, this.kf = !0;
                                var n = this.keyframes[0].s[0].i.length;
                                this.v = Mt.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, n), this.pv = Mt.clone(this.v), this.localShapeCollection = Dt.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = s, this._caching = {
                                    lastFrame: t,
                                    lastIndex: 0
                                }, this.effectsSequence = [i.bind(this)]
                            }
                            h.prototype.interpolateShape = e, h.prototype.getValue = n, h.prototype.setVValue = r, h.prototype.addEffect = o, l.prototype.getValue = n, l.prototype.interpolateShape = e, l.prototype.setVValue = r, l.prototype.addEffect = o;
                            var p = function() {
                                    var t = g;

                                    function e(t, e) {
                                        this.v = Mt.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = Dt.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = $.getProp(t, e.p, 1, 0, this), this.s = $.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                    }
                                    return e.prototype = {
                                        reset: s,
                                        getValue: function() {
                                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                        },
                                        convertEllToPath: function() {
                                            var e = this.p.v[0],
                                                i = this.p.v[1],
                                                s = this.s.v[0] / 2,
                                                a = this.s.v[1] / 2,
                                                r = 3 !== this.d,
                                                n = this.v;
                                            n.v[0][0] = e, n.v[0][1] = i - a, n.v[1][0] = r ? e + s : e - s, n.v[1][1] = i, n.v[2][0] = e, n.v[2][1] = i + a, n.v[3][0] = r ? e - s : e + s, n.v[3][1] = i, n.i[0][0] = r ? e - s * t : e + s * t, n.i[0][1] = i - a, n.i[1][0] = r ? e + s : e - s, n.i[1][1] = i - a * t, n.i[2][0] = r ? e + s * t : e - s * t, n.i[2][1] = i + a, n.i[3][0] = r ? e - s : e + s, n.i[3][1] = i + a * t, n.o[0][0] = r ? e + s * t : e - s * t, n.o[0][1] = i - a, n.o[1][0] = r ? e + s : e - s, n.o[1][1] = i + a * t, n.o[2][0] = r ? e - s * t : e + s * t, n.o[2][1] = i + a, n.o[3][0] = r ? e - s : e + s, n.o[3][1] = i - a * t
                                        }
                                    }, X([N], e), e
                                }(),
                                d = function() {
                                    function t(t, e) {
                                        this.v = Mt.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = $.getProp(t, e.ir, 0, 0, this), this.is = $.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = $.getProp(t, e.pt, 0, 0, this), this.p = $.getProp(t, e.p, 1, 0, this), this.r = $.getProp(t, e.r, 0, u, this), this.or = $.getProp(t, e.or, 0, 0, this), this.os = $.getProp(t, e.os, 0, .01, this), this.localShapeCollection = Dt.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                    }
                                    return t.prototype = {
                                        reset: s,
                                        getValue: function() {
                                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                        },
                                        convertStarToPath: function() {
                                            var t, e, i, s, a = 2 * Math.floor(this.pt.v),
                                                r = 2 * Math.PI / a,
                                                n = !0,
                                                h = this.or.v,
                                                o = this.ir.v,
                                                l = this.os.v,
                                                p = this.is.v,
                                                f = 2 * Math.PI * h / (2 * a),
                                                d = 2 * Math.PI * o / (2 * a),
                                                m = -Math.PI / 2;
                                            m += this.r.v;
                                            var c = 3 === this.data.d ? -1 : 1;
                                            for (this.v._length = 0, t = 0; t < a; t += 1) {
                                                i = n ? l : p, s = n ? f : d;
                                                var u = (e = n ? h : o) * Math.cos(m),
                                                    g = e * Math.sin(m),
                                                    v = 0 === u && 0 === g ? 0 : g / Math.sqrt(u * u + g * g),
                                                    y = 0 === u && 0 === g ? 0 : -u / Math.sqrt(u * u + g * g);
                                                u += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(u, g, u - v * s * i * c, g - y * s * i * c, u + v * s * i * c, g + y * s * i * c, t, !0), n = !n, m += r * c
                                            }
                                        },
                                        convertPolygonToPath: function() {
                                            var t, e = Math.floor(this.pt.v),
                                                i = 2 * Math.PI / e,
                                                s = this.or.v,
                                                a = this.os.v,
                                                r = 2 * Math.PI * s / (4 * e),
                                                n = .5 * -Math.PI,
                                                h = 3 === this.data.d ? -1 : 1;
                                            for (n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                                var o = s * Math.cos(n),
                                                    l = s * Math.sin(n),
                                                    p = 0 === o && 0 === l ? 0 : l / Math.sqrt(o * o + l * l),
                                                    f = 0 === o && 0 === l ? 0 : -o / Math.sqrt(o * o + l * l);
                                                o += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(o, l, o - p * r * a * h, l - f * r * a * h, o + p * r * a * h, l + f * r * a * h, t, !0), n += i * h
                                            }
                                            this.paths.length = 0, this.paths[0] = this.v
                                        }
                                    }, X([N], t), t
                                }(),
                                m = function() {
                                    function t(t, e) {
                                        this.v = Mt.newElement(), this.v.c = !0, this.localShapeCollection = Dt.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = $.getProp(t, e.p, 1, 0, this), this.s = $.getProp(t, e.s, 1, 0, this), this.r = $.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                    }
                                    return t.prototype = {
                                        convertRectToPath: function() {
                                            var t = this.p.v[0],
                                                e = this.p.v[1],
                                                i = this.s.v[0] / 2,
                                                s = this.s.v[1] / 2,
                                                a = f(i, s, this.r.v),
                                                r = a * (1 - g);
                                            this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - s + a, t + i, e - s + a, t + i, e - s + r, 0, !0), this.v.setTripleAt(t + i, e + s - a, t + i, e + s - r, t + i, e + s - a, 1, !0), 0 !== a ? (this.v.setTripleAt(t + i - a, e + s, t + i - a, e + s, t + i - r, e + s, 2, !0), this.v.setTripleAt(t - i + a, e + s, t - i + r, e + s, t - i + a, e + s, 3, !0), this.v.setTripleAt(t - i, e + s - a, t - i, e + s - a, t - i, e + s - r, 4, !0), this.v.setTripleAt(t - i, e - s + a, t - i, e - s + r, t - i, e - s + a, 5, !0), this.v.setTripleAt(t - i + a, e - s, t - i + a, e - s, t - i + r, e - s, 6, !0), this.v.setTripleAt(t + i - a, e - s, t + i - r, e - s, t + i - a, e - s, 7, !0)) : (this.v.setTripleAt(t - i, e + s, t - i + r, e + s, t - i, e + s, 2), this.v.setTripleAt(t - i, e - s, t - i, e - s + r, t - i, e - s, 3))) : (this.v.setTripleAt(t + i, e - s + a, t + i, e - s + r, t + i, e - s + a, 0, !0), 0 !== a ? (this.v.setTripleAt(t + i - a, e - s, t + i - a, e - s, t + i - r, e - s, 1, !0), this.v.setTripleAt(t - i + a, e - s, t - i + r, e - s, t - i + a, e - s, 2, !0), this.v.setTripleAt(t - i, e - s + a, t - i, e - s + a, t - i, e - s + r, 3, !0), this.v.setTripleAt(t - i, e + s - a, t - i, e + s - r, t - i, e + s - a, 4, !0), this.v.setTripleAt(t - i + a, e + s, t - i + a, e + s, t - i + r, e + s, 5, !0), this.v.setTripleAt(t + i - a, e + s, t + i - r, e + s, t + i - a, e + s, 6, !0), this.v.setTripleAt(t + i, e + s - a, t + i, e + s - a, t + i, e + s - r, 7, !0)) : (this.v.setTripleAt(t - i, e - s, t - i + r, e - s, t - i, e - s, 1, !0), this.v.setTripleAt(t - i, e + s, t - i, e + s - r, t - i, e + s, 2, !0), this.v.setTripleAt(t + i, e + s, t + i - r, e + s, t + i, e + s, 3, !0)))
                                        },
                                        getValue: function() {
                                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                        },
                                        reset: s
                                    }, X([N], t), t
                                }();

                            function c(t, e, i) {
                                var s;
                                return 3 === i || 4 === i ? s = (3 === i ? e.pt : e.ks).k.length ? new l(t, e, i) : new h(t, e, i) : 5 === i ? s = new m(t, e) : 6 === i ? s = new p(t, e) : 7 === i && (s = new d(t, e)), s.k && t.addDynamicProperty(s), s
                            }

                            function v() {
                                return h
                            }

                            function y() {
                                return l
                            }
                            var b = {};
                            return b.getShapeProp = c, b.getConstructorFunction = v, b.getKeyframedConstructorFunction = y, b
                        }(),
                        st = function() {
                            var t = {},
                                e = {};

                            function i(t, i) {
                                e[t] || (e[t] = i)
                            }

                            function s(t, i, s) {
                                return new e[t](i, s)
                            }
                            return t.registerModifier = i, t.getModifier = s, t
                        }();

                    function at() {}

                    function rt() {}

                    function nt() {}

                    function ht() {}

                    function ot() {}

                    function lt() {
                        this._length = 0, this._maxLength = 4, this.shapes = V(this._maxLength)
                    }

                    function pt(t, e, i, s) {
                        var a;
                        this.elem = t, this.frameId = -1, this.dataProps = V(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = L("float32", e.length ? e.length - 1 : 0), this.dashoffset = L("float32", 1), this.initDynamicPropertyContainer(s);
                        var r, n = e.length || 0;
                        for (a = 0; a < n; a += 1) r = $.getProp(t, e[a].v, 0, 0, this), this.k = r.k || this.k, this.dataProps[a] = {
                            n: e[a].n,
                            p: r
                        };
                        this.k || this.getValue(!0), this._isAnimated = this.k
                    }

                    function ft(t, e, i) {
                        this.data = e, this.c = L("uint8c", 4 * e.p);
                        var s = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                        this.o = L("float32", s), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = s, this.initDynamicPropertyContainer(i), this.prop = $.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                    }
                    at.prototype.initModifierProperties = function() {}, at.prototype.addShapeToModifier = function() {}, at.prototype.addShape = function(t) {
                        if (!this.closed) {
                            t.sh.container.addDynamicProperty(t.sh);
                            var e = {
                                shape: t.sh,
                                data: t,
                                localShapeCollection: Dt.newShapeCollection()
                            };
                            this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                        }
                    }, at.prototype.init = function(t, e) {
                        this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = a, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                    }, at.prototype.processKeys = function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                    }, X([N], at), X([at], rt), rt.prototype.initModifierProperties = function(t, e) {
                        this.s = $.getProp(t, e.s, 0, .01, this), this.e = $.getProp(t, e.e, 0, .01, this), this.o = $.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                    }, rt.prototype.addShapeToModifier = function(t) {
                        t.pathsData = []
                    }, rt.prototype.calculateShapeEdges = function(t, e, i, s, a) {
                        var r = [];
                        e <= 1 ? r.push({
                            s: t,
                            e
                        }) : t >= 1 ? r.push({
                            s: t - 1,
                            e: e - 1
                        }) : (r.push({
                            s: t,
                            e: 1
                        }), r.push({
                            s: 0,
                            e: e - 1
                        }));
                        var n, h, o = [],
                            l = r.length;
                        for (n = 0; n < l; n += 1) {
                            var p, f;
                            (h = r[n]).e * a < s || h.s * a > s + i || (p = h.s * a <= s ? 0 : (h.s * a - s) / i, f = h.e * a >= s + i ? 1 : (h.e * a - s) / i, o.push([p, f]))
                        }
                        return o.length || o.push([0, 0]), o
                    }, rt.prototype.releasePathsData = function(t) {
                        var e, i = t.length;
                        for (e = 0; e < i; e += 1) St.release(t[e]);
                        return t.length = 0, t
                    }, rt.prototype.processShapes = function(t) {
                        var e, i, s, a;
                        if (this._mdf || t) {
                            var r = this.o.v % 360 / 360;
                            if (r < 0 && (r += 1), (e = this.s.v > 1 ? 1 + r : this.s.v < 0 ? 0 + r : this.s.v + r) > (i = this.e.v > 1 ? 1 + r : this.e.v < 0 ? 0 + r : this.e.v + r)) {
                                var n = e;
                                e = i, i = n
                            }
                            e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i
                        } else e = this.sValue, i = this.eValue;
                        var h, o, l, p, f, d = this.shapes.length,
                            m = 0;
                        if (i === e)
                            for (a = 0; a < d; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = !0, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
                        else if (1 === i && 0 === e || 0 === i && 1 === e) {
                            if (this._mdf)
                                for (a = 0; a < d; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = !0
                        } else {
                            var c, u, g = [];
                            for (a = 0; a < d; a += 1)
                                if ((c = this.shapes[a]).shape._mdf || this._mdf || t || 2 === this.m) {
                                    if (o = (s = c.shape.paths)._length, f = 0, !c.shape._mdf && c.pathsData.length) f = c.totalShapeLength;
                                    else {
                                        for (l = this.releasePathsData(c.pathsData), h = 0; h < o; h += 1) p = J.getSegmentsLength(s.shapes[h]), l.push(p), f += p.totalLength;
                                        c.totalShapeLength = f, c.pathsData = l
                                    }
                                    m += f, c.shape._mdf = !0
                                } else c.shape.paths = c.localShapeCollection;
                            var v, y = e,
                                b = i,
                                _ = 0;
                            for (a = d - 1; a >= 0; a -= 1)
                                if ((c = this.shapes[a]).shape._mdf) {
                                    for ((u = c.localShapeCollection).releaseShapes(), 2 === this.m && d > 1 ? (v = this.calculateShapeEdges(e, i, c.totalShapeLength, _, m), _ += c.totalShapeLength) : v = [
                                            [y, b]
                                        ], o = v.length, h = 0; h < o; h += 1) {
                                        y = v[h][0], b = v[h][1], g.length = 0, b <= 1 ? g.push({
                                            s: c.totalShapeLength * y,
                                            e: c.totalShapeLength * b
                                        }) : y >= 1 ? g.push({
                                            s: c.totalShapeLength * (y - 1),
                                            e: c.totalShapeLength * (b - 1)
                                        }) : (g.push({
                                            s: c.totalShapeLength * y,
                                            e: c.totalShapeLength
                                        }), g.push({
                                            s: 0,
                                            e: c.totalShapeLength * (b - 1)
                                        }));
                                        var k = this.addShapes(c, g[0]);
                                        if (g[0].s !== g[0].e) {
                                            if (g.length > 1)
                                                if (c.shape.paths.shapes[c.shape.paths._length - 1].c) {
                                                    var A = k.pop();
                                                    this.addPaths(k, u), k = this.addShapes(c, g[1], A)
                                                } else this.addPaths(k, u), k = this.addShapes(c, g[1]);
                                            this.addPaths(k, u)
                                        }
                                    }
                                    c.shape.paths = u
                                }
                        }
                    }, rt.prototype.addPaths = function(t, e) {
                        var i, s = t.length;
                        for (i = 0; i < s; i += 1) e.addShape(t[i])
                    }, rt.prototype.addSegment = function(t, e, i, s, a, r, n) {
                        a.setXYAt(e[0], e[1], "o", r), a.setXYAt(i[0], i[1], "i", r + 1), n && a.setXYAt(t[0], t[1], "v", r), a.setXYAt(s[0], s[1], "v", r + 1)
                    }, rt.prototype.addSegmentFromArray = function(t, e, i, s) {
                        e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), s && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1)
                    }, rt.prototype.addShapes = function(t, e, i) {
                        var s, a, r, n, h, o, l, p, f = t.pathsData,
                            d = t.shape.paths.shapes,
                            m = t.shape.paths._length,
                            c = 0,
                            u = [],
                            g = !0;
                        for (i ? (h = i._length, p = i._length) : (i = Mt.newElement(), h = 0, p = 0), u.push(i), s = 0; s < m; s += 1) {
                            for (o = f[s].lengths, i.c = d[s].c, r = d[s].c ? o.length : o.length + 1, a = 1; a < r; a += 1)
                                if (c + (n = o[a - 1]).addedLength < e.s) c += n.addedLength, i.c = !1;
                                else {
                                    if (c > e.e) {
                                        i.c = !1;
                                        break
                                    }
                                    e.s <= c && e.e >= c + n.addedLength ? (this.addSegment(d[s].v[a - 1], d[s].o[a - 1], d[s].i[a], d[s].v[a], i, h, g), g = !1) : (l = J.getNewSegment(d[s].v[a - 1], d[s].v[a], d[s].o[a - 1], d[s].i[a], (e.s - c) / n.addedLength, (e.e - c) / n.addedLength, o[a - 1]), this.addSegmentFromArray(l, i, h, g), g = !1, i.c = !1), c += n.addedLength, h += 1
                                }
                            if (d[s].c && o.length) {
                                if (n = o[a - 1], c <= e.e) {
                                    var v = o[a - 1].addedLength;
                                    e.s <= c && e.e >= c + v ? (this.addSegment(d[s].v[a - 1], d[s].o[a - 1], d[s].i[0], d[s].v[0], i, h, g), g = !1) : (l = J.getNewSegment(d[s].v[a - 1], d[s].v[0], d[s].o[a - 1], d[s].i[0], (e.s - c) / v, (e.e - c) / v, o[a - 1]), this.addSegmentFromArray(l, i, h, g), g = !1, i.c = !1)
                                } else i.c = !1;
                                c += n.addedLength, h += 1
                            }
                            if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), c > e.e) break;
                            s < m - 1 && (i = Mt.newElement(), g = !0, u.push(i), h = 0)
                        }
                        return u
                    }, st.registerModifier("tm", rt), X([at], nt), nt.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.rd = $.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                    }, nt.prototype.processPath = function(t, e) {
                        var i, s = Mt.newElement();
                        s.c = t.c;
                        var a, r, n, h, o, l, p, f, d, m, c, u, v = t._length,
                            y = 0;
                        for (i = 0; i < v; i += 1) a = t.v[i], n = t.o[i], r = t.i[i], a[0] === n[0] && a[1] === n[1] && a[0] === r[0] && a[1] === r[1] ? 0 !== i && i !== v - 1 || t.c ? (h = 0 === i ? t.v[v - 1] : t.v[i - 1], l = (o = Math.sqrt(Math.pow(a[0] - h[0], 2) + Math.pow(a[1] - h[1], 2))) ? Math.min(o / 2, e) / o : 0, p = c = a[0] + (h[0] - a[0]) * l, f = u = a[1] - (a[1] - h[1]) * l, d = p - (p - a[0]) * g, m = f - (f - a[1]) * g, s.setTripleAt(p, f, d, m, c, u, y), y += 1, h = i === v - 1 ? t.v[0] : t.v[i + 1], l = (o = Math.sqrt(Math.pow(a[0] - h[0], 2) + Math.pow(a[1] - h[1], 2))) ? Math.min(o / 2, e) / o : 0, p = d = a[0] + (h[0] - a[0]) * l, f = m = a[1] + (h[1] - a[1]) * l, c = p - (p - a[0]) * g, u = f - (f - a[1]) * g, s.setTripleAt(p, f, d, m, c, u, y), y += 1) : (s.setTripleAt(a[0], a[1], n[0], n[1], r[0], r[1], y), y += 1) : (s.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], y), y += 1);
                        return s
                    }, nt.prototype.processShapes = function(t) {
                        var e, i, s, a, r, n, h = this.shapes.length,
                            o = this.rd.v;
                        if (0 !== o)
                            for (i = 0; i < h; i += 1) {
                                if (n = (r = this.shapes[i]).localShapeCollection, r.shape._mdf || this._mdf || t)
                                    for (n.releaseShapes(), r.shape._mdf = !0, e = r.shape.paths.shapes, a = r.shape.paths._length, s = 0; s < a; s += 1) n.addShape(this.processPath(e[s], o));
                                r.shape.paths = r.localShapeCollection
                            }
                        this.dynamicProperties.length || (this._mdf = !1)
                    }, st.registerModifier("rd", nt), X([at], ht), ht.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.amount = $.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                    }, ht.prototype.processPath = function(t, e) {
                        var i = e / 100,
                            s = [0, 0],
                            a = t._length,
                            r = 0;
                        for (r = 0; r < a; r += 1) s[0] += t.v[r][0], s[1] += t.v[r][1];
                        s[0] /= a, s[1] /= a;
                        var n, h, o, l, p, f, d = Mt.newElement();
                        for (d.c = t.c, r = 0; r < a; r += 1) n = t.v[r][0] + (s[0] - t.v[r][0]) * i, h = t.v[r][1] + (s[1] - t.v[r][1]) * i, o = t.o[r][0] + (s[0] - t.o[r][0]) * -i, l = t.o[r][1] + (s[1] - t.o[r][1]) * -i, p = t.i[r][0] + (s[0] - t.i[r][0]) * -i, f = t.i[r][1] + (s[1] - t.i[r][1]) * -i, d.setTripleAt(n, h, o, l, p, f, r);
                        return d
                    }, ht.prototype.processShapes = function(t) {
                        var e, i, s, a, r, n, h = this.shapes.length,
                            o = this.amount.v;
                        if (0 !== o)
                            for (i = 0; i < h; i += 1) {
                                if (n = (r = this.shapes[i]).localShapeCollection, r.shape._mdf || this._mdf || t)
                                    for (n.releaseShapes(), r.shape._mdf = !0, e = r.shape.paths.shapes, a = r.shape.paths._length, s = 0; s < a; s += 1) n.addShape(this.processPath(e[s], o));
                                r.shape.paths = r.localShapeCollection
                            }
                        this.dynamicProperties.length || (this._mdf = !1)
                    }, st.registerModifier("pb", ht), X([at], ot), ot.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.c = $.getProp(t, e.c, 0, null, this), this.o = $.getProp(t, e.o, 0, null, this), this.tr = tt.getTransformProperty(t, e.tr, this), this.so = $.getProp(t, e.tr.so, 0, .01, this), this.eo = $.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new G, this.rMatrix = new G, this.sMatrix = new G, this.tMatrix = new G, this.matrix = new G
                    }, ot.prototype.applyTransforms = function(t, e, i, s, a, r) {
                        var n = r ? -1 : 1,
                            h = s.s.v[0] + (1 - s.s.v[0]) * (1 - a),
                            o = s.s.v[1] + (1 - s.s.v[1]) * (1 - a);
                        t.translate(s.p.v[0] * n * a, s.p.v[1] * n * a, s.p.v[2]), e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), e.rotate(-s.r.v * n * a), e.translate(s.a.v[0], s.a.v[1], s.a.v[2]), i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), i.scale(r ? 1 / h : h, r ? 1 / o : o), i.translate(s.a.v[0], s.a.v[1], s.a.v[2])
                    }, ot.prototype.init = function(t, e, i, s) {
                        for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = s, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;) i -= 1, this._elements.unshift(e[i]);
                        this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                    }, ot.prototype.resetElements = function(t) {
                        var e, i = t.length;
                        for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
                    }, ot.prototype.cloneElements = function(t) {
                        var e = JSON.parse(JSON.stringify(t));
                        return this.resetElements(e), e
                    }, ot.prototype.changeGroupRender = function(t, e) {
                        var i, s = t.length;
                        for (i = 0; i < s; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
                    }, ot.prototype.processShapes = function(t) {
                        var e, i, s, a, r, n = !1;
                        if (this._mdf || t) {
                            var h, o = Math.ceil(this.c.v);
                            if (this._groups.length < o) {
                                for (; this._groups.length < o;) {
                                    var l = {
                                        it: this.cloneElements(this._elements),
                                        ty: "gr"
                                    };
                                    l.it.push({
                                        a: {
                                            a: 0,
                                            ix: 1,
                                            k: [0, 0]
                                        },
                                        nm: "Transform",
                                        o: {
                                            a: 0,
                                            ix: 7,
                                            k: 100
                                        },
                                        p: {
                                            a: 0,
                                            ix: 2,
                                            k: [0, 0]
                                        },
                                        r: {
                                            a: 1,
                                            ix: 6,
                                            k: [{
                                                s: 0,
                                                e: 0,
                                                t: 0
                                            }, {
                                                s: 0,
                                                e: 0,
                                                t: 1
                                            }]
                                        },
                                        s: {
                                            a: 0,
                                            ix: 3,
                                            k: [100, 100]
                                        },
                                        sa: {
                                            a: 0,
                                            ix: 5,
                                            k: 0
                                        },
                                        sk: {
                                            a: 0,
                                            ix: 4,
                                            k: 0
                                        },
                                        ty: "tr"
                                    }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
                                }
                                this.elem.reloadShapes(), n = !0
                            }
                            for (r = 0, s = 0; s <= this._groups.length - 1; s += 1) {
                                if (h = r < o, this._groups[s]._render = h, this.changeGroupRender(this._groups[s].it, h), !h) {
                                    var p = this.elemsData[s].it,
                                        f = p[p.length - 1];
                                    0 !== f.transform.op.v ? (f.transform.op._mdf = !0, f.transform.op.v = 0) : f.transform.op._mdf = !1
                                }
                                r += 1
                            }
                            this._currentCopies = o;
                            var d = this.o.v,
                                m = d % 1,
                                c = d > 0 ? Math.floor(d) : Math.ceil(d),
                                u = this.pMatrix.props,
                                g = this.rMatrix.props,
                                v = this.sMatrix.props;
                            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                            var y, b, _ = 0;
                            if (d > 0) {
                                for (; _ < c;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), _ += 1;
                                m && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, m, !1), _ += m)
                            } else if (d < 0) {
                                for (; _ > c;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), _ -= 1;
                                m && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -m, !0), _ -= m)
                            }
                            for (s = 1 === this.data.m ? 0 : this._currentCopies - 1, a = 1 === this.data.m ? 1 : -1, r = this._currentCopies; r;) {
                                if (b = (i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1)), 0 !== _) {
                                    for ((0 !== s && 1 === a || s !== this._currentCopies - 1 && -1 === a) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), y = 0; y < b; y += 1) i[y] = this.matrix.props[y];
                                    this.matrix.reset()
                                } else
                                    for (this.matrix.reset(), y = 0; y < b; y += 1) i[y] = this.matrix.props[y];
                                _ += 1, r -= 1, s += a
                            }
                        } else
                            for (r = this._currentCopies, s = 0, a = 1; r;) i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, r -= 1, s += a;
                        return n
                    }, ot.prototype.addShape = function() {}, st.registerModifier("rp", ot), lt.prototype.addShape = function(t) {
                        this._length === this._maxLength && (this.shapes = this.shapes.concat(V(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
                    }, lt.prototype.releaseShapes = function() {
                        var t;
                        for (t = 0; t < this._length; t += 1) Mt.release(this.shapes[t]);
                        this._length = 0
                    }, pt.prototype.getValue = function(t) {
                        if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                            var e = 0,
                                i = this.dataProps.length;
                            for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                        }
                    }, X([N], pt), ft.prototype.comparePoints = function(t, e) {
                        for (var i = 0, s = this.o.length / 2; i < s;) {
                            if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01) return !1;
                            i += 1
                        }
                        return !0
                    }, ft.prototype.checkCollapsable = function() {
                        if (this.o.length / 2 != this.c.length / 4) return !1;
                        if (this.data.k.k[0].s)
                            for (var t = 0, e = this.data.k.k.length; t < e;) {
                                if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                                t += 1
                            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                        return !0
                    }, ft.prototype.getValue = function(t) {
                        if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                            var e, i, s, a = 4 * this.data.p;
                            for (e = 0; e < a; e += 1) i = e % 4 == 0 ? 100 : 255, s = Math.round(this.prop.v[e] * i), this.c[e] !== s && (this.c[e] = s, this._cmdf = !t);
                            if (this.o.length)
                                for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1) i = e % 2 == 0 ? 100 : 1, s = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== s && (this.o[e - 4 * this.data.p] = s, this._omdf = !t);
                            this._mdf = !t
                        }
                    }, X([N], ft);
                    var dt, mt = function(t, e, i, s) {
                            if (0 === e) return "";
                            var a, r = t.o,
                                n = t.i,
                                h = t.v,
                                o = " M" + s.applyToPointStringified(h[0][0], h[0][1]);
                            for (a = 1; a < e; a += 1) o += " C" + s.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + s.applyToPointStringified(n[a][0], n[a][1]) + " " + s.applyToPointStringified(h[a][0], h[a][1]);
                            return i && e && (o += " C" + s.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]) + " " + s.applyToPointStringified(h[0][0], h[0][1]), o += "z"), o
                        },
                        ct = function() {
                            function t(t) {
                                this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
                            }
                            return t.prototype = {
                                    addAudio: function(t) {
                                        this.audios.push(t)
                                    },
                                    pause: function() {
                                        var t, e = this.audios.length;
                                        for (t = 0; t < e; t += 1) this.audios[t].pause()
                                    },
                                    resume: function() {
                                        var t, e = this.audios.length;
                                        for (t = 0; t < e; t += 1) this.audios[t].resume()
                                    },
                                    setRate: function(t) {
                                        var e, i = this.audios.length;
                                        for (e = 0; e < i; e += 1) this.audios[e].setRate(t)
                                    },
                                    createAudio: function(t) {
                                        return this.audioFactory ? this.audioFactory(t) : Howl ? new Howl({
                                            src: [t]
                                        }) : {
                                            isPlaying: !1,
                                            play: function() {
                                                this.isPlaying = !0
                                            },
                                            seek: function() {
                                                this.isPlaying = !1
                                            },
                                            playing: function() {},
                                            rate: function() {},
                                            setVolume: function() {}
                                        }
                                    },
                                    setAudioFactory: function(t) {
                                        this.audioFactory = t
                                    },
                                    setVolume: function(t) {
                                        this._volume = t, this._updateVolume()
                                    },
                                    mute: function() {
                                        this._isMuted = !0, this._updateVolume()
                                    },
                                    unmute: function() {
                                        this._isMuted = !1, this._updateVolume()
                                    },
                                    getVolume: function() {
                                        return this._volume
                                    },
                                    _updateVolume: function() {
                                        var t, e = this.audios.length;
                                        for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                                    }
                                },
                                function() {
                                    return new t
                                }
                        }(),
                        ut = function() {
                            var t = function() {
                                var t = z("canvas");
                                t.width = 1, t.height = 1;
                                var e = t.getContext("2d");
                                return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                            }();

                            function e() {
                                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                            }

                            function i() {
                                this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                            }

                            function s(t, e, i) {
                                var s = "";
                                if (t.e) s = t.p;
                                else if (e) {
                                    var a = t.p; - 1 !== a.indexOf("images/") && (a = a.split("/")[1]), s = e + a
                                } else s = i, s += t.u ? t.u : "", s += t.p;
                                return s
                            }

                            function a(t) {
                                var e = 0,
                                    i = setInterval(function() {
                                        (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(i)), e += 1
                                    }.bind(this), 50)
                            }

                            function r(e) {
                                var i = s(e, this.assetsPath, this.path),
                                    a = R("image");
                                h ? this.testImageLoaded(a) : a.addEventListener("load", this._imageLoaded, !1), a.addEventListener("error", function() {
                                    r.img = t, this._imageLoaded()
                                }.bind(this), !1), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", i), this._elementHelper.append ? this._elementHelper.append(a) : this._elementHelper.appendChild(a);
                                var r = {
                                    img: a,
                                    assetData: e
                                };
                                return r
                            }

                            function n(e) {
                                var i = s(e, this.assetsPath, this.path),
                                    a = z("img");
                                a.crossOrigin = "anonymous", a.addEventListener("load", this._imageLoaded, !1), a.addEventListener("error", function() {
                                    r.img = t, this._imageLoaded()
                                }.bind(this), !1), a.src = i;
                                var r = {
                                    img: a,
                                    assetData: e
                                };
                                return r
                            }

                            function o(t) {
                                var e = {
                                        assetData: t
                                    },
                                    i = s(t, this.assetsPath, this.path);
                                return yt.load(i, function(t) {
                                    e.img = t, this._footageLoaded()
                                }.bind(this), function() {
                                    e.img = {}, this._footageLoaded()
                                }.bind(this)), e
                            }

                            function l(t, e) {
                                var i;
                                this.imagesLoadedCb = e;
                                var s = t.length;
                                for (i = 0; i < s; i += 1) t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
                            }

                            function p(t) {
                                this.path = t || ""
                            }

                            function f(t) {
                                this.assetsPath = t || ""
                            }

                            function d(t) {
                                for (var e = 0, i = this.images.length; e < i;) {
                                    if (this.images[e].assetData === t) return this.images[e].img;
                                    e += 1
                                }
                                return null
                            }

                            function m() {
                                this.imagesLoadedCb = null, this.images.length = 0
                            }

                            function c() {
                                return this.totalImages === this.loadedAssets
                            }

                            function u() {
                                return this.totalFootages === this.loadedFootagesCount
                            }

                            function g(t, e) {
                                "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                            }

                            function v() {
                                this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = a.bind(this), this.createFootageData = o.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                            }
                            return v.prototype = {
                                loadAssets: l,
                                setAssetsPath: f,
                                setPath: p,
                                loadedImages: c,
                                loadedFootages: u,
                                destroy: m,
                                getAsset: d,
                                createImgData: n,
                                createImageData: r,
                                imageLoaded: e,
                                footageLoaded: i,
                                setCacheType: g
                            }, v
                        }(),
                        gt = (dt = {
                            maskType: !0
                        }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (dt.maskType = !1), dt),
                        vt = function() {
                            var t = {};

                            function e(t, e) {
                                var i = R("filter");
                                return i.setAttribute("id", t), !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%")), i
                            }

                            function i() {
                                var t = R("feColorMatrix");
                                return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                            }
                            return t.createFilter = e, t.createAlphaToLuminanceFilter = i, t
                        }(),
                        yt = function() {
                            function t(t) {
                                return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                            }

                            function e(e, i, s) {
                                var a, r = new XMLHttpRequest;
                                try {
                                    r.responseType = "json"
                                } catch (n) {}
                                r.onreadystatechange = function() {
                                    if (4 === r.readyState)
                                        if (200 === r.status) a = t(r), i(a);
                                        else try {
                                            a = t(r), i(a)
                                        } catch (n) {
                                            s && s(n)
                                        }
                                }, r.open("GET", e, !0), r.send()
                            }
                            return {
                                load: e
                            }
                        }();

                    function bt(t, e, i) {
                        this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = V(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                            alignment: {}
                        }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
                    }

                    function _t(t, e, i) {
                        var s = {
                                propType: !1
                            },
                            a = $.getProp,
                            r = e.a;
                        this.a = {
                            r: r.r ? a(t, r.r, 0, u, i) : s,
                            rx: r.rx ? a(t, r.rx, 0, u, i) : s,
                            ry: r.ry ? a(t, r.ry, 0, u, i) : s,
                            sk: r.sk ? a(t, r.sk, 0, u, i) : s,
                            sa: r.sa ? a(t, r.sa, 0, u, i) : s,
                            s: r.s ? a(t, r.s, 1, .01, i) : s,
                            a: r.a ? a(t, r.a, 1, 0, i) : s,
                            o: r.o ? a(t, r.o, 0, .01, i) : s,
                            p: r.p ? a(t, r.p, 1, 0, i) : s,
                            sw: r.sw ? a(t, r.sw, 0, 0, i) : s,
                            sc: r.sc ? a(t, r.sc, 1, 0, i) : s,
                            fc: r.fc ? a(t, r.fc, 1, 0, i) : s,
                            fh: r.fh ? a(t, r.fh, 0, 0, i) : s,
                            fs: r.fs ? a(t, r.fs, 0, .01, i) : s,
                            fb: r.fb ? a(t, r.fb, 0, .01, i) : s,
                            t: r.t ? a(t, r.t, 0, 0, i) : s
                        }, this.s = Pt.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
                    }

                    function kt(t, e, i, s, a, r) {
                        this.o = t, this.sw = e, this.sc = i, this.fc = s, this.m = a, this.p = r, this._mdf = {
                            o: !0,
                            sw: !!e,
                            sc: !!i,
                            fc: !!s,
                            m: !0,
                            p: !0
                        }
                    }

                    function At(t, e) {
                        this._frameId = a, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                            ascent: 0,
                            boxWidth: this.defaultBoxWidth,
                            f: "",
                            fStyle: "",
                            fWeight: "",
                            fc: "",
                            j: "",
                            justifyOffset: "",
                            l: [],
                            lh: 0,
                            lineWidths: [],
                            ls: "",
                            of: "",
                            s: "",
                            sc: "",
                            sw: 0,
                            t: 0,
                            tr: 0,
                            sz: 0,
                            ps: null,
                            fillColorAnim: !1,
                            strokeColorAnim: !1,
                            strokeWidthAnim: !1,
                            yOffset: 0,
                            finalSize: 0,
                            finalText: [],
                            finalLineHeight: 0,
                            __complete: !1
                        }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                    }
                    bt.prototype.searchProperties = function() {
                        var t, e, i = this._textData.a.length,
                            s = $.getProp;
                        for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new _t(this._elem, e, this);
                        this._textData.p && "m" in this._textData.p ? (this._pathData = {
                            a: s(this._elem, this._textData.p.a, 0, 0, this),
                            f: s(this._elem, this._textData.p.f, 0, 0, this),
                            l: s(this._elem, this._textData.p.l, 0, 0, this),
                            r: s(this._elem, this._textData.p.r, 0, 0, this),
                            p: s(this._elem, this._textData.p.p, 0, 0, this),
                            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                        }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this)
                    }, bt.prototype.getMeasures = function(t, e) {
                        if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                            this._isFirstFrame = !1;
                            var i, s, a, r, n, h, o, l, p, f, d, m, c, u, g, v, y, b, _, k = this._moreOptions.alignment.v,
                                A = this._animatorsData,
                                P = this._textData,
                                C = this.mHelper,
                                x = this._renderType,
                                F = this.renderedLetters.length,
                                M = t.l;
                            if (this._hasMaskedPath) {
                                if (_ = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                    var D, T = _.v;
                                    for (this._pathData.r.v && (T = T.reverse()), n = {
                                            tLength: 0,
                                            segments: []
                                        }, r = T._length - 1, v = 0, a = 0; a < r; a += 1) D = J.buildBezierData(T.v[a], T.v[a + 1], [T.o[a][0] - T.v[a][0], T.o[a][1] - T.v[a][1]], [T.i[a + 1][0] - T.v[a + 1][0], T.i[a + 1][1] - T.v[a + 1][1]]), n.tLength += D.segmentLength, n.segments.push(D), v += D.segmentLength;
                                    a = r, _.v.c && (D = J.buildBezierData(T.v[a], T.v[0], [T.o[a][0] - T.v[a][0], T.o[a][1] - T.v[a][1]], [T.i[0][0] - T.v[0][0], T.i[0][1] - T.v[0][1]]), n.tLength += D.segmentLength, n.segments.push(D), v += D.segmentLength), this._pathData.pi = n
                                }
                                if (n = this._pathData.pi, h = this._pathData.f.v, d = 0, f = 1, l = 0, p = !0, u = n.segments, h < 0 && _.v.c)
                                    for (n.tLength < Math.abs(h) && (h = -Math.abs(h) % n.tLength), f = (c = u[d = u.length - 1].points).length - 1; h < 0;) h += c[f].partialLength, (f -= 1) < 0 && (f = (c = u[d -= 1].points).length - 1);
                                m = (c = u[d].points)[f - 1], g = (o = c[f]).partialLength
                            }
                            r = M.length, i = 0, s = 0;
                            var I, L, V, R, z, N = 1.2 * t.finalSize * .714,
                                O = !0;
                            V = A.length;
                            var B, q, j, G, W, X, H, Y, K, U, Z, Q, $ = -1,
                                tt = h,
                                et = d,
                                it = f,
                                st = -1,
                                at = "",
                                rt = this.defaultPropsArray;
                            if (2 === t.j || 1 === t.j) {
                                var nt = 0,
                                    ht = 0,
                                    ot = 2 === t.j ? -.5 : -1,
                                    lt = 0,
                                    pt = !0;
                                for (a = 0; a < r; a += 1)
                                    if (M[a].n) {
                                        for (nt && (nt += ht); lt < a;) M[lt].animatorJustifyOffset = nt, lt += 1;
                                        nt = 0, pt = !0
                                    } else {
                                        for (L = 0; L < V; L += 1)(I = A[L].a).t.propType && (pt && 2 === t.j && (ht += I.t.v * ot), (z = A[L].s.getMult(M[a].anIndexes[L], P.a[L].s.totalChars)).length ? nt += I.t.v * z[0] * ot : nt += I.t.v * z * ot);
                                        pt = !1
                                    }
                                for (nt && (nt += ht); lt < a;) M[lt].animatorJustifyOffset = nt, lt += 1
                            }
                            for (a = 0; a < r; a += 1) {
                                if (C.reset(), G = 1, M[a].n) i = 0, s += t.yOffset, s += O ? 1 : 0, h = tt, O = !1, this._hasMaskedPath && (f = it, m = (c = u[d = et].points)[f - 1], g = (o = c[f]).partialLength, l = 0), at = "", Z = "", K = "", Q = "", rt = this.defaultPropsArray;
                                else {
                                    if (this._hasMaskedPath) {
                                        if (st !== M[a].line) {
                                            switch (t.j) {
                                                case 1:
                                                    h += v - t.lineWidths[M[a].line];
                                                    break;
                                                case 2:
                                                    h += (v - t.lineWidths[M[a].line]) / 2
                                            }
                                            st = M[a].line
                                        }
                                        $ !== M[a].ind && (M[$] && (h += M[$].extra), h += M[a].an / 2, $ = M[a].ind), h += k[0] * M[a].an * .005;
                                        var ft = 0;
                                        for (L = 0; L < V; L += 1)(I = A[L].a).p.propType && ((z = A[L].s.getMult(M[a].anIndexes[L], P.a[L].s.totalChars)).length ? ft += I.p.v[0] * z[0] : ft += I.p.v[0] * z), I.a.propType && ((z = A[L].s.getMult(M[a].anIndexes[L], P.a[L].s.totalChars)).length ? ft += I.a.v[0] * z[0] : ft += I.a.v[0] * z);
                                        for (p = !0, this._pathData.a.v && (h = .5 * M[0].an + (v - this._pathData.f.v - .5 * M[0].an - .5 * M[M.length - 1].an) * $ / (r - 1), h += this._pathData.f.v); p;) l + g >= h + ft || !c ? (y = (h + ft - l) / o.partialLength, q = m.point[0] + (o.point[0] - m.point[0]) * y, j = m.point[1] + (o.point[1] - m.point[1]) * y, C.translate(-k[0] * M[a].an * .005, -k[1] * N * .01), p = !1) : c && (l += o.partialLength, (f += 1) >= c.length && (f = 0, u[d += 1] ? c = u[d].points : _.v.c ? (f = 0, c = u[d = 0].points) : (l -= o.partialLength, c = null)), c && (m = o, g = (o = c[f]).partialLength));
                                        B = M[a].an / 2 - M[a].add, C.translate(-B, 0, 0)
                                    } else B = M[a].an / 2 - M[a].add, C.translate(-B, 0, 0), C.translate(-k[0] * M[a].an * .005, -k[1] * N * .01, 0);
                                    for (L = 0; L < V; L += 1)(I = A[L].a).t.propType && (z = A[L].s.getMult(M[a].anIndexes[L], P.a[L].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? z.length ? h += I.t.v * z[0] : h += I.t.v * z : z.length ? i += I.t.v * z[0] : i += I.t.v * z));
                                    for (t.strokeWidthAnim && (X = t.sw || 0), t.strokeColorAnim && (W = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), L = 0; L < V; L += 1)(I = A[L].a).a.propType && ((z = A[L].s.getMult(M[a].anIndexes[L], P.a[L].s.totalChars)).length ? C.translate(-I.a.v[0] * z[0], -I.a.v[1] * z[1], I.a.v[2] * z[2]) : C.translate(-I.a.v[0] * z, -I.a.v[1] * z, I.a.v[2] * z));
                                    for (L = 0; L < V; L += 1)(I = A[L].a).s.propType && ((z = A[L].s.getMult(M[a].anIndexes[L], P.a[L].s.totalChars)).length ? C.scale(1 + (I.s.v[0] - 1) * z[0], 1 + (I.s.v[1] - 1) * z[1], 1) : C.scale(1 + (I.s.v[0] - 1) * z, 1 + (I.s.v[1] - 1) * z, 1));
                                    for (L = 0; L < V; L += 1) {
                                        if (I = A[L].a, z = A[L].s.getMult(M[a].anIndexes[L], P.a[L].s.totalChars), I.sk.propType && (z.length ? C.skewFromAxis(-I.sk.v * z[0], I.sa.v * z[1]) : C.skewFromAxis(-I.sk.v * z, I.sa.v * z)), I.r.propType && (z.length ? C.rotateZ(-I.r.v * z[2]) : C.rotateZ(-I.r.v * z)), I.ry.propType && (z.length ? C.rotateY(I.ry.v * z[1]) : C.rotateY(I.ry.v * z)), I.rx.propType && (z.length ? C.rotateX(I.rx.v * z[0]) : C.rotateX(I.rx.v * z)), I.o.propType && (z.length ? G += (I.o.v * z[0] - G) * z[0] : G += (I.o.v * z - G) * z), t.strokeWidthAnim && I.sw.propType && (z.length ? X += I.sw.v * z[0] : X += I.sw.v * z), t.strokeColorAnim && I.sc.propType)
                                            for (Y = 0; Y < 3; Y += 1) z.length ? W[Y] += (I.sc.v[Y] - W[Y]) * z[0] : W[Y] += (I.sc.v[Y] - W[Y]) * z;
                                        if (t.fillColorAnim && t.fc) {
                                            if (I.fc.propType)
                                                for (Y = 0; Y < 3; Y += 1) z.length ? H[Y] += (I.fc.v[Y] - H[Y]) * z[0] : H[Y] += (I.fc.v[Y] - H[Y]) * z;
                                            I.fh.propType && (H = z.length ? E(H, I.fh.v * z[0]) : E(H, I.fh.v * z)), I.fs.propType && (H = z.length ? S(H, I.fs.v * z[0]) : S(H, I.fs.v * z)), I.fb.propType && (H = z.length ? w(H, I.fb.v * z[0]) : w(H, I.fb.v * z))
                                        }
                                    }
                                    for (L = 0; L < V; L += 1)(I = A[L].a).p.propType && (z = A[L].s.getMult(M[a].anIndexes[L], P.a[L].s.totalChars), this._hasMaskedPath ? z.length ? C.translate(0, I.p.v[1] * z[0], -I.p.v[2] * z[1]) : C.translate(0, I.p.v[1] * z, -I.p.v[2] * z) : z.length ? C.translate(I.p.v[0] * z[0], I.p.v[1] * z[1], -I.p.v[2] * z[2]) : C.translate(I.p.v[0] * z, I.p.v[1] * z, -I.p.v[2] * z));
                                    if (t.strokeWidthAnim && (K = X < 0 ? 0 : X), t.strokeColorAnim && (U = "rgb(" + Math.round(255 * W[0]) + "," + Math.round(255 * W[1]) + "," + Math.round(255 * W[2]) + ")"), t.fillColorAnim && t.fc && (Z = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                                        if (C.translate(0, -t.ls), C.translate(0, k[1] * N * .01 + s, 0), this._pathData.p.v) {
                                            b = (o.point[1] - m.point[1]) / (o.point[0] - m.point[0]);
                                            var dt = 180 * Math.atan(b) / Math.PI;
                                            o.point[0] < m.point[0] && (dt += 180), C.rotate(-dt * Math.PI / 180)
                                        }
                                        C.translate(q, j, 0), h -= k[0] * M[a].an * .005, M[a + 1] && $ !== M[a + 1].ind && (h += M[a].an / 2, h += .001 * t.tr * t.finalSize)
                                    } else {
                                        switch (C.translate(i, s, 0), t.ps && C.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                            case 1:
                                                C.translate(M[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[M[a].line]), 0, 0);
                                                break;
                                            case 2:
                                                C.translate(M[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[M[a].line]) / 2, 0, 0)
                                        }
                                        C.translate(0, -t.ls), C.translate(B, 0, 0), C.translate(k[0] * M[a].an * .005, k[1] * N * .01, 0), i += M[a].l + .001 * t.tr * t.finalSize
                                    }
                                    "html" === x ? at = C.toCSS() : "svg" === x ? at = C.to2dCSS() : rt = [C.props[0], C.props[1], C.props[2], C.props[3], C.props[4], C.props[5], C.props[6], C.props[7], C.props[8], C.props[9], C.props[10], C.props[11], C.props[12], C.props[13], C.props[14], C.props[15]], Q = G
                                }
                                F <= a ? (R = new kt(Q, K, U, Z, at, rt), this.renderedLetters.push(R), F += 1, this.lettersChangedFlag = !0) : (R = this.renderedLetters[a], this.lettersChangedFlag = R.update(Q, K, U, Z, at, rt) || this.lettersChangedFlag)
                            }
                        }
                    }, bt.prototype.getValue = function() {
                        this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                    }, bt.prototype.mHelper = new G, bt.prototype.defaultPropsArray = [], X([N], bt), kt.prototype.update = function(t, e, i, s, a, r) {
                        this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                        var n = !1;
                        return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, n = !0), this.fc !== s && (this.fc = s, this._mdf.fc = !0, n = !0), this.m !== a && (this.m = a, this._mdf.m = !0, n = !0), !r.length || this.p[0] === r[0] && this.p[1] === r[1] && this.p[4] === r[4] && this.p[5] === r[5] && this.p[12] === r[12] && this.p[13] === r[13] || (this.p = r, this._mdf.p = !0, n = !0), n
                    }, At.prototype.defaultBoxWidth = [0, 0], At.prototype.copyData = function(t, e) {
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }, At.prototype.setCurrentData = function(t) {
                        t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                    }, At.prototype.searchProperty = function() {
                        return this.searchKeyframes()
                    }, At.prototype.searchKeyframes = function() {
                        return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                    }, At.prototype.addEffect = function(t) {
                        this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
                    }, At.prototype.getValue = function(t) {
                        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                            var e = this.currentData,
                                i = this.keysIndex;
                            if (this.lock) this.setCurrentData(this.currentData);
                            else {
                                var s;
                                this.lock = !0, this._mdf = !1;
                                var a = this.effectsSequence.length,
                                    r = t || this.data.d.k[this.keysIndex].s;
                                for (s = 0; s < a; s += 1) r = i !== this.keysIndex ? this.effectsSequence[s](r, r.t) : this.effectsSequence[s](this.currentData, r.t);
                                e !== r && this.setCurrentData(r), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                            }
                        }
                    }, At.prototype.getKeyframeValue = function() {
                        for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, s = t.length; i <= s - 1 && !(i === s - 1 || t[i + 1].t > e);) i += 1;
                        return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
                    }, At.prototype.buildFinalText = function(t) {
                        for (var e, i, s = [], a = 0, r = t.length, n = !1; a < r;) e = t.charCodeAt(a), Q.isCombinedCharacter(e) ? s[s.length - 1] += t.charAt(a) : e >= 55296 && e <= 56319 ? (i = t.charCodeAt(a + 1)) >= 56320 && i <= 57343 ? (n || Q.isModifier(e, i) ? (s[s.length - 1] += t.substr(a, 2), n = !1) : s.push(t.substr(a, 2)), a += 1) : s.push(t.charAt(a)) : e > 56319 ? (i = t.charCodeAt(a + 1), Q.isZeroWidthJoiner(e, i) ? (n = !0, s[s.length - 1] += t.substr(a, 2), a += 1) : s.push(t.charAt(a))) : Q.isZeroWidthJoiner(e) ? (s[s.length - 1] += t.charAt(a), n = !0) : s.push(t.charAt(a)), a += 1;
                        return s
                    }, At.prototype.completeTextData = function(t) {
                        t.__complete = !0;
                        var e, i, s, a, r, n, h, o = this.elem.globalData.fontManager,
                            l = this.data,
                            p = [],
                            f = 0,
                            d = l.m.g,
                            m = 0,
                            c = 0,
                            u = 0,
                            g = [],
                            v = 0,
                            y = 0,
                            b = o.getFontByName(t.f),
                            _ = 0,
                            k = Z(b);
                        t.fWeight = k.weight, t.fStyle = k.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
                        var A, P = t.tr / 1e3 * t.finalSize;
                        if (t.sz)
                            for (var C, x, F = !0, M = t.sz[0], D = t.sz[1]; F;) {
                                C = 0, v = 0, i = (x = this.buildFinalText(t.t)).length, P = t.tr / 1e3 * t.finalSize;
                                var S = -1;
                                for (e = 0; e < i; e += 1) A = x[e].charCodeAt(0), s = !1, " " === x[e] ? S = e : 13 !== A && 3 !== A || (v = 0, s = !0, C += t.finalLineHeight || 1.2 * t.finalSize), o.chars ? (h = o.getCharData(x[e], b.fStyle, b.fFamily), _ = s ? 0 : h.w * t.finalSize / 100) : _ = o.measureText(x[e], t.f, t.finalSize), v + _ > M && " " !== x[e] ? (-1 === S ? i += 1 : e = S, C += t.finalLineHeight || 1.2 * t.finalSize, x.splice(e, S === e ? 1 : 0, "\r"), S = -1, v = 0) : (v += _, v += P);
                                C += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && D < C ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = x, i = t.finalText.length, F = !1)
                            }
                        v = -P, _ = 0;
                        var w, E = 0;
                        for (e = 0; e < i; e += 1)
                            if (s = !1, 13 === (A = (w = t.finalText[e]).charCodeAt(0)) || 3 === A ? (E = 0, g.push(v), y = v > y ? v : y, v = -2 * P, a = "", s = !0, u += 1) : a = w, o.chars ? (h = o.getCharData(w, b.fStyle, o.getFontByName(t.f).fFamily), _ = s ? 0 : h.w * t.finalSize / 100) : _ = o.measureText(a, t.f, t.finalSize), " " === w ? E += _ + P : (v += _ + P + E, E = 0), p.push({
                                    l: _,
                                    an: _,
                                    add: m,
                                    n: s,
                                    anIndexes: [],
                                    val: a,
                                    line: u,
                                    animatorJustifyOffset: 0
                                }), 2 == d) {
                                if (m += _, "" === a || " " === a || e === i - 1) {
                                    for ("" !== a && " " !== a || (m -= _); c <= e;) p[c].an = m, p[c].ind = f, p[c].extra = _, c += 1;
                                    f += 1, m = 0
                                }
                            } else if (3 == d) {
                            if (m += _, "" === a || e === i - 1) {
                                for ("" === a && (m -= _); c <= e;) p[c].an = m, p[c].ind = f, p[c].extra = _, c += 1;
                                m = 0, f += 1
                            }
                        } else p[f].ind = f, p[f].extra = 0, f += 1;
                        if (t.l = p, y = v > y ? v : y, g.push(v), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                        else switch (t.boxWidth = y, t.j) {
                            case 1:
                                t.justifyOffset = -t.boxWidth;
                                break;
                            case 2:
                                t.justifyOffset = -t.boxWidth / 2;
                                break;
                            default:
                                t.justifyOffset = 0
                        }
                        t.lineWidths = g;
                        var T, I, L, V, R = l.a;
                        n = R.length;
                        var z = [];
                        for (r = 0; r < n; r += 1) {
                            for ((T = R[r]).a.sc && (t.strokeColorAnim = !0), T.a.sw && (t.strokeWidthAnim = !0), (T.a.fc || T.a.fh || T.a.fs || T.a.fb) && (t.fillColorAnim = !0), V = 0, L = T.s.b, e = 0; e < i; e += 1)(I = p[e]).anIndexes[r] = V, (1 == L && "" !== I.val || 2 == L && "" !== I.val && " " !== I.val || 3 == L && (I.n || " " == I.val || e == i - 1) || 4 == L && (I.n || e == i - 1)) && (1 === T.s.rn && z.push(V), V += 1);
                            l.a[r].s.totalChars = V;
                            var N, O = -1;
                            if (1 === T.s.rn)
                                for (e = 0; e < i; e += 1) O != (I = p[e]).anIndexes[r] && (O = I.anIndexes[r], N = z.splice(Math.floor(Math.random() * z.length), 1)[0]), I.anIndexes[r] = N
                        }
                        t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
                    }, At.prototype.updateDocumentData = function(t, e) {
                        e = void 0 === e ? this.keysIndex : e;
                        var i = this.copyData({}, this.data.d.k[e].s);
                        i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.elem.addDynamicProperty(this)
                    }, At.prototype.recalculate = function(t) {
                        var e = this.data.d.k[t].s;
                        e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
                    }, At.prototype.canResizeFont = function(t) {
                        this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                    }, At.prototype.setMinimumFontSize = function(t) {
                        this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                    };
                    var Pt = function() {
                            var t = Math.max,
                                e = Math.min,
                                i = Math.floor;

                            function s(t, e) {
                                this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = $.getProp(t, e.s || {
                                    k: 0
                                }, 0, 0, this), this.e = "e" in e ? $.getProp(t, e.e, 0, 0, this) : {
                                    v: 100
                                }, this.o = $.getProp(t, e.o || {
                                    k: 0
                                }, 0, 0, this), this.xe = $.getProp(t, e.xe || {
                                    k: 0
                                }, 0, 0, this), this.ne = $.getProp(t, e.ne || {
                                    k: 0
                                }, 0, 0, this), this.sm = $.getProp(t, e.sm || {
                                    k: 100
                                }, 0, 0, this), this.a = $.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                            }

                            function a(t, e, i) {
                                return new s(t, e, i)
                            }
                            return s.prototype = {
                                getMult: function(s) {
                                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                                    var a = 0,
                                        r = 0,
                                        n = 1,
                                        h = 1;
                                    this.ne.v > 0 ? a = this.ne.v / 100 : r = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : h = 1 + this.xe.v / 100;
                                    var o = W.getBezierEasing(a, r, n, h).get,
                                        l = 0,
                                        p = this.finalS,
                                        f = this.finalE,
                                        d = this.data.sh;
                                    if (2 === d) l = o(l = f === p ? s >= f ? 1 : 0 : t(0, e(.5 / (f - p) + (s - p) / (f - p), 1)));
                                    else if (3 === d) l = o(l = f === p ? s >= f ? 0 : 1 : 1 - t(0, e(.5 / (f - p) + (s - p) / (f - p), 1)));
                                    else if (4 === d) f === p ? l = 0 : (l = t(0, e(.5 / (f - p) + (s - p) / (f - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = o(l);
                                    else if (5 === d) {
                                        if (f === p) l = 0;
                                        else {
                                            var m = f - p,
                                                c = -m / 2 + (s = e(t(0, s + .5 - p), f - p)),
                                                u = m / 2;
                                            l = Math.sqrt(1 - c * c / (u * u))
                                        }
                                        l = o(l)
                                    } else 6 === d ? (f === p ? l = 0 : (s = e(t(0, s + .5 - p), f - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * s / (f - p))) / 2), l = o(l)) : (s >= i(p) && (l = t(0, e(s - p < 0 ? e(f, 1) - (p - s) : f - s, 1))), l = o(l));
                                    if (100 !== this.sm.v) {
                                        var g = .01 * this.sm.v;
                                        0 === g && (g = 1e-8);
                                        var v = .5 - .5 * g;
                                        l < v ? l = 0 : (l = (l - v) / g) > 1 && (l = 1)
                                    }
                                    return l * this.a.v
                                },
                                getValue: function(t) {
                                    this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                                    var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                        i = this.o.v / e,
                                        s = this.s.v / e + i,
                                        a = this.e.v / e + i;
                                    if (s > a) {
                                        var r = s;
                                        s = a, a = r
                                    }
                                    this.finalS = s, this.finalE = a
                                }
                            }, X([N], s), {
                                getTextSelectorProp: a
                            }
                        }(),
                        Ct = function(t, e, i) {
                            var s = 0,
                                a = t,
                                r = V(a);

                            function n() {
                                return s ? r[s -= 1] : e()
                            }

                            function h(t) {
                                s === a && (r = xt.double(r), a *= 2), i && i(t), r[s] = t, s += 1
                            }
                            return {
                                newElement: n,
                                release: h
                            }
                        },
                        xt = function() {
                            function t(t) {
                                return t.concat(V(t.length))
                            }
                            return {
                                double: t
                            }
                        }(),
                        Ft = function() {
                            function t() {
                                return L("float32", 2)
                            }
                            return Ct(8, t)
                        }(),
                        Mt = function() {
                            function t() {
                                return new et
                            }

                            function e(t) {
                                var e, i = t._length;
                                for (e = 0; e < i; e += 1) Ft.release(t.v[e]), Ft.release(t.i[e]), Ft.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                                t._length = 0, t.c = !1
                            }

                            function i(t) {
                                var e, i = s.newElement(),
                                    a = void 0 === t._length ? t.v.length : t._length;
                                for (i.setLength(a), i.c = t.c, e = 0; e < a; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                                return i
                            }
                            var s = Ct(4, t, e);
                            return s.clone = i, s
                        }(),
                        Dt = function() {
                            var t = {
                                    newShapeCollection: a,
                                    release: r
                                },
                                e = 0,
                                i = 4,
                                s = V(i);

                            function a() {
                                return e ? s[e -= 1] : new lt
                            }

                            function r(t) {
                                var a, r = t._length;
                                for (a = 0; a < r; a += 1) Mt.release(t.shapes[a]);
                                t._length = 0, e === i && (s = xt.double(s), i *= 2), s[e] = t, e += 1
                            }
                            return t
                        }(),
                        St = function() {
                            function t() {
                                return {
                                    lengths: [],
                                    totalLength: 0
                                }
                            }

                            function e(t) {
                                var e, i = t.lengths.length;
                                for (e = 0; e < i; e += 1) wt.release(t.lengths[e]);
                                t.lengths.length = 0
                            }
                            return Ct(8, t, e)
                        }(),
                        wt = function() {
                            function t() {
                                return {
                                    addedLength: 0,
                                    percents: L("float32", c),
                                    lengths: L("float32", c)
                                }
                            }
                            return Ct(8, t)
                        }(),
                        Et = function() {
                            function t(t) {
                                for (var e, i = t.split("\r\n"), s = {}, a = 0, r = 0; r < i.length; r += 1) 2 === (e = i[r].split(":")).length && (s[e[0]] = e[1].trim(), a += 1);
                                if (0 === a) throw new Error;
                                return s
                            }
                            return function(e) {
                                for (var i = [], s = 0; s < e.length; s += 1) {
                                    var a = e[s],
                                        r = {
                                            time: a.tm,
                                            duration: a.dr
                                        };
                                    try {
                                        r.payload = JSON.parse(e[s].cm)
                                    } catch (n) {
                                        try {
                                            r.payload = t(e[s].cm)
                                        } catch (h) {
                                            r.payload = {
                                                name: e[s]
                                            }
                                        }
                                    }
                                    i.push(r)
                                }
                                return i
                            }
                        }();

                    function Tt() {}

                    function It(t, e) {
                        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = R("svg");
                        var i = "";
                        if (e && e.title) {
                            var s = R("title"),
                                a = F();
                            s.setAttribute("id", a), s.textContent = e.title, this.svgElement.appendChild(s), i += a
                        }
                        if (e && e.description) {
                            var r = R("desc"),
                                n = F();
                            r.setAttribute("id", n), r.textContent = e.description, this.svgElement.appendChild(r), i += " " + n
                        }
                        i && this.svgElement.setAttribute("aria-labelledby", i);
                        var h = R("defs");
                        this.svgElement.appendChild(h);
                        var o = R("g");
                        this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = {
                            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                            progressiveLoad: e && e.progressiveLoad || !1,
                            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                            viewBoxOnly: e && e.viewBoxOnly || !1,
                            viewBoxSize: e && e.viewBoxSize || !1,
                            className: e && e.className || "",
                            id: e && e.id || "",
                            focusable: e && e.focusable,
                            filterSize: {
                                width: e && e.filterSize && e.filterSize.width || "100%",
                                height: e && e.filterSize && e.filterSize.height || "100%",
                                x: e && e.filterSize && e.filterSize.x || "0%",
                                y: e && e.filterSize && e.filterSize.y || "0%"
                            }
                        }, this.globalData = {
                            _mdf: !1,
                            frameNum: -1,
                            defs: h,
                            renderConfig: this.renderConfig
                        }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                    }

                    function Lt(t, e, i) {
                        this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                        var a, r, n = this.globalData.defs,
                            h = this.masksProperties ? this.masksProperties.length : 0;
                        this.viewData = V(h), this.solidPath = "";
                        var o, l, p, f, d, m, c = this.masksProperties,
                            u = 0,
                            g = [],
                            v = F(),
                            y = "clipPath",
                            b = "clip-path";
                        for (a = 0; a < h; a += 1)
                            if (("a" !== c[a].mode && "n" !== c[a].mode || c[a].inv || 100 !== c[a].o.k || c[a].o.x) && (y = "mask", b = "mask"), "s" !== c[a].mode && "i" !== c[a].mode || 0 !== u ? p = null : ((p = R("rect")).setAttribute("fill", "#ffffff"), p.setAttribute("width", this.element.comp.data.w || 0), p.setAttribute("height", this.element.comp.data.h || 0), g.push(p)), r = R("path"), "n" === c[a].mode) this.viewData[a] = {
                                op: $.getProp(this.element, c[a].o, 0, .01, this.element),
                                prop: it.getShapeProp(this.element, c[a], 3),
                                elem: r,
                                lastPath: ""
                            }, n.appendChild(r);
                            else {
                                var _;
                                if (u += 1, r.setAttribute("fill", "s" === c[a].mode ? "#000000" : "#ffffff"), r.setAttribute("clip-rule", "nonzero"), 0 !== c[a].x.k ? (y = "mask", b = "mask", m = $.getProp(this.element, c[a].x, 0, null, this.element), _ = F(), (f = R("filter")).setAttribute("id", _), (d = R("feMorphology")).setAttribute("operator", "erode"), d.setAttribute("in", "SourceGraphic"), d.setAttribute("radius", "0"), f.appendChild(d), n.appendChild(f), r.setAttribute("stroke", "s" === c[a].mode ? "#000000" : "#ffffff")) : (d = null, m = null), this.storedData[a] = {
                                        elem: r,
                                        x: m,
                                        expan: d,
                                        lastPath: "",
                                        lastOperator: "",
                                        filterId: _,
                                        lastRadius: 0
                                    }, "i" === c[a].mode) {
                                    l = g.length;
                                    var k = R("g");
                                    for (o = 0; o < l; o += 1) k.appendChild(g[o]);
                                    var A = R("mask");
                                    A.setAttribute("mask-type", "alpha"), A.setAttribute("id", v + "_" + u), A.appendChild(r), n.appendChild(A), k.setAttribute("mask", "url(" + s + "#" + v + "_" + u + ")"), g.length = 0, g.push(k)
                                } else g.push(r);
                                c[a].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[a] = {
                                    elem: r,
                                    lastPath: "",
                                    op: $.getProp(this.element, c[a].o, 0, .01, this.element),
                                    prop: it.getShapeProp(this.element, c[a], 3),
                                    invRect: p
                                }, this.viewData[a].prop.k || this.drawPath(c[a], this.viewData[a].prop.v, this.viewData[a])
                            }
                        for (this.maskElement = R(y), h = g.length, a = 0; a < h; a += 1) this.maskElement.appendChild(g[a]);
                        u > 0 && (this.maskElement.setAttribute("id", v), this.element.maskedElement.setAttribute(b, "url(" + s + "#" + v + ")"), n.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                    }

                    function Vt() {}

                    function Rt() {}

                    function zt() {}

                    function Nt() {}

                    function Ot() {}

                    function Bt(t, e) {
                        this.elem = t, this.pos = e
                    }

                    function qt(t, e) {
                        this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = R("path"), this.msElem = null
                    }

                    function jt(t, e, i) {
                        this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
                        for (var s = 0, a = t.length; s < a;) {
                            if (t[s].mProps.dynamicProperties.length) {
                                this._isAnimated = !0;
                                break
                            }
                            s += 1
                        }
                    }

                    function Gt(t, e, i) {
                        this.transform = {
                            mProps: t,
                            op: e,
                            container: i
                        }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                    }

                    function Wt(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = $.getProp(t, e.o, 0, .01, this), this.w = $.getProp(t, e.w, 0, null, this), this.d = new pt(t, e.d || {}, "svg", this), this.c = $.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
                    }

                    function Xt(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = $.getProp(t, e.o, 0, .01, this), this.c = $.getProp(t, e.c, 1, 255, this), this.style = i
                    }

                    function Ht(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
                    }

                    function Yt(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = $.getProp(t, e.w, 0, null, this), this.d = new pt(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
                    }

                    function Jt() {
                        this.it = [], this.prevViewData = [], this.gr = R("g")
                    }
                    Tt.prototype.checkLayers = function(t) {
                        var e, i, s = this.layers.length;
                        for (this.completeLayers = !0, e = s - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                        this.checkPendingElements()
                    }, Tt.prototype.createItem = function(t) {
                        switch (t.ty) {
                            case 2:
                                return this.createImage(t);
                            case 0:
                                return this.createComp(t);
                            case 1:
                                return this.createSolid(t);
                            case 3:
                            default:
                                return this.createNull(t);
                            case 4:
                                return this.createShape(t);
                            case 5:
                                return this.createText(t);
                            case 6:
                                return this.createAudio(t);
                            case 13:
                                return this.createCamera(t);
                            case 15:
                                return this.createFootage(t)
                        }
                    }, Tt.prototype.createCamera = function() {
                        throw new Error("You're using a 3d camera. Try the html renderer.")
                    }, Tt.prototype.createAudio = function(t) {
                        return new re(t, this.globalData, this)
                    }, Tt.prototype.createFootage = function(t) {
                        return new FootageElement(t, this.globalData, this)
                    }, Tt.prototype.buildAllItems = function() {
                        var t, e = this.layers.length;
                        for (t = 0; t < e; t += 1) this.buildItem(t);
                        this.checkPendingElements()
                    }, Tt.prototype.includeLayers = function(t) {
                        var e;
                        this.completeLayers = !1;
                        var i, s = t.length,
                            a = this.layers.length;
                        for (e = 0; e < s; e += 1)
                            for (i = 0; i < a;) {
                                if (this.layers[i].id === t[e].id) {
                                    this.layers[i] = t[e];
                                    break
                                }
                                i += 1
                            }
                    }, Tt.prototype.setProjectInterface = function(t) {
                        this.globalData.projectInterface = t
                    }, Tt.prototype.initItems = function() {
                        this.globalData.progressiveLoad || this.buildAllItems()
                    }, Tt.prototype.buildElementParenting = function(t, e, i) {
                        for (var s = this.elements, a = this.layers, r = 0, n = a.length; r < n;) a[r].ind == e && (s[r] && !0 !== s[r] ? (i.push(s[r]), s[r].setAsParent(), void 0 !== a[r].parent ? this.buildElementParenting(t, a[r].parent, i) : t.setHierarchy(i)) : (this.buildItem(r), this.addPendingElement(t))), r += 1
                    }, Tt.prototype.addPendingElement = function(t) {
                        this.pendingElements.push(t)
                    }, Tt.prototype.searchExtraCompositions = function(t) {
                        var e, i = t.length;
                        for (e = 0; e < i; e += 1)
                            if (t[e].xt) {
                                var s = this.createComp(t[e]);
                                s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
                            }
                    }, Tt.prototype.setupGlobalData = function(t, e) {
                        this.globalData.fontManager = new Q, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                            w: t.w,
                            h: t.h
                        }
                    }, X([Tt], It), It.prototype.createNull = function(t) {
                        return new Qt(t, this.globalData, this)
                    }, It.prototype.createShape = function(t) {
                        return new oe(t, this.globalData, this)
                    }, It.prototype.createText = function(t) {
                        return new he(t, this.globalData, this)
                    }, It.prototype.createImage = function(t) {
                        return new se(t, this.globalData, this)
                    }, It.prototype.createComp = function(t) {
                        return new ne(t, this.globalData, this)
                    }, It.prototype.createSolid = function(t) {
                        return new ae(t, this.globalData, this)
                    }, It.prototype.configAnimation = function(t) {
                        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                        var e = this.globalData.defs;
                        this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                        var i = R("clipPath"),
                            a = R("rect");
                        a.setAttribute("width", t.w), a.setAttribute("height", t.h), a.setAttribute("x", 0), a.setAttribute("y", 0);
                        var r = F();
                        i.setAttribute("id", r), i.appendChild(a), this.layerElement.setAttribute("clip-path", "url(" + s + "#" + r + ")"), e.appendChild(i), this.layers = t.layers, this.elements = V(t.layers.length)
                    }, It.prototype.destroy = function() {
                        var t;
                        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                        var e = this.layers ? this.layers.length : 0;
                        for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
                        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                    }, It.prototype.updateContainerSize = function() {}, It.prototype.buildItem = function(t) {
                        var i = this.elements;
                        if (!i[t] && 99 !== this.layers[t].ty) {
                            i[t] = !0;
                            var s = this.createItem(this.layers[t]);
                            i[t] = s, e && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(s), s.initExpressions()), this.appendElementInPos(s, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? s.setMatte(i[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(s)))
                        }
                    }, It.prototype.checkPendingElements = function() {
                        for (; this.pendingElements.length;) {
                            var t = this.pendingElements.pop();
                            if (t.checkParenting(), t.data.tt)
                                for (var e = 0, i = this.elements.length; e < i;) {
                                    if (this.elements[e] === t) {
                                        t.setMatte(this.elements[e - 1].layerId);
                                        break
                                    }
                                    e += 1
                                }
                        }
                    }, It.prototype.renderFrame = function(t) {
                        if (this.renderedFrame !== t && !this.destroyed) {
                            var e;
                            null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                            var i = this.layers.length;
                            for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                            if (this.globalData._mdf)
                                for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                        }
                    }, It.prototype.appendElementInPos = function(t, e) {
                        var i = t.getBaseElement();
                        if (i) {
                            for (var s, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement() && (s = this.elements[a].getBaseElement()), a += 1;
                            s ? this.layerElement.insertBefore(i, s) : this.layerElement.appendChild(i)
                        }
                    }, It.prototype.hide = function() {
                        this.layerElement.style.display = "none"
                    }, It.prototype.show = function() {
                        this.layerElement.style.display = "block"
                    }, Lt.prototype.getMaskProperty = function(t) {
                        return this.viewData[t].prop
                    }, Lt.prototype.renderFrame = function(t) {
                        var e, i = this.element.finalTransform.mat,
                            a = this.masksProperties.length;
                        for (e = 0; e < a; e += 1)
                            if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                                var r = this.storedData[e].expan;
                                this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + s + "#" + this.storedData[e].filterId + ")")), r.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                            }
                    }, Lt.prototype.getMaskelement = function() {
                        return this.maskElement
                    }, Lt.prototype.createLayerSolidPath = function() {
                        var t = "M0,0 ";
                        return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
                    }, Lt.prototype.drawPath = function(t, e, i) {
                        var s, a, r = " M" + e.v[0][0] + "," + e.v[0][1];
                        for (a = e._length, s = 1; s < a; s += 1) r += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
                        if (e.c && a > 1 && (r += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== r) {
                            var n = "";
                            i.elem && (e.c && (n = t.inv ? this.solidPath + r : r), i.elem.setAttribute("d", n)), i.lastPath = r
                        }
                    }, Lt.prototype.destroy = function() {
                        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                    }, Vt.prototype = {
                        initHierarchy: function() {
                            this.hierarchy = [], this._isParent = !1, this.checkParenting()
                        },
                        setHierarchy: function(t) {
                            this.hierarchy = t
                        },
                        setAsParent: function() {
                            this._isParent = !0
                        },
                        checkParenting: function() {
                            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                        }
                    }, Rt.prototype = {
                        initFrame: function() {
                            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                        },
                        prepareProperties: function(t, e) {
                            var i, s = this.dynamicProperties.length;
                            for (i = 0; i < s; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                        },
                        addDynamicProperty: function(t) {
                            -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                        }
                    }, zt.prototype = {
                        initTransform: function() {
                            this.finalTransform = {
                                mProp: this.data.ks ? tt.getTransformProperty(this, this.data.ks, this) : {
                                    o: 0
                                },
                                _matMdf: !1,
                                _opMdf: !1,
                                mat: new G
                            }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                        },
                        renderTransform: function() {
                            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                                var t, e = this.finalTransform.mat,
                                    i = 0,
                                    s = this.hierarchy.length;
                                if (!this.finalTransform._matMdf)
                                    for (; i < s;) {
                                        if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                            this.finalTransform._matMdf = !0;
                                            break
                                        }
                                        i += 1
                                    }
                                if (this.finalTransform._matMdf)
                                    for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < s; i += 1) t = this.hierarchy[i].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                            }
                        },
                        globalToLocal: function(t) {
                            var e = [];
                            e.push(this.finalTransform);
                            for (var i, s = !0, a = this.comp; s;) a.finalTransform ? (a.data.hasMask && e.splice(0, 0, a.finalTransform), a = a.comp) : s = !1;
                            var r, n = e.length;
                            for (i = 0; i < n; i += 1) r = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - r[0], t[1] - r[1], 0];
                            return t
                        },
                        mHelper: new G
                    }, Nt.prototype = {
                        initRenderable: function() {
                            this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                        },
                        addRenderableComponent: function(t) {
                            -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                        },
                        removeRenderableComponent: function(t) {
                            -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                        },
                        prepareRenderableFrame: function(t) {
                            this.checkLayerLimits(t)
                        },
                        checkTransparency: function() {
                            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                        },
                        checkLayerLimits: function(t) {
                            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                        },
                        renderRenderable: function() {
                            var t, e = this.renderableComponents.length;
                            for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
                        },
                        sourceRectAtTime: function() {
                            return {
                                top: 0,
                                left: 0,
                                width: 100,
                                height: 100
                            }
                        },
                        getLayerSize: function() {
                            return 5 === this.data.ty ? {
                                w: this.data.textData.width,
                                h: this.data.textData.height
                            } : {
                                w: this.data.width,
                                h: this.data.height
                            }
                        }
                    }, X([Nt, H({
                        initElement: function(t, e, i) {
                            this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                        },
                        hide: function() {
                            this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                        },
                        show: function() {
                            this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                        },
                        renderFrame: function() {
                            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                        },
                        renderInnerContent: function() {},
                        prepareFrame: function(t) {
                            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
                        },
                        destroy: function() {
                            this.innerElem = null, this.destroyBaseElement()
                        }
                    })], Ot), qt.prototype.reset = function() {
                        this.d = "", this._mdf = !1
                    }, jt.prototype.setAsAnimated = function() {
                        this._isAnimated = !0
                    }, X([N], Wt), X([N], Xt), Ht.prototype.initGradientData = function(t, e, i) {
                        this.o = $.getProp(t, e.o, 0, .01, this), this.s = $.getProp(t, e.s, 1, null, this), this.e = $.getProp(t, e.e, 1, null, this), this.h = $.getProp(t, e.h || {
                            k: 0
                        }, 0, .01, this), this.a = $.getProp(t, e.a || {
                            k: 0
                        }, 0, u, this), this.g = new ft(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
                    }, Ht.prototype.setGradientData = function(t, e) {
                        var i = F(),
                            a = R(1 === e.t ? "linearGradient" : "radialGradient");
                        a.setAttribute("id", i), a.setAttribute("spreadMethod", "pad"), a.setAttribute("gradientUnits", "userSpaceOnUse");
                        var r, n, h, o = [];
                        for (h = 4 * e.g.p, n = 0; n < h; n += 4) r = R("stop"), a.appendChild(r), o.push(r);
                        t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + s + "#" + i + ")"), this.gf = a, this.cst = o
                    }, Ht.prototype.setGradientOpacity = function(t, e) {
                        if (this.g._hasOpacity && !this.g._collapsable) {
                            var i, a, r, n = R("mask"),
                                h = R("path");
                            n.appendChild(h);
                            var o = F(),
                                l = F();
                            n.setAttribute("id", l);
                            var p = R(1 === t.t ? "linearGradient" : "radialGradient");
                            p.setAttribute("id", o), p.setAttribute("spreadMethod", "pad"), p.setAttribute("gradientUnits", "userSpaceOnUse"), r = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                            var f = this.stops;
                            for (a = 4 * t.g.p; a < r; a += 2)(i = R("stop")).setAttribute("stop-color", "rgb(255,255,255)"), p.appendChild(i), f.push(i);
                            h.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + s + "#" + o + ")"), "gs" === t.ty && (h.setAttribute("stroke-linecap", q[t.lc || 2]), h.setAttribute("stroke-linejoin", j[t.lj || 2]), 1 === t.lj && h.setAttribute("stroke-miterlimit", t.ml)), this.of = p, this.ms = n, this.ost = f, this.maskId = l, e.msElem = h
                        }
                    }, X([N], Ht), X([Ht, N], Yt);
                    var Kt = function() {
                        var t = new G,
                            e = new G;

                        function i(t) {
                            switch (t.ty) {
                                case "fl":
                                    return r;
                                case "gf":
                                    return h;
                                case "gs":
                                    return n;
                                case "st":
                                    return o;
                                case "sh":
                                case "el":
                                case "rc":
                                case "sr":
                                    return a;
                                case "tr":
                                    return s;
                                default:
                                    return null
                            }
                        }

                        function s(t, e, i) {
                            (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                        }

                        function a(i, s, a) {
                            var r, n, h, o, l, p, f, d, m, c, u, g = s.styles.length,
                                v = s.lvl;
                            for (p = 0; p < g; p += 1) {
                                if (o = s.sh._mdf || a, s.styles[p].lvl < v) {
                                    for (d = e.reset(), c = v - s.styles[p].lvl, u = s.transformers.length - 1; !o && c > 0;) o = s.transformers[u].mProps._mdf || o, c -= 1, u -= 1;
                                    if (o)
                                        for (c = v - s.styles[p].lvl, u = s.transformers.length - 1; c > 0;) m = s.transformers[u].mProps.v.props, d.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), c -= 1, u -= 1
                                } else d = t;
                                if (n = (f = s.sh.paths)._length, o) {
                                    for (h = "", r = 0; r < n; r += 1)(l = f.shapes[r]) && l._length && (h += mt(l, l._length, l.c, d));
                                    s.caches[p] = h
                                } else h = s.caches[p];
                                s.styles[p].d += !0 === i.hd ? "" : h, s.styles[p]._mdf = o || s.styles[p]._mdf
                            }
                        }

                        function r(t, e, i) {
                            var s = e.style;
                            (e.c._mdf || i) && s.pElem.setAttribute("fill", "rgb(" + p(e.c.v[0]) + "," + p(e.c.v[1]) + "," + p(e.c.v[2]) + ")"), (e.o._mdf || i) && s.pElem.setAttribute("fill-opacity", e.o.v)
                        }

                        function n(t, e, i) {
                            h(t, e, i), o(t, e, i)
                        }

                        function h(t, e, i) {
                            var s, a, r, n, h, o = e.gf,
                                l = e.g._hasOpacity,
                                p = e.s.v,
                                f = e.e.v;
                            if (e.o._mdf || i) {
                                var d = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                                e.style.pElem.setAttribute(d, e.o.v)
                            }
                            if (e.s._mdf || i) {
                                var m = 1 === t.t ? "x1" : "cx",
                                    c = "x1" === m ? "y1" : "cy";
                                o.setAttribute(m, p[0]), o.setAttribute(c, p[1]), l && !e.g._collapsable && (e.of.setAttribute(m, p[0]), e.of.setAttribute(c, p[1]))
                            }
                            if (e.g._cmdf || i) {
                                s = e.cst;
                                var u = e.g.c;
                                for (r = s.length, a = 0; a < r; a += 1)(n = s[a]).setAttribute("offset", u[4 * a] + "%"), n.setAttribute("stop-color", "rgb(" + u[4 * a + 1] + "," + u[4 * a + 2] + "," + u[4 * a + 3] + ")")
                            }
                            if (l && (e.g._omdf || i)) {
                                var g = e.g.o;
                                for (r = (s = e.g._collapsable ? e.cst : e.ost).length, a = 0; a < r; a += 1) n = s[a], e.g._collapsable || n.setAttribute("offset", g[2 * a] + "%"), n.setAttribute("stop-opacity", g[2 * a + 1])
                            }
                            if (1 === t.t)(e.e._mdf || i) && (o.setAttribute("x2", f[0]), o.setAttribute("y2", f[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", f[0]), e.of.setAttribute("y2", f[1])));
                            else if ((e.s._mdf || e.e._mdf || i) && (h = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)), o.setAttribute("r", h), l && !e.g._collapsable && e.of.setAttribute("r", h)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
                                h || (h = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)));
                                var v = Math.atan2(f[1] - p[1], f[0] - p[0]),
                                    y = e.h.v;
                                y >= 1 ? y = .99 : y <= -1 && (y = -.99);
                                var b = h * y,
                                    _ = Math.cos(v + e.a.v) * b + p[0],
                                    k = Math.sin(v + e.a.v) * b + p[1];
                                o.setAttribute("fx", _), o.setAttribute("fy", k), l && !e.g._collapsable && (e.of.setAttribute("fx", _), e.of.setAttribute("fy", k))
                            }
                        }

                        function o(t, e, i) {
                            var s = e.style,
                                a = e.d;
                            a && (a._mdf || i) && a.dashStr && (s.pElem.setAttribute("stroke-dasharray", a.dashStr), s.pElem.setAttribute("stroke-dashoffset", a.dashoffset[0])), e.c && (e.c._mdf || i) && s.pElem.setAttribute("stroke", "rgb(" + p(e.c.v[0]) + "," + p(e.c.v[1]) + "," + p(e.c.v[2]) + ")"), (e.o._mdf || i) && s.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (s.pElem.setAttribute("stroke-width", e.w.v), s.msElem && s.msElem.setAttribute("stroke-width", e.w.v))
                        }
                        return {
                            createRenderFunction: i
                        }
                    }();

                    function Ut() {
                        this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
                    }

                    function Zt() {}

                    function Qt(t, e, i) {
                        this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
                    }

                    function $t() {}

                    function te() {}

                    function ee() {}

                    function ie() {}

                    function se(t, e, i) {
                        this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i), this.sourceRect = {
                            top: 0,
                            left: 0,
                            width: this.assetData.w,
                            height: this.assetData.h
                        }
                    }

                    function ae(t, e, i) {
                        this.initElement(t, e, i)
                    }

                    function re(t, e, i) {
                        this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
                        var s = this.globalData.getAssetsPath(this.assetData);
                        this.audio = this.globalData.audioController.createAudio(s), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? $.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        }
                    }

                    function ne(t, e, i) {
                        this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? V(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? $.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        }
                    }

                    function he(t, e, i) {
                        this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i)
                    }

                    function oe(t, e, i) {
                        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
                    }

                    function le(t, e) {
                        this.filterManager = e;
                        var i = R("feColorMatrix");
                        if (i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i), (i = R("feColorMatrix")).setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", "f2"), t.appendChild(i), this.matrixFilter = i, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
                            var s, a = R("feMerge");
                            t.appendChild(a), (s = R("feMergeNode")).setAttribute("in", "SourceGraphic"), a.appendChild(s), (s = R("feMergeNode")).setAttribute("in", "f2"), a.appendChild(s)
                        }
                    }

                    function pe(t, e) {
                        this.filterManager = e;
                        var i = R("feColorMatrix");
                        i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(i), this.matrixFilter = i
                    }

                    function fe(t, e) {
                        t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
                        var i = R("feGaussianBlur");
                        t.appendChild(i), this.feGaussianBlur = i
                    }

                    function de(t, e) {
                        this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
                    }

                    function me(t, e) {
                        this.filterManager = e;
                        var i = R("feColorMatrix");
                        i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i);
                        var s = R("feComponentTransfer");
                        s.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(s), this.matrixFilter = s;
                        var a = R("feFuncR");
                        a.setAttribute("type", "table"), s.appendChild(a), this.feFuncR = a;
                        var r = R("feFuncG");
                        r.setAttribute("type", "table"), s.appendChild(r), this.feFuncG = r;
                        var n = R("feFuncB");
                        n.setAttribute("type", "table"), s.appendChild(n), this.feFuncB = n
                    }

                    function ce(t, e) {
                        this.filterManager = e;
                        var i = this.filterManager.effectElements,
                            s = R("feComponentTransfer");
                        (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", s)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", s)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", s)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", s)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (s.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(s), s = R("feComponentTransfer")), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && (s.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(s), this.feFuncRComposed = this.createFeFunc("feFuncR", s), this.feFuncGComposed = this.createFeFunc("feFuncG", s), this.feFuncBComposed = this.createFeFunc("feFuncB", s))
                    }

                    function ue(t, e) {
                        var i = e.container.globalData.renderConfig.filterSize;
                        t.setAttribute("x", i.x), t.setAttribute("y", i.y), t.setAttribute("width", i.width), t.setAttribute("height", i.height), this.filterManager = e;
                        var s = R("feGaussianBlur");
                        s.setAttribute("in", "SourceAlpha"), s.setAttribute("result", "drop_shadow_1"), s.setAttribute("stdDeviation", "0"), this.feGaussianBlur = s, t.appendChild(s);
                        var a = R("feOffset");
                        a.setAttribute("dx", "25"), a.setAttribute("dy", "0"), a.setAttribute("in", "drop_shadow_1"), a.setAttribute("result", "drop_shadow_2"), this.feOffset = a, t.appendChild(a);
                        var r = R("feFlood");
                        r.setAttribute("flood-color", "#00ff00"), r.setAttribute("flood-opacity", "1"), r.setAttribute("result", "drop_shadow_3"), this.feFlood = r, t.appendChild(r);
                        var n = R("feComposite");
                        n.setAttribute("in", "drop_shadow_3"), n.setAttribute("in2", "drop_shadow_2"), n.setAttribute("operator", "in"), n.setAttribute("result", "drop_shadow_4"), t.appendChild(n);
                        var h, o = R("feMerge");
                        t.appendChild(o), h = R("feMergeNode"), o.appendChild(h), (h = R("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = h, this.feMerge = o, this.originalNodeAdded = !1, o.appendChild(h)
                    }
                    Ut.prototype = {
                        addTransformSequence: function(t) {
                            var e, i = t.length,
                                s = "_";
                            for (e = 0; e < i; e += 1) s += t[e].transform.key + "_";
                            var a = this.sequences[s];
                            return a || (a = {
                                transforms: [].concat(t),
                                finalTransform: new G,
                                _mdf: !1
                            }, this.sequences[s] = a, this.sequenceList.push(a)), a
                        },
                        processSequence: function(t, e) {
                            for (var i, s = 0, a = t.transforms.length, r = e; s < a && !e;) {
                                if (t.transforms[s].transform.mProps._mdf) {
                                    r = !0;
                                    break
                                }
                                s += 1
                            }
                            if (r)
                                for (t.finalTransform.reset(), s = a - 1; s >= 0; s -= 1) i = t.transforms[s].transform.mProps.v.props, t.finalTransform.transform(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15]);
                            t._mdf = r
                        },
                        processSequences: function(t) {
                            var e, i = this.sequenceList.length;
                            for (e = 0; e < i; e += 1) this.processSequence(this.sequenceList[e], t)
                        },
                        getNewKey: function() {
                            return this.transform_key_count += 1, "_" + this.transform_key_count
                        }
                    }, Zt.prototype = {
                        checkMasks: function() {
                            if (!this.data.hasMask) return !1;
                            for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                                if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                                t += 1
                            }
                            return !1
                        },
                        initExpressions: function() {
                            this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                            var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                            this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
                        },
                        setBlendMode: function() {
                            var t = B(this.data.bm);
                            (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                        },
                        initBaseData: function(t, e, i) {
                            this.globalData = e, this.comp = i, this.data = t, this.layerId = F(), this.data.sr || (this.data.sr = 1), this.effectsManager = new ke(this.data, this, this.dynamicProperties)
                        },
                        getType: function() {
                            return this.type
                        },
                        sourceRectAtTime: function() {}
                    }, Qt.prototype.prepareFrame = function(t) {
                        this.prepareProperties(t, !0)
                    }, Qt.prototype.renderFrame = function() {}, Qt.prototype.getBaseElement = function() {
                        return null
                    }, Qt.prototype.destroy = function() {}, Qt.prototype.sourceRectAtTime = function() {}, Qt.prototype.hide = function() {}, X([Zt, zt, Vt, Rt], Qt), $t.prototype = {
                        initRendererElement: function() {
                            this.layerElement = R("g")
                        },
                        createContainerElements: function() {
                            this.matteElement = R("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                            var t, e, i, a = null;
                            if (this.data.td) {
                                if (3 == this.data.td || 1 == this.data.td) {
                                    var r = R("mask");
                                    r.setAttribute("id", this.layerId), r.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), r.appendChild(this.layerElement), a = r, this.globalData.defs.appendChild(r), gt.maskType || 1 != this.data.td || (r.setAttribute("mask-type", "luminance"), t = F(), e = vt.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(vt.createAlphaToLuminanceFilter()), (i = R("g")).appendChild(this.layerElement), a = i, r.appendChild(i), i.setAttribute("filter", "url(" + s + "#" + t + ")"))
                                } else if (2 == this.data.td) {
                                    var n = R("mask");
                                    n.setAttribute("id", this.layerId), n.setAttribute("mask-type", "alpha");
                                    var h = R("g");
                                    n.appendChild(h), t = F(), e = vt.createFilter(t);
                                    var o = R("feComponentTransfer");
                                    o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                                    var l = R("feFuncA");
                                    l.setAttribute("type", "table"), l.setAttribute("tableValues", "1.0 0.0"), o.appendChild(l), this.globalData.defs.appendChild(e);
                                    var p = R("rect");
                                    p.setAttribute("width", this.comp.data.w), p.setAttribute("height", this.comp.data.h), p.setAttribute("x", "0"), p.setAttribute("y", "0"), p.setAttribute("fill", "#ffffff"), p.setAttribute("opacity", "0"), h.setAttribute("filter", "url(" + s + "#" + t + ")"), h.appendChild(p), h.appendChild(this.layerElement), a = h, gt.maskType || (n.setAttribute("mask-type", "luminance"), e.appendChild(vt.createAlphaToLuminanceFilter()), i = R("g"), h.appendChild(p), i.appendChild(this.layerElement), a = i, h.appendChild(i)), this.globalData.defs.appendChild(n)
                                }
                            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), a = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                                var f = R("clipPath"),
                                    d = R("path");
                                d.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                                var m = F();
                                if (f.setAttribute("id", m), f.appendChild(d), this.globalData.defs.appendChild(f), this.checkMasks()) {
                                    var c = R("g");
                                    c.setAttribute("clip-path", "url(" + s + "#" + m + ")"), c.appendChild(this.layerElement), this.transformedElement = c, a ? a.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                                } else this.layerElement.setAttribute("clip-path", "url(" + s + "#" + m + ")")
                            }
                            0 !== this.data.bm && this.setBlendMode()
                        },
                        renderElement: function() {
                            this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                        },
                        destroyBaseElement: function() {
                            this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                        },
                        getBaseElement: function() {
                            return this.data.hd ? null : this.baseElement
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new Lt(this.data, this, this.globalData), this.renderableEffectsManager = new ye(this)
                        },
                        setMatte: function(t) {
                            this.matteElement && this.matteElement.setAttribute("mask", "url(" + s + "#" + t + ")")
                        }
                    }, te.prototype = {
                        addShapeToModifiers: function(t) {
                            var e, i = this.shapeModifiers.length;
                            for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
                        },
                        isShapeInAnimatedModifiers: function(t) {
                            for (var e = 0, i = this.shapeModifiers.length; e < i;)
                                if (this.shapeModifiers[e].isAnimatedWithShape(t)) return !0;
                            return !1
                        },
                        renderModifiers: function() {
                            if (this.shapeModifiers.length) {
                                var t, e = this.shapes.length;
                                for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                                for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
                            }
                        },
                        searchProcessedElement: function(t) {
                            for (var e = this.processedElements, i = 0, s = e.length; i < s;) {
                                if (e[i].elem === t) return e[i].pos;
                                i += 1
                            }
                            return 0
                        },
                        addProcessedElement: function(t, e) {
                            for (var i = this.processedElements, s = i.length; s;)
                                if (i[s -= 1].elem === t) return void(i[s].pos = e);
                            i.push(new Bt(t, e))
                        },
                        prepareFrame: function(t) {
                            this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                        }
                    }, ee.prototype.initElement = function(t, e, i) {
                        this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new At(this, t.t, this.dynamicProperties), this.textAnimator = new bt(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                    }, ee.prototype.prepareFrame = function(t) {
                        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                    }, ee.prototype.createPathShape = function(t, e) {
                        var i, s, a = e.length,
                            r = "";
                        for (i = 0; i < a; i += 1) s = e[i].ks.k, r += mt(s, s.i.length, !0, t);
                        return r
                    }, ee.prototype.updateDocumentData = function(t, e) {
                        this.textProperty.updateDocumentData(t, e)
                    }, ee.prototype.canResizeFont = function(t) {
                        this.textProperty.canResizeFont(t)
                    }, ee.prototype.setMinimumFontSize = function(t) {
                        this.textProperty.setMinimumFontSize(t)
                    }, ee.prototype.applyTextPropertiesToMatrix = function(t, e, i, s, a) {
                        switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                            case 1:
                                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                                break;
                            case 2:
                                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
                        }
                        e.translate(s, a, 0)
                    }, ee.prototype.buildColor = function(t) {
                        return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
                    }, ee.prototype.emptyProp = new kt, ee.prototype.destroy = function() {}, X([Zt, zt, Vt, Rt, Ot], ie), ie.prototype.initElement = function(t, e, i) {
                        this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
                    }, ie.prototype.prepareFrame = function(t) {
                        if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                            if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                            else {
                                var e = this.tm.v;
                                e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                            }
                            var i, s = this.elements.length;
                            for (this.completeLayers || this.checkLayers(this.renderedFrame), i = s - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
                        }
                    }, ie.prototype.renderInnerContent = function() {
                        var t, e = this.layers.length;
                        for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                    }, ie.prototype.setElements = function(t) {
                        this.elements = t
                    }, ie.prototype.getElements = function() {
                        return this.elements
                    }, ie.prototype.destroyElements = function() {
                        var t, e = this.layers.length;
                        for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
                    }, ie.prototype.destroy = function() {
                        this.destroyElements(), this.destroyBaseElement()
                    }, X([Zt, zt, $t, Vt, Rt, Ot], se), se.prototype.createContent = function() {
                        var t = this.globalData.getAssetsPath(this.assetData);
                        this.innerElem = R("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
                    }, se.prototype.sourceRectAtTime = function() {
                        return this.sourceRect
                    }, X([se], ae), ae.prototype.createContent = function() {
                        var t = R("rect");
                        t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
                    }, re.prototype.prepareFrame = function(t) {
                        if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
                        else {
                            var e = this.tm.v;
                            this._currentTime = e
                        }
                    }, X([Nt, Zt, Rt], re), re.prototype.renderFrame = function() {
                        this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
                    }, re.prototype.show = function() {}, re.prototype.hide = function() {
                        this.audio.pause(), this._isPlaying = !1
                    }, re.prototype.pause = function() {
                        this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
                    }, re.prototype.resume = function() {
                        this._canPlay = !0
                    }, re.prototype.setRate = function(t) {
                        this.audio.rate(t)
                    }, re.prototype.volume = function(t) {
                        this.audio.volume(t)
                    }, re.prototype.getBaseElement = function() {
                        return null
                    }, re.prototype.destroy = function() {}, re.prototype.sourceRectAtTime = function() {}, re.prototype.initExpressions = function() {}, X([It, ie, $t], ne), X([Zt, zt, $t, Vt, Rt, Ot, ee], he), he.prototype.createContent = function() {
                        this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = R("text"))
                    }, he.prototype.buildTextContents = function(t) {
                        for (var e = 0, i = t.length, s = [], a = ""; e < i;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (s.push(a), a = "") : a += t[e], e += 1;
                        return s.push(a), s
                    }, he.prototype.buildNewText = function() {
                        var t, e, i = this.textProperty.currentData;
                        this.renderedLetters = V(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
                        var s = this.globalData.fontManager.getFontByName(i.f);
                        if (s.fClass) this.layerElement.setAttribute("class", s.fClass);
                        else {
                            this.layerElement.setAttribute("font-family", s.fFamily);
                            var a = i.fWeight,
                                r = i.fStyle;
                            this.layerElement.setAttribute("font-style", r), this.layerElement.setAttribute("font-weight", a)
                        }
                        this.layerElement.setAttribute("aria-label", i.t);
                        var n, h = i.l || [],
                            o = !!this.globalData.fontManager.chars;
                        e = h.length;
                        var l, p = this.mHelper,
                            f = "",
                            d = this.data.singleShape,
                            m = 0,
                            c = 0,
                            u = !0,
                            g = .001 * i.tr * i.finalSize;
                        if (!d || o || i.sz) {
                            var v, y, b = this.textSpans.length;
                            for (t = 0; t < e; t += 1) o && d && 0 !== t || (n = b > t ? this.textSpans[t] : R(o ? "path" : "text"), b <= t && (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = n, this.layerElement.appendChild(n)), n.style.display = "inherit"), p.reset(), p.scale(i.finalSize / 100, i.finalSize / 100), d && (h[t].n && (m = -g, c += i.yOffset, c += u ? 1 : 0, u = !1), this.applyTextPropertiesToMatrix(i, p, h[t].line, m, c), m += h[t].l || 0, m += g), o ? (l = (v = (y = this.globalData.fontManager.getCharData(i.finalText[t], s.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)) && y.data || {}).shapes ? v.shapes[0].it : [], d ? f += this.createPathShape(p, l) : n.setAttribute("d", this.createPathShape(p, l))) : (d && n.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), n.textContent = h[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                            d && n && n.setAttribute("d", f)
                        } else {
                            var _ = this.textContainer,
                                k = "start";
                            switch (i.j) {
                                case 1:
                                    k = "end";
                                    break;
                                case 2:
                                    k = "middle";
                                    break;
                                default:
                                    k = "start"
                            }
                            _.setAttribute("text-anchor", k), _.setAttribute("letter-spacing", g);
                            var A = this.buildTextContents(i.finalText);
                            for (e = A.length, c = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)(n = this.textSpans[t] || R("tspan")).textContent = A[t], n.setAttribute("x", 0), n.setAttribute("y", c), n.style.display = "inherit", _.appendChild(n), this.textSpans[t] = n, c += i.finalLineHeight;
                            this.layerElement.appendChild(_)
                        }
                        for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
                        this._sizeChanged = !0
                    }, he.prototype.sourceRectAtTime = function() {
                        if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                            this._sizeChanged = !1;
                            var t = this.layerElement.getBBox();
                            this.bbox = {
                                top: t.y,
                                left: t.x,
                                width: t.width,
                                height: t.height
                            }
                        }
                        return this.bbox
                    }, he.prototype.renderInnerContent = function() {
                        if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                            var t, e;
                            this._sizeChanged = !0;
                            var i, s, a = this.textAnimator.renderedLetters,
                                r = this.textProperty.currentData.l;
                            for (e = r.length, t = 0; t < e; t += 1) r[t].n || (i = a[t], s = this.textSpans[t], i._mdf.m && s.setAttribute("transform", i.m), i._mdf.o && s.setAttribute("opacity", i.o), i._mdf.sw && s.setAttribute("stroke-width", i.sw), i._mdf.sc && s.setAttribute("stroke", i.sc), i._mdf.fc && s.setAttribute("fill", i.fc))
                        }
                    }, X([Zt, zt, $t, te, Vt, Rt, Ot], oe), oe.prototype.initSecondaryElement = function() {}, oe.prototype.identityMatrix = new G, oe.prototype.buildExpressionInterface = function() {}, oe.prototype.createContent = function() {
                        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                    }, oe.prototype.filterUniqueShapes = function() {
                        var t, e, i, s, a = this.shapes.length,
                            r = this.stylesList.length,
                            n = [],
                            h = !1;
                        for (i = 0; i < r; i += 1) {
                            for (s = this.stylesList[i], h = !1, n.length = 0, t = 0; t < a; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(s) && (n.push(e), h = e._isAnimated || h);
                            n.length > 1 && h && this.setShapesAsAnimated(n)
                        }
                    }, oe.prototype.setShapesAsAnimated = function(t) {
                        var e, i = t.length;
                        for (e = 0; e < i; e += 1) t[e].setAsAnimated()
                    }, oe.prototype.createStyleElement = function(t, e) {
                        var i, a = new qt(t, e),
                            r = a.pElem;
                        return "st" === t.ty ? i = new Wt(this, t, a) : "fl" === t.ty ? i = new Xt(this, t, a) : "gf" !== t.ty && "gs" !== t.ty || (i = new("gf" === t.ty ? Ht : Yt)(this, t, a), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), r.setAttribute("mask", "url(" + s + "#" + i.maskId + ")"))), "st" !== t.ty && "gs" !== t.ty || (r.setAttribute("stroke-linecap", q[t.lc || 2]), r.setAttribute("stroke-linejoin", j[t.lj || 2]), r.setAttribute("fill-opacity", "0"), 1 === t.lj && r.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && r.setAttribute("fill-rule", "evenodd"), t.ln && r.setAttribute("id", t.ln), t.cl && r.setAttribute("class", t.cl), t.bm && (r.style["mix-blend-mode"] = B(t.bm)), this.stylesList.push(a), this.addToAnimatedContents(t, i), i
                    }, oe.prototype.createGroupElement = function(t) {
                        var e = new Jt;
                        return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = B(t.bm)), e
                    }, oe.prototype.createTransformElement = function(t, e) {
                        var i = tt.getTransformProperty(this, t, this),
                            s = new Gt(i, i.o, e);
                        return this.addToAnimatedContents(t, s), s
                    }, oe.prototype.createShapeElement = function(t, e, i) {
                        var s = 4;
                        "rc" === t.ty ? s = 5 : "el" === t.ty ? s = 6 : "sr" === t.ty && (s = 7);
                        var a = new jt(e, i, it.getShapeProp(this, t, s, this));
                        return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a
                    }, oe.prototype.addToAnimatedContents = function(t, e) {
                        for (var i = 0, s = this.animatedContents.length; i < s;) {
                            if (this.animatedContents[i].element === e) return;
                            i += 1
                        }
                        this.animatedContents.push({
                            fn: Kt.createRenderFunction(t),
                            element: e,
                            data: t
                        })
                    }, oe.prototype.setElementStyles = function(t) {
                        var e, i = t.styles,
                            s = this.stylesList.length;
                        for (e = 0; e < s; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
                    }, oe.prototype.reloadShapes = function() {
                        var t;
                        this._isFirstFrame = !0;
                        var e = this.itemsData.length;
                        for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                        this.renderModifiers()
                    }, oe.prototype.searchShapes = function(t, e, i, s, a, r, n) {
                        var h, o, l, p, f, d, m = [].concat(r),
                            c = t.length - 1,
                            u = [],
                            g = [];
                        for (h = c; h >= 0; h -= 1) {
                            if ((d = this.searchProcessedElement(t[h])) ? e[h] = i[d - 1] : t[h]._render = n, "fl" === t[h].ty || "st" === t[h].ty || "gf" === t[h].ty || "gs" === t[h].ty) d ? e[h].style.closed = !1 : e[h] = this.createStyleElement(t[h], a), t[h]._render && s.appendChild(e[h].style.pElem), u.push(e[h].style);
                            else if ("gr" === t[h].ty) {
                                if (d)
                                    for (l = e[h].it.length, o = 0; o < l; o += 1) e[h].prevViewData[o] = e[h].it[o];
                                else e[h] = this.createGroupElement(t[h]);
                                this.searchShapes(t[h].it, e[h].it, e[h].prevViewData, e[h].gr, a + 1, m, n), t[h]._render && s.appendChild(e[h].gr)
                            } else "tr" === t[h].ty ? (d || (e[h] = this.createTransformElement(t[h], s)), p = e[h].transform, m.push(p)) : "sh" === t[h].ty || "rc" === t[h].ty || "el" === t[h].ty || "sr" === t[h].ty ? (d || (e[h] = this.createShapeElement(t[h], m, a)), this.setElementStyles(e[h])) : "tm" === t[h].ty || "rd" === t[h].ty || "ms" === t[h].ty || "pb" === t[h].ty ? (d ? (f = e[h]).closed = !1 : ((f = st.getModifier(t[h].ty)).init(this, t[h]), e[h] = f, this.shapeModifiers.push(f)), g.push(f)) : "rp" === t[h].ty && (d ? (f = e[h]).closed = !0 : (f = st.getModifier(t[h].ty), e[h] = f, f.init(this, t, h, e), this.shapeModifiers.push(f), n = !1), g.push(f));
                            this.addProcessedElement(t[h], h + 1)
                        }
                        for (c = u.length, h = 0; h < c; h += 1) u[h].closed = !0;
                        for (c = g.length, h = 0; h < c; h += 1) g[h].closed = !0
                    }, oe.prototype.renderInnerContent = function() {
                        var t;
                        this.renderModifiers();
                        var e = this.stylesList.length;
                        for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                        for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
                    }, oe.prototype.renderShape = function() {
                        var t, e, i = this.animatedContents.length;
                        for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
                    }, oe.prototype.destroy = function() {
                        this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                    }, le.prototype.renderFrame = function(t) {
                        if (t || this.filterManager._mdf) {
                            var e = this.filterManager.effectElements[0].p.v,
                                i = this.filterManager.effectElements[1].p.v,
                                s = this.filterManager.effectElements[2].p.v / 100;
                            this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + s + " 0")
                        }
                    }, pe.prototype.renderFrame = function(t) {
                        if (t || this.filterManager._mdf) {
                            var e = this.filterManager.effectElements[2].p.v,
                                i = this.filterManager.effectElements[6].p.v;
                            this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
                        }
                    }, fe.prototype.renderFrame = function(t) {
                        if (t || this.filterManager._mdf) {
                            var e = .3,
                                i = this.filterManager.effectElements[0].p.v * e,
                                s = this.filterManager.effectElements[1].p.v,
                                a = 3 == s ? 0 : i,
                                r = 2 == s ? 0 : i;
                            this.feGaussianBlur.setAttribute("stdDeviation", a + " " + r);
                            var n = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                            this.feGaussianBlur.setAttribute("edgeMode", n)
                        }
                    }, de.prototype.initialize = function() {
                        var t, e, i, a, r = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                        for (1 === this.filterManager.effectElements[1].p.v ? (a = this.elem.maskManager.masksProperties.length, i = 0) : a = 1 + (i = this.filterManager.effectElements[0].p.v - 1), (e = R("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < a; i += 1) t = R("path"), e.appendChild(t), this.paths.push({
                            p: t,
                            m: i
                        });
                        if (3 === this.filterManager.effectElements[10].p.v) {
                            var n = R("mask"),
                                h = F();
                            n.setAttribute("id", h), n.setAttribute("mask-type", "alpha"), n.appendChild(e), this.elem.globalData.defs.appendChild(n);
                            var o = R("g");
                            for (o.setAttribute("mask", "url(" + s + "#" + h + ")"); r[0];) o.appendChild(r[0]);
                            this.elem.layerElement.appendChild(o), this.masker = n, e.setAttribute("stroke", "#fff")
                        } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                            if (2 === this.filterManager.effectElements[10].p.v)
                                for (r = this.elem.layerElement.children || this.elem.layerElement.childNodes; r.length;) this.elem.layerElement.removeChild(r[0]);
                            this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
                        }
                        this.initialized = !0, this.pathMasker = e
                    }, de.prototype.renderFrame = function(t) {
                        var e;
                        this.initialized || this.initialize();
                        var i, s, a = this.paths.length;
                        for (e = 0; e < a; e += 1)
                            if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m], s = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && s.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                                var r;
                                if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                                    var n = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                        h = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                        o = s.getTotalLength();
                                    r = "0 0 0 " + o * n + " ";
                                    var l, f = o * (h - n),
                                        d = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                                        m = Math.floor(f / d);
                                    for (l = 0; l < m; l += 1) r += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                                    r += "0 " + 10 * o + " 0 0"
                                } else r = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                                s.setAttribute("stroke-dasharray", r)
                            }
                        if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                            var c = this.filterManager.effectElements[3].p.v;
                            this.pathMasker.setAttribute("stroke", "rgb(" + p(255 * c[0]) + "," + p(255 * c[1]) + "," + p(255 * c[2]) + ")")
                        }
                    }, me.prototype.renderFrame = function(t) {
                        if (t || this.filterManager._mdf) {
                            var e = this.filterManager.effectElements[0].p.v,
                                i = this.filterManager.effectElements[1].p.v,
                                s = this.filterManager.effectElements[2].p.v,
                                a = s[0] + " " + i[0] + " " + e[0],
                                r = s[1] + " " + i[1] + " " + e[1],
                                n = s[2] + " " + i[2] + " " + e[2];
                            this.feFuncR.setAttribute("tableValues", a), this.feFuncG.setAttribute("tableValues", r), this.feFuncB.setAttribute("tableValues", n)
                        }
                    }, ce.prototype.createFeFunc = function(t, e) {
                        var i = R(t);
                        return i.setAttribute("type", "table"), e.appendChild(i), i
                    }, ce.prototype.getTableValue = function(t, e, i, s, a) {
                        for (var r, n, h = 0, o = 256, l = Math.min(t, e), p = Math.max(t, e), f = Array.call(null, {
                                length: o
                            }), d = 0, m = a - s, c = e - t; h <= 256;) n = (r = h / 256) <= l ? c < 0 ? a : s : r >= p ? c < 0 ? s : a : s + m * Math.pow((r - t) / c, 1 / i), f[d] = n, d += 1, h += 256 / (o - 1);
                        return f.join(" ")
                    }, ce.prototype.renderFrame = function(t) {
                        if (t || this.filterManager._mdf) {
                            var e, i = this.filterManager.effectElements;
                            this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e))
                        }
                    }, ue.prototype.renderFrame = function(t) {
                        if (t || this.filterManager._mdf) {
                            if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                                var e = this.filterManager.effectElements[0].p.v;
                                this.feFlood.setAttribute("flood-color", T(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                            }
                            if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                                var i = this.filterManager.effectElements[3].p.v,
                                    s = (this.filterManager.effectElements[2].p.v - 90) * u,
                                    a = i * Math.cos(s),
                                    r = i * Math.sin(s);
                                this.feOffset.setAttribute("dx", a), this.feOffset.setAttribute("dy", r)
                            }
                        }
                    };
                    var ge = [];

                    function ve(t, e, i) {
                        this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = i, i.matteElement = R("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement
                    }

                    function ye() {}
                    ve.prototype.findSymbol = function(t) {
                        for (var e = 0, i = ge.length; e < i;) {
                            if (ge[e] === t) return ge[e];
                            e += 1
                        }
                        return null
                    }, ve.prototype.replaceInParent = function(t, e) {
                        var i = t.layerElement.parentNode;
                        if (i) {
                            for (var s, a = i.children, r = 0, n = a.length; r < n && a[r] !== t.layerElement;) r += 1;
                            r <= n - 2 && (s = a[r + 1]);
                            var h = R("use");
                            h.setAttribute("href", "#" + e), s ? i.insertBefore(h, s) : i.appendChild(h)
                        }
                    }, ve.prototype.setElementAsMask = function(t, e) {
                        if (!this.findSymbol(e)) {
                            var i = F(),
                                s = R("mask");
                            s.setAttribute("id", e.layerId), s.setAttribute("mask-type", "alpha"), ge.push(e);
                            var a = t.globalData.defs;
                            a.appendChild(s);
                            var r = R("symbol");
                            r.setAttribute("id", i), this.replaceInParent(e, i), r.appendChild(e.layerElement), a.appendChild(r);
                            var n = R("use");
                            n.setAttribute("href", "#" + i), s.appendChild(n), e.data.hd = !1, e.show()
                        }
                        t.setMatte(e.layerId)
                    }, ve.prototype.initialize = function() {
                        for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, s = e.length; i < s;) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
                        this.initialized = !0
                    }, ve.prototype.renderFrame = function() {
                        this.initialized || this.initialize()
                    };
                    var be = function() {
                            var e = {},
                                i = [],
                                s = 0,
                                a = 0,
                                r = 0,
                                n = !0,
                                h = !1;

                            function o(t) {
                                for (var e = 0, s = t.target; e < a;) i[e].animation === s && (i.splice(e, 1), e -= 1, a -= 1, s.isPaused || d()), e += 1
                            }

                            function l(t, e) {
                                if (!t) return null;
                                for (var s = 0; s < a;) {
                                    if (i[s].elem === t && null !== i[s].elem) return i[s].animation;
                                    s += 1
                                }
                                var r = new _e;
                                return m(r, t), r.setData(t, e), r
                            }

                            function p() {
                                var t, e = i.length,
                                    s = [];
                                for (t = 0; t < e; t += 1) s.push(i[t].animation);
                                return s
                            }

                            function f() {
                                r += 1, M()
                            }

                            function d() {
                                r -= 1
                            }

                            function m(t, e) {
                                t.addEventListener("destroy", o), t.addEventListener("_active", f), t.addEventListener("_idle", d), i.push({
                                    elem: e,
                                    animation: t
                                }), a += 1
                            }

                            function c(t) {
                                var e = new _e;
                                return m(e, null), e.setParams(t), e
                            }

                            function u(t, e) {
                                var s;
                                for (s = 0; s < a; s += 1) i[s].animation.setSpeed(t, e)
                            }

                            function g(t, e) {
                                var s;
                                for (s = 0; s < a; s += 1) i[s].animation.setDirection(t, e)
                            }

                            function v(t) {
                                var e;
                                for (e = 0; e < a; e += 1) i[e].animation.play(t)
                            }

                            function y(e) {
                                var o, l = e - s;
                                for (o = 0; o < a; o += 1) i[o].animation.advanceTime(l);
                                s = e, r && !h ? t.requestAnimationFrame(y) : n = !0
                            }

                            function b(e) {
                                s = e, t.requestAnimationFrame(y)
                            }

                            function _(t) {
                                var e;
                                for (e = 0; e < a; e += 1) i[e].animation.pause(t)
                            }

                            function k(t, e, s) {
                                var r;
                                for (r = 0; r < a; r += 1) i[r].animation.goToAndStop(t, e, s)
                            }

                            function A(t) {
                                var e;
                                for (e = 0; e < a; e += 1) i[e].animation.stop(t)
                            }

                            function P(t) {
                                var e;
                                for (e = 0; e < a; e += 1) i[e].animation.togglePause(t)
                            }

                            function C(t) {
                                var e;
                                for (e = a - 1; e >= 0; e -= 1) i[e].animation.destroy(t)
                            }

                            function x(t, e, i) {
                                var s, a = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                    r = a.length;
                                for (s = 0; s < r; s += 1) i && a[s].setAttribute("data-bm-type", i), l(a[s], t);
                                if (e && 0 === r) {
                                    i || (i = "svg");
                                    var n = document.getElementsByTagName("body")[0];
                                    n.innerText = "";
                                    var h = z("div");
                                    h.style.width = "100%", h.style.height = "100%", h.setAttribute("data-bm-type", i), n.appendChild(h), l(h, t)
                                }
                            }

                            function F() {
                                var t;
                                for (t = 0; t < a; t += 1) i[t].animation.resize()
                            }

                            function M() {
                                !h && r && n && (t.requestAnimationFrame(b), n = !1)
                            }

                            function D() {
                                h = !0
                            }

                            function S() {
                                h = !1, M()
                            }

                            function w(t, e) {
                                var s;
                                for (s = 0; s < a; s += 1) i[s].animation.setVolume(t, e)
                            }

                            function E(t) {
                                var e;
                                for (e = 0; e < a; e += 1) i[e].animation.mute(t)
                            }

                            function T(t) {
                                var e;
                                for (e = 0; e < a; e += 1) i[e].animation.unmute(t)
                            }
                            return e.registerAnimation = l, e.loadAnimation = c, e.setSpeed = u, e.setDirection = g, e.play = v, e.pause = _, e.stop = A, e.togglePause = P, e.searchAnimations = x, e.resize = F, e.goToAndStop = k, e.destroy = C, e.freeze = D, e.unfreeze = S, e.setVolume = w, e.mute = E, e.unmute = T, e.getRegisteredAnimations = p, e
                        }(),
                        _e = function() {
                            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = F(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = r, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = m(), this.imagePreloader = new ut, this.audioController = ct(), this.markers = []
                        };

                    function ke() {
                        this.effectElements = []
                    }
                    X([I], _e), _e.prototype.setParams = function(t) {
                        (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                        var e = "svg";
                        switch (t.animType ? e = t.animType : t.renderer && (e = t.renderer), e) {
                            case "canvas":
                                this.renderer = new CanvasRenderer(this, t.rendererSettings);
                                break;
                            case "svg":
                                this.renderer = new It(this, t.rendererSettings);
                                break;
                            default:
                                this.renderer = new HybridRenderer(this, t.rendererSettings)
                        }
                        this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), yt.load(t.path, this.configAnimation.bind(this), function() {
                            this.trigger("data_failed")
                        }.bind(this)))
                    }, _e.prototype.setData = function(t, e) {
                        e && "object" != typeof e && (e = JSON.parse(e));
                        var i = {
                                wrapper: t,
                                animationData: e
                            },
                            s = t.attributes;
                        i.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "", i.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : "canvas";
                        var a = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
                        "false" === a ? i.loop = !1 : "true" === a ? i.loop = !0 : "" !== a && (i.loop = parseInt(a, 10));
                        var r = s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : !s.getNamedItem("bm-autoplay") || s.getNamedItem("bm-autoplay").value;
                        i.autoplay = "false" !== r, i.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "", "false" === (s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), this.setParams(i)
                    }, _e.prototype.includeLayers = function(t) {
                        t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                        var i, s, a = this.animationData.layers,
                            r = a.length,
                            n = t.layers,
                            h = n.length;
                        for (s = 0; s < h; s += 1)
                            for (i = 0; i < r;) {
                                if (a[i].id === n[s].id) {
                                    a[i] = n[s];
                                    break
                                }
                                i += 1
                            }
                        if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                            for (r = t.assets.length, i = 0; i < r; i += 1) this.animationData.assets.push(t.assets[i]);
                        this.animationData.__complete = !1, U.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), e && e.initExpressions(this), this.loadNextSegment()
                    }, _e.prototype.loadNextSegment = function() {
                        var t = this.animationData.segments;
                        if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                        var e = t.shift();
                        this.timeCompleted = e.time * this.frameRate;
                        var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
                        this.segmentPos += 1, yt.load(i, this.includeLayers.bind(this), function() {
                            this.trigger("data_failed")
                        }.bind(this))
                    }, _e.prototype.loadSegments = function() {
                        this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                    }, _e.prototype.imagesLoaded = function() {
                        this.trigger("loaded_images"), this.checkLoaded()
                    }, _e.prototype.preloadImages = function() {
                        this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                    }, _e.prototype.configAnimation = function(t) {
                        if (this.renderer) try {
                            this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = Et(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                        } catch (e) {
                            this.triggerConfigError(e)
                        }
                    }, _e.prototype.waitForFontsLoaded = function() {
                        this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                    }, _e.prototype.checkLoaded = function() {
                        !this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages() && (this.isLoaded = !0, U.completeData(this.animationData, this.renderer.globalData.fontManager), e && e.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                            this.trigger("DOMLoaded")
                        }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
                    }, _e.prototype.resize = function() {
                        this.renderer.updateContainerSize()
                    }, _e.prototype.setSubframe = function(t) {
                        this.isSubframeEnabled = !!t
                    }, _e.prototype.gotoFrame = function() {
                        this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
                    }, _e.prototype.renderFrame = function() {
                        if (!1 !== this.isLoaded && this.renderer) try {
                            this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                        } catch (t) {
                            this.triggerRenderFrameError(t)
                        }
                    }, _e.prototype.play = function(t) {
                        t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
                    }, _e.prototype.pause = function(t) {
                        t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"), this.audioController.pause())
                    }, _e.prototype.togglePause = function(t) {
                        t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
                    }, _e.prototype.stop = function(t) {
                        t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                    }, _e.prototype.getMarkerData = function(t) {
                        for (var e, i = 0; i < this.markers.length; i += 1)
                            if ((e = this.markers[i]).payload && e.payload.name === t) return e;
                        return null
                    }, _e.prototype.goToAndStop = function(t, e, i) {
                        if (!i || this.name === i) {
                            var s = Number(t);
                            if (isNaN(s)) {
                                var a = this.getMarkerData(t);
                                a && this.goToAndStop(a.time, !0)
                            } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                            this.pause()
                        }
                    }, _e.prototype.goToAndPlay = function(t, e, i) {
                        if (!i || this.name === i) {
                            var s = Number(t);
                            if (isNaN(s)) {
                                var a = this.getMarkerData(t);
                                a && (a.duration ? this.playSegments([a.time, a.time + a.duration], !0) : this.goToAndStop(a.time, !0))
                            } else this.goToAndStop(s, e, i);
                            this.play()
                        }
                    }, _e.prototype.advanceTime = function(t) {
                        if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                            var e = this.currentRawFrame + t * this.frameModifier,
                                i = !1;
                            e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                        }
                    }, _e.prototype.adjustSegment = function(t, e) {
                        this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
                    }, _e.prototype.setSegment = function(t, e) {
                        var i = -1;
                        this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, !0)
                    }, _e.prototype.playSegments = function(t, e) {
                        if (e && (this.segments.length = 0), "object" == typeof t[0]) {
                            var i, s = t.length;
                            for (i = 0; i < s; i += 1) this.segments.push(t[i])
                        } else this.segments.push(t);
                        this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                    }, _e.prototype.resetSegments = function(t) {
                        this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
                    }, _e.prototype.checkSegments = function(t) {
                        return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
                    }, _e.prototype.destroy = function(t) {
                        t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
                    }, _e.prototype.setCurrentRawFrameValue = function(t) {
                        this.currentRawFrame = t, this.gotoFrame()
                    }, _e.prototype.setSpeed = function(t) {
                        this.playSpeed = t, this.updaFrameModifier()
                    }, _e.prototype.setDirection = function(t) {
                        this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
                    }, _e.prototype.setVolume = function(t, e) {
                        e && this.name !== e || this.audioController.setVolume(t)
                    }, _e.prototype.getVolume = function() {
                        return this.audioController.getVolume()
                    }, _e.prototype.mute = function(t) {
                        t && this.name !== t || this.audioController.mute()
                    }, _e.prototype.unmute = function(t) {
                        t && this.name !== t || this.audioController.unmute()
                    }, _e.prototype.updaFrameModifier = function() {
                        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
                    }, _e.prototype.getPath = function() {
                        return this.path
                    }, _e.prototype.getAssetsPath = function(t) {
                        var e = "";
                        if (t.e) e = t.p;
                        else if (this.assetsPath) {
                            var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
                        } else e = this.path, e += t.u ? t.u : "", e += t.p;
                        return e
                    }, _e.prototype.getAssetData = function(t) {
                        for (var e = 0, i = this.assets.length; e < i;) {
                            if (t === this.assets[e].id) return this.assets[e];
                            e += 1
                        }
                        return null
                    }, _e.prototype.hide = function() {
                        this.renderer.hide()
                    }, _e.prototype.show = function() {
                        this.renderer.show()
                    }, _e.prototype.getDuration = function(t) {
                        return t ? this.totalFrames : this.totalFrames / this.frameRate
                    }, _e.prototype.trigger = function(t) {
                        if (this._cbs && this._cbs[t]) switch (t) {
                            case "enterFrame":
                                this.triggerEvent(t, new y(t, this.currentFrame, this.totalFrames, this.frameModifier));
                                break;
                            case "loopComplete":
                                this.triggerEvent(t, new _(t, this.loop, this.playCount, this.frameMult));
                                break;
                            case "complete":
                                this.triggerEvent(t, new b(t, this.frameMult));
                                break;
                            case "segmentStart":
                                this.triggerEvent(t, new k(t, this.firstFrame, this.totalFrames));
                                break;
                            case "destroy":
                                this.triggerEvent(t, new A(t, this));
                                break;
                            default:
                                this.triggerEvent(t)
                        }
                        "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new y(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new _(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new b(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new k(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new A(t, this))
                    }, _e.prototype.triggerRenderFrameError = function(t) {
                        var e = new P(t, this.currentFrame);
                        this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                    }, _e.prototype.triggerConfigError = function(t) {
                        var e = new C(t, this.currentFrame);
                        this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                    };
                    var Ae = {};

                    function Pe(t) {
                        s = t
                    }

                    function Ce() {
                        !0 === Ve ? be.searchAnimations(Re, Ve, ze) : be.searchAnimations()
                    }

                    function xe(t) {
                        r = t
                    }

                    function Fe(t) {
                        n = t
                    }

                    function Me(t) {
                        return !0 === Ve && (t.animationData = JSON.parse(Re)), be.loadAnimation(t)
                    }

                    function De(t) {
                        if ("string" == typeof t) switch (t) {
                            case "high":
                                c = 200;
                                break;
                            default:
                            case "medium":
                                c = 50;
                                break;
                            case "low":
                                c = 10
                        } else !isNaN(t) && t > 1 && (c = t);
                        v(!(c >= 50))
                    }

                    function Se() {
                        return "undefined" != typeof navigator
                    }

                    function we(t, i) {
                        "expressions" === t && (e = i)
                    }

                    function Ee(t) {
                        switch (t) {
                            case "propertyFactory":
                                return $;
                            case "shapePropertyFactory":
                                return it;
                            case "matrix":
                                return G;
                            default:
                                return null
                        }
                    }

                    function Te() {
                        "complete" === document.readyState && (clearInterval(Be), Ce())
                    }

                    function Ie(t) {
                        for (var e = Le.split("&"), i = 0; i < e.length; i += 1) {
                            var s = e[i].split("=");
                            if (decodeURIComponent(s[0]) == t) return decodeURIComponent(s[1])
                        }
                        return null
                    }
                    Ae.play = be.play, Ae.pause = be.pause, Ae.setLocationHref = Pe, Ae.togglePause = be.togglePause, Ae.setSpeed = be.setSpeed, Ae.setDirection = be.setDirection, Ae.stop = be.stop, Ae.searchAnimations = Ce, Ae.registerAnimation = be.registerAnimation, Ae.loadAnimation = Me, Ae.setSubframeRendering = xe, Ae.resize = be.resize, Ae.goToAndStop = be.goToAndStop, Ae.destroy = be.destroy, Ae.setQuality = De, Ae.inBrowser = Se, Ae.installPlugin = we, Ae.freeze = be.freeze, Ae.unfreeze = be.unfreeze, Ae.setVolume = be.setVolume, Ae.mute = be.mute, Ae.unmute = be.unmute, Ae.getRegisteredAnimations = be.getRegisteredAnimations, Ae.setIDPrefix = Fe, Ae.__getFactory = Ee, Ae.version = "5.7.14";
                    var Le, Ve = "__[STANDALONE]__",
                        Re = "__[ANIMATIONDATA]__",
                        ze = "";
                    if (Ve) {
                        var Ne = document.getElementsByTagName("script"),
                            Oe = Ne[Ne.length - 1] || {
                                src: ""
                            };
                        Le = Oe.src.replace(/^[^\?]+\??/, ""), ze = Ie("renderer")
                    }
                    var Be = setInterval(Te, 100);
                    return Ae
                }(a)
            }.call(e, i, e, t)) || (t.exports = s))
        }
    }
]);
//# sourceMappingURL=sourcemaps/bc102a5ee7d0bd55.vendor.js.map