function nm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const o = t[n];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const r in o)
        if (r !== "default" && !(r in e)) {
          const i = Object.getOwnPropertyDescriptor(o, r);
          i &&
            Object.defineProperty(
              e,
              r,
              i.get ? i : { enumerable: !0, get: () => o[r] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && o(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = n(r);
    fetch(r.href, i);
  }
})();
function ao(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var If = { exports: {} },
  Bi = {},
  Ff = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var so = Symbol.for("react.element"),
  rm = Symbol.for("react.portal"),
  om = Symbol.for("react.fragment"),
  im = Symbol.for("react.strict_mode"),
  lm = Symbol.for("react.profiler"),
  um = Symbol.for("react.provider"),
  am = Symbol.for("react.context"),
  sm = Symbol.for("react.forward_ref"),
  cm = Symbol.for("react.suspense"),
  fm = Symbol.for("react.memo"),
  dm = Symbol.for("react.lazy"),
  bs = Symbol.iterator;
function pm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bs && e[bs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Rf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Af = Object.assign,
  Nf = {};
function or(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Nf),
    (this.updater = n || Rf);
}
or.prototype.isReactComponent = {};
or.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
or.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function zf() {}
zf.prototype = or.prototype;
function ga(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Nf),
    (this.updater = n || Rf);
}
var ya = (ga.prototype = new zf());
ya.constructor = ga;
Af(ya, or.prototype);
ya.isPureReactComponent = !0;
var Ds = Array.isArray,
  jf = Object.prototype.hasOwnProperty,
  wa = { current: null },
  Vf = { key: !0, ref: !0, __self: !0, __source: !0 };
function $f(e, t, n) {
  var o,
    r = {},
    i = null,
    l = null;
  if (t != null)
    for (o in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      jf.call(t, o) && !Vf.hasOwnProperty(o) && (r[o] = t[o]);
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  if (e && e.defaultProps)
    for (o in ((u = e.defaultProps), u)) r[o] === void 0 && (r[o] = u[o]);
  return {
    $$typeof: so,
    type: e,
    key: i,
    ref: l,
    props: r,
    _owner: wa.current,
  };
}
function hm(e, t) {
  return {
    $$typeof: so,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ca(e) {
  return typeof e == "object" && e !== null && e.$$typeof === so;
}
function mm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ts = /\/+/g;
function Cl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? mm("" + e.key)
    : t.toString(36);
}
function Ho(e, t, n, o, r) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case so:
          case rm:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (r = r(l)),
      (e = o === "" ? "." + Cl(l, 0) : o),
      Ds(r)
        ? ((n = ""),
          e != null && (n = e.replace(Ts, "$&/") + "/"),
          Ho(r, t, n, "", function (s) {
            return s;
          }))
        : r != null &&
          (Ca(r) &&
            (r = hm(
              r,
              n +
                (!r.key || (l && l.key === r.key)
                  ? ""
                  : ("" + r.key).replace(Ts, "$&/") + "/") +
                e,
            )),
          t.push(r)),
      1
    );
  if (((l = 0), (o = o === "" ? "." : o + ":"), Ds(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var a = o + Cl(i, u);
      l += Ho(i, t, n, a, r);
    }
  else if (((a = pm(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (a = o + Cl(i, u++)), (l += Ho(i, t, n, a, r));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return l;
}
function wo(e, t, n) {
  if (e == null) return e;
  var o = [],
    r = 0;
  return (
    Ho(e, o, "", "", function (i) {
      return t.call(n, i, r++);
    }),
    o
  );
}
function vm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ie = { current: null },
  Wo = { transition: null },
  gm = {
    ReactCurrentDispatcher: Ie,
    ReactCurrentBatchConfig: Wo,
    ReactCurrentOwner: wa,
  };
z.Children = {
  map: wo,
  forEach: function (e, t, n) {
    wo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      wo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ca(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
z.Component = or;
z.Fragment = om;
z.Profiler = lm;
z.PureComponent = ga;
z.StrictMode = im;
z.Suspense = cm;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gm;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var o = Af({}, e.props),
    r = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = wa.current)),
      t.key !== void 0 && (r = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      jf.call(t, a) &&
        !Vf.hasOwnProperty(a) &&
        (o[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    o.children = u;
  }
  return { $$typeof: so, type: e.type, key: r, ref: i, props: o, _owner: l };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: am,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: um, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = $f;
z.createFactory = function (e) {
  var t = $f.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: sm, render: e };
};
z.isValidElement = Ca;
z.lazy = function (e) {
  return { $$typeof: dm, _payload: { _status: -1, _result: e }, _init: vm };
};
z.memo = function (e, t) {
  return { $$typeof: fm, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Wo.transition;
  Wo.transition = {};
  try {
    e();
  } finally {
    Wo.transition = t;
  }
};
z.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
z.useCallback = function (e, t) {
  return Ie.current.useCallback(e, t);
};
z.useContext = function (e) {
  return Ie.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return Ie.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return Ie.current.useEffect(e, t);
};
z.useId = function () {
  return Ie.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return Ie.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return Ie.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return Ie.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return Ie.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return Ie.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return Ie.current.useRef(e);
};
z.useState = function (e) {
  return Ie.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return Ie.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return Ie.current.useTransition();
};
z.version = "18.2.0";
Ff.exports = z;
var S = Ff.exports;
const De = ao(S),
  iu = nm({ __proto__: null, default: De }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ym = S,
  wm = Symbol.for("react.element"),
  Cm = Symbol.for("react.fragment"),
  Sm = Object.prototype.hasOwnProperty,
  Em = ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  xm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bf(e, t, n) {
  var o,
    r = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (o in t) Sm.call(t, o) && !xm.hasOwnProperty(o) && (r[o] = t[o]);
  if (e && e.defaultProps)
    for (o in ((t = e.defaultProps), t)) r[o] === void 0 && (r[o] = t[o]);
  return {
    $$typeof: wm,
    type: e,
    key: i,
    ref: l,
    props: r,
    _owner: Em.current,
  };
}
Bi.Fragment = Cm;
Bi.jsx = Bf;
Bi.jsxs = Bf;
If.exports = Bi;
var M = If.exports,
  lu = {},
  Uf = { exports: {} },
  Ge = {},
  Hf = { exports: {} },
  Wf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, R) {
    var N = P.length;
    P.push(R);
    e: for (; 0 < N; ) {
      var H = (N - 1) >>> 1,
        j = P[H];
      if (0 < r(j, R)) (P[H] = R), (P[N] = j), (N = H);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function o(P) {
    if (P.length === 0) return null;
    var R = P[0],
      N = P.pop();
    if (N !== R) {
      P[0] = N;
      e: for (var H = 0, j = P.length, se = j >>> 1; H < se; ) {
        var Ee = 2 * (H + 1) - 1,
          Ye = P[Ee],
          de = Ee + 1,
          Le = P[de];
        if (0 > r(Ye, N))
          de < j && 0 > r(Le, Ye)
            ? ((P[H] = Le), (P[de] = N), (H = de))
            : ((P[H] = Ye), (P[Ee] = N), (H = Ee));
        else if (de < j && 0 > r(Le, N)) (P[H] = Le), (P[de] = N), (H = de);
        else break e;
      }
    }
    return R;
  }
  function r(P, R) {
    var N = P.sortIndex - R.sortIndex;
    return N !== 0 ? N : P.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      u = l.now();
    e.unstable_now = function () {
      return l.now() - u;
    };
  }
  var a = [],
    s = [],
    c = 1,
    f = null,
    m = 3,
    y = !1,
    v = !1,
    g = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(P) {
    for (var R = n(s); R !== null; ) {
      if (R.callback === null) o(s);
      else if (R.startTime <= P)
        o(s), (R.sortIndex = R.expirationTime), t(a, R);
      else break;
      R = n(s);
    }
  }
  function E(P) {
    if (((g = !1), h(P), !v))
      if (n(a) !== null) (v = !0), Pe(_);
      else {
        var R = n(s);
        R !== null && Re(E, R.startTime - P);
      }
  }
  function _(P, R) {
    (v = !1), g && ((g = !1), d(k), (k = -1)), (y = !0);
    var N = m;
    try {
      for (
        h(R), f = n(a);
        f !== null && (!(f.expirationTime > R) || (P && !$()));

      ) {
        var H = f.callback;
        if (typeof H == "function") {
          (f.callback = null), (m = f.priorityLevel);
          var j = H(f.expirationTime <= R);
          (R = e.unstable_now()),
            typeof j == "function" ? (f.callback = j) : f === n(a) && o(a),
            h(R);
        } else o(a);
        f = n(a);
      }
      if (f !== null) var se = !0;
      else {
        var Ee = n(s);
        Ee !== null && Re(E, Ee.startTime - R), (se = !1);
      }
      return se;
    } finally {
      (f = null), (m = N), (y = !1);
    }
  }
  var C = !1,
    x = null,
    k = -1,
    F = 5,
    L = -1;
  function $() {
    return !(e.unstable_now() - L < F);
  }
  function G() {
    if (x !== null) {
      var P = e.unstable_now();
      L = P;
      var R = !0;
      try {
        R = x(!0, P);
      } finally {
        R ? Se() : ((C = !1), (x = null));
      }
    } else C = !1;
  }
  var Se;
  if (typeof p == "function")
    Se = function () {
      p(G);
    };
  else if (typeof MessageChannel < "u") {
    var re = new MessageChannel(),
      ie = re.port2;
    (re.port1.onmessage = G),
      (Se = function () {
        ie.postMessage(null);
      });
  } else
    Se = function () {
      w(G, 0);
    };
  function Pe(P) {
    (x = P), C || ((C = !0), Se());
  }
  function Re(P, R) {
    k = w(function () {
      P(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), Pe(_));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (F = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (P) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = m;
      }
      var N = m;
      m = R;
      try {
        return P();
      } finally {
        m = N;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, R) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var N = m;
      m = P;
      try {
        return R();
      } finally {
        m = N;
      }
    }),
    (e.unstable_scheduleCallback = function (P, R, N) {
      var H = e.unstable_now();
      switch (
        (typeof N == "object" && N !== null
          ? ((N = N.delay), (N = typeof N == "number" && 0 < N ? H + N : H))
          : (N = H),
        P)
      ) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return (
        (j = N + j),
        (P = {
          id: c++,
          callback: R,
          priorityLevel: P,
          startTime: N,
          expirationTime: j,
          sortIndex: -1,
        }),
        N > H
          ? ((P.sortIndex = N),
            t(s, P),
            n(a) === null &&
              P === n(s) &&
              (g ? (d(k), (k = -1)) : (g = !0), Re(E, N - H)))
          : ((P.sortIndex = j), t(a, P), v || y || ((v = !0), Pe(_))),
        P
      );
    }),
    (e.unstable_shouldYield = $),
    (e.unstable_wrapCallback = function (P) {
      var R = m;
      return function () {
        var N = m;
        m = R;
        try {
          return P.apply(this, arguments);
        } finally {
          m = N;
        }
      };
    });
})(Wf);
Hf.exports = Wf;
var _m = Hf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kf = S,
  Ke = _m;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Gf = new Set(),
  $r = {};
function En(e, t) {
  Yn(e, t), Yn(e + "Capture", t);
}
function Yn(e, t) {
  for ($r[e] = t, e = 0; e < t.length; e++) Gf.add(t[e]);
}
var Pt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  uu = Object.prototype.hasOwnProperty,
  km =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Is = {},
  Fs = {};
function Mm(e) {
  return uu.call(Fs, e)
    ? !0
    : uu.call(Is, e)
    ? !1
    : km.test(e)
    ? (Fs[e] = !0)
    : ((Is[e] = !0), !1);
}
function Om(e, t, n, o) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return o
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Pm(e, t, n, o) {
  if (t === null || typeof t > "u" || Om(e, t, n, o)) return !0;
  if (o) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, o, r, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = o),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ce[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ce[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ce[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ce[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ce[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ce[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ce[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Sa = /[\-:]([a-z])/g;
function Ea(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sa, Ea);
    Ce[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sa, Ea);
    Ce[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Sa, Ea);
  Ce[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ce[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ce[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xa(e, t, n, o) {
  var r = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (r !== null
    ? r.type !== 0
    : o ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Pm(t, n, r, o) && (n = null),
    o || r === null
      ? Mm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : r.mustUseProperty
      ? (e[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
      : ((t = r.attributeName),
        (o = r.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((r = r.type),
            (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n),
            o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))));
}
var Tt = Kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Co = Symbol.for("react.element"),
  Ln = Symbol.for("react.portal"),
  bn = Symbol.for("react.fragment"),
  _a = Symbol.for("react.strict_mode"),
  au = Symbol.for("react.profiler"),
  Zf = Symbol.for("react.provider"),
  Qf = Symbol.for("react.context"),
  ka = Symbol.for("react.forward_ref"),
  su = Symbol.for("react.suspense"),
  cu = Symbol.for("react.suspense_list"),
  Ma = Symbol.for("react.memo"),
  Rt = Symbol.for("react.lazy"),
  Yf = Symbol.for("react.offscreen"),
  Rs = Symbol.iterator;
function fr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Rs && e[Rs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ee = Object.assign,
  Sl;
function kr(e) {
  if (Sl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Sl = (t && t[1]) || "";
    }
  return (
    `
` +
    Sl +
    e
  );
}
var El = !1;
function xl(e, t) {
  if (!e || El) return "";
  El = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var o = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          o = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        o = s;
      }
      e();
    }
  } catch (s) {
    if (s && o && typeof s.stack == "string") {
      for (
        var r = s.stack.split(`
`),
          i = o.stack.split(`
`),
          l = r.length - 1,
          u = i.length - 1;
        1 <= l && 0 <= u && r[l] !== i[u];

      )
        u--;
      for (; 1 <= l && 0 <= u; l--, u--)
        if (r[l] !== i[u]) {
          if (l !== 1 || u !== 1)
            do
              if ((l--, u--, 0 > u || r[l] !== i[u])) {
                var a =
                  `
` + r[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= u);
          break;
        }
    }
  } finally {
    (El = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? kr(e) : "";
}
function Lm(e) {
  switch (e.tag) {
    case 5:
      return kr(e.type);
    case 16:
      return kr("Lazy");
    case 13:
      return kr("Suspense");
    case 19:
      return kr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = xl(e.type, !1)), e;
    case 11:
      return (e = xl(e.type.render, !1)), e;
    case 1:
      return (e = xl(e.type, !0)), e;
    default:
      return "";
  }
}
function fu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case bn:
      return "Fragment";
    case Ln:
      return "Portal";
    case au:
      return "Profiler";
    case _a:
      return "StrictMode";
    case su:
      return "Suspense";
    case cu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Qf:
        return (e.displayName || "Context") + ".Consumer";
      case Zf:
        return (e._context.displayName || "Context") + ".Provider";
      case ka:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ma:
        return (
          (t = e.displayName || null), t !== null ? t : fu(e.type) || "Memo"
        );
      case Rt:
        (t = e._payload), (e = e._init);
        try {
          return fu(e(t));
        } catch {}
    }
  return null;
}
function bm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return fu(t);
    case 8:
      return t === _a ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function en(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Xf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Dm(e) {
  var t = Xf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    o = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var r = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (l) {
          (o = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return o;
        },
        setValue: function (l) {
          o = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function So(e) {
  e._valueTracker || (e._valueTracker = Dm(e));
}
function qf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    o = "";
  return (
    e && (o = Xf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = o),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ui(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function du(e, t) {
  var n = t.checked;
  return ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function As(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    o = t.checked != null ? t.checked : t.defaultChecked;
  (n = en(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: o,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Jf(e, t) {
  (t = t.checked), t != null && xa(e, "checked", t, !1);
}
function pu(e, t) {
  Jf(e, t);
  var n = en(t.value),
    o = t.type;
  if (n != null)
    o === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (o === "submit" || o === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? hu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && hu(e, t.type, en(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ns(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var o = t.type;
    if (
      !(
        (o !== "submit" && o !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function hu(e, t, n) {
  (t !== "number" || ui(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mr = Array.isArray;
function Bn(e, t, n, o) {
  if (((e = e.options), t)) {
    t = {};
    for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
    for (n = 0; n < e.length; n++)
      (r = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== r && (e[n].selected = r),
        r && o && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + en(n), t = null, r = 0; r < e.length; r++) {
      if (e[r].value === n) {
        (e[r].selected = !0), o && (e[r].defaultSelected = !0);
        return;
      }
      t !== null || e[r].disabled || (t = e[r]);
    }
    t !== null && (t.selected = !0);
  }
}
function mu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return ee({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function zs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (Mr(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: en(n) };
}
function ed(e, t) {
  var n = en(t.value),
    o = en(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    o != null && (e.defaultValue = "" + o);
}
function js(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function td(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function vu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? td(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Eo,
  nd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, o, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, o, r);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Eo = Eo || document.createElement("div"),
          Eo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Eo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Br(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Dr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Tm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dr).forEach(function (e) {
  Tm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dr[t] = Dr[e]);
  });
});
function rd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Dr.hasOwnProperty(e) && Dr[e])
    ? ("" + t).trim()
    : t + "px";
}
function od(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var o = n.indexOf("--") === 0,
        r = rd(n, t[n], o);
      n === "float" && (n = "cssFloat"), o ? e.setProperty(n, r) : (e[n] = r);
    }
}
var Im = ee(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function gu(e, t) {
  if (t) {
    if (Im[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function yu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var wu = null;
function Oa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Cu = null,
  Un = null,
  Hn = null;
function Vs(e) {
  if ((e = po(e))) {
    if (typeof Cu != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = Gi(t)), Cu(e.stateNode, e.type, t));
  }
}
function id(e) {
  Un ? (Hn ? Hn.push(e) : (Hn = [e])) : (Un = e);
}
function ld() {
  if (Un) {
    var e = Un,
      t = Hn;
    if (((Hn = Un = null), Vs(e), t)) for (e = 0; e < t.length; e++) Vs(t[e]);
  }
}
function ud(e, t) {
  return e(t);
}
function ad() {}
var _l = !1;
function sd(e, t, n) {
  if (_l) return e(t, n);
  _l = !0;
  try {
    return ud(e, t, n);
  } finally {
    (_l = !1), (Un !== null || Hn !== null) && (ad(), ld());
  }
}
function Ur(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var o = Gi(n);
  if (o === null) return null;
  n = o[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (o = !o.disabled) ||
        ((e = e.type),
        (o = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !o);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var Su = !1;
if (Pt)
  try {
    var dr = {};
    Object.defineProperty(dr, "passive", {
      get: function () {
        Su = !0;
      },
    }),
      window.addEventListener("test", dr, dr),
      window.removeEventListener("test", dr, dr);
  } catch {
    Su = !1;
  }
function Fm(e, t, n, o, r, i, l, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var Tr = !1,
  ai = null,
  si = !1,
  Eu = null,
  Rm = {
    onError: function (e) {
      (Tr = !0), (ai = e);
    },
  };
function Am(e, t, n, o, r, i, l, u, a) {
  (Tr = !1), (ai = null), Fm.apply(Rm, arguments);
}
function Nm(e, t, n, o, r, i, l, u, a) {
  if ((Am.apply(this, arguments), Tr)) {
    if (Tr) {
      var s = ai;
      (Tr = !1), (ai = null);
    } else throw Error(O(198));
    si || ((si = !0), (Eu = s));
  }
}
function xn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function cd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function $s(e) {
  if (xn(e) !== e) throw Error(O(188));
}
function zm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = xn(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, o = t; ; ) {
    var r = n.return;
    if (r === null) break;
    var i = r.alternate;
    if (i === null) {
      if (((o = r.return), o !== null)) {
        n = o;
        continue;
      }
      break;
    }
    if (r.child === i.child) {
      for (i = r.child; i; ) {
        if (i === n) return $s(r), e;
        if (i === o) return $s(r), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== o.return) (n = r), (o = i);
    else {
      for (var l = !1, u = r.child; u; ) {
        if (u === n) {
          (l = !0), (n = r), (o = i);
          break;
        }
        if (u === o) {
          (l = !0), (o = r), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = i.child; u; ) {
          if (u === n) {
            (l = !0), (n = i), (o = r);
            break;
          }
          if (u === o) {
            (l = !0), (o = i), (n = r);
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(O(189));
      }
    }
    if (n.alternate !== o) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function fd(e) {
  return (e = zm(e)), e !== null ? dd(e) : null;
}
function dd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = dd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var pd = Ke.unstable_scheduleCallback,
  Bs = Ke.unstable_cancelCallback,
  jm = Ke.unstable_shouldYield,
  Vm = Ke.unstable_requestPaint,
  oe = Ke.unstable_now,
  $m = Ke.unstable_getCurrentPriorityLevel,
  Pa = Ke.unstable_ImmediatePriority,
  hd = Ke.unstable_UserBlockingPriority,
  ci = Ke.unstable_NormalPriority,
  Bm = Ke.unstable_LowPriority,
  md = Ke.unstable_IdlePriority,
  Ui = null,
  yt = null;
function Um(e) {
  if (yt && typeof yt.onCommitFiberRoot == "function")
    try {
      yt.onCommitFiberRoot(Ui, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var st = Math.clz32 ? Math.clz32 : Km,
  Hm = Math.log,
  Wm = Math.LN2;
function Km(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Hm(e) / Wm) | 0)) | 0;
}
var xo = 64,
  _o = 4194304;
function Or(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function fi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var o = 0,
    r = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var u = l & ~r;
    u !== 0 ? (o = Or(u)) : ((i &= l), i !== 0 && (o = Or(i)));
  } else (l = n & ~r), l !== 0 ? (o = Or(l)) : i !== 0 && (o = Or(i));
  if (o === 0) return 0;
  if (
    t !== 0 &&
    t !== o &&
    !(t & r) &&
    ((r = o & -o), (i = t & -t), r >= i || (r === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((o & 4 && (o |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= o; 0 < t; )
      (n = 31 - st(t)), (r = 1 << n), (o |= e[n]), (t &= ~r);
  return o;
}
function Gm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Zm(e, t) {
  for (
    var n = e.suspendedLanes,
      o = e.pingedLanes,
      r = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - st(i),
      u = 1 << l,
      a = r[l];
    a === -1
      ? (!(u & n) || u & o) && (r[l] = Gm(u, t))
      : a <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function xu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function vd() {
  var e = xo;
  return (xo <<= 1), !(xo & 4194240) && (xo = 64), e;
}
function kl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function co(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - st(t)),
    (e[t] = n);
}
function Qm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var o = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var r = 31 - st(n),
      i = 1 << r;
    (t[r] = 0), (o[r] = -1), (e[r] = -1), (n &= ~i);
  }
}
function La(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var o = 31 - st(n),
      r = 1 << o;
    (r & t) | (e[o] & t) && (e[o] |= t), (n &= ~r);
  }
}
var W = 0;
function gd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var yd,
  ba,
  wd,
  Cd,
  Sd,
  _u = !1,
  ko = [],
  Wt = null,
  Kt = null,
  Gt = null,
  Hr = new Map(),
  Wr = new Map(),
  zt = [],
  Ym =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Us(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wt = null;
      break;
    case "dragenter":
    case "dragleave":
      Kt = null;
      break;
    case "mouseover":
    case "mouseout":
      Gt = null;
      break;
    case "pointerover":
    case "pointerout":
      Hr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wr.delete(t.pointerId);
  }
}
function pr(e, t, n, o, r, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: o,
        nativeEvent: i,
        targetContainers: [r],
      }),
      t !== null && ((t = po(t)), t !== null && ba(t)),
      e)
    : ((e.eventSystemFlags |= o),
      (t = e.targetContainers),
      r !== null && t.indexOf(r) === -1 && t.push(r),
      e);
}
function Xm(e, t, n, o, r) {
  switch (t) {
    case "focusin":
      return (Wt = pr(Wt, e, t, n, o, r)), !0;
    case "dragenter":
      return (Kt = pr(Kt, e, t, n, o, r)), !0;
    case "mouseover":
      return (Gt = pr(Gt, e, t, n, o, r)), !0;
    case "pointerover":
      var i = r.pointerId;
      return Hr.set(i, pr(Hr.get(i) || null, e, t, n, o, r)), !0;
    case "gotpointercapture":
      return (
        (i = r.pointerId), Wr.set(i, pr(Wr.get(i) || null, e, t, n, o, r)), !0
      );
  }
  return !1;
}
function Ed(e) {
  var t = cn(e.target);
  if (t !== null) {
    var n = xn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = cd(n)), t !== null)) {
          (e.blockedOn = t),
            Sd(e.priority, function () {
              wd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ko(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ku(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var o = new n.constructor(n.type, n);
      (wu = o), n.target.dispatchEvent(o), (wu = null);
    } else return (t = po(n)), t !== null && ba(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Hs(e, t, n) {
  Ko(e) && n.delete(t);
}
function qm() {
  (_u = !1),
    Wt !== null && Ko(Wt) && (Wt = null),
    Kt !== null && Ko(Kt) && (Kt = null),
    Gt !== null && Ko(Gt) && (Gt = null),
    Hr.forEach(Hs),
    Wr.forEach(Hs);
}
function hr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    _u ||
      ((_u = !0),
      Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, qm)));
}
function Kr(e) {
  function t(r) {
    return hr(r, e);
  }
  if (0 < ko.length) {
    hr(ko[0], e);
    for (var n = 1; n < ko.length; n++) {
      var o = ko[n];
      o.blockedOn === e && (o.blockedOn = null);
    }
  }
  for (
    Wt !== null && hr(Wt, e),
      Kt !== null && hr(Kt, e),
      Gt !== null && hr(Gt, e),
      Hr.forEach(t),
      Wr.forEach(t),
      n = 0;
    n < zt.length;
    n++
  )
    (o = zt[n]), o.blockedOn === e && (o.blockedOn = null);
  for (; 0 < zt.length && ((n = zt[0]), n.blockedOn === null); )
    Ed(n), n.blockedOn === null && zt.shift();
}
var Wn = Tt.ReactCurrentBatchConfig,
  di = !0;
function Jm(e, t, n, o) {
  var r = W,
    i = Wn.transition;
  Wn.transition = null;
  try {
    (W = 1), Da(e, t, n, o);
  } finally {
    (W = r), (Wn.transition = i);
  }
}
function ev(e, t, n, o) {
  var r = W,
    i = Wn.transition;
  Wn.transition = null;
  try {
    (W = 4), Da(e, t, n, o);
  } finally {
    (W = r), (Wn.transition = i);
  }
}
function Da(e, t, n, o) {
  if (di) {
    var r = ku(e, t, n, o);
    if (r === null) Rl(e, t, o, pi, n), Us(e, o);
    else if (Xm(r, e, t, n, o)) o.stopPropagation();
    else if ((Us(e, o), t & 4 && -1 < Ym.indexOf(e))) {
      for (; r !== null; ) {
        var i = po(r);
        if (
          (i !== null && yd(i),
          (i = ku(e, t, n, o)),
          i === null && Rl(e, t, o, pi, n),
          i === r)
        )
          break;
        r = i;
      }
      r !== null && o.stopPropagation();
    } else Rl(e, t, o, null, n);
  }
}
var pi = null;
function ku(e, t, n, o) {
  if (((pi = null), (e = Oa(o)), (e = cn(e)), e !== null))
    if (((t = xn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = cd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (pi = e), null;
}
function xd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch ($m()) {
        case Pa:
          return 1;
        case hd:
          return 4;
        case ci:
        case Bm:
          return 16;
        case md:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $t = null,
  Ta = null,
  Go = null;
function _d() {
  if (Go) return Go;
  var e,
    t = Ta,
    n = t.length,
    o,
    r = "value" in $t ? $t.value : $t.textContent,
    i = r.length;
  for (e = 0; e < n && t[e] === r[e]; e++);
  var l = n - e;
  for (o = 1; o <= l && t[n - o] === r[i - o]; o++);
  return (Go = r.slice(e, 1 < o ? 1 - o : void 0));
}
function Zo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Mo() {
  return !0;
}
function Ws() {
  return !1;
}
function Ze(e) {
  function t(n, o, r, i, l) {
    (this._reactName = n),
      (this._targetInst = r),
      (this.type = o),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Mo
        : Ws),
      (this.isPropagationStopped = Ws),
      this
    );
  }
  return (
    ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Mo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Mo));
      },
      persist: function () {},
      isPersistent: Mo,
    }),
    t
  );
}
var ir = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ia = Ze(ir),
  fo = ee({}, ir, { view: 0, detail: 0 }),
  tv = Ze(fo),
  Ml,
  Ol,
  mr,
  Hi = ee({}, fo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Fa,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== mr &&
            (mr && e.type === "mousemove"
              ? ((Ml = e.screenX - mr.screenX), (Ol = e.screenY - mr.screenY))
              : (Ol = Ml = 0),
            (mr = e)),
          Ml);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ol;
    },
  }),
  Ks = Ze(Hi),
  nv = ee({}, Hi, { dataTransfer: 0 }),
  rv = Ze(nv),
  ov = ee({}, fo, { relatedTarget: 0 }),
  Pl = Ze(ov),
  iv = ee({}, ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lv = Ze(iv),
  uv = ee({}, ir, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  av = Ze(uv),
  sv = ee({}, ir, { data: 0 }),
  Gs = Ze(sv),
  cv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  fv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  dv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function pv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dv[e]) ? !!t[e] : !1;
}
function Fa() {
  return pv;
}
var hv = ee({}, fo, {
    key: function (e) {
      if (e.key) {
        var t = cv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Zo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? fv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fa,
    charCode: function (e) {
      return e.type === "keypress" ? Zo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Zo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  mv = Ze(hv),
  vv = ee({}, Hi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Zs = Ze(vv),
  gv = ee({}, fo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fa,
  }),
  yv = Ze(gv),
  wv = ee({}, ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cv = Ze(wv),
  Sv = ee({}, Hi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ev = Ze(Sv),
  xv = [9, 13, 27, 32],
  Ra = Pt && "CompositionEvent" in window,
  Ir = null;
Pt && "documentMode" in document && (Ir = document.documentMode);
var _v = Pt && "TextEvent" in window && !Ir,
  kd = Pt && (!Ra || (Ir && 8 < Ir && 11 >= Ir)),
  Qs = String.fromCharCode(32),
  Ys = !1;
function Md(e, t) {
  switch (e) {
    case "keyup":
      return xv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Od(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Dn = !1;
function kv(e, t) {
  switch (e) {
    case "compositionend":
      return Od(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ys = !0), Qs);
    case "textInput":
      return (e = t.data), e === Qs && Ys ? null : e;
    default:
      return null;
  }
}
function Mv(e, t) {
  if (Dn)
    return e === "compositionend" || (!Ra && Md(e, t))
      ? ((e = _d()), (Go = Ta = $t = null), (Dn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return kd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ov = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Xs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ov[e.type] : t === "textarea";
}
function Pd(e, t, n, o) {
  id(o),
    (t = hi(t, "onChange")),
    0 < t.length &&
      ((n = new Ia("onChange", "change", null, n, o)),
      e.push({ event: n, listeners: t }));
}
var Fr = null,
  Gr = null;
function Pv(e) {
  jd(e, 0);
}
function Wi(e) {
  var t = Fn(e);
  if (qf(t)) return e;
}
function Lv(e, t) {
  if (e === "change") return t;
}
var Ld = !1;
if (Pt) {
  var Ll;
  if (Pt) {
    var bl = "oninput" in document;
    if (!bl) {
      var qs = document.createElement("div");
      qs.setAttribute("oninput", "return;"),
        (bl = typeof qs.oninput == "function");
    }
    Ll = bl;
  } else Ll = !1;
  Ld = Ll && (!document.documentMode || 9 < document.documentMode);
}
function Js() {
  Fr && (Fr.detachEvent("onpropertychange", bd), (Gr = Fr = null));
}
function bd(e) {
  if (e.propertyName === "value" && Wi(Gr)) {
    var t = [];
    Pd(t, Gr, e, Oa(e)), sd(Pv, t);
  }
}
function bv(e, t, n) {
  e === "focusin"
    ? (Js(), (Fr = t), (Gr = n), Fr.attachEvent("onpropertychange", bd))
    : e === "focusout" && Js();
}
function Dv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Wi(Gr);
}
function Tv(e, t) {
  if (e === "click") return Wi(t);
}
function Iv(e, t) {
  if (e === "input" || e === "change") return Wi(t);
}
function Fv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dt = typeof Object.is == "function" ? Object.is : Fv;
function Zr(e, t) {
  if (dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    o = Object.keys(t);
  if (n.length !== o.length) return !1;
  for (o = 0; o < n.length; o++) {
    var r = n[o];
    if (!uu.call(t, r) || !dt(e[r], t[r])) return !1;
  }
  return !0;
}
function ec(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function tc(e, t) {
  var n = ec(e);
  e = 0;
  for (var o; n; ) {
    if (n.nodeType === 3) {
      if (((o = e + n.textContent.length), e <= t && o >= t))
        return { node: n, offset: t - e };
      e = o;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ec(n);
  }
}
function Dd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Dd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Td() {
  for (var e = window, t = ui(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ui(e.document);
  }
  return t;
}
function Aa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Rv(e) {
  var t = Td(),
    n = e.focusedElem,
    o = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Dd(n.ownerDocument.documentElement, n)
  ) {
    if (o !== null && Aa(n)) {
      if (
        ((t = o.start),
        (e = o.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var r = n.textContent.length,
          i = Math.min(o.start, r);
        (o = o.end === void 0 ? i : Math.min(o.end, r)),
          !e.extend && i > o && ((r = o), (o = i), (i = r)),
          (r = tc(n, i));
        var l = tc(n, o);
        r &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== r.node ||
            e.anchorOffset !== r.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(r.node, r.offset),
          e.removeAllRanges(),
          i > o
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Av = Pt && "documentMode" in document && 11 >= document.documentMode,
  Tn = null,
  Mu = null,
  Rr = null,
  Ou = !1;
function nc(e, t, n) {
  var o = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ou ||
    Tn == null ||
    Tn !== ui(o) ||
    ((o = Tn),
    "selectionStart" in o && Aa(o)
      ? (o = { start: o.selectionStart, end: o.selectionEnd })
      : ((o = (
          (o.ownerDocument && o.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (o = {
          anchorNode: o.anchorNode,
          anchorOffset: o.anchorOffset,
          focusNode: o.focusNode,
          focusOffset: o.focusOffset,
        })),
    (Rr && Zr(Rr, o)) ||
      ((Rr = o),
      (o = hi(Mu, "onSelect")),
      0 < o.length &&
        ((t = new Ia("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: o }),
        (t.target = Tn))));
}
function Oo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var In = {
    animationend: Oo("Animation", "AnimationEnd"),
    animationiteration: Oo("Animation", "AnimationIteration"),
    animationstart: Oo("Animation", "AnimationStart"),
    transitionend: Oo("Transition", "TransitionEnd"),
  },
  Dl = {},
  Id = {};
Pt &&
  ((Id = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete In.animationend.animation,
    delete In.animationiteration.animation,
    delete In.animationstart.animation),
  "TransitionEvent" in window || delete In.transitionend.transition);
function Ki(e) {
  if (Dl[e]) return Dl[e];
  if (!In[e]) return e;
  var t = In[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Id) return (Dl[e] = t[n]);
  return e;
}
var Fd = Ki("animationend"),
  Rd = Ki("animationiteration"),
  Ad = Ki("animationstart"),
  Nd = Ki("transitionend"),
  zd = new Map(),
  rc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function nn(e, t) {
  zd.set(e, t), En(t, [e]);
}
for (var Tl = 0; Tl < rc.length; Tl++) {
  var Il = rc[Tl],
    Nv = Il.toLowerCase(),
    zv = Il[0].toUpperCase() + Il.slice(1);
  nn(Nv, "on" + zv);
}
nn(Fd, "onAnimationEnd");
nn(Rd, "onAnimationIteration");
nn(Ad, "onAnimationStart");
nn("dblclick", "onDoubleClick");
nn("focusin", "onFocus");
nn("focusout", "onBlur");
nn(Nd, "onTransitionEnd");
Yn("onMouseEnter", ["mouseout", "mouseover"]);
Yn("onMouseLeave", ["mouseout", "mouseover"]);
Yn("onPointerEnter", ["pointerout", "pointerover"]);
Yn("onPointerLeave", ["pointerout", "pointerover"]);
En(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
En(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
En(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
En(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
En(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Pr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  jv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));
function oc(e, t, n) {
  var o = e.type || "unknown-event";
  (e.currentTarget = n), Nm(o, t, void 0, e), (e.currentTarget = null);
}
function jd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var o = e[n],
      r = o.event;
    o = o.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = o.length - 1; 0 <= l; l--) {
          var u = o[l],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== i && r.isPropagationStopped())) break e;
          oc(r, u, s), (i = a);
        }
      else
        for (l = 0; l < o.length; l++) {
          if (
            ((u = o[l]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== i && r.isPropagationStopped())
          )
            break e;
          oc(r, u, s), (i = a);
        }
    }
  }
  if (si) throw ((e = Eu), (si = !1), (Eu = null), e);
}
function Q(e, t) {
  var n = t[Tu];
  n === void 0 && (n = t[Tu] = new Set());
  var o = e + "__bubble";
  n.has(o) || (Vd(t, e, 2, !1), n.add(o));
}
function Fl(e, t, n) {
  var o = 0;
  t && (o |= 4), Vd(n, e, o, t);
}
var Po = "_reactListening" + Math.random().toString(36).slice(2);
function Qr(e) {
  if (!e[Po]) {
    (e[Po] = !0),
      Gf.forEach(function (n) {
        n !== "selectionchange" && (jv.has(n) || Fl(n, !1, e), Fl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Po] || ((t[Po] = !0), Fl("selectionchange", !1, t));
  }
}
function Vd(e, t, n, o) {
  switch (xd(t)) {
    case 1:
      var r = Jm;
      break;
    case 4:
      r = ev;
      break;
    default:
      r = Da;
  }
  (n = r.bind(null, t, n, e)),
    (r = void 0),
    !Su ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (r = !0),
    o
      ? r !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: r })
        : e.addEventListener(t, n, !0)
      : r !== void 0
      ? e.addEventListener(t, n, { passive: r })
      : e.addEventListener(t, n, !1);
}
function Rl(e, t, n, o, r) {
  var i = o;
  if (!(t & 1) && !(t & 2) && o !== null)
    e: for (;;) {
      if (o === null) return;
      var l = o.tag;
      if (l === 3 || l === 4) {
        var u = o.stateNode.containerInfo;
        if (u === r || (u.nodeType === 8 && u.parentNode === r)) break;
        if (l === 4)
          for (l = o.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === r || (a.nodeType === 8 && a.parentNode === r))
            )
              return;
            l = l.return;
          }
        for (; u !== null; ) {
          if (((l = cn(u)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            o = i = l;
            continue e;
          }
          u = u.parentNode;
        }
      }
      o = o.return;
    }
  sd(function () {
    var s = i,
      c = Oa(n),
      f = [];
    e: {
      var m = zd.get(e);
      if (m !== void 0) {
        var y = Ia,
          v = e;
        switch (e) {
          case "keypress":
            if (Zo(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = mv;
            break;
          case "focusin":
            (v = "focus"), (y = Pl);
            break;
          case "focusout":
            (v = "blur"), (y = Pl);
            break;
          case "beforeblur":
          case "afterblur":
            y = Pl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Ks;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = rv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = yv;
            break;
          case Fd:
          case Rd:
          case Ad:
            y = lv;
            break;
          case Nd:
            y = Cv;
            break;
          case "scroll":
            y = tv;
            break;
          case "wheel":
            y = Ev;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = av;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Zs;
        }
        var g = (t & 4) !== 0,
          w = !g && e === "scroll",
          d = g ? (m !== null ? m + "Capture" : null) : m;
        g = [];
        for (var p = s, h; p !== null; ) {
          h = p;
          var E = h.stateNode;
          if (
            (h.tag === 5 &&
              E !== null &&
              ((h = E),
              d !== null && ((E = Ur(p, d)), E != null && g.push(Yr(p, E, h)))),
            w)
          )
            break;
          p = p.return;
        }
        0 < g.length &&
          ((m = new y(m, v, null, n, c)), f.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          m &&
            n !== wu &&
            (v = n.relatedTarget || n.fromElement) &&
            (cn(v) || v[Lt]))
        )
          break e;
        if (
          (y || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = s),
              (v = v ? cn(v) : null),
              v !== null &&
                ((w = xn(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = s)),
          y !== v)
        ) {
          if (
            ((g = Ks),
            (E = "onMouseLeave"),
            (d = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Zs),
              (E = "onPointerLeave"),
              (d = "onPointerEnter"),
              (p = "pointer")),
            (w = y == null ? m : Fn(y)),
            (h = v == null ? m : Fn(v)),
            (m = new g(E, p + "leave", y, n, c)),
            (m.target = w),
            (m.relatedTarget = h),
            (E = null),
            cn(c) === s &&
              ((g = new g(d, p + "enter", v, n, c)),
              (g.target = h),
              (g.relatedTarget = w),
              (E = g)),
            (w = E),
            y && v)
          )
            t: {
              for (g = y, d = v, p = 0, h = g; h; h = kn(h)) p++;
              for (h = 0, E = d; E; E = kn(E)) h++;
              for (; 0 < p - h; ) (g = kn(g)), p--;
              for (; 0 < h - p; ) (d = kn(d)), h--;
              for (; p--; ) {
                if (g === d || (d !== null && g === d.alternate)) break t;
                (g = kn(g)), (d = kn(d));
              }
              g = null;
            }
          else g = null;
          y !== null && ic(f, m, y, g, !1),
            v !== null && w !== null && ic(f, w, v, g, !0);
        }
      }
      e: {
        if (
          ((m = s ? Fn(s) : window),
          (y = m.nodeName && m.nodeName.toLowerCase()),
          y === "select" || (y === "input" && m.type === "file"))
        )
          var _ = Lv;
        else if (Xs(m))
          if (Ld) _ = Iv;
          else {
            _ = Dv;
            var C = bv;
          }
        else
          (y = m.nodeName) &&
            y.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (_ = Tv);
        if (_ && (_ = _(e, s))) {
          Pd(f, _, n, c);
          break e;
        }
        C && C(e, m, s),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            hu(m, "number", m.value);
      }
      switch (((C = s ? Fn(s) : window), e)) {
        case "focusin":
          (Xs(C) || C.contentEditable === "true") &&
            ((Tn = C), (Mu = s), (Rr = null));
          break;
        case "focusout":
          Rr = Mu = Tn = null;
          break;
        case "mousedown":
          Ou = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ou = !1), nc(f, n, c);
          break;
        case "selectionchange":
          if (Av) break;
        case "keydown":
        case "keyup":
          nc(f, n, c);
      }
      var x;
      if (Ra)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Dn
          ? Md(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (kd &&
          n.locale !== "ko" &&
          (Dn || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Dn && (x = _d())
            : (($t = c),
              (Ta = "value" in $t ? $t.value : $t.textContent),
              (Dn = !0))),
        (C = hi(s, k)),
        0 < C.length &&
          ((k = new Gs(k, e, null, n, c)),
          f.push({ event: k, listeners: C }),
          x ? (k.data = x) : ((x = Od(n)), x !== null && (k.data = x)))),
        (x = _v ? kv(e, n) : Mv(e, n)) &&
          ((s = hi(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new Gs("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: s }),
            (c.data = x)));
    }
    jd(f, t);
  });
}
function Yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function hi(e, t) {
  for (var n = t + "Capture", o = []; e !== null; ) {
    var r = e,
      i = r.stateNode;
    r.tag === 5 &&
      i !== null &&
      ((r = i),
      (i = Ur(e, n)),
      i != null && o.unshift(Yr(e, i, r)),
      (i = Ur(e, t)),
      i != null && o.push(Yr(e, i, r))),
      (e = e.return);
  }
  return o;
}
function kn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ic(e, t, n, o, r) {
  for (var i = t._reactName, l = []; n !== null && n !== o; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === o) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      r
        ? ((a = Ur(n, i)), a != null && l.unshift(Yr(n, a, u)))
        : r || ((a = Ur(n, i)), a != null && l.push(Yr(n, a, u)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Vv = /\r\n?/g,
  $v = /\u0000|\uFFFD/g;
function lc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Vv,
      `
`,
    )
    .replace($v, "");
}
function Lo(e, t, n) {
  if (((t = lc(t)), lc(e) !== t && n)) throw Error(O(425));
}
function mi() {}
var Pu = null,
  Lu = null;
function bu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Du = typeof setTimeout == "function" ? setTimeout : void 0,
  Bv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  uc = typeof Promise == "function" ? Promise : void 0,
  Uv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof uc < "u"
      ? function (e) {
          return uc.resolve(null).then(e).catch(Hv);
        }
      : Du;
function Hv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Al(e, t) {
  var n = t,
    o = 0;
  do {
    var r = n.nextSibling;
    if ((e.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (o === 0) {
          e.removeChild(r), Kr(t);
          return;
        }
        o--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || o++;
    n = r;
  } while (n);
  Kr(t);
}
function Zt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ac(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var lr = Math.random().toString(36).slice(2),
  gt = "__reactFiber$" + lr,
  Xr = "__reactProps$" + lr,
  Lt = "__reactContainer$" + lr,
  Tu = "__reactEvents$" + lr,
  Wv = "__reactListeners$" + lr,
  Kv = "__reactHandles$" + lr;
function cn(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Lt] || n[gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ac(e); e !== null; ) {
          if ((n = e[gt])) return n;
          e = ac(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function po(e) {
  return (
    (e = e[gt] || e[Lt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function Gi(e) {
  return e[Xr] || null;
}
var Iu = [],
  Rn = -1;
function rn(e) {
  return { current: e };
}
function Y(e) {
  0 > Rn || ((e.current = Iu[Rn]), (Iu[Rn] = null), Rn--);
}
function Z(e, t) {
  Rn++, (Iu[Rn] = e.current), (e.current = t);
}
var tn = {},
  Oe = rn(tn),
  ze = rn(!1),
  vn = tn;
function Xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return tn;
  var o = e.stateNode;
  if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
    return o.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    i;
  for (i in n) r[i] = t[i];
  return (
    o &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function je(e) {
  return (e = e.childContextTypes), e != null;
}
function vi() {
  Y(ze), Y(Oe);
}
function sc(e, t, n) {
  if (Oe.current !== tn) throw Error(O(168));
  Z(Oe, t), Z(ze, n);
}
function $d(e, t, n) {
  var o = e.stateNode;
  if (((t = t.childContextTypes), typeof o.getChildContext != "function"))
    return n;
  o = o.getChildContext();
  for (var r in o) if (!(r in t)) throw Error(O(108, bm(e) || "Unknown", r));
  return ee({}, n, o);
}
function gi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || tn),
    (vn = Oe.current),
    Z(Oe, e),
    Z(ze, ze.current),
    !0
  );
}
function cc(e, t, n) {
  var o = e.stateNode;
  if (!o) throw Error(O(169));
  n
    ? ((e = $d(e, t, vn)),
      (o.__reactInternalMemoizedMergedChildContext = e),
      Y(ze),
      Y(Oe),
      Z(Oe, e))
    : Y(ze),
    Z(ze, n);
}
var xt = null,
  Zi = !1,
  Nl = !1;
function Bd(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function Gv(e) {
  (Zi = !0), Bd(e);
}
function on() {
  if (!Nl && xt !== null) {
    Nl = !0;
    var e = 0,
      t = W;
    try {
      var n = xt;
      for (W = 1; e < n.length; e++) {
        var o = n[e];
        do o = o(!0);
        while (o !== null);
      }
      (xt = null), (Zi = !1);
    } catch (r) {
      throw (xt !== null && (xt = xt.slice(e + 1)), pd(Pa, on), r);
    } finally {
      (W = t), (Nl = !1);
    }
  }
  return null;
}
var An = [],
  Nn = 0,
  yi = null,
  wi = 0,
  Je = [],
  et = 0,
  gn = null,
  _t = 1,
  kt = "";
function un(e, t) {
  (An[Nn++] = wi), (An[Nn++] = yi), (yi = e), (wi = t);
}
function Ud(e, t, n) {
  (Je[et++] = _t), (Je[et++] = kt), (Je[et++] = gn), (gn = e);
  var o = _t;
  e = kt;
  var r = 32 - st(o) - 1;
  (o &= ~(1 << r)), (n += 1);
  var i = 32 - st(t) + r;
  if (30 < i) {
    var l = r - (r % 5);
    (i = (o & ((1 << l) - 1)).toString(32)),
      (o >>= l),
      (r -= l),
      (_t = (1 << (32 - st(t) + r)) | (n << r) | o),
      (kt = i + e);
  } else (_t = (1 << i) | (n << r) | o), (kt = e);
}
function Na(e) {
  e.return !== null && (un(e, 1), Ud(e, 1, 0));
}
function za(e) {
  for (; e === yi; )
    (yi = An[--Nn]), (An[Nn] = null), (wi = An[--Nn]), (An[Nn] = null);
  for (; e === gn; )
    (gn = Je[--et]),
      (Je[et] = null),
      (kt = Je[--et]),
      (Je[et] = null),
      (_t = Je[--et]),
      (Je[et] = null);
}
var He = null,
  Ue = null,
  X = !1,
  at = null;
function Hd(e, t) {
  var n = tt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function fc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (He = e), (Ue = Zt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (He = e), (Ue = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gn !== null ? { id: _t, overflow: kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = tt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (He = e),
            (Ue = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Fu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ru(e) {
  if (X) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!fc(e, t)) {
        if (Fu(e)) throw Error(O(418));
        t = Zt(n.nextSibling);
        var o = He;
        t && fc(e, t)
          ? Hd(o, n)
          : ((e.flags = (e.flags & -4097) | 2), (X = !1), (He = e));
      }
    } else {
      if (Fu(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (X = !1), (He = e);
    }
  }
}
function dc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  He = e;
}
function bo(e) {
  if (e !== He) return !1;
  if (!X) return dc(e), (X = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !bu(e.type, e.memoizedProps))),
    t && (t = Ue))
  ) {
    if (Fu(e)) throw (Wd(), Error(O(418)));
    for (; t; ) Hd(e, t), (t = Zt(t.nextSibling));
  }
  if ((dc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ue = Zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else Ue = He ? Zt(e.stateNode.nextSibling) : null;
  return !0;
}
function Wd() {
  for (var e = Ue; e; ) e = Zt(e.nextSibling);
}
function qn() {
  (Ue = He = null), (X = !1);
}
function ja(e) {
  at === null ? (at = [e]) : at.push(e);
}
var Zv = Tt.ReactCurrentBatchConfig;
function lt(e, t) {
  if (e && e.defaultProps) {
    (t = ee({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ci = rn(null),
  Si = null,
  zn = null,
  Va = null;
function $a() {
  Va = zn = Si = null;
}
function Ba(e) {
  var t = Ci.current;
  Y(Ci), (e._currentValue = t);
}
function Au(e, t, n) {
  for (; e !== null; ) {
    var o = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
        : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Kn(e, t) {
  (Si = e),
    (Va = zn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ne = !0), (e.firstContext = null));
}
function rt(e) {
  var t = e._currentValue;
  if (Va !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), zn === null)) {
      if (Si === null) throw Error(O(308));
      (zn = e), (Si.dependencies = { lanes: 0, firstContext: e });
    } else zn = zn.next = e;
  return t;
}
var fn = null;
function Ua(e) {
  fn === null ? (fn = [e]) : fn.push(e);
}
function Kd(e, t, n, o) {
  var r = t.interleaved;
  return (
    r === null ? ((n.next = n), Ua(t)) : ((n.next = r.next), (r.next = n)),
    (t.interleaved = n),
    bt(e, o)
  );
}
function bt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function Ha(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Gd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Mt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Qt(e, t, n) {
  var o = e.updateQueue;
  if (o === null) return null;
  if (((o = o.shared), V & 2)) {
    var r = o.pending;
    return (
      r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (o.pending = t),
      bt(e, n)
    );
  }
  return (
    (r = o.interleaved),
    r === null ? ((t.next = t), Ua(o)) : ((t.next = r.next), (r.next = t)),
    (o.interleaved = t),
    bt(e, n)
  );
}
function Qo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var o = t.lanes;
    (o &= e.pendingLanes), (n |= o), (t.lanes = n), La(e, n);
  }
}
function pc(e, t) {
  var n = e.updateQueue,
    o = e.alternate;
  if (o !== null && ((o = o.updateQueue), n === o)) {
    var r = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (r = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (r = i = t) : (i = i.next = t);
    } else r = i = t;
    (n = {
      baseState: o.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: i,
      shared: o.shared,
      effects: o.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ei(e, t, n, o) {
  var r = e.updateQueue;
  At = !1;
  var i = r.firstBaseUpdate,
    l = r.lastBaseUpdate,
    u = r.shared.pending;
  if (u !== null) {
    r.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), l === null ? (i = s) : (l.next = s), (l = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (u = c.lastBaseUpdate),
      u !== l &&
        (u === null ? (c.firstBaseUpdate = s) : (u.next = s),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var f = r.baseState;
    (l = 0), (c = s = a = null), (u = i);
    do {
      var m = u.lane,
        y = u.eventTime;
      if ((o & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var v = e,
            g = u;
          switch (((m = t), (y = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == "function")) {
                f = v.call(y, f, m);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (m = typeof v == "function" ? v.call(y, f, m) : v),
                m == null)
              )
                break e;
              f = ee({}, f, m);
              break e;
            case 2:
              At = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = r.effects),
          m === null ? (r.effects = [u]) : m.push(u));
      } else
        (y = {
          eventTime: y,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          c === null ? ((s = c = y), (a = f)) : (c = c.next = y),
          (l |= m);
      if (((u = u.next), u === null)) {
        if (((u = r.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (r.lastBaseUpdate = m),
          (r.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = f),
      (r.baseState = a),
      (r.firstBaseUpdate = s),
      (r.lastBaseUpdate = c),
      (t = r.shared.interleaved),
      t !== null)
    ) {
      r = t;
      do (l |= r.lane), (r = r.next);
      while (r !== t);
    } else i === null && (r.shared.lanes = 0);
    (wn |= l), (e.lanes = l), (e.memoizedState = f);
  }
}
function hc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var o = e[t],
        r = o.callback;
      if (r !== null) {
        if (((o.callback = null), (o = n), typeof r != "function"))
          throw Error(O(191, r));
        r.call(o);
      }
    }
}
var Zd = new Kf.Component().refs;
function Nu(e, t, n, o) {
  (t = e.memoizedState),
    (n = n(o, t)),
    (n = n == null ? t : ee({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Qi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? xn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var o = Te(),
      r = Xt(e),
      i = Mt(o, r);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Qt(e, i, r)),
      t !== null && (ct(t, e, r, o), Qo(t, e, r));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var o = Te(),
      r = Xt(e),
      i = Mt(o, r);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Qt(e, i, r)),
      t !== null && (ct(t, e, r, o), Qo(t, e, r));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Te(),
      o = Xt(e),
      r = Mt(n, o);
    (r.tag = 2),
      t != null && (r.callback = t),
      (t = Qt(e, r, o)),
      t !== null && (ct(t, e, o, n), Qo(t, e, o));
  },
};
function mc(e, t, n, o, r, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(o, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Zr(n, o) || !Zr(r, i)
      : !0
  );
}
function Qd(e, t, n) {
  var o = !1,
    r = tn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = rt(i))
      : ((r = je(t) ? vn : Oe.current),
        (o = t.contextTypes),
        (i = (o = o != null) ? Xn(e, r) : tn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Qi),
    (e.stateNode = t),
    (t._reactInternals = e),
    o &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = r),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function vc(e, t, n, o) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, o),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, o),
    t.state !== e && Qi.enqueueReplaceState(t, t.state, null);
}
function zu(e, t, n, o) {
  var r = e.stateNode;
  (r.props = n), (r.state = e.memoizedState), (r.refs = Zd), Ha(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (r.context = rt(i))
    : ((i = je(t) ? vn : Oe.current), (r.context = Xn(e, i))),
    (r.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Nu(e, t, i, n), (r.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((t = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      t !== r.state && Qi.enqueueReplaceState(r, r.state, null),
      Ei(e, n, r, o),
      (r.state = e.memoizedState)),
    typeof r.componentDidMount == "function" && (e.flags |= 4194308);
}
function vr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var o = n.stateNode;
      }
      if (!o) throw Error(O(147, e));
      var r = o,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var u = r.refs;
            u === Zd && (u = r.refs = {}),
              l === null ? delete u[i] : (u[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function Do(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function gc(e) {
  var t = e._init;
  return t(e._payload);
}
function Yd(e) {
  function t(d, p) {
    if (e) {
      var h = d.deletions;
      h === null ? ((d.deletions = [p]), (d.flags |= 16)) : h.push(p);
    }
  }
  function n(d, p) {
    if (!e) return null;
    for (; p !== null; ) t(d, p), (p = p.sibling);
    return null;
  }
  function o(d, p) {
    for (d = new Map(); p !== null; )
      p.key !== null ? d.set(p.key, p) : d.set(p.index, p), (p = p.sibling);
    return d;
  }
  function r(d, p) {
    return (d = qt(d, p)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, p, h) {
    return (
      (d.index = h),
      e
        ? ((h = d.alternate),
          h !== null
            ? ((h = h.index), h < p ? ((d.flags |= 2), p) : h)
            : ((d.flags |= 2), p))
        : ((d.flags |= 1048576), p)
    );
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, p, h, E) {
    return p === null || p.tag !== 6
      ? ((p = Hl(h, d.mode, E)), (p.return = d), p)
      : ((p = r(p, h)), (p.return = d), p);
  }
  function a(d, p, h, E) {
    var _ = h.type;
    return _ === bn
      ? c(d, p, h.props.children, E, h.key)
      : p !== null &&
        (p.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === Rt &&
            gc(_) === p.type))
      ? ((E = r(p, h.props)), (E.ref = vr(d, p, h)), (E.return = d), E)
      : ((E = ti(h.type, h.key, h.props, null, d.mode, E)),
        (E.ref = vr(d, p, h)),
        (E.return = d),
        E);
  }
  function s(d, p, h, E) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== h.containerInfo ||
      p.stateNode.implementation !== h.implementation
      ? ((p = Wl(h, d.mode, E)), (p.return = d), p)
      : ((p = r(p, h.children || [])), (p.return = d), p);
  }
  function c(d, p, h, E, _) {
    return p === null || p.tag !== 7
      ? ((p = mn(h, d.mode, E, _)), (p.return = d), p)
      : ((p = r(p, h)), (p.return = d), p);
  }
  function f(d, p, h) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Hl("" + p, d.mode, h)), (p.return = d), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Co:
          return (
            (h = ti(p.type, p.key, p.props, null, d.mode, h)),
            (h.ref = vr(d, null, p)),
            (h.return = d),
            h
          );
        case Ln:
          return (p = Wl(p, d.mode, h)), (p.return = d), p;
        case Rt:
          var E = p._init;
          return f(d, E(p._payload), h);
      }
      if (Mr(p) || fr(p))
        return (p = mn(p, d.mode, h, null)), (p.return = d), p;
      Do(d, p);
    }
    return null;
  }
  function m(d, p, h, E) {
    var _ = p !== null ? p.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return _ !== null ? null : u(d, p, "" + h, E);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Co:
          return h.key === _ ? a(d, p, h, E) : null;
        case Ln:
          return h.key === _ ? s(d, p, h, E) : null;
        case Rt:
          return (_ = h._init), m(d, p, _(h._payload), E);
      }
      if (Mr(h) || fr(h)) return _ !== null ? null : c(d, p, h, E, null);
      Do(d, h);
    }
    return null;
  }
  function y(d, p, h, E, _) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (d = d.get(h) || null), u(p, d, "" + E, _);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Co:
          return (d = d.get(E.key === null ? h : E.key) || null), a(p, d, E, _);
        case Ln:
          return (d = d.get(E.key === null ? h : E.key) || null), s(p, d, E, _);
        case Rt:
          var C = E._init;
          return y(d, p, h, C(E._payload), _);
      }
      if (Mr(E) || fr(E)) return (d = d.get(h) || null), c(p, d, E, _, null);
      Do(p, E);
    }
    return null;
  }
  function v(d, p, h, E) {
    for (
      var _ = null, C = null, x = p, k = (p = 0), F = null;
      x !== null && k < h.length;
      k++
    ) {
      x.index > k ? ((F = x), (x = null)) : (F = x.sibling);
      var L = m(d, x, h[k], E);
      if (L === null) {
        x === null && (x = F);
        break;
      }
      e && x && L.alternate === null && t(d, x),
        (p = i(L, p, k)),
        C === null ? (_ = L) : (C.sibling = L),
        (C = L),
        (x = F);
    }
    if (k === h.length) return n(d, x), X && un(d, k), _;
    if (x === null) {
      for (; k < h.length; k++)
        (x = f(d, h[k], E)),
          x !== null &&
            ((p = i(x, p, k)), C === null ? (_ = x) : (C.sibling = x), (C = x));
      return X && un(d, k), _;
    }
    for (x = o(d, x); k < h.length; k++)
      (F = y(x, d, k, h[k], E)),
        F !== null &&
          (e && F.alternate !== null && x.delete(F.key === null ? k : F.key),
          (p = i(F, p, k)),
          C === null ? (_ = F) : (C.sibling = F),
          (C = F));
    return (
      e &&
        x.forEach(function ($) {
          return t(d, $);
        }),
      X && un(d, k),
      _
    );
  }
  function g(d, p, h, E) {
    var _ = fr(h);
    if (typeof _ != "function") throw Error(O(150));
    if (((h = _.call(h)), h == null)) throw Error(O(151));
    for (
      var C = (_ = null), x = p, k = (p = 0), F = null, L = h.next();
      x !== null && !L.done;
      k++, L = h.next()
    ) {
      x.index > k ? ((F = x), (x = null)) : (F = x.sibling);
      var $ = m(d, x, L.value, E);
      if ($ === null) {
        x === null && (x = F);
        break;
      }
      e && x && $.alternate === null && t(d, x),
        (p = i($, p, k)),
        C === null ? (_ = $) : (C.sibling = $),
        (C = $),
        (x = F);
    }
    if (L.done) return n(d, x), X && un(d, k), _;
    if (x === null) {
      for (; !L.done; k++, L = h.next())
        (L = f(d, L.value, E)),
          L !== null &&
            ((p = i(L, p, k)), C === null ? (_ = L) : (C.sibling = L), (C = L));
      return X && un(d, k), _;
    }
    for (x = o(d, x); !L.done; k++, L = h.next())
      (L = y(x, d, k, L.value, E)),
        L !== null &&
          (e && L.alternate !== null && x.delete(L.key === null ? k : L.key),
          (p = i(L, p, k)),
          C === null ? (_ = L) : (C.sibling = L),
          (C = L));
    return (
      e &&
        x.forEach(function (G) {
          return t(d, G);
        }),
      X && un(d, k),
      _
    );
  }
  function w(d, p, h, E) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === bn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Co:
          e: {
            for (var _ = h.key, C = p; C !== null; ) {
              if (C.key === _) {
                if (((_ = h.type), _ === bn)) {
                  if (C.tag === 7) {
                    n(d, C.sibling),
                      (p = r(C, h.props.children)),
                      (p.return = d),
                      (d = p);
                    break e;
                  }
                } else if (
                  C.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === Rt &&
                    gc(_) === C.type)
                ) {
                  n(d, C.sibling),
                    (p = r(C, h.props)),
                    (p.ref = vr(d, C, h)),
                    (p.return = d),
                    (d = p);
                  break e;
                }
                n(d, C);
                break;
              } else t(d, C);
              C = C.sibling;
            }
            h.type === bn
              ? ((p = mn(h.props.children, d.mode, E, h.key)),
                (p.return = d),
                (d = p))
              : ((E = ti(h.type, h.key, h.props, null, d.mode, E)),
                (E.ref = vr(d, p, h)),
                (E.return = d),
                (d = E));
          }
          return l(d);
        case Ln:
          e: {
            for (C = h.key; p !== null; ) {
              if (p.key === C)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === h.containerInfo &&
                  p.stateNode.implementation === h.implementation
                ) {
                  n(d, p.sibling),
                    (p = r(p, h.children || [])),
                    (p.return = d),
                    (d = p);
                  break e;
                } else {
                  n(d, p);
                  break;
                }
              else t(d, p);
              p = p.sibling;
            }
            (p = Wl(h, d.mode, E)), (p.return = d), (d = p);
          }
          return l(d);
        case Rt:
          return (C = h._init), w(d, p, C(h._payload), E);
      }
      if (Mr(h)) return v(d, p, h, E);
      if (fr(h)) return g(d, p, h, E);
      Do(d, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        p !== null && p.tag === 6
          ? (n(d, p.sibling), (p = r(p, h)), (p.return = d), (d = p))
          : (n(d, p), (p = Hl(h, d.mode, E)), (p.return = d), (d = p)),
        l(d))
      : n(d, p);
  }
  return w;
}
var Jn = Yd(!0),
  Xd = Yd(!1),
  ho = {},
  wt = rn(ho),
  qr = rn(ho),
  Jr = rn(ho);
function dn(e) {
  if (e === ho) throw Error(O(174));
  return e;
}
function Wa(e, t) {
  switch ((Z(Jr, t), Z(qr, e), Z(wt, ho), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = vu(t, e));
  }
  Y(wt), Z(wt, t);
}
function er() {
  Y(wt), Y(qr), Y(Jr);
}
function qd(e) {
  dn(Jr.current);
  var t = dn(wt.current),
    n = vu(t, e.type);
  t !== n && (Z(qr, e), Z(wt, n));
}
function Ka(e) {
  qr.current === e && (Y(wt), Y(qr));
}
var q = rn(0);
function xi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var zl = [];
function Ga() {
  for (var e = 0; e < zl.length; e++)
    zl[e]._workInProgressVersionPrimary = null;
  zl.length = 0;
}
var Yo = Tt.ReactCurrentDispatcher,
  jl = Tt.ReactCurrentBatchConfig,
  yn = 0,
  J = null,
  ce = null,
  he = null,
  _i = !1,
  Ar = !1,
  eo = 0,
  Qv = 0;
function xe() {
  throw Error(O(321));
}
function Za(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!dt(e[n], t[n])) return !1;
  return !0;
}
function Qa(e, t, n, o, r, i) {
  if (
    ((yn = i),
    (J = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Yo.current = e === null || e.memoizedState === null ? Jv : eg),
    (e = n(o, r)),
    Ar)
  ) {
    i = 0;
    do {
      if (((Ar = !1), (eo = 0), 25 <= i)) throw Error(O(301));
      (i += 1),
        (he = ce = null),
        (t.updateQueue = null),
        (Yo.current = tg),
        (e = n(o, r));
    } while (Ar);
  }
  if (
    ((Yo.current = ki),
    (t = ce !== null && ce.next !== null),
    (yn = 0),
    (he = ce = J = null),
    (_i = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function Ya() {
  var e = eo !== 0;
  return (eo = 0), e;
}
function ht() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return he === null ? (J.memoizedState = he = e) : (he = he.next = e), he;
}
function ot() {
  if (ce === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ce.next;
  var t = he === null ? J.memoizedState : he.next;
  if (t !== null) (he = t), (ce = e);
  else {
    if (e === null) throw Error(O(310));
    (ce = e),
      (e = {
        memoizedState: ce.memoizedState,
        baseState: ce.baseState,
        baseQueue: ce.baseQueue,
        queue: ce.queue,
        next: null,
      }),
      he === null ? (J.memoizedState = he = e) : (he = he.next = e);
  }
  return he;
}
function to(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Vl(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var o = ce,
    r = o.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (r !== null) {
      var l = r.next;
      (r.next = i.next), (i.next = l);
    }
    (o.baseQueue = r = i), (n.pending = null);
  }
  if (r !== null) {
    (i = r.next), (o = o.baseState);
    var u = (l = null),
      a = null,
      s = i;
    do {
      var c = s.lane;
      if ((yn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (o = s.hasEagerState ? s.eagerState : e(o, s.action));
      else {
        var f = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = f), (l = o)) : (a = a.next = f),
          (J.lanes |= c),
          (wn |= c);
      }
      s = s.next;
    } while (s !== null && s !== i);
    a === null ? (l = o) : (a.next = u),
      dt(o, t.memoizedState) || (Ne = !0),
      (t.memoizedState = o),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = o);
  }
  if (((e = n.interleaved), e !== null)) {
    r = e;
    do (i = r.lane), (J.lanes |= i), (wn |= i), (r = r.next);
    while (r !== e);
  } else r === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function $l(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var o = n.dispatch,
    r = n.pending,
    i = t.memoizedState;
  if (r !== null) {
    n.pending = null;
    var l = (r = r.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== r);
    dt(i, t.memoizedState) || (Ne = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, o];
}
function Jd() {}
function ep(e, t) {
  var n = J,
    o = ot(),
    r = t(),
    i = !dt(o.memoizedState, r);
  if (
    (i && ((o.memoizedState = r), (Ne = !0)),
    (o = o.queue),
    Xa(rp.bind(null, n, o, e), [e]),
    o.getSnapshot !== t || i || (he !== null && he.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      no(9, np.bind(null, n, o, r, t), void 0, null),
      me === null)
    )
      throw Error(O(349));
    yn & 30 || tp(n, t, r);
  }
  return r;
}
function tp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function np(e, t, n, o) {
  (t.value = n), (t.getSnapshot = o), op(t) && ip(e);
}
function rp(e, t, n) {
  return n(function () {
    op(t) && ip(e);
  });
}
function op(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dt(e, n);
  } catch {
    return !0;
  }
}
function ip(e) {
  var t = bt(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function yc(e) {
  var t = ht();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: to,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = qv.bind(null, J, e)),
    [t.memoizedState, e]
  );
}
function no(e, t, n, o) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: o, next: null }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((o = n.next), (n.next = e), (e.next = o), (t.lastEffect = e))),
    e
  );
}
function lp() {
  return ot().memoizedState;
}
function Xo(e, t, n, o) {
  var r = ht();
  (J.flags |= e),
    (r.memoizedState = no(1 | t, n, void 0, o === void 0 ? null : o));
}
function Yi(e, t, n, o) {
  var r = ot();
  o = o === void 0 ? null : o;
  var i = void 0;
  if (ce !== null) {
    var l = ce.memoizedState;
    if (((i = l.destroy), o !== null && Za(o, l.deps))) {
      r.memoizedState = no(t, n, i, o);
      return;
    }
  }
  (J.flags |= e), (r.memoizedState = no(1 | t, n, i, o));
}
function wc(e, t) {
  return Xo(8390656, 8, e, t);
}
function Xa(e, t) {
  return Yi(2048, 8, e, t);
}
function up(e, t) {
  return Yi(4, 2, e, t);
}
function ap(e, t) {
  return Yi(4, 4, e, t);
}
function sp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function cp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Yi(4, 4, sp.bind(null, t, e), n)
  );
}
function qa() {}
function fp(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var o = n.memoizedState;
  return o !== null && t !== null && Za(t, o[1])
    ? o[0]
    : ((n.memoizedState = [e, t]), e);
}
function dp(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var o = n.memoizedState;
  return o !== null && t !== null && Za(t, o[1])
    ? o[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function pp(e, t, n) {
  return yn & 21
    ? (dt(n, t) || ((n = vd()), (J.lanes |= n), (wn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ne = !0)), (e.memoizedState = n));
}
function Yv(e, t) {
  var n = W;
  (W = n !== 0 && 4 > n ? n : 4), e(!0);
  var o = jl.transition;
  jl.transition = {};
  try {
    e(!1), t();
  } finally {
    (W = n), (jl.transition = o);
  }
}
function hp() {
  return ot().memoizedState;
}
function Xv(e, t, n) {
  var o = Xt(e);
  if (
    ((n = {
      lane: o,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    mp(e))
  )
    vp(t, n);
  else if (((n = Kd(e, t, n, o)), n !== null)) {
    var r = Te();
    ct(n, e, o, r), gp(n, t, o);
  }
}
function qv(e, t, n) {
  var o = Xt(e),
    r = { lane: o, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (mp(e)) vp(t, r);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          u = i(l, n);
        if (((r.hasEagerState = !0), (r.eagerState = u), dt(u, l))) {
          var a = t.interleaved;
          a === null
            ? ((r.next = r), Ua(t))
            : ((r.next = a.next), (a.next = r)),
            (t.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (n = Kd(e, t, r, o)),
      n !== null && ((r = Te()), ct(n, e, o, r), gp(n, t, o));
  }
}
function mp(e) {
  var t = e.alternate;
  return e === J || (t !== null && t === J);
}
function vp(e, t) {
  Ar = _i = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function gp(e, t, n) {
  if (n & 4194240) {
    var o = t.lanes;
    (o &= e.pendingLanes), (n |= o), (t.lanes = n), La(e, n);
  }
}
var ki = {
    readContext: rt,
    useCallback: xe,
    useContext: xe,
    useEffect: xe,
    useImperativeHandle: xe,
    useInsertionEffect: xe,
    useLayoutEffect: xe,
    useMemo: xe,
    useReducer: xe,
    useRef: xe,
    useState: xe,
    useDebugValue: xe,
    useDeferredValue: xe,
    useTransition: xe,
    useMutableSource: xe,
    useSyncExternalStore: xe,
    useId: xe,
    unstable_isNewReconciler: !1,
  },
  Jv = {
    readContext: rt,
    useCallback: function (e, t) {
      return (ht().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: rt,
    useEffect: wc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Xo(4194308, 4, sp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Xo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Xo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ht();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var o = ht();
      return (
        (t = n !== void 0 ? n(t) : t),
        (o.memoizedState = o.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (o.queue = e),
        (e = e.dispatch = Xv.bind(null, J, e)),
        [o.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ht();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: yc,
    useDebugValue: qa,
    useDeferredValue: function (e) {
      return (ht().memoizedState = e);
    },
    useTransition: function () {
      var e = yc(!1),
        t = e[0];
      return (e = Yv.bind(null, e[1])), (ht().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var o = J,
        r = ht();
      if (X) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), me === null)) throw Error(O(349));
        yn & 30 || tp(o, t, n);
      }
      r.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (r.queue = i),
        wc(rp.bind(null, o, i, e), [e]),
        (o.flags |= 2048),
        no(9, np.bind(null, o, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ht(),
        t = me.identifierPrefix;
      if (X) {
        var n = kt,
          o = _t;
        (n = (o & ~(1 << (32 - st(o) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = eo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Qv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  eg = {
    readContext: rt,
    useCallback: fp,
    useContext: rt,
    useEffect: Xa,
    useImperativeHandle: cp,
    useInsertionEffect: up,
    useLayoutEffect: ap,
    useMemo: dp,
    useReducer: Vl,
    useRef: lp,
    useState: function () {
      return Vl(to);
    },
    useDebugValue: qa,
    useDeferredValue: function (e) {
      var t = ot();
      return pp(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(to)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Jd,
    useSyncExternalStore: ep,
    useId: hp,
    unstable_isNewReconciler: !1,
  },
  tg = {
    readContext: rt,
    useCallback: fp,
    useContext: rt,
    useEffect: Xa,
    useImperativeHandle: cp,
    useInsertionEffect: up,
    useLayoutEffect: ap,
    useMemo: dp,
    useReducer: $l,
    useRef: lp,
    useState: function () {
      return $l(to);
    },
    useDebugValue: qa,
    useDeferredValue: function (e) {
      var t = ot();
      return ce === null ? (t.memoizedState = e) : pp(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(to)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Jd,
    useSyncExternalStore: ep,
    useId: hp,
    unstable_isNewReconciler: !1,
  };
function tr(e, t) {
  try {
    var n = "",
      o = t;
    do (n += Lm(o)), (o = o.return);
    while (o);
    var r = n;
  } catch (i) {
    r =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: r, digest: null };
}
function Bl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ju(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ng = typeof WeakMap == "function" ? WeakMap : Map;
function yp(e, t, n) {
  (n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var o = t.value;
  return (
    (n.callback = function () {
      Oi || ((Oi = !0), (Qu = o)), ju(e, t);
    }),
    n
  );
}
function wp(e, t, n) {
  (n = Mt(-1, n)), (n.tag = 3);
  var o = e.type.getDerivedStateFromError;
  if (typeof o == "function") {
    var r = t.value;
    (n.payload = function () {
      return o(r);
    }),
      (n.callback = function () {
        ju(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ju(e, t),
          typeof o != "function" &&
            (Yt === null ? (Yt = new Set([this])) : Yt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Cc(e, t, n) {
  var o = e.pingCache;
  if (o === null) {
    o = e.pingCache = new ng();
    var r = new Set();
    o.set(t, r);
  } else (r = o.get(t)), r === void 0 && ((r = new Set()), o.set(t, r));
  r.has(n) || (r.add(n), (e = vg.bind(null, e, t, n)), t.then(e, e));
}
function Sc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ec(e, t, n, o, r) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = r), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Mt(-1, 1)), (t.tag = 2), Qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var rg = Tt.ReactCurrentOwner,
  Ne = !1;
function be(e, t, n, o) {
  t.child = e === null ? Xd(t, null, n, o) : Jn(t, e.child, n, o);
}
function xc(e, t, n, o, r) {
  n = n.render;
  var i = t.ref;
  return (
    Kn(t, r),
    (o = Qa(e, t, n, o, i, r)),
    (n = Ya()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        Dt(e, t, r))
      : (X && n && Na(t), (t.flags |= 1), be(e, t, o, r), t.child)
  );
}
function _c(e, t, n, o, r) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ls(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Cp(e, t, i, o, r))
      : ((e = ti(n.type, null, o, t, t.mode, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & r))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Zr), n(l, o) && e.ref === t.ref)
    )
      return Dt(e, t, r);
  }
  return (
    (t.flags |= 1),
    (e = qt(i, o)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Cp(e, t, n, o, r) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Zr(i, o) && e.ref === t.ref)
      if (((Ne = !1), (t.pendingProps = o = i), (e.lanes & r) !== 0))
        e.flags & 131072 && (Ne = !0);
      else return (t.lanes = e.lanes), Dt(e, t, r);
  }
  return Vu(e, t, n, o, r);
}
function Sp(e, t, n) {
  var o = t.pendingProps,
    r = o.children,
    i = e !== null ? e.memoizedState : null;
  if (o.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Z(Vn, Be),
        (Be |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Z(Vn, Be),
          (Be |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (o = i !== null ? i.baseLanes : n),
        Z(Vn, Be),
        (Be |= o);
    }
  else
    i !== null ? ((o = i.baseLanes | n), (t.memoizedState = null)) : (o = n),
      Z(Vn, Be),
      (Be |= o);
  return be(e, t, r, n), t.child;
}
function Ep(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Vu(e, t, n, o, r) {
  var i = je(n) ? vn : Oe.current;
  return (
    (i = Xn(t, i)),
    Kn(t, r),
    (n = Qa(e, t, n, o, i, r)),
    (o = Ya()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        Dt(e, t, r))
      : (X && o && Na(t), (t.flags |= 1), be(e, t, n, r), t.child)
  );
}
function kc(e, t, n, o, r) {
  if (je(n)) {
    var i = !0;
    gi(t);
  } else i = !1;
  if ((Kn(t, r), t.stateNode === null))
    qo(e, t), Qd(t, n, o), zu(t, n, o, r), (o = !0);
  else if (e === null) {
    var l = t.stateNode,
      u = t.memoizedProps;
    l.props = u;
    var a = l.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = rt(s))
      : ((s = je(n) ? vn : Oe.current), (s = Xn(t, s)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((u !== o || a !== s) && vc(t, l, o, s)),
      (At = !1);
    var m = t.memoizedState;
    (l.state = m),
      Ei(t, o, l, r),
      (a = t.memoizedState),
      u !== o || m !== a || ze.current || At
        ? (typeof c == "function" && (Nu(t, n, c, o), (a = t.memoizedState)),
          (u = At || mc(t, n, u, o, m, a, s))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = o),
              (t.memoizedState = a)),
          (l.props = o),
          (l.state = a),
          (l.context = s),
          (o = u))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (o = !1));
  } else {
    (l = t.stateNode),
      Gd(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : lt(t.type, u)),
      (l.props = s),
      (f = t.pendingProps),
      (m = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = rt(a))
        : ((a = je(n) ? vn : Oe.current), (a = Xn(t, a)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((u !== f || m !== a) && vc(t, l, o, a)),
      (At = !1),
      (m = t.memoizedState),
      (l.state = m),
      Ei(t, o, l, r);
    var v = t.memoizedState;
    u !== f || m !== v || ze.current || At
      ? (typeof y == "function" && (Nu(t, n, y, o), (v = t.memoizedState)),
        (s = At || mc(t, n, s, o, m, v, a) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(o, v, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(o, v, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = o),
            (t.memoizedState = v)),
        (l.props = o),
        (l.state = v),
        (l.context = a),
        (o = s))
      : (typeof l.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (o = !1));
  }
  return $u(e, t, n, o, i, r);
}
function $u(e, t, n, o, r, i) {
  Ep(e, t);
  var l = (t.flags & 128) !== 0;
  if (!o && !l) return r && cc(t, n, !1), Dt(e, t, i);
  (o = t.stateNode), (rg.current = t);
  var u =
    l && typeof n.getDerivedStateFromError != "function" ? null : o.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Jn(t, e.child, null, i)), (t.child = Jn(t, null, u, i)))
      : be(e, t, u, i),
    (t.memoizedState = o.state),
    r && cc(t, n, !0),
    t.child
  );
}
function xp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? sc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && sc(e, t.context, !1),
    Wa(e, t.containerInfo);
}
function Mc(e, t, n, o, r) {
  return qn(), ja(r), (t.flags |= 256), be(e, t, n, o), t.child;
}
var Bu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Uu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _p(e, t, n) {
  var o = t.pendingProps,
    r = q.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    u;
  if (
    ((u = l) ||
      (u = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (r |= 1),
    Z(q, r & 1),
    e === null)
  )
    return (
      Ru(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = o.children),
          (e = o.fallback),
          i
            ? ((o = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(o & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Ji(l, o, 0, null)),
              (e = mn(e, o, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Uu(n)),
              (t.memoizedState = Bu),
              e)
            : Ja(t, l))
    );
  if (((r = e.memoizedState), r !== null && ((u = r.dehydrated), u !== null)))
    return og(e, t, l, o, u, r, n);
  if (i) {
    (i = o.fallback), (l = t.mode), (r = e.child), (u = r.sibling);
    var a = { mode: "hidden", children: o.children };
    return (
      !(l & 1) && t.child !== r
        ? ((o = t.child),
          (o.childLanes = 0),
          (o.pendingProps = a),
          (t.deletions = null))
        : ((o = qt(r, a)), (o.subtreeFlags = r.subtreeFlags & 14680064)),
      u !== null ? (i = qt(u, i)) : ((i = mn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (o.return = t),
      (o.sibling = i),
      (t.child = o),
      (o = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Uu(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Bu),
      o
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (o = qt(i, { mode: "visible", children: o.children })),
    !(t.mode & 1) && (o.lanes = n),
    (o.return = t),
    (o.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = o),
    (t.memoizedState = null),
    o
  );
}
function Ja(e, t) {
  return (
    (t = Ji({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function To(e, t, n, o) {
  return (
    o !== null && ja(o),
    Jn(t, e.child, null, n),
    (e = Ja(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function og(e, t, n, o, r, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (o = Bl(Error(O(422)))), To(e, t, l, o))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = o.fallback),
        (r = t.mode),
        (o = Ji({ mode: "visible", children: o.children }, r, 0, null)),
        (i = mn(i, r, l, null)),
        (i.flags |= 2),
        (o.return = t),
        (i.return = t),
        (o.sibling = i),
        (t.child = o),
        t.mode & 1 && Jn(t, e.child, null, l),
        (t.child.memoizedState = Uu(l)),
        (t.memoizedState = Bu),
        i);
  if (!(t.mode & 1)) return To(e, t, l, null);
  if (r.data === "$!") {
    if (((o = r.nextSibling && r.nextSibling.dataset), o)) var u = o.dgst;
    return (o = u), (i = Error(O(419))), (o = Bl(i, o, void 0)), To(e, t, l, o);
  }
  if (((u = (l & e.childLanes) !== 0), Ne || u)) {
    if (((o = me), o !== null)) {
      switch (l & -l) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = r & (o.suspendedLanes | l) ? 0 : r),
        r !== 0 &&
          r !== i.retryLane &&
          ((i.retryLane = r), bt(e, r), ct(o, e, r, -1));
    }
    return is(), (o = Bl(Error(O(421)))), To(e, t, l, o);
  }
  return r.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = gg.bind(null, e)),
      (r._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ue = Zt(r.nextSibling)),
      (He = t),
      (X = !0),
      (at = null),
      e !== null &&
        ((Je[et++] = _t),
        (Je[et++] = kt),
        (Je[et++] = gn),
        (_t = e.id),
        (kt = e.overflow),
        (gn = t)),
      (t = Ja(t, o.children)),
      (t.flags |= 4096),
      t);
}
function Oc(e, t, n) {
  e.lanes |= t;
  var o = e.alternate;
  o !== null && (o.lanes |= t), Au(e.return, t, n);
}
function Ul(e, t, n, o, r) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: n,
        tailMode: r,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = o),
      (i.tail = n),
      (i.tailMode = r));
}
function kp(e, t, n) {
  var o = t.pendingProps,
    r = o.revealOrder,
    i = o.tail;
  if ((be(e, t, o.children, n), (o = q.current), o & 2))
    (o = (o & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Oc(e, n, t);
        else if (e.tag === 19) Oc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    o &= 1;
  }
  if ((Z(q, o), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = t.child, r = null; n !== null; )
          (e = n.alternate),
            e !== null && xi(e) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = t.child), (t.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          Ul(t, !1, r, n, i);
        break;
      case "backwards":
        for (n = null, r = t.child, t.child = null; r !== null; ) {
          if (((e = r.alternate), e !== null && xi(e) === null)) {
            t.child = r;
            break;
          }
          (e = r.sibling), (r.sibling = n), (n = r), (r = e);
        }
        Ul(t, !0, n, null, i);
        break;
      case "together":
        Ul(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function qo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Dt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (wn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = qt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = qt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ig(e, t, n) {
  switch (t.tag) {
    case 3:
      xp(t), qn();
      break;
    case 5:
      qd(t);
      break;
    case 1:
      je(t.type) && gi(t);
      break;
    case 4:
      Wa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var o = t.type._context,
        r = t.memoizedProps.value;
      Z(Ci, o._currentValue), (o._currentValue = r);
      break;
    case 13:
      if (((o = t.memoizedState), o !== null))
        return o.dehydrated !== null
          ? (Z(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? _p(e, t, n)
          : (Z(q, q.current & 1),
            (e = Dt(e, t, n)),
            e !== null ? e.sibling : null);
      Z(q, q.current & 1);
      break;
    case 19:
      if (((o = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (o) return kp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((r = t.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        Z(q, q.current),
        o)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Sp(e, t, n);
  }
  return Dt(e, t, n);
}
var Mp, Hu, Op, Pp;
Mp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Hu = function () {};
Op = function (e, t, n, o) {
  var r = e.memoizedProps;
  if (r !== o) {
    (e = t.stateNode), dn(wt.current);
    var i = null;
    switch (n) {
      case "input":
        (r = du(e, r)), (o = du(e, o)), (i = []);
        break;
      case "select":
        (r = ee({}, r, { value: void 0 })),
          (o = ee({}, o, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (r = mu(e, r)), (o = mu(e, o)), (i = []);
        break;
      default:
        typeof r.onClick != "function" &&
          typeof o.onClick == "function" &&
          (e.onclick = mi);
    }
    gu(n, o);
    var l;
    n = null;
    for (s in r)
      if (!o.hasOwnProperty(s) && r.hasOwnProperty(s) && r[s] != null)
        if (s === "style") {
          var u = r[s];
          for (l in u) u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            ($r.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in o) {
      var a = o[s];
      if (
        ((u = r != null ? r[s] : void 0),
        o.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (l in u)
              !u.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                u[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (i || (i = []), i.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (i = i || []).push(s, a))
            : s === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(s, "" + a)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              ($r.hasOwnProperty(s)
                ? (a != null && s === "onScroll" && Q("scroll", e),
                  i || u === a || (i = []))
                : (i = i || []).push(s, a));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Pp = function (e, t, n, o) {
  n !== o && (t.flags |= 4);
};
function gr(e, t) {
  if (!X)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var o = null; n !== null; )
          n.alternate !== null && (o = n), (n = n.sibling);
        o === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (o.sibling = null);
    }
}
function _e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    o = 0;
  if (t)
    for (var r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (o |= r.subtreeFlags & 14680064),
        (o |= r.flags & 14680064),
        (r.return = e),
        (r = r.sibling);
  else
    for (r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (o |= r.subtreeFlags),
        (o |= r.flags),
        (r.return = e),
        (r = r.sibling);
  return (e.subtreeFlags |= o), (e.childLanes = n), t;
}
function lg(e, t, n) {
  var o = t.pendingProps;
  switch ((za(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return _e(t), null;
    case 1:
      return je(t.type) && vi(), _e(t), null;
    case 3:
      return (
        (o = t.stateNode),
        er(),
        Y(ze),
        Y(Oe),
        Ga(),
        o.pendingContext &&
          ((o.context = o.pendingContext), (o.pendingContext = null)),
        (e === null || e.child === null) &&
          (bo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), at !== null && (qu(at), (at = null)))),
        Hu(e, t),
        _e(t),
        null
      );
    case 5:
      Ka(t);
      var r = dn(Jr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Op(e, t, n, o, r),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!o) {
          if (t.stateNode === null) throw Error(O(166));
          return _e(t), null;
        }
        if (((e = dn(wt.current)), bo(t))) {
          (o = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((o[gt] = t), (o[Xr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Q("cancel", o), Q("close", o);
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", o);
              break;
            case "video":
            case "audio":
              for (r = 0; r < Pr.length; r++) Q(Pr[r], o);
              break;
            case "source":
              Q("error", o);
              break;
            case "img":
            case "image":
            case "link":
              Q("error", o), Q("load", o);
              break;
            case "details":
              Q("toggle", o);
              break;
            case "input":
              As(o, i), Q("invalid", o);
              break;
            case "select":
              (o._wrapperState = { wasMultiple: !!i.multiple }),
                Q("invalid", o);
              break;
            case "textarea":
              zs(o, i), Q("invalid", o);
          }
          gu(n, i), (r = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var u = i[l];
              l === "children"
                ? typeof u == "string"
                  ? o.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Lo(o.textContent, u, e),
                    (r = ["children", u]))
                  : typeof u == "number" &&
                    o.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Lo(o.textContent, u, e),
                    (r = ["children", "" + u]))
                : $r.hasOwnProperty(l) &&
                  u != null &&
                  l === "onScroll" &&
                  Q("scroll", o);
            }
          switch (n) {
            case "input":
              So(o), Ns(o, i, !0);
              break;
            case "textarea":
              So(o), js(o);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (o.onclick = mi);
          }
          (o = r), (t.updateQueue = o), o !== null && (t.flags |= 4);
        } else {
          (l = r.nodeType === 9 ? r : r.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = td(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof o.is == "string"
                ? (e = l.createElement(n, { is: o.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    o.multiple
                      ? (l.multiple = !0)
                      : o.size && (l.size = o.size)))
              : (e = l.createElementNS(e, n)),
            (e[gt] = t),
            (e[Xr] = o),
            Mp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = yu(n, o)), n)) {
              case "dialog":
                Q("cancel", e), Q("close", e), (r = o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", e), (r = o);
                break;
              case "video":
              case "audio":
                for (r = 0; r < Pr.length; r++) Q(Pr[r], e);
                r = o;
                break;
              case "source":
                Q("error", e), (r = o);
                break;
              case "img":
              case "image":
              case "link":
                Q("error", e), Q("load", e), (r = o);
                break;
              case "details":
                Q("toggle", e), (r = o);
                break;
              case "input":
                As(e, o), (r = du(e, o)), Q("invalid", e);
                break;
              case "option":
                r = o;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!o.multiple }),
                  (r = ee({}, o, { value: void 0 })),
                  Q("invalid", e);
                break;
              case "textarea":
                zs(e, o), (r = mu(e, o)), Q("invalid", e);
                break;
              default:
                r = o;
            }
            gu(n, r), (u = r);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style"
                  ? od(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && nd(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Br(e, a)
                    : typeof a == "number" && Br(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    ($r.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && Q("scroll", e)
                      : a != null && xa(e, i, a, l));
              }
            switch (n) {
              case "input":
                So(e), Ns(e, o, !1);
                break;
              case "textarea":
                So(e), js(e);
                break;
              case "option":
                o.value != null && e.setAttribute("value", "" + en(o.value));
                break;
              case "select":
                (e.multiple = !!o.multiple),
                  (i = o.value),
                  i != null
                    ? Bn(e, !!o.multiple, i, !1)
                    : o.defaultValue != null &&
                      Bn(e, !!o.multiple, o.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (e.onclick = mi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = !0;
                break e;
              default:
                o = !1;
            }
          }
          o && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return _e(t), null;
    case 6:
      if (e && t.stateNode != null) Pp(e, t, e.memoizedProps, o);
      else {
        if (typeof o != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = dn(Jr.current)), dn(wt.current), bo(t))) {
          if (
            ((o = t.stateNode),
            (n = t.memoizedProps),
            (o[gt] = t),
            (i = o.nodeValue !== n) && ((e = He), e !== null))
          )
            switch (e.tag) {
              case 3:
                Lo(o.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Lo(o.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o)),
            (o[gt] = t),
            (t.stateNode = o);
      }
      return _e(t), null;
    case 13:
      if (
        (Y(q),
        (o = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (X && Ue !== null && t.mode & 1 && !(t.flags & 128))
          Wd(), qn(), (t.flags |= 98560), (i = !1);
        else if (((i = bo(t)), o !== null && o.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(O(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(O(317));
            i[gt] = t;
          } else
            qn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          _e(t), (i = !1);
        } else at !== null && (qu(at), (at = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((o = o !== null),
          o !== (e !== null && e.memoizedState !== null) &&
            o &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? fe === 0 && (fe = 3) : is())),
          t.updateQueue !== null && (t.flags |= 4),
          _e(t),
          null);
    case 4:
      return (
        er(), Hu(e, t), e === null && Qr(t.stateNode.containerInfo), _e(t), null
      );
    case 10:
      return Ba(t.type._context), _e(t), null;
    case 17:
      return je(t.type) && vi(), _e(t), null;
    case 19:
      if ((Y(q), (i = t.memoizedState), i === null)) return _e(t), null;
      if (((o = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (o) gr(i, !1);
        else {
          if (fe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = xi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    gr(i, !1),
                    o = l.updateQueue,
                    o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    o = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = o),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Z(q, (q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            oe() > nr &&
            ((t.flags |= 128), (o = !0), gr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!o)
          if (((e = xi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (o = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !X)
            )
              return _e(t), null;
          } else
            2 * oe() - i.renderingStartTime > nr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (o = !0), gr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = oe()),
          (t.sibling = null),
          (n = q.current),
          Z(q, o ? (n & 1) | 2 : n & 1),
          t)
        : (_e(t), null);
    case 22:
    case 23:
      return (
        os(),
        (o = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
        o && t.mode & 1
          ? Be & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : _e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function ug(e, t) {
  switch ((za(t), t.tag)) {
    case 1:
      return (
        je(t.type) && vi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        er(),
        Y(ze),
        Y(Oe),
        Ga(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ka(t), null;
    case 13:
      if ((Y(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(O(340));
        qn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Y(q), null;
    case 4:
      return er(), null;
    case 10:
      return Ba(t.type._context), null;
    case 22:
    case 23:
      return os(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Io = !1,
  Me = !1,
  ag = typeof WeakSet == "function" ? WeakSet : Set,
  b = null;
function jn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (o) {
        te(e, t, o);
      }
    else n.current = null;
}
function Wu(e, t, n) {
  try {
    n();
  } catch (o) {
    te(e, t, o);
  }
}
var Pc = !1;
function sg(e, t) {
  if (((Pu = di), (e = Td()), Aa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var o = n.getSelection && n.getSelection();
        if (o && o.rangeCount !== 0) {
          n = o.anchorNode;
          var r = o.anchorOffset,
            i = o.focusNode;
          o = o.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            u = -1,
            a = -1,
            s = 0,
            c = 0,
            f = e,
            m = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (r !== 0 && f.nodeType !== 3) || (u = l + r),
                f !== i || (o !== 0 && f.nodeType !== 3) || (a = l + o),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (m = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (m === n && ++s === r && (u = l),
                m === i && ++c === o && (a = l),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = m), (m = f.parentNode);
            }
            f = y;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Lu = { focusedElem: e, selectionRange: n }, di = !1, b = t; b !== null; )
    if (((t = b), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (b = e);
    else
      for (; b !== null; ) {
        t = b;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    w = v.memoizedState,
                    d = t.stateNode,
                    p = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : lt(t.type, g),
                      w,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (E) {
          te(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (b = e);
          break;
        }
        b = t.return;
      }
  return (v = Pc), (Pc = !1), v;
}
function Nr(e, t, n) {
  var o = t.updateQueue;
  if (((o = o !== null ? o.lastEffect : null), o !== null)) {
    var r = (o = o.next);
    do {
      if ((r.tag & e) === e) {
        var i = r.destroy;
        (r.destroy = void 0), i !== void 0 && Wu(t, n, i);
      }
      r = r.next;
    } while (r !== o);
  }
}
function Xi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var o = n.create;
        n.destroy = o();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ku(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Lp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Lp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[gt], delete t[Xr], delete t[Tu], delete t[Wv], delete t[Kv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function bp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Lc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || bp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Gu(e, t, n) {
  var o = e.tag;
  if (o === 5 || o === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = mi));
  else if (o !== 4 && ((e = e.child), e !== null))
    for (Gu(e, t, n), e = e.sibling; e !== null; ) Gu(e, t, n), (e = e.sibling);
}
function Zu(e, t, n) {
  var o = e.tag;
  if (o === 5 || o === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (o !== 4 && ((e = e.child), e !== null))
    for (Zu(e, t, n), e = e.sibling; e !== null; ) Zu(e, t, n), (e = e.sibling);
}
var ge = null,
  ut = !1;
function Ft(e, t, n) {
  for (n = n.child; n !== null; ) Dp(e, t, n), (n = n.sibling);
}
function Dp(e, t, n) {
  if (yt && typeof yt.onCommitFiberUnmount == "function")
    try {
      yt.onCommitFiberUnmount(Ui, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Me || jn(n, t);
    case 6:
      var o = ge,
        r = ut;
      (ge = null),
        Ft(e, t, n),
        (ge = o),
        (ut = r),
        ge !== null &&
          (ut
            ? ((e = ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null &&
        (ut
          ? ((e = ge),
            (n = n.stateNode),
            e.nodeType === 8
              ? Al(e.parentNode, n)
              : e.nodeType === 1 && Al(e, n),
            Kr(e))
          : Al(ge, n.stateNode));
      break;
    case 4:
      (o = ge),
        (r = ut),
        (ge = n.stateNode.containerInfo),
        (ut = !0),
        Ft(e, t, n),
        (ge = o),
        (ut = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Me &&
        ((o = n.updateQueue), o !== null && ((o = o.lastEffect), o !== null))
      ) {
        r = o = o.next;
        do {
          var i = r,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Wu(n, t, l),
            (r = r.next);
        } while (r !== o);
      }
      Ft(e, t, n);
      break;
    case 1:
      if (
        !Me &&
        (jn(n, t),
        (o = n.stateNode),
        typeof o.componentWillUnmount == "function")
      )
        try {
          (o.props = n.memoizedProps),
            (o.state = n.memoizedState),
            o.componentWillUnmount();
        } catch (u) {
          te(n, t, u);
        }
      Ft(e, t, n);
      break;
    case 21:
      Ft(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Me = (o = Me) || n.memoizedState !== null), Ft(e, t, n), (Me = o))
        : Ft(e, t, n);
      break;
    default:
      Ft(e, t, n);
  }
}
function bc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ag()),
      t.forEach(function (o) {
        var r = yg.bind(null, e, o);
        n.has(o) || (n.add(o), o.then(r, r));
      });
  }
}
function it(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var o = 0; o < n.length; o++) {
      var r = n[o];
      try {
        var i = e,
          l = t,
          u = l;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ge = u.stateNode), (ut = !1);
              break e;
            case 3:
              (ge = u.stateNode.containerInfo), (ut = !0);
              break e;
            case 4:
              (ge = u.stateNode.containerInfo), (ut = !0);
              break e;
          }
          u = u.return;
        }
        if (ge === null) throw Error(O(160));
        Dp(i, l, r), (ge = null), (ut = !1);
        var a = r.alternate;
        a !== null && (a.return = null), (r.return = null);
      } catch (s) {
        te(r, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Tp(t, e), (t = t.sibling);
}
function Tp(e, t) {
  var n = e.alternate,
    o = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((it(t, e), pt(e), o & 4)) {
        try {
          Nr(3, e, e.return), Xi(3, e);
        } catch (g) {
          te(e, e.return, g);
        }
        try {
          Nr(5, e, e.return);
        } catch (g) {
          te(e, e.return, g);
        }
      }
      break;
    case 1:
      it(t, e), pt(e), o & 512 && n !== null && jn(n, n.return);
      break;
    case 5:
      if (
        (it(t, e),
        pt(e),
        o & 512 && n !== null && jn(n, n.return),
        e.flags & 32)
      ) {
        var r = e.stateNode;
        try {
          Br(r, "");
        } catch (g) {
          te(e, e.return, g);
        }
      }
      if (o & 4 && ((r = e.stateNode), r != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && Jf(r, i),
              yu(u, l);
            var s = yu(u, i);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l],
                f = a[l + 1];
              c === "style"
                ? od(r, f)
                : c === "dangerouslySetInnerHTML"
                ? nd(r, f)
                : c === "children"
                ? Br(r, f)
                : xa(r, c, f, s);
            }
            switch (u) {
              case "input":
                pu(r, i);
                break;
              case "textarea":
                ed(r, i);
                break;
              case "select":
                var m = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? Bn(r, !!i.multiple, y, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Bn(r, !!i.multiple, i.defaultValue, !0)
                      : Bn(r, !!i.multiple, i.multiple ? [] : "", !1));
            }
            r[Xr] = i;
          } catch (g) {
            te(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((it(t, e), pt(e), o & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (r = e.stateNode), (i = e.memoizedProps);
        try {
          r.nodeValue = i;
        } catch (g) {
          te(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (it(t, e), pt(e), o & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Kr(t.containerInfo);
        } catch (g) {
          te(e, e.return, g);
        }
      break;
    case 4:
      it(t, e), pt(e);
      break;
    case 13:
      it(t, e),
        pt(e),
        (r = e.child),
        r.flags & 8192 &&
          ((i = r.memoizedState !== null),
          (r.stateNode.isHidden = i),
          !i ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (ns = oe())),
        o & 4 && bc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Me = (s = Me) || c), it(t, e), (Me = s)) : it(t, e),
        pt(e),
        o & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (b = e, c = e.child; c !== null; ) {
            for (f = b = c; b !== null; ) {
              switch (((m = b), (y = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Nr(4, m, m.return);
                  break;
                case 1:
                  jn(m, m.return);
                  var v = m.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (o = m), (n = m.return);
                    try {
                      (t = o),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (g) {
                      te(o, n, g);
                    }
                  }
                  break;
                case 5:
                  jn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Tc(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = m), (b = y)) : Tc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (r = f.stateNode),
                  s
                    ? ((i = r.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = f.stateNode),
                      (a = f.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = rd("display", l)));
              } catch (g) {
                te(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = s ? "" : f.memoizedProps;
              } catch (g) {
                te(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      it(t, e), pt(e), o & 4 && bc(e);
      break;
    case 21:
      break;
    default:
      it(t, e), pt(e);
  }
}
function pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (bp(n)) {
            var o = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (o.tag) {
        case 5:
          var r = o.stateNode;
          o.flags & 32 && (Br(r, ""), (o.flags &= -33));
          var i = Lc(e);
          Zu(e, i, r);
          break;
        case 3:
        case 4:
          var l = o.stateNode.containerInfo,
            u = Lc(e);
          Gu(e, u, l);
          break;
        default:
          throw Error(O(161));
      }
    } catch (a) {
      te(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function cg(e, t, n) {
  (b = e), Ip(e);
}
function Ip(e, t, n) {
  for (var o = (e.mode & 1) !== 0; b !== null; ) {
    var r = b,
      i = r.child;
    if (r.tag === 22 && o) {
      var l = r.memoizedState !== null || Io;
      if (!l) {
        var u = r.alternate,
          a = (u !== null && u.memoizedState !== null) || Me;
        u = Io;
        var s = Me;
        if (((Io = l), (Me = a) && !s))
          for (b = r; b !== null; )
            (l = b),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Ic(r)
                : a !== null
                ? ((a.return = l), (b = a))
                : Ic(r);
        for (; i !== null; ) (b = i), Ip(i), (i = i.sibling);
        (b = r), (Io = u), (Me = s);
      }
      Dc(e);
    } else
      r.subtreeFlags & 8772 && i !== null ? ((i.return = r), (b = i)) : Dc(e);
  }
}
function Dc(e) {
  for (; b !== null; ) {
    var t = b;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Me || Xi(5, t);
              break;
            case 1:
              var o = t.stateNode;
              if (t.flags & 4 && !Me)
                if (n === null) o.componentDidMount();
                else {
                  var r =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : lt(t.type, n.memoizedProps);
                  o.componentDidUpdate(
                    r,
                    n.memoizedState,
                    o.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && hc(t, i, o);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                hc(t, l, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Kr(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        Me || (t.flags & 512 && Ku(t));
      } catch (m) {
        te(t, t.return, m);
      }
    }
    if (t === e) {
      b = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (b = n);
      break;
    }
    b = t.return;
  }
}
function Tc(e) {
  for (; b !== null; ) {
    var t = b;
    if (t === e) {
      b = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (b = n);
      break;
    }
    b = t.return;
  }
}
function Ic(e) {
  for (; b !== null; ) {
    var t = b;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Xi(4, t);
          } catch (a) {
            te(t, n, a);
          }
          break;
        case 1:
          var o = t.stateNode;
          if (typeof o.componentDidMount == "function") {
            var r = t.return;
            try {
              o.componentDidMount();
            } catch (a) {
              te(t, r, a);
            }
          }
          var i = t.return;
          try {
            Ku(t);
          } catch (a) {
            te(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ku(t);
          } catch (a) {
            te(t, l, a);
          }
      }
    } catch (a) {
      te(t, t.return, a);
    }
    if (t === e) {
      b = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (b = u);
      break;
    }
    b = t.return;
  }
}
var fg = Math.ceil,
  Mi = Tt.ReactCurrentDispatcher,
  es = Tt.ReactCurrentOwner,
  nt = Tt.ReactCurrentBatchConfig,
  V = 0,
  me = null,
  ue = null,
  we = 0,
  Be = 0,
  Vn = rn(0),
  fe = 0,
  ro = null,
  wn = 0,
  qi = 0,
  ts = 0,
  zr = null,
  Ae = null,
  ns = 0,
  nr = 1 / 0,
  Et = null,
  Oi = !1,
  Qu = null,
  Yt = null,
  Fo = !1,
  Bt = null,
  Pi = 0,
  jr = 0,
  Yu = null,
  Jo = -1,
  ei = 0;
function Te() {
  return V & 6 ? oe() : Jo !== -1 ? Jo : (Jo = oe());
}
function Xt(e) {
  return e.mode & 1
    ? V & 2 && we !== 0
      ? we & -we
      : Zv.transition !== null
      ? (ei === 0 && (ei = vd()), ei)
      : ((e = W),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xd(e.type))),
        e)
    : 1;
}
function ct(e, t, n, o) {
  if (50 < jr) throw ((jr = 0), (Yu = null), Error(O(185)));
  co(e, n, o),
    (!(V & 2) || e !== me) &&
      (e === me && (!(V & 2) && (qi |= n), fe === 4 && jt(e, we)),
      Ve(e, o),
      n === 1 && V === 0 && !(t.mode & 1) && ((nr = oe() + 500), Zi && on()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  Zm(e, t);
  var o = fi(e, e === me ? we : 0);
  if (o === 0)
    n !== null && Bs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = o & -o), e.callbackPriority !== t)) {
    if ((n != null && Bs(n), t === 1))
      e.tag === 0 ? Gv(Fc.bind(null, e)) : Bd(Fc.bind(null, e)),
        Uv(function () {
          !(V & 6) && on();
        }),
        (n = null);
    else {
      switch (gd(o)) {
        case 1:
          n = Pa;
          break;
        case 4:
          n = hd;
          break;
        case 16:
          n = ci;
          break;
        case 536870912:
          n = md;
          break;
        default:
          n = ci;
      }
      n = $p(n, Fp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Fp(e, t) {
  if (((Jo = -1), (ei = 0), V & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (Gn() && e.callbackNode !== n) return null;
  var o = fi(e, e === me ? we : 0);
  if (o === 0) return null;
  if (o & 30 || o & e.expiredLanes || t) t = Li(e, o);
  else {
    t = o;
    var r = V;
    V |= 2;
    var i = Ap();
    (me !== e || we !== t) && ((Et = null), (nr = oe() + 500), hn(e, t));
    do
      try {
        hg();
        break;
      } catch (u) {
        Rp(e, u);
      }
    while (1);
    $a(),
      (Mi.current = i),
      (V = r),
      ue !== null ? (t = 0) : ((me = null), (we = 0), (t = fe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((r = xu(e)), r !== 0 && ((o = r), (t = Xu(e, r)))), t === 1)
    )
      throw ((n = ro), hn(e, 0), jt(e, o), Ve(e, oe()), n);
    if (t === 6) jt(e, o);
    else {
      if (
        ((r = e.current.alternate),
        !(o & 30) &&
          !dg(r) &&
          ((t = Li(e, o)),
          t === 2 && ((i = xu(e)), i !== 0 && ((o = i), (t = Xu(e, i)))),
          t === 1))
      )
        throw ((n = ro), hn(e, 0), jt(e, o), Ve(e, oe()), n);
      switch (((e.finishedWork = r), (e.finishedLanes = o), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          an(e, Ae, Et);
          break;
        case 3:
          if (
            (jt(e, o), (o & 130023424) === o && ((t = ns + 500 - oe()), 10 < t))
          ) {
            if (fi(e, 0) !== 0) break;
            if (((r = e.suspendedLanes), (r & o) !== o)) {
              Te(), (e.pingedLanes |= e.suspendedLanes & r);
              break;
            }
            e.timeoutHandle = Du(an.bind(null, e, Ae, Et), t);
            break;
          }
          an(e, Ae, Et);
          break;
        case 4:
          if ((jt(e, o), (o & 4194240) === o)) break;
          for (t = e.eventTimes, r = -1; 0 < o; ) {
            var l = 31 - st(o);
            (i = 1 << l), (l = t[l]), l > r && (r = l), (o &= ~i);
          }
          if (
            ((o = r),
            (o = oe() - o),
            (o =
              (120 > o
                ? 120
                : 480 > o
                ? 480
                : 1080 > o
                ? 1080
                : 1920 > o
                ? 1920
                : 3e3 > o
                ? 3e3
                : 4320 > o
                ? 4320
                : 1960 * fg(o / 1960)) - o),
            10 < o)
          ) {
            e.timeoutHandle = Du(an.bind(null, e, Ae, Et), o);
            break;
          }
          an(e, Ae, Et);
          break;
        case 5:
          an(e, Ae, Et);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Ve(e, oe()), e.callbackNode === n ? Fp.bind(null, e) : null;
}
function Xu(e, t) {
  var n = zr;
  return (
    e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
    (e = Li(e, t)),
    e !== 2 && ((t = Ae), (Ae = n), t !== null && qu(t)),
    e
  );
}
function qu(e) {
  Ae === null ? (Ae = e) : Ae.push.apply(Ae, e);
}
function dg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var o = 0; o < n.length; o++) {
          var r = n[o],
            i = r.getSnapshot;
          r = r.value;
          try {
            if (!dt(i(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function jt(e, t) {
  for (
    t &= ~ts,
      t &= ~qi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - st(t),
      o = 1 << n;
    (e[n] = -1), (t &= ~o);
  }
}
function Fc(e) {
  if (V & 6) throw Error(O(327));
  Gn();
  var t = fi(e, 0);
  if (!(t & 1)) return Ve(e, oe()), null;
  var n = Li(e, t);
  if (e.tag !== 0 && n === 2) {
    var o = xu(e);
    o !== 0 && ((t = o), (n = Xu(e, o)));
  }
  if (n === 1) throw ((n = ro), hn(e, 0), jt(e, t), Ve(e, oe()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    an(e, Ae, Et),
    Ve(e, oe()),
    null
  );
}
function rs(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    (V = n), V === 0 && ((nr = oe() + 500), Zi && on());
  }
}
function Cn(e) {
  Bt !== null && Bt.tag === 0 && !(V & 6) && Gn();
  var t = V;
  V |= 1;
  var n = nt.transition,
    o = W;
  try {
    if (((nt.transition = null), (W = 1), e)) return e();
  } finally {
    (W = o), (nt.transition = n), (V = t), !(V & 6) && on();
  }
}
function os() {
  (Be = Vn.current), Y(Vn);
}
function hn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Bv(n)), ue !== null))
    for (n = ue.return; n !== null; ) {
      var o = n;
      switch ((za(o), o.tag)) {
        case 1:
          (o = o.type.childContextTypes), o != null && vi();
          break;
        case 3:
          er(), Y(ze), Y(Oe), Ga();
          break;
        case 5:
          Ka(o);
          break;
        case 4:
          er();
          break;
        case 13:
          Y(q);
          break;
        case 19:
          Y(q);
          break;
        case 10:
          Ba(o.type._context);
          break;
        case 22:
        case 23:
          os();
      }
      n = n.return;
    }
  if (
    ((me = e),
    (ue = e = qt(e.current, null)),
    (we = Be = t),
    (fe = 0),
    (ro = null),
    (ts = qi = wn = 0),
    (Ae = zr = null),
    fn !== null)
  ) {
    for (t = 0; t < fn.length; t++)
      if (((n = fn[t]), (o = n.interleaved), o !== null)) {
        n.interleaved = null;
        var r = o.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = r), (o.next = l);
        }
        n.pending = o;
      }
    fn = null;
  }
  return e;
}
function Rp(e, t) {
  do {
    var n = ue;
    try {
      if (($a(), (Yo.current = ki), _i)) {
        for (var o = J.memoizedState; o !== null; ) {
          var r = o.queue;
          r !== null && (r.pending = null), (o = o.next);
        }
        _i = !1;
      }
      if (
        ((yn = 0),
        (he = ce = J = null),
        (Ar = !1),
        (eo = 0),
        (es.current = null),
        n === null || n.return === null)
      ) {
        (fe = 1), (ro = t), (ue = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          u = n,
          a = t;
        if (
          ((t = we),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            c = u,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = Sc(l);
          if (y !== null) {
            (y.flags &= -257),
              Ec(y, l, u, i, t),
              y.mode & 1 && Cc(i, s, t),
              (t = y),
              (a = s);
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Cc(i, s, t), is();
              break e;
            }
            a = Error(O(426));
          }
        } else if (X && u.mode & 1) {
          var w = Sc(l);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Ec(w, l, u, i, t),
              ja(tr(a, u));
            break e;
          }
        }
        (i = a = tr(a, u)),
          fe !== 4 && (fe = 2),
          zr === null ? (zr = [i]) : zr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = yp(i, a, t);
              pc(i, d);
              break e;
            case 1:
              u = a;
              var p = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Yt === null || !Yt.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = wp(i, u, t);
                pc(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      zp(n);
    } catch (_) {
      (t = _), ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Ap() {
  var e = Mi.current;
  return (Mi.current = ki), e === null ? ki : e;
}
function is() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4),
    me === null || (!(wn & 268435455) && !(qi & 268435455)) || jt(me, we);
}
function Li(e, t) {
  var n = V;
  V |= 2;
  var o = Ap();
  (me !== e || we !== t) && ((Et = null), hn(e, t));
  do
    try {
      pg();
      break;
    } catch (r) {
      Rp(e, r);
    }
  while (1);
  if (($a(), (V = n), (Mi.current = o), ue !== null)) throw Error(O(261));
  return (me = null), (we = 0), fe;
}
function pg() {
  for (; ue !== null; ) Np(ue);
}
function hg() {
  for (; ue !== null && !jm(); ) Np(ue);
}
function Np(e) {
  var t = Vp(e.alternate, e, Be);
  (e.memoizedProps = e.pendingProps),
    t === null ? zp(e) : (ue = t),
    (es.current = null);
}
function zp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ug(n, t)), n !== null)) {
        (n.flags &= 32767), (ue = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (fe = 6), (ue = null);
        return;
      }
    } else if (((n = lg(n, t, Be)), n !== null)) {
      ue = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function an(e, t, n) {
  var o = W,
    r = nt.transition;
  try {
    (nt.transition = null), (W = 1), mg(e, t, n, o);
  } finally {
    (nt.transition = r), (W = o);
  }
  return null;
}
function mg(e, t, n, o) {
  do Gn();
  while (Bt !== null);
  if (V & 6) throw Error(O(327));
  n = e.finishedWork;
  var r = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Qm(e, i),
    e === me && ((ue = me = null), (we = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Fo ||
      ((Fo = !0),
      $p(ci, function () {
        return Gn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = nt.transition), (nt.transition = null);
    var l = W;
    W = 1;
    var u = V;
    (V |= 4),
      (es.current = null),
      sg(e, n),
      Tp(n, e),
      Rv(Lu),
      (di = !!Pu),
      (Lu = Pu = null),
      (e.current = n),
      cg(n),
      Vm(),
      (V = u),
      (W = l),
      (nt.transition = i);
  } else e.current = n;
  if (
    (Fo && ((Fo = !1), (Bt = e), (Pi = r)),
    (i = e.pendingLanes),
    i === 0 && (Yt = null),
    Um(n.stateNode),
    Ve(e, oe()),
    t !== null)
  )
    for (o = e.onRecoverableError, n = 0; n < t.length; n++)
      (r = t[n]), o(r.value, { componentStack: r.stack, digest: r.digest });
  if (Oi) throw ((Oi = !1), (e = Qu), (Qu = null), e);
  return (
    Pi & 1 && e.tag !== 0 && Gn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Yu ? jr++ : ((jr = 0), (Yu = e))) : (jr = 0),
    on(),
    null
  );
}
function Gn() {
  if (Bt !== null) {
    var e = gd(Pi),
      t = nt.transition,
      n = W;
    try {
      if (((nt.transition = null), (W = 16 > e ? 16 : e), Bt === null))
        var o = !1;
      else {
        if (((e = Bt), (Bt = null), (Pi = 0), V & 6)) throw Error(O(331));
        var r = V;
        for (V |= 4, b = e.current; b !== null; ) {
          var i = b,
            l = i.child;
          if (b.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (b = s; b !== null; ) {
                  var c = b;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nr(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (b = f);
                  else
                    for (; b !== null; ) {
                      c = b;
                      var m = c.sibling,
                        y = c.return;
                      if ((Lp(c), c === s)) {
                        b = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = y), (b = m);
                        break;
                      }
                      b = y;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var w = g.sibling;
                    (g.sibling = null), (g = w);
                  } while (g !== null);
                }
              }
              b = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (b = l);
          else
            e: for (; b !== null; ) {
              if (((i = b), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Nr(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (b = d);
                break e;
              }
              b = i.return;
            }
        }
        var p = e.current;
        for (b = p; b !== null; ) {
          l = b;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) (h.return = l), (b = h);
          else
            e: for (l = p; b !== null; ) {
              if (((u = b), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xi(9, u);
                  }
                } catch (_) {
                  te(u, u.return, _);
                }
              if (u === l) {
                b = null;
                break e;
              }
              var E = u.sibling;
              if (E !== null) {
                (E.return = u.return), (b = E);
                break e;
              }
              b = u.return;
            }
        }
        if (
          ((V = r), on(), yt && typeof yt.onPostCommitFiberRoot == "function")
        )
          try {
            yt.onPostCommitFiberRoot(Ui, e);
          } catch {}
        o = !0;
      }
      return o;
    } finally {
      (W = n), (nt.transition = t);
    }
  }
  return !1;
}
function Rc(e, t, n) {
  (t = tr(n, t)),
    (t = yp(e, t, 1)),
    (e = Qt(e, t, 1)),
    (t = Te()),
    e !== null && (co(e, 1, t), Ve(e, t));
}
function te(e, t, n) {
  if (e.tag === 3) Rc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Rc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var o = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof o.componentDidCatch == "function" &&
            (Yt === null || !Yt.has(o)))
        ) {
          (e = tr(n, e)),
            (e = wp(t, e, 1)),
            (t = Qt(t, e, 1)),
            (e = Te()),
            t !== null && (co(t, 1, e), Ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function vg(e, t, n) {
  var o = e.pingCache;
  o !== null && o.delete(t),
    (t = Te()),
    (e.pingedLanes |= e.suspendedLanes & n),
    me === e &&
      (we & n) === n &&
      (fe === 4 || (fe === 3 && (we & 130023424) === we && 500 > oe() - ns)
        ? hn(e, 0)
        : (ts |= n)),
    Ve(e, t);
}
function jp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = _o), (_o <<= 1), !(_o & 130023424) && (_o = 4194304))
      : (t = 1));
  var n = Te();
  (e = bt(e, t)), e !== null && (co(e, t, n), Ve(e, n));
}
function gg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), jp(e, n);
}
function yg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var o = e.stateNode,
        r = e.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      o = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  o !== null && o.delete(t), jp(e, n);
}
var Vp;
Vp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current) Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ne = !1), ig(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else (Ne = !1), X && t.flags & 1048576 && Ud(t, wi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var o = t.type;
      qo(e, t), (e = t.pendingProps);
      var r = Xn(t, Oe.current);
      Kn(t, n), (r = Qa(null, t, o, e, r, n));
      var i = Ya();
      return (
        (t.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            je(o) ? ((i = !0), gi(t)) : (i = !1),
            (t.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            Ha(t),
            (r.updater = Qi),
            (t.stateNode = r),
            (r._reactInternals = t),
            zu(t, o, e, n),
            (t = $u(null, t, o, !0, i, n)))
          : ((t.tag = 0), X && i && Na(t), be(null, t, r, n), (t = t.child)),
        t
      );
    case 16:
      o = t.elementType;
      e: {
        switch (
          (qo(e, t),
          (e = t.pendingProps),
          (r = o._init),
          (o = r(o._payload)),
          (t.type = o),
          (r = t.tag = Cg(o)),
          (e = lt(o, e)),
          r)
        ) {
          case 0:
            t = Vu(null, t, o, e, n);
            break e;
          case 1:
            t = kc(null, t, o, e, n);
            break e;
          case 11:
            t = xc(null, t, o, e, n);
            break e;
          case 14:
            t = _c(null, t, o, lt(o.type, e), n);
            break e;
        }
        throw Error(O(306, o, ""));
      }
      return t;
    case 0:
      return (
        (o = t.type),
        (r = t.pendingProps),
        (r = t.elementType === o ? r : lt(o, r)),
        Vu(e, t, o, r, n)
      );
    case 1:
      return (
        (o = t.type),
        (r = t.pendingProps),
        (r = t.elementType === o ? r : lt(o, r)),
        kc(e, t, o, r, n)
      );
    case 3:
      e: {
        if ((xp(t), e === null)) throw Error(O(387));
        (o = t.pendingProps),
          (i = t.memoizedState),
          (r = i.element),
          Gd(e, t),
          Ei(t, o, null, n);
        var l = t.memoizedState;
        if (((o = l.element), i.isDehydrated))
          if (
            ((i = {
              element: o,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (r = tr(Error(O(423)), t)), (t = Mc(e, t, o, n, r));
            break e;
          } else if (o !== r) {
            (r = tr(Error(O(424)), t)), (t = Mc(e, t, o, n, r));
            break e;
          } else
            for (
              Ue = Zt(t.stateNode.containerInfo.firstChild),
                He = t,
                X = !0,
                at = null,
                n = Xd(t, null, o, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((qn(), o === r)) {
            t = Dt(e, t, n);
            break e;
          }
          be(e, t, o, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        qd(t),
        e === null && Ru(t),
        (o = t.type),
        (r = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = r.children),
        bu(o, r) ? (l = null) : i !== null && bu(o, i) && (t.flags |= 32),
        Ep(e, t),
        be(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Ru(t), null;
    case 13:
      return _p(e, t, n);
    case 4:
      return (
        Wa(t, t.stateNode.containerInfo),
        (o = t.pendingProps),
        e === null ? (t.child = Jn(t, null, o, n)) : be(e, t, o, n),
        t.child
      );
    case 11:
      return (
        (o = t.type),
        (r = t.pendingProps),
        (r = t.elementType === o ? r : lt(o, r)),
        xc(e, t, o, r, n)
      );
    case 7:
      return be(e, t, t.pendingProps, n), t.child;
    case 8:
      return be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((o = t.type._context),
          (r = t.pendingProps),
          (i = t.memoizedProps),
          (l = r.value),
          Z(Ci, o._currentValue),
          (o._currentValue = l),
          i !== null)
        )
          if (dt(i.value, l)) {
            if (i.children === r.children && !ze.current) {
              t = Dt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                l = i.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === o) {
                    if (i.tag === 1) {
                      (a = Mt(-1, n & -n)), (a.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (s.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Au(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(O(341));
                (l.lanes |= n),
                  (u = l.alternate),
                  u !== null && (u.lanes |= n),
                  Au(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        be(e, t, r.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (r = t.type),
        (o = t.pendingProps.children),
        Kn(t, n),
        (r = rt(r)),
        (o = o(r)),
        (t.flags |= 1),
        be(e, t, o, n),
        t.child
      );
    case 14:
      return (
        (o = t.type),
        (r = lt(o, t.pendingProps)),
        (r = lt(o.type, r)),
        _c(e, t, o, r, n)
      );
    case 15:
      return Cp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (o = t.type),
        (r = t.pendingProps),
        (r = t.elementType === o ? r : lt(o, r)),
        qo(e, t),
        (t.tag = 1),
        je(o) ? ((e = !0), gi(t)) : (e = !1),
        Kn(t, n),
        Qd(t, o, r),
        zu(t, o, r, n),
        $u(null, t, o, !0, e, n)
      );
    case 19:
      return kp(e, t, n);
    case 22:
      return Sp(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function $p(e, t) {
  return pd(e, t);
}
function wg(e, t, n, o) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = o),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function tt(e, t, n, o) {
  return new wg(e, t, n, o);
}
function ls(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Cg(e) {
  if (typeof e == "function") return ls(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ka)) return 11;
    if (e === Ma) return 14;
  }
  return 2;
}
function qt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = tt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ti(e, t, n, o, r, i) {
  var l = 2;
  if (((o = e), typeof e == "function")) ls(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case bn:
        return mn(n.children, r, i, t);
      case _a:
        (l = 8), (r |= 8);
        break;
      case au:
        return (
          (e = tt(12, n, t, r | 2)), (e.elementType = au), (e.lanes = i), e
        );
      case su:
        return (e = tt(13, n, t, r)), (e.elementType = su), (e.lanes = i), e;
      case cu:
        return (e = tt(19, n, t, r)), (e.elementType = cu), (e.lanes = i), e;
      case Yf:
        return Ji(n, r, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Zf:
              l = 10;
              break e;
            case Qf:
              l = 9;
              break e;
            case ka:
              l = 11;
              break e;
            case Ma:
              l = 14;
              break e;
            case Rt:
              (l = 16), (o = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = tt(l, n, t, r)), (t.elementType = e), (t.type = o), (t.lanes = i), t
  );
}
function mn(e, t, n, o) {
  return (e = tt(7, e, o, t)), (e.lanes = n), e;
}
function Ji(e, t, n, o) {
  return (
    (e = tt(22, e, o, t)),
    (e.elementType = Yf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Hl(e, t, n) {
  return (e = tt(6, e, null, t)), (e.lanes = n), e;
}
function Wl(e, t, n) {
  return (
    (t = tt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Sg(e, t, n, o, r) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = kl(0)),
    (this.expirationTimes = kl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = kl(0)),
    (this.identifierPrefix = o),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function us(e, t, n, o, r, i, l, u, a) {
  return (
    (e = new Sg(e, t, n, u, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = tt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: o,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ha(i),
    e
  );
}
function Eg(e, t, n) {
  var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ln,
    key: o == null ? null : "" + o,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Bp(e) {
  if (!e) return tn;
  e = e._reactInternals;
  e: {
    if (xn(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (je(n)) return $d(e, n, t);
  }
  return t;
}
function Up(e, t, n, o, r, i, l, u, a) {
  return (
    (e = us(n, o, !0, e, r, i, l, u, a)),
    (e.context = Bp(null)),
    (n = e.current),
    (o = Te()),
    (r = Xt(n)),
    (i = Mt(o, r)),
    (i.callback = t ?? null),
    Qt(n, i, r),
    (e.current.lanes = r),
    co(e, r, o),
    Ve(e, o),
    e
  );
}
function el(e, t, n, o) {
  var r = t.current,
    i = Te(),
    l = Xt(r);
  return (
    (n = Bp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Mt(i, l)),
    (t.payload = { element: e }),
    (o = o === void 0 ? null : o),
    o !== null && (t.callback = o),
    (e = Qt(r, t, l)),
    e !== null && (ct(e, r, l, i), Qo(e, r, l)),
    l
  );
}
function bi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ac(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function as(e, t) {
  Ac(e, t), (e = e.alternate) && Ac(e, t);
}
function xg() {
  return null;
}
var Hp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ss(e) {
  this._internalRoot = e;
}
tl.prototype.render = ss.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  el(e, t, null, null);
};
tl.prototype.unmount = ss.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cn(function () {
      el(null, e, null, null);
    }),
      (t[Lt] = null);
  }
};
function tl(e) {
  this._internalRoot = e;
}
tl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Cd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++);
    zt.splice(n, 0, e), n === 0 && Ed(e);
  }
};
function cs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function nl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Nc() {}
function _g(e, t, n, o, r) {
  if (r) {
    if (typeof o == "function") {
      var i = o;
      o = function () {
        var s = bi(l);
        i.call(s);
      };
    }
    var l = Up(t, o, e, 0, null, !1, !1, "", Nc);
    return (
      (e._reactRootContainer = l),
      (e[Lt] = l.current),
      Qr(e.nodeType === 8 ? e.parentNode : e),
      Cn(),
      l
    );
  }
  for (; (r = e.lastChild); ) e.removeChild(r);
  if (typeof o == "function") {
    var u = o;
    o = function () {
      var s = bi(a);
      u.call(s);
    };
  }
  var a = us(e, 0, !1, null, null, !1, !1, "", Nc);
  return (
    (e._reactRootContainer = a),
    (e[Lt] = a.current),
    Qr(e.nodeType === 8 ? e.parentNode : e),
    Cn(function () {
      el(t, a, n, o);
    }),
    a
  );
}
function rl(e, t, n, o, r) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var a = bi(l);
        u.call(a);
      };
    }
    el(t, l, e, r);
  } else l = _g(n, t, e, r, o);
  return bi(l);
}
yd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Or(t.pendingLanes);
        n !== 0 &&
          (La(t, n | 1), Ve(t, oe()), !(V & 6) && ((nr = oe() + 500), on()));
      }
      break;
    case 13:
      Cn(function () {
        var o = bt(e, 1);
        if (o !== null) {
          var r = Te();
          ct(o, e, 1, r);
        }
      }),
        as(e, 1);
  }
};
ba = function (e) {
  if (e.tag === 13) {
    var t = bt(e, 134217728);
    if (t !== null) {
      var n = Te();
      ct(t, e, 134217728, n);
    }
    as(e, 134217728);
  }
};
wd = function (e) {
  if (e.tag === 13) {
    var t = Xt(e),
      n = bt(e, t);
    if (n !== null) {
      var o = Te();
      ct(n, e, t, o);
    }
    as(e, t);
  }
};
Cd = function () {
  return W;
};
Sd = function (e, t) {
  var n = W;
  try {
    return (W = e), t();
  } finally {
    W = n;
  }
};
Cu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((pu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var o = n[t];
          if (o !== e && o.form === e.form) {
            var r = Gi(o);
            if (!r) throw Error(O(90));
            qf(o), pu(o, r);
          }
        }
      }
      break;
    case "textarea":
      ed(e, n);
      break;
    case "select":
      (t = n.value), t != null && Bn(e, !!n.multiple, t, !1);
  }
};
ud = rs;
ad = Cn;
var kg = { usingClientEntryPoint: !1, Events: [po, Fn, Gi, id, ld, rs] },
  yr = {
    findFiberByHostInstance: cn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Mg = {
    bundleType: yr.bundleType,
    version: yr.version,
    rendererPackageName: yr.rendererPackageName,
    rendererConfig: yr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Tt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = fd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yr.findFiberByHostInstance || xg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ro.isDisabled && Ro.supportsFiber)
    try {
      (Ui = Ro.inject(Mg)), (yt = Ro);
    } catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kg;
Ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!cs(t)) throw Error(O(200));
  return Eg(e, t, null, n);
};
Ge.createRoot = function (e, t) {
  if (!cs(e)) throw Error(O(299));
  var n = !1,
    o = "",
    r = Hp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    (t = us(e, 1, !1, null, null, n, !1, o, r)),
    (e[Lt] = t.current),
    Qr(e.nodeType === 8 ? e.parentNode : e),
    new ss(t)
  );
};
Ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = fd(t)), (e = e === null ? null : e.stateNode), e;
};
Ge.flushSync = function (e) {
  return Cn(e);
};
Ge.hydrate = function (e, t, n) {
  if (!nl(t)) throw Error(O(200));
  return rl(null, e, t, !0, n);
};
Ge.hydrateRoot = function (e, t, n) {
  if (!cs(e)) throw Error(O(405));
  var o = (n != null && n.hydratedSources) || null,
    r = !1,
    i = "",
    l = Hp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Up(t, null, e, 1, n ?? null, r, !1, i, l)),
    (e[Lt] = t.current),
    Qr(e),
    o)
  )
    for (e = 0; e < o.length; e++)
      (n = o[e]),
        (r = n._getVersion),
        (r = r(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, r])
          : t.mutableSourceEagerHydrationData.push(n, r);
  return new tl(t);
};
Ge.render = function (e, t, n) {
  if (!nl(t)) throw Error(O(200));
  return rl(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function (e) {
  if (!nl(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (Cn(function () {
        rl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Lt] = null);
        });
      }),
      !0)
    : !1;
};
Ge.unstable_batchedUpdates = rs;
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, o) {
  if (!nl(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return rl(e, t, n, !1, o);
};
Ge.version = "18.2.0-next-9e3b772b8-20220608";
function Wp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wp);
    } catch (e) {
      console.error(e);
    }
}
Wp(), (Uf.exports = Ge);
var fs = Uf.exports;
const Vt = ao(fs);
var zc = fs;
(lu.createRoot = zc.createRoot), (lu.hydrateRoot = zc.hydrateRoot);
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function oo() {
  return (
    (oo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }),
    oo.apply(this, arguments)
  );
}
var Ut;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ut || (Ut = {}));
const jc = "popstate";
function Og(e) {
  e === void 0 && (e = {});
  function t(o, r) {
    let { pathname: i, search: l, hash: u } = o.location;
    return Ju(
      "",
      { pathname: i, search: l, hash: u },
      (r.state && r.state.usr) || null,
      (r.state && r.state.key) || "default",
    );
  }
  function n(o, r) {
    return typeof r == "string" ? r : Di(r);
  }
  return Lg(t, n, null, e);
}
function ae(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ds(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Pg() {
  return Math.random().toString(36).substr(2, 8);
}
function Vc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ju(e, t, n, o) {
  return (
    n === void 0 && (n = null),
    oo(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ur(t) : t,
      { state: n, key: (t && t.key) || o || Pg() },
    )
  );
}
function Di(e) {
  let { pathname: t = "/", search: n = "", hash: o = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    o && o !== "#" && (t += o.charAt(0) === "#" ? o : "#" + o),
    t
  );
}
function ur(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let o = e.indexOf("?");
    o >= 0 && ((t.search = e.substr(o)), (e = e.substr(0, o))),
      e && (t.pathname = e);
  }
  return t;
}
function Lg(e, t, n, o) {
  o === void 0 && (o = {});
  let { window: r = document.defaultView, v5Compat: i = !1 } = o,
    l = r.history,
    u = Ut.Pop,
    a = null,
    s = c();
  s == null && ((s = 0), l.replaceState(oo({}, l.state, { idx: s }), ""));
  function c() {
    return (l.state || { idx: null }).idx;
  }
  function f() {
    u = Ut.Pop;
    let w = c(),
      d = w == null ? null : w - s;
    (s = w), a && a({ action: u, location: g.location, delta: d });
  }
  function m(w, d) {
    u = Ut.Push;
    let p = Ju(g.location, w, d);
    n && n(p, w), (s = c() + 1);
    let h = Vc(p, s),
      E = g.createHref(p);
    try {
      l.pushState(h, "", E);
    } catch (_) {
      if (_ instanceof DOMException && _.name === "DataCloneError") throw _;
      r.location.assign(E);
    }
    i && a && a({ action: u, location: g.location, delta: 1 });
  }
  function y(w, d) {
    u = Ut.Replace;
    let p = Ju(g.location, w, d);
    n && n(p, w), (s = c());
    let h = Vc(p, s),
      E = g.createHref(p);
    l.replaceState(h, "", E),
      i && a && a({ action: u, location: g.location, delta: 0 });
  }
  function v(w) {
    let d = r.location.origin !== "null" ? r.location.origin : r.location.href,
      p = typeof w == "string" ? w : Di(w);
    return (
      ae(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          p,
      ),
      new URL(p, d)
    );
  }
  let g = {
    get action() {
      return u;
    },
    get location() {
      return e(r, l);
    },
    listen(w) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        r.addEventListener(jc, f),
        (a = w),
        () => {
          r.removeEventListener(jc, f), (a = null);
        }
      );
    },
    createHref(w) {
      return t(r, w);
    },
    createURL: v,
    encodeLocation(w) {
      let d = v(w);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: m,
    replace: y,
    go(w) {
      return l.go(w);
    },
  };
  return g;
}
var $c;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})($c || ($c = {}));
function bg(e, t, n) {
  n === void 0 && (n = "/");
  let o = typeof t == "string" ? ur(t) : t,
    r = ps(o.pathname || "/", n);
  if (r == null) return null;
  let i = Kp(e);
  Dg(i);
  let l = null;
  for (let u = 0; l == null && u < i.length; ++u) l = Vg(i[u], Ug(r));
  return l;
}
function Kp(e, t, n, o) {
  t === void 0 && (t = []), n === void 0 && (n = []), o === void 0 && (o = "");
  let r = (i, l, u) => {
    let a = {
      relativePath: u === void 0 ? i.path || "" : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (ae(
        a.relativePath.startsWith(o),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + o + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (a.relativePath = a.relativePath.slice(o.length)));
    let s = Jt([o, a.relativePath]),
      c = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (ae(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".'),
      ),
      Kp(i.children, t, c, s)),
      !(i.path == null && !i.index) &&
        t.push({ path: s, score: zg(s, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, l) => {
      var u;
      if (i.path === "" || !((u = i.path) != null && u.includes("?"))) r(i, l);
      else for (let a of Gp(i.path)) r(i, l, a);
    }),
    t
  );
}
function Gp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...o] = t,
    r = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (o.length === 0) return r ? [i, ""] : [i];
  let l = Gp(o.join("/")),
    u = [];
  return (
    u.push(...l.map((a) => (a === "" ? i : [i, a].join("/")))),
    r && u.push(...l),
    u.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Dg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : jg(
          t.routesMeta.map((o) => o.childrenIndex),
          n.routesMeta.map((o) => o.childrenIndex),
        ),
  );
}
const Tg = /^:\w+$/,
  Ig = 3,
  Fg = 2,
  Rg = 1,
  Ag = 10,
  Ng = -2,
  Bc = (e) => e === "*";
function zg(e, t) {
  let n = e.split("/"),
    o = n.length;
  return (
    n.some(Bc) && (o += Ng),
    t && (o += Fg),
    n
      .filter((r) => !Bc(r))
      .reduce((r, i) => r + (Tg.test(i) ? Ig : i === "" ? Rg : Ag), o)
  );
}
function jg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((o, r) => o === t[r])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Vg(e, t) {
  let { routesMeta: n } = e,
    o = {},
    r = "/",
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let u = n[l],
      a = l === n.length - 1,
      s = r === "/" ? t : t.slice(r.length) || "/",
      c = $g(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        s,
      );
    if (!c) return null;
    Object.assign(o, c.params);
    let f = u.route;
    i.push({
      params: o,
      pathname: Jt([r, c.pathname]),
      pathnameBase: Gg(Jt([r, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (r = Jt([r, c.pathnameBase]));
  }
  return i;
}
function $g(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, o] = Bg(e.path, e.caseSensitive, e.end),
    r = t.match(n);
  if (!r) return null;
  let i = r[0],
    l = i.replace(/(.)\/+$/, "$1"),
    u = r.slice(1);
  return {
    params: o.reduce((s, c, f) => {
      if (c === "*") {
        let m = u[f] || "";
        l = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return (s[c] = Hg(u[f] || "", c)), s;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function Bg(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ds(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let o = [],
    r =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (l, u) => (o.push(u), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (o.push("*"),
        (r += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (r += "\\/*$")
      : e !== "" && e !== "/" && (r += "(?:(?=\\/|$))"),
    [new RegExp(r, t ? void 0 : "i"), o]
  );
}
function Ug(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      ds(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Hg(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      ds(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ")."),
      ),
      e
    );
  }
}
function ps(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    o = e.charAt(n);
  return o && o !== "/" ? null : e.slice(n) || "/";
}
function Wg(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: o = "",
    hash: r = "",
  } = typeof e == "string" ? ur(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Kg(n, t)) : t,
    search: Zg(o),
    hash: Qg(r),
  };
}
function Kg(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((r) => {
      r === ".." ? n.length > 1 && n.pop() : r !== "." && n.push(r);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Kl(e, t, n, o) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(o) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Zp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Qp(e, t, n, o) {
  o === void 0 && (o = !1);
  let r;
  typeof e == "string"
    ? (r = ur(e))
    : ((r = oo({}, e)),
      ae(
        !r.pathname || !r.pathname.includes("?"),
        Kl("?", "pathname", "search", r),
      ),
      ae(
        !r.pathname || !r.pathname.includes("#"),
        Kl("#", "pathname", "hash", r),
      ),
      ae(!r.search || !r.search.includes("#"), Kl("#", "search", "hash", r)));
  let i = e === "" || r.pathname === "",
    l = i ? "/" : r.pathname,
    u;
  if (o || l == null) u = n;
  else {
    let f = t.length - 1;
    if (l.startsWith("..")) {
      let m = l.split("/");
      for (; m[0] === ".."; ) m.shift(), (f -= 1);
      r.pathname = m.join("/");
    }
    u = f >= 0 ? t[f] : "/";
  }
  let a = Wg(r, u),
    s = l && l !== "/" && l.endsWith("/"),
    c = (i || l === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (s || c) && (a.pathname += "/"), a;
}
const Jt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Gg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Zg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Qg = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Yg(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Yp = ["post", "put", "patch", "delete"];
new Set(Yp);
const Xg = ["get", ...Yp];
new Set(Xg);
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ti() {
  return (
    (Ti = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }),
    Ti.apply(this, arguments)
  );
}
const hs = S.createContext(null),
  qg = S.createContext(null),
  ar = S.createContext(null),
  ol = S.createContext(null),
  _n = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Xp = S.createContext(null);
function Jg(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  mo() || ae(!1);
  let { basename: o, navigator: r } = S.useContext(ar),
    { hash: i, pathname: l, search: u } = Jp(e, { relative: n }),
    a = l;
  return (
    o !== "/" && (a = l === "/" ? o : Jt([o, l])),
    r.createHref({ pathname: a, search: u, hash: i })
  );
}
function mo() {
  return S.useContext(ol) != null;
}
function vo() {
  return mo() || ae(!1), S.useContext(ol).location;
}
function qp(e) {
  S.useContext(ar).static || S.useLayoutEffect(e);
}
function e0() {
  let { isDataRoute: e } = S.useContext(_n);
  return e ? p0() : t0();
}
function t0() {
  mo() || ae(!1);
  let e = S.useContext(hs),
    { basename: t, navigator: n } = S.useContext(ar),
    { matches: o } = S.useContext(_n),
    { pathname: r } = vo(),
    i = JSON.stringify(Zp(o).map((a) => a.pathnameBase)),
    l = S.useRef(!1);
  return (
    qp(() => {
      l.current = !0;
    }),
    S.useCallback(
      function (a, s) {
        if ((s === void 0 && (s = {}), !l.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let c = Qp(a, JSON.parse(i), r, s.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : Jt([t, c.pathname])),
          (s.replace ? n.replace : n.push)(c, s.state, s);
      },
      [t, n, i, r, e],
    )
  );
}
function Jp(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: o } = S.useContext(_n),
    { pathname: r } = vo(),
    i = JSON.stringify(Zp(o).map((l) => l.pathnameBase));
  return S.useMemo(() => Qp(e, JSON.parse(i), r, n === "path"), [e, i, r, n]);
}
function n0(e, t) {
  return r0(e, t);
}
function r0(e, t, n) {
  mo() || ae(!1);
  let { navigator: o } = S.useContext(ar),
    { matches: r } = S.useContext(_n),
    i = r[r.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let a = vo(),
    s;
  if (t) {
    var c;
    let g = typeof t == "string" ? ur(t) : t;
    u === "/" || ((c = g.pathname) != null && c.startsWith(u)) || ae(!1),
      (s = g);
  } else s = a;
  let f = s.pathname || "/",
    m = u === "/" ? f : f.slice(u.length) || "/",
    y = bg(e, { pathname: m }),
    v = a0(
      y &&
        y.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, l, g.params),
            pathname: Jt([
              u,
              o.encodeLocation
                ? o.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? u
                : Jt([
                    u,
                    o.encodeLocation
                      ? o.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          }),
        ),
      r,
      n,
    );
  return t && v
    ? S.createElement(
        ol.Provider,
        {
          value: {
            location: Ti(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s,
            ),
            navigationType: Ut.Pop,
          },
        },
        v,
      )
    : v;
}
function o0() {
  let e = d0(),
    t = Yg(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: r }, n) : null,
    i,
  );
}
const i0 = S.createElement(o0, null);
class l0 extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error
      ? S.createElement(
          _n.Provider,
          { value: this.props.routeContext },
          S.createElement(Xp.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function u0(e) {
  let { routeContext: t, match: n, children: o } = e,
    r = S.useContext(hs);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(_n.Provider, { value: t }, o)
  );
}
function a0(e, t, n) {
  var o;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var r;
    if ((r = n) != null && r.errors) e = n.matches;
    else return null;
  }
  let i = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let u = i.findIndex(
      (a) => a.route.id && (l == null ? void 0 : l[a.route.id]),
    );
    u >= 0 || ae(!1), (i = i.slice(0, Math.min(i.length, u + 1)));
  }
  return i.reduceRight((u, a, s) => {
    let c = a.route.id ? (l == null ? void 0 : l[a.route.id]) : null,
      f = null;
    n && (f = a.route.errorElement || i0);
    let m = t.concat(i.slice(0, s + 1)),
      y = () => {
        let v;
        return (
          c
            ? (v = f)
            : a.route.Component
            ? (v = S.createElement(a.route.Component, null))
            : a.route.element
            ? (v = a.route.element)
            : (v = u),
          S.createElement(u0, {
            match: a,
            routeContext: { outlet: u, matches: m, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || s === 0)
      ? S.createElement(l0, {
          location: n.location,
          revalidation: n.revalidation,
          component: f,
          error: c,
          children: y(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var eh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(eh || {}),
  Ii = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ii || {});
function s0(e) {
  let t = S.useContext(hs);
  return t || ae(!1), t;
}
function c0(e) {
  let t = S.useContext(qg);
  return t || ae(!1), t;
}
function f0(e) {
  let t = S.useContext(_n);
  return t || ae(!1), t;
}
function th(e) {
  let t = f0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ae(!1), n.route.id;
}
function d0() {
  var e;
  let t = S.useContext(Xp),
    n = c0(Ii.UseRouteError),
    o = th(Ii.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[o]);
}
function p0() {
  let { router: e } = s0(eh.UseNavigateStable),
    t = th(Ii.UseNavigateStable),
    n = S.useRef(!1);
  return (
    qp(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (r, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof r == "number"
              ? e.navigate(r)
              : e.navigate(r, Ti({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
function Pn(e) {
  ae(!1);
}
function h0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: o,
    navigationType: r = Ut.Pop,
    navigator: i,
    static: l = !1,
  } = e;
  mo() && ae(!1);
  let u = t.replace(/^\/*/, "/"),
    a = S.useMemo(() => ({ basename: u, navigator: i, static: l }), [u, i, l]);
  typeof o == "string" && (o = ur(o));
  let {
      pathname: s = "/",
      search: c = "",
      hash: f = "",
      state: m = null,
      key: y = "default",
    } = o,
    v = S.useMemo(() => {
      let g = ps(s, u);
      return g == null
        ? null
        : {
            location: { pathname: g, search: c, hash: f, state: m, key: y },
            navigationType: r,
          };
    }, [u, s, c, f, m, y, r]);
  return v == null
    ? null
    : S.createElement(
        ar.Provider,
        { value: a },
        S.createElement(ol.Provider, { children: n, value: v }),
      );
}
function m0(e) {
  let { children: t, location: n } = e;
  return n0(ea(t), n);
}
new Promise(() => {});
function ea(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (o, r) => {
      if (!S.isValidElement(o)) return;
      let i = [...t, r];
      if (o.type === S.Fragment) {
        n.push.apply(n, ea(o.props.children, i));
        return;
      }
      o.type !== Pn && ae(!1), !o.props.index || !o.props.children || ae(!1);
      let l = {
        id: o.props.id || i.join("-"),
        caseSensitive: o.props.caseSensitive,
        element: o.props.element,
        Component: o.props.Component,
        index: o.props.index,
        path: o.props.path,
        loader: o.props.loader,
        action: o.props.action,
        errorElement: o.props.errorElement,
        ErrorBoundary: o.props.ErrorBoundary,
        hasErrorBoundary:
          o.props.ErrorBoundary != null || o.props.errorElement != null,
        shouldRevalidate: o.props.shouldRevalidate,
        handle: o.props.handle,
        lazy: o.props.lazy,
      };
      o.props.children && (l.children = ea(o.props.children, i)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ta() {
  return (
    (ta = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }),
    ta.apply(this, arguments)
  );
}
function v0(e, t) {
  if (e == null) return {};
  var n = {},
    o = Object.keys(e),
    r,
    i;
  for (i = 0; i < o.length; i++)
    (r = o[i]), !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function g0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function y0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !g0(e);
}
const w0 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  C0 = "startTransition",
  Uc = iu[C0];
function S0(e) {
  let { basename: t, children: n, future: o, window: r } = e,
    i = S.useRef();
  i.current == null && (i.current = Og({ window: r, v5Compat: !0 }));
  let l = i.current,
    [u, a] = S.useState({ action: l.action, location: l.location }),
    { v7_startTransition: s } = o || {},
    c = S.useCallback(
      (f) => {
        s && Uc ? Uc(() => a(f)) : a(f);
      },
      [a, s],
    );
  return (
    S.useLayoutEffect(() => l.listen(c), [l, c]),
    S.createElement(h0, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: l,
    })
  );
}
const E0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  x0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Nt = S.forwardRef(function (t, n) {
    let {
        onClick: o,
        relative: r,
        reloadDocument: i,
        replace: l,
        state: u,
        target: a,
        to: s,
        preventScrollReset: c,
      } = t,
      f = v0(t, w0),
      { basename: m } = S.useContext(ar),
      y,
      v = !1;
    if (typeof s == "string" && x0.test(s) && ((y = s), E0))
      try {
        let p = new URL(window.location.href),
          h = s.startsWith("//") ? new URL(p.protocol + s) : new URL(s),
          E = ps(h.pathname, m);
        h.origin === p.origin && E != null
          ? (s = E + h.search + h.hash)
          : (v = !0);
      } catch {}
    let g = Jg(s, { relative: r }),
      w = _0(s, {
        replace: l,
        state: u,
        target: a,
        preventScrollReset: c,
        relative: r,
      });
    function d(p) {
      o && o(p), p.defaultPrevented || w(p);
    }
    return S.createElement(
      "a",
      ta({}, f, { href: y || g, onClick: v || i ? o : d, ref: n, target: a }),
    );
  });
var Hc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(Hc || (Hc = {}));
var Wc;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Wc || (Wc = {}));
function _0(e, t) {
  let {
      target: n,
      replace: o,
      state: r,
      preventScrollReset: i,
      relative: l,
    } = t === void 0 ? {} : t,
    u = e0(),
    a = vo(),
    s = Jp(e, { relative: l });
  return S.useCallback(
    (c) => {
      if (y0(c, n)) {
        c.preventDefault();
        let f = o !== void 0 ? o : Di(a) === Di(s);
        u(e, { replace: f, state: r, preventScrollReset: i, relative: l });
      }
    },
    [a, u, s, o, r, n, e, i, l],
  );
}
function k0() {
  return M.jsxs("div", {
    className:
      "dark:bg-gunmetal-300 dark:text-gunmetal-900 text-gunmetal h-full pt-12 mb-auto",
    children: [
      M.jsxs("div", {
        className: "justify-center text-center",
        children: [
          M.jsx("p", {
            className:
              "text-6xl sm:text-8xl font-bold bg-gradient-to-t from-hot_pink-300 via-persian_pink to-tickle_me_pink text-transparent bg-clip-text mb-2",
            children: "Petinder",
          }),
          M.jsx("p", {
            className:
              " italic text-2xl font-bold text-gunmetal dark:text-gunmetal-800",
            children: '"Encuentra tu compañero ideal!"',
          }),
        ],
      }),
      M.jsxs("div", {
        className: "h-full pb-32",
        children: [
          M.jsxs("div", {
            className:
              "flex flex-col justify-center mx-auto md:justify-start md:flex-row items-center mt-24",
            children: [
              M.jsx("img", {
                src: "/img/family-dog.jpg",
                className:
                  " w-2/5 min-w-[300px] md:min-w-[325px] rounded-xl mx-16 border-hot_pink bo",
              }),
              M.jsxs("div", {
                className:
                  "inline text-center md:text-left align-middle items-center mx-10",
                children: [
                  M.jsx("p", {
                    className: "text-6xl font-semibold mb-5",
                    children: "¿Quienes Somos?",
                  }),
                  M.jsx("p", {
                    className: "text-2xl max-w-xl",
                    children:
                      "Somos una fundacion comprometida con la noble causa de reunir a las personas con sus leales compañeros peludos perdidos, y de darles una segunda oportunidad a las almas indefensas que han sufrido el flagelo del maltrato. ",
                  }),
                ],
              }),
            ],
          }),
          M.jsxs("div", {
            className:
              "justify-end flex md:flex-row flex-col-reverse items-center mt-24",
            children: [
              M.jsxs("div", {
                className:
                  "inline text-center md:text-left align-middle items-center mx-10",
                children: [
                  M.jsx("p", {
                    className: "text-6xl font-semibold mb-5",
                    children: "Nuestro Misión",
                  }),
                  M.jsx("p", {
                    className: "text-2xl max-w-xl",
                    children:
                      "Nuestro misión trasciende más allá de las fronteras digitales, ya que también establezco vínculos con refugios y organizaciones dedicadas al bienestar animal en la región caribeña.",
                  }),
                ],
              }),
              M.jsx("img", {
                src: "/img/dog-smiling.jpg",
                className:
                  " w-2/5 min-w-[300px] md:min-w-[325px] rounded-xl mx-16 border-hot_pink",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Sn(e) {
  "@babel/helpers - typeof";
  return (
    (Sn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Sn(e)
  );
}
function M0(e, t) {
  if (Sn(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t || "default");
    if (Sn(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nh(e) {
  var t = M0(e, "string");
  return Sn(t) === "symbol" ? t : String(t);
}
function Lr(e, t, n) {
  return (
    (t = nh(t)),
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
function Kc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      n.push.apply(n, o);
  }
  return n;
}
function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kc(Object(n), !0).forEach(function (o) {
          Lr(e, o, n[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Kc(Object(n)).forEach(function (o) {
          Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
        });
  }
  return e;
}
function O0(e) {
  if (Array.isArray(e)) return e;
}
function P0(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var o,
      r,
      i,
      l,
      u = [],
      a = !0,
      s = !1;
    try {
      if (((i = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        a = !1;
      } else
        for (
          ;
          !(a = (o = i.call(n)).done) && (u.push(o.value), u.length !== t);
          a = !0
        );
    } catch (c) {
      (s = !0), (r = c);
    } finally {
      try {
        if (!a && n.return != null && ((l = n.return()), Object(l) !== l))
          return;
      } finally {
        if (s) throw r;
      }
    }
    return u;
  }
}
function na(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function rh(e, t) {
  if (e) {
    if (typeof e == "string") return na(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return na(e, t);
  }
}
function L0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ot(e, t) {
  return O0(e) || P0(e, t) || rh(e, t) || L0();
}
function b0(e, t) {
  if (e == null) return {};
  var n = {},
    o = Object.keys(e),
    r,
    i;
  for (i = 0; i < o.length; i++)
    (r = o[i]), !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function It(e, t) {
  if (e == null) return {};
  var n = b0(e, t),
    o,
    r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      (o = i[r]),
        !(t.indexOf(o) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, o) &&
          (n[o] = e[o]);
  }
  return n;
}
var D0 = [
  "defaultInputValue",
  "defaultMenuIsOpen",
  "defaultValue",
  "inputValue",
  "menuIsOpen",
  "onChange",
  "onInputChange",
  "onMenuClose",
  "onMenuOpen",
  "value",
];
function T0(e) {
  var t = e.defaultInputValue,
    n = t === void 0 ? "" : t,
    o = e.defaultMenuIsOpen,
    r = o === void 0 ? !1 : o,
    i = e.defaultValue,
    l = i === void 0 ? null : i,
    u = e.inputValue,
    a = e.menuIsOpen,
    s = e.onChange,
    c = e.onInputChange,
    f = e.onMenuClose,
    m = e.onMenuOpen,
    y = e.value,
    v = It(e, D0),
    g = S.useState(u !== void 0 ? u : n),
    w = Ot(g, 2),
    d = w[0],
    p = w[1],
    h = S.useState(a !== void 0 ? a : r),
    E = Ot(h, 2),
    _ = E[0],
    C = E[1],
    x = S.useState(y !== void 0 ? y : l),
    k = Ot(x, 2),
    F = k[0],
    L = k[1],
    $ = S.useCallback(
      function (P, R) {
        typeof s == "function" && s(P, R), L(P);
      },
      [s],
    ),
    G = S.useCallback(
      function (P, R) {
        var N;
        typeof c == "function" && (N = c(P, R)), p(N !== void 0 ? N : P);
      },
      [c],
    ),
    Se = S.useCallback(
      function () {
        typeof m == "function" && m(), C(!0);
      },
      [m],
    ),
    re = S.useCallback(
      function () {
        typeof f == "function" && f(), C(!1);
      },
      [f],
    ),
    ie = u !== void 0 ? u : d,
    Pe = a !== void 0 ? a : _,
    Re = y !== void 0 ? y : F;
  return T(
    T({}, v),
    {},
    {
      inputValue: ie,
      menuIsOpen: Pe,
      onChange: $,
      onInputChange: G,
      onMenuClose: re,
      onMenuOpen: Se,
      value: Re,
    },
  );
}
function A() {
  return (
    (A = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }),
    A.apply(this, arguments)
  );
}
function I0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gc(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      "value" in o && (o.writable = !0),
      Object.defineProperty(e, nh(o.key), o);
  }
}
function F0(e, t, n) {
  return (
    t && Gc(e.prototype, t),
    n && Gc(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ra(e, t) {
  return (
    (ra = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (o, r) {
          return (o.__proto__ = r), o;
        }),
    ra(e, t)
  );
}
function R0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ra(e, t);
}
function Fi(e) {
  return (
    (Fi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Fi(e)
  );
}
function A0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function N0(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function z0(e, t) {
  if (t && (Sn(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return N0(e);
}
function j0(e) {
  var t = A0();
  return function () {
    var o = Fi(e),
      r;
    if (t) {
      var i = Fi(this).constructor;
      r = Reflect.construct(o, arguments, i);
    } else r = o.apply(this, arguments);
    return z0(this, r);
  };
}
function V0(e) {
  if (Array.isArray(e)) return na(e);
}
function $0(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function B0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oh(e) {
  return V0(e) || $0(e) || rh(e) || B0();
}
function U0(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function H0(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var W0 = (function () {
    function e(n) {
      var o = this;
      (this._insertTag = function (r) {
        var i;
        o.tags.length === 0
          ? o.insertionPoint
            ? (i = o.insertionPoint.nextSibling)
            : o.prepend
            ? (i = o.container.firstChild)
            : (i = o.before)
          : (i = o.tags[o.tags.length - 1].nextSibling),
          o.container.insertBefore(r, i),
          o.tags.push(r);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (o) {
        o.forEach(this._insertTag);
      }),
      (t.insert = function (o) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(H0(this));
        var r = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = U0(r);
          try {
            i.insertRule(o, i.cssRules.length);
          } catch {}
        } else r.appendChild(document.createTextNode(o));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (o) {
          return o.parentNode && o.parentNode.removeChild(o);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  ke = "-ms-",
  Ri = "-moz-",
  B = "-webkit-",
  ih = "comm",
  ms = "rule",
  vs = "decl",
  K0 = "@import",
  lh = "@keyframes",
  G0 = "@layer",
  Z0 = Math.abs,
  il = String.fromCharCode,
  Q0 = Object.assign;
function Y0(e, t) {
  return ye(e, 0) ^ 45
    ? (((((((t << 2) ^ ye(e, 0)) << 2) ^ ye(e, 1)) << 2) ^ ye(e, 2)) << 2) ^
        ye(e, 3)
    : 0;
}
function uh(e) {
  return e.trim();
}
function X0(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function U(e, t, n) {
  return e.replace(t, n);
}
function oa(e, t) {
  return e.indexOf(t);
}
function ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function io(e, t, n) {
  return e.slice(t, n);
}
function mt(e) {
  return e.length;
}
function gs(e) {
  return e.length;
}
function Ao(e, t) {
  return t.push(e), e;
}
function q0(e, t) {
  return e.map(t).join("");
}
var ll = 1,
  rr = 1,
  ah = 0,
  $e = 0,
  le = 0,
  sr = "";
function ul(e, t, n, o, r, i, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: o,
    props: r,
    children: i,
    line: ll,
    column: rr,
    length: l,
    return: "",
  };
}
function wr(e, t) {
  return Q0(ul("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function J0() {
  return le;
}
function e1() {
  return (
    (le = $e > 0 ? ye(sr, --$e) : 0), rr--, le === 10 && ((rr = 1), ll--), le
  );
}
function We() {
  return (
    (le = $e < ah ? ye(sr, $e++) : 0), rr++, le === 10 && ((rr = 1), ll++), le
  );
}
function Ct() {
  return ye(sr, $e);
}
function ni() {
  return $e;
}
function go(e, t) {
  return io(sr, e, t);
}
function lo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function sh(e) {
  return (ll = rr = 1), (ah = mt((sr = e))), ($e = 0), [];
}
function ch(e) {
  return (sr = ""), e;
}
function ri(e) {
  return uh(go($e - 1, ia(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function t1(e) {
  for (; (le = Ct()) && le < 33; ) We();
  return lo(e) > 2 || lo(le) > 3 ? "" : " ";
}
function n1(e, t) {
  for (
    ;
    --t &&
    We() &&
    !(le < 48 || le > 102 || (le > 57 && le < 65) || (le > 70 && le < 97));

  );
  return go(e, ni() + (t < 6 && Ct() == 32 && We() == 32));
}
function ia(e) {
  for (; We(); )
    switch (le) {
      case e:
        return $e;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ia(le);
        break;
      case 40:
        e === 41 && ia(e);
        break;
      case 92:
        We();
        break;
    }
  return $e;
}
function r1(e, t) {
  for (; We() && e + le !== 47 + 10; )
    if (e + le === 42 + 42 && Ct() === 47) break;
  return "/*" + go(t, $e - 1) + "*" + il(e === 47 ? e : We());
}
function o1(e) {
  for (; !lo(Ct()); ) We();
  return go(e, $e);
}
function i1(e) {
  return ch(oi("", null, null, null, [""], (e = sh(e)), 0, [0], e));
}
function oi(e, t, n, o, r, i, l, u, a) {
  for (
    var s = 0,
      c = 0,
      f = l,
      m = 0,
      y = 0,
      v = 0,
      g = 1,
      w = 1,
      d = 1,
      p = 0,
      h = "",
      E = r,
      _ = i,
      C = o,
      x = h;
    w;

  )
    switch (((v = p), (p = We()))) {
      case 40:
        if (v != 108 && ye(x, f - 1) == 58) {
          oa((x += U(ri(p), "&", "&\f")), "&\f") != -1 && (d = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += ri(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += t1(v);
        break;
      case 92:
        x += n1(ni() - 1, 7);
        continue;
      case 47:
        switch (Ct()) {
          case 42:
          case 47:
            Ao(l1(r1(We(), ni()), t, n), a);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * g:
        u[s++] = mt(x) * d;
      case 125 * g:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            w = 0;
          case 59 + c:
            d == -1 && (x = U(x, /\f/g, "")),
              y > 0 &&
                mt(x) - f &&
                Ao(
                  y > 32
                    ? Qc(x + ";", o, n, f - 1)
                    : Qc(U(x, " ", "") + ";", o, n, f - 2),
                  a,
                );
            break;
          case 59:
            x += ";";
          default:
            if (
              (Ao((C = Zc(x, t, n, s, c, r, u, h, (E = []), (_ = []), f)), i),
              p === 123)
            )
              if (c === 0) oi(x, t, C, C, E, i, f, u, _);
              else
                switch (m === 99 && ye(x, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    oi(
                      e,
                      C,
                      C,
                      o && Ao(Zc(e, C, C, 0, 0, r, u, h, r, (E = []), f), _),
                      r,
                      _,
                      f,
                      u,
                      o ? E : _,
                    );
                    break;
                  default:
                    oi(x, C, C, C, [""], _, 0, u, _);
                }
        }
        (s = c = y = 0), (g = d = 1), (h = x = ""), (f = l);
        break;
      case 58:
        (f = 1 + mt(x)), (y = v);
      default:
        if (g < 1) {
          if (p == 123) --g;
          else if (p == 125 && g++ == 0 && e1() == 125) continue;
        }
        switch (((x += il(p)), p * g)) {
          case 38:
            d = c > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            (u[s++] = (mt(x) - 1) * d), (d = 1);
            break;
          case 64:
            Ct() === 45 && (x += ri(We())),
              (m = Ct()),
              (c = f = mt((h = x += o1(ni())))),
              p++;
            break;
          case 45:
            v === 45 && mt(x) == 2 && (g = 0);
        }
    }
  return i;
}
function Zc(e, t, n, o, r, i, l, u, a, s, c) {
  for (
    var f = r - 1, m = r === 0 ? i : [""], y = gs(m), v = 0, g = 0, w = 0;
    v < o;
    ++v
  )
    for (var d = 0, p = io(e, f + 1, (f = Z0((g = l[v])))), h = e; d < y; ++d)
      (h = uh(g > 0 ? m[d] + " " + p : U(p, /&\f/g, m[d]))) && (a[w++] = h);
  return ul(e, t, n, r === 0 ? ms : u, a, s, c);
}
function l1(e, t, n) {
  return ul(e, t, n, ih, il(J0()), io(e, 2, -2), 0);
}
function Qc(e, t, n, o) {
  return ul(e, t, n, vs, io(e, 0, o), io(e, o + 1, -1), o);
}
function Zn(e, t) {
  for (var n = "", o = gs(e), r = 0; r < o; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function u1(e, t, n, o) {
  switch (e.type) {
    case G0:
      if (e.children.length) break;
    case K0:
    case vs:
      return (e.return = e.return || e.value);
    case ih:
      return "";
    case lh:
      return (e.return = e.value + "{" + Zn(e.children, o) + "}");
    case ms:
      e.value = e.props.join(",");
  }
  return mt((n = Zn(e.children, o)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function a1(e) {
  var t = gs(e);
  return function (n, o, r, i) {
    for (var l = "", u = 0; u < t; u++) l += e[u](n, o, r, i) || "";
    return l;
  };
}
function s1(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function c1(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var f1 = function (t, n, o) {
    for (
      var r = 0, i = 0;
      (r = i), (i = Ct()), r === 38 && i === 12 && (n[o] = 1), !lo(i);

    )
      We();
    return go(t, $e);
  },
  d1 = function (t, n) {
    var o = -1,
      r = 44;
    do
      switch (lo(r)) {
        case 0:
          r === 38 && Ct() === 12 && (n[o] = 1), (t[o] += f1($e - 1, n, o));
          break;
        case 2:
          t[o] += ri(r);
          break;
        case 4:
          if (r === 44) {
            (t[++o] = Ct() === 58 ? "&\f" : ""), (n[o] = t[o].length);
            break;
          }
        default:
          t[o] += il(r);
      }
    while ((r = We()));
    return t;
  },
  p1 = function (t, n) {
    return ch(d1(sh(t), n));
  },
  Yc = new WeakMap(),
  h1 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          o = t.parent,
          r = t.column === o.column && t.line === o.line;
        o.type !== "rule";

      )
        if (((o = o.parent), !o)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Yc.get(o)) &&
        !r
      ) {
        Yc.set(t, !0);
        for (
          var i = [], l = p1(n, i), u = o.props, a = 0, s = 0;
          a < l.length;
          a++
        )
          for (var c = 0; c < u.length; c++, s++)
            t.props[s] = i[a] ? l[a].replace(/&\f/g, u[c]) : u[c] + " " + l[a];
      }
    }
  },
  m1 = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function fh(e, t) {
  switch (Y0(e, t)) {
    case 5103:
      return B + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return B + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return B + e + Ri + e + ke + e + e;
    case 6828:
    case 4268:
      return B + e + ke + e + e;
    case 6165:
      return B + e + ke + "flex-" + e + e;
    case 5187:
      return (
        B + e + U(e, /(\w+).+(:[^]+)/, B + "box-$1$2" + ke + "flex-$1$2") + e
      );
    case 5443:
      return B + e + ke + "flex-item-" + U(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        B +
        e +
        ke +
        "flex-line-pack" +
        U(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return B + e + ke + U(e, "shrink", "negative") + e;
    case 5292:
      return B + e + ke + U(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        B +
        "box-" +
        U(e, "-grow", "") +
        B +
        e +
        ke +
        U(e, "grow", "positive") +
        e
      );
    case 4554:
      return B + U(e, /([^-])(transform)/g, "$1" + B + "$2") + e;
    case 6187:
      return (
        U(U(U(e, /(zoom-|grab)/, B + "$1"), /(image-set)/, B + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return U(e, /(image-set\([^]*)/, B + "$1$`$1");
    case 4968:
      return (
        U(
          U(e, /(.+:)(flex-)?(.*)/, B + "box-pack:$3" + ke + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        B +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return U(e, /(.+)-inline(.+)/, B + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (mt(e) - 1 - t > 6)
        switch (ye(e, t + 1)) {
          case 109:
            if (ye(e, t + 4) !== 45) break;
          case 102:
            return (
              U(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  B +
                  "$2-$3$1" +
                  Ri +
                  (ye(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~oa(e, "stretch")
              ? fh(U(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (ye(e, t + 1) !== 115) break;
    case 6444:
      switch (ye(e, mt(e) - 3 - (~oa(e, "!important") && 10))) {
        case 107:
          return U(e, ":", ":" + B) + e;
        case 101:
          return (
            U(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                B +
                (ye(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                B +
                "$2$3$1" +
                ke +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (ye(e, t + 11)) {
        case 114:
          return B + e + ke + U(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return B + e + ke + U(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return B + e + ke + U(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return B + e + ke + e + e;
  }
  return e;
}
var v1 = function (t, n, o, r) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case vs:
          t.return = fh(t.value, t.length);
          break;
        case lh:
          return Zn([wr(t, { value: U(t.value, "@", "@" + B) })], r);
        case ms:
          if (t.length)
            return q0(t.props, function (i) {
              switch (X0(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Zn(
                    [wr(t, { props: [U(i, /:(read-\w+)/, ":" + Ri + "$1")] })],
                    r,
                  );
                case "::placeholder":
                  return Zn(
                    [
                      wr(t, {
                        props: [U(i, /:(plac\w+)/, ":" + B + "input-$1")],
                      }),
                      wr(t, { props: [U(i, /:(plac\w+)/, ":" + Ri + "$1")] }),
                      wr(t, { props: [U(i, /:(plac\w+)/, ke + "input-$1")] }),
                    ],
                    r,
                  );
              }
              return "";
            });
      }
  },
  g1 = [v1],
  y1 = function (t) {
    var n = t.key;
    if (n === "css") {
      var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(o, function (g) {
        var w = g.getAttribute("data-emotion");
        w.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var r = t.stylisPlugins || g1,
      i = {},
      l,
      u = [];
    (l = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var w = g.getAttribute("data-emotion").split(" "), d = 1;
            d < w.length;
            d++
          )
            i[w[d]] = !0;
          u.push(g);
        },
      );
    var a,
      s = [h1, m1];
    {
      var c,
        f = [
          u1,
          s1(function (g) {
            c.insert(g);
          }),
        ],
        m = a1(s.concat(r, f)),
        y = function (w) {
          return Zn(i1(w), m);
        };
      a = function (w, d, p, h) {
        (c = p),
          y(w ? w + "{" + d.styles + "}" : d.styles),
          h && (v.inserted[d.name] = !0);
      };
    }
    var v = {
      key: n,
      sheet: new W0({
        key: n,
        container: l,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: a,
    };
    return v.sheet.hydrate(u), v;
  },
  dh = { exports: {} },
  K = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ve = typeof Symbol == "function" && Symbol.for,
  ys = ve ? Symbol.for("react.element") : 60103,
  ws = ve ? Symbol.for("react.portal") : 60106,
  al = ve ? Symbol.for("react.fragment") : 60107,
  sl = ve ? Symbol.for("react.strict_mode") : 60108,
  cl = ve ? Symbol.for("react.profiler") : 60114,
  fl = ve ? Symbol.for("react.provider") : 60109,
  dl = ve ? Symbol.for("react.context") : 60110,
  Cs = ve ? Symbol.for("react.async_mode") : 60111,
  pl = ve ? Symbol.for("react.concurrent_mode") : 60111,
  hl = ve ? Symbol.for("react.forward_ref") : 60112,
  ml = ve ? Symbol.for("react.suspense") : 60113,
  w1 = ve ? Symbol.for("react.suspense_list") : 60120,
  vl = ve ? Symbol.for("react.memo") : 60115,
  gl = ve ? Symbol.for("react.lazy") : 60116,
  C1 = ve ? Symbol.for("react.block") : 60121,
  S1 = ve ? Symbol.for("react.fundamental") : 60117,
  E1 = ve ? Symbol.for("react.responder") : 60118,
  x1 = ve ? Symbol.for("react.scope") : 60119;
function Qe(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ys:
        switch (((e = e.type), e)) {
          case Cs:
          case pl:
          case al:
          case cl:
          case sl:
          case ml:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case dl:
              case hl:
              case gl:
              case vl:
              case fl:
                return e;
              default:
                return t;
            }
        }
      case ws:
        return t;
    }
  }
}
function ph(e) {
  return Qe(e) === pl;
}
K.AsyncMode = Cs;
K.ConcurrentMode = pl;
K.ContextConsumer = dl;
K.ContextProvider = fl;
K.Element = ys;
K.ForwardRef = hl;
K.Fragment = al;
K.Lazy = gl;
K.Memo = vl;
K.Portal = ws;
K.Profiler = cl;
K.StrictMode = sl;
K.Suspense = ml;
K.isAsyncMode = function (e) {
  return ph(e) || Qe(e) === Cs;
};
K.isConcurrentMode = ph;
K.isContextConsumer = function (e) {
  return Qe(e) === dl;
};
K.isContextProvider = function (e) {
  return Qe(e) === fl;
};
K.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === ys;
};
K.isForwardRef = function (e) {
  return Qe(e) === hl;
};
K.isFragment = function (e) {
  return Qe(e) === al;
};
K.isLazy = function (e) {
  return Qe(e) === gl;
};
K.isMemo = function (e) {
  return Qe(e) === vl;
};
K.isPortal = function (e) {
  return Qe(e) === ws;
};
K.isProfiler = function (e) {
  return Qe(e) === cl;
};
K.isStrictMode = function (e) {
  return Qe(e) === sl;
};
K.isSuspense = function (e) {
  return Qe(e) === ml;
};
K.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === al ||
    e === pl ||
    e === cl ||
    e === sl ||
    e === ml ||
    e === w1 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === gl ||
        e.$$typeof === vl ||
        e.$$typeof === fl ||
        e.$$typeof === dl ||
        e.$$typeof === hl ||
        e.$$typeof === S1 ||
        e.$$typeof === E1 ||
        e.$$typeof === x1 ||
        e.$$typeof === C1))
  );
};
K.typeOf = Qe;
dh.exports = K;
var _1 = dh.exports,
  hh = _1,
  k1 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  M1 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  mh = {};
mh[hh.ForwardRef] = k1;
mh[hh.Memo] = M1;
var O1 = !0;
function P1(e, t, n) {
  var o = "";
  return (
    n.split(" ").forEach(function (r) {
      e[r] !== void 0 ? t.push(e[r] + ";") : (o += r + " ");
    }),
    o
  );
}
var vh = function (t, n, o) {
    var r = t.key + "-" + n.name;
    (o === !1 || O1 === !1) &&
      t.registered[r] === void 0 &&
      (t.registered[r] = n.styles);
  },
  L1 = function (t, n, o) {
    vh(t, n, o);
    var r = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + r : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function b1(e) {
  for (var t = 0, n, o = 0, r = e.length; r >= 4; ++o, r -= 4)
    (n =
      (e.charCodeAt(o) & 255) |
      ((e.charCodeAt(++o) & 255) << 8) |
      ((e.charCodeAt(++o) & 255) << 16) |
      ((e.charCodeAt(++o) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (r) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(o) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var D1 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  T1 = /[A-Z]|^ms/g,
  I1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  gh = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Xc = function (t) {
    return t != null && typeof t != "boolean";
  },
  Gl = c1(function (e) {
    return gh(e) ? e : e.replace(T1, "-$&").toLowerCase();
  }),
  qc = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(I1, function (o, r, i) {
            return (vt = { name: r, styles: i, next: vt }), r;
          });
    }
    return D1[t] !== 1 && !gh(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function uo(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (vt = { name: n.name, styles: n.styles, next: vt }), n.name;
      if (n.styles !== void 0) {
        var o = n.next;
        if (o !== void 0)
          for (; o !== void 0; )
            (vt = { name: o.name, styles: o.styles, next: vt }), (o = o.next);
        var r = n.styles + ";";
        return r;
      }
      return F1(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = vt,
          l = n(e);
        return (vt = i), uo(e, t, l);
      }
      break;
    }
  }
  if (t == null) return n;
  var u = t[n];
  return u !== void 0 ? u : n;
}
function F1(e, t, n) {
  var o = "";
  if (Array.isArray(n))
    for (var r = 0; r < n.length; r++) o += uo(e, t, n[r]) + ";";
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != "object")
        t != null && t[l] !== void 0
          ? (o += i + "{" + t[l] + "}")
          : Xc(l) && (o += Gl(i) + ":" + qc(i, l) + ";");
      else if (
        Array.isArray(l) &&
        typeof l[0] == "string" &&
        (t == null || t[l[0]] === void 0)
      )
        for (var u = 0; u < l.length; u++)
          Xc(l[u]) && (o += Gl(i) + ":" + qc(i, l[u]) + ";");
      else {
        var a = uo(e, t, l);
        switch (i) {
          case "animation":
          case "animationName": {
            o += Gl(i) + ":" + a + ";";
            break;
          }
          default:
            o += i + "{" + a + "}";
        }
      }
    }
  return o;
}
var Jc = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  vt,
  yh = function (t, n, o) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var r = !0,
      i = "";
    vt = void 0;
    var l = t[0];
    l == null || l.raw === void 0
      ? ((r = !1), (i += uo(o, n, l)))
      : (i += l[0]);
    for (var u = 1; u < t.length; u++) (i += uo(o, n, t[u])), r && (i += l[u]);
    Jc.lastIndex = 0;
    for (var a = "", s; (s = Jc.exec(i)) !== null; ) a += "-" + s[1];
    var c = b1(i) + a;
    return { name: c, styles: i, next: vt };
  },
  R1 = function (t) {
    return t();
  },
  A1 = iu["useInsertionEffect"] ? iu["useInsertionEffect"] : !1,
  N1 = A1 || R1,
  Ss = {}.hasOwnProperty,
  wh = S.createContext(typeof HTMLElement < "u" ? y1({ key: "css" }) : null);
wh.Provider;
var z1 = function (t) {
    return S.forwardRef(function (n, o) {
      var r = S.useContext(wh);
      return t(n, r, o);
    });
  },
  j1 = S.createContext({}),
  la = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  V1 = function (t, n) {
    var o = {};
    for (var r in n) Ss.call(n, r) && (o[r] = n[r]);
    return (o[la] = t), o;
  },
  $1 = function (t) {
    var n = t.cache,
      o = t.serialized,
      r = t.isStringTag;
    return (
      vh(n, o, r),
      N1(function () {
        return L1(n, o, r);
      }),
      null
    );
  },
  B1 = z1(function (e, t, n) {
    var o = e.css;
    typeof o == "string" && t.registered[o] !== void 0 && (o = t.registered[o]);
    var r = e[la],
      i = [o],
      l = "";
    typeof e.className == "string"
      ? (l = P1(t.registered, i, e.className))
      : e.className != null && (l = e.className + " ");
    var u = yh(i, void 0, S.useContext(j1));
    l += t.key + "-" + u.name;
    var a = {};
    for (var s in e) Ss.call(e, s) && s !== "css" && s !== la && (a[s] = e[s]);
    return (
      (a.ref = n),
      (a.className = l),
      S.createElement(
        S.Fragment,
        null,
        S.createElement($1, {
          cache: t,
          serialized: u,
          isStringTag: typeof r == "string",
        }),
        S.createElement(r, a),
      )
    );
  }),
  U1 = B1,
  I = function (t, n) {
    var o = arguments;
    if (n == null || !Ss.call(n, "css"))
      return S.createElement.apply(void 0, o);
    var r = o.length,
      i = new Array(r);
    (i[0] = U1), (i[1] = V1(t, n));
    for (var l = 2; l < r; l++) i[l] = o[l];
    return S.createElement.apply(null, i);
  };
function Es() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return yh(t);
}
var H1 = function () {
  var t = Es.apply(void 0, arguments),
    n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
};
function W1(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
    )
  );
}
const K1 = Math.min,
  G1 = Math.max,
  Ai = Math.round,
  No = Math.floor,
  Ni = (e) => ({ x: e, y: e });
function Z1(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height,
  };
}
function Ch(e) {
  return Eh(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ft(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Sh(e) {
  var t;
  return (t = (Eh(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Eh(e) {
  return e instanceof Node || e instanceof ft(e).Node;
}
function ua(e) {
  return e instanceof Element || e instanceof ft(e).Element;
}
function xs(e) {
  return e instanceof HTMLElement || e instanceof ft(e).HTMLElement;
}
function ef(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ft(e).ShadowRoot;
}
function xh(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: r } = _s(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + o + n) &&
    !["inline", "contents"].includes(r)
  );
}
function Q1() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Y1(e) {
  return ["html", "body", "#document"].includes(Ch(e));
}
function _s(e) {
  return ft(e).getComputedStyle(e);
}
function X1(e) {
  if (Ch(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (ef(e) && e.host) || Sh(e);
  return ef(t) ? t.host : t;
}
function _h(e) {
  const t = X1(e);
  return Y1(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : xs(t) && xh(t)
    ? t
    : _h(t);
}
function aa(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = _h(e),
    r = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = ft(o);
  return r
    ? t.concat(i, i.visualViewport || [], xh(o) ? o : [])
    : t.concat(o, aa(o));
}
function q1(e) {
  const t = _s(e);
  let n = parseFloat(t.width) || 0,
    o = parseFloat(t.height) || 0;
  const r = xs(e),
    i = r ? e.offsetWidth : n,
    l = r ? e.offsetHeight : o,
    u = Ai(n) !== i || Ai(o) !== l;
  return u && ((n = i), (o = l)), { width: n, height: o, $: u };
}
function ks(e) {
  return ua(e) ? e : e.contextElement;
}
function Zl(e) {
  const t = ks(e);
  if (!xs(t)) return Ni(1);
  const n = t.getBoundingClientRect(),
    { width: o, height: r, $: i } = q1(t);
  let l = (i ? Ai(n.width) : n.width) / o,
    u = (i ? Ai(n.height) : n.height) / r;
  return (
    (!l || !Number.isFinite(l)) && (l = 1),
    (!u || !Number.isFinite(u)) && (u = 1),
    { x: l, y: u }
  );
}
const J1 = Ni(0);
function ey(e) {
  const t = ft(e);
  return !Q1() || !t.visualViewport
    ? J1
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function ty(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== ft(e)) ? !1 : t;
}
function tf(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    i = ks(e);
  let l = Ni(1);
  t && (o ? ua(o) && (l = Zl(o)) : (l = Zl(e)));
  const u = ty(i, n, o) ? ey(i) : Ni(0);
  let a = (r.left + u.x) / l.x,
    s = (r.top + u.y) / l.y,
    c = r.width / l.x,
    f = r.height / l.y;
  if (i) {
    const m = ft(i),
      y = o && ua(o) ? ft(o) : o;
    let v = m.frameElement;
    for (; v && o && y !== m; ) {
      const g = Zl(v),
        w = v.getBoundingClientRect(),
        d = _s(v),
        p = w.left + (v.clientLeft + parseFloat(d.paddingLeft)) * g.x,
        h = w.top + (v.clientTop + parseFloat(d.paddingTop)) * g.y;
      (a *= g.x),
        (s *= g.y),
        (c *= g.x),
        (f *= g.y),
        (a += p),
        (s += h),
        (v = ft(v).frameElement);
    }
  }
  return Z1({ width: c, height: f, x: a, y: s });
}
function ny(e, t) {
  let n = null,
    o;
  const r = Sh(e);
  function i() {
    clearTimeout(o), n && n.disconnect(), (n = null);
  }
  function l(u, a) {
    u === void 0 && (u = !1), a === void 0 && (a = 1), i();
    const { left: s, top: c, width: f, height: m } = e.getBoundingClientRect();
    if ((u || t(), !f || !m)) return;
    const y = No(c),
      v = No(r.clientWidth - (s + f)),
      g = No(r.clientHeight - (c + m)),
      w = No(s),
      p = {
        rootMargin: -y + "px " + -v + "px " + -g + "px " + -w + "px",
        threshold: G1(0, K1(1, a)) || 1,
      };
    let h = !0;
    function E(_) {
      const C = _[0].intersectionRatio;
      if (C !== a) {
        if (!h) return l();
        C
          ? l(!1, C)
          : (o = setTimeout(() => {
              l(!1, 1e-7);
            }, 100));
      }
      h = !1;
    }
    try {
      n = new IntersectionObserver(E, { ...p, root: r.ownerDocument });
    } catch {
      n = new IntersectionObserver(E, p);
    }
    n.observe(e);
  }
  return l(!0), i;
}
function ry(e, t, n, o) {
  o === void 0 && (o = {});
  const {
      ancestorScroll: r = !0,
      ancestorResize: i = !0,
      elementResize: l = typeof ResizeObserver == "function",
      layoutShift: u = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = o,
    s = ks(e),
    c = r || i ? [...(s ? aa(s) : []), ...aa(t)] : [];
  c.forEach((d) => {
    r && d.addEventListener("scroll", n, { passive: !0 }),
      i && d.addEventListener("resize", n);
  });
  const f = s && u ? ny(s, n) : null;
  let m = -1,
    y = null;
  l &&
    ((y = new ResizeObserver((d) => {
      let [p] = d;
      p &&
        p.target === s &&
        y &&
        (y.unobserve(t),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          y && y.observe(t);
        }))),
        n();
    })),
    s && !a && y.observe(s),
    y.observe(t));
  let v,
    g = a ? tf(e) : null;
  a && w();
  function w() {
    const d = tf(e);
    g &&
      (d.x !== g.x ||
        d.y !== g.y ||
        d.width !== g.width ||
        d.height !== g.height) &&
      n(),
      (g = d),
      (v = requestAnimationFrame(w));
  }
  return (
    n(),
    () => {
      c.forEach((d) => {
        r && d.removeEventListener("scroll", n),
          i && d.removeEventListener("resize", n);
      }),
        f && f(),
        y && y.disconnect(),
        (y = null),
        a && cancelAnimationFrame(v);
    }
  );
}
var sa = S.useLayoutEffect,
  oy = [
    "className",
    "clearValue",
    "cx",
    "getStyles",
    "getClassNames",
    "getValue",
    "hasValue",
    "isMulti",
    "isRtl",
    "options",
    "selectOption",
    "selectProps",
    "setValue",
    "theme",
  ],
  zi = function () {};
function iy(e, t) {
  return t ? (t[0] === "-" ? e + t : e + "__" + t) : e;
}
function ly(e, t) {
  for (
    var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), r = 2;
    r < n;
    r++
  )
    o[r - 2] = arguments[r];
  var i = [].concat(o);
  if (t && e)
    for (var l in t) t.hasOwnProperty(l) && t[l] && i.push("".concat(iy(e, l)));
  return i
    .filter(function (u) {
      return u;
    })
    .map(function (u) {
      return String(u).trim();
    })
    .join(" ");
}
var nf = function (t) {
    return my(t)
      ? t.filter(Boolean)
      : Sn(t) === "object" && t !== null
      ? [t]
      : [];
  },
  kh = function (t) {
    t.className,
      t.clearValue,
      t.cx,
      t.getStyles,
      t.getClassNames,
      t.getValue,
      t.hasValue,
      t.isMulti,
      t.isRtl,
      t.options,
      t.selectOption,
      t.selectProps,
      t.setValue,
      t.theme;
    var n = It(t, oy);
    return T({}, n);
  },
  ne = function (t, n, o) {
    var r = t.cx,
      i = t.getStyles,
      l = t.getClassNames,
      u = t.className;
    return { css: i(n, t), className: r(o ?? {}, l(n, t), u) };
  };
function yl(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function uy(e) {
  return yl(e) ? window.innerHeight : e.clientHeight;
}
function Mh(e) {
  return yl(e) ? window.pageYOffset : e.scrollTop;
}
function ji(e, t) {
  if (yl(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function ay(e) {
  var t = getComputedStyle(e),
    n = t.position === "absolute",
    o = /(auto|scroll)/;
  if (t.position === "fixed") return document.documentElement;
  for (var r = e; (r = r.parentElement); )
    if (
      ((t = getComputedStyle(r)),
      !(n && t.position === "static") &&
        o.test(t.overflow + t.overflowY + t.overflowX))
    )
      return r;
  return document.documentElement;
}
function sy(e, t, n, o) {
  return n * ((e = e / o - 1) * e * e + 1) + t;
}
function zo(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200,
    o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : zi,
    r = Mh(e),
    i = t - r,
    l = 10,
    u = 0;
  function a() {
    u += l;
    var s = sy(u, r, i, n);
    ji(e, s), u < n ? window.requestAnimationFrame(a) : o(e);
  }
  a();
}
function rf(e, t) {
  var n = e.getBoundingClientRect(),
    o = t.getBoundingClientRect(),
    r = t.offsetHeight / 3;
  o.bottom + r > n.bottom
    ? ji(
        e,
        Math.min(
          t.offsetTop + t.clientHeight - e.offsetHeight + r,
          e.scrollHeight,
        ),
      )
    : o.top - r < n.top && ji(e, Math.max(t.offsetTop - r, 0));
}
function cy(e) {
  var t = e.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width,
  };
}
function of() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function fy() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  } catch {
    return !1;
  }
}
var Oh = !1,
  dy = {
    get passive() {
      return (Oh = !0);
    },
  },
  jo = typeof window < "u" ? window : {};
jo.addEventListener &&
  jo.removeEventListener &&
  (jo.addEventListener("p", zi, dy), jo.removeEventListener("p", zi, !1));
var py = Oh;
function hy(e) {
  return e != null;
}
function my(e) {
  return Array.isArray(e);
}
function Vo(e, t, n) {
  return e ? t : n;
}
var vy = function (t) {
    for (
      var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1;
      r < n;
      r++
    )
      o[r - 1] = arguments[r];
    var i = Object.entries(t).filter(function (l) {
      var u = Ot(l, 1),
        a = u[0];
      return !o.includes(a);
    });
    return i.reduce(function (l, u) {
      var a = Ot(u, 2),
        s = a[0],
        c = a[1];
      return (l[s] = c), l;
    }, {});
  },
  gy = ["children", "innerProps"],
  yy = ["children", "innerProps"];
function wy(e) {
  var t = e.maxHeight,
    n = e.menuEl,
    o = e.minHeight,
    r = e.placement,
    i = e.shouldScroll,
    l = e.isFixedPosition,
    u = e.controlHeight,
    a = ay(n),
    s = { placement: "bottom", maxHeight: t };
  if (!n || !n.offsetParent) return s;
  var c = a.getBoundingClientRect(),
    f = c.height,
    m = n.getBoundingClientRect(),
    y = m.bottom,
    v = m.height,
    g = m.top,
    w = n.offsetParent.getBoundingClientRect(),
    d = w.top,
    p = l ? window.innerHeight : uy(a),
    h = Mh(a),
    E = parseInt(getComputedStyle(n).marginBottom, 10),
    _ = parseInt(getComputedStyle(n).marginTop, 10),
    C = d - _,
    x = p - g,
    k = C + h,
    F = f - h - g,
    L = y - p + h + E,
    $ = h + g - _,
    G = 160;
  switch (r) {
    case "auto":
    case "bottom":
      if (x >= v) return { placement: "bottom", maxHeight: t };
      if (F >= v && !l)
        return i && zo(a, L, G), { placement: "bottom", maxHeight: t };
      if ((!l && F >= o) || (l && x >= o)) {
        i && zo(a, L, G);
        var Se = l ? x - E : F - E;
        return { placement: "bottom", maxHeight: Se };
      }
      if (r === "auto" || l) {
        var re = t,
          ie = l ? C : k;
        return (
          ie >= o && (re = Math.min(ie - E - u, t)),
          { placement: "top", maxHeight: re }
        );
      }
      if (r === "bottom")
        return i && ji(a, L), { placement: "bottom", maxHeight: t };
      break;
    case "top":
      if (C >= v) return { placement: "top", maxHeight: t };
      if (k >= v && !l)
        return i && zo(a, $, G), { placement: "top", maxHeight: t };
      if ((!l && k >= o) || (l && C >= o)) {
        var Pe = t;
        return (
          ((!l && k >= o) || (l && C >= o)) && (Pe = l ? C - _ : k - _),
          i && zo(a, $, G),
          { placement: "top", maxHeight: Pe }
        );
      }
      return { placement: "bottom", maxHeight: t };
    default:
      throw new Error('Invalid placement provided "'.concat(r, '".'));
  }
  return s;
}
function Cy(e) {
  var t = { bottom: "top", top: "bottom" };
  return e ? t[e] : "bottom";
}
var Ph = function (t) {
    return t === "auto" ? "bottom" : t;
  },
  Sy = function (t, n) {
    var o,
      r = t.placement,
      i = t.theme,
      l = i.borderRadius,
      u = i.spacing,
      a = i.colors;
    return T(
      ((o = { label: "menu" }),
      Lr(o, Cy(r), "100%"),
      Lr(o, "position", "absolute"),
      Lr(o, "width", "100%"),
      Lr(o, "zIndex", 1),
      o),
      n
        ? {}
        : {
            backgroundColor: a.neutral0,
            borderRadius: l,
            boxShadow:
              "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
            marginBottom: u.menuGutter,
            marginTop: u.menuGutter,
          },
    );
  },
  Lh = S.createContext(null),
  Ey = function (t) {
    var n = t.children,
      o = t.minMenuHeight,
      r = t.maxMenuHeight,
      i = t.menuPlacement,
      l = t.menuPosition,
      u = t.menuShouldScrollIntoView,
      a = t.theme,
      s = S.useContext(Lh) || {},
      c = s.setPortalPlacement,
      f = S.useRef(null),
      m = S.useState(r),
      y = Ot(m, 2),
      v = y[0],
      g = y[1],
      w = S.useState(null),
      d = Ot(w, 2),
      p = d[0],
      h = d[1],
      E = a.spacing.controlHeight;
    return (
      sa(
        function () {
          var _ = f.current;
          if (_) {
            var C = l === "fixed",
              x = u && !C,
              k = wy({
                maxHeight: r,
                menuEl: _,
                minHeight: o,
                placement: i,
                shouldScroll: x,
                isFixedPosition: C,
                controlHeight: E,
              });
            g(k.maxHeight), h(k.placement), c == null || c(k.placement);
          }
        },
        [r, i, l, u, o, c, E],
      ),
      n({
        ref: f,
        placerProps: T(T({}, t), {}, { placement: p || Ph(i), maxHeight: v }),
      })
    );
  },
  xy = function (t) {
    var n = t.children,
      o = t.innerRef,
      r = t.innerProps;
    return I("div", A({}, ne(t, "menu", { menu: !0 }), { ref: o }, r), n);
  },
  _y = xy,
  ky = function (t, n) {
    var o = t.maxHeight,
      r = t.theme.spacing.baseUnit;
    return T(
      {
        maxHeight: o,
        overflowY: "auto",
        position: "relative",
        WebkitOverflowScrolling: "touch",
      },
      n ? {} : { paddingBottom: r, paddingTop: r },
    );
  },
  My = function (t) {
    var n = t.children,
      o = t.innerProps,
      r = t.innerRef,
      i = t.isMulti;
    return I(
      "div",
      A(
        {},
        ne(t, "menuList", { "menu-list": !0, "menu-list--is-multi": i }),
        { ref: r },
        o,
      ),
      n,
    );
  },
  bh = function (t, n) {
    var o = t.theme,
      r = o.spacing.baseUnit,
      i = o.colors;
    return T(
      { textAlign: "center" },
      n
        ? {}
        : {
            color: i.neutral40,
            padding: "".concat(r * 2, "px ").concat(r * 3, "px"),
          },
    );
  },
  Oy = bh,
  Py = bh,
  Ly = function (t) {
    var n = t.children,
      o = n === void 0 ? "No options" : n,
      r = t.innerProps,
      i = It(t, gy);
    return I(
      "div",
      A(
        {},
        ne(
          T(T({}, i), {}, { children: o, innerProps: r }),
          "noOptionsMessage",
          { "menu-notice": !0, "menu-notice--no-options": !0 },
        ),
        r,
      ),
      o,
    );
  },
  by = function (t) {
    var n = t.children,
      o = n === void 0 ? "Loading..." : n,
      r = t.innerProps,
      i = It(t, yy);
    return I(
      "div",
      A(
        {},
        ne(T(T({}, i), {}, { children: o, innerProps: r }), "loadingMessage", {
          "menu-notice": !0,
          "menu-notice--loading": !0,
        }),
        r,
      ),
      o,
    );
  },
  Dy = function (t) {
    var n = t.rect,
      o = t.offset,
      r = t.position;
    return { left: n.left, position: r, top: o, width: n.width, zIndex: 1 };
  },
  Ty = function (t) {
    var n = t.appendTo,
      o = t.children,
      r = t.controlElement,
      i = t.innerProps,
      l = t.menuPlacement,
      u = t.menuPosition,
      a = S.useRef(null),
      s = S.useRef(null),
      c = S.useState(Ph(l)),
      f = Ot(c, 2),
      m = f[0],
      y = f[1],
      v = S.useMemo(function () {
        return { setPortalPlacement: y };
      }, []),
      g = S.useState(null),
      w = Ot(g, 2),
      d = w[0],
      p = w[1],
      h = S.useCallback(
        function () {
          if (r) {
            var x = cy(r),
              k = u === "fixed" ? 0 : window.pageYOffset,
              F = x[m] + k;
            (F !== (d == null ? void 0 : d.offset) ||
              x.left !== (d == null ? void 0 : d.rect.left) ||
              x.width !== (d == null ? void 0 : d.rect.width)) &&
              p({ offset: F, rect: x });
          }
        },
        [
          r,
          u,
          m,
          d == null ? void 0 : d.offset,
          d == null ? void 0 : d.rect.left,
          d == null ? void 0 : d.rect.width,
        ],
      );
    sa(
      function () {
        h();
      },
      [h],
    );
    var E = S.useCallback(
      function () {
        typeof s.current == "function" && (s.current(), (s.current = null)),
          r &&
            a.current &&
            (s.current = ry(r, a.current, h, {
              elementResize: "ResizeObserver" in window,
            }));
      },
      [r, h],
    );
    sa(
      function () {
        E();
      },
      [E],
    );
    var _ = S.useCallback(
      function (x) {
        (a.current = x), E();
      },
      [E],
    );
    if ((!n && u !== "fixed") || !d) return null;
    var C = I(
      "div",
      A(
        { ref: _ },
        ne(
          T(T({}, t), {}, { offset: d.offset, position: u, rect: d.rect }),
          "menuPortal",
          { "menu-portal": !0 },
        ),
        i,
      ),
      o,
    );
    return I(Lh.Provider, { value: v }, n ? fs.createPortal(C, n) : C);
  },
  Iy = function (t) {
    var n = t.isDisabled,
      o = t.isRtl;
    return {
      label: "container",
      direction: o ? "rtl" : void 0,
      pointerEvents: n ? "none" : void 0,
      position: "relative",
    };
  },
  Fy = function (t) {
    var n = t.children,
      o = t.innerProps,
      r = t.isDisabled,
      i = t.isRtl;
    return I(
      "div",
      A({}, ne(t, "container", { "--is-disabled": r, "--is-rtl": i }), o),
      n,
    );
  },
  Ry = function (t, n) {
    var o = t.theme.spacing,
      r = t.isMulti,
      i = t.hasValue,
      l = t.selectProps.controlShouldRenderValue;
    return T(
      {
        alignItems: "center",
        display: r && i && l ? "flex" : "grid",
        flex: 1,
        flexWrap: "wrap",
        WebkitOverflowScrolling: "touch",
        position: "relative",
        overflow: "hidden",
      },
      n
        ? {}
        : {
            padding: ""
              .concat(o.baseUnit / 2, "px ")
              .concat(o.baseUnit * 2, "px"),
          },
    );
  },
  Ay = function (t) {
    var n = t.children,
      o = t.innerProps,
      r = t.isMulti,
      i = t.hasValue;
    return I(
      "div",
      A(
        {},
        ne(t, "valueContainer", {
          "value-container": !0,
          "value-container--is-multi": r,
          "value-container--has-value": i,
        }),
        o,
      ),
      n,
    );
  },
  Ny = function () {
    return {
      alignItems: "center",
      alignSelf: "stretch",
      display: "flex",
      flexShrink: 0,
    };
  },
  zy = function (t) {
    var n = t.children,
      o = t.innerProps;
    return I(
      "div",
      A({}, ne(t, "indicatorsContainer", { indicators: !0 }), o),
      n,
    );
  },
  lf,
  jy = ["size"],
  Vy = ["innerProps", "isRtl", "size"],
  $y = {
    name: "8mmkcg",
    styles:
      "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0",
  },
  Dh = function (t) {
    var n = t.size,
      o = It(t, jy);
    return I(
      "svg",
      A(
        {
          height: n,
          width: n,
          viewBox: "0 0 20 20",
          "aria-hidden": "true",
          focusable: "false",
          css: $y,
        },
        o,
      ),
    );
  },
  Ms = function (t) {
    return I(
      Dh,
      A({ size: 20 }, t),
      I("path", {
        d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z",
      }),
    );
  },
  Th = function (t) {
    return I(
      Dh,
      A({ size: 20 }, t),
      I("path", {
        d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z",
      }),
    );
  },
  Ih = function (t, n) {
    var o = t.isFocused,
      r = t.theme,
      i = r.spacing.baseUnit,
      l = r.colors;
    return T(
      {
        label: "indicatorContainer",
        display: "flex",
        transition: "color 150ms",
      },
      n
        ? {}
        : {
            color: o ? l.neutral60 : l.neutral20,
            padding: i * 2,
            ":hover": { color: o ? l.neutral80 : l.neutral40 },
          },
    );
  },
  By = Ih,
  Uy = function (t) {
    var n = t.children,
      o = t.innerProps;
    return I(
      "div",
      A(
        {},
        ne(t, "dropdownIndicator", { indicator: !0, "dropdown-indicator": !0 }),
        o,
      ),
      n || I(Th, null),
    );
  },
  Hy = Ih,
  Wy = function (t) {
    var n = t.children,
      o = t.innerProps;
    return I(
      "div",
      A(
        {},
        ne(t, "clearIndicator", { indicator: !0, "clear-indicator": !0 }),
        o,
      ),
      n || I(Ms, null),
    );
  },
  Ky = function (t, n) {
    var o = t.isDisabled,
      r = t.theme,
      i = r.spacing.baseUnit,
      l = r.colors;
    return T(
      { label: "indicatorSeparator", alignSelf: "stretch", width: 1 },
      n
        ? {}
        : {
            backgroundColor: o ? l.neutral10 : l.neutral20,
            marginBottom: i * 2,
            marginTop: i * 2,
          },
    );
  },
  Gy = function (t) {
    var n = t.innerProps;
    return I(
      "span",
      A({}, n, ne(t, "indicatorSeparator", { "indicator-separator": !0 })),
    );
  },
  Zy = H1(
    lf ||
      (lf = W1([
        `
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`,
      ])),
  ),
  Qy = function (t, n) {
    var o = t.isFocused,
      r = t.size,
      i = t.theme,
      l = i.colors,
      u = i.spacing.baseUnit;
    return T(
      {
        label: "loadingIndicator",
        display: "flex",
        transition: "color 150ms",
        alignSelf: "center",
        fontSize: r,
        lineHeight: 1,
        marginRight: r,
        textAlign: "center",
        verticalAlign: "middle",
      },
      n ? {} : { color: o ? l.neutral60 : l.neutral20, padding: u * 2 },
    );
  },
  Ql = function (t) {
    var n = t.delay,
      o = t.offset;
    return I("span", {
      css: Es(
        {
          animation: ""
            .concat(Zy, " 1s ease-in-out ")
            .concat(n, "ms infinite;"),
          backgroundColor: "currentColor",
          borderRadius: "1em",
          display: "inline-block",
          marginLeft: o ? "1em" : void 0,
          height: "1em",
          verticalAlign: "top",
          width: "1em",
        },
        "",
        "",
      ),
    });
  },
  Yy = function (t) {
    var n = t.innerProps,
      o = t.isRtl,
      r = t.size,
      i = r === void 0 ? 4 : r,
      l = It(t, Vy);
    return I(
      "div",
      A(
        {},
        ne(
          T(T({}, l), {}, { innerProps: n, isRtl: o, size: i }),
          "loadingIndicator",
          { indicator: !0, "loading-indicator": !0 },
        ),
        n,
      ),
      I(Ql, { delay: 0, offset: o }),
      I(Ql, { delay: 160, offset: !0 }),
      I(Ql, { delay: 320, offset: !o }),
    );
  },
  Xy = function (t, n) {
    var o = t.isDisabled,
      r = t.isFocused,
      i = t.theme,
      l = i.colors,
      u = i.borderRadius,
      a = i.spacing;
    return T(
      {
        label: "control",
        alignItems: "center",
        cursor: "default",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        minHeight: a.controlHeight,
        outline: "0 !important",
        position: "relative",
        transition: "all 100ms",
      },
      n
        ? {}
        : {
            backgroundColor: o ? l.neutral5 : l.neutral0,
            borderColor: o ? l.neutral10 : r ? l.primary : l.neutral20,
            borderRadius: u,
            borderStyle: "solid",
            borderWidth: 1,
            boxShadow: r ? "0 0 0 1px ".concat(l.primary) : void 0,
            "&:hover": { borderColor: r ? l.primary : l.neutral30 },
          },
    );
  },
  qy = function (t) {
    var n = t.children,
      o = t.isDisabled,
      r = t.isFocused,
      i = t.innerRef,
      l = t.innerProps,
      u = t.menuIsOpen;
    return I(
      "div",
      A(
        { ref: i },
        ne(t, "control", {
          control: !0,
          "control--is-disabled": o,
          "control--is-focused": r,
          "control--menu-is-open": u,
        }),
        l,
      ),
      n,
    );
  },
  Jy = qy,
  ew = ["data"],
  tw = function (t, n) {
    var o = t.theme.spacing;
    return n
      ? {}
      : { paddingBottom: o.baseUnit * 2, paddingTop: o.baseUnit * 2 };
  },
  nw = function (t) {
    var n = t.children,
      o = t.cx,
      r = t.getStyles,
      i = t.getClassNames,
      l = t.Heading,
      u = t.headingProps,
      a = t.innerProps,
      s = t.label,
      c = t.theme,
      f = t.selectProps;
    return I(
      "div",
      A({}, ne(t, "group", { group: !0 }), a),
      I(
        l,
        A({}, u, {
          selectProps: f,
          theme: c,
          getStyles: r,
          getClassNames: i,
          cx: o,
        }),
        s,
      ),
      I("div", null, n),
    );
  },
  rw = function (t, n) {
    var o = t.theme,
      r = o.colors,
      i = o.spacing;
    return T(
      { label: "group", cursor: "default", display: "block" },
      n
        ? {}
        : {
            color: r.neutral40,
            fontSize: "75%",
            fontWeight: 500,
            marginBottom: "0.25em",
            paddingLeft: i.baseUnit * 3,
            paddingRight: i.baseUnit * 3,
            textTransform: "uppercase",
          },
    );
  },
  ow = function (t) {
    var n = kh(t);
    n.data;
    var o = It(n, ew);
    return I("div", A({}, ne(t, "groupHeading", { "group-heading": !0 }), o));
  },
  iw = nw,
  lw = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
  uw = function (t, n) {
    var o = t.isDisabled,
      r = t.value,
      i = t.theme,
      l = i.spacing,
      u = i.colors;
    return T(
      T(
        {
          visibility: o ? "hidden" : "visible",
          transform: r ? "translateZ(0)" : "",
        },
        aw,
      ),
      n
        ? {}
        : {
            margin: l.baseUnit / 2,
            paddingBottom: l.baseUnit / 2,
            paddingTop: l.baseUnit / 2,
            color: u.neutral80,
          },
    );
  },
  Fh = {
    gridArea: "1 / 2",
    font: "inherit",
    minWidth: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0,
  },
  aw = {
    flex: "1 1 auto",
    display: "inline-grid",
    gridArea: "1 / 1 / 2 / 3",
    gridTemplateColumns: "0 min-content",
    "&:after": T(
      {
        content: 'attr(data-value) " "',
        visibility: "hidden",
        whiteSpace: "pre",
      },
      Fh,
    ),
  },
  sw = function (t) {
    return T(
      {
        label: "input",
        color: "inherit",
        background: 0,
        opacity: t ? 0 : 1,
        width: "100%",
      },
      Fh,
    );
  },
  cw = function (t) {
    var n = t.cx,
      o = t.value,
      r = kh(t),
      i = r.innerRef,
      l = r.isDisabled,
      u = r.isHidden,
      a = r.inputClassName,
      s = It(r, lw);
    return I(
      "div",
      A({}, ne(t, "input", { "input-container": !0 }), {
        "data-value": o || "",
      }),
      I(
        "input",
        A(
          { className: n({ input: !0 }, a), ref: i, style: sw(u), disabled: l },
          s,
        ),
      ),
    );
  },
  fw = cw,
  dw = function (t, n) {
    var o = t.theme,
      r = o.spacing,
      i = o.borderRadius,
      l = o.colors;
    return T(
      { label: "multiValue", display: "flex", minWidth: 0 },
      n
        ? {}
        : {
            backgroundColor: l.neutral10,
            borderRadius: i / 2,
            margin: r.baseUnit / 2,
          },
    );
  },
  pw = function (t, n) {
    var o = t.theme,
      r = o.borderRadius,
      i = o.colors,
      l = t.cropWithEllipsis;
    return T(
      {
        overflow: "hidden",
        textOverflow: l || l === void 0 ? "ellipsis" : void 0,
        whiteSpace: "nowrap",
      },
      n
        ? {}
        : {
            borderRadius: r / 2,
            color: i.neutral80,
            fontSize: "85%",
            padding: 3,
            paddingLeft: 6,
          },
    );
  },
  hw = function (t, n) {
    var o = t.theme,
      r = o.spacing,
      i = o.borderRadius,
      l = o.colors,
      u = t.isFocused;
    return T(
      { alignItems: "center", display: "flex" },
      n
        ? {}
        : {
            borderRadius: i / 2,
            backgroundColor: u ? l.dangerLight : void 0,
            paddingLeft: r.baseUnit,
            paddingRight: r.baseUnit,
            ":hover": { backgroundColor: l.dangerLight, color: l.danger },
          },
    );
  },
  Rh = function (t) {
    var n = t.children,
      o = t.innerProps;
    return I("div", o, n);
  },
  mw = Rh,
  vw = Rh;
function gw(e) {
  var t = e.children,
    n = e.innerProps;
  return I("div", A({ role: "button" }, n), t || I(Ms, { size: 14 }));
}
var yw = function (t) {
    var n = t.children,
      o = t.components,
      r = t.data,
      i = t.innerProps,
      l = t.isDisabled,
      u = t.removeProps,
      a = t.selectProps,
      s = o.Container,
      c = o.Label,
      f = o.Remove;
    return I(
      s,
      {
        data: r,
        innerProps: T(
          T(
            {},
            ne(t, "multiValue", {
              "multi-value": !0,
              "multi-value--is-disabled": l,
            }),
          ),
          i,
        ),
        selectProps: a,
      },
      I(
        c,
        {
          data: r,
          innerProps: T(
            {},
            ne(t, "multiValueLabel", { "multi-value__label": !0 }),
          ),
          selectProps: a,
        },
        n,
      ),
      I(f, {
        data: r,
        innerProps: T(
          T({}, ne(t, "multiValueRemove", { "multi-value__remove": !0 })),
          {},
          { "aria-label": "Remove ".concat(n || "option") },
          u,
        ),
        selectProps: a,
      }),
    );
  },
  ww = yw,
  Cw = function (t, n) {
    var o = t.isDisabled,
      r = t.isFocused,
      i = t.isSelected,
      l = t.theme,
      u = l.spacing,
      a = l.colors;
    return T(
      {
        label: "option",
        cursor: "default",
        display: "block",
        fontSize: "inherit",
        width: "100%",
        userSelect: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      },
      n
        ? {}
        : {
            backgroundColor: i ? a.primary : r ? a.primary25 : "transparent",
            color: o ? a.neutral20 : i ? a.neutral0 : "inherit",
            padding: ""
              .concat(u.baseUnit * 2, "px ")
              .concat(u.baseUnit * 3, "px"),
            ":active": {
              backgroundColor: o ? void 0 : i ? a.primary : a.primary50,
            },
          },
    );
  },
  Sw = function (t) {
    var n = t.children,
      o = t.isDisabled,
      r = t.isFocused,
      i = t.isSelected,
      l = t.innerRef,
      u = t.innerProps;
    return I(
      "div",
      A(
        {},
        ne(t, "option", {
          option: !0,
          "option--is-disabled": o,
          "option--is-focused": r,
          "option--is-selected": i,
        }),
        { ref: l, "aria-disabled": o },
        u,
      ),
      n,
    );
  },
  Ew = Sw,
  xw = function (t, n) {
    var o = t.theme,
      r = o.spacing,
      i = o.colors;
    return T(
      { label: "placeholder", gridArea: "1 / 1 / 2 / 3" },
      n
        ? {}
        : {
            color: i.neutral50,
            marginLeft: r.baseUnit / 2,
            marginRight: r.baseUnit / 2,
          },
    );
  },
  _w = function (t) {
    var n = t.children,
      o = t.innerProps;
    return I("div", A({}, ne(t, "placeholder", { placeholder: !0 }), o), n);
  },
  kw = _w,
  Mw = function (t, n) {
    var o = t.isDisabled,
      r = t.theme,
      i = r.spacing,
      l = r.colors;
    return T(
      {
        label: "singleValue",
        gridArea: "1 / 1 / 2 / 3",
        maxWidth: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      n
        ? {}
        : {
            color: o ? l.neutral40 : l.neutral80,
            marginLeft: i.baseUnit / 2,
            marginRight: i.baseUnit / 2,
          },
    );
  },
  Ow = function (t) {
    var n = t.children,
      o = t.isDisabled,
      r = t.innerProps;
    return I(
      "div",
      A(
        {},
        ne(t, "singleValue", {
          "single-value": !0,
          "single-value--is-disabled": o,
        }),
        r,
      ),
      n,
    );
  },
  Pw = Ow,
  Lw = {
    ClearIndicator: Wy,
    Control: Jy,
    DropdownIndicator: Uy,
    DownChevron: Th,
    CrossIcon: Ms,
    Group: iw,
    GroupHeading: ow,
    IndicatorsContainer: zy,
    IndicatorSeparator: Gy,
    Input: fw,
    LoadingIndicator: Yy,
    Menu: _y,
    MenuList: My,
    MenuPortal: Ty,
    LoadingMessage: by,
    NoOptionsMessage: Ly,
    MultiValue: ww,
    MultiValueContainer: mw,
    MultiValueLabel: vw,
    MultiValueRemove: gw,
    Option: Ew,
    Placeholder: kw,
    SelectContainer: Fy,
    SingleValue: Pw,
    ValueContainer: Ay,
  },
  bw = function (t) {
    return T(T({}, Lw), t.components);
  },
  uf =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function Dw(e, t) {
  return !!(e === t || (uf(e) && uf(t)));
}
function Tw(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (!Dw(e[n], t[n])) return !1;
  return !0;
}
function Iw(e, t) {
  t === void 0 && (t = Tw);
  var n = null;
  function o() {
    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
    if (n && n.lastThis === this && t(r, n.lastArgs)) return n.lastResult;
    var l = e.apply(this, r);
    return (n = { lastResult: l, lastArgs: r, lastThis: this }), l;
  }
  return (
    (o.clear = function () {
      n = null;
    }),
    o
  );
}
var Fw = {
    name: "7pg0cj-a11yText",
    styles:
      "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap",
  },
  Rw = function (t) {
    return I("span", A({ css: Fw }, t));
  },
  af = Rw,
  Aw = {
    guidance: function (t) {
      var n = t.isSearchable,
        o = t.isMulti,
        r = t.isDisabled,
        i = t.tabSelectsValue,
        l = t.context;
      switch (l) {
        case "menu":
          return "Use Up and Down to choose options"
            .concat(
              r ? "" : ", press Enter to select the currently focused option",
              ", press Escape to exit the menu",
            )
            .concat(
              i ? ", press Tab to select the option and exit the menu" : "",
              ".",
            );
        case "input":
          return ""
            .concat(t["aria-label"] || "Select", " is focused ")
            .concat(
              n ? ",type to refine list" : "",
              ", press Down to open the menu, ",
            )
            .concat(o ? " press left to focus selected values" : "");
        case "value":
          return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
        default:
          return "";
      }
    },
    onChange: function (t) {
      var n = t.action,
        o = t.label,
        r = o === void 0 ? "" : o,
        i = t.labels,
        l = t.isDisabled;
      switch (n) {
        case "deselect-option":
        case "pop-value":
        case "remove-value":
          return "option ".concat(r, ", deselected.");
        case "clear":
          return "All selected options have been cleared.";
        case "initial-input-focus":
          return "option"
            .concat(i.length > 1 ? "s" : "", " ")
            .concat(i.join(","), ", selected.");
        case "select-option":
          return l
            ? "option ".concat(r, " is disabled. Select another option.")
            : "option ".concat(r, ", selected.");
        default:
          return "";
      }
    },
    onFocus: function (t) {
      var n = t.context,
        o = t.focused,
        r = t.options,
        i = t.label,
        l = i === void 0 ? "" : i,
        u = t.selectValue,
        a = t.isDisabled,
        s = t.isSelected,
        c = function (v, g) {
          return v && v.length
            ? "".concat(v.indexOf(g) + 1, " of ").concat(v.length)
            : "";
        };
      if (n === "value" && u)
        return "value ".concat(l, " focused, ").concat(c(u, o), ".");
      if (n === "menu") {
        var f = a ? " disabled" : "",
          m = "".concat(s ? "selected" : "focused").concat(f);
        return "option ".concat(l, " ").concat(m, ", ").concat(c(r, o), ".");
      }
      return "";
    },
    onFilter: function (t) {
      var n = t.inputValue,
        o = t.resultsMessage;
      return "".concat(o).concat(n ? " for search term " + n : "", ".");
    },
  },
  Nw = function (t) {
    var n = t.ariaSelection,
      o = t.focusedOption,
      r = t.focusedValue,
      i = t.focusableOptions,
      l = t.isFocused,
      u = t.selectValue,
      a = t.selectProps,
      s = t.id,
      c = a.ariaLiveMessages,
      f = a.getOptionLabel,
      m = a.inputValue,
      y = a.isMulti,
      v = a.isOptionDisabled,
      g = a.isSearchable,
      w = a.menuIsOpen,
      d = a.options,
      p = a.screenReaderStatus,
      h = a.tabSelectsValue,
      E = a["aria-label"],
      _ = a["aria-live"],
      C = S.useMemo(
        function () {
          return T(T({}, Aw), c || {});
        },
        [c],
      ),
      x = S.useMemo(
        function () {
          var re = "";
          if (n && C.onChange) {
            var ie = n.option,
              Pe = n.options,
              Re = n.removedValue,
              P = n.removedValues,
              R = n.value,
              N = function (Le) {
                return Array.isArray(Le) ? null : Le;
              },
              H = Re || ie || N(R),
              j = H ? f(H) : "",
              se = Pe || P || void 0,
              Ee = se ? se.map(f) : [],
              Ye = T({ isDisabled: H && v(H, u), label: j, labels: Ee }, n);
            re = C.onChange(Ye);
          }
          return re;
        },
        [n, C, v, u, f],
      ),
      k = S.useMemo(
        function () {
          var re = "",
            ie = o || r,
            Pe = !!(o && u && u.includes(o));
          if (ie && C.onFocus) {
            var Re = {
              focused: ie,
              label: f(ie),
              isDisabled: v(ie, u),
              isSelected: Pe,
              options: i,
              context: ie === o ? "menu" : "value",
              selectValue: u,
            };
            re = C.onFocus(Re);
          }
          return re;
        },
        [o, r, f, v, C, i, u],
      ),
      F = S.useMemo(
        function () {
          var re = "";
          if (w && d.length && C.onFilter) {
            var ie = p({ count: i.length });
            re = C.onFilter({ inputValue: m, resultsMessage: ie });
          }
          return re;
        },
        [i, m, w, C, d, p],
      ),
      L = S.useMemo(
        function () {
          var re = "";
          if (C.guidance) {
            var ie = r ? "value" : w ? "menu" : "input";
            re = C.guidance({
              "aria-label": E,
              context: ie,
              isDisabled: o && v(o, u),
              isMulti: y,
              isSearchable: g,
              tabSelectsValue: h,
            });
          }
          return re;
        },
        [E, o, r, y, v, g, w, C, u, h],
      ),
      $ = "".concat(k, " ").concat(F, " ").concat(L),
      G = I(
        S.Fragment,
        null,
        I("span", { id: "aria-selection" }, x),
        I("span", { id: "aria-context" }, $),
      ),
      Se = (n == null ? void 0 : n.action) === "initial-input-focus";
    return I(
      S.Fragment,
      null,
      I(af, { id: s }, Se && G),
      I(
        af,
        {
          "aria-live": _,
          "aria-atomic": "false",
          "aria-relevant": "additions text",
        },
        l && !Se && G,
      ),
    );
  },
  zw = Nw,
  ca = [
    { base: "A", letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ" },
    { base: "AA", letters: "Ꜳ" },
    { base: "AE", letters: "ÆǼǢ" },
    { base: "AO", letters: "Ꜵ" },
    { base: "AU", letters: "Ꜷ" },
    { base: "AV", letters: "ꜸꜺ" },
    { base: "AY", letters: "Ꜽ" },
    { base: "B", letters: "BⒷＢḂḄḆɃƂƁ" },
    { base: "C", letters: "CⒸＣĆĈĊČÇḈƇȻꜾ" },
    { base: "D", letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ" },
    { base: "DZ", letters: "ǱǄ" },
    { base: "Dz", letters: "ǲǅ" },
    { base: "E", letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ" },
    { base: "F", letters: "FⒻＦḞƑꝻ" },
    { base: "G", letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ" },
    { base: "H", letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ" },
    { base: "I", letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ" },
    { base: "J", letters: "JⒿＪĴɈ" },
    { base: "K", letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ" },
    { base: "L", letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ" },
    { base: "LJ", letters: "Ǉ" },
    { base: "Lj", letters: "ǈ" },
    { base: "M", letters: "MⓂＭḾṀṂⱮƜ" },
    { base: "N", letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ" },
    { base: "NJ", letters: "Ǌ" },
    { base: "Nj", letters: "ǋ" },
    { base: "O", letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ" },
    { base: "OI", letters: "Ƣ" },
    { base: "OO", letters: "Ꝏ" },
    { base: "OU", letters: "Ȣ" },
    { base: "P", letters: "PⓅＰṔṖƤⱣꝐꝒꝔ" },
    { base: "Q", letters: "QⓆＱꝖꝘɊ" },
    { base: "R", letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ" },
    { base: "S", letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ" },
    { base: "T", letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ" },
    { base: "TZ", letters: "Ꜩ" },
    { base: "U", letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ" },
    { base: "V", letters: "VⓋＶṼṾƲꝞɅ" },
    { base: "VY", letters: "Ꝡ" },
    { base: "W", letters: "WⓌＷẀẂŴẆẄẈⱲ" },
    { base: "X", letters: "XⓍＸẊẌ" },
    { base: "Y", letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ" },
    { base: "Z", letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ" },
    { base: "a", letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ" },
    { base: "aa", letters: "ꜳ" },
    { base: "ae", letters: "æǽǣ" },
    { base: "ao", letters: "ꜵ" },
    { base: "au", letters: "ꜷ" },
    { base: "av", letters: "ꜹꜻ" },
    { base: "ay", letters: "ꜽ" },
    { base: "b", letters: "bⓑｂḃḅḇƀƃɓ" },
    { base: "c", letters: "cⓒｃćĉċčçḉƈȼꜿↄ" },
    { base: "d", letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ" },
    { base: "dz", letters: "ǳǆ" },
    { base: "e", letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ" },
    { base: "f", letters: "fⓕｆḟƒꝼ" },
    { base: "g", letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ" },
    { base: "h", letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ" },
    { base: "hv", letters: "ƕ" },
    { base: "i", letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı" },
    { base: "j", letters: "jⓙｊĵǰɉ" },
    { base: "k", letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ" },
    { base: "l", letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ" },
    { base: "lj", letters: "ǉ" },
    { base: "m", letters: "mⓜｍḿṁṃɱɯ" },
    { base: "n", letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ" },
    { base: "nj", letters: "ǌ" },
    { base: "o", letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ" },
    { base: "oi", letters: "ƣ" },
    { base: "ou", letters: "ȣ" },
    { base: "oo", letters: "ꝏ" },
    { base: "p", letters: "pⓟｐṕṗƥᵽꝑꝓꝕ" },
    { base: "q", letters: "qⓠｑɋꝗꝙ" },
    { base: "r", letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ" },
    { base: "s", letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ" },
    { base: "t", letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ" },
    { base: "tz", letters: "ꜩ" },
    { base: "u", letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ" },
    { base: "v", letters: "vⓥｖṽṿʋꝟʌ" },
    { base: "vy", letters: "ꝡ" },
    { base: "w", letters: "wⓦｗẁẃŵẇẅẘẉⱳ" },
    { base: "x", letters: "xⓧｘẋẍ" },
    { base: "y", letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ" },
    { base: "z", letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ" },
  ],
  jw = new RegExp(
    "[" +
      ca
        .map(function (e) {
          return e.letters;
        })
        .join("") +
      "]",
    "g",
  ),
  Ah = {};
for (var Yl = 0; Yl < ca.length; Yl++)
  for (var Xl = ca[Yl], ql = 0; ql < Xl.letters.length; ql++)
    Ah[Xl.letters[ql]] = Xl.base;
var Nh = function (t) {
    return t.replace(jw, function (n) {
      return Ah[n];
    });
  },
  Vw = Iw(Nh),
  sf = function (t) {
    return t.replace(/^\s+|\s+$/g, "");
  },
  $w = function (t) {
    return "".concat(t.label, " ").concat(t.value);
  },
  Bw = function (t) {
    return function (n, o) {
      if (n.data.__isNew__) return !0;
      var r = T(
          {
            ignoreCase: !0,
            ignoreAccents: !0,
            stringify: $w,
            trim: !0,
            matchFrom: "any",
          },
          t,
        ),
        i = r.ignoreCase,
        l = r.ignoreAccents,
        u = r.stringify,
        a = r.trim,
        s = r.matchFrom,
        c = a ? sf(o) : o,
        f = a ? sf(u(n)) : u(n);
      return (
        i && ((c = c.toLowerCase()), (f = f.toLowerCase())),
        l && ((c = Vw(c)), (f = Nh(f))),
        s === "start" ? f.substr(0, c.length) === c : f.indexOf(c) > -1
      );
    };
  },
  Uw = ["innerRef"];
function Hw(e) {
  var t = e.innerRef,
    n = It(e, Uw),
    o = vy(n, "onExited", "in", "enter", "exit", "appear");
  return I(
    "input",
    A({ ref: t }, o, {
      css: Es(
        {
          label: "dummyInput",
          background: 0,
          border: 0,
          caretColor: "transparent",
          fontSize: "inherit",
          gridArea: "1 / 1 / 2 / 3",
          outline: 0,
          padding: 0,
          width: 1,
          color: "transparent",
          left: -100,
          opacity: 0,
          position: "relative",
          transform: "scale(.01)",
        },
        "",
        "",
      ),
    }),
  );
}
var Ww = function (t) {
  t.preventDefault(), t.stopPropagation();
};
function Kw(e) {
  var t = e.isEnabled,
    n = e.onBottomArrive,
    o = e.onBottomLeave,
    r = e.onTopArrive,
    i = e.onTopLeave,
    l = S.useRef(!1),
    u = S.useRef(!1),
    a = S.useRef(0),
    s = S.useRef(null),
    c = S.useCallback(
      function (w, d) {
        if (s.current !== null) {
          var p = s.current,
            h = p.scrollTop,
            E = p.scrollHeight,
            _ = p.clientHeight,
            C = s.current,
            x = d > 0,
            k = E - _ - h,
            F = !1;
          k > d && l.current && (o && o(w), (l.current = !1)),
            x && u.current && (i && i(w), (u.current = !1)),
            x && d > k
              ? (n && !l.current && n(w),
                (C.scrollTop = E),
                (F = !0),
                (l.current = !0))
              : !x &&
                -d > h &&
                (r && !u.current && r(w),
                (C.scrollTop = 0),
                (F = !0),
                (u.current = !0)),
            F && Ww(w);
        }
      },
      [n, o, r, i],
    ),
    f = S.useCallback(
      function (w) {
        c(w, w.deltaY);
      },
      [c],
    ),
    m = S.useCallback(function (w) {
      a.current = w.changedTouches[0].clientY;
    }, []),
    y = S.useCallback(
      function (w) {
        var d = a.current - w.changedTouches[0].clientY;
        c(w, d);
      },
      [c],
    ),
    v = S.useCallback(
      function (w) {
        if (w) {
          var d = py ? { passive: !1 } : !1;
          w.addEventListener("wheel", f, d),
            w.addEventListener("touchstart", m, d),
            w.addEventListener("touchmove", y, d);
        }
      },
      [y, m, f],
    ),
    g = S.useCallback(
      function (w) {
        w &&
          (w.removeEventListener("wheel", f, !1),
          w.removeEventListener("touchstart", m, !1),
          w.removeEventListener("touchmove", y, !1));
      },
      [y, m, f],
    );
  return (
    S.useEffect(
      function () {
        if (t) {
          var w = s.current;
          return (
            v(w),
            function () {
              g(w);
            }
          );
        }
      },
      [t, v, g],
    ),
    function (w) {
      s.current = w;
    }
  );
}
var cf = ["boxSizing", "height", "overflow", "paddingRight", "position"],
  ff = {
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
    height: "100%",
  };
function df(e) {
  e.preventDefault();
}
function pf(e) {
  e.stopPropagation();
}
function hf() {
  var e = this.scrollTop,
    t = this.scrollHeight,
    n = e + this.offsetHeight;
  e === 0 ? (this.scrollTop = 1) : n === t && (this.scrollTop = e - 1);
}
function mf() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var vf = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  Cr = 0,
  Mn = { capture: !1, passive: !1 };
function Gw(e) {
  var t = e.isEnabled,
    n = e.accountForScrollbars,
    o = n === void 0 ? !0 : n,
    r = S.useRef({}),
    i = S.useRef(null),
    l = S.useCallback(
      function (a) {
        if (vf) {
          var s = document.body,
            c = s && s.style;
          if (
            (o &&
              cf.forEach(function (v) {
                var g = c && c[v];
                r.current[v] = g;
              }),
            o && Cr < 1)
          ) {
            var f = parseInt(r.current.paddingRight, 10) || 0,
              m = document.body ? document.body.clientWidth : 0,
              y = window.innerWidth - m + f || 0;
            Object.keys(ff).forEach(function (v) {
              var g = ff[v];
              c && (c[v] = g);
            }),
              c && (c.paddingRight = "".concat(y, "px"));
          }
          s &&
            mf() &&
            (s.addEventListener("touchmove", df, Mn),
            a &&
              (a.addEventListener("touchstart", hf, Mn),
              a.addEventListener("touchmove", pf, Mn))),
            (Cr += 1);
        }
      },
      [o],
    ),
    u = S.useCallback(
      function (a) {
        if (vf) {
          var s = document.body,
            c = s && s.style;
          (Cr = Math.max(Cr - 1, 0)),
            o &&
              Cr < 1 &&
              cf.forEach(function (f) {
                var m = r.current[f];
                c && (c[f] = m);
              }),
            s &&
              mf() &&
              (s.removeEventListener("touchmove", df, Mn),
              a &&
                (a.removeEventListener("touchstart", hf, Mn),
                a.removeEventListener("touchmove", pf, Mn)));
        }
      },
      [o],
    );
  return (
    S.useEffect(
      function () {
        if (t) {
          var a = i.current;
          return (
            l(a),
            function () {
              u(a);
            }
          );
        }
      },
      [t, l, u],
    ),
    function (a) {
      i.current = a;
    }
  );
}
var Zw = function () {
    return document.activeElement && document.activeElement.blur();
  },
  Qw = {
    name: "1kfdb0e",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0",
  };
function Yw(e) {
  var t = e.children,
    n = e.lockEnabled,
    o = e.captureEnabled,
    r = o === void 0 ? !0 : o,
    i = e.onBottomArrive,
    l = e.onBottomLeave,
    u = e.onTopArrive,
    a = e.onTopLeave,
    s = Kw({
      isEnabled: r,
      onBottomArrive: i,
      onBottomLeave: l,
      onTopArrive: u,
      onTopLeave: a,
    }),
    c = Gw({ isEnabled: n }),
    f = function (y) {
      s(y), c(y);
    };
  return I(S.Fragment, null, n && I("div", { onClick: Zw, css: Qw }), t(f));
}
var Xw = {
    name: "1a0ro4n-requiredInput",
    styles:
      "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%",
  },
  qw = function (t) {
    var n = t.name,
      o = t.onFocus;
    return I("input", {
      required: !0,
      name: n,
      tabIndex: -1,
      "aria-hidden": "true",
      onFocus: o,
      css: Xw,
      value: "",
      onChange: function () {},
    });
  },
  Jw = qw,
  eC = function (t) {
    return t.label;
  },
  tC = function (t) {
    return t.label;
  },
  nC = function (t) {
    return t.value;
  },
  rC = function (t) {
    return !!t.isDisabled;
  },
  oC = {
    clearIndicator: Hy,
    container: Iy,
    control: Xy,
    dropdownIndicator: By,
    group: tw,
    groupHeading: rw,
    indicatorsContainer: Ny,
    indicatorSeparator: Ky,
    input: uw,
    loadingIndicator: Qy,
    loadingMessage: Py,
    menu: Sy,
    menuList: ky,
    menuPortal: Dy,
    multiValue: dw,
    multiValueLabel: pw,
    multiValueRemove: hw,
    noOptionsMessage: Oy,
    option: Cw,
    placeholder: xw,
    singleValue: Mw,
    valueContainer: Ry,
  },
  iC = {
    primary: "#2684FF",
    primary75: "#4C9AFF",
    primary50: "#B2D4FF",
    primary25: "#DEEBFF",
    danger: "#DE350B",
    dangerLight: "#FFBDAD",
    neutral0: "hsl(0, 0%, 100%)",
    neutral5: "hsl(0, 0%, 95%)",
    neutral10: "hsl(0, 0%, 90%)",
    neutral20: "hsl(0, 0%, 80%)",
    neutral30: "hsl(0, 0%, 70%)",
    neutral40: "hsl(0, 0%, 60%)",
    neutral50: "hsl(0, 0%, 50%)",
    neutral60: "hsl(0, 0%, 40%)",
    neutral70: "hsl(0, 0%, 30%)",
    neutral80: "hsl(0, 0%, 20%)",
    neutral90: "hsl(0, 0%, 10%)",
  },
  lC = 4,
  zh = 4,
  uC = 38,
  aC = zh * 2,
  sC = { baseUnit: zh, controlHeight: uC, menuGutter: aC },
  Jl = { borderRadius: lC, colors: iC, spacing: sC },
  cC = {
    "aria-live": "polite",
    backspaceRemovesValue: !0,
    blurInputOnSelect: of(),
    captureMenuScroll: !of(),
    classNames: {},
    closeMenuOnSelect: !0,
    closeMenuOnScroll: !1,
    components: {},
    controlShouldRenderValue: !0,
    escapeClearsValue: !1,
    filterOption: Bw(),
    formatGroupLabel: eC,
    getOptionLabel: tC,
    getOptionValue: nC,
    isDisabled: !1,
    isLoading: !1,
    isMulti: !1,
    isRtl: !1,
    isSearchable: !0,
    isOptionDisabled: rC,
    loadingMessage: function () {
      return "Loading...";
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: !1,
    menuPlacement: "bottom",
    menuPosition: "absolute",
    menuShouldBlockScroll: !1,
    menuShouldScrollIntoView: !fy(),
    noOptionsMessage: function () {
      return "No options";
    },
    openMenuOnFocus: !1,
    openMenuOnClick: !0,
    options: [],
    pageSize: 5,
    placeholder: "Select...",
    screenReaderStatus: function (t) {
      var n = t.count;
      return "".concat(n, " result").concat(n !== 1 ? "s" : "", " available");
    },
    styles: {},
    tabIndex: 0,
    tabSelectsValue: !0,
    unstyled: !1,
  };
function gf(e, t, n, o) {
  var r = Bh(e, t, n),
    i = Uh(e, t, n),
    l = $h(e, t),
    u = Vi(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: r,
    isSelected: i,
    label: l,
    value: u,
    index: o,
  };
}
function jh(e, t) {
  return e.options
    .map(function (n, o) {
      if ("options" in n) {
        var r = n.options
          .map(function (l, u) {
            return gf(e, l, t, u);
          })
          .filter(function (l) {
            return yf(e, l);
          });
        return r.length > 0
          ? { type: "group", data: n, options: r, index: o }
          : void 0;
      }
      var i = gf(e, n, t, o);
      return yf(e, i) ? i : void 0;
    })
    .filter(hy);
}
function Vh(e) {
  return e.reduce(function (t, n) {
    return (
      n.type === "group"
        ? t.push.apply(
            t,
            oh(
              n.options.map(function (o) {
                return o.data;
              }),
            ),
          )
        : t.push(n.data),
      t
    );
  }, []);
}
function fC(e, t) {
  return Vh(jh(e, t));
}
function yf(e, t) {
  var n = e.inputValue,
    o = n === void 0 ? "" : n,
    r = t.data,
    i = t.isSelected,
    l = t.label,
    u = t.value;
  return (!Wh(e) || !i) && Hh(e, { label: l, value: u, data: r }, o);
}
function dC(e, t) {
  var n = e.focusedValue,
    o = e.selectValue,
    r = o.indexOf(n);
  if (r > -1) {
    var i = t.indexOf(n);
    if (i > -1) return n;
    if (r < t.length) return t[r];
  }
  return null;
}
function pC(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var $h = function (t, n) {
    return t.getOptionLabel(n);
  },
  Vi = function (t, n) {
    return t.getOptionValue(n);
  };
function Bh(e, t, n) {
  return typeof e.isOptionDisabled == "function"
    ? e.isOptionDisabled(t, n)
    : !1;
}
function Uh(e, t, n) {
  if (n.indexOf(t) > -1) return !0;
  if (typeof e.isOptionSelected == "function") return e.isOptionSelected(t, n);
  var o = Vi(e, t);
  return n.some(function (r) {
    return Vi(e, r) === o;
  });
}
function Hh(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var Wh = function (t) {
    var n = t.hideSelectedOptions,
      o = t.isMulti;
    return n === void 0 ? o : n;
  },
  hC = 1,
  Kh = (function (e) {
    R0(n, e);
    var t = j0(n);
    function n(o) {
      var r;
      if (
        (I0(this, n),
        (r = t.call(this, o)),
        (r.state = {
          ariaSelection: null,
          focusedOption: null,
          focusedValue: null,
          inputIsHidden: !1,
          isFocused: !1,
          selectValue: [],
          clearFocusValueOnUpdate: !1,
          prevWasFocused: !1,
          inputIsHiddenAfterUpdate: void 0,
          prevProps: void 0,
        }),
        (r.blockOptionHover = !1),
        (r.isComposing = !1),
        (r.commonProps = void 0),
        (r.initialTouchX = 0),
        (r.initialTouchY = 0),
        (r.instancePrefix = ""),
        (r.openAfterFocus = !1),
        (r.scrollToFocusedOptionOnUpdate = !1),
        (r.userIsDragging = void 0),
        (r.controlRef = null),
        (r.getControlRef = function (u) {
          r.controlRef = u;
        }),
        (r.focusedOptionRef = null),
        (r.getFocusedOptionRef = function (u) {
          r.focusedOptionRef = u;
        }),
        (r.menuListRef = null),
        (r.getMenuListRef = function (u) {
          r.menuListRef = u;
        }),
        (r.inputRef = null),
        (r.getInputRef = function (u) {
          r.inputRef = u;
        }),
        (r.focus = r.focusInput),
        (r.blur = r.blurInput),
        (r.onChange = function (u, a) {
          var s = r.props,
            c = s.onChange,
            f = s.name;
          (a.name = f), r.ariaOnChange(u, a), c(u, a);
        }),
        (r.setValue = function (u, a, s) {
          var c = r.props,
            f = c.closeMenuOnSelect,
            m = c.isMulti,
            y = c.inputValue;
          r.onInputChange("", { action: "set-value", prevInputValue: y }),
            f &&
              (r.setState({ inputIsHiddenAfterUpdate: !m }), r.onMenuClose()),
            r.setState({ clearFocusValueOnUpdate: !0 }),
            r.onChange(u, { action: a, option: s });
        }),
        (r.selectOption = function (u) {
          var a = r.props,
            s = a.blurInputOnSelect,
            c = a.isMulti,
            f = a.name,
            m = r.state.selectValue,
            y = c && r.isOptionSelected(u, m),
            v = r.isOptionDisabled(u, m);
          if (y) {
            var g = r.getOptionValue(u);
            r.setValue(
              m.filter(function (w) {
                return r.getOptionValue(w) !== g;
              }),
              "deselect-option",
              u,
            );
          } else if (!v)
            c
              ? r.setValue([].concat(oh(m), [u]), "select-option", u)
              : r.setValue(u, "select-option");
          else {
            r.ariaOnChange(u, { action: "select-option", option: u, name: f });
            return;
          }
          s && r.blurInput();
        }),
        (r.removeValue = function (u) {
          var a = r.props.isMulti,
            s = r.state.selectValue,
            c = r.getOptionValue(u),
            f = s.filter(function (y) {
              return r.getOptionValue(y) !== c;
            }),
            m = Vo(a, f, f[0] || null);
          r.onChange(m, { action: "remove-value", removedValue: u }),
            r.focusInput();
        }),
        (r.clearValue = function () {
          var u = r.state.selectValue;
          r.onChange(Vo(r.props.isMulti, [], null), {
            action: "clear",
            removedValues: u,
          });
        }),
        (r.popValue = function () {
          var u = r.props.isMulti,
            a = r.state.selectValue,
            s = a[a.length - 1],
            c = a.slice(0, a.length - 1),
            f = Vo(u, c, c[0] || null);
          r.onChange(f, { action: "pop-value", removedValue: s });
        }),
        (r.getValue = function () {
          return r.state.selectValue;
        }),
        (r.cx = function () {
          for (var u = arguments.length, a = new Array(u), s = 0; s < u; s++)
            a[s] = arguments[s];
          return ly.apply(void 0, [r.props.classNamePrefix].concat(a));
        }),
        (r.getOptionLabel = function (u) {
          return $h(r.props, u);
        }),
        (r.getOptionValue = function (u) {
          return Vi(r.props, u);
        }),
        (r.getStyles = function (u, a) {
          var s = r.props.unstyled,
            c = oC[u](a, s);
          c.boxSizing = "border-box";
          var f = r.props.styles[u];
          return f ? f(c, a) : c;
        }),
        (r.getClassNames = function (u, a) {
          var s, c;
          return (s = (c = r.props.classNames)[u]) === null || s === void 0
            ? void 0
            : s.call(c, a);
        }),
        (r.getElementId = function (u) {
          return "".concat(r.instancePrefix, "-").concat(u);
        }),
        (r.getComponents = function () {
          return bw(r.props);
        }),
        (r.buildCategorizedOptions = function () {
          return jh(r.props, r.state.selectValue);
        }),
        (r.getCategorizedOptions = function () {
          return r.props.menuIsOpen ? r.buildCategorizedOptions() : [];
        }),
        (r.buildFocusableOptions = function () {
          return Vh(r.buildCategorizedOptions());
        }),
        (r.getFocusableOptions = function () {
          return r.props.menuIsOpen ? r.buildFocusableOptions() : [];
        }),
        (r.ariaOnChange = function (u, a) {
          r.setState({ ariaSelection: T({ value: u }, a) });
        }),
        (r.onMenuMouseDown = function (u) {
          u.button === 0 &&
            (u.stopPropagation(), u.preventDefault(), r.focusInput());
        }),
        (r.onMenuMouseMove = function (u) {
          r.blockOptionHover = !1;
        }),
        (r.onControlMouseDown = function (u) {
          if (!u.defaultPrevented) {
            var a = r.props.openMenuOnClick;
            r.state.isFocused
              ? r.props.menuIsOpen
                ? u.target.tagName !== "INPUT" &&
                  u.target.tagName !== "TEXTAREA" &&
                  r.onMenuClose()
                : a && r.openMenu("first")
              : (a && (r.openAfterFocus = !0), r.focusInput()),
              u.target.tagName !== "INPUT" &&
                u.target.tagName !== "TEXTAREA" &&
                u.preventDefault();
          }
        }),
        (r.onDropdownIndicatorMouseDown = function (u) {
          if (
            !(u && u.type === "mousedown" && u.button !== 0) &&
            !r.props.isDisabled
          ) {
            var a = r.props,
              s = a.isMulti,
              c = a.menuIsOpen;
            r.focusInput(),
              c
                ? (r.setState({ inputIsHiddenAfterUpdate: !s }),
                  r.onMenuClose())
                : r.openMenu("first"),
              u.preventDefault();
          }
        }),
        (r.onClearIndicatorMouseDown = function (u) {
          (u && u.type === "mousedown" && u.button !== 0) ||
            (r.clearValue(),
            u.preventDefault(),
            (r.openAfterFocus = !1),
            u.type === "touchend"
              ? r.focusInput()
              : setTimeout(function () {
                  return r.focusInput();
                }));
        }),
        (r.onScroll = function (u) {
          typeof r.props.closeMenuOnScroll == "boolean"
            ? u.target instanceof HTMLElement &&
              yl(u.target) &&
              r.props.onMenuClose()
            : typeof r.props.closeMenuOnScroll == "function" &&
              r.props.closeMenuOnScroll(u) &&
              r.props.onMenuClose();
        }),
        (r.onCompositionStart = function () {
          r.isComposing = !0;
        }),
        (r.onCompositionEnd = function () {
          r.isComposing = !1;
        }),
        (r.onTouchStart = function (u) {
          var a = u.touches,
            s = a && a.item(0);
          s &&
            ((r.initialTouchX = s.clientX),
            (r.initialTouchY = s.clientY),
            (r.userIsDragging = !1));
        }),
        (r.onTouchMove = function (u) {
          var a = u.touches,
            s = a && a.item(0);
          if (s) {
            var c = Math.abs(s.clientX - r.initialTouchX),
              f = Math.abs(s.clientY - r.initialTouchY),
              m = 5;
            r.userIsDragging = c > m || f > m;
          }
        }),
        (r.onTouchEnd = function (u) {
          r.userIsDragging ||
            (r.controlRef &&
              !r.controlRef.contains(u.target) &&
              r.menuListRef &&
              !r.menuListRef.contains(u.target) &&
              r.blurInput(),
            (r.initialTouchX = 0),
            (r.initialTouchY = 0));
        }),
        (r.onControlTouchEnd = function (u) {
          r.userIsDragging || r.onControlMouseDown(u);
        }),
        (r.onClearIndicatorTouchEnd = function (u) {
          r.userIsDragging || r.onClearIndicatorMouseDown(u);
        }),
        (r.onDropdownIndicatorTouchEnd = function (u) {
          r.userIsDragging || r.onDropdownIndicatorMouseDown(u);
        }),
        (r.handleInputChange = function (u) {
          var a = r.props.inputValue,
            s = u.currentTarget.value;
          r.setState({ inputIsHiddenAfterUpdate: !1 }),
            r.onInputChange(s, { action: "input-change", prevInputValue: a }),
            r.props.menuIsOpen || r.onMenuOpen();
        }),
        (r.onInputFocus = function (u) {
          r.props.onFocus && r.props.onFocus(u),
            r.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
            (r.openAfterFocus || r.props.openMenuOnFocus) &&
              r.openMenu("first"),
            (r.openAfterFocus = !1);
        }),
        (r.onInputBlur = function (u) {
          var a = r.props.inputValue;
          if (r.menuListRef && r.menuListRef.contains(document.activeElement)) {
            r.inputRef.focus();
            return;
          }
          r.props.onBlur && r.props.onBlur(u),
            r.onInputChange("", { action: "input-blur", prevInputValue: a }),
            r.onMenuClose(),
            r.setState({ focusedValue: null, isFocused: !1 });
        }),
        (r.onOptionHover = function (u) {
          r.blockOptionHover ||
            r.state.focusedOption === u ||
            r.setState({ focusedOption: u });
        }),
        (r.shouldHideSelectedOptions = function () {
          return Wh(r.props);
        }),
        (r.onValueInputFocus = function (u) {
          u.preventDefault(), u.stopPropagation(), r.focus();
        }),
        (r.onKeyDown = function (u) {
          var a = r.props,
            s = a.isMulti,
            c = a.backspaceRemovesValue,
            f = a.escapeClearsValue,
            m = a.inputValue,
            y = a.isClearable,
            v = a.isDisabled,
            g = a.menuIsOpen,
            w = a.onKeyDown,
            d = a.tabSelectsValue,
            p = a.openMenuOnFocus,
            h = r.state,
            E = h.focusedOption,
            _ = h.focusedValue,
            C = h.selectValue;
          if (!v && !(typeof w == "function" && (w(u), u.defaultPrevented))) {
            switch (((r.blockOptionHover = !0), u.key)) {
              case "ArrowLeft":
                if (!s || m) return;
                r.focusValue("previous");
                break;
              case "ArrowRight":
                if (!s || m) return;
                r.focusValue("next");
                break;
              case "Delete":
              case "Backspace":
                if (m) return;
                if (_) r.removeValue(_);
                else {
                  if (!c) return;
                  s ? r.popValue() : y && r.clearValue();
                }
                break;
              case "Tab":
                if (
                  r.isComposing ||
                  u.shiftKey ||
                  !g ||
                  !d ||
                  !E ||
                  (p && r.isOptionSelected(E, C))
                )
                  return;
                r.selectOption(E);
                break;
              case "Enter":
                if (u.keyCode === 229) break;
                if (g) {
                  if (!E || r.isComposing) return;
                  r.selectOption(E);
                  break;
                }
                return;
              case "Escape":
                g
                  ? (r.setState({ inputIsHiddenAfterUpdate: !1 }),
                    r.onInputChange("", {
                      action: "menu-close",
                      prevInputValue: m,
                    }),
                    r.onMenuClose())
                  : y && f && r.clearValue();
                break;
              case " ":
                if (m) return;
                if (!g) {
                  r.openMenu("first");
                  break;
                }
                if (!E) return;
                r.selectOption(E);
                break;
              case "ArrowUp":
                g ? r.focusOption("up") : r.openMenu("last");
                break;
              case "ArrowDown":
                g ? r.focusOption("down") : r.openMenu("first");
                break;
              case "PageUp":
                if (!g) return;
                r.focusOption("pageup");
                break;
              case "PageDown":
                if (!g) return;
                r.focusOption("pagedown");
                break;
              case "Home":
                if (!g) return;
                r.focusOption("first");
                break;
              case "End":
                if (!g) return;
                r.focusOption("last");
                break;
              default:
                return;
            }
            u.preventDefault();
          }
        }),
        (r.instancePrefix = "react-select-" + (r.props.instanceId || ++hC)),
        (r.state.selectValue = nf(o.value)),
        o.menuIsOpen && r.state.selectValue.length)
      ) {
        var i = r.buildFocusableOptions(),
          l = i.indexOf(r.state.selectValue[0]);
        r.state.focusedOption = i[l];
      }
      return r;
    }
    return (
      F0(
        n,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.startListeningComposition(),
                this.startListeningToTouch(),
                this.props.closeMenuOnScroll &&
                  document &&
                  document.addEventListener &&
                  document.addEventListener("scroll", this.onScroll, !0),
                this.props.autoFocus && this.focusInput(),
                this.props.menuIsOpen &&
                  this.state.focusedOption &&
                  this.menuListRef &&
                  this.focusedOptionRef &&
                  rf(this.menuListRef, this.focusedOptionRef);
            },
          },
          {
            key: "componentDidUpdate",
            value: function (r) {
              var i = this.props,
                l = i.isDisabled,
                u = i.menuIsOpen,
                a = this.state.isFocused;
              ((a && !l && r.isDisabled) || (a && u && !r.menuIsOpen)) &&
                this.focusInput(),
                a && l && !r.isDisabled
                  ? this.setState({ isFocused: !1 }, this.onMenuClose)
                  : !a &&
                    !l &&
                    r.isDisabled &&
                    this.inputRef === document.activeElement &&
                    this.setState({ isFocused: !0 }),
                this.menuListRef &&
                  this.focusedOptionRef &&
                  this.scrollToFocusedOptionOnUpdate &&
                  (rf(this.menuListRef, this.focusedOptionRef),
                  (this.scrollToFocusedOptionOnUpdate = !1));
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.stopListeningComposition(),
                this.stopListeningToTouch(),
                document.removeEventListener("scroll", this.onScroll, !0);
            },
          },
          {
            key: "onMenuOpen",
            value: function () {
              this.props.onMenuOpen();
            },
          },
          {
            key: "onMenuClose",
            value: function () {
              this.onInputChange("", {
                action: "menu-close",
                prevInputValue: this.props.inputValue,
              }),
                this.props.onMenuClose();
            },
          },
          {
            key: "onInputChange",
            value: function (r, i) {
              this.props.onInputChange(r, i);
            },
          },
          {
            key: "focusInput",
            value: function () {
              this.inputRef && this.inputRef.focus();
            },
          },
          {
            key: "blurInput",
            value: function () {
              this.inputRef && this.inputRef.blur();
            },
          },
          {
            key: "openMenu",
            value: function (r) {
              var i = this,
                l = this.state,
                u = l.selectValue,
                a = l.isFocused,
                s = this.buildFocusableOptions(),
                c = r === "first" ? 0 : s.length - 1;
              if (!this.props.isMulti) {
                var f = s.indexOf(u[0]);
                f > -1 && (c = f);
              }
              (this.scrollToFocusedOptionOnUpdate = !(a && this.menuListRef)),
                this.setState(
                  {
                    inputIsHiddenAfterUpdate: !1,
                    focusedValue: null,
                    focusedOption: s[c],
                  },
                  function () {
                    return i.onMenuOpen();
                  },
                );
            },
          },
          {
            key: "focusValue",
            value: function (r) {
              var i = this.state,
                l = i.selectValue,
                u = i.focusedValue;
              if (this.props.isMulti) {
                this.setState({ focusedOption: null });
                var a = l.indexOf(u);
                u || (a = -1);
                var s = l.length - 1,
                  c = -1;
                if (l.length) {
                  switch (r) {
                    case "previous":
                      a === 0 ? (c = 0) : a === -1 ? (c = s) : (c = a - 1);
                      break;
                    case "next":
                      a > -1 && a < s && (c = a + 1);
                      break;
                  }
                  this.setState({
                    inputIsHidden: c !== -1,
                    focusedValue: l[c],
                  });
                }
              }
            },
          },
          {
            key: "focusOption",
            value: function () {
              var r =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : "first",
                i = this.props.pageSize,
                l = this.state.focusedOption,
                u = this.getFocusableOptions();
              if (u.length) {
                var a = 0,
                  s = u.indexOf(l);
                l || (s = -1),
                  r === "up"
                    ? (a = s > 0 ? s - 1 : u.length - 1)
                    : r === "down"
                    ? (a = (s + 1) % u.length)
                    : r === "pageup"
                    ? ((a = s - i), a < 0 && (a = 0))
                    : r === "pagedown"
                    ? ((a = s + i), a > u.length - 1 && (a = u.length - 1))
                    : r === "last" && (a = u.length - 1),
                  (this.scrollToFocusedOptionOnUpdate = !0),
                  this.setState({ focusedOption: u[a], focusedValue: null });
              }
            },
          },
          {
            key: "getTheme",
            value: function () {
              return this.props.theme
                ? typeof this.props.theme == "function"
                  ? this.props.theme(Jl)
                  : T(T({}, Jl), this.props.theme)
                : Jl;
            },
          },
          {
            key: "getCommonProps",
            value: function () {
              var r = this.clearValue,
                i = this.cx,
                l = this.getStyles,
                u = this.getClassNames,
                a = this.getValue,
                s = this.selectOption,
                c = this.setValue,
                f = this.props,
                m = f.isMulti,
                y = f.isRtl,
                v = f.options,
                g = this.hasValue();
              return {
                clearValue: r,
                cx: i,
                getStyles: l,
                getClassNames: u,
                getValue: a,
                hasValue: g,
                isMulti: m,
                isRtl: y,
                options: v,
                selectOption: s,
                selectProps: f,
                setValue: c,
                theme: this.getTheme(),
              };
            },
          },
          {
            key: "hasValue",
            value: function () {
              var r = this.state.selectValue;
              return r.length > 0;
            },
          },
          {
            key: "hasOptions",
            value: function () {
              return !!this.getFocusableOptions().length;
            },
          },
          {
            key: "isClearable",
            value: function () {
              var r = this.props,
                i = r.isClearable,
                l = r.isMulti;
              return i === void 0 ? l : i;
            },
          },
          {
            key: "isOptionDisabled",
            value: function (r, i) {
              return Bh(this.props, r, i);
            },
          },
          {
            key: "isOptionSelected",
            value: function (r, i) {
              return Uh(this.props, r, i);
            },
          },
          {
            key: "filterOption",
            value: function (r, i) {
              return Hh(this.props, r, i);
            },
          },
          {
            key: "formatOptionLabel",
            value: function (r, i) {
              if (typeof this.props.formatOptionLabel == "function") {
                var l = this.props.inputValue,
                  u = this.state.selectValue;
                return this.props.formatOptionLabel(r, {
                  context: i,
                  inputValue: l,
                  selectValue: u,
                });
              } else return this.getOptionLabel(r);
            },
          },
          {
            key: "formatGroupLabel",
            value: function (r) {
              return this.props.formatGroupLabel(r);
            },
          },
          {
            key: "startListeningComposition",
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener(
                  "compositionstart",
                  this.onCompositionStart,
                  !1,
                ),
                document.addEventListener(
                  "compositionend",
                  this.onCompositionEnd,
                  !1,
                ));
            },
          },
          {
            key: "stopListeningComposition",
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener(
                  "compositionstart",
                  this.onCompositionStart,
                ),
                document.removeEventListener(
                  "compositionend",
                  this.onCompositionEnd,
                ));
            },
          },
          {
            key: "startListeningToTouch",
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener("touchstart", this.onTouchStart, !1),
                document.addEventListener("touchmove", this.onTouchMove, !1),
                document.addEventListener("touchend", this.onTouchEnd, !1));
            },
          },
          {
            key: "stopListeningToTouch",
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener("touchstart", this.onTouchStart),
                document.removeEventListener("touchmove", this.onTouchMove),
                document.removeEventListener("touchend", this.onTouchEnd));
            },
          },
          {
            key: "renderInput",
            value: function () {
              var r = this.props,
                i = r.isDisabled,
                l = r.isSearchable,
                u = r.inputId,
                a = r.inputValue,
                s = r.tabIndex,
                c = r.form,
                f = r.menuIsOpen,
                m = r.required,
                y = this.getComponents(),
                v = y.Input,
                g = this.state,
                w = g.inputIsHidden,
                d = g.ariaSelection,
                p = this.commonProps,
                h = u || this.getElementId("input"),
                E = T(
                  T(
                    T(
                      {
                        "aria-autocomplete": "list",
                        "aria-expanded": f,
                        "aria-haspopup": !0,
                        "aria-errormessage": this.props["aria-errormessage"],
                        "aria-invalid": this.props["aria-invalid"],
                        "aria-label": this.props["aria-label"],
                        "aria-labelledby": this.props["aria-labelledby"],
                        "aria-required": m,
                        role: "combobox",
                      },
                      f && {
                        "aria-controls": this.getElementId("listbox"),
                        "aria-owns": this.getElementId("listbox"),
                      },
                    ),
                    !l && { "aria-readonly": !0 },
                  ),
                  this.hasValue()
                    ? (d == null ? void 0 : d.action) ===
                        "initial-input-focus" && {
                        "aria-describedby": this.getElementId("live-region"),
                      }
                    : { "aria-describedby": this.getElementId("placeholder") },
                );
              return l
                ? S.createElement(
                    v,
                    A(
                      {},
                      p,
                      {
                        autoCapitalize: "none",
                        autoComplete: "off",
                        autoCorrect: "off",
                        id: h,
                        innerRef: this.getInputRef,
                        isDisabled: i,
                        isHidden: w,
                        onBlur: this.onInputBlur,
                        onChange: this.handleInputChange,
                        onFocus: this.onInputFocus,
                        spellCheck: "false",
                        tabIndex: s,
                        form: c,
                        type: "text",
                        value: a,
                      },
                      E,
                    ),
                  )
                : S.createElement(
                    Hw,
                    A(
                      {
                        id: h,
                        innerRef: this.getInputRef,
                        onBlur: this.onInputBlur,
                        onChange: zi,
                        onFocus: this.onInputFocus,
                        disabled: i,
                        tabIndex: s,
                        inputMode: "none",
                        form: c,
                        value: "",
                      },
                      E,
                    ),
                  );
            },
          },
          {
            key: "renderPlaceholderOrValue",
            value: function () {
              var r = this,
                i = this.getComponents(),
                l = i.MultiValue,
                u = i.MultiValueContainer,
                a = i.MultiValueLabel,
                s = i.MultiValueRemove,
                c = i.SingleValue,
                f = i.Placeholder,
                m = this.commonProps,
                y = this.props,
                v = y.controlShouldRenderValue,
                g = y.isDisabled,
                w = y.isMulti,
                d = y.inputValue,
                p = y.placeholder,
                h = this.state,
                E = h.selectValue,
                _ = h.focusedValue,
                C = h.isFocused;
              if (!this.hasValue() || !v)
                return d
                  ? null
                  : S.createElement(
                      f,
                      A({}, m, {
                        key: "placeholder",
                        isDisabled: g,
                        isFocused: C,
                        innerProps: { id: this.getElementId("placeholder") },
                      }),
                      p,
                    );
              if (w)
                return E.map(function (k, F) {
                  var L = k === _,
                    $ = ""
                      .concat(r.getOptionLabel(k), "-")
                      .concat(r.getOptionValue(k));
                  return S.createElement(
                    l,
                    A({}, m, {
                      components: { Container: u, Label: a, Remove: s },
                      isFocused: L,
                      isDisabled: g,
                      key: $,
                      index: F,
                      removeProps: {
                        onClick: function () {
                          return r.removeValue(k);
                        },
                        onTouchEnd: function () {
                          return r.removeValue(k);
                        },
                        onMouseDown: function (Se) {
                          Se.preventDefault();
                        },
                      },
                      data: k,
                    }),
                    r.formatOptionLabel(k, "value"),
                  );
                });
              if (d) return null;
              var x = E[0];
              return S.createElement(
                c,
                A({}, m, { data: x, isDisabled: g }),
                this.formatOptionLabel(x, "value"),
              );
            },
          },
          {
            key: "renderClearIndicator",
            value: function () {
              var r = this.getComponents(),
                i = r.ClearIndicator,
                l = this.commonProps,
                u = this.props,
                a = u.isDisabled,
                s = u.isLoading,
                c = this.state.isFocused;
              if (!this.isClearable() || !i || a || !this.hasValue() || s)
                return null;
              var f = {
                onMouseDown: this.onClearIndicatorMouseDown,
                onTouchEnd: this.onClearIndicatorTouchEnd,
                "aria-hidden": "true",
              };
              return S.createElement(
                i,
                A({}, l, { innerProps: f, isFocused: c }),
              );
            },
          },
          {
            key: "renderLoadingIndicator",
            value: function () {
              var r = this.getComponents(),
                i = r.LoadingIndicator,
                l = this.commonProps,
                u = this.props,
                a = u.isDisabled,
                s = u.isLoading,
                c = this.state.isFocused;
              if (!i || !s) return null;
              var f = { "aria-hidden": "true" };
              return S.createElement(
                i,
                A({}, l, { innerProps: f, isDisabled: a, isFocused: c }),
              );
            },
          },
          {
            key: "renderIndicatorSeparator",
            value: function () {
              var r = this.getComponents(),
                i = r.DropdownIndicator,
                l = r.IndicatorSeparator;
              if (!i || !l) return null;
              var u = this.commonProps,
                a = this.props.isDisabled,
                s = this.state.isFocused;
              return S.createElement(
                l,
                A({}, u, { isDisabled: a, isFocused: s }),
              );
            },
          },
          {
            key: "renderDropdownIndicator",
            value: function () {
              var r = this.getComponents(),
                i = r.DropdownIndicator;
              if (!i) return null;
              var l = this.commonProps,
                u = this.props.isDisabled,
                a = this.state.isFocused,
                s = {
                  onMouseDown: this.onDropdownIndicatorMouseDown,
                  onTouchEnd: this.onDropdownIndicatorTouchEnd,
                  "aria-hidden": "true",
                };
              return S.createElement(
                i,
                A({}, l, { innerProps: s, isDisabled: u, isFocused: a }),
              );
            },
          },
          {
            key: "renderMenu",
            value: function () {
              var r = this,
                i = this.getComponents(),
                l = i.Group,
                u = i.GroupHeading,
                a = i.Menu,
                s = i.MenuList,
                c = i.MenuPortal,
                f = i.LoadingMessage,
                m = i.NoOptionsMessage,
                y = i.Option,
                v = this.commonProps,
                g = this.state.focusedOption,
                w = this.props,
                d = w.captureMenuScroll,
                p = w.inputValue,
                h = w.isLoading,
                E = w.loadingMessage,
                _ = w.minMenuHeight,
                C = w.maxMenuHeight,
                x = w.menuIsOpen,
                k = w.menuPlacement,
                F = w.menuPosition,
                L = w.menuPortalTarget,
                $ = w.menuShouldBlockScroll,
                G = w.menuShouldScrollIntoView,
                Se = w.noOptionsMessage,
                re = w.onMenuScrollToTop,
                ie = w.onMenuScrollToBottom;
              if (!x) return null;
              var Pe = function (se, Ee) {
                  var Ye = se.type,
                    de = se.data,
                    Le = se.isDisabled,
                    cr = se.isSelected,
                    yo = se.label,
                    Jh = se.value,
                    Os = g === de,
                    Ps = Le
                      ? void 0
                      : function () {
                          return r.onOptionHover(de);
                        },
                    em = Le
                      ? void 0
                      : function () {
                          return r.selectOption(de);
                        },
                    Ls = "".concat(r.getElementId("option"), "-").concat(Ee),
                    tm = {
                      id: Ls,
                      onClick: em,
                      onMouseMove: Ps,
                      onMouseOver: Ps,
                      tabIndex: -1,
                    };
                  return S.createElement(
                    y,
                    A({}, v, {
                      innerProps: tm,
                      data: de,
                      isDisabled: Le,
                      isSelected: cr,
                      key: Ls,
                      label: yo,
                      type: Ye,
                      value: Jh,
                      isFocused: Os,
                      innerRef: Os ? r.getFocusedOptionRef : void 0,
                    }),
                    r.formatOptionLabel(se.data, "menu"),
                  );
                },
                Re;
              if (this.hasOptions())
                Re = this.getCategorizedOptions().map(function (j) {
                  if (j.type === "group") {
                    var se = j.data,
                      Ee = j.options,
                      Ye = j.index,
                      de = "".concat(r.getElementId("group"), "-").concat(Ye),
                      Le = "".concat(de, "-heading");
                    return S.createElement(
                      l,
                      A({}, v, {
                        key: de,
                        data: se,
                        options: Ee,
                        Heading: u,
                        headingProps: { id: Le, data: j.data },
                        label: r.formatGroupLabel(j.data),
                      }),
                      j.options.map(function (cr) {
                        return Pe(cr, "".concat(Ye, "-").concat(cr.index));
                      }),
                    );
                  } else if (j.type === "option")
                    return Pe(j, "".concat(j.index));
                });
              else if (h) {
                var P = E({ inputValue: p });
                if (P === null) return null;
                Re = S.createElement(f, v, P);
              } else {
                var R = Se({ inputValue: p });
                if (R === null) return null;
                Re = S.createElement(m, v, R);
              }
              var N = {
                  minMenuHeight: _,
                  maxMenuHeight: C,
                  menuPlacement: k,
                  menuPosition: F,
                  menuShouldScrollIntoView: G,
                },
                H = S.createElement(Ey, A({}, v, N), function (j) {
                  var se = j.ref,
                    Ee = j.placerProps,
                    Ye = Ee.placement,
                    de = Ee.maxHeight;
                  return S.createElement(
                    a,
                    A({}, v, N, {
                      innerRef: se,
                      innerProps: {
                        onMouseDown: r.onMenuMouseDown,
                        onMouseMove: r.onMenuMouseMove,
                        id: r.getElementId("listbox"),
                      },
                      isLoading: h,
                      placement: Ye,
                    }),
                    S.createElement(
                      Yw,
                      {
                        captureEnabled: d,
                        onTopArrive: re,
                        onBottomArrive: ie,
                        lockEnabled: $,
                      },
                      function (Le) {
                        return S.createElement(
                          s,
                          A({}, v, {
                            innerRef: function (yo) {
                              r.getMenuListRef(yo), Le(yo);
                            },
                            isLoading: h,
                            maxHeight: de,
                            focusedOption: g,
                          }),
                          Re,
                        );
                      },
                    ),
                  );
                });
              return L || F === "fixed"
                ? S.createElement(
                    c,
                    A({}, v, {
                      appendTo: L,
                      controlElement: this.controlRef,
                      menuPlacement: k,
                      menuPosition: F,
                    }),
                    H,
                  )
                : H;
            },
          },
          {
            key: "renderFormField",
            value: function () {
              var r = this,
                i = this.props,
                l = i.delimiter,
                u = i.isDisabled,
                a = i.isMulti,
                s = i.name,
                c = i.required,
                f = this.state.selectValue;
              if (c && !this.hasValue() && !u)
                return S.createElement(Jw, {
                  name: s,
                  onFocus: this.onValueInputFocus,
                });
              if (!(!s || u))
                if (a)
                  if (l) {
                    var m = f
                      .map(function (g) {
                        return r.getOptionValue(g);
                      })
                      .join(l);
                    return S.createElement("input", {
                      name: s,
                      type: "hidden",
                      value: m,
                    });
                  } else {
                    var y =
                      f.length > 0
                        ? f.map(function (g, w) {
                            return S.createElement("input", {
                              key: "i-".concat(w),
                              name: s,
                              type: "hidden",
                              value: r.getOptionValue(g),
                            });
                          })
                        : S.createElement("input", {
                            name: s,
                            type: "hidden",
                            value: "",
                          });
                    return S.createElement("div", null, y);
                  }
                else {
                  var v = f[0] ? this.getOptionValue(f[0]) : "";
                  return S.createElement("input", {
                    name: s,
                    type: "hidden",
                    value: v,
                  });
                }
            },
          },
          {
            key: "renderLiveRegion",
            value: function () {
              var r = this.commonProps,
                i = this.state,
                l = i.ariaSelection,
                u = i.focusedOption,
                a = i.focusedValue,
                s = i.isFocused,
                c = i.selectValue,
                f = this.getFocusableOptions();
              return S.createElement(
                zw,
                A({}, r, {
                  id: this.getElementId("live-region"),
                  ariaSelection: l,
                  focusedOption: u,
                  focusedValue: a,
                  isFocused: s,
                  selectValue: c,
                  focusableOptions: f,
                }),
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.getComponents(),
                i = r.Control,
                l = r.IndicatorsContainer,
                u = r.SelectContainer,
                a = r.ValueContainer,
                s = this.props,
                c = s.className,
                f = s.id,
                m = s.isDisabled,
                y = s.menuIsOpen,
                v = this.state.isFocused,
                g = (this.commonProps = this.getCommonProps());
              return S.createElement(
                u,
                A({}, g, {
                  className: c,
                  innerProps: { id: f, onKeyDown: this.onKeyDown },
                  isDisabled: m,
                  isFocused: v,
                }),
                this.renderLiveRegion(),
                S.createElement(
                  i,
                  A({}, g, {
                    innerRef: this.getControlRef,
                    innerProps: {
                      onMouseDown: this.onControlMouseDown,
                      onTouchEnd: this.onControlTouchEnd,
                    },
                    isDisabled: m,
                    isFocused: v,
                    menuIsOpen: y,
                  }),
                  S.createElement(
                    a,
                    A({}, g, { isDisabled: m }),
                    this.renderPlaceholderOrValue(),
                    this.renderInput(),
                  ),
                  S.createElement(
                    l,
                    A({}, g, { isDisabled: m }),
                    this.renderClearIndicator(),
                    this.renderLoadingIndicator(),
                    this.renderIndicatorSeparator(),
                    this.renderDropdownIndicator(),
                  ),
                ),
                this.renderMenu(),
                this.renderFormField(),
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (r, i) {
              var l = i.prevProps,
                u = i.clearFocusValueOnUpdate,
                a = i.inputIsHiddenAfterUpdate,
                s = i.ariaSelection,
                c = i.isFocused,
                f = i.prevWasFocused,
                m = r.options,
                y = r.value,
                v = r.menuIsOpen,
                g = r.inputValue,
                w = r.isMulti,
                d = nf(y),
                p = {};
              if (
                l &&
                (y !== l.value ||
                  m !== l.options ||
                  v !== l.menuIsOpen ||
                  g !== l.inputValue)
              ) {
                var h = v ? fC(r, d) : [],
                  E = u ? dC(i, d) : null,
                  _ = pC(i, h);
                p = {
                  selectValue: d,
                  focusedOption: _,
                  focusedValue: E,
                  clearFocusValueOnUpdate: !1,
                };
              }
              var C =
                  a != null && r !== l
                    ? { inputIsHidden: a, inputIsHiddenAfterUpdate: void 0 }
                    : {},
                x = s,
                k = c && f;
              return (
                c &&
                  !k &&
                  ((x = {
                    value: Vo(w, d, d[0] || null),
                    options: d,
                    action: "initial-input-focus",
                  }),
                  (k = !f)),
                (s == null ? void 0 : s.action) === "initial-input-focus" &&
                  (x = null),
                T(
                  T(T({}, p), C),
                  {},
                  { prevProps: r, ariaSelection: x, prevWasFocused: k },
                )
              );
            },
          },
        ],
      ),
      n
    );
  })(S.Component);
Kh.defaultProps = cC;
var mC = S.forwardRef(function (e, t) {
    var n = T0(e);
    return S.createElement(Kh, A({ ref: t }, n));
  }),
  vC = mC;
function gC({ image: e, name: t, description: n }) {
  return M.jsxs("div", {
    className:
      " inline-block rounded-xl shadow-xl min-w-[16rem] max-w-[24rem] align-top py-px mb-16 h-fit mx-5 text-center text-gunmetal justify-center dark:bg-gunmetal-400",
    children: [
      M.jsx("img", {
        className: "w-11/12 jutify-center m-auto my-3 rounded-xl",
        src: e,
      }),
      M.jsx("hr", {
        className:
          " border-none h-1 bg-gunmetal-900 rounded-full dark:bg-gunmetal-600 w-5/6 m-auto ",
      }),
      M.jsx("p", {
        className: "text-2xl font-semibold dark:text-gunmetal-900",
        children: t,
      }),
      M.jsx("p", {
        className: "m-2 text-lg dark:text-gunmetal-800 pb-2",
        children: n,
      }),
    ],
  });
}
async function Gh(e, t, n) {
  return t === "POST"
    ? await (
        await fetch("https://petinder-api.notaroomba.xyz" + e, {
          method: t,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(n),
        })
      ).json()
    : await (
        await fetch("https://petinder-api.notaroomba.xyz" + e, {
          method: t,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
      ).json();
}
function yC() {
  const [e, t] = S.useState([]),
    [n, o] = S.useState([]),
    [r, i] = S.useState(!0);
  S.useEffect(() => {
    async function a() {
      const { animals: s } = await Gh("/animals/", "GET", {});
      t(s), o(s), i(!1);
    }
    a();
  }, []);
  const l = (a) => {
      o(e);
      for (const s of a)
        o(
          n.filter(
            (c) =>
              c.color === s.value || c.animal === s.value || c.size === s.value,
          ),
        );
    },
    u = { control: (a) => ({ ...a, border: 0, boxShadow: "none" }) };
  return M.jsxs("div", {
    className:
      "dark:bg-gunmetal-300 dark:text-gunmetal-900 text-gunmetal min-h-[calc(100vh-208px)] pt-2 mb-auto",
    children: [
      M.jsx("p", {
        className:
          "text-center md:text-5xl lg:text-7xl text-3xl my-3 mb-8 font-bold",
        children: "Encuentra tu compañero ideal!",
      }),
      M.jsx(vC, {
        isMulti: !0,
        styles: u,
        className:
          "w-11/12 justify-center m-auto rounded-full border-8 dark:border-gunmetal-500 border-white shadow-2xl ",
        placeholder: "Busca tags...",
        classNames: {
          valueContainer: () => "dark:bg-gunmetal-500",
          control: () => "dark:border-none dark:bg-gunmetal-500",
          input: () => "dark:text-gunmetal-900",
          indicatorsContainer: () => "dark:bg-gunmetal-600 rounded-full",
          dropdownIndicator: () =>
            "dark:hover:text-gunmetal-900  dark:selection:text-gunmetal-600 dark:text-gunmetal-800 rounded-full",
          indicatorSeparator: () => "hidden",
          clearIndicator: () =>
            "dark:hover:text-gunmetal-900  dark:selection:text-gunmetal-600 dark:text-gunmetal-800 rounded-full",
          menuList: () => "dark:bg-gunmetal-500",
          multiValue: () => "dark:bg-gunmetal-600",
          multiValueLabel: () => "dark:text-gunmetal-900 font-semibold",
          option: () => "dark:hover:bg-gunmetal-600 dark:bg-gunmetal-500",
          noOptionsMessage: () => "dark:hover:bg-gunmetal-600",
        },
        options: [
          ...new Set(e.map((a) => a.animal)),
          ...new Set(e.map((a) => a.color)),
          ...new Set(e.map((a) => a.size)),
        ].map((a) => ({ value: a, label: a })),
        onChange: (a) => l(a),
      }),
      n.length != 0
        ? M.jsx("div", {
            className:
              " md:columns-1 lg:columns-2 xl:columns-3 2xl:columns-4 gap-x-24 gap-y-4 text-center w-full overflow-y-auto py-10 justify-items-center mx-auto",
            children: n.map((a, s) =>
              M.jsx(
                gC,
                { name: a.name, description: a.animal, image: a.image },
                s,
              ),
            ),
          })
        : r
        ? M.jsx("p", {
            className: "text-center text-4xl mt-12 font-bold",
            children: "Cargando...",
          })
        : M.jsx("p", {
            className: "text-center text-4xl text-rose-500 mt-12 font-bold",
            children: "No encontramos ningun animal con esos tags!",
          }),
    ],
  });
}
function Sr() {
  return M.jsxs("div", {
    className: "min-h-[calc(100vh-208px)]",
    children: [
      M.jsx("p", { children: "404" }),
      M.jsx("p", { children: "Esa pagina no existe" }),
    ],
  });
}
var Zh = { exports: {} },
  wC = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  CC = wC,
  SC = CC;
function Qh() {}
function Yh() {}
Yh.resetWarningCache = Qh;
var EC = function () {
  function e(o, r, i, l, u, a) {
    if (a !== SC) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((s.name = "Invariant Violation"), s);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
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
    checkPropTypes: Yh,
    resetWarningCache: Qh,
  };
  return (n.PropTypes = n), n;
};
Zh.exports = EC();
var xC = Zh.exports;
const D = ao(xC);
var Xh = { exports: {} };
(function (e) {
  var t = Object.prototype.hasOwnProperty,
    n = "~";
  function o() {}
  Object.create &&
    ((o.prototype = Object.create(null)), new o().__proto__ || (n = !1));
  function r(a, s, c) {
    (this.fn = a), (this.context = s), (this.once = c || !1);
  }
  function i(a, s, c, f, m) {
    if (typeof c != "function")
      throw new TypeError("The listener must be a function");
    var y = new r(c, f || a, m),
      v = n ? n + s : s;
    return (
      a._events[v]
        ? a._events[v].fn
          ? (a._events[v] = [a._events[v], y])
          : a._events[v].push(y)
        : ((a._events[v] = y), a._eventsCount++),
      a
    );
  }
  function l(a, s) {
    --a._eventsCount === 0 ? (a._events = new o()) : delete a._events[s];
  }
  function u() {
    (this._events = new o()), (this._eventsCount = 0);
  }
  (u.prototype.eventNames = function () {
    var s = [],
      c,
      f;
    if (this._eventsCount === 0) return s;
    for (f in (c = this._events)) t.call(c, f) && s.push(n ? f.slice(1) : f);
    return Object.getOwnPropertySymbols
      ? s.concat(Object.getOwnPropertySymbols(c))
      : s;
  }),
    (u.prototype.listeners = function (s) {
      var c = n ? n + s : s,
        f = this._events[c];
      if (!f) return [];
      if (f.fn) return [f.fn];
      for (var m = 0, y = f.length, v = new Array(y); m < y; m++)
        v[m] = f[m].fn;
      return v;
    }),
    (u.prototype.listenerCount = function (s) {
      var c = n ? n + s : s,
        f = this._events[c];
      return f ? (f.fn ? 1 : f.length) : 0;
    }),
    (u.prototype.emit = function (s, c, f, m, y, v) {
      var g = n ? n + s : s;
      if (!this._events[g]) return !1;
      var w = this._events[g],
        d = arguments.length,
        p,
        h;
      if (w.fn) {
        switch ((w.once && this.removeListener(s, w.fn, void 0, !0), d)) {
          case 1:
            return w.fn.call(w.context), !0;
          case 2:
            return w.fn.call(w.context, c), !0;
          case 3:
            return w.fn.call(w.context, c, f), !0;
          case 4:
            return w.fn.call(w.context, c, f, m), !0;
          case 5:
            return w.fn.call(w.context, c, f, m, y), !0;
          case 6:
            return w.fn.call(w.context, c, f, m, y, v), !0;
        }
        for (h = 1, p = new Array(d - 1); h < d; h++) p[h - 1] = arguments[h];
        w.fn.apply(w.context, p);
      } else {
        var E = w.length,
          _;
        for (h = 0; h < E; h++)
          switch (
            (w[h].once && this.removeListener(s, w[h].fn, void 0, !0), d)
          ) {
            case 1:
              w[h].fn.call(w[h].context);
              break;
            case 2:
              w[h].fn.call(w[h].context, c);
              break;
            case 3:
              w[h].fn.call(w[h].context, c, f);
              break;
            case 4:
              w[h].fn.call(w[h].context, c, f, m);
              break;
            default:
              if (!p)
                for (_ = 1, p = new Array(d - 1); _ < d; _++)
                  p[_ - 1] = arguments[_];
              w[h].fn.apply(w[h].context, p);
          }
      }
      return !0;
    }),
    (u.prototype.on = function (s, c, f) {
      return i(this, s, c, f, !1);
    }),
    (u.prototype.once = function (s, c, f) {
      return i(this, s, c, f, !0);
    }),
    (u.prototype.removeListener = function (s, c, f, m) {
      var y = n ? n + s : s;
      if (!this._events[y]) return this;
      if (!c) return l(this, y), this;
      var v = this._events[y];
      if (v.fn)
        v.fn === c && (!m || v.once) && (!f || v.context === f) && l(this, y);
      else {
        for (var g = 0, w = [], d = v.length; g < d; g++)
          (v[g].fn !== c || (m && !v[g].once) || (f && v[g].context !== f)) &&
            w.push(v[g]);
        w.length ? (this._events[y] = w.length === 1 ? w[0] : w) : l(this, y);
      }
      return this;
    }),
    (u.prototype.removeAllListeners = function (s) {
      var c;
      return (
        s
          ? ((c = n ? n + s : s), this._events[c] && l(this, c))
          : ((this._events = new o()), (this._eventsCount = 0)),
        this
      );
    }),
    (u.prototype.off = u.prototype.removeListener),
    (u.prototype.addListener = u.prototype.on),
    (u.prefixed = n),
    (u.EventEmitter = u),
    (e.exports = u);
})(Xh);
var _C = Xh.exports;
const kC = ao(_C);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function MC(
  e,
  t,
  n,
  o,
) {
  function r(i) {
    return i instanceof n
      ? i
      : new n(function (l) {
          l(i);
        });
  }
  return new (n || (n = Promise))(function (i, l) {
    function u(c) {
      try {
        s(o.next(c));
      } catch (f) {
        l(f);
      }
    }
    function a(c) {
      try {
        s(o.throw(c));
      } catch (f) {
        l(f);
      }
    }
    function s(c) {
      c.done ? i(c.value) : r(c.value).then(u, a);
    }
    s((o = o.apply(e, t || [])).next());
  });
}
var OC = function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    var o, r, i;
    if (Array.isArray(t)) {
      if (((o = t.length), o != n.length)) return !1;
      for (r = o; r-- !== 0; ) if (!e(t[r], n[r])) return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === n.toString();
    if (((i = Object.keys(t)), (o = i.length), o !== Object.keys(n).length))
      return !1;
    for (r = o; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, i[r])) return !1;
    for (r = o; r-- !== 0; ) {
      var l = i[r];
      if (!e(t[l], n[l])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const wf = "__googleMapsScriptId";
var $n;
(function (e) {
  (e[(e.INITIALIZED = 0)] = "INITIALIZED"),
    (e[(e.LOADING = 1)] = "LOADING"),
    (e[(e.SUCCESS = 2)] = "SUCCESS"),
    (e[(e.FAILURE = 3)] = "FAILURE");
})($n || ($n = {}));
class sn {
  constructor({
    apiKey: t,
    authReferrerPolicy: n,
    channel: o,
    client: r,
    id: i = wf,
    language: l,
    libraries: u = [],
    mapIds: a,
    nonce: s,
    region: c,
    retries: f = 3,
    url: m = "https://maps.googleapis.com/maps/api/js",
    version: y,
  }) {
    if (
      ((this.callbacks = []),
      (this.done = !1),
      (this.loading = !1),
      (this.errors = []),
      (this.apiKey = t),
      (this.authReferrerPolicy = n),
      (this.channel = o),
      (this.client = r),
      (this.id = i || wf),
      (this.language = l),
      (this.libraries = u),
      (this.mapIds = a),
      (this.nonce = s),
      (this.region = c),
      (this.retries = f),
      (this.url = m),
      (this.version = y),
      sn.instance)
    ) {
      if (!OC(this.options, sn.instance.options))
        throw new Error(
          `Loader must not be called again with different options. ${JSON.stringify(
            this.options,
          )} !== ${JSON.stringify(sn.instance.options)}`,
        );
      return sn.instance;
    }
    sn.instance = this;
  }
  get options() {
    return {
      version: this.version,
      apiKey: this.apiKey,
      channel: this.channel,
      client: this.client,
      id: this.id,
      libraries: this.libraries,
      language: this.language,
      region: this.region,
      mapIds: this.mapIds,
      nonce: this.nonce,
      url: this.url,
      authReferrerPolicy: this.authReferrerPolicy,
    };
  }
  get status() {
    return this.errors.length
      ? $n.FAILURE
      : this.done
      ? $n.SUCCESS
      : this.loading
      ? $n.LOADING
      : $n.INITIALIZED;
  }
  get failed() {
    return this.done && !this.loading && this.errors.length >= this.retries + 1;
  }
  createUrl() {
    let t = this.url;
    return (
      (t += "?callback=__googleMapsCallback"),
      this.apiKey && (t += `&key=${this.apiKey}`),
      this.channel && (t += `&channel=${this.channel}`),
      this.client && (t += `&client=${this.client}`),
      this.libraries.length > 0 &&
        (t += `&libraries=${this.libraries.join(",")}`),
      this.language && (t += `&language=${this.language}`),
      this.region && (t += `&region=${this.region}`),
      this.version && (t += `&v=${this.version}`),
      this.mapIds && (t += `&map_ids=${this.mapIds.join(",")}`),
      this.authReferrerPolicy &&
        (t += `&auth_referrer_policy=${this.authReferrerPolicy}`),
      t
    );
  }
  deleteScript() {
    const t = document.getElementById(this.id);
    t && t.remove();
  }
  load() {
    return this.loadPromise();
  }
  loadPromise() {
    return new Promise((t, n) => {
      this.loadCallback((o) => {
        o ? n(o.error) : t(window.google);
      });
    });
  }
  importLibrary(t) {
    return this.execute(), google.maps.importLibrary(t);
  }
  loadCallback(t) {
    this.callbacks.push(t), this.execute();
  }
  setScript() {
    var t, n;
    if (document.getElementById(this.id)) {
      this.callback();
      return;
    }
    const o = {
      key: this.apiKey,
      channel: this.channel,
      client: this.client,
      libraries: this.libraries.length && this.libraries,
      v: this.version,
      mapIds: this.mapIds,
      language: this.language,
      region: this.region,
      authReferrerPolicy: this.authReferrerPolicy,
    };
    Object.keys(o).forEach((i) => !o[i] && delete o[i]),
      (!(
        (n =
          (t = window == null ? void 0 : window.google) === null || t === void 0
            ? void 0
            : t.maps) === null || n === void 0
      ) &&
        n.importLibrary) ||
        ((i) => {
          let l,
            u,
            a,
            s = "The Google Maps JavaScript API",
            c = "google",
            f = "importLibrary",
            m = "__ib__",
            y = document,
            v = window;
          v = v[c] || (v[c] = {});
          const g = v.maps || (v.maps = {}),
            w = new Set(),
            d = new URLSearchParams(),
            p = () =>
              l ||
              (l = new Promise((h, E) =>
                MC(this, void 0, void 0, function* () {
                  var _;
                  yield (u = y.createElement("script")),
                    (u.id = this.id),
                    d.set("libraries", [...w] + "");
                  for (a in i)
                    d.set(
                      a.replace(/[A-Z]/g, (C) => "_" + C[0].toLowerCase()),
                      i[a],
                    );
                  d.set("callback", c + ".maps." + m),
                    (u.src = this.url + "?" + d),
                    (g[m] = h),
                    (u.onerror = () => (l = E(Error(s + " could not load.")))),
                    (u.nonce =
                      this.nonce ||
                      ((_ = y.querySelector("script[nonce]")) === null ||
                      _ === void 0
                        ? void 0
                        : _.nonce) ||
                      ""),
                    y.head.append(u);
                }),
              ));
          g[f]
            ? console.warn(s + " only loads once. Ignoring:", i)
            : (g[f] = (h, ...E) => w.add(h) && p().then(() => g[f](h, ...E)));
        })(o);
    const r = this.libraries.map((i) => this.importLibrary(i));
    r.length || r.push(this.importLibrary("core")),
      Promise.all(r).then(
        () => this.callback(),
        (i) => {
          const l = new ErrorEvent("error", { error: i });
          this.loadErrorCallback(l);
        },
      );
  }
  reset() {
    this.deleteScript(),
      (this.done = !1),
      (this.loading = !1),
      (this.errors = []),
      (this.onerrorEvent = null);
  }
  resetIfRetryingFailed() {
    this.failed && this.reset();
  }
  loadErrorCallback(t) {
    if ((this.errors.push(t), this.errors.length <= this.retries)) {
      const n = this.errors.length * Math.pow(2, this.errors.length);
      console.error(`Failed to load Google Maps script, retrying in ${n} ms.`),
        setTimeout(() => {
          this.deleteScript(), this.setScript();
        }, n);
    } else (this.onerrorEvent = t), this.callback();
  }
  callback() {
    (this.done = !0),
      (this.loading = !1),
      this.callbacks.forEach((t) => {
        t(this.onerrorEvent);
      }),
      (this.callbacks = []);
  }
  execute() {
    if ((this.resetIfRetryingFailed(), this.done)) this.callback();
    else {
      if (window.google && window.google.maps && window.google.maps.version) {
        console.warn(
          "Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match.",
        ),
          this.callback();
        return;
      }
      this.loading || ((this.loading = !0), this.setScript());
    }
  }
}
var PC = Qn;
function Qn(e, t) {
  (this.x = e), (this.y = t);
}
Qn.prototype = {
  clone: function () {
    return new Qn(this.x, this.y);
  },
  add: function (e) {
    return this.clone()._add(e);
  },
  sub: function (e) {
    return this.clone()._sub(e);
  },
  multByPoint: function (e) {
    return this.clone()._multByPoint(e);
  },
  divByPoint: function (e) {
    return this.clone()._divByPoint(e);
  },
  mult: function (e) {
    return this.clone()._mult(e);
  },
  div: function (e) {
    return this.clone()._div(e);
  },
  rotate: function (e) {
    return this.clone()._rotate(e);
  },
  rotateAround: function (e, t) {
    return this.clone()._rotateAround(e, t);
  },
  matMult: function (e) {
    return this.clone()._matMult(e);
  },
  unit: function () {
    return this.clone()._unit();
  },
  perp: function () {
    return this.clone()._perp();
  },
  round: function () {
    return this.clone()._round();
  },
  mag: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  equals: function (e) {
    return this.x === e.x && this.y === e.y;
  },
  dist: function (e) {
    return Math.sqrt(this.distSqr(e));
  },
  distSqr: function (e) {
    var t = e.x - this.x,
      n = e.y - this.y;
    return t * t + n * n;
  },
  angle: function () {
    return Math.atan2(this.y, this.x);
  },
  angleTo: function (e) {
    return Math.atan2(this.y - e.y, this.x - e.x);
  },
  angleWith: function (e) {
    return this.angleWithSep(e.x, e.y);
  },
  angleWithSep: function (e, t) {
    return Math.atan2(this.x * t - this.y * e, this.x * e + this.y * t);
  },
  _matMult: function (e) {
    var t = e[0] * this.x + e[1] * this.y,
      n = e[2] * this.x + e[3] * this.y;
    return (this.x = t), (this.y = n), this;
  },
  _add: function (e) {
    return (this.x += e.x), (this.y += e.y), this;
  },
  _sub: function (e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  },
  _mult: function (e) {
    return (this.x *= e), (this.y *= e), this;
  },
  _div: function (e) {
    return (this.x /= e), (this.y /= e), this;
  },
  _multByPoint: function (e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  },
  _divByPoint: function (e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  },
  _unit: function () {
    return this._div(this.mag()), this;
  },
  _perp: function () {
    var e = this.y;
    return (this.y = this.x), (this.x = -e), this;
  },
  _rotate: function (e) {
    var t = Math.cos(e),
      n = Math.sin(e),
      o = t * this.x - n * this.y,
      r = n * this.x + t * this.y;
    return (this.x = o), (this.y = r), this;
  },
  _rotateAround: function (e, t) {
    var n = Math.cos(e),
      o = Math.sin(e),
      r = t.x + n * (this.x - t.x) - o * (this.y - t.y),
      i = t.y + o * (this.x - t.x) + n * (this.y - t.y);
    return (this.x = r), (this.y = i), this;
  },
  _round: function () {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  },
};
Qn.convert = function (e) {
  return e instanceof Qn ? e : Array.isArray(e) ? new Qn(e[0], e[1]) : e;
};
const pn = ao(PC);
function pe() {
  return (pe = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
      }).apply(this, arguments);
}
function wl(e, t) {
  var n, o;
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (n = e),
    (o = t),
    (Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        })(n, o);
}
function eu(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
var LC = {
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    margin: 0,
    padding: 0,
    position: "absolute",
  },
  bC = (function (e) {
    function t() {
      return e.apply(this, arguments) || this;
    }
    wl(t, e);
    var n = t.prototype;
    return (
      (n.shouldComponentUpdate = function () {
        return !1;
      }),
      (n.render = function () {
        return De.createElement("div", {
          ref: this.props.registerChild,
          style: LC,
        });
      }),
      t
    );
  })(S.Component),
  Cf = (function (e) {
    function t(o) {
      var r;
      return ((r = e.call(this) || this).gmapInstance = o), r;
    }
    wl(t, e);
    var n = t.prototype;
    return (
      (n.getChildren = function () {
        return this.gmapInstance.props.children;
      }),
      (n.getMousePosition = function () {
        return this.gmapInstance.mouse_;
      }),
      (n.getUpdateCounter = function () {
        return this.gmapInstance.updateCounter_;
      }),
      (n.dispose = function () {
        (this.gmapInstance = null), this.removeAllListeners();
      }),
      t
    );
  })(kC),
  Vr = function (e, t) {
    for (
      var n = pe(
          {},
          ((function (i) {
            if (i == null) throw new TypeError("Cannot destructure " + i);
          })(e),
          e),
        ),
        o = 0;
      o < t.length;
      o++
    ) {
      var r = t[o];
      r in n && delete n[r];
    }
    return n;
  },
  DC = Object.prototype.hasOwnProperty;
function Sf(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Xe(e, t) {
  if (Sf(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    o = Object.keys(t);
  if (n.length !== o.length) return !1;
  for (var r = 0; r < n.length; r++)
    if (!DC.call(t, n[r]) || !Sf(e[n[r]], t[n[r]])) return !1;
  return !0;
}
var TC = {
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    margin: 0,
    padding: 0,
    position: "absolute",
  },
  IC = {
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    backgroundColor: "transparent",
    position: "absolute",
  },
  $i = (function (e) {
    function t(o) {
      var r;
      return (
        ((r = e.call(this, o) || this)._getState = function () {
          return {
            children: r.props.dispatcher.getChildren(),
            updateCounter: r.props.dispatcher.getUpdateCounter(),
          };
        }),
        (r._onChangeHandler = function () {
          if (r.dimensionsCache_) {
            var i = (r.state.children || []).length,
              l = r._getState();
            r.setState(l, function () {
              return (
                (l.children || []).length !== i && r._onMouseChangeHandler()
              );
            });
          }
        }),
        (r._onChildClick = function () {
          r.props.onChildClick &&
            r.hoverChildProps_ &&
            r.props.onChildClick(r.hoverKey_, r.hoverChildProps_);
        }),
        (r._onChildMouseDown = function () {
          r.props.onChildMouseDown &&
            r.hoverChildProps_ &&
            r.props.onChildMouseDown(r.hoverKey_, r.hoverChildProps_);
        }),
        (r._onChildMouseEnter = function (i, l) {
          r.dimensionsCache_ &&
            (r.props.onChildMouseEnter && r.props.onChildMouseEnter(i, l),
            (r.hoverChildProps_ = l),
            (r.hoverKey_ = i),
            r.setState({ hoverKey: i }));
        }),
        (r._onChildMouseLeave = function () {
          if (r.dimensionsCache_) {
            var i = r.hoverKey_;
            i != null &&
              (r.props.onChildMouseLeave &&
                r.props.onChildMouseLeave(i, r.hoverChildProps_),
              (r.hoverKey_ = null),
              (r.hoverChildProps_ = null),
              r.setState({ hoverKey: null }));
          }
        }),
        (r._onMouseAllow = function (i) {
          i || r._onChildMouseLeave(), (r.allowMouse_ = i);
        }),
        (r._onMouseChangeHandler = function () {
          r.allowMouse_ && r._onMouseChangeHandlerRaf();
        }),
        (r._onMouseChangeHandlerRaf = function () {
          if (r.dimensionsCache_) {
            var i = r.props.dispatcher.getMousePosition();
            if (i) {
              var l = [],
                u = r.props.getHoverDistance();
              if (
                (De.Children.forEach(r.state.children, function (c, f) {
                  if (
                    c &&
                    (c.props.latLng !== void 0 ||
                      c.props.lat !== void 0 ||
                      c.props.lng !== void 0)
                  ) {
                    var m = c.key != null ? c.key : f,
                      y = r.props.distanceToMouse(
                        r.dimensionsCache_[m],
                        i,
                        c.props,
                      );
                    y < u && l.push({ key: m, dist: y, props: c.props });
                  }
                }),
                l.length)
              ) {
                l.sort(function (c, f) {
                  return c.dist - f.dist;
                });
                var a = l[0].key,
                  s = l[0].props;
                r.hoverKey_ !== a &&
                  (r._onChildMouseLeave(), r._onChildMouseEnter(a, s));
              } else r._onChildMouseLeave();
            } else r._onChildMouseLeave();
          }
        }),
        (r._getDimensions = function (i) {
          return r.dimensionsCache_[i];
        }),
        (r.dimensionsCache_ = {}),
        (r.hoverKey_ = null),
        (r.hoverChildProps_ = null),
        (r.allowMouse_ = !0),
        (r.state = pe({}, r._getState(), { hoverKey: null })),
        r
      );
    }
    wl(t, e);
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.props.dispatcher.on("kON_CHANGE", this._onChangeHandler),
          this.props.dispatcher.on(
            "kON_MOUSE_POSITION_CHANGE",
            this._onMouseChangeHandler,
          ),
          this.props.dispatcher.on("kON_CLICK", this._onChildClick),
          this.props.dispatcher.on("kON_MDOWN", this._onChildMouseDown);
      }),
      (n.shouldComponentUpdate = function (o, r) {
        return this.props.experimental === !0
          ? !Xe(this.props, o) ||
              !Xe(Vr(this.state, ["hoverKey"]), Vr(r, ["hoverKey"]))
          : !Xe(this.props, o) || !Xe(this.state, r);
      }),
      (n.componentWillUnmount = function () {
        this.props.dispatcher.removeListener(
          "kON_CHANGE",
          this._onChangeHandler,
        ),
          this.props.dispatcher.removeListener(
            "kON_MOUSE_POSITION_CHANGE",
            this._onMouseChangeHandler,
          ),
          this.props.dispatcher.removeListener("kON_CLICK", this._onChildClick),
          this.props.dispatcher.removeListener(
            "kON_MDOWN",
            this._onChildMouseDown,
          ),
          (this.dimensionsCache_ = null);
      }),
      (n.render = function () {
        var o = this,
          r = this.props.style || TC;
        this.dimensionsCache_ = {};
        var i = De.Children.map(this.state.children, function (l, u) {
          if (l) {
            if (
              l.props.latLng === void 0 &&
              l.props.lat === void 0 &&
              l.props.lng === void 0
            )
              return De.cloneElement(l, {
                $geoService: o.props.geoService,
                $onMouseAllow: o._onMouseAllow,
                $prerender: o.props.prerender,
              });
            var a =
                l.props.latLng !== void 0
                  ? l.props.latLng
                  : { lat: l.props.lat, lng: l.props.lng },
              s = o.props.insideMapPanes
                ? o.props.geoService.fromLatLngToDivPixel(a)
                : o.props.geoService.fromLatLngToCenterPixel(a),
              c = { left: s.x, top: s.y };
            if (
              l.props.seLatLng !== void 0 ||
              (l.props.seLat !== void 0 && l.props.seLng !== void 0)
            ) {
              var f =
                  l.props.seLatLng !== void 0
                    ? l.props.seLatLng
                    : { lat: l.props.seLat, lng: l.props.seLng },
                m = o.props.insideMapPanes
                  ? o.props.geoService.fromLatLngToDivPixel(f)
                  : o.props.geoService.fromLatLngToCenterPixel(f);
              (c.width = m.x - s.x), (c.height = m.y - s.y);
            }
            var y = o.props.geoService.fromLatLngToContainerPixel(a),
              v = l.key != null ? l.key : u;
            return (
              (o.dimensionsCache_[v] = pe({ x: y.x, y: y.y }, a)),
              De.createElement(
                "div",
                {
                  key: v,
                  style: pe({}, IC, c),
                  className: l.props.$markerHolderClassName,
                },
                De.cloneElement(l, {
                  $hover: v === o.state.hoverKey,
                  $getDimensions: o._getDimensions,
                  $dimensionKey: v,
                  $geoService: o.props.geoService,
                  $onMouseAllow: o._onMouseAllow,
                  $prerender: o.props.prerender,
                }),
              )
            );
          }
        });
        return De.createElement("div", { style: r }, i);
      }),
      t
    );
  })(S.Component);
($i.propTypes = {
  geoService: D.any,
  style: D.any,
  distanceToMouse: D.func,
  dispatcher: D.any,
  onChildClick: D.func,
  onChildMouseDown: D.func,
  onChildMouseLeave: D.func,
  onChildMouseEnter: D.func,
  getHoverDistance: D.func,
  insideMapPanes: D.bool,
  prerender: D.bool,
}),
  ($i.defaultProps = { insideMapPanes: !1, prerender: !1 });
var FC = {
  width: "50%",
  height: "50%",
  left: "50%",
  top: "50%",
  margin: 0,
  padding: 0,
  position: "absolute",
};
function RC(e) {
  return De.createElement(
    "div",
    { style: FC },
    De.createElement($i, pe({}, e, { prerender: !0 })),
  );
}
var tu,
  Er,
  fa,
  AC = ["key"],
  NC = new Promise(function (e) {
    fa = e;
  }),
  Ef = function (e, t) {
    if (!e) return NC;
    if (Er) return Er;
    e.libraries || (e.libraries = []);
    var n = [].concat(e.libraries);
    if (
      (t &&
        ((n.length !== 0 && n.includes("visualization")) ||
          n.push("visualization"),
        console.warn(
          "heatmapLibrary will be deprecated in the future. Please use { libraries: ['visualization'] } in bootstrapURLKeys property instead",
        )),
      typeof window > "u")
    )
      throw new Error("google map cannot be loaded outside browser env");
    var o = e.key,
      r = (function (i, l) {
        if (i == null) return {};
        var u,
          a,
          s = {},
          c = Object.keys(i);
        for (a = 0; a < c.length; a++)
          l.indexOf((u = c[a])) >= 0 || (s[u] = i[u]);
        return s;
      })(e, AC);
    return (
      tu || (tu = new sn(pe({ apiKey: o || "" }, r, { libraries: n }))),
      (Er = tu.load().then(function () {
        return fa(window.google.maps), window.google.maps;
      })),
      fa(Er),
      Er
    );
  };
function qh(e, t, n) {
  var o = n - t;
  return e === n ? e : ((((e - t) % o) + o) % o) + t;
}
var Ht = (function () {
  function e(t, n) {
    if (isNaN(t) || isNaN(n))
      throw new Error("Invalid LatLng object: (" + t + ", " + n + ")");
    (this.lat = +t), (this.lng = +n);
  }
  return (
    (e.prototype.wrap = function () {
      return new e(this.lat, qh(this.lng, -180, 180));
    }),
    e
  );
})();
Ht.convert = function (e) {
  return e instanceof Ht
    ? e
    : Array.isArray(e)
    ? new Ht(e[0], e[1])
    : "lng" in e && "lat" in e
    ? new Ht(e.lat, e.lng)
    : e;
};
var zC = (function () {
    function e(r, i, l) {
      (this.tileSize = r || 512),
        (this._minZoom = i || 0),
        (this._maxZoom = l || 52),
        (this.latRange = [-85.05113, 85.05113]),
        (this.width = 0),
        (this.height = 0),
        (this.zoom = 0),
        (this.center = new Ht(0, 0)),
        (this.angle = 0);
    }
    var t,
      n,
      o = e.prototype;
    return (
      (o.zoomScale = function (r) {
        return Math.pow(2, r);
      }),
      (o.scaleZoom = function (r) {
        return Math.log(r) / Math.LN2;
      }),
      (o.project = function (r, i) {
        return new pn(this.lngX(r.lng, i), this.latY(r.lat, i));
      }),
      (o.unproject = function (r, i) {
        return new Ht(this.yLat(r.y, i), this.xLng(r.x, i));
      }),
      (o.lngX = function (r, i) {
        return ((180 + r) * (i || this.worldSize)) / 360;
      }),
      (o.latY = function (r, i) {
        return (
          ((180 -
            (180 / Math.PI) *
              Math.log(Math.tan(Math.PI / 4 + (r * Math.PI) / 360))) *
            (i || this.worldSize)) /
          360
        );
      }),
      (o.xLng = function (r, i) {
        return (360 * r) / (i || this.worldSize) - 180;
      }),
      (o.yLat = function (r, i) {
        return (
          (360 / Math.PI) *
            Math.atan(
              Math.exp(
                ((180 - (360 * r) / (i || this.worldSize)) * Math.PI) / 180,
              ),
            ) -
          90
        );
      }),
      (o.locationPoint = function (r) {
        var i = this.project(r);
        return this.centerPoint._sub(this.point._sub(i)._rotate(this.angle));
      }),
      (o.pointLocation = function (r) {
        var i = this.centerPoint._sub(r)._rotate(-this.angle);
        return this.unproject(this.point.sub(i));
      }),
      (t = e),
      (n = [
        {
          key: "minZoom",
          get: function () {
            return this._minZoom;
          },
          set: function (r) {
            (this._minZoom = r), (this.zoom = Math.max(this.zoom, r));
          },
        },
        {
          key: "maxZoom",
          get: function () {
            return this._maxZoom;
          },
          set: function (r) {
            (this._maxZoom = r), (this.zoom = Math.min(this.zoom, r));
          },
        },
        {
          key: "worldSize",
          get: function () {
            return this.tileSize * this.scale;
          },
        },
        {
          key: "centerPoint",
          get: function () {
            return new pn(0, 0);
          },
        },
        {
          key: "size",
          get: function () {
            return new pn(this.width, this.height);
          },
        },
        {
          key: "bearing",
          get: function () {
            return (-this.angle / Math.PI) * 180;
          },
          set: function (r) {
            this.angle = (-qh(r, -180, 180) * Math.PI) / 180;
          },
        },
        {
          key: "zoom",
          get: function () {
            return this._zoom;
          },
          set: function (r) {
            var i = Math.min(Math.max(r, this.minZoom), this.maxZoom);
            (this._zoom = i),
              (this.scale = this.zoomScale(i)),
              (this.tileZoom = Math.floor(i)),
              (this.zoomFraction = i - this.tileZoom);
          },
        },
        {
          key: "x",
          get: function () {
            return this.lngX(this.center.lng);
          },
        },
        {
          key: "y",
          get: function () {
            return this.latY(this.center.lat);
          },
        },
        {
          key: "point",
          get: function () {
            return new pn(this.x, this.y);
          },
        },
      ]) &&
        (function (r, i) {
          for (var l = 0; l < i.length; l++) {
            var u = i[l];
            (u.enumerable = u.enumerable || !1),
              (u.configurable = !0),
              "value" in u && (u.writable = !0),
              Object.defineProperty(
                r,
                typeof (a = (function (s, c) {
                  if (typeof s != "object" || s === null) return s;
                  var f = s[Symbol.toPrimitive];
                  if (f !== void 0) {
                    var m = f.call(s, "string");
                    if (typeof m != "object") return m;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return String(s);
                })(u.key)) == "symbol"
                  ? a
                  : String(a),
                u,
              );
          }
          var a;
        })(t.prototype, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e
    );
  })(),
  jC = (function () {
    function e(n) {
      (this.hasSize_ = !1),
        (this.hasView_ = !1),
        (this.transform_ = new zC(n || 512));
    }
    var t = e.prototype;
    return (
      (t.setView = function (n, o, r) {
        (this.transform_.center = Ht.convert(n)),
          (this.transform_.zoom = +o),
          (this.transform_.bearing = +r),
          (this.hasView_ = !0);
      }),
      (t.setViewSize = function (n, o) {
        (this.transform_.width = n),
          (this.transform_.height = o),
          (this.hasSize_ = !0);
      }),
      (t.setMapCanvasProjection = function (n, o) {
        (this.maps_ = n), (this.mapCanvasProjection_ = o);
      }),
      (t.canProject = function () {
        return this.hasSize_ && this.hasView_;
      }),
      (t.hasSize = function () {
        return this.hasSize_;
      }),
      (t.fromLatLngToCenterPixel = function (n) {
        return this.transform_.locationPoint(Ht.convert(n));
      }),
      (t.fromLatLngToDivPixel = function (n) {
        if (this.mapCanvasProjection_) {
          var o = new this.maps_.LatLng(n.lat, n.lng);
          return this.mapCanvasProjection_.fromLatLngToDivPixel(o);
        }
        return this.fromLatLngToCenterPixel(n);
      }),
      (t.fromLatLngToContainerPixel = function (n) {
        if (this.mapCanvasProjection_) {
          var o = new this.maps_.LatLng(n.lat, n.lng);
          return this.mapCanvasProjection_.fromLatLngToContainerPixel(o);
        }
        var r = this.fromLatLngToCenterPixel(n);
        return (
          (r.x -=
            this.transform_.worldSize *
            Math.round(r.x / this.transform_.worldSize)),
          (r.x += this.transform_.width / 2),
          (r.y += this.transform_.height / 2),
          r
        );
      }),
      (t.fromContainerPixelToLatLng = function (n) {
        if (this.mapCanvasProjection_) {
          var o = this.mapCanvasProjection_.fromContainerPixelToLatLng(n);
          return { lat: o.lat(), lng: o.lng() };
        }
        var r = pe({}, n);
        (r.x -= this.transform_.width / 2), (r.y -= this.transform_.height / 2);
        var i = this.transform_.pointLocation(pn.convert(r));
        return (i.lng -= 360 * Math.round(i.lng / 360)), i;
      }),
      (t.getWidth = function () {
        return this.transform_.width;
      }),
      (t.getHeight = function () {
        return this.transform_.height;
      }),
      (t.getZoom = function () {
        return this.transform_.zoom;
      }),
      (t.getCenter = function () {
        return this.transform_.pointLocation({ x: 0, y: 0 });
      }),
      (t.getBounds = function (n, o) {
        var r = (n && n[0]) || 0,
          i = (n && n[1]) || 0,
          l = (n && n[2]) || 0,
          u = (n && n[3]) || 0;
        if (this.getWidth() - i - u > 0 && this.getHeight() - r - l > 0) {
          var a = this.transform_.pointLocation(
              pn.convert({
                x: u - this.getWidth() / 2,
                y: r - this.getHeight() / 2,
              }),
            ),
            s = this.transform_.pointLocation(
              pn.convert({
                x: this.getWidth() / 2 - i,
                y: this.getHeight() / 2 - l,
              }),
            ),
            c = [a.lat, a.lng, s.lat, s.lng, s.lat, a.lng, a.lat, s.lng];
          return (
            o &&
              (c = c.map(function (f) {
                return Math.round(f * o) / o;
              })),
            c
          );
        }
        return [0, 0, 0, 0];
      }),
      e
    );
  })();
function xf(e) {
  if (window.requestAnimationFrame) return window.requestAnimationFrame(e);
  var t = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
  return t ? t(e) : window.setTimeout(e, 1e3 / 60);
}
var VC = Math.log2
  ? Math.log2
  : function (e) {
      return Math.log(e) / Math.LN2;
    };
function _f(e, t) {
  return Object.keys(e).reduce(function (n, o) {
    return t(e[o]) && (n[o] = e[o]), n;
  }, {});
}
var ln = function (e) {
    if (e !== null && typeof e == "object") {
      if (Object.keys(e).length === 0) return !0;
    } else if (e == null || e === "") return !0;
    return !1;
  },
  $C = Object.prototype.toString;
function $o(e) {
  return (
    typeof e == "number" ||
    ((function (t) {
      return !!t && typeof t == "object";
    })(e) &&
      $C.call(e) === "[object Number]")
  );
}
var Bo = null;
function kf() {
  if (Bo) return Bo;
  if (typeof navigator < "u") {
    var e = navigator.userAgent.indexOf("MSIE") > -1,
      t = navigator.userAgent.indexOf("Firefox") > -1,
      n = navigator.userAgent.toLowerCase().indexOf("op") > -1,
      o = navigator.userAgent.indexOf("Chrome") > -1,
      r = navigator.userAgent.indexOf("Safari") > -1;
    return (
      o && r && (r = !1),
      o && n && (o = !1),
      (Bo = {
        isExplorer: e,
        isFirefox: t,
        isOpera: n,
        isChrome: o,
        isSafari: r,
      })
    );
  }
  return (Bo = {
    isChrome: !0,
    isExplorer: !1,
    isFirefox: !1,
    isOpera: !1,
    isSafari: !1,
  });
}
var Mf = function (e) {
  return Function.prototype.toString.call(e);
};
function br(e) {
  if (!e || typeof e != "object") return !1;
  var t =
    typeof e.constructor == "function"
      ? Object.getPrototypeOf(e)
      : Object.prototype;
  if (t === null) return !0;
  var n = t.constructor;
  return typeof n == "function" && n instanceof n && Mf(n) === Mf(Object);
}
function xr(e, t, n, o) {
  e.addEventListener(
    t,
    n,
    (function () {
      var r = !1;
      try {
        var i = Object.defineProperty({}, "passive", {
          get: function () {
            r = !0;
          },
        });
        window.addEventListener("test", i, i),
          window.removeEventListener("test", i, i);
      } catch {
        r = !1;
      }
      return r;
    })()
      ? { capture: o, passive: !0 }
      : o,
  );
}
var St,
  da = !(
    typeof window > "u" ||
    !window.document ||
    !window.document.createElement
  );
St = da ? window : typeof self < "u" ? self : void 0;
var Of,
  pa = typeof document < "u" && document.attachEvent,
  Pf = !1;
if (da && !pa) {
  var BC = (function () {
      var e =
        St.requestAnimationFrame ||
        St.mozRequestAnimationFrame ||
        St.webkitRequestAnimationFrame ||
        function (t) {
          return St.setTimeout(t, 20);
        };
      return function (t) {
        return e(t);
      };
    })(),
    UC =
      ((Of =
        St.cancelAnimationFrame ||
        St.mozCancelAnimationFrame ||
        St.webkitCancelAnimationFrame ||
        St.clearTimeout),
      function (e) {
        return Of(e);
      }),
    ha = function (e) {
      var t = e.__resizeTriggers__,
        n = t.firstElementChild,
        o = t.lastElementChild,
        r = n.firstElementChild;
      (o.scrollLeft = o.scrollWidth),
        (o.scrollTop = o.scrollHeight),
        (r.style.width = n.offsetWidth + 1 + "px"),
        (r.style.height = n.offsetHeight + 1 + "px"),
        (n.scrollLeft = n.scrollWidth),
        (n.scrollTop = n.scrollHeight);
    },
    Lf = function (e) {
      var t = this;
      ha(this),
        this.__resizeRAF__ && UC(this.__resizeRAF__),
        (this.__resizeRAF__ = BC(function () {
          (function (n) {
            return (
              n.offsetWidth != n.__resizeLast__.width ||
              n.offsetHeight != n.__resizeLast__.height
            );
          })(t) &&
            ((t.__resizeLast__.width = t.offsetWidth),
            (t.__resizeLast__.height = t.offsetHeight),
            t.__resizeListeners__.forEach(function (n) {
              n.call(t, e);
            }));
        }));
    },
    nu = !1,
    ru = "",
    ma = "animationstart",
    ou = "Webkit Moz O ms".split(" "),
    HC =
      "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(
        " ",
      );
  if (da) {
    var bf = document.createElement("fakeelement");
    if ((bf.style.animationName !== void 0 && (nu = !0), nu === !1)) {
      for (var _r = 0; _r < ou.length; _r++)
        if (bf.style[ou[_r] + "AnimationName"] !== void 0) {
          (ru = "-" + ou[_r].toLowerCase() + "-"), (ma = HC[_r]), (nu = !0);
          break;
        }
    }
  }
  var va = "resizeanim",
    WC =
      "@" +
      ru +
      "keyframes " +
      va +
      " { from { opacity: 0; } to { opacity: 0; } } ",
    KC = ru + "animation: 1ms " + va + "; ";
}
var ii = Vt.createPortal !== void 0,
  Df = ii ? Vt.createPortal : Vt.unstable_renderSubtreeIntoContainer,
  Uo = function (e) {
    return br(e) ? e : { lat: e[0], lng: e[1] };
  },
  Tf = function (e, t) {
    return t < e ? e : t;
  },
  li = (function (e) {
    function t(o) {
      var r;
      if (
        (((r = e.call(this, o) || this)._getMinZoom = function () {
          if (r.geoService_.getWidth() > 0 || r.geoService_.getHeight() > 0) {
            var l = Math.ceil(r.geoService_.getWidth() / 256) + 2,
              u = Math.ceil(r.geoService_.getHeight() / 256) + 2,
              a = Math.max(l, u);
            return Math.ceil(VC(a));
          }
          return 3;
        }),
        (r._computeMinZoom = function (l) {
          return ln(l) ? r._getMinZoom() : l;
        }),
        (r._mapDomResizeCallback = function () {
          if (((r.resetSizeOnIdle_ = !0), r.maps_)) {
            var l = r.props.center || r.props.defaultCenter,
              u = r.map_.getCenter();
            r.maps_.event.trigger(r.map_, "resize"),
              r.map_.setCenter(r.props.resetBoundsOnResize ? l : u);
          }
        }),
        (r._setLayers = function (l) {
          l.forEach(function (u) {
            (r.layers_[u] = new r.maps_[u]()), r.layers_[u].setMap(r.map_);
          });
        }),
        (r._renderPortal = function () {
          return De.createElement($i, {
            experimental: r.props.experimental,
            onChildClick: r._onChildClick,
            onChildMouseDown: r._onChildMouseDown,
            onChildMouseEnter: r._onChildMouseEnter,
            onChildMouseLeave: r._onChildMouseLeave,
            geoService: r.geoService_,
            insideMapPanes: !0,
            distanceToMouse: r.props.distanceToMouse,
            getHoverDistance: r._getHoverDistance,
            dispatcher: r.markersDispatcher_,
          });
        }),
        (r._initMap = function () {
          if (!r.initialized_) {
            r.initialized_ = !0;
            var l = Uo(r.props.center || r.props.defaultCenter);
            r.geoService_.setView(l, r.props.zoom || r.props.defaultZoom, 0),
              r._onBoundsChanged();
            var u = pe(
              {},
              r.props.apiKey && { key: r.props.apiKey },
              r.props.bootstrapURLKeys,
            );
            r.props
              .googleMapLoader(u, r.props.heatmapLibrary)
              .then(function (a) {
                if (r.mounted_) {
                  var s,
                    c,
                    f = r.geoService_.getCenter(),
                    m = {
                      zoom: r.props.zoom || r.props.defaultZoom,
                      center: new a.LatLng(f.lat, f.lng),
                    };
                  r.props.heatmap.positions &&
                    (Object.assign(eu(r), {
                      heatmap:
                        ((s = a),
                        (c = r.props.heatmap),
                        new s.visualization.HeatmapLayer({
                          data: c.positions.reduce(function (k, F) {
                            var L = F.weight,
                              $ = L === void 0 ? 1 : L;
                            return (
                              k.push({
                                location: new s.LatLng(F.lat, F.lng),
                                weight: $,
                              }),
                              k
                            );
                          }, []),
                        })),
                    }),
                    (function (k, F) {
                      var L = F.options,
                        $ = L === void 0 ? {} : L;
                      Object.keys($).map(function (G) {
                        return k.set(G, $[G]);
                      });
                    })(r.heatmap, r.props.heatmap));
                  var y = _f(a, br),
                    v =
                      typeof r.props.options == "function"
                        ? r.props.options(y)
                        : r.props.options,
                    g = !ln(r.props.draggable) && {
                      draggable: r.props.draggable,
                    },
                    w = r._computeMinZoom(v.minZoom);
                  r.minZoom_ = w;
                  var d = pe(
                    {},
                    {
                      overviewMapControl: !1,
                      streetViewControl: !1,
                      rotateControl: !0,
                      mapTypeControl: !1,
                      styles: [
                        {
                          featureType: "poi",
                          elementType: "labels",
                          stylers: [{ visibility: "off" }],
                        },
                      ],
                      minZoom: 3,
                    },
                    { minZoom: w },
                    v,
                    m,
                  );
                  r.defaultDraggableOption_ = ln(d.draggable)
                    ? r.defaultDraggableOption_
                    : d.draggable;
                  var p = pe({}, d, g);
                  p.minZoom = Tf(p.minZoom, w);
                  var h = new a.Map(Vt.findDOMNode(r.googleMapDom_), p);
                  (r.map_ = h), (r.maps_ = a), r._setLayers(r.props.layerTypes);
                  var E = a.version.match(/^3\.(\d+)\./),
                    _ = E && Number(E[1]),
                    C = eu(r),
                    x = Object.assign(new a.OverlayView(), {
                      onAdd: function () {
                        var k =
                            typeof screen < "u"
                              ? screen.width + "px"
                              : "2000px",
                          F =
                            typeof screen < "u"
                              ? screen.height + "px"
                              : "2000px",
                          L = document.createElement("div");
                        if (
                          ((L.style.backgroundColor = "transparent"),
                          (L.style.position = "absolute"),
                          (L.style.left = "0px"),
                          (L.style.top = "0px"),
                          (L.style.width = k),
                          (L.style.height = F),
                          C.props.overlayViewDivStyle)
                        ) {
                          var $ = C.props.overlayViewDivStyle;
                          typeof $ == "object" &&
                            Object.keys($).forEach(function (G) {
                              L.style[G] = $[G];
                            });
                        }
                        this.getPanes().overlayMouseTarget.appendChild(L),
                          C.geoService_.setMapCanvasProjection(
                            a,
                            x.getProjection(),
                          ),
                          ii
                            ? C.setState({ overlay: L })
                            : Df(C, C._renderPortal(), L, function () {
                                return C.setState({ overlay: L });
                              });
                      },
                      onRemove: function () {
                        var k = C.state.overlay;
                        k && !ii && Vt.unmountComponentAtNode(k),
                          C.setState({ overlay: null });
                      },
                      draw: function () {
                        if (
                          (C.updateCounter_++,
                          C._onBoundsChanged(h, a, !C.props.debounced),
                          C.googleApiLoadedCalled_ ||
                            (C._onGoogleApiLoaded({
                              map: h,
                              maps: a,
                              ref: C.googleMapDom_,
                            }),
                            (C.googleApiLoadedCalled_ = !0)),
                          C.mouse_)
                        ) {
                          var k = C.geoService_.fromContainerPixelToLatLng(
                            C.mouse_,
                          );
                          (C.mouse_.lat = k.lat), (C.mouse_.lng = k.lng);
                        }
                        C._onChildMouseMove(),
                          C.markersDispatcher_ &&
                            (C.markersDispatcher_.emit("kON_CHANGE"),
                            C.fireMouseEventOnIdle_ &&
                              C.markersDispatcher_.emit(
                                "kON_MOUSE_POSITION_CHANGE",
                              ));
                      },
                    });
                  (r.overlay_ = x),
                    x.setMap(h),
                    r.props.heatmap.positions && r.heatmap.setMap(h),
                    r.props.onTilesLoaded &&
                      a.event.addListener(h, "tilesloaded", function () {
                        C._onTilesLoaded();
                      }),
                    a.event.addListener(h, "zoom_changed", function () {
                      C.geoService_.getZoom() !== h.getZoom() &&
                        (C.zoomAnimationInProgress_ ||
                          ((C.zoomAnimationInProgress_ = !0),
                          C._onZoomAnimationStart(h.zoom)),
                        _ < 32) &&
                        (new Date().getTime() - r.zoomControlClickTime_ < 300
                          ? xf(function () {
                              return xf(function () {
                                C.updateCounter_++, C._onBoundsChanged(h, a);
                              });
                            })
                          : (C.updateCounter_++, C._onBoundsChanged(h, a)));
                    }),
                    a.event.addListener(h, "idle", function () {
                      if (r.resetSizeOnIdle_) {
                        r._setViewSize();
                        var k = r._computeMinZoom(v.minZoom);
                        k !== r.minZoom_ &&
                          ((r.minZoom_ = k), h.setOptions({ minZoom: k })),
                          (r.resetSizeOnIdle_ = !1);
                      }
                      C.zoomAnimationInProgress_ &&
                        ((C.zoomAnimationInProgress_ = !1),
                        C._onZoomAnimationEnd(h.zoom)),
                        C.updateCounter_++,
                        C._onBoundsChanged(h, a),
                        (C.dragTime_ = 0),
                        C.markersDispatcher_ &&
                          C.markersDispatcher_.emit("kON_CHANGE");
                    }),
                    a.event.addListener(h, "mouseover", function () {
                      C.mouseInMap_ = !0;
                    }),
                    a.event.addListener(h, "click", function () {
                      C.mouseInMap_ = !0;
                    }),
                    a.event.addListener(h, "mouseout", function () {
                      (C.mouseInMap_ = !1),
                        (C.mouse_ = null),
                        C.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE");
                    }),
                    a.event.addListener(h, "drag", function () {
                      (C.dragTime_ = new Date().getTime()), C._onDrag(h);
                    }),
                    a.event.addListener(h, "dragend", function () {
                      var k = a.event.addListener(h, "idle", function () {
                        a.event.removeListener(k), C._onDragEnd(h);
                      });
                    }),
                    a.event.addListener(h, "maptypeid_changed", function () {
                      C._onMapTypeIdChange(h.getMapTypeId());
                    });
                }
              })
              .catch(function (a) {
                throw (
                  (r._onGoogleApiLoaded({
                    map: null,
                    maps: null,
                    ref: r.googleMapDom_,
                  }),
                  console.error(a),
                  a)
                );
              });
          }
        }),
        (r._onGoogleApiLoaded = function () {
          var l;
          r.props.onGoogleApiLoaded &&
            (l = r.props).onGoogleApiLoaded.apply(l, arguments);
        }),
        (r._getHoverDistance = function () {
          return r.props.hoverDistance;
        }),
        (r._onDrag = function () {
          var l;
          return r.props.onDrag && (l = r.props).onDrag.apply(l, arguments);
        }),
        (r._onDragEnd = function () {
          var l;
          return (
            r.props.onDragEnd && (l = r.props).onDragEnd.apply(l, arguments)
          );
        }),
        (r._onMapTypeIdChange = function () {
          var l;
          return (
            r.props.onMapTypeIdChange &&
            (l = r.props).onMapTypeIdChange.apply(l, arguments)
          );
        }),
        (r._onZoomAnimationStart = function () {
          var l;
          return (
            r.props.onZoomAnimationStart &&
            (l = r.props).onZoomAnimationStart.apply(l, arguments)
          );
        }),
        (r._onZoomAnimationEnd = function () {
          var l;
          return (
            r.props.onZoomAnimationEnd &&
            (l = r.props).onZoomAnimationEnd.apply(l, arguments)
          );
        }),
        (r._onTilesLoaded = function () {
          return r.props.onTilesLoaded && r.props.onTilesLoaded();
        }),
        (r._onChildClick = function () {
          var l;
          if (r.props.onChildClick)
            return (l = r.props).onChildClick.apply(l, arguments);
        }),
        (r._onChildMouseDown = function (l, u) {
          (r.childMouseDownArgs_ = [l, u]),
            r.props.onChildMouseDown &&
              r.props.onChildMouseDown(l, u, pe({}, r.mouse_));
        }),
        (r._onChildMouseUp = function () {
          var l;
          r.childMouseDownArgs_ &&
            (r.props.onChildMouseUp &&
              (l = r.props).onChildMouseUp.apply(
                l,
                r.childMouseDownArgs_.concat([pe({}, r.mouse_)]),
              ),
            (r.childMouseDownArgs_ = null),
            (r.childMouseUpTime_ = new Date().getTime()));
        }),
        (r._onChildMouseMove = function () {
          var l;
          r.childMouseDownArgs_ &&
            r.props.onChildMouseMove &&
            (l = r.props).onChildMouseMove.apply(
              l,
              r.childMouseDownArgs_.concat([pe({}, r.mouse_)]),
            );
        }),
        (r._onChildMouseEnter = function () {
          var l;
          if (r.props.onChildMouseEnter)
            return (l = r.props).onChildMouseEnter.apply(l, arguments);
        }),
        (r._onChildMouseLeave = function () {
          var l;
          if (r.props.onChildMouseLeave)
            return (l = r.props).onChildMouseLeave.apply(l, arguments);
        }),
        (r._setViewSize = function () {
          if (r.mounted_) {
            if (
              document.fullscreen ||
              document.webkitIsFullScreen ||
              document.mozFullScreen ||
              document.msFullscreenElement
            )
              r.geoService_.setViewSize(window.innerWidth, window.innerHeight);
            else {
              var l = Vt.findDOMNode(r.googleMapDom_);
              r.geoService_.setViewSize(l.clientWidth, l.clientHeight);
            }
            r._onBoundsChanged();
          }
        }),
        (r._onWindowResize = function () {
          r.resetSizeOnIdle_ = !0;
        }),
        (r._onMapMouseMove = function (l) {
          if (r.mouseInMap_) {
            var u = new Date().getTime();
            u - r.mouseMoveTime_ > 50 &&
              (r.boundingRect_ = l.currentTarget.getBoundingClientRect()),
              (r.mouseMoveTime_ = u);
            var a = l.clientX - r.boundingRect_.left,
              s = l.clientY - r.boundingRect_.top;
            r.mouse_ || (r.mouse_ = { x: 0, y: 0, lat: 0, lng: 0 }),
              (r.mouse_.x = a),
              (r.mouse_.y = s);
            var c = r.geoService_.fromContainerPixelToLatLng(r.mouse_);
            (r.mouse_.lat = c.lat),
              (r.mouse_.lng = c.lng),
              r._onChildMouseMove(),
              u - r.dragTime_ < 100
                ? (r.fireMouseEventOnIdle_ = !0)
                : (r.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE"),
                  (r.fireMouseEventOnIdle_ = !1));
          }
        }),
        (r._onClick = function () {
          var l;
          return (
            r.props.onClick &&
            !r.childMouseDownArgs_ &&
            new Date().getTime() - r.childMouseUpTime_ > 300 &&
            r.dragTime_ === 0 &&
            (l = r.props).onClick.apply(l, arguments)
          );
        }),
        (r._onMapClick = function (l) {
          r.markersDispatcher_ &&
            (r._onMapMouseMove(l),
            new Date().getTime() - r.dragTime_ > 100 &&
              (r.mouse_ && r._onClick(pe({}, r.mouse_, { event: l })),
              r.markersDispatcher_.emit("kON_CLICK", l)));
        }),
        (r._onMapMouseDownNative = function (l) {
          r.mouseInMap_ && r._onMapMouseDown(l);
        }),
        (r._onMapMouseDown = function (l) {
          r.markersDispatcher_ &&
            new Date().getTime() - r.dragTime_ > 100 &&
            (r._onMapMouseMove(l), r.markersDispatcher_.emit("kON_MDOWN", l));
        }),
        (r._onMapMouseDownCapture = function () {
          kf().isChrome && (r.zoomControlClickTime_ = new Date().getTime());
        }),
        (r._onKeyDownCapture = function () {
          kf().isChrome && (r.zoomControlClickTime_ = new Date().getTime());
        }),
        (r._isCenterDefined = function (l) {
          return (
            l &&
            ((br(l) && $o(l.lat) && $o(l.lng)) ||
              (l.length === 2 && $o(l[0]) && $o(l[1])))
          );
        }),
        (r._onBoundsChanged = function (l, u, a) {
          if (l) {
            var s = l.getCenter();
            r.geoService_.setView([s.lat(), s.lng()], l.getZoom(), 0);
          }
          if (
            (r.props.onChange || r.props.onBoundsChange) &&
            r.geoService_.canProject()
          ) {
            var c = r.geoService_.getZoom(),
              f = r.geoService_.getBounds(),
              m = r.geoService_.getCenter();
            if (
              !(function (v, g, w) {
                if (v && g) {
                  for (var d = 0; d !== v.length; ++d)
                    if (Math.abs(v[d] - g[d]) > 1e-5) return !1;
                  return !0;
                }
                return !1;
              })(f, r.prevBounds_) &&
              a !== !1
            ) {
              var y = r.geoService_.getBounds(r.props.margin);
              r.props.onBoundsChange &&
                r.props.onBoundsChange(
                  r.centerIsObject_ ? pe({}, m) : [m.lat, m.lng],
                  c,
                  f,
                  y,
                ),
                r.props.onChange &&
                  r.props.onChange({
                    center: pe({}, m),
                    zoom: c,
                    bounds: {
                      nw: { lat: f[0], lng: f[1] },
                      se: { lat: f[2], lng: f[3] },
                      sw: { lat: f[4], lng: f[5] },
                      ne: { lat: f[6], lng: f[7] },
                    },
                    marginBounds: {
                      nw: { lat: y[0], lng: y[1] },
                      se: { lat: y[2], lng: y[3] },
                      sw: { lat: y[4], lng: y[5] },
                      ne: { lat: y[6], lng: y[7] },
                    },
                    size: r.geoService_.hasSize()
                      ? {
                          width: r.geoService_.getWidth(),
                          height: r.geoService_.getHeight(),
                        }
                      : { width: 0, height: 0 },
                  }),
                (r.prevBounds_ = f);
            }
          }
        }),
        (r._registerChild = function (l) {
          r.googleMapDom_ = l;
        }),
        (r.mounted_ = !1),
        (r.initialized_ = !1),
        (r.googleApiLoadedCalled_ = !1),
        (r.map_ = null),
        (r.maps_ = null),
        (r.prevBounds_ = null),
        (r.heatmap = null),
        (r.layers_ = {}),
        (r.mouse_ = null),
        (r.mouseMoveTime_ = 0),
        (r.boundingRect_ = null),
        (r.mouseInMap_ = !0),
        (r.dragTime_ = 0),
        (r.fireMouseEventOnIdle_ = !1),
        (r.updateCounter_ = 0),
        (r.markersDispatcher_ = new Cf(eu(r))),
        (r.geoService_ = new jC(256)),
        (r.centerIsObject_ = br(r.props.center)),
        (r.minZoom_ = 3),
        (r.defaultDraggableOption_ = !0),
        (r.zoomControlClickTime_ = 0),
        (r.childMouseDownArgs_ = null),
        (r.childMouseUpTime_ = 0),
        (r.googleMapDom_ = null),
        r._isCenterDefined(r.props.center || r.props.defaultCenter))
      ) {
        var i = Uo(r.props.center || r.props.defaultCenter);
        r.geoService_.setView(i, r.props.zoom || r.props.defaultZoom, 0);
      }
      return (
        (r.zoomAnimationInProgress_ = !1), (r.state = { overlay: null }), r
      );
    }
    wl(t, e);
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        var o = this;
        (this.mounted_ = !0),
          (this.markersDispatcher_ = new Cf(this)),
          xr(window, "resize", this._onWindowResize, !1),
          xr(window, "keydown", this._onKeyDownCapture, !0);
        var r = Vt.findDOMNode(this.googleMapDom_);
        r && xr(r, "mousedown", this._onMapMouseDownNative, !0),
          xr(window, "mouseup", this._onChildMouseUp, !1);
        var i = pe(
          {},
          this.props.apiKey && { key: this.props.apiKey },
          this.props.bootstrapURLKeys,
        );
        this.props.googleMapLoader(i, this.props.heatmapLibrary),
          setTimeout(
            function () {
              o._setViewSize(),
                o._isCenterDefined(o.props.center || o.props.defaultCenter) &&
                  o._initMap();
            },
            0,
            this,
          ),
          this.props.resetBoundsOnResize &&
            (function (l, u) {
              if (l.parentNode === void 0) {
                var a = document.createElement("div");
                l.parentNode = a;
              }
              (l = l.parentNode),
                pa
                  ? l.attachEvent("onresize", u)
                  : (l.__resizeTriggers__ ||
                      (getComputedStyle(l).position == "static" &&
                        (l.style.position = "relative"),
                      (function () {
                        if (!Pf) {
                          var s =
                              (WC || "") +
                              ".resize-triggers { " +
                              (KC || "") +
                              'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
                            c =
                              document.head ||
                              document.getElementsByTagName("head")[0],
                            f = document.createElement("style");
                          (f.type = "text/css"),
                            f.styleSheet
                              ? (f.styleSheet.cssText = s)
                              : f.appendChild(document.createTextNode(s)),
                            c.appendChild(f),
                            (Pf = !0);
                        }
                      })(),
                      (l.__resizeLast__ = {}),
                      (l.__resizeListeners__ = []),
                      ((l.__resizeTriggers__ =
                        document.createElement("div")).className =
                        "resize-triggers"),
                      (l.__resizeTriggers__.innerHTML =
                        '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>'),
                      l.appendChild(l.__resizeTriggers__),
                      ha(l),
                      xr(l, "scroll", Lf, !0),
                      ma &&
                        l.__resizeTriggers__.addEventListener(ma, function (s) {
                          s.animationName == va && ha(l);
                        })),
                    l.__resizeListeners__.push(u));
            })(r, this._mapDomResizeCallback);
      }),
      (n.shouldComponentUpdate = function (o, r) {
        return (
          !Xe(Vr(this.props, ["draggable"]), Vr(o, ["draggable"])) ||
          !Xe(this.state, r)
        );
      }),
      (n.componentDidUpdate = function (o) {
        var r = this;
        if (
          (!this._isCenterDefined(o.center) &&
            this._isCenterDefined(this.props.center) &&
            setTimeout(function () {
              return r._initMap();
            }, 0),
          this.map_)
        ) {
          var i = this.geoService_.getCenter();
          if (this._isCenterDefined(this.props.center)) {
            var l = Uo(this.props.center),
              u = this._isCenterDefined(o.center) ? Uo(o.center) : null;
            (!u || Math.abs(l.lat - u.lat) + Math.abs(l.lng - u.lng) > 1e-5) &&
              Math.abs(l.lat - i.lat) + Math.abs(l.lng - i.lng) > 1e-5 &&
              this.map_.panTo({ lat: l.lat, lng: l.lng });
          }
          if (
            (ln(this.props.zoom) ||
              (Math.abs(this.props.zoom - o.zoom) > 0 &&
                this.map_.setZoom(this.props.zoom)),
            !ln(o.draggable) && ln(this.props.draggable)
              ? this.map_.setOptions({
                  draggable: this.defaultDraggableOption_,
                })
              : Xe(o.draggable, this.props.draggable) ||
                this.map_.setOptions({ draggable: this.props.draggable }),
            !ln(this.props.options) && !Xe(o.options, this.props.options))
          ) {
            var a = _f(this.maps_, br),
              s =
                typeof this.props.options == "function"
                  ? this.props.options(a)
                  : this.props.options;
            if ("minZoom" in (s = Vr(s, ["zoom", "center", "draggable"]))) {
              var c = this._computeMinZoom(s.minZoom);
              s.minZoom = Tf(s.minZoom, c);
            }
            this.map_.setOptions(s);
          }
          Xe(this.props.layerTypes, o.layerTypes) ||
            (Object.keys(this.layers_).forEach(function (f) {
              r.layers_[f].setMap(null), delete r.layers_[f];
            }),
            this._setLayers(this.props.layerTypes)),
            this.heatmap &&
              !Xe(this.props.heatmap.positions, o.heatmap.positions) &&
              this.heatmap.setData(
                this.props.heatmap.positions.map(function (f) {
                  return {
                    location: new r.maps_.LatLng(f.lat, f.lng),
                    weight: f.weight,
                  };
                }),
              ),
            this.heatmap &&
              !Xe(this.props.heatmap.options, o.heatmap.options) &&
              Object.keys(this.props.heatmap.options).forEach(function (f) {
                r.heatmap.set(f, r.props.heatmap.options[f]);
              });
        }
        this.markersDispatcher_.emit("kON_CHANGE"),
          Xe(this.props.hoverDistance, o.hoverDistance) ||
            this.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE");
      }),
      (n.componentWillUnmount = function () {
        this.mounted_ = !1;
        var o,
          r,
          i = Vt.findDOMNode(this.googleMapDom_);
        i && i.removeEventListener("mousedown", this._onMapMouseDownNative, !0),
          window.removeEventListener("resize", this._onWindowResize),
          window.removeEventListener("keydown", this._onKeyDownCapture),
          window.removeEventListener("mouseup", this._onChildMouseUp, !1),
          this.props.resetBoundsOnResize &&
            ((r = this._mapDomResizeCallback),
            (o = (o = i).parentNode),
            pa
              ? o.detachEvent("onresize", r)
              : (o.__resizeListeners__.splice(
                  o.__resizeListeners__.indexOf(r),
                  1,
                ),
                o.__resizeListeners__.length ||
                  (o.removeEventListener("scroll", Lf),
                  (o.__resizeTriggers__ = !o.removeChild(
                    o.__resizeTriggers__,
                  ))))),
          this.overlay_ && this.overlay_.setMap(null),
          this.maps_ &&
            this.map_ &&
            this.props.shouldUnregisterMapOnUnmount &&
            (this.map_.setOptions({ scrollwheel: !1 }),
            this.maps_.event.clearInstanceListeners(this.map_)),
          this.props.shouldUnregisterMapOnUnmount &&
            ((this.map_ = null), (this.maps_ = null)),
          this.markersDispatcher_.dispose(),
          (this.resetSizeOnIdle_ = !1),
          this.props.shouldUnregisterMapOnUnmount &&
            (delete this.map_, delete this.markersDispatcher_);
      }),
      (n.render = function () {
        var o = this.state.overlay,
          r = o
            ? null
            : De.createElement(RC, {
                experimental: this.props.experimental,
                onChildClick: this._onChildClick,
                onChildMouseDown: this._onChildMouseDown,
                onChildMouseEnter: this._onChildMouseEnter,
                onChildMouseLeave: this._onChildMouseLeave,
                geoService: this.geoService_,
                insideMapPanes: !1,
                distanceToMouse: this.props.distanceToMouse,
                getHoverDistance: this._getHoverDistance,
                dispatcher: this.markersDispatcher_,
              });
        return De.createElement(
          "div",
          {
            style: this.props.style,
            onMouseMove: this._onMapMouseMove,
            onMouseDownCapture: this._onMapMouseDownCapture,
            onClick: this._onMapClick,
          },
          De.createElement(bC, { registerChild: this._registerChild }),
          ii && o && Df(this._renderPortal(), o),
          r,
        );
      }),
      t
    );
  })(S.Component);
(li.propTypes = {
  apiKey: D.string,
  bootstrapURLKeys: D.any,
  defaultCenter: D.oneOfType([
    D.array,
    D.shape({ lat: D.number, lng: D.number }),
  ]),
  center: D.oneOfType([D.array, D.shape({ lat: D.number, lng: D.number })]),
  defaultZoom: D.number,
  zoom: D.number,
  onBoundsChange: D.func,
  onChange: D.func,
  onClick: D.func,
  onChildClick: D.func,
  onChildMouseDown: D.func,
  onChildMouseUp: D.func,
  onChildMouseMove: D.func,
  onChildMouseEnter: D.func,
  onChildMouseLeave: D.func,
  onZoomAnimationStart: D.func,
  onZoomAnimationEnd: D.func,
  onDrag: D.func,
  onDragEnd: D.func,
  onMapTypeIdChange: D.func,
  onTilesLoaded: D.func,
  options: D.any,
  distanceToMouse: D.func,
  hoverDistance: D.number,
  debounced: D.bool,
  margin: D.array,
  googleMapLoader: D.any,
  onGoogleApiLoaded: D.func,
  yesIWantToUseGoogleMapApiInternals: D.bool,
  draggable: D.bool,
  style: D.any,
  resetBoundsOnResize: D.bool,
  layerTypes: D.arrayOf(D.string),
  shouldUnregisterMapOnUnmount: D.bool,
}),
  (li.defaultProps = {
    distanceToMouse: function (e, t) {
      return Math.sqrt((e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y));
    },
    hoverDistance: 30,
    debounced: !0,
    options: function () {
      return {
        overviewMapControl: !1,
        streetViewControl: !1,
        rotateControl: !0,
        mapTypeControl: !1,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
        minZoom: 3,
      };
    },
    googleMapLoader: Ef,
    yesIWantToUseGoogleMapApiInternals: !1,
    style: {
      width: "100%",
      height: "100%",
      margin: 0,
      padding: 0,
      position: "relative",
    },
    layerTypes: [],
    heatmap: {},
    heatmapLibrary: !1,
    shouldUnregisterMapOnUnmount: !0,
  }),
  (li.googleMapLoader = Ef);
var qe = ((e) => ((e.DARK = "dark"), (e.LIGHT = "light"), e))(qe || {});
function GC({ opacity: e }) {
  return M.jsxs(M.Fragment, {
    children: [
      " ",
      M.jsx("img", {
        style: { opacity: e, transition: "all", transitionDuration: "150ms" },
        className:
          "z-10 w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer invert-[64%] sepia-[22%] saturate-[4374%] hue-rotate-[290deg] brightness-[103%] contrast-[101%]",
        src: "/img/marker.svg",
      }),
    ],
  });
}
const ZC = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];
function QC() {
  const [e, t] = S.useState([]),
    [n, o] = S.useState(1),
    [r, i] = S.useState(qe.LIGHT),
    l = () => {
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? i(qe.DARK)
        : i(qe.LIGHT);
    };
  return (
    S.useEffect(() => {
      async function u() {
        const { centers: a } = await Gh("/centers/", "GET", {});
        t(a);
      }
      u(), l();
    }, []),
    M.jsxs("div", {
      className:
        "min-h-[calc(100vh-208px)] dark:bg-gunmetal-300 dark:text-gunmetal-900 text-gunmetal pt-2 mb-auto ",
      children: [
        M.jsx("p", {
          className: "text-center text-7xl my-3 mb-8 font-bold",
          children: "Centros",
        }),
        M.jsx("div", {
          className: "w-10/12 h-[55vh] xl:h-[60vh] justify-center mx-auto",
          children:
            r &&
            M.jsx(li, {
              bootstrapURLKeys: {
                key: "AIzaSyA1ZMdrjnYTEZKi7_7rzQhYn53EMKmcNVk",
              },
              center: { lat: 8.800433, lng: -74.73748 },
              zoom: 6,
              onDrag: () => o(0),
              onDragEnd: () => {
                o(1), l();
              },
              options: { styles: r == qe.LIGHT ? [] : ZC },
              children: e.map((u, a) =>
                M.jsx(
                  GC,
                  { opacity: n, lat: u.lat, lng: u.long, text: u.name },
                  a,
                ),
              ),
            }),
        }),
      ],
    })
  );
}
function YC() {
  return M.jsx("div", {
    className: "min-h-[calc(100vh-208px)] dark:bg-gunmetal-300",
  });
}
function On({ route: e, text: t, image: n }) {
  const o = vo();
  return M.jsxs(Nt, {
    to: e,
    className:
      "group text-center flex  mx-auto xl:m-4 my-4 w-48 min-w-max rounded-full py-2 justify-center hover:bg-hot_pink-700 dark:text-gunmetal-900 dark:hover:bg-hot_pink-700 dark:hover:text-gunmetal hover:shadow-md transition-all duration-300 font-semibold " +
      (o.pathname == e
        ? "shadow-xl bg-gradient-to-r from-hot_pink-400 to-hot_pink-600 dark:text-gunmetal-400"
        : "bg-neutral-200 dark:bg-gunmetal-500"),
    children: [
      M.jsx("img", {
        className: "h-8 mr-2 dark:invert contrast-200 dark:filter pl-5",
        src: n,
      }),
      M.jsx("p", { className: "align-middle h-full pr-5", children: t }),
    ],
  });
}
function XC({ theme: e, changeTheme: t }) {
  return M.jsx("button", {
    type: "button",
    className:
      "aspect-square h-16 xl:flex  text-gunmetal-500 dark:text-gunmetal-900 hover:bg-gunmetal-900 dark:hover:bg-gunmetal-500  rounded-lg text-md justify-center align-middle mr-2",
    onClick: t,
    children:
      e === "light"
        ? M.jsx("svg", {
            className: "w-12 aspect-square justify-center mx-auto",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: M.jsx("path", {
              d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z",
            }),
          })
        : M.jsx("svg", {
            className: "w-12 justify-center mx-auto",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: M.jsx("path", {
              d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }),
          }),
  });
}
function qC() {
  const [e, t] = S.useState(qe.LIGHT),
    [n, o] = S.useState(!1);
  S.useEffect(() => {
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? t(qe.DARK)
      : t(qe.LIGHT);
  }, []);
  const r = (l) => {
      o(l), (document.body.style.overflowY = l ? "hidden" : "auto");
    },
    i = () => {
      localStorage.getItem("color-theme")
        ? localStorage.getItem("color-theme") === "light"
          ? (document.documentElement.classList.add("dark"),
            t(qe.DARK),
            localStorage.setItem("color-theme", "dark"))
          : (document.documentElement.classList.remove("dark"),
            t(qe.LIGHT),
            localStorage.setItem("color-theme", "light"))
        : document.documentElement.classList.contains("dark")
        ? (document.documentElement.classList.remove("dark"),
          t(qe.DARK),
          localStorage.setItem("color-theme", "light"))
        : (document.documentElement.classList.add("dark"),
          t(qe.LIGHT),
          localStorage.setItem("color-theme", "dark"));
    };
  return M.jsxs("div", {
    className: "flex w-screen shadow-lg h-20 dark:bg-gunmetal-300",
    children: [
      M.jsxs(Nt, {
        to: "/",
        className: "group justify-left w-1/2 flex align-middle transition",
        children: [
          M.jsx("img", {
            src: "/img/logo.png",
            className: "h-14 m-2 rounded-xl",
          }),
          M.jsxs("div", {
            className:
              "flex my-auto  flex-col justify-center align-middle max-w-fit",
            children: [
              M.jsx("p", {
                className:
                  "text-left m-4 mb-0 text-4xl font-bold bg-gunmetal dark:bg-gradient-to-r from-hot_pink to-baker-miller_pink bg-clip-text text-transparent",
                children: "Petinder",
              }),
              M.jsx("hr", {
                className:
                  "bg-gradient-to-r from-hot_pink to-baker-miller_pink dark:from-gunmetal-300 dark:to-hot_pink max-w-0 group-hover:max-w-full transition-all duration-500 h-1 border-none rounded-xl mb-4",
              }),
            ],
          }),
        ],
      }),
      M.jsxs("div", {
        className: "justify-left hidden xl:flex text-lg text-gunmetal",
        children: [
          M.jsx(On, {
            route: "/adopta",
            text: "Adopta",
            image: "/img/dog.png",
          }),
          M.jsx(On, {
            route: "/centros",
            text: "Centros",
            image: "/img/dog-house.png",
          }),
          M.jsx(On, {
            route: "/adoptamos",
            text: "Adoptamos",
            image: "/img/pawprint.png",
          }),
        ],
      }),
      M.jsxs("div", {
        className: "flex w-1/2 justify-end items-center",
        children: [
          M.jsx(XC, { theme: e, changeTheme: i }),
          M.jsxs("div", {
            className:
              "flex xl:hidden group items-center flex-col w-16 aspect-square py-3 hover:bg-gunmetal-900 dark:hover:bg-gunmetal-500 rounded-lg mr-2 p-1 my-auto align-middle cursor-pointer transition-all ",
            onClick: () => r(!n),
            children: [
              M.jsx("span", {
                className:
                  "bg-gunmetal dark:bg-gunmetal-900 w-10 block h-1 rounded my-auto duration-300" +
                  (n ? " -rotate-45 translate-y-[13px]" : " rotate-0"),
              }),
              M.jsx("span", {
                className:
                  " w-10 block h-1 rounded my-auto duration-300" +
                  (n
                    ? " bg-transparent "
                    : " bg-gunmetal dark:bg-gunmetal-900"),
              }),
              M.jsx("span", {
                className:
                  "bg-gunmetal dark:bg-gunmetal-900 w-10 block h-1 rounded my-auto duration-300" +
                  (n ? " rotate-45 -translate-y-[13px]" : " rotate-0"),
              }),
            ],
          }),
        ],
      }),
      M.jsxs("div", {
        onClick: () => r(!1),
        className:
          " bg-white/80 dark:bg-gunmetal-500/80 w-screen absolute h-fit top-20 z-10 justify-center transition duration-300 flex flex-wrap" +
          (n ? " animate-show" : " animate-hide hidden"),
        children: [
          M.jsx(On, {
            route: "/adopta",
            text: "Adopta",
            image: "/img/dog.png",
          }),
          M.jsx(On, {
            route: "/centros",
            text: "Centros",
            image: "/img/dog-house.png",
          }),
          M.jsx(On, {
            route: "/adoptamos",
            text: "Adoptamos",
            image: "/img/pawprint.png",
          }),
        ],
      }),
    ],
  });
}
function JC() {
  return M.jsxs("div", {
    className:
      "shadow-inner dark:bg-gunmetal-200 dark:text-gunmetal-900 h-32 flex justify-around pt-2 text-center text-md xl:text-xl",
    children: [
      M.jsxs("div", {
        className: "flex flex-col",
        children: [
          M.jsx("p", { className: "font-bold ", children: "Contáctenos" }),
          M.jsx(Nt, {
            className: "underline",
            to: "mailto:petinder.col@gmail.com",
            children: "Email",
          }),
          M.jsx(Nt, {
            to: "tel:+573012668699",
            className: "underline",
            children: "+57 301-266-8699",
          }),
        ],
      }),
      M.jsxs("div", {
        children: [
          M.jsx("p", { className: "font-bold ", children: "Redes Social" }),
          M.jsx(Nt, {
            className: "underline",
            to: "https://www.instagram.com/petinder.col/",
            children: "Instagram",
          }),
        ],
      }),
      M.jsxs("div", {
        className: "flex flex-col",
        children: [
          M.jsx("p", { className: "font-bold", children: "Paginas" }),
          M.jsx(Nt, {
            to: "/adopta",
            className: "underline",
            children: "Adopta",
          }),
          M.jsx(Nt, {
            to: "/centros",
            className: "underline",
            children: "Centros",
          }),
          M.jsx(Nt, {
            to: "/adoptamos",
            className: "underline",
            children: "Adoptamos",
          }),
        ],
      }),
    ],
  });
}
lu.createRoot(document.getElementById("root")).render(
  M.jsx(De.StrictMode, {
    children: M.jsxs(S0, {
      children: [
        M.jsx(qC, {}),
        M.jsxs(m0, {
          children: [
            M.jsx(Pn, {
              path: "/",
              element: M.jsx(k0, {}),
              errorElement: M.jsx(Sr, {}),
            }),
            M.jsx(Pn, {
              path: "/adopta",
              element: M.jsx(yC, {}),
              errorElement: M.jsx(Sr, {}),
            }),
            M.jsx(Pn, {
              path: "/centros",
              element: M.jsx(QC, {}),
              errorElement: M.jsx(Sr, {}),
            }),
            M.jsx(Pn, {
              path: "/adoptamos",
              element: M.jsx(YC, {}),
              errorElement: M.jsx(Sr, {}),
            }),
            M.jsx(Pn, { path: "*", element: M.jsx(Sr, {}) }),
          ],
        }),
        M.jsx(JC, {}),
      ],
    }),
  }),
);
