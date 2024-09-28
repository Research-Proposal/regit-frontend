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

  <v-app>
    <v-navigation-drawer>
      <v-list-item 
      link
      title="Dashboard"
      prepend-icon="mdi-view-dashboard"
      ></v-list-item>
      <v-list-item 
      link
      title="Projects"
      prepend-icon="mdi-folder"
      ></v-list-item>
      <v-list-item 
      link
      title="My Tasks"
      prepend-icon="mdi-folder"
      ></v-list-item>
      <v-list-item 
      link
      title="Account"
      prepend-icon="mdi-account-box"
      ></v-list-item>
    </v-navigation-drawer>

    <v-app-bar title="App bar"></v-app-bar>

    <v-main>
      <v-container>
        <h1>Main Content</h1>
      </v-container>
    </v-main>

  </v-app>

  <!-- <a href="#/">Dashboard</a> |
  <a href="#/projects">Projects</a> |
  <a href="#/tasks">My Tasks</a> |
  <a href="#/settings">Settings</a> | -->

  <component :is="currentView" />
  
</template>

<style scoped></style>
