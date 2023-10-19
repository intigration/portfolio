import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Leksah", "meta": [{ "property": "og:title", "content": "Leksah" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Leksah</h1><p><a href="http://leksah.org/">Leksah</a> is a Haskell IDE written in Haskell using Gtk. It offers workspaces for complex project with multiple packages with automatic build of dependencies. It enables standard IDE features (debugging, auto completition etc.).</p><p>To install Leksah run command:</p><pre><code>$ sudo dnf install ghc cabal-install
</code></pre><p>or install Haskell Platform by command:</p><pre><code>$ sudo dnf install haskell-platform
</code></pre><p>You have to also install the necessary libraries for successful build by:</p><pre><code>$ sudo dnf install gobject-introspection-devel webkitgtk3-devel gtksourceview3-devel
</code></pre><p>You can than install the IDE using <code>cabal</code>. First update all the packages by:</p><pre><code>$ cabal update
</code></pre><p>Now upgrade cabal to the latest stable version:</p><pre><code>$ cabal install Cabal
</code></pre><p>Install build packages and tools:</p><pre><code>$ cabal install alex happy
$ cabal install gtk2hs-buildtools
</code></pre><p>Install the IDE:</p><pre><code>$ cabal install leksah
</code></pre><p>Than you can run the IDE:</p><pre><code>$ leksah
</code></pre><p>NOTE: It might happen that you need to reboot the system before using Leksah.</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/haskell/leksah.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
