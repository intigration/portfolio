import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Autotools", "meta": [{ "property": "og:title", "content": "Autotools" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Autotools</h1><p>When you work on a project and you want to distribute this project among other users you also need to provide instructions about how to build the project. Traditionally these instructions were provided in a file called <code>Makefile</code> which is basically a recipe that holds all the information you need to build the package on your system. This can be achieved by using the command <code>make</code>. After initiating the command <code>make</code> the system goes through the Makefile step by step and executes commands that are in it.</p><p>However, if you have a project that will be built on a different platform than it was developed on, your Makefile needs adjustments. This is why the <code>configure</code> script was introduced. Configure script can automatically adjust the Makefile according to the system requirements. The script probes the system for important information about the compilation and build processes and creates Makefiles for your project.</p><h2>Autotools installation</h2><p>To install <a href="https://en.wikipedia.org/wiki/GNU_build_system">GNU build system</a>, also known as Autotools, you need to install autoconf and automake packages:</p><pre><code>sudo dnf install autoconf automake
</code></pre><h2>Autotools usage</h2><p>To create your own <code>configure</code> script, you need to create a few input files that will be used by <code>autoreconf</code> command which creates the configure script. These files are <code>configure.ac</code> and <code>Makefile.am</code>. <code>Configure.ac</code> contains instructions to create <code>configure</code> script. <code>Makefile.am</code> contains instructions for each directory, so there is one <code>Makefile.am</code> in each directory that your project contains. You can find instructions about how to create these files in info page of <code>autoconf</code>. How to access the info page is described at the end. When these files are ready, one simple command creates everything you need to distribute your project:</p><pre><code>autoreconf --install
</code></pre><p>This command will produce several files: <code>configure</code> script, <code>config.h.in</code> and <code>Makefile.in</code> in every directory. The two latter are then used by configure script to produce actual Makefiles. Now your project is ready to be distributed. Simply add these generated files to your package. Now when someone wants to use your package she only needs to type:</p><pre><code>./configure
</code></pre><p>This command will produce <code>Makefile</code> in every directory and <code>config.h</code> in the main directory. Now simply type:</p><pre><code>make
</code></pre><p>Now all important parts of project are compiled and linked and the program is ready to be used. Note that this tutorial is very short and describes only absolute basics of GNU build system. If you want to use <code>automake</code> in your project try reading the manual page:</p><pre><code>man automake
</code></pre><p>If you need more detailed explanation of GNU build system and some simple examples of usage, try this <a href="http://www.freesoftwaremagazine.com/books/autotools_a_guide_to_autoconf_automake_libtool">guide to Autotools</a> or info page:</p><pre><code>info automake
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/c/autotools.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
