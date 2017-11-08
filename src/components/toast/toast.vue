<template>
  <div class="xa-toast" :class="{'show':show}">
    <div>{{ message }}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        timer: null,
        show: false,
        message: ''
      }
    },
    methods: {
      showToast (message, timeout) {
        window.clearTimeout(this.timer)
        this.message = message
        this.show = true
        if (!timeout) return
        this.timer = setTimeout(() => {
          this.show = false
        }, timeout)
      },
      hideToast () {
        window.clearTimeout(this.timer)
        this.show = false
      }
    }
  }
</script>

<style scoped>
  .xa-toast{position:fixed;z-index:99;bottom:80px;width:100%;transition:transform 0.3s;transform:scale(0);display:flex;justify-content:center;pointer-events:none;}
  .xa-toast.show{transform:scale(1);}
  .xa-toast>div{max-width:80%;margin:auto;background-color:rgba(0,0,0,0.7);background-repeat:no-repeat;color:white;font-size:12px;padding:8px 15px;line-height:20px;border-radius:4px;overflow:hidden;}
</style>
