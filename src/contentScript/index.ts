function removeBlur() {
  const targetElement = document.querySelector('.overlay__controls')

  if (targetElement) {
    ;(targetElement as HTMLDivElement).style.backdropFilter = 'none'
    ;(targetElement as HTMLDivElement).style.background = 'none'
    return true
  }

  return false
}

function startInterval() {
  let attemptCount = 0

  const intervalId = setInterval(() => {
    const success = removeBlur()

    attemptCount++

    if (success || attemptCount >= 10) {
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
