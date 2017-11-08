<template>
  <div>
    <div style="height:250px;border:1px solid #ccc;overflow:auto;position:relative;">
      <xa-refresh-control @refresh="onRefresh" :color="colors" :refreshing="isRefreshing"></xa-refresh-control>
      <div v-for="item in 20" :key="item">下拉刷新{{item}}</div>
    </div>
    模拟加载{{query.timeout}}秒  <input type="range" v-model.number="query.timeout" max="20" min="2">
    <br>
    <input v-for="(item,index) in colors" :key="index" type="color" v-model="colors[index]">
    <br><br><button @click="addColor">添加颜色</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: 20,
      isRefreshing: false,
      colors: ['#35495E', '#41B883', '#ffff00'],
      query: {
        timeout: 5
      }
    }
  },
  methods: {
    onRefresh () {
      this.isRefreshing = true
      setTimeout(() => {
        this.isRefreshing = false
      }, this.query.timeout * 1000)
    },
    addColor () {
      var arr = '0123456789abcdef'.split('')
      let randomColor = Array.apply(null, { length: 6 }).map(item => {
        return arr[Math.floor(Math.random() * 16)]
      }).join('')
      console.log(`#${randomColor}`)
      this.colors.push(`#${randomColor}`)
    }
  }
}
</script>

