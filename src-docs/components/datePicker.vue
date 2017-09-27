<template>
  <div>
    <xa-cells>
      <xa-cell right>
          <div slot="title">选择时间</div>
          <span>
            <xa-date-picker arrow title="选择时间" v-model="datetime" text="请选择" />
          </span>
      </xa-cell>
    </xa-cells>
  </div>
</template>
<script>
export default {
  data () {
    return {
      datetime: ''
    }
  }
}
</script>
