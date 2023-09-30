import { createObserver } from './mutationObserver'

chrome.storage.sync.get(['redirectionURL'], (data) => {
  const redirectionUrl = data.redirectionURL || 'yt.artemislena.eu'
  const observer = createObserver(redirectionUrl)
  const config = {
    childList: true,
    characterData: true,
    attributes: true,
    subtree: true,
  }

  document.addEventListener('DOMContentLoaded', () => {
    observer.observe(document.body, config)
  })
})
