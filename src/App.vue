<script setup>
import { ref, computed } from "vue";
import Projects from "./components/Projects.vue";
import Tasks from "./components/Tasks.vue";
import Account from "./components/Account.vue";

const routes = {
  "/": Account,
  "/projects": Projects,
  "/tasks": Tasks
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
          title="ACCOUNT"
          prepend-icon="mdi-account-box"
        ></v-list-item>
      </a>
      <a href="#/tasks">
        <v-list-item
          link
          title="TASKS"
          prepend-icon="mdi-bookmark-multiple"
        ></v-list-item>
      </a>
      <a href="#/projects">
        <v-list-item
          link
          title="PROJECTS"
          prepend-icon="mdi-folder"
        ></v-list-item>
      </a>
    </v-navigation-drawer>

    <v-app-bar>
      <v-col cols="8" md="2">
        <v-text-field
          :loading="loading"
          append-inner-icon="mdi-magnify"
          density="compact"
          label="Search"
          variant="solo"
          hide-details
          single-line
          @click:append-inner="onClick"
        ></v-text-field>
      </v-col>
    </v-app-bar>

    <v-main>
      <v-container>
        <component :is="currentView" />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
