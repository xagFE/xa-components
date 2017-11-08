<template>
  <label>
    <input :checked="isChecked" type="radio" @change="onRadioChange" :name="name" :value="checkedValue" class="xa-radio xa-hide">
    <div class="xa-radio-icon" :style="radioStyle"></div>
    <slot></slot>
  </label>
</template>

<script>
export default {
  data () {
    return {
      isChecked: this.value === this.checkedValue
    }
  },
  props: {
    name: String,
    value: [Boolean, String, Number, Array, Object],
    checkedValue: [Boolean, String, Number, Array, Object],
    size: {
      type: Number
      // default: 18
    },
    color: {
      type: String
      // default: 'red'
    },
    borderWidth: {
      type: Number
      // default: 2
    }
  },
  watch: {
    value () {
      this.isChecked = this.value === this.checkedValue
    }
  },
  methods: {
    onRadioChange (e) {
      this.$emit('input', this.checkedValue)
    }
  },
  computed: {
    radioStyle () {
      return {
        border: `${this.color ? this.borderWidth || 2 : this.borderWidth}px solid ${this.borderWidth ? this.color || 'red' : this.color}`,
        color: `${this.color}`,
        height: `${this.size}px`,
        width: `${this.size}px`
      }
    }
  }
}
</script>

<style scoped>
  .xa-radio-icon{border-radius:50%;position:relative;display:inline-block;vertical-align:-4px;transition:0.3s;height:18px;width:18px;border:2px solid red;color:red;}
  .xa-radio+.xa-radio-icon:after{content:'';display:block;position:absolute;top:12%;left:12%;right:12%;bottom:12%;border-radius:50%;background-color:currentColor;transform:scale(0);transition:0.3s cubic-bezier(0.4, 0, 1, 1);}
  .xa-radio:checked+.xa-radio-icon:after{transform:scale(1);}
  .xa-radio:not(:checked)+.xa-radio-icon{border-color:#ccc !important;}
</style>

