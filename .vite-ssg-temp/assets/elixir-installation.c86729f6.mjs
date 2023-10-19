import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Elixir", "meta": [{ "property": "og:title", "content": "Elixir" }, { "property": "og:description", "content": "A dynamic, functional language designed for building scalable applications." }, { "name": "description", "content": "A dynamic, functional language designed for building scalable applications." }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Elixir installation</h1><p>To install Elixir on Fedora run:</p><pre><code>$ sudo dnf install elixir
</code></pre><p>This will install Elixir including <code>iex</code> interactive shell and <code>mix</code> build tool.</p><p>Please refer to the official documentation at <a href="http://elixir-lang.org/docs.html">http://elixir-lang.org/docs.html</a> for more.</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/elixir/elixir-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
