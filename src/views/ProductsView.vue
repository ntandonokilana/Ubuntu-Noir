<template>
  <div class="product-page">
    <div class="product-filter">
      <input type="text" v-model="searchTerm" placeholder="Search products..." class="search-input">
      <div class="sort-dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="sortDropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sort
        </button>
        <div class="dropdown-menu" aria-labelledby="sortDropdownMenuButton">
          <button class="dropdown-item" @click="sortBy('name')">Name A-Z</button>
        </div>
      </div>
    </div>
    <div class="product-grid">
      <div v-for="product in filteredProducts" :key="product.productID" class="product-card">
        <h2 class="product-title">{{ product.prodname }}</h2>
        <img :src="product.produrl" alt="Product Image" class="product-image">
        <div class="product-details">
          <p>Category: {{ product.category }}</p>
          <p>Price: {{ product.amount }}</p>
          <div class="product-buttons">
            <button @click="addToCart(product)" class="btn btn-primary add-to-cart-btn" data-mdb-ripple-init>Add to Cart</button>
            <a href="#!" class="btn btn-primary view-more-btn" data-mdb-ripple-init>View More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      selectedCategory: 'all',
      searchTerm: '',
      sortByOption: '',
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    filteredProducts() {
      let filtered = this.products;

      if (this.selectedCategory !== 'all') {
        filtered = filtered.filter(product => product.category === this.selectedCategory);
      }

      if (this.searchTerm.trim() !== '') {
        const regex = new RegExp(this.searchTerm.trim(), 'i');
        filtered = filtered.filter(product => regex.test(product.prodname));
      }

      if (this.sortByOption === 'name') {
        filtered.sort((a, b) => a.prodname.localeCompare(b.prodname));
      }

      return filtered;
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts'); 
  },
  methods: {
    async addToCart(product) {
      try {
        // Add product to cart logic 
        await this.$store.dispatch('addToCart', product);

        // Show success message using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Item Added to Cart!',
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.error('Error adding item to cart:', error);
        // Show error message using SweetAlert if necessary
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An error occurred while adding the item to the cart. Please try again later.',
        });
      }
    },
    sortBy(option) {
      this.sortByOption = option;
    }
  }
};
</script>

<style scoped>
.product-page {
  padding-top: 20px;
  background-image: url('https://i.ibb.co/n6CCRrb/henry-co-AW-P-NU9-MI8-unsplash.jpg');
}

.product-filter {
  margin-bottom: 80px;
}

.search-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.sort-dropdown {
  position: relative;
  display: inline-block;
}

.sort-dropdown .dropdown-toggle {
  background-color: #6f6848; 
  color: #fff;
  border-radius: 5px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
}

.sort-dropdown .dropdown-toggle:hover {
  background-color: #000000; 
}

.sort-dropdown .dropdown-menu {
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-radius: 5px;
  z-index: 1;
}

.sort-dropdown .dropdown-item {
  padding: 8px 16px;
  cursor: pointer;
}

.sort-dropdown .dropdown-item:hover {
  background-color: #f1f1f1;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 30px;
  margin: auto;
}

.product-card {
  width: calc(50% - 20px); 
  border: 1px solid #ccc;
  padding: 10px; 
  border-radius: 10px;
  transition: transform 0.5s ease;
  margin: auto;
}

.product-card:hover {
  transform: translateY(-10px);
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
