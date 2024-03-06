<template>
  <Navbar/>
  <Footer/>
  <Spinner/>

  <router-view/>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
  import Spinner from './components/Spinner.vue'
  export default{
    components:{
      Navbar,
      Footer,
      Spinner
    },
    data() {
    return {
      loading: true,
    };
  },
    
  }
</script>
<style>
#app {
  font-family: Times New Roman, Times, serif, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fdfdfd;
  background-image: url("https://i.ibb.co/D42n51W/alexander-dummer-a-S4-Duj2j7r4-unsplash.jpg");
  min-height: 100vh;

}

</style>