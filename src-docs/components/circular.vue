<template>
  <div>
      <xa-circular :size="size" :color="color" :border-width="borderWidth"></xa-circular>
      <br>
      size:<input type="range" :min="10" :max="100" v-model.number="size"> {{ size }}
      <br>
      borderWidth:<input type="range" :min="1" :max="10" v-model.number="borderWidth"> {{ borderWidth }}
      <br>
      color: <input type="color" v-model="color">
  </div>
</template>

<script>
export default {
  data () {
    return {
      size: 24,
      borderWidth: 2,
      color: '#ff0000'
    }
  }
}
</script>

