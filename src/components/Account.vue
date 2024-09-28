<template>
  <h1>My Account</h1>
  <v-divider></v-divider>

  <v-container class="account">
    <v-card>
      <v-card-title>
        <v-row>
          <v-col>
            <h2>{{ user.name }}</h2>
            <p>Email: {{ user.email }}</p>
            <p>{{ user.bio }}</p>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-subtitle>
        <h3>Projects:</h3>
      </v-card-subtitle>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="project in user.projects" :key="project.id">
            <v-list-item-content>
              <v-list-item-title>{{ project.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>

</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Masha Spermochka',
        email: 'sperma@example.com',
        bio: 'Sestrenka Vadima.',
        projects: [
          { id: 1, name: 'Project A'},
          { id: 2, name: 'Project B'},
          { id: 3, name: 'Project C'},
        ],
      },
    };
  },
};
</script>

<style scoped></style>
