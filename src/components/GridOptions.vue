<template>
  <div :class="['grid-opciones', type]">
    <OptionButton
      v-for="option of options"
      :key="option.name"
      :option="option"
      :selectedOption="selectedOption"
      @changeOption="changeOption"
      :svgWidth="svgWidth"
      :svgHeight="svgHeight"
      :svgViewBox="svgViewBox"
    />
  </div>
</template>

<script>
import OptionButton from './OptionButton.vue'

export default {
  components: {
    OptionButton
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true
    },
    selectedOption: {
      type: String,
      required: true
    },
    svgWidth: {
      type: [String, Number],
      default: 93
    },
    svgHeight: {
      type: [String, Number],
      default: 102
    },
    svgViewBox: {
      type: String,
      default: '101 130 177 157'
    }
  },
  methods: {
    changeOption(optionName) {
      this.$emit('update:selectedOption', optionName)
    }
  }
}
</script>

<style scoped>
.grid-opciones {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 15px;
  gap: 20px;
  /* height: 400px;
  overflow-y: scroll; */
}
</style>
