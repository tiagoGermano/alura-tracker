<template>
  <main class="columns is-gapless is-multiline " :class="{'modo-escuro' : modoNoturno}">
    <div class="column is-one-quarter">
      <BarraLateral @onTogleModoNoturno="changeStyle"/>
    </div>
    <div class="column is-three-quarter conteudo">
        <TrackerFormulario @onFinish="updateTasksList"/>
        <div class="lista">
          <task-card v-for="(task, index) in tasks" :key="index" :task="task" />
          <content-box v-if="tasks.length === 0">
            No task saved
          </content-box>
        </div>
    </div>
  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import TrackerFormulario from './components/Formulario.vue';
import TaskCard from './components/TaskCard.vue';
import ContentBox from './components/ContentBox.vue'
import ITask from './interfaces/ITask';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    TrackerFormulario,
    TaskCard,
    ContentBox,
  },
  data () {
    return {
      tasks: [] as ITask[],
      modoNoturno : false,
    }
  },
  methods : {
    updateTasksList(task: ITask): void {
      this.tasks.push(task);
    },
    changeStyle(modoNoturno:boolean): void {
      this.modoNoturno = modoNoturno;
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>