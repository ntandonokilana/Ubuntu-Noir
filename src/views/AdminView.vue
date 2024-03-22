<template>
  <div class="admin-page">
    <div class="admin-section">
      <h2>Products</h2>
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
              <button class="edit-btn" @click="showEditForm(product)">Edit</button>
              <button class="delete-btn" @click="deleteProduct(product._id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="showEdit">
      <h2>Edit Product</h2>
      <form @submit.prevent="updateProduct">
        <label for="editName">Name:</label>
        <input type="text" id="editName" v-model="editedProduct.prodname">
        
        <label for="editCategory">Category:</label>
        <input type="text" id="editCategory" v-model="editedProduct.category">
        
        <label for="editPrice">Price:</label>
        <input type="number" id="editPrice" v-model="editedProduct.amount">
        
        <button type="submit">Update</button>
        <button @click="cancelEdit">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      showEdit: false,
      editedProduct: {},
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    async showEditForm(product) {
      this.editedProduct = { ...product }; // Make a copy of the product to avoid directly modifying the original
      this.showEdit = true;
    },
    async updateProduct() {
      try {
        await axios.put(`http://localhost:3000/products/${this.editedProduct.productID}`, this.editedProduct);
        this.$store.dispatch('fetchProducts');
        this.showEdit = false; // Hide the edit form after updating
      } catch (error) {
        console.error('Error updating product:', error);
      }
    },
    cancelEdit() {
      this.showEdit = false; // Hide the edit form without updating
    },
    async deleteProduct(productID) {
      try {
        await axios.delete(`http://localhost:3000/products/${productID}`);
        this.$store.dispatch('fetchProducts');
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
  },
};
</script>

<style>
.admin-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.admin-section {
  margin: 20px;
}

.product-table,
.user-table {
  width: 100%;
  border-collapse: collapse;
}

.product-table th,
.product-table td,
.user-table th,
.user-table td {
  padding: 12px;
  text-align: left;
}

.product-table th,
.user-table th {
  background-color: #a39b4f;
}

.product-table .product-image,
.user-table .user-image {
  max-width: 100px;
  height: auto;
}

.edit-btn,
.delete-btn {
  padding: 8px 12px;
  margin-right: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}

.edit-btn {
  background-color: rgba(10, 166, 232, 0.99);
}

.delete-btn {
  background-color: #ff0000;
}

.edit-btn:hover,
.delete-btn:hover {
  background-color: #d3d61f;
}
</style>
