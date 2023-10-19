import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "IDEs", "meta": [{ "property": "og:title", "content": "IDEs" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>.NET IDEs in Fedora</h1><p>{: .centered .striped .highlight}</p><table><thead><tr><th>IDE</th><th>License</th><th>.NET Core</th><th>Mono</th><th>Debugger</th><th>Packaged in Fedora</th><th>Alternative download</th></tr></thead><tbody><tr><td><a href="/tools/eclipse/about.html">Eclipse</a> with <a href="https://marketplace.eclipse.org/content/acute-c-edition-eclipse-ide-experimental">aCute plugin</a></td><td><a href="http://www.eclipse.org/legal/epl-2.0/">EPL</a></td><td>\u2714</td><td>\u2714</td><td></td><td>\u2714</td><td></td></tr><tr><td><a href="http://www.monodevelop.com/">Monodevelop</a></td><td><a href="http://www.gnu.org/licenses/lgpl-2.1.html">LGPLv2</a></td><td></td><td>\u2714</td><td>\u2714</td><td>\u2714</td><td><a href="https://download.mono-project.com/repo/monodevelop.flatpakref">flatpak</a><sup>1</sup></td></tr><tr><td><a href="http://jetbrains.com/rider">JetBrains Rider</a></td><td><a href="https://www.jetbrains.com/store/license.html">Proprietary</a>, free for <a href="https://www.jetbrains.com/store/#edition=discounts">Education and OpenSource</a></td><td>\u2714</td><td>\u2714</td><td>\u2714</td><td></td><td>tarball</td></tr><tr><td><a href="https://code.visualstudio.com">Visual Studio Code</a> with <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp">C# plugin</a></td><td>Binary is <a href="https://code.visualstudio.com/License/">Proprietary</a>, Source Code is <a href="https://github.com/Microsoft/vscode/blob/master/LICENSE.txt">MIT</a>, C# extension is <a href="https://marketplace.visualstudio.com/items/ms-vscode.csharp/license">Proprietary</a></td><td>\u2714</td><td></td><td>\u2714</td><td></td><td><a href="https://flathub.org/repo/appstream/com.visualstudio.code.flatpakref">flatpak</a><sup>1</sup>, copr &amp; rpm</td></tr></tbody></table><p><em>1. Download and install using direct link to <a href="/deployment/Flatpak/about.html">Flatpak</a></em></p><h2>Installing Eclipse</h2><p>First install Eclipse and Eclipse Marketplace</p><pre><code>$ sudo dnf install eclipse eclipse-mpc
</code></pre><p>then install the aCute extension from the <a href="https://marketplace.eclipse.org/content/acute-c-edition-eclipse-ide-experimental">Marketplace</a></p><h2>Installing MonoDevelop</h2><pre><code>$ sudo dnf install monodevelop
</code></pre><h2>Installing JetBrains Rider</h2><ul><li>Apply for a <a href="https://www.jetbrains.com/store/?fromMenu#edition=discounts">license for Open Source projects or students</a> and <a href="http://jetbrains.com/rider">download Rider</a></li><li>Or download the <a href="https://www.jetbrains.com/rider/eap">Early Access</a> version</li></ul><h2>Installing Visual Studio Code</h2><p>Download <a href="https://code.visualstudio.com">Visual Studio Code</a> and the C# Extension from the <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp">Marketplace</a></p><p>Alternatively use the <a href="https://vscodium.com/">VSCodium</a> for Free/Libre Open Source Software Binaries of VSCode.</p><h2>Summary</h2><p>JetBrains Rider is the most complete C# IDE, however it is not open source.</p><p>VS Code and MonoDevelop work well for .NET Core and for Mono, respectively.</p><p>C# via Eclipse is still young and not very friendly for the former Windows developer, but it can be useful if you\u2019re already an Eclipse IDE user.</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/dotnet/dotnet-ide.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
