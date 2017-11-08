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
import xaInput from './components/input'
import xaSelect from './components/select'
import xaTabBar from './components/tabBar'
import xaRadio from './components/radio'
import xaSearch from './components/search'
import xaDropdown from './components/dropdown'
import xaAreaSelect from './components/areaSelect'

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
  xaDatePicker,
  xaInput,
  xaSelect,
  xaTabBar,
  xaRadio,
  xaSearch,
  xaDropdown,
  xaAreaSelect
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
