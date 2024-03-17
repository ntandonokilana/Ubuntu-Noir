<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
    <Spinner v-if="loading"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Spinner from './components/Spinner.vue';

export default {
  components: {
    Navbar,
    Footer,
    Spinner
  },
  data() {
    return {
      loading: true,
    };
  }
};
</script>

<style>
#app {
  font-family: Times New Roman, Times, serif, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333; /* Adjust text color */
  min-height: 100vh;
  background-color: #f5f5f5; /* Lighter background color */
  padding-bottom: 50px; /* Add padding to ensure footer doesn't overlap content */
  overflow-y: auto; /* Allow scrolling if content overflows */
}
</style>
