import{g as n,f as a,G as e}from"./common-bec3f312.js";const s='{"title":"项目整体搭建","frontmatter":{"date":"2022-03-28","title":"项目整体搭建","tags":["前端架构师","week9"],"describe":"使用ESLint添加代码规范, 深入ESLint配置文件, 使用Prettier自动格式化, 项目结构规范, 了解Gi t Flow标准, SPA路由的基本原理, 状态管理工具，Vuex安装和基础使用"},"headers":[{"level":2,"title":"使用ESLint添加代码规范","slug":"使用eslint添加代码规范"},{"level":3,"title":"没有规范可能出现的问题","slug":"没有规范可能出现的问题"},{"level":3,"title":"ESLint 是什么？","slug":"eslint-是什么？"},{"level":3,"title":"命令行工具","slug":"命令行工具"},{"level":3,"title":"编辑器插件","slug":"编辑器插件"},{"level":2,"title":"深入ESLint配置文件","slug":"深入eslint配置文件"},{"level":3,"title":"Rules","slug":"rules"},{"level":3,"title":"Extends","slug":"extends"},{"level":3,"title":"自动修正错误","slug":"自动修正错误"},{"level":2,"title":"使用Prettier自动格式化","slug":"使用prettier自动格式化"},{"level":3,"title":"ESLint 的功能","slug":"eslint-的功能"},{"level":3,"title":"Prettier 的理念","slug":"prettier-的理念"},{"level":3,"title":"Prettier 安装","slug":"prettier-安装"},{"level":3,"title":"ESLint prettier 的工作原理","slug":"eslint-prettier-的工作原理"},{"level":3,"title":"支持 Prettier 工具的代码库分支","slug":"支持-prettier-工具的代码库分支"},{"level":2,"title":"项目结构规范","slug":"项目结构规范"},{"level":3,"title":"注意事项","slug":"注意事项"},{"level":3,"title":"项目结构举例","slug":"项目结构举例"},{"level":2,"title":"Git 标准操作流程：Git Flow","slug":"git-标准操作流程：git-flow"},{"level":3,"title":"Git Flow","slug":"git-flow"},{"level":3,"title":"Github Flow","slug":"github-flow"},{"level":3,"title":"两大规则","slug":"两大规则"},{"level":2,"title":"安装第三方组件库","slug":"安装第三方组件库"},{"level":3,"title":"两大解决方案","slug":"两大解决方案"},{"level":3,"title":"安装方式","slug":"安装方式"},{"level":3,"title":"开始使用","slug":"开始使用"},{"level":3,"title":"关于全局 API","slug":"关于全局-api"},{"level":2,"title":"SPA 应用路由的基本原理","slug":"spa-应用路由的基本原理"},{"level":3,"title":"SPA 和普通网页应用的区别","slug":"spa-和普通网页应用的区别"},{"level":3,"title":"SPA 路由的实现方式","slug":"spa-路由的实现方式"},{"level":3,"title":"SPA优点","slug":"spa优点"},{"level":3,"title":"Vue Router 4","slug":"vue-router-4"},{"level":2,"title":"什么是状态管理工具","slug":"什么是状态管理工具"},{"level":3,"title":"解决方案","slug":"解决方案"},{"level":3,"title":"方案二 使用全局对象","slug":"方案二-使用全局对象"},{"level":3,"title":"状态管理工具三杰","slug":"状态管理工具三杰"},{"level":2,"title":"Vuex 安装和基础","slug":"vuex-安装和基础"},{"level":3,"title":"Vue 的数据流","slug":"vue-的数据流"},{"level":3,"title":"出现问题：多组件共享状态","slug":"出现问题：多组件共享状态"},{"level":3,"title":"Vuex 的解决方案","slug":"vuex-的解决方案"},{"level":2,"title":"本周总结","slug":"本周总结"},{"level":3,"title":"知识点","slug":"知识点"},{"level":3,"title":"要点","slug":"要点"},{"level":3,"title":"作业","slug":"作业"},{"level":2,"title":"B 端项目编码规范","slug":"b-端项目编码规范"},{"level":3,"title":"必须采用的规则合集","slug":"必须采用的规则合集"},{"level":3,"title":"规则详情","slug":"规则详情"},{"level":3,"title":"推荐插件","slug":"推荐插件"},{"level":3,"title":"推荐其他规则","slug":"推荐其他规则"},{"level":3,"title":"关于 Prettier 的使用","slug":"关于-prettier-的使用"},{"level":2,"title":"B 端项目文件结构规范","slug":"b-端项目文件结构规范"},{"level":3,"title":"参考","slug":"参考"},{"level":3,"title":"项目文件结构和命名规范","slug":"项目文件结构和命名规范"},{"level":3,"title":"注意事项","slug":"注意事项-2"},{"level":2,"title":"B 端 Git flow 规范","slug":"b-端-git-flow-规范"},{"level":3,"title":"规范","slug":"规范"},{"level":3,"title":"分支命名","slug":"分支命名"},{"level":3,"title":"Commit 信息","slug":"commit-信息"}],"relativePath":"docs/Front_arch/week9-xmdj/xmdj.md","lastUpdated":1660147426756.5005}';var t={};const r=e('<h2 id="使用eslint添加代码规范"><a class="header-anchor" href="#使用eslint添加代码规范" aria-hidden="true">#</a> 使用ESLint添加代码规范</h2><p><strong>规范的代码格式可以让整个工作的效率在一定程度上提升到最高</strong></p><h3 id="没有规范可能出现的问题"><a class="header-anchor" href="#没有规范可能出现的问题" aria-hidden="true">#</a> 没有规范可能出现的问题</h3><ul><li>代码难以读懂</li><li>代码提交的时候会有很多格式问题的修改，造成不必要的时间消耗。</li></ul><h3 id="eslint-是什么？"><a class="header-anchor" href="#eslint-是什么？" aria-hidden="true">#</a> ESLint 是什么？</h3><blockquote><p>是一个开源的 JavaScript 的 linting 工具，使用 espree 将 JavaScript 代码解析成抽象语法树 (AST)，然后通过AST 来分析我们代码。</p></blockquote><h3 id="命令行工具"><a class="header-anchor" href="#命令行工具" aria-hidden="true">#</a> 命令行工具</h3><div class="language-bash"><pre><code>npx eslint --version\nnpx eslint --ext ts,vue src/**\n</code></pre></div><h3 id="编辑器插件"><a class="header-anchor" href="#编辑器插件" aria-hidden="true">#</a> 编辑器插件</h3><p><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noopener noreferrer">ESLint 插件</a> <br><a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" rel="noopener noreferrer">Vetur 插件</a></p><h2 id="深入eslint配置文件"><a class="header-anchor" href="#深入eslint配置文件" aria-hidden="true">#</a> 深入ESLint配置文件</h2><h3 id="rules"><a class="header-anchor" href="#rules" aria-hidden="true">#</a> Rules</h3><p><a href="https://eslint.org/docs/rules/" target="_blank" rel="noopener noreferrer">ESLint 可用的 Rules</a></p><p>一个 rule 有三个等级 0， 代表关闭，1代表 warning，输出警告，但是不是错误，2 代表错误，会直接抛出错误。这三个数字也可以使用单词来代表，分别是 off warn 和 error。</p><div class="language-javascript"><pre><code>rules<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t<span class="token string">&#39;semi&#39;</span><span class="token operator">:</span> <span class="token number">2</span>\n<span class="token punctuation">}</span>\n\n\n代码块<span class="token number">123</span>\n</code></pre></div><p>一个 rule 在一些情况下还有配置的选项，比如分号，可以选择加的情况，就是刚才我们测试的情况，还可以选择不加的情况，这是另外一个分支。 <a href="https://eslint.org/docs/rules/semi" target="_blank" rel="noopener noreferrer">关于分号的Rule 详情</a></p><div class="language-javascript"><pre><code><span class="token comment">// 第一个还是rule 的等级，第二项是选项名称</span>\nrules<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t<span class="token string">&#39;semi&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n\n代码块<span class="token number">1234</span>\n</code></pre></div><h3 id="extends"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> Extends</h3><p>一系列的规则作为一组。大家可以把这一组拿来用到自己的项目中，那么这个就是 extends 字段，是一个数组，里面是几个项目，其实在 extends 中的每一个字段，都是一组规则。</p><p><a href="https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention-for-vue-js-3-x" target="_blank" rel="noopener noreferrer">Vue3 essential 规则组</a></p><h3 id="自动修正错误"><a class="header-anchor" href="#自动修正错误" aria-hidden="true">#</a> 自动修正错误</h3><p>在 vscode 中自动 lint 错误的做法</p><ul><li>方法一： cmd+shift+p 呼出快捷操作菜单。然后运行 ESLint：Fix all auto-fixable Problems</li><li>方法二：在 settings.json 编辑器配置文件中写入：</li></ul><div class="language-json"><pre><code><span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\n代码块<span class="token number">123</span>\n</code></pre></div><p><strong>注意的是不是每一个错误都是有修复规则的，有一些是无法修复的</strong></p><h2 id="使用prettier自动格式化"><a class="header-anchor" href="#使用prettier自动格式化" aria-hidden="true">#</a> 使用Prettier自动格式化</h2><p><strong>Prettier</strong> 顾名思义，将代码变漂亮！</p><h3 id="eslint-的功能"><a class="header-anchor" href="#eslint-的功能" aria-hidden="true">#</a> ESLint 的功能</h3><ul><li>代码质量问题</li><li>代码风格问题</li></ul><h3 id="prettier-的理念"><a class="header-anchor" href="#prettier-的理念" aria-hidden="true">#</a> Prettier 的理念</h3><ul><li><strong>An opinionated code formatter</strong>，格式很重要，但是很重要，让我来帮你搞定！</li><li>Fewer Options：Prettier 还给予了一部分配置项，可以通过 .prettierrc 文件修改。</li></ul><h3 id="prettier-安装"><a class="header-anchor" href="#prettier-安装" aria-hidden="true">#</a> Prettier 安装</h3><p><strong>CLI命令行安装使用</strong><a href="https://prettier.io/docs/en/install.html" target="_blank" rel="noopener noreferrer">文档地址</a></p><p><strong>编辑器插件安装使用</strong><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener noreferrer">插件地址</a><strong>编辑器快捷键</strong><a href="https://github.com/prettier/prettier-vscode" target="_blank" rel="noopener noreferrer">配置详情</a></p><div class="language-"><pre><code>1 CMD + Shift + P -&gt; Format Document\n2 Shift + Option + F\n\n\n代码块12\n</code></pre></div><p>修改默认的格式化工具到 Prettier，在 settings.json 中添加：</p><div class="language-javascript"><pre><code><span class="token punctuation">{</span>\n\t<span class="token comment">// 所有文件</span>\n  <span class="token string">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">// 特定类型文件</span>\n  <span class="token string">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n\n\n代码块<span class="token number">123456789</span>\n</code></pre></div><p>保存后自动修改：</p><div class="language-javascript"><pre><code><span class="token comment">// Set the default</span>\n<span class="token string">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n<span class="token comment">// Enable per-language</span>\n<span class="token string">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n\n\n代码块<span class="token number">123456</span>\n</code></pre></div><h3 id="eslint-prettier-的工作原理"><a class="header-anchor" href="#eslint-prettier-的工作原理" aria-hidden="true">#</a> ESLint prettier 的工作原理</h3><p><a href="https://prettier.io/docs/en/integrating-with-linters.html" target="_blank" rel="noopener noreferrer">文档地址</a></p><ul><li>禁用所有和Prettier 冲突的 ESLint 的代码格式规则</li><li>将所有 Prettier 的规则和修改导入 ESLint 中，在 ESLint 统一的显示这些错误。</li></ul><p><strong>支持 Vue ESLint 的 Prettier 插件</strong><a href="https://www.npmjs.com/package/eslint-plugin-prettier-vue" target="_blank" rel="noopener noreferrer">文档地址</a></p><h3 id="支持-prettier-工具的代码库分支"><a class="header-anchor" href="#支持-prettier-工具的代码库分支" aria-hidden="true">#</a> 支持 Prettier 工具的代码库分支</h3><p><a href="https://git.imooc.com/class-110/lego/src/feature/prettier" target="_blank" rel="noopener noreferrer">https://git.imooc.com/class-110/lego/src/feature/prettier</a></p><h2 id="项目结构规范"><a class="header-anchor" href="#项目结构规范" aria-hidden="true">#</a> 项目结构规范</h2><p><strong>代码结构</strong> 针对单个文件的书写格式 <strong>项目结构</strong> 针对这些文件应该以怎样的标准进行存放和管理。</p><p><a href="https://reactjs.org/docs/faq-structure.html" target="_blank" rel="noopener noreferrer">React 项目文件结构</a></p><ul><li>按照按功能或路由组织，也就是所说的 feature</li><li><strong>按照文件类型</strong></li></ul><h3 id="注意事项"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3><ul><li>避免多层嵌套</li><li>不要过度思考</li></ul><h3 id="项目结构举例"><a class="header-anchor" href="#项目结构举例" aria-hidden="true">#</a> 项目结构举例</h3><div class="language-bash"><pre><code>/assets\n\timage.png\n  logo.png\t\n/components\n\tColorPicker.vue <span class="token punctuation">(</span>使用 Pascal 命名方式<span class="token punctuation">)</span>\n  Dropdown.vue\n  <span class="token punctuation">..</span>.\n/views\n\tHome.vue （使用 Pascal 命名方式）\n    <span class="token punctuation">..</span>.\n/router\n\tindex.ts\n\t<span class="token punctuation">..</span>.\n/store\n\tindex.ts\n\teditor.ts\n\tuser.ts\n\t<span class="token punctuation">..</span>.\n/hooks\n\tuseURLLoader.ts （ 以use开头，使用驼峰命名方式 ）\n    <span class="token punctuation">..</span>.\n/plugins\n\thotKeys.ts （使用驼峰命名方式）\n\t<span class="token punctuation">..</span>.\n/test\n\tColorPicker.spec.ts （使用Pascal命名方式，和组件名称相同，以 spec.ts 结尾）\nApp.vue\nmain.ts\n<span class="token punctuation">..</span>.\n</code></pre></div><h2 id="git-标准操作流程：git-flow"><a class="header-anchor" href="#git-标准操作流程：git-flow" aria-hidden="true">#</a> Git 标准操作流程：Git Flow</h2><p>所有的这些规范都是针对特定的<strong>多人</strong>设定的，意在让多人协作的过程更顺畅，更简单，减少不必要的冲突和时间的浪费。</p><h3 id="git-flow"><a class="header-anchor" href="#git-flow" aria-hidden="true">#</a> Git Flow</h3><p><img src="https://oss.filway.cn/filway-blog/601650f7098c267006850425.jpg" alt="图片描述"></p><p><strong>预设两个分支</strong></p><ul><li>master 只能用来包括产品代码。你不能直接工作在这个 master 分支上</li><li>develop 是你进行任何新的开发的基础分支。</li></ul><p><strong>这两个分支被称之为长期分支</strong></p><p><img src="https://oss.filway.cn/filway-blog/601651210912858f07000454.jpg" alt="图片描述"></p><ul><li>功能开发 feature <ul><li>整合回到 develop</li><li>等待更全面的测试</li><li>等待和 develop 一起进行发布</li></ul></li><li>管理 release <ul><li>新功能已经添加，bug已经修复</li><li>代码已经被测试</li><li>release 分支使用版本号命名的</li></ul></li><li>bug 修复 hotfix <ul><li>针对 master 分支</li></ul></li></ul><p><strong>优点</strong>： 清晰可控</p><p><strong>缺点</strong>：相对复杂，不适合持续发布。</p><h3 id="github-flow"><a class="header-anchor" href="#github-flow" aria-hidden="true">#</a> Github Flow</h3><p><a href="https://guides.github.com/introduction/flow/index.html" target="_blank" rel="noopener noreferrer">Github Flow 官方文档</a></p><p><img src="https://oss.filway.cn/filway-blog/60165133090f7cb716000402.jpg" alt="图片描述"></p><ul><li>根据需求，从 master 拉出分支</li><li>激烈的开发阶段，提交 commit</li><li>开发完毕，发起 PR（pull request）</li><li>代码评审（很重要！）</li><li>部署，并且测试</li><li>没问题， merge 到 master！</li></ul><p><strong>Github flow 的最大优点就是简单，对于&quot;持续发布&quot;的产品，可以说是最合适的流程。</strong></p><h3 id="两大规则"><a class="header-anchor" href="#两大规则" aria-hidden="true">#</a> 两大规则</h3><ul><li>branch 命名 <ul><li>feature 开头代表功能开发</li><li>hotfix 开头代码bug修复</li></ul></li><li>commit 信息，必须 <strong>言之有物</strong>，杜绝 <strong>update，fix bug</strong> 这类废话</li></ul><h2 id="安装第三方组件库"><a class="header-anchor" href="#安装第三方组件库" aria-hidden="true">#</a> 安装第三方组件库</h2><h3 id="两大解决方案"><a class="header-anchor" href="#两大解决方案" aria-hidden="true">#</a> 两大解决方案</h3><ul><li><strong><a href="https://2x.antdv.com/docs/vue/getting-started-cn/" target="_blank" rel="noopener noreferrer">ant-deisgn-vue</a></strong></li><li><a href="https://element-plus.gitee.io/" target="_blank" rel="noopener noreferrer">element-plus</a></li></ul><h3 id="安装方式"><a class="header-anchor" href="#安装方式" aria-hidden="true">#</a> 安装方式</h3><ul><li>npm 安装 配合 webpack 等打包工具使用</li></ul><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> ant-design-vue@next --save\n</code></pre></div><ul><li>直接引入 js 和 css (不推荐)</li></ul><div class="language-html"><pre><code><span class="token comment">&lt;!-- 引入样式 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/element-plus/lib/theme-chalk/index.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- 引入组件库 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/element-plus/lib/index.full.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="开始使用"><a class="header-anchor" href="#开始使用" aria-hidden="true">#</a> 开始使用</h3><div class="language-typescript"><pre><code><span class="token comment">// main.ts</span>\n<span class="token keyword">import</span> Antd <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;ant-design-vue/dist/antd.css&#39;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Antd<span class="token punctuation">)</span>\n</code></pre></div><h3 id="关于全局-api"><a class="header-anchor" href="#关于全局-api" aria-hidden="true">#</a> 关于全局 API</h3><p>Vue2 的时代，都是全局API 和 配置</p><div class="language-javascript"><pre><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;button-counter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\nVue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;focus&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>Vue 2 没有“app”的概念，我们定义的应用只是通过 new Vue() 创建的根 Vue 实例。从同一个 Vue 构造函数创建的每个根实例共享相同的全局配置。</p><ul><li>在测试期间，全局配置很容易意外地污染其他测试用例。</li><li>全局配置使得在同一页面上的多个“app”之间共享同一个 Vue 副本非常困难。</li></ul><div class="language-javascript"><pre><code>Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">/* ... */</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> app1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> el<span class="token operator">:</span> <span class="token string">&#39;#app-1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> app2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> el<span class="token operator">:</span> <span class="token string">&#39;#app-2&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p><strong>Vue3 的做法: createApp</strong></p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>任何全局改变 Vue 行为的 API 现在都会移动到<strong>应用实例</strong>上，现在就不会产生 vue2 的这些冲突了。</p><h2 id="spa-应用路由的基本原理"><a class="header-anchor" href="#spa-应用路由的基本原理" aria-hidden="true">#</a> SPA 应用路由的基本原理</h2><h3 id="spa-和普通网页应用的区别"><a class="header-anchor" href="#spa-和普通网页应用的区别" aria-hidden="true">#</a> SPA 和普通网页应用的区别</h3><p><strong>普通网页</strong></p><ul><li>跳转到新页面，每次重新加载所有资源</li><li>HTML 内容是后端直接渲染的</li></ul><p><strong>SPA 应用</strong></p><ul><li>不跳转，JS 拦截跳转，修改 URL</li><li>JS 动态渲染 DOM 内容</li></ul><h3 id="spa-路由的实现方式"><a class="header-anchor" href="#spa-路由的实现方式" aria-hidden="true">#</a> SPA 路由的实现方式</h3><p><strong>History API</strong></p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/History_API#%E6%B7%BB%E5%8A%A0%E5%92%8C%E4%BF%AE%E6%94%B9%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E6%9D%A1%E7%9B%AE" target="_blank" rel="noopener noreferrer">pushState 文档地址</a></p><p><a href="https://codesandbox.io/s/optimistic-cookies-wgxhc?file=/src/index.js" target="_blank" rel="noopener noreferrer">codesandbox 演示地址</a></p><p><strong>URL Hash</strong></p><h3 id="spa优点"><a class="header-anchor" href="#spa优点" aria-hidden="true">#</a> SPA优点</h3><ul><li>速度快</li><li>体验好</li><li>为前后端分离提供了实践场所</li></ul><h3 id="vue-router-4"><a class="header-anchor" href="#vue-router-4" aria-hidden="true">#</a> Vue Router 4</h3><p><a href="https://next.router.vuejs.org/" target="_blank" rel="noopener noreferrer">文档地址</a></p><h2 id="什么是状态管理工具"><a class="header-anchor" href="#什么是状态管理工具" aria-hidden="true">#</a> 什么是状态管理工具</h2><p>首先搞清楚，是否<strong>真的</strong>需要状态管理工具。</p><p>它随着 SPA 的出现，而浮出水面。客户端需要处理复杂的状态数据。</p><p>多个组件需要共享的一系列数据，称之为 <strong>全局数据</strong>。</p><h3 id="解决方案"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3><p><strong>方案一：单向数据流，从父组件传递到子组件</strong></p><p><img src="https://oss.filway.cn/filway-blog/601651e20951431e07920678.jpg" alt="图片描述"></p><h4 id="缺点"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ul><li>多层传递非常繁琐</li><li>中间传递层有可能根本不需要这个数据</li><li>根组件压力太大 逻辑代码会非常繁杂</li></ul><h3 id="方案二-使用全局对象"><a class="header-anchor" href="#方案二-使用全局对象" aria-hidden="true">#</a> 方案二 使用全局对象</h3><p><img src="https://oss.filway.cn/filway-blog/601651ed098d8b9408920602.jpg" alt="图片描述"></p><h4 id="缺点-2"><a class="header-anchor" href="#缺点-2" aria-hidden="true">#</a> 缺点</h4><ul><li>数据非响应式</li><li>修改无法追踪</li><li>直接从组件获取数据是一种反模式</li></ul><h3 id="状态管理工具三杰"><a class="header-anchor" href="#状态管理工具三杰" aria-hidden="true">#</a> 状态管理工具三杰</h3><ul><li><a href="https://next.vuex.vuejs.org/" target="_blank" rel="noopener noreferrer">Vuex</a></li><li><a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux</a></li><li><a href="https://mobx.js.org/" target="_blank" rel="noopener noreferrer">Mobx</a></li></ul><p><img src="https://oss.filway.cn/filway-blog/601651f909f543c009380580.jpg" alt="图片描述"></p><h4 id="状态管理工具的特点"><a class="header-anchor" href="#状态管理工具的特点" aria-hidden="true">#</a> 状态管理工具的特点</h4><ul><li>store，神奇的全局数据结构：single source of truth</li><li>不能随意修改，调用特殊的方法来实现数据修改</li><li>变化可追溯，可预测（predictable）。</li></ul><h2 id="vuex-安装和基础"><a class="header-anchor" href="#vuex-安装和基础" aria-hidden="true">#</a> Vuex 安装和基础</h2><h3 id="vue-的数据流"><a class="header-anchor" href="#vue-的数据流" aria-hidden="true">#</a> Vue 的数据流</h3><div class="language-javascript"><pre><code><span class="token keyword">const</span> Counter <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// state</span>\n  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      count<span class="token operator">:</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// view</span>\n  template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n    &lt;div&gt;{{ count }}&lt;/div&gt;\n  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  <span class="token comment">// actions</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><img src="https://oss.filway.cn/filway-blog/6016523f091766b206400433.jpg" alt="图片描述"></p><h3 id="出现问题：多组件共享状态"><a class="header-anchor" href="#出现问题：多组件共享状态" aria-hidden="true">#</a> 出现问题：多组件共享状态</h3><ul><li>根组件多层传递的困境</li><li>多组件同步数据的繁琐</li></ul><h3 id="vuex-的解决方案"><a class="header-anchor" href="#vuex-的解决方案" aria-hidden="true">#</a> Vuex 的解决方案</h3><p><img src="https://oss.filway.cn/filway-blog/6016524a0904d0e707010551.jpg" alt="图片描述"><strong>Vuex 的特点</strong></p><ul><li>核心就是一个 store</li><li>Vuex 的状态是响应式的</li><li>不能直接改变 store 中 state 的值，需要显式的提交 Mutation。</li></ul><p><strong>安装</strong></p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> vuex@next --save\n\n\n代码块1\n</code></pre></div><p><strong>初步使用</strong></p><div class="language-javascript"><pre><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  state<span class="token operator">:</span> <span class="token punctuation">{</span>\n    count<span class="token operator">:</span> <span class="token number">0</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  mutations<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">add</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      state<span class="token punctuation">.</span>count<span class="token operator">++</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nstore<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span>\n</code></pre></div><h2 id="本周总结"><a class="header-anchor" href="#本周总结" aria-hidden="true">#</a> 本周总结</h2><h3 id="知识点"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h3><ul><li>脚手架 <ul><li>Imooc CLI</li><li>Vue CLI</li><li>Vite</li></ul></li><li>代码规范 <ul><li>ESLint 简介，使用和配置文件</li><li>Prettier 的定位和作用以及使用</li><li>产出：代码规范文档：<a href="https://www.yuque.com/docs/share/b8d81a2b-2700-4e9c-8fcd-1d2ee52faf7c?#" target="_blank" rel="noopener noreferrer">https://www.yuque.com/docs/share/b8d81a2b-2700-4e9c-8fcd-1d2ee52faf7c?#</a></li><li>产出：文件结构和命名规范文档：<a href="https://www.yuque.com/docs/share/fb9f53ef-033a-448e-84b1-a046d8dd1794?#" target="_blank" rel="noopener noreferrer">https://www.yuque.com/docs/share/fb9f53ef-033a-448e-84b1-a046d8dd1794?#</a> 《B 端项目文件结构规范》</li></ul></li><li>Git Flow <ul><li>标准 Git Flow</li><li><strong>Github Flow</strong></li><li>产出 Git 操作规范文档：<a href="https://www.yuque.com/docs/share/a3ca5bc4-3f99-4b69-a485-dc029c8494da?#" target="_blank" rel="noopener noreferrer">https://www.yuque.com/docs/share/a3ca5bc4-3f99-4b69-a485-dc029c8494da?#</a> 《B 端 Git flow 规范》</li><li>Ant Design Vue</li><li>安装，全局导入和使用</li><li>多看文档，多用</li></ul></li><li>Vue Router <ul><li>SPA router 的简单原理</li><li>安装，全局引入</li><li>添加路由，使用内置组件 router-view 和 router-link</li><li>使用钩子函数 useRoute 和 useRouter 获取路由信息和跳转</li></ul></li><li>Vuex <ul><li>全局状态工具的定义</li><li>安装，概念：** store，state，mutations**，使用 commit 提交 mutations</li><li>使用钩子函数 useStore</li><li>使用 module 将 store 拆分成多个模块。</li></ul></li></ul><h3 id="要点"><a class="header-anchor" href="#要点" aria-hidden="true">#</a> 要点</h3><ul><li><strong>文档化</strong> 标准</li><li><strong>Typescript</strong> 深入编码理念中</li></ul><h3 id="作业"><a class="header-anchor" href="#作业" aria-hidden="true">#</a> 作业</h3><ul><li>根据我的介绍，写自己的<strong>技术规范文档</strong>，你可以根据我的简介和自己的偏好，写出适合自己项目的文档</li></ul><h2 id="b-端项目编码规范"><a class="header-anchor" href="#b-端项目编码规范" aria-hidden="true">#</a> B 端项目编码规范</h2><p>B 端项目使用 <strong>ESLint</strong> 进行编码规范的约束</p><h3 id="必须采用的规则合集"><a class="header-anchor" href="#必须采用的规则合集" aria-hidden="true">#</a> 必须采用的规则合集</h3><p>在项目中目前已经使用的规范集有：<strong>（这三个规则合集 建议必须开启）</strong></p><div class="language-typescript"><pre><code>  <span class="token string">&#39;extends&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&#39;plugin:vue/vue3-essential&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;@vue/typescript/recommended&#39;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n</code></pre></div><p>这三个规则合集正好约束了项目对应的三种语言类型：Vue 文件编码，js 通用编码规范，typescript 编码规范。</p><h3 id="规则详情"><a class="header-anchor" href="#规则详情" aria-hidden="true">#</a> 规则详情</h3><p>如果想了解规则详情：</p><p>请参看如下链接</p><p>vue3-essential 规则合集（关于 vue3 的一些规范合集）：<a href="https://eslint.vuejs.org/rules/" target="_blank" rel="noopener noreferrer">https://eslint.vuejs.org/rules/</a></p><p>eslint recommended（eslint 推荐的 js 编码规范合集）： <a href="https://eslint.org/docs/rules/" target="_blank" rel="noopener noreferrer">https://eslint.org/docs/rules/</a></p><p>vue/typescript/recommended（typescript 编码规范合集）： <a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin" target="_blank" rel="noopener noreferrer">https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin</a></p><h3 id="推荐插件"><a class="header-anchor" href="#推荐插件" aria-hidden="true">#</a> 推荐插件</h3><p>请使用 vscode 并安装 eslint， vetur 插件，在编辑器内获得显示错误的能力。</p><p><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noopener noreferrer">ESLint 插件</a></p><p><a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" rel="noopener noreferrer">Vetur 插件</a></p><h3 id="推荐其他规则"><a class="header-anchor" href="#推荐其他规则" aria-hidden="true">#</a> 推荐其他规则</h3><p>按照个人或者团队意愿，可以选择一些扩充的 js 规范作为补充。本项目并没有采用。备选方案如下：</p><p>Airbnb Javascript 编码规范（Github 103k星）</p><p>Airbnb ESLint 合集：<a href="https://www.npmjs.com/package/eslint-config-airbnb" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/eslint-config-airbnb</a></p><p>规则详情：<a href="https://github.com/airbnb/javascript#types" target="_blank" rel="noopener noreferrer">https://github.com/airbnb/javascript#types</a></p><h3 id="关于-prettier-的使用"><a class="header-anchor" href="#关于-prettier-的使用" aria-hidden="true">#</a> 关于 Prettier 的使用</h3><p>可以使用 Prettier 对代码进行优化，但是本项目并没有采用，同学们可以依据自己的爱好进行选择。创建了一个分支，可以将 Prettier 和 ESLint 在一起进行良好的工作。同学们可以参考：</p><p><a href="https://git.imooc.com/class-110/lego/src/feature/prettier" target="_blank" rel="noopener noreferrer">https://git.imooc.com/class-110/lego/src/feature/prettier</a></p><h2 id="b-端项目文件结构规范"><a class="header-anchor" href="#b-端项目文件结构规范" aria-hidden="true">#</a> B 端项目文件结构规范</h2><p><strong>首先：没有任何强制的标准！</strong></p><h3 id="参考"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h3><p>React 项目规范标准：<a href="https://reactjs.org/docs/faq-structure.html" target="_blank" rel="noopener noreferrer">React 项目文件结构</a></p><h3 id="项目文件结构和命名规范"><a class="header-anchor" href="#项目文件结构和命名规范" aria-hidden="true">#</a> 项目文件结构和命名规范</h3><div class="language-bash"><pre><code>/assets （静态文件）\n\timage.png\n  logo.png\t\n/components （所有组件）\n\tColorPicker.vue <span class="token punctuation">(</span>使用 Pascal 命名方式<span class="token punctuation">)</span>\n  Dropdown.vue\n  <span class="token punctuation">..</span>.\n/views （所有路由）\n\tHome.vue （使用 Pascal 命名方式）\n    <span class="token punctuation">..</span>.\n/router （路由配置文件）\n\tindex.ts\n\t<span class="token punctuation">..</span>.\n/store （全局 store 配置文件）\n\tindex.ts\n\teditor.ts\n\tuser.ts\n\t<span class="token punctuation">..</span>.\n/hooks （vue钩子函数）\n\tuseURLLoader.ts （ 以use开头，使用驼峰命名方式 ）\n    <span class="token punctuation">..</span>.\n/plugins （插件）\n\thotKeys.ts （使用驼峰命名方式）\n\t<span class="token punctuation">..</span>.\n/test （测试文件）\n\tColorPicker.spec.ts （使用Pascal命名方式，和组件名称相同，以 spec.ts 结尾）\nApp.vue\nmain.ts\n<span class="token punctuation">..</span>.\n</code></pre></div><h3 id="注意事项-2"><a class="header-anchor" href="#注意事项-2" aria-hidden="true">#</a> 注意事项</h3><ul><li>避免多层嵌套</li><li>不要过度思考</li></ul><h2 id="b-端-git-flow-规范"><a class="header-anchor" href="#b-端-git-flow-规范" aria-hidden="true">#</a> B 端 Git flow 规范</h2><h3 id="规范"><a class="header-anchor" href="#规范" aria-hidden="true">#</a> 规范</h3><p><strong>采用 Github Flow</strong></p><p>**Github Flow 文档地址：**<a href="https://guides.github.com/introduction/flow/index.html" target="_blank" rel="noopener noreferrer">https://guides.github.com/introduction/flow/index.html</a></p><p><strong>图片描述：</strong></p><p><img src="https://oss.filway.cn/filway-blog/1609063340633-6a4687b3-2d7b-4d47-8b9e-f43687fb7f27.png" alt="img"></p><p><strong>文字过程描述：</strong></p><ul><li>根据需求，从 master 拉出分支</li><li>激烈的开发阶段，提交 commit</li><li>开发完毕，发起 PR（pull request）</li><li>代码评审（很重要！）</li><li>部署，并且测试</li><li>没问题， merge 到 master！</li></ul><h3 id="分支命名"><a class="header-anchor" href="#分支命名" aria-hidden="true">#</a> 分支命名</h3><p>分支命名规范属于<strong>强制</strong>采用的规范</p><ul><li>feature 开头代表功能开发 如 feature/add-vuex</li><li>hotfix 开头代表代码 bug 修复 如 hotfix/fix-header</li></ul><h3 id="commit-信息"><a class="header-anchor" href="#commit-信息" aria-hidden="true">#</a> Commit 信息</h3><p>Commit 信息，杜绝 <strong>update，fix bug</strong> 这类废话，每次提交必须<strong>言之有物</strong>，至少要言简意赅的把一次 commit 完成的任务说清楚。</p>',188);t.render=function(e,s,t,l,p,o){return a(),n("div",null,[r])};export default t;export{s as __pageData};
