# dujeongil-galaxy.github.io（根仓库）

GitHub Pages 用户主仓库。作用：

1. **消除域名根路径 404**：此前 `https://dujeongil-galaxy.github.io/` 整个 404，AdSense 审核与爬虫对根域的印象分受损。
2. **承载 ads.txt**：Google 只认「主机根目录」的 ads.txt（`dujeongil-galaxy.github.io/ads.txt`），子路径 `/shuangxiugou/ads.txt` 无效。本仓库部署后该文件即可访问。

## 部署步骤（站长执行，或已由 AutoClaw 代办）

```powershell
cd github-root-dujeongil-galaxy
git init -b main
git add index.html ads.txt robots.txt README.md
git commit -m "init: 根页面 + ads.txt 占位 + robots.txt（AdSense 接入准备）"
git remote add origin https://github.com/dujeongil-galaxy/dujeongil-galaxy.github.io.git
git push -u origin main
```

若远端仓库不存在，先在 GitHub 创建名为 `dujeongil-galaxy.github.io` 的**公开**仓库（不要勾选任何初始化文件）。
仓库需在 GitHub → Settings → Pages 启用（Deploy from branch → main → / (root)）。通常推送后自动启用。

## 验证

- `https://dujeongil-galaxy.github.io/` 返回 200（本页）
- `https://dujeongil-galaxy.github.io/ads.txt` 返回 200（占位内容）
- `https://dujeongil-galaxy.github.io/robots.txt` 返回 200

## AdSense 开通后

2026-11-17 已填入真实发布商 ID（pub-5270311938787209），根页面亦已挂 google-adsense-account 元标记；
后续如更换发布商 ID，改 `ads.txt` 数据行并提交推送即可。

## 内置浏览器与 QQ 浏览器拦截（2026-11-18 建立，11-19 扩围）

根页面自身不拦；但 UA 命中下列浏览器时，点击指向 `/shuangxiugou` 的链接（「进入双休购」按钮与页脚各链接）一律不导航，弹全屏拦截层要求复制地址到系统浏览器打开。UA 口径与主站 `ua-guard.js` 一致：MicroMessenger/wxwork、QQ/数字、Tim，以及 2026-11-19 起加入的独立 QQ 浏览器（MQQBrowser/数字、QQBrowser/数字）。

扩围依据：主仓库 `archive/wechat-liciaotiao-2023/` 收录的两篇 2023-08-24 微信文章（腾讯方律师函与作者回应），记录了「李跳跳」屏蔽 QQ 浏览器广告服务的争议；站长据此决定把 QQ 浏览器与微信/QQ 内置浏览器同等对待。
