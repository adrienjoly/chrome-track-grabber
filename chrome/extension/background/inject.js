/*
function isInjected(tabId) {
  return chrome.tabs.executeScriptAsync(tabId, {
    code: `var injected = window.reactExampleInjected;
      window.reactExampleInjected = true;
      injected;`,
    runAt: 'document_start'
  });
}

function loadScript(name, tabId, cb) {
  if (process.env.NODE_ENV === 'production') {
    chrome.tabs.executeScript(tabId, { file: `/js/${name}.bundle.js`, runAt: 'document_end' }, cb);
  } else {
    // dev: async fetch bundle
    fetch(`https://localhost:3000/js/${name}.bundle.js`)
    .then(res => res.text())
    .then(fetchRes => {
      // Load redux-devtools-extension inject bundle,
      // because inject script and page is in a different context
      const request = new XMLHttpRequest();
      request.open('GET', 'chrome-extension://lmhkpmbekcpmknklioeibfkpmmfibljd/js/inject.bundle.js');  // sync
      request.send();
      request.onload = () => {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
          chrome.tabs.executeScript(tabId, { code: request.responseText, runAt: 'document_start' });
        }
      };
      chrome.tabs.executeScript(tabId, { code: fetchRes, runAt: 'document_end' }, cb);
    });
  }
}
*/
function showIfYoutube(tab){
  //console.log('GRABBER', tab.url);
  if (tab.url.indexOf('youtube') != -1) 
    chrome.browserAction.setBadgeText({ text: 'coucou' });
  else
    chrome.browserAction.setBadgeText({ text: '' });
}

// called when the user switches to a tab
chrome.tabs.onActivated.addListener(async function(activeInfo) {
  chrome.tabs.getSelected(null, function(tab) {
    //console.log('TAB', activeInfo.tabId, tab.url);
    showIfYoutube(tab);
  });
});

// called when a new tab was loaded
chrome.tabs.onUpdated.addListener(async function(tabId, changeInfo, tab) {
  if (changeInfo.status !== 'complete' /*'loading'*/) return;
  showIfYoutube(tab);
  /*
  const result = await isInjected(tabId);
  if (chrome.runtime.lastError || result[0]) return;
  loadScript('inject', tabId, () => console.log('load inject bundle success!'));
  */
});
