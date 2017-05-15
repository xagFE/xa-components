import './styles/common.css'

import xaCopyright from './components/copyright'
import xaPopup from './components/popup'
import { cells as xaCells, cell as xaCell } from './components/cells'
import xaRipple from './components/ripple'
import xaCircular from './components/circular'

import toast from './components/toast'

const components = {
  xaCopyright,
  xaPopup,
  xaCells,
  xaCell,
  xaRipple,
  xaCircular
}

const install = (Vue, option) => {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key])
  })
  Vue.prototype.$toast = toast()
}

export default {
  install
}
