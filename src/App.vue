<template>
  <div id="app" class="flex flex-col h-screen">
    <NavBar/>
    <div class="flex flex-grow bg-blue-200">
      <router-view/>
    </div>
    <FooterBar />
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';

export default {
  components: {
    NavBar,
    FooterBar,
  }
}

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
