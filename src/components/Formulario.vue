<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="description"
        />
      </div>
      <div class="column">
        <tc-temporalizador @onFinished="finishTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import tcTemporalizador from "./Temporalizador.vue";

export default defineComponent({
  name: "TrackerFormulario",
  components: {tcTemporalizador},
  emits : ['onFinish'],
  data () {
    return {
      description: ''
    }
  },
  methods: {
    finishTask(elapsedTime : number): void {
      this.$emit('onFinish', {
        description: this.description,
        duration: elapsedTime,
      });
      
      this.description = '';
    }
  }
});
</script>
<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>