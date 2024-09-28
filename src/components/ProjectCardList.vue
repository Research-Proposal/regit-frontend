<template>
  <ol>
    <li v-for="project in projects" :key="project.title">
      <v-card class="mx-auto my-8" elevation="16" max-width="344">
        <v-card-item>
          <v-card-title>
            {{ project.title }}
            {{ project.owner }}
          </v-card-title>
          <v-card-subtitle>
            Card subtitle secondary text
          </v-card-subtitle>
        </v-card-item>
        <v-card-text>
          {{ project.description }}
          <div>
            Contributors:
            <span v-for="(contributor, index) in project.contributors" :key="index">
              {{ contributor }}<span v-if="index < project.contributors.length - 1">, </span>
            </span>
          </div>
        </v-card-text>
      </v-card>
    </li>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Research Proposal",
          description: "The greatest project",
          owner: "@Vazir",
          contributors: ["@Sergey", "@Vadim", "@Amir", "@Nastya"],
          created_at: Date(8.64e15),
          tasks: ["task1", "task2", "task3", "task4"],
        },
        {
          title: "Shopping map app",
          description: "University swp course project",
          owner: "@Mansur",
          contributors: ["@Sergey", "@Vadim", "@Vazir", "@Nastya"],
          created_at: Date(8.63e15),
          tasks: ["task1", "task2"],
        },
        {
          title: "TG BOT",
          description: "Shop bot",
          owner: "@Sergey",
          contributors: ["@Max", "@Lev"],
          created_at: Date(8.64e12),
          tasks: ["task1", "task2"],
        },
      ],
    };
  },
};
</script>

<style>
ol {
  list-style-type: none;
}
</style>
