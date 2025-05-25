<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWidth);
});
</script>

<template>
  <v-app-bar
      :elevation="0"
      style="background-color: #ffdfcc;
                 height: 10vh;
                 display: flex;
                 justify-content: center;
                 padding: 0 10vw 0"
  >
    <v-app-bar-title>
      <v-app-bar-nav-icon
          icon="mdi-shark-fin"
      >
      </v-app-bar-nav-icon>
      <span
          v-if="windowWidth >= 500">
        <a href="/">
          ReGit
        </a>
      </span>
    </v-app-bar-title>
    <v-btn to="/about">
      About
    </v-btn>
    <v-btn to="/login">
      Sign In
    </v-btn>
    <v-btn icon
           style="margin-left: 3vw"
    >
      <v-icon icon="mdi-magnify"></v-icon>
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
</style>