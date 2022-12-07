var oldJQ = null,
  jQueryInc = !1;
"undefined" != typeof jQuery && ((jQueryInc = !0), (oldJQ = jQuery));
(function (b, a) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = b.document
        ? a(b, !0)
        : function (b) {
            if (!b.document)
              throw Error("jQuery requires a window with a document");
            return a(b);
          })
    : a(b);
})("undefined" != typeof window ? window : this, function (b, a) {
  function c(a, b, c) {
    b = b || K;
    var e,
      d = b.createElement("script");
    if (((d.text = a), c)) for (e in Ga) c[e] && (d[e] = c[e]);
    b.head.appendChild(d).parentNode.removeChild(d);
  }
  function e(a) {
    return null == a
      ? a + ""
      : "object" == typeof a || "function" == typeof a
      ? J[ca.call(a)] || "object"
      : typeof a;
  }
  function f(a) {
    var b = !!a && "length" in a && a.length,
      c = e(a);
    return (
      !z(a) &&
      !ra(a) &&
      ("array" === c ||
        0 === b ||
        ("number" == typeof b && 0 < b && b - 1 in a))
    );
  }
  function d(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }
  function g(a, b, c) {
    return z(b)
      ? k.grep(a, function (a, e) {
          return !!b.call(a, e, a) !== c;
        })
      : b.nodeType
      ? k.grep(a, function (a) {
          return (a === b) !== c;
        })
      : "string" != typeof b
      ? k.grep(a, function (a) {
          return -1 < W.call(b, a) !== c;
        })
      : k.filter(b, a, c);
  }
  function h(a, b) {
    for (; (a = a[b]) && 1 !== a.nodeType; );
    return a;
  }
  function l(a) {
    return a;
  }
  function m(a) {
    throw a;
  }
  function p(a, b, c, e) {
    var d;
    try {
      a && z((d = a.promise))
        ? d.call(a).done(b).fail(c)
        : a && z((d = a.then))
        ? d.call(a, b, c)
        : b.apply(void 0, [a].slice(e));
    } catch (f) {
      c.apply(void 0, [f]);
    }
  }
  function n() {
    K.removeEventListener("DOMContentLoaded", n);
    b.removeEventListener("load", n);
    k.ready();
  }
  function r(a, b) {
    return b.toUpperCase();
  }
  function t(a) {
    return a.replace(Cb, "ms-").replace(Db, r);
  }
  function A() {
    this.expando = k.expando + A.uid++;
  }
  function u(a, b, c) {
    var e, d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((e = "data-" + b.replace(Eb, "-$&").toLowerCase()),
        (c = a.getAttribute(e)),
        "string" == typeof c)
      ) {
        try {
          (d = c),
            (c =
              "true" === d ||
              ("false" !== d &&
                ("null" === d
                  ? null
                  : d === +d + ""
                  ? +d
                  : Fb.test(d)
                  ? JSON.parse(d)
                  : d)));
        } catch (f) {}
        aa.set(a, b, c);
      } else c = void 0;
    return c;
  }
  function y(a, b, c, e) {
    var d,
      f,
      g = 20,
      h = e
        ? function () {
            return e.cur();
          }
        : function () {
            return k.css(a, b, "");
          },
      l = h(),
      n = (c && c[3]) || (k.cssNumber[b] ? "" : "px"),
      m = (k.cssNumber[b] || ("px" !== n && +l)) && Ha.exec(k.css(a, b));
    if (m && m[3] !== n) {
      l /= 2;
      n = n || m[3];
      for (m = +l || 1; g--; )
        k.style(a, b, m + n),
          0 >= (1 - f) * (1 - (f = h() / l || 0.5)) && (g = 0),
          (m /= f);
      m *= 2;
      k.style(a, b, m + n);
      c = c || [];
    }
    return (
      c &&
        ((m = +m || +l || 0),
        (d = c[1] ? m + (c[1] + 1) * c[2] : +c[2]),
        e && ((e.unit = n), (e.start = m), (e.end = d))),
      d
    );
  }
  function x(a, b) {
    for (var c, e, d, f, g, h, l, n = [], m = 0, r = a.length; m < r; m++)
      (e = a[m]),
        e.style &&
          ((c = e.style.display),
          b
            ? ("none" === c &&
                ((n[m] = C.get(e, "display") || null),
                n[m] || (e.style.display = "")),
              "" === e.style.display &&
                Pa(e) &&
                (n[m] =
                  ((d = e),
                  (f = void 0),
                  (g = void 0),
                  void 0,
                  (l = void 0),
                  (g = d.ownerDocument),
                  (h = d.nodeName),
                  (l = db[h]),
                  l ||
                    ((f = g.body.appendChild(g.createElement(h))),
                    (l = k.css(f, "display")),
                    f.parentNode.removeChild(f),
                    "none" === l && (l = "block"),
                    (db[h] = l),
                    l))))
            : "none" !== c && ((n[m] = "none"), C.set(e, "display", c)));
    for (m = 0; m < r; m++) null != n[m] && (a[m].style.display = n[m]);
    return a;
  }
  function q(a, b) {
    var c;
    return (
      (c =
        void 0 !== a.getElementsByTagName
          ? a.getElementsByTagName(b || "*")
          : void 0 !== a.querySelectorAll
          ? a.querySelectorAll(b || "*")
          : []),
      void 0 === b || (b && d(a, b)) ? k.merge([a], c) : c
    );
  }
  function F(a, b) {
    for (var c = 0, e = a.length; c < e; c++)
      C.set(a[c], "globalEval", !b || C.get(b[c], "globalEval"));
  }
  function ha(a, b, c, d, f) {
    for (
      var g,
        h,
        l,
        n,
        m = b.createDocumentFragment(),
        r = [],
        p = 0,
        B = a.length;
      p < B;
      p++
    )
      if (((g = a[p]), g || 0 === g))
        if ("object" === e(g)) k.merge(r, g.nodeType ? [g] : g);
        else if (Hb.test(g)) {
          h = h || m.appendChild(b.createElement("div"));
          l = (eb.exec(g) || ["", ""])[1].toLowerCase();
          l = ia[l] || ia._default;
          h.innerHTML = l[1] + k.htmlPrefilter(g) + l[2];
          for (l = l[0]; l--; ) h = h.lastChild;
          k.merge(r, h.childNodes);
          h = m.firstChild;
          h.textContent = "";
        } else r.push(b.createTextNode(g));
    m.textContent = "";
    for (p = 0; (g = r[p++]); )
      if (d && -1 < k.inArray(g, d)) f && f.push(g);
      else if (
        ((n = k.contains(g.ownerDocument, g)),
        (h = q(m.appendChild(g), "script")),
        n && F(h),
        c)
      )
        for (l = 0; (g = h[l++]); ) fb.test(g.type || "") && c.push(g);
    return m;
  }
  function P() {
    return !0;
  }
  function N() {
    return !1;
  }
  function ka() {
    try {
      return K.activeElement;
    } catch (a) {}
  }
  function S(a, b, c, e, d, f) {
    var g, h;
    if ("object" == typeof b) {
      for (h in ("string" != typeof c && ((e = e || c), (c = void 0)), b))
        S(a, h, c, e, b[h], f);
      return a;
    }
    if (
      (null == e && null == d
        ? ((d = c), (e = c = void 0))
        : null == d &&
          ("string" == typeof c
            ? ((d = e), (e = void 0))
            : ((d = e), (e = c), (c = void 0))),
      !1 === d)
    )
      d = N;
    else if (!d) return a;
    return (
      1 === f &&
        ((g = d),
        (d = function (a) {
          return k().off(a), g.apply(this, arguments);
        }),
        (d.guid = g.guid || (g.guid = k.guid++))),
      a.each(function () {
        k.event.add(this, b, d, e, c);
      })
    );
  }
  function Da(a, b) {
    return (
      (d(a, "table") &&
        d(11 !== b.nodeType ? b : b.firstChild, "tr") &&
        k(a).children("tbody")[0]) ||
      a
    );
  }
  function da(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function ya(a) {
    return (
      "true/" === (a.type || "").slice(0, 5)
        ? (a.type = a.type.slice(5))
        : a.removeAttribute("type"),
      a
    );
  }
  function T(a, b) {
    var c, e, d, f, g, h;
    if (1 === b.nodeType) {
      if (
        C.hasData(a) &&
        ((c = C.access(a)), (e = C.set(b, c)), (h = c.events), h)
      )
        for (d in (delete e.handle, (e.events = {}), h))
          for (c = 0, e = h[d].length; c < e; c++) k.event.add(b, d, h[d][c]);
      aa.hasData(a) &&
        ((f = aa.access(a)), (g = k.extend({}, f)), aa.set(b, g));
    }
  }
  function ja(a, b, e, d) {
    b = Qa.apply([], b);
    var f,
      g,
      h,
      l,
      n = 0,
      m = a.length,
      r = m - 1,
      p = b[0],
      B = z(p);
    if (B || (1 < m && "string" == typeof p && !D.checkClone && Ib.test(p)))
      return a.each(function (c) {
        var f = a.eq(c);
        B && (b[0] = p.call(this, c, f.html()));
        ja(f, b, e, d);
      });
    if (
      m &&
      ((f = ha(b, a[0].ownerDocument, !1, a, d)),
      (g = f.firstChild),
      1 === f.childNodes.length && (f = g),
      g || d)
    ) {
      g = k.map(q(f, "script"), da);
      for (h = g.length; n < m; n++)
        (l = f),
          n !== r &&
            ((l = k.clone(l, !0, !0)), h && k.merge(g, q(l, "script"))),
          e.call(a[n], l, n);
      if (h)
        for (f = g[g.length - 1].ownerDocument, k.map(g, ya), n = 0; n < h; n++)
          (l = g[n]),
            fb.test(l.type || "") &&
              !C.access(l, "globalEval") &&
              k.contains(f, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? k._evalUrl && k._evalUrl(l.src)
                : c(l.textContent.replace(Kb, ""), f, l));
    }
    return a;
  }
  function M(a, b, c) {
    for (var e = b ? k.filter(b, a) : a, d = 0; null != (b = e[d]); d++)
      c || 1 !== b.nodeType || k.cleanData(q(b)),
        b.parentNode &&
          (c && k.contains(b.ownerDocument, b) && F(q(b, "script")),
          b.parentNode.removeChild(b));
    return a;
  }
  function la(a, b, c) {
    var e,
      d,
      f,
      g,
      h = a.style;
    return (
      (c = c || Ra(a)),
      c &&
        ((g = c.getPropertyValue(b) || c[b]),
        "" !== g || k.contains(a.ownerDocument, a) || (g = k.style(a, b)),
        !D.pixelBoxStyles() &&
          Wa.test(g) &&
          Lb.test(b) &&
          ((e = h.width),
          (d = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = e),
          (h.minWidth = d),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    );
  }
  function R(a, b) {
    return {
      get: function () {
        if (!a()) return (this.get = b).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function ma(a) {
    var b = k.cssProps[a];
    if (!b) {
      var b = k.cssProps,
        c;
      a: if (((c = a), !(c in gb))) {
        for (var e = c[0].toUpperCase() + c.slice(1), d = hb.length; d--; )
          if (((c = hb[d] + e), c in gb)) break a;
        c = void 0;
      }
      b = b[a] = c || a;
    }
    return b;
  }
  function O(a, b, c) {
    return (a = Ha.exec(b)) ? Math.max(0, a[2] - (c || 0)) + (a[3] || "px") : b;
  }
  function ea(a, b, c, e, d, f) {
    var g = "width" === b ? 1 : 0,
      h = 0,
      l = 0;
    if (c === (e ? "border" : "content")) return 0;
    for (; 4 > g; g += 2)
      "margin" === c && (l += k.css(a, c + ua[g], !0, d)),
        e
          ? ("content" === c && (l -= k.css(a, "padding" + ua[g], !0, d)),
            "margin" !== c &&
              (l -= k.css(a, "border" + ua[g] + "Width", !0, d)))
          : ((l += k.css(a, "padding" + ua[g], !0, d)),
            "padding" !== c
              ? (l += k.css(a, "border" + ua[g] + "Width", !0, d))
              : (h += k.css(a, "border" + ua[g] + "Width", !0, d)));
    return (
      !e &&
        0 <= f &&
        (l += Math.max(
          0,
          Math.ceil(
            a["offset" + b[0].toUpperCase() + b.slice(1)] - f - l - h - 0.5
          )
        )),
      l
    );
  }
  function na(a, b, c) {
    var e = Ra(a),
      d = la(a, b, e),
      f = "border-box" === k.css(a, "boxSizing", !1, e),
      g = f;
    if (Wa.test(d)) {
      if (!c) return d;
      d = "auto";
    }
    return (
      (g = g && (D.boxSizingReliable() || d === a.style[b])),
      ("auto" === d ||
        (!parseFloat(d) && "inline" === k.css(a, "display", !1, e))) &&
        ((d = a["offset" + b[0].toUpperCase() + b.slice(1)]), (g = !0)),
      (d = parseFloat(d) || 0),
      d + ea(a, b, c || (f ? "border" : "content"), g, e, d) + "px"
    );
  }
  function Q(a, b, c, e, d) {
    return new Q.prototype.init(a, b, c, e, d);
  }
  function Ia() {
    Sa &&
      (!1 === K.hidden && b.requestAnimationFrame
        ? b.requestAnimationFrame(Ia)
        : b.setTimeout(Ia, k.fx.interval),
      k.fx.tick());
  }
  function Ta() {
    return (
      b.setTimeout(function () {
        Fa = void 0;
      }),
      (Fa = Date.now())
    );
  }
  function sa(a, b) {
    var c,
      e = 0,
      d = { height: a };
    for (b = b ? 1 : 0; 4 > e; e += 2 - b)
      (c = ua[e]), (d["margin" + c] = d["padding" + c] = a);
    return b && (d.opacity = d.width = a), d;
  }
  function fa(a, b, c) {
    for (
      var d,
        e = (U.tweeners[b] || []).concat(U.tweeners["*"]),
        f = 0,
        g = e.length;
      f < g;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function U(a, b, c) {
    var d,
      e,
      f = 0,
      g = U.prefilters.length,
      h = k.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (e) return !1;
        for (
          var b = Fa || Ta(),
            b = Math.max(0, n.startTime + n.duration - b),
            c = 1 - (b / n.duration || 0),
            d = 0,
            f = n.tweens.length;
          d < f;
          d++
        )
          n.tweens[d].run(c);
        return (
          h.notifyWith(a, [n, c, b]),
          1 > c && f
            ? b
            : (f || h.notifyWith(a, [n, 1, 0]), h.resolveWith(a, [n]), !1)
        );
      },
      n = h.promise({
        elem: a,
        props: k.extend({}, b),
        opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Fa || Ta(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = k.Tween(
            a,
            n.opts,
            b,
            c,
            n.opts.specialEasing[b] || n.opts.easing
          );
          return n.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? n.tweens.length : 0;
          if (e) return this;
          for (e = !0; c < d; c++) n.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [n, 1, 0]), h.resolveWith(a, [n, b]))
              : h.rejectWith(a, [n, b]),
            this
          );
        },
      });
    b = n.props;
    !(function (a, b) {
      var c, d, e, f, v;
      for (c in a)
        if (
          ((d = t(c)),
          (e = b[d]),
          (f = a[c]),
          Array.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
          c !== d && ((a[d] = f), delete a[c]),
          (v = k.cssHooks[d]),
          v && "expand" in v)
        )
          for (c in ((f = v.expand(f)), delete a[d], f))
            c in a || ((a[c] = f[c]), (b[c] = e));
        else b[d] = e;
    })(b, n.opts.specialEasing);
    for (; f < g; f++)
      if (((d = U.prefilters[f].call(n, a, b, n.opts)), d))
        return (
          z(d.stop) &&
            (k._queueHooks(n.elem, n.opts.queue).stop = d.stop.bind(d)),
          d
        );
    return (
      k.map(b, fa, n),
      z(n.opts.start) && n.opts.start.call(a, n),
      n
        .progress(n.opts.progress)
        .done(n.opts.done, n.opts.complete)
        .fail(n.opts.fail)
        .always(n.opts.always),
      k.fx.timer(k.extend(l, { elem: a, anim: n, queue: n.opts.queue })),
      n
    );
  }
  function za(a) {
    return (a.match(oa) || []).join(" ");
  }
  function ba(a) {
    return (a.getAttribute && a.getAttribute("class")) || "";
  }
  function V(a) {
    return Array.isArray(a) ? a : ("string" == typeof a && a.match(oa)) || [];
  }
  function X(a, b, c, d) {
    var f;
    if (Array.isArray(b))
      k.each(b, function (b, e) {
        c || Mb.test(a)
          ? d(a, e)
          : X(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            );
      });
    else if (c || "object" !== e(b)) d(a, b);
    else for (f in b) X(a + "[" + f + "]", b[f], c, d);
  }
  function B(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(oa) || [];
      if (z(c))
        for (; (d = f[e++]); )
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function E(a, b, c, d) {
    function e(h) {
      var l;
      return (
        (f[h] = !0),
        k.each(a[h] || [], function (a, v) {
          var h = v(b, c, d);
          return "string" != typeof h || g || f[h]
            ? g
              ? !(l = h)
              : void 0
            : (b.dataTypes.unshift(h), e(h), !1);
        }),
        l
      );
    }
    var f = {},
      g = a === Xa;
    return e(b.dataTypes[0]) || (!f["*"] && e("*"));
  }
  function H(a, b) {
    var c,
      d,
      e = k.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && k.extend(!0, a, d), a;
  }
  var pa = [],
    K = b.document,
    va = Object.getPrototypeOf,
    qa = pa.slice,
    Qa = pa.concat,
    L = pa.push,
    W = pa.indexOf,
    J = {},
    ca = J.toString,
    Y = J.hasOwnProperty,
    Ja = Y.toString,
    wa = Ja.call(Object),
    D = {},
    z = function (a) {
      return "function" == typeof a && "number" != typeof a.nodeType;
    },
    ra = function (a) {
      return null != a && a === a.window;
    },
    Ga = { type: !0, src: !0, noModule: !0 },
    k = function (a, b) {
      return new k.fn.init(a, b);
    },
    Ya = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  k.fn = k.prototype = {
    jquery: "3.3.1",
    constructor: k,
    length: 0,
    toArray: function () {
      return qa.call(this);
    },
    get: function (a) {
      return null == a
        ? qa.call(this)
        : 0 > a
        ? this[a + this.length]
        : this[a];
    },
    pushStack: function (a) {
      a = k.merge(this.constructor(), a);
      return (a.prevObject = this), a;
    },
    each: function (a) {
      return k.each(this, a);
    },
    map: function (a) {
      return this.pushStack(
        k.map(this, function (b, c) {
          return a.call(b, c, b);
        })
      );
    },
    slice: function () {
      return this.pushStack(qa.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (a) {
      var b = this.length;
      a = +a + (0 > a ? b : 0);
      return this.pushStack(0 <= a && a < b ? [this[a]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: L,
    sort: pa.sort,
    splice: pa.splice,
  };
  k.extend = k.fn.extend = function () {
    var a,
      b,
      c,
      d,
      e,
      f,
      g = arguments[0] || {},
      h = 1,
      l = arguments.length,
      n = !1;
    "boolean" == typeof g && ((n = g), (g = arguments[h] || {}), h++);
    "object" == typeof g || z(g) || (g = {});
    for (h === l && ((g = this), h--); h < l; h++)
      if (null != (a = arguments[h]))
        for (b in a)
          (c = g[b]),
            (d = a[b]),
            g !== d &&
              (n && d && (k.isPlainObject(d) || (e = Array.isArray(d)))
                ? ((f = e
                    ? ((e = !1), c && Array.isArray(c) ? c : [])
                    : c && k.isPlainObject(c)
                    ? c
                    : {}),
                  (g[b] = k.extend(n, f, d)))
                : void 0 !== d && (g[b] = d));
    return g;
  };
  k.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (a) {
      throw Error(a);
    },
    noop: function () {},
    isPlainObject: function (a) {
      var b, c;
      return (
        !(!a || "[object Object]" !== ca.call(a)) &&
        ((b = va(a)),
        !b ||
          ((c = Y.call(b, "constructor") && b.constructor),
          "function" == typeof c && Ja.call(c) === wa))
      );
    },
    isEmptyObject: function (a) {
      for (var b in a) return !1;
      return !0;
    },
    globalEval: function (a) {
      c(a);
    },
    each: function (a, b) {
      var c,
        d = 0;
      if (f(a)) for (c = a.length; d < c && !1 !== b.call(a[d], d, a[d]); d++);
      else for (d in a) if (!1 === b.call(a[d], d, a[d])) break;
      return a;
    },
    trim: function (a) {
      return null == a ? "" : (a + "").replace(Ya, "");
    },
    makeArray: function (a, b) {
      var c = b || [];
      return (
        null != a &&
          (f(Object(a))
            ? k.merge(c, "string" == typeof a ? [a] : a)
            : L.call(c, a)),
        c
      );
    },
    inArray: function (a, b, c) {
      return null == b ? -1 : W.call(b, a, c);
    },
    merge: function (a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
      return (a.length = e), a;
    },
    grep: function (a, b, c) {
      for (var d = [], e = 0, f = a.length, g = !c; e < f; e++)
        (c = !b(a[e], e)), c !== g && d.push(a[e]);
      return d;
    },
    map: function (a, b, c) {
      var d,
        e,
        g = 0,
        h = [];
      if (f(a))
        for (d = a.length; g < d; g++)
          (e = b(a[g], g, c)), null != e && h.push(e);
      else for (g in a) (e = b(a[g], g, c)), null != e && h.push(e);
      return Qa.apply([], h);
    },
    guid: 1,
    support: D,
  });
  "function" == typeof Symbol && (k.fn[Symbol.iterator] = pa[Symbol.iterator]);
  k.each(
    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
      " "
    ),
    function (a, b) {
      J["[object " + b + "]"] = b.toLowerCase();
    }
  );
  var Aa = (function (a) {
    function b(a, c, d, e) {
      var f,
        v,
        g,
        h,
        I,
        k = c && c.ownerDocument,
        l = c ? c.nodeType : 9;
      if (
        ((d = d || []),
        "string" != typeof a || !a || (1 !== l && 9 !== l && 11 !== l))
      )
        return d;
      if (
        !e &&
        ((c ? c.ownerDocument || c : ca) !== J && va(c), (c = c || J), W)
      ) {
        if (11 !== l && (h = Da.exec(a)))
          if ((f = h[1]))
            if (9 === l) {
              if (!(v = c.getElementById(f))) return d;
              if (v.id === f) return d.push(v), d;
            } else {
              if (k && (v = k.getElementById(f)) && qa(c, v) && v.id === f)
                return d.push(v), d;
            }
          else {
            if (h[2]) return wa.apply(d, c.getElementsByTagName(a)), d;
            if (
              (f = h[3]) &&
              u.getElementsByClassName &&
              c.getElementsByClassName
            )
              return wa.apply(d, c.getElementsByClassName(f)), d;
          }
        if (!(!u.qsa || P[a + " "] || (F && F.test(a)))) {
          if (1 !== l) (k = c), (I = a);
          else if ("object" !== c.nodeName.toLowerCase()) {
            (g = c.getAttribute("id"))
              ? (g = g.replace(ka, ma))
              : c.setAttribute("id", (g = L));
            v = x(a);
            for (f = v.length; f--; ) v[f] = "#" + g + " " + r(v[f]);
            I = v.join(",");
            k = (Ga.test(a) && m(c.parentNode)) || c;
          }
          if (I)
            try {
              return wa.apply(d, k.querySelectorAll(I)), d;
            } catch (w) {
            } finally {
              g === L && c.removeAttribute("id");
            }
        }
      }
      return H(a.replace(ra, "$1"), c, d, e);
    }
    function c() {
      var a = [];
      return function ib(b, c) {
        return (
          a.push(b + " ") > q.cacheLength && delete ib[a.shift()],
          (ib[b + " "] = c)
        );
      };
    }
    function d(a) {
      return (a[L] = !0), a;
    }
    function e(a) {
      var b = J.createElement("fieldset");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b);
      }
    }
    function f(a, b) {
      for (var c = a.split("|"), d = c.length; d--; ) q.attrHandle[c[d]] = b;
    }
    function g(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          a.sourceIndex - b.sourceIndex;
      if (d) return d;
      if (c) for (; (c = c.nextSibling); ) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function h(a) {
      return function (b) {
        return "input" === b.nodeName.toLowerCase() && b.type === a;
      };
    }
    function k(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function l(a) {
      return function (b) {
        return "form" in b
          ? b.parentNode && !1 === b.disabled
            ? "label" in b
              ? "label" in b.parentNode
                ? b.parentNode.disabled === a
                : b.disabled === a
              : b.isDisabled === a || (b.isDisabled !== !a && Ya(b) === a)
            : b.disabled === a
          : "label" in b && b.disabled === a;
      };
    }
    function n(a) {
      return d(function (b) {
        return (
          (b = +b),
          d(function (c, d) {
            for (var e, f = a([], c.length, b), v = f.length; v--; )
              c[(e = f[v])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function m(a) {
      return a && void 0 !== a.getElementsByTagName && a;
    }
    function p() {}
    function r(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
      return d;
    }
    function B(a, b, c) {
      var d = b.dir,
        e = b.next,
        f = e || d,
        v = c && "parentNode" === f,
        g = N++;
      return b.first
        ? function (b, c, e) {
            for (; (b = b[d]); ) if (1 === b.nodeType || v) return a(b, c, e);
            return !1;
          }
        : function (b, c, h) {
            var I,
              k,
              l,
              w = [xa, g];
            if (h)
              for (; (b = b[d]); ) {
                if ((1 === b.nodeType || v) && a(b, c, h)) return !0;
              }
            else
              for (; (b = b[d]); )
                if (1 === b.nodeType || v)
                  if (
                    ((l = b[L] || (b[L] = {})),
                    (k = l[b.uniqueID] || (l[b.uniqueID] = {})),
                    e && e === b.nodeName.toLowerCase())
                  )
                    b = b[d] || b;
                  else {
                    if ((I = k[f]) && I[0] === xa && I[1] === g)
                      return (w[2] = I[2]);
                    if (((k[f] = w), (w[2] = a(b, c, h)))) return !0;
                  }
            return !1;
          };
    }
    function E(a) {
      return 1 < a.length
        ? function (b, c, d) {
            for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ba(a, b, c, d, e) {
      for (var f, v = [], g = 0, h = a.length, I = null != b; g < h; g++)
        (f = a[g]) && ((c && !c(f, d, e)) || (v.push(f), I && b.push(g)));
      return v;
    }
    function V(a, c, e, f, v, g) {
      return (
        f && !f[L] && (f = V(f)),
        v && !v[L] && (v = V(v, g)),
        d(function (d, g, h, k) {
          var l,
            w,
            n = [],
            Z = [],
            ta = g.length,
            m;
          if (!(m = d)) {
            m = c || "*";
            for (
              var G = h.nodeType ? [h] : h, r = [], p = 0, B = G.length;
              p < B;
              p++
            )
              b(m, G[p], r);
            m = r;
          }
          m = !a || (!d && c) ? m : ba(m, n, a, h, k);
          G = e ? (v || (d ? a : ta || f) ? [] : g) : m;
          if ((e && e(m, G, h, k), f))
            for (l = ba(G, Z), f(l, [], h, k), h = l.length; h--; )
              (w = l[h]) && (G[Z[h]] = !(m[Z[h]] = w));
          if (d) {
            if (v || a) {
              if (v) {
                l = [];
                for (h = G.length; h--; ) (w = G[h]) && l.push((m[h] = w));
                v(null, (G = []), l, k);
              }
              for (h = G.length; h--; )
                (w = G[h]) &&
                  -1 < (l = v ? T(d, w) : n[h]) &&
                  (d[l] = !(g[l] = w));
            }
          } else (G = ba(G === g ? G.splice(ta, G.length) : G)), v ? v(null, g, G, k) : wa.apply(g, G);
        })
      );
    }
    function A(a) {
      var b,
        c,
        d,
        e = a.length,
        f = q.relative[a[0].type];
      c = f || q.relative[" "];
      for (
        var v = f ? 1 : 0,
          g = B(
            function (a) {
              return a === b;
            },
            c,
            !0
          ),
          h = B(
            function (a) {
              return -1 < T(b, a);
            },
            c,
            !0
          ),
          I = [
            function (a, c, d) {
              a =
                (!f && (d || c !== pa)) ||
                ((b = c).nodeType ? g(a, c, d) : h(a, c, d));
              return (b = null), a;
            },
          ];
        v < e;
        v++
      )
        if ((c = q.relative[a[v].type])) I = [B(E(I), c)];
        else {
          if (((c = q.filter[a[v].type].apply(null, a[v].matches)), c[L])) {
            for (d = ++v; d < e && !q.relative[a[d].type]; d++);
            return V(
              1 < v && E(I),
              1 < v &&
                r(
                  a
                    .slice(0, v - 1)
                    .concat({ value: " " === a[v - 2].type ? "*" : "" })
                ).replace(ra, "$1"),
              c,
              v < d && A(a.slice(v, d)),
              d < e && A((a = a.slice(d))),
              d < e && r(a)
            );
          }
          I.push(c);
        }
      return E(I);
    }
    var t,
      u,
      q,
      X,
      y,
      x,
      K,
      H,
      pa,
      z,
      D,
      va,
      J,
      Y,
      W,
      F,
      C,
      ha,
      qa,
      L = "sizzle" + 1 * new Date(),
      ca = a.document,
      xa = 0,
      N = 0,
      ya = c(),
      Ja = c(),
      P = c(),
      M = function (a, b) {
        return a === b && (D = !0), 0;
      },
      O = {}.hasOwnProperty,
      Q = [],
      Qa = Q.pop,
      ja = Q.push,
      wa = Q.push,
      da = Q.slice,
      T = function (a, b) {
        for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
        return -1;
      },
      Aa = RegExp("[\\x20\\t\\r\\n\\f]+", "g"),
      ra = RegExp(
        "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
        "g"
      ),
      Ca = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
      U = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
      aa = RegExp(
        "=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]",
        "g"
      ),
      la =
        /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
      ea = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
      na = {
        ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
        CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
        TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
        ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
        PSEUDO:
          /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
        CHILD:
          /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
        bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
        needsContext:
          /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
      },
      sa = /^(?:input|select|textarea|button)$/i,
      ia = /^h\d$/i,
      S = /^[^{]+\{\s*\[native \w/,
      Da = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      Ga = /[+~]/,
      R = RegExp(
        "\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)",
        "ig"
      ),
      fa = function (a, b, c) {
        a = "0x" + b - 65536;
        return a != a || c
          ? b
          : 0 > a
          ? String.fromCharCode(a + 65536)
          : String.fromCharCode((a >> 10) | 55296, (1023 & a) | 56320);
      },
      ka = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ma = function (a, b) {
        return b
          ? "\x00" === a
            ? "\ufffd"
            : a.slice(0, -1) +
              "\\" +
              a.charCodeAt(a.length - 1).toString(16) +
              " "
          : "\\" + a;
      },
      oa = function () {
        va();
      },
      Ya = B(
        function (a) {
          return !0 === a.disabled && ("form" in a || "label" in a);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      wa.apply((Q = da.call(ca.childNodes)), ca.childNodes),
        Q[ca.childNodes.length].nodeType;
    } catch (ua) {
      wa = {
        apply: Q.length
          ? function (a, b) {
              ja.apply(a, da.call(b));
            }
          : function (a, b) {
              for (var c = a.length, d = 0; (a[c++] = b[d++]); );
              a.length = c - 1;
            },
      };
    }
    for (t in ((u = b.support = {}),
    (y = b.isXML =
      function (a) {
        a = a && (a.ownerDocument || a).documentElement;
        return !!a && "HTML" !== a.nodeName;
      }),
    (va = b.setDocument =
      function (a) {
        var b, c;
        a = a ? a.ownerDocument || a : ca;
        return (
          a !== J &&
            9 === a.nodeType &&
            a.documentElement &&
            ((J = a),
            (Y = J.documentElement),
            (W = !y(J)),
            ca !== J &&
              (c = J.defaultView) &&
              c.top !== c &&
              (c.addEventListener
                ? c.addEventListener("unload", oa, !1)
                : c.attachEvent && c.attachEvent("onunload", oa)),
            (u.attributes = e(function (a) {
              return (a.className = "i"), !a.getAttribute("className");
            })),
            (u.getElementsByTagName = e(function (a) {
              return (
                a.appendChild(J.createComment("")),
                !a.getElementsByTagName("*").length
              );
            })),
            (u.getElementsByClassName = S.test(J.getElementsByClassName)),
            (u.getById = e(function (a) {
              return (
                (Y.appendChild(a).id = L),
                !J.getElementsByName || !J.getElementsByName(L).length
              );
            })),
            u.getById
              ? ((q.filter.ID = function (a) {
                  var b = a.replace(R, fa);
                  return function (a) {
                    return a.getAttribute("id") === b;
                  };
                }),
                (q.find.ID = function (a, b) {
                  if (void 0 !== b.getElementById && W) {
                    var c = b.getElementById(a);
                    return c ? [c] : [];
                  }
                }))
              : ((q.filter.ID = function (a) {
                  var b = a.replace(R, fa);
                  return function (a) {
                    return (
                      (a =
                        void 0 !== a.getAttributeNode &&
                        a.getAttributeNode("id")) && a.value === b
                    );
                  };
                }),
                (q.find.ID = function (a, b) {
                  if (void 0 !== b.getElementById && W) {
                    var c,
                      d,
                      e,
                      f = b.getElementById(a);
                    if (f) {
                      if (((c = f.getAttributeNode("id")), c && c.value === a))
                        return [f];
                      e = b.getElementsByName(a);
                      for (d = 0; (f = e[d++]); )
                        if (
                          ((c = f.getAttributeNode("id")), c && c.value === a)
                        )
                          return [f];
                    }
                    return [];
                  }
                })),
            (q.find.TAG = u.getElementsByTagName
              ? function (a, b) {
                  return void 0 !== b.getElementsByTagName
                    ? b.getElementsByTagName(a)
                    : u.qsa
                    ? b.querySelectorAll(a)
                    : void 0;
                }
              : function (a, b) {
                  var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                  if ("*" !== a) return f;
                  for (; (c = f[e++]); ) 1 === c.nodeType && d.push(c);
                  return d;
                }),
            (q.find.CLASS =
              u.getElementsByClassName &&
              function (a, b) {
                if (void 0 !== b.getElementsByClassName && W)
                  return b.getElementsByClassName(a);
              }),
            (C = []),
            (F = []),
            (u.qsa = S.test(J.querySelectorAll)) &&
              (e(function (a) {
                Y.appendChild(a).innerHTML =
                  "<a id='" +
                  L +
                  "'></a><select id='" +
                  L +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>";
                a.querySelectorAll("[msallowcapture^='']").length &&
                  F.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length ||
                  F.push(
                    "\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"
                  );
                a.querySelectorAll("[id~=" + L + "-]").length || F.push("~=");
                a.querySelectorAll(":checked").length || F.push(":checked");
                a.querySelectorAll("a#" + L + "+*").length ||
                  F.push(".#.+[+~]");
              }),
              e(function (a) {
                a.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = J.createElement("input");
                b.setAttribute("type", "hidden");
                a.appendChild(b).setAttribute("name", "D");
                a.querySelectorAll("[name=d]").length &&
                  F.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                2 !== a.querySelectorAll(":enabled").length &&
                  F.push(":enabled", ":disabled");
                Y.appendChild(a).disabled = !0;
                2 !== a.querySelectorAll(":disabled").length &&
                  F.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                F.push(",.*:");
              })),
            (u.matchesSelector = S.test(
              (ha =
                Y.matches ||
                Y.webkitMatchesSelector ||
                Y.mozMatchesSelector ||
                Y.oMatchesSelector ||
                Y.msMatchesSelector)
            )) &&
              e(function (a) {
                u.disconnectedMatch = ha.call(a, "*");
                ha.call(a, "[s!='']:x");
                C.push(
                  "!=",
                  ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"
                );
              }),
            (F = F.length && new RegExp(F.join("|"))),
            (C = C.length && new RegExp(C.join("|"))),
            (b = S.test(Y.compareDocumentPosition)),
            (qa =
              b || S.test(Y.contains)
                ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                      d = b && b.parentNode;
                    return (
                      a === d ||
                      !(
                        !d ||
                        1 !== d.nodeType ||
                        !(c.contains
                          ? c.contains(d)
                          : a.compareDocumentPosition &&
                            16 & a.compareDocumentPosition(d))
                      )
                    );
                  }
                : function (a, b) {
                    if (b) for (; (b = b.parentNode); ) if (b === a) return !0;
                    return !1;
                  }),
            (M = b
              ? function (a, b) {
                  if (a === b) return (D = !0), 0;
                  var c =
                    !a.compareDocumentPosition - !b.compareDocumentPosition;
                  return (
                    c ||
                    ((c =
                      (a.ownerDocument || a) === (b.ownerDocument || b)
                        ? a.compareDocumentPosition(b)
                        : 1),
                    1 & c ||
                    (!u.sortDetached && b.compareDocumentPosition(a) === c)
                      ? a === J || (a.ownerDocument === ca && qa(ca, a))
                        ? -1
                        : b === J || (b.ownerDocument === ca && qa(ca, b))
                        ? 1
                        : z
                        ? T(z, a) - T(z, b)
                        : 0
                      : 4 & c
                      ? -1
                      : 1)
                  );
                }
              : function (a, b) {
                  if (a === b) return (D = !0), 0;
                  var c,
                    d = 0;
                  c = a.parentNode;
                  var e = b.parentNode,
                    f = [a],
                    v = [b];
                  if (!c || !e)
                    return a === J
                      ? -1
                      : b === J
                      ? 1
                      : c
                      ? -1
                      : e
                      ? 1
                      : z
                      ? T(z, a) - T(z, b)
                      : 0;
                  if (c === e) return g(a, b);
                  for (c = a; (c = c.parentNode); ) f.unshift(c);
                  for (c = b; (c = c.parentNode); ) v.unshift(c);
                  for (; f[d] === v[d]; ) d++;
                  return d
                    ? g(f[d], v[d])
                    : f[d] === ca
                    ? -1
                    : v[d] === ca
                    ? 1
                    : 0;
                })),
          J
        );
      }),
    (b.matches = function (a, c) {
      return b(a, null, null, c);
    }),
    (b.matchesSelector = function (a, c) {
      if (
        ((a.ownerDocument || a) !== J && va(a),
        (c = c.replace(aa, "='$1']")),
        !(
          !u.matchesSelector ||
          !W ||
          P[c + " "] ||
          (C && C.test(c)) ||
          (F && F.test(c))
        ))
      )
        try {
          var d = ha.call(a, c);
          if (
            d ||
            u.disconnectedMatch ||
            (a.document && 11 !== a.document.nodeType)
          )
            return d;
        } catch (e) {}
      return 0 < b(c, J, null, [a]).length;
    }),
    (b.contains = function (a, b) {
      return (a.ownerDocument || a) !== J && va(a), qa(a, b);
    }),
    (b.attr = function (a, b) {
      (a.ownerDocument || a) !== J && va(a);
      var c = q.attrHandle[b.toLowerCase()],
        c = c && O.call(q.attrHandle, b.toLowerCase()) ? c(a, b, !W) : void 0;
      return void 0 !== c
        ? c
        : u.attributes || !W
        ? a.getAttribute(b)
        : (c = a.getAttributeNode(b)) && c.specified
        ? c.value
        : null;
    }),
    (b.escape = function (a) {
      return (a + "").replace(ka, ma);
    }),
    (b.error = function (a) {
      throw Error("Syntax error, unrecognized expression: " + a);
    }),
    (b.uniqueSort = function (a) {
      var b,
        c = [],
        d = 0,
        e = 0;
      if (
        ((D = !u.detectDuplicates),
        (z = !u.sortStable && a.slice(0)),
        a.sort(M),
        D)
      ) {
        for (; (b = a[e++]); ) b === a[e] && (d = c.push(e));
        for (; d--; ) a.splice(c[d], 1);
      }
      return (z = null), a;
    }),
    (X = b.getText =
      function (a) {
        var b,
          c = "",
          d = 0;
        if ((b = a.nodeType))
          if (1 === b || 9 === b || 11 === b) {
            if ("string" == typeof a.textContent) return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling) c += X(a);
          } else {
            if (3 === b || 4 === b) return a.nodeValue;
          }
        else for (; (b = a[d++]); ) c += X(b);
        return c;
      }),
    (q = b.selectors =
      {
        cacheLength: 50,
        createPseudo: d,
        match: na,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (a) {
            return (
              (a[1] = a[1].replace(R, fa)),
              (a[3] = (a[3] || a[4] || a[5] || "").replace(R, fa)),
              "~=" === a[2] && (a[3] = " " + a[3] + " "),
              a.slice(0, 4)
            );
          },
          CHILD: function (a) {
            return (
              (a[1] = a[1].toLowerCase()),
              "nth" === a[1].slice(0, 3)
                ? (a[3] || b.error(a[0]),
                  (a[4] = +(a[4]
                    ? a[5] + (a[6] || 1)
                    : 2 * ("even" === a[3] || "odd" === a[3]))),
                  (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                : a[3] && b.error(a[0]),
              a
            );
          },
          PSEUDO: function (a) {
            var b,
              c = !a[6] && a[2];
            return na.CHILD.test(a[0])
              ? null
              : (a[3]
                  ? (a[2] = a[4] || a[5] || "")
                  : c &&
                    la.test(c) &&
                    (b = x(c, !0)) &&
                    (b = c.indexOf(")", c.length - b) - c.length) &&
                    ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                a.slice(0, 3));
          },
        },
        filter: {
          TAG: function (a) {
            var b = a.replace(R, fa).toLowerCase();
            return "*" === a
              ? function () {
                  return !0;
                }
              : function (a) {
                  return a.nodeName && a.nodeName.toLowerCase() === b;
                };
          },
          CLASS: function (a) {
            var b = ya[a + " "];
            return (
              b ||
              ((b = new RegExp(
                "(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"
              )) &&
                ya(a, function (a) {
                  return b.test(
                    ("string" == typeof a.className && a.className) ||
                      (void 0 !== a.getAttribute && a.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (a, c, d) {
            return function (e) {
              e = b.attr(e, a);
              return null == e
                ? "!=" === c
                : !c ||
                    ((e += ""),
                    "=" === c
                      ? e === d
                      : "!=" === c
                      ? e !== d
                      : "^=" === c
                      ? d && 0 === e.indexOf(d)
                      : "*=" === c
                      ? d && -1 < e.indexOf(d)
                      : "$=" === c
                      ? d && e.slice(-d.length) === d
                      : "~=" === c
                      ? -1 < (" " + e.replace(Aa, " ") + " ").indexOf(d)
                      : "|=" === c &&
                        (e === d || e.slice(0, d.length + 1) === d + "-"));
            };
          },
          CHILD: function (a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
              v = "last" !== a.slice(-4),
              g = "of-type" === b;
            return 1 === d && 0 === e
              ? function (a) {
                  return !!a.parentNode;
                }
              : function (b, c, h) {
                  var I, k, l, w, n, Z;
                  c = f !== v ? "nextSibling" : "previousSibling";
                  var m = b.parentNode,
                    ta = g && b.nodeName.toLowerCase();
                  h = !h && !g;
                  var G = !1;
                  if (m) {
                    if (f) {
                      for (; c; ) {
                        for (w = b; (w = w[c]); )
                          if (
                            g
                              ? w.nodeName.toLowerCase() === ta
                              : 1 === w.nodeType
                          )
                            return !1;
                        Z = c = "only" === a && !Z && "nextSibling";
                      }
                      return !0;
                    }
                    if (((Z = [v ? m.firstChild : m.lastChild]), v && h))
                      for (
                        w = m,
                          l = w[L] || (w[L] = {}),
                          k = l[w.uniqueID] || (l[w.uniqueID] = {}),
                          I = k[a] || [],
                          G = (n = I[0] === xa && I[1]) && I[2],
                          w = n && m.childNodes[n];
                        (w = (++n && w && w[c]) || (G = n = 0) || Z.pop());

                      ) {
                        if (1 === w.nodeType && ++G && w === b) {
                          k[a] = [xa, n, G];
                          break;
                        }
                      }
                    else if (
                      (h &&
                        ((w = b),
                        (l = w[L] || (w[L] = {})),
                        (k = l[w.uniqueID] || (l[w.uniqueID] = {})),
                        (I = k[a] || []),
                        (n = I[0] === xa && I[1]),
                        (G = n)),
                      !1 === G)
                    )
                      for (
                        ;
                        (w = (++n && w && w[c]) || (G = n = 0) || Z.pop()) &&
                        ((g
                          ? w.nodeName.toLowerCase() !== ta
                          : 1 !== w.nodeType) ||
                          !++G ||
                          (h &&
                            ((l = w[L] || (w[L] = {})),
                            (k = l[w.uniqueID] || (l[w.uniqueID] = {})),
                            (k[a] = [xa, G])),
                          w !== b));

                      );
                    return (G -= e), G === d || (0 == G % d && 0 <= G / d);
                  }
                };
          },
          PSEUDO: function (a, c) {
            var e,
              f =
                q.pseudos[a] ||
                q.setFilters[a.toLowerCase()] ||
                b.error("unsupported pseudo: " + a);
            return f[L]
              ? f(c)
              : 1 < f.length
              ? ((e = [a, a, "", c]),
                q.setFilters.hasOwnProperty(a.toLowerCase())
                  ? d(function (a, b) {
                      for (var d, e = f(a, c), v = e.length; v--; )
                        (d = T(a, e[v])), (a[d] = !(b[d] = e[v]));
                    })
                  : function (a) {
                      return f(a, 0, e);
                    })
              : f;
          },
        },
        pseudos: {
          not: d(function (a) {
            var b = [],
              c = [],
              e = K(a.replace(ra, "$1"));
            return e[L]
              ? d(function (a, b, c, d) {
                  var f;
                  c = e(a, null, d, []);
                  for (d = a.length; d--; ) (f = c[d]) && (a[d] = !(b[d] = f));
                })
              : function (a, d, f) {
                  return (b[0] = a), e(b, null, f, c), (b[0] = null), !c.pop();
                };
          }),
          has: d(function (a) {
            return function (c) {
              return 0 < b(a, c).length;
            };
          }),
          contains: d(function (a) {
            return (
              (a = a.replace(R, fa)),
              function (b) {
                return -1 < (b.textContent || b.innerText || X(b)).indexOf(a);
              }
            );
          }),
          lang: d(function (a) {
            return (
              ea.test(a || "") || b.error("unsupported lang: " + a),
              (a = a.replace(R, fa).toLowerCase()),
              function (b) {
                var c;
                do
                  if (
                    (c = W
                      ? b.lang
                      : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                  )
                    return (
                      (c = c.toLowerCase()), c === a || 0 === c.indexOf(a + "-")
                    );
                while ((b = b.parentNode) && 1 === b.nodeType);
                return !1;
              }
            );
          }),
          target: function (b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id;
          },
          root: function (a) {
            return a === Y;
          },
          focus: function (a) {
            return (
              a === J.activeElement &&
              (!J.hasFocus || J.hasFocus()) &&
              !!(a.type || a.href || ~a.tabIndex)
            );
          },
          enabled: l(!1),
          disabled: l(!0),
          checked: function (a) {
            var b = a.nodeName.toLowerCase();
            return (
              ("input" === b && !!a.checked) || ("option" === b && !!a.selected)
            );
          },
          selected: function (a) {
            return (
              a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
            );
          },
          empty: function (a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (6 > a.nodeType) return !1;
            return !0;
          },
          parent: function (a) {
            return !q.pseudos.empty(a);
          },
          header: function (a) {
            return ia.test(a.nodeName);
          },
          input: function (a) {
            return sa.test(a.nodeName);
          },
          button: function (a) {
            var b = a.nodeName.toLowerCase();
            return ("input" === b && "button" === a.type) || "button" === b;
          },
          text: function (a) {
            var b;
            return (
              "input" === a.nodeName.toLowerCase() &&
              "text" === a.type &&
              (null == (b = a.getAttribute("type")) ||
                "text" === b.toLowerCase())
            );
          },
          first: n(function () {
            return [0];
          }),
          last: n(function (a, b) {
            return [b - 1];
          }),
          eq: n(function (a, b, c) {
            return [0 > c ? c + b : c];
          }),
          even: n(function (a, b) {
            for (var c = 0; c < b; c += 2) a.push(c);
            return a;
          }),
          odd: n(function (a, b) {
            for (var c = 1; c < b; c += 2) a.push(c);
            return a;
          }),
          lt: n(function (a, b, c) {
            for (b = 0 > c ? c + b : c; 0 <= --b; ) a.push(b);
            return a;
          }),
          gt: n(function (a, b, c) {
            for (c = 0 > c ? c + b : c; ++c < b; ) a.push(c);
            return a;
          }),
        },
      }),
    (q.pseudos.nth = q.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      q.pseudos[t] = h(t);
    for (t in { submit: !0, reset: !0 }) q.pseudos[t] = k(t);
    return (
      (p.prototype = q.filters = q.pseudos),
      (q.setFilters = new p()),
      (x = b.tokenize =
        function (a, c) {
          var d, e, f, v, g, h, k;
          if ((g = Ja[a + " "])) return c ? 0 : g.slice(0);
          g = a;
          h = [];
          for (k = q.preFilter; g; ) {
            for (v in ((d && !(e = Ca.exec(g))) ||
              (e && (g = g.slice(e[0].length) || g), h.push((f = []))),
            (d = !1),
            (e = U.exec(g)) &&
              ((d = e.shift()),
              f.push({ value: d, type: e[0].replace(ra, " ") }),
              (g = g.slice(d.length))),
            q.filter))
              !(e = na[v].exec(g)) ||
                (k[v] && !(e = k[v](e))) ||
                ((d = e.shift()),
                f.push({ value: d, type: v, matches: e }),
                (g = g.slice(d.length)));
            if (!d) break;
          }
          return c ? g.length : g ? b.error(a) : Ja(a, h).slice(0);
        }),
      (K = b.compile =
        function (a, c) {
          var e,
            f,
            v,
            g,
            h = [],
            k = [],
            w = P[a + " "];
          if (!w) {
            c || (c = x(a));
            for (e = c.length; e--; )
              (w = A(c[e])), w[L] ? h.push(w) : k.push(w);
            w = P(
              a,
              ((f = 0 < h.length),
              (v = 0 < k.length),
              (g = function (a, c, d, e, g) {
                var w,
                  l,
                  n,
                  Z = 0,
                  m = "0",
                  ta = a && [],
                  G = [],
                  r = pa,
                  p = a || (v && q.find.TAG("*", g)),
                  B = (xa += null == r ? 1 : Math.random() || 0.1),
                  Gb = p.length;
                for (
                  g && (pa = c === J || c || g);
                  m !== Gb && null != (w = p[m]);
                  m++
                ) {
                  if (v && w) {
                    l = 0;
                    for (
                      c || w.ownerDocument === J || (va(w), (d = !W));
                      (n = k[l++]);

                    )
                      if (n(w, c || J, d)) {
                        e.push(w);
                        break;
                      }
                    g && (xa = B);
                  }
                  f && ((w = !n && w) && Z--, a && ta.push(w));
                }
                if (((Z += m), f && m !== Z)) {
                  for (l = 0; (n = h[l++]); ) n(ta, G, c, d);
                  if (a) {
                    if (0 < Z)
                      for (; m--; ) ta[m] || G[m] || (G[m] = Qa.call(e));
                    G = ba(G);
                  }
                  wa.apply(e, G);
                  g &&
                    !a &&
                    0 < G.length &&
                    1 < Z + h.length &&
                    b.uniqueSort(e);
                }
                return g && ((xa = B), (pa = r)), ta;
              }),
              f ? d(g) : g)
            );
            w.selector = a;
          }
          return w;
        }),
      (H = b.select =
        function (a, b, c, d) {
          var e,
            f,
            v,
            g,
            h,
            I = "function" == typeof a && a,
            k = !d && x((a = I.selector || a));
          if (((c = c || []), 1 === k.length)) {
            if (
              ((f = k[0] = k[0].slice(0)),
              2 < f.length &&
                "ID" === (v = f[0]).type &&
                9 === b.nodeType &&
                W &&
                q.relative[f[1].type])
            ) {
              if (
                ((b = (q.find.ID(v.matches[0].replace(R, fa), b) || [])[0]), !b)
              )
                return c;
              I && (b = b.parentNode);
              a = a.slice(f.shift().value.length);
            }
            for (
              e = na.needsContext.test(a) ? 0 : f.length;
              e-- && ((v = f[e]), !q.relative[(g = v.type)]);

            )
              if (
                (h = q.find[g]) &&
                (d = h(
                  v.matches[0].replace(R, fa),
                  (Ga.test(f[0].type) && m(b.parentNode)) || b
                ))
              ) {
                if ((f.splice(e, 1), (a = d.length && r(f)), !a))
                  return wa.apply(c, d), c;
                break;
              }
          }
          return (
            (I || K(a, k))(
              d,
              b,
              !W,
              c,
              !b || (Ga.test(a) && m(b.parentNode)) || b
            ),
            c
          );
        }),
      (u.sortStable = L.split("").sort(M).join("") === L),
      (u.detectDuplicates = !!D),
      va(),
      (u.sortDetached = e(function (a) {
        return 1 & a.compareDocumentPosition(J.createElement("fieldset"));
      })),
      e(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        f("type|href|height|width", function (a, b, c) {
          if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (u.attributes &&
        e(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        f("value", function (a, b, c) {
          if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }),
      e(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        f(
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          function (a, b, c) {
            var d;
            if (!c)
              return !0 === a[b]
                ? b.toLowerCase()
                : (d = a.getAttributeNode(b)) && d.specified
                ? d.value
                : null;
          }
        ),
      b
    );
  })(b);
  k.find = Aa;
  k.expr = Aa.selectors;
  k.expr[":"] = k.expr.pseudos;
  k.uniqueSort = k.unique = Aa.uniqueSort;
  k.text = Aa.getText;
  k.isXMLDoc = Aa.isXML;
  k.contains = Aa.contains;
  k.escapeSelector = Aa.escape;
  var Ca = function (a, b, c) {
      for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
        if (1 === a.nodeType) {
          if (e && k(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    jb = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    kb = k.expr.match.needsContext,
    lb = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  k.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? k.find.matchesSelector(d, a)
          ? [d]
          : []
        : k.find.matches(
            a,
            k.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  };
  k.fn.extend({
    find: function (a) {
      var b,
        c,
        d = this.length,
        e = this;
      if ("string" != typeof a)
        return this.pushStack(
          k(a).filter(function () {
            for (b = 0; b < d; b++) if (k.contains(e[b], this)) return !0;
          })
        );
      c = this.pushStack([]);
      for (b = 0; b < d; b++) k.find(a, e[b], c);
      return 1 < d ? k.uniqueSort(c) : c;
    },
    filter: function (a) {
      return this.pushStack(g(this, a || [], !1));
    },
    not: function (a) {
      return this.pushStack(g(this, a || [], !0));
    },
    is: function (a) {
      return !!g(this, "string" == typeof a && kb.test(a) ? k(a) : a || [], !1)
        .length;
    },
  });
  var mb,
    Nb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (k.fn.init = function (a, b, c) {
    var d, e;
    if (!a) return this;
    if (((c = c || mb), "string" != typeof a))
      return a.nodeType
        ? ((this[0] = a), (this.length = 1), this)
        : z(a)
        ? void 0 !== c.ready
          ? c.ready(a)
          : a(k)
        : k.makeArray(a, this);
    if (
      ((d =
        "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length
          ? [null, a, null]
          : Nb.exec(a)),
      !d || (!d[1] && b))
    )
      return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
    if (d[1]) {
      if (
        ((b = b instanceof k ? b[0] : b),
        k.merge(
          this,
          k.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : K, !0)
        ),
        lb.test(d[1]) && k.isPlainObject(b))
      )
        for (d in b) z(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
      return this;
    }
    return (
      (e = K.getElementById(d[2])),
      e && ((this[0] = e), (this.length = 1)),
      this
    );
  }).prototype = k.fn;
  mb = k(K);
  var Ob = /^(?:parents|prev(?:Until|All))/,
    Pb = { children: !0, contents: !0, next: !0, prev: !0 };
  k.fn.extend({
    has: function (a) {
      var b = k(a, this),
        c = b.length;
      return this.filter(function () {
        for (var a = 0; a < c; a++) if (k.contains(this, b[a])) return !0;
      });
    },
    closest: function (a, b) {
      var c,
        d = 0,
        e = this.length,
        f = [],
        g = "string" != typeof a && k(a);
      if (!kb.test(a))
        for (; d < e; d++)
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              11 > c.nodeType &&
              (g
                ? -1 < g.index(c)
                : 1 === c.nodeType && k.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
      return this.pushStack(1 < f.length ? k.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? W.call(k(a), this[0])
          : W.call(this, a.jquery ? a[0] : a)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (a, b) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  });
  k.each(
    {
      parent: function (a) {
        return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
      },
      parents: function (a) {
        return Ca(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return Ca(a, "parentNode", c);
      },
      next: function (a) {
        return h(a, "nextSibling");
      },
      prev: function (a) {
        return h(a, "previousSibling");
      },
      nextAll: function (a) {
        return Ca(a, "nextSibling");
      },
      prevAll: function (a) {
        return Ca(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return Ca(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return Ca(a, "previousSibling", c);
      },
      siblings: function (a) {
        return jb((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return jb(a.firstChild);
      },
      contents: function (a) {
        return d(a, "iframe")
          ? a.contentDocument
          : (d(a, "template") && (a = a.content || a),
            k.merge([], a.childNodes));
      },
    },
    function (a, b) {
      k.fn[a] = function (c, d) {
        var e = k.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = k.filter(d, e)),
          1 < this.length &&
            (Pb[a] || k.uniqueSort(e), Ob.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    }
  );
  var oa = /[^\x20\t\r\n\f]+/g;
  k.Callbacks = function (a) {
    var b, c;
    a =
      "string" == typeof a
        ? ((b = a),
          (c = {}),
          k.each(b.match(oa) || [], function (a, b) {
            c[b] = !0;
          }),
          c)
        : k.extend({}, a);
    var d,
      f,
      g,
      h,
      l = [],
      n = [],
      m = -1,
      r = function () {
        h = h || a.once;
        for (g = d = !0; n.length; m = -1)
          for (f = n.shift(); ++m < l.length; )
            !1 === l[m].apply(f[0], f[1]) &&
              a.stopOnFalse &&
              ((m = l.length), (f = !1));
        a.memory || (f = !1);
        d = !1;
        h && (l = f ? [] : "");
      },
      p = {
        add: function () {
          return (
            l &&
              (f && !d && ((m = l.length - 1), n.push(f)),
              (function Jb(b) {
                k.each(b, function (b, c) {
                  z(c)
                    ? (a.unique && p.has(c)) || l.push(c)
                    : c && c.length && "string" !== e(c) && Jb(c);
                });
              })(arguments),
              f && !d && r()),
            this
          );
        },
        remove: function () {
          return (
            k.each(arguments, function (a, b) {
              for (var c; -1 < (c = k.inArray(b, l, c)); )
                l.splice(c, 1), c <= m && m--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? -1 < k.inArray(a, l) : 0 < l.length;
        },
        empty: function () {
          return l && (l = []), this;
        },
        disable: function () {
          return (h = n = []), (l = f = ""), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return (h = n = []), f || d || (l = f = ""), this;
        },
        locked: function () {
          return !!h;
        },
        fireWith: function (a, b) {
          return (
            h ||
              ((b = b || []),
              (b = [a, b.slice ? b.slice() : b]),
              n.push(b),
              d || r()),
            this
          );
        },
        fire: function () {
          return p.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!g;
        },
      };
    return p;
  };
  k.extend({
    Deferred: function (a) {
      var c = [
          [
            "notify",
            "progress",
            k.Callbacks("memory"),
            k.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            k.Callbacks("once memory"),
            k.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            k.Callbacks("once memory"),
            k.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
        d = "pending",
        e = {
          state: function () {
            return d;
          },
          always: function () {
            return f.done(arguments).fail(arguments), this;
          },
          catch: function (a) {
            return e.then(null, a);
          },
          pipe: function () {
            var a = arguments;
            return k
              .Deferred(function (b) {
                k.each(c, function (c, d) {
                  var e = z(a[d[4]]) && a[d[4]];
                  f[d[1]](function () {
                    var a = e && e.apply(this, arguments);
                    a && z(a.promise)
                      ? a
                          .promise()
                          .progress(b.notify)
                          .done(b.resolve)
                          .fail(b.reject)
                      : b[d[0] + "With"](this, e ? [a] : arguments);
                  });
                });
                a = null;
              })
              .promise();
          },
          then: function (a, d, e) {
            function f(a, c, d, e) {
              return function () {
                var v = this,
                  h = arguments,
                  I = function () {
                    var b, k;
                    if (!(a < g)) {
                      if (((b = d.apply(v, h)), b === c.promise()))
                        throw new TypeError("Thenable self-resolution");
                      k =
                        b &&
                        ("object" == typeof b || "function" == typeof b) &&
                        b.then;
                      z(k)
                        ? e
                          ? k.call(b, f(g, c, l, e), f(g, c, m, e))
                          : (g++,
                            k.call(
                              b,
                              f(g, c, l, e),
                              f(g, c, m, e),
                              f(g, c, l, c.notifyWith)
                            ))
                        : (d !== l && ((v = void 0), (h = [b])),
                          (e || c.resolveWith)(v, h));
                    }
                  },
                  w = e
                    ? I
                    : function () {
                        try {
                          I();
                        } catch (b) {
                          k.Deferred.exceptionHook &&
                            k.Deferred.exceptionHook(b, w.stackTrace),
                            g <= a + 1 &&
                              (d !== m && ((v = void 0), (h = [b])),
                              c.rejectWith(v, h));
                        }
                      };
                a
                  ? w()
                  : (k.Deferred.getStackHook &&
                      (w.stackTrace = k.Deferred.getStackHook()),
                    b.setTimeout(w));
              };
            }
            var g = 0;
            return k
              .Deferred(function (b) {
                c[0][3].add(f(0, b, z(e) ? e : l, b.notifyWith));
                c[1][3].add(f(0, b, z(a) ? a : l));
                c[2][3].add(f(0, b, z(d) ? d : m));
              })
              .promise();
          },
          promise: function (a) {
            return null != a ? k.extend(a, e) : e;
          },
        },
        f = {};
      return (
        k.each(c, function (a, b) {
          var g = b[2],
            v = b[5];
          e[b[1]] = g.add;
          v &&
            g.add(
              function () {
                d = v;
              },
              c[3 - a][2].disable,
              c[3 - a][3].disable,
              c[0][2].lock,
              c[0][3].lock
            );
          g.add(b[3].fire);
          f[b[0]] = function () {
            return (
              f[b[0] + "With"](this === f ? void 0 : this, arguments), this
            );
          };
          f[b[0] + "With"] = g.fireWith;
        }),
        e.promise(f),
        a && a.call(f, f),
        f
      );
    },
    when: function (a) {
      var b = arguments.length,
        c = b,
        d = Array(c),
        e = qa.call(arguments),
        f = k.Deferred(),
        g = function (a) {
          return function (c) {
            d[a] = this;
            e[a] = 1 < arguments.length ? qa.call(arguments) : c;
            --b || f.resolveWith(d, e);
          };
        };
      if (
        1 >= b &&
        (p(a, f.done(g(c)).resolve, f.reject, !b),
        "pending" === f.state() || z(e[c] && e[c].then))
      )
        return f.then();
      for (; c--; ) p(e[c], g(c), f.reject);
      return f.promise();
    },
  });
  var Qb = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  k.Deferred.exceptionHook = function (a, c) {
    b.console &&
      b.console.warn &&
      a &&
      Qb.test(a.name) &&
      b.console.warn("jQuery.Deferred exception: " + a.message, a.stack, c);
  };
  k.readyException = function (a) {
    b.setTimeout(function () {
      throw a;
    });
  };
  var Za = k.Deferred();
  k.fn.ready = function (a) {
    return (
      Za.then(a)["catch"](function (a) {
        k.readyException(a);
      }),
      this
    );
  };
  k.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (a) {
      (!0 === a ? --k.readyWait : k.isReady) ||
        ((k.isReady = !0),
        (!0 !== a && 0 < --k.readyWait) || Za.resolveWith(K, [k]));
    },
  });
  k.ready.then = Za.then;
  "complete" === K.readyState ||
  ("loading" !== K.readyState && !K.documentElement.doScroll)
    ? b.setTimeout(k.ready)
    : (K.addEventListener("DOMContentLoaded", n),
      b.addEventListener("load", n));
  var Ba = function (a, b, c, d, f, g, h) {
      var l = 0,
        n = a.length,
        m = null == c;
      if ("object" === e(c))
        for (l in ((f = !0), c)) Ba(a, b, l, c[l], !0, g, h);
      else if (
        void 0 !== d &&
        ((f = !0),
        z(d) || (h = !0),
        m &&
          (b = h
            ? (b.call(a, d), null)
            : ((m = b),
              function (a, b, c) {
                return m.call(k(a), c);
              })),
        b)
      )
        for (; l < n; l++) b(a[l], c, h ? d : d.call(a[l], l, b(a[l], c)));
      return f ? a : m ? b.call(a) : n ? b(a[0], c) : g;
    },
    Cb = /^-ms-/,
    Db = /-([a-z])/g,
    Ua = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
  A.uid = 1;
  A.prototype = {
    cache: function (a) {
      var b = a[this.expando];
      return (
        b ||
          ((b = {}),
          Ua(a) &&
            (a.nodeType
              ? (a[this.expando] = b)
              : Object.defineProperty(a, this.expando, {
                  value: b,
                  configurable: !0,
                }))),
        b
      );
    },
    set: function (a, b, c) {
      var d;
      a = this.cache(a);
      if ("string" == typeof b) a[t(b)] = c;
      else for (d in b) a[t(d)] = b[d];
      return a;
    },
    get: function (a, b) {
      return void 0 === b
        ? this.cache(a)
        : a[this.expando] && a[this.expando][t(b)];
    },
    access: function (a, b, c) {
      return void 0 === b || (b && "string" == typeof b && void 0 === c)
        ? this.get(a, b)
        : (this.set(a, b, c), void 0 !== c ? c : b);
    },
    remove: function (a, b) {
      var c,
        d = a[this.expando];
      if (void 0 !== d) {
        if (void 0 !== b)
          for (
            b = Array.isArray(b)
              ? b.map(t)
              : ((b = t(b)), (b in d) ? [b] : b.match(oa) || []),
              c = b.length;
            c--;

          )
            delete d[b[c]];
        (void 0 === b || k.isEmptyObject(d)) &&
          (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
      }
    },
    hasData: function (a) {
      a = a[this.expando];
      return void 0 !== a && !k.isEmptyObject(a);
    },
  };
  var C = new A(),
    aa = new A(),
    Fb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Eb = /[A-Z]/g;
  k.extend({
    hasData: function (a) {
      return aa.hasData(a) || C.hasData(a);
    },
    data: function (a, b, c) {
      return aa.access(a, b, c);
    },
    removeData: function (a, b) {
      aa.remove(a, b);
    },
    _data: function (a, b, c) {
      return C.access(a, b, c);
    },
    _removeData: function (a, b) {
      C.remove(a, b);
    },
  });
  k.fn.extend({
    data: function (a, b) {
      var c,
        d,
        e,
        f = this[0],
        g = f && f.attributes;
      if (void 0 !== a)
        return "object" == typeof a
          ? this.each(function () {
              aa.set(this, a);
            })
          : Ba(
              this,
              function (b) {
                var c;
                if (f && void 0 === b)
                  return (
                    (c = aa.get(f, a)),
                    void 0 !== c
                      ? c
                      : ((c = u(f, a)), void 0 !== c ? c : void 0)
                  );
                this.each(function () {
                  aa.set(this, a, b);
                });
              },
              null,
              b,
              1 < arguments.length,
              null,
              !0
            );
      if (
        this.length &&
        ((e = aa.get(f)), 1 === f.nodeType && !C.get(f, "hasDataAttrs"))
      ) {
        for (c = g.length; c--; )
          g[c] &&
            ((d = g[c].name),
            0 === d.indexOf("data-") && ((d = t(d.slice(5))), u(f, d, e[d])));
        C.set(f, "hasDataAttrs", !0);
      }
      return e;
    },
    removeData: function (a) {
      return this.each(function () {
        aa.remove(this, a);
      });
    },
  });
  k.extend({
    queue: function (a, b, c) {
      var d;
      if (a)
        return (
          (b = (b || "fx") + "queue"),
          (d = C.get(a, b)),
          c &&
            (!d || Array.isArray(c)
              ? (d = C.access(a, b, k.makeArray(c)))
              : d.push(c)),
          d || []
        );
    },
    dequeue: function (a, b) {
      b = b || "fx";
      var c = k.queue(a, b),
        d = c.length,
        e = c.shift(),
        f = k._queueHooks(a, b);
      "inprogress" === e && ((e = c.shift()), d--);
      e &&
        ("fx" === b && c.unshift("inprogress"),
        delete f.stop,
        e.call(
          a,
          function () {
            k.dequeue(a, b);
          },
          f
        ));
      !d && f && f.empty.fire();
    },
    _queueHooks: function (a, b) {
      var c = b + "queueHooks";
      return (
        C.get(a, c) ||
        C.access(a, c, {
          empty: k.Callbacks("once memory").add(function () {
            C.remove(a, [b + "queue", c]);
          }),
        })
      );
    },
  });
  k.fn.extend({
    queue: function (a, b) {
      var c = 2;
      return (
        "string" != typeof a && ((b = a), (a = "fx"), c--),
        arguments.length < c
          ? k.queue(this[0], a)
          : void 0 === b
          ? this
          : this.each(function () {
              var c = k.queue(this, a, b);
              k._queueHooks(this, a);
              "fx" === a && "inprogress" !== c[0] && k.dequeue(this, a);
            })
      );
    },
    dequeue: function (a) {
      return this.each(function () {
        k.dequeue(this, a);
      });
    },
    clearQueue: function (a) {
      return this.queue(a || "fx", []);
    },
    promise: function (a, b) {
      var c,
        d = 1,
        e = k.Deferred(),
        f = this,
        g = this.length,
        h = function () {
          --d || e.resolveWith(f, [f]);
        };
      "string" != typeof a && ((b = a), (a = void 0));
      for (a = a || "fx"; g--; )
        (c = C.get(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b);
    },
  });
  var nb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Ha = new RegExp("^(?:([+-])=|)(" + nb + ")([a-z%]*)$", "i"),
    ua = ["Top", "Right", "Bottom", "Left"],
    Pa = function (a, b) {
      return (
        (a = b || a),
        "none" === a.style.display ||
          ("" === a.style.display &&
            k.contains(a.ownerDocument, a) &&
            "none" === k.css(a, "display"))
      );
    },
    ob = function (a, b, c, d) {
      var e,
        f = {};
      for (e in b) (f[e] = a.style[e]), (a.style[e] = b[e]);
      for (e in ((c = c.apply(a, d || [])), b)) a.style[e] = f[e];
      return c;
    },
    db = {};
  k.fn.extend({
    show: function () {
      return x(this, !0);
    },
    hide: function () {
      return x(this);
    },
    toggle: function (a) {
      return "boolean" == typeof a
        ? a
          ? this.show()
          : this.hide()
        : this.each(function () {
            Pa(this) ? k(this).show() : k(this).hide();
          });
    },
  });
  var pb = /^(?:checkbox|radio)$/i,
    eb = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    fb = /^$|^module$|\/(?:java|ecma)script/i,
    ia = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  ia.optgroup = ia.option;
  ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead;
  ia.th = ia.td;
  var Ka,
    La,
    Hb = /<|&#?\w+;/;
  Ka = K.createDocumentFragment().appendChild(K.createElement("div"));
  La = K.createElement("input");
  La.setAttribute("type", "radio");
  La.setAttribute("checked", "checked");
  La.setAttribute("name", "t");
  Ka.appendChild(La);
  D.checkClone = Ka.cloneNode(!0).cloneNode(!0).lastChild.checked;
  Ka.innerHTML = "<textarea>x</textarea>";
  D.noCloneChecked = !!Ka.cloneNode(!0).lastChild.defaultValue;
  var Va = K.documentElement,
    Rb = /^key/,
    Sb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    qb = /^([^.]*)(?:\.(.+)|)/;
  k.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f, g, h, l, n, m, p, r, B, E;
      if ((n = C.get(a)))
        for (
          c.handler && ((f = c), (c = f.handler), (e = f.selector)),
            e && k.find.matchesSelector(Va, e),
            c.guid || (c.guid = k.guid++),
            (l = n.events) || (l = n.events = {}),
            (g = n.handle) ||
              (g = n.handle =
                function (b) {
                  return void 0 !== k && k.event.triggered !== b.type
                    ? k.event.dispatch.apply(a, arguments)
                    : void 0;
                }),
            b = (b || "").match(oa) || [""],
            n = b.length;
          n--;

        )
          (h = qb.exec(b[n]) || []),
            (B = E = h[1]),
            (h = (h[2] || "").split(".").sort()),
            B &&
              ((p = k.event.special[B] || {}),
              (B = (e ? p.delegateType : p.bindType) || B),
              (p = k.event.special[B] || {}),
              (m = k.extend(
                {
                  type: B,
                  origType: E,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && k.expr.match.needsContext.test(e),
                  namespace: h.join("."),
                },
                f
              )),
              (r = l[B]) ||
                ((r = l[B] = []),
                (r.delegateCount = 0),
                (p.setup && !1 !== p.setup.call(a, d, h, g)) ||
                  (a.addEventListener && a.addEventListener(B, g))),
              p.add &&
                (p.add.call(a, m), m.handler.guid || (m.handler.guid = c.guid)),
              e ? r.splice(r.delegateCount++, 0, m) : r.push(m),
              (k.event.global[B] = !0));
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        l,
        n,
        m,
        p,
        r,
        B,
        E,
        q,
        u = C.hasData(a) && C.get(a);
      if (u && (l = u.events)) {
        b = (b || "").match(oa) || [""];
        for (n = b.length; n--; )
          if (
            ((h = qb.exec(b[n]) || []),
            (B = q = h[1]),
            (E = (h[2] || "").split(".").sort()),
            B)
          ) {
            p = k.event.special[B] || {};
            B = (d ? p.delegateType : p.bindType) || B;
            r = l[B] || [];
            h =
              h[2] &&
              new RegExp("(^|\\.)" + E.join("\\.(?:.*\\.|)") + "(\\.|$)");
            for (g = f = r.length; f--; )
              (m = r[f]),
                (!e && q !== m.origType) ||
                  (c && c.guid !== m.guid) ||
                  (h && !h.test(m.namespace)) ||
                  (d && d !== m.selector && ("**" !== d || !m.selector)) ||
                  (r.splice(f, 1),
                  m.selector && r.delegateCount--,
                  p.remove && p.remove.call(a, m));
            g &&
              !r.length &&
              ((p.teardown && !1 !== p.teardown.call(a, E, u.handle)) ||
                k.removeEvent(a, B, u.handle),
              delete l[B]);
          } else for (B in l) k.event.remove(a, B + b[n], c, d, !0);
        k.isEmptyObject(l) && C.remove(a, "handle events");
      }
    },
    dispatch: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = k.event.fix(a),
        l = Array(arguments.length);
      c = (C.get(this, "events") || {})[h.type] || [];
      var n = k.event.special[h.type] || {};
      l[0] = h;
      for (b = 1; b < arguments.length; b++) l[b] = arguments[b];
      if (
        ((h.delegateTarget = this),
        !n.preDispatch || !1 !== n.preDispatch.call(this, h))
      ) {
        g = k.event.handlers.call(this, h, c);
        for (b = 0; (e = g[b++]) && !h.isPropagationStopped(); )
          for (
            h.currentTarget = e.elem, c = 0;
            (f = e.handlers[c++]) && !h.isImmediatePropagationStopped();

          )
            (h.rnamespace && !h.rnamespace.test(f.namespace)) ||
              ((h.handleObj = f),
              (h.data = f.data),
              (d = (
                (k.event.special[f.origType] || {}).handle || f.handler
              ).apply(e.elem, l)),
              void 0 !== d &&
                !1 === (h.result = d) &&
                (h.preventDefault(), h.stopPropagation()));
        return n.postDispatch && n.postDispatch.call(this, h), h.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g,
        h = [],
        l = b.delegateCount,
        n = a.target;
      if (l && n.nodeType && !("click" === a.type && 1 <= a.button))
        for (; n !== this; n = n.parentNode || this)
          if (1 === n.nodeType && ("click" !== a.type || !0 !== n.disabled)) {
            f = [];
            g = {};
            for (c = 0; c < l; c++)
              (d = b[c]),
                (e = d.selector + " "),
                void 0 === g[e] &&
                  (g[e] = d.needsContext
                    ? -1 < k(e, this).index(n)
                    : k.find(e, this, null, [n]).length),
                g[e] && f.push(d);
            f.length && h.push({ elem: n, handlers: f });
          }
      return (
        (n = this), l < b.length && h.push({ elem: n, handlers: b.slice(l) }), h
      );
    },
    addProp: function (a, b) {
      Object.defineProperty(k.Event.prototype, a, {
        enumerable: !0,
        configurable: !0,
        get: z(b)
          ? function () {
              if (this.originalEvent) return b(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[a];
            },
        set: function (b) {
          Object.defineProperty(this, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: b,
          });
        },
      });
    },
    fix: function (a) {
      return a[k.expando] ? a : new k.Event(a);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== ka() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === ka() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && d(this, "input"))
            return this.click(), !1;
        },
        _default: function (a) {
          return d(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
  };
  k.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  };
  k.Event = function (a, b) {
    if (!(this instanceof k.Event)) return new k.Event(a, b);
    a && a.type
      ? ((this.originalEvent = a),
        (this.type = a.type),
        (this.isDefaultPrevented =
          a.defaultPrevented ||
          (void 0 === a.defaultPrevented && !1 === a.returnValue)
            ? P
            : N),
        (this.target =
          a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target),
        (this.currentTarget = a.currentTarget),
        (this.relatedTarget = a.relatedTarget))
      : (this.type = a);
    b && k.extend(this, b);
    this.timeStamp = (a && a.timeStamp) || Date.now();
    this[k.expando] = !0;
  };
  k.Event.prototype = {
    constructor: k.Event,
    isDefaultPrevented: N,
    isPropagationStopped: N,
    isImmediatePropagationStopped: N,
    isSimulated: !1,
    preventDefault: function () {
      var a = this.originalEvent;
      this.isDefaultPrevented = P;
      a && !this.isSimulated && a.preventDefault();
    },
    stopPropagation: function () {
      var a = this.originalEvent;
      this.isPropagationStopped = P;
      a && !this.isSimulated && a.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = P;
      a && !this.isSimulated && a.stopImmediatePropagation();
      this.stopPropagation();
    },
  };
  k.each(
    {
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function (a) {
        var b = a.button;
        return null == a.which && Rb.test(a.type)
          ? null != a.charCode
            ? a.charCode
            : a.keyCode
          : !a.which && void 0 !== b && Sb.test(a.type)
          ? 1 & b
            ? 1
            : 2 & b
            ? 3
            : 4 & b
            ? 2
            : 0
          : a.which;
      },
    },
    k.event.addProp
  );
  k.each(
    {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout",
    },
    function (a, b) {
      k.event.special[a] = {
        delegateType: b,
        bindType: b,
        handle: function (a) {
          var c,
            d = a.relatedTarget,
            e = a.handleObj;
          return (
            (d && (d === this || k.contains(this, d))) ||
              ((a.type = e.origType),
              (c = e.handler.apply(this, arguments)),
              (a.type = b)),
            c
          );
        },
      };
    }
  );
  k.fn.extend({
    on: function (a, b, c, d) {
      return S(this, a, b, c, d);
    },
    one: function (a, b, c, d) {
      return S(this, a, b, c, d, 1);
    },
    off: function (a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj)
        return (
          (d = a.handleObj),
          k(a.delegateTarget).off(
            d.namespace ? d.origType + "." + d.namespace : d.origType,
            d.selector,
            d.handler
          ),
          this
        );
      if ("object" != typeof a)
        return (
          (!1 !== b && "function" != typeof b) || ((c = b), (b = void 0)),
          !1 === c && (c = N),
          this.each(function () {
            k.event.remove(this, a, c, b);
          })
        );
      for (e in a) this.off(e, b, a[e]);
      return this;
    },
  });
  var Tb =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ub = /<script|<style|<link/i,
    Ib = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Kb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  k.extend({
    htmlPrefilter: function (a) {
      return a.replace(Tb, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        l,
        n,
        m = a.cloneNode(!0),
        p = k.contains(a.ownerDocument, a);
      if (
        !(
          D.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          k.isXMLDoc(a)
        )
      )
        for (g = q(m), f = q(a), d = 0, e = f.length; d < e; d++)
          (h = f[d]),
            (l = g[d]),
            void 0,
            (n = l.nodeName.toLowerCase()),
            "input" === n && pb.test(h.type)
              ? (l.checked = h.checked)
              : ("input" !== n && "textarea" !== n) ||
                (l.defaultValue = h.defaultValue);
      if (b)
        if (c)
          for (f = f || q(a), g = g || q(m), d = 0, e = f.length; d < e; d++)
            T(f[d], g[d]);
        else T(a, m);
      return (
        (g = q(m, "script")), 0 < g.length && F(g, !p && q(a, "script")), m
      );
    },
    cleanData: function (a) {
      for (var b, c, d, e = k.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (Ua(c)) {
          if ((b = c[C.expando])) {
            if (b.events)
              for (d in b.events)
                e[d] ? k.event.remove(c, d) : k.removeEvent(c, d, b.handle);
            c[C.expando] = void 0;
          }
          c[aa.expando] && (c[aa.expando] = void 0);
        }
    },
  });
  k.fn.extend({
    detach: function (a) {
      return M(this, a, !0);
    },
    remove: function (a) {
      return M(this, a);
    },
    text: function (a) {
      return Ba(
        this,
        function (a) {
          return void 0 === a
            ? k.text(this)
            : this.empty().each(function () {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  (this.textContent = a);
              });
        },
        null,
        a,
        arguments.length
      );
    },
    append: function () {
      return ja(this, arguments, function (a) {
        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
          Da(this, a).appendChild(a);
      });
    },
    prepend: function () {
      return ja(this, arguments, function (a) {
        if (
          1 === this.nodeType ||
          11 === this.nodeType ||
          9 === this.nodeType
        ) {
          var b = Da(this, a);
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function () {
      return ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function () {
      return ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++)
        1 === a.nodeType && (k.cleanData(q(a, !1)), (a.textContent = ""));
      return this;
    },
    clone: function (a, b) {
      return (
        (a = null != a && a),
        (b = null == b ? a : b),
        this.map(function () {
          return k.clone(this, a, b);
        })
      );
    },
    html: function (a) {
      return Ba(
        this,
        function (a) {
          var b = this[0] || {},
            c = 0,
            d = this.length;
          if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
          if (
            "string" == typeof a &&
            !Ub.test(a) &&
            !ia[(eb.exec(a) || ["", ""])[1].toLowerCase()]
          ) {
            a = k.htmlPrefilter(a);
            try {
              for (; c < d; c++)
                (b = this[c] || {}),
                  1 === b.nodeType &&
                    (k.cleanData(q(b, !1)), (b.innerHTML = a));
              b = 0;
            } catch (e) {}
          }
          b && this.empty().append(a);
        },
        null,
        a,
        arguments.length
      );
    },
    replaceWith: function () {
      var a = [];
      return ja(
        this,
        arguments,
        function (b) {
          var c = this.parentNode;
          0 > k.inArray(this, a) &&
            (k.cleanData(q(this)), c && c.replaceChild(b, this));
        },
        a
      );
    },
  });
  k.each(
    {
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith",
    },
    function (a, b) {
      k.fn[a] = function (a) {
        for (var c = [], d = k(a), e = d.length - 1, f = 0; f <= e; f++)
          (a = f === e ? this : this.clone(!0)),
            k(d[f])[b](a),
            L.apply(c, a.get());
        return this.pushStack(c);
      };
    }
  );
  var Wa = new RegExp("^(" + nb + ")(?!px)[a-z%]+$", "i"),
    Ra = function (a) {
      var c = a.ownerDocument.defaultView;
      return (c && c.opener) || (c = b), c.getComputedStyle(a);
    },
    Lb = new RegExp(ua.join("|"), "i");
  !(function () {
    function a() {
      if (l) {
        h.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
        l.style.cssText =
          "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
        Va.appendChild(h).appendChild(l);
        var k = b.getComputedStyle(l);
        c = "1%" !== k.top;
        g = 12 === Math.round(parseFloat(k.marginLeft));
        l.style.right = "60%";
        f = 36 === Math.round(parseFloat(k.right));
        d = 36 === Math.round(parseFloat(k.width));
        l.style.position = "absolute";
        e = 36 === l.offsetWidth || "absolute";
        Va.removeChild(h);
        l = null;
      }
    }
    var c,
      d,
      e,
      f,
      g,
      h = K.createElement("div"),
      l = K.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (D.clearCloneStyle = "content-box" === l.style.backgroundClip),
      k.extend(D, {
        boxSizingReliable: function () {
          return a(), d;
        },
        pixelBoxStyles: function () {
          return a(), f;
        },
        pixelPosition: function () {
          return a(), c;
        },
        reliableMarginLeft: function () {
          return a(), g;
        },
        scrollboxSize: function () {
          return a(), e;
        },
      }));
  })();
  var Vb = /^(none|table(?!-c[ea]).+)/,
    rb = /^--/,
    Wb = { position: "absolute", visibility: "hidden", display: "block" },
    sb = { letterSpacing: "0", fontWeight: "400" },
    hb = ["Webkit", "Moz", "ms"],
    gb = K.createElement("div").style;
  k.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = la(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = t(b),
          l = rb.test(b),
          n = a.style;
        if (
          (l || (b = ma(h)), (g = k.cssHooks[b] || k.cssHooks[h]), void 0 === c)
        )
          return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : n[b];
        f = typeof c;
        "string" === f &&
          (e = Ha.exec(c)) &&
          e[1] &&
          ((c = y(a, b, e)), (f = "number"));
        null != c &&
          c == c &&
          ("number" === f && (c += (e && e[3]) || (k.cssNumber[h] ? "" : "px")),
          D.clearCloneStyle ||
            "" !== c ||
            0 !== b.indexOf("background") ||
            (n[b] = "inherit"),
          (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
            (l ? n.setProperty(b, c) : (n[b] = c)));
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = t(b);
      return (
        rb.test(b) || (b = ma(h)),
        (g = k.cssHooks[b] || k.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = la(a, b, d)),
        "normal" === e && b in sb && (e = sb[b]),
        "" === c || c
          ? ((f = parseFloat(e)), !0 === c || isFinite(f) ? f || 0 : e)
          : e
      );
    },
  });
  k.each(["height", "width"], function (a, b) {
    k.cssHooks[b] = {
      get: function (a, c, d) {
        if (c)
          return !Vb.test(k.css(a, "display")) ||
            (a.getClientRects().length && a.getBoundingClientRect().width)
            ? na(a, b, d)
            : ob(a, Wb, function () {
                return na(a, b, d);
              });
      },
      set: function (a, c, d) {
        var e,
          f = Ra(a),
          g = "border-box" === k.css(a, "boxSizing", !1, f);
        d = d && ea(a, b, d, g, f);
        return (
          g &&
            D.scrollboxSize() === f.position &&
            (d -= Math.ceil(
              a["offset" + b[0].toUpperCase() + b.slice(1)] -
                parseFloat(f[b]) -
                ea(a, b, "border", !1, f) -
                0.5
            )),
          d &&
            (e = Ha.exec(c)) &&
            "px" !== (e[3] || "px") &&
            ((a.style[b] = c), (c = k.css(a, b))),
          O(0, c, d)
        );
      },
    };
  });
  k.cssHooks.marginLeft = R(D.reliableMarginLeft, function (a, b) {
    if (b)
      return (
        (parseFloat(la(a, "marginLeft")) ||
          a.getBoundingClientRect().left -
            ob(a, { marginLeft: 0 }, function () {
              return a.getBoundingClientRect().left;
            })) + "px"
      );
  });
  k.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    k.cssHooks[a + b] = {
      expand: function (c) {
        var d = 0,
          e = {};
        for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
          e[a + ua[d] + b] = c[d] || c[d - 2] || c[0];
        return e;
      },
    };
    "margin" !== a && (k.cssHooks[a + b].set = O);
  });
  k.fn.extend({
    css: function (a, b) {
      return Ba(
        this,
        function (a, b, c) {
          var d,
            e = {},
            f = 0;
          if (Array.isArray(b)) {
            c = Ra(a);
            for (d = b.length; f < d; f++) e[b[f]] = k.css(a, b[f], !1, c);
            return e;
          }
          return void 0 !== c ? k.style(a, b, c) : k.css(a, b);
        },
        a,
        b,
        1 < arguments.length
      );
    },
  });
  k.Tween = Q;
  Q.prototype = {
    constructor: Q,
    init: function (a, b, c, d, e, f) {
      this.elem = a;
      this.prop = c;
      this.easing = e || k.easing._default;
      this.options = b;
      this.start = this.now = this.cur();
      this.end = d;
      this.unit = f || (k.cssNumber[c] ? "" : "px");
    },
    cur: function () {
      var a = Q.propHooks[this.prop];
      return a && a.get ? a.get(this) : Q.propHooks._default.get(this);
    },
    run: function (a) {
      var b,
        c = Q.propHooks[this.prop];
      return (
        this.options.duration
          ? (this.pos = b =
              k.easing[this.easing](
                a,
                this.options.duration * a,
                0,
                1,
                this.options.duration
              ))
          : (this.pos = b = a),
        (this.now = (this.end - this.start) * b + this.start),
        this.options.step && this.options.step.call(this.elem, this.now, this),
        c && c.set ? c.set(this) : Q.propHooks._default.set(this),
        this
      );
    },
  };
  Q.prototype.init.prototype = Q.prototype;
  Q.propHooks = {
    _default: {
      get: function (a) {
        var b;
        return 1 !== a.elem.nodeType ||
          (null != a.elem[a.prop] && null == a.elem.style[a.prop])
          ? a.elem[a.prop]
          : ((b = k.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
      },
      set: function (a) {
        k.fx.step[a.prop]
          ? k.fx.step[a.prop](a)
          : 1 !== a.elem.nodeType ||
            (null == a.elem.style[k.cssProps[a.prop]] && !k.cssHooks[a.prop])
          ? (a.elem[a.prop] = a.now)
          : k.style(a.elem, a.prop, a.now + a.unit);
      },
    },
  };
  Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    },
  };
  k.easing = {
    linear: function (a) {
      return a;
    },
    swing: function (a) {
      return 0.5 - Math.cos(a * Math.PI) / 2;
    },
    _default: "swing",
  };
  k.fx = Q.prototype.init;
  k.fx.step = {};
  var Fa,
    Sa,
    Ea,
    tb,
    Xb = /^(?:toggle|show|hide)$/,
    Yb = /queueHooks$/;
  k.Animation = k.extend(U, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b);
          return y(c.elem, a, Ha.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      a = z(a) ? ((b = a), ["*"]) : a.match(oa);
      for (var c, d = 0, e = a.length; d < e; d++)
        (c = a[d]),
          (U.tweeners[c] = U.tweeners[c] || []),
          U.tweeners[c].unshift(b);
    },
    prefilters: [
      function (a, b, c) {
        var d,
          e,
          f,
          g,
          h,
          l,
          n,
          m,
          p = "width" in b || "height" in b,
          r = this,
          B = {},
          E = a.style,
          u = a.nodeType && Pa(a),
          q = C.get(a, "fxshow");
        for (d in (c.queue ||
          ((g = k._queueHooks(a, "fx")),
          null == g.unqueued &&
            ((g.unqueued = 0),
            (h = g.empty.fire),
            (g.empty.fire = function () {
              g.unqueued || h();
            })),
          g.unqueued++,
          r.always(function () {
            r.always(function () {
              g.unqueued--;
              k.queue(a, "fx").length || g.empty.fire();
            });
          })),
        b))
          if (((e = b[d]), Xb.test(e))) {
            if (
              (delete b[d],
              (f = f || "toggle" === e),
              e === (u ? "hide" : "show"))
            ) {
              if ("show" !== e || !q || void 0 === q[d]) continue;
              u = !0;
            }
            B[d] = (q && q[d]) || k.style(a, d);
          }
        if (((l = !k.isEmptyObject(b)), l || !k.isEmptyObject(B)))
          for (d in (p &&
            1 === a.nodeType &&
            ((c.overflow = [E.overflow, E.overflowX, E.overflowY]),
            (n = q && q.display),
            null == n && (n = C.get(a, "display")),
            (m = k.css(a, "display")),
            "none" === m &&
              (n
                ? (m = n)
                : (x([a], !0),
                  (n = a.style.display || n),
                  (m = k.css(a, "display")),
                  x([a]))),
            ("inline" === m || ("inline-block" === m && null != n)) &&
              "none" === k.css(a, "float") &&
              (l ||
                (r.done(function () {
                  E.display = n;
                }),
                null == n && ((m = E.display), (n = "none" === m ? "" : m))),
              (E.display = "inline-block"))),
          c.overflow &&
            ((E.overflow = "hidden"),
            r.always(function () {
              E.overflow = c.overflow[0];
              E.overflowX = c.overflow[1];
              E.overflowY = c.overflow[2];
            })),
          (l = !1),
          B))
            l ||
              (q
                ? "hidden" in q && (u = q.hidden)
                : (q = C.access(a, "fxshow", { display: n })),
              f && (q.hidden = !u),
              u && x([a], !0),
              r.done(function () {
                for (d in (u || x([a]), C.remove(a, "fxshow"), B))
                  k.style(a, d, B[d]);
              })),
              (l = fa(u ? q[d] : 0, d, r)),
              d in q ||
                ((q[d] = l.start), u && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (a, b) {
      b ? U.prefilters.unshift(a) : U.prefilters.push(a);
    },
  });
  k.speed = function (a, b, c) {
    var d =
      a && "object" == typeof a
        ? k.extend({}, a)
        : {
            complete: c || (!c && b) || (z(a) && a),
            duration: a,
            easing: (c && b) || (b && !z(b) && b),
          };
    return (
      k.fx.off
        ? (d.duration = 0)
        : "number" != typeof d.duration &&
          (d.duration in k.fx.speeds
            ? (d.duration = k.fx.speeds[d.duration])
            : (d.duration = k.fx.speeds._default)),
      (null != d.queue && !0 !== d.queue) || (d.queue = "fx"),
      (d.old = d.complete),
      (d.complete = function () {
        z(d.old) && d.old.call(this);
        d.queue && k.dequeue(this, d.queue);
      }),
      d
    );
  };
  k.fn.extend({
    fadeTo: function (a, b, c, d) {
      return this.filter(Pa)
        .css("opacity", 0)
        .show()
        .end()
        .animate({ opacity: b }, a, c, d);
    },
    animate: function (a, b, c, d) {
      var e = k.isEmptyObject(a),
        f = k.speed(b, c, d);
      b = function () {
        var b = U(this, k.extend({}, a), f);
        (e || C.get(this, "finish")) && b.stop(!0);
      };
      return (
        (b.finish = b),
        e || !1 === f.queue ? this.each(b) : this.queue(f.queue, b)
      );
    },
    stop: function (a, b, c) {
      var d = function (a) {
        var b = a.stop;
        delete a.stop;
        b(c);
      };
      return (
        "string" != typeof a && ((c = b), (b = a), (a = void 0)),
        b && !1 !== a && this.queue(a || "fx", []),
        this.each(function () {
          var b = !0,
            e = null != a && a + "queueHooks",
            f = k.timers,
            g = C.get(this);
          if (e) g[e] && g[e].stop && d(g[e]);
          else for (e in g) g[e] && g[e].stop && Yb.test(e) && d(g[e]);
          for (e = f.length; e--; )
            f[e].elem !== this ||
              (null != a && f[e].queue !== a) ||
              (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
          (!b && c) || k.dequeue(this, a);
        })
      );
    },
    finish: function (a) {
      return (
        !1 !== a && (a = a || "fx"),
        this.each(function () {
          var b,
            c = C.get(this),
            d = c[a + "queue"];
          b = c[a + "queueHooks"];
          var e = k.timers,
            f = d ? d.length : 0;
          c.finish = !0;
          k.queue(this, a, []);
          b && b.stop && b.stop.call(this, !0);
          for (b = e.length; b--; )
            e[b].elem === this &&
              e[b].queue === a &&
              (e[b].anim.stop(!0), e.splice(b, 1));
          for (b = 0; b < f; b++) d[b] && d[b].finish && d[b].finish.call(this);
          delete c.finish;
        })
      );
    },
  });
  k.each(["toggle", "show", "hide"], function (a, b) {
    var c = k.fn[b];
    k.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a
        ? c.apply(this, arguments)
        : this.animate(sa(b, !0), a, d, e);
    };
  });
  k.each(
    {
      slideDown: sa("show"),
      slideUp: sa("hide"),
      slideToggle: sa("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" },
    },
    function (a, b) {
      k.fn[a] = function (a, c, d) {
        return this.animate(b, a, c, d);
      };
    }
  );
  k.timers = [];
  k.fx.tick = function () {
    var a,
      b = 0,
      c = k.timers;
    for (Fa = Date.now(); b < c.length; b++)
      (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
    c.length || k.fx.stop();
    Fa = void 0;
  };
  k.fx.timer = function (a) {
    k.timers.push(a);
    k.fx.start();
  };
  k.fx.interval = 13;
  k.fx.start = function () {
    Sa || ((Sa = !0), Ia());
  };
  k.fx.stop = function () {
    Sa = null;
  };
  k.fx.speeds = { slow: 600, fast: 200, _default: 400 };
  k.fn.delay = function (a, c) {
    return (
      (a = (k.fx && k.fx.speeds[a]) || a),
      (c = c || "fx"),
      this.queue(c, function (c, d) {
        var e = b.setTimeout(c, a);
        d.stop = function () {
          b.clearTimeout(e);
        };
      })
    );
  };
  Ea = K.createElement("input");
  tb = K.createElement("select").appendChild(K.createElement("option"));
  Ea.type = "checkbox";
  D.checkOn = "" !== Ea.value;
  D.optSelected = tb.selected;
  Ea = K.createElement("input");
  Ea.value = "t";
  Ea.type = "radio";
  D.radioValue = "t" === Ea.value;
  var ub,
    Ma = k.expr.attrHandle;
  k.fn.extend({
    attr: function (a, b) {
      return Ba(this, k.attr, a, b, 1 < arguments.length);
    },
    removeAttr: function (a) {
      return this.each(function () {
        k.removeAttr(this, a);
      });
    },
  });
  k.extend({
    attr: function (a, b, c) {
      var d,
        e,
        f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f)
        return void 0 === a.getAttribute
          ? k.prop(a, b, c)
          : ((1 === f && k.isXMLDoc(a)) ||
              (e =
                k.attrHooks[b.toLowerCase()] ||
                (k.expr.match.bool.test(b) ? ub : void 0)),
            void 0 !== c
              ? null === c
                ? void k.removeAttr(a, b)
                : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a.setAttribute(b, c + ""), c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : ((d = k.find.attr(a, b)), null == d ? void 0 : d));
    },
    attrHooks: {
      type: {
        set: function (a, b) {
          if (!D.radioValue && "radio" === b && d(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b;
          }
        },
      },
    },
    removeAttr: function (a, b) {
      var c,
        d = 0,
        e = b && b.match(oa);
      if (e && 1 === a.nodeType) for (; (c = e[d++]); ) a.removeAttribute(c);
    },
  });
  ub = {
    set: function (a, b, c) {
      return !1 === b ? k.removeAttr(a, c) : a.setAttribute(c, c), c;
    },
  };
  k.each(k.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = Ma[b] || k.find.attr;
    Ma[b] = function (a, b, d) {
      var e,
        f,
        g = b.toLowerCase();
      return (
        d ||
          ((f = Ma[g]),
          (Ma[g] = e),
          (e = null != c(a, b, d) ? g : null),
          (Ma[g] = f)),
        e
      );
    };
  });
  var Zb = /^(?:input|select|textarea|button)$/i,
    $b = /^(?:a|area)$/i;
  k.fn.extend({
    prop: function (a, b) {
      return Ba(this, k.prop, a, b, 1 < arguments.length);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[k.propFix[a] || a];
      });
    },
  });
  k.extend({
    prop: function (a, b, c) {
      var d,
        e,
        f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f)
        return (
          (1 === f && k.isXMLDoc(a)) ||
            ((b = k.propFix[b] || b), (e = k.propHooks[b])),
          void 0 !== c
            ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
              ? d
              : (a[b] = c)
            : e && "get" in e && null !== (d = e.get(a, b))
            ? d
            : a[b]
        );
    },
    propHooks: {
      tabIndex: {
        get: function (a) {
          var b = k.find.attr(a, "tabindex");
          return b
            ? parseInt(b, 10)
            : Zb.test(a.nodeName) || ($b.test(a.nodeName) && a.href)
            ? 0
            : -1;
        },
      },
    },
    propFix: { for: "htmlFor", class: "className" },
  });
  D.optSelected ||
    (k.propHooks.selected = {
      get: function (a) {
        a = a.parentNode;
        return a && a.parentNode && a.parentNode.selectedIndex, null;
      },
      set: function (a) {
        a = a.parentNode;
        a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex);
      },
    });
  k.each(
    "tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(
      " "
    ),
    function () {
      k.propFix[this.toLowerCase()] = this;
    }
  );
  k.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0;
      if (z(a))
        return this.each(function (b) {
          k(this).addClass(a.call(this, b, ba(this)));
        });
      if (((b = V(a)), b.length))
        for (; (c = this[h++]); )
          if (((e = ba(c)), (d = 1 === c.nodeType && " " + za(e) + " "), d)) {
            for (g = 0; (f = b[g++]); )
              0 > d.indexOf(" " + f + " ") && (d += f + " ");
            f = za(d);
            e !== f && c.setAttribute("class", f);
          }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0;
      if (z(a))
        return this.each(function (b) {
          k(this).removeClass(a.call(this, b, ba(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if (((b = V(a)), b.length))
        for (; (c = this[h++]); )
          if (((e = ba(c)), (d = 1 === c.nodeType && " " + za(e) + " "), d)) {
            for (g = 0; (f = b[g++]); )
              for (; -1 < d.indexOf(" " + f + " "); )
                d = d.replace(" " + f + " ", " ");
            f = za(d);
            e !== f && c.setAttribute("class", f);
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a,
        d = "string" === c || Array.isArray(a);
      return "boolean" == typeof b && d
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : z(a)
        ? this.each(function (c) {
            k(this).toggleClass(a.call(this, c, ba(this), b), b);
          })
        : this.each(function () {
            var b, e, f, g;
            if (d)
              for (e = 0, f = k(this), g = V(a); (b = g[e++]); )
                f.hasClass(b) ? f.removeClass(b) : f.addClass(b);
            else
              (void 0 !== a && "boolean" !== c) ||
                ((b = ba(this)),
                b && C.set(this, "__className__", b),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    b || !1 === a ? "" : C.get(this, "__className__") || ""
                  ));
          });
    },
    hasClass: function (a) {
      var b,
        c = 0;
      for (a = " " + a + " "; (b = this[c++]); )
        if (1 === b.nodeType && -1 < (" " + za(ba(b)) + " ").indexOf(a))
          return !0;
      return !1;
    },
  });
  var ac = /\r/g;
  k.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      return arguments.length
        ? ((d = z(a)),
          this.each(function (c) {
            var e;
            1 === this.nodeType &&
              ((e = d ? a.call(this, c, k(this).val()) : a),
              null == e
                ? (e = "")
                : "number" == typeof e
                ? (e += "")
                : Array.isArray(e) &&
                  (e = k.map(e, function (a) {
                    return null == a ? "" : a + "";
                  })),
              (b =
                k.valHooks[this.type] ||
                k.valHooks[this.nodeName.toLowerCase()]),
              (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                (this.value = e));
          }))
        : e
        ? ((b = k.valHooks[e.type] || k.valHooks[e.nodeName.toLowerCase()]),
          b && "get" in b && void 0 !== (c = b.get(e, "value"))
            ? c
            : ((c = e.value),
              "string" == typeof c ? c.replace(ac, "") : null == c ? "" : c))
        : void 0;
    },
  });
  k.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = k.find.attr(a, "value");
          return null != b ? b : za(k.text(a));
        },
      },
      select: {
        get: function (a) {
          var b,
            c,
            e = a.options,
            f = a.selectedIndex,
            g = "select-one" === a.type,
            h = g ? null : [],
            l = g ? f + 1 : e.length;
          for (c = 0 > f ? l : g ? f : 0; c < l; c++)
            if (
              ((b = e[c]),
              !(
                (!b.selected && c !== f) ||
                b.disabled ||
                (b.parentNode.disabled && d(b.parentNode, "optgroup"))
              ))
            ) {
              if (((a = k(b).val()), g)) return a;
              h.push(a);
            }
          return h;
        },
        set: function (a, b) {
          for (var c, d, e = a.options, f = k.makeArray(b), g = e.length; g--; )
            (d = e[g]),
              (d.selected = -1 < k.inArray(k.valHooks.option.get(d), f)) &&
                (c = !0);
          return c || (a.selectedIndex = -1), f;
        },
      },
    },
  });
  k.each(["radio", "checkbox"], function () {
    k.valHooks[this] = {
      set: function (a, b) {
        if (Array.isArray(b))
          return (a.checked = -1 < k.inArray(k(a).val(), b));
      },
    };
    D.checkOn ||
      (k.valHooks[this].get = function (a) {
        return null === a.getAttribute("value") ? "on" : a.value;
      });
  });
  D.focusin = "onfocusin" in b;
  var vb = /^(?:focusinfocus|focusoutblur)$/,
    wb = function (a) {
      a.stopPropagation();
    };
  k.extend(k.event, {
    trigger: function (a, c, d, e) {
      var f,
        g,
        h,
        l,
        n,
        m,
        p,
        r,
        B = [d || K],
        E = Y.call(a, "type") ? a.type : a;
      f = Y.call(a, "namespace") ? a.namespace.split(".") : [];
      if (
        ((g = r = h = d = d || K),
        3 !== d.nodeType &&
          8 !== d.nodeType &&
          !vb.test(E + k.event.triggered) &&
          (-1 < E.indexOf(".") &&
            ((f = E.split(".")), (E = f.shift()), f.sort()),
          (n = 0 > E.indexOf(":") && "on" + E),
          (a = a[k.expando] ? a : new k.Event(E, "object" == typeof a && a)),
          (a.isTrigger = e ? 2 : 3),
          (a.namespace = f.join(".")),
          (a.rnamespace = a.namespace
            ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (a.result = void 0),
          a.target || (a.target = d),
          (c = null == c ? [a] : k.makeArray(c, [a])),
          (p = k.event.special[E] || {}),
          e || !p.trigger || !1 !== p.trigger.apply(d, c)))
      ) {
        if (!e && !p.noBubble && !ra(d)) {
          l = p.delegateType || E;
          for (vb.test(l + E) || (g = g.parentNode); g; g = g.parentNode)
            B.push(g), (h = g);
          h === (d.ownerDocument || K) &&
            B.push(h.defaultView || h.parentWindow || b);
        }
        for (f = 0; (g = B[f++]) && !a.isPropagationStopped(); )
          (r = g),
            (a.type = 1 < f ? l : p.bindType || E),
            (m = (C.get(g, "events") || {})[a.type] && C.get(g, "handle")) &&
              m.apply(g, c),
            (m = n && g[n]) &&
              m.apply &&
              Ua(g) &&
              ((a.result = m.apply(g, c)),
              !1 === a.result && a.preventDefault());
        return (
          (a.type = E),
          e ||
            a.isDefaultPrevented() ||
            (p._default && !1 !== p._default.apply(B.pop(), c)) ||
            !Ua(d) ||
            (n &&
              z(d[E]) &&
              !ra(d) &&
              ((h = d[n]),
              h && (d[n] = null),
              (k.event.triggered = E),
              a.isPropagationStopped() && r.addEventListener(E, wb),
              d[E](),
              a.isPropagationStopped() && r.removeEventListener(E, wb),
              (k.event.triggered = void 0),
              h && (d[n] = h))),
          a.result
        );
      }
    },
    simulate: function (a, b, c) {
      a = k.extend(new k.Event(), c, { type: a, isSimulated: !0 });
      k.event.trigger(a, null, b);
    },
  });
  k.fn.extend({
    trigger: function (a, b) {
      return this.each(function () {
        k.event.trigger(a, b, this);
      });
    },
    triggerHandler: function (a, b) {
      var c = this[0];
      if (c) return k.event.trigger(a, b, c, !0);
    },
  });
  D.focusin ||
    k.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
      var c = function (a) {
        k.event.simulate(b, a.target, k.event.fix(a));
      };
      k.event.special[b] = {
        setup: function () {
          var d = this.ownerDocument || this,
            e = C.access(d, b);
          e || d.addEventListener(a, c, !0);
          C.access(d, b, (e || 0) + 1);
        },
        teardown: function () {
          var d = this.ownerDocument || this,
            e = C.access(d, b) - 1;
          e
            ? C.access(d, b, e)
            : (d.removeEventListener(a, c, !0), C.remove(d, b));
        },
      };
    });
  var Na = b.location,
    xb = Date.now(),
    $a = /\?/;
  k.parseXML = function (a) {
    var c;
    if (!a || "string" != typeof a) return null;
    try {
      c = new b.DOMParser().parseFromString(a, "text/xml");
    } catch (d) {
      c = void 0;
    }
    return (
      (c && !c.getElementsByTagName("parsererror").length) ||
        k.error("Invalid XML: " + a),
      c
    );
  };
  var Mb = /\[\]$/,
    yb = /\r?\n/g,
    bc = /^(?:submit|button|image|reset|file)$/i,
    cc = /^(?:input|select|textarea|keygen)/i;
  k.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        var c = z(b) ? b() : b;
        d[d.length] =
          encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
      };
    if (Array.isArray(a) || (a.jquery && !k.isPlainObject(a)))
      k.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) X(c, a[c], b, e);
    return d.join("&");
  };
  k.fn.extend({
    serialize: function () {
      return k.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var a = k.prop(this, "elements");
        return a ? k.makeArray(a) : this;
      })
        .filter(function () {
          var a = this.type;
          return (
            this.name &&
            !k(this).is(":disabled") &&
            cc.test(this.nodeName) &&
            !bc.test(a) &&
            (this.checked || !pb.test(a))
          );
        })
        .map(function (a, b) {
          var c = k(this).val();
          return null == c
            ? null
            : Array.isArray(c)
            ? k.map(c, function (a) {
                return { name: b.name, value: a.replace(yb, "\r\n") };
              })
            : { name: b.name, value: c.replace(yb, "\r\n") };
        })
        .get();
    },
  });
  var dc = /%20/g,
    ec = /#.*$/,
    fc = /([?&])_=[^&]*/,
    gc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    hc = /^(?:GET|HEAD)$/,
    ic = /^\/\//,
    zb = {},
    Xa = {},
    Ab = "*/".concat("*"),
    ab = K.createElement("a");
  ab.href = Na.href;
  k.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Na.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
        Na.protocol
      ),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Ab,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": k.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? H(H(a, k.ajaxSettings), b) : H(k.ajaxSettings, a);
    },
    ajaxPrefilter: B(zb),
    ajaxTransport: B(Xa),
    ajax: function (a, c) {
      function d(a, c, h, n) {
        var r,
          B,
          v,
          E,
          I,
          w = c;
        m ||
          ((m = !0),
          l && b.clearTimeout(l),
          (e = void 0),
          (g = n || ""),
          (H.readyState = 0 < a ? 4 : 0),
          (r = (200 <= a && 300 > a) || 304 === a),
          h &&
            (E = (function (a, b, c) {
              for (
                var d, e, f, g, h = a.contents, k = a.dataTypes;
                "*" === k[0];

              )
                k.shift(),
                  void 0 === d &&
                    (d = a.mimeType || b.getResponseHeader("Content-Type"));
              if (d)
                for (e in h)
                  if (h[e] && h[e].test(d)) {
                    k.unshift(e);
                    break;
                  }
              if (k[0] in c) f = k[0];
              else {
                for (e in c) {
                  if (!k[0] || a.converters[e + " " + k[0]]) {
                    f = e;
                    break;
                  }
                  g || (g = e);
                }
                f = f || g;
              }
              if (f) return f !== k[0] && k.unshift(f), c[f];
            })(q, H, h)),
          (E = (function (a, b, c, d) {
            var e,
              f,
              g,
              h,
              k,
              l = {},
              n = a.dataTypes.slice();
            if (n[1])
              for (g in a.converters) l[g.toLowerCase()] = a.converters[g];
            for (f = n.shift(); f; )
              if (
                (a.responseFields[f] && (c[a.responseFields[f]] = b),
                !k && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                (k = f),
                (f = n.shift()),
                f)
              )
                if ("*" === f) f = k;
                else if ("*" !== k && k !== f) {
                  if (((g = l[k + " " + f] || l["* " + f]), !g))
                    for (e in l)
                      if (
                        ((h = e.split(" ")),
                        h[1] === f &&
                          ((g = l[k + " " + h[0]] || l["* " + h[0]]), g))
                      ) {
                        !0 === g
                          ? (g = l[e])
                          : !0 !== l[e] && ((f = h[0]), n.unshift(h[1]));
                        break;
                      }
                  if (!0 !== g)
                    if (g && a["throws"]) b = g(b);
                    else
                      try {
                        b = g(b);
                      } catch (m) {
                        return {
                          state: "parsererror",
                          error: g ? m : "No conversion from " + k + " to " + f,
                        };
                      }
                }
            return { state: "success", data: b };
          })(q, E, H, r)),
          r
            ? (q.ifModified &&
                ((I = H.getResponseHeader("Last-Modified")),
                I && (k.lastModified[f] = I),
                (I = H.getResponseHeader("etag")),
                I && (k.etag[f] = I)),
              204 === a || "HEAD" === q.type
                ? (w = "nocontent")
                : 304 === a
                ? (w = "notmodified")
                : ((w = E.state), (B = E.data), (v = E.error), (r = !v)))
            : ((v = w), (!a && w) || ((w = "error"), 0 > a && (a = 0))),
          (H.status = a),
          (H.statusText = (c || w) + ""),
          r ? t.resolveWith(u, [B, w, H]) : t.rejectWith(u, [H, w, v]),
          H.statusCode(A),
          (A = void 0),
          p && ba.trigger(r ? "ajaxSuccess" : "ajaxError", [H, q, r ? B : v]),
          V.fireWith(u, [H, w]),
          p &&
            (ba.trigger("ajaxComplete", [H, q]),
            --k.active || k.event.trigger("ajaxStop")));
      }
      "object" == typeof a && ((c = a), (a = void 0));
      c = c || {};
      var e,
        f,
        g,
        h,
        l,
        n,
        m,
        p,
        r,
        B,
        q = k.ajaxSetup({}, c),
        u = q.context || q,
        ba = q.context && (u.nodeType || u.jquery) ? k(u) : k.event,
        t = k.Deferred(),
        V = k.Callbacks("once memory"),
        A = q.statusCode || {},
        X = {},
        y = {},
        x = "canceled",
        H = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (m) {
              if (!h)
                for (h = {}; (b = gc.exec(g)); ) h[b[1].toLowerCase()] = b[2];
              b = h[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return m ? g : null;
          },
          setRequestHeader: function (a, b) {
            return (
              null == m &&
                ((a = y[a.toLowerCase()] = y[a.toLowerCase()] || a),
                (X[a] = b)),
              this
            );
          },
          overrideMimeType: function (a) {
            return null == m && (q.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (m) H.always(a[H.status]);
              else for (b in a) A[b] = [A[b], a[b]];
            return this;
          },
          abort: function (a) {
            a = a || x;
            return e && e.abort(a), d(0, a), this;
          },
        };
      if (
        (t.promise(H),
        (q.url = ((a || q.url || Na.href) + "").replace(
          ic,
          Na.protocol + "//"
        )),
        (q.type = c.method || c.type || q.method || q.type),
        (q.dataTypes = (q.dataType || "*").toLowerCase().match(oa) || [""]),
        null == q.crossDomain)
      ) {
        n = K.createElement("a");
        try {
          (n.href = q.url),
            (n.href = n.href),
            (q.crossDomain =
              ab.protocol + "//" + ab.host != n.protocol + "//" + n.host);
        } catch (pa) {
          q.crossDomain = !0;
        }
      }
      if (
        (q.data &&
          q.processData &&
          "string" != typeof q.data &&
          (q.data = k.param(q.data, q.traditional)),
        E(zb, q, c, H),
        m)
      )
        return H;
      for (r in ((p = k.event && q.global),
      p && 0 == k.active++ && k.event.trigger("ajaxStart"),
      (q.type = q.type.toUpperCase()),
      (q.hasContent = !hc.test(q.type)),
      (f = q.url.replace(ec, "")),
      q.hasContent
        ? q.data &&
          q.processData &&
          0 ===
            (q.contentType || "").indexOf(
              "application/x-www-form-urlencoded"
            ) &&
          (q.data = q.data.replace(dc, "+"))
        : ((B = q.url.slice(f.length)),
          q.data &&
            (q.processData || "string" == typeof q.data) &&
            ((f += ($a.test(f) ? "&" : "?") + q.data), delete q.data),
          !1 === q.cache &&
            ((f = f.replace(fc, "$1")),
            (B = ($a.test(f) ? "&" : "?") + "_=" + xb++ + B)),
          (q.url = f + B)),
      q.ifModified &&
        (k.lastModified[f] &&
          H.setRequestHeader("If-Modified-Since", k.lastModified[f]),
        k.etag[f] && H.setRequestHeader("If-None-Match", k.etag[f])),
      ((q.data && q.hasContent && !1 !== q.contentType) || c.contentType) &&
        H.setRequestHeader("Content-Type", q.contentType),
      H.setRequestHeader(
        "Accept",
        q.dataTypes[0] && q.accepts[q.dataTypes[0]]
          ? q.accepts[q.dataTypes[0]] +
              ("*" !== q.dataTypes[0] ? ", " + Ab + "; q=0.01" : "")
          : q.accepts["*"]
      ),
      q.headers))
        H.setRequestHeader(r, q.headers[r]);
      if (q.beforeSend && (!1 === q.beforeSend.call(u, H, q) || m))
        return H.abort();
      if (
        ((x = "abort"),
        V.add(q.complete),
        H.done(q.success),
        H.fail(q.error),
        (e = E(Xa, q, c, H)),
        e)
      ) {
        if (((H.readyState = 1), p && ba.trigger("ajaxSend", [H, q]), m))
          return H;
        q.async &&
          0 < q.timeout &&
          (l = b.setTimeout(function () {
            H.abort("timeout");
          }, q.timeout));
        try {
          (m = !1), e.send(X, d);
        } catch (J) {
          if (m) throw J;
          d(-1, J);
        }
      } else d(-1, "No Transport");
      return H;
    },
    getJSON: function (a, b, c) {
      return k.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return k.get(a, void 0, b, "script");
    },
  });
  k.each(["get", "post"], function (a, b) {
    k[b] = function (a, c, d, e) {
      return (
        z(c) && ((e = e || d), (d = c), (c = void 0)),
        k.ajax(
          k.extend(
            { url: a, type: b, dataType: e, data: c, success: d },
            k.isPlainObject(a) && a
          )
        )
      );
    };
  });
  k._evalUrl = function (a) {
    return k.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      throws: !0,
    });
  };
  k.fn.extend({
    wrapAll: function (a) {
      var b;
      return (
        this[0] &&
          (z(a) && (a = a.call(this[0])),
          (b = k(a, this[0].ownerDocument).eq(0).clone(!0)),
          this[0].parentNode && b.insertBefore(this[0]),
          b
            .map(function () {
              for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
              return a;
            })
            .append(this)),
        this
      );
    },
    wrapInner: function (a) {
      return z(a)
        ? this.each(function (b) {
            k(this).wrapInner(a.call(this, b));
          })
        : this.each(function () {
            var b = k(this),
              c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a);
          });
    },
    wrap: function (a) {
      var b = z(a);
      return this.each(function (c) {
        k(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function (a) {
      return (
        this.parent(a)
          .not("body")
          .each(function () {
            k(this).replaceWith(this.childNodes);
          }),
        this
      );
    },
  });
  k.expr.pseudos.hidden = function (a) {
    return !k.expr.pseudos.visible(a);
  };
  k.expr.pseudos.visible = function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
  };
  k.ajaxSettings.xhr = function () {
    try {
      return new b.XMLHttpRequest();
    } catch (a) {}
  };
  var jc = { 0: 200, 1223: 204 },
    Oa = k.ajaxSettings.xhr();
  D.cors = !!Oa && "withCredentials" in Oa;
  D.ajax = Oa = !!Oa;
  k.ajaxTransport(function (a) {
    var c, d;
    if (D.cors || (Oa && !a.crossDomain))
      return {
        send: function (e, f) {
          var g,
            h = a.xhr();
          if (
            (h.open(a.type, a.url, a.async, a.username, a.password),
            a.xhrFields)
          )
            for (g in a.xhrFields) h[g] = a.xhrFields[g];
          for (g in (a.mimeType &&
            h.overrideMimeType &&
            h.overrideMimeType(a.mimeType),
          a.crossDomain ||
            e["X-Requested-With"] ||
            (e["X-Requested-With"] = "XMLHttpRequest"),
          e))
            h.setRequestHeader(g, e[g]);
          c = function (a) {
            return function () {
              c &&
                ((c =
                  d =
                  h.onload =
                  h.onerror =
                  h.onabort =
                  h.ontimeout =
                  h.onreadystatechange =
                    null),
                "abort" === a
                  ? h.abort()
                  : "error" === a
                  ? "number" != typeof h.status
                    ? f(0, "error")
                    : f(h.status, h.statusText)
                  : f(
                      jc[h.status] || h.status,
                      h.statusText,
                      "text" !== (h.responseType || "text") ||
                        "string" != typeof h.responseText
                        ? { binary: h.response }
                        : { text: h.responseText },
                      h.getAllResponseHeaders()
                    ));
            };
          };
          h.onload = c();
          d = h.onerror = h.ontimeout = c("error");
          void 0 !== h.onabort
            ? (h.onabort = d)
            : (h.onreadystatechange = function () {
                4 === h.readyState &&
                  b.setTimeout(function () {
                    c && d();
                  });
              });
          c = c("abort");
          try {
            h.send((a.hasContent && a.data) || null);
          } catch (k) {
            if (c) throw k;
          }
        },
        abort: function () {
          c && c();
        },
      };
  });
  k.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1);
  });
  k.ajaxSetup({
    accepts: {
      script:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
    },
    contents: { script: /\b(?:java|ecma)script\b/ },
    converters: {
      "text script": function (a) {
        return k.globalEval(a), a;
      },
    },
  });
  k.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1);
    a.crossDomain && (a.type = "GET");
  });
  k.ajaxTransport("script", function (a) {
    var b, c;
    if (a.crossDomain)
      return {
        send: function (d, e) {
          b = k("<script>")
            .prop({ charset: a.scriptCharset, src: a.url })
            .on(
              "load error",
              (c = function (a) {
                b.remove();
                c = null;
                a && e("error" === a.type ? 404 : 200, a.type);
              })
            );
          K.head.appendChild(b[0]);
        },
        abort: function () {
          c && c();
        },
      };
  });
  var bb,
    Bb = [],
    cb = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Bb.pop() || k.expando + "_" + xb++;
      return (this[a] = !0), a;
    },
  });
  k.ajaxPrefilter("json jsonp", function (a, c, d) {
    var e,
      f,
      g,
      h =
        !1 !== a.jsonp &&
        (cb.test(a.url)
          ? "url"
          : "string" == typeof a.data &&
            0 ===
              (a.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            cb.test(a.data) &&
            "data");
    if (h || "jsonp" === a.dataTypes[0])
      return (
        (e = a.jsonpCallback =
          z(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback),
        h
          ? (a[h] = a[h].replace(cb, "$1" + e))
          : !1 !== a.jsonp &&
            (a.url += ($a.test(a.url) ? "&" : "?") + a.jsonp + "=" + e),
        (a.converters["script json"] = function () {
          return g || k.error(e + " was not called"), g[0];
        }),
        (a.dataTypes[0] = "json"),
        (f = b[e]),
        (b[e] = function () {
          g = arguments;
        }),
        d.always(function () {
          void 0 === f ? k(b).removeProp(e) : (b[e] = f);
          a[e] && ((a.jsonpCallback = c.jsonpCallback), Bb.push(e));
          g && z(f) && f(g[0]);
          g = f = void 0;
        }),
        "script"
      );
  });
  D.createHTMLDocument =
    ((bb = K.implementation.createHTMLDocument("").body),
    (bb.innerHTML = "<form></form><form></form>"),
    2 === bb.childNodes.length);
  k.parseHTML = function (a, b, c) {
    return "string" != typeof a
      ? []
      : ("boolean" == typeof b && ((c = b), (b = !1)),
        b ||
          (D.createHTMLDocument
            ? ((b = K.implementation.createHTMLDocument("")),
              (d = b.createElement("base")),
              (d.href = K.location.href),
              b.head.appendChild(d))
            : (b = K)),
        (e = lb.exec(a)),
        (f = !c && []),
        e
          ? [b.createElement(e[1])]
          : ((e = ha([a], b, f)),
            f && f.length && k(f).remove(),
            k.merge([], e.childNodes)));
    var d, e, f;
  };
  k.fn.load = function (a, b, c) {
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      -1 < h && ((d = za(a.slice(h))), (a = a.slice(0, h))),
      z(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      0 < g.length &&
        k
          .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
          .done(function (a) {
            f = arguments;
            g.html(d ? k("<div>").append(k.parseHTML(a)).find(d) : a);
          })
          .always(
            c &&
              function (a, b) {
                g.each(function () {
                  c.apply(this, f || [a.responseText, b, a]);
                });
              }
          ),
      this
    );
  };
  k.each(
    "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function (a, b) {
      k.fn[b] = function (a) {
        return this.on(b, a);
      };
    }
  );
  k.expr.pseudos.animated = function (a) {
    return k.grep(k.timers, function (b) {
      return a === b.elem;
    }).length;
  };
  k.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        l = k.css(a, "position"),
        n = k(a),
        m = {};
      "static" === l && (a.style.position = "relative");
      g = n.offset();
      e = k.css(a, "top");
      h = k.css(a, "left");
      e =
        ("absolute" === l || "fixed" === l) && -1 < (e + h).indexOf("auto")
          ? ((d = n.position()), (f = d.top), d.left)
          : ((f = parseFloat(e) || 0), parseFloat(h) || 0);
      z(b) && (b = b.call(a, c, k.extend({}, g)));
      null != b.top && (m.top = b.top - g.top + f);
      null != b.left && (m.left = b.left - g.left + e);
      "using" in b ? b.using.call(a, m) : n.css(m);
    },
  };
  k.fn.extend({
    offset: function (a) {
      if (arguments.length)
        return void 0 === a
          ? this
          : this.each(function (b) {
              k.offset.setOffset(this, a, b);
            });
      var b,
        c,
        d = this[0];
      return d
        ? d.getClientRects().length
          ? ((b = d.getBoundingClientRect()),
            (c = d.ownerDocument.defaultView),
            { top: b.top + c.pageYOffset, left: b.left + c.pageXOffset })
          : { top: 0, left: 0 }
        : void 0;
    },
    position: function () {
      if (this[0]) {
        var a,
          b,
          c,
          d = this[0],
          e = { top: 0, left: 0 };
        if ("fixed" === k.css(d, "position")) b = d.getBoundingClientRect();
        else {
          b = this.offset();
          c = d.ownerDocument;
          for (
            a = d.offsetParent || c.documentElement;
            a &&
            (a === c.body || a === c.documentElement) &&
            "static" === k.css(a, "position");

          )
            a = a.parentNode;
          a &&
            a !== d &&
            1 === a.nodeType &&
            ((e = k(a).offset()),
            (e.top += k.css(a, "borderTopWidth", !0)),
            (e.left += k.css(a, "borderLeftWidth", !0)));
        }
        return {
          top: b.top - e.top - k.css(d, "marginTop", !0),
          left: b.left - e.left - k.css(d, "marginLeft", !0),
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (
          var a = this.offsetParent;
          a && "static" === k.css(a, "position");

        )
          a = a.offsetParent;
        return a || Va;
      });
    },
  });
  k.each(
    { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
    function (a, b) {
      var c = "pageYOffset" === b;
      k.fn[a] = function (d) {
        return Ba(
          this,
          function (a, d, e) {
            var f;
            if (
              (ra(a) ? (f = a) : 9 === a.nodeType && (f = a.defaultView),
              void 0 === e)
            )
              return f ? f[b] : a[d];
            f
              ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
              : (a[d] = e);
          },
          a,
          d,
          arguments.length
        );
      };
    }
  );
  k.each(["top", "left"], function (a, b) {
    k.cssHooks[b] = R(D.pixelPosition, function (a, c) {
      if (c) return (c = la(a, b)), Wa.test(c) ? k(a).position()[b] + "px" : c;
    });
  });
  k.each({ Height: "height", Width: "width" }, function (a, b) {
    k.each(
      { padding: "inner" + a, content: b, "": "outer" + a },
      function (c, d) {
        k.fn[d] = function (e, f) {
          var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (!0 === e || !0 === f ? "margin" : "border");
          return Ba(
            this,
            function (b, c, e) {
              var f;
              return ra(b)
                ? 0 === d.indexOf("outer")
                  ? b["inner" + a]
                  : b.document.documentElement["client" + a]
                : 9 === b.nodeType
                ? ((f = b.documentElement),
                  Math.max(
                    b.body["scroll" + a],
                    f["scroll" + a],
                    b.body["offset" + a],
                    f["offset" + a],
                    f["client" + a]
                  ))
                : void 0 === e
                ? k.css(b, c, h)
                : k.style(b, c, e, h);
            },
            b,
            g ? e : void 0,
            g
          );
        };
      }
    );
  });
  k.each(
    "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
      " "
    ),
    function (a, b) {
      k.fn[b] = function (a, c) {
        return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b);
      };
    }
  );
  k.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    },
  });
  k.fn.extend({
    bind: function (a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function (a, b) {
      return this.off(a, null, b);
    },
    delegate: function (a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function (a, b, c) {
      return 1 === arguments.length
        ? this.off(a, "**")
        : this.off(b, a || "**", c);
    },
  });
  k.proxy = function (a, b) {
    var c, d, e;
    if (("string" == typeof b && ((c = a[b]), (b = a), (a = c)), z(a)))
      return (
        (d = qa.call(arguments, 2)),
        (e = function () {
          return a.apply(b || this, d.concat(qa.call(arguments)));
        }),
        (e.guid = a.guid = a.guid || k.guid++),
        e
      );
  };
  k.holdReady = function (a) {
    a ? k.readyWait++ : k.ready(!0);
  };
  k.isArray = Array.isArray;
  k.parseJSON = JSON.parse;
  k.nodeName = d;
  k.isFunction = z;
  k.isWindow = ra;
  k.camelCase = t;
  k.type = e;
  k.now = Date.now;
  k.isNumeric = function (a) {
    var b = k.type(a);
    return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
  };
  "function" == typeof define &&
    define.amd &&
    define("jquery", [], function () {
      return k;
    });
  var kc = b.jQuery,
    lc = b.$;
  return (
    (k.noConflict = function (a) {
      return b.$ === k && (b.$ = lc), a && b.jQuery === k && (b.jQuery = kc), k;
    }),
    a || (b.jQuery = b.$ = k),
    k
  );
});
(function (b) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./version"], b)
    : b(jQuery);
})(function (b) {
  return b.extend(b.expr[":"], {
    data: b.expr.createPseudo
      ? b.expr.createPseudo(function (a) {
          return function (c) {
            return !!b.data(c, a);
          };
        })
      : function (a, c, e) {
          return !!b.data(a, e[3]);
        },
  });
});
(function (b) {
  "function" == typeof define && define.amd ? define(["jquery"], b) : b(jQuery);
})(function (b) {
  return (b.ui = b.ui || {}), (b.ui.version = "1.12.1");
});
(function (b) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./version"], b)
    : b(jQuery);
})(function (b) {
  return b.fn.extend({
    disableSelection:
      ((a =
        "onselectstart" in document.createElement("div")
          ? "selectstart"
          : "mousedown"),
      function () {
        return this.on(a + ".ui-disableSelection", function (a) {
          a.preventDefault();
        });
      }),
    enableSelection: function () {
      return this.off(".ui-disableSelection");
    },
  });
  var a;
});
(function (b) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./version"], b)
    : b(jQuery);
})(function (b) {
  return (
    (b.ui.focusable = function (a, c) {
      var e,
        f,
        d,
        g,
        h,
        l = a.nodeName.toLowerCase();
      if ("area" === l)
        g =
          ((e = a.parentNode),
          (f = e.name),
          !(!a.href || !f || "map" !== e.nodeName.toLowerCase()) &&
            ((d = b("img[usemap='#" + f + "']")),
            0 < d.length && d.is(":visible")));
      else {
        /^(input|select|textarea|button|object)$/.test(l)
          ? ((g = !a.disabled),
            g && ((h = b(a).closest("fieldset")[0]), h && (g = !h.disabled)))
          : (g = ("a" === l && a.href) || c);
        if ((e = g && b(a).is(":visible"))) {
          e = b(a);
          for (f = e.css("visibility"); "inherit" === f; )
            (e = e.parent()), (f = e.css("visibility"));
          e = "hidden" !== f;
        }
        g = e;
      }
      return g;
    }),
    b.extend(b.expr[":"], {
      focusable: function (a) {
        return b.ui.focusable(a, null != b.attr(a, "tabindex"));
      },
    }),
    b.ui.focusable
  );
});
(function (b) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./version"], b)
    : b(jQuery);
})(function (b) {
  return (b.fn.form = function () {
    return "string" == typeof this[0].form
      ? this.closest("form")
      : b(this[0].form);
  });
});
(function (b) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./version"], b)
    : b(jQuery);
})(function (b) {
  return (b.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
});
(function (b) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./version"], b)
    : b(jQuery);
})(function (b) {
  "1.7" === b.fn.jquery.substring(0, 3) &&
    (b.each(["Width", "Height"], function (a, c) {
      function e(a, c, d, e) {
        return (
          b.each(f, function () {
            c -= parseFloat(b.css(a, "padding" + this)) || 0;
            d && (c -= parseFloat(b.css(a, "border" + this + "Width")) || 0);
            e && (c -= parseFloat(b.css(a, "margin" + this)) || 0);
          }),
          c
        );
      }
      var f = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
        d = c.toLowerCase(),
        g = {
          innerWidth: b.fn.innerWidth,
          innerHeight: b.fn.innerHeight,
          outerWidth: b.fn.outerWidth,
          outerHeight: b.fn.outerHeight,
        };
      b.fn["inner" + c] = function (a) {
        return void 0 === a
          ? g["inner" + c].call(this)
          : this.each(function () {
              b(this).css(d, e(this, a) + "px");
            });
      };
      b.fn["outer" + c] = function (a, f) {
        return "number" != typeof a
          ? g["outer" + c].call(this, a)
          : this.each(function () {
              b(this).css(d, e(this, a, !0, f) + "px");
            });
      };
    }),
    (b.fn.addBack = function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }));
});
(function (b) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./version"], b)
    : b(jQuery);
})(function (b) {
  return (b.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38,
  });
});
(function (b) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./version", "./escape-selector"], b)
    : b(jQuery);
})(function (b) {
  return (b.fn.labels = function () {
    var a, c, e, f, d;
    return this[0].labels && this[0].labels.length
      ? this.pushStack(this[0].labels)
      : ((f = this.eq(0).parents("label")),
        (e = this.attr("id")),
        e &&
          ((a = this.eq(0).parents().last()),
          (d = a.add(a.length ? a.siblings() : this.siblings())),
          (c = "label[for='" + b.ui.escapeSelector(e) + "']"),
          (f = f.add(d.find(c).addBack(c)))),
        this.pushStack(f));
  });
});
(function (b) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./version"], b)
    : b(jQuery);
})(function (b) {
  return (b.ui.safeActiveElement = function (a) {
    var b;
    try {
      b = a.activeElement;
    } catch (e) {
      b = a.body;
    }
    return b || (b = a.body), b.nodeName || (b = a.body), b;
  });
});
(function (b) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./version"], b)
    : b(jQuery);
})(function (b) {
  return (b.ui.safeBlur = function (a) {
    a && "body" !== a.nodeName.toLowerCase() && b(a).trigger("blur");
  });
});
(function (b) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./version"], b)
    : b(jQuery);
})(function (b) {
  return (b.fn.scrollParent = function (a) {
    var c = this.css("position"),
      e = "absolute" === c,
      f = a ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
    a = this.parents()
      .filter(function () {
        var a = b(this);
        return (
          (!e || "static" !== a.css("position")) &&
          f.test(a.css("overflow") + a.css("overflow-y") + a.css("overflow-x"))
        );
      })
      .eq(0);
    return "fixed" !== c && a.length ? a : b(this[0].ownerDocument || document);
  });
});
(function (b) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./version", "./focusable"], b)
    : b(jQuery);
})(function (b) {
  return b.extend(b.expr[":"], {
    tabbable: function (a) {
      var c = b.attr(a, "tabindex"),
        e = null != c;
      return (!e || 0 <= c) && b.ui.focusable(a, e);
    },
  });
});
(function (b) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./version"], b)
    : b(jQuery);
})(function (b) {
  return b.fn.extend({
    uniqueId:
      ((a = 0),
      function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++a);
        });
      }),
    removeUniqueId: function () {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && b(this).removeAttr("id");
      });
    },
  });
  var a;
});
(function (b) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./version"], b)
    : b(jQuery);
})(function (b) {
  var a,
    c = 0,
    e = Array.prototype.slice;
  return (
    (b.cleanData =
      ((a = b.cleanData),
      function (c) {
        var d, e, h;
        for (h = 0; null != (e = c[h]); h++)
          try {
            (d = b._data(e, "events")) &&
              d.remove &&
              b(e).triggerHandler("remove");
          } catch (l) {}
        a(c);
      })),
    (b.widget = function (a, c, e) {
      var h,
        l,
        m,
        p = {},
        n = a.split(".")[0];
      a = a.split(".")[1];
      var r = n + "-" + a;
      return (
        e || ((e = c), (c = b.Widget)),
        b.isArray(e) && (e = b.extend.apply(null, [{}].concat(e))),
        (b.expr[":"][r.toLowerCase()] = function (a) {
          return !!b.data(a, r);
        }),
        (b[n] = b[n] || {}),
        (h = b[n][a]),
        (l = b[n][a] =
          function (a, b) {
            if (!this._createWidget) return new l(a, b);
            arguments.length && this._createWidget(a, b);
          }),
        b.extend(l, h, {
          version: e.version,
          _proto: b.extend({}, e),
          _childConstructors: [],
        }),
        (m = new c()),
        (m.options = b.widget.extend({}, m.options)),
        b.each(e, function (a, e) {
          b.isFunction(e)
            ? (p[a] = (function () {
                function b() {
                  return c.prototype[a].apply(this, arguments);
                }
                function f(b) {
                  return c.prototype[a].apply(this, b);
                }
                return function () {
                  var a,
                    c = this._super,
                    d = this._superApply;
                  return (
                    (this._super = b),
                    (this._superApply = f),
                    (a = e.apply(this, arguments)),
                    (this._super = c),
                    (this._superApply = d),
                    a
                  );
                };
              })())
            : (p[a] = e);
        }),
        (l.prototype = b.widget.extend(
          m,
          { widgetEventPrefix: (h && m.widgetEventPrefix) || a },
          p,
          { constructor: l, namespace: n, widgetName: a, widgetFullName: r }
        )),
        h
          ? (b.each(h._childConstructors, function (a, c) {
              var d = c.prototype;
              b.widget(d.namespace + "." + d.widgetName, l, c._proto);
            }),
            delete h._childConstructors)
          : c._childConstructors.push(l),
        b.widget.bridge(a, l),
        l
      );
    }),
    (b.widget.extend = function (a) {
      for (var c, g, h = e.call(arguments, 1), l = 0, m = h.length; l < m; l++)
        for (c in h[l])
          (g = h[l][c]),
            h[l].hasOwnProperty(c) &&
              void 0 !== g &&
              (b.isPlainObject(g)
                ? (a[c] = b.isPlainObject(a[c])
                    ? b.widget.extend({}, a[c], g)
                    : b.widget.extend({}, g))
                : (a[c] = g));
      return a;
    }),
    (b.widget.bridge = function (a, c) {
      var g = c.prototype.widgetFullName || a;
      b.fn[a] = function (h) {
        var l = "string" == typeof h,
          m = e.call(arguments, 1),
          p = this;
        return (
          l
            ? this.length || "instance" !== h
              ? this.each(function () {
                  var c,
                    d = b.data(this, g);
                  return "instance" === h
                    ? ((p = d), !1)
                    : d
                    ? b.isFunction(d[h]) && "_" !== h.charAt(0)
                      ? ((c = d[h].apply(d, m)),
                        c !== d && void 0 !== c
                          ? ((p = c && c.jquery ? p.pushStack(c.get()) : c), !1)
                          : void 0)
                      : b.error(
                          "no such method '" +
                            h +
                            "' for " +
                            a +
                            " widget instance"
                        )
                    : b.error(
                        "cannot call methods on " +
                          a +
                          " prior to initialization; attempted to call method '" +
                          h +
                          "'"
                      );
                })
              : (p = void 0)
            : (m.length && (h = b.widget.extend.apply(null, [h].concat(m))),
              this.each(function () {
                var a = b.data(this, g);
                a
                  ? (a.option(h || {}), a._init && a._init())
                  : b.data(this, g, new c(h, this));
              })),
          p
        );
      };
    }),
    (b.Widget = function () {}),
    (b.Widget._childConstructors = []),
    (b.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (a, d) {
        d = b(d || this.defaultElement || this)[0];
        this.element = b(d);
        this.uuid = c++;
        this.eventNamespace = "." + this.widgetName + this.uuid;
        this.bindings = b();
        this.hoverable = b();
        this.focusable = b();
        this.classesElementLookup = {};
        d !== this &&
          (b.data(d, this.widgetFullName, this),
          this._on(!0, this.element, {
            remove: function (a) {
              a.target === d && this.destroy();
            },
          }),
          (this.document = b(d.style ? d.ownerDocument : d.document || d)),
          (this.window = b(
            this.document[0].defaultView || this.document[0].parentWindow
          )));
        this.options = b.widget.extend(
          {},
          this.options,
          this._getCreateOptions(),
          a
        );
        this._create();
        this.options.disabled && this._setOptionDisabled(this.options.disabled);
        this._trigger("create", null, this._getCreateEventData());
        this._init();
      },
      _getCreateOptions: function () {
        return {};
      },
      _getCreateEventData: b.noop,
      _create: b.noop,
      _init: b.noop,
      destroy: function () {
        var a = this;
        this._destroy();
        b.each(this.classesElementLookup, function (b, c) {
          a._removeClass(c, b);
        });
        this.element.off(this.eventNamespace).removeData(this.widgetFullName);
        this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
        this.bindings.off(this.eventNamespace);
      },
      _destroy: b.noop,
      widget: function () {
        return this.element;
      },
      option: function (a, c) {
        var e,
          h,
          l,
          m = a;
        if (0 === arguments.length) return b.widget.extend({}, this.options);
        if ("string" == typeof a)
          if (((m = {}), (e = a.split(".")), (a = e.shift()), e.length)) {
            h = m[a] = b.widget.extend({}, this.options[a]);
            for (l = 0; l < e.length - 1; l++)
              (h[e[l]] = h[e[l]] || {}), (h = h[e[l]]);
            if (((a = e.pop()), 1 === arguments.length))
              return void 0 === h[a] ? null : h[a];
            h[a] = c;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[a] ? null : this.options[a];
            m[a] = c;
          }
        return this._setOptions(m), this;
      },
      _setOptions: function (a) {
        for (var b in a) this._setOption(b, a[b]);
        return this;
      },
      _setOption: function (a, b) {
        return (
          "classes" === a && this._setOptionClasses(b),
          (this.options[a] = b),
          "disabled" === a && this._setOptionDisabled(b),
          this
        );
      },
      _setOptionClasses: function (a) {
        var c, e, h;
        for (c in a)
          (h = this.classesElementLookup[c]),
            a[c] !== this.options.classes[c] &&
              h &&
              h.length &&
              ((e = b(h.get())),
              this._removeClass(h, c),
              e.addClass(
                this._classes({ element: e, keys: c, classes: a, add: !0 })
              ));
      },
      _setOptionDisabled: function (a) {
        this._toggleClass(
          this.widget(),
          this.widgetFullName + "-disabled",
          null,
          !!a
        );
        a &&
          (this._removeClass(this.hoverable, null, "ui-state-hover"),
          this._removeClass(this.focusable, null, "ui-state-focus"));
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _classes: function (a) {
        function c(d, m) {
          var p, n;
          for (n = 0; n < d.length; n++)
            (p = h.classesElementLookup[d[n]] || b()),
              (p = a.add
                ? b(b.unique(p.get().concat(a.element.get())))
                : b(p.not(a.element).get())),
              (h.classesElementLookup[d[n]] = p),
              e.push(d[n]),
              m && a.classes[d[n]] && e.push(a.classes[d[n]]);
        }
        var e = [],
          h = this;
        return (
          (a = b.extend(
            { element: this.element, classes: this.options.classes || {} },
            a
          )),
          this._on(a.element, { remove: "_untrackClassesElement" }),
          a.keys && c(a.keys.match(/\S+/g) || [], !0),
          a.extra && c(a.extra.match(/\S+/g) || []),
          e.join(" ")
        );
      },
      _untrackClassesElement: function (a) {
        var c = this;
        b.each(c.classesElementLookup, function (e, h) {
          -1 !== b.inArray(a.target, h) &&
            (c.classesElementLookup[e] = b(h.not(a.target).get()));
        });
      },
      _removeClass: function (a, b, c) {
        return this._toggleClass(a, b, c, !1);
      },
      _addClass: function (a, b, c) {
        return this._toggleClass(a, b, c, !0);
      },
      _toggleClass: function (a, b, c, e) {
        e = "boolean" == typeof e ? e : c;
        var l = "string" == typeof a || null === a;
        a = {
          extra: l ? b : c,
          keys: l ? a : b,
          element: l ? this.element : a,
          add: e,
        };
        return a.element.toggleClass(this._classes(a), e), this;
      },
      _on: function (a, c, e) {
        var h,
          l = this;
        "boolean" != typeof a && ((e = c), (c = a), (a = !1));
        e
          ? ((c = h = b(c)), (this.bindings = this.bindings.add(c)))
          : ((e = c), (c = this.element), (h = this.widget()));
        b.each(e, function (e, g) {
          function n() {
            if (
              a ||
              (!0 !== l.options.disabled &&
                !b(this).hasClass("ui-state-disabled"))
            )
              return ("string" == typeof g ? l[g] : g).apply(l, arguments);
          }
          "string" != typeof g &&
            (n.guid = g.guid = g.guid || n.guid || b.guid++);
          var r = e.match(/^([\w:-]*)\s*(.*)$/),
            t = r[1] + l.eventNamespace;
          (r = r[2]) ? h.on(t, r, n) : c.on(t, n);
        });
      },
      _off: function (a, c) {
        c =
          (c || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace;
        a.off(c).off(c);
        this.bindings = b(this.bindings.not(a).get());
        this.focusable = b(this.focusable.not(a).get());
        this.hoverable = b(this.hoverable.not(a).get());
      },
      _delay: function (a, b) {
        var c = this;
        return setTimeout(function () {
          return ("string" == typeof a ? c[a] : a).apply(c, arguments);
        }, b || 0);
      },
      _hoverable: function (a) {
        this.hoverable = this.hoverable.add(a);
        this._on(a, {
          mouseenter: function (a) {
            this._addClass(b(a.currentTarget), null, "ui-state-hover");
          },
          mouseleave: function (a) {
            this._removeClass(b(a.currentTarget), null, "ui-state-hover");
          },
        });
      },
      _focusable: function (a) {
        this.focusable = this.focusable.add(a);
        this._on(a, {
          focusin: function (a) {
            this._addClass(b(a.currentTarget), null, "ui-state-focus");
          },
          focusout: function (a) {
            this._removeClass(b(a.currentTarget), null, "ui-state-focus");
          },
        });
      },
      _trigger: function (a, c, e) {
        var h,
          l,
          m = this.options[a];
        if (
          ((e = e || {}),
          (c = b.Event(c)),
          (c.type = (
            a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a
          ).toLowerCase()),
          (c.target = this.element[0]),
          (l = c.originalEvent),
          l)
        )
          for (h in l) h in c || (c[h] = l[h]);
        return (
          this.element.trigger(c, e),
          !(
            (b.isFunction(m) &&
              !1 === m.apply(this.element[0], [c].concat(e))) ||
            c.isDefaultPrevented()
          )
        );
      },
    }),
    b.each({ show: "fadeIn", hide: "fadeOut" }, function (a, c) {
      b.Widget.prototype["_" + a] = function (e, h, l) {
        var m;
        "string" == typeof h && (h = { effect: h });
        var p = h ? (!0 === h || "number" == typeof h ? c : h.effect || c) : a;
        h = h || {};
        "number" == typeof h && (h = { duration: h });
        m = !b.isEmptyObject(h);
        h.complete = l;
        h.delay && e.delay(h.delay);
        m && b.effects && b.effects.effect[p]
          ? e[a](h)
          : p !== a && e[p]
          ? e[p](h.duration, h.easing, l)
          : e.queue(function (c) {
              b(this)[a]();
              l && l.call(e[0]);
              c();
            });
      };
    }),
    b.widget
  );
});
(function (b) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./version"], b)
    : b(jQuery);
})(function (b) {
  return (
    (function () {
      function a(a, b, c) {
        return [
          parseFloat(a[0]) * (m.test(a[0]) ? b / 100 : 1),
          parseFloat(a[1]) * (m.test(a[1]) ? c / 100 : 1),
        ];
      }
      var c,
        e = Math.max,
        f = Math.abs,
        d = /left|center|right/,
        g = /top|center|bottom/,
        h = /[\+\-]\d+(\.[\d]+)?%?/,
        l = /^\w+/,
        m = /%$/,
        p = b.fn.position;
      b.position = {
        scrollbarWidth: function () {
          if (void 0 !== c) return c;
          var a,
            e,
            d = b(
              "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
            ),
            f = d.children()[0];
          return (
            b("body").append(d),
            (a = f.offsetWidth),
            d.css("overflow", "scroll"),
            (e = f.offsetWidth),
            a === e && (e = d[0].clientWidth),
            d.remove(),
            (c = a - e)
          );
        },
        getScrollInfo: function (a) {
          var c = a.isWindow || a.isDocument ? "" : a.element.css("overflow-x"),
            e = a.isWindow || a.isDocument ? "" : a.element.css("overflow-y"),
            c =
              "scroll" === c ||
              ("auto" === c && a.width < a.element[0].scrollWidth);
          return {
            width:
              "scroll" === e ||
              ("auto" === e && a.height < a.element[0].scrollHeight)
                ? b.position.scrollbarWidth()
                : 0,
            height: c ? b.position.scrollbarWidth() : 0,
          };
        },
        getWithinInfo: function (a) {
          var c = b(a || window),
            e = b.isWindow(c[0]),
            d = !!c[0] && 9 === c[0].nodeType;
          return {
            element: c,
            isWindow: e,
            isDocument: d,
            offset: e || d ? { left: 0, top: 0 } : b(a).offset(),
            scrollLeft: c.scrollLeft(),
            scrollTop: c.scrollTop(),
            width: c.outerWidth(),
            height: c.outerHeight(),
          };
        },
      };
      b.fn.position = function (c) {
        if (!c || !c.of) return p.apply(this, arguments);
        c = b.extend({}, c);
        var m,
          t,
          A,
          u,
          y,
          x,
          q,
          F,
          ha = b(c.of),
          P = b.position.getWithinInfo(c.within),
          N = b.position.getScrollInfo(P),
          ka = (c.collision || "flip").split(" "),
          S = {};
        return (
          (q = ha),
          (F = q[0]),
          (x =
            9 === F.nodeType
              ? {
                  width: q.width(),
                  height: q.height(),
                  offset: { top: 0, left: 0 },
                }
              : b.isWindow(F)
              ? {
                  width: q.width(),
                  height: q.height(),
                  offset: { top: q.scrollTop(), left: q.scrollLeft() },
                }
              : F.preventDefault
              ? { width: 0, height: 0, offset: { top: F.pageY, left: F.pageX } }
              : {
                  width: q.outerWidth(),
                  height: q.outerHeight(),
                  offset: q.offset(),
                }),
          ha[0].preventDefault && (c.at = "left top"),
          (t = x.width),
          (A = x.height),
          (u = x.offset),
          (y = b.extend({}, u)),
          b.each(["my", "at"], function () {
            var a,
              b,
              e = (c[this] || "").split(" ");
            1 === e.length &&
              (e = d.test(e[0])
                ? e.concat(["center"])
                : g.test(e[0])
                ? ["center"].concat(e)
                : ["center", "center"]);
            e[0] = d.test(e[0]) ? e[0] : "center";
            e[1] = g.test(e[1]) ? e[1] : "center";
            a = h.exec(e[0]);
            b = h.exec(e[1]);
            S[this] = [a ? a[0] : 0, b ? b[0] : 0];
            c[this] = [l.exec(e[0])[0], l.exec(e[1])[0]];
          }),
          1 === ka.length && (ka[1] = ka[0]),
          "right" === c.at[0]
            ? (y.left += t)
            : "center" === c.at[0] && (y.left += t / 2),
          "bottom" === c.at[1]
            ? (y.top += A)
            : "center" === c.at[1] && (y.top += A / 2),
          (m = a(S.at, t, A)),
          (y.left += m[0]),
          (y.top += m[1]),
          this.each(function () {
            var d,
              g,
              h = b(this),
              l = h.outerWidth(),
              p = h.outerHeight(),
              q = parseInt(b.css(this, "marginLeft"), 10) || 0,
              x = parseInt(b.css(this, "marginTop"), 10) || 0,
              F =
                l +
                q +
                (parseInt(b.css(this, "marginRight"), 10) || 0) +
                N.width,
              ma =
                p +
                x +
                (parseInt(b.css(this, "marginBottom"), 10) || 0) +
                N.height,
              O = b.extend({}, y),
              ea = a(S.my, h.outerWidth(), h.outerHeight());
            "right" === c.my[0]
              ? (O.left -= l)
              : "center" === c.my[0] && (O.left -= l / 2);
            "bottom" === c.my[1]
              ? (O.top -= p)
              : "center" === c.my[1] && (O.top -= p / 2);
            O.left += ea[0];
            O.top += ea[1];
            d = { marginLeft: q, marginTop: x };
            b.each(["left", "top"], function (a, e) {
              b.ui.position[ka[a]] &&
                b.ui.position[ka[a]][e](O, {
                  targetWidth: t,
                  targetHeight: A,
                  elemWidth: l,
                  elemHeight: p,
                  collisionPosition: d,
                  collisionWidth: F,
                  collisionHeight: ma,
                  offset: [m[0] + ea[0], m[1] + ea[1]],
                  my: c.my,
                  at: c.at,
                  within: P,
                  elem: h,
                });
            });
            c.using &&
              (g = function (a) {
                var b = u.left - O.left,
                  d = b + t - l,
                  g = u.top - O.top,
                  m = g + A - p,
                  r = {
                    target: {
                      element: ha,
                      left: u.left,
                      top: u.top,
                      width: t,
                      height: A,
                    },
                    element: {
                      element: h,
                      left: O.left,
                      top: O.top,
                      width: l,
                      height: p,
                    },
                    horizontal: 0 > d ? "left" : 0 < b ? "right" : "center",
                    vertical: 0 > m ? "top" : 0 < g ? "bottom" : "middle",
                  };
                t < l && f(b + d) < t && (r.horizontal = "center");
                A < p && f(g + m) < A && (r.vertical = "middle");
                e(f(b), f(d)) > e(f(g), f(m))
                  ? (r.important = "horizontal")
                  : (r.important = "vertical");
                c.using.call(this, a, r);
              });
            h.offset(b.extend(O, { using: g }));
          })
        );
      };
      b.ui.position = {
        fit: {
          left: function (a, b) {
            var c,
              d = b.within,
              f = d.isWindow ? d.scrollLeft : d.offset.left,
              d = d.width,
              g = a.left - b.collisionPosition.marginLeft,
              h = f - g,
              l = g + b.collisionWidth - d - f;
            b.collisionWidth > d
              ? 0 < h && 0 >= l
                ? ((c = a.left + h + b.collisionWidth - d - f),
                  (a.left += h - c))
                : (a.left =
                    0 < l && 0 >= h ? f : l < h ? f + d - b.collisionWidth : f)
              : 0 < h
              ? (a.left += h)
              : 0 < l
              ? (a.left -= l)
              : (a.left = e(a.left - g, a.left));
          },
          top: function (a, b) {
            var c,
              d = b.within,
              d = d.isWindow ? d.scrollTop : d.offset.top,
              f = b.within.height,
              g = a.top - b.collisionPosition.marginTop,
              h = d - g,
              l = g + b.collisionHeight - f - d;
            b.collisionHeight > f
              ? 0 < h && 0 >= l
                ? ((c = a.top + h + b.collisionHeight - f - d),
                  (a.top += h - c))
                : (a.top =
                    0 < l && 0 >= h ? d : l < h ? d + f - b.collisionHeight : d)
              : 0 < h
              ? (a.top += h)
              : 0 < l
              ? (a.top -= l)
              : (a.top = e(a.top - g, a.top));
          },
        },
        flip: {
          left: function (a, b) {
            var c,
              d,
              e = b.within,
              g = e.offset.left + e.scrollLeft,
              h = e.width,
              e = e.isWindow ? e.scrollLeft : e.offset.left,
              l = a.left - b.collisionPosition.marginLeft,
              m = l - e,
              l = l + b.collisionWidth - h - e,
              p =
                "left" === b.my[0]
                  ? -b.elemWidth
                  : "right" === b.my[0]
                  ? b.elemWidth
                  : 0,
              P =
                "left" === b.at[0]
                  ? b.targetWidth
                  : "right" === b.at[0]
                  ? -b.targetWidth
                  : 0,
              N = -2 * b.offset[0];
            0 > m
              ? ((c = a.left + p + P + N + b.collisionWidth - h - g),
                (0 > c || c < f(m)) && (a.left += p + P + N))
              : 0 < l &&
                ((d = a.left - b.collisionPosition.marginLeft + p + P + N - e),
                (0 < d || f(d) < l) && (a.left += p + P + N));
          },
          top: function (a, b) {
            var c,
              e,
              d = b.within,
              g = d.offset.top + d.scrollTop,
              h = d.height,
              d = d.isWindow ? d.scrollTop : d.offset.top,
              l = a.top - b.collisionPosition.marginTop,
              m = l - d,
              l = l + b.collisionHeight - h - d,
              p =
                "top" === b.my[1]
                  ? -b.elemHeight
                  : "bottom" === b.my[1]
                  ? b.elemHeight
                  : 0,
              P =
                "top" === b.at[1]
                  ? b.targetHeight
                  : "bottom" === b.at[1]
                  ? -b.targetHeight
                  : 0,
              N = -2 * b.offset[1];
            0 > m
              ? ((e = a.top + p + P + N + b.collisionHeight - h - g),
                (0 > e || e < f(m)) && (a.top += p + P + N))
              : 0 < l &&
                ((c = a.top - b.collisionPosition.marginTop + p + P + N - d),
                (0 < c || f(c) < l) && (a.top += p + P + N));
          },
        },
        flipfit: {
          left: function () {
            b.ui.position.flip.left.apply(this, arguments);
            b.ui.position.fit.left.apply(this, arguments);
          },
          top: function () {
            b.ui.position.flip.top.apply(this, arguments);
            b.ui.position.fit.top.apply(this, arguments);
          },
        },
      };
    })(),
    b.ui.position
  );
});
(function (b) {
  "function" == typeof define && define.amd
    ? define(
        "jquery ../keycode ../position ../safe-active-element ../unique-id ../version ../widget".split(
          " "
        ),
        b
      )
    : b(jQuery);
})(function (b) {
  return b.widget("ui.menu", {
    version: "1.12.1",
    defaultElement: "<ul>",
    delay: 300,
    options: {
      icons: { submenu: "ui-icon-caret-1-e" },
      items: "> *",
      menus: "ul",
      position: { my: "left top", at: "right top" },
      role: "menu",
      blur: null,
      focus: null,
      select: null,
    },
    _create: function () {
      this.activeMenu = this.element;
      this.mouseHandled = !1;
      this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 });
      this._addClass("ui-menu", "ui-widget ui-widget-content");
      this._on({
        "mousedown .ui-menu-item": function (a) {
          a.preventDefault();
        },
        "click .ui-menu-item": function (a) {
          var c = b(a.target),
            e = b(b.ui.safeActiveElement(this.document[0]));
          !this.mouseHandled &&
            c.not(".ui-state-disabled").length &&
            (this.select(a),
            a.isPropagationStopped() || (this.mouseHandled = !0),
            c.has(".ui-menu").length
              ? this.expand(a)
              : !this.element.is(":focus") &&
                e.closest(".ui-menu").length &&
                (this.element.trigger("focus", [!0]),
                this.active &&
                  1 === this.active.parents(".ui-menu").length &&
                  clearTimeout(this.timer)));
        },
        "mouseenter .ui-menu-item": function (a) {
          if (!this.previousFilter) {
            var c = b(a.target).closest(".ui-menu-item"),
              e = b(a.currentTarget);
            c[0] === e[0] &&
              (this._removeClass(
                e.siblings().children(".ui-state-active"),
                null,
                "ui-state-active"
              ),
              this.focus(a, e));
          }
        },
        mouseleave: "collapseAll",
        "mouseleave .ui-menu": "collapseAll",
        focus: function (a, b) {
          var e = this.active || this.element.find(this.options.items).eq(0);
          b || this.focus(a, e);
        },
        blur: function (a) {
          this._delay(function () {
            !b.contains(
              this.element[0],
              b.ui.safeActiveElement(this.document[0])
            ) && this.collapseAll(a);
          });
        },
        keydown: "_keydown",
      });
      this.refresh();
      this._on(this.document, {
        click: function (a) {
          this._closeOnDocumentClick(a) && this.collapseAll(a);
          this.mouseHandled = !1;
        },
      });
    },
    _destroy: function () {
      var a = this.element
        .find(".ui-menu-item")
        .removeAttr("role aria-disabled")
        .children(".ui-menu-item-wrapper")
        .removeUniqueId()
        .removeAttr("tabIndex role aria-haspopup");
      this.element
        .removeAttr("aria-activedescendant")
        .find(".ui-menu")
        .addBack()
        .removeAttr(
          "role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex"
        )
        .removeUniqueId()
        .show();
      a.children().each(function () {
        var a = b(this);
        a.data("ui-menu-submenu-caret") && a.remove();
      });
    },
    _keydown: function (a) {
      var c,
        e,
        f,
        d = !0;
      switch (a.keyCode) {
        case b.ui.keyCode.PAGE_UP:
          this.previousPage(a);
          break;
        case b.ui.keyCode.PAGE_DOWN:
          this.nextPage(a);
          break;
        case b.ui.keyCode.HOME:
          this._move("first", "first", a);
          break;
        case b.ui.keyCode.END:
          this._move("last", "last", a);
          break;
        case b.ui.keyCode.UP:
          this.previous(a);
          break;
        case b.ui.keyCode.DOWN:
          this.next(a);
          break;
        case b.ui.keyCode.LEFT:
          this.collapse(a);
          break;
        case b.ui.keyCode.RIGHT:
          this.active &&
            !this.active.is(".ui-state-disabled") &&
            this.expand(a);
          break;
        case b.ui.keyCode.ENTER:
        case b.ui.keyCode.SPACE:
          this._activate(a);
          break;
        case b.ui.keyCode.ESCAPE:
          this.collapse(a);
          break;
        default:
          (d = !1),
            (c = this.previousFilter || ""),
            (f = !1),
            (e =
              96 <= a.keyCode && 105 >= a.keyCode
                ? (a.keyCode - 96).toString()
                : String.fromCharCode(a.keyCode)),
            clearTimeout(this.filterTimer),
            e === c ? (f = !0) : (e = c + e),
            (c = this._filterMenuItems(e)),
            (c =
              f && -1 !== c.index(this.active.next())
                ? this.active.nextAll(".ui-menu-item")
                : c),
            c.length ||
              ((e = String.fromCharCode(a.keyCode)),
              (c = this._filterMenuItems(e))),
            c.length
              ? (this.focus(a, c),
                (this.previousFilter = e),
                (this.filterTimer = this._delay(function () {
                  delete this.previousFilter;
                }, 1e3)))
              : delete this.previousFilter;
      }
      d && a.preventDefault();
    },
    _activate: function (a) {
      this.active &&
        !this.active.is(".ui-state-disabled") &&
        (this.active.children("[aria-haspopup='true']").length
          ? this.expand(a)
          : this.select(a));
    },
    refresh: function () {
      var a,
        c,
        e,
        f = this,
        d = this.options.icons.submenu;
      c = this.element.find(this.options.menus);
      this._toggleClass(
        "ui-menu-icons",
        null,
        !!this.element.find(".ui-icon").length
      );
      a = c
        .filter(":not(.ui-menu)")
        .hide()
        .attr({
          role: this.options.role,
          "aria-hidden": "true",
          "aria-expanded": "false",
        })
        .each(function () {
          var a = b(this),
            c = a.prev(),
            e = b("<span>").data("ui-menu-submenu-caret", !0);
          f._addClass(e, "ui-menu-icon", "ui-icon " + d);
          c.attr("aria-haspopup", "true").prepend(e);
          a.attr("aria-labelledby", c.attr("id"));
        });
      this._addClass(a, "ui-menu", "ui-widget ui-widget-content ui-front");
      a = c.add(this.element).find(this.options.items);
      a.not(".ui-menu-item").each(function () {
        var a = b(this);
        f._isDivider(a) &&
          f._addClass(a, "ui-menu-divider", "ui-widget-content");
      });
      c = a.not(".ui-menu-item, .ui-menu-divider");
      e = c
        .children()
        .not(".ui-menu")
        .uniqueId()
        .attr({ tabIndex: -1, role: this._itemRole() });
      this._addClass(c, "ui-menu-item")._addClass(e, "ui-menu-item-wrapper");
      a.filter(".ui-state-disabled").attr("aria-disabled", "true");
      this.active &&
        !b.contains(this.element[0], this.active[0]) &&
        this.blur();
    },
    _itemRole: function () {
      return { menu: "menuitem", listbox: "option" }[this.options.role];
    },
    _setOption: function (a, b) {
      if ("icons" === a) {
        var e = this.element.find(".ui-menu-icon");
        this._removeClass(e, null, this.options.icons.submenu)._addClass(
          e,
          null,
          b.submenu
        );
      }
      this._super(a, b);
    },
    _setOptionDisabled: function (a) {
      this._super(a);
      this.element.attr("aria-disabled", String(a));
      this._toggleClass(null, "ui-state-disabled", !!a);
    },
    focus: function (a, b) {
      var e;
      this.blur(a, a && "focus" === a.type);
      this._scrollIntoView(b);
      this.active = b.first();
      e = this.active.children(".ui-menu-item-wrapper");
      this._addClass(e, null, "ui-state-active");
      this.options.role &&
        this.element.attr("aria-activedescendant", e.attr("id"));
      e = this.active
        .parent()
        .closest(".ui-menu-item")
        .children(".ui-menu-item-wrapper");
      this._addClass(e, null, "ui-state-active");
      a && "keydown" === a.type
        ? this._close()
        : (this.timer = this._delay(function () {
            this._close();
          }, this.delay));
      e = b.children(".ui-menu");
      e.length && a && /^mouse/.test(a.type) && this._startOpening(e);
      this.activeMenu = b.parent();
      this._trigger("focus", a, { item: b });
    },
    _scrollIntoView: function (a) {
      var c, e, f, d, g, h;
      this._hasScroll() &&
        ((c = parseFloat(b.css(this.activeMenu[0], "borderTopWidth")) || 0),
        (e = parseFloat(b.css(this.activeMenu[0], "paddingTop")) || 0),
        (f = a.offset().top - this.activeMenu.offset().top - c - e),
        (d = this.activeMenu.scrollTop()),
        (g = this.activeMenu.height()),
        (h = a.outerHeight()),
        0 > f
          ? this.activeMenu.scrollTop(d + f)
          : g < f + h && this.activeMenu.scrollTop(d + f - g + h));
    },
    blur: function (a, b) {
      b || clearTimeout(this.timer);
      this.active &&
        (this._removeClass(
          this.active.children(".ui-menu-item-wrapper"),
          null,
          "ui-state-active"
        ),
        this._trigger("blur", a, { item: this.active }),
        (this.active = null));
    },
    _startOpening: function (a) {
      clearTimeout(this.timer);
      "true" === a.attr("aria-hidden") &&
        (this.timer = this._delay(function () {
          this._close();
          this._open(a);
        }, this.delay));
    },
    _open: function (a) {
      var c = b.extend({ of: this.active }, this.options.position);
      clearTimeout(this.timer);
      this.element
        .find(".ui-menu")
        .not(a.parents(".ui-menu"))
        .hide()
        .attr("aria-hidden", "true");
      a.show()
        .removeAttr("aria-hidden")
        .attr("aria-expanded", "true")
        .position(c);
    },
    collapseAll: function (a, c) {
      clearTimeout(this.timer);
      this.timer = this._delay(function () {
        var e = c
          ? this.element
          : b(a && a.target).closest(this.element.find(".ui-menu"));
        e.length || (e = this.element);
        this._close(e);
        this.blur(a);
        this._removeClass(e.find(".ui-state-active"), null, "ui-state-active");
        this.activeMenu = e;
      }, this.delay);
    },
    _close: function (a) {
      a || (a = this.active ? this.active.parent() : this.element);
      a.find(".ui-menu")
        .hide()
        .attr("aria-hidden", "true")
        .attr("aria-expanded", "false");
    },
    _closeOnDocumentClick: function (a) {
      return !b(a.target).closest(".ui-menu").length;
    },
    _isDivider: function (a) {
      return !/[^\-\u2014\u2013\s]/.test(a.text());
    },
    collapse: function (a) {
      var b =
        this.active &&
        this.active.parent().closest(".ui-menu-item", this.element);
      b && b.length && (this._close(), this.focus(a, b));
    },
    expand: function (a) {
      var b =
        this.active &&
        this.active.children(".ui-menu ").find(this.options.items).first();
      b &&
        b.length &&
        (this._open(b.parent()),
        this._delay(function () {
          this.focus(a, b);
        }));
    },
    next: function (a) {
      this._move("next", "first", a);
    },
    previous: function (a) {
      this._move("prev", "last", a);
    },
    isFirstItem: function () {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    },
    isLastItem: function () {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    },
    _move: function (a, b, e) {
      var f;
      this.active &&
        (f =
          "first" === a || "last" === a
            ? this.active["first" === a ? "prevAll" : "nextAll"](
                ".ui-menu-item"
              ).eq(-1)
            : this.active[a + "All"](".ui-menu-item").eq(0));
      (f && f.length && this.active) ||
        (f = this.activeMenu.find(this.options.items)[b]());
      this.focus(e, f);
    },
    nextPage: function (a) {
      var c, e, f;
      this.active
        ? this.isLastItem() ||
          (this._hasScroll()
            ? ((e = this.active.offset().top),
              (f = this.element.height()),
              this.active.nextAll(".ui-menu-item").each(function () {
                return (c = b(this)), 0 > c.offset().top - e - f;
              }),
              this.focus(a, c))
            : this.focus(
                a,
                this.activeMenu
                  .find(this.options.items)
                  [this.active ? "last" : "first"]()
              ))
        : this.next(a);
    },
    previousPage: function (a) {
      var c, e, f;
      this.active
        ? this.isFirstItem() ||
          (this._hasScroll()
            ? ((e = this.active.offset().top),
              (f = this.element.height()),
              this.active.prevAll(".ui-menu-item").each(function () {
                return (c = b(this)), 0 < c.offset().top - e + f;
              }),
              this.focus(a, c))
            : this.focus(a, this.activeMenu.find(this.options.items).first()))
        : this.next(a);
    },
    _hasScroll: function () {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    },
    select: function (a) {
      this.active = this.active || b(a.target).closest(".ui-menu-item");
      var c = { item: this.active };
      this.active.has(".ui-menu").length || this.collapseAll(a, !0);
      this._trigger("select", a, c);
    },
    _filterMenuItems: function (a) {
      a = a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      var c = new RegExp("^" + a, "i");
      return this.activeMenu
        .find(this.options.items)
        .filter(".ui-menu-item")
        .filter(function () {
          return c.test(
            b.trim(b(this).children(".ui-menu-item-wrapper").text())
          );
        });
    },
  });
});
(function (b) {
  "function" == typeof define && define.amd
    ? define(
        "jquery ./menu ../keycode ../position ../safe-active-element ../version ../widget".split(
          " "
        ),
        b
      )
    : b(jQuery);
})(function (b) {
  return (
    b.widget("ui.autocomplete", {
      version: "1.12.1",
      defaultElement: "<input>",
      options: {
        appendTo: null,
        autoFocus: !1,
        delay: 300,
        minLength: 1,
        position: { my: "left top", at: "left bottom", collision: "none" },
        source: null,
        change: null,
        close: null,
        focus: null,
        open: null,
        response: null,
        search: null,
        select: null,
      },
      requestIndex: 0,
      pending: 0,
      _create: function () {
        var a,
          c,
          e,
          f = this.element[0].nodeName.toLowerCase(),
          d = "textarea" === f,
          f = "input" === f;
        this.isMultiLine = d || (!f && this._isContentEditable(this.element));
        this.valueMethod = this.element[d || f ? "val" : "text"];
        this.isNewMenu = !0;
        this._addClass("ui-autocomplete-input");
        this.element.attr("autocomplete", "off");
        this._on(this.element, {
          keydown: function (d) {
            if (this.element.prop("readOnly"))
              return (a = !0), (e = !0), void (c = !0);
            c = e = a = !1;
            var f = b.ui.keyCode;
            switch (d.keyCode) {
              case f.PAGE_UP:
                a = !0;
                this._move("previousPage", d);
                break;
              case f.PAGE_DOWN:
                a = !0;
                this._move("nextPage", d);
                break;
              case f.UP:
                a = !0;
                this._keyEvent("previous", d);
                break;
              case f.DOWN:
                a = !0;
                this._keyEvent("next", d);
                break;
              case f.ENTER:
                this.menu.active &&
                  ((a = !0), d.preventDefault(), this.menu.select(d));
                break;
              case f.TAB:
                this.menu.active && this.menu.select(d);
                break;
              case f.ESCAPE:
                this.menu.element.is(":visible") &&
                  (this.isMultiLine || this._value(this.term),
                  this.close(d),
                  d.preventDefault());
                break;
              default:
                (c = !0), this._searchTimeout(d);
            }
          },
          keypress: function (d) {
            if (a)
              return (
                (a = !1),
                void (
                  (this.isMultiLine && !this.menu.element.is(":visible")) ||
                  d.preventDefault()
                )
              );
            if (!c) {
              var e = b.ui.keyCode;
              switch (d.keyCode) {
                case e.PAGE_UP:
                  this._move("previousPage", d);
                  break;
                case e.PAGE_DOWN:
                  this._move("nextPage", d);
                  break;
                case e.UP:
                  this._keyEvent("previous", d);
                  break;
                case e.DOWN:
                  this._keyEvent("next", d);
              }
            }
          },
          input: function (a) {
            if (e) return (e = !1), void a.preventDefault();
            this._searchTimeout(a);
          },
          focus: function () {
            this.selectedItem = null;
            this.previous = this._value();
          },
          blur: function (a) {
            this.cancelBlur
              ? delete this.cancelBlur
              : (clearTimeout(this.searching), this.close(a), this._change(a));
          },
        });
        this._initSource();
        this.menu = b("<ul>")
          .appendTo(this._appendTo())
          .menu({ role: null })
          .hide()
          .menu("instance");
        this._addClass(this.menu.element, "ui-autocomplete", "ui-front");
        this._on(this.menu.element, {
          mousedown: function (a) {
            a.preventDefault();
            this.cancelBlur = !0;
            this._delay(function () {
              delete this.cancelBlur;
              this.element[0] !== b.ui.safeActiveElement(this.document[0]) &&
                this.element.trigger("focus");
            });
          },
          menufocus: function (a, c) {
            var d;
            if (
              this.isNewMenu &&
              ((this.isNewMenu = !1),
              a.originalEvent && /^mouse/.test(a.originalEvent.type))
            )
              return (
                this.menu.blur(),
                void this.document.one("mousemove", function () {
                  b(a.target).trigger(a.originalEvent);
                })
              );
            d = c.item.data("ui-autocomplete-item");
            !1 !== this._trigger("focus", a, { item: d }) &&
              a.originalEvent &&
              /^key/.test(a.originalEvent.type) &&
              this._value(d.value);
            (d = c.item.attr("aria-label") || d.value) &&
              b.trim(d).length &&
              (this.liveRegion.children().hide(),
              b("<div>").text(d).appendTo(this.liveRegion));
          },
          menuselect: function (a, c) {
            var d = c.item.data("ui-autocomplete-item"),
              e = this.previous;
            this.element[0] !== b.ui.safeActiveElement(this.document[0]) &&
              (this.element.trigger("focus"),
              (this.previous = e),
              this._delay(function () {
                this.previous = e;
                this.selectedItem = d;
              }));
            !1 !== this._trigger("select", a, { item: d }) &&
              this._value(d.value);
            this.term = this._value();
            this.close(a);
            this.selectedItem = d;
          },
        });
        this.liveRegion = b("<div>", {
          role: "status",
          "aria-live": "assertive",
          "aria-relevant": "additions",
        }).appendTo(this.document[0].body);
        this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
        this._on(this.window, {
          beforeunload: function () {
            this.element.removeAttr("autocomplete");
          },
        });
      },
      _destroy: function () {
        clearTimeout(this.searching);
        this.element.removeAttr("autocomplete");
        this.menu.element.remove();
        this.liveRegion.remove();
      },
      _setOption: function (a, b) {
        this._super(a, b);
        "source" === a && this._initSource();
        "appendTo" === a && this.menu.element.appendTo(this._appendTo());
        "disabled" === a && b && this.xhr && this.xhr.abort();
      },
      _isEventTargetInWidget: function (a) {
        var c = this.menu.element[0];
        return (
          a.target === this.element[0] ||
          a.target === c ||
          b.contains(c, a.target)
        );
      },
      _closeOnClickOutside: function (a) {
        this._isEventTargetInWidget(a) || this.close();
      },
      _appendTo: function () {
        var a = this.options.appendTo;
        return (
          a &&
            (a = a.jquery || a.nodeType ? b(a) : this.document.find(a).eq(0)),
          (a && a[0]) || (a = this.element.closest(".ui-front, dialog")),
          a.length || (a = this.document[0].body),
          a
        );
      },
      _initSource: function () {
        var a,
          c,
          e = this;
        b.isArray(this.options.source)
          ? ((a = this.options.source),
            (this.source = function (c, d) {
              d(b.ui.autocomplete.filter(a, c.term));
            }))
          : "string" == typeof this.options.source
          ? ((c = this.options.source),
            (this.source = function (a, d) {
              e.xhr && e.xhr.abort();
              e.xhr = b.ajax({
                url: c,
                data: a,
                dataType: "json",
                success: function (a) {
                  d(a);
                },
                error: function () {
                  d([]);
                },
              });
            }))
          : (this.source = this.options.source);
      },
      _searchTimeout: function (a) {
        clearTimeout(this.searching);
        this.searching = this._delay(function () {
          var b = this.term === this._value(),
            e = this.menu.element.is(":visible"),
            f = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
          (b && (!b || e || f)) ||
            ((this.selectedItem = null), this.search(null, a));
        }, this.options.delay);
      },
      search: function (a, b) {
        return (
          (a = null != a ? a : this._value()),
          (this.term = this._value()),
          a.length < this.options.minLength
            ? this.close(b)
            : !1 !== this._trigger("search", b)
            ? this._search(a)
            : void 0
        );
      },
      _search: function (a) {
        this.pending++;
        this._addClass("ui-autocomplete-loading");
        this.cancelSearch = !1;
        this.source({ term: a }, this._response());
      },
      _response: function () {
        var a = ++this.requestIndex;
        return b.proxy(function (b) {
          a === this.requestIndex && this.__response(b);
          this.pending--;
          this.pending || this._removeClass("ui-autocomplete-loading");
        }, this);
      },
      __response: function (a) {
        a && (a = this._normalize(a));
        this._trigger("response", null, { content: a });
        !this.options.disabled && a && a.length && !this.cancelSearch
          ? (this._suggest(a), this._trigger("open"))
          : this._close();
      },
      close: function (a) {
        this.cancelSearch = !0;
        this._close(a);
      },
      _close: function (a) {
        this._off(this.document, "mousedown");
        this.menu.element.is(":visible") &&
          (this.menu.element.hide(),
          this.menu.blur(),
          (this.isNewMenu = !0),
          this._trigger("close", a));
      },
      _change: function (a) {
        this.previous !== this._value() &&
          this._trigger("change", a, { item: this.selectedItem });
      },
      _normalize: function (a) {
        return a.length && a[0].label && a[0].value
          ? a
          : b.map(a, function (a) {
              return "string" == typeof a
                ? { label: a, value: a }
                : b.extend({}, a, {
                    label: a.label || a.value,
                    value: a.value || a.label,
                  });
            });
      },
      _suggest: function (a) {
        var c = this.menu.element.empty();
        this._renderMenu(c, a);
        this.isNewMenu = !0;
        this.menu.refresh();
        c.show();
        this._resizeMenu();
        c.position(b.extend({ of: this.element }, this.options.position));
        this.options.autoFocus && this.menu.next();
        this._on(this.document, { mousedown: "_closeOnClickOutside" });
      },
      _resizeMenu: function () {
        var a = this.menu.element;
        a.outerWidth(
          Math.max(a.width("").outerWidth() + 1, this.element.outerWidth())
        );
      },
      _renderMenu: function (a, c) {
        var e = this;
        b.each(c, function (b, c) {
          e._renderItemData(a, c);
        });
      },
      _renderItemData: function (a, b) {
        return this._renderItem(a, b).data("ui-autocomplete-item", b);
      },
      _renderItem: function (a, c) {
        return b("<li>").append(b("<div>").text(c.label)).appendTo(a);
      },
      _move: function (a, b) {
        if (this.menu.element.is(":visible"))
          return (this.menu.isFirstItem() && /^previous/.test(a)) ||
            (this.menu.isLastItem() && /^next/.test(a))
            ? (this.isMultiLine || this._value(this.term),
              void this.menu.blur())
            : void this.menu[a](b);
        this.search(null, b);
      },
      widget: function () {
        return this.menu.element;
      },
      _value: function () {
        return this.valueMethod.apply(this.element, arguments);
      },
      _keyEvent: function (a, b) {
        (this.isMultiLine && !this.menu.element.is(":visible")) ||
          (this._move(a, b), b.preventDefault());
      },
      _isContentEditable: function (a) {
        if (!a.length) return !1;
        var b = a.prop("contentEditable");
        return "inherit" === b
          ? this._isContentEditable(a.parent())
          : "true" === b;
      },
    }),
    b.extend(b.ui.autocomplete, {
      escapeRegex: function (a) {
        return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      },
      filter: function (a, c) {
        var e = new RegExp(b.ui.autocomplete.escapeRegex(c), "i");
        return b.grep(a, function (a) {
          return e.test(a.label || a.value || a);
        });
      },
    }),
    b.widget("ui.autocomplete", b.ui.autocomplete, {
      options: {
        messages: {
          noResults: "No search results.",
          results: function (a) {
            return (
              a +
              (1 < a ? " results are" : " result is") +
              " available, use up and down arrow keys to navigate."
            );
          },
        },
      },
      __response: function (a) {
        var c;
        this._superApply(arguments);
        this.options.disabled ||
          this.cancelSearch ||
          ((c =
            a && a.length
              ? this.options.messages.results(a.length)
              : this.options.messages.noResults),
          this.liveRegion.children().hide(),
          b("<div>").text(c).appendTo(this.liveRegion));
      },
    }),
    b.ui.autocomplete
  );
});
(function (b) {
  "function" == typeof define && define.amd
    ? define(["jquery", "jquery-ui/ui/widget"], b)
    : "object" == typeof exports
    ? b(require("jquery"), require("./vendor/jquery.ui.widget"))
    : b(window.jQuery);
})(function (b) {
  function a(a) {
    var e = "dragover" === a;
    return function (f) {
      f.dataTransfer = f.originalEvent && f.originalEvent.dataTransfer;
      var d = f.dataTransfer;
      d &&
        -1 !== b.inArray("Files", d.types) &&
        !1 !== this._trigger(a, b.Event(a, { delegatedEvent: f })) &&
        (f.preventDefault(), e && (d.dropEffect = "copy"));
    };
  }
  b.support.fileInput = !(
    /(Android (1\.[0156]|2\.[01]))|(Windows Phone (OS 7|8\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1\.0|2\.[05]|3\.0))/.test(
      window.navigator.userAgent
    ) || b('<input type="file">').prop("disabled")
  );
  b.support.xhrFileUpload = !(!window.ProgressEvent || !window.FileReader);
  b.support.xhrFormDataFileUpload = !!window.FormData;
  b.support.blobSlice =
    window.Blob &&
    (Blob.prototype.slice ||
      Blob.prototype.webkitSlice ||
      Blob.prototype.mozSlice);
  b.widget("blueimp.fileupload", {
    options: {
      dropZone: b(document),
      pasteZone: void 0,
      fileInput: void 0,
      replaceFileInput: !0,
      paramName: void 0,
      singleFileUploads: !0,
      limitMultiFileUploads: void 0,
      limitMultiFileUploadSize: void 0,
      limitMultiFileUploadSizeOverhead: 512,
      sequentialUploads: !1,
      limitConcurrentUploads: void 0,
      forceIframeTransport: !1,
      redirect: void 0,
      redirectParamName: void 0,
      postMessage: void 0,
      multipart: !0,
      maxChunkSize: void 0,
      uploadedBytes: void 0,
      recalculateProgress: !0,
      progressInterval: 100,
      bitrateInterval: 500,
      autoUpload: !0,
      messages: { uploadedBytes: "Uploaded bytes exceed file size" },
      i18n: function (a, e) {
        return (
          (a = this.messages[a] || a.toString()),
          e &&
            b.each(e, function (b, d) {
              a = a.replace("{" + b + "}", d);
            }),
          a
        );
      },
      formData: function (a) {
        return a.serializeArray();
      },
      add: function (a, e) {
        if (a.isDefaultPrevented()) return !1;
        (e.autoUpload ||
          (!1 !== e.autoUpload &&
            b(this).fileupload("option", "autoUpload"))) &&
          e.process().done(function () {
            e.submit();
          });
      },
      processData: !1,
      contentType: !1,
      cache: !1,
      timeout: 0,
    },
    _specialOptions: [
      "fileInput",
      "dropZone",
      "pasteZone",
      "multipart",
      "forceIframeTransport",
    ],
    _blobSlice:
      b.support.blobSlice &&
      function () {
        return (this.slice || this.webkitSlice || this.mozSlice).apply(
          this,
          arguments
        );
      },
    _BitrateTimer: function () {
      this.timestamp = Date.now ? Date.now() : new Date().getTime();
      this.bitrate = this.loaded = 0;
      this.getBitrate = function (a, b, f) {
        var d = a - this.timestamp;
        return (
          (!this.bitrate || !f || f < d) &&
            ((this.bitrate = (1e3 / d) * (b - this.loaded) * 8),
            (this.loaded = b),
            (this.timestamp = a)),
          this.bitrate
        );
      };
    },
    _isXHRUpload: function (a) {
      return (
        !a.forceIframeTransport &&
        ((!a.multipart && b.support.xhrFileUpload) ||
          b.support.xhrFormDataFileUpload)
      );
    },
    _getFormData: function (a) {
      var e;
      return "function" === b.type(a.formData)
        ? a.formData(a.form)
        : b.isArray(a.formData)
        ? a.formData
        : "object" === b.type(a.formData)
        ? ((e = []),
          b.each(a.formData, function (a, b) {
            e.push({ name: a, value: b });
          }),
          e)
        : [];
    },
    _getTotal: function (a) {
      var e = 0;
      return (
        b.each(a, function (a, b) {
          e += b.size || 1;
        }),
        e
      );
    },
    _initProgressObject: function (a) {
      var e = { loaded: 0, total: 0, bitrate: 0 };
      a._progress ? b.extend(a._progress, e) : (a._progress = e);
    },
    _initResponseObject: function (a) {
      var b;
      if (a._response)
        for (b in a._response)
          a._response.hasOwnProperty(b) && delete a._response[b];
      else a._response = {};
    },
    _onProgress: function (a, e) {
      if (a.lengthComputable) {
        var f,
          d = Date.now ? Date.now() : new Date().getTime();
        (e._time &&
          e.progressInterval &&
          d - e._time < e.progressInterval &&
          a.loaded !== a.total) ||
          ((e._time = d),
          (f =
            Math.floor(
              (a.loaded / a.total) * (e.chunkSize || e._progress.total)
            ) + (e.uploadedBytes || 0)),
          (this._progress.loaded += f - e._progress.loaded),
          (this._progress.bitrate = this._bitrateTimer.getBitrate(
            d,
            this._progress.loaded,
            e.bitrateInterval
          )),
          (e._progress.loaded = e.loaded = f),
          (e._progress.bitrate = e.bitrate =
            e._bitrateTimer.getBitrate(d, f, e.bitrateInterval)),
          this._trigger(
            "progress",
            b.Event("progress", { delegatedEvent: a }),
            e
          ),
          this._trigger(
            "progressall",
            b.Event("progressall", { delegatedEvent: a }),
            this._progress
          ));
      }
    },
    _initProgressListener: function (a) {
      var e = this,
        f = a.xhr ? a.xhr() : b.ajaxSettings.xhr();
      f.upload &&
        (b(f.upload).bind("progress", function (b) {
          var f = b.originalEvent;
          b.lengthComputable = f.lengthComputable;
          b.loaded = f.loaded;
          b.total = f.total;
          e._onProgress(b, a);
        }),
        (a.xhr = function () {
          return f;
        }));
    },
    _isInstanceOf: function (a, b) {
      return Object.prototype.toString.call(b) === "[object " + a + "]";
    },
    _initXHRData: function (a) {
      var e,
        f = this,
        d = a.files[0],
        g = a.multipart || !b.support.xhrFileUpload,
        h = "array" === b.type(a.paramName) ? a.paramName[0] : a.paramName;
      a.headers = b.extend({}, a.headers);
      a.contentRange && (a.headers["Content-Range"] = a.contentRange);
      (g && !a.blob && this._isInstanceOf("File", d)) ||
        (a.headers["Content-Disposition"] =
          'attachment; filename="' + encodeURI(d.name) + '"');
      g
        ? b.support.xhrFormDataFileUpload &&
          (a.postMessage
            ? ((e = this._getFormData(a)),
              a.blob
                ? e.push({ name: h, value: a.blob })
                : b.each(a.files, function (d, f) {
                    e.push({
                      name:
                        ("array" === b.type(a.paramName) && a.paramName[d]) ||
                        h,
                      value: f,
                    });
                  }))
            : (f._isInstanceOf("FormData", a.formData)
                ? (e = a.formData)
                : ((e = new FormData()),
                  b.each(this._getFormData(a), function (a, b) {
                    e.append(b.name, b.value);
                  })),
              a.blob
                ? e.append(h, a.blob, d.name)
                : b.each(a.files, function (d, g) {
                    (f._isInstanceOf("File", g) ||
                      f._isInstanceOf("Blob", g)) &&
                      e.append(
                        ("array" === b.type(a.paramName) && a.paramName[d]) ||
                          h,
                        g,
                        g.uploadName || g.name
                      );
                  })),
          (a.data = e))
        : ((a.contentType = d.type || "application/octet-stream"),
          (a.data = a.blob || d));
      a.blob = null;
    },
    _initIframeSettings: function (a) {
      var e = b("<a></a>").prop("href", a.url).prop("host");
      a.dataType = "iframe " + (a.dataType || "");
      a.formData = this._getFormData(a);
      a.redirect &&
        e &&
        e !== location.host &&
        a.formData.push({
          name: a.redirectParamName || "redirect",
          value: a.redirect,
        });
    },
    _initDataSettings: function (a) {
      this._isXHRUpload(a)
        ? (this._chunkedUpload(a, !0) ||
            (a.data || this._initXHRData(a), this._initProgressListener(a)),
          a.postMessage && (a.dataType = "postmessage " + (a.dataType || "")))
        : this._initIframeSettings(a);
    },
    _getParamName: function (a) {
      var e = b(a.fileInput),
        f = a.paramName;
      return (
        f
          ? b.isArray(f) || (f = [f])
          : ((f = []),
            e.each(function () {
              for (
                var a = b(this),
                  c = a.prop("name") || "files[]",
                  a = (a.prop("files") || [1]).length;
                a;

              )
                f.push(c), --a;
            }),
            f.length || (f = [e.prop("name") || "files[]"])),
        f
      );
    },
    _initFormSettings: function (a) {
      (a.form && a.form.length) ||
        ((a.form = b(a.fileInput.prop("form"))),
        a.form.length || (a.form = b(this.options.fileInput.prop("form"))));
      a.paramName = this._getParamName(a);
      a.url || (a.url = a.form.prop("action") || location.href);
      a.type = (
        a.type ||
        ("string" === b.type(a.form.prop("method")) && a.form.prop("method")) ||
        ""
      ).toUpperCase();
      "POST" !== a.type &&
        "PUT" !== a.type &&
        "PATCH" !== a.type &&
        (a.type = "POST");
      a.formAcceptCharset ||
        (a.formAcceptCharset = a.form.attr("accept-charset"));
    },
    _getAJAXSettings: function (a) {
      a = b.extend({}, this.options, a);
      return this._initFormSettings(a), this._initDataSettings(a), a;
    },
    _getDeferredState: function (a) {
      return a.state
        ? a.state()
        : a.isResolved()
        ? "resolved"
        : a.isRejected()
        ? "rejected"
        : "pending";
    },
    _enhancePromise: function (a) {
      return (
        (a.success = a.done), (a.error = a.fail), (a.complete = a.always), a
      );
    },
    _getXHRPromise: function (a, e, f) {
      var d = b.Deferred(),
        g = d.promise();
      return (
        (e = e || this.options.context || g),
        !0 === a ? d.resolveWith(e, f) : !1 === a && d.rejectWith(e, f),
        (g.abort = d.promise),
        this._enhancePromise(g)
      );
    },
    _addConvenienceMethods: function (a, e) {
      var f = this,
        d = function (a) {
          return b.Deferred().resolveWith(f, a).promise();
        };
      e.process = function (a, c) {
        return (
          (a || c) &&
            (e._processQueue = this._processQueue =
              (this._processQueue || d([this]))
                .then(function () {
                  return e.errorThrown
                    ? b.Deferred().rejectWith(f, [e]).promise()
                    : d(arguments);
                })
                .then(a, c)),
          this._processQueue || d([this])
        );
      };
      e.submit = function () {
        return (
          "pending" !== this.state() &&
            (e.jqXHR = this.jqXHR =
              !1 !==
                f._trigger(
                  "submit",
                  b.Event("submit", { delegatedEvent: a }),
                  this
                ) && f._onSend(a, this)),
          this.jqXHR || f._getXHRPromise()
        );
      };
      e.abort = function () {
        return this.jqXHR
          ? this.jqXHR.abort()
          : ((this.errorThrown = "abort"),
            f._trigger("fail", null, this),
            f._getXHRPromise(!1));
      };
      e.state = function () {
        return this.jqXHR
          ? f._getDeferredState(this.jqXHR)
          : this._processQueue
          ? f._getDeferredState(this._processQueue)
          : void 0;
      };
      e.processing = function () {
        return (
          !this.jqXHR &&
          this._processQueue &&
          "pending" === f._getDeferredState(this._processQueue)
        );
      };
      e.progress = function () {
        return this._progress;
      };
      e.response = function () {
        return this._response;
      };
    },
    _getUploadedBytes: function (a) {
      return (
        (a =
          (a = (a = a.getResponseHeader("Range")) && a.split("-")) &&
          1 < a.length &&
          parseInt(a[1], 10)) && a + 1
      );
    },
    _chunkedUpload: function (a, e) {
      a.uploadedBytes = a.uploadedBytes || 0;
      var f,
        d,
        g = this,
        h = a.files[0],
        l = h.size,
        m = a.uploadedBytes,
        p = a.maxChunkSize || l,
        n = this._blobSlice,
        r = b.Deferred(),
        t = r.promise();
      return (
        !(
          !(
            this._isXHRUpload(a) &&
            n &&
            (m || ("function" === b.type(p) ? p(a) : p) < l)
          ) || a.data
        ) &&
        (!!e ||
          (l <= m
            ? ((h.error = a.i18n("uploadedBytes")),
              this._getXHRPromise(!1, a.context, [null, "error", h.error]))
            : ((d = function () {
                var e = b.extend({}, a),
                  u = e._progress.loaded;
                e.blob = n.call(
                  h,
                  m,
                  m + ("function" === b.type(p) ? p(e) : p),
                  h.type
                );
                e.chunkSize = e.blob.size;
                e.contentRange =
                  "bytes " + m + "-" + (m + e.chunkSize - 1) + "/" + l;
                g._initXHRData(e);
                g._initProgressListener(e);
                f = (
                  (!1 !== g._trigger("chunksend", null, e) && b.ajax(e)) ||
                  g._getXHRPromise(!1, e.context)
                )
                  .done(function (f, h, n) {
                    m = g._getUploadedBytes(n) || m + e.chunkSize;
                    u + e.chunkSize - e._progress.loaded &&
                      g._onProgress(
                        b.Event("progress", {
                          lengthComputable: !0,
                          loaded: m - e.uploadedBytes,
                          total: m - e.uploadedBytes,
                        }),
                        e
                      );
                    a.uploadedBytes = e.uploadedBytes = m;
                    e.result = f;
                    e.textStatus = h;
                    e.jqXHR = n;
                    g._trigger("chunkdone", null, e);
                    g._trigger("chunkalways", null, e);
                    m < l ? d() : r.resolveWith(e.context, [f, h, n]);
                  })
                  .fail(function (a, b, c) {
                    e.jqXHR = a;
                    e.textStatus = b;
                    e.errorThrown = c;
                    g._trigger("chunkfail", null, e);
                    g._trigger("chunkalways", null, e);
                    r.rejectWith(e.context, [a, b, c]);
                  });
              }),
              this._enhancePromise(t),
              (t.abort = function () {
                return f.abort();
              }),
              d(),
              t)))
      );
    },
    _beforeSend: function (a, b) {
      0 === this._active &&
        (this._trigger("start"),
        (this._bitrateTimer = new this._BitrateTimer()),
        (this._progress.loaded = this._progress.total = 0),
        (this._progress.bitrate = 0));
      this._initResponseObject(b);
      this._initProgressObject(b);
      b._progress.loaded = b.loaded = b.uploadedBytes || 0;
      b._progress.total = b.total = this._getTotal(b.files) || 1;
      b._progress.bitrate = b.bitrate = 0;
      this._active += 1;
      this._progress.loaded += b.loaded;
      this._progress.total += b.total;
    },
    _onDone: function (a, e, f, d) {
      var g = d._progress.total,
        h = d._response;
      d._progress.loaded < g &&
        this._onProgress(
          b.Event("progress", { lengthComputable: !0, loaded: g, total: g }),
          d
        );
      h.result = d.result = a;
      h.textStatus = d.textStatus = e;
      h.jqXHR = d.jqXHR = f;
      this._trigger("done", null, d);
    },
    _onFail: function (a, b, f, d) {
      var g = d._response;
      d.recalculateProgress &&
        ((this._progress.loaded -= d._progress.loaded),
        (this._progress.total -= d._progress.total));
      g.jqXHR = d.jqXHR = a;
      g.textStatus = d.textStatus = b;
      g.errorThrown = d.errorThrown = f;
      this._trigger("fail", null, d);
    },
    _onAlways: function (a, b, f, d) {
      this._trigger("always", null, d);
    },
    _onSend: function (a, e) {
      e.submit || this._addConvenienceMethods(a, e);
      var f,
        d,
        g,
        h,
        l = this,
        m = l._getAJAXSettings(e),
        p = function () {
          return (
            (l._sending += 1),
            (m._bitrateTimer = new l._BitrateTimer()),
            (f =
              f ||
              (
                ((d ||
                  !1 ===
                    l._trigger(
                      "send",
                      b.Event("send", { delegatedEvent: a }),
                      m
                    )) &&
                  l._getXHRPromise(!1, m.context, d)) ||
                l._chunkedUpload(m) ||
                b.ajax(m)
              )
                .done(function (a, b, c) {
                  l._onDone(a, b, c, m);
                })
                .fail(function (a, b, c) {
                  l._onFail(a, b, c, m);
                })
                .always(function (a, b, c) {
                  if (
                    (l._onAlways(a, b, c, m),
                    --l._sending,
                    --l._active,
                    m.limitConcurrentUploads &&
                      m.limitConcurrentUploads > l._sending)
                  )
                    for (a = l._slots.shift(); a; ) {
                      if ("pending" === l._getDeferredState(a)) {
                        a.resolve();
                        break;
                      }
                      a = l._slots.shift();
                    }
                  0 === l._active && l._trigger("stop");
                })),
            f
          );
        };
      return (
        this._beforeSend(a, m),
        this.options.sequentialUploads ||
        (this.options.limitConcurrentUploads &&
          this.options.limitConcurrentUploads <= this._sending)
          ? ((h =
              1 < this.options.limitConcurrentUploads
                ? ((g = b.Deferred()), this._slots.push(g), g.then(p))
                : ((this._sequence = this._sequence.then(p, p)),
                  this._sequence)),
            (h.abort = function () {
              return (
                (d = [void 0, "abort", "abort"]),
                f ? f.abort() : (g && g.rejectWith(m.context, d), p())
              );
            }),
            this._enhancePromise(h))
          : p()
      );
    },
    _onAdd: function (a, e) {
      var f,
        d,
        g,
        h,
        l = this,
        m = !0;
      h = b.extend({}, this.options, e);
      var p = e.files,
        n = p.length,
        r = h.limitMultiFileUploads,
        t = h.limitMultiFileUploadSize,
        A = h.limitMultiFileUploadSizeOverhead,
        u = 0,
        y = this._getParamName(h),
        x = 0;
      if (!n) return !1;
      if (
        (t && void 0 === p[0].size && (t = void 0),
        (h.singleFileUploads || r || t) && this._isXHRUpload(h))
      )
        if (h.singleFileUploads || t || !r)
          if (!h.singleFileUploads && t)
            for (g = [], f = [], h = 0; h < n; h += 1)
              (u += p[h].size + A),
                (h + 1 === n ||
                  u + p[h + 1].size + A > t ||
                  (r && r <= h + 1 - x)) &&
                  (g.push(p.slice(x, h + 1)),
                  (d = y.slice(x, h + 1)),
                  d.length || (d = y),
                  f.push(d),
                  (x = h + 1),
                  (u = 0));
          else f = y;
        else
          for (g = [], f = [], h = 0; h < n; h += r)
            g.push(p.slice(h, h + r)),
              (d = y.slice(h, h + r)),
              d.length || (d = y),
              f.push(d);
      else (g = [p]), (f = [y]);
      return (
        (e.originalFiles = p),
        b.each(g || p, function (d, h) {
          var n = b.extend({}, e);
          return (
            (n.files = g ? h : [h]),
            (n.paramName = f[d]),
            l._initResponseObject(n),
            l._initProgressObject(n),
            l._addConvenienceMethods(a, n),
            (m = l._trigger("add", b.Event("add", { delegatedEvent: a }), n)),
            m
          );
        }),
        m
      );
    },
    _replaceFileInput: function (a) {
      var e = a.fileInput,
        f = e.clone(!0),
        d = e.is(document.activeElement);
      a.fileInputClone = f;
      b("<form></form>").append(f)[0].reset();
      e.after(f).detach();
      d && f.focus();
      b.cleanData(e.unbind("remove"));
      this.options.fileInput = this.options.fileInput.map(function (a, b) {
        return b === e[0] ? f[0] : b;
      });
      e[0] === this.element[0] && (this.element = f);
    },
    _handleFileTreeEntry: function (a, e) {
      var f,
        d = this,
        g = b.Deferred(),
        h = [],
        l = function (b) {
          b && !b.entry && (b.entry = a);
          g.resolve([b]);
        },
        m = function () {
          f.readEntries(function (b) {
            var f;
            b.length
              ? ((h = h.concat(b)), m())
              : ((f = h),
                d
                  ._handleFileTreeEntries(f, e + a.name + "/")
                  .done(function (a) {
                    g.resolve(a);
                  })
                  .fail(l));
          }, l);
        };
      return (
        (e = e || ""),
        a.isFile
          ? a._file
            ? ((a._file.relativePath = e), g.resolve(a._file))
            : a.file(function (a) {
                a.relativePath = e;
                g.resolve(a);
              }, l)
          : a.isDirectory
          ? ((f = a.createReader()), m())
          : g.resolve([]),
        g.promise()
      );
    },
    _handleFileTreeEntries: function (a, e) {
      var f = this;
      return b.when
        .apply(
          b,
          b.map(a, function (a) {
            return f._handleFileTreeEntry(a, e);
          })
        )
        .then(function () {
          return Array.prototype.concat.apply([], arguments);
        });
    },
    _getDroppedFiles: function (a) {
      a = a || {};
      var e = a.items;
      return e && e.length && (e[0].webkitGetAsEntry || e[0].getAsEntry)
        ? this._handleFileTreeEntries(
            b.map(e, function (a) {
              var b;
              return a.webkitGetAsEntry
                ? ((b = a.webkitGetAsEntry()),
                  b && (b._file = a.getAsFile()),
                  b)
                : a.getAsEntry();
            })
          )
        : b.Deferred().resolve(b.makeArray(a.files)).promise();
    },
    _getSingleFileInputFiles: function (a) {
      a = b(a);
      var e,
        f,
        d = a.prop("webkitEntries") || a.prop("entries");
      if (d && d.length) return this._handleFileTreeEntries(d);
      if (((e = b.makeArray(a.prop("files"))), e.length))
        void 0 === e[0].name &&
          e[0].fileName &&
          b.each(e, function (a, b) {
            b.name = b.fileName;
            b.size = b.fileSize;
          });
      else {
        if (((f = a.prop("value")), !f))
          return b.Deferred().resolve([]).promise();
        e = [{ name: f.replace(/^.*\\/, "") }];
      }
      return b.Deferred().resolve(e).promise();
    },
    _getFileInputFiles: function (a) {
      return a instanceof b && 1 !== a.length
        ? b.when
            .apply(b, b.map(a, this._getSingleFileInputFiles))
            .then(function () {
              return Array.prototype.concat.apply([], arguments);
            })
        : this._getSingleFileInputFiles(a);
    },
    _onChange: function (a) {
      var e = this,
        f = { fileInput: b(a.target), form: b(a.target.form) };
      this._getFileInputFiles(f.fileInput).always(function (d) {
        f.files = d;
        e.options.replaceFileInput && e._replaceFileInput(f);
        !1 !==
          e._trigger("change", b.Event("change", { delegatedEvent: a }), f) &&
          e._onAdd(a, f);
      });
    },
    _onPaste: function (a) {
      var e =
          a.originalEvent &&
          a.originalEvent.clipboardData &&
          a.originalEvent.clipboardData.items,
        f = { files: [] };
      e &&
        e.length &&
        (b.each(e, function (a, b) {
          var c = b.getAsFile && b.getAsFile();
          c && f.files.push(c);
        }),
        !1 !==
          this._trigger("paste", b.Event("paste", { delegatedEvent: a }), f) &&
          this._onAdd(a, f));
    },
    _onDrop: function (a) {
      a.dataTransfer = a.originalEvent && a.originalEvent.dataTransfer;
      var e = this,
        f = a.dataTransfer,
        d = {};
      f &&
        f.files &&
        f.files.length &&
        (a.preventDefault(),
        this._getDroppedFiles(f).always(function (f) {
          d.files = f;
          !1 !==
            e._trigger("drop", b.Event("drop", { delegatedEvent: a }), d) &&
            e._onAdd(a, d);
        }));
    },
    _onDragOver: a("dragover"),
    _onDragEnter: a("dragenter"),
    _onDragLeave: a("dragleave"),
    _initEventHandlers: function () {
      this._isXHRUpload(this.options) &&
        (this._on(this.options.dropZone, {
          dragover: this._onDragOver,
          drop: this._onDrop,
          dragenter: this._onDragEnter,
          dragleave: this._onDragLeave,
        }),
        this._on(this.options.pasteZone, { paste: this._onPaste }));
      b.support.fileInput &&
        this._on(this.options.fileInput, { change: this._onChange });
    },
    _destroyEventHandlers: function () {
      this._off(this.options.dropZone, "dragenter dragleave dragover drop");
      this._off(this.options.pasteZone, "paste");
      this._off(this.options.fileInput, "change");
    },
    _destroy: function () {
      this._destroyEventHandlers();
    },
    _setOption: function (a, e) {
      var f = -1 !== b.inArray(a, this._specialOptions);
      f && this._destroyEventHandlers();
      this._super(a, e);
      f && (this._initSpecialOptions(), this._initEventHandlers());
    },
    _initSpecialOptions: function () {
      var a = this.options;
      void 0 === a.fileInput
        ? (a.fileInput = this.element.is('input[type="file"]')
            ? this.element
            : this.element.find('input[type="file"]'))
        : a.fileInput instanceof b || (a.fileInput = b(a.fileInput));
      a.dropZone instanceof b || (a.dropZone = b(a.dropZone));
      a.pasteZone instanceof b || (a.pasteZone = b(a.pasteZone));
    },
    _getRegExp: function (a) {
      a = a.split("/");
      var b = a.pop();
      return a.shift(), new RegExp(a.join("/"), b);
    },
    _isRegExpOption: function (a, e) {
      return (
        "url" !== a && "string" === b.type(e) && /^\/.*\/[igm]{0,3}$/.test(e)
      );
    },
    _initDataAttributes: function () {
      var a = this,
        e = this.options,
        f = this.element.data();
      b.each(this.element[0].attributes, function (b, g) {
        var h,
          l = g.name.toLowerCase();
        /^data-/.test(l) &&
          ((l = l.slice(5).replace(/-[a-z]/g, function (a) {
            return a.charAt(1).toUpperCase();
          })),
          (h = f[l]),
          a._isRegExpOption(l, h) && (h = a._getRegExp(h)),
          (e[l] = h));
      });
    },
    _create: function () {
      this._initDataAttributes();
      this._initSpecialOptions();
      this._slots = [];
      this._sequence = this._getXHRPromise(!0);
      this._sending = this._active = 0;
      this._initProgressObject(this);
      this._initEventHandlers();
    },
    active: function () {
      return this._active;
    },
    progress: function () {
      return this._progress;
    },
    add: function (a) {
      var e = this;
      a &&
        !this.options.disabled &&
        (a.fileInput && !a.files
          ? this._getFileInputFiles(a.fileInput).always(function (b) {
              a.files = b;
              e._onAdd(null, a);
            })
          : ((a.files = b.makeArray(a.files)), this._onAdd(null, a)));
    },
    send: function (a) {
      if (a && !this.options.disabled) {
        if (a.fileInput && !a.files) {
          var e,
            f,
            d = this,
            g = b.Deferred(),
            h = g.promise();
          return (
            (h.abort = function () {
              return (
                (f = !0), e ? e.abort() : (g.reject(null, "abort", "abort"), h)
              );
            }),
            this._getFileInputFiles(a.fileInput).always(function (b) {
              f ||
                (b.length
                  ? ((a.files = b),
                    (e = d._onSend(null, a)),
                    e.then(
                      function (a, b, c) {
                        g.resolve(a, b, c);
                      },
                      function (a, b, c) {
                        g.reject(a, b, c);
                      }
                    ))
                  : g.reject());
            }),
            this._enhancePromise(h)
          );
        }
        if (((a.files = b.makeArray(a.files)), a.files.length))
          return this._onSend(null, a);
      }
      return this._getXHRPromise(!1, a && a.context);
    },
  });
});
(function (b, a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : "object" == typeof exports
    ? (module.exports = a(require("jquery")))
    : (b.jquery_dotdotdot_js = a(b.jQuery));
})(this, function (b) {
  return (
    (function (a) {
      function b() {
        g = a(window);
        e = {};
        f = {};
        d = {};
        a.each([e, f, d], function (a, b) {
          b.add = function (a) {
            for (var c = 0, e = (a = a.split(" ")).length; c < e; c++)
              b[a[c]] = b.ddd(a[c]);
          };
        });
        e.ddd = function (a) {
          return "ddd-" + a;
        };
        e.add("truncated keep");
        f.ddd = function (a) {
          return "ddd-" + a;
        };
        d.ddd = function (a) {
          return a + ".ddd";
        };
        d.add("resize");
        b = function () {};
      }
      var e, f, d, g;
      (a.dotdotdot && "3.2.3" < a.dotdotdot.version) ||
        ((a.dotdotdot = function (a, b) {
          this.$dot = a;
          this.api = "getInstance truncate restore destroy watch unwatch".split(
            " "
          );
          this.opts = b;
          var c = this.$dot.data("dotdotdot");
          return (
            c && c.destroy(),
            this.init(),
            this.truncate(),
            this.opts.watch && this.watch(),
            this
          );
        }),
        (a.dotdotdot.version = "3.2.3"),
        (a.dotdotdot.uniqueId = 0),
        (a.dotdotdot.defaults = {
          ellipsis: "\u2026 ",
          callback: function (a) {},
          truncate: "word",
          tolerance: 0,
          keep: null,
          watch: "window",
          height: null,
        }),
        (a.dotdotdot.prototype = {
          init: function () {
            this.watchInterval = this.watchTimeout = null;
            this.uniqueId = a.dotdotdot.uniqueId++;
            this.originalStyle = this.$dot.attr("style") || "";
            this.originalContent = this._getOriginalContent();
            "break-word" !== this.$dot.css("word-wrap") &&
              this.$dot.css("word-wrap", "break-word");
            "nowrap" === this.$dot.css("white-space") &&
              this.$dot.css("white-space", "normal");
            null === this.opts.height &&
              (this.opts.height = this._getMaxHeight());
            "string" == typeof this.opts.ellipsis &&
              (this.opts.ellipsis = document.createTextNode(
                this.opts.ellipsis
              ));
          },
          getInstance: function () {
            return this;
          },
          truncate: function () {
            this.$inner = this.$dot.wrapInner("<div />").children().css({
              display: "block",
              height: "auto",
              width: "auto",
              border: "none",
              padding: 0,
              margin: 0,
            });
            this.$inner.empty().append(this.originalContent.clone(!0));
            this.maxHeight = this._getMaxHeight();
            var a = !1;
            return (
              this._fits() || ((a = !0), this._truncateToNode(this.$inner[0])),
              this.$dot[a ? "addClass" : "removeClass"](e.truncated),
              this.$inner.replaceWith(this.$inner.contents()),
              (this.$inner = null),
              this.opts.callback.call(this.$dot[0], a),
              a
            );
          },
          restore: function () {
            this.unwatch();
            this.$dot
              .empty()
              .append(this.originalContent)
              .attr("style", this.originalStyle)
              .removeClass(e.truncated);
          },
          destroy: function () {
            this.restore();
            this.$dot.data("dotdotdot", null);
          },
          watch: function () {
            var a = this;
            this.unwatch();
            var b = {};
            "window" == this.opts.watch
              ? g.on(d.resize + a.uniqueId, function (c) {
                  a.watchTimeout && clearTimeout(a.watchTimeout);
                  a.watchTimeout = setTimeout(function () {
                    b = a._watchSizes(b, g, "width", "height");
                  }, 100);
                })
              : (this.watchInterval = setInterval(function () {
                  b = a._watchSizes(b, a.$dot, "innerWidth", "innerHeight");
                }, 500));
          },
          unwatch: function () {
            g.off(d.resize + this.uniqueId);
            this.watchInterval && clearInterval(this.watchInterval);
            this.watchTimeout && clearTimeout(this.watchTimeout);
          },
          _api: function () {
            var b = this,
              c = {};
            return (
              a.each(this.api, function (a) {
                var e = this;
                c[e] = function () {
                  var a = b[e].apply(b, arguments);
                  return void 0 === a ? c : a;
                };
              }),
              c
            );
          },
          _truncateToNode: function (b) {
            var c = [],
              d = [];
            if (
              (a(b)
                .contents()
                .each(function () {
                  var b = a(this);
                  if (!b.hasClass(e.keep)) {
                    var f = document.createComment("");
                    b.replaceWith(f);
                    d.push(this);
                    c.push(f);
                  }
                }),
              d.length)
            ) {
              for (b = 0; b < d.length; b++) {
                a(c[b]).replaceWith(d[b]);
                a(d[b]).append(this.opts.ellipsis);
                var f = this._fits();
                if ((a(this.opts.ellipsis, d[b]).remove(), !f)) {
                  if ("node" == this.opts.truncate && 1 < b)
                    return void a(d[b - 2]).remove();
                  break;
                }
              }
              for (f = b; f < c.length; f++) a(c[f]).remove();
              f = d[Math.max(0, Math.min(b, d.length - 1))];
              if (1 == f.nodeType) {
                var g = a("<" + f.nodeName + " />");
                g.append(this.opts.ellipsis);
                a(f).replaceWith(g);
                this._fits()
                  ? g.replaceWith(f)
                  : (g.remove(), (f = d[Math.max(0, b - 1)]));
              }
              1 == f.nodeType
                ? this._truncateToNode(f)
                : this._truncateToWord(f);
            }
          },
          _truncateToWord: function (a) {
            for (
              var b = this.__getTextContent(a),
                c = -1 !== b.indexOf(" ") ? " " : "\u3000",
                b = b.split(c),
                d = "",
                e = b.length;
              0 <= e;
              e--
            )
              if (
                ((d = b.slice(0, e).join(c)),
                this.__setTextContent(a, this._addEllipsis(d)),
                this._fits())
              ) {
                "letter" == this.opts.truncate &&
                  (this.__setTextContent(a, b.slice(0, e + 1).join(c)),
                  this._truncateToLetter(a));
                break;
              }
          },
          _truncateToLetter: function (a) {
            for (
              var b = this.__getTextContent(a).split(""), c = "", d = b.length;
              0 <= d &&
              (!(c = b.slice(0, d).join("")).length ||
                (this.__setTextContent(a, this._addEllipsis(c)),
                !this._fits()));
              d--
            );
          },
          _fits: function () {
            return (
              this.$inner.innerHeight() <= this.maxHeight + this.opts.tolerance
            );
          },
          _addEllipsis: function (b) {
            for (
              var c = " \u3000,;.!?".split("");
              -1 < a.inArray(b.slice(-1), c);

            )
              b = b.slice(0, -1);
            return b + this.__getTextContent(this.opts.ellipsis);
          },
          _getOriginalContent: function () {
            var b = this;
            return (
              this.$dot.find("script, style").addClass(e.keep),
              this.opts.keep && this.$dot.find(this.opts.keep).addClass(e.keep),
              this.$dot
                .find("*")
                .not("." + e.keep)
                .add(this.$dot)
                .contents()
                .each(function () {
                  var c = a(this);
                  if (3 == this.nodeType) {
                    if (
                      "" == a.trim(b.__getTextContent(this)) &&
                      (c
                        .parent()
                        .is(
                          "table, thead, tbody, tfoot, tr, dl, ul, ol, video"
                        ) ||
                        c.prev().is("div, p, table, td, td, dt, dd, li") ||
                        c.next().is("div, p, table, td, td, dt, dd, li") ||
                        !c.prev().length ||
                        !c.next().length)
                    )
                      return void c.remove();
                  } else 8 == this.nodeType && c.remove();
                }),
              this.$dot.contents()
            );
          },
          _getMaxHeight: function () {
            if ("number" == typeof this.opts.height) return this.opts.height;
            for (
              var a = ["maxHeight", "height"], b = 0, c = 0;
              c < a.length;
              c++
            )
              if (
                "px" ==
                (b = window.getComputedStyle(this.$dot[0])[a[c]]).slice(-2)
              ) {
                b = parseFloat(b);
                break;
              }
            switch (((a = []), this.$dot.css("boxSizing"))) {
              case "border-box":
                a.push("borderTopWidth"), a.push("borderBottomWidth");
              case "padding-box":
                a.push("paddingTop"), a.push("paddingBottom");
            }
            for (c = 0; c < a.length; c++) {
              var d = window.getComputedStyle(this.$dot[0])[a[c]];
              "px" == d.slice(-2) && (b -= parseFloat(d));
            }
            return Math.max(b, 0);
          },
          _watchSizes: function (a, b, c, d) {
            return this.$dot.is(":visible")
              ? ((b = { width: b[c](), height: b[d]() }),
                (a.width == b.width && a.height == b.height) || this.truncate(),
                b)
              : a;
          },
          __getTextContent: function (a) {
            for (
              var b = ["nodeValue", "textContent", "innerText"], c = 0;
              c < b.length;
              c++
            )
              if ("string" == typeof a[b[c]]) return a[b[c]];
            return "";
          },
          __setTextContent: function (a, b) {
            for (
              var c = ["nodeValue", "textContent", "innerText"], d = 0;
              d < c.length;
              d++
            )
              a[c[d]] = b;
          },
        }),
        (a.fn.dotdotdot = function (d) {
          return (
            b(),
            (d = a.extend(!0, {}, a.dotdotdot.defaults, d)),
            this.each(function () {
              a(this).data("dotdotdot", new a.dotdotdot(a(this), d)._api());
            })
          );
        }));
    })(b),
    !0
  );
});
(function (b, a) {
  "function" == typeof define && define.amd
    ? define([], a)
    : "object" == typeof exports
    ? (module.exports = a())
    : (b.Tether = a());
})(this, function () {
  function b(a, b) {
    if (!(a instanceof b))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(b) {
    var c = b.getBoundingClientRect(),
      d = {},
      e;
    for (e in c) d[e] = c[e];
    b.ownerDocument !== document &&
      (b = b.ownerDocument.defaultView.frameElement) &&
      ((b = a(b)),
      (d.top += b.top),
      (d.bottom += b.top),
      (d.left += b.left),
      (d.right += b.left));
    return d;
  }
  function c(a) {
    var b = (getComputedStyle(a) || {}).position,
      c = [];
    if ("fixed" === b) return [a];
    for (var d = a; (d = d.parentNode) && d && 1 === d.nodeType; ) {
      var e = void 0;
      try {
        e = getComputedStyle(d);
      } catch (f) {}
      if (null == e) return c.push(d), c;
      var g = e;
      /(auto|scroll|overlay)/.test(g.overflow + g.overflowY + g.overflowX) &&
        ("absolute" !== b ||
          0 <= ["relative", "absolute", "fixed"].indexOf(e.position)) &&
        c.push(d);
    }
    return (
      c.push(a.ownerDocument.body),
      a.ownerDocument !== document && c.push(a.ownerDocument.defaultView),
      c
    );
  }
  function e() {
    F && document.body.removeChild(F);
    F = null;
  }
  function f(b) {
    var c = void 0;
    b === document
      ? ((c = document), (b = document.documentElement))
      : (c = b.ownerDocument);
    var d = c.documentElement;
    b = a(b);
    var e = ka();
    return (
      (b.top -= e.top),
      (b.left -= e.left),
      void 0 === b.width &&
        (b.width = document.body.scrollWidth - b.left - b.right),
      void 0 === b.height &&
        (b.height = document.body.scrollHeight - b.top - b.bottom),
      (b.top -= d.clientTop),
      (b.left -= d.clientLeft),
      (b.right = c.body.clientWidth - b.width - b.left),
      (b.bottom = c.body.clientHeight - b.height - b.top),
      b
    );
  }
  function d(a) {
    return a.offsetParent || document.documentElement;
  }
  function g() {
    if (S) return S;
    var a = document.createElement("div");
    a.style.width = "100%";
    a.style.height = "200px";
    var b = document.createElement("div");
    h(b.style, {
      position: "absolute",
      top: 0,
      left: 0,
      pointerEvents: "none",
      visibility: "hidden",
      width: "200px",
      height: "150px",
      overflow: "hidden",
    });
    b.appendChild(a);
    document.body.appendChild(b);
    var c = a.offsetWidth;
    b.style.overflow = "scroll";
    a = a.offsetWidth;
    c === a && (a = b.clientWidth);
    document.body.removeChild(b);
    b = c - a;
    return (S = { width: b, height: b }), S;
  }
  function h() {
    var a =
        0 >= arguments.length || void 0 === arguments[0] ? {} : arguments[0],
      b = [];
    return (
      Array.prototype.push.apply(b, arguments),
      b.slice(1).forEach(function (b) {
        if (b) for (var c in b) ({}.hasOwnProperty.call(b, c) && (a[c] = b[c]));
      }),
      a
    );
  }
  function l(a, b) {
    if (void 0 !== a.classList)
      b.split(" ").forEach(function (b) {
        b.trim() && a.classList.remove(b);
      });
    else {
      var c = new RegExp("(^| )" + b.split(" ").join("|") + "( |$)", "gi"),
        c = n(a).replace(c, " ");
      a.setAttribute("class", c);
    }
  }
  function m(a, b) {
    if (void 0 !== a.classList)
      b.split(" ").forEach(function (b) {
        b.trim() && a.classList.add(b);
      });
    else {
      l(a, b);
      var c = n(a) + " " + b;
      a.setAttribute("class", c);
    }
  }
  function p(a, b) {
    if (void 0 !== a.classList) return a.classList.contains(b);
    var c = n(a);
    return new RegExp("(^| )" + b + "( |$)", "gi").test(c);
  }
  function n(a) {
    return a.className instanceof a.ownerDocument.defaultView.SVGAnimatedString
      ? a.className.baseVal
      : a.className;
  }
  function r(a, b, c) {
    c.forEach(function (c) {
      -1 === b.indexOf(c) && p(a, c) && l(a, c);
    });
    b.forEach(function (b) {
      p(a, b) || m(a, b);
    });
  }
  function b(a, b) {
    if (!(a instanceof b))
      throw new TypeError("Cannot call a class as a function");
  }
  function t(a, b) {
    var c = 2 >= arguments.length || void 0 === arguments[2] ? 1 : arguments[2];
    return b <= a + c && a - c <= b;
  }
  function A() {
    return "object" == typeof performance &&
      "function" == typeof performance.now
      ? performance.now()
      : +new Date();
  }
  function u() {
    for (
      var a = { top: 0, left: 0 }, b = arguments.length, c = Array(b), d = 0;
      d < b;
      d++
    )
      c[d] = arguments[d];
    return (
      c.forEach(function (b) {
        var c = b.top;
        b = b.left;
        "string" == typeof c && (c = parseFloat(c, 10));
        "string" == typeof b && (b = parseFloat(b, 10));
        a.top += c;
        a.left += b;
      }),
      a
    );
  }
  function y(a, b) {
    return (
      "string" == typeof a.left &&
        -1 !== a.left.indexOf("%") &&
        (a.left = (parseFloat(a.left, 10) / 100) * b.width),
      "string" == typeof a.top &&
        -1 !== a.top.indexOf("%") &&
        (a.top = (parseFloat(a.top, 10) / 100) * b.height),
      a
    );
  }
  var x = (function () {
      function a(b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d];
          e.enumerable = e.enumerable || !1;
          e.configurable = !0;
          "value" in e && (e.writable = !0);
          Object.defineProperty(b, e.key, e);
        }
      }
      return function (b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
      };
    })(),
    q = void 0;
  void 0 === q && (q = { modules: [] });
  var F = null,
    ha,
    P =
      ((ha = 0),
      function () {
        return ++ha;
      }),
    N = {},
    ka = function () {
      var b = F;
      (b && document.body.contains(b)) ||
        ((b = document.createElement("div")),
        b.setAttribute("data-tether-id", P()),
        h(b.style, { top: 0, left: 0, position: "absolute" }),
        document.body.appendChild(b),
        (F = b));
      var c = b.getAttribute("data-tether-id");
      return (
        void 0 === N[c] &&
          ((N[c] = a(b)),
          da(function () {
            delete N[c];
          })),
        N[c]
      );
    },
    S = null,
    Da = [],
    da = function (a) {
      Da.push(a);
    },
    ya = function () {
      for (var a = void 0; (a = Da.pop()); ) a();
    },
    T = (function () {
      function a() {
        b(this, a);
      }
      return (
        x(a, [
          {
            key: "on",
            value: function (a, b, c) {
              var d =
                !(3 >= arguments.length || void 0 === arguments[3]) &&
                arguments[3];
              void 0 === this.bindings && (this.bindings = {});
              void 0 === this.bindings[a] && (this.bindings[a] = []);
              this.bindings[a].push({ handler: b, ctx: c, once: d });
            },
          },
          {
            key: "once",
            value: function (a, b, c) {
              this.on(a, b, c, !0);
            },
          },
          {
            key: "off",
            value: function (a, b) {
              if (void 0 !== this.bindings && void 0 !== this.bindings[a])
                if (void 0 === b) delete this.bindings[a];
                else
                  for (var c = 0; c < this.bindings[a].length; )
                    this.bindings[a][c].handler === b
                      ? this.bindings[a].splice(c, 1)
                      : ++c;
            },
          },
          {
            key: "trigger",
            value: function (a) {
              if (void 0 !== this.bindings && this.bindings[a]) {
                for (
                  var b = 0,
                    c = arguments.length,
                    d = Array(1 < c ? c - 1 : 0),
                    e = 1;
                  e < c;
                  e++
                )
                  d[e - 1] = arguments[e];
                for (; b < this.bindings[a].length; ) {
                  var f = this.bindings[a][b],
                    c = f.handler,
                    e = f.once,
                    f = f.ctx;
                  void 0 === f && (f = this);
                  c.apply(f, d);
                  e ? this.bindings[a].splice(b, 1) : ++b;
                }
              }
            },
          },
        ]),
        a
      );
    })();
  q.Utils = {
    getActualBoundingClientRect: a,
    getScrollParents: c,
    getBounds: f,
    getOffsetParent: d,
    extend: h,
    addClass: m,
    removeClass: l,
    hasClass: p,
    updateClasses: r,
    defer: da,
    flush: ya,
    uniqueId: P,
    Evented: T,
    getScrollBarSize: g,
    removeUtilElements: e,
  };
  var ja = function (a, b) {
      if (Array.isArray(a)) return a;
      if (Symbol.iterator in Object(a)) {
        var c = [],
          d = !0,
          e = !1,
          f = void 0;
        try {
          for (
            var g, h = a[Symbol.iterator]();
            !(d = (g = h.next()).done) &&
            (c.push(g.value), !b || c.length !== b);
            d = !0
          );
        } catch (l) {
          (e = !0), (f = l);
        } finally {
          try {
            !d && h["return"] && h["return"]();
          } finally {
            if (e) throw f;
          }
        }
        return c;
      }
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    },
    x = (function () {
      function a(b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d];
          e.enumerable = e.enumerable || !1;
          e.configurable = !0;
          "value" in e && (e.writable = !0);
          Object.defineProperty(b, e.key, e);
        }
      }
      return function (b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
      };
    })();
  if (void 0 === q)
    throw Error("You must include the utils.js file before tether.js");
  var M = q.Utils,
    c = M.getScrollParents,
    d = ((f = M.getBounds), M.getOffsetParent),
    m = ((h = M.extend), M.addClass),
    l = M.removeClass,
    g =
      ((r = M.updateClasses),
      (da = M.defer),
      (ya = M.flush),
      M.getScrollBarSize),
    e = M.removeUtilElements,
    la,
    R,
    ma,
    O,
    ea = (function () {
      if ("undefined" == typeof document) return "";
      for (
        var a = document.createElement("div"),
          b = [
            "transform",
            "WebkitTransform",
            "OTransform",
            "MozTransform",
            "msTransform",
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (void 0 !== a.style[d]) return d;
      }
    })(),
    na = [],
    Q = function () {
      na.forEach(function (a) {
        a.position(!1);
      });
      ya();
    };
  ma = R = la = null;
  O = function V() {
    if (void 0 !== R && 16 < R)
      return (R = Math.min(R - 16, 250)), void (ma = setTimeout(V, 250));
    (void 0 !== la && 10 > A() - la) ||
      (null != ma && (clearTimeout(ma), (ma = null)),
      (la = A()),
      Q(),
      (R = A() - la));
  };
  "undefined" != typeof window &&
    void 0 !== window.addEventListener &&
    ["resize", "scroll", "touchmove"].forEach(function (a) {
      window.addEventListener(a, O);
    });
  var Ia = { center: "center", left: "right", right: "left" },
    Ta = { middle: "middle", top: "bottom", bottom: "top" },
    sa = {
      top: 0,
      left: 0,
      middle: "50%",
      center: "50%",
      bottom: "100%",
      right: "100%",
    },
    fa = function (a) {
      var b = a.left,
        c = a.top;
      return (
        void 0 !== sa[a.left] && (b = sa[a.left]),
        void 0 !== sa[a.top] && (c = sa[a.top]),
        { left: b, top: c }
      );
    },
    U = function (a) {
      a = a.split(" ");
      a = ja(a, 2);
      return { top: a[0], left: a[1] };
    },
    T = (function (a) {
      function n(a) {
        var c = this;
        b(this, n);
        (function (a, b, c) {
          for (var d = !0; d; ) {
            null === a && (a = Function.prototype);
            d = Object.getOwnPropertyDescriptor(a, b);
            if (void 0 !== d) {
              if ("value" in d) return d.value;
              b = d.get;
              if (void 0 === b) break;
              return b.call(c);
            }
            a = Object.getPrototypeOf(a);
            if (null === a) break;
            d = !0;
          }
        })(Object.getPrototypeOf(n.prototype), "constructor", this).call(this);
        this.position = this.position.bind(this);
        na.push(this);
        this.history = [];
        this.setOptions(a, !1);
        q.modules.forEach(function (a) {
          void 0 !== a.initialize && a.initialize.call(c);
        });
        this.position();
      }
      return (
        (function (a, b) {
          if ("function" != typeof b && null !== b)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof b
            );
          a.prototype = Object.create(b && b.prototype, {
            constructor: {
              value: a,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          });
          b &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(a, b)
              : (a.__proto__ = b));
        })(n, a),
        x(n, [
          {
            key: "getClass",
            value: function () {
              var a =
                  0 >= arguments.length || void 0 === arguments[0]
                    ? ""
                    : arguments[0],
                b = this.options.classes;
              return void 0 !== b && b[a]
                ? this.options.classes[a]
                : this.options.classPrefix
                ? this.options.classPrefix + "-" + a
                : a;
            },
          },
          {
            key: "setOptions",
            value: function (a) {
              var b = this,
                d =
                  1 >= arguments.length ||
                  void 0 === arguments[1] ||
                  arguments[1],
                e = (this.options = h(
                  {
                    offset: "0 0",
                    targetOffset: "0 0",
                    targetAttachment: "auto auto",
                    classPrefix: "tether",
                  },
                  a
                )),
                f = e.target,
                g = e.targetModifier;
              if (
                ((this.element = e.element),
                (this.target = f),
                (this.targetModifier = g),
                "viewport" === this.target
                  ? ((this.target = document.body),
                    (this.targetModifier = "visible"))
                  : "scroll-handle" === this.target &&
                    ((this.target = document.body),
                    (this.targetModifier = "scroll-handle")),
                ["element", "target"].forEach(function (a) {
                  if (void 0 === b[a])
                    throw Error(
                      "Tether Error: Both element and target must be defined"
                    );
                  void 0 !== b[a].jquery
                    ? (b[a] = b[a][0])
                    : "string" == typeof b[a] &&
                      (b[a] = document.querySelector(b[a]));
                }),
                m(this.element, this.getClass("element")),
                !1 !== this.options.addTargetClasses &&
                  m(this.target, this.getClass("target")),
                !this.options.attachment)
              )
                throw Error("Tether Error: You must provide an attachment");
              this.targetAttachment = U(this.options.targetAttachment);
              this.attachment = U(this.options.attachment);
              this.offset = U(this.options.offset);
              this.targetOffset = U(this.options.targetOffset);
              void 0 !== this.scrollParents && this.disable();
              "scroll-handle" === this.targetModifier
                ? (this.scrollParents = [this.target])
                : (this.scrollParents = c(this.target));
              !1 !== this.options.enabled && this.enable(d);
            },
          },
          {
            key: "getTargetBounds",
            value: function () {
              if (void 0 === this.targetModifier) return f(this.target);
              if ("visible" === this.targetModifier) {
                if (this.target === document.body)
                  return {
                    top: pageYOffset,
                    left: pageXOffset,
                    height: innerHeight,
                    width: innerWidth,
                  };
                var a = f(this.target),
                  b = {
                    height: a.height,
                    width: a.width,
                    top: a.top,
                    left: a.left,
                  };
                return (
                  (b.height = Math.min(
                    b.height,
                    a.height - (pageYOffset - a.top)
                  )),
                  (b.height = Math.min(
                    b.height,
                    a.height - (a.top + a.height - (pageYOffset + innerHeight))
                  )),
                  (b.height = Math.min(innerHeight, b.height)),
                  (b.height -= 2),
                  (b.width = Math.min(
                    b.width,
                    a.width - (pageXOffset - a.left)
                  )),
                  (b.width = Math.min(
                    b.width,
                    a.width - (a.left + a.width - (pageXOffset + innerWidth))
                  )),
                  (b.width = Math.min(innerWidth, b.width)),
                  (b.width -= 2),
                  b.top < pageYOffset && (b.top = pageYOffset),
                  b.left < pageXOffset && (b.left = pageXOffset),
                  b
                );
              }
              if ("scroll-handle" === this.targetModifier) {
                var c = this.target,
                  a =
                    c === document.body
                      ? ((c = document.documentElement),
                        {
                          left: pageXOffset,
                          top: pageYOffset,
                          height: innerHeight,
                          width: innerWidth,
                        })
                      : f(c),
                  d = getComputedStyle(c),
                  b = 0;
                (c.scrollWidth > c.clientWidth ||
                  0 <= [d.overflow, d.overflowX].indexOf("scroll") ||
                  this.target !== document.body) &&
                  (b = 15);
                var e =
                    a.height -
                    parseFloat(d.borderTopWidth) -
                    parseFloat(d.borderBottomWidth) -
                    b,
                  g =
                    ((b = {
                      width: 15,
                      height: (e / c.scrollHeight) * e * 0.975,
                      left:
                        a.left + a.width - parseFloat(d.borderLeftWidth) - 15,
                    }),
                    0);
                408 > e &&
                  this.target === document.body &&
                  (g = -1.1e-4 * Math.pow(e, 2) - 0.00727 * e + 22.58);
                this.target !== document.body &&
                  (b.height = Math.max(b.height, 24));
                return (
                  (b.top =
                    (this.target.scrollTop / (c.scrollHeight - e)) *
                      (e - b.height - g) +
                    a.top +
                    parseFloat(d.borderTopWidth)),
                  this.target === document.body &&
                    (b.height = Math.max(b.height, 24)),
                  b
                );
              }
            },
          },
          {
            key: "clearCache",
            value: function () {
              this._cache = {};
            },
          },
          {
            key: "cache",
            value: function (a, b) {
              return (
                void 0 === this._cache && (this._cache = {}),
                void 0 === this._cache[a] && (this._cache[a] = b.call(this)),
                this._cache[a]
              );
            },
          },
          {
            key: "enable",
            value: function () {
              var a = this,
                b =
                  0 >= arguments.length ||
                  void 0 === arguments[0] ||
                  arguments[0];
              !1 !== this.options.addTargetClasses &&
                m(this.target, this.getClass("enabled"));
              m(this.element, this.getClass("enabled"));
              this.enabled = !0;
              this.scrollParents.forEach(function (b) {
                b !== a.target.ownerDocument &&
                  b.addEventListener("scroll", a.position);
              });
              b && this.position();
            },
          },
          {
            key: "disable",
            value: function () {
              var a = this;
              l(this.target, this.getClass("enabled"));
              l(this.element, this.getClass("enabled"));
              this.enabled = !1;
              void 0 !== this.scrollParents &&
                this.scrollParents.forEach(function (b) {
                  b.removeEventListener("scroll", a.position);
                });
            },
          },
          {
            key: "destroy",
            value: function () {
              var a = this;
              this.disable();
              na.forEach(function (b, c) {
                b === a && na.splice(c, 1);
              });
              0 === na.length && e();
            },
          },
          {
            key: "updateAttachClasses",
            value: function (a, b) {
              var c = this;
              a = a || this.attachment;
              b = b || this.targetAttachment;
              void 0 !== this._addAttachClasses &&
                this._addAttachClasses.length &&
                this._addAttachClasses.splice(0, this._addAttachClasses.length);
              void 0 === this._addAttachClasses &&
                (this._addAttachClasses = []);
              var d = this._addAttachClasses;
              a.top && d.push(this.getClass("element-attached") + "-" + a.top);
              a.left &&
                d.push(this.getClass("element-attached") + "-" + a.left);
              b.top && d.push(this.getClass("target-attached") + "-" + b.top);
              b.left && d.push(this.getClass("target-attached") + "-" + b.left);
              var e = [];
              "left top bottom right middle center"
                .split(" ")
                .forEach(function (a) {
                  e.push(c.getClass("element-attached") + "-" + a);
                  e.push(c.getClass("target-attached") + "-" + a);
                });
              da(function () {
                void 0 !== c._addAttachClasses &&
                  (r(c.element, c._addAttachClasses, e),
                  !1 !== c.options.addTargetClasses &&
                    r(c.target, c._addAttachClasses, e),
                  delete c._addAttachClasses);
              });
            },
          },
          {
            key: "position",
            value: function () {
              var a = this,
                b =
                  0 >= arguments.length ||
                  void 0 === arguments[0] ||
                  arguments[0];
              if (this.enabled) {
                this.clearCache();
                var c,
                  e,
                  h,
                  l,
                  m =
                    ((c = this.targetAttachment),
                    (e = this.attachment),
                    (h = c.left),
                    (l = c.top),
                    "auto" === h && (h = Ia[e.left]),
                    "auto" === l && (l = Ta[e.top]),
                    { left: h, top: l });
                this.updateAttachClasses(this.attachment, m);
                e = this.cache("element-bounds", function () {
                  return f(a.element);
                });
                c = e.width;
                h = e.height;
                0 === c && 0 === h && void 0 !== this.lastSize
                  ? ((h = this.lastSize), (c = h.width), (h = h.height))
                  : (this.lastSize = { width: c, height: h });
                var n = this.cache("target-bounds", function () {
                    return a.getTargetBounds();
                  }),
                  p = y(fa(this.attachment), { width: c, height: h }),
                  r = y(fa(m), n),
                  t = y(this.offset, { width: c, height: h }),
                  x = y(this.targetOffset, n),
                  p = u(p, t),
                  r = u(r, x);
                l = n.left + r.left - p.left;
                for (
                  var A = n.top + r.top - p.top, F = 0;
                  F < q.modules.length;
                  ++F
                ) {
                  var V = q.modules[F].position.call(this, {
                    left: l,
                    top: A,
                    targetAttachment: m,
                    targetPos: n,
                    elementPos: e,
                    offset: p,
                    targetOffset: r,
                    manualOffset: t,
                    manualTargetOffset: x,
                    scrollbarSize: X,
                    attachment: this.attachment,
                  });
                  if (!1 === V) return !1;
                  void 0 !== V &&
                    "object" == typeof V &&
                    ((A = V.top), (l = V.left));
                }
                var D = {
                    page: { top: A, left: l },
                    viewport: {
                      top: A - pageYOffset,
                      bottom: pageYOffset - A - h + innerHeight,
                      left: l - pageXOffset,
                      right: pageXOffset - l - c + innerWidth,
                    },
                  },
                  z = this.target.ownerDocument,
                  m = z.defaultView,
                  X = void 0;
                return (
                  m.innerHeight > z.documentElement.clientHeight &&
                    ((X = this.cache("scrollbar-size", g)),
                    (D.viewport.bottom -= X.height)),
                  m.innerWidth > z.documentElement.clientWidth &&
                    ((X = this.cache("scrollbar-size", g)),
                    (D.viewport.right -= X.width)),
                  (-1 !== ["", "static"].indexOf(z.body.style.position) &&
                    -1 !==
                      ["", "static"].indexOf(
                        z.body.parentElement.style.position
                      )) ||
                    ((D.page.bottom = z.body.scrollHeight - A - h),
                    (D.page.right = z.body.scrollWidth - l - c)),
                  void 0 !== this.options.optimizations &&
                    !1 !== this.options.optimizations.moveElement &&
                    void 0 === this.targetModifier &&
                    (function () {
                      var b = a.cache("target-offsetparent", function () {
                          return d(a.target);
                        }),
                        c = a.cache("target-offsetparent-bounds", function () {
                          return f(b);
                        }),
                        e = getComputedStyle(b),
                        g = {};
                      if (
                        (["Top", "Left", "Bottom", "Right"].forEach(function (
                          a
                        ) {
                          g[a.toLowerCase()] = parseFloat(
                            e["border" + a + "Width"]
                          );
                        }),
                        (c.right =
                          z.body.scrollWidth - c.left - c.width + g.right),
                        (c.bottom =
                          z.body.scrollHeight - c.top - c.height + g.bottom),
                        D.page.top >= c.top + g.top &&
                          D.page.bottom >= c.bottom &&
                          D.page.left >= c.left + g.left &&
                          D.page.right >= c.right)
                      )
                        D.offset = {
                          top: D.page.top - c.top + b.scrollTop - g.top,
                          left: D.page.left - c.left + b.scrollLeft - g.left,
                        };
                    })(),
                  this.move(D),
                  this.history.unshift(D),
                  3 < this.history.length && this.history.pop(),
                  b && ya(),
                  !0
                );
              }
            },
          },
          {
            key: "move",
            value: function (a) {
              var b = this;
              if (void 0 !== this.element.parentNode) {
                var c = {},
                  e;
                for (e in a)
                  for (var f in ((c[e] = {}), a[e])) {
                    for (var g = !1, l = 0; l < this.history.length; ++l) {
                      var m = this.history[l];
                      if (void 0 !== m[e] && !t(m[e][f], a[e][f])) {
                        g = !0;
                        break;
                      }
                    }
                    g || (c[e][f] = !0);
                  }
                var n = { top: "", left: "", right: "", bottom: "" },
                  p = function (a, c) {
                    if (
                      !1 !==
                      (void 0 !== b.options.optimizations
                        ? b.options.optimizations.gpu
                        : null)
                    ) {
                      var d = void 0,
                        e = void 0;
                      if (
                        ((d = a.top
                          ? ((n.top = 0), c.top)
                          : ((n.bottom = 0), -c.bottom)),
                        (e = a.left
                          ? ((n.left = 0), c.left)
                          : ((n.right = 0), -c.right)),
                        window.matchMedia)
                      )
                        window.matchMedia(
                          "only screen and (min-resolution: 1.3dppx)"
                        ).matches ||
                          window.matchMedia(
                            "only screen and (-webkit-min-device-pixel-ratio: 1.3)"
                          ).matches ||
                          ((e = Math.round(e)), (d = Math.round(d)));
                      n[ea] = "translateX(" + e + "px) translateY(" + d + "px)";
                      "msTransform" !== ea && (n[ea] += " translateZ(0)");
                    } else
                      a.top
                        ? (n.top = c.top + "px")
                        : (n.bottom = c.bottom + "px"),
                        a.left
                          ? (n.left = c.left + "px")
                          : (n.right = c.right + "px");
                  },
                  q = !1;
                if (
                  ((c.page.top || c.page.bottom) &&
                  (c.page.left || c.page.right)
                    ? ((n.position = "absolute"), p(c.page, a.page))
                    : (c.viewport.top || c.viewport.bottom) &&
                      (c.viewport.left || c.viewport.right)
                    ? ((n.position = "fixed"), p(c.viewport, a.viewport))
                    : void 0 !== c.offset && c.offset.top && c.offset.left
                    ? (function () {
                        n.position = "absolute";
                        var e = b.cache("target-offsetparent", function () {
                          return d(b.target);
                        });
                        d(b.element) !== e &&
                          da(function () {
                            b.element.parentNode.removeChild(b.element);
                            e.appendChild(b.element);
                          });
                        p(c.offset, a.offset);
                        q = !0;
                      })()
                    : ((n.position = "absolute"),
                      p({ top: !0, left: !0 }, a.page)),
                  !q)
                )
                  if (this.options.bodyElement)
                    this.element.parentNode !== this.options.bodyElement &&
                      this.options.bodyElement.appendChild(this.element);
                  else {
                    e = !0;
                    for (
                      g = this.element.parentNode;
                      g && 1 === g.nodeType && "BODY" !== g.tagName;

                    ) {
                      if ("static" !== getComputedStyle(g).position) {
                        e = !1;
                        break;
                      }
                      g = g.parentNode;
                    }
                    e ||
                      (this.element.parentNode.removeChild(this.element),
                      this.element.ownerDocument.body.appendChild(
                        this.element
                      ));
                  }
                var r = {};
                e = !1;
                for (f in n)
                  (g = n[f]),
                    this.element.style[f] !== g && ((e = !0), (r[f] = g));
                e &&
                  da(function () {
                    h(b.element.style, r);
                    b.trigger("repositioned");
                  });
              }
            },
          },
        ]),
        n
      );
    })(T);
  T.modules = [];
  q.position = Q;
  var T = h(T, q),
    h =
      ((ja = function (a, b) {
        if (Array.isArray(a)) return a;
        if (Symbol.iterator in Object(a)) {
          var c = [],
            d = !0,
            e = !1,
            f = void 0;
          try {
            for (
              var g, h = a[Symbol.iterator]();
              !(d = (g = h.next()).done) &&
              (c.push(g.value), !b || c.length !== b);
              d = !0
            );
          } catch (l) {
            (e = !0), (f = l);
          } finally {
            try {
              !d && h["return"] && h["return"]();
            } finally {
              if (e) throw f;
            }
          }
          return c;
        }
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      }),
      (M = q.Utils),
      (f = M.getBounds),
      M.extend),
    za =
      ((r = M.updateClasses),
      (da = M.defer),
      ["left", "top", "right", "bottom"]);
  q.modules.push({
    position: function (a) {
      var b = this,
        c = a.top,
        d = a.left,
        e = a.targetAttachment;
      if (!this.options.constraints) return !0;
      a = this.cache("element-bounds", function () {
        return f(b.element);
      });
      var g = a.height,
        l = a.width;
      0 === l &&
        0 === g &&
        void 0 !== this.lastSize &&
        ((a = this.lastSize), (l = a.width), (g = a.height));
      a = this.cache("target-bounds", function () {
        return b.getTargetBounds();
      });
      var n = a.height,
        m = a.width,
        p = [this.getClass("pinned"), this.getClass("out-of-bounds")];
      this.options.constraints.forEach(function (a) {
        var b = a.outOfBoundsClass;
        a = a.pinnedClass;
        b && p.push(b);
        a && p.push(a);
      });
      p.forEach(function (a) {
        ["left", "top", "right", "bottom"].forEach(function (b) {
          p.push(a + "-" + b);
        });
      });
      var q = [],
        u = h({}, e),
        t = h({}, this.attachment);
      return (
        this.options.constraints.forEach(function (a) {
          var h = a.to,
            p = a.attachment;
          a = a.pin;
          void 0 === p && (p = "");
          var r = void 0,
            y = void 0;
          0 <= p.indexOf(" ")
            ? ((y = p.split(" ")), (p = ja(y, 2)), (y = p[0]), (r = p[1]))
            : (r = y = p);
          var x,
            h =
              ((x = h),
              "scrollParent" === x
                ? (x = b.scrollParents[0])
                : "window" === x &&
                  (x = [
                    pageXOffset,
                    pageYOffset,
                    innerWidth + pageXOffset,
                    innerHeight + pageYOffset,
                  ]),
              x === document && (x = x.documentElement),
              void 0 !== x.nodeType &&
                (function () {
                  var a = x,
                    b = f(x),
                    c = getComputedStyle(x);
                  if (
                    ((x = [b.left, b.top, b.width + b.left, b.height + b.top]),
                    a.ownerDocument !== document)
                  )
                    (a = a.ownerDocument.defaultView),
                      (x[0] += a.pageXOffset),
                      (x[1] += a.pageYOffset),
                      (x[2] += a.pageXOffset),
                      (x[3] += a.pageYOffset);
                  za.forEach(function (a, b) {
                    a = a[0].toUpperCase() + a.substr(1);
                    "Top" === a || "Left" === a
                      ? (x[b] += parseFloat(c["border" + a + "Width"]))
                      : (x[b] -= parseFloat(c["border" + a + "Width"]));
                  });
                })(),
              x);
          ("target" !== y && "both" !== y) ||
            (c < h[1] && "top" === u.top && ((c += n), (u.top = "bottom")),
            c + g > h[3] && "bottom" === u.top && ((c -= n), (u.top = "top")));
          "together" === y &&
            ("top" === u.top &&
              ("bottom" === t.top && c < h[1]
                ? ((c += n), (u.top = "bottom"), (c += g), (t.top = "top"))
                : "top" === t.top &&
                  c + g > h[3] &&
                  c - (g - n) >= h[1] &&
                  ((c -= g - n), (u.top = "bottom"), (t.top = "bottom"))),
            "bottom" === u.top &&
              ("top" === t.top && c + g > h[3]
                ? ((c -= n), (u.top = "top"), (c -= g), (t.top = "bottom"))
                : "bottom" === t.top &&
                  c < h[1] &&
                  c + (2 * g - n) <= h[3] &&
                  ((c += g - n), (u.top = "top"), (t.top = "top"))),
            "middle" === u.top &&
              (c + g > h[3] && "top" === t.top
                ? ((c -= g), (t.top = "bottom"))
                : c < h[1] &&
                  "bottom" === t.top &&
                  ((c += g), (t.top = "top"))));
          ("target" !== r && "both" !== r) ||
            (d < h[0] && "left" === u.left && ((d += m), (u.left = "right")),
            d + l > h[2] &&
              "right" === u.left &&
              ((d -= m), (u.left = "left")));
          "together" === r &&
            (d < h[0] && "left" === u.left
              ? "right" === t.left
                ? ((d += m), (u.left = "right"), (d += l), (t.left = "left"))
                : "left" === t.left &&
                  ((d += m), (u.left = "right"), (d -= l), (t.left = "right"))
              : d + l > h[2] && "right" === u.left
              ? "left" === t.left
                ? ((d -= m), (u.left = "left"), (d -= l), (t.left = "right"))
                : "right" === t.left &&
                  ((d -= m), (u.left = "left"), (d += l), (t.left = "left"))
              : "center" === u.left &&
                (d + l > h[2] && "left" === t.left
                  ? ((d -= l), (t.left = "right"))
                  : d < h[0] &&
                    "right" === t.left &&
                    ((d += l), (t.left = "left"))));
          ("element" !== y && "both" !== y) ||
            (c < h[1] && "bottom" === t.top && ((c += g), (t.top = "top")),
            c + g > h[3] && "top" === t.top && ((c -= g), (t.top = "bottom")));
          ("element" !== r && "both" !== r) ||
            (d < h[0] &&
              ("right" === t.left
                ? ((d += l), (t.left = "left"))
                : "center" === t.left && ((d += l / 2), (t.left = "left"))),
            d + l > h[2] &&
              ("left" === t.left
                ? ((d -= l), (t.left = "right"))
                : "center" === t.left && ((d -= l / 2), (t.left = "right"))));
          "string" == typeof a
            ? (a = a.split(",").map(function (a) {
                return a.trim();
              }))
            : !0 === a && (a = ["top", "left", "right", "bottom"]);
          a = a || [];
          var A,
            F,
            y = [],
            p = [];
          c < h[1] &&
            (0 <= a.indexOf("top")
              ? ((c = h[1]), y.push("top"))
              : p.push("top"));
          c + g > h[3] &&
            (0 <= a.indexOf("bottom")
              ? ((c = h[3] - g), y.push("bottom"))
              : p.push("bottom"));
          d < h[0] &&
            (0 <= a.indexOf("left")
              ? ((d = h[0]), y.push("left"))
              : p.push("left"));
          d + l > h[2] &&
            (0 <= a.indexOf("right")
              ? ((d = h[2] - l), y.push("right"))
              : p.push("right"));
          y.length &&
            ((A = void 0),
            (A =
              void 0 !== b.options.pinnedClass
                ? b.options.pinnedClass
                : b.getClass("pinned")),
            q.push(A),
            y.forEach(function (a) {
              q.push(A + "-" + a);
            }));
          p.length &&
            ((F = void 0),
            (F =
              void 0 !== b.options.outOfBoundsClass
                ? b.options.outOfBoundsClass
                : b.getClass("out-of-bounds")),
            q.push(F),
            p.forEach(function (a) {
              q.push(F + "-" + a);
            }));
          (0 <= y.indexOf("left") || 0 <= y.indexOf("right")) &&
            (t.left = u.left = !1);
          (0 <= y.indexOf("top") || 0 <= y.indexOf("bottom")) &&
            (t.top = u.top = !1);
          (u.top === e.top &&
            u.left === e.left &&
            t.top === b.attachment.top &&
            t.left === b.attachment.left) ||
            (b.updateAttachClasses(t, u),
            b.trigger("update", { attachment: t, targetAttachment: u }));
        }),
        da(function () {
          !1 !== b.options.addTargetClasses && r(b.target, q, p);
          r(b.element, q, p);
        }),
        { top: c, left: d }
      );
    },
  });
  M = q.Utils;
  f = M.getBounds;
  r = M.updateClasses;
  da = M.defer;
  q.modules.push({
    position: function (a) {
      var b = this,
        c = a.top,
        d = a.left,
        e = this.cache("element-bounds", function () {
          return f(b.element);
        });
      a = e.height;
      var e = e.width,
        g = this.getTargetBounds(),
        h = c + a,
        l = d + e,
        n = [];
      c <= g.bottom &&
        h >= g.top &&
        ["left", "right"].forEach(function (a) {
          var b = g[a];
          (b !== d && b !== l) || n.push(a);
        });
      d <= g.right &&
        l >= g.left &&
        ["top", "bottom"].forEach(function (a) {
          var b = g[a];
          (b !== c && b !== h) || n.push(a);
        });
      var m = [],
        p = [];
      return (
        m.push(this.getClass("abutted")),
        ["left", "top", "right", "bottom"].forEach(function (a) {
          m.push(b.getClass("abutted") + "-" + a);
        }),
        n.length && p.push(this.getClass("abutted")),
        n.forEach(function (a) {
          p.push(b.getClass("abutted") + "-" + a);
        }),
        da(function () {
          !1 !== b.options.addTargetClasses && r(b.target, p, m);
          r(b.element, p, m);
        }),
        !0
      );
    },
  });
  ja = function (a, b) {
    if (Array.isArray(a)) return a;
    if (Symbol.iterator in Object(a)) {
      var c = [],
        d = !0,
        e = !1,
        f = void 0;
      try {
        for (
          var g, h = a[Symbol.iterator]();
          !(d = (g = h.next()).done) && (c.push(g.value), !b || c.length !== b);
          d = !0
        );
      } catch (l) {
        (e = !0), (f = l);
      } finally {
        try {
          !d && h["return"] && h["return"]();
        } finally {
          if (e) throw f;
        }
      }
      return c;
    }
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
  return (
    q.modules.push({
      position: function (a) {
        var b = a.top;
        a = a.left;
        if (this.options.shift) {
          var c = this.options.shift;
          "function" == typeof this.options.shift &&
            (c = this.options.shift.call(this, { top: b, left: a }));
          var d = void 0,
            e = void 0;
          "string" == typeof c
            ? ((c = c.split(" ")),
              (c[1] = c[1] || c[0]),
              (c = ja(c, 2)),
              (d = c[0]),
              (e = c[1]),
              (d = parseFloat(d, 10)),
              (e = parseFloat(e, 10)))
            : ((d = c.top), (e = c.left));
          return (b += d), (a += e), { top: b, left: a };
        }
      },
    }),
    T
  );
});
var tempDefine,
  CWPDFReaderMode,
  CWPDFReaderConfig,
  CWApiHandler,
  CwZ = jQuery.noConflict();
jQueryInc && (jQuery = oldJQ);
"function" == typeof define &&
  define.amd &&
  ((tempDefine = define), (define = {}));
(function (b, a) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = a())
    : "function" == typeof define && define.amd
    ? define([], a)
    : "object" == typeof exports
    ? (exports.Handlebars = a())
    : (b.Handlebars = a());
})(this, function () {
  return (function (b) {
    function a(e) {
      if (c[e]) return c[e].exports;
      var f = (c[e] = { exports: {}, id: e, loaded: !1 });
      return b[e].call(f.exports, f, f.exports, a), (f.loaded = !0), f.exports;
    }
    var c = {};
    return (a.m = b), (a.c = c), (a.p = ""), a(0);
  })([
    function (b, a, c) {
      function e() {
        var a = new h.HandlebarsEnvironment();
        return (
          p.extend(a, h),
          (a.SafeString = l["default"]),
          (a.Exception = m["default"]),
          (a.Utils = p),
          (a.escapeExpression = p.escapeExpression),
          (a.VM = n),
          (a.template = function (b) {
            return n.template(b, a);
          }),
          a
        );
      }
      var f = c(1)["default"],
        d = c(2)["default"];
      a.__esModule = !0;
      var g = c(3),
        h = f(g),
        g = c(20),
        l = d(g),
        g = c(5),
        m = d(g),
        g = c(4),
        p = f(g),
        g = c(21),
        n = f(g);
      c = c(33);
      d = d(c);
      c = e();
      c.create = e;
      d["default"](c);
      c["default"] = c;
      a["default"] = c;
      b.exports = a["default"];
    },
    function (b, a) {
      a["default"] = function (a) {
        if (a && a.__esModule) return a;
        var b = {};
        if (null != a)
          for (var f in a)
            Object.prototype.hasOwnProperty.call(a, f) && (b[f] = a[f]);
        return (b["default"] = a), b;
      };
      a.__esModule = !0;
    },
    function (b, a) {
      a["default"] = function (a) {
        return a && a.__esModule ? a : { default: a };
      };
      a.__esModule = !0;
    },
    function (b, a, c) {
      function e(a, b, c) {
        this.helpers = a || {};
        this.partials = b || {};
        this.decorators = c || {};
        h.registerDefaultHelpers(this);
        l.registerDefaultDecorators(this);
      }
      b = c(2)["default"];
      a.__esModule = !0;
      a.HandlebarsEnvironment = e;
      var f = c(4),
        d = c(5),
        g = b(d),
        h = c(9),
        l = c(17);
      c = c(19);
      c = b(c);
      a.VERSION = "4.0.12";
      a.COMPILER_REVISION = 7;
      a.REVISION_CHANGES = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: "== 1.x.x",
        5: "== 2.0.0-alpha.x",
        6: ">= 2.0.0-beta.1",
        7: ">= 4.0.0",
      };
      e.prototype = {
        constructor: e,
        logger: c["default"],
        log: c["default"].log,
        registerHelper: function (a, b) {
          if ("[object Object]" === f.toString.call(a)) {
            if (b)
              throw new g["default"]("Arg not supported with multiple helpers");
            f.extend(this.helpers, a);
          } else this.helpers[a] = b;
        },
        unregisterHelper: function (a) {
          delete this.helpers[a];
        },
        registerPartial: function (a, b) {
          if ("[object Object]" === f.toString.call(a))
            f.extend(this.partials, a);
          else {
            if (void 0 === b)
              throw new g["default"](
                'Attempting to register a partial called "' +
                  a +
                  '" as undefined'
              );
            this.partials[a] = b;
          }
        },
        unregisterPartial: function (a) {
          delete this.partials[a];
        },
        registerDecorator: function (a, b) {
          if ("[object Object]" === f.toString.call(a)) {
            if (b)
              throw new g["default"](
                "Arg not supported with multiple decorators"
              );
            f.extend(this.decorators, a);
          } else this.decorators[a] = b;
        },
        unregisterDecorator: function (a) {
          delete this.decorators[a];
        },
      };
      a.log = c["default"].log;
      a.createFrame = f.createFrame;
      a.logger = c["default"];
    },
    function (b, a) {
      function c(a) {
        return f[a];
      }
      function e(a) {
        for (var b = 1; b < arguments.length; b++)
          for (var c in arguments[b])
            Object.prototype.hasOwnProperty.call(arguments[b], c) &&
              (a[c] = arguments[b][c]);
        return a;
      }
      a.__esModule = !0;
      a.extend = e;
      a.indexOf = function (a, b) {
        for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
        return -1;
      };
      a.escapeExpression = function (a) {
        if ("string" != typeof a) {
          if (a && a.toHTML) return a.toHTML();
          if (null == a) return "";
          if (!a) return a + "";
          a = "" + a;
        }
        return g.test(a) ? a.replace(d, c) : a;
      };
      a.isEmpty = function (a) {
        return (!a && 0 !== a) || !(!m(a) || 0 !== a.length);
      };
      a.createFrame = function (a) {
        var b = e({}, a);
        return (b._parent = a), b;
      };
      a.blockParams = function (a, b) {
        return (a.path = b), a;
      };
      a.appendContextPath = function (a, b) {
        return (a ? a + "." : "") + b;
      };
      var f = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;",
          "=": "&#x3D;",
        },
        d = /[&<>"'`=]/g,
        g = /[&<>"'`=]/,
        h = Object.prototype.toString;
      a.toString = h;
      var l = function (a) {
        return "function" == typeof a;
      };
      l(/x/) &&
        (a.isFunction = l =
          function (a) {
            return "function" == typeof a && "[object Function]" === h.call(a);
          });
      a.isFunction = l;
      var m =
        Array.isArray ||
        function (a) {
          return (
            !(!a || "object" != typeof a) && "[object Array]" === h.call(a)
          );
        };
      a.isArray = m;
    },
    function (b, a, c) {
      function e(a, b) {
        var c = b && b.loc,
          m = void 0,
          p = void 0;
        c &&
          ((m = c.start.line),
          (p = c.start.column),
          (a += " - " + m + ":" + p));
        for (
          var n = Error.prototype.constructor.call(this, a), r = 0;
          r < d.length;
          r++
        )
          this[d[r]] = n[d[r]];
        Error.captureStackTrace && Error.captureStackTrace(this, e);
        try {
          c &&
            ((this.lineNumber = m),
            f
              ? Object.defineProperty(this, "column", {
                  value: p,
                  enumerable: !0,
                })
              : (this.column = p));
        } catch (t) {}
      }
      var f = c(6)["default"];
      a.__esModule = !0;
      var d = "description fileName lineNumber message name number stack".split(
        " "
      );
      e.prototype = Error();
      a["default"] = e;
      b.exports = a["default"];
    },
    function (b, a, c) {
      b.exports = { default: c(7), __esModule: !0 };
    },
    function (b, a, c) {
      var e = c(8);
      b.exports = function (a, b, c) {
        return e.setDesc(a, b, c);
      };
    },
    function (b, a) {
      var c = Object;
      b.exports = {
        create: c.create,
        getProto: c.getPrototypeOf,
        isEnum: {}.propertyIsEnumerable,
        getDesc: c.getOwnPropertyDescriptor,
        setDesc: c.defineProperty,
        setDescs: c.defineProperties,
        getKeys: c.keys,
        getNames: c.getOwnPropertyNames,
        getSymbols: c.getOwnPropertySymbols,
        each: [].forEach,
      };
    },
    function (b, a, c) {
      b = c(2)["default"];
      a.__esModule = !0;
      a.registerDefaultHelpers = function (a) {
        e["default"](a);
        f["default"](a);
        d["default"](a);
        g["default"](a);
        h["default"](a);
        l["default"](a);
        m["default"](a);
      };
      a = c(10);
      var e = b(a);
      a = c(11);
      var f = b(a);
      a = c(12);
      var d = b(a);
      a = c(13);
      var g = b(a);
      a = c(14);
      var h = b(a);
      a = c(15);
      var l = b(a);
      c = c(16);
      var m = b(c);
    },
    function (b, a, c) {
      a.__esModule = !0;
      var e = c(4);
      a["default"] = function (a) {
        a.registerHelper("blockHelperMissing", function (b, c) {
          var h = c.inverse,
            l = c.fn;
          if (!0 === b) return l(this);
          if (!1 === b || null == b) return h(this);
          if (e.isArray(b))
            return 0 < b.length
              ? (c.ids && (c.ids = [c.name]), a.helpers.each(b, c))
              : h(this);
          c.data &&
            c.ids &&
            ((h = e.createFrame(c.data)),
            (h.contextPath = e.appendContextPath(c.data.contextPath, c.name)),
            (c = { data: h }));
          return l(b, c);
        });
      };
      b.exports = a["default"];
    },
    function (b, a, c) {
      var e = c(2)["default"];
      a.__esModule = !0;
      var f = c(4);
      c = c(5);
      var d = e(c);
      a["default"] = function (a) {
        a.registerHelper("each", function (a, b) {
          function c(b, d, g) {
            A &&
              ((A.key = b),
              (A.index = d),
              (A.first = 0 === d),
              (A.last = !!g),
              u && (A.contextPath = u + b));
            t += e(a[b], {
              data: A,
              blockParams: f.blockParams([a[b], b], [u + b, null]),
            });
          }
          if (!b) throw new d["default"]("Must pass iterator to #each");
          var e = b.fn,
            g = b.inverse,
            r = 0,
            t = "",
            A = void 0,
            u = void 0;
          if (
            (b.data &&
              b.ids &&
              (u = f.appendContextPath(b.data.contextPath, b.ids[0]) + "."),
            f.isFunction(a) && (a = a.call(this)),
            b.data && (A = f.createFrame(b.data)),
            a && "object" == typeof a)
          )
            if (f.isArray(a))
              for (var y = a.length; r < y; r++)
                r in a && c(r, r, r === a.length - 1);
            else {
              var y = void 0,
                x;
              for (x in a)
                a.hasOwnProperty(x) &&
                  (void 0 !== y && c(y, r - 1), (y = x), r++);
              void 0 !== y && c(y, r - 1, !0);
            }
          return 0 === r && (t = g(this)), t;
        });
      };
      b.exports = a["default"];
    },
    function (b, a, c) {
      var e = c(2)["default"];
      a.__esModule = !0;
      c = c(5);
      var f = e(c);
      a["default"] = function (a) {
        a.registerHelper("helperMissing", function () {
          if (1 !== arguments.length)
            throw new f["default"](
              'Missing helper: "' + arguments[arguments.length - 1].name + '"'
            );
        });
      };
      b.exports = a["default"];
    },
    function (b, a, c) {
      a.__esModule = !0;
      var e = c(4);
      a["default"] = function (a) {
        a.registerHelper("if", function (a, b) {
          return (
            e.isFunction(a) && (a = a.call(this)),
            (!b.hash.includeZero && !a) || e.isEmpty(a)
              ? b.inverse(this)
              : b.fn(this)
          );
        });
        a.registerHelper("unless", function (b, c) {
          return a.helpers["if"].call(this, b, {
            fn: c.inverse,
            inverse: c.fn,
            hash: c.hash,
          });
        });
      };
      b.exports = a["default"];
    },
    function (b, a) {
      a.__esModule = !0;
      a["default"] = function (a) {
        a.registerHelper("log", function () {
          for (
            var b = [void 0], f = arguments[arguments.length - 1], d = 0;
            d < arguments.length - 1;
            d++
          )
            b.push(arguments[d]);
          d = 1;
          null != f.hash.level
            ? (d = f.hash.level)
            : f.data && null != f.data.level && (d = f.data.level);
          b[0] = d;
          a.log.apply(a, b);
        });
      };
      b.exports = a["default"];
    },
    function (b, a) {
      a.__esModule = !0;
      a["default"] = function (a) {
        a.registerHelper("lookup", function (a, b) {
          return a && a[b];
        });
      };
      b.exports = a["default"];
    },
    function (b, a, c) {
      a.__esModule = !0;
      var e = c(4);
      a["default"] = function (a) {
        a.registerHelper("with", function (a, b) {
          e.isFunction(a) && (a = a.call(this));
          var c = b.fn;
          if (e.isEmpty(a)) return b.inverse(this);
          var f = b.data;
          return (
            b.data &&
              b.ids &&
              ((f = e.createFrame(b.data)),
              (f.contextPath = e.appendContextPath(
                b.data.contextPath,
                b.ids[0]
              ))),
            c(a, {
              data: f,
              blockParams: e.blockParams([a], [f && f.contextPath]),
            })
          );
        });
      };
      b.exports = a["default"];
    },
    function (b, a, c) {
      b = c(2)["default"];
      a.__esModule = !0;
      a.registerDefaultDecorators = function (a) {
        e["default"](a);
      };
      a = c(18);
      var e = b(a);
    },
    function (b, a, c) {
      a.__esModule = !0;
      var e = c(4);
      a["default"] = function (a) {
        a.registerDecorator("inline", function (a, b, c, f) {
          var m = a;
          return (
            b.partials ||
              ((b.partials = {}),
              (m = function (f, l) {
                var m = c.partials;
                c.partials = e.extend({}, m, b.partials);
                var t = a(f, l);
                return (c.partials = m), t;
              })),
            (b.partials[f.args[0]] = f.fn),
            m
          );
        });
      };
      b.exports = a["default"];
    },
    function (b, a, c) {
      a.__esModule = !0;
      var e = c(4),
        f = {
          methodMap: ["debug", "info", "warn", "error"],
          level: "info",
          lookupLevel: function (a) {
            if ("string" == typeof a) {
              var b = e.indexOf(f.methodMap, a.toLowerCase());
              a = 0 <= b ? b : parseInt(a, 10);
            }
            return a;
          },
          log: function (a) {
            if (
              ((a = f.lookupLevel(a)),
              "undefined" != typeof console && f.lookupLevel(f.level) <= a)
            ) {
              var b = f.methodMap[a];
              console[b] || (b = "log");
              for (
                var c = arguments.length, e = Array(1 < c ? c - 1 : 0), m = 1;
                m < c;
                m++
              )
                e[m - 1] = arguments[m];
              console[b].apply(console, e);
            }
          },
        };
      a["default"] = f;
      b.exports = a["default"];
    },
    function (b, a) {
      function c(a) {
        this.string = a;
      }
      a.__esModule = !0;
      c.prototype.toString = c.prototype.toHTML = function () {
        return "" + this.string;
      };
      a["default"] = c;
      b.exports = a["default"];
    },
    function (b, a, c) {
      function e(a, b, c, e, f, g, h) {
        function l(b) {
          var d =
              1 >= arguments.length || void 0 === arguments[1]
                ? {}
                : arguments[1],
            f = h;
          return (
            !h ||
              b == h[0] ||
              (b === a.nullContext && null === h[0]) ||
              (f = [b].concat(h)),
            c(
              a,
              b,
              a.helpers,
              a.partials,
              d.data || e,
              g && [d.blockParams].concat(g),
              f
            )
          );
        }
        return (
          (l = d(c, l, a, h, e, g)),
          (l.program = b),
          (l.depth = h ? h.length : 0),
          (l.blockParams = f || 0),
          l
        );
      }
      function f() {
        return "";
      }
      function d(a, b, c, d, e, f) {
        if (a.decorator) {
          var g = {};
          b = a.decorator(b, g, c, d && d[0], e, f, d);
          l.extend(b, g);
        }
        return b;
      }
      var g = c(22)["default"],
        h = c(1)["default"];
      b = c(2)["default"];
      a.__esModule = !0;
      a.checkRevision = function (a) {
        var b = (a && a[0]) || 1,
          c = p.COMPILER_REVISION;
        if (b !== c) {
          if (b < c)
            throw new m["default"](
              "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
                p.REVISION_CHANGES[c] +
                ") or downgrade your runtime to an older version (" +
                p.REVISION_CHANGES[b] +
                ")."
            );
          throw new m["default"](
            "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" +
              a[1] +
              ")."
          );
        }
      };
      a.template = function (a, b) {
        function c(b) {
          function e(b) {
            return "" + a.main(f, b, f.helpers, f.partials, h, m, l);
          }
          var g =
              1 >= arguments.length || void 0 === arguments[1]
                ? {}
                : arguments[1],
            h = g.data;
          c._setup(g);
          !g.partial &&
            a.useData &&
            (h = (function (a, b) {
              (b && "root" in b) ||
                ((b = b ? p.createFrame(b) : {}), (b.root = a));
              return b;
            })(b, h));
          var l = void 0,
            m = a.useBlockParams ? [] : void 0;
          return (
            a.useDepths &&
              (l = g.depths
                ? b != g.depths[0]
                  ? [b].concat(g.depths)
                  : g.depths
                : [b]),
            (e = d(a.main, e, f, g.depths || [], h, m)),
            e(b, g)
          );
        }
        if (!b) throw new m["default"]("No environment passed to template");
        if (!a || !a.main)
          throw new m["default"]("Unknown template object: " + typeof a);
        a.main.decorator = a.main_d;
        b.VM.checkRevision(a.compiler);
        var f = {
          strict: function (a, b) {
            if (!(b in a))
              throw new m["default"]('"' + b + '" not defined in ' + a);
            return a[b];
          },
          lookup: function (a, b) {
            for (var c = a.length, d = 0; d < c; d++)
              if (a[d] && null != a[d][b]) return a[d][b];
          },
          lambda: function (a, b) {
            return "function" == typeof a ? a.call(b) : a;
          },
          escapeExpression: l.escapeExpression,
          invokePartial: function (c, d, e) {
            e.hash && ((d = l.extend({}, d, e.hash)), e.ids && (e.ids[0] = !0));
            c = b.VM.resolvePartial.call(this, c, d, e);
            var f = b.VM.invokePartial.call(this, c, d, e);
            null == f &&
              b.compile &&
              ((e.partials[e.name] = b.compile(c, a.compilerOptions, b)),
              (f = e.partials[e.name](d, e)));
            if (null == f)
              throw new m["default"](
                "The partial " +
                  e.name +
                  " could not be compiled when running in runtime-only mode"
              );
            if (e.indent) {
              c = f.split("\n");
              d = 0;
              for (f = c.length; d < f && (c[d] || d + 1 !== f); d++)
                c[d] = e.indent + c[d];
              f = c.join("\n");
            }
            return f;
          },
          fn: function (b) {
            var c = a[b];
            return (c.decorator = a[b + "_d"]), c;
          },
          programs: [],
          program: function (a, b, c, d, f) {
            var g = this.programs[a],
              h = this.fn(a);
            return (
              b || f || d || c
                ? (g = e(this, a, h, b, c, d, f))
                : g || (g = this.programs[a] = e(this, a, h)),
              g
            );
          },
          data: function (a, b) {
            for (; a && b--; ) a = a._parent;
            return a;
          },
          merge: function (a, b) {
            var c = a || b;
            return a && b && a !== b && (c = l.extend({}, b, a)), c;
          },
          nullContext: g({}),
          noop: b.VM.noop,
          compilerInfo: a.compiler,
        };
        return (
          (c.isTop = !0),
          (c._setup = function (c) {
            c.partial
              ? ((f.helpers = c.helpers),
                (f.partials = c.partials),
                (f.decorators = c.decorators))
              : ((f.helpers = f.merge(c.helpers, b.helpers)),
                a.usePartial && (f.partials = f.merge(c.partials, b.partials)),
                (a.usePartial || a.useDecorators) &&
                  (f.decorators = f.merge(c.decorators, b.decorators)));
          }),
          (c._child = function (b, c, d, g) {
            if (a.useBlockParams && !d)
              throw new m["default"]("must pass block params");
            if (a.useDepths && !g)
              throw new m["default"]("must pass parent depths");
            return e(f, b, a[b], c, 0, d, g);
          }),
          c
        );
      };
      a.wrapProgram = e;
      a.resolvePartial = function (a, b, c) {
        a
          ? a.call || c.name || ((c.name = a), (a = c.partials[a]))
          : (a =
              "@partial-block" === c.name
                ? c.data["partial-block"]
                : c.partials[c.name]);
        return a;
      };
      a.invokePartial = function (a, b, c) {
        var d = c.data && c.data["partial-block"];
        c.partial = !0;
        c.ids && (c.data.contextPath = c.ids[0] || c.data.contextPath);
        var e = void 0;
        c.fn &&
          c.fn !== f &&
          (function () {
            c.data = p.createFrame(c.data);
            var a = c.fn;
            e = c.data["partial-block"] = function (b) {
              var c =
                1 >= arguments.length || void 0 === arguments[1]
                  ? {}
                  : arguments[1];
              return (
                (c.data = p.createFrame(c.data)),
                (c.data["partial-block"] = d),
                a(b, c)
              );
            };
            a.partials && (c.partials = l.extend({}, c.partials, a.partials));
          })();
        void 0 === a && e && (a = e);
        if (void 0 === a)
          throw new m["default"](
            "The partial " + c.name + " could not be found"
          );
        if (a instanceof Function) return a(b, c);
      };
      a.noop = f;
      a = c(4);
      var l = h(a);
      a = c(5);
      var m = b(a),
        p = c(3);
    },
    function (b, a, c) {
      b.exports = { default: c(23), __esModule: !0 };
    },
    function (b, a, c) {
      c(24);
      b.exports = c(29).Object.seal;
    },
    function (b, a, c) {
      var e = c(25);
      c(26)("seal", function (a) {
        return function (b) {
          return a && e(b) ? a(b) : b;
        };
      });
    },
    function (b, a) {
      b.exports = function (a) {
        return "object" == typeof a ? null !== a : "function" == typeof a;
      };
    },
    function (b, a, c) {
      var e = c(27),
        f = c(29),
        d = c(32);
      b.exports = function (a, b) {
        var c = (f.Object || {})[a] || Object[a],
          m = {};
        m[a] = b(c);
        e(
          e.S +
            e.F *
              d(function () {
                c(1);
              }),
          "Object",
          m
        );
      };
    },
    function (b, a, c) {
      var e = c(28),
        f = c(29),
        d = c(30),
        g = function (a, b, c) {
          var p,
            n,
            r = a & g.F,
            t = a & g.G,
            A = a & g.S,
            u = a & g.P,
            y = a & g.B;
          a &= g.W;
          var x = t ? f : f[b] || (f[b] = {}),
            A = t ? e : A ? e[b] : (e[b] || {}).prototype;
          for (p in (t && (c = b), c))
            ((b = !r && A && p in A) && p in x) ||
              ((n = b ? A[p] : c[p]),
              (x[p] =
                t && "function" != typeof A[p]
                  ? c[p]
                  : y && b
                  ? d(n, e)
                  : a && A[p] == n
                  ? (function (a) {
                      var b = function (b) {
                        return this instanceof a ? new a(b) : a(b);
                      };
                      return (b.prototype = a.prototype), b;
                    })(n)
                  : u && "function" == typeof n
                  ? d(Function.call, n)
                  : n),
              u && ((x.prototype || (x.prototype = {}))[p] = n));
        };
      g.F = 1;
      g.G = 2;
      g.S = 4;
      g.P = 8;
      g.B = 16;
      g.W = 32;
      b.exports = g;
    },
    function (b, a) {
      var c = (b.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = c);
    },
    function (b, a) {
      var c = (b.exports = { version: "1.2.6" });
      "number" == typeof __e && (__e = c);
    },
    function (b, a, c) {
      var e = c(31);
      b.exports = function (a, b, c) {
        if ((e(a), void 0 === b)) return a;
        switch (c) {
          case 1:
            return function (c) {
              return a.call(b, c);
            };
          case 2:
            return function (c, e) {
              return a.call(b, c, e);
            };
          case 3:
            return function (c, e, g) {
              return a.call(b, c, e, g);
            };
        }
        return function () {
          return a.apply(b, arguments);
        };
      };
    },
    function (b, a) {
      b.exports = function (a) {
        if ("function" != typeof a) throw TypeError(a + " is not a function!");
        return a;
      };
    },
    function (b, a) {
      b.exports = function (a) {
        try {
          return !!a();
        } catch (b) {
          return !0;
        }
      };
    },
    function (b, a) {
      (function (c) {
        a.__esModule = !0;
        a["default"] = function (a) {
          var b = void 0 !== c ? c : window,
            d = b.Handlebars;
          a.noConflict = function () {
            return b.Handlebars === a && (b.Handlebars = d), a;
          };
        };
        b.exports = a["default"];
      }.call(
        a,
        (function () {
          return this;
        })()
      ));
    },
  ]);
});
CwH = Handlebars;
Handlebars.noConflict();
tempDefine && (define = tempDefine);
window._colwizStylesPath_ = {
  "webpdf/button-chrome.css":
    "webpdf/button-chrome.4e4b96f2f70b3c71591b0d6782b89af5.css",
  "webpdf/button-web.css":
    "webpdf/button-web.4e4b96f2f70b3c71591b0d6782b89af5.css",
  "webpdf/csl.css": "webpdf/csl.e5c8e7a9ed200f27898a0737f94f74f3.css",
  "webpdf/popup-chrome.css":
    "webpdf/popup-chrome.c6b1f466455516ec57830d9b5bb84165.css",
  "webpdf/reader-chrome.css":
    "webpdf/reader-chrome.9e40f03a691803828c465bbb4d873b20.css",
  "webpdf/reader-desktop.css":
    "webpdf/reader-desktop.9e40f03a691803828c465bbb4d873b20.css",
  "webpdf/reader-web.css":
    "webpdf/reader-web.9e40f03a691803828c465bbb4d873b20.css",
};
(function (b) {
  b[(b.Chrome = 0)] = "Chrome";
  b[(b.Library = 1)] = "Library";
  b[(b.Publisher = 2)] = "Publisher";
  b[(b.Webimporter = 3)] = "Webimporter";
  b[(b.Drive = 4)] = "Drive";
  b[(b.Firefox = 5)] = "Firefox";
  b[(b.LibraryDesktop = 6)] = "LibraryDesktop";
  b[(b.OpenDrive = 7)] = "OpenDrive";
})(CWPDFReaderMode || (CWPDFReaderMode = {}));
var publisher = window.publisher,
  publishersList = {
    colwiz: {
      name: "colwiz",
      appIds: { stage: null, production: null },
      logoClass: "cw-logo",
      pubModeBtnsTxt: {
        view: "View & annotate PDF",
        add: "Add to wizdom.ai Library",
        viewHover:
          "Read, annotate and save this article using the wizdom.ai Interactive PDF Reader",
        addHover:
          "Save this article to your wizdom.ai library to read and reference anywhere",
      },
      readerOptions: {
        sideBarVisible: !1,
        tools: {
          dragPage: !0,
          textSelection: !0,
          drawHighlight: !0,
          eraser: !0,
          pencil: !0,
          rectangle: !0,
          ellipse: !0,
          arrow: !0,
          line: !0,
          comments: !0,
          download: !0,
        },
        fullScreenMode: !0,
        searchBarVisible: !0,
        addToLibraryShow: !0,
        referenceTabShow: !1,
        shareTabShow: !1,
        citeTabShow: !1,
        readerSamePage: !0,
        showClosedAccessmessage: !0,
      },
      id: "colwiz",
      buttonStyle: "default",
      showAddButton: !1,
    },
  };
if (void 0 !== CWPDFReaderConfig)
  var readerModeTmp = CWPDFReaderConfig.readerMode;
var colwizOptions_1,
  CWPDFReaderConfigClass = (function () {
    function b() {
      this.Uid = "";
      this.readerMode =
        void 0 !== CWApiHandler
          ? CWApiHandler.injectedConfig.readerMode
          : CWPDFReaderMode.Publisher;
      this.sentryDomain = "www.wizdom.ai";
      this.importerDomain = "webpdf";
      this.docsPluginEnable = !0;
      this.debug = !1;
      this.publicFace = "public";
      this.cwURL = "https://app.wizdom.ai";
      this.webDomain = "https://www.wizdom.ai";
      this.staticDomainURL = "https://cdn.wizdom.ai/static";
      this.assetsDomainURL = "https://cdn.wizdom.ai/assets";
      this.version = "2019.04.11";
      this.idURL = "https://id.wizdom.ai";
      this.parser = "";
      this.domain = "royalsocietypublishing";
      this.piwikSiteId = 2;
      this.extensionSpecificFiles = {
        readerSource: "../js/main/04a_pdfreader_chrome.js?1379054322837",
        readerStyleSource:
          "../css/" + window._colwizStylesPath_["webpdf/reader-chrome.css"],
      };
      this.FirefoxSpecificFiles = {
        readerSource:
          "resource://jid1-2z9j1M3WgqkBZwww-at-jetpack/colwizwebimporter/data/js/main/04a_pdfreader_firefox.js?1379054322837",
        readerStyleSource:
          "resource://jid1-2z9j1M3WgqkBZwww-at-jetpack/colwizwebimporter/data/css/reader-chrome.css?1379054322837",
      };
      this.pubModeBtnsTxt = {
        view: "Read & annotate PDF",
        add: "Add to wizdom.ai",
        viewHover:
          "Read, annotate and save \r\n this article using the wizdom.ai \r\n Interactive PDF Reader",
        addHover:
          "Save this article to your \r\n wizdom.ai library to read \r\n and reference anywhere",
      };
      this.extModeBtnsTxt = {
        view: "Read & annotate PDF",
        add: "Add to wizdom.ai",
      };
    }
    return (
      (b.prototype.isCoreMode = function () {
        return (
          CWPDFReaderConfig.readerMode === CWPDFReaderMode.Library ||
          CWPDFReaderConfig.readerMode === CWPDFReaderMode.Drive
        );
      }),
      (b.prototype.isDesktopMode = function () {
        return (
          CWPDFReaderConfig.readerMode === CWPDFReaderMode.LibraryDesktop ||
          CWPDFReaderConfig.readerMode === CWPDFReaderMode.OpenDrive
        );
      }),
      (b.prototype.checkReaderMode = function (a) {
        var b;
        return (
          CWPDFReaderConfig.readerMode === CWPDFReaderMode.Drive
            ? (b = "drive")
            : CWPDFReaderConfig.readerMode === CWPDFReaderMode.Library
            ? (b = "library")
            : CWPDFReaderConfig.readerMode === CWPDFReaderMode.Chrome
            ? (b = "chrome")
            : CWPDFReaderConfig.readerMode === CWPDFReaderMode.Publisher
            ? (b = "publisher")
            : CWPDFReaderConfig.readerMode === CWPDFReaderMode.Firefox
            ? (b = "firefox")
            : CWPDFReaderConfig.readerMode === CWPDFReaderMode.LibraryDesktop
            ? (b = "librarydesktop")
            : CWPDFReaderConfig.readerMode === CWPDFReaderMode.OpenDrive &&
              (b = "opendrive"),
          a ? b === a : b
        );
      }),
      (b.prototype.setPublisher = function (a) {
        publisher.appId = a;
      }),
      b
    );
  })();
if (
  ((CWPDFReaderConfig = new CWPDFReaderConfigClass()),
  (CWPDFReaderConfig.readerMode =
    -1 !== location.search.indexOf("mode=chrome")
      ? CWPDFReaderMode.Chrome
      : CWPDFReaderConfig.readerMode),
  void 0 !== readerModeTmp && (CWPDFReaderConfig.readerMode = readerModeTmp),
  -1 !== location.pathname.indexOf("/library/reader")
    ? ((CWPDFReaderConfig.readerMode = CWPDFReaderMode.Library),
      (publishersList.colwiz.readerOptions.referenceTabShow = !0))
    : -1 !== location.pathname.indexOf("/drive/reader") &&
      (CWPDFReaderConfig.readerMode = CWPDFReaderMode.Drive),
  (CWPDFReaderConfig.isCoreMode() || CWPDFReaderConfig.isDesktopMode()) &&
    (CWPDFReaderConfig.cwURL = location.protocol + "//" + location.host),
  CWPDFReaderConfig.checkReaderMode("publisher"))
)
  try {
    (colwizOptions_1 = window.parent.colwizOptions) &&
      (CWPDFReaderConfig.setPublisher(colwizOptions_1.appId),
      publisher &&
        ((CWPDFReaderConfig.pubModeBtnsTxt.view =
          publisher.pubModeBtnsTxt.view),
        (CWPDFReaderConfig.pubModeBtnsTxt.add = publisher.pubModeBtnsTxt.add),
        (CWPDFReaderConfig.pubModeBtnsTxt.viewHover =
          publisher.pubModeBtnsTxt.viewHover),
        (CWPDFReaderConfig.pubModeBtnsTxt.addHover =
          publisher.pubModeBtnsTxt.addHover)));
  } catch (e$$952) {
    publisher = publishersList.colwiz;
  }
else
  (publisher = publishersList.colwiz),
    CWPDFReaderConfig.isCoreMode()
      ? (publisher.readerOptions.addToLibraryShow = !1)
      : CWPDFReaderConfig.isDesktopMode() &&
        ((publisher.readerOptions.readerSamePage = !1),
        (publisher.readerOptions.hideReaderLogo = !0),
        (publisher.readerOptions.hideDownloadButton = !0),
        (publisher.readerOptions.hideReaderAvater = !0),
        (publisher.readerOptions.addToLibraryShow = !1));
var CWMetaData = function (b) {
    this.authors =
      this.title =
      this.refLink =
      this.pubLink =
      this.pdfLink =
      this.identifierType =
      this.identifier =
        "";
    this.psp = this.index = 0;
    this.year =
      this.publisher =
      this.journal =
      this.issn =
      this.type =
      this.data =
      this.dataUrl =
        "";
    this.listingPage = this.openaccess = !1;
    this.domain = this.otherInfo = this.affiliation = this.keywords = "";
    this.identifier = b.identifier ? b.identifier : "";
    this.identifierType = b.identifierType ? b.identifierType : "";
    this.pdfLink = b.pdfLink ? b.pdfLink : "";
    this.pubLink = b.pubLink ? b.pubLink : "";
    this.refLink = b.refLink ? b.refLink : "";
    this.title = b.title ? b.title : "";
    this.authors = b.authors ? b.authors : "";
    this.index = b.index ? b.index : 0;
    this.psp = b.psp ? b.psp : 0;
    this.dataUrl = b.dataUrl ? b.dataUrl : "";
    this.data = b.data ? b.data : "";
    this.type = b.type ? b.type : "";
    this.issn = b.issn ? b.issn : "";
    this.journal = b.journal ? b.journal : "";
    this.publisher = b.publisher ? b.publisher : "";
    this.year = b.year ? b.year : "";
    this.openaccess = !!b.openaccess && b.openaccess;
    this.listingPage = !!b.listingPage && b.listingPage;
    this.keywords = b.keywords ? b.keywords : "";
    this.affiliation = b.affiliation ? b.affiliation : "";
    this.otherInfo = b.otherInfo ? b.otherInfo : "";
    this.domain = CWPDFReaderConfig.importerDomain;
  },
  isMobileDevice = function () {
    return void 0 !== window.orientation;
  };
window.isCwMobile = {
  Windows: function () {
    return /IEMobile/i.test(navigator.userAgent);
  },
  Android: function () {
    return /Android/i.test(navigator.userAgent);
  },
  BlackBerry: function () {
    return /BlackBerry/i.test(navigator.userAgent);
  },
  iOS: function () {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  },
  any: function () {
    return this.Android() || this.BlackBerry() || this.iOS() || this.Windows();
  },
};
var mobileConfigClass = function () {
    this.ZOOM_LEVEL = 130;
    this.SCALE = 3;
    this.ASPECT_RATIO = 1 / this.SCALE;
    this.MAX_ZOOM = 200;
    this.MIN_ZOOM = 120;
    this.ZOOM_STEP = 20;
  },
  mobileConfig = new mobileConfigClass(),
  CWloggerClass = (function () {
    function b() {
      this.headingArea =
        this.textArea =
        this.innerDiv =
        this.button =
        this.outterDiv =
          null;
      this.init();
    }
    return (
      (b.prototype.init = function (a) {
        var b = this;
        if (0 < CwZ("#CWDailogOverlay").length)
          (this.outterDiv = CwZ("#CWDailogOverlay")),
            (this.button = this.outterDiv.find("#btnCancel")),
            (this.innerDiv = this.outterDiv.find(".cw-dailog")),
            (this.headingArea = this.outterDiv.find("h1")),
            (this.textArea = this.outterDiv.find("p")),
            this.button.off("click").on("click", function () {
              return b.close();
            }),
            a && a();
        else {
          var e = this;
          setTimeout(function () {
            e.init();
          }, 3e3);
        }
      }),
      (b.prototype.logConsole = function (a, b, e) {
        e && this.dialog(a, b);
      }),
      (b.prototype.dialog = function (a, b) {
        var e = this;
        if (this.outterDiv && 0 < this.outterDiv.length)
          this.reset(),
            b && this.headingArea.text(b),
            a && this.textArea.text(a),
            "Sign up Successful" === b || "Log in Successful" === b
              ? this.innerDiv.removeClass("cw-error").addClass("cw-success")
              : this.innerDiv.removeClass("cw-success").addClass("cw-error"),
            CwZ("#CWDailogOverlay").is(":visible") || this.outterDiv.show();
        else {
          var f = CWHtmlStructure.getSignupDialog();
          CwZ("body").append(f);
          this.init(function () {
            e.reset();
            e.dialog(a, b);
          });
        }
      }),
      (b.prototype.reset = function () {
        this.headingArea.text("");
        this.textArea.text("");
      }),
      (b.prototype.close = function () {
        0 < this.outterDiv.length && (this.outterDiv.hide(), this.reset());
      }),
      b
    );
  })(),
  CWlogger = new CWloggerClass(),
  CWUtilsClass = (function () {
    function b() {
      this.isIframe = window !== window.parent;
      this.bParserTest = !1;
      this.browser = {
        adobeAir: !1,
        ie: !1,
        ie9: !1,
        ie8: !1,
        ie7: !1,
        ie6: !1,
        chrome: !1,
        firefox: !1,
        opera: !1,
        safari: !1,
      };
      this.sentry = {};
      this.ajax = {
        post: function (a, b, e, f) {
          void 0 === e && (e = function () {});
          void 0 === f && (f = function () {});
          void 0 === b && (b = {});
          CwZ.ajax({
            url: a,
            type: "POST",
            dataType: "text",
            data: b,
            success: e,
            error: f,
          });
        },
        get: function (a, b, e, f) {
          void 0 === e && (e = function () {});
          void 0 === f && (f = function () {});
          void 0 === b && (b = {});
          CwZ.ajax({
            url: a,
            type: "GET",
            dataType: "text",
            data: b,
            success: e,
            error: f,
          });
        },
      };
    }
    return (
      (b.prototype.removeTags = function (a) {
        return a.replace(
          RegExp(
            "(\\[(CSA|CrossRef|PubMed|Web of Science \u00ae|Taylor & Francis Online|Google Scholar)\\],?)",
            "g"
          ),
          ""
        );
      }),
      (b.prototype.matchDoi = function (a) {
        return a
          ? (a = a.match(/\b(10[.][0-9]{4,}(?:[.][0-9]+)*\/(?:\S)+)/g))
            ? a[0]
            : null
          : null;
      }),
      (b.prototype.findDoi = function (a, b, e) {
        a = CwZ(a)
          .find("." + b)
          .text();
        return !a && e && (a = e), CWUtils.matchDoi(a);
      }),
      (b.prototype.isValidURL = function (a) {
        return !!/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(
          a
        );
      }),
      (b.prototype.getPageUrl = function () {
        return window.parent.location.href;
      }),
      (b.prototype.getPageDomain = function () {
        var a = window.parent.location;
        return a.protocol + "//" + a.host;
      }),
      (b.prototype.getDomainFromURL = function (a) {
        a = a.replace(/^(.*\/\/)(.*?)(\/.*)$/, "$2");
        var b = /(.*?)(\w+)(\.[a-z]{2,3})(\.[a-z]{2})?$/;
        return (
          a.replace(b, "$1").replace(/\./g, ""), (a = a.replace(b, "$2")), a
        );
      }),
      (b.prototype.getQueryParam = function (a, b) {
        void 0 === b && (b = location.search);
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var e = new RegExp("[\\?&]" + a + "=([^&#]*)").exec(b);
        return null == e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "));
      }),
      (b.prototype.getFileTitle = function (a) {
        var b = a.pdfLink,
          e = b.indexOf("#"),
          f = b.indexOf("?"),
          e = Math.min(0 < e ? e : b.length, 0 < f ? f : b.length),
          b = b.substring(b.lastIndexOf("/", e) + 1, e),
          e = "";
        "" !== a.identifier &&
          ("number" == typeof a.identifier &&
            (a.identifier = a.identifier.toString()),
          (e = a.identifier.replace(/[\\\/:\*\?\"<>|]/g, "")));
        a = "";
        return (
          (a = 0 <= e.indexOf(b) ? e : e + "_" + b),
          180 < a.length && (a = a.substr(0, 180)),
          0 <= a.toLowerCase().indexOf(".pdf") ? a : a + ".pdf"
        );
      }),
      (b.prototype.updateScrollbar = function (a, b) {
        CwZ(a).each(function () {
          var a = CwZ(this),
            f = !1;
          a.is(":visible") || ((f = !0), a.show());
          f && a.hide();
          b && b(a);
        });
      }),
      (b.prototype.getEditDistance = function (a, b) {
        if (0 === a.length) return b.length;
        if (0 === b.length) return a.length;
        var e,
          f,
          d = [];
        for (e = 0; e <= b.length; e++) d[e] = [e];
        for (f = 0; f <= a.length; f++) d[0][f] = f;
        for (e = 1; e <= b.length; e++)
          for (f = 1; f <= a.length; f++)
            b.charAt(e - 1) === a.charAt(f - 1)
              ? (d[e][f] = d[e - 1][f - 1])
              : (d[e][f] = Math.min(
                  d[e - 1][f - 1] + 1,
                  Math.min(d[e][f - 1] + 1, d[e - 1][f] + 1)
                ));
        return d[b.length][a.length];
      }),
      (b.prototype.moveScrollbarTo = function (a, b, e, f) {
        void 0 === e && (e = !0);
        CwZ(a).each(function () {
          var a = CwZ(this);
          e ? a.animate({ scrollTop: b }, 400) : a.scrollTop(parseInt(b, 10));
        });
      }),
      (b.prototype.copyToClipboard = function (a) {
        var b,
          e,
          f,
          d = "INPUT" === a.tagName || "TEXTAREA" === a.tagName;
        d
          ? ((f = a), (b = a.selectionStart), (e = a.selectionEnd))
          : ((f = document.getElementById("_hiddenCopyText_")),
            f ||
              ((f = document.createElement("textarea")),
              (f.style.position = "absolute"),
              (f.style.left = "-10000px"),
              (f.id = "_hiddenCopyText_"),
              CwZ(a).append(f)),
            (f.textContent = a.textContent));
        var g,
          h = document.activeElement;
        f.focus();
        f.setSelectionRange(0, f.value.length);
        try {
          g = document.execCommand("copy");
        } catch (l) {
          g = !1;
        }
        return (
          h && "function" == typeof h.focus && h.focus(),
          d ? a.setSelectionRange(b, e) : (f.textContent = ""),
          g
        );
      }),
      (b.prototype.increaseProgress = function () {
        !(function c() {
          setTimeout(function () {
            if (CwZ("#cw-loader").is(":visible")) {
              var b =
                (CwZ("#cw-loader .cw-bar").width() /
                  CwZ(".cw-progress").width()) *
                100;
              CwZ("#cw-loader .cw-redirecting").hasClass("cw-hidden") &&
                ((void 0 !== CWPDFReader_Publisher &&
                  !CWPDFReader_Publisher.getInstance().progressComplete) ||
                  (void 0 !== CWPDFReader && !CWPDFReader.progressComplete)) &&
                (50 > b
                  ? (CwZ(".cw-progress").addClass("cw-shine"), (b += 12.5))
                  : 75 > b
                  ? (b += 6.25)
                  : 99 > b + 3
                  ? (b += 3)
                  : 99 < b + 3 && 100 !== b && (b = 99),
                CwZ("#cw-loader .cw-bar").width(b + "%"),
                CWUtils.log("progress: " + b),
                99 > b && c());
            } else CwZ("#cw-loader .cw-bar").width("0%");
          }, 1e3);
        })();
      }),
      (b.prototype.moveScrollbarToXY = function (a, b, e) {
        CwZ(a).each(function () {
          var a = CwZ(this),
            d = a.scrollTop(),
            g = a.scrollLeft();
          a.scrollTop(d + -1 * e, 60);
          a.scrollLeft(g + -1 * b, 60);
        });
      }),
      (b.prototype.convertStrToBlob = function (a) {
        var b;
        try {
          b = new Blob([a]);
        } catch (e) {
          (window.BlobBuilder =
            window.BlobBuilder ||
            window.WebKitBlobBuilder ||
            window.MozBlobBuilder),
            (b = new BlobBuilder()),
            b.append(a),
            (b = b.getBlob());
        }
        return b;
      }),
      (b.prototype.log = function (a) {
        a = "object" == typeof a ? a.message : a;
        CWPDFReaderConfig.debug &&
          this.browser.ie7 &&
          (this.browser.ie8 || this.browser.webkit) &&
          console.log("log:" + a);
      }),
      (b.prototype.generateEntLinks = function (a, b, e, f) {
        void 0 === f && (f = !0);
        (void 0 !== e && "" !== e) ||
          (e = parseInt(a, 16).toString().substring(0, 3));
        var d;
        e = (function (a) {
          switch (a) {
            case "100":
            case "101":
              return "/profile";
            case "109":
              return "/publication";
            case "110":
              return "/publisher";
            case "111":
              return "/institute";
            case "161":
              return "/group";
            case "163":
              return "/journal";
            case "199":
              return "/author";
            default:
              return "";
          }
        })(e);
        return (
          "" === b.trim() && (b = e.substring(1)),
          f && (e = "/public" + e),
          e +
            "/" +
            a +
            "/" +
            ((d = b),
            encodeURIComponent(
              d.toLowerCase().substring(0, 500).trim().replace(/\s+/g, "_")
            ))
        );
      }),
      (b.prototype.getAvatarColor = function (a) {
        try {
          var b =
              "#626be0 #e06277 #b467da #e09862 #1abc9c #f44336 #3498db #673ab7 #34495e #8bc24a #27ae60 #2980b9 #8e44ad #6c3244 #f1c40f #2266e6 #e74c3c #50e3c2 #4498ae #f39c12 #2c5e1c #ea1e63 #62b6e0 #484d9c".split(
                " "
              ),
            e = " A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(
              " "
            ),
            f = e.slice();
          f.shift();
          var d = "";
          return (
            e.forEach(function (e, g) {
              f.forEach(function (f, g) {
                a === e + f && (d = b[g % b.length]);
              });
            }),
            d
          );
        } catch (g) {
          return "#000000";
        }
      }),
      (b.prototype.trim = function (a) {
        return (null != a && void 0 !== a) || (a = ""), CwZ.trim(a);
      }),
      (b.prototype.stripTags = function (a) {
        return (a = a.replace(/(<([^>]+)>)/gi, "")), a;
      }),
      (b.prototype.timeDifference = function (a, b, e) {
        void 0 === b && (b = "Updated ");
        void 0 === e && (e = "");
        a = new Date(a);
        var f = (new Date().getTime() - a.getTime()) / 1e3,
          d = Math.round(f / 60),
          g = Math.round(d / 60),
          h = Math.round(g / 24);
        return (
          (f = Math.round(f)),
          (d = Math.round(d)),
          (g = Math.round(g)),
          (h = Math.round(h)),
          (b +=
            0 < h
              ? 7 < h
                ? "JanFebMarAprMayJunJulAugSepOctNovDec".substr(
                    3 * a.getMonth(),
                    3
                  ) +
                  " " +
                  a.getDate() +
                  ", " +
                  a.getFullYear()
                : h + " day" + (1 < h ? "s" : "") + " ago"
              : 0 < g
              ? g + " hour" + (1 < g ? "s" : "") + " ago"
              : 0 < d
              ? d + " minute" + (1 < d ? "s" : "") + " ago"
              : 10 > f
              ? "Few secs ago"
              : f + " sec" + (1 < f ? "s" : "") + " ago"),
          (b += e),
          b
        );
      }),
      (b.prototype.Compare = function (a, b) {
        return a <= b + 2 && b - 2 <= a;
      }),
      (b.prototype.utf16to8 = function (a) {
        var b, e, f, d;
        b = "";
        f = a.length;
        for (e = 0; e < f; e++)
          (d = a.charCodeAt(e)),
            1 <= d && 127 >= d
              ? (b += a.charAt(e))
              : (2047 < d
                  ? ((b += String.fromCharCode(224 | ((d >> 12) & 15))),
                    (b += String.fromCharCode(128 | ((d >> 6) & 63))))
                  : (b += String.fromCharCode(192 | ((d >> 6) & 31))),
                (b += String.fromCharCode(128 | ((d >> 0) & 63))));
        return b;
      }),
      (b.prototype.utf8to16 = function (a) {
        var b, e, f, d, g, h;
        b = "";
        f = a.length;
        for (e = 0; e < f; )
          switch (((d = a.charCodeAt(e++)), d >> 4)) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
              b += a.charAt(e - 1);
              break;
            case 12:
            case 13:
              g = a.charCodeAt(e++);
              b += String.fromCharCode(((31 & d) << 6) | (63 & g));
              break;
            case 14:
              (g = a.charCodeAt(e++)),
                (h = a.charCodeAt(e++)),
                (b += String.fromCharCode(
                  ((15 & d) << 12) | ((63 & g) << 6) | ((63 & h) << 0)
                ));
          }
        return b;
      }),
      (b.prototype.stringToByteArray = function (a) {
        var b,
          e,
          f = new (void 0 !== window.Uint8Array ? Uint8Array : Array)(a.length);
        b = 0;
        for (e = a.length; b < e; ++b) f[b] = 255 & a.charCodeAt(b);
        return f;
      }),
      (b.prototype.decompress = function (a) {
        a = a.replace(/\n/g, "");
        a = a.replace(/ \/ /g, "/");
        a = atob(a);
        a = a.split("").map(function (a) {
          return a.charCodeAt(0);
        });
        var b = new Zlib.Gunzip(a).decompress();
        a = [];
        for (var e = 0; e < b.byteLength; e++)
          a.push(String.fromCharCode(b[e]));
        a = CWUtils.utf8to16(a.join(""));
        try {
          for (
            var f = JSON.parse(a), e = 0;
            e < f.List.MemberData.length;
            e++
          ) {
            for (b = 0; b < f.List.MemberData[e].data.Graphics.length; b++)
              if (!f.List.MemberData[e].data.Graphics[b].hasOwnProperty("SHL"))
                for (
                  var d = "AEFHRS".split(""), g = [], h = 0;
                  h < d.length;
                  h++
                )
                  if (
                    f.List.MemberData[e].data.Graphics[b].hasOwnProperty(d[h])
                  ) {
                    for (
                      var g =
                          f.List.MemberData[e].data.Graphics[b][d[h]].split(
                            ","
                          ),
                        l = 0;
                      l < g.length;
                      l++
                    )
                      g[l] = Math.round(g[l] / 2);
                    f.List.MemberData[e].data.Graphics[b][d[h]] = g.join(",");
                    break;
                  }
            for (b = 0; b < f.List.MemberData[e].data.Comments.length; b++) {
              for (
                var m = f.List.MemberData[e].data.Comments[b].Pos.split(","),
                  d = 0;
                d < m.length;
                d++
              )
                m[d] = Math.round(m[d] / 2);
              f.List.MemberData[e].data.Comments[b].Pos = m.join(",");
            }
            a = JSON.stringify(f);
          }
        } catch (p) {
          CWUtils.log(p);
        }
        return a;
      }),
      (b.prototype.compress = function (a) {
        try {
          for (
            var b = JSON.parse(a), e = 0;
            e < b.List.MemberData.length;
            e++
          ) {
            for (var f = 0; f < b.List.MemberData[e].data.Graphics.length; f++)
              if (!b.List.MemberData[e].data.Graphics[f].hasOwnProperty("SHL"))
                for (
                  var d = "AEFHRS".split(""), g = [], h = 0;
                  h < d.length;
                  h++
                )
                  if (
                    b.List.MemberData[e].data.Graphics[f].hasOwnProperty(d[h])
                  ) {
                    for (
                      var g =
                          b.List.MemberData[e].data.Graphics[f][d[h]].split(
                            ","
                          ),
                        l = 0;
                      l < g.length;
                      l++
                    )
                      g[l] = Math.round(2 * g[l]);
                    b.List.MemberData[e].data.Graphics[f][d[h]] = g.join(",");
                    break;
                  }
            for (f = 0; f < b.List.MemberData[e].data.Comments.length; f++) {
              for (
                var m = b.List.MemberData[e].data.Comments[f].Pos.split(","),
                  d = 0;
                d < m.length;
                d++
              )
                m[d] = Math.round(2 * m[d]);
              b.List.MemberData[e].data.Comments[f].Pos = m.join(",");
            }
            a = JSON.stringify(b);
          }
        } catch (p) {
          CWUtils.log(p);
        }
        e = CWUtils.stringToByteArray(CWUtils.utf16to8(a));
        a = new Zlib.Gzip(e).compress();
        b = "";
        for (e = 0; e < a.byteLength; e++) b += String.fromCharCode(a[e]);
        return (b = btoa(b)), CWUtils.insertBN(b);
      }),
      (b.prototype.insertBN = function (a) {
        for (var b = ""; 0 < a.length; ) {
          var e = a.slice(0, 76),
            b = b + e;
          76 === e.length && (b += "\n");
          a = a.replace(e, "");
        }
        return b;
      }),
      (b.prototype.writeCookie = function (a, b, e) {
        var f = "";
        e &&
          ((f = new Date()),
          f.setTime(f.getTime() + 864e5 * e),
          (f = "; expires=" + f.toGMTString()));
        document.cookie = a + "=" + b + f + "; path=/";
      }),
      (b.prototype.readCookie = function (a) {
        a += "=";
        for (var b = document.cookie.split(";"), e = 0; e < b.length; e++) {
          for (var f = b[e]; " " === f.charAt(0); )
            f = f.substring(1, f.length);
          if (0 === f.indexOf(a)) return f.substring(a.length, f.length);
        }
        return null;
      }),
      (b.prototype.deleteCookie = function (a) {
        this.writeCookie(a, "", -1);
      }),
      b
    );
  })(),
  Base64 = {
    _keyStr:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (b) {
      try {
        var a = "",
          c = void 0,
          e = void 0,
          f = void 0,
          d = void 0,
          g = void 0,
          h = void 0,
          l = void 0,
          m = 0;
        for (b = Base64._utf8_encode(b); m < b.length; )
          (c = b.charCodeAt(m++)),
            (e = b.charCodeAt(m++)),
            (f = b.charCodeAt(m++)),
            (d = c >> 2),
            (g = ((3 & c) << 4) | (e >> 4)),
            (h = ((15 & e) << 2) | (f >> 6)),
            (l = 63 & f),
            isNaN(e) ? (h = l = 64) : isNaN(f) && (l = 64),
            (a =
              a +
              this._keyStr.charAt(d) +
              this._keyStr.charAt(g) +
              this._keyStr.charAt(h) +
              this._keyStr.charAt(l));
        return a;
      } catch (p) {
        return "";
      }
    },
    decode: function (b) {
      var a,
        c,
        e,
        f,
        d,
        g = "",
        h = 0;
      for (b = b.replace(/[^A-Za-z0-9\+\/\=]/g, ""); h < b.length; )
        (a = this._keyStr.indexOf(b.charAt(h++))),
          (c = this._keyStr.indexOf(b.charAt(h++))),
          (f = this._keyStr.indexOf(b.charAt(h++))),
          (d = this._keyStr.indexOf(b.charAt(h++))),
          (a = (a << 2) | (c >> 4)),
          (c = ((15 & c) << 4) | (f >> 2)),
          (e = ((3 & f) << 6) | d),
          (g += String.fromCharCode(a)),
          64 !== f && (g += String.fromCharCode(c)),
          64 !== d && (g += String.fromCharCode(e));
      return (g = Base64._utf8_decode(g)), g;
    },
    _utf8_encode: function (b) {
      b = b.replace(/\r\n/g, "\n");
      for (var a = "", c = 0; c < b.length; c++) {
        var e = b.charCodeAt(c);
        128 > e
          ? (a += String.fromCharCode(e))
          : (127 < e && 2048 > e
              ? (a += String.fromCharCode((e >> 6) | 192))
              : ((a += String.fromCharCode((e >> 12) | 224)),
                (a += String.fromCharCode(((e >> 6) & 63) | 128))),
            (a += String.fromCharCode((63 & e) | 128)));
      }
      return a;
    },
    _utf8_decode: function (b) {
      for (var a, c, e = "", f = 0, d = 0; f < b.length; )
        (a = b.charCodeAt(f)),
          128 > a
            ? ((e += String.fromCharCode(a)), f++)
            : 191 < a && 224 > a
            ? ((c = b.charCodeAt(f + 1)),
              (e += String.fromCharCode(((31 & a) << 6) | (63 & c))),
              (f += 2))
            : ((c = b.charCodeAt(f + 1)),
              (d = b.charCodeAt(f + 2)),
              (e += String.fromCharCode(
                ((15 & a) << 12) | ((63 & c) << 6) | (63 & d)
              )),
              (f += 3));
      return e;
    },
  },
  CWUtils = new CWUtilsClass();
this.CwH = this.CwH || {};
this.CwH.templates = this.CwH.templates || {};
this.CwH.templates.getAuthorPopup = CwH.template({
  1: function (b, a, c, e, f) {
    var d;
    return (
      "                            " +
      (null !=
      (d = c["if"].call(null != a ? a : b.nullContext || {}, f && f.index, {
        name: "if",
        hash: {},
        fn: b.program(2, f, 0),
        inverse: b.noop,
        data: f,
      }))
        ? d
        : "") +
      "\n                            <span>" +
      b.escapeExpression(b.lambda(a, a)) +
      "</span>\n"
    );
  },
  2: function (b, a, c, e, f) {
    return "<span>,</span>";
  },
  4: function (b, a, c, e, f) {
    var d;
    e = null != a ? a : b.nullContext || {};
    var g = c.helperMissing;
    b = b.escapeExpression;
    return (
      '&hellip;<a href="' +
      b(
        ((d =
          null != (d = c.authorBaseURL || (null != a ? a.authorBaseURL : a))
            ? d
            : g),
        "function" == typeof d
          ? d.call(e, { name: "authorBaseURL", hash: {}, data: f })
          : d)
      ) +
      '?applet=affiliation" target="_blank" class="more-plus">+' +
      b(
        ((d = null != (d = c.moreAffs || (null != a ? a.moreAffs : a)) ? d : g),
        "function" == typeof d
          ? d.call(e, { name: "moreAffs", hash: {}, data: f })
          : d)
      ) +
      "</a>\n"
    );
  },
  6: function (b, a, c, e, f) {
    var d;
    return (
      (null !=
      (d = c["if"].call(null != a ? a : b.nullContext || {}, f && f.index, {
        name: "if",
        hash: {},
        fn: b.program(7, f, 0),
        inverse: b.noop,
        data: f,
      }))
        ? d
        : "") +
      "                            <span>" +
      b.escapeExpression(b.lambda(a, a)) +
      "</span>\n"
    );
  },
  7: function (b, a, c, e, f) {
    return "                                ,\n";
  },
  9: function (b, a, c, e, f) {
    var d;
    e = null != a ? a : b.nullContext || {};
    var g = c.helperMissing;
    b = b.escapeExpression;
    return (
      '                            ...<a href="' +
      b(
        ((d =
          null != (d = c.authorBaseURL || (null != a ? a.authorBaseURL : a))
            ? d
            : g),
        "function" == typeof d
          ? d.call(e, { name: "authorBaseURL", hash: {}, data: f })
          : d)
      ) +
      '#disciplines" target="_blank" class="more-plus">+' +
      b(
        ((d =
          null != (d = c.moreDiscipline || (null != a ? a.moreDiscipline : a))
            ? d
            : g),
        "function" == typeof d
          ? d.call(e, { name: "moreDiscipline", hash: {}, data: f })
          : d)
      ) +
      "</a>\n"
    );
  },
  11: function (b, a, c, e, f) {
    return "s";
  },
  13: function (b, a, c, e, f) {
    var d;
    return (
      '                 <a data-tab="cw-tab-coauthors" href="javascript:;"><span><b class="t_AuthCount">' +
      b.escapeExpression(
        b.lambda(null != (d = null != a ? a.authorObj : a) ? d.count2 : d, a)
      ) +
      "</b> Co-Author" +
      (null !=
      (d = (c.ifCond || (a && a.ifCond) || c.helperMissing).call(
        null != a ? a : b.nullContext || {},
        null != (d = null != a ? a.authorObj : a) ? d.count2 : d,
        ">",
        1,
        {
          name: "ifCond",
          hash: {},
          fn: b.program(11, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      "</span></a>\n"
    );
  },
  15: function (b, a, c, e, f) {
    var d;
    e = b.lambda;
    var g = b.escapeExpression;
    return (
      '                        <div class="auth-pub-row">\n                            <i class="icon-pub"></i>\n                            <div class="details">\n                                <a href="' +
      g(e(null != a ? a.pubBaseURL : a, a)) +
      '" target="_blank" class="pub-title">' +
      g(e(null != a ? a.title : a, a)) +
      '</a>\n                                <p class="authors">' +
      g(e(null != a ? a.authors : a, a)) +
      "</p>\n" +
      (null !=
      (d = c["if"].call(
        null != a ? a : b.nullContext || {},
        null != a ? a.year : a,
        {
          name: "if",
          hash: {},
          fn: b.program(16, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      "                            </div>\n                        </div>\n"
    );
  },
  16: function (b, a, c, e, f) {
    c = b.lambda;
    b = b.escapeExpression;
    return (
      "                                    <p>\n                                        <span>" +
      b(c(null != a ? a.year : a, a)) +
      ", </span>\n                                        <span>" +
      b(c(null != a ? a.journal : a, a)) +
      "</span>\n                                    </p>\n"
    );
  },
  18: function (b, a, c, e, f) {
    var d, g;
    e = null != a ? a : b.nullContext || {};
    return (
      '            <div data-tab="cw-tab-coauthors" style="display: none;">\n                <div class="co-auth-content">\n' +
      (null !=
      (d = c.each.call(
        e,
        null != (d = null != a ? a.authorObj : a) ? d.CoAuthors : d,
        {
          name: "each",
          hash: {},
          fn: b.program(19, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      '                </div>\n                <a href="' +
      b.escapeExpression(
        ((g =
          null != (g = c.authorBaseURL || (null != a ? a.authorBaseURL : a))
            ? g
            : c.helperMissing),
        "function" == typeof g
          ? g.call(e, { name: "authorBaseURL", hash: {}, data: f })
          : g)
      ) +
      '#coauthors" target="_blank" class="view-all-pubs">\n                    <i class="icon-arrow-right"></i>\n                    <span>View all Co-Authors</span>\n                </a>\n            </div>\n'
    );
  },
  19: function (b, a, c, e, f) {
    var d;
    e = b.lambda;
    var g = b.escapeExpression,
      h = null != a ? a : b.nullContext || {},
      l = c.helperMissing;
    return (
      '                    <div class="cw-auth-item">\n                        <a href="' +
      g(e(null != a ? a.authorBaseURL : a, a)) +
      '" target="_blank" class="cw-auth-avatar" data-fulltitle="' +
      g(e(null != a ? a.title : a, a)) +
      '"></a>\n                        <div class="cw-auth-body">\n                            <div class="cw-auth-detail">\n                                <a href="' +
      g(e(null != a ? a.authorBaseURL : a, a)) +
      '" target="_blank" class="cw-auth-title">' +
      g(e(null != a ? a.title : a, a)) +
      '</a>\n                                <div class="cw-auth-pub">' +
      g(e(null != a ? a.count : a, a)) +
      " Publication" +
      (null !=
      (d = (c.ifCond || (a && a.ifCond) || l).call(
        h,
        null != a ? a.count : a,
        ">",
        1,
        {
          name: "ifCond",
          hash: {},
          fn: b.program(11, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      " in common</div>\n" +
      (null !=
      (d = c["if"].call(h, null != a ? a.affiliation : a, {
        name: "if",
        hash: {},
        fn: b.program(20, f, 0),
        inverse: b.noop,
        data: f,
      }))
        ? d
        : "") +
      '                            </div>\n                            \x3c!--<div class="cw-auth-action cw-follow" data-id="' +
      g(e(null != a ? a.id : a, a)) +
      '">\n                                <a href="javascript:;">Follow' +
      (null !=
      (d = (c.isFollowed || (a && a.isFollowed) || l).call(
        h,
        null != a ? a.id : a,
        {
          name: "isFollowed",
          hash: {},
          fn: b.program(22, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      "</a>\n                            </div>--\x3e\n                        </div>\n                    </div>\n"
    );
  },
  20: function (b, a, c, e, f) {
    return (
      '                                    <div class="co-auth-aff">' +
      b.escapeExpression(b.lambda(null != a ? a.affiliation : a, a)) +
      "</div>\n"
    );
  },
  22: function (b, a, c, e, f) {
    return "ed";
  },
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    var d, g;
    e = null != a ? a : b.nullContext || {};
    var h = c.helperMissing,
      l = b.escapeExpression,
      m = b.lambda;
    return (
      '<div id="auProfNewUI" class="auth-profile-tooltip" style="display: none;">\n    \x3c!-- author basic deatils cotainer --\x3e\n    <div class="author-div">\n        <div class="' +
      l(
        ((g = null != (g = c.logo || (null != a ? a.logo : a)) ? g : h),
        "function" === typeof g
          ? g.call(e, { name: "logo", hash: {}, data: f })
          : g)
      ) +
      '-brand"></div>\n        <div class="wiz-author-info">\n            <div class="cw-auth-avatar" data-fulltitle="' +
      l(m(null != (d = null != a ? a.authorObj : a) ? d.title : d, a)) +
      '"></div>\n            <div class="auth-body-wrapper">\n                <h1 class="auth-title">' +
      l(m(null != (d = null != a ? a.authorObj : a) ? d.title : d, a)) +
      '</h1>\n                <div class="auth-detail">\n                    <div class="auth-affiliation">\n                        <span></span>\n' +
      (null !=
      (d = c.each.call(e, null != a ? a.affiliations : a, {
        name: "each",
        hash: {},
        fn: b.program(1, f, 0),
        inverse: b.noop,
        data: f,
      }))
        ? d
        : "") +
      "                        " +
      (null !=
      (d = (c.ifCond || (a && a.ifCond) || h).call(
        e,
        null != a ? a.moreAffs : a,
        ">",
        0,
        {
          name: "ifCond",
          hash: {},
          fn: b.program(4, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      '                    </div>\n                    <div class="auth-discipline">\n                        <span></span>\n' +
      (null !=
      (d = c.each.call(e, null != a ? a.disciplines : a, {
        name: "each",
        hash: {},
        fn: b.program(6, f, 0),
        inverse: b.noop,
        data: f,
      }))
        ? d
        : "") +
      (null !=
      (d = (c.ifCond || (a && a.ifCond) || h).call(
        e,
        null != a ? a.moreDiscipline : a,
        ">",
        0,
        {
          name: "ifCond",
          hash: {},
          fn: b.program(9, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      '                    </div>\n                </div>\n\n                \x3c!-- profile actions container --\x3e\n                <div class="auth-actions">\n                    <a href="' +
      l(
        ((g =
          null != (g = c.authorBaseURL || (null != a ? a.authorBaseURL : a))
            ? g
            : h),
        "function" === typeof g
          ? g.call(e, { name: "authorBaseURL", hash: {}, data: f })
          : g)
      ) +
      '" target="_blank" class="ui-blue">\n                        <i class="icon-user"></i><span>View Profile</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n\n        \x3c!-- tabs container --\x3e\n        <div class="tab-container">\n            <a data-tab="cw-tab-publications" href="javascript:;" class="selected"><span><b class="t_PubCount">' +
      l(m(null != (d = null != a ? a.authorObj : a) ? d.count1 : d, a)) +
      "</b> Publication" +
      (null !=
      (d = (c.ifCond || (a && a.ifCond) || h).call(
        e,
        null != (d = null != a ? a.authorObj : a) ? d.count1 : d,
        ">",
        1,
        {
          name: "ifCond",
          hash: {},
          fn: b.program(11, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      "</span></a>\n" +
      (null !=
      (d = c["if"].call(e, null != a ? a.hasAuthors : a, {
        name: "if",
        hash: {},
        fn: b.program(13, f, 0),
        inverse: b.noop,
        data: f,
      }))
        ? d
        : "") +
      '        </div>\n        <div class="auth-main-container">\n            <div data-tab="cw-tab-publications">\n                <div class="auth-content">\n' +
      (null !=
      (d = c.each.call(
        e,
        null != (d = null != a ? a.authorObj : a) ? d.Publications : d,
        {
          name: "each",
          hash: {},
          fn: b.program(15, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      '                </div>\n                <a href="' +
      l(
        ((g =
          null != (g = c.authorBaseURL || (null != a ? a.authorBaseURL : a))
            ? g
            : h),
        "function" === typeof g
          ? g.call(e, { name: "authorBaseURL", hash: {}, data: f })
          : g)
      ) +
      '#publications" target="_blank" class="view-all-pubs">\n                    <i class="icon-arrow-right"></i>\n                    <span>View all publications</span>\n                </a>\n            </div>\n' +
      (null !=
      (d = c["if"].call(e, null != a ? a.hasAuthors : a, {
        name: "if",
        hash: {},
        fn: b.program(18, f, 0),
        inverse: b.noop,
        data: f,
      }))
        ? d
        : "") +
      '        </div>\n    </div>\n\n    \x3c!-- authors data loading --\x3e\n    <div class="cw-loading-author">\n        <div class="wiz-author-info">\n            <div class="cw-auth-avatar-load animated-bg"></div>\n            <div class="auth-body-wrapper">\n                <h1 class="auth-title animated-bg"></h1>\n                <div class="auth-affiliation animated-bg"></div>\n                <div class="auth-discipline animated-bg"></div>\n            </div>\n        </div>\n    </div>\n\n    <div class="tooltip-pointer"></div>\n</div>\n'
    );
  },
  useData: !0,
});
this.CwH.templates.getAuthorSideBarLi = CwH.template({
  1: function (b, a, c, e, f) {
    return "s";
  },
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    var d, g;
    e = null != a ? a : b.nullContext || {};
    var h = c.helperMissing,
      l = b.escapeExpression,
      m = b.lambda;
    return (
      '<li>\n    <div class="co-auth-item">\n        <a href="' +
      l(
        ((g =
          null != (g = c.authBaseURL || (null != a ? a.authBaseURL : a))
            ? g
            : h),
        "function" === typeof g
          ? g.call(e, { name: "authBaseURL", hash: {}, data: f })
          : g)
      ) +
      '" target="_blank" class="auth-avatar" data-fulltitle="' +
      l(m(null != (d = null != a ? a.author : a) ? d.fullName : d, a)) +
      '">\n        </a>\n        <div class="auth-details">\n            <a href="' +
      l(
        ((g =
          null != (g = c.authBaseURL || (null != a ? a.authBaseURL : a))
            ? g
            : h),
        "function" === typeof g
          ? g.call(e, { name: "authBaseURL", hash: {}, data: f })
          : g)
      ) +
      '" target="_blank" class="auth-title">' +
      l(m(null != (d = null != a ? a.author : a) ? d.fullName : d, a)) +
      '</a>\n            <div class="auth-info">\n                <span>' +
      l(m(null != (d = null != a ? a.author : a) ? d.pubs : d, a)) +
      " Publication" +
      (null !=
      (d = (c.ifC || (a && a.ifC) || h).call(
        e,
        null != (d = null != a ? a.author : a) ? d.pubs : d,
        ">",
        1,
        {
          name: "ifC",
          hash: {},
          fn: b.program(1, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      ",</span>\n                <span>" +
      l(m(null != (d = null != a ? a.author : a) ? d.coCount : d, a)) +
      " Co-Author" +
      (null !=
      (d = (c.ifC || (a && a.ifC) || h).call(
        e,
        null != (d = null != a ? a.author : a) ? d.coCount : d,
        ">",
        1,
        {
          name: "ifC",
          hash: {},
          fn: b.program(1, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      '</span>\n            </div>\n        </div>\n        <div class="listLinkContainer">\n            <a href="' +
      l(
        ((g =
          null != (g = c.authBaseURL || (null != a ? a.authBaseURL : a))
            ? g
            : h),
        "function" === typeof g
          ? g.call(e, { name: "authBaseURL", hash: {}, data: f })
          : g)
      ) +
      '" target="_blank">View Profile</a>\n        </div>\n    </div>\n</li>'
    );
  },
  useData: !0,
});
this.CwH.templates.getAuthorSidebarWidget = CwH.template({
  1: function (b, a, c, e, f) {
    return '        <img src="http://dev.colwis.org/static/images/author.jpg" width="30px" height="30px">\n';
  },
  3: function (b, a, c, e, f) {
    var d;
    return (
      ', <span class="co-auth-co">' +
      b.escapeExpression(
        ((d =
          null != (d = c.co_authors || (null != a ? a.co_authors : a))
            ? d
            : c.helperMissing),
        "function" == typeof d
          ? d.call(null != a ? a : b.nullContext || {}, {
              name: "co_authors",
              hash: {},
              data: f,
            })
          : d)
      ) +
      " Co-Authors</span>"
    );
  },
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    var d, g;
    e = null != a ? a : b.nullContext || {};
    var h = c.helperMissing,
      l = b.escapeExpression,
      m = b.lambda;
    return (
      '<div class="cw-auth-item">\n    <a href="' +
      l(
        ((g = null != (g = c.authLink || (null != a ? a.authLink : a)) ? g : h),
        "function" === typeof g
          ? g.call(e, { name: "authLink", hash: {}, data: f })
          : g)
      ) +
      '" target="_blank" class="cw-auth-avatar" data-fulltitle="' +
      l(m(null != (d = null != a ? a.thisAuth : a) ? d.fullName : d, a)) +
      '">\n' +
      (null !=
      (d = c["if"].call(
        e,
        null != (d = null != a ? a.thisAuth : a) ? d.profileImage : d,
        {
          name: "if",
          hash: {},
          fn: b.program(1, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      '    </a>\n    <div class="cw-auth-body">\n        <a href="' +
      l(
        ((g = null != (g = c.authLink || (null != a ? a.authLink : a)) ? g : h),
        "function" === typeof g
          ? g.call(e, { name: "authLink", hash: {}, data: f })
          : g)
      ) +
      '" target="_blank" class="cw-auth-title">' +
      l(m(null != (d = null != a ? a.thisAuth : a) ? d.title : d, a)) +
      '</a>\n        <div class="cw-auth-detail">\n            <span class="cw-auth-pub">' +
      l(
        ((g = null != (g = c.pubs || (null != a ? a.pubs : a)) ? g : h),
        "function" === typeof g
          ? g.call(e, { name: "pubs", hash: {}, data: f })
          : g)
      ) +
      " Publications</span>" +
      (null !=
      (d = (c.ifC || (a && a.ifC) || h).call(
        e,
        null != a ? a.co_authors : a,
        ">",
        0,
        {
          name: "ifC",
          hash: {},
          fn: b.program(3, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      '\n        </div>\n        <div class="cw-auth-action">\n            <a href="' +
      l(
        ((g = null != (g = c.authLink || (null != a ? a.authLink : a)) ? g : h),
        "function" === typeof g
          ? g.call(e, { name: "authLink", hash: {}, data: f })
          : g)
      ) +
      '" target="_blank">View Profile</a>\n        </div>\n    </div>\n</div>'
    );
  },
  useData: !0,
});
this.CwH.templates.getBody = CwH.template({
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    var d, g;
    return (
      '<div class="cw-body hideElements ' +
      b.escapeExpression(
        ((g =
          null !=
          (g = c.smallCanvasClass || (null != a ? a.smallCanvasClass : a))
            ? g
            : c.helperMissing),
        "function" == typeof g
          ? g.call(null != a ? a : b.nullContext || {}, {
              name: "smallCanvasClass",
              hash: {},
              data: f,
            })
          : g)
      ) +
      '">\n    <div style="position: absolute; width: 0; height: 0; overflow: hidden; visibility: hidden;">' +
      (null !=
      (d = b.invokePartial(e.iconSvgSprites, a, {
        name: "iconSvgSprites",
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '</div>\n\t<div id="cw-pdfReader" class="cw-wrapper">\n' +
      (null !=
      (d = b.invokePartial(e.header, a, {
        name: "header",
        data: f,
        indent: "\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '\n\t\t<div class="loginPromt">\n\t\t\t<span>To save article annotations, please sign in to a wizdom.ai account.</span>\n\t\t\t<a id="loginBox">Sign In</a>\n\t\t\t<a id="signupBox" class="last-child">Get Free Account</a>\n\t\t\t<i class="closeBtn"></i>\n\t\t</div>\n\n\t\t<div class="cw-content cw-pointer-hand">\n\n\t\t\t<div id="cw-pdfDocument" class="cw-pageContainer">\n\t\t\t\t<div class="cw-pageContent"></div>\n\t\t\t</div>\n\n\t\t\t<div class="zoomActionBtn">\n\t\t\t\t<a href="javascript:;" class="cw-btn circle-btn" data-action="toggleFit">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "fit_width" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '</a>\n\t\t\t\t<a href="javascript:;" class="cw-btn circle-btn" data-action="zoomIn">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "zoomin_circle" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '</a>\n\t\t\t\t<a href="javascript:;" class="cw-btn circle-btn" data-action="zoomOut">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "zoomout_circle" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '</a>\n\t\t\t</div>\n\n\t\t\t<div class="cw-page-counter">\n\t\t\t\t<input type="text" placeholder="..." />\n\t\t\t</div>\n\n' +
      (null !=
      (d = b.invokePartial(e.sidebar, a, {
        name: "sidebar",
        data: f,
        indent: "\t\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      (null !=
      (d = b.invokePartial(e.text_select_option, a, {
        name: "text_select_option",
        data: f,
        indent: "\t\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '\n\t\t\t<input id="cw-pdfURL" type="hidden" value="pdfUrl"/>\n\t\t\t<input id="cw-readerFrame" type="hidden" value="1"/>\n\t\t</div>\n\n\t\t<div id="cw-tooltip" class="cw-tooltip"><span></span></div>\n' +
      (null !=
      (d = b.invokePartial(e.plugin_notifier, a, {
        name: "plugin_notifier",
        data: f,
        indent: "\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      (null !=
      (d = b.invokePartial(e.tourtip, a, {
        name: "tourtip",
        data: f,
        indent: "\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      "\t</div>\n</div>\n"
    );
  },
  usePartial: !0,
  useData: !0,
});
this.CwH.templates.getButtons = CwH.template({
  1: function (b, a, c, e, f) {
    var d;
    e = null != a ? a : b.nullContext || {};
    var g = c.helperMissing;
    b = b.escapeExpression;
    return (
      '        <a href="javascript:void(0);" data-pub="' +
      b(
        ((d = null != (d = c.index || (null != a ? a.index : a)) ? d : g),
        "function" === typeof d
          ? d.call(e, { name: "index", hash: {}, data: f })
          : d)
      ) +
      '" data-tooltip="' +
      b(
        ((d =
          null != (d = c.addHoverBtnText || (null != a ? a.addHoverBtnText : a))
            ? d
            : g),
        "function" === typeof d
          ? d.call(e, { name: "addHoverBtnText", hash: {}, data: f })
          : d)
      ) +
      '" class="cw-addToLib cw-atl ui tooltip ' +
      b(
        ((d =
          null != (d = c.tooltipPos || (null != a ? a.tooltipPos : a)) ? d : g),
        "function" === typeof d
          ? d.call(e, { name: "tooltipPos", hash: {}, data: f })
          : d)
      ) +
      ' multiline">\n            <i></i><span>' +
      b(
        ((d =
          null != (d = c.addBtnTxt || (null != a ? a.addBtnTxt : a)) ? d : g),
        "function" === typeof d
          ? d.call(e, { name: "addBtnTxt", hash: {}, data: f })
          : d)
      ) +
      '</span><b style="width:0%"></b>\n        </a>\n'
    );
  },
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    var d, g;
    e = null != a ? a : b.nullContext || {};
    var h = c.helperMissing,
      l = b.escapeExpression;
    return (
      '<div class="cw-btnContainer' +
      l(
        ((g = null != (g = c.classes || (null != a ? a.classes : a)) ? g : h),
        "function" === typeof g
          ? g.call(e, { name: "classes", hash: {}, data: f })
          : g)
      ) +
      '" ' +
      l(
        ((g = null != (g = c.style || (null != a ? a.style : a)) ? g : h),
        "function" === typeof g
          ? g.call(e, { name: "style", hash: {}, data: f })
          : g)
      ) +
      '>\n    <a href="#' +
      l(
        ((g =
          null != (g = c.generatedHash || (null != a ? a.generatedHash : a))
            ? g
            : h),
        "function" === typeof g
          ? g.call(e, { name: "generatedHash", hash: {}, data: f })
          : g)
      ) +
      '" class="cw-openPdfReader cw-vir ui tooltip ' +
      l(
        ((g =
          null != (g = c.tooltipPos || (null != a ? a.tooltipPos : a)) ? g : h),
        "function" === typeof g
          ? g.call(e, { name: "tooltipPos", hash: {}, data: f })
          : g)
      ) +
      ' multiline" data-tooltip="' +
      l(
        ((g =
          null != (g = c.hoverBtnText || (null != a ? a.hoverBtnText : a))
            ? g
            : h),
        "function" === typeof g
          ? g.call(e, { name: "hoverBtnText", hash: {}, data: f })
          : g)
      ) +
      '" data-pub="' +
      l(
        ((g = null != (g = c.index || (null != a ? a.index : a)) ? g : h),
        "function" === typeof g
          ? g.call(e, { name: "index", hash: {}, data: f })
          : g)
      ) +
      '" url="' +
      l(
        ((g = null != (g = c.url || (null != a ? a.url : a)) ? g : h),
        "function" === typeof g
          ? g.call(e, { name: "url", hash: {}, data: f })
          : g)
      ) +
      '">\n        <i></i>\n        <span>' +
      l(
        ((g =
          null != (g = c.viewBtnTxt || (null != a ? a.viewBtnTxt : a)) ? g : h),
        "function" === typeof g
          ? g.call(e, { name: "viewBtnTxt", hash: {}, data: f })
          : g)
      ) +
      "</span>\n    </a>\n" +
      (null !=
      (d = c["if"].call(e, null != a ? a.showAddButton : a, {
        name: "if",
        hash: {},
        fn: b.program(1, f, 0),
        inverse: b.noop,
        data: f,
      }))
        ? d
        : "") +
      "</div>\n"
    );
  },
  useData: !0,
});
this.CwH.templates.getCommentBody = CwH.template({
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    var d,
      g,
      h = null != a ? a : b.nullContext || {},
      l = c.helperMissing,
      m = b.escapeExpression;
    return (
      '<li id="' +
      m(
        ((g = null != (g = c.cmtId || (null != a ? a.cmtId : a)) ? g : l),
        "function" === typeof g
          ? g.call(h, { name: "cmtId", hash: {}, data: f })
          : g)
      ) +
      '">\n    <div class="cmtText">\n        <p>' +
      m(
        ((g = null != (g = c.cmtText || (null != a ? a.cmtText : a)) ? g : l),
        "function" === typeof g
          ? g.call(h, { name: "cmtText", hash: {}, data: f })
          : g)
      ) +
      '</p>\n        <textarea class="cmtTextArea" rows="1" style="display:none; height:30px;"></textarea>\n    </div>\n    <svg viewBox="0 0 100 100" class="' +
      m(
        ((g = null != (g = c.cmtClass || (null != a ? a.cmtClass : a)) ? g : l),
        "function" === typeof g
          ? g.call(h, { name: "cmtClass", hash: {}, data: f })
          : g)
      ) +
      ' cmtIcon">\n        <use xlink:href="#' +
      m(
        ((g = null != (g = c.cmtClass || (null != a ? a.cmtClass : a)) ? g : l),
        "function" === typeof g
          ? g.call(h, { name: "cmtClass", hash: {}, data: f })
          : g)
      ) +
      '"></use>\n    </svg>\n    <span class="cmtTime">' +
      m(
        ((g = null != (g = c.timeDiff || (null != a ? a.timeDiff : a)) ? g : l),
        "function" === typeof g
          ? g.call(h, { name: "timeDiff", hash: {}, data: f })
          : g)
      ) +
      '</span>\n    <span class="cmtPage">, page <span>' +
      m(
        ((g = null != (g = c.cmtPage || (null != a ? a.cmtPage : a)) ? g : l),
        "function" === typeof g
          ? g.call(h, { name: "cmtPage", hash: {}, data: f })
          : g)
      ) +
      '</span></span>\n    <a class="cmtDelete" cw-title="Delete this annotation">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "trash" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '</a>\n    <input name="minY" type="hidden" value=' +
      m(
        ((g = null != (g = c.minY || (null != a ? a.minY : a)) ? g : l),
        "function" === typeof g
          ? g.call(h, { name: "minY", hash: {}, data: f })
          : g)
      ) +
      "/>\n</li>\n"
    );
  },
  usePartial: !0,
  useData: !0,
});
this.CwH.templates.getCoreDialog = CwH.template({
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    return '<div id="cw-dialogBox" class="cw-dialog-overlay" style="display:none">\n    <div class="cw-dailog">\n        <div class="cw-dialog-heading">\n            <h1></h1>\n        </div>\n        <span></span>\n        <div class="dialBtnsCont">\n            <a id = "firstButton"></a>\n            <a id = "secondButton"></a>\n        </div>\n    </div>\n</div>';
  },
  useData: !0,
});
this.CwH.templates.getDownloadPopup = CwH.template({
  1: function (b, a, c, e, f) {
    return '                <a href="javascript:void(0);" id="SavePDF" style="width:140px; float:left; margin-left:10px; position:relative">\n                    <b></b>\n                    <span>Save Interactive PDF to wizdom.ai</span>\n                    <em>Want to read later? Save it to a free library which you can access from your computer and mobile.</em>\n                </a>\n';
  },
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    var d, g;
    e = b.lambda;
    var h = b.escapeExpression,
      l = null != a ? a : b.nullContext || {};
    return (
      '<div role="dialog" aria-labelledby="downloadPopupHead" id="downloadPopupOverlay" aria-describedby="downloadPopupHead" class="cw-dialog-overlay">\n    <div id="downloadPopup" class="cw-dailog">\n        <a href="javascript:void(0);" id="closeDownloadPopup" title="Close Dialog"></a>\n        <div id="downloadPopupHead">\n            <h1>' +
      h(e(null != (d = null != a ? a.metaData : a) ? d.title : d, a)) +
      '</h1>\n        </div>\n        <div id="downloadPopupBody">\n            <a href="' +
      h(e(null != (d = null != a ? a.metaData : a) ? d.pdfLink : d, a)) +
      '" target="_blank" id="downloadPdf">\n                <b></b>\n                <span>Download as PDF</span>\n            </a>\n            <a href="' +
      h(e(null != (d = null != a ? a.metaData : a) ? d.pubLink : d, a)) +
      "#" +
      h(
        ((g =
          null != (g = c.encodedHash || (null != a ? a.encodedHash : a))
            ? g
            : c.helperMissing),
        "function" == typeof g
          ? g.call(l, { name: "encodedHash", hash: {}, data: f })
          : g)
      ) +
      '" id="viewIPDF" style="position:relative">\n                <b></b>\n                <span>View Interactive PDF</span>\n                <em style="">' +
      h(
        e(
          null !=
            (d =
              null != (d = null != a ? a.publisherOpt : a)
                ? d.pubModeBtnsTxt
                : d)
            ? d.viewHover
            : d,
          a
        )
      ) +
      '</em>\n            </a>\n            <a href="javascript:void(0);" id="resetTabInd"></a>\n' +
      (null !=
      (d = c["if"].call(
        l,
        null != (d = null != a ? a.publisherOpt : a) ? d.showAddButton : d,
        {
          name: "if",
          hash: {},
          fn: b.program(1, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      "        </div>\n    </div>\n</div>"
    );
  },
  useData: !0,
});
this.CwH.templates.getFeedbackForm = CwH.template({
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    return "<div class='overlay_feedback'>\n</div>\n<div class='feedback-head'>\n    <i class='cw-close-icon'></i>\n    <h1>Feedback</h1>\n    <iframe src='https://help.wizdom.ai/customer/widget/emails/new' id='feedback_form' style='  display: block; border: none; border-radius: 3px; height: 84%; position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; width: 100%; -webkit-transform: translate3d(0px, 0px, 0px); visibility: visible; margin: 90px 0px 0px 0px;'/>\n</div>";
  },
  useData: !0,
});
this.CwH.templates.getHead = CwH.template({
  1: function (b, a, c, e, f, d, g) {
    c = b.lambda;
    b = b.escapeExpression;
    return (
      '<script type="text/javascript" src="' +
      b(c(null != g[1] ? g[1].jsPath : g[1], a)) +
      "/" +
      b(c(a, a)) +
      "?v=" +
      b(c(null != g[1] ? g[1].version : g[1], a)) +
      '">\x3c/script>\n'
    );
  },
  3: function (b, a, c, e, f, d, g) {
    c = b.lambda;
    b = b.escapeExpression;
    return (
      '<link href="' +
      b(c(null != g[1] ? g[1].cssPath : g[1], a)) +
      "/" +
      b(c(a, a)) +
      "?" +
      b(c(null != g[1] ? g[1].version : g[1], a)) +
      '" type="text/css" rel="stylesheet"/>\n'
    );
  },
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f, d, g) {
    var h;
    e = null != a ? a : b.nullContext || {};
    return (
      '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">\n' +
      (null !=
      (h = c.each.call(e, null != a ? a.scripts : a, {
        name: "each",
        hash: {},
        fn: b.program(1, f, 0, d, g),
        inverse: b.noop,
        data: f,
      }))
        ? h
        : "") +
      (null !=
      (h = c.each.call(e, null != a ? a.css : a, {
        name: "each",
        hash: {},
        fn: b.program(3, f, 0, d, g),
        inverse: b.noop,
        data: f,
      }))
        ? h
        : "") +
      '<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>\n'
    );
  },
  useData: !0,
  useDepths: !0,
});
this.CwH.templates.getPopupBody = CwH.template({
  1: function (b, a, c, e, f) {
    var d;
    e = b.lambda;
    var g = b.escapeExpression,
      h = null != a ? a : b.nullContext || {};
    return (
      '    <li class="cw-btn items ' +
      g(e(null != (d = null != a ? a.contextCont : a) ? d.pubInLib : d, a)) +
      " " +
      g(e(null != (d = null != a ? a.contextCont : a) ? d.itemSelect : d, a)) +
      '" id="' +
      g(
        e(
          null != (d = null != (d = null != a ? a.contextCont : a) ? d.meta : d)
            ? d.index
            : d,
          a
        )
      ) +
      '" data-action="itemClick">\n        <div class="cwFirst">\n            <input type="checkbox" class="pubCheck cw-btn" data-action="pubCheck" onclick="return CwZPopup.clickRecord(this)" ' +
      g(e(null != (d = null != a ? a.contextCont : a) ? d.itemChecked : d, a)) +
      ' id="chBox_' +
      g(
        e(
          null != (d = null != (d = null != a ? a.contextCont : a) ? d.meta : d)
            ? d.index
            : d,
          a
        )
      ) +
      '"/>\n            <img class="cw-completedIcon ' +
      g(e(null != (d = null != a ? a.contextCont : a) ? d.img : d, a)) +
      '" src="' +
      g(e(null != (d = null != a ? a.contextCont : a) ? d.imgLink : d, a)) +
      '"/><img class="cw-pendingIcon ' +
      g(e(null != (d = null != a ? a.contextCont : a) ? d.img : d, a)) +
      '" src="' +
      g(e(null != (d = null != a ? a.contextCont : a) ? d.imgLink : d, a)) +
      '"/>\n' +
      (null !=
      (d = c["if"].call(
        h,
        null != (d = null != a ? a.contextCont : a) ? d.img : d,
        {
          name: "if",
          hash: {},
          fn: b.program(2, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      (null !=
      (d = c["if"].call(
        h,
        null != (d = null != (d = null != a ? a.contextCont : a) ? d.meta : d)
          ? d.parserName
          : d,
        {
          name: "if",
          hash: {},
          fn: b.program(4, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      '        </div>\n        <div class="cwSecond">\n            <a href="' +
      g(
        e(
          null != (d = null != (d = null != a ? a.contextCont : a) ? d.meta : d)
            ? d.pubLink
            : d,
          a
        )
      ) +
      '" class="cwFirstSpan" onclick="javascript:;">' +
      g(
        e(
          null != (d = null != (d = null != a ? a.contextCont : a) ? d.meta : d)
            ? d.title
            : d,
          a
        )
      ) +
      "</a>\n" +
      (null !=
      (d = c["if"].call(
        h,
        null != (d = null != (d = null != a ? a.contextCont : a) ? d.meta : d)
          ? d.authors
          : d,
        {
          name: "if",
          hash: {},
          fn: b.program(6, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      "            " +
      g(e(null != (d = null != a ? a.obj : a) ? d.otherInfo : d, a)) +
      '\n                 <span class="recAbstract">\n                     ' +
      g(
        e(
          null != (d = null != (d = null != a ? a.contextCont : a) ? d.meta : d)
            ? d.otherInfo
            : d,
          a
        )
      ) +
      "\n                 </span>\n         </div>\n" +
      (null !=
      (d = c["if"].call(
        h,
        null != (d = null != a ? a.contextCont : a) ? d.isPageData : d,
        {
          name: "if",
          hash: {},
          fn: b.program(8, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      '         <div class="cw-ExtensionProgress"><i></i></div>\n     </li>\n'
    );
  },
  2: function (b, a, c, e, f) {
    return '                <a href="javascript:void(0)" title="Read and annotate PDF" data-action="cwPdfIcon" class="cw-btn"><img class="cwPdfIcon" src="../images/webpdf/spacer.gif"/></a>\n';
  },
  4: function (b, a, c, e, f) {
    var d;
    c = b.lambda;
    b = b.escapeExpression;
    return (
      '                <img width="16" src="' +
      b(c(null != (d = null != a ? a.contextCont : a) ? d.baseURL : d, a)) +
      b(
        c(
          null != (d = null != (d = null != a ? a.contextCont : a) ? d.meta : d)
            ? d.parserName
            : d,
          a
        )
      ) +
      '" class="cw-pubIcon" alt="">\n'
    );
  },
  6: function (b, a, c, e, f) {
    var d;
    return (
      '                <span class="recAuthors">\n                 ' +
      b.escapeExpression(
        b.lambda(
          null != (d = null != (d = null != a ? a.contextCont : a) ? d.meta : d)
            ? d.authors
            : d,
          a
        )
      ) +
      "\n                </span>\n"
    );
  },
  8: function (b, a, c, e, f) {
    return '             <div class="cw-errorMsg webreferencemsg">Note: This record will be saved as a website reference type.</div>\n';
  },
  10: function (b, a, c, e, f) {
    return '    <ul id="listingResults">&nbsp;</ul>\n    <div class="primaryLnks">\n        <div class="cw-navigateToOtherPubs">\n            <span class="cw-tryOnOther"><a class="otherSites cw-btn" data-action="otherSites" href="javascript:void(0);")>Try web importer on other sites.</a></span>\n        </div>\n        <div class="cw-navigateBack" style="display:none">\n            <span><a href="javascript:void(0);" class="cw-btn" data-action="navigateBack">Back to current page publications.</a></span>\n        </div>\n    </div>\n    <div class="pubAct" id="pubAct">\n        <input id="selectAll" class="pubCheck cw-btn" data-action="selectAll" type="checkbox" onclick="CwZPopup.checkAll(this)"  value="Select All"/>\n        <button id="addToLib" disabled="" class="blue cw-btn" data-action="addToLib">Add to Library</button>\n        <button id="exportCitation" class="cw-btn" data-action="exportCitation" disabled="">Export</button>\n        <button id="formatCitation" class="cw-btn" data-action="formatCitation" disabled="">Cite</button>\n        <button id="gotoLibrary" class="cw-btn" data-action="gotoLibrary">Open Library</button>\n        <div class="pubCountMsg"></div>\n    </div>\n    <div class="box-overlay hidden">\n        <div class="form-box">\n            \n            <div style="display: none" id="export-download">\n                <div class="form-box-head">\n                    <span>Export Citation</span>\n                    <a href="javascript:void(0)" class="closeDialog cw-btn" data-action="closeDialog">\n                        <i class="icon-close">&#x2715;</i>\n                    </a>\n                </div>\n                <div class="form-formats">\n                    <span>Available formats: </span>\n                    <input type="radio" name="cit-format" id="bib" checked="checked"/>\n                    <label for="bib" id="biblabel">BibTeX</label>\n                    <input type="radio" name="cit-format" id="ris"/>\n                    <label for="ris" id="rislabel">RIS</label>\n                </div>\n                <div class="form-download">\n                    <button class="btn-downloadCit blue cw-btn" data-action="downloadCitation"><i class="icon-download"></i><span>Download Citation</span></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div id="format-citation">\n        <h4>Format Citation Styles</h4>\n        <div id="formatOptions">\n            <a href="javascript:void(0)" class="search-btn"></a>\n            <input id="formatStyles">\n            <a href="javascript:void(0)" id="removeText" class="cw-btn" data-action="removeText">&#x2715;</a>\n        </div>\n\n        <ul class="citeStyles">\n            <li class="selected">\n                <i></i>\n                <div class="styleItem" value=\'apa\'>American Psychological Association 6th Edition</div>\n            </li>\n            <li>\n                <i></i>\n                <div class="styleItem" value=\'modern-language-association-6th-edition-note\'>MLA (Notes - 6th edition) </div>\n            </li>\n            <li>\n                <i></i>\n                <div class="styleItem" value=\'chicago-annotated-bibliography\'>Chicago Manual of Style (note, annotated bibliography)</div>\n            </li>\n            <li>\n                <i></i>\n                <div class="styleItem" value=\'ieee\'>IEEE</div>\n            </li>\n            <li>\n                <i></i>\n                <div class="styleItem" value=\'the-open-university-harvard\'>The Open University (Harvard)</div>\n            </li>\n        </ul>\n        <h5>Preview:</h5>\n        <div class="bib-body"></div>\n        <div class="pubAct">           \n            <button id="cw-backToPubs" class="cw-btn" data-action="closeDialog">Back</button>\n            <button id="copyToClipboard" class="ui-button ui tooltip top-right blue cw-btn" data-action="copyToClipboard">\n            <span id="copiedToolTip">Copied!</span>\n            <i class="icon-copy"></i> Copy</button>\n        </div>\n    </div>\n';
  },
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    var d;
    return null !=
      (d = c["if"].call(
        null != a ? a : b.nullContext || {},
        null != a ? a.getRecHtml : a,
        {
          name: "if",
          hash: {},
          fn: b.program(1, f, 0),
          inverse: b.program(10, f, 0),
          data: f,
        }
      ))
      ? d
      : "";
  },
  useData: !0,
});
this.CwH.templates.getReferenceTip = CwH.template({
  1: function (b, a, c, e, f) {
    var d;
    e = b.lambda;
    var g = b.escapeExpression,
      h = null != a ? a : b.nullContext || {};
    return (
      '    <div class="referenceHTMLTopDiv refPointer ' +
      g(e(null != (d = null != a ? a.ref : a) ? d.posClass : d, a)) +
      '" style="left: ' +
      g(e(null != (d = null != a ? a.ref : a) ? d.x : d, a)) +
      "px; top: " +
      g(e(null != (d = null != a ? a.ref : a) ? d.y : d, a)) +
      'px; display:none">\n        <em style="left: ' +
      g(e(null != (d = null != a ? a.ref : a) ? d.emPos : d, a)) +
      'px;"></em>\n        <h4 class="title"><span>' +
      g(e(null != (d = null != a ? a.ref : a) ? d.id : d, a)) +
      ". </span>" +
      g(e(null != (d = null != a ? a.ref : a) ? d.title : d, a)) +
      '</h4>\n        <p class="authors">' +
      g(e(null != (d = null != a ? a.ref : a) ? d.author : d, a)) +
      '</p>\n        <p class="year">' +
      g(e(null != (d = null != a ? a.ref : a) ? d.year : d, a)) +
      (null !=
      (d = c["if"].call(
        h,
        null != (d = null != a ? a.ref : a) ? d.journal : d,
        {
          name: "if",
          hash: {},
          fn: b.program(2, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      '\n        </p>\n        <div class="refLinkContainer">\n' +
      (null !=
      (d = c["if"].call(
        h,
        null != (d = null != a ? a.ref : a) ? d.scholarURL : d,
        {
          name: "if",
          hash: {},
          fn: b.program(4, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      (null !=
      (d = c["if"].call(h, null != (d = null != a ? a.ref : a) ? d.url : d, {
        name: "if",
        hash: {},
        fn: b.program(6, f, 0),
        inverse: b.noop,
        data: f,
      }))
        ? d
        : "") +
      "        </div>\n    </div>\n"
    );
  },
  2: function (b, a, c, e, f) {
    var d;
    return (
      ", " +
      b.escapeExpression(
        b.lambda(null != (d = null != a ? a.ref : a) ? d.journal : d, a)
      )
    );
  },
  4: function (b, a, c, e, f) {
    var d;
    c = b.lambda;
    b = b.escapeExpression;
    return (
      '                <a href="' +
      b(c(null != (d = null != a ? a.ref : a) ? d.scholarURL : d, a)) +
      '" target="_blank" data-url="' +
      b(c(null != (d = null != a ? a.ref : a) ? d.scholarURL : d, a)) +
      '">Find Article</a>\n'
    );
  },
  6: function (b, a, c, e, f) {
    var d;
    c = b.lambda;
    b = b.escapeExpression;
    return (
      '                <a href="' +
      b(c(null != (d = null != a ? a.ref : a) ? d.url : d, a)) +
      '" target="_blank" data-url="' +
      b(c(null != (d = null != a ? a.ref : a) ? d.url : d, a)) +
      '">View Article</a>\n'
    );
  },
  8: function (b, a, c, e, f) {
    var d;
    return (
      '        <li class="cw-reference abc" id=' +
      b.escapeExpression(
        b.lambda(null != (d = null != a ? a.ref : a) ? d.index : d, a)
      ) +
      ">\n" +
      (null !=
      (d = c["if"].call(
        null != a ? a : b.nullContext || {},
        null != (d = null != a ? a.ref : a) ? d.bad : d,
        {
          name: "if",
          hash: {},
          fn: b.program(9, f, 0),
          inverse: b.program(14, f, 0),
          data: f,
        }
      ))
        ? d
        : "") +
      "        </li>\n"
    );
  },
  9: function (b, a, c, e, f) {
    var d;
    e = b.lambda;
    var g = b.escapeExpression,
      h = null != a ? a : b.nullContext || {};
    return (
      '            <h4 class="title" title="' +
      g(e(null != (d = null != a ? a.ref : a) ? d.refText : d, a)) +
      '"><span>' +
      g(e(null != (d = null != a ? a.ref : a) ? d.id : d, a)) +
      ". </span>" +
      g(e(null != (d = null != a ? a.ref : a) ? d.refText : d, a)) +
      '</h4>\n            <div class="listLinkContainer">\n' +
      (null !=
      (d = c["if"].call(
        h,
        null != (d = null != a ? a.ref : a) ? d.scholarURL : d,
        {
          name: "if",
          hash: {},
          fn: b.program(10, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      (null !=
      (d = c["if"].call(h, null != (d = null != a ? a.ref : a) ? d.url : d, {
        name: "if",
        hash: {},
        fn: b.program(12, f, 0),
        inverse: b.noop,
        data: f,
      }))
        ? d
        : "") +
      "            </div>\n"
    );
  },
  10: function (b, a, c, e, f) {
    var d;
    c = b.lambda;
    b = b.escapeExpression;
    return (
      '                    <a href="' +
      b(c(null != (d = null != a ? a.ref : a) ? d.scholarURL : d, a)) +
      '" target="_blank" data-url="' +
      b(c(null != (d = null != a ? a.ref : a) ? d.scholarURL : d, a)) +
      '">Find Article</a>\n'
    );
  },
  12: function (b, a, c, e, f) {
    var d;
    c = b.lambda;
    b = b.escapeExpression;
    return (
      '                    <a href="' +
      b(c(null != (d = null != a ? a.ref : a) ? d.url : d, a)) +
      '" target="_blank" data-url="' +
      b(c(null != (d = null != a ? a.ref : a) ? d.url : d, a)) +
      '">View Article</a>\n'
    );
  },
  14: function (b, a, c, e, f) {
    var d;
    e = b.lambda;
    var g = b.escapeExpression,
      h = null != a ? a : b.nullContext || {};
    return (
      '            <h4 class="title" title="' +
      g(e(null != (d = null != a ? a.ref : a) ? d.title : d, a)) +
      '"><span>' +
      g(e(null != (d = null != a ? a.ref : a) ? d.id : d, a)) +
      ". </span>" +
      g(e(null != (d = null != a ? a.ref : a) ? d.title : d, a)) +
      '</h4>\n            <p class="authors" title="' +
      g(e(null != (d = null != a ? a.ref : a) ? d.author : d, a)) +
      '">' +
      g(e(null != (d = null != a ? a.ref : a) ? d.author : d, a)) +
      '</p>\n            <p class="journalName"><span class="year"> ' +
      g(e(null != (d = null != a ? a.ref : a) ? d.year : d, a)) +
      "</span>" +
      (null !=
      (d = c["if"].call(
        h,
        null != (d = null != a ? a.ref : a) ? d.journal : d,
        {
          name: "if",
          hash: {},
          fn: b.program(15, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      g(e(null != (d = null != a ? a.ref : a) ? d.journal : d, a)) +
      '</p>\n            <div class="listLinkContainer">\n' +
      (null !=
      (d = c["if"].call(
        h,
        null != (d = null != a ? a.ref : a) ? d.scholarURL : d,
        {
          name: "if",
          hash: {},
          fn: b.program(10, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
        ? d
        : "") +
      (null !=
      (d = c["if"].call(h, null != (d = null != a ? a.ref : a) ? d.url : d, {
        name: "if",
        hash: {},
        fn: b.program(12, f, 0),
        inverse: b.noop,
        data: f,
      }))
        ? d
        : "") +
      "            </div>\n"
    );
  },
  15: function (b, a, c, e, f) {
    var d;
    return null !=
      (d = c["if"].call(
        null != a ? a : b.nullContext || {},
        null != (d = null != a ? a.ref : a) ? d.year : d,
        {
          name: "if",
          hash: {},
          fn: b.program(16, f, 0),
          inverse: b.noop,
          data: f,
        }
      ))
      ? d
      : "";
  },
  16: function (b, a, c, e, f) {
    return ", ";
  },
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    var d;
    return (
      (null !=
      (d = c["if"].call(
        null != a ? a : b.nullContext || {},
        null != a ? a.tip : a,
        {
          name: "if",
          hash: {},
          fn: b.program(1, f, 0),
          inverse: b.program(8, f, 0),
          data: f,
        }
      ))
        ? d
        : "") + "\n"
    );
  },
  useData: !0,
});
this.CwH.templates.getSignupDialog = CwH.template({
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    return '<div style="display: none" id="CWDailogOverlay" class="cw-dialog-overlay" >\n    <div class="cw-dailog cw-success">\n        <h1>Sign up Successful</h1>\n        <i></i>\n        <p>Welcome to wizdom.ai. An activation email has been sent. To get back into your account, follow the instructions we\\\'ve sent to you.</p>\n        <button id="btnCancel" class="primary-btn" >Close</button>\n    </div>\n</div>';
  },
  useData: !0,
});
this.CwH.templates.getSplash = CwH.template({
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    return '<div id="cw-loader" class="cw-reader-loader" style="display:none; z-index:999999999">\n    <header>\n        <div class="cw-file-name"><span>filename.pdf</span></div>\n     \t<span class="cross cw-hidden"></span>\n        <div class="cw-redirecting cw-hidden">Redirecting to access PDF...</div>\n        <div class="cw-progress">\n            <div class="cw-bar" style="width: 0%">\n            </div>\n        </div>\n    </header>\n</div>';
  },
  useData: !0,
});
this.CwH.templates.getSupplementLiHtml = CwH.template({
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    var d;
    e = null != a ? a : b.nullContext || {};
    var g = c.helperMissing;
    b = b.escapeExpression;
    return (
      "\x3c!-- <li><span>" +
      b(
        ((d = null != (d = c.key || (null != a ? a.key : a)) ? d : g),
        "function" === typeof d
          ? d.call(e, { name: "key", hash: {}, data: f })
          : d)
      ) +
      '</span><a class="icon-download" target="_blank" href="' +
      b(
        ((d =
          null != (d = c.finalFile || (null != a ? a.finalFile : a)) ? d : g),
        "function" === typeof d
          ? d.call(e, { name: "finalFile", hash: {}, data: f })
          : d)
      ) +
      '"></a></li>  --\x3e\n<li><a target="_blank" href="' +
      b(
        ((d =
          null != (d = c.finalFile || (null != a ? a.finalFile : a)) ? d : g),
        "function" === typeof d
          ? d.call(e, { name: "finalFile", hash: {}, data: f })
          : d)
      ) +
      '"><span>' +
      b(
        ((d = null != (d = c.key || (null != a ? a.key : a)) ? d : g),
        "function" === typeof d
          ? d.call(e, { name: "key", hash: {}, data: f })
          : d)
      ) +
      '</span><svg class="icon-download"><use xlink:href="#icon-download"></use></svg></a></li>\n'
    );
  },
  useData: !0,
});
this.CwH.templates.getUserToDD = CwH.template({
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    var d;
    e = null != a ? a : b.nullContext || {};
    var g = c.helperMissing;
    b = b.escapeExpression;
    return (
      "<option data-id='" +
      b(
        ((d = null != (d = c.uid || (null != a ? a.uid : a)) ? d : g),
        "function" === typeof d
          ? d.call(e, { name: "uid", hash: {}, data: f })
          : d)
      ) +
      "' class='annotators' value='" +
      b(
        ((d = null != (d = c.uid || (null != a ? a.uid : a)) ? d : g),
        "function" === typeof d
          ? d.call(e, { name: "uid", hash: {}, data: f })
          : d)
      ) +
      "'>" +
      b(
        ((d = null != (d = c.divText || (null != a ? a.divText : a)) ? d : g),
        "function" === typeof d
          ? d.call(e, { name: "divText", hash: {}, data: f })
          : d)
      ) +
      "</option>"
    );
  },
  useData: !0,
});
this.CwH.templates.header = CwH.template({
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    var d;
    return (
      '<header>\n    <div class="logo"><span id="cw-readerLogo" class="cw-logo"></span></div>\n\n\t<div class="tools cw-tools">\n\t\t<a class="cw-btn act-btn ui tooltip delayed bottom" data-action="textSelection" data-tooltip="Select text">\n' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { class: "hidden-lmd", src: "text" },
        data: f,
        indent: "\t\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { class: "hidden-lg", src: "hand" },
        data: f,
        indent: "\t\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '\t\t</a>\n\t\t<div class="cw-drawing-tools cw-drop-down">\n\n\t\t\t<a data-action="highlight" class="cw-btn act-btn cw-btn-hl ui tooltip delayed bottom" data-tooltip="Highlighter" id="current-tool">\n' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "highlighter" },
        data: f,
        indent: "\t\t\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '\t\t\t</a>\n\t\t\t<a data-tooltip="More tools" data-action="drawing tools" class="cw-btn act-btn cw-caret ui tooltip delayed bottom">\n\t\t\t\t<span class="caret"></span>\n\t\t\t</a>\n\n\t\t\t<div class="cw-drawing-menu cw-drop-down-menu" style="display:none;">\n\t\t\t\t<a data-tooltip="Highlighter" data-action="highlight" class="cw-btn ui tooltip delayed right">\n' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "highlighter" },
        data: f,
        indent: "\t\t\t\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '\t\t\t\t</a>\n\t\t\t\t<a data-tooltip="Freehand" data-action="freehand" class="cw-btn ui tooltip delayed right">\n' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "pencil" },
        data: f,
        indent: "\t\t\t\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '\t\t\t\t</a>\n\t\t\t\t<a data-tooltip="Rectangle" data-action="rectangle" class="cw-btn ui tooltip delayed right">\n' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "rectangle" },
        data: f,
        indent: "\t\t\t\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '\t\t\t\t</a>\n\t\t\t\t<a data-tooltip="Ellipse" data-action="ellipse" class="cw-btn ui tooltip delayed right">\n' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "oval" },
        data: f,
        indent: "\t\t\t\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '\t\t\t\t</a>\n\t\t\t\t<a data-tooltip="Arrow" data-action="arrow" class="cw-btn ui tooltip delayed right">\n' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "arrow" },
        data: f,
        indent: "\t\t\t\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '\t\t\t\t</a>\n\t\t\t\t<a data-tooltip="Line" data-action="line" class="cw-btn ui tooltip delayed right">\n' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "line" },
        data: f,
        indent: "\t\t\t\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '\t\t\t\t</a>\n\t\t\t\t<a data-tooltip="Add Comment" data-action="comment" class="cw-btn ui tooltip delayed right">\n' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "addcomment" },
        data: f,
        indent: "\t\t\t\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class="cw-btn-group cw-property" style="display:none;">\n\t\t<div class="cw-seprator"></div>\n\t\t<div class="cw-color-picker drawing-color cw-drop-down">\n\t\t\t<a data-tooltip="Select color" data-action="color" class="cw-btn act-btn ui tooltip delayed bottom">\n\t\t\t\t<i class="cw-color-icon" ></i><span class="caret"></span>\n\t\t\t</a>\n\t\t\t<div class="cw-color-menu cw-drop-down-menu" style="display:none;">\n\t\t\t\t<a title="Yellow" data-color="#fffa45" class="active"></a>\n\t\t\t\t<a title="Bright Green" data-color="#00fc42"></a>\n\t\t\t\t<a title="Aqua" data-color="#00ffff"></a>\n\t\t\t\t<a title="Pink" data-color="#ff30f9"></a>\n\t\t\t\t<a title="Blue" data-color="#003af9"></a>\n\t\t\t\t<a title="Red" data-color="#ff0010"></a>\n\t\t\t\t<a title="Dark Blue" data-color="#00177d"></a>\n\t\t\t\t<a title="Teal" data-color="#00817f"></a>\n\n\t\t\t\t<a title="Macaroni" data-color="#ffb878"></a>\n\t\t\t\t<a title="Salmon" data-color="#ff887c"></a>\n\t\t\t\t<a title="Gray" data-color="#e1e1e1"></a>\n\t\t\t\t<a title="Black" data-color="#000000"></a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="cw-stroke-size cw-drop-down">\n\t\t\t<a data-tooltip="Stroke size" data-action="stroke" class="cw-btn act-btn ui tooltip delayed bottom">\n\t\t\t\t<span class="stroke-container">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "stroke" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '<i class="cw-stroke3" style="display:none;" ></i></span>\n\t\t\t\t<span class="caret"></span>\n\t\t\t</a>\n\t\t\t<div style="display:none;" class="cw-stroke-menu cw-drop-down-menu">\n\t\t\t\t<a data-stroke="1" title="2pt">\n\t\t\t\t\t<b>2 pt</b><i class="cw-stroke1" ></i>\n\t\t\t\t</a>\n\t\t\t\t<a data-stroke="2" title="4pt">\n\t\t\t\t\t<b>4 pt</b><i class="cw-stroke2" ></i>\n\t\t\t\t</a>\n\t\t\t\t<a data-stroke="3" title="6pt" class="active">\n\t\t\t\t\t<b>6 pt</b><i class="cw-stroke3" ></i>\n\t\t\t\t</a>\n\t\t\t\t<a data-stroke="4" title="8pt">\n\t\t\t\t\t<b>8 pt</b><i class="cw-stroke4" ></i>\n\t\t\t\t</a>\n\t\t\t\t<a data-stroke="5" title="10pt">\n\t\t\t\t\t<b>10 pt</b><i class="cw-stroke5" ></i>\n\t\t\t\t</a>\n\t\t\t\t<a data-stroke="6" title="12pt">\n\t\t\t\t\t<b>12 pt</b><i class="cw-stroke6" ></i>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class="cw-btn-group cw-center">\n\t\t<div class="cw-atl-tip cw-drop-down cw-drop-down-sticky hidden">\n\t\t\t<a data-action="addlibtip" class="cw-btn primary-btn-blue" id="cw-pdfReaderAdd">\n\t\t\t\t' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "cloud" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '<span>Add to Library</span>\n\t\t\t</a>\n\t\t\t<div class="cw-atl-content blueShadeBorder cw-drop-down-menu" style="display:none">\n\t\t\t\t<h4>Add this article to your wizdom.ai Library</h4>\n\t\t\t\t<p><i class="art-devices"></i><span>Access this article anytime, anywhere, on any device.</span></p>\n\t\t\t\t<p><i class="art-citations"></i><span>Easily create automatic citations and biblographies.</span></p>\n\t\t\t\t<a data-action="addlib" class="cw-btn primary-btn-blue" id="">\n\t\t\t\t\t<span>Add to Library</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="cw-download-tip cw-drop-down  cw-drop-down-sticky">\n\t\t\t<a data-action="downloadpdftip" class="cw-btn primary-btn" id="cw-downloadPDF">\n                <b class="ipdf-bubble-notifier">0</b>\n\t\t\t\t' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "download" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '<span>Download</span>\n\t\t\t</a>\n\n\t\t\t<div class="cw-download-content blueShadeBorder cw-drop-down-menu" style="display:none">\n\t\t\t\t<div class="module1">\n\t\t\t\t\t<h4>Article PDF</h4>\n\t\t\t\t\t<a data-action="downloadPdf" class="cw-btn primary-btn-blue" id="">\n\t\t\t\t\t\t<span>Download</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="module2">\n\t\t\t\t\t<h4>Figures &amp; Tables<b>0</b></h4>\n\t\t\t\t\t<ul></ul>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="module3">\n\t\t\t\t\t<h3>Even better!</h3>\n\t\t\t\t\t<p>Why not add this article with annotations to your wizdom.ai library and access it anytime anywhere.</p>\n\t\t\t\t\t<a data-action="addlib" class="cw-btn primary-btn-blue" id="">\n\t\t\t\t\t\t' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "cloud" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '</i> <span>Add to Library</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\t<div class="userMenu cw-btn-group cw-pull-right">\n\n\t\t<div class="cw-user">\n\t\t\t<div class="cw-user-holder cw-drop-down">\n\t\t\t\t<img id="cw-userImage" class="userimg" src="' +
      b.escapeExpression(
        b.lambda(
          null != (d = null != a ? a.CWPDFReaderConfig : a) ? d.cwURL : d,
          a
        )
      ) +
      '/images/spacer.gif" alt="">\n\t\t\t\t<span class="caret"></span>\n\t\t\t\t<div class="cw-user-tip cw-drop-down-menu" style="display: none;">\n\t\t\t\t\t<a data-action="myProfile" class="cw-btn" id="cw-btn-myProfile">\n' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "user" },
        data: f,
        indent: "\t\t\t\t\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '\t\t\t\t\t\t<span>My Profile</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a data-action="feedback" class="cw-btn" id="cw-feedback">\n' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "feedback" },
        data: f,
        indent: "\t\t\t\t\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '\t\t\t\t\t\t<span>Feedback</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a data-action="logout" class="cw-btn" id="cw-btn-logout">\n' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "power" },
        data: f,
        indent: "\t\t\t\t\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '\t\t\t\t\t\t<span>Log Out</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<a class="cw-btn act-btn close-btn hidden ui tooltip delayed bottom" data-action="close" data-tooltip="Close">\n' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "close" },
        data: f,
        indent: "\t\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '\t\t</a>\n\t</div>\n\n\t\x3c!--<div class="zoomControl cw-drop-down cw-btn-group cw-pull-right">\n\t\t<a class="cw-btn act-btn zoom-btn ui tooltip delayed bottom" data-tooltip="Zoom" data-action="zoom">\n\t\t\t<i class="icon-zoomin"></i><span class="caret"></span>\n\t\t</a>\n\t\t<div style="display:none;" class="cw-zoom-menu cw-drop-down-menu">\n\t\t\t<div class="vertical-slider">\n\t\t\t\t<input type="range" value="125" step="25" min="100" max="200" vertical/>\n\t\t\t</div>\n\t\t</div>\n\t</div>--\x3e\n\n\t<div class="cw-btn-group cw-pull-right">\n\t\t<a class="cw-btn act-btn print-btn hidden ui tooltip delayed bottom" data-tooltip="Print">\n' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "print" },
        data: f,
        indent: "\t\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '\t\t</a>\n\t</div>\n\n\t<div class="cw-search-dropdown cw-drop-down cw-drop-down-sticky cw-btn-group cw-pull-right">\n\t\t<a data-tooltip="Find" class="cw-btn act-btn ui tooltip delayed bottom" data-action="search">\n\t\t\t' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "search" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '<span class="caret"></span>\n\t\t</a>\n\t\t<div style="display:none;" class="cw-search-menu cw-drop-down-menu">\n\t\t\t<div class="cw-searchBar">\n\t\t\t\t<input type="text"/>\n                <span class="searchCount"></span>\n\t\t\t\t<a data-action="prevMatch">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "angle_up" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '</a>\n\t\t\t\t<a data-action="nextMatch">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "angle_down" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '</a>\n\t\t\t</div>\n\t\t\t<a data-action="hideSearch">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "close" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      "</a>\n\t\t</div>\n\t</div>\n</header>\n"
    );
  },
  usePartial: !0,
  useData: !0,
});
this.CwH.templates.icon = CwH.template({
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    var d;
    e = null != a ? a : b.nullContext || {};
    var g = c.helperMissing;
    b = b.escapeExpression;
    return (
      '<svg viewBox="0 0 100 100" class="icon-' +
      b(
        ((d = null != (d = c.src || (null != a ? a.src : a)) ? d : g),
        "function" === typeof d
          ? d.call(e, { name: "src", hash: {}, data: f })
          : d)
      ) +
      " " +
      b(
        ((d = null != (d = c["class"] || (null != a ? a["class"] : a)) ? d : g),
        "function" === typeof d
          ? d.call(e, { name: "class", hash: {}, data: f })
          : d)
      ) +
      '">\n\t<use xlink:href="#icon-' +
      b(
        ((d = null != (d = c.src || (null != a ? a.src : a)) ? d : g),
        "function" === typeof d
          ? d.call(e, { name: "src", hash: {}, data: f })
          : d)
      ) +
      '"></use>\n</svg>'
    );
  },
  useData: !0,
});
this.CwH.templates.iconSvgSprites = CwH.template({
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    return '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute; width: 0; height: 0"><symbol viewBox="0 0 24 24" id="icon-add"><path d="M14 11V3.493a1.5 1.5 0 0 0-3 0V11H3.493a1.5 1.5 0 0 0 0 3H11v7.507a1.5 1.5 0 0 0 3 0V14h7.507a1.5 1.5 0 0 0 0-3H14z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-addcomment"><path d="M13 9V6h-2v3H8v2h3v3h2v-3h3.001V9H13zm5-6c1.657 0 3 1.334 3 2.979v8.5c0 1.645-1.156 2.707-2.813 2.707h-1.188v3.813l-4-3.813H5.812c-1.657 0-2.813-1.063-2.813-2.707v-8.5a2.989 2.989 0 0 1 3-2.979h12z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-angle_down"><path d="M8 11a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 1 1 1.414-1.414L8 8.586l4.293-4.293a.999.999 0 1 1 1.414 1.414l-5 5A.997.997 0 0 1 8 11z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-angle_left"><path d="M10 14a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L6.414 8l4.293 4.293A.999.999 0 0 1 10 14z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-angle_right"><path d="M6 14a.999.999 0 0 1-.707-1.707L9.586 8 5.293 3.707a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 6 14z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-angle_up"><path d="M13 11a.997.997 0 0 1-.707-.293L8 6.414l-4.293 4.293a.999.999 0 1 1-1.414-1.414l5-5a.999.999 0 0 1 1.414 0l5 5A.999.999 0 0 1 13 11z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-annonation"><path d="M1.5 0C.616 0 0 .659 0 1.5v6C0 8.458.5 9 1.5 9H4v2l2.5-2h4c1 0 1.5-.5 1.5-1.5v-6c0-.841-.5-1.5-1.5-1.5h-9zM13 6v2c0 1.296-.637 2-2 2H7l-1.5 1v1.5c0 .84.616 1.5 1.5 1.5h5l2 2v-2h.5c1 0 1.5-.5 1.5-1.5v-5c0-1-.617-1.5-1.5-1.5H13z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-arrow"><path d="M12.971 8.994l-9.55 9.55a1.438 1.438 0 1 0 2.034 2.034l9.555-9.555L18 13.999l2-10-10 2.037 2.971 2.958z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-check"><path d="M6 12a.997.997 0 0 1-.707-.293l-3-3a.999.999 0 1 1 1.414-1.414L6 9.586l6.293-6.293a.999.999 0 1 1 1.414 1.414l-7 7A.997.997 0 0 1 6 12z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-checkfill"><path d="M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zM6.714 12L3.5 8.818l1.286-1.273 1.929 1.909L11.214 5 12.5 6.273 6.714 12z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-citeshare"><path d="M0 2.552C0 1.695.718 1 1.593 1h12.814C15.286 1 16 1.695 16 2.552v10.897c0 .857-.718 1.552-1.593 1.552H1.593C.714 15.001 0 14.306 0 13.449V2.552zM12 3v1h1v8h-1v1h2V3h-2zM4 4V3H2v10h2v-1H3V4h1zm4 0L6 5v1.5L7 6v5l.025 1H9V4H8z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-close"><path d="M5 6.333L10.667 12 5 17.667 6.333 19 12 13.333 17.667 19 19 17.667 13.333 12 19 6.333 17.667 5 12 10.667 6.333 5 5 6.333z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-cloud"><path d="M24 15c0 2.8-2.2 5-5 5H6c-3.3 0-6-2.7-6-6 0-3.1 2.3-5.6 5.4-6C6.6 5.6 9.1 4 12 4c3.7 0 6.7 2.6 7.4 6 2.5.2 4.6 2.4 4.6 5zm-10-2V9h-4v4H7l5 5 5-5h-3z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-comment"><path d="M18 3c1.657 0 3 1.334 3 2.979v8.5c0 1.645-1.156 2.707-2.813 2.707h-1.188v3.813l-4-3.813H5.812c-1.657 0-2.813-1.063-2.813-2.707v-8.5a2.989 2.989 0 0 1 3-2.979h12z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-copy"><path d="M9.502 3.502S9 3 8.5 3H2S1 3 1 4v10s0 1 1 1h8c1 0 1-1 1-1V5.5c0-.5-.5-1-.5-1l-.998-.998zM10 7H7V4s0-.5.5-.5.5.5.5.5v2h2s.5 0 .5.5-.5.5-.5.5z"></path><path d="M13.5 2.5L11.502.502S11 0 10.5 0H5S4 0 4 1v1h5.5c.5 0 1.002.502 1.002.502l.998.998s.5.5.5 1V12h1c1 0 1-1 1-1V3.5c0-.5-.5-1-.5-1z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-download"><path d="M14 15H2a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v3h10v-3a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1zm-6-5a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1zm0 1a.997.997 0 0 1-.707-.293l-3-3a.999.999 0 1 1 1.414-1.414L8 8.586l2.293-2.293a.999.999 0 1 1 1.414 1.414l-3 3A.997.997 0 0 1 8 11z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-email"><path d="M12.5 15.5l-2.598-2.274-7.428 6.367c.27.251.634.407 1.036.407h17.979c.401 0 .764-.156 1.032-.408l-7.423-6.366L12.5 15.5zM22.526 5.407A1.511 1.511 0 0 0 21.489 5H3.51c-.401 0-.764.156-1.034.41L12.499 14l10.026-8.593zM2 6.317v12.462l7.249-6.159L2 6.317zm13.751 6.301L23 18.777V6.312l-7.249 6.306z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-facebook"><path d="M12.056 8H9.08v8H5.652V8H4V5.383h1.652v-1.7C5.652 1.373 6.65 0 9.364 0h3.13v2.832H9.938c-.759-.002-.853.395-.853 1.134l-.004 1.417h3.428L12.056 8z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-feedback"><path d="M6 5c-1.657 0-2 .334-2 1.979v7.5c0 1.645.156 1.707 1.813 1.707h2.188v3.813l4-3.813h6.187c1.657 0 1.813-.063 1.813-1.707v-7.5c0-1.646-.343-1.979-2-1.979h-12z"></path></symbol><symbol viewBox="0 0 612 612" id="icon-fit_height"><path d="M405.286 268.949h128v-62h-128v-128h-62v190zm0 136.102h128v-62h-190v190h62zM268.714 268.949v-190h-62v128h-128v62h128zm-62 264.102h62v-190h-190v62h128z"></path></symbol><symbol viewBox="0 90 612 612" id="icon-fit_width"><path d="M471 168.5H343v62h128v128h62v-190zm0 392.102H343v62h190v-190h-62zM78.428 168.5v190h62v-128h128v-62h-128zm62 264.102h-62v190h190v-62h-128z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-googleplus"><path d="M5.12 9.145h2.904c-.117.753-.878 2.209-2.904 2.209-1.748 0-3.175-1.448-3.175-3.233 0-1.785 1.426-3.233 3.175-3.233.995 0 1.66.424 2.041.79l1.39-1.339C7.659 3.505 6.503 3 5.12 3A5.116 5.116 0 0 0 0 8.12c0 2.831 2.29 5.12 5.12 5.12 2.955 0 4.916-2.077 4.916-5.003 0-.336-.037-.593-.08-.849H5.121v1.756zm10.879-1.682h-1.463V6h-1.463v1.463H11.61v1.463h1.463v1.463h1.463V8.926h1.463V7.463z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-hand"><path fill-rule="evenodd" d="M8.508 15.926c-.603-.03-1.195.066-1.617-.154-2.268-1.185-2.365-3.76-5.127-5.826-.29-.217-.663-.521-.754-.96-.18-1.076 1.976-1.993 3.806 1.292.262-2.172-1.087-4.693-1.23-6.367-.141-1.673 1.605-1.64 1.988.14.39 1.813 1.383 3.374 1.383 3.374.31-2.771.302-4.272.269-5.12C7.154.49 8.879.574 8.966 2.53c.089 1.955.322 4.57.322 4.57.851-1.952 1.027-3.566 1.027-3.566-.053-1.401 1.866-2.613 1.727.048-.156 2.977-.366 4.363-.366 4.363.542-.603 1.053-1.063 1.873-2.535.821-1.473 1.84-.568 1.361.838-.443 1.305-.598 2.14-1.53 4.358-.72 1.713-.476 4.86-3.058 5.247-.6.089-1.034.113-1.814.074"></path></symbol><symbol viewBox="0 0 24 24" id="icon-highlighter"><path d="M6.5 19.5L5 21H2.395c-.4-.051-.526-.517-.241-.815l2.373-2.657L3.999 17l1-1-1-1 2-2 5 5-2 2-1-1-1 1-.5-.5zM17.963 3.341a1.194 1.194 0 0 0-1.587-.074l-8.924 7.05c-.542.44-.613 1.278-.119 1.771l4.602 4.579c.461.459 1.292.438 1.753-.02l7.975-7.936c.461-.459.443-1.247-.018-1.706l-3.682-3.664z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-info"><path d="M7.893.001A8 8 0 1 0 8.107 16 8 8 0 0 0 7.893.001zm.886 2.698c.852 0 1.102.478 1.102 1.024 0 .683-.565 1.314-1.527 1.314-.805 0-1.189-.393-1.167-1.041.001-.546.472-1.297 1.592-1.297zm-1.86 10.635c-.556 0-.964-.357-.574-1.93l.64-2.788c.11-.447.129-.626 0-.626-.167 0-.89.309-1.317.612L5.39 8.12C6.745 6.923 8.3 6.221 8.968 6.221c.557 0 .649.697.371 1.769l-.731 2.931c-.129.517-.074.696.055.696.167 0 .714-.215 1.252-.662l.315.447c-1.317 1.394-2.754 1.931-3.311 1.931z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-line"><path d="M19.579 6.456a1.438 1.438 0 1 0-2.034-2.034L3.422 18.545a1.438 1.438 0 1 0 2.034 2.034L19.579 6.456z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-link"><path d="M18.834 11.796l-2.816 2.815a3.98 3.98 0 0 1-5.629 0 3.953 3.953 0 0 1-.605-.803l1.309-1.308.212-.141c.09.309.248.602.491.845a1.994 1.994 0 0 0 2.815 0l2.815-2.815a1.991 1.991 0 0 0-2.815-2.815L13.61 8.576a4.983 4.983 0 0 0-2.539-.277l2.133-2.133a3.98 3.98 0 1 1 5.63 5.63zm-7.444 4.629l-1.001 1.002a1.994 1.994 0 0 1-2.816 0 1.994 1.994 0 0 1 0-2.816l2.816-2.815a1.993 1.993 0 0 1 2.815 0c.242.243.4.535.491.844l.212-.14 1.309-1.308a3.926 3.926 0 0 0-.605-.803 3.98 3.98 0 0 0-5.63 0l-2.815 2.815a3.98 3.98 0 1 0 5.63 5.63l2.134-2.133a4.996 4.996 0 0 1-2.54-.276z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-linkedin"><path d="M1 1.626c0-.471.158-.86.473-1.166.315-.307.725-.46 1.23-.46.495 0 .896.15 1.202.453.316.31.473.716.473 1.216 0 .452-.153.83-.46 1.131-.314.311-.729.467-1.242.467h-.014c-.495 0-.896-.156-1.203-.467C1.153 2.489 1 2.098 1 1.626zm0 2.928h3.176V14H1V4.554zM5.838 14h3V8.725c0-.33.036-.584.108-.763.126-.32.318-.592.574-.814.257-.221.58-.332.966-.332 1.01 0 1.514.712 1.514 2.136V14h3V8.584c0-1.395-.315-2.454-.946-3.175-.63-.721-1.464-1.082-2.5-1.082-1.162 0-2.068.524-2.716 1.57v.028h-.014l.014-.028V4.554h-3c.018.301.027 1.24.027 2.814s-.01 3.785-.027 6.632z"></path></symbol><symbol viewBox="0 0 109 33" id="icon-logo"><path d="M48.823 20.55c-.236.448-.595.875-1.078 1.281-.483.405-1.091.732-1.825.979s-1.561.371-2.48.371c-1.955 0-3.481-.57-4.578-1.71-1.098-1.139-1.646-2.667-1.646-4.583 0-1.299.251-2.446.753-3.443a5.414 5.414 0 0 1 2.179-2.312c.95-.545 2.086-.817 3.407-.817.82 0 1.571.12 2.255.359.684.24 1.263.549 1.738.928.475.378.838.782 1.09 1.211.251.429.376.828.376 1.199 0 .379-.141.7-.423.962a1.449 1.449 0 0 1-1.025.394c-.263 0-.481-.067-.655-.203-.174-.135-.369-.353-.586-.654-.386-.588-.79-1.028-1.211-1.322-.421-.293-.956-.44-1.605-.44-.935 0-1.688.365-2.26 1.095-.572.73-.858 1.729-.858 2.996 0 .595.074 1.142.221 1.64.146.498.359.923.637 1.275.278.352.614.618 1.008.8.394.181.827.272 1.298.272.634 0 1.177-.147 1.629-.44.452-.294.852-.742 1.199-1.345.194-.355.402-.633.626-.834a1.19 1.19 0 0 1 .823-.302c.386 0 .707.147.962.441.255.293.383.606.383.939 0 .394-.118.815-.354 1.263zm14.957-3.778c0 .942-.147 1.812-.441 2.607a5.744 5.744 0 0 1-1.275 2.052 5.628 5.628 0 0 1-1.993 1.315c-.773.305-1.642.458-2.608.458-.958 0-1.819-.155-2.584-.464a5.732 5.732 0 0 1-1.988-1.327 5.737 5.737 0 0 1-1.275-2.039c-.29-.785-.434-1.652-.434-2.602 0-.958.146-1.835.44-2.631a5.737 5.737 0 0 1 1.263-2.04 5.568 5.568 0 0 1 1.994-1.304c.78-.305 1.642-.458 2.584-.458.958 0 1.828.155 2.608.464.78.309 1.449.749 2.005 1.321a5.722 5.722 0 0 1 1.269 2.04c.29.788.435 1.657.435 2.608zm-3.176 0c0-1.291-.284-2.295-.852-3.014-.568-.718-1.331-1.078-2.289-1.078-.618 0-1.163.161-1.634.481-.471.321-.834.794-1.089 1.42-.255.626-.383 1.356-.383 2.191 0 .826.126 1.549.377 2.167.251.618.61 1.091 1.078 1.42.467.328 1.018.492 1.651.492.958 0 1.721-.361 2.289-1.083.568-.723.852-1.721.852-2.996zm5.667 4.508V7.558c0-.634.141-1.113.423-1.437.282-.325.663-.487 1.142-.487.479 0 .865.16 1.159.481.294.321.44.801.44 1.443V21.28c0 .641-.148 1.122-.446 1.443-.297.321-.682.481-1.153.481-.464 0-.84-.166-1.13-.498-.29-.333-.435-.808-.435-1.426zm9.84-1.901l1.877-6.571c.201-.688.35-1.157.447-1.408.096-.251.278-.491.544-.719.267-.228.632-.342 1.095-.342.472 0 .841.114 1.107.342.267.228.454.475.562.742.109.267.259.728.452 1.385l1.878 6.571 2.086-7.069c.139-.51.251-.879.336-1.107.085-.228.228-.429.429-.603.201-.174.491-.261.869-.261.379 0 .707.132.985.394.279.263.418.572.418.928 0 .324-.12.815-.36 1.471l-2.584 7.58a22.849 22.849 0 0 1-.522 1.391 2.06 2.06 0 0 1-.585.765c-.267.224-.632.336-1.095.336-.479 0-.856-.12-1.13-.359a2.169 2.169 0 0 1-.609-.881c-.131-.348-.274-.8-.429-1.356l-1.808-6.166-1.75 6.166c-.231.858-.482 1.505-.753 1.941-.27.437-.746.655-1.425.655-.348 0-.644-.068-.887-.203s-.446-.328-.609-.579a4.34 4.34 0 0 1-.428-.893l-.29-.817-2.561-7.58c-.255-.71-.383-1.201-.383-1.471 0-.34.135-.646.406-.916.27-.27.602-.406.996-.406.526 0 .881.149 1.067.447.185.297.382.805.591 1.524l2.063 7.069zm18.428 1.901c0 .634-.151 1.113-.452 1.437a1.498 1.498 0 0 1-1.148.487c-.463 0-.84-.166-1.13-.498-.29-.333-.434-.808-.434-1.426v-9.052c0-.625.144-1.097.434-1.413.29-.317.667-.476 1.13-.476.464 0 .846.159 1.148.476.301.316.452.757.452 1.321v9.144zm6.073-.834h6.2c.502 0 .881.117 1.136.353.255.236.382.539.382.91 0 .355-.125.645-.376.869-.251.224-.632.336-1.142.336h-8.576c-.603 0-1.053-.131-1.351-.394-.297-.263-.446-.622-.446-1.078 0-.27.105-.542.313-.817.209-.274.641-.778 1.298-1.512.696-.773 1.327-1.472 1.895-2.098.568-.626 1.095-1.211 1.582-1.756a67.95 67.95 0 0 0 1.211-1.385c.321-.378.578-.703.771-.973h-4.705c-.649 0-1.14-.058-1.472-.174-.333-.116-.499-.421-.499-.916 0-.363.126-.653.377-.869.251-.216.608-.325 1.072-.325h7.267c.672 0 1.188.099 1.547.296.359.197.539.551.539 1.06 0 .17-.035.346-.104.528-.07.181-.147.33-.232.446a6.14 6.14 0 0 1-.348.423l-.545.597-5.794 6.479zm-73.283 2.3c-2.07 3.895-6.353 6.359-11.077 6.359-7.098 0-12.854-5.755-12.854-12.854 0-7.098 5.756-12.852 12.854-12.852 4.724 0 9.007 2.463 11.077 6.356.475.897.843 1.59 1.762 1.59a1.78 1.78 0 0 0 1.759-1.532l.029-.251c0-.219-.047-.423-.117-.614l-.224-.425C27.791 3.452 22.426 0 16.252 0 7.276 0 0 7.276 0 16.251c0 8.977 7.276 16.252 16.252 16.252 6.174 0 11.539-3.451 14.286-8.522l.224-.428c.07-.188.117-.394.117-.612l-.029-.251a1.779 1.779 0 0 0-1.759-1.532c-.919 0-1.287.694-1.762 1.588zm-1.634-8.747c-.053.094-1.873 4.064-3.152 4.064-1.339 0-2.612-2.399-4.037-3.218-.576-.33-1.257-.319-1.264-.319-.007 0-.687-.011-1.265.319-1.423.819-2.696 3.218-4.037 3.218-1.279 0-3.098-3.97-3.149-4.064-.137-.266-.325-.565-.966-.58-.665-.017-1.607.63-1.202 1.566l.061.14.058.126c.705 1.337 2.878 5.903 5.198 5.903 2.651 0 3.751-2.426 4.459-3.161 0 0 .263-.392.843-.372.581-.02.843.372.843.372.709.735 1.81 3.161 4.458 3.161 2.321 0 4.492-4.566 5.201-5.903l.058-.126.062-.14c.404-.936-.539-1.583-1.202-1.566-.644.015-.831.314-.967.58z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-more"><path d="M12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-oval"><path d="M12 18c3.932 0 7-2.761 7-6s-3.068-6-7-6-7 2.761-7 6 3.068 6 7 6zm0 3c-5.523 0-10-4.029-10-9s4.477-9 10-9 10 4.029 10 9-4.477 9-10 9z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-pencil"><path d="M6.01 14.864l-.946 4.172 4.173-.967.495-.516-3.205-3.205-.516.516zM3 20.499l1.25-6.25L15.9 3.452a1.494 1.494 0 0 1 1.097-.451c.43 0 .796.15 1.076.43l2.624 2.623c.301.301.451.667.451 1.076 0 .407-.15.774-.451 1.075L10.499 19.25l-7.5 1.25z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-power"><path d="M13 3h-2v10h2V3zm3.6 2.4l-1.4 1.4c1.6 1.1 2.8 3 2.8 5.2 0 3.3-2.7 6-6 6s-6-2.7-6-6c0-2.2 1.2-4.1 2.9-5.1L7.4 5.4C5.4 6.9 4 9.3 4 12c0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.7-1.4-5.1-3.4-6.6z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-print"><path d="M5 8c-1.7 0-3 1.3-3 3v6h4v4h12v-4h4v-6c0-1.7-1.3-3-3-3H5zm3 11v-3h8v3H8zm11-7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-1-9H6v4h12V3z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-process"><path d="M8 15c-3.859 0-7-3.14-7-7a1 1 0 1 1 2 0c0 2.757 2.243 5 5 5s5-2.243 5-5-2.243-5-5-5a1 1 0 1 1 0-2c3.859 0 7 3.14 7 7s-3.141 7-7 7z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-rectangle"><path d="M19 7v10H5V7h14zM2 5.5v13A1.5 1.5 0 0 0 3.5 20h17a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 20.5 4h-17A1.5 1.5 0 0 0 2 5.5z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-reference"><path d="M14.222 0H1.778C.8 0 0 .8 0 1.778v12.444C0 15.2.8 16 1.778 16h12.444C15.2 16 16 15.2 16 14.222V1.778C16 .8 15.2 0 14.222 0zM13 5H3V4h10v1zm0 4H3V8h10v1zm-3 4H3v-1h7v1z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-related"><path d="M9 5V1s0-.5.5-.5c.333 0 .5.167.5.5v3h3s.5 0 .5.5c0 .333-.167.5-.5.5H9zM4.5 9S4 9 4 8.5c0-.333.167-.5.5-.5h7s.5 0 .5.5c0 .333-.167.5-.5.5h-7zm0 2s-.5 0-.5-.5c0-.333.167-.5.5-.5h7s.5 0 .5.5c0 .333-.167.5-.5.5h-7zm0 2s-.5 0-.5-.5c0-.333.167-.5.5-.5h7s.5 0 .5.5c0 .333-.167.5-.5.5h-7zm9-10.5L11.502.502S11 0 10.5 0H3S2 0 2 1v14s0 1 1 1h10c1 0 1-1 1-1V3.5c0-.5-.5-1-.5-1"></path></symbol><symbol viewBox="0 0 16 16" id="icon-search"><path d="M14.821 13.089l-2.646-2.63a6.024 6.024 0 0 0 1.037-3.386C13.212 3.719 10.478 1 7.106 1S1 3.719 1 7.074c0 3.354 2.734 6.073 6.106 6.073a6.09 6.09 0 0 0 3.259-.944l2.675 2.659c.192.191.703.175.874.004l.898-.893c.177-.175.311-.583.009-.884zm-7.717-2.064c-2.194 0-3.972-1.769-3.972-3.951 0-2.182 1.778-3.952 3.972-3.952s3.972 1.769 3.972 3.952c.001 2.182-1.778 3.951-3.972 3.951z" fill-rule="evenodd" clip-rule="evenodd"></path></symbol><symbol viewBox="0 0 16 16" id="icon-share"><path d="M11.452 10.012a2.026 2.026 0 0 0-1.549.731l-3.99-2.17c.082-.218.133-.451.133-.698 0-.131-.015-.258-.04-.382l4.378-2.288c.372.473.948.783 1.601.783 1.117-.001 2.019-.894 2.015-1.996-.004-1.101-.913-1.993-2.031-1.992-1.117.001-2.019.894-2.015 1.995.001.183.034.356.082.524L5.709 6.781a2.025 2.025 0 0 0-1.69-.894C2.902 5.89 1.998 6.785 2 7.886c.002 1.101.91 1.991 2.027 1.988a2.027 2.027 0 0 0 1.461-.627l4.036 2.196a1.94 1.94 0 0 0-.092.568c.002 1.101.909 1.992 2.027 1.989 1.117-.003 2.021-.898 2.019-1.999-.002-1.102-.909-1.992-2.026-1.989z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-stroke"><path d="M2 18c0-1.105.891-2 1.997-2h15.005c1.103 0 1.997.888 1.997 2 0 1.105-.891 2-1.997 2H3.997A1.994 1.994 0 0 1 2 18zm0-7.5C2 9.672 2.676 9 3.491 9h16.018a1.501 1.501 0 0 1 0 3H3.491A1.492 1.492 0 0 1 2 10.5zM2 4c0-.552.451-1 .995-1h17.01a1.001 1.001 0 0 1 0 2H2.995A.995.995 0 0 1 2 4z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-text"><path d="M9 19h12V6H9v13zm7-9v8h-2v-8h-3V8h8v2h-3zM5 4h2v17H5V4zm2-1h3v1H7V3zm0 18h3v1H7v-1zM2 3h3v1H2V3zm0 18h3v1H2v-1z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-trash"><path d="M13.5 3a.5.5 0 0 1 0 1h-.501l-.014 10.015A.985.985 0 0 1 12 15H3.971a.986.986 0 0 1-.986-.985L2.999 4H2.5a.5.5 0 0 1 0-1H5V1.985C5 1.441 5.441 1 5.985 1h4.03c.544 0 .985.441.985.985V3h2.5zM12 4v10l-8.015.016L3.999 4H12zm-5.007 8h-1V6h1v6zm3 0h-1V6h1v6zM10 3V2H5.985l.008 1H10z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-twitter"><path d="M15.997 3.539a6.587 6.587 0 0 1-1.885.517 3.288 3.288 0 0 0 1.443-1.816 6.572 6.572 0 0 1-2.084.796A3.282 3.282 0 0 0 7.878 6.03a9.313 9.313 0 0 1-6.764-3.429 3.27 3.27 0 0 0-.444 1.65 3.28 3.28 0 0 0 1.46 2.732 3.274 3.274 0 0 1-1.486-.41v.041a3.284 3.284 0 0 0 2.633 3.218 3.283 3.283 0 0 1-1.482.056 3.285 3.285 0 0 0 3.066 2.279 6.585 6.585 0 0 1-4.859 1.359 9.29 9.29 0 0 0 5.031 1.475c6.037 0 9.338-5.001 9.338-9.338l-.01-.425a6.682 6.682 0 0 0 1.638-1.699z"></path></symbol><symbol viewBox="0 0 16 16" id="icon-user"><path d="M15 15H1v-1.638c0-.487.885-1.202 2.853-1.903 1.962-.699 2.59-1.288 2.59-2.55 0-.757-.599-.511-.861-1.898-.109-.576-.638-.01-.74-1.324 0-.524.289-.654.289-.654s-.147-.776-.205-1.371C4.856 2.927 5.354 1.04 8 1h.03c2.62.056 3.115 1.93 3.044 2.662a18.07 18.07 0 0 1-.205 1.371s.289.13.289.655c-.102 1.314-.631.748-.74 1.324-.262 1.387-.86 1.14-.86 1.898 0 1.262.626 1.85 2.589 2.55 1.968.702 2.853 1.417 2.853 1.903V15z"></path></symbol><symbol viewBox="0 90 612 612" id="icon-zoomin_circle"><path d="M314.611 167.77c-126.656 0-229.334 102.676-229.334 229.333s102.678 229.334 229.334 229.334c126.658 0 229.334-102.677 229.334-229.334S441.269 167.77 314.611 167.77zm113.123 256.098h-86.357v86.36c-.003 14.78-11.983 26.766-26.766 26.766-14.778 0-26.762-11.984-26.762-26.766v-86.36h-86.365c-14.776 0-26.762-11.981-26.762-26.763s11.983-26.765 26.762-26.765h86.365v-86.364c0-14.778 11.98-26.762 26.762-26.762s26.766 11.983 26.766 26.762v86.364h86.357c14.782.001 26.768 11.983 26.768 26.765-.002 14.78-11.986 26.763-26.768 26.763z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-zoomin"><path d="M16.336 18.248l2.293 2.293a1.348 1.348 0 0 0 1.912 0 1.351 1.351 0 0 0 0-1.913l-2.293-2.293A8.959 8.959 0 0 0 20 10.999c0-4.971-4.029-9-9-9s-9 4.029-9 9a9 9 0 0 0 14.336 7.248zM10 10V6.995c0-.55.444-.995 1-.995.552 0 1 .456 1 .995V10h3.005c.55 0 .995.444.995 1 0 .552-.456 1-.995 1H12v3.005c0 .55-.444.995-1 .995-.552 0-1-.456-1-.995V12H6.995A.995.995 0 0 1 6 11c0-.552.456-1 .995-1H10z"></path></symbol><symbol viewBox="0 166.75 612 612" id="icon-zoomout_circle"><path d="M306 243.417c-126.656 0-229.334 102.676-229.334 229.333S179.344 702.084 306 702.084c126.658 0 229.334-102.677 229.334-229.334S432.658 243.417 306 243.417zm113.123 256.098h-226.25c-14.776 0-26.762-11.981-26.762-26.763s11.983-26.765 26.762-26.765h226.251c14.781.001 26.765 11.983 26.765 26.765-.001 14.779-11.983 26.763-26.766 26.763z"></path></symbol><symbol viewBox="0 0 24 24" id="icon-zoomout"><path d="M16.336 18.248l2.293 2.293a1.348 1.348 0 0 0 1.912 0 1.351 1.351 0 0 0 0-1.913l-2.293-2.293A8.959 8.959 0 0 0 20 10.999c0-4.971-4.029-9-9-9s-9 4.029-9 9a9 9 0 0 0 14.336 7.248zM15.005 10c.55 0 .995.444.995 1 0 .552-.456 1-.995 1H6.996a.995.995 0 0 1-.995-1c0-.552.456-1 .995-1h8.009z"></path></symbol></svg>';
  },
  useData: !0,
});
this.CwH.templates.plugin_notifier = CwH.template({
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    var d;
    return (
      '<div class="cw-plugin-notifier">\n\t\n\t<div class="chrome-notifier">\n\t\t<a>' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "close" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '</a>\n\t\t<div class="notifier-head">\n\t\t\t<h4>Interact with millions of articles on the internet</h4>\n\t\t\t<div class="c-right">\n\t\t\t\t<a class="primary-btn-blue" href="https://chrome.google.com/webstore/detail/colwiz-web-importer/djdocbgipfnggcpdejicpgjcaijcdlga" target="_blank" data-action="install-chrome-extension"><span>Install Chrome Plugin</span></a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="c-left"><i class="ipdf-artwork"></i></div>\n\t\t<div class="c-mid">\n\t\t\t<p>Highlight and annotate million of articles on hundreds of websites including Google Scholar and PubMed.</p>\n\t\t</div>\n\t\t<div class="c-left"><i class="device-artwork"></i></div>\n\t\t<div class="c-mid">\n\t\t\t<p>Directly add publications from search results on websites and, generate bibliographies in Google Docs</p>\n\t\t</div>\n\t</div>\n\t\n\t<div class="other-notifier">\n\t\t<a>' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "close" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '</a>\n\t\t<div class="c-left">\n\t\t\t<i class="bookmarklet-artwork"></i>\n\t\t</div>\n\t\t<div class="c-mid">\n\t\t\t<h4>Like this PDF experience?</h4>\n\t\t\t<p>Try it on over 50 of the largest publishers including Google Scholar, PubMed and IEEE. Store your PDFs on the cloud and manage your library.</p>\n\t\t</div>\n\t\t<div class="c-right">\n\t\t\t<a class="primary-btn-blue" onclick="return false;" data-action="dont-install-other-extension" href="javascript:(function(){var ts=new Date();ts=((ts-((ts)%25(86400))));var spt=document.createElement(\'script\');spt.src=\'' +
      b.escapeExpression(
        b.lambda(
          null != (d = null != a ? a.CWPDFReaderConfig : a) ? d.cwURL : d,
          a
        )
      ) +
      "' + '/js/book.js?ts='+ts;spt.type='text/javascript';document.getElementsByTagName('body')[0].appendChild(spt);})();\"><span>wizdom.ai Bookmarklet</span></a>\n\t\t\t<span class=\"info\">(Drag this button to your bookmark bar)</span>\n\t\t</div>\n\t</div>\n\n</div>"
    );
  },
  usePartial: !0,
  useData: !0,
});
this.CwH.templates.sidebar = CwH.template({
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    var d;
    return (
      '<div class="cw-sideBarNav">\n\t<a data-action="cw-citeTab">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "info" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '<span>Details</span></a>\n\t<a data-action="cw-authorTab">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "user" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '<span>Authors</span></a>\n\t<a data-action="cw-referenceTab">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "reference" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '<span>References</span></a>\n\t<a data-action="cw-relatedTab"><b class="ipdf-bubble-notifier"></b>' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "related" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '<span>Related</span></a>\n\t<a data-action="cw-antView">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "annonation" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '<span>Annotations</span></a>\n\t<a data-action="cw-shareTab">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "citeshare" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '<span>Cite</span></a>\n</div>\n\n<div class="cw-sideBar">\n\t<div class="cw-tabNavigator">\n\t\t<ul>\n\t\t\t<li><a data-action="cw-citeTab" class="cw-tab cw-citeTab ui tooltip bottom" data-tooltip="Details">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "info" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '<span>Details</span></a></li>\n\t\t\t<li><a data-action="cw-authorTab" class="cw-tab cw-authorTab ui tooltip bottom" data-tooltip="Authors">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "user" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '<span>Authors</span></a></li>\n\t\t\t<li><a data-action="cw-referenceTab" class="cw-tab cw-referenceTab ui tooltip bottom" data-tooltip="References">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "reference" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '<span>References</span></a></li>\n\t\t\t<li><a data-action="cw-relatedTab" class="cw-tab cw-relatedTab ui tooltip bottom" data-tooltip="Related">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "related" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '<span>Related</span></a></li>\n\t\t\t<li><a data-action="cw-antView" class="cw-tab cw-antView ui tooltip bottom" data-tooltip="Annotations">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "annonation" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '</i><span>Annotation</span></a></li>\n\t\t\t<li><a data-action="cw-shareTab" class="cw-tab cw-shareTab ui tooltip bottom" data-tooltip="Cite and Share">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "citeshare" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '<span>Cite</span></a></li>\n\t\t</ul>\n\t\t<a class="closeSidebarBtn">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "close" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '</a>\n\t</div>\n\n\t<div class="cw-tabContainer">  \n\n        <h1 class="cw-tabHeading">Details</h1>\n\t\t<div class="cw-tabData cw-citeTab" id="cw-citeTab">\n\t\t\t<div class="cw-tabContent">\n\t\t\t\t<h2 class="pub-title">Evaluation of the pharmacokinetics and pharmacodynamics of ticagrelor co-administered with aspirin in healthy volunteers</h2>\n\t\t\t\t<p class="pub-info">Wilmington, DE, USA Published online: 10 May 2015.</p>\n\t\t\t\t<p class="pub-authors"><a>Renli Teng, Juan Maya</a>, <a>Kathleen Butler</a></p>\n\t\t\t\t<div class="pub-abs-container">\n\t\t\t\t\t<h4>Abstract</h4>\n\t\t\t\t\t<p class="pub-abstract">The results of two independent, randomized, two-period crossover, single-center studies, conducted to assess the pharmacokinetics of ticagrelor \ufc01 aspirin, inhibition of platelet aggregation (IPA) with ticagrelor/aspirin vs. clopidogrel/aspirin, and safety, tolerability, and bleeding times are reported here. In Study A (open-label), 16 volunteers received ticagrelor (50 mg bid Days 1\u20135; 200 mg bid Days 6\u20139; one 200 mg dose on Day 10) \ufc01 300 mg qd aspirin (Days 1\u201310). In Study B (double-blind, double-dummy), 16 volunteers received aspirin (300 mg loading dose/75 mg qd Days 2\u20139) with either ticagrelor (200 mg bid Days 4\u20138, one 200 mg dose on Day 9) or clopidogrel (300 mg loading dose Day 4, 75 mg qd Days 5\u20139). At steady-state ticagrelor (50 mg bid, or 200 mg bid), concomitant aspirin (300 mg qd) had no effect on mean maximum plasma concentration (Cmax), median time to Cmax (tmax), or mean area under the plasma concentration-time curve for the dosing interval (AUC0\u2013\ufc07) for ticagrelor and its primary metabolite, AR-C124910XX. Following 200 mg bid ticagrelor, mean Cmax and AUC0\u2013\ufc07 for both parent and metabolite were comparable with co-administration of aspirin at 75 mg and 300 mg qd. Aspirin (300 mg qd) had no effect on IPA (ADP- induced) by ticagrelor. However, aspirin and ticagrelor had an additive effect on IPA (collagen-induced). Ticagrelor/aspirin increased bleeding times vs. baseline. Ticagrelor/aspirin co-administration was well tolerated at all dose combinations evaluated. In summary, the findings of this study demonstrate that co-administration of aspirin (300mg qd) with ticagrelor (50mg bid, or 200mg bid) had no effect on ticagrelor pharmacokinetics or IPA (ADP-induced) by ticagrelor.</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="pub-keyword-container">\n\t\t\t\t\t<h4>Keywords</h4>\n\t\t\t\t\t<p class="pub-keywords">Ticagrelor, P2Y12 receptor antagonist, antiplatelet therapy, aspirin, clopidogrel, pharmacokinetics</p>\n\t\t\t\t</div>\n            </div>\n\t\t</div>\n\n        <div class="cw-tabData cw-authorTab" id="cw-authorTab">\n            <div class="cw-tabContent">\n                <h1 class="numberOfAuthors"><span>3 Authors</span></h1>\n                <ul class="authorList">\n\n                </ul>\n                <div class="tips-box">\n                \t<i class="icon-close"></i>\n                \t<span>Why not view full profile to find all of their publications or follow them to stay updated with their future publications.</span>\n                </div>\n            </div>\n        </div>\n\n\n\n\t\t<div class="cw-tabData cw-antView" id="cw-antView">\n\t\t\t<div class="cw-tabContent">\n\t\t\t\t<div class="actionContainer cw-annotSelector">\n\t\t\t\t\t<select class="custom-select cw-annotatorsDropDown">\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<h1 class="numberOfComments">Number Of Comments:7</h1>\n\t\t\t\t<div class="noAnnotations">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class="noAnnotationsArt"></i>\n\t\t\t\t\t\t<h4>No annotations taken</h4>\n\t\t\t\t\t\t<span>Use the highlighter to take annotations.</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<ul class="annsList">\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="cw-tabData cw-referenceTab" id="cw-referenceTab">\n\t\t\t<div class="cw-tabContent">\n\t\t\t\t<ul class="refsList">\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="cw-tabData cw-relatedTab" id="cw-relatedTab">\n\t\t\t<div class="cw-tabContent">\n\t\t\t\t<ul class="relList">\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="cw-tabData cw-shareTab" id="cw-shareTab">\n\t\t\t<div class="cw-tabContent">\n\t\t\t\t<h2 class="hidden">Cite this article</h2>\n                <div id="format-citation">\n                    <div id="formatTabNavigator">\n                        <ul class="citeStyles">\n                            <li class="selected"><a><span class="styleItem" data-val="American Psychological Association 6th edition">APA</span></a></li>\n                            <li><a><span class="styleItem" data-val="Modern Language Association 7th edition">MLA</span></a></li>\n                            <li><a><span class="styleItem" data-val="Elsevier - Harvard 2">Harvard</span></a></li>\n                            <li><a><span class="styleItem" data-val="more">More</span></a></li>\n                        </ul>\n                    </div>\n                    <div id="formatTabContainer">\n                        <div id="formatOptions" class="hidden">\n                            <a href="javascript:void(0)" class="search-btn"></a>\n                            <input id="formatStyles" placeholder="Search from 7000 styles">\n                            <a href="javascript:void(0)" id="removeText">&#x2715;</a>\n                        </div>\n                        <div class="bib-body" contenteditable="true" spellcheck="false">\n                            <b class="info-base-text" style="display: none">Type your citation styles for preview</b>\n                        </div>\n                    </div>\n                    <div class="pubAct">\n                        <span id="copyToClipboard" class="primary-btn-blue ui tooltip top-right">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "copy" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      ' Copy Citation</span>\n                    </div>\n                </div>\n                <h2 class="hidden">Share this article</h2>\n                <div id="share-article">\n                    <div class="social-links">\n                        <a data-attr="share-facebook" target="_blank" class="smLink facebook">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "facebook" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '</a>\n                        <a data-attr="share-gplus" target="_blank" class="smLink gplus">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "googleplus" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '</a>\n                        <a data-attr="share-linkedin" target="_blank" class="smLink linkedin">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "linkedin" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '</a>\n                        <a data-attr="share-twitter" target="_blank" class="smLink twitter">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "twitter" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '</a>\n                        <a data-attr="share-email" target="_blank" class="smLink email">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "email" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '</a>\n                    </div>\n                    <div class="share-link">\n                        <input type="text" readonly placeholder="http://colwizreader.html&et=31&eid=2b">\n                        <span class="ui tooltip top-right">Copy Link</span>\n                    </div>\n                </div>\n                <span class="license">\n                     <a href="https://github.com/Juris-M/citeproc-js" target="_blank">Citations by CSL (citeproc-js)</a> and styles from<br>\n                     <a href="https://www.zotero.org/styles" target="_blank">Zotero style repository</a>.\n                </span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n'
    );
  },
  usePartial: !0,
  useData: !0,
});
this.CwH.templates.text_select_option = CwH.template({
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    var d;
    return (
      '<div class="cw-text-tip">\n\t<i class="carret-down"></i>\n\t<a data-action="addNote" title="Add notes">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "addcomment" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '</a>\n\t<a data-action="highlight" title="Highlight">\n' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "highlighter" },
        data: f,
        indent: "\t\t",
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      '\t\t<span class="color-pick">\n\t\t\t<b title="Yellow" data-color="#fffa45"></b>\n\t\t\t<b title="Bright Green" data-color="#00fc42"></b>\n\t\t\t<b title="Aqua" data-color="#00ffff"></b>\n\t\t\t<b title="Pink" data-color="#ff30f9"></b>\n\t\t</span>\n\t</a>\n</div>\n<div class="cw-text-tip-edit">\n\t<i class="carret-down"></i>\n\t<textarea rows="8"></textarea>\n\t<a class="noteDelete">' +
      (null !=
      (d = b.invokePartial(e.icon, a, {
        name: "icon",
        hash: { src: "trash" },
        data: f,
        helpers: c,
        partials: e,
        decorators: b.decorators,
      }))
        ? d
        : "") +
      "<span>Delete</span></a>\n</div>"
    );
  },
  usePartial: !0,
  useData: !0,
});
this.CwH.templates.tourtip = CwH.template({
  compiler: [7, ">= 4.0.0"],
  main: function (b, a, c, e, f) {
    return '<div class="guideTipContainer TR"> \n\t<h4>Heading</h4>\n\t<p>Lorem Ipsum Generator. Generate lorem ipsum in paragraphs, words or sentences. Optional html markup Lorem Ipsum Genera </p>\n\t<a class="primary-btn-blue">Got it!</a>\n</div>';
  },
  useData: !0,
});
var CWHtmlStructureClass = (function () {
    function b() {}
    return (
      (b.prototype.getBody = function (a, b) {
        a = encodeURI(a);
        b = encodeURI(b);
        var e = "cw-logo";
        CWPDFReaderConfig.readerMode === CWPDFReaderMode.Publisher &&
          (e = "publisher-logo");
        var f = "display:none;",
          d = "";
        CWPDFReaderConfig.readerMode !== CWPDFReaderMode.Library &&
          CWPDFReaderConfig.readerMode !== CWPDFReaderMode.Drive &&
          ((f = ""), (d = "display:none;"));
        var g = CWPDFReaderConfig.readerMode === CWPDFReaderMode.Drive,
          h =
            CWPDFReaderConfig.readerMode !== CWPDFReaderMode.Library &&
            CWPDFReaderConfig.readerMode !== CWPDFReaderMode.Drive;
        CwH.partials = CwH.templates;
        var l = CwH.templates.getBody;
        return l({
          smallCanvasClass: "",
          imageUrl: a,
          logoClass: e,
          modeDrive: g,
          modeNotDriveLibrary: h,
          fullscreenBtnStyle: f,
          restoreBtnStyle: d,
          CWPDFReaderConfig: {
            cwURL: CWPDFReaderConfig.cwURL,
            idURL: CWPDFReaderConfig.idURL,
          },
          pdfUrl: b,
        });
      }),
      (b.prototype.getCommentBody = function (a) {
        return (
          CWPDFReaderConfig.isDesktopMode() ||
            CWPDFReaderConfig.readerMode === CWPDFReaderMode.Chrome
            ? CwH.templates.getCommentBody
            : window.parent.CwH.templates.getCommentBody
        )({
          cmtId: a.cmtId,
          cmtText: a.cmtText,
          cmtClass: a.cmtClass,
          timeDiff: a.timeDiff,
          cmtPage: a.cmtPage,
          minY: a.minY,
        });
      }),
      (b.prototype.getSplashScreen = function (a) {
        CwH.partials = CwH.templates;
        var b = CwH.templates.getSplash,
          e = !CWPDFReaderConfig.isCoreMode();
        return b({
          classSpec: a,
          notCoreMode: e,
          loaderClass: e ? "cw-loader" : "",
        });
      }),
      (b.prototype.getPopupBody = function (a, b) {
        var e = CwH.templates.getPopupBody;
        return e({ getRecHtml: a, contextCont: b });
      }),
      (b.prototype.getDownloadPopup = function (a, b) {
        var e = JSON.parse(JSON.stringify(a));
        /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$/.test(
          e.title
        ) && (e.title = Base64.decode(e.title));
        var f = btoa(e.pdfLink + "@@@0"),
          d = CwH.templates.getDownloadPopup;
        return d({ metaData: e, encodedHash: f, publisherOpt: b });
      }),
      (b.prototype.getReferenceTip = function (a, b) {
        var e = window.parent.CwH.templates.getReferenceTip,
          f = { ref: a };
        b && (f.tip = !0);
        return e(f);
      }),
      (b.prototype.getAuthorSideBarLi = function (a, b) {
        1 < a.pubs && (a.pubsPlus = !0);
        1 < a.coCount && (a.coAuthPlus = !0);
        var e,
          f,
          d,
          g = 1 < b ? "s" : "";
        CwZ(".cw-authorTab .numberOfAuthors span").text(b + " Author" + g);
        a.nameInitials =
          ((e = a.fullName),
          (f = e.toUpperCase().split(/[\s.]+/)),
          (d =
            1 === f.length
              ? f[0].charAt(0)
              : f[0].charAt(0) + f[f.length - 1].charAt(0)),
          d);
        e =
          CWPDFReaderConfig.isDesktopMode() ||
          CWPDFReaderConfig.readerMode === CWPDFReaderMode.Chrome
            ? CwH.templates.getAuthorSideBarLi
            : window.parent.CwH.templates.getAuthorSideBarLi;
        f = CWPDFReaderConfig.cwURL;
        d = f + CWUtils.generateEntLinks(a.id, a.fullName, "199");
        return e({ author: a, domainURL: f, authBaseURL: d });
      }),
      (b.prototype.getAuthorSidebarWidget = function (a, b, e, f) {
        var d = CwH.templates.getAuthorSidebarWidget,
          g = "https://" + cPDF.domain,
          h = g + CWUtils.generateEntLinks(b.id, b.fullName, "199");
        return d({
          nameInitials: a,
          authLink: h,
          thisAuth: b,
          pubs: e,
          co_authors: f,
          author: b,
          domainURL: g,
        });
      }),
      (b.prototype.getHead = function (a, b, e) {
        var f =
            "lib/jquery_ireader.js lib/raven.js lib/Blob.js lib/jDialog.js lib/jDialogFunc.js lib/pdf.js lib/svg.min.js lib/autosize.js lib/svg.filter.js lib/zlib_and_gzip.min.js lib/pdf_find_controller.js lib/tether.js extension/html_structure.js publisher/iframe_pub.js main/00_config.js main/01_logger.js main/02_cw_codec.js main/03_utilities.js /main/03b_pdfreader.js".split(
              " "
            ),
          d = [];
        switch (CWPDFReaderConfig.readerMode) {
          case CWPDFReaderMode.Chrome:
            f.push("main/04a_pdfreader_chrome.js");
            break;
          case CWPDFReaderMode.Library:
            f.push("main/04a_pdfreader_library.js");
            break;
          case CWPDFReaderMode.Drive:
            f.push("main/04a_pdfreader_drive.js");
            break;
          case CWPDFReaderMode.Publisher:
          case CWPDFReaderMode.Webimporter:
            f.push("main/04a_pdfreader_publisher.js");
        }
        f.push("main/05_annotations.js");
        f.push("main/06_page.js");
        CWPDFReaderConfig.readerMode !== CWPDFReaderMode.Publisher &&
          f.push("main/07_datacenter.js");
        f.push("main/08_textlayer.js");
        f.push("main/09_comments.js");
        f.push("main/10_shape.js");
        CWPDFReaderConfig.readerMode === CWPDFReaderMode.Chrome
          ? d.push(
              window._colwizStylesPath_["webpdf/reader-chrome.css"].replace(
                "webpdf/",
                ""
              )
            )
          : (d.push(
              window._colwizStylesPath_["webpdf/reader-web.css"].replace(
                "webpdf/",
                ""
              )
            ),
            d.push(
              window._colwizStylesPath_["webpdf/csl.css"].replace("webpdf/", "")
            ));
        var g = CwH.templates.getHead;
        return g({ scripts: f, css: d, jsPath: a, cssPath: b, version: e });
      }),
      (b.prototype.getSignupDialog = function () {
        return (
          CWPDFReaderConfig.isDesktopMode() ||
            CWPDFReaderConfig.readerMode === CWPDFReaderMode.Chrome
            ? CwH.templates.getSignupDialog
            : window.parent.CwH.templates.getSignupDialog
        )({});
      }),
      (b.prototype.getFeedbackForm = function () {
        return (
          CWPDFReaderConfig.isDesktopMode() ||
            CWPDFReaderConfig.readerMode === CWPDFReaderMode.Chrome
            ? CwH.templates.getFeedbackForm
            : window.parent.CwH.templates.getFeedbackForm
        )({});
      }),
      (b.prototype.getUserToDD = function (a, b) {
        return (
          CWPDFReaderConfig.isDesktopMode() ||
            CWPDFReaderConfig.readerMode === CWPDFReaderMode.Chrome
            ? CwH.templates.getUserToDD
            : window.parent.CwH.templates.getUserToDD
        )({ uid: a, divText: b });
      }),
      (b.prototype.getCoreDialog = function () {
        return (
          CWPDFReaderConfig.isDesktopMode() ||
            CWPDFReaderConfig.readerMode === CWPDFReaderMode.Chrome
            ? CwH.templates.getCoreDialog
            : window.parent.CwH.templates.getCoreDialog
        )({});
      }),
      (b.prototype.getSupplementLiHtml = function (a, b) {
        return (
          CWPDFReaderConfig.isDesktopMode() ||
            CWPDFReaderConfig.readerMode === CWPDFReaderMode.Chrome
            ? CwH.templates.getSupplementLiHtml
            : window.parent.CwH.templates.getSupplementLiHtml
        )({ key: a, finalFile: b });
      }),
      (b.prototype.insertButtonsOnPage = function (a) {
        if (CWPDFReader && CWPDFReader.pubSolInjected) return !0;
        if (
          CWPDFReaderConfig &&
          CWPDFReaderConfig.readerMode === CWPDFReaderMode.Webimporter
        )
          return "";
        var b,
          e = "hidden" !== CwZ.trim(a["class"]),
          f = "",
          d = !1,
          g = !1,
          h = !1;
        if (
          (publisher &&
            (publisher.id,
            (d = !!~a["class"].trim().indexOf("-list")),
            (g = !!~a["class"].trim().indexOf("-detail")),
            (b = publisher.buttonStyle),
            (h = (d || g) && "popup" === b)),
          e)
        )
          if ("popup" === b)
            if (
              (0 === CwZ("#preloadCwZSprite").length &&
                CwZ("body").append('<div id="preloadCwZSprite"></div>'),
              g)
            )
              try {
                return a.buttonCB(a.metaData), !1;
              } catch (l) {
                return !1;
              }
            else {
              if (d)
                try {
                  return a.buttonCB(a.metaData), !1;
                } catch (m) {
                  return !1;
                }
            }
          else {
            CWPDFReaderConfig.newExtMode;
            f = !0;
            b = "View & Annotate PDF";
            d = "Add to wizdom.ai";
            a || (a = { pdfUrl: "", index: 0, inline: !1, class: "" });
            void 0 !== CWPDFReader_Publisher &&
            CWPDFReader_Publisher.getInstance().colwizOptions
              ? (f =
                  CWPDFReader_Publisher.getInstance().colwizOptions
                    .showAddToColwiz)
              : CWPDFReader.colwizOptions &&
                (f = CWPDFReader.colwizOptions.showAddToColwiz);
            e = "";
            CWPDFReaderConfig.readerMode === CWPDFReaderMode.Webimporter &&
              ((e = 'style="display:none !important"'),
              (d = CWPDFReaderConfig.pubModeBtnsTxt),
              (b = d.view),
              (d = d.add));
            CWPDFReaderConfig.readerMode === CWPDFReaderMode.Publisher &&
              ((a["class"] += " pub-mode"),
              (d = CWPDFReaderConfig.pubModeBtnsTxt),
              (b = d.view),
              (d = d.add));
            CWPDFReaderConfig.readerMode === CWPDFReaderMode.Chrome &&
              (b = CWPDFReaderConfig.extModeBtnsTxt.view);
            g = "";
            a.inline && !h && (g = " cw-inline");
            g += " " + a["class"];
            h && (e = 'style="display:none"');
            var h = CWHtmlStructure.generateReaderHash(a.pdfUrl, a.index),
              p = CwH.templates.getButtons,
              n = "top";
            a.tooltipPos && (n = a.tooltipPos);
            f = p({
              classes: g,
              style: e,
              generatedHash: h,
              index: a.index,
              url: a.pdfUrl,
              viewBtnTxt: b,
              hoverBtnText: CWPDFReaderConfig.pubModeBtnsTxt.viewHover,
              showAddButton: f,
              addBtnTxt: d,
              addHoverBtnText: CWPDFReaderConfig.pubModeBtnsTxt.addHover,
              tooltipPos: n,
            });
            CWPDFReaderConfig.readerMode === CWPDFReaderMode.Chrome &&
              CwZ("base").length &&
              (f = f.replace(
                new RegExp(/href="(#[^"]*)"/),
                'href="' + location.href + "#" + h + '"'
              ));
          }
        return f;
      }),
      (b.prototype.generateReaderHash = function (a, b, e) {
        a = a + "@@@" + b;
        return e && (a += "@@@forwarded"), (a = Base64.encode(a)), a;
      }),
      (b.prototype.decodeReaderHash = function (a) {
        a = Base64.decode(a).split("@@@");
        var b = [];
        return (
          (b.PDFURL = a[0]),
          (b.INDEX = a[1]),
          a[2] && "forwarded" === a[2] && (b.FORWARDED = !0),
          b
        );
      }),
      b
    );
  })(),
  CWHtmlStructure = new CWHtmlStructureClass();
"undefined" != typeof CwH &&
  CwH.registerHelper("ifC", function (b, a, c, e) {
    switch (a) {
      case "==":
        return b == c ? e.fn(this) : e.inverse(this);
      case "===":
        return b === c ? e.fn(this) : e.inverse(this);
      case "<":
        return b < c ? e.fn(this) : e.inverse(this);
      case "<=":
        return b <= c ? e.fn(this) : e.inverse(this);
      case ">":
        return c < b ? e.fn(this) : e.inverse(this);
      case ">=":
        return c <= b ? e.fn(this) : e.inverse(this);
      case "&&":
        return b && c ? e.fn(this) : e.inverse(this);
      case "||":
        return b || c ? e.fn(this) : e.inverse(this);
      default:
        return e.inverse(this);
    }
  });
var CWParser = {},
  Callbacks = {
    addButton: function () {},
    success: function () {},
    metaData: {},
  },
  currentParser = "",
  prodAllowedDomains = {
    informaworld:
      "tbit csmt rbri pcns gcmb rcme teis terg tcim tcon tetn ggen tprs tsys tlct tmph tppc gsch bfsn tres tfac lmsc lsyc ujst oaef oaen uasa utas ubes ucgs utch usbr ucha uspp uoeh ulks reno fbep ccph rsah rics".split(
        " "
      ),
  },
  testSkippedDomains = { informaworld: [] },
  Utility = {
    isError: !1,
    base64Matcher:
      /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$/,
    checkHtmlTags: /<[^>]+>/,
    isUndefined: function (b) {
      return !(void 0 !== b && "" != b);
    },
    issnRefMap: {
      ChicagoAD:
        "08989621 21552851 08003831 12538078 23818107 03740463 14767333 03056244 17528631 08821127 02722011 19475683 11745398 13648470 02692171 13504851 1350486X 00038628 13602381 23306343 16081625 1683478X 10225706 02602938 08164649 10357718 18366503 07293682 0067270X 09608788 01416200 01425692 00455091 17583004 15230406 23761199 02634937 1358684X 14733285 17538963 17525098 13621025 13604813 10286608 19463014 15710882 2040610X 03057925 10253866 17550912 14639947 23248823 09584935 10304312 17510694 21681392 14672715 23337486 19460171 17539153 14780038 14759551 10242694 14487136 09614524 21665095 09739572 14626268 09687599 1600910X 02630672 09575146 21599165 10438599 03004279 09645292 09650792 00131911 03055698 13632752 0305215X 17517575 19420676 13504622 23251042 17449642 17457823 03043797 21568235 08856257 02619768 02602938 17569370 09540253 13629379 11035897 13600826 01615440 00185868 08959285 2157930X 17501229 13511610 17508975 14675986 21598282 13571516 02650487 01430750 13670050 1364436X 10618562 0951192X 15623599 10286632 17538947 09669760 03081079 14635240 13527258 13603116 13675567 14794713 00207543 01431161 14786451 19397038 13563475 14719037 13600869 19422539 1369801X 13183222 1389224X 01629778 00219266 08865655 19401493 10796126 17508061 14765284 02589001 0965156X 14782804 17530350 23738871 19439342 17487870 13639080 17457289 09544828 21606544 09640568 1369183X 07036337 0309877X 17449626 21504857 14675986 17502977 17564905 13569325 17489725 13527266 17459737 14682753 1354571X 14725886 01434632 17400201 08853134 23299460 13669877 23247797 20430795 13547860 13574809 14702029 13636820 21698252 13676261 17442222 17439884 03003930 17520843 03088839 13623699 17450101 09639489 09647775 14613808 00905992 14636778 14790726 14452294 14681366 13603108 01154451 17514517 17408989 01442872 21565503 23268743 1060586X 09537287 14719037 13613324 01416200 09637494 2150704X 23760818 13596748 02671522 13642529 15017419 13632434 14681811 17448727 0969160X 02691728 10350330 20551940 19438192 14683857 17430437 09537325 17503175 0158037X 17503280 2040350X 17411548 14715880 03075079 17503132 14682761 13645145 00397679 13664530 13562517 14442213 14664364 19373260 09593969 09638199 17570417 07329113 13629387 03066150 13556509 1463922X 17516978 02772248 20403526 03081060 23249935 21680566 13691066 14725878 23268263 00438243 21500894 21658005".split(
          " "
        ),
      APA: "09639284 17449480 10841806 17512549 21662630 2374068X 1754730X 23322373 19376812 14725843 13607863 13825585 09540121 13032917 10615806 02687038 08957347 03071375 17452007 17454832 17533015 21507686 02188791 23276665 02185385 21640599 18377122 1359866X 13488678 01292986 12259276 09552367 10357823 0969594X 14616734 00048623 08120099 1406099X 19434472 09583157 02648725 17432979 03069885 09613218 0305764X 09297049 21697213 17544750 14693062 17521882 02699931 16506073 13546805 02643294 17588928 10609164 14662043 03634523 03637751 22041451 17404622 13668803 15575330 23743603 09588221 08993408 09540091 10282580 07494467 10376178 13569775 21582041 14733145 09515070 23744006 1478601X 17405904 19301944 09581596 17508487 15295036 01596306 13674676 13683500 03626784 19476337 21662282 03004430 03085147 00131857 02667363 00313831 13803611 19942060 17524032 17477891 21550085 17449057 09638180 17797179 23254823 17405629 19648189 13642537 13691457 17461391 1359432X 09654313 10463283 16184742 17489539 19424620 09540105 19424280 20296991 09853111 17499518 15481603 23762004 14767724 17518253 07359683 21642850 17437199 19488300 01457632 03797724 02103702 13698036 02681102 14703297 10798587 10494820 23258020 0803706X 14459795 1360144X 02673843 14735903 23729333 01924036 17457300 17542863 21650349 1034912X 17543266 14616718 19409052 13603124 02601370 17509653 14790718 18340806 22040552 21594937 09518398 21548455 1612197X 00207721 23302674 15980634 14480220 12265934 07900627 10382046 12294659 1750984X 09620214 10293523 14797585 14729679 00218839 11663081 07391102 14697017 13803395 20445911 23307706 10511253 00220272 12460125 1350178X 14724049 1360080X 1523908X 09589236 03098265 20932685 21639159 1743873X 15022250 00221686 13668250 17475759 21699763 23270012 17445647 08841241 0267257X 16522354 03057240 14427591 18335330 19407963 09599916 09296174 02646838 19409419 14043858 09649069 02640414 0965254X 09669582 19480881 14766825 21515581 09571264 07418825 01426397 14708477 09658416 23273798 07908318 1357650X 02614367 14927713 23737867 23750472 09658211 17523281 17938120 21632324 13576275 2005615X 14608944 13554794 15294145 09602011 13614568 00779954 08038740 08098131 19012276 18902138 02680513 23265507 13600818 14445921 02643944 02723646 15614263 02668734 1068316X 13548506 21711976 14623943 21681376 2153599X 23297018 14794802 21693293 14680629 10371656 09243453 15298868 14681994 13215906 13504630 15534510 14742837 17470919 10291954 13562576 13573322 17511321 14763141 21640629 19346182 15732479 03057267 17425964 13540602 13583883 19416520 00049670 13854046 09585176 18735398 09585192 03033910 00220388 17439760 01062301 02642069 14783363 14616688 21568316 03721426 21931674 01441647 21650020 13506285 17450128 16078055 17586801 09397140 09523987 17467586".split(
        " "
      ),
      tandf_SMAR: ["17451000"],
      CSE: "09064710 03650340 1745039X 03235408 10236244 09524622 21513732 01448765 09291016 07060661 00087114 10255842 21681163 21580103 14728028 07360932 10095020 2373566X 07294360 14615517 23335432 01647954 21513732 09603123 14942119 09670874 19463138 07924259 15659801 07929978 09712119 23249676 02705060 1943815X 20464177 00222933 1755876X 17429145 10236244 21501203 00305316 01916122 02827581 17445302 01650521 03946975 01652176 00837792".split(
        " "
      ),
      MLA: ["08989575", "10509585", "14636204", "01440357", "14746689"],
      Harvard: "20507828 02682621 00063657 00020184 11926422 13698230".split(
        " "
      ),
      NLM: "09243046 01691864 00036811 21672857 09168451 2326263X 09542299 17476933 09276440 0889311X 23335777 15685551 14689367 13598139 10652469 0020739X 17445760 17415977 10256016 01694243 09205063 09205071 21681015 22348972 00949655 17415993 21650373 21681015 14685248 03081087 21680396 1358314X 08927022 23766808 10589759 01411594 00319104 17686733 17476933 00423114 17455030 02757540".split(
        " "
      ),
    },
    checkIssnParser: function (b) {
      for (var a in Utility.issnRefMap)
        if (0 <= Utility.issnRefMap[a].indexOf(b)) return a;
    },
    getIssnCheck: function (b) {
      for (var a = b.length, c = 0, e = 0; e < a; e++)
        c += parseInt(b.charAt(e)) * (a - e + 1);
      return (
        0 != (c %= 11) && (c = 11 - c), 10 == c && (c = "X"), b + c.toString()
      );
    },
    checkYearString: function (b) {
      return b && !b.match(/(18|19|20)\d{2}[a-z]?/) && (b = ""), b;
    },
    referenceParser: function (b, a) {
      var c = CwZ.Deferred(),
        e = [],
        f = "js/extraction/ref_" + b.toLowerCase() + ".js?v=" + cPDF.version,
        d = "CWRefParser_" + b;
      return (
        (e = []),
        cPDF.addScript(f, function () {
          e = window[d].parseReferences(a);
          c.resolve(e);
        }),
        c.promise()
      );
    },
    matchAuthors: function (b, a) {
      var c = 0,
        e = b.length;
      if (0 < e) {
        for (var f = 0; f < a.length; f++)
          for (var d = 0; d < e; d++) b[d] === a[f] && c++;
        return Math.floor((c / e) * 100);
      }
      return 0;
    },
    parseQueryStr: function (b) {
      var a,
        c = /([^&=]+)=?([^&]*)/g,
        e = {};
      if (b)
        for ("?" == b.substr(0, 1) && (b = b.substr(1)); (a = c.exec(b)); ) {
          var f = decodeURIComponent(a[1].replace(/\+/g, " "));
          a = decodeURIComponent(a[2].replace(/\+/g, " "));
          void 0 !== e[f]
            ? ($.isArray(e[f]) || (e[f] = [e[f]]), e[f].push(a))
            : (e[f] = a);
        }
      return e;
    },
    parseHTML: function (b) {
      var a = document.createElement("html");
      return (a.innerHTML = b), a;
    },
    filter: function (b, a, c) {
      return !0;
    },
    getMetas: function (b) {
      Utility.metatype = "";
      var a = CwZ(b.target + " meta");
      if (0 < a.length)
        for (var c = 0; c < a.length; c++)
          try {
            var e = a[c].name;
            if ("" == e || null == e) {
              if (null == (e = a[c].attributes.property) || "" == e) continue;
              e = e.value;
            }
            if (0 <= e.indexOf("citation_")) {
              Utility.metatype = "citation_";
              break;
            }
            0 <= e.toLowerCase().indexOf("dc.")
              ? (Utility.metatype = "dc.")
              : 0 <= e.indexOf("eprints.") && (Utility.metatype = "eprints.");
          } catch (f) {
            Utility.log(f);
          }
      if ("citation_" == Utility.metatype)
        var d = {
          title: "citation_title",
          series_name: "citation_journal_title",
          author: "citation_author",
          publisher: "citation_publisher",
          issue: "citation_issue",
          volume: "citation_volume",
          identifier: "citation_doi",
          identifierType: "",
          page_start: "citation_firstpage",
          page_end: "citation_lastpage",
          date: "citation_publication_date",
          xdate: "citation_date",
          keywords: "citation_keywords",
          description: "citation_abstract",
          authors: "citation_authors",
          placeofpublication: "citation_publicationplace",
          number: "citation_number",
          pdfurl: "citation_pdf_url",
        };
      else
        "eprints." == Utility.metatype
          ? (d = {
              title: "eprints.title",
              series_name: "eprints.publication",
              author: "eprints.creators_name",
              publisher: "eprints.publisher",
              issue: "eprints.issue",
              volume: "eprints.volume",
              number: "eprints.number",
              page_start: "eprints.pagerange",
              redif_type: "eprints.type",
              date: "eprints.date",
              placeofpublication: "eprints.publicationplace",
              description: "eprints.abstract",
              keywords: "keywords",
            })
          : "dc." == Utility.metatype &&
            (d = {
              title: "dc.title",
              publisher: "dc.publisher",
              series_name: "prism.publicationname",
              author: "dc.creator",
              date: "dc.date",
              keywords: "dc.keywords",
              page_start: "prism.startingpage",
              page_end: "prism.endingpage",
              volume: "prism.volume",
              issue: "prism.number",
              placeofpublication: "prism.publicationplace",
              identifier: "dc.identifier",
              identifierType: "",
              description: "dc.description",
              number: "prism.number",
            });
      return Utility.metatype ? Utility.extractMetaData(d, b) : "";
    },
    duplicateCheck: function (b) {
      b.sort(function (a, b) {
        return a.name == b.name ? 0 : a.name > b.name ? 1 : -1;
      });
      var a = b.length,
        c = [],
        e = [];
      if (0 < a)
        for (var f = 0; f < a; f++) {
          var d = CwZ(b[f]),
            g = d.attr("name");
          -1 == CwZ.inArray(g, c)
            ? (c.push(g), e.push(b[f]))
            : ((g = e[e.length - 1]),
              (g.content = g.content + " ; " + d.attr("content")),
              e.pop(e.length - 1),
              e.push(g));
        }
      return e;
    },
    extractMetaData: function (b, a) {
      if (b) {
        var c = [];
        try {
          var e = Utility.duplicateCheck(CwZ(a.target + " meta"));
        } catch (f) {
          Utility.log(f);
        }
        for (var d = 0, g = 0; g < e.length; g++)
          try {
            var h = e[g].name,
              l = e[g].content;
            if ("" == h || null == h) {
              if (null == (h = e[g].attributes.property) || "" == h) continue;
              h = h.value;
            }
            if (0 <= (h = h.toLowerCase()).indexOf(Utility.metatype))
              for (var m in b)
                b[m] == h &&
                  (0 <= CwZ.inArray(m, c) ? (b[m] += " ;" + l) : (b[m] = l),
                  0 > CwZ.inArray(m, c) && ((c[d] = m), d++));
          } catch (p) {
            Utility.log(p);
          }
        for (m in b) 0 > CwZ.inArray(m, c) && (b[m] = "");
        return (
          null != b.author &&
            "" != b.author &&
            null != b.authors &&
            0 < b.authors.length &&
            ((b.author = b.authors), (b.author = b.author.replace(/,/g, ";"))),
          "" == b.date &&
            null != b.xdate &&
            0 < b.xdate.length &&
            (b.date = b.xdate),
          null != b.identifier &&
            "" != b.identifier &&
            0 == b.identifier.indexOf("10.") &&
            (b.identifierType = "doi"),
          b
        );
      }
    },
    getPageUrl: function (b) {
      return Utility.isUndefined(b) ? window.parent.location.href : b;
    },
    getPageDomain: function (b) {
      var a = "";
      Utility.isUndefined(b)
        ? ((b = window.parent.location),
          (a = window.suggestionParser
            ? window.suggestionParserBaseUrl
            : b.protocol + "//" + b.host))
        : ((a = document.createElement("a")),
          (a.href = b),
          (a = a.protocol + "//" + a.host));
      return a;
    },
    getPagePathname: function (b) {
      var a = "";
      Utility.isUndefined(b)
        ? (a = window.parent.location.pathname)
        : ((a = document.createElement("a")), (a.href = b), (a = a.pathname));
      return a;
    },
    printLog: function (b) {
      console && console.info && console.info(b);
    },
    log: function (b, a) {
      var c,
        e = "object" == typeof b,
        f = b instanceof Error;
      if (
        (f && (Utility.isError = !0),
        (c =
          e && f && b.stack
            ? (Utility.getPageUrl() || "") + "\n" + b.stack
            : e
            ? b.message
            : b),
        CWPDFReaderConfig.debug && Utility.printLog(c),
        f)
      ) {
        e = "";
        CWPDFReaderMode.Webimporter == CWPDFReaderConfig.readerMode
          ? (e = Config.baseUrl)
          : (CWPDFReaderMode.Chrome ||
              CWPDFReaderMode.Publisher ||
              CWPDFReaderMode.Library) == CWPDFReaderConfig.readerMode &&
            (e = CWPDFReaderConfig.cwURL);
        try {
          "string" == typeof e &&
            (0 <= e.indexOf(".colwiz.com") || 0 <= e.indexOf(".colwis.org")) &&
            document
              .getElementById("errorlogs")
              .contentWindow.postMessage(
                { message: "sentryException", data: c },
                "*"
              );
        } catch (d) {}
      }
    },
    generateRis: function (b) {
      var a = "";
      if (
        ("paper" == b.redif_type
          ? (a += "TY  - RPRT")
          : "article" == b.redif_type
          ? (a += "TY  - JOUR")
          : "book" == b.redif_type
          ? (a += "TY  - BOOK")
          : "chapter" == b.redif_type
          ? (a += "TY  - CHAP")
          : "software" == b.redif_type
          ? (a += "TY  - COMP")
          : "webpage" == b.redif_type
          ? (a += "TY  - ONLN")
          : (a += "TY  - JOUR"),
        b.title && "" != b.title && (a += "\nTI  - " + b.title),
        b.author && "" != b.author)
      )
        for (var c = b.author.split(/; /g), e = 0; e < c.length; e++)
          1 < c[e].length &&
            (b.isedited ? (a += "\nED  - " + c[e]) : (a += "\nAU  - " + c[e]));
      if (b.date && "" != b.date) {
        for (
          e = (e = b.date.toString().match(/(\/)/g)) ? e.length : 0;
          3 > e;
          e++
        )
          b.date += "/";
        a += "\nY1  - " + b.date;
      } else b.year && "" != b.year && (a += "\nY1  - " + b.year);
      "webpage" == b.redif_type &&
        ((e = new Date()),
        (b.date =
          e.getFullYear() +
          "/" +
          parseInt(e.getMonth() + 1) +
          "/" +
          e.getDate() +
          "/"),
        (a += "\nY1  - " + b.date));
      if ("paper" == b.redif_type)
        "" != b.publisher && (a += "\nPB  - " + b.publisher),
          "" != b.series_name && (a += "\nT3  - " + b.series_name),
          "" != b.number && (a += "\nIS  - " + b.number);
      else if ("article" == b.redif_type)
        "" != b.series_name && (a += "\nJF  - " + b.series_name),
          "" != b.volume && (a += "\nVL  - " + b.volume),
          "" != b.issue && (a += "\nIS  - " + b.issue),
          ("" != b.page_start) & ("" != b.page_end)
            ? (a += "\nSP  - " + b.page_start + "\nEP  - " + b.page_end)
            : "" != b.number && (a += ",\nSP  - " + b.number);
      else if ("book" == b.redif_type)
        "" != b.volume && (a += "\nVL  - " + b.volume),
          "" != b.publisher && (a += "\nPB  - " + b.publisher),
          "" != b.isbn && (a += "\nSN  - " + b.isbn);
      else if ("chapter" == b.redif_type) {
        if (
          ("" != b.chapter && (a += "\nCP  - " + b.chapter),
          ("" != b.page_start) & ("" != b.page_end) &&
            (a += "\nSP  - " + b.page_start + "\nEP  - " + b.page_end),
          "" != b.book_title && (a += "\nBT  - " + b.book_title),
          "" != b.book_editor)
        )
          for (c = b.book_editor.split(/;/), e = 0; e < c.length; e++)
            a += "\nED  - " + c[e];
        "" != b.volume && (a += "\nVL  - " + b.volume);
        "" != b.publisher && (a += "\nPB  - " + b.publisher);
      } else
        "software" == b.redif_type &&
          ("" != b.publisher) & ("" != b.series_name) &&
          (a += "\nT3  - " + b.series_name + ", " + b.publisher);
      if (
        (b.description &&
          "" != b.description &&
          (a += "\nAB  - " + b.description),
        b.keywords && "" != b.keywords)
      )
        for (c = b.keywords.split(/;/), e = 0; e < c.length; e++)
          a += "\nKW  - " + c[e];
      return (
        b.placeofpublication &&
          "" != b.placeofpublication &&
          (a += "\nCY  - " + b.placeofpublication),
        b.publisher && "" != b.publisher && (a += "\nPB  - " + b.publisher),
        b.identifier && "" != b.identifier && (a += "\nID  - " + b.identifier),
        b.url && "" != b.url && (a += "\nUR  - " + b.url),
        (a += "\nER  - "),
        a + ""
      );
    },
    validDataUrl: function (b) {
      var a = b.dataUrl != b.pubLink && b.dataUrl != b.pdfLink;
      return !!b.dataUrl && a && !Utility.validateData("dataUrl");
    },
    formatIssn: function (b) {
      return null != b && b.length ? Utility.trim(b).split("-").join("") : "";
    },
    validateData: function (b) {
      return (
        -1 <
        CwZ.inArray(
          b,
          {
            doaj: ["identifier", "identifierType"],
            liinwww: ["identifier", "identifierType"],
            isiknowledge: ["identifier", "identifierType"],
            highwirestanford: ["dataUrl"],
            highwire: ["identifier"],
          }[CWPDFReaderConfig.parser]
        )
      );
    },
    getData: function (b) {
      if (!Utility.validateArgs(b)) return !1;
      var a = b.metadata,
        c = "med" == a.type;
      if (a.data) b.success(a.data, a.type);
      else if (Utility.validDataUrl(a)) {
        var e = !1;
        Utility.ajax(
          a.dataUrl,
          function (f, d, g) {
            try {
              var h = g.getResponseHeader("content-type");
              if ("" == f.trim()) throw ((e = !0), Error("Empty Data Resp"));
              if (0 <= h.indexOf("application/xml"))
                f = window.ActiveXObject
                  ? f.xml
                  : new XMLSerializer().serializeToString(f);
              else {
                if (
                  0 == h.indexOf("text/html") &&
                  0 <= f.indexOf("<pre") &&
                  ((f = CwZ("<div>").html(f).find("pre").text()), !c)
                )
                  if ("undefined" != typeof citJSONMain) {
                    var l = citJSONMain(f, a.type);
                    "" != l &&
                      1 >= Object.keys(l.entries[0].Fields).length &&
                      (f = "");
                  } else f = ~f.trim().indexOf("@") ? f : "";
                f = f.replace(/<br\/?>/g, "");
              }
              if (
                "" == f ||
                void 0 === f ||
                (!c && Utility.checkHtmlTags.test(f))
              )
                throw ((e = !0), Error("Html in data"));
              b.success(f, a.type);
            } catch (m) {
              0 == e && Utility.log(m);
            } finally {
              e && Utility.scrapeData(a, b);
            }
          },
          "get",
          function (c) {
            Utility.log(c);
            Utility.scrapeData(a, b);
          }
        );
      } else Utility.scrapeData(a, b);
    },
    extractPubHolder: function (b) {
      return {
        title: b.title,
        isedited: "",
        author: b.authors,
        series_name: "",
        publisher: "",
        keywords: "",
        handle: "",
        year: b.year || "",
        date: "",
        description: "",
        redif_type: "",
        volume: "",
        issue: "",
        number: "",
        page_start: "",
        page_end: "",
        edition: "",
        book_editor: "",
        book_title: "",
        chapter: "",
        url: b.pubLink,
        placeofpublication: "",
        identifier: b.identifier,
        isbn: "",
        doi: "doi" == b.identifierType ? b.identifier : "",
      };
    },
    extractPage: function (b, a) {
      var c = Utility.getMetas({ target: b });
      return (
        (c && c.title && c.author && "" != c.author) ||
          (c = CWParser.extractHTML({ target: b }, a)),
        "body" != b && CwZ(b).html(""),
        c
      );
    },
    scrapeData: function (b, a) {
      var c = b.pubLink || "";
      "" != c && 0 <= c.toLowerCase().indexOf(Utility.getPageDomain())
        ? CWParser.isPubPage()
          ? a.success(
              Utility.generateRis(Utility.extractPage("body", b)),
              "ris"
            )
          : Utility.ajax(
              c,
              function (c) {
                try {
                  var f,
                    d = CwZ("#CWExtractPub");
                  (f = d.length
                    ? d.html("").append(c.replace(/script/g, "noscript"))
                    : CwZ("<div></div>")
                        .attr("id", "CWExtractPub")
                        .append(c.replace(/script/g, "noscript"))
                        .appendTo("body")).hide();
                  a.success(
                    Utility.generateRis(
                      Utility.extractPage("#" + f.attr("id"), b)
                    ),
                    "ris"
                  );
                } catch (g) {
                  Utility.log(g);
                }
              },
              "get",
              function (c) {
                Utility.log(c);
                a.success(
                  Utility.generateRis(Utility.extractPubHolder(b)),
                  "ris"
                );
              }
            )
        : a.success(Utility.generateRis(Utility.extractPubHolder(b)), "ris");
    },
    selectorAttributeGetter: function (b, a, c, e) {
      try {
        return (
          (b = c ? CwZ(c).find(b) : CwZ(b)),
          b.length
            ? b
                .map(function () {
                  return "text" == a
                    ? Utility.trim(CwZ(this).text())
                    : Utility.trim(CwZ(this).attr(a));
                })
                .get()
                .join(e || ", ")
            : ""
        );
      } catch (f) {
        Utility.log(f);
      }
    },
    ajax: function (b, a, c, e, f, d) {
      null == c && (c = "get");
      null == a && (a = function (a) {});
      null == e &&
        (e = function (a, b, c) {
          Utility.log(a);
        });
      var g = { url: b, type: c, success: a, error: e };
      void 0 !== f && (g.data = f);
      void 0 !== d &&
        CwZ.each(d, function (a, b) {
          g[a] = b;
        });
      CwZ.ajax(g);
    },
    trim: function (b) {
      return "string" == typeof b && b && b.length
        ? CwZ.trim(b).replace(/^\s+|\s+$|\s+(?=\s)/g, "")
        : "";
    },
    validateArgs: function (b) {
      return !(
        !b ||
        void 0 === b ||
        (void 0 === b.success &&
          void 0 === b.addButton &&
          void 0 === b.metadata &&
          void 0 === b.query)
      );
    },
    codec: function (b, a) {
      var c = "btoa" == a,
        e = "atob" == a;
      return Utility.base64Matcher.test(b)
        ? e
          ? Base64.decode(b)
          : b
        : c
        ? Base64.encode(b)
        : b;
    },
    removeMathJaxFromText: function (b) {
      if (0 != b.length)
        return (
          (b = b.clone()),
          b.find(".MathJax").remove(),
          b.find(".MathJax_Preview").remove(),
          b.text().replace(/<.*?>/g, "")
        );
    },
    getProp: function (b, a) {
      if (b.hasOwnProperty(a)) return b[a];
      var c, e;
      for (e in b)
        if (
          b.hasOwnProperty(e) &&
          "object" == typeof b[e] &&
          (c = this.getProp(b[e], a))
        )
          break;
      return c;
    },
    parsePubMedXmlToJson: function (b) {
      b = CwZ.xml2json(b);
      var a = {},
        c = "",
        e = this.getProp(b, "PMID");
      return (
        e && e.text && (c = e.text),
        (e = this.getProp(b, "AuthorList")) &&
          e.Author &&
          ((e.Author = e.Author.length ? e.Author : [e.Author]),
          (a.authors = e.Author.map(function (a) {
            if (a.LastName && a.ForeName) return a.LastName + ", " + a.ForeName;
          }).join(" and "))),
        (e = this.getProp(b, "ArticleTitle")) &&
          (a.title = e).text &&
          (a.title = e.text),
        (e = this.getProp(b, "Title")) && (a.journal = e),
        (e = this.getProp(b, "ISSN")) && e.text && (a.issn = e.text),
        (e = this.getProp(b, "Volume")) && (a.volume = e),
        (e = this.getProp(b, "Issue")) && (a.issue = e),
        (e = this.getProp(b, "Year")) && (a.year = e),
        (e = this.getProp(b, "MedlinePgn")) && (a.startpage = e),
        (a.ID = c),
        (a.url = "http://dx.doi.org/" + c),
        { EntryKey: c, Fields: a }
      );
    },
  },
  domainString = document.domain.replace(/[\.-]/g, "");
Utility.analyzeParser = function (b) {
  switch (!0) {
    case 0 <= b.indexOf("ieeexploreieeeorg"):
      currentParser = "ieee";
      break;
    case 0 <= b.indexOf("dlacmorg"):
      currentParser = "acm";
      break;
    case 0 <= b.indexOf("pubsacsorg"):
      currentParser = "acs";
      break;
    case 0 <= b.indexOf("arxivorg"):
      currentParser = "arxiv";
      break;
    case 0 <= b.indexOf("biooneorg"):
      currentParser = "bioone";
      break;
    case 0 <= b.indexOf("citeseerx"):
      currentParser = "citeseerx";
      break;
    case 0 <= b.indexOf("copacjiscacuk"):
      currentParser = "copac";
      break;
    case 0 <= b.indexOf("citeulikeorg"):
      currentParser = "citeulike";
      break;
    case 0 <= b.indexOf("liinwwwiraukade"):
      currentParser = "liinwww";
      break;
    case 0 <= b.indexOf("searchcrossreforg"):
      currentParser = "crossref";
      break;
    case 0 <= b.indexOf("highwirestanfordedu"):
      currentParser = "highwirestanford";
      break;
    case 0 <= b.indexOf("dblporg"):
      currentParser = "dblp";
      break;
    case 0 <= b.indexOf("doajorg"):
      currentParser = "doaj";
      break;
    case 0 <= b.indexOf("ebscohostcom"):
      currentParser = "ebsco";
      break;
    case 0 <= b.indexOf("scholargoogle"):
      currentParser = "googlescholar";
      break;
    case 0 <= b.indexOf("google"):
      currentParser = "googlebooks";
      break;
    case 0 <= b.indexOf("tandfonlinecom"):
    case -1 < b.indexOf("tandf") && -1 < b.indexOf("literatumonline"):
      currentParser = "informaworld";
      break;
    case 0 <= b.indexOf("ingentaconnectcom"):
      currentParser = "ingentaconnect";
      break;
    case 0 <= b.indexOf("jstororg"):
      currentParser = "jstor";
      break;
    case 0 <= b.indexOf("adsabsharvardedu"):
      currentParser = "nasaads";
      break;
    case 0 <= b.indexOf("apaorg"):
      currentParser = "psycnet";
      break;
    case 0 <= b.indexOf("ncbinlmnihgov"):
      currentParser = "pubmed";
      break;
    case 0 <= b.indexOf("econpapersrepecorg"):
      currentParser = "repec";
      break;
    case 0 <= b.indexOf("sciencedirectcom"):
      currentParser = "sciencedirect";
      break;
    case 0 <= b.indexOf("scitationorg"):
    case 0 <= b.indexOf("aipscitationorg"):
    case 0 <= b.indexOf("asascitationorg"):
      currentParser = "aip";
      break;
    case 0 <= b.indexOf("linkspringercom"):
    case 0 <= b.indexOf("rdspringercom"):
      currentParser = "springer";
      break;
    case 0 <= b.indexOf("papersssrncom"):
      currentParser = "ssrn";
      break;
    case 0 <= b.indexOf("onlinelibrarywileycom"):
      currentParser = "wiley";
      break;
    case 0 <= b.indexOf("worldcatorg"):
      currentParser = "worldcat";
      break;
    case 0 <= b.indexOf("academicmicrosoftcom"):
      currentParser = "microsoft";
      break;
    case 0 <= b.indexOf("futuresciencecom"):
      currentParser = "futuresci";
      break;
    case 0 <= b.indexOf("worldscientificcom"):
      currentParser = "worldsci";
      break;
    case 0 <= b.indexOf("annualreviewsorg"):
      currentParser = "annualreviews";
      break;
    case 0 <= b.indexOf("amsciepubcom"):
      currentParser = "amsci";
      break;
    case 0 <= b.indexOf("atsjournalsorg"):
      currentParser = "atsjournal";
      break;
    case 0 <= b.indexOf("ascetestliteratumonlinecom"):
    case 0 <= b.indexOf("ascestagliteratumonlinecom"):
    case 0 <= b.indexOf("asceltsasceltsliteratumonlinecom"):
    case 0 <= b.indexOf("ascelibraryorg"):
      currentParser = "ascelibrary";
      break;
    case 0 <= b.indexOf("ajronlineorg"):
      currentParser = "ajronline";
      break;
    case 0 <= b.indexOf("ajphaphapublicationsorg"):
      currentParser = "ajph";
      break;
    case 0 <= b.indexOf("ajpeorg"):
      currentParser = "ajpe";
      break;
    case 0 <= b.indexOf("aiaaorg"):
      currentParser = "aiaa";
      break;
    case 0 <= b.indexOf("hanserelibrarycom"):
      currentParser = "hanser";
      break;
    case 0 <= b.indexOf("qsciencecom"):
      currentParser = "qscience";
      break;
    case 0 <= b.indexOf("ejournalsdunckerhumblotd"):
      currentParser = "duncker";
      break;
    case 0 <= b.indexOf("crcnetbasecom"):
      currentParser = "crcnetbase";
      break;
    case 0 <= b.indexOf("cfapubsorg"):
      currentParser = "cfapubs";
      break;
    case 0 <= b.indexOf("jgicamhnet"):
      currentParser = "jgi";
      break;
    case 0 <= b.indexOf("euppublishingcom"):
      currentParser = "eupublish";
      break;
    case 0 <= b.indexOf("gahmjcom"):
      currentParser = "gahmj";
      break;
    case 0 <= b.indexOf("futuremedicinecom"):
      currentParser = "futuremedicine";
      break;
    case 0 <= b.indexOf("informahealthcarecom"):
      currentParser = "informahealthcare";
      break;
    case 0 <= b.indexOf("heacademyacuk"):
      currentParser = "heacademy";
      break;
    case 0 <= b.indexOf("iijournalscom"):
      currentParser = "iijournals";
      break;
    case 0 <= b.indexOf("thejnsorg"):
      currentParser = "thejns";
      break;
    case 0 <= b.indexOf("mitpressjournalsorg"):
      currentParser = "mitpressjournal";
      break;
    case 0 <= b.indexOf("nejmorg"):
      currentParser = "nejm";
      break;
    case 0 <= b.indexOf("nrcresearchpresscom"):
      currentParser = "nrcPress";
      break;
    case 0 <= b.indexOf("rsnaorg"):
      currentParser = "rsna";
      break;
    case 0 <= b.indexOf("epubssiamorg"):
      currentParser = "siam";
      break;
    case 0 <= b.indexOf("librarysegorg"):
      currentParser = "seg";
      break;
    case 0 <= b.indexOf("journalsapsorg"):
      currentParser = "apsjournals";
      break;
    case 0 <= b.indexOf("avmajournalsavmaorg"):
      currentParser = "avmajournals";
      break;
    case 0 <= b.indexOf("guilfordjournalscom"):
      currentParser = "guilfordPrs";
      break;
    case 0 <= b.indexOf("mlajournalsorg"):
      currentParser = "mlajournals";
      break;
    case 0 <= b.indexOf("morganclaypoolcom"):
      currentParser = "mcpubs";
      break;
    case 0 <= b.indexOf("joponlineorg"):
      currentParser = "joponline";
      break;
    case 0 <= b.indexOf("cerealchemistryaaccnetorg"):
    case 0 <= b.indexOf("aaccipublicationsaaccnetorg"):
      currentParser = "aacc";
      break;
    case 0 <= b.indexOf("maneyonlinecom"):
      currentParser = "maneyonline";
      break;
    case 0 <= b.indexOf("birpublicationsorg"):
      currentParser = "birpublications";
      break;
    case 0 <= b.indexOf("iopscience"):
      currentParser = "iopscience";
      break;
    case 0 <= b.indexOf("spiedigitallibraryorg"):
      currentParser = "spiedigital";
      break;
    case 0 <= b.indexOf("jamanetworkcom"):
      currentParser = "jamanet";
      break;
    case 0 <= b.indexOf("pubsashaorg"):
      currentParser = "silverchair";
      break;
    case 0 <= b.indexOf("naturecom"):
      currentParser = "nature";
      break;
    case 0 <= b.indexOf("academicoupcom"):
      currentParser = "endocrine";
      break;
    case 0 <= b.indexOf("journalscambridgeorg"):
      currentParser = "cambridge";
      break;
    case 0 <= b.indexOf("localhost"):
      currentParser = "localhost";
      break;
    case 0 <= b.indexOf("plosoneorg"):
    case 0 <= b.indexOf("plosgeneticsorg"):
    case 0 <= b.indexOf("plospathogensorg"):
    case 0 <= b.indexOf("plosbiologyorg"):
    case 0 <= b.indexOf("ploscompbiolorg"):
    case 0 <= b.indexOf("journalsplosorg"):
    case 0 <= b.indexOf("plosntdsorg"):
    case 0 <= b.indexOf("plosmedicineorg"):
    case 0 <= b.indexOf("ploscollectionsorg"):
    case 0 <= b.indexOf("plosclinicaltrialsorg"):
      currentParser = "plos";
      break;
    case 0 <= b.indexOf("journalssagepubcom"):
      currentParser = "sage";
      break;
    case 0 <= b.indexOf("bmjcom"):
    case 0 <= b.indexOf("geoscienceworldorg"):
    case 0 <= b.indexOf("oxfordjournalsorg"):
    case 0 <= b.indexOf("contenthealthaffairsorg"):
    case 0 <= b.indexOf("imagingbirjournalsorg"):
    case 0 <= b.indexOf("sepmonlineorg"):
    case 0 <= b.indexOf("embopressorg"):
    case 0 <= b.indexOf("aappublicationsorg"):
    case 0 <= b.indexOf("alphamedpressorg"):
    case 0 <= b.indexOf("physiologyorg"):
    case 0 <= b.indexOf("royalsocietypublishingorg"):
    case 0 <= b.indexOf("highwireorg") && 0 <= b.indexOf("rsif"):
    case 0 < b.indexOf("lyellcollectionorg"):
    case 0 <= b.indexOf("dukejournalsorg"):
    case 0 <= b.indexOf("aacrmeetingabstractsorg"):
    case 0 <= b.indexOf("amjaomorg"):
    case 0 <= b.indexOf("amleaomorg"):
    case 0 <= b.indexOf("ampaomorg"):
    case 0 <= b.indexOf("proceedingsaomorg"):
    case 0 <= b.indexOf("amraomorg"):
    case 0 <= b.indexOf("journalsacrlorg"):
    case 0 <= b.indexOf("advancesnutritionorg"):
    case 0 <= b.indexOf("aptrcpsychorg"):
    case 0 <= b.indexOf("aacnjournalsorg"):
    case 0 <= b.indexOf("diabetesjournalsorg"):
    case 0 <= b.indexOf("ahajournalsorg"):
    case 0 <= b.indexOf("amjbotorg"):
    case 0 <= b.indexOf("ajcnnutritionorg"):
    case 0 <= b.indexOf("ajcpascpjournalsorg"):
    case 0 <= b.indexOf("ajccaacnjournalsorg"):
    case 0 <= b.indexOf("ajevonlineorg"):
    case 0 <= b.indexOf("ajhporg"):
    case 0 <= b.indexOf("ajnrorg"):
    case 0 <= b.indexOf("ajotaotapressnet"):
    case 0 <= b.indexOf("ajsonlineorg"):
    case 0 <= b.indexOf("ajtmhorg"):
    case 0 <= b.indexOf("aojuwpressorg"):
    case 0 <= b.indexOf("journalsasmorg"):
    case 0 <= b.indexOf("ash-saphematologylibraryorg"):
    case 0 <= b.indexOf("cmeanesthesia-analgesiaorg"):
    case 0 <= b.indexOf("anesthesia-analgesiaorg"):
    case 0 <= b.indexOf("animalfrontiersorg"):
    case 0 <= b.indexOf("annclinlabsciorg"):
    case 0 <= b.indexOf("annfammedorg"):
    case 0 <= b.indexOf("theannalscom"):
    case 0 <= b.indexOf("atsctsnetjournalsorg"):
    case 0 <= b.indexOf("ariiarjournalsorg"):
    case 0 <= b.indexOf("aacasmorg"):
    case 0 <= b.indexOf("aemasmorg"):
    case 0 <= b.indexOf("aauwpressorg"):
    case 0 <= b.indexOf("abstractsiovsorg"):
    case 0 <= b.indexOf("meetingascopubsorg"):
    case 0 <= b.indexOf("abstractshematologylibraryorg"):
    case 0 <= b.indexOf("aspetjournalsorg"):
    case 0 <= b.indexOf("biolbullorg"):
    case 0 <= b.indexOf("biolreprodorg"):
    case 0 <= b.indexOf("biobiologistsorg"):
    case 0 <= b.indexOf("bloodjournalhematologylibraryorg"):
    case 0 <= b.indexOf("bj360boneandjointorguk"):
    case 0 <= b.indexOf("bjjboneandjointorguk"):
    case 0 <= b.indexOf("bjrboneandjointorguk"):
    case 0 <= b.indexOf("journalsboneandjointorguk"):
    case 0 <= b.indexOf("birjournalsorg"):
    case 0 <= b.indexOf("bjprcpsychorg"):
    case 0 <= b.indexOf("bjrbirjournalsorg"):
    case 0 <= b.indexOf("bloodjournalorg"):
    case 0 <= b.indexOf("bvapublicationscom"):
    case 0 <= b.indexOf("bssaonlineorg"):
    case 0 <= b.indexOf("cfpca"):
    case 0 <= b.indexOf("cmajca"):
    case 0 <= b.indexOf("canminorg"):
    case 0 <= b.indexOf("cgpiiarjournalsorg"):
    case 0 <= b.indexOf("aacrjournalsorg"):
    case 0 <= b.indexOf("lifesciedorg"):
    case 0 <= b.indexOf("cro3org"):
    case 0 <= b.indexOf("ccjmorg"):
    case 0 <= b.indexOf("clinchemorg"):
    case 0 <= b.indexOf("cviasmorg"):
    case 0 <= b.indexOf("clinicaldiabetesjournalsorg"):
    case 0 <= b.indexOf("cjasnasnjournalsorg"):
    case 0 <= b.indexOf("clinmedrcpjournalorg"):
    case 0 <= b.indexOf("clinmednetprintsorg"):
    case 0 <= b.indexOf("clinmedresorg"):
    case 0 <= b.indexOf("cmrasmorg"):
    case 0 <= b.indexOf("cluwpressorg"):
    case 0 <= b.indexOf("ccnaacnjournalsorg"):
    case 0 <= b.indexOf("cmajopenca"):
    case 0 <= b.indexOf("cshperspectivescshlporg"):
    case 0 <= b.indexOf("perspectivesinmedicinecshlporg"):
    case 0 <= b.indexOf("cshprotocolscshlporg"):
    case 0 <= b.indexOf("symposiumcshlporg"):
    case 0 <= b.indexOf("crlacrlorg"):
    case 0 <= b.indexOf("crlnacrlorg"):
    case 0 <= b.indexOf("cmectsnetjournalsorg"):
    case 0 <= b.indexOf("ctsnetjournalsorg"):
    case 0 <= b.indexOf("dmfrbirjournalsorg"):
    case 0 <= b.indexOf("devbiologistsorg"):
    case 0 <= b.indexOf("diabetesdiabetesjournalsorg"):
    case 0 <= b.indexOf("carediabetesjournalsorg"):
    case 0 <= b.indexOf("spectrumdiabetesjournalsorg"):
    case 0 <= b.indexOf("dmmbiologistsorg"):
    case 0 <= b.indexOf("dmdaspetjournalsorg"):
    case 0 <= b.indexOf("eruwpressorg"):
    case 0 <= b.indexOf("economicgeologyorg"):
    case 0 <= b.indexOf("eelecsdlorg"):
    case 0 <= b.indexOf("jssecsdlorg"):
    case 0 <= b.indexOf("maecsdlorg"):
    case 0 <= b.indexOf("sslecsdlorg"):
    case 0 <= b.indexOf("ecstecsdlorg"):
    case 0 <= b.indexOf("eslecsdlorg"):
    case 0 <= b.indexOf("elifeelifesciencesorg"):
    case 0 <= b.indexOf("endocrineconnectionscom"):
    case 0 <= b.indexOf("ercendocrinology-journalsorg"):
    case 0 <= b.indexOf("endoendojournalsorg"):
    case 0 <= b.indexOf("ecasmorg"):
    case 0 <= b.indexOf("eje-onlineorg"):
    case 0 <= b.indexOf("erjersjournalscom"):
    case 0 <= b.indexOf("ermersjournalscom"):
    case 0 <= b.indexOf("errersjournalscom"):
    case 0 <= b.indexOf("ersjournalscom"):
    case 0 <= b.indexOf("epphysocorg"):
    case 0 <= b.indexOf("fasebjorg"):
    case 0 <= b.indexOf("fieldguidesgsapubsorg"):
    case 0 <= b.indexOf("g3journalorg"):
    case 0 <= b.indexOf("genesdevcshlporg"):
    case 0 <= b.indexOf("geneticsorg"):
    case 0 <= b.indexOf("genomeaasmorg"):
    case 0 <= b.indexOf("genomecshlporg"):
    case 0 <= b.indexOf("gsabulletingsapubsorg"):
    case 0 <= b.indexOf("memoirsgsapubsorg"):
    case 0 <= b.indexOf("specialpapersgsapubsorg"):
    case 0 <= b.indexOf("geologygsapubsorg"):
    case 0 <= b.indexOf("geospheregsapubsorg"):
    case 0 <= b.indexOf("ghspjournalorg"):
    case 0 <= b.indexOf("guidetoptpracticeaptaorg"):
    case 0 <= b.indexOf("haematologicaorg"):
    case 0 <= b.indexOf("asheducationbookhematologylibraryorg"):
    case 0 <= b.indexOf("hortsciashspublicationsorg"):
    case 0 <= b.indexOf("horttechashspublicationsorg"):
    case 0 <= b.indexOf("iviiarjournalsorg"):
    case 0 <= b.indexOf("iaiasmorg"):
    case 0 <= b.indexOf("ijssgmjournalsorg"):
    case 0 <= b.indexOf("iovsorg"):
    case 0 <= b.indexOf("jaoaorg"):
    case 0 <= b.indexOf("jcbrupressorg"):
    case 0 <= b.indexOf("journalofanimalscienceorg"):
    case 0 <= b.indexOf("japrfassorg"):
    case 0 <= b.indexOf("jbasmorg"):
    case 0 <= b.indexOf("jbcorg"):
    case 0 <= b.indexOf("jcsbiologistsorg"):
    case 0 <= b.indexOf("jcmasmorg"):
    case 0 <= b.indexOf("jcoascopubsorg"):
    case 0 <= b.indexOf("jdentaledorg"):
    case 0 <= b.indexOf("joeendocrinology-journalsorg"):
    case 0 <= b.indexOf("jebbiologistsorg"):
    case 0 <= b.indexOf("jemrupressorg"):
    case 0 <= b.indexOf("jgprupressorg"):
    case 0 <= b.indexOf("virsgmjournalsorg"):
    case 0 <= b.indexOf("jhruwpressorg"):
    case 0 <= b.indexOf("jimmunolorg"):
    case 0 <= b.indexOf("jswconlineorg"):
    case 0 <= b.indexOf("jrheumorg"):
    case 0 <= b.indexOf("jlrorg"):
    case 0 <= b.indexOf("jleukbioorg"):
    case 0 <= b.indexOf("jmmsgmjournalsorg"):
    case 0 <= b.indexOf("jmeendocrinology-journalsorg"):
    case 0 <= b.indexOf("jneurosciorg"):
    case 0 <= b.indexOf("jnmsnmjournalsorg"):
    case 0 <= b.indexOf("techsnmjournalsorg"):
    case 0 <= b.indexOf("jnnutritionorg"):
    case 0 <= b.indexOf("jopascopubsorg"):
    case 0 <= b.indexOf("jorthodmaneyjournalsorg"):
    case 0 <= b.indexOf("jpetaspetjournalsorg"):
    case 0 <= b.indexOf("jpphysocorg"):
    case 0 <= b.indexOf("jaaosorg"):
    case 0 <= b.indexOf("jaaplorg"):
    case 0 <= b.indexOf("jaahaorg"):
    case 0 <= b.indexOf("jabfmorg"):
    case 0 <= b.indexOf("jacnorg"):
    case 0 <= b.indexOf("jadaadaorg"):
    case 0 <= b.indexOf("japmaonlineorg"):
    case 0 <= b.indexOf("journalashspublicationsorg"):
    case 0 <= b.indexOf("jasnasnjournalsorg"):
    case 0 <= b.indexOf("jesecsdlorg"):
    case 0 <= b.indexOf("jnccnorg"):
    case 0 <= b.indexOf("jtcsctsnetjournalsorg"):
    case 0 <= b.indexOf("jultrasoundmedorg"):
    case 0 <= b.indexOf("jviasmorg"):
    case 0 <= b.indexOf("journalofvisionorg"):
    case 0 <= b.indexOf("jwildlifedisorg"):
    case 0 <= b.indexOf("jwatchorg"):
    case 0 <= b.indexOf("maneyjournalsorg"):
    case 0 <= b.indexOf("biologistsorg"):
    case 0 <= b.indexOf("rcpsychorg"):
    case 0 <= b.indexOf("snmjournalsorg"):
    case 0 <= b.indexOf("journalsfassorg"):
    case 0 <= b.indexOf("labmedascpjournalsorg"):
    case 0 <= b.indexOf("leuwpressorg"):
    case 0 <= b.indexOf("ljuwpressorg"):
    case 0 <= b.indexOf("learnmemcshlporg"):
    case 0 <= b.indexOf("lithospheregsapubsorg"):
    case 0 <= b.indexOf("lbruwpressorg"):
    case 0 <= b.indexOf("mbioasmorg"):
    case 0 <= b.indexOf("micsgmjournalsorg"):
    case 0 <= b.indexOf("mmbrasmorg"):
    case 0 <= b.indexOf("mcbasmorg"):
    case 0 <= b.indexOf("mcponlineorg"):
    case 0 <= b.indexOf("molbiolcellorg"):
    case 0 <= b.indexOf("mendendojournalsorg"):
    case 0 <= b.indexOf("molpharmaspetjournalsorg"):
    case 0 <= b.indexOf("monuwpressorg"):
    case 0 <= b.indexOf("mycologiaorg"):
    case 0 <= b.indexOf("npjuwpressorg"):
    case 0 <= b.indexOf("neurologyorg"):
    case 0 <= b.indexOf("cmeneurologyorg"):
    case 0 <= b.indexOf("cpneurologyorg"):
    case 0 <= b.indexOf("bjjprocsboneandjointorguk"):
    case 0 <= b.indexOf("journalpdaorg"):
    case 0 <= b.indexOf("pdiconnectcom"):
    case 0 <= b.indexOf("pharmrevaspetjournalsorg"):
    case 0 <= b.indexOf("kappanmagazineorg"):
    case 0 <= b.indexOf("ptjournalaptaorg"):
    case 0 <= b.indexOf("physiciansfirstwatchorg"):
    case 0 <= b.indexOf("journalsphysocorg"):
    case 0 <= b.indexOf("plantcellorg"):
    case 0 <= b.indexOf("aspbjournalsorg"):
    case 0 <= b.indexOf("plantphysiolorg"):
    case 0 <= b.indexOf("pnasorg"):
    case 0 <= b.indexOf("psfassorg"):
    case 0 <= b.indexOf("pasfassorg"):
    case 0 <= b.indexOf("pbrcpsychorg"):
    case 0 <= b.indexOf("psychosomaticmedicineorg"):
    case 0 <= b.indexOf("radiologictechnologyorg"):
    case 0 <= b.indexOf("rbmacrlorg"):
    case 0 <= b.indexOf("rphrendojournalsorg"):
    case 0 <= b.indexOf("reproduction-onlineorg"):
    case 0 <= b.indexOf("rcrcjournalcom"):
    case 0 <= b.indexOf("reggsapubsorg"):
    case 0 <= b.indexOf("rorreproduction-onlineorg"):
    case 0 <= b.indexOf("rnajournalcshlporg"):
    case 0 < b.indexOf("saejournalsorg"):
    case 0 <= b.indexOf("sciencemagorg"):
    case 0 <= b.indexOf("conferencessmpteorg"):
    case 0 <= b.indexOf("journalsmpteorg"):
    case 0 <= b.indexOf("standardssmpteorg"):
    case 0 <= b.indexOf("endocrinology-journalsorg"):
    case 0 <= b.indexOf("sgmjournalsorg"):
    case 0 <= b.indexOf("jnumedmtgsnmjournalsorg"):
    case 0 <= b.indexOf("studiesinmycologyorg"):
    case 0 <= b.indexOf("subuwpressorg"):
    case 0 <= b.indexOf("journaltelospresscom"):
    case 0 <= b.indexOf("thenationshealthaphapublicationsorg"):
    case 0 <= b.indexOf("journalsaomorg"):
      currentParser = "highwire";
      break;
    default:
      currentParser = "";
  }
  return currentParser;
};
var currentParser = Utility.analyzeParser(domainString),
  isSuggestionParser =
    "undefined" != typeof suggestionParser && "" != suggestionParser;
if (
  (isSuggestionParser && (CWPDFReaderConfig.parser = suggestionParser),
  isSuggestionParser ||
  "googlebooks" != currentParser ||
  "Books" ==
    (CwZ(".hdtb_mitem.hdtb_msel.hdtb_imb").text() ||
      CwZ(".hdtb-mitem.hdtb-msel.hdtb-imb").text() ||
      CwZ(".kd-appbar .kd-appname a").text())
    ? "" != currentParser && (CWPDFReaderConfig.parser = currentParser)
    : (currentParser = ""),
  "" != CWPDFReaderConfig.parser)
) {
  var parserClass = "CWParser_" + CWPDFReaderConfig.parser;
  if (CWPDFReaderConfig.readerMode == CWPDFReaderMode.Chrome) {
    var evalParser = function () {
      void 0 === (CWParser = window[parserClass]) &&
        ((CWParser = {}),
        setTimeout(function () {
          evalParser();
        }, 1e3));
    };
    chrome.extension.sendRequest({
      message: "getParser",
      data: { url: "js/extraction/" + CWPDFReaderConfig.parser + ".js" },
    });
    evalParser();
  } else if (CWPDFReaderConfig.readerMode == CWPDFReaderMode.Publisher) {
    var parURL =
      "js/extraction/" + CWPDFReaderConfig.parser + ".js?v=" + cPDF.version;
    cPDF.addScript(parURL, function () {
      CWParser = window[parserClass];
    });
  } else if (CWPDFReaderConfig.readerMode == CWPDFReaderMode.Webimporter) {
    var parserURL = "js/extraction/" + CWPDFReaderConfig.parser + ".js";
    Config.addScript(parserURL, function () {
      CWParser = window[parserClass];
      BmL.load(parserClass);
    });
  } else CWParser = window[parserClass];
}
var CWFileAPIClass = (function () {
    function b() {
      this.fsMode = "fsAPI";
      this.blobUrl = this.fs = null;
      this.dontHideSplash = !1;
      this.fallBackObj = {};
      this.defferredAction = {
        obj: null,
        callback: void 0,
        reset: function () {
          this.obj = null;
          this.callback = void 0;
          CWPDFReader_Publisher.getInstance().processingPub = !1;
        },
      };
    }
    return (
      (b.getInstance = function () {
        return (
          null === this.CWFileAPI && (this.CWFileAPI = new b()), this.CWFileAPI
        );
      }),
      (b.prototype.checkAvailableFS = function () {
        return "blobAPI";
      }),
      (b.prototype.updateProgFunc = function (a) {
        a.lengthComputable
          ? ((a = a.loaded / a.total),
            CWPDFReader_Publisher.getInstance().showLoadProgress(a))
          : CWPDFReader_Publisher.getInstance().showLoadProgress();
      }),
      (b.prototype.initFileSystem = function (a) {
        this.fallBackObj = a;
        window.requestFileSystem =
          window.requestFileSystem || window.webkitRequestFileSystem;
        window.requestFileSystem(
          window.TEMPORARY,
          52428800,
          function (b) {
            this.fs = b;
            void 0 !== a.blob && this.writeFileBlob(a);
          },
          this.fileSysErrHand
        );
      }),
      (b.prototype.writeFileBlob = function (a) {
        var b = new Date().getTime();
        a.metaData &&
          a.metaData.identifier &&
          ((b = a.metaData.identifier),
          (b = b.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "")));
        var e = a.blob,
          f = a.metaData,
          d = a.action;
        this.fs.root.getFile(
          b,
          { create: !0 },
          function (a) {
            a.createWriter(function (b) {
              b.onwriteend = function () {
                CWUtils.log("Write completed.");
                var b = a.toURL();
                this.performAction(d, b, f);
              };
              b.onerror = function (a) {
                CWUtils.log("Write failed: " + a.toString());
              };
              b.write(e);
            }, this.fileSysErrHand);
          },
          this.fileSysErrHand
        );
      }),
      (b.prototype.fileSysErrHand = function (a) {
        var b = "";
        switch (a.code) {
          case FileError.QUOTA_EXCEEDED_ERR:
            b = "QUOTA_EXCEEDED_ERR";
            break;
          case FileError.NOT_FOUND_ERR:
            b = "NOT_FOUND_ERR";
            break;
          case FileError.SECURITY_ERR:
            b = "SECURITY_ERR";
            break;
          case FileError.INVALID_MODIFICATION_ERR:
            b = "INVALID_MODIFICATION_ERR";
            break;
          case FileError.INVALID_STATE_ERR:
            b = "INVALID_STATE_ERR";
            break;
          default:
            b = "Unknown Error";
        }
        this.setBlobUrl(this.fallBackObj);
        CWUtils.log("Error: " + b);
      }),
      (b.prototype.getFileBlob = function (a, b, e, f) {
        var d = this;
        e &&
          (/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/.test(
            e.title
          )
            ? CwZ(".cw-file-name").text(Base64.decode(e.title))
            : CwZ(".cw-file-name").text(e.title));
        CWUtils.increaseProgress();
        var g = a;
        CwZ("#cw-loader")
          .find(".cross")
          .off("click")
          .on("click", function (a) {
            l.abort();
            CWPDFReader_Publisher.getInstance().hideSplashScr();
          });
        var h = !1;
        if (((this.fsMode = this.checkAvailableFS()), 0 > a.indexOf("blob"))) {
          var l,
            m = window.location.toString().split("://")[0],
            p = a.split("://")[0];
          if ("https" === m && "https" !== p && "" !== a)
            "vir" === b
              ? (CWlogger.logConsole(
                  "This PDF violates content security policy, please install Chrome extension to view this PDF in wizdom.ai Reader.",
                  "Content Security Policy",
                  !0
                ),
                (window.location.hash = ""),
                CWPDFReader_Publisher.getInstance().hideSplashScr())
              : this.setBlobUrl({ blob: {}, action: b, metaData: e });
          else if (
            ((l = (function (a) {
              try {
                var b = new XMLHttpRequest();
                return b.open("GET", a), (b.responseType = "blob"), b.send(), b;
              } catch (c) {
                window.chrome &&
                  (CWlogger.logConsole(
                    "This PDF violates content security policy, please install Chrome extension to view this PDF in wizdom.ai Reader.",
                    "Content Security Policy",
                    !0
                  ),
                  (window.location.hash = ""),
                  CWPDFReader_Publisher.getInstance().hideSplashScr());
              }
            })(a)),
            !l)
          )
            return;
          "vir" === b
            ? CWParser.isLoginPage && CWParser.isLoginPage()
              ? (l.abort(),
                (a = CWPDFReader_Publisher.getInstance().UpdateQueryString(
                  "redirect",
                  1,
                  a
                )),
                window.location.replace(a))
              : (CWPDFReader_Publisher.getInstance().showSplashScr(),
                l.addEventListener("progress", d.updateProgFunc, !1),
                CwZ("#cw-loader").find(".cross").show())
            : "atl" === b &&
              l.addEventListener(
                "progress",
                function (a) {
                  a.lengthComputable &&
                    ((a = a.loaded / a.total),
                    (a = Math.floor(100 * a)),
                    CWPDFReader_Publisher.getInstance().showProgress(
                      "pdfDownload",
                      "",
                      a,
                      e.index
                    ));
                },
                !1
              );
          l.onabort = function (a) {
            h = !1;
            setTimeout(CWPDFReader_Publisher.getInstance().closeDialog, 300);
            CwZ("#cw-loader").find(".cross").off("click");
            l.abort();
          };
          l.onerror = function (a) {
            var d;
            a =
              ((d = document.createElement("a")), (d.href = g), d).hostname ===
              location.hostname;
            if (0 === l.status && !a)
              if (
                (CWUtils.log("CrossDomain"),
                (window.location.hash = ""),
                CWPDFReader_Publisher.getInstance().hideSplashScr(),
                (CWPDFReader_Publisher.getInstance().openPDFBlobLink = null),
                CwZ("#cw-pdfFrame").hide(),
                CwZ("#cw-pdfFrame").remove(),
                CwZ("#cw-loader").hide(),
                CwZ("body").css("overflow", ""),
                (CWPDFReader_Publisher.getInstance().urlToOpen = ""),
                (CWPDFReader_Publisher.getInstance().pageURL = ""),
                (CWDataCenterClass.getInstance().sendOnce = !1),
                (CWPDFReader_Publisher.getInstance().pdfFrameRef = null),
                (d = e.index),
                CWPDFReaderConfig.readerMode === CWPDFReaderMode.Webimporter)
              ) {
                if (
                  (CwZ("#bmkcommunication")[0].contentWindow.postMessage(
                    JSON.stringify({
                      message: "crossoriginpdf",
                      params: { index: d },
                    }),
                    "*"
                  ),
                  "atl" !== b &&
                    (window.chrome &&
                      CWlogger.logConsole(
                        "This PDF violates content security policy, please install Chrome extension to view this PDF in wizdom.ai Reader.",
                        "Content Security Policy",
                        !0
                      ),
                    0 <= d))
                )
                  if (
                    (d = CwZ('.cw-btnContainer a[data-pub="' + d + '"]')
                      .parent()
                      .eq(0))
                  )
                    (d = CwZ(d).find(".cw-openPdfReader")),
                      (CWPDFReader_Publisher.getInstance().selectedPDFIndex =
                        -1),
                      d.removeClass("cw-ldr"),
                      d.addClass("cw-vir"),
                      d
                        .find("span")
                        .html(CWPDFReaderConfig.pubModeBtnsTxt.view),
                      d
                        .find("em")
                        .html(CWPDFReaderConfig.pubModeBtnsTxt.viewHover);
              } else if (e.index) {
                if (
                  (d = CwZ('.cw-btnContainer a[data-pub="' + d + '"]')
                    .parent()
                    .eq(0))
                )
                  (d = CwZ(d).find(".cw-openPdfReader")),
                    (CWPDFReader_Publisher.getInstance().selectedPDFIndex = -1),
                    d.removeClass("cw-ldr"),
                    d.addClass("cw-vir"),
                    d.find("span").html(CWPDFReaderConfig.pubModeBtnsTxt.add),
                    d
                      .find("em")
                      .html(
                        "Save article PDF and metadata to your wizdom.ai Library. Access anywhere, cite them and generate bibliographies."
                      );
                CWlogger.logConsole(
                  "This PDF violates content security policy, please install Chrome extension to view this PDF in wizdom.ai Reader.",
                  "Content Security Policy",
                  !0
                );
              }
          };
          l.onreadystatechange = function (g) {
            if (!h && CwZ("#cw-loader").is(":visible"))
              (h = !0), CwZ("#cw-loader").find(".cross").show();
            else if (200 === this.status) {
              if (4 === this.readyState)
                if (
                  (CwZ("#cw-loader .cw-bar").width("100%"),
                  (CWPDFReader_Publisher.getInstance().progressComplete = !0),
                  (g = this.response),
                  CWPDFReaderConfig.readerMode ===
                    CWPDFReaderMode.Webimporter &&
                    "application/pdf" === g.type &&
                    CwZ("#bmkApp").addClass("minimize"),
                  e && (e.blobType = g.type),
                  "vir" === b && 0 <= g.type.indexOf("text/html"))
                )
                  if (
                    ((d.dontHideSplash = !0),
                    CWPDFReaderConfig.readerMode ===
                      CWPDFReaderMode.Webimporter)
                  ) {
                    window.location.hash = "";
                    CWPDFReader_Publisher.getInstance().hideSplashScr();
                    g = e.index;
                    var l = CwZ('.cw-btnContainer a[data-pub="' + g + '"]'),
                      l = l
                        .closest(".cw-btnContainer")
                        .find("a.cw-openPdfReader");
                    l.removeClass("cw-ldr").addClass("cw-vir");
                    CWPDFReader_Publisher.getInstance().selectedPDFIndex = -1;
                    var m = CWPDFReaderConfig.pubModeBtnsTxt.view,
                      p = CWPDFReaderConfig.pubModeBtnsTxt.viewHover;
                    void 0 !== publisher &&
                      void 0 !== publisher.pubModeBtnsTxt &&
                      (publisher.pubModeBtnsTxt.view &&
                        (m = publisher.pubModeBtnsTxt.view),
                      publisher.pubModeBtnsTxt.viewHover &&
                        (p = publisher.pubModeBtnsTxt.viewHover));
                    l.find("span").html(m);
                    l.find("em").html(p);
                    CwZ("#bmkcommunication")[0].contentWindow.postMessage(
                      JSON.stringify({
                        message: "closeaccesspdf",
                        params: { index: g },
                      }),
                      "*"
                    );
                    CwZ(".cw-splash-content .cw-content").hide();
                    CwZ(".cw-splash-content .cw-access").show();
                    CwZ(".cw-splash .cw-progress").hide();
                  } else
                    (g = CWHtmlStructure.generateReaderHash(
                      f.PDFURL,
                      f.INDEX,
                      !0
                    )),
                      (g =
                        CWPDFReader_Publisher.getInstance().pageURL + "#" + g),
                      history.replaceState({}, "", g),
                      (a =
                        CWPDFReader_Publisher.getInstance().UpdateQueryString(
                          "redirect",
                          1,
                          a
                        )),
                      window.location.replace(a),
                      publisher.readerOptions.showClosedAccessmessage &&
                        CwZ("#cw-loader .cw-redirecting").removeClass(
                          "cw-hidden"
                        );
                else
                  (CWPDFReader_Publisher.getInstance().processingPub = !1),
                    CWUtils.log(g),
                    (CWPDFReader_Publisher.getInstance().fileBlob.blob = g),
                    (g = { blob: g, action: b, metaData: e }),
                    "fsAPI" === d.fsMode
                      ? d.initFileSystem(g)
                      : "blobAPI" === d.fsMode && d.setBlobUrl(g);
            } else {
              if (200 !== this.status && 0 !== this.status && "atl" !== b)
                return (
                  (CWPDFReader_Publisher.getInstance().processingPub = !1),
                  void (window.location.href = a)
                );
              4 === this.readyState && 403 === this.status
                ? ((CWPDFReader_Publisher.getInstance().processingPub = !1),
                  (l = this.response) && (e.blobType = l.type),
                  (g = { blob: l, action: b, metaData: e }),
                  d.setBlobUrl(g))
                : 200 !== this.status &&
                  "atl" === b &&
                  4 === this.readyState &&
                  (CWUtils.log("302 error in downloading"),
                  (CWPDFReader_Publisher.getInstance().processingPub = !1),
                  (CWPDFReader_Publisher.getInstance().fileBlob.blob = l),
                  (g = { blob: l, action: b, metaData: e }),
                  "fsAPI" === d.fsMode
                    ? d.initFileSystem(g)
                    : "blobAPI" === d.fsMode && d.setBlobUrl(g));
            }
          };
        } else
          (CWPDFReader_Publisher.getInstance().processingPub = !1),
            d.performAction(b, a, e);
      }),
      (b.prototype.setBlobUrl = function (a) {
        window.URL = window.URL || window.webkitURL;
        var b = a.action,
          e = a.metaData;
        a = a.blob;
        var f = "";
        window.URL.createObjectURL
          ? ((f = window.URL.createObjectURL(a)),
            -1 === f.indexOf(window.location.hostname) && (f = e.pdfLink))
          : (f = e.pdfLink);
        this.performAction(b, f, e);
      }),
      (b.prototype.performAction = function (a, b, e) {
        this.blobUrl = b;
        this.defferredAction.reset();
        void 0 !== e &&
          "text/html" !== e.blobType &&
          ((e.blobLink = b), e.data && (e.data.blobLink = b));
        var f = !1;
        if (
          (isMobileDevice() && (f = !0),
          publisher && publisher.readerOptions.mobileModeEnable && (f = !1),
          f)
        )
          return (
            (window.location.href = b),
            void CWPDFReader_Publisher.getInstance().hideSplashScr()
          );
        try {
          switch (((CWPDFReader_Publisher.getInstance().urlToOpen = b), a)) {
            case "atl":
              CWDataCenterClass.getInstance().setPubSelected(e);
              CWDataCenterClass.getInstance().setMetaData(e, e.index);
              CWDataCenterClass.getInstance().addToLibrary(e.index);
              break;
            case "vir":
              CWPDFReader_Publisher.getInstance().initIFrame();
          }
        } catch (d) {
          CWDataCenterClass.getInstance().postMsgToSentry(d);
        }
      }),
      (b.CWFileAPI = null),
      b
    );
  })(),
  CWComManager_Publisher = (function () {
    function b() {}
    return (
      (b.prototype.init = function () {
        var a = this;
        window.addEventListener(
          "message",
          function (b) {
            return a.dom_onMessage(b);
          },
          !1
        );
        this.CWPDFReader = CWPDFReader_Publisher.getInstance();
        this.CWDataCenter = CWDataCenterClass.getInstance();
      }),
      (b.prototype.dom_onMessage = function (a) {
        var b = a.data,
          e =
            void 0 !== publisher && publisher.appId
              ? publisher.appId
              : CWPDFReaderConfig.readerMode === CWPDFReaderMode.Webimporter
              ? "bmk_" +
                encodeURIComponent(
                  CWPDFReaderConfig.parser.toLowerCase().replace(/ +/g, "_")
                )
              : location.hostname,
          f =
            CWPDFReaderConfig.readerMode === CWPDFReaderMode.Publisher
              ? "pubsol=1"
              : "svc=bmk";
        if ("string" == typeof b)
          try {
            b = JSON.parse(a.data).data;
          } catch (d) {
            CWUtils.log(d);
          }
        if ("hideLoginFrame" === b)
          return (
            CwZ("#cw-loginFrame").attr(
              "src",
              CWPDFReaderConfig.idURL +
                "/cwauth?appid=" +
                e +
                "&" +
                f +
                "&compact=1"
            ),
            this.tell("hideLoginPrompt", { view: "pdfFrame" }, "pdfFrame"),
            CwZ("#cw-loginFrame").hide(),
            this.CWDataCenter.setLoginState(!0),
            this.CWDataCenter.setLoginShown(!1),
            this.CWDataCenter.loadConfig(),
            null !== CWFileAPIClass.getInstance().defferredAction.obj &&
              void 0 !==
                CWFileAPIClass.getInstance().defferredAction.callback &&
              CWFileAPIClass.getInstance().defferredAction.callback(),
            this.CWDataCenter.updateUserDOM(),
            void CWFileAPIClass.getInstance().defferredAction.reset()
          );
        if ("loginFailed" !== b) {
          if ("closeLoginFrame" === b)
            return (
              "#nbb" !== location.hash
                ? (this.CWPDFReader.closeLoginFrame(),
                  this.CWDataCenter.setLoginShown(!1))
                : window.history.back(),
              void CWFileAPIClass.getInstance().defferredAction.reset()
            );
          if ("signupSuccess" === b)
            return (
              CwZ("#cw-loginFrame").attr(
                "src",
                CWPDFReaderConfig.idURL +
                  "/cwauth?appid=" +
                  e +
                  "&" +
                  f +
                  "&compact=1"
              ),
              this.tell("hideLoginPrompt", { view: "pdfFrame" }, "pdfFrame"),
              CwZ("#cw-loginFrame").hide(),
              this.CWDataCenter.setLoginShown(!1),
              this.CWDataCenter.loadConfig(),
              null !== CWFileAPIClass.getInstance().defferredAction.obj &&
                void 0 !==
                  CWFileAPIClass.getInstance().defferredAction.callback &&
                CWFileAPIClass.getInstance().defferredAction.callback(),
              CWFileAPIClass.getInstance().defferredAction.reset(),
              void this.CWDataCenter.updateUserDOM()
            );
        }
        b &&
          b.message &&
          (void 0 === b.data || "mainExt" === b.data.view) &&
          this.processMessage(b);
      }),
      (b.prototype.tell = function (a, b, e) {
        var f;
        b = b || {};
        "cwFrame" === e
          ? ((f = CwZ("#cw-colwizFrame")[0]),
            this.CWPDFReader.isColwizFrameLoaded ||
              CWUtils.log("message lost:" + a))
          : "pdfFrame" === e
          ? (f = CwZ("#cw-pdfFrame")[0])
          : "cwAuth" === e
          ? (f = CwZ("#cw-loginFrame")[0])
          : "cwWebFrame" === e && (f = CwZ("#cw-colwizwebFrame")[0]);
        f && f.contentWindow.postMessage({ message: a, data: b }, "*");
      }),
      (b.prototype.processMessage = function (a) {
        var b = this;
        if (a.message) {
          switch (a.message) {
            case "adjustHeight":
              CwZ("#cw-authorFrame").height(a.data.height + "px");
              break;
            case "hideAuthTooltip":
              this.CWPDFReader.authProfile.hideAuthorTip();
              break;
            case "parseTargetLink":
              CWParser.parsePDFText(
                a.data.data.linkIndex,
                a.data.data.linkRect,
                a.data.data.divRect,
                a.data.data.preTargetText,
                a.data.data.postTargetText,
                a.data.data.targetText,
                a.data.data.dest,
                a.data.data.annotLinkPosX,
                a.data.data.annotLinkPosY,
                a.data.data.itemsArr,
                a.data.data.appendPos.left,
                a.data.data.appendPos.top
              );
              break;
            case "cwSentryLoaded":
              for (var e in ((this.CWPDFReader.isErrorlogsFrameLoaded = !0),
              this.CWDataCenter.exceptionHolder))
                this.CWDataCenter.postMsgToSentry(
                  this.CWDataCenter.exceptionHolder[e]
                );
              this.CWDataCenter.exceptionHolder = [];
              break;
            case "setPublicationId":
              b.tell(
                "setPublicationId",
                { gotoLibUrl: a.data.pubId, view: "pdfFrame" },
                "pdfFrame"
              );
              break;
            case "webpdfloaded":
              this.CWDataCenter.setImporter();
              CWUtils.log("webpdf success");
              break;
            case "addlib":
              this.CWDataCenter.postToTracker(a.message);
              break;
            case "showLogoutBox":
              this.CWPDFReader.showLogoutBox();
              break;
            case "postToTracker":
              this.CWDataCenter.postToTracker(a.data.message);
              break;
            case "dialogEvent":
              CWDataAggregator.increment(a.data.message);
              break;
            case "closeDialog":
              this.CWPDFReader.closeDialog(!0);
              break;
            case "addtolib":
              this.CWDataCenter.addToLibrary(void 0, a.data.showSignIn);
              break;
            case "downloadPDF":
              this.CWDataCenter.downloadPDF(this.CWPDFReader.fileBlob);
              break;
            case "shareFile":
              this.CWDataCenter.shareFile();
              break;
            case "setBlobUrl":
              CWFileAPIClass.getInstance().setBlobUrl(a.data);
              break;
            case "sendException":
              this.CWDataCenter.postMsgToSentry(a.data);
              break;
            case "redirectToMyProfile":
              this.CWDataCenter.redirectToMyProfile();
              break;
            case "signoutCall":
              this.CWDataCenter.signoutCall();
              break;
            case "sync":
              this.CWDataCenter.syncData();
              break;
            case "initIframe":
              this.CWPDFReader.initIFrame();
              break;
            case "commentAdded":
              this.CWDataCenter.sendOnce ||
                ((this.CWDataCenter.sendOnce = !0),
                this.CWPDFReader.isLogin ||
                  b.tell("showLoginPrompt", { view: "pdfFrame" }, "pdfFrame"));
              break;
            case "setPdfFrame":
              this.CWPDFReader.setPdfFrame(a.data.frameString);
              break;
            case "iframe-loaded":
              if ("pdfFrame" === a.data.source) {
                if (
                  ((this.CWPDFReader.isPdfFrameLoaded = !0),
                  CwZ("#cw-pdfFrame").fadeIn("fast"),
                  void 0 !== colwizOptions)
                ) {
                  var f = void 0;
                  CWPDFReaderConfig.readerMode ===
                    CWPDFReaderMode.Webimporter &&
                    ((f = CwZ("#cw-pdfFrame")[0].contentWindow.publisher),
                    (publisher = f));
                  colwizOptions &&
                    document
                      .getElementById("cw-pdfFrame")
                      .contentWindow.CWPDFReader.changeReaderLogo();
                }
                b.tell(
                  "url",
                  {
                    url: this.CWPDFReader.urlToOpen,
                    pubSelected:
                      this.CWPDFReader.records[
                        this.CWPDFReader.selectedPDFIndex
                      ],
                    view: "pdfFrame",
                  },
                  "pdfFrame"
                );
                try {
                  b.tell(
                    "authArr",
                    {
                      authors: this.CWPDFReader.authIndexedArr,
                      view: "pdfFrame",
                    },
                    "pdfFrame"
                  );
                } catch (d) {
                  CWUtils.log(d);
                }
                this.CWDataCenter.setPublisherOptions(
                  this.CWPDFReader.colwizOptions
                );
                var g = this.CWPDFReader.selectedPDFIndex,
                  f = void 0;
                if (0 <= g) {
                  this.CWDataCenter.resetVariables();
                  this.CWDataCenter.loadConfig();
                  (f = this.CWPDFReader.records[g]) &&
                    (0 <= this.CWPDFReader.urlToOpen.indexOf("filesystem:") ||
                      0 <= this.CWPDFReader.urlToOpen.indexOf("blob:")) &&
                    (f.blobLink = this.CWPDFReader.urlToOpen);
                  this.CWDataCenter.setPubSelected(f);
                  var h = new Date().toLocaleDateString();
                  e = f.title;
                  e = Base64.decode(e);
                  e = e.substr(0, 10);
                  this.CWPDFReader.fileBlob.name = h + ("_" + e);
                  this.CWPDFReader.selectedPDFIndex = -1;
                  this.CWDataCenter.postToTracker("openpdf");
                  g = CwZ(".cw-btnContainer").eq(g);
                  try {
                    0 < g.length &&
                      (g
                        .find("span")
                        .eq(0)
                        .text(CWPDFReaderConfig.pubModeBtnsTxt.view),
                      g.removeClass("cw-ldr").addClass("cw-vir"));
                  } catch (l) {
                    CWUtils.log(l);
                  }
                }
                this.CWPDFReader.loginResponse
                  ? (publisher.readerOptions.shareTabShow &&
                      this.CWPDFReader.executeFormatCitation(),
                    b.tell(
                      "setLogin",
                      { value: this.CWPDFReader.isLogin, view: "pdfFrame" },
                      "pdfFrame"
                    ),
                    this.CWPDFReader.initiateRelatedPubs(),
                    this.CWDataCenter.setPageMeta(this.CWPDFReader.hashMeta),
                    this.CWDataCenter.setPubSelected(f),
                    this.CWPDFReader.isLogin && this.CWDataCenter.getFileId())
                  : b.executeGetFile(f);
                CwZ("body").css("overflow", "hidden");
                f &&
                  f.identifier &&
                  b.tell(
                    "logAnalytics",
                    CWPDFReaderConfig.cwURL +
                      "/openReader?pubId=" +
                      this.CWPDFReader.colwizOptions.appId +
                      "&ident=" +
                      f.identifier,
                    "cwAuth"
                  );
              } else if (
                "cwFrame" === a.data.source &&
                ((this.CWPDFReader.isColwizFrameLoaded = !0),
                this.CWPDFReader.startParseDependents(),
                this.CWDataCenter.loadConfig(),
                this.CWDataCenter.setPublisherOptions(
                  this.CWPDFReader.colwizOptions
                ),
                0 < this.CWDataCenter.eventsHolder.length)
              ) {
                for (var m in this.CWDataCenter.eventsHolder)
                  b.tell(
                    "postToTracker",
                    {
                      view: "cwFrame",
                      action: this.CWDataCenter.eventsHolder[m],
                      metaData: this.CWDataCenter.pubSelected,
                    },
                    "cwFrame"
                  );
                this.CWDataCenter.eventsHolder = [];
              }
              this.CWDataCenter.updateUserDOM();
              this.CWPDFReader.buttonsInjected ||
                (this.CWPDFReader.buttonsInjected = !0);
              this.CWPDFReader.isColwizFrameLoaded &&
                this.CWPDFReader.isPdfFrameLoaded &&
                this.CWDataCenter.pubSelected &&
                this.CWPDFReader.extractReferenceFromPage(
                  this.CWDataCenter.pubSelected
                );
              break;
            case "saveComments":
              CWUtils.log("Save Comments String:" + a.data.cmtString);
              this.CWDataCenter.saveComments(a.data.cmtString);
              break;
            case "loadComments":
              this.CWPDFReader.pdfFrameRef &&
                this.CWPDFReader.pdfFrameRef.CWCommentManager.loadComments(
                  a.data.commentStr
                );
              break;
            case "getComments":
              this.CWPDFReader.pdfFrameRef &&
                this.CWDataCenter.saveComments(
                  this.CWPDFReader.pdfFrameRef.CWCommentManager.getCommentsString()
                );
              break;
            case "getData":
              if (CWParser) {
                var p = a.data.metadata;
                CWParser.getData({
                  metadata: p,
                  success: function (a, d) {
                    p.data = a;
                    p.type = d;
                    b.CWDataCenter.setMetaData(p, p.index);
                  },
                });
              }
              break;
            case "defferredAction":
              f = CWFileAPIClass.getInstance().defferredAction;
              null != f.obj &&
                null != f.callback &&
                ((this.CWPDFReader.checkLoginInProgress = !1),
                a.data.loggedIn
                  ? void 0 !== f.obj && f.callback && f.callback()
                  : "checkForDownloadPopup" === f.obj ||
                    "checkForAddLibPopup" === f.obj
                  ? void 0 !== f.obj && f.callback && f.callback()
                  : "sync" === f.obj
                  ? (b.tell("logoutCallback", { view: "pdfFrame" }, "pdfFrame"),
                    CWlogger.logConsole(
                      "Your session seems to be expired or you may have been logged out, please reload.",
                      "Sync Failed",
                      !0
                    ))
                  : (a.data.showSignIn &&
                      CwZ("#cw-loginFrame")[0].contentWindow.postMessage(
                        { message: "sendShowLogin", param: {} },
                        "*"
                      ),
                    CwZ("#cw-loginFrame").show(),
                    this.CWDataCenter.setLoginShown(!0)));
              break;
            case "showLoginFrame":
              CwZ("#cw-loginFrame").show();
              this.CWDataCenter.setLoginShown(!0);
              break;
            case "sendJSONToReader":
              b.tell(
                "sendJSONToReader",
                { jsonData: a.data.jsonData, view: "pdfFrame" },
                "pdfFrame"
              );
              break;
            case "sendShowLogin":
              CwZ("#cw-loginFrame")[0].contentWindow.postMessage(
                { message: "sendShowLogin", param: {} },
                "*"
              );
              CwZ("#cw-loginFrame").show();
              this.CWDataCenter.setLoginShown(!0);
              break;
            case "hideSplashScr":
              this.CWPDFReader.hideSplashScr();
              break;
            case "showProgress":
              this.CWPDFReader.showProgress(
                a.data.type,
                a.data.message,
                a.data.progress,
                a.data.index
              );
              break;
            case "hideProgress":
              this.CWPDFReader.hideProgress(a.data.timeout, a.data.index);
              break;
            case "hasPubInLib":
              this.CWPDFReader.hasPubInLib(a.data.bValue, a.data.index);
              break;
            case "updateUser":
              null != this.CWPDFReader.pdfFrameRef &&
                void 0 !== this.CWPDFReader.pdfFrameRef.CWPDFReader &&
                this.CWPDFReader.pdfFrameRef.CWPDFReader.updateUser(a.data);
              break;
            case "uploadFile":
              void 0 !== this.CWPDFReader.urlToOpen &&
                (0 <= this.CWPDFReader.urlToOpen.indexOf("filesystem:") ||
                  0 <= this.CWPDFReader.urlToOpen.indexOf("blob:")) &&
                (a.data.blobLink = this.CWPDFReader.urlToOpen);
              this.CWPDFReader.uploadFile(
                a.data.pdfLink,
                a.data.index,
                a.data.params,
                a.data.blobLink
              );
              break;
            case "postFile":
              this.CWPDFReader.postFile(a.data.obj, a.data.url);
              break;
            case "getMetaData":
              this.CWPDFReader.getMetaData(
                a.data.metaData,
                this.CWDataCenter.setMetaData
              );
              break;
            case "showSyncMode":
              null != this.CWPDFReader.pdfFrameRef &&
                this.CWPDFReader.pdfFrameRef.CWPDFReader.showSyncMode();
              break;
            case "showAddMode":
              null != this.CWPDFReader.pdfFrameRef &&
                this.CWPDFReader.pdfFrameRef.CWPDFReader.showAddMode();
              break;
            case "logoutCallback":
              b.tell("logoutCallback", { view: "pdfFrame" }, "pdfFrame");
              break;
            case "unsyncedChanges":
              this.CWPDFReader.unsyncedChanges = !0;
              CwZ(window).off("beforeunload");
              CwZ(window).on("beforeunload", function () {
                if (
                  this.CWPDFReader.pdfFrameRef.CWCommentManager.annotationArr
                    .length
                )
                  return a.data.bPubInLib
                    ? "You have unsaved changes. If you leave the page these changes will be lost."
                    : "You have unsaved changes. You can save your changes by adding publication to your library. ";
                CwZ(window).off("beforeunload");
              });
              break;
            case "syncedChanges":
              this.CWPDFReader.unsyncedChanges = !1;
              CwZ(window).off("beforeunload");
              break;
            case "set_bLogin":
              this.CWPDFReader.set_bLogin(a.data.bLogin);
              break;
            case "logConsole":
              this.CWPDFReader.logConsole(
                a.data.strText,
                a.data.strHeading,
                a.data.bPromptUser
              );
              break;
            case "hideSyncingDisplay":
              this.CWPDFReader.hideSyncingDisplay();
              break;
            case "checkForPDFAccess":
              this.CWPDFReader.checkForPDFAccess(a.data.pdfLink);
              break;
            case "setPendingTasks":
              this.CWPDFReader.setPendingTasks(a.data.value);
              break;
            case "checkDropdownLogin":
              this.CWPDFReader.checkLoginInProgress ||
                ((f = CWFileAPIClass.getInstance().defferredAction),
                (f.obj = "checkForAddLibPopup"),
                (f.callback = function () {
                  b.tell(
                    "checkLoginResponse",
                    { isLogin: b.CWPDFReader.isLogin, view: "pdfFrame" },
                    "pdfFrame"
                  );
                  CWFileAPIClass.getInstance().defferredAction.reset();
                }),
                (this.CWPDFReader.checkLoginInProgress = !0),
                b.tell("checkLogin", { view: "cwFrame" }, "cwFrame"));
              break;
            case "checkDownloadLogin":
              this.CWPDFReader.checkLoginInProgress ||
                ((f = CWFileAPIClass.getInstance().defferredAction),
                (f.obj = "checkForDownloadPopup"),
                (f.callback = function () {
                  b.tell(
                    "checkDownloadResponse",
                    { isLogin: b.CWPDFReader.isLogin, view: "pdfFrame" },
                    "pdfFrame"
                  );
                  CWFileAPIClass.getInstance().defferredAction.reset();
                }),
                (this.CWPDFReader.checkLoginInProgress = !0),
                b.tell("checkLogin", { view: "cwFrame" }, "cwFrame"));
              break;
            case "getRelatedPubs":
              b.tell(
                "getRelatedPubs",
                { view: "cwFrame", data: a.data.message.url },
                "cwFrame"
              );
              break;
            case "setRelatedPubs":
              b.tell(
                "setRelatedPubs",
                { data: a.data, view: "pdfFrame" },
                "pdfFrame"
              );
              break;
            case "setRelPubsOnPage":
              CWParser.insertRelatedPublications &&
                CWParser.insertRelatedPublications(a.data.resp1, a.data.resp2);
              break;
            case "addRelatedPub":
              f = CWFileAPIClass.getInstance().defferredAction;
              f.obj = {};
              f.callback = function () {
                b.tell(
                  "addRelatedPub",
                  { view: "cwFrame", eId: a.data.eId },
                  "cwFrame"
                );
                CWFileAPIClass.getInstance().defferredAction.reset();
              };
              b.tell("checkLogin", { view: "cwFrame" }, "cwFrame");
              break;
            case "addRelatedPubResp":
              b.tell(
                "addRelatedPubResp",
                { data: a.data.value, view: "pdfFrame" },
                "pdfFrame"
              );
              break;
            case "executeFormattedCitation":
              this.CWPDFReader.executeFormatCitation(a.data.style);
              break;
            case "cslResponse":
              var n = a.data.response;
              if (a.data.mods)
                (f = JSON.parse(a.data.mods)),
                  (f = CWCSL.getCitation(f, n)),
                  b.tell(
                    "citationHTML",
                    { citationHTML: f, view: "pdfFrame" },
                    "pdfFrame"
                  );
              else {
                var r = [];
                Utility.getData({
                  metadata: b.CWDataCenter.pubSelected,
                  success: function (a, d) {
                    var e = "";
                    "ris" === b.CWDataCenter.pubSelected.type
                      ? ((e = RisParser(a, b.CWDataCenter.pubSelected)),
                        (e.entries[0].Fields.authors =
                          e.entries[0].Fields.author),
                        (e.entries[0].Fields.author = ""),
                        (CWCSL.testPublication = e))
                      : ((e = BibtexParser(a)),
                        (e.entries[0].Fields.authors =
                          e.entries[0].Fields.author),
                        (e.entries[0].Fields.author = ""));
                    r.push(e.entries[0]);
                    e = CWCSL.getCitationHTML(r, n);
                    b.tell(
                      "citationHTML",
                      { citationHTML: e.bibliography, view: "pdfFrame" },
                      "pdfFrame"
                    );
                  },
                });
              }
              break;
            case "cslJSONResponse":
              f = a.data.response;
              this.CWPDFReader.cslJsonResponse = f;
              b.tell(
                "cslJsonResponse",
                { cslJson: f, view: "pdfFrame" },
                "pdfFrame"
              );
              break;
            case "serverRefsResponse":
              a.data.resp.citations && 0 < a.data.resp.citations.length
                ? this.CWPDFReader.processReferencesFromServer(
                    a.data.resp.citations,
                    a.data.metadata
                  )
                : this.CWPDFReader.extractReferenceFromPage(a.data.metadata);
              break;
            case "noRefsFoundOnServer":
              this.CWPDFReader.extractReferenceFromPage(a.data.metadata);
              break;
            case "ajaxCall":
              b.tell(
                "ajaxCall",
                { view: "cwFrame", data: a.data.data },
                "cwFrame"
              );
              break;
            case "sendAuthors":
              try {
                e = void 0;
                if (
                  CWParser.isPubPage() ||
                  (CWParser.isPbPubPage && CWParser.isPbPubPage()) ||
                  (CWParser.isBookMain && CWParser.isBookMain())
                )
                  for (
                    CWParser.insertAwardsBlock &&
                      CWParser.insertAwardsBlock(a.data.resp.Publication),
                      e = a.data.resp.Colwiz.Report,
                      this.CWPDFReader.authArr[0] = {},
                      this.CWPDFReader.authArr[0].authors = e,
                      f = 0;
                    f < e.length;
                    f++
                  )
                    (h = e[f]), (this.CWPDFReader.authIndexedArr[h.id] = h);
                else if (
                  (CWParser.isListingPage && CWParser.isListingPage()) ||
                  (CWParser.isSearchingPage && CWParser.isSearchingPage()) ||
                  (CWParser.isPbSearchingPage &&
                    CWParser.isPbSearchingPage()) ||
                  (CWParser.isPbListingPage && CWParser.isPbListingPage())
                )
                  for (f = 0; f < a.data.resp.length; f++)
                    for (
                      this.CWPDFReader.authArr[f] = a.data.resp[f], h = 0;
                      h < this.CWPDFReader.authArr[f].authors.length;
                      h++
                    )
                      (g = this.CWPDFReader.authArr[f].authors[h]),
                        (this.CWPDFReader.authIndexedArr[g.id] = g);
                this.CWPDFReader.bindFollowBtn();
                this.CWPDFReader.initLoginFrame();
                CWParser.insertClassInAuthorsLink(this.CWPDFReader.authArr);
                this.CWPDFReader.authProfile = new CWAuthorTip(
                  this.CWPDFReader.authIndexedArr
                );
              } catch (t) {
                CWUtils.log("no authors data found");
              }
              break;
            case "ajaxCallResp":
              b.tell(
                "ajaxCallResp",
                { data: a.data.data, view: "pdfFrame" },
                "pdfFrame"
              );
              break;
            case "followAuth":
              this.CWPDFReader.followAuth(a.data.authorId);
              break;
            case "reloadPage":
              window.location.reload();
              break;
            case "cw-logout":
              (CWPDFReaderConfig.readerMode !== CWPDFReaderMode.Publisher &&
                CWPDFReaderConfig.readerMode !== CWPDFReaderMode.Webimporter) ||
                this.CWPDFReader.CWComManager.tell(
                  "logoutCallback",
                  { view: "cwFrame" },
                  "cwFrame"
                );
          }
          CWUtils.log("pdfreader_pub.js processMessage:" + a.message);
        }
      }),
      (b.prototype.executeGetFile = function (a) {
        var b = this;
        this.CWPDFReader.loginResponse && this.CWPDFReader.isColwizFrameLoaded
          ? (publisher.readerOptions.shareTabShow &&
              this.CWPDFReader.executeFormatCitation(),
            this.CWDataCenter.setPageMeta(this.CWPDFReader.hashMeta),
            this.CWDataCenter.setPubSelected(a),
            this.CWPDFReader.isLogin && this.CWDataCenter.getFileId(),
            this.tell(
              "setLogin",
              { value: this.CWPDFReader.isLogin, view: "pdfFrame" },
              "pdfFrame"
            ),
            this.CWPDFReader.initiateRelatedPubs())
          : setTimeout(function () {
              b.executeGetFile(a);
            }, 500);
      }),
      b
    );
  })(),
  CWPDFReader_Publisher = (function () {
    function b() {
      this.PDFHash = this.pageURL = this.urlToOpen = "";
      this.colwizOptions = this.pdfFrameRef = null;
      this.bPDFFrameLoaded = !1;
      this.records = [];
      this.hashMeta = {};
      this.fileBlob = { blob: null, name: null };
      this.btnHash = null;
      this.frameHTML = "";
      this.isLogin = !1;
      this.oldPageHash = "";
      this.processingPub = !1;
      this.cslJsonResponse = "{}";
      this.unsyncedChanges = !1;
      this.authArr = [];
      this.isAuthorProfActive = !1;
      this.authIndexedArr = {};
      this.isPdfFrameLoaded =
        this.isErrorlogsFrameLoaded =
        this.isColwizFrameLoaded =
        this.buttonsInjected =
        this.bPdfFrameLoaded =
          !1;
      this.currentPubReferences = null;
      this.selectedPDFIndex = -1;
      this.bGetCSLDone = this.checkLoginInProgress = this.loginResponse = !1;
      this.authProfile = {};
      this.tooltip = null;
      this.authorWidgetWidth = 580;
      this.frameTipHorizontalPosition = "left";
      this.authorWidgetAverageHeight = 600;
      this.authorWidgetHeight = "";
      this.recommendedViewed = !1;
      this.resultSet1 = [];
      this.resultSet2 = [];
      this.parserNotFoundTime = 0;
      this.progressComplete = this.recordsDependentStarted = !1;
      this.openPDFBlobLink = null;
      this.CWComManager = new CWComManager_Publisher();
    }
    return (
      (b.getInstance = function () {
        return (
          null === this.CWPDFReader && (this.CWPDFReader = new b()),
          this.CWPDFReader
        );
      }),
      (b.prototype.init = function () {
        var a = this,
          b = this;
        CWUtils.log("LOADING PARSER Pub: " + CWPDFReaderConfig.parser);
        try {
          CWParser && CWParser.parsePage
            ? (clearTimeout(this.initilizeTimeout),
              (this.colwizOptions = window.colwizOptions),
              CWParser.parsePage({
                success: function (d) {
                  CWUtils.log("linkCount:" + d);
                  var e = CWHtmlStructure.getSignupDialog();
                  CwZ("body").append(e);
                  0 < CwZ(".cw-addToLib").length &&
                    CwZ(".cw-addToLib")
                      .off("click")
                      .on("click", function (a, d) {
                        return b.addToLibrary(a, d);
                      });
                  0 < CwZ(".cw-openPdfReader").length &&
                    CwZ(".cw-openPdfReader")
                      .off("click")
                      .on("click", function () {
                        var a = CwZ(this);
                        CWUtils.log(a);
                        a = a.closest(".cw-btnContainer").data("metadata");
                        void 0 !== a.blobLink &&
                          (this.openPDFBlobLink = a.blobLink);
                        this.openDialog();
                        this.onHashChange();
                      });
                  0 < CwZ(".showDownloadPopup").length && a.bindPopupEvents();
                  var f = {};
                  0 < d.length &&
                    ((a.records = d),
                    a.startParseDependents(),
                    CwZ(d).each(function (a) {
                      var b = d[a];
                      b.index = a;
                      f[a] || (b.title = Base64.encode(b.title));
                      f[a] = b;
                    }),
                    (a.hashMeta = f));
                  a.onHashChange();
                },
                addButton: CWHtmlStructure.insertButtonsOnPage,
              }),
              CWDataCenterClass.getInstance().loadConfig(),
              setTimeout(function () {
                try {
                  CwZ("#bmkcommunication")[0].contentWindow.postMessage(
                    JSON.stringify({ message: "webpdfloaded", param: {} }),
                    "*"
                  );
                } catch (a) {
                  CWUtils.log(a);
                }
              }, 2e3))
            : 20 > this.parserNotFoundTime &&
              (this.parserNotFoundTime++,
              (this.initilizeTimeout = setTimeout(function () {
                return a.init();
              }, 1e3)));
        } catch (e) {
          CWUtils.log(e);
          var f = { view: "mainExt", message: e.message, stack: e.stack };
          CWDataCenterClass.getInstance().postMsgToSentry(f);
        }
      }),
      (b.prototype.startParseDependents = function () {
        try {
          if (
            0 < this.records.length &&
            !this.recordsDependentStarted &&
            this.isColwizFrameLoaded &&
            (((this.recordsDependentStarted = !0),
            CWDataCenterClass.getInstance().setPageMeta(this.hashMeta),
            publisher && publisher.readerOptions.authorProfile) &&
              (CWParser.isPubPage() ||
                (CWParser.isPbPubPage && CWParser.isPbPubPage())) &&
              this.records[0].identifier &&
              (null === this.tooltip ||
                this.tooltip.pubdoi !== this.records[0].identifier) &&
              (this.tooltip = new CWAuthorTip(this.records[0].identifier)),
            publisher &&
              publisher.readerOptions.relatedOnDetails &&
              (CWParser.isPubPage() ||
                (CWParser.isPbPubPage && CWParser.isPbPubPage())))
          )
            try {
              var a = document.createElement("script");
              a.setAttribute("type", "text/javascript");
              var b = this.records[0];
              b.authors.replace(/; /g, '","');
              a.src =
                "https://wiz.colwiz.com/suggest?callback=showCWRecResults&scope=pb&nested=1&doi=" +
                b.identifier;
              document.body.appendChild(a);
              CwZ(a).error(function () {
                showCWRecResults({ top: "", mah: "" });
              });
            } catch (e) {
              CWUtils.log(e);
            }
        } catch (f) {
          CWUtils.log(f);
        }
      }),
      (b.prototype.bindPopupEvents = function () {
        var a = this;
        CwZ(".showDownloadPopup")
          .off("click")
          .on("click", function (b) {
            b.preventDefault();
            b.stopPropagation();
            var e = CwZ(this).data("metadata");
            !e &&
              CWParser.isPbPubPage &&
              CWParser.isPbPubPage() &&
              (e = a.records[0]);
            var f = e.pubLink + "#" + btoa(e.pdfLink + "@@@0");
            switch (b.which) {
              case 1:
                b.ctrlKey
                  ? (CWDataCenterClass.getInstance().postToTracker(
                      "viewIPDFPopup",
                      e
                    ),
                    window.open(f))
                  : (CWDataCenterClass.getInstance().postToTracker(
                      "optionPopup",
                      e
                    ),
                    (function () {
                      function a() {
                        CwZ("#downloadPopupOverlay").remove();
                        c.each(function (a) {
                          "downloadPopupOverlay" !== CwZ(c[a]).attr("id") &&
                            CwZ(c[a]).attr("aria-hidden", "false");
                        });
                        CwZ(f).trigger("focus");
                      }
                      0 !== CwZ("#downloadPopupOverlay").length &&
                        CwZ("#downloadPopupOverlay").remove();
                      e.pubLink = e.pubLink.replace("abs/", "full/");
                      var b = CWHtmlStructure.getDownloadPopup(e, publisher);
                      CwZ("body").append(b);
                      var c = CwZ("body").children();
                      c.each(function (a) {
                        "downloadPopupOverlay" !== CwZ(c[a]).attr("id") &&
                          CwZ(c[a]).attr("aria-hidden", "true");
                      });
                      var f = CwZ(":focus"),
                        b = CwZ("#downloadPopupOverlay");
                      b.attr("aria-hidden", "false");
                      b.find("*")
                        .filter(
                          "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]"
                        )
                        .filter(":visible")
                        .first()
                        .trigger("focus");
                      CwZ("#closeDownloadPopup,#downloadPopupBody a")
                        .off("click")
                        .on("click", function (b) {
                          if ("downloadPdf" === CwZ(this).attr("id")) {
                            if (
                              (CWDataCenterClass.getInstance().postToTracker(
                                "downloadPopup",
                                e
                              ),
                              CwZ("#downloadPopupOverlay").hide(),
                              CWPDFReaderConfig.readerMode ===
                                CWPDFReaderMode.Publisher)
                            )
                              try {
                                ga(
                                  "send",
                                  "event",
                                  "button",
                                  "wizdom.ai \u2013 Download PDF"
                                );
                              } catch (c) {
                                CWUtils.log(c);
                              }
                          } else if ("viewIPDF" === CwZ(this).attr("id")) {
                            if (
                              (b.preventDefault(),
                              CWPDFReaderConfig.readerMode ===
                                CWPDFReaderMode.Publisher)
                            )
                              try {
                                ga(
                                  "send",
                                  "event",
                                  "button",
                                  "wizdom.ai \u2013 Interactive PDF"
                                );
                              } catch (f) {
                                CWUtils.log(f);
                              }
                            CWDataCenterClass.getInstance().postToTracker(
                              "viewIPDFPopup",
                              e
                            );
                            b = e.pubLink + "#" + btoa(e.pdfLink + "@@@0");
                            CwZ("#downloadPopupOverlay").hide();
                            publisher.readerOptions.readerSamePage
                              ? (window.location.hash = btoa(
                                  e.pdfLink + "@@@" + e.index
                                ))
                              : window.open(b, "_blank");
                          } else
                            "SavePDF" === CwZ(this).attr("id")
                              ? CWDataCenterClass.getInstance().addToLibrary(
                                  e.index
                                )
                              : (CWDataCenterClass.getInstance().postToTracker(
                                  "closeOptionPopup",
                                  e
                                ),
                                CwZ("#downloadPopupOverlay").hide());
                          a();
                        });
                      CwZ("#downloadPopupOverlay").on("click", function (b) {
                        "cw-dialog-overlay" === b.target.classList &&
                          (CWDataCenterClass.getInstance().postToTracker(
                            "closeOptionPopup",
                            e
                          ),
                          a());
                      });
                      CwZ("#resetTabInd").on("focus", function () {
                        CwZ("#closeDownloadPopup").trigger("focus");
                      });
                      CwZ("body")
                        .off("keydown")
                        .on("keydown", function (b) {
                          27 === b.keyCode &&
                            (CwZ("#downloadPopupOverlay").is(":visible") &&
                              CWDataCenterClass.getInstance().postToTracker(
                                "closeOptionPopup",
                                e
                              ),
                            a());
                        });
                    })());
                break;
              case 2:
                window.open(f),
                  CWDataCenterClass.getInstance().postToTracker(
                    "viewIPDFPopup",
                    e
                  );
            }
          });
      }),
      (b.prototype.executeFormatCitation = function (a) {
        this.formatCitation(a);
        this.bGetCSLDone
          ? this.CWComManager.tell(
              "cslJsonResponse",
              { cslJson: this.cslJsonResponse, view: "pdfFrame" },
              "pdfFrame"
            )
          : ((this.bGetCSLDone = !0), this.getCSLJson());
      }),
      (b.prototype.bindFollowBtn = function () {
        CwZ(".cw-follow")
          .off(".cw-follow")
          .on("click", function (a) {
            a = CwZ(this).attr("data-id");
            this.followAuth(a);
          });
      }),
      (b.prototype.followAuth = function (a) {
        var b = CWFileAPIClass.getInstance().defferredAction;
        b.obj ||
          b.callback ||
          ((b.obj = {}),
          (b.callback = function () {
            this.authProfile.followAuthor(a);
            CWFileAPIClass.getInstance().defferredAction.reset();
          }),
          this.CWComManager.tell(
            "checkLogin",
            { showSignIn: !0, view: "cwFrame" },
            "cwFrame"
          ));
      }),
      (b.prototype.initiateRelatedPubs = function () {
        this.CWComManager.tell(
          "initiateRelatedPubs",
          { view: "pdfFrame" },
          "pdfFrame"
        );
      }),
      (b.prototype.getInitials = function (a) {
        a = a.toUpperCase().split(/[\s.]+/);
        var b = "";
        return (
          (b =
            1 === a.length
              ? a[0].charAt(0)
              : a[0].charAt(0) + a[a.length - 1].charAt(0)),
          b
        );
      }),
      (b.prototype.setPositionOfFrame = function (a) {
        a = CwZ(a.target).closest(".cw-authorLink");
        var b,
          e,
          f = CwZ(document).width(),
          d = CwZ(a).offset(),
          f = f - d.left;
        a = CwZ(a).width();
        f > this.authorWidgetWidth
          ? ((b = d.left + a + 20),
            (e = "auto"),
            (this.frameTipHorizontalPosition = "left"))
          : ((b = "auto"),
            (e = f + 20),
            (this.frameTipHorizontalPosition = "right"));
        f = CwZ(window.top).height();
        a = d.top - CwZ(document).scrollTop();
        f -= a;
        d =
          f > this.authorWidgetAverageHeight
            ? parseInt(d.top, 10) - 50
            : f < this.authorWidgetAverageHeight &&
              a < this.authorWidgetAverageHeight
            ? parseInt(d.top, 10) - this.authorWidgetAverageHeight / 2
            : d.top - this.authorWidgetHeight + 50;
        CwZ("#cw-authorFrame").css("left", b).css("right", e).css("top", d);
      }),
      (b.prototype.formatCitation = function (a) {
        var b = "",
          b = a
            ? CWPDFReaderConfig.cwURL + "/cwdata/csl/" + a + ".csl"
            : CWPDFReaderConfig.cwURL + "/cwdata/csl/apa.csl";
        this.CWComManager.tell(
          "getCSLFile",
          {
            view: "cwFrame",
            path: b,
            identifier: CWDataCenterClass.getInstance().pubSelected
              ? CWDataCenterClass.getInstance().pubSelected.identifier
              : "",
          },
          "cwFrame"
        );
      }),
      (b.prototype.getCSLJson = function () {
        this.CWComManager.tell(
          "getCSLJson",
          { url: CWPDFReaderConfig.cwURL + "/cwdata/csl/js/csl.json" },
          "cwFrame"
        );
      }),
      (b.prototype.UpdateQueryString = function (a, b, e) {
        e || (e = window.location.href);
        var f,
          d = new RegExp("([?&])" + a + "=.*?(&|#|$)(.*)", "gi");
        if (d.test(e))
          return null != b
            ? e.replace(d, "$1" + a + "=" + b + "$2$3")
            : ((f = e.split("#")),
              (e = f[0].replace(d, "$1$3").replace(/(&|\?)$/, "")),
              void 0 !== f[1] && null !== f[1] && (e += "#" + f[1]),
              e);
        if (null == b) return e;
        d = -1 !== e.indexOf("?") ? "&" : "?";
        return (
          (f = e.split("#")),
          (e = f[0] + d + a + "=" + b),
          void 0 !== f[1] && null !== f[1] && (e += "#" + f[1]),
          e
        );
      }),
      (b.prototype.initSentryFrame = function () {
        var a =
          '<iframe id="errorlogs" style="display: none; position: fixed; top: 0px; left:0px; z-index:99999999; border: 0px;" width="100%" height="100%" src="https://' +
          CWPDFReaderConfig.sentryDomain +
          '/errorlogs?type=1"></iframe>';
        CwZ("body").append(a);
      }),
      (b.prototype.initIFrame = function () {
        if (0 < CwZ("#cw-pdfFrame").length) return !0;
        0 >= CwZ("#cw-pdfFrame").length &&
          CwZ("body").append(
            "<iframe \n\t\t\t\t\t\tid='cw-pdfFrame' style='display: none; position: fixed; top: 0px; left:0px; z-index:99999998; border: 0px; background-color: #636467;' \n\t\t\t\t\t\twidth='100%' height='100%' \n\t\t\t\t\t\tallowfullscreen webkitallowfullscreen mozallowfullscreen\n\t\t\t\t\t\tonload='CWPDFReader_Publisher.getInstance().onLoadIframe()' data-version='1.001'></iframe>"
          );
        return !1;
      }),
      (b.prototype.onLoadIframe = function () {
        try {
          if (!this.bPDFFrameLoaded) {
            0 <= this.urlToOpen.indexOf("filesystem:") ||
            0 <= this.urlToOpen.indexOf("blob:")
              ? this.updateIFrame(this.urlToOpen)
              : navigator.userAgent.match(/Trident.*rv[ :]*11\./) ||
                navigator.userAgent.match(/Edge/)
              ? this.updateIFrame(this.urlToOpen)
              : CWFileAPIClass.getInstance().getFileBlob(this.urlToOpen, "vir");
            this.bPDFFrameLoaded = !0;
            try {
              CwZ("html").css("overflow", "hidden");
            } catch (a) {
              CWUtils.log(a);
            }
          }
        } catch (b) {
          var e = { view: "mainExt", message: b.message, stack: b.stack };
          CWDataCenterClass.getInstance().postMsgToSentry(e);
        }
      }),
      (b.prototype.closeDialog = function (a) {
        if (
          this.unsyncedChanges &&
          this.pdfFrameRef.CWCommentManager.annotationArr.length
        )
          confirm(
            "You have unsaved changes. If you leave the page these changes will be lost."
          )
            ? ((this.unsyncedChanges = !1),
              CwZ("html").css("overflow", ""),
              this.close(a),
              CWDataAggregator.forceFlush())
            : (location.hash = this.oldPageHash);
        else {
          this.unsyncedChanges = !1;
          try {
            CwZ("html").css("overflow", "");
          } catch (b) {
            CWUtils.log(b);
          }
          this.close();
          CWDataAggregator.forceFlush();
        }
      }),
      (b.prototype.initSplashScr = function () {
        var a = "";
        CwZ(".cw-btnContainer").eq(1).hasClass("ascelibrary-detail") &&
          (a = "asceOverlay");
        a = CWHtmlStructure.getSplashScreen(a);
        CwZ("body").append(a);
        CwZ.fn.center = function () {
          return (
            this.css("position", "fixed"),
            this.css("top", "0px"),
            this.css("left", "0px"),
            this
          );
        };
      }),
      (b.prototype.showSplashScr = function () {
        CwZ("#cw-loader").show();
        CwZ("#cw-loader").center();
        CwZ("#cw-loader").find(".cross").hide();
        CWUtils.log("shown cw-loader");
      }),
      (b.prototype.hideSplashScr = function () {
        CwZ(".cw-splash-content .cw-content").show();
        CwZ(".cw-splash-content .cw-access").hide();
        CwZ(".cw-splash .cw-progress span").text("Loading article...");
        CwZ(".cw-splash .cw-progress").show();
        CwZ("#cw-loader").remove();
        this.progressComplete = !1;
      }),
      (b.prototype.showLoadProgress = function (a) {
        isNaN(a) ||
          ((this.progressComplete = !0),
          CwZ("#cw-loader .cw-bar").width(Math.floor(100 * a) + "%"));
      }),
      (b.prototype.updateIFrame = function (a) {
        var b = CWHtmlStructure.getHead(
            CWPDFReaderConfig.staticDomainURL + "/js/webpdf",
            CWPDFReaderConfig.assetsDomainURL + "/css/webpdf",
            cPDF ? cPDF.version : "1"
          ),
          e = CWHtmlStructure.getBody(
            CWPDFReaderConfig.cwURL + "/images/webpdf/",
            a
          ),
          e = e.replace(/reqFilesURL/g, CWPDFReaderConfig.staticDomainURL),
          e = e.replace(
            '<input id="cw-pdfURL" type="hidden" value="pdfUrl"/>',
            '<input id="cw-pdfURL" type="hidden" value="' + a + '"/>'
          ),
          b =
            "<html><head>" +
            b +
            '</head><body class="cw-prefix">' +
            e +
            "</body></html>";
        CWUtils.log("IFRAME UPDATED");
        this.pdfFrameRef = CwZ("#cw-pdfFrame").get(0).contentWindow;
        e = this.pdfFrameRef.document.open("text/html", "replace");
        e.write(b);
        e.close();
        CwZ("#cw-pdfURL").attr("value", a);
      }),
      (b.prototype.setPdfFrame = function (a) {
        this.frameHTML = a;
      }),
      (b.prototype.initLoginFrame = function () {
        var a =
            void 0 !== publisher && publisher.appId
              ? publisher.appId
              : CWPDFReaderConfig.readerMode === CWPDFReaderMode.Webimporter
              ? "bmk_" +
                encodeURIComponent(
                  CWPDFReaderConfig.parser.toLowerCase().replace(/ +/g, "_")
                )
              : location.hostname,
          a =
            '<iframe id="cw-loginFrame" style="display: none; position: fixed; top: 0px; left:0px; z-index:99999999; border: 0px;" width="100%" height="100%" src="' +
            (CWPDFReaderConfig.idURL +
              "/cwauth?appid=" +
              a +
              "&" +
              (CWPDFReaderConfig.readerMode === CWPDFReaderMode.Publisher
                ? "pubsol=1"
                : "svc=bmk") +
              "&compact=1") +
            '"></iframe>';
        CwZ("body").append(a);
      }),
      (b.prototype.initColwizFrame = function () {
        var a =
          CWPDFReaderConfig.cwURL +
          "/js/webpdf/pages/ireader.html?v=" +
          cPDF.version;
        0 >= CwZ("#cw-colwizFrame").length &&
          ((a =
            "\n\t\t\t\t<iframe allowfullscreen webkitallowfullscreen mozallowfullscreen \n\t\t\t\t\tid='cw-colwizFrame' style='display: none; position: fixed; top: 0px; left:0px; z-index:0; border: 0px;' \n\t\t\t\t\twidth='0%' height='0%' \n\t\t\t\t\tonload='CWPDFReader_Publisher.getInstance().onLoadColwizIframe()' src='" +
            a +
            "' data-version='" +
            cPDF.version +
            "'></iframe>"),
          CwZ("body").append(a));
        a =
          CWPDFReaderConfig.webDomain +
          "/js/webpdf/pages/ireader.html?v=" +
          cPDF.version;
        0 >= CwZ("#cw-colwizwebFrame").length &&
          ((a =
            "\n\t\t\t\t<iframe allowfullscreen webkitallowfullscreen mozallowfullscreen \n\t\t\t\t\tid='cw-colwizwebFrame' style='display: none; position: fixed; top: 0px; left:0px; z-index:0; border: 0px;' \n\t\t\t\t\twidth='0%' height='0%' \n\t\t\t\t\tonload='CWPDFReader_Publisher.getInstance().onLoadColwizIframe()' src='" +
            a +
            "' data-version='" +
            cPDF.version +
            "'></iframe>"),
          CwZ("body").append(a));
      }),
      (b.prototype.onLoadColwizIframe = function () {
        CWDataCenterClass.getInstance().setPublisherOptions(this.colwizOptions);
        CWDataCenterClass.getInstance().setPubSelected(
          CWDataCenterClass.getInstance().pubSelected
        );
      }),
      (b.prototype.showLogoutBox = function () {
        this.CWComManager.tell(
          "showLogoutBox",
          { view: "pdfFrame" },
          "pdfFrame"
        );
      }),
      (b.prototype.showServerDown = function () {
        this.CWComManager.tell(
          "showLogoutBox",
          { view: "pdfFrame" },
          "pdfFrame"
        );
      }),
      (b.prototype.hideSyncingDisplay = function () {
        this.CWComManager.tell(
          "hideSyncingDisplay",
          { view: "pdfFrame" },
          "pdfFrame"
        );
      }),
      (b.prototype.postFile = function (a, b) {
        var e = CWFileUpload.fileData,
          f = CwZ("#cw-fileUpload").data("blueimpFileupload");
        f.options.formData = a;
        f.options.url = b;
        e.submit();
      }),
      (b.prototype.openDialog = function (a) {
        if (!(void 0 !== a && a.originalEvent instanceof MouseEvent)) {
          a.INDEX && (a.INDEX = parseInt(a.INDEX, 10));
          var b = null,
            e = "";
          if ((CWUtils.log(a), void 0 !== a)) {
            if (
              ((b = CwZ(".cw-openPdfReader[data-pub=" + a.INDEX + "]")),
              (e =
                null != this.openPDFBlobLink
                  ? (CWUtils.log(
                      "opening the pdf from blob that's already in browser's memory"
                    ),
                    this.openPDFBlobLink)
                  : a.PDFURL),
              a.FORWARDED)
            )
              return (
                (e = CWHtmlStructure.generateReaderHash(a.PDFURL, a.INDEX)),
                history.replaceState({}, "", this.pageURL + "#" + e),
                void history.back()
              );
            if (b && e) {
              this.initSplashScr();
              this.btnHash = a;
              var f = parseInt(a.INDEX, 10),
                d = this.records[f];
              CWFileAPIClass.getInstance().getFileBlob(e, "vir", d, a);
              CWUtils.log("initializing wizdom.ai and login iframes");
              this.initColwizFrame();
              this.initLoginFrame();
              CWDataCenterClass.getInstance().setPubSelected(this.records[f]);
              CWDataCenterClass.getInstance().postToTracker(
                "clickpdf",
                this.records[f]
              );
              this.selectedPDFIndex = f;
              this.records.length - 1 >= f &&
                this.records[f].pdfLink !== a.PDFURL &&
                CWParser.isLoginPage &&
                CWParser.isLoginPage() &&
                ((e = a.PDFURL + "?redirect=1"), window.location.replace(e));
              CWPDFReaderConfig.readerMode === CWPDFReaderMode.Webimporter &&
                CWDataCenterClass.getInstance().setPubSelected(
                  this.records[a.INDEX]
                );
              b.removeClass("cw-vir").addClass("cw-ldr");
              b.find("span").text("Loading IPDF Reader");
              (a = b.closest(".cw-btnContainer").data("metadata")) &&
              void 0 !== CWDataCenterClass.getInstance().pubSelected &&
              void 0 !== CWDataCenterClass.getInstance().pubSelected.blobLink
                ? (this.urlToOpen = a.blobLink)
                : (this.urlToOpen = e);
            }
          }
        }
      }),
      (b.prototype.onHashChange = function () {
        if (location.hash !== this.PDFHash) {
          var a = location.href,
            b = location.hash;
          this.PDFHash = location.hash;
          CWUtils.log("HASH CHANGE: " + b);
          var e = -1 < Base64.decode(b).indexOf("@@@");
          if (
            "#nbb" === location.hash &&
            "hidden" === CwZ("body").css("overflow")
          )
            window.history.back(), window.history.back();
          else if ("#nbb" === location.hash) CWUtils.log("#nbb");
          else if (e) {
            for (var e = b.split("#"), f = 0; f < e.length; f++)
              try {
                if (-1 < Base64.decode(e[f]).indexOf("@@@")) {
                  b = e[f];
                  break;
                }
                b = "";
              } catch (d) {
                CWUtils.log(d);
              }
            ((b = b.replace("#", "")), 0 < b.length)
              ? ((this.oldPageHash = window.location.hash),
                (this.pageURL = a.replace("#" + b, "")),
                (a = CWHtmlStructure.decodeReaderHash(b)),
                void 0 !== a &&
                  void 0 !== a.PDFURL &&
                  a.PDFURL !== this.urlToOpen &&
                  this.openDialog(a))
              : this.unsyncedChanges
              ? confirm(
                  "You have unsaved changes. If you leave the page these changes will be lost."
                )
                ? ((this.unsyncedChanges = !1),
                  this.close(),
                  this.closeLoginFrame())
                : (location.hash = this.oldPageHash)
              : (this.close(), this.closeLoginFrame());
          } else setTimeout(function () {}, 1e3);
        }
      }),
      (b.prototype.close = function (a) {
        this.PDFHash = "";
        this.bPDFFrameLoaded = !1;
        this.openPDFBlobLink = null;
        CwZ("#cw-pdfFrame").hide();
        CwZ("#cw-pdfFrame").remove();
        CWFileAPIClass.getInstance().dontHideSplash ||
          (CwZ("#cw-loader").hide(),
          CwZ(".cw-splash-content .cw-content").show(),
          CwZ(".cw-splash-content .cw-access").hide(),
          CwZ(".cw-splash .cw-progress span").text("Loading article..."),
          CwZ(".cw-splash .cw-progress").show());
        CwZ("body").css("overflow", "");
        this.pageURL = this.urlToOpen = "";
        CWDataCenterClass.getInstance().sendOnce = !1;
        this.pdfFrameRef = null;
        history.replaceState(
          {},
          "",
          location.protocol +
            "//" +
            location.host +
            location.pathname +
            (location.search ? location.search : "")
        );
        var b = CwZ(".cw-openPdfReader.cw-ldr");
        0 < b.length &&
          (b.removeClass("cw-ldr").addClass("cw-vir"),
          b.find("span").text(CWPDFReaderConfig.pubModeBtnsTxt.view));
        a && (location.hash = "");
        this.CWComManager.tell("findPubsCall", { view: "cwFrame" }, "cwFrame");
      }),
      (b.prototype.addToLibrary = function (a, b) {
        try {
          this.initLoginFrame();
          var e = CwZ(a.target).closest(".cw-addToLib"),
            f = e.closest(".cw-btnContainer").data("metadata");
          if (e.hasClass("cw-vil"))
            window.open(CWPDFReaderConfig.cwURL + "/library", "_blank");
          else if (
            (this.processingPub
              ? this.showProgress("queue", "Queued to add", "", f.index)
              : ((this.processingPub = !0),
                void 0 !== f.pdfLink && 0 < f.pdfLink.length
                  ? this.showProgress("wait", "Processing PDF", "", f.index)
                  : this.showProgress("wait", "Processing...", "", f.index)),
            void 0 !== f)
          )
            (CWFileAPIClass.getInstance().defferredAction.obj = f),
              f.blobLink
                ? (CWFileAPIClass.getInstance().defferredAction.callback =
                    function () {
                      CWFileAPIClass.getInstance().getFileBlob(
                        f.blobLink,
                        "atl",
                        f
                      );
                      CWFileAPIClass.getInstance().defferredAction.reset();
                    })
                : (CWFileAPIClass.getInstance().defferredAction.callback =
                    function () {
                      CWFileAPIClass.getInstance().getFileBlob(
                        f.pdfLink,
                        "atl",
                        f
                      );
                      CWFileAPIClass.getInstance().defferredAction.reset();
                    }),
              this.CWComManager.tell(
                "checkLogin",
                { view: "cwFrame" },
                "cwFrame"
              );
        } catch (d) {
          (e = { view: "mainExt", message: d.message, stack: d.stack }),
            CWDataCenterClass.getInstance().postMsgToSentry(e);
        }
      }),
      (b.prototype.setPendingTasks = function (a) {
        a
          ? CwZ(window).on("beforeunload", function () {
              return "You have unsaved changes. If you leave the page these changes will be lost.";
            })
          : CwZ(window).off("beforeunload");
      }),
      (b.prototype.showLoginFrame = function () {
        CwZ("#cw-loginFrame").show();
      }),
      (b.prototype.closeLoginFrame = function () {
        CwZ("#cw-loginFrame").hide();
        var a = CwZ(".cw-qta");
        0 < a.length &&
          (a.removeClass("cw-qta").addClass("cw-atl"),
          a.find("span").html(CWPDFReaderConfig.pubModeBtnsTxt.add),
          a
            .find("em")
            .html(
              "Save article PDF and metadata to your wizdom.ai Library. Access anywhere, cite them and generate bibliographies."
            ));
        a = CwZ(".cw-ail");
        0 < a.length &&
          (a.removeClass("cw-ail").addClass("cw-atl"),
          a.find("span").html(CWPDFReaderConfig.pubModeBtnsTxt.add),
          a
            .find("em")
            .html(
              "Save article PDF and metadata to your wizdom.ai Library. Access anywhere, cite them and generate bibliographies."
            ));
        this.CWComManager.tell(
          "hideWaitingMsg",
          { view: "pdfFrame" },
          "pdfFrame"
        );
        CWDataCenterClass.getInstance().removeAllTasks();
        CWDataCenterClass.getInstance().checkPendingTasks();
      }),
      (b.prototype.showProgress = function (a, b, e, f) {
        if (this.isLogin || "wait" === a)
          if (this.pdfFrameRef)
            this.pdfFrameRef.CWPDFReader.showProgress(a, b, e);
          else if (
            void 0 !== f &&
            (b = CwZ('.cw-btnContainer a[data-pub="' + f + '"]')
              .parent()
              .eq(0))
          ) {
            var d = CwZ(b).find(".cw-addToLib");
            "queue" === a
              ? (d.removeClass("cw-atl"),
                d.addClass("cw-qta"),
                d.find("span").html("Queued to Add"),
                d.find("b").width("0%"),
                d.attr(
                  "data-tooltip",
                  "Adding Reference to \r\n wizdom.ai Library"
                ))
              : "pdfDownload" === a
              ? d.find("b").width(e + "%")
              : "bInLibrary" === a
              ? (d.find("b").width("100%"),
                setTimeout(function () {
                  d.removeClass("cw-atl");
                  d.removeClass("cw-ail");
                  d.removeClass("cw-qta");
                  d.addClass("cw-vil");
                  var a = "View in wizdom.ai Library",
                    b =
                      "This article is already \r\n in your Library. \r\n Click to view in wizdom.ai.";
                  void 0 !== publisher &&
                    void 0 !== publisher.pubModeBtnsTxt &&
                    (publisher.pubModeBtnsTxt.inMyLib &&
                      (a = publisher.pubModeBtnsTxt.inMyLib),
                    publisher.pubModeBtnsTxt.inMyLibHover &&
                      (b = publisher.pubModeBtnsTxt.inMyLibHover));
                  d.find("span").html(a);
                  d.attr("data-tooltip", b);
                }, 600))
              : "addPub" === a
              ? (d.removeClass("cw-atl"),
                d.removeClass("cw-qta"),
                d.addClass("cw-ail"),
                d.find("span").html("Adding Metadata"),
                d.find("b").width(e + "%"),
                d.attr(
                  "data-tooltip",
                  "Adding Reference to \r\n wizdom.ai Library"
                ))
              : "progress" === a
              ? (d.removeClass("cw-atl"),
                d.removeClass("cw-qta"),
                d.addClass("cw-ail"),
                d.find("span").html("Adding PDF"),
                50 >= e && d.find("b").width(parseInt(e + 50, 10) + "%"),
                d.attr(
                  "data-tooltip",
                  "Uploading PDF to \r\n wizdom.ai Library"
                ))
              : "wait" === a
              ? (d.removeClass("cw-atl"),
                d.removeClass("cw-qta"),
                d.addClass("cw-ail"),
                d.attr("data-tooltip", "Processing PDF"),
                d.find("em").html("Please wait"))
              : ("userLoggedOut" !== a && "failure" !== a) ||
                (d.removeClass("cw-vil"),
                d.removeClass("cw-ail"),
                d.removeClass("cw-qta"),
                d.addClass("cw-atl"),
                d.find("span").html(CWPDFReaderConfig.pubModeBtnsTxt.add),
                d.attr(
                  "data-tooltip",
                  "Save this article to your \r\n wizdom.ai library to read \r\n and reference anywhere"
                ));
          }
      }),
      (b.prototype.hideProgress = function (a, b) {
        try {
          if (this.pdfFrameRef) this.pdfFrameRef.CWPDFReader.hideProgress(a);
          else if (void 0 !== b) {
            var e = CwZ(".cw-btnContainer:eq(" + b + ") .cw-addToLib");
            e &&
              (void 0 === a && (a = 0),
              setTimeout(function () {
                CwZ(e).find(".cw-process-btn, .cw-progress, .cw-sync").hide();
                CwZ(e).find(".cw-progress i").width("0%");
              }, a));
          }
        } catch (f) {
          CWDataCenterClass.getInstance().postMsgToSentry(f);
        }
      }),
      (b.prototype.hasPubInLib = function (a, b) {
        null != this.pdfFrameRef && void 0 !== this.pdfFrameRef.CWPDFReader
          ? CWDataCenterClass.getInstance().pubSelected.index === b &&
            this.pdfFrameRef.CWPDFReader.hasPubInLib(a)
          : a &&
            this.showProgress("bInLibrary", "View in wizdom.ai Library", 0, b);
      }),
      (b.prototype.uploadFile = function (a, b, e, f) {
        try {
          null != e.euId && (CWFileUpload.euId = e.euId),
            null != e.fileId && (CWFileUpload.fileId = e.fileId),
            CWFileUpload.upload(a, b, f);
        } catch (d) {
          (a = { view: "mainExt", message: d.message, stack: d.stack }),
            CWDataCenterClass.getInstance().postMsgToSentry(a);
        }
      }),
      (b.prototype.getUploadParams = function (a) {
        this.CWComManager.tell("getUploadParams", a, "cwFrame");
      }),
      (b.prototype.uploadSync = function (a) {
        this.pdfFrameRef && (a.doSync = !0);
        this.CWComManager.tell("uploadSync", a, "cwFrame");
      }),
      (b.prototype.failureHandler = function (a) {
        this.CWComManager.tell("failureHandler", a, "cwFrame");
      }),
      (b.prototype.logConsole = function (a, b, e) {
        this.pdfFrameRef
          ? this.pdfFrameRef.CWPDFReader.logConsole(a, b, e)
          : e
          ? ((e = CwZ("#CWDailogOverlay")),
            e
              .find("#btnCancel")
              .off("click")
              .on("click", function () {
                CwZ("#CWDailogOverlay").hide();
              }),
            b && e.find("h1").text(b),
            a && e.find("p").text(a),
            "Sign up Successful" !== b && "Log in Successful" !== b
              ? CwZ("#CWDailogOverlay")
                  .find(".cw-dailog")
                  .removeClass("cw-success")
                  .addClass("cw-error")
              : CwZ("#CWDailogOverlay")
                  .find(".cw-dailog")
                  .addClass("cw-success")
                  .removeClass("cw-error"),
            CwZ("#CWDailogOverlay").is(":visible") || e.show())
          : CWUtils.log(a);
      }),
      (b.prototype.getData = function (a, b) {}),
      (b.prototype.getMetaData = function (a, b) {
        try {
          a.dataUrl
            ? (a.dataUrl,
              CWParser.getData({
                metadata: a,
                success: function (d, e) {
                  a.data = Base64.encode(d);
                  b && b(a, a.index);
                },
              }))
            : CWUtils.log("No meta object found" + a);
        } catch (e) {
          var f = { view: "mainExt", message: e.message, stack: e.stack };
          CWDataCenterClass.getInstance().postMsgToSentry(f);
        }
      }),
      (b.prototype.set_bLogin = function (a) {
        this.loginResponse = !0;
        this.checkLoginInProgress = !1;
        this.isLogin = a;
        this.CWComManager.tell(
          "setLogin",
          { value: a, view: "pdfFrame" },
          "pdfFrame"
        );
      }),
      (b.prototype.checkForPDFAccess = function (a) {
        CwZ.ajax({
          type: "HEAD",
          url: a,
          success: function (a, b, f) {
            0 <= f.getResponseHeader("Content-Type").indexOf("pdf")
              ? CWDataCenterClass.getInstance().findFile(!0)
              : CWDataCenterClass.getInstance().findFile(!1);
          },
          error: function (a) {
            switch (a.status) {
              case 401:
              case 403:
              case 405:
              case 0:
                CWDataCenterClass.getInstance().findFile(!1);
            }
          },
        });
      }),
      (b.prototype.processReferencesFromServer = function (a, b) {
        var e,
          f = [],
          d = {};
        CwZ(a).each(function (a) {
          e = this;
          d = {};
          d.id = a + 1;
          e.title && "" !== e.title ? (d.title = e.title) : (d.title = "");
          a = !1;
          (void 0 !== e.authors && e.authors !== [] && "" !== d.title) ||
            (e.text
              ? ((d.title = e.text), (a = !0))
              : e.comments &&
                0 < e.comments.length &&
                ((d.title = e.comments[0]), (a = !0)));
          a ||
            (e.authors &&
              ((d.author = ""),
              CwZ(e.authors).each(function () {
                d.author += this.family + " " + this.given.join(" ") + ", ";
              })),
            (d.journal = e.source),
            (d.doi = e.doi),
            (d.year = e.date || e.sdate));
          f.push(d);
        });
        this.currentPubReferences = f;
        this.processReference();
      }),
      (b.prototype.extractReferences = function (a) {
        CWParser.extractReference &&
          a.identifier &&
          "" !== a.identifier &&
          this.CWComManager.tell(
            "getRefsFromServer",
            {
              view: "cwFrame",
              url: CWPDFReaderConfig.cwURL + "/cites?doi=" + a.identifier,
              metadata: a,
            },
            "cwFrame"
          );
      }),
      (b.prototype.extractReferenceFromPage = function (a) {
        var b = this,
          e = this;
        CWParser.extractReference &&
          (CWParser.isListingPage() ||
          (CWParser.isSearchingPage && CWParser.isSearchingPage())
            ? ajaxRequest.get({
                url: a.refLink,
                type: "GET",
                success: function (b) {
                  b = CwZ(b);
                  CWParser.getReference(b, a.issn).then(function (a) {
                    e.currentPubReferences = a;
                    e.processReference();
                  });
                },
                error: function () {
                  e.processReference();
                },
              })
            : (CWParser.isPubPage() ||
                (CWParser.isPbPubPage && CWParser.isPbPubPage())) &&
              CWParser.getReference(CwZ("body"), a.issn).then(function (f) {
                b.currentPubReferences = f;
                b.currentPubReferences &&
                1 === b.currentPubReferences.length &&
                b.currentPubReferences[0].refsNotFound
                  ? ajaxRequest.get({
                      url: a.refLink,
                      type: "GET",
                      success: function (b) {
                        b = CwZ(b);
                        CWParser.getReference(b, a.issn).then(function (a) {
                          e.currentPubReferences = a;
                          e.processReference();
                        });
                      },
                    })
                  : e.processReference();
              }));
      }),
      (b.prototype.processReference = function () {
        var a = !1;
        (1 === this.currentPubReferences.length &&
          this.currentPubReferences[0].refsNotFound &&
          ((a = !0), this.currentPubReferences.pop()),
        0 !== this.currentPubReferences.length || a) ||
          ((a = {
            view: "mainExt",
            message: "References Not Extracted",
            stack:
              "Could not extract references from page: " +
              window.location.toString(),
          }),
          CWDataCenterClass.getInstance().postMsgToSentry(a));
        this.CWComManager.tell(
          "recordsOnPage",
          { records: this.currentPubReferences, view: "pdfFrame" },
          "pdfFrame"
        );
      }),
      (b.prototype.postBadReference = function () {
        var a = "",
          b;
        for (b in this.currentPubReferences) {
          var e = this.currentPubReferences[b];
          e.bad && (a += "" === a ? e.id : ", " + e.id);
        }
        if (((a = a.trim()), "" !== a))
          (a = {
            view: "mainExt",
            message: "Bad References found",
            stack:
              "Bad references found on page: " +
              window.location.toString() +
              "\r\n Reference number: " +
              a,
          }),
            CWDataCenterClass.getInstance().postMsgToSentry(a);
      }),
      (b.CWPDFReader = null),
      b
    );
  })(),
  CWDataAggregator = (function () {
    function b() {
      if (0 < c) {
        var b = a;
        a = {};
        c = 0;
        CWDataCenterClass.getInstance().postToTracker(
          "events",
          JSON.stringify(b)
        );
      }
    }
    var a = {},
      c = 0;
    setInterval(b, 5e3);
    return {
      increment: function (b) {
        a.hasOwnProperty(b) ? a[b]++ : ((a[b] = 1), c++);
      },
      keys: function () {
        var b = [],
          c;
        for (c in a) a.hasOwnProperty(c) && b.push(c);
        return b;
      },
      forceFlush: function () {
        b();
      },
      clearAll: function () {
        a = {};
        c = 0;
      },
    };
  })(),
  CWDataCenterClass = (function () {
    function b() {
      this.pub = [];
      this.pubSelected = null;
      this.sendOnce = !1;
      this.eventsHolder = [];
      this.exceptionHolder = [];
      this.CWPDFReader = CWPDFReader_Publisher.getInstance();
    }
    return (
      (b.getInstance = function () {
        return (
          null === this.CWDataCenter && (this.CWDataCenter = new b()),
          this.CWDataCenter
        );
      }),
      (b.prototype.postMsgToSentry = function (a) {
        this.CWPDFReader.isErrorlogsFrameLoaded
          ? CWUtils.sentry[a.message] ||
            ((CWUtils.sentry[a.message] = !0),
            CWUtils.log("SENTRY ERROR " + a.message),
            -1 !==
              CWPDFReaderConfig.cwURL.indexOf(CWPDFReaderConfig.sentryDomain) &&
              a.message &&
              0 < CwZ("#errorlogs").length &&
              ((a.stack += "\n\n ******* -- publisherVersion"),
              CWUtils.log("sending post msg in publisher version"),
              0 < CwZ("#errorlogs").length &&
                CwZ("#errorlogs")[0].contentWindow.postMessage(
                  { message: "sentryException", data: a.stack },
                  "*"
                )))
          : (0 === CwZ("#errorlogs").length &&
              this.CWPDFReader.initSentryFrame(),
            this.exceptionHolder.push(a));
      }),
      (b.prototype.signoutCall = function () {
        var a =
          '<iframe id="cw-logoutFrame" style="display: none; position: fixed; top: 0px; left:0px; z-index:99999999; border: 0px;" width="100%" height="100%" src="' +
          (CWPDFReaderConfig.cwURL +
            "/logout?returnUrl=" +
            encodeURIComponent("/user") +
            "&ts=" +
            new Date().getTime()) +
          '"></iframe>';
        CwZ("#cw-logoutFrame").length && CwZ("#cw-logoutFrame").remove();
        CwZ("body").append(a);
      }),
      (b.prototype.redirectToMyProfile = function () {
        this.CWPDFReader.CWComManager.tell(
          "redirectToMyProfile",
          { view: "cwFrame" },
          "cwFrame"
        );
      }),
      (b.prototype.postToTracker = function (a, b) {
        this.CWPDFReader.isColwizFrameLoaded
          ? this.CWPDFReader.CWComManager.tell(
              "postToTracker",
              { view: "cwFrame", action: a, metaData: b },
              "cwFrame"
            )
          : (this.CWPDFReader.initColwizFrame(), this.eventsHolder.push(a));
      }),
      (b.prototype.polling = function () {
        this.CWPDFReader.CWComManager.tell(
          "polling",
          { view: "cwFrame" },
          "cwFrame"
        );
      }),
      (b.prototype.setPubSelected = function (a) {
        a &&
          ((this.pubSelected = a),
          this.CWPDFReader.CWComManager.tell(
            "pubSelected",
            { metaData: a, view: "cwFrame" },
            "cwFrame"
          ));
      }),
      (b.prototype.loadConfig = function () {
        this.CWPDFReader.CWComManager.tell(
          "loadConfig",
          { view: "cwFrame" },
          "cwFrame"
        );
      }),
      (b.prototype.updateUserDOM = function () {
        this.CWPDFReader.CWComManager.tell(
          "updateUserDOM",
          { view: "cwFrame" },
          "cwFrame"
        );
      }),
      (b.prototype.getFileId = function () {
        this.CWPDFReader.CWComManager.tell(
          "getFileId",
          { view: "cwFrame" },
          "cwFrame"
        );
      }),
      (b.prototype.syncData = function () {
        var a = this,
          b = CWFileAPIClass.getInstance().defferredAction;
        b.obj ||
          b.callback ||
          ((b.obj = "sync"),
          (b.callback = function () {
            a.CWPDFReader.CWComManager.tell(
              "syncData",
              { view: "cwFrame" },
              "cwFrame"
            );
            CWFileAPIClass.getInstance().defferredAction.reset();
          }));
        this.CWPDFReader.CWComManager.tell(
          "checkLogin",
          { view: "cwFrame" },
          "cwFrame"
        );
      }),
      (b.prototype.saveComments = function (a) {
        this.CWPDFReader.CWComManager.tell(
          "saveComments",
          { cmtString: a, view: "cwFrame" },
          "cwFrame"
        );
      }),
      (b.prototype.createPublication = function (a) {
        void 0 !== a && 0 !== a.data.length
          ? this.CWPDFReader.CWComManager.tell(
              "createPublication",
              { obj: a, view: "cwFrame" },
              "cwFrame"
            )
          : this.CWPDFReader.getMetaData(this.pubSelected, this.processTasks);
      }),
      (b.prototype.addToLibrary = function (a, b) {
        var e = this;
        CWUtils.log(a);
        a ||
          ((a = this.pubSelected.index),
          CWUtils.log("correctedPublink"),
          CWUtils.log(a));
        var f = CWFileAPIClass.getInstance().defferredAction;
        f.obj ||
          f.callback ||
          ((f.obj = a),
          (f.callback = function () {
            e.CWPDFReader.CWComManager.tell(
              "addToLibrary",
              { index: a, view: "cwFrame" },
              "cwFrame"
            );
            CWFileAPIClass.getInstance().defferredAction.reset();
          }),
          e.CWPDFReader.CWComManager.tell(
            "checkLogin",
            { showSignIn: b, view: "cwFrame" },
            "cwFrame"
          ));
      }),
      (b.prototype.downloadPDF = function (a) {
        saveAs(a.blob, a.name + ".pdf");
      }),
      (b.prototype.shareFile = function () {}),
      (b.prototype.setPublisherOptions = function (a) {
        this.CWPDFReader.CWComManager.tell(
          "setPublisherOptions",
          { colwizOptions: a, view: "cwFrame" },
          "cwFrame"
        );
      }),
      (b.prototype.resetVariables = function () {
        this.CWPDFReader.CWComManager.tell(
          "resetVariables",
          { view: "cwFrame" },
          "cwFrame"
        );
      }),
      (b.prototype.setLoginShown = function (a) {
        this.CWPDFReader.CWComManager.tell(
          "isLoginShown",
          { isLoginShown: a, view: "cwFrame" },
          "cwFrame"
        );
      }),
      (b.prototype.setLoginState = function (a) {
        this.CWPDFReader.CWComManager.tell(
          "setLoginState",
          { isLogin: a, view: "cwFrame" },
          "cwFrame"
        );
      }),
      (b.prototype.setPageMeta = function (a) {
        this.CWPDFReader.CWComManager.tell(
          "setPageMeta",
          { hashMeta: a, view: "cwFrame" },
          "cwFrame"
        );
      }),
      (b.prototype.setMetaData = function (a, b) {
        this.CWPDFReader.CWComManager.tell(
          "setMetaData",
          { metaData: a, index: b, view: "cwFrame" },
          "cwFrame"
        );
      }),
      (b.prototype.processTasks = function () {
        this.CWPDFReader.CWComManager.tell(
          "processTasks",
          { view: "cwFrame" },
          "cwFrame"
        );
      }),
      (b.prototype.findFile = function (a) {
        this.CWPDFReader.CWComManager.tell(
          "findFile",
          { bAccess: a, view: "cwFrame" },
          "cwFrame"
        );
      }),
      (b.prototype.removeAllTasks = function () {
        this.CWPDFReader.CWComManager.tell(
          "removeAllTasks",
          { view: "cwFrame" },
          "cwFrame"
        );
      }),
      (b.prototype.checkPendingTasks = function () {
        this.CWPDFReader.CWComManager.tell(
          "checkPendingTasks",
          { view: "cwFrame" },
          "cwFrame"
        );
      }),
      (b.prototype.setImporter = function () {
        this.CWPDFReader.CWComManager.tell(
          "setImporter",
          { view: "cwFrame" },
          "cwFrame"
        );
      }),
      (b.CWDataCenter = null),
      b
    );
  })(),
  CWPDFReader = CWPDFReader_Publisher.getInstance(),
  ajaxRequest = {
    get: function (b) {
      var a = new XMLHttpRequest();
      a.open(b.type, b.url);
      a.onreadystatechange = function () {
        4 === a.readyState &&
          (200 === a.status
            ? b.success(a.responseText)
            : b.error(a.responseText));
      };
      a.send();
    },
  };
window.onbeforeunload = function () {
  var b = !1;
  if (
    (CwZ(".cw-btnContainer .cw-addToLib").each(function () {
      CwZ(this).hasClass("cw-ail") && (b = !0);
    }),
    b)
  )
    return "Are you sure you want to navigate away. All changes will be lost.";
};
var initFunction = function () {
  var b = CWPDFReader_Publisher.getInstance();
  try {
    if (!CWUtils.isIframe) {
      if ("" === CWPDFReaderConfig.parser)
        return void CWUtils.log("NO PARSER LOADED");
      b.CWComManager.init();
      b.initColwizFrame();
      CWUtils.log("LOADED PARSER : " + CWPDFReaderConfig.parser);
      window.addEventListener(
        "hashchange",
        function () {
          return b.onHashChange();
        },
        !1
      );
      var a = "";
      try {
        a = atob(window.location.hash.replace("#", ""));
      } catch (c) {}
      var e = -1 !== a.indexOf("@@@"),
        f = window.location.href;
      e && (f = f.split("#")[0]);
      (function h() {
        var b = window.location.href,
          c = "";
        try {
          c = atob(window.location.hash.replace("#", ""));
        } catch (d) {}
        if ((-1 !== c.indexOf("@@@") && (b = b.split("#")[0]), f !== b)) {
          b = window.location.hash;
          try {
            b = Base64.decode(b);
          } catch (n) {}
          (-1 !== b.indexOf("@@@") &&
            -1 !== window.location.hash.indexOf("nbb") &&
            -1 !== f.indexOf("nbb")) ||
            (CWDataCenterClass.getInstance().pubSelected = null);
          try {
            a = atob(window.location.hash.replace("#", ""));
          } catch (r) {}
          e = -1 !== a.indexOf("@@@");
          f = window.location.href;
          e && (f = f.split("#")[0]);
        }
        setTimeout(function () {
          h();
        }, 5e3);
      })();
      b.init();
    }
  } catch (d) {}
};
function initScript() {
  cPDF.initialized ||
    ("complete" === document.readyState || "interactive" === document.readyState
      ? (initFunction(), (cPDF.initialized = !0))
      : setTimeout(function () {
          initScript();
        }, 1e3));
}
function showCWRecResults(b) {
  var a = CWPDFReader_Publisher.getInstance();
  a.resultSet1 = "" === b.top ? [] : b.top.split(",").slice(0, 5);
  a.resultSet2 = "" === b.mah ? [] : b.mah.split(",").slice(0, 5);
  var c = a.records[0],
    e = '"' + c.authors.replace(/; /g, '","') + '"',
    f = c.identifier.split("/")[0];
  if (0 < a.resultSet1.length || 0 < a.resultSet2.length) {
    b = a.resultSet1.concat(a.resultSet2);
    var d = b.length + 3;
    b = b.map(function (a) {
      return "" !== a ? (d--, "id:" + a + "^" + d) : "";
    });
    b = encodeURIComponent(b.join(" OR "));
    c =
      "(title:(" +
      Base64.decode(c.title).replace(
        /([\!\*\+\&\|\(\)\[\]\{\}\^\~\?\:\"])/g,
        "\\$1"
      ) +
      ") " +
      (1 < e.length
        ? "OR authors:(" +
          e.replace(/([\!\*\+\&\|\(\)\[\]\{\}\^\~\?\:\"])/g, "\\$1") +
          ")) "
        : "") +
      (1 < f.length ? "AND doi:" + f + '* NOT doi:"' + c.identifier + '"' : "");
    c =
      CWPDFReaderConfig.cwURL +
      "/public/app?x=/related&q=" +
      encodeURIComponent(c) +
      " &sort=score%20desc,%20eucount%20desc&a=all&exclude=-1&ajax=1&_s=1&_lastlimit=8";
    b =
      CWPDFReaderConfig.cwURL +
      "/public/app?x=/related&q=(" +
      b +
      ")%20&sort=score%20desc,%20eucount%20desc&a=all&exclude=-1&ajax=1";
    a.CWComManager.tell(
      "getRelated",
      {
        view: "cwFrame",
        relLink1: b,
        relLink2: c,
        newRec: !0,
        resSet1: a.resultSet1,
        resSet2: a.resultSet2,
      },
      "cwFrame"
    );
  } else
    (c =
      "(title:(" +
      Base64.decode(c.title).replace(
        /([\!\*\+\&\|\(\)\[\]\{\}\^\~\?\:\"])/g,
        "\\$1"
      ) +
      ") " +
      (1 < e.length
        ? "OR authors:(" +
          e.replace(/([\!\*\+\&\|\(\)\[\]\{\}\^\~\?\:\"])/g, "\\$1") +
          ")) "
        : "") +
      (1 < f.length
        ? "AND doi:" + f + '* NOT doi:"' + c.identifier + '"'
        : "")),
      (b =
        CWPDFReaderConfig.cwURL +
        "/public/app?x=/related&q=" +
        encodeURIComponent(c) +
        " &sort=score%20desc,%20eucount%20desc&a=all&exclude=-1&ajax=1&_s=1&_lastlimit=4"),
      (c =
        CWPDFReaderConfig.cwURL +
        "/public/app?x=/related&q=" +
        encodeURIComponent(c) +
        " &sort=score%20desc,%20eucount%20desc&a=all&exclude=-1&ajax=1&_s=5&_lastlimit=4"),
      a.CWComManager.tell(
        "getRelated",
        { view: "cwFrame", relLink1: b, relLink2: c, newRec: !1 },
        "cwFrame"
      );
}
initScript();
document.addEventListener("DOMContentLoaded", function (b) {
  cPDF.initialized || (initFunction(), (cPDF.initialized = !0));
});
var CWFileUploadClass = (function () {
    function b() {
      this.fileData = this.fileObj = this.fileId = this.euId = null;
      this.index = this.blobLink = this.fileURL = "";
      this.syncStatus = 0;
    }
    return (
      (b.prototype.upload = function (a, b, e) {
        CWFileUpload.fileURL = a;
        CWFileUpload.index = b;
        CWFileUpload.initPlugin();
        e
          ? ((CWFileUpload.blobLink = e), CWFileUpload.getFile(e))
          : CWFileUpload.getFile(a);
      }),
      (b.prototype.getFile = function (a) {
        try {
          var b = new XMLHttpRequest();
          b.open("GET", a, !0);
          b.responseType = "blob";
          b.onload = function (a) {
            200 === this.status
              ? ((a = this.response),
                CwZ("#cw-fileUpload").fileupload("add", { files: [a] }),
                CWFileUpload.postFile())
              : 0 === this.status && CWFileUpload.getFile(CWFileUpload.fileURL);
          };
          b.send();
        } catch (e) {
          CWPDFReaderConfig.isCoreMode()
            ? PDFRaven.captureException(e.stack)
            : CwZ(document).trigger("cwExcToSentry", e);
        }
      }),
      (b.prototype.postFile = function () {
        var a = new Date().getTime(),
          b = CWFileUpload.fileObj;
        void 0 === b.size && (b.size = 0);
        void 0 === b.name && (b.name = a + ".pdf");
        a = {
          os: 1,
          enc: 1,
          title: b.name,
          size: b.size,
          mts: a,
          refId: CWFileUpload.euId,
          eId: CWFileUpload.fileId,
        };
        try {
          CWPDFReader.getUploadParams(a);
        } catch (e) {
          CWPDFReaderConfig.isCoreMode()
            ? PDFRaven.captureException(e.stack)
            : CwZ(document).trigger("cwExcToSentry", e);
        }
      }),
      (b.prototype.initPlugin = function () {
        try {
          if (
            0 === CwZ("#cw-fileUpload").length ||
            (CWPDFReaderConfig.readerMode === CWPDFReaderMode.Webimporter &&
              1 === CwZ("#cw-fileUpload").length)
          )
            CwZ("<a></a>").attr("id", "cw-fileUpload").appendTo("body"),
              CwZ("#cw-fileUpload")
                .fileupload({
                  limitMultiFileUploads: 1,
                  formData: this.postParam,
                  paramName: "file",
                  singleFileUploads: !1,
                  autoUpload: !0,
                  maxFileSize: 26214400,
                  minFileSize: 1,
                  add: CWFileUpload.getFileDetails,
                  progress: CWFileUpload.uploadProgress,
                  done: function (a, b) {
                    0 === CWFileUpload.syncStatus
                      ? CWPDFReader.failureHandler({
                          type: "uploadfile",
                          index: CWFileUpload.index,
                        })
                      : ((CWFileUpload.syncStatus = 2),
                        CWFileUpload.uploadSync(CWFileUpload.syncStatus),
                        (CWFileUpload.syncStatus = 0));
                  },
                })
                .off("fileuploadstart")
                .on("fileuploadstart", function (a) {
                  CWFileUpload.syncStatus = 1;
                  CWFileUpload.uploadSync(CWFileUpload.syncStatus);
                })
                .off("fileuploadfail")
                .on("fileuploadfail", function (a) {
                  CWFileUpload.syncStatus = 0;
                })
                .off("fileuploadstop")
                .on("fileuploadstop", function (a) {})
                .off("fileuploadalways")
                .on("fileuploadalways", function (a, b) {});
        } catch (a) {
          CWPDFReaderConfig.isCoreMode()
            ? PDFRaven.captureException(a.stack)
            : CwZ(document).trigger("cwExcToSentry", a);
        }
      }),
      (b.prototype.getFileDetails = function (a, b) {
        var e = b.files[0];
        e && ((CWFileUpload.fileObj = e), (CWFileUpload.fileData = b));
      }),
      (b.prototype.uploadSync = function (a) {
        CWPDFReader.uploadSync({
          eId: CWFileUpload.fileId,
          os: 2,
          sync: a,
          fileURL: CWFileUpload.fileURL,
          index: CWFileUpload.index,
        });
      }),
      (b.prototype.uploadProgress = function (a, b) {
        a.loaded;
        a.total;
      }),
      b
    );
  })(),
  CWFileUpload = new CWFileUploadClass();
