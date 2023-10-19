import { defineComponent, onMounted, mergeProps, unref, useSSRContext, withScopeId } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "@vue/server-renderer";
import { i as isDark } from "../main.mjs";
import { useHead } from "@vueuse/head";
import "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import "nprogress";
import "vite-ssg";
import "vue-router";
import "@vueuse/core";
const tweets = [
  { url: "https://www.linkedin.com/company/phoenix-nap/" },
  { url: "https://twitter.com/EngrFerhan/status/1513524521013329928" },
  { url: "https://twitter.com/EngrFerhan/status/1508341985081442304" },
  { url: "https://twitter.com/EngrFerhan/status/1508336542460301321" },
  { url: "https://twitter.com/EngrFerhan/status/1508340849221976065" },
  { url: "https://twitter.com/EngrFerhan/status/1508341649709088777" },
  { url: "https://www.linkedin.com/posts/engr-farhan_square-improving-quality-activity-7114582653164515328-4_U6" }
];
const _sfc_main$2 = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      let externalScript = document.createElement("script");
      externalScript.setAttribute("src", "https://platform.twitter.com/widgets.js");
      document.head.appendChild(externalScript);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" }, _attrs))} data-v-730be811><!--[-->`);
      ssrRenderList(unref(tweets), (tweet, index) => {
        _push(`<blockquote class="twitter-tweet" data-dnt="true"${ssrRenderAttr("data-theme", unref(isDark) ? "dark" : "light")} data-v-730be811><a class="rounded-lg w-full h-full py-4 px-4"${ssrRenderAttr("href", tweet.url)} target="_blank" rel="noopener" data-v-730be811><div class="animate-pulse flex space-x-4" data-v-730be811><div class="rounded-full bg-gray-300 dark:bg-gray-600 h-12 w-12" data-v-730be811></div><div class="flex-1 space-y-4 py-1" data-v-730be811><div class="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4" data-v-730be811></div><div class="space-y-2" data-v-730be811><div class="h-4 bg-gray-200 dark:bg-gray-700 rounded" data-v-730be811></div><div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" data-v-730be811></div></div></div></div></a></blockquote>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const Tweets_vue_vue_type_style_index_0_scoped_true_lang = "";
_sfc_main$2.__scopeId = "data-v-730be811";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/components/Tweets.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Subscribe_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = {};
const _withId = /* @__PURE__ */ withScopeId("data-v-702e220c");
const _sfc_ssrRender = /* @__PURE__ */ _withId((_ctx, _push, _parent, _attrs) => {
  const _component_Tweets = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))} data-v-702e220c><form action="https://host.m3-solutions.io" method="post" target="_blank" validate data-v-702e220c><label for="mce-EMAIL" class="inline-flex mb-8 text-2xl font-bold" data-v-702e220c> Technology Trending is a publishing service that consolidates all of the social feeds into one channel or blog!</label><div class="flex flex-col space-y-2 md:space-x-2 md:space-y-0 md:flex-row" data-v-702e220c><input name="EMAIL" id="mce-EMAIL" class="form-input" type="email" placeholder="Stay informed?" required data-v-702e220c><input id="mc-embedded-subscribe" type="submit" value="Subscribe" name="subscribe" class="form-button" data-v-702e220c></div></form><h1 class="inline-flex my-8 text-2xl font-bold" data-v-702e220c></h1>`);
  _push(ssrRenderComponent(_component_Tweets, null, null, _parent));
  _push(`</div>`);
});
_sfc_main$1.ssrRender = _sfc_ssrRender;
_sfc_main$1.__scopeId = "data-v-702e220c";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/components/Subscribe.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Technology developing Updates! "
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Subscribe = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Subscribe, null, null, _parent));
      _push(`<iframe class="flex flex-col" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6547777082062102528" height="700" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe><iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7114582652485025794" height="476" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/newsletter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
