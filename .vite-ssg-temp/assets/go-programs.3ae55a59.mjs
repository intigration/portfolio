import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Writing Go programs", "meta": [{ "property": "og:title", "content": "Writing Go programs" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Writing Go programs</h1><p>This assumes you have already <a href="/tech/languages/go/go-installation.html#go-installation">installed Go</a>.</p><p>To write programs in Go, we write files with the <code>.go</code> extension in a subdirectory of <code>$GOPATH/src</code>. These are the steps:</p><pre class="language-console"><code class="language-console">$ mkdir -p $HOME/go/src/hello
$ cd $HOME/go/src/hello
$ touch hello.go
</code></pre><p>Now, edit the file <code>hello.go</code> with your favorite editor and type the following:</p><pre class="language-go"><code class="language-go"><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, Fedora!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><p>Save your changes and, still on the same directory (<code>$HOME/go/src/hello</code>), run:</p><pre class="language-console"><code class="language-console">$ go run hello.go
Hello, Fedora!
</code></pre><p>The command <code>go run</code> builds and runs a Go program, and is useful for quick experiments. To build the program and generate a compiled binary, use <code>go build</code>:</p><pre class="language-console"><code class="language-console">$ go build
$ ls
hello  hello.go
</code></pre><p>Without arguments, <code>go build</code> builds the package in the current directory, and in case of a main package it places a binary in the same directory. Let\u2019s try it:</p><pre class="language-console"><code class="language-console">$ ./hello
Hello, Fedora!
</code></pre><p>Yet another option is to use <code>go install</code>:</p><pre class="language-console"><code class="language-console">$ go install
$ ls
hello.go
$ ls $GOPATH/bin
hello
</code></pre><p>After building the current package, <code>go install</code> places the binary in <code>$GOPATH/bin</code>, instead of the current directory. It also builds and caches all dependencies in <code>$GOPATH/pkg</code>, making this command specially useful for bigger programs, such that <code>go install</code> can be faster than <code>go build</code> because of the cache.</p><p>Because programs are installed in <code>$GOPATH/bin</code>, it is common to add that to the <code>PATH</code> environment variable, so that you can run your Go programs without specifying their full path:</p><pre class="language-console"><code class="language-console">$ echo &#39;export PATH=$PATH:$GOPATH/bin&#39; &gt;&gt; $HOME/.bashrc
$ source $HOME/.bashrc
$ hello
Hello, Fedora!
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/go/go-programs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
