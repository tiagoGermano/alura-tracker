<template>
  <section class="projetos">
    <h1 class="title">Projects</h1>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'projectMain'
})
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>