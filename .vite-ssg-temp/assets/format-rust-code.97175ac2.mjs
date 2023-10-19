import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Format Rust code", "meta": [{ "property": "og:title", "content": "Format Rust code" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Format Rust code</h1><p><code>rustfmt</code> is a tool for formatting Rust source code. You can install it on Fedora by running:</p><pre><code>$ sudo dnf install rustfmt
</code></pre><p>Now you can use <code>rustfmt</code> to format either a single file or the whole project:</p><ul><li>Single file:</li></ul><pre><code>$ rustfmt src/main.rs
</code></pre><ul><li>Project:</li></ul><pre><code>$ cargo fmt
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/rust/format-rust-code.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
