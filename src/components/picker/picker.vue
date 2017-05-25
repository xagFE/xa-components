<template>
<div class="picker-container">
  <div class="picker-bar" :style="{top: 44 * (count - 1) / 2 + 'px'}"></div>
  <div @scroll="onscroll" ref="list" class="picker-items" :style="{height: 44*count+'px'}">
    <div class="picker-item" v-for="i in (count - 1) / 2"></div>
    <div class="picker-item" @click="index = ix" :class="{current: index == ix}" v-for="(item, ix) in items">{{ item.key }}</div>
    <div class="picker-item" v-for="i in (count - 1) / 2"></div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      timer: null,
      index: 0,
      animationStep: 3
    }
  },
  props: {
    items: {
      type: Array
    },
    count: {
      type: Number,
      default: 3
    },
    value: String,
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value () {
      this.onValueChange()
    },
    index () {
      this.onIndexChange()
    },
    show () {
      if (this.show) {
        this.onIndexChange()
      }
    }
  },
  methods: {
    onscroll () {
      this.clearTimer()
      this.timer = setTimeout(() => {
        this.index = Math.round(this.$refs.list.scrollTop / 44)
      }, 100)
    },
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    },
    onValueChange () {
      !this.items.some((item, index) => {
        if (item.value === this.value) {
          if (this.index !== index) { // 来自父组件的改变 快速滚动
            this.animationStep = 20
          }
          this.index = index
          return true
        }
        return false
      }) && (this.index = 0)
    },
    onIndexChange () {
      this.$emit('input', this.items[this.index].value)
      if (this.$refs.list.scrollHeight <= 0) return
      let _endPosition = this.index * 44
      if (typeof requestAnimationFrame === 'function') {
        let _scrollTop = this.$refs.list.scrollTop
        let plus = (_endPosition - _scrollTop) > 0 ? 1 : -1
        let loop = () => {
          _scrollTop += this.animationStep * plus
          this.$refs.list.scrollTop = _scrollTop
          let sub = _endPosition - _scrollTop
          if (Math.abs(sub) > this.animationStep) {
            requestAnimationFrame(loop)
          } else {
            this.$refs.list.scrollTop = _endPosition
            this.animationStep = 3
          }
        }
        requestAnimationFrame(loop)
      } else {
        this.$refs.list.scrollTop = _endPosition
      }
    }
  },
  mounted () {
    this.onValueChange()
  }
}
</script>

<style scoped>
  .picker-container{position:relative;}
  .picker-items{overflow-y:auto;overflow-x:hidden;text-align:center;-webkit-mask:-webkit-linear-gradient(top,transparent,white,transparent);}
  .picker-item{height:44px;line-height:24px;padding:10px 0;}
  .picker-item.current{font-weight:bold;color:#04BE02;}
  .picker-bar{position:absolute;height:44px;width:100%;pointer-events:none;border-top:2px solid #04BE02;border-bottom:2px solid #04BE02;}
</style>
