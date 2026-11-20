'use strict';
// 根页面导航校验：repositories + 站长工具（ua-check.html）
// 用法：node scripts/verify.cjs

var fs = require('fs');
var path = require('path');
var html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
var fails = [];

function ok(cond, msg) {
  if (!cond) fails.push(msg);
}

var links = /<p class="links">([\s\S]*?)<\/p>/.exec(html);
ok(!!links, '缺少 <p class="links"> 导航区');

if (links) {
  var row = links[1];
  var re = /<a\s+[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
  var items = [];
  var m;
  while ((m = re.exec(row)) !== null) {
    items.push({ href: m[1], text: m[2].replace(/<[^>]+>/g, '').trim() });
  }
  ok(items.length === 2, '导航区应恰好 2 个链接，实际 ' + items.length);
  if (items.length >= 1) {
    ok(items[0].text === 'Repositories', '左链接文案应为 Repositories（R 大写），实际「' + items[0].text + '」');
    ok(items[0].href === 'https://github.com/dujeongil-galaxy?tab=repositories', 'repositories 链接目标错误');
  }
  if (items.length >= 2) {
    ok(items[1].text === '站长工具', '右链接文案应为「站长工具」，实际「' + items[1].text + '」');
    ok(items[1].href === 'https://dujeongil-galaxy.github.io/shuangxiugou/ua-check.html', '站长工具链接目标错误');
    ok(row.indexOf('repositories') < row.indexOf('站长工具'), '站长工具应在 repositories 右侧');
  }
  ok(html.indexOf('GitHub 全部仓库') === -1, '旧文案「GitHub 全部仓库」仍残留');
}

// 站长工具必须绕过 UA 分流：排除判断要出现在 preventDefault 之前
var skip = html.indexOf("if (href.indexOf('ua-check.html') !== -1) return;");
var stop = html.indexOf('ev.preventDefault();', skip < 0 ? 0 : skip);
ok(skip >= 0, '缺少 ua-check.html 分流例外');
ok(skip >= 0 && stop > skip, 'ua-check.html 例外必须放在 preventDefault 之前');

if (fails.length) {
  console.error('错误 ' + fails.length + ' 项：\n' + fails.map(function (f) { return ' - ' + f; }).join('\n'));
  process.exitCode = 1;
} else {
  console.log('根页面导航校验通过：Repositories + 站长工具（ua-check.html），UA 分流例外有效');
}
