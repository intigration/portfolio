import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "PEAR", "meta": [{ "property": "og:title", "content": "PEAR" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>PEAR Installation</h1><p>The PHP Extension and Application Repository is a repository of PHP software code. To install PEAR, type:</p><pre><code>$ sudo dnf install php-pear
</code></pre><h2>Upstream PEAR modules</h2><p>Use <code>pear</code> command to install PEAR extensions. To install <code>Mail_Mime</code> package (for example), type:</p><pre><code>$ sudo pear install Mail_Mime
</code></pre><p>You can find more PEAR modules <a href="http://pear.php.net/packages.php">at official PEAR site</a>.</p><h2>PEAR modules from official Fedora repositories</h2><p>Many PEAR modules are packaged and available in base Fedora to install. Not all these packages have \`php-pear-\`\` prefix to upstream PEAR names, so you can browse <a href="http://rpms.remirepo.net/rpmphp/rpm.php?type=pear">list of them online</a>.</p><p>To install <code>Mail_Mime</code> you therefore install <code>php-pear-Mail-Mime</code> package:</p><pre><code>$ sudo dnf install php-pear-Mail-Mime
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/php/pear-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
