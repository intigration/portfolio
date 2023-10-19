import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Ruby on Rails", "meta": [{ "property": "og:title", "content": "Ruby on Rails" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Ruby on Rails installation</h1><h2>Installing Rails from <a href="http://RubyGems.org">RubyGems.org</a></h2><p>To install Ruby on Rails on Fedora as a gem, install Ruby first together with <code>ruby-devel</code>, <code>gcc</code>, <code>zlib-devel</code> packages, and then install Rails using the <code>gem</code> command:</p><pre><code>$ sudo dnf group install &quot;C Development Tools and Libraries&quot;
$ sudo dnf install ruby-devel zlib-devel
$ gem install rails
</code></pre><p>You might need to install other header files depending on the gems used in your application like installing <code>sqlite-devel</code> package for <code>sqlite3</code> gem. Note that you can always install the gems from the official repositories as RPM packages to avoid this.</p><h2>Installing Rails from Fedora official repositories</h2><p>To install RPM-packaged Ruby on Rails run:</p><pre><code>$ sudo dnf install rubygem-rails
</code></pre><p>This will install the framework itself, but if you wish to install all default gems suggested by Rails for new applications, run:</p><pre><code>$ sudo dnf group install &#39;Ruby on Rails&#39;
</code></pre><p>To take advantage of packaged gems, you need to run <code>rails</code> command with <code>--skip-bundle</code> option and then run <code>bundle --local</code> to lock your dependencies using system gems:</p><pre><code>$ rails new app --skip-bundle
$ cd app
$ bundle --local
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/ruby/ror-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
