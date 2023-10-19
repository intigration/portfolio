import { defineComponent, ref, mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "@vue/server-renderer";
import { useI18n } from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import { useHead } from "@vueuse/head";
const _sfc_main$1 = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    ref(5);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<iframe${ssrRenderAttrs(mergeProps({
        src: "http://localhost:3333/covid-tracker/index.html",
        width: "100%",
        height: "900px"
      }, _attrs))} data-v-480e3a16></iframe>`);
    };
  }
});
const Timeline_vue_vue_type_style_index_0_scoped_true_lang = "";
_sfc_main$1.__scopeId = "data-v-480e3a16";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/components/Timeline.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: "Vue"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="inline-flex mb-8 text-2xl font-bold">${ssrInterpolate(unref(t)("button.tracker"))}</h1>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/tracker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
