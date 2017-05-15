<template>
  <div>
      <xa-circular :size="size" color="red" :border-width="borderWidth"></xa-circular>
      <br>
      size:<input type="range" :min="10" :max="100" v-model="size"> {{ size }}
      <br>
      borderWidth:<input type="range" :min="1" :max="10" v-model="borderWidth"> {{ borderWidth }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      size: 24,
      borderWidth: 2
    }
  }
}
</script>

