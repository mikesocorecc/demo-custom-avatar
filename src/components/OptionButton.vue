<template>
  <button
    class="opcion"
    :style="{ border: isSelected ? '2px solid #00D3AE' : '' }"
    @click="emitChangeOption"
  >
    <div class="seleccionado" :style="{ display: isSelected ? 'block' : '' }">
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10.2568" r="10" fill="#00D3AE" />
        <path
          d="M6 10.5296L8.72708 13.2568L14.7271 7.25684"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div v-if="option.type === 'svg'" class="contenedor-svg" :style="{ 'padding-top': isSelected ? '9px' : '' }"> 
      <svg
        :width="svgWidth"
        :height="svgHeight"
        :viewBox="svgViewBox"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        v-html="option.value"
      ></svg>
    </div>
    <div v-else-if="option.type === 'color'" class="contenedor-color" :style="{ backgroundColor: `${option.value}` }"></div>
  </button>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
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
  computed: {
    isSelected() {
      return this.selectedOption === this.option.name
    }
  },
  methods: {
    emitChangeOption() {
      this.$emit('changeOption', this.option.name)
    }
  }
}
</script>

<style scoped>
.opcion {
  border: 2px solid #aeb7bd;
  border-radius: 10px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  cursor: pointer;
}
@media only screen and (min-width: 768px) {
  .opcion { 
    height: 197px; 
  }
}
.seleccionado {
  margin-left: auto;
  padding-right: 10px;
  padding-top: 9px;
  display: none;
}
.contenedor-svg { 
  padding:10px 10px;
}
@media only screen and (min-width: 768px) {
  .contenedor-svg {
    padding: 39px 43px;
  }
}
.contenedor-color{
  width: 102px;
  height: 102px;
  border-radius: 50%;
}
</style>
