<template>
<div>
  <xa-cells>
    <xa-cell title="选择地区" arrow right>
      <div @click="isShowPopup = true">
        {{ (area.province + area.city + area.county) || '地区选择' }}
      </div>
    </xa-cell>
  </xa-cells>
  <xa-area-select @change="onAreaChange" :area="area" v-model="isShowPopup"></xa-area-select>
</div>
</template>

<script>
export default {
  name: 'area-select-demo',
  data () {
    return {
      isShowPopup: false,
      area: {
        province: '',
        city: '',
        county: ''
      }
    }
  },
  methods: {
    onAreaChange (area, hasvalue) {
      this.area.province = area.province
      this.area.city = area.city
      this.area.county = area.county
      this.$toast.show(area.province + area.city + area.county || '没有选择', 3000)
    }
  }
}
</script>
