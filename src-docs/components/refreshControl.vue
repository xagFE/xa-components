<template>
  <div>
    <div style="height:300px;border:1px solid #ccc;overflow:auto;position:relative;">
      <xa-refresh-control @refresh="onRefresh" :color="colors" :refreshing="isRefreshing" />
      <div v-for="item in items">项目{{item}}</div>
    </div>
    模拟加载{{query.timeout}}秒  <input type="range" v-model.number="query.timeout" max="20" min="2">
    <br>
    <div v-for="(item,index) in colors">
      颜色{{index+1}}: <input type="color" v-model="colors[index]">
    </div>
    <button @click="addColor">添加颜色</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: 20,
      isRefreshing: false,
      colors: ['#ff0000', '#ffff00', '#ff00ff'],
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
      var arr = Array.apply(null, { length: 10 }).map((item, ix) => ix).concat(['a', 'b', 'c', 'd', 'e', 'f'])
      let randomColor = Array.apply(null, { length: 6 }).map(item => {
        return arr[Math.floor(Math.random() * 16)]
      }).join('')
      console.log(`#${randomColor}`)
      this.colors.push(`#${randomColor}`)
    }
  }
}
</script>

