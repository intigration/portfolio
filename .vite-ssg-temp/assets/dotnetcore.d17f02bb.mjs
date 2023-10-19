import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": ".NET Core", "meta": [{ "property": "og:title", "content": ".NET Core" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h2>.NET Core Installation</h2><p>It is not advised to mix these packages with those provided by Microsoft, please disable any other repositories providing dotnet before installing these.</p><h3>.NET Core 2.1</h3><p>.NET Core 2.1 is not packaged in the proper Fedora repository and an extra step to enable the .NET SIG\u2019s <a href="/deployment/copr/about.html">copr repository</a> repository is required:</p><pre><code>$ sudo dnf copr enable @dotnet-sig/dotnet
</code></pre><h3>.NET Core 3.1</h3><p>.NET Core 3.1 is included in Fedora 32 (and later versions.) Simply install it using one of the below variants:</p><p>Install the latest SDK:</p><pre><code>$ sudo dnf install dotnet
</code></pre><p>Or a specific version:</p><pre><code># Install .NET Core 3.1 SDK
$ sudo dnf install dotnet-sdk-3.1
</code></pre><p>To install runtime only, for example to merely deploy already prebuilt applications, where <em>x</em> stands for major and <em>y</em> stands for minor version:</p><pre><code>$ sudo dnf install dotnet-runtime-x.y
</code></pre><h3>Preview versions</h3><p>Preview packages can be installed after enabling the preview <a href="/deployment/copr/about.html">copr repository</a> repository:</p><pre><code>$ sudo dnf copr enable @dotnet-sig/dotnet-preview
$ sudo dnf install dotnet-sdk-x.y
</code></pre><h2>Getting Started</h2><p>You can create your first console app following instructions in <a href="https://dotnet.microsoft.com/learn/dotnet/hello-world-tutorial/create">this official guide</a>.</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/dotnet/dotnetcore.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
