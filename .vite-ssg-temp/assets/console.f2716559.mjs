import "https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.7/dat.gui.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js";
import { useSSRContext, defineComponent, unref } from "vue";
import { ssrInterpolate, ssrRenderComponent } from "@vue/server-renderer";
import { useI18n } from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import { useHead } from "@vueuse/head";
const Cv_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="background"><canvas id="canvas" width="500" height="500"></canvas></div><span id="measureWidth"></span><div class="intro-box"><h1 class="title"></h1><h2 class="oneliner"></h2><h2 class="title"></h2></div><legend><ul></ul></legend><div class="chart"><div class="skills"></div></div><div class="skillbars-container"><div class="skillbars"></div></div><div class="social-icons"></div><div id="scroll-left">\u2039</div><div id="scroll-right">\u203A</div><!--]-->`);
}
_sfc_main$1.ssrRender = _sfc_ssrRender;
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/components/Cv.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: "Timeline - Muhamamd Farhan"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Cv = _sfc_main$1;
      _push(`<!--[--><h1 class="inline-flex mb-8 text-2xl font-bold">${ssrInterpolate(unref(t)("button.events"))}</h1>`);
      _push(ssrRenderComponent(_component_Cv, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/console.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
