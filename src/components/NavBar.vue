<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  display: flex;
  flex-flow: row;
  justify-content: center;
  padding: 1vw;
}

a {
  margin: 0.5vw;
}
</style>
