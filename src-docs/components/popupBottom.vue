<template>
  <div>
    <xa-popup-bottom v-model="isShowPopup" title="弹框标题" :sub-title="subTitle" :prevent-hide="preventHide">
      <div class="xa-bg-white">
        <div v-for="i in number" :key="i">自定义内容</div>
      </div>
      <xa-buttons slot="footer" @close="isShowPopup = false" :items="[{text: '确定'}, {text: '关闭', event: 'close', class: 'xa-bg-red'}]"></xa-buttons>
    </xa-popup-bottom>
    <div>内容高度({{number}}): <input type="range" v-model.number="number" min="5" max="50"></div>
    <div>副标题：<input type="text" v-model.trim="subTitle"></div>
    <div>
      点击阴影遮罩关闭：
      <br><input type="radio" v-model="preventHide" :value="false" name="close">是 <input type="radio" v-model="preventHide" name="close" :value="true">否
    </div>
    <br>
    <button @click="isShowPopup = true">弹</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowPopup: false,
      number: 50,
      subTitle: '这是副标题的文字',
      preventHide: false
    }
  }
}
</script>
