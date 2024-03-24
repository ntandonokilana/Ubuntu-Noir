<template>
    <div>
        <div class="container">
        <div class="wrapper" v-for="product in products" :key="product.iditems">
        <div class="product-img">
          <img :src="product.produrl" height="420" width="327">
        </div>
        <div class="product-info">
          <div class="product-text">
            <h1>{{ product.prodname }}</h1>
            <!-- <p>{{ product.description }}</p> -->
        </div>
          <p><span>R{{ product.amount }}</span></p>
        <div class="product-price-btn">
            <button @click="addToCart(product)" class="btn btn-light bg-black text-white m-3" href="#" role="button">
              Add to Cart
            </button>
            <router-link to="/product" class="nav-link link-light">
              <a class="btn btn-light bg-black text-white m-3" href="#" role="button">
                <i class="fa fa-shopping-cart"></i> return
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Swal from 'sweetalert2';

export default {
  computed: {
    ...mapState(['products'])
  },
  methods: {
    addToCart(product) {
      // You can dispatch an action to add the product to the cart
      // For example, assuming you have an action named addToCart in your store
      this.$store.dispatch('addToCart', product);
      
      // Show SweetAlert confirmation
      Swal.fire({
        icon: 'success',
        title: 'Added to Cart!',
        text: `${product.prodname} has been added to your cart.`,
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
};
</script>
