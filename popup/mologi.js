function displaySearchResults(request, sender, sendResponse) {
  console.log(request);
  // var resultsDiv = document.getElementById('results');
  // var text = request;
  // resultsDiv.appendChild(text);

}

browser.runtime.onMessage.addListener(displaySearchResults);
