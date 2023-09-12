<template>
  <div>
    <div :class="categoriasClass">
      <button
        v-for="tab in tabs"
        :key="tab.label"
        :class="['opcion', opcionClass, { activo: tab.isActive }]"
        @click="selectTab(tab)"
      >
        {{ tab.label }}
      </button>
    </div>
    <hr :class="lineaDivisoraClass" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    categoriasClass: {
      type: String,
      default: 'categorias'
    },
    opcionClass: {
      type: String,
      default: 'opcion'
    },
    lineaDivisoraClass: {
      type: String,
      default: 'linea-divisora'
    }
  },
  data() {
    return {
      tabs: []
    }
  },
  methods: {
    registerTab(tab) {
      if (this.tabs.length === 0) {
        tab.isActive = true
      }
      this.tabs.push(tab)
    },
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab === selectedTab
      })
    }
  }
}
</script>
<style scoped>
.categorias {
  display: flex;
  justify-content: space-between;
  margin-top: 19.21px;
}
.opcion {
  cursor: pointer;
  padding: 10px 38px 10px 38px;
  font-weight: bold;
  border-radius: 30px;
  border: 1px solid #ffaa01;
  color: #ffaa01;
}
.opcion.activo {
  background-color: #ffaa01;
  color: #ffffff;
}
.linea-divisora {
  margin-top: 16px;
  border: 1px solid #ffaa01;
}
</style>
