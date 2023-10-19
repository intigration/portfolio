import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Gems", "meta": [{ "property": "og:title", "content": "Gems" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Gems installation</h1><p>You can install new gems on Fedora by either installing upstream gems from <a href="http://RubyGems.org">RubyGems.org</a> or packaged gems from Fedora official repositories.</p><h2>Installing gems from <a href="http://RubyGems.org">RubyGems.org</a></h2><p>Installing upstream gems is as easy as running <code>gem install GEM_NAME</code> command, however some gems might fail to install due to compilation errors. If you need to compile gems C extensions, install Ruby header files with the following command:</p><pre><code>$ sudo dnf install ruby-devel
</code></pre><p>In case you lack the C compiler on your Fedora, you can install C development tools group:</p><pre><code>$ sudo dnf group install &quot;C Development Tools and Libraries&quot;
</code></pre><p>Other missing header files will depend on the particular gem you want to install. In Fedora the sub-packages containing header files are always suffixed with <code>-devel</code> so for example to install the <code>pg</code> gem, you will need to compile its C extensions against PostgreSQL header files that can be installed by installing <code>postgresql-devel</code> sub-package.</p><p>If you installed all the above, but the extensions would still not compile, you are probably running a Fedora image that misses <code>redhat-rpm-config</code> package. In that case <code>gcc</code> compiler would complain about one of the following:</p><pre><code>gcc: error: conftest.c: No such file or directory
gcc: error: /usr/lib/rpm/redhat/redhat-hardened-cc1: No such file or directory
</code></pre><p>To solve this, simply run <code>sudo dnf install redhat-rpm-config</code>.</p><p>If you are getting compilation issues mentioning <code>Failed to complete patch task</code>, you are likely missing <code>patch</code> command:</p><pre><code>$ sudo dnf install patch
</code></pre><h2>Installing gems from official Fedora repositories</h2><p>Many gems from <a href="http://RubyGems.org">RubyGems.org</a> are packaged and available in base Fedora to install. These packages have <code>rubygem-</code> prefix to upstream gem names and a <code>rubygem(name)</code> virtual provide, and also comes with precompiled extensions.</p><p>To install <code>thor</code> gem you therefore install <code>rubygem-thor</code> package:</p><pre><code>$ sudo dnf install rubygem-thor
</code></pre><p>or</p><pre><code>$ sudo dnf install &#39;rubygem(thor)&#39;
</code></pre><p>This variant have the advantage of properly stating of all system dependencies and no need for any header files or development tools. Therefore you can just install the package and run it. It might also contain any security fixes or fixes that makes the gems run smoothly on Fedora without additional tweaking. This makes it a safer choice as you get the security fixes for your gems with your system updates.</p><p>The disadvantage of installing Fedora packaged gems is the lack of versions to choose from. There is only one version that is usually available for a given Fedora at a time. To use the packaged gems successfully with Bundler, you will need to lock the exact version of the gem in the project\u2019s Gemfile. If all gems are installed from Fedora repositories, you can take advantage of Bundler\u2019s <code>--local</code> switch:</p><pre><code>$ bundle --local
</code></pre><p>This way Bundler won\u2019t try to get other gems from <a href="http://RubyGems.org">RubyGems.org</a> and will only use and lock the gems found on your machine.</p><p>Note that system gems are installed into <code>/usr/share/gems</code> and this path needs to be included in <code>$GEM_PATH</code> in case you are about to modify it.</p><h3>IsItFedoraRuby</h3><p>To look whether the required gem is available as an RPM package, look at <a href="http://isitfedoraruby.com/">IsItFedoraRuby.com</a> site which tracks the Ruby integration within the Fedora project by listing available information about packaged gems.</p><h2>Configuring RubyGems</h2><p>Fedora configures ruby to install gems on your user\u2019s directory; as opposed to the system\u2019s, by default. The gems get installed at: <code>$HOME/.local/share/gem</code>.</p><p>You can check the defaults <a href="https://src.fedoraproject.org/rpms/ruby/blob/rawhide/f/operating_system.rb">here</a>.</p><p>You can change these defaults by creating <code>$HOME/.gemrc</code>.</p><p>For example, to disable documentation generation at install time, you can do the following:</p><pre><code>install: --no-document
</code></pre><p>This method will not override the system\u2019s defaults.</p><p>Or, in order to override the system\u2019s default, use:</p><pre><code>gem: --user-install
</code></pre><p>Remember to add: <code>$HOME/.local/share/gem/ruby/bin</code> to your <code>$PATH</code> if you choose to use <code>gem: ...</code> since all default settings would be overriden if you do.</p><p>One way of doing this is adding the following to <code>$HOME/.bash_profile</code>:</p><pre><code># my path
## ruby
export PATH=&quot;$HOME/.local/share/gem/ruby/bin:$PATH&quot;
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/ruby/gems-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
