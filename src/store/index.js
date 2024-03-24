import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    Admin: null,
    products: null,
    users: null,
    cart: [] 
  },
  getters: {
    cartItems: state => state.cart
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    setUsers(state, data) {
      state.users = data;
    },
    setAdmin(state, data) {
      state.admin = data;
    },
    setCart(state, cartItems) {
      state.cart = cartItems;
    },
    deleteUser(state, userId) {
      state.users = state.users.filter(user => user.userID !== userId);
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const { data } = await axios.get('https://capstone-b.onrender.com/products');
        commit("setProducts", data); 
      } catch (e) {
        console.error(e);
      }
    },

    async fetchUsers({ commit }){
      try {
        const { data } = await axios.get('https://capstone-b.onrender.com/users');
        commit("setUsers", data);
      } catch (e){
        console.error(e);
      }
    },

    async fetchCart({ commit }, userID) {
      try {
        const { data } = await axios.get(`https://capstone-b.onrender.com/users/${userID}/cart`);
        commit("setCart", data);
      } catch (e) {
        console.error(e);
      }
    },

    async addToCart({ commit }, { userID, productID, quantity }) {
      try {
        await axios.post(`https://capstone-b.onrender.com/users/${userID}/cart`, { userID, productID, quantity });
        // After adding to cart, fetch the updated cart items
        commit("fetchCart", userID);
      } catch (e) {
        console.error(e);
      }
    },

    async removeFromCart({ commit }, { userID, productID }) {
      try {
        await axios.delete(`https://capstone-b.onrender.com/users/${userID}/cart/${productID}`);
        // After removing from cart, fetch the updated cart items
        commit("fetchCart", userID);
      } catch (e) {
        console.error(e);
      }
    },

    async updateCartItemQuantity({ commit }, { userID, productID, quantity }) {
      try {
        await axios.put(`https://capstone-b.onrender.com/users/${userID}/cart/${productID}`, { quantity });
        // After updating cart item quantity, fetch the updated cart items
        commit("fetchCart", userID);
      } catch (e) {
        console.error(e);
      }
    }
  },
  modules: {},
});