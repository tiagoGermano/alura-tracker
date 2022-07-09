<template>
  <div class="box">
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
        />
      </div>
      <div class="column">
        <div
          class="is-flex is-align-items-center is-justify-content-space-between"
        >
          <section>{{progressTime}}</section>
          <button class="button" @click="start">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button" @click="stop">
            <span class="icon">
              <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TrackerFormulario",
  data: ()=>{
    return {
        timeInSeconds : 0,
        intervalID : -1
    }
  },
  computed: {
    progressTime() : string {
        return new Date(this.timeInSeconds * 1000).toISOString().substr(11,8)
    }
  },
  methods: {
    start(){
        this.intervalID = setInterval(() => {
            this.timeInSeconds +=1;
        }, 1000);
    },
    stop(){
        clearInterval(this.intervalID);
    }
  }
});
</script>
