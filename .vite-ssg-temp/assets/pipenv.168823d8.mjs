import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Pipenv", "meta": [{ "property": "og:title", "content": "Pipenv" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><h1>Pipenv</h1><p>As the <a href="https://pipenv.pypa.io/en/latest/">official documentation of <code>pipenv</code></a> says.</p><pre><code>Pipenv is a tool that aims to bring the best of all packaging worlds (bundler,
composer, npm, cargo, yarn, etc.) to the Python world.

It automatically creates and manages a virtualenv for your projects, as well as
adds/removes packages from your Pipfile as you install/uninstall packages. It
also generates the ever-important Pipfile.lock, which is used to produce
deterministic builds.
</code></pre><p>Here we will see</p><ul><li>How to install <code>pipenv</code> on fedora?</li><li>How to create a virtual environment with <code>python3</code>?</li><li>How to install python packages in the virtual environment?</li><li>How to use the virtual environment?</li><li>How to remove this virtual environment?</li></ul><h2>Installation</h2><p>To install <code>pipenv</code> on your machine,</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> dnf <span class="token function">install</span> pipenv
</code></pre><p>Once it is done, you can use <code>pipenv</code> to create, manage and remove Python environments with different Python versions.</p><p>Let\u2019s see what all operations <code>pipenv</code> provides.</p><h2>Usage</h2><h3>Creating a virtual environment.</h3><p>To create a new virtualenv with a <code>python3</code> interpreter:</p><pre><code>$ pipenv --python 3
Creating a virtualenv for this project\u2026
Pipfile: /home/fedorauser/pipenv-dir/Pipfile
Using /usr/bin/python3.8 (3.8.2) to create virtualenv\u2026
\u283C Creating virtual environment...Already using interpreter /usr/bin/python3.8
Using base prefix &#39;/usr&#39;
New python executable in /home/fedorauser/.local/share/virtualenvs/pipenv-dir-O2-8SZy2/bin/python3.8
Also creating executable in /home/fedorauser/.local/share/virtualenvs/pipenv-dir-O2-8SZy2/bin/python
Installing setuptools, pip, wheel...
done.
Running virtualenv with interpreter /usr/bin/python3.8

\u2714 Successfully created virtual environment!
Virtualenv location: /home/fedorauser/.local/share/virtualenvs/pipenv-dir-O2-8SZy2
Creating a Pipfile for this project\u2026
</code></pre><p>This will create a file called <code>Pipfile</code> in your current directory.</p><p>You can get the project location using:</p><pre><code>$ pipenv --where
/home/fedorauser/pipenv-dir
</code></pre><p>To get the virtualenv location for this project:</p><pre><code>$ pipenv --venv
/home/fedorauser/.local/share/virtualenvs/pipenv-dir-O2-8SZy2
</code></pre><p>To get the python interpreter location for this <code>virtualenv</code>:</p><pre><code>$ pipenv --py
/home/fedorauser/.local/share/virtualenvs/pipenv-dir-O2-8SZy2/bin/python
</code></pre><h3>Installing packages</h3><p>Now that we have the virtualenv created, let\u2019s install some packages. It can be done with <code>pipenv install</code>.</p><pre><code>$ pipenv install
Installing dependencies from Pipfile.lock (db4242)\u2026
  \u{1F40D}   \u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589 0/0 \u2014 00:00:00
To activate this project&#39;s virtualenv, run pipenv shell.
Alternatively, run a command inside the virtualenv with pipenv run.
</code></pre><p>This will install packages listed in the <code>Pipfile</code>.</p><p>Alternatively, you can install packages using the <code>pipenv</code> command itself. In order to do that you can run <code>pipenv install &lt;package-name&gt;</code>. For example let\u2019s install the <a href="https://requests.readthedocs.io/en/master/">requests</a> package.</p><pre><code>$ pipenv install requests
Installing requests\u2026
Adding requests to Pipfile&#39;s [packages]\u2026
\u2714 Installation Succeeded
Pipfile.lock (db4242) out of date, updating to (fbd99e)\u2026
Locking [dev-packages] dependencies\u2026
Locking [packages] dependencies\u2026
Building requirements...
Resolving dependencies...
\u2714 Success!
Updated Pipfile.lock (fbd99e)!
Installing dependencies from Pipfile.lock (fbd99e)\u2026
  \u{1F40D}   \u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589 0/0 \u2014 00:00:00
To activate this project&#39;s virtualenv, run pipenv shell.
Alternatively, run a command inside the virtualenv with pipenv run.
</code></pre><p>You can also install the packages for a specific environment. For example, you might need <a href="https://black.readthedocs.io/en/stable/">black</a> of a specific version in your developement environment. To install it, run:</p><pre><code>$ pipenv install --dev black==&quot;20.8b0&quot;
Installing black==20.8b0\u2026
Adding black to Pipfile&#39;s [dev-packages]\u2026
\u2714 Installation Succeeded
Pipfile.lock (fbd99e) out of date, updating to (a289be)\u2026
Locking [dev-packages] dependencies\u2026
Building requirements...
Resolving dependencies...
\u2714 Success!
Locking [packages] dependencies\u2026
Building requirements...
Resolving dependencies...
\u2714 Success!
Updated Pipfile.lock (a289be)!
Installing dependencies from Pipfile.lock (a289be)\u2026
  \u{1F40D}   \u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589\u2589 0/0 \u2014 00:00:00
To activate this project&#39;s virtualenv, run pipenv shell.
Alternatively, run a command inside the virtualenv with pipenv run.
</code></pre><p>Now that you have installed <code>requests</code> and <code>black</code> in the current environment, <code>pipenv</code> has added those to your <code>Pipfile</code>.</p><p>If you check the contents of <code>Pipfile</code>, it will be something like:</p><pre><code>$cat Pipfile
[[source]]
name = &quot;pypi&quot;
url = &quot;https://pypi.org/simple&quot;
verify_ssl = true

[dev-packages]
black = &quot;==20.8b0&quot;

[packages]
requests = &quot;*&quot;

[requires]
python_version = &quot;3.8&quot;
</code></pre><h3>Using the virtual environment</h3><p>Till now we have created a virtualenv and installed some packages. Now let\u2019s use it. Let\u2019s write a simple python program for it.</p><pre class="language-python"><code class="language-python"><span class="token comment">#!/usr/bin/env python</span>

<span class="token keyword">import</span> requests
<span class="token keyword">import</span> sys

<span class="token keyword">def</span> <span class="token function">make_request</span><span class="token punctuation">(</span>url<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> url<span class="token punctuation">:</span>
        req <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
        <span class="token keyword">if</span> req<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>text<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">:</span>
        make_request<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><p>To launch a shell in the virtual environment, run <code>pipenv shell</code>:</p><pre><code>$ pipenv shell
Launching subshell in virtual environment\u2026
. /home/fedorauser/.local/share/virtualenvs/pipenv-dir-O2-8SZy2/bin/activate
(pipenv-dir) $
</code></pre><p>You can run the program from this shell:</p><pre><code>(pipenv-dir) $ python http-request.py http://cheat.sh/pipenv
# pipenv
# Simple and unified Python development workflow.
# Manages packages and the virtual environment for a project.
# More information: &lt;https://pypi.org/project/pipenv&gt;.

# Create a new project:
pipenv

# Create a new project using Python 3:
pipenv --three
 . . .
</code></pre><p>You can also run it directly using <code>pipenv run</code> without activating the shell:</p><pre><code>$ pipenv run python http-request.py http://cheat.sh/pipenv
# pipenv
# Simple and unified Python development workflow.
# Manages packages and the virtual environment for a project.
# More information: &lt;https://pypi.org/project/pipenv&gt;.

# Create a new project:
pipenv

# Create a new project using Python 3:
pipenv --three
 . . .
</code></pre><h3>Generating dependency list for the project</h3><p>To generate a <code>requirements.txt</code> file with a list of dependencies for the project, run:</p><pre><code>pipenv lock --requirements
-i https://pypi.org/simple
certifi==2020.6.20
chardet==3.0.4
idna==2.10; python_version &gt;= &#39;2.7&#39; and python_version not in &#39;3.0, 3.1, 3.2, 3.3&#39;
requests==2.24.0
urllib3==1.25.11; python_version &gt;= &#39;2.7&#39; and python_version not in &#39;3.0, 3.1, 3.2, 3.3, 3.4&#39; and python_version &lt; &#39;4&#39;
</code></pre><h3>Deactivating the virtual environment</h3><p>The command to deactivate the virtual environment is <code>deactivate</code>. Or you can just <code>exit</code>; both of these work just fine.</p><pre><code>(pipenv-dir) $ deactivate
$
</code></pre><h3>Removing the virtual environment.</h3><p>Finally, if you want to delete this virtual environment, you can do it with:</p><pre><code>$ pipenv --rm
Removing virtualenv (/home/fedorauser/.local/share/virtualenvs/pipenv-dir-O2-8SZy2)\u2026

</code></pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/languages/python/pipenv.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
