
document.addEventListener('DOMContentLoaded', function() {
  
  document.getElementById('theaterModeBtn').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'enable_theater_mode'});
    });

    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: theaterMode,
        //  args: [color],
      })
    })

  });

});

