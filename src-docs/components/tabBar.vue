<template>
  <div class="xa-webkit-box-vertical" style="height:calc(100% - 100px);">
    <div class="xa-flex"></div>
    <xa-tab-bar ripple :items="[
      {link: '/course/index', text: '首页', default:'icon-home', unread: 0},
      {link: '/tabBar',text: '百科', default:'icon-course', unread: 12},
      {link: '/lecture/index',text: '百家', default:'icon-book', unread: 0},
      {link: '/user/index',text: '我的', default: 'icon-me', unread: -1}
    ]"></xa-tab-bar>
  </div>
</template>
