import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Lua", "meta": [{ "property": "og:title", "content": "Lua" }, { "property": "og:description", "content": "Lua is a powerful, efficient, lightweight, embeddable scripting language." }, { "name": "description", "content": "Lua is a powerful, efficient, lightweight, embeddable scripting language." }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>About Lua</h1><p><a href="https://www.lua.org">Lua</a> is powerful, lightweight interpreted scripting language with a small footprint. It supports multi-paradigm programming: procedural, object-oriented, functional, data-driven and data-description. Lua is rarely used as a stand-alone language. Instead Lua focuses on scripting, as \u201Csecondary\u201D language which integrated into other software written in mainly C/C++.</p><p>Some examples of Lua\u2019s usage areas: network software, video games, user graphical interfaces, graphics/text processing software, etc. Lua also is good for beginners to create simple video games.</p><p>Lua interpreter is written in ANSI C and it is extremely small, both interpreter and source code is only about 1Mb. Lua is considered one of the fastest interpreted languages.</p><h2>Checking Lua</h2><p>Some distributions already have Lua pre-installed. Open your terminal and type:</p><pre class="language-bash"><code class="language-bash">lua
</code></pre><p>If the output is be something like:</p><pre class="language-bash"><code class="language-bash">Lua <span class="token number">5.4</span>.3  Copyright <span class="token punctuation">(</span>C<span class="token punctuation">)</span> <span class="token number">1994</span>-2021 Lua.org, PUC-Rio
<span class="token operator">&gt;</span>
</code></pre><p>Congratulations! Lua is already installed on your system and ready to use.</p><p><ins>Hint!</ins> To exit Lua\u2019s interpreter press <kbd>Ctrl + D</kbd>.</p><h2>Lua installation</h2><p>If you see the message:</p><pre class="language-bash"><code class="language-bash">bash: lua: <span class="token builtin class-name">command</span> not found
</code></pre><p>It means that Lua is not installed yet. The simplest way to install Lua from package manager <code>dnf</code>, which comes with Fedora. In your terminal type command:</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> dnf <span class="token function">install</span> lua
</code></pre><p>Congratulations! Lua interpreter is installed!</p><h2>Lua syntax</h2><p>Lua\u2019s syntax is very similar to languages Python, Ruby and C. For details check <a href="https://www.lua.org/manual/5.4/manual.html">official Lua manual</a>.</p><h3>Learning Lua</h3><p>Lua is very fun and simple to learn, but hard to master. Here is an example of classical <em>hello world</em> program:</p><pre class="language-lua"><code class="language-lua"><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span>
</code></pre><p>Example of the program to calculate factorial, from the book <a href="https://www.lua.org/pil/1.html">Programming in Lua</a>.</p><pre class="language-lua"><code class="language-lua"><span class="token keyword">function</span> <span class="token function">fact</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">then</span>
    <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token keyword">else</span>
    <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token function">fact</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span>

<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;enter a number:&quot;</span><span class="token punctuation">)</span>
a <span class="token operator">=</span> io<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token string">&quot;*n&quot;</span><span class="token punctuation">)</span> <span class="token comment">-- read a number</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token function">fact</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/lua/lua_installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
