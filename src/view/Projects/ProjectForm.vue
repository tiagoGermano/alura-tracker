<template>
  <section>
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
  </section>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { ADD_PROJECT, UPDATE_PROJECT } from '@/store/mutation-types'
import { defineComponent } from 'vue'
import useNotificator from '@/hooks/notificator'


export default defineComponent({
    name: 'ProjectForm',
    data () {
        return {
            projectName: ''
        }
    },
    props: {
      id : {
        type: String,
        default: ''
      }
    },
    mounted () {
      if(this.id) {
        const project = this.store.state.projects.find(proj => proj.id == this.id)
        this.projectName = project?.name || ''
      }
    },
    methods: {
        save() {

          if (this.id) {
            const project = {
              id: this.id,
              name: this.projectName
            }
            this.store.commit(UPDATE_PROJECT, project)
          } else {
            this.store.commit(ADD_PROJECT, this.projectName)
          }

          this.projectName = ''
          this.message.success('O projeto foi cadastrado com sucesso!')
          this.$router.push('/projects')
        }
    },
    setup() {
      const store = useStore();
      const { message } = useNotificator()
      return {
        store,
        message
      }
    }
})
</script>