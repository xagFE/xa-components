<template>
  <xa-popup v-model="isShowPopup" from="right" width="70%">
    <div style="height:100%;" class="xa-flex-vertical">
      <div :class="['area-title', 'xa-txt-' + theme]">{{ title }}</div>
      <div class="xa-flex" ref="scroller" style="overflow:auto;">
        <xa-cells v-show="step === 0">
          <xa-cell @click.native="step = 1" title="选择省" arrow right>{{ province || '请选择' }}</xa-cell>
          <xa-cell v-if="province" @click.native="step = 2" title="选择市" arrow right>{{ city || '请选择' }}</xa-cell>
          <xa-cell v-if="city && countys.length" @click.native="step = 3" title="选择县" arrow right>{{ county || '请选择' }}</xa-cell>
        </xa-cells>
        <xa-cells v-show="step !== 0">
          <xa-cell @click.native="onItemClick(item)" v-for="(item, index) in currentItems" :arrow="!!item.children" :key="index">
            <span slot="title" :class="{['xa-txt-' + theme]: item === currentText }">{{item}}</span>
          </xa-cell>
        </xa-cells>
      </div>
      <xa-buttons @prev="step--" @reset="onReset" @confirm="onConfirm(false)" style="box-shadow: 0 0 8px #ccc;" :items="buttons"></xa-buttons>
    </div>
  </xa-popup>
</template>

<script>
import areas from './area.json'

import xaPopup from '../popup'
import { buttons as xaButtons } from '../buttons'
import { cells as xaCells, cell as xaCell } from '../cells'
export default {
  components: { xaPopup, xaCells, xaCell, xaButtons },
  props: {
    value: Boolean,
    theme: {
      type: String,
      default: 'green'
    },
    area: Object // 初始化值
  },
  data () {
    return {
      isShowPopup: this.value,
      step: 0,
      province: this.area.province || '',
      city: this.area.city || '',
      county: this.area.county || ''
    }
  },
  computed: {
    title () {
      if (this.step === 1) return '选择省'
      if (this.step === 2) return '选择市'
      if (this.step === 3) return '选择县'
      return '选择地区'
    },
    provinces () {
      return Object.keys(areas)
    },
    citys () {
      return this.province ? Object.keys(areas[this.province]) : []
    },
    countys () {
      return this.city ? Object.keys(areas[this.province][this.city]) : []
    },
    currentItems () {
      if (this.step === 1) return this.provinces
      if (this.step === 2) return this.citys
      if (this.step === 3) return this.countys
      return []
    },
    buttons () {
      return [this.step === 0 ? { text: '重置', event: 'reset', class: 'xa-bg-white' } : { text: '上一步', event: 'prev', class: 'xa-bg-white' }, { text: '确定', event: 'confirm', class: 'xa-bg-' + this.theme }]
    },
    currentText () {
      return ['', this.province, this.city, this.county][this.step]
    }
  },
  watch: {
    isShowPopup () {
      this.$emit('input', this.isShowPopup)
    },
    value () {
      this.isShowPopup = this.value
    },
    step () {
      this.$refs.scroller.scrollTop = 0
    }
  },
  methods: {
    onReset () {
      this.province = ''
      this.city = ''
      this.county = ''
      this.onConfirm(true)
    },
    onConfirm (show) {
      this.$emit('change', {
        province: this.province,
        city: this.city,
        county: this.county
      }, show)
      this.$emit('input', false)
    },
    onItemClick (item) {
      if (this.step === 1) {
        this.county = ''
        this.city = ''
        this.province = item
      }
      if (this.step === 2) {
        this.county = ''
        this.city = item
      }
      if (this.step === 3) this.county = item
      this.step = this.step === 3 || (this.step === 2 && !this.countys.length) ? 0 : this.step + 1
    }
  }
}
</script>

<style lang="scss" scoped>
.area-title {
  height: 39px;
  line-height: 39px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 0 8px #ccc;
  position: relative;
}
</style>
