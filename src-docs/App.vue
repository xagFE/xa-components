<template>
  <div id="app">
    <div class="logo" style="height:80px;width:80px;display:block;margin:10px auto;"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body{margin:0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app>.logo{
  background-image:-webkit-linear-gradient(top,#35495E,#41B883);
  -webkit-mask: url(./assets/logo.png) center/100%;
  animation: updown infinite 8s ease-in-out;
  animation-direction:alternate;
}
@keyframes updown{
  100%{background-position: 0 80px;}
}
</style>
