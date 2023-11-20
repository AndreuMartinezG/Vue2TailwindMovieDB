<template>
  <div id="app" class="flex flex-col h-screen customScrollBar">
    <NavBar class="flex flex-col"/>

    <div class="flex flex-grow gradient-custom justify-center">
      <router-view/>
    </div>
    
    <FooterBar class="flex flex-col" />
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

.gradient-custom {
  background: linear-gradient(to right, #4B5563 0%, #D1D5DB 20%,#D1D5DB 80%, #4B5563 100%);
}

@import './assets/customScrollBar.css';
</style>
