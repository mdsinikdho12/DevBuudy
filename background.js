chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });

// Alt+D side panel open
chrome.commands.onCommand.addListener((command) => {
  if (command === "open-devbuddy") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.sidePanel.open({ tabId: tabs[0].id });
    });
  }
});
