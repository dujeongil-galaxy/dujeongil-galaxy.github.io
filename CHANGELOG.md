# CHANGELOG · dujeongil-galaxy.github.io（根仓库）

本文件自 2026-11-20 起建立，逐条记录根页面的实际改动，条目附真实提交哈希与提交时间。

## 2026-11-20

### `f9d0ecc` · 2026-11-20 01:00 · feat: 导航改 repositories + 新增站长工具入口（ua-check.html）

- 卡片中部导航行：左链接文案「GitHub 全部仓库」→ `repositories`（目标不变：`https://github.com/dujeongil-galaxy?tab=repositories`）。
- 右链接新增「站长工具」→ `https://dujeongil-galaxy.github.io/shuangxiugou/ua-check.html`，用于诊断浏览器 UA/指纹。
- UA 分流脚本增加例外：`ua-check.html` 不进微信/QQ 拦截层、也不被 QQ 浏览器重定向到专题报道页——诊断当前浏览器的入口必须原样打开，否则最需要诊断的浏览器反而打不开。
- README.md 同步导航区说明与分流例外；新增 `scripts/verify.cjs`（校验文案、目标、左右顺序、UA 例外位置）+ `.github/workflows/verify.yml`（push / PR 自动运行）。
- 验证：`node scripts/verify.cjs` 通过；四项故障注入（文案回退 / 目标写错 / 顺序颠倒 / 删 UA 例外）全部判红；无头 Edge 真渲染截图确认一行两个链接无溢出。
