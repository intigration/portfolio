import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Sphinx", "meta": [{ "property": "og:title", "content": "Sphinx" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Sphinx</h1><p><a href="http://sphinx-doc.org/">Sphinx</a> is a tool for creating beautiful documentation for python projects. It uses <a href="http://docutils.sf.net/rst.html">reStructuredText</a> as its markup language which it can build into various kinds of outputs. You can build HTML, PDF, manual pages and many others from one source! Sphinx can also link the documentation with your code and print syntax highlighted classes and functions. As extra, you can extend its functionality with many <a href="http://sphinx-doc.org/develop.html#extensions">plugins</a> and style it with many prepared themes.</p><h2>Installation</h2><p>To install Sphinx on Fedora, run:</p><pre><code>$ sudo dnf install python3-sphinx
</code></pre><h2>Getting started</h2><p>Navigate your terminal into project directory and run:</p><pre><code>$ sphinx-quickstart
</code></pre><p>to initialize your documentation. You will be asked to choose the documentation directory, set the project name and provide some other basic information about it. Next, you will be asked which extensions you want to enable. Be sure to answer \u201Cyes\u201D on creating Makefile for your documentation.</p><p>It may happen that will mis-type some answer or you just change your mind about it. You can alter the configuration whenever you want by editing <code>conf.py</code> file.</p><h2>Writing your first text</h2><p>As it was mentioned before, content for Sphinx is written in <a href="http://docutils.sf.net/rst.html">reStructuredText</a>, so in order to create new page in the documentation, you have to create a <code>.rst</code> file. For example <code>introduction.rst</code>:</p><pre><code>Introduction
============

Here goes some introduction to your project and it is all written in rst format.
</code></pre><p>Now you have to open your master document, which is by default called <code>index.rst</code>. Its serves as a welcome page and provides a table of contents for the documentation. Therefore you should add link to <code>introduction.rst</code> here:</p><pre><code>.. toctree::
   introduction
</code></pre><h2>See the results</h2><p>Sphinx can process your content to the various output formats. Run <code>make help</code> to see all the possibilities. It should look like this:</p><pre><code>$ make help
Please use \`make &lt;target&gt;&#39; where &lt;target&gt; is one of
  html       to make standalone HTML files
  dirhtml    to make HTML files named index.html in directories
  singlehtml to make a single large HTML file
  pickle     to make pickle files
  json       to make JSON files
  ...
</code></pre><p>You will probably want to use <code>html</code> for local testing purposes and <code>dirhtml</code> for deploying. You are able to test it by hitting <code>make html</code> to the command line. If Sphinx tells you that \u201CBuild finished. The HTML pages are in _build/html\u201D, all is well. Open the web browser in the current working directory (if you are not sure which one it is, just run <code>pwd</code> to make sure), navigate to the build directory that Sphinx told you (i.e. <code>_build/html</code>) and open <code>index.html</code> \u2013 your new documentation.</p><h2>What next</h2><ul><li>See working examples to get an inspiration <a href="http://sphinx-doc.org/examples.html">Sphinx examples</a></li><li>See the full Sphinx possibilities and features <a href="http://sphinx-doc.org/contents.html">Sphinx contents</a></li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/python/sphinx.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
