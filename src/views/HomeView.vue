<template>
  <div class="home">
    <h1 class="title">Ubuntu Noir</h1>   
    <p class="subtitle">Where Creativity Meets Community!</p> 
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home {
  background-image: url('https://i.ibb.co/BttXnmy/aziz-acharki-Zf14-Bck-A1-JA-unsplash.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-size: 4em; 
  color: white;
  animation: fadeInDown s ease-out; 
}

.subtitle {
  font-size: 2em; 
  color: white;
  animation: fadeInUp 4s ease-out; 
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
