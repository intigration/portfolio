import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Mono", "meta": [{ "property": "og:title", "content": "Mono" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h2>Mono installation</h2><p>To install Mono, simply type:</p><pre><code>$ sudo dnf install mono-devel
</code></pre><p>This command will install Mono \u2013 the runtime environment and associated development tools.</p><h2>NUnit installation</h2><p><a href="http://nunit.org/">NUnit</a> is very useful for test driven development. To install it, simply type:</p><pre><code>$ sudo dnf install nunit nunit-gui
</code></pre><h2>Documentation</h2><p>The information about installing Mono and related details can be found at <a href="http://www.mono-project.com/docs">mono-project.com/docs</a></p><h2>API Reference</h2><p>The documentation by Microsoft for the .NET Framework API generally applies to Mono as well, with minor differences. You can find the .NET Framework API documentation for versions 4.5 and higher at <a href="https://docs.microsoft.com/en-us/dotnet/api/index?view=netframework-4.5">docs.microsoft.com</a>. In the Fedora packages for Mono, we don\u2019t support earlier versions of the .NET Framework API.</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/dotnet/mono.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
