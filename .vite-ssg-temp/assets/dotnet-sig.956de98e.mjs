import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "DotNet SIG", "meta": [{ "property": "og:title", "content": "DotNet SIG" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>DotNet SIG</h1><p>The <a href="https://fedoraproject.org/wiki/SIGs/DotNet">DotNet SIG</a> is a group of Fedora contributors that maintain <code>dotnet</code> (and related) packages in Fedora. The goal of this group is to help to anyone interested in dotnet and to support others in creating and maintaining dotnet applications. See our <a href="https://fedoraproject.org/wiki/SIGs/DotNet">wiki page</a> for more details, ways to get in touch, or information about <a href="https://fedoraproject.org/wiki/SIGs/DotNet/Join">joining the SIG</a>.</p><h2>.NET Foundation</h2><p>You can contribute to the .NET Core upstream on <a href="https://github.com/dotnet">GitHub.com/dotnet</a></p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/dotnet/dotnet-sig.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
