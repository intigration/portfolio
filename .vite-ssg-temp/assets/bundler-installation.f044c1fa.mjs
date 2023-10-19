import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Bundler", "meta": [{ "property": "og:title", "content": "Bundler" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Bundler installation</h1><p>To install Bundler on Fedora as a gem, install Ruby first and then run:</p><pre><code>$ sudo dnf install ruby
$ gem install bundler
</code></pre><p>Or install RPM-packaged Bundler alternatively with:</p><pre><code>$ sudo dnf install rubygem-bundler
</code></pre><p>Afterwards the <code>bundle</code> command should be available on your system.</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/ruby/bundler-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
