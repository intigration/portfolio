import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "BLAS/LAPACK switching", "meta": [{ "property": "og:title", "content": "BLAS/LAPACK switching" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>BLAS/LAPACK switching</h1><p>Since Fedora 33, R is linked against <a href="https://www.mpi-magdeburg.mpg.de/projects/flexiblas">FlexiBLAS</a>, a BLAS/LAPACK wrapper library that enables runtime switching of the optimized backend.</p><h2>Installation</h2><p>The accompanying <code>R-flexiblas</code> package enables BLAS/LAPACK switching without leaving the R session, as well as setting the number of threads for parallel backends.</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> dnf <span class="token function">install</span> R-flexiblas <span class="token comment"># install FlexiBLAS API interface for R</span>
$ <span class="token function">sudo</span> dnf <span class="token function">install</span> flexiblas-* <span class="token comment"># install all available optimized backends</span>
</code></pre><h2>Usage</h2><p>Then, in an R session we see:</p><pre class="language-r"><code class="language-r">library<span class="token punctuation">(</span>flexiblas<span class="token punctuation">)</span>

<span class="token comment"># check whether FlexiBLAS is available</span>
flexiblas_avail<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#&gt; [1] TRUE</span>

<span class="token comment"># get the current backend</span>
flexiblas_current_backend<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#&gt; [1] &quot;OPENBLAS-OPENMP&quot;</span>

<span class="token comment"># list all available backends</span>
flexiblas_list<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#&gt; [1] &quot;NETLIB&quot;           &quot;__FALLBACK__&quot;     &quot;BLIS-THREADS&quot;     &quot;OPENBLAS-OPENMP&quot;</span>
<span class="token comment">#&gt; [5] &quot;BLIS-SERIAL&quot;      &quot;ATLAS&quot;            &quot;OPENBLAS-SERIAL&quot;  &quot;OPENBLAS-THREADS&quot;</span>
<span class="token comment">#&gt; [9] &quot;BLIS-OPENMP&quot;</span>

<span class="token comment"># set/get the number of threads</span>
flexiblas_set_num_threads<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span>
flexiblas_get_num_threads<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#&gt; [1] 12</span>
</code></pre><h2>Benchmarking example</h2><p>This is an example of GEMM benchmark for all the backends available. You can run the following code interactively or as a script file.</p><pre class="language-r"><code class="language-r">library<span class="token punctuation">(</span>flexiblas<span class="token punctuation">)</span>

n <span class="token operator">&lt;-</span> <span class="token number">2000</span>
runs <span class="token operator">&lt;-</span> <span class="token number">10</span>
ignore <span class="token operator">&lt;-</span> <span class="token string">&quot;__FALLBACK__&quot;</span>

A <span class="token operator">&lt;-</span> matrix<span class="token punctuation">(</span>runif<span class="token punctuation">(</span>n<span class="token operator">*</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span> nrow<span class="token operator">=</span>n<span class="token punctuation">)</span>
B <span class="token operator">&lt;-</span> matrix<span class="token punctuation">(</span>runif<span class="token punctuation">(</span>n<span class="token operator">*</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span> nrow<span class="token operator">=</span>n<span class="token punctuation">)</span>

<span class="token comment"># load backends</span>
backends <span class="token operator">&lt;-</span> setdiff<span class="token punctuation">(</span>flexiblas_list<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ignore<span class="token punctuation">)</span>
idx <span class="token operator">&lt;-</span> flexiblas_load_backend<span class="token punctuation">(</span>backends<span class="token punctuation">)</span>

<span class="token comment"># benchmark</span>
timings <span class="token operator">&lt;-</span> sapply<span class="token punctuation">(</span>idx<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  flexiblas_switch<span class="token punctuation">(</span>i<span class="token punctuation">)</span>

  <span class="token comment"># warm-up</span>
  C <span class="token operator">&lt;-</span> A<span class="token punctuation">[</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token percent-operator operator">%*%</span> B<span class="token punctuation">[</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">]</span>

  unname<span class="token punctuation">(</span>system.time<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token keyword">in</span> seq_len<span class="token punctuation">(</span>runs<span class="token punctuation">)</span><span class="token punctuation">)</span>
      C <span class="token operator">&lt;-</span> A <span class="token percent-operator operator">%*%</span> B
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

results <span class="token operator">&lt;-</span> data.frame<span class="token punctuation">(</span>
  backend <span class="token operator">=</span> backends<span class="token punctuation">,</span>
  \`timing <span class="token punctuation">[</span>s<span class="token punctuation">]</span>\` <span class="token operator">=</span> timings<span class="token punctuation">,</span>
  \`performance <span class="token punctuation">[</span>GFlops<span class="token punctuation">]</span>\` <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token operator">^</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">/</span> timings<span class="token punctuation">,</span>
  check.names <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span>

results<span class="token punctuation">[</span>order<span class="token punctuation">(</span>results<span class="token operator">$</span>performance<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">]</span>
<span class="token comment">#&gt;            backend timing [s] performance [GFlops]</span>
<span class="token comment">#&gt; 1           NETLIB     56.776            0.2818092</span>
<span class="token comment">#&gt; 5            ATLAS      5.988            2.6720107</span>
<span class="token comment">#&gt; 2     BLIS-THREADS      3.442            4.6484602</span>
<span class="token comment">#&gt; 8      BLIS-OPENMP      3.408            4.6948357</span>
<span class="token comment">#&gt; 4      BLIS-SERIAL      3.395            4.7128130</span>
<span class="token comment">#&gt; 6  OPENBLAS-SERIAL      3.206            4.9906425</span>
<span class="token comment">#&gt; 7 OPENBLAS-THREADS      0.773           20.6985770</span>
<span class="token comment">#&gt; 3  OPENBLAS-OPENMP      0.761           21.0249671</span>
</code></pre><h2>References</h2><ul><li><a href="https://fedoraproject.org/wiki/Changes/FlexiBLAS_as_BLAS/LAPACK_manager">FlexiBLAS as BLAS/LAPACK manager</a></li><li><a href="https://github.com/Enchufa2/r-flexiblas">Upstream documentation</a></li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/r/blas-lapack.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
