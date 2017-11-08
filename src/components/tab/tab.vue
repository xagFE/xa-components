<template>
  <div class="xa-tabs xa-flex-box">
    <div v-for="(item,index) in items" @click="onItemClick(item,index)" :style="currentIndex === index ? {color: color} : ''" class="xa-tab xa-flex">{{ item.text }}</div>
    <div class="xa-tab-flag" :class="tabTagClass" :style="tabFlagStyle"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabTagClass: ''
    }
  },
  props: {
    items: Array,
    value: {
      type: [String, Number]
    },
    color: {
      type: String,
      default: '#45B138'
    },
    // value = model !== undefined ? items[currentIndex].model : currentIndex
    model: {
      type: String
    },
    padding: {
      type: Number,
      default: 4
    },
    lineHeight: {
      type: Number,
      default: 3
    }
  },
  methods: {
    onItemClick (item, index) {
      var value = this.model !== undefined ? this.items[index][this.model] : index
      if (this.value === value) return
      this.$emit('input', value)
    }
  },
  watch: {
    currentIndex (index, oldIndex) {
      this.tabTagClass = index > oldIndex ? 'backward' : 'forward'
    }
  },
  computed: {
    currentIndex () {
      if (this.model === undefined) {
        return this.value
      } else {
        let ix = -1
        this.items.some((item, index) => {
          if (this.value === item[this.model]) {
            ix = index
            return true
          }
        })
        return ix
      }
    },
    tabFlagStyle () {
      var width = 100 / this.items.length
      return {
        backgroundColor: this.color,
        height: this.lineHeight + 'px',
        borderRadius: this.lineHeight + 'px',
        left: this.currentIndex * width + this.padding + '%',
        right: 100 + this.padding - (this.currentIndex + 1) * width + '%'
      }
    }
  }
}
</script>

<style scoped>
  .xa-tabs{height:40px;line-height:40px;text-align:center;position:relative;background-color:white;}
  .xa-tab{transition:all 0.3s;}
  .xa-tab-flag{height:3px;position:absolute;bottom:0;left:0;border-radius:3px;background:#41B883;}
  .xa-tab-flag.forward{transition:right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.09s cubic-bezier(0.35, 0, 0.25, 1);left:10%;right:60%;}
  .xa-tab-flag.backward{transition:right 0.09s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1);left:60%;right:10%;}
</style>

