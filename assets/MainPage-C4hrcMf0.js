import { X as d, L as n, E as q, _ as T, c as v, a as i, b as P, t as R, o as g, d as B, u as O, r as f, e as V, w as x, v as S, f as H, g as I } from "./index-CZWlb6Mu.js";
class $ {
  _isAcquired = false;
  _acquiredMap = /* @__PURE__ */ new Map();
  waitingMap = /* @__PURE__ */ new Map();
  waitingList = [];
  acquire(e) {
    if (e) {
      if (!this._acquiredMap.has(e) || !this._acquiredMap.get(e)) return this._acquiredMap.set(e, true), Promise.resolve();
    } else if (!this._isAcquired) return this._isAcquired = true, Promise.resolve();
    return new Promise((t) => {
      if (e) if (this.waitingMap.has(e)) {
        const a = this.waitingMap.get(e);
        a && (a.push(t), this.waitingMap.set(e, a));
      } else this.waitingMap.set(e, [t]);
      else this.waitingList.push(t);
    });
  }
  isAcquired(e) {
    return e ? this._acquiredMap.has(e) ? this._acquiredMap.get(e) : false : this._isAcquired;
  }
  release(e) {
    if (e) {
      if (!this._acquiredMap.has(e) || !this._acquiredMap.get(e)) throw new Error("Please acquire a lock for " + e + " before releasing!!");
      {
        const t = this.waitingMap.get(e);
        if (t && t.length > 0) {
          const a = this.waitingMap.get(e)?.shift();
          a && a();
        } else this.waitingMap.has(e) && this.waitingMap.delete(e), this._acquiredMap.set(e, false);
      }
    } else if (this._isAcquired) if (this.waitingList.length > 0) {
      const t = this.waitingList.shift();
      t && t();
    } else this._isAcquired = false;
    else throw new Error("Please acquire a lock before releasing!!");
  }
}
class u {
  static instance;
  list = /* @__PURE__ */ new Map();
  lock = new $();
  constructor() {
  }
  static shared() {
    return u.instance || (u.instance = new u()), u.instance;
  }
  async add(e, t) {
    return await this.lock.acquire(), this.list.set(e, t), this.lock.release();
  }
  async execute(e, t) {
    if (await this.lock.acquire(), this.list.has(e)) {
      const a = this.list.get(e);
      return this.list.delete(e), this.lock.release(), a?.(t);
    }
    return this.lock.release();
  }
  async count() {
    await this.lock.acquire();
    const e = this.list.size;
    return this.lock.release(), e;
  }
}
class h {
  static instance;
  lock = new $();
  uid = 0;
  constructor() {
  }
  static shared() {
    return h.instance || (h.instance = new h()), h.instance;
  }
  static async generate() {
    await h.shared().lock.acquire();
    const e = "JS-" + (++h.shared().uid).toString();
    return h.shared().lock.release(), e;
  }
}
class U {
  static call(e) {
    return new Promise((t) => {
      if (!d.shared().initialized) return n.e("[XClient : call] The WASM module is not initialized"), t(void 0);
      try {
        h.generate().then((a) => {
          typeof e == "string" ? (u.shared().add(a, (o) => t(o)), d.shared().module.Client.call(e, (o) => {
            u.shared().execute(a, o);
          })) : (u.shared().add(a, (o) => t(d.shared().config.serializer.decodeFunctionReturnValue(o))), d.shared().module.Client.call(e.data(), (o) => {
            u.shared().execute(a, o);
          }));
        });
      } catch (a) {
        return n.e("[XClient : call] Error: " + q.get(a)), t(void 0);
      }
    });
  }
}
class b {
  name;
  value;
  constructor(e, t) {
    this.name = e, this.value = t;
  }
}
class _ {
  functionName;
  params;
  constructor(e, ...t) {
    this.functionName = e, this.params = t;
  }
  data() {
    return d.shared().config.serializer.encodeRequest(this.functionName, ...this.params);
  }
}
class M {
  ptr;
  size;
  constructor(e, t) {
    this.ptr = e, this.size = t;
  }
  static createFromArrayBuffer(e) {
    const t = e.byteLength, a = d.shared().module._malloc(t);
    return d.shared().module.HEAPU8.set(e, a), new M(a, t);
  }
  static createUint8ArrayFromPtr(e, t) {
    return new Uint8Array(d.shared().module.HEAPU8.buffer, e, t);
  }
  static createUint8ClampedArrayFromPtr(e, t) {
    return new Uint8ClampedArray(d.shared().module.HEAPU8.buffer, e, t);
  }
  static free(e) {
    d.shared().module._free(e.ptr);
  }
}
const k = { name: "VueCamera", props: { width: { type: [Number, String], default: "100%" }, height: { type: [Number, String], default: 500 }, autoplay: { type: Boolean, default: true }, screenshotFormat: { type: String, default: "image/jpeg" }, selectFirstDevice: { type: Boolean, default: true }, playsinline: { type: Boolean, default: true }, resolution: { type: Object, default: null, validator: (s) => s.height && s.width } }, emits: ["xplpc-camera-list", "xplpc-camera-not-supported", "xplpc-camera-changed", "xplpc-camera-stopped", "xplpc-camera-video-live", "xplpc-camera-started", "xplpc-camera-error"], data() {
  return { source: null, canvas: null, camerasListEmitted: false, cameraList: [], deviceId: "", visible: false, ctx: null, cameraInfo: "XPLPC", destWidth: 0, destHeight: 0 };
}, watch: { deviceId: function(s) {
  n.d("[Camera : watch] Device is changed: " + s), this.changeCamera(s);
} }, beforeUnmount() {
  n.d("[Camera : beforeUnmount]"), this.stop();
}, methods: { legacyGetUserMediaSupport() {
  return n.d("[Camera : legacyGetUserMediaSupport]"), (s) => {
    const e = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    return e ? new Promise(function(t, a) {
      e.call(navigator, s, t, a);
    }) : (n.d("[Camera : legacyGetUserMediaSupport] The method getUserMedia is not implemented in this browser"), Promise.reject(new Error("[Camera : legacyGetUserMediaSupport] The method getUserMedia is not implemented in this browser")));
  };
}, setupMedia() {
  n.d("[Camera : setupMedia]"), navigator.mediaDevices === void 0 && (navigator.mediaDevices = {}), navigator.mediaDevices.getUserMedia === void 0 && (navigator.mediaDevices.getUserMedia = this.legacyGetUserMediaSupport()), this.testMediaAccess();
}, loadCameraList() {
  n.d("[Camera : loadCameras]"), navigator.mediaDevices.enumerateDevices().then((s) => {
    for (let e = 0; e !== s.length; ++e) {
      const t = s[e];
      t.kind === "videoinput" && this.cameraList.push(t);
    }
  }).then(() => {
    this.camerasListEmitted || (this.selectFirstDevice && this.cameraList.length > 0 && this.setDeviceId(this.cameraList[0].deviceId), this.$emit("xplpc-camera-list", this.cameraList), this.camerasListEmitted = true);
  }).catch((s) => this.$emit("xplpc-camera-not-supported", s));
}, changeCamera(s) {
  n.d("[Camera : changeCamera] Device: " + s), this.stop(), this.$emit("xplpc-camera-changed", s), this.loadCamera(s);
}, loadSrcStream(s) {
  n.d("[Camera : loadSrcStream]"), "srcObject" in this.$refs.video ? this.$refs.video.srcObject = s : this.source = window.HTMLMediaElement.srcObject(s), this.$refs.video.onloadedmetadata = () => {
    this.$emit("xplpc-camera-video-live", s);
  }, this.$emit("xplpc-camera-started", s);
}, stopStreamedVideo(s) {
  n.d("[Camera : stopStreamedVideo]");
  const e = s.srcObject;
  e.getTracks().forEach((a) => {
    a.stop(), this.$emit("xplpc-camera-stopped", e), this.$refs.video.srcObject = null, this.source = null;
  });
}, stop() {
  n.d("[Camera : stop]"), this.$refs.video && this.$refs.video.srcObject && this.stopStreamedVideo(this.$refs.video);
}, async start() {
  n.d("[Camera : start]"), await navigator.mediaDevices.getUserMedia({ audio: false, video: true }), this.deviceId || this.loadCameraList(), this.deviceId && (this.setupMedia(), this.loadCamera(this.deviceId));
}, pause() {
  n.d("[Camera : pause]"), this.$refs.video && this.$refs.video.srcObject && this.$refs.video.pause();
}, resume() {
  n.d("[Camera : resume]"), this.$refs.video && this.$refs.video.srcObject && this.$refs.video.play();
}, processImage() {
  setInterval(async () => {
    this.getCanvas();
    const s = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height), e = M.createFromArrayBuffer(s.data), t = performance.now(), a = new _("sample.image.grayscale.dataview", new b("dataView", e));
    await U.call(a);
    const p = performance.now() - t, m = M.createUint8ClampedArrayFromPtr(e.ptr, e.size);
    this.ctx.putImageData(new ImageData(m, this.canvas.width, this.canvas.height), 0, 0);
    const w = this.$refs.preview;
    w.src = this.canvas.toDataURL(), M.free(e), this.cameraInfo = "Time to process: " + (p / 1e3).toFixed(3) + ` seconds
Image size: ` + e.size / 1024 + " kb";
  }, 16);
}, testMediaAccess() {
  n.d("[Camera : testMediaAccess]");
  const s = { video: true };
  this.resolution && (s.video = {}, s.video.width = this.resolution.width, s.video.height = this.resolution.height), navigator.mediaDevices.getUserMedia(s).then((e) => {
    e.getTracks().forEach((a) => {
      a.stop();
    }), this.loadCameraList();
  }).catch((e) => this.$emit("xplpc-camera-error", e));
}, loadCamera(s) {
  n.d("[Camera : loadCamera]");
  const e = { video: { deviceId: { exact: s } } };
  this.resolution && (e.video.width = this.resolution.width, e.video.height = this.resolution.height), navigator.mediaDevices.getUserMedia(e).then((t) => this.loadSrcStream(t)).catch((t) => this.$emit("xplpc-camera-error", t));
}, capture() {
  return n.d("[Camera : capture]"), this.getCanvas().toDataURL(this.screenshotFormat);
}, getCanvas() {
  const s = this.$refs.video;
  if (!this.ctx) {
    this.destWidth = 240, this.destHeight = this.destWidth * s.videoHeight / s.videoWidth, this.destHeight > 320 && (this.destHeight = 320, this.destWidth = this.destHeight * s.videoWidth / s.videoHeight);
    const a = this.$refs.canvas;
    a.width = this.destWidth, a.height = this.destHeight, this.canvas = a, s.width = this.destWidth, s.height = this.destHeight, this.ctx = this.canvas.getContext("2d", { willReadFrequently: true });
  }
  const { ctx: e, canvas: t } = this;
  return e.drawImage(s, 0, 0, this.destWidth, this.destHeight), t;
}, setDeviceId(s) {
  n.d("[Camera : setDeviceId] Device: " + s), this.deviceId = s;
}, canPlay() {
  n.d("[Camera : canPlay]"), this.getCanvas(), this.processImage(), this.visible = true;
} } }, z = { class: "text-center" }, j = { class: "camera-container text-center" }, W = ["src", "autoplay", "playsinline"], G = { key: 0, ref: "preview", class: "camera-image" }, N = { key: 0, class: "camera-info" }, X = { ref: "canvas", style: { display: "none" } };
function J(s, e, t, a, o, p) {
  return g(), v("div", z, [i("div", j, [i("video", { ref: "video", src: o.source, autoplay: t.autoplay, playsinline: t.playsinline, style: { display: "none" }, onCanplay: e[0] || (e[0] = (...m) => p.canPlay && p.canPlay(...m)) }, null, 40, W), o.visible ? (g(), v("img", G, null, 512)) : P("", true)]), o.visible ? (g(), v("div", N, [i("p", null, R(o.cameraInfo), 1)])) : P("", true), i("canvas", X, null, 512)]);
}
const Y = T(k, [["render", J]]), K = { class: "container" }, Q = { key: 0 }, Z = { class: "text-left" }, ee = { class: "my-5 text-center" }, te = { id: "responseMessageForBattery", class: "text-center" }, se = { class: "mb-3" }, ae = { class: "mb-3" }, ie = { class: "mb-3 form-check" }, re = { class: "my-5 text-center" }, ne = { id: "responseMessageForForm", class: "text-center" }, oe = { class: "mb-5 text-center" }, ce = { key: 1 }, L = "Use account paulo/123456 to success login", le = "Press Button To Execute", he = B({ __name: "MainPage", setup(s) {
  const e = O(), t = f(null), a = f(null), o = f(false), p = f(), m = f(L), w = f(le);
  async function E(c) {
    c.preventDefault(), y("Calling...");
    const r = new _("sample.login", new b("username", t.value), new b("password", a.value), new b("remember", o.value)), l = await U.call(r);
    y(l ? "Response: " + l : "Response: ERROR!");
  }
  async function F(c) {
    c.preventDefault(), C("Calling...");
    const r = new _("platform.battery.level", new b("suffix", "%")), l = await U.call(r);
    C(l ? "Response: " + l : "Response: ERROR!");
  }
  async function A(c) {
    c.preventDefault(), p.value?.start();
  }
  function y(c) {
    c ? m.value = c : m.value = "ERROR!";
  }
  function C(c) {
    c ? w.value = c : w.value = "ERROR!";
  }
  function D() {
    t.value = null, a.value = null, o.value = false, m.value = L;
  }
  return (c, r) => (g(), v("div", K, [V(e).isLoaded ? (g(), v("div", Q, [i("div", Z, [r[7] || (r[7] = i("h4", { id: "pageTitle", class: "my-5 text-center" }, "BATTERY LEVEL", -1)), i("p", ee, [i("small", te, R(w.value), 1)]), i("div", { class: "form-bt-group text-center mb-5" }, [i("button", { type: "button", class: "btn btn-primary", onClick: F }, "Submit")]), r[8] || (r[8] = i("hr", null, null, -1)), r[9] || (r[9] = i("h4", { id: "pageTitle", class: "my-5 text-center" }, "LOGIN", -1)), i("form", { onSubmit: E }, [i("div", se, [r[3] || (r[3] = i("label", { for: "fieldUsername", class: "form-label" }, "Username", -1)), x(i("input", { id: "fieldUsername", "onUpdate:modelValue": r[0] || (r[0] = (l) => t.value = l), type: "text", class: "form-control" }, null, 512), [[S, t.value]])]), i("div", ae, [r[4] || (r[4] = i("label", { for: "fieldPassword", class: "form-label" }, "Password", -1)), x(i("input", { id: "fieldPassword", "onUpdate:modelValue": r[1] || (r[1] = (l) => a.value = l), type: "password", class: "form-control" }, null, 512), [[S, a.value]])]), i("div", ie, [x(i("input", { id: "fieldRemember", "onUpdate:modelValue": r[2] || (r[2] = (l) => o.value = l), type: "checkbox", class: "form-check-input" }, null, 512), [[H, o.value]]), r[5] || (r[5] = i("label", { class: "form-check-label", for: "fieldRemember" }, "Remember", -1))]), i("p", re, [i("small", ne, R(m.value), 1)]), i("div", { class: "form-bt-group text-center mb-5" }, [r[6] || (r[6] = i("button", { type: "submit", class: "btn btn-primary" }, "Submit", -1)), i("button", { type: "button", class: "btn btn-primary", onClick: D }, "Clear")])], 32), r[10] || (r[10] = i("hr", null, null, -1)), r[11] || (r[11] = i("h4", { id: "pageTitle", class: "my-5 text-center" }, "CAMERA", -1)), i("div", oe, [I(Y, { ref_key: "camera", ref: p, width: 240, height: 320 }, null, 512)]), i("div", { class: "form-bt-group text-center mb-5" }, [i("button", { type: "button", class: "btn btn-primary", onClick: A }, "Open")])])])) : (g(), v("div", ce, r[12] || (r[12] = [i("div", { class: "text-center" }, [i("p", { class: "my-5" }, "Loading...")], -1)])))]));
} });
export {
  he as default
};
