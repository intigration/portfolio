import { openBlock, createBlock, createVNode, defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "@vue/server-renderer";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M21.677 14l-1.245-3.114A2.986 2.986 0 0 0 17.646 9h-4.092a3.002 3.002 0 0 0-1.544.428L7 12.434V18h2v-4.434l3-1.8v11.931l-3.462 5.194L10.202 30L14 24.303V11h3.646a.995.995 0 0 1 .928.629L20.323 16H26v-2z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createVNode("path", {
  d: "M17.051 18.316L19 24.162V30h2v-6.162l-2.051-6.154l-1.898.632z",
  fill: "currentColor"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createVNode("path", {
  d: "M16.5 8A3.5 3.5 0 1 1 20 4.5A3.504 3.504 0 0 1 16.5 8zm0-5A1.5 1.5 0 1 0 18 4.5A1.502 1.502 0 0 0 16.5 3z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2,
    _hoisted_3,
    _hoisted_4
  ]);
}
const __vite_components_0 = { render };
const _sfc_main = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    useRouter();
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_carbon_pedestrian = __vite_components_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><p class="text-4xl">`);
      _push(ssrRenderComponent(_component_carbon_pedestrian, { class: "inline-block" }, null, _parent));
      _push(`</p><p>${ssrInterpolate(unref(t)("intro.hi", { name: props.name }))}</p><p class="text-sm opacity-50"><em>${ssrInterpolate(unref(t)("intro.dynamic-route"))}</em></p><div><button class="m-3 mt-8 text-sm">${ssrInterpolate(unref(t)("button.back"))}</button></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/hi/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
