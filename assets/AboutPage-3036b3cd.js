import { d as p, u as i, c as n, a as e, e as l, t as d, h as o, g as m, i as b, j as _, o as s, _ as g } from "./index-6cb5a6a0.js";
const x = { class: "container" }, f = { class: "text-center" }, k = { key: 0, class: "q-mt-lg" }, c = { key: 1, class: "q-mt-lg" }, v = p({ __name: "AboutPage", setup(y) {
  const r = i(), a = "2025-02-19 02:31:16 UTC";
  return (C, t) => {
    const u = _("router-link");
    return s(), n("div", x, [t[9] || (t[9] = e("h4", { class: "my-5 text-center" }, "About", -1)), e("div", f, [l(r).isLoaded ? (s(), n("div", k, [e("p", null, "Generated at: " + d(l(a)), 1)])) : (s(), n("div", c, t[0] || (t[0] = [e("p", null, "Loading...", -1)]))), t[2] || (t[2] = e("br", null, null, -1)), t[3] || (t[3] = e("p", null, [o(" This is an open-source software made by: "), e("br"), e("a", { href: "https://github.com/paulocoutinhox", target: "_blank" }, "Paulo Coutinho"), o(". ")], -1)), t[4] || (t[4] = e("br", null, null, -1)), t[5] || (t[5] = e("p", null, [o(" You can see the source code here: "), e("br"), e("a", { href: "https://github.com/xplpc/xplpc", target: "_blank" }, " https://github.com/xplpc/xplpc ")], -1)), t[6] || (t[6] = e("br", null, null, -1)), t[7] || (t[7] = e("hr", null, null, -1)), t[8] || (t[8] = e("br", null, null, -1)), m(u, { class: "btn btn-primary", to: { name: "main" } }, { default: b(() => t[1] || (t[1] = [o(" Back to Home ")])), _: 1 })])]);
  };
} });
const B = g(v, [["__scopeId", "data-v-0384f39a"]]);
export {
  B as default
};
