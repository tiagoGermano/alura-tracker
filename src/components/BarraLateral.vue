<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="alura-tracker logo" />
    </h1>
    <span class="dark-theme-switch" @click="togleModoNoturno">
      <i class="switch-icon fa-regular fa-moon"></i>
      <span class="switch-caption">Modo Noturno</span>
    </span>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'BarraLateral',
    emits: ['onTogleModoNoturno'],
    data () {
      return {
        modoNoturnoActive: false,
      }
    },
    methods : {
      togleModoNoturno() {
        this.modoNoturnoActive = !this.modoNoturnoActive;
        this.$emit('onTogleModoNoturno', this.modoNoturnoActive);
      }
    }
});

</script>

<style scoped>
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
}
@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}

.dark-theme-switch {
  display: block;
  color: aliceblue;
  border: 1px solid #b5b5b5;
  border-radius: 6px;
  margin-top: 18px;
  text-align: center;
  font-size: 18px;
  width: 160px;
  cursor: pointer;
}

.switch-icon {
  padding: 12px;
  display: block;  
  font-size: 24px;
}

.switch-caption{
  display: block;
  padding-bottom: 8px;
}

</style>
