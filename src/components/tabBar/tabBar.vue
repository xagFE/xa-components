<template>
  <div class="xa-tabbar xa-webkit-box">
    <router-link v-for="item in items" key="item.link" :to="{path: item.link}" :replace="item.replace !== false" class="xa-tabbar-item" :class="{'read':item.unread && item.unread<0}" active-class="active">
        <figure>
        	<i class="iconfont xa-txt-20" :class="[item.default]"></i>
          <figcaption class="figure-caption xa-txt-ellipsis">{{ item.text }}</figcaption>
        </figure>
		    <div v-if="item.unread && item.unread>0" class="xa-tabbar-unread">{{item.unread}}</div>
        <ripple v-if="ripple" color="rgba(100,100,100,0.1)"></ripple>
    </router-link>
  </div>
</template>

<script>
import ripple from '../ripple'
export default {
  components: {ripple},
  props: {
    items: Array,
    ripple: Boolean
  }
}
</script>

<style scoped>
.xa-tabbar{display:flex;border-top:1px solid #e4e4e4;position:relative;width:100%;}
.xa-tabbar-item{flex:1;position:relative;padding:4px 0 1px 0;color:#818a91;text-decoration:none;width:33.33%;display:block;}
.xa-tabbar-item.active{color:#46B238;}
.xa-tabbar-item figure{margin:0;}
.xa-tabbar-item .figure-caption{font-size:12px;}
.xa-tabbar-item>figure>i{color:inherit;line-height:24px;display:block;}
.xa-tabbar-item.read:before{content:"";position:absolute;right:28px;top:3px;height:7px;width:7px;background:#FF3E3E;border-radius:50%;}
.xa-tabbar-unread{position:absolute;left:50%;top:2px;margin-left:5px;height:16px;min-width:16px;background-color:#FF3E3E;border-radius:8px;padding:0 4px;text-align:center;line-height:17px;font-size:10px;color:white;}
</style>
