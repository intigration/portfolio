import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "PHP", "meta": [{ "property": "og:title", "content": "PHP" }, { "property": "og:description", "content": "Server-side HTML embedded scripting language." }, { "name": "description", "content": "Server-side HTML embedded scripting language." }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>PHP</h1><h2>PHP Installation</h2><p>To install PHP, simply type:</p><pre><code>$ sudo dnf install php-cli
</code></pre><p>Above command will install latest stable PHP packages, which includes the command-line interface executing PHP scripts, <code>/usr/bin/php</code> executable, and the CGI interface.</p><p>You might want to install some other packages, e.g. PHPUnit for unit tests or Composer to manage dependencies of PHP projects. You can install them with:</p><pre><code>$ sudo dnf install phpunit composer
</code></pre><h2>PHP modules</h2><p>PHP provides only a few set of extensions, other should be installed separately. Packages of PHP modules are prefixed with <code>php-</code>, so if you need e.g. <code>mysqli</code> extension, use:</p><pre><code>$ sudo dnf install php-mysqli
</code></pre><h2>PHP Development Server</h2><p>PHP contains simple web server which can be used instead of full-featured web server. It is intended to be used only for development, not for a production environment.</p><p>You can start PHP development server by typing this in your project\u2019s root:</p><pre><code>$ sudo php --server localhost:8080 --docroot  .
</code></pre><p>Server will be accessible on <code>http://localhost:8080/</code>.</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/php/php-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
