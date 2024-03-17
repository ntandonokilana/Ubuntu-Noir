<template>
  <div class="product-grid">
    <div v-for="product in $store.state.products" :key="product.productID" class="product-card">
      <h2>{{ product.prodname }}</h2>
      <img :src="product.produrl" alt="Product Image" style="max-width: 100%; height: auto;">
      <p>Category: {{ product.category }}</p>
      <p>Price: {{ product.amount }}</p>
      <a href="#!" class="btn btn-primary add-to-cart-btn" data-mdb-ripple-init>Add to Cart</a>
      <a href="#!" class="btn btn-primary view-more-btn" data-mdb-ripple-init>View More</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      this.$store.dispatch('fetchProducts'); 
    }
  },
  mounted() {
    this.products         
  },
  methods: {}
};
</script>

<style>
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px; 
}

.product-card {
  border: 1px solid #ccc;
  padding: 20px;
}

.product-card img {
  margin-top: 10px; 
  max-height: 150px; 
  object-fit: cover; 
}

.add-to-cart-btn,
.view-more-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #ffffff;
  color: #000000;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-right: 10px; 
}

.view-more-btn:hover,
.add-to-cart-btn:hover {
  background-color: #0056b3;
}
</style>