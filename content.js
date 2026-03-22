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
    btn.innerText = "Saved ✅";
  });
});
