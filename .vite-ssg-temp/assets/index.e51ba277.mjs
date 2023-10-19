import { defineComponent, ref, resolveComponent, unref, createVNode, toDisplayString, mergeProps, withScopeId, useSSRContext } from "vue";
import { ssrRenderStyle, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttrs } from "@vue/server-renderer";
import { useI18n } from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import { useHead } from "@vueuse/head";
const articles = [
  {
    date: "26 March 2021",
    title: "Hello world",
    description: "Description.",
    slug: "hello-world",
    category: "/"
  },
  {
    date: "30 March 2022",
    title: "Docker Event",
    description: "Meetup for Docker developers",
    slug: "docker-event",
    category: "/"
  },
  {
    date: "15 April 2022",
    title: "C/C++ autotools",
    description: "C/C++ autotools",
    slug: "autotools",
    category: "/languages/c/"
  }
];
const _withId = /* @__PURE__ */ withScopeId("data-v-1e4a62e2");
const _sfc_main$1 = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const articleCount = ref(5);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[--><div class="relative flex flex-col" data-v-1e4a62e2><div class="absolute border-r-2 border-gray-200 bottom-1 top-1 dark:border-gray-800" style="${ssrRenderStyle({ "z-index": "-1", "left": "15px" })}" data-v-1e4a62e2></div><ul class="flex flex-col justify-end space-y-10 md:space-y-8" data-v-1e4a62e2><!--[-->`);
      ssrRenderList(unref(articles).slice(0, articleCount.value), (article, index) => {
        _push(`<li class="article-item" data-v-1e4a62e2><div class="article-heading" data-v-1e4a62e2><div class="article-indicator" data-v-1e4a62e2></div>`);
        _push(ssrRenderComponent(_component_router_link, {
          to: `/blog${article.category}${article.slug}`,
          class: "article-link article-headline"
        }, {
          default: _withId((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="article-date" data-v-1e4a62e2${_scopeId}>${ssrInterpolate(new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric"
              }).format(new Date(article.date)))}</span><span class="article-divider" data-v-1e4a62e2${_scopeId}>\u2014</span><span class="article-title" data-v-1e4a62e2${_scopeId}>${ssrInterpolate(article.title)}</span>`);
            } else {
              return [
                createVNode("span", { class: "article-date" }, toDisplayString(new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric"
                }).format(new Date(article.date))), 1),
                createVNode("span", { class: "article-divider" }, "\u2014"),
                createVNode("span", { class: "article-title" }, toDisplayString(article.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
        if (article.description) {
          _push(`<div class="article-description" data-v-1e4a62e2>${ssrInterpolate(article.description)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
      if (articleCount.value < unref(articles).length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "more-container" }, _attrs))} data-v-1e4a62e2><button class="more-article" data-v-1e4a62e2>Show more</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const Articles_vue_vue_type_style_index_0_scoped_true_lang = "";
_sfc_main$1.__scopeId = "data-v-1e4a62e2";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/components/Articles.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: "Blog"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Articles = _sfc_main$1;
      _push(`<!--[--><h1 class="inline-flex mb-8 text-2xl font-bold">${ssrInterpolate(unref(t)("button.articles"))}</h1>`);
      _push(ssrRenderComponent(_component_Articles, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
