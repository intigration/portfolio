import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Groovy", "meta": [{ "property": "og:title", "content": "Groovy" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Groovy installation</h1><p>To install Groovy in Fedora, simply type:</p><pre><code>$ sudo dnf install groovy
</code></pre><p>This command will install several command-line executables useful for development in Groovy, notably:</p><ul><li>groovy - Groovy interpreter</li><li>grape - management tool for local Grape cache</li><li>groovyc - Groovy compiler, it allows you to compile Groovy sources into bytecode</li><li>groovydoc - utility for generating API documentation from Groovy sources</li></ul><p>There is also a graphical Groovy console:</p><ul><li>groovyConsole</li></ul><h2>Joint compilation</h2><p>Joint compilation means that Groovy compiler will compile Groovy and Java source files mixed together. To enable this feature, you may need to install Java compiler (if you don\u2019t have it already):</p><pre><code>$ sudo dnf install java-1.8.0-openjdk-devel
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/groovy/groovy-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
