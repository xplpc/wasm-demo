const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MainPage-t-Ns5qlr.js","assets/MainPage-2x4ZRAqb.css","assets/AboutPage-D1B5Ghyw.js","assets/AboutPage-tn0RQdqM.css"])))=>i.map(i=>d[i]);
let Cn, wt, Je, F_, Tt, hw, jg, ou, rr, gw, Fe, mo, $s, Xa, $u, Go, _p, sT, pw, dw;
let __tla = (async () => {
  (function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
    new MutationObserver((s) => {
      for (const i of s) if (i.type === "childList") for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(s) {
      const i = {};
      return s.integrity && (i.integrity = s.integrity), s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
    }
    function r(s) {
      if (s.ep) return;
      s.ep = true;
      const i = n(s);
      fetch(s.href, i);
    }
  })();
  function xo(t) {
    const e = /* @__PURE__ */ Object.create(null);
    for (const n of t.split(",")) e[n] = 1;
    return (n) => n in e;
  }
  const Ae = {}, tr = [], Lt = () => {
  }, sp = () => false, qs = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Do = (t) => t.startsWith("onUpdate:"), je = Object.assign, Lo = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  }, ip = Object.prototype.hasOwnProperty, we = (t, e) => ip.call(t, e), ae = Array.isArray, nr = (t) => Xr(t) === "[object Map]", Js = (t) => Xr(t) === "[object Set]", za = (t) => Xr(t) === "[object Date]", le = (t) => typeof t == "function", De = (t) => typeof t == "string", Vt = (t) => typeof t == "symbol", Oe = (t) => t !== null && typeof t == "object", Cc = (t) => (Oe(t) || le(t)) && le(t.then) && le(t.catch), Oc = Object.prototype.toString, Xr = (t) => Oc.call(t), op = (t) => Xr(t).slice(8, -1), Pc = (t) => Xr(t) === "[object Object]", Mo = (t) => De(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Nr = xo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Xs = (t) => {
    const e = /* @__PURE__ */ Object.create(null);
    return (n) => e[n] || (e[n] = t(n));
  }, ap = /-(\w)/g, mt = Xs((t) => t.replace(ap, (e, n) => n ? n.toUpperCase() : "")), lp = /\B([A-Z])/g, kn = Xs((t) => t.replace(lp, "-$1").toLowerCase()), Qs = Xs((t) => t.charAt(0).toUpperCase() + t.slice(1)), Ii = Xs((t) => t ? `on${Qs(t)}` : ""), fn = (t, e) => !Object.is(t, e), Ps = (t, ...e) => {
    for (let n = 0; n < t.length; n++) t[n](...e);
  }, $c = (t, e, n, r = false) => {
    Object.defineProperty(t, e, {
      configurable: true,
      enumerable: false,
      writable: r,
      value: n
    });
  }, ao = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  };
  let Ya;
  const Zs = () => Ya || (Ya = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  function ko(t) {
    if (ae(t)) {
      const e = {};
      for (let n = 0; n < t.length; n++) {
        const r = t[n], s = De(r) ? dp(r) : ko(r);
        if (s) for (const i in s) e[i] = s[i];
      }
      return e;
    } else if (De(t) || Oe(t)) return t;
  }
  const cp = /;(?![^(]*\))/g, up = /:([^]+)/, fp = /\/\*[^]*?\*\//g;
  function dp(t) {
    const e = {};
    return t.replace(fp, "").split(cp).forEach((n) => {
      if (n) {
        const r = n.split(up);
        r.length > 1 && (e[r[0].trim()] = r[1].trim());
      }
    }), e;
  }
  function Fo(t) {
    let e = "";
    if (De(t)) e = t;
    else if (ae(t)) for (let n = 0; n < t.length; n++) {
      const r = Fo(t[n]);
      r && (e += r + " ");
    }
    else if (Oe(t)) for (const n in t) t[n] && (e += n + " ");
    return e.trim();
  }
  const hp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", pp = xo(hp);
  function Rc(t) {
    return !!t || t === "";
  }
  function gp(t, e) {
    if (t.length !== e.length) return false;
    let n = true;
    for (let r = 0; n && r < t.length; r++) n = ei(t[r], e[r]);
    return n;
  }
  function ei(t, e) {
    if (t === e) return true;
    let n = za(t), r = za(e);
    if (n || r) return n && r ? t.getTime() === e.getTime() : false;
    if (n = Vt(t), r = Vt(e), n || r) return t === e;
    if (n = ae(t), r = ae(e), n || r) return n && r ? gp(t, e) : false;
    if (n = Oe(t), r = Oe(e), n || r) {
      if (!n || !r) return false;
      const s = Object.keys(t).length, i = Object.keys(e).length;
      if (s !== i) return false;
      for (const l in t) {
        const c = t.hasOwnProperty(l), u = e.hasOwnProperty(l);
        if (c && !u || !c && u || !ei(t[l], e[l])) return false;
      }
    }
    return String(t) === String(e);
  }
  function Nc(t, e) {
    return t.findIndex((n) => ei(n, e));
  }
  let Ic, xc, xi;
  Ic = (t) => !!(t && t.__v_isRef === true);
  _p = (t) => De(t) ? t : t == null ? "" : ae(t) || Oe(t) && (t.toString === Oc || !le(t.toString)) ? Ic(t) ? _p(t.value) : JSON.stringify(t, xc, 2) : String(t);
  xc = (t, e) => Ic(e) ? xc(t, e.value) : nr(e) ? {
    [`Map(${e.size})`]: [
      ...e.entries()
    ].reduce((n, [r, s], i) => (n[xi(r, i) + " =>"] = s, n), {})
  } : Js(e) ? {
    [`Set(${e.size})`]: [
      ...e.values()
    ].map((n) => xi(n))
  } : Vt(e) ? xi(e) : Oe(e) && !ae(e) && !Pc(e) ? String(e) : e;
  xi = (t, e = "") => {
    var n;
    return Vt(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
  };
  let qe;
  class Dc {
    constructor(e = false) {
      this.detached = e, this._active = true, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = qe, !e && qe && (this.index = (qe.scopes || (qe.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let e, n;
        if (this.scopes) for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].pause();
        for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = false;
        let e, n;
        if (this.scopes) for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].resume();
        for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].resume();
      }
    }
    run(e) {
      if (this._active) {
        const n = qe;
        try {
          return qe = this, e();
        } finally {
          qe = n;
        }
      }
    }
    on() {
      qe = this;
    }
    off() {
      qe = this.parent;
    }
    stop(e) {
      if (this._active) {
        this._active = false;
        let n, r;
        for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
        for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
        if (this.cleanups.length = 0, this.scopes) {
          for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(true);
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
  function Lc(t) {
    return new Dc(t);
  }
  function Mc() {
    return qe;
  }
  function mp(t, e = false) {
    qe && qe.cleanups.push(t);
  }
  let Ce;
  const Di = /* @__PURE__ */ new WeakSet();
  class kc {
    constructor(e) {
      this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, qe && qe.active && qe.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Di.has(this) && (Di.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Vc(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Ga(this), Hc(this);
      const e = Ce, n = At;
      Ce = this, At = true;
      try {
        return this.fn();
      } finally {
        Wc(this), Ce = e, At = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let e = this.deps; e; e = e.nextDep) Wo(e);
        this.deps = this.depsTail = void 0, Ga(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Di.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      lo(this) && this.run();
    }
    get dirty() {
      return lo(this);
    }
  }
  let Fc = 0, Ir, xr;
  function Vc(t, e = false) {
    if (t.flags |= 8, e) {
      t.next = xr, xr = t;
      return;
    }
    t.next = Ir, Ir = t;
  }
  function Vo() {
    Fc++;
  }
  function Ho() {
    if (--Fc > 0) return;
    if (xr) {
      let e = xr;
      for (xr = void 0; e; ) {
        const n = e.next;
        e.next = void 0, e.flags &= -9, e = n;
      }
    }
    let t;
    for (; Ir; ) {
      let e = Ir;
      for (Ir = void 0; e; ) {
        const n = e.next;
        if (e.next = void 0, e.flags &= -9, e.flags & 1) try {
          e.trigger();
        } catch (r) {
          t || (t = r);
        }
        e = n;
      }
    }
    if (t) throw t;
  }
  function Hc(t) {
    for (let e = t.deps; e; e = e.nextDep) e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
  }
  function Wc(t) {
    let e, n = t.depsTail, r = n;
    for (; r; ) {
      const s = r.prevDep;
      r.version === -1 ? (r === n && (n = s), Wo(r), vp(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
    }
    t.deps = e, t.depsTail = n;
  }
  function lo(t) {
    for (let e = t.deps; e; e = e.nextDep) if (e.dep.version !== e.version || e.dep.computed && (Uc(e.dep.computed) || e.dep.version !== e.version)) return true;
    return !!t._dirty;
  }
  function Uc(t) {
    if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === jr)) return;
    t.globalVersion = jr;
    const e = t.dep;
    if (t.flags |= 2, e.version > 0 && !t.isSSR && t.deps && !lo(t)) {
      t.flags &= -3;
      return;
    }
    const n = Ce, r = At;
    Ce = t, At = true;
    try {
      Hc(t);
      const s = t.fn(t._value);
      (e.version === 0 || fn(s, t._value)) && (t._value = s, e.version++);
    } catch (s) {
      throw e.version++, s;
    } finally {
      Ce = n, At = r, Wc(t), t.flags &= -3;
    }
  }
  function Wo(t, e = false) {
    const { dep: n, prevSub: r, nextSub: s } = t;
    if (r && (r.nextSub = s, t.prevSub = void 0), s && (s.prevSub = r, t.nextSub = void 0), n.subs === t && (n.subs = r, !r && n.computed)) {
      n.computed.flags &= -5;
      for (let i = n.computed.deps; i; i = i.nextDep) Wo(i, true);
    }
    !e && !--n.sc && n.map && n.map.delete(n.key);
  }
  function vp(t) {
    const { prevDep: e, nextDep: n } = t;
    e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
  }
  let At = true;
  const jc = [];
  function gn() {
    jc.push(At), At = false;
  }
  function _n() {
    const t = jc.pop();
    At = t === void 0 ? true : t;
  }
  function Ga(t) {
    const { cleanup: e } = t;
    if (t.cleanup = void 0, e) {
      const n = Ce;
      Ce = void 0;
      try {
        e();
      } finally {
        Ce = n;
      }
    }
  }
  let jr = 0;
  class bp {
    constructor(e, n) {
      this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class Uo {
    constructor(e) {
      this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
    }
    track(e) {
      if (!Ce || !At || Ce === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== Ce) n = this.activeLink = new bp(Ce, this), Ce.deps ? (n.prevDep = Ce.depsTail, Ce.depsTail.nextDep = n, Ce.depsTail = n) : Ce.deps = Ce.depsTail = n, Bc(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const r = n.nextDep;
        r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Ce.depsTail, n.nextDep = void 0, Ce.depsTail.nextDep = n, Ce.depsTail = n, Ce.deps === n && (Ce.deps = r);
      }
      return n;
    }
    trigger(e) {
      this.version++, jr++, this.notify(e);
    }
    notify(e) {
      Vo();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        Ho();
      }
    }
  }
  function Bc(t) {
    if (t.dep.sc++, t.sub.flags & 4) {
      const e = t.dep.computed;
      if (e && !t.dep.subs) {
        e.flags |= 20;
        for (let r = e.deps; r; r = r.nextDep) Bc(r);
      }
      const n = t.dep.subs;
      n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t;
    }
  }
  const Ms = /* @__PURE__ */ new WeakMap(), $n = Symbol(""), co = Symbol(""), Br = Symbol("");
  function Ue(t, e, n) {
    if (At && Ce) {
      let r = Ms.get(t);
      r || Ms.set(t, r = /* @__PURE__ */ new Map());
      let s = r.get(n);
      s || (r.set(n, s = new Uo()), s.map = r, s.key = n), s.track();
    }
  }
  function Yt(t, e, n, r, s, i) {
    const l = Ms.get(t);
    if (!l) {
      jr++;
      return;
    }
    const c = (u) => {
      u && u.trigger();
    };
    if (Vo(), e === "clear") l.forEach(c);
    else {
      const u = ae(t), h = u && Mo(n);
      if (u && n === "length") {
        const d = Number(r);
        l.forEach((p, b) => {
          (b === "length" || b === Br || !Vt(b) && b >= d) && c(p);
        });
      } else switch ((n !== void 0 || l.has(void 0)) && c(l.get(n)), h && c(l.get(Br)), e) {
        case "add":
          u ? h && c(l.get("length")) : (c(l.get($n)), nr(t) && c(l.get(co)));
          break;
        case "delete":
          u || (c(l.get($n)), nr(t) && c(l.get(co)));
          break;
        case "set":
          nr(t) && c(l.get($n));
          break;
      }
    }
    Ho();
  }
  function Ep(t, e) {
    const n = Ms.get(t);
    return n && n.get(e);
  }
  function Kn(t) {
    const e = Ee(t);
    return e === t ? e : (Ue(e, "iterate", Br), St(t) ? e : e.map(Xe));
  }
  function jo(t) {
    return Ue(t = Ee(t), "iterate", Br), t;
  }
  const yp = {
    __proto__: null,
    [Symbol.iterator]() {
      return Li(this, Symbol.iterator, Xe);
    },
    concat(...t) {
      return Kn(this).concat(...t.map((e) => ae(e) ? Kn(e) : e));
    },
    entries() {
      return Li(this, "entries", (t) => (t[1] = Xe(t[1]), t));
    },
    every(t, e) {
      return Bt(this, "every", t, e, void 0, arguments);
    },
    filter(t, e) {
      return Bt(this, "filter", t, e, (n) => n.map(Xe), arguments);
    },
    find(t, e) {
      return Bt(this, "find", t, e, Xe, arguments);
    },
    findIndex(t, e) {
      return Bt(this, "findIndex", t, e, void 0, arguments);
    },
    findLast(t, e) {
      return Bt(this, "findLast", t, e, Xe, arguments);
    },
    findLastIndex(t, e) {
      return Bt(this, "findLastIndex", t, e, void 0, arguments);
    },
    forEach(t, e) {
      return Bt(this, "forEach", t, e, void 0, arguments);
    },
    includes(...t) {
      return Mi(this, "includes", t);
    },
    indexOf(...t) {
      return Mi(this, "indexOf", t);
    },
    join(t) {
      return Kn(this).join(t);
    },
    lastIndexOf(...t) {
      return Mi(this, "lastIndexOf", t);
    },
    map(t, e) {
      return Bt(this, "map", t, e, void 0, arguments);
    },
    pop() {
      return Sr(this, "pop");
    },
    push(...t) {
      return Sr(this, "push", t);
    },
    reduce(t, ...e) {
      return qa(this, "reduce", t, e);
    },
    reduceRight(t, ...e) {
      return qa(this, "reduceRight", t, e);
    },
    shift() {
      return Sr(this, "shift");
    },
    some(t, e) {
      return Bt(this, "some", t, e, void 0, arguments);
    },
    splice(...t) {
      return Sr(this, "splice", t);
    },
    toReversed() {
      return Kn(this).toReversed();
    },
    toSorted(t) {
      return Kn(this).toSorted(t);
    },
    toSpliced(...t) {
      return Kn(this).toSpliced(...t);
    },
    unshift(...t) {
      return Sr(this, "unshift", t);
    },
    values() {
      return Li(this, "values", Xe);
    }
  };
  function Li(t, e, n) {
    const r = jo(t), s = r[e]();
    return r !== t && !St(t) && (s._next = s.next, s.next = () => {
      const i = s._next();
      return i.value && (i.value = n(i.value)), i;
    }), s;
  }
  const Tp = Array.prototype;
  function Bt(t, e, n, r, s, i) {
    const l = jo(t), c = l !== t && !St(t), u = l[e];
    if (u !== Tp[e]) {
      const p = u.apply(t, i);
      return c ? Xe(p) : p;
    }
    let h = n;
    l !== t && (c ? h = function(p, b) {
      return n.call(this, Xe(p), b, t);
    } : n.length > 2 && (h = function(p, b) {
      return n.call(this, p, b, t);
    }));
    const d = u.call(l, h, r);
    return c && s ? s(d) : d;
  }
  function qa(t, e, n, r) {
    const s = jo(t);
    let i = n;
    return s !== t && (St(t) ? n.length > 3 && (i = function(l, c, u) {
      return n.call(this, l, c, u, t);
    }) : i = function(l, c, u) {
      return n.call(this, l, Xe(c), u, t);
    }), s[e](i, ...r);
  }
  function Mi(t, e, n) {
    const r = Ee(t);
    Ue(r, "iterate", Br);
    const s = r[e](...n);
    return (s === -1 || s === false) && zo(n[0]) ? (n[0] = Ee(n[0]), r[e](...n)) : s;
  }
  function Sr(t, e, n = []) {
    gn(), Vo();
    const r = Ee(t)[e].apply(t, n);
    return Ho(), _n(), r;
  }
  const wp = xo("__proto__,__v_isRef,__isVue"), Kc = new Set(Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Vt));
  function Ap(t) {
    Vt(t) || (t = String(t));
    const e = Ee(this);
    return Ue(e, "has", t), e.hasOwnProperty(t);
  }
  class zc {
    constructor(e = false, n = false) {
      this._isReadonly = e, this._isShallow = n;
    }
    get(e, n, r) {
      if (n === "__v_skip") return e.__v_skip;
      const s = this._isReadonly, i = this._isShallow;
      if (n === "__v_isReactive") return !s;
      if (n === "__v_isReadonly") return s;
      if (n === "__v_isShallow") return i;
      if (n === "__v_raw") return r === (s ? i ? Dp : Jc : i ? qc : Gc).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
      const l = ae(e);
      if (!s) {
        let u;
        if (l && (u = yp[n])) return u;
        if (n === "hasOwnProperty") return Ap;
      }
      const c = Reflect.get(e, n, $e(e) ? e : r);
      return (Vt(n) ? Kc.has(n) : wp(n)) || (s || Ue(e, "get", n), i) ? c : $e(c) ? l && Mo(n) ? c : c.value : Oe(c) ? s ? Qc(c) : Qr(c) : c;
    }
  }
  class Yc extends zc {
    constructor(e = false) {
      super(false, e);
    }
    set(e, n, r, s) {
      let i = e[n];
      if (!this._isShallow) {
        const u = xn(i);
        if (!St(r) && !xn(r) && (i = Ee(i), r = Ee(r)), !ae(e) && $e(i) && !$e(r)) return u ? false : (i.value = r, true);
      }
      const l = ae(e) && Mo(n) ? Number(n) < e.length : we(e, n), c = Reflect.set(e, n, r, $e(e) ? e : s);
      return e === Ee(s) && (l ? fn(r, i) && Yt(e, "set", n, r) : Yt(e, "add", n, r)), c;
    }
    deleteProperty(e, n) {
      const r = we(e, n);
      e[n];
      const s = Reflect.deleteProperty(e, n);
      return s && r && Yt(e, "delete", n, void 0), s;
    }
    has(e, n) {
      const r = Reflect.has(e, n);
      return (!Vt(n) || !Kc.has(n)) && Ue(e, "has", n), r;
    }
    ownKeys(e) {
      return Ue(e, "iterate", ae(e) ? "length" : $n), Reflect.ownKeys(e);
    }
  }
  class Sp extends zc {
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
  const Cp = new Yc(), Op = new Sp(), Pp = new Yc(true);
  const uo = (t) => t, vs = (t) => Reflect.getPrototypeOf(t);
  function $p(t, e, n) {
    return function(...r) {
      const s = this.__v_raw, i = Ee(s), l = nr(i), c = t === "entries" || t === Symbol.iterator && l, u = t === "keys" && l, h = s[t](...r), d = n ? uo : e ? fo : Xe;
      return !e && Ue(i, "iterate", u ? co : $n), {
        next() {
          const { value: p, done: b } = h.next();
          return b ? {
            value: p,
            done: b
          } : {
            value: c ? [
              d(p[0]),
              d(p[1])
            ] : d(p),
            done: b
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function bs(t) {
    return function(...e) {
      return t === "delete" ? false : t === "clear" ? void 0 : this;
    };
  }
  function Rp(t, e) {
    const n = {
      get(s) {
        const i = this.__v_raw, l = Ee(i), c = Ee(s);
        t || (fn(s, c) && Ue(l, "get", s), Ue(l, "get", c));
        const { has: u } = vs(l), h = e ? uo : t ? fo : Xe;
        if (u.call(l, s)) return h(i.get(s));
        if (u.call(l, c)) return h(i.get(c));
        i !== l && i.get(s);
      },
      get size() {
        const s = this.__v_raw;
        return !t && Ue(Ee(s), "iterate", $n), Reflect.get(s, "size", s);
      },
      has(s) {
        const i = this.__v_raw, l = Ee(i), c = Ee(s);
        return t || (fn(s, c) && Ue(l, "has", s), Ue(l, "has", c)), s === c ? i.has(s) : i.has(s) || i.has(c);
      },
      forEach(s, i) {
        const l = this, c = l.__v_raw, u = Ee(c), h = e ? uo : t ? fo : Xe;
        return !t && Ue(u, "iterate", $n), c.forEach((d, p) => s.call(i, h(d), h(p), l));
      }
    };
    return je(n, t ? {
      add: bs("add"),
      set: bs("set"),
      delete: bs("delete"),
      clear: bs("clear")
    } : {
      add(s) {
        !e && !St(s) && !xn(s) && (s = Ee(s));
        const i = Ee(this);
        return vs(i).has.call(i, s) || (i.add(s), Yt(i, "add", s, s)), this;
      },
      set(s, i) {
        !e && !St(i) && !xn(i) && (i = Ee(i));
        const l = Ee(this), { has: c, get: u } = vs(l);
        let h = c.call(l, s);
        h || (s = Ee(s), h = c.call(l, s));
        const d = u.call(l, s);
        return l.set(s, i), h ? fn(i, d) && Yt(l, "set", s, i) : Yt(l, "add", s, i), this;
      },
      delete(s) {
        const i = Ee(this), { has: l, get: c } = vs(i);
        let u = l.call(i, s);
        u || (s = Ee(s), u = l.call(i, s)), c && c.call(i, s);
        const h = i.delete(s);
        return u && Yt(i, "delete", s, void 0), h;
      },
      clear() {
        const s = Ee(this), i = s.size !== 0, l = s.clear();
        return i && Yt(s, "clear", void 0, void 0), l;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((s) => {
      n[s] = $p(s, t, e);
    }), n;
  }
  function Bo(t, e) {
    const n = Rp(t, e);
    return (r, s, i) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? r : Reflect.get(we(n, s) && s in r ? n : r, s, i);
  }
  const Np = {
    get: Bo(false, false)
  }, Ip = {
    get: Bo(false, true)
  }, xp = {
    get: Bo(true, false)
  };
  const Gc = /* @__PURE__ */ new WeakMap(), qc = /* @__PURE__ */ new WeakMap(), Jc = /* @__PURE__ */ new WeakMap(), Dp = /* @__PURE__ */ new WeakMap();
  function Lp(t) {
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
  function Mp(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : Lp(op(t));
  }
  function Qr(t) {
    return xn(t) ? t : Ko(t, false, Cp, Np, Gc);
  }
  function Xc(t) {
    return Ko(t, false, Pp, Ip, qc);
  }
  function Qc(t) {
    return Ko(t, true, Op, xp, Jc);
  }
  function Ko(t, e, n, r, s) {
    if (!Oe(t) || t.__v_raw && !(e && t.__v_isReactive)) return t;
    const i = s.get(t);
    if (i) return i;
    const l = Mp(t);
    if (l === 0) return t;
    const c = new Proxy(t, l === 2 ? r : n);
    return s.set(t, c), c;
  }
  function Rn(t) {
    return xn(t) ? Rn(t.__v_raw) : !!(t && t.__v_isReactive);
  }
  function xn(t) {
    return !!(t && t.__v_isReadonly);
  }
  function St(t) {
    return !!(t && t.__v_isShallow);
  }
  function zo(t) {
    return t ? !!t.__v_raw : false;
  }
  function Ee(t) {
    const e = t && t.__v_raw;
    return e ? Ee(e) : t;
  }
  function Yo(t) {
    return !we(t, "__v_skip") && Object.isExtensible(t) && $c(t, "__v_skip", true), t;
  }
  const Xe = (t) => Oe(t) ? Qr(t) : t, fo = (t) => Oe(t) ? Qc(t) : t;
  function $e(t) {
    return t ? t.__v_isRef === true : false;
  }
  Go = function(t) {
    return Zc(t, false);
  };
  function kp(t) {
    return Zc(t, true);
  }
  function Zc(t, e) {
    return $e(t) ? t : new Fp(t, e);
  }
  class Fp {
    constructor(e, n) {
      this.dep = new Uo(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? e : Ee(e), this._value = n ? e : Xe(e), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(e) {
      const n = this._rawValue, r = this.__v_isShallow || St(e) || xn(e);
      e = r ? e : Ee(e), fn(e, n) && (this._rawValue = e, this._value = r ? e : Xe(e), this.dep.trigger());
    }
  }
  rr = function(t) {
    return $e(t) ? t.value : t;
  };
  const Vp = {
    get: (t, e, n) => e === "__v_raw" ? t : rr(Reflect.get(t, e, n)),
    set: (t, e, n, r) => {
      const s = t[e];
      return $e(s) && !$e(n) ? (s.value = n, true) : Reflect.set(t, e, n, r);
    }
  };
  function eu(t) {
    return Rn(t) ? t : new Proxy(t, Vp);
  }
  function Hp(t) {
    const e = ae(t) ? new Array(t.length) : {};
    for (const n in t) e[n] = Up(t, n);
    return e;
  }
  class Wp {
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
      return Ep(Ee(this._object), this._key);
    }
  }
  function Up(t, e, n) {
    const r = t[e];
    return $e(r) ? r : new Wp(t, e, n);
  }
  class jp {
    constructor(e, n, r) {
      this.fn = e, this.setter = n, this._value = void 0, this.dep = new Uo(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = jr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && Ce !== this) return Vc(this, true), true;
    }
    get value() {
      const e = this.dep.track();
      return Uc(this), e && (e.version = this.dep.version), this._value;
    }
    set value(e) {
      this.setter && this.setter(e);
    }
  }
  function Bp(t, e, n = false) {
    let r, s;
    return le(t) ? r = t : (r = t.get, s = t.set), new jp(r, s, n);
  }
  const Es = {}, ks = /* @__PURE__ */ new WeakMap();
  let An;
  function Kp(t, e = false, n = An) {
    if (n) {
      let r = ks.get(n);
      r || ks.set(n, r = []), r.push(t);
    }
  }
  function zp(t, e, n = Ae) {
    const { immediate: r, deep: s, once: i, scheduler: l, augmentJob: c, call: u } = n, h = (D) => s ? D : St(D) || s === false || s === 0 ? Gt(D, 1) : Gt(D);
    let d, p, b, v, I = false, $ = false;
    if ($e(t) ? (p = () => t.value, I = St(t)) : Rn(t) ? (p = () => h(t), I = true) : ae(t) ? ($ = true, I = t.some((D) => Rn(D) || St(D)), p = () => t.map((D) => {
      if ($e(D)) return D.value;
      if (Rn(D)) return h(D);
      if (le(D)) return u ? u(D, 2) : D();
    })) : le(t) ? e ? p = u ? () => u(t, 2) : t : p = () => {
      if (b) {
        gn();
        try {
          b();
        } finally {
          _n();
        }
      }
      const D = An;
      An = d;
      try {
        return u ? u(t, 3, [
          v
        ]) : t(v);
      } finally {
        An = D;
      }
    } : p = Lt, e && s) {
      const D = p, Y = s === true ? 1 / 0 : s;
      p = () => Gt(D(), Y);
    }
    const H = Mc(), W = () => {
      d.stop(), H && H.active && Lo(H.effects, d);
    };
    if (i && e) {
      const D = e;
      e = (...Y) => {
        D(...Y), W();
      };
    }
    let k = $ ? new Array(t.length).fill(Es) : Es;
    const B = (D) => {
      if (!(!(d.flags & 1) || !d.dirty && !D)) if (e) {
        const Y = d.run();
        if (s || I || ($ ? Y.some((X, ne) => fn(X, k[ne])) : fn(Y, k))) {
          b && b();
          const X = An;
          An = d;
          try {
            const ne = [
              Y,
              k === Es ? void 0 : $ && k[0] === Es ? [] : k,
              v
            ];
            u ? u(e, 3, ne) : e(...ne), k = Y;
          } finally {
            An = X;
          }
        }
      } else d.run();
    };
    return c && c(B), d = new kc(p), d.scheduler = l ? () => l(B, false) : B, v = (D) => Kp(D, false, d), b = d.onStop = () => {
      const D = ks.get(d);
      if (D) {
        if (u) u(D, 4);
        else for (const Y of D) Y();
        ks.delete(d);
      }
    }, e ? r ? B(true) : k = d.run() : l ? l(B.bind(null, true), true) : d.run(), W.pause = d.pause.bind(d), W.resume = d.resume.bind(d), W.stop = W, W;
  }
  function Gt(t, e = 1 / 0, n) {
    if (e <= 0 || !Oe(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(t))) return t;
    if (n.add(t), e--, $e(t)) Gt(t.value, e, n);
    else if (ae(t)) for (let r = 0; r < t.length; r++) Gt(t[r], e, n);
    else if (Js(t) || nr(t)) t.forEach((r) => {
      Gt(r, e, n);
    });
    else if (Pc(t)) {
      for (const r in t) Gt(t[r], e, n);
      for (const r of Object.getOwnPropertySymbols(t)) Object.prototype.propertyIsEnumerable.call(t, r) && Gt(t[r], e, n);
    }
    return t;
  }
  function Zr(t, e, n, r) {
    try {
      return r ? t(...r) : t();
    } catch (s) {
      ti(s, e, n);
    }
  }
  function Ht(t, e, n, r) {
    if (le(t)) {
      const s = Zr(t, e, n, r);
      return s && Cc(s) && s.catch((i) => {
        ti(i, e, n);
      }), s;
    }
    if (ae(t)) {
      const s = [];
      for (let i = 0; i < t.length; i++) s.push(Ht(t[i], e, n, r));
      return s;
    }
  }
  function ti(t, e, n, r = true) {
    const s = e ? e.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = e && e.appContext.config || Ae;
    if (e) {
      let c = e.parent;
      const u = e.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; c; ) {
        const d = c.ec;
        if (d) {
          for (let p = 0; p < d.length; p++) if (d[p](t, u, h) === false) return;
        }
        c = c.parent;
      }
      if (i) {
        gn(), Zr(i, null, 10, [
          t,
          u,
          h
        ]), _n();
        return;
      }
    }
    Yp(t, n, s, r, l);
  }
  function Yp(t, e, n, r = true, s = false) {
    if (s) throw t;
    console.error(t);
  }
  const Qe = [];
  let It = -1;
  const sr = [];
  let an = null, qn = 0;
  const tu = Promise.resolve();
  let Fs = null;
  function qo(t) {
    const e = Fs || tu;
    return t ? e.then(this ? t.bind(this) : t) : e;
  }
  function Gp(t) {
    let e = It + 1, n = Qe.length;
    for (; e < n; ) {
      const r = e + n >>> 1, s = Qe[r], i = Kr(s);
      i < t || i === t && s.flags & 2 ? e = r + 1 : n = r;
    }
    return e;
  }
  function Jo(t) {
    if (!(t.flags & 1)) {
      const e = Kr(t), n = Qe[Qe.length - 1];
      !n || !(t.flags & 2) && e >= Kr(n) ? Qe.push(t) : Qe.splice(Gp(e), 0, t), t.flags |= 1, nu();
    }
  }
  function nu() {
    Fs || (Fs = tu.then(su));
  }
  function qp(t) {
    ae(t) ? sr.push(...t) : an && t.id === -1 ? an.splice(qn + 1, 0, t) : t.flags & 1 || (sr.push(t), t.flags |= 1), nu();
  }
  function Ja(t, e, n = It + 1) {
    for (; n < Qe.length; n++) {
      const r = Qe[n];
      if (r && r.flags & 2) {
        if (t && r.id !== t.uid) continue;
        Qe.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
      }
    }
  }
  function ru(t) {
    if (sr.length) {
      const e = [
        ...new Set(sr)
      ].sort((n, r) => Kr(n) - Kr(r));
      if (sr.length = 0, an) {
        an.push(...e);
        return;
      }
      for (an = e, qn = 0; qn < an.length; qn++) {
        const n = an[qn];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      an = null, qn = 0;
    }
  }
  const Kr = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
  function su(t) {
    try {
      for (It = 0; It < Qe.length; It++) {
        const e = Qe[It];
        e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Zr(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
      }
    } finally {
      for (; It < Qe.length; It++) {
        const e = Qe[It];
        e && (e.flags &= -2);
      }
      It = -1, Qe.length = 0, ru(), Fs = null, (Qe.length || sr.length) && su();
    }
  }
  let rt = null, iu = null;
  function Vs(t) {
    const e = rt;
    return rt = t, iu = t && t.type.__scopeId || null, e;
  }
  $s = function(t, e = rt, n) {
    if (!e || t._n) return t;
    const r = (...s) => {
      r._d && al(-1);
      const i = Vs(e);
      let l;
      try {
        l = t(...s);
      } finally {
        Vs(i), r._d && al(1);
      }
      return l;
    };
    return r._n = true, r._c = true, r._d = true, r;
  };
  dw = function(t, e) {
    if (rt === null) return t;
    const n = ii(rt), r = t.dirs || (t.dirs = []);
    for (let s = 0; s < e.length; s++) {
      let [i, l, c, u = Ae] = e[s];
      i && (le(i) && (i = {
        mounted: i,
        updated: i
      }), i.deep && Gt(l), r.push({
        dir: i,
        instance: n,
        value: l,
        oldValue: void 0,
        arg: c,
        modifiers: u
      }));
    }
    return t;
  };
  function Tn(t, e, n, r) {
    const s = t.dirs, i = e && e.dirs;
    for (let l = 0; l < s.length; l++) {
      const c = s[l];
      i && (c.oldValue = i[l].value);
      let u = c.dir[r];
      u && (gn(), Ht(u, n, 8, [
        t.el,
        c,
        t,
        e
      ]), _n());
    }
  }
  const Jp = Symbol("_vte"), Xp = (t) => t.__isTeleport;
  function Xo(t, e) {
    t.shapeFlag & 6 && t.component ? (t.transition = e, Xo(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
  }
  ou = function(t, e) {
    return le(t) ? je({
      name: t.name
    }, e, {
      setup: t
    }) : t;
  };
  function au(t) {
    t.ids = [
      t.ids[0] + t.ids[2]++ + "-",
      0,
      0
    ];
  }
  function Hs(t, e, n, r, s = false) {
    if (ae(t)) {
      t.forEach((I, $) => Hs(I, e && (ae(e) ? e[$] : e), n, r, s));
      return;
    }
    if (Dr(r) && !s) {
      r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Hs(t, e, n, r.component.subTree);
      return;
    }
    const i = r.shapeFlag & 4 ? ii(r.component) : r.el, l = s ? null : i, { i: c, r: u } = t, h = e && e.r, d = c.refs === Ae ? c.refs = {} : c.refs, p = c.setupState, b = Ee(p), v = p === Ae ? () => false : (I) => we(b, I);
    if (h != null && h !== u && (De(h) ? (d[h] = null, v(h) && (p[h] = null)) : $e(h) && (h.value = null)), le(u)) Zr(u, c, 12, [
      l,
      d
    ]);
    else {
      const I = De(u), $ = $e(u);
      if (I || $) {
        const H = () => {
          if (t.f) {
            const W = I ? v(u) ? p[u] : d[u] : u.value;
            s ? ae(W) && Lo(W, i) : ae(W) ? W.includes(i) || W.push(i) : I ? (d[u] = [
              i
            ], v(u) && (p[u] = d[u])) : (u.value = [
              i
            ], t.k && (d[t.k] = u.value));
          } else I ? (d[u] = l, v(u) && (p[u] = l)) : $ && (u.value = l, t.k && (d[t.k] = l));
        };
        l ? (H.id = -1, at(H, n)) : H();
      }
    }
  }
  Zs().requestIdleCallback;
  Zs().cancelIdleCallback;
  const Dr = (t) => !!t.type.__asyncLoader, lu = (t) => t.type.__isKeepAlive;
  function Qp(t, e) {
    cu(t, "a", e);
  }
  function Zp(t, e) {
    cu(t, "da", e);
  }
  function cu(t, e, n = ke) {
    const r = t.__wdc || (t.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return t();
    });
    if (ni(e, r, n), n) {
      let s = n.parent;
      for (; s && s.parent; ) lu(s.parent.vnode) && eg(r, e, n, s), s = s.parent;
    }
  }
  function eg(t, e, n, r) {
    const s = ni(e, t, r, true);
    uu(() => {
      Lo(r[e], s);
    }, n);
  }
  function ni(t, e, n = ke, r = false) {
    if (n) {
      const s = n[t] || (n[t] = []), i = e.__weh || (e.__weh = (...l) => {
        gn();
        const c = es(n), u = Ht(e, n, t, l);
        return c(), _n(), u;
      });
      return r ? s.unshift(i) : s.push(i), i;
    }
  }
  const Qt = (t) => (e, n = ke) => {
    (!Yr || t === "sp") && ni(t, (...r) => e(...r), n);
  }, tg = Qt("bm"), ng = Qt("m"), rg = Qt("bu"), sg = Qt("u"), ig = Qt("bum"), uu = Qt("um"), og = Qt("sp"), ag = Qt("rtg"), lg = Qt("rtc");
  function cg(t, e = ke) {
    ni("ec", t, e);
  }
  const ug = "components";
  Xa = function(t, e) {
    return dg(ug, t, true, e) || t;
  };
  const fg = Symbol.for("v-ndc");
  function dg(t, e, n = true, r = false) {
    const s = rt || ke;
    if (s) {
      const i = s.type;
      {
        const c = t_(i, false);
        if (c && (c === e || c === mt(e) || c === Qs(mt(e)))) return i;
      }
      const l = Qa(s[t] || i[t], e) || Qa(s.appContext[t], e);
      return !l && r ? i : l;
    }
  }
  function Qa(t, e) {
    return t && (t[e] || t[mt(e)] || t[Qs(mt(e))]);
  }
  const ho = (t) => t ? Iu(t) ? ii(t) : ho(t.parent) : null, Lr = je(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => ho(t.parent),
    $root: (t) => ho(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => du(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      Jo(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = qo.bind(t.proxy)),
    $watch: (t) => Dg.bind(t)
  }), ki = (t, e) => t !== Ae && !t.__isScriptSetup && we(t, e), hg = {
    get({ _: t }, e) {
      if (e === "__v_skip") return true;
      const { ctx: n, setupState: r, data: s, props: i, accessCache: l, type: c, appContext: u } = t;
      let h;
      if (e[0] !== "$") {
        const v = l[e];
        if (v !== void 0) switch (v) {
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
          if (ki(r, e)) return l[e] = 1, r[e];
          if (s !== Ae && we(s, e)) return l[e] = 2, s[e];
          if ((h = t.propsOptions[0]) && we(h, e)) return l[e] = 3, i[e];
          if (n !== Ae && we(n, e)) return l[e] = 4, n[e];
          po && (l[e] = 0);
        }
      }
      const d = Lr[e];
      let p, b;
      if (d) return e === "$attrs" && Ue(t.attrs, "get", ""), d(t);
      if ((p = c.__cssModules) && (p = p[e])) return p;
      if (n !== Ae && we(n, e)) return l[e] = 4, n[e];
      if (b = u.config.globalProperties, we(b, e)) return b[e];
    },
    set({ _: t }, e, n) {
      const { data: r, setupState: s, ctx: i } = t;
      return ki(s, e) ? (s[e] = n, true) : r !== Ae && we(r, e) ? (r[e] = n, true) : we(t.props, e) || e[0] === "$" && e.slice(1) in t ? false : (i[e] = n, true);
    },
    has({ _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: s, propsOptions: i } }, l) {
      let c;
      return !!n[l] || t !== Ae && we(t, l) || ki(e, l) || (c = i[0]) && we(c, l) || we(r, l) || we(Lr, l) || we(s.config.globalProperties, l);
    },
    defineProperty(t, e, n) {
      return n.get != null ? t._.accessCache[e] = 0 : we(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
    }
  };
  function Za(t) {
    return ae(t) ? t.reduce((e, n) => (e[n] = null, e), {}) : t;
  }
  let po = true;
  function pg(t) {
    const e = du(t), n = t.proxy, r = t.ctx;
    po = false, e.beforeCreate && el(e.beforeCreate, t, "bc");
    const { data: s, computed: i, methods: l, watch: c, provide: u, inject: h, created: d, beforeMount: p, mounted: b, beforeUpdate: v, updated: I, activated: $, deactivated: H, beforeDestroy: W, beforeUnmount: k, destroyed: B, unmounted: D, render: Y, renderTracked: X, renderTriggered: ne, errorCaptured: ee, serverPrefetch: te, expose: R, inheritAttrs: pe, components: he, directives: ge, filters: Re } = e;
    if (h && gg(h, r, null), l) for (const re in l) {
      const ue = l[re];
      le(ue) && (r[re] = ue.bind(n));
    }
    if (s) {
      const re = s.call(n, n);
      Oe(re) && (t.data = Qr(re));
    }
    if (po = true, i) for (const re in i) {
      const ue = i[re], Ne = le(ue) ? ue.bind(n, n) : le(ue.get) ? ue.get.bind(n, n) : Lt, Ve = !le(ue) && le(ue.set) ? ue.set.bind(n) : Lt, xe = gt({
        get: Ne,
        set: Ve
      });
      Object.defineProperty(r, re, {
        enumerable: true,
        configurable: true,
        get: () => xe.value,
        set: (Se) => xe.value = Se
      });
    }
    if (c) for (const re in c) fu(c[re], r, n, re);
    if (u) {
      const re = le(u) ? u.call(n) : u;
      Reflect.ownKeys(re).forEach((ue) => {
        Rs(ue, re[ue]);
      });
    }
    d && el(d, t, "c");
    function G(re, ue) {
      ae(ue) ? ue.forEach((Ne) => re(Ne.bind(n))) : ue && re(ue.bind(n));
    }
    if (G(tg, p), G(ng, b), G(rg, v), G(sg, I), G(Qp, $), G(Zp, H), G(cg, ee), G(lg, X), G(ag, ne), G(ig, k), G(uu, D), G(og, te), ae(R)) if (R.length) {
      const re = t.exposed || (t.exposed = {});
      R.forEach((ue) => {
        Object.defineProperty(re, ue, {
          get: () => n[ue],
          set: (Ne) => n[ue] = Ne
        });
      });
    } else t.exposed || (t.exposed = {});
    Y && t.render === Lt && (t.render = Y), pe != null && (t.inheritAttrs = pe), he && (t.components = he), ge && (t.directives = ge), te && au(t);
  }
  function gg(t, e, n = Lt) {
    ae(t) && (t = go(t));
    for (const r in t) {
      const s = t[r];
      let i;
      Oe(s) ? "default" in s ? i = Mt(s.from || r, s.default, true) : i = Mt(s.from || r) : i = Mt(s), $e(i) ? Object.defineProperty(e, r, {
        enumerable: true,
        configurable: true,
        get: () => i.value,
        set: (l) => i.value = l
      }) : e[r] = i;
    }
  }
  function el(t, e, n) {
    Ht(ae(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
  }
  function fu(t, e, n, r) {
    let s = r.includes(".") ? Cu(n, r) : () => n[r];
    if (De(t)) {
      const i = e[t];
      le(i) && Mr(s, i);
    } else if (le(t)) Mr(s, t.bind(n));
    else if (Oe(t)) if (ae(t)) t.forEach((i) => fu(i, e, n, r));
    else {
      const i = le(t.handler) ? t.handler.bind(n) : e[t.handler];
      le(i) && Mr(s, i, t);
    }
  }
  function du(t) {
    const e = t.type, { mixins: n, extends: r } = e, { mixins: s, optionsCache: i, config: { optionMergeStrategies: l } } = t.appContext, c = i.get(e);
    let u;
    return c ? u = c : !s.length && !n && !r ? u = e : (u = {}, s.length && s.forEach((h) => Ws(u, h, l, true)), Ws(u, e, l)), Oe(e) && i.set(e, u), u;
  }
  function Ws(t, e, n, r = false) {
    const { mixins: s, extends: i } = e;
    i && Ws(t, i, n, true), s && s.forEach((l) => Ws(t, l, n, true));
    for (const l in e) if (!(r && l === "expose")) {
      const c = _g[l] || n && n[l];
      t[l] = c ? c(t[l], e[l]) : e[l];
    }
    return t;
  }
  const _g = {
    data: tl,
    props: nl,
    emits: nl,
    methods: Rr,
    computed: Rr,
    beforeCreate: Ge,
    created: Ge,
    beforeMount: Ge,
    mounted: Ge,
    beforeUpdate: Ge,
    updated: Ge,
    beforeDestroy: Ge,
    beforeUnmount: Ge,
    destroyed: Ge,
    unmounted: Ge,
    activated: Ge,
    deactivated: Ge,
    errorCaptured: Ge,
    serverPrefetch: Ge,
    components: Rr,
    directives: Rr,
    watch: vg,
    provide: tl,
    inject: mg
  };
  function tl(t, e) {
    return e ? t ? function() {
      return je(le(t) ? t.call(this, this) : t, le(e) ? e.call(this, this) : e);
    } : e : t;
  }
  function mg(t, e) {
    return Rr(go(t), go(e));
  }
  function go(t) {
    if (ae(t)) {
      const e = {};
      for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
      return e;
    }
    return t;
  }
  function Ge(t, e) {
    return t ? [
      ...new Set([].concat(t, e))
    ] : e;
  }
  function Rr(t, e) {
    return t ? je(/* @__PURE__ */ Object.create(null), t, e) : e;
  }
  function nl(t, e) {
    return t ? ae(t) && ae(e) ? [
      .../* @__PURE__ */ new Set([
        ...t,
        ...e
      ])
    ] : je(/* @__PURE__ */ Object.create(null), Za(t), Za(e ?? {})) : e;
  }
  function vg(t, e) {
    if (!t) return e;
    if (!e) return t;
    const n = je(/* @__PURE__ */ Object.create(null), t);
    for (const r in e) n[r] = Ge(t[r], e[r]);
    return n;
  }
  function hu() {
    return {
      app: null,
      config: {
        isNativeTag: sp,
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
  let bg = 0;
  function Eg(t, e) {
    return function(r, s = null) {
      le(r) || (r = je({}, r)), s != null && !Oe(s) && (s = null);
      const i = hu(), l = /* @__PURE__ */ new WeakSet(), c = [];
      let u = false;
      const h = i.app = {
        _uid: bg++,
        _component: r,
        _props: s,
        _container: null,
        _context: i,
        _instance: null,
        version: r_,
        get config() {
          return i.config;
        },
        set config(d) {
        },
        use(d, ...p) {
          return l.has(d) || (d && le(d.install) ? (l.add(d), d.install(h, ...p)) : le(d) && (l.add(d), d(h, ...p))), h;
        },
        mixin(d) {
          return i.mixins.includes(d) || i.mixins.push(d), h;
        },
        component(d, p) {
          return p ? (i.components[d] = p, h) : i.components[d];
        },
        directive(d, p) {
          return p ? (i.directives[d] = p, h) : i.directives[d];
        },
        mount(d, p, b) {
          if (!u) {
            const v = h._ceVNode || Fe(r, s);
            return v.appContext = i, b === true ? b = "svg" : b === false && (b = void 0), t(v, d, b), u = true, h._container = d, d.__vue_app__ = h, ii(v.component);
          }
        },
        onUnmount(d) {
          c.push(d);
        },
        unmount() {
          u && (Ht(c, h._instance, 16), t(null, h._container), delete h._container.__vue_app__);
        },
        provide(d, p) {
          return i.provides[d] = p, h;
        },
        runWithContext(d) {
          const p = Nn;
          Nn = h;
          try {
            return d();
          } finally {
            Nn = p;
          }
        }
      };
      return h;
    };
  }
  let Nn = null;
  function Rs(t, e) {
    if (ke) {
      let n = ke.provides;
      const r = ke.parent && ke.parent.provides;
      r === n && (n = ke.provides = Object.create(r)), n[t] = e;
    }
  }
  function Mt(t, e, n = false) {
    const r = ke || rt;
    if (r || Nn) {
      const s = Nn ? Nn._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
      if (s && t in s) return s[t];
      if (arguments.length > 1) return n && le(e) ? e.call(r && r.proxy) : e;
    }
  }
  function yg() {
    return !!(ke || rt || Nn);
  }
  const pu = {}, gu = () => Object.create(pu), _u = (t) => Object.getPrototypeOf(t) === pu;
  function Tg(t, e, n, r = false) {
    const s = {}, i = gu();
    t.propsDefaults = /* @__PURE__ */ Object.create(null), mu(t, e, s, i);
    for (const l in t.propsOptions[0]) l in s || (s[l] = void 0);
    n ? t.props = r ? s : Xc(s) : t.type.props ? t.props = s : t.props = i, t.attrs = i;
  }
  function wg(t, e, n, r) {
    const { props: s, attrs: i, vnode: { patchFlag: l } } = t, c = Ee(s), [u] = t.propsOptions;
    let h = false;
    if ((r || l > 0) && !(l & 16)) {
      if (l & 8) {
        const d = t.vnode.dynamicProps;
        for (let p = 0; p < d.length; p++) {
          let b = d[p];
          if (ri(t.emitsOptions, b)) continue;
          const v = e[b];
          if (u) if (we(i, b)) v !== i[b] && (i[b] = v, h = true);
          else {
            const I = mt(b);
            s[I] = _o(u, c, I, v, t, false);
          }
          else v !== i[b] && (i[b] = v, h = true);
        }
      }
    } else {
      mu(t, e, s, i) && (h = true);
      let d;
      for (const p in c) (!e || !we(e, p) && ((d = kn(p)) === p || !we(e, d))) && (u ? n && (n[p] !== void 0 || n[d] !== void 0) && (s[p] = _o(u, c, p, void 0, t, true)) : delete s[p]);
      if (i !== c) for (const p in i) (!e || !we(e, p)) && (delete i[p], h = true);
    }
    h && Yt(t.attrs, "set", "");
  }
  function mu(t, e, n, r) {
    const [s, i] = t.propsOptions;
    let l = false, c;
    if (e) for (let u in e) {
      if (Nr(u)) continue;
      const h = e[u];
      let d;
      s && we(s, d = mt(u)) ? !i || !i.includes(d) ? n[d] = h : (c || (c = {}))[d] = h : ri(t.emitsOptions, u) || (!(u in r) || h !== r[u]) && (r[u] = h, l = true);
    }
    if (i) {
      const u = Ee(n), h = c || Ae;
      for (let d = 0; d < i.length; d++) {
        const p = i[d];
        n[p] = _o(s, u, p, h[p], t, !we(h, p));
      }
    }
    return l;
  }
  function _o(t, e, n, r, s, i) {
    const l = t[n];
    if (l != null) {
      const c = we(l, "default");
      if (c && r === void 0) {
        const u = l.default;
        if (l.type !== Function && !l.skipFactory && le(u)) {
          const { propsDefaults: h } = s;
          if (n in h) r = h[n];
          else {
            const d = es(s);
            r = h[n] = u.call(null, e), d();
          }
        } else r = u;
        s.ce && s.ce._setProp(n, r);
      }
      l[0] && (i && !c ? r = false : l[1] && (r === "" || r === kn(n)) && (r = true));
    }
    return r;
  }
  const Ag = /* @__PURE__ */ new WeakMap();
  function vu(t, e, n = false) {
    const r = n ? Ag : e.propsCache, s = r.get(t);
    if (s) return s;
    const i = t.props, l = {}, c = [];
    let u = false;
    if (!le(t)) {
      const d = (p) => {
        u = true;
        const [b, v] = vu(p, e, true);
        je(l, b), v && c.push(...v);
      };
      !n && e.mixins.length && e.mixins.forEach(d), t.extends && d(t.extends), t.mixins && t.mixins.forEach(d);
    }
    if (!i && !u) return Oe(t) && r.set(t, tr), tr;
    if (ae(i)) for (let d = 0; d < i.length; d++) {
      const p = mt(i[d]);
      rl(p) && (l[p] = Ae);
    }
    else if (i) for (const d in i) {
      const p = mt(d);
      if (rl(p)) {
        const b = i[d], v = l[p] = ae(b) || le(b) ? {
          type: b
        } : je({}, b), I = v.type;
        let $ = false, H = true;
        if (ae(I)) for (let W = 0; W < I.length; ++W) {
          const k = I[W], B = le(k) && k.name;
          if (B === "Boolean") {
            $ = true;
            break;
          } else B === "String" && (H = false);
        }
        else $ = le(I) && I.name === "Boolean";
        v[0] = $, v[1] = H, ($ || we(v, "default")) && c.push(p);
      }
    }
    const h = [
      l,
      c
    ];
    return Oe(t) && r.set(t, h), h;
  }
  function rl(t) {
    return t[0] !== "$" && !Nr(t);
  }
  const bu = (t) => t[0] === "_" || t === "$stable", Qo = (t) => ae(t) ? t.map(Dt) : [
    Dt(t)
  ], Sg = (t, e, n) => {
    if (e._n) return e;
    const r = $s((...s) => Qo(e(...s)), n);
    return r._c = false, r;
  }, Eu = (t, e, n) => {
    const r = t._ctx;
    for (const s in t) {
      if (bu(s)) continue;
      const i = t[s];
      if (le(i)) e[s] = Sg(s, i, r);
      else if (i != null) {
        const l = Qo(i);
        e[s] = () => l;
      }
    }
  }, yu = (t, e) => {
    const n = Qo(e);
    t.slots.default = () => n;
  }, Tu = (t, e, n) => {
    for (const r in e) (n || r !== "_") && (t[r] = e[r]);
  }, Cg = (t, e, n) => {
    const r = t.slots = gu();
    if (t.vnode.shapeFlag & 32) {
      const s = e._;
      s ? (Tu(r, e, n), n && $c(r, "_", s, true)) : Eu(e, r);
    } else e && yu(t, e);
  }, Og = (t, e, n) => {
    const { vnode: r, slots: s } = t;
    let i = true, l = Ae;
    if (r.shapeFlag & 32) {
      const c = e._;
      c ? n && c === 1 ? i = false : Tu(s, e, n) : (i = !e.$stable, Eu(e, s)), l = e;
    } else e && (yu(t, e), l = {
      default: 1
    });
    if (i) for (const c in s) !bu(c) && l[c] == null && delete s[c];
  }, at = Wg;
  function Pg(t) {
    return $g(t);
  }
  function $g(t, e) {
    const n = Zs();
    n.__VUE__ = true;
    const { insert: r, remove: s, patchProp: i, createElement: l, createText: c, createComment: u, setText: h, setElementText: d, parentNode: p, nextSibling: b, setScopeId: v = Lt, insertStaticContent: I } = t, $ = (g, _, E, O = null, P = null, C = null, U = void 0, M = null, L = !!_.dynamicChildren) => {
      if (g === _) return;
      g && !Cr(g, _) && (O = A(g), Se(g, P, C, true), g = null), _.patchFlag === -2 && (L = false, _.dynamicChildren = null);
      const { type: x, ref: J, shapeFlag: F } = _;
      switch (x) {
        case si:
          H(g, _, E, O);
          break;
        case Dn:
          W(g, _, E, O);
          break;
        case Vi:
          g == null && k(_, E, O, U);
          break;
        case xt:
          he(g, _, E, O, P, C, U, M, L);
          break;
        default:
          F & 1 ? Y(g, _, E, O, P, C, U, M, L) : F & 6 ? ge(g, _, E, O, P, C, U, M, L) : (F & 64 || F & 128) && x.process(g, _, E, O, P, C, U, M, L, Z);
      }
      J != null && P && Hs(J, g && g.ref, C, _ || g, !_);
    }, H = (g, _, E, O) => {
      if (g == null) r(_.el = c(_.children), E, O);
      else {
        const P = _.el = g.el;
        _.children !== g.children && h(P, _.children);
      }
    }, W = (g, _, E, O) => {
      g == null ? r(_.el = u(_.children || ""), E, O) : _.el = g.el;
    }, k = (g, _, E, O) => {
      [g.el, g.anchor] = I(g.children, _, E, O, g.el, g.anchor);
    }, B = ({ el: g, anchor: _ }, E, O) => {
      let P;
      for (; g && g !== _; ) P = b(g), r(g, E, O), g = P;
      r(_, E, O);
    }, D = ({ el: g, anchor: _ }) => {
      let E;
      for (; g && g !== _; ) E = b(g), s(g), g = E;
      s(_);
    }, Y = (g, _, E, O, P, C, U, M, L) => {
      _.type === "svg" ? U = "svg" : _.type === "math" && (U = "mathml"), g == null ? X(_, E, O, P, C, U, M, L) : te(g, _, P, C, U, M, L);
    }, X = (g, _, E, O, P, C, U, M) => {
      let L, x;
      const { props: J, shapeFlag: F, transition: Q, dirs: se } = g;
      if (L = g.el = l(g.type, C, J && J.is, J), F & 8 ? d(L, g.children) : F & 16 && ee(g.children, L, null, O, P, Fi(g, C), U, M), se && Tn(g, null, O, "created"), ne(L, g, g.scopeId, U, O), J) {
        for (const ye in J) ye !== "value" && !Nr(ye) && i(L, ye, null, J[ye], C, O);
        "value" in J && i(L, "value", null, J.value, C), (x = J.onVnodeBeforeMount) && Nt(x, O, g);
      }
      se && Tn(g, null, O, "beforeMount");
      const de = Rg(P, Q);
      de && Q.beforeEnter(L), r(L, _, E), ((x = J && J.onVnodeMounted) || de || se) && at(() => {
        x && Nt(x, O, g), de && Q.enter(L), se && Tn(g, null, O, "mounted");
      }, P);
    }, ne = (g, _, E, O, P) => {
      if (E && v(g, E), O) for (let C = 0; C < O.length; C++) v(g, O[C]);
      if (P) {
        let C = P.subTree;
        if (_ === C || Pu(C.type) && (C.ssContent === _ || C.ssFallback === _)) {
          const U = P.vnode;
          ne(g, U, U.scopeId, U.slotScopeIds, P.parent);
        }
      }
    }, ee = (g, _, E, O, P, C, U, M, L = 0) => {
      for (let x = L; x < g.length; x++) {
        const J = g[x] = M ? ln(g[x]) : Dt(g[x]);
        $(null, J, _, E, O, P, C, U, M);
      }
    }, te = (g, _, E, O, P, C, U) => {
      const M = _.el = g.el;
      let { patchFlag: L, dynamicChildren: x, dirs: J } = _;
      L |= g.patchFlag & 16;
      const F = g.props || Ae, Q = _.props || Ae;
      let se;
      if (E && wn(E, false), (se = Q.onVnodeBeforeUpdate) && Nt(se, E, _, g), J && Tn(_, g, E, "beforeUpdate"), E && wn(E, true), (F.innerHTML && Q.innerHTML == null || F.textContent && Q.textContent == null) && d(M, ""), x ? R(g.dynamicChildren, x, M, E, O, Fi(_, P), C) : U || ue(g, _, M, null, E, O, Fi(_, P), C, false), L > 0) {
        if (L & 16) pe(M, F, Q, E, P);
        else if (L & 2 && F.class !== Q.class && i(M, "class", null, Q.class, P), L & 4 && i(M, "style", F.style, Q.style, P), L & 8) {
          const de = _.dynamicProps;
          for (let ye = 0; ye < de.length; ye++) {
            const ve = de[ye], Be = F[ve], He = Q[ve];
            (He !== Be || ve === "value") && i(M, ve, Be, He, P, E);
          }
        }
        L & 1 && g.children !== _.children && d(M, _.children);
      } else !U && x == null && pe(M, F, Q, E, P);
      ((se = Q.onVnodeUpdated) || J) && at(() => {
        se && Nt(se, E, _, g), J && Tn(_, g, E, "updated");
      }, O);
    }, R = (g, _, E, O, P, C, U) => {
      for (let M = 0; M < _.length; M++) {
        const L = g[M], x = _[M], J = L.el && (L.type === xt || !Cr(L, x) || L.shapeFlag & 70) ? p(L.el) : E;
        $(L, x, J, null, O, P, C, U, true);
      }
    }, pe = (g, _, E, O, P) => {
      if (_ !== E) {
        if (_ !== Ae) for (const C in _) !Nr(C) && !(C in E) && i(g, C, _[C], null, P, O);
        for (const C in E) {
          if (Nr(C)) continue;
          const U = E[C], M = _[C];
          U !== M && C !== "value" && i(g, C, M, U, P, O);
        }
        "value" in E && i(g, "value", _.value, E.value, P);
      }
    }, he = (g, _, E, O, P, C, U, M, L) => {
      const x = _.el = g ? g.el : c(""), J = _.anchor = g ? g.anchor : c("");
      let { patchFlag: F, dynamicChildren: Q, slotScopeIds: se } = _;
      se && (M = M ? M.concat(se) : se), g == null ? (r(x, E, O), r(J, E, O), ee(_.children || [], E, J, P, C, U, M, L)) : F > 0 && F & 64 && Q && g.dynamicChildren ? (R(g.dynamicChildren, Q, E, P, C, U, M), (_.key != null || P && _ === P.subTree) && wu(g, _, true)) : ue(g, _, E, J, P, C, U, M, L);
    }, ge = (g, _, E, O, P, C, U, M, L) => {
      _.slotScopeIds = M, g == null ? _.shapeFlag & 512 ? P.ctx.activate(_, E, O, U, L) : Re(_, E, O, P, C, U, L) : ce(g, _, L);
    }, Re = (g, _, E, O, P, C, U) => {
      const M = g.component = Jg(g, O, P);
      if (lu(g) && (M.ctx.renderer = Z), Xg(M, false, U), M.asyncDep) {
        if (P && P.registerDep(M, G, U), !g.el) {
          const L = M.subTree = Fe(Dn);
          W(null, L, _, E);
        }
      } else G(M, g, _, E, P, C, U);
    }, ce = (g, _, E) => {
      const O = _.component = g.component;
      if (Vg(g, _, E)) if (O.asyncDep && !O.asyncResolved) {
        re(O, _, E);
        return;
      } else O.next = _, O.update();
      else _.el = g.el, O.vnode = _;
    }, G = (g, _, E, O, P, C, U) => {
      const M = () => {
        if (g.isMounted) {
          let { next: F, bu: Q, u: se, parent: de, vnode: ye } = g;
          {
            const ht = Au(g);
            if (ht) {
              F && (F.el = ye.el, re(g, F, U)), ht.asyncDep.then(() => {
                g.isUnmounted || M();
              });
              return;
            }
          }
          let ve = F, Be;
          wn(g, false), F ? (F.el = ye.el, re(g, F, U)) : F = ye, Q && Ps(Q), (Be = F.props && F.props.onVnodeBeforeUpdate) && Nt(Be, de, F, ye), wn(g, true);
          const He = il(g), dt = g.subTree;
          g.subTree = He, $(dt, He, p(dt.el), A(dt), g, P, C), F.el = He.el, ve === null && Hg(g, He.el), se && at(se, P), (Be = F.props && F.props.onVnodeUpdated) && at(() => Nt(Be, de, F, ye), P);
        } else {
          let F;
          const { el: Q, props: se } = _, { bm: de, m: ye, parent: ve, root: Be, type: He } = g, dt = Dr(_);
          wn(g, false), de && Ps(de), !dt && (F = se && se.onVnodeBeforeMount) && Nt(F, ve, _), wn(g, true);
          {
            Be.ce && Be.ce._injectChildStyle(He);
            const ht = g.subTree = il(g);
            $(null, ht, E, O, g, P, C), _.el = ht.el;
          }
          if (ye && at(ye, P), !dt && (F = se && se.onVnodeMounted)) {
            const ht = _;
            at(() => Nt(F, ve, ht), P);
          }
          (_.shapeFlag & 256 || ve && Dr(ve.vnode) && ve.vnode.shapeFlag & 256) && g.a && at(g.a, P), g.isMounted = true, _ = E = O = null;
        }
      };
      g.scope.on();
      const L = g.effect = new kc(M);
      g.scope.off();
      const x = g.update = L.run.bind(L), J = g.job = L.runIfDirty.bind(L);
      J.i = g, J.id = g.uid, L.scheduler = () => Jo(J), wn(g, true), x();
    }, re = (g, _, E) => {
      _.component = g;
      const O = g.vnode.props;
      g.vnode = _, g.next = null, wg(g, _.props, O, E), Og(g, _.children, E), gn(), Ja(g), _n();
    }, ue = (g, _, E, O, P, C, U, M, L = false) => {
      const x = g && g.children, J = g ? g.shapeFlag : 0, F = _.children, { patchFlag: Q, shapeFlag: se } = _;
      if (Q > 0) {
        if (Q & 128) {
          Ve(x, F, E, O, P, C, U, M, L);
          return;
        } else if (Q & 256) {
          Ne(x, F, E, O, P, C, U, M, L);
          return;
        }
      }
      se & 8 ? (J & 16 && Ie(x, P, C), F !== x && d(E, F)) : J & 16 ? se & 16 ? Ve(x, F, E, O, P, C, U, M, L) : Ie(x, P, C, true) : (J & 8 && d(E, ""), se & 16 && ee(F, E, O, P, C, U, M, L));
    }, Ne = (g, _, E, O, P, C, U, M, L) => {
      g = g || tr, _ = _ || tr;
      const x = g.length, J = _.length, F = Math.min(x, J);
      let Q;
      for (Q = 0; Q < F; Q++) {
        const se = _[Q] = L ? ln(_[Q]) : Dt(_[Q]);
        $(g[Q], se, E, null, P, C, U, M, L);
      }
      x > J ? Ie(g, P, C, true, false, F) : ee(_, E, O, P, C, U, M, L, F);
    }, Ve = (g, _, E, O, P, C, U, M, L) => {
      let x = 0;
      const J = _.length;
      let F = g.length - 1, Q = J - 1;
      for (; x <= F && x <= Q; ) {
        const se = g[x], de = _[x] = L ? ln(_[x]) : Dt(_[x]);
        if (Cr(se, de)) $(se, de, E, null, P, C, U, M, L);
        else break;
        x++;
      }
      for (; x <= F && x <= Q; ) {
        const se = g[F], de = _[Q] = L ? ln(_[Q]) : Dt(_[Q]);
        if (Cr(se, de)) $(se, de, E, null, P, C, U, M, L);
        else break;
        F--, Q--;
      }
      if (x > F) {
        if (x <= Q) {
          const se = Q + 1, de = se < J ? _[se].el : O;
          for (; x <= Q; ) $(null, _[x] = L ? ln(_[x]) : Dt(_[x]), E, de, P, C, U, M, L), x++;
        }
      } else if (x > Q) for (; x <= F; ) Se(g[x], P, C, true), x++;
      else {
        const se = x, de = x, ye = /* @__PURE__ */ new Map();
        for (x = de; x <= Q; x++) {
          const Ke = _[x] = L ? ln(_[x]) : Dt(_[x]);
          Ke.key != null && ye.set(Ke.key, x);
        }
        let ve, Be = 0;
        const He = Q - de + 1;
        let dt = false, ht = 0;
        const en = new Array(He);
        for (x = 0; x < He; x++) en[x] = 0;
        for (x = se; x <= F; x++) {
          const Ke = g[x];
          if (Be >= He) {
            Se(Ke, P, C, true);
            continue;
          }
          let it;
          if (Ke.key != null) it = ye.get(Ke.key);
          else for (ve = de; ve <= Q; ve++) if (en[ve - de] === 0 && Cr(Ke, _[ve])) {
            it = ve;
            break;
          }
          it === void 0 ? Se(Ke, P, C, true) : (en[it - de] = x + 1, it >= ht ? ht = it : dt = true, $(Ke, _[it], E, null, P, C, U, M, L), Be++);
        }
        const Er = dt ? Ng(en) : tr;
        for (ve = Er.length - 1, x = He - 1; x >= 0; x--) {
          const Ke = de + x, it = _[Ke], os = Ke + 1 < J ? _[Ke + 1].el : O;
          en[x] === 0 ? $(null, it, E, os, P, C, U, M, L) : dt && (ve < 0 || x !== Er[ve] ? xe(it, E, os, 2) : ve--);
        }
      }
    }, xe = (g, _, E, O, P = null) => {
      const { el: C, type: U, transition: M, children: L, shapeFlag: x } = g;
      if (x & 6) {
        xe(g.component.subTree, _, E, O);
        return;
      }
      if (x & 128) {
        g.suspense.move(_, E, O);
        return;
      }
      if (x & 64) {
        U.move(g, _, E, Z);
        return;
      }
      if (U === xt) {
        r(C, _, E);
        for (let F = 0; F < L.length; F++) xe(L[F], _, E, O);
        r(g.anchor, _, E);
        return;
      }
      if (U === Vi) {
        B(g, _, E);
        return;
      }
      if (O !== 2 && x & 1 && M) if (O === 0) M.beforeEnter(C), r(C, _, E), at(() => M.enter(C), P);
      else {
        const { leave: F, delayLeave: Q, afterLeave: se } = M, de = () => r(C, _, E), ye = () => {
          F(C, () => {
            de(), se && se();
          });
        };
        Q ? Q(C, de, ye) : ye();
      }
      else r(C, _, E);
    }, Se = (g, _, E, O = false, P = false) => {
      const { type: C, props: U, ref: M, children: L, dynamicChildren: x, shapeFlag: J, patchFlag: F, dirs: Q, cacheIndex: se } = g;
      if (F === -2 && (P = false), M != null && Hs(M, null, E, g, true), se != null && (_.renderCache[se] = void 0), J & 256) {
        _.ctx.deactivate(g);
        return;
      }
      const de = J & 1 && Q, ye = !Dr(g);
      let ve;
      if (ye && (ve = U && U.onVnodeBeforeUnmount) && Nt(ve, _, g), J & 6) Le(g.component, E, O);
      else {
        if (J & 128) {
          g.suspense.unmount(E, O);
          return;
        }
        de && Tn(g, null, _, "beforeUnmount"), J & 64 ? g.type.remove(g, _, E, Z, O) : x && !x.hasOnce && (C !== xt || F > 0 && F & 64) ? Ie(x, _, E, false, true) : (C === xt && F & 384 || !P && J & 16) && Ie(L, _, E), O && st(g);
      }
      (ye && (ve = U && U.onVnodeUnmounted) || de) && at(() => {
        ve && Nt(ve, _, g), de && Tn(g, null, _, "unmounted");
      }, E);
    }, st = (g) => {
      const { type: _, el: E, anchor: O, transition: P } = g;
      if (_ === xt) {
        Me(E, O);
        return;
      }
      if (_ === Vi) {
        D(g);
        return;
      }
      const C = () => {
        s(E), P && !P.persisted && P.afterLeave && P.afterLeave();
      };
      if (g.shapeFlag & 1 && P && !P.persisted) {
        const { leave: U, delayLeave: M } = P, L = () => U(E, C);
        M ? M(g.el, C, L) : L();
      } else C();
    }, Me = (g, _) => {
      let E;
      for (; g !== _; ) E = b(g), s(g), g = E;
      s(_);
    }, Le = (g, _, E) => {
      const { bum: O, scope: P, job: C, subTree: U, um: M, m: L, a: x } = g;
      sl(L), sl(x), O && Ps(O), P.stop(), C && (C.flags |= 8, Se(U, g, _, E)), M && at(M, _), at(() => {
        g.isUnmounted = true;
      }, _), _ && _.pendingBranch && !_.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === _.pendingId && (_.deps--, _.deps === 0 && _.resolve());
    }, Ie = (g, _, E, O = false, P = false, C = 0) => {
      for (let U = C; U < g.length; U++) Se(g[U], _, E, O, P);
    }, A = (g) => {
      if (g.shapeFlag & 6) return A(g.component.subTree);
      if (g.shapeFlag & 128) return g.suspense.next();
      const _ = b(g.anchor || g.el), E = _ && _[Jp];
      return E ? b(E) : _;
    };
    let K = false;
    const j = (g, _, E) => {
      g == null ? _._vnode && Se(_._vnode, null, null, true) : $(_._vnode || null, g, _, null, null, null, E), _._vnode = g, K || (K = true, Ja(), ru(), K = false);
    }, Z = {
      p: $,
      um: Se,
      m: xe,
      r: st,
      mt: Re,
      mc: ee,
      pc: ue,
      pbc: R,
      n: A,
      o: t
    };
    return {
      render: j,
      hydrate: void 0,
      createApp: Eg(j)
    };
  }
  function Fi({ type: t, props: e }, n) {
    return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
  }
  function wn({ effect: t, job: e }, n) {
    n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
  }
  function Rg(t, e) {
    return (!t || t && !t.pendingBranch) && e && !e.persisted;
  }
  function wu(t, e, n = false) {
    const r = t.children, s = e.children;
    if (ae(r) && ae(s)) for (let i = 0; i < r.length; i++) {
      const l = r[i];
      let c = s[i];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = s[i] = ln(s[i]), c.el = l.el), !n && c.patchFlag !== -2 && wu(l, c)), c.type === si && (c.el = l.el);
    }
  }
  function Ng(t) {
    const e = t.slice(), n = [
      0
    ];
    let r, s, i, l, c;
    const u = t.length;
    for (r = 0; r < u; r++) {
      const h = t[r];
      if (h !== 0) {
        if (s = n[n.length - 1], t[s] < h) {
          e[r] = s, n.push(r);
          continue;
        }
        for (i = 0, l = n.length - 1; i < l; ) c = i + l >> 1, t[n[c]] < h ? i = c + 1 : l = c;
        h < t[n[i]] && (i > 0 && (e[r] = n[i - 1]), n[i] = r);
      }
    }
    for (i = n.length, l = n[i - 1]; i-- > 0; ) n[i] = l, l = e[l];
    return n;
  }
  function Au(t) {
    const e = t.subTree.component;
    if (e) return e.asyncDep && !e.asyncResolved ? e : Au(e);
  }
  function sl(t) {
    if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8;
  }
  const Ig = Symbol.for("v-scx"), xg = () => Mt(Ig);
  function Mr(t, e, n) {
    return Su(t, e, n);
  }
  function Su(t, e, n = Ae) {
    const { immediate: r, deep: s, flush: i, once: l } = n, c = je({}, n), u = e && r || !e && i !== "post";
    let h;
    if (Yr) {
      if (i === "sync") {
        const v = xg();
        h = v.__watcherHandles || (v.__watcherHandles = []);
      } else if (!u) {
        const v = () => {
        };
        return v.stop = Lt, v.resume = Lt, v.pause = Lt, v;
      }
    }
    const d = ke;
    c.call = (v, I, $) => Ht(v, d, I, $);
    let p = false;
    i === "post" ? c.scheduler = (v) => {
      at(v, d && d.suspense);
    } : i !== "sync" && (p = true, c.scheduler = (v, I) => {
      I ? v() : Jo(v);
    }), c.augmentJob = (v) => {
      e && (v.flags |= 4), p && (v.flags |= 2, d && (v.id = d.uid, v.i = d));
    };
    const b = zp(t, e, c);
    return Yr && (h ? h.push(b) : u && b()), b;
  }
  function Dg(t, e, n) {
    const r = this.proxy, s = De(t) ? t.includes(".") ? Cu(r, t) : () => r[t] : t.bind(r, r);
    let i;
    le(e) ? i = e : (i = e.handler, n = e);
    const l = es(this), c = Su(s, i.bind(r), n);
    return l(), c;
  }
  function Cu(t, e) {
    const n = e.split(".");
    return () => {
      let r = t;
      for (let s = 0; s < n.length && r; s++) r = r[n[s]];
      return r;
    };
  }
  const Lg = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${mt(e)}Modifiers`] || t[`${kn(e)}Modifiers`];
  function Mg(t, e, ...n) {
    if (t.isUnmounted) return;
    const r = t.vnode.props || Ae;
    let s = n;
    const i = e.startsWith("update:"), l = i && Lg(r, e.slice(7));
    l && (l.trim && (s = n.map((d) => De(d) ? d.trim() : d)), l.number && (s = n.map(ao)));
    let c, u = r[c = Ii(e)] || r[c = Ii(mt(e))];
    !u && i && (u = r[c = Ii(kn(e))]), u && Ht(u, t, 6, s);
    const h = r[c + "Once"];
    if (h) {
      if (!t.emitted) t.emitted = {};
      else if (t.emitted[c]) return;
      t.emitted[c] = true, Ht(h, t, 6, s);
    }
  }
  function Ou(t, e, n = false) {
    const r = e.emitsCache, s = r.get(t);
    if (s !== void 0) return s;
    const i = t.emits;
    let l = {}, c = false;
    if (!le(t)) {
      const u = (h) => {
        const d = Ou(h, e, true);
        d && (c = true, je(l, d));
      };
      !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
    }
    return !i && !c ? (Oe(t) && r.set(t, null), null) : (ae(i) ? i.forEach((u) => l[u] = null) : je(l, i), Oe(t) && r.set(t, l), l);
  }
  function ri(t, e) {
    return !t || !qs(e) ? false : (e = e.slice(2).replace(/Once$/, ""), we(t, e[0].toLowerCase() + e.slice(1)) || we(t, kn(e)) || we(t, e));
  }
  function il(t) {
    const { type: e, vnode: n, proxy: r, withProxy: s, propsOptions: [i], slots: l, attrs: c, emit: u, render: h, renderCache: d, props: p, data: b, setupState: v, ctx: I, inheritAttrs: $ } = t, H = Vs(t);
    let W, k;
    try {
      if (n.shapeFlag & 4) {
        const D = s || r, Y = D;
        W = Dt(h.call(Y, D, d, p, v, b, I)), k = c;
      } else {
        const D = e;
        W = Dt(D.length > 1 ? D(p, {
          attrs: c,
          slots: l,
          emit: u
        }) : D(p, null)), k = e.props ? c : kg(c);
      }
    } catch (D) {
      kr.length = 0, ti(D, t, 1), W = Fe(Dn);
    }
    let B = W;
    if (k && $ !== false) {
      const D = Object.keys(k), { shapeFlag: Y } = B;
      D.length && Y & 7 && (i && D.some(Do) && (k = Fg(k, i)), B = or(B, k, false, true));
    }
    return n.dirs && (B = or(B, null, false, true), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition && Xo(B, n.transition), W = B, Vs(H), W;
  }
  const kg = (t) => {
    let e;
    for (const n in t) (n === "class" || n === "style" || qs(n)) && ((e || (e = {}))[n] = t[n]);
    return e;
  }, Fg = (t, e) => {
    const n = {};
    for (const r in t) (!Do(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
    return n;
  };
  function Vg(t, e, n) {
    const { props: r, children: s, component: i } = t, { props: l, children: c, patchFlag: u } = e, h = i.emitsOptions;
    if (e.dirs || e.transition) return true;
    if (n && u >= 0) {
      if (u & 1024) return true;
      if (u & 16) return r ? ol(r, l, h) : !!l;
      if (u & 8) {
        const d = e.dynamicProps;
        for (let p = 0; p < d.length; p++) {
          const b = d[p];
          if (l[b] !== r[b] && !ri(h, b)) return true;
        }
      }
    } else return (s || c) && (!c || !c.$stable) ? true : r === l ? false : r ? l ? ol(r, l, h) : true : !!l;
    return false;
  }
  function ol(t, e, n) {
    const r = Object.keys(e);
    if (r.length !== Object.keys(t).length) return true;
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      if (e[i] !== t[i] && !ri(n, i)) return true;
    }
    return false;
  }
  function Hg({ vnode: t, parent: e }, n) {
    for (; e; ) {
      const r = e.subTree;
      if (r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t) (t = e.vnode).el = n, e = e.parent;
      else break;
    }
  }
  const Pu = (t) => t.__isSuspense;
  function Wg(t, e) {
    e && e.pendingBranch ? ae(t) ? e.effects.push(...t) : e.effects.push(t) : qp(t);
  }
  const xt = Symbol.for("v-fgt"), si = Symbol.for("v-txt"), Dn = Symbol.for("v-cmt"), Vi = Symbol.for("v-stc"), kr = [];
  let lt = null;
  $u = function(t = false) {
    kr.push(lt = t ? null : []);
  };
  function Ug() {
    kr.pop(), lt = kr[kr.length - 1] || null;
  }
  let zr = 1;
  function al(t, e = false) {
    zr += t, t < 0 && lt && e && (lt.hasOnce = true);
  }
  function Ru(t) {
    return t.dynamicChildren = zr > 0 ? lt || tr : null, Ug(), zr > 0 && lt && lt.push(t), t;
  }
  jg = function(t, e, n, r, s, i) {
    return Ru(Tt(t, e, n, r, s, i, true));
  };
  function Bg(t, e, n, r, s) {
    return Ru(Fe(t, e, n, r, s, true));
  }
  function Us(t) {
    return t ? t.__v_isVNode === true : false;
  }
  function Cr(t, e) {
    return t.type === e.type && t.key === e.key;
  }
  const Nu = ({ key: t }) => t ?? null, Ns = ({ ref: t, ref_key: e, ref_for: n }) => (typeof t == "number" && (t = "" + t), t != null ? De(t) || $e(t) || le(t) ? {
    i: rt,
    r: t,
    k: e,
    f: !!n
  } : t : null);
  Tt = function(t, e = null, n = null, r = 0, s = null, i = t === xt ? 0 : 1, l = false, c = false) {
    const u = {
      __v_isVNode: true,
      __v_skip: true,
      type: t,
      props: e,
      key: e && Nu(e),
      ref: e && Ns(e),
      scopeId: iu,
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
    return c ? (Zo(u, n), i & 128 && t.normalize(u)) : n && (u.shapeFlag |= De(n) ? 8 : 16), zr > 0 && !l && lt && (u.patchFlag > 0 || i & 6) && u.patchFlag !== 32 && lt.push(u), u;
  };
  Fe = Kg;
  function Kg(t, e = null, n = null, r = 0, s = null, i = false) {
    if ((!t || t === fg) && (t = Dn), Us(t)) {
      const c = or(t, e, true);
      return n && Zo(c, n), zr > 0 && !i && lt && (c.shapeFlag & 6 ? lt[lt.indexOf(t)] = c : lt.push(c)), c.patchFlag = -2, c;
    }
    if (n_(t) && (t = t.__vccOpts), e) {
      e = zg(e);
      let { class: c, style: u } = e;
      c && !De(c) && (e.class = Fo(c)), Oe(u) && (zo(u) && !ae(u) && (u = je({}, u)), e.style = ko(u));
    }
    const l = De(t) ? 1 : Pu(t) ? 128 : Xp(t) ? 64 : Oe(t) ? 4 : le(t) ? 2 : 0;
    return Tt(t, e, n, r, s, l, i, true);
  }
  function zg(t) {
    return t ? zo(t) || _u(t) ? je({}, t) : t : null;
  }
  function or(t, e, n = false, r = false) {
    const { props: s, ref: i, patchFlag: l, children: c, transition: u } = t, h = e ? Yg(s || {}, e) : s, d = {
      __v_isVNode: true,
      __v_skip: true,
      type: t.type,
      props: h,
      key: h && Nu(h),
      ref: e && e.ref ? n && i ? ae(i) ? i.concat(Ns(e)) : [
        i,
        Ns(e)
      ] : Ns(e) : i,
      scopeId: t.scopeId,
      slotScopeIds: t.slotScopeIds,
      children: c,
      target: t.target,
      targetStart: t.targetStart,
      targetAnchor: t.targetAnchor,
      staticCount: t.staticCount,
      shapeFlag: t.shapeFlag,
      patchFlag: e && t.type !== xt ? l === -1 ? 16 : l | 16 : l,
      dynamicProps: t.dynamicProps,
      dynamicChildren: t.dynamicChildren,
      appContext: t.appContext,
      dirs: t.dirs,
      transition: u,
      component: t.component,
      suspense: t.suspense,
      ssContent: t.ssContent && or(t.ssContent),
      ssFallback: t.ssFallback && or(t.ssFallback),
      el: t.el,
      anchor: t.anchor,
      ctx: t.ctx,
      ce: t.ce
    };
    return u && r && Xo(d, u.clone(d)), d;
  }
  mo = function(t = " ", e = 0) {
    return Fe(si, null, t, e);
  };
  hw = function(t = "", e = false) {
    return e ? ($u(), Bg(Dn, null, t)) : Fe(Dn, null, t);
  };
  function Dt(t) {
    return t == null || typeof t == "boolean" ? Fe(Dn) : ae(t) ? Fe(xt, null, t.slice()) : Us(t) ? ln(t) : Fe(si, null, String(t));
  }
  function ln(t) {
    return t.el === null && t.patchFlag !== -1 || t.memo ? t : or(t);
  }
  function Zo(t, e) {
    let n = 0;
    const { shapeFlag: r } = t;
    if (e == null) e = null;
    else if (ae(e)) n = 16;
    else if (typeof e == "object") if (r & 65) {
      const s = e.default;
      s && (s._c && (s._d = false), Zo(t, s()), s._c && (s._d = true));
      return;
    } else {
      n = 32;
      const s = e._;
      !s && !_u(e) ? e._ctx = rt : s === 3 && rt && (rt.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
    else le(e) ? (e = {
      default: e,
      _ctx: rt
    }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [
      mo(e)
    ]) : n = 8);
    t.children = e, t.shapeFlag |= n;
  }
  function Yg(...t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      for (const s in r) if (s === "class") e.class !== r.class && (e.class = Fo([
        e.class,
        r.class
      ]));
      else if (s === "style") e.style = ko([
        e.style,
        r.style
      ]);
      else if (qs(s)) {
        const i = e[s], l = r[s];
        l && i !== l && !(ae(i) && i.includes(l)) && (e[s] = i ? [].concat(i, l) : l);
      } else s !== "" && (e[s] = r[s]);
    }
    return e;
  }
  function Nt(t, e, n, r = null) {
    Ht(t, e, 7, [
      n,
      r
    ]);
  }
  const Gg = hu();
  let qg = 0;
  function Jg(t, e, n) {
    const r = t.type, s = (e ? e.appContext : t.appContext) || Gg, i = {
      uid: qg++,
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
      scope: new Dc(true),
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
      propsOptions: vu(r, s),
      emitsOptions: Ou(r, s),
      emit: null,
      emitted: null,
      propsDefaults: Ae,
      inheritAttrs: r.inheritAttrs,
      ctx: Ae,
      data: Ae,
      props: Ae,
      attrs: Ae,
      slots: Ae,
      refs: Ae,
      setupState: Ae,
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
    }, i.root = e ? e.root : i, i.emit = Mg.bind(null, i), t.ce && t.ce(i), i;
  }
  let ke = null, js, vo;
  {
    const t = Zs(), e = (n, r) => {
      let s;
      return (s = t[n]) || (s = t[n] = []), s.push(r), (i) => {
        s.length > 1 ? s.forEach((l) => l(i)) : s[0](i);
      };
    };
    js = e("__VUE_INSTANCE_SETTERS__", (n) => ke = n), vo = e("__VUE_SSR_SETTERS__", (n) => Yr = n);
  }
  const es = (t) => {
    const e = ke;
    return js(t), t.scope.on(), () => {
      t.scope.off(), js(e);
    };
  }, ll = () => {
    ke && ke.scope.off(), js(null);
  };
  function Iu(t) {
    return t.vnode.shapeFlag & 4;
  }
  let Yr = false;
  function Xg(t, e = false, n = false) {
    e && vo(e);
    const { props: r, children: s } = t.vnode, i = Iu(t);
    Tg(t, r, i, e), Cg(t, s, n);
    const l = i ? Qg(t, e) : void 0;
    return e && vo(false), l;
  }
  function Qg(t, e) {
    const n = t.type;
    t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, hg);
    const { setup: r } = n;
    if (r) {
      gn();
      const s = t.setupContext = r.length > 1 ? e_(t) : null, i = es(t), l = Zr(r, t, 0, [
        t.props,
        s
      ]), c = Cc(l);
      if (_n(), i(), (c || t.sp) && !Dr(t) && au(t), c) {
        if (l.then(ll, ll), e) return l.then((u) => {
          cl(t, u);
        }).catch((u) => {
          ti(u, t, 0);
        });
        t.asyncDep = l;
      } else cl(t, l);
    } else xu(t);
  }
  function cl(t, e, n) {
    le(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Oe(e) && (t.setupState = eu(e)), xu(t);
  }
  function xu(t, e, n) {
    const r = t.type;
    t.render || (t.render = r.render || Lt);
    {
      const s = es(t);
      gn();
      try {
        pg(t);
      } finally {
        _n(), s();
      }
    }
  }
  const Zg = {
    get(t, e) {
      return Ue(t, "get", ""), t[e];
    }
  };
  function e_(t) {
    const e = (n) => {
      t.exposed = n || {};
    };
    return {
      attrs: new Proxy(t.attrs, Zg),
      slots: t.slots,
      emit: t.emit,
      expose: e
    };
  }
  function ii(t) {
    return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(eu(Yo(t.exposed)), {
      get(e, n) {
        if (n in e) return e[n];
        if (n in Lr) return Lr[n](t);
      },
      has(e, n) {
        return n in e || n in Lr;
      }
    })) : t.proxy;
  }
  function t_(t, e = true) {
    return le(t) ? t.displayName || t.name : t.name || e && t.__name;
  }
  function n_(t) {
    return le(t) && "__vccOpts" in t;
  }
  const gt = (t, e) => Bp(t, e, Yr);
  function Du(t, e, n) {
    const r = arguments.length;
    return r === 2 ? Oe(e) && !ae(e) ? Us(e) ? Fe(t, null, [
      e
    ]) : Fe(t, e) : Fe(t, null, e) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Us(n) && (n = [
      n
    ]), Fe(t, e, n));
  }
  const r_ = "3.5.13";
  let bo;
  const ul = typeof window < "u" && window.trustedTypes;
  if (ul) try {
    bo = ul.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
  const Lu = bo ? (t) => bo.createHTML(t) : (t) => t, s_ = "http://www.w3.org/2000/svg", i_ = "http://www.w3.org/1998/Math/MathML", zt = typeof document < "u" ? document : null, fl = zt && zt.createElement("template"), o_ = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, n, r) => {
      const s = e === "svg" ? zt.createElementNS(s_, t) : e === "mathml" ? zt.createElementNS(i_, t) : n ? zt.createElement(t, {
        is: n
      }) : zt.createElement(t);
      return t === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
    },
    createText: (t) => zt.createTextNode(t),
    createComment: (t) => zt.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => zt.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "");
    },
    insertStaticContent(t, e, n, r, s, i) {
      const l = n ? n.previousSibling : e.lastChild;
      if (s && (s === i || s.nextSibling)) for (; e.insertBefore(s.cloneNode(true), n), !(s === i || !(s = s.nextSibling)); ) ;
      else {
        fl.innerHTML = Lu(r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t);
        const c = fl.content;
        if (r === "svg" || r === "mathml") {
          const u = c.firstChild;
          for (; u.firstChild; ) c.appendChild(u.firstChild);
          c.removeChild(u);
        }
        e.insertBefore(c, n);
      }
      return [
        l ? l.nextSibling : e.firstChild,
        n ? n.previousSibling : e.lastChild
      ];
    }
  }, a_ = Symbol("_vtc");
  function l_(t, e, n) {
    const r = t[a_];
    r && (e = (e ? [
      e,
      ...r
    ] : [
      ...r
    ]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
  }
  const dl = Symbol("_vod"), c_ = Symbol("_vsh"), u_ = Symbol(""), f_ = /(^|;)\s*display\s*:/;
  function d_(t, e, n) {
    const r = t.style, s = De(n);
    let i = false;
    if (n && !s) {
      if (e) if (De(e)) for (const l of e.split(";")) {
        const c = l.slice(0, l.indexOf(":")).trim();
        n[c] == null && Is(r, c, "");
      }
      else for (const l in e) n[l] == null && Is(r, l, "");
      for (const l in n) l === "display" && (i = true), Is(r, l, n[l]);
    } else if (s) {
      if (e !== n) {
        const l = r[u_];
        l && (n += ";" + l), r.cssText = n, i = f_.test(n);
      }
    } else e && t.removeAttribute("style");
    dl in t && (t[dl] = i ? r.display : "", t[c_] && (r.display = "none"));
  }
  const hl = /\s*!important$/;
  function Is(t, e, n) {
    if (ae(n)) n.forEach((r) => Is(t, e, r));
    else if (n == null && (n = ""), e.startsWith("--")) t.setProperty(e, n);
    else {
      const r = h_(t, e);
      hl.test(n) ? t.setProperty(kn(r), n.replace(hl, ""), "important") : t[r] = n;
    }
  }
  const pl = [
    "Webkit",
    "Moz",
    "ms"
  ], Hi = {};
  function h_(t, e) {
    const n = Hi[e];
    if (n) return n;
    let r = mt(e);
    if (r !== "filter" && r in t) return Hi[e] = r;
    r = Qs(r);
    for (let s = 0; s < pl.length; s++) {
      const i = pl[s] + r;
      if (i in t) return Hi[e] = i;
    }
    return e;
  }
  const gl = "http://www.w3.org/1999/xlink";
  function _l(t, e, n, r, s, i = pp(e)) {
    r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(gl, e.slice(6, e.length)) : t.setAttributeNS(gl, e, n) : n == null || i && !Rc(n) ? t.removeAttribute(e) : t.setAttribute(e, i ? "" : Vt(n) ? String(n) : n);
  }
  function ml(t, e, n, r, s) {
    if (e === "innerHTML" || e === "textContent") {
      n != null && (t[e] = e === "innerHTML" ? Lu(n) : n);
      return;
    }
    const i = t.tagName;
    if (e === "value" && i !== "PROGRESS" && !i.includes("-")) {
      const c = i === "OPTION" ? t.getAttribute("value") || "" : t.value, u = n == null ? t.type === "checkbox" ? "on" : "" : String(n);
      (c !== u || !("_value" in t)) && (t.value = u), n == null && t.removeAttribute(e), t._value = n;
      return;
    }
    let l = false;
    if (n === "" || n == null) {
      const c = typeof t[e];
      c === "boolean" ? n = Rc(n) : n == null && c === "string" ? (n = "", l = true) : c === "number" && (n = 0, l = true);
    }
    try {
      t[e] = n;
    } catch {
    }
    l && t.removeAttribute(s || e);
  }
  function Sn(t, e, n, r) {
    t.addEventListener(e, n, r);
  }
  function p_(t, e, n, r) {
    t.removeEventListener(e, n, r);
  }
  const vl = Symbol("_vei");
  function g_(t, e, n, r, s = null) {
    const i = t[vl] || (t[vl] = {}), l = i[e];
    if (r && l) l.value = r;
    else {
      const [c, u] = __(e);
      if (r) {
        const h = i[e] = b_(r, s);
        Sn(t, c, h, u);
      } else l && (p_(t, c, l, u), i[e] = void 0);
    }
  }
  const bl = /(?:Once|Passive|Capture)$/;
  function __(t) {
    let e;
    if (bl.test(t)) {
      e = {};
      let r;
      for (; r = t.match(bl); ) t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = true;
    }
    return [
      t[2] === ":" ? t.slice(3) : kn(t.slice(2)),
      e
    ];
  }
  let Wi = 0;
  const m_ = Promise.resolve(), v_ = () => Wi || (m_.then(() => Wi = 0), Wi = Date.now());
  function b_(t, e) {
    const n = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= n.attached) return;
      Ht(E_(r, n.value), e, 5, [
        r
      ]);
    };
    return n.value = t, n.attached = v_(), n;
  }
  function E_(t, e) {
    if (ae(e)) {
      const n = t.stopImmediatePropagation;
      return t.stopImmediatePropagation = () => {
        n.call(t), t._stopped = true;
      }, e.map((r) => (s) => !s._stopped && r && r(s));
    } else return e;
  }
  const El = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, y_ = (t, e, n, r, s, i) => {
    const l = s === "svg";
    e === "class" ? l_(t, r, l) : e === "style" ? d_(t, n, r) : qs(e) ? Do(e) || g_(t, e, n, r, i) : (e[0] === "." ? (e = e.slice(1), true) : e[0] === "^" ? (e = e.slice(1), false) : T_(t, e, r, l)) ? (ml(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && _l(t, e, r, l, i, e !== "value")) : t._isVueCE && (/[A-Z]/.test(e) || !De(r)) ? ml(t, mt(e), r, i, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), _l(t, e, r, l));
  };
  function T_(t, e, n, r) {
    if (r) return !!(e === "innerHTML" || e === "textContent" || e in t && El(e) && le(n));
    if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA") return false;
    if (e === "width" || e === "height") {
      const s = t.tagName;
      if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return false;
    }
    return El(e) && De(n) ? false : e in t;
  }
  const Bs = (t) => {
    const e = t.props["onUpdate:modelValue"] || false;
    return ae(e) ? (n) => Ps(e, n) : e;
  };
  function w_(t) {
    t.target.composing = true;
  }
  function yl(t) {
    const e = t.target;
    e.composing && (e.composing = false, e.dispatchEvent(new Event("input")));
  }
  let ir;
  ir = Symbol("_assign");
  pw = {
    created(t, { modifiers: { lazy: e, trim: n, number: r } }, s) {
      t[ir] = Bs(s);
      const i = r || s.props && s.props.type === "number";
      Sn(t, e ? "change" : "input", (l) => {
        if (l.target.composing) return;
        let c = t.value;
        n && (c = c.trim()), i && (c = ao(c)), t[ir](c);
      }), n && Sn(t, "change", () => {
        t.value = t.value.trim();
      }), e || (Sn(t, "compositionstart", w_), Sn(t, "compositionend", yl), Sn(t, "change", yl));
    },
    mounted(t, { value: e }) {
      t.value = e ?? "";
    },
    beforeUpdate(t, { value: e, oldValue: n, modifiers: { lazy: r, trim: s, number: i } }, l) {
      if (t[ir] = Bs(l), t.composing) return;
      const c = (i || t.type === "number") && !/^0\d/.test(t.value) ? ao(t.value) : t.value, u = e ?? "";
      c !== u && (document.activeElement === t && t.type !== "range" && (r && e === n || s && t.value.trim() === u) || (t.value = u));
    }
  };
  gw = {
    deep: true,
    created(t, e, n) {
      t[ir] = Bs(n), Sn(t, "change", () => {
        const r = t._modelValue, s = A_(t), i = t.checked, l = t[ir];
        if (ae(r)) {
          const c = Nc(r, s), u = c !== -1;
          if (i && !u) l(r.concat(s));
          else if (!i && u) {
            const h = [
              ...r
            ];
            h.splice(c, 1), l(h);
          }
        } else if (Js(r)) {
          const c = new Set(r);
          i ? c.add(s) : c.delete(s), l(c);
        } else l(Mu(t, i));
      });
    },
    mounted: Tl,
    beforeUpdate(t, e, n) {
      t[ir] = Bs(n), Tl(t, e, n);
    }
  };
  function Tl(t, { value: e, oldValue: n }, r) {
    t._modelValue = e;
    let s;
    if (ae(e)) s = Nc(e, r.props.value) > -1;
    else if (Js(e)) s = e.has(r.props.value);
    else {
      if (e === n) return;
      s = ei(e, Mu(t, true));
    }
    t.checked !== s && (t.checked = s);
  }
  function A_(t) {
    return "_value" in t ? t._value : t.value;
  }
  function Mu(t, e) {
    const n = e ? "_trueValue" : "_falseValue";
    return n in t ? t[n] : e;
  }
  const S_ = je({
    patchProp: y_
  }, o_);
  let wl;
  function C_() {
    return wl || (wl = Pg(S_));
  }
  const O_ = (...t) => {
    const e = C_().createApp(...t), { mount: n } = e;
    return e.mount = (r) => {
      const s = $_(r);
      if (!s) return;
      const i = e._component;
      !le(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
      const l = n(s, false, P_(s));
      return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), l;
    }, e;
  };
  function P_(t) {
    if (t instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml";
  }
  function $_(t) {
    return De(t) ? document.querySelector(t) : t;
  }
  let ku;
  const oi = (t) => ku = t, Fu = Symbol();
  function Eo(t) {
    return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
  }
  var Fr;
  (function(t) {
    t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
  })(Fr || (Fr = {}));
  function R_() {
    const t = Lc(true), e = t.run(() => Go({}));
    let n = [], r = [];
    const s = Yo({
      install(i) {
        oi(s), s._a = i, i.provide(Fu, s), i.config.globalProperties.$pinia = s, r.forEach((l) => n.push(l)), r = [];
      },
      use(i) {
        return this._a ? n.push(i) : r.push(i), this;
      },
      _p: n,
      _a: null,
      _e: t,
      _s: /* @__PURE__ */ new Map(),
      state: e
    });
    return s;
  }
  const Vu = () => {
  };
  function Al(t, e, n, r = Vu) {
    t.push(e);
    const s = () => {
      const i = t.indexOf(e);
      i > -1 && (t.splice(i, 1), r());
    };
    return !n && Mc() && mp(s), s;
  }
  function zn(t, ...e) {
    t.slice().forEach((n) => {
      n(...e);
    });
  }
  const N_ = (t) => t(), Sl = Symbol(), Ui = Symbol();
  function yo(t, e) {
    t instanceof Map && e instanceof Map ? e.forEach((n, r) => t.set(r, n)) : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
    for (const n in e) {
      if (!e.hasOwnProperty(n)) continue;
      const r = e[n], s = t[n];
      Eo(s) && Eo(r) && t.hasOwnProperty(n) && !$e(r) && !Rn(r) ? t[n] = yo(s, r) : t[n] = r;
    }
    return t;
  }
  const I_ = Symbol();
  function x_(t) {
    return !Eo(t) || !t.hasOwnProperty(I_);
  }
  const { assign: on } = Object;
  function D_(t) {
    return !!($e(t) && t.effect);
  }
  function L_(t, e, n, r) {
    const { state: s, actions: i, getters: l } = e, c = n.state.value[t];
    let u;
    function h() {
      c || (n.state.value[t] = s ? s() : {});
      const d = Hp(n.state.value[t]);
      return on(d, i, Object.keys(l || {}).reduce((p, b) => (p[b] = Yo(gt(() => {
        oi(n);
        const v = n._s.get(t);
        return l[b].call(v, v);
      })), p), {}));
    }
    return u = Hu(t, h, e, n, r, true), u;
  }
  function Hu(t, e, n = {}, r, s, i) {
    let l;
    const c = on({
      actions: {}
    }, n), u = {
      deep: true
    };
    let h, d, p = [], b = [], v;
    const I = r.state.value[t];
    !i && !I && (r.state.value[t] = {}), Go({});
    let $;
    function H(ee) {
      let te;
      h = d = false, typeof ee == "function" ? (ee(r.state.value[t]), te = {
        type: Fr.patchFunction,
        storeId: t,
        events: v
      }) : (yo(r.state.value[t], ee), te = {
        type: Fr.patchObject,
        payload: ee,
        storeId: t,
        events: v
      });
      const R = $ = Symbol();
      qo().then(() => {
        $ === R && (h = true);
      }), d = true, zn(p, te, r.state.value[t]);
    }
    const W = i ? function() {
      const { state: te } = n, R = te ? te() : {};
      this.$patch((pe) => {
        on(pe, R);
      });
    } : Vu;
    function k() {
      l.stop(), p = [], b = [], r._s.delete(t);
    }
    const B = (ee, te = "") => {
      if (Sl in ee) return ee[Ui] = te, ee;
      const R = function() {
        oi(r);
        const pe = Array.from(arguments), he = [], ge = [];
        function Re(re) {
          he.push(re);
        }
        function ce(re) {
          ge.push(re);
        }
        zn(b, {
          args: pe,
          name: R[Ui],
          store: Y,
          after: Re,
          onError: ce
        });
        let G;
        try {
          G = ee.apply(this && this.$id === t ? this : Y, pe);
        } catch (re) {
          throw zn(ge, re), re;
        }
        return G instanceof Promise ? G.then((re) => (zn(he, re), re)).catch((re) => (zn(ge, re), Promise.reject(re))) : (zn(he, G), G);
      };
      return R[Sl] = true, R[Ui] = te, R;
    }, D = {
      _p: r,
      $id: t,
      $onAction: Al.bind(null, b),
      $patch: H,
      $reset: W,
      $subscribe(ee, te = {}) {
        const R = Al(p, ee, te.detached, () => pe()), pe = l.run(() => Mr(() => r.state.value[t], (he) => {
          (te.flush === "sync" ? d : h) && ee({
            storeId: t,
            type: Fr.direct,
            events: v
          }, he);
        }, on({}, u, te)));
        return R;
      },
      $dispose: k
    }, Y = Qr(D);
    r._s.set(t, Y);
    const ne = (r._a && r._a.runWithContext || N_)(() => r._e.run(() => (l = Lc()).run(() => e({
      action: B
    }))));
    for (const ee in ne) {
      const te = ne[ee];
      if ($e(te) && !D_(te) || Rn(te)) i || (I && x_(te) && ($e(te) ? te.value = I[ee] : yo(te, I[ee])), r.state.value[t][ee] = te);
      else if (typeof te == "function") {
        const R = B(te, ee);
        ne[ee] = R, c.actions[ee] = te;
      }
    }
    return on(Y, ne), on(Ee(Y), ne), Object.defineProperty(Y, "$state", {
      get: () => r.state.value[t],
      set: (ee) => {
        H((te) => {
          on(te, ee);
        });
      }
    }), r._p.forEach((ee) => {
      on(Y, l.run(() => ee({
        store: Y,
        app: r._a,
        pinia: r,
        options: c
      })));
    }), I && i && n.hydrate && n.hydrate(Y.$state, I), h = true, d = true, Y;
  }
  function M_(t, e, n) {
    let r, s;
    const i = typeof e == "function";
    r = t, s = i ? n : e;
    function l(c, u) {
      const h = yg();
      return c = c || (h ? Mt(Fu, null) : null), c && oi(c), c = ku, c._s.has(r) || (i ? Hu(r, e, s, c) : L_(r, s, c)), c._s.get(r);
    }
    return l.$id = r, l;
  }
  let k_, V_, H_, W_, U_, j_, B_, K_;
  k_ = "/wasm-demo/assets/logo-CMnCgWkc.png";
  F_ = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [r, s] of e) n[r] = s;
    return n;
  };
  V_ = {};
  H_ = {
    class: "navbar navbar-light bg-light"
  };
  W_ = {
    class: "container-fluid"
  };
  U_ = {
    id: "navbarNav",
    class: "collapse navbar-collapse"
  };
  j_ = {
    class: "navbar-nav"
  };
  B_ = {
    class: "nav-item"
  };
  K_ = {
    class: "nav-item"
  };
  function z_(t, e) {
    const n = Xa("router-link"), r = Xa("router-view");
    return $u(), jg(xt, null, [
      Tt("nav", H_, [
        Tt("div", W_, [
          Fe(n, {
            class: "navbar-brand",
            to: {
              name: "main"
            }
          }, {
            default: $s(() => e[0] || (e[0] = [
              Tt("img", {
                src: k_,
                alt: "Logo",
                width: "120",
                class: "d-inline-block align-text-top"
              }, null, -1)
            ])),
            _: 1
          }),
          e[3] || (e[3] = Tt("button", {
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#navbarNav",
            "aria-controls": "navbarNav",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
            class: "navbar-toggler"
          }, [
            Tt("span", {
              class: "navbar-toggler-icon"
            })
          ], -1)),
          Tt("div", U_, [
            Tt("ul", j_, [
              Tt("li", B_, [
                Fe(n, {
                  class: "nav-link",
                  to: {
                    name: "main"
                  }
                }, {
                  default: $s(() => e[1] || (e[1] = [
                    mo(" Home ")
                  ])),
                  _: 1
                })
              ]),
              Tt("li", K_, [
                Fe(n, {
                  class: "nav-link",
                  to: {
                    name: "about"
                  }
                }, {
                  default: $s(() => e[2] || (e[2] = [
                    mo(" About ")
                  ])),
                  _: 1
                })
              ])
            ])
          ])
        ])
      ]),
      Fe(r)
    ], 64);
  }
  const Y_ = F_(V_, [
    [
      "render",
      z_
    ]
  ]);
  var Ze = "top", ct = "bottom", ut = "right", et = "left", ai = "auto", _r = [
    Ze,
    ct,
    ut,
    et
  ], Ln = "start", ar = "end", Wu = "clippingParents", ea = "viewport", Jn = "popper", Uu = "reference", To = _r.reduce(function(t, e) {
    return t.concat([
      e + "-" + Ln,
      e + "-" + ar
    ]);
  }, []), ta = [].concat(_r, [
    ai
  ]).reduce(function(t, e) {
    return t.concat([
      e,
      e + "-" + Ln,
      e + "-" + ar
    ]);
  }, []), ju = "beforeRead", Bu = "read", Ku = "afterRead", zu = "beforeMain", Yu = "main", Gu = "afterMain", qu = "beforeWrite", Ju = "write", Xu = "afterWrite", Qu = [
    ju,
    Bu,
    Ku,
    zu,
    Yu,
    Gu,
    qu,
    Ju,
    Xu
  ];
  function Wt(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function ft(t) {
    if (t == null) return window;
    if (t.toString() !== "[object Window]") {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }
    return t;
  }
  function Mn(t) {
    var e = ft(t).Element;
    return t instanceof e || t instanceof Element;
  }
  function _t(t) {
    var e = ft(t).HTMLElement;
    return t instanceof e || t instanceof HTMLElement;
  }
  function na(t) {
    if (typeof ShadowRoot > "u") return false;
    var e = ft(t).ShadowRoot;
    return t instanceof e || t instanceof ShadowRoot;
  }
  function G_(t) {
    var e = t.state;
    Object.keys(e.elements).forEach(function(n) {
      var r = e.styles[n] || {}, s = e.attributes[n] || {}, i = e.elements[n];
      !_t(i) || !Wt(i) || (Object.assign(i.style, r), Object.keys(s).forEach(function(l) {
        var c = s[l];
        c === false ? i.removeAttribute(l) : i.setAttribute(l, c === true ? "" : c);
      }));
    });
  }
  function q_(t) {
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
        var s = e.elements[r], i = e.attributes[r] || {}, l = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), c = l.reduce(function(u, h) {
          return u[h] = "", u;
        }, {});
        !_t(s) || !Wt(s) || (Object.assign(s.style, c), Object.keys(i).forEach(function(u) {
          s.removeAttribute(u);
        }));
      });
    };
  }
  const ra = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: G_,
    effect: q_,
    requires: [
      "computeStyles"
    ]
  };
  function kt(t) {
    return t.split("-")[0];
  }
  var In = Math.max, Ks = Math.min, lr = Math.round;
  function wo() {
    var t = navigator.userAgentData;
    return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
      return e.brand + "/" + e.version;
    }).join(" ") : navigator.userAgent;
  }
  function Zu() {
    return !/^((?!chrome|android).)*safari/i.test(wo());
  }
  function cr(t, e, n) {
    e === void 0 && (e = false), n === void 0 && (n = false);
    var r = t.getBoundingClientRect(), s = 1, i = 1;
    e && _t(t) && (s = t.offsetWidth > 0 && lr(r.width) / t.offsetWidth || 1, i = t.offsetHeight > 0 && lr(r.height) / t.offsetHeight || 1);
    var l = Mn(t) ? ft(t) : window, c = l.visualViewport, u = !Zu() && n, h = (r.left + (u && c ? c.offsetLeft : 0)) / s, d = (r.top + (u && c ? c.offsetTop : 0)) / i, p = r.width / s, b = r.height / i;
    return {
      width: p,
      height: b,
      top: d,
      right: h + p,
      bottom: d + b,
      left: h,
      x: h,
      y: d
    };
  }
  function sa(t) {
    var e = cr(t), n = t.offsetWidth, r = t.offsetHeight;
    return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: n,
      height: r
    };
  }
  function ef(t, e) {
    var n = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return true;
    if (n && na(n)) {
      var r = e;
      do {
        if (r && t.isSameNode(r)) return true;
        r = r.parentNode || r.host;
      } while (r);
    }
    return false;
  }
  function Xt(t) {
    return ft(t).getComputedStyle(t);
  }
  function J_(t) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(Wt(t)) >= 0;
  }
  function mn(t) {
    return ((Mn(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }
  function li(t) {
    return Wt(t) === "html" ? t : t.assignedSlot || t.parentNode || (na(t) ? t.host : null) || mn(t);
  }
  function Cl(t) {
    return !_t(t) || Xt(t).position === "fixed" ? null : t.offsetParent;
  }
  function X_(t) {
    var e = /firefox/i.test(wo()), n = /Trident/i.test(wo());
    if (n && _t(t)) {
      var r = Xt(t);
      if (r.position === "fixed") return null;
    }
    var s = li(t);
    for (na(s) && (s = s.host); _t(s) && [
      "html",
      "body"
    ].indexOf(Wt(s)) < 0; ) {
      var i = Xt(s);
      if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none") return s;
      s = s.parentNode;
    }
    return null;
  }
  function ts(t) {
    for (var e = ft(t), n = Cl(t); n && J_(n) && Xt(n).position === "static"; ) n = Cl(n);
    return n && (Wt(n) === "html" || Wt(n) === "body" && Xt(n).position === "static") ? e : n || X_(t) || e;
  }
  function ia(t) {
    return [
      "top",
      "bottom"
    ].indexOf(t) >= 0 ? "x" : "y";
  }
  function Vr(t, e, n) {
    return In(t, Ks(e, n));
  }
  function Q_(t, e, n) {
    var r = Vr(t, e, n);
    return r > n ? n : r;
  }
  function tf() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function nf(t) {
    return Object.assign({}, tf(), t);
  }
  function rf(t, e) {
    return e.reduce(function(n, r) {
      return n[r] = t, n;
    }, {});
  }
  var Z_ = function(e, n) {
    return e = typeof e == "function" ? e(Object.assign({}, n.rects, {
      placement: n.placement
    })) : e, nf(typeof e != "number" ? e : rf(e, _r));
  };
  function em(t) {
    var e, n = t.state, r = t.name, s = t.options, i = n.elements.arrow, l = n.modifiersData.popperOffsets, c = kt(n.placement), u = ia(c), h = [
      et,
      ut
    ].indexOf(c) >= 0, d = h ? "height" : "width";
    if (!(!i || !l)) {
      var p = Z_(s.padding, n), b = sa(i), v = u === "y" ? Ze : et, I = u === "y" ? ct : ut, $ = n.rects.reference[d] + n.rects.reference[u] - l[u] - n.rects.popper[d], H = l[u] - n.rects.reference[u], W = ts(i), k = W ? u === "y" ? W.clientHeight || 0 : W.clientWidth || 0 : 0, B = $ / 2 - H / 2, D = p[v], Y = k - b[d] - p[I], X = k / 2 - b[d] / 2 + B, ne = Vr(D, X, Y), ee = u;
      n.modifiersData[r] = (e = {}, e[ee] = ne, e.centerOffset = ne - X, e);
    }
  }
  function tm(t) {
    var e = t.state, n = t.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
    s != null && (typeof s == "string" && (s = e.elements.popper.querySelector(s), !s) || ef(e.elements.popper, s) && (e.elements.arrow = s));
  }
  const sf = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: em,
    effect: tm,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function ur(t) {
    return t.split("-")[1];
  }
  var nm = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function rm(t, e) {
    var n = t.x, r = t.y, s = e.devicePixelRatio || 1;
    return {
      x: lr(n * s) / s || 0,
      y: lr(r * s) / s || 0
    };
  }
  function Ol(t) {
    var e, n = t.popper, r = t.popperRect, s = t.placement, i = t.variation, l = t.offsets, c = t.position, u = t.gpuAcceleration, h = t.adaptive, d = t.roundOffsets, p = t.isFixed, b = l.x, v = b === void 0 ? 0 : b, I = l.y, $ = I === void 0 ? 0 : I, H = typeof d == "function" ? d({
      x: v,
      y: $
    }) : {
      x: v,
      y: $
    };
    v = H.x, $ = H.y;
    var W = l.hasOwnProperty("x"), k = l.hasOwnProperty("y"), B = et, D = Ze, Y = window;
    if (h) {
      var X = ts(n), ne = "clientHeight", ee = "clientWidth";
      if (X === ft(n) && (X = mn(n), Xt(X).position !== "static" && c === "absolute" && (ne = "scrollHeight", ee = "scrollWidth")), X = X, s === Ze || (s === et || s === ut) && i === ar) {
        D = ct;
        var te = p && X === Y && Y.visualViewport ? Y.visualViewport.height : X[ne];
        $ -= te - r.height, $ *= u ? 1 : -1;
      }
      if (s === et || (s === Ze || s === ct) && i === ar) {
        B = ut;
        var R = p && X === Y && Y.visualViewport ? Y.visualViewport.width : X[ee];
        v -= R - r.width, v *= u ? 1 : -1;
      }
    }
    var pe = Object.assign({
      position: c
    }, h && nm), he = d === true ? rm({
      x: v,
      y: $
    }, ft(n)) : {
      x: v,
      y: $
    };
    if (v = he.x, $ = he.y, u) {
      var ge;
      return Object.assign({}, pe, (ge = {}, ge[D] = k ? "0" : "", ge[B] = W ? "0" : "", ge.transform = (Y.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + $ + "px)" : "translate3d(" + v + "px, " + $ + "px, 0)", ge));
    }
    return Object.assign({}, pe, (e = {}, e[D] = k ? $ + "px" : "", e[B] = W ? v + "px" : "", e.transform = "", e));
  }
  function sm(t) {
    var e = t.state, n = t.options, r = n.gpuAcceleration, s = r === void 0 ? true : r, i = n.adaptive, l = i === void 0 ? true : i, c = n.roundOffsets, u = c === void 0 ? true : c, h = {
      placement: kt(e.placement),
      variation: ur(e.placement),
      popper: e.elements.popper,
      popperRect: e.rects.popper,
      gpuAcceleration: s,
      isFixed: e.options.strategy === "fixed"
    };
    e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Ol(Object.assign({}, h, {
      offsets: e.modifiersData.popperOffsets,
      position: e.options.strategy,
      adaptive: l,
      roundOffsets: u
    })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Ol(Object.assign({}, h, {
      offsets: e.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: u
    })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
      "data-popper-placement": e.placement
    });
  }
  const oa = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: sm,
    data: {}
  };
  var ys = {
    passive: true
  };
  function im(t) {
    var e = t.state, n = t.instance, r = t.options, s = r.scroll, i = s === void 0 ? true : s, l = r.resize, c = l === void 0 ? true : l, u = ft(e.elements.popper), h = [].concat(e.scrollParents.reference, e.scrollParents.popper);
    return i && h.forEach(function(d) {
      d.addEventListener("scroll", n.update, ys);
    }), c && u.addEventListener("resize", n.update, ys), function() {
      i && h.forEach(function(d) {
        d.removeEventListener("scroll", n.update, ys);
      }), c && u.removeEventListener("resize", n.update, ys);
    };
  }
  const aa = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: im,
    data: {}
  };
  var om = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function xs(t) {
    return t.replace(/left|right|bottom|top/g, function(e) {
      return om[e];
    });
  }
  var am = {
    start: "end",
    end: "start"
  };
  function Pl(t) {
    return t.replace(/start|end/g, function(e) {
      return am[e];
    });
  }
  function la(t) {
    var e = ft(t), n = e.pageXOffset, r = e.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: r
    };
  }
  function ca(t) {
    return cr(mn(t)).left + la(t).scrollLeft;
  }
  function lm(t, e) {
    var n = ft(t), r = mn(t), s = n.visualViewport, i = r.clientWidth, l = r.clientHeight, c = 0, u = 0;
    if (s) {
      i = s.width, l = s.height;
      var h = Zu();
      (h || !h && e === "fixed") && (c = s.offsetLeft, u = s.offsetTop);
    }
    return {
      width: i,
      height: l,
      x: c + ca(t),
      y: u
    };
  }
  function cm(t) {
    var e, n = mn(t), r = la(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, i = In(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = In(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + ca(t), u = -r.scrollTop;
    return Xt(s || n).direction === "rtl" && (c += In(n.clientWidth, s ? s.clientWidth : 0) - i), {
      width: i,
      height: l,
      x: c,
      y: u
    };
  }
  function ua(t) {
    var e = Xt(t), n = e.overflow, r = e.overflowX, s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + s + r);
  }
  function of(t) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(Wt(t)) >= 0 ? t.ownerDocument.body : _t(t) && ua(t) ? t : of(li(t));
  }
  function Hr(t, e) {
    var n;
    e === void 0 && (e = []);
    var r = of(t), s = r === ((n = t.ownerDocument) == null ? void 0 : n.body), i = ft(r), l = s ? [
      i
    ].concat(i.visualViewport || [], ua(r) ? r : []) : r, c = e.concat(l);
    return s ? c : c.concat(Hr(li(l)));
  }
  function Ao(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }
  function um(t, e) {
    var n = cr(t, false, e === "fixed");
    return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function $l(t, e, n) {
    return e === ea ? Ao(lm(t, n)) : Mn(e) ? um(e, n) : Ao(cm(mn(t)));
  }
  function fm(t) {
    var e = Hr(li(t)), n = [
      "absolute",
      "fixed"
    ].indexOf(Xt(t).position) >= 0, r = n && _t(t) ? ts(t) : t;
    return Mn(r) ? e.filter(function(s) {
      return Mn(s) && ef(s, r) && Wt(s) !== "body";
    }) : [];
  }
  function dm(t, e, n, r) {
    var s = e === "clippingParents" ? fm(t) : [].concat(e), i = [].concat(s, [
      n
    ]), l = i[0], c = i.reduce(function(u, h) {
      var d = $l(t, h, r);
      return u.top = In(d.top, u.top), u.right = Ks(d.right, u.right), u.bottom = Ks(d.bottom, u.bottom), u.left = In(d.left, u.left), u;
    }, $l(t, l, r));
    return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
  }
  function af(t) {
    var e = t.reference, n = t.element, r = t.placement, s = r ? kt(r) : null, i = r ? ur(r) : null, l = e.x + e.width / 2 - n.width / 2, c = e.y + e.height / 2 - n.height / 2, u;
    switch (s) {
      case Ze:
        u = {
          x: l,
          y: e.y - n.height
        };
        break;
      case ct:
        u = {
          x: l,
          y: e.y + e.height
        };
        break;
      case ut:
        u = {
          x: e.x + e.width,
          y: c
        };
        break;
      case et:
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
    var h = s ? ia(s) : null;
    if (h != null) {
      var d = h === "y" ? "height" : "width";
      switch (i) {
        case Ln:
          u[h] = u[h] - (e[d] / 2 - n[d] / 2);
          break;
        case ar:
          u[h] = u[h] + (e[d] / 2 - n[d] / 2);
          break;
      }
    }
    return u;
  }
  function fr(t, e) {
    e === void 0 && (e = {});
    var n = e, r = n.placement, s = r === void 0 ? t.placement : r, i = n.strategy, l = i === void 0 ? t.strategy : i, c = n.boundary, u = c === void 0 ? Wu : c, h = n.rootBoundary, d = h === void 0 ? ea : h, p = n.elementContext, b = p === void 0 ? Jn : p, v = n.altBoundary, I = v === void 0 ? false : v, $ = n.padding, H = $ === void 0 ? 0 : $, W = nf(typeof H != "number" ? H : rf(H, _r)), k = b === Jn ? Uu : Jn, B = t.rects.popper, D = t.elements[I ? k : b], Y = dm(Mn(D) ? D : D.contextElement || mn(t.elements.popper), u, d, l), X = cr(t.elements.reference), ne = af({
      reference: X,
      element: B,
      placement: s
    }), ee = Ao(Object.assign({}, B, ne)), te = b === Jn ? ee : X, R = {
      top: Y.top - te.top + W.top,
      bottom: te.bottom - Y.bottom + W.bottom,
      left: Y.left - te.left + W.left,
      right: te.right - Y.right + W.right
    }, pe = t.modifiersData.offset;
    if (b === Jn && pe) {
      var he = pe[s];
      Object.keys(R).forEach(function(ge) {
        var Re = [
          ut,
          ct
        ].indexOf(ge) >= 0 ? 1 : -1, ce = [
          Ze,
          ct
        ].indexOf(ge) >= 0 ? "y" : "x";
        R[ge] += he[ce] * Re;
      });
    }
    return R;
  }
  function hm(t, e) {
    e === void 0 && (e = {});
    var n = e, r = n.placement, s = n.boundary, i = n.rootBoundary, l = n.padding, c = n.flipVariations, u = n.allowedAutoPlacements, h = u === void 0 ? ta : u, d = ur(r), p = d ? c ? To : To.filter(function(I) {
      return ur(I) === d;
    }) : _r, b = p.filter(function(I) {
      return h.indexOf(I) >= 0;
    });
    b.length === 0 && (b = p);
    var v = b.reduce(function(I, $) {
      return I[$] = fr(t, {
        placement: $,
        boundary: s,
        rootBoundary: i,
        padding: l
      })[kt($)], I;
    }, {});
    return Object.keys(v).sort(function(I, $) {
      return v[I] - v[$];
    });
  }
  function pm(t) {
    if (kt(t) === ai) return [];
    var e = xs(t);
    return [
      Pl(t),
      e,
      Pl(e)
    ];
  }
  function gm(t) {
    var e = t.state, n = t.options, r = t.name;
    if (!e.modifiersData[r]._skip) {
      for (var s = n.mainAxis, i = s === void 0 ? true : s, l = n.altAxis, c = l === void 0 ? true : l, u = n.fallbackPlacements, h = n.padding, d = n.boundary, p = n.rootBoundary, b = n.altBoundary, v = n.flipVariations, I = v === void 0 ? true : v, $ = n.allowedAutoPlacements, H = e.options.placement, W = kt(H), k = W === H, B = u || (k || !I ? [
        xs(H)
      ] : pm(H)), D = [
        H
      ].concat(B).reduce(function(Me, Le) {
        return Me.concat(kt(Le) === ai ? hm(e, {
          placement: Le,
          boundary: d,
          rootBoundary: p,
          padding: h,
          flipVariations: I,
          allowedAutoPlacements: $
        }) : Le);
      }, []), Y = e.rects.reference, X = e.rects.popper, ne = /* @__PURE__ */ new Map(), ee = true, te = D[0], R = 0; R < D.length; R++) {
        var pe = D[R], he = kt(pe), ge = ur(pe) === Ln, Re = [
          Ze,
          ct
        ].indexOf(he) >= 0, ce = Re ? "width" : "height", G = fr(e, {
          placement: pe,
          boundary: d,
          rootBoundary: p,
          altBoundary: b,
          padding: h
        }), re = Re ? ge ? ut : et : ge ? ct : Ze;
        Y[ce] > X[ce] && (re = xs(re));
        var ue = xs(re), Ne = [];
        if (i && Ne.push(G[he] <= 0), c && Ne.push(G[re] <= 0, G[ue] <= 0), Ne.every(function(Me) {
          return Me;
        })) {
          te = pe, ee = false;
          break;
        }
        ne.set(pe, Ne);
      }
      if (ee) for (var Ve = I ? 3 : 1, xe = function(Le) {
        var Ie = D.find(function(A) {
          var K = ne.get(A);
          if (K) return K.slice(0, Le).every(function(j) {
            return j;
          });
        });
        if (Ie) return te = Ie, "break";
      }, Se = Ve; Se > 0; Se--) {
        var st = xe(Se);
        if (st === "break") break;
      }
      e.placement !== te && (e.modifiersData[r]._skip = true, e.placement = te, e.reset = true);
    }
  }
  const lf = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: gm,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function Rl(t, e, n) {
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
  function Nl(t) {
    return [
      Ze,
      ut,
      ct,
      et
    ].some(function(e) {
      return t[e] >= 0;
    });
  }
  function _m(t) {
    var e = t.state, n = t.name, r = e.rects.reference, s = e.rects.popper, i = e.modifiersData.preventOverflow, l = fr(e, {
      elementContext: "reference"
    }), c = fr(e, {
      altBoundary: true
    }), u = Rl(l, r), h = Rl(c, s, i), d = Nl(u), p = Nl(h);
    e.modifiersData[n] = {
      referenceClippingOffsets: u,
      popperEscapeOffsets: h,
      isReferenceHidden: d,
      hasPopperEscaped: p
    }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
      "data-popper-reference-hidden": d,
      "data-popper-escaped": p
    });
  }
  const cf = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: _m
  };
  function mm(t, e, n) {
    var r = kt(t), s = [
      et,
      Ze
    ].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, e, {
      placement: t
    })) : n, l = i[0], c = i[1];
    return l = l || 0, c = (c || 0) * s, [
      et,
      ut
    ].indexOf(r) >= 0 ? {
      x: c,
      y: l
    } : {
      x: l,
      y: c
    };
  }
  function vm(t) {
    var e = t.state, n = t.options, r = t.name, s = n.offset, i = s === void 0 ? [
      0,
      0
    ] : s, l = ta.reduce(function(d, p) {
      return d[p] = mm(p, e.rects, i), d;
    }, {}), c = l[e.placement], u = c.x, h = c.y;
    e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += u, e.modifiersData.popperOffsets.y += h), e.modifiersData[r] = l;
  }
  const uf = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: vm
  };
  function bm(t) {
    var e = t.state, n = t.name;
    e.modifiersData[n] = af({
      reference: e.rects.reference,
      element: e.rects.popper,
      placement: e.placement
    });
  }
  const fa = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: bm,
    data: {}
  };
  function Em(t) {
    return t === "x" ? "y" : "x";
  }
  function ym(t) {
    var e = t.state, n = t.options, r = t.name, s = n.mainAxis, i = s === void 0 ? true : s, l = n.altAxis, c = l === void 0 ? false : l, u = n.boundary, h = n.rootBoundary, d = n.altBoundary, p = n.padding, b = n.tether, v = b === void 0 ? true : b, I = n.tetherOffset, $ = I === void 0 ? 0 : I, H = fr(e, {
      boundary: u,
      rootBoundary: h,
      padding: p,
      altBoundary: d
    }), W = kt(e.placement), k = ur(e.placement), B = !k, D = ia(W), Y = Em(D), X = e.modifiersData.popperOffsets, ne = e.rects.reference, ee = e.rects.popper, te = typeof $ == "function" ? $(Object.assign({}, e.rects, {
      placement: e.placement
    })) : $, R = typeof te == "number" ? {
      mainAxis: te,
      altAxis: te
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, te), pe = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, he = {
      x: 0,
      y: 0
    };
    if (X) {
      if (i) {
        var ge, Re = D === "y" ? Ze : et, ce = D === "y" ? ct : ut, G = D === "y" ? "height" : "width", re = X[D], ue = re + H[Re], Ne = re - H[ce], Ve = v ? -ee[G] / 2 : 0, xe = k === Ln ? ne[G] : ee[G], Se = k === Ln ? -ee[G] : -ne[G], st = e.elements.arrow, Me = v && st ? sa(st) : {
          width: 0,
          height: 0
        }, Le = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : tf(), Ie = Le[Re], A = Le[ce], K = Vr(0, ne[G], Me[G]), j = B ? ne[G] / 2 - Ve - K - Ie - R.mainAxis : xe - K - Ie - R.mainAxis, Z = B ? -ne[G] / 2 + Ve + K + A + R.mainAxis : Se + K + A + R.mainAxis, me = e.elements.arrow && ts(e.elements.arrow), g = me ? D === "y" ? me.clientTop || 0 : me.clientLeft || 0 : 0, _ = (ge = pe?.[D]) != null ? ge : 0, E = re + j - _ - g, O = re + Z - _, P = Vr(v ? Ks(ue, E) : ue, re, v ? In(Ne, O) : Ne);
        X[D] = P, he[D] = P - re;
      }
      if (c) {
        var C, U = D === "x" ? Ze : et, M = D === "x" ? ct : ut, L = X[Y], x = Y === "y" ? "height" : "width", J = L + H[U], F = L - H[M], Q = [
          Ze,
          et
        ].indexOf(W) !== -1, se = (C = pe?.[Y]) != null ? C : 0, de = Q ? J : L - ne[x] - ee[x] - se + R.altAxis, ye = Q ? L + ne[x] + ee[x] - se - R.altAxis : F, ve = v && Q ? Q_(de, L, ye) : Vr(v ? de : J, L, v ? ye : F);
        X[Y] = ve, he[Y] = ve - L;
      }
      e.modifiersData[r] = he;
    }
  }
  const ff = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: ym,
    requiresIfExists: [
      "offset"
    ]
  };
  function Tm(t) {
    return {
      scrollLeft: t.scrollLeft,
      scrollTop: t.scrollTop
    };
  }
  function wm(t) {
    return t === ft(t) || !_t(t) ? la(t) : Tm(t);
  }
  function Am(t) {
    var e = t.getBoundingClientRect(), n = lr(e.width) / t.offsetWidth || 1, r = lr(e.height) / t.offsetHeight || 1;
    return n !== 1 || r !== 1;
  }
  function Sm(t, e, n) {
    n === void 0 && (n = false);
    var r = _t(e), s = _t(e) && Am(e), i = mn(e), l = cr(t, s, n), c = {
      scrollLeft: 0,
      scrollTop: 0
    }, u = {
      x: 0,
      y: 0
    };
    return (r || !r && !n) && ((Wt(e) !== "body" || ua(i)) && (c = wm(e)), _t(e) ? (u = cr(e, true), u.x += e.clientLeft, u.y += e.clientTop) : i && (u.x = ca(i))), {
      x: l.left + c.scrollLeft - u.x,
      y: l.top + c.scrollTop - u.y,
      width: l.width,
      height: l.height
    };
  }
  function Cm(t) {
    var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
    t.forEach(function(i) {
      e.set(i.name, i);
    });
    function s(i) {
      n.add(i.name);
      var l = [].concat(i.requires || [], i.requiresIfExists || []);
      l.forEach(function(c) {
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
  function Om(t) {
    var e = Cm(t);
    return Qu.reduce(function(n, r) {
      return n.concat(e.filter(function(s) {
        return s.phase === r;
      }));
    }, []);
  }
  function Pm(t) {
    var e;
    return function() {
      return e || (e = new Promise(function(n) {
        Promise.resolve().then(function() {
          e = void 0, n(t());
        });
      })), e;
    };
  }
  function $m(t) {
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
  var Il = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function xl() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    return !e.some(function(r) {
      return !(r && typeof r.getBoundingClientRect == "function");
    });
  }
  function ci(t) {
    t === void 0 && (t = {});
    var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, s = e.defaultOptions, i = s === void 0 ? Il : s;
    return function(c, u, h) {
      h === void 0 && (h = i);
      var d = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Il, i),
        modifiersData: {},
        elements: {
          reference: c,
          popper: u
        },
        attributes: {},
        styles: {}
      }, p = [], b = false, v = {
        state: d,
        setOptions: function(W) {
          var k = typeof W == "function" ? W(d.options) : W;
          $(), d.options = Object.assign({}, i, d.options, k), d.scrollParents = {
            reference: Mn(c) ? Hr(c) : c.contextElement ? Hr(c.contextElement) : [],
            popper: Hr(u)
          };
          var B = Om($m([].concat(r, d.options.modifiers)));
          return d.orderedModifiers = B.filter(function(D) {
            return D.enabled;
          }), I(), v.update();
        },
        forceUpdate: function() {
          if (!b) {
            var W = d.elements, k = W.reference, B = W.popper;
            if (xl(k, B)) {
              d.rects = {
                reference: Sm(k, ts(B), d.options.strategy === "fixed"),
                popper: sa(B)
              }, d.reset = false, d.placement = d.options.placement, d.orderedModifiers.forEach(function(R) {
                return d.modifiersData[R.name] = Object.assign({}, R.data);
              });
              for (var D = 0; D < d.orderedModifiers.length; D++) {
                if (d.reset === true) {
                  d.reset = false, D = -1;
                  continue;
                }
                var Y = d.orderedModifiers[D], X = Y.fn, ne = Y.options, ee = ne === void 0 ? {} : ne, te = Y.name;
                typeof X == "function" && (d = X({
                  state: d,
                  options: ee,
                  name: te,
                  instance: v
                }) || d);
              }
            }
          }
        },
        update: Pm(function() {
          return new Promise(function(H) {
            v.forceUpdate(), H(d);
          });
        }),
        destroy: function() {
          $(), b = true;
        }
      };
      if (!xl(c, u)) return v;
      v.setOptions(h).then(function(H) {
        !b && h.onFirstUpdate && h.onFirstUpdate(H);
      });
      function I() {
        d.orderedModifiers.forEach(function(H) {
          var W = H.name, k = H.options, B = k === void 0 ? {} : k, D = H.effect;
          if (typeof D == "function") {
            var Y = D({
              state: d,
              name: W,
              instance: v,
              options: B
            }), X = function() {
            };
            p.push(Y || X);
          }
        });
      }
      function $() {
        p.forEach(function(H) {
          return H();
        }), p = [];
      }
      return v;
    };
  }
  var Rm = ci(), Nm = [
    aa,
    fa,
    oa,
    ra
  ], Im = ci({
    defaultModifiers: Nm
  }), xm = [
    aa,
    fa,
    oa,
    ra,
    uf,
    lf,
    ff,
    sf,
    cf
  ], da = ci({
    defaultModifiers: xm
  });
  const df = Object.freeze(Object.defineProperty({
    __proto__: null,
    afterMain: Gu,
    afterRead: Ku,
    afterWrite: Xu,
    applyStyles: ra,
    arrow: sf,
    auto: ai,
    basePlacements: _r,
    beforeMain: zu,
    beforeRead: ju,
    beforeWrite: qu,
    bottom: ct,
    clippingParents: Wu,
    computeStyles: oa,
    createPopper: da,
    createPopperBase: Rm,
    createPopperLite: Im,
    detectOverflow: fr,
    end: ar,
    eventListeners: aa,
    flip: lf,
    hide: cf,
    left: et,
    main: Yu,
    modifierPhases: Qu,
    offset: uf,
    placements: ta,
    popper: Jn,
    popperGenerator: ci,
    popperOffsets: fa,
    preventOverflow: ff,
    read: Bu,
    reference: Uu,
    right: ut,
    start: Ln,
    top: Ze,
    variationPlacements: To,
    viewport: ea,
    write: Ju
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const rn = /* @__PURE__ */ new Map(), ji = {
    set(t, e, n) {
      rn.has(t) || rn.set(t, /* @__PURE__ */ new Map());
      const r = rn.get(t);
      if (!r.has(e) && r.size !== 0) {
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);
        return;
      }
      r.set(e, n);
    },
    get(t, e) {
      return rn.has(t) && rn.get(t).get(e) || null;
    },
    remove(t, e) {
      if (!rn.has(t)) return;
      const n = rn.get(t);
      n.delete(e), n.size === 0 && rn.delete(t);
    }
  }, Dm = 1e6, Lm = 1e3, So = "transitionend", hf = (t) => (t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, (e, n) => `#${CSS.escape(n)}`)), t), Mm = (t) => t == null ? `${t}` : Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(), km = (t) => {
    do
      t += Math.floor(Math.random() * Dm);
    while (document.getElementById(t));
    return t;
  }, Fm = (t) => {
    if (!t) return 0;
    let { transitionDuration: e, transitionDelay: n } = window.getComputedStyle(t);
    const r = Number.parseFloat(e), s = Number.parseFloat(n);
    return !r && !s ? 0 : (e = e.split(",")[0], n = n.split(",")[0], (Number.parseFloat(e) + Number.parseFloat(n)) * Lm);
  }, pf = (t) => {
    t.dispatchEvent(new Event(So));
  }, qt = (t) => !t || typeof t != "object" ? false : (typeof t.jquery < "u" && (t = t[0]), typeof t.nodeType < "u"), dn = (t) => qt(t) ? t.jquery ? t[0] : t : typeof t == "string" && t.length > 0 ? document.querySelector(hf(t)) : null, mr = (t) => {
    if (!qt(t) || t.getClientRects().length === 0) return false;
    const e = getComputedStyle(t).getPropertyValue("visibility") === "visible", n = t.closest("details:not([open])");
    if (!n) return e;
    if (n !== t) {
      const r = t.closest("summary");
      if (r && r.parentNode !== n || r === null) return false;
    }
    return e;
  }, hn = (t) => !t || t.nodeType !== Node.ELEMENT_NODE || t.classList.contains("disabled") ? true : typeof t.disabled < "u" ? t.disabled : t.hasAttribute("disabled") && t.getAttribute("disabled") !== "false", gf = (t) => {
    if (!document.documentElement.attachShadow) return null;
    if (typeof t.getRootNode == "function") {
      const e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }
    return t instanceof ShadowRoot ? t : t.parentNode ? gf(t.parentNode) : null;
  }, zs = () => {
  }, ns = (t) => {
    t.offsetHeight;
  }, _f = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Bi = [], Vm = (t) => {
    document.readyState === "loading" ? (Bi.length || document.addEventListener("DOMContentLoaded", () => {
      for (const e of Bi) e();
    }), Bi.push(t)) : t();
  }, vt = () => document.documentElement.dir === "rtl", Et = (t) => {
    Vm(() => {
      const e = _f();
      if (e) {
        const n = t.NAME, r = e.fn[n];
        e.fn[n] = t.jQueryInterface, e.fn[n].Constructor = t, e.fn[n].noConflict = () => (e.fn[n] = r, t.jQueryInterface);
      }
    });
  }, nt = (t, e = [], n = t) => typeof t == "function" ? t.call(...e) : n, mf = (t, e, n = true) => {
    if (!n) {
      nt(t);
      return;
    }
    const s = Fm(e) + 5;
    let i = false;
    const l = ({ target: c }) => {
      c === e && (i = true, e.removeEventListener(So, l), nt(t));
    };
    e.addEventListener(So, l), setTimeout(() => {
      i || pf(e);
    }, s);
  }, ha = (t, e, n, r) => {
    const s = t.length;
    let i = t.indexOf(e);
    return i === -1 ? !n && r ? t[s - 1] : t[0] : (i += n ? 1 : -1, r && (i = (i + s) % s), t[Math.max(0, Math.min(i, s - 1))]);
  }, Hm = /[^.]*(?=\..*)\.|.*/, Wm = /\..*/, Um = /::\d+$/, Ki = {};
  let Dl = 1;
  const vf = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, jm = /* @__PURE__ */ new Set([
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
  function bf(t, e) {
    return e && `${e}::${Dl++}` || t.uidEvent || Dl++;
  }
  function Ef(t) {
    const e = bf(t);
    return t.uidEvent = e, Ki[e] = Ki[e] || {}, Ki[e];
  }
  function Bm(t, e) {
    return function n(r) {
      return pa(r, {
        delegateTarget: t
      }), n.oneOff && N.off(t, r.type, e), e.apply(t, [
        r
      ]);
    };
  }
  function Km(t, e, n) {
    return function r(s) {
      const i = t.querySelectorAll(e);
      for (let { target: l } = s; l && l !== this; l = l.parentNode) for (const c of i) if (c === l) return pa(s, {
        delegateTarget: l
      }), r.oneOff && N.off(t, s.type, e, n), n.apply(l, [
        s
      ]);
    };
  }
  function yf(t, e, n = null) {
    return Object.values(t).find((r) => r.callable === e && r.delegationSelector === n);
  }
  function Tf(t, e, n) {
    const r = typeof e == "string", s = r ? n : e || n;
    let i = wf(t);
    return jm.has(i) || (i = t), [
      r,
      s,
      i
    ];
  }
  function Ll(t, e, n, r, s) {
    if (typeof e != "string" || !t) return;
    let [i, l, c] = Tf(e, n, r);
    e in vf && (l = /* @__PURE__ */ ((I) => function($) {
      if (!$.relatedTarget || $.relatedTarget !== $.delegateTarget && !$.delegateTarget.contains($.relatedTarget)) return I.call(this, $);
    })(l));
    const u = Ef(t), h = u[c] || (u[c] = {}), d = yf(h, l, i ? n : null);
    if (d) {
      d.oneOff = d.oneOff && s;
      return;
    }
    const p = bf(l, e.replace(Hm, "")), b = i ? Km(t, n, l) : Bm(t, l);
    b.delegationSelector = i ? n : null, b.callable = l, b.oneOff = s, b.uidEvent = p, h[p] = b, t.addEventListener(c, b, i);
  }
  function Co(t, e, n, r, s) {
    const i = yf(e[n], r, s);
    i && (t.removeEventListener(n, i, !!s), delete e[n][i.uidEvent]);
  }
  function zm(t, e, n, r) {
    const s = e[n] || {};
    for (const [i, l] of Object.entries(s)) i.includes(r) && Co(t, e, n, l.callable, l.delegationSelector);
  }
  function wf(t) {
    return t = t.replace(Wm, ""), vf[t] || t;
  }
  const N = {
    on(t, e, n, r) {
      Ll(t, e, n, r, false);
    },
    one(t, e, n, r) {
      Ll(t, e, n, r, true);
    },
    off(t, e, n, r) {
      if (typeof e != "string" || !t) return;
      const [s, i, l] = Tf(e, n, r), c = l !== e, u = Ef(t), h = u[l] || {}, d = e.startsWith(".");
      if (typeof i < "u") {
        if (!Object.keys(h).length) return;
        Co(t, u, l, i, s ? n : null);
        return;
      }
      if (d) for (const p of Object.keys(u)) zm(t, u, p, e.slice(1));
      for (const [p, b] of Object.entries(h)) {
        const v = p.replace(Um, "");
        (!c || e.includes(v)) && Co(t, u, l, b.callable, b.delegationSelector);
      }
    },
    trigger(t, e, n) {
      if (typeof e != "string" || !t) return null;
      const r = _f(), s = wf(e), i = e !== s;
      let l = null, c = true, u = true, h = false;
      i && r && (l = r.Event(e, n), r(t).trigger(l), c = !l.isPropagationStopped(), u = !l.isImmediatePropagationStopped(), h = l.isDefaultPrevented());
      const d = pa(new Event(e, {
        bubbles: c,
        cancelable: true
      }), n);
      return h && d.preventDefault(), u && t.dispatchEvent(d), d.defaultPrevented && l && l.preventDefault(), d;
    }
  };
  function pa(t, e = {}) {
    for (const [n, r] of Object.entries(e)) try {
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
  function Ml(t) {
    if (t === "true") return true;
    if (t === "false") return false;
    if (t === Number(t).toString()) return Number(t);
    if (t === "" || t === "null") return null;
    if (typeof t != "string") return t;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch {
      return t;
    }
  }
  function zi(t) {
    return t.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
  }
  const Jt = {
    setDataAttribute(t, e, n) {
      t.setAttribute(`data-bs-${zi(e)}`, n);
    },
    removeDataAttribute(t, e) {
      t.removeAttribute(`data-bs-${zi(e)}`);
    },
    getDataAttributes(t) {
      if (!t) return {};
      const e = {}, n = Object.keys(t.dataset).filter((r) => r.startsWith("bs") && !r.startsWith("bsConfig"));
      for (const r of n) {
        let s = r.replace(/^bs/, "");
        s = s.charAt(0).toLowerCase() + s.slice(1), e[s] = Ml(t.dataset[r]);
      }
      return e;
    },
    getDataAttribute(t, e) {
      return Ml(t.getAttribute(`data-bs-${zi(e)}`));
    }
  };
  class rs {
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
      const r = qt(n) ? Jt.getDataAttribute(n, "config") : {};
      return {
        ...this.constructor.Default,
        ...typeof r == "object" ? r : {},
        ...qt(n) ? Jt.getDataAttributes(n) : {},
        ...typeof e == "object" ? e : {}
      };
    }
    _typeCheckConfig(e, n = this.constructor.DefaultType) {
      for (const [r, s] of Object.entries(n)) {
        const i = e[r], l = qt(i) ? "element" : Mm(i);
        if (!new RegExp(s).test(l)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${l}" but expected type "${s}".`);
      }
    }
  }
  const Ym = "5.3.5";
  class Ot extends rs {
    constructor(e, n) {
      super(), e = dn(e), e && (this._element = e, this._config = this._getConfig(n), ji.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      ji.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
      for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
    }
    _queueCallback(e, n, r = true) {
      mf(e, n, r);
    }
    _getConfig(e) {
      return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
    }
    static getInstance(e) {
      return ji.get(dn(e), this.DATA_KEY);
    }
    static getOrCreateInstance(e, n = {}) {
      return this.getInstance(e) || new this(e, typeof n == "object" ? n : null);
    }
    static get VERSION() {
      return Ym;
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
  const Yi = (t) => {
    let e = t.getAttribute("data-bs-target");
    if (!e || e === "#") {
      let n = t.getAttribute("href");
      if (!n || !n.includes("#") && !n.startsWith(".")) return null;
      n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), e = n && n !== "#" ? n.trim() : null;
    }
    return e ? e.split(",").map((n) => hf(n)).join(",") : null;
  }, ie = {
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
      for (; r; ) n.push(r), r = r.parentNode.closest(e);
      return n;
    },
    prev(t, e) {
      let n = t.previousElementSibling;
      for (; n; ) {
        if (n.matches(e)) return [
          n
        ];
        n = n.previousElementSibling;
      }
      return [];
    },
    next(t, e) {
      let n = t.nextElementSibling;
      for (; n; ) {
        if (n.matches(e)) return [
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
      return this.find(e, t).filter((n) => !hn(n) && mr(n));
    },
    getSelectorFromElement(t) {
      const e = Yi(t);
      return e && ie.findOne(e) ? e : null;
    },
    getElementFromSelector(t) {
      const e = Yi(t);
      return e ? ie.findOne(e) : null;
    },
    getMultipleElementsFromSelector(t) {
      const e = Yi(t);
      return e ? ie.find(e) : [];
    }
  }, ui = (t, e = "hide") => {
    const n = `click.dismiss${t.EVENT_KEY}`, r = t.NAME;
    N.on(document, n, `[data-bs-dismiss="${r}"]`, function(s) {
      if ([
        "A",
        "AREA"
      ].includes(this.tagName) && s.preventDefault(), hn(this)) return;
      const i = ie.getElementFromSelector(this) || this.closest(`.${r}`);
      t.getOrCreateInstance(i)[e]();
    });
  }, Gm = "alert", qm = "bs.alert", Af = `.${qm}`, Jm = `close${Af}`, Xm = `closed${Af}`, Qm = "fade", Zm = "show";
  class fi extends Ot {
    static get NAME() {
      return Gm;
    }
    close() {
      if (N.trigger(this._element, Jm).defaultPrevented) return;
      this._element.classList.remove(Zm);
      const n = this._element.classList.contains(Qm);
      this._queueCallback(() => this._destroyElement(), this._element, n);
    }
    _destroyElement() {
      this._element.remove(), N.trigger(this._element, Xm), this.dispose();
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = fi.getOrCreateInstance(this);
        if (typeof e == "string") {
          if (n[e] === void 0 || e.startsWith("_") || e === "constructor") throw new TypeError(`No method named "${e}"`);
          n[e](this);
        }
      });
    }
  }
  ui(fi, "close");
  Et(fi);
  const ev = "button", tv = "bs.button", nv = `.${tv}`, rv = ".data-api", sv = "active", kl = '[data-bs-toggle="button"]', iv = `click${nv}${rv}`;
  class di extends Ot {
    static get NAME() {
      return ev;
    }
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle(sv));
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = di.getOrCreateInstance(this);
        e === "toggle" && n[e]();
      });
    }
  }
  N.on(document, iv, kl, (t) => {
    t.preventDefault();
    const e = t.target.closest(kl);
    di.getOrCreateInstance(e).toggle();
  });
  Et(di);
  const ov = "swipe", vr = ".bs.swipe", av = `touchstart${vr}`, lv = `touchmove${vr}`, cv = `touchend${vr}`, uv = `pointerdown${vr}`, fv = `pointerup${vr}`, dv = "touch", hv = "pen", pv = "pointer-event", gv = 40, _v = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  }, mv = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };
  class Ys extends rs {
    constructor(e, n) {
      super(), this._element = e, !(!e || !Ys.isSupported()) && (this._config = this._getConfig(n), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
    }
    static get Default() {
      return _v;
    }
    static get DefaultType() {
      return mv;
    }
    static get NAME() {
      return ov;
    }
    dispose() {
      N.off(this._element, vr);
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
      if (e <= gv) return;
      const n = e / this._deltaX;
      this._deltaX = 0, n && nt(n > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents ? (N.on(this._element, uv, (e) => this._start(e)), N.on(this._element, fv, (e) => this._end(e)), this._element.classList.add(pv)) : (N.on(this._element, av, (e) => this._start(e)), N.on(this._element, lv, (e) => this._move(e)), N.on(this._element, cv, (e) => this._end(e)));
    }
    _eventIsPointerPenTouch(e) {
      return this._supportPointerEvents && (e.pointerType === hv || e.pointerType === dv);
    }
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  }
  const vv = "carousel", bv = "bs.carousel", vn = `.${bv}`, Sf = ".data-api", Ev = "ArrowLeft", yv = "ArrowRight", Tv = 500, Or = "next", Yn = "prev", Xn = "left", Ds = "right", wv = `slide${vn}`, Gi = `slid${vn}`, Av = `keydown${vn}`, Sv = `mouseenter${vn}`, Cv = `mouseleave${vn}`, Ov = `dragstart${vn}`, Pv = `load${vn}${Sf}`, $v = `click${vn}${Sf}`, Cf = "carousel", Ts = "active", Rv = "slide", Nv = "carousel-item-end", Iv = "carousel-item-start", xv = "carousel-item-next", Dv = "carousel-item-prev", Of = ".active", Pf = ".carousel-item", Lv = Of + Pf, Mv = ".carousel-item img", kv = ".carousel-indicators", Fv = "[data-bs-slide], [data-bs-slide-to]", Vv = '[data-bs-ride="carousel"]', Hv = {
    [Ev]: Ds,
    [yv]: Xn
  }, Wv = {
    interval: 5e3,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
  }, Uv = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };
  class ss extends Ot {
    constructor(e, n) {
      super(e, n), this._interval = null, this._activeElement = null, this._isSliding = false, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = ie.findOne(kv, this._element), this._addEventListeners(), this._config.ride === Cf && this.cycle();
    }
    static get Default() {
      return Wv;
    }
    static get DefaultType() {
      return Uv;
    }
    static get NAME() {
      return vv;
    }
    next() {
      this._slide(Or);
    }
    nextWhenVisible() {
      !document.hidden && mr(this._element) && this.next();
    }
    prev() {
      this._slide(Yn);
    }
    pause() {
      this._isSliding && pf(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (this._config.ride) {
        if (this._isSliding) {
          N.one(this._element, Gi, () => this.cycle());
          return;
        }
        this.cycle();
      }
    }
    to(e) {
      const n = this._getItems();
      if (e > n.length - 1 || e < 0) return;
      if (this._isSliding) {
        N.one(this._element, Gi, () => this.to(e));
        return;
      }
      const r = this._getItemIndex(this._getActive());
      if (r === e) return;
      const s = e > r ? Or : Yn;
      this._slide(s, n[e]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(e) {
      return e.defaultInterval = e.interval, e;
    }
    _addEventListeners() {
      this._config.keyboard && N.on(this._element, Av, (e) => this._keydown(e)), this._config.pause === "hover" && (N.on(this._element, Sv, () => this.pause()), N.on(this._element, Cv, () => this._maybeEnableCycle())), this._config.touch && Ys.isSupported() && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const r of ie.find(Mv, this._element)) N.on(r, Ov, (s) => s.preventDefault());
      const n = {
        leftCallback: () => this._slide(this._directionToOrder(Xn)),
        rightCallback: () => this._slide(this._directionToOrder(Ds)),
        endCallback: () => {
          this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), Tv + this._config.interval));
        }
      };
      this._swipeHelper = new Ys(this._element, n);
    }
    _keydown(e) {
      if (/input|textarea/i.test(e.target.tagName)) return;
      const n = Hv[e.key];
      n && (e.preventDefault(), this._slide(this._directionToOrder(n)));
    }
    _getItemIndex(e) {
      return this._getItems().indexOf(e);
    }
    _setActiveIndicatorElement(e) {
      if (!this._indicatorsElement) return;
      const n = ie.findOne(Of, this._indicatorsElement);
      n.classList.remove(Ts), n.removeAttribute("aria-current");
      const r = ie.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
      r && (r.classList.add(Ts), r.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      const e = this._activeElement || this._getActive();
      if (!e) return;
      const n = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
      this._config.interval = n || this._config.defaultInterval;
    }
    _slide(e, n = null) {
      if (this._isSliding) return;
      const r = this._getActive(), s = e === Or, i = n || ha(this._getItems(), r, s, this._config.wrap);
      if (i === r) return;
      const l = this._getItemIndex(i), c = (v) => N.trigger(this._element, v, {
        relatedTarget: i,
        direction: this._orderToDirection(e),
        from: this._getItemIndex(r),
        to: l
      });
      if (c(wv).defaultPrevented || !r || !i) return;
      const h = !!this._interval;
      this.pause(), this._isSliding = true, this._setActiveIndicatorElement(l), this._activeElement = i;
      const d = s ? Iv : Nv, p = s ? xv : Dv;
      i.classList.add(p), ns(i), r.classList.add(d), i.classList.add(d);
      const b = () => {
        i.classList.remove(d, p), i.classList.add(Ts), r.classList.remove(Ts, p, d), this._isSliding = false, c(Gi);
      };
      this._queueCallback(b, r, this._isAnimated()), h && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains(Rv);
    }
    _getActive() {
      return ie.findOne(Lv, this._element);
    }
    _getItems() {
      return ie.find(Pf, this._element);
    }
    _clearInterval() {
      this._interval && (clearInterval(this._interval), this._interval = null);
    }
    _directionToOrder(e) {
      return vt() ? e === Xn ? Yn : Or : e === Xn ? Or : Yn;
    }
    _orderToDirection(e) {
      return vt() ? e === Yn ? Xn : Ds : e === Yn ? Ds : Xn;
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = ss.getOrCreateInstance(this, e);
        if (typeof e == "number") {
          n.to(e);
          return;
        }
        if (typeof e == "string") {
          if (n[e] === void 0 || e.startsWith("_") || e === "constructor") throw new TypeError(`No method named "${e}"`);
          n[e]();
        }
      });
    }
  }
  N.on(document, $v, Fv, function(t) {
    const e = ie.getElementFromSelector(this);
    if (!e || !e.classList.contains(Cf)) return;
    t.preventDefault();
    const n = ss.getOrCreateInstance(e), r = this.getAttribute("data-bs-slide-to");
    if (r) {
      n.to(r), n._maybeEnableCycle();
      return;
    }
    if (Jt.getDataAttribute(this, "slide") === "next") {
      n.next(), n._maybeEnableCycle();
      return;
    }
    n.prev(), n._maybeEnableCycle();
  });
  N.on(window, Pv, () => {
    const t = ie.find(Vv);
    for (const e of t) ss.getOrCreateInstance(e);
  });
  Et(ss);
  const jv = "collapse", Bv = "bs.collapse", is = `.${Bv}`, Kv = ".data-api", zv = `show${is}`, Yv = `shown${is}`, Gv = `hide${is}`, qv = `hidden${is}`, Jv = `click${is}${Kv}`, qi = "show", er = "collapse", ws = "collapsing", Xv = "collapsed", Qv = `:scope .${er} .${er}`, Zv = "collapse-horizontal", eb = "width", tb = "height", nb = ".collapse.show, .collapse.collapsing", Oo = '[data-bs-toggle="collapse"]', rb = {
    parent: null,
    toggle: true
  }, sb = {
    parent: "(null|element)",
    toggle: "boolean"
  };
  class Gr extends Ot {
    constructor(e, n) {
      super(e, n), this._isTransitioning = false, this._triggerArray = [];
      const r = ie.find(Oo);
      for (const s of r) {
        const i = ie.getSelectorFromElement(s), l = ie.find(i).filter((c) => c === this._element);
        i !== null && l.length && this._triggerArray.push(s);
      }
      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
    }
    static get Default() {
      return rb;
    }
    static get DefaultType() {
      return sb;
    }
    static get NAME() {
      return jv;
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let e = [];
      if (this._config.parent && (e = this._getFirstLevelChildren(nb).filter((c) => c !== this._element).map((c) => Gr.getOrCreateInstance(c, {
        toggle: false
      }))), e.length && e[0]._isTransitioning || N.trigger(this._element, zv).defaultPrevented) return;
      for (const c of e) c.hide();
      const r = this._getDimension();
      this._element.classList.remove(er), this._element.classList.add(ws), this._element.style[r] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
      const s = () => {
        this._isTransitioning = false, this._element.classList.remove(ws), this._element.classList.add(er, qi), this._element.style[r] = "", N.trigger(this._element, Yv);
      }, l = `scroll${r[0].toUpperCase() + r.slice(1)}`;
      this._queueCallback(s, this._element, true), this._element.style[r] = `${this._element[l]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown() || N.trigger(this._element, Gv).defaultPrevented) return;
      const n = this._getDimension();
      this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`, ns(this._element), this._element.classList.add(ws), this._element.classList.remove(er, qi);
      for (const s of this._triggerArray) {
        const i = ie.getElementFromSelector(s);
        i && !this._isShown(i) && this._addAriaAndCollapsedClass([
          s
        ], false);
      }
      this._isTransitioning = true;
      const r = () => {
        this._isTransitioning = false, this._element.classList.remove(ws), this._element.classList.add(er), N.trigger(this._element, qv);
      };
      this._element.style[n] = "", this._queueCallback(r, this._element, true);
    }
    _isShown(e = this._element) {
      return e.classList.contains(qi);
    }
    _configAfterMerge(e) {
      return e.toggle = !!e.toggle, e.parent = dn(e.parent), e;
    }
    _getDimension() {
      return this._element.classList.contains(Zv) ? eb : tb;
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const e = this._getFirstLevelChildren(Oo);
      for (const n of e) {
        const r = ie.getElementFromSelector(n);
        r && this._addAriaAndCollapsedClass([
          n
        ], this._isShown(r));
      }
    }
    _getFirstLevelChildren(e) {
      const n = ie.find(Qv, this._config.parent);
      return ie.find(e, this._config.parent).filter((r) => !n.includes(r));
    }
    _addAriaAndCollapsedClass(e, n) {
      if (e.length) for (const r of e) r.classList.toggle(Xv, !n), r.setAttribute("aria-expanded", n);
    }
    static jQueryInterface(e) {
      const n = {};
      return typeof e == "string" && /show|hide/.test(e) && (n.toggle = false), this.each(function() {
        const r = Gr.getOrCreateInstance(this, n);
        if (typeof e == "string") {
          if (typeof r[e] > "u") throw new TypeError(`No method named "${e}"`);
          r[e]();
        }
      });
    }
  }
  N.on(document, Jv, Oo, function(t) {
    (t.target.tagName === "A" || t.delegateTarget && t.delegateTarget.tagName === "A") && t.preventDefault();
    for (const e of ie.getMultipleElementsFromSelector(this)) Gr.getOrCreateInstance(e, {
      toggle: false
    }).toggle();
  });
  Et(Gr);
  const Fl = "dropdown", ib = "bs.dropdown", Fn = `.${ib}`, ga = ".data-api", ob = "Escape", Vl = "Tab", ab = "ArrowUp", Hl = "ArrowDown", lb = 2, cb = `hide${Fn}`, ub = `hidden${Fn}`, fb = `show${Fn}`, db = `shown${Fn}`, $f = `click${Fn}${ga}`, Rf = `keydown${Fn}${ga}`, hb = `keyup${Fn}${ga}`, Qn = "show", pb = "dropup", gb = "dropend", _b = "dropstart", mb = "dropup-center", vb = "dropdown-center", On = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', bb = `${On}.${Qn}`, Ls = ".dropdown-menu", Eb = ".navbar", yb = ".navbar-nav", Tb = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", wb = vt() ? "top-end" : "top-start", Ab = vt() ? "top-start" : "top-end", Sb = vt() ? "bottom-end" : "bottom-start", Cb = vt() ? "bottom-start" : "bottom-end", Ob = vt() ? "left-start" : "right-start", Pb = vt() ? "right-start" : "left-start", $b = "top", Rb = "bottom", Nb = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [
      0,
      2
    ],
    popperConfig: null,
    reference: "toggle"
  }, Ib = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };
  class Ft extends Ot {
    constructor(e, n) {
      super(e, n), this._popper = null, this._parent = this._element.parentNode, this._menu = ie.next(this._element, Ls)[0] || ie.prev(this._element, Ls)[0] || ie.findOne(Ls, this._parent), this._inNavbar = this._detectNavbar();
    }
    static get Default() {
      return Nb;
    }
    static get DefaultType() {
      return Ib;
    }
    static get NAME() {
      return Fl;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (hn(this._element) || this._isShown()) return;
      const e = {
        relatedTarget: this._element
      };
      if (!N.trigger(this._element, fb, e).defaultPrevented) {
        if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(yb)) for (const r of [].concat(...document.body.children)) N.on(r, "mouseover", zs);
        this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add(Qn), this._element.classList.add(Qn), N.trigger(this._element, db, e);
      }
    }
    hide() {
      if (hn(this._element) || !this._isShown()) return;
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
      if (!N.trigger(this._element, cb, e).defaultPrevented) {
        if ("ontouchstart" in document.documentElement) for (const r of [].concat(...document.body.children)) N.off(r, "mouseover", zs);
        this._popper && this._popper.destroy(), this._menu.classList.remove(Qn), this._element.classList.remove(Qn), this._element.setAttribute("aria-expanded", "false"), Jt.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, ub, e);
      }
    }
    _getConfig(e) {
      if (e = super._getConfig(e), typeof e.reference == "object" && !qt(e.reference) && typeof e.reference.getBoundingClientRect != "function") throw new TypeError(`${Fl.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      return e;
    }
    _createPopper() {
      if (typeof df > "u") throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
      let e = this._element;
      this._config.reference === "parent" ? e = this._parent : qt(this._config.reference) ? e = dn(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
      const n = this._getPopperConfig();
      this._popper = da(e, this._menu, n);
    }
    _isShown() {
      return this._menu.classList.contains(Qn);
    }
    _getPlacement() {
      const e = this._parent;
      if (e.classList.contains(gb)) return Ob;
      if (e.classList.contains(_b)) return Pb;
      if (e.classList.contains(mb)) return $b;
      if (e.classList.contains(vb)) return Rb;
      const n = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      return e.classList.contains(pb) ? n ? Ab : wb : n ? Cb : Sb;
    }
    _detectNavbar() {
      return this._element.closest(Eb) !== null;
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
      return (this._inNavbar || this._config.display === "static") && (Jt.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [
        {
          name: "applyStyles",
          enabled: false
        }
      ]), {
        ...e,
        ...nt(this._config.popperConfig, [
          void 0,
          e
        ])
      };
    }
    _selectMenuItem({ key: e, target: n }) {
      const r = ie.find(Tb, this._menu).filter((s) => mr(s));
      r.length && ha(r, n, e === Hl, !r.includes(n)).focus();
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = Ft.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (typeof n[e] > "u") throw new TypeError(`No method named "${e}"`);
          n[e]();
        }
      });
    }
    static clearMenus(e) {
      if (e.button === lb || e.type === "keyup" && e.key !== Vl) return;
      const n = ie.find(bb);
      for (const r of n) {
        const s = Ft.getInstance(r);
        if (!s || s._config.autoClose === false) continue;
        const i = e.composedPath(), l = i.includes(s._menu);
        if (i.includes(s._element) || s._config.autoClose === "inside" && !l || s._config.autoClose === "outside" && l || s._menu.contains(e.target) && (e.type === "keyup" && e.key === Vl || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
        const c = {
          relatedTarget: s._element
        };
        e.type === "click" && (c.clickEvent = e), s._completeHide(c);
      }
    }
    static dataApiKeydownHandler(e) {
      const n = /input|textarea/i.test(e.target.tagName), r = e.key === ob, s = [
        ab,
        Hl
      ].includes(e.key);
      if (!s && !r || n && !r) return;
      e.preventDefault();
      const i = this.matches(On) ? this : ie.prev(this, On)[0] || ie.next(this, On)[0] || ie.findOne(On, e.delegateTarget.parentNode), l = Ft.getOrCreateInstance(i);
      if (s) {
        e.stopPropagation(), l.show(), l._selectMenuItem(e);
        return;
      }
      l._isShown() && (e.stopPropagation(), l.hide(), i.focus());
    }
  }
  N.on(document, Rf, On, Ft.dataApiKeydownHandler);
  N.on(document, Rf, Ls, Ft.dataApiKeydownHandler);
  N.on(document, $f, Ft.clearMenus);
  N.on(document, hb, Ft.clearMenus);
  N.on(document, $f, On, function(t) {
    t.preventDefault(), Ft.getOrCreateInstance(this).toggle();
  });
  Et(Ft);
  const Nf = "backdrop", xb = "fade", Wl = "show", Ul = `mousedown.bs.${Nf}`, Db = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    rootElement: "body"
  }, Lb = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };
  class If extends rs {
    constructor(e) {
      super(), this._config = this._getConfig(e), this._isAppended = false, this._element = null;
    }
    static get Default() {
      return Db;
    }
    static get DefaultType() {
      return Lb;
    }
    static get NAME() {
      return Nf;
    }
    show(e) {
      if (!this._config.isVisible) {
        nt(e);
        return;
      }
      this._append();
      const n = this._getElement();
      this._config.isAnimated && ns(n), n.classList.add(Wl), this._emulateAnimation(() => {
        nt(e);
      });
    }
    hide(e) {
      if (!this._config.isVisible) {
        nt(e);
        return;
      }
      this._getElement().classList.remove(Wl), this._emulateAnimation(() => {
        this.dispose(), nt(e);
      });
    }
    dispose() {
      this._isAppended && (N.off(this._element, Ul), this._element.remove(), this._isAppended = false);
    }
    _getElement() {
      if (!this._element) {
        const e = document.createElement("div");
        e.className = this._config.className, this._config.isAnimated && e.classList.add(xb), this._element = e;
      }
      return this._element;
    }
    _configAfterMerge(e) {
      return e.rootElement = dn(e.rootElement), e;
    }
    _append() {
      if (this._isAppended) return;
      const e = this._getElement();
      this._config.rootElement.append(e), N.on(e, Ul, () => {
        nt(this._config.clickCallback);
      }), this._isAppended = true;
    }
    _emulateAnimation(e) {
      mf(e, this._getElement(), this._config.isAnimated);
    }
  }
  const Mb = "focustrap", kb = "bs.focustrap", Gs = `.${kb}`, Fb = `focusin${Gs}`, Vb = `keydown.tab${Gs}`, Hb = "Tab", Wb = "forward", jl = "backward", Ub = {
    autofocus: true,
    trapElement: null
  }, jb = {
    autofocus: "boolean",
    trapElement: "element"
  };
  class xf extends rs {
    constructor(e) {
      super(), this._config = this._getConfig(e), this._isActive = false, this._lastTabNavDirection = null;
    }
    static get Default() {
      return Ub;
    }
    static get DefaultType() {
      return jb;
    }
    static get NAME() {
      return Mb;
    }
    activate() {
      this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gs), N.on(document, Fb, (e) => this._handleFocusin(e)), N.on(document, Vb, (e) => this._handleKeydown(e)), this._isActive = true);
    }
    deactivate() {
      this._isActive && (this._isActive = false, N.off(document, Gs));
    }
    _handleFocusin(e) {
      const { trapElement: n } = this._config;
      if (e.target === document || e.target === n || n.contains(e.target)) return;
      const r = ie.focusableChildren(n);
      r.length === 0 ? n.focus() : this._lastTabNavDirection === jl ? r[r.length - 1].focus() : r[0].focus();
    }
    _handleKeydown(e) {
      e.key === Hb && (this._lastTabNavDirection = e.shiftKey ? jl : Wb);
    }
  }
  const Bl = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Kl = ".sticky-top", As = "padding-right", zl = "margin-right";
  class Po {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const e = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - e);
    }
    hide() {
      const e = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, As, (n) => n + e), this._setElementAttributes(Bl, As, (n) => n + e), this._setElementAttributes(Kl, zl, (n) => n - e);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, As), this._resetElementAttributes(Bl, As), this._resetElementAttributes(Kl, zl);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
    }
    _setElementAttributes(e, n, r) {
      const s = this.getWidth(), i = (l) => {
        if (l !== this._element && window.innerWidth > l.clientWidth + s) return;
        this._saveInitialAttribute(l, n);
        const c = window.getComputedStyle(l).getPropertyValue(n);
        l.style.setProperty(n, `${r(Number.parseFloat(c))}px`);
      };
      this._applyManipulationCallback(e, i);
    }
    _saveInitialAttribute(e, n) {
      const r = e.style.getPropertyValue(n);
      r && Jt.setDataAttribute(e, n, r);
    }
    _resetElementAttributes(e, n) {
      const r = (s) => {
        const i = Jt.getDataAttribute(s, n);
        if (i === null) {
          s.style.removeProperty(n);
          return;
        }
        Jt.removeDataAttribute(s, n), s.style.setProperty(n, i);
      };
      this._applyManipulationCallback(e, r);
    }
    _applyManipulationCallback(e, n) {
      if (qt(e)) {
        n(e);
        return;
      }
      for (const r of ie.find(e, this._element)) n(r);
    }
  }
  const Bb = "modal", Kb = "bs.modal", bt = `.${Kb}`, zb = ".data-api", Yb = "Escape", Gb = `hide${bt}`, qb = `hidePrevented${bt}`, Df = `hidden${bt}`, Lf = `show${bt}`, Jb = `shown${bt}`, Xb = `resize${bt}`, Qb = `click.dismiss${bt}`, Zb = `mousedown.dismiss${bt}`, eE = `keydown.dismiss${bt}`, tE = `click${bt}${zb}`, Yl = "modal-open", nE = "fade", Gl = "show", Ji = "modal-static", rE = ".modal.show", sE = ".modal-dialog", iE = ".modal-body", oE = '[data-bs-toggle="modal"]', aE = {
    backdrop: true,
    focus: true,
    keyboard: true
  }, lE = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
  };
  class dr extends Ot {
    constructor(e, n) {
      super(e, n), this._dialog = ie.findOne(sE, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._isTransitioning = false, this._scrollBar = new Po(), this._addEventListeners();
    }
    static get Default() {
      return aE;
    }
    static get DefaultType() {
      return lE;
    }
    static get NAME() {
      return Bb;
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      this._isShown || this._isTransitioning || N.trigger(this._element, Lf, {
        relatedTarget: e
      }).defaultPrevented || (this._isShown = true, this._isTransitioning = true, this._scrollBar.hide(), document.body.classList.add(Yl), this._adjustDialog(), this._backdrop.show(() => this._showElement(e)));
    }
    hide() {
      !this._isShown || this._isTransitioning || N.trigger(this._element, Gb).defaultPrevented || (this._isShown = false, this._isTransitioning = true, this._focustrap.deactivate(), this._element.classList.remove(Gl), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
    }
    dispose() {
      N.off(window, bt), N.off(this._dialog, bt), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new If({
        isVisible: !!this._config.backdrop,
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new xf({
        trapElement: this._element
      });
    }
    _showElement(e) {
      document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
      const n = ie.findOne(iE, this._dialog);
      n && (n.scrollTop = 0), ns(this._element), this._element.classList.add(Gl);
      const r = () => {
        this._config.focus && this._focustrap.activate(), this._isTransitioning = false, N.trigger(this._element, Jb, {
          relatedTarget: e
        });
      };
      this._queueCallback(r, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      N.on(this._element, eE, (e) => {
        if (e.key === Yb) {
          if (this._config.keyboard) {
            this.hide();
            return;
          }
          this._triggerBackdropTransition();
        }
      }), N.on(window, Xb, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }), N.on(this._element, Zb, (e) => {
        N.one(this._element, Qb, (n) => {
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
        document.body.classList.remove(Yl), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, Df);
      });
    }
    _isAnimated() {
      return this._element.classList.contains(nE);
    }
    _triggerBackdropTransition() {
      if (N.trigger(this._element, qb).defaultPrevented) return;
      const n = this._element.scrollHeight > document.documentElement.clientHeight, r = this._element.style.overflowY;
      r === "hidden" || this._element.classList.contains(Ji) || (n || (this._element.style.overflowY = "hidden"), this._element.classList.add(Ji), this._queueCallback(() => {
        this._element.classList.remove(Ji), this._queueCallback(() => {
          this._element.style.overflowY = r;
        }, this._dialog);
      }, this._dialog), this._element.focus());
    }
    _adjustDialog() {
      const e = this._element.scrollHeight > document.documentElement.clientHeight, n = this._scrollBar.getWidth(), r = n > 0;
      if (r && !e) {
        const s = vt() ? "paddingLeft" : "paddingRight";
        this._element.style[s] = `${n}px`;
      }
      if (!r && e) {
        const s = vt() ? "paddingRight" : "paddingLeft";
        this._element.style[s] = `${n}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }
    static jQueryInterface(e, n) {
      return this.each(function() {
        const r = dr.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (typeof r[e] > "u") throw new TypeError(`No method named "${e}"`);
          r[e](n);
        }
      });
    }
  }
  N.on(document, tE, oE, function(t) {
    const e = ie.getElementFromSelector(this);
    [
      "A",
      "AREA"
    ].includes(this.tagName) && t.preventDefault(), N.one(e, Lf, (s) => {
      s.defaultPrevented || N.one(e, Df, () => {
        mr(this) && this.focus();
      });
    });
    const n = ie.findOne(rE);
    n && dr.getInstance(n).hide(), dr.getOrCreateInstance(e).toggle(this);
  });
  ui(dr);
  Et(dr);
  const cE = "offcanvas", uE = "bs.offcanvas", Zt = `.${uE}`, Mf = ".data-api", fE = `load${Zt}${Mf}`, dE = "Escape", ql = "show", Jl = "showing", Xl = "hiding", hE = "offcanvas-backdrop", kf = ".offcanvas.show", pE = `show${Zt}`, gE = `shown${Zt}`, _E = `hide${Zt}`, Ql = `hidePrevented${Zt}`, Ff = `hidden${Zt}`, mE = `resize${Zt}`, vE = `click${Zt}${Mf}`, bE = `keydown.dismiss${Zt}`, EE = '[data-bs-toggle="offcanvas"]', yE = {
    backdrop: true,
    keyboard: true,
    scroll: false
  }, TE = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };
  class pn extends Ot {
    constructor(e, n) {
      super(e, n), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
    }
    static get Default() {
      return yE;
    }
    static get DefaultType() {
      return TE;
    }
    static get NAME() {
      return cE;
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      if (this._isShown || N.trigger(this._element, pE, {
        relatedTarget: e
      }).defaultPrevented) return;
      this._isShown = true, this._backdrop.show(), this._config.scroll || new Po().hide(), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add(Jl);
      const r = () => {
        (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(ql), this._element.classList.remove(Jl), N.trigger(this._element, gE, {
          relatedTarget: e
        });
      };
      this._queueCallback(r, this._element, true);
    }
    hide() {
      if (!this._isShown || N.trigger(this._element, _E).defaultPrevented) return;
      this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.add(Xl), this._backdrop.hide();
      const n = () => {
        this._element.classList.remove(ql, Xl), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Po().reset(), N.trigger(this._element, Ff);
      };
      this._queueCallback(n, this._element, true);
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const e = () => {
        if (this._config.backdrop === "static") {
          N.trigger(this._element, Ql);
          return;
        }
        this.hide();
      }, n = !!this._config.backdrop;
      return new If({
        className: hE,
        isVisible: n,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: n ? e : null
      });
    }
    _initializeFocusTrap() {
      return new xf({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      N.on(this._element, bE, (e) => {
        if (e.key === dE) {
          if (this._config.keyboard) {
            this.hide();
            return;
          }
          N.trigger(this._element, Ql);
        }
      });
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = pn.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (n[e] === void 0 || e.startsWith("_") || e === "constructor") throw new TypeError(`No method named "${e}"`);
          n[e](this);
        }
      });
    }
  }
  N.on(document, vE, EE, function(t) {
    const e = ie.getElementFromSelector(this);
    if ([
      "A",
      "AREA"
    ].includes(this.tagName) && t.preventDefault(), hn(this)) return;
    N.one(e, Ff, () => {
      mr(this) && this.focus();
    });
    const n = ie.findOne(kf);
    n && n !== e && pn.getInstance(n).hide(), pn.getOrCreateInstance(e).toggle(this);
  });
  N.on(window, fE, () => {
    for (const t of ie.find(kf)) pn.getOrCreateInstance(t).show();
  });
  N.on(window, mE, () => {
    for (const t of ie.find("[aria-modal][class*=show][class*=offcanvas-]")) getComputedStyle(t).position !== "fixed" && pn.getOrCreateInstance(t).hide();
  });
  ui(pn);
  Et(pn);
  const wE = /^aria-[\w-]*$/i, Vf = {
    "*": [
      "class",
      "dir",
      "id",
      "lang",
      "role",
      wE
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
  }, AE = /* @__PURE__ */ new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href"
  ]), SE = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, CE = (t, e) => {
    const n = t.nodeName.toLowerCase();
    return e.includes(n) ? AE.has(n) ? !!SE.test(t.nodeValue) : true : e.filter((r) => r instanceof RegExp).some((r) => r.test(n));
  };
  function OE(t, e, n) {
    if (!t.length) return t;
    if (n && typeof n == "function") return n(t);
    const s = new window.DOMParser().parseFromString(t, "text/html"), i = [].concat(...s.body.querySelectorAll("*"));
    for (const l of i) {
      const c = l.nodeName.toLowerCase();
      if (!Object.keys(e).includes(c)) {
        l.remove();
        continue;
      }
      const u = [].concat(...l.attributes), h = [].concat(e["*"] || [], e[c] || []);
      for (const d of u) CE(d, h) || l.removeAttribute(d.nodeName);
    }
    return s.body.innerHTML;
  }
  const PE = "TemplateFactory", $E = {
    allowList: Vf,
    content: {},
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
  }, RE = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  }, NE = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };
  class IE extends rs {
    constructor(e) {
      super(), this._config = this._getConfig(e);
    }
    static get Default() {
      return $E;
    }
    static get DefaultType() {
      return RE;
    }
    static get NAME() {
      return PE;
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
      for (const [s, i] of Object.entries(this._config.content)) this._setContent(e, i, s);
      const n = e.children[0], r = this._resolvePossibleFunction(this._config.extraClass);
      return r && n.classList.add(...r.split(" ")), n;
    }
    _typeCheckConfig(e) {
      super._typeCheckConfig(e), this._checkContent(e.content);
    }
    _checkContent(e) {
      for (const [n, r] of Object.entries(e)) super._typeCheckConfig({
        selector: n,
        entry: r
      }, NE);
    }
    _setContent(e, n, r) {
      const s = ie.findOne(r, e);
      if (s) {
        if (n = this._resolvePossibleFunction(n), !n) {
          s.remove();
          return;
        }
        if (qt(n)) {
          this._putElementInTemplate(dn(n), s);
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
      return this._config.sanitize ? OE(e, this._config.allowList, this._config.sanitizeFn) : e;
    }
    _resolvePossibleFunction(e) {
      return nt(e, [
        void 0,
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
  const xE = "tooltip", DE = /* @__PURE__ */ new Set([
    "sanitize",
    "allowList",
    "sanitizeFn"
  ]), Xi = "fade", LE = "modal", Ss = "show", ME = ".tooltip-inner", Zl = `.${LE}`, ec = "hide.bs.modal", Pr = "hover", Qi = "focus", kE = "click", FE = "manual", VE = "hide", HE = "hidden", WE = "show", UE = "shown", jE = "inserted", BE = "click", KE = "focusin", zE = "focusout", YE = "mouseenter", GE = "mouseleave", qE = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: vt() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: vt() ? "right" : "left"
  }, JE = {
    allowList: Vf,
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
  }, XE = {
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
  class br extends Ot {
    constructor(e, n) {
      if (typeof df > "u") throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
      super(e, n), this._isEnabled = true, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
    }
    static get Default() {
      return JE;
    }
    static get DefaultType() {
      return XE;
    }
    static get NAME() {
      return xE;
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
        if (this._isShown()) {
          this._leave();
          return;
        }
        this._enter();
      }
    }
    dispose() {
      clearTimeout(this._timeout), N.off(this._element.closest(Zl), ec, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
    }
    show() {
      if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
      if (!(this._isWithContent() && this._isEnabled)) return;
      const e = N.trigger(this._element, this.constructor.eventName(WE)), r = (gf(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
      if (e.defaultPrevented || !r) return;
      this._disposePopper();
      const s = this._getTipElement();
      this._element.setAttribute("aria-describedby", s.getAttribute("id"));
      const { container: i } = this._config;
      if (this._element.ownerDocument.documentElement.contains(this.tip) || (i.append(s), N.trigger(this._element, this.constructor.eventName(jE))), this._popper = this._createPopper(s), s.classList.add(Ss), "ontouchstart" in document.documentElement) for (const c of [].concat(...document.body.children)) N.on(c, "mouseover", zs);
      const l = () => {
        N.trigger(this._element, this.constructor.eventName(UE)), this._isHovered === false && this._leave(), this._isHovered = false;
      };
      this._queueCallback(l, this.tip, this._isAnimated());
    }
    hide() {
      if (!this._isShown() || N.trigger(this._element, this.constructor.eventName(VE)).defaultPrevented) return;
      if (this._getTipElement().classList.remove(Ss), "ontouchstart" in document.documentElement) for (const s of [].concat(...document.body.children)) N.off(s, "mouseover", zs);
      this._activeTrigger[kE] = false, this._activeTrigger[Qi] = false, this._activeTrigger[Pr] = false, this._isHovered = null;
      const r = () => {
        this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.eventName(HE)));
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
      if (!n) return null;
      n.classList.remove(Xi, Ss), n.classList.add(`bs-${this.constructor.NAME}-auto`);
      const r = km(this.constructor.NAME).toString();
      return n.setAttribute("id", r), this._isAnimated() && n.classList.add(Xi), n;
    }
    setContent(e) {
      this._newContent = e, this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(e) {
      return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new IE({
        ...this._config,
        content: e,
        extraClass: this._resolvePossibleFunction(this._config.customClass)
      }), this._templateFactory;
    }
    _getContentForTemplate() {
      return {
        [ME]: this._getTitle()
      };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    _initializeOnDelegatedTarget(e) {
      return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(Xi);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(Ss);
    }
    _createPopper(e) {
      const n = nt(this._config.placement, [
        this,
        e,
        this._element
      ]), r = qE[n.toUpperCase()];
      return da(this._element, e, this._getPopperConfig(r));
    }
    _getOffset() {
      const { offset: e } = this._config;
      return typeof e == "string" ? e.split(",").map((n) => Number.parseInt(n, 10)) : typeof e == "function" ? (n) => e(n, this._element) : e;
    }
    _resolvePossibleFunction(e) {
      return nt(e, [
        this._element,
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
          void 0,
          n
        ])
      };
    }
    _setListeners() {
      const e = this._config.trigger.split(" ");
      for (const n of e) if (n === "click") N.on(this._element, this.constructor.eventName(BE), this._config.selector, (r) => {
        this._initializeOnDelegatedTarget(r).toggle();
      });
      else if (n !== FE) {
        const r = n === Pr ? this.constructor.eventName(YE) : this.constructor.eventName(KE), s = n === Pr ? this.constructor.eventName(GE) : this.constructor.eventName(zE);
        N.on(this._element, r, this._config.selector, (i) => {
          const l = this._initializeOnDelegatedTarget(i);
          l._activeTrigger[i.type === "focusin" ? Qi : Pr] = true, l._enter();
        }), N.on(this._element, s, this._config.selector, (i) => {
          const l = this._initializeOnDelegatedTarget(i);
          l._activeTrigger[i.type === "focusout" ? Qi : Pr] = l._element.contains(i.relatedTarget), l._leave();
        });
      }
      this._hideModalHandler = () => {
        this._element && this.hide();
      }, N.on(this._element.closest(Zl), ec, this._hideModalHandler);
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
      const n = Jt.getDataAttributes(this._element);
      for (const r of Object.keys(n)) DE.has(r) && delete n[r];
      return e = {
        ...n,
        ...typeof e == "object" && e ? e : {}
      }, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
    }
    _configAfterMerge(e) {
      return e.container = e.container === false ? document.body : dn(e.container), typeof e.delay == "number" && (e.delay = {
        show: e.delay,
        hide: e.delay
      }), typeof e.title == "number" && (e.title = e.title.toString()), typeof e.content == "number" && (e.content = e.content.toString()), e;
    }
    _getDelegateConfig() {
      const e = {};
      for (const [n, r] of Object.entries(this._config)) this.constructor.Default[n] !== r && (e[n] = r);
      return e.selector = false, e.trigger = "manual", e;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = br.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (typeof n[e] > "u") throw new TypeError(`No method named "${e}"`);
          n[e]();
        }
      });
    }
  }
  Et(br);
  const QE = "popover", ZE = ".popover-header", ey = ".popover-body", ty = {
    ...br.Default,
    content: "",
    offset: [
      0,
      8
    ],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
  }, ny = {
    ...br.DefaultType,
    content: "(null|string|element|function)"
  };
  class _a extends br {
    static get Default() {
      return ty;
    }
    static get DefaultType() {
      return ny;
    }
    static get NAME() {
      return QE;
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return {
        [ZE]: this._getTitle(),
        [ey]: this._getContent()
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = _a.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (typeof n[e] > "u") throw new TypeError(`No method named "${e}"`);
          n[e]();
        }
      });
    }
  }
  Et(_a);
  const ry = "scrollspy", sy = "bs.scrollspy", ma = `.${sy}`, iy = ".data-api", oy = `activate${ma}`, tc = `click${ma}`, ay = `load${ma}${iy}`, ly = "dropdown-item", Gn = "active", cy = '[data-bs-spy="scroll"]', Zi = "[href]", uy = ".nav, .list-group", nc = ".nav-link", fy = ".nav-item", dy = ".list-group-item", hy = `${nc}, ${fy} > ${nc}, ${dy}`, py = ".dropdown", gy = ".dropdown-toggle", _y = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [
      0.1,
      0.5,
      1
    ]
  }, my = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };
  class hi extends Ot {
    constructor(e, n) {
      super(e, n), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      }, this.refresh();
    }
    static get Default() {
      return _y;
    }
    static get DefaultType() {
      return my;
    }
    static get NAME() {
      return ry;
    }
    refresh() {
      this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
      for (const e of this._observableSections.values()) this._observer.observe(e);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(e) {
      return e.target = dn(e.target) || document.body, e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin, typeof e.threshold == "string" && (e.threshold = e.threshold.split(",").map((n) => Number.parseFloat(n))), e;
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll && (N.off(this._config.target, tc), N.on(this._config.target, tc, Zi, (e) => {
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
      const n = (l) => this._targetLinks.get(`#${l.target.id}`), r = (l) => {
        this._previousScrollData.visibleEntryTop = l.target.offsetTop, this._process(n(l));
      }, s = (this._rootElement || document.documentElement).scrollTop, i = s >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = s;
      for (const l of e) {
        if (!l.isIntersecting) {
          this._activeTarget = null, this._clearActiveClass(n(l));
          continue;
        }
        const c = l.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (i && c) {
          if (r(l), !s) return;
          continue;
        }
        !i && !c && r(l);
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
      const e = ie.find(Zi, this._config.target);
      for (const n of e) {
        if (!n.hash || hn(n)) continue;
        const r = ie.findOne(decodeURI(n.hash), this._element);
        mr(r) && (this._targetLinks.set(decodeURI(n.hash), n), this._observableSections.set(n.hash, r));
      }
    }
    _process(e) {
      this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(Gn), this._activateParents(e), N.trigger(this._element, oy, {
        relatedTarget: e
      }));
    }
    _activateParents(e) {
      if (e.classList.contains(ly)) {
        ie.findOne(gy, e.closest(py)).classList.add(Gn);
        return;
      }
      for (const n of ie.parents(e, uy)) for (const r of ie.prev(n, hy)) r.classList.add(Gn);
    }
    _clearActiveClass(e) {
      e.classList.remove(Gn);
      const n = ie.find(`${Zi}.${Gn}`, e);
      for (const r of n) r.classList.remove(Gn);
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = hi.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (n[e] === void 0 || e.startsWith("_") || e === "constructor") throw new TypeError(`No method named "${e}"`);
          n[e]();
        }
      });
    }
  }
  N.on(window, ay, () => {
    for (const t of ie.find(cy)) hi.getOrCreateInstance(t);
  });
  Et(hi);
  const vy = "tab", by = "bs.tab", Vn = `.${by}`, Ey = `hide${Vn}`, yy = `hidden${Vn}`, Ty = `show${Vn}`, wy = `shown${Vn}`, Ay = `click${Vn}`, Sy = `keydown${Vn}`, Cy = `load${Vn}`, Oy = "ArrowLeft", rc = "ArrowRight", Py = "ArrowUp", sc = "ArrowDown", eo = "Home", ic = "End", Pn = "active", oc = "fade", to = "show", $y = "dropdown", Hf = ".dropdown-toggle", Ry = ".dropdown-menu", no = `:not(${Hf})`, Ny = '.list-group, .nav, [role="tablist"]', Iy = ".nav-item, .list-group-item", xy = `.nav-link${no}, .list-group-item${no}, [role="tab"]${no}`, Wf = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', ro = `${xy}, ${Wf}`, Dy = `.${Pn}[data-bs-toggle="tab"], .${Pn}[data-bs-toggle="pill"], .${Pn}[data-bs-toggle="list"]`;
  class hr extends Ot {
    constructor(e) {
      super(e), this._parent = this._element.closest(Ny), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N.on(this._element, Sy, (n) => this._keydown(n)));
    }
    static get NAME() {
      return vy;
    }
    show() {
      const e = this._element;
      if (this._elemIsActive(e)) return;
      const n = this._getActiveElem(), r = n ? N.trigger(n, Ey, {
        relatedTarget: e
      }) : null;
      N.trigger(e, Ty, {
        relatedTarget: n
      }).defaultPrevented || r && r.defaultPrevented || (this._deactivate(n, e), this._activate(e, n));
    }
    _activate(e, n) {
      if (!e) return;
      e.classList.add(Pn), this._activate(ie.getElementFromSelector(e));
      const r = () => {
        if (e.getAttribute("role") !== "tab") {
          e.classList.add(to);
          return;
        }
        e.removeAttribute("tabindex"), e.setAttribute("aria-selected", true), this._toggleDropDown(e, true), N.trigger(e, wy, {
          relatedTarget: n
        });
      };
      this._queueCallback(r, e, e.classList.contains(oc));
    }
    _deactivate(e, n) {
      if (!e) return;
      e.classList.remove(Pn), e.blur(), this._deactivate(ie.getElementFromSelector(e));
      const r = () => {
        if (e.getAttribute("role") !== "tab") {
          e.classList.remove(to);
          return;
        }
        e.setAttribute("aria-selected", false), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, false), N.trigger(e, yy, {
          relatedTarget: n
        });
      };
      this._queueCallback(r, e, e.classList.contains(oc));
    }
    _keydown(e) {
      if (![
        Oy,
        rc,
        Py,
        sc,
        eo,
        ic
      ].includes(e.key)) return;
      e.stopPropagation(), e.preventDefault();
      const n = this._getChildren().filter((s) => !hn(s));
      let r;
      if ([
        eo,
        ic
      ].includes(e.key)) r = n[e.key === eo ? 0 : n.length - 1];
      else {
        const s = [
          rc,
          sc
        ].includes(e.key);
        r = ha(n, e.target, s, true);
      }
      r && (r.focus({
        preventScroll: true
      }), hr.getOrCreateInstance(r).show());
    }
    _getChildren() {
      return ie.find(ro, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((e) => this._elemIsActive(e)) || null;
    }
    _setInitialAttributes(e, n) {
      this._setAttributeIfNotExists(e, "role", "tablist");
      for (const r of n) this._setInitialAttributesOnChild(r);
    }
    _setInitialAttributesOnChild(e) {
      e = this._getInnerElement(e);
      const n = this._elemIsActive(e), r = this._getOuterElement(e);
      e.setAttribute("aria-selected", n), r !== e && this._setAttributeIfNotExists(r, "role", "presentation"), n || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e);
    }
    _setInitialAttributesOnTargetPanel(e) {
      const n = ie.getElementFromSelector(e);
      n && (this._setAttributeIfNotExists(n, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${e.id}`));
    }
    _toggleDropDown(e, n) {
      const r = this._getOuterElement(e);
      if (!r.classList.contains($y)) return;
      const s = (i, l) => {
        const c = ie.findOne(i, r);
        c && c.classList.toggle(l, n);
      };
      s(Hf, Pn), s(Ry, to), r.setAttribute("aria-expanded", n);
    }
    _setAttributeIfNotExists(e, n, r) {
      e.hasAttribute(n) || e.setAttribute(n, r);
    }
    _elemIsActive(e) {
      return e.classList.contains(Pn);
    }
    _getInnerElement(e) {
      return e.matches(ro) ? e : ie.findOne(ro, e);
    }
    _getOuterElement(e) {
      return e.closest(Iy) || e;
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = hr.getOrCreateInstance(this);
        if (typeof e == "string") {
          if (n[e] === void 0 || e.startsWith("_") || e === "constructor") throw new TypeError(`No method named "${e}"`);
          n[e]();
        }
      });
    }
  }
  N.on(document, Ay, Wf, function(t) {
    [
      "A",
      "AREA"
    ].includes(this.tagName) && t.preventDefault(), !hn(this) && hr.getOrCreateInstance(this).show();
  });
  N.on(window, Cy, () => {
    for (const t of ie.find(Dy)) hr.getOrCreateInstance(t);
  });
  Et(hr);
  const Ly = "toast", My = "bs.toast", bn = `.${My}`, ky = `mouseover${bn}`, Fy = `mouseout${bn}`, Vy = `focusin${bn}`, Hy = `focusout${bn}`, Wy = `hide${bn}`, Uy = `hidden${bn}`, jy = `show${bn}`, By = `shown${bn}`, Ky = "fade", ac = "hide", Cs = "show", Os = "showing", zy = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  }, Yy = {
    animation: true,
    autohide: true,
    delay: 5e3
  };
  class pi extends Ot {
    constructor(e, n) {
      super(e, n), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
    }
    static get Default() {
      return Yy;
    }
    static get DefaultType() {
      return zy;
    }
    static get NAME() {
      return Ly;
    }
    show() {
      if (N.trigger(this._element, jy).defaultPrevented) return;
      this._clearTimeout(), this._config.animation && this._element.classList.add(Ky);
      const n = () => {
        this._element.classList.remove(Os), N.trigger(this._element, By), this._maybeScheduleHide();
      };
      this._element.classList.remove(ac), ns(this._element), this._element.classList.add(Cs, Os), this._queueCallback(n, this._element, this._config.animation);
    }
    hide() {
      if (!this.isShown() || N.trigger(this._element, Wy).defaultPrevented) return;
      const n = () => {
        this._element.classList.add(ac), this._element.classList.remove(Os, Cs), N.trigger(this._element, Uy);
      };
      this._element.classList.add(Os), this._queueCallback(n, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout(), this.isShown() && this._element.classList.remove(Cs), super.dispose();
    }
    isShown() {
      return this._element.classList.contains(Cs);
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
      N.on(this._element, ky, (e) => this._onInteraction(e, true)), N.on(this._element, Fy, (e) => this._onInteraction(e, false)), N.on(this._element, Vy, (e) => this._onInteraction(e, true)), N.on(this._element, Hy, (e) => this._onInteraction(e, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }
    static jQueryInterface(e) {
      return this.each(function() {
        const n = pi.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (typeof n[e] > "u") throw new TypeError(`No method named "${e}"`);
          n[e](this);
        }
      });
    }
  }
  ui(pi);
  Et(pi);
  class un {
    static instance;
    list = /* @__PURE__ */ new Map();
    constructor() {
    }
    static shared() {
      return un.instance || (un.instance = new un()), un.instance;
    }
    add(e, n) {
      this.list.set(e, n);
    }
    find(e) {
      if (this.list.has(e)) return this.list.get(e);
    }
  }
  class Gy {
    target;
    constructor(e) {
      this.target = e;
    }
  }
  class qy {
    static batteryLevel(e) {
      return new Promise((n) => {
        const r = e.get("suffix");
        return n("100" + r);
      });
    }
  }
  class Jy {
    static initialize() {
      un.shared().add("platform.battery.level", new Gy(qy.batteryLevel));
    }
  }
  class Xy {
    serializer;
    constructor(e) {
      this.serializer = e;
    }
  }
  Cn = class {
    static get(e) {
      return typeof e == "string" ? e.toUpperCase() : e instanceof Error ? e.message : "unknown";
    }
  };
  wt = class {
    static d(e, ...n) {
    }
    static e(e, ...n) {
      console.error(e, n);
    }
  };
  const Qy = {
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
      if (!Je.shared().initialized) {
        wt.e("[XWebPlatformProxy : call] The WASM module is not initialized");
        return;
      }
      const n = Je.shared().config.serializer.decodeFunctionName(e);
      if (!n) {
        wt.e("[XWebPlatformProxy : call] Function name is empty"), Je.shared().module.CallbackList.executeFromJavascript(t, "");
        return;
      }
      const r = un.shared().find(n);
      if (!r) {
        wt.e("[XWebPlatformProxy : call] Mapping not found for function: " + n), Je.shared().module.CallbackList.executeFromJavascript(t, "");
        return;
      }
      let s;
      try {
        s = Je.shared().config.serializer.decodeMessage(e);
      } catch (i) {
        wt.e("[XWebPlatformProxy : call] Error when decode message: " + Cn.get(i));
      }
      if (!s) {
        wt.e("[XWebPlatformProxy : call] Error when decode message for function: " + n), Je.shared().module.CallbackList.executeFromJavascript(t, "");
        return;
      }
      r.target(s).then((i) => Je.shared().config.serializer.encodeFunctionReturnValue(i)).then((i) => {
        Je.shared().module.CallbackList.executeFromJavascript(t, i);
      }).catch((i) => {
        wt.e("[XWebPlatformProxy : call] Error when encode message: " + Cn.get(i)), Je.shared().module.CallbackList.executeFromJavascript(t, "");
      });
    },
    hasMapping(t) {
      return !!un.shared().find(t);
    }
  };
  Je = class {
    static instance;
    config;
    module;
    initialized = false;
    constructor() {
    }
    static shared() {
      return Je.instance || (Je.instance = new Je()), Je.instance;
    }
    initialize(e, n) {
      if (!this.initialized && (this.initialized = true, this.config = n, this.module = e, this.module)) {
        if (this.module.XPLPC && this.module.XPLPC.initialize(), this.module.NativePlatformProxy) {
          const r = new this.module.NativePlatformProxy();
          r.initialize(), this.module.PlatformProxyList && this.module.PlatformProxyList.insertFromJavascript(0, r);
        }
        if (this.module.PlatformProxy) {
          const r = new this.module.PlatformProxy.extend("PlatformProxy", Qy), s = new r();
          s.initialize(), this.module.PlatformProxyList && this.module.PlatformProxyList.insertFromJavascript(0, s);
        }
      }
    }
  };
  class Zy {
    data = /* @__PURE__ */ new Map();
    get(e) {
      if (this.data.has(e)) return this.data.get(e);
    }
    set(e, n) {
      this.data.set(e, n);
    }
  }
  class eT {
    decodeFunctionName(e) {
      try {
        return JSON.parse(e).f;
      } catch (n) {
        wt.e("[JsonSerializer : decodeFunctionName] Error when parse json: " + Cn.get(n));
      }
      return "";
    }
    decodeMessage(e) {
      try {
        const n = JSON.parse(e), r = new Zy();
        return n.p.forEach((s) => {
          r.set(s.n, s.v);
        }), r;
      } catch (n) {
        wt.e("[JsonSerializer : decodeMessage] Error when decode message: " + Cn.get(n));
      }
    }
    encodeFunctionReturnValue(e) {
      try {
        return JSON.stringify({
          r: e
        });
      } catch (n) {
        wt.e("[JsonSerializer : encodeFunctionReturnValue] Error when encode data: " + Cn.get(n));
      }
      return "";
    }
    decodeFunctionReturnValue(e) {
      try {
        return JSON.parse(e).r;
      } catch (n) {
        wt.e("[JsonSerializer : decodeFunctionReturnValue] Error when parse json: " + Cn.get(n));
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
        wt.e("[JsonSerializer : encodeRequest] Error when encode data: " + Cn.get(r));
      }
      return "";
    }
  }
  const tT = "modulepreload", nT = function(t) {
    return "/wasm-demo/" + t;
  }, lc = {}, $o = function(e, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const l = document.querySelector("meta[property=csp-nonce]"), c = l?.nonce || l?.getAttribute("nonce");
      s = Promise.allSettled(n.map((u) => {
        if (u = nT(u), u in lc) return;
        lc[u] = true;
        const h = u.endsWith(".css"), d = h ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${u}"]${d}`)) return;
        const p = document.createElement("link");
        if (p.rel = h ? "stylesheet" : tT, h || (p.as = "script"), p.crossOrigin = "", p.href = u, c && p.setAttribute("nonce", c), document.head.appendChild(p), h) return new Promise((b, v) => {
          p.addEventListener("load", b), p.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${u}`)));
        });
      }));
    }
    function i(l) {
      const c = new Event("vite:preloadError", {
        cancelable: true
      });
      if (c.payload = l, window.dispatchEvent(c), !c.defaultPrevented) throw l;
    }
    return s.then((l) => {
      for (const c of l || []) c.status === "rejected" && i(c.reason);
      return e().catch(i);
    });
  };
  var rT = (() => {
    var t = import.meta.url;
    return async function(e = {}) {
      var n, r = e, s, i, l = new Promise((o, a) => {
        s = o, i = a;
      }), c = typeof window == "object", u = typeof WorkerGlobalScope < "u", h = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && process.type != "renderer", d = !c && !h && !u;
      if (h) {
        const { createRequire: o } = await $o(() => import("./__vite-browser-external-BIHI7g3E.js"), []);
        var p = o(import.meta.url);
      }
      var b = "./this.program", v = "";
      function I(o) {
        return r.locateFile ? r.locateFile(o, v) : v + o;
      }
      var $, H;
      if (h) {
        if (typeof process > "u" || !process.release || process.release.name !== "node") throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
        var W = process.versions.node, k = W.split(".").slice(0, 3);
        if (k = k[0] * 1e4 + k[1] * 100 + k[2].split("-")[0] * 1, k < 16e4) throw new Error("This emscripten-generated code requires node v16.0.0 (detected v" + W + ")");
        var B = p("fs"), D = p("path");
        import.meta.url.startsWith("data:") || (v = D.dirname(p("url").fileURLToPath(import.meta.url)) + "/"), H = (o) => {
          o = Se(o) ? new URL(o) : o;
          var a = B.readFileSync(o);
          return R(Buffer.isBuffer(a)), a;
        }, $ = async (o, a = true) => {
          o = Se(o) ? new URL(o) : o;
          var f = B.readFileSync(o, a ? void 0 : "utf8");
          return R(a ? Buffer.isBuffer(f) : typeof f == "string"), f;
        }, process.argv.length > 1 && (b = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2);
      } else if (d) {
        if (typeof process == "object" && typeof p == "function" || typeof window == "object" || typeof WorkerGlobalScope < "u") throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
      } else if (c || u) {
        if (u ? v = self.location.href : typeof document < "u" && document.currentScript && (v = document.currentScript.src), t && (v = t), v.startsWith("blob:") ? v = "" : v = v.slice(0, v.replace(/[?#].*/, "").lastIndexOf("/") + 1), !(typeof window == "object" || typeof WorkerGlobalScope < "u")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
        u && (H = (o) => {
          var a = new XMLHttpRequest();
          return a.open("GET", o, false), a.responseType = "arraybuffer", a.send(null), new Uint8Array(a.response);
        }), $ = async (o) => {
          if (Se(o)) return new Promise((f, m) => {
            var y = new XMLHttpRequest();
            y.open("GET", o, true), y.responseType = "arraybuffer", y.onload = () => {
              if (y.status == 200 || y.status == 0 && y.response) {
                f(y.response);
                return;
              }
              m(y.status);
            }, y.onerror = m, y.send(null);
          });
          var a = await fetch(o, {
            credentials: "same-origin"
          });
          if (a.ok) return a.arrayBuffer();
          throw new Error(a.status + " : " + a.url);
        };
      } else throw new Error("environment detection error");
      var Y = console.log.bind(console), X = console.error.bind(console);
      R(!d, "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");
      var ne;
      typeof WebAssembly != "object" && X("no native wasm support detected");
      var ee, te = false;
      function R(o, a) {
        o || J("Assertion failed" + (a ? ": " + a : ""));
      }
      var pe, he, ge, Re, ce, G, re, ue, Ne, Ve, xe = false, Se = (o) => o.startsWith("file://");
      function st() {
        var o = Wa();
        R((o & 3) == 0), o == 0 && (o += 4), G[o >> 2] = 34821223, G[o + 4 >> 2] = 2310721022, G[0] = 1668509029;
      }
      function Me() {
        if (!te) {
          var o = Wa();
          o == 0 && (o += 4);
          var a = G[o >> 2], f = G[o + 4 >> 2];
          (a != 34821223 || f != 2310721022) && J(`Stack overflow! Stack cookie has been overwritten at ${Hn(o)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Hn(f)} ${Hn(a)}`), G[0] != 1668509029 && J("Runtime error: The application has corrupted its heap memory area (address zero)!");
        }
      }
      (() => {
        var o = new Int16Array(1), a = new Int8Array(o.buffer);
        if (o[0] = 25459, a[0] !== 115 || a[1] !== 99) throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
      })();
      function Le(o) {
        Object.getOwnPropertyDescriptor(r, o) || Object.defineProperty(r, o, {
          configurable: true,
          set() {
            J(`Attempt to set \`Module.${o}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`);
          }
        });
      }
      function Ie(o) {
        Object.getOwnPropertyDescriptor(r, o) && J(`\`Module.${o}\` was supplied but \`${o}\` not included in INCOMING_MODULE_JS_API`);
      }
      function A(o) {
        return o === "FS_createPath" || o === "FS_createDataFile" || o === "FS_createPreloadedFile" || o === "FS_unlink" || o === "addRunDependency" || o === "FS_createLazyFile" || o === "FS_createDevice" || o === "removeRunDependency";
      }
      function K(o, a) {
        typeof globalThis < "u" && !Object.getOwnPropertyDescriptor(globalThis, o) && Object.defineProperty(globalThis, o, {
          configurable: true,
          get() {
            a();
          }
        });
      }
      function j(o, a) {
        K(o, () => {
          En(`\`${o}\` is not longer defined by emscripten. ${a}`);
        });
      }
      j("buffer", "Please use HEAP8.buffer or wasmMemory.buffer"), j("asm", "Please use wasmExports instead");
      function Z(o) {
        K(o, () => {
          var a = `\`${o}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`, f = o;
          f.startsWith("_") || (f = "$" + o), a += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${f}')`, A(o) && (a += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"), En(a);
        }), me(o);
      }
      function me(o) {
        Object.getOwnPropertyDescriptor(r, o) || Object.defineProperty(r, o, {
          configurable: true,
          get() {
            var a = `'${o}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
            A(o) && (a += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"), J(a);
          }
        });
      }
      function g() {
        var o = ee.buffer;
        pe = new Int8Array(o), ge = new Int16Array(o), r.HEAPU8 = he = new Uint8Array(o), Re = new Uint16Array(o), ce = new Int32Array(o), G = new Uint32Array(o), re = new Float32Array(o), Ve = new Float64Array(o), ue = new BigInt64Array(o), Ne = new BigUint64Array(o);
      }
      R(typeof Int32Array < "u" && typeof Float64Array < "u" && Int32Array.prototype.subarray != null && Int32Array.prototype.set != null, "JS engine does not provide full typed array support");
      function _() {
        if (r.preRun) for (typeof r.preRun == "function" && (r.preRun = [
          r.preRun
        ]); r.preRun.length; ) os(r.preRun.shift());
        Le("preRun"), en(it);
      }
      function E() {
        R(!xe), xe = true, Me(), ze.__wasm_call_ctors();
      }
      function O() {
        if (Me(), r.postRun) for (typeof r.postRun == "function" && (r.postRun = [
          r.postRun
        ]); r.postRun.length; ) Ke(r.postRun.shift());
        Le("postRun"), en(Er);
      }
      var P = 0, C = null, U = {}, M = null;
      function L(o) {
        P++, r.monitorRunDependencies?.(P), R(!U[o]), U[o] = 1, M === null && typeof setInterval < "u" && (M = setInterval(() => {
          if (te) {
            clearInterval(M), M = null;
            return;
          }
          var a = false;
          for (var f in U) a || (a = true, X("still waiting on run dependencies:")), X(`dependency: ${f}`);
          a && X("(end of list)");
        }, 1e4));
      }
      function x(o) {
        if (P--, r.monitorRunDependencies?.(P), R(U[o]), delete U[o], P == 0 && (M !== null && (clearInterval(M), M = null), C)) {
          var a = C;
          C = null, a();
        }
      }
      function J(o) {
        r.onAbort?.(o), o = "Aborted(" + o + ")", X(o), te = true, xe && zh();
        var a = new WebAssembly.RuntimeError(o);
        throw i(a), a;
      }
      var F = {
        error() {
          J("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM");
        },
        init() {
          F.error();
        },
        createDataFile() {
          F.error();
        },
        createPreloadedFile() {
          F.error();
        },
        createLazyFile() {
          F.error();
        },
        open() {
          F.error();
        },
        mkdev() {
          F.error();
        },
        registerDevice() {
          F.error();
        },
        analyzePath() {
          F.error();
        },
        ErrnoError() {
          F.error();
        }
      };
      function Q(o, a) {
        return (...f) => {
          R(xe, `native function \`${o}\` called before runtime initialization`);
          var m = ze[o];
          return R(m, `exported native function \`${o}\` not found`), R(f.length <= a, `native function \`${o}\` called with ${f.length} args but expects ${a}`), m(...f);
        };
      }
      var se;
      function de() {
        return r.locateFile ? I("xplpc.wasm") : new URL("/wasm-demo/assets/xplpc-DdNSd_Iv.wasm", import.meta.url).href;
      }
      function ye(o) {
        if (o == se && ne) return new Uint8Array(ne);
        if (H) return H(o);
        throw "both async and sync fetching of the wasm failed";
      }
      async function ve(o) {
        if (!ne) try {
          var a = await $(o);
          return new Uint8Array(a);
        } catch {
        }
        return ye(o);
      }
      async function Be(o, a) {
        try {
          var f = await ve(o), m = await WebAssembly.instantiate(f, a);
          return m;
        } catch (y) {
          X(`failed to asynchronously prepare wasm: ${y}`), Se(se) && X(`warning: Loading from a file URI (${se}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`), J(y);
        }
      }
      async function He(o, a, f) {
        if (!o && typeof WebAssembly.instantiateStreaming == "function" && !Se(a) && !h) try {
          var m = fetch(a, {
            credentials: "same-origin"
          }), y = await WebAssembly.instantiateStreaming(m, f);
          return y;
        } catch (w) {
          X(`wasm streaming compile failed: ${w}`), X("falling back to ArrayBuffer instantiation");
        }
        return Be(a, f);
      }
      function dt() {
        return {
          env: Va,
          wasi_snapshot_preview1: Va
        };
      }
      async function ht() {
        function o(S, T) {
          return ze = S.exports, ee = ze.memory, R(ee, "memory not found in wasm exports"), g(), ps = ze.__indirect_function_table, R(ps, "table not found in wasm exports"), x("wasm-instantiate"), ze;
        }
        L("wasm-instantiate");
        var a = r;
        function f(S) {
          return R(r === a, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"), a = null, o(S.instance);
        }
        var m = dt();
        if (r.instantiateWasm) return new Promise((S, T) => {
          try {
            r.instantiateWasm(m, (V, q) => {
              S(o(V, q));
            });
          } catch (V) {
            X(`Module.instantiateWasm callback failed with error: ${V}`), T(V);
          }
        });
        se ??= de();
        try {
          var y = await He(ne, se, m), w = f(y);
          return w;
        } catch (S) {
          return i(S), Promise.reject(S);
        }
      }
      var en = (o) => {
        for (; o.length > 0; ) o.shift()(r);
      }, Er = [], Ke = (o) => Er.push(o), it = [], os = (o) => it.push(o), Hn = (o) => (R(typeof o == "number"), o >>>= 0, "0x" + o.toString(16).padStart(8, "0")), En = (o) => {
        En.shown ||= {}, En.shown[o] || (En.shown[o] = 1, h && (o = "warning: " + o), X(o));
      }, Ea = typeof TextDecoder < "u" ? new TextDecoder() : void 0, ya = (o, a = 0, f = NaN) => {
        for (var m = a + f, y = a; o[y] && !(y >= m); ) ++y;
        if (y - a > 16 && o.buffer && Ea) return Ea.decode(o.subarray(a, y));
        for (var w = ""; a < y; ) {
          var S = o[a++];
          if (!(S & 128)) {
            w += String.fromCharCode(S);
            continue;
          }
          var T = o[a++] & 63;
          if ((S & 224) == 192) {
            w += String.fromCharCode((S & 31) << 6 | T);
            continue;
          }
          var V = o[a++] & 63;
          if ((S & 240) == 224 ? S = (S & 15) << 12 | T << 6 | V : ((S & 248) != 240 && En("Invalid UTF-8 leading byte " + Hn(S) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), S = (S & 7) << 18 | T << 12 | V << 6 | o[a++] & 63), S < 65536) w += String.fromCharCode(S);
          else {
            var q = S - 65536;
            w += String.fromCharCode(55296 | q >> 10, 56320 | q & 1023);
          }
        }
        return w;
      }, Wn = (o, a) => (R(typeof o == "number", `UTF8ToString expects a number (got ${typeof o})`), o ? ya(he, o, a) : ""), td = (o, a, f, m) => J(`Assertion failed: ${Wn(o)}, at: ` + [
        a ? Wn(a) : "unknown filename",
        f,
        m ? Wn(m) : "unknown function"
      ]), Ta = () => ze.__cpp_exception, mi = (o) => {
        var a = o.getArg(Ta(), 0);
        return Zh(a);
      }, nd = () => Jh(), rd = (o) => Gh(o), wa = (o) => qh(o), sd = (o) => {
        var a = nd(), f = wa(4), m = wa(4);
        ep(o, f, m);
        var y = G[f >> 2], w = G[m >> 2], S = Wn(y);
        jt(y);
        var T;
        return w && (T = Wn(w), jt(w)), rd(a), [
          S,
          T
        ];
      }, Aa = (o) => {
        var a = mi(o);
        return sd(a);
      }, id = (o) => {
        var a = new WebAssembly.Exception(Ta(), [
          o
        ], {
          traceStack: true
        });
        throw a.message = Aa(a), a;
      }, od = () => J("native code called abort()"), as = (o, a) => Object.defineProperty(a, "name", {
        value: o
      }), vi = [], pt = [], yr = r.BindingError = class extends Error {
        constructor(a) {
          super(a), this.name = "BindingError";
        }
      }, _e = (o) => {
        throw new yr(o);
      }, ad = () => pt.length / 2 - 5 - vi.length, ld = () => {
        pt.push(0, 1, void 0, 1, null, 1, true, 1, false, 1), R(pt.length === 5 * 2), r.count_emval_handles = ad;
      }, Pt = {
        toValue: (o) => (o || _e(`Cannot use deleted val. handle = ${o}`), R(o === 2 || pt[o] !== void 0 && o % 2 === 0, `invalid handle: ${o}`), pt[o]),
        toHandle: (o) => {
          switch (o) {
            case void 0:
              return 2;
            case null:
              return 4;
            case true:
              return 6;
            case false:
              return 8;
            default: {
              const a = vi.pop() || pt.length;
              return pt[a] = o, pt[a + 1] = 1, a;
            }
          }
        }
      };
      class cd extends Error {
      }
      var ud = () => {
        for (var o = new Array(256), a = 0; a < 256; ++a) o[a] = String.fromCharCode(a);
        Sa = o;
      }, Sa, We = (o) => {
        for (var a = "", f = o; he[f]; ) a += Sa[he[f++]];
        return a;
      }, Tr = {}, bi = (o, a) => {
        for (a === void 0 && _e("ptr should not be undefined"); o.baseClass; ) a = o.upcast(a), o = o.baseClass;
        return a;
      }, fd = (o, a, f) => {
        a = bi(o, a), Tr.hasOwnProperty(a) ? _e(`Tried to register registered instance: ${a}`) : Tr[a] = f;
      }, yn = {}, Ca = (o) => {
        var a = Kh(o), f = We(a);
        return jt(a), f;
      }, Ei = (o, a) => {
        var f = yn[o];
        return f === void 0 && _e(`${a} has unknown type ${Ca(o)}`), f;
      }, dd = (o, a) => {
        a = bi(o, a), Tr.hasOwnProperty(a) ? delete Tr[a] : _e(`Tried to unregister unregistered instance: ${a}`);
      }, ls = (o) => {
      }, yi = false, hd = (o) => {
        o.smartPtr ? o.smartPtrType.rawDestructor(o.smartPtr) : o.ptrType.registeredClass.rawDestructor(o.ptr);
      }, Oa = (o) => {
        o.count.value -= 1;
        var a = o.count.value === 0;
        a && hd(o);
      }, Pa = (o, a, f) => {
        if (a === f) return o;
        if (f.baseClass === void 0) return null;
        var m = Pa(o, a, f.baseClass);
        return m === null ? null : f.downcast(m);
      }, $a = {}, pd = (o, a) => (a = bi(o, a), Tr[a]), gd = r.InternalError = class extends Error {
        constructor(a) {
          super(a), this.name = "InternalError";
        }
      }, cs = (o) => {
        throw new gd(o);
      }, us = (o, a) => {
        (!a.ptrType || !a.ptr) && cs("makeClassHandle requires ptr and ptrType");
        var f = !!a.smartPtrType, m = !!a.smartPtr;
        return f !== m && cs("Both smartPtrType and smartPtr must be specified"), a.count = {
          value: 1
        }, Un(Object.create(o, {
          $$: {
            value: a,
            writable: true
          }
        }));
      };
      function Ra(o) {
        var a = this.getPointee(o);
        if (!a) return this.destructor(o), null;
        var f = pd(this.registeredClass, a);
        if (f !== void 0) {
          if (f.$$.count.value === 0) return f.$$.ptr = a, f.$$.smartPtr = o, f.clone();
          var m = f.clone();
          return this.destructor(o), m;
        }
        function y() {
          return this.isSmartPointer ? us(this.registeredClass.instancePrototype, {
            ptrType: this.pointeeType,
            ptr: a,
            smartPtrType: this,
            smartPtr: o
          }) : us(this.registeredClass.instancePrototype, {
            ptrType: this,
            ptr: o
          });
        }
        var w = this.registeredClass.getActualType(a), S = $a[w];
        if (!S) return y.call(this);
        var T;
        this.isConst ? T = S.constPointerType : T = S.pointerType;
        var V = Pa(a, this.registeredClass, T.registeredClass);
        return V === null ? y.call(this) : this.isSmartPointer ? us(T.registeredClass.instancePrototype, {
          ptrType: T,
          ptr: V,
          smartPtrType: this,
          smartPtr: o
        }) : us(T.registeredClass.instancePrototype, {
          ptrType: T,
          ptr: V
        });
      }
      var Un = (o) => typeof FinalizationRegistry > "u" ? (Un = (a) => a, o) : (yi = new FinalizationRegistry((a) => {
        console.warn(a.leakWarning), Oa(a.$$);
      }), Un = (a) => {
        var f = a.$$, m = !!f.smartPtr;
        if (m) {
          var y = {
            $$: f
          }, w = f.ptrType.registeredClass, S = new Error(`Embind found a leaked C++ instance ${w.name} <${Hn(f.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);
          "captureStackTrace" in Error && Error.captureStackTrace(S, Ra), y.leakWarning = S.stack.replace(/^Error: /, ""), yi.register(a, y, a);
        }
        return a;
      }, ls = (a) => yi.unregister(a), Un(o)), _d = (o, a, f) => {
        o = We(o), a = Ei(a, "wrapper"), f = Pt.toValue(f);
        var m = a.registeredClass, y = m.instancePrototype, w = m.baseClass, S = w.instancePrototype, T = m.baseClass.constructor, V = as(o, function(...q) {
          m.baseClass.pureVirtualFunctions.forEach(function(z) {
            if (this[z] === S[z]) throw new cd(`Pure virtual function ${z} must be implemented in JavaScript`);
          }.bind(this)), Object.defineProperty(this, "__parent", {
            value: y
          }), this.__construct(...q);
        });
        return y.__construct = function(...z) {
          this === y && _e("Pass correct 'this' to __construct");
          var oe = T.implement(this, ...z);
          ls(oe);
          var fe = oe.$$;
          oe.notifyOnDestruction(), fe.preservePointerOnDelete = true, Object.defineProperties(this, {
            $$: {
              value: fe
            }
          }), Un(this), fd(m, fe.ptr, this);
        }, y.__destruct = function() {
          this === y && _e("Pass correct 'this' to __destruct"), ls(this), dd(m, this.$$.ptr);
        }, V.prototype = Object.create(y), Object.assign(V.prototype, f), Pt.toHandle(V);
      }, tn = (o) => {
        if (o === null) return "null";
        var a = typeof o;
        return a === "object" || a === "array" || a === "function" ? o.toString() : "" + o;
      }, jn = {}, fs = {};
      function md(o, a, f = {}) {
        var m = a.name;
        if (o || _e(`type "${m}" must have a positive integer typeid pointer`), yn.hasOwnProperty(o)) {
          if (f.ignoreDuplicateRegistrations) return;
          _e(`Cannot register type '${m}' twice`);
        }
        if (yn[o] = a, delete fs[o], jn.hasOwnProperty(o)) {
          var y = jn[o];
          delete jn[o], y.forEach((w) => w());
        }
      }
      function $t(o, a, f = {}) {
        if (a.argPackAdvance === void 0) throw new TypeError("registerType registeredInstance requires argPackAdvance");
        return md(o, a, f);
      }
      var Na = (o, a, f) => {
        switch (a) {
          case 1:
            return f ? (m) => pe[m] : (m) => he[m];
          case 2:
            return f ? (m) => ge[m >> 1] : (m) => Re[m >> 1];
          case 4:
            return f ? (m) => ce[m >> 2] : (m) => G[m >> 2];
          case 8:
            return f ? (m) => ue[m >> 3] : (m) => Ne[m >> 3];
          default:
            throw new TypeError(`invalid integer width (${a}): ${o}`);
        }
      }, vd = (o, a, f, m, y) => {
        a = We(a);
        var w = a.indexOf("u") != -1;
        w && (y = (1n << 64n) - 1n), $t(o, {
          name: a,
          fromWireType: (S) => S,
          toWireType: function(S, T) {
            if (typeof T != "bigint" && typeof T != "number") throw new TypeError(`Cannot convert "${tn(T)}" to ${this.name}`);
            if (typeof T == "number" && (T = BigInt(T)), T < m || T > y) throw new TypeError(`Passing a number "${tn(T)}" from JS side to C/C++ side to an argument of type "${a}", which is outside the valid range [${m}, ${y}]!`);
            return T;
          },
          argPackAdvance: Ut,
          readValueFromPointer: Na(a, f, !w),
          destructorFunction: null
        });
      }, Ut = 8, bd = (o, a, f, m) => {
        a = We(a), $t(o, {
          name: a,
          fromWireType: function(y) {
            return !!y;
          },
          toWireType: function(y, w) {
            return w ? f : m;
          },
          argPackAdvance: Ut,
          readValueFromPointer: function(y) {
            return this.fromWireType(he[y]);
          },
          destructorFunction: null
        });
      }, Ed = (o) => ({
        count: o.count,
        deleteScheduled: o.deleteScheduled,
        preservePointerOnDelete: o.preservePointerOnDelete,
        ptr: o.ptr,
        ptrType: o.ptrType,
        smartPtr: o.smartPtr,
        smartPtrType: o.smartPtrType
      }), Ti = (o) => {
        function a(f) {
          return f.$$.ptrType.registeredClass.name;
        }
        _e(a(o) + " instance already deleted");
      }, yd = () => {
        let o = ds.prototype;
        Object.assign(o, {
          isAliasOf(f) {
            if (!(this instanceof ds) || !(f instanceof ds)) return false;
            var m = this.$$.ptrType.registeredClass, y = this.$$.ptr;
            f.$$ = f.$$;
            for (var w = f.$$.ptrType.registeredClass, S = f.$$.ptr; m.baseClass; ) y = m.upcast(y), m = m.baseClass;
            for (; w.baseClass; ) S = w.upcast(S), w = w.baseClass;
            return m === w && y === S;
          },
          clone() {
            if (this.$$.ptr || Ti(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
            var f = Un(Object.create(Object.getPrototypeOf(this), {
              $$: {
                value: Ed(this.$$)
              }
            }));
            return f.$$.count.value += 1, f.$$.deleteScheduled = false, f;
          },
          delete() {
            this.$$.ptr || Ti(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && _e("Object already scheduled for deletion"), ls(this), Oa(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
          },
          isDeleted() {
            return !this.$$.ptr;
          },
          deleteLater() {
            return this.$$.ptr || Ti(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && _e("Object already scheduled for deletion"), this.$$.deleteScheduled = true, this;
          }
        });
        const a = Symbol.dispose;
        a && (o[a] = o.delete);
      };
      function ds() {
      }
      var wi = (o, a, f) => {
        if (o[a].overloadTable === void 0) {
          var m = o[a];
          o[a] = function(...y) {
            return o[a].overloadTable.hasOwnProperty(y.length) || _e(`Function '${f}' called with an invalid number of arguments (${y.length}) - expects one of (${o[a].overloadTable})!`), o[a].overloadTable[y.length].apply(this, y);
          }, o[a].overloadTable = [], o[a].overloadTable[m.argCount] = m;
        }
      }, Td = (o, a, f) => {
        r.hasOwnProperty(o) ? (_e(`Cannot register public name '${o}' twice`), wi(r, o, o), r[o].overloadTable.hasOwnProperty(f) && _e(`Cannot register multiple overloads of a function with the same number of arguments (${f})!`), r[o].overloadTable[f] = a) : (r[o] = a, r[o].argCount = f);
      }, wd = 48, Ad = 57, Sd = (o) => {
        R(typeof o == "string"), o = o.replace(/[^a-zA-Z0-9_]/g, "$");
        var a = o.charCodeAt(0);
        return a >= wd && a <= Ad ? `_${o}` : o;
      };
      function Cd(o, a, f, m, y, w, S, T) {
        this.name = o, this.constructor = a, this.instancePrototype = f, this.rawDestructor = m, this.baseClass = y, this.getActualType = w, this.upcast = S, this.downcast = T, this.pureVirtualFunctions = [];
      }
      var Ai = (o, a, f) => {
        for (; a !== f; ) a.upcast || _e(`Expected null or instance of ${f.name}, got an instance of ${a.name}`), o = a.upcast(o), a = a.baseClass;
        return o;
      };
      function Od(o, a) {
        if (a === null) return this.isReference && _e(`null is not a valid ${this.name}`), 0;
        a.$$ || _e(`Cannot pass "${tn(a)}" as a ${this.name}`), a.$$.ptr || _e(`Cannot pass deleted object as a pointer of type ${this.name}`);
        var f = a.$$.ptrType.registeredClass, m = Ai(a.$$.ptr, f, this.registeredClass);
        return m;
      }
      function Pd(o, a) {
        var f;
        if (a === null) return this.isReference && _e(`null is not a valid ${this.name}`), this.isSmartPointer ? (f = this.rawConstructor(), o !== null && o.push(this.rawDestructor, f), f) : 0;
        (!a || !a.$$) && _e(`Cannot pass "${tn(a)}" as a ${this.name}`), a.$$.ptr || _e(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && a.$$.ptrType.isConst && _e(`Cannot convert argument of type ${a.$$.smartPtrType ? a.$$.smartPtrType.name : a.$$.ptrType.name} to parameter type ${this.name}`);
        var m = a.$$.ptrType.registeredClass;
        if (f = Ai(a.$$.ptr, m, this.registeredClass), this.isSmartPointer) switch (a.$$.smartPtr === void 0 && _e("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
          case 0:
            a.$$.smartPtrType === this ? f = a.$$.smartPtr : _e(`Cannot convert argument of type ${a.$$.smartPtrType ? a.$$.smartPtrType.name : a.$$.ptrType.name} to parameter type ${this.name}`);
            break;
          case 1:
            f = a.$$.smartPtr;
            break;
          case 2:
            if (a.$$.smartPtrType === this) f = a.$$.smartPtr;
            else {
              var y = a.clone();
              f = this.rawShare(f, Pt.toHandle(() => y.delete())), o !== null && o.push(this.rawDestructor, f);
            }
            break;
          default:
            _e("Unsupporting sharing policy");
        }
        return f;
      }
      function $d(o, a) {
        if (a === null) return this.isReference && _e(`null is not a valid ${this.name}`), 0;
        a.$$ || _e(`Cannot pass "${tn(a)}" as a ${this.name}`), a.$$.ptr || _e(`Cannot pass deleted object as a pointer of type ${this.name}`), a.$$.ptrType.isConst && _e(`Cannot convert argument of type ${a.$$.ptrType.name} to parameter type ${this.name}`);
        var f = a.$$.ptrType.registeredClass, m = Ai(a.$$.ptr, f, this.registeredClass);
        return m;
      }
      function hs(o) {
        return this.fromWireType(G[o >> 2]);
      }
      var Rd = () => {
        Object.assign(wr.prototype, {
          getPointee(o) {
            return this.rawGetPointee && (o = this.rawGetPointee(o)), o;
          },
          destructor(o) {
            this.rawDestructor?.(o);
          },
          argPackAdvance: Ut,
          readValueFromPointer: hs,
          fromWireType: Ra
        });
      };
      function wr(o, a, f, m, y, w, S, T, V, q, z) {
        this.name = o, this.registeredClass = a, this.isReference = f, this.isConst = m, this.isSmartPointer = y, this.pointeeType = w, this.sharingPolicy = S, this.rawGetPointee = T, this.rawConstructor = V, this.rawShare = q, this.rawDestructor = z, !y && a.baseClass === void 0 ? m ? (this.toWireType = Od, this.destructorFunction = null) : (this.toWireType = $d, this.destructorFunction = null) : this.toWireType = Pd;
      }
      var Nd = (o, a, f) => {
        r.hasOwnProperty(o) || cs("Replacing nonexistent public symbol"), r[o].overloadTable !== void 0 && f !== void 0 || (r[o] = a, r[o].argCount = f);
      }, Ia = [], ps, Id = (o) => {
        var a = Ia[o];
        return a || (Ia[o] = a = ps.get(o)), R(ps.get(o) == a, "JavaScript-side Wasm function table mirror is out of date!"), a;
      }, yt = (o, a, f = false) => {
        R(!f, "Async bindings are only supported with JSPI."), o = We(o);
        function m() {
          var w = Id(a);
          return w;
        }
        var y = m();
        return typeof y != "function" && _e(`unknown function pointer with signature ${o}: ${a}`), y;
      };
      class xd extends Error {
      }
      var gs = (o, a) => {
        var f = [], m = {};
        function y(w) {
          if (!m[w] && !yn[w]) {
            if (fs[w]) {
              fs[w].forEach(y);
              return;
            }
            f.push(w), m[w] = true;
          }
        }
        throw a.forEach(y), new xd(`${o}: ` + f.map(Ca).join([
          ", "
        ]));
      }, nn = (o, a, f) => {
        o.forEach((T) => fs[T] = a);
        function m(T) {
          var V = f(T);
          V.length !== o.length && cs("Mismatched type converter count");
          for (var q = 0; q < o.length; ++q) $t(o[q], V[q]);
        }
        var y = new Array(a.length), w = [], S = 0;
        a.forEach((T, V) => {
          yn.hasOwnProperty(T) ? y[V] = yn[T] : (w.push(T), jn.hasOwnProperty(T) || (jn[T] = []), jn[T].push(() => {
            y[V] = yn[T], ++S, S === w.length && m(y);
          }));
        }), w.length === 0 && m(y);
      }, Dd = (o, a, f, m, y, w, S, T, V, q, z, oe, fe) => {
        z = We(z), w = yt(y, w), T &&= yt(S, T), q &&= yt(V, q), fe = yt(oe, fe);
        var be = Sd(z);
        Td(be, function() {
          gs(`Cannot construct ${z} due to unbound types`, [
            m
          ]);
        }), nn([
          o,
          a,
          f
        ], m ? [
          m
        ] : [], (Pe) => {
          Pe = Pe[0];
          var Ye, tt;
          m ? (Ye = Pe.registeredClass, tt = Ye.instancePrototype) : tt = ds.prototype;
          var ot = as(z, function(...Ni) {
            if (Object.getPrototypeOf(this) !== Ri) throw new yr(`Use 'new' to construct ${z}`);
            if (Rt.constructor_body === void 0) throw new yr(`${z} has no accessible constructor`);
            var Ka = Rt.constructor_body[Ni.length];
            if (Ka === void 0) throw new yr(`Tried to invoke ctor of ${z} with invalid number of parameters (${Ni.length}) - expected (${Object.keys(Rt.constructor_body).toString()}) parameters instead!`);
            return Ka.apply(this, Ni);
          }), Ri = Object.create(tt, {
            constructor: {
              value: ot
            }
          });
          ot.prototype = Ri;
          var Rt = new Cd(z, ot, Ri, fe, Ye, w, T, q);
          Rt.baseClass && (Rt.baseClass.__derivedClasses ??= [], Rt.baseClass.__derivedClasses.push(Rt));
          var rp = new wr(z, Rt, true, false, false), ja = new wr(z + "*", Rt, false, false, false), Ba = new wr(z + " const*", Rt, false, true, false);
          return $a[o] = {
            pointerType: ja,
            constPointerType: Ba
          }, Nd(be, ot), [
            rp,
            ja,
            Ba
          ];
        });
      }, xa = (o) => {
        for (; o.length; ) {
          var a = o.pop(), f = o.pop();
          f(a);
        }
      };
      function Da(o) {
        for (var a = 1; a < o.length; ++a) if (o[a] !== null && o[a].destructorFunction === void 0) return true;
        return false;
      }
      function Ld(o, a, f, m, y) {
        if (o < a || o > f) {
          var w = a == f ? a : `${a} to ${f}`;
          y(`function ${m} called with ${o} arguments, expected ${w}`);
        }
      }
      function Md(o, a, f, m) {
        var y = Da(o), w = o.length - 2, S = [], T = [
          "fn"
        ];
        a && T.push("thisWired");
        for (var V = 0; V < w; ++V) S.push(`arg${V}`), T.push(`arg${V}Wired`);
        S = S.join(","), T = T.join(",");
        var q = `return function (${S}) {
`;
        q += `checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`, y && (q += `var destructors = [];
`);
        var z = y ? "destructors" : "null", oe = [
          "humanName",
          "throwBindingError",
          "invoker",
          "fn",
          "runDestructors",
          "retType",
          "classParam"
        ];
        a && (q += `var thisWired = classParam['toWireType'](${z}, this);
`);
        for (var V = 0; V < w; ++V) q += `var arg${V}Wired = argType${V}['toWireType'](${z}, arg${V});
`, oe.push(`argType${V}`);
        if (q += (f || m ? "var rv = " : "") + `invoker(${T});
`, y) q += `runDestructors(destructors);
`;
        else for (var V = a ? 1 : 2; V < o.length; ++V) {
          var fe = V === 1 ? "thisWired" : "arg" + (V - 2) + "Wired";
          o[V].destructorFunction !== null && (q += `${fe}_dtor(${fe});
`, oe.push(`${fe}_dtor`));
        }
        return f && (q += `var ret = retType['fromWireType'](rv);
return ret;
`), q += `}
`, oe.push("checkArgCount", "minArgs", "maxArgs"), q = `if (arguments.length !== ${oe.length}){ throw new Error(humanName + "Expected ${oe.length} closure arguments " + arguments.length + " given."); }
${q}`, [
          oe,
          q
        ];
      }
      function kd(o) {
        for (var a = o.length - 2, f = o.length - 1; f >= 2 && o[f].optional; --f) a--;
        return a;
      }
      function Si(o, a, f, m, y, w) {
        var S = a.length;
        S < 2 && _e("argTypes array size mismatch! Must at least get return value and 'this' types!"), R(!w, "Async bindings are only supported with JSPI.");
        for (var T = a[1] !== null && f !== null, V = Da(a), q = a[0].name !== "void", z = S - 2, oe = kd(a), fe = [
          o,
          _e,
          m,
          y,
          xa,
          a[0],
          a[1]
        ], be = 0; be < S - 2; ++be) fe.push(a[be + 2]);
        if (!V) for (var be = T ? 1 : 2; be < a.length; ++be) a[be].destructorFunction !== null && fe.push(a[be].destructorFunction);
        fe.push(Ld, oe, z);
        let [Pe, Ye] = Md(a, T, q, w);
        var tt = new Function(...Pe, Ye)(...fe);
        return as(o, tt);
      }
      var Ci = (o, a) => {
        for (var f = [], m = 0; m < o; m++) f.push(G[a + m * 4 >> 2]);
        return f;
      }, La = (o) => {
        o = o.trim();
        const a = o.indexOf("(");
        return a === -1 ? o : (R(o.endsWith(")"), "Parentheses for argument names should match."), o.slice(0, a));
      }, Fd = (o, a, f, m, y, w, S, T, V) => {
        var q = Ci(f, m);
        a = We(a), a = La(a), w = yt(y, w, T), nn([], [
          o
        ], (z) => {
          z = z[0];
          var oe = `${z.name}.${a}`;
          function fe() {
            gs(`Cannot call ${oe} due to unbound types`, q);
          }
          a.startsWith("@@") && (a = Symbol[a.substring(2)]);
          var be = z.registeredClass.constructor;
          return be[a] === void 0 ? (fe.argCount = f - 1, be[a] = fe) : (wi(be, a, oe), be[a].overloadTable[f - 1] = fe), nn([], q, (Pe) => {
            var Ye = [
              Pe[0],
              null
            ].concat(Pe.slice(1)), tt = Si(oe, Ye, null, w, S, T);
            if (be[a].overloadTable === void 0 ? (tt.argCount = f - 1, be[a] = tt) : be[a].overloadTable[f - 1] = tt, z.registeredClass.__derivedClasses) for (const ot of z.registeredClass.__derivedClasses) ot.constructor.hasOwnProperty(a) || (ot.constructor[a] = tt);
            return [];
          }), [];
        });
      }, Vd = (o, a, f, m, y, w) => {
        R(a > 0);
        var S = Ci(a, f);
        y = yt(m, y), nn([], [
          o
        ], (T) => {
          T = T[0];
          var V = `constructor ${T.name}`;
          if (T.registeredClass.constructor_body === void 0 && (T.registeredClass.constructor_body = []), T.registeredClass.constructor_body[a - 1] !== void 0) throw new yr(`Cannot register multiple constructors with identical number of parameters (${a - 1}) for class '${T.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
          return T.registeredClass.constructor_body[a - 1] = () => {
            gs(`Cannot construct ${T.name} due to unbound types`, S);
          }, nn([], S, (q) => (q.splice(1, 0, null), T.registeredClass.constructor_body[a - 1] = Si(V, q, null, y, w), [])), [];
        });
      }, Hd = (o, a, f, m, y, w, S, T, V, q) => {
        var z = Ci(f, m);
        a = We(a), a = La(a), w = yt(y, w, V), nn([], [
          o
        ], (oe) => {
          oe = oe[0];
          var fe = `${oe.name}.${a}`;
          a.startsWith("@@") && (a = Symbol[a.substring(2)]), T && oe.registeredClass.pureVirtualFunctions.push(a);
          function be() {
            gs(`Cannot call ${fe} due to unbound types`, z);
          }
          var Pe = oe.registeredClass.instancePrototype, Ye = Pe[a];
          return Ye === void 0 || Ye.overloadTable === void 0 && Ye.className !== oe.name && Ye.argCount === f - 2 ? (be.argCount = f - 2, be.className = oe.name, Pe[a] = be) : (wi(Pe, a, fe), Pe[a].overloadTable[f - 2] = be), nn([], z, (tt) => {
            var ot = Si(fe, tt, oe, w, S, V);
            return Pe[a].overloadTable === void 0 ? (ot.argCount = f - 2, Pe[a] = ot) : Pe[a].overloadTable[f - 2] = ot, [];
          }), [];
        });
      }, Oi = (o) => {
        o > 9 && --pt[o + 1] === 0 && (R(pt[o] !== void 0, "Decref for unallocated handle."), pt[o] = void 0, vi.push(o));
      }, Wd = {
        name: "emscripten::val",
        fromWireType: (o) => {
          var a = Pt.toValue(o);
          return Oi(o), a;
        },
        toWireType: (o, a) => Pt.toHandle(a),
        argPackAdvance: Ut,
        readValueFromPointer: hs,
        destructorFunction: null
      }, Ud = (o) => $t(o, Wd), jd = (o, a) => {
        switch (a) {
          case 4:
            return function(f) {
              return this.fromWireType(re[f >> 2]);
            };
          case 8:
            return function(f) {
              return this.fromWireType(Ve[f >> 3]);
            };
          default:
            throw new TypeError(`invalid float width (${a}): ${o}`);
        }
      }, Bd = (o, a, f) => {
        a = We(a), $t(o, {
          name: a,
          fromWireType: (m) => m,
          toWireType: (m, y) => {
            if (typeof y != "number" && typeof y != "boolean") throw new TypeError(`Cannot convert ${tn(y)} to ${this.name}`);
            return y;
          },
          argPackAdvance: Ut,
          readValueFromPointer: jd(a, f),
          destructorFunction: null
        });
      }, Kd = (o, a, f, m, y) => {
        a = We(a), y === -1 && (y = 4294967295);
        var w = (z) => z;
        if (m === 0) {
          var S = 32 - 8 * f;
          w = (z) => z << S >>> S;
        }
        var T = a.includes("unsigned"), V = (z, oe) => {
          if (typeof z != "number" && typeof z != "boolean") throw new TypeError(`Cannot convert "${tn(z)}" to ${oe}`);
          if (z < m || z > y) throw new TypeError(`Passing a number "${tn(z)}" from JS side to C/C++ side to an argument of type "${a}", which is outside the valid range [${m}, ${y}]!`);
        }, q;
        T ? q = function(z, oe) {
          return V(oe, this.name), oe >>> 0;
        } : q = function(z, oe) {
          return V(oe, this.name), oe;
        }, $t(o, {
          name: a,
          fromWireType: w,
          toWireType: q,
          argPackAdvance: Ut,
          readValueFromPointer: Na(a, f, m !== 0),
          destructorFunction: null
        });
      }, zd = (o, a, f) => {
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
        ], y = m[a];
        function w(S) {
          var T = G[S >> 2], V = G[S + 4 >> 2];
          return new y(pe.buffer, V, T);
        }
        f = We(f), $t(o, {
          name: f,
          fromWireType: w,
          argPackAdvance: Ut,
          readValueFromPointer: w
        }, {
          ignoreDuplicateRegistrations: true
        });
      }, Yd = (o, a, f, m, y, w, S, T, V, q, z, oe) => {
        f = We(f), w = yt(y, w), T = yt(S, T), q = yt(V, q), oe = yt(z, oe), nn([
          o
        ], [
          a
        ], (fe) => {
          fe = fe[0];
          var be = new wr(f, fe.registeredClass, false, false, true, fe, m, w, T, q, oe);
          return [
            be
          ];
        });
      }, Gd = (o, a, f, m) => {
        if (R(typeof o == "string", `stringToUTF8Array expects a string (got ${typeof o})`), !(m > 0)) return 0;
        for (var y = f, w = f + m - 1, S = 0; S < o.length; ++S) {
          var T = o.charCodeAt(S);
          if (T >= 55296 && T <= 57343) {
            var V = o.charCodeAt(++S);
            T = 65536 + ((T & 1023) << 10) | V & 1023;
          }
          if (T <= 127) {
            if (f >= w) break;
            a[f++] = T;
          } else if (T <= 2047) {
            if (f + 1 >= w) break;
            a[f++] = 192 | T >> 6, a[f++] = 128 | T & 63;
          } else if (T <= 65535) {
            if (f + 2 >= w) break;
            a[f++] = 224 | T >> 12, a[f++] = 128 | T >> 6 & 63, a[f++] = 128 | T & 63;
          } else {
            if (f + 3 >= w) break;
            T > 1114111 && En("Invalid Unicode code point " + Hn(T) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."), a[f++] = 240 | T >> 18, a[f++] = 128 | T >> 12 & 63, a[f++] = 128 | T >> 6 & 63, a[f++] = 128 | T & 63;
          }
        }
        return a[f] = 0, f - y;
      }, Bn = (o, a, f) => (R(typeof f == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), Gd(o, he, a, f)), _s = (o) => {
        for (var a = 0, f = 0; f < o.length; ++f) {
          var m = o.charCodeAt(f);
          m <= 127 ? a++ : m <= 2047 ? a += 2 : m >= 55296 && m <= 57343 ? (a += 4, ++f) : a += 3;
        }
        return a;
      }, qd = (o, a) => {
        a = We(a), $t(o, {
          name: a,
          fromWireType(f) {
            for (var m = G[f >> 2], y = f + 4, w, S, T = y, S = 0; S <= m; ++S) {
              var V = y + S;
              if (S == m || he[V] == 0) {
                var q = V - T, z = Wn(T, q);
                w === void 0 ? w = z : (w += "\0", w += z), T = V + 1;
              }
            }
            return jt(f), w;
          },
          toWireType(f, m) {
            m instanceof ArrayBuffer && (m = new Uint8Array(m));
            var y, w = typeof m == "string";
            w || ArrayBuffer.isView(m) && m.BYTES_PER_ELEMENT == 1 || _e("Cannot pass non-string to std::string"), w ? y = _s(m) : y = m.length;
            var S = Ha(4 + y + 1), T = S + 4;
            return G[S >> 2] = y, w ? Bn(m, T, y + 1) : he.set(m, T), f !== null && f.push(jt, S), S;
          },
          argPackAdvance: Ut,
          readValueFromPointer: hs,
          destructorFunction(f) {
            jt(f);
          }
        });
      }, Ma = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, Jd = (o, a) => {
        R(o % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!");
        for (var f = o, m = f >> 1, y = m + a / 2; !(m >= y) && Re[m]; ) ++m;
        if (f = m << 1, f - o > 32 && Ma) return Ma.decode(he.subarray(o, f));
        for (var w = "", S = 0; !(S >= a / 2); ++S) {
          var T = ge[o + S * 2 >> 1];
          if (T == 0) break;
          w += String.fromCharCode(T);
        }
        return w;
      }, Xd = (o, a, f) => {
        if (R(a % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!"), R(typeof f == "number", "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), f ??= 2147483647, f < 2) return 0;
        f -= 2;
        for (var m = a, y = f < o.length * 2 ? f / 2 : o.length, w = 0; w < y; ++w) {
          var S = o.charCodeAt(w);
          ge[a >> 1] = S, a += 2;
        }
        return ge[a >> 1] = 0, a - m;
      }, Qd = (o) => o.length * 2, Zd = (o, a) => {
        R(o % 4 == 0, "Pointer passed to UTF32ToString must be aligned to four bytes!");
        for (var f = 0, m = ""; !(f >= a / 4); ) {
          var y = ce[o + f * 4 >> 2];
          if (y == 0) break;
          if (++f, y >= 65536) {
            var w = y - 65536;
            m += String.fromCharCode(55296 | w >> 10, 56320 | w & 1023);
          } else m += String.fromCharCode(y);
        }
        return m;
      }, eh = (o, a, f) => {
        if (R(a % 4 == 0, "Pointer passed to stringToUTF32 must be aligned to four bytes!"), R(typeof f == "number", "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), f ??= 2147483647, f < 4) return 0;
        for (var m = a, y = m + f - 4, w = 0; w < o.length; ++w) {
          var S = o.charCodeAt(w);
          if (S >= 55296 && S <= 57343) {
            var T = o.charCodeAt(++w);
            S = 65536 + ((S & 1023) << 10) | T & 1023;
          }
          if (ce[a >> 2] = S, a += 4, a + 4 > y) break;
        }
        return ce[a >> 2] = 0, a - m;
      }, th = (o) => {
        for (var a = 0, f = 0; f < o.length; ++f) {
          var m = o.charCodeAt(f);
          m >= 55296 && m <= 57343 && ++f, a += 4;
        }
        return a;
      }, nh = (o, a, f) => {
        f = We(f);
        var m, y, w, S;
        a === 2 ? (m = Jd, y = Xd, S = Qd, w = (T) => Re[T >> 1]) : a === 4 && (m = Zd, y = eh, S = th, w = (T) => G[T >> 2]), $t(o, {
          name: f,
          fromWireType: (T) => {
            for (var V = G[T >> 2], q, z = T + 4, oe = 0; oe <= V; ++oe) {
              var fe = T + 4 + oe * a;
              if (oe == V || w(fe) == 0) {
                var be = fe - z, Pe = m(z, be);
                q === void 0 ? q = Pe : (q += "\0", q += Pe), z = fe + a;
              }
            }
            return jt(T), q;
          },
          toWireType: (T, V) => {
            typeof V != "string" && _e(`Cannot pass non-string to C++ string type ${f}`);
            var q = S(V), z = Ha(4 + q + a);
            return G[z >> 2] = q / a, y(V, z + 4, q + a), T !== null && T.push(jt, z), z;
          },
          argPackAdvance: Ut,
          readValueFromPointer: hs,
          destructorFunction(T) {
            jt(T);
          }
        });
      }, rh = (o, a) => {
        a = We(a), $t(o, {
          isVoid: true,
          name: a,
          argPackAdvance: 0,
          fromWireType: () => {
          },
          toWireType: (f, m) => {
          }
        });
      }, ms = [], sh = (o, a, f, m) => (o = ms[o], a = Pt.toValue(a), o(null, a, f, m)), ih = {}, oh = (o) => {
        var a = ih[o];
        return a === void 0 ? We(o) : a;
      }, ah = (o, a, f, m, y) => (o = ms[o], a = Pt.toValue(a), f = oh(f), o(a, a[f], m, y)), lh = (o) => {
        var a = ms.length;
        return ms.push(o), a;
      }, ch = (o, a) => {
        for (var f = new Array(o), m = 0; m < o; ++m) f[m] = Ei(G[a + m * 4 >> 2], `parameter ${m}`);
        return f;
      }, uh = (o, a, f) => {
        var m = [], y = o.toWireType(m, f);
        return m.length && (G[a >> 2] = Pt.toHandle(m)), y;
      }, fh = (o, a, f) => {
        var m = ch(o, a), y = m.shift();
        o--;
        var w = `return function (obj, func, destructorsRef, args) {
`, S = 0, T = [];
        f === 0 && T.push("obj");
        for (var V = [
          "retType"
        ], q = [
          y
        ], z = 0; z < o; ++z) T.push(`arg${z}`), V.push(`argType${z}`), q.push(m[z]), w += `  var arg${z} = argType${z}.readValueFromPointer(args${S ? "+" + S : ""});
`, S += m[z].argPackAdvance;
        var oe = f === 1 ? "new func" : "func.call";
        w += `  var rv = ${oe}(${T.join(", ")});
`, y.isVoid || (V.push("emval_returnValue"), q.push(uh), w += `  return emval_returnValue(retType, destructorsRef, rv);
`), w += `};
`;
        var fe = new Function(...V, w)(...q), be = `methodCaller<(${m.map((Pe) => Pe.name).join(", ")}) => ${y.name}>`;
        return lh(as(be, fe));
      }, dh = (o) => {
        o > 9 && (pt[o + 1] += 1);
      }, hh = (o) => {
        var a = Pt.toValue(o);
        xa(a), Oi(o);
      }, ph = (o, a) => {
        o = Ei(o, "_emval_take_value");
        var f = o.readValueFromPointer(a);
        return Pt.toHandle(f);
      }, gh = 9007199254740992, _h = -9007199254740992, ka = (o) => o < _h || o > gh ? NaN : Number(o);
      function mh(o, a) {
        o = ka(o);
        var f = new Date(o * 1e3);
        ce[a >> 2] = f.getUTCSeconds(), ce[a + 4 >> 2] = f.getUTCMinutes(), ce[a + 8 >> 2] = f.getUTCHours(), ce[a + 12 >> 2] = f.getUTCDate(), ce[a + 16 >> 2] = f.getUTCMonth(), ce[a + 20 >> 2] = f.getUTCFullYear() - 1900, ce[a + 24 >> 2] = f.getUTCDay();
        var m = Date.UTC(f.getUTCFullYear(), 0, 1, 0, 0, 0, 0), y = (f.getTime() - m) / (1e3 * 60 * 60 * 24) | 0;
        ce[a + 28 >> 2] = y;
      }
      var vh = (o) => o % 4 === 0 && (o % 100 !== 0 || o % 400 === 0), bh = [
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
      ], Eh = [
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
      ], yh = (o) => {
        var a = vh(o.getFullYear()), f = a ? bh : Eh, m = f[o.getMonth()] + o.getDate() - 1;
        return m;
      };
      function Th(o, a) {
        o = ka(o);
        var f = new Date(o * 1e3);
        ce[a >> 2] = f.getSeconds(), ce[a + 4 >> 2] = f.getMinutes(), ce[a + 8 >> 2] = f.getHours(), ce[a + 12 >> 2] = f.getDate(), ce[a + 16 >> 2] = f.getMonth(), ce[a + 20 >> 2] = f.getFullYear() - 1900, ce[a + 24 >> 2] = f.getDay();
        var m = yh(f) | 0;
        ce[a + 28 >> 2] = m, ce[a + 36 >> 2] = -(f.getTimezoneOffset() * 60);
        var y = new Date(f.getFullYear(), 0, 1), w = new Date(f.getFullYear(), 6, 1).getTimezoneOffset(), S = y.getTimezoneOffset(), T = (w != S && f.getTimezoneOffset() == Math.min(S, w)) | 0;
        ce[a + 32 >> 2] = T;
      }
      var wh = (o, a, f, m) => {
        var y = (/* @__PURE__ */ new Date()).getFullYear(), w = new Date(y, 0, 1), S = new Date(y, 6, 1), T = w.getTimezoneOffset(), V = S.getTimezoneOffset(), q = Math.max(T, V);
        G[o >> 2] = q * 60, ce[a >> 2] = +(T != V);
        var z = (be) => {
          var Pe = be >= 0 ? "-" : "+", Ye = Math.abs(be), tt = String(Math.floor(Ye / 60)).padStart(2, "0"), ot = String(Ye % 60).padStart(2, "0");
          return `UTC${Pe}${tt}${ot}`;
        }, oe = z(T), fe = z(V);
        R(oe), R(fe), R(_s(oe) <= 16, `timezone name truncated to fit in TZNAME_MAX (${oe})`), R(_s(fe) <= 16, `timezone name truncated to fit in TZNAME_MAX (${fe})`), V < T ? (Bn(oe, f, 17), Bn(fe, m, 17)) : (Bn(oe, m, 17), Bn(fe, f, 17));
      }, Fa = () => performance.now(), Ah = () => Date.now(), Sh = (o) => o >= 0 && o <= 3;
      function Ch(o, a, f) {
        if (!Sh(o)) return 28;
        var m;
        o === 0 ? m = Ah() : m = Fa();
        var y = Math.round(m * 1e3 * 1e3);
        return ue[f >> 3] = BigInt(y), 0;
      }
      var Oh = () => 2147483648, Ph = (o, a) => (R(a, "alignment argument is required"), Math.ceil(o / a) * a), $h = (o) => {
        var a = ee.buffer, f = (o - a.byteLength + 65535) / 65536 | 0;
        try {
          return ee.grow(f), g(), 1;
        } catch (m) {
          X(`growMemory: Attempted to grow heap from ${a.byteLength} bytes to ${o} bytes, but got error: ${m}`);
        }
      }, Rh = (o) => {
        var a = he.length;
        o >>>= 0, R(o > a);
        var f = Oh();
        if (o > f) return X(`Cannot enlarge memory, requested ${o} bytes, but the limit is ${f} bytes!`), false;
        for (var m = 1; m <= 4; m *= 2) {
          var y = a * (1 + 0.2 / m);
          y = Math.min(y, o + 100663296);
          var w = Math.min(f, Ph(Math.max(o, y), 65536)), S = $h(w);
          if (S) return true;
        }
        return X(`Failed to grow the heap from ${a} bytes to ${w} bytes, not enough memory!`), false;
      }, Pi = {}, Nh = () => b || "./this.program", Ar = () => {
        if (!Ar.strings) {
          var o = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", a = {
            USER: "web_user",
            LOGNAME: "web_user",
            PATH: "/",
            PWD: "/",
            HOME: "/home/web_user",
            LANG: o,
            _: Nh()
          };
          for (var f in Pi) Pi[f] === void 0 ? delete a[f] : a[f] = Pi[f];
          var m = [];
          for (var f in a) m.push(`${f}=${a[f]}`);
          Ar.strings = m;
        }
        return Ar.strings;
      }, Ih = (o, a) => {
        var f = 0, m = 0;
        for (var y of Ar()) {
          var w = a + f;
          G[o + m >> 2] = w, f += Bn(y, w, 1 / 0) + 1, m += 4;
        }
        return 0;
      }, xh = (o, a) => {
        var f = Ar();
        G[o >> 2] = f.length;
        var m = 0;
        for (var y of f) m += _s(y) + 1;
        return G[a >> 2] = m, 0;
      }, Dh = (o) => {
        J("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM");
      }, Lh = (o, a) => {
        var f = 0, m = 0, y = 0;
        {
          R(o == 0 || o == 1 || o == 2);
          var w = 2;
          o == 0 ? f = 2 : (o == 1 || o == 2) && (f = 64), y = 1;
        }
        return pe[a] = w, ge[a + 2 >> 1] = y, ue[a + 8 >> 3] = BigInt(f), ue[a + 16 >> 3] = BigInt(m), 0;
      };
      function Mh(o, a, f, m) {
        return 70;
      }
      var kh = [
        null,
        [],
        []
      ], Fh = (o, a) => {
        var f = kh[o];
        R(f), a === 0 || a === 10 ? ((o === 1 ? Y : X)(ya(f)), f.length = 0) : f.push(a);
      }, Vh = (o, a, f, m) => {
        for (var y = 0, w = 0; w < f; w++) {
          var S = G[a >> 2], T = G[a + 4 >> 2];
          a += 8;
          for (var V = 0; V < T; V++) Fh(o, he[S + V]);
          y += T;
        }
        return G[m >> 2] = y, 0;
      }, Hh = (o) => {
        var a = mi(o);
        Qh(a);
      }, Wh = (o) => {
        var a = mi(o);
        Xh(a);
      };
      ld(), ud(), yd(), Rd(), r.noExitRuntime && r.noExitRuntime, r.print && (Y = r.print), r.printErr && (X = r.printErr), r.wasmBinary && (ne = r.wasmBinary), r.FS_createDataFile = F.createDataFile, r.FS_createPreloadedFile = F.createPreloadedFile, Bh(), r.arguments && r.arguments, r.thisProgram && (b = r.thisProgram), R(typeof r.memoryInitializerPrefixURL > "u", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"), R(typeof r.pthreadMainPrefixURL > "u", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"), R(typeof r.cdInitializerPrefixURL > "u", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"), R(typeof r.filePackagePrefixURL > "u", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead"), R(typeof r.read > "u", "Module.read option was removed"), R(typeof r.readAsync > "u", "Module.readAsync option was removed (modify readAsync in JS)"), R(typeof r.readBinary > "u", "Module.readBinary option was removed (modify readBinary in JS)"), R(typeof r.setWindowTitle > "u", "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"), R(typeof r.TOTAL_MEMORY > "u", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"), R(typeof r.ENVIRONMENT > "u", "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"), R(typeof r.STACK_SIZE > "u", "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"), R(typeof r.wasmMemory > "u", "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"), R(typeof r.INITIAL_MEMORY > "u", "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");
      var Uh = [
        "writeI53ToI64",
        "writeI53ToI64Clamped",
        "writeI53ToI64Signaling",
        "writeI53ToU64Clamped",
        "writeI53ToU64Signaling",
        "readI53FromI64",
        "readI53FromU64",
        "convertI32PairToI53",
        "convertI32PairToI53Checked",
        "convertU32PairToI53",
        "getTempRet0",
        "setTempRet0",
        "zeroMemory",
        "exitJS",
        "strError",
        "inetPton4",
        "inetNtop4",
        "inetPton6",
        "inetNtop6",
        "readSockaddr",
        "writeSockaddr",
        "emscriptenLog",
        "readEmAsmArgs",
        "jstoi_q",
        "listenOnce",
        "autoResumeAudioContext",
        "getDynCaller",
        "dynCall",
        "handleException",
        "keepRuntimeAlive",
        "runtimeKeepalivePush",
        "runtimeKeepalivePop",
        "callUserCallback",
        "maybeExit",
        "asmjsMangle",
        "asyncLoad",
        "mmapAlloc",
        "HandleAllocator",
        "getNativeTypeSize",
        "addOnInit",
        "addOnPostCtor",
        "addOnPreMain",
        "addOnExit",
        "STACK_SIZE",
        "STACK_ALIGN",
        "POINTER_SIZE",
        "ASSERTIONS",
        "getCFunc",
        "ccall",
        "cwrap",
        "uleb128Encode",
        "sigToWasmTypes",
        "generateFuncType",
        "convertJsFunctionToWasm",
        "getEmptyTableSlot",
        "updateTableMap",
        "getFunctionAddress",
        "addFunction",
        "removeFunction",
        "reallyNegative",
        "unSign",
        "strLen",
        "reSign",
        "formatString",
        "intArrayFromString",
        "intArrayToString",
        "AsciiToString",
        "stringToAscii",
        "stringToNewUTF8",
        "stringToUTF8OnStack",
        "writeArrayToMemory",
        "registerKeyEventCallback",
        "maybeCStringToJsString",
        "findEventTarget",
        "getBoundingClientRect",
        "fillMouseEventData",
        "registerMouseEventCallback",
        "registerWheelEventCallback",
        "registerUiEventCallback",
        "registerFocusEventCallback",
        "fillDeviceOrientationEventData",
        "registerDeviceOrientationEventCallback",
        "fillDeviceMotionEventData",
        "registerDeviceMotionEventCallback",
        "screenOrientation",
        "fillOrientationChangeEventData",
        "registerOrientationChangeEventCallback",
        "fillFullscreenChangeEventData",
        "registerFullscreenChangeEventCallback",
        "JSEvents_requestFullscreen",
        "JSEvents_resizeCanvasForFullscreen",
        "registerRestoreOldStyle",
        "hideEverythingExceptGivenElement",
        "restoreHiddenElements",
        "setLetterbox",
        "softFullscreenResizeWebGLRenderTarget",
        "doRequestFullscreen",
        "fillPointerlockChangeEventData",
        "registerPointerlockChangeEventCallback",
        "registerPointerlockErrorEventCallback",
        "requestPointerLock",
        "fillVisibilityChangeEventData",
        "registerVisibilityChangeEventCallback",
        "registerTouchEventCallback",
        "fillGamepadEventData",
        "registerGamepadEventCallback",
        "registerBeforeUnloadEventCallback",
        "fillBatteryEventData",
        "battery",
        "registerBatteryEventCallback",
        "setCanvasElementSize",
        "getCanvasElementSize",
        "jsStackTrace",
        "getCallstack",
        "convertPCtoSourceLocation",
        "wasiRightsToMuslOFlags",
        "wasiOFlagsToMuslOFlags",
        "initRandomFill",
        "randomFill",
        "safeSetTimeout",
        "setImmediateWrapped",
        "safeRequestAnimationFrame",
        "clearImmediateWrapped",
        "registerPostMainLoop",
        "registerPreMainLoop",
        "getPromise",
        "makePromise",
        "idsToPromises",
        "makePromiseCallback",
        "Browser_asyncPrepareDataCounter",
        "arraySum",
        "addDays",
        "getSocketFromFD",
        "getSocketAddress",
        "FS_createPreloadedFile",
        "FS_modeStringToFlags",
        "FS_getMode",
        "FS_stdin_getChar",
        "FS_unlink",
        "FS_createDataFile",
        "FS_mkdirTree",
        "_setNetworkCallback",
        "heapObjectForWebGLType",
        "toTypedArrayIndex",
        "webgl_enable_ANGLE_instanced_arrays",
        "webgl_enable_OES_vertex_array_object",
        "webgl_enable_WEBGL_draw_buffers",
        "webgl_enable_WEBGL_multi_draw",
        "webgl_enable_EXT_polygon_offset_clamp",
        "webgl_enable_EXT_clip_control",
        "webgl_enable_WEBGL_polygon_mode",
        "emscriptenWebGLGet",
        "computeUnpackAlignedImageSize",
        "colorChannelsInGlTextureFormat",
        "emscriptenWebGLGetTexPixelData",
        "emscriptenWebGLGetUniform",
        "webglGetUniformLocation",
        "webglPrepareUniformLocationsBeforeFirstUse",
        "webglGetLeftBracePos",
        "emscriptenWebGLGetVertexAttrib",
        "__glGetActiveAttribOrUniform",
        "writeGLArray",
        "registerWebGlEventCallback",
        "runAndAbortIfError",
        "ALLOC_NORMAL",
        "ALLOC_STACK",
        "allocate",
        "writeStringToMemory",
        "writeAsciiToMemory",
        "demangle",
        "stackTrace",
        "getFunctionArgsName",
        "createJsInvokerSignature",
        "getInheritedInstanceCount",
        "getLiveInheritedInstances",
        "enumReadValueFromPointer",
        "setDelayFunction",
        "validateThis",
        "emval_get_global"
      ];
      Uh.forEach(Z);
      var jh = [
        "run",
        "addRunDependency",
        "removeRunDependency",
        "out",
        "err",
        "callMain",
        "abort",
        "wasmMemory",
        "wasmExports",
        "HEAPF32",
        "HEAPF64",
        "HEAP8",
        "HEAP16",
        "HEAPU16",
        "HEAP32",
        "HEAPU32",
        "HEAP64",
        "HEAPU64",
        "writeStackCookie",
        "checkStackCookie",
        "INT53_MAX",
        "INT53_MIN",
        "bigintToI53Checked",
        "stackSave",
        "stackRestore",
        "stackAlloc",
        "ptrToString",
        "getHeapMax",
        "growMemory",
        "ENV",
        "ERRNO_CODES",
        "DNS",
        "Protocols",
        "Sockets",
        "timers",
        "warnOnce",
        "readEmAsmArgsArray",
        "jstoi_s",
        "getExecutableName",
        "alignMemory",
        "wasmTable",
        "noExitRuntime",
        "addOnPreRun",
        "addOnPostRun",
        "freeTableIndexes",
        "functionsInTableMap",
        "setValue",
        "getValue",
        "PATH",
        "PATH_FS",
        "UTF8Decoder",
        "UTF8ArrayToString",
        "UTF8ToString",
        "stringToUTF8Array",
        "stringToUTF8",
        "lengthBytesUTF8",
        "UTF16Decoder",
        "UTF16ToString",
        "stringToUTF16",
        "lengthBytesUTF16",
        "UTF32ToString",
        "stringToUTF32",
        "lengthBytesUTF32",
        "JSEvents",
        "specialHTMLTargets",
        "findCanvasEventTarget",
        "currentFullscreenStrategy",
        "restoreOldWindowedStyle",
        "UNWIND_CACHE",
        "ExitStatus",
        "getEnvStrings",
        "checkWasiClock",
        "flush_NO_FILESYSTEM",
        "emSetImmediate",
        "emClearImmediate_deps",
        "emClearImmediate",
        "promiseMap",
        "getExceptionMessageCommon",
        "getCppExceptionTag",
        "getCppExceptionThrownObjectFromWebAssemblyException",
        "Browser",
        "getPreloadedImageData__data",
        "wget",
        "MONTH_DAYS_REGULAR",
        "MONTH_DAYS_LEAP",
        "MONTH_DAYS_REGULAR_CUMULATIVE",
        "MONTH_DAYS_LEAP_CUMULATIVE",
        "isLeapYear",
        "ydayFromDate",
        "SYSCALLS",
        "preloadPlugins",
        "FS_stdin_getChar_buffer",
        "FS_createPath",
        "FS_createDevice",
        "FS_readFile",
        "FS",
        "FS_createLazyFile",
        "MEMFS",
        "TTY",
        "PIPEFS",
        "SOCKFS",
        "tempFixedLengthArray",
        "miniTempWebGLFloatBuffers",
        "miniTempWebGLIntBuffers",
        "GL",
        "AL",
        "GLUT",
        "EGL",
        "GLEW",
        "IDBStore",
        "SDL",
        "SDL_gfx",
        "allocateUTF8",
        "allocateUTF8OnStack",
        "print",
        "printErr",
        "InternalError",
        "BindingError",
        "throwInternalError",
        "throwBindingError",
        "registeredTypes",
        "awaitingDependencies",
        "typeDependencies",
        "tupleRegistrations",
        "structRegistrations",
        "sharedRegisterType",
        "whenDependentTypesAreResolved",
        "embind_charCodes",
        "embind_init_charCodes",
        "readLatin1String",
        "getTypeName",
        "getFunctionName",
        "heap32VectorToArray",
        "requireRegisteredType",
        "usesDestructorStack",
        "checkArgCount",
        "getRequiredArgCount",
        "createJsInvoker",
        "UnboundTypeError",
        "PureVirtualError",
        "GenericWireTypeSize",
        "EmValType",
        "EmValOptionalType",
        "throwUnboundTypeError",
        "ensureOverloadTable",
        "exposePublicSymbol",
        "replacePublicSymbol",
        "createNamedFunction",
        "embindRepr",
        "registeredInstances",
        "getBasestPointer",
        "registerInheritedInstance",
        "unregisterInheritedInstance",
        "getInheritedInstance",
        "registeredPointers",
        "registerType",
        "integerReadValueFromPointer",
        "floatReadValueFromPointer",
        "readPointer",
        "runDestructors",
        "craftInvokerFunction",
        "embind__requireFunction",
        "genericPointerToWireType",
        "constNoSmartPtrRawPointerToWireType",
        "nonConstNoSmartPtrRawPointerToWireType",
        "init_RegisteredPointer",
        "RegisteredPointer",
        "RegisteredPointer_fromWireType",
        "runDestructor",
        "releaseClassHandle",
        "finalizationRegistry",
        "detachFinalizer_deps",
        "detachFinalizer",
        "attachFinalizer",
        "makeClassHandle",
        "init_ClassHandle",
        "ClassHandle",
        "throwInstanceAlreadyDeleted",
        "deletionQueue",
        "flushPendingDeletes",
        "delayFunction",
        "RegisteredClass",
        "shallowCopyInternalPointer",
        "downcastPointer",
        "upcastPointer",
        "char_0",
        "char_9",
        "makeLegalFunctionName",
        "emval_freelist",
        "emval_handles",
        "emval_symbols",
        "init_emval",
        "count_emval_handles",
        "getStringOrSymbol",
        "Emval",
        "emval_returnValue",
        "emval_lookupTypes",
        "emval_methodCallers",
        "emval_addMethodCaller",
        "reflectConstruct"
      ];
      jh.forEach(me), r.getExceptionMessage = Aa, r.incrementExceptionRefcount = Hh, r.decrementExceptionRefcount = Wh;
      function Bh() {
        Ie("fetchSettings");
      }
      var Va = {
        __assert_fail: td,
        __throw_exception_with_stack_trace: id,
        _abort_js: od,
        _embind_create_inheriting_constructor: _d,
        _embind_register_bigint: vd,
        _embind_register_bool: bd,
        _embind_register_class: Dd,
        _embind_register_class_class_function: Fd,
        _embind_register_class_constructor: Vd,
        _embind_register_class_function: Hd,
        _embind_register_emval: Ud,
        _embind_register_float: Bd,
        _embind_register_integer: Kd,
        _embind_register_memory_view: zd,
        _embind_register_smart_ptr: Yd,
        _embind_register_std_string: qd,
        _embind_register_std_wstring: nh,
        _embind_register_void: rh,
        _emval_call: sh,
        _emval_call_method: ah,
        _emval_decref: Oi,
        _emval_get_method_caller: fh,
        _emval_incref: dh,
        _emval_run_destructors: hh,
        _emval_take_value: ph,
        _gmtime_js: mh,
        _localtime_js: Th,
        _tzset_js: wh,
        clock_time_get: Ch,
        emscripten_get_now: Fa,
        emscripten_resize_heap: Rh,
        environ_get: Ih,
        environ_sizes_get: xh,
        fd_close: Dh,
        fd_fdstat_get: Lh,
        fd_seek: Mh,
        fd_write: Vh
      }, ze = await ht(), Kh = Q("__getTypeName", 1), jt = r._free = Q("free", 1), Ha = r._malloc = Q("malloc", 1), Wa = ze.emscripten_stack_get_end;
      ze.emscripten_stack_get_base;
      var zh = ze.__trap, Yh = ze.emscripten_stack_init;
      ze.emscripten_stack_get_free;
      var Gh = ze._emscripten_stack_restore, qh = ze._emscripten_stack_alloc, Jh = ze.emscripten_stack_get_current, Xh = Q("__cxa_decrement_exception_refcount", 1), Qh = Q("__cxa_increment_exception_refcount", 1), Zh = Q("__thrown_object_from_unwind_exception", 1), ep = Q("__get_exception_message", 3), Ua;
      function tp() {
        Yh(), st();
      }
      function $i() {
        if (P > 0) {
          C = $i;
          return;
        }
        if (tp(), _(), P > 0) {
          C = $i;
          return;
        }
        function o() {
          R(!Ua), Ua = true, r.calledRun = true, !te && (E(), s(r), r.onRuntimeInitialized?.(), Le("onRuntimeInitialized"), R(!r._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'), O());
        }
        r.setStatus ? (r.setStatus("Running..."), setTimeout(() => {
          setTimeout(() => r.setStatus(""), 1), o();
        }, 1)) : o(), Me();
      }
      function np() {
        if (r.preInit) for (typeof r.preInit == "function" && (r.preInit = [
          r.preInit
        ]); r.preInit.length > 0; ) r.preInit.shift()();
        Le("preInit");
      }
      np(), $i(), n = l;
      for (const o of Object.keys(r)) o in e || Object.defineProperty(e, o, {
        configurable: true,
        get() {
          J(`Access to module property ('${o}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`);
        }
      });
      return n;
    };
  })();
  let iT;
  sT = M_("wasm-module", {
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
  iT = {
    install: () => {
      rT().then((t) => {
        new Promise((e) => setTimeout(e, 300)).then(() => {
          const e = sT();
          Je.shared().initialize(t, new Xy(new eT())), Jy.initialize(), e.setLoaded(true);
        });
      });
    }
  };
  const Zn = typeof document < "u";
  function Uf(t) {
    return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t;
  }
  function oT(t) {
    return t.__esModule || t[Symbol.toStringTag] === "Module" || t.default && Uf(t.default);
  }
  const Te = Object.assign;
  function so(t, e) {
    const n = {};
    for (const r in e) {
      const s = e[r];
      n[r] = Ct(s) ? s.map(t) : t(s);
    }
    return n;
  }
  const Wr = () => {
  }, Ct = Array.isArray, jf = /#/g, aT = /&/g, lT = /\//g, cT = /=/g, uT = /\?/g, Bf = /\+/g, fT = /%5B/g, dT = /%5D/g, Kf = /%5E/g, hT = /%60/g, zf = /%7B/g, pT = /%7C/g, Yf = /%7D/g, gT = /%20/g;
  function va(t) {
    return encodeURI("" + t).replace(pT, "|").replace(fT, "[").replace(dT, "]");
  }
  function _T(t) {
    return va(t).replace(zf, "{").replace(Yf, "}").replace(Kf, "^");
  }
  function Ro(t) {
    return va(t).replace(Bf, "%2B").replace(gT, "+").replace(jf, "%23").replace(aT, "%26").replace(hT, "`").replace(zf, "{").replace(Yf, "}").replace(Kf, "^");
  }
  function mT(t) {
    return Ro(t).replace(cT, "%3D");
  }
  function vT(t) {
    return va(t).replace(jf, "%23").replace(uT, "%3F");
  }
  function bT(t) {
    return t == null ? "" : vT(t).replace(lT, "%2F");
  }
  function qr(t) {
    try {
      return decodeURIComponent("" + t);
    } catch {
    }
    return "" + t;
  }
  const ET = /\/$/, yT = (t) => t.replace(ET, "");
  function io(t, e, n = "/") {
    let r, s = {}, i = "", l = "";
    const c = e.indexOf("#");
    let u = e.indexOf("?");
    return c < u && c >= 0 && (u = -1), u > -1 && (r = e.slice(0, u), i = e.slice(u + 1, c > -1 ? c : e.length), s = t(i)), c > -1 && (r = r || e.slice(0, c), l = e.slice(c, e.length)), r = ST(r ?? e, n), {
      fullPath: r + (i && "?") + i + l,
      path: r,
      query: s,
      hash: qr(l)
    };
  }
  function TT(t, e) {
    const n = e.query ? t(e.query) : "";
    return e.path + (n && "?") + n + (e.hash || "");
  }
  function cc(t, e) {
    return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/";
  }
  function wT(t, e, n) {
    const r = e.matched.length - 1, s = n.matched.length - 1;
    return r > -1 && r === s && pr(e.matched[r], n.matched[s]) && Gf(e.params, n.params) && t(e.query) === t(n.query) && e.hash === n.hash;
  }
  function pr(t, e) {
    return (t.aliasOf || t) === (e.aliasOf || e);
  }
  function Gf(t, e) {
    if (Object.keys(t).length !== Object.keys(e).length) return false;
    for (const n in t) if (!AT(t[n], e[n])) return false;
    return true;
  }
  function AT(t, e) {
    return Ct(t) ? uc(t, e) : Ct(e) ? uc(e, t) : t === e;
  }
  function uc(t, e) {
    return Ct(e) ? t.length === e.length && t.every((n, r) => n === e[r]) : t.length === 1 && t[0] === e;
  }
  function ST(t, e) {
    if (t.startsWith("/")) return t;
    if (!t) return e;
    const n = e.split("/"), r = t.split("/"), s = r[r.length - 1];
    (s === ".." || s === ".") && r.push("");
    let i = n.length - 1, l, c;
    for (l = 0; l < r.length; l++) if (c = r[l], c !== ".") if (c === "..") i > 1 && i--;
    else break;
    return n.slice(0, i).join("/") + "/" + r.slice(l).join("/");
  }
  const sn = {
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
  var Jr;
  (function(t) {
    t.pop = "pop", t.push = "push";
  })(Jr || (Jr = {}));
  var Ur;
  (function(t) {
    t.back = "back", t.forward = "forward", t.unknown = "";
  })(Ur || (Ur = {}));
  function CT(t) {
    if (!t) if (Zn) {
      const e = document.querySelector("base");
      t = e && e.getAttribute("href") || "/", t = t.replace(/^\w+:\/\/[^\/]+/, "");
    } else t = "/";
    return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), yT(t);
  }
  const OT = /^[^#]+#/;
  function PT(t, e) {
    return t.replace(OT, "#") + e;
  }
  function $T(t, e) {
    const n = document.documentElement.getBoundingClientRect(), r = t.getBoundingClientRect();
    return {
      behavior: e.behavior,
      left: r.left - n.left - (e.left || 0),
      top: r.top - n.top - (e.top || 0)
    };
  }
  const gi = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function RT(t) {
    let e;
    if ("el" in t) {
      const n = t.el, r = typeof n == "string" && n.startsWith("#"), s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
      if (!s) return;
      e = $T(s, t);
    } else e = t;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.scrollX, e.top != null ? e.top : window.scrollY);
  }
  function fc(t, e) {
    return (history.state ? history.state.position - e : -1) + t;
  }
  const No = /* @__PURE__ */ new Map();
  function NT(t, e) {
    No.set(t, e);
  }
  function IT(t) {
    const e = No.get(t);
    return No.delete(t), e;
  }
  let xT = () => location.protocol + "//" + location.host;
  function qf(t, e) {
    const { pathname: n, search: r, hash: s } = e, i = t.indexOf("#");
    if (i > -1) {
      let c = s.includes(t.slice(i)) ? t.slice(i).length : 1, u = s.slice(c);
      return u[0] !== "/" && (u = "/" + u), cc(u, "");
    }
    return cc(n, t) + r + s;
  }
  function DT(t, e, n, r) {
    let s = [], i = [], l = null;
    const c = ({ state: b }) => {
      const v = qf(t, location), I = n.value, $ = e.value;
      let H = 0;
      if (b) {
        if (n.value = v, e.value = b, l && l === I) {
          l = null;
          return;
        }
        H = $ ? b.position - $.position : 0;
      } else r(v);
      s.forEach((W) => {
        W(n.value, I, {
          delta: H,
          type: Jr.pop,
          direction: H ? H > 0 ? Ur.forward : Ur.back : Ur.unknown
        });
      });
    };
    function u() {
      l = n.value;
    }
    function h(b) {
      s.push(b);
      const v = () => {
        const I = s.indexOf(b);
        I > -1 && s.splice(I, 1);
      };
      return i.push(v), v;
    }
    function d() {
      const { history: b } = window;
      b.state && b.replaceState(Te({}, b.state, {
        scroll: gi()
      }), "");
    }
    function p() {
      for (const b of i) b();
      i = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", d);
    }
    return window.addEventListener("popstate", c), window.addEventListener("beforeunload", d, {
      passive: true
    }), {
      pauseListeners: u,
      listen: h,
      destroy: p
    };
  }
  function dc(t, e, n, r = false, s = false) {
    return {
      back: t,
      current: e,
      forward: n,
      replaced: r,
      position: window.history.length,
      scroll: s ? gi() : null
    };
  }
  function LT(t) {
    const { history: e, location: n } = window, r = {
      value: qf(t, n)
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
    function i(u, h, d) {
      const p = t.indexOf("#"), b = p > -1 ? (n.host && document.querySelector("base") ? t : t.slice(p)) + u : xT() + t + u;
      try {
        e[d ? "replaceState" : "pushState"](h, "", b), s.value = h;
      } catch (v) {
        console.error(v), n[d ? "replace" : "assign"](b);
      }
    }
    function l(u, h) {
      const d = Te({}, e.state, dc(s.value.back, u, s.value.forward, true), h, {
        position: s.value.position
      });
      i(u, d, true), r.value = u;
    }
    function c(u, h) {
      const d = Te({}, s.value, e.state, {
        forward: u,
        scroll: gi()
      });
      i(d.current, d, true);
      const p = Te({}, dc(r.value, u, null), {
        position: d.position + 1
      }, h);
      i(u, p, false), r.value = u;
    }
    return {
      location: r,
      state: s,
      push: c,
      replace: l
    };
  }
  function MT(t) {
    t = CT(t);
    const e = LT(t), n = DT(t, e.state, e.location, e.replace);
    function r(i, l = true) {
      l || n.pauseListeners(), history.go(i);
    }
    const s = Te({
      location: "",
      base: t,
      go: r,
      createHref: PT.bind(null, t)
    }, e, n);
    return Object.defineProperty(s, "location", {
      enumerable: true,
      get: () => e.location.value
    }), Object.defineProperty(s, "state", {
      enumerable: true,
      get: () => e.state.value
    }), s;
  }
  function kT(t) {
    return typeof t == "string" || t && typeof t == "object";
  }
  function Jf(t) {
    return typeof t == "string" || typeof t == "symbol";
  }
  const Xf = Symbol("");
  var hc;
  (function(t) {
    t[t.aborted = 4] = "aborted", t[t.cancelled = 8] = "cancelled", t[t.duplicated = 16] = "duplicated";
  })(hc || (hc = {}));
  function gr(t, e) {
    return Te(new Error(), {
      type: t,
      [Xf]: true
    }, e);
  }
  function Kt(t, e) {
    return t instanceof Error && Xf in t && (e == null || !!(t.type & e));
  }
  const pc = "[^/]+?", FT = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  }, VT = /[.+*?^${}()[\]/\\]/g;
  function HT(t, e) {
    const n = Te({}, FT, e), r = [];
    let s = n.start ? "^" : "";
    const i = [];
    for (const h of t) {
      const d = h.length ? [] : [
        90
      ];
      n.strict && !h.length && (s += "/");
      for (let p = 0; p < h.length; p++) {
        const b = h[p];
        let v = 40 + (n.sensitive ? 0.25 : 0);
        if (b.type === 0) p || (s += "/"), s += b.value.replace(VT, "\\$&"), v += 40;
        else if (b.type === 1) {
          const { value: I, repeatable: $, optional: H, regexp: W } = b;
          i.push({
            name: I,
            repeatable: $,
            optional: H
          });
          const k = W || pc;
          if (k !== pc) {
            v += 10;
            try {
              new RegExp(`(${k})`);
            } catch (D) {
              throw new Error(`Invalid custom RegExp for param "${I}" (${k}): ` + D.message);
            }
          }
          let B = $ ? `((?:${k})(?:/(?:${k}))*)` : `(${k})`;
          p || (B = H && h.length < 2 ? `(?:/${B})` : "/" + B), H && (B += "?"), s += B, v += 20, H && (v += -8), $ && (v += -20), k === ".*" && (v += -50);
        }
        d.push(v);
      }
      r.push(d);
    }
    if (n.strict && n.end) {
      const h = r.length - 1;
      r[h][r[h].length - 1] += 0.7000000000000001;
    }
    n.strict || (s += "/?"), n.end ? s += "$" : n.strict && !s.endsWith("/") && (s += "(?:/|$)");
    const l = new RegExp(s, n.sensitive ? "" : "i");
    function c(h) {
      const d = h.match(l), p = {};
      if (!d) return null;
      for (let b = 1; b < d.length; b++) {
        const v = d[b] || "", I = i[b - 1];
        p[I.name] = v && I.repeatable ? v.split("/") : v;
      }
      return p;
    }
    function u(h) {
      let d = "", p = false;
      for (const b of t) {
        (!p || !d.endsWith("/")) && (d += "/"), p = false;
        for (const v of b) if (v.type === 0) d += v.value;
        else if (v.type === 1) {
          const { value: I, repeatable: $, optional: H } = v, W = I in h ? h[I] : "";
          if (Ct(W) && !$) throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);
          const k = Ct(W) ? W.join("/") : W;
          if (!k) if (H) b.length < 2 && (d.endsWith("/") ? d = d.slice(0, -1) : p = true);
          else throw new Error(`Missing required param "${I}"`);
          d += k;
        }
      }
      return d || "/";
    }
    return {
      re: l,
      score: r,
      keys: i,
      parse: c,
      stringify: u
    };
  }
  function WT(t, e) {
    let n = 0;
    for (; n < t.length && n < e.length; ) {
      const r = e[n] - t[n];
      if (r) return r;
      n++;
    }
    return t.length < e.length ? t.length === 1 && t[0] === 80 ? -1 : 1 : t.length > e.length ? e.length === 1 && e[0] === 80 ? 1 : -1 : 0;
  }
  function Qf(t, e) {
    let n = 0;
    const r = t.score, s = e.score;
    for (; n < r.length && n < s.length; ) {
      const i = WT(r[n], s[n]);
      if (i) return i;
      n++;
    }
    if (Math.abs(s.length - r.length) === 1) {
      if (gc(r)) return 1;
      if (gc(s)) return -1;
    }
    return s.length - r.length;
  }
  function gc(t) {
    const e = t[t.length - 1];
    return t.length > 0 && e[e.length - 1] < 0;
  }
  const UT = {
    type: 0,
    value: ""
  }, jT = /[a-zA-Z0-9_]/;
  function BT(t) {
    if (!t) return [
      []
    ];
    if (t === "/") return [
      [
        UT
      ]
    ];
    if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
    function e(v) {
      throw new Error(`ERR (${n})/"${h}": ${v}`);
    }
    let n = 0, r = n;
    const s = [];
    let i;
    function l() {
      i && s.push(i), i = [];
    }
    let c = 0, u, h = "", d = "";
    function p() {
      h && (n === 0 ? i.push({
        type: 0,
        value: h
      }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (u === "*" || u === "+") && e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`), i.push({
        type: 1,
        value: h,
        regexp: d,
        repeatable: u === "*" || u === "+",
        optional: u === "*" || u === "?"
      })) : e("Invalid state to consume buffer"), h = "");
    }
    function b() {
      h += u;
    }
    for (; c < t.length; ) {
      if (u = t[c++], u === "\\" && n !== 2) {
        r = n, n = 4;
        continue;
      }
      switch (n) {
        case 0:
          u === "/" ? (h && p(), l()) : u === ":" ? (p(), n = 1) : b();
          break;
        case 4:
          b(), n = r;
          break;
        case 1:
          u === "(" ? n = 2 : jT.test(u) ? b() : (p(), n = 0, u !== "*" && u !== "?" && u !== "+" && c--);
          break;
        case 2:
          u === ")" ? d[d.length - 1] == "\\" ? d = d.slice(0, -1) + u : n = 3 : d += u;
          break;
        case 3:
          p(), n = 0, u !== "*" && u !== "?" && u !== "+" && c--, d = "";
          break;
        default:
          e("Unknown state");
          break;
      }
    }
    return n === 2 && e(`Unfinished custom RegExp for param "${h}"`), p(), l(), s;
  }
  function KT(t, e, n) {
    const r = HT(BT(t.path), n), s = Te(r, {
      record: t,
      parent: e,
      children: [],
      alias: []
    });
    return e && !s.record.aliasOf == !e.record.aliasOf && e.children.push(s), s;
  }
  function zT(t, e) {
    const n = [], r = /* @__PURE__ */ new Map();
    e = bc({
      strict: false,
      end: true,
      sensitive: false
    }, e);
    function s(p) {
      return r.get(p);
    }
    function i(p, b, v) {
      const I = !v, $ = mc(p);
      $.aliasOf = v && v.record;
      const H = bc(e, p), W = [
        $
      ];
      if ("alias" in p) {
        const D = typeof p.alias == "string" ? [
          p.alias
        ] : p.alias;
        for (const Y of D) W.push(mc(Te({}, $, {
          components: v ? v.record.components : $.components,
          path: Y,
          aliasOf: v ? v.record : $
        })));
      }
      let k, B;
      for (const D of W) {
        const { path: Y } = D;
        if (b && Y[0] !== "/") {
          const X = b.record.path, ne = X[X.length - 1] === "/" ? "" : "/";
          D.path = b.record.path + (Y && ne + Y);
        }
        if (k = KT(D, b, H), v ? v.alias.push(k) : (B = B || k, B !== k && B.alias.push(k), I && p.name && !vc(k) && l(p.name)), Zf(k) && u(k), $.children) {
          const X = $.children;
          for (let ne = 0; ne < X.length; ne++) i(X[ne], k, v && v.children[ne]);
        }
        v = v || k;
      }
      return B ? () => {
        l(B);
      } : Wr;
    }
    function l(p) {
      if (Jf(p)) {
        const b = r.get(p);
        b && (r.delete(p), n.splice(n.indexOf(b), 1), b.children.forEach(l), b.alias.forEach(l));
      } else {
        const b = n.indexOf(p);
        b > -1 && (n.splice(b, 1), p.record.name && r.delete(p.record.name), p.children.forEach(l), p.alias.forEach(l));
      }
    }
    function c() {
      return n;
    }
    function u(p) {
      const b = qT(p, n);
      n.splice(b, 0, p), p.record.name && !vc(p) && r.set(p.record.name, p);
    }
    function h(p, b) {
      let v, I = {}, $, H;
      if ("name" in p && p.name) {
        if (v = r.get(p.name), !v) throw gr(1, {
          location: p
        });
        H = v.record.name, I = Te(_c(b.params, v.keys.filter((B) => !B.optional).concat(v.parent ? v.parent.keys.filter((B) => B.optional) : []).map((B) => B.name)), p.params && _c(p.params, v.keys.map((B) => B.name))), $ = v.stringify(I);
      } else if (p.path != null) $ = p.path, v = n.find((B) => B.re.test($)), v && (I = v.parse($), H = v.record.name);
      else {
        if (v = b.name ? r.get(b.name) : n.find((B) => B.re.test(b.path)), !v) throw gr(1, {
          location: p,
          currentLocation: b
        });
        H = v.record.name, I = Te({}, b.params, p.params), $ = v.stringify(I);
      }
      const W = [];
      let k = v;
      for (; k; ) W.unshift(k.record), k = k.parent;
      return {
        name: H,
        path: $,
        params: I,
        matched: W,
        meta: GT(W)
      };
    }
    t.forEach((p) => i(p));
    function d() {
      n.length = 0, r.clear();
    }
    return {
      addRoute: i,
      resolve: h,
      removeRoute: l,
      clearRoutes: d,
      getRoutes: c,
      getRecordMatcher: s
    };
  }
  function _c(t, e) {
    const n = {};
    for (const r of e) r in t && (n[r] = t[r]);
    return n;
  }
  function mc(t) {
    const e = {
      path: t.path,
      redirect: t.redirect,
      name: t.name,
      meta: t.meta || {},
      aliasOf: t.aliasOf,
      beforeEnter: t.beforeEnter,
      props: YT(t),
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
  function YT(t) {
    const e = {}, n = t.props || false;
    if ("component" in t) e.default = n;
    else for (const r in t.components) e[r] = typeof n == "object" ? n[r] : n;
    return e;
  }
  function vc(t) {
    for (; t; ) {
      if (t.record.aliasOf) return true;
      t = t.parent;
    }
    return false;
  }
  function GT(t) {
    return t.reduce((e, n) => Te(e, n.meta), {});
  }
  function bc(t, e) {
    const n = {};
    for (const r in t) n[r] = r in e ? e[r] : t[r];
    return n;
  }
  function qT(t, e) {
    let n = 0, r = e.length;
    for (; n !== r; ) {
      const i = n + r >> 1;
      Qf(t, e[i]) < 0 ? r = i : n = i + 1;
    }
    const s = JT(t);
    return s && (r = e.lastIndexOf(s, r - 1)), r;
  }
  function JT(t) {
    let e = t;
    for (; e = e.parent; ) if (Zf(e) && Qf(t, e) === 0) return e;
  }
  function Zf({ record: t }) {
    return !!(t.name || t.components && Object.keys(t.components).length || t.redirect);
  }
  function XT(t) {
    const e = {};
    if (t === "" || t === "?") return e;
    const r = (t[0] === "?" ? t.slice(1) : t).split("&");
    for (let s = 0; s < r.length; ++s) {
      const i = r[s].replace(Bf, " "), l = i.indexOf("="), c = qr(l < 0 ? i : i.slice(0, l)), u = l < 0 ? null : qr(i.slice(l + 1));
      if (c in e) {
        let h = e[c];
        Ct(h) || (h = e[c] = [
          h
        ]), h.push(u);
      } else e[c] = u;
    }
    return e;
  }
  function Ec(t) {
    let e = "";
    for (let n in t) {
      const r = t[n];
      if (n = mT(n), r == null) {
        r !== void 0 && (e += (e.length ? "&" : "") + n);
        continue;
      }
      (Ct(r) ? r.map((i) => i && Ro(i)) : [
        r && Ro(r)
      ]).forEach((i) => {
        i !== void 0 && (e += (e.length ? "&" : "") + n, i != null && (e += "=" + i));
      });
    }
    return e;
  }
  function QT(t) {
    const e = {};
    for (const n in t) {
      const r = t[n];
      r !== void 0 && (e[n] = Ct(r) ? r.map((s) => s == null ? null : "" + s) : r == null ? r : "" + r);
    }
    return e;
  }
  const ZT = Symbol(""), yc = Symbol(""), ba = Symbol(""), ed = Symbol(""), Io = Symbol("");
  function $r() {
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
  function cn(t, e, n, r, s, i = (l) => l()) {
    const l = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return () => new Promise((c, u) => {
      const h = (b) => {
        b === false ? u(gr(4, {
          from: n,
          to: e
        })) : b instanceof Error ? u(b) : kT(b) ? u(gr(2, {
          from: e,
          to: b
        })) : (l && r.enterCallbacks[s] === l && typeof b == "function" && l.push(b), c());
      }, d = i(() => t.call(r && r.instances[s], e, n, h));
      let p = Promise.resolve(d);
      t.length < 3 && (p = p.then(h)), p.catch((b) => u(b));
    });
  }
  function oo(t, e, n, r, s = (i) => i()) {
    const i = [];
    for (const l of t) for (const c in l.components) {
      let u = l.components[c];
      if (!(e !== "beforeRouteEnter" && !l.instances[c])) if (Uf(u)) {
        const d = (u.__vccOpts || u)[e];
        d && i.push(cn(d, n, r, l, c, s));
      } else {
        let h = u();
        i.push(() => h.then((d) => {
          if (!d) throw new Error(`Couldn't resolve component "${c}" at "${l.path}"`);
          const p = oT(d) ? d.default : d;
          l.mods[c] = d, l.components[c] = p;
          const v = (p.__vccOpts || p)[e];
          return v && cn(v, n, r, l, c, s)();
        }));
      }
    }
    return i;
  }
  function Tc(t) {
    const e = Mt(ba), n = Mt(ed), r = gt(() => {
      const u = rr(t.to);
      return e.resolve(u);
    }), s = gt(() => {
      const { matched: u } = r.value, { length: h } = u, d = u[h - 1], p = n.matched;
      if (!d || !p.length) return -1;
      const b = p.findIndex(pr.bind(null, d));
      if (b > -1) return b;
      const v = wc(u[h - 2]);
      return h > 1 && wc(d) === v && p[p.length - 1].path !== v ? p.findIndex(pr.bind(null, u[h - 2])) : b;
    }), i = gt(() => s.value > -1 && sw(n.params, r.value.params)), l = gt(() => s.value > -1 && s.value === n.matched.length - 1 && Gf(n.params, r.value.params));
    function c(u = {}) {
      if (rw(u)) {
        const h = e[rr(t.replace) ? "replace" : "push"](rr(t.to)).catch(Wr);
        return t.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => h), h;
      }
      return Promise.resolve();
    }
    return {
      route: r,
      href: gt(() => r.value.href),
      isActive: i,
      isExactActive: l,
      navigate: c
    };
  }
  function ew(t) {
    return t.length === 1 ? t[0] : t;
  }
  const tw = ou({
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
    useLink: Tc,
    setup(t, { slots: e }) {
      const n = Qr(Tc(t)), { options: r } = Mt(ba), s = gt(() => ({
        [Ac(t.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
        [Ac(t.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
      }));
      return () => {
        const i = e.default && ew(e.default(n));
        return t.custom ? i : Du("a", {
          "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: s.value
        }, i);
      };
    }
  }), nw = tw;
  function rw(t) {
    if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
      if (t.currentTarget && t.currentTarget.getAttribute) {
        const e = t.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(e)) return;
      }
      return t.preventDefault && t.preventDefault(), true;
    }
  }
  function sw(t, e) {
    for (const n in e) {
      const r = e[n], s = t[n];
      if (typeof r == "string") {
        if (r !== s) return false;
      } else if (!Ct(s) || s.length !== r.length || r.some((i, l) => i !== s[l])) return false;
    }
    return true;
  }
  function wc(t) {
    return t ? t.aliasOf ? t.aliasOf.path : t.path : "";
  }
  const Ac = (t, e, n) => t ?? e ?? n, iw = ou({
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
      const r = Mt(Io), s = gt(() => t.route || r.value), i = Mt(yc, 0), l = gt(() => {
        let h = rr(i);
        const { matched: d } = s.value;
        let p;
        for (; (p = d[h]) && !p.components; ) h++;
        return h;
      }), c = gt(() => s.value.matched[l.value]);
      Rs(yc, gt(() => l.value + 1)), Rs(ZT, c), Rs(Io, s);
      const u = Go();
      return Mr(() => [
        u.value,
        c.value,
        t.name
      ], ([h, d, p], [b, v, I]) => {
        d && (d.instances[p] = h, v && v !== d && h && h === b && (d.leaveGuards.size || (d.leaveGuards = v.leaveGuards), d.updateGuards.size || (d.updateGuards = v.updateGuards))), h && d && (!v || !pr(d, v) || !b) && (d.enterCallbacks[p] || []).forEach(($) => $(h));
      }, {
        flush: "post"
      }), () => {
        const h = s.value, d = t.name, p = c.value, b = p && p.components[d];
        if (!b) return Sc(n.default, {
          Component: b,
          route: h
        });
        const v = p.props[d], I = v ? v === true ? h.params : typeof v == "function" ? v(h) : v : null, H = Du(b, Te({}, I, e, {
          onVnodeUnmounted: (W) => {
            W.component.isUnmounted && (p.instances[d] = null);
          },
          ref: u
        }));
        return Sc(n.default, {
          Component: H,
          route: h
        }) || H;
      };
    }
  });
  function Sc(t, e) {
    if (!t) return null;
    const n = t(e);
    return n.length === 1 ? n[0] : n;
  }
  const ow = iw;
  function aw(t) {
    const e = zT(t.routes, t), n = t.parseQuery || XT, r = t.stringifyQuery || Ec, s = t.history, i = $r(), l = $r(), c = $r(), u = kp(sn);
    let h = sn;
    Zn && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const d = so.bind(null, (A) => "" + A), p = so.bind(null, bT), b = so.bind(null, qr);
    function v(A, K) {
      let j, Z;
      return Jf(A) ? (j = e.getRecordMatcher(A), Z = K) : Z = A, e.addRoute(Z, j);
    }
    function I(A) {
      const K = e.getRecordMatcher(A);
      K && e.removeRoute(K);
    }
    function $() {
      return e.getRoutes().map((A) => A.record);
    }
    function H(A) {
      return !!e.getRecordMatcher(A);
    }
    function W(A, K) {
      if (K = Te({}, K || u.value), typeof A == "string") {
        const E = io(n, A, K.path), O = e.resolve({
          path: E.path
        }, K), P = s.createHref(E.fullPath);
        return Te(E, O, {
          params: b(O.params),
          hash: qr(E.hash),
          redirectedFrom: void 0,
          href: P
        });
      }
      let j;
      if (A.path != null) j = Te({}, A, {
        path: io(n, A.path, K.path).path
      });
      else {
        const E = Te({}, A.params);
        for (const O in E) E[O] == null && delete E[O];
        j = Te({}, A, {
          params: p(E)
        }), K.params = p(K.params);
      }
      const Z = e.resolve(j, K), me = A.hash || "";
      Z.params = d(b(Z.params));
      const g = TT(r, Te({}, A, {
        hash: _T(me),
        path: Z.path
      })), _ = s.createHref(g);
      return Te({
        fullPath: g,
        hash: me,
        query: r === Ec ? QT(A.query) : A.query || {}
      }, Z, {
        redirectedFrom: void 0,
        href: _
      });
    }
    function k(A) {
      return typeof A == "string" ? io(n, A, u.value.path) : Te({}, A);
    }
    function B(A, K) {
      if (h !== A) return gr(8, {
        from: K,
        to: A
      });
    }
    function D(A) {
      return ne(A);
    }
    function Y(A) {
      return D(Te(k(A), {
        replace: true
      }));
    }
    function X(A) {
      const K = A.matched[A.matched.length - 1];
      if (K && K.redirect) {
        const { redirect: j } = K;
        let Z = typeof j == "function" ? j(A) : j;
        return typeof Z == "string" && (Z = Z.includes("?") || Z.includes("#") ? Z = k(Z) : {
          path: Z
        }, Z.params = {}), Te({
          query: A.query,
          hash: A.hash,
          params: Z.path != null ? {} : A.params
        }, Z);
      }
    }
    function ne(A, K) {
      const j = h = W(A), Z = u.value, me = A.state, g = A.force, _ = A.replace === true, E = X(j);
      if (E) return ne(Te(k(E), {
        state: typeof E == "object" ? Te({}, me, E.state) : me,
        force: g,
        replace: _
      }), K || j);
      const O = j;
      O.redirectedFrom = K;
      let P;
      return !g && wT(r, Z, j) && (P = gr(16, {
        to: O,
        from: Z
      }), xe(Z, Z, true, false)), (P ? Promise.resolve(P) : R(O, Z)).catch((C) => Kt(C) ? Kt(C, 2) ? C : Ve(C) : ue(C, O, Z)).then((C) => {
        if (C) {
          if (Kt(C, 2)) return ne(Te({
            replace: _
          }, k(C.to), {
            state: typeof C.to == "object" ? Te({}, me, C.to.state) : me,
            force: g
          }), K || O);
        } else C = he(O, Z, true, _, me);
        return pe(O, Z, C), C;
      });
    }
    function ee(A, K) {
      const j = B(A, K);
      return j ? Promise.reject(j) : Promise.resolve();
    }
    function te(A) {
      const K = Me.values().next().value;
      return K && typeof K.runWithContext == "function" ? K.runWithContext(A) : A();
    }
    function R(A, K) {
      let j;
      const [Z, me, g] = lw(A, K);
      j = oo(Z.reverse(), "beforeRouteLeave", A, K);
      for (const E of Z) E.leaveGuards.forEach((O) => {
        j.push(cn(O, A, K));
      });
      const _ = ee.bind(null, A, K);
      return j.push(_), Ie(j).then(() => {
        j = [];
        for (const E of i.list()) j.push(cn(E, A, K));
        return j.push(_), Ie(j);
      }).then(() => {
        j = oo(me, "beforeRouteUpdate", A, K);
        for (const E of me) E.updateGuards.forEach((O) => {
          j.push(cn(O, A, K));
        });
        return j.push(_), Ie(j);
      }).then(() => {
        j = [];
        for (const E of g) if (E.beforeEnter) if (Ct(E.beforeEnter)) for (const O of E.beforeEnter) j.push(cn(O, A, K));
        else j.push(cn(E.beforeEnter, A, K));
        return j.push(_), Ie(j);
      }).then(() => (A.matched.forEach((E) => E.enterCallbacks = {}), j = oo(g, "beforeRouteEnter", A, K, te), j.push(_), Ie(j))).then(() => {
        j = [];
        for (const E of l.list()) j.push(cn(E, A, K));
        return j.push(_), Ie(j);
      }).catch((E) => Kt(E, 8) ? E : Promise.reject(E));
    }
    function pe(A, K, j) {
      c.list().forEach((Z) => te(() => Z(A, K, j)));
    }
    function he(A, K, j, Z, me) {
      const g = B(A, K);
      if (g) return g;
      const _ = K === sn, E = Zn ? history.state : {};
      j && (Z || _ ? s.replace(A.fullPath, Te({
        scroll: _ && E && E.scroll
      }, me)) : s.push(A.fullPath, me)), u.value = A, xe(A, K, j, _), Ve();
    }
    let ge;
    function Re() {
      ge || (ge = s.listen((A, K, j) => {
        if (!Le.listening) return;
        const Z = W(A), me = X(Z);
        if (me) {
          ne(Te(me, {
            replace: true,
            force: true
          }), Z).catch(Wr);
          return;
        }
        h = Z;
        const g = u.value;
        Zn && NT(fc(g.fullPath, j.delta), gi()), R(Z, g).catch((_) => Kt(_, 12) ? _ : Kt(_, 2) ? (ne(Te(k(_.to), {
          force: true
        }), Z).then((E) => {
          Kt(E, 20) && !j.delta && j.type === Jr.pop && s.go(-1, false);
        }).catch(Wr), Promise.reject()) : (j.delta && s.go(-j.delta, false), ue(_, Z, g))).then((_) => {
          _ = _ || he(Z, g, false), _ && (j.delta && !Kt(_, 8) ? s.go(-j.delta, false) : j.type === Jr.pop && Kt(_, 20) && s.go(-1, false)), pe(Z, g, _);
        }).catch(Wr);
      }));
    }
    let ce = $r(), G = $r(), re;
    function ue(A, K, j) {
      Ve(A);
      const Z = G.list();
      return Z.length ? Z.forEach((me) => me(A, K, j)) : console.error(A), Promise.reject(A);
    }
    function Ne() {
      return re && u.value !== sn ? Promise.resolve() : new Promise((A, K) => {
        ce.add([
          A,
          K
        ]);
      });
    }
    function Ve(A) {
      return re || (re = !A, Re(), ce.list().forEach(([K, j]) => A ? j(A) : K()), ce.reset()), A;
    }
    function xe(A, K, j, Z) {
      const { scrollBehavior: me } = t;
      if (!Zn || !me) return Promise.resolve();
      const g = !j && IT(fc(A.fullPath, 0)) || (Z || !j) && history.state && history.state.scroll || null;
      return qo().then(() => me(A, K, g)).then((_) => _ && RT(_)).catch((_) => ue(_, A, K));
    }
    const Se = (A) => s.go(A);
    let st;
    const Me = /* @__PURE__ */ new Set(), Le = {
      currentRoute: u,
      listening: true,
      addRoute: v,
      removeRoute: I,
      clearRoutes: e.clearRoutes,
      hasRoute: H,
      getRoutes: $,
      resolve: W,
      options: t,
      push: D,
      replace: Y,
      go: Se,
      back: () => Se(-1),
      forward: () => Se(1),
      beforeEach: i.add,
      beforeResolve: l.add,
      afterEach: c.add,
      onError: G.add,
      isReady: Ne,
      install(A) {
        const K = this;
        A.component("RouterLink", nw), A.component("RouterView", ow), A.config.globalProperties.$router = K, Object.defineProperty(A.config.globalProperties, "$route", {
          enumerable: true,
          get: () => rr(u)
        }), Zn && !st && u.value === sn && (st = true, D(s.location).catch((me) => {
        }));
        const j = {};
        for (const me in sn) Object.defineProperty(j, me, {
          get: () => u.value[me],
          enumerable: true
        });
        A.provide(ba, K), A.provide(ed, Xc(j)), A.provide(Io, u);
        const Z = A.unmount;
        Me.add(A), A.unmount = function() {
          Me.delete(A), Me.size < 1 && (h = sn, ge && ge(), ge = null, u.value = sn, st = false, re = false), Z();
        };
      }
    };
    function Ie(A) {
      return A.reduce((K, j) => K.then(() => te(j)), Promise.resolve());
    }
    return Le;
  }
  function lw(t, e) {
    const n = [], r = [], s = [], i = Math.max(e.matched.length, t.matched.length);
    for (let l = 0; l < i; l++) {
      const c = e.matched[l];
      c && (t.matched.find((h) => pr(h, c)) ? r.push(c) : n.push(c));
      const u = t.matched[l];
      u && (e.matched.find((h) => pr(h, u)) || s.push(u));
    }
    return [
      n,
      r,
      s
    ];
  }
  const cw = "/wasm-demo/".replace(/\/$|$/, "/"), uw = [
    {
      path: "/",
      name: "main",
      component: () => $o(() => import("./MainPage-t-Ns5qlr.js"), __vite__mapDeps([0,1]))
    },
    {
      path: "/about",
      name: "about",
      component: () => $o(() => import("./AboutPage-D1B5Ghyw.js"), __vite__mapDeps([2,3]))
    }
  ], fw = aw({
    history: MT(cw),
    routes: uw
  }), _i = O_(Y_);
  _i.use(iT);
  _i.use(R_());
  _i.use(fw);
  _i.mount("#app");
})();
export {
  Cn as E,
  wt as L,
  Je as X,
  F_ as _,
  __tla,
  Tt as a,
  hw as b,
  jg as c,
  ou as d,
  rr as e,
  gw as f,
  Fe as g,
  mo as h,
  $s as i,
  Xa as j,
  $u as o,
  Go as r,
  _p as t,
  sT as u,
  pw as v,
  dw as w
};
