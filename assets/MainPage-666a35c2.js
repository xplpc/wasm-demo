import { X as l, L as P, E as D, _ as T, o as f, c as v, a, b as U, t as _, d as B, u as I, r as p, e as O, w as x, v as L, f as V, g as H } from "./index-6cb5a6a0.js";
class E {
  _isAcquired = false;
  _acquiredMap = /* @__PURE__ */ new Map();
  waitingMap = /* @__PURE__ */ new Map();
  waitingList = [];
  acquire(e) {
    if (e) {
      if (!this._acquiredMap.has(e) || !this._acquiredMap.get(e))
        return this._acquiredMap.set(e, true), Promise.resolve();
    } else if (!this._isAcquired)
      return this._isAcquired = true, Promise.resolve();
    return new Promise((t) => {
      if (e)
        if (this.waitingMap.has(e)) {
          const i = this.waitingMap.get(e);
          i && (i.push(t), this.waitingMap.set(e, i));
        } else
          this.waitingMap.set(e, [t]);
      else
        this.waitingList.push(t);
    });
  }
  isAcquired(e) {
    return e ? this._acquiredMap.has(e) ? this._acquiredMap.get(e) : false : this._isAcquired;
  }
  release(e) {
    if (e) {
      if (!this._acquiredMap.has(e) || !this._acquiredMap.get(e))
        throw new Error("Please acquire a lock for " + e + " before releasing!!");
      {
        const t = this.waitingMap.get(e);
        if (t && t.length > 0) {
          const i = this.waitingMap.get(e)?.shift();
          i && i();
        } else
          this.waitingMap.has(e) && this.waitingMap.delete(e), this._acquiredMap.set(e, false);
      }
    } else if (this._isAcquired)
      if (this.waitingList.length > 0) {
        const t = this.waitingList.shift();
        t && t();
      } else
        this._isAcquired = false;
    else
      throw new Error("Please acquire a lock before releasing!!");
  }
}
class h {
  static instance;
  list = /* @__PURE__ */ new Map();
  lock = new E();
  constructor() {
  }
  static shared() {
    return h.instance || (h.instance = new h()), h.instance;
  }
  async add(e, t) {
    return await this.lock.acquire(), this.list.set(e, t), this.lock.release();
  }
  async execute(e, t) {
    if (await this.lock.acquire(), this.list.has(e)) {
      const i = this.list.get(e);
      return this.list.delete(e), this.lock.release(), i?.(t);
    }
    return this.lock.release();
  }
  async count() {
    await this.lock.acquire();
    const e = this.list.size;
    return this.lock.release(), e;
  }
}
class d {
  static instance;
  lock = new E();
  uid = 0;
  constructor() {
  }
  static shared() {
    return d.instance || (d.instance = new d()), d.instance;
  }
  static async generate() {
    await d.shared().lock.acquire();
    const e = "JS-" + (++d.shared().uid).toString();
    return d.shared().lock.release(), e;
  }
}
class C {
  static call(e) {
    return new Promise((t) => {
      if (!l.shared().initialized)
        return P.e("[XClient : call] The WASM module is not initialized"), t(void 0);
      try {
        d.generate().then((i) => {
          typeof e == "string" ? (h.shared().add(i, (n) => t(n)), l.shared().module.Client.call(e, (n) => {
            h.shared().execute(i, n);
          })) : (h.shared().add(i, (n) => t(l.shared().config.serializer.decodeFunctionReturnValue(n))), l.shared().module.Client.call(e.data(), (n) => {
            h.shared().execute(i, n);
          }));
        });
      } catch (i) {
        return P.e("[XClient : call] Error: " + D.get(i)), t(void 0);
      }
    });
  }
}
class w {
  name;
  value;
  constructor(e, t) {
    this.name = e, this.value = t;
  }
}
class R {
  functionName;
  params;
  constructor(e, ...t) {
    this.functionName = e, this.params = t;
  }
  data() {
    return l.shared().config.serializer.encodeRequest(this.functionName, ...this.params);
  }
}
class b {
  ptr;
  size;
  constructor(e, t) {
    this.ptr = e, this.size = t;
  }
  static createFromArrayBuffer(e) {
    const t = e.byteLength, i = l.shared().module._malloc(t);
    return l.shared().module.HEAPU8.set(e, i), new b(i, t);
  }
  static createUint8ArrayFromPtr(e, t) {
    return new Uint8Array(l.shared().module.HEAPU8.buffer, e, t);
  }
  static createUint8ClampedArrayFromPtr(e, t) {
    return new Uint8ClampedArray(l.shared().module.HEAPU8.buffer, e, t);
  }
  static free(e) {
    l.shared().module._free(e.ptr);
  }
}
const k = { name: "VueCamera", props: { width: { type: [Number, String], default: "100%" }, height: { type: [Number, String], default: 500 }, autoplay: { type: Boolean, default: true }, screenshotFormat: { type: String, default: "image/jpeg" }, selectFirstDevice: { type: Boolean, default: true }, playsinline: { type: Boolean, default: true }, resolution: { type: Object, default: null, validator: (s) => s.height && s.width } }, emits: ["xplpc-camera-list", "xplpc-camera-not-supported", "xplpc-camera-changed", "xplpc-camera-stopped", "xplpc-camera-video-live", "xplpc-camera-started", "xplpc-camera-error"], data() {
  return { source: null, canvas: null, camerasListEmitted: false, cameraList: [], deviceId: "", visible: false, ctx: null, cameraInfo: "XPLPC", destWidth: 0, destHeight: 0 };
}, watch: { deviceId: function(s) {
  this.changeCamera(s);
} }, beforeUnmount() {
  this.stop();
}, methods: { legacyGetUserMediaSupport() {
  return (s) => {
    const e = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    return e ? new Promise(function(t, i) {
      e.call(navigator, s, t, i);
    }) : Promise.reject(new Error("[Camera : legacyGetUserMediaSupport] The method getUserMedia is not implemented in this browser"));
  };
}, setupMedia() {
  navigator.mediaDevices === void 0 && (navigator.mediaDevices = {}), navigator.mediaDevices.getUserMedia === void 0 && (navigator.mediaDevices.getUserMedia = this.legacyGetUserMediaSupport()), this.testMediaAccess();
}, loadCameraList() {
  navigator.mediaDevices.enumerateDevices().then((s) => {
    for (let e = 0; e !== s.length; ++e) {
      const t = s[e];
      t.kind === "videoinput" && this.cameraList.push(t);
    }
  }).then(() => {
    this.camerasListEmitted || (this.selectFirstDevice && this.cameraList.length > 0 && this.setDeviceId(this.cameraList[0].deviceId), this.$emit("xplpc-camera-list", this.cameraList), this.camerasListEmitted = true);
  }).catch((s) => this.$emit("xplpc-camera-not-supported", s));
}, changeCamera(s) {
  this.stop(), this.$emit("xplpc-camera-changed", s), this.loadCamera(s);
}, loadSrcStream(s) {
  "srcObject" in this.$refs.video ? this.$refs.video.srcObject = s : this.source = window.HTMLMediaElement.srcObject(s), this.$refs.video.onloadedmetadata = () => {
    this.$emit("xplpc-camera-video-live", s);
  }, this.$emit("xplpc-camera-started", s);
}, stopStreamedVideo(s) {
  const e = s.srcObject;
  e.getTracks().forEach((i) => {
    i.stop(), this.$emit("xplpc-camera-stopped", e), this.$refs.video.srcObject = null, this.source = null;
  });
}, stop() {
  this.$refs.video && this.$refs.video.srcObject && this.stopStreamedVideo(this.$refs.video);
}, async start() {
  await navigator.mediaDevices.getUserMedia({ audio: false, video: true }), this.deviceId || this.loadCameraList(), this.deviceId && (this.setupMedia(), this.loadCamera(this.deviceId));
}, pause() {
  this.$refs.video && this.$refs.video.srcObject && this.$refs.video.pause();
}, resume() {
  this.$refs.video && this.$refs.video.srcObject && this.$refs.video.play();
}, processImage() {
  setInterval(async () => {
    this.getCanvas();
    const s = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height), e = b.createFromArrayBuffer(s.data), t = performance.now(), i = new R("sample.image.grayscale.dataview", new w("dataView", e));
    await C.call(i);
    const m = performance.now() - t, u = b.createUint8ClampedArrayFromPtr(e.ptr, e.size);
    this.ctx.putImageData(new ImageData(u, this.canvas.width, this.canvas.height), 0, 0);
    const g = this.$refs.preview;
    g.src = this.canvas.toDataURL(), b.free(e), this.cameraInfo = "Time to process: " + (m / 1e3).toFixed(3) + ` seconds
Image size: ` + e.size / 1024 + " kb";
  }, 16);
}, testMediaAccess() {
  const s = { video: true };
  this.resolution && (s.video = {}, s.video.width = this.resolution.width, s.video.height = this.resolution.height), navigator.mediaDevices.getUserMedia(s).then((e) => {
    e.getTracks().forEach((i) => {
      i.stop();
    }), this.loadCameraList();
  }).catch((e) => this.$emit("xplpc-camera-error", e));
}, loadCamera(s) {
  const e = { video: { deviceId: { exact: s } } };
  this.resolution && (e.video.width = this.resolution.width, e.video.height = this.resolution.height), navigator.mediaDevices.getUserMedia(e).then((t) => this.loadSrcStream(t)).catch((t) => this.$emit("xplpc-camera-error", t));
}, capture() {
  return this.getCanvas().toDataURL(this.screenshotFormat);
}, getCanvas() {
  const s = this.$refs.video;
  if (!this.ctx) {
    this.destWidth = 240, this.destHeight = this.destWidth * s.videoHeight / s.videoWidth, this.destHeight > 320 && (this.destHeight = 320, this.destWidth = this.destHeight * s.videoWidth / s.videoHeight);
    const i = this.$refs.canvas;
    i.width = this.destWidth, i.height = this.destHeight, this.canvas = i, s.width = this.destWidth, s.height = this.destHeight, this.ctx = this.canvas.getContext("2d", { willReadFrequently: true });
  }
  const { ctx: e, canvas: t } = this;
  return e.drawImage(s, 0, 0, this.destWidth, this.destHeight), t;
}, setDeviceId(s) {
  this.deviceId = s;
}, canPlay() {
  this.getCanvas(), this.processImage(), this.visible = true;
} } }, z = { class: "text-center" }, j = { class: "camera-container text-center" }, W = ["src", "autoplay", "playsinline"], N = { key: 0, ref: "preview", class: "camera-image" }, G = { key: 0, class: "camera-info" }, X = { ref: "canvas", style: { display: "none" } };
function J(s, e, t, i, n, m) {
  return f(), v("div", z, [a("div", j, [a("video", { ref: "video", src: n.source, autoplay: t.autoplay, playsinline: t.playsinline, style: { display: "none" }, onCanplay: e[0] || (e[0] = (...u) => m.canPlay && m.canPlay(...u)) }, null, 40, W), n.visible ? (f(), v("img", N, null, 512)) : U("", true)]), n.visible ? (f(), v("div", G, [a("p", null, _(n.cameraInfo), 1)])) : U("", true), a("canvas", X, null, 512)]);
}
const Y = T(k, [["render", J]]), K = { class: "container" }, Q = { key: 0 }, Z = { class: "text-left" }, ee = { class: "my-5 text-center" }, te = { id: "responseMessageForBattery", class: "text-center" }, se = { class: "mb-3" }, ie = { class: "mb-3" }, ae = { class: "mb-3 form-check" }, re = { class: "my-5 text-center" }, ne = { id: "responseMessageForForm", class: "text-center" }, oe = { class: "mb-5 text-center" }, ce = { key: 1 }, $ = "Use account paulo/123456 to success login", le = "Press Button To Execute", he = B({ __name: "MainPage", setup(s) {
  const e = I(), t = p(null), i = p(null), n = p(false), m = p(), u = p($), g = p(le);
  async function F(o) {
    o.preventDefault(), y("Calling...");
    const r = new R("sample.login", new w("username", t.value), new w("password", i.value), new w("remember", n.value)), c = await C.call(r);
    y(c ? "Response: " + c : "Response: ERROR!");
  }
  async function A(o) {
    o.preventDefault(), M("Calling...");
    const r = new R("platform.battery.level", new w("suffix", "%")), c = await C.call(r);
    M(c ? "Response: " + c : "Response: ERROR!");
  }
  async function S(o) {
    o.preventDefault(), m.value?.start();
  }
  function y(o) {
    o ? u.value = o : u.value = "ERROR!";
  }
  function M(o) {
    o ? g.value = o : g.value = "ERROR!";
  }
  function q() {
    t.value = null, i.value = null, n.value = false, u.value = $;
  }
  return (o, r) => (f(), v("div", K, [O(e).isLoaded ? (f(), v("div", Q, [a("div", Z, [r[7] || (r[7] = a("h4", { id: "pageTitle", class: "my-5 text-center" }, "BATTERY LEVEL", -1)), a("p", ee, [a("small", te, _(g.value), 1)]), a("div", { class: "form-bt-group text-center mb-5" }, [a("button", { type: "button", class: "btn btn-primary", onClick: A }, "Submit")]), r[8] || (r[8] = a("hr", null, null, -1)), r[9] || (r[9] = a("h4", { id: "pageTitle", class: "my-5 text-center" }, "LOGIN", -1)), a("form", { onSubmit: F }, [a("div", se, [r[3] || (r[3] = a("label", { for: "fieldUsername", class: "form-label" }, "Username", -1)), x(a("input", { id: "fieldUsername", "onUpdate:modelValue": r[0] || (r[0] = (c) => t.value = c), type: "text", class: "form-control" }, null, 512), [[L, t.value]])]), a("div", ie, [r[4] || (r[4] = a("label", { for: "fieldPassword", class: "form-label" }, "Password", -1)), x(a("input", { id: "fieldPassword", "onUpdate:modelValue": r[1] || (r[1] = (c) => i.value = c), type: "password", class: "form-control" }, null, 512), [[L, i.value]])]), a("div", ae, [x(a("input", { id: "fieldRemember", "onUpdate:modelValue": r[2] || (r[2] = (c) => n.value = c), type: "checkbox", class: "form-check-input" }, null, 512), [[V, n.value]]), r[5] || (r[5] = a("label", { class: "form-check-label", for: "fieldRemember" }, "Remember", -1))]), a("p", re, [a("small", ne, _(u.value), 1)]), a("div", { class: "form-bt-group text-center mb-5" }, [r[6] || (r[6] = a("button", { type: "submit", class: "btn btn-primary" }, "Submit", -1)), a("button", { type: "button", class: "btn btn-primary", onClick: q }, "Clear")])], 32), r[10] || (r[10] = a("hr", null, null, -1)), r[11] || (r[11] = a("h4", { id: "pageTitle", class: "my-5 text-center" }, "CAMERA", -1)), a("div", oe, [H(Y, { ref_key: "camera", ref: m, width: 240, height: 320 }, null, 512)]), a("div", { class: "form-bt-group text-center mb-5" }, [a("button", { type: "button", class: "btn btn-primary", onClick: S }, "Open")])])])) : (f(), v("div", ce, r[12] || (r[12] = [a("div", { class: "text-center" }, [a("p", { class: "my-5" }, "Loading...")], -1)])))]));
} });
export {
  he as default
};
