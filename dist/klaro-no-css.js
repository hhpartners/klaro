!(function (e, t) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define([], t)
        : 'object' == typeof exports
        ? (exports.klaro = t())
        : (e.klaro = t());
})(window, function () {
    return (function (e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
                n.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function (e) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: 'Module',
                    }),
                    Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule)
                    return e;
                var r = Object.create(null);
                if (
                    (n.r(r),
                    Object.defineProperty(r, 'default', {
                        enumerable: !0,
                        value: e,
                    }),
                    2 & t && 'string' != typeof e)
                )
                    for (var o in e)
                        n.d(
                            r,
                            o,
                            function (t) {
                                return e[t];
                            }.bind(null, o)
                        );
                return r;
            }),
            (n.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return n.d(t, 'a', t), t;
            }),
            (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ''),
            n((n.s = 168))
        );
    })([
        function (e, t, n) {
            var r = n(3),
                o = n(24).f,
                i = n(16),
                a = n(21),
                c = n(59),
                s = n(85),
                u = n(63);
            e.exports = function (e, t) {
                var n,
                    l,
                    p,
                    f,
                    d,
                    v = e.target,
                    y = e.global,
                    h = e.stat;
                if ((n = y ? r : h ? r[v] || c(v, {}) : (r[v] || {}).prototype))
                    for (l in t) {
                        if (
                            ((f = t[l]),
                            (p = e.noTargetGet
                                ? (d = o(n, l)) && d.value
                                : n[l]),
                            !u(y ? l : v + (h ? '.' : '#') + l, e.forced) &&
                                void 0 !== p)
                        ) {
                            if (typeof f == typeof p) continue;
                            s(f, p);
                        }
                        (e.sham || (p && p.sham)) && i(f, 'sham', !0),
                            a(n, l, f, e);
                    }
            };
        },
        function (e, t) {
            e.exports = function (e) {
                try {
                    return !!e();
                } catch (e) {
                    return !0;
                }
            };
        },
        function (e, t, n) {
            var r = n(3),
                o = n(60),
                i = n(7),
                a = n(44),
                c = n(64),
                s = n(92),
                u = o('wks'),
                l = r.Symbol,
                p = s ? l : (l && l.withoutSetter) || a;
            e.exports = function (e) {
                return (
                    i(u, e) ||
                        (c && i(l, e)
                            ? (u[e] = l[e])
                            : (u[e] = p('Symbol.' + e))),
                    u[e]
                );
            };
        },
        function (e, t, n) {
            (function (t) {
                var n = function (e) {
                    return e && e.Math == Math && e;
                };
                e.exports =
                    n('object' == typeof globalThis && globalThis) ||
                    n('object' == typeof window && window) ||
                    n('object' == typeof self && self) ||
                    n('object' == typeof t && t) ||
                    Function('return this')();
            }.call(this, n(139)));
        },
        function (e, t) {
            e.exports = function (e) {
                return 'object' == typeof e
                    ? null !== e
                    : 'function' == typeof e;
            };
        },
        function (e, t, n) {
            var r = n(1);
            e.exports = !r(function () {
                return (
                    7 !=
                    Object.defineProperty({}, 1, {
                        get: function () {
                            return 7;
                        },
                    })[1]
                );
            });
        },
        function (e, t, n) {
            var r = n(4);
            e.exports = function (e) {
                if (!r(e)) throw TypeError(String(e) + ' is not an object');
                return e;
            };
        },
        function (e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function (e, t) {
                return n.call(e, t);
            };
        },
        function (e, t, n) {
            var r = n(5),
                o = n(81),
                i = n(6),
                a = n(42),
                c = Object.defineProperty;
            t.f = r
                ? c
                : function (e, t, n) {
                      if ((i(e), (t = a(t, !0)), i(n), o))
                          try {
                              return c(e, t, n);
                          } catch (e) {}
                      if ('get' in n || 'set' in n)
                          throw TypeError('Accessors not supported');
                      return 'value' in n && (e[t] = n.value), e;
                  };
        },
        function (e, t, n) {
            'use strict';
            var r = n(15),
                o = n(95),
                i = n(36),
                a = n(28),
                c = n(65),
                s = a.set,
                u = a.getterFor('Array Iterator');
            (e.exports = c(
                Array,
                'Array',
                function (e, t) {
                    s(this, {
                        type: 'Array Iterator',
                        target: r(e),
                        index: 0,
                        kind: t,
                    });
                },
                function () {
                    var e = u(this),
                        t = e.target,
                        n = e.kind,
                        r = e.index++;
                    return !t || r >= t.length
                        ? ((e.target = void 0), { value: void 0, done: !0 })
                        : 'keys' == n
                        ? { value: r, done: !1 }
                        : 'values' == n
                        ? { value: t[r], done: !1 }
                        : { value: [r, t[r]], done: !1 };
                },
                'values'
            )),
                (i.Arguments = i.Array),
                o('keys'),
                o('values'),
                o('entries');
        },
        function (e, t, n) {
            var r = n(69),
                o = n(21),
                i = n(147);
            r || o(Object.prototype, 'toString', i, { unsafe: !0 });
        },
        function (e, t, n) {
            'use strict';
            var r = n(110).charAt,
                o = n(28),
                i = n(65),
                a = o.set,
                c = o.getterFor('String Iterator');
            i(
                String,
                'String',
                function (e) {
                    a(this, {
                        type: 'String Iterator',
                        string: String(e),
                        index: 0,
                    });
                },
                function () {
                    var e,
                        t = c(this),
                        n = t.string,
                        o = t.index;
                    return o >= n.length
                        ? { value: void 0, done: !0 }
                        : ((e = r(n, o)),
                          (t.index += e.length),
                          { value: e, done: !1 });
                }
            );
        },
        function (e, t, n) {
            var r = n(3),
                o = n(111),
                i = n(9),
                a = n(16),
                c = n(2),
                s = c('iterator'),
                u = c('toStringTag'),
                l = i.values;
            for (var p in o) {
                var f = r[p],
                    d = f && f.prototype;
                if (d) {
                    if (d[s] !== l)
                        try {
                            a(d, s, l);
                        } catch (e) {
                            d[s] = l;
                        }
                    if ((d[u] || a(d, u, p), o[p]))
                        for (var v in i)
                            if (d[v] !== i[v])
                                try {
                                    a(d, v, i[v]);
                                } catch (e) {
                                    d[v] = i[v];
                                }
                }
            }
        },
        function (e, t, n) {
            var r = n(46),
                o = Math.min;
            e.exports = function (e) {
                return e > 0 ? o(r(e), 9007199254740991) : 0;
            };
        },
        function (e, t, n) {
            'use strict';
            var r = n(21),
                o = n(6),
                i = n(1),
                a = n(70),
                c = RegExp.prototype,
                s = c.toString,
                u = i(function () {
                    return '/a/b' != s.call({ source: 'a', flags: 'b' });
                }),
                l = 'toString' != s.name;
            (u || l) &&
                r(
                    RegExp.prototype,
                    'toString',
                    function () {
                        var e = o(this),
                            t = String(e.source),
                            n = e.flags;
                        return (
                            '/' +
                            t +
                            '/' +
                            String(
                                void 0 === n &&
                                    e instanceof RegExp &&
                                    !('flags' in c)
                                    ? a.call(e)
                                    : n
                            )
                        );
                    },
                    { unsafe: !0 }
                );
        },
        function (e, t, n) {
            var r = n(41),
                o = n(20);
            e.exports = function (e) {
                return r(o(e));
            };
        },
        function (e, t, n) {
            var r = n(5),
                o = n(8),
                i = n(32);
            e.exports = r
                ? function (e, t, n) {
                      return o.f(e, t, i(1, n));
                  }
                : function (e, t, n) {
                      return (e[t] = n), e;
                  };
        },
        function (e, t, n) {
            'use strict';
            var r = n(0),
                o = n(3),
                i = n(30),
                a = n(29),
                c = n(5),
                s = n(64),
                u = n(92),
                l = n(1),
                p = n(7),
                f = n(47),
                d = n(4),
                v = n(6),
                y = n(22),
                h = n(15),
                m = n(42),
                g = n(32),
                b = n(35),
                _ = n(50),
                k = n(45),
                w = n(149),
                x = n(62),
                S = n(24),
                O = n(8),
                j = n(58),
                P = n(16),
                A = n(21),
                E = n(60),
                C = n(43),
                z = n(34),
                R = n(44),
                T = n(2),
                D = n(112),
                N = n(113),
                I = n(51),
                M = n(28),
                q = n(54).forEach,
                L = C('hidden'),
                U = T('toPrimitive'),
                F = M.set,
                H = M.getterFor('Symbol'),
                B = Object.prototype,
                K = o.Symbol,
                W = i('JSON', 'stringify'),
                V = S.f,
                $ = O.f,
                G = w.f,
                Z = j.f,
                Q = E('symbols'),
                Y = E('op-symbols'),
                J = E('string-to-symbol-registry'),
                X = E('symbol-to-string-registry'),
                ee = E('wks'),
                te = o.QObject,
                ne = !te || !te.prototype || !te.prototype.findChild,
                re =
                    c &&
                    l(function () {
                        return (
                            7 !=
                            b(
                                $({}, 'a', {
                                    get: function () {
                                        return $(this, 'a', { value: 7 }).a;
                                    },
                                })
                            ).a
                        );
                    })
                        ? function (e, t, n) {
                              var r = V(B, t);
                              r && delete B[t],
                                  $(e, t, n),
                                  r && e !== B && $(B, t, r);
                          }
                        : $,
                oe = function (e, t) {
                    var n = (Q[e] = b(K.prototype));
                    return (
                        F(n, { type: 'Symbol', tag: e, description: t }),
                        c || (n.description = t),
                        n
                    );
                },
                ie = u
                    ? function (e) {
                          return 'symbol' == typeof e;
                      }
                    : function (e) {
                          return Object(e) instanceof K;
                      },
                ae = function (e, t, n) {
                    e === B && ae(Y, t, n), v(e);
                    var r = m(t, !0);
                    return (
                        v(n),
                        p(Q, r)
                            ? (n.enumerable
                                  ? (p(e, L) && e[L][r] && (e[L][r] = !1),
                                    (n = b(n, { enumerable: g(0, !1) })))
                                  : (p(e, L) || $(e, L, g(1, {})),
                                    (e[L][r] = !0)),
                              re(e, r, n))
                            : $(e, r, n)
                    );
                },
                ce = function (e, t) {
                    v(e);
                    var n = h(t),
                        r = _(n).concat(pe(n));
                    return (
                        q(r, function (t) {
                            (c && !se.call(n, t)) || ae(e, t, n[t]);
                        }),
                        e
                    );
                },
                se = function (e) {
                    var t = m(e, !0),
                        n = Z.call(this, t);
                    return (
                        !(this === B && p(Q, t) && !p(Y, t)) &&
                        (!(
                            n ||
                            !p(this, t) ||
                            !p(Q, t) ||
                            (p(this, L) && this[L][t])
                        ) ||
                            n)
                    );
                },
                ue = function (e, t) {
                    var n = h(e),
                        r = m(t, !0);
                    if (n !== B || !p(Q, r) || p(Y, r)) {
                        var o = V(n, r);
                        return (
                            !o ||
                                !p(Q, r) ||
                                (p(n, L) && n[L][r]) ||
                                (o.enumerable = !0),
                            o
                        );
                    }
                },
                le = function (e) {
                    var t = G(h(e)),
                        n = [];
                    return (
                        q(t, function (e) {
                            p(Q, e) || p(z, e) || n.push(e);
                        }),
                        n
                    );
                },
                pe = function (e) {
                    var t = e === B,
                        n = G(t ? Y : h(e)),
                        r = [];
                    return (
                        q(n, function (e) {
                            !p(Q, e) || (t && !p(B, e)) || r.push(Q[e]);
                        }),
                        r
                    );
                };
            (s ||
                (A(
                    (K = function () {
                        if (this instanceof K)
                            throw TypeError('Symbol is not a constructor');
                        var e =
                                arguments.length && void 0 !== arguments[0]
                                    ? String(arguments[0])
                                    : void 0,
                            t = R(e),
                            n = function (e) {
                                this === B && n.call(Y, e),
                                    p(this, L) &&
                                        p(this[L], t) &&
                                        (this[L][t] = !1),
                                    re(this, t, g(1, e));
                            };
                        return (
                            c && ne && re(B, t, { configurable: !0, set: n }),
                            oe(t, e)
                        );
                    }).prototype,
                    'toString',
                    function () {
                        return H(this).tag;
                    }
                ),
                A(K, 'withoutSetter', function (e) {
                    return oe(R(e), e);
                }),
                (j.f = se),
                (O.f = ae),
                (S.f = ue),
                (k.f = w.f = le),
                (x.f = pe),
                (D.f = function (e) {
                    return oe(T(e), e);
                }),
                c &&
                    ($(K.prototype, 'description', {
                        configurable: !0,
                        get: function () {
                            return H(this).description;
                        },
                    }),
                    a || A(B, 'propertyIsEnumerable', se, { unsafe: !0 }))),
            r({ global: !0, wrap: !0, forced: !s, sham: !s }, { Symbol: K }),
            q(_(ee), function (e) {
                N(e);
            }),
            r(
                { target: 'Symbol', stat: !0, forced: !s },
                {
                    for: function (e) {
                        var t = String(e);
                        if (p(J, t)) return J[t];
                        var n = K(t);
                        return (J[t] = n), (X[n] = t), n;
                    },
                    keyFor: function (e) {
                        if (!ie(e)) throw TypeError(e + ' is not a symbol');
                        if (p(X, e)) return X[e];
                    },
                    useSetter: function () {
                        ne = !0;
                    },
                    useSimple: function () {
                        ne = !1;
                    },
                }
            ),
            r(
                { target: 'Object', stat: !0, forced: !s, sham: !c },
                {
                    create: function (e, t) {
                        return void 0 === t ? b(e) : ce(b(e), t);
                    },
                    defineProperty: ae,
                    defineProperties: ce,
                    getOwnPropertyDescriptor: ue,
                }
            ),
            r(
                { target: 'Object', stat: !0, forced: !s },
                { getOwnPropertyNames: le, getOwnPropertySymbols: pe }
            ),
            r(
                {
                    target: 'Object',
                    stat: !0,
                    forced: l(function () {
                        x.f(1);
                    }),
                },
                {
                    getOwnPropertySymbols: function (e) {
                        return x.f(y(e));
                    },
                }
            ),
            W) &&
                r(
                    {
                        target: 'JSON',
                        stat: !0,
                        forced:
                            !s ||
                            l(function () {
                                var e = K();
                                return (
                                    '[null]' != W([e]) ||
                                    '{}' != W({ a: e }) ||
                                    '{}' != W(Object(e))
                                );
                            }),
                    },
                    {
                        stringify: function (e, t, n) {
                            for (var r, o = [e], i = 1; arguments.length > i; )
                                o.push(arguments[i++]);
                            if (((r = t), (d(t) || void 0 !== e) && !ie(e)))
                                return (
                                    f(t) ||
                                        (t = function (e, t) {
                                            if (
                                                ('function' == typeof r &&
                                                    (t = r.call(this, e, t)),
                                                !ie(t))
                                            )
                                                return t;
                                        }),
                                    (o[1] = t),
                                    W.apply(null, o)
                                );
                        },
                    }
                );
            K.prototype[U] || P(K.prototype, U, K.prototype.valueOf),
                I(K, 'Symbol'),
                (z[L] = !0);
        },
        function (e, t, n) {
            'use strict';
            var r = n(0),
                o = n(5),
                i = n(3),
                a = n(7),
                c = n(4),
                s = n(8).f,
                u = n(85),
                l = i.Symbol;
            if (
                o &&
                'function' == typeof l &&
                (!('description' in l.prototype) || void 0 !== l().description)
            ) {
                var p = {},
                    f = function () {
                        var e =
                                arguments.length < 1 || void 0 === arguments[0]
                                    ? void 0
                                    : String(arguments[0]),
                            t =
                                this instanceof f
                                    ? new l(e)
                                    : void 0 === e
                                    ? l()
                                    : l(e);
                        return '' === e && (p[t] = !0), t;
                    };
                u(f, l);
                var d = (f.prototype = l.prototype);
                d.constructor = f;
                var v = d.toString,
                    y = 'Symbol(test)' == String(l('test')),
                    h = /^Symbol\((.*)\)[^)]+$/;
                s(d, 'description', {
                    configurable: !0,
                    get: function () {
                        var e = c(this) ? this.valueOf() : this,
                            t = v.call(e);
                        if (a(p, e)) return '';
                        var n = y ? t.slice(7, -1) : t.replace(h, '$1');
                        return '' === n ? void 0 : n;
                    },
                }),
                    r({ global: !0, forced: !0 }, { Symbol: f });
            }
        },
        function (e, t, n) {
            n(113)('iterator');
        },
        function (e, t) {
            e.exports = function (e) {
                if (null == e) throw TypeError("Can't call method on " + e);
                return e;
            };
        },
        function (e, t, n) {
            var r = n(3),
                o = n(16),
                i = n(7),
                a = n(59),
                c = n(83),
                s = n(28),
                u = s.get,
                l = s.enforce,
                p = String(String).split('String');
            (e.exports = function (e, t, n, c) {
                var s = !!c && !!c.unsafe,
                    u = !!c && !!c.enumerable,
                    f = !!c && !!c.noTargetGet;
                'function' == typeof n &&
                    ('string' != typeof t || i(n, 'name') || o(n, 'name', t),
                    (l(n).source = p.join('string' == typeof t ? t : ''))),
                    e !== r
                        ? (s ? !f && e[t] && (u = !0) : delete e[t],
                          u ? (e[t] = n) : o(e, t, n))
                        : u
                        ? (e[t] = n)
                        : a(t, n);
            })(Function.prototype, 'toString', function () {
                return ('function' == typeof this && u(this).source) || c(this);
            });
        },
        function (e, t, n) {
            var r = n(20);
            e.exports = function (e) {
                return Object(r(e));
            };
        },
        function (e, t, n) {
            var r = n(5),
                o = n(8).f,
                i = Function.prototype,
                a = i.toString,
                c = /^\s*function ([^ (]*)/;
            r &&
                !('name' in i) &&
                o(i, 'name', {
                    configurable: !0,
                    get: function () {
                        try {
                            return a.call(this).match(c)[1];
                        } catch (e) {
                            return '';
                        }
                    },
                });
        },
        function (e, t, n) {
            var r = n(5),
                o = n(58),
                i = n(32),
                a = n(15),
                c = n(42),
                s = n(7),
                u = n(81),
                l = Object.getOwnPropertyDescriptor;
            t.f = r
                ? l
                : function (e, t) {
                      if (((e = a(e)), (t = c(t, !0)), u))
                          try {
                              return l(e, t);
                          } catch (e) {}
                      if (s(e, t)) return i(!o.f.call(e, t), e[t]);
                  };
        },
        function (e, t, n) {
            var r = n(0),
                o = n(1),
                i = n(22),
                a = n(66),
                c = n(97);
            r(
                {
                    target: 'Object',
                    stat: !0,
                    forced: o(function () {
                        a(1);
                    }),
                    sham: !c,
                },
                {
                    getPrototypeOf: function (e) {
                        return a(i(e));
                    },
                }
            );
        },
        function (e, t, n) {
            n(0)({ target: 'Object', stat: !0 }, { setPrototypeOf: n(67) });
        },
        function (e, t, n) {
            var r = n(0),
                o = n(30),
                i = n(53),
                a = n(6),
                c = n(4),
                s = n(35),
                u = n(150),
                l = n(1),
                p = o('Reflect', 'construct'),
                f = l(function () {
                    function e() {}
                    return !(p(function () {}, [], e) instanceof e);
                }),
                d = !l(function () {
                    p(function () {});
                }),
                v = f || d;
            r(
                { target: 'Reflect', stat: !0, forced: v, sham: v },
                {
                    construct: function (e, t) {
                        i(e), a(t);
                        var n = arguments.length < 3 ? e : i(arguments[2]);
                        if (d && !f) return p(e, t, n);
                        if (e == n) {
                            switch (t.length) {
                                case 0:
                                    return new e();
                                case 1:
                                    return new e(t[0]);
                                case 2:
                                    return new e(t[0], t[1]);
                                case 3:
                                    return new e(t[0], t[1], t[2]);
                                case 4:
                                    return new e(t[0], t[1], t[2], t[3]);
                            }
                            var r = [null];
                            return r.push.apply(r, t), new (u.apply(e, r))();
                        }
                        var o = n.prototype,
                            l = s(c(o) ? o : Object.prototype),
                            v = Function.apply.call(e, l, t);
                        return c(v) ? v : l;
                    },
                }
            );
        },
        function (e, t, n) {
            var r,
                o,
                i,
                a = n(140),
                c = n(3),
                s = n(4),
                u = n(16),
                l = n(7),
                p = n(43),
                f = n(34),
                d = c.WeakMap;
            if (a) {
                var v = new d(),
                    y = v.get,
                    h = v.has,
                    m = v.set;
                (r = function (e, t) {
                    return m.call(v, e, t), t;
                }),
                    (o = function (e) {
                        return y.call(v, e) || {};
                    }),
                    (i = function (e) {
                        return h.call(v, e);
                    });
            } else {
                var g = p('state');
                (f[g] = !0),
                    (r = function (e, t) {
                        return u(e, g, t), t;
                    }),
                    (o = function (e) {
                        return l(e, g) ? e[g] : {};
                    }),
                    (i = function (e) {
                        return l(e, g);
                    });
            }
            e.exports = {
                set: r,
                get: o,
                has: i,
                enforce: function (e) {
                    return i(e) ? o(e) : r(e, {});
                },
                getterFor: function (e) {
                    return function (t) {
                        var n;
                        if (!s(t) || (n = o(t)).type !== e)
                            throw TypeError(
                                'Incompatible receiver, ' + e + ' required'
                            );
                        return n;
                    };
                },
            };
        },
        function (e, t) {
            e.exports = !1;
        },
        function (e, t, n) {
            var r = n(87),
                o = n(3),
                i = function (e) {
                    return 'function' == typeof e ? e : void 0;
                };
            e.exports = function (e, t) {
                return arguments.length < 2
                    ? i(r[e]) || i(o[e])
                    : (r[e] && r[e][t]) || (o[e] && o[e][t]);
            };
        },
        function (e, t, n) {
            'use strict';
            var r = n(0),
                o = n(54).map,
                i = n(49),
                a = n(38),
                c = i('map'),
                s = a('map');
            r(
                { target: 'Array', proto: !0, forced: !c || !s },
                {
                    map: function (e) {
                        return o(
                            this,
                            e,
                            arguments.length > 1 ? arguments[1] : void 0
                        );
                    },
                }
            );
        },
        function (e, t) {
            e.exports = function (e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t,
                };
            };
        },
        function (e, t) {
            var n = {}.toString;
            e.exports = function (e) {
                return n.call(e).slice(8, -1);
            };
        },
        function (e, t) {
            e.exports = {};
        },
        function (e, t, n) {
            var r,
                o = n(6),
                i = n(141),
                a = n(61),
                c = n(34),
                s = n(142),
                u = n(82),
                l = n(43),
                p = l('IE_PROTO'),
                f = function () {},
                d = function (e) {
                    return '<script>' + e + '</script>';
                },
                v = function () {
                    try {
                        r = document.domain && new ActiveXObject('htmlfile');
                    } catch (e) {}
                    var e, t;
                    v = r
                        ? (function (e) {
                              e.write(d('')), e.close();
                              var t = e.parentWindow.Object;
                              return (e = null), t;
                          })(r)
                        : (((t = u('iframe')).style.display = 'none'),
                          s.appendChild(t),
                          (t.src = String('javascript:')),
                          (e = t.contentWindow.document).open(),
                          e.write(d('document.F=Object')),
                          e.close(),
                          e.F);
                    for (var n = a.length; n--; ) delete v.prototype[a[n]];
                    return v();
                };
            (c[p] = !0),
                (e.exports =
                    Object.create ||
                    function (e, t) {
                        var n;
                        return (
                            null !== e
                                ? ((f.prototype = o(e)),
                                  (n = new f()),
                                  (f.prototype = null),
                                  (n[p] = e))
                                : (n = v()),
                            void 0 === t ? n : i(n, t)
                        );
                    });
        },
        function (e, t) {
            e.exports = {};
        },
        function (e, t, n) {
            var r = n(0),
                o = n(22),
                i = n(50);
            r(
                {
                    target: 'Object',
                    stat: !0,
                    forced: n(1)(function () {
                        i(1);
                    }),
                },
                {
                    keys: function (e) {
                        return i(o(e));
                    },
                }
            );
        },
        function (e, t, n) {
            var r = n(5),
                o = n(1),
                i = n(7),
                a = Object.defineProperty,
                c = {},
                s = function (e) {
                    throw e;
                };
            e.exports = function (e, t) {
                if (i(c, e)) return c[e];
                t || (t = {});
                var n = [][e],
                    u = !!i(t, 'ACCESSORS') && t.ACCESSORS,
                    l = i(t, 0) ? t[0] : s,
                    p = i(t, 1) ? t[1] : void 0;
                return (c[e] =
                    !!n &&
                    !o(function () {
                        if (u && !r) return !0;
                        var e = { length: -1 };
                        u ? a(e, 1, { enumerable: !0, get: s }) : (e[1] = 1),
                            n.call(e, l, p);
                    }));
            };
        },
        function (e, t, n) {
            var r = n(0),
                o = n(155);
            r(
                {
                    target: 'Array',
                    stat: !0,
                    forced: !n(106)(function (e) {
                        Array.from(e);
                    }),
                },
                { from: o }
            );
        },
        function (e, t, n) {
            'use strict';
            var r = n(0),
                o = n(4),
                i = n(47),
                a = n(90),
                c = n(13),
                s = n(15),
                u = n(48),
                l = n(2),
                p = n(49),
                f = n(38),
                d = p('slice'),
                v = f('slice', { ACCESSORS: !0, 0: 0, 1: 2 }),
                y = l('species'),
                h = [].slice,
                m = Math.max;
            r(
                { target: 'Array', proto: !0, forced: !d || !v },
                {
                    slice: function (e, t) {
                        var n,
                            r,
                            l,
                            p = s(this),
                            f = c(p.length),
                            d = a(e, f),
                            v = a(void 0 === t ? f : t, f);
                        if (
                            i(p) &&
                            ('function' != typeof (n = p.constructor) ||
                            (n !== Array && !i(n.prototype))
                                ? o(n) && null === (n = n[y]) && (n = void 0)
                                : (n = void 0),
                            n === Array || void 0 === n)
                        )
                            return h.call(p, d, v);
                        for (
                            r = new (void 0 === n ? Array : n)(m(v - d, 0)),
                                l = 0;
                            d < v;
                            d++, l++
                        )
                            d in p && u(r, l, p[d]);
                        return (r.length = l), r;
                    },
                }
            );
        },
        function (e, t, n) {
            var r = n(1),
                o = n(33),
                i = ''.split;
            e.exports = r(function () {
                return !Object('z').propertyIsEnumerable(0);
            })
                ? function (e) {
                      return 'String' == o(e) ? i.call(e, '') : Object(e);
                  }
                : Object;
        },
        function (e, t, n) {
            var r = n(4);
            e.exports = function (e, t) {
                if (!r(e)) return e;
                var n, o;
                if (
                    t &&
                    'function' == typeof (n = e.toString) &&
                    !r((o = n.call(e)))
                )
                    return o;
                if ('function' == typeof (n = e.valueOf) && !r((o = n.call(e))))
                    return o;
                if (
                    !t &&
                    'function' == typeof (n = e.toString) &&
                    !r((o = n.call(e)))
                )
                    return o;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function (e, t, n) {
            var r = n(60),
                o = n(44),
                i = r('keys');
            e.exports = function (e) {
                return i[e] || (i[e] = o(e));
            };
        },
        function (e, t) {
            var n = 0,
                r = Math.random();
            e.exports = function (e) {
                return (
                    'Symbol(' +
                    String(void 0 === e ? '' : e) +
                    ')_' +
                    (++n + r).toString(36)
                );
            };
        },
        function (e, t, n) {
            var r = n(88),
                o = n(61).concat('length', 'prototype');
            t.f =
                Object.getOwnPropertyNames ||
                function (e) {
                    return r(e, o);
                };
        },
        function (e, t) {
            var n = Math.ceil,
                r = Math.floor;
            e.exports = function (e) {
                return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
            };
        },
        function (e, t, n) {
            var r = n(33);
            e.exports =
                Array.isArray ||
                function (e) {
                    return 'Array' == r(e);
                };
        },
        function (e, t, n) {
            'use strict';
            var r = n(42),
                o = n(8),
                i = n(32);
            e.exports = function (e, t, n) {
                var a = r(t);
                a in e ? o.f(e, a, i(0, n)) : (e[a] = n);
            };
        },
        function (e, t, n) {
            var r = n(1),
                o = n(2),
                i = n(93),
                a = o('species');
            e.exports = function (e) {
                return (
                    i >= 51 ||
                    !r(function () {
                        var t = [];
                        return (
                            ((t.constructor = {})[a] = function () {
                                return { foo: 1 };
                            }),
                            1 !== t[e](Boolean).foo
                        );
                    })
                );
            };
        },
        function (e, t, n) {
            var r = n(88),
                o = n(61);
            e.exports =
                Object.keys ||
                function (e) {
                    return r(e, o);
                };
        },
        function (e, t, n) {
            var r = n(8).f,
                o = n(7),
                i = n(2)('toStringTag');
            e.exports = function (e, t, n) {
                e &&
                    !o((e = n ? e : e.prototype), i) &&
                    r(e, i, { configurable: !0, value: t });
            };
        },
        function (e, t, n) {
            var r = n(53);
            e.exports = function (e, t, n) {
                if ((r(e), void 0 === t)) return e;
                switch (n) {
                    case 0:
                        return function () {
                            return e.call(t);
                        };
                    case 1:
                        return function (n) {
                            return e.call(t, n);
                        };
                    case 2:
                        return function (n, r) {
                            return e.call(t, n, r);
                        };
                    case 3:
                        return function (n, r, o) {
                            return e.call(t, n, r, o);
                        };
                }
                return function () {
                    return e.apply(t, arguments);
                };
            };
        },
        function (e, t) {
            e.exports = function (e) {
                if ('function' != typeof e)
                    throw TypeError(String(e) + ' is not a function');
                return e;
            };
        },
        function (e, t, n) {
            var r = n(52),
                o = n(41),
                i = n(22),
                a = n(13),
                c = n(91),
                s = [].push,
                u = function (e) {
                    var t = 1 == e,
                        n = 2 == e,
                        u = 3 == e,
                        l = 4 == e,
                        p = 6 == e,
                        f = 5 == e || p;
                    return function (d, v, y, h) {
                        for (
                            var m,
                                g,
                                b = i(d),
                                _ = o(b),
                                k = r(v, y, 3),
                                w = a(_.length),
                                x = 0,
                                S = h || c,
                                O = t ? S(d, w) : n ? S(d, 0) : void 0;
                            w > x;
                            x++
                        )
                            if ((f || x in _) && ((g = k((m = _[x]), x, b)), e))
                                if (t) O[x] = g;
                                else if (g)
                                    switch (e) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return m;
                                        case 6:
                                            return x;
                                        case 2:
                                            s.call(O, m);
                                    }
                                else if (l) return !1;
                        return p ? -1 : u || l ? l : O;
                    };
                };
            e.exports = {
                forEach: u(0),
                map: u(1),
                filter: u(2),
                some: u(3),
                every: u(4),
                find: u(5),
                findIndex: u(6),
            };
        },
        function (e, t, n) {
            'use strict';
            var r = n(0),
                o = n(41),
                i = n(15),
                a = n(114),
                c = [].join,
                s = o != Object,
                u = a('join', ',');
            r(
                { target: 'Array', proto: !0, forced: s || !u },
                {
                    join: function (e) {
                        return c.call(i(this), void 0 === e ? ',' : e);
                    },
                }
            );
        },
        function (e, t, n) {
            'use strict';
            var r = n(0),
                o = n(57);
            r(
                { target: 'RegExp', proto: !0, forced: /./.exec !== o },
                { exec: o }
            );
        },
        function (e, t, n) {
            'use strict';
            var r,
                o,
                i = n(70),
                a = n(115),
                c = RegExp.prototype.exec,
                s = String.prototype.replace,
                u = c,
                l =
                    ((r = /a/),
                    (o = /b*/g),
                    c.call(r, 'a'),
                    c.call(o, 'a'),
                    0 !== r.lastIndex || 0 !== o.lastIndex),
                p = a.UNSUPPORTED_Y || a.BROKEN_CARET,
                f = void 0 !== /()??/.exec('')[1];
            (l || f || p) &&
                (u = function (e) {
                    var t,
                        n,
                        r,
                        o,
                        a = this,
                        u = p && a.sticky,
                        d = i.call(a),
                        v = a.source,
                        y = 0,
                        h = e;
                    return (
                        u &&
                            (-1 === (d = d.replace('y', '')).indexOf('g') &&
                                (d += 'g'),
                            (h = String(e).slice(a.lastIndex)),
                            a.lastIndex > 0 &&
                                (!a.multiline ||
                                    (a.multiline &&
                                        '\n' !== e[a.lastIndex - 1])) &&
                                ((v = '(?: ' + v + ')'), (h = ' ' + h), y++),
                            (n = new RegExp('^(?:' + v + ')', d))),
                        f && (n = new RegExp('^' + v + '$(?!\\s)', d)),
                        l && (t = a.lastIndex),
                        (r = c.call(u ? n : a, h)),
                        u
                            ? r
                                ? ((r.input = r.input.slice(y)),
                                  (r[0] = r[0].slice(y)),
                                  (r.index = a.lastIndex),
                                  (a.lastIndex += r[0].length))
                                : (a.lastIndex = 0)
                            : l &&
                              r &&
                              (a.lastIndex = a.global
                                  ? r.index + r[0].length
                                  : t),
                        f &&
                            r &&
                            r.length > 1 &&
                            s.call(r[0], n, function () {
                                for (o = 1; o < arguments.length - 2; o++)
                                    void 0 === arguments[o] && (r[o] = void 0);
                            }),
                        r
                    );
                }),
                (e.exports = u);
        },
        function (e, t, n) {
            'use strict';
            var r = {}.propertyIsEnumerable,
                o = Object.getOwnPropertyDescriptor,
                i = o && !r.call({ 1: 2 }, 1);
            t.f = i
                ? function (e) {
                      var t = o(this, e);
                      return !!t && t.enumerable;
                  }
                : r;
        },
        function (e, t, n) {
            var r = n(3),
                o = n(16);
            e.exports = function (e, t) {
                try {
                    o(r, e, t);
                } catch (n) {
                    r[e] = t;
                }
                return t;
            };
        },
        function (e, t, n) {
            var r = n(29),
                o = n(84);
            (e.exports = function (e, t) {
                return o[e] || (o[e] = void 0 !== t ? t : {});
            })('versions', []).push({
                version: '3.6.5',
                mode: r ? 'pure' : 'global',
                copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
            });
        },
        function (e, t) {
            e.exports = [
                'constructor',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'toLocaleString',
                'toString',
                'valueOf',
            ];
        },
        function (e, t) {
            t.f = Object.getOwnPropertySymbols;
        },
        function (e, t, n) {
            var r = n(1),
                o = /#|\.prototype\./,
                i = function (e, t) {
                    var n = c[a(e)];
                    return (
                        n == u ||
                        (n != s && ('function' == typeof t ? r(t) : !!t))
                    );
                },
                a = (i.normalize = function (e) {
                    return String(e).replace(o, '.').toLowerCase();
                }),
                c = (i.data = {}),
                s = (i.NATIVE = 'N'),
                u = (i.POLYFILL = 'P');
            e.exports = i;
        },
        function (e, t, n) {
            var r = n(1);
            e.exports =
                !!Object.getOwnPropertySymbols &&
                !r(function () {
                    return !String(Symbol());
                });
        },
        function (e, t, n) {
            'use strict';
            var r = n(0),
                o = n(143),
                i = n(66),
                a = n(67),
                c = n(51),
                s = n(16),
                u = n(21),
                l = n(2),
                p = n(29),
                f = n(36),
                d = n(96),
                v = d.IteratorPrototype,
                y = d.BUGGY_SAFARI_ITERATORS,
                h = l('iterator'),
                m = function () {
                    return this;
                };
            e.exports = function (e, t, n, l, d, g, b) {
                o(n, t, l);
                var _,
                    k,
                    w,
                    x = function (e) {
                        if (e === d && A) return A;
                        if (!y && e in j) return j[e];
                        switch (e) {
                            case 'keys':
                            case 'values':
                            case 'entries':
                                return function () {
                                    return new n(this, e);
                                };
                        }
                        return function () {
                            return new n(this);
                        };
                    },
                    S = t + ' Iterator',
                    O = !1,
                    j = e.prototype,
                    P = j[h] || j['@@iterator'] || (d && j[d]),
                    A = (!y && P) || x(d),
                    E = ('Array' == t && j.entries) || P;
                if (
                    (E &&
                        ((_ = i(E.call(new e()))),
                        v !== Object.prototype &&
                            _.next &&
                            (p ||
                                i(_) === v ||
                                (a
                                    ? a(_, v)
                                    : 'function' != typeof _[h] && s(_, h, m)),
                            c(_, S, !0, !0),
                            p && (f[S] = m))),
                    'values' == d &&
                        P &&
                        'values' !== P.name &&
                        ((O = !0),
                        (A = function () {
                            return P.call(this);
                        })),
                    (p && !b) || j[h] === A || s(j, h, A),
                    (f[t] = A),
                    d)
                )
                    if (
                        ((k = {
                            values: x('values'),
                            keys: g ? A : x('keys'),
                            entries: x('entries'),
                        }),
                        b)
                    )
                        for (w in k) (y || O || !(w in j)) && u(j, w, k[w]);
                    else r({ target: t, proto: !0, forced: y || O }, k);
                return k;
            };
        },
        function (e, t, n) {
            var r = n(7),
                o = n(22),
                i = n(43),
                a = n(97),
                c = i('IE_PROTO'),
                s = Object.prototype;
            e.exports = a
                ? Object.getPrototypeOf
                : function (e) {
                      return (
                          (e = o(e)),
                          r(e, c)
                              ? e[c]
                              : 'function' == typeof e.constructor &&
                                e instanceof e.constructor
                              ? e.constructor.prototype
                              : e instanceof Object
                              ? s
                              : null
                      );
                  };
        },
        function (e, t, n) {
            var r = n(6),
                o = n(144);
            e.exports =
                Object.setPrototypeOf ||
                ('__proto__' in {}
                    ? (function () {
                          var e,
                              t = !1,
                              n = {};
                          try {
                              (e = Object.getOwnPropertyDescriptor(
                                  Object.prototype,
                                  '__proto__'
                              ).set).call(n, []),
                                  (t = n instanceof Array);
                          } catch (e) {}
                          return function (n, i) {
                              return (
                                  r(n),
                                  o(i),
                                  t ? e.call(n, i) : (n.__proto__ = i),
                                  n
                              );
                          };
                      })()
                    : void 0);
        },
        function (e, t, n) {
            'use strict';
            var r = n(98),
                o = n(108);
            e.exports = r(
                'Map',
                function (e) {
                    return function () {
                        return e(
                            this,
                            arguments.length ? arguments[0] : void 0
                        );
                    };
                },
                o
            );
        },
        function (e, t, n) {
            var r = {};
            (r[n(2)('toStringTag')] = 'z'),
                (e.exports = '[object z]' === String(r));
        },
        function (e, t, n) {
            'use strict';
            var r = n(6);
            e.exports = function () {
                var e = r(this),
                    t = '';
                return (
                    e.global && (t += 'g'),
                    e.ignoreCase && (t += 'i'),
                    e.multiline && (t += 'm'),
                    e.dotAll && (t += 's'),
                    e.unicode && (t += 'u'),
                    e.sticky && (t += 'y'),
                    t
                );
            };
        },
        function (e, t, n) {
            'use strict';
            var r = n(0),
                o = n(54).filter,
                i = n(49),
                a = n(38),
                c = i('filter'),
                s = a('filter');
            r(
                { target: 'Array', proto: !0, forced: !c || !s },
                {
                    filter: function (e) {
                        return o(
                            this,
                            e,
                            arguments.length > 1 ? arguments[1] : void 0
                        );
                    },
                }
            );
        },
        function (e, t, n) {
            var r = n(0),
                o = n(154);
            r(
                { target: 'Object', stat: !0, forced: Object.assign !== o },
                { assign: o }
            );
        },
        function (e, t, n) {
            var r = n(5),
                o = n(3),
                i = n(63),
                a = n(107),
                c = n(8).f,
                s = n(45).f,
                u = n(74),
                l = n(70),
                p = n(115),
                f = n(21),
                d = n(1),
                v = n(28).set,
                y = n(109),
                h = n(2)('match'),
                m = o.RegExp,
                g = m.prototype,
                b = /a/g,
                _ = /a/g,
                k = new m(b) !== b,
                w = p.UNSUPPORTED_Y;
            if (
                r &&
                i(
                    'RegExp',
                    !k ||
                        w ||
                        d(function () {
                            return (
                                (_[h] = !1),
                                m(b) != b || m(_) == _ || '/a/i' != m(b, 'i')
                            );
                        })
                )
            ) {
                for (
                    var x = function (e, t) {
                            var n,
                                r = this instanceof x,
                                o = u(e),
                                i = void 0 === t;
                            if (!r && o && e.constructor === x && i) return e;
                            k
                                ? o && !i && (e = e.source)
                                : e instanceof x &&
                                  (i && (t = l.call(e)), (e = e.source)),
                                w &&
                                    (n = !!t && t.indexOf('y') > -1) &&
                                    (t = t.replace(/y/g, ''));
                            var c = a(
                                k ? new m(e, t) : m(e, t),
                                r ? this : g,
                                x
                            );
                            return w && n && v(c, { sticky: n }), c;
                        },
                        S = function (e) {
                            (e in x) ||
                                c(x, e, {
                                    configurable: !0,
                                    get: function () {
                                        return m[e];
                                    },
                                    set: function (t) {
                                        m[e] = t;
                                    },
                                });
                        },
                        O = s(m),
                        j = 0;
                    O.length > j;

                )
                    S(O[j++]);
                (g.constructor = x), (x.prototype = g), f(o, 'RegExp', x);
            }
            y('RegExp');
        },
        function (e, t, n) {
            var r = n(4),
                o = n(33),
                i = n(2)('match');
            e.exports = function (e) {
                var t;
                return r(e) && (void 0 !== (t = e[i]) ? !!t : 'RegExp' == o(e));
            };
        },
        function (e, t, n) {
            var r = n(74);
            e.exports = function (e) {
                if (r(e))
                    throw TypeError(
                        "The method doesn't accept regular expressions"
                    );
                return e;
            };
        },
        function (e, t, n) {
            var r = n(2)('match');
            e.exports = function (e) {
                var t = /./;
                try {
                    '/./'[e](t);
                } catch (n) {
                    try {
                        return (t[r] = !1), '/./'[e](t);
                    } catch (e) {}
                }
                return !1;
            };
        },
        function (e, t, n) {
            'use strict';
            n(56);
            var r = n(21),
                o = n(1),
                i = n(2),
                a = n(57),
                c = n(16),
                s = i('species'),
                u = !o(function () {
                    var e = /./;
                    return (
                        (e.exec = function () {
                            var e = [];
                            return (e.groups = { a: '7' }), e;
                        }),
                        '7' !== ''.replace(e, '$<a>')
                    );
                }),
                l = '$0' === 'a'.replace(/./, '$0'),
                p = i('replace'),
                f = !!/./[p] && '' === /./[p]('a', '$0'),
                d = !o(function () {
                    var e = /(?:)/,
                        t = e.exec;
                    e.exec = function () {
                        return t.apply(this, arguments);
                    };
                    var n = 'ab'.split(e);
                    return 2 !== n.length || 'a' !== n[0] || 'b' !== n[1];
                });
            e.exports = function (e, t, n, p) {
                var v = i(e),
                    y = !o(function () {
                        var t = {};
                        return (
                            (t[v] = function () {
                                return 7;
                            }),
                            7 != ''[e](t)
                        );
                    }),
                    h =
                        y &&
                        !o(function () {
                            var t = !1,
                                n = /a/;
                            return (
                                'split' === e &&
                                    (((n = {}).constructor = {}),
                                    (n.constructor[s] = function () {
                                        return n;
                                    }),
                                    (n.flags = ''),
                                    (n[v] = /./[v])),
                                (n.exec = function () {
                                    return (t = !0), null;
                                }),
                                n[v](''),
                                !t
                            );
                        });
                if (
                    !y ||
                    !h ||
                    ('replace' === e && (!u || !l || f)) ||
                    ('split' === e && !d)
                ) {
                    var m = /./[v],
                        g = n(
                            v,
                            ''[e],
                            function (e, t, n, r, o) {
                                return t.exec === a
                                    ? y && !o
                                        ? { done: !0, value: m.call(t, n, r) }
                                        : { done: !0, value: e.call(n, t, r) }
                                    : { done: !1 };
                            },
                            {
                                REPLACE_KEEPS_$0: l,
                                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: f,
                            }
                        ),
                        b = g[0],
                        _ = g[1];
                    r(String.prototype, e, b),
                        r(
                            RegExp.prototype,
                            v,
                            2 == t
                                ? function (e, t) {
                                      return _.call(e, this, t);
                                  }
                                : function (e) {
                                      return _.call(e, this);
                                  }
                        );
                }
                p && c(RegExp.prototype[v], 'sham', !0);
            };
        },
        function (e, t, n) {
            'use strict';
            var r = n(110).charAt;
            e.exports = function (e, t, n) {
                return t + (n ? r(e, t).length : 1);
            };
        },
        function (e, t, n) {
            var r = n(33),
                o = n(57);
            e.exports = function (e, t) {
                var n = e.exec;
                if ('function' == typeof n) {
                    var i = n.call(e, t);
                    if ('object' != typeof i)
                        throw TypeError(
                            'RegExp exec method returned something other than an Object or null'
                        );
                    return i;
                }
                if ('RegExp' !== r(e))
                    throw TypeError(
                        'RegExp#exec called on incompatible receiver'
                    );
                return o.call(e, t);
            };
        },
        function (e, t, n) {
            'use strict';
            var r = n(0),
                o = n(1),
                i = n(47),
                a = n(4),
                c = n(22),
                s = n(13),
                u = n(48),
                l = n(91),
                p = n(49),
                f = n(2),
                d = n(93),
                v = f('isConcatSpreadable'),
                y =
                    d >= 51 ||
                    !o(function () {
                        var e = [];
                        return (e[v] = !1), e.concat()[0] !== e;
                    }),
                h = p('concat'),
                m = function (e) {
                    if (!a(e)) return !1;
                    var t = e[v];
                    return void 0 !== t ? !!t : i(e);
                };
            r(
                { target: 'Array', proto: !0, forced: !y || !h },
                {
                    concat: function (e) {
                        var t,
                            n,
                            r,
                            o,
                            i,
                            a = c(this),
                            p = l(a, 0),
                            f = 0;
                        for (t = -1, r = arguments.length; t < r; t++)
                            if (m((i = -1 === t ? a : arguments[t]))) {
                                if (f + (o = s(i.length)) > 9007199254740991)
                                    throw TypeError(
                                        'Maximum allowed index exceeded'
                                    );
                                for (n = 0; n < o; n++, f++)
                                    n in i && u(p, f, i[n]);
                            } else {
                                if (f >= 9007199254740991)
                                    throw TypeError(
                                        'Maximum allowed index exceeded'
                                    );
                                u(p, f++, i);
                            }
                        return (p.length = f), p;
                    },
                }
            );
        },
        function (e, t, n) {
            var r = n(5),
                o = n(1),
                i = n(82);
            e.exports =
                !r &&
                !o(function () {
                    return (
                        7 !=
                        Object.defineProperty(i('div'), 'a', {
                            get: function () {
                                return 7;
                            },
                        }).a
                    );
                });
        },
        function (e, t, n) {
            var r = n(3),
                o = n(4),
                i = r.document,
                a = o(i) && o(i.createElement);
            e.exports = function (e) {
                return a ? i.createElement(e) : {};
            };
        },
        function (e, t, n) {
            var r = n(84),
                o = Function.toString;
            'function' != typeof r.inspectSource &&
                (r.inspectSource = function (e) {
                    return o.call(e);
                }),
                (e.exports = r.inspectSource);
        },
        function (e, t, n) {
            var r = n(3),
                o = n(59),
                i = r['__core-js_shared__'] || o('__core-js_shared__', {});
            e.exports = i;
        },
        function (e, t, n) {
            var r = n(7),
                o = n(86),
                i = n(24),
                a = n(8);
            e.exports = function (e, t) {
                for (var n = o(t), c = a.f, s = i.f, u = 0; u < n.length; u++) {
                    var l = n[u];
                    r(e, l) || c(e, l, s(t, l));
                }
            };
        },
        function (e, t, n) {
            var r = n(30),
                o = n(45),
                i = n(62),
                a = n(6);
            e.exports =
                r('Reflect', 'ownKeys') ||
                function (e) {
                    var t = o.f(a(e)),
                        n = i.f;
                    return n ? t.concat(n(e)) : t;
                };
        },
        function (e, t, n) {
            var r = n(3);
            e.exports = r;
        },
        function (e, t, n) {
            var r = n(7),
                o = n(15),
                i = n(89).indexOf,
                a = n(34);
            e.exports = function (e, t) {
                var n,
                    c = o(e),
                    s = 0,
                    u = [];
                for (n in c) !r(a, n) && r(c, n) && u.push(n);
                for (; t.length > s; )
                    r(c, (n = t[s++])) && (~i(u, n) || u.push(n));
                return u;
            };
        },
        function (e, t, n) {
            var r = n(15),
                o = n(13),
                i = n(90),
                a = function (e) {
                    return function (t, n, a) {
                        var c,
                            s = r(t),
                            u = o(s.length),
                            l = i(a, u);
                        if (e && n != n) {
                            for (; u > l; ) if ((c = s[l++]) != c) return !0;
                        } else
                            for (; u > l; l++)
                                if ((e || l in s) && s[l] === n)
                                    return e || l || 0;
                        return !e && -1;
                    };
                };
            e.exports = { includes: a(!0), indexOf: a(!1) };
        },
        function (e, t, n) {
            var r = n(46),
                o = Math.max,
                i = Math.min;
            e.exports = function (e, t) {
                var n = r(e);
                return n < 0 ? o(n + t, 0) : i(n, t);
            };
        },
        function (e, t, n) {
            var r = n(4),
                o = n(47),
                i = n(2)('species');
            e.exports = function (e, t) {
                var n;
                return (
                    o(e) &&
                        ('function' != typeof (n = e.constructor) ||
                        (n !== Array && !o(n.prototype))
                            ? r(n) && null === (n = n[i]) && (n = void 0)
                            : (n = void 0)),
                    new (void 0 === n ? Array : n)(0 === t ? 0 : t)
                );
            };
        },
        function (e, t, n) {
            var r = n(64);
            e.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
        },
        function (e, t, n) {
            var r,
                o,
                i = n(3),
                a = n(94),
                c = i.process,
                s = c && c.versions,
                u = s && s.v8;
            u
                ? (o = (r = u.split('.'))[0] + r[1])
                : a &&
                  (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
                  (r = a.match(/Chrome\/(\d+)/)) &&
                  (o = r[1]),
                (e.exports = o && +o);
        },
        function (e, t, n) {
            var r = n(30);
            e.exports = r('navigator', 'userAgent') || '';
        },
        function (e, t, n) {
            var r = n(2),
                o = n(35),
                i = n(8),
                a = r('unscopables'),
                c = Array.prototype;
            null == c[a] && i.f(c, a, { configurable: !0, value: o(null) }),
                (e.exports = function (e) {
                    c[a][e] = !0;
                });
        },
        function (e, t, n) {
            'use strict';
            var r,
                o,
                i,
                a = n(66),
                c = n(16),
                s = n(7),
                u = n(2),
                l = n(29),
                p = u('iterator'),
                f = !1;
            [].keys &&
                ('next' in (i = [].keys())
                    ? (o = a(a(i))) !== Object.prototype && (r = o)
                    : (f = !0)),
                null == r && (r = {}),
                l ||
                    s(r, p) ||
                    c(r, p, function () {
                        return this;
                    }),
                (e.exports = {
                    IteratorPrototype: r,
                    BUGGY_SAFARI_ITERATORS: f,
                });
        },
        function (e, t, n) {
            var r = n(1);
            e.exports = !r(function () {
                function e() {}
                return (
                    (e.prototype.constructor = null),
                    Object.getPrototypeOf(new e()) !== e.prototype
                );
            });
        },
        function (e, t, n) {
            'use strict';
            var r = n(0),
                o = n(3),
                i = n(63),
                a = n(21),
                c = n(99),
                s = n(100),
                u = n(105),
                l = n(4),
                p = n(1),
                f = n(106),
                d = n(51),
                v = n(107);
            e.exports = function (e, t, n) {
                var y = -1 !== e.indexOf('Map'),
                    h = -1 !== e.indexOf('Weak'),
                    m = y ? 'set' : 'add',
                    g = o[e],
                    b = g && g.prototype,
                    _ = g,
                    k = {},
                    w = function (e) {
                        var t = b[e];
                        a(
                            b,
                            e,
                            'add' == e
                                ? function (e) {
                                      return (
                                          t.call(this, 0 === e ? 0 : e), this
                                      );
                                  }
                                : 'delete' == e
                                ? function (e) {
                                      return (
                                          !(h && !l(e)) &&
                                          t.call(this, 0 === e ? 0 : e)
                                      );
                                  }
                                : 'get' == e
                                ? function (e) {
                                      return h && !l(e)
                                          ? void 0
                                          : t.call(this, 0 === e ? 0 : e);
                                  }
                                : 'has' == e
                                ? function (e) {
                                      return (
                                          !(h && !l(e)) &&
                                          t.call(this, 0 === e ? 0 : e)
                                      );
                                  }
                                : function (e, n) {
                                      return (
                                          t.call(this, 0 === e ? 0 : e, n), this
                                      );
                                  }
                        );
                    };
                if (
                    i(
                        e,
                        'function' != typeof g ||
                            !(
                                h ||
                                (b.forEach &&
                                    !p(function () {
                                        new g().entries().next();
                                    }))
                            )
                    )
                )
                    (_ = n.getConstructor(t, e, y, m)), (c.REQUIRED = !0);
                else if (i(e, !0)) {
                    var x = new _(),
                        S = x[m](h ? {} : -0, 1) != x,
                        O = p(function () {
                            x.has(1);
                        }),
                        j = f(function (e) {
                            new g(e);
                        }),
                        P =
                            !h &&
                            p(function () {
                                for (var e = new g(), t = 5; t--; ) e[m](t, t);
                                return !e.has(-0);
                            });
                    j ||
                        (((_ = t(function (t, n) {
                            u(t, _, e);
                            var r = v(new g(), t, _);
                            return null != n && s(n, r[m], r, y), r;
                        })).prototype = b),
                        (b.constructor = _)),
                        (O || P) && (w('delete'), w('has'), y && w('get')),
                        (P || S) && w(m),
                        h && b.clear && delete b.clear;
                }
                return (
                    (k[e] = _),
                    r({ global: !0, forced: _ != g }, k),
                    d(_, e),
                    h || n.setStrong(_, e, y),
                    _
                );
            };
        },
        function (e, t, n) {
            var r = n(34),
                o = n(4),
                i = n(7),
                a = n(8).f,
                c = n(44),
                s = n(145),
                u = c('meta'),
                l = 0,
                p =
                    Object.isExtensible ||
                    function () {
                        return !0;
                    },
                f = function (e) {
                    a(e, u, { value: { objectID: 'O' + ++l, weakData: {} } });
                },
                d = (e.exports = {
                    REQUIRED: !1,
                    fastKey: function (e, t) {
                        if (!o(e))
                            return 'symbol' == typeof e
                                ? e
                                : ('string' == typeof e ? 'S' : 'P') + e;
                        if (!i(e, u)) {
                            if (!p(e)) return 'F';
                            if (!t) return 'E';
                            f(e);
                        }
                        return e[u].objectID;
                    },
                    getWeakData: function (e, t) {
                        if (!i(e, u)) {
                            if (!p(e)) return !0;
                            if (!t) return !1;
                            f(e);
                        }
                        return e[u].weakData;
                    },
                    onFreeze: function (e) {
                        return s && d.REQUIRED && p(e) && !i(e, u) && f(e), e;
                    },
                });
            r[u] = !0;
        },
        function (e, t, n) {
            var r = n(6),
                o = n(101),
                i = n(13),
                a = n(52),
                c = n(102),
                s = n(104),
                u = function (e, t) {
                    (this.stopped = e), (this.result = t);
                };
            (e.exports = function (e, t, n, l, p) {
                var f,
                    d,
                    v,
                    y,
                    h,
                    m,
                    g,
                    b = a(t, n, l ? 2 : 1);
                if (p) f = e;
                else {
                    if ('function' != typeof (d = c(e)))
                        throw TypeError('Target is not iterable');
                    if (o(d)) {
                        for (v = 0, y = i(e.length); y > v; v++)
                            if (
                                (h = l ? b(r((g = e[v]))[0], g[1]) : b(e[v])) &&
                                h instanceof u
                            )
                                return h;
                        return new u(!1);
                    }
                    f = d.call(e);
                }
                for (m = f.next; !(g = m.call(f)).done; )
                    if (
                        'object' == typeof (h = s(f, b, g.value, l)) &&
                        h &&
                        h instanceof u
                    )
                        return h;
                return new u(!1);
            }).stop = function (e) {
                return new u(!0, e);
            };
        },
        function (e, t, n) {
            var r = n(2),
                o = n(36),
                i = r('iterator'),
                a = Array.prototype;
            e.exports = function (e) {
                return void 0 !== e && (o.Array === e || a[i] === e);
            };
        },
        function (e, t, n) {
            var r = n(103),
                o = n(36),
                i = n(2)('iterator');
            e.exports = function (e) {
                if (null != e) return e[i] || e['@@iterator'] || o[r(e)];
            };
        },
        function (e, t, n) {
            var r = n(69),
                o = n(33),
                i = n(2)('toStringTag'),
                a =
                    'Arguments' ==
                    o(
                        (function () {
                            return arguments;
                        })()
                    );
            e.exports = r
                ? o
                : function (e) {
                      var t, n, r;
                      return void 0 === e
                          ? 'Undefined'
                          : null === e
                          ? 'Null'
                          : 'string' ==
                            typeof (n = (function (e, t) {
                                try {
                                    return e[t];
                                } catch (e) {}
                            })((t = Object(e)), i))
                          ? n
                          : a
                          ? o(t)
                          : 'Object' == (r = o(t)) &&
                            'function' == typeof t.callee
                          ? 'Arguments'
                          : r;
                  };
        },
        function (e, t, n) {
            var r = n(6);
            e.exports = function (e, t, n, o) {
                try {
                    return o ? t(r(n)[0], n[1]) : t(n);
                } catch (t) {
                    var i = e.return;
                    throw (void 0 !== i && r(i.call(e)), t);
                }
            };
        },
        function (e, t) {
            e.exports = function (e, t, n) {
                if (!(e instanceof t))
                    throw TypeError(
                        'Incorrect ' + (n ? n + ' ' : '') + 'invocation'
                    );
                return e;
            };
        },
        function (e, t, n) {
            var r = n(2)('iterator'),
                o = !1;
            try {
                var i = 0,
                    a = {
                        next: function () {
                            return { done: !!i++ };
                        },
                        return: function () {
                            o = !0;
                        },
                    };
                (a[r] = function () {
                    return this;
                }),
                    Array.from(a, function () {
                        throw 2;
                    });
            } catch (e) {}
            e.exports = function (e, t) {
                if (!t && !o) return !1;
                var n = !1;
                try {
                    var i = {};
                    (i[r] = function () {
                        return {
                            next: function () {
                                return { done: (n = !0) };
                            },
                        };
                    }),
                        e(i);
                } catch (e) {}
                return n;
            };
        },
        function (e, t, n) {
            var r = n(4),
                o = n(67);
            e.exports = function (e, t, n) {
                var i, a;
                return (
                    o &&
                        'function' == typeof (i = t.constructor) &&
                        i !== n &&
                        r((a = i.prototype)) &&
                        a !== n.prototype &&
                        o(e, a),
                    e
                );
            };
        },
        function (e, t, n) {
            'use strict';
            var r = n(8).f,
                o = n(35),
                i = n(146),
                a = n(52),
                c = n(105),
                s = n(100),
                u = n(65),
                l = n(109),
                p = n(5),
                f = n(99).fastKey,
                d = n(28),
                v = d.set,
                y = d.getterFor;
            e.exports = {
                getConstructor: function (e, t, n, u) {
                    var l = e(function (e, r) {
                            c(e, l, t),
                                v(e, {
                                    type: t,
                                    index: o(null),
                                    first: void 0,
                                    last: void 0,
                                    size: 0,
                                }),
                                p || (e.size = 0),
                                null != r && s(r, e[u], e, n);
                        }),
                        d = y(t),
                        h = function (e, t, n) {
                            var r,
                                o,
                                i = d(e),
                                a = m(e, t);
                            return (
                                a
                                    ? (a.value = n)
                                    : ((i.last = a = {
                                          index: (o = f(t, !0)),
                                          key: t,
                                          value: n,
                                          previous: (r = i.last),
                                          next: void 0,
                                          removed: !1,
                                      }),
                                      i.first || (i.first = a),
                                      r && (r.next = a),
                                      p ? i.size++ : e.size++,
                                      'F' !== o && (i.index[o] = a)),
                                e
                            );
                        },
                        m = function (e, t) {
                            var n,
                                r = d(e),
                                o = f(t);
                            if ('F' !== o) return r.index[o];
                            for (n = r.first; n; n = n.next)
                                if (n.key == t) return n;
                        };
                    return (
                        i(l.prototype, {
                            clear: function () {
                                for (
                                    var e = d(this), t = e.index, n = e.first;
                                    n;

                                )
                                    (n.removed = !0),
                                        n.previous &&
                                            (n.previous = n.previous.next = void 0),
                                        delete t[n.index],
                                        (n = n.next);
                                (e.first = e.last = void 0),
                                    p ? (e.size = 0) : (this.size = 0);
                            },
                            delete: function (e) {
                                var t = d(this),
                                    n = m(this, e);
                                if (n) {
                                    var r = n.next,
                                        o = n.previous;
                                    delete t.index[n.index],
                                        (n.removed = !0),
                                        o && (o.next = r),
                                        r && (r.previous = o),
                                        t.first == n && (t.first = r),
                                        t.last == n && (t.last = o),
                                        p ? t.size-- : this.size--;
                                }
                                return !!n;
                            },
                            forEach: function (e) {
                                for (
                                    var t,
                                        n = d(this),
                                        r = a(
                                            e,
                                            arguments.length > 1
                                                ? arguments[1]
                                                : void 0,
                                            3
                                        );
                                    (t = t ? t.next : n.first);

                                )
                                    for (
                                        r(t.value, t.key, this);
                                        t && t.removed;

                                    )
                                        t = t.previous;
                            },
                            has: function (e) {
                                return !!m(this, e);
                            },
                        }),
                        i(
                            l.prototype,
                            n
                                ? {
                                      get: function (e) {
                                          var t = m(this, e);
                                          return t && t.value;
                                      },
                                      set: function (e, t) {
                                          return h(this, 0 === e ? 0 : e, t);
                                      },
                                  }
                                : {
                                      add: function (e) {
                                          return h(
                                              this,
                                              (e = 0 === e ? 0 : e),
                                              e
                                          );
                                      },
                                  }
                        ),
                        p &&
                            r(l.prototype, 'size', {
                                get: function () {
                                    return d(this).size;
                                },
                            }),
                        l
                    );
                },
                setStrong: function (e, t, n) {
                    var r = t + ' Iterator',
                        o = y(t),
                        i = y(r);
                    u(
                        e,
                        t,
                        function (e, t) {
                            v(this, {
                                type: r,
                                target: e,
                                state: o(e),
                                kind: t,
                                last: void 0,
                            });
                        },
                        function () {
                            for (
                                var e = i(this), t = e.kind, n = e.last;
                                n && n.removed;

                            )
                                n = n.previous;
                            return e.target &&
                                (e.last = n = n ? n.next : e.state.first)
                                ? 'keys' == t
                                    ? { value: n.key, done: !1 }
                                    : 'values' == t
                                    ? { value: n.value, done: !1 }
                                    : { value: [n.key, n.value], done: !1 }
                                : ((e.target = void 0),
                                  { value: void 0, done: !0 });
                        },
                        n ? 'entries' : 'values',
                        !n,
                        !0
                    ),
                        l(t);
                },
            };
        },
        function (e, t, n) {
            'use strict';
            var r = n(30),
                o = n(8),
                i = n(2),
                a = n(5),
                c = i('species');
            e.exports = function (e) {
                var t = r(e),
                    n = o.f;
                a &&
                    t &&
                    !t[c] &&
                    n(t, c, {
                        configurable: !0,
                        get: function () {
                            return this;
                        },
                    });
            };
        },
        function (e, t, n) {
            var r = n(46),
                o = n(20),
                i = function (e) {
                    return function (t, n) {
                        var i,
                            a,
                            c = String(o(t)),
                            s = r(n),
                            u = c.length;
                        return s < 0 || s >= u
                            ? e
                                ? ''
                                : void 0
                            : (i = c.charCodeAt(s)) < 55296 ||
                              i > 56319 ||
                              s + 1 === u ||
                              (a = c.charCodeAt(s + 1)) < 56320 ||
                              a > 57343
                            ? e
                                ? c.charAt(s)
                                : i
                            : e
                            ? c.slice(s, s + 2)
                            : a - 56320 + ((i - 55296) << 10) + 65536;
                    };
                };
            e.exports = { codeAt: i(!1), charAt: i(!0) };
        },
        function (e, t) {
            e.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0,
            };
        },
        function (e, t, n) {
            var r = n(2);
            t.f = r;
        },
        function (e, t, n) {
            var r = n(87),
                o = n(7),
                i = n(112),
                a = n(8).f;
            e.exports = function (e) {
                var t = r.Symbol || (r.Symbol = {});
                o(t, e) || a(t, e, { value: i.f(e) });
            };
        },
        function (e, t, n) {
            'use strict';
            var r = n(1);
            e.exports = function (e, t) {
                var n = [][e];
                return (
                    !!n &&
                    r(function () {
                        n.call(
                            null,
                            t ||
                                function () {
                                    throw 1;
                                },
                            1
                        );
                    })
                );
            };
        },
        function (e, t, n) {
            'use strict';
            var r = n(1);
            function o(e, t) {
                return RegExp(e, t);
            }
            (t.UNSUPPORTED_Y = r(function () {
                var e = o('a', 'y');
                return (e.lastIndex = 2), null != e.exec('abcd');
            })),
                (t.BROKEN_CARET = r(function () {
                    var e = o('^r', 'gy');
                    return (e.lastIndex = 2), null != e.exec('str');
                }));
        },
        function (e, t, n) {
            'use strict';
            var r = n(98),
                o = n(108);
            e.exports = r(
                'Set',
                function (e) {
                    return function () {
                        return e(
                            this,
                            arguments.length ? arguments[0] : void 0
                        );
                    };
                },
                o
            );
        },
        function (e, t, n) {
            'use strict';
            var r = n(54).forEach,
                o = n(114),
                i = n(38),
                a = o('forEach'),
                c = i('forEach');
            e.exports =
                a && c
                    ? [].forEach
                    : function (e) {
                          return r(
                              this,
                              e,
                              arguments.length > 1 ? arguments[1] : void 0
                          );
                      };
        },
        function (e, t, n) {
            e.exports = n(152)();
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Informació que recopilem',
                    description:
                        'Aquí podeu veure i personalitzar la informació que recopilem sobre vós.\n',
                    privacyPolicy: {
                        name: 'política de privadesa',
                        text:
                            'Per a més informació, consulteu la nostra {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Hi ha hagut canvis des de la vostra darrera visita. Actualitzeu el vostre consentiment.',
                    description:
                        'Recopilem i processem la vostra informació personal amb les següents finalitats: {purposes}.\n',
                    learnMore: 'Saber-ne més',
                    privacyPolicy: { name: 'política de privadesa' },
                    imprint: { name: 'Empremta' },
                },
                ok: 'Accepta',
                save: 'Desa',
                decline: 'Rebutja',
                close: 'Tanca',
                app: {
                    disableAll: {
                        title: 'Habilita/deshabilita totes les aplicacions',
                        description:
                            'Useu aquest botó per a habilitar o deshabilitar totes les aplicacions.',
                    },
                    optOut: {
                        title: '(opt-out)',
                        description:
                            'Aquesta aplicació es carrega per defecte, però podeu desactivar-la',
                    },
                    required: {
                        title: '(necessària)',
                        description: 'Aquesta aplicació es necessita sempre',
                    },
                    purposes: 'Finalitats',
                    purpose: 'Finalitat',
                },
                poweredBy: 'Funciona amb Klaro!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Informationer, som vi gemmer',
                    description:
                        'Her kan du se og ændre, hvilke informationer vi gemmer om dig.\n',
                    privacyPolicy: {
                        name:
                            'Flere informationer finde du under {privacyPolicy}.',
                        text: 'databeskyttelseserklæring\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Der har været ændringer siden dit sidste besøg. Opdater dit valg.',
                    description:
                        'Vi gemmer og behandler dine personlige oplysninger til følgende formål: {purposes}.\n',
                    learnMore: 'Læs mere',
                    privacyPolicy: { name: 'Datenschutzerklärung' },
                },
                ok: 'Ok',
                save: 'Gem',
                decline: 'Afvis',
                close: 'Luk',
                acceptSelected: 'Tillad udvalgte',
                acceptAll: 'Tillad alle',
                app: {
                    disableAll: {
                        title: 'Aktiver/deaktiver alle applikatione',
                        description:
                            'Brug denne kontakt til at aktivere/deaktivere alle apps.',
                    },
                    optOut: {
                        title: 'Opt-Out',
                        description:
                            'Denne applikation indlæses som standard (men du kan deaktivere den).',
                    },
                    required: {
                        title: '(Altid nødvendig)',
                        description: 'Denne applikation er altid nødvendig.',
                    },
                    purposes: 'Formål',
                    purpose: 'Formål',
                },
                poweredBy: 'Realiseret med Klaro!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Informationen, die wir speichern',
                    description:
                        'Hier können Sie einsehen und anpassen, welche Information wir über Sie speichern.\n',
                    privacyPolicy: {
                        name: 'Datenschutzerklärung',
                        text:
                            'Weitere Details finden Sie in unserer {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Es gab Änderungen seit Ihrem letzten Besuch, bitte aktualisieren Sie Ihre Auswahl.',
                    description:
                        'Wir speichern und verarbeiten Ihre personenbezogenen Informationen für folgende Zwecke: {purposes}.\n',
                    learnMore: 'Mehr erfahren',
                    privacyPolicy: { name: 'Datenschutzerklärung' },
                    imprint: { name: 'Impressum' },
                },
                ok: 'OK',
                save: 'Speichern',
                decline: 'Ablehnen',
                close: 'Schließen',
                acceptSelected: 'Auswahl speichern',
                acceptAll: 'Allen zustimmen',
                app: {
                    disableAll: {
                        title: 'Alle Anwendungen aktivieren/deaktivieren',
                        description:
                            'Nutzen Sie diesen Schalter, um alle Apps zu aktivieren/deaktivieren.',
                    },
                    optOut: {
                        title: '(Opt-Out)',
                        description:
                            'Diese Anwendung wird standardmäßig geladen (Sie können diese aber deaktivieren)',
                    },
                    required: {
                        title: '(immer notwendig)',
                        description: 'Diese Anwendung wird immer benötigt',
                    },
                    purposes: 'Zwecke',
                    purpose: 'Zweck',
                },
                poweredBy: 'Realisiert mit Klaro!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Πληροφορίες που συλλέγουμε',
                    description:
                        'Εδώ μπορείς να δεις και να ρυθμίσεις τις πληροφορίες που συλλέγουμε σχετικά με εσένα\n',
                    privacyPolicy: {
                        name: 'Πολιτική Απορρήτου',
                        text:
                            'Για περισσότερες πληροφορίες, παρακαλώ διαβάστε την {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Πραγματοποιήθηκαν αλλαγές μετά την τελευταία σας επίσκεψη παρακαλούμε ανανεώστε την συγκατάθεση σας',
                    description:
                        'Συγκεντρώνουμε και επεξεργαζόμαστε τα προσωπικά δεδομένα σας για τους παρακάτω λόγους: {purposes}.\n',
                    learnMore: 'Περισσότερα',
                    privacyPolicy: { name: 'Πολιτική Απορρήτου' },
                },
                ok: 'OK',
                save: 'Αποθήκευση',
                decline: 'Απόρριπτω',
                close: 'Κλείσιμο',
                app: {
                    disableAll: {
                        title: 'Για όλες τις εφαρμογές',
                        description:
                            'Χρησιμοποίησε αυτό τον διακόπτη για να ενεργοποιήσεις/απενεργοποιήσεις όλες τις εφαρμογές',
                    },
                    optOut: {
                        title: '(μη απαιτούμενο)',
                        description:
                            'Είναι προκαθορισμένο να φορτώνεται, άλλα μπορεί να παραληφθεί',
                    },
                    required: {
                        title: '(απαιτούμενο)',
                        description:
                            'Δεν γίνεται να λειτουργήσει σωστά η εφαρμογή χωρίς αυτό',
                    },
                    purposes: 'Σκοποί',
                    purpose: 'Σκοπός',
                },
                poweredBy: 'Υποστηρίζεται από το Klaro!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Information that we collect',
                    description:
                        'Here you can see and customize the information that we collect about you.\n',
                    privacyPolicy: {
                        name: 'privacy policy',
                        text:
                            'To learn more, please read our {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'There were changes since your last visit, please update your consent.',
                    description:
                        'We collect and process your personal information for the following purposes: {purposes}.\n',
                    learnMore: 'Customize',
                    privacyPolicy: { name: 'privacy policy' },
                    imprint: { name: 'Imprint' },
                },
                ok: 'Accept',
                save: 'Save',
                decline: 'Decline',
                close: 'Close',
                acceptAll: 'Accept all',
                acceptSelected: 'Accept selected',
                purposeItem: { app: 'app', apps: 'apps' },
                app: {
                    disableAll: {
                        title: 'Toggle all apps',
                        description:
                            'Use this switch to enable/disable all apps.',
                    },
                    optOut: {
                        title: '(opt-out)',
                        description:
                            'This app is loaded by default (but you can opt out)',
                    },
                    required: {
                        title: '(always required)',
                        description: 'This application is always required',
                    },
                    purposes: 'Purposes',
                    purpose: 'Purpose',
                },
                poweredBy: 'Powered by Klaro!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Información que recopilamos',
                    description:
                        'Aquí puede ver y personalizar la información que recopilamos sobre usted.\n',
                    privacyPolicy: {
                        name: 'política de privacidad',
                        text:
                            'Para más información consulte nuestra {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Ha habido cambios desde su última visita, por favor, actualice su consentimiento.',
                    description:
                        'Recopilamos y procesamos su información personal con los siguientes fines: {purposes}.\n',
                    learnMore: 'Más información',
                    privacyPolicy: { name: 'política de privacidad' },
                    imprint: { name: 'Imprimir' },
                },
                ok: 'Aceptar',
                save: 'Guardar',
                decline: 'Rechazar',
                close: 'Cerrar',
                app: {
                    disableAll: {
                        title: 'Habilitar/deshabilitar todas las aplicaciones',
                        description:
                            'Use este botón para habilitar o deshabilitar todas las aplicaciones.',
                    },
                    optOut: {
                        title: '(opt-out)',
                        description:
                            'Esta aplicación se carga de forma predeterminada (pero puede desactivarla)',
                    },
                    required: {
                        title: '(necesaria)',
                        description: 'Esta aplicación se necesita siempre',
                    },
                    purposes: 'Fines',
                    purpose: 'Fin',
                },
                poweredBy: 'Powered by Klaro!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Keräämämme tiedot',
                    description:
                        'Voit tarkastella ja muokata sinusta keräämiämme tietoja.\n',
                    privacyPolicy: {
                        name: 'tietosuojasivultamme',
                        text: 'Voit lukea lisätietoja {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Olemme tehneet muutoksia ehtoihin viime vierailusi jälkeen, tarkista ehdot.',
                    description:
                        'Keräämme ja käsittelemme henkilötietoja seuraaviin tarkoituksiin: {purposes}.\n',
                    learnMore: 'Lue lisää',
                    privacyPolicy: { name: 'tietosuojasivultamme' },
                },
                ok: 'Hyväksy',
                save: 'Tallenna',
                decline: 'Hylkää',
                close: 'Sulje',
                app: {
                    disableAll: {
                        title: 'Valitse kaikki',
                        description: 'Aktivoi kaikki päälle/pois.',
                    },
                    optOut: {
                        title: '(ladataan oletuksena)',
                        description:
                            'Ladataan oletuksena (mutta voit ottaa sen pois päältä)',
                    },
                    required: {
                        title: '(vaaditaan)',
                        description: 'Sivusto vaatii tämän aina',
                    },
                    purposes: 'Käyttötarkoitukset',
                    purpose: 'Käyttötarkoitus',
                },
                poweredBy: 'Palvelun tarjoaa Klaro!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Les informations que nous collectons',
                    description:
                        'Ici, vous pouvez voir et personnaliser les informations que nous collectons sur vous.\n',
                    privacyPolicy: {
                        name: 'politique de confidentialité',
                        text:
                            'Pour en savoir plus, merci de lire notre {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Des modifications ont eu lieu depuis votre dernière visite, merci de mettre à jour votre consentement.',
                    description:
                        'Nous collectons et traitons vos informations personnelles dans le but suivant : {purposes}.\n',
                    learnMore: 'En savoir plus',
                    privacyPolicy: { name: 'politique de confidentialité' },
                    imprint: { name: 'Imprimer' },
                },
                ok: 'OK',
                save: 'Sauvegarder',
                decline: 'Refuser',
                close: 'Fermer',
                acceptAll: 'Tout accepter',
                acceptSelected: 'Accepter la sélection',
                app: {
                    disableAll: {
                        title: 'Changer toutes les options',
                        description:
                            'Utiliser ce bouton pour activer/désactiver toutes les options',
                    },
                    optOut: {
                        title: '(opt-out)',
                        description:
                            'Cette application est chargée par défaut (mais vous pouvez la désactiver)',
                    },
                    required: {
                        title: '(toujours requis)',
                        description: 'Cette application est toujours requise',
                    },
                    purposes: 'Utilisations',
                    purpose: 'Utilisation',
                },
                poweredBy: 'Propulsé par Klaro!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Információk, amiket gyűjtünk',
                    description:
                        'Itt láthatod és testreszabhatod az rólad gyűjtött információkat.\n',
                    privacyPolicy: {
                        name: 'adatvédelmi irányelveinket',
                        text:
                            'További információért kérjük, olvassd el az {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Az utolsó látogatás óta változások történtek, kérjük, frissítsd a hozzájárulásodat.',
                    description:
                        'Az személyes adataidat összegyűjtjük és feldolgozzuk az alábbi célokra: {purposes}.\n',
                    learnMore: 'Tudj meg többet',
                    privacyPolicy: { name: 'adatvédelmi irányelveinket' },
                },
                ok: 'Elfogad',
                save: 'Save',
                decline: 'Mentés',
                close: 'Elvet',
                app: {
                    disableAll: {
                        title: 'Összes app átkapcsolása',
                        description:
                            'Használd ezt a kapcsolót az összes alkalmazás engedélyezéséhez/letiltásához.',
                    },
                    optOut: {
                        title: '(leiratkozás)',
                        description:
                            'Ez az alkalmazás alapértelmezés szerint betöltött (de ki lehet kapcsolni)',
                    },
                    required: {
                        title: '(mindig kötelező)',
                        description: 'Ez az alkalmazás mindig kötelező',
                    },
                    purposes: 'Célok',
                    purpose: 'Cél',
                },
                poweredBy: 'Powered by Klaro!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Informacije koje prikupljamo',
                    description:
                        'Ovdje možete vidjeti i podesiti informacije koje prikupljamo o Vama.\n',
                    privacyPolicy: {
                        name: 'pravila privatnosti',
                        text:
                            'Za više informacije pročitajte naša {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Došlo je do promjena od Vaše posljednjeg posjećivanja web stranice, molimo Vas da ažurirate svoja odobrenja.',
                    description:
                        'Mi prikupljamo i procesiramo Vaše osobne podatke radi slijedećeg: {purposes}.\n',
                    learnMore: 'Saznajte više',
                    privacyPolicy: { name: 'pravila privatnosti' },
                },
                ok: 'U redu',
                save: 'Spremi',
                decline: 'Odbij',
                close: 'Zatvori',
                app: {
                    disableAll: {
                        title: 'Izmeijeni sve',
                        description:
                            'Koristite ovaj prekidač da omogućite/onemogućite sve aplikacije odjednom.',
                    },
                    optOut: {
                        title: '(onemogućite)',
                        description:
                            'Ova aplikacija je učitana automatski (ali je možete onemogućiti)',
                    },
                    required: {
                        title: '(obavezna)',
                        description: 'Ova aplikacija je uvijek obavezna.',
                    },
                    purposes: 'Svrhe',
                    purpose: 'Svrha',
                },
                poweredBy: 'Pokreće Klaro!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Informazioni che raccogliamo',
                    description:
                        'Qui puoi vedere e scegliere le informazioni che raccogliamo su di te.\n',
                    privacyPolicy: {
                        name: 'policy privacy',
                        text:
                            'Per saperne di più, leggi la nostra {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Ci sono stati cambiamenti dalla tua ultima visita, aggiorna il tuo consenso.',
                    description:
                        'Raccogliamo ed elaboriamo le vostre informazioni personali per i seguenti scopi: {purposes}.\n',
                    learnMore: 'Scopri di più',
                    privacyPolicy: { name: 'policy privacy' },
                    imprint: { name: 'Impronta' },
                },
                ok: 'OK',
                save: 'Salva',
                decline: 'Rifiuta',
                close: 'Chiudi',
                app: {
                    disableAll: {
                        title: 'Cambia per tutte le app',
                        description:
                            'Usa questo interruttore per abilitare/disabilitare tutte le app.',
                    },
                    optOut: {
                        title: '(opt-out)',
                        description:
                            "Quest'applicazione è caricata di default (ma puoi disattivarla)",
                    },
                    required: {
                        title: '(sempre richiesto)',
                        description: "Quest'applicazione è sempre richiesta",
                    },
                    purposes: 'Scopi',
                    purpose: 'Scopo',
                },
                poweredBy: 'Realizzato da Klaro!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Informatie die we verzamelen',
                    description:
                        'Hier kunt u de informatie bekijken en aanpassen die we over u verzamelen.\n',
                    privacyPolicy: {
                        name: 'privacybeleid',
                        text:
                            'Lees ons privacybeleid voor meer informatie {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Er waren wijzigingen sinds uw laatste bezoek, werk uw voorkeuren bij.',
                    description:
                        'Wij verzamelen en verwerken uw persoonlijke gegevens voor de volgende doeleinden: {purposes}.\n',
                    learnMore: 'Lees meer',
                    privacyPolicy: { name: 'privacybeleid' },
                    imprint: { name: 'Afdruk' },
                },
                ok: 'OK',
                save: 'Opslaan',
                decline: 'Afwijzen',
                close: 'Sluiten',
                app: {
                    disableAll: {
                        title: 'Alle opties in/uit schakelen',
                        description:
                            'Gebruik deze schakeloptie om alle apps in/uit te schakelen.',
                    },
                    optOut: {
                        title: '(afmelden)',
                        description:
                            'Deze app is standaard geladen (maar je kunt je afmelden)',
                    },
                    required: {
                        title: '(altijd verplicht)',
                        description: 'Deze applicatie is altijd vereist',
                    },
                    purposes: 'Doeleinden',
                    purpose: 'Doeleinde',
                },
                poweredBy: 'Aangedreven door Klaro!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Informasjon vi samler inn',
                    description:
                        'Her kan du se og velge hvilken informasjon vi samler inn om deg.\n',
                    privacyPolicy: {
                        name: 'personvernerklæring',
                        text:
                            'For å lære mer, vennligst les vår {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Det har skjedd endringer siden ditt siste besøk, vennligst oppdater ditt samtykke.',
                    description:
                        'Vi samler inn og prosesserer din personlige informasjon av følgende årsaker: {purposes}.\n',
                    learnMore: 'Lær mer',
                    privacyPolicy: { name: 'personvernerklæring' },
                },
                ok: 'OK',
                save: 'Opslaan',
                decline: 'Avslå',
                acceptAll: 'Godtar alle',
                acceptSelected: 'Godtar valgt',
                app: {
                    disableAll: {
                        title: 'Bytt alle apper',
                        description: 'Bruk denne for å skru av/på alle apper.',
                    },
                    optOut: {
                        title: '(opt-out)',
                        description:
                            'Denne appen er lastet som standard (men du kan skru det av)',
                    },
                    required: {
                        title: '(alltid påkrevd)',
                        description: 'Denne applikasjonen er alltid påkrevd',
                    },
                    purposes: 'Årsaker',
                    purpose: 'Årsak',
                },
                poweredBy: 'Laget med Klaro!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Informațiile pe care le colectăm',
                    description:
                        'Aici puteți vedea și personaliza informațiile pe care le colectăm despre dvs.\n',
                    privacyPolicy: {
                        name: 'politica privacy',
                        text:
                            'Pentru a afla mai multe, vă rugăm să citiți {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Au existat modificări de la ultima vizită, vă rugăm să actualizați consimțământul.',
                    description:
                        'Colectăm și procesăm informațiile dvs. personale în următoarele scopuri: {purposes}.\n',
                    learnMore: 'Află mai multe',
                    privacyPolicy: { name: 'politica privacy' },
                },
                ok: 'OK',
                save: 'Salvează',
                decline: 'Renunță',
                app: {
                    disableAll: {
                        title: 'Comutați între toate aplicațiile',
                        description:
                            'Utilizați acest switch pentru a activa/dezactiva toate aplicațiile.',
                    },
                    optOut: {
                        title: '(opt-out)',
                        description:
                            'Această aplicație este încărcată în mod implicit (dar puteți renunța)',
                    },
                    required: {
                        title: '(întotdeauna necesar)',
                        description:
                            'Această aplicație este întotdeauna necesară',
                    },
                    purposes: 'Scopuri',
                    purpose: 'Scop',
                },
                poweredBy: 'Realizat de Klaro!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Informacije koje prikupljamo',
                    description:
                        'Ovde možete videti i podesiti informacije koje prikupljamo o Vama.\n',
                    privacyPolicy: {
                        name: 'politiku privatnosti',
                        text:
                            'Za više informacije pročitajte našu {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Došlo je do promena od Vaše poslednje posete, molimo Vas da ažurirate svoja odobrenja.',
                    description:
                        'Mi prikupljamo i procesiramo Vaše lične podatke radi sledećeg: {purposes}.\n',
                    learnMore: 'Saznajte više',
                    privacyPolicy: { name: 'politiku privatnosti' },
                },
                ok: 'U redu',
                save: 'Sačuvaj',
                decline: 'Odbij',
                close: 'Zatvori',
                app: {
                    disableAll: {
                        title: 'Izmeni sve',
                        description:
                            'Koristite ovaj prekidač da omogućite/onesposobite sve aplikacije odjednom.',
                    },
                    optOut: {
                        title: '(onesposobite)',
                        description:
                            'Ova aplikacija je učitana automatski (ali je možete onesposobiti)',
                    },
                    required: {
                        title: '(neophodna)',
                        description: 'Ova aplikacija je uvek neophodna.',
                    },
                    purposes: 'Svrhe',
                    purpose: 'Svrha',
                },
                poweredBy: 'Pokreće Klaro!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Информације које прикупљамо',
                    description:
                        'Овде можете видет и подесити информације које прикупљамо о Вама.\n',
                    privacyPolicy: {
                        name: 'политику приватности',
                        text:
                            'За више информација прочитајте нашу {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Дошло је до промена од Ваше последнје посете, молимо Вас да ажурирате своја одобрења.',
                    description:
                        'Ми прикупљамо и процесирамо Ваше личне податке ради следећег: {purposes}.\n',
                    learnMore: 'Сазнајте више',
                    privacyPolicy: { name: 'политику приватности' },
                },
                ok: 'У реду',
                save: 'Сачувај',
                decline: 'Одбиј',
                close: 'Затвори',
                app: {
                    disableAll: {
                        title: 'Измени све',
                        description:
                            'Користите овај прекидач да омогућите/онеспособите све апликације одједном.',
                    },
                    optOut: {
                        title: '(онеспособите)',
                        description:
                            'Ова апликација је учитана аутоматски (али је можете онеспособити)',
                    },
                    required: {
                        title: '(неопходна)',
                        description: 'Ова апликација је увек неопходна.',
                    },
                    purposes: 'Сврхе',
                    purpose: 'Сврха',
                },
                poweredBy: 'Покреће Кларо!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Information som vi samlar',
                    description:
                        'Här kan du se och anpassa vilken information vi samlar om dig.\n',
                    privacyPolicy: {
                        name: 'Integritetspolicy',
                        text: 'För att veta mer, läs vår {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Det har skett förändringar sedan ditt senaste besök, var god uppdatera ditt medgivande.',
                    description:
                        'Vi samlar och bearbetar din personliga data i följande syften: {purposes}.\n',
                    learnMore: 'Läs mer',
                    privacyPolicy: { name: 'Integritetspolicy' },
                },
                ok: 'OK',
                save: 'Spara',
                decline: 'Avböj',
                acceptAll: 'Acceptera alla',
                acceptSelected: 'Acceptera markerat',
                close: 'Stäng',
                app: {
                    disableAll: {
                        title: 'Ändra för alla appar',
                        description:
                            'Använd detta reglage för att aktivera/avaktivera samtliga appar.',
                    },
                    optOut: {
                        title: '(Avaktivera)',
                        description:
                            'Den här appen laddas som standardinställning (men du kan avaktivera den)',
                    },
                    required: {
                        title: '(Krävs alltid)',
                        description: 'Den här applikationen krävs alltid',
                    },
                    purposes: 'Syften',
                    purpose: 'Syfte',
                },
                poweredBy: 'Körs på Klaro!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Sakladığımız bilgiler',
                    description:
                        'Hakkınızda topladığımız bilgileri burada görebilir ve özelleştirebilirsiniz.\n',
                    privacyPolicy: {
                        name: 'Gizlilik Politikası',
                        text:
                            'Daha fazlası için lütfen {privacyPolicy} sayfamızı okuyun.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Son ziyaretinizden bu yana değişiklikler oldu, lütfen seçiminizi güncelleyin.',
                    description:
                        'Kişisel bilgilerinizi aşağıdaki amaçlarla saklıyor ve işliyoruz: {purposes}.\n',
                    learnMore: 'Daha fazla bilgi',
                    privacyPolicy: { name: 'Gizlilik Politikası' },
                },
                ok: 'Tamam',
                save: 'Kaydet',
                decline: 'Reddet',
                close: 'Kapat',
                app: {
                    disableAll: {
                        title: 'Tüm uygulamaları aç/kapat',
                        description:
                            'Toplu açma/kapama için bu düğmeyi kullanabilirsin.',
                    },
                    optOut: {
                        title: '(isteğe bağlı)',
                        description:
                            'Bu uygulama varsayılanda yüklendi (ancak iptal edebilirsin)',
                    },
                    required: {
                        title: '(her zaman gerekli)',
                        description: 'Bu uygulama her zaman gerekli',
                    },
                    purposes: 'Amaçlar',
                    purpose: 'Amaç',
                },
                poweredBy: 'Klaro tarafından geliştirildi!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Informacje, które zbieramy',
                    description:
                        'Tutaj możesz zobaczyć i dostosować informacje, które zbieramy o Tobie.\n',
                    privacyPolicy: {
                        name: 'polityka prywatności',
                        text:
                            'Aby dowiedzieć się więcej, przeczytaj naszą {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Nastąpiły zmiany od Twojej ostatniej wizyty, zaktualizuj swoją zgodę.',
                    description:
                        'Zbieramy i przetwarzamy dane osobowe w następujących celach: {purposes}.\n',
                    learnMore: 'Dowiedz się więcej',
                    privacyPolicy: { name: 'polityka prywatności' },
                    imprint: { name: 'Odcisk' },
                },
                ok: 'OK',
                save: 'Zapisz',
                decline: 'Rezygnacja',
                close: 'Zamknij',
                app: {
                    disableAll: {
                        title: 'Przełącz dla wszystkich aplikacji',
                        description:
                            'Użyj przełącznika, aby włączyć/wyłączyć wszystkie aplikacje.',
                    },
                    optOut: {
                        title: '(rezygnacja)',
                        description:
                            'Ta aplikacja jest domyślnie ładowana (ale możesz zrezygnować)',
                    },
                    required: {
                        title: '(zawsze wymagane)',
                        description: 'Ta alikacja jest zawsze wymagana',
                    },
                    purposes: 'Cele',
                    purpose: 'Cel',
                },
                poweredBy: 'Napędzany przez Klaro!',
            };
        },
        function (e, t) {
            e.exports = {
                consentModal: {
                    title: 'Информация, которую мы сохраняем',
                    description:
                        'Здесь вы можете просмотреть и настроить, какую информацию о вас мы храним.\n',
                    privacyPolicy: {
                        name: 'Соглашение',
                        text:
                            'Чтобы узнать больше, пожалуйста, прочитайте наше {privacyPolicy}.\n',
                    },
                },
                consentNotice: {
                    changeDescription:
                        'Со времени вашего последнего визита произошли изменения, обновите своё согласие.',
                    description:
                        'Мы собираем и обрабатываем вашу личную информацию для следующих целей: {purposes}.\n',
                    learnMore: 'Настроить',
                    privacyPolicy: { name: 'политика конфиденциальности' },
                },
                ok: 'Принять',
                save: 'Сохранить',
                decline: 'Отклонить',
                close: 'Закрыть',
                acceptAll: 'Принять всё',
                acceptSelected: 'Принять выбранные',
                app: {
                    disableAll: {
                        title: 'Переключить все приложения',
                        description:
                            'Используйте этот переключатель, чтобы включить/отключить все приложения.',
                    },
                    optOut: {
                        title: '(отказаться)',
                        description:
                            'Это приложение включено по умолчанию (но вы можете отказаться)',
                    },
                    required: {
                        title: '(всегда обязательный)',
                        description: 'Это обязательное приложение',
                    },
                    purposes: 'Намерения',
                    purpose: 'Намерение',
                },
                poweredBy: 'Работает на Кларо!',
            };
        },
        function (e, t) {
            var n;
            n = (function () {
                return this;
            })();
            try {
                n = n || new Function('return this')();
            } catch (e) {
                'object' == typeof window && (n = window);
            }
            e.exports = n;
        },
        function (e, t, n) {
            var r = n(3),
                o = n(83),
                i = r.WeakMap;
            e.exports = 'function' == typeof i && /native code/.test(o(i));
        },
        function (e, t, n) {
            var r = n(5),
                o = n(8),
                i = n(6),
                a = n(50);
            e.exports = r
                ? Object.defineProperties
                : function (e, t) {
                      i(e);
                      for (var n, r = a(t), c = r.length, s = 0; c > s; )
                          o.f(e, (n = r[s++]), t[n]);
                      return e;
                  };
        },
        function (e, t, n) {
            var r = n(30);
            e.exports = r('document', 'documentElement');
        },
        function (e, t, n) {
            'use strict';
            var r = n(96).IteratorPrototype,
                o = n(35),
                i = n(32),
                a = n(51),
                c = n(36),
                s = function () {
                    return this;
                };
            e.exports = function (e, t, n) {
                var u = t + ' Iterator';
                return (
                    (e.prototype = o(r, { next: i(1, n) })),
                    a(e, u, !1, !0),
                    (c[u] = s),
                    e
                );
            };
        },
        function (e, t, n) {
            var r = n(4);
            e.exports = function (e) {
                if (!r(e) && null !== e)
                    throw TypeError(
                        "Can't set " + String(e) + ' as a prototype'
                    );
                return e;
            };
        },
        function (e, t, n) {
            var r = n(1);
            e.exports = !r(function () {
                return Object.isExtensible(Object.preventExtensions({}));
            });
        },
        function (e, t, n) {
            var r = n(21);
            e.exports = function (e, t, n) {
                for (var o in t) r(e, o, t[o], n);
                return e;
            };
        },
        function (e, t, n) {
            'use strict';
            var r = n(69),
                o = n(103);
            e.exports = r
                ? {}.toString
                : function () {
                      return '[object ' + o(this) + ']';
                  };
        },
        function (e, t, n) {},
        function (e, t, n) {
            var r = n(15),
                o = n(45).f,
                i = {}.toString,
                a =
                    'object' == typeof window &&
                    window &&
                    Object.getOwnPropertyNames
                        ? Object.getOwnPropertyNames(window)
                        : [];
            e.exports.f = function (e) {
                return a && '[object Window]' == i.call(e)
                    ? (function (e) {
                          try {
                              return o(e);
                          } catch (e) {
                              return a.slice();
                          }
                      })(e)
                    : o(r(e));
            };
        },
        function (e, t, n) {
            'use strict';
            var r = n(53),
                o = n(4),
                i = [].slice,
                a = {},
                c = function (e, t, n) {
                    if (!(t in a)) {
                        for (var r = [], o = 0; o < t; o++)
                            r[o] = 'a[' + o + ']';
                        a[t] = Function(
                            'C,a',
                            'return new C(' + r.join(',') + ')'
                        );
                    }
                    return a[t](e, n);
                };
            e.exports =
                Function.bind ||
                function (e) {
                    var t = r(this),
                        n = i.call(arguments, 1),
                        a = function () {
                            var r = n.concat(i.call(arguments));
                            return this instanceof a
                                ? c(t, r.length, r)
                                : t.apply(e, r);
                        };
                    return o(t.prototype) && (a.prototype = t.prototype), a;
                };
        },
        function (e, t, n) {
            var r = n(0),
                o = n(3),
                i = n(94),
                a = [].slice,
                c = function (e) {
                    return function (t, n) {
                        var r = arguments.length > 2,
                            o = r ? a.call(arguments, 2) : void 0;
                        return e(
                            r
                                ? function () {
                                      ('function' == typeof t
                                          ? t
                                          : Function(t)
                                      ).apply(this, o);
                                  }
                                : t,
                            n
                        );
                    };
                };
            r(
                { global: !0, bind: !0, forced: /MSIE .\./.test(i) },
                { setTimeout: c(o.setTimeout), setInterval: c(o.setInterval) }
            );
        },
        function (e, t, n) {
            'use strict';
            var r = n(153);
            function o() {}
            function i() {}
            (i.resetWarningCache = o),
                (e.exports = function () {
                    function e(e, t, n, o, i, a) {
                        if (a !== r) {
                            var c = new Error(
                                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                            );
                            throw ((c.name = 'Invariant Violation'), c);
                        }
                    }
                    function t() {
                        return e;
                    }
                    e.isRequired = e;
                    var n = {
                        array: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        elementType: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t,
                        checkPropTypes: i,
                        resetWarningCache: o,
                    };
                    return (n.PropTypes = n), n;
                });
        },
        function (e, t, n) {
            'use strict';
            e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        },
        function (e, t, n) {
            'use strict';
            var r = n(5),
                o = n(1),
                i = n(50),
                a = n(62),
                c = n(58),
                s = n(22),
                u = n(41),
                l = Object.assign,
                p = Object.defineProperty;
            e.exports =
                !l ||
                o(function () {
                    if (
                        r &&
                        1 !==
                            l(
                                { b: 1 },
                                l(
                                    p({}, 'a', {
                                        enumerable: !0,
                                        get: function () {
                                            p(this, 'b', {
                                                value: 3,
                                                enumerable: !1,
                                            });
                                        },
                                    }),
                                    { b: 2 }
                                )
                            ).b
                    )
                        return !0;
                    var e = {},
                        t = {},
                        n = Symbol();
                    return (
                        (e[n] = 7),
                        'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                            t[e] = e;
                        }),
                        7 != l({}, e)[n] ||
                            'abcdefghijklmnopqrst' != i(l({}, t)).join('')
                    );
                })
                    ? function (e, t) {
                          for (
                              var n = s(e),
                                  o = arguments.length,
                                  l = 1,
                                  p = a.f,
                                  f = c.f;
                              o > l;

                          )
                              for (
                                  var d,
                                      v = u(arguments[l++]),
                                      y = p ? i(v).concat(p(v)) : i(v),
                                      h = y.length,
                                      m = 0;
                                  h > m;

                              )
                                  (d = y[m++]),
                                      (r && !f.call(v, d)) || (n[d] = v[d]);
                          return n;
                      }
                    : l;
        },
        function (e, t, n) {
            'use strict';
            var r = n(52),
                o = n(22),
                i = n(104),
                a = n(101),
                c = n(13),
                s = n(48),
                u = n(102);
            e.exports = function (e) {
                var t,
                    n,
                    l,
                    p,
                    f,
                    d,
                    v = o(e),
                    y = 'function' == typeof this ? this : Array,
                    h = arguments.length,
                    m = h > 1 ? arguments[1] : void 0,
                    g = void 0 !== m,
                    b = u(v),
                    _ = 0;
                if (
                    (g && (m = r(m, h > 2 ? arguments[2] : void 0, 2)),
                    null == b || (y == Array && a(b)))
                )
                    for (n = new y((t = c(v.length))); t > _; _++)
                        (d = g ? m(v[_], _) : v[_]), s(n, _, d);
                else
                    for (
                        f = (p = b.call(v)).next, n = new y();
                        !(l = f.call(p)).done;
                        _++
                    )
                        (d = g ? i(p, m, [l.value, _], !0) : l.value),
                            s(n, _, d);
                return (n.length = _), n;
            };
        },
        function (e, t, n) {
            'use strict';
            var r,
                o = n(0),
                i = n(24).f,
                a = n(13),
                c = n(75),
                s = n(20),
                u = n(76),
                l = n(29),
                p = ''.endsWith,
                f = Math.min,
                d = u('endsWith');
            o(
                {
                    target: 'String',
                    proto: !0,
                    forced:
                        !!(
                            l ||
                            d ||
                            ((r = i(String.prototype, 'endsWith')),
                            !r || r.writable)
                        ) && !d,
                },
                {
                    endsWith: function (e) {
                        var t = String(s(this));
                        c(e);
                        var n = arguments.length > 1 ? arguments[1] : void 0,
                            r = a(t.length),
                            o = void 0 === n ? r : f(a(n), r),
                            i = String(e);
                        return p
                            ? p.call(t, i, o)
                            : t.slice(o - i.length, o) === i;
                    },
                }
            );
        },
        function (e, t, n) {
            'use strict';
            var r = n(77),
                o = n(6),
                i = n(13),
                a = n(20),
                c = n(78),
                s = n(79);
            r('match', 1, function (e, t, n) {
                return [
                    function (t) {
                        var n = a(this),
                            r = null == t ? void 0 : t[e];
                        return void 0 !== r
                            ? r.call(t, n)
                            : new RegExp(t)[e](String(n));
                    },
                    function (e) {
                        var r = n(t, e, this);
                        if (r.done) return r.value;
                        var a = o(e),
                            u = String(this);
                        if (!a.global) return s(a, u);
                        var l = a.unicode;
                        a.lastIndex = 0;
                        for (var p, f = [], d = 0; null !== (p = s(a, u)); ) {
                            var v = String(p[0]);
                            (f[d] = v),
                                '' === v &&
                                    (a.lastIndex = c(u, i(a.lastIndex), l)),
                                d++;
                        }
                        return 0 === d ? null : f;
                    },
                ];
            });
        },
        function (e, t, n) {
            'use strict';
            var r = n(0),
                o = n(117);
            r(
                { target: 'Array', proto: !0, forced: [].forEach != o },
                { forEach: o }
            );
        },
        function (e, t, n) {
            var r = n(0),
                o = n(1),
                i = n(15),
                a = n(24).f,
                c = n(5),
                s = o(function () {
                    a(1);
                });
            r(
                { target: 'Object', stat: !0, forced: !c || s, sham: !c },
                {
                    getOwnPropertyDescriptor: function (e, t) {
                        return a(i(e), t);
                    },
                }
            );
        },
        function (e, t, n) {
            var r = n(0),
                o = n(5),
                i = n(86),
                a = n(15),
                c = n(24),
                s = n(48);
            r(
                { target: 'Object', stat: !0, sham: !o },
                {
                    getOwnPropertyDescriptors: function (e) {
                        for (
                            var t,
                                n,
                                r = a(e),
                                o = c.f,
                                u = i(r),
                                l = {},
                                p = 0;
                            u.length > p;

                        )
                            void 0 !== (n = o(r, (t = u[p++]))) && s(l, t, n);
                        return l;
                    },
                }
            );
        },
        function (e, t, n) {
            'use strict';
            var r = n(77),
                o = n(6),
                i = n(22),
                a = n(13),
                c = n(46),
                s = n(20),
                u = n(78),
                l = n(79),
                p = Math.max,
                f = Math.min,
                d = Math.floor,
                v = /\$([$&'`]|\d\d?|<[^>]*>)/g,
                y = /\$([$&'`]|\d\d?)/g;
            r('replace', 2, function (e, t, n, r) {
                var h = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                    m = r.REPLACE_KEEPS_$0,
                    g = h ? '$' : '$0';
                return [
                    function (n, r) {
                        var o = s(this),
                            i = null == n ? void 0 : n[e];
                        return void 0 !== i
                            ? i.call(n, o, r)
                            : t.call(String(o), n, r);
                    },
                    function (e, r) {
                        if (
                            (!h && m) ||
                            ('string' == typeof r && -1 === r.indexOf(g))
                        ) {
                            var i = n(t, e, this, r);
                            if (i.done) return i.value;
                        }
                        var s = o(e),
                            d = String(this),
                            v = 'function' == typeof r;
                        v || (r = String(r));
                        var y = s.global;
                        if (y) {
                            var _ = s.unicode;
                            s.lastIndex = 0;
                        }
                        for (var k = []; ; ) {
                            var w = l(s, d);
                            if (null === w) break;
                            if ((k.push(w), !y)) break;
                            '' === String(w[0]) &&
                                (s.lastIndex = u(d, a(s.lastIndex), _));
                        }
                        for (var x, S = '', O = 0, j = 0; j < k.length; j++) {
                            w = k[j];
                            for (
                                var P = String(w[0]),
                                    A = p(f(c(w.index), d.length), 0),
                                    E = [],
                                    C = 1;
                                C < w.length;
                                C++
                            )
                                E.push(void 0 === (x = w[C]) ? x : String(x));
                            var z = w.groups;
                            if (v) {
                                var R = [P].concat(E, A, d);
                                void 0 !== z && R.push(z);
                                var T = String(r.apply(void 0, R));
                            } else T = b(P, d, A, E, z, r);
                            A >= O &&
                                ((S += d.slice(O, A) + T), (O = A + P.length));
                        }
                        return S + d.slice(O);
                    },
                ];
                function b(e, n, r, o, a, c) {
                    var s = r + e.length,
                        u = o.length,
                        l = y;
                    return (
                        void 0 !== a && ((a = i(a)), (l = v)),
                        t.call(c, l, function (t, i) {
                            var c;
                            switch (i.charAt(0)) {
                                case '$':
                                    return '$';
                                case '&':
                                    return e;
                                case '`':
                                    return n.slice(0, r);
                                case "'":
                                    return n.slice(s);
                                case '<':
                                    c = a[i.slice(1, -1)];
                                    break;
                                default:
                                    var l = +i;
                                    if (0 === l) return t;
                                    if (l > u) {
                                        var p = d(l / 10);
                                        return 0 === p
                                            ? t
                                            : p <= u
                                            ? void 0 === o[p - 1]
                                                ? i.charAt(1)
                                                : o[p - 1] + i.charAt(1)
                                            : t;
                                    }
                                    c = o[l - 1];
                            }
                            return void 0 === c ? '' : c;
                        })
                    );
                }
            });
        },
        function (e, t, n) {
            var r = n(3),
                o = n(111),
                i = n(117),
                a = n(16);
            for (var c in o) {
                var s = r[c],
                    u = s && s.prototype;
                if (u && u.forEach !== i)
                    try {
                        a(u, 'forEach', i);
                    } catch (e) {
                        u.forEach = i;
                    }
            }
        },
        function (e, t, n) {
            'use strict';
            var r = n(77),
                o = n(74),
                i = n(6),
                a = n(20),
                c = n(164),
                s = n(78),
                u = n(13),
                l = n(79),
                p = n(57),
                f = n(1),
                d = [].push,
                v = Math.min,
                y = !f(function () {
                    return !RegExp(4294967295, 'y');
                });
            r(
                'split',
                2,
                function (e, t, n) {
                    var r;
                    return (
                        (r =
                            'c' == 'abbc'.split(/(b)*/)[1] ||
                            4 != 'test'.split(/(?:)/, -1).length ||
                            2 != 'ab'.split(/(?:ab)*/).length ||
                            4 != '.'.split(/(.?)(.?)/).length ||
                            '.'.split(/()()/).length > 1 ||
                            ''.split(/.?/).length
                                ? function (e, n) {
                                      var r = String(a(this)),
                                          i =
                                              void 0 === n
                                                  ? 4294967295
                                                  : n >>> 0;
                                      if (0 === i) return [];
                                      if (void 0 === e) return [r];
                                      if (!o(e)) return t.call(r, e, i);
                                      for (
                                          var c,
                                              s,
                                              u,
                                              l = [],
                                              f =
                                                  (e.ignoreCase ? 'i' : '') +
                                                  (e.multiline ? 'm' : '') +
                                                  (e.unicode ? 'u' : '') +
                                                  (e.sticky ? 'y' : ''),
                                              v = 0,
                                              y = new RegExp(e.source, f + 'g');
                                          (c = p.call(y, r)) &&
                                          !(
                                              (s = y.lastIndex) > v &&
                                              (l.push(r.slice(v, c.index)),
                                              c.length > 1 &&
                                                  c.index < r.length &&
                                                  d.apply(l, c.slice(1)),
                                              (u = c[0].length),
                                              (v = s),
                                              l.length >= i)
                                          );

                                      )
                                          y.lastIndex === c.index &&
                                              y.lastIndex++;
                                      return (
                                          v === r.length
                                              ? (!u && y.test('')) || l.push('')
                                              : l.push(r.slice(v)),
                                          l.length > i ? l.slice(0, i) : l
                                      );
                                  }
                                : '0'.split(void 0, 0).length
                                ? function (e, n) {
                                      return void 0 === e && 0 === n
                                          ? []
                                          : t.call(this, e, n);
                                  }
                                : t),
                        [
                            function (t, n) {
                                var o = a(this),
                                    i = null == t ? void 0 : t[e];
                                return void 0 !== i
                                    ? i.call(t, o, n)
                                    : r.call(String(o), t, n);
                            },
                            function (e, o) {
                                var a = n(r, e, this, o, r !== t);
                                if (a.done) return a.value;
                                var p = i(e),
                                    f = String(this),
                                    d = c(p, RegExp),
                                    h = p.unicode,
                                    m =
                                        (p.ignoreCase ? 'i' : '') +
                                        (p.multiline ? 'm' : '') +
                                        (p.unicode ? 'u' : '') +
                                        (y ? 'y' : 'g'),
                                    g = new d(
                                        y ? p : '^(?:' + p.source + ')',
                                        m
                                    ),
                                    b = void 0 === o ? 4294967295 : o >>> 0;
                                if (0 === b) return [];
                                if (0 === f.length)
                                    return null === l(g, f) ? [f] : [];
                                for (var _ = 0, k = 0, w = []; k < f.length; ) {
                                    g.lastIndex = y ? k : 0;
                                    var x,
                                        S = l(g, y ? f : f.slice(k));
                                    if (
                                        null === S ||
                                        (x = v(
                                            u(g.lastIndex + (y ? 0 : k)),
                                            f.length
                                        )) === _
                                    )
                                        k = s(f, k, h);
                                    else {
                                        if (
                                            (w.push(f.slice(_, k)),
                                            w.length === b)
                                        )
                                            return w;
                                        for (var O = 1; O <= S.length - 1; O++)
                                            if ((w.push(S[O]), w.length === b))
                                                return w;
                                        k = _ = x;
                                    }
                                }
                                return w.push(f.slice(_)), w;
                            },
                        ]
                    );
                },
                !y
            );
        },
        function (e, t, n) {
            var r = n(6),
                o = n(53),
                i = n(2)('species');
            e.exports = function (e, t) {
                var n,
                    a = r(e).constructor;
                return void 0 === a || null == (n = r(a)[i]) ? t : o(n);
            };
        },
        function (e, t, n) {
            'use strict';
            var r = n(0),
                o = n(89).includes,
                i = n(95);
            r(
                {
                    target: 'Array',
                    proto: !0,
                    forced: !n(38)('indexOf', { ACCESSORS: !0, 1: 0 }),
                },
                {
                    includes: function (e) {
                        return o(
                            this,
                            e,
                            arguments.length > 1 ? arguments[1] : void 0
                        );
                    },
                }
            ),
                i('includes');
        },
        function (e, t, n) {
            'use strict';
            var r = n(0),
                o = n(75),
                i = n(20);
            r(
                { target: 'String', proto: !0, forced: !n(76)('includes') },
                {
                    includes: function (e) {
                        return !!~String(i(this)).indexOf(
                            o(e),
                            arguments.length > 1 ? arguments[1] : void 0
                        );
                    },
                }
            );
        },
        function (e, t, n) {
            'use strict';
            var r,
                o = n(0),
                i = n(24).f,
                a = n(13),
                c = n(75),
                s = n(20),
                u = n(76),
                l = n(29),
                p = ''.startsWith,
                f = Math.min,
                d = u('startsWith');
            o(
                {
                    target: 'String',
                    proto: !0,
                    forced:
                        !!(
                            l ||
                            d ||
                            ((r = i(String.prototype, 'startsWith')),
                            !r || r.writable)
                        ) && !d,
                },
                {
                    startsWith: function (e) {
                        var t = String(s(this));
                        c(e);
                        var n = a(
                                f(
                                    arguments.length > 1
                                        ? arguments[1]
                                        : void 0,
                                    t.length
                                )
                            ),
                            r = String(e);
                        return p
                            ? p.call(t, r, n)
                            : t.slice(n, n + r.length) === r;
                    },
                }
            );
        },
        function (e, t, n) {
            'use strict';
            n.r(t),
                n.d(t, 'getTranslations', function () {
                    return Fn;
                }),
                n.d(t, 'renderKlaro', function () {
                    return Bn;
                }),
                n.d(t, 'initialize', function () {
                    return Kn;
                }),
                n.d(t, 'resetManagers', function () {
                    return Wn;
                }),
                n.d(t, 'getManager', function () {
                    return Vn;
                }),
                n.d(t, 'show', function () {
                    return $n;
                }),
                n.d(t, 'version', function () {
                    return Gn;
                }),
                n.d(t, 'language', function () {
                    return Xe;
                });
            n(80), n(9), n(68), n(37), n(10), n(11), n(12), n(148);
            var r,
                o,
                i,
                a,
                c,
                s = {},
                u = [],
                l = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
            function p(e, t) {
                for (var n in t) e[n] = t[n];
                return e;
            }
            function f(e) {
                var t = e.parentNode;
                t && t.removeChild(e);
            }
            function d(e, t, n) {
                var r,
                    o = arguments,
                    i = {};
                for (r in t) 'key' !== r && 'ref' !== r && (i[r] = t[r]);
                if (arguments.length > 3)
                    for (n = [n], r = 3; r < arguments.length; r++)
                        n.push(o[r]);
                if (
                    (null != n && (i.children = n),
                    'function' == typeof e && null != e.defaultProps)
                )
                    for (r in e.defaultProps)
                        void 0 === i[r] && (i[r] = e.defaultProps[r]);
                return v(e, i, t && t.key, t && t.ref, null);
            }
            function v(e, t, n, o, i) {
                var a = {
                    type: e,
                    props: t,
                    key: n,
                    ref: o,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    constructor: void 0,
                    __v: i,
                };
                return null == i && (a.__v = a), r.vnode && r.vnode(a), a;
            }
            function y(e) {
                return e.children;
            }
            function h(e, t) {
                (this.props = e), (this.context = t);
            }
            function m(e, t) {
                if (null == t)
                    return e.__ ? m(e.__, e.__.__k.indexOf(e) + 1) : null;
                for (var n; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
                return 'function' == typeof e.type ? m(e) : null;
            }
            function g(e) {
                var t, n;
                if (null != (e = e.__) && null != e.__c) {
                    for (
                        e.__e = e.__c.base = null, t = 0;
                        t < e.__k.length;
                        t++
                    )
                        if (null != (n = e.__k[t]) && null != n.__e) {
                            e.__e = e.__c.base = n.__e;
                            break;
                        }
                    return g(e);
                }
            }
            function b(e) {
                ((!e.__d && (e.__d = !0) && o.push(e) && !_.__r++) ||
                    a !== r.debounceRendering) &&
                    ((a = r.debounceRendering) || i)(_);
            }
            function _() {
                for (var e; (_.__r = o.length); )
                    (e = o.sort(function (e, t) {
                        return e.__v.__b - t.__v.__b;
                    })),
                        (o = []),
                        e.some(function (e) {
                            var t, n, r, o, i, a, c;
                            e.__d &&
                                ((a = (i = (t = e).__v).__e),
                                (c = t.__P) &&
                                    ((n = []),
                                    ((r = p({}, i)).__v = r),
                                    (o = A(
                                        c,
                                        i,
                                        r,
                                        t.__n,
                                        void 0 !== c.ownerSVGElement,
                                        null,
                                        n,
                                        null == a ? m(i) : a
                                    )),
                                    E(n, i),
                                    o != a && g(i)));
                        });
            }
            function k(e, t, n, r, o, i, a, c, l, p) {
                var d,
                    h,
                    g,
                    b,
                    _,
                    k,
                    w,
                    S = (r && r.__k) || u,
                    O = S.length;
                for (
                    l == s && (l = null != a ? a[0] : O ? m(r, 0) : null),
                        n.__k = [],
                        d = 0;
                    d < t.length;
                    d++
                )
                    if (
                        null !=
                        (b = n.__k[d] =
                            null == (b = t[d]) || 'boolean' == typeof b
                                ? null
                                : 'string' == typeof b || 'number' == typeof b
                                ? v(null, b, null, null, b)
                                : Array.isArray(b)
                                ? v(y, { children: b }, null, null, null)
                                : null != b.__e || null != b.__c
                                ? v(b.type, b.props, b.key, null, b.__v)
                                : b)
                    ) {
                        if (
                            ((b.__ = n),
                            (b.__b = n.__b + 1),
                            null === (g = S[d]) ||
                                (g && b.key == g.key && b.type === g.type))
                        )
                            S[d] = void 0;
                        else
                            for (h = 0; h < O; h++) {
                                if (
                                    (g = S[h]) &&
                                    b.key == g.key &&
                                    b.type === g.type
                                ) {
                                    S[h] = void 0;
                                    break;
                                }
                                g = null;
                            }
                        (_ = A(e, b, (g = g || s), o, i, a, c, l, p)),
                            (h = b.ref) &&
                                g.ref != h &&
                                (w || (w = []),
                                g.ref && w.push(g.ref, null, b),
                                w.push(h, b.__c || _, b)),
                            null != _
                                ? (null == k && (k = _),
                                  (l = x(e, b, g, S, a, _, l)),
                                  'option' == n.type
                                      ? (e.value = '')
                                      : 'function' == typeof n.type &&
                                        (n.__d = l))
                                : l &&
                                  g.__e == l &&
                                  l.parentNode != e &&
                                  (l = m(g));
                    }
                if (((n.__e = k), null != a && 'function' != typeof n.type))
                    for (d = a.length; d--; ) null != a[d] && f(a[d]);
                for (d = O; d--; ) null != S[d] && R(S[d], S[d]);
                if (w) for (d = 0; d < w.length; d++) z(w[d], w[++d], w[++d]);
            }
            function w(e) {
                return null == e || 'boolean' == typeof e
                    ? []
                    : Array.isArray(e)
                    ? u.concat.apply([], e.map(w))
                    : [e];
            }
            function x(e, t, n, r, o, i, a) {
                var c, s, u;
                if (void 0 !== t.__d) (c = t.__d), (t.__d = void 0);
                else if (o == n || i != a || null == i.parentNode)
                    e: if (null == a || a.parentNode !== e)
                        e.appendChild(i), (c = null);
                    else {
                        for (
                            s = a, u = 0;
                            (s = s.nextSibling) && u < r.length;
                            u += 2
                        )
                            if (s == i) break e;
                        e.insertBefore(i, a), (c = a);
                    }
                return void 0 !== c ? c : i.nextSibling;
            }
            function S(e, t, n) {
                '-' === t[0]
                    ? e.setProperty(t, n)
                    : (e[t] =
                          'number' == typeof n && !1 === l.test(t)
                              ? n + 'px'
                              : null == n
                              ? ''
                              : n);
            }
            function O(e, t, n, r, o) {
                var i, a, c, s, u;
                if (
                    (o
                        ? 'className' === t && (t = 'class')
                        : 'class' === t && (t = 'className'),
                    'style' === t)
                )
                    if (((i = e.style), 'string' == typeof n)) i.cssText = n;
                    else {
                        if (
                            ('string' == typeof r &&
                                ((i.cssText = ''), (r = null)),
                            r)
                        )
                            for (s in r) (n && s in n) || S(i, s, '');
                        if (n)
                            for (u in n) (r && n[u] === r[u]) || S(i, u, n[u]);
                    }
                else
                    'o' === t[0] && 'n' === t[1]
                        ? ((a = t !== (t = t.replace(/Capture$/, ''))),
                          (c = t.toLowerCase()),
                          (t = (c in e ? c : t).slice(2)),
                          n
                              ? (r || e.addEventListener(t, j, a),
                                ((e.l || (e.l = {}))[t] = n))
                              : e.removeEventListener(t, j, a))
                        : 'list' !== t &&
                          'tagName' !== t &&
                          'form' !== t &&
                          'type' !== t &&
                          'size' !== t &&
                          !o &&
                          t in e
                        ? (e[t] = null == n ? '' : n)
                        : 'function' != typeof n &&
                          'dangerouslySetInnerHTML' !== t &&
                          (t !== (t = t.replace(/^xlink:?/, ''))
                              ? null == n || !1 === n
                                  ? e.removeAttributeNS(
                                        'http://www.w3.org/1999/xlink',
                                        t.toLowerCase()
                                    )
                                  : e.setAttributeNS(
                                        'http://www.w3.org/1999/xlink',
                                        t.toLowerCase(),
                                        n
                                    )
                              : null == n || (!1 === n && !/^ar/.test(t))
                              ? e.removeAttribute(t)
                              : e.setAttribute(t, n));
            }
            function j(e) {
                this.l[e.type](r.event ? r.event(e) : e);
            }
            function P(e, t, n) {
                var r, o;
                for (r = 0; r < e.__k.length; r++)
                    (o = e.__k[r]) &&
                        ((o.__ = e),
                        o.__e &&
                            ('function' == typeof o.type &&
                                o.__k.length > 1 &&
                                P(o, t, n),
                            (t = x(n, o, o, e.__k, null, o.__e, t)),
                            'function' == typeof e.type && (e.__d = t)));
            }
            function A(e, t, n, o, i, a, c, s, u) {
                var l,
                    f,
                    d,
                    v,
                    m,
                    g,
                    b,
                    _,
                    w,
                    x,
                    S,
                    O = t.type;
                if (void 0 !== t.constructor) return null;
                (l = r.__b) && l(t);
                try {
                    e: if ('function' == typeof O) {
                        if (
                            ((_ = t.props),
                            (w = (l = O.contextType) && o[l.__c]),
                            (x = l ? (w ? w.props.value : l.__) : o),
                            n.__c
                                ? (b = (f = t.__c = n.__c).__ = f.__E)
                                : ('prototype' in O && O.prototype.render
                                      ? (t.__c = f = new O(_, x))
                                      : ((t.__c = f = new h(_, x)),
                                        (f.constructor = O),
                                        (f.render = T)),
                                  w && w.sub(f),
                                  (f.props = _),
                                  f.state || (f.state = {}),
                                  (f.context = x),
                                  (f.__n = o),
                                  (d = f.__d = !0),
                                  (f.__h = [])),
                            null == f.__s && (f.__s = f.state),
                            null != O.getDerivedStateFromProps &&
                                (f.__s == f.state && (f.__s = p({}, f.__s)),
                                p(f.__s, O.getDerivedStateFromProps(_, f.__s))),
                            (v = f.props),
                            (m = f.state),
                            d)
                        )
                            null == O.getDerivedStateFromProps &&
                                null != f.componentWillMount &&
                                f.componentWillMount(),
                                null != f.componentDidMount &&
                                    f.__h.push(f.componentDidMount);
                        else {
                            if (
                                (null == O.getDerivedStateFromProps &&
                                    _ !== v &&
                                    null != f.componentWillReceiveProps &&
                                    f.componentWillReceiveProps(_, x),
                                (!f.__e &&
                                    null != f.shouldComponentUpdate &&
                                    !1 ===
                                        f.shouldComponentUpdate(_, f.__s, x)) ||
                                    t.__v === n.__v)
                            ) {
                                (f.props = _),
                                    (f.state = f.__s),
                                    t.__v !== n.__v && (f.__d = !1),
                                    (f.__v = t),
                                    (t.__e = n.__e),
                                    (t.__k = n.__k),
                                    f.__h.length && c.push(f),
                                    P(t, s, e);
                                break e;
                            }
                            null != f.componentWillUpdate &&
                                f.componentWillUpdate(_, f.__s, x),
                                null != f.componentDidUpdate &&
                                    f.__h.push(function () {
                                        f.componentDidUpdate(v, m, g);
                                    });
                        }
                        (f.context = x),
                            (f.props = _),
                            (f.state = f.__s),
                            (l = r.__r) && l(t),
                            (f.__d = !1),
                            (f.__v = t),
                            (f.__P = e),
                            (l = f.render(f.props, f.state, f.context)),
                            (f.state = f.__s),
                            null != f.getChildContext &&
                                (o = p(p({}, o), f.getChildContext())),
                            d ||
                                null == f.getSnapshotBeforeUpdate ||
                                (g = f.getSnapshotBeforeUpdate(v, m)),
                            (S =
                                null != l && l.type == y && null == l.key
                                    ? l.props.children
                                    : l),
                            k(
                                e,
                                Array.isArray(S) ? S : [S],
                                t,
                                n,
                                o,
                                i,
                                a,
                                c,
                                s,
                                u
                            ),
                            (f.base = t.__e),
                            f.__h.length && c.push(f),
                            b && (f.__E = f.__ = null),
                            (f.__e = !1);
                    } else
                        null == a && t.__v === n.__v
                            ? ((t.__k = n.__k), (t.__e = n.__e))
                            : (t.__e = C(n.__e, t, n, o, i, a, c, u));
                    (l = r.diffed) && l(t);
                } catch (e) {
                    (t.__v = null), r.__e(e, t, n);
                }
                return t.__e;
            }
            function E(e, t) {
                r.__c && r.__c(t, e),
                    e.some(function (t) {
                        try {
                            (e = t.__h),
                                (t.__h = []),
                                e.some(function (e) {
                                    e.call(t);
                                });
                        } catch (e) {
                            r.__e(e, t.__v);
                        }
                    });
            }
            function C(e, t, n, r, o, i, a, c) {
                var l,
                    p,
                    f,
                    d,
                    v,
                    y = n.props,
                    h = t.props;
                if (((o = 'svg' === t.type || o), null != i))
                    for (l = 0; l < i.length; l++)
                        if (
                            null != (p = i[l]) &&
                            ((null === t.type
                                ? 3 === p.nodeType
                                : p.localName === t.type) ||
                                e == p)
                        ) {
                            (e = p), (i[l] = null);
                            break;
                        }
                if (null == e) {
                    if (null === t.type) return document.createTextNode(h);
                    (e = o
                        ? document.createElementNS(
                              'http://www.w3.org/2000/svg',
                              t.type
                          )
                        : document.createElement(t.type, h.is && { is: h.is })),
                        (i = null),
                        (c = !1);
                }
                if (null === t.type) y !== h && e.data != h && (e.data = h);
                else {
                    if (
                        (null != i && (i = u.slice.call(e.childNodes)),
                        (f = (y = n.props || s).dangerouslySetInnerHTML),
                        (d = h.dangerouslySetInnerHTML),
                        !c)
                    ) {
                        if (null != i)
                            for (y = {}, v = 0; v < e.attributes.length; v++)
                                y[e.attributes[v].name] = e.attributes[v].value;
                        (d || f) &&
                            ((d && f && d.__html == f.__html) ||
                                (e.innerHTML = (d && d.__html) || ''));
                    }
                    (function (e, t, n, r, o) {
                        var i;
                        for (i in n)
                            'children' === i ||
                                'key' === i ||
                                i in t ||
                                O(e, i, null, n[i], r);
                        for (i in t)
                            (o && 'function' != typeof t[i]) ||
                                'children' === i ||
                                'key' === i ||
                                'value' === i ||
                                'checked' === i ||
                                n[i] === t[i] ||
                                O(e, i, t[i], n[i], r);
                    })(e, h, y, o, c),
                        d
                            ? (t.__k = [])
                            : ((l = t.props.children),
                              k(
                                  e,
                                  Array.isArray(l) ? l : [l],
                                  t,
                                  n,
                                  r,
                                  'foreignObject' !== t.type && o,
                                  i,
                                  a,
                                  s,
                                  c
                              )),
                        c ||
                            ('value' in h &&
                                void 0 !== (l = h.value) &&
                                l !== e.value &&
                                O(e, 'value', l, y.value, !1),
                            'checked' in h &&
                                void 0 !== (l = h.checked) &&
                                l !== e.checked &&
                                O(e, 'checked', l, y.checked, !1));
                }
                return e;
            }
            function z(e, t, n) {
                try {
                    'function' == typeof e ? e(t) : (e.current = t);
                } catch (e) {
                    r.__e(e, n);
                }
            }
            function R(e, t, n) {
                var o, i, a;
                if (
                    (r.unmount && r.unmount(e),
                    (o = e.ref) &&
                        ((o.current && o.current !== e.__e) || z(o, null, t)),
                    n ||
                        'function' == typeof e.type ||
                        (n = null != (i = e.__e)),
                    (e.__e = e.__d = void 0),
                    null != (o = e.__c))
                ) {
                    if (o.componentWillUnmount)
                        try {
                            o.componentWillUnmount();
                        } catch (e) {
                            r.__e(e, t);
                        }
                    o.base = o.__P = null;
                }
                if ((o = e.__k))
                    for (a = 0; a < o.length; a++) o[a] && R(o[a], t, n);
                null != i && f(i);
            }
            function T(e, t, n) {
                return this.constructor(e, n);
            }
            function D(e, t, n) {
                var o, i, a;
                r.__ && r.__(e, t),
                    (i = (o = n === c) ? null : (n && n.__k) || t.__k),
                    (e = d(y, null, [e])),
                    (a = []),
                    A(
                        t,
                        ((o ? t : n || t).__k = e),
                        i || s,
                        s,
                        void 0 !== t.ownerSVGElement,
                        n && !o
                            ? [n]
                            : i
                            ? null
                            : t.childNodes.length
                            ? u.slice.call(t.childNodes)
                            : null,
                        a,
                        n || s,
                        o
                    ),
                    E(a, e);
            }
            (r = {
                __e: function (e, t) {
                    for (var n, r; (t = t.__); )
                        if ((n = t.__c) && !n.__)
                            try {
                                if (
                                    (n.constructor &&
                                        null !=
                                            n.constructor
                                                .getDerivedStateFromError &&
                                        ((r = !0),
                                        n.setState(
                                            n.constructor.getDerivedStateFromError(
                                                e
                                            )
                                        )),
                                    null != n.componentDidCatch &&
                                        ((r = !0), n.componentDidCatch(e)),
                                    r)
                                )
                                    return b((n.__E = n));
                            } catch (t) {
                                e = t;
                            }
                    throw e;
                },
            }),
                (h.prototype.setState = function (e, t) {
                    var n;
                    (n =
                        this.__s !== this.state
                            ? this.__s
                            : (this.__s = p({}, this.state))),
                        'function' == typeof e && (e = e(n, this.props)),
                        e && p(n, e),
                        null != e &&
                            this.__v &&
                            (t && this.__h.push(t), b(this));
                }),
                (h.prototype.forceUpdate = function (e) {
                    this.__v &&
                        ((this.__e = !0), e && this.__h.push(e), b(this));
                }),
                (h.prototype.render = y),
                (o = []),
                (i =
                    'function' == typeof Promise
                        ? Promise.prototype.then.bind(Promise.resolve())
                        : setTimeout),
                (_.__r = 0),
                (c = s);
            var N,
                I = [],
                M = r.__r,
                q = r.diffed,
                L = r.__c,
                U = r.unmount;
            function F() {
                I.some(function (e) {
                    if (e.__P)
                        try {
                            e.__H.__h.forEach(B),
                                e.__H.__h.forEach(K),
                                (e.__H.__h = []);
                        } catch (t) {
                            return (e.__H.__h = []), r.__e(t, e.__v), !0;
                        }
                }),
                    (I = []);
            }
            (r.__r = function (e) {
                M && M(e), 0;
                var t = e.__c.__H;
                t && (t.__h.forEach(B), t.__h.forEach(K), (t.__h = []));
            }),
                (r.diffed = function (e) {
                    q && q(e);
                    var t = e.__c;
                    t &&
                        t.__H &&
                        t.__H.__h.length &&
                        ((1 !== I.push(t) && N === r.requestAnimationFrame) ||
                            (
                                (N = r.requestAnimationFrame) ||
                                function (e) {
                                    var t,
                                        n = function () {
                                            clearTimeout(r),
                                                H && cancelAnimationFrame(t),
                                                setTimeout(e);
                                        },
                                        r = setTimeout(n, 100);
                                    H && (t = requestAnimationFrame(n));
                                }
                            )(F));
                }),
                (r.__c = function (e, t) {
                    t.some(function (e) {
                        try {
                            e.__h.forEach(B),
                                (e.__h = e.__h.filter(function (e) {
                                    return !e.__ || K(e);
                                }));
                        } catch (n) {
                            t.some(function (e) {
                                e.__h && (e.__h = []);
                            }),
                                (t = []),
                                r.__e(n, e.__v);
                        }
                    }),
                        L && L(e, t);
                }),
                (r.unmount = function (e) {
                    U && U(e);
                    var t = e.__c;
                    if (t && t.__H)
                        try {
                            t.__H.__.forEach(B);
                        } catch (e) {
                            r.__e(e, t.__v);
                        }
                });
            var H = 'function' == typeof requestAnimationFrame;
            function B(e) {
                'function' == typeof e.u && e.u();
            }
            function K(e) {
                e.u = e.__();
            }
            function W(e, t) {
                for (var n in t) e[n] = t[n];
                return e;
            }
            function V(e, t) {
                for (var n in e) if ('__source' !== n && !(n in t)) return !0;
                for (var r in t)
                    if ('__source' !== r && e[r] !== t[r]) return !0;
                return !1;
            }
            !(function (e) {
                var t, n;
                function r(t) {
                    var n;
                    return (
                        ((n =
                            e.call(this, t) || this).isPureReactComponent = !0),
                        n
                    );
                }
                (n = e),
                    ((t = r).prototype = Object.create(n.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = n),
                    (r.prototype.shouldComponentUpdate = function (e, t) {
                        return V(this.props, e) || V(this.state, t);
                    });
            })(h);
            var $ = r.__b;
            r.__b = function (e) {
                e.type &&
                    e.type.t &&
                    e.ref &&
                    ((e.props.ref = e.ref), (e.ref = null)),
                    $ && $(e);
            };
            'undefined' != typeof Symbol &&
                Symbol.for &&
                Symbol.for('react.forward_ref');
            var G = r.__e;
            function Z(e) {
                return (
                    e &&
                        (((e = W({}, e)).__c = null),
                        (e.__k = e.__k && e.__k.map(Z))),
                    e
                );
            }
            function Q() {
                (this.__u = 0), (this.o = null), (this.__b = null);
            }
            function Y(e) {
                var t = e.__.__c;
                return t && t.u && t.u(e);
            }
            function J() {
                (this.i = null), (this.l = null);
            }
            (r.__e = function (e, t, n) {
                if (e.then)
                    for (var r, o = t; (o = o.__); )
                        if ((r = o.__c) && r.__c) return r.__c(e, t.__c);
                G(e, t, n);
            }),
                ((Q.prototype = new h()).__c = function (e, t) {
                    var n = this;
                    null == n.o && (n.o = []), n.o.push(t);
                    var r = Y(n.__v),
                        o = !1,
                        i = function () {
                            o || ((o = !0), r ? r(a) : a());
                        };
                    (t.__c = t.componentWillUnmount),
                        (t.componentWillUnmount = function () {
                            i(), t.__c && t.__c();
                        });
                    var a = function () {
                        var e;
                        if (!--n.__u)
                            for (
                                n.__v.__k[0] = n.state.u,
                                    n.setState({ u: (n.__b = null) });
                                (e = n.o.pop());

                            )
                                e.forceUpdate();
                    };
                    n.__u++ || n.setState({ u: (n.__b = n.__v.__k[0]) }),
                        e.then(i, i);
                }),
                (Q.prototype.render = function (e, t) {
                    return (
                        this.__b &&
                            (this.__v.__k && (this.__v.__k[0] = Z(this.__b)),
                            (this.__b = null)),
                        [d(y, null, t.u ? null : e.children), t.u && e.fallback]
                    );
                });
            var X = function (e, t, n) {
                if (
                    (++n[1] === n[0] && e.l.delete(t),
                    e.props.revealOrder &&
                        ('t' !== e.props.revealOrder[0] || !e.l.size))
                )
                    for (n = e.i; n; ) {
                        for (; n.length > 3; ) n.pop()();
                        if (n[1] < n[0]) break;
                        e.i = n = n[2];
                    }
            };
            ((J.prototype = new h()).u = function (e) {
                var t = this,
                    n = Y(t.__v),
                    r = t.l.get(e);
                return (
                    r[0]++,
                    function (o) {
                        var i = function () {
                            t.props.revealOrder ? (r.push(o), X(t, e, r)) : o();
                        };
                        n ? n(i) : i();
                    }
                );
            }),
                (J.prototype.render = function (e) {
                    (this.i = null), (this.l = new Map());
                    var t = w(e.children);
                    e.revealOrder && 'b' === e.revealOrder[0] && t.reverse();
                    for (var n = t.length; n--; )
                        this.l.set(t[n], (this.i = [1, 0, this.i]));
                    return e.children;
                }),
                (J.prototype.componentDidUpdate = J.prototype.componentDidMount = function () {
                    var e = this;
                    e.l.forEach(function (t, n) {
                        X(e, n, t);
                    });
                });
            !(function () {
                function e() {}
                var t = e.prototype;
                (t.getChildContext = function () {
                    return this.props.context;
                }),
                    (t.render = function (e) {
                        return e.children;
                    });
            })();
            var ee = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
            h.prototype.isReactComponent = {};
            var te =
                ('undefined' != typeof Symbol &&
                    Symbol.for &&
                    Symbol.for('react.element')) ||
                60103;
            function ne(e, t, n) {
                if (null == t.__k)
                    for (; t.firstChild; ) t.removeChild(t.firstChild);
                return D(e, t), 'function' == typeof n && n(), e ? e.__c : null;
            }
            var re = r.event;
            function oe(e, t) {
                e['UNSAFE_' + t] &&
                    !e[t] &&
                    Object.defineProperty(e, t, {
                        configurable: !1,
                        get: function () {
                            return this['UNSAFE_' + t];
                        },
                        set: function (e) {
                            this['UNSAFE_' + t] = e;
                        },
                    });
            }
            r.event = function (e) {
                re && (e = re(e)), (e.persist = function () {});
                var t = !1,
                    n = !1,
                    r = e.stopPropagation;
                e.stopPropagation = function () {
                    r.call(e), (t = !0);
                };
                var o = e.preventDefault;
                return (
                    (e.preventDefault = function () {
                        o.call(e), (n = !0);
                    }),
                    (e.isPropagationStopped = function () {
                        return t;
                    }),
                    (e.isDefaultPrevented = function () {
                        return n;
                    }),
                    (e.nativeEvent = e)
                );
            };
            var ie = {
                    configurable: !0,
                    get: function () {
                        return this.class;
                    },
                },
                ae = r.vnode;
            r.vnode = function (e) {
                e.$$typeof = te;
                var t = e.type,
                    n = e.props;
                if (t) {
                    if (
                        (n.class != n.className &&
                            ((ie.enumerable = 'className' in n),
                            null != n.className && (n.class = n.className),
                            Object.defineProperty(n, 'className', ie)),
                        'function' != typeof t)
                    ) {
                        var r, o, i;
                        for (i in (n.defaultValue &&
                            void 0 !== n.value &&
                            (n.value ||
                                0 === n.value ||
                                (n.value = n.defaultValue),
                            delete n.defaultValue),
                        Array.isArray(n.value) &&
                            n.multiple &&
                            'select' === t &&
                            (w(n.children).forEach(function (e) {
                                -1 != n.value.indexOf(e.props.value) &&
                                    (e.props.selected = !0);
                            }),
                            delete n.value),
                        n))
                            if ((r = ee.test(i))) break;
                        if (r)
                            for (i in ((o = e.props = {}), n))
                                o[
                                    ee.test(i)
                                        ? i
                                              .replace(/[A-Z0-9]/, '-$&')
                                              .toLowerCase()
                                        : i
                                ] = n[i];
                    }
                    !(function (t) {
                        var n = e.type,
                            r = e.props;
                        if (r && 'string' == typeof n) {
                            var o = {};
                            for (var i in r)
                                /^on(Ani|Tra|Tou)/.test(i) &&
                                    ((r[i.toLowerCase()] = r[i]), delete r[i]),
                                    (o[i.toLowerCase()] = i);
                            if (
                                (o.ondoubleclick &&
                                    ((r.ondblclick = r[o.ondoubleclick]),
                                    delete r[o.ondoubleclick]),
                                o.onbeforeinput &&
                                    ((r.onbeforeinput = r[o.onbeforeinput]),
                                    delete r[o.onbeforeinput]),
                                o.onchange &&
                                    ('textarea' === n ||
                                        ('input' === n.toLowerCase() &&
                                            !/^fil|che|ra/i.test(r.type))))
                            ) {
                                var a = o.oninput || 'oninput';
                                r[a] ||
                                    ((r[a] = r[o.onchange]),
                                    delete r[o.onchange]);
                            }
                        }
                    })(),
                        'function' == typeof t &&
                            !t.m &&
                            t.prototype &&
                            (oe(t.prototype, 'componentWillMount'),
                            oe(t.prototype, 'componentWillReceiveProps'),
                            oe(t.prototype, 'componentWillUpdate'),
                            (t.m = !0));
                }
                ae && ae(e);
            };
            var ce = d,
                se = y,
                ue = h,
                le =
                    (n(17),
                    n(18),
                    n(19),
                    n(25),
                    n(26),
                    n(27),
                    n(14),
                    n(55),
                    n(31),
                    n(151),
                    n(118)),
                pe = function (e) {
                    var t = e.t;
                    return ce(
                        'svg',
                        {
                            role: 'img',
                            'aria-label': t(['close']),
                            width: '12',
                            height: '12',
                            viewPort: '0 0 12 12',
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg',
                        },
                        ce('title', null, t(['close'])),
                        ce('line', {
                            x1: '1',
                            y1: '11',
                            x2: '11',
                            y2: '1',
                            strokeWidth: '1',
                        }),
                        ce('line', {
                            x1: '1',
                            y1: '1',
                            x2: '11',
                            y2: '11',
                            strokeWidth: '1',
                        })
                    );
                };
            pe.propTypes = { t: n.n(le).a.func };
            n(71), n(23), n(72);
            function fe(e) {
                return (fe =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function de() {
                return (de =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) &&
                                    (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function ve(e, t) {
                if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
            }
            function ye(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                }
            }
            function he(e, t) {
                return (he =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function me(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                        return (
                            Date.prototype.toString.call(
                                Reflect.construct(Date, [], function () {})
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = be(e);
                    if (t) {
                        var o = be(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return ge(this, n);
                };
            }
            function ge(e, t) {
                return !t || ('object' !== fe(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return e;
                      })(e)
                    : t;
            }
            function be(e) {
                return (be = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var _e = (function (e) {
                !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError(
                            'Super expression must either be null or a function'
                        );
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                        t && he(e, t);
                })(i, e);
                var t,
                    n,
                    r,
                    o = me(i);
                function i() {
                    return ve(this, i), o.apply(this, arguments);
                }
                return (
                    (t = i),
                    (n = [
                        {
                            key: 'render',
                            value: function () {
                                var e,
                                    t = this.props,
                                    n = t.checked,
                                    r = t.onlyRequiredEnabled,
                                    o = t.onToggle,
                                    i = t.name,
                                    a = t.title,
                                    c = t.description,
                                    s = t.t,
                                    u = this.props.required || !1,
                                    l = this.props.optOut || !1,
                                    p = this.props.purposes || [],
                                    f = 'app-item-'.concat(i),
                                    d = p
                                        .map(function (e) {
                                            return s(['purposes', e, 'title?']);
                                        })
                                        .join(', '),
                                    v = l
                                        ? ce(
                                              'span',
                                              {
                                                  className: 'cm-opt-out',
                                                  title: s([
                                                      'app',
                                                      'optOut',
                                                      'description',
                                                  ]),
                                              },
                                              s(['app', 'optOut', 'title'])
                                          )
                                        : '',
                                    y = u
                                        ? ce(
                                              'span',
                                              {
                                                  className: 'cm-required',
                                                  title: s([
                                                      'app',
                                                      'required',
                                                      'description',
                                                  ]),
                                              },
                                              s(['app', 'required', 'title'])
                                          )
                                        : '';
                                return (
                                    p.length > 0 &&
                                        (e = ce(
                                            'p',
                                            { className: 'purposes' },
                                            s([
                                                'app',
                                                p.length > 1
                                                    ? 'purposes'
                                                    : 'purpose',
                                            ]),
                                            ': ',
                                            d
                                        )),
                                    ce(
                                        'div',
                                        null,
                                        ce('input', {
                                            id: f,
                                            className:
                                                'cm-list-input' +
                                                (u ? ' required' : '') +
                                                (r
                                                    ? ' half-checked only-required'
                                                    : ''),
                                            'aria-describedby': ''.concat(
                                                f,
                                                '-description'
                                            ),
                                            disabled: u,
                                            checked: n || u,
                                            type: 'checkbox',
                                            onChange: function (e) {
                                                o(e.target.checked);
                                            },
                                        }),
                                        ce(
                                            'label',
                                            de(
                                                {
                                                    htmlFor: f,
                                                    className: 'cm-list-label',
                                                },
                                                u ? { tabIndex: '0' } : {}
                                            ),
                                            ce(
                                                'span',
                                                { className: 'cm-list-title' },
                                                a || s([i, 'title'])
                                            ),
                                            y,
                                            v,
                                            ce(
                                                'span',
                                                { className: 'switch' },
                                                ce('div', {
                                                    className:
                                                        'slider round active',
                                                })
                                            )
                                        ),
                                        ce(
                                            'div',
                                            {
                                                id: ''.concat(
                                                    f,
                                                    '-description'
                                                ),
                                            },
                                            ce(
                                                'p',
                                                {
                                                    className:
                                                        'cm-list-description',
                                                },
                                                c || s([i, 'description'])
                                            ),
                                            e
                                        )
                                    )
                                );
                            },
                        },
                    ]) && ye(t.prototype, n),
                    r && ye(t, r),
                    i
                );
            })(ue);
            function ke(e) {
                return (ke =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function we(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                }
            }
            function xe(e, t) {
                return (xe =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function Se(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                        return (
                            Date.prototype.toString.call(
                                Reflect.construct(Date, [], function () {})
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = Pe(e);
                    if (t) {
                        var o = Pe(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return Oe(this, n);
                };
            }
            function Oe(e, t) {
                return !t || ('object' !== ke(t) && 'function' != typeof t)
                    ? je(e)
                    : t;
            }
            function je(e) {
                if (void 0 === e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return e;
            }
            function Pe(e) {
                return (Pe = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function Ae() {
                return (Ae =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) &&
                                    (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            var Ee = function (e) {
                    var t = e.apps,
                        n = e.consents,
                        r = e.toggle,
                        o = e.t;
                    return t.map(function (e) {
                        var t = n[e.name];
                        return ce(
                            'li',
                            { key: e.name, className: 'cm-app' },
                            ce(
                                _e,
                                Ae(
                                    {
                                        checked: t || e.required,
                                        onToggle: function (t) {
                                            r([e], t);
                                        },
                                        t: o,
                                    },
                                    e
                                )
                            )
                        );
                    });
                },
                Ce = (function (e) {
                    !(function (e, t) {
                        if ('function' != typeof t && null !== t)
                            throw new TypeError(
                                'Super expression must either be null or a function'
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0,
                            },
                        })),
                            t && xe(e, t);
                    })(i, e);
                    var t,
                        n,
                        r,
                        o = Se(i);
                    function i(e) {
                        var t;
                        return (
                            (function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        'Cannot call a class as a function'
                                    );
                            })(this, i),
                            (t = o.call(this, e)),
                            e.manager.watch(je(t)),
                            (t.state = { consents: e.manager.consents }),
                            t
                        );
                    }
                    return (
                        (t = i),
                        (n = [
                            {
                                key: 'componentWillUnmount',
                                value: function () {
                                    this.props.manager.unwatch(this);
                                },
                            },
                            {
                                key: 'update',
                                value: function (e, t, n) {
                                    e === this.props.manager &&
                                        'consents' === t &&
                                        this.setState({ consents: n });
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    var e = this.props,
                                        t = e.config,
                                        n = e.t,
                                        r = e.manager,
                                        o = this.state.consents,
                                        i = t.apps,
                                        a = function (e, t) {
                                            e.map(function (e) {
                                                e.required ||
                                                    r.updateConsent(e.name, t);
                                            });
                                        },
                                        c = ce(Ee, {
                                            apps: i,
                                            t: n,
                                            consents: o,
                                            toggle: a,
                                        }),
                                        s = i.filter(function (e) {
                                            return !e.required;
                                        }),
                                        u =
                                            0 ===
                                            s.filter(function (e) {
                                                return o[e.name];
                                            }).length,
                                        l =
                                            i.filter(function (e) {
                                                return e.required;
                                            }).length > 0 && u;
                                    return ce(
                                        'ul',
                                        { className: 'cm-apps' },
                                        c,
                                        s.length > 1 &&
                                            ce(
                                                'li',
                                                {
                                                    className:
                                                        'cm-app cm-toggle-all',
                                                },
                                                ce(_e, {
                                                    name: 'disableAll',
                                                    title: n([
                                                        'app',
                                                        'disableAll',
                                                        'title',
                                                    ]),
                                                    description: n([
                                                        'app',
                                                        'disableAll',
                                                        'description',
                                                    ]),
                                                    checked: !u,
                                                    onlyRequiredEnabled: l,
                                                    onToggle: function (e) {
                                                        a(i, e);
                                                    },
                                                    t: n,
                                                })
                                            )
                                    );
                                },
                            },
                        ]) && we(t.prototype, n),
                        r && we(t, r),
                        i
                    );
                })(ue);
            n(39), n(40);
            function ze(e) {
                return (ze =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function Re() {
                return (Re =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) &&
                                    (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function Te(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                }
            }
            function De(e, t) {
                return (De =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function Ne(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                        return (
                            Date.prototype.toString.call(
                                Reflect.construct(Date, [], function () {})
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = Me(e);
                    if (t) {
                        var o = Me(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return Ie(this, n);
                };
            }
            function Ie(e, t) {
                return !t || ('object' !== ze(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return e;
                      })(e)
                    : t;
            }
            function Me(e) {
                return (Me = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var qe = (function (e) {
                !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError(
                            'Super expression must either be null or a function'
                        );
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                        t && De(e, t);
                })(i, e);
                var t,
                    n,
                    r,
                    o = Ne(i);
                function i(e) {
                    var t;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, i),
                        ((t = o.call(this, e)).state = { appsVisible: !1 }),
                        t
                    );
                }
                return (
                    (t = i),
                    (n = [
                        {
                            key: 'render',
                            value: function () {
                                var e,
                                    t = this,
                                    n = this.props,
                                    r = n.allEnabled,
                                    o = n.onlyRequiredEnabled,
                                    i = n.allDisabled,
                                    a = n.apps,
                                    c = n.onToggle,
                                    s = n.name,
                                    u = n.manager,
                                    l = n.consents,
                                    p = n.title,
                                    f = n.description,
                                    d = n.t,
                                    v = this.state.appsVisible,
                                    y = this.props.required || !1,
                                    h = this.props.purposes || [],
                                    m = 'purpose-item-'.concat(s),
                                    g = h
                                        .map(function (e) {
                                            return d(['purposes', e, 'title?']);
                                        })
                                        .join(', '),
                                    b = y
                                        ? ce(
                                              'span',
                                              {
                                                  className: 'cm-required',
                                                  title: d([
                                                      'app',
                                                      'required',
                                                      'description',
                                                  ]),
                                              },
                                              d(['app', 'required', 'title'])
                                          )
                                        : '';
                                h.length > 0 &&
                                    (e = ce(
                                        'p',
                                        { className: 'purposes' },
                                        d([
                                            'purpose',
                                            h.length > 1
                                                ? 'purposes'
                                                : 'purpose',
                                        ]),
                                        ': ',
                                        g
                                    ));
                                var _ = ce(Ee, {
                                    apps: a,
                                    toggle: function (e, t) {
                                        e.map(function (e) {
                                            e.required ||
                                                u.updateConsent(e.name, t);
                                        });
                                    },
                                    consents: l,
                                    t: d,
                                });
                                return ce(
                                    se,
                                    null,
                                    ce('input', {
                                        id: m,
                                        className:
                                            'cm-list-input' +
                                            (y ? ' required' : '') +
                                            (r
                                                ? ''
                                                : o
                                                ? ' only-required'
                                                : ' half-checked'),
                                        'aria-describedby': ''.concat(
                                            m,
                                            '-description'
                                        ),
                                        disabled: y,
                                        checked: r || (!i && !o),
                                        type: 'checkbox',
                                        onChange: function (e) {
                                            c(e.target.checked);
                                        },
                                    }),
                                    ce(
                                        'label',
                                        Re(
                                            {
                                                htmlFor: m,
                                                className: 'cm-list-label',
                                            },
                                            y ? { tabIndex: '0' } : {}
                                        ),
                                        ce(
                                            'span',
                                            { className: 'cm-list-title' },
                                            p || d(['purposes', s, 'title?'])
                                        ),
                                        b,
                                        ce(
                                            'span',
                                            { className: 'switch' },
                                            ce('div', {
                                                className:
                                                    'slider round active',
                                            })
                                        )
                                    ),
                                    ce(
                                        'div',
                                        { id: ''.concat(m, '-description') },
                                        ce(
                                            'p',
                                            {
                                                className:
                                                    'cm-list-description',
                                            },
                                            f ||
                                                d([
                                                    '!',
                                                    'purposes',
                                                    s,
                                                    'description',
                                                ]) ||
                                                ''
                                        ),
                                        e
                                    ),
                                    a.length > 0 &&
                                        ce(
                                            'div',
                                            { className: 'cm-apps' },
                                            ce(
                                                'div',
                                                { className: 'cm-caret' },
                                                ce(
                                                    'a',
                                                    {
                                                        href: '#',
                                                        onClick: function (e) {
                                                            e.preventDefault(),
                                                                t.setState({
                                                                    appsVisible: !v,
                                                                });
                                                        },
                                                    },
                                                    (v &&
                                                        ce(
                                                            'span',
                                                            null,
                                                            '↑'
                                                        )) ||
                                                        ce('span', null, '↓'),
                                                    ' ',
                                                    a.length,
                                                    ' ',
                                                    d([
                                                        'purposeItem',
                                                        a.length > 1
                                                            ? 'apps'
                                                            : 'app',
                                                    ])
                                                )
                                            ),
                                            ce(
                                                'div',
                                                {
                                                    className:
                                                        'cm-content' +
                                                        (v ? ' expanded' : ''),
                                                },
                                                _
                                            )
                                        )
                                );
                            },
                        },
                    ]) && Te(t.prototype, n),
                    r && Te(t, r),
                    i
                );
            })(ue);
            function Le(e) {
                return (Le =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function Ue(e, t) {
                var n;
                if (
                    'undefined' == typeof Symbol ||
                    null == e[Symbol.iterator]
                ) {
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Fe(e, t);
                            var n = Object.prototype.toString
                                .call(e)
                                .slice(8, -1);
                            'Object' === n &&
                                e.constructor &&
                                (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n)
                                return Array.from(e);
                            if (
                                'Arguments' === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    n
                                )
                            )
                                return Fe(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0,
                            o = function () {};
                        return {
                            s: o,
                            n: function () {
                                return r >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[r++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: o,
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                }
                var i,
                    a = !0,
                    c = !1;
                return {
                    s: function () {
                        n = e[Symbol.iterator]();
                    },
                    n: function () {
                        var e = n.next();
                        return (a = e.done), e;
                    },
                    e: function (e) {
                        (c = !0), (i = e);
                    },
                    f: function () {
                        try {
                            a || null == n.return || n.return();
                        } finally {
                            if (c) throw i;
                        }
                    },
                };
            }
            function Fe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function He(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                }
            }
            function Be(e, t) {
                return (Be =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function Ke(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                        return (
                            Date.prototype.toString.call(
                                Reflect.construct(Date, [], function () {})
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = $e(e);
                    if (t) {
                        var o = $e(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return We(this, n);
                };
            }
            function We(e, t) {
                return !t || ('object' !== Le(t) && 'function' != typeof t)
                    ? Ve(e)
                    : t;
            }
            function Ve(e) {
                if (void 0 === e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return e;
            }
            function $e(e) {
                return ($e = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var Ge = (function (e) {
                !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError(
                            'Super expression must either be null or a function'
                        );
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                        t && Be(e, t);
                })(i, e);
                var t,
                    n,
                    r,
                    o = Ke(i);
                function i(e) {
                    var t;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, i),
                        (t = o.call(this, e)),
                        e.manager.watch(Ve(t)),
                        (t.state = { consents: e.manager.consents }),
                        t
                    );
                }
                return (
                    (t = i),
                    (n = [
                        {
                            key: 'componentWillUnmount',
                            value: function () {
                                this.props.manager.unwatch(this);
                            },
                        },
                        {
                            key: 'update',
                            value: function (e, t, n) {
                                e === this.props.manager &&
                                    'consents' === t &&
                                    this.setState({ consents: n });
                            },
                        },
                        {
                            key: 'render',
                            value: function () {
                                var e,
                                    t = this.props,
                                    n = t.config,
                                    r = t.t,
                                    o = t.manager,
                                    i = this.state.consents,
                                    a = n.apps,
                                    c = {},
                                    s = Ue(a);
                                try {
                                    for (s.s(); !(e = s.n()).done; ) {
                                        var u,
                                            l = e.value,
                                            p = Ue(l.purposes);
                                        try {
                                            for (p.s(); !(u = p.n()).done; ) {
                                                var f = u.value;
                                                void 0 === c[f] && (c[f] = []),
                                                    c[f].push(l);
                                            }
                                        } catch (e) {
                                            p.e(e);
                                        } finally {
                                            p.f();
                                        }
                                    }
                                } catch (e) {
                                    s.e(e);
                                } finally {
                                    s.f();
                                }
                                var d = function (e, t) {
                                        e.map(function (e) {
                                            var n,
                                                r = Ue(c[e]);
                                            try {
                                                for (
                                                    r.s();
                                                    !(n = r.n()).done;

                                                ) {
                                                    var i = n.value;
                                                    i.required ||
                                                        o.updateConsent(
                                                            i.name,
                                                            t
                                                        );
                                                }
                                            } catch (e) {
                                                r.e(e);
                                            } finally {
                                                r.f();
                                            }
                                        });
                                    },
                                    v = function (e) {
                                        var t,
                                            n = {
                                                allEnabled: !0,
                                                onlyRequiredEnabled: !0,
                                                allDisabled: !0,
                                                allRequired: !0,
                                            },
                                            r = Ue(e);
                                        try {
                                            for (r.s(); !(t = r.n()).done; ) {
                                                var o = t.value;
                                                o.required ||
                                                    (n.allRequired = !1),
                                                    i[o.name]
                                                        ? (o.required ||
                                                              (n.onlyRequiredEnabled = !1),
                                                          (n.allDisabled = !1))
                                                        : o.required ||
                                                          (n.allEnabled = !1);
                                            }
                                        } catch (e) {
                                            r.e(e);
                                        } finally {
                                            r.f();
                                        }
                                        return (
                                            n.allDisabled &&
                                                (n.onlyRequiredEnabled = !1),
                                            n
                                        );
                                    },
                                    y = Object.keys(c).map(function (e) {
                                        var t = v(c[e]);
                                        return ce(
                                            'li',
                                            { key: e, className: 'cm-purpose' },
                                            ce(qe, {
                                                allEnabled: t.allEnabled,
                                                allDisabled: t.allDisabled,
                                                onlyRequiredEnabled:
                                                    t.onlyRequiredEnabled,
                                                required: t.allRequired,
                                                consents: i,
                                                name: e,
                                                manager: o,
                                                onToggle: function (t) {
                                                    d([e], t);
                                                },
                                                apps: c[e],
                                                t: r,
                                            })
                                        );
                                    }),
                                    h = Object.keys(c).filter(function (e) {
                                        var t,
                                            n = Ue(c[e]);
                                        try {
                                            for (n.s(); !(t = n.n()).done; )
                                                if (!t.value.required)
                                                    return !0;
                                        } catch (e) {
                                            n.e(e);
                                        } finally {
                                            n.f();
                                        }
                                        return !1;
                                    }),
                                    m = v(a);
                                return ce(
                                    'ul',
                                    { className: 'cm-purposes' },
                                    y,
                                    h.length > 1 &&
                                        ce(
                                            'li',
                                            {
                                                className:
                                                    'cm-purpose cm-toggle-all',
                                            },
                                            ce(qe, {
                                                name: 'disableAll',
                                                title: r([
                                                    'app',
                                                    'disableAll',
                                                    'title',
                                                ]),
                                                description: r([
                                                    'app',
                                                    'disableAll',
                                                    'description',
                                                ]),
                                                allDisabled: m.allDisabled,
                                                allEnabled: m.allEnabled,
                                                onlyRequiredEnabled:
                                                    m.onlyRequiredEnabled,
                                                onToggle: function (e) {
                                                    d(Object.keys(c), e);
                                                },
                                                manager: o,
                                                consents: i,
                                                apps: [],
                                                t: r,
                                            })
                                        )
                                );
                            },
                        },
                    ]) && He(t.prototype, n),
                    r && He(t, r),
                    i
                );
            })(ue);
            n(73), n(56), n(156), n(157);
            function Ze(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return Qe(e);
                    })(e) ||
                    (function (e) {
                        if (
                            'undefined' != typeof Symbol &&
                            Symbol.iterator in Object(e)
                        )
                            return Array.from(e);
                    })(e) ||
                    (function (e, t) {
                        if (!e) return;
                        if ('string' == typeof e) return Qe(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n &&
                            e.constructor &&
                            (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n) return Array.from(e);
                        if (
                            'Arguments' === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                            return Qe(e, t);
                    })(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Qe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function Ye(e) {
                return (Ye =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            var Je = function (e) {
                for (
                    var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        r = 1;
                    r < t;
                    r++
                )
                    n[r - 1] = arguments[r];
                var o,
                    i = Ye(n[0]);
                o =
                    0 === n.length
                        ? {}
                        : 'string' === i || 'number' === i
                        ? Array.prototype.slice.call(n)
                        : n[0];
                for (var a = [], c = e.toString(); c.length > 0; ) {
                    var s = c.match(/\{(?!\{)([\w\d]+)\}(?!\})/);
                    if (null !== s) {
                        var u = c.substr(0, s.index);
                        c = c.substr(s.index + s[0].length);
                        var l = parseInt(s[1]);
                        a.push(u), l != l ? a.push(o[s[1]]) : a.push(o[l]);
                    } else a.push(c), (c = '');
                }
                return a;
            };
            function Xe() {
                var e = (
                        ('string' == typeof window.language
                            ? window.language
                            : null) ||
                        document.documentElement.lang ||
                        'en'
                    ).toLowerCase(),
                    t = new RegExp('^([\\w]+)-([\\w]+)$').exec(e);
                return null === t ? e : t[1];
            }
            function et(e, t, n) {
                var r = t;
                Array.isArray(r) || (r = [r]);
                for (var o = e, i = 0; i < r.length; i++) {
                    if (void 0 === o) return n;
                    if (void 0 !== r[i] && r[i].endsWith('?')) {
                        var a = r[i].slice(0, r[i].length - 1),
                            c = void 0;
                        void 0 !== (c = o instanceof Map ? o.get(a) : o[a]) &&
                            (o = c);
                    } else o = o instanceof Map ? o.get(r[i]) : o[r[i]];
                }
                return void 0 === o ? n : o;
            }
            function tt(e, t, n) {
                var r = n,
                    o = !1;
                '!' === r[0] && ((r = r.slice(1)), (o = !0)),
                    Array.isArray(r) || (r = [r]);
                var i = et(e, [t].concat(Ze(r)));
                if (void 0 === i) {
                    if (o) return;
                    return [
                        '[missing translation: '
                            .concat(t, '/')
                            .concat(r.join('/'), ']'),
                    ];
                }
                for (
                    var a = arguments.length,
                        c = new Array(a > 3 ? a - 3 : 0),
                        s = 3;
                    s < a;
                    s++
                )
                    c[s - 3] = arguments[s];
                return c.length > 0 ? Je.apply(void 0, [i].concat(c)) : i;
            }
            function nt(e) {
                return (nt =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function rt(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                }
            }
            function ot(e, t) {
                return (ot =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function it(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                        return (
                            Date.prototype.toString.call(
                                Reflect.construct(Date, [], function () {})
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = ct(e);
                    if (t) {
                        var o = ct(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return at(this, n);
                };
            }
            function at(e, t) {
                return !t || ('object' !== nt(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return e;
                      })(e)
                    : t;
            }
            function ct(e) {
                return (ct = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var st = (function (e) {
                !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError(
                            'Super expression must either be null or a function'
                        );
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                        t && ot(e, t);
                })(i, e);
                var t,
                    n,
                    r,
                    o = it(i);
                function i(e) {
                    var t;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, i),
                        (t = o.call(this, e)),
                        e.manager.restoreSavedConsents(),
                        t
                    );
                }
                return (
                    (t = i),
                    (n = [
                        {
                            key: 'render',
                            value: function () {
                                var e,
                                    t,
                                    n = this.props,
                                    r = n.hide,
                                    o = n.confirming,
                                    i = n.saveAndHide,
                                    a = n.acceptAndHide,
                                    c = n.declineAndHide,
                                    s = n.config,
                                    u = n.manager,
                                    l = n.t,
                                    p = s.lang || Xe(),
                                    f =
                                        void 0 === s.groupByPurpose ||
                                        s.groupByPurpose;
                                s.mustConsent ||
                                    (e = ce(
                                        'button',
                                        {
                                            title: l(['close']),
                                            className: 'hide',
                                            type: 'button',
                                            onClick: r,
                                        },
                                        ce(pe, { t: l })
                                    ));
                                var d,
                                    v = l(['!', 'consentModal', 'extraHTML']);
                                s.hideDeclineAll ||
                                    u.confirmed ||
                                    (t = ce(
                                        'button',
                                        {
                                            disabled: o,
                                            className:
                                                'cm-btn cm-btn-decline cm-btn-right cm-btn-sm cm-btn-danger cn-decline',
                                            type: 'button',
                                            onClick: c,
                                        },
                                        l(['decline'])
                                    ));
                                var y,
                                    h,
                                    m,
                                    g,
                                    b = ce(
                                        'button',
                                        {
                                            disabled: o,
                                            className:
                                                'cm-btn cm-btn-success cm-btn-info cm-btn-accept',
                                            type: 'button',
                                            onClick: i,
                                        },
                                        l([
                                            u.confirmed
                                                ? 'save'
                                                : 'acceptSelected',
                                        ])
                                    );
                                return (
                                    s.acceptAll &&
                                        !u.confirmed &&
                                        (d = ce(
                                            'button',
                                            {
                                                disabled: o,
                                                className:
                                                    'cm-btn cm-btn-success cm-btn-accept-all',
                                                type: 'button',
                                                onClick: a,
                                            },
                                            l(['acceptAll'])
                                        )),
                                    void 0 !== s.privacyPolicy &&
                                        ('string' == typeof s.privacyPolicy
                                            ? (y = s.privacyPolicy)
                                            : 'object' ===
                                                  nt(s.privacyPolicy) &&
                                              (y =
                                                  s.privacyPolicy[p] ||
                                                  s.privacyPolicy.default)),
                                    void 0 !== v &&
                                        (h = ce('div', {
                                            dangerouslySetInnerHTML: {
                                                __html: v,
                                            },
                                        })),
                                    void 0 !== y &&
                                        (m = ce(
                                            'a',
                                            {
                                                onClick: r,
                                                href: y,
                                                target: '_blank',
                                                rel: 'noopener noreferrer',
                                            },
                                            l([
                                                'consentModal',
                                                'privacyPolicy',
                                                'name',
                                            ])
                                        )),
                                    (g = ce(f ? Ge : Ce, {
                                        t: l,
                                        config: s,
                                        manager: u,
                                    })),
                                    ce(
                                        'div',
                                        { className: 'cookie-modal' },
                                        ce('div', {
                                            className: 'cm-bg',
                                            onClick: r,
                                        }),
                                        ce(
                                            'div',
                                            { className: 'cm-modal' },
                                            ce(
                                                'div',
                                                { className: 'cm-header' },
                                                e,
                                                ce(
                                                    'h1',
                                                    { className: 'title' },
                                                    l(['consentModal', 'title'])
                                                ),
                                                ce(
                                                    'p',
                                                    null,
                                                    l([
                                                        'consentModal',
                                                        'description',
                                                    ]),
                                                    '  ',
                                                    m &&
                                                        l(
                                                            [
                                                                'consentModal',
                                                                'privacyPolicy',
                                                                'text',
                                                            ],
                                                            { privacyPolicy: m }
                                                        )
                                                ),
                                                h
                                            ),
                                            ce(
                                                'div',
                                                { className: 'cm-body' },
                                                g
                                            ),
                                            ce(
                                                'div',
                                                { className: 'cm-footer' },
                                                ce(
                                                    'div',
                                                    {
                                                        className:
                                                            'cm-footer-buttons',
                                                    },
                                                    d,
                                                    b,
                                                    t
                                                ),
                                                ce(
                                                    'p',
                                                    {
                                                        className:
                                                            'cm-powered-by',
                                                    },
                                                    ce(
                                                        'a',
                                                        {
                                                            target: '_blank',
                                                            href:
                                                                s.poweredBy ||
                                                                'https://klaro.kiprotect.com',
                                                            rel:
                                                                'noopener noreferrer',
                                                        },
                                                        l(['poweredBy'])
                                                    )
                                                )
                                            )
                                        )
                                    )
                                );
                            },
                        },
                    ]) && rt(t.prototype, n),
                    r && rt(t, r),
                    i
                );
            })(ue);
            n(116);
            function ut(e) {
                return (ut =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function lt(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                }
            }
            function pt(e, t) {
                return (pt =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function ft(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                        return (
                            Date.prototype.toString.call(
                                Reflect.construct(Date, [], function () {})
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = yt(e);
                    if (t) {
                        var o = yt(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return dt(this, n);
                };
            }
            function dt(e, t) {
                return !t || ('object' !== ut(t) && 'function' != typeof t)
                    ? vt(e)
                    : t;
            }
            function vt(e) {
                if (void 0 === e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return e;
            }
            function yt(e) {
                return (yt = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function ht(e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n),
                    e
                );
            }
            var mt = (function (e) {
                !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError(
                            'Super expression must either be null or a function'
                        );
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                        t && pt(e, t);
                })(i, e);
                var t,
                    n,
                    r,
                    o = ft(i);
                function i(e) {
                    var t;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, i),
                        ht(
                            vt((t = o.call(this, e))),
                            'executeButtonClicked',
                            function (e, n) {
                                var r = t.state.modal;
                                e && t.props.manager.changeAll(n);
                                var o = t.props.manager.confirmed,
                                    i = function () {
                                        t.setState({ confirming: !1 }),
                                            t.props.manager.saveAndApplyConsents(),
                                            t.props.hide();
                                    };
                                e && !o && (r || t.props.config.mustConsent)
                                    ? (t.setState({ confirming: !0 }),
                                      setTimeout(i, 1e3))
                                    : i();
                            }
                        ),
                        ht(vt(t), 'saveAndHide', function () {
                            t.executeButtonClicked(!1, !1);
                        }),
                        ht(vt(t), 'acceptAndHide', function () {
                            t.executeButtonClicked(!0, !0);
                        }),
                        ht(vt(t), 'declineAndHide', function () {
                            t.executeButtonClicked(!0, !1);
                        }),
                        (t.state = { modal: e.modal, confirming: !1 }),
                        t
                    );
                }
                return (
                    (t = i),
                    (n = [
                        {
                            key: 'componentDidUpdate',
                            value: function (e) {
                                e.modal !== this.props.modal &&
                                    this.setState({ modal: this.props.modal });
                            },
                        },
                        {
                            key: 'render',
                            value: function () {
                                var e,
                                    t = this,
                                    n = this.props,
                                    r = n.config,
                                    o = n.show,
                                    i = n.manager,
                                    a = n.t,
                                    c = this.state,
                                    s = c.modal,
                                    u = c.confirming,
                                    l = (function (e) {
                                        for (
                                            var t = new Set([]), n = 0;
                                            n < e.apps.length;
                                            n++
                                        )
                                            for (
                                                var r =
                                                        e.apps[n].purposes ||
                                                        [],
                                                    o = 0;
                                                o < r.length;
                                                o++
                                            )
                                                t.add(r[o]);
                                        return Array.from(t);
                                    })(r)
                                        .map(function (e) {
                                            return a(['purposes', e, 'title?']);
                                        })
                                        .join(', '),
                                    p = a(['!', 'consentNotice', 'extraHTML']),
                                    f = r.lang || Xe();
                                void 0 !== r.privacyPolicy &&
                                    ('string' == typeof r.privacyPolicy
                                        ? (e = r.privacyPolicy)
                                        : 'object' === ut(r.privacyPolicy) &&
                                          (e =
                                              r.privacyPolicy[f] ||
                                              r.privacyPolicy.default));
                                var d,
                                    v = function () {
                                        i.confirmed
                                            ? t.props.hide()
                                            : t.setState({ modal: !1 });
                                    };
                                if (
                                    (i.changed &&
                                        (d = ce(
                                            'p',
                                            { className: 'cn-changes' },
                                            a([
                                                'consentNotice',
                                                'changeDescription',
                                            ])
                                        )),
                                    !o)
                                )
                                    return ce('div', null);
                                var y,
                                    h,
                                    m = r.hideDeclineAll
                                        ? ''
                                        : ce(
                                              'button',
                                              {
                                                  className:
                                                      'cm-btn cm-btn-sm cm-btn-danger cn-decline',
                                                  type: 'button',
                                                  onClick: this.declineAndHide,
                                              },
                                              a(['decline'])
                                          ),
                                    g = r.acceptAll
                                        ? ce(
                                              'button',
                                              {
                                                  className:
                                                      'cm-btn cm-btn-sm cm-btn-success',
                                                  type: 'button',
                                                  onClick: this.acceptAndHide,
                                              },
                                              a(['acceptAll'])
                                          )
                                        : ce(
                                              'button',
                                              {
                                                  className:
                                                      'cm-btn cm-btn-sm cm-btn-success',
                                                  type: 'button',
                                                  onClick: this.saveAndHide,
                                              },
                                              a(['ok'])
                                          ),
                                    b = r.hideLearnMore
                                        ? ''
                                        : ce(
                                              'a',
                                              {
                                                  className:
                                                      'cm-link cm-learn-more',
                                                  href: '#',
                                                  onClick: function (e) {
                                                      e.preventDefault(),
                                                          t.setState({
                                                              modal: !0,
                                                          });
                                                  },
                                              },
                                              a(['consentNotice', 'learnMore']),
                                              '...'
                                          );
                                return (
                                    void 0 !== e &&
                                        (y = ce(
                                            'a',
                                            { onClick: v, href: e },
                                            a([
                                                'consentNotice',
                                                'privacyPolicy',
                                                'name',
                                            ])
                                        )),
                                    void 0 !== p &&
                                        (h = ce('div', {
                                            dangerouslySetInnerHTML: {
                                                __html: p,
                                            },
                                        })),
                                    s ||
                                    i.confirmed ||
                                    (!i.confirmed && r.mustConsent)
                                        ? ce(st, {
                                              t: a,
                                              confirming: u,
                                              config: r,
                                              hide: v,
                                              declineAndHide: this
                                                  .declineAndHide,
                                              saveAndHide: this.saveAndHide,
                                              acceptAndHide: this.acceptAndHide,
                                              manager: i,
                                          })
                                        : ce(
                                              'div',
                                              { className: 'cookie-notice' },
                                              ce(
                                                  'div',
                                                  { className: 'cn-body' },
                                                  ce(
                                                      'p',
                                                      null,
                                                      a(
                                                          [
                                                              'consentNotice',
                                                              'description',
                                                          ],
                                                          {
                                                              purposes: ce(
                                                                  'strong',
                                                                  null,
                                                                  l
                                                              ),
                                                              privacyPolicy: y,
                                                          }
                                                      )
                                                  ),
                                                  d,
                                                  h,
                                                  ce(
                                                      'p',
                                                      { className: 'cn-ok' },
                                                      m,
                                                      g,
                                                      b
                                                  )
                                              )
                                          )
                                );
                            },
                        },
                    ]) && lt(t.prototype, n),
                    r && lt(t, r),
                    i
                );
            })(ue);
            function gt(e) {
                return (gt =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function bt(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                }
            }
            function _t(e, t) {
                return (_t =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function kt(e) {
                var t = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                        return (
                            Date.prototype.toString.call(
                                Reflect.construct(Date, [], function () {})
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = xt(e);
                    if (t) {
                        var o = xt(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return wt(this, n);
                };
            }
            function wt(e, t) {
                return !t || ('object' !== gt(t) && 'function' != typeof t)
                    ? (function (e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return e;
                      })(e)
                    : t;
            }
            function xt(e) {
                return (xt = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var St = (function (e) {
                !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError(
                            'Super expression must either be null or a function'
                        );
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                        t && _t(e, t);
                })(i, e);
                var t,
                    n,
                    r,
                    o = kt(i);
                function i(e) {
                    var t;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, i),
                        ((t = o.call(this, e)).state = {
                            show: e.show > 0 || !e.manager.confirmed,
                        }),
                        t
                    );
                }
                return (
                    (t = i),
                    (n = [
                        {
                            key: 'componentDidUpdate',
                            value: function (e) {
                                if (e.show !== this.props.show) {
                                    var t =
                                        this.props.show > 0 ||
                                        !this.props.manager.confirmed;
                                    t !== this.state.show &&
                                        this.setState({ show: t });
                                }
                            },
                        },
                        {
                            key: 'render',
                            value: function () {
                                var e = this,
                                    t = this.props,
                                    n = t.config,
                                    r = t.t,
                                    o = t.manager,
                                    i = t.stylePrefix,
                                    a = t.modal,
                                    c = this.state.show;
                                return ce(
                                    'div',
                                    { className: i },
                                    ce(mt, {
                                        key: 'app-' + this.props.show,
                                        t: r,
                                        show: c,
                                        modal: a,
                                        hide: function () {
                                            e.setState({ show: !1 });
                                        },
                                        config: n,
                                        manager: o,
                                    })
                                );
                            },
                        },
                    ]) && bt(t.prototype, n),
                    r && bt(t, r),
                    i
                );
            })(ue);
            n(158), n(159), n(160), n(161), n(162), n(163);
            function Ot() {
                for (
                    var e = document.cookie.split(';'),
                        t = [],
                        n = new RegExp('^\\s*([^=]+)\\s*=\\s*(.*?)$'),
                        r = 0;
                    r < e.length;
                    r++
                ) {
                    var o = e[r],
                        i = n.exec(o);
                    null !== i && t.push({ name: i[1], value: i[2] });
                }
                return t;
            }
            function jt(e, t, n) {
                var r = e + '=; Max-Age=-99999999;';
                (document.cookie = r),
                    (r += ' path=' + (t || '/') + ';'),
                    (document.cookie = r),
                    void 0 !== n &&
                        ((r += ' domain=' + n + ';'), (document.cookie = r));
            }
            n(165), n(166), n(167);
            function Pt(e) {
                for (var t = {}, n = 0; n < e.attributes.length; n++) {
                    var r = e.attributes[n];
                    r.name.startsWith('data-') &&
                        (t[r.name.slice(5)] = r.value);
                }
                return t;
            }
            function At(e, t) {
                for (var n = Object.keys(e), r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = e[o];
                    t[o] !== i && t.setAttribute('data-' + o, i);
                }
            }
            function Et(e, t) {
                if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
            }
            function Ct(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                }
            }
            function zt(e, t, n) {
                return t && Ct(e.prototype, t), n && Ct(e, n), e;
            }
            var Rt = {
                cookie: (function () {
                    function e(t) {
                        Et(this, e),
                            (this.cookieName = t.storageName),
                            (this.cookieDomain = t.cookieDomain),
                            (this.cookieExpiresAfterDays =
                                t.cookieExpiresAfterDays);
                    }
                    return (
                        zt(e, [
                            {
                                key: 'get',
                                value: function () {
                                    var e = (function (e) {
                                        for (
                                            var t = Ot(), n = 0;
                                            n < t.length;
                                            n++
                                        )
                                            if (t[n].name === e) return t[n];
                                        return null;
                                    })(this.cookieName);
                                    return e ? e.value : null;
                                },
                            },
                            {
                                key: 'set',
                                value: function (e) {
                                    return (function (e, t, n, r) {
                                        var o = '';
                                        if (n) {
                                            var i = new Date();
                                            i.setTime(
                                                i.getTime() +
                                                    24 * n * 60 * 60 * 1e3
                                            ),
                                                (o =
                                                    '; expires=' +
                                                    i.toUTCString());
                                        }
                                        void 0 !== r && (o += '; domain=' + r),
                                            (document.cookie =
                                                e +
                                                '=' +
                                                (t || '') +
                                                o +
                                                '; path=/');
                                    })(
                                        this.cookieName,
                                        e,
                                        this.cookieExpiresAfterDays,
                                        this.cookieDomain
                                    );
                                },
                            },
                            {
                                key: 'delete',
                                value: function () {
                                    return jt(this.cookieName);
                                },
                            },
                        ]),
                        e
                    );
                })(),
                localStorage: (function () {
                    function e(t) {
                        Et(this, e), (this.key = t.storageName);
                    }
                    return (
                        zt(e, [
                            {
                                key: 'get',
                                value: function () {
                                    return localStorage.getItem(this.key);
                                },
                            },
                            {
                                key: 'set',
                                value: function (e) {
                                    return localStorage.setItem(this.key, e);
                                },
                            },
                            {
                                key: 'delete',
                                value: function () {
                                    return localStorage.removeItem(this.key);
                                },
                            },
                        ]),
                        e
                    );
                })(),
            };
            function Tt(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if (
                            'undefined' == typeof Symbol ||
                            !(Symbol.iterator in Object(e))
                        )
                            return;
                        var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (
                                var a, c = e[Symbol.iterator]();
                                !(r = (a = c.next()).done) &&
                                (n.push(a.value), !t || n.length !== t);
                                r = !0
                            );
                        } catch (e) {
                            (o = !0), (i = e);
                        } finally {
                            try {
                                r || null == c.return || c.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return n;
                    })(e, t) ||
                    Nt(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Dt(e, t) {
                var n;
                if (
                    'undefined' == typeof Symbol ||
                    null == e[Symbol.iterator]
                ) {
                    if (
                        Array.isArray(e) ||
                        (n = Nt(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0,
                            o = function () {};
                        return {
                            s: o,
                            n: function () {
                                return r >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[r++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: o,
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                }
                var i,
                    a = !0,
                    c = !1;
                return {
                    s: function () {
                        n = e[Symbol.iterator]();
                    },
                    n: function () {
                        var e = n.next();
                        return (a = e.done), e;
                    },
                    e: function (e) {
                        (c = !0), (i = e);
                    },
                    f: function () {
                        try {
                            a || null == n.return || n.return();
                        } finally {
                            if (c) throw i;
                        }
                    },
                };
            }
            function Nt(e, t) {
                if (e) {
                    if ('string' == typeof e) return It(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === n &&
                            e.constructor &&
                            (n = e.constructor.name),
                        'Map' === n || 'Set' === n
                            ? Array.from(e)
                            : 'Arguments' === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? It(e, t)
                            : void 0
                    );
                }
            }
            function It(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function Mt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t
                            ).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function qt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? Mt(Object(n), !0).forEach(function (t) {
                              Lt(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                          )
                        : Mt(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                              );
                          });
                }
                return e;
            }
            function Lt(e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n),
                    e
                );
            }
            function Ut(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                }
            }
            var Ft = (function () {
                    function e(t) {
                        !(function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, e),
                            (this.config = t),
                            (this.store = new Rt[this.storageMethod](this)),
                            void 0 === this.store && (this.store = Rt.cookie),
                            (this.consents = this.defaultConsents),
                            (this.confirmed = !1),
                            (this.changed = !1),
                            (this.states = {}),
                            (this.executedOnce = {}),
                            (this.watchers = new Set([])),
                            this.loadConsents(),
                            this.applyConsents(),
                            (this.savedConsents = qt({}, this.consents));
                    }
                    var t, n, r;
                    return (
                        (t = e),
                        (n = [
                            {
                                key: 'watch',
                                value: function (e) {
                                    this.watchers.has(e) ||
                                        this.watchers.add(e);
                                },
                            },
                            {
                                key: 'unwatch',
                                value: function (e) {
                                    this.watchers.has(e) &&
                                        this.watchers.delete(e);
                                },
                            },
                            {
                                key: 'notify',
                                value: function (e, t) {
                                    var n = this;
                                    this.watchers.forEach(function (r) {
                                        r.update(n, e, t);
                                    });
                                },
                            },
                            {
                                key: 'getApp',
                                value: function (e) {
                                    var t = this.config.apps.filter(function (
                                        t
                                    ) {
                                        return t.name === e;
                                    });
                                    if (t.length > 0) return t[0];
                                },
                            },
                            {
                                key: 'getDefaultConsent',
                                value: function (e) {
                                    var t = e.default || e.required;
                                    return (
                                        void 0 === t &&
                                            (t = this.config.default),
                                        void 0 === t && (t = !1),
                                        t
                                    );
                                },
                            },
                            {
                                key: 'changeAll',
                                value: function (e) {
                                    var t = this;
                                    this.config.apps.map(function (n) {
                                        n.required || t.config.required || e
                                            ? t.updateConsent(n.name, !0)
                                            : t.updateConsent(n.name, !1);
                                    });
                                },
                            },
                            {
                                key: 'updateConsent',
                                value: function (e, t) {
                                    (this.consents[e] = t),
                                        this.notify('consents', this.consents);
                                },
                            },
                            {
                                key: 'restoreSavedConsents',
                                value: function () {
                                    (this.consents = qt(
                                        {},
                                        this.savedConsents
                                    )),
                                        this.notify('consents', this.consents);
                                },
                            },
                            {
                                key: 'resetConsents',
                                value: function () {
                                    (this.consents = this.defaultConsents),
                                        (this.states = {}),
                                        (this.confirmed = !1),
                                        this.applyConsents(),
                                        (this.savedConsents = qt(
                                            {},
                                            this.consents
                                        )),
                                        this.store.delete(),
                                        this.notify('consents', this.consents);
                                },
                            },
                            {
                                key: 'getConsent',
                                value: function (e) {
                                    return this.consents[e] || !1;
                                },
                            },
                            {
                                key: 'loadConsents',
                                value: function () {
                                    var e = this.store.get();
                                    return (
                                        null !== e &&
                                            ((this.consents = JSON.parse(
                                                decodeURIComponent(e)
                                            )),
                                            this._checkConsents(),
                                            this.notify(
                                                'consents',
                                                this.consents
                                            )),
                                        this.consents
                                    );
                                },
                            },
                            {
                                key: 'saveAndApplyConsents',
                                value: function () {
                                    this.saveConsents(), this.applyConsents();
                                },
                            },
                            {
                                key: 'saveConsents',
                                value: function () {
                                    var e = encodeURIComponent(
                                        JSON.stringify(this.consents)
                                    );
                                    this.store.set(e),
                                        (this.confirmed = !0),
                                        (this.changed = !1),
                                        (this.savedConsents = qt(
                                            {},
                                            this.consents
                                        ));
                                },
                            },
                            {
                                key: 'applyConsents',
                                value: function () {
                                    for (
                                        var e = 0;
                                        e < this.config.apps.length;
                                        e++
                                    ) {
                                        var t = this.config.apps[e],
                                            n = this.states[t.name],
                                            r =
                                                void 0 !== t.optOut
                                                    ? t.optOut
                                                    : this.config.optOut || !1,
                                            o =
                                                void 0 !== t.required
                                                    ? t.required
                                                    : this.config.required ||
                                                      !1,
                                            i = this.confirmed || r,
                                            a =
                                                (this.getConsent(t.name) &&
                                                    i) ||
                                                o;
                                        n !== a &&
                                            (this.updateAppElements(t, a),
                                            this.updateAppCookies(t, a),
                                            void 0 !== t.callback &&
                                                t.callback(a, t),
                                            void 0 !== this.config.callback &&
                                                this.config.callback(a, t),
                                            (this.states[t.name] = a));
                                    }
                                },
                            },
                            {
                                key: 'updateAppElements',
                                value: function (e, t) {
                                    if (t) {
                                        if (
                                            e.onlyOnce &&
                                            this.executedOnce[e.name]
                                        )
                                            return;
                                        this.executedOnce[e.name] = !0;
                                    }
                                    for (
                                        var n = document.querySelectorAll(
                                                "[data-name='" + e.name + "']"
                                            ),
                                            r = 0;
                                        r < n.length;
                                        r++
                                    ) {
                                        var o = n[r],
                                            i = o.parentElement,
                                            a = Pt(o),
                                            c = a.type,
                                            s = ['href', 'src'];
                                        if ('SCRIPT' === o.tagName) {
                                            for (
                                                var u = document.createElement(
                                                        'script'
                                                    ),
                                                    l = 0,
                                                    p = Object.keys(a);
                                                l < p.length;
                                                l++
                                            ) {
                                                var f = p[l];
                                                u.setAttribute(
                                                    'data-' + f,
                                                    a[f]
                                                );
                                            }
                                            (u.type = 'text/plain'),
                                                (u.innerText = o.innerText),
                                                (u.text = o.text),
                                                (u.class = o.class),
                                                (u.style.cssText = o.style),
                                                (u.id = o.id),
                                                (u.name = o.name),
                                                (u.defer = o.defer),
                                                (u.async = o.async),
                                                t &&
                                                    ((u.type = c),
                                                    void 0 !== a.src &&
                                                        (u.src = a.src)),
                                                i.insertBefore(u, o),
                                                i.removeChild(o);
                                        } else {
                                            if (t) {
                                                var d,
                                                    v = Dt(s);
                                                try {
                                                    for (
                                                        v.s();
                                                        !(d = v.n()).done;

                                                    ) {
                                                        var y = d.value,
                                                            h = a[y];
                                                        void 0 !== h &&
                                                            (void 0 ===
                                                                a[
                                                                    'original-' +
                                                                        y
                                                                ] &&
                                                                (a[
                                                                    'original-' +
                                                                        y
                                                                ] = o[y]),
                                                            (o[y] = h));
                                                    }
                                                } catch (e) {
                                                    v.e(e);
                                                } finally {
                                                    v.f();
                                                }
                                                void 0 !== a.title &&
                                                    (o.title = a.title),
                                                    void 0 !==
                                                        a['original-display'] &&
                                                        (o.style.display =
                                                            a[
                                                                'original-display'
                                                            ]);
                                            } else {
                                                void 0 !== a.title &&
                                                    o.removeAttribute('title'),
                                                    'true' === a.hide &&
                                                        (void 0 ===
                                                            a[
                                                                'original-display'
                                                            ] &&
                                                            (a[
                                                                'original-display'
                                                            ] =
                                                                o.style.display),
                                                        (o.style.display =
                                                            'none'));
                                                var m,
                                                    g = Dt(s);
                                                try {
                                                    for (
                                                        g.s();
                                                        !(m = g.n()).done;

                                                    ) {
                                                        var b = m.value;
                                                        void 0 !== a[b] &&
                                                            void 0 !==
                                                                a[
                                                                    'original-' +
                                                                        b
                                                                ] &&
                                                            (o[b] =
                                                                a[
                                                                    'original-' +
                                                                        b
                                                                ]);
                                                    }
                                                } catch (e) {
                                                    g.e(e);
                                                } finally {
                                                    g.f();
                                                }
                                            }
                                            At(a, o);
                                        }
                                    }
                                },
                            },
                            {
                                key: 'updateAppCookies',
                                value: function (e, t) {
                                    if (
                                        !t &&
                                        void 0 !== e.cookies &&
                                        e.cookies.length > 0
                                    )
                                        for (
                                            var n = Ot(), r = 0;
                                            r < e.cookies.length;
                                            r++
                                        ) {
                                            var o = e.cookies[r],
                                                i = void 0,
                                                a = void 0;
                                            if (o instanceof Array) {
                                                var c = Tt(o, 3);
                                                (o = c[0]),
                                                    (i = c[1]),
                                                    (a = c[2]);
                                            }
                                            o instanceof RegExp ||
                                                (o = new RegExp(
                                                    '^' +
                                                        o.replace(
                                                            /[-[\]/{}()*+?.\\^$|]/g,
                                                            '\\$&'
                                                        ) +
                                                        '$'
                                                ));
                                            for (var s = 0; s < n.length; s++) {
                                                var u = n[s];
                                                null !== o.exec(u.name) &&
                                                    (console.debug(
                                                        'Deleting cookie:',
                                                        u.name,
                                                        'Matched pattern:',
                                                        o,
                                                        'Path:',
                                                        i,
                                                        'Domain:',
                                                        a
                                                    ),
                                                    jt(u.name, i, a));
                                            }
                                        }
                                },
                            },
                            {
                                key: '_checkConsents',
                                value: function () {
                                    for (
                                        var e = !0,
                                            t = new Set(
                                                this.config.apps.map(function (
                                                    e
                                                ) {
                                                    return e.name;
                                                })
                                            ),
                                            n = new Set(
                                                Object.keys(this.consents)
                                            ),
                                            r = 0,
                                            o = Object.keys(this.consents);
                                        r < o.length;
                                        r++
                                    ) {
                                        var i = o[r];
                                        t.has(i) || delete this.consents[i];
                                    }
                                    var a,
                                        c = Dt(this.config.apps);
                                    try {
                                        for (c.s(); !(a = c.n()).done; ) {
                                            var s = a.value;
                                            n.has(s.name) ||
                                                ((this.consents[
                                                    s.name
                                                ] = this.getDefaultConsent(s)),
                                                (e = !1));
                                        }
                                    } catch (e) {
                                        c.e(e);
                                    } finally {
                                        c.f();
                                    }
                                    (this.confirmed = e),
                                        e || (this.changed = !0);
                                },
                            },
                            {
                                key: 'storageMethod',
                                get: function () {
                                    return (
                                        this.config.storageMethod || 'cookie'
                                    );
                                },
                            },
                            {
                                key: 'storageName',
                                get: function () {
                                    return (
                                        this.config.storageName ||
                                        this.config.cookieName ||
                                        'klaro'
                                    );
                                },
                            },
                            {
                                key: 'cookieDomain',
                                get: function () {
                                    return this.config.cookieDomain || void 0;
                                },
                            },
                            {
                                key: 'cookieExpiresAfterDays',
                                get: function () {
                                    return (
                                        this.config.cookieExpiresAfterDays ||
                                        120
                                    );
                                },
                            },
                            {
                                key: 'defaultConsents',
                                get: function () {
                                    for (
                                        var e = {}, t = 0;
                                        t < this.config.apps.length;
                                        t++
                                    ) {
                                        var n = this.config.apps[t];
                                        e[n.name] = this.getDefaultConsent(n);
                                    }
                                    return e;
                                },
                            },
                        ]) && Ut(t.prototype, n),
                        r && Ut(t, r),
                        e
                    );
                })(),
                Ht = n(119),
                Bt = n.n(Ht),
                Kt = n(120),
                Wt = n.n(Kt),
                Vt = n(121),
                $t = n.n(Vt),
                Gt = n(122),
                Zt = n.n(Gt),
                Qt = n(123),
                Yt = n.n(Qt),
                Jt = n(124),
                Xt = n.n(Jt),
                en = n(125),
                tn = n.n(en),
                nn = n(126),
                rn = n.n(nn),
                on = n(127),
                an = n.n(on),
                cn = n(128),
                sn = n.n(cn),
                un = n(129),
                ln = n.n(un),
                pn = n(130),
                fn = n.n(pn),
                dn = n(131),
                vn = n.n(dn),
                yn = n(132),
                hn = n.n(yn),
                mn = n(133),
                gn = n.n(mn),
                bn = n(134),
                _n = n.n(bn),
                kn = n(135),
                wn = n.n(kn),
                xn = n(136),
                Sn = n.n(xn),
                On = n(137),
                jn = n.n(On),
                Pn = n(138),
                An = n.n(Pn),
                En = {
                    ca: Bt.a,
                    da: Wt.a,
                    de: $t.a,
                    el: Zt.a,
                    en: Yt.a,
                    es: Xt.a,
                    fi: tn.a,
                    fr: rn.a,
                    hu: an.a,
                    hr: sn.a,
                    it: ln.a,
                    nl: fn.a,
                    no: vn.a,
                    ro: hn.a,
                    sr: gn.a,
                    sr_cyrl: _n.a,
                    sv: wn.a,
                    tr: Sn.a,
                    pl: jn.a,
                    ru: An.a,
                };
            function Cn(e, t) {
                var n;
                if (
                    'undefined' == typeof Symbol ||
                    null == e[Symbol.iterator]
                ) {
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return zn(e, t);
                            var n = Object.prototype.toString
                                .call(e)
                                .slice(8, -1);
                            'Object' === n &&
                                e.constructor &&
                                (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n)
                                return Array.from(e);
                            if (
                                'Arguments' === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    n
                                )
                            )
                                return zn(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0,
                            o = function () {};
                        return {
                            s: o,
                            n: function () {
                                return r >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[r++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: o,
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                }
                var i,
                    a = !0,
                    c = !1;
                return {
                    s: function () {
                        n = e[Symbol.iterator]();
                    },
                    n: function () {
                        var e = n.next();
                        return (a = e.done), e;
                    },
                    e: function (e) {
                        (c = !0), (i = e);
                    },
                    f: function () {
                        try {
                            a || null == n.return || n.return();
                        } finally {
                            if (c) throw i;
                        }
                    },
                };
            }
            function zn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function Rn(e) {
                for (
                    var t = new Map([]), n = 0, r = Object.keys(e);
                    n < r.length;
                    n++
                ) {
                    var o = r[n],
                        i = e[o];
                    'string' == typeof o &&
                        ('string' == typeof i ? t.set(o, i) : t.set(o, Rn(i)));
                }
                return t;
            }
            function Tn(e, t, n, r) {
                var o = function (e, t, n) {
                    if (n instanceof Map) {
                        var r = new Map([]);
                        Tn(r, n, !0, !1), e.set(t, r);
                    } else e.set(t, n);
                };
                if (!(t instanceof Map && e instanceof Map))
                    throw new Error('Parameters are not maps!');
                void 0 === n && (n = !0),
                    void 0 === r && (r = !1),
                    r && (e = new e.constructor(e));
                var i,
                    a = Cn(t.keys());
                try {
                    for (a.s(); !(i = a.n()).done; ) {
                        var c = i.value,
                            s = t.get(c),
                            u = e.get(c);
                        if (e.has(c))
                            if (s instanceof Map && u instanceof Map)
                                e.set(c, Tn(u, s, n, r));
                            else {
                                if (!n) continue;
                                o(e, c, s);
                            }
                        else o(e, c, s);
                    }
                } catch (e) {
                    a.e(e);
                } finally {
                    a.f();
                }
                return e;
            }
            void 0 === window.btoa && (window.btoa = !1);
            var Dn = (function (e) {
                    if (void 0 !== document.currentScript)
                        return document.currentScript;
                    for (
                        var t = document.getElementsByTagName('script'), n = 0;
                        n < t.length;
                        n++
                    ) {
                        var r = t[n];
                        if (r.src.includes(e)) return r;
                    }
                })('klaro'),
                Nn = Rn(En),
                In = Dn.getAttribute('data-config') || 'klaroConfig',
                Mn = 'true' === Dn.getAttribute('data-no-auto-load'),
                qn = Dn.getAttribute('data-style-prefix') || 'klaro',
                Ln = window[In],
                Un = {};
            function Fn(e) {
                e = e || Ln;
                var t = new Map([]);
                return Tn(t, Nn), Tn(t, Rn(e.translations || {})), t;
            }
            window.addEventListener('DOMContentLoaded', Kn);
            var Hn = 1;
            function Bn(e, t, n) {
                if (void 0 !== e) {
                    var r = 0;
                    t && (r = Hn++);
                    var o = (function (e) {
                            var t = (function (e) {
                                    return e.elementID || 'klaro';
                                })(e),
                                n = document.getElementById(t);
                            return (
                                null === n &&
                                    (((n = document.createElement(
                                        'div'
                                    )).id = t),
                                    document.body.appendChild(n)),
                                n
                            );
                        })(e),
                        i = Fn(e),
                        a = Vn(e),
                        c = e.lang || Xe();
                    return ne(
                        ce(St, {
                            t: function () {
                                for (
                                    var e = arguments.length,
                                        t = new Array(e),
                                        n = 0;
                                    n < e;
                                    n++
                                )
                                    t[n] = arguments[n];
                                return tt.apply(void 0, [i, c].concat(t));
                            },
                            stylePrefix: qn,
                            manager: a,
                            config: e,
                            modal: n,
                            show: r,
                        }),
                        o
                    );
                }
            }
            function Kn() {
                Mn || Bn(Ln);
            }
            function Wn() {
                for (var e in Object.keys(Un)) Un.delete(e);
            }
            function Vn(e) {
                var t = (e = e || Ln).storageName || e.cookieName || 'default';
                return void 0 === Un[t] && (Un[t] = new Ft(e)), Un[t];
            }
            function $n(e, t) {
                return Bn((e = e || Ln), !0, t), !1;
            }
            function Gn() {
                return '0.5.28';
            }
        },
    ]);
});
