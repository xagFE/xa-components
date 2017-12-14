<template>
  <div>
    <xa-popup v-model="isShowPopup" :from="from">
      自定义内容
      <div style="height:40px;color:white;">
        <button @click="from='top'">上</button>
        <button @click="from='bottom'">下</button>
        <button @click="from='center'">中</button>
        <button @click="from='left'">左</button>
        <button @click="from='right'">右</button>
      </div>
      <div v-for="item in 50" :key="item">{{ item }}</div>
    </xa-popup>
    <button @click="isShowPopup=true">点击弹框</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowPopup: false,
      from: 'center'
    }
  }
}
</script>
