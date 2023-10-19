import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Node.js modules", "meta": [{ "property": "og:title", "content": "Node.js modules" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Node.js modules</h1><h2>Installation</h2><h3>Installing modules via dnf</h3><p>To install additional modules from Fedora repositories, use:</p><pre><code>$ sudo dnf install nodejs-&lt;module-name&gt;
</code></pre><p>or</p><pre><code>$ sudo dnf install &#39;npm(module-name)&#39;
</code></pre><p>For example, to install <code>express</code>, you need to type:</p><pre><code>$ sudo dnf install nodejs-express
</code></pre><p>or</p><pre><code>$ sudo dnf install &#39;npm(express)&#39;
</code></pre><p>Most modules are prefixed with <code>nodejs-</code>. There are, however, a few exceptions (for example mocha), which are not prefixed.</p><h3>Installing modules via npm</h3><p>Installing modules via npm is not recommended as it might cause dependency problems. If you need to install modules via npm, install them locally.</p><h2>Using modules installed via dnf</h2><p>npm allows using <code>require()</code> only on locally installed modules. If you want to <code>require()</code> modules installed by dnf, type in your project folder:</p><pre><code>$ npm link express
</code></pre><p>or to load global modules by default, you can set $NODE_PATH as follows:</p><pre><code>$ export NODE_PATH=/usr/lib/node_modules
</code></pre><h2>Missing modules</h2><p>npm is one of the largest ecosystem of open source libraries in the world and contains thousands of modules and it is impossible to have them all packaged as RPMs. However, if you are missing a package and think that it really should be in Fedora repositories, you have several choices:</p><p>First one is enabling testing repository. Chances are new modules are already packaged but not yet in stable repositories. To do that, type:</p><pre><code>$ sudo dnf config-manager --set-enabled updates-testing
</code></pre><p>to enable testing repository permanently. To use it temporarily, you need to type:</p><pre><code>$ sudo dnf install nodejs-&lt;module-name&gt; --enablerepo=updates-testing
</code></pre><p>Second one is joining <a href="https://fedoraproject.org/wiki/SIGs/Node.js">Node.js SIG</a> and help us improve and provide better software.</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/nodejs/modules.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
