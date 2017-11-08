<template>
  <div @click="showSlide" class="date-picker">
    <span :class="{'xa-arrow': arrow}">{{defaultText}}</span>
    <popup v-model="isShowSlide" from="bottom">
      <div v-if="title" class="date-picker-title">{{ title }}</div>
      <div class="date-picker-container xa-flex-box">
        <picker class="xa-flex" :show="isShowSlide" v-model="date" :items="modelDate"></picker>
        <picker class="xa-flex" :show="isShowSlide" v-model="time" :items="modelTime"></picker>
      </div>
      <buttons @oncancel="onBtnCancel" @onconfirm="onBtnConfirm" :items="buttons" style="border-top:1px solid #f2f2f2;"></buttons>
    </popup>
  </div>
</template>

<script>
import {formatDateString, formatDateValue, formatNumer, getLocaleString} from '../../utils/data'
import popup from '../popup'
import { buttons } from '../buttons'
import picker from '../picker'
export default {
  data () {
    return {
      isShowSlide: false,
      defaultText: this.text,
      buttons: [
        { text: '取消', class: 'xa-bg-white', event: 'oncancel' },
        { text: '确定', class: 'xa-bg-white', event: 'onconfirm', color: '#04BE02' }
      ],
      modelDate: (() => {
        var now = Date.now()
        var arr = []
        for (var i = -10; i <= 20; i++) {
          var date = new Date(now + i * 24 * 3600 * 1000)
          arr.push({ key: formatDateString(date), value: formatDateValue(date) })
        }
        return arr
      })(),
      modelTime: Array.apply(null, { length: 24 }).map((item, i) => ({ key: `${formatNumer(i)}:00`, value: `${formatNumer(i)}:00` })),
      date: '',
      time: '',
      preValue: ''
    }
  },
  components: { popup, picker, buttons },
  props: {
    text: String,
    title: String,
    right: Boolean,
    arrow: Boolean,
    value: {
      type: String,
      required: true
    }
  },
  watch: {
    value () {
      this.onValueChange()
    },
    preValue () {
      this.onPreValueChange()
    },
    date () {
      this.onDateTimeChange()
    },
    time () {
      this.onDateTimeChange()
    }
  },
  methods: {
    hideSlide () {
      this.isShowSlide = false
    },
    showSlide () {
      this.isShowSlide = true
    },
    onBtnCancel () {
      this.hideSlide()
    },
    onBtnConfirm () {
      this.$emit('input', this.preValue)
      this.hideSlide()
    },
    onValueChange () {
      this.defaultText = this.value.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/g, '$1年$2月$3日') || '请选择'
      this.preValue = this.value || getLocaleString()
      this.onPreValueChange()
    },
    onPreValueChange () {
      var dateTime = this.preValue.split(' ')
      this.date = dateTime[0] || ''
      this.time = dateTime[1] || ''
    },
    onDateTimeChange () {
      this.preValue = this.date + ' ' + this.time
    }
  },
  mounted () {
    this.onValueChange()
  }
}
</script>

<style scoped>
.date-picker-title{text-align:center;color:#333;font-size:14px;font-weight:bold;margin-top:10px;}
.date-picker-container {
  position: relative;
  padding: 10px 20px;
}
</style>

