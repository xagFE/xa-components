<template>
  <div :class="{padding:radius}" class="xa-buttons xa-webkit-box">
    <xa-button 
      @button-click-for-buttons="onBtnClick"
      v-for="(item,index) in items"
      :key="index"
      :class="[item.class || 'xa-bg-green',item.width ? '' : 'xa-flex']"
      :event="item.event"
      :ripple="item.ripple"
      :width="item.width || defaultWidth"
      :radius="radius">{{ item.text }}</xa-button>
  </div>
</template>

<script>
import xaButton from './button.vue'
export default {
  components: { xaButton },
  computed: {
    defaultWidth () {
      return 100 / (this.items.length || 1) + '%'
    }
  },
  methods: {
    onBtnClick (event) {
      if (event) {
        this.$emit(event)
      }
    }
  },
  props: {
    items: {
      type: Array
    },
    radius: {
      type: Number,
      default: 0
    }
  }
}
</script>
