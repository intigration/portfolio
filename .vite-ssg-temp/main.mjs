import NProgress from "nprogress";
import { ViteSSG } from "vite-ssg";
import { useSSRContext, mergeProps, defineComponent, ref, resolveComponent, unref, createVNode, resolveDynamicComponent, withCtx, toDisplayString, createTextVNode, openBlock, createElementBlock, createElementVNode, createBlock, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { useHead } from "@vueuse/head";
import { useDark, useToggle } from "@vueuse/core";
import { useRouter } from "vue-router";
import "https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.7/dat.gui.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js";
const install$1 = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach(() => {
      NProgress.start();
    });
    router.afterEach(() => {
      NProgress.done();
    });
  }
};
var __glob_7_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$1
}, Symbol.toStringTag, { value: "Module" }));
const install = ({ isClient, router }) => {
  if (!isClient)
    return;
  router.isReady().then(async () => {
    const { registerSW: registerSW2 } = await Promise.resolve().then(function() {
      return virtual_pwaRegister;
    });
    registerSW2({ immediate: true });
  });
};
var __glob_7_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install
}, Symbol.toStringTag, { value: "Module" }));
var _imports_0 = "/assets/logo.78fee544.jpg";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$y = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<img${ssrRenderAttrs(mergeProps({
    alt: "mfarhan",
    src: _imports_0,
    height: "160",
    width: "160",
    class: "rounded-full"
  }, _attrs))}>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/AppLogo.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var __vite_components_0$9 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$7]]);
;
var Profileintroduction_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$x = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col my-8" }, _attrs))} data-v-5943a3e4><h1 class="text-4xl font-bold" data-v-5943a3e4>Muhammad Farhan</h1><p class="mt-4 text-xl" data-v-5943a3e4> AI plateform based hybrid onprem-cloud IIOT solutions for Smart factories that enable autonmous control management for manufacturing workflows . that deploy in incorporating BI, Machine Learning, Vision, Acoustic, Statistical Methods, and Optimization. <p class="mt-4 text-xl" data-v-5943a3e4>\u2714\uFE0F MOM (Manufacturing Operations Management)</p><br data-v-5943a3e4><p class="mt-4 text-xl" data-v-5943a3e4>\u2714\uFE0F Asset &amp; Process Performance Management</p><br data-v-5943a3e4><p class="mt-4 text-xl" data-v-5943a3e4>\u2714\uFE0F Anamoly Detection</p><br data-v-5943a3e4><p class="mt-4 text-xl" data-v-5943a3e4>\u2714\uFE0FAs a developer, I&#39;ve worked on variety of domains ranging from scripting to web development to API development to ORM development to video encoder wrappers to automated scrapping to crawlers like Dropbox / MEGA sync to AI bots development with AIML. Great expertise on Python with good fluency in Node.js / JavaScript and also familiar with C,C++ and JAVA. I&#39;ve worked on different projects around website development that incorporate SQL / NoSQL as database, Python / Node.js as backends and JavaScript-heavy frontends.</p><p class="mt-4 text-xl" data-v-5943a3e4>\u2714\uFE0F As a DevSecOps &amp; Cloud Engineer, I&#39;m a Google certified Associate Cloud Engineer (ACE) and an AWS certified Solutions Architect Associate (CSAA). I&#39;ve had the experience to work both with VM-based deployments and containerized ones. I work regularly on Docker based orchestrations, sometimes sole containers but mostly on Docker Compose. Mainly, an avid user of K8 (Kubernetes) and have managed clusters on GCP, AWS and bare metal servers. I&#39;ve worked on various projects like Cloud Infra and Application Management, Cloud Migration, CI/CD on Cloud and Disaster Recovery implementations.</p><p class="mt-4 text-xl" data-v-5943a3e4>\u2714\uFE0F A little on research, I&#39;ve had the chance to work on a project that&#39;d predict crashes on any SDN (Software Defined Network) using Information Theory, Machine Learning and Natural Language Processing. Also, researched about AI bots and their integration with different platforms like Facebook, Whatsapp and Skype using AIML. Further in individual research areas, I have been working in the field of audio/video encoding and its automation for different containers like Matroska.</p><span data-v-5943a3e4><a class="app-link" href="https://dev.m3-solutions.io" target="_blank" rel="noopener" data-v-5943a3e4>Leading towards Industry 4.0</a></span></p></div>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Profileintroduction.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var __vite_components_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-5943a3e4"]]);
const _sfc_main$w = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_AppLogo = __vite_components_0$9;
  const _component_Profileintroduction = __vite_components_1$3;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppLogo, null, null, _parent));
  _push(ssrRenderComponent(_component_Profileintroduction, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/AppHome.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var __vite_components_0$8 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$5]]);
var timeline$1 = [
  {
    "date": "10 March 2015",
    "title": "born in Lahore",
    "description": "<h1>Languages</h1><ul><li>English: Write and speak fluently</li><li>Urdu: \u0631\u0648\u0627\u0646\u06CC \u0633\u06D2 \u0644\u06A9\u06BE \u0627\u0648\u0631 \u0628\u0648\u0644 \u0633\u06A9\u062A\u06D2 \u06C1\u06CC\u06BA</li><li>Nationalilty: PK</li></ul>",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "MQTT versus CoAP",
    "description": "<ul><a src='https://mentor.com'><li>Results  </li></a></ul>",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Muhammad Farhan",
    "description": "<ul><li>Nationality: Pakistani</li></ul>",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Awarded: Presidential Merit Scholarship",
    "description": "<ul><li>First Position among all branches country wide</li><li>Secured 18 months merit scholarship of PKR 10K/month</li></ul>",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Awarded: Presidential Merit Scholarship",
    "description": "<h1>About me</h1><h2>From a professional perspective</h2><p>I am one of these developers with a passion for great code. I have experience in different sectors like manufacturing, luxury... where I developed my skills as a fullstack developer, developing RESTFul applications with microservices architecture. My curiosity and open-mindedness brought me into the energy sector, where I took the role of Data Engineer and faced new challenges like distributed computing and performance constraints.</p>",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Imperious Technologies",
    "description": "Applications & Suport Specialist",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Technical Lead",
    "description": "Applications, Services & Device Enablement, Scalable hybrid onprem-cloud, Big Data and AI based solutions for MOM (Manufacturing Operations Management).  Expertise in Process Performance Statistical Methods, and Optimization.",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Senior Technical Lead",
    "description": "* Develops software. * Reviews relevant requirements, standards and other documentation to clarify and understand software engineering requirements. * Provides estimates for modules under development, and estimates own work. * Completes the development of software test requirements for modules under development. * Executes software (unit and integration) tests. * Presents technical findings and developments. * Adheres to the software quality process through the execution of module, subsystem and system test procedures. * Analyzes localization requirements and designs/adapts products and solutions accordingly.",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Cloud Services Platform",
    "description": "A multi-tier architecture hosted on AWS EC2<ul><li>95% open source technology stack</li><li>Patented technology for creating perfect Digital-Twins of on-site devices</li><li>RESTful APIs provide following services</li><li>File Storage</li><li>Device Commissioning & Initializations</li><li>Device & Application configurations</li><li>Device & Application operations</li><li>Custom Portal UI for Client Applications</li><li>Cloud to Device Messaging Services</li><li>Managed Embedded Applications Registry</li><li>Identity Signing Services</li><li>Time-Series Data Services - (Continuous Data Streams)</li><li>Operation Logging Services</li><li>Device & Embedded Applications Sites</li>",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Diplom Mathematik",
    "description": "<ul><li><p>I have evolved as a Scrum master in agile teams, as I care about always improving the team I am part of. From my point of view, using serious games during team retrospectives is a key factor of success for the team evolution </p>/li><li>Technical excellence is at the heart of my personality.</ul>",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "OurClass",
    "description": "First major Web project<br>Online service for managing addresses of (former) class mates",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "CdCoverCreator",
    "description": "<a href='http://thyante.com/index.php?cdcovercreator' target='_blank'>Desktop application</a> for designing CD covers and booklets",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Application Developer",
    "description": "Design and implementation of an interface between Excel and Axapta",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Teaching Assistant",
    "description": "<ul><li>Teaching assistant in Web Technologies</li><li>Development of a graphical XML editor for the e-learning section of the Pharmacology department</li></ul>",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Plant PIMS",
    "description": "Team project work in Computer Science for creating the online and print version of the detailed list of lectures in the Mathematics, Physics, and Computer Science departments",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Civil Service",
    "description": "<ul><li>Weiterentwicklung der internen web-basieren Tools zur digitalen Archivierung von Best\xE4nden</li><li>Konzeption und Neuentwicklung Katalogisierungssoftware</li></ul>",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Application Developer",
    "description": "Porting tax software from Delphi to Java",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Machine Monitoring Management",
    "description": "<ul><li>Dr. phil. nat., magna cum laude</li><li>PhD student in the High Performance and Web Computing Group with Prof. Dr. H. Burkhart</li><li>Research areas: High Performance Computing, Scientific Computing, Compiler Technologies, Auto Tuning, Optimization</li><li>Dissertations project <a href='https://github.com/intigration' target='_blank'>\xABPatus\xBB</a><li>Dissertation: <a href='http://edoc.unibas.ch/1418/' target='_blank'>\xABGenerating and Auto-Tuning Parallel Stencil Codes\xBB</a>, Hartung-Gorre, ISBN 978-3-86628-409-8</li></ul>",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Patus",
    "description": "Code generator and auto tuner for parallel stencil codes, <a href='https://github.com/intigration' target='_blank'>github.com/intigration</a>",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Product Owner (PIMS)",
    "description": "<ul>Develop Modules as microservice that should comply with following:<li>Modularity</li><li>Packaging </li><li>Zero external or 3rd Party Dependancy </li><li>Comply application code with Open and Inner source guidelines </li><li>Documentation</li><li>Deployment and Mantainence Strategy</li></ul>",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Managed Cloud for Distributed Peripherals",
    "description": "<ul><li>A Managed Central Control Platform for Distributed Peripherals is\u2026 A set of web services and applications, hosted in on a cloud platform (central nodes), with persistent internet connections to a pool of on-premise devices (edge nodes) that drive local consumer peripherals. The web services hosted on the central nodes of the solution can terminate on the central nodes, the edge nodes or on the managed peripherals. Access to these services is managed, meaning their access is granted by way of a business relationship between the operator of the embedded cloud platform and the service provider</li></ul>",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "PostDoc",
    "description": "<ul><li>M3 IoT solution features software and hardware to quickly deploy and manage sensors, actuators, edge servers (gateways) and containerized custom logic. M3 includes in particular support for wired and wireless sensor networks, edge-based acquisiton control, data aggregation, machine learning algorithms, custom logic, custom monitoring & analytics, and mobile client applications.</li><li>Research project <a href='https://github.com/intigration' target='_blank'>\xABPatus\xBB</a></li></ul>",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Technical Lead",
    "description": " <ul><li>Cloud Service Platform (UI, Netzwerk, Compiler-Technologien)</li><li>Architektur und Entwicklung von web-basierter Software</li><li>Neuentwicklungen von hybriden mobilen Apps</li><li>Neu-/Weiterentwicklungen im Web-Frontend-Bereich</li><li>Neuentwicklungen interner Tools</li></ul>",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Ghostlab",
    "description": "\xABSynchronized web development, testing, and inspection\xBB<br><a href='https://www.vanamco.com/ghostlab' target='_blank'>www.vanamco.com/ghostlab</a>",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "SIEMENS Digital Industries Softwares",
    "description": "",
    "link": "#"
  },
  {
    "date": "10 March 2015",
    "title": "Here I am",
    "link": "#"
  }
];
;
var Events_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$v = defineComponent({
  __name: "Events",
  __ssrInlineRender: true,
  props: {
    eventCount: {
      type: Number,
      default: 3
    },
    home: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const eventCount = ref(5);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-40154f03><h1 class="inline-flex mb-8 text-2xl font-bold" data-v-40154f03>Events</h1><div class="relative flex flex-col" data-v-40154f03><div class="absolute border-r-2 border-gray-200 bottom-1 top-1 dark:border-gray-800" style="${ssrRenderStyle({ "z-index": "-1", "left": "15px" })}" data-v-40154f03></div><ul class="flex flex-col justify-end space-y-10 md:space-y-8" data-v-40154f03><!--[-->`);
      ssrRenderList(unref(timeline$1).slice(
        0,
        props.home ? props.eventCount : eventCount.value
      ), (event, index2) => {
        _push(`<li class="event-item" data-v-40154f03><div class="event-heading" data-v-40154f03><div class="event-indicator" data-v-40154f03></div>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(event.link ? "a" : "div"), {
          href: event.link,
          target: "_blank",
          rel: "noopener",
          class: ["event-headline", { "event-link": event.link }]
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="event-date" data-v-40154f03${_scopeId}>${ssrInterpolate(new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric"
              }).format(new Date(event.date)))}</span><span class="event-divider" data-v-40154f03${_scopeId}>\u2014</span><span class="event-title" data-v-40154f03${_scopeId}>${ssrInterpolate(event.title)}</span>`);
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
          _push(`<div class="event-description" data-v-40154f03>${ssrInterpolate(event.description)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
      if (props.home ? props.eventCount : eventCount.value < unref(timeline$1).length) {
        _push(`<div class="more-container" data-v-40154f03>`);
        if (props.home) {
          _push(ssrRenderComponent(_component_RouterLink, {
            to: "/timeline",
            class: "more-event"
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` View all `);
              } else {
                return [
                  createTextVNode(" View all ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<button class="more-event" data-v-40154f03> Show more </button>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Events.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var __vite_components_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-40154f03"]]);
var articles = [
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
    title: "R IDE",
    description: "R Tooling",
    slug: "r-ide",
    category: "/languages/r/"
  },
  {
    date: "15 April 2022",
    title: "C/C++ autotools",
    description: "C/C++ autotools",
    slug: "r-installation",
    category: "/languages/r/"
  },
  {
    date: "15 April 2022",
    title: "C/C++ autotools",
    description: "C/C++ autotools",
    slug: "autotools",
    category: "/languages/c/"
  },
  {
    date: "15 April 2022",
    title: "C/C++ autotools",
    description: "C/C++ autotools",
    slug: "autotools",
    category: "/languages/c/"
  },
  {
    date: "15 April 2022",
    title: "C/C++ autotools",
    description: "C/C++ autotools",
    slug: "autotools",
    category: "/languages/c/"
  }
];
;
var Articles_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$u = defineComponent({
  __name: "Articles",
  __ssrInlineRender: true,
  props: {
    articleCount: {
      type: Number,
      default: 2
    },
    home: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const articleCount = ref(5);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-36b49f90><h1 class="inline-flex mb-8 text-2xl font-bold" data-v-36b49f90>Articles</h1><div class="relative flex flex-col" data-v-36b49f90><div class="absolute border-r-2 border-gray-200 bottom-1 top-1 dark:border-gray-800" style="${ssrRenderStyle({ "z-index": "-1", "left": "15px" })}" data-v-36b49f90></div><ul class="flex flex-col justify-end space-y-10 md:space-y-8" data-v-36b49f90><!--[-->`);
      ssrRenderList(unref(articles).slice(
        0,
        props.home ? props.articleCount : articleCount.value
      ), (article, index2) => {
        _push(`<li class="article-item" data-v-36b49f90><div class="article-heading" data-v-36b49f90><div class="article-indicator" data-v-36b49f90></div>`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: `/blog/${article.slug}`,
          class: "article-link article-headline"
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="article-date" data-v-36b49f90${_scopeId}>${ssrInterpolate(new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric"
              }).format(new Date(article.date)))}</span><span class="article-divider" data-v-36b49f90${_scopeId}>\u2014</span><span class="article-title" data-v-36b49f90${_scopeId}>${ssrInterpolate(article.title)}</span>`);
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
          _push(`<div class="article-description" data-v-36b49f90>${ssrInterpolate(article.description)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
      if (props.home ? props.articleCount : articleCount.value < unref(articles).length) {
        _push(`<div class="more-container" data-v-36b49f90>`);
        if (props.home) {
          _push(ssrRenderComponent(_component_RouterLink, {
            to: "/blog",
            class: "more-article"
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` View all `);
              } else {
                return [
                  createTextVNode(" View all ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<button class="more-article" data-v-36b49f90> Show more </button>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Articles.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var __vite_components_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-36b49f90"]]);
;
var Subscribe_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$t = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))} data-v-74a757f9><form action="https://launchaco.us20.list-manage.com/subscribe/post?u=807aba6832422fc0a3a1ac751&amp;id=03385b483f" method="post" target="_blank" validate data-v-74a757f9><label for="mce-EMAIL" class="inline-flex mb-8 text-2xl font-bold" data-v-74a757f9>Subscribe</label><div class="flex flex-col space-y-2 md:space-x-2 md:space-y-0 md:flex-row" data-v-74a757f9><input id="mce-EMAIL" name="EMAIL" class="form-input" type="email" placeholder="E-mail" required data-v-74a757f9><input id="mc-embedded-subscribe" type="submit" value="Subscribe" name="subscribe" class="form-button" data-v-74a757f9></div></form></div>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Subscribe.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var __vite_components_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-74a757f9"]]);
const _sfc_main$s = defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home - Muhammad Farhan"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHome = __vite_components_0$8;
      const _component_Events = __vite_components_0$7;
      const _component_Articles = __vite_components_0$6;
      const _component_Subscribe = __vite_components_0$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-24" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHome, null, null, _parent));
      _push(ssrRenderComponent(_component_Events, { home: true }, null, _parent));
      _push(ssrRenderComponent(_component_Articles, { home: true }, null, _parent));
      _push(ssrRenderComponent(_component_Subscribe, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const routes$1 = [{ "name": "about", "path": "/about", "component": () => Promise.resolve().then(function() {
  return about$1;
}), "props": true }, { "name": "console", "path": "/console", "component": () => Promise.resolve().then(function() {
  return console;
}), "props": true }, { "name": "index", "path": "/", "component": _sfc_main$s, "props": true }, { "name": "newsletter", "path": "/newsletter", "component": () => Promise.resolve().then(function() {
  return newsletter;
}), "props": true }, { "name": "README", "path": "/readme", "component": () => Promise.resolve().then(function() {
  return README;
}), "props": true }, { "name": "technique", "path": "/technique", "component": () => Promise.resolve().then(function() {
  return technique;
}), "props": true }, { "name": "timeline", "path": "/timeline", "component": () => Promise.resolve().then(function() {
  return timeline;
}), "props": true }, { "name": "tracker", "path": "/tracker", "component": () => Promise.resolve().then(function() {
  return tracker;
}), "props": true }, { "name": "works", "path": "/works", "component": () => Promise.resolve().then(function() {
  return works;
}), "props": true }, { "name": "all", "path": "/:all(.*)*", "component": () => Promise.resolve().then(function() {
  return ____all_;
}), "props": true, "meta": { "layout": 404 } }, { "name": "blog-blas-lapack", "path": "/blog/blas-lapack", "component": () => Promise.resolve().then(function() {
  return blasLapack;
}), "props": true }, { "name": "blog-docker-event", "path": "/blog/docker-event", "component": () => Promise.resolve().then(function() {
  return dockerEvent;
}), "props": true }, { "name": "blog-hello-world", "path": "/blog/hello-world", "component": () => Promise.resolve().then(function() {
  return helloWorld;
}), "props": true }, { "name": "blog", "path": "/blog", "component": () => Promise.resolve().then(function() {
  return index;
}), "props": true }, { "name": "blog-r-ide", "path": "/blog/r-ide", "component": () => Promise.resolve().then(function() {
  return rIde;
}), "props": true }, { "name": "blog-r-installation", "path": "/blog/r-installation", "component": () => Promise.resolve().then(function() {
  return rInstallation;
}), "props": true }, { "name": "blog-r-packages", "path": "/blog/r-packages", "component": () => Promise.resolve().then(function() {
  return rPackages;
}), "props": true }, { "name": "blog-r-sig", "path": "/blog/r-sig", "component": () => Promise.resolve().then(function() {
  return rSig;
}), "props": true }, { "name": "hi-name", "path": "/hi/:name", "component": () => Promise.resolve().then(function() {
  return _name_;
}), "props": true }];
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 20 20"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("g", { fill: "none" }, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z",
    fill: "currentColor"
  })
], -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
var __vite_components_0$4 = { name: "heroicons-solid-moon", render: render$4 };
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 20 20"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("g", { fill: "none" }, [
  /* @__PURE__ */ createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm4 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0zm-.464 4.95l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414zm2.12-10.607a1 1 0 0 1 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM17 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1zm-7 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM5.05 6.464A1 1 0 1 0 6.465 5.05l-.708-.707a1 1 0 0 0-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414zM4 11a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1z",
    fill: "currentColor"
  })
], -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
var __vite_components_1$2 = { name: "heroicons-solid-sun", render: render$3 };
const isDark = useDark();
useToggle(isDark);
;
var AppHeader_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$r = defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_heroicons_solid_moon = __vite_components_0$4;
      const _component_heroicons_solid_sun = __vite_components_1$2;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "flex top-0 flex-col p-8 z-1 md:sticky md:flex-row md:items-center md:justify-between header-gradient" }, _attrs))} data-v-13f193a1><nav class="flex flex-col items-start space-y-4 md:space-x-4 md:flex-row md:space-y-0" data-v-13f193a1>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/",
        class: "header-link"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-13f193a1${_scopeId}>Home</span>`);
          } else {
            return [
              createVNode("span", null, "Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/timeline",
        class: "header-link"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-13f193a1${_scopeId}>Timeline</span>`);
          } else {
            return [
              createVNode("span", null, "Timeline")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/works",
        class: "header-link"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-13f193a1${_scopeId}>Works</span>`);
          } else {
            return [
              createVNode("span", null, "Works")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/blog",
        class: "header-link"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-13f193a1${_scopeId}>Blog</span>`);
          } else {
            return [
              createVNode("span", null, "Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/newsletter",
        class: "header-link"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-13f193a1${_scopeId}>Newsletter</span>`);
          } else {
            return [
              createVNode("span", null, "Newsletter")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/about",
        class: "header-link"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-13f193a1${_scopeId}>About</span>`);
          } else {
            return [
              createVNode("span", null, "About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="flex mt-8 items-start space-x-4 md:mt-0" data-v-13f193a1><button class="header-link" aria-label="Toggle dark mode" data-v-13f193a1>`);
      if (unref(isDark)) {
        _push(ssrRenderComponent(_component_heroicons_solid_moon, null, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_heroicons_solid_sun, null, null, _parent));
      }
      _push(`</button></div></header>`);
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/AppHeader.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var __vite_components_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-13f193a1"]]);
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M15 8h2v11h-2z",
  fill: "currentColor"
}, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M16 22a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 22z",
  fill: "currentColor"
}, null, -1);
const _hoisted_5$1 = [
  _hoisted_2$2,
  _hoisted_3$2,
  _hoisted_4$1
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_5$1);
}
var __vite_components_1$1 = { name: "carbon-warning", render: render$2 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 16 16"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("g", { fill: "currentColor" }, [
  /* @__PURE__ */ createElementVNode("path", { d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" })
], -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var __vite_components_0$2 = { name: "bi-github", render: render$1 };
;
var AppFooter_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$q = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_bi_github = __vite_components_0$2;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "flex flex-col m-8 text-sm md:flex-row md:items-center md:justify-between" }, _attrs))} data-v-39fef7e4><nav class="flex flex-col items-start space-y-4 md:space-x-4 md:space-y-0 md:flex-row" data-v-39fef7e4><a class="footer-link" href="https://twitter.com/liyasthomas" target="_blank" rel="noopener" data-v-39fef7e4>Twitter</a><a class="footer-link" href="https://www.linkedin.com/in/liyasthomas" target="_blank" rel="noopener" data-v-39fef7e4>LinkedIn</a><a class="footer-link" href="https://github.com/liyasthomas" target="_blank" rel="noopener" data-v-39fef7e4>GitHub</a><a class="footer-link" href="mailto:hi@liyasthomas.com" data-v-39fef7e4>E-mail</a><a class="footer-link" href="https://calendly.com/liyasthomas/30m" target="_blank" rel="noopener" data-v-39fef7e4>Calendar</a></nav><div class="flex mt-8 items-start space-x-4 md:mt-0" data-v-39fef7e4><a class="footer-link" href="https://github.com/liyasthomas/liyasthomas.com" target="_blank" rel="noopener" data-v-39fef7e4>`);
  _push(ssrRenderComponent(_component_bi_github, null, null, _parent));
  _push(`</a></div></footer>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/AppFooter.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var __vite_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-39fef7e4"]]);
;
var _404_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$p = defineComponent({
  __name: "404",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __vite_components_0$3;
      const _component_carbon_warning = __vite_components_1$1;
      const _component_RouterView = resolveComponent("RouterView");
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_AppFooter = __vite_components_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex container flex-col min-h-screen" }, _attrs))} data-v-6afd6e8e>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main class="flex flex-col flex-1 m-8 text-center dark:text-gray-200" data-v-6afd6e8e><p class="text-4xl" data-v-6afd6e8e>`);
      _push(ssrRenderComponent(_component_carbon_warning, { class: "inline-block" }, null, _parent));
      _push(`</p>`);
      _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(`<div data-v-6afd6e8e>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/",
        class: "error-link"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="error-link" data-v-6afd6e8e>Back</button></div></main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/404.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var __layout_0 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-6afd6e8e"]]);
const _sfc_main$o = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __vite_components_0$3;
  const _component_RouterView = resolveComponent("RouterView");
  const _component_AppFooter = __vite_components_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex container flex-col min-h-screen" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<main class="flex flex-col flex-1 m-8">`);
  _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
  _push(`</main>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/default.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var __layout_1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$n = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __vite_components_0$3;
  const _component_RouterView = resolveComponent("RouterView");
  const _component_AppFooter = __vite_components_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex container flex-col min-h-screen" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<main class="flex flex-col flex-1 m-8">`);
  _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
  _push(`</main>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/home.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var __layout_2 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$1]]);
const layouts = {
  "404": __layout_0,
  "default": __layout_1,
  "home": __layout_2
};
function setupLayouts(routes2) {
  return routes2.map((route) => {
    var _a;
    return {
      path: route.path,
      component: layouts[((_a = route.meta) == null ? void 0 : _a.layout) || "default"],
      children: [{ ...route, path: "" }]
    };
  });
}
const _sfc_main$m = defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Meet Muhammad Farhan"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterView = resolveComponent("RouterView");
      _push(ssrRenderComponent(_component_RouterView, _attrs, null, _parent));
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var windi = "";
var main = "";
const routes = setupLayouts(routes$1);
const createApp = ViteSSG(_sfc_main$m, { routes }, (ctx) => {
  Object.values({ "./modules/nprogress.ts": __glob_7_0, "./modules/pwa.ts": __glob_7_1 }).map(
    (i2) => {
      var _a;
      return (_a = i2.install) == null ? void 0 : _a.call(i2, ctx);
    }
  );
});
try {
  self["workbox:window:6.6.0"] && _();
} catch (n2) {
}
function n(n2, t2) {
  return new Promise(function(r2) {
    var e2 = new MessageChannel();
    e2.port1.onmessage = function(n3) {
      r2(n3.data);
    }, n2.postMessage(t2, [e2.port2]);
  });
}
function t(n2, t2) {
  for (var r2 = 0; r2 < t2.length; r2++) {
    var e2 = t2[r2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(n2, e2.key, e2);
  }
}
function r(n2, t2) {
  (null == t2 || t2 > n2.length) && (t2 = n2.length);
  for (var r2 = 0, e2 = new Array(t2); r2 < t2; r2++)
    e2[r2] = n2[r2];
  return e2;
}
function e(n2, t2) {
  var e2;
  if ("undefined" == typeof Symbol || null == n2[Symbol.iterator]) {
    if (Array.isArray(n2) || (e2 = function(n3, t3) {
      if (n3) {
        if ("string" == typeof n3)
          return r(n3, t3);
        var e3 = Object.prototype.toString.call(n3).slice(8, -1);
        return "Object" === e3 && n3.constructor && (e3 = n3.constructor.name), "Map" === e3 || "Set" === e3 ? Array.from(n3) : "Arguments" === e3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3) ? r(n3, t3) : void 0;
      }
    }(n2)) || t2 && n2 && "number" == typeof n2.length) {
      e2 && (n2 = e2);
      var i2 = 0;
      return function() {
        return i2 >= n2.length ? { done: true } : { done: false, value: n2[i2++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  return (e2 = n2[Symbol.iterator]()).next.bind(e2);
}
try {
  self["workbox:core:6.6.0"] && _();
} catch (n2) {
}
var i = function() {
  var n2 = this;
  this.promise = new Promise(function(t2, r2) {
    n2.resolve = t2, n2.reject = r2;
  });
};
function o(n2, t2) {
  var r2 = location.href;
  return new URL(n2, r2).href === new URL(t2, r2).href;
}
var u = function(n2, t2) {
  this.type = n2, Object.assign(this, t2);
};
function a(n2, t2, r2) {
  return r2 ? t2 ? t2(n2) : n2 : (n2 && n2.then || (n2 = Promise.resolve(n2)), t2 ? n2.then(t2) : n2);
}
function c() {
}
var f = { type: "SKIP_WAITING" };
function s(n2, t2) {
  if (!t2)
    return n2 && n2.then ? n2.then(c) : Promise.resolve();
}
var v = function(r2) {
  var e2, c2;
  function v2(n2, t2) {
    var e3, c3;
    return void 0 === t2 && (t2 = {}), (e3 = r2.call(this) || this).nn = {}, e3.tn = 0, e3.rn = new i(), e3.en = new i(), e3.on = new i(), e3.un = 0, e3.an = /* @__PURE__ */ new Set(), e3.cn = function() {
      var n3 = e3.fn, t3 = n3.installing;
      e3.tn > 0 || !o(t3.scriptURL, e3.sn.toString()) || performance.now() > e3.un + 6e4 ? (e3.vn = t3, n3.removeEventListener("updatefound", e3.cn)) : (e3.hn = t3, e3.an.add(t3), e3.rn.resolve(t3)), ++e3.tn, t3.addEventListener("statechange", e3.ln);
    }, e3.ln = function(n3) {
      var t3 = e3.fn, r3 = n3.target, i2 = r3.state, o2 = r3 === e3.vn, a2 = { sw: r3, isExternal: o2, originalEvent: n3 };
      !o2 && e3.mn && (a2.isUpdate = true), e3.dispatchEvent(new u(i2, a2)), "installed" === i2 ? e3.wn = self.setTimeout(function() {
        "installed" === i2 && t3.waiting === r3 && e3.dispatchEvent(new u("waiting", a2));
      }, 200) : "activating" === i2 && (clearTimeout(e3.wn), o2 || e3.en.resolve(r3));
    }, e3.dn = function(n3) {
      var t3 = e3.hn, r3 = t3 !== navigator.serviceWorker.controller;
      e3.dispatchEvent(new u("controlling", { isExternal: r3, originalEvent: n3, sw: t3, isUpdate: e3.mn })), r3 || e3.on.resolve(t3);
    }, e3.gn = (c3 = function(n3) {
      var t3 = n3.data, r3 = n3.ports, i2 = n3.source;
      return a(e3.getSW(), function() {
        e3.an.has(i2) && e3.dispatchEvent(new u("message", { data: t3, originalEvent: n3, ports: r3, sw: i2 }));
      });
    }, function() {
      for (var n3 = [], t3 = 0; t3 < arguments.length; t3++)
        n3[t3] = arguments[t3];
      try {
        return Promise.resolve(c3.apply(this, n3));
      } catch (n4) {
        return Promise.reject(n4);
      }
    }), e3.sn = n2, e3.nn = t2, navigator.serviceWorker.addEventListener("message", e3.gn), e3;
  }
  c2 = r2, (e2 = v2).prototype = Object.create(c2.prototype), e2.prototype.constructor = e2, e2.__proto__ = c2;
  var h, l, w = v2.prototype;
  return w.register = function(n2) {
    var t2 = (void 0 === n2 ? {} : n2).immediate, r3 = void 0 !== t2 && t2;
    try {
      var e3 = this;
      return function(n3, t3) {
        var r4 = n3();
        if (r4 && r4.then)
          return r4.then(t3);
        return t3(r4);
      }(function() {
        if (!r3 && "complete" !== document.readyState)
          return s(new Promise(function(n3) {
            return window.addEventListener("load", n3);
          }));
      }, function() {
        return e3.mn = Boolean(navigator.serviceWorker.controller), e3.yn = e3.pn(), a(e3.bn(), function(n3) {
          e3.fn = n3, e3.yn && (e3.hn = e3.yn, e3.en.resolve(e3.yn), e3.on.resolve(e3.yn), e3.yn.addEventListener("statechange", e3.ln, { once: true }));
          var t3 = e3.fn.waiting;
          return t3 && o(t3.scriptURL, e3.sn.toString()) && (e3.hn = t3, Promise.resolve().then(function() {
            e3.dispatchEvent(new u("waiting", { sw: t3, wasWaitingBeforeRegister: true }));
          }).then(function() {
          })), e3.hn && (e3.rn.resolve(e3.hn), e3.an.add(e3.hn)), e3.fn.addEventListener("updatefound", e3.cn), navigator.serviceWorker.addEventListener("controllerchange", e3.dn), e3.fn;
        });
      });
    } catch (n3) {
      return Promise.reject(n3);
    }
  }, w.update = function() {
    try {
      return this.fn ? s(this.fn.update()) : void 0;
    } catch (n2) {
      return Promise.reject(n2);
    }
  }, w.getSW = function() {
    return void 0 !== this.hn ? Promise.resolve(this.hn) : this.rn.promise;
  }, w.messageSW = function(t2) {
    try {
      return a(this.getSW(), function(r3) {
        return n(r3, t2);
      });
    } catch (n2) {
      return Promise.reject(n2);
    }
  }, w.messageSkipWaiting = function() {
    this.fn && this.fn.waiting && n(this.fn.waiting, f);
  }, w.pn = function() {
    var n2 = navigator.serviceWorker.controller;
    return n2 && o(n2.scriptURL, this.sn.toString()) ? n2 : void 0;
  }, w.bn = function() {
    try {
      var n2 = this;
      return function(n3, t2) {
        try {
          var r3 = n3();
        } catch (n4) {
          return t2(n4);
        }
        if (r3 && r3.then)
          return r3.then(void 0, t2);
        return r3;
      }(function() {
        return a(navigator.serviceWorker.register(n2.sn, n2.nn), function(t2) {
          return n2.un = performance.now(), t2;
        });
      }, function(n3) {
        throw n3;
      });
    } catch (n3) {
      return Promise.reject(n3);
    }
  }, h = v2, (l = [{ key: "active", get: function() {
    return this.en.promise;
  } }, { key: "controlling", get: function() {
    return this.on.promise;
  } }]) && t(h.prototype, l), v2;
}(function() {
  function n2() {
    this.Pn = /* @__PURE__ */ new Map();
  }
  var t2 = n2.prototype;
  return t2.addEventListener = function(n3, t3) {
    this.Sn(n3).add(t3);
  }, t2.removeEventListener = function(n3, t3) {
    this.Sn(n3).delete(t3);
  }, t2.dispatchEvent = function(n3) {
    n3.target = this;
    for (var t3, r2 = e(this.Sn(n3.type)); !(t3 = r2()).done; ) {
      (0, t3.value)(n3);
    }
  }, t2.Sn = function(n3) {
    return this.Pn.has(n3) || this.Pn.set(n3, /* @__PURE__ */ new Set()), this.Pn.get(n3);
  }, n2;
}());
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisterError
  } = options;
  let wb;
  const updateServiceWorker = async (reloadPage = true) => {
  };
  if ("serviceWorker" in navigator) {
    wb = new v("/sw.js", { scope: "/", type: "classic" });
    wb.addEventListener("activated", (event) => {
      if (event.isUpdate)
        window.location.reload();
      else
        onOfflineReady == null ? void 0 : onOfflineReady();
    });
    wb.register({ immediate }).then((r2) => {
      onRegistered == null ? void 0 : onRegistered(r2);
    }).catch((e2) => {
      onRegisterError == null ? void 0 : onRegisterError(e2);
    });
  }
  return updateServiceWorker;
}
var virtual_pwaRegister = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  registerSW
}, Symbol.toStringTag, { value: "Module" }));
;
var about_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$l = defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Synopsis"
    });
    const form = {
      name: "",
      email: "",
      message: ""
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="inline-flex mb-8 text-2xl font-bold" data-v-01e47f1f>About</h1><form name="contact" data-netlify="true" data-v-01e47f1f><div class="flex flex-col space-y-2 max-w-sm" data-v-01e47f1f><input type="text" name="name"${ssrRenderAttr("value", form.name)} class="form-input" placeholder="Name" data-v-01e47f1f><input class="form-input" type="email" name="email"${ssrRenderAttr("value", form.email)} placeholder="E-mail" data-v-01e47f1f><textarea name="message" rows="10" class="form-input" placeholder="Message" data-v-01e47f1f>${ssrInterpolate(form.message)}</textarea><div data-v-01e47f1f><button type="submit" class="form-button" data-v-01e47f1f> Send </button></div></div></form><!--]-->`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/about.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var about = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-01e47f1f"]]);
var about$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": about
}, Symbol.toStringTag, { value: "Module" }));
;
var Cv_vue_vue_type_style_index_0_lang = "";
const _sfc_main$k = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="background"><canvas id="canvas" width="500" height="500"></canvas></div><span id="measureWidth"></span><div class="intro-box"><h1 class="title"></h1><h2 class="oneliner"></h2><h2 class="title"></h2></div><legend><ul></ul></legend><div class="chart"><div class="skills"></div></div><div class="skillbars-container"><div class="skillbars"></div></div><div class="social-icons"></div><div id="scroll-left">\u2039</div><div id="scroll-right">\u203A</div><!--]-->`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Cv.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var Timeline$1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$j = defineComponent({
  __name: "console",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Timeline - Muhamamd Farhan"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="inline-flex mb-8 text-2xl font-bold">${ssrInterpolate(_ctx.t("button.events"))}</h1>`);
      _push(ssrRenderComponent(Timeline$1, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/console.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var console = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$j
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = defineComponent({
  __name: "newsletter",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Technology developing Updates! "
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Subscribe = __vite_components_0$5;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Subscribe, null, null, _parent));
      _push(`<iframe class="flex flex-col" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6547777082062102528" height="700" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe><iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7114582652485025794" height="476" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe><!--]-->`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/newsletter.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
var newsletter = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$i
}, Symbol.toStringTag, { value: "Module" }));
const meta$7 = [];
const _sfc_main$h = {
  __name: "README",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "meta": [] };
    __expose({ frontmatter });
    const head = { "meta": [] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h2>File-based Routing</h2><p>Routes will be auto-generated for Vue files in this dir with the same file structure. Check out <a href="https://github.com/hannoeru/vite-plugin-pages"><code>vite-plugin-pages</code></a> for more details.</p><h3>Path Aliasing</h3><p><code>~/</code> is aliased to <code>./src/</code> folder.</p><p>For example, instead of having</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> isDark <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../../../logic&#39;</span>
</code></pre><p>now, you can use</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> isDark <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;~/logic&#39;</span>
</code></pre></div>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/README.md");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var README = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  meta: meta$7,
  "default": _sfc_main$h
}, Symbol.toStringTag, { value: "Module" }));
var projects$1 = [
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
;
var Technology_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$g = defineComponent({
  __name: "Technology",
  __ssrInlineRender: true,
  setup(__props) {
    const projectCount = ref(6);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_card = resolveComponent("card");
      _push(`<!--[--><div class="flex flex-col" data-v-48989763><ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" data-v-48989763><!--[-->`);
      ssrRenderList(unref(projects$1).slice(0, projectCount.value), (project, index2) => {
        _push(`<li data-v-48989763>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(project.link ? "a" : "div"), {
          href: project.link,
          target: "_blank",
          rel: "noopener",
          class: ["project-item", { "project-link": project.link }]
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_card, { class: "m-1" }, {
                default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="project-heading" data-v-48989763${_scopeId2}><div class="project-headline" data-v-48989763${_scopeId2}><span class="project-title" data-v-48989763${_scopeId2}>${ssrInterpolate(project.title)}</span></div></div><div class="project-image" data-v-48989763${_scopeId2}><img${ssrRenderAttr("src", `${project.image}`)} data-v-48989763${_scopeId2}></div>`);
                    if (project.description) {
                      _push3(`<div class="project-description" data-v-48989763${_scopeId2}>${ssrInterpolate(project.description)}</div>`);
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
                  default: withCtx(() => [
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
      if (projectCount.value < unref(projects$1).length) {
        _push(`<div class="more-container" data-v-48989763><button class="more-project" data-v-48989763>Show more</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Technology.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var Technology = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-48989763"]]);
const _sfc_main$f = defineComponent({
  __name: "technique",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Techniques"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="inline-flex mb-8 text-2xl font-bold">${ssrInterpolate(_ctx.t("button.technique"))}</h1>`);
      _push(ssrRenderComponent(Technology, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/technique.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
var technique = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$f
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = defineComponent({
  __name: "timeline",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Timeline"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Events = __vite_components_0$7;
      _push(`<!--[--><h1 class="inline-flex mb-8 text-2xl font-bold">Events</h1>`);
      _push(ssrRenderComponent(_component_Events, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/timeline.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var timeline = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$e
}, Symbol.toStringTag, { value: "Module" }));
;
var Timeline_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$d = defineComponent({
  __name: "Timeline",
  __ssrInlineRender: true,
  setup(__props) {
    ref(5);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<iframe${ssrRenderAttrs(mergeProps({
        src: "http://localhost:3333/covid-tracker/index.html",
        width: "100%",
        height: "900px"
      }, _attrs))} data-v-69ee9932></iframe>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Timeline.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var Timeline = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-69ee9932"]]);
const _sfc_main$c = defineComponent({
  __name: "tracker",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Vue"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="inline-flex mb-8 text-2xl font-bold"> Tracker </h1>`);
      _push(ssrRenderComponent(Timeline, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/tracker.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var tracker = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
var projects = [
  {
    title: "Linux systems",
    description: "Environment variables used in Unified Identity Management ",
    link: "https://github.com/intigration",
    image: "https://genislab.com/wp/wp-content/uploads/2023/10/cropped-cropped-genislab-logo-s.png"
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
;
var Projects_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$b = defineComponent({
  __name: "Projects",
  __ssrInlineRender: true,
  props: {
    projectCount: {
      type: Number,
      default: 4
    },
    home: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const projectCount = ref(6);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-65b4456c><h1 class="inline-flex mb-8 text-2xl font-bold" data-v-65b4456c>Projects</h1><div class="flex flex-col" data-v-65b4456c><ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" data-v-65b4456c><!--[-->`);
      ssrRenderList(unref(projects).slice(
        0,
        props.home ? props.projectCount : projectCount.value
      ), (project, index2) => {
        _push(`<li data-v-65b4456c>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(project.link ? "a" : "div"), {
          href: project.link,
          target: "_blank",
          rel: "noopener",
          class: ["project-item", { "project-link": project.link }]
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="project-image" data-v-65b4456c${_scopeId}><img${ssrRenderAttr("src", `${project.image}`)} data-v-65b4456c${_scopeId}></div><div class="project-heading" data-v-65b4456c${_scopeId}><div class="project-headline" data-v-65b4456c${_scopeId}><span class="project-title" data-v-65b4456c${_scopeId}>${ssrInterpolate(project.title)}</span></div></div>`);
              if (project.description) {
                _push2(`<div class="project-description" data-v-65b4456c${_scopeId}>${ssrInterpolate(project.description)}</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("div", { class: "project-image" }, [
                  createVNode("img", {
                    src: `${project.image}`
                  }, null, 8, ["src"])
                ]),
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
      if (props.home ? props.projectCount : projectCount.value < unref(projects).length) {
        _push(`<div class="more-container" data-v-65b4456c>`);
        if (props.home) {
          _push(ssrRenderComponent(_component_RouterLink, {
            to: "/works",
            class: "more-project"
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` View all `);
              } else {
                return [
                  createTextVNode(" View all ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<button class="more-project" data-v-65b4456c> Show more </button>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Projects.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var __vite_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-65b4456c"]]);
const _sfc_main$a = defineComponent({
  __name: "works",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Projects"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Projects = __vite_components_0$1;
      _push(ssrRenderComponent(_component_Projects, _attrs, null, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/works.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var works = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
var block0 = {};
const _sfc_main$9 = defineComponent({
  __name: "[...all]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "404 - Not Found"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}> Not Found </div>`);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$9);
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/[...all].vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var ____all_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const title$6 = "BLAS/LAPACK switching";
const subsection$4 = "r";
const order$4 = 3;
const meta$6 = [{ "property": "og:title", "content": "BLAS/LAPACK switching" }];
const _sfc_main$8 = {
  __name: "blas-lapack",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "BLAS/LAPACK switching", "subsection": "r", "order": 3, "meta": [{ "property": "og:title", "content": "BLAS/LAPACK switching" }] };
    __expose({ frontmatter });
    const head = { "title": "BLAS/LAPACK switching", "meta": [{ "property": "og:title", "content": "BLAS/LAPACK switching" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>BLAS/LAPACK switching</h1><p>Since Fedora 33, R is linked against <a href="https://www.mpi-magdeburg.mpg.de/projects/flexiblas">FlexiBLAS</a>, a BLAS/LAPACK wrapper library that enables runtime switching of the optimized backend.</p><h2>Installation</h2><p>The accompanying <code>R-flexiblas</code> package enables BLAS/LAPACK switching without leaving the R session, as well as setting the number of threads for parallel backends.</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> dnf <span class="token function">install</span> R-flexiblas <span class="token comment"># install FlexiBLAS API interface for R</span>
$ <span class="token function">sudo</span> dnf <span class="token function">install</span> flexiblas-* <span class="token comment"># install all available optimized backends</span>
</code></pre><h2>Usage</h2><p>Then, in an R session we see:</p><pre class="language-r"><code class="language-r">library<span class="token punctuation">(</span>flexiblas<span class="token punctuation">)</span>

<span class="token comment"># check whether FlexiBLAS is available</span>
flexiblas_avail<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#&gt; [1] TRUE</span>

<span class="token comment"># get the current backend</span>
flexiblas_current_backend<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#&gt; [1] &quot;OPENBLAS-OPENMP&quot;</span>

<span class="token comment"># list all available backends</span>
flexiblas_list<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#&gt; [1] &quot;NETLIB&quot;           &quot;__FALLBACK__&quot;     &quot;BLIS-THREADS&quot;     &quot;OPENBLAS-OPENMP&quot;</span>
<span class="token comment">#&gt; [5] &quot;BLIS-SERIAL&quot;      &quot;ATLAS&quot;            &quot;OPENBLAS-SERIAL&quot;  &quot;OPENBLAS-THREADS&quot;</span>
<span class="token comment">#&gt; [9] &quot;BLIS-OPENMP&quot;</span>

<span class="token comment"># set/get the number of threads</span>
flexiblas_set_num_threads<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span>
flexiblas_get_num_threads<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#&gt; [1] 12</span>
</code></pre><h2>Benchmarking example</h2><p>This is an example of GEMM benchmark for all the backends available. You can run the following code interactively or as a script file.</p><pre class="language-r"><code class="language-r">library<span class="token punctuation">(</span>flexiblas<span class="token punctuation">)</span>

n <span class="token operator">&lt;-</span> <span class="token number">2000</span>
runs <span class="token operator">&lt;-</span> <span class="token number">10</span>
ignore <span class="token operator">&lt;-</span> <span class="token string">&quot;__FALLBACK__&quot;</span>

A <span class="token operator">&lt;-</span> matrix<span class="token punctuation">(</span>runif<span class="token punctuation">(</span>n<span class="token operator">*</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span> nrow<span class="token operator">=</span>n<span class="token punctuation">)</span>
B <span class="token operator">&lt;-</span> matrix<span class="token punctuation">(</span>runif<span class="token punctuation">(</span>n<span class="token operator">*</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span> nrow<span class="token operator">=</span>n<span class="token punctuation">)</span>

<span class="token comment"># load backends</span>
backends <span class="token operator">&lt;-</span> setdiff<span class="token punctuation">(</span>flexiblas_list<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ignore<span class="token punctuation">)</span>
idx <span class="token operator">&lt;-</span> flexiblas_load_backend<span class="token punctuation">(</span>backends<span class="token punctuation">)</span>

<span class="token comment"># benchmark</span>
timings <span class="token operator">&lt;-</span> sapply<span class="token punctuation">(</span>idx<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  flexiblas_switch<span class="token punctuation">(</span>i<span class="token punctuation">)</span>

  <span class="token comment"># warm-up</span>
  C <span class="token operator">&lt;-</span> A<span class="token punctuation">[</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token percent-operator operator">%*%</span> B<span class="token punctuation">[</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">]</span>

  unname<span class="token punctuation">(</span>system.time<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token keyword">in</span> seq_len<span class="token punctuation">(</span>runs<span class="token punctuation">)</span><span class="token punctuation">)</span>
      C <span class="token operator">&lt;-</span> A <span class="token percent-operator operator">%*%</span> B
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

results <span class="token operator">&lt;-</span> data.frame<span class="token punctuation">(</span>
  backend <span class="token operator">=</span> backends<span class="token punctuation">,</span>
  \`timing <span class="token punctuation">[</span>s<span class="token punctuation">]</span>\` <span class="token operator">=</span> timings<span class="token punctuation">,</span>
  \`performance <span class="token punctuation">[</span>GFlops<span class="token punctuation">]</span>\` <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token operator">^</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">/</span> timings<span class="token punctuation">,</span>
  check.names <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span>

results<span class="token punctuation">[</span>order<span class="token punctuation">(</span>results<span class="token operator">$</span>performance<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">]</span>
<span class="token comment">#&gt;            backend timing [s] performance [GFlops]</span>
<span class="token comment">#&gt; 1           NETLIB     56.776            0.2818092</span>
<span class="token comment">#&gt; 5            ATLAS      5.988            2.6720107</span>
<span class="token comment">#&gt; 2     BLIS-THREADS      3.442            4.6484602</span>
<span class="token comment">#&gt; 8      BLIS-OPENMP      3.408            4.6948357</span>
<span class="token comment">#&gt; 4      BLIS-SERIAL      3.395            4.7128130</span>
<span class="token comment">#&gt; 6  OPENBLAS-SERIAL      3.206            4.9906425</span>
<span class="token comment">#&gt; 7 OPENBLAS-THREADS      0.773           20.6985770</span>
<span class="token comment">#&gt; 3  OPENBLAS-OPENMP      0.761           21.0249671</span>
</code></pre><h2>References</h2><ul><li><a href="https://fedoraproject.org/wiki/Changes/FlexiBLAS_as_BLAS/LAPACK_manager">FlexiBLAS as BLAS/LAPACK manager</a></li><li><a href="https://github.com/Enchufa2/r-flexiblas">Upstream documentation</a></li></ul></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/blas-lapack.md");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var blasLapack = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title: title$6,
  subsection: subsection$4,
  order: order$4,
  meta: meta$6,
  "default": _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const title$5 = "Nuxt 3 Awesome Starter";
const meta$5 = [{ "property": "og:title", "content": "Nuxt 3 Awesome Starter" }];
const _sfc_main$7 = {
  __name: "docker-event",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Nuxt 3 Awesome Starter", "meta": [{ "property": "og:title", "content": "Nuxt 3 Awesome Starter" }] };
    __expose({ frontmatter });
    const head = { "title": "Nuxt 3 Awesome Starter", "meta": [{ "property": "og:title", "content": "Nuxt 3 Awesome Starter" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><p>a Nuxt 3 starter template or boilerplate with a lot of useful features. and integrated with TailwindCSS 3.</p><blockquote><p><strong>WARNING</strong> <br> Nuxt 3 is still in beta and is not recommended for production use.</p></blockquote><h2>Features</h2><ul><li>[x] \u{1F4A8} <a href="https://tailwindcss.com/">Tailwind CSS v3</a> with <a href="https://windicss.org/">Windicss</a></li><li>[x] \u2728 <a href="https://headlessui.dev/">Headless UI</a></li><li>[x] \u{1F514} <a href="https://icones.js.org/">Icon Pack Component (unplugin-icons)</a></li><li>[x] \u{1F6F9} <a href="https://pinia.vuejs.org/">State &amp; Store Management (Pinia)</a></li><li>[x] \u{1F6A9} <a href="https://github.com/intlify/nuxt3">Localization (i18n) by @intlify</a></li><li>[x] \u{1F4E6} <a href="https://vueuse.org/">Vue Composition Collection (Vueuse)</a></li><li>[x] \u{1F319} Switch Theme (light, dark, system, realtime)</li><li>[x] \u{1F1EE}\u{1F1E9} Language Switcher</li><li>[x] \u{1FA9D} Built-in Component &amp; Layout</li><li>[x] Eslint &amp; Prettier</li><li>[x] Husky &amp; Commitlint</li><li>[ ] Http Request (axios ?)</li></ul><h2>Preview</h2><table align="center"><tr><td align="center" width="75%"><img src="https://github.com/viandwi24/nuxt3-awesome-starter/blob/main/assets/images/preview.gif?raw=true" alt="Preview" title="Preview"></td><td align="center" width="25%"><img src="https://github.com/viandwi24/nuxt3-awesome-starter/blob/main/assets/images/preview_mobile.gif?raw=true" alt="Preview" title="Preview"></td></tr></table><p align="center"><br><a href="https://nuxt3-awesome-starter.vercel.app/" target="_blank"> Live Demo </a><br><br><a href="https://codesandbox.io/s/github/viandwi24/nuxt3-awesome-starter" title="Open In Code Sandbox"><img src="https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&amp;logo=codesandboxg" alt="Open In Code Sandbox"></a><br><a href="https://stackblitz.com/github/viandwi24/nuxt3-awesome-starter" title="Open In Stackblitz"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="Open In Stackblitz"></a></p><h2>Table of Contents</h2><ul><li><a href="#nuxt-3-awesome-starter">Nuxt 3 Awesome Starter</a><ul><li><a href="#built-in-components">Built-in Components</a></li><li><a href="#quick-start">Quick Start</a></li><li><a href="#notes">Notes</a><ul><li><a href="#styles">Styles</a></li><li><a href="#theme--dark-mode-">Theme (Dark Mode)</a></li><li><a href="#localization">Localization</a></li><li><a href="#icons">Icons</a></li><li><a href="#precommit-and-postmerge">Precommit and Postmerge</a></li></ul></li><li><a href="#license">License</a></li></ul></li></ul><h2>Built-in Components</h2><ul><li>[x] Footer</li><li>[x] Button</li><li>[x] Anchor (link)</li><li>[x] Navbar <ul><li>[x] Navbar Builder</li><li>[x] Drawer (on mobile)</li><li>[x] Options (on mobile)</li></ul></li><li>[x] Action Sheet</li><li>[x] Theme Toggle / Switcher</li><li>[x] Page Layout <ul><li>[x] Wrapper</li><li>[x] Header <ul><li>[x] Title</li></ul></li><li>[x] Body <ul><li>[x] Section <ul><li>[x] Section Wrapper</li><li>[x] Section Title</li></ul></li></ul></li></ul></li><li>[x] Dashboard Layout <ul><li>[x] Sidebar</li></ul></li><li>[ ] Modal</li><li>[ ] Alert</li></ul><h2>Quick Start</h2><ul><li>This project using <code>yarn</code> as package manager.</li><li>Clone this project to your computer <code>git clone https://github.com/viandwi24/nuxt3-awesome-starter</code></li><li>Install dependencies <code>yarn install</code></li><li>Run <code>yarn dev</code> to start development server and open <code>http://localhost:3000</code> in your browser</li><li>Run <code>yarn build</code> to build project and <code>yarn start</code> to start production server</li></ul><p>Checkout the <a href="https://v3.nuxtjs.org/docs/deployment">deployment documentation</a>.</p><h2>Notes</h2><h3>Styles</h3><p>Tailwindcss import managed by windicss. and you can add custom styles in :</p><pre><code>/path/to/assets/sass/app.scss
</code></pre><h3>Theme (Dark Mode)</h3><p>ThemeManager is a plugin that allows you to switch between themes. this lib in :</p><pre><code>/path/to/utils/theme.ts
</code></pre><p><code>Thememanager</code> is a function-class construct when app.vue before mounted. theme construct inside <code>AppSetup()</code> in <code>/path/to/app.vue</code> :</p><pre class="language-vue"><code class="language-vue">&lt;!-- /path/to/app.vue --&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
import { AppSetup } from &#39;~/utils/app&#39;;
// app setup
AppSetup()
&lt;/script&gt;
</code></pre><p>To change theme, you can direct set theme from state <code>theme.setting</code>, example :</p><pre class="language-vue"><code class="language-vue">&lt;script lang=&quot;ts&quot; setup&gt;
import { IThemeSettingOptions } from &#39;~/utils/theme&#39;
const themeSetting = useState&lt;IThemeSettingOptions&gt;(&#39;theme.setting&#39;)
themeSetting.value = &#39;dark&#39;
&lt;/script&gt;
</code></pre><p>When you change state <code>theme.setting</code>, it will automatically change theme.</p><p>Theme Setting have 4 options :</p><ul><li><code>light</code></li><li><code>dark</code></li><li><code>system</code> (operating system theme)</li><li><code>realtime</code> (realtime theme, if 05:00 - 17:00, it will change to light theme, otherwise dark)</li></ul><p>We have state <code>theme.current</code>, this state return <code>light</code> or <code>dark</code> theme. basically it\u2019s process from <code>theme.setting</code>. dont change theme with this state.</p><h3>Localization</h3><p>Localization is a plugin that allows you to switch between languages. this lib in :</p><pre><code>/path/to/utils/lang.ts
</code></pre><p><code>LanguageManager</code> is a function-class construct when app.vue before mounted. this lib depend on <a href="https://github.com/intlify/nuxt3">@intlify/nuxt3</a> lang construct inside <code>AppSetup()</code> in <code>/path/to/app.vue</code> :</p><pre><code>&lt;script lang=&quot;ts&quot; setup&gt;
import { AppSetup } from &#39;~/utils/app&#39;;
// app setup
AppSetup()
&lt;/script&gt;
To change language, you can direct set language from state \`lang.setting\`, example :
\`\`\`vue
&lt;script lang=&quot;ts&quot; setup&gt;
const langSetting = useState&lt;string&gt;(&#39;locale.setting&#39;)
langSetting.value = &#39;en&#39;
&lt;/script&gt;
</code></pre><p>When you change state <code>locale.setting</code>, it will automatically change language.</p><h3>Icons</h3><p>This project using unplugin-icons for auto generate and import icon as component.</p><p>You can see collection icon list in : <a href="https://icones.js.org/">https://icones.js.org/</a></p><p>you can use <code>&lt;prefix-collection:icon /&gt;</code> or <code>&lt;PrefixCollection:Icon /&gt;</code>.</p><p>in this project, configuration prefix as a \u201Cicon\u201D, you can see in <code>nuxt.config.ts</code> :</p><p>export default defineNuxtConfig({ \u2026</p><pre><code>vite: {
    plugins: [
        UnpluginComponentsVite({
            dts: true,
            resolvers: [
                IconsResolver({
                    prefix: &#39;Icon&#39;,
                }),
            ],
        }),
    ],
},

...
</code></pre><p>})</p><pre><code>
Example :
\`\`\`vue
// use icon from collection &quot;Simple Icons&quot; and name icon is &quot;nuxtdotjs&quot;
&lt;IconSimpleIcons:nuxtdotjs /&gt;

// use icon from collection &quot;Unicons&quot; and name icon is &quot;sun&quot;
&lt;IconUil:sun /&gt;
</code></pre><h3>Precommit and Postmerge</h3><p>This project using husky and commitlint for precommit and postmerge. when you commit, it will check your commit message and running \u201Cyarn lint-staged\u201D to check your staged files. configuration in : <code>/path/to/.husky/pre-commit</code> and <code>/path/to/commitlint.config.js</code></p><p>And when Postmerge, it will run \u201Cyarn\u201D to automatically install new dependencies. configuration in <code>/path/to/.husky/post-merge</code></p><h2>License</h2><p>This project is licensed under the MIT license, Copyright \xA9 2022 Alfian Dwi Nugraha. For more information see the <a href="LICENSE.md">LICENSE</a> file.</p></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/docker-event.md");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var dockerEvent = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title: title$5,
  meta: meta$5,
  "default": _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const title$4 = "Hello world - Blog - mfarhan";
const meta$4 = [{ "property": "og:title", "content": "Hello world - Blog - mfarhan" }];
const _sfc_main$6 = {
  __name: "hello-world",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Hello world - Blog - mfarhan", "meta": [{ "property": "og:title", "content": "Hello world - Blog - mfarhan" }] };
    __expose({ frontmatter });
    const head = { "title": "Hello world - Blog - mfarhan", "meta": [{ "property": "og:title", "content": "Hello world - Blog - mfarhan" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1 class="inline-flex mb-8 text-2xl font-bold">Hello world</h1><p>syntax highlighting example</p><pre class="language-js"><code class="language-js"><span class="token comment">// </span>
<span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&quot;bar&quot;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/hello-world.md");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var helloWorld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title: title$4,
  meta: meta$4,
  "default": _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Blog"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Articles = __vite_components_0$6;
      _push(`<!--[--><h1 class="inline-flex mb-8 text-2xl font-bold"> Articles </h1>`);
      _push(ssrRenderComponent(_component_Articles, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const title$3 = "R IDE";
const subsection$3 = "r";
const order$3 = 4;
const meta$3 = [{ "property": "og:title", "content": "R IDE" }];
const _sfc_main$4 = {
  __name: "r-ide",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "R IDE", "subsection": "r", "order": 4, "meta": [{ "property": "og:title", "content": "R IDE" }] };
    __expose({ frontmatter });
    const head = { "title": "R IDE", "meta": [{ "property": "og:title", "content": "R IDE" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h2>Integrated Development Environments for R</h2><h2>RStudio</h2><p><a href="https://rstudio.com/">RStudio</a> is an integrated development environment (IDE) for R. It includes a console, syntax-highlighting editor that supports direct code execution, as well as tools for plotting, history, debugging and workspace management.</p><h3>RStudio Desktop</h3><p>The desktop version can be installed as follows:</p><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> dnf <span class="token function">install</span> rstudio-desktop
</code></pre><p>Then, RStudio will be available in your <em>Applications</em> menu.</p><h3>RStudio Server</h3><p>Alternatively, a web-based interface to RStudio is available, which is more suitable for Fedora Server or headless installations. To install and run RStudio Server:</p><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> dnf <span class="token function">install</span> rstudio-server
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> rstudio-server
</code></pre><p>Then, you can access RStudio in a Web browser at <a href="http://127.0.0.1:8787">http://127.0.0.1:8787</a>. You will see a login page, where you can authenticate using your user/password. Note that RStudio Server binds to all interfaces by default (to 0.0.0.0), and thus it is recommended to block that port in the firewall.</p><h2>Alternatives</h2><p>These alternative IDEs for R are also available in Fedora:</p><ul><li><code>rkward</code>: Graphical front-end for the R language.</li><li><code>emacs-ess</code>: Emacs Speaks Statistics under GNU Emacs.</li></ul></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/r-ide.md");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var rIde = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title: title$3,
  subsection: subsection$3,
  order: order$3,
  meta: meta$3,
  "default": _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const title$2 = "R";
const subsection$2 = "r";
const section = "tech-languages";
const order$2 = 1;
const version = "4.0.0";
const description = "Free software environment for statistical computing and graphics.";
const meta$2 = [{ "property": "og:title", "content": "R" }, { "property": "og:description", "content": "Free software environment for statistical computing and graphics." }, { "name": "description", "content": "Free software environment for statistical computing and graphics." }];
const _sfc_main$3 = {
  __name: "r-installation",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "R", "subsection": "r", "section": "tech-languages", "order": 1, "version": "4.0.0", "description": "Free software environment for statistical computing and graphics.", "meta": [{ "property": "og:title", "content": "R" }, { "property": "og:description", "content": "Free software environment for statistical computing and graphics." }, { "name": "description", "content": "Free software environment for statistical computing and graphics." }] };
    __expose({ frontmatter });
    const head = { "title": "R", "meta": [{ "property": "og:title", "content": "R" }, { "property": "og:description", "content": "Free software environment for statistical computing and graphics." }, { "name": "description", "content": "Free software environment for statistical computing and graphics." }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h2>R in Fedora</h2><p><a href="https://www.r-project.org/">R</a> provides a wide variety of statistical and graphical techniques: linear and nonlinear modelling, statistical tests, time series analysis, classification, clustering, and much more through its rich package ecosystem.</p><h2>Installation</h2><p>The newest R release, including recommended packages and development headers and tools, can be installed by running:</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> dnf <span class="token function">install</span> R
</code></pre><p>The following components will be installed by default:</p><table><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td>R-core</td><td>The minimal R components necessary for a functional runtime</td></tr><tr><td>R-core-devel</td><td>Core files for development of R packages (no Java)</td></tr><tr><td>R-java</td><td>R with Fedora-provided Java Runtime Environment</td></tr><tr><td>R-java-devel</td><td>Development package for use with Java enabled R components</td></tr><tr><td>libRmath</td><td>Standalone math library from the R project</td></tr><tr><td>libRmath-devel</td><td>Headers from the R standalone math library</td></tr></tbody></table><h2>Running R</h2><p>To run R, simply type <code>R</code> in your terminal:</p><pre class="language-bash"><code class="language-bash">$ R
R version <span class="token number">4.0</span>.4 <span class="token punctuation">(</span><span class="token number">2021</span>-02-15<span class="token punctuation">)</span> -- <span class="token string">&quot;Lost Library Book&quot;</span>
Copyright <span class="token punctuation">(</span>C<span class="token punctuation">)</span> <span class="token number">2021</span> The R Foundation <span class="token keyword">for</span> Statistical Computing
Platform: x86_64-redhat-linux-gnu <span class="token punctuation">(</span><span class="token number">64</span>-bit<span class="token punctuation">)</span>

R is <span class="token function">free</span> software and comes with ABSOLUTELY NO WARRANTY.
You are welcome to redistribute it under certain conditions.
Type <span class="token string">&#39;license()&#39;</span> or <span class="token string">&#39;licence()&#39;</span> <span class="token keyword">for</span> distribution details.

  Natural language support but running <span class="token keyword">in</span> an English locale

R is a collaborative project with many contributors.
Type <span class="token string">&#39;contributors()&#39;</span> <span class="token keyword">for</span> <span class="token function">more</span> information and
<span class="token string">&#39;citation()&#39;</span> on how to cite R or R packages <span class="token keyword">in</span> publications.

Type <span class="token string">&#39;demo()&#39;</span> <span class="token keyword">for</span> some demos, <span class="token string">&#39;help()&#39;</span> <span class="token keyword">for</span> on-line help, or
<span class="token string">&#39;help.start()&#39;</span> <span class="token keyword">for</span> an HTML browser interface to help.
Type <span class="token string">&#39;q()&#39;</span> to quit R.

<span class="token operator">&gt;</span>
</code></pre><p>Now you can start to write in R! Let\u2019s print <em>Hello World</em>!</p><pre class="language-r"><code class="language-r">print<span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span>
</code></pre><p>If you want to <strong>exit</strong> R, type <code>quit()</code> or press <code>Ctrl</code> + <code>D</code>, then press <code>n</code> to avoid saving the workspace.</p><p>To run a program written in R, type <code>Rscript</code> followed by the path and name of the program. For example, for a script called <code>example.R</code> in the current path, run the following:</p><pre class="language-bash"><code class="language-bash">$ Rscript example.R
</code></pre><h2>What next?</h2><ul><li><a href="https://www.r-project.org/">R Project homepage</a></li><li><a href="https://cran.r-project.org/manuals.html">R Manuals</a></li><li><a href="https://r4ds.had.co.nz/">R for Data Science</a>, by Hadley Wickham.</li><li><a href="https://adv-r.hadley.nz/">Advanced R</a>, by Hadley Wickham.</li></ul></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/r-installation.md");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var rInstallation = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title: title$2,
  subsection: subsection$2,
  section,
  order: order$2,
  version,
  description,
  meta: meta$2,
  "default": _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const title$1 = "R packages";
const subsection$1 = "r";
const order$1 = 2;
const meta$1 = [{ "property": "og:title", "content": "R packages" }];
const _sfc_main$2 = {
  __name: "r-packages",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "R packages", "subsection": "r", "order": 2, "meta": [{ "property": "og:title", "content": "R packages" }] };
    __expose({ frontmatter });
    const head = { "title": "R packages", "meta": [{ "property": "og:title", "content": "R packages" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h2>Installing packages</h2><p>Recommended R packages are included as part of the R installation. A number of popular add-on packages from <a href="https://cran.r-project.org/">CRAN</a>, <a href="https://bioconductor.org/">Bioconductor</a> and other sources are readily available via the Fedora repositories. They are named with an <code>R-</code> prefix, such as <code>R-ggplot2</code>. To install a package, run:</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> dnf <span class="token function">install</span> R-ggplot2
</code></pre><p>The following command:</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> dnf repoquery <span class="token parameter variable">--repo</span><span class="token operator">=</span>fedora-source <span class="token string">&#39;R-*&#39;</span>
</code></pre><p>provides a list of all R packages in Fedora.</p><h2>Installation from source</h2><p>If you have the <a href="/tech/languages/r/r-installation.html">R package installed</a>, thousands of additional add-on packages can be installed from the official CRAN and Bioconductor repositories. To install e.g. the <code>ggplot2</code> package from source, open the <em>R console</em> and run:</p><pre class="language-r"><code class="language-r">install.packages<span class="token punctuation">(</span><span class="token string">&quot;ggplot2&quot;</span><span class="token punctuation">)</span>
</code></pre><p>With this method, packages are installed into the user home directory, under <code>~/R</code>.</p><p>See also the <a href="https://remotes.r-lib.org/"><code>remotes</code></a> package, to learn how to install packages from a variety of sources (e.g., GitHub), and the <a href="https://rstudio.github.io/renv/"><code>renv</code></a> package, to learn how to manage environments and to install specific versions of packages.</p><h2>Additional binary packages</h2><p>The <a href="https://copr.fedorainfracloud.org/coprs/iucar/cran/">cran2copr</a> project maintains binary RPM contributed repositories for the current and previous stable Fedora version for most of CRAN (~17k packages as of Apr 2021) in an automated way using <a href="https://copr.fedorainfracloud.org/">Fedora Copr</a>. These repositories are automatically synchronized with CRAN on a daily basis. To ensure compatibility with the official Fedora repository, these set of packages are named with the <code>R-CRAN-</code> prefix (<code>R-CRAN-ggplot2</code> for example), and are installed into <code>/usr/local/lib/R/library</code>.</p><p>To enable this Copr repository in your system:</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> dnf <span class="token function">install</span> <span class="token string">&#39;dnf-command(copr)&#39;</span>
$ <span class="token function">sudo</span> dnf copr <span class="token builtin class-name">enable</span> iucar/cran
</code></pre><p>For integrating binary package installation into your R session, you can install <code>R-CoprManager</code>:</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> dnf <span class="token function">install</span> R-CoprManager
</code></pre><p>With <code>CoprManager</code>, the Copr <code>iucar/cran</code> repository will be used when installing from the R console:</p><pre class="language-r"><code class="language-r">install.packages<span class="token punctuation">(</span><span class="token string">&quot;car&quot;</span><span class="token punctuation">)</span>
</code></pre><p>If a package is not available, then it just falls back to source installation from CRAN.</p><p>On the other hand, <code>remove.packages</code> will still remove only packages installed in your user library. If you want to remove system packages, run:</p><pre class="language-r"><code class="language-r">CoprManager<span class="token operator">::</span>remove_copr<span class="token punctuation">(</span><span class="token string">&quot;car&quot;</span><span class="token punctuation">)</span>
</code></pre><p>If you want to disable the <code>CoprManager</code>, so that <code>install.packages</code> only works from source again, then run:</p><pre class="language-r"><code class="language-r">CoprManager<span class="token operator">::</span>disable<span class="token punctuation">(</span><span class="token punctuation">)</span>
install.packages<span class="token punctuation">(</span><span class="token string">&quot;car&quot;</span><span class="token punctuation">)</span>
</code></pre></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/r-packages.md");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var rPackages = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title: title$1,
  subsection: subsection$1,
  order: order$1,
  meta: meta$1,
  "default": _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const title = "R SIG";
const subsection = "r";
const order = 5;
const meta = [{ "property": "og:title", "content": "R SIG" }];
const _sfc_main$1 = {
  __name: "r-sig",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "R SIG", "subsection": "r", "order": 5, "meta": [{ "property": "og:title", "content": "R SIG" }] };
    __expose({ frontmatter });
    const head = { "title": "R SIG", "meta": [{ "property": "og:title", "content": "R SIG" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>R in Fedora Special Interest Group</h1><p>There is a special interest group within the R Project for Fedora Linux. If you are interested in R and Fedora, join us in the <a href="https://stat.ethz.ch/mailman/listinfo/r-sig-fedora">r-sig-fedora</a> mailing list!</p></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/r-sig.md");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var rSig = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title,
  subsection,
  order,
  meta,
  "default": _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M21.677 14l-1.245-3.114A2.986 2.986 0 0 0 17.646 9h-4.092a3.002 3.002 0 0 0-1.544.428L7 12.434V18h2v-4.434l3-1.8v11.931l-3.462 5.194L10.202 30L14 24.303V11h3.646a.995.995 0 0 1 .928.629L20.323 16H26v-2z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M17.051 18.316L19 24.162V30h2v-6.162l-2.051-6.154l-1.898.632z",
  fill: "currentColor"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("path", {
  d: "M16.5 8A3.5 3.5 0 1 1 20 4.5A3.504 3.504 0 0 1 16.5 8zm0-5A1.5 1.5 0 1 0 18 4.5A1.502 1.502 0 0 0 16.5 3z",
  fill: "currentColor"
}, null, -1);
const _hoisted_5 = [
  _hoisted_2,
  _hoisted_3,
  _hoisted_4
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_5);
}
var __vite_components_0 = { name: "carbon-pedestrian", render };
const _sfc_main = defineComponent({
  __name: "[name]",
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_carbon_pedestrian = __vite_components_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><p class="text-4xl">`);
      _push(ssrRenderComponent(_component_carbon_pedestrian, { class: "inline-block" }, null, _parent));
      _push(`</p><p> name: props.name </p><p class="text-sm opacity-50"><em>Route</em></p><div><button class="m-3 mt-8 text-sm">${ssrInterpolate(props.name)}</button></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/hi/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _name_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
export { createApp };
