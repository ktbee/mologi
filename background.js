var searchTerm;

browser.contextMenus.create({
  id: "Mologi",
  title: "Search with Mologi",
  contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  searchTerm = info.selectionText;
  console.log(searchTerm);
});

browser.tabs.executeScript(null, {
    file: "/popup/mologi.js"
});
