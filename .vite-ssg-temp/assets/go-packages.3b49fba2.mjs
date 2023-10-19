import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Go packages", "meta": [{ "property": "og:title", "content": "Go packages" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Go packages installation</h1><h2>Go packages from upstream</h2><p>Upstream projects can be installed with <code>go get</code> command. Package names follows the import paths so to install <code>github.com/gorilla/context</code> from GitHub run:</p><pre><code>$ go get github.com/gorilla/context
</code></pre><p>If the requested package comes with an executable binary, you will find it in <code>$GOPATH/bin</code>. If you have not added that to your <code>PATH</code> environment variable yet, you can do so with these commands:</p><pre><code>$ echo &#39;export PATH=$PATH:$GOPATH/bin&#39; &gt;&gt; $HOME/.bashrc
$ source $HOME/.bashrc
</code></pre><h2>Go packages from Fedora</h2><p>Alternatively, various Go packages are packaged and available in Fedora.</p><p>The package name idiom is that the import paths of libraries are fully qualified domain names. This way you have clarity to the precise upstream being used. By truncating domain names, using \u2018-\u2019 instead of \u2018/\u2019 and appending <code>-devel</code> suffix you know how is the associated Fedora package called. For example, \u2018<a href="http://github.com/gorilla/context">github.com/gorilla/context</a>\u2019 would become <code>golang-github-gorilla-context-devel</code>. Similarly, the \u2018<a href="http://code.google.com/p/go.net">code.google.com/p/go.net</a>\u2019 repository would become <code>golang-googlecode-net-devel</code>.</p><p>To install <code>golang-googlecode-net-devel</code> package, you use DNF as usual:</p><pre><code>$ sudo dnf install golang-googlecode-net-devel
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/go/go-packages.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
