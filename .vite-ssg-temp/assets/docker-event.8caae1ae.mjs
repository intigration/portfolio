import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "@vue/server-renderer";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const head = { "title": "Nuxt 3 Awesome Starter", "meta": [{ "property": "og:title", "content": "Nuxt 3 Awesome Starter" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><p>a Nuxt 3 starter template or boilerplate with a lot of useful features. and integrated with TailwindCSS 3.</p><blockquote><p><strong>WARNING</strong> <br> Nuxt 3 is still in beta and is not recommended for production use.</p></blockquote><h2>Features</h2><ul><li>[x] \u{1F4A8} <a href="https://tailwindcss.com/">Tailwind CSS v3</a> with <a href="https://windicss.org/">Windicss</a></li><li>[x] \u2728 <a href="https://headlessui.dev/">Headless UI</a></li><li>[x] \u{1F514} <a href="https://icones.js.org/">Icon Pack Component (unplugin-icons)</a></li><li>[x] \u{1F6F9} <a href="https://pinia.vuejs.org/">State &amp; Store Management (Pinia)</a></li><li>[x] \u{1F6A9} <a href="https://github.com/intlify/nuxt3">Localization (i18n) by @intlify</a></li><li>[x] \u{1F4E6} <a href="https://vueuse.org/">Vue Composition Collection (Vueuse)</a></li><li>[x] \u{1F319} Switch Theme (light, dark, system, realtime)</li><li>[x] \u{1F1EE}\u{1F1E9} Language Switcher</li><li>[x] \u{1FA9D} Built-in Component &amp; Layout</li><li>[x] Eslint &amp; Prettier</li><li>[x] Husky &amp; Commitlint</li><li>[ ] Http Request (axios ?)</li></ul><h2>Preview</h2><table align="center"><tr><td align="center" width="75%"><img src="https://github.com/viandwi24/nuxt3-awesome-starter/blob/main/assets/images/preview.gif?raw=true" alt="Preview" title="Preview"></td><td align="center" width="25%"><img src="https://github.com/viandwi24/nuxt3-awesome-starter/blob/main/assets/images/preview_mobile.gif?raw=true" alt="Preview" title="Preview"></td></tr></table><p align="center"><br><a href="https://nuxt3-awesome-starter.vercel.app/" target="_blank"> Live Demo </a><br><br><a href="https://codesandbox.io/s/github/viandwi24/nuxt3-awesome-starter" title="Open In Code Sandbox"><img src="https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&amp;logo=codesandboxg" alt="Open In Code Sandbox"></a><br><a href="https://stackblitz.com/github/viandwi24/nuxt3-awesome-starter" title="Open In Stackblitz"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="Open In Stackblitz"></a></p><h2>Table of Contents</h2><ul><li><a href="#nuxt-3-awesome-starter">Nuxt 3 Awesome Starter</a><ul><li><a href="#built-in-components">Built-in Components</a></li><li><a href="#quick-start">Quick Start</a></li><li><a href="#notes">Notes</a><ul><li><a href="#styles">Styles</a></li><li><a href="#theme--dark-mode-">Theme (Dark Mode)</a></li><li><a href="#localization">Localization</a></li><li><a href="#icons">Icons</a></li><li><a href="#precommit-and-postmerge">Precommit and Postmerge</a></li></ul></li><li><a href="#license">License</a></li></ul></li></ul><h2>Built-in Components</h2><ul><li>[x] Footer</li><li>[x] Button</li><li>[x] Anchor (link)</li><li>[x] Navbar <ul><li>[x] Navbar Builder</li><li>[x] Drawer (on mobile)</li><li>[x] Options (on mobile)</li></ul></li><li>[x] Action Sheet</li><li>[x] Theme Toggle / Switcher</li><li>[x] Page Layout <ul><li>[x] Wrapper</li><li>[x] Header <ul><li>[x] Title</li></ul></li><li>[x] Body <ul><li>[x] Section <ul><li>[x] Section Wrapper</li><li>[x] Section Title</li></ul></li></ul></li></ul></li><li>[x] Dashboard Layout <ul><li>[x] Sidebar</li></ul></li><li>[ ] Modal</li><li>[ ] Alert</li></ul><h2>Quick Start</h2><ul><li>This project using <code>yarn</code> as package manager.</li><li>Clone this project to your computer <code>git clone https://github.com/viandwi24/nuxt3-awesome-starter</code></li><li>Install dependencies <code>yarn install</code></li><li>Run <code>yarn dev</code> to start development server and open <code>http://localhost:3000</code> in your browser</li><li>Run <code>yarn build</code> to build project and <code>yarn start</code> to start production server</li></ul><p>Checkout the <a href="https://v3.nuxtjs.org/docs/deployment">deployment documentation</a>.</p><h2>Notes</h2><h3>Styles</h3><p>Tailwindcss import managed by windicss. and you can add custom styles in :</p><pre><code>/path/to/assets/sass/app.scss
</code></pre><h3>Theme (Dark Mode)</h3><p>ThemeManager is a plugin that allows you to switch between themes. this lib in :</p><pre><code>/path/to/utils/theme.ts
</code></pre><p><code>Thememanager</code> is a function-class construct when app.vue before mounted. theme construct inside <code>AppSetup()</code> in <code>/path/to/app.vue</code> :</p><pre class="language-vue"><code class="language-vue">&lt;!-- /path/to/app.vue --&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
import { AppSetup } from &#39;~/utils/app&#39;;
// app setup
AppSetup()
&lt;/script&gt;
</code></pre><p>To change theme, you can direct set theme from state <code>theme.setting</code>, example :</p><pre class="language-vue"><code class="language-vue">&lt;script lang=&quot;ts&quot; setup&gt;
import { IThemeSettingOptions } from &#39;~/utils/theme&#39;
const themeSetting = useState&lt;IThemeSettingOptions&gt;(&#39;theme.setting&#39;)
themeSetting.value = &#39;dark&#39;
&lt;/script&gt;
</code></pre><p>When you change state <code>theme.setting</code>, it will automatically change theme.</p><p>Theme Setting have 4 options :</p><ul><li><code>light</code></li><li><code>dark</code></li><li><code>system</code> (operating system theme)</li><li><code>realtime</code> (realtime theme, if 05:00 - 17:00, it will change to light theme, otherwise dark)</li></ul><p>We have state <code>theme.current</code>, this state return <code>light</code> or <code>dark</code> theme. basically it\u2019s process from <code>theme.setting</code>. dont change theme with this state.</p><h3>Localization</h3><p>Localization is a plugin that allows you to switch between languages. this lib in :</p><pre><code>/path/to/utils/lang.ts
</code></pre><p><code>LanguageManager</code> is a function-class construct when app.vue before mounted. this lib depend on <a href="https://github.com/intlify/nuxt3">@intlify/nuxt3</a> lang construct inside <code>AppSetup()</code> in <code>/path/to/app.vue</code> :</p><pre><code>&lt;script lang=&quot;ts&quot; setup&gt;
import { AppSetup } from &#39;~/utils/app&#39;;
// app setup
AppSetup()
&lt;/script&gt;
To change language, you can direct set language from state \`lang.setting\`, example :
\`\`\`vue
&lt;script lang=&quot;ts&quot; setup&gt;
const langSetting = useState&lt;string&gt;(&#39;locale.setting&#39;)
langSetting.value = &#39;en&#39;
&lt;/script&gt;
</code></pre><p>When you change state <code>locale.setting</code>, it will automatically change language.</p><h3>Icons</h3><p>This project using unplugin-icons for auto generate and import icon as component.</p><p>You can see collection icon list in : <a href="https://icones.js.org/">https://icones.js.org/</a></p><p>you can use <code>&lt;prefix-collection:icon /&gt;</code> or <code>&lt;PrefixCollection:Icon /&gt;</code>.</p><p>in this project, configuration prefix as a \u201Cicon\u201D, you can see in <code>nuxt.config.ts</code> :</p><p>export default defineNuxtConfig({ \u2026</p><pre><code>vite: {
    plugins: [
        UnpluginComponentsVite({
            dts: true,
            resolvers: [
                IconsResolver({
                    prefix: &#39;Icon&#39;,
                }),
            ],
        }),
    ],
},

...
</code></pre><p>})</p><pre><code>
Example :
\`\`\`vue
// use icon from collection &quot;Simple Icons&quot; and name icon is &quot;nuxtdotjs&quot;
&lt;IconSimpleIcons:nuxtdotjs /&gt;

// use icon from collection &quot;Unicons&quot; and name icon is &quot;sun&quot;
&lt;IconUil:sun /&gt;
</code></pre><h3>Precommit and Postmerge</h3><p>This project using husky and commitlint for precommit and postmerge. when you commit, it will check your commit message and running \u201Cyarn lint-staged\u201D to check your staged files. configuration in : <code>/path/to/.husky/pre-commit</code> and <code>/path/to/commitlint.config.js</code></p><p>And when Postmerge, it will run \u201Cyarn\u201D to automatically install new dependencies. configuration in <code>/path/to/.husky/post-merge</code></p><h2>License</h2><p>This project is licensed under the MIT license, Copyright \xA9 2022 Alfian Dwi Nugraha. For more information see the <a href="LICENSE.md">LICENSE</a> file.</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("G:/Users/farhan/Documents/GitHub/portfolio/src/pages/blog/docker-event.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
