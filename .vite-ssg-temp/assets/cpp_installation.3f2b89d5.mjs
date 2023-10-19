import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "C++", "meta": [{ "property": "og:title", "content": "C++" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>C++</h1><p>Like C, C++ is also a compiled language. It has many similarities with C and to some extent it is safe to say that C is subset of C++ and C++ supports every programming technique supported by C. Next command shows how to install C++ compiler:</p><h2>GCC-C++ installation</h2><pre><code>$ sudo dnf install gcc-c++
</code></pre><p>To compile and link your program you can do the same as was described in section about C:</p><pre><code>$ g++ -std=c++14 your_source.cpp -o your_binary
</code></pre><p>Again in the command above there are a few examples of possible options which can be used. <code>-std=c++14</code> states the version of standard used when compiling your code. <code>-o your_binary</code> again states the name of your binary program. You can then run your program by typing:</p><pre><code>$ ./your_binary
</code></pre><p>To view all the options that G++ can use, visit the manual page by typing:</p><pre><code>$ man g++
</code></pre><p>You will see that the manual page is identical with the one shown for GCC.</p><h2>CLANG installation</h2><p>Clang works both for C++ and C and the installation is the same as for C:</p><pre><code>$ sudo dnf install clang
</code></pre><p>The only difference when compiling is that you need to use the command <code>clang++</code>:</p><pre><code>$ clang++ -std=c++14 your_source.cpp -o your_binary
</code></pre><p>This will produce the same result as the command with G++ above does. To see more Clang options see the manual page:</p><pre><code>$ man clang
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/c/cpp_installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
