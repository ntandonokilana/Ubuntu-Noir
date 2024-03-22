<template>
  <div class="product-page">
    <div class="product-filter">
      <label for="category-select">Category:</label>
      <select id="category-select" v-model="selectedCategory">
        <option value="all">All</option>
        <option value="photo">Photo</option>
        <option value="audio">Audio</option>
        <option value="video">Video</option>
      </select>
    </div>
    <div class="product-grid">
      <div v-for="product in filteredProducts" :key="product.productID" class="product-card">
        <img :src="product.produrl" alt="Product Image" class="product-image">
        <div class="product-details">
          <h2 class="product-title">{{ product.prodname }}</h2>
          <p>Category: {{ product.category }}</p>
          <p>Price: {{ product.amount }}</p>
          <div class="product-buttons">
            <a href="#!" class="btn btn-primary add-to-cart-btn" data-mdb-ripple-init>Add to Cart</a>
            <a href="#!" class="btn btn-primary view-more-btn" data-mdb-ripple-init>View More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: 'all'
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    filteredProducts() {
      if (this.selectedCategory === 'all') {
        return this.products;
      } else {
        return this.products.filter(product => product.category === this.selectedCategory);
      }
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts'); // Ensure products are fetched when component is mounted
  },
  methods: {}
};
</script>

<style scoped>
.product-page {
  padding-top: 20px; 
}

.product-filter {
  margin-bottom: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 30px;
  margin: auto;
}

.product-card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  border-radius: 5px;
}

.product-title {
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 10px;
}

.product-details p {
  font-size: 1rem;
  margin: 5px 0;
}

.product-buttons {
  margin-top: 10px;
}

.add-to-cart-btn,
.view-more-btn {
  display: inline-block;
  padding: 8px 16px;
  background-color: #0056b3;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-right: 10px;
}

.view-more-btn:hover,
.add-to-cart-btn:hover {
  background-color: #004080;
}
</style>
