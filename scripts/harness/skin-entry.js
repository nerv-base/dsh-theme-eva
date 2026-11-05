// Builds a static mock of the DSH chrome with the everyday skin applied, for
// screenshot review outside the authenticated app. Run via scripts/harness/skin.mjs.
import { themeTokens, skinCss } from "../../src/client/theme.js";
import uiCss from "../../src/client/ui.css";
import { DEFAULT_UNIT } from "../../src/shared/units.js";

const tokens = themeTokens(DEFAULT_UNIT);
const style = Object.entries(tokens).map(([k, v]) => `${k}:${v}`).join(";");

const fonts = `
@font-face{font-family:"EVA Mincho";src:url("/assets/fonts/eva-mincho.woff2") format("woff2");font-weight:900}
@font-face{font-family:"EVA Condensed";src:url("/assets/fonts/eva-condensed-medium.woff2") format("woff2");font-weight:500}
@font-face{font-family:"EVA Condensed";src:url("/assets/fonts/eva-condensed-semibold.woff2") format("woff2");font-weight:600 800}`;

const base = `
*{box-sizing:border-box}html,body{margin:0;height:100%}
body{font:14px/1.6 -apple-system,"PingFang SC",sans-serif;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-base);display:flex}
.x_sidebarCol{width:280px;flex:none;display:flex;flex-direction:column;padding:12px;gap:4px;color:var(--dsw-alias-label-primary)}
.x_logoRow{display:flex;align-items:center;gap:8px;height:40px;padding:0 6px;margin-bottom:8px}
.x_brandMark,.x_brandName{display:inline-flex;align-items:center;gap:8px}
.x_newSession{height:40px;display:flex;align-items:center;justify-content:center;color:var(--dsw-alias-label-primary);margin-bottom:12px}
.x_nav{height:36px;display:flex;align-items:center;padding:0 10px;border-radius:var(--dsw-radius-sm)}
.x_sec{margin:16px 6px 6px;color:var(--dsw-alias-label-tertiary);font-size:13px}
.x_sessionRow{height:32px;display:flex;align-items:center;padding:0 10px;font-size:13.5px;color:var(--dsw-alias-label-secondary)}
.x_root{flex:1;position:relative;display:flex;flex-direction:column;background:var(--dsw-alias-bg-base);min-width:0}
.x_header{display:flex;flex-direction:column;gap:8px;padding:14px 24px 0}
.x_titleRow{display:flex;align-items:center;gap:12px}
.x_crumbCurrent{font-weight:500}
.x_util{margin-left:auto}
.x_tabs{display:flex;gap:32px;padding-bottom:8px;font-size:14px;color:var(--dsw-alias-label-secondary)}
.x_tabActive{color:var(--dsw-alias-state-business-primary);border-bottom:2px solid currentColor}
.x_scroll{flex:1;overflow:auto;padding:24px 0 220px;position:relative;z-index:1}
.x_column{max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:20px}
.x_userRow{display:flex;flex-direction:column;align-items:flex-end}
.x_bubble{background:var(--dsw-specific-bubble);padding:10px 16px;border-radius:var(--dsw-radius-xl);max-width:70%}
.x_markdown_ h2{font-size:20px;margin:24px 0 12px}.x_markdown_ h3{font-size:16px;margin:18px 0 8px}
.x_markdown_ a{color:var(--dsw-alias-link)}
.x_markdown_ :not(pre)>code{background:var(--dsw-alias-markdown-inline-code);padding:1px 5px;font-family:Menlo,monospace;font-size:.875em;border-radius:4px}
.x_markdown_ blockquote{margin:16px 0;border-left:2px solid var(--dsw-alias-label-caption);padding-left:14px;color:var(--dsw-alias-label-secondary)}
.x_markdown_ hr{border:none;height:.5px;background:var(--dsw-alias-border-l2);margin:24px 0}
.md-code-block{background:var(--dsw-alias-markdown-code-block);border-radius:var(--dsw-radius-lg);margin:16px 0;font:13px/1.6 Menlo,monospace}
.md-code-block [data-code-block-banner]{padding:8px 16px;background:var(--dsw-alias-markdown-code-block-banner);font-size:12px;color:var(--dsw-alias-label-tertiary)}
.md-code-block pre{margin:0;padding:12px 16px}
.x_tableScroll_ table{border-collapse:collapse;width:100%}.x_tableScroll_ th,.x_tableScroll_ td{text-align:left;padding:8px 12px;border-bottom:.5px solid var(--dsw-alias-border-l2)}
.x_seat{position:absolute;left:0;right:0;bottom:0;padding:0 24px 16px;z-index:2;display:flex;flex-direction:column;align-items:center}
.x_card{width:100%;max-width:800px;min-height:110px;background:var(--dsw-specific-input-major);border-radius:var(--dsw-radius-xl);padding:14px 16px;display:flex;flex-direction:column;justify-content:space-between;color:var(--dsw-alias-label-caption)}
.x_send{width:34px;height:34px;border-radius:50%;background:var(--dsw-alias-brand-primary);align-self:flex-end}
`;

const sessions = ["为 dsh 打造 EVA 二号机主题", "在 nerv-base 组织建仓库", "查看现有 PR", "Word 与 PDF 排版不一致", "完成 ML 实验六"];
const html = `<!doctype html><html><head><meta charset="utf-8"><style>${fonts}${base}${uiCss}${skinCss(DEFAULT_UNIT)}</style></head>
<body data-eva-theme="02" style='${style}'>
<aside class="x_sidebarCol">
  <div class="x_logoRow"><span class="x_brandMark"><span data-slot="sidebar.brand.mark" style="display:contents"><i>logo</i></span></span><span class="x_brandName"><span data-slot="sidebar.brand.name" style="display:contents"><i>deepseek</i></span></span></div>
  <button class="x_newSession">⊕ 新会话</button>
  <div class="x_nav">插件</div><div class="x_nav x_panelRow x_panelActive">插件市场</div><div class="x_nav">任务看板</div><div class="x_nav">技能中心</div>
  <div class="x_sec">会话</div>
  ${sessions.map((s, i) => `<div class="x_sessionRow${i === 0 ? " x_selected" : ""}">${s}</div>`).join("")}
</aside>
<main class="x_root" data-phase="active">
  <div data-slot="conversation.header" style="display:contents"><header class="x_header">
    <div class="x_titleRow"><span class="x_crumbCurrent">参考项目为 dsh 设计主题</span><span class="x_util">
      <span class="eva-sync is-ok"><span class="eva-sync-tag">SYNC</span><span class="eva-sync-bar">${"<i class=on></i>".repeat(9)}<i></i></span><span class="eva-sync-value">87.4<small>%</small></span></span></span></div>
    <div class="x_tabs"><span class="x_tabActive">对话</span><span>轨迹</span><span>上下文</span></div>
  </header></div>
  <div class="x_scroll"><div class="x_column">
    <div class="x_userRow"><div class="x_bubble">能不能继续深入定制主题，整体主题色是红绿，符合二号机风格</div></div>
    <div class="x_markdown_">
      <h2>弐号機 配色方案</h2>
      <p>红色承担身份与操作：品牌、主按钮、选中态；绿色承担「系统存活」信号：链接、焦点、成功、同步率。参见 <a href="#">NERV 端末规范</a>，配置项在 <code>theme.js</code> 中。</p>
      <h3>改动范围</h3>
      <ul><li>侧边栏深红装甲板渐变</li><li>用户气泡改为插入栓铭牌</li><li>代码块与输入框加入终端框线</li></ul>
      <blockquote>シンクロ率 87.4%、ハーモニクス正常。</blockquote>
      <div class="md-code-block"><div data-code-block-banner>javascript</div><pre>const sync = 100 - used / window * 100;
if (sync &lt; 30) alert("精神汚染");</pre></div>
      <div class="x_tableScroll_"><table><thead><tr><th>区域</th><th>颜色</th><th>说明</th></tr></thead><tbody>
        <tr><td>品牌 / 主按钮</td><td>#d8262e</td><td>装甲红</td></tr><tr><td>链接 / 焦点</td><td>#3fe08a</td><td>眼部绿</td></tr></tbody></table></div>
      <hr><p>状态：<span class="eva-running-power" style="display:inline-flex;width:auto"><b>内部電源</b><span class="eva-power-clock">00:12<small>:48</small></span><i class="eva-power-line" style="width:120px"></i></span></p>
    </div>
  </div></div>
  <div class="x_seat"><div class="x_card" data-composer-card tabindex="0"><span>发消息或创建任务，/ 调用指令，@ 文件或对话</span><span class="x_send"></span></div></div>
</main></body></html>`;

export default html;
