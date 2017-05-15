<template>
  <div class="form-cell xa-webkit-box">
      <div class="form-cell-hd">{{ title }}<slot name="title"></slot></div>
      <div class="form-cell-bd xa-flex" :class="{'xa-arrow':arrow,'xa-txt-right':right}">{{ desc }}<slot name="desc"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    arrow: Boolean,
    right: Boolean,
    title: String,
    desc: String
  }
}
</script>
