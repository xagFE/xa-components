<template>
  <popup from="bottom" :scroller="$refs.scroller" :prevent-hide="preventHide" class="popup-bottom" shadow v-model="isShowPopup">
    <div v-if="title" class="popup-bottom-title" :class="{sub: subTitle}">
      <div class="title" :class="[red ? 'xa-txt-red' : '']">{{ title }}</div>
      <div v-if="subTitle" class="subtitle" :class="[red ? 'xa-txt-red' : '']">{{ subTitle }}</div>
    </div>
    <slot name="title"></slot>
    <div ref="scroller" class="popup-bottom-content" :class="{hasfooter: $slots.footer}">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </popup>
</template>

<script>
import popup from '../popup'
export default {
  name: 'popup-bottom',
  components: { popup },
  data () {
    return {
      isShowPopup: this.value
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: String,
    subTitle: String,
    preventHide: Boolean,
    red: Boolean
  },
  watch: {
    value () {
      this.isShowPopup = this.value
    },
    isShowPopup () {
      this.$emit('input', this.isShowPopup)
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-bottom {
  .popup-bottom-title {
    background-color: #f2f2f2;
    font-size: 16px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 24px;
    padding: 11px 14px;
    text-align: center;
    font-size: 14px;
    color: #333;
    &.sub {
      padding: 5px 14px;
      > .title {
        font-size: 14px;
        font-weight: bold;
      }
      + .popup-bottom-content {
        max-height: calc(85vh - 53px);
      }
      + .popup-bottom-content.hasfooter {
        max-height: calc(85vh - 95px);
      }
    }
    > .subtitle {
      font-size: 12px;
      color: #999;
      line-height: 18px;
      height: 18px;
    }
  }
  .popup-bottom-content {
    padding: 0;
    overflow: auto;
    max-height: calc(85vh - 47px);
    background-color: #f2f2f2;
    &.hasfooter {
      max-height: calc(85vh - 89px);
    }
  }
}
</style>

