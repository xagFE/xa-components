<template>
  <popup :prevent-hide="preventHide" shadow from="bottom" v-model="isShowDialog">
    <div class="dialog-alert">
      <div v-show="$slots.title" class="title">
        <slot name="title"></slot>
      </div>
      <div v-show="$slots.desc" class="dialog-desc">
        <slot name="desc"></slot>
      </div>
      <slot></slot>
    </div>
    <buttons class="dialog-buttons" @cancel="onCancel" @confirm="onConfirm" :items="[{ text: cancelText || '取消' ,class:'xa-bg-white', event:'cancel'},{ text: confirmText || '确定' ,class:'xa-bg-white',color:'#04BE02',event: 'confirm'}]">
    </buttons>
  </popup>
</template>

<script>
import {buttons} from '../buttons'
import popup from '../popup'
export default {
  name: 'popup-confirm',
  components: {buttons, popup},
  data () {
    return {
      isShowDialog: this.value || false
    }
  },
  props: {
    value: Boolean,
    event: String,
    cancelText: String,
    confirmText: String,
    preventHide: Boolean
  },
  watch: {
    value () {
      this.isShowDialog = this.value
    },
    isShowDialog () {
      this.$emit('input', this.isShowDialog)
    }
  },
  methods: {
    onConfirm () {
      this.$emit(this.event || 'confirm')
    },
    onCancel () {
      this.isShowDialog = false
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-alert {
  background-color: white;
  padding: 20px 14px 28px;
  .title {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    line-height: 40px;
  }
}
.dialog-desc {
  font-size: 13px;
  font-weight: normal;
  line-height: 24px;
  margin: 8px 10px;
  text-align: center;
}
.dialog-buttons {
  border-top: 1px solid #f2f2f2;
}
</style>

