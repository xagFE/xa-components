export const formatNumer = n => n > 9 ? n : '0' + n

export const formatDateString = (date = new Date()) => {
  return `${date.getFullYear()}年${formatNumer(date.getMonth() + 1)}月${formatNumer(date.getDate())}日`
}

export const formatDateValue = (date = new Date(), split = '-') => {
  return `${date.getFullYear() + split + formatNumer(date.getMonth() + 1) + split + formatNumer(date.getDate())}`
}

export const getLocaleString = (date = new Date()) => {
  return formatDateValue(date) + ' ' + formatNumer(date.getHours()) + ':00'
}

export const formatLocaleString = (date = new Date()) => {
  return formatDateString(date) + ' ' + formatNumer(date.getHours()) + ':00'
}

export const copy = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

export const setStorage = (key, value) => {
  window.localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value)
}

export const getStorage = (key) => {
  var value = window.localStorage.getItem(key)
  if (value) return JSON.parse(value)
  return value
}

export const urlQueryString = (url, params) => {
  var querys = []
  for (let key in params) {
    if (params[key] !== undefined && params[key] !== '' && params[key] !== null) querys.push(`${key}=${params[key]}`)
  }
  return url + (querys.length ? '?' + querys.join('&') : '')
}

