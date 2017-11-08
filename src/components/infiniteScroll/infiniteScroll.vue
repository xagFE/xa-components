<template>
  <div class="xa-infinite-scroll">
    <span class="xa-weui-loading"></span>
    <span v-show="loading || end" class="xa-infinite-scroll-text" :style="{'margin-left': end ? '0' : '10px'}">{{ end ? '- '+endText+' -' : loadingText}}</span>
  </div>
</template>

<script>
import scrollMixin from '../../mixins/scroll.js'

export default {
  name: 'infinite-scroll',
  mixins: [scrollMixin],
  props: {
    loading: Boolean,
    loadingText: {
      type: String,
      default: '正在加载...'
    },
    end: Boolean,
    endText: {
      type: String,
      default: '暂无更多'
    }
  },
  methods: {
    onScroll () {
      if (this.loading || this.end) return
      const scrollTop = this.scroller.scrollTop
      const scrollHeight = this.scroller.scrollHeight
      let h = scrollHeight - scrollTop - 5
      let sh = this.scroller.offsetHeight
      if (h <= sh) {
        this.$emit('load')
      }
    }
  }
}
</script>

<style scoped>
.xa-infinite-scroll{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
  line-height: 24px;
  width: 100%;
}
.xa-infinite-scroll-text{
  font-size: 12px;
  color: #666;
}
</style>

