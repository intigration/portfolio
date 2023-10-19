import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "C", "meta": [{ "property": "og:title", "content": "C" }, { "property": "og:description", "content": "A general-purpose, imperative computer programming language." }, { "name": "description", "content": "A general-purpose, imperative computer programming language." }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>C installation and usage</h1><h2>GCC installation</h2><p>C is a compiled language and as such it needs a compiler. To install a gcc compiler, simply type:</p><pre><code>$ sudo dnf install gcc
</code></pre><p>This command should download and install package with compiler called GCC. To compile and link a program written in C, simply run the <code>gcc</code> command like this:</p><pre><code>$ gcc your_source.c
</code></pre><p>This will produce a binary file created from your source code. By default, this binary file is named <code>a.out</code>. You can run this binary by typing:</p><pre><code>$ ./a.out
</code></pre><p>There are many options which you can use when running a compiler. These are some of the basic options used with <code>gcc</code>:</p><pre><code>$ gcc -std=c11 your_source.c -o your_binary
</code></pre><p>The option <code>-std=c11</code> states that the C11 or ISO/IEC 9899:2011 C language standard will be used when compiling your code. The <code>-o name</code> option simply states the name of the binary created by <code>gcc</code> command. To see all the options which you can use with <code>gcc</code> simply view its man page like this:</p><pre><code>$ man gcc
</code></pre><h3>Compiling 32-bit binaries on a 64-bit Fedora</h3><p>Let us assume you have a shiny modern computer with a 64-bit processor (AMD, Intel or similar compatible processor, this architecture is called x86_64 in Fedora) and installed 64-bit Fedora with gcc as per instructions above. GCC will naturally create 64-bit binaries suitable for your system. Yet sometimes for some sad reason you want to create a 32-bit binary (architecture like old Pentiums, called i686 in Fedora). Maybe you want to be compatible with some ancient piece of hardware or software. No matter the reason, first you need to</p><pre><code>$ sudo dnf install libgcc.i686 glibc-devel.i686
</code></pre><p>If you use additional -devel packages, install them as well with the .i686 suffix. Then you can tell gcc to produce 32-bit binaries using \u201C-m32\u201D option:</p><pre><code>$ gcc -m32 your_source.c -o your_binary
</code></pre><h2>CLANG installation</h2><p>GCC is just one of many compilers that are available for compiling C code. Another recently very popular compiler is Clang. Clang is designed to provide a substitute to GCC. One of its primary goals is to provide more detailed information about the compilation process. Error reports are much more specific and readable than reports produced by GCC. Unfortunately, Clang is a compiler only for C-like languages like C, C++, Objective-C and Objective-C++. Other languages like Java, Fortran etc. are still dependant on GCC.</p><p>If you want to install clang compiler, the instructions are similar to those used to install GCC:</p><pre><code>$ sudo dnf install clang
</code></pre><p>Clang is designed to have the same options as GCC. For example try this command:</p><pre><code>$ clang -std=c11 your_source.c -o your_binary
</code></pre><p>The command above should produce the same result as <code>gcc</code> command. To see all the options that <code>clang</code> command provides simply type:</p><pre><code>$ man clang
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/c/c_installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
