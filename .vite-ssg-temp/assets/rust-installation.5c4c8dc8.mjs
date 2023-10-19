import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Rust", "meta": [{ "property": "og:title", "content": "Rust" }, { "property": "og:description", "content": "Systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety." }, { "name": "description", "content": "Systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety." }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Rust installation</h1><p>In order to get started with Rust programming, type:</p><pre><code>$ sudo dnf install rust cargo
</code></pre><p>This will install the compiler (<code>rustc</code>), standard library, gdb support, documentation generator (<code>rustdoc</code>) and the package manager (<code>cargo</code>).</p><p>Continue to the next section where project creation is discussed.</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/rust/rust-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
