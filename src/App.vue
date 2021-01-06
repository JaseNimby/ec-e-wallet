<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  font-family: "PT Mono", monospace;
  height: 100vh;
  max-width: 24rem;
  box-sizing: border-box;
  padding: 1rem;
  margin: 0px auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
