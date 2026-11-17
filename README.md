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

AdSense 后台「网站 → ads.txt 状态」出现提醒时，复制后台给出的 `google.com, pub-XXXX…, DIRECT, f08c47fec0942fa0` 行，
替换本仓库 `ads.txt` 中的占位行，提交推送即可。GitHub Pages 部署需几分钟，AdSense 侧刷新最多可能要一个月（低流量站点）。
