<template>
  <div>
    {{ sex }} <br>
    <xa-radio v-model="sex" checked-value="man" name="sex">男</xa-radio>
    <xa-radio v-model="sex" checked-value="women" name="sex" color="#36f">女</xa-radio>
    <xa-radio v-model="sex" checked-value="other" name="sex" :color="color" :size="size" :border-width="borderWidth">其它</xa-radio>
    <br>
    尺寸 {{size}} :<input type="range" v-model.number="size" step="2" min="14" max="60">
    <br>
    borderWidth {{borderWidth}} :<input type="range" v-model.number="borderWidth" step="1" min="1" max="5">
    <br>
    颜色：<input type="color" v-model="color">
  </div>
</template>

<script>
export default {
  data () {
    return {
      sex: 'women',
      size: 24,
      color: '#ff0000',
      borderWidth: 2
    }
  }
}
</script>

