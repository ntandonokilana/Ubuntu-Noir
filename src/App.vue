<template>
  <div id="app">
    <Navbar/>
    <router-view class="view-content"/>
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
  color: #333; 
  min-height: 100vh;
  /* background-color: #f5f5f5;  */
  /* background-image: url('https://i.ibb.co/mFw0JLf/vintage-photography.jpg'); */
  padding-bottom: 50px; 
  overflow-y: auto; 
}

.view-content {
  margin-top: 20px; /* Adjust as needed */
}

</style>
