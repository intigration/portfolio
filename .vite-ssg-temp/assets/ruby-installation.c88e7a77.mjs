import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Ruby", "meta": [{ "property": "og:title", "content": "Ruby" }, { "property": "og:description", "content": "A dynamic programming language with a focus on readability, simplicity and productivity." }, { "name": "description", "content": "A dynamic programming language with a focus on readability, simplicity and productivity." }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Ruby installation</h1><h2>CRuby</h2><p>To install CRuby, simply type:</p><pre><code>$ sudo dnf install ruby
</code></pre><p>Above command will install latest stable CRuby packages including RDoc, Psych, JSON, BigDecimal and IO/Console, and interactive Ruby shell <code>irb</code>. Other bundled libraries such as TclTk bindings, Rake and Test::Unit found in upstream Ruby distribution needs to be installed separately:</p><pre><code>$ sudo dnf install rubygem-{tk{,-doc},rake,test-unit}
</code></pre><p>Please note that we have already unbundled these libraries from Ruby itself, so they come in their own packages and need a specific dependency requirement in .gemspec or Gemfile as well as a specific <code>require()</code> call in your Ruby code.</p><h2>JRuby</h2><p>Alternatively Fedora comes with JRuby packages that can be installed via:</p><pre><code>$ sudo dnf install jruby
</code></pre><p>Please note that JRuby packages in Fedora are not yet in the best shape and things might be broken. If you are not willing to experiment, please use the CRuby packages for now or use a Ruby version manager of your choice.</p><h2>Choosing Ruby with RubyPick</h2><p>All Rubies come installed with RubyPick, the Fedora Ruby manager. Therefore CRuby has its executable at <code>/usr/bin/ruby-mri</code>, JRuby has its at <code>/usr/bin/jruby</code> and <code>/usr/bin/ruby</code> is a RubyPick executable that chooses the right version of Ruby to run.</p><p>You don\u2019t need to do anything to set up RubyPick to use CRuby as CRuby is the default. RubyPick was actually introduced to enable Fedora users run other Ruby implementations that might make their way into official Fedora repositories such as JRuby.</p><p>To use different Ruby via RubyPick run:</p><pre><code>ruby _mri_ [params]
ruby _jruby_ [params]
</code></pre><p>Or set the expected environment variables as follows:</p><pre><code>RUBYPICK=_mri_
RUBYPICK=_jruby_
</code></pre><p><a href="https://github.com/fedora-ruby/rubypick">Read more about RubyPick</a>.</p><h2>Installing Ruby with rbenv</h2><p>The first step is to install dependencies for Ruby.</p><pre><code>sudo dnf install git-core zlib zlib-devel gcc-c++ patch readline readline-devel libyaml-devel libffi-devel openssl-devel make bzip2 autoconf automake libtool bison curl sqlite-devel
</code></pre><p>Install rbenv</p><pre><code>cd
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo &#39;export PATH=&quot;$HOME/.rbenv/bin:$PATH&quot;&#39; &gt;&gt; ~/.bashrc
echo &#39;eval &quot;$(rbenv init -)&quot;&#39; &gt;&gt; ~/.bashrc
source ~/.bashrc
exec $SHELL

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo &#39;export PATH=&quot;$HOME/.rbenv/plugins/ruby-build/bin:$PATH&quot;&#39; &gt;&gt; ~/.bashrc
source ~/.bashrc
exec $SHELL
</code></pre><p>Install Ruby</p><pre><code>rbenv install 2.6.6
rbenv global 2.6.6
ruby -v

</code></pre><p>Use this command if you do not want rubygems to install the documentation for each package locally.</p><pre><code>echo &quot;gem: --no-document&quot; &gt; ~/.gemrc
</code></pre><p>Install bundler</p><pre><code>gem install bundler
</code></pre><p>Whenever you install a new version of Ruby or a gem, you should run the rehash sub-command. This will make executables known to rbenv, which will allow us to run those executables:</p><pre><code>rbenv rehash 
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/ruby/ruby-installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
