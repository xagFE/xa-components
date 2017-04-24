import copyright from './copyright'

const components = {
  copyright
}

const install = (Vue, option) => {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

export default {
  version: '0.1.3',
  install
}
