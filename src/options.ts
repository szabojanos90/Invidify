const submitButton = document.querySelector(
  '#submitButton',
) as HTMLButtonElement

const inputField = document.querySelector('#redirectionURL') as HTMLInputElement

if (!submitButton || !inputField) throw new Error('No HTML element found')

chrome.storage.sync.get(['redirectionURL'], (data) => {
  inputField.value = data.redirectionURL || 'yt.artemislena.eu'
})

submitButton.addEventListener('click', () => {
  chrome.storage.sync.set({ redirectionURL: inputField.value })
})
