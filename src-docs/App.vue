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
  background:linear-gradient(to right, #41B883 0px, #41B883 2px, transparent 2px, transparent 4px),linear-gradient(to bottom, #41B883 0px, #41B883 2px, transparent 2px, transparent 4px);
  background-size:4px 2px, 2px 4px;
  -webkit-mask: url(./assets/logo.png) center/100%;
}
</style>
