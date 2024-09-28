<template>
  <h1>My Account</h1>
  <v-divider class="divider"></v-divider>

  <v-container>
  <v-row>

    <v-col cols="8">
      <v-card-title>
        <v-row align="center">
          <v-col cols="auto">
            <v-icon large>mdi-account</v-icon>
          </v-col>
          <v-col>
            <h2>{{ user.name }}</h2> 
            <p class="small-text">id: {{ user.id }}</p>
            <p class="small-text">email: {{ user.email }}</p>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-actions>
        <v-btn prepend-icon="mdi-cog">Account Settings</v-btn>
      </v-card-actions>
    </v-col>

    <v-col cols="4">
      <v-card-subtitle>
        <h2>Bio:</h2>
      </v-card-subtitle>

      <v-list>
        <v-list-item>{{ user.bio }}</v-list-item>
      </v-list>
    </v-col>

    <v-divider class="divider"></v-divider>

    <v-col cols="4">
      <v-card-subtitle>
        <h2>Projects:</h2>
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
    </v-col>

  </v-row>
</v-container>

</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Masha Spermochka',
        id: '228',
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

<style scoped>
  .divider {
    margin-top: 50px;
    margin-bottom: 20px;
  }
</style>
