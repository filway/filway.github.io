import{g as e,f as t,j as s,l as a}from"./common-bec3f312.js";const l='{"title":"解决Github Pages自定义域名失效的问题","frontmatter":{"date":"2022-04-30","title":"解决Github Pages自定义域名失效的问题","tags":["github page","vitepress","vuepress"],"describe":"vitepress或者vuepress搭建博客自动部署github pages, 配置自定义域名经常失效出现404的原因"},"headers":[{"level":2,"title":"原因","slug":"原因"},{"level":2,"title":"解决方法","slug":"解决方法"}],"relativePath":"docs/notes/github-page.md","lastUpdated":1660147426760.5005}';var i={};const r=s("h2",{id:"原因"},[s("a",{class:"header-anchor",href:"#原因","aria-hidden":"true"},"#"),a(" 原因")],-1),u=s("ol",null,[s("li",null,[s("p",null,"在github page仓库的settings当中配置自定义域名的时候，会在对应分支的根目录下面自动生成CNAME文件, 内容为配置的自定义域名")]),s("li",null,[s("p",null,"自动部署的时候，会将build好的dist目录下的文件全部提交到gh-pages(或者master)分支上面去作为pages的展示内容, 如果CNAME文件没有一起提交的话，就会将之前生成好的CNAME文件覆盖掉，从而导致自定义域名解析生效, 访问就会出现404")])],-1),n=s("h2",{id:"解决方法"},[s("a",{class:"header-anchor",href:"#解决方法","aria-hidden":"true"},"#"),a(" 解决方法")],-1),d=s("p",null,"在public目录下面手动新增CNAME文件, 内容为你的自定义域名。然后在推送部署即可",-1);i.render=function(s,a,l,i,h,g){return t(),e("div",null,[r,u,n,d])};export default i;export{l as __pageData};