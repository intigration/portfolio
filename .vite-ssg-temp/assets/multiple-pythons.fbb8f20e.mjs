import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Multiple Pythons", "meta": [{ "property": "og:title", "content": "Multiple Pythons" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Multiple Python interpreters</h1><p>If you are working on a piece of Python software, you probably want to test it on multiple Python interpreters. On Fedora, that\u2019s easy: all you have to do is use <code>dnf</code> to install what you need.</p><p>Fedora includes all Python versions which are <a href="https://devguide.python.org/#status-of-python-branches">supported upstream</a>, a few older ones and possibly a pre-release of a newer one.</p><p>At the time of this writing, Fedora has the following Pythons ready for you in the repositories:</p><ul><li>CPython 3.10</li><li>CPython 3.9</li><li>CPython 3.8</li><li>CPython 3.7</li><li>CPython 3.6</li><li>CPython 3.5<sup>\u{1F480}</sup></li><li>CPython 2.7</li><li>PyPy 2</li><li>PyPy 3</li><li>Jython<sup>\u{1F480}</sup></li><li>MicroPython</li></ul><p>Quite a nest, isn\u2019t it? You can install them like this:</p><pre class="language-console"><code class="language-console">$ sudo dnf install python3.9  # to get CPython 3.9
$ sudo dnf install python3.8  # to get CPython 3.8
$ sudo dnf install python3.7  # to get CPython 3.7
$ sudo dnf install python3.6  # to get CPython 3.6
$ sudo dnf install python2.7  # to get CPython 2.7
$ sudo dnf install pypy2 pypy3 python3.10  # to get more at once
</code></pre><p>After that, you can run an interactive console or your script with, let\u2019s say, CPython 3.6:</p><pre class="language-console"><code class="language-console">$ python3.6
Python 3.6.12 (default, Aug 19 2020, 00:00:00) 
[GCC 10.2.1 20200723 (Red Hat 10.2.1-1)] on linux
Type &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.
&gt;&gt;&gt; 
</code></pre><p><strong>Warning:</strong> For production purposes you should use the <code>python3</code> package only. Other CPython versions might be <strong>unstable</strong> or even <strong>dangerous</strong> (either because they are extremely old or quite the contrary alpha/beta quality) and are intended solely for development.</p><p><strong>*</strong> Interpreters marked with <sup>\u{1F480}</sup> were removed in Fedora Linux 35 and are only available in Fedora Linux 34.</p><h2>Getting it and running it all with tox</h2><p><a href="https://tox.readthedocs.io/">Tox</a> is tool that helps you test your Python code on multiple Pythons. If you install it on Fedora via the dnf package manager, you\u2019ll automatically get all supported CPythons and PyPys:</p><pre class="language-console"><code class="language-console">$ sudo dnf install tox
</code></pre><p>If you are not yet familiar with tox, don\u2019t worry. This short example will show you how to start.</p><p>Let\u2019s create a directory and a simple Python file in it that will say something nice:</p><pre class="language-python"><code class="language-python"><span class="token comment"># say.py</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Fedora is the best OS for Python developers&#39;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;\\n\\n&#39;</span><span class="token punctuation">)</span>
</code></pre><p>Now we\u2019ll test if it works with all the Pythons, with tox. We\u2019ll create a simple configuration file for tox, <code>tox.ini</code>, in the same directory:</p><pre><code>[tox]
envlist = py27,py37,py38,py39,pypy,pypy3
skipsdist = True
[testenv]
commands=python say.py
</code></pre><p>The <code>envlist</code> directive defines the list of Pythons to test on. Normally, tox assumes you are testing a project with its own <code>setup.py</code>. For the simplicity of this demo, we are not using it, and we need to tell this to tox via the <code>skipsdist</code> option. Finally the <code>commands</code> in the <code>[testenv]</code> section tells tox what commands to run for the test. Normally, that would be <code>python setup.py test</code>, <code>pytest</code> or similar.</p><p>With <code>tox.ini</code> in place, run <code>tox</code> in the same directory:</p><pre class="language-console"><code class="language-console">$ tox
[...]
ERROR:   py27: commands failed
  py37: commands succeeded
  py38: commands succeeded
  py39: commands succeeded
ERROR:   pypy: commands failed
  pypy3: commands succeeded
</code></pre><p>As you can see, there\u2019s something wrong with the script: it only works on Python 3. The full tox output (omitted here) contains the exact error. If you want to support old Python 2 as well, you\u2019ll have to fix it:</p><pre class="language-python"><code class="language-python"><span class="token comment"># say.py</span>
<span class="token keyword">from</span> __future__ <span class="token keyword">import</span> print_function
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Fedora is the best OS for Python developers&#39;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;\\n\\n&#39;</span><span class="token punctuation">)</span>
</code></pre><pre class="language-console"><code class="language-console">$ tox
[...]
  py27: commands succeeded
  py37: commands succeeded
  py38: commands succeeded
  py39: commands succeeded
  pypy: commands succeeded
  pypy3: commands succeeded
  congratulations :)
</code></pre><p>If you want to use tox for your projects, you can learn more at <a href="https://tox.readthedocs.io/">the documentation</a>.</p><h2>Creating virtual environments and installing packages</h2><p>Fedora only packages Python modules for one current version of <code>python3</code>. For all other interpreters, you will need to install packages from <a href="https://pypi.python.org/pypi">PyPI</a>, the Python Package Index.</p><p>The best way is to use Python virtual environments. The invocation to create them differs for different Python versions. Packages installed in a virtual environment are only available once the environment is activated. Here you can see two demos that create a virtual environment in a folder named <code>env</code> and install some package into it.</p><h3>Python 3 (including PyPy 3)</h3><p>Recent versions of Python 3 include the <code>venv</code> module, which can create virtual environments. See the <a href="https://developer.fedoraproject.org/tech/languages/python/pypi-install.html">PyPI &amp; pip section</a> for details.</p><pre class="language-console"><code class="language-console">$ python3.9 -m venv env  # create the environment
$ source env/bin/activate  # activate it
(env)$ python -m pip install requests  # install a package with pip
...
(env)$ python  # run python from that environment
Python 3.9.0 (default, Oct  6 2020, 00:00:00) 
[GCC 10.2.1 20200723 (Red Hat 10.2.1-1)] on linux
Type &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.
&gt;&gt;&gt; import requests
&gt;&gt;&gt; ...
&gt;&gt;&gt; exit()
(env)$ deactivate  # go back to &quot;normal&quot;
</code></pre><p>The environment is a directory. If you no longer need it, deactivate it and delete it with <code>rm -rv env</code>.</p><h3>Python 2.7, PyPy 2</h3><p>For other Python versions, a tool called <code>virtualenv</code> can create virtual environments:</p><pre class="language-console"><code class="language-console">$ sudo dnf install /usr/bin/virtualenv  # install the necessary tool
$ virtualenv --python /usr/bin/python2.7 env  # create the virtualenv
Running virtualenv with interpreter /usr/bin/python2.7
New python executable in env/bin/python2.7
Also creating executable in env/bin/python
Installing setuptools, pip...done.
$ source env/bin/activate  # activate it
(env)$ python -m pip install requests  # install a package with pip
...
(env)$ python  # run python from that virtualenv
Python 2.7.11 (default, Jul  8 2016, 19:45:00) 
[GCC 5.3.1 20160406 (Red Hat 5.3.1-6)] on linux2
Type &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.
&gt;&gt;&gt; import requests
&gt;&gt;&gt; ...
&gt;&gt;&gt; exit()
(env)$ deactivate  # go back to &quot;normal&quot;
</code></pre><h3>Jython</h3><p><strong>Warning:</strong> Jython will be <a href="https://lists.fedoraproject.org/archives/list/users@lists.fedoraproject.org/thread/GCZL4Y63RPCSIHGX2KEJC5WRGTOKZVKS/">removed from Fedora in Fedora 35</a>.</p><p>The versions of virtualenv and tox packages in Fedora do not support Jython, an interpreter that interoperates with the Java ecosystem.</p><p>If you need to support it, you will need to install and use older virtualenv/tox versions from PyPI.</p><p>First, create and activate a virtual environment with a newer Python, preferably <code>python3</code>:</p><pre class="language-console"><code class="language-console">$ python3 -m venv py3env
$ source py3env/bin/activate  # activate it
</code></pre><p>Then, install older packages (virtualenv 15 and tox 2) into it:</p><pre class="language-console"><code class="language-console">(py3env)$ python -m pip install &#39;virtualenv&lt;16&#39; &#39;tox&lt;3&#39;
</code></pre><p>Now, whenever the Python 3 virtual environment is activated, you can invoke tox 2 using the <code>tox</code> command. Include <code>jython</code> in the <code>envlist</code> section in <code>tox.ini</code> to test on that interpreters.</p><p>You can also use the older virtualenv to create environments for Jython:</p><pre class="language-console"><code class="language-console">(py3env)$ python -m virtualenv --python /usr/bin/jython jyenv --no-setuptools --no-pip --no-wheel
</code></pre><p>To activate these, you don\u2019t need the <code>py3env</code> activated. That is only needed to create them.</p><pre class="language-console"><code class="language-console">$ source jyenv/bin/activate
(jyenv)$ python --version
Jython 2.7.1
</code></pre><p>To be able to install packages, run Jython\u2019s <code>ensurepip</code> command. This will install a compatible version of <code>pip</code>.</p><pre class="language-console"><code class="language-console">(jyenv)$ python -m ensurepip
(jyenv)$ python -m pip install requests
</code></pre><h3>MicroPython</h3><p>MicroPython does not support virtual environments. It does have a rudimentary pip replacement called <a href="https://pypi.python.org/pypi/micropython-upip/">upip</a>, which you can use to install packages that support MicroPython. Run it to find out more:</p><pre class="language-console"><code class="language-console">$ micropython -m upip
</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/python/multiple-pythons.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
