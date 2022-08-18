<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-5"
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
      <div class="column is-3">
        <div class="select">
          <select v-model="projectId">
            <option value="">Select the project</option>
            <option
              :value="project.id"
              v-for="project in projects"
              :key="project.id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>      
      <div class="column">
        <tc-temporalizador @onFinished="finishTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import tcTemporalizador from "./Temporalizador.vue";
import { useStore } from 'vuex';
import { key } from '@/store'

export default defineComponent({
  name: "TrackerFormulario",
  components: {tcTemporalizador},
  emits : ['onFinish'],
  data () {
    return {
      description: '',
      projectId: '',
    }
  },
  setup () {
    const store = useStore(key)
    return {
      projects : computed(() => store.state.projects)
    }
  },
  methods: {
    finishTask(elapsedTime : number): void {
      this.$emit('onFinish', {
        description: this.description,
        duration: elapsedTime,
        project: this.projects.find(p => p.id === this.projectId)
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