import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Further reading", "meta": [{ "property": "og:title", "content": "Further reading" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Learning resources</h1><p>There is an official book describing the Rust programming language in detail. <a href="https://doc.rust-lang.org/book/index.html">doc.rust-lang.org/book/</a></p><p>More examples of the concepts discussed in the book are available in this collection: <a href="https://doc.rust-lang.org/rust-by-example/">doc.rust-lang.org/rust-by-example</a></p><p>When you finish with the language itself, there is an ongoing effort to create a set of examples of using core libraries for concurrency, data serialization, network programming, etc. <a href="https://rust-lang-nursery.github.io/rust-cookbook/intro.html">rust-lang-nursery.github.io/rust-cookbook</a></p><p>Finally, you can find community pages with a list of resources such as this one: <a href="https://github.com/ctjhoa/rust-learning">github.com/ctjhoa/rust-learning</a></p><h1>API documentation</h1><p>Standard library documentation: <a href="https://doc.rust-lang.org/std/">doc.rust-lang.org/std</a></p><p>The Cargo book: <a href="https://doc.rust-lang.org/cargo/">doc.rust-lang.org/cargo</a></p><p>Documentation for crates available at <a href="https://crates.io/">crates.io</a>: <a href="https://docs.rs/">docs.rs</a></p><h1>IDE recommendations</h1><p>There are plugins for popular editor such as Vim, Atom or Gnome Builder which are based on the Rust Language Server (RLS) implementation. Alternatively, IntelliJ IDEA provides their own, custom plugin. Unfortunatelly, the debugging support is available only in paid CLion IDE.</p><p>Before you try to configure your editor or IDE, it is recommended to use install <code>rustup</code>: <a href="https://rustup.rs/">rustup.rs</a></p><p>If you want to start with Rust programming, it is easiest to try the RLS frontend for Visual Studio Code:</p><ol><li>Install the VSCode RPM package: <a href="https://code.visualstudio.com/docs/setup/linux">code.visualstudio.com/docs/setup/linux</a></li><li>Follow the instructions given at the extension Github page: <a href="https://github.com/rust-lang-nursery/rls-vscode">github.com/rust-lang-nursery/rls-vscode</a></li></ol><p>In case you prefer IDEs over editors, try the Intellij IDEA extension:</p><ol><li>Install the IDE (instructions are available under the \u201CInstallation Instructions\u201D link): <a href="https://www.jetbrains.com/idea/download/#section=linux">www.jetbrains.com/idea/download/#section=linux</a></li><li>Install the Rust plugin: <a href="https://intellij-rust.github.io/docs/quick-start.html">intellij-rust.github.io/docs/quick-start.html</a></li></ol><p>Complete list of available options is here: <a href="https://areweideyet.com/">areweideyet.com</a></p><h1>Other useful links</h1><p>If you want to start with some web applications, a list of useful frameworks is available here: <a href="http://www.arewewebyet.org/">www.arewewebyet.org</a></p><p>If you are brave enough and you want to try the nightly compiler edition (or you just want to try the awesome <a href="https://rocket.rs/">Rocket framework</a>), it is recommended to use rustup: <a href="https://rustup.rs/">rustup.rs</a></p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/rust/further-reading.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
