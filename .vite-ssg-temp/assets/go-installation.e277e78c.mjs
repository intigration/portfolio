import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Go", "meta": [{ "property": "og:title", "content": "Go" }, { "property": "og:description", "content": "An open source programming language built to craft simple, reliable, and efficient software." }, { "name": "description", "content": "An open source programming language built to craft simple, reliable, and efficient software." }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Go on Fedora</h1><p>Quoting the upstream documentation:</p><blockquote><p>The Go programming language is an open source project to make programmers more productive.</p></blockquote><blockquote><p>Go is expressive, concise, clean, and efficient. Its concurrency mechanisms make it easy to write programs that get the most out of multicore and networked machines, while its novel type system enables flexible and modular program construction. Go compiles quickly to machine code yet has the convenience of garbage collection and the power of run-time reflection. It\u2019s a fast, statically typed, compiled language that feels like a dynamically typed, interpreted language.</p></blockquote><h2>Go installation</h2><p>To install the Go tools, type on a terminal:</p><pre class="language-console"><code class="language-console">$ sudo dnf install golang
</code></pre><p>The <code>go</code> and <code>gofmt</code> binaries will become available on the system.</p><p>Go code lives in <a href="https://golang.org/doc/code.html#Workspaces">a workspace</a> which is defined by the <code>GOPATH</code> environment variable. A common choice among developers, and the <a href="https://tip.golang.org/doc/code.html#GOPATH">default value of <code>GOPATH</code> starting from the Go 1.8 release</a>, is to use <code>$HOME/go</code>:</p><pre class="language-console"><code class="language-console">$ mkdir -p $HOME/go
$ echo &#39;export GOPATH=$HOME/go&#39; &gt;&gt; $HOME/.bashrc
$ source $HOME/.bashrc
</code></pre><p>Check that <code>GOPATH</code> is set correctly with this command:</p><pre class="language-console"><code class="language-console">$ go env GOPATH
/home/user/go
</code></pre><p>Where \u2018user\u2019 will be your user name.</p><p>Writing Go programs is covered in <a href="/tech/languages/go/go-programs.html">Go programs</a>.</p><h2>References</h2><ul><li><a href="https://golang.org/doc/">Go Documentation</a></li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/go/go-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
