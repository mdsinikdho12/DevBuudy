// show Screen icon
function showScreen(id) {
  document.querySelectorAll("#home-screen, .screen").forEach((el) => {
    el.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");

  if (id === "sites-screen") {
    loadSites();
  }
}
// add evenListerner for hide or show
document
  .getElementById("btn-sites")
  .addEventListener("click", () => showScreen("sites-screen"));
document
  .getElementById("btn-color")
  .addEventListener("click", () => showScreen("color-screen"));
document
  .getElementById("btn-pass")
  .addEventListener("click", () => showScreen("pass-screen"));

document
  .getElementById("back-sites")
  .addEventListener("click", () => showScreen("home-screen"));
document
  .getElementById("back-color")
  .addEventListener("click", () => showScreen("home-screen"));
document
  .getElementById("back-pass")
  .addEventListener("click", () => showScreen("home-screen"));

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

      // Google favicon API
      const favicon = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;

      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${favicon}" width="16" height="16"
          style="border-radius:4px;flex-shrink:0;"
          onerror="this.style.display='none'"
        />
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
          chrome.storage.local.set({ sites }, () => {
            loadSites();
          });
        });
      });
    });
  });
}
// generate btn

document.getElementById("btn-generate").addEventListener("click", () => {
  let chars = "";

  if (document.getElementById("opt-upper").checked)
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (document.getElementById("opt-lower").checked)
    chars += "abcdefghijklmnopqrstuvwxyz";
  if (document.getElementById("opt-number").checked) chars += "0123456789";
  if (document.getElementById("opt-symbol").checked) chars += "!@#$%^&*";

  // when user not  select any options
  if (chars === "") {
    document.getElementById("pass-output").textContent =
      "কমপক্ষে একটা option বাছাই করুন";
    return;
  }

  const length = parseInt(document.getElementById("pass-length").value);
  let password = "";

  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  document.getElementById("pass-output").textContent = password;
});

// copy
document.getElementById("btn-copy").addEventListener("click", () => {
  const password = document.getElementById("pass-output").textContent;
  navigator.clipboard.writeText(password).then(() => {
    const btn = document.getElementById("btn-copy");
    btn.textContent = "Copied!";
    setTimeout(() => (btn.textContent = "Copy"), 2000);
  });
});

// color picker

document
  .getElementById("btn-eyedropper")
  .addEventListener("click", async () => {
    const eyedropper = new EyeDropper();

    try {
      const result = await eyedropper.open();
      const hex = result.sRGBHex;

      //   convert hex to rgb
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);

      // update ui
      document.getElementById("color-preview").style.background = hex;
      document.getElementById("hex-value").textContent = hex;
      document.getElementById("rgb-value").textContent = `rgb(${r},${g},${b})`;
    } catch (error) {}
  });

// copy hex

document.getElementById("btn-copy-color").addEventListener("click", () => {
  const Hex = document.getElementById("hex-value").textContent;

  navigator.clipboard.writeText(Hex).then(() => {
    const btn = document.getElementById("btn-copy-color");
    btn.textContent = "Copied!";
    setTimeout(() => (btn.textContent = "Copy HEX"), 2000);
  });
});

// Settings screen
document
  .getElementById("btn-settings")
  .addEventListener("click", () => showScreen("settings-screen"));
document
  .getElementById("back-settings")
  .addEventListener("click", () => showScreen("home-screen"));

document.getElementById("btn-change-shortcut").addEventListener("click", () => {
  chrome.tabs.create({ url: "chrome://extensions/shortcuts" });
});

// Save button toggle
chrome.storage.local.get("showSaveBtn", (result) => {
  const show = result.showSaveBtn !== false;
  document.getElementById("toggle-save-btn").checked = show;
});

document.getElementById("toggle-save-btn").addEventListener("change", (e) => {
  chrome.storage.local.set({ showSaveBtn: e.target.checked });
});

// API TESTER

document
  .getElementById("btn-api")
  .addEventListener("click", () => showScreen("api-screen"));
document
  .getElementById("back-api")
  .addEventListener("click", () => showScreen("home-screen"));

document.getElementById("btn-send").addEventListener("click", async () => {
  const method = document.getElementById("api-method").value;
  const url = document.getElementById("api-url").value.trim();
  const body = document.getElementById("api-body").value.trim();
  const statusEl = document.getElementById("api-status");
  const responseEl = document.getElementById("api-response");
  if (!url) {
    responseEl.textContent = "URL দিন!🙄";
    return;
  }
  responseEl.textContent = "Loading.....";
  statusEl.textContent = "";
  statusEl.className = "api-status";

  try {
    const options = { method };

    if ((method === "POST" || method === "PUT") && body) {
      options.headers = { "content-Type": "application/json" };
      options.body = body;
    }

    const res = await fetch(url, options);
    const text = await res.text();

    statusEl.textContent = `${res.status} ${res.statusText}`;
    statusEl.classList.add(res.ok ? "ok" : "error");

    try {
      const json = JSON.parse(text);
      responseEl.textContent = JSON.stringify(json, null, 2);
    } catch {
      responseEl.textContent = text;
    }
  } catch (error) {
    statusEl.textContent = "Error";
    statusEl.classList.add("error");
    responseEl.textContent = error.message;
  }
});

// json

document
  .getElementById("btn-json")
  .addEventListener("click", () => showScreen("json-screen"));

document
  .getElementById("back-json")
  .addEventListener("click", () => showScreen("home-screen"));

const JsonBtn = document.getElementById("btn-format-json");

JsonBtn.addEventListener("click", () => {
  const RowJson = document.getElementById("json-input").value.trim();
  const ParsedJson = JSON.parse(RowJson);
  const output = document.getElementById("json-output");
  output.textContent = JSON.stringify(ParsedJson, null, 2);
});
