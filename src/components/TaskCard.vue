<template>
  <content-box>
    <div class="columns">
      <div class="column is-7">{{ task.description || 'Tarefa sem descrição' }}</div>
      <div class="column">
        {{new Date(task.duration * 1000).toISOString().substr(11,8)}}
      </div>
    </div>
  </content-box>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ITask from '../interfaces/ITask'
import ContentBox from './ContentBox.vue';

export default defineComponent({
    name: 'taskCard',
    components: {ContentBox},
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true,
        }
    }
})
</script>
