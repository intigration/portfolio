import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": ".NET Platforms", "meta": [{ "property": "og:title", "content": ".NET Platforms" }, { "property": "og:description", "content": ".NET Core and Mono are open-source .NET platforms. .NET applications are developed using the C#, F# and VB.NET programming languages." }, { "name": "description", "content": ".NET Core and Mono are open-source .NET platforms. .NET applications are developed using the C#, F# and VB.NET programming languages." }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><p>.NET Core and Mono are available on Fedora. .NET applications are developed using the C#, F# and <a href="http://VB.NET">VB.NET</a> programming languages.</p><h2>.NET Core</h2><p><a href="https://docs.microsoft.com/en-us/dotnet/core/">.NET Core</a> is a general-purpose, modular, cross-platform and open-source development Platform.</p><p>.NET Core 3.1 and later versions are packaged in Fedora since 32. Installing the latest SDK can be done with a simple</p><pre><code>$ sudo dnf install dotnet
</code></pre><p>For older versions of Fedora and .NET Core 2.1, add the .NET SIG\u2019s <a href="/deployment/copr/about.html">copr repository</a> repository and install the <code>dotnet-sdk-2.1</code> package.</p><pre><code>$ sudo dnf copr enable @dotnet-sig/dotnet
$ sudo dnf install dotnet-sdk-2.1
</code></pre><p>It is not advised to mix these packages with those provided by Microsoft, please disable any other repositories providing dotnet before installing these.</p><p>See the <a href="dotnetcore.html">.NET Core</a> page for more information.</p><h2>Mono</h2><p><a href="http://www.mono-project.com/">Mono</a> is a free and open source implementation of the .NET Framework.</p><p>To install Mono, simply type:</p><pre><code>$ sudo dnf install mono-devel
</code></pre><p>See the <a href="mono.html">Mono</a> page for more information.</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/dotnet/about.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
