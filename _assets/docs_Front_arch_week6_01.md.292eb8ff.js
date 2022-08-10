import{g as n,f as s,G as a}from"./common-bec3f312.js";const t='{"title":"ejs和glob用法详解","frontmatter":{"date":"2022-04-23","title":"ejs和glob用法详解","tags":["前端架构师","week6","脚手架"],"describe":null},"headers":[{"level":2,"title":"ejs用法","slug":"ejs用法"},{"level":3,"title":"ejs模板的三种用法","slug":"ejs模板的三种用法"},{"level":3,"title":"标签含义","slug":"标签含义"},{"level":3,"title":"包含","slug":"包含"},{"level":3,"title":"自定义分隔符","slug":"自定义分隔符"},{"level":3,"title":"自定义文件加载器","slug":"自定义文件加载器"},{"level":2,"title":"glob用法","slug":"glob用法"},{"level":3,"title":"glob简介","slug":"glob简介"},{"level":3,"title":"glob用法","slug":"glob用法-2"}],"relativePath":"docs/Front_arch/week6/01.md","lastUpdated":1660147426756.5005}';var p={};const o=a('<h2 id="ejs用法"><a class="header-anchor" href="#ejs用法" aria-hidden="true">#</a> ejs用法</h2><h3 id="ejs模板的三种用法"><a class="header-anchor" href="#ejs模板的三种用法" aria-hidden="true">#</a> ejs模板的三种用法</h3><div class="language-js"><pre><code><span class="token keyword">let</span> template <span class="token operator">=</span> ejs<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">template</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 输出渲染后的 HTML 字符串</span>\n\nejs<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> data<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 输出渲染后的 HTML 字符串</span>\n\nejs<span class="token punctuation">.</span><span class="token function">renderFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> data<span class="token punctuation">,</span> options<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> str</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// str =&gt; 输出渲染后的 HTML 字符串</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre></div><h3 id="标签含义"><a class="header-anchor" href="#标签含义" aria-hidden="true">#</a> 标签含义</h3><div class="language-js"><pre><code><span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token string">&#39;脚本&#39;</span> 标签，用于流程控制，无输出。\n<span class="token operator">&lt;</span><span class="token operator">%</span>_ 删除其前面的空格符\n<span class="token operator">&lt;</span><span class="token operator">%=</span> 输出数据到模板（输出是转义 <span class="token constant">HTML</span> 标签）\n<span class="token operator">&lt;</span><span class="token operator">%</span><span class="token operator">-</span> 输出非转义的数据到模板\n<span class="token operator">&lt;</span><span class="token operator">%</span># 注释标签，不执行、不输出内容\n<span class="token operator">&lt;</span><span class="token operator">%</span><span class="token operator">%</span> 输出字符串 <span class="token string">&#39;&lt;%&#39;</span>\n<span class="token operator">%</span><span class="token operator">&gt;</span> 一般结束标签\n<span class="token operator">-</span><span class="token operator">%</span><span class="token operator">&gt;</span> 删除紧随其后的换行符\n_<span class="token operator">%</span><span class="token operator">&gt;</span> 将结束标签后面的空格符删除\n\n</code></pre></div><h3 id="包含"><a class="header-anchor" href="#包含" aria-hidden="true">#</a> 包含</h3><div class="language-js"><pre><code><span class="token operator">&lt;</span><span class="token operator">%</span><span class="token operator">-</span> <span class="token function">include</span><span class="token punctuation">(</span><span class="token string">&#39;header&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> header<span class="token operator">:</span> <span class="token string">&#39;header&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">-</span><span class="token operator">%</span><span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>\n  Title\n<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\n  My page\n<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">%</span><span class="token operator">-</span> <span class="token function">include</span><span class="token punctuation">(</span><span class="token string">&#39;footer&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> footer<span class="token operator">:</span> <span class="token string">&#39;footer&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">-</span><span class="token operator">%</span><span class="token operator">&gt;</span>\n\n</code></pre></div><h3 id="自定义分隔符"><a class="header-anchor" href="#自定义分隔符" aria-hidden="true">#</a> 自定义分隔符</h3><div class="language-js"><pre><code><span class="token keyword">let</span> ejs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;ejs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    users <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;geddy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;neil&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;alex&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 单个模板文件</span>\nejs<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;?= users.join(&quot; | &quot;); ?&gt;&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>users<span class="token operator">:</span> users<span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>delimiter<span class="token operator">:</span> <span class="token string">&#39;?&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; &#39;geddy | neil | alex&#39;</span>\n\n<span class="token comment">// 全局</span>\nejs<span class="token punctuation">.</span>delimiter <span class="token operator">=</span> <span class="token string">&#39;$&#39;</span><span class="token punctuation">;</span>\nejs<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;$= users.join(&quot; | &quot;); $&gt;&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>users<span class="token operator">:</span> users<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; &#39;geddy | neil | alex&#39;</span>\n\n</code></pre></div><h3 id="自定义文件加载器"><a class="header-anchor" href="#自定义文件加载器" aria-hidden="true">#</a> 自定义文件加载器</h3><div class="language-js"><pre><code><span class="token keyword">let</span> ejs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;ejs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> <span class="token function-variable function">myFileLoader</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">filePath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&#39;myFileLoader: &#39;</span> <span class="token operator">+</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nejs<span class="token punctuation">.</span>fileLoader <span class="token operator">=</span> myFileLoad<span class="token punctuation">;</span>\n</code></pre></div><h2 id="glob用法"><a class="header-anchor" href="#glob用法" aria-hidden="true">#</a> glob用法</h2><h3 id="glob简介"><a class="header-anchor" href="#glob简介" aria-hidden="true">#</a> glob简介</h3><p>参考慕课手记：<a href="https://www.imooc.com/article/4053" target="_blank" rel="noopener noreferrer">https://www.imooc.com/article/4053</a></p><h3 id="glob用法-2"><a class="header-anchor" href="#glob用法-2" aria-hidden="true">#</a> glob用法</h3><p>参考npm仓库：<a href="https://www.npmjs.com/package/glob" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/glob</a></p>',16);p.render=function(a,t,p,e,c,l){return s(),n("div",null,[o])};export default p;export{t as __pageData};