import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "R packages", "meta": [{ "property": "og:title", "content": "R packages" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h2>Installing packages</h2><p>Recommended R packages are included as part of the R installation. A number of popular add-on packages from <a href="https://cran.r-project.org/">CRAN</a>, <a href="https://bioconductor.org/">Bioconductor</a> and other sources are readily available via the Fedora repositories. They are named with an <code>R-</code> prefix, such as <code>R-ggplot2</code>. To install a package, run:</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> dnf <span class="token function">install</span> R-ggplot2
</code></pre><p>The following command:</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> dnf repoquery --repo<span class="token operator">=</span>fedora-source <span class="token string">&#39;R-*&#39;</span>
</code></pre><p>provides a list of all R packages in Fedora.</p><h2>Installation from source</h2><p>If you have the <a href="/tech/languages/r/r-installation.html">R package installed</a>, thousands of additional add-on packages can be installed from the official CRAN and Bioconductor repositories. To install e.g. the <code>ggplot2</code> package from source, open the <em>R console</em> and run:</p><pre class="language-r"><code class="language-r">install.packages<span class="token punctuation">(</span><span class="token string">&quot;ggplot2&quot;</span><span class="token punctuation">)</span>
</code></pre><p>With this method, packages are installed into the user home directory, under <code>~/R</code>.</p><p>See also the <a href="https://remotes.r-lib.org/"><code>remotes</code></a> package, to learn how to install packages from a variety of sources (e.g., GitHub), and the <a href="https://rstudio.github.io/renv/"><code>renv</code></a> package, to learn how to manage environments and to install specific versions of packages.</p><h2>Additional binary packages</h2><p>The <a href="https://copr.fedorainfracloud.org/coprs/iucar/cran/">cran2copr</a> project maintains binary RPM contributed repositories for the current and previous stable Fedora version for most of CRAN (~17k packages as of Apr 2021) in an automated way using <a href="https://copr.fedorainfracloud.org/">Fedora Copr</a>. These repositories are automatically synchronized with CRAN on a daily basis. To ensure compatibility with the official Fedora repository, these set of packages are named with the <code>R-CRAN-</code> prefix (<code>R-CRAN-ggplot2</code> for example), and are installed into <code>/usr/local/lib/R/library</code>.</p><p>To enable this Copr repository in your system:</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> dnf <span class="token function">install</span> <span class="token string">&#39;dnf-command(copr)&#39;</span>
$ <span class="token function">sudo</span> dnf copr <span class="token builtin class-name">enable</span> iucar/cran
</code></pre><p>For integrating binary package installation into your R session, you can install <code>R-CoprManager</code>:</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> dnf <span class="token function">install</span> R-CoprManager
</code></pre><p>With <code>CoprManager</code>, the Copr <code>iucar/cran</code> repository will be used when installing from the R console:</p><pre class="language-r"><code class="language-r">install.packages<span class="token punctuation">(</span><span class="token string">&quot;car&quot;</span><span class="token punctuation">)</span>
</code></pre><p>If a package is not available, then it just falls back to source installation from CRAN.</p><p>On the other hand, <code>remove.packages</code> will still remove only packages installed in your user library. If you want to remove system packages, run:</p><pre class="language-r"><code class="language-r">CoprManager<span class="token operator">::</span>remove_copr<span class="token punctuation">(</span><span class="token string">&quot;car&quot;</span><span class="token punctuation">)</span>
</code></pre><p>If you want to disable the <code>CoprManager</code>, so that <code>install.packages</code> only works from source again, then run:</p><pre class="language-r"><code class="language-r">CoprManager<span class="token operator">::</span>disable<span class="token punctuation">(</span><span class="token punctuation">)</span>
install.packages<span class="token punctuation">(</span><span class="token string">&quot;car&quot;</span><span class="token punctuation">)</span>
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/r/r-packages.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
