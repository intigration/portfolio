import { defineComponent, unref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttr } from "@vue/server-renderer";
import { useI18n } from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import { useHead } from "@vueuse/head";
const _sfc_main = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: "Synopsis"
    });
    const form = {
      name: "",
      email: "",
      message: ""
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="inline-flex mb-8 text-2xl font-bold" data-v-10af8080>${ssrInterpolate(unref(t)("button.about"))}</h1><form name="contact" data-netlify="true" data-v-10af8080><div class="flex flex-col space-y-2 max-w-sm" data-v-10af8080><input type="text" name="name"${ssrRenderAttr("value", form.name)} class="form-input" placeholder="Name" data-v-10af8080><input class="form-input" type="email" name="email"${ssrRenderAttr("value", form.email)} placeholder="E-mail" data-v-10af8080><textarea name="message" rows="10" class="form-input" placeholder="Message" data-v-10af8080>${ssrInterpolate(form.message)}</textarea><div data-v-10af8080><button type="submit" class="form-button" data-v-10af8080> Send </button></div></div></form><!--]-->`);
    };
  }
});
const about_vue_vue_type_style_index_0_scoped_true_lang = "";
_sfc_main.__scopeId = "data-v-10af8080";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
