<template>
  <div id="app">
    <main-layout />
  </div>
</template>
<script>
import MainLayout from './components/MainLayout.vue';
export default {
  components:{MainLayout}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
