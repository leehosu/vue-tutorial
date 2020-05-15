<template>
  <div id="app">
    <span @click = "go('/')"> main </span>
    <span @click = "go('/news')"> news </span>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods : {
    go (targetName) {
      this.$router.push(targetName)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left:50px;
}
</style>
