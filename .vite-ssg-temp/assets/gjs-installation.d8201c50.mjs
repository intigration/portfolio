import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Gjs", "meta": [{ "property": "og:title", "content": "Gjs" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Gjs: Javascript Bindings for GNOME</h1><p>Gjs is a Javascript binding for GNOME and can be used to interact with Gtk+. It is mainly based on the Spidermonkey Javascript engine and the GObject introspection framework.</p><p>To install Gjs on Fedora, run:</p><pre><code>sudo dnf install gjs gjs-devel
</code></pre><h2>Getting started</h2><h3>Writing your first Gtk+ application</h3><p>Writing Gjs applications for the GNOME Desktop is very similiar to coding with traditional languages in the plataform such as Python.</p><p>Firstly, we need to import the desired libraries for our program:</p><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> Gtk <span class="token operator">=</span> imports<span class="token punctuation">.</span>gi<span class="token punctuation">.</span>Gtk<span class="token punctuation">;</span>
</code></pre><p>After that, we will initialize Gtk+.</p><pre class="language-javascript"><code class="language-javascript">Gtk<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>To create our window, we need to create a GtkWindow object. Gjs allows the initialization of object attributes to be made when the object is constructed.</p><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">let</span> window <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Gtk<span class="token punctuation">.</span>Window</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&quot;Hello World&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>In the lines below we are connecting the destroy event of the window to ensure that the application is terminated if we click on the x button to close the window.</p><pre class="language-javascript"><code class="language-javascript">window<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;destroy&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Gtk<span class="token punctuation">.</span><span class="token function">main_quit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>After that, we need to display the window, by calling its show method:</p><pre class="language-javascript"><code class="language-javascript">window<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>Finally, we start the GTK+ processing loop which we quit when the window is closed.</p><pre class="language-javascript"><code class="language-javascript">Gtk<span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>To run the program, open a terminal, change to the directory of the file, and enter:</p><pre><code>gjs hello.gjs
</code></pre><p>The complete program can be seen below:</p><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> Gtk <span class="token operator">=</span> imports<span class="token punctuation">.</span>gi<span class="token punctuation">.</span>Gtk<span class="token punctuation">;</span>

Gtk<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> window <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Gtk<span class="token punctuation">.</span>Window</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&quot;Hello World&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

window<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;destroy&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Gtk<span class="token punctuation">.</span><span class="token function">main_quit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Gtk<span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2>More information</h2><ul><li><a href="https://developer.gnome.org/gnome-devel-demos/stable/js.html">Example demo applications</a></li><li><a href="https://people.gnome.org/~gcampagna/docs/">API Documentation</a></li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/gjs/gjs-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
