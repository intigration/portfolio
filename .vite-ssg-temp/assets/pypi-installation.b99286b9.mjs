import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Pip & PyPI", "meta": [{ "property": "og:title", "content": "Pip & PyPI" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Using pip</h1><p>If a Python package you need is not packaged for Fedora, or if you need it in an isolated environment, you can use <code>pip</code> to install it from the <a href="https://pypi.python.org/">Python Package Index (PyPI)</a>.</p><p>Note that software on PyPI is not part of Fedora, and has different standards of quality, security and licensing: essentially, anyone can upload code there. Only install software you trust, and always double-check <code>install</code> commands for typos in package names.</p><p>You can either install such modules to a <em>virtual environment</em>, or to your home directory with the <code>--user</code> user switch. See below for both options.</p><p>Installing modules with pip to system directories is not recommended, as it can override system libraries and lead to an unstable system.</p><h2>Using pip in the virtual environment</h2><p>The best practise is using pip in the virtual environment. It will keep all modules for one project at one place and it will not break your local system. Another advantage is that you can have more versions of the same module in different virtual environments.</p><p>Let\u2019s create a virtual environment called <code>project_venv</code> with the main Python 3 version in Fedora. If you need to use another version of Python or a different interpreter such as PyPy, see the <a href="https://developer.fedoraproject.org/tech/languages/python/multiple-pythons.html">Multiple Interpreters section</a>.</p><pre class="language-bash"><code class="language-bash">$ python3 -m venv project_venv
</code></pre><p>If you want to work in the virtual environment, you have to activate it.</p><pre class="language-bash"><code class="language-bash">$ <span class="token builtin class-name">source</span> project_venv/bin/activate
</code></pre><p>When the virtual environment is activated (you can see it\u2019s name in brackets at the beginning of your prompt), you can install modules with pip. For example, if your project needs the <a href="https://requests.readthedocs.io/en/master/"><code>requests</code></a> library, run:</p><pre class="language-bash"><code class="language-bash"><span class="token punctuation">(</span>project_venv<span class="token punctuation">)</span> $ python -m pip <span class="token function">install</span> requests
</code></pre><p>When you finish your work, just deactivate the virtual environment.</p><pre class="language-bash"><code class="language-bash"><span class="token punctuation">(</span>project_venv<span class="token punctuation">)</span> $ deactivate
</code></pre><p>The environment is a directory. If you no longer need it, deactivate it and delete it with <code>rm -rv project_venv</code>.</p><h2>User-specific installation</h2><p>Sometimes, you don\u2019t want to use a virtual environment. For example, you\u2019re installing a tool you will use in multiple projects, but the tool is not available in Fedora repositories. In such cases, you might need to install <code>pip</code> if you do not already have it system-wide:</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> dnf <span class="token function">install</span> python3-pip
</code></pre><p>Then, use pip\u2019s <code>--user</code> option. For example, to install a Python implementation of <code>cowsay</code> (rather than the original Perl one available in Fedora), run:</p><pre class="language-bash"><code class="language-bash">$ python -m pip <span class="token function">install</span> --user cowsay
</code></pre><h2>Updating packages</h2><p>Since software installed using <code>pip</code> is not part of Fedora, it is your responsibility to keep it updated as needed. However you ran <code>pip install</code>, running it again with <code>--update</code> will update to the latest release. For example, to update the <code>requests</code> library:</p><pre class="language-bash"><code class="language-bash"><span class="token punctuation">(</span>project_venv<span class="token punctuation">)</span> $ python -m pip <span class="token function">install</span> --update requests
</code></pre><h3>What next?</h3><ul><li><a href="https://pypi.python.org/">PyPI - the Python Package Index</a></li><li><a href="https://docs.python.org/3/library/venv.html#module-venv">Python Documentation: venv</a></li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/python/pypi-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
