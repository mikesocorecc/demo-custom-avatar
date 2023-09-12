<template>
  <div v-if="visible" class="alert-container">
    <div class="alert-box">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <button @click="close">Cerrar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Alerta'
    },
    message: {
      type: String,
      default: 'Mensaje de alerta'
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    show() {
      this.visible = true
    },
    close() {
      this.visible = false
      this.$emit('closed')
    }
  }
}
</script>

<style scoped>
.alert-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.alert-box {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
}

button {
  background-color: #007bff;
  border: none;
  padding: 10px 20px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  display: block;
  margin-left: auto;
}

button:hover {
  background-color: #0056b3;
}
</style>
