export function isPc () {
  var uaInfo = navigator.userAgent
  var agents = ['Android', 'iPhone', 'Windows Phone', 'iPad', 'iPod']
  var flag = true
  for (var i = 0; i < agents.length; i++) {
    if (uaInfo.indexOf(agents[i]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

export function retina () {
  // 处理retina屏幕显示效果
  if (isPc()) return
  var classNames = []
  let pixelRatio = window.devicePixelRatio || 1
  classNames.push('pixel-ratio-' + Math.floor(pixelRatio))
  if (pixelRatio >= 2) {
    classNames.push('retina')
  }

  let html = document.getElementsByTagName('html')[0]

  classNames.forEach((className) => html.classList.add(className))
}
