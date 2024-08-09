function removeBlur() {
  const styleElement = document.createElement('style')
  styleElement.textContent = `
    * { backdrop-filter: none !important; }
    .btm-media-overlays-container, .btm-media-overlays-container * { background: none; }
  `

  document.head.appendChild(styleElement)
}

removeBlur()
