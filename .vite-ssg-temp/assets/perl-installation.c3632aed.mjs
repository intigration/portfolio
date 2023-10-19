import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Perl", "meta": [{ "property": "og:title", "content": "Perl" }, { "property": "og:description", "content": "Highly capable, multi-purpose and feature-rich programming language." }, { "name": "description", "content": "Highly capable, multi-purpose and feature-rich programming language." }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Perl installation</h1><p>To install a full Perl environment, simply type:</p><pre><code>$ sudo dnf install perl-core
</code></pre><p>This will bring in the language interpreter and all the so-called <strong>core</strong> modules, the basic Perl development environment as recommended by Perl upstream.</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/perl/perl-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
