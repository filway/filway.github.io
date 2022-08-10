import{g as l,f as e,G as i}from"./common-bec3f312.js";const a='{"title":"云构建架构设计","frontmatter":{"date":"2022-05-25","title":"云构建架构设计","tags":["前端架构师","week30","脚手架"],"describe":null},"headers":[{"level":2,"title":"为什么需要云构建","slug":"为什么需要云构建"},{"level":2,"title":"云构建架构设计图","slug":"云构建架构设计图"}],"relativePath":"docs/Front_arch/week30/01.md","lastUpdated":1660147426756.5005}';var t={};const r=i('<h1 id="云构建架构设计"><a class="header-anchor" href="#云构建架构设计" aria-hidden="true">#</a> 云构建架构设计</h1><h2 id="为什么需要云构建"><a class="header-anchor" href="#为什么需要云构建" aria-hidden="true">#</a> 为什么需要云构建</h2><ul><li>减少发布过程中的重新劳动 <ul><li>打包构建</li><li>上传静态资源服务器</li><li>上传CDN</li></ul></li><li>避免不同环境间造成的差异，保证依赖版本的一致性</li><li>提升构建性能</li><li>对构建过程进行统一、集中管控 <ul><li>发布前代码统一规则检查，解决大量安全隐患或者性能瓶颈 <ul><li>例1：要求接口全部使用 https</li><li>例2：对于某些落后版本的依赖要求强制更新</li></ul></li><li>封网日统一发布卡口</li></ul></li></ul><h2 id="云构建架构设计图"><a class="header-anchor" href="#云构建架构设计图" aria-hidden="true">#</a> 云构建架构设计图</h2><p><img src="https://oss.filway.cn/filway-blog/60fc0ed608ee361008361600.jpg" alt="云构建架构图"></p>',5);t.render=function(i,a,t,s,d,h){return e(),l("div",null,[r])};export default t;export{a as __pageData};
