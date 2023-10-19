import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Haskell", "meta": [{ "property": "og:title", "content": "Haskell" }, { "property": "og:description", "content": "An advanced, general-purpose, purely-functional programming language with non-strict semantics and strong static typing.\n" }, { "name": "description", "content": "An advanced, general-purpose, purely-functional programming language with non-strict semantics and strong static typing.\n" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Stack</h1><h2>What it is</h2><p>Stack is a cross-platform build tool for Haskell that handles management of the toolchain (including the GHC compiler and MSYS2 on Windows), building and registering libraries, and more.</p><h2>What you get</h2><ul><li>Once downloaded, it has the capacity to download and install GHC and other core tools.</li><li>Project development is isolated within sandboxes, including automatic download of the right version of GHC for a given project.</li><li>It manages all Haskell-related dependencies, ensuring reproducible builds.</li><li>It fetches from a curated repository of over a thousand packages by default, known to be mutually compatible.</li><li>It can optionally use Docker to produce standalone deployments</li></ul><h2>How to install</h2><p>To install stack on Fedora, run:</p><pre><code>$ sudo dnf install stack
</code></pre><h1>GHC installation</h1><p>The Glasgow Haskell Compiler (GHC) is an open source native code compiler for Haskell.</p><p>To install GHC on Fedora, run:</p><pre><code>$ sudo dnf install ghc
</code></pre><p>This will install GHC including the <code>ghci</code> read-eval-print-loop, the <code>haddock</code> documentation generator, and several other utilities.</p><p>Please refer to the official documentation at <a href="https://haskell.org/ghc">https://haskell.org/ghc</a> for more information about GHC, or <a href="https://haskell.org">https://haskell.org</a> for information about Haskell in general.</p><h1>The Haskell Platform</h1><p>Another option is to install the <a href="https://www.haskell.org/platform/">Haskell Platform</a>, which provides <code>ghc</code> and <code>ghci</code> as above, but also includes a plethora of useful Haskell libraries and utilities to help kickstart your Haskell programming experience.</p><p>The Haskell Platform also includes Cabal, which aids in the packaging, distribution, and installation of Haskell libraries and applications.</p><p>To install the Haskell Platform, run:</p><pre><code>$ sudo dnf install haskell-platform
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/haskell/haskell-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
