<template>
  <div>
    <xa-cells>
      <xa-cell right>
          <div slot="title">选择时间</div>
          <span slot="desc">
            <xa-date-picker title="选择时间" v-model="datetime" text="请选择" />
          </span>
      </xa-cell>
    </xa-cells>
    <button @click="clearDiv" style="position:fixed;top:100px;left:100px;z-index:100">清空</button>
    <div id="abcd"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      datetime: ''
    }
  },
  methods: {
    clearDiv () {
      document.getElementById('abcd').innerHTML = ''
    }
  }
}
</script>
