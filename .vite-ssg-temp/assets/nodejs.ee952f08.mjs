import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Node.js", "meta": [{ "property": "og:title", "content": "Node.js" }, { "property": "og:description", "content": "Open-source cross-platform server-side JavaScript runtime environment." }, { "name": "description", "content": "Open-source cross-platform server-side JavaScript runtime environment." }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Node.js</h1><h2>Node.js and npm installation</h2><p>Starting from Fedora 24, npm is a part of Node.js package and does not need to be installed separately. Therefore, to install both npm and Node.js, you need to run:</p><pre><code>$ sudo dnf install nodejs
</code></pre><p>This will install V8 Javascript Engine, Node.js runtime and npm package manager and their dependencies. Versions present in repositories are usually current or to-be (in Rawhide) Node.js LTS releases, including npm and V8 engine that come with them.</p><h3>Alternative versions</h3><p>There are alternative versions available as <a href="https://docs.fedoraproject.org/en-US/modularity/using-modules/">Fedora Modules</a>.</p><p><strong>Note:</strong> Modules are available for all editions from Fedora 29, and on the Server Edition from Fedora 28.</p><p>To list all available versions, run:</p><pre><code>$ dnf module list
</code></pre><p>And to install an alternative version, run a command similar to this:</p><pre><code>$ sudo dnf module install nodejs:8
</code></pre><h3>Managing multiple versions with nvm</h3><p><a href="https://github.com/nvm-sh/nvm#about">nvm</a> (Node Version Manager) is a bash script to manage multiple Node.js versions. nvm makes it easier to install, uninstall, and switch between different versions. Visit it\u2019s Github page to follow the latest <a href="https://github.com/nvm-sh/nvm#installing-and-updating">installation instructions</a>.</p><h2>Yarn</h2><p><a href="https://yarnpkg.com/en/">Yarn</a> package manager is available since Fedora 29. You can install it by running:</p><pre><code>$ sudo dnf install yarnpkg
</code></pre><p>Yarn can be used in the following manner:</p><pre><code>$ yarnpkg add request
$ yarn add request
</code></pre><h2>Installing npm modules</h2><p>Installing Node.js modules is covered in <a href="/tech/languages/nodejs/modules.html">Node.js modules</a>.</p><h2>Installing Global Modules</h2><p>Create a directory for global installations inside your home directory:</p><pre><code>mkdir ~/.npm-global
</code></pre><p>Set the new directory path for npm:</p><pre><code>npm config set prefix &#39;~/.npm-global&#39;
</code></pre><p>Open/create the <code>~/.profile</code> file and add the following line:</p><pre><code>export PATH=~/.npm-global/bin:$PATH
</code></pre><p>Update your system variables with this command:</p><pre><code>source ~/.profile
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/nodejs/nodejs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
