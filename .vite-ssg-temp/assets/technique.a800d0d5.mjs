import { defineComponent, ref, resolveComponent, unref, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, createCommentVNode, mergeProps, withScopeId, useSSRContext } from "vue";
import { ssrRenderList, ssrRenderVNode, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs } from "@vue/server-renderer";
import { useI18n } from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import { useHead } from "@vueuse/head";
const projects = [
  {
    title: "Linux edge systems",
    description: "Linux running at Edge",
    link: "https://github.com/intigration",
    image: "images/twitter.png"
  },
  {
    title: "Event-driven compute service",
    description: "cloud functions aws lambda, firebase, vercel",
    link: "https://github.com/intigration",
    image: "banner.png"
  },
  {
    title: "Messaging protocols (Kafka, MQTT, BYO)",
    description: "Build better products with customer feedback",
    link: "https://github.com/intigration",
    image: "images/github.png"
  },
  {
    title: "Kubernetes/Helm/Microk8s ",
    description: "Feel life again from a new perspective.",
    link: "https://github.com/intigration",
    image: "../images/logo.jpg"
  },
  {
    title: "Docker Containers",
    description: "Lightweight realtime markdown viewer and editor.",
    link: "https://github.com/intigration"
  },
  {
    title: "Sampling Algorithms",
    description: "Sampling Techniques for charts rendering",
    link: "https://github.com/intigration"
  },
  {
    title: "OPC UA/DA/AE",
    description: "Unified Data Access.",
    link: "https://github.com/intigration"
  },
  {
    title: "API Service virtualization & automation",
    description: "A simple and clean API test integration, OpenAPI 3.0, Swagger",
    link: "https://github.com/intigration"
  },
  {
    title: "Device Communication Protocols",
    description: "Modbus, DNP3, Profibus",
    link: "https://github.com/intigration"
  },
  {
    title: "Device Communication Protocols",
    description: "Modbus, DNP3, Profibus",
    link: "https://github.com/intigration"
  },
  {
    title: "Event & Functional workflow designers",
    description: "Node-Red, n8io",
    link: "https://github.com/intigration"
  },
  {
    title: "System Profiling",
    description: "performance, bottlenecks",
    link: "https://github.com/intigration"
  },
  {
    title: "Enviroment Replication",
    description: "performance, bottlenecks",
    link: "https://github.com/intigration"
  },
  {
    title: "Data modeling, conversion & generation",
    description: "performance, bottlenecks",
    link: "https://github.com/intigration"
  },
  {
    title: "SQL and Nosql Databases & OLE/DB connectors",
    description: "performance, bottlenecks",
    link: "https://github.com/intigration"
  },
  {
    title: "Hardware & Data Migration",
    description: "performance, bottlenecks",
    link: "https://github.com/intigration"
  },
  {
    title: "Cloud Management & Cost planning",
    description: "performance, bottlenecks",
    link: "https://github.com/intigration"
  },
  {
    title: "Technology Transfer",
    description: "performance, bottlenecks",
    link: "https://github.com/intigration"
  },
  {
    title: "Export ECC & GDPR compliance",
    description: "performance, bottlenecks",
    link: "https://github.com/intigration"
  },
  {
    title: "PoC & Prototyping",
    description: "performance, bottlenecks",
    link: "https://github.com/intigration"
  },
  {
    title: "Modular Approch & Componenets Reusablity",
    description: "performance, bottlenecks",
    link: "https://aws.amazon.com/lambda/"
  },
  {
    title: "AWS Lambda",
    description: "Package and deploy Lambda functions as container images"
  },
  {
    title: "Git Source",
    description: "Bring upstream projects closer to product repositories. - Improve stability of code repository. - Improve day-to-day tasks of packagers. - Automate pulling of new upstream releases into main repo."
  }
];
const _withId = /* @__PURE__ */ withScopeId("data-v-74d4f99a");
const _sfc_main$1 = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const projectCount = ref(6);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_card = resolveComponent("card");
      _push(`<!--[--><div class="flex flex-col" data-v-74d4f99a><ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" data-v-74d4f99a><!--[-->`);
      ssrRenderList(unref(projects).slice(0, projectCount.value), (project, index) => {
        _push(`<li data-v-74d4f99a>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(project.link ? "a" : "div"), {
          href: project.link,
          target: "_blank",
          rel: "noopener",
          class: ["project-item", { "project-link": project.link }]
        }, {
          default: _withId((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_card, { class: "m-1" }, {
                default: _withId((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="project-heading" data-v-74d4f99a${_scopeId2}><div class="project-headline" data-v-74d4f99a${_scopeId2}><span class="project-title" data-v-74d4f99a${_scopeId2}>${ssrInterpolate(project.title)}</span></div></div><div class="project-image" data-v-74d4f99a${_scopeId2}><img${ssrRenderAttr("src", `${project.image}`)} data-v-74d4f99a${_scopeId2}></div>`);
                    if (project.description) {
                      _push3(`<div class="project-description" data-v-74d4f99a${_scopeId2}>${ssrInterpolate(project.description)}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("div", { class: "project-heading" }, [
                        createVNode("div", { class: "project-headline" }, [
                          createVNode("span", { class: "project-title" }, toDisplayString(project.title), 1)
                        ])
                      ]),
                      createVNode("div", { class: "project-image" }, [
                        createVNode("img", {
                          src: `${project.image}`
                        }, null, 8, ["src"])
                      ]),
                      project.description ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "project-description"
                      }, toDisplayString(project.description), 1)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_card, { class: "m-1" }, {
                  default: _withId(() => [
                    createVNode("div", { class: "project-heading" }, [
                      createVNode("div", { class: "project-headline" }, [
                        createVNode("span", { class: "project-title" }, toDisplayString(project.title), 1)
                      ])
                    ]),
                    createVNode("div", { class: "project-image" }, [
                      createVNode("img", {
                        src: `${project.image}`
                      }, null, 8, ["src"])
                    ]),
                    project.description ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "project-description"
                    }, toDisplayString(project.description), 1)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }), _parent);
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
      if (projectCount.value < unref(projects).length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "more-container" }, _attrs))} data-v-74d4f99a><button class="more-project" data-v-74d4f99a>Show more</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const Technology_vue_vue_type_style_index_0_scoped_true_lang = "";
_sfc_main$1.__scopeId = "data-v-74d4f99a";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/components/Technology.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: "Techniques"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="inline-flex mb-8 text-2xl font-bold">${ssrInterpolate(unref(t)("button.technique"))}</h1>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/technique.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
