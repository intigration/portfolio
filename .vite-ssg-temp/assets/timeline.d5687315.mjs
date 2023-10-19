import { defineComponent, ref, unref, createVNode, resolveDynamicComponent, toDisplayString, mergeProps, withScopeId, useSSRContext } from "vue";
import { ssrRenderStyle, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderAttrs, ssrRenderComponent } from "@vue/server-renderer";
import { useI18n } from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import { useHead } from "@vueuse/head";
const timeline = [
  {
    date: "26 March 2021",
    title: "Spoke at GitHub Satellite India",
    description: "Journey of a project made in India: Hoppscotch.",
    link: "https://githubsatellite.com/sessions/journey-of-a-project-made-in-india-hoppscotch"
  },
  {
    date: "20 March 2021",
    title: "200k users on Hoppscotch",
    description: "28,000 GitHub stars, 450k+ Docker pulls.",
    link: "https://twitter.com/liyasthomas/status/1375832216689729544"
  },
  {
    date: "24 February 2021",
    title: "Won Hashnode + AWS Amplify Hackathon",
    description: "Project Savvy.",
    link: "https://liyasthomas.hashnode.dev/savvy-build-better-products-with-customer-feedback"
  },
  {
    date: "20 January 2021",
    title: "Won Hashnode + Vercel Hackathon",
    description: "Project ebb.",
    link: "https://liyasthomas.hashnode.dev/ebb-feel-life-again-from-a-new-perspective"
  },
  {
    date: "28 December 2020",
    title: "Joined Appwrite",
    description: "Product designer.",
    link: ""
  },
  {
    date: "27 November 2020",
    title: "10,000+ GitHub stars for Hoppscotch",
    description: "",
    link: "https://dev.to/liyasthomas/celebrating-10-000-stars-on-github-together-4ilg"
  },
  {
    date: "31 October 2020",
    title: "Won 2 HackerNoon Noonies Awards 2020",
    description: "Contributor of the Year - TESTING & FUNDRAISING.",
    link: ""
  },
  {
    date: "30 October 2020",
    title: "Hoppscotch got featured in GitHub Made in India collection",
    description: "Open source projects from India.",
    link: "https://github.com/collections/made-in-india"
  },
  {
    date: "16 October 2020",
    title: "Spoke at GitHub Open Source Friday",
    description: "",
    link: "https://dev.to/github/to-be-successful-as-a-developer-you-need-be-consistent-30ob"
  },
  {
    date: "6 October 2020",
    title: "Got featured in Open Source Contributor Summit",
    description: "",
    link: ""
  },
  {
    date: "13 september 2020",
    title: "Won FOSS Hack 2020",
    description: "Project ebb.",
    link: ""
  },
  {
    date: "16 August 2020",
    title: "Rebranded Postwoman to Hoppscotch",
    description: "",
    link: "https://twitter.com/liyasthomas/status/1295277572285059078"
  },
  {
    date: "10 August 2020",
    title: "Joined Sensibull",
    description: "",
    link: ""
  },
  {
    date: "25 June 2020",
    title: "Postwoman won Tyk side project fund",
    description: "",
    link: "https://tyk.io/an-api-request-building-side-project-postwoman-io-sounds-like-a-winner-to-the-tyk-team"
  },
  {
    date: "10 October 2019",
    title: "Tech talk at Technopark",
    description: "",
    link: "https://twitter.com/liyasthomas/status/1182225864626331650"
  },
  {
    date: "16 September 2019",
    title: "Joined Buy me a coffee",
    description: "Product engineer.",
    link: ""
  },
  {
    date: "21 August 2019",
    title: "Made Postwoman",
    description: "Started as a personal tool for myself.",
    link: ""
  },
  {
    date: "16 July 2019",
    title: "Joined Zartek Technologies",
    description: "Front-end developer.",
    link: ""
  },
  {
    date: "2 June 2019",
    title: "Graduated from college",
    description: "Computer science and engineering.",
    link: ""
  },
  {
    date: "10 March 2014",
    title: "Finished school",
    description: "",
    link: ""
  },
  {
    date: "28 September 2011",
    title: "Bought first computer",
    description: "",
    link: ""
  },
  { date: "12 July 1996", title: "Born", description: "", link: "" }
];
const _withId = /* @__PURE__ */ withScopeId("data-v-4a86d57a");
const _sfc_main$1 = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const eventCount = ref(5);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="relative flex flex-col" data-v-4a86d57a><div class="absolute border-r-2 border-gray-200 bottom-1 top-1 dark:border-gray-800" style="${ssrRenderStyle({ "z-index": "-1", "left": "15px" })}" data-v-4a86d57a></div><ul class="flex flex-col justify-end space-y-10 md:space-y-8" data-v-4a86d57a><!--[-->`);
      ssrRenderList(unref(timeline).slice(0, eventCount.value), (event, index) => {
        _push(`<li class="event-item" data-v-4a86d57a><div class="event-heading" data-v-4a86d57a><div class="event-indicator" data-v-4a86d57a></div>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(event.link ? "a" : "div"), {
          href: event.link,
          target: "_blank",
          rel: "noopener",
          class: ["event-headline", { "event-link": event.link }]
        }, {
          default: _withId((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="event-date" data-v-4a86d57a${_scopeId}>${ssrInterpolate(new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric"
              }).format(new Date(event.date)))}</span><span class="event-divider" data-v-4a86d57a${_scopeId}>\u2014</span><span class="event-title" data-v-4a86d57a${_scopeId}>${ssrInterpolate(event.title)}</span>`);
            } else {
              return [
                createVNode("span", { class: "event-date" }, toDisplayString(new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric"
                }).format(new Date(event.date))), 1),
                createVNode("span", { class: "event-divider" }, "\u2014"),
                createVNode("span", { class: "event-title" }, toDisplayString(event.title), 1)
              ];
            }
          }),
          _: 2
        }), _parent);
        _push(`</div>`);
        if (event.description) {
          _push(`<div class="event-description" data-v-4a86d57a>${ssrInterpolate(event.description)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
      if (eventCount.value < unref(timeline).length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "more-container" }, _attrs))} data-v-4a86d57a><button class="more-event" data-v-4a86d57a>Show more</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const Events_vue_vue_type_style_index_0_scoped_true_lang = "";
_sfc_main$1.__scopeId = "data-v-4a86d57a";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/components/Events.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: "Timeline"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Events = _sfc_main$1;
      _push(`<!--[--><h1 class="inline-flex mb-8 text-2xl font-bold">${ssrInterpolate(unref(t)("button.events"))}</h1>`);
      _push(ssrRenderComponent(_component_Events, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/timeline.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
