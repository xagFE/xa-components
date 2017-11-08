<template>
<div style="border:1px solid #ccc;padding:0 20px;">
    <xa-picker v-model="value" :items="items" :count="5"></xa-picker>
</div>
</template>

<script>
export default {
  data () {
    return {
      value: 'B',
      items: [
        {key: '选项A', value: 'A'},
        {key: '选项B', value: 'B'},
        {key: '选项C', value: 'C'},
        {key: '选项D', value: 'D'},
        {key: '选项E', value: 'E'},
        {key: '选项F', value: 'F'},
        {key: '选项G', value: 'G'},
        {key: '选项H', value: 'H'},
        {key: '选项I', value: 'I'},
        {key: '选项J', value: 'J'},
        {key: '选项K', value: 'K'}
      ]
    }
  }
}
</script>

