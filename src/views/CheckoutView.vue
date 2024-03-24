<template>
  <div class="container">
    <h1>CART</h1>
    <div v-if="cartItems.length === 0" class="empty-cart">
      Your cart is empty.
    </div>
    <table v-else>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in cartItems" :key="product.cartID">
          <td><img :src="product.produrl" alt="" class="product-image" /></td>
          <td>{{ product.prodname }}</td>
          <td>R{{ product.amount }}</td>
          <td>
            <button @click="removeFromCart(product.cartID)" class="remove-btn">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="cartItems.length > 0" class="cart-buttons">
      <router-link to="/checkout" class="checkout-btn">Checkout</router-link>
      <button @click="clearCart" class="clear-cart-btn">Clear Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    }
  },
  methods: {
    removeFromCart(cartID) {
      this.$store.dispatch('removeFromCart', { userID: 'user_id', productID: cartID });
    },
    clearCart() {
      this.$store.dispatch('clearCart');
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: left;
}

.product-image {
  width: 100px;
  height: auto;
}

.empty-cart {
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
}

.cart-buttons {
  margin-top: 20px;
  text-align: center;
}

.checkout-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 10px;
}

.clear-cart-btn {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.remove-btn {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}
</style>
