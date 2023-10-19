import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "@vue/server-renderer";
import { useI18n } from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import { useHead } from "@vueuse/head";
const _sfc_main = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "404 - Liyas Thomas"
    });
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>${ssrInterpolate(unref(t)("not-found"))}</div>`);
    };
  }
});
const block0 = {};
if (typeof block0 === "function")
  block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/[...all].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
