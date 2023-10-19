import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Gtk+", "meta": [{ "property": "og:title", "content": "Gtk+" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Gtk+</h1><p>Gtk+ is a cross-platform GUI toolkit created for the development of the GIMP project. Offering a complete set of widgets, Gtk+ is suitable for projects ranging from small one-off tools to complete applications suites.</p><p>For C programming with Gtk+ you need to install the development version of the important GNOME libraries. Those contain the header files and additional linker information:</p><pre><code>sudo dnf install gtk3-devel gstreamer1-devel clutter-devel webkit2gtk3-devel libgda-devel gobject-introspection-devel
</code></pre><p>In addition, you will want to install the documentation packages of this libraries so you can view them in the API browser (devhelp):</p><pre><code>sudo dnf install devhelp gtk3-devel-docs gstreamer1-devel-docs clutter-doc
</code></pre><h2>Getting started</h2><p>To begin our introduction to Gtk+, we will start with the simplest program possible. This program will simply create a gtk+ window with the title \u201CHello World\u201D.</p><pre class="language-c"><code class="language-c"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;gtk/gtk.h&gt;</span></span>

<span class="token keyword">int</span> 
<span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span>   argc<span class="token punctuation">,</span>
     <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  GtkWidget <span class="token operator">*</span>window<span class="token punctuation">;</span>
    
  <span class="token function">gtk_init</span> <span class="token punctuation">(</span><span class="token operator">&amp;</span>argc<span class="token punctuation">,</span> <span class="token operator">&amp;</span>argv<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
  window <span class="token operator">=</span> <span class="token function">gtk_window_new</span> <span class="token punctuation">(</span>GTK_WINDOW_TOPLEVEL<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">gtk_window_set_title</span> <span class="token punctuation">(</span><span class="token function">GTK_WINDOW</span> <span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">gtk_widget_show</span>  <span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
  <span class="token function">gtk_main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><p>You can compile the above program with gcc using:</p><pre><code>gcc hello.c -o hello \`pkg-config --cflags --libs gtk+-3.0\`
</code></pre><p>In the program above we initially included gtk/gtk.h, which declares all the gtk+ objects used in the rest of the program:</p><pre class="language-c"><code class="language-c"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;gtk/gtk.h&gt;</span></span>
</code></pre><p>or</p><pre class="language-c"><code class="language-c"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;gtk-3.0/gtk/gtk.h&gt;</span></span>
</code></pre><p>After the declaration of the window object variable, we call the gtk_init method which initializes the library and its internal procedures.</p><pre class="language-c"><code class="language-c"><span class="token function">gtk_init</span> <span class="token punctuation">(</span><span class="token operator">&amp;</span>argc<span class="token punctuation">,</span> <span class="token operator">&amp;</span>argv<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>The next line creates a GtkWindow object with the GTK_WINDOW_TOPLEVEL type. Nearly always, that\u2019s the type of the GtkWindow, but it could differ if you are implementing something else.</p><pre class="language-c"><code class="language-c">window <span class="token operator">=</span> <span class="token function">gtk_window_new</span> <span class="token punctuation">(</span>GTK_WINDOW_TOPLEVEL<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>Below that, we set the title of the GtkWindow to a string of our choice:</p><pre class="language-c"><code class="language-c"><span class="token function">gtk_window_set_title</span> <span class="token punctuation">(</span><span class="token function">GTK_WINDOW</span> <span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>After that, the gtk_widget_show() function lets Gtk+ know that we are done setting the attributes of this widget, and that it can display it.</p><pre class="language-c"><code class="language-c"><span class="token function">gtk_window_show</span> <span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>Finally, the last line enters the Gtk+ main processing loop.</p><pre class="language-c"><code class="language-c"><span class="token function">gtk_main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2>Learn more</h2><ul><li><a href="https://developer.gnome.org/gnome-devel-demos/stable/c.html.en">GNOME Plataform Demos</a></li><li><a href="https://developer.gnome.org/gtk3/stable/">Gtk+ 3 Reference Manual</a></li><li><a href="https://developer.gnome.org/gtk3/stable/gtk-compiling.html">Compiling Gtk+ Applications</a></li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/c/gtk.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
