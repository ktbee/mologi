browser.contextMenus.create({
  id: "Mologi",
  title: "Search with Mologi",
  contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  browser.tabs.sendMessage(tab.id, {searchTerm: info.selectionText});
});

