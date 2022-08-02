<template>
  <section class="projetos">
    <h1 class="title">Projects</h1>
    <form @submit.prevent="save">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Name </label>
        <input
          type="text"
          class="input"
          v-model="projectName"
          id="nomeDoProjet"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Save</button>
      </div>
    </form>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IProject from '../interfaces/IProject'

export default defineComponent({
    name: 'projectMain',
    data () {
        return {
            projectName: '',
            projects : [] as IProject[]
        }
    },
    methods: {
        save() {
            this.projects.push({
                id: new Date().toISOString(),
                name: this.projectName,
            })
            this.projectName = ''
        }
    }
})
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>