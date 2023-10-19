import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "OCaml", "meta": [{ "property": "og:title", "content": "OCaml" }, { "property": "og:description", "content": "An open source multi-paradigm programming language and toolchain." }, { "name": "description", "content": "An open source multi-paradigm programming language and toolchain." }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>What is OCaml?</h1><p>OCaml is an industrial-strength programming language supporting functional, imperative and object-oriented styles.</p><h2>OCaml installation</h2><p>To install the OCaml tools, type on a terminal:</p><pre class="language-console"><code class="language-console">$ sudo dnf install ocaml ocaml-findlib 
</code></pre><p>The REPL (Read-Evaluate-Print-Loop) tool (<code>ocaml</code>), the library manager ( <code>ocamlfind</code>), the bytecode compiler (<code>ocamlc</code>), and the native-code compiler binaries (<code>ocamlopt</code>) will become available on the system.</p><h1>OPAM</h1><p>OPAM (<strong>O</strong>Caml <strong>Pa</strong>ckage <strong>M</strong>anager) is a source-based package manager for OCaml. It supports multiple simultaneous compiler installations, flexible package constraints, and a Git-friendly development workflow.</p><h3>Installation</h3><p>To install OPAM in your Fedora just:</p><pre class="language-console"><code class="language-console">$ sudo dnf install opam
</code></pre><h3>Environment setup</h3><p>You can use OPAM to install and manage your OCaml environment. First, it is necessary to add the environment variables in your default shell, OPAM does it for you when you run the <code>init</code> command, and after it, you can use <code>eval</code> in your first time to load the configuration.</p><pre class="language-console"><code class="language-console">$ opam init
# the console will ask if you want to really modify your ~/.bashrc (or default), use &#39;y&#39; to confirm.
$ eval $(opam env)
</code></pre><p>After adding the environment variables in your default shell you can install the desired version of OCaml compiler using the <code>switch</code> command and you can load the new environment variables running <code>eval</code> soon after it.</p><pre class="language-console"><code class="language-console">$ opam switch create 4.12.0
$ eval $(opam env)
</code></pre><p>Now you can check if your OCaml version is the one you installed.</p><pre class="language-console"><code class="language-console">$ ocaml -version
</code></pre><h2>References</h2><ul><li><a href="https://ocaml.org/docs/install.html">OCaml Documentation</a></li><li><a href="https://opam.ocaml.org/doc/Manual.html">OPAM Documentation</a></li><li><a href="https://www.cs.cornell.edu/courses/cs3110/2019sp/textbook/">Functional Programming in OCaml</a></li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/ocaml/ocaml-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
