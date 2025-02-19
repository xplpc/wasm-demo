let Tn, yt, qe, e_, bt, PT, sg, zc, Xn, RT, We, io, bs, ka, gu, ko, xh, by, NT, $T;
let __tla = (async () => {
  (function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
      return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
      r(s);
    new MutationObserver((s) => {
      for (const i of s)
        if (i.type === "childList")
          for (const o of i.addedNodes)
            o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(s) {
      const i = {};
      return s.integrity && (i.integrity = s.integrity), s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
    }
    function r(s) {
      if (s.ep)
        return;
      s.ep = true;
      const i = n(s);
      fetch(s.href, i);
    }
  })();
  function To(t) {
    const e = /* @__PURE__ */ Object.create(null);
    for (const n of t.split(","))
      e[n] = 1;
    return (n) => n in e;
  }
  const Te = {}, Gn = [], Tt = () => {
  }, bh = () => false, Hs = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), wo = (t) => t.startsWith("onUpdate:"), He = Object.assign, Ao = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  }, yh = Object.prototype.hasOwnProperty, be = (t, e) => yh.call(t, e), ce = Array.isArray, qn = (t) => Wr(t) === "[object Map]", js = (t) => Wr(t) === "[object Set]", xa = (t) => Wr(t) === "[object Date]", ue = (t) => typeof t == "function", Fe = (t) => typeof t == "string", kt = (t) => typeof t == "symbol", Ce = (t) => t !== null && typeof t == "object", dc = (t) => (Ce(t) || ue(t)) && ue(t.then) && ue(t.catch), hc = Object.prototype.toString, Wr = (t) => hc.call(t), Th = (t) => Wr(t).slice(8, -1), pc = (t) => Wr(t) === "[object Object]", Co = (t) => Fe(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Tr = To(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Ws = (t) => {
    const e = /* @__PURE__ */ Object.create(null);
    return (n) => e[n] || (e[n] = t(n));
  }, wh = /-(\w)/g, gt = Ws((t) => t.replace(wh, (e, n) => n ? n.toUpperCase() : "")), Ah = /\B([A-Z])/g, Dn = Ws((t) => t.replace(Ah, "-$1").toLowerCase()), Bs = Ws((t) => t.charAt(0).toUpperCase() + t.slice(1)), bi = Ws((t) => t ? `on${Bs(t)}` : ""), ln = (t, e) => !Object.is(t, e), Es = (t, ...e) => {
    for (let n = 0; n < t.length; n++)
      t[n](...e);
  }, gc = (t, e, n, r = false) => {
    Object.defineProperty(t, e, {
      configurable: true,
      enumerable: false,
      writable: r,
      value: n
    });
  }, Xi = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  };
  let Da;
  const Us = () => Da || (Da = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  function So(t) {
    if (ce(t)) {
      const e = {};
      for (let n = 0; n < t.length; n++) {
        const r = t[n], s = Fe(r) ? $h(r) : So(r);
        if (s)
          for (const i in s)
            e[i] = s[i];
      }
      return e;
    } else if (Fe(t) || Ce(t))
      return t;
  }
  const Ch = /;(?![^(]*\))/g, Sh = /:([^]+)/, Oh = /\/\*[^]*?\*\//g;
  function $h(t) {
    const e = {};
    return t.replace(Oh, "").split(Ch).forEach((n) => {
      if (n) {
        const r = n.split(Sh);
        r.length > 1 && (e[r[0].trim()] = r[1].trim());
      }
    }), e;
  }
  function Oo(t) {
    let e = "";
    if (Fe(t))
      e = t;
    else if (ce(t))
      for (let n = 0; n < t.length; n++) {
        const r = Oo(t[n]);
        r && (e += r + " ");
      }
    else if (Ce(t))
      for (const n in t)
        t[n] && (e += n + " ");
    return e.trim();
  }
  const Ph = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Nh = To(Ph);
  function _c(t) {
    return !!t || t === "";
  }
  function Rh(t, e) {
    if (t.length !== e.length)
      return false;
    let n = true;
    for (let r = 0; n && r < t.length; r++)
      n = Ks(t[r], e[r]);
    return n;
  }
  function Ks(t, e) {
    if (t === e)
      return true;
    let n = xa(t), r = xa(e);
    if (n || r)
      return n && r ? t.getTime() === e.getTime() : false;
    if (n = kt(t), r = kt(e), n || r)
      return t === e;
    if (n = ce(t), r = ce(e), n || r)
      return n && r ? Rh(t, e) : false;
    if (n = Ce(t), r = Ce(e), n || r) {
      if (!n || !r)
        return false;
      const s = Object.keys(t).length, i = Object.keys(e).length;
      if (s !== i)
        return false;
      for (const o in t) {
        const c = t.hasOwnProperty(o), u = e.hasOwnProperty(o);
        if (c && !u || !c && u || !Ks(t[o], e[o]))
          return false;
      }
    }
    return String(t) === String(e);
  }
  function mc(t, e) {
    return t.findIndex((n) => Ks(n, e));
  }
  let vc, Ec, yi;
  vc = (t) => !!(t && t.__v_isRef === true);
  xh = (t) => Fe(t) ? t : t == null ? "" : ce(t) || Ce(t) && (t.toString === hc || !ue(t.toString)) ? vc(t) ? xh(t.value) : JSON.stringify(t, Ec, 2) : String(t);
  Ec = (t, e) => vc(e) ? Ec(t, e.value) : qn(e) ? {
    [`Map(${e.size})`]: [
      ...e.entries()
    ].reduce((n, [r, s], i) => (n[yi(r, i) + " =>"] = s, n), {})
  } : js(e) ? {
    [`Set(${e.size})`]: [
      ...e.values()
    ].map((n) => yi(n))
  } : kt(e) ? yi(e) : Ce(e) && !ce(e) && !pc(e) ? String(e) : e;
  yi = (t, e = "") => {
    var n;
    return kt(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
  };
  let Ge;
  class bc {
    constructor(e = false) {
      this.detached = e, this._active = true, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Ge, !e && Ge && (this.index = (Ge.scopes || (Ge.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let e, n;
        if (this.scopes)
          for (e = 0, n = this.scopes.length; e < n; e++)
            this.scopes[e].pause();
        for (e = 0, n = this.effects.length; e < n; e++)
          this.effects[e].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = false;
        let e, n;
        if (this.scopes)
          for (e = 0, n = this.scopes.length; e < n; e++)
            this.scopes[e].resume();
        for (e = 0, n = this.effects.length; e < n; e++)
          this.effects[e].resume();
      }
    }
    run(e) {
      if (this._active) {
        const n = Ge;
        try {
          return Ge = this, e();
        } finally {
          Ge = n;
        }
      }
    }
    on() {
      Ge = this;
    }
    off() {
      Ge = this.parent;
    }
    stop(e) {
      if (this._active) {
        this._active = false;
        let n, r;
        for (n = 0, r = this.effects.length; n < r; n++)
          this.effects[n].stop();
        for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
          this.cleanups[n]();
        if (this.cleanups.length = 0, this.scopes) {
          for (n = 0, r = this.scopes.length; n < r; n++)
            this.scopes[n].stop(true);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !e) {
          const s = this.parent.scopes.pop();
          s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
        }
        this.parent = void 0;
      }
    }
  }
  function yc(t) {
    return new bc(t);
  }
  function Tc() {
    return Ge;
  }
  function Dh(t, e = false) {
    Ge && Ge.cleanups.push(t);
  }
  let Ae;
  const Ti = /* @__PURE__ */ new WeakSet();
  class wc {
    constructor(e) {
      this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ge && Ge.active && Ge.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Ti.has(this) && (Ti.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Cc(this);
    }
    run() {
      if (!(this.flags & 1))
        return this.fn();
      this.flags |= 2, Ia(this), Sc(this);
      const e = Ae, n = wt;
      Ae = this, wt = true;
      try {
        return this.fn();
      } finally {
        Oc(this), Ae = e, wt = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let e = this.deps; e; e = e.nextDep)
          No(e);
        this.deps = this.depsTail = void 0, Ia(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Ti.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      Ji(this) && this.run();
    }
    get dirty() {
      return Ji(this);
    }
  }
  let Ac = 0, wr, Ar;
  function Cc(t, e = false) {
    if (t.flags |= 8, e) {
      t.next = Ar, Ar = t;
      return;
    }
    t.next = wr, wr = t;
  }
  function $o() {
    Ac++;
  }
  function Po() {
    if (--Ac > 0)
      return;
    if (Ar) {
      let e = Ar;
      for (Ar = void 0; e; ) {
        const n = e.next;
        e.next = void 0, e.flags &= -9, e = n;
      }
    }
    let t;
    for (; wr; ) {
      let e = wr;
      for (wr = void 0; e; ) {
        const n = e.next;
        if (e.next = void 0, e.flags &= -9, e.flags & 1)
          try {
            e.trigger();
          } catch (r) {
            t || (t = r);
          }
        e = n;
      }
    }
    if (t)
      throw t;
  }
  function Sc(t) {
    for (let e = t.deps; e; e = e.nextDep)
      e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
  }
  function Oc(t) {
    let e, n = t.depsTail, r = n;
    for (; r; ) {
      const s = r.prevDep;
      r.version === -1 ? (r === n && (n = s), No(r), Ih(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
    }
    t.deps = e, t.depsTail = n;
  }
  function Ji(t) {
    for (let e = t.deps; e; e = e.nextDep)
      if (e.dep.version !== e.version || e.dep.computed && ($c(e.dep.computed) || e.dep.version !== e.version))
        return true;
    return !!t._dirty;
  }
  function $c(t) {
    if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Ir))
      return;
    t.globalVersion = Ir;
    const e = t.dep;
    if (t.flags |= 2, e.version > 0 && !t.isSSR && t.deps && !Ji(t)) {
      t.flags &= -3;
      return;
    }
    const n = Ae, r = wt;
    Ae = t, wt = true;
    try {
      Sc(t);
      const s = t.fn(t._value);
      (e.version === 0 || ln(s, t._value)) && (t._value = s, e.version++);
    } catch (s) {
      throw e.version++, s;
    } finally {
      Ae = n, wt = r, Oc(t), t.flags &= -3;
    }
  }
  function No(t, e = false) {
    const { dep: n, prevSub: r, nextSub: s } = t;
    if (r && (r.nextSub = s, t.prevSub = void 0), s && (s.prevSub = r, t.nextSub = void 0), n.subs === t && (n.subs = r, !r && n.computed)) {
      n.computed.flags &= -5;
      for (let i = n.computed.deps; i; i = i.nextDep)
        No(i, true);
    }
    !e && !--n.sc && n.map && n.map.delete(n.key);
  }
  function Ih(t) {
    const { prevDep: e, nextDep: n } = t;
    e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
  }
  let wt = true;
  const Pc = [];
  function dn() {
    Pc.push(wt), wt = false;
  }
  function hn() {
    const t = Pc.pop();
    wt = t === void 0 ? true : t;
  }
  function Ia(t) {
    const { cleanup: e } = t;
    if (t.cleanup = void 0, e) {
      const n = Ae;
      Ae = void 0;
      try {
        e();
      } finally {
        Ae = n;
      }
    }
  }
  let Ir = 0;
  class Lh {
    constructor(e, n) {
      this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class Ro {
    constructor(e) {
      this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
    }
    track(e) {
      if (!Ae || !wt || Ae === this.computed)
        return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== Ae)
        n = this.activeLink = new Lh(Ae, this), Ae.deps ? (n.prevDep = Ae.depsTail, Ae.depsTail.nextDep = n, Ae.depsTail = n) : Ae.deps = Ae.depsTail = n, Nc(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const r = n.nextDep;
        r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Ae.depsTail, n.nextDep = void 0, Ae.depsTail.nextDep = n, Ae.depsTail = n, Ae.deps === n && (Ae.deps = r);
      }
      return n;
    }
    trigger(e) {
      this.version++, Ir++, this.notify(e);
    }
    notify(e) {
      $o();
      try {
        for (let n = this.subs; n; n = n.prevSub)
          n.sub.notify() && n.sub.dep.notify();
      } finally {
        Po();
      }
    }
  }
  function Nc(t) {
    if (t.dep.sc++, t.sub.flags & 4) {
      const e = t.dep.computed;
      if (e && !t.dep.subs) {
        e.flags |= 20;
        for (let r = e.deps; r; r = r.nextDep)
          Nc(r);
      }
      const n = t.dep.subs;
      n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t;
    }
  }
  const Os = /* @__PURE__ */ new WeakMap(), Cn = Symbol(""), Qi = Symbol(""), Lr = Symbol("");
  function Ke(t, e, n) {
    if (wt && Ae) {
      let r = Os.get(t);
      r || Os.set(t, r = /* @__PURE__ */ new Map());
      let s = r.get(n);
      s || (r.set(n, s = new Ro()), s.map = r, s.key = n), s.track();
    }
  }
  function Ut(t, e, n, r, s, i) {
    const o = Os.get(t);
    if (!o) {
      Ir++;
      return;
    }
    const c = (u) => {
      u && u.trigger();
    };
    if ($o(), e === "clear")
      o.forEach(c);
    else {
      const u = ce(t), h = u && Co(n);
      if (u && n === "length") {
        const f = Number(r);
        o.forEach((g, E) => {
          (E === "length" || E === Lr || !kt(E) && E >= f) && c(g);
        });
      } else
        switch ((n !== void 0 || o.has(void 0)) && c(o.get(n)), h && c(o.get(Lr)), e) {
          case "add":
            u ? h && c(o.get("length")) : (c(o.get(Cn)), qn(t) && c(o.get(Qi)));
            break;
          case "delete":
            u || (c(o.get(Cn)), qn(t) && c(o.get(Qi)));
            break;
          case "set":
            qn(t) && c(o.get(Cn));
            break;
        }
    }
    Po();
  }
  function Mh(t, e) {
    const n = Os.get(t);
    return n && n.get(e);
  }
  function Fn(t) {
    const e = _e(t);
    return e === t ? e : (Ke(e, "iterate", Lr), At(t) ? e : e.map(Xe));
  }
  function xo(t) {
    return Ke(t = _e(t), "iterate", Lr), t;
  }
  const kh = {
    __proto__: null,
    [Symbol.iterator]() {
      return wi(this, Symbol.iterator, Xe);
    },
    concat(...t) {
      return Fn(this).concat(...t.map((e) => ce(e) ? Fn(e) : e));
    },
    entries() {
      return wi(this, "entries", (t) => (t[1] = Xe(t[1]), t));
    },
    every(t, e) {
      return jt(this, "every", t, e, void 0, arguments);
    },
    filter(t, e) {
      return jt(this, "filter", t, e, (n) => n.map(Xe), arguments);
    },
    find(t, e) {
      return jt(this, "find", t, e, Xe, arguments);
    },
    findIndex(t, e) {
      return jt(this, "findIndex", t, e, void 0, arguments);
    },
    findLast(t, e) {
      return jt(this, "findLast", t, e, Xe, arguments);
    },
    findLastIndex(t, e) {
      return jt(this, "findLastIndex", t, e, void 0, arguments);
    },
    forEach(t, e) {
      return jt(this, "forEach", t, e, void 0, arguments);
    },
    includes(...t) {
      return Ai(this, "includes", t);
    },
    indexOf(...t) {
      return Ai(this, "indexOf", t);
    },
    join(t) {
      return Fn(this).join(t);
    },
    lastIndexOf(...t) {
      return Ai(this, "lastIndexOf", t);
    },
    map(t, e) {
      return jt(this, "map", t, e, void 0, arguments);
    },
    pop() {
      return _r(this, "pop");
    },
    push(...t) {
      return _r(this, "push", t);
    },
    reduce(t, ...e) {
      return La(this, "reduce", t, e);
    },
    reduceRight(t, ...e) {
      return La(this, "reduceRight", t, e);
    },
    shift() {
      return _r(this, "shift");
    },
    some(t, e) {
      return jt(this, "some", t, e, void 0, arguments);
    },
    splice(...t) {
      return _r(this, "splice", t);
    },
    toReversed() {
      return Fn(this).toReversed();
    },
    toSorted(t) {
      return Fn(this).toSorted(t);
    },
    toSpliced(...t) {
      return Fn(this).toSpliced(...t);
    },
    unshift(...t) {
      return _r(this, "unshift", t);
    },
    values() {
      return wi(this, "values", Xe);
    }
  };
  function wi(t, e, n) {
    const r = xo(t), s = r[e]();
    return r !== t && !At(t) && (s._next = s.next, s.next = () => {
      const i = s._next();
      return i.value && (i.value = n(i.value)), i;
    }), s;
  }
  const Fh = Array.prototype;
  function jt(t, e, n, r, s, i) {
    const o = xo(t), c = o !== t && !At(t), u = o[e];
    if (u !== Fh[e]) {
      const g = u.apply(t, i);
      return c ? Xe(g) : g;
    }
    let h = n;
    o !== t && (c ? h = function(g, E) {
      return n.call(this, Xe(g), E, t);
    } : n.length > 2 && (h = function(g, E) {
      return n.call(this, g, E, t);
    }));
    const f = u.call(o, h, r);
    return c && s ? s(f) : f;
  }
  function La(t, e, n, r) {
    const s = xo(t);
    let i = n;
    return s !== t && (At(t) ? n.length > 3 && (i = function(o, c, u) {
      return n.call(this, o, c, u, t);
    }) : i = function(o, c, u) {
      return n.call(this, o, Xe(c), u, t);
    }), s[e](i, ...r);
  }
  function Ai(t, e, n) {
    const r = _e(t);
    Ke(r, "iterate", Lr);
    const s = r[e](...n);
    return (s === -1 || s === false) && Lo(n[0]) ? (n[0] = _e(n[0]), r[e](...n)) : s;
  }
  function _r(t, e, n = []) {
    dn(), $o();
    const r = _e(t)[e].apply(t, n);
    return Po(), hn(), r;
  }
  const Vh = To("__proto__,__v_isRef,__isVue"), Rc = new Set(Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(kt));
  function Hh(t) {
    kt(t) || (t = String(t));
    const e = _e(this);
    return Ke(e, "has", t), e.hasOwnProperty(t);
  }
  class xc {
    constructor(e = false, n = false) {
      this._isReadonly = e, this._isShallow = n;
    }
    get(e, n, r) {
      if (n === "__v_skip")
        return e.__v_skip;
      const s = this._isReadonly, i = this._isShallow;
      if (n === "__v_isReactive")
        return !s;
      if (n === "__v_isReadonly")
        return s;
      if (n === "__v_isShallow")
        return i;
      if (n === "__v_raw")
        return r === (s ? i ? Xh : Mc : i ? Lc : Ic).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
      const o = ce(e);
      if (!s) {
        let u;
        if (o && (u = kh[n]))
          return u;
        if (n === "hasOwnProperty")
          return Hh;
      }
      const c = Reflect.get(e, n, xe(e) ? e : r);
      return (kt(n) ? Rc.has(n) : Vh(n)) || (s || Ke(e, "get", n), i) ? c : xe(c) ? o && Co(n) ? c : c.value : Ce(c) ? s ? Fc(c) : Br(c) : c;
    }
  }
  class Dc extends xc {
    constructor(e = false) {
      super(false, e);
    }
    set(e, n, r, s) {
      let i = e[n];
      if (!this._isShallow) {
        const u = Pn(i);
        if (!At(r) && !Pn(r) && (i = _e(i), r = _e(r)), !ce(e) && xe(i) && !xe(r))
          return u ? false : (i.value = r, true);
      }
      const o = ce(e) && Co(n) ? Number(n) < e.length : be(e, n), c = Reflect.set(e, n, r, xe(e) ? e : s);
      return e === _e(s) && (o ? ln(r, i) && Ut(e, "set", n, r) : Ut(e, "add", n, r)), c;
    }
    deleteProperty(e, n) {
      const r = be(e, n);
      e[n];
      const s = Reflect.deleteProperty(e, n);
      return s && r && Ut(e, "delete", n, void 0), s;
    }
    has(e, n) {
      const r = Reflect.has(e, n);
      return (!kt(n) || !Rc.has(n)) && Ke(e, "has", n), r;
    }
    ownKeys(e) {
      return Ke(e, "iterate", ce(e) ? "length" : Cn), Reflect.ownKeys(e);
    }
  }
  class jh extends xc {
    constructor(e = false) {
      super(true, e);
    }
    set(e, n) {
      return true;
    }
    deleteProperty(e, n) {
      return true;
    }
  }
  const Wh = new Dc(), Bh = new jh(), Uh = new Dc(true);
  const Zi = (t) => t, cs = (t) => Reflect.getPrototypeOf(t);
  function Kh(t, e, n) {
    return function(...r) {
      const s = this.__v_raw, i = _e(s), o = qn(i), c = t === "entries" || t === Symbol.iterator && o, u = t === "keys" && o, h = s[t](...r), f = n ? Zi : e ? eo : Xe;
      return !e && Ke(i, "iterate", u ? Qi : Cn), {
        next() {
          const { value: g, done: E } = h.next();
          return E ? {
            value: g,
            done: E
          } : {
            value: c ? [
              f(g[0]),
              f(g[1])
            ] : f(g),
            done: E
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function us(t) {
    return function(...e) {
      return t === "delete" ? false : t === "clear" ? void 0 : this;
    };
  }
  function zh(t, e) {
    const n = {
      get(s) {
        const i = this.__v_raw, o = _e(i), c = _e(s);
        t || (ln(s, c) && Ke(o, "get", s), Ke(o, "get", c));
        const { has: u } = cs(o), h = e ? Zi : t ? eo : Xe;
        if (u.call(o, s))
          return h(i.get(s));
        if (u.call(o, c))
          return h(i.get(c));
        i !== o && i.get(s);
      },
      get size() {
        const s = this.__v_raw;
        return !t && Ke(_e(s), "iterate", Cn), Reflect.get(s, "size", s);
      },
      has(s) {
        const i = this.__v_raw, o = _e(i), c = _e(s);
        return t || (ln(s, c) && Ke(o, "has", s), Ke(o, "has", c)), s === c ? i.has(s) : i.has(s) || i.has(c);
      },
      forEach(s, i) {
        const o = this, c = o.__v_raw, u = _e(c), h = e ? Zi : t ? eo : Xe;
        return !t && Ke(u, "iterate", Cn), c.forEach((f, g) => s.call(i, h(f), h(g), o));
      }
    };
    return He(n, t ? {
      add: us("add"),
      set: us("set"),
      delete: us("delete"),
      clear: us("clear")
    } : {
      add(s) {
        !e && !At(s) && !Pn(s) && (s = _e(s));
        const i = _e(this);
        return cs(i).has.call(i, s) || (i.add(s), Ut(i, "add", s, s)), this;
      },
      set(s, i) {
        !e && !At(i) && !Pn(i) && (i = _e(i));
        const o = _e(this), { has: c, get: u } = cs(o);
        let h = c.call(o, s);
        h || (s = _e(s), h = c.call(o, s));
        const f = u.call(o, s);
        return o.set(s, i), h ? ln(i, f) && Ut(o, "set", s, i) : Ut(o, "add", s, i), this;
      },
      delete(s) {
        const i = _e(this), { has: o, get: c } = cs(i);
        let u = o.call(i, s);
        u || (s = _e(s), u = o.call(i, s)), c && c.call(i, s);
        const h = i.delete(s);
        return u && Ut(i, "delete", s, void 0), h;
      },
      clear() {
        const s = _e(this), i = s.size !== 0, o = s.clear();
        return i && Ut(s, "clear", void 0, void 0), o;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((s) => {
      n[s] = Kh(s, t, e);
    }), n;
  }
  function Do(t, e) {
    const n = zh(t, e);
    return (r, s, i) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? r : Reflect.get(be(n, s) && s in r ? n : r, s, i);
  }
  const Yh = {
    get: Do(false, false)
  }, Gh = {
    get: Do(false, true)
  }, qh = {
    get: Do(true, false)
  };
  const Ic = /* @__PURE__ */ new WeakMap(), Lc = /* @__PURE__ */ new WeakMap(), Mc = /* @__PURE__ */ new WeakMap(), Xh = /* @__PURE__ */ new WeakMap();
  function Jh(t) {
    switch (t) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function Qh(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : Jh(Th(t));
  }
  function Br(t) {
    return Pn(t) ? t : Io(t, false, Wh, Yh, Ic);
  }
  function kc(t) {
    return Io(t, false, Uh, Gh, Lc);
  }
  function Fc(t) {
    return Io(t, true, Bh, qh, Mc);
  }
  function Io(t, e, n, r, s) {
    if (!Ce(t) || t.__v_raw && !(e && t.__v_isReactive))
      return t;
    const i = s.get(t);
    if (i)
      return i;
    const o = Qh(t);
    if (o === 0)
      return t;
    const c = new Proxy(t, o === 2 ? r : n);
    return s.set(t, c), c;
  }
  function Sn(t) {
    return Pn(t) ? Sn(t.__v_raw) : !!(t && t.__v_isReactive);
  }
  function Pn(t) {
    return !!(t && t.__v_isReadonly);
  }
  function At(t) {
    return !!(t && t.__v_isShallow);
  }
  function Lo(t) {
    return t ? !!t.__v_raw : false;
  }
  function _e(t) {
    const e = t && t.__v_raw;
    return e ? _e(e) : t;
  }
  function Mo(t) {
    return !be(t, "__v_skip") && Object.isExtensible(t) && gc(t, "__v_skip", true), t;
  }
  const Xe = (t) => Ce(t) ? Br(t) : t, eo = (t) => Ce(t) ? Fc(t) : t;
  function xe(t) {
    return t ? t.__v_isRef === true : false;
  }
  ko = function(t) {
    return Vc(t, false);
  };
  function Zh(t) {
    return Vc(t, true);
  }
  function Vc(t, e) {
    return xe(t) ? t : new ep(t, e);
  }
  class ep {
    constructor(e, n) {
      this.dep = new Ro(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? e : _e(e), this._value = n ? e : Xe(e), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(e) {
      const n = this._rawValue, r = this.__v_isShallow || At(e) || Pn(e);
      e = r ? e : _e(e), ln(e, n) && (this._rawValue = e, this._value = r ? e : Xe(e), this.dep.trigger());
    }
  }
  Xn = function(t) {
    return xe(t) ? t.value : t;
  };
  const tp = {
    get: (t, e, n) => e === "__v_raw" ? t : Xn(Reflect.get(t, e, n)),
    set: (t, e, n, r) => {
      const s = t[e];
      return xe(s) && !xe(n) ? (s.value = n, true) : Reflect.set(t, e, n, r);
    }
  };
  function Hc(t) {
    return Sn(t) ? t : new Proxy(t, tp);
  }
  function np(t) {
    const e = ce(t) ? new Array(t.length) : {};
    for (const n in t)
      e[n] = sp(t, n);
    return e;
  }
  class rp {
    constructor(e, n, r) {
      this._object = e, this._key = n, this._defaultValue = r, this.__v_isRef = true, this._value = void 0;
    }
    get value() {
      const e = this._object[this._key];
      return this._value = e === void 0 ? this._defaultValue : e;
    }
    set value(e) {
      this._object[this._key] = e;
    }
    get dep() {
      return Mh(_e(this._object), this._key);
    }
  }
  function sp(t, e, n) {
    const r = t[e];
    return xe(r) ? r : new rp(t, e, n);
  }
  class ip {
    constructor(e, n, r) {
      this.fn = e, this.setter = n, this._value = void 0, this.dep = new Ro(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ir - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && Ae !== this)
        return Cc(this, true), true;
    }
    get value() {
      const e = this.dep.track();
      return $c(this), e && (e.version = this.dep.version), this._value;
    }
    set value(e) {
      this.setter && this.setter(e);
    }
  }
  function op(t, e, n = false) {
    let r, s;
    return ue(t) ? r = t : (r = t.get, s = t.set), new ip(r, s, n);
  }
  const fs = {}, $s = /* @__PURE__ */ new WeakMap();
  let bn;
  function ap(t, e = false, n = bn) {
    if (n) {
      let r = $s.get(n);
      r || $s.set(n, r = []), r.push(t);
    }
  }
  function lp(t, e, n = Te) {
    const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: c, call: u } = n, h = ($) => s ? $ : At($) || s === false || s === 0 ? Kt($, 1) : Kt($);
    let f, g, E, v, R = false, S = false;
    if (xe(t) ? (g = () => t.value, R = At(t)) : Sn(t) ? (g = () => h(t), R = true) : ce(t) ? (S = true, R = t.some(($) => Sn($) || At($)), g = () => t.map(($) => {
      if (xe($))
        return $.value;
      if (Sn($))
        return h($);
      if (ue($))
        return u ? u($, 2) : $();
    })) : ue(t) ? e ? g = u ? () => u(t, 2) : t : g = () => {
      if (E) {
        dn();
        try {
          E();
        } finally {
          hn();
        }
      }
      const $ = bn;
      bn = f;
      try {
        return u ? u(t, 3, [
          v
        ]) : t(v);
      } finally {
        bn = $;
      }
    } : g = Tt, e && s) {
      const $ = g, z = s === true ? 1 / 0 : s;
      g = () => Kt($(), z);
    }
    const k = Tc(), F = () => {
      f.stop(), k && k.active && Ao(k.effects, f);
    };
    if (i && e) {
      const $ = e;
      e = (...z) => {
        $(...z), F();
      };
    }
    let V = S ? new Array(t.length).fill(fs) : fs;
    const j = ($) => {
      if (!(!(f.flags & 1) || !f.dirty && !$))
        if (e) {
          const z = f.run();
          if (s || R || (S ? z.some((se, te) => ln(se, V[te])) : ln(z, V))) {
            E && E();
            const se = bn;
            bn = f;
            try {
              const te = [
                z,
                V === fs ? void 0 : S && V[0] === fs ? [] : V,
                v
              ];
              u ? u(e, 3, te) : e(...te), V = z;
            } finally {
              bn = se;
            }
          }
        } else
          f.run();
    };
    return c && c(j), f = new wc(g), f.scheduler = o ? () => o(j, false) : j, v = ($) => ap($, false, f), E = f.onStop = () => {
      const $ = $s.get(f);
      if ($) {
        if (u)
          u($, 4);
        else
          for (const z of $)
            z();
        $s.delete(f);
      }
    }, e ? r ? j(true) : V = f.run() : o ? o(j.bind(null, true), true) : f.run(), F.pause = f.pause.bind(f), F.resume = f.resume.bind(f), F.stop = F, F;
  }
  function Kt(t, e = 1 / 0, n) {
    if (e <= 0 || !Ce(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(t)))
      return t;
    if (n.add(t), e--, xe(t))
      Kt(t.value, e, n);
    else if (ce(t))
      for (let r = 0; r < t.length; r++)
        Kt(t[r], e, n);
    else if (js(t) || qn(t))
      t.forEach((r) => {
        Kt(r, e, n);
      });
    else if (pc(t)) {
      for (const r in t)
        Kt(t[r], e, n);
      for (const r of Object.getOwnPropertySymbols(t))
        Object.prototype.propertyIsEnumerable.call(t, r) && Kt(t[r], e, n);
    }
    return t;
  }
  function Ur(t, e, n, r) {
    try {
      return r ? t(...r) : t();
    } catch (s) {
      zs(s, e, n);
    }
  }
  function Ft(t, e, n, r) {
    if (ue(t)) {
      const s = Ur(t, e, n, r);
      return s && dc(s) && s.catch((i) => {
        zs(i, e, n);
      }), s;
    }
    if (ce(t)) {
      const s = [];
      for (let i = 0; i < t.length; i++)
        s.push(Ft(t[i], e, n, r));
      return s;
    }
  }
  function zs(t, e, n, r = true) {
    const s = e ? e.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = e && e.appContext.config || Te;
    if (e) {
      let c = e.parent;
      const u = e.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; c; ) {
        const f = c.ec;
        if (f) {
          for (let g = 0; g < f.length; g++)
            if (f[g](t, u, h) === false)
              return;
        }
        c = c.parent;
      }
      if (i) {
        dn(), Ur(i, null, 10, [
          t,
          u,
          h
        ]), hn();
        return;
      }
    }
    cp(t, n, s, r, o);
  }
  function cp(t, e, n, r = true, s = false) {
    if (s)
      throw t;
    console.error(t);
  }
  const Je = [];
  let Rt = -1;
  const Jn = [];
  let rn = null, Wn = 0;
  const jc = Promise.resolve();
  let Ps = null;
  function Fo(t) {
    const e = Ps || jc;
    return t ? e.then(this ? t.bind(this) : t) : e;
  }
  function up(t) {
    let e = Rt + 1, n = Je.length;
    for (; e < n; ) {
      const r = e + n >>> 1, s = Je[r], i = Mr(s);
      i < t || i === t && s.flags & 2 ? e = r + 1 : n = r;
    }
    return e;
  }
  function Vo(t) {
    if (!(t.flags & 1)) {
      const e = Mr(t), n = Je[Je.length - 1];
      !n || !(t.flags & 2) && e >= Mr(n) ? Je.push(t) : Je.splice(up(e), 0, t), t.flags |= 1, Wc();
    }
  }
  function Wc() {
    Ps || (Ps = jc.then(Uc));
  }
  function fp(t) {
    ce(t) ? Jn.push(...t) : rn && t.id === -1 ? rn.splice(Wn + 1, 0, t) : t.flags & 1 || (Jn.push(t), t.flags |= 1), Wc();
  }
  function Ma(t, e, n = Rt + 1) {
    for (; n < Je.length; n++) {
      const r = Je[n];
      if (r && r.flags & 2) {
        if (t && r.id !== t.uid)
          continue;
        Je.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
      }
    }
  }
  function Bc(t) {
    if (Jn.length) {
      const e = [
        ...new Set(Jn)
      ].sort((n, r) => Mr(n) - Mr(r));
      if (Jn.length = 0, rn) {
        rn.push(...e);
        return;
      }
      for (rn = e, Wn = 0; Wn < rn.length; Wn++) {
        const n = rn[Wn];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      rn = null, Wn = 0;
    }
  }
  const Mr = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
  function Uc(t) {
    const e = Tt;
    try {
      for (Rt = 0; Rt < Je.length; Rt++) {
        const n = Je[Rt];
        n && !(n.flags & 8) && (n.flags & 4 && (n.flags &= -2), Ur(n, n.i, n.i ? 15 : 14), n.flags & 4 || (n.flags &= -2));
      }
    } finally {
      for (; Rt < Je.length; Rt++) {
        const n = Je[Rt];
        n && (n.flags &= -2);
      }
      Rt = -1, Je.length = 0, Bc(), Ps = null, (Je.length || Jn.length) && Uc();
    }
  }
  let rt = null, Kc = null;
  function Ns(t) {
    const e = rt;
    return rt = t, Kc = t && t.type.__scopeId || null, e;
  }
  bs = function(t, e = rt, n) {
    if (!e || t._n)
      return t;
    const r = (...s) => {
      r._d && za(-1);
      const i = Ns(e);
      let o;
      try {
        o = t(...s);
      } finally {
        Ns(i), r._d && za(1);
      }
      return o;
    };
    return r._n = true, r._c = true, r._d = true, r;
  };
  $T = function(t, e) {
    if (rt === null)
      return t;
    const n = Xs(rt), r = t.dirs || (t.dirs = []);
    for (let s = 0; s < e.length; s++) {
      let [i, o, c, u = Te] = e[s];
      i && (ue(i) && (i = {
        mounted: i,
        updated: i
      }), i.deep && Kt(o), r.push({
        dir: i,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: c,
        modifiers: u
      }));
    }
    return t;
  };
  function vn(t, e, n, r) {
    const s = t.dirs, i = e && e.dirs;
    for (let o = 0; o < s.length; o++) {
      const c = s[o];
      i && (c.oldValue = i[o].value);
      let u = c.dir[r];
      u && (dn(), Ft(u, n, 8, [
        t.el,
        c,
        t,
        e
      ]), hn());
    }
  }
  const dp = Symbol("_vte"), hp = (t) => t.__isTeleport;
  function Ho(t, e) {
    t.shapeFlag & 6 && t.component ? (t.transition = e, Ho(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
  }
  zc = function(t, e) {
    return ue(t) ? (() => He({
      name: t.name
    }, e, {
      setup: t
    }))() : t;
  };
  function Yc(t) {
    t.ids = [
      t.ids[0] + t.ids[2]++ + "-",
      0,
      0
    ];
  }
  function Rs(t, e, n, r, s = false) {
    if (ce(t)) {
      t.forEach((R, S) => Rs(R, e && (ce(e) ? e[S] : e), n, r, s));
      return;
    }
    if (Cr(r) && !s) {
      r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Rs(t, e, n, r.component.subTree);
      return;
    }
    const i = r.shapeFlag & 4 ? Xs(r.component) : r.el, o = s ? null : i, { i: c, r: u } = t, h = e && e.r, f = c.refs === Te ? c.refs = {} : c.refs, g = c.setupState, E = _e(g), v = g === Te ? () => false : (R) => be(E, R);
    if (h != null && h !== u && (Fe(h) ? (f[h] = null, v(h) && (g[h] = null)) : xe(h) && (h.value = null)), ue(u))
      Ur(u, c, 12, [
        o,
        f
      ]);
    else {
      const R = Fe(u), S = xe(u);
      if (R || S) {
        const k = () => {
          if (t.f) {
            const F = R ? v(u) ? g[u] : f[u] : u.value;
            s ? ce(F) && Ao(F, i) : ce(F) ? F.includes(i) || F.push(i) : R ? (f[u] = [
              i
            ], v(u) && (g[u] = f[u])) : (u.value = [
              i
            ], t.k && (f[t.k] = u.value));
          } else
            R ? (f[u] = o, v(u) && (g[u] = o)) : S && (u.value = o, t.k && (f[t.k] = o));
        };
        o ? (k.id = -1, at(k, n)) : k();
      }
    }
  }
  Us().requestIdleCallback;
  Us().cancelIdleCallback;
  const Cr = (t) => !!t.type.__asyncLoader, Gc = (t) => t.type.__isKeepAlive;
  function pp(t, e) {
    qc(t, "a", e);
  }
  function gp(t, e) {
    qc(t, "da", e);
  }
  function qc(t, e, n = je) {
    const r = t.__wdc || (t.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated)
          return;
        s = s.parent;
      }
      return t();
    });
    if (Ys(e, r, n), n) {
      let s = n.parent;
      for (; s && s.parent; )
        Gc(s.parent.vnode) && _p(r, e, n, s), s = s.parent;
    }
  }
  function _p(t, e, n, r) {
    const s = Ys(e, t, r, true);
    Xc(() => {
      Ao(r[e], s);
    }, n);
  }
  function Ys(t, e, n = je, r = false) {
    if (n) {
      const s = n[t] || (n[t] = []), i = e.__weh || (e.__weh = (...o) => {
        dn();
        const c = Kr(n), u = Ft(e, n, t, o);
        return c(), hn(), u;
      });
      return r ? s.unshift(i) : s.push(i), i;
    }
  }
  const qt = (t) => (e, n = je) => {
    (!Fr || t === "sp") && Ys(t, (...r) => e(...r), n);
  }, mp = qt("bm"), vp = qt("m"), Ep = qt("bu"), bp = qt("u"), yp = qt("bum"), Xc = qt("um"), Tp = qt("sp"), wp = qt("rtg"), Ap = qt("rtc");
  function Cp(t, e = je) {
    Ys("ec", t, e);
  }
  const Jc = "components";
  ka = function(t, e) {
    return Op(Jc, t, true, e) || t;
  };
  const Sp = Symbol.for("v-ndc");
  function Op(t, e, n = true, r = false) {
    const s = rt || je;
    if (s) {
      const i = s.type;
      if (t === Jc) {
        const c = _g(i, false);
        if (c && (c === e || c === gt(e) || c === Bs(gt(e))))
          return i;
      }
      const o = Fa(s[t] || i[t], e) || Fa(s.appContext[t], e);
      return !o && r ? i : o;
    }
  }
  function Fa(t, e) {
    return t && (t[e] || t[gt(e)] || t[Bs(gt(e))]);
  }
  const to = (t) => t ? vu(t) ? Xs(t) : to(t.parent) : null, Sr = He(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => to(t.parent),
    $root: (t) => to(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => jo(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      Vo(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Fo.bind(t.proxy)),
    $watch: (t) => qp.bind(t)
  }), Ci = (t, e) => t !== Te && !t.__isScriptSetup && be(t, e), $p = {
    get({ _: t }, e) {
      if (e === "__v_skip")
        return true;
      const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: c, appContext: u } = t;
      let h;
      if (e[0] !== "$") {
        const v = o[e];
        if (v !== void 0)
          switch (v) {
            case 1:
              return r[e];
            case 2:
              return s[e];
            case 4:
              return n[e];
            case 3:
              return i[e];
          }
        else {
          if (Ci(r, e))
            return o[e] = 1, r[e];
          if (s !== Te && be(s, e))
            return o[e] = 2, s[e];
          if ((h = t.propsOptions[0]) && be(h, e))
            return o[e] = 3, i[e];
          if (n !== Te && be(n, e))
            return o[e] = 4, n[e];
          no && (o[e] = 0);
        }
      }
      const f = Sr[e];
      let g, E;
      if (f)
        return e === "$attrs" && Ke(t.attrs, "get", ""), f(t);
      if ((g = c.__cssModules) && (g = g[e]))
        return g;
      if (n !== Te && be(n, e))
        return o[e] = 4, n[e];
      if (E = u.config.globalProperties, be(E, e))
        return E[e];
    },
    set({ _: t }, e, n) {
      const { data: r, setupState: s, ctx: i } = t;
      return Ci(s, e) ? (s[e] = n, true) : r !== Te && be(r, e) ? (r[e] = n, true) : be(t.props, e) || e[0] === "$" && e.slice(1) in t ? false : (i[e] = n, true);
    },
    has({ _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: s, propsOptions: i } }, o) {
      let c;
      return !!n[o] || t !== Te && be(t, o) || Ci(e, o) || (c = i[0]) && be(c, o) || be(r, o) || be(Sr, o) || be(s.config.globalProperties, o);
    },
    defineProperty(t, e, n) {
      return n.get != null ? t._.accessCache[e] = 0 : be(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
    }
  };
  function Va(t) {
    return ce(t) ? t.reduce((e, n) => (e[n] = null, e), {}) : t;
  }
  let no = true;
  function Pp(t) {
    const e = jo(t), n = t.proxy, r = t.ctx;
    no = false, e.beforeCreate && Ha(e.beforeCreate, t, "bc");
    const { data: s, computed: i, methods: o, watch: c, provide: u, inject: h, created: f, beforeMount: g, mounted: E, beforeUpdate: v, updated: R, activated: S, deactivated: k, beforeDestroy: F, beforeUnmount: V, destroyed: j, unmounted: $, render: z, renderTracked: se, renderTriggered: te, errorCaptured: Q, serverPrefetch: G, expose: ae, inheritAttrs: he, components: le, directives: oe, filters: Ve } = e;
    if (h && Np(h, r, null), o)
      for (const ee in o) {
        const de = o[ee];
        ue(de) && (r[ee] = de.bind(n));
      }
    if (s) {
      const ee = s.call(n, n);
      Ce(ee) && (t.data = Br(ee));
    }
    if (no = true, i)
      for (const ee in i) {
        const de = i[ee], Pe = ue(de) ? de.bind(n, n) : ue(de.get) ? de.get.bind(n, n) : Tt, Be = !ue(de) && ue(de.set) ? de.set.bind(n) : Tt, Ue = ht({
          get: Pe,
          set: Be
        });
        Object.defineProperty(r, ee, {
          enumerable: true,
          configurable: true,
          get: () => Ue.value,
          set: (Ne) => Ue.value = Ne
        });
      }
    if (c)
      for (const ee in c)
        Qc(c[ee], r, n, ee);
    if (u) {
      const ee = ue(u) ? u.call(n) : u;
      Reflect.ownKeys(ee).forEach((de) => {
        ys(de, ee[de]);
      });
    }
    f && Ha(f, t, "c");
    function fe(ee, de) {
      ce(de) ? de.forEach((Pe) => ee(Pe.bind(n))) : de && ee(de.bind(n));
    }
    if (fe(mp, g), fe(vp, E), fe(Ep, v), fe(bp, R), fe(pp, S), fe(gp, k), fe(Cp, Q), fe(Ap, se), fe(wp, te), fe(yp, V), fe(Xc, $), fe(Tp, G), ce(ae))
      if (ae.length) {
        const ee = t.exposed || (t.exposed = {});
        ae.forEach((de) => {
          Object.defineProperty(ee, de, {
            get: () => n[de],
            set: (Pe) => n[de] = Pe
          });
        });
      } else
        t.exposed || (t.exposed = {});
    z && t.render === Tt && (t.render = z), he != null && (t.inheritAttrs = he), le && (t.components = le), oe && (t.directives = oe), G && Yc(t);
  }
  function Np(t, e, n = Tt) {
    ce(t) && (t = ro(t));
    for (const r in t) {
      const s = t[r];
      let i;
      Ce(s) ? "default" in s ? i = It(s.from || r, s.default, true) : i = It(s.from || r) : i = It(s), xe(i) ? Object.defineProperty(e, r, {
        enumerable: true,
        configurable: true,
        get: () => i.value,
        set: (o) => i.value = o
      }) : e[r] = i;
    }
  }
  function Ha(t, e, n) {
    Ft(ce(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
  }
  function Qc(t, e, n, r) {
    let s = r.includes(".") ? du(n, r) : () => n[r];
    if (Fe(t)) {
      const i = e[t];
      ue(i) && Or(s, i);
    } else if (ue(t))
      Or(s, t.bind(n));
    else if (Ce(t))
      if (ce(t))
        t.forEach((i) => Qc(i, e, n, r));
      else {
        const i = ue(t.handler) ? t.handler.bind(n) : e[t.handler];
        ue(i) && Or(s, i, t);
      }
  }
  function jo(t) {
    const e = t.type, { mixins: n, extends: r } = e, { mixins: s, optionsCache: i, config: { optionMergeStrategies: o } } = t.appContext, c = i.get(e);
    let u;
    return c ? u = c : !s.length && !n && !r ? u = e : (u = {}, s.length && s.forEach((h) => xs(u, h, o, true)), xs(u, e, o)), Ce(e) && i.set(e, u), u;
  }
  function xs(t, e, n, r = false) {
    const { mixins: s, extends: i } = e;
    i && xs(t, i, n, true), s && s.forEach((o) => xs(t, o, n, true));
    for (const o in e)
      if (!(r && o === "expose")) {
        const c = Rp[o] || n && n[o];
        t[o] = c ? c(t[o], e[o]) : e[o];
      }
    return t;
  }
  const Rp = {
    data: ja,
    props: Wa,
    emits: Wa,
    methods: yr,
    computed: yr,
    beforeCreate: Ye,
    created: Ye,
    beforeMount: Ye,
    mounted: Ye,
    beforeUpdate: Ye,
    updated: Ye,
    beforeDestroy: Ye,
    beforeUnmount: Ye,
    destroyed: Ye,
    unmounted: Ye,
    activated: Ye,
    deactivated: Ye,
    errorCaptured: Ye,
    serverPrefetch: Ye,
    components: yr,
    directives: yr,
    watch: Dp,
    provide: ja,
    inject: xp
  };
  function ja(t, e) {
    return e ? t ? function() {
      return He(ue(t) ? t.call(this, this) : t, ue(e) ? e.call(this, this) : e);
    } : e : t;
  }
  function xp(t, e) {
    return yr(ro(t), ro(e));
  }
  function ro(t) {
    if (ce(t)) {
      const e = {};
      for (let n = 0; n < t.length; n++)
        e[t[n]] = t[n];
      return e;
    }
    return t;
  }
  function Ye(t, e) {
    return t ? [
      ...new Set([].concat(t, e))
    ] : e;
  }
  function yr(t, e) {
    return t ? He(/* @__PURE__ */ Object.create(null), t, e) : e;
  }
  function Wa(t, e) {
    return t ? ce(t) && ce(e) ? [
      .../* @__PURE__ */ new Set([
        ...t,
        ...e
      ])
    ] : He(/* @__PURE__ */ Object.create(null), Va(t), Va(e ?? {})) : e;
  }
  function Dp(t, e) {
    if (!t)
      return e;
    if (!e)
      return t;
    const n = He(/* @__PURE__ */ Object.create(null), t);
    for (const r in e)
      n[r] = Ye(t[r], e[r]);
    return n;
  }
  function Zc() {
    return {
      app: null,
      config: {
        isNativeTag: bh,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  let Ip = 0;
  function Lp(t, e) {
    return function(r, s = null) {
      ue(r) || (r = He({}, r)), s != null && !Ce(s) && (s = null);
      const i = Zc(), o = /* @__PURE__ */ new WeakSet(), c = [];
      let u = false;
      const h = i.app = {
        _uid: Ip++,
        _component: r,
        _props: s,
        _container: null,
        _context: i,
        _instance: null,
        version: vg,
        get config() {
          return i.config;
        },
        set config(f) {
        },
        use(f, ...g) {
          return o.has(f) || (f && ue(f.install) ? (o.add(f), f.install(h, ...g)) : ue(f) && (o.add(f), f(h, ...g))), h;
        },
        mixin(f) {
          return i.mixins.includes(f) || i.mixins.push(f), h;
        },
        component(f, g) {
          return g ? (i.components[f] = g, h) : i.components[f];
        },
        directive(f, g) {
          return g ? (i.directives[f] = g, h) : i.directives[f];
        },
        mount(f, g, E) {
          if (!u) {
            const v = h._ceVNode || We(r, s);
            return v.appContext = i, E === true ? E = "svg" : E === false && (E = void 0), g && e ? e(v, f) : t(v, f, E), u = true, h._container = f, f.__vue_app__ = h, Xs(v.component);
          }
        },
        onUnmount(f) {
          c.push(f);
        },
        unmount() {
          u && (Ft(c, h._instance, 16), t(null, h._container), delete h._container.__vue_app__);
        },
        provide(f, g) {
          return i.provides[f] = g, h;
        },
        runWithContext(f) {
          const g = On;
          On = h;
          try {
            return f();
          } finally {
            On = g;
          }
        }
      };
      return h;
    };
  }
  let On = null;
  function ys(t, e) {
    if (je) {
      let n = je.provides;
      const r = je.parent && je.parent.provides;
      r === n && (n = je.provides = Object.create(r)), n[t] = e;
    }
  }
  function It(t, e, n = false) {
    const r = je || rt;
    if (r || On) {
      const s = On ? On._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
      if (s && t in s)
        return s[t];
      if (arguments.length > 1)
        return n && ue(e) ? e.call(r && r.proxy) : e;
    }
  }
  function Mp() {
    return !!(je || rt || On);
  }
  const eu = {}, tu = () => Object.create(eu), nu = (t) => Object.getPrototypeOf(t) === eu;
  function kp(t, e, n, r = false) {
    const s = {}, i = tu();
    t.propsDefaults = /* @__PURE__ */ Object.create(null), ru(t, e, s, i);
    for (const o in t.propsOptions[0])
      o in s || (s[o] = void 0);
    n ? t.props = r ? s : kc(s) : t.type.props ? t.props = s : t.props = i, t.attrs = i;
  }
  function Fp(t, e, n, r) {
    const { props: s, attrs: i, vnode: { patchFlag: o } } = t, c = _e(s), [u] = t.propsOptions;
    let h = false;
    if ((r || o > 0) && !(o & 16)) {
      if (o & 8) {
        const f = t.vnode.dynamicProps;
        for (let g = 0; g < f.length; g++) {
          let E = f[g];
          if (Gs(t.emitsOptions, E))
            continue;
          const v = e[E];
          if (u)
            if (be(i, E))
              v !== i[E] && (i[E] = v, h = true);
            else {
              const R = gt(E);
              s[R] = so(u, c, R, v, t, false);
            }
          else
            v !== i[E] && (i[E] = v, h = true);
        }
      }
    } else {
      ru(t, e, s, i) && (h = true);
      let f;
      for (const g in c)
        (!e || !be(e, g) && ((f = Dn(g)) === g || !be(e, f))) && (u ? n && (n[g] !== void 0 || n[f] !== void 0) && (s[g] = so(u, c, g, void 0, t, true)) : delete s[g]);
      if (i !== c)
        for (const g in i)
          (!e || !be(e, g)) && (delete i[g], h = true);
    }
    h && Ut(t.attrs, "set", "");
  }
  function ru(t, e, n, r) {
    const [s, i] = t.propsOptions;
    let o = false, c;
    if (e)
      for (let u in e) {
        if (Tr(u))
          continue;
        const h = e[u];
        let f;
        s && be(s, f = gt(u)) ? !i || !i.includes(f) ? n[f] = h : (c || (c = {}))[f] = h : Gs(t.emitsOptions, u) || (!(u in r) || h !== r[u]) && (r[u] = h, o = true);
      }
    if (i) {
      const u = _e(n), h = c || Te;
      for (let f = 0; f < i.length; f++) {
        const g = i[f];
        n[g] = so(s, u, g, h[g], t, !be(h, g));
      }
    }
    return o;
  }
  function so(t, e, n, r, s, i) {
    const o = t[n];
    if (o != null) {
      const c = be(o, "default");
      if (c && r === void 0) {
        const u = o.default;
        if (o.type !== Function && !o.skipFactory && ue(u)) {
          const { propsDefaults: h } = s;
          if (n in h)
            r = h[n];
          else {
            const f = Kr(s);
            r = h[n] = u.call(null, e), f();
          }
        } else
          r = u;
        s.ce && s.ce._setProp(n, r);
      }
      o[0] && (i && !c ? r = false : o[1] && (r === "" || r === Dn(n)) && (r = true));
    }
    return r;
  }
  const Vp = /* @__PURE__ */ new WeakMap();
  function su(t, e, n = false) {
    const r = n ? Vp : e.propsCache, s = r.get(t);
    if (s)
      return s;
    const i = t.props, o = {}, c = [];
    let u = false;
    if (!ue(t)) {
      const f = (g) => {
        u = true;
        const [E, v] = su(g, e, true);
        He(o, E), v && c.push(...v);
      };
      !n && e.mixins.length && e.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f);
    }
    if (!i && !u)
      return Ce(t) && r.set(t, Gn), Gn;
    if (ce(i))
      for (let f = 0; f < i.length; f++) {
        const g = gt(i[f]);
        Ba(g) && (o[g] = Te);
      }
    else if (i)
      for (const f in i) {
        const g = gt(f);
        if (Ba(g)) {
          const E = i[f], v = o[g] = ce(E) || ue(E) ? {
            type: E
          } : He({}, E), R = v.type;
          let S = false, k = true;
          if (ce(R))
            for (let F = 0; F < R.length; ++F) {
              const V = R[F], j = ue(V) && V.name;
              if (j === "Boolean") {
                S = true;
                break;
              } else
                j === "String" && (k = false);
            }
          else
            S = ue(R) && R.name === "Boolean";
          v[0] = S, v[1] = k, (S || be(v, "default")) && c.push(g);
        }
      }
    const h = [
      o,
      c
    ];
    return Ce(t) && r.set(t, h), h;
  }
  function Ba(t) {
    return t[0] !== "$" && !Tr(t);
  }
  const iu = (t) => t[0] === "_" || t === "$stable", Wo = (t) => ce(t) ? t.map(Dt) : [
    Dt(t)
  ], Hp = (t, e, n) => {
    if (e._n)
      return e;
    const r = bs((...s) => Wo(e(...s)), n);
    return r._c = false, r;
  }, ou = (t, e, n) => {
    const r = t._ctx;
    for (const s in t) {
      if (iu(s))
        continue;
      const i = t[s];
      if (ue(i))
        e[s] = Hp(s, i, r);
      else if (i != null) {
        const o = Wo(i);
        e[s] = () => o;
      }
    }
  }, au = (t, e) => {
    const n = Wo(e);
    t.slots.default = () => n;
  }, lu = (t, e, n) => {
    for (const r in e)
      (n || r !== "_") && (t[r] = e[r]);
  }, jp = (t, e, n) => {
    const r = t.slots = tu();
    if (t.vnode.shapeFlag & 32) {
      const s = e._;
      s ? (lu(r, e, n), n && gc(r, "_", s, true)) : ou(e, r);
    } else
      e && au(t, e);
  }, Wp = (t, e, n) => {
    const { vnode: r, slots: s } = t;
    let i = true, o = Te;
    if (r.shapeFlag & 32) {
      const c = e._;
      c ? n && c === 1 ? i = false : lu(s, e, n) : (i = !e.$stable, ou(e, s)), o = e;
    } else
      e && (au(t, e), o = {
        default: 1
      });
    if (i)
      for (const c in s)
        !iu(c) && o[c] == null && delete s[c];
  }, at = ng;
  function Bp(t) {
    return Up(t);
  }
  function Up(t, e) {
    const n = Us();
    n.__VUE__ = true;
    const { insert: r, remove: s, patchProp: i, createElement: o, createText: c, createComment: u, setText: h, setElementText: f, parentNode: g, nextSibling: E, setScopeId: v = Tt, insertStaticContent: R } = t, S = (p, _, y, O = null, A = null, x = null, B = void 0, L = null, M = !!_.dynamicChildren) => {
      if (p === _)
        return;
      p && !mr(p, _) && (O = C(p), Ne(p, A, x, true), p = null), _.patchFlag === -2 && (M = false, _.dynamicChildren = null);
      const { type: D, ref: Z, shapeFlag: U } = _;
      switch (D) {
        case qs:
          k(p, _, y, O);
          break;
        case Nn:
          F(p, _, y, O);
          break;
        case $i:
          p == null && V(_, y, O, B);
          break;
        case xt:
          le(p, _, y, O, A, x, B, L, M);
          break;
        default:
          U & 1 ? z(p, _, y, O, A, x, B, L, M) : U & 6 ? oe(p, _, y, O, A, x, B, L, M) : (U & 64 || U & 128) && D.process(p, _, y, O, A, x, B, L, M, J);
      }
      Z != null && A && Rs(Z, p && p.ref, x, _ || p, !_);
    }, k = (p, _, y, O) => {
      if (p == null)
        r(_.el = c(_.children), y, O);
      else {
        const A = _.el = p.el;
        _.children !== p.children && h(A, _.children);
      }
    }, F = (p, _, y, O) => {
      p == null ? r(_.el = u(_.children || ""), y, O) : _.el = p.el;
    }, V = (p, _, y, O) => {
      [p.el, p.anchor] = R(p.children, _, y, O, p.el, p.anchor);
    }, j = ({ el: p, anchor: _ }, y, O) => {
      let A;
      for (; p && p !== _; )
        A = E(p), r(p, y, O), p = A;
      r(_, y, O);
    }, $ = ({ el: p, anchor: _ }) => {
      let y;
      for (; p && p !== _; )
        y = E(p), s(p), p = y;
      s(_);
    }, z = (p, _, y, O, A, x, B, L, M) => {
      _.type === "svg" ? B = "svg" : _.type === "math" && (B = "mathml"), p == null ? se(_, y, O, A, x, B, L, M) : G(p, _, A, x, B, L, M);
    }, se = (p, _, y, O, A, x, B, L) => {
      let M, D;
      const { props: Z, shapeFlag: U, transition: q, dirs: ne } = p;
      if (M = p.el = o(p.type, x, Z && Z.is, Z), U & 8 ? f(M, p.children) : U & 16 && Q(p.children, M, null, O, A, Si(p, x), B, L), ne && vn(p, null, O, "created"), te(M, p, p.scopeId, B, O), Z) {
        for (const me in Z)
          me !== "value" && !Tr(me) && i(M, me, null, Z[me], x, O);
        "value" in Z && i(M, "value", null, Z.value, x), (D = Z.onVnodeBeforeMount) && Nt(D, O, p);
      }
      ne && vn(p, null, O, "beforeMount");
      const K = Kp(A, q);
      K && q.beforeEnter(M), r(M, _, y), ((D = Z && Z.onVnodeMounted) || K || ne) && at(() => {
        D && Nt(D, O, p), K && q.enter(M), ne && vn(p, null, O, "mounted");
      }, A);
    }, te = (p, _, y, O, A) => {
      if (y && v(p, y), O)
        for (let x = 0; x < O.length; x++)
          v(p, O[x]);
      if (A) {
        let x = A.subTree;
        if (_ === x || pu(x.type) && (x.ssContent === _ || x.ssFallback === _)) {
          const B = A.vnode;
          te(p, B, B.scopeId, B.slotScopeIds, A.parent);
        }
      }
    }, Q = (p, _, y, O, A, x, B, L, M = 0) => {
      for (let D = M; D < p.length; D++) {
        const Z = p[D] = L ? sn(p[D]) : Dt(p[D]);
        S(null, Z, _, y, O, A, x, B, L);
      }
    }, G = (p, _, y, O, A, x, B) => {
      const L = _.el = p.el;
      let { patchFlag: M, dynamicChildren: D, dirs: Z } = _;
      M |= p.patchFlag & 16;
      const U = p.props || Te, q = _.props || Te;
      let ne;
      if (y && En(y, false), (ne = q.onVnodeBeforeUpdate) && Nt(ne, y, _, p), Z && vn(_, p, y, "beforeUpdate"), y && En(y, true), (U.innerHTML && q.innerHTML == null || U.textContent && q.textContent == null) && f(L, ""), D ? ae(p.dynamicChildren, D, L, y, O, Si(_, A), x) : B || de(p, _, L, null, y, O, Si(_, A), x, false), M > 0) {
        if (M & 16)
          he(L, U, q, y, A);
        else if (M & 2 && U.class !== q.class && i(L, "class", null, q.class, A), M & 4 && i(L, "style", U.style, q.style, A), M & 8) {
          const K = _.dynamicProps;
          for (let me = 0; me < K.length; me++) {
            const ve = K[me], Se = U[ve], Le = q[ve];
            (Le !== Se || ve === "value") && i(L, ve, Se, Le, A, y);
          }
        }
        M & 1 && p.children !== _.children && f(L, _.children);
      } else
        !B && D == null && he(L, U, q, y, A);
      ((ne = q.onVnodeUpdated) || Z) && at(() => {
        ne && Nt(ne, y, _, p), Z && vn(_, p, y, "updated");
      }, O);
    }, ae = (p, _, y, O, A, x, B) => {
      for (let L = 0; L < _.length; L++) {
        const M = p[L], D = _[L], Z = M.el && (M.type === xt || !mr(M, D) || M.shapeFlag & 70) ? g(M.el) : y;
        S(M, D, Z, null, O, A, x, B, true);
      }
    }, he = (p, _, y, O, A) => {
      if (_ !== y) {
        if (_ !== Te)
          for (const x in _)
            !Tr(x) && !(x in y) && i(p, x, _[x], null, A, O);
        for (const x in y) {
          if (Tr(x))
            continue;
          const B = y[x], L = _[x];
          B !== L && x !== "value" && i(p, x, L, B, A, O);
        }
        "value" in y && i(p, "value", _.value, y.value, A);
      }
    }, le = (p, _, y, O, A, x, B, L, M) => {
      const D = _.el = p ? p.el : c(""), Z = _.anchor = p ? p.anchor : c("");
      let { patchFlag: U, dynamicChildren: q, slotScopeIds: ne } = _;
      ne && (L = L ? L.concat(ne) : ne), p == null ? (r(D, y, O), r(Z, y, O), Q(_.children || [], y, Z, A, x, B, L, M)) : U > 0 && U & 64 && q && p.dynamicChildren ? (ae(p.dynamicChildren, q, y, A, x, B, L), (_.key != null || A && _ === A.subTree) && cu(p, _, true)) : de(p, _, y, Z, A, x, B, L, M);
    }, oe = (p, _, y, O, A, x, B, L, M) => {
      _.slotScopeIds = L, p == null ? _.shapeFlag & 512 ? A.ctx.activate(_, y, O, B, M) : Ve(_, y, O, A, x, B, M) : $e(p, _, M);
    }, Ve = (p, _, y, O, A, x, B) => {
      const L = p.component = fg(p, O, A);
      if (Gc(p) && (L.ctx.renderer = J), dg(L, false, B), L.asyncDep) {
        if (A && A.registerDep(L, fe, B), !p.el) {
          const M = L.subTree = We(Nn);
          F(null, M, _, y);
        }
      } else
        fe(L, p, _, y, A, x, B);
    }, $e = (p, _, y) => {
      const O = _.component = p.component;
      if (eg(p, _, y))
        if (O.asyncDep && !O.asyncResolved) {
          ee(O, _, y);
          return;
        } else
          O.next = _, O.update();
      else
        _.el = p.el, O.vnode = _;
    }, fe = (p, _, y, O, A, x, B) => {
      const L = () => {
        if (p.isMounted) {
          let { next: U, bu: q, u: ne, parent: K, vnode: me } = p;
          {
            const ze = uu(p);
            if (ze) {
              U && (U.el = me.el, ee(p, U, B)), ze.asyncDep.then(() => {
                p.isUnmounted || L();
              });
              return;
            }
          }
          let ve = U, Se;
          En(p, false), U ? (U.el = me.el, ee(p, U, B)) : U = me, q && Es(q), (Se = U.props && U.props.onVnodeBeforeUpdate) && Nt(Se, K, U, me), En(p, true);
          const Le = Oi(p), et = p.subTree;
          p.subTree = Le, S(et, Le, g(et.el), C(et), p, A, x), U.el = Le.el, ve === null && tg(p, Le.el), ne && at(ne, A), (Se = U.props && U.props.onVnodeUpdated) && at(() => Nt(Se, K, U, me), A);
        } else {
          let U;
          const { el: q, props: ne } = _, { bm: K, m: me, parent: ve, root: Se, type: Le } = p, et = Cr(_);
          if (En(p, false), K && Es(K), !et && (U = ne && ne.onVnodeBeforeMount) && Nt(U, ve, _), En(p, true), q && ye) {
            const ze = () => {
              p.subTree = Oi(p), ye(q, p.subTree, p, A, null);
            };
            et && Le.__asyncHydrate ? Le.__asyncHydrate(q, p, ze) : ze();
          } else {
            Se.ce && Se.ce._injectChildStyle(Le);
            const ze = p.subTree = Oi(p);
            S(null, ze, y, O, p, A, x), _.el = ze.el;
          }
          if (me && at(me, A), !et && (U = ne && ne.onVnodeMounted)) {
            const ze = _;
            at(() => Nt(U, ve, ze), A);
          }
          (_.shapeFlag & 256 || ve && Cr(ve.vnode) && ve.vnode.shapeFlag & 256) && p.a && at(p.a, A), p.isMounted = true, _ = y = O = null;
        }
      };
      p.scope.on();
      const M = p.effect = new wc(L);
      p.scope.off();
      const D = p.update = M.run.bind(M), Z = p.job = M.runIfDirty.bind(M);
      Z.i = p, Z.id = p.uid, M.scheduler = () => Vo(Z), En(p, true), D();
    }, ee = (p, _, y) => {
      _.component = p;
      const O = p.vnode.props;
      p.vnode = _, p.next = null, Fp(p, _.props, O, y), Wp(p, _.children, y), dn(), Ma(p), hn();
    }, de = (p, _, y, O, A, x, B, L, M = false) => {
      const D = p && p.children, Z = p ? p.shapeFlag : 0, U = _.children, { patchFlag: q, shapeFlag: ne } = _;
      if (q > 0) {
        if (q & 128) {
          Be(D, U, y, O, A, x, B, L, M);
          return;
        } else if (q & 256) {
          Pe(D, U, y, O, A, x, B, L, M);
          return;
        }
      }
      ne & 8 ? (Z & 16 && De(D, A, x), U !== D && f(y, U)) : Z & 16 ? ne & 16 ? Be(D, U, y, O, A, x, B, L, M) : De(D, A, x, true) : (Z & 8 && f(y, ""), ne & 16 && Q(U, y, O, A, x, B, L, M));
    }, Pe = (p, _, y, O, A, x, B, L, M) => {
      p = p || Gn, _ = _ || Gn;
      const D = p.length, Z = _.length, U = Math.min(D, Z);
      let q;
      for (q = 0; q < U; q++) {
        const ne = _[q] = M ? sn(_[q]) : Dt(_[q]);
        S(p[q], ne, y, null, A, x, B, L, M);
      }
      D > Z ? De(p, A, x, true, false, U) : Q(_, y, O, A, x, B, L, M, U);
    }, Be = (p, _, y, O, A, x, B, L, M) => {
      let D = 0;
      const Z = _.length;
      let U = p.length - 1, q = Z - 1;
      for (; D <= U && D <= q; ) {
        const ne = p[D], K = _[D] = M ? sn(_[D]) : Dt(_[D]);
        if (mr(ne, K))
          S(ne, K, y, null, A, x, B, L, M);
        else
          break;
        D++;
      }
      for (; D <= U && D <= q; ) {
        const ne = p[U], K = _[q] = M ? sn(_[q]) : Dt(_[q]);
        if (mr(ne, K))
          S(ne, K, y, null, A, x, B, L, M);
        else
          break;
        U--, q--;
      }
      if (D > U) {
        if (D <= q) {
          const ne = q + 1, K = ne < Z ? _[ne].el : O;
          for (; D <= q; )
            S(null, _[D] = M ? sn(_[D]) : Dt(_[D]), y, K, A, x, B, L, M), D++;
        }
      } else if (D > q)
        for (; D <= U; )
          Ne(p[D], A, x, true), D++;
      else {
        const ne = D, K = D, me = /* @__PURE__ */ new Map();
        for (D = K; D <= q; D++) {
          const ke = _[D] = M ? sn(_[D]) : Dt(_[D]);
          ke.key != null && me.set(ke.key, D);
        }
        let ve, Se = 0;
        const Le = q - K + 1;
        let et = false, ze = 0;
        const Jt = new Array(Le);
        for (D = 0; D < Le; D++)
          Jt[D] = 0;
        for (D = ne; D <= U; D++) {
          const ke = p[D];
          if (Se >= Le) {
            Ne(ke, A, x, true);
            continue;
          }
          let tt;
          if (ke.key != null)
            tt = me.get(ke.key);
          else
            for (ve = K; ve <= q; ve++)
              if (Jt[ve - K] === 0 && mr(ke, _[ve])) {
                tt = ve;
                break;
              }
          tt === void 0 ? Ne(ke, A, x, true) : (Jt[tt - K] = D + 1, tt >= ze ? ze = tt : et = true, S(ke, _[tt], y, null, A, x, B, L, M), Se++);
        }
        const Me = et ? zp(Jt) : Gn;
        for (ve = Me.length - 1, D = Le - 1; D >= 0; D--) {
          const ke = K + D, tt = _[ke], Jr = ke + 1 < Z ? _[ke + 1].el : O;
          Jt[D] === 0 ? S(null, tt, y, Jr, A, x, B, L, M) : et && (ve < 0 || D !== Me[ve] ? Ue(tt, y, Jr, 2) : ve--);
        }
      }
    }, Ue = (p, _, y, O, A = null) => {
      const { el: x, type: B, transition: L, children: M, shapeFlag: D } = p;
      if (D & 6) {
        Ue(p.component.subTree, _, y, O);
        return;
      }
      if (D & 128) {
        p.suspense.move(_, y, O);
        return;
      }
      if (D & 64) {
        B.move(p, _, y, J);
        return;
      }
      if (B === xt) {
        r(x, _, y);
        for (let U = 0; U < M.length; U++)
          Ue(M[U], _, y, O);
        r(p.anchor, _, y);
        return;
      }
      if (B === $i) {
        j(p, _, y);
        return;
      }
      if (O !== 2 && D & 1 && L)
        if (O === 0)
          L.beforeEnter(x), r(x, _, y), at(() => L.enter(x), A);
        else {
          const { leave: U, delayLeave: q, afterLeave: ne } = L, K = () => r(x, _, y), me = () => {
            U(x, () => {
              K(), ne && ne();
            });
          };
          q ? q(x, K, me) : me();
        }
      else
        r(x, _, y);
    }, Ne = (p, _, y, O = false, A = false) => {
      const { type: x, props: B, ref: L, children: M, dynamicChildren: D, shapeFlag: Z, patchFlag: U, dirs: q, cacheIndex: ne } = p;
      if (U === -2 && (A = false), L != null && Rs(L, null, y, p, true), ne != null && (_.renderCache[ne] = void 0), Z & 256) {
        _.ctx.deactivate(p);
        return;
      }
      const K = Z & 1 && q, me = !Cr(p);
      let ve;
      if (me && (ve = B && B.onVnodeBeforeUnmount) && Nt(ve, _, p), Z & 6)
        Ie(p.component, y, O);
      else {
        if (Z & 128) {
          p.suspense.unmount(y, O);
          return;
        }
        K && vn(p, null, _, "beforeUnmount"), Z & 64 ? p.type.remove(p, _, y, J, O) : D && !D.hasOnce && (x !== xt || U > 0 && U & 64) ? De(D, _, y, false, true) : (x === xt && U & 384 || !A && Z & 16) && De(M, _, y), O && st(p);
      }
      (me && (ve = B && B.onVnodeUnmounted) || K) && at(() => {
        ve && Nt(ve, _, p), K && vn(p, null, _, "unmounted");
      }, y);
    }, st = (p) => {
      const { type: _, el: y, anchor: O, transition: A } = p;
      if (_ === xt) {
        Re(y, O);
        return;
      }
      if (_ === $i) {
        $(p);
        return;
      }
      const x = () => {
        s(y), A && !A.persisted && A.afterLeave && A.afterLeave();
      };
      if (p.shapeFlag & 1 && A && !A.persisted) {
        const { leave: B, delayLeave: L } = A, M = () => B(y, x);
        L ? L(p.el, x, M) : M();
      } else
        x();
    }, Re = (p, _) => {
      let y;
      for (; p !== _; )
        y = E(p), s(p), p = y;
      s(_);
    }, Ie = (p, _, y) => {
      const { bum: O, scope: A, job: x, subTree: B, um: L, m: M, a: D } = p;
      Ua(M), Ua(D), O && Es(O), A.stop(), x && (x.flags |= 8, Ne(B, p, _, y)), L && at(L, _), at(() => {
        p.isUnmounted = true;
      }, _), _ && _.pendingBranch && !_.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === _.pendingId && (_.deps--, _.deps === 0 && _.resolve());
    }, De = (p, _, y, O = false, A = false, x = 0) => {
      for (let B = x; B < p.length; B++)
        Ne(p[B], _, y, O, A);
    }, C = (p) => {
      if (p.shapeFlag & 6)
        return C(p.component.subTree);
      if (p.shapeFlag & 128)
        return p.suspense.next();
      const _ = E(p.anchor || p.el), y = _ && _[dp];
      return y ? E(y) : _;
    };
    let W = false;
    const H = (p, _, y) => {
      p == null ? _._vnode && Ne(_._vnode, null, null, true) : S(_._vnode || null, p, _, null, null, null, y), _._vnode = p, W || (W = true, Ma(), Bc(), W = false);
    }, J = {
      p: S,
      um: Ne,
      m: Ue,
      r: st,
      mt: Ve,
      mc: Q,
      pc: de,
      pbc: ae,
      n: C,
      o: t
    };
    let pe, ye;
    return e && ([pe, ye] = e(J)), {
      render: H,
      hydrate: pe,
      createApp: Lp(H, pe)
    };
  }
  function Si({ type: t, props: e }, n) {
    return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
  }
  function En({ effect: t, job: e }, n) {
    n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
  }
  function Kp(t, e) {
    return (!t || t && !t.pendingBranch) && e && !e.persisted;
  }
  function cu(t, e, n = false) {
    const r = t.children, s = e.children;
    if (ce(r) && ce(s))
      for (let i = 0; i < r.length; i++) {
        const o = r[i];
        let c = s[i];
        c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = s[i] = sn(s[i]), c.el = o.el), !n && c.patchFlag !== -2 && cu(o, c)), c.type === qs && (c.el = o.el);
      }
  }
  function zp(t) {
    const e = t.slice(), n = [
      0
    ];
    let r, s, i, o, c;
    const u = t.length;
    for (r = 0; r < u; r++) {
      const h = t[r];
      if (h !== 0) {
        if (s = n[n.length - 1], t[s] < h) {
          e[r] = s, n.push(r);
          continue;
        }
        for (i = 0, o = n.length - 1; i < o; )
          c = i + o >> 1, t[n[c]] < h ? i = c + 1 : o = c;
        h < t[n[i]] && (i > 0 && (e[r] = n[i - 1]), n[i] = r);
      }
    }
    for (i = n.length, o = n[i - 1]; i-- > 0; )
      n[i] = o, o = e[o];
    return n;
  }
  function uu(t) {
    const e = t.subTree.component;
    if (e)
      return e.asyncDep && !e.asyncResolved ? e : uu(e);
  }
  function Ua(t) {
    if (t)
      for (let e = 0; e < t.length; e++)
        t[e].flags |= 8;
  }
  const Yp = Symbol.for("v-scx"), Gp = () => It(Yp);
  function Or(t, e, n) {
    return fu(t, e, n);
  }
  function fu(t, e, n = Te) {
    const { immediate: r, deep: s, flush: i, once: o } = n, c = He({}, n), u = e && r || !e && i !== "post";
    let h;
    if (Fr) {
      if (i === "sync") {
        const v = Gp();
        h = v.__watcherHandles || (v.__watcherHandles = []);
      } else if (!u) {
        const v = () => {
        };
        return v.stop = Tt, v.resume = Tt, v.pause = Tt, v;
      }
    }
    const f = je;
    c.call = (v, R, S) => Ft(v, f, R, S);
    let g = false;
    i === "post" ? c.scheduler = (v) => {
      at(v, f && f.suspense);
    } : i !== "sync" && (g = true, c.scheduler = (v, R) => {
      R ? v() : Vo(v);
    }), c.augmentJob = (v) => {
      e && (v.flags |= 4), g && (v.flags |= 2, f && (v.id = f.uid, v.i = f));
    };
    const E = lp(t, e, c);
    return Fr && (h ? h.push(E) : u && E()), E;
  }
  function qp(t, e, n) {
    const r = this.proxy, s = Fe(t) ? t.includes(".") ? du(r, t) : () => r[t] : t.bind(r, r);
    let i;
    ue(e) ? i = e : (i = e.handler, n = e);
    const o = Kr(this), c = fu(s, i.bind(r), n);
    return o(), c;
  }
  function du(t, e) {
    const n = e.split(".");
    return () => {
      let r = t;
      for (let s = 0; s < n.length && r; s++)
        r = r[n[s]];
      return r;
    };
  }
  const Xp = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${gt(e)}Modifiers`] || t[`${Dn(e)}Modifiers`];
  function Jp(t, e, ...n) {
    if (t.isUnmounted)
      return;
    const r = t.vnode.props || Te;
    let s = n;
    const i = e.startsWith("update:"), o = i && Xp(r, e.slice(7));
    o && (o.trim && (s = n.map((f) => Fe(f) ? f.trim() : f)), o.number && (s = n.map(Xi)));
    let c, u = r[c = bi(e)] || r[c = bi(gt(e))];
    !u && i && (u = r[c = bi(Dn(e))]), u && Ft(u, t, 6, s);
    const h = r[c + "Once"];
    if (h) {
      if (!t.emitted)
        t.emitted = {};
      else if (t.emitted[c])
        return;
      t.emitted[c] = true, Ft(h, t, 6, s);
    }
  }
  function hu(t, e, n = false) {
    const r = e.emitsCache, s = r.get(t);
    if (s !== void 0)
      return s;
    const i = t.emits;
    let o = {}, c = false;
    if (!ue(t)) {
      const u = (h) => {
        const f = hu(h, e, true);
        f && (c = true, He(o, f));
      };
      !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
    }
    return !i && !c ? (Ce(t) && r.set(t, null), null) : (ce(i) ? i.forEach((u) => o[u] = null) : He(o, i), Ce(t) && r.set(t, o), o);
  }
  function Gs(t, e) {
    return !t || !Hs(e) ? false : (e = e.slice(2).replace(/Once$/, ""), be(t, e[0].toLowerCase() + e.slice(1)) || be(t, Dn(e)) || be(t, e));
  }
  function Oi(t) {
    const { type: e, vnode: n, proxy: r, withProxy: s, propsOptions: [i], slots: o, attrs: c, emit: u, render: h, renderCache: f, props: g, data: E, setupState: v, ctx: R, inheritAttrs: S } = t, k = Ns(t);
    let F, V;
    try {
      if (n.shapeFlag & 4) {
        const $ = s || r, z = $;
        F = Dt(h.call(z, $, f, g, v, E, R)), V = c;
      } else {
        const $ = e;
        F = Dt($.length > 1 ? $(g, {
          attrs: c,
          slots: o,
          emit: u
        }) : $(g, null)), V = e.props ? c : Qp(c);
      }
    } catch ($) {
      $r.length = 0, zs($, t, 1), F = We(Nn);
    }
    let j = F;
    if (V && S !== false) {
      const $ = Object.keys(V), { shapeFlag: z } = j;
      $.length && z & 7 && (i && $.some(wo) && (V = Zp(V, i)), j = Zn(j, V, false, true));
    }
    return n.dirs && (j = Zn(j, null, false, true), j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs), n.transition && Ho(j, n.transition), F = j, Ns(k), F;
  }
  const Qp = (t) => {
    let e;
    for (const n in t)
      (n === "class" || n === "style" || Hs(n)) && ((e || (e = {}))[n] = t[n]);
    return e;
  }, Zp = (t, e) => {
    const n = {};
    for (const r in t)
      (!wo(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
    return n;
  };
  function eg(t, e, n) {
    const { props: r, children: s, component: i } = t, { props: o, children: c, patchFlag: u } = e, h = i.emitsOptions;
    if (e.dirs || e.transition)
      return true;
    if (n && u >= 0) {
      if (u & 1024)
        return true;
      if (u & 16)
        return r ? Ka(r, o, h) : !!o;
      if (u & 8) {
        const f = e.dynamicProps;
        for (let g = 0; g < f.length; g++) {
          const E = f[g];
          if (o[E] !== r[E] && !Gs(h, E))
            return true;
        }
      }
    } else
      return (s || c) && (!c || !c.$stable) ? true : r === o ? false : r ? o ? Ka(r, o, h) : true : !!o;
    return false;
  }
  function Ka(t, e, n) {
    const r = Object.keys(e);
    if (r.length !== Object.keys(t).length)
      return true;
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      if (e[i] !== t[i] && !Gs(n, i))
        return true;
    }
    return false;
  }
  function tg({ vnode: t, parent: e }, n) {
    for (; e; ) {
      const r = e.subTree;
      if (r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t)
        (t = e.vnode).el = n, e = e.parent;
      else
        break;
    }
  }
  const pu = (t) => t.__isSuspense;
  function ng(t, e) {
    e && e.pendingBranch ? ce(t) ? e.effects.push(...t) : e.effects.push(t) : fp(t);
  }
  const xt = Symbol.for("v-fgt"), qs = Symbol.for("v-txt"), Nn = Symbol.for("v-cmt"), $i = Symbol.for("v-stc"), $r = [];
  let lt = null;
  gu = function(t = false) {
    $r.push(lt = t ? null : []);
  };
  function rg() {
    $r.pop(), lt = $r[$r.length - 1] || null;
  }
  let kr = 1;
  function za(t, e = false) {
    kr += t, t < 0 && lt && e && (lt.hasOnce = true);
  }
  function _u(t) {
    return t.dynamicChildren = kr > 0 ? lt || Gn : null, rg(), kr > 0 && lt && lt.push(t), t;
  }
  sg = function(t, e, n, r, s, i) {
    return _u(bt(t, e, n, r, s, i, true));
  };
  function ig(t, e, n, r, s) {
    return _u(We(t, e, n, r, s, true));
  }
  function Ds(t) {
    return t ? t.__v_isVNode === true : false;
  }
  function mr(t, e) {
    return t.type === e.type && t.key === e.key;
  }
  const mu = ({ key: t }) => t ?? null, Ts = ({ ref: t, ref_key: e, ref_for: n }) => (typeof t == "number" && (t = "" + t), t != null ? Fe(t) || xe(t) || ue(t) ? {
    i: rt,
    r: t,
    k: e,
    f: !!n
  } : t : null);
  bt = function(t, e = null, n = null, r = 0, s = null, i = t === xt ? 0 : 1, o = false, c = false) {
    const u = {
      __v_isVNode: true,
      __v_skip: true,
      type: t,
      props: e,
      key: e && mu(e),
      ref: e && Ts(e),
      scopeId: Kc,
      slotScopeIds: null,
      children: n,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetStart: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: i,
      patchFlag: r,
      dynamicProps: s,
      dynamicChildren: null,
      appContext: null,
      ctx: rt
    };
    return c ? (Bo(u, n), i & 128 && t.normalize(u)) : n && (u.shapeFlag |= Fe(n) ? 8 : 16), kr > 0 && !o && lt && (u.patchFlag > 0 || i & 6) && u.patchFlag !== 32 && lt.push(u), u;
  };
  We = og;
  function og(t, e = null, n = null, r = 0, s = null, i = false) {
    if ((!t || t === Sp) && (t = Nn), Ds(t)) {
      const c = Zn(t, e, true);
      return n && Bo(c, n), kr > 0 && !i && lt && (c.shapeFlag & 6 ? lt[lt.indexOf(t)] = c : lt.push(c)), c.patchFlag = -2, c;
    }
    if (mg(t) && (t = t.__vccOpts), e) {
      e = ag(e);
      let { class: c, style: u } = e;
      c && !Fe(c) && (e.class = Oo(c)), Ce(u) && (Lo(u) && !ce(u) && (u = He({}, u)), e.style = So(u));
    }
    const o = Fe(t) ? 1 : pu(t) ? 128 : hp(t) ? 64 : Ce(t) ? 4 : ue(t) ? 2 : 0;
    return bt(t, e, n, r, s, o, i, true);
  }
  function ag(t) {
    return t ? Lo(t) || nu(t) ? He({}, t) : t : null;
  }
  function Zn(t, e, n = false, r = false) {
    const { props: s, ref: i, patchFlag: o, children: c, transition: u } = t, h = e ? lg(s || {}, e) : s, f = {
      __v_isVNode: true,
      __v_skip: true,
      type: t.type,
      props: h,
      key: h && mu(h),
      ref: e && e.ref ? n && i ? ce(i) ? i.concat(Ts(e)) : [
        i,
        Ts(e)
      ] : Ts(e) : i,
      scopeId: t.scopeId,
      slotScopeIds: t.slotScopeIds,
      children: c,
      target: t.target,
      targetStart: t.targetStart,
      targetAnchor: t.targetAnchor,
      staticCount: t.staticCount,
      shapeFlag: t.shapeFlag,
      patchFlag: e && t.type !== xt ? o === -1 ? 16 : o | 16 : o,
      dynamicProps: t.dynamicProps,
      dynamicChildren: t.dynamicChildren,
      appContext: t.appContext,
      dirs: t.dirs,
      transition: u,
      component: t.component,
      suspense: t.suspense,
      ssContent: t.ssContent && Zn(t.ssContent),
      ssFallback: t.ssFallback && Zn(t.ssFallback),
      el: t.el,
      anchor: t.anchor,
      ctx: t.ctx,
      ce: t.ce
    };
    return u && r && Ho(f, u.clone(f)), f;
  }
  io = function(t = " ", e = 0) {
    return We(qs, null, t, e);
  };
  PT = function(t = "", e = false) {
    return e ? (gu(), ig(Nn, null, t)) : We(Nn, null, t);
  };
  function Dt(t) {
    return t == null || typeof t == "boolean" ? We(Nn) : ce(t) ? We(xt, null, t.slice()) : Ds(t) ? sn(t) : We(qs, null, String(t));
  }
  function sn(t) {
    return t.el === null && t.patchFlag !== -1 || t.memo ? t : Zn(t);
  }
  function Bo(t, e) {
    let n = 0;
    const { shapeFlag: r } = t;
    if (e == null)
      e = null;
    else if (ce(e))
      n = 16;
    else if (typeof e == "object")
      if (r & 65) {
        const s = e.default;
        s && (s._c && (s._d = false), Bo(t, s()), s._c && (s._d = true));
        return;
      } else {
        n = 32;
        const s = e._;
        !s && !nu(e) ? e._ctx = rt : s === 3 && rt && (rt.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
      }
    else
      ue(e) ? (e = {
        default: e,
        _ctx: rt
      }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [
        io(e)
      ]) : n = 8);
    t.children = e, t.shapeFlag |= n;
  }
  function lg(...t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      for (const s in r)
        if (s === "class")
          e.class !== r.class && (e.class = Oo([
            e.class,
            r.class
          ]));
        else if (s === "style")
          e.style = So([
            e.style,
            r.style
          ]);
        else if (Hs(s)) {
          const i = e[s], o = r[s];
          o && i !== o && !(ce(i) && i.includes(o)) && (e[s] = i ? [].concat(i, o) : o);
        } else
          s !== "" && (e[s] = r[s]);
    }
    return e;
  }
  function Nt(t, e, n, r = null) {
    Ft(t, e, 7, [
      n,
      r
    ]);
  }
  const cg = Zc();
  let ug = 0;
  function fg(t, e, n) {
    const r = t.type, s = (e ? e.appContext : t.appContext) || cg, i = {
      uid: ug++,
      vnode: t,
      type: r,
      parent: e,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new bc(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(s.provides),
      ids: e ? e.ids : [
        "",
        0,
        0
      ],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: su(r, s),
      emitsOptions: hu(r, s),
      emit: null,
      emitted: null,
      propsDefaults: Te,
      inheritAttrs: r.inheritAttrs,
      ctx: Te,
      data: Te,
      props: Te,
      attrs: Te,
      slots: Te,
      refs: Te,
      setupState: Te,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    return i.ctx = {
      _: i
    }, i.root = e ? e.root : i, i.emit = Jp.bind(null, i), t.ce && t.ce(i), i;
  }
  let je = null, Is, oo;
  {
    const t = Us(), e = (n, r) => {
      let s;
      return (s = t[n]) || (s = t[n] = []), s.push(r), (i) => {
        s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
      };
    };
    Is = e("__VUE_INSTANCE_SETTERS__", (n) => je = n), oo = e("__VUE_SSR_SETTERS__", (n) => Fr = n);
  }
  const Kr = (t) => {
    const e = je;
    return Is(t), t.scope.on(), () => {
      t.scope.off(), Is(e);
    };
  }, Ya = () => {
    je && je.scope.off(), Is(null);
  };
  function vu(t) {
    return t.vnode.shapeFlag & 4;
  }
  let Fr = false;
  function dg(t, e = false, n = false) {
    e && oo(e);
    const { props: r, children: s } = t.vnode, i = vu(t);
    kp(t, r, i, e), jp(t, s, n);
    const o = i ? hg(t, e) : void 0;
    return e && oo(false), o;
  }
  function hg(t, e) {
    const n = t.type;
    t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, $p);
    const { setup: r } = n;
    if (r) {
      dn();
      const s = t.setupContext = r.length > 1 ? gg(t) : null, i = Kr(t), o = Ur(r, t, 0, [
        t.props,
        s
      ]), c = dc(o);
      if (hn(), i(), (c || t.sp) && !Cr(t) && Yc(t), c) {
        if (o.then(Ya, Ya), e)
          return o.then((u) => {
            Ga(t, u, e);
          }).catch((u) => {
            zs(u, t, 0);
          });
        t.asyncDep = o;
      } else
        Ga(t, o, e);
    } else
      Eu(t, e);
  }
  function Ga(t, e, n) {
    ue(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Ce(e) && (t.setupState = Hc(e)), Eu(t, n);
  }
  let qa;
  function Eu(t, e, n) {
    const r = t.type;
    if (!t.render) {
      if (!e && qa && !r.render) {
        const s = r.template || jo(t).template;
        if (s) {
          const { isCustomElement: i, compilerOptions: o } = t.appContext.config, { delimiters: c, compilerOptions: u } = r, h = He(He({
            isCustomElement: i,
            delimiters: c
          }, o), u);
          r.render = qa(s, h);
        }
      }
      t.render = r.render || Tt;
    }
    {
      const s = Kr(t);
      dn();
      try {
        Pp(t);
      } finally {
        hn(), s();
      }
    }
  }
  const pg = {
    get(t, e) {
      return Ke(t, "get", ""), t[e];
    }
  };
  function gg(t) {
    const e = (n) => {
      t.exposed = n || {};
    };
    return {
      attrs: new Proxy(t.attrs, pg),
      slots: t.slots,
      emit: t.emit,
      expose: e
    };
  }
  function Xs(t) {
    return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Hc(Mo(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in Sr)
          return Sr[n](t);
      },
      has(e, n) {
        return n in e || n in Sr;
      }
    })) : t.proxy;
  }
  function _g(t, e = true) {
    return ue(t) ? t.displayName || t.name : t.name || e && t.__name;
  }
  function mg(t) {
    return ue(t) && "__vccOpts" in t;
  }
  const ht = (t, e) => op(t, e, Fr);
  function bu(t, e, n) {
    const r = arguments.length;
    return r === 2 ? Ce(e) && !ce(e) ? Ds(e) ? We(t, null, [
      e
    ]) : We(t, e) : We(t, null, e) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Ds(n) && (n = [
      n
    ]), We(t, e, n));
  }
  const vg = "3.5.13";
  let ao;
  const Xa = typeof window < "u" && window.trustedTypes;
  if (Xa)
    try {
      ao = Xa.createPolicy("vue", {
        createHTML: (t) => t
      });
    } catch {
    }
  const yu = ao ? (t) => ao.createHTML(t) : (t) => t, Eg = "http://www.w3.org/2000/svg", bg = "http://www.w3.org/1998/Math/MathML", Bt = typeof document < "u" ? document : null, Ja = Bt && Bt.createElement("template"), yg = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, n, r) => {
      const s = e === "svg" ? Bt.createElementNS(Eg, t) : e === "mathml" ? Bt.createElementNS(bg, t) : n ? Bt.createElement(t, {
        is: n
      }) : Bt.createElement(t);
      return t === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
    },
    createText: (t) => Bt.createTextNode(t),
    createComment: (t) => Bt.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => Bt.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "");
    },
    insertStaticContent(t, e, n, r, s, i) {
      const o = n ? n.previousSibling : e.lastChild;
      if (s && (s === i || s.nextSibling))
        for (; e.insertBefore(s.cloneNode(true), n), !(s === i || !(s = s.nextSibling)); )
          ;
      else {
        Ja.innerHTML = yu(r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t);
        const c = Ja.content;
        if (r === "svg" || r === "mathml") {
          const u = c.firstChild;
          for (; u.firstChild; )
            c.appendChild(u.firstChild);
          c.removeChild(u);
        }
        e.insertBefore(c, n);
      }
      return [
        o ? o.nextSibling : e.firstChild,
        n ? n.previousSibling : e.lastChild
      ];
    }
  }, Tg = Symbol("_vtc");
  function wg(t, e, n) {
    const r = t[Tg];
    r && (e = (e ? [
      e,
      ...r
    ] : [
      ...r
    ]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
  }
  const Qa = Symbol("_vod"), Ag = Symbol("_vsh"), Cg = Symbol(""), Sg = /(^|;)\s*display\s*:/;
  function Og(t, e, n) {
    const r = t.style, s = Fe(n);
    let i = false;
    if (n && !s) {
      if (e)
        if (Fe(e))
          for (const o of e.split(";")) {
            const c = o.slice(0, o.indexOf(":")).trim();
            n[c] == null && ws(r, c, "");
          }
        else
          for (const o in e)
            n[o] == null && ws(r, o, "");
      for (const o in n)
        o === "display" && (i = true), ws(r, o, n[o]);
    } else if (s) {
      if (e !== n) {
        const o = r[Cg];
        o && (n += ";" + o), r.cssText = n, i = Sg.test(n);
      }
    } else
      e && t.removeAttribute("style");
    Qa in t && (t[Qa] = i ? r.display : "", t[Ag] && (r.display = "none"));
  }
  const Za = /\s*!important$/;
  function ws(t, e, n) {
    if (ce(n))
      n.forEach((r) => ws(t, e, r));
    else if (n == null && (n = ""), e.startsWith("--"))
      t.setProperty(e, n);
    else {
      const r = $g(t, e);
      Za.test(n) ? t.setProperty(Dn(r), n.replace(Za, ""), "important") : t[r] = n;
    }
  }
  const el = [
    "Webkit",
    "Moz",
    "ms"
  ], Pi = {};
  function $g(t, e) {
    const n = Pi[e];
    if (n)
      return n;
    let r = gt(e);
    if (r !== "filter" && r in t)
      return Pi[e] = r;
    r = Bs(r);
    for (let s = 0; s < el.length; s++) {
      const i = el[s] + r;
      if (i in t)
        return Pi[e] = i;
    }
    return e;
  }
  const tl = "http://www.w3.org/1999/xlink";
  function nl(t, e, n, r, s, i = Nh(e)) {
    r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(tl, e.slice(6, e.length)) : t.setAttributeNS(tl, e, n) : n == null || i && !_c(n) ? t.removeAttribute(e) : t.setAttribute(e, i ? "" : kt(n) ? String(n) : n);
  }
  function rl(t, e, n, r, s) {
    if (e === "innerHTML" || e === "textContent") {
      n != null && (t[e] = e === "innerHTML" ? yu(n) : n);
      return;
    }
    const i = t.tagName;
    if (e === "value" && i !== "PROGRESS" && !i.includes("-")) {
      const c = i === "OPTION" ? t.getAttribute("value") || "" : t.value, u = n == null ? t.type === "checkbox" ? "on" : "" : String(n);
      (c !== u || !("_value" in t)) && (t.value = u), n == null && t.removeAttribute(e), t._value = n;
      return;
    }
    let o = false;
    if (n === "" || n == null) {
      const c = typeof t[e];
      c === "boolean" ? n = _c(n) : n == null && c === "string" ? (n = "", o = true) : c === "number" && (n = 0, o = true);
    }
    try {
      t[e] = n;
    } catch {
    }
    o && t.removeAttribute(s || e);
  }
  function yn(t, e, n, r) {
    t.addEventListener(e, n, r);
  }
  function Pg(t, e, n, r) {
    t.removeEventListener(e, n, r);
  }
  const sl = Symbol("_vei");
  function Ng(t, e, n, r, s = null) {
    const i = t[sl] || (t[sl] = {}), o = i[e];
    if (r && o)
      o.value = r;
    else {
      const [c, u] = Rg(e);
      if (r) {
        const h = i[e] = Ig(r, s);
        yn(t, c, h, u);
      } else
        o && (Pg(t, c, o, u), i[e] = void 0);
    }
  }
  const il = /(?:Once|Passive|Capture)$/;
  function Rg(t) {
    let e;
    if (il.test(t)) {
      e = {};
      let r;
      for (; r = t.match(il); )
        t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = true;
    }
    return [
      t[2] === ":" ? t.slice(3) : Dn(t.slice(2)),
      e
    ];
  }
  let Ni = 0;
  const xg = Promise.resolve(), Dg = () => Ni || (xg.then(() => Ni = 0), Ni = Date.now());
  function Ig(t, e) {
    const n = (r) => {
      if (!r._vts)
        r._vts = Date.now();
      else if (r._vts <= n.attached)
        return;
      Ft(Lg(r, n.value), e, 5, [
        r
      ]);
    };
    return n.value = t, n.attached = Dg(), n;
  }
  function Lg(t, e) {
    if (ce(e)) {
      const n = t.stopImmediatePropagation;
      return t.stopImmediatePropagation = () => {
        n.call(t), t._stopped = true;
      }, e.map((r) => (s) => !s._stopped && r && r(s));
    } else
      return e;
  }
  const ol = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, Mg = (t, e, n, r, s, i) => {
    const o = s === "svg";
    e === "class" ? wg(t, r, o) : e === "style" ? Og(t, n, r) : Hs(e) ? wo(e) || Ng(t, e, n, r, i) : (e[0] === "." ? (e = e.slice(1), true) : e[0] === "^" ? (e = e.slice(1), false) : kg(t, e, r, o)) ? (rl(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && nl(t, e, r, o, i, e !== "value")) : t._isVueCE && (/[A-Z]/.test(e) || !Fe(r)) ? rl(t, gt(e), r, i, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), nl(t, e, r, o));
  };
  function kg(t, e, n, r) {
    if (r)
      return !!(e === "innerHTML" || e === "textContent" || e in t && ol(e) && ue(n));
    if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
      return false;
    if (e === "width" || e === "height") {
      const s = t.tagName;
      if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
        return false;
    }
    return ol(e) && Fe(n) ? false : e in t;
  }
  const Ls = (t) => {
    const e = t.props["onUpdate:modelValue"] || false;
    return ce(e) ? (n) => Es(e, n) : e;
  };
  function Fg(t) {
    t.target.composing = true;
  }
  function al(t) {
    const e = t.target;
    e.composing && (e.composing = false, e.dispatchEvent(new Event("input")));
  }
  let Qn;
  Qn = Symbol("_assign");
  NT = {
    created(t, { modifiers: { lazy: e, trim: n, number: r } }, s) {
      t[Qn] = Ls(s);
      const i = r || s.props && s.props.type === "number";
      yn(t, e ? "change" : "input", (o) => {
        if (o.target.composing)
          return;
        let c = t.value;
        n && (c = c.trim()), i && (c = Xi(c)), t[Qn](c);
      }), n && yn(t, "change", () => {
        t.value = t.value.trim();
      }), e || (yn(t, "compositionstart", Fg), yn(t, "compositionend", al), yn(t, "change", al));
    },
    mounted(t, { value: e }) {
      t.value = e ?? "";
    },
    beforeUpdate(t, { value: e, oldValue: n, modifiers: { lazy: r, trim: s, number: i } }, o) {
      if (t[Qn] = Ls(o), t.composing)
        return;
      const c = (i || t.type === "number") && !/^0\d/.test(t.value) ? Xi(t.value) : t.value, u = e ?? "";
      c !== u && (document.activeElement === t && t.type !== "range" && (r && e === n || s && t.value.trim() === u) || (t.value = u));
    }
  };
  RT = {
    deep: true,
    created(t, e, n) {
      t[Qn] = Ls(n), yn(t, "change", () => {
        const r = t._modelValue, s = Vg(t), i = t.checked, o = t[Qn];
        if (ce(r)) {
          const c = mc(r, s), u = c !== -1;
          if (i && !u)
            o(r.concat(s));
          else if (!i && u) {
            const h = [
              ...r
            ];
            h.splice(c, 1), o(h);
          }
        } else if (js(r)) {
          const c = new Set(r);
          i ? c.add(s) : c.delete(s), o(c);
        } else
          o(Tu(t, i));
      });
    },
    mounted: ll,
    beforeUpdate(t, e, n) {
      t[Qn] = Ls(n), ll(t, e, n);
    }
  };
  function ll(t, { value: e, oldValue: n }, r) {
    t._modelValue = e;
    let s;
    if (ce(e))
      s = mc(e, r.props.value) > -1;
    else if (js(e))
      s = e.has(r.props.value);
    else {
      if (e === n)
        return;
      s = Ks(e, Tu(t, true));
    }
    t.checked !== s && (t.checked = s);
  }
  function Vg(t) {
    return "_value" in t ? t._value : t.value;
  }
  function Tu(t, e) {
    const n = e ? "_trueValue" : "_falseValue";
    return n in t ? t[n] : e;
  }
  const Hg = He({
    patchProp: Mg
  }, yg);
  let cl;
  function jg() {
    return cl || (cl = Bp(Hg));
  }
  const Wg = (...t) => {
    const e = jg().createApp(...t), { mount: n } = e;
    return e.mount = (r) => {
      const s = Ug(r);
      if (!s)
        return;
      const i = e._component;
      !ue(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
      const o = n(s, false, Bg(s));
      return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
    }, e;
  };
  function Bg(t) {
    if (t instanceof SVGElement)
      return "svg";
    if (typeof MathMLElement == "function" && t instanceof MathMLElement)
      return "mathml";
  }
  function Ug(t) {
    return Fe(t) ? document.querySelector(t) : t;
  }
  var Kg = false;
  let wu;
  const Js = (t) => wu = t, Au = Symbol();
  function lo(t) {
    return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
  }
  var Pr;
  (function(t) {
    t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
  })(Pr || (Pr = {}));
  function zg() {
    const t = yc(true), e = t.run(() => ko({}));
    let n = [], r = [];
    const s = Mo({
      install(i) {
        Js(s), s._a = i, i.provide(Au, s), i.config.globalProperties.$pinia = s, r.forEach((o) => n.push(o)), r = [];
      },
      use(i) {
        return !this._a && !Kg ? r.push(i) : n.push(i), this;
      },
      _p: n,
      _a: null,
      _e: t,
      _s: /* @__PURE__ */ new Map(),
      state: e
    });
    return s;
  }
  const Cu = () => {
  };
  function ul(t, e, n, r = Cu) {
    t.push(e);
    const s = () => {
      const i = t.indexOf(e);
      i > -1 && (t.splice(i, 1), r());
    };
    return !n && Tc() && Dh(s), s;
  }
  function Vn(t, ...e) {
    t.slice().forEach((n) => {
      n(...e);
    });
  }
  const Yg = (t) => t(), fl = Symbol(), Ri = Symbol();
  function co(t, e) {
    t instanceof Map && e instanceof Map ? e.forEach((n, r) => t.set(r, n)) : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
    for (const n in e) {
      if (!e.hasOwnProperty(n))
        continue;
      const r = e[n], s = t[n];
      lo(s) && lo(r) && t.hasOwnProperty(n) && !xe(r) && !Sn(r) ? t[n] = co(s, r) : t[n] = r;
    }
    return t;
  }
  const Gg = Symbol();
  function qg(t) {
    return !lo(t) || !t.hasOwnProperty(Gg);
  }
  const { assign: nn } = Object;
  function Xg(t) {
    return !!(xe(t) && t.effect);
  }
  function Jg(t, e, n, r) {
    const { state: s, actions: i, getters: o } = e, c = n.state.value[t];
    let u;
    function h() {
      c || (n.state.value[t] = s ? s() : {});
      const f = np(n.state.value[t]);
      return nn(f, i, Object.keys(o || {}).reduce((g, E) => (g[E] = Mo(ht(() => {
        Js(n);
        const v = n._s.get(t);
        return o[E].call(v, v);
      })), g), {}));
    }
    return u = Su(t, h, e, n, r, true), u;
  }
  function Su(t, e, n = {}, r, s, i) {
    let o;
    const c = nn({
      actions: {}
    }, n), u = {
      deep: true
    };
    let h, f, g = [], E = [], v;
    const R = r.state.value[t];
    !i && !R && (r.state.value[t] = {}), ko({});
    let S;
    function k(Q) {
      let G;
      h = f = false, typeof Q == "function" ? (Q(r.state.value[t]), G = {
        type: Pr.patchFunction,
        storeId: t,
        events: v
      }) : (co(r.state.value[t], Q), G = {
        type: Pr.patchObject,
        payload: Q,
        storeId: t,
        events: v
      });
      const ae = S = Symbol();
      Fo().then(() => {
        S === ae && (h = true);
      }), f = true, Vn(g, G, r.state.value[t]);
    }
    const F = i ? function() {
      const { state: G } = n, ae = G ? G() : {};
      this.$patch((he) => {
        nn(he, ae);
      });
    } : Cu;
    function V() {
      o.stop(), g = [], E = [], r._s.delete(t);
    }
    const j = (Q, G = "") => {
      if (fl in Q)
        return Q[Ri] = G, Q;
      const ae = function() {
        Js(r);
        const he = Array.from(arguments), le = [], oe = [];
        function Ve(ee) {
          le.push(ee);
        }
        function $e(ee) {
          oe.push(ee);
        }
        Vn(E, {
          args: he,
          name: ae[Ri],
          store: z,
          after: Ve,
          onError: $e
        });
        let fe;
        try {
          fe = Q.apply(this && this.$id === t ? this : z, he);
        } catch (ee) {
          throw Vn(oe, ee), ee;
        }
        return fe instanceof Promise ? fe.then((ee) => (Vn(le, ee), ee)).catch((ee) => (Vn(oe, ee), Promise.reject(ee))) : (Vn(le, fe), fe);
      };
      return ae[fl] = true, ae[Ri] = G, ae;
    }, $ = {
      _p: r,
      $id: t,
      $onAction: ul.bind(null, E),
      $patch: k,
      $reset: F,
      $subscribe(Q, G = {}) {
        const ae = ul(g, Q, G.detached, () => he()), he = o.run(() => Or(() => r.state.value[t], (le) => {
          (G.flush === "sync" ? f : h) && Q({
            storeId: t,
            type: Pr.direct,
            events: v
          }, le);
        }, nn({}, u, G)));
        return ae;
      },
      $dispose: V
    }, z = Br($);
    r._s.set(t, z);
    const te = (r._a && r._a.runWithContext || Yg)(() => r._e.run(() => (o = yc()).run(() => e({
      action: j
    }))));
    for (const Q in te) {
      const G = te[Q];
      if (xe(G) && !Xg(G) || Sn(G))
        i || (R && qg(G) && (xe(G) ? G.value = R[Q] : co(G, R[Q])), r.state.value[t][Q] = G);
      else if (typeof G == "function") {
        const ae = j(G, Q);
        te[Q] = ae, c.actions[Q] = G;
      }
    }
    return nn(z, te), nn(_e(z), te), Object.defineProperty(z, "$state", {
      get: () => r.state.value[t],
      set: (Q) => {
        k((G) => {
          nn(G, Q);
        });
      }
    }), r._p.forEach((Q) => {
      nn(z, o.run(() => Q({
        store: z,
        app: r._a,
        pinia: r,
        options: c
      })));
    }), R && i && n.hydrate && n.hydrate(z.$state, R), h = true, f = true, z;
  }
  function Qg(t, e, n) {
    let r, s;
    const i = typeof e == "function";
    typeof t == "string" ? (r = t, s = i ? n : e) : (s = t, r = t.id);
    function o(c, u) {
      const h = Mp();
      return c = c || (h ? It(Au, null) : null), c && Js(c), c = wu, c._s.has(r) || (i ? Su(r, e, s, c) : Jg(r, s, c)), c._s.get(r);
    }
    return o.$id = r, o;
  }
  let Zg, t_, n_, r_, s_, i_, o_, a_;
  Zg = "/wasm-demo/assets/logo-7f7f0eb1.png";
  e_ = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [r, s] of e)
      n[r] = s;
    return n;
  };
  t_ = {};
  n_ = {
    class: "navbar navbar-light bg-light"
  };
  r_ = {
    class: "container-fluid"
  };
  s_ = {
    id: "navbarNav",
    class: "collapse navbar-collapse"
  };
  i_ = {
    class: "navbar-nav"
  };
  o_ = {
    class: "nav-item"
  };
  a_ = {
    class: "nav-item"
  };
  function l_(t, e) {
    const n = ka("router-link"), r = ka("router-view");
    return gu(), sg(xt, null, [
      bt("nav", n_, [
        bt("div", r_, [
          We(n, {
            class: "navbar-brand",
            to: {
              name: "main"
            }
          }, {
            default: bs(() => e[0] || (e[0] = [
              bt("img", {
                src: Zg,
                alt: "Logo",
                width: "120",
                class: "d-inline-block align-text-top"
              }, null, -1)
            ])),
            _: 1
          }),
          e[3] || (e[3] = bt("button", {
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#navbarNav",
            "aria-controls": "navbarNav",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
            class: "navbar-toggler"
          }, [
            bt("span", {
              class: "navbar-toggler-icon"
            })
          ], -1)),
          bt("div", s_, [
            bt("ul", i_, [
              bt("li", o_, [
                We(n, {
                  class: "nav-link",
                  to: {
                    name: "main"
                  }
                }, {
                  default: bs(() => e[1] || (e[1] = [
                    io(" Home ")
                  ])),
                  _: 1
                })
              ]),
              bt("li", a_, [
                We(n, {
                  class: "nav-link",
                  to: {
                    name: "about"
                  }
                }, {
                  default: bs(() => e[2] || (e[2] = [
                    io(" About ")
                  ])),
                  _: 1
                })
              ])
            ])
          ])
        ])
      ]),
      We(r)
    ], 64);
  }
  const c_ = e_(t_, [
    [
      "render",
      l_
    ]
  ]);
  var Qe = "top", ct = "bottom", ut = "right", Ze = "left", Qs = "auto", cr = [
    Qe,
    ct,
    ut,
    Ze
  ], Rn = "start", er = "end", Ou = "clippingParents", Uo = "viewport", Bn = "popper", $u = "reference", uo = cr.reduce(function(t, e) {
    return t.concat([
      e + "-" + Rn,
      e + "-" + er
    ]);
  }, []), Ko = [].concat(cr, [
    Qs
  ]).reduce(function(t, e) {
    return t.concat([
      e,
      e + "-" + Rn,
      e + "-" + er
    ]);
  }, []), Pu = "beforeRead", Nu = "read", Ru = "afterRead", xu = "beforeMain", Du = "main", Iu = "afterMain", Lu = "beforeWrite", Mu = "write", ku = "afterWrite", Fu = [
    Pu,
    Nu,
    Ru,
    xu,
    Du,
    Iu,
    Lu,
    Mu,
    ku
  ];
  function Vt(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function ft(t) {
    if (t == null)
      return window;
    if (t.toString() !== "[object Window]") {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }
    return t;
  }
  function xn(t) {
    var e = ft(t).Element;
    return t instanceof e || t instanceof Element;
  }
  function pt(t) {
    var e = ft(t).HTMLElement;
    return t instanceof e || t instanceof HTMLElement;
  }
  function zo(t) {
    if (typeof ShadowRoot > "u")
      return false;
    var e = ft(t).ShadowRoot;
    return t instanceof e || t instanceof ShadowRoot;
  }
  function u_(t) {
    var e = t.state;
    Object.keys(e.elements).forEach(function(n) {
      var r = e.styles[n] || {}, s = e.attributes[n] || {}, i = e.elements[n];
      !pt(i) || !Vt(i) || (Object.assign(i.style, r), Object.keys(s).forEach(function(o) {
        var c = s[o];
        c === false ? i.removeAttribute(o) : i.setAttribute(o, c === true ? "" : c);
      }));
    });
  }
  function f_(t) {
    var e = t.state, n = {
      popper: {
        position: e.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
      Object.keys(e.elements).forEach(function(r) {
        var s = e.elements[r], i = e.attributes[r] || {}, o = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), c = o.reduce(function(u, h) {
          return u[h] = "", u;
        }, {});
        !pt(s) || !Vt(s) || (Object.assign(s.style, c), Object.keys(i).forEach(function(u) {
          s.removeAttribute(u);
        }));
      });
    };
  }
  const Yo = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: u_,
    effect: f_,
    requires: [
      "computeStyles"
    ]
  };
  function Lt(t) {
    return t.split("-")[0];
  }
  var $n = Math.max, Ms = Math.min, tr = Math.round;
  function fo() {
    var t = navigator.userAgentData;
    return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
      return e.brand + "/" + e.version;
    }).join(" ") : navigator.userAgent;
  }
  function Vu() {
    return !/^((?!chrome|android).)*safari/i.test(fo());
  }
  function nr(t, e, n) {
    e === void 0 && (e = false), n === void 0 && (n = false);
    var r = t.getBoundingClientRect(), s = 1, i = 1;
    e && pt(t) && (s = t.offsetWidth > 0 && tr(r.width) / t.offsetWidth || 1, i = t.offsetHeight > 0 && tr(r.height) / t.offsetHeight || 1);
    var o = xn(t) ? ft(t) : window, c = o.visualViewport, u = !Vu() && n, h = (r.left + (u && c ? c.offsetLeft : 0)) / s, f = (r.top + (u && c ? c.offsetTop : 0)) / i, g = r.width / s, E = r.height / i;
    return {
      width: g,
      height: E,
      top: f,
      right: h + g,
      bottom: f + E,
      left: h,
      x: h,
      y: f
    };
  }
  function Go(t) {
    var e = nr(t), n = t.offsetWidth, r = t.offsetHeight;
    return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: n,
      height: r
    };
  }
  function Hu(t, e) {
    var n = e.getRootNode && e.getRootNode();
    if (t.contains(e))
      return true;
    if (n && zo(n)) {
      var r = e;
      do {
        if (r && t.isSameNode(r))
          return true;
        r = r.parentNode || r.host;
      } while (r);
    }
    return false;
  }
  function Gt(t) {
    return ft(t).getComputedStyle(t);
  }
  function d_(t) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(Vt(t)) >= 0;
  }
  function pn(t) {
    return ((xn(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }
  function Zs(t) {
    return Vt(t) === "html" ? t : t.assignedSlot || t.parentNode || (zo(t) ? t.host : null) || pn(t);
  }
  function dl(t) {
    return !pt(t) || Gt(t).position === "fixed" ? null : t.offsetParent;
  }
  function h_(t) {
    var e = /firefox/i.test(fo()), n = /Trident/i.test(fo());
    if (n && pt(t)) {
      var r = Gt(t);
      if (r.position === "fixed")
        return null;
    }
    var s = Zs(t);
    for (zo(s) && (s = s.host); pt(s) && [
      "html",
      "body"
    ].indexOf(Vt(s)) < 0; ) {
      var i = Gt(s);
      if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none")
        return s;
      s = s.parentNode;
    }
    return null;
  }
  function zr(t) {
    for (var e = ft(t), n = dl(t); n && d_(n) && Gt(n).position === "static"; )
      n = dl(n);
    return n && (Vt(n) === "html" || Vt(n) === "body" && Gt(n).position === "static") ? e : n || h_(t) || e;
  }
  function qo(t) {
    return [
      "top",
      "bottom"
    ].indexOf(t) >= 0 ? "x" : "y";
  }
  function Nr(t, e, n) {
    return $n(t, Ms(e, n));
  }
  function p_(t, e, n) {
    var r = Nr(t, e, n);
    return r > n ? n : r;
  }
  function ju() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function Wu(t) {
    return Object.assign({}, ju(), t);
  }
  function Bu(t, e) {
    return e.reduce(function(n, r) {
      return n[r] = t, n;
    }, {});
  }
  var g_ = function(e, n) {
    return e = typeof e == "function" ? e(Object.assign({}, n.rects, {
      placement: n.placement
    })) : e, Wu(typeof e != "number" ? e : Bu(e, cr));
  };
  function __(t) {
    var e, n = t.state, r = t.name, s = t.options, i = n.elements.arrow, o = n.modifiersData.popperOffsets, c = Lt(n.placement), u = qo(c), h = [
      Ze,
      ut
    ].indexOf(c) >= 0, f = h ? "height" : "width";
    if (!(!i || !o)) {
      var g = g_(s.padding, n), E = Go(i), v = u === "y" ? Qe : Ze, R = u === "y" ? ct : ut, S = n.rects.reference[f] + n.rects.reference[u] - o[u] - n.rects.popper[f], k = o[u] - n.rects.reference[u], F = zr(i), V = F ? u === "y" ? F.clientHeight || 0 : F.clientWidth || 0 : 0, j = S / 2 - k / 2, $ = g[v], z = V - E[f] - g[R], se = V / 2 - E[f] / 2 + j, te = Nr($, se, z), Q = u;
      n.modifiersData[r] = (e = {}, e[Q] = te, e.centerOffset = te - se, e);
    }
  }
  function m_(t) {
    var e = t.state, n = t.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
    s != null && (typeof s == "string" && (s = e.elements.popper.querySelector(s), !s) || Hu(e.elements.popper, s) && (e.elements.arrow = s));
  }
  const Uu = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: __,
    effect: m_,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function rr(t) {
    return t.split("-")[1];
  }
  var v_ = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function E_(t, e) {
    var n = t.x, r = t.y, s = e.devicePixelRatio || 1;
    return {
      x: tr(n * s) / s || 0,
      y: tr(r * s) / s || 0
    };
  }
  function hl(t) {
    var e, n = t.popper, r = t.popperRect, s = t.placement, i = t.variation, o = t.offsets, c = t.position, u = t.gpuAcceleration, h = t.adaptive, f = t.roundOffsets, g = t.isFixed, E = o.x, v = E === void 0 ? 0 : E, R = o.y, S = R === void 0 ? 0 : R, k = typeof f == "function" ? f({
      x: v,
      y: S
    }) : {
      x: v,
      y: S
    };
    v = k.x, S = k.y;
    var F = o.hasOwnProperty("x"), V = o.hasOwnProperty("y"), j = Ze, $ = Qe, z = window;
    if (h) {
      var se = zr(n), te = "clientHeight", Q = "clientWidth";
      if (se === ft(n) && (se = pn(n), Gt(se).position !== "static" && c === "absolute" && (te = "scrollHeight", Q = "scrollWidth")), se = se, s === Qe || (s === Ze || s === ut) && i === er) {
        $ = ct;
        var G = g && se === z && z.visualViewport ? z.visualViewport.height : se[te];
        S -= G - r.height, S *= u ? 1 : -1;
      }
      if (s === Ze || (s === Qe || s === ct) && i === er) {
        j = ut;
        var ae = g && se === z && z.visualViewport ? z.visualViewport.width : se[Q];
        v -= ae - r.width, v *= u ? 1 : -1;
      }
    }
    var he = Object.assign({
      position: c
    }, h && v_), le = f === true ? E_({
      x: v,
      y: S
    }, ft(n)) : {
      x: v,
      y: S
    };
    if (v = le.x, S = le.y, u) {
      var oe;
      return Object.assign({}, he, (oe = {}, oe[$] = V ? "0" : "", oe[j] = F ? "0" : "", oe.transform = (z.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + S + "px)" : "translate3d(" + v + "px, " + S + "px, 0)", oe));
    }
    return Object.assign({}, he, (e = {}, e[$] = V ? S + "px" : "", e[j] = F ? v + "px" : "", e.transform = "", e));
  }
  function b_(t) {
    var e = t.state, n = t.options, r = n.gpuAcceleration, s = r === void 0 ? true : r, i = n.adaptive, o = i === void 0 ? true : i, c = n.roundOffsets, u = c === void 0 ? true : c, h = {
      placement: Lt(e.placement),
      variation: rr(e.placement),
      popper: e.elements.popper,
      popperRect: e.rects.popper,
      gpuAcceleration: s,
      isFixed: e.options.strategy === "fixed"
    };
    e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, hl(Object.assign({}, h, {
      offsets: e.modifiersData.popperOffsets,
      position: e.options.strategy,
      adaptive: o,
      roundOffsets: u
    })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, hl(Object.assign({}, h, {
      offsets: e.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: u
    })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
      "data-popper-placement": e.placement
    });
  }
  const Xo = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: b_,
    data: {}
  };
  var ds = {
    passive: true
  };
  function y_(t) {
    var e = t.state, n = t.instance, r = t.options, s = r.scroll, i = s === void 0 ? true : s, o = r.resize, c = o === void 0 ? true : o, u = ft(e.elements.popper), h = [].concat(e.scrollParents.reference, e.scrollParents.popper);
    return i && h.forEach(function(f) {
      f.addEventListener("scroll", n.update, ds);
    }), c && u.addEventListener("resize", n.update, ds), function() {
      i && h.forEach(function(f) {
        f.removeEventListener("scroll", n.update, ds);
      }), c && u.removeEventListener("resize", n.update, ds);
    };
  }
  const Jo = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: y_,
    data: {}
  };
  var T_ = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function As(t) {
    return t.replace(/left|right|bottom|top/g, function(e) {
      return T_[e];
    });
  }
  var w_ = {
    start: "end",
    end: "start"
  };
  function pl(t) {
    return t.replace(/start|end/g, function(e) {
      return w_[e];
    });
  }
  function Qo(t) {
    var e = ft(t), n = e.pageXOffset, r = e.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: r
    };
  }
  function Zo(t) {
    return nr(pn(t)).left + Qo(t).scrollLeft;
  }
  function A_(t, e) {
    var n = ft(t), r = pn(t), s = n.visualViewport, i = r.clientWidth, o = r.clientHeight, c = 0, u = 0;
    if (s) {
      i = s.width, o = s.height;
      var h = Vu();
      (h || !h && e === "fixed") && (c = s.offsetLeft, u = s.offsetTop);
    }
    return {
      width: i,
      height: o,
      x: c + Zo(t),
      y: u
    };
  }
  function C_(t) {
    var e, n = pn(t), r = Qo(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, i = $n(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), o = $n(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + Zo(t), u = -r.scrollTop;
    return Gt(s || n).direction === "rtl" && (c += $n(n.clientWidth, s ? s.clientWidth : 0) - i), {
      width: i,
      height: o,
      x: c,
      y: u
    };
  }
  function ea(t) {
    var e = Gt(t), n = e.overflow, r = e.overflowX, s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + s + r);
  }
  function Ku(t) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(Vt(t)) >= 0 ? t.ownerDocument.body : pt(t) && ea(t) ? t : Ku(Zs(t));
  }
  function Rr(t, e) {
    var n;
    e === void 0 && (e = []);
    var r = Ku(t), s = r === ((n = t.ownerDocument) == null ? void 0 : n.body), i = ft(r), o = s ? [
      i
    ].concat(i.visualViewport || [], ea(r) ? r : []) : r, c = e.concat(o);
    return s ? c : c.concat(Rr(Zs(o)));
  }
  function ho(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }
  function S_(t, e) {
    var n = nr(t, false, e === "fixed");
    return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function gl(t, e, n) {
    return e === Uo ? ho(A_(t, n)) : xn(e) ? S_(e, n) : ho(C_(pn(t)));
  }
  function O_(t) {
    var e = Rr(Zs(t)), n = [
      "absolute",
      "fixed"
    ].indexOf(Gt(t).position) >= 0, r = n && pt(t) ? zr(t) : t;
    return xn(r) ? e.filter(function(s) {
      return xn(s) && Hu(s, r) && Vt(s) !== "body";
    }) : [];
  }
  function $_(t, e, n, r) {
    var s = e === "clippingParents" ? O_(t) : [].concat(e), i = [].concat(s, [
      n
    ]), o = i[0], c = i.reduce(function(u, h) {
      var f = gl(t, h, r);
      return u.top = $n(f.top, u.top), u.right = Ms(f.right, u.right), u.bottom = Ms(f.bottom, u.bottom), u.left = $n(f.left, u.left), u;
    }, gl(t, o, r));
    return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
  }
  function zu(t) {
    var e = t.reference, n = t.element, r = t.placement, s = r ? Lt(r) : null, i = r ? rr(r) : null, o = e.x + e.width / 2 - n.width / 2, c = e.y + e.height / 2 - n.height / 2, u;
    switch (s) {
      case Qe:
        u = {
          x: o,
          y: e.y - n.height
        };
        break;
      case ct:
        u = {
          x: o,
          y: e.y + e.height
        };
        break;
      case ut:
        u = {
          x: e.x + e.width,
          y: c
        };
        break;
      case Ze:
        u = {
          x: e.x - n.width,
          y: c
        };
        break;
      default:
        u = {
          x: e.x,
          y: e.y
        };
    }
    var h = s ? qo(s) : null;
    if (h != null) {
      var f = h === "y" ? "height" : "width";
      switch (i) {
        case Rn:
          u[h] = u[h] - (e[f] / 2 - n[f] / 2);
          break;
        case er:
          u[h] = u[h] + (e[f] / 2 - n[f] / 2);
          break;
      }
    }
    return u;
  }
  function sr(t, e) {
    e === void 0 && (e = {});
    var n = e, r = n.placement, s = r === void 0 ? t.placement : r, i = n.strategy, o = i === void 0 ? t.strategy : i, c = n.boundary, u = c === void 0 ? Ou : c, h = n.rootBoundary, f = h === void 0 ? Uo : h, g = n.elementContext, E = g === void 0 ? Bn : g, v = n.altBoundary, R = v === void 0 ? false : v, S = n.padding, k = S === void 0 ? 0 : S, F = Wu(typeof k != "number" ? k : Bu(k, cr)), V = E === Bn ? $u : Bn, j = t.rects.popper, $ = t.elements[R ? V : E], z = $_(xn($) ? $ : $.contextElement || pn(t.elements.popper), u, f, o), se = nr(t.elements.reference), te = zu({
      reference: se,
      element: j,
      strategy: "absolute",
      placement: s
    }), Q = ho(Object.assign({}, j, te)), G = E === Bn ? Q : se, ae = {
      top: z.top - G.top + F.top,
      bottom: G.bottom - z.bottom + F.bottom,
      left: z.left - G.left + F.left,
      right: G.right - z.right + F.right
    }, he = t.modifiersData.offset;
    if (E === Bn && he) {
      var le = he[s];
      Object.keys(ae).forEach(function(oe) {
        var Ve = [
          ut,
          ct
        ].indexOf(oe) >= 0 ? 1 : -1, $e = [
          Qe,
          ct
        ].indexOf(oe) >= 0 ? "y" : "x";
        ae[oe] += le[$e] * Ve;
      });
    }
    return ae;
  }
  function P_(t, e) {
    e === void 0 && (e = {});
    var n = e, r = n.placement, s = n.boundary, i = n.rootBoundary, o = n.padding, c = n.flipVariations, u = n.allowedAutoPlacements, h = u === void 0 ? Ko : u, f = rr(r), g = f ? c ? uo : uo.filter(function(R) {
      return rr(R) === f;
    }) : cr, E = g.filter(function(R) {
      return h.indexOf(R) >= 0;
    });
    E.length === 0 && (E = g);
    var v = E.reduce(function(R, S) {
      return R[S] = sr(t, {
        placement: S,
        boundary: s,
        rootBoundary: i,
        padding: o
      })[Lt(S)], R;
    }, {});
    return Object.keys(v).sort(function(R, S) {
      return v[R] - v[S];
    });
  }
  function N_(t) {
    if (Lt(t) === Qs)
      return [];
    var e = As(t);
    return [
      pl(t),
      e,
      pl(e)
    ];
  }
  function R_(t) {
    var e = t.state, n = t.options, r = t.name;
    if (!e.modifiersData[r]._skip) {
      for (var s = n.mainAxis, i = s === void 0 ? true : s, o = n.altAxis, c = o === void 0 ? true : o, u = n.fallbackPlacements, h = n.padding, f = n.boundary, g = n.rootBoundary, E = n.altBoundary, v = n.flipVariations, R = v === void 0 ? true : v, S = n.allowedAutoPlacements, k = e.options.placement, F = Lt(k), V = F === k, j = u || (V || !R ? [
        As(k)
      ] : N_(k)), $ = [
        k
      ].concat(j).reduce(function(Re, Ie) {
        return Re.concat(Lt(Ie) === Qs ? P_(e, {
          placement: Ie,
          boundary: f,
          rootBoundary: g,
          padding: h,
          flipVariations: R,
          allowedAutoPlacements: S
        }) : Ie);
      }, []), z = e.rects.reference, se = e.rects.popper, te = /* @__PURE__ */ new Map(), Q = true, G = $[0], ae = 0; ae < $.length; ae++) {
        var he = $[ae], le = Lt(he), oe = rr(he) === Rn, Ve = [
          Qe,
          ct
        ].indexOf(le) >= 0, $e = Ve ? "width" : "height", fe = sr(e, {
          placement: he,
          boundary: f,
          rootBoundary: g,
          altBoundary: E,
          padding: h
        }), ee = Ve ? oe ? ut : Ze : oe ? ct : Qe;
        z[$e] > se[$e] && (ee = As(ee));
        var de = As(ee), Pe = [];
        if (i && Pe.push(fe[le] <= 0), c && Pe.push(fe[ee] <= 0, fe[de] <= 0), Pe.every(function(Re) {
          return Re;
        })) {
          G = he, Q = false;
          break;
        }
        te.set(he, Pe);
      }
      if (Q)
        for (var Be = R ? 3 : 1, Ue = function(Ie) {
          var De = $.find(function(C) {
            var W = te.get(C);
            if (W)
              return W.slice(0, Ie).every(function(H) {
                return H;
              });
          });
          if (De)
            return G = De, "break";
        }, Ne = Be; Ne > 0; Ne--) {
          var st = Ue(Ne);
          if (st === "break")
            break;
        }
      e.placement !== G && (e.modifiersData[r]._skip = true, e.placement = G, e.reset = true);
    }
  }
  const Yu = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: R_,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function _l(t, e, n) {
    return n === void 0 && (n = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - n.y,
      right: t.right - e.width + n.x,
      bottom: t.bottom - e.height + n.y,
      left: t.left - e.width - n.x
    };
  }
  function ml(t) {
    return [
      Qe,
      ut,
      ct,
      Ze
    ].some(function(e) {
      return t[e] >= 0;
    });
  }
  function x_(t) {
    var e = t.state, n = t.name, r = e.rects.reference, s = e.rects.popper, i = e.modifiersData.preventOverflow, o = sr(e, {
      elementContext: "reference"
    }), c = sr(e, {
      altBoundary: true
    }), u = _l(o, r), h = _l(c, s, i), f = ml(u), g = ml(h);
    e.modifiersData[n] = {
      referenceClippingOffsets: u,
      popperEscapeOffsets: h,
      isReferenceHidden: f,
      hasPopperEscaped: g
    }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
      "data-popper-reference-hidden": f,
      "data-popper-escaped": g
    });
  }
  const Gu = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: x_
  };
  function D_(t, e, n) {
    var r = Lt(t), s = [
      Ze,
      Qe
    ].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, e, {
      placement: t
    })) : n, o = i[0], c = i[1];
    return o = o || 0, c = (c || 0) * s, [
      Ze,
      ut
    ].indexOf(r) >= 0 ? {
      x: c,
      y: o
    } : {
      x: o,
      y: c
    };
  }
  function I_(t) {
    var e = t.state, n = t.options, r = t.name, s = n.offset, i = s === void 0 ? [
      0,
      0
    ] : s, o = Ko.reduce(function(f, g) {
      return f[g] = D_(g, e.rects, i), f;
    }, {}), c = o[e.placement], u = c.x, h = c.y;
    e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += u, e.modifiersData.popperOffsets.y += h), e.modifiersData[r] = o;
  }
  const qu = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: I_
  };
  function L_(t) {
    var e = t.state, n = t.name;
    e.modifiersData[n] = zu({
      reference: e.rects.reference,
      element: e.rects.popper,
      strategy: "absolute",
      placement: e.placement
    });
  }
  const ta = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: L_,
    data: {}
  };
  function M_(t) {
    return t === "x" ? "y" : "x";
  }
  function k_(t) {
    var e = t.state, n = t.options, r = t.name, s = n.mainAxis, i = s === void 0 ? true : s, o = n.altAxis, c = o === void 0 ? false : o, u = n.boundary, h = n.rootBoundary, f = n.altBoundary, g = n.padding, E = n.tether, v = E === void 0 ? true : E, R = n.tetherOffset, S = R === void 0 ? 0 : R, k = sr(e, {
      boundary: u,
      rootBoundary: h,
      padding: g,
      altBoundary: f
    }), F = Lt(e.placement), V = rr(e.placement), j = !V, $ = qo(F), z = M_($), se = e.modifiersData.popperOffsets, te = e.rects.reference, Q = e.rects.popper, G = typeof S == "function" ? S(Object.assign({}, e.rects, {
      placement: e.placement
    })) : S, ae = typeof G == "number" ? {
      mainAxis: G,
      altAxis: G
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, G), he = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, le = {
      x: 0,
      y: 0
    };
    if (se) {
      if (i) {
        var oe, Ve = $ === "y" ? Qe : Ze, $e = $ === "y" ? ct : ut, fe = $ === "y" ? "height" : "width", ee = se[$], de = ee + k[Ve], Pe = ee - k[$e], Be = v ? -Q[fe] / 2 : 0, Ue = V === Rn ? te[fe] : Q[fe], Ne = V === Rn ? -Q[fe] : -te[fe], st = e.elements.arrow, Re = v && st ? Go(st) : {
          width: 0,
          height: 0
        }, Ie = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : ju(), De = Ie[Ve], C = Ie[$e], W = Nr(0, te[fe], Re[fe]), H = j ? te[fe] / 2 - Be - W - De - ae.mainAxis : Ue - W - De - ae.mainAxis, J = j ? -te[fe] / 2 + Be + W + C + ae.mainAxis : Ne + W + C + ae.mainAxis, pe = e.elements.arrow && zr(e.elements.arrow), ye = pe ? $ === "y" ? pe.clientTop || 0 : pe.clientLeft || 0 : 0, p = (oe = he?.[$]) != null ? oe : 0, _ = ee + H - p - ye, y = ee + J - p, O = Nr(v ? Ms(de, _) : de, ee, v ? $n(Pe, y) : Pe);
        se[$] = O, le[$] = O - ee;
      }
      if (c) {
        var A, x = $ === "x" ? Qe : Ze, B = $ === "x" ? ct : ut, L = se[z], M = z === "y" ? "height" : "width", D = L + k[x], Z = L - k[B], U = [
          Qe,
          Ze
        ].indexOf(F) !== -1, q = (A = he?.[z]) != null ? A : 0, ne = U ? D : L - te[M] - Q[M] - q + ae.altAxis, K = U ? L + te[M] + Q[M] - q - ae.altAxis : Z, me = v && U ? p_(ne, L, K) : Nr(v ? ne : D, L, v ? K : Z);
        se[z] = me, le[z] = me - L;
      }
      e.modifiersData[r] = le;
    }
  }
  const Xu = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: k_,
    requiresIfExists: [
      "offset"
    ]
  };
  function F_(t) {
    return {
      scrollLeft: t.scrollLeft,
      scrollTop: t.scrollTop
    };
  }
  function V_(t) {
    return t === ft(t) || !pt(t) ? Qo(t) : F_(t);
  }
  function H_(t) {
    var e = t.getBoundingClientRect(), n = tr(e.width) / t.offsetWidth || 1, r = tr(e.height) / t.offsetHeight || 1;
    return n !== 1 || r !== 1;
  }
  function j_(t, e, n) {
    n === void 0 && (n = false);
    var r = pt(e), s = pt(e) && H_(e), i = pn(e), o = nr(t, s, n), c = {
      scrollLeft: 0,
      scrollTop: 0
    }, u = {
      x: 0,
      y: 0
    };
    return (r || !r && !n) && ((Vt(e) !== "body" || ea(i)) && (c = V_(e)), pt(e) ? (u = nr(e, true), u.x += e.clientLeft, u.y += e.clientTop) : i && (u.x = Zo(i))), {
      x: o.left + c.scrollLeft - u.x,
      y: o.top + c.scrollTop - u.y,
      width: o.width,
      height: o.height
    };
  }
  function W_(t) {
    var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
    t.forEach(function(i) {
      e.set(i.name, i);
    });
    function s(i) {
      n.add(i.name);
      var o = [].concat(i.requires || [], i.requiresIfExists || []);
      o.forEach(function(c) {
        if (!n.has(c)) {
          var u = e.get(c);
          u && s(u);
        }
      }), r.push(i);
    }
    return t.forEach(function(i) {
      n.has(i.name) || s(i);
    }), r;
  }
  function B_(t) {
    var e = W_(t);
    return Fu.reduce(function(n, r) {
      return n.concat(e.filter(function(s) {
        return s.phase === r;
      }));
    }, []);
  }
  function U_(t) {
    var e;
    return function() {
      return e || (e = new Promise(function(n) {
        Promise.resolve().then(function() {
          e = void 0, n(t());
        });
      })), e;
    };
  }
  function K_(t) {
    var e = t.reduce(function(n, r) {
      var s = n[r.name];
      return n[r.name] = s ? Object.assign({}, s, r, {
        options: Object.assign({}, s.options, r.options),
        data: Object.assign({}, s.data, r.data)
      }) : r, n;
    }, {});
    return Object.keys(e).map(function(n) {
      return e[n];
    });
  }
  var vl = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function El() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    return !e.some(function(r) {
      return !(r && typeof r.getBoundingClientRect == "function");
    });
  }
  function ei(t) {
    t === void 0 && (t = {});
    var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, s = e.defaultOptions, i = s === void 0 ? vl : s;
    return function(c, u, h) {
      h === void 0 && (h = i);
      var f = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, vl, i),
        modifiersData: {},
        elements: {
          reference: c,
          popper: u
        },
        attributes: {},
        styles: {}
      }, g = [], E = false, v = {
        state: f,
        setOptions: function(F) {
          var V = typeof F == "function" ? F(f.options) : F;
          S(), f.options = Object.assign({}, i, f.options, V), f.scrollParents = {
            reference: xn(c) ? Rr(c) : c.contextElement ? Rr(c.contextElement) : [],
            popper: Rr(u)
          };
          var j = B_(K_([].concat(r, f.options.modifiers)));
          return f.orderedModifiers = j.filter(function($) {
            return $.enabled;
          }), R(), v.update();
        },
        forceUpdate: function() {
          if (!E) {
            var F = f.elements, V = F.reference, j = F.popper;
            if (El(V, j)) {
              f.rects = {
                reference: j_(V, zr(j), f.options.strategy === "fixed"),
                popper: Go(j)
              }, f.reset = false, f.placement = f.options.placement, f.orderedModifiers.forEach(function(ae) {
                return f.modifiersData[ae.name] = Object.assign({}, ae.data);
              });
              for (var $ = 0; $ < f.orderedModifiers.length; $++) {
                if (f.reset === true) {
                  f.reset = false, $ = -1;
                  continue;
                }
                var z = f.orderedModifiers[$], se = z.fn, te = z.options, Q = te === void 0 ? {} : te, G = z.name;
                typeof se == "function" && (f = se({
                  state: f,
                  options: Q,
                  name: G,
                  instance: v
                }) || f);
              }
            }
          }
        },
        update: U_(function() {
          return new Promise(function(k) {
            v.forceUpdate(), k(f);
          });
        }),
        destroy: function() {
          S(), E = true;
        }
      };
      if (!El(c, u))
        return v;
      v.setOptions(h).then(function(k) {
        !E && h.onFirstUpdate && h.onFirstUpdate(k);
      });
      function R() {
        f.orderedModifiers.forEach(function(k) {
          var F = k.name, V = k.options, j = V === void 0 ? {} : V, $ = k.effect;
          if (typeof $ == "function") {
            var z = $({
              state: f,
              name: F,
              instance: v,
              options: j
            }), se = function() {
            };
            g.push(z || se);
          }
        });
      }
      function S() {
        g.forEach(function(k) {
          return k();
        }), g = [];
      }
      return v;
    };
  }
  var z_ = ei(), Y_ = [
    Jo,
    ta,
    Xo,
    Yo
  ], G_ = ei({
    defaultModifiers: Y_
  }), q_ = [
    Jo,
    ta,
    Xo,
    Yo,
    qu,
    Yu,
    Xu,
    Uu,
    Gu
  ], na = ei({
    defaultModifiers: q_
  });
  const Ju = Object.freeze(Object.defineProperty({
    __proto__: null,
    afterMain: Iu,
    afterRead: Ru,
    afterWrite: ku,
    applyStyles: Yo,
    arrow: Uu,
    auto: Qs,
    basePlacements: cr,
    beforeMain: xu,
    beforeRead: Pu,
    beforeWrite: Lu,
    bottom: ct,
    clippingParents: Ou,
    computeStyles: Xo,
    createPopper: na,
    createPopperBase: z_,
    createPopperLite: G_,
    detectOverflow: sr,
    end: er,
    eventListeners: Jo,
    flip: Yu,
    hide: Gu,
    left: Ze,
    main: Du,
    modifierPhases: Fu,
    offset: qu,
    placements: Ko,
    popper: Bn,
    popperGenerator: ei,
    popperOffsets: ta,
    preventOverflow: Xu,
    read: Nu,
    reference: $u,
    right: ut,
    start: Rn,
    top: Qe,
    variationPlacements: uo,
    viewport: Uo,
    write: Mu
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const en = /* @__PURE__ */ new Map(), xi = {
    set(t, e, n) {
      en.has(t) || en.set(t, /* @__PURE__ */ new Map());
      const r = en.get(t);
      if (!r.has(e) && r.size !== 0) {
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);
        return;
      }
      r.set(e, n);
    },
    get(t, e) {
      return en.has(t) && en.get(t).get(e) || null;
    },
    remove(t, e) {
      if (!en.has(t))
        return;
      const n = en.get(t);
      n.delete(e), n.size === 0 && en.delete(t);
    }
  }, X_ = 1e6, J_ = 1e3, po = "transitionend", Qu = (t) => (t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, (e, n) => `#${CSS.escape(n)}`)), t), Q_ = (t) => t == null ? `${t}` : Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(), Z_ = (t) => {
    do
      t += Math.floor(Math.random() * X_);
    while (document.getElementById(t));
    return t;
  }, em = (t) => {
    if (!t)
      return 0;
    let { transitionDuration: e, transitionDelay: n } = window.getComputedStyle(t);
    const r = Number.parseFloat(e), s = Number.parseFloat(n);
    return !r && !s ? 0 : (e = e.split(",")[0], n = n.split(",")[0], (Number.parseFloat(e) + Number.parseFloat(n)) * J_);
  }, Zu = (t) => {
    t.dispatchEvent(new Event(po));
  }, zt = (t) => !t || typeof t != "object" ? false : (typeof t.jquery < "u" && (t = t[0]), typeof t.nodeType < "u"), cn = (t) => zt(t) ? t.jquery ? t[0] : t : typeof t == "string" && t.length > 0 ? document.querySelector(Qu(t)) : null, ur = (t) => {
    if (!zt(t) || t.getClientRects().length === 0)
      return false;
    const e = getComputedStyle(t).getPropertyValue("visibility") === "visible", n = t.closest("details:not([open])");
    if (!n)
      return e;
    if (n !== t) {
      const r = t.closest("summary");
      if (r && r.parentNode !== n || r === null)
        return false;
    }
    return e;
  }, un = (t) => !t || t.nodeType !== Node.ELEMENT_NODE || t.classList.contains("disabled") ? true : typeof t.disabled < "u" ? t.disabled : t.hasAttribute("disabled") && t.getAttribute("disabled") !== "false", ef = (t) => {
    if (!document.documentElement.attachShadow)
      return null;
    if (typeof t.getRootNode == "function") {
      const e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }
    return t instanceof ShadowRoot ? t : t.parentNode ? ef(t.parentNode) : null;
  }, ks = () => {
  }, Yr = (t) => {
    t.offsetHeight;
  }, tf = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Di = [], tm = (t) => {
    document.readyState === "loading" ? (Di.length || document.addEventListener("DOMContentLoaded", () => {
      for (const e of Di)
        e();
    }), Di.push(t)) : t();
  }, _t = () => document.documentElement.dir === "rtl", vt = (t) => {
    tm(() => {
      const e = tf();
      if (e) {
        const n = t.NAME, r = e.fn[n];
        e.fn[n] = t.jQueryInterface, e.fn[n].Constructor = t, e.fn[n].noConflict = () => (e.fn[n] = r, t.jQueryInterface);
      }
    });
  }, nt = (t, e = [], n = t) => typeof t == "function" ? t(...e) : n, nf = (t, e, n = true) => {
    if (!n) {
      nt(t);
      return;
    }
    const r = 5, s = em(e) + r;
    let i = false;
    const o = ({ target: c }) => {
      c === e && (i = true, e.removeEventListener(po, o), nt(t));
    };
    e.addEventListener(po, o), setTimeout(() => {
      i || Zu(e);
    }, s);
  }, ra = (t, e, n, r) => {
    const s = t.length;
    let i = t.indexOf(e);
    return i === -1 ? !n && r ? t[s - 1] : t[0] : (i += n ? 1 : -1, r && (i = (i + s) % s), t[Math.max(0, Math.min(i, s - 1))]);
  }, nm = /[^.]*(?=\..*)\.|.*/, rm = /\..*/, sm = /::\d+$/, Ii = {};
  let bl = 1;
  const rf = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, im = /* @__PURE__ */ new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll"
  ]);
  function sf(t, e) {
    return e && `${e}::${bl++}` || t.uidEvent || bl++;
  }
  function of(t) {
    const e = sf(t);
    return t.uidEvent = e, Ii[e] = Ii[e] || {}, Ii[e];
  }
  function om(t, e) {
    return function n(r) {
      return sa(r, {
        delegateTarget: t
      }), n.oneOff && N.off(t, r.type, e), e.apply(t, [
        r
      ]);
    };
  }
  function am(t, e, n) {
    return function r(s) {
      const i = t.querySelectorAll(e);
      for (let { target: o } = s; o && o !== this; o = o.parentNode)
        for (const c of i)
          if (c === o)
            return sa(s, {
              delegateTarget: o
            }), r.oneOff && N.off(t, s.type, e, n), n.apply(o, [
              s
            ]);
    };
  }
  function af(t, e, n = null) {
    return Object.values(t).find((r) => r.callable === e && r.delegationSelector === n);
  }
  function lf(t, e, n) {
    const r = typeof e == "string", s = r ? n : e || n;
    let i = cf(t);
    return im.has(i) || (i = t), [
      r,
      s,
      i
    ];
  }
  function yl(t, e, n, r, s) {
    if (typeof e != "string" || !t)
      return;
    let [i, o, c] = lf(e, n, r);
    e in rf && (o = ((R) => function(S) {
      if (!S.relatedTarget || S.relatedTarget !== S.delegateTarget && !S.delegateTarget.contains(S.relatedTarget))
        return R.call(this, S);
    })(o));
    const u = of(t), h = u[c] || (u[c] = {}), f = af(h, o, i ? n : null);
    if (f) {
      f.oneOff = f.oneOff && s;
      return;
    }
    const g = sf(o, e.replace(nm, "")), E = i ? am(t, n, o) : om(t, o);
    E.delegationSelector = i ? n : null, E.callable = o, E.oneOff = s, E.uidEvent = g, h[g] = E, t.addEventListener(c, E, i);
  }
  function go(t, e, n, r, s) {
    const i = af(e[n], r, s);
    i && (t.removeEventListener(n, i, !!s), delete e[n][i.uidEvent]);
  }
  function lm(t, e, n, r) {
    const s = e[n] || {};
    for (const [i, o] of Object.entries(s))
      i.includes(r) && go(t, e, n, o.callable, o.delegationSelector);
  }
  function cf(t) {
    return t = t.replace(rm, ""), rf[t] || t;
  }
  const N = {
    on(t, e, n, r) {
      yl(t, e, n, r, false);
    },
    one(t, e, n, r) {
      yl(t, e, n, r, true);
    },
    off(t, e, n, r) {
      if (typeof e != "string" || !t)
        return;
      const [s, i, o] = lf(e, n, r), c = o !== e, u = of(t), h = u[o] || {}, f = e.startsWith(".");
      if (typeof i < "u") {
        if (!Object.keys(h).length)
          return;
        go(t, u, o, i, s ? n : null);
        return;
      }
      if (f)
        for (const g of Object.keys(u))
          lm(t, u, g, e.slice(1));
      for (const [g, E] of Object.entries(h)) {
        const v = g.replace(sm, "");
        (!c || e.includes(v)) && go(t, u, o, E.callable, E.delegationSelector);
      }
    },
    trigger(t, e, n) {
      if (typeof e != "string" || !t)
        return null;
      const r = tf(), s = cf(e), i = e !== s;
      let o = null, c = true, u = true, h = false;
      i && r && (o = r.Event(e, n), r(t).trigger(o), c = !o.isPropagationStopped(), u = !o.isImmediatePropagationStopped(), h = o.isDefaultPrevented());
      const f = sa(new Event(e, {
        bubbles: c,
        cancelable: true
      }), n);
      return h && f.preventDefault(), u && t.dispatchEvent(f), f.defaultPrevented && o && o.preventDefault(), f;
    }
  };
  function sa(t, e = {}) {
    for (const [n, r] of Object.entries(e))
      try {
        t[n] = r;
      } catch {
        Object.defineProperty(t, n, {
          configurable: true,
          get() {
            return r;
          }
        });
      }
    return t;
  }
  function Tl(t) {
    if (t === "true")
      return true;
    if (t === "false")
      return false;
    if (t === Number(t).toString())
      return Number(t);
    if (t === "" || t === "null")
      return null;
    if (typeof t != "string")
      return t;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch {
      return t;
    }
  }
  function Li(t) {
    return t.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
  }
  const Yt = {
    setDataAttribute(t, e, n) {
      t.setAttribute(`data-bs-${Li(e)}`, n);
    },
    removeDataAttribute(t, e) {
      t.removeAttribute(`data-bs-${Li(e)}`);
    },
    getDataAttributes(t) {
      if (!t)
        return {};
      const e = {}, n = Object.keys(t.dataset).filter((r) => r.startsWith("bs") && !r.startsWith("bsConfig"));
      for (const r of n) {
        let s = r.replace(/^bs/, "");
        s = s.charAt(0).toLowerCase() + s.slice(1, s.length), e[s] = Tl(t.dataset[r]);
      }
      return e;
    },
    getDataAttribute(t, e) {
      return Tl(t.getAttribute(`data-bs-${Li(e)}`));
    }
  };
  class Gr {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(e) {
      return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
    }
    _configAfterMerge(e) {
      return e;
    }
    _mergeConfigObj(e, n) {
      const r = zt(n) ? Yt.getDataAttribute(n, "config") : {};
      return {
        ...this.constructor.Default,
        ...typeof r == "object" ? r : {},
        ...zt(n) ? Yt.getDataAttributes(n) : {},
        ...typeof e == "object" ? e : {}
      };
    }
    _typeCheckConfig(e, n = this.constructor.DefaultType) {
      for (const [r, s] of Object.entries(n)) {
        const i = e[r], o = zt(i) ? "element" : Q_(i);
        if (!new RegExp(s).test(o))
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${s}".`);
      }
    }
  }
  const cm = "5.3.3";
  class St extends Gr {
    constructor(e, n) {
      super(), e = cn(e), e && (this._element = e, this._config = this._getConfig(n), xi.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      xi.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
      for (const e of Object.getOwnPropertyNames(this))
        this[e] = null;
    }
    _queueCallback(e, n, r = true) {
      nf(e, n, r);
    }
    _getConfig(e) {
      return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
    }
    static getInstance(e) {
      return xi.get(cn(e), this.DATA_KEY);
    }
    static getOrCreateInstance(e, n = {}) {
      return this.getInstance(e) || new this(e, typeof n == "object" ? n : null);
    }
    static get VERSION() {
      return cm;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(e) {
      return `${e}${this.EVENT_KEY}`;
    }
  }
  const Mi = (t) => {
    let e = t.getAttribute("data-bs-target");
    if (!e || e === "#") {
      let n = t.getAttribute("href");
      if (!n || !n.includes("#") && !n.startsWith("."))
        return null;
      n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), e = n && n !== "#" ? n.trim() : null;
    }
    return e ? e.split(",").map((n) => Qu(n)).join(",") : null;
  }, re = {
    find(t, e = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(e, t));
    },
    findOne(t, e = document.documentElement) {
      return Element.prototype.querySelector.call(e, t);
    },
    children(t, e) {
      return [].concat(...t.children).filter((n) => n.matches(e));
    },
    parents(t, e) {
      const n = [];
      let r = t.parentNode.closest(e);
      for (; r; )
        n.push(r), r = r.parentNode.closest(e);
      return n;
    },
    prev(t, e) {
      let n = t.previousElementSibling;
      for (; n; ) {
        if (n.matches(e))
          return [
            n
          ];
        n = n.previousElementSibling;
      }
      return [];
    },
    next(t, e) {
      let n = t.nextElementSibling;
      for (; n; ) {
        if (n.matches(e))
          return [
            n
          ];
        n = n.nextElementSibling;
      }
      return [];
    },
    focusableChildren(t) {
      const e = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "details",
        "[tabindex]",
        '[contenteditable="true"]'
      ].map((n) => `${n}:not([tabindex^="-"])`).join(",");
      return this.find(e, t).filter((n) => !un(n) && ur(n));
    },
    getSelectorFromElement(t) {
      const e = Mi(t);
      return e && re.findOne(e) ? e : null;
    },
    getElementFromSelector(t) {
      const e = Mi(t);
      return e ? re.findOne(e) : null;
    },
    getMultipleElementsFromSelector(t) {
      const e = Mi(t);
      return e ? re.find(e) : [];
    }
  }, ti = (t, e = "hide") => {
    const n = `click.dismiss${t.EVENT_KEY}`, r = t.NAME;
    N.on(document, n, `[data-bs-dismiss="${r}"]`, function(s) {
      if ([
        "A",
        "AREA"
      ].includes(this.tagName) && s.preventDefault(), un(this))
        return;
      const i = re.getElementFromSelector(this) || this.closest(`.${r}`);
      t.getOrCreateInstance(i)[e]();
    });
  }, um = "alert", fm = "bs.alert", uf = `.${fm}`, dm = `close${uf}`, hm = `closed${uf}`, pm = "fade", gm = "show";
  class ni extends St {
    static get NAME() {
      return um;
    }
    close() {
      if (N.trigger(this._element, dm).defaultPrevented)
        return;
      this._element.classList.remove(gm);
      const n = this._element.classList.contains(pm);
      this._queueCallback(() => this._destroyElement(), this._element, n);
    }
    _destroyElement() {
      this._element.remove(), N.trigger(this._element, hm), this.dispose();
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = ni.getOrCreateInstance(this);
        if (typeof e == "string") {
          if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
            throw new TypeError(`No method named "${e}"`);
          n[e](this);
        }
      });
    }
  }
  ti(ni, "close");
  vt(ni);
  const _m = "button", mm = "bs.button", vm = `.${mm}`, Em = ".data-api", bm = "active", wl = '[data-bs-toggle="button"]', ym = `click${vm}${Em}`;
  class ri extends St {
    static get NAME() {
      return _m;
    }
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle(bm));
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = ri.getOrCreateInstance(this);
        e === "toggle" && n[e]();
      });
    }
  }
  N.on(document, ym, wl, (t) => {
    t.preventDefault();
    const e = t.target.closest(wl);
    ri.getOrCreateInstance(e).toggle();
  });
  vt(ri);
  const Tm = "swipe", fr = ".bs.swipe", wm = `touchstart${fr}`, Am = `touchmove${fr}`, Cm = `touchend${fr}`, Sm = `pointerdown${fr}`, Om = `pointerup${fr}`, $m = "touch", Pm = "pen", Nm = "pointer-event", Rm = 40, xm = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  }, Dm = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };
  class Fs extends Gr {
    constructor(e, n) {
      super(), this._element = e, !(!e || !Fs.isSupported()) && (this._config = this._getConfig(n), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
    }
    static get Default() {
      return xm;
    }
    static get DefaultType() {
      return Dm;
    }
    static get NAME() {
      return Tm;
    }
    dispose() {
      N.off(this._element, fr);
    }
    _start(e) {
      if (!this._supportPointerEvents) {
        this._deltaX = e.touches[0].clientX;
        return;
      }
      this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX);
    }
    _end(e) {
      this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), nt(this._config.endCallback);
    }
    _move(e) {
      this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const e = Math.abs(this._deltaX);
      if (e <= Rm)
        return;
      const n = e / this._deltaX;
      this._deltaX = 0, n && nt(n > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents ? (N.on(this._element, Sm, (e) => this._start(e)), N.on(this._element, Om, (e) => this._end(e)), this._element.classList.add(Nm)) : (N.on(this._element, wm, (e) => this._start(e)), N.on(this._element, Am, (e) => this._move(e)), N.on(this._element, Cm, (e) => this._end(e)));
    }
    _eventIsPointerPenTouch(e) {
      return this._supportPointerEvents && (e.pointerType === Pm || e.pointerType === $m);
    }
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  }
  const Im = "carousel", Lm = "bs.carousel", gn = `.${Lm}`, ff = ".data-api", Mm = "ArrowLeft", km = "ArrowRight", Fm = 500, vr = "next", Hn = "prev", Un = "left", Cs = "right", Vm = `slide${gn}`, ki = `slid${gn}`, Hm = `keydown${gn}`, jm = `mouseenter${gn}`, Wm = `mouseleave${gn}`, Bm = `dragstart${gn}`, Um = `load${gn}${ff}`, Km = `click${gn}${ff}`, df = "carousel", hs = "active", zm = "slide", Ym = "carousel-item-end", Gm = "carousel-item-start", qm = "carousel-item-next", Xm = "carousel-item-prev", hf = ".active", pf = ".carousel-item", Jm = hf + pf, Qm = ".carousel-item img", Zm = ".carousel-indicators", ev = "[data-bs-slide], [data-bs-slide-to]", tv = '[data-bs-ride="carousel"]', nv = {
    [Mm]: Cs,
    [km]: Un
  }, rv = {
    interval: 5e3,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
  }, sv = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };
  class qr extends St {
    constructor(e, n) {
      super(e, n), this._interval = null, this._activeElement = null, this._isSliding = false, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = re.findOne(Zm, this._element), this._addEventListeners(), this._config.ride === df && this.cycle();
    }
    static get Default() {
      return rv;
    }
    static get DefaultType() {
      return sv;
    }
    static get NAME() {
      return Im;
    }
    next() {
      this._slide(vr);
    }
    nextWhenVisible() {
      !document.hidden && ur(this._element) && this.next();
    }
    prev() {
      this._slide(Hn);
    }
    pause() {
      this._isSliding && Zu(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (this._config.ride) {
        if (this._isSliding) {
          N.one(this._element, ki, () => this.cycle());
          return;
        }
        this.cycle();
      }
    }
    to(e) {
      const n = this._getItems();
      if (e > n.length - 1 || e < 0)
        return;
      if (this._isSliding) {
        N.one(this._element, ki, () => this.to(e));
        return;
      }
      const r = this._getItemIndex(this._getActive());
      if (r === e)
        return;
      const s = e > r ? vr : Hn;
      this._slide(s, n[e]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(e) {
      return e.defaultInterval = e.interval, e;
    }
    _addEventListeners() {
      this._config.keyboard && N.on(this._element, Hm, (e) => this._keydown(e)), this._config.pause === "hover" && (N.on(this._element, jm, () => this.pause()), N.on(this._element, Wm, () => this._maybeEnableCycle())), this._config.touch && Fs.isSupported() && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const r of re.find(Qm, this._element))
        N.on(r, Bm, (s) => s.preventDefault());
      const n = {
        leftCallback: () => this._slide(this._directionToOrder(Un)),
        rightCallback: () => this._slide(this._directionToOrder(Cs)),
        endCallback: () => {
          this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), Fm + this._config.interval));
        }
      };
      this._swipeHelper = new Fs(this._element, n);
    }
    _keydown(e) {
      if (/input|textarea/i.test(e.target.tagName))
        return;
      const n = nv[e.key];
      n && (e.preventDefault(), this._slide(this._directionToOrder(n)));
    }
    _getItemIndex(e) {
      return this._getItems().indexOf(e);
    }
    _setActiveIndicatorElement(e) {
      if (!this._indicatorsElement)
        return;
      const n = re.findOne(hf, this._indicatorsElement);
      n.classList.remove(hs), n.removeAttribute("aria-current");
      const r = re.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
      r && (r.classList.add(hs), r.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      const e = this._activeElement || this._getActive();
      if (!e)
        return;
      const n = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
      this._config.interval = n || this._config.defaultInterval;
    }
    _slide(e, n = null) {
      if (this._isSliding)
        return;
      const r = this._getActive(), s = e === vr, i = n || ra(this._getItems(), r, s, this._config.wrap);
      if (i === r)
        return;
      const o = this._getItemIndex(i), c = (v) => N.trigger(this._element, v, {
        relatedTarget: i,
        direction: this._orderToDirection(e),
        from: this._getItemIndex(r),
        to: o
      });
      if (c(Vm).defaultPrevented || !r || !i)
        return;
      const h = !!this._interval;
      this.pause(), this._isSliding = true, this._setActiveIndicatorElement(o), this._activeElement = i;
      const f = s ? Gm : Ym, g = s ? qm : Xm;
      i.classList.add(g), Yr(i), r.classList.add(f), i.classList.add(f);
      const E = () => {
        i.classList.remove(f, g), i.classList.add(hs), r.classList.remove(hs, g, f), this._isSliding = false, c(ki);
      };
      this._queueCallback(E, r, this._isAnimated()), h && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains(zm);
    }
    _getActive() {
      return re.findOne(Jm, this._element);
    }
    _getItems() {
      return re.find(pf, this._element);
    }
    _clearInterval() {
      this._interval && (clearInterval(this._interval), this._interval = null);
    }
    _directionToOrder(e) {
      return _t() ? e === Un ? Hn : vr : e === Un ? vr : Hn;
    }
    _orderToDirection(e) {
      return _t() ? e === Hn ? Un : Cs : e === Hn ? Cs : Un;
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = qr.getOrCreateInstance(this, e);
        if (typeof e == "number") {
          n.to(e);
          return;
        }
        if (typeof e == "string") {
          if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
            throw new TypeError(`No method named "${e}"`);
          n[e]();
        }
      });
    }
  }
  N.on(document, Km, ev, function(t) {
    const e = re.getElementFromSelector(this);
    if (!e || !e.classList.contains(df))
      return;
    t.preventDefault();
    const n = qr.getOrCreateInstance(e), r = this.getAttribute("data-bs-slide-to");
    if (r) {
      n.to(r), n._maybeEnableCycle();
      return;
    }
    if (Yt.getDataAttribute(this, "slide") === "next") {
      n.next(), n._maybeEnableCycle();
      return;
    }
    n.prev(), n._maybeEnableCycle();
  });
  N.on(window, Um, () => {
    const t = re.find(tv);
    for (const e of t)
      qr.getOrCreateInstance(e);
  });
  vt(qr);
  const iv = "collapse", ov = "bs.collapse", Xr = `.${ov}`, av = ".data-api", lv = `show${Xr}`, cv = `shown${Xr}`, uv = `hide${Xr}`, fv = `hidden${Xr}`, dv = `click${Xr}${av}`, Fi = "show", Yn = "collapse", ps = "collapsing", hv = "collapsed", pv = `:scope .${Yn} .${Yn}`, gv = "collapse-horizontal", _v = "width", mv = "height", vv = ".collapse.show, .collapse.collapsing", _o = '[data-bs-toggle="collapse"]', Ev = {
    parent: null,
    toggle: true
  }, bv = {
    parent: "(null|element)",
    toggle: "boolean"
  };
  class Vr extends St {
    constructor(e, n) {
      super(e, n), this._isTransitioning = false, this._triggerArray = [];
      const r = re.find(_o);
      for (const s of r) {
        const i = re.getSelectorFromElement(s), o = re.find(i).filter((c) => c === this._element);
        i !== null && o.length && this._triggerArray.push(s);
      }
      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
    }
    static get Default() {
      return Ev;
    }
    static get DefaultType() {
      return bv;
    }
    static get NAME() {
      return iv;
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown())
        return;
      let e = [];
      if (this._config.parent && (e = this._getFirstLevelChildren(vv).filter((c) => c !== this._element).map((c) => Vr.getOrCreateInstance(c, {
        toggle: false
      }))), e.length && e[0]._isTransitioning || N.trigger(this._element, lv).defaultPrevented)
        return;
      for (const c of e)
        c.hide();
      const r = this._getDimension();
      this._element.classList.remove(Yn), this._element.classList.add(ps), this._element.style[r] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
      const s = () => {
        this._isTransitioning = false, this._element.classList.remove(ps), this._element.classList.add(Yn, Fi), this._element.style[r] = "", N.trigger(this._element, cv);
      }, o = `scroll${r[0].toUpperCase() + r.slice(1)}`;
      this._queueCallback(s, this._element, true), this._element.style[r] = `${this._element[o]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown() || N.trigger(this._element, uv).defaultPrevented)
        return;
      const n = this._getDimension();
      this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`, Yr(this._element), this._element.classList.add(ps), this._element.classList.remove(Yn, Fi);
      for (const s of this._triggerArray) {
        const i = re.getElementFromSelector(s);
        i && !this._isShown(i) && this._addAriaAndCollapsedClass([
          s
        ], false);
      }
      this._isTransitioning = true;
      const r = () => {
        this._isTransitioning = false, this._element.classList.remove(ps), this._element.classList.add(Yn), N.trigger(this._element, fv);
      };
      this._element.style[n] = "", this._queueCallback(r, this._element, true);
    }
    _isShown(e = this._element) {
      return e.classList.contains(Fi);
    }
    _configAfterMerge(e) {
      return e.toggle = !!e.toggle, e.parent = cn(e.parent), e;
    }
    _getDimension() {
      return this._element.classList.contains(gv) ? _v : mv;
    }
    _initializeChildren() {
      if (!this._config.parent)
        return;
      const e = this._getFirstLevelChildren(_o);
      for (const n of e) {
        const r = re.getElementFromSelector(n);
        r && this._addAriaAndCollapsedClass([
          n
        ], this._isShown(r));
      }
    }
    _getFirstLevelChildren(e) {
      const n = re.find(pv, this._config.parent);
      return re.find(e, this._config.parent).filter((r) => !n.includes(r));
    }
    _addAriaAndCollapsedClass(e, n) {
      if (e.length)
        for (const r of e)
          r.classList.toggle(hv, !n), r.setAttribute("aria-expanded", n);
    }
    static jQueryInterface(e) {
      const n = {};
      return typeof e == "string" && /show|hide/.test(e) && (n.toggle = false), this.each(function() {
        const r = Vr.getOrCreateInstance(this, n);
        if (typeof e == "string") {
          if (typeof r[e] > "u")
            throw new TypeError(`No method named "${e}"`);
          r[e]();
        }
      });
    }
  }
  N.on(document, dv, _o, function(t) {
    (t.target.tagName === "A" || t.delegateTarget && t.delegateTarget.tagName === "A") && t.preventDefault();
    for (const e of re.getMultipleElementsFromSelector(this))
      Vr.getOrCreateInstance(e, {
        toggle: false
      }).toggle();
  });
  vt(Vr);
  const Al = "dropdown", yv = "bs.dropdown", In = `.${yv}`, ia = ".data-api", Tv = "Escape", Cl = "Tab", wv = "ArrowUp", Sl = "ArrowDown", Av = 2, Cv = `hide${In}`, Sv = `hidden${In}`, Ov = `show${In}`, $v = `shown${In}`, gf = `click${In}${ia}`, _f = `keydown${In}${ia}`, Pv = `keyup${In}${ia}`, Kn = "show", Nv = "dropup", Rv = "dropend", xv = "dropstart", Dv = "dropup-center", Iv = "dropdown-center", wn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Lv = `${wn}.${Kn}`, Ss = ".dropdown-menu", Mv = ".navbar", kv = ".navbar-nav", Fv = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Vv = _t() ? "top-end" : "top-start", Hv = _t() ? "top-start" : "top-end", jv = _t() ? "bottom-end" : "bottom-start", Wv = _t() ? "bottom-start" : "bottom-end", Bv = _t() ? "left-start" : "right-start", Uv = _t() ? "right-start" : "left-start", Kv = "top", zv = "bottom", Yv = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [
      0,
      2
    ],
    popperConfig: null,
    reference: "toggle"
  }, Gv = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };
  class Mt extends St {
    constructor(e, n) {
      super(e, n), this._popper = null, this._parent = this._element.parentNode, this._menu = re.next(this._element, Ss)[0] || re.prev(this._element, Ss)[0] || re.findOne(Ss, this._parent), this._inNavbar = this._detectNavbar();
    }
    static get Default() {
      return Yv;
    }
    static get DefaultType() {
      return Gv;
    }
    static get NAME() {
      return Al;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (un(this._element) || this._isShown())
        return;
      const e = {
        relatedTarget: this._element
      };
      if (!N.trigger(this._element, Ov, e).defaultPrevented) {
        if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(kv))
          for (const r of [].concat(...document.body.children))
            N.on(r, "mouseover", ks);
        this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add(Kn), this._element.classList.add(Kn), N.trigger(this._element, $v, e);
      }
    }
    hide() {
      if (un(this._element) || !this._isShown())
        return;
      const e = {
        relatedTarget: this._element
      };
      this._completeHide(e);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }
    _completeHide(e) {
      if (!N.trigger(this._element, Cv, e).defaultPrevented) {
        if ("ontouchstart" in document.documentElement)
          for (const r of [].concat(...document.body.children))
            N.off(r, "mouseover", ks);
        this._popper && this._popper.destroy(), this._menu.classList.remove(Kn), this._element.classList.remove(Kn), this._element.setAttribute("aria-expanded", "false"), Yt.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, Sv, e);
      }
    }
    _getConfig(e) {
      if (e = super._getConfig(e), typeof e.reference == "object" && !zt(e.reference) && typeof e.reference.getBoundingClientRect != "function")
        throw new TypeError(`${Al.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      return e;
    }
    _createPopper() {
      if (typeof Ju > "u")
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      let e = this._element;
      this._config.reference === "parent" ? e = this._parent : zt(this._config.reference) ? e = cn(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
      const n = this._getPopperConfig();
      this._popper = na(e, this._menu, n);
    }
    _isShown() {
      return this._menu.classList.contains(Kn);
    }
    _getPlacement() {
      const e = this._parent;
      if (e.classList.contains(Rv))
        return Bv;
      if (e.classList.contains(xv))
        return Uv;
      if (e.classList.contains(Dv))
        return Kv;
      if (e.classList.contains(Iv))
        return zv;
      const n = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      return e.classList.contains(Nv) ? n ? Hv : Vv : n ? Wv : jv;
    }
    _detectNavbar() {
      return this._element.closest(Mv) !== null;
    }
    _getOffset() {
      const { offset: e } = this._config;
      return typeof e == "string" ? e.split(",").map((n) => Number.parseInt(n, 10)) : typeof e == "function" ? (n) => e(n, this._element) : e;
    }
    _getPopperConfig() {
      const e = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          },
          {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }
        ]
      };
      return (this._inNavbar || this._config.display === "static") && (Yt.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [
        {
          name: "applyStyles",
          enabled: false
        }
      ]), {
        ...e,
        ...nt(this._config.popperConfig, [
          e
        ])
      };
    }
    _selectMenuItem({ key: e, target: n }) {
      const r = re.find(Fv, this._menu).filter((s) => ur(s));
      r.length && ra(r, n, e === Sl, !r.includes(n)).focus();
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = Mt.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (typeof n[e] > "u")
            throw new TypeError(`No method named "${e}"`);
          n[e]();
        }
      });
    }
    static clearMenus(e) {
      if (e.button === Av || e.type === "keyup" && e.key !== Cl)
        return;
      const n = re.find(Lv);
      for (const r of n) {
        const s = Mt.getInstance(r);
        if (!s || s._config.autoClose === false)
          continue;
        const i = e.composedPath(), o = i.includes(s._menu);
        if (i.includes(s._element) || s._config.autoClose === "inside" && !o || s._config.autoClose === "outside" && o || s._menu.contains(e.target) && (e.type === "keyup" && e.key === Cl || /input|select|option|textarea|form/i.test(e.target.tagName)))
          continue;
        const c = {
          relatedTarget: s._element
        };
        e.type === "click" && (c.clickEvent = e), s._completeHide(c);
      }
    }
    static dataApiKeydownHandler(e) {
      const n = /input|textarea/i.test(e.target.tagName), r = e.key === Tv, s = [
        wv,
        Sl
      ].includes(e.key);
      if (!s && !r || n && !r)
        return;
      e.preventDefault();
      const i = this.matches(wn) ? this : re.prev(this, wn)[0] || re.next(this, wn)[0] || re.findOne(wn, e.delegateTarget.parentNode), o = Mt.getOrCreateInstance(i);
      if (s) {
        e.stopPropagation(), o.show(), o._selectMenuItem(e);
        return;
      }
      o._isShown() && (e.stopPropagation(), o.hide(), i.focus());
    }
  }
  N.on(document, _f, wn, Mt.dataApiKeydownHandler);
  N.on(document, _f, Ss, Mt.dataApiKeydownHandler);
  N.on(document, gf, Mt.clearMenus);
  N.on(document, Pv, Mt.clearMenus);
  N.on(document, gf, wn, function(t) {
    t.preventDefault(), Mt.getOrCreateInstance(this).toggle();
  });
  vt(Mt);
  const mf = "backdrop", qv = "fade", Ol = "show", $l = `mousedown.bs.${mf}`, Xv = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    rootElement: "body"
  }, Jv = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };
  class vf extends Gr {
    constructor(e) {
      super(), this._config = this._getConfig(e), this._isAppended = false, this._element = null;
    }
    static get Default() {
      return Xv;
    }
    static get DefaultType() {
      return Jv;
    }
    static get NAME() {
      return mf;
    }
    show(e) {
      if (!this._config.isVisible) {
        nt(e);
        return;
      }
      this._append();
      const n = this._getElement();
      this._config.isAnimated && Yr(n), n.classList.add(Ol), this._emulateAnimation(() => {
        nt(e);
      });
    }
    hide(e) {
      if (!this._config.isVisible) {
        nt(e);
        return;
      }
      this._getElement().classList.remove(Ol), this._emulateAnimation(() => {
        this.dispose(), nt(e);
      });
    }
    dispose() {
      this._isAppended && (N.off(this._element, $l), this._element.remove(), this._isAppended = false);
    }
    _getElement() {
      if (!this._element) {
        const e = document.createElement("div");
        e.className = this._config.className, this._config.isAnimated && e.classList.add(qv), this._element = e;
      }
      return this._element;
    }
    _configAfterMerge(e) {
      return e.rootElement = cn(e.rootElement), e;
    }
    _append() {
      if (this._isAppended)
        return;
      const e = this._getElement();
      this._config.rootElement.append(e), N.on(e, $l, () => {
        nt(this._config.clickCallback);
      }), this._isAppended = true;
    }
    _emulateAnimation(e) {
      nf(e, this._getElement(), this._config.isAnimated);
    }
  }
  const Qv = "focustrap", Zv = "bs.focustrap", Vs = `.${Zv}`, eE = `focusin${Vs}`, tE = `keydown.tab${Vs}`, nE = "Tab", rE = "forward", Pl = "backward", sE = {
    autofocus: true,
    trapElement: null
  }, iE = {
    autofocus: "boolean",
    trapElement: "element"
  };
  class Ef extends Gr {
    constructor(e) {
      super(), this._config = this._getConfig(e), this._isActive = false, this._lastTabNavDirection = null;
    }
    static get Default() {
      return sE;
    }
    static get DefaultType() {
      return iE;
    }
    static get NAME() {
      return Qv;
    }
    activate() {
      this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Vs), N.on(document, eE, (e) => this._handleFocusin(e)), N.on(document, tE, (e) => this._handleKeydown(e)), this._isActive = true);
    }
    deactivate() {
      this._isActive && (this._isActive = false, N.off(document, Vs));
    }
    _handleFocusin(e) {
      const { trapElement: n } = this._config;
      if (e.target === document || e.target === n || n.contains(e.target))
        return;
      const r = re.focusableChildren(n);
      r.length === 0 ? n.focus() : this._lastTabNavDirection === Pl ? r[r.length - 1].focus() : r[0].focus();
    }
    _handleKeydown(e) {
      e.key === nE && (this._lastTabNavDirection = e.shiftKey ? Pl : rE);
    }
  }
  const Nl = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Rl = ".sticky-top", gs = "padding-right", xl = "margin-right";
  class mo {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const e = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - e);
    }
    hide() {
      const e = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, gs, (n) => n + e), this._setElementAttributes(Nl, gs, (n) => n + e), this._setElementAttributes(Rl, xl, (n) => n - e);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, gs), this._resetElementAttributes(Nl, gs), this._resetElementAttributes(Rl, xl);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
    }
    _setElementAttributes(e, n, r) {
      const s = this.getWidth(), i = (o) => {
        if (o !== this._element && window.innerWidth > o.clientWidth + s)
          return;
        this._saveInitialAttribute(o, n);
        const c = window.getComputedStyle(o).getPropertyValue(n);
        o.style.setProperty(n, `${r(Number.parseFloat(c))}px`);
      };
      this._applyManipulationCallback(e, i);
    }
    _saveInitialAttribute(e, n) {
      const r = e.style.getPropertyValue(n);
      r && Yt.setDataAttribute(e, n, r);
    }
    _resetElementAttributes(e, n) {
      const r = (s) => {
        const i = Yt.getDataAttribute(s, n);
        if (i === null) {
          s.style.removeProperty(n);
          return;
        }
        Yt.removeDataAttribute(s, n), s.style.setProperty(n, i);
      };
      this._applyManipulationCallback(e, r);
    }
    _applyManipulationCallback(e, n) {
      if (zt(e)) {
        n(e);
        return;
      }
      for (const r of re.find(e, this._element))
        n(r);
    }
  }
  const oE = "modal", aE = "bs.modal", mt = `.${aE}`, lE = ".data-api", cE = "Escape", uE = `hide${mt}`, fE = `hidePrevented${mt}`, bf = `hidden${mt}`, yf = `show${mt}`, dE = `shown${mt}`, hE = `resize${mt}`, pE = `click.dismiss${mt}`, gE = `mousedown.dismiss${mt}`, _E = `keydown.dismiss${mt}`, mE = `click${mt}${lE}`, Dl = "modal-open", vE = "fade", Il = "show", Vi = "modal-static", EE = ".modal.show", bE = ".modal-dialog", yE = ".modal-body", TE = '[data-bs-toggle="modal"]', wE = {
    backdrop: true,
    focus: true,
    keyboard: true
  }, AE = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
  };
  class ir extends St {
    constructor(e, n) {
      super(e, n), this._dialog = re.findOne(bE, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._isTransitioning = false, this._scrollBar = new mo(), this._addEventListeners();
    }
    static get Default() {
      return wE;
    }
    static get DefaultType() {
      return AE;
    }
    static get NAME() {
      return oE;
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      this._isShown || this._isTransitioning || N.trigger(this._element, yf, {
        relatedTarget: e
      }).defaultPrevented || (this._isShown = true, this._isTransitioning = true, this._scrollBar.hide(), document.body.classList.add(Dl), this._adjustDialog(), this._backdrop.show(() => this._showElement(e)));
    }
    hide() {
      !this._isShown || this._isTransitioning || N.trigger(this._element, uE).defaultPrevented || (this._isShown = false, this._isTransitioning = true, this._focustrap.deactivate(), this._element.classList.remove(Il), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
    }
    dispose() {
      N.off(window, mt), N.off(this._dialog, mt), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new vf({
        isVisible: !!this._config.backdrop,
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new Ef({
        trapElement: this._element
      });
    }
    _showElement(e) {
      document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
      const n = re.findOne(yE, this._dialog);
      n && (n.scrollTop = 0), Yr(this._element), this._element.classList.add(Il);
      const r = () => {
        this._config.focus && this._focustrap.activate(), this._isTransitioning = false, N.trigger(this._element, dE, {
          relatedTarget: e
        });
      };
      this._queueCallback(r, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      N.on(this._element, _E, (e) => {
        if (e.key === cE) {
          if (this._config.keyboard) {
            this.hide();
            return;
          }
          this._triggerBackdropTransition();
        }
      }), N.on(window, hE, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }), N.on(this._element, gE, (e) => {
        N.one(this._element, pE, (n) => {
          if (!(this._element !== e.target || this._element !== n.target)) {
            if (this._config.backdrop === "static") {
              this._triggerBackdropTransition();
              return;
            }
            this._config.backdrop && this.hide();
          }
        });
      });
    }
    _hideModal() {
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
        document.body.classList.remove(Dl), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, bf);
      });
    }
    _isAnimated() {
      return this._element.classList.contains(vE);
    }
    _triggerBackdropTransition() {
      if (N.trigger(this._element, fE).defaultPrevented)
        return;
      const n = this._element.scrollHeight > document.documentElement.clientHeight, r = this._element.style.overflowY;
      r === "hidden" || this._element.classList.contains(Vi) || (n || (this._element.style.overflowY = "hidden"), this._element.classList.add(Vi), this._queueCallback(() => {
        this._element.classList.remove(Vi), this._queueCallback(() => {
          this._element.style.overflowY = r;
        }, this._dialog);
      }, this._dialog), this._element.focus());
    }
    _adjustDialog() {
      const e = this._element.scrollHeight > document.documentElement.clientHeight, n = this._scrollBar.getWidth(), r = n > 0;
      if (r && !e) {
        const s = _t() ? "paddingLeft" : "paddingRight";
        this._element.style[s] = `${n}px`;
      }
      if (!r && e) {
        const s = _t() ? "paddingRight" : "paddingLeft";
        this._element.style[s] = `${n}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }
    static jQueryInterface(e, n) {
      return this.each(function() {
        const r = ir.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (typeof r[e] > "u")
            throw new TypeError(`No method named "${e}"`);
          r[e](n);
        }
      });
    }
  }
  N.on(document, mE, TE, function(t) {
    const e = re.getElementFromSelector(this);
    [
      "A",
      "AREA"
    ].includes(this.tagName) && t.preventDefault(), N.one(e, yf, (s) => {
      s.defaultPrevented || N.one(e, bf, () => {
        ur(this) && this.focus();
      });
    });
    const n = re.findOne(EE);
    n && ir.getInstance(n).hide(), ir.getOrCreateInstance(e).toggle(this);
  });
  ti(ir);
  vt(ir);
  const CE = "offcanvas", SE = "bs.offcanvas", Xt = `.${SE}`, Tf = ".data-api", OE = `load${Xt}${Tf}`, $E = "Escape", Ll = "show", Ml = "showing", kl = "hiding", PE = "offcanvas-backdrop", wf = ".offcanvas.show", NE = `show${Xt}`, RE = `shown${Xt}`, xE = `hide${Xt}`, Fl = `hidePrevented${Xt}`, Af = `hidden${Xt}`, DE = `resize${Xt}`, IE = `click${Xt}${Tf}`, LE = `keydown.dismiss${Xt}`, ME = '[data-bs-toggle="offcanvas"]', kE = {
    backdrop: true,
    keyboard: true,
    scroll: false
  }, FE = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };
  class fn extends St {
    constructor(e, n) {
      super(e, n), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
    }
    static get Default() {
      return kE;
    }
    static get DefaultType() {
      return FE;
    }
    static get NAME() {
      return CE;
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      if (this._isShown || N.trigger(this._element, NE, {
        relatedTarget: e
      }).defaultPrevented)
        return;
      this._isShown = true, this._backdrop.show(), this._config.scroll || new mo().hide(), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add(Ml);
      const r = () => {
        (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(Ll), this._element.classList.remove(Ml), N.trigger(this._element, RE, {
          relatedTarget: e
        });
      };
      this._queueCallback(r, this._element, true);
    }
    hide() {
      if (!this._isShown || N.trigger(this._element, xE).defaultPrevented)
        return;
      this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.add(kl), this._backdrop.hide();
      const n = () => {
        this._element.classList.remove(Ll, kl), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new mo().reset(), N.trigger(this._element, Af);
      };
      this._queueCallback(n, this._element, true);
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const e = () => {
        if (this._config.backdrop === "static") {
          N.trigger(this._element, Fl);
          return;
        }
        this.hide();
      }, n = !!this._config.backdrop;
      return new vf({
        className: PE,
        isVisible: n,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: n ? e : null
      });
    }
    _initializeFocusTrap() {
      return new Ef({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      N.on(this._element, LE, (e) => {
        if (e.key === $E) {
          if (this._config.keyboard) {
            this.hide();
            return;
          }
          N.trigger(this._element, Fl);
        }
      });
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = fn.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
            throw new TypeError(`No method named "${e}"`);
          n[e](this);
        }
      });
    }
  }
  N.on(document, IE, ME, function(t) {
    const e = re.getElementFromSelector(this);
    if ([
      "A",
      "AREA"
    ].includes(this.tagName) && t.preventDefault(), un(this))
      return;
    N.one(e, Af, () => {
      ur(this) && this.focus();
    });
    const n = re.findOne(wf);
    n && n !== e && fn.getInstance(n).hide(), fn.getOrCreateInstance(e).toggle(this);
  });
  N.on(window, OE, () => {
    for (const t of re.find(wf))
      fn.getOrCreateInstance(t).show();
  });
  N.on(window, DE, () => {
    for (const t of re.find("[aria-modal][class*=show][class*=offcanvas-]"))
      getComputedStyle(t).position !== "fixed" && fn.getOrCreateInstance(t).hide();
  });
  ti(fn);
  vt(fn);
  const VE = /^aria-[\w-]*$/i, Cf = {
    "*": [
      "class",
      "dir",
      "id",
      "lang",
      "role",
      VE
    ],
    a: [
      "target",
      "href",
      "title",
      "rel"
    ],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: [
      "src",
      "srcset",
      "alt",
      "title",
      "width",
      "height"
    ],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  }, HE = /* @__PURE__ */ new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href"
  ]), jE = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, WE = (t, e) => {
    const n = t.nodeName.toLowerCase();
    return e.includes(n) ? HE.has(n) ? !!jE.test(t.nodeValue) : true : e.filter((r) => r instanceof RegExp).some((r) => r.test(n));
  };
  function BE(t, e, n) {
    if (!t.length)
      return t;
    if (n && typeof n == "function")
      return n(t);
    const s = new window.DOMParser().parseFromString(t, "text/html"), i = [].concat(...s.body.querySelectorAll("*"));
    for (const o of i) {
      const c = o.nodeName.toLowerCase();
      if (!Object.keys(e).includes(c)) {
        o.remove();
        continue;
      }
      const u = [].concat(...o.attributes), h = [].concat(e["*"] || [], e[c] || []);
      for (const f of u)
        WE(f, h) || o.removeAttribute(f.nodeName);
    }
    return s.body.innerHTML;
  }
  const UE = "TemplateFactory", KE = {
    allowList: Cf,
    content: {},
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
  }, zE = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  }, YE = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };
  class GE extends Gr {
    constructor(e) {
      super(), this._config = this._getConfig(e);
    }
    static get Default() {
      return KE;
    }
    static get DefaultType() {
      return zE;
    }
    static get NAME() {
      return UE;
    }
    getContent() {
      return Object.values(this._config.content).map((e) => this._resolvePossibleFunction(e)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(e) {
      return this._checkContent(e), this._config.content = {
        ...this._config.content,
        ...e
      }, this;
    }
    toHtml() {
      const e = document.createElement("div");
      e.innerHTML = this._maybeSanitize(this._config.template);
      for (const [s, i] of Object.entries(this._config.content))
        this._setContent(e, i, s);
      const n = e.children[0], r = this._resolvePossibleFunction(this._config.extraClass);
      return r && n.classList.add(...r.split(" ")), n;
    }
    _typeCheckConfig(e) {
      super._typeCheckConfig(e), this._checkContent(e.content);
    }
    _checkContent(e) {
      for (const [n, r] of Object.entries(e))
        super._typeCheckConfig({
          selector: n,
          entry: r
        }, YE);
    }
    _setContent(e, n, r) {
      const s = re.findOne(r, e);
      if (s) {
        if (n = this._resolvePossibleFunction(n), !n) {
          s.remove();
          return;
        }
        if (zt(n)) {
          this._putElementInTemplate(cn(n), s);
          return;
        }
        if (this._config.html) {
          s.innerHTML = this._maybeSanitize(n);
          return;
        }
        s.textContent = n;
      }
    }
    _maybeSanitize(e) {
      return this._config.sanitize ? BE(e, this._config.allowList, this._config.sanitizeFn) : e;
    }
    _resolvePossibleFunction(e) {
      return nt(e, [
        this
      ]);
    }
    _putElementInTemplate(e, n) {
      if (this._config.html) {
        n.innerHTML = "", n.append(e);
        return;
      }
      n.textContent = e.textContent;
    }
  }
  const qE = "tooltip", XE = /* @__PURE__ */ new Set([
    "sanitize",
    "allowList",
    "sanitizeFn"
  ]), Hi = "fade", JE = "modal", _s = "show", QE = ".tooltip-inner", Vl = `.${JE}`, Hl = "hide.bs.modal", Er = "hover", ji = "focus", ZE = "click", eb = "manual", tb = "hide", nb = "hidden", rb = "show", sb = "shown", ib = "inserted", ob = "click", ab = "focusin", lb = "focusout", cb = "mouseenter", ub = "mouseleave", fb = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: _t() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: _t() ? "right" : "left"
  }, db = {
    allowList: Cf,
    animation: true,
    boundary: "clippingParents",
    container: false,
    customClass: "",
    delay: 0,
    fallbackPlacements: [
      "top",
      "right",
      "bottom",
      "left"
    ],
    html: false,
    offset: [
      0,
      6
    ],
    placement: "top",
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
  }, hb = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
  };
  class dr extends St {
    constructor(e, n) {
      if (typeof Ju > "u")
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      super(e, n), this._isEnabled = true, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
    }
    static get Default() {
      return db;
    }
    static get DefaultType() {
      return hb;
    }
    static get NAME() {
      return qE;
    }
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      if (this._isEnabled) {
        if (this._activeTrigger.click = !this._activeTrigger.click, this._isShown()) {
          this._leave();
          return;
        }
        this._enter();
      }
    }
    dispose() {
      clearTimeout(this._timeout), N.off(this._element.closest(Vl), Hl, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
    }
    show() {
      if (this._element.style.display === "none")
        throw new Error("Please use show on visible elements");
      if (!(this._isWithContent() && this._isEnabled))
        return;
      const e = N.trigger(this._element, this.constructor.eventName(rb)), r = (ef(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
      if (e.defaultPrevented || !r)
        return;
      this._disposePopper();
      const s = this._getTipElement();
      this._element.setAttribute("aria-describedby", s.getAttribute("id"));
      const { container: i } = this._config;
      if (this._element.ownerDocument.documentElement.contains(this.tip) || (i.append(s), N.trigger(this._element, this.constructor.eventName(ib))), this._popper = this._createPopper(s), s.classList.add(_s), "ontouchstart" in document.documentElement)
        for (const c of [].concat(...document.body.children))
          N.on(c, "mouseover", ks);
      const o = () => {
        N.trigger(this._element, this.constructor.eventName(sb)), this._isHovered === false && this._leave(), this._isHovered = false;
      };
      this._queueCallback(o, this.tip, this._isAnimated());
    }
    hide() {
      if (!this._isShown() || N.trigger(this._element, this.constructor.eventName(tb)).defaultPrevented)
        return;
      if (this._getTipElement().classList.remove(_s), "ontouchstart" in document.documentElement)
        for (const s of [].concat(...document.body.children))
          N.off(s, "mouseover", ks);
      this._activeTrigger[ZE] = false, this._activeTrigger[ji] = false, this._activeTrigger[Er] = false, this._isHovered = null;
      const r = () => {
        this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.eventName(nb)));
      };
      this._queueCallback(r, this.tip, this._isAnimated());
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return !!this._getTitle();
    }
    _getTipElement() {
      return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
    }
    _createTipElement(e) {
      const n = this._getTemplateFactory(e).toHtml();
      if (!n)
        return null;
      n.classList.remove(Hi, _s), n.classList.add(`bs-${this.constructor.NAME}-auto`);
      const r = Z_(this.constructor.NAME).toString();
      return n.setAttribute("id", r), this._isAnimated() && n.classList.add(Hi), n;
    }
    setContent(e) {
      this._newContent = e, this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(e) {
      return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new GE({
        ...this._config,
        content: e,
        extraClass: this._resolvePossibleFunction(this._config.customClass)
      }), this._templateFactory;
    }
    _getContentForTemplate() {
      return {
        [QE]: this._getTitle()
      };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    _initializeOnDelegatedTarget(e) {
      return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(Hi);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(_s);
    }
    _createPopper(e) {
      const n = nt(this._config.placement, [
        this,
        e,
        this._element
      ]), r = fb[n.toUpperCase()];
      return na(this._element, e, this._getPopperConfig(r));
    }
    _getOffset() {
      const { offset: e } = this._config;
      return typeof e == "string" ? e.split(",").map((n) => Number.parseInt(n, 10)) : typeof e == "function" ? (n) => e(n, this._element) : e;
    }
    _resolvePossibleFunction(e) {
      return nt(e, [
        this._element
      ]);
    }
    _getPopperConfig(e) {
      const n = {
        placement: e,
        modifiers: [
          {
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          },
          {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          },
          {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          },
          {
            name: "arrow",
            options: {
              element: `.${this.constructor.NAME}-arrow`
            }
          },
          {
            name: "preSetPlacement",
            enabled: true,
            phase: "beforeMain",
            fn: (r) => {
              this._getTipElement().setAttribute("data-popper-placement", r.state.placement);
            }
          }
        ]
      };
      return {
        ...n,
        ...nt(this._config.popperConfig, [
          n
        ])
      };
    }
    _setListeners() {
      const e = this._config.trigger.split(" ");
      for (const n of e)
        if (n === "click")
          N.on(this._element, this.constructor.eventName(ob), this._config.selector, (r) => {
            this._initializeOnDelegatedTarget(r).toggle();
          });
        else if (n !== eb) {
          const r = n === Er ? this.constructor.eventName(cb) : this.constructor.eventName(ab), s = n === Er ? this.constructor.eventName(ub) : this.constructor.eventName(lb);
          N.on(this._element, r, this._config.selector, (i) => {
            const o = this._initializeOnDelegatedTarget(i);
            o._activeTrigger[i.type === "focusin" ? ji : Er] = true, o._enter();
          }), N.on(this._element, s, this._config.selector, (i) => {
            const o = this._initializeOnDelegatedTarget(i);
            o._activeTrigger[i.type === "focusout" ? ji : Er] = o._element.contains(i.relatedTarget), o._leave();
          });
        }
      this._hideModalHandler = () => {
        this._element && this.hide();
      }, N.on(this._element.closest(Vl), Hl, this._hideModalHandler);
    }
    _fixTitle() {
      const e = this._element.getAttribute("title");
      e && (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", e), this._element.setAttribute("data-bs-original-title", e), this._element.removeAttribute("title"));
    }
    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }
      this._isHovered = true, this._setTimeout(() => {
        this._isHovered && this.show();
      }, this._config.delay.show);
    }
    _leave() {
      this._isWithActiveTrigger() || (this._isHovered = false, this._setTimeout(() => {
        this._isHovered || this.hide();
      }, this._config.delay.hide));
    }
    _setTimeout(e, n) {
      clearTimeout(this._timeout), this._timeout = setTimeout(e, n);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(e) {
      const n = Yt.getDataAttributes(this._element);
      for (const r of Object.keys(n))
        XE.has(r) && delete n[r];
      return e = {
        ...n,
        ...typeof e == "object" && e ? e : {}
      }, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
    }
    _configAfterMerge(e) {
      return e.container = e.container === false ? document.body : cn(e.container), typeof e.delay == "number" && (e.delay = {
        show: e.delay,
        hide: e.delay
      }), typeof e.title == "number" && (e.title = e.title.toString()), typeof e.content == "number" && (e.content = e.content.toString()), e;
    }
    _getDelegateConfig() {
      const e = {};
      for (const [n, r] of Object.entries(this._config))
        this.constructor.Default[n] !== r && (e[n] = r);
      return e.selector = false, e.trigger = "manual", e;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = dr.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (typeof n[e] > "u")
            throw new TypeError(`No method named "${e}"`);
          n[e]();
        }
      });
    }
  }
  vt(dr);
  const pb = "popover", gb = ".popover-header", _b = ".popover-body", mb = {
    ...dr.Default,
    content: "",
    offset: [
      0,
      8
    ],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
  }, vb = {
    ...dr.DefaultType,
    content: "(null|string|element|function)"
  };
  class oa extends dr {
    static get Default() {
      return mb;
    }
    static get DefaultType() {
      return vb;
    }
    static get NAME() {
      return pb;
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return {
        [gb]: this._getTitle(),
        [_b]: this._getContent()
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = oa.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (typeof n[e] > "u")
            throw new TypeError(`No method named "${e}"`);
          n[e]();
        }
      });
    }
  }
  vt(oa);
  const Eb = "scrollspy", bb = "bs.scrollspy", aa = `.${bb}`, yb = ".data-api", Tb = `activate${aa}`, jl = `click${aa}`, wb = `load${aa}${yb}`, Ab = "dropdown-item", jn = "active", Cb = '[data-bs-spy="scroll"]', Wi = "[href]", Sb = ".nav, .list-group", Wl = ".nav-link", Ob = ".nav-item", $b = ".list-group-item", Pb = `${Wl}, ${Ob} > ${Wl}, ${$b}`, Nb = ".dropdown", Rb = ".dropdown-toggle", xb = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [
      0.1,
      0.5,
      1
    ]
  }, Db = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };
  class si extends St {
    constructor(e, n) {
      super(e, n), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      }, this.refresh();
    }
    static get Default() {
      return xb;
    }
    static get DefaultType() {
      return Db;
    }
    static get NAME() {
      return Eb;
    }
    refresh() {
      this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
      for (const e of this._observableSections.values())
        this._observer.observe(e);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(e) {
      return e.target = cn(e.target) || document.body, e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin, typeof e.threshold == "string" && (e.threshold = e.threshold.split(",").map((n) => Number.parseFloat(n))), e;
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll && (N.off(this._config.target, jl), N.on(this._config.target, jl, Wi, (e) => {
        const n = this._observableSections.get(e.target.hash);
        if (n) {
          e.preventDefault();
          const r = this._rootElement || window, s = n.offsetTop - this._element.offsetTop;
          if (r.scrollTo) {
            r.scrollTo({
              top: s,
              behavior: "smooth"
            });
            return;
          }
          r.scrollTop = s;
        }
      }));
    }
    _getNewObserver() {
      const e = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver((n) => this._observerCallback(n), e);
    }
    _observerCallback(e) {
      const n = (o) => this._targetLinks.get(`#${o.target.id}`), r = (o) => {
        this._previousScrollData.visibleEntryTop = o.target.offsetTop, this._process(n(o));
      }, s = (this._rootElement || document.documentElement).scrollTop, i = s >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = s;
      for (const o of e) {
        if (!o.isIntersecting) {
          this._activeTarget = null, this._clearActiveClass(n(o));
          continue;
        }
        const c = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (i && c) {
          if (r(o), !s)
            return;
          continue;
        }
        !i && !c && r(o);
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
      const e = re.find(Wi, this._config.target);
      for (const n of e) {
        if (!n.hash || un(n))
          continue;
        const r = re.findOne(decodeURI(n.hash), this._element);
        ur(r) && (this._targetLinks.set(decodeURI(n.hash), n), this._observableSections.set(n.hash, r));
      }
    }
    _process(e) {
      this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(jn), this._activateParents(e), N.trigger(this._element, Tb, {
        relatedTarget: e
      }));
    }
    _activateParents(e) {
      if (e.classList.contains(Ab)) {
        re.findOne(Rb, e.closest(Nb)).classList.add(jn);
        return;
      }
      for (const n of re.parents(e, Sb))
        for (const r of re.prev(n, Pb))
          r.classList.add(jn);
    }
    _clearActiveClass(e) {
      e.classList.remove(jn);
      const n = re.find(`${Wi}.${jn}`, e);
      for (const r of n)
        r.classList.remove(jn);
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = si.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
            throw new TypeError(`No method named "${e}"`);
          n[e]();
        }
      });
    }
  }
  N.on(window, wb, () => {
    for (const t of re.find(Cb))
      si.getOrCreateInstance(t);
  });
  vt(si);
  const Ib = "tab", Lb = "bs.tab", Ln = `.${Lb}`, Mb = `hide${Ln}`, kb = `hidden${Ln}`, Fb = `show${Ln}`, Vb = `shown${Ln}`, Hb = `click${Ln}`, jb = `keydown${Ln}`, Wb = `load${Ln}`, Bb = "ArrowLeft", Bl = "ArrowRight", Ub = "ArrowUp", Ul = "ArrowDown", Bi = "Home", Kl = "End", An = "active", zl = "fade", Ui = "show", Kb = "dropdown", Sf = ".dropdown-toggle", zb = ".dropdown-menu", Ki = `:not(${Sf})`, Yb = '.list-group, .nav, [role="tablist"]', Gb = ".nav-item, .list-group-item", qb = `.nav-link${Ki}, .list-group-item${Ki}, [role="tab"]${Ki}`, Of = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', zi = `${qb}, ${Of}`, Xb = `.${An}[data-bs-toggle="tab"], .${An}[data-bs-toggle="pill"], .${An}[data-bs-toggle="list"]`;
  class or extends St {
    constructor(e) {
      super(e), this._parent = this._element.closest(Yb), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N.on(this._element, jb, (n) => this._keydown(n)));
    }
    static get NAME() {
      return Ib;
    }
    show() {
      const e = this._element;
      if (this._elemIsActive(e))
        return;
      const n = this._getActiveElem(), r = n ? N.trigger(n, Mb, {
        relatedTarget: e
      }) : null;
      N.trigger(e, Fb, {
        relatedTarget: n
      }).defaultPrevented || r && r.defaultPrevented || (this._deactivate(n, e), this._activate(e, n));
    }
    _activate(e, n) {
      if (!e)
        return;
      e.classList.add(An), this._activate(re.getElementFromSelector(e));
      const r = () => {
        if (e.getAttribute("role") !== "tab") {
          e.classList.add(Ui);
          return;
        }
        e.removeAttribute("tabindex"), e.setAttribute("aria-selected", true), this._toggleDropDown(e, true), N.trigger(e, Vb, {
          relatedTarget: n
        });
      };
      this._queueCallback(r, e, e.classList.contains(zl));
    }
    _deactivate(e, n) {
      if (!e)
        return;
      e.classList.remove(An), e.blur(), this._deactivate(re.getElementFromSelector(e));
      const r = () => {
        if (e.getAttribute("role") !== "tab") {
          e.classList.remove(Ui);
          return;
        }
        e.setAttribute("aria-selected", false), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, false), N.trigger(e, kb, {
          relatedTarget: n
        });
      };
      this._queueCallback(r, e, e.classList.contains(zl));
    }
    _keydown(e) {
      if (![
        Bb,
        Bl,
        Ub,
        Ul,
        Bi,
        Kl
      ].includes(e.key))
        return;
      e.stopPropagation(), e.preventDefault();
      const n = this._getChildren().filter((s) => !un(s));
      let r;
      if ([
        Bi,
        Kl
      ].includes(e.key))
        r = n[e.key === Bi ? 0 : n.length - 1];
      else {
        const s = [
          Bl,
          Ul
        ].includes(e.key);
        r = ra(n, e.target, s, true);
      }
      r && (r.focus({
        preventScroll: true
      }), or.getOrCreateInstance(r).show());
    }
    _getChildren() {
      return re.find(zi, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((e) => this._elemIsActive(e)) || null;
    }
    _setInitialAttributes(e, n) {
      this._setAttributeIfNotExists(e, "role", "tablist");
      for (const r of n)
        this._setInitialAttributesOnChild(r);
    }
    _setInitialAttributesOnChild(e) {
      e = this._getInnerElement(e);
      const n = this._elemIsActive(e), r = this._getOuterElement(e);
      e.setAttribute("aria-selected", n), r !== e && this._setAttributeIfNotExists(r, "role", "presentation"), n || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e);
    }
    _setInitialAttributesOnTargetPanel(e) {
      const n = re.getElementFromSelector(e);
      n && (this._setAttributeIfNotExists(n, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${e.id}`));
    }
    _toggleDropDown(e, n) {
      const r = this._getOuterElement(e);
      if (!r.classList.contains(Kb))
        return;
      const s = (i, o) => {
        const c = re.findOne(i, r);
        c && c.classList.toggle(o, n);
      };
      s(Sf, An), s(zb, Ui), r.setAttribute("aria-expanded", n);
    }
    _setAttributeIfNotExists(e, n, r) {
      e.hasAttribute(n) || e.setAttribute(n, r);
    }
    _elemIsActive(e) {
      return e.classList.contains(An);
    }
    _getInnerElement(e) {
      return e.matches(zi) ? e : re.findOne(zi, e);
    }
    _getOuterElement(e) {
      return e.closest(Gb) || e;
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = or.getOrCreateInstance(this);
        if (typeof e == "string") {
          if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
            throw new TypeError(`No method named "${e}"`);
          n[e]();
        }
      });
    }
  }
  N.on(document, Hb, Of, function(t) {
    [
      "A",
      "AREA"
    ].includes(this.tagName) && t.preventDefault(), !un(this) && or.getOrCreateInstance(this).show();
  });
  N.on(window, Wb, () => {
    for (const t of re.find(Xb))
      or.getOrCreateInstance(t);
  });
  vt(or);
  const Jb = "toast", Qb = "bs.toast", _n = `.${Qb}`, Zb = `mouseover${_n}`, ey = `mouseout${_n}`, ty = `focusin${_n}`, ny = `focusout${_n}`, ry = `hide${_n}`, sy = `hidden${_n}`, iy = `show${_n}`, oy = `shown${_n}`, ay = "fade", Yl = "hide", ms = "show", vs = "showing", ly = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  }, cy = {
    animation: true,
    autohide: true,
    delay: 5e3
  };
  class ii extends St {
    constructor(e, n) {
      super(e, n), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
    }
    static get Default() {
      return cy;
    }
    static get DefaultType() {
      return ly;
    }
    static get NAME() {
      return Jb;
    }
    show() {
      if (N.trigger(this._element, iy).defaultPrevented)
        return;
      this._clearTimeout(), this._config.animation && this._element.classList.add(ay);
      const n = () => {
        this._element.classList.remove(vs), N.trigger(this._element, oy), this._maybeScheduleHide();
      };
      this._element.classList.remove(Yl), Yr(this._element), this._element.classList.add(ms, vs), this._queueCallback(n, this._element, this._config.animation);
    }
    hide() {
      if (!this.isShown() || N.trigger(this._element, ry).defaultPrevented)
        return;
      const n = () => {
        this._element.classList.add(Yl), this._element.classList.remove(vs, ms), N.trigger(this._element, sy);
      };
      this._element.classList.add(vs), this._queueCallback(n, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout(), this.isShown() && this._element.classList.remove(ms), super.dispose();
    }
    isShown() {
      return this._element.classList.contains(ms);
    }
    _maybeScheduleHide() {
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay)));
    }
    _onInteraction(e, n) {
      switch (e.type) {
        case "mouseover":
        case "mouseout": {
          this._hasMouseInteraction = n;
          break;
        }
        case "focusin":
        case "focusout": {
          this._hasKeyboardInteraction = n;
          break;
        }
      }
      if (n) {
        this._clearTimeout();
        return;
      }
      const r = e.relatedTarget;
      this._element === r || this._element.contains(r) || this._maybeScheduleHide();
    }
    _setListeners() {
      N.on(this._element, Zb, (e) => this._onInteraction(e, true)), N.on(this._element, ey, (e) => this._onInteraction(e, false)), N.on(this._element, ty, (e) => this._onInteraction(e, true)), N.on(this._element, ny, (e) => this._onInteraction(e, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = ii.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (typeof n[e] > "u")
            throw new TypeError(`No method named "${e}"`);
          n[e](this);
        }
      });
    }
  }
  ti(ii);
  vt(ii);
  class an {
    static instance;
    list = /* @__PURE__ */ new Map();
    constructor() {
    }
    static shared() {
      return an.instance || (an.instance = new an()), an.instance;
    }
    add(e, n) {
      this.list.set(e, n);
    }
    find(e) {
      if (this.list.has(e))
        return this.list.get(e);
    }
  }
  class uy {
    target;
    constructor(e) {
      this.target = e;
    }
  }
  class fy {
    static batteryLevel(e) {
      return new Promise((n) => {
        const r = e.get("suffix");
        return n("100" + r);
      });
    }
  }
  class dy {
    static initialize() {
      an.shared().add("platform.battery.level", new uy(fy.batteryLevel));
    }
  }
  class hy {
    serializer;
    constructor(e) {
      this.serializer = e;
    }
  }
  Tn = class {
    static get(e) {
      return typeof e == "string" ? e.toUpperCase() : e instanceof Error ? e.message : "unknown";
    }
  };
  yt = class {
    static d(e, ...n) {
    }
    static e(e, ...n) {
      console.error(e, n);
    }
  };
  const py = {
    initialize() {
      this.initializePlatform();
    },
    initializePlatform() {
    },
    finalize() {
      this.finalizePlatform();
    },
    finalizePlatform() {
    },
    callProxy: function(t, e) {
      if (!qe.shared().initialized) {
        yt.e("[XWebPlatformProxy : call] The WASM module is not initialized");
        return;
      }
      const n = qe.shared().config.serializer.decodeFunctionName(e);
      if (!n) {
        yt.e("[XWebPlatformProxy : call] Function name is empty"), qe.shared().module.CallbackList.executeFromJavascript(t, "");
        return;
      }
      const r = an.shared().find(n);
      if (!r) {
        yt.e("[XWebPlatformProxy : call] Mapping not found for function: " + n), qe.shared().module.CallbackList.executeFromJavascript(t, "");
        return;
      }
      let s;
      try {
        s = qe.shared().config.serializer.decodeMessage(e);
      } catch (i) {
        yt.e("[XWebPlatformProxy : call] Error when decode message: " + Tn.get(i));
      }
      if (!s) {
        yt.e("[XWebPlatformProxy : call] Error when decode message for function: " + n), qe.shared().module.CallbackList.executeFromJavascript(t, "");
        return;
      }
      r.target(s).then((i) => qe.shared().config.serializer.encodeFunctionReturnValue(i)).then((i) => {
        qe.shared().module.CallbackList.executeFromJavascript(t, i);
      }).catch((i) => {
        yt.e("[XWebPlatformProxy : call] Error when encode message: " + Tn.get(i)), qe.shared().module.CallbackList.executeFromJavascript(t, "");
      });
    },
    hasMapping(t) {
      return !!an.shared().find(t);
    }
  };
  qe = class {
    static instance;
    config;
    module;
    initialized = false;
    constructor() {
    }
    static shared() {
      return qe.instance || (qe.instance = new qe()), qe.instance;
    }
    initialize(e, n) {
      if (!this.initialized && (this.initialized = true, this.config = n, this.module = e, this.module)) {
        if (this.module.XPLPC && this.module.XPLPC.initialize(), this.module.NativePlatformProxy) {
          const r = new this.module.NativePlatformProxy();
          r.initialize(), this.module.PlatformProxyList && this.module.PlatformProxyList.insertFromJavascript(0, r);
        }
        if (this.module.PlatformProxy) {
          const r = new this.module.PlatformProxy.extend("PlatformProxy", py), s = new r();
          s.initialize(), this.module.PlatformProxyList && this.module.PlatformProxyList.insertFromJavascript(0, s);
        }
      }
    }
  };
  class gy {
    data = /* @__PURE__ */ new Map();
    get(e) {
      if (this.data.has(e))
        return this.data.get(e);
    }
    set(e, n) {
      this.data.set(e, n);
    }
  }
  class _y {
    decodeFunctionName(e) {
      try {
        return JSON.parse(e).f;
      } catch (n) {
        yt.e("[JsonSerializer : decodeFunctionName] Error when parse json: " + Tn.get(n));
      }
      return "";
    }
    decodeMessage(e) {
      try {
        const n = JSON.parse(e), r = new gy();
        return n.p.forEach((s) => {
          r.set(s.n, s.v);
        }), r;
      } catch (n) {
        yt.e("[JsonSerializer : decodeMessage] Error when decode message: " + Tn.get(n));
      }
    }
    encodeFunctionReturnValue(e) {
      try {
        return JSON.stringify({
          r: e
        });
      } catch (n) {
        yt.e("[JsonSerializer : encodeFunctionReturnValue] Error when encode data: " + Tn.get(n));
      }
      return "";
    }
    decodeFunctionReturnValue(e) {
      try {
        return JSON.parse(e).r;
      } catch (n) {
        yt.e("[JsonSerializer : decodeFunctionReturnValue] Error when parse json: " + Tn.get(n));
      }
    }
    encodeRequest(e, ...n) {
      try {
        return JSON.stringify({
          f: e,
          p: n.map((r) => ({
            n: r.name,
            v: r.value
          }))
        });
      } catch (r) {
        yt.e("[JsonSerializer : encodeRequest] Error when encode data: " + Tn.get(r));
      }
      return "";
    }
  }
  const my = "modulepreload", vy = function(t) {
    return "/wasm-demo/" + t;
  }, Gl = {}, vo = function(e, n, r) {
    if (!n || n.length === 0)
      return e();
    const s = document.getElementsByTagName("link");
    return Promise.all(n.map((i) => {
      if (i = vy(i), i in Gl)
        return;
      Gl[i] = true;
      const o = i.endsWith(".css"), c = o ? '[rel="stylesheet"]' : "";
      if (!!r)
        for (let f = s.length - 1; f >= 0; f--) {
          const g = s[f];
          if (g.href === i && (!o || g.rel === "stylesheet"))
            return;
        }
      else if (document.querySelector(`link[href="${i}"]${c}`))
        return;
      const h = document.createElement("link");
      if (h.rel = o ? "stylesheet" : my, o || (h.as = "script", h.crossOrigin = ""), h.href = i, document.head.appendChild(h), o)
        return new Promise((f, g) => {
          h.addEventListener("load", f), h.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${i}`)));
        });
    })).then(() => e()).catch((i) => {
      const o = new Event("vite:preloadError", {
        cancelable: true
      });
      if (o.payload = i, window.dispatchEvent(o), !o.defaultPrevented)
        throw i;
    });
  };
  var Ey = (() => {
    var t = import.meta.url;
    return async function(e = {}) {
      var n, r = e, s, i, o = new Promise((l, a) => {
        s = l, i = a;
      }), c = typeof window == "object", u = typeof WorkerGlobalScope < "u", h = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && process.type != "renderer";
      if (h) {
        const { createRequire: l } = await vo(() => import("./__vite-browser-external-b25bb000.js"), []);
        var f = l(import.meta.url);
      }
      var g = Object.assign({}, r), E = "./this.program", v = "";
      function R(l) {
        return r.locateFile ? r.locateFile(l, v) : v + l;
      }
      var S, k;
      if (h) {
        var F = f("fs"), V = f("path");
        import.meta.url.startsWith("data:") || (v = V.dirname(f("url").fileURLToPath(import.meta.url)) + "/"), k = (l) => {
          l = Pe(l) ? new URL(l) : l;
          var a = F.readFileSync(l);
          return a;
        }, S = async (l, a = true) => {
          l = Pe(l) ? new URL(l) : l;
          var d = F.readFileSync(l, a ? void 0 : "utf8");
          return d;
        }, !r.thisProgram && process.argv.length > 1 && (E = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2);
      } else
        (c || u) && (u ? v = self.location.href : typeof document < "u" && document.currentScript && (v = document.currentScript.src), t && (v = t), v.startsWith("blob:") ? v = "" : v = v.slice(0, v.replace(/[?#].*/, "").lastIndexOf("/") + 1), u && (k = (l) => {
          var a = new XMLHttpRequest();
          return a.open("GET", l, false), a.responseType = "arraybuffer", a.send(null), new Uint8Array(a.response);
        }), S = async (l) => {
          if (Pe(l))
            return new Promise((d, m) => {
              var b = new XMLHttpRequest();
              b.open("GET", l, true), b.responseType = "arraybuffer", b.onload = () => {
                if (b.status == 200 || b.status == 0 && b.response) {
                  d(b.response);
                  return;
                }
                m(b.status);
              }, b.onerror = m, b.send(null);
            });
          var a = await fetch(l, {
            credentials: "same-origin"
          });
          if (a.ok)
            return a.arrayBuffer();
          throw new Error(a.status + " : " + a.url);
        });
      var j = r.print || console.log.bind(console), $ = r.printErr || console.error.bind(console);
      Object.assign(r, g), g = null, r.arguments && r.arguments, r.thisProgram && (E = r.thisProgram);
      var z = r.wasmBinary, se, te = false, Q, G, ae, he, le, oe, Ve, $e, fe, ee, de = false, Pe = (l) => l.startsWith("file://");
      function Be() {
        var l = se.buffer;
        r.HEAP8 = Q = new Int8Array(l), r.HEAP16 = ae = new Int16Array(l), r.HEAPU8 = G = new Uint8Array(l), r.HEAPU16 = he = new Uint16Array(l), r.HEAP32 = le = new Int32Array(l), r.HEAPU32 = oe = new Uint32Array(l), r.HEAPF32 = Ve = new Float32Array(l), r.HEAPF64 = ee = new Float64Array(l), r.HEAP64 = $e = new BigInt64Array(l), r.HEAPU64 = fe = new BigUint64Array(l);
      }
      function Ue() {
        if (r.preRun)
          for (typeof r.preRun == "function" && (r.preRun = [
            r.preRun
          ]); r.preRun.length; )
            M(r.preRun.shift());
        A(L);
      }
      function Ne() {
        de = true, $t.K();
      }
      function st() {
        if (r.postRun)
          for (typeof r.postRun == "function" && (r.postRun = [
            r.postRun
          ]); r.postRun.length; )
            B(r.postRun.shift());
        A(x);
      }
      var Re = 0, Ie = null;
      function De(l) {
        Re++, r.monitorRunDependencies?.(Re);
      }
      function C(l) {
        if (Re--, r.monitorRunDependencies?.(Re), Re == 0 && Ie) {
          var a = Ie;
          Ie = null, a();
        }
      }
      function W(l) {
        r.onAbort?.(l), l = "Aborted(" + l + ")", $(l), te = true, l += ". Build with -sASSERTIONS for more info.", de && vh();
        var a = new WebAssembly.RuntimeError(l);
        throw i(a), a;
      }
      var H;
      function J() {
        return r.locateFile ? R("xplpc.wasm") : new URL("/wasm-demo/assets/xplpc-4dcbafdc.wasm", self.location).href;
      }
      function pe(l) {
        if (l == H && z)
          return new Uint8Array(z);
        if (k)
          return k(l);
        throw "both async and sync fetching of the wasm failed";
      }
      async function ye(l) {
        if (!z)
          try {
            var a = await S(l);
            return new Uint8Array(a);
          } catch {
          }
        return pe(l);
      }
      async function p(l, a) {
        try {
          var d = await ye(l), m = await WebAssembly.instantiate(d, a);
          return m;
        } catch (b) {
          $(`failed to asynchronously prepare wasm: ${b}`), W(b);
        }
      }
      async function _(l, a, d) {
        if (!l && typeof WebAssembly.instantiateStreaming == "function" && !Pe(a) && !h)
          try {
            var m = fetch(a, {
              credentials: "same-origin"
            }), b = await WebAssembly.instantiateStreaming(m, d);
            return b;
          } catch (w) {
            $(`wasm streaming compile failed: ${w}`), $("falling back to ArrayBuffer instantiation");
          }
        return p(a, d);
      }
      function y() {
        return {
          a: _h
        };
      }
      async function O() {
        function l(w, P) {
          return $t = w.exports, se = $t.J, Be(), ma = $t.M, C(), $t;
        }
        De();
        function a(w) {
          return l(w.instance);
        }
        var d = y();
        if (r.instantiateWasm)
          return new Promise((w, P) => {
            r.instantiateWasm(d, (T, I) => {
              l(T), w(T.exports);
            });
          });
        H ??= J();
        try {
          var m = await _(z, H, d), b = a(m);
          return b;
        } catch (w) {
          return i(w), Promise.reject(w);
        }
      }
      var A = (l) => {
        for (; l.length > 0; )
          l.shift()(r);
      }, x = [], B = (l) => x.unshift(l), L = [], M = (l) => L.unshift(l);
      r.noExitRuntime;
      var D = () => W(""), Z = (l, a) => Object.defineProperty(a, "name", {
        value: l
      }), U = [], q = [], ne, K = (l) => {
        throw new ne(l);
      }, me = () => q.length / 2 - 5 - U.length, ve = () => {
        q.push(0, 1, void 0, 1, null, 1, true, 1, false, 1), r.count_emval_handles = me;
      }, Se = {
        toValue: (l) => (l || K("Cannot use deleted val. handle = " + l), q[l]),
        toHandle: (l) => {
          switch (l) {
            case void 0:
              return 2;
            case null:
              return 4;
            case true:
              return 6;
            case false:
              return 8;
            default: {
              const a = U.pop() || q.length;
              return q[a] = l, q[a + 1] = 1, a;
            }
          }
        }
      }, Le = (l, a) => {
        var d = Z(a, function(m) {
          this.name = a, this.message = m;
          var b = new Error(m).stack;
          b !== void 0 && (this.stack = this.toString() + `
` + b.replace(/^Error(:[^\n]*)?\n/, ""));
        });
        return d.prototype = Object.create(l.prototype), d.prototype.constructor = d, d.prototype.toString = function() {
          return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
        }, d;
      }, et, ze = () => {
        for (var l = new Array(256), a = 0; a < 256; ++a)
          l[a] = String.fromCharCode(a);
        Jt = l;
      }, Jt, Me = (l) => {
        for (var a = "", d = l; G[d]; )
          a += Jt[G[d++]];
        return a;
      }, ke = {}, tt = (l, a) => {
        for (a === void 0 && K("ptr should not be undefined"); l.baseClass; )
          a = l.upcast(a), l = l.baseClass;
        return a;
      }, Jr = (l, a, d) => {
        a = tt(l, a), ke.hasOwnProperty(a) ? K(`Tried to register registered instance: ${a}`) : ke[a] = d;
      }, mn = {}, ua = (l) => {
        var a = mh(l), d = Me(a);
        return Zt(a), d;
      }, li = (l, a) => {
        var d = mn[l];
        return d === void 0 && K(`${a} has unknown type ${ua(l)}`), d;
      }, jf = (l, a) => {
        a = tt(l, a), ke.hasOwnProperty(a) ? delete ke[a] : K(`Tried to unregister unregistered instance: ${a}`);
      }, Qr = (l) => {
      }, ci = false, Wf = (l) => {
        l.smartPtr ? l.smartPtrType.rawDestructor(l.smartPtr) : l.ptrType.registeredClass.rawDestructor(l.ptr);
      }, fa = (l) => {
        l.count.value -= 1;
        var a = l.count.value === 0;
        a && Wf(l);
      }, da = (l, a, d) => {
        if (a === d)
          return l;
        if (d.baseClass === void 0)
          return null;
        var m = da(l, a, d.baseClass);
        return m === null ? null : d.downcast(m);
      }, ha = {}, Bf = (l, a) => (a = tt(l, a), ke[a]), pa, Zr = (l) => {
        throw new pa(l);
      }, es = (l, a) => {
        (!a.ptrType || !a.ptr) && Zr("makeClassHandle requires ptr and ptrType");
        var d = !!a.smartPtrType, m = !!a.smartPtr;
        return d !== m && Zr("Both smartPtrType and smartPtr must be specified"), a.count = {
          value: 1
        }, Mn(Object.create(l, {
          $$: {
            value: a,
            writable: true
          }
        }));
      };
      function Uf(l) {
        var a = this.getPointee(l);
        if (!a)
          return this.destructor(l), null;
        var d = Bf(this.registeredClass, a);
        if (d !== void 0) {
          if (d.$$.count.value === 0)
            return d.$$.ptr = a, d.$$.smartPtr = l, d.clone();
          var m = d.clone();
          return this.destructor(l), m;
        }
        function b() {
          return this.isSmartPointer ? es(this.registeredClass.instancePrototype, {
            ptrType: this.pointeeType,
            ptr: a,
            smartPtrType: this,
            smartPtr: l
          }) : es(this.registeredClass.instancePrototype, {
            ptrType: this,
            ptr: l
          });
        }
        var w = this.registeredClass.getActualType(a), P = ha[w];
        if (!P)
          return b.call(this);
        var T;
        this.isConst ? T = P.constPointerType : T = P.pointerType;
        var I = da(a, this.registeredClass, T.registeredClass);
        return I === null ? b.call(this) : this.isSmartPointer ? es(T.registeredClass.instancePrototype, {
          ptrType: T,
          ptr: I,
          smartPtrType: this,
          smartPtr: l
        }) : es(T.registeredClass.instancePrototype, {
          ptrType: T,
          ptr: I
        });
      }
      var Mn = (l) => typeof FinalizationRegistry > "u" ? (Mn = (a) => a, l) : (ci = new FinalizationRegistry((a) => {
        fa(a.$$);
      }), Mn = (a) => {
        var d = a.$$, m = !!d.smartPtr;
        if (m) {
          var b = {
            $$: d
          };
          ci.register(a, b, a);
        }
        return a;
      }, Qr = (a) => ci.unregister(a), Mn(l)), Kf = (l, a, d) => {
        l = Me(l), a = li(a, "wrapper"), d = Se.toValue(d);
        var m = a.registeredClass, b = m.instancePrototype, w = m.baseClass, P = w.instancePrototype, T = m.baseClass.constructor, I = Z(l, function(...X) {
          m.baseClass.pureVirtualFunctions.forEach(function(Y) {
            if (this[Y] === P[Y])
              throw new et(`Pure virtual function ${Y} must be implemented in JavaScript`);
          }.bind(this)), Object.defineProperty(this, "__parent", {
            value: b
          }), this.__construct(...X);
        });
        return b.__construct = function(...Y) {
          this === b && K("Pass correct 'this' to __construct");
          var ie = T.implement(this, ...Y);
          Qr(ie);
          var ge = ie.$$;
          ie.notifyOnDestruction(), ge.preservePointerOnDelete = true, Object.defineProperties(this, {
            $$: {
              value: ge
            }
          }), Mn(this), Jr(m, ge.ptr, this);
        }, b.__destruct = function() {
          this === b && K("Pass correct 'this' to __destruct"), Qr(this), jf(m, this.$$.ptr);
        }, I.prototype = Object.create(b), Object.assign(I.prototype, d), Se.toHandle(I);
      }, ts = (l) => {
        if (l === null)
          return "null";
        var a = typeof l;
        return a === "object" || a === "array" || a === "function" ? l.toString() : "" + l;
      }, kn = {}, ns = {}, Qt = (l, a, d) => {
        l.forEach((T) => ns[T] = a);
        function m(T) {
          var I = d(T);
          I.length !== l.length && Zr("Mismatched type converter count");
          for (var X = 0; X < l.length; ++X)
            Ot(l[X], I[X]);
        }
        var b = new Array(a.length), w = [], P = 0;
        a.forEach((T, I) => {
          mn.hasOwnProperty(T) ? b[I] = mn[T] : (w.push(T), kn.hasOwnProperty(T) || (kn[T] = []), kn[T].push(() => {
            b[I] = mn[T], ++P, P === w.length && m(b);
          }));
        }), w.length === 0 && m(b);
      };
      function zf(l, a, d = {}) {
        var m = a.name;
        if (l || K(`type "${m}" must have a positive integer typeid pointer`), mn.hasOwnProperty(l)) {
          if (d.ignoreDuplicateRegistrations)
            return;
          K(`Cannot register type '${m}' twice`);
        }
        if (mn[l] = a, delete ns[l], kn.hasOwnProperty(l)) {
          var b = kn[l];
          delete kn[l], b.forEach((w) => w());
        }
      }
      function Ot(l, a, d = {}) {
        return zf(l, a, d);
      }
      var ga = (l, a, d) => {
        switch (a) {
          case 1:
            return d ? (m) => Q[m] : (m) => G[m];
          case 2:
            return d ? (m) => ae[m >> 1] : (m) => he[m >> 1];
          case 4:
            return d ? (m) => le[m >> 2] : (m) => oe[m >> 2];
          case 8:
            return d ? (m) => $e[m >> 3] : (m) => fe[m >> 3];
          default:
            throw new TypeError(`invalid integer width (${a}): ${l}`);
        }
      }, Yf = (l, a, d, m, b) => {
        a = Me(a);
        var w = a.indexOf("u") != -1;
        Ot(l, {
          name: a,
          fromWireType: (P) => P,
          toWireType: function(P, T) {
            if (typeof T != "bigint" && typeof T != "number")
              throw new TypeError(`Cannot convert "${ts(T)}" to ${this.name}`);
            return typeof T == "number" && (T = BigInt(T)), T;
          },
          argPackAdvance: Ht,
          readValueFromPointer: ga(a, d, !w),
          destructorFunction: null
        });
      }, Ht = 8, Gf = (l, a, d, m) => {
        a = Me(a), Ot(l, {
          name: a,
          fromWireType: function(b) {
            return !!b;
          },
          toWireType: function(b, w) {
            return w ? d : m;
          },
          argPackAdvance: Ht,
          readValueFromPointer: function(b) {
            return this.fromWireType(G[b]);
          },
          destructorFunction: null
        });
      }, qf = (l) => ({
        count: l.count,
        deleteScheduled: l.deleteScheduled,
        preservePointerOnDelete: l.preservePointerOnDelete,
        ptr: l.ptr,
        ptrType: l.ptrType,
        smartPtr: l.smartPtr,
        smartPtrType: l.smartPtrType
      }), ui = (l) => {
        function a(d) {
          return d.$$.ptrType.registeredClass.name;
        }
        K(a(l) + " instance already deleted");
      }, rs = [], Xf = () => {
        for (; rs.length; ) {
          var l = rs.pop();
          l.$$.deleteScheduled = false, l.delete();
        }
      }, _a, Jf = () => {
        Object.assign(ss.prototype, {
          isAliasOf(l) {
            if (!(this instanceof ss) || !(l instanceof ss))
              return false;
            var a = this.$$.ptrType.registeredClass, d = this.$$.ptr;
            l.$$ = l.$$;
            for (var m = l.$$.ptrType.registeredClass, b = l.$$.ptr; a.baseClass; )
              d = a.upcast(d), a = a.baseClass;
            for (; m.baseClass; )
              b = m.upcast(b), m = m.baseClass;
            return a === m && d === b;
          },
          clone() {
            if (this.$$.ptr || ui(this), this.$$.preservePointerOnDelete)
              return this.$$.count.value += 1, this;
            var l = Mn(Object.create(Object.getPrototypeOf(this), {
              $$: {
                value: qf(this.$$)
              }
            }));
            return l.$$.count.value += 1, l.$$.deleteScheduled = false, l;
          },
          delete() {
            this.$$.ptr || ui(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && K("Object already scheduled for deletion"), Qr(this), fa(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
          },
          isDeleted() {
            return !this.$$.ptr;
          },
          deleteLater() {
            return this.$$.ptr || ui(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && K("Object already scheduled for deletion"), rs.push(this), rs.length === 1 && _a && _a(Xf), this.$$.deleteScheduled = true, this;
          }
        });
      };
      function ss() {
      }
      var fi = (l, a, d) => {
        if (l[a].overloadTable === void 0) {
          var m = l[a];
          l[a] = function(...b) {
            return l[a].overloadTable.hasOwnProperty(b.length) || K(`Function '${d}' called with an invalid number of arguments (${b.length}) - expects one of (${l[a].overloadTable})!`), l[a].overloadTable[b.length].apply(this, b);
          }, l[a].overloadTable = [], l[a].overloadTable[m.argCount] = m;
        }
      }, Qf = (l, a, d) => {
        r.hasOwnProperty(l) ? ((d === void 0 || r[l].overloadTable !== void 0 && r[l].overloadTable[d] !== void 0) && K(`Cannot register public name '${l}' twice`), fi(r, l, l), r[l].overloadTable.hasOwnProperty(d) && K(`Cannot register multiple overloads of a function with the same number of arguments (${d})!`), r[l].overloadTable[d] = a) : (r[l] = a, r[l].argCount = d);
      }, Zf = 48, ed = 57, td = (l) => {
        l = l.replace(/[^a-zA-Z0-9_]/g, "$");
        var a = l.charCodeAt(0);
        return a >= Zf && a <= ed ? `_${l}` : l;
      };
      function nd(l, a, d, m, b, w, P, T) {
        this.name = l, this.constructor = a, this.instancePrototype = d, this.rawDestructor = m, this.baseClass = b, this.getActualType = w, this.upcast = P, this.downcast = T, this.pureVirtualFunctions = [];
      }
      var di = (l, a, d) => {
        for (; a !== d; )
          a.upcast || K(`Expected null or instance of ${d.name}, got an instance of ${a.name}`), l = a.upcast(l), a = a.baseClass;
        return l;
      };
      function rd(l, a) {
        if (a === null)
          return this.isReference && K(`null is not a valid ${this.name}`), 0;
        a.$$ || K(`Cannot pass "${ts(a)}" as a ${this.name}`), a.$$.ptr || K(`Cannot pass deleted object as a pointer of type ${this.name}`);
        var d = a.$$.ptrType.registeredClass, m = di(a.$$.ptr, d, this.registeredClass);
        return m;
      }
      function sd(l, a) {
        var d;
        if (a === null)
          return this.isReference && K(`null is not a valid ${this.name}`), this.isSmartPointer ? (d = this.rawConstructor(), l !== null && l.push(this.rawDestructor, d), d) : 0;
        (!a || !a.$$) && K(`Cannot pass "${ts(a)}" as a ${this.name}`), a.$$.ptr || K(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && a.$$.ptrType.isConst && K(`Cannot convert argument of type ${a.$$.smartPtrType ? a.$$.smartPtrType.name : a.$$.ptrType.name} to parameter type ${this.name}`);
        var m = a.$$.ptrType.registeredClass;
        if (d = di(a.$$.ptr, m, this.registeredClass), this.isSmartPointer)
          switch (a.$$.smartPtr === void 0 && K("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
            case 0:
              a.$$.smartPtrType === this ? d = a.$$.smartPtr : K(`Cannot convert argument of type ${a.$$.smartPtrType ? a.$$.smartPtrType.name : a.$$.ptrType.name} to parameter type ${this.name}`);
              break;
            case 1:
              d = a.$$.smartPtr;
              break;
            case 2:
              if (a.$$.smartPtrType === this)
                d = a.$$.smartPtr;
              else {
                var b = a.clone();
                d = this.rawShare(d, Se.toHandle(() => b.delete())), l !== null && l.push(this.rawDestructor, d);
              }
              break;
            default:
              K("Unsupporting sharing policy");
          }
        return d;
      }
      function id(l, a) {
        if (a === null)
          return this.isReference && K(`null is not a valid ${this.name}`), 0;
        a.$$ || K(`Cannot pass "${ts(a)}" as a ${this.name}`), a.$$.ptr || K(`Cannot pass deleted object as a pointer of type ${this.name}`), a.$$.ptrType.isConst && K(`Cannot convert argument of type ${a.$$.ptrType.name} to parameter type ${this.name}`);
        var d = a.$$.ptrType.registeredClass, m = di(a.$$.ptr, d, this.registeredClass);
        return m;
      }
      function is(l) {
        return this.fromWireType(oe[l >> 2]);
      }
      var od = () => {
        Object.assign(hr.prototype, {
          getPointee(l) {
            return this.rawGetPointee && (l = this.rawGetPointee(l)), l;
          },
          destructor(l) {
            this.rawDestructor?.(l);
          },
          argPackAdvance: Ht,
          readValueFromPointer: is,
          fromWireType: Uf
        });
      };
      function hr(l, a, d, m, b, w, P, T, I, X, Y) {
        this.name = l, this.registeredClass = a, this.isReference = d, this.isConst = m, this.isSmartPointer = b, this.pointeeType = w, this.sharingPolicy = P, this.rawGetPointee = T, this.rawConstructor = I, this.rawShare = X, this.rawDestructor = Y, !b && a.baseClass === void 0 ? m ? (this.toWireType = rd, this.destructorFunction = null) : (this.toWireType = id, this.destructorFunction = null) : this.toWireType = sd;
      }
      var ad = (l, a, d) => {
        r.hasOwnProperty(l) || Zr("Replacing nonexistent public symbol"), r[l].overloadTable !== void 0 && d !== void 0 ? r[l].overloadTable[d] = a : (r[l] = a, r[l].argCount = d);
      }, os = [], ma, ld = (l) => {
        var a = os[l];
        return a || (l >= os.length && (os.length = l + 1), os[l] = a = ma.get(l)), a;
      }, Et = (l, a) => {
        l = Me(l);
        function d() {
          return ld(a);
        }
        var m = d();
        return typeof m != "function" && K(`unknown function pointer with signature ${l}: ${a}`), m;
      }, va, as = (l, a) => {
        var d = [], m = {};
        function b(w) {
          if (!m[w] && !mn[w]) {
            if (ns[w]) {
              ns[w].forEach(b);
              return;
            }
            d.push(w), m[w] = true;
          }
        }
        throw a.forEach(b), new va(`${l}: ` + d.map(ua).join([
          ", "
        ]));
      }, cd = (l, a, d, m, b, w, P, T, I, X, Y, ie, ge) => {
        Y = Me(Y), w = Et(b, w), T &&= Et(P, T), X &&= Et(I, X), ge = Et(ie, ge);
        var we = td(Y);
        Qf(we, function() {
          as(`Cannot construct ${Y} due to unbound types`, [
            m
          ]);
        }), Qt([
          l,
          a,
          d
        ], m ? [
          m
        ] : [], (Oe) => {
          Oe = Oe[0];
          var it, dt;
          m ? (it = Oe.registeredClass, dt = it.instancePrototype) : dt = ss.prototype;
          var ot = Z(Y, function(...Ei) {
            if (Object.getPrototypeOf(this) !== vi)
              throw new ne("Use 'new' to construct " + Y);
            if (Pt.constructor_body === void 0)
              throw new ne(Y + " has no accessible constructor");
            var Ra = Pt.constructor_body[Ei.length];
            if (Ra === void 0)
              throw new ne(`Tried to invoke ctor of ${Y} with invalid number of parameters (${Ei.length}) - expected (${Object.keys(Pt.constructor_body).toString()}) parameters instead!`);
            return Ra.apply(this, Ei);
          }), vi = Object.create(dt, {
            constructor: {
              value: ot
            }
          });
          ot.prototype = vi;
          var Pt = new nd(Y, ot, vi, ge, it, w, T, X);
          Pt.baseClass && (Pt.baseClass.__derivedClasses ??= [], Pt.baseClass.__derivedClasses.push(Pt));
          var Eh = new hr(Y, Pt, true, false, false), Pa = new hr(Y + "*", Pt, false, false, false), Na = new hr(Y + " const*", Pt, false, true, false);
          return ha[l] = {
            pointerType: Pa,
            constPointerType: Na
          }, ad(we, ot), [
            Eh,
            Pa,
            Na
          ];
        });
      }, Ea = (l) => {
        for (; l.length; ) {
          var a = l.pop(), d = l.pop();
          d(a);
        }
      };
      function ba(l) {
        for (var a = 1; a < l.length; ++a)
          if (l[a] !== null && l[a].destructorFunction === void 0)
            return true;
        return false;
      }
      function ya(l, a) {
        if (!(l instanceof Function))
          throw new TypeError(`new_ called with constructor type ${typeof l} which is not a function`);
        var d = Z(l.name || "unknownFunctionName", function() {
        });
        d.prototype = l.prototype;
        var m = new d(), b = l.apply(m, a);
        return b instanceof Object ? b : m;
      }
      function ud(l, a, d, m) {
        var b = ba(l), w = l.length - 2, P = [], T = [
          "fn"
        ];
        a && T.push("thisWired");
        for (var I = 0; I < w; ++I)
          P.push(`arg${I}`), T.push(`arg${I}Wired`);
        P = P.join(","), T = T.join(",");
        var X = `return function (${P}) {
`;
        b && (X += `var destructors = [];
`);
        var Y = b ? "destructors" : "null", ie = [
          "humanName",
          "throwBindingError",
          "invoker",
          "fn",
          "runDestructors",
          "retType",
          "classParam"
        ];
        a && (X += `var thisWired = classParam['toWireType'](${Y}, this);
`);
        for (var I = 0; I < w; ++I)
          X += `var arg${I}Wired = argType${I}['toWireType'](${Y}, arg${I});
`, ie.push(`argType${I}`);
        if (X += (d || m ? "var rv = " : "") + `invoker(${T});
`, b)
          X += `runDestructors(destructors);
`;
        else
          for (var I = a ? 1 : 2; I < l.length; ++I) {
            var ge = I === 1 ? "thisWired" : "arg" + (I - 2) + "Wired";
            l[I].destructorFunction !== null && (X += `${ge}_dtor(${ge});
`, ie.push(`${ge}_dtor`));
          }
        return d && (X += `var ret = retType['fromWireType'](rv);
return ret;
`), X += `}
`, [
          ie,
          X
        ];
      }
      function hi(l, a, d, m, b, w) {
        var P = a.length;
        P < 2 && K("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var T = a[1] !== null && d !== null, I = ba(a), X = a[0].name !== "void", Y = [
          l,
          K,
          m,
          b,
          Ea,
          a[0],
          a[1]
        ], ie = 0; ie < P - 2; ++ie)
          Y.push(a[ie + 2]);
        if (!I)
          for (var ie = T ? 1 : 2; ie < a.length; ++ie)
            a[ie].destructorFunction !== null && Y.push(a[ie].destructorFunction);
        let [ge, we] = ud(a, T, X, w);
        ge.push(we);
        var Oe = ya(Function, ge)(...Y);
        return Z(l, Oe);
      }
      var pi = (l, a) => {
        for (var d = [], m = 0; m < l; m++)
          d.push(oe[a + m * 4 >> 2]);
        return d;
      }, Ta = (l) => {
        l = l.trim();
        const a = l.indexOf("(");
        return a === -1 ? l : l.slice(0, a);
      }, fd = (l, a, d, m, b, w, P, T, I) => {
        var X = pi(d, m);
        a = Me(a), a = Ta(a), w = Et(b, w), Qt([], [
          l
        ], (Y) => {
          Y = Y[0];
          var ie = `${Y.name}.${a}`;
          function ge() {
            as(`Cannot call ${ie} due to unbound types`, X);
          }
          a.startsWith("@@") && (a = Symbol[a.substring(2)]);
          var we = Y.registeredClass.constructor;
          return we[a] === void 0 ? (ge.argCount = d - 1, we[a] = ge) : (fi(we, a, ie), we[a].overloadTable[d - 1] = ge), Qt([], X, (Oe) => {
            var it = [
              Oe[0],
              null
            ].concat(Oe.slice(1)), dt = hi(ie, it, null, w, P, T);
            if (we[a].overloadTable === void 0 ? (dt.argCount = d - 1, we[a] = dt) : we[a].overloadTable[d - 1] = dt, Y.registeredClass.__derivedClasses)
              for (const ot of Y.registeredClass.__derivedClasses)
                ot.constructor.hasOwnProperty(a) || (ot.constructor[a] = dt);
            return [];
          }), [];
        });
      }, dd = (l, a, d, m, b, w) => {
        var P = pi(a, d);
        b = Et(m, b), Qt([], [
          l
        ], (T) => {
          T = T[0];
          var I = `constructor ${T.name}`;
          if (T.registeredClass.constructor_body === void 0 && (T.registeredClass.constructor_body = []), T.registeredClass.constructor_body[a - 1] !== void 0)
            throw new ne(`Cannot register multiple constructors with identical number of parameters (${a - 1}) for class '${T.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
          return T.registeredClass.constructor_body[a - 1] = () => {
            as(`Cannot construct ${T.name} due to unbound types`, P);
          }, Qt([], P, (X) => (X.splice(1, 0, null), T.registeredClass.constructor_body[a - 1] = hi(I, X, null, b, w), [])), [];
        });
      }, hd = (l, a, d, m, b, w, P, T, I, X) => {
        var Y = pi(d, m);
        a = Me(a), a = Ta(a), w = Et(b, w), Qt([], [
          l
        ], (ie) => {
          ie = ie[0];
          var ge = `${ie.name}.${a}`;
          a.startsWith("@@") && (a = Symbol[a.substring(2)]), T && ie.registeredClass.pureVirtualFunctions.push(a);
          function we() {
            as(`Cannot call ${ge} due to unbound types`, Y);
          }
          var Oe = ie.registeredClass.instancePrototype, it = Oe[a];
          return it === void 0 || it.overloadTable === void 0 && it.className !== ie.name && it.argCount === d - 2 ? (we.argCount = d - 2, we.className = ie.name, Oe[a] = we) : (fi(Oe, a, ge), Oe[a].overloadTable[d - 2] = we), Qt([], Y, (dt) => {
            var ot = hi(ge, dt, ie, w, P, I);
            return Oe[a].overloadTable === void 0 ? (ot.argCount = d - 2, Oe[a] = ot) : Oe[a].overloadTable[d - 2] = ot, [];
          }), [];
        });
      }, gi = (l) => {
        l > 9 && --q[l + 1] === 0 && (q[l] = void 0, U.push(l));
      }, pd = {
        name: "emscripten::val",
        fromWireType: (l) => {
          var a = Se.toValue(l);
          return gi(l), a;
        },
        toWireType: (l, a) => Se.toHandle(a),
        argPackAdvance: Ht,
        readValueFromPointer: is,
        destructorFunction: null
      }, gd = (l) => Ot(l, pd), _d = (l, a) => {
        switch (a) {
          case 4:
            return function(d) {
              return this.fromWireType(Ve[d >> 2]);
            };
          case 8:
            return function(d) {
              return this.fromWireType(ee[d >> 3]);
            };
          default:
            throw new TypeError(`invalid float width (${a}): ${l}`);
        }
      }, md = (l, a, d) => {
        a = Me(a), Ot(l, {
          name: a,
          fromWireType: (m) => m,
          toWireType: (m, b) => b,
          argPackAdvance: Ht,
          readValueFromPointer: _d(a, d),
          destructorFunction: null
        });
      }, vd = (l, a, d, m, b) => {
        a = Me(a);
        var w = (Y) => Y;
        if (m === 0) {
          var P = 32 - 8 * d;
          w = (Y) => Y << P >>> P;
        }
        var T = a.includes("unsigned"), I = (Y, ie) => {
        }, X;
        T ? X = function(Y, ie) {
          return I(ie, this.name), ie >>> 0;
        } : X = function(Y, ie) {
          return I(ie, this.name), ie;
        }, Ot(l, {
          name: a,
          fromWireType: w,
          toWireType: X,
          argPackAdvance: Ht,
          readValueFromPointer: ga(a, d, m !== 0),
          destructorFunction: null
        });
      }, Ed = (l, a, d) => {
        var m = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
          BigInt64Array,
          BigUint64Array
        ], b = m[a];
        function w(P) {
          var T = oe[P >> 2], I = oe[P + 4 >> 2];
          return new b(Q.buffer, I, T);
        }
        d = Me(d), Ot(l, {
          name: d,
          fromWireType: w,
          argPackAdvance: Ht,
          readValueFromPointer: w
        }, {
          ignoreDuplicateRegistrations: true
        });
      }, bd = (l, a, d, m, b, w, P, T, I, X, Y, ie) => {
        d = Me(d), w = Et(b, w), T = Et(P, T), X = Et(I, X), ie = Et(Y, ie), Qt([
          l
        ], [
          a
        ], (ge) => {
          ge = ge[0];
          var we = new hr(d, ge.registeredClass, false, false, true, ge, m, w, T, X, ie);
          return [
            we
          ];
        });
      }, yd = (l, a, d, m) => {
        if (!(m > 0))
          return 0;
        for (var b = d, w = d + m - 1, P = 0; P < l.length; ++P) {
          var T = l.charCodeAt(P);
          if (T >= 55296 && T <= 57343) {
            var I = l.charCodeAt(++P);
            T = 65536 + ((T & 1023) << 10) | I & 1023;
          }
          if (T <= 127) {
            if (d >= w)
              break;
            a[d++] = T;
          } else if (T <= 2047) {
            if (d + 1 >= w)
              break;
            a[d++] = 192 | T >> 6, a[d++] = 128 | T & 63;
          } else if (T <= 65535) {
            if (d + 2 >= w)
              break;
            a[d++] = 224 | T >> 12, a[d++] = 128 | T >> 6 & 63, a[d++] = 128 | T & 63;
          } else {
            if (d + 3 >= w)
              break;
            a[d++] = 240 | T >> 18, a[d++] = 128 | T >> 12 & 63, a[d++] = 128 | T >> 6 & 63, a[d++] = 128 | T & 63;
          }
        }
        return a[d] = 0, d - b;
      }, pr = (l, a, d) => yd(l, G, a, d), Td = (l) => {
        for (var a = 0, d = 0; d < l.length; ++d) {
          var m = l.charCodeAt(d);
          m <= 127 ? a++ : m <= 2047 ? a += 2 : m >= 55296 && m <= 57343 ? (a += 4, ++d) : a += 3;
        }
        return a;
      }, wa = typeof TextDecoder < "u" ? new TextDecoder() : void 0, Aa = (l, a = 0, d = NaN) => {
        for (var m = a + d, b = a; l[b] && !(b >= m); )
          ++b;
        if (b - a > 16 && l.buffer && wa)
          return wa.decode(l.subarray(a, b));
        for (var w = ""; a < b; ) {
          var P = l[a++];
          if (!(P & 128)) {
            w += String.fromCharCode(P);
            continue;
          }
          var T = l[a++] & 63;
          if ((P & 224) == 192) {
            w += String.fromCharCode((P & 31) << 6 | T);
            continue;
          }
          var I = l[a++] & 63;
          if ((P & 240) == 224 ? P = (P & 15) << 12 | T << 6 | I : P = (P & 7) << 18 | T << 12 | I << 6 | l[a++] & 63, P < 65536)
            w += String.fromCharCode(P);
          else {
            var X = P - 65536;
            w += String.fromCharCode(55296 | X >> 10, 56320 | X & 1023);
          }
        }
        return w;
      }, wd = (l, a) => l ? Aa(G, l, a) : "", Ad = (l, a) => {
        a = Me(a), Ot(l, {
          name: a,
          fromWireType(d) {
            for (var m = oe[d >> 2], b = d + 4, w, P, T = b, P = 0; P <= m; ++P) {
              var I = b + P;
              if (P == m || G[I] == 0) {
                var X = I - T, Y = wd(T, X);
                w === void 0 ? w = Y : (w += String.fromCharCode(0), w += Y), T = I + 1;
              }
            }
            return Zt(d), w;
          },
          toWireType(d, m) {
            m instanceof ArrayBuffer && (m = new Uint8Array(m));
            var b, w = typeof m == "string";
            w || m instanceof Uint8Array || m instanceof Uint8ClampedArray || m instanceof Int8Array || K("Cannot pass non-string to std::string"), w ? b = Td(m) : b = m.length;
            var P = $a(4 + b + 1), T = P + 4;
            if (oe[P >> 2] = b, w)
              pr(m, T, b + 1);
            else if (w)
              for (var I = 0; I < b; ++I) {
                var X = m.charCodeAt(I);
                X > 255 && (Zt(P), K("String has UTF-16 code units that do not fit in 8 bits")), G[T + I] = X;
              }
            else
              for (var I = 0; I < b; ++I)
                G[T + I] = m[I];
            return d !== null && d.push(Zt, P), P;
          },
          argPackAdvance: Ht,
          readValueFromPointer: is,
          destructorFunction(d) {
            Zt(d);
          }
        });
      }, Ca = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, Cd = (l, a) => {
        for (var d = l, m = d >> 1, b = m + a / 2; !(m >= b) && he[m]; )
          ++m;
        if (d = m << 1, d - l > 32 && Ca)
          return Ca.decode(G.subarray(l, d));
        for (var w = "", P = 0; !(P >= a / 2); ++P) {
          var T = ae[l + P * 2 >> 1];
          if (T == 0)
            break;
          w += String.fromCharCode(T);
        }
        return w;
      }, Sd = (l, a, d) => {
        if (d ??= 2147483647, d < 2)
          return 0;
        d -= 2;
        for (var m = a, b = d < l.length * 2 ? d / 2 : l.length, w = 0; w < b; ++w) {
          var P = l.charCodeAt(w);
          ae[a >> 1] = P, a += 2;
        }
        return ae[a >> 1] = 0, a - m;
      }, Od = (l) => l.length * 2, $d = (l, a) => {
        for (var d = 0, m = ""; !(d >= a / 4); ) {
          var b = le[l + d * 4 >> 2];
          if (b == 0)
            break;
          if (++d, b >= 65536) {
            var w = b - 65536;
            m += String.fromCharCode(55296 | w >> 10, 56320 | w & 1023);
          } else
            m += String.fromCharCode(b);
        }
        return m;
      }, Pd = (l, a, d) => {
        if (d ??= 2147483647, d < 4)
          return 0;
        for (var m = a, b = m + d - 4, w = 0; w < l.length; ++w) {
          var P = l.charCodeAt(w);
          if (P >= 55296 && P <= 57343) {
            var T = l.charCodeAt(++w);
            P = 65536 + ((P & 1023) << 10) | T & 1023;
          }
          if (le[a >> 2] = P, a += 4, a + 4 > b)
            break;
        }
        return le[a >> 2] = 0, a - m;
      }, Nd = (l) => {
        for (var a = 0, d = 0; d < l.length; ++d) {
          var m = l.charCodeAt(d);
          m >= 55296 && m <= 57343 && ++d, a += 4;
        }
        return a;
      }, Rd = (l, a, d) => {
        d = Me(d);
        var m, b, w, P;
        a === 2 ? (m = Cd, b = Sd, P = Od, w = (T) => he[T >> 1]) : a === 4 && (m = $d, b = Pd, P = Nd, w = (T) => oe[T >> 2]), Ot(l, {
          name: d,
          fromWireType: (T) => {
            for (var I = oe[T >> 2], X, Y = T + 4, ie = 0; ie <= I; ++ie) {
              var ge = T + 4 + ie * a;
              if (ie == I || w(ge) == 0) {
                var we = ge - Y, Oe = m(Y, we);
                X === void 0 ? X = Oe : (X += String.fromCharCode(0), X += Oe), Y = ge + a;
              }
            }
            return Zt(T), X;
          },
          toWireType: (T, I) => {
            typeof I != "string" && K(`Cannot pass non-string to C++ string type ${d}`);
            var X = P(I), Y = $a(4 + X + a);
            return oe[Y >> 2] = X / a, b(I, Y + 4, X + a), T !== null && T.push(Zt, Y), Y;
          },
          argPackAdvance: Ht,
          readValueFromPointer: is,
          destructorFunction(T) {
            Zt(T);
          }
        });
      }, xd = (l, a) => {
        a = Me(a), Ot(l, {
          isVoid: true,
          name: a,
          argPackAdvance: 0,
          fromWireType: () => {
          },
          toWireType: (d, m) => {
          }
        });
      }, ls = [], Dd = (l, a, d, m) => (l = ls[l], a = Se.toValue(a), l(null, a, d, m)), Id = {}, Ld = (l) => {
        var a = Id[l];
        return a === void 0 ? Me(l) : a;
      }, Md = (l, a, d, m, b) => (l = ls[l], a = Se.toValue(a), d = Ld(d), l(a, a[d], m, b)), kd = (l) => {
        var a = ls.length;
        return ls.push(l), a;
      }, Fd = (l, a) => {
        for (var d = new Array(l), m = 0; m < l; ++m)
          d[m] = li(oe[a + m * 4 >> 2], "parameter " + m);
        return d;
      }, Vd = (l, a, d) => {
        var m = [], b = l.toWireType(m, d);
        return m.length && (oe[a >> 2] = Se.toHandle(m)), b;
      }, Hd = (l, a, d) => {
        var m = Fd(l, a), b = m.shift();
        l--;
        var w = `return function (obj, func, destructorsRef, args) {
`, P = 0, T = [];
        d === 0 && T.push("obj");
        for (var I = [
          "retType"
        ], X = [
          b
        ], Y = 0; Y < l; ++Y)
          T.push("arg" + Y), I.push("argType" + Y), X.push(m[Y]), w += `  var arg${Y} = argType${Y}.readValueFromPointer(args${P ? "+" + P : ""});
`, P += m[Y].argPackAdvance;
        var ie = d === 1 ? "new func" : "func.call";
        w += `  var rv = ${ie}(${T.join(", ")});
`, b.isVoid || (I.push("emval_returnValue"), X.push(Vd), w += `  return emval_returnValue(retType, destructorsRef, rv);
`), w += `};
`, I.push(w);
        var ge = ya(Function, I)(...X), we = `methodCaller<(${m.map((Oe) => Oe.name).join(", ")}) => ${b.name}>`;
        return kd(Z(we, ge));
      }, jd = (l) => {
        l > 9 && (q[l + 1] += 1);
      }, Wd = (l) => {
        var a = Se.toValue(l);
        Ea(a), gi(l);
      }, Bd = (l, a) => {
        l = li(l, "_emval_take_value");
        var d = l.readValueFromPointer(a);
        return Se.toHandle(d);
      }, Ud = 9007199254740992, Kd = -9007199254740992, Sa = (l) => l < Kd || l > Ud ? NaN : Number(l);
      function zd(l, a) {
        l = Sa(l);
        var d = new Date(l * 1e3);
        le[a >> 2] = d.getUTCSeconds(), le[a + 4 >> 2] = d.getUTCMinutes(), le[a + 8 >> 2] = d.getUTCHours(), le[a + 12 >> 2] = d.getUTCDate(), le[a + 16 >> 2] = d.getUTCMonth(), le[a + 20 >> 2] = d.getUTCFullYear() - 1900, le[a + 24 >> 2] = d.getUTCDay();
        var m = Date.UTC(d.getUTCFullYear(), 0, 1, 0, 0, 0, 0), b = (d.getTime() - m) / (1e3 * 60 * 60 * 24) | 0;
        le[a + 28 >> 2] = b;
      }
      var Yd = (l) => l % 4 === 0 && (l % 100 !== 0 || l % 400 === 0), Gd = [
        0,
        31,
        60,
        91,
        121,
        152,
        182,
        213,
        244,
        274,
        305,
        335
      ], qd = [
        0,
        31,
        59,
        90,
        120,
        151,
        181,
        212,
        243,
        273,
        304,
        334
      ], Xd = (l) => {
        var a = Yd(l.getFullYear()), d = a ? Gd : qd, m = d[l.getMonth()] + l.getDate() - 1;
        return m;
      };
      function Jd(l, a) {
        l = Sa(l);
        var d = new Date(l * 1e3);
        le[a >> 2] = d.getSeconds(), le[a + 4 >> 2] = d.getMinutes(), le[a + 8 >> 2] = d.getHours(), le[a + 12 >> 2] = d.getDate(), le[a + 16 >> 2] = d.getMonth(), le[a + 20 >> 2] = d.getFullYear() - 1900, le[a + 24 >> 2] = d.getDay();
        var m = Xd(d) | 0;
        le[a + 28 >> 2] = m, le[a + 36 >> 2] = -(d.getTimezoneOffset() * 60);
        var b = new Date(d.getFullYear(), 0, 1), w = new Date(d.getFullYear(), 6, 1).getTimezoneOffset(), P = b.getTimezoneOffset(), T = (w != P && d.getTimezoneOffset() == Math.min(P, w)) | 0;
        le[a + 32 >> 2] = T;
      }
      var Qd = (l, a, d, m) => {
        var b = (/* @__PURE__ */ new Date()).getFullYear(), w = new Date(b, 0, 1), P = new Date(b, 6, 1), T = w.getTimezoneOffset(), I = P.getTimezoneOffset(), X = Math.max(T, I);
        oe[l >> 2] = X * 60, le[a >> 2] = +(T != I);
        var Y = (we) => {
          var Oe = we >= 0 ? "-" : "+", it = Math.abs(we), dt = String(Math.floor(it / 60)).padStart(2, "0"), ot = String(it % 60).padStart(2, "0");
          return `UTC${Oe}${dt}${ot}`;
        }, ie = Y(T), ge = Y(I);
        I < T ? (pr(ie, d, 17), pr(ge, m, 17)) : (pr(ie, m, 17), pr(ge, d, 17));
      }, Oa = () => performance.now(), Zd = () => Date.now(), eh = (l) => l >= 0 && l <= 3;
      function th(l, a, d) {
        if (!eh(l))
          return 28;
        var m;
        l === 0 ? m = Zd() : m = Oa();
        var b = Math.round(m * 1e3 * 1e3);
        return $e[d >> 3] = BigInt(b), 0;
      }
      var nh = () => 2147483648, rh = (l, a) => Math.ceil(l / a) * a, sh = (l) => {
        var a = se.buffer, d = (l - a.byteLength + 65535) / 65536 | 0;
        try {
          return se.grow(d), Be(), 1;
        } catch {
        }
      }, ih = (l) => {
        var a = G.length;
        l >>>= 0;
        var d = nh();
        if (l > d)
          return false;
        for (var m = 1; m <= 4; m *= 2) {
          var b = a * (1 + 0.2 / m);
          b = Math.min(b, l + 100663296);
          var w = Math.min(d, rh(Math.max(l, b), 65536)), P = sh(w);
          if (P)
            return true;
        }
        return false;
      }, _i = {}, oh = () => E || "./this.program", gr = () => {
        if (!gr.strings) {
          var l = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", a = {
            USER: "web_user",
            LOGNAME: "web_user",
            PATH: "/",
            PWD: "/",
            HOME: "/home/web_user",
            LANG: l,
            _: oh()
          };
          for (var d in _i)
            _i[d] === void 0 ? delete a[d] : a[d] = _i[d];
          var m = [];
          for (var d in a)
            m.push(`${d}=${a[d]}`);
          gr.strings = m;
        }
        return gr.strings;
      }, ah = (l, a) => {
        for (var d = 0; d < l.length; ++d)
          Q[a++] = l.charCodeAt(d);
        Q[a] = 0;
      }, lh = (l, a) => {
        var d = 0;
        return gr().forEach((m, b) => {
          var w = a + d;
          oe[l + b * 4 >> 2] = w, ah(m, w), d += m.length + 1;
        }), 0;
      }, ch = (l, a) => {
        var d = gr();
        oe[l >> 2] = d.length;
        var m = 0;
        return d.forEach((b) => m += b.length + 1), oe[a >> 2] = m, 0;
      }, uh = (l) => 52, fh = (l, a) => {
        var d = 0, m = 0, b = 0;
        {
          var w = 2;
          l == 0 ? d = 2 : (l == 1 || l == 2) && (d = 64), b = 1;
        }
        return Q[a] = w, ae[a + 2 >> 1] = b, $e[a + 8 >> 3] = BigInt(d), $e[a + 16 >> 3] = BigInt(m), 0;
      };
      function dh(l, a, d, m) {
        return 70;
      }
      var hh = [
        null,
        [],
        []
      ], ph = (l, a) => {
        var d = hh[l];
        a === 0 || a === 10 ? ((l === 1 ? j : $)(Aa(d)), d.length = 0) : d.push(a);
      }, gh = (l, a, d, m) => {
        for (var b = 0, w = 0; w < d; w++) {
          var P = oe[a >> 2], T = oe[a + 4 >> 2];
          a += 8;
          for (var I = 0; I < T; I++)
            ph(l, G[P + I]);
          b += T;
        }
        return oe[m >> 2] = b, 0;
      };
      ne = r.BindingError = class extends Error {
        constructor(a) {
          super(a), this.name = "BindingError";
        }
      }, ve(), et = r.PureVirtualError = Le(Error, "PureVirtualError"), ze(), pa = r.InternalError = class extends Error {
        constructor(a) {
          super(a), this.name = "InternalError";
        }
      }, Jf(), od(), va = r.UnboundTypeError = Le(Error, "UnboundTypeError");
      var _h = {
        w: D,
        H: Kf,
        n: Yf,
        u: Gf,
        d: cd,
        c: fd,
        s: dd,
        h: hd,
        I: gd,
        m: md,
        g: vd,
        a: Ed,
        q: bd,
        t: Ad,
        l: Rd,
        v: xd,
        k: Dd,
        i: Md,
        b: gi,
        f: Hd,
        j: jd,
        e: Wd,
        r: Bd,
        z: zd,
        A: Jd,
        B: Qd,
        x: th,
        o: Oa,
        y: ih,
        E: lh,
        F: ch,
        G: uh,
        D: fh,
        C: dh,
        p: gh
      }, $t = await O();
      $t.K;
      var mh = $t.L, $a = r._malloc = $t.N, Zt = r._free = $t.O, vh = $t.P;
      function mi() {
        if (Re > 0) {
          Ie = mi;
          return;
        }
        if (Ue(), Re > 0) {
          Ie = mi;
          return;
        }
        function l() {
          r.calledRun = true, !te && (Ne(), s(r), r.onRuntimeInitialized?.(), st());
        }
        r.setStatus ? (r.setStatus("Running..."), setTimeout(() => {
          setTimeout(() => r.setStatus(""), 1), l();
        }, 1)) : l();
      }
      if (r.preInit)
        for (typeof r.preInit == "function" && (r.preInit = [
          r.preInit
        ]); r.preInit.length > 0; )
          r.preInit.pop()();
      return mi(), n = o, n;
    };
  })();
  let yy;
  by = Qg("wasm-module", {
    state: () => ({
      loaded: false
    }),
    getters: {
      isLoaded: (t) => t.loaded
    },
    actions: {
      setLoaded(t) {
        this.loaded = t;
      }
    }
  });
  yy = {
    install: () => {
      Ey().then((t) => {
        new Promise((e) => setTimeout(e, 300)).then(() => {
          const e = by();
          qe.shared().initialize(t, new hy(new _y())), dy.initialize(), e.setLoaded(true);
        });
      });
    }
  };
  const zn = typeof document < "u";
  function $f(t) {
    return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t;
  }
  function Ty(t) {
    return t.__esModule || t[Symbol.toStringTag] === "Module" || t.default && $f(t.default);
  }
  const Ee = Object.assign;
  function Yi(t, e) {
    const n = {};
    for (const r in e) {
      const s = e[r];
      n[r] = Ct(s) ? s.map(t) : t(s);
    }
    return n;
  }
  const xr = () => {
  }, Ct = Array.isArray, Pf = /#/g, wy = /&/g, Ay = /\//g, Cy = /=/g, Sy = /\?/g, Nf = /\+/g, Oy = /%5B/g, $y = /%5D/g, Rf = /%5E/g, Py = /%60/g, xf = /%7B/g, Ny = /%7C/g, Df = /%7D/g, Ry = /%20/g;
  function la(t) {
    return encodeURI("" + t).replace(Ny, "|").replace(Oy, "[").replace($y, "]");
  }
  function xy(t) {
    return la(t).replace(xf, "{").replace(Df, "}").replace(Rf, "^");
  }
  function Eo(t) {
    return la(t).replace(Nf, "%2B").replace(Ry, "+").replace(Pf, "%23").replace(wy, "%26").replace(Py, "`").replace(xf, "{").replace(Df, "}").replace(Rf, "^");
  }
  function Dy(t) {
    return Eo(t).replace(Cy, "%3D");
  }
  function Iy(t) {
    return la(t).replace(Pf, "%23").replace(Sy, "%3F");
  }
  function Ly(t) {
    return t == null ? "" : Iy(t).replace(Ay, "%2F");
  }
  function Hr(t) {
    try {
      return decodeURIComponent("" + t);
    } catch {
    }
    return "" + t;
  }
  const My = /\/$/, ky = (t) => t.replace(My, "");
  function Gi(t, e, n = "/") {
    let r, s = {}, i = "", o = "";
    const c = e.indexOf("#");
    let u = e.indexOf("?");
    return c < u && c >= 0 && (u = -1), u > -1 && (r = e.slice(0, u), i = e.slice(u + 1, c > -1 ? c : e.length), s = t(i)), c > -1 && (r = r || e.slice(0, c), o = e.slice(c, e.length)), r = jy(r ?? e, n), {
      fullPath: r + (i && "?") + i + o,
      path: r,
      query: s,
      hash: Hr(o)
    };
  }
  function Fy(t, e) {
    const n = e.query ? t(e.query) : "";
    return e.path + (n && "?") + n + (e.hash || "");
  }
  function ql(t, e) {
    return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/";
  }
  function Vy(t, e, n) {
    const r = e.matched.length - 1, s = n.matched.length - 1;
    return r > -1 && r === s && ar(e.matched[r], n.matched[s]) && If(e.params, n.params) && t(e.query) === t(n.query) && e.hash === n.hash;
  }
  function ar(t, e) {
    return (t.aliasOf || t) === (e.aliasOf || e);
  }
  function If(t, e) {
    if (Object.keys(t).length !== Object.keys(e).length)
      return false;
    for (const n in t)
      if (!Hy(t[n], e[n]))
        return false;
    return true;
  }
  function Hy(t, e) {
    return Ct(t) ? Xl(t, e) : Ct(e) ? Xl(e, t) : t === e;
  }
  function Xl(t, e) {
    return Ct(e) ? t.length === e.length && t.every((n, r) => n === e[r]) : t.length === 1 && t[0] === e;
  }
  function jy(t, e) {
    if (t.startsWith("/"))
      return t;
    if (!t)
      return e;
    const n = e.split("/"), r = t.split("/"), s = r[r.length - 1];
    (s === ".." || s === ".") && r.push("");
    let i = n.length - 1, o, c;
    for (o = 0; o < r.length; o++)
      if (c = r[o], c !== ".")
        if (c === "..")
          i > 1 && i--;
        else
          break;
    return n.slice(0, i).join("/") + "/" + r.slice(o).join("/");
  }
  const tn = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  var jr;
  (function(t) {
    t.pop = "pop", t.push = "push";
  })(jr || (jr = {}));
  var Dr;
  (function(t) {
    t.back = "back", t.forward = "forward", t.unknown = "";
  })(Dr || (Dr = {}));
  function Wy(t) {
    if (!t)
      if (zn) {
        const e = document.querySelector("base");
        t = e && e.getAttribute("href") || "/", t = t.replace(/^\w+:\/\/[^\/]+/, "");
      } else
        t = "/";
    return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), ky(t);
  }
  const By = /^[^#]+#/;
  function Uy(t, e) {
    return t.replace(By, "#") + e;
  }
  function Ky(t, e) {
    const n = document.documentElement.getBoundingClientRect(), r = t.getBoundingClientRect();
    return {
      behavior: e.behavior,
      left: r.left - n.left - (e.left || 0),
      top: r.top - n.top - (e.top || 0)
    };
  }
  const oi = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function zy(t) {
    let e;
    if ("el" in t) {
      const n = t.el, r = typeof n == "string" && n.startsWith("#"), s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
      if (!s)
        return;
      e = Ky(s, t);
    } else
      e = t;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.scrollX, e.top != null ? e.top : window.scrollY);
  }
  function Jl(t, e) {
    return (history.state ? history.state.position - e : -1) + t;
  }
  const bo = /* @__PURE__ */ new Map();
  function Yy(t, e) {
    bo.set(t, e);
  }
  function Gy(t) {
    const e = bo.get(t);
    return bo.delete(t), e;
  }
  let qy = () => location.protocol + "//" + location.host;
  function Lf(t, e) {
    const { pathname: n, search: r, hash: s } = e, i = t.indexOf("#");
    if (i > -1) {
      let c = s.includes(t.slice(i)) ? t.slice(i).length : 1, u = s.slice(c);
      return u[0] !== "/" && (u = "/" + u), ql(u, "");
    }
    return ql(n, t) + r + s;
  }
  function Xy(t, e, n, r) {
    let s = [], i = [], o = null;
    const c = ({ state: E }) => {
      const v = Lf(t, location), R = n.value, S = e.value;
      let k = 0;
      if (E) {
        if (n.value = v, e.value = E, o && o === R) {
          o = null;
          return;
        }
        k = S ? E.position - S.position : 0;
      } else
        r(v);
      s.forEach((F) => {
        F(n.value, R, {
          delta: k,
          type: jr.pop,
          direction: k ? k > 0 ? Dr.forward : Dr.back : Dr.unknown
        });
      });
    };
    function u() {
      o = n.value;
    }
    function h(E) {
      s.push(E);
      const v = () => {
        const R = s.indexOf(E);
        R > -1 && s.splice(R, 1);
      };
      return i.push(v), v;
    }
    function f() {
      const { history: E } = window;
      E.state && E.replaceState(Ee({}, E.state, {
        scroll: oi()
      }), "");
    }
    function g() {
      for (const E of i)
        E();
      i = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", f);
    }
    return window.addEventListener("popstate", c), window.addEventListener("beforeunload", f, {
      passive: true
    }), {
      pauseListeners: u,
      listen: h,
      destroy: g
    };
  }
  function Ql(t, e, n, r = false, s = false) {
    return {
      back: t,
      current: e,
      forward: n,
      replaced: r,
      position: window.history.length,
      scroll: s ? oi() : null
    };
  }
  function Jy(t) {
    const { history: e, location: n } = window, r = {
      value: Lf(t, n)
    }, s = {
      value: e.state
    };
    s.value || i(r.value, {
      back: null,
      current: r.value,
      forward: null,
      position: e.length - 1,
      replaced: true,
      scroll: null
    }, true);
    function i(u, h, f) {
      const g = t.indexOf("#"), E = g > -1 ? (n.host && document.querySelector("base") ? t : t.slice(g)) + u : qy() + t + u;
      try {
        e[f ? "replaceState" : "pushState"](h, "", E), s.value = h;
      } catch (v) {
        console.error(v), n[f ? "replace" : "assign"](E);
      }
    }
    function o(u, h) {
      const f = Ee({}, e.state, Ql(s.value.back, u, s.value.forward, true), h, {
        position: s.value.position
      });
      i(u, f, true), r.value = u;
    }
    function c(u, h) {
      const f = Ee({}, s.value, e.state, {
        forward: u,
        scroll: oi()
      });
      i(f.current, f, true);
      const g = Ee({}, Ql(r.value, u, null), {
        position: f.position + 1
      }, h);
      i(u, g, false), r.value = u;
    }
    return {
      location: r,
      state: s,
      push: c,
      replace: o
    };
  }
  function Qy(t) {
    t = Wy(t);
    const e = Jy(t), n = Xy(t, e.state, e.location, e.replace);
    function r(i, o = true) {
      o || n.pauseListeners(), history.go(i);
    }
    const s = Ee({
      location: "",
      base: t,
      go: r,
      createHref: Uy.bind(null, t)
    }, e, n);
    return Object.defineProperty(s, "location", {
      enumerable: true,
      get: () => e.location.value
    }), Object.defineProperty(s, "state", {
      enumerable: true,
      get: () => e.state.value
    }), s;
  }
  function Zy(t) {
    return typeof t == "string" || t && typeof t == "object";
  }
  function Mf(t) {
    return typeof t == "string" || typeof t == "symbol";
  }
  const kf = Symbol("");
  var Zl;
  (function(t) {
    t[t.aborted = 4] = "aborted", t[t.cancelled = 8] = "cancelled", t[t.duplicated = 16] = "duplicated";
  })(Zl || (Zl = {}));
  function lr(t, e) {
    return Ee(new Error(), {
      type: t,
      [kf]: true
    }, e);
  }
  function Wt(t, e) {
    return t instanceof Error && kf in t && (e == null || !!(t.type & e));
  }
  const ec = "[^/]+?", eT = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  }, tT = /[.+*?^${}()[\]/\\]/g;
  function nT(t, e) {
    const n = Ee({}, eT, e), r = [];
    let s = n.start ? "^" : "";
    const i = [];
    for (const h of t) {
      const f = h.length ? [] : [
        90
      ];
      n.strict && !h.length && (s += "/");
      for (let g = 0; g < h.length; g++) {
        const E = h[g];
        let v = 40 + (n.sensitive ? 0.25 : 0);
        if (E.type === 0)
          g || (s += "/"), s += E.value.replace(tT, "\\$&"), v += 40;
        else if (E.type === 1) {
          const { value: R, repeatable: S, optional: k, regexp: F } = E;
          i.push({
            name: R,
            repeatable: S,
            optional: k
          });
          const V = F || ec;
          if (V !== ec) {
            v += 10;
            try {
              new RegExp(`(${V})`);
            } catch ($) {
              throw new Error(`Invalid custom RegExp for param "${R}" (${V}): ` + $.message);
            }
          }
          let j = S ? `((?:${V})(?:/(?:${V}))*)` : `(${V})`;
          g || (j = k && h.length < 2 ? `(?:/${j})` : "/" + j), k && (j += "?"), s += j, v += 20, k && (v += -8), S && (v += -20), V === ".*" && (v += -50);
        }
        f.push(v);
      }
      r.push(f);
    }
    if (n.strict && n.end) {
      const h = r.length - 1;
      r[h][r[h].length - 1] += 0.7000000000000001;
    }
    n.strict || (s += "/?"), n.end ? s += "$" : n.strict && !s.endsWith("/") && (s += "(?:/|$)");
    const o = new RegExp(s, n.sensitive ? "" : "i");
    function c(h) {
      const f = h.match(o), g = {};
      if (!f)
        return null;
      for (let E = 1; E < f.length; E++) {
        const v = f[E] || "", R = i[E - 1];
        g[R.name] = v && R.repeatable ? v.split("/") : v;
      }
      return g;
    }
    function u(h) {
      let f = "", g = false;
      for (const E of t) {
        (!g || !f.endsWith("/")) && (f += "/"), g = false;
        for (const v of E)
          if (v.type === 0)
            f += v.value;
          else if (v.type === 1) {
            const { value: R, repeatable: S, optional: k } = v, F = R in h ? h[R] : "";
            if (Ct(F) && !S)
              throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);
            const V = Ct(F) ? F.join("/") : F;
            if (!V)
              if (k)
                E.length < 2 && (f.endsWith("/") ? f = f.slice(0, -1) : g = true);
              else
                throw new Error(`Missing required param "${R}"`);
            f += V;
          }
      }
      return f || "/";
    }
    return {
      re: o,
      score: r,
      keys: i,
      parse: c,
      stringify: u
    };
  }
  function rT(t, e) {
    let n = 0;
    for (; n < t.length && n < e.length; ) {
      const r = e[n] - t[n];
      if (r)
        return r;
      n++;
    }
    return t.length < e.length ? t.length === 1 && t[0] === 40 + 40 ? -1 : 1 : t.length > e.length ? e.length === 1 && e[0] === 40 + 40 ? 1 : -1 : 0;
  }
  function Ff(t, e) {
    let n = 0;
    const r = t.score, s = e.score;
    for (; n < r.length && n < s.length; ) {
      const i = rT(r[n], s[n]);
      if (i)
        return i;
      n++;
    }
    if (Math.abs(s.length - r.length) === 1) {
      if (tc(r))
        return 1;
      if (tc(s))
        return -1;
    }
    return s.length - r.length;
  }
  function tc(t) {
    const e = t[t.length - 1];
    return t.length > 0 && e[e.length - 1] < 0;
  }
  const sT = {
    type: 0,
    value: ""
  }, iT = /[a-zA-Z0-9_]/;
  function oT(t) {
    if (!t)
      return [
        []
      ];
    if (t === "/")
      return [
        [
          sT
        ]
      ];
    if (!t.startsWith("/"))
      throw new Error(`Invalid path "${t}"`);
    function e(v) {
      throw new Error(`ERR (${n})/"${h}": ${v}`);
    }
    let n = 0, r = n;
    const s = [];
    let i;
    function o() {
      i && s.push(i), i = [];
    }
    let c = 0, u, h = "", f = "";
    function g() {
      h && (n === 0 ? i.push({
        type: 0,
        value: h
      }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (u === "*" || u === "+") && e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`), i.push({
        type: 1,
        value: h,
        regexp: f,
        repeatable: u === "*" || u === "+",
        optional: u === "*" || u === "?"
      })) : e("Invalid state to consume buffer"), h = "");
    }
    function E() {
      h += u;
    }
    for (; c < t.length; ) {
      if (u = t[c++], u === "\\" && n !== 2) {
        r = n, n = 4;
        continue;
      }
      switch (n) {
        case 0:
          u === "/" ? (h && g(), o()) : u === ":" ? (g(), n = 1) : E();
          break;
        case 4:
          E(), n = r;
          break;
        case 1:
          u === "(" ? n = 2 : iT.test(u) ? E() : (g(), n = 0, u !== "*" && u !== "?" && u !== "+" && c--);
          break;
        case 2:
          u === ")" ? f[f.length - 1] == "\\" ? f = f.slice(0, -1) + u : n = 3 : f += u;
          break;
        case 3:
          g(), n = 0, u !== "*" && u !== "?" && u !== "+" && c--, f = "";
          break;
        default:
          e("Unknown state");
          break;
      }
    }
    return n === 2 && e(`Unfinished custom RegExp for param "${h}"`), g(), o(), s;
  }
  function aT(t, e, n) {
    const r = nT(oT(t.path), n), s = Ee(r, {
      record: t,
      parent: e,
      children: [],
      alias: []
    });
    return e && !s.record.aliasOf == !e.record.aliasOf && e.children.push(s), s;
  }
  function lT(t, e) {
    const n = [], r = /* @__PURE__ */ new Map();
    e = ic({
      strict: false,
      end: true,
      sensitive: false
    }, e);
    function s(g) {
      return r.get(g);
    }
    function i(g, E, v) {
      const R = !v, S = rc(g);
      S.aliasOf = v && v.record;
      const k = ic(e, g), F = [
        S
      ];
      if ("alias" in g) {
        const $ = typeof g.alias == "string" ? [
          g.alias
        ] : g.alias;
        for (const z of $)
          F.push(rc(Ee({}, S, {
            components: v ? v.record.components : S.components,
            path: z,
            aliasOf: v ? v.record : S
          })));
      }
      let V, j;
      for (const $ of F) {
        const { path: z } = $;
        if (E && z[0] !== "/") {
          const se = E.record.path, te = se[se.length - 1] === "/" ? "" : "/";
          $.path = E.record.path + (z && te + z);
        }
        if (V = aT($, E, k), v ? v.alias.push(V) : (j = j || V, j !== V && j.alias.push(V), R && g.name && !sc(V) && o(g.name)), Vf(V) && u(V), S.children) {
          const se = S.children;
          for (let te = 0; te < se.length; te++)
            i(se[te], V, v && v.children[te]);
        }
        v = v || V;
      }
      return j ? () => {
        o(j);
      } : xr;
    }
    function o(g) {
      if (Mf(g)) {
        const E = r.get(g);
        E && (r.delete(g), n.splice(n.indexOf(E), 1), E.children.forEach(o), E.alias.forEach(o));
      } else {
        const E = n.indexOf(g);
        E > -1 && (n.splice(E, 1), g.record.name && r.delete(g.record.name), g.children.forEach(o), g.alias.forEach(o));
      }
    }
    function c() {
      return n;
    }
    function u(g) {
      const E = fT(g, n);
      n.splice(E, 0, g), g.record.name && !sc(g) && r.set(g.record.name, g);
    }
    function h(g, E) {
      let v, R = {}, S, k;
      if ("name" in g && g.name) {
        if (v = r.get(g.name), !v)
          throw lr(1, {
            location: g
          });
        k = v.record.name, R = Ee(nc(E.params, v.keys.filter((j) => !j.optional).concat(v.parent ? v.parent.keys.filter((j) => j.optional) : []).map((j) => j.name)), g.params && nc(g.params, v.keys.map((j) => j.name))), S = v.stringify(R);
      } else if (g.path != null)
        S = g.path, v = n.find((j) => j.re.test(S)), v && (R = v.parse(S), k = v.record.name);
      else {
        if (v = E.name ? r.get(E.name) : n.find((j) => j.re.test(E.path)), !v)
          throw lr(1, {
            location: g,
            currentLocation: E
          });
        k = v.record.name, R = Ee({}, E.params, g.params), S = v.stringify(R);
      }
      const F = [];
      let V = v;
      for (; V; )
        F.unshift(V.record), V = V.parent;
      return {
        name: k,
        path: S,
        params: R,
        matched: F,
        meta: uT(F)
      };
    }
    t.forEach((g) => i(g));
    function f() {
      n.length = 0, r.clear();
    }
    return {
      addRoute: i,
      resolve: h,
      removeRoute: o,
      clearRoutes: f,
      getRoutes: c,
      getRecordMatcher: s
    };
  }
  function nc(t, e) {
    const n = {};
    for (const r of e)
      r in t && (n[r] = t[r]);
    return n;
  }
  function rc(t) {
    const e = {
      path: t.path,
      redirect: t.redirect,
      name: t.name,
      meta: t.meta || {},
      aliasOf: t.aliasOf,
      beforeEnter: t.beforeEnter,
      props: cT(t),
      children: t.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in t ? t.components || null : t.component && {
        default: t.component
      }
    };
    return Object.defineProperty(e, "mods", {
      value: {}
    }), e;
  }
  function cT(t) {
    const e = {}, n = t.props || false;
    if ("component" in t)
      e.default = n;
    else
      for (const r in t.components)
        e[r] = typeof n == "object" ? n[r] : n;
    return e;
  }
  function sc(t) {
    for (; t; ) {
      if (t.record.aliasOf)
        return true;
      t = t.parent;
    }
    return false;
  }
  function uT(t) {
    return t.reduce((e, n) => Ee(e, n.meta), {});
  }
  function ic(t, e) {
    const n = {};
    for (const r in t)
      n[r] = r in e ? e[r] : t[r];
    return n;
  }
  function fT(t, e) {
    let n = 0, r = e.length;
    for (; n !== r; ) {
      const i = n + r >> 1;
      Ff(t, e[i]) < 0 ? r = i : n = i + 1;
    }
    const s = dT(t);
    return s && (r = e.lastIndexOf(s, r - 1)), r;
  }
  function dT(t) {
    let e = t;
    for (; e = e.parent; )
      if (Vf(e) && Ff(t, e) === 0)
        return e;
  }
  function Vf({ record: t }) {
    return !!(t.name || t.components && Object.keys(t.components).length || t.redirect);
  }
  function hT(t) {
    const e = {};
    if (t === "" || t === "?")
      return e;
    const r = (t[0] === "?" ? t.slice(1) : t).split("&");
    for (let s = 0; s < r.length; ++s) {
      const i = r[s].replace(Nf, " "), o = i.indexOf("="), c = Hr(o < 0 ? i : i.slice(0, o)), u = o < 0 ? null : Hr(i.slice(o + 1));
      if (c in e) {
        let h = e[c];
        Ct(h) || (h = e[c] = [
          h
        ]), h.push(u);
      } else
        e[c] = u;
    }
    return e;
  }
  function oc(t) {
    let e = "";
    for (let n in t) {
      const r = t[n];
      if (n = Dy(n), r == null) {
        r !== void 0 && (e += (e.length ? "&" : "") + n);
        continue;
      }
      (Ct(r) ? r.map((i) => i && Eo(i)) : [
        r && Eo(r)
      ]).forEach((i) => {
        i !== void 0 && (e += (e.length ? "&" : "") + n, i != null && (e += "=" + i));
      });
    }
    return e;
  }
  function pT(t) {
    const e = {};
    for (const n in t) {
      const r = t[n];
      r !== void 0 && (e[n] = Ct(r) ? r.map((s) => s == null ? null : "" + s) : r == null ? r : "" + r);
    }
    return e;
  }
  const gT = Symbol(""), ac = Symbol(""), ca = Symbol(""), Hf = Symbol(""), yo = Symbol("");
  function br() {
    let t = [];
    function e(r) {
      return t.push(r), () => {
        const s = t.indexOf(r);
        s > -1 && t.splice(s, 1);
      };
    }
    function n() {
      t = [];
    }
    return {
      add: e,
      list: () => t.slice(),
      reset: n
    };
  }
  function on(t, e, n, r, s, i = (o) => o()) {
    const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return () => new Promise((c, u) => {
      const h = (E) => {
        E === false ? u(lr(4, {
          from: n,
          to: e
        })) : E instanceof Error ? u(E) : Zy(E) ? u(lr(2, {
          from: e,
          to: E
        })) : (o && r.enterCallbacks[s] === o && typeof E == "function" && o.push(E), c());
      }, f = i(() => t.call(r && r.instances[s], e, n, h));
      let g = Promise.resolve(f);
      t.length < 3 && (g = g.then(h)), g.catch((E) => u(E));
    });
  }
  function qi(t, e, n, r, s = (i) => i()) {
    const i = [];
    for (const o of t)
      for (const c in o.components) {
        let u = o.components[c];
        if (!(e !== "beforeRouteEnter" && !o.instances[c]))
          if ($f(u)) {
            const f = (u.__vccOpts || u)[e];
            f && i.push(on(f, n, r, o, c, s));
          } else {
            let h = u();
            i.push(() => h.then((f) => {
              if (!f)
                throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);
              const g = Ty(f) ? f.default : f;
              o.mods[c] = f, o.components[c] = g;
              const v = (g.__vccOpts || g)[e];
              return v && on(v, n, r, o, c, s)();
            }));
          }
      }
    return i;
  }
  function lc(t) {
    const e = It(ca), n = It(Hf), r = ht(() => {
      const u = Xn(t.to);
      return e.resolve(u);
    }), s = ht(() => {
      const { matched: u } = r.value, { length: h } = u, f = u[h - 1], g = n.matched;
      if (!f || !g.length)
        return -1;
      const E = g.findIndex(ar.bind(null, f));
      if (E > -1)
        return E;
      const v = cc(u[h - 2]);
      return h > 1 && cc(f) === v && g[g.length - 1].path !== v ? g.findIndex(ar.bind(null, u[h - 2])) : E;
    }), i = ht(() => s.value > -1 && bT(n.params, r.value.params)), o = ht(() => s.value > -1 && s.value === n.matched.length - 1 && If(n.params, r.value.params));
    function c(u = {}) {
      if (ET(u)) {
        const h = e[Xn(t.replace) ? "replace" : "push"](Xn(t.to)).catch(xr);
        return t.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => h), h;
      }
      return Promise.resolve();
    }
    return {
      route: r,
      href: ht(() => r.value.href),
      isActive: i,
      isExactActive: o,
      navigate: c
    };
  }
  function _T(t) {
    return t.length === 1 ? t[0] : t;
  }
  const mT = zc({
    name: "RouterLink",
    compatConfig: {
      MODE: 3
    },
    props: {
      to: {
        type: [
          String,
          Object
        ],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink: lc,
    setup(t, { slots: e }) {
      const n = Br(lc(t)), { options: r } = It(ca), s = ht(() => ({
        [uc(t.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
        [uc(t.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
      }));
      return () => {
        const i = e.default && _T(e.default(n));
        return t.custom ? i : bu("a", {
          "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: s.value
        }, i);
      };
    }
  }), vT = mT;
  function ET(t) {
    if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
      if (t.currentTarget && t.currentTarget.getAttribute) {
        const e = t.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(e))
          return;
      }
      return t.preventDefault && t.preventDefault(), true;
    }
  }
  function bT(t, e) {
    for (const n in e) {
      const r = e[n], s = t[n];
      if (typeof r == "string") {
        if (r !== s)
          return false;
      } else if (!Ct(s) || s.length !== r.length || r.some((i, o) => i !== s[o]))
        return false;
    }
    return true;
  }
  function cc(t) {
    return t ? t.aliasOf ? t.aliasOf.path : t.path : "";
  }
  const uc = (t, e, n) => t ?? e ?? n, yT = zc({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: {
      MODE: 3
    },
    setup(t, { attrs: e, slots: n }) {
      const r = It(yo), s = ht(() => t.route || r.value), i = It(ac, 0), o = ht(() => {
        let h = Xn(i);
        const { matched: f } = s.value;
        let g;
        for (; (g = f[h]) && !g.components; )
          h++;
        return h;
      }), c = ht(() => s.value.matched[o.value]);
      ys(ac, ht(() => o.value + 1)), ys(gT, c), ys(yo, s);
      const u = ko();
      return Or(() => [
        u.value,
        c.value,
        t.name
      ], ([h, f, g], [E, v, R]) => {
        f && (f.instances[g] = h, v && v !== f && h && h === E && (f.leaveGuards.size || (f.leaveGuards = v.leaveGuards), f.updateGuards.size || (f.updateGuards = v.updateGuards))), h && f && (!v || !ar(f, v) || !E) && (f.enterCallbacks[g] || []).forEach((S) => S(h));
      }, {
        flush: "post"
      }), () => {
        const h = s.value, f = t.name, g = c.value, E = g && g.components[f];
        if (!E)
          return fc(n.default, {
            Component: E,
            route: h
          });
        const v = g.props[f], R = v ? v === true ? h.params : typeof v == "function" ? v(h) : v : null, k = bu(E, Ee({}, R, e, {
          onVnodeUnmounted: (F) => {
            F.component.isUnmounted && (g.instances[f] = null);
          },
          ref: u
        }));
        return fc(n.default, {
          Component: k,
          route: h
        }) || k;
      };
    }
  });
  function fc(t, e) {
    if (!t)
      return null;
    const n = t(e);
    return n.length === 1 ? n[0] : n;
  }
  const TT = yT;
  function wT(t) {
    const e = lT(t.routes, t), n = t.parseQuery || hT, r = t.stringifyQuery || oc, s = t.history, i = br(), o = br(), c = br(), u = Zh(tn);
    let h = tn;
    zn && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const f = Yi.bind(null, (C) => "" + C), g = Yi.bind(null, Ly), E = Yi.bind(null, Hr);
    function v(C, W) {
      let H, J;
      return Mf(C) ? (H = e.getRecordMatcher(C), J = W) : J = C, e.addRoute(J, H);
    }
    function R(C) {
      const W = e.getRecordMatcher(C);
      W && e.removeRoute(W);
    }
    function S() {
      return e.getRoutes().map((C) => C.record);
    }
    function k(C) {
      return !!e.getRecordMatcher(C);
    }
    function F(C, W) {
      if (W = Ee({}, W || u.value), typeof C == "string") {
        const _ = Gi(n, C, W.path), y = e.resolve({
          path: _.path
        }, W), O = s.createHref(_.fullPath);
        return Ee(_, y, {
          params: E(y.params),
          hash: Hr(_.hash),
          redirectedFrom: void 0,
          href: O
        });
      }
      let H;
      if (C.path != null)
        H = Ee({}, C, {
          path: Gi(n, C.path, W.path).path
        });
      else {
        const _ = Ee({}, C.params);
        for (const y in _)
          _[y] == null && delete _[y];
        H = Ee({}, C, {
          params: g(_)
        }), W.params = g(W.params);
      }
      const J = e.resolve(H, W), pe = C.hash || "";
      J.params = f(E(J.params));
      const ye = Fy(r, Ee({}, C, {
        hash: xy(pe),
        path: J.path
      })), p = s.createHref(ye);
      return Ee({
        fullPath: ye,
        hash: pe,
        query: r === oc ? pT(C.query) : C.query || {}
      }, J, {
        redirectedFrom: void 0,
        href: p
      });
    }
    function V(C) {
      return typeof C == "string" ? Gi(n, C, u.value.path) : Ee({}, C);
    }
    function j(C, W) {
      if (h !== C)
        return lr(8, {
          from: W,
          to: C
        });
    }
    function $(C) {
      return te(C);
    }
    function z(C) {
      return $(Ee(V(C), {
        replace: true
      }));
    }
    function se(C) {
      const W = C.matched[C.matched.length - 1];
      if (W && W.redirect) {
        const { redirect: H } = W;
        let J = typeof H == "function" ? H(C) : H;
        return typeof J == "string" && (J = J.includes("?") || J.includes("#") ? J = V(J) : {
          path: J
        }, J.params = {}), Ee({
          query: C.query,
          hash: C.hash,
          params: J.path != null ? {} : C.params
        }, J);
      }
    }
    function te(C, W) {
      const H = h = F(C), J = u.value, pe = C.state, ye = C.force, p = C.replace === true, _ = se(H);
      if (_)
        return te(Ee(V(_), {
          state: typeof _ == "object" ? Ee({}, pe, _.state) : pe,
          force: ye,
          replace: p
        }), W || H);
      const y = H;
      y.redirectedFrom = W;
      let O;
      return !ye && Vy(r, J, H) && (O = lr(16, {
        to: y,
        from: J
      }), Ue(J, J, true, false)), (O ? Promise.resolve(O) : ae(y, J)).catch((A) => Wt(A) ? Wt(A, 2) ? A : Be(A) : de(A, y, J)).then((A) => {
        if (A) {
          if (Wt(A, 2))
            return te(Ee({
              replace: p
            }, V(A.to), {
              state: typeof A.to == "object" ? Ee({}, pe, A.to.state) : pe,
              force: ye
            }), W || y);
        } else
          A = le(y, J, true, p, pe);
        return he(y, J, A), A;
      });
    }
    function Q(C, W) {
      const H = j(C, W);
      return H ? Promise.reject(H) : Promise.resolve();
    }
    function G(C) {
      const W = Re.values().next().value;
      return W && typeof W.runWithContext == "function" ? W.runWithContext(C) : C();
    }
    function ae(C, W) {
      let H;
      const [J, pe, ye] = AT(C, W);
      H = qi(J.reverse(), "beforeRouteLeave", C, W);
      for (const _ of J)
        _.leaveGuards.forEach((y) => {
          H.push(on(y, C, W));
        });
      const p = Q.bind(null, C, W);
      return H.push(p), De(H).then(() => {
        H = [];
        for (const _ of i.list())
          H.push(on(_, C, W));
        return H.push(p), De(H);
      }).then(() => {
        H = qi(pe, "beforeRouteUpdate", C, W);
        for (const _ of pe)
          _.updateGuards.forEach((y) => {
            H.push(on(y, C, W));
          });
        return H.push(p), De(H);
      }).then(() => {
        H = [];
        for (const _ of ye)
          if (_.beforeEnter)
            if (Ct(_.beforeEnter))
              for (const y of _.beforeEnter)
                H.push(on(y, C, W));
            else
              H.push(on(_.beforeEnter, C, W));
        return H.push(p), De(H);
      }).then(() => (C.matched.forEach((_) => _.enterCallbacks = {}), H = qi(ye, "beforeRouteEnter", C, W, G), H.push(p), De(H))).then(() => {
        H = [];
        for (const _ of o.list())
          H.push(on(_, C, W));
        return H.push(p), De(H);
      }).catch((_) => Wt(_, 8) ? _ : Promise.reject(_));
    }
    function he(C, W, H) {
      c.list().forEach((J) => G(() => J(C, W, H)));
    }
    function le(C, W, H, J, pe) {
      const ye = j(C, W);
      if (ye)
        return ye;
      const p = W === tn, _ = zn ? history.state : {};
      H && (J || p ? s.replace(C.fullPath, Ee({
        scroll: p && _ && _.scroll
      }, pe)) : s.push(C.fullPath, pe)), u.value = C, Ue(C, W, H, p), Be();
    }
    let oe;
    function Ve() {
      oe || (oe = s.listen((C, W, H) => {
        if (!Ie.listening)
          return;
        const J = F(C), pe = se(J);
        if (pe) {
          te(Ee(pe, {
            replace: true,
            force: true
          }), J).catch(xr);
          return;
        }
        h = J;
        const ye = u.value;
        zn && Yy(Jl(ye.fullPath, H.delta), oi()), ae(J, ye).catch((p) => Wt(p, 12) ? p : Wt(p, 2) ? (te(Ee(V(p.to), {
          force: true
        }), J).then((_) => {
          Wt(_, 20) && !H.delta && H.type === jr.pop && s.go(-1, false);
        }).catch(xr), Promise.reject()) : (H.delta && s.go(-H.delta, false), de(p, J, ye))).then((p) => {
          p = p || le(J, ye, false), p && (H.delta && !Wt(p, 8) ? s.go(-H.delta, false) : H.type === jr.pop && Wt(p, 20) && s.go(-1, false)), he(J, ye, p);
        }).catch(xr);
      }));
    }
    let $e = br(), fe = br(), ee;
    function de(C, W, H) {
      Be(C);
      const J = fe.list();
      return J.length ? J.forEach((pe) => pe(C, W, H)) : console.error(C), Promise.reject(C);
    }
    function Pe() {
      return ee && u.value !== tn ? Promise.resolve() : new Promise((C, W) => {
        $e.add([
          C,
          W
        ]);
      });
    }
    function Be(C) {
      return ee || (ee = !C, Ve(), $e.list().forEach(([W, H]) => C ? H(C) : W()), $e.reset()), C;
    }
    function Ue(C, W, H, J) {
      const { scrollBehavior: pe } = t;
      if (!zn || !pe)
        return Promise.resolve();
      const ye = !H && Gy(Jl(C.fullPath, 0)) || (J || !H) && history.state && history.state.scroll || null;
      return Fo().then(() => pe(C, W, ye)).then((p) => p && zy(p)).catch((p) => de(p, C, W));
    }
    const Ne = (C) => s.go(C);
    let st;
    const Re = /* @__PURE__ */ new Set(), Ie = {
      currentRoute: u,
      listening: true,
      addRoute: v,
      removeRoute: R,
      clearRoutes: e.clearRoutes,
      hasRoute: k,
      getRoutes: S,
      resolve: F,
      options: t,
      push: $,
      replace: z,
      go: Ne,
      back: () => Ne(-1),
      forward: () => Ne(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: c.add,
      onError: fe.add,
      isReady: Pe,
      install(C) {
        const W = this;
        C.component("RouterLink", vT), C.component("RouterView", TT), C.config.globalProperties.$router = W, Object.defineProperty(C.config.globalProperties, "$route", {
          enumerable: true,
          get: () => Xn(u)
        }), zn && !st && u.value === tn && (st = true, $(s.location).catch((pe) => {
        }));
        const H = {};
        for (const pe in tn)
          Object.defineProperty(H, pe, {
            get: () => u.value[pe],
            enumerable: true
          });
        C.provide(ca, W), C.provide(Hf, kc(H)), C.provide(yo, u);
        const J = C.unmount;
        Re.add(C), C.unmount = function() {
          Re.delete(C), Re.size < 1 && (h = tn, oe && oe(), oe = null, u.value = tn, st = false, ee = false), J();
        };
      }
    };
    function De(C) {
      return C.reduce((W, H) => W.then(() => G(H)), Promise.resolve());
    }
    return Ie;
  }
  function AT(t, e) {
    const n = [], r = [], s = [], i = Math.max(e.matched.length, t.matched.length);
    for (let o = 0; o < i; o++) {
      const c = e.matched[o];
      c && (t.matched.find((h) => ar(h, c)) ? r.push(c) : n.push(c));
      const u = t.matched[o];
      u && (e.matched.find((h) => ar(h, u)) || s.push(u));
    }
    return [
      n,
      r,
      s
    ];
  }
  const CT = "/wasm-demo/".replace(/\/$|$/, "/"), ST = [
    {
      path: "/",
      name: "main",
      component: () => vo(() => import("./MainPage-666a35c2.js"), ["assets/MainPage-666a35c2.js","assets/MainPage-c21a6290.css"])
    },
    {
      path: "/about",
      name: "about",
      component: () => vo(() => import("./AboutPage-3036b3cd.js"), ["assets/AboutPage-3036b3cd.js","assets/AboutPage-e3b0c442.css"])
    }
  ], OT = wT({
    history: Qy(CT),
    routes: ST
  }), ai = Wg(c_);
  ai.use(yy);
  ai.use(zg());
  ai.use(OT);
  ai.mount("#app");
})();
export {
  Tn as E,
  yt as L,
  qe as X,
  e_ as _,
  __tla,
  bt as a,
  PT as b,
  sg as c,
  zc as d,
  Xn as e,
  RT as f,
  We as g,
  io as h,
  bs as i,
  ka as j,
  gu as o,
  ko as r,
  xh as t,
  by as u,
  NT as v,
  $T as w
};
