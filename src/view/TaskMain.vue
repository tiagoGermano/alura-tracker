<template>
  <TrackerFormulario @onFinish="updateTasksList" />
  <div class="lista">
    <TaskCard v-for="(task, index) in tasks" :key="index" :task="task" />
    <ContentBox v-if="tasks.length === 0"> No task saved </ContentBox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TrackerFormulario from "../components/Formulario.vue";
import TaskCard from "../components/TaskCard.vue";
import ContentBox from "../components/ContentBox.vue";
import ITask from "@/interfaces/ITask";

export default defineComponent({
  name: "taskMain",
  components: { TrackerFormulario, TaskCard, ContentBox },
  data () {
    return {
      tasks: [] as ITask[],
    }
  },
  methods: {
    updateTasksList(task: ITask): void {
      this.tasks.push(task);
    },
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
</style>