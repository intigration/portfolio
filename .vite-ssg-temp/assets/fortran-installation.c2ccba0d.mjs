import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Fortran", "meta": [{ "property": "og:title", "content": "Fortran" }, { "property": "og:description", "content": "A general-purpose, imperative computer programming language, especially suited to numeric computation and scientific computing." }, { "name": "description", "content": "A general-purpose, imperative computer programming language, especially suited to numeric computation and scientific computing." }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Fortran installation and usage</h1><h2>gfortran installation</h2><p>Fortran is a compiled language and as such it needs a compiler. To install gfortran compiler, simply type:</p><pre><code>$ sudo dnf install gcc-gfortran
</code></pre><p>This command should download and install package with compiler called gfortran. Create a Fortran program <code>your_source.f90</code>. <code>.f90</code> is the standard file extension for modern Fortran source files. The 90 refers to the first modern Fortran standard in 1990. To compile and link the program, simply run the <code>gfortran</code> command like this:</p><pre><code>$ gfortran your_source.f90
</code></pre><p>This will produce a binary file created from your source code. By default, this binary file is named <code>a.out</code>. You can run this binary by typing:</p><pre><code>$ ./a.out
</code></pre><p>There are many options you can use when running the compiler. To specify the binary file name, you can use:</p><pre><code>$ gfortran your_source.f90 -o your_binary
</code></pre><p>You can run this binary file by typing:</p><pre><code>$ ./your_binary
</code></pre><p>To see the man page of <code>gfortran</code>, simply type:</p><pre><code>$ man gfortran
</code></pre><h2>References</h2><ul><li><a href="https://fortran-lang.org/">Fortran website</a></li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/fortran/fortran-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
