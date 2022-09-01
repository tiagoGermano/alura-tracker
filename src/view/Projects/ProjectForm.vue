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
import { defineComponent } from 'vue'
import useNotificator from '@/hooks/notificator'
import { SAVE_PROJECT, UPDATE_PROJECT } from '@/store/actions-types'


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
            this.store.dispatch(UPDATE_PROJECT, project)
              .then(response => {
                this.projectName = ''
                this.message.success(`Projeto ${response.data.name} foi atualizado com sucesso!`)
                this.$router.push('/projects')                
              })
          } else {
            this.store.dispatch(SAVE_PROJECT, this.projectName)
              .then(response => {
                this.projectName = ''
                this.message.success(`Projeto ${response.data.name} foi cadastrado com sucesso!`)
                this.$router.push('/projects')
              })
          }

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