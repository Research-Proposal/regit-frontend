<script setup>
import { ref, computed } from 'vue'
import Dashboard from './Dashboard.vue'
import Projects from './Projects.vue'
import Tasks from './Tasks.vue'
import Settings from './Settings.vue'

const routes = {
  '/': Dashboard,
  '/projects': Projects,
  '/tasks': Tasks,
  '/settings': Settings
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>

  <header></header>

  <a href="#/">Dashboard</a> |
  <a href="#/projects">Projects</a> |
  <a href="#/tasks">My Tasks</a> |
  <a href="#/settings">Settings</a> |
  <component :is="currentView" />

  <main></main>

</template>

<style scoped></style>
