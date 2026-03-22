function showScreen(id) {
  document.querySelectorAll("#home-screen, .screen").forEach((el) => {
    el.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");

  if (id === "sites-screen") {
    loadSites();
  }
}

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
  .getElementById("btn-json")
  .addEventListener("click", () => showScreen("json-screen"));

document
  .getElementById("back-sites")
  .addEventListener("click", () => showScreen("home-screen"));
document
  .getElementById("back-color")
  .addEventListener("click", () => showScreen("home-screen"));
document
  .getElementById("back-pass")
  .addEventListener("click", () => showScreen("home-screen"));
document
  .getElementById("back-json")
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

    sites.forEach((site) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${site.url}" target="_blank">${site.title}</a>`;
      siteList.appendChild(li);
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
