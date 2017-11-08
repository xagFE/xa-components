<template>
  <div>
    <xa-buttons @confirm="onConfirm" @cancel="onCancel" :radius="21" 
      :items="[
        {text:'确定',event:'confirm',ripple:'rgba(255,255,255,0.3)'},
        {text:'取消', class:'xa-bg-red', event:'cancel',ripple:'rgba(255,255,255,0.3)'},
        {text:'撤退', class:'xa-bg-black',ripple:'rgba(255,255,255,0.3)'}
      ]">
    </xa-buttons>
    <br>
    <xa-buttons style="border-top:1px solid #f2f2f2;border-bottom:1px solid #f2f2f2;"
      :items="[
        {text: '确定', class:'xa-bg-white', ripple: 'rgba(0, 0, 0, 0.1)'},
        {text: '取消', class:'xa-bg-white', ripple: 'rgba(0, 0, 0, 0.1)'},
        {text: '撤退', class:'xa-bg-blue', ripple:'rgba(255, 255, 255, 0.3)'}
      ]">
    </xa-buttons>
    <br>
    <xa-buttons @confirm="onConfirm" @cancel="onCancel" :items="[{text:'按钮组',event:'confirm'},{text:'取消', class:'xa-bg-orange', event:'cancel'}]"></xa-buttons>
    <br>
    <xa-button @onclick="onBtnClick" ripple="rgba(255,255,255,0.3)" :radius="0" width="200px" class="xa-bg-blue" event="onclick">这个是独立按钮</xa-button>
    <br>
    <br>
    <xa-buttons :radius="radius" 
      :items="[
        {text:'确定',event:'confirm', width: width+'%', ripple: 'rgba(255,255,255,0.3)'},
        {text:'取消', class:'xa-bg-red', event:'cancel', ripple: 'rgba(255,255,255,0.3)'}
      ]"></xa-buttons>
      按钮圆角:{{radius}}px <input type="range" v-model.number="radius" min="0" max="21"><br>
      确定宽度:{{width}}% <input type="range" v-model.number="width" min="20" max="80">
  </div>
</template>

<script>
export default {
  data () {
    return {
      radius: 4,
      width: 70
    }
  },
  methods: {
    onConfirm () {
      console.log('您点击了确定')
    },
    onCancel () {
      console.log('您点击了取消')
    },
    onBtnClick () {
      console.log()
    }
  }
}
</script>
