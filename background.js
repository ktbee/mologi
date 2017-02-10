browser.contextMenus.create({
  id: "Mologi",
  title: "Search with Mologi",
  contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  console.log(info.selectionText);
});
