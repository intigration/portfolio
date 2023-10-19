import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Flask", "meta": [{ "property": "og:title", "content": "Flask" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Flask</h1><p><a href="http://flask.pocoo.org/">Flask</a> is a micro web framework for Python, based on the Werkzeug toolkit and Jinja2 template engine.</p><h2>Installation of Flask in a virtual environment</h2><p>Fedora includes a <code>python3-flask</code> package that you can install and import. However, unless you are developing or packaging an application for Fedora, it is more useful to install Flask as a third-party package inside a <em>virtual environment</em>. This will keep your project separate from your system, giving you more freedom in choosing additional libraries and their versions, and easing collaboration with people who aren\u2019t using Fedora yet.</p><p>Let\u2019s create a new project and a virtual environment. Open the <em>Terminal</em> (press <code>Alt</code> + <code>F1</code>, type <em>Terminal</em> and click <code>Enter</code>). Then, create a new folder <code>my_project</code>, open it, and create a virtual environment called <code>project_venv</code>.</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">mkdir</span> my_project
$ <span class="token builtin class-name">cd</span> my_project
$ python3 -m venv project_venv
</code></pre><p>To work in the virtual environment, you have to activate it.</p><pre class="language-bash"><code class="language-bash">$ <span class="token builtin class-name">source</span> project_venv/bin/activate
</code></pre><p>In an active the virtual environment (with the name <code>(project_venv)</code> included in your command line prompt), you can install Flask <a href="https://developer.fedoraproject.org/tech/languages/python/pypi-install.html">from PyPI</a>.</p><pre class="language-bash"><code class="language-bash"><span class="token punctuation">(</span>project_venv<span class="token punctuation">)</span> $ python -m pip <span class="token function">install</span> flask
</code></pre><p>That is all, you have sucessfully installed Flask in the virtual environment! Now you can start working on your project.</p><h2>First application</h2><p>This is an example of how a minimal Flask application can look like. Save the code as <code>hello.py</code>.</p><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask
app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello_world</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Hello World!&quot;</span>
</code></pre><h3>Running</h3><p>To run a Flask app in a development server, set an environment variable to tell Flask where the app is, and then run <code>flask</code>:</p><p>Assuming that you have some Flask application called <code>hello.py</code>, you can run it in your activated virtual environment (see above) like this.</p><pre class="language-bash"><code class="language-bash"><span class="token punctuation">(</span>project_venv<span class="token punctuation">)</span> $ <span class="token builtin class-name">export</span> <span class="token assign-left variable">FLASK_APP</span><span class="token operator">=</span>hello.py
<span class="token punctuation">(</span>project_venv<span class="token punctuation">)</span> $ python -m flask
 * Running on http://127.0.0.1:5000/
</code></pre><p>You should see that it is running on some address, in this case 127.0.0.1. Open the address shown in a web browser to see your application.</p><p>And you\u2019re off! See <a href="https://flask.palletsprojects.com/">Flask\u2019s website</a> for complete documentation and deployment options.</p><p>When you finish your work, you can deactivate the virtual environment.</p><pre class="language-bash"><code class="language-bash"><span class="token punctuation">(</span>project_venv<span class="token punctuation">)</span> $ deactivate
$
</code></pre><h3>What next?</h3><ul><li><a href="http://flask.pocoo.org/docs/">Flask Documentation</a></li><li><a href="https://docs.python.org/3/library/venv.html#module-venv">Python Documentation: venv</a></li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/python/flask-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
