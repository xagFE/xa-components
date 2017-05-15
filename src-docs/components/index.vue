<template>
  <xa-cells class="border-top">
      <router-link :to="{name:item.name}" v-for="(item,ix) in routes" key="name">
        <xa-cell :title="item.name" right arrow></xa-cell>
      </router-link>
  </xa-cells>
</template>

<script>
import { routes } from '../router'

export default {
  data () {
    return {
      routes: routes.filter(item => {
        return item.name !== 'index'
      })
    }
  }
}
</script>
