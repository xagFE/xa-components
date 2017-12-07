<template>
  <div>
    <xa-popup-confirm v-model="isShowPopup" @confirm="onConfirm">
      <div slot="title" class="xa-txt-red">确认删除？</div>
      <div slot="desc" style="text-align: left;">该操作不可逆，删除后，用户将无法访问该文章，请谨慎操作，若坚持删除，请继续！</div>
    </xa-popup-confirm>
    <xa-button class="xa-bg-blue" :radius="4" width="200px"  @click.native="isShowPopup = true">弹</xa-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowPopup: false
    }
  },
  methods: {
    onConfirm () {
      this.$toast.show('已成功删除该文章', 3000)
      this.isShowPopup = false
    }
  }
}
</script>
