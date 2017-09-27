<template>
  <div @click="onItemClick" class="form-cell xa-webkit-box" :class="{'xa-arrow': arrow}">
      <div class="form-cell-hd" :class="{required: required}">{{ title }}<slot name="title"></slot></div>
      <div class="form-cell-bd xa-flex" :class="{'xa-txt-right':right}">{{ desc }}<slot></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    arrow: Boolean,
    right: Boolean,
    required: Boolean,
    title: String,
    desc: String,
    link: [String, Object]
  },
  methods: {
    onItemClick () {
      if (!this.link) return
      if (this.$router) {
        this.$router.push(this.link)
      } else if (typeof this.link === 'string') {
        window.location.href = this.link
      }
    }
  }
}
</script>
