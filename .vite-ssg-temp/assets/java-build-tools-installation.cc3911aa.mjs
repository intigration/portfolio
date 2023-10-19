import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Java build tools", "meta": [{ "property": "og:title", "content": "Java build tools" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Java build tools</h1><p>The most popular build tools used by millions of Java developers are packaged in official Fedora repositories. This page contains information on how easy it is to install them.</p><h2>Maven installation</h2><p><a href="https://maven.apache.org/">Maven</a> is probably the most popular build tool in Java world these days. To install it, simply type:</p><pre><code>$ sudo dnf install maven
</code></pre><h2>Ant+Ivy installation</h2><p>Last but not least, still quite popular duo <a href="http://ant.apache.org/ivy/">Ant+Ivy</a> can be installed simply by typing:</p><pre><code>$ sudo dnf install ant apache-ivy
</code></pre><h2>Creating a Maven project</h2><h3>Using <code>mvn</code> command-line tool</h3><p>Use the command from the <a href="https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html">Maven quick start guide</a>:</p><pre><code>$ mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false
</code></pre><p>The project that is created follows the <a href="http://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html">Maven Project Structure</a>. Initially you should see the <code>src</code> directory when you explore the project directory. You will also notice that your project directory has a file, the <a href="https://maven.apache.org/pom.html">pom.xml</a> in it, this is your Maven project file that defines your build, and how you will transition through the Maven build <a href="https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html">lifecycles</a>.</p><p>The sample application created by the Maven archetype contains a single \u201CHello World\u201D application (jar).</p><p>The <code>target</code> directory will be created after the first compilation: run</p><pre><code>$ mvn compile
</code></pre><p>This directory is where your compiled artifacts, or generated outputs (from builds) are stored. Its best to think of this directory as a temp space, used to store the outputs from a build.</p><h3>Creating a git repo</h3><p>This project folder is not a Git repository yet. Create a git repo:</p><pre><code>$ cd my-app
$ git init
</code></pre><p>If you run <code>git status</code> in the created <code>my-app</code> directory, you will see that the <code>target</code> directory is still part of your git repository. It is a best practice not to include this in your version control system, so it is recommended that you create a <a href="https://git-scm.com/docs/gitignore">gitignore</a> file, add this directory and anything under it as ignored files.</p><p>A good starter <code>.gitignore</code> file for Maven projects can be found on <a href="https://github.com/github/gitignore/blob/master/Maven.gitignore">Github</a>. Download it into your repo with:</p><pre><code>$ curl https://raw.githubusercontent.com/github/gitignore/master/Maven.gitignore -o .gitignore
</code></pre><p>The <code>src</code> directory is the start of your source directory structure, and under this directory you will see typically see any number of <a href="http://docs.oracle.com/javase/tutorial/java/package/managingfiles.html">package directories</a> (example: <code>main</code>). If you have tests, you will find them in the <code>test</code> directory.</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/java/java-build-tools-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
