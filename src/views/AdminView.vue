<template>
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
          <td>
            <template v-if="!product.editing">{{ product.prodname }}</template>
            <input v-else type="text" v-model="product.editedName" class="input-field">
          </td>
          <td>
            <template v-if="!product.editing">{{ product.category }}</template>
            <input v-else type="text" v-model="product.editedCategory" class="input-field">
          </td>
          <td>
            <template v-if="!product.editing">{{ product.amount }}</template>
            <input v-else type="number" v-model.number="product.editedPrice" class="input-field">
          </td>
          <td>
            <template v-if="!product.editing"><img :src="product.produrl" alt="Product Image" class="product-image"></template>
            <input v-else type="text" v-model="product.editedImage" class="input-field">
          </td>
          <td>
            <template v-if="!product.editing">
              <button class="edit-btn" @click="editProduct(product)">Edit</button>
              <button class="delete-btn" @click="deleteProduct(product.productID)">Delete</button>
            </template>
            <template v-else>
              <button class="save-btn" @click="saveChanges(product)">Save</button>
              <button class="cancel-btn" @click="cancelEdit(product)">Cancel</button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    editProduct(product) {
      product.editing = true;
      product.editedName = product.prodname;
      product.editedCategory = product.category;
      product.editedPrice = product.amount;
      product.editedImage = product.produrl;
    },
    cancelEdit(product) {
      product.editing = false;
    },
    async saveChanges(product) {
      try {
        product.prodname = product.editedName;
        product.category = product.editedCategory;
        product.amount = product.editedPrice;
        product.produrl = product.editedImage;
        product.editing = false;
        // Send a request to update the product on the server if needed
        Swal.fire({
          icon: 'success',
          title: 'Product updated successfully',
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.error('Error updating product:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to update product!',
        });
      }
    },
    async deleteProduct(productId) {
      try {
        // Send a request to delete the product from the server if needed
        this.$store.dispatch('deleteProduct', productId);
        Swal.fire({
          icon: 'success',
          title: 'Product deleted successfully',
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.error('Error deleting product:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to delete product!',
        });
      }
    }
  }
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

@media screen and (max-width: 576px) {
  .admin-section {
    overflow-x: auto; /* Add horizontal scrolling for small screens */
  }

  .product-table {
    /* Add styles to make the table responsive */
    width: 100%;
    overflow: auto;
  }

  .product-table th,
  .product-table td {
    white-space: nowrap; 
  }

  .product-table th,
  .product-table td {
    padding: 8px;
    font-size: 14px;
  }

  .product-table .product-image {
    max-width: 80px; 
    height: auto; 
  }

  .edit-btn,
  .delete-btn {
    padding: 6px 10px; 
    margin-right: 3px; 
  }
}

</style>
