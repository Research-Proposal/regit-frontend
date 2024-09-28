<script setup>
import { ref, computed } from "vue";
import Dashboard from "./Dashboard.vue";
import Projects from "./Projects.vue";
import Tasks from "./Tasks.vue";
import Account from "./Account.vue";

const routes = {
  "/": Dashboard,
  "/projects": Projects,
  "/tasks": Tasks,
  "/account": Account,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] || NotFound;
});
</script>

<template>
  <v-app>
    <v-navigation-drawer>
      <a href="#/">
        <v-list-item
          link
          title="Dashboard"
          prepend-icon="mdi-view-dashboard"
        ></v-list-item>
      </a>
      <a href="#/projects">
        <v-list-item
          link
          title="Projects"
          prepend-icon="mdi-folder"
        ></v-list-item>
      </a>
      <a href="#/tasks">
        <v-list-item
          link
          title="My Tasks"
          prepend-icon="mdi-folder"
        ></v-list-item>
      </a>
      <a href="#/account">
        <v-list-item
          link
          title="Account"
          prepend-icon="mdi-account-box"
        ></v-list-item>
      </a>
    </v-navigation-drawer>

    <v-app-bar title="App bar"></v-app-bar>

    <v-main>
      <v-container>
        <component :is="currentView" />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
a {
  color: darkorange;
}
</style>
