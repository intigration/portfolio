import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "R", "meta": [{ "property": "og:title", "content": "R" }, { "property": "og:description", "content": "Free software environment for statistical computing and graphics." }, { "name": "description", "content": "Free software environment for statistical computing and graphics." }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h2>R in Fedora</h2><p><a href="https://www.r-project.org/">R</a> provides a wide variety of statistical and graphical techniques: linear and nonlinear modelling, statistical tests, time series analysis, classification, clustering, and much more through its rich package ecosystem.</p><h2>Installation</h2><p>The newest R release, including recommended packages and development headers and tools, can be installed by running:</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> dnf <span class="token function">install</span> R
</code></pre><p>The following components will be installed by default:</p><table><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td>R-core</td><td>The minimal R components necessary for a functional runtime</td></tr><tr><td>R-core-devel</td><td>Core files for development of R packages (no Java)</td></tr><tr><td>R-java</td><td>R with Fedora-provided Java Runtime Environment</td></tr><tr><td>R-java-devel</td><td>Development package for use with Java enabled R components</td></tr><tr><td>libRmath</td><td>Standalone math library from the R project</td></tr><tr><td>libRmath-devel</td><td>Headers from the R standalone math library</td></tr></tbody></table><h2>Running R</h2><p>To run R, simply type <code>R</code> in your terminal:</p><pre class="language-bash"><code class="language-bash">$ R
R version <span class="token number">4.0</span>.4 <span class="token punctuation">(</span><span class="token number">2021</span>-02-15<span class="token punctuation">)</span> -- <span class="token string">&quot;Lost Library Book&quot;</span>
Copyright <span class="token punctuation">(</span>C<span class="token punctuation">)</span> <span class="token number">2021</span> The R Foundation <span class="token keyword">for</span> Statistical Computing
Platform: x86_64-redhat-linux-gnu <span class="token punctuation">(</span><span class="token number">64</span>-bit<span class="token punctuation">)</span>

R is <span class="token function">free</span> software and comes with ABSOLUTELY NO WARRANTY.
You are welcome to redistribute it under certain conditions.
Type <span class="token string">&#39;license()&#39;</span> or <span class="token string">&#39;licence()&#39;</span> <span class="token keyword">for</span> distribution details.

  Natural language support but running <span class="token keyword">in</span> an English locale

R is a collaborative project with many contributors.
Type <span class="token string">&#39;contributors()&#39;</span> <span class="token keyword">for</span> <span class="token function">more</span> information and
<span class="token string">&#39;citation()&#39;</span> on how to cite R or R packages <span class="token keyword">in</span> publications.

Type <span class="token string">&#39;demo()&#39;</span> <span class="token keyword">for</span> some demos, <span class="token string">&#39;help()&#39;</span> <span class="token keyword">for</span> on-line help, or
<span class="token string">&#39;help.start()&#39;</span> <span class="token keyword">for</span> an HTML browser interface to help.
Type <span class="token string">&#39;q()&#39;</span> to quit R.

<span class="token operator">&gt;</span>
</code></pre><p>Now you can start to write in R! Let\u2019s print <em>Hello World</em>!</p><pre class="language-r"><code class="language-r">print<span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span>
</code></pre><p>If you want to <strong>exit</strong> R, type <code>quit()</code> or press <code>Ctrl</code> + <code>D</code>, then press <code>n</code> to avoid saving the workspace.</p><p>To run a program written in R, type <code>Rscript</code> followed by the path and name of the program. For example, for a script called <code>example.R</code> in the current path, run the following:</p><pre class="language-bash"><code class="language-bash">$ Rscript example.R
</code></pre><h2>What next?</h2><ul><li><a href="https://www.r-project.org/">R Project homepage</a></li><li><a href="https://cran.r-project.org/manuals.html">R Manuals</a></li><li><a href="https://r4ds.had.co.nz/">R for Data Science</a>, by Hadley Wickham.</li><li><a href="https://adv-r.hadley.nz/">Advanced R</a>, by Hadley Wickham.</li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/r/r-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
