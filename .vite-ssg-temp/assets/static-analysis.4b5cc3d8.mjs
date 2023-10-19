import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Static Analysis", "meta": [{ "property": "og:title", "content": "Static Analysis" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Static Analysis</h1><p>Static analysis is a technique of analyzing programs without executing them. It is often used in compilers for code optimizations and producing warnings. We have several static analyzers in Fedora that can be used to automatically detect programming mistakes by analyzing source code only. Especially for statically typed languages (like C/C++), static analyzers can significantly help us to catch various classes of bugs in our code before it ever runs.</p><p>There are various optional diagnostics in GCC that could be enabled by <code>-W...</code> compilation flags. Besides the built-in GCC diagnostic, we can use standalone static analyzers for C/C++, such as <a href="http://cppcheck.sourceforge.net/">Cppcheck</a>, <a href="http://clang-analyzer.llvm.org/">Clang</a>, or <a href="https://sparse.wiki.kernel.org">Sparse</a>. There are also static analyzers for dynamically typed languages \u2013 for example <a href="http://www.shellcheck.net/about.html">ShellCheck</a>, which analyzes shell scripts, or <a href="http://www.pylint.org/">Pylint</a>, which analyzes programs written in Python.</p><h2>Using csbuild to analyze C/C++ programs</h2><p>In order to make it easier to use static analyzers by C/C++ developers, there is a utility named <code>csbuild</code> that runs static analyzers in background fully transparently. You can install csbuild by dnf, which will also pull the needed static analyzers as dependencies:</p><pre><code>sudo dnf install csbuild
</code></pre><p>Its usage is as easy as:</p><pre><code>csbuild -c &#39;make ...&#39;
</code></pre><p>\u2026 where you replace <code>make ...</code> by the actual command you use to compile your project. By running the above command, you will get extended diagnostic produced by GCC and the output of Cppcheck and Clang analyzers for the modules that were (re)compiled during the build.</p><h2>Differential scans</h2><p>If your project is tracked in a git repository, you can use csbuild for differential scans to check for added (or fixed) bugs between a pair of git revisions. For example, before you push your commits in the master branch of your project to a public git repository, you can first check that you are not introducing any new bugs in those commits:</p><pre><code>csbuild -g origin/master..master -c &quot;make ...&quot;
</code></pre><p>In this mode, only bugs introduced between the specified pair of revisions are reported. You can use the <code>--print-fixed</code> option to print also bugs that were fixed between the pair of revisions. You can also use the <code>---git-bisect</code> option to find the exact commit that introduced a new bug:</p><pre><code>csbuild -g origin/master..master -c &quot;make clean &amp;&amp; make ...&quot; --git-bisect
</code></pre><p>The complexity of the search algorithm is logarithmic, which means that for a search in 1024 commits, only 10 builds are needed. For these options to work, you need to use a build command that fully rebuilds all sources.</p><h2>Travis CI and static analysis</h2><p><a href="https://travis-ci.org/">Travis CI</a> is a freely avilable CI (Continuous Integration) service, which is integrated with <a href="https://github.com/">GitHub</a>. If you have a repository on GitHub, you can configure Travis CI to run a series of tests each time you push new commits into your repository. This is normally used to monitor that the latest version of your project can be built from sources and that its test-suite still passes (if you have one).</p><p>csbuild allows you to run static analyzers automatically whenever you push new commits to your repository so that, if new bugs are detected by static analysis, you are notified by an e-mail from Travis CI. You can achieve this by using the <code>--gen-travis-yml</code> option of csbuild to generate a configuration file for Travis CI. In this mode, you also need to use the <code>--install</code> option to specify dependencies required for build of your project. It expects a space-separated list of packages that can be installed on Ubuntu LTS. The command in the following example generates a Travis CI configuration file to enable static analysis for <a href="http://curl.haxx.se/">curl</a>:</p><pre><code>csbuild -c &quot;./buildconf &amp;&amp; ./configure &amp;&amp; make -j5&quot; \\
        --install libtool --git-bisect \\
        --gen-travis-yml &gt; .travis.yml
</code></pre><p>Then you commit the generated file <code>.travis.yml</code> to your repository and push:</p><pre><code>git add .travis.yml
git commit -m &quot;notify me about newly introduced bugs&quot;
git push
</code></pre><p>Finally, you enable Travis CI for your GitHub repository at <a href="https://travis-ci.org/profile">https://travis-ci.org/profile</a> and you are done!</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/c/static-analysis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
