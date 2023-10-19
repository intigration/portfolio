import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "FastApi", "meta": [{ "property": "og:title", "content": "FastApi" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>FastApi</h1><p><a href="https://fastapi.tiangolo.com/">FastApi</a> is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.</p><h2>Installation of FastApi in a virtual environment</h2><p>Fedora includes a <code>python3-fastapi</code> package that you can install and import. However, unless you are developing or packaging an application for Fedora, it is more useful to install FastAPI as a third-party package inside a <em>virtual environment</em>. This will keep your project separate from your system, giving you more freedom in choosing additional libraries and their versions, and easing collaboration with people who aren\u2019t using Fedora yet.</p><p>Let\u2019s create a new project a virtual environment. Open the terminal. Then, create a new folder \u2018my_project\u2019, enter it, and create a virtual environment called \u2018project_env\u2019.</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">mkdir</span> my_project <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> my_project
$ virtualenv project_env
</code></pre><p>To work in the virtual environment, you have to activate it.</p><pre class="language-bash"><code class="language-bash">$ <span class="token builtin class-name">source</span> project-env/bin/activate
</code></pre><p>Now that we have an active virtual environment (this can be identified by having the <code>(project_env)</code> in the command line prompt), install FastApi and a server using <code>pip</code>.</p><pre class="language-bash"><code class="language-bash"><span class="token punctuation">(</span>project_env<span class="token punctuation">)</span> $ pip <span class="token function">install</span> fastapi uvicorn<span class="token punctuation">[</span>standard<span class="token punctuation">]</span>
</code></pre><p>That is all, you have sucessfully installed FastApi in the virtual environment! Now you can start working on your project.</p><h2>First Application</h2><p>The following is an example of an application using FastApi. Create a file named \u2018<a href="http://main.py">main.py</a>\u2019.</p><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> Optional

<span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">read_root</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;World&quot;</span><span class="token punctuation">}</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/items/{item_id}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">read_item</span><span class="token punctuation">(</span>item_id<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> q<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;item_id&quot;</span><span class="token punctuation">:</span> item_id<span class="token punctuation">,</span> <span class="token string">&quot;q&quot;</span><span class="token punctuation">:</span> q<span class="token punctuation">}</span>
</code></pre><h3>Running</h3><p>To run a FastApi app on a development server, go to that directory in the terminal and run:</p><pre class="language-console"><code class="language-console">$ uvicorn main:app --reload
</code></pre><p>This will start the server listening on <code>127.0.0.1:8000</code>.</p><p>Then open the terminal and run this command to get the response.</p><pre class="language-console"><code class="language-console">$ curl -X &#39;GET&#39; \\
  &#39;http://127.0.0.1:8000/&#39; \\
  -H &#39;accept: application/json&#39;
</code></pre><p>The response looks like this:</p><pre><code>{&quot;Hello&quot;:&quot;World&quot;}
</code></pre><p>See <a href="https://fastapi.tiangolo.com/">FastApi Website</a> for complete documentation &amp; deployment options.</p><p>When you finish your work, you can deactivate the virtual environemnt.</p><pre class="language-bash"><code class="language-bash"><span class="token punctuation">(</span>project_env<span class="token punctuation">)</span> $ deactivate
</code></pre><h3>What\u2019s next?</h3><ul><li><a href="https://fastapi.tiangolo.com/">FastApi</a></li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/python/fastapi-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
