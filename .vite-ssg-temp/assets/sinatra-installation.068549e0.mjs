import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Sinatra", "meta": [{ "property": "og:title", "content": "Sinatra" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Sinatra installation</h1><p>To install the latest upstream version of Sinatra, install Ruby first and then install Sinatra from <a href="http://RubyGems.org">RubyGems.org</a> using the <code>gem</code> command:</p><pre><code>$ sudo dnf install ruby
$ gem install sinatra
</code></pre><p>Or install RPM-packaged Sinatra alternatively with:</p><pre><code>$ sudo dnf install rubygem-sinatra
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/ruby/sinatra-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
