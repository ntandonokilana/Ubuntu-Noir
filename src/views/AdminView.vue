<template>
  <div>
    <table class="product-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.productID" :class="{ 'zebra-stripe': index % 2 === 0 }">
          <td>{{ index + 1 }}</td>
          <td><h2>{{ product.prodname }}</h2></td>
          <td><p>Category: {{ product.category }}</p></td>
          <td><p>Price: {{ product.amount }}</p></td>
          <td><img :src="product.produrl" alt="Product Image" class="product-image"></td>
          <td>
            <button class="edit-btn" @click="editProduct(product)">Edit</button>
            <button class="delete-btn" @click="deleteProduct(product._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    async editProduct(product) {
      // You can implement edit functionality here, like opening a modal or navigating to an edit page
      console.log("Editing product:", product);
    },
    async deleteProduct(prodID) {
      try {
        await axios.delete(`http://localhost:3000/products/${productID}`);
        // If successful, update the products list in the store without reloading the page
        this.$store.dispatch('fetchProducts');
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
  },
};
</script>

<style>
.zebra-stripe {
  background-color: rgb(182, 145, 119);
}

.product-table {
  width: 100%;
  border-collapse: collapse;
}

.product-table th,
.product-table td {
  padding: 12px;
  text-align: left;
}

.product-table th {
  background-color: #a39b4f;
}

.product-table .product-image {
  max-width: 100px;
  height: auto;
}

.edit-btn {
  padding: 8px 12px;
  margin-right: 5px;
  border: none;
  background-color: rgba(10, 166, 232, 0.99);
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}

.delete-btn {
  padding: 8px 12px;
  margin-right: 5px;
  border: none;
  background-color: #ff0000;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}

.edit-btn:hover {
  background-color: #d3d61f;
}

.delete-btn:hover {
  background-color: #d3d61f;
}
</style>