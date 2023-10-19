import { defineComponent, ref, unref, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, createCommentVNode, mergeProps, withScopeId, useSSRContext } from "vue";
import { ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderAttrs, ssrRenderComponent } from "@vue/server-renderer";
import { useI18n } from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import { useHead } from "@vueuse/head";
const projects = [
  {
    title: "IoT Gateway OS",
    description: "The controller firmware (C++) - The controller <-> service communication layer - multiple variants (Python) -(Future) plugins for external hardware not routed through the controller (Python) - Various service-side functionality such as object / measurement databases (Pythyon) - The Server-Side Events API (Python) The REST API (Python).",
    link: "https://"
  },
  {
    title: "Red Hat OpenShift Service on AWS",
    description: "Fully-managed Red Hat OpenShift service, backed by an service-level agreement (SLA).Installation, monitoring, management, maintenance, and upgrades are performed, including complete stack consists of control plane, worker nodes, and key services",
    link: "https://aws.amazon.com/rosa/"
  },
  {
    title: "Ebb",
    description: "Feel life again from a new perspective.",
    link: "https://github.com/liyasthomas/ebb"
  },
  {
    title: "Marcdown",
    description: "Lightweight realtime markdown viewer and editor.",
    link: "https://github.com/liyasthomas/marcdown"
  },
  {
    title: "Colorbook",
    description: "Color schemes for UI design.",
    link: "https://github.com/liyasthomas/colorbook"
  },
  {
    title: "Books",
    description: "Find books from Google Play Books.",
    link: "https://github.com/liyasthomas/books"
  },
  {
    title: "Banner",
    description: "A simple and clean banner generator",
    link: "https://github.com/liyasthomas/banner"
  },
  {
    title: `More \xA0 \u2197\uFE0E`,
    description: "github.com/liyasthomas",
    link: "https://github.com/liyasthomas"
  }
];
const _withId = /* @__PURE__ */ withScopeId("data-v-29a5cfb8");
const _sfc_main$1 = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const projectCount = ref(6);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="flex flex-col" data-v-29a5cfb8><ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" data-v-29a5cfb8><!--[-->`);
      ssrRenderList(unref(projects).slice(0, projectCount.value), (project, index) => {
        _push(`<li data-v-29a5cfb8>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(project.link ? "a" : "div"), {
          href: project.link,
          target: "_blank",
          rel: "noopener",
          class: ["project-item", { "project-link": project.link }]
        }, {
          default: _withId((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="project-heading" data-v-29a5cfb8${_scopeId}><div class="project-headline" data-v-29a5cfb8${_scopeId}><span class="project-title" data-v-29a5cfb8${_scopeId}>${ssrInterpolate(project.title)}</span></div></div>`);
              if (project.description) {
                _push2(`<div class="project-description" data-v-29a5cfb8${_scopeId}>${ssrInterpolate(project.description)}</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("div", { class: "project-heading" }, [
                  createVNode("div", { class: "project-headline" }, [
                    createVNode("span", { class: "project-title" }, toDisplayString(project.title), 1)
                  ])
                ]),
                project.description ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "project-description"
                }, toDisplayString(project.description), 1)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }), _parent);
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
      if (projectCount.value < unref(projects).length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "more-container" }, _attrs))} data-v-29a5cfb8><button class="more-project" data-v-29a5cfb8>Show more</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const Projects_vue_vue_type_style_index_0_scoped_true_lang = "";
_sfc_main$1.__scopeId = "data-v-29a5cfb8";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/components/Projects.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: "Projects"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Projects = _sfc_main$1;
      _push(`<!--[--><h1 class="inline-flex mb-8 text-2xl font-bold">${ssrInterpolate(unref(t)("button.projects"))}</h1>`);
      _push(ssrRenderComponent(_component_Projects, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/works.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
