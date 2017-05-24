import './styles/common.css'

import xaCopyright from './components/copyright'
import xaPopup from './components/popup'
import { cells as xaCells, cell as xaCell } from './components/cells'
import xaRipple from './components/ripple'
import xaCircular from './components/circular'
import xaTab from './components/tab'
import { button as xaButton, buttons as xaButtons } from './components/buttons'
import xaInfiniteScroll from './components/infiniteScroll'
import xaRefreshControl from './components/refreshControl'
import xaPicker from './components/picker'
import xaDatePicker from './components/datePicker'

import toast from './components/toast'

const components = {
  xaCopyright,
  xaPopup,
  xaCells,
  xaCell,
  xaRipple,
  xaCircular,
  xaTab,
  xaButton,
  xaButtons,
  xaInfiniteScroll,
  xaRefreshControl,
  xaPicker,
  xaDatePicker
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
