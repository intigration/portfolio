import { createI18n, useI18n } from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import NProgress from "nprogress";
import { ViteSSG } from "vite-ssg";
import { useSSRContext, mergeProps, withScopeId, defineComponent, ref, unref, openBlock, createBlock, createVNode, resolveComponent, toDisplayString, shallowReactive, computed, h } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "@vue/server-renderer";
import { useRouter, useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import { useDark, useToggle } from "@vueuse/core";
const en = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Console"]);
    },
    "events": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Events"]);
    },
    "works": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Projects"]);
    },
    "technique": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Expertise"]);
    },
    "tracker": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Covid Tracker"]);
    },
    "projects": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Projects"]);
    },
    "blog": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Functions"]);
    },
    "articles": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Articles"]);
    },
    "timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Timeline"]);
    },
    "newsletter": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Trending"]);
    },
    "tweets": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tweets"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Back"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["GO"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Home"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Toggle dark mode"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Change languages"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["muhammad.farhan"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["hello"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Hi, ", _interpolate(_named("name")), "! Happy to see you"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Muhammad Farhan"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Not found"]);
  }
};
const __vite_glob_0_0$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: en
}, Symbol.toStringTag, { value: "Module" }));
const es = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Console"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Atr\xE1s"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ir"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Inicio"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Alternar modo oscuro"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Cambiar idiomas"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Plantilla de Inicio de Vite Dogm\xE1tica"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Demo de ruta din\xE1mica"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\xA1Hola, ", _interpolate(_named("name")), "!"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xBFC\xF3mo te llamas?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["No se ha encontrado"]);
  }
};
const __vite_glob_0_1$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: es
}, Symbol.toStringTag, { value: "Module" }));
const fr = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xC0 propos de"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Retour"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Essayer"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Maison"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Basculer en mode sombre"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Changer de langue"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Example d'application Vite"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["D\xE9mo de route dynamique"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Salut, ", _interpolate(_named("name")), "!"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Comment t'appelles-tu?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Page non trouv\xE9e"]);
  }
};
const __vite_glob_0_2$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fr
}, Symbol.toStringTag, { value: "Module" }));
const it = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Su di me"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Indietro"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Vai"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Home"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Attiva/disattiva modalit\xE0 scura"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Cambia lingua"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Modello per una Applicazione Vite"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Demo di rotta dinamica"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Ciao, ", _interpolate(_named("name")), "!"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Come ti chiami?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Non trovato"]);
  }
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: it
}, Symbol.toStringTag, { value: "Module" }));
const ja = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3053\u308C\u306F\uFF1F"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u623B\u308B"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9032\u3080"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30DB\u30FC\u30E0"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9\u5207\u308A\u66FF\u3048"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8A00\u8A9E\u5207\u308A\u66FF\u3048"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u56FA\u57F7\u3055\u308C\u305F Vite \u30B9\u30BF\u30FC\u30BF\u30FC\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u52D5\u7684\u30EB\u30FC\u30C8\u306E\u30C7\u30E2"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u3053\u3093\u306B\u3061\u306F\u3001", _interpolate(_named("name")), "!"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u541B\u306E\u540D\u306F\u3002"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"]);
  }
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ja
}, Symbol.toStringTag, { value: "Module" }));
const ko = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC18C\uAC1C"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB4A4\uB85C\uAC00\uAE30"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC774\uB3D9"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD648"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB2E4\uD06C\uBAA8\uB4DC \uD1A0\uAE00"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC5B8\uC5B4 \uBCC0\uACBD"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Vite \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB2E4\uC774\uB098\uBBF9 \uB77C\uC6B0\uD2B8 \uB370\uBAA8"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\uC548\uB155, ", _interpolate(_named("name")), "!"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC774\uB984\uC774 \uBB50\uC608\uC694?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"]);
  }
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ko
}, Symbol.toStringTag, { value: "Module" }));
const ptBR = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Sobre"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Voltar"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ir"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["In\xEDcio"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Alternar modo escuro"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mudar de idioma"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Modelo Opinativo de Partida de Vite"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Demonstra\xE7\xE3o de rota din\xE2mica"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Ol\xE1, ", _interpolate(_named("name")), "!"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Qual \xE9 o seu nome?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["N\xE3o encontrado"]);
  }
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ptBR
}, Symbol.toStringTag, { value: "Module" }));
const tr = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Hakk\u0131mda"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Geri"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0130LER\u0130"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Anasayfa"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Karanl\u0131k modu de\u011Fi\u015Ftir"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Dilleri de\u011Fi\u015Ftir"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["G\xF6r\xFC\u015Fl\xFC Vite Ba\u015Flang\u0131\xE7 \u015Eablonu"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Dinamik rota demosu"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Merhaba, ", _interpolate(_named("name")), "!"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ad\u0131n\u0131z nedir?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Bulunamad\u0131"]);
  }
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tr
}, Symbol.toStringTag, { value: "Module" }));
const vi = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["V\u1EC1"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Quay l\u1EA1i"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110i"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Kh\u1EDFi \u0111\u1EA7u"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Chuy\u1EC3n \u0111\u1ED5i ch\u1EBF \u0111\u1ED9 t\u1ED1i"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Thay \u0111\u1ED5i ng\xF4n ng\u1EEF"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xDD ki\u1EBFn c\xE1 nh\xE2n Vite Template \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1EA3n gi\u1EDBi thi\u1EC7u v\u1EC1 dynamic route"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Hi, ", _interpolate(_named("name")), "!"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\xEAn b\u1EA1n l\xE0 g\xEC?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Kh\xF4ng t\xECm th\u1EA5y"]);
  }
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vi
}, Symbol.toStringTag, { value: "Module" }));
const zhCN = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5173\u4E8E"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8FD4\u56DE"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u786E\u5B9A"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9996\u9875"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5207\u6362\u6DF1\u8272\u6A21\u5F0F"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5207\u6362\u8BED\u8A00"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u56FA\u6267\u5DF1\u89C1\u7684 Vite \u9879\u76EE\u6A21\u677F"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u52A8\u6001\u8DEF\u7531\u6F14\u793A"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u4F60\u597D\uFF0C", _interpolate(_named("name"))]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8F93\u5165\u4F60\u7684\u540D\u5B57"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u672A\u627E\u5230\u9875\u9762"]);
  }
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zhCN
}, Symbol.toStringTag, { value: "Module" }));
const messages = Object.fromEntries(
  Object.entries(/* @__PURE__ */ Object.assign({ "../../locales/en.yml": __vite_glob_0_0$1, "../../locales/es.yml": __vite_glob_0_1$1, "../../locales/fr.yml": __vite_glob_0_2$1, "../../locales/it.yml": __vite_glob_0_3, "../../locales/ja.yml": __vite_glob_0_4, "../../locales/ko.yml": __vite_glob_0_5, "../../locales/pt-BR.yml": __vite_glob_0_6, "../../locales/tr.yml": __vite_glob_0_7, "../../locales/vi.yml": __vite_glob_0_8, "../../locales/zh-CN.yml": __vite_glob_0_9 })).map(
    ([key, value]) => {
      const yaml = key.endsWith(".yaml");
      return [key.slice(14, yaml ? -5 : -4), value.default];
    }
  )
);
const install$2 = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: "en",
    messages
  });
  app.use(i18n);
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$2
}, Symbol.toStringTag, { value: "Module" }));
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
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$1
}, Symbol.toStringTag, { value: "Module" }));
const install = ({ isClient, router }) => {
  if (!isClient)
    return;
  router.isReady().then(async () => {
    const { registerSW } = await import("./assets/virtual_pwa-register.3d79718f.mjs");
    registerSW({ immediate: true });
  });
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install
}, Symbol.toStringTag, { value: "Module" }));
const _imports_0 = "/assets/logo.78fee544.jpg";
const _sfc_main$8 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<img${ssrRenderAttrs(mergeProps({
    alt: "mfarhan",
    src: _imports_0,
    height: "160",
    width: "160",
    class: "rounded-full"
  }, _attrs))}>`);
}
_sfc_main$8.ssrRender = _sfc_ssrRender$3;
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/components/Logo.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const HelloWorld_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = {};
const _withId$1 = /* @__PURE__ */ withScopeId("data-v-153c114f");
const _sfc_ssrRender$2 = /* @__PURE__ */ _withId$1((_ctx, _push, _parent, _attrs) => {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col my-8" }, _attrs))} data-v-153c114f><h1 class="text-4xl font-bold" data-v-153c114f>Muhammad Farhan</h1><p class="mt-4 text-xl" data-v-153c114f> AI plateform based hybrid onprem-cloud IIOT solutions for Smart factories that enable autonmous control management for manufacturing workflows . that deploy in incorporating BI, Machine Learning, Vision, Acoustic, Statistical Methods, and Optimization. <p class="mt-4 text-xl" data-v-153c114f>\u2714\uFE0F MOM (Manufacturing Operations Management)</p><br data-v-153c114f><p class="mt-4 text-xl" data-v-153c114f>\u2714\uFE0F Asset &amp; Process Performance Management</p><br data-v-153c114f><p class="mt-4 text-xl" data-v-153c114f>\u2714\uFE0F Anamoly Detection</p><br data-v-153c114f><p class="mt-4 text-xl" data-v-153c114f>\u2714\uFE0FAs a developer, I&#39;ve worked on variety of domains ranging from scripting to web development to API development to ORM development to video encoder wrappers to automated scrapping to crawlers like Dropbox / MEGA sync to AI bots development with AIML. Great expertise on Python with good fluency in Node.js / JavaScript and also familiar with C,C++ and JAVA. I&#39;ve worked on different projects around website development that incorporate SQL / NoSQL as database, Python / Node.js as backends and JavaScript-heavy frontends.</p><p class="mt-4 text-xl" data-v-153c114f>\u2714\uFE0F As a DevSecOps &amp; Cloud Engineer, I&#39;m a Google certified Associate Cloud Engineer (ACE) and an AWS certified Solutions Architect Associate (CSAA). I&#39;ve had the experience to work both with VM-based deployments and containerized ones. I work regularly on Docker based orchestrations, sometimes sole containers but mostly on Docker Compose. Mainly, an avid user of K8 (Kubernetes) and have managed clusters on GCP, AWS and bare metal servers. I&#39;ve worked on various projects like Cloud Infra and Application Management, Cloud Migration, CI/CD on Cloud and Disaster Recovery implementations.</p><p class="mt-4 text-xl" data-v-153c114f>\u2714\uFE0F A little on research, I&#39;ve had the chance to work on a project that&#39;d predict crashes on any SDN (Software Defined Network) using Information Theory, Machine Learning and Natural Language Processing. Also, researched about AI bots and their integration with different platforms like Facebook, Whatsapp and Skype using AIML. Further in individual research areas, I have been working in the field of audio/video encoding and its automation for different containers like Matroska.</p><span data-v-153c114f><a class="app-link" href="https://dev.m3-solutions.io" target="_blank" rel="noopener" data-v-153c114f>Leading towards Industry 4.0</a></span></p></div>`);
});
_sfc_main$7.ssrRender = _sfc_ssrRender$2;
_sfc_main$7.__scopeId = "data-v-153c114f";
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/components/HelloWorld.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home - Muhammad Farhan"
    });
    const name = ref("");
    useRouter();
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Logo = _sfc_main$8;
      const _component_HelloWorld = _sfc_main$7;
      _push(`<!--[--><div>`);
      _push(ssrRenderComponent(_component_Logo, null, null, _parent));
      _push(ssrRenderComponent(_component_HelloWorld, null, null, _parent));
      _push(`</div><div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="engr-farhan" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/engr-farhan?trk=profile-badge">Muhammad Farhan</a></div><div><div class="py-4"></div><input id="input"${ssrRenderAttr("value", name.value)}${ssrRenderAttr("placeholder", unref(t)("intro.whats-your-name"))}${ssrRenderAttr("aria-label", unref(t)("intro.whats-your-name"))} type="text" autocomplete="false" class="px-4 py-2 text-sm text-center bg-transparent border border-gray-200 rounded outline-none active:outline-none dark:border-gray-700" style="${ssrRenderStyle({ "width": "250px" })}"><label class="hidden" for="input">${ssrInterpolate(unref(t)("intro.whats-your-name"))}</label><div><button class="m-3 text-sm"${!name.value ? " disabled" : ""}>${ssrInterpolate(unref(t)("button.go"))}</button></div></div><!--]-->`);
    };
  }
});
const block0 = {};
if (typeof block0 === "function")
  block0(_sfc_main$6);
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const routes$1 = [
  {
    "name": "blog-languages-rust-rust-sig",
    "path": "/blog/languages/rust/rust-sig",
    "component": () => import("./assets/rust-sig.1027712d.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-rust-rust-installation",
    "path": "/blog/languages/rust/rust-installation",
    "component": () => import("./assets/rust-installation.5c4c8dc8.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-rust-rust-cargo",
    "path": "/blog/languages/rust/rust-cargo",
    "component": () => import("./assets/rust-cargo.05a866f2.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-rust-further-reading",
    "path": "/blog/languages/rust/further-reading",
    "component": () => import("./assets/further-reading.6e4cd7e0.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-rust-format-rust-code",
    "path": "/blog/languages/rust/format-rust-code",
    "component": () => import("./assets/format-rust-code.97175ac2.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-ruby-sinatra-installation",
    "path": "/blog/languages/ruby/sinatra-installation",
    "component": () => import("./assets/sinatra-installation.068549e0.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-ruby-ruby-sig",
    "path": "/blog/languages/ruby/ruby-sig",
    "component": () => import("./assets/ruby-sig.5ec0e8c1.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-ruby-ruby-installation",
    "path": "/blog/languages/ruby/ruby-installation",
    "component": () => import("./assets/ruby-installation.c88e7a77.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-ruby-ror-installation",
    "path": "/blog/languages/ruby/ror-installation",
    "component": () => import("./assets/ror-installation.b583b662.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-ruby-gems-installation",
    "path": "/blog/languages/ruby/gems-installation",
    "component": () => import("./assets/gems-installation.e39d9452.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-ruby-bundler-installation",
    "path": "/blog/languages/ruby/bundler-installation",
    "component": () => import("./assets/bundler-installation.f044c1fa.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-r-r-sig",
    "path": "/blog/languages/r/r-sig",
    "component": () => import("./assets/r-sig.d5f30ced.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-r-r-packages",
    "path": "/blog/languages/r/r-packages",
    "component": () => import("./assets/r-packages.d1166b54.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-r-r-installation",
    "path": "/blog/languages/r/r-installation",
    "component": () => import("./assets/r-installation.ac9ba974.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-r-r-ide",
    "path": "/blog/languages/r/r-ide",
    "component": () => import("./assets/r-ide.6db779fa.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-r-blas-lapack",
    "path": "/blog/languages/r/blas-lapack",
    "component": () => import("./assets/blas-lapack.46014ec2.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-python-sphinx",
    "path": "/blog/languages/python/sphinx",
    "component": () => import("./assets/sphinx.034824fe.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-python-scipy",
    "path": "/blog/languages/python/scipy",
    "component": () => import("./assets/scipy.df7d73d2.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-python-python-sig",
    "path": "/blog/languages/python/python-sig",
    "component": () => import("./assets/python-sig.97ad4c93.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-python-python-installation",
    "path": "/blog/languages/python/python-installation",
    "component": () => import("./assets/python-installation.213febde.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-python-pypi-installation",
    "path": "/blog/languages/python/pypi-installation",
    "component": () => import("./assets/pypi-installation.b99286b9.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-python-pygobject",
    "path": "/blog/languages/python/pygobject",
    "component": () => import("./assets/pygobject.e3f7b44e.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-python-pipenv",
    "path": "/blog/languages/python/pipenv",
    "component": () => import("./assets/pipenv.168823d8.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-python-multiple-pythons",
    "path": "/blog/languages/python/multiple-pythons",
    "component": () => import("./assets/multiple-pythons.fbb8f20e.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-python-micropython",
    "path": "/blog/languages/python/micropython",
    "component": () => import("./assets/micropython.49150a03.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-python-flask-installation",
    "path": "/blog/languages/python/flask-installation",
    "component": () => import("./assets/flask-installation.8378b0aa.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-python-fastapi-installation",
    "path": "/blog/languages/python/fastapi-installation",
    "component": () => import("./assets/fastapi-installation.bfc345d9.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-python-django-installation",
    "path": "/blog/languages/python/django-installation",
    "component": () => import("./assets/django-installation.3975511a.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-php-php-sig",
    "path": "/blog/languages/php/php-sig",
    "component": () => import("./assets/php-sig.2ea3dc5a.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-php-php-installation",
    "path": "/blog/languages/php/php-installation",
    "component": () => import("./assets/php-installation.08d1afee.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-php-php-frameworks",
    "path": "/blog/languages/php/php-frameworks",
    "component": () => import("./assets/php-frameworks.0a6c1076.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-php-pear-installation",
    "path": "/blog/languages/php/pear-installation",
    "component": () => import("./assets/pear-installation.06795556.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-perl-perl-modules",
    "path": "/blog/languages/perl/perl-modules",
    "component": () => import("./assets/perl-modules.74ec85fc.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-perl-perl-installation",
    "path": "/blog/languages/perl/perl-installation",
    "component": () => import("./assets/perl-installation.c3632aed.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-ocaml-ocaml-installation",
    "path": "/blog/languages/ocaml/ocaml-installation",
    "component": () => import("./assets/ocaml-installation.8c0e93d6.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-nodejs-SIG",
    "path": "/blog/languages/nodejs/sig",
    "component": () => import("./assets/SIG.059a7eb8.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-nodejs-nodejs",
    "path": "/blog/languages/nodejs/nodejs",
    "component": () => import("./assets/nodejs.ee952f08.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-nodejs-modules",
    "path": "/blog/languages/nodejs/modules",
    "component": () => import("./assets/modules.a43779d1.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-lua-lua_installation",
    "path": "/blog/languages/lua/lua_installation",
    "component": () => import("./assets/lua_installation.77867971.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-java-java-sig",
    "path": "/blog/languages/java/java-sig",
    "component": () => import("./assets/java-sig.643aeac8.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-java-java-installation",
    "path": "/blog/languages/java/java-installation",
    "component": () => import("./assets/java-installation.2b4fe694.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-java-java-build-tools-installation",
    "path": "/blog/languages/java/java-build-tools-installation",
    "component": () => import("./assets/java-build-tools-installation.cc3911aa.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-haskell-sig",
    "path": "/blog/languages/haskell/sig",
    "component": () => import("./assets/sig.55ccb024.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-haskell-leksah",
    "path": "/blog/languages/haskell/leksah",
    "component": () => import("./assets/leksah.168e8b94.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-haskell-haskell-installation",
    "path": "/blog/languages/haskell/haskell-installation",
    "component": () => import("./assets/haskell-installation.70a81b04.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-haskell-cabal",
    "path": "/blog/languages/haskell/cabal",
    "component": () => import("./assets/cabal.568d9a7d.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-groovy-groovy-installation",
    "path": "/blog/languages/groovy/groovy-installation",
    "component": () => import("./assets/groovy-installation.276b87cf.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-go-go-programs",
    "path": "/blog/languages/go/go-programs",
    "component": () => import("./assets/go-programs.3ae55a59.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-go-go-packages",
    "path": "/blog/languages/go/go-packages",
    "component": () => import("./assets/go-packages.3b49fba2.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-go-go-installation",
    "path": "/blog/languages/go/go-installation",
    "component": () => import("./assets/go-installation.e277e78c.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-gjs-gjs-installation",
    "path": "/blog/languages/gjs/gjs-installation",
    "component": () => import("./assets/gjs-installation.d8201c50.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-fortran-fortran-installation",
    "path": "/blog/languages/fortran/fortran-installation",
    "component": () => import("./assets/fortran-installation.c2ccba0d.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-elixir-elixir-installation",
    "path": "/blog/languages/elixir/elixir-installation",
    "component": () => import("./assets/elixir-installation.c86729f6.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-dotnet-mono",
    "path": "/blog/languages/dotnet/mono",
    "component": () => import("./assets/mono.fdbfc102.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-dotnet-mono-sig",
    "path": "/blog/languages/dotnet/mono-sig",
    "component": () => import("./assets/mono-sig.0a86ffe4.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-dotnet-dotnetcore",
    "path": "/blog/languages/dotnet/dotnetcore",
    "component": () => import("./assets/dotnetcore.d17f02bb.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-dotnet-dotnet-sig",
    "path": "/blog/languages/dotnet/dotnet-sig",
    "component": () => import("./assets/dotnet-sig.956de98e.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-dotnet-dotnet-ide",
    "path": "/blog/languages/dotnet/dotnet-ide",
    "component": () => import("./assets/dotnet-ide.4782183e.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-dotnet-about",
    "path": "/blog/languages/dotnet/about",
    "component": () => import("./assets/about.49477693.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-c-static-analysis",
    "path": "/blog/languages/c/static-analysis",
    "component": () => import("./assets/static-analysis.4b5cc3d8.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-c-gtk",
    "path": "/blog/languages/c/gtk",
    "component": () => import("./assets/gtk.f640e505.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-c-c_installation",
    "path": "/blog/languages/c/c_installation",
    "component": () => import("./assets/c_installation.fb2c6781.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-c-cpp_installation",
    "path": "/blog/languages/c/cpp_installation",
    "component": () => import("./assets/cpp_installation.3f2b89d5.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-c-cmake",
    "path": "/blog/languages/c/cmake",
    "component": () => import("./assets/cmake.7e5db115.mjs"),
    "props": true
  },
  {
    "name": "blog-languages-c-autotools",
    "path": "/blog/languages/c/autotools",
    "component": () => import("./assets/autotools.3d4512bc.mjs"),
    "props": true
  },
  {
    "name": "hi-name",
    "path": "/hi/:name",
    "component": () => import("./assets/_name_.5f634a5a.mjs"),
    "props": true
  },
  {
    "name": "blog",
    "path": "/blog",
    "component": () => import("./assets/index.e51ba277.mjs"),
    "props": true
  },
  {
    "name": "blog-hello-world",
    "path": "/blog/hello-world",
    "component": () => import("./assets/hello-world.93c138fc.mjs"),
    "props": true
  },
  {
    "name": "blog-docker-event",
    "path": "/blog/docker-event",
    "component": () => import("./assets/docker-event.8caae1ae.mjs"),
    "props": true
  },
  {
    "name": "all",
    "path": "/:all(.*)",
    "component": () => import("./assets/_...all_.e575f86d.mjs"),
    "props": true,
    "meta": {
      "layout": 404
    }
  },
  {
    "name": "works",
    "path": "/works",
    "component": () => import("./assets/works.85e14b5a.mjs"),
    "props": true
  },
  {
    "name": "tracker",
    "path": "/tracker",
    "component": () => import("./assets/tracker.0bca93a9.mjs"),
    "props": true
  },
  {
    "name": "timeline",
    "path": "/timeline",
    "component": () => import("./assets/timeline.d5687315.mjs"),
    "props": true
  },
  {
    "name": "technique",
    "path": "/technique",
    "component": () => import("./assets/technique.a800d0d5.mjs"),
    "props": true
  },
  {
    "name": "README",
    "path": "/readme",
    "component": () => import("./assets/README.484d14a6.mjs"),
    "props": true
  },
  {
    "name": "newsletter",
    "path": "/newsletter",
    "component": () => import("./assets/newsletter.5cc5fe0f.mjs"),
    "props": true
  },
  {
    "name": "index",
    "path": "/",
    "component": _sfc_main$6,
    "props": true,
    "meta": {
      "layout": "home"
    }
  },
  {
    "name": "console",
    "path": "/console",
    "component": () => import("./assets/console.f2716559.mjs"),
    "props": true
  },
  {
    "name": "about",
    "path": "/about",
    "component": () => import("./assets/about.b76dc0a4.mjs"),
    "props": true
  }
];
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$3 = /* @__PURE__ */ createVNode("path", {
  d: "M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createVNode("path", {
  d: "M15 8h2v11h-2z",
  fill: "currentColor"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createVNode("path", {
  d: "M16 22a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 22z",
  fill: "currentColor"
}, null, -1);
function render$3(_ctx, _cache) {
  return openBlock(), createBlock("svg", _hoisted_1$3, [
    _hoisted_2$3,
    _hoisted_3,
    _hoisted_4
  ]);
}
const __vite_components_0$2 = { render: render$3 };
const _sfc_main$5 = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_carbon_warning = __vite_components_0$2;
      const _component_router_view = resolveComponent("router-view");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "px-4 py-8 text-center dark:text-gray-200" }, _attrs))} data-v-0089a0b0><div data-v-0089a0b0><p class="text-4xl" data-v-0089a0b0>`);
      _push(ssrRenderComponent(_component_carbon_warning, { class: "inline-block" }, null, _parent));
      _push(`</p></div>`);
      _push(ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(`<div data-v-0089a0b0><button class="m-2 mt-8 text-sm" data-v-0089a0b0>${ssrInterpolate(unref(t)("button.back"))}</button></div></main>`);
    };
  }
});
const _404_vue_vue_type_style_index_0_scoped_true_lang = "";
_sfc_main$5.__scopeId = "data-v-0089a0b0";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/layouts/404.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 20 20"
};
const _hoisted_2$2 = /* @__PURE__ */ createVNode("g", { fill: "none" }, [
  /* @__PURE__ */ createVNode("path", {
    d: "M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z",
    fill: "currentColor"
  })
], -1);
function render$2(_ctx, _cache) {
  return openBlock(), createBlock("svg", _hoisted_1$2, [
    _hoisted_2$2
  ]);
}
const __vite_components_0$1 = { render: render$2 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 20 20"
};
const _hoisted_2$1 = /* @__PURE__ */ createVNode("g", { fill: "none" }, [
  /* @__PURE__ */ createVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm4 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0zm-.464 4.95l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414zm2.12-10.607a1 1 0 0 1 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM17 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1zm-7 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM5.05 6.464A1 1 0 1 0 6.465 5.05l-.708-.707a1 1 0 0 0-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414zM4 11a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1z",
    fill: "currentColor"
  })
], -1);
function render$1(_ctx, _cache) {
  return openBlock(), createBlock("svg", _hoisted_1$1, [
    _hoisted_2$1
  ]);
}
const __vite_components_1 = { render: render$1 };
const isDark = useDark();
useToggle(isDark);
const _withId = /* @__PURE__ */ withScopeId("data-v-12fb91f0");
const _sfc_main$4 = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_heroicons_solid_moon = __vite_components_0$1;
      const _component_heroicons_solid_sun = __vite_components_1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "flex bg-gray-50 dark:bg-gray-900 top-0 flex-col p-8 z-1 md:sticky md:flex-row md:items-center md:justify-between" }, _attrs))} data-v-12fb91f0><nav class="flex flex-col items-start space-y-4 md:space-x-4 md:flex-row md:space-y-0" data-v-12fb91f0>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/",
        class: "header-link"
      }, {
        default: _withId((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-12fb91f0${_scopeId}>${ssrInterpolate(unref(t)("button.home"))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(t)("button.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: "/timeline",
        class: "header-link"
      }, {
        default: _withId((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-12fb91f0${_scopeId}>${ssrInterpolate(unref(t)("button.timeline"))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(t)("button.timeline")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: "/technique",
        class: "header-link"
      }, {
        default: _withId((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-12fb91f0${_scopeId}>${ssrInterpolate(unref(t)("button.technique"))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(t)("button.technique")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: "/works",
        class: "header-link"
      }, {
        default: _withId((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-12fb91f0${_scopeId}>${ssrInterpolate(unref(t)("button.works"))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(t)("button.works")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: "/blog",
        class: "header-link"
      }, {
        default: _withId((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-12fb91f0${_scopeId}>${ssrInterpolate(unref(t)("button.blog"))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(t)("button.blog")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: "/newsletter",
        class: "header-link"
      }, {
        default: _withId((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-12fb91f0${_scopeId}>${ssrInterpolate(unref(t)("button.newsletter"))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(t)("button.newsletter")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: "/about",
        class: "header-link"
      }, {
        default: _withId((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-12fb91f0${_scopeId}>${ssrInterpolate(unref(t)("button.about"))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(t)("button.about")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="flex mt-8 items-start space-x-4 md:mt-0" data-v-12fb91f0><button class="btn-primary" data-v-12fb91f0>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/tracker",
        class: "header-link"
      }, {
        default: _withId((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-12fb91f0${_scopeId}>${ssrInterpolate(unref(t)("button.tracker"))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(t)("button.tracker")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button><button class="header-link"${ssrRenderAttr("aria-label", unref(t)("button.toggle_dark"))} data-v-12fb91f0>`);
      if (unref(isDark)) {
        _push(ssrRenderComponent(_component_heroicons_solid_moon, null, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_heroicons_solid_sun, null, null, _parent));
      }
      _push(`</button></div></header>`);
    };
  }
});
const Header_vue_vue_type_style_index_0_scoped_true_lang = "";
_sfc_main$4.__scopeId = "data-v-12fb91f0";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/components/Header.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 20 20"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("g", { fill: "none" }, [
  /* @__PURE__ */ createVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7 2a1 1 0 0 1 1 1v1h3a1 1 0 1 1 0 2H9.578a18.87 18.87 0 0 1-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 1 1-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 0 1-3.107 3.567a1 1 0 0 1-1.334-1.49a17.087 17.087 0 0 0 3.13-3.733a18.992 18.992 0 0 1-1.487-2.494a1 1 0 1 1 1.79-.89c.234.47.489.928.764 1.372c.417-.934.752-1.913.997-2.927H3a1 1 0 1 1 0-2h3V3a1 1 0 0 1 1-1zm6 6a1 1 0 0 1 .894.553l2.991 5.982a.869.869 0 0 1 .02.037l.99 1.98a1 1 0 1 1-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 1 1-1.788-.894l.99-1.98l.019-.038l2.99-5.982A1 1 0 0 1 13 8zm-1.382 6h2.764L13 11.236L11.618 14z",
    fill: "currentColor"
  })
], -1);
function render(_ctx, _cache) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}
const __vite_components_0 = { render };
const _sfc_main$3 = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const { t, availableLocales, locale } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_heroicons_solid_translate = __vite_components_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "flex flex-col m-8 text-sm md:flex-row md:items-center md:justify-between" }, _attrs))} data-v-2f108b57><nav class="flex flex-col items-start space-y-4 md:space-x-4 md:space-y-0 md:flex-row" data-v-2f108b57><a class="header-link" href="https://hub.docker.com/u/intigration" target="_blank" rel="noopener" data-v-2f108b57><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 34 34" data-testid="svg_DockerHubIcon" style="${ssrRenderStyle({ "width": "138px", "height": "26px" })}" data-v-2f108b57><g data-v-2f108b57><g fill="currentColor" fill-rule="evenodd" data-v-2f108b57><path d="M63.12 14.601c.292-.29.633-.519 1.023-.687.389-.168.806-.252 1.25-.252.402 0 .773.067 1.114.202.341.134.667.333.977.595.183.147.39.22.62.22.275 0 .501-.091.68-.275a.943.943 0 0 0 .27-.687.932.932 0 0 0-.329-.724c-.937-.83-2.048-1.245-3.332-1.245-1.412 0-2.617.5-3.615 1.502-.998 1.002-1.497 2.211-1.497 3.628 0 1.417.499 2.626 1.497 3.628.998 1.001 2.203 1.502 3.615 1.502 1.278 0 2.39-.415 3.332-1.245a.968.968 0 0 0 .302-.706.92.92 0 0 0-.95-.953 1.021 1.021 0 0 0-.602.202c-.305.263-.627.46-.968.591-.34.131-.712.197-1.114.197-.444 0-.861-.084-1.25-.252a3.199 3.199 0 0 1-1.963-2.964 3.194 3.194 0 0 1 .94-2.277zm15.771-2.267a1.055 1.055 0 0 0-.205-.307.893.893 0 0 0-.301-.206.951.951 0 0 0-.374-.073.926.926 0 0 0-.512.146l-5.46 3.564V8.312a.93.93 0 0 0-.278-.683.913.913 0 0 0-.67-.279.924.924 0 0 0-.68.28.929.929 0 0 0-.28.682v12.735c0 .262.093.488.28.678.185.189.412.283.68.283a.906.906 0 0 0 .67-.283.935.935 0 0 0 .279-.678v-3.308l1.114-.733 4.218 4.755a.88.88 0 0 0 .639.247.951.951 0 0 0 .374-.073.902.902 0 0 0 .301-.206c.085-.088.154-.19.205-.307a.885.885 0 0 0 .078-.367.97.97 0 0 0-.265-.668l-3.925-4.434 3.825-2.492c.244-.165.365-.418.365-.76a.887.887 0 0 0-.078-.367zm-21.838 5.785a3.255 3.255 0 0 1-1.702 1.718 3.08 3.08 0 0 1-1.251.257c-.45 0-.87-.086-1.26-.257a3.225 3.225 0 0 1-1.013-.691 3.284 3.284 0 0 1-.68-1.022 3.128 3.128 0 0 1-.252-1.246c0-.44.084-.855.251-1.246.168-.39.395-.731.68-1.022.286-.29.624-.52 1.014-.691.39-.171.81-.257 1.26-.257.444 0 .86.086 1.25.257a3.257 3.257 0 0 1 1.703 1.717c.168.388.251.802.251 1.242 0 .44-.083.854-.251 1.241zm.662-4.869c-1.01-1.002-2.215-1.502-3.615-1.502-1.412 0-2.617.5-3.615 1.502-.998 1.002-1.498 2.211-1.498 3.628 0 1.417.5 2.626 1.498 3.628.998 1.001 2.203 1.502 3.615 1.502 1.4 0 2.605-.5 3.615-1.502.998-.99 1.497-2.199 1.497-3.628a5.3 5.3 0 0 0-.379-1.97 5.031 5.031 0 0 0-1.118-1.658zm41.03-.861a1.797 1.797 0 0 0-.644-.39 3.775 3.775 0 0 0-.85-.197 7.268 7.268 0 0 0-.862-.054 4.97 4.97 0 0 0-1.716.293 5.234 5.234 0 0 0-1.489.842V12.7a.92.92 0 0 0-.278-.673.913.913 0 0 0-.671-.28.923.923 0 0 0-.68.28.92.92 0 0 0-.279.673v8.355a.92.92 0 0 0 .279.674c.185.186.412.28.68.28a.914.914 0 0 0 .671-.28.92.92 0 0 0 .278-.674v-4.177a3.232 3.232 0 0 1 .936-2.277c.29-.29.629-.519 1.018-.687.39-.168.807-.252 1.25-.252.451 0 .868.077 1.252.23.152.067.286.1.401.1a.95.95 0 0 0 .375-.073.89.89 0 0 0 .3-.207c.086-.088.154-.19.206-.306A.913.913 0 0 0 99 13.03a.853.853 0 0 0-.256-.641zm-16.708 3.536c.097-.336.247-.643.448-.92.2-.278.438-.516.711-.715.274-.199.576-.353.904-.463a3.175 3.175 0 0 1 2.023 0 3.279 3.279 0 0 1 1.606 1.177c.204.278.358.585.461.921h-6.153zm6.692-2.675c-1.01-1.002-2.216-1.502-3.615-1.502-1.412 0-2.618.5-3.616 1.502-.998 1.002-1.497 2.211-1.497 3.628 0 1.417.5 2.626 1.497 3.628.998 1.001 2.204 1.502 3.616 1.502 1.284 0 2.398-.415 3.341-1.245a.954.954 0 0 0 .274-.688.927.927 0 0 0-.27-.682.918.918 0 0 0-.68-.27.995.995 0 0 0-.63.238 3.011 3.011 0 0 1-.93.55 3.202 3.202 0 0 1-1.105.183c-.353 0-.693-.055-1.018-.165a3.28 3.28 0 0 1-.895-.463 3.197 3.197 0 0 1-1.164-1.635h7.23a.94.94 0 0 0 .959-.953c0-.708-.125-1.367-.374-1.974a4.991 4.991 0 0 0-1.123-1.654zm-42.988 4.87a3.245 3.245 0 0 1-1.703 1.718c-.389.17-.806.256-1.25.256-.45 0-.87-.086-1.26-.257a3.227 3.227 0 0 1-1.013-.691 3.272 3.272 0 0 1-.68-1.022 3.134 3.134 0 0 1-.251-1.246c0-.44.083-.855.25-1.246.168-.39.395-.731.68-1.022.287-.29.624-.52 1.014-.691.39-.171.81-.257 1.26-.257.444 0 .861.086 1.25.257a3.246 3.246 0 0 1 1.703 1.717c.168.388.251.802.251 1.242a3.1 3.1 0 0 1-.25 1.241zm1.2-10.77a.922.922 0 0 0-.949.953v4.571c-.925-.751-1.993-1.126-3.204-1.126-1.412 0-2.617.5-3.615 1.502-.999 1.002-1.497 2.211-1.497 3.628 0 1.417.498 2.626 1.497 3.628.998 1.001 2.203 1.502 3.615 1.502 1.4 0 2.605-.5 3.615-1.502.999-.99 1.498-2.199 1.498-3.628V8.303a.94.94 0 0 0-.959-.953zm-26.46 4.136h3.74V8.108h-3.74v3.378zm-4.419 0h3.74V8.108h-3.74v3.378zm-4.418 0h3.739V8.108h-3.74v3.378zm-4.42 0h3.74V8.108h-3.74v3.378zm-4.418 0h3.739V8.108H2.806v3.378zm4.419-4.054h3.739V4.054h-3.74v3.378zm4.419 0h3.739V4.054h-3.74v3.378zm4.418 0h3.74V4.054h-3.74v3.378zm0-4.054h3.74V0h-3.74v3.378zM31.32 9.046c-.186-1.352-.944-2.524-2.323-3.584l-.792-.525-.53.789C27 6.74 26.66 8.146 26.772 9.495c.05.474.207 1.323.698 2.069-.49.262-1.456.623-2.739.598H.14l-.049.282c-.23 1.355-.226 5.583 2.537 8.833C4.727 23.747 7.875 25 11.984 25c8.906 0 15.495-4.075 18.58-11.482 1.213.024 3.827.007 5.17-2.541.034-.058.115-.212.349-.695l.129-.264-.755-.501c-.817-.543-2.693-.742-4.137-.471z" data-v-2f108b57></path><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.5" font-family="Comfortaa" font-size="18" font-weight="bold" data-v-2f108b57><text id="hub" fill="#FFFFFF" data-v-2f108b57><tspan x="101" y="22" data-v-2f108b57></tspan></text></g></g></g></svg></a><a class="footer-link" href="https://www.linkedin.com/in/engr-farhan/" target="_blank" rel="noopener" data-v-2f108b57><svg xmlns="http://www.w3.org/2000/svg" width="34" height="26" viewBox="0 0 34 54" class="global-nav__logo" data-v-2f108b57><title data-v-2f108b57>LinkedIn</title><g data-v-2f108b57><path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor" data-v-2f108b57></path></g></svg></a><a class="footer-link" href="https://github.com/intigration" target="_blank" rel="noopener" data-v-2f108b57><svg height="16" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle" data-v-2f108b57><path fill="currentColor" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" data-v-2f108b57></path></svg></a><a class="footer-link" href="mailto:intigration@gmail.com" data-v-2f108b57>E-mail</a><a class="footer-link" href="https://codepen.io/intigration" target="_blank" rel="noopener" data-v-2f108b57><svg class="requester-header__section-left-logo" width="32" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2f108b57><path d="M18.0379 0.13033C14.8991 -0.272747 11.7113 0.264019 8.87752 1.67275C6.04379 3.08148 3.69144 5.29889 2.11796 8.04457C0.544486 10.7903 -0.179442 13.9409 0.0377277 17.098C0.254897 20.2551 1.40341 23.277 3.33802 25.7813C5.27263 28.2857 7.90645 30.1601 10.9064 31.1676C13.9063 32.175 17.1376 32.2702 20.1917 31.4412C23.2457 30.6121 25.9854 28.896 28.0641 26.5099C30.1428 24.1237 31.4672 21.1748 31.8699 18.0359C32.4098 13.8273 31.2559 9.57657 28.6619 6.21869C26.068 2.8608 22.2465 0.670781 18.0379 0.13033Z" fill="#FF6C37" data-v-2f108b57></path><path d="M11.5674 17.0111C11.5736 17.0238 11.5841 17.0339 11.5969 17.0397C11.6097 17.0456 11.6242 17.0468 11.6378 17.0431L14.1978 16.4911L13.121 15.3999L11.5866 16.9343C11.5745 16.9425 11.5659 16.9548 11.5623 16.969C11.5588 16.9832 11.5606 16.9982 11.5674 17.0111Z" fill="white" data-v-2f108b57></path><path d="M23.5548 6.0193C23.198 6.01966 22.8459 6.10004 22.5243 6.25451C22.2027 6.40898 21.9199 6.63361 21.6966 6.91187C21.4733 7.19012 21.3153 7.51491 21.2342 7.86232C21.153 8.20973 21.1508 8.57091 21.2277 8.91928C21.3047 9.26765 21.4588 9.59433 21.6786 9.87527C21.8985 10.1562 22.1786 10.3842 22.4983 10.5426C22.818 10.701 23.1691 10.7856 23.5259 10.7903C23.8826 10.795 24.2358 10.7196 24.5596 10.5697L22.9372 8.9473C22.9186 8.92872 22.9038 8.90665 22.8937 8.88235C22.8836 8.85805 22.8784 8.83201 22.8784 8.8057C22.8784 8.77939 22.8836 8.75334 22.8937 8.72904C22.9038 8.70475 22.9186 8.68268 22.9372 8.6641L25.0572 6.5457C24.6314 6.20338 24.1011 6.01756 23.5548 6.0193Z" fill="white" data-v-2f108b57></path><path d="M25.3483 6.8208L23.3611 8.8L24.9195 10.3584C25.0343 10.2778 25.1414 10.1867 25.2395 10.0864C25.6666 9.6564 25.9152 9.08072 25.9354 8.47497C25.9556 7.86923 25.7458 7.27828 25.3483 6.8208Z" fill="white" data-v-2f108b57></path><path d="M21.3722 10.4737H21.337C21.2957 10.4733 21.2544 10.4771 21.2138 10.4849H21.1994C21.1548 10.4945 21.111 10.5073 21.0682 10.5233L21.0346 10.5393C21.0024 10.5527 20.9714 10.5687 20.9418 10.5873L20.9066 10.6097C20.8679 10.6364 20.8315 10.6664 20.7978 10.6993L14.905 16.5936L15.6346 17.3232L21.8746 11.8465C21.9099 11.8155 21.942 11.7812 21.9706 11.7441L21.9978 11.7089C22.0191 11.6776 22.0384 11.645 22.0554 11.6113C22.065 11.5921 22.073 11.5729 22.081 11.5537C22.0918 11.5281 22.1009 11.5019 22.1082 11.4753C22.1082 11.4561 22.1194 11.4369 22.1242 11.4177C22.1321 11.378 22.1375 11.338 22.1402 11.2977V11.2449C22.1402 11.2161 22.1402 11.1873 22.1402 11.1585C22.1402 11.1297 22.1402 11.1201 22.1322 11.1009C22.1026 10.9499 22.0289 10.811 21.9204 10.7019C21.8119 10.5929 21.6735 10.5184 21.5226 10.4881H21.4922C21.4526 10.4804 21.4125 10.4756 21.3722 10.4737Z" fill="white" data-v-2f108b57></path><path d="M13.3962 15.1168L14.6058 16.32L20.5146 10.4112C20.7069 10.2232 20.9575 10.1064 21.225 10.08C20.1802 9.28 19.041 9.4896 13.3962 15.1168Z" fill="white" data-v-2f108b57></path><path d="M22.2075 12.0769L22.1355 12.1473L15.8955 17.6225L16.9563 18.6817C19.5867 16.1937 21.9211 13.8241 22.2075 12.0769Z" fill="white" data-v-2f108b57></path><path d="M6.64277 24.9039C6.64601 24.9153 6.65267 24.9253 6.66182 24.9328C6.67098 24.9402 6.6822 24.9447 6.69397 24.9455L9.41396 25.1327L7.88917 23.6079L6.65557 24.8399C6.64757 24.8483 6.64212 24.8587 6.63985 24.87C6.63759 24.8814 6.6386 24.8931 6.64277 24.9039Z" fill="white" data-v-2f108b57></path><path d="M8.17383 23.3247L9.78182 24.9327C9.80091 24.9531 9.82645 24.9663 9.85413 24.9701C9.88181 24.9739 9.90996 24.968 9.93382 24.9535C9.95875 24.9411 9.97861 24.9205 9.98999 24.8951C10.0014 24.8697 10.0036 24.8411 9.99622 24.8143L9.72582 23.6591C9.70831 23.5842 9.71627 23.5056 9.74844 23.4358C9.7806 23.366 9.83514 23.3089 9.90342 23.2735C12.7226 21.8607 14.9962 20.4063 16.665 18.9535L15.545 17.8335L13.145 18.3503L8.17383 23.3247Z" fill="white" data-v-2f108b57></path><path d="M15.2012 17.4944L14.5996 16.8928L13.7676 17.7232C13.7616 17.7304 13.7583 17.7395 13.7583 17.7488C13.7583 17.7582 13.7616 17.7672 13.7676 17.7744C13.7714 17.7829 13.7783 17.7898 13.7868 17.7936C13.7954 17.7974 13.805 17.798 13.814 17.7952L15.2012 17.4944Z" fill="white" data-v-2f108b57></path><path d="M25.4043 8.11051C25.3961 8.08533 25.3826 8.0622 25.3647 8.04267C25.3469 8.02314 25.325 8.00766 25.3006 7.99728C25.2763 7.9869 25.25 7.98185 25.2235 7.98247C25.197 7.9831 25.171 7.98938 25.1471 8.0009C25.1233 8.01242 25.1022 8.02891 25.0852 8.04926C25.0683 8.06962 25.0559 8.09336 25.0489 8.1189C25.0419 8.14444 25.0404 8.17118 25.0446 8.19733C25.0488 8.22348 25.0585 8.24844 25.0731 8.27051C25.1209 8.36674 25.1399 8.47474 25.1277 8.58148C25.1155 8.68823 25.0726 8.78917 25.0043 8.87211C24.9819 8.89921 24.9676 8.93213 24.9632 8.96703C24.9587 9.00193 24.9643 9.03738 24.9792 9.06924C24.9941 9.10111 25.0178 9.12807 25.0475 9.14699C25.0771 9.16591 25.1116 9.17601 25.1467 9.17611C25.1739 9.17582 25.2007 9.16967 25.2253 9.15807C25.2499 9.14647 25.2716 9.1297 25.2891 9.10891C25.4024 8.97122 25.4735 8.80379 25.4939 8.62669C25.5143 8.4496 25.4832 8.27037 25.4043 8.11051Z" fill="#FF6C37" data-v-2f108b57></path></svg></a><a class="footer-link" href="https://codepen.io/intigration" target="_blank" rel="noopener" data-v-2f108b57><svg viewBox="0 0 138 26" fill="currentColor" stroke="#fff" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" title="CodePen" data-v-2f108b57><path d="M15 8a7 7 0 100 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0l11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 010 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 000-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6" data-v-2f108b57></path></svg></a></nav><div class="flex mt-8 items-start space-x-4 md:mt-0" data-v-2f108b57><button class="footer-link"${ssrRenderAttr("aria-label", unref(t)("button.toggle_langs"))} data-v-2f108b57>`);
      _push(ssrRenderComponent(_component_heroicons_solid_translate, null, null, _parent));
      _push(`</button></div></footer>`);
    };
  }
});
const Footer_vue_vue_type_style_index_0_scoped_true_lang = "";
_sfc_main$3.__scopeId = "data-v-2f108b57";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/components/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Header = _sfc_main$4;
  const _component_router_view = resolveComponent("router-view");
  const _component_Footer = _sfc_main$3;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex container flex-col min-h-screen" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<main class="flex flex-col flex-1 m-8">`);
  _push(ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</main>`);
}
_sfc_main$2.ssrRender = _sfc_ssrRender$1;
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/layouts/default.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = _sfc_main$4;
  const _component_router_view = resolveComponent("router-view");
  const _component_Footer = _sfc_main$3;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex container flex-col min-h-screen" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<main class="flex flex-col flex-1 m-8">`);
  _push(ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</main>`);
}
_sfc_main$1.ssrRender = _sfc_ssrRender;
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/layouts/home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const layouts = {
  "404": _sfc_main$5,
  "default": _sfc_main$2,
  "home": _sfc_main$1
};
function setupLayouts(routes2) {
  return [
    {
      path: "/",
      component: createRouterLayout(layouts),
      children: routes2
    }
  ];
}
async function resolveLayout(layout) {
  var _a;
  if (typeof layout === "function") {
    return (_a = await layout()) == null ? void 0 : _a.default;
  }
  return layout;
}
function createRouterLayout(_layouts) {
  return defineComponent(() => {
    var _a;
    const router = useRouter();
    const route = useRoute();
    const name = ref("default");
    const layouts2 = shallowReactive(_layouts);
    const layout = computed(() => layouts2[name.value]);
    async function updateLayout(_name) {
      if (typeof layouts2[_name] === "function")
        layouts2[_name] = await resolveLayout(layouts2[_name]);
      name.value = _name || "default";
    }
    router.beforeEach(async (to, from, next) => {
      var _a2;
      await updateLayout((_a2 = to.meta) == null ? void 0 : _a2.layout);
      next();
    });
    updateLayout((_a = route.meta) == null ? void 0 : _a.layout);
    return () => {
      if (!layout.value || typeof layout.value === "function")
        return h(resolveComponent("router-view"));
      return h(layout.value, {
        key: layout.name
      });
    };
  });
}
const _sfc_main = defineComponent({
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Meet Muhammad Farhan"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(ssrRenderComponent(_component_router_view, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const windi = "";
const main = "";
const routes = setupLayouts(routes$1);
const createApp = ViteSSG(_sfc_main, { routes }, (ctx) => {
  Object.values(/* @__PURE__ */ Object.assign({ "./modules/i18n.ts": __vite_glob_0_0, "./modules/nprogress.ts": __vite_glob_0_1, "./modules/pwa.ts": __vite_glob_0_2 })).map(
    (i) => {
      var _a;
      return (_a = i.install) == null ? void 0 : _a.call(i, ctx);
    }
  );
});
export {
  createApp,
  isDark as i
};
