const createObserver = (redirectionUrl: string) =>
  new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLAnchorElement && node.href !== '') {
            const oldHref = node.href
            node.href = oldHref.replace(
              window.location.hostname,
              redirectionUrl,
            )
          }
        })
      }
    }
  })

export { createObserver }
