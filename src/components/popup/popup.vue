<template>
  <transition name="fade">
    <div v-show="value" @touchstart="touchStart" @touchmove="touchMove" @click.stop="hideSide" class="popup-box">
      <transition name="slide">
        <div ref="scroller" @click.stop v-show="value" :class="[from, shadow ? 'shadow' : '']" class="popup-container" :style="{width: width, height: height}">
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    from: {
      type: String,
      default: 'right'
    },
    width: String,
    height: String,
    shadow: Boolean,
    preventHide: Boolean,
    scroller: {
      type: HTMLDivElement,
      default () {
        return this.$refs.scroller
      }
    }
  },
  methods: {
    hideSide () {
      if (this.preventHide) return
      this.$emit('input', false)
    },
    touchStart (e) {
      this.y = e.touches[0].pageY
    },
    touchMove (e) {
      let scroller = this.scroller
      let path = e.composedPath && e.composedPath()
      if (path && !path.some(item => item === this.scroller)) {
        e.preventDefault()
        return
      }
      let y = e.touches[0].pageY - this.y   //  >0向下 <0向上
      if ((scroller.scrollTop <= 0 && y >= 0) || (scroller.scrollTop >= scroller.scrollHeight - scroller.clientHeight && y <= 0)) {
        this.y = e.touches[0].pageY
        e.preventDefault()
      }
    }
  }
}
</script>

<style scoped>
.popup-box {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
}
.popup-container {
  position: absolute;
  background: white;
  overflow-y: auto;
  overflow-x: hidden;
}
.popup-container.shadow {
  box-shadow: -3px 0 8px #999;
}
.popup-container.right {
  right: 0;
  top: 0;
  width: 60%;
  height: 100%;
}
.popup-container.left {
  left: 0;
  top: 0;
  width: 60%;
  height: 100%;
}
.popup-container.top {
  left: 0;
  top: 0;
  width: 100%;
  max-height: 85%;
}
.popup-container.bottom {
  right: 0;
  bottom: 0;
  width: 100%;
  max-height: 85%;
}
.popup-container.center {
  max-height: 85%;
  width: 85%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter.left,
.slide-leave-active.left {
  transform: translate3d(-100%, 0, 0);
  opacity: 0;
}
.slide-enter.right,
.slide-leave-active.right {
  transform: translate3d(100%, 0, 0);
  opacity: 0;
}
.slide-enter.bottom,
.slide-leave-active.bottom {
  transform: translate3d(0, 100%, 0);
  opacity: 0;
}
.slide-enter.top,
.slide-leave-active.top {
  transform: translate3d(0, -100%, 0);
  opacity: 0;
}
.slide-enter.center,
.slide-leave-active.center {
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
}
</style>
