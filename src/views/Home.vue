<script>
</script>

<template>
  <div class="start">
    <h1>
      Start working with ReGit
    </h1>
    <a ref="sign-up">
      <h1 class="highlighted-text">
        NOW
      </h1>
    </a>

    <v-responsive
        min-width="344"
        style="margin-bottom: 1vh; padding: 1vh"
    >
      <v-text-field
          rounded="lg"
          label="Enter your email"
          variant="outlined"
      >
      </v-text-field>
    </v-responsive>
    <v-btn
        rounded="xl"
        variant="flat"
        size="x-large"
        base-color="#FF7F50FF"
    >
      SIGN UP
    </v-btn>
  </div>
</template>

<style scoped>
.start {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5vw;
}
h1 {
  font-size: 3rem;
}
h1.highlighted-text {
  color: coral;
  font-weight: bold;
  text-decoration-line: underline;
  margin-bottom: 2vh;
}
</style>