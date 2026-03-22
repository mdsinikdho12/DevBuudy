//  linkify function
function linkify(text) {
  return text.replace(
    /(https?:\/\/[^\s"]+)/g,
    '<a href="$1" target="_blank" style="color:#89b4fa;text-decoration:none;">$1</a>',
  );
}

// ── JSON Formatter ──
const body = document.body.innerText.trim();

try {
  const json = JSON.parse(body);

  document.body.style.margin = "0";
  document.body.style.background = "#1e1e2e";

  document.body.innerHTML = `
    <div style="
      max-width: 900px;
      margin: 40px auto;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 25px 60px rgba(0,0,0,0.6);
      border: 1px solid rgba(255,255,255,0.08);
    ">
      <div style="
        background: #2a2a3e;
        padding: 12px 16px;
        display: flex;
        align-items: center;
        gap: 8px;
        border-bottom: 1px solid rgba(255,255,255,0.06);
      ">
        <span style="width:12px;height:12px;border-radius:50%;background:#ff5f57;display:inline-block"></span>
        <span style="width:12px;height:12px;border-radius:50%;background:#febc2e;display:inline-block"></span>
        <span style="width:12px;height:12px;border-radius:50%;background:#28c840;display:inline-block"></span>
        <span style="
          flex:1;
          text-align:center;
          font-family:monospace;
          font-size:12px;
          color:rgba(255,255,255,0.3);
          margin-left:-60px;
        ">JSON Response</span>
      </div>
      <pre style="
        font-family: 'JetBrains Mono', monospace;
        font-size: 13px;
        padding: 24px;
        color: #cdd6f4;
        background: #1e1e2e;
        margin: 0;
        white-space: pre-wrap;
        word-break: break-all;
        line-height: 1.7;
      ">${linkify(JSON.stringify(json, null, 2))}</pre>
    </div>
  `;
} catch {}

// ── Save Button ──
const btn = document.createElement("button");
btn.innerHTML = "Save";
btn.classList.add("save-btn");
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  const site = {
    title: document.title,
    url: window.location.href,
  };
  chrome.storage.local.get("sites", (result) => {
    const sites = result.sites || [];
    sites.push(site);
    chrome.storage.local.set({ sites });
    btn.innerText = "Saved✅";
  });
});
