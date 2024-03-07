<template>
    <div class="product-grid">
      <div v-for="product in $store.state.products" :key="product.prodID" class="product-card">
        <h2>{{ product.prodname }}</h2>
        <p>Price: {{ product.category }}</p>
        <p>Category: {{ product.amount }}</p>
        <img :src="product.prodUrl" alt="Product Image" style="max-width: 100%; height: auto;">
      </div>
    </div>
  </template>
<script>

</script>
<style>
    
</style>