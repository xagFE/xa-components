<template>
  <div class="dropdown-box">
    <div @click="isShowItems = !isShowItems" class="dropdown-title">{{ showText }}</div>
    <div v-show="isShowItems" class="dropdown-items">
      <div @click="onItemClick(item)" v-for="item in items" class="dropdown-item xa-webkit-box">
        <div class="xa-flex" :class="{'xa-txt-green': item.value === value}">{{ item.key }}</div>
        <div>
          <i v-show="item.value === value" class="weui_icon_success_no_circle"></i>
        </div>
      </div>
    </div>
    <div @click="isShowItems = false" v-show="isShowItems" class="dropdown-cover"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowItems: false
    }
  },
  props: {
    items: Array,
    value: {
      type: [String, Number, Object]
    }
  },
  computed: {
    showText () {
      let match = this.items.filter(item => item.value === this.value)
      if (match.length) return match[0].key
      if (this.items.length) {
        this.$emit('input', this.items[0].value)
        return this.items[0].key
      }
      return ''
    }
  },
  methods: {
    onItemClick (item) {
      if (this.value === item.value) return
      this.isShowItems = false
      this.$emit('input', item.value)
      this.$emit('change', item.value)
    }
  }
}
</script>

<style scoped>
  .dropdown-box{position:relative;font-size:13px;text-align:left;}
  .dropdown-title{text-align:center;padding:5px 0;background-color:white;border-bottom: 1px solid #e4e4e4;}
  .dropdown-title:after{content:'';display:inline-block;border-top:6px solid #676767;border-left:5px solid transparent;border-right:5px solid transparent;margin-left:4px;vertical-align: 1px;}
  .dropdown-items{position:absolute;z-index:10;background:white;width:100%;box-shadow:0px 4px 8px 0px #ccc;}
  .dropdown-item{padding:4px 10px;border-bottom:1px solid #f2f2f2;}
  .dropdown-cover{position:fixed;z-index:9;top:0;left:0;height:100%;width:100%;background-color:rgba(255,255,255,0.01);}
</style>
