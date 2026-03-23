// ── Tool Icons ──
const toolIcons = {
  "btn-sites": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(99,102,241,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  "btn-color": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(236,72,153,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  "btn-pass": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(16,185,129,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  "btn-timestamp": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(34,197,94,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  "btn-css": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(14,165,233,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  "btn-settings": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(156,163,175,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
  "btn-api": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(245,158,11,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>`,
  "btn-json": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(59,130,246,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  "btn-base64": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(168,85,247,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
  "btn-regex": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(239,68,68,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  "btn-jwt": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(20,184,166,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
  "btn-storage": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(251,146,60,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
};

Object.entries(toolIcons).forEach(([id, svg]) => {
  const iconDiv = document.querySelector(`#${id} .icon`);
  if (iconDiv) iconDiv.innerHTML = svg;
});

// ── Screen Navigation ──
function showScreen(id) {
  document.querySelectorAll("#home-screen, .screen").forEach((el) => {
    el.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
  if (id === "sites-screen") loadSites();
  if (id === "timestamp-screen") startTimestamp();
}

// ── Navigation Events ──
const navMap = {
  "btn-sites": "sites-screen",
  "btn-color": "color-screen",
  "btn-pass": "pass-screen",
  "btn-api": "api-screen",
  "btn-json": "json-screen",
  "btn-base64": "base64-screen",
  "btn-regex": "regex-screen",
  "btn-jwt": "jwt-screen",
  "btn-storage": "storage-screen",
  "btn-timestamp": "timestamp-screen",
  "btn-css": "css-screen",
  "btn-settings": "settings-screen",
  "back-sites": "home-screen",
  "back-color": "home-screen",
  "back-pass": "home-screen",
  "back-api": "home-screen",
  "back-json": "home-screen",
  "back-base64": "home-screen",
  "back-regex": "home-screen",
  "back-jwt": "home-screen",
  "back-storage": "home-screen",
  "back-timestamp": "home-screen",
  "back-css": "home-screen",
  "back-settings": "home-screen",
};

Object.entries(navMap).forEach(([btnId, screenId]) => {
  const el = document.getElementById(btnId);
  if (el) el.addEventListener("click", () => showScreen(screenId));
});

// ── Save Sites ──
function loadSites() {
  const siteList = document.getElementById("site-list");
  chrome.storage.local.get("sites", (result) => {
    const sites = result.sites || [];
    if (sites.length === 0) {
      siteList.innerHTML = '<p class="empty">কোনো সাইট সেভ হয়নি</p>';
      return;
    }
    siteList.innerHTML = "";
    sites.forEach((site, index) => {
      const domain = new URL(site.url).hostname;
      const favicon = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${favicon}" width="16" height="16" style="border-radius:4px;flex-shrink:0;" onerror="this.style.display='none'"/>
        <a href="${site.url}" target="_blank">${site.title}</a>
        <button class="delete-btn" data-index="${index}">✕</button>
      `;
      siteList.appendChild(li);
    });
    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        chrome.storage.local.get("sites", (result) => {
          const sites = result.sites || [];
          sites.splice(index, 1);
          chrome.storage.local.set({ sites }, () => loadSites());
        });
      });
    });
  });
}

// ── Password Generator ──
document.getElementById("btn-generate").addEventListener("click", () => {
  let chars = "";
  if (document.getElementById("opt-upper").checked)
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (document.getElementById("opt-lower").checked)
    chars += "abcdefghijklmnopqrstuvwxyz";
  if (document.getElementById("opt-number").checked) chars += "0123456789";
  if (document.getElementById("opt-symbol").checked) chars += "!@#$%^&*";
  if (!chars) {
    document.getElementById("pass-output").textContent =
      "কমপক্ষে একটা option বাছাই করুন";
    return;
  }
  const length = parseInt(document.getElementById("pass-length").value);
  let password = "";
  for (let i = 0; i < length; i++)
    password += chars[Math.floor(Math.random() * chars.length)];
  document.getElementById("pass-output").textContent = password;
});

document.getElementById("btn-copy").addEventListener("click", () => {
  const password = document.getElementById("pass-output").textContent;
  navigator.clipboard.writeText(password).then(() => {
    const btn = document.getElementById("btn-copy");
    btn.textContent = "Copied!";
    setTimeout(() => (btn.textContent = "Copy"), 2000);
  });
});

// ── Color Picker ──
document
  .getElementById("btn-eyedropper")
  .addEventListener("click", async () => {
    const eyedropper = new EyeDropper();
    try {
      const result = await eyedropper.open();
      const hex = result.sRGBHex;
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      document.getElementById("color-preview").style.background = hex;
      document.getElementById("hex-value").textContent = hex;
      document.getElementById("rgb-value").textContent = `rgb(${r},${g},${b})`;
    } catch (e) {}
  });

document.getElementById("btn-copy-color").addEventListener("click", () => {
  const hex = document.getElementById("hex-value").textContent;
  navigator.clipboard.writeText(hex).then(() => {
    const btn = document.getElementById("btn-copy-color");
    btn.textContent = "Copied!";
    setTimeout(() => (btn.textContent = "Copy HEX"), 2000);
  });
});

// ── API Tester ──
document.getElementById("btn-send").addEventListener("click", async () => {
  const method = document.getElementById("api-method").value;
  const url = document.getElementById("api-url").value.trim();
  const body = document.getElementById("api-body").value.trim();
  const statusEl = document.getElementById("api-status");
  const responseEl = document.getElementById("api-response");
  if (!url) {
    responseEl.textContent = "URL দিন!";
    return;
  }
  responseEl.textContent = "Loading...";
  statusEl.textContent = "";
  statusEl.className = "api-status";
  try {
    const options = { method };
    if ((method === "POST" || method === "PUT") && body) {
      options.headers = { "Content-Type": "application/json" };
      options.body = body;
    }
    const res = await fetch(url, options);
    const text = await res.text();
    statusEl.textContent = `${res.status} ${res.statusText}`;
    statusEl.classList.add(res.ok ? "ok" : "error");
    try {
      responseEl.textContent = JSON.stringify(JSON.parse(text), null, 2);
    } catch {
      responseEl.textContent = text;
    }
  } catch (error) {
    statusEl.textContent = "Error";
    statusEl.classList.add("error");
    responseEl.textContent = error.message;
  }
});

// ── JSON Formatter ──
document.getElementById("btn-format-json").addEventListener("click", () => {
  const raw = document.getElementById("json-input").value.trim();
  const output = document.getElementById("json-output");
  try {
    output.textContent = JSON.stringify(JSON.parse(raw), null, 2);
  } catch {
    output.textContent = "Invalid JSON!";
  }
});

document.getElementById("btn-copy-json").addEventListener("click", () => {
  navigator.clipboard
    .writeText(document.getElementById("json-output").textContent)
    .then(() => {
      const btn = document.getElementById("btn-copy-json");
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = "Copy"), 2000);
    });
});

// ── Base64 ──
document.getElementById("btn-encode").addEventListener("click", () => {
  const input = document.getElementById("base64-input").value;
  try {
    document.getElementById("base64-output").textContent = btoa(
      unescape(encodeURIComponent(input)),
    );
  } catch {
    document.getElementById("base64-output").textContent = "Error!";
  }
});

document.getElementById("btn-decode").addEventListener("click", () => {
  const input = document.getElementById("base64-input").value;
  try {
    document.getElementById("base64-output").textContent = decodeURIComponent(
      escape(atob(input)),
    );
  } catch {
    document.getElementById("base64-output").textContent = "Invalid Base64!";
  }
});

// ── Regex Tester ──
document.getElementById("btn-test-regex").addEventListener("click", () => {
  const pattern = document.getElementById("regex-pattern").value;
  const text = document.getElementById("regex-text").value;
  const output = document.getElementById("regex-output");
  try {
    const regex = new RegExp(pattern, "g");
    const matches = text.match(regex);
    if (matches) {
      output.textContent = `✅ ${matches.length} টা match পাওয়া গেছে:\n${matches.join("\n")}`;
    } else {
      output.textContent = "❌ কোনো match নেই";
    }
  } catch {
    output.textContent = "Invalid Regex Pattern!";
  }
});

// ── JWT Decoder ──
document.getElementById("btn-decode-jwt").addEventListener("click", () => {
  const token = document.getElementById("jwt-input").value.trim();
  const output = document.getElementById("jwt-output");
  try {
    const parts = token.split(".");
    if (parts.length !== 3) {
      output.textContent = "Invalid JWT!";
      return;
    }
    const header = JSON.parse(atob(parts[0]));
    const payload = JSON.parse(
      atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")),
    );
    output.textContent = `HEADER:\n${JSON.stringify(header, null, 2)}\n\nPAYLOAD:\n${JSON.stringify(payload, null, 2)}`;
  } catch {
    output.textContent = "Invalid JWT Token!";
  }
});

// ── Local Storage ──
document.getElementById("btn-load-storage").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: () => {
          const data = {};
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            data[key] = localStorage.getItem(key);
          }
          return data;
        },
      },
      (results) => {
        const storageList = document.getElementById("storage-list");
        const data = results?.[0]?.result || {};
        const keys = Object.keys(data);
        if (keys.length === 0) {
          storageList.innerHTML = '<p class="empty">কোনো data নেই</p>';
          return;
        }
        storageList.innerHTML = keys
          .map(
            (key) => `
        <div class="storage-item">
          <div class="storage-key">${key}</div>
          <div class="storage-value">${data[key]}</div>
        </div>
      `,
          )
          .join("");
      },
    );
  });
});

// ── Timestamp ──
let tsInterval;
function startTimestamp() {
  clearInterval(tsInterval);
  const el = document.getElementById("current-ts");
  const update = () => {
    el.textContent = Math.floor(Date.now() / 1000);
  };
  update();
  tsInterval = setInterval(update, 1000);
}

document.getElementById("btn-convert-ts").addEventListener("click", () => {
  const ts = parseInt(document.getElementById("ts-input").value);
  const output = document.getElementById("ts-output");
  if (!ts) {
    output.textContent = "Timestamp দিন!";
    return;
  }
  const date = new Date(ts * 1000);
  output.textContent = `Local: ${date.toLocaleString()}\nUTC: ${date.toUTCString()}\nISO: ${date.toISOString()}`;
});

// ── CSS Unit Converter ──
document.getElementById("btn-convert-css").addEventListener("click", () => {
  const value = parseFloat(document.getElementById("css-value").value);
  const from = document.getElementById("css-from").value;
  const to = document.getElementById("css-to").value;
  const base = parseFloat(document.getElementById("base-font").value) || 16;
  const output = document.getElementById("css-output");
  if (!value) {
    output.textContent = "Value দিন!";
    return;
  }
  let px;
  if (from === "px") px = value;
  else if (from === "rem") px = value * base;
  else if (from === "em") px = value * base;
  let result;
  if (to === "px") result = px;
  else if (to === "rem") result = px / base;
  else if (to === "em") result = px / base;
  output.textContent = `${value}${from} = ${result.toFixed(4)}${to}`;
});

// ── Settings ──
document.getElementById("btn-change-shortcut").addEventListener("click", () => {
  chrome.tabs.create({ url: "chrome://extensions/shortcuts" });
});

chrome.storage.local.get("showSaveBtn", (result) => {
  document.getElementById("toggle-save-btn").checked =
    result.showSaveBtn !== false;
});

document.getElementById("toggle-save-btn").addEventListener("change", (e) => {
  chrome.storage.local.set({ showSaveBtn: e.target.checked });
});
