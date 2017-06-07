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
html,body{margin:0;height:100%;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  overflow:auto;
}
#app>.logo{
  background-image: linear-gradient(-45deg, #41B883 40%, white 50%, #41B883 60%);
  background-color:#41B883;
  background-repeat: no-repeat;
  -webkit-mask: url(./assets/logo.png) center/100%;
  animation: updown infinite 5s linear;
}
@keyframes updown{
  0% {
    background-position: -40px -40px;
  }
  100% {
    background-position: 40px 40px;
  }
}
</style>
