<template>
<div>
  <div style="height:250px;border:1px solid #ccc;overflow:auto;">
    <div v-for="item in items">无限滚动{{item}}</div>
    <xa-infinite-scroll @load="onLoadMore" :loading="isLoading" :end="isEnd" :end-text="endText" />
  </div>
  <br>
  分页大小 ： {{ psize }}
  <br>
  <label><input v-model.number="dataLength" :value="psize" type="radio" name="dataLength">模拟加载{{ psize }}条数据</label> <br>
  <label><input v-model.number="dataLength" value="12" type="radio" name="dataLength">模拟加载12条数据(加载结束)</label> <br>
   
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
      psize: 20,
      dataLength: 20
    }
  },
  methods: {
    onLoadMore () {
      this.isLoading = true
      console.log(`加载第${this.p}页数据`)
      setTimeout(() => {
        const data = this.dataLength
        this.isLoading = false
        this.items += data
        this.endText = this.items === 0 ? '暂无数据' : `共${this.items}条数据`
        this.isEnd = data < this.psize
        this.p++
      }, 2000)
    }
  },
  created () {
    this.onLoadMore()
  }
}
</script>

