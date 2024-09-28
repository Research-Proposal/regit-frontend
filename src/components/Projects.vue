<template>
  <h1>My Projects</h1>
  <v-divider class="divider"></v-divider>
  <project-card-list/>
</template>

<script>
import ProjectCardList from "./ProjectCardList.vue";

export default {
  components: {ProjectCardList},
}
</script>

<style>
.divider {
  margin-top: 50px;
  margin-bottom: 20px;
}
</style>

