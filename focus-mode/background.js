chrome.runtime.onInstalled.addListener(()=>{
    chrome.action.setBadgeText({
        text:"OFF"
    })
})


chrome.action.onClicked.addListener(async (tab)=>{
    const prev = await chrome.action.setBadgeText({tabId:tab.id})
    const next = prev === 'ON' ? 'OFF' : 'ON'

    chrome.action.setBadgeText({
        tabId:tab.id,
        text:next
    })

if (next === "ON") {
    await chrome.scripting.insertCSS({
      files: ["focus-mode.css"],
      target: { tabId: tab.id },
    });
  } else if (next=== "OFF") {
    await chrome.scripting.removeCSS({
      files: ["focus-mode.css"],
      target: { tabId: tab.id },
    });
  }
})

