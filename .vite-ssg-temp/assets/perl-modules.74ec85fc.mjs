import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Perl modules", "meta": [{ "property": "og:title", "content": "Perl modules" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Perl modules</h1><p>Fedora currently ships with over three thousand of actively maintained Perl modules in its repositories; in most cases installing the module of your choice should be as simple as:</p><pre><code>$ sudo dnf install &#39;perl(My::Module)&#39;
</code></pre><p>If available, this is the preferred method.</p><p>If you require a module that is not already available, you may still install them with the common Perl utilities such as <code>cpan</code> from Perl core:</p><pre><code>$ sudo cpan My::Module
</code></pre><p>or the popular <code>cpanm</code>:</p><pre><code>$ sudo dnf install cpanminus
$ sudo cpanm My::Module
</code></pre><p>However, note that binary modules installed this way may seemingly inexplicably break after upgrading to a newer Fedora release. The reason is Perl does not maintain binary compatibility between major versions. If this happens, remember to reinstall the local modules with:</p><pre><code>$ sudo cpan -f -i My::Module
</code></pre><p>or:</p><pre><code>$ sudo cpanm --reinstall My::Module
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/perl/perl-modules.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
