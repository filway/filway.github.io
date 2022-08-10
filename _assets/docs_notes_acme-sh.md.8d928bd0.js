import{g as e,f as a,G as l}from"./common-bec3f312.js";const c='{"title":"免费泛域名证书申请","frontmatter":{"date":"2021-10-10","title":"免费泛域名证书申请","tags":["证书","域名"],"describe":"免费泛域名证书申请"},"headers":[{"level":2,"title":"安装 acme shell","slug":"安装-acme-shell"},{"level":2,"title":"生成证书","slug":"生成证书"},{"level":2,"title":"copy/安装 证书","slug":"copy-安装-证书"},{"level":3,"title":"Nginx example:","slug":"nginx-example"},{"level":2,"title":"更新证书","slug":"更新证书"},{"level":2,"title":"更新acme shell","slug":"更新acme-shell"},{"level":2,"title":"出错调试","slug":"出错调试"}],"relativePath":"docs/notes/acme-sh.md","lastUpdated":1660147426756.5005}';var s={};const i=l('<h2 id="安装-acme-shell"><a class="header-anchor" href="#安装-acme-shell" aria-hidden="true">#</a> 安装 acme shell</h2><div class="language-linux"><pre><code>curl  https://get.acme.sh | sh -s email=my@example.com\n</code></pre></div><div class="language-linux"><pre><code>alias acme.sh=~/.acme.sh/acme.sh\n</code></pre></div><h2 id="生成证书"><a class="header-anchor" href="#生成证书" aria-hidden="true">#</a> 生成证书</h2><ul><li><p>dnsapi</p><ol><li>阿里云</li></ol><div class="language-linux"><pre><code>export Ali_Key=&quot;sdfsdfsdfljlbjkljlkjsdfoiwje&quot;\nexport Ali_Secret=&quot;jlsdflanljkljlfdsaklkjflsa&quot;\n</code></pre></div><div class="language-linux"><pre><code>acme.sh --issue --dns dns_ali -d example.com -d www.example.com\n</code></pre></div><p>Ali_Key 和 Ali_Secret 将保存在 ~/.acme.sh/account.conf 中，并在需要时重复使用。</p></li></ul><h2 id="copy-安装-证书"><a class="header-anchor" href="#copy-安装-证书" aria-hidden="true">#</a> copy/安装 证书</h2><p>前面证书生成以后, 接下来需要把证书 copy 到真正需要用它的地方.</p><p>注意, 默认生成的证书都放在安装目录下: ~/.acme.sh/, 请不要直接使用此目录下的文件, 例如: 不要直接让 nginx/apache 的配置文件使用这下面的文件. 这里面的文件都是内部使用, 而且目录结构可能会变化.</p><p>正确的使用方法是使用 --install-cert 命令,并指定目标位置, 然后证书文件会被copy到相应的位置, 例如:</p><h3 id="nginx-example"><a class="header-anchor" href="#nginx-example" aria-hidden="true">#</a> Nginx example:</h3><div class="language-linux"><pre><code>acme.sh --install-cert -d example.com \\\n--key-file       /path/to/keyfile/in/nginx/key.pem  \\\n--fullchain-file /path/to/fullchain/nginx/cert.pem \\\n--reloadcmd     &quot;service nginx force-reload&quot;\n</code></pre></div><p>Nginx 的配置 ssl_certificate 使用 /etc/nginx/ssl/fullchain.cer ，而非 /etc/nginx/ssl/domain.cer ，否则 SSL Labs 的测试会报 Chain issues Incomplete 错误。</p><h2 id="更新证书"><a class="header-anchor" href="#更新证书" aria-hidden="true">#</a> 更新证书</h2><p>目前证书在 60 天以后会自动更新, 你无需任何操作. 今后有可能会缩短这个时间, 不过都是自动的, 你不用关心.</p><h2 id="更新acme-shell"><a class="header-anchor" href="#更新acme-shell" aria-hidden="true">#</a> 更新acme shell</h2><p>目前由于 acme 协议和 letsencrypt CA 都在频繁的更新, 因此 <a href="http://acme.sh" target="_blank" rel="noopener noreferrer">acme.sh</a> 也经常更新以保持同步.</p><p>升级 <a href="http://acme.sh" target="_blank" rel="noopener noreferrer">acme.sh</a> 到最新版 :</p><div class="language-linux"><pre><code>acme.sh --upgrade\n</code></pre></div><p>如果你不想手动升级, 可以开启自动升级:</p><div class="language-linux"><pre><code>acme.sh  --upgrade  --auto-upgrade\n</code></pre></div><p>关闭自动更新</p><div class="language-linux"><pre><code>acme.sh --upgrade  --auto-upgrade  0\n</code></pre></div><h2 id="出错调试"><a class="header-anchor" href="#出错调试" aria-hidden="true">#</a> 出错调试</h2><div class="language-linux"><pre><code>acme.sh --issue ....   --debug\n</code></pre></div><p>或</p><div class="language-linux"><pre><code>acme.sh  --issue  .....  --debug  2\n</code></pre></div>',26);s.render=function(l,c,s,r,n,d){return a(),e("div",null,[i])};export default s;export{c as __pageData};
