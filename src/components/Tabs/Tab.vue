<template>
  <div v-if="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    this.$parent.registerTab(this)
  }
}
</script>
