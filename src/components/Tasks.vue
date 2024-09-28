<template>
  <h1>My Tasks</h1>
  <v-divider class="divider"></v-divider>

  <v-list>
    <v-list-item>
    <v-card
          :variant="variant"
          class="mx-auto"
          max-width="344"
          color="#F5F5F5"
          subtitle="Greyhound divisely hello coldly fonwderfully"
          title="Headline"
        >
          <template v-slot:actions>
            <v-select :items="items"></v-select>
      <v-btn icon="mdi-delete"></v-btn>
          </template>
    </v-card>
    </v-list-item>
    <v-list-item>
    <v-card
          :variant="variant"
          class="mx-auto"
          max-width="344"
          color="#F5F5F5"
          subtitle="Greyhound divisely hello coldly fonwderfully"
          title="Headline"
        >
          <template v-slot:actions>
            <v-select :items="items"></v-select>
      <v-btn icon="mdi-delete"></v-btn>
          </template>
    </v-card>
    </v-list-item>
</v-list>
  
</template>

<script>
export default {
  data: () => ({
    items: ["In progress", "Done"],
  }),
};
</script>

<style scoped>
  .divider {
    margin-top: 50px;
    margin-bottom: 20px;
  }
</style>
