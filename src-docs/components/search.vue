<template>
  <div>
    <xa-search @search="onSearch" v-model="keyword"></xa-search>
    <xa-dropdown :items="filters" v-model="filter"></xa-dropdown>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keyword: '',
      filter: '1',
      filters: [
        {key: '下拉选项一', value: 1},
        {key: '下拉选项二', value: 2},
        {key: '下拉选项三', value: 3},
        {key: '下拉选项四', value: 4},
        {key: '下拉选项五', value: 5}
      ]
    }
  },
  methods: {
    onSearch () {
      this.$toast.show(`正在搜索${this.keyword}...`, 3999)
      console.log('search: ', this.keyword)
    }
  }
}
</script>
