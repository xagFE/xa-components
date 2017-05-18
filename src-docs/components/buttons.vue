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
    <xa-buttons @confirm="onConfirm" @cancel="onCancel" :items="[{text:'确定',event:'confirm'},{text:'取消', class:'xa-bg-orange', event:'cancel'}]"></xa-buttons>
    <br>
    <xa-buttons @confirm="onConfirm" @cancel="onCancel" :radius="4" :items="[{text:'确定',event:'confirm'},{text:'取消', class:'xa-bg-red', event:'cancel', width:'30%'}]"></xa-buttons>
    
    <br>
    <xa-button @onclick="onBtnClick" ripple="rgba(255,255,255,0.3)" :radius="0" width="200px" class="xa-bg-blue" event="onclick">这个是独立按钮</xa-button>
  </div>
</template>

<script>
export default {
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
