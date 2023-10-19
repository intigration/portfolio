import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Java", "meta": [{ "property": "og:title", "content": "Java" }, { "property": "og:description", "content": "General-purpose, object-oriented and concurrent computer programming language." }, { "name": "description", "content": "General-purpose, object-oriented and concurrent computer programming language." }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Java installation</h1><p>Fedora comes with <a href="http://openjdk.java.net/">OpenJDK</a> - a free and open source implementation of the Java Platform, Standard Edition. To install it, simply type:</p><pre><code>$ sudo dnf install java-15-openjdk-devel
</code></pre><p>This command will install Java Development Kit - runtime environment and associated development tools.</p><p><a href="http://icedtea.classpath.org/wiki/IcedTea-Web">IcedTea-Web</a> may come handy if your plan is to develop Java applets or to experiment with Java Web Start. To install it, simply type:</p><pre><code>$ sudo dnf install icedtea-web
</code></pre><p>This command will install Java web browser plugin and free implementation of Java Web Start.</p><p>Later, when you will want to test your new application in a production-like environment, it\u2019s possible to install just Java runtime environment (JRE) - without development tools. This can be achieved by several means:</p><pre><code>$ sudo dnf install java-15-openjdk-headless
</code></pre><p>The command above will install so-called \u201Cheadless\u201D JRE, i.e. JRE without support for graphic and audio. If your application is supposed to run on a server without any graphical user interface (GUI) installed, then this is likely what you want.</p><p>However, if your application needs support for GUI or audio, you will likely want to install full JRE. You can do that simply by typing:</p><pre><code>$ sudo dnf install java-15-openjdk
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/java/java-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
