<template>
  <div>
    {{ query.select1 }}
    <xa-tab v-model="query.select1" :items="items1" :line-height="2"></xa-tab>
    
    <br>
    {{ query.select }}
    <xa-tab style="background-color:#f2f2f2;font-size:14px;" v-model="query.select" model="val" :items="items" :line-height="option.height" :color="option.color"></xa-tab>
    <br>
    height: <input type="range" min="1" max="6" v-model.number="option.height">{{ option.height +'px'}}<br>
    color: <input type="color" v-model="option.color">
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: {
        select: 'second',
        select1: 0
      },
      option: {
        height: 3,
        color: '#FFA500'
      },
      items: [
          {text: 'value值', val: 'first'},
          {text: '选项', val: 'second'},
          {text: '选项', val: 'third'},
          {text: '选项', val: 'forth'}
      ],
      items1: [
          {text: '索'},
          {text: '引'},
          {text: '值'}
      ]
    }
  }
}
</script>
