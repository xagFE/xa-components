import Vue from 'vue'
import Toast from './toast.vue'

export default (properties) => {
  const el = document.createElement('toast')
  document.body.appendChild(el)
  const toastComponent = new Vue({
    el,
    components: { Toast }
  }).$children[0]
  return {
    show (message, timeout) {
      toastComponent.showToast(message, timeout)
    },
    hide () {
      toastComponent.hideToast()
    }
  }
}
