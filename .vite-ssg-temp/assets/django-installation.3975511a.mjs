import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Django", "meta": [{ "property": "og:title", "content": "Django" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Django</h1><p><a href="https://www.djangoproject.com/">Django</a> is an open source web application framework written in Python, it encourages rapid development and clean, pragmatic design.</p><h2>How to install Django in a virtual environment</h2><p>Fedora includes a <code>python3-django</code> package that you can install and import. However, unless you are developing or packaging an application for Fedora, it is more useful to install Django as a third-party package inside a <em>virtual environment</em>. This will keep your project separate from your system, giving you more freedom in choosing additional libraries and their versions, and easing collaboration with people who aren\u2019t using Fedora yet.</p><p>Let\u2019s create a new project and a virtual environment. Open the <em>Terminal</em> (press <code>Alt</code> + <code>F1</code>, type <em>Terminal</em> and click <code>Enter</code>). Then, create a new folder <code>my_project</code>, open it, and create a virtual environment called <code>project_venv</code>.</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">mkdir</span> my_project
$ <span class="token builtin class-name">cd</span> my_project
$ python3 -m venv project_venv
</code></pre><p>To work in the virtual environment, you have to activate it.</p><pre class="language-bash"><code class="language-bash">$ <span class="token builtin class-name">source</span> project_venv/bin/activate
</code></pre><p>In an active the virtual environment (with the name <code>(project_venv)</code> included in your command line prompt), you can install Django <a href="https://developer.fedoraproject.org/tech/languages/python/pypi-install.html">from PyPI</a>.</p><pre class="language-bash"><code class="language-bash"><span class="token punctuation">(</span>project_venv<span class="token punctuation">)</span> $ python -m pip <span class="token function">install</span> django
</code></pre><p>That is all, you have sucessfully installed Django in the virtual environment! Now you can start working on your project.</p><h2>First project</h2><p>This is a short tutorial how to create your first Django project. You can find a detailed tutorial in <a href="https://docs.djangoproject.com/en/1.10/intro/tutorial01/">Django Documentation</a>.</p><p>If you haven\u2019t already, activate your virtual environment (see above). Then, to start, initialize your project files structure. Replace <code>mysite</code> with the name of your project.</p><pre class="language-bash"><code class="language-bash"><span class="token punctuation">(</span>project_venv<span class="token punctuation">)</span> $ django-admin startproject mysite
</code></pre><p>Enter your new directory which was automatically created.</p><pre class="language-bash"><code class="language-bash"><span class="token punctuation">(</span>project_venv<span class="token punctuation">)</span> $ <span class="token builtin class-name">cd</span> mysite
</code></pre><p>And run the server.</p><pre class="language-bash"><code class="language-bash"><span class="token punctuation">(</span>project_venv<span class="token punctuation">)</span> $ python manage.py runserver
</code></pre><p>Now that the server\u2019s running, visit <a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a> with your Web browser. You will see a \u201CWelcome to Django\u201D page, in pleasant, light-blue pastel. It worked!</p><p>When you finish your work, you can deactivate the virtual environment.</p><pre class="language-bash"><code class="language-bash"><span class="token punctuation">(</span>project_venv<span class="token punctuation">)</span> $ deactivate
$
</code></pre><h3>What next?</h3><ul><li><a href="https://docs.djangoproject.com/">Django Documentation</a></li><li><a href="https://docs.python.org/3/library/venv.html#module-venv">Python Documentation: venv</a></li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/python/django-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
