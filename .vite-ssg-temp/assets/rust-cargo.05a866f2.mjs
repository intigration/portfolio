import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Cargo", "meta": [{ "property": "og:title", "content": "Cargo" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Installing Cargo</h1><p>Cargo is Rust\u2019s package manager. You can use it to download your project\u2019s dependencies and to compile your project. You can start a new project using Cargo by typing:</p><pre><code>$ cargo new my_project
</code></pre><p>This will create a new directory with manifest (<code>Cargo.toml</code>), a source code directory (<code>src</code>) and a \u201CHello, World!\u201D program in <code>src/main.rs</code>.</p><pre><code>$ cd my_project/
$ tree .
.
\u251C\u2500\u2500 Cargo.toml
\u2514\u2500\u2500 src
    \u2514\u2500\u2500 main.rs

1 directory, 2 files
</code></pre><p>The manifest is written in <a href="https://github.com/toml-lang/toml">TOML language</a> and looks like this:</p><pre class="language-toml"><code class="language-toml"><span class="token punctuation">[</span><span class="token table class-name">package</span><span class="token punctuation">]</span>
<span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;my_project&quot;</span>
<span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token string">&quot;0.1.0&quot;</span>
<span class="token key property">authors</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Your Name &lt;you@example.com&gt;&quot;</span><span class="token punctuation">]</span>
<span class="token key property">edition</span> <span class="token punctuation">=</span> <span class="token string">&quot;2018&quot;</span>

<span class="token punctuation">[</span><span class="token table class-name">dependencies</span><span class="token punctuation">]</span>
</code></pre><p>To run your new project, type:</p><pre><code>$ cargo run
   Compiling my_project v0.1.0 (file:///home/fedora/rust/my_project)
     Running \`target/debug/my_project\`
Hello, world!
</code></pre><h1><a href="http://crates.io">crates.io</a> repository</h1><p>Rust calls its compilation unit (either library or executable) a crate. Your project is such a crate and it can also depend on other crates specified in <code>Cargo.toml</code>. The default repository to look for dependencies is <a href="https://crates.io/">crates.io</a> but you can also specify dependencies on a git repository.</p><p><strong>Note:</strong> Cargo currently supports only source dependencies.</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/rust/rust-cargo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
