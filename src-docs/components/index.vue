<template>
  <xa-cells class="border-top">
      <xa-cell v-for="(item,ix) in routes" key="name" :link="{name:item.name}" :title="item.name" :desc="item.meta.desc" right arrow></xa-cell>
  </xa-cells>
</template>

<script>
import { routes } from '../router'

export default {
  data () {
    return {
      routes: routes.filter(item => {
        return item.name !== 'index' && item.name !== 'cells'
      }).sort((a, b) => {
        return a.name > b.name ? '1' : '-1'
      })
    }
  }
}
</script>
