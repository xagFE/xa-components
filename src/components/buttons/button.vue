<template>
  <div
    @click="onBtnClick"
    :class="computedClass"
    :style="computedStyle"
    class="xa-button"><slot></slot>
    <ripple v-if="ripple" :color="ripple"></ripple>
  </div>
</template>

<script>
import ripple from '../ripple'
export default {
  components: { ripple },
  computed: {
    computedClass () {
      return [
        this.width ? '' : 'xa-flex'
      ]
    },
    computedStyle () {
      return {
        width: this.width || '',
        color: this.color || '',
        borderRadius: (this.radius || 0) + 'px'
      }
    }
  },
  methods: {
    onBtnClick () {
      this.$emit('button-click-for-buttons', this.event)
      if (this.event) {
        this.$emit(this.event)
      }
    }
  },
  props: {
    radius: {
      type: Number,
      default: 0
    },
    width: {
      type: String
    },
    ripple: {
      type: String
    },
    event: String,
    color: String
  }
}
</script>
