import{g as l,f as i,G as e}from"./common-bec3f312.js";const a='{"title":"脚手架需求分析","frontmatter":{"date":"2022-04-05","title":"脚手架需求分析","tags":["前端架构师","week3","脚手架"],"describe":null},"headers":[{"level":2,"title":"先谈谈大厂做项目的流程","slug":"先谈谈大厂做项目的流程"},{"level":2,"title":"脚手架需求分析","slug":"脚手架需求分析"},{"level":3,"title":"痛点分析","slug":"痛点分析"},{"level":3,"title":"需求分析","slug":"需求分析"},{"level":2,"title":"加餐：大厂是如何做 git 操作的？","slug":"加餐：大厂是如何做-git-操作的？"}],"relativePath":"docs/Front_arch/week3/01.md","lastUpdated":1660147426756.5005}';var t={};const r=e('<h2 id="先谈谈大厂做项目的流程"><a class="header-anchor" href="#先谈谈大厂做项目的流程" aria-hidden="true">#</a> 先谈谈大厂做项目的流程</h2><ul><li>了解大厂的标准项目流程</li><li>了解架构设计在项目过程中的定位</li><li>按照大厂流程开发imooc-cli项目</li></ul><p><img src="https://oss.filway.cn/filway-blog/5fda230908f9137d15401600.jpg" alt="图片描述"></p><h2 id="脚手架需求分析"><a class="header-anchor" href="#脚手架需求分析" aria-hidden="true">#</a> 脚手架需求分析</h2><h3 id="痛点分析"><a class="header-anchor" href="#痛点分析" aria-hidden="true">#</a> 痛点分析</h3><p>从这张图看起，分析研发过程的痛点：</p><p><img src="https://oss.filway.cn/filway-blog/5fda1fbd09fbbbe309760634.jpg" alt="图片描述"> 痛点分析：</p><ul><li>创建项目/组件时，存在大量重复代码拷贝：快速复用已有沉淀</li><li>协同开发时，由于git操作不规范，导致分支混乱，操作耗时：制定标准的git操作规范并集成到脚手架</li><li>发布上线耗时，而且容易出现各种错误：制定标准的上线流程和规范并集成到脚手架</li></ul><h3 id="需求分析"><a class="header-anchor" href="#需求分析" aria-hidden="true">#</a> 需求分析</h3><ul><li>通用的研发脚手架</li><li>通用的项目/组件创建能力 <ul><li>模板支持定制，定制后能够快速生效</li><li>模板支持快速接入，极低的接入成本</li></ul></li><li>通用的项目/组件发布能力 <ul><li>发布过程自动完成标准的git操作</li><li>发布成功后自动删除开发分支并创建tag</li><li>发布后自动完成云构建、OSS上传、CDN上传、域名绑定</li><li>发布过程支持测试/正式两种模式</li></ul></li></ul><h2 id="加餐：大厂是如何做-git-操作的？"><a class="header-anchor" href="#加餐：大厂是如何做-git-操作的？" aria-hidden="true">#</a> 加餐：大厂是如何做 git 操作的？</h2><p><img src="https://oss.filway.cn/filway-blog/5fda22cd0839ed7113081261.jpg" alt="图片描述"></p>',12);t.render=function(e,a,t,s,d,h){return i(),l("div",null,[r])};export default t;export{a as __pageData};
