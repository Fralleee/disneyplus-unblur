function removeBlur() {
  const targetElement = document.querySelector('.overlay__controls')

  if (targetElement) {
    ;(targetElement as HTMLDivElement).style.backdropFilter = 'none'
    return true
  }

  return false
}

function startInterval() {
  const intervalId = setInterval(() => {
    const success = removeBlur()

    if (success) {
      clearInterval(intervalId)
    }
  }, 1000)

  return intervalId
}

let currentUrl = window.location.href
let intervalId = startInterval()

setInterval(() => {
  if (currentUrl !== window.location.href) {
    currentUrl = window.location.href
    clearInterval(intervalId)
    intervalId = startInterval()
  }
}, 1000)