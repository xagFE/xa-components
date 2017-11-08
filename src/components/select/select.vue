<template>
  <select @change="onchange" :value="value" class="xa-input" :style="{direction: rtl ? 'rtl': undefined}">
    <slot></slot>
    <option v-for="item in items" :value="item.value">{{ item.text }}</option>
  </select>
</template>

<script>
export default {
  props: {
    items: Array,
    rtl: Boolean,
    value: [String, Boolean, Number, Object]
  },
  methods: {
    onchange (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
