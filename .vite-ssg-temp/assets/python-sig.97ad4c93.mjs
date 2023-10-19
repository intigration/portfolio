import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Python SIG", "meta": [{ "property": "og:title", "content": "Python SIG" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Python Special Interest Group</h1><p><a href="https://fedoraproject.org/wiki/SIGs/Python">Python SIG</a> is a special interest group within Fedora Project which integrates Python interpreters, libraries and applications into Fedora. If you are interested in Python and Fedora, join us!</p><h2>Contact</h2><p>Wikipage: <a href="https://fedoraproject.org/wiki/SIGs/Python">SIGs/Python</a> Mailing List: <a href="https://lists.fedoraproject.org/archives/list/python-devel@lists.fedoraproject.org/">python-devel</a> IRC: #fedora-python on irc.libera.chat</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/python/python-sig.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
