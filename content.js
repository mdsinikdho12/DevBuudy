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
    setTimeout(() => (btn.innerText = "Save"), 2000);
  });
});

window.onload = () => {
  const bodyText = document.body.innerText.trim();
  if (bodyText) {
    console.log("Found Body Text :", bodyText);
  } else {
    console.log("Body is empty or not loaded yet !");
  }
};
