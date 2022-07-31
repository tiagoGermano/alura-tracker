<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <tc-cronometro :tempoEmSegundos="timeInSeconds" />
        <button class="button" @click="start" :disabled="isRunning">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="stop" :disabled="!isRunning">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>    
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import tcCronometro from './Cronometro.vue'

export default defineComponent({
    name: 'tc-temporalizador',
    components: {
        tcCronometro
    },
    emits: ['onFinished'],
    data: () => {
        return {
        timeInSeconds: 0,
        intervalID: -1,
        isRunning: false,
        };
    }, 
    methods: {
        start() {
            this.isRunning = true;
            this.intervalID = setInterval(() => {
                this.timeInSeconds += 1;
            }, 1000);
        },
        stop() {
            this.isRunning = false;
            clearInterval(this.intervalID);
            this.$emit('onFinished', this.timeInSeconds);
            this.timeInSeconds = 0;
        },
    },
})

</script>