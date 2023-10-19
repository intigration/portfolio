import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Cabal", "meta": [{ "property": "og:title", "content": "Cabal" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Cabal</h1><p>To install Haskell libraries and build Haskell projects, you will likely want to install <code>cabal</code> \u2013 a system which aids in the packaging, distribution, and installation of Haskell libraries and applications.</p><p>If you\u2019ve chosen to install the Haskell Platform, then you already have Cabal installed. Otherwise, you can install it by:</p><pre><code>$ sudo dnf install cabal-install
</code></pre><p>You can then install packages from <a href="https://hackage.haskell.org/">Hackage</a> by using:</p><pre><code>$ cabal install &lt;package name&gt;
</code></pre><p>Note that Fedora offers a large number of Hackage packages in its official repositories as RPMs. You can always try installing a Hackage package via <code>dnf</code> first using:</p><pre><code>$ sudo dnf install ghc-&lt;package name&gt;
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/haskell/cabal.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
