import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Ruby SIG", "meta": [{ "property": "og:title", "content": "Ruby SIG" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Ruby Special Interest Group</h1><p><a href="https://fedoraproject.org/wiki/Ruby_SIG">Ruby SIG</a> is a special interest group within Fedora Project which integrates Ruby interpreters, libraries and applications into Fedora. If you are interested in Ruby and Fedora, <a href="https://fedoraproject.org/wiki/SIGs/Ruby?rd=Ruby_SIG#Join_the_Ruby_SIG">join us</a>!</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/ruby/ruby-sig.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
