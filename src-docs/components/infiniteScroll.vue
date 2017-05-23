<template>
  <div style="height:300px;border:1px solid #ccc;overflow:auto;">
    <div v-for="item in items">项目{{item}}</div>
    <xa-infinite-scroll @load="onLoadMore" :loading="isLoading" :end="isEnd" :end-text="endText" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: 0,
      isLoading: false,
      isEnd: false,
      endText: '暂无更多',
      p: 1,
      psize: 20
    }
  },
  methods: {
    onLoadMore () {
      this.isLoading = true
      console.log(`加载第${this.p}页数据`)
      setTimeout(() => {
        const data = Math.random() > 0.4 ? this.psize : 12  // 模拟加载数据, 每次40%概率加载完毕
        this.isLoading = false
        this.items += data
        this.endText = this.items === 0 ? '暂无数据' : `共${this.items}条数据`
        this.isEnd = data < this.psize
        this.p++
      }, 2000)
    }
  },
  created () {
    console.log('模拟加载数据, 每次40%概率加载完毕，若第一次加载完毕请刷新')
    this.onLoadMore()
  }
}
</script>

