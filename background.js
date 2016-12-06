chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  chrome.tabs.executeScript(null, {file: "lib/jquery-3.1.1.min.js"}, function() {
      chrome.tabs.executeScript(null, {file: "content.js"});
  });
});
