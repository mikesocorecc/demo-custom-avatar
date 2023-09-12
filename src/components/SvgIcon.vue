<script>
import { defineAsyncComponent } from 'vue'

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    dynamicComponent() {
      const name = this.name
      return defineAsyncComponent(() => import(`../assets/shirts/${name}.svg?component`))
    }
  }
}
</script>

<template>
  <component :is="dynamicComponent" />
</template>
