import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "R IDE", "meta": [{ "property": "og:title", "content": "R IDE" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h2>Integrated Development Environments for R</h2><h2>RStudio</h2><p><a href="https://rstudio.com/">RStudio</a> is an integrated development environment (IDE) for R. It includes a console, syntax-highlighting editor that supports direct code execution, as well as tools for plotting, history, debugging and workspace management.</p><h3>RStudio Desktop</h3><p>The desktop version can be installed as follows:</p><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> dnf <span class="token function">install</span> rstudio-desktop
</code></pre><p>Then, RStudio will be available in your <em>Applications</em> menu.</p><h3>RStudio Server</h3><p>Alternatively, a web-based interface to RStudio is available, which is more suitable for Fedora Server or headless installations. To install and run RStudio Server:</p><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> dnf <span class="token function">install</span> rstudio-server
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> --now rstudio-server
</code></pre><p>Then, you can access RStudio in a Web browser at <a href="http://127.0.0.1:8787">http://127.0.0.1:8787</a>. You will see a login page, where you can authenticate using your user/password. Note that RStudio Server binds to all interfaces by default (to 0.0.0.0), and thus it is recommended to block that port in the firewall.</p><h2>Alternatives</h2><p>These alternative IDEs for R are also available in Fedora:</p><ul><li><code>rkward</code>: Graphical front-end for the R language.</li><li><code>emacs-ess</code>: Emacs Speaks Statistics under GNU Emacs.</li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/r/r-ide.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
