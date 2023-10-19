import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "PyGObject", "meta": [{ "property": "og:title", "content": "PyGObject" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>PyGObject (PyGI)</h1><p>PyGObject, also known as PyGI, is a Python extension module that gives clean and consistent access to the entire GNOME software platform through the use of GObject Introspection.</p><p>PyGObject provides full support of GObject Introspection and all of its features (callbacks, GVariant support, closures, sub-classing, etc.).</p><p>To install PyGObject on Fedora, run:</p><pre><code>$ sudo dnf install python3-gobject
</code></pre><h2>Getting started</h2><h3>Writing your first Gtk+ application</h3><pre><code>import gi
gi.require_version(&#39;Gtk&#39;, &#39;3.0&#39;)
from gi.repository import Gtk
</code></pre><p>In the beginning, we have to import the Gtk module to be able to access GTK+\u2019s classes and functions. Since a user\u2019s system can have multiple versions of GTK+ installed at the same, we want to make sure that we when we import Gtk that it refers to GTK+ 3 and not any other version of the library, which is the purpose of statement gi.require_version(\u2018Gtk\u2019, \u20183.0\u2019).</p><pre><code>win = Gtk.Window()
</code></pre><p>The line above creates an empty window.</p><pre><code>win.connect(&quot;delete-event&quot;, Gtk.main_quit)
</code></pre><p>After creating the window, we connect its delete event to ensure that the application is terminated if we click on the x button to close the window.</p><pre><code>win.set_title(&quot;Hello World&quot;)
</code></pre><p>In the line above we set the window title to be a string of our choice, in this case: \u201CHello World\u201D.</p><pre><code>win.show_all()
</code></pre><p>The show_all method called above displays the window and the widgets contained on it.</p><pre><code>Gtk.main()
</code></pre><p>Finally, we start the GTK+ processing loop which we quit when the window is closed.</p><p>To run the program, save the file as <code>hello.py</code>, then open a terminal, change to the directory of the file, and enter:</p><pre><code>$ python hello.py
</code></pre><p>The complete program can be seen below:</p><pre class="language-python"><code class="language-python"><span class="token keyword">import</span> gi
gi<span class="token punctuation">.</span>require_version<span class="token punctuation">(</span><span class="token string">&#39;Gtk&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3.0&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> gi<span class="token punctuation">.</span>repository <span class="token keyword">import</span> Gtk

win <span class="token operator">=</span> Gtk<span class="token punctuation">.</span>Window<span class="token punctuation">(</span><span class="token punctuation">)</span>
win<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&quot;delete-event&quot;</span><span class="token punctuation">,</span> Gtk<span class="token punctuation">.</span>main_quit<span class="token punctuation">)</span>
win<span class="token punctuation">.</span>set_title<span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span>
win<span class="token punctuation">.</span>show_all<span class="token punctuation">(</span><span class="token punctuation">)</span>

Gtk<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><h2>What next?</h2><ul><li><a href="http://lazka.github.io/pgi-docs/">Python GObject Introspection API Reference</a></li><li><a href="http://python-gtk-3-tutorial.readthedocs.org/en/latest/">The Python GTK+ 3 Tutorial</a></li><li><a href="https://developer.gnome.org/gnome-devel-demos/stable/py.html.en">GNOME Platform Demos in Python</a></li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/python/pygobject.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
