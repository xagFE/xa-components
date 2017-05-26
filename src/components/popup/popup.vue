<template>
  <transition name="fade">
    <div v-show="value" @click.stop="hideSide" class="popup-box">
      <transition name="slide">
        <div @click.stop="" v-show="value" :class="from" class="popup-container">
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
      }
    },
    methods: {
      hideSide () {
        this.$emit('input', false)
      }
    }
  }
</script>

<style scoped>
.popup-box{position:fixed;top:0;right:0;left:0;bottom:0;width:100%;height:100%;z-index:10;background:rgba(0,0,0,0.3);}
.popup-container{position:absolute;background:white;overflow-y:auto;overflow-x:hidden;box-shadow:-3px 0 8px #999;}
.popup-container.right{right:0;top:0;width:60%;height:100%;}
.popup-container.left{left:0;top:0;width:60%;height:100%;}
.popup-container.top{left:0;top:0;width:100%;max-height:85%;}
.popup-container.bottom{right:0;bottom:0;width:100%;max-height:85%;}
.popup-container.center{max-height:85%;width:85%;left:50%;top:50%;transform:translate(-50%, -50%);}

.fade-enter-active, .fade-leave-active {
  transition:opacity .3s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.slide-enter-active, .slide-leave-active {
  transition:transform .3s ease,opacity .3s ease;
}
.slide-enter.left, .slide-leave-active.left {
  transform:translate3d(-100%,0,0);
  opacity:0;
}
.slide-enter.right, .slide-leave-active.right {
  transform:translate3d(100%,0,0);
  opacity:0;
}
.slide-enter.bottom, .slide-leave-active.bottom {
  transform:translate3d(0,100%,0);
  opacity:0;
}
.slide-enter.top, .slide-leave-active.top {
  transform:translate3d(0,-100%,0);
  opacity:0;
}
.slide-enter.center, .slide-leave-active.center {
  transform:scale(0);
  opacity:0;
}
</style>

