import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "CMake", "meta": [{ "property": "og:title", "content": "CMake" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>CMake</h1><p>CMake is a multi-platform software designed for automated compilation on various operating systems. It uses a C or C++ compiler and <code>make</code> to build your project. CMake uses a configuration file named <code>CMakeLists.txt</code>, which is a file containing <code>cmake</code> commands. With these commands you can specify directories, libraries, header files, output binary files and many more features that are part of your project and are important for succesfully building your project.</p><p>To familiarize yourself with basic features of CMake you should try the online tutorial on cmake website:</p><p><a href="http://www.cmake.org/cmake-tutorial/">CMake basic tutorial</a></p><p>To discover the full application of various features that CMake has to offer use the online documentation:</p><p><a href="http://www.cmake.org/cmake/help/v3.3/">CMake latest documantation</a></p><h2>CMake installation</h2><p>To install CMake all you need to do is:</p><pre><code># sudo dnf install cmake
</code></pre><h2>CMake usage</h2><p>The beauty of CMake is that after you create a simple CMakeLists.txt file you only need to use this command:</p><pre><code># cmake /path/to/CMakeLists.txt
</code></pre><p>This command should be used in a directory where you want to have the Makefile for your project. It will create all necessary Makefiles and configuration files needed to compile your project. It is considered good practice to build outside of the source tree (i.e. do not execute the above command from within your source code directory). This will help to keep your source code free from any build artifacts and it also makes it easier to clean up if things go wrong.</p><p>Than after using the command <code>make</code> your project is built and ready for use. This <code>cmake</code> command above is only a basic example. There are of course many more options that can be used with <code>cmake</code>. These can be found in the manual page:</p><pre><code># man cmake
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/c/cmake.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
