<script setup>
import NavigationBar from "@/components/NavigationBar.vue";
</script>

<template>
  <v-app>
    <NavigationBar></NavigationBar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
.v-main {
  padding-top: 10vh;
  //width: 100vw;
}
* {
  background-color: #f5f2ee;
}
</style>
